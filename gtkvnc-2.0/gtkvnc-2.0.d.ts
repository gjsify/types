
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */
/**
 * GtkVnc-2.0
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
import type GVnc from '@girs/gvnc-1.0';

export namespace GtkVnc {

enum DisplayCredential {
    PASSWORD,
    USERNAME,
    CLIENTNAME,
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

    interface ConstructorProperties extends GVnc.Framebuffer.ConstructorProperties, GVnc.BaseFramebuffer.ConstructorProperties {

        // Own constructor properties of GtkVnc-2.0.GtkVnc.CairoFramebuffer

        surface?: any | null
    }

}

interface CairoFramebuffer extends GVnc.Framebuffer {

    // Own properties of GtkVnc-2.0.GtkVnc.CairoFramebuffer

    readonly surface: any

    // Own fields of GtkVnc-2.0.GtkVnc.CairoFramebuffer

    parent: GVnc.BaseFramebuffer & GObject.Object
    priv: any

    // Owm methods of GtkVnc-2.0.GtkVnc.CairoFramebuffer

    /**
     * Get the cairo surface in which the remote desktop is
     * being rendered.
     * @returns the cairo surface
     */
    get_surface(): cairo.Surface

    // Class property signals of GtkVnc-2.0.GtkVnc.CairoFramebuffer

    connect(sigName: "notify::surface", callback: (($obj: CairoFramebuffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::surface", callback: (($obj: CairoFramebuffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::surface", ...args: any[]): void
    connect(sigName: "notify::buffer", callback: (($obj: CairoFramebuffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer", callback: (($obj: CairoFramebuffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::color-map", callback: (($obj: CairoFramebuffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color-map", callback: (($obj: CairoFramebuffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::color-map", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: CairoFramebuffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CairoFramebuffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::local-format", callback: (($obj: CairoFramebuffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-format", callback: (($obj: CairoFramebuffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::local-format", ...args: any[]): void
    connect(sigName: "notify::remote-format", callback: (($obj: CairoFramebuffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remote-format", callback: (($obj: CairoFramebuffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::remote-format", ...args: any[]): void
    connect(sigName: "notify::rowstride", callback: (($obj: CairoFramebuffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rowstride", callback: (($obj: CairoFramebuffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rowstride", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: CairoFramebuffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CairoFramebuffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CairoFramebuffer extends GVnc.BaseFramebuffer {

    // Own properties of GtkVnc-2.0.GtkVnc.CairoFramebuffer

    static name: string
    static $gtype: GObject.GType<CairoFramebuffer>

    // Constructors of GtkVnc-2.0.GtkVnc.CairoFramebuffer

    constructor(config?: CairoFramebuffer.ConstructorProperties) 
    /**
     * Allocate a new framebuffer object which will render the
     * remote desktop into a cairo image surface (`width` * `height)`
     * in size.
     * @constructor 
     * @param width the remote desktop width
     * @param height the remote desktop height
     * @param remoteFormat the remote pixel format
     * @returns the new frame buffer object
     */
    constructor(width: number, height: number, remoteFormat: GVnc.PixelFormat) 
    /**
     * Allocate a new framebuffer object which will render the
     * remote desktop into a cairo image surface (`width` * `height)`
     * in size.
     * @constructor 
     * @param width the remote desktop width
     * @param height the remote desktop height
     * @param remoteFormat the remote pixel format
     * @returns the new frame buffer object
     */
    static new(width: number, height: number, remoteFormat: GVnc.PixelFormat): CairoFramebuffer

    // Overloads of new

    /**
     * Allocate a new general purpose framebuffer object storing
     * screen updates in `buffer`. `buffer` must be `height` *
     * `rowstride` bytes in size. The returned object will
     * store a pointer to `buffer,` so it should not be free'd
     * for as long as the framebuffer object exists
     * @constructor 
     * @param buffer the buffer representing the screen
     * @param width the width of the screen
     * @param height the height of the screen
     * @param rowstride the number of bytes per line in `buffer`
     * @param localFormat the format for data stored in `buffer`
     * @param remoteFormat the format for data before storage in `buffer`
     * @returns the new framebuffer
     */
    static new(buffer: Uint8Array, width: number, height: number, rowstride: number, localFormat: GVnc.PixelFormat, remoteFormat: GVnc.PixelFormat): GVnc.BaseFramebuffer
    _init(config?: CairoFramebuffer.ConstructorProperties): void
}

module Display {

    // Signal callback interfaces

    /**
     * Signal callback interface for `vnc-auth-credential`
     */
    interface VncAuthCredentialSignalCallback {
        ($obj: Display, object: GObject.ValueArray): void
    }

    /**
     * Signal callback interface for `vnc-auth-failure`
     */
    interface VncAuthFailureSignalCallback {
        ($obj: Display, object: string | null): void
    }

    /**
     * Signal callback interface for `vnc-auth-unsupported`
     */
    interface VncAuthUnsupportedSignalCallback {
        ($obj: Display, object: number): void
    }

    /**
     * Signal callback interface for `vnc-bell`
     */
    interface VncBellSignalCallback {
        ($obj: Display): void
    }

    /**
     * Signal callback interface for `vnc-connected`
     */
    interface VncConnectedSignalCallback {
        ($obj: Display): void
    }

    /**
     * Signal callback interface for `vnc-desktop-rename`
     */
    interface VncDesktopRenameSignalCallback {
        ($obj: Display, object: string | null): void
    }

    /**
     * Signal callback interface for `vnc-desktop-resize`
     */
    interface VncDesktopResizeSignalCallback {
        ($obj: Display, object: number, p0: number): void
    }

    /**
     * Signal callback interface for `vnc-disconnected`
     */
    interface VncDisconnectedSignalCallback {
        ($obj: Display): void
    }

    /**
     * Signal callback interface for `vnc-error`
     */
    interface VncErrorSignalCallback {
        ($obj: Display, object: string | null): void
    }

    /**
     * Signal callback interface for `vnc-initialized`
     */
    interface VncInitializedSignalCallback {
        ($obj: Display): void
    }

    /**
     * Signal callback interface for `vnc-keyboard-grab`
     */
    interface VncKeyboardGrabSignalCallback {
        ($obj: Display): void
    }

    /**
     * Signal callback interface for `vnc-keyboard-ungrab`
     */
    interface VncKeyboardUngrabSignalCallback {
        ($obj: Display): void
    }

    /**
     * Signal callback interface for `vnc-pointer-grab`
     */
    interface VncPointerGrabSignalCallback {
        ($obj: Display): void
    }

    /**
     * Signal callback interface for `vnc-pointer-ungrab`
     */
    interface VncPointerUngrabSignalCallback {
        ($obj: Display): void
    }

    /**
     * Signal callback interface for `vnc-power-control-failed`
     */
    interface VncPowerControlFailedSignalCallback {
        ($obj: Display): void
    }

    /**
     * Signal callback interface for `vnc-power-control-initialized`
     */
    interface VncPowerControlInitializedSignalCallback {
        ($obj: Display): void
    }

    /**
     * Signal callback interface for `vnc-server-cut-text`
     */
    interface VncServerCutTextSignalCallback {
        ($obj: Display, object: string | null): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.DrawingArea.ConstructorProperties {

        // Own constructor properties of GtkVnc-2.0.GtkVnc.Display

        allow_resize?: boolean | null
        depth?: DisplayDepthColor | null
        force_size?: boolean | null
        grab_keyboard?: boolean | null
        grab_keys?: GrabSequence | null
        grab_pointer?: boolean | null
        keep_aspect_ratio?: boolean | null
        local_pointer?: boolean | null
        lossy_encoding?: boolean | null
        read_only?: boolean | null
        rotation?: number | null
        scaling?: boolean | null
        shared_flag?: boolean | null
        smoothing?: boolean | null
        zoom_level?: number | null
    }

}

interface Display extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of GtkVnc-2.0.GtkVnc.Display

    allow_resize: boolean
    readonly connection: GVnc.Connection
    depth: DisplayDepthColor
    force_size: boolean
    grab_keyboard: boolean
    grab_keys: GrabSequence
    grab_pointer: boolean
    readonly height: number
    keep_aspect_ratio: boolean
    local_pointer: boolean
    lossy_encoding: boolean
    readonly name: any
    read_only: boolean
    rotation: number
    scaling: boolean
    shared_flag: boolean
    smoothing: boolean
    readonly width: number
    zoom_level: number

    // Own fields of GtkVnc-2.0.GtkVnc.Display

    parent: Gtk.DrawingArea & Gtk.Container
    priv: DisplayPrivate

    // Owm methods of GtkVnc-2.0.GtkVnc.Display

    client_cut_text(text: string | null): void
    /**
     * Request that the connection to the remote display
     * is closed. The actual close will complete asynchronously
     * and the "vnc-disconnected" signal will be emitted once
     * complete.
     */
    close(): void
    /**
     * If `enable` is TRUE, immediately grab the pointer.
     * If `enable` is FALSE, immediately ungrab the pointer.
     * This overrides any automatic grabs that may have
     * been done.
     * @param enable TRUE to force pointer grabbing, FALSE otherwise
     */
    force_grab(enable: boolean): void
    /**
     * Determine whether widget size is used to request
     * rsize of the remote desktop
     * @returns TRUE if allow resize is enabled, FALSE otherwise
     */
    get_allow_resize(): boolean
    /**
     * Get the VNC connection object associated with the
     * display
     * @returns the connection object
     */
    get_connection(): GVnc.Connection
    /**
     * Get the desired colour depth
     * @returns the color depth
     */
    get_depth(): DisplayDepthColor
    /**
     * Determine whether the widget size is being forced
     * to match the desktop size
     * @returns TRUE if force size is enabled, FALSE otherwise
     */
    get_force_size(): boolean
    /**
     * Get the current grab key sequence
     * @returns the current grab keys
     */
    get_grab_keys(): GrabSequence
    /**
     * Get the height of the remote desktop. This is only
     * valid after the "vnc-initialized" signal has been
     * emitted
     * @returns the remote desktop height
     */
    get_height(): number
    /**
     * Determine whether the framebuffer aspect ratio is preserved
     * when scaling.
     * @returns TRUE if aspect ratio is preserved, FALSE otherwise
     */
    get_keep_aspect_ratio(): boolean
    /**
     * Determine if the keyboard will be grabbed when the
     * widget has input focus.
     * @returns TRUE if the keyboard will be grabbed, FALSE otherwise
     */
    get_keyboard_grab(): boolean
    /**
     * Determine whether lossy framebuffer update encodings
     * are permitted
     * @returns TRUE if lossy encodings are permitted, FALSE otherwie
     */
    get_lossy_encoding(): boolean
    /**
     * Get the name of the remote desktop. This is only
     * valid after the "vnc-initialized" signal has been
     * emitted
     * @returns the remote desktop name
     */
    get_name(): string | null
    /**
     * Take a screenshot of the display.
     * @returns a #GdkPixbuf with the screenshot image buffer
     */
    get_pixbuf(): GdkPixbuf.Pixbuf
    /**
     * Determine if the mouse pointer will be grabbed
     * on first click
     * @returns TRUE if the pointer will be grabbed, FALSE otherwise
     */
    get_pointer_grab(): boolean
    /**
     * Determine if a local pointer will be shown
     * @returns TRUE if a local pointer is shown, FALSE otherwise
     */
    get_pointer_local(): boolean
    /**
     * Determine if the widget will operate in read-only
     * mode, denying keyboard/mouse inputs
     * @returns TRUE if in read-only mode, FALSE otherwise
     */
    get_read_only(): boolean
    /**
     * Determine the current rotation angle of the remote desktop.
     * @returns the rotation angle in clockwise direction
     */
    get_rotation(): number
    /**
     * Determine whether the widget is permitted to
     * scale the remote desktop to fit the current
     * widget size.
     * @returns TRUE if scaling is permitted, FALSE otherwise
     */
    get_scaling(): boolean
    /**
     * Determine if other clients are permitted to
     * share the VNC connection
     * @returns TRUE if sharing is permittted, FALSE otherwise
     */
    get_shared_flag(): boolean
    /**
     * Determine whether pixels are smoothly interpolated when
     * scaling.
     * @returns TRUE if smoothing is enabled, FALSE otherwise
     */
    get_smoothing(): boolean
    /**
     * Get the width of the remote desktop. This is only
     * valid after the "vnc-initialized" signal has been
     * emitted
     * @returns the remote desktop width
     */
    get_width(): number
    /**
     * Determine the current constant scaling factor.
     * @returns the zoom percentage level between 10-400
     */
    get_zoom_level(): number
    /**
     * Check if the connection for the display is currently open
     * @returns TRUE if open, FALSE if closing/closed
     */
    is_open(): boolean
    /**
     * Determine if the pointer is operating in absolute
     * mode. This is only valid after the "vnc-initialized"
     * signal has been emitted
     * @returns TRUE if in absolute mode, FALSE for relative mode
     */
    is_pointer_absolute(): boolean
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
    open_addr(addr: Gio.SocketAddress, hostname: string | null): boolean
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
    open_fd(fd: number): boolean
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
    open_fd_with_hostname(fd: number, hostname: string | null): boolean
    /**
     * Open a TCP connection to the remote desktop at `host`
     * listening on `port`.
     * @param host the host name or IP address
     * @param port the service name or port number
     * @returns TRUE if a connection was opened, FALSE if already open
     */
    open_host(host: string | null, port: string | null): boolean
    request_update(): boolean
    /**
     * Send keyval click events to the display. Al the
     * key press events will be sent first and then all
     * the key release events.
     * 
     * `keyvals` should contain the X11 key value constants
     * @param keyvals Keyval array
     */
    send_keys(keyvals: number[]): void
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
    send_keys_ex(keyvals: number[], kind: DisplayKeyEvent): void
    /**
     * Move the remote pointer to position (`x,` `y)` and set the
     * button state to `button_mask`.  This method will only
     * work if the desktop is using absolute pointer mode. It
     * will be a no-op if in relative pointer mode.
     * @param x the desired horizontal position
     * @param y the desired vertical position
     * @param button_mask the state of the buttons
     */
    send_pointer(x: number, y: number, button_mask: number): void
    /**
     * Set whether changes in the widget size will be translated
     * into requests to resize the remote desktop. Resizing of
     * the remote desktop is not guaranteed to be honoured by
     * servers, but when it is, it will avoid the need to do
     * scaling.
     * @param enable TRUE to allow the desktop resize, FALSE otherwise
     */
    set_allow_resize(enable: boolean): void
    /**
     * Sets the value of the authentication credential
     * `type` to the string `data`.
     * 
     * `type` is one of the VncConnectionCredential enum vlaues
     * @param type the authentication credential type
     * @param data the value associated with the credential
     * @returns TRUE if an error occurs, FALSE otherwise
     */
    set_credential(type: number, data: string | null): boolean
    /**
     * Set the desired colour depth. Higher quality colour
     * depths will require greater network bandwidth. The
     * colour depth must be set prior to connecting to the
     * remote server
     * @param depth the desired colour depth
     */
    set_depth(depth: DisplayDepthColor): void
    /**
     * Set whether the widget size will be forced to match the
     * remote desktop size. If the widget size does not match
     * the remote desktop size, and scaling is disabled, some
     * of the remote desktop may be hidden, or black borders
     * may be drawn.
     * @param enable TRUE to force the widget size, FALSE otherwise
     */
    set_force_size(enable: boolean): void
    /**
     * Set the sequence of keys that must be pressed to
     * activate keyborad and pointer grab
     * @param seq the new grab sequence
     */
    set_grab_keys(seq: GrabSequence): void
    /**
     * Set whether the aspect ratio of the framebuffer is preserved
     * when scaling.
     * @param enable TRUE to keep aspect ratio, FALSE otherwise
     */
    set_keep_aspect_ratio(enable: boolean): void
    /**
     * Set whether the widget will grab the keyboard when it
     * has focus. Grabbing the keyboard allows it to intercept
     * special key sequences, ensuring they get sent to the
     * remote desktop, rather than intepreted locally.
     * @param enable TRUE to enable keyboard grab, FALSE otherwise
     */
    set_keyboard_grab(enable: boolean): void
    /**
     * Set whether the client is willing to accept lossy
     * framebuffer update encodings. Lossy encodings can
     * improve performance by lowering network bandwidth
     * requirements, with a cost that the display received
     * by the client will not be pixel perfect
     * @param enable TRUE to permit lossy encodings, FALSE otherwise
     */
    set_lossy_encoding(enable: boolean): void
    /**
     * Set whether the widget will automatically grab the mouse
     * pointer upon a button click
     * @param enable TRUE to enable automatic pointer grab, FALSE otherwise
     */
    set_pointer_grab(enable: boolean): void
    /**
     * If `enable` is TRUE, then a local mouse cursor will be
     * made visible. If `enable` is FALSE, the local mouse
     * cursor will be hidden.
     * @param enable TRUE to show a local cursor, FALSE otherwise
     */
    set_pointer_local(enable: boolean): void
    /**
     * Set whether the widget is running in read-only mode. In
     * read-only mode, keyboard and mouse events will not be
     * sent to the remote desktop server. The widget will merely
     * display activity from the server.
     * @param enable TRUE to enable read-only mode, FALSE otherwise
     */
    set_read_only(enable: boolean): void
    /**
     * Set the rotation angle to view the display of the remote desktop, in
     * clockwise direction.
     * @param rotation The angle of rotation, degrees clockwise.
     */
    set_rotation(rotation: number): void
    /**
     * Set whether the remote desktop contents is automatically
     * scaled to fit the available widget size, or whether it
     * will be rendered at 1:1 size
     * @param enable TRUE to allow scaling the desktop to fit, FALSE otherwise
     * @returns TRUE always
     */
    set_scaling(enable: boolean): boolean
    /**
     * Set the shared state for the connection. A TRUE value
     * allow allow this client to co-exist with other existing
     * clients. A FALSE value will cause other clients to be
     * dropped
     * @param shared the new sharing state
     */
    set_shared_flag(shared: boolean): void
    /**
     * Set whether pixels are smoothly interpolated when scaling,
     * to avoid aliasing.
     * @param enable TRUE to enable smooth scaling, FALSE otherwise
     */
    set_smoothing(enable: boolean): void
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
    set_zoom_level(zoom: number): void

    // Own virtual methods of GtkVnc-2.0.GtkVnc.Display

    vfunc_vnc_auth_credential(credList: GObject.ValueArray): void
    vfunc_vnc_connected(): void
    vfunc_vnc_disconnected(): void
    vfunc_vnc_initialized(): void

    // Own signals of GtkVnc-2.0.GtkVnc.Display

    connect(sigName: "vnc-auth-credential", callback: Display.VncAuthCredentialSignalCallback): number
    connect_after(sigName: "vnc-auth-credential", callback: Display.VncAuthCredentialSignalCallback): number
    emit(sigName: "vnc-auth-credential", object: GObject.ValueArray, ...args: any[]): void
    connect(sigName: "vnc-auth-failure", callback: Display.VncAuthFailureSignalCallback): number
    connect_after(sigName: "vnc-auth-failure", callback: Display.VncAuthFailureSignalCallback): number
    emit(sigName: "vnc-auth-failure", object: string | null, ...args: any[]): void
    connect(sigName: "vnc-auth-unsupported", callback: Display.VncAuthUnsupportedSignalCallback): number
    connect_after(sigName: "vnc-auth-unsupported", callback: Display.VncAuthUnsupportedSignalCallback): number
    emit(sigName: "vnc-auth-unsupported", object: number, ...args: any[]): void
    connect(sigName: "vnc-bell", callback: Display.VncBellSignalCallback): number
    connect_after(sigName: "vnc-bell", callback: Display.VncBellSignalCallback): number
    emit(sigName: "vnc-bell", ...args: any[]): void
    connect(sigName: "vnc-connected", callback: Display.VncConnectedSignalCallback): number
    connect_after(sigName: "vnc-connected", callback: Display.VncConnectedSignalCallback): number
    emit(sigName: "vnc-connected", ...args: any[]): void
    connect(sigName: "vnc-desktop-rename", callback: Display.VncDesktopRenameSignalCallback): number
    connect_after(sigName: "vnc-desktop-rename", callback: Display.VncDesktopRenameSignalCallback): number
    emit(sigName: "vnc-desktop-rename", object: string | null, ...args: any[]): void
    connect(sigName: "vnc-desktop-resize", callback: Display.VncDesktopResizeSignalCallback): number
    connect_after(sigName: "vnc-desktop-resize", callback: Display.VncDesktopResizeSignalCallback): number
    emit(sigName: "vnc-desktop-resize", object: number, p0: number, ...args: any[]): void
    connect(sigName: "vnc-disconnected", callback: Display.VncDisconnectedSignalCallback): number
    connect_after(sigName: "vnc-disconnected", callback: Display.VncDisconnectedSignalCallback): number
    emit(sigName: "vnc-disconnected", ...args: any[]): void
    connect(sigName: "vnc-error", callback: Display.VncErrorSignalCallback): number
    connect_after(sigName: "vnc-error", callback: Display.VncErrorSignalCallback): number
    emit(sigName: "vnc-error", object: string | null, ...args: any[]): void
    connect(sigName: "vnc-initialized", callback: Display.VncInitializedSignalCallback): number
    connect_after(sigName: "vnc-initialized", callback: Display.VncInitializedSignalCallback): number
    emit(sigName: "vnc-initialized", ...args: any[]): void
    connect(sigName: "vnc-keyboard-grab", callback: Display.VncKeyboardGrabSignalCallback): number
    connect_after(sigName: "vnc-keyboard-grab", callback: Display.VncKeyboardGrabSignalCallback): number
    emit(sigName: "vnc-keyboard-grab", ...args: any[]): void
    connect(sigName: "vnc-keyboard-ungrab", callback: Display.VncKeyboardUngrabSignalCallback): number
    connect_after(sigName: "vnc-keyboard-ungrab", callback: Display.VncKeyboardUngrabSignalCallback): number
    emit(sigName: "vnc-keyboard-ungrab", ...args: any[]): void
    connect(sigName: "vnc-pointer-grab", callback: Display.VncPointerGrabSignalCallback): number
    connect_after(sigName: "vnc-pointer-grab", callback: Display.VncPointerGrabSignalCallback): number
    emit(sigName: "vnc-pointer-grab", ...args: any[]): void
    connect(sigName: "vnc-pointer-ungrab", callback: Display.VncPointerUngrabSignalCallback): number
    connect_after(sigName: "vnc-pointer-ungrab", callback: Display.VncPointerUngrabSignalCallback): number
    emit(sigName: "vnc-pointer-ungrab", ...args: any[]): void
    connect(sigName: "vnc-power-control-failed", callback: Display.VncPowerControlFailedSignalCallback): number
    connect_after(sigName: "vnc-power-control-failed", callback: Display.VncPowerControlFailedSignalCallback): number
    emit(sigName: "vnc-power-control-failed", ...args: any[]): void
    connect(sigName: "vnc-power-control-initialized", callback: Display.VncPowerControlInitializedSignalCallback): number
    connect_after(sigName: "vnc-power-control-initialized", callback: Display.VncPowerControlInitializedSignalCallback): number
    emit(sigName: "vnc-power-control-initialized", ...args: any[]): void
    connect(sigName: "vnc-server-cut-text", callback: Display.VncServerCutTextSignalCallback): number
    connect_after(sigName: "vnc-server-cut-text", callback: Display.VncServerCutTextSignalCallback): number
    emit(sigName: "vnc-server-cut-text", object: string | null, ...args: any[]): void

    // Class property signals of GtkVnc-2.0.GtkVnc.Display

    connect(sigName: "notify::allow-resize", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-resize", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allow-resize", ...args: any[]): void
    connect(sigName: "notify::connection", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::depth", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::depth", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::depth", ...args: any[]): void
    connect(sigName: "notify::force-size", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::force-size", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::force-size", ...args: any[]): void
    connect(sigName: "notify::grab-keyboard", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::grab-keyboard", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::grab-keyboard", ...args: any[]): void
    connect(sigName: "notify::grab-keys", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::grab-keys", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::grab-keys", ...args: any[]): void
    connect(sigName: "notify::grab-pointer", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::grab-pointer", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::grab-pointer", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::keep-aspect-ratio", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keep-aspect-ratio", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::keep-aspect-ratio", ...args: any[]): void
    connect(sigName: "notify::local-pointer", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-pointer", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::local-pointer", ...args: any[]): void
    connect(sigName: "notify::lossy-encoding", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lossy-encoding", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::lossy-encoding", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::rotation", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation", ...args: any[]): void
    connect(sigName: "notify::scaling", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scaling", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scaling", ...args: any[]): void
    connect(sigName: "notify::shared-flag", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shared-flag", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::shared-flag", ...args: any[]): void
    connect(sigName: "notify::smoothing", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smoothing", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smoothing", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::zoom-level", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::zoom-level", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::zoom-level", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Display extends Gtk.DrawingArea {

    // Own properties of GtkVnc-2.0.GtkVnc.Display

    static name: string
    static $gtype: GObject.GType<Display>

    // Constructors of GtkVnc-2.0.GtkVnc.Display

    constructor(config?: Display.ConstructorProperties) 
    /**
     * Create a new widget capable of connecting to a VNC server
     * and displaying its contents
     * 
     * The widget will initially be in a disconnected state
     * @constructor 
     * @returns the new VNC display widget
     */
    constructor() 
    /**
     * Create a new widget capable of connecting to a VNC server
     * and displaying its contents
     * 
     * The widget will initially be in a disconnected state
     * @constructor 
     * @returns the new VNC display widget
     */
    static new(): Display
    _init(config?: Display.ConstructorProperties): void
    /**
     * Get the array of command line option entries containing
     * VNC specific otions
     * @returns the option entries
     */
    static get_option_entries(): GLib.OptionEntry[]
    /**
     * Get a command line option group containing VNC specific
     * options.
     * @returns the option group
     */
    static get_option_group(): GLib.OptionGroup
}

interface CairoFramebufferClass {

    // Own fields of GtkVnc-2.0.GtkVnc.CairoFramebufferClass

    parent_class: GVnc.BaseFramebufferClass
    _vnc_reserved: any[]
}

abstract class CairoFramebufferClass {

    // Own properties of GtkVnc-2.0.GtkVnc.CairoFramebufferClass

    static name: string
}

interface CairoFramebufferPrivate {
}

class CairoFramebufferPrivate {

    // Own properties of GtkVnc-2.0.GtkVnc.CairoFramebufferPrivate

    static name: string
}

interface DisplayClass {

    // Own fields of GtkVnc-2.0.GtkVnc.DisplayClass

    parent_class: Gtk.DrawingAreaClass
    vnc_connected: (display: Display) => void
    vnc_initialized: (display: Display) => void
    vnc_disconnected: (display: Display) => void
    vnc_auth_credential: (display: Display, credList: GObject.ValueArray) => void
}

abstract class DisplayClass {

    // Own properties of GtkVnc-2.0.GtkVnc.DisplayClass

    static name: string
}

interface DisplayPrivate {
}

class DisplayPrivate {

    // Own properties of GtkVnc-2.0.GtkVnc.DisplayPrivate

    static name: string
}

interface GrabSequence {

    // Own fields of GtkVnc-2.0.GtkVnc.GrabSequence

    nkeysyms: number
    keysyms: number

    // Owm methods of GtkVnc-2.0.GtkVnc.GrabSequence

    /**
     * Convert the grab sequence to a string of keysym names
     * @returns the grab sequence as a string
     */
    as_string(): string | null
    /**
     * Allocate a new grab sequence struct, initalizing it
     * with a copy of data  from `sequence`
     * 
     * The returned struct must be freed by calling
     * vnc_grab_sequence_free when no longer required
     * @returns the grab sequence
     */
    copy(): GrabSequence
    /**
     * Release memory associated with the grab sequence
     * `sequence`.
     */
    free(): void
    /**
     * Obtain the nth key symbol in the sequence
     * @param n the index of the key symbol to obtain
     * @returns the nth key symbol
     */
    get_nth(n: number): number
}

class GrabSequence {

    // Own properties of GtkVnc-2.0.GtkVnc.GrabSequence

    static name: string

    // Constructors of GtkVnc-2.0.GtkVnc.GrabSequence

    /**
     * Creates a new grab sequence from a list of keysym values
     * @constructor 
     * @param keysyms the keysym values
     * @returns a new grab sequence object
     */
    constructor(keysyms: number[]) 
    /**
     * Creates a new grab sequence from a list of keysym values
     * @constructor 
     * @param keysyms the keysym values
     * @returns a new grab sequence object
     */
    static new(keysyms: number[]): GrabSequence
    /**
     * Creates a new grab sequence from a list of keysym names
     * 
     * The returned struct must be freed by calling
     * vnc_grab_sequence_free when no longer required
     * @constructor 
     * @param str string of keysym names
     * @returns a new grab sequence object
     */
    static new_from_string(str: string | null): GrabSequence
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

export default GtkVnc;
// END