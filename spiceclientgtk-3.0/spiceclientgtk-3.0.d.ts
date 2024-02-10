/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './spiceclientgtk-3.0-ambient.d.ts';
import './spiceclientgtk-3.0-import.d.ts';
/**
 * SpiceClientGtk-3.0
 */

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
import type cairo from '@girs/cairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Atk from '@girs/atk-1.0';

export namespace SpiceClientGtk {
    /**
     * Constants for key events.
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
    module Display {
        // Signal callback interfaces

        interface GrabKeysPressed {
            (): void;
        }

        interface KeyboardGrab {
            (status: number): void;
        }

        interface MouseGrab {
            (status: number): void;
        }

        // Constructor properties interface
    }

    /**
     * The #SpiceDisplay struct is opaque and should not be accessed directly.
     */
    class Display extends Gtk.EventBox {
        // Own properties of SpiceClientGtk-3.0.Display

        /**
         * channel-id for this #SpiceDisplay
         */
        channel_id: number;
        /**
         * channel-id for this #SpiceDisplay
         */
        channelId: number;
        /**
         * Disable all keyboard &amp; mouse inputs.
         */
        disable_inputs: boolean;
        /**
         * Disable all keyboard &amp; mouse inputs.
         */
        disableInputs: boolean;
        grab_keyboard: boolean;
        grabKeyboard: boolean;
        grab_mouse: boolean;
        grabMouse: boolean;
        /**
         * Delay in ms of non-modifiers key press events. If the key is
         * released before this delay, a single press &amp; release event is
         * sent to the server. If the key is pressed longer than the
         * keypress-delay, the server will receive the delayed press
         * event, and a following release event when the key is released.
         */
        keypress_delay: number;
        /**
         * Delay in ms of non-modifiers key press events. If the key is
         * released before this delay, a single press &amp; release event is
         * sent to the server. If the key is pressed longer than the
         * keypress-delay, the server will receive the delayed press
         * event, and a following release event when the key is released.
         */
        keypressDelay: number;
        /**
         * Select monitor from #SpiceDisplay to show.
         * The value -1 means the whole display is shown.
         * By default, the monitor 0 is selected.
         */
        monitor_id: number;
        /**
         * Select monitor from #SpiceDisplay to show.
         * The value -1 means the whole display is shown.
         * By default, the monitor 0 is selected.
         */
        monitorId: number;
        /**
         * If scaling, only scale down, never up.
         */
        only_downscale: boolean;
        /**
         * If scaling, only scale down, never up.
         */
        onlyDownscale: boolean;
        /**
         * Indicate whether the display is ready to be shown. It takes
         * into account several conditions, such as the channel display
         * "mark" state, whether the monitor area is visible..
         */
        readonly ready: boolean;
        resize_guest: boolean;
        resizeGuest: boolean;
        scaling: boolean;
        /**
         * #SpiceSession for this #SpiceDisplay
         */
        session: SpiceClientGLib.Session;
        /**
         * Zoom level in percentage, from 10 to 400. Default to 100.
         * (this option is only supported with cairo backend when scaling
         * is enabled)
         */
        zoom_level: number;
        /**
         * Zoom level in percentage, from 10 to 400. Default to 100.
         * (this option is only supported with cairo backend when scaling
         * is enabled)
         */
        zoomLevel: number;

        // Constructors of SpiceClientGtk-3.0.Display

        static ['new'](session: SpiceClientGLib.Session, channel_id: number): Display;

        static new_with_monitor(session: SpiceClientGLib.Session, channel_id: number, monitor_id: number): Display;

        // Owm methods of SpiceClientGtk-3.0.Display

        /**
         * Finds the current grab key combination for the `display`.
         * @returns the current grab key combination.
         */
        get_grab_keys(): GrabSequence;
        /**
         * Take a screenshot of the display.
         * @returns a #GdkPixbuf with the screenshot image buffer
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
         * @param kind #SpiceDisplayKeyEvent action
         */
        send_keys(keyvals: number[], kind: DisplayKeyEvent): void;
        /**
         * Set the key combination to grab/ungrab the keyboard. The default is
         * "Control L + Alt L".
         * @param seq key sequence
         */
        set_grab_keys(seq: GrabSequence): void;
    }

    module GtkSession {
        // Constructor properties interface
    }

