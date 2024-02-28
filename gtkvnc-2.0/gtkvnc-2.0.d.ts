/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gtkvnc-2.0-ambient.d.ts';
import './gtkvnc-2.0-import.d.ts';
/**
 * GtkVnc-2.0
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
import type GVnc from '@girs/gvnc-1.0';

export namespace GtkVnc {
    enum DisplayCredential {
        PASSWORD,
        USERNAME,
        CLIENTNAME,
        CA_CERT_DATA,
    }
    enum DisplayDepthColor {
        DEFAULT,
        FULL,
        MEDIUM,
        LOW,
        ULTRA_LOW,
    }
    enum DisplayKeyEvent {
        PRESS,
        RELEASE,
        CLICK,
    }
    module CairoFramebuffer {
        // Constructor properties interface
    }

    class CairoFramebuffer extends GVnc.BaseFramebuffer {
        // Own properties of GtkVnc-2.0.CairoFramebuffer

        surface: any;

        // Constructors of GtkVnc-2.0.CairoFramebuffer

        static ['new'](width: number, height: number, remoteFormat: GVnc.PixelFormat): CairoFramebuffer;

        // Owm methods of GtkVnc-2.0.CairoFramebuffer

        /**
         * Get the cairo surface in which the remote desktop is
         * being rendered.
         * @returns the cairo surface
         */
        get_surface(): cairo.Surface;
    }

    module Display {
        // Signal callback interfaces

        interface VncAuthCredential {
            (object: GObject.ValueArray): void;
        }

        interface VncAuthFailure {
            (object: string): void;
        }

        interface VncAuthUnsupported {
            (object: number): void;
        }

        interface VncBell {
            (): void;
        }

        interface VncConnected {
            (): void;
        }

        interface VncDesktopRename {
            (object: string): void;
        }

        interface VncDesktopResize {
            (object: number, p0: number): void;
        }

        interface VncDisconnected {
            (): void;
        }

        interface VncError {
            (object: string): void;
        }

        interface VncInitialized {
            (): void;
        }

        interface VncKeyboardGrab {
            (): void;
        }

        interface VncKeyboardUngrab {
            (): void;
        }

        interface VncPointerGrab {
            (): void;
        }

        interface VncPointerUngrab {
            (): void;
        }

        interface VncPowerControlFailed {
            (): void;
        }

        interface VncPowerControlInitialized {
            (): void;
        }

        interface VncServerCutText {
            (object: string): void;
        }

        // Constructor properties interface
    }

    class Display extends Gtk.DrawingArea {
        // Own properties of GtkVnc-2.0.Display

        allow_resize: boolean;
        allowResize: boolean;
        readonly connection: GVnc.Connection;
        depth: DisplayDepthColor;
        force_size: boolean;
        forceSize: boolean;
        grab_keyboard: boolean;
        grabKeyboard: boolean;
        grab_keys: GrabSequence;
        grabKeys: GrabSequence;
        grab_pointer: boolean;
        grabPointer: boolean;
        readonly height: number;
        keep_aspect_ratio: boolean;
        keepAspectRatio: boolean;
        local_pointer: boolean;
        localPointer: boolean;
        lossy_encoding: boolean;
        lossyEncoding: boolean;
        readonly name: string;
        read_only: boolean;
        readOnly: boolean;
        rotation: number;
        scaling: boolean;
        shared_flag: boolean;
        sharedFlag: boolean;
        smoothing: boolean;
        readonly width: number;
        zoom_level: number;
        zoomLevel: number;

        // Constructors of GtkVnc-2.0.Display

        static ['new'](): Display;

        // Owm methods of GtkVnc-2.0.Display

        /**
         * Get the array of command line option entries containing
         * VNC specific otions
         */
        static get_option_entries(): GLib.OptionEntry[];
        /**
         * Get a command line option group containing VNC specific
         * options.
         */
        static get_option_group(): GLib.OptionGroup;

        // Owm methods of GtkVnc-2.0.Display

        client_cut_text(text: string): void;
        /**
         * Request that the connection to the remote display
         * is closed. The actual close will complete asynchronously
         * and the "vnc-disconnected" signal will be emitted once
         * complete.
         */
        close(): void;
        /**
         * If `enable` is TRUE, immediately grab the pointer.
         * If `enable` is FALSE, immediately ungrab the pointer.
         * This overrides any automatic grabs that may have
         * been done.
         * @param enable TRUE to force pointer grabbing, FALSE otherwise
         */
        force_grab(enable: boolean): void;
        /**
         * Determine whether widget size is used to request
         * rsize of the remote desktop
         * @returns TRUE if allow resize is enabled, FALSE otherwise
         */
        get_allow_resize(): boolean;
        /**
         * Get the VNC connection object associated with the
         * display
         * @returns the connection object
         */
        get_connection(): GVnc.Connection;
        /**
         * Get the desired colour depth
         * @returns the color depth
         */
        get_depth(): DisplayDepthColor;
        /**
         * Determine whether the widget size is being forced
         * to match the desktop size
         * @returns TRUE if force size is enabled, FALSE otherwise
         */
        get_force_size(): boolean;
        /**
         * Get the current grab key sequence
         * @returns the current grab keys
         */
        get_grab_keys(): GrabSequence;
        /**
         * Get the height of the remote desktop. This is only
         * valid after the "vnc-initialized" signal has been
         * emitted
         * @returns the remote desktop height
         */
        get_height(): number;
        /**
         * Determine whether the framebuffer aspect ratio is preserved
         * when scaling.
         * @returns TRUE if aspect ratio is preserved, FALSE otherwise
         */
        get_keep_aspect_ratio(): boolean;
        /**
         * Determine if the keyboard will be grabbed when the
         * widget has input focus.
         * @returns TRUE if the keyboard will be grabbed, FALSE otherwise
         */
        get_keyboard_grab(): boolean;
        /**
         * Determine whether lossy framebuffer update encodings
         * are permitted
         * @returns TRUE if lossy encodings are permitted, FALSE otherwie
         */
        get_lossy_encoding(): boolean;
        /**
         * Get the name of the remote desktop. This is only
         * valid after the "vnc-initialized" signal has been
         * emitted
         * @returns the remote desktop name
         */
        get_name(): string;
        /**
         * Take a screenshot of the display.
         * @returns a #GdkPixbuf with the screenshot image buffer
         */
        get_pixbuf(): GdkPixbuf.Pixbuf;
        /**
         * Determine if the mouse pointer will be grabbed
         * on first click
         * @returns TRUE if the pointer will be grabbed, FALSE otherwise
         */
        get_pointer_grab(): boolean;
        /**
         * Determine if a local pointer will be shown
         * @returns TRUE if a local pointer is shown, FALSE otherwise
         */
        get_pointer_local(): boolean;
        /**
         * Determine if the widget will operate in read-only
         * mode, denying keyboard/mouse inputs
         * @returns TRUE if in read-only mode, FALSE otherwise
         */
        get_read_only(): boolean;
        /**
         * Determine the current rotation angle of the remote desktop.
         * @returns the rotation angle in clockwise direction
         */
        get_rotation(): number;
        /**
         * Determine whether the widget is permitted to
         * scale the remote desktop to fit the current
         * widget size.
         * @returns TRUE if scaling is permitted, FALSE otherwise
         */
        get_scaling(): boolean;
        /**
         * Determine if other clients are permitted to
         * share the VNC connection
         * @returns TRUE if sharing is permittted, FALSE otherwise
         */
        get_shared_flag(): boolean;
        /**
         * Determine whether pixels are smoothly interpolated when
         * scaling.
         * @returns TRUE if smoothing is enabled, FALSE otherwise
         */
        get_smoothing(): boolean;
        /**
         * Get the width of the remote desktop. This is only
         * valid after the "vnc-initialized" signal has been
         * emitted
         * @returns the remote desktop width
         */
        get_width(): number;
        /**
         * Determine the current constant scaling factor.
         * @returns the zoom percentage level between 10-400
         */
        get_zoom_level(): number;
        /**
         * Check if the connection for the display is currently open
         * @returns TRUE if open, FALSE if closing/closed
         */
        is_open(): boolean;
        /**
         * Determine if the pointer is operating in absolute
         * mode. This is only valid after the "vnc-initialized"
         * signal has been emitted
         * @returns TRUE if in absolute mode, FALSE for relative mode
         */
        is_pointer_absolute(): boolean;
        /**
         * Open a socket connection to server identified by `addr`.
         * `addr` may refer to either a TCP address (IPv4/6) or
         * a UNIX socket address. The `hostname` provided should
         * reflect the name of the host that the `addr` provides a
         * connection to, if it is not already available in `addr`.
         * For example, if `addr` points to a proxy server, then
         * `hostname` can be used to provide the name of the final
         * endpoint. This will be used by some authentication
         * schemes, for example x509 certificate validation
         * against `hostname`.
         * @param addr the socket address
         * @param hostname the hostname
         * @returns TRUE if a connection was opened, FALSE if already open
         */
        open_addr(addr: Gio.SocketAddress, hostname?: string | null): boolean;
        /**
         * Open a connection using `fd` as the transport. If `fd`
         * refers to a TCP connection, it is recommended to use
         * vnc_display_open_fd_with_hostname instead, to
         * provide the remote hostname. This allows use of
         * x509 based authentication which requires a hostname
         * to be available.
         * @param fd file descriptor to use for the connection
         * @returns TRUE if a connection was opened, FALSE if already open
         */
        open_fd(fd: number): boolean;
        /**
         * Open a connection using `fd` as the transport. The
         * `hostname` provided should reflect the name of the
         * host that the `fd` provides a connection to. This
         * will be used by some authentication schemes, for
         * example x509 certificate validation against `hostname`.
         * @param fd file descriptor to use for the connection
         * @param hostname the host associated with the connection
         * @returns TRUE if a connection was opened, FALSE if already open
         */
        open_fd_with_hostname(fd: number, hostname?: string | null): boolean;
        /**
         * Open a TCP connection to the remote desktop at `host`
         * listening on `port`.
         * @param host the host name or IP address
         * @param port the service name or port number
         * @returns TRUE if a connection was opened, FALSE if already open
         */
        open_host(host: string, port: string): boolean;
        request_update(): boolean;
        /**
         * Send keyval click events to the display. Al the
         * key press events will be sent first and then all
         * the key release events.
         *
         * `keyvals` should contain the X11 key value constants
         * @param keyvals Keyval array
         */
        send_keys(keyvals: number[]): void;
        /**
         * Sends key events to the remote server. `keyvals`
         * should contain X11 key code values. These will
         * be automatically converted to XT scancodes if
         * needed
         *
         * If `kind` is VNC_DISPLAY_KEY_EVENT_CLICK then all
         * the key press events will be sent first, followed
         * by all the key release events.
         * @param keyvals Keyval array
         * @param kind the type of event to send
         */
        send_keys_ex(keyvals: number[], kind: DisplayKeyEvent): void;
        /**
         * Move the remote pointer to position (`x,` `y)` and set the
         * button state to `button_mask`.  This method will only
         * work if the desktop is using absolute pointer mode. It
         * will be a no-op if in relative pointer mode.
         * @param x the desired horizontal position
         * @param y the desired vertical position
         * @param button_mask the state of the buttons
         */
        send_pointer(x: number, y: number, button_mask: number): void;
        /**
         * Set whether changes in the widget size will be translated
         * into requests to resize the remote desktop. Resizing of
         * the remote desktop is not guaranteed to be honoured by
         * servers, but when it is, it will avoid the need to do
         * scaling.
         * @param enable TRUE to allow the desktop resize, FALSE otherwise
         */
        set_allow_resize(enable: boolean): void;
        /**
         * Sets the value of the authentication credential
         * `type` to the string `data`.
         *
         * `type` is one of the VncConnectionCredential enum vlaues
         * @param type the authentication credential type
         * @param data the value associated with the credential
         * @returns TRUE if an error occurs, FALSE otherwise
         */
        set_credential(type: number, data: string): boolean;
        /**
         * Set the desired colour depth. Higher quality colour
         * depths will require greater network bandwidth. The
         * colour depth must be set prior to connecting to the
         * remote server
         * @param depth the desired colour depth
         */
        set_depth(depth: DisplayDepthColor): void;
        /**
         * Set whether the widget size will be forced to match the
         * remote desktop size. If the widget size does not match
         * the remote desktop size, and scaling is disabled, some
         * of the remote desktop may be hidden, or black borders
         * may be drawn.
         * @param enable TRUE to force the widget size, FALSE otherwise
         */
        set_force_size(enable: boolean): void;
        /**
         * Set the sequence of keys that must be pressed to
         * activate keyborad and pointer grab
         * @param seq the new grab sequence
         */
        set_grab_keys(seq: GrabSequence): void;
        /**
         * Set whether the aspect ratio of the framebuffer is preserved
         * when scaling.
         * @param enable TRUE to keep aspect ratio, FALSE otherwise
         */
        set_keep_aspect_ratio(enable: boolean): void;
        /**
         * Set whether the widget will grab the keyboard when it
         * has focus. Grabbing the keyboard allows it to intercept
         * special key sequences, ensuring they get sent to the
         * remote desktop, rather than intepreted locally.
         * @param enable TRUE to enable keyboard grab, FALSE otherwise
         */
        set_keyboard_grab(enable: boolean): void;
        /**
         * Set whether the client is willing to accept lossy
         * framebuffer update encodings. Lossy encodings can
         * improve performance by lowering network bandwidth
         * requirements, with a cost that the display received
         * by the client will not be pixel perfect
         * @param enable TRUE to permit lossy encodings, FALSE otherwise
         */
        set_lossy_encoding(enable: boolean): void;
        /**
         * Set whether the widget will automatically grab the mouse
         * pointer upon a button click
         * @param enable TRUE to enable automatic pointer grab, FALSE otherwise
         */
        set_pointer_grab(enable: boolean): void;
        /**
         * If `enable` is TRUE, then a local mouse cursor will be
         * made visible. If `enable` is FALSE, the local mouse
         * cursor will be hidden.
         * @param enable TRUE to show a local cursor, FALSE otherwise
         */
        set_pointer_local(enable: boolean): void;
        /**
         * Set whether the widget is running in read-only mode. In
         * read-only mode, keyboard and mouse events will not be
         * sent to the remote desktop server. The widget will merely
         * display activity from the server.
         * @param enable TRUE to enable read-only mode, FALSE otherwise
         */
        set_read_only(enable: boolean): void;
        /**
         * Set the rotation angle to view the display of the remote desktop, in
         * clockwise direction.
         * @param rotation The angle of rotation, degrees clockwise.
         */
        set_rotation(rotation: number): void;
        /**
         * Set whether the remote desktop contents is automatically
         * scaled to fit the available widget size, or whether it
         * will be rendered at 1:1 size
         * @param enable TRUE to allow scaling the desktop to fit, FALSE otherwise
         * @returns TRUE always
         */
        set_scaling(enable: boolean): boolean;
        /**
         * Set the shared state for the connection. A TRUE value
         * allow allow this client to co-exist with other existing
         * clients. A FALSE value will cause other clients to be
         * dropped
         * @param shared the new sharing state
         */
        set_shared_flag(shared: boolean): void;
        /**
         * Set whether pixels are smoothly interpolated when scaling,
         * to avoid aliasing.
         * @param enable TRUE to enable smooth scaling, FALSE otherwise
         */
        set_smoothing(enable: boolean): void;
        /**
         * Requests a constant scaling factor to be applied to the remote
         * desktop. The `zoom` value is a percentage in the range 10-400.
         *
         * If scaling mode is not active, then this results in the remote
         * desktop always being rendered at the requested zoom level.
         *
         * If scaling mode is active, then the remote desktop will be
         * scaled to fit the widget regardless of the zoom level.
         *
         * In both cases, when the remote desktop size changes, the
         * widget preferred size will reflect the zoom level.
         * @param zoom the zoom percentage level
         */
        set_zoom_level(zoom: number): void;
    }

    class CairoFramebufferClass {}

    class CairoFramebufferPrivate {}

    class DisplayClass {}

    class DisplayPrivate {}

    class GrabSequence {
        // Own fields of GtkVnc-2.0.GrabSequence

        nkeysyms: number;
        keysyms: number;

        // Constructors of GtkVnc-2.0.GrabSequence

        constructor(
            properties?: Partial<{
                nkeysyms: number;
                keysyms: number;
            }>,
        );

        static ['new'](keysyms: number[]): GrabSequence;

        static new_from_string(str: string): GrabSequence;

        // Owm methods of GtkVnc-2.0.GrabSequence

        /**
         * Convert the grab sequence to a string of keysym names
         * @returns the grab sequence as a string
         */
        as_string(): string;
        /**
         * Allocate a new grab sequence struct, initalizing it
         * with a copy of data  from `sequence`
         *
         * The returned struct must be freed by calling
         * vnc_grab_sequence_free when no longer required
         * @returns the grab sequence
         */
        copy(): GrabSequence;
        /**
         * Release memory associated with the grab sequence
         * `sequence`.
         */
        free(): void;
        /**
         * Obtain the nth key symbol in the sequence
         * @param n the index of the key symbol to obtain
         * @returns the nth key symbol
         */
        get_nth(n: number): number;
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

export default GtkVnc;
// END
