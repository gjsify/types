
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
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

export enum DisplayCredential {
    PASSWORD,
    USERNAME,
    CLIENTNAME,
}
export enum DisplayDepthColor {
    DEFAULT,
    FULL,
    MEDIUM,
    LOW,
    ULTRA_LOW,
}
export enum DisplayKeyEvent {
    PRESS,
    RELEASE,
    CLICK,
}
export module CairoFramebuffer {

    // Constructor properties interface

    export interface ConstructorProperties extends GVnc.Framebuffer.ConstructorProperties, GVnc.BaseFramebuffer.ConstructorProperties {

        // Own constructor properties of GtkVnc-2.0.GtkVnc.CairoFramebuffer

        surface?: any | null
    }

}

export interface CairoFramebuffer extends GVnc.Framebuffer {

    // Own properties of GtkVnc-2.0.GtkVnc.CairoFramebuffer

    readonly surface: any
    __gtype__: number

    // Own fields of GtkVnc-2.0.GtkVnc.CairoFramebuffer

    parent: GVnc.BaseFramebuffer & GObject.Object
    priv: any

    // Owm methods of GtkVnc-2.0.GtkVnc.CairoFramebuffer

    /**
     * Get the cairo surface in which the remote desktop is
     * being rendered.
     * @returns the cairo surface
     */
    getSurface(): cairo.Surface

    // Class property signals of GtkVnc-2.0.GtkVnc.CairoFramebuffer