    /**
     * The #SpiceGtkSession struct is opaque and should not be accessed directly.
     */
    class GtkSession extends GObject.Object {
        // Own properties of SpiceClientGtk-3.0.GtkSession

        /**
         * When this is true the clipboard gets automatically shared between host
         * and guest.
         */
        auto_clipboard: boolean;
        /**
         * When this is true the clipboard gets automatically shared between host
         * and guest.
         */
        autoClipboard: boolean;
        /**
         * Automatically redirect newly plugged in USB devices. Note the auto
         * redirection only happens when a #SpiceDisplay associated with the
         * session had keyboard focus.
         */
        auto_usbredir: boolean;
        /**
         * Automatically redirect newly plugged in USB devices. Note the auto
         * redirection only happens when a #SpiceDisplay associated with the
         * session had keyboard focus.
         */
        autoUsbredir: boolean;
        /**
         * Returns %TRUE if the pointer is currently grabbed by this session.
         */
        readonly pointer_grabbed: boolean;
        /**
         * Returns %TRUE if the pointer is currently grabbed by this session.
         */
        readonly pointerGrabbed: boolean;
        /**
         * #SpiceSession this #SpiceGtkSession is associated with
         */
        session: SpiceClientGLib.Session;
        /**
         * Automatically sync modifiers (Caps, Num and Scroll locks) with the guest.
         */
        sync_modifiers: boolean;
        /**
         * Automatically sync modifiers (Caps, Num and Scroll locks) with the guest.
         */
        syncModifiers: boolean;

        // Owm methods of SpiceClientGtk-3.0.GtkSession

        /**
         * Gets the #SpiceGtkSession associated with the passed in #SpiceSession.
         * A new #SpiceGtkSession instance will be created the first time this
         * function is called for a certain #SpiceSession.
         *
         * Note that this function returns a weak reference, which should not be used
         * after the #SpiceSession itself has been unref-ed by the caller.
         * @param session #SpiceSession for which to get the #SpiceGtkSession
         */
        static get(session: SpiceClientGLib.Session): GtkSession;

        // Owm methods of SpiceClientGtk-3.0.GtkSession

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

    module UsbDeviceWidget {
        // Signal callback interfaces

        interface ConnectFailed {
            (device: SpiceClientGLib.UsbDevice, error: GLib.Error): void;
        }

        // Constructor properties interface
    }

    /**
     * The #SpiceUsbDeviceWidget struct is opaque and should not be accessed directly.
     */
    class UsbDeviceWidget extends Gtk.Box {
        // Own properties of SpiceClientGtk-3.0.UsbDeviceWidget

        /**
         * Format string to pass to spice_usb_device_get_description() for getting
         * the device USB descriptions.
         */
        device_format_string: string;
        /**
         * Format string to pass to spice_usb_device_get_description() for getting
         * the device USB descriptions.
         */
        deviceFormatString: string;
        /**
         * #SpiceSession this #SpiceUsbDeviceWidget is associated with
         */
        session: SpiceClientGLib.Session;

        // Constructors of SpiceClientGtk-3.0.UsbDeviceWidget

        static ['new'](session: SpiceClientGLib.Session, device_format_string?: string | null): UsbDeviceWidget;
    }

    /**
     * Class structure for #SpiceDisplay. It is opaque and should not be accessed directly.
     */
    class DisplayClass {}

    /**
     * An opaque type that represents a grab sequence.
     */
    class GrabSequence {
        // Constructors of SpiceClientGtk-3.0.GrabSequence

        constructor(keysyms: number[]);

        static ['new'](keysyms: number[]): GrabSequence;

        static new_from_string(str: string): GrabSequence;

        // Owm methods of SpiceClientGtk-3.0.GrabSequence

        /**
         * Creates a string representing the `sequence`.
         * @returns a newly allocated string representing the key sequence
         */
        as_string(): string;
        /**
         * Creates a copy of the `sequence`.
         * @returns a copy of @sequence
         */
        copy(): GrabSequence;
        /**
         * Free `sequence`.
         */
        free(): void;
    }

    /**
     * Class structure for #SpiceGtkSession. It is opaque and should not be accessed directly.
     */
    class GtkSessionClass {}

    /**
     * Class structure for #SpiceUsbDeviceWidget. It is opaque and should not be accessed directly.
     */
    class UsbDeviceWidgetClass {}

    class UsbDeviceWidgetPrivate {}

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