    connect(sigName: "notify::surface", callback: (...args: any[]) => void): number
    on(sigName: "notify::surface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::surface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::surface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::surface", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::buffer", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::color-map", callback: (...args: any[]) => void): number
    on(sigName: "notify::color-map", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::color-map", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::color-map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::color-map", ...args: any[]): void
    connect(sigName: "notify::height", callback: (...args: any[]) => void): number
    on(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::local-format", callback: (...args: any[]) => void): number
    on(sigName: "notify::local-format", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::local-format", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::local-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::local-format", ...args: any[]): void
    connect(sigName: "notify::remote-format", callback: (...args: any[]) => void): number
    on(sigName: "notify::remote-format", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::remote-format", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::remote-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::remote-format", ...args: any[]): void
    connect(sigName: "notify::rowstride", callback: (...args: any[]) => void): number
    on(sigName: "notify::rowstride", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rowstride", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rowstride", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rowstride", ...args: any[]): void
    connect(sigName: "notify::width", callback: (...args: any[]) => void): number
    on(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class CairoFramebuffer extends GVnc.BaseFramebuffer {

    // Own properties of GtkVnc-2.0.GtkVnc.CairoFramebuffer

    static name: string

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

export module Display {

    // Signal callback interfaces

    /**
     * Signal callback interface for `vnc-auth-credential`
     */
    export interface VncAuthCredentialSignalCallback {
        (object: GObject.ValueArray): void
    }

    /**
     * Signal callback interface for `vnc-auth-failure`
     */
    export interface VncAuthFailureSignalCallback {
        (object: string | null): void
    }

    /**
     * Signal callback interface for `vnc-auth-unsupported`
     */
    export interface VncAuthUnsupportedSignalCallback {
        (object: number): void
    }

    /**
     * Signal callback interface for `vnc-bell`
     */
    export interface VncBellSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `vnc-connected`
     */
    export interface VncConnectedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `vnc-desktop-rename`
     */
    export interface VncDesktopRenameSignalCallback {
        (object: string | null): void
    }

    /**
     * Signal callback interface for `vnc-desktop-resize`
     */
    export interface VncDesktopResizeSignalCallback {
        (object: number, p0: number): void
    }

    /**
     * Signal callback interface for `vnc-disconnected`
     */
    export interface VncDisconnectedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `vnc-error`
     */
    export interface VncErrorSignalCallback {
        (object: string | null): void
    }

    /**
     * Signal callback interface for `vnc-initialized`
     */
    export interface VncInitializedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `vnc-keyboard-grab`
     */
    export interface VncKeyboardGrabSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `vnc-keyboard-ungrab`
     */
    export interface VncKeyboardUngrabSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `vnc-pointer-grab`
     */
    export interface VncPointerGrabSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `vnc-pointer-ungrab`
     */
    export interface VncPointerUngrabSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `vnc-power-control-failed`
     */
    export interface VncPowerControlFailedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `vnc-power-control-initialized`
     */
    export interface VncPowerControlInitializedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `vnc-server-cut-text`
     */
    export interface VncServerCutTextSignalCallback {
        (object: string | null): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.DrawingArea.ConstructorProperties {

        // Own constructor properties of GtkVnc-2.0.GtkVnc.Display

        allowResize?: boolean | null
        depth?: DisplayDepthColor | null
        forceSize?: boolean | null
        grabKeyboard?: boolean | null
        grabKeys?: GrabSequence | null
        grabPointer?: boolean | null
        keepAspectRatio?: boolean | null
        localPointer?: boolean | null
        lossyEncoding?: boolean | null
        readOnly?: boolean | null
        rotation?: number | null
        scaling?: boolean | null
        sharedFlag?: boolean | null
        smoothing?: boolean | null
        zoomLevel?: number | null
    }

}

export interface Display extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of GtkVnc-2.0.GtkVnc.Display

    allowResize: boolean
    readonly connection: GVnc.Connection
    depth: DisplayDepthColor
    forceSize: boolean
    grabKeyboard: boolean
    grabKeys: GrabSequence
    grabPointer: boolean
    readonly height: number
    keepAspectRatio: boolean
    localPointer: boolean
    lossyEncoding: boolean
    readonly name: any
    readOnly: boolean
    rotation: number
    scaling: boolean
    sharedFlag: boolean
    smoothing: boolean
    readonly width: number
    zoomLevel: number
    __gtype__: number

    // Own fields of GtkVnc-2.0.GtkVnc.Display

    parent: Gtk.DrawingArea & Gtk.Container
    priv: DisplayPrivate

    // Owm methods of GtkVnc-2.0.GtkVnc.Display

    clientCutText(text: string | null): void
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
    forceGrab(enable: boolean): void
    /**
     * Determine whether widget size is used to request
     * rsize of the remote desktop
     * @returns TRUE if allow resize is enabled, FALSE otherwise
     */
    getAllowResize(): boolean
    /**
     * Get the VNC connection object associated with the
     * display
     * @returns the connection object
     */
    getConnection(): GVnc.Connection
    /**
     * Get the desired colour depth
     * @returns the color depth
     */
    getDepth(): DisplayDepthColor
    /**
     * Determine whether the widget size is being forced
     * to match the desktop size
     * @returns TRUE if force size is enabled, FALSE otherwise
     */
    getForceSize(): boolean
    /**
     * Get the current grab key sequence
     * @returns the current grab keys
     */
    getGrabKeys(): GrabSequence
    /**
     * Get the height of the remote desktop. This is only
     * valid after the "vnc-initialized" signal has been
     * emitted
     * @returns the remote desktop height
     */
    getHeight(): number
    /**
     * Determine whether the framebuffer aspect ratio is preserved
     * when scaling.
     * @returns TRUE if aspect ratio is preserved, FALSE otherwise
     */
    getKeepAspectRatio(): boolean
    /**
     * Determine if the keyboard will be grabbed when the
     * widget has input focus.
     * @returns TRUE if the keyboard will be grabbed, FALSE otherwise
     */
    getKeyboardGrab(): boolean
    /**
     * Determine whether lossy framebuffer update encodings
     * are permitted
     * @returns TRUE if lossy encodings are permitted, FALSE otherwie
     */
    getLossyEncoding(): boolean
    /**
     * Get the name of the remote desktop. This is only
     * valid after the "vnc-initialized" signal has been
     * emitted
     * @returns the remote desktop name
     */
    getName(): string | null

    // Overloads of getName

    /**
     * Gets the name of the `buildable` object.
     * 
     * #GtkBuilder sets the name based on the
     * [GtkBuilder UI definition][BUILDER-UI]
     * used to construct the `buildable`.
     * @virtual 
     * @returns the name set with gtk_buildable_set_name()
     */
    getName(): string | null
    /**
     * Retrieves the name of a widget. See gtk_widget_set_name() for the
     * significance of widget names.
     * @returns name of the widget. This string is owned by GTK+ and should not be modified or freed
     */
    getName(): string | null
    /**
     * Take a screenshot of the display.
     * @returns a #GdkPixbuf with the screenshot image buffer
     */
    getPixbuf(): GdkPixbuf.Pixbuf
    /**
     * Determine if the mouse pointer will be grabbed
     * on first click
     * @returns TRUE if the pointer will be grabbed, FALSE otherwise
     */
    getPointerGrab(): boolean
    /**
     * Determine if a local pointer will be shown
     * @returns TRUE if a local pointer is shown, FALSE otherwise
     */
    getPointerLocal(): boolean
    /**
     * Determine if the widget will operate in read-only
     * mode, denying keyboard/mouse inputs
     * @returns TRUE if in read-only mode, FALSE otherwise
     */
    getReadOnly(): boolean
    /**
     * Determine the current rotation angle of the remote desktop.
     * @returns the rotation angle in clockwise direction
     */
    getRotation(): number
    /**
     * Determine whether the widget is permitted to
     * scale the remote desktop to fit the current
     * widget size.
     * @returns TRUE if scaling is permitted, FALSE otherwise
     */
    getScaling(): boolean
    /**
     * Determine if other clients are permitted to
     * share the VNC connection
     * @returns TRUE if sharing is permittted, FALSE otherwise
     */
    getSharedFlag(): boolean
    /**
     * Determine whether pixels are smoothly interpolated when
     * scaling.
     * @returns TRUE if smoothing is enabled, FALSE otherwise
     */
    getSmoothing(): boolean
    /**
     * Get the width of the remote desktop. This is only
     * valid after the "vnc-initialized" signal has been
     * emitted
     * @returns the remote desktop width
     */
    getWidth(): number
    /**
     * Determine the current constant scaling factor.
     * @returns the zoom percentage level between 10-400
     */
    getZoomLevel(): number
    /**
     * Check if the connection for the display is currently open
     * @returns TRUE if open, FALSE if closing/closed
     */
    isOpen(): boolean
    /**
     * Determine if the pointer is operating in absolute
     * mode. This is only valid after the "vnc-initialized"
     * signal has been emitted
     * @returns TRUE if in absolute mode, FALSE for relative mode
     */
    isPointerAbsolute(): boolean
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
    openAddr(addr: Gio.SocketAddress, hostname: string | null): boolean
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
    openFd(fd: number): boolean
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
    openFdWithHostname(fd: number, hostname: string | null): boolean
    /**
     * Open a TCP connection to the remote desktop at `host`
     * listening on `port`.
     * @param host the host name or IP address
     * @param port the service name or port number
     * @returns TRUE if a connection was opened, FALSE if already open
     */
    openHost(host: string | null, port: string | null): boolean
    requestUpdate(): boolean
    /**
     * Send keyval click events to the display. Al the
     * key press events will be sent first and then all
     * the key release events.
     * 
     * `keyvals` should contain the X11 key value constants
     * @param keyvals Keyval array
     */
    sendKeys(keyvals: number[]): void
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
    sendKeysEx(keyvals: number[], kind: DisplayKeyEvent): void
    /**
     * Move the remote pointer to position (`x,` `y)` and set the
     * button state to `button_mask`.  This method will only
     * work if the desktop is using absolute pointer mode. It
     * will be a no-op if in relative pointer mode.
     * @param x the desired horizontal position
     * @param y the desired vertical position
     * @param buttonMask the state of the buttons
     */
    sendPointer(x: number, y: number, buttonMask: number): void
    /**
     * Set whether changes in the widget size will be translated
     * into requests to resize the remote desktop. Resizing of
     * the remote desktop is not guaranteed to be honoured by
     * servers, but when it is, it will avoid the need to do
     * scaling.
     * @param enable TRUE to allow the desktop resize, FALSE otherwise
     */
    setAllowResize(enable: boolean): void
    /**
     * Sets the value of the authentication credential
     * `type` to the string `data`.
     * 
     * `type` is one of the VncConnectionCredential enum vlaues
     * @param type the authentication credential type
     * @param data the value associated with the credential
     * @returns TRUE if an error occurs, FALSE otherwise
     */
    setCredential(type: number, data: string | null): boolean
    /**
     * Set the desired colour depth. Higher quality colour
     * depths will require greater network bandwidth. The
     * colour depth must be set prior to connecting to the
     * remote server
     * @param depth the desired colour depth
     */
    setDepth(depth: DisplayDepthColor): void
    /**
     * Set whether the widget size will be forced to match the
     * remote desktop size. If the widget size does not match
     * the remote desktop size, and scaling is disabled, some
     * of the remote desktop may be hidden, or black borders
     * may be drawn.
     * @param enable TRUE to force the widget size, FALSE otherwise
     */
    setForceSize(enable: boolean): void
    /**
     * Set the sequence of keys that must be pressed to
     * activate keyborad and pointer grab
     * @param seq the new grab sequence
     */
    setGrabKeys(seq: GrabSequence): void
    /**
     * Set whether the aspect ratio of the framebuffer is preserved
     * when scaling.
     * @param enable TRUE to keep aspect ratio, FALSE otherwise
     */
    setKeepAspectRatio(enable: boolean): void
    /**
     * Set whether the widget will grab the keyboard when it
     * has focus. Grabbing the keyboard allows it to intercept
     * special key sequences, ensuring they get sent to the
     * remote desktop, rather than intepreted locally.
     * @param enable TRUE to enable keyboard grab, FALSE otherwise
     */
    setKeyboardGrab(enable: boolean): void
    /**
     * Set whether the client is willing to accept lossy
     * framebuffer update encodings. Lossy encodings can
     * improve performance by lowering network bandwidth
     * requirements, with a cost that the display received
     * by the client will not be pixel perfect
     * @param enable TRUE to permit lossy encodings, FALSE otherwise
     */
    setLossyEncoding(enable: boolean): void
    /**
     * Set whether the widget will automatically grab the mouse
     * pointer upon a button click
     * @param enable TRUE to enable automatic pointer grab, FALSE otherwise
     */
    setPointerGrab(enable: boolean): void
    /**
     * If `enable` is TRUE, then a local mouse cursor will be
     * made visible. If `enable` is FALSE, the local mouse
     * cursor will be hidden.
     * @param enable TRUE to show a local cursor, FALSE otherwise
     */
    setPointerLocal(enable: boolean): void
    /**
     * Set whether the widget is running in read-only mode. In
     * read-only mode, keyboard and mouse events will not be
     * sent to the remote desktop server. The widget will merely
     * display activity from the server.
     * @param enable TRUE to enable read-only mode, FALSE otherwise
     */
    setReadOnly(enable: boolean): void
    /**
     * Set the rotation angle to view the display of the remote desktop, in
     * clockwise direction.
     * @param rotation The angle of rotation, degrees clockwise.
     */
    setRotation(rotation: number): void
    /**
     * Set whether the remote desktop contents is automatically
     * scaled to fit the available widget size, or whether it
     * will be rendered at 1:1 size
     * @param enable TRUE to allow scaling the desktop to fit, FALSE otherwise
     * @returns TRUE always
     */
    setScaling(enable: boolean): boolean
    /**
     * Set the shared state for the connection. A TRUE value
     * allow allow this client to co-exist with other existing
     * clients. A FALSE value will cause other clients to be
     * dropped
     * @param shared the new sharing state
     */
    setSharedFlag(shared: boolean): void
    /**
     * Set whether pixels are smoothly interpolated when scaling,
     * to avoid aliasing.
     * @param enable TRUE to enable smooth scaling, FALSE otherwise
     */
    setSmoothing(enable: boolean): void
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
    setZoomLevel(zoom: number): void

    // Conflicting methods

    /**
     * Sets the name of the `buildable` object.
     * @virtual 
     * @param name name to set
     */
    setName(name: string | null): void
    /**
     * Widgets can be named, which allows you to refer to them from a
     * CSS file. You can apply a style to widgets with a particular name
     * in the CSS file. See the documentation for the CSS syntax (on the
     * same page as the docs for #GtkStyleContext).
     * 
     * Note that the CSS syntax has certain special characters to delimit
     * and represent elements in a selector (period, #, >, *...), so using
     * these will make your widget impossible to match by name. Any combination
     * of alphanumeric symbols, dashes and underscores will suffice.
     * @param name name for the widget
     */
    setName(name: string | null): void

    // Overloads of setName

    /**
     * Sets the name of the `buildable` object.
     * @virtual 
     * @param name name to set
     */
    setName(name: string | null): void

    // Own virtual methods of GtkVnc-2.0.GtkVnc.Display

    vncAuthCredential(credList: GObject.ValueArray): void
    vncConnected(): void
    vncDisconnected(): void
    vncInitialized(): void

    // Own signals of GtkVnc-2.0.GtkVnc.Display

    connect(sigName: "vnc-auth-credential", callback: Display.VncAuthCredentialSignalCallback): number
    on(sigName: "vnc-auth-credential", callback: Display.VncAuthCredentialSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-auth-credential", callback: Display.VncAuthCredentialSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-auth-credential", callback: Display.VncAuthCredentialSignalCallback): NodeJS.EventEmitter
    emit(sigName: "vnc-auth-credential", ...args: any[]): void
    connect(sigName: "vnc-auth-failure", callback: Display.VncAuthFailureSignalCallback): number
    on(sigName: "vnc-auth-failure", callback: Display.VncAuthFailureSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-auth-failure", callback: Display.VncAuthFailureSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-auth-failure", callback: Display.VncAuthFailureSignalCallback): NodeJS.EventEmitter
    emit(sigName: "vnc-auth-failure", ...args: any[]): void
    connect(sigName: "vnc-auth-unsupported", callback: Display.VncAuthUnsupportedSignalCallback): number
    on(sigName: "vnc-auth-unsupported", callback: Display.VncAuthUnsupportedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-auth-unsupported", callback: Display.VncAuthUnsupportedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-auth-unsupported", callback: Display.VncAuthUnsupportedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "vnc-auth-unsupported", ...args: any[]): void
    connect(sigName: "vnc-bell", callback: Display.VncBellSignalCallback): number
    on(sigName: "vnc-bell", callback: Display.VncBellSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-bell", callback: Display.VncBellSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-bell", callback: Display.VncBellSignalCallback): NodeJS.EventEmitter
    emit(sigName: "vnc-bell", ...args: any[]): void
    connect(sigName: "vnc-connected", callback: Display.VncConnectedSignalCallback): number
    on(sigName: "vnc-connected", callback: Display.VncConnectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-connected", callback: Display.VncConnectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-connected", callback: Display.VncConnectedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "vnc-connected", ...args: any[]): void
    connect(sigName: "vnc-desktop-rename", callback: Display.VncDesktopRenameSignalCallback): number
    on(sigName: "vnc-desktop-rename", callback: Display.VncDesktopRenameSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-desktop-rename", callback: Display.VncDesktopRenameSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-desktop-rename", callback: Display.VncDesktopRenameSignalCallback): NodeJS.EventEmitter
    emit(sigName: "vnc-desktop-rename", ...args: any[]): void
    connect(sigName: "vnc-desktop-resize", callback: Display.VncDesktopResizeSignalCallback): number
    on(sigName: "vnc-desktop-resize", callback: Display.VncDesktopResizeSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-desktop-resize", callback: Display.VncDesktopResizeSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-desktop-resize", callback: Display.VncDesktopResizeSignalCallback): NodeJS.EventEmitter
    emit(sigName: "vnc-desktop-resize", p0: number, ...args: any[]): void
    connect(sigName: "vnc-disconnected", callback: Display.VncDisconnectedSignalCallback): number
    on(sigName: "vnc-disconnected", callback: Display.VncDisconnectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-disconnected", callback: Display.VncDisconnectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-disconnected", callback: Display.VncDisconnectedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "vnc-disconnected", ...args: any[]): void
    connect(sigName: "vnc-error", callback: Display.VncErrorSignalCallback): number
    on(sigName: "vnc-error", callback: Display.VncErrorSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-error", callback: Display.VncErrorSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-error", callback: Display.VncErrorSignalCallback): NodeJS.EventEmitter
    emit(sigName: "vnc-error", ...args: any[]): void
    connect(sigName: "vnc-initialized", callback: Display.VncInitializedSignalCallback): number
    on(sigName: "vnc-initialized", callback: Display.VncInitializedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-initialized", callback: Display.VncInitializedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-initialized", callback: Display.VncInitializedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "vnc-initialized", ...args: any[]): void
    connect(sigName: "vnc-keyboard-grab", callback: Display.VncKeyboardGrabSignalCallback): number
    on(sigName: "vnc-keyboard-grab", callback: Display.VncKeyboardGrabSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-keyboard-grab", callback: Display.VncKeyboardGrabSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-keyboard-grab", callback: Display.VncKeyboardGrabSignalCallback): NodeJS.EventEmitter
    emit(sigName: "vnc-keyboard-grab", ...args: any[]): void
    connect(sigName: "vnc-keyboard-ungrab", callback: Display.VncKeyboardUngrabSignalCallback): number
    on(sigName: "vnc-keyboard-ungrab", callback: Display.VncKeyboardUngrabSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-keyboard-ungrab", callback: Display.VncKeyboardUngrabSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-keyboard-ungrab", callback: Display.VncKeyboardUngrabSignalCallback): NodeJS.EventEmitter
    emit(sigName: "vnc-keyboard-ungrab", ...args: any[]): void
    connect(sigName: "vnc-pointer-grab", callback: Display.VncPointerGrabSignalCallback): number
    on(sigName: "vnc-pointer-grab", callback: Display.VncPointerGrabSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-pointer-grab", callback: Display.VncPointerGrabSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-pointer-grab", callback: Display.VncPointerGrabSignalCallback): NodeJS.EventEmitter
    emit(sigName: "vnc-pointer-grab", ...args: any[]): void
    connect(sigName: "vnc-pointer-ungrab", callback: Display.VncPointerUngrabSignalCallback): number
    on(sigName: "vnc-pointer-ungrab", callback: Display.VncPointerUngrabSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-pointer-ungrab", callback: Display.VncPointerUngrabSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-pointer-ungrab", callback: Display.VncPointerUngrabSignalCallback): NodeJS.EventEmitter
    emit(sigName: "vnc-pointer-ungrab", ...args: any[]): void
    connect(sigName: "vnc-power-control-failed", callback: Display.VncPowerControlFailedSignalCallback): number
    on(sigName: "vnc-power-control-failed", callback: Display.VncPowerControlFailedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-power-control-failed", callback: Display.VncPowerControlFailedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-power-control-failed", callback: Display.VncPowerControlFailedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "vnc-power-control-failed", ...args: any[]): void
    connect(sigName: "vnc-power-control-initialized", callback: Display.VncPowerControlInitializedSignalCallback): number
    on(sigName: "vnc-power-control-initialized", callback: Display.VncPowerControlInitializedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-power-control-initialized", callback: Display.VncPowerControlInitializedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-power-control-initialized", callback: Display.VncPowerControlInitializedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "vnc-power-control-initialized", ...args: any[]): void
    connect(sigName: "vnc-server-cut-text", callback: Display.VncServerCutTextSignalCallback): number
    on(sigName: "vnc-server-cut-text", callback: Display.VncServerCutTextSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-server-cut-text", callback: Display.VncServerCutTextSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-server-cut-text", callback: Display.VncServerCutTextSignalCallback): NodeJS.EventEmitter
    emit(sigName: "vnc-server-cut-text", ...args: any[]): void

    // Class property signals of GtkVnc-2.0.GtkVnc.Display

    connect(sigName: "notify::allow-resize", callback: (...args: any[]) => void): number
    on(sigName: "notify::allow-resize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::allow-resize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::allow-resize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::allow-resize", ...args: any[]): void
    connect(sigName: "notify::connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::depth", callback: (...args: any[]) => void): number
    on(sigName: "notify::depth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::depth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::depth", ...args: any[]): void
    connect(sigName: "notify::force-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::force-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::force-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::force-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::force-size", ...args: any[]): void
    connect(sigName: "notify::grab-keyboard", callback: (...args: any[]) => void): number
    on(sigName: "notify::grab-keyboard", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::grab-keyboard", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::grab-keyboard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::grab-keyboard", ...args: any[]): void
    connect(sigName: "notify::grab-keys", callback: (...args: any[]) => void): number
    on(sigName: "notify::grab-keys", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::grab-keys", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::grab-keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::grab-keys", ...args: any[]): void
    connect(sigName: "notify::grab-pointer", callback: (...args: any[]) => void): number
    on(sigName: "notify::grab-pointer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::grab-pointer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::grab-pointer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::grab-pointer", ...args: any[]): void
    connect(sigName: "notify::height", callback: (...args: any[]) => void): number
    on(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::keep-aspect-ratio", callback: (...args: any[]) => void): number
    on(sigName: "notify::keep-aspect-ratio", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::keep-aspect-ratio", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::keep-aspect-ratio", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::keep-aspect-ratio", ...args: any[]): void
    connect(sigName: "notify::local-pointer", callback: (...args: any[]) => void): number
    on(sigName: "notify::local-pointer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::local-pointer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::local-pointer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::local-pointer", ...args: any[]): void
    connect(sigName: "notify::lossy-encoding", callback: (...args: any[]) => void): number
    on(sigName: "notify::lossy-encoding", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::lossy-encoding", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::lossy-encoding", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::lossy-encoding", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::rotation", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation", ...args: any[]): void
    connect(sigName: "notify::scaling", callback: (...args: any[]) => void): number
    on(sigName: "notify::scaling", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scaling", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scaling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scaling", ...args: any[]): void
    connect(sigName: "notify::shared-flag", callback: (...args: any[]) => void): number
    on(sigName: "notify::shared-flag", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::shared-flag", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::shared-flag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::shared-flag", ...args: any[]): void
    connect(sigName: "notify::smoothing", callback: (...args: any[]) => void): number
    on(sigName: "notify::smoothing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::smoothing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::smoothing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::smoothing", ...args: any[]): void
    connect(sigName: "notify::width", callback: (...args: any[]) => void): number
    on(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::zoom-level", callback: (...args: any[]) => void): number
    on(sigName: "notify::zoom-level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::zoom-level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::zoom-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::zoom-level", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (...args: any[]) => void): number
    on(sigName: "notify::app-paintable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::app-paintable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::composite-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::composite-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (...args: any[]) => void): number
    on(sigName: "notify::double-buffered", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::double-buffered", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (...args: any[]) => void): number
    on(sigName: "notify::events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (...args: any[]) => void): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (...args: any[]) => void): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (...args: any[]) => void): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (...args: any[]) => void): number
    on(sigName: "notify::no-show-all", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::no-show-all", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (...args: any[]) => void): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (...args: any[]) => void): number
    on(sigName: "notify::style", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::style", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (...args: any[]) => void): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (...args: any[]) => void): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (...args: any[]) => void): number
    on(sigName: "notify::width-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (...args: any[]) => void): number
    on(sigName: "notify::window", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::window", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Display extends Gtk.DrawingArea {

    // Own properties of GtkVnc-2.0.GtkVnc.Display

    static name: string

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
    static getOptionEntries(): GLib.OptionEntry[]
    /**
     * Get a command line option group containing VNC specific
     * options.
     * @returns the option group
     */
    static getOptionGroup(): GLib.OptionGroup
}

export interface CairoFramebufferClass {

    // Own fields of GtkVnc-2.0.GtkVnc.CairoFramebufferClass

    parentClass: GVnc.BaseFramebufferClass
    vncReserved: any[]
}

export abstract class CairoFramebufferClass {

    // Own properties of GtkVnc-2.0.GtkVnc.CairoFramebufferClass

    static name: string
}

export interface CairoFramebufferPrivate {
}

export class CairoFramebufferPrivate {

    // Own properties of GtkVnc-2.0.GtkVnc.CairoFramebufferPrivate

    static name: string
}

export interface DisplayClass {

    // Own fields of GtkVnc-2.0.GtkVnc.DisplayClass

    parentClass: Gtk.DrawingAreaClass
    vncConnected: (display: Display) => void
    vncInitialized: (display: Display) => void
    vncDisconnected: (display: Display) => void
    vncAuthCredential: (display: Display, credList: GObject.ValueArray) => void
}

export abstract class DisplayClass {

    // Own properties of GtkVnc-2.0.GtkVnc.DisplayClass

    static name: string
}

export interface DisplayPrivate {
}

export class DisplayPrivate {

    // Own properties of GtkVnc-2.0.GtkVnc.DisplayPrivate

    static name: string
}

export interface GrabSequence {

    // Own fields of GtkVnc-2.0.GtkVnc.GrabSequence

    nkeysyms: number
    keysyms: number

    // Owm methods of GtkVnc-2.0.GtkVnc.GrabSequence

    /**
     * Convert the grab sequence to a string of keysym names
     * @returns the grab sequence as a string
     */
    asString(): string | null
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
    getNth(n: number): number
}

export class GrabSequence {

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
    static newFromString(str: string | null): GrabSequence
}
