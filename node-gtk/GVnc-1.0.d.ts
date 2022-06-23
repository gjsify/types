// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GVnc-1.0
 */

import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace GVnc {

enum AudioFormatType {
    U8,
    S8,
    U16,
    S16,
    U32,
    S32,
}
enum ConnectionAuth {
    INVALID,
    /**
     * No authentication is needed and protocol data is to be sent unencrypted.
     */
    NONE,
    /**
     * VNC authentication is to be used and protocol data is to be sent unencrypted.
     */
    VNC,
    /**
     * RealVNC authentication.
     */
    RA2,
    /**
     * RealVNC authentication.
     */
    RA2NE,
    /**
     * The Tight security type is a generic protocol extension.
     */
    TIGHT,
    /**
     * Ultra authentication.
     */
    ULTRA,
    /**
     * TLS authentication.
     */
    TLS,
    /**
     * The VeNCrypt security type is a generic authentication method which encapsulates multiple authentication subtypes.
     */
    VENCRYPT,
    /**
     * SASL authentication.
     */
    SASL,
    /**
     * Apple remote desktop (screen sharing) authentication.
     */
    ARD,
    /**
     * Authentication used by UltraVNC.
     */
    MSLOGONII,
    /**
     * Authentication used by UltraVNC.
     */
    MSLOGON,
}
enum ConnectionAuthVencrypt {
    PLAIN,
    TLSNONE,
    TLSVNC,
    TLSPLAIN,
    X509NONE,
    X509VNC,
    X509PLAIN,
    X509SASL,
    TLSSASL,
}
enum ConnectionCredential {
    PASSWORD,
    USERNAME,
    CLIENTNAME,
}
enum ConnectionEncoding {
    RAW,
    COPY_RECT,
    RRE,
    CORRE,
    HEXTILE,
    TIGHT,
    ZRLE,
    TIGHT_JPEG0,
    TIGHT_JPEG1,
    TIGHT_JPEG2,
    TIGHT_JPEG3,
    TIGHT_JPEG4,
    TIGHT_JPEG5,
    TIGHT_JPEG6,
    TIGHT_JPEG7,
    TIGHT_JPEG8,
    TIGHT_JPEG9,
    DESKTOP_RESIZE,
    LAST_RECT,
    WMVI,
    CURSOR_POS,
    RICH_CURSOR,
    XCURSOR,
    POINTER_CHANGE,
    EXT_KEY_EVENT,
    AUDIO,
    LED_STATE,
    DESKTOP_NAME,
    EXTENDED_DESKTOP_RESIZE,
    XVP,
    ALPHA_CURSOR,
}
enum ConnectionPowerAction {
    SHUTDOWN,
    REBOOT,
    RESET,
}
enum ConnectionResizeStatus {
    UNSUPPORTED,
    OK,
    ADMIN_PROHIBITED,
    OUT_OF_RESOURCES,
    INVALID_LAOUT,
    FORWARDED,
}
const LEDSTATE_CAPS_LOCK: number
const LEDSTATE_NUM_LOCK: number
const LEDSTATE_SCROLL_LOCK: number
const MAJOR_VERSION: number
const MICRO_VERSION: number
const MINOR_VERSION: number
const PADDING: number
const PADDING_LARGE: number
/**
 * Check whether the library is at least as new as the
 * version (`major,` `minor,` `micro)`
 * @param major the desired major version
 * @param minor the desired minor version
 * @param micro the desired micro version
 */
function utilCheckVersion(major: number, minor: number, micro: number): boolean
/**
 * Determine whether the VNC code will emit verbose
 * debug messages
 */
function utilGetDebug(): boolean
/**
 * Get the encoded version number of the library release.
 * The major, minor and micro components are encoded in
 * 8-bits each.
 */
function utilGetVersion(): number
/**
 * Get the library version number in a printable
 * string format
 */
function utilGetVersionString(): string
/**
 * Control whether the VNC code emits verbose debug
 * messages on stderr
 * @param enabled TRUE to turn on verbose debugging
 */
function utilSetDebug(enabled: boolean): void
interface Audio_ConstructProps extends GObject.Object_ConstructProps {
}

interface Audio {

    // Owm methods of GVnc-1.0.GVnc.Audio

    /**
     * Request playback of a single audio sample in `sample`
     * @param sample the audio sample
     */
    playbackData(sample: AudioSample): void
    /**
     * Indicate that the remote desktop is about to start
     * audio playback in format `format`.
     * @param format the new audio format
     */
    playbackStart(format: AudioFormat): void
    /**
     * Indicate that the remote desktop has completed
     * audio playback
     */
    playbackStop(): void

    // Class property signals of GVnc-1.0.GVnc.Audio

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Audio extends GObject.Object {

    // Own properties of GVnc-1.0.GVnc.Audio

    static name: string
    static $gtype: GObject.GType<Audio>

    // Constructors of GVnc-1.0.GVnc.Audio

    constructor(config?: Audio_ConstructProps) 
    _init(config?: Audio_ConstructProps): void
}

interface Framebuffer_ConstructProps extends GObject.Object_ConstructProps {
}

interface Framebuffer {

    // Owm methods of GVnc-1.0.GVnc.Framebuffer

    blt(src: number, rowstride: number, x: number, y: number, width: number, height: number): void
    /**
     * Copies data from the range (`srcx,` `srcy)` to
     * (`srcx+``width,` `srcy+``height)` over to the
     * range starting at (`dstx,` `dsty)`.
     * @param srcx the horizontal starting pixel
     * @param srcy the vertical starting pixel
     * @param dstx the horizontal target pixel
     * @param dsty the vertical target pixel
     * @param width the width of the region
     * @param height the height of the region
     */
    copyrect(srcx: number, srcy: number, dstx: number, dsty: number, width: number, height: number): void
    /**
     * Fill all the pixels in the range (`x,` `y)` to
     * (`x` + `width,` `y` + `height)` to the value in
     * `src`. The number of bytes in `src` is
     * determined by the remote pixel format
     * @param src the new pixel data
     * @param x the horizontal pixel to start filling
     * @param y the vertical pixel to start filling
     * @param width the number of pixels to fill horizontally
     * @param height the number of pixels to fill vertically
     */
    fill(src: Uint8Array, x: number, y: number, width: number, height: number): void
    /**
     * Get a pointer to the framebuffer contents
     */
    getBuffer(): Uint8Array
    /**
     * Query the height of the remote framebuffer
     */
    getHeight(): number
    /**
     * Get the pixel format used to store the framebuffer locally
     */
    getLocalFormat(): PixelFormat
    getRemoteFormat(): PixelFormat
    /**
     * Get the number of bytes per line of the framebuffer
     */
    getRowstride(): number
    /**
     * Query the width of the remote framebuffer
     */
    getWidth(): number
    /**
     * Determine if the local and remote pixel formats match
     */
    perfectFormatMatch(): boolean
    /**
     * Fill all the pixels in the range (`x,` `y)` to
     * (`x` + `width,` `y` + `height)` to the value in
     * `src`. The number of bytes in `src` is always
     * 3 as it must be in plain RGB24 format.
     * @param src the new pixel data
     * @param rowstride the number of bytes per row
     * @param x the horizontal pixel to start filling
     * @param y the vertical pixel to start filling
     * @param width the number of pixels to fill horizontally
     * @param height the number of pixels to fill vertically
     */
    rgb24Blt(src: Uint8Array, rowstride: number, x: number, y: number, width: number, height: number): void
    /**
     * Set the color map to use for the framebuffer
     * @param map the new color map
     */
    setColorMap(map: ColorMap): void
    /**
     * Sets a pixel in the framebuffer at (`x,` `y)` to the
     * value in `src`. The number of bytes in `src` is
     * determined by the remote pixel format
     * @param src the new pixel data
     * @param x the horizontal pixel to set
     * @param y the vertical pixel to set
     */
    setPixelAt(src: Uint8Array, x: number, y: number): void

    // Class property signals of GVnc-1.0.GVnc.Framebuffer

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Framebuffer extends GObject.Object {

    // Own properties of GVnc-1.0.GVnc.Framebuffer

    static name: string
    static $gtype: GObject.GType<Framebuffer>

    // Constructors of GVnc-1.0.GVnc.Framebuffer

    constructor(config?: Framebuffer_ConstructProps) 
    _init(config?: Framebuffer_ConstructProps): void
}

interface BaseAudio_ConstructProps extends Audio_ConstructProps, GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `vnc-audio-playback-data`
 */
interface BaseAudio_VncAudioPlaybackDataSignalCallback {
    (object: AudioSample): void
}

/**
 * Signal callback interface for `vnc-audio-playback-start`
 */
interface BaseAudio_VncAudioPlaybackStartSignalCallback {
    (object: AudioFormat): void
}

/**
 * Signal callback interface for `vnc-audio-playback-stop`
 */
interface BaseAudio_VncAudioPlaybackStopSignalCallback {
    (): void
}

interface BaseAudio extends Audio {

    // Own fields of GVnc-1.0.GVnc.BaseAudio

    parent: GObject.Object
    priv: BaseAudioPrivate

    // Own signals of GVnc-1.0.GVnc.BaseAudio

    connect(sigName: "vnc-audio-playback-data", callback: BaseAudio_VncAudioPlaybackDataSignalCallback): number
    on(sigName: "vnc-audio-playback-data", callback: BaseAudio_VncAudioPlaybackDataSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-audio-playback-data", callback: BaseAudio_VncAudioPlaybackDataSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-audio-playback-data", callback: BaseAudio_VncAudioPlaybackDataSignalCallback): NodeJS.EventEmitter
    emit(sigName: "vnc-audio-playback-data", ...args: any[]): void
    connect(sigName: "vnc-audio-playback-start", callback: BaseAudio_VncAudioPlaybackStartSignalCallback): number
    on(sigName: "vnc-audio-playback-start", callback: BaseAudio_VncAudioPlaybackStartSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-audio-playback-start", callback: BaseAudio_VncAudioPlaybackStartSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-audio-playback-start", callback: BaseAudio_VncAudioPlaybackStartSignalCallback): NodeJS.EventEmitter
    emit(sigName: "vnc-audio-playback-start", ...args: any[]): void
    connect(sigName: "vnc-audio-playback-stop", callback: BaseAudio_VncAudioPlaybackStopSignalCallback): number
    on(sigName: "vnc-audio-playback-stop", callback: BaseAudio_VncAudioPlaybackStopSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-audio-playback-stop", callback: BaseAudio_VncAudioPlaybackStopSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-audio-playback-stop", callback: BaseAudio_VncAudioPlaybackStopSignalCallback): NodeJS.EventEmitter
    emit(sigName: "vnc-audio-playback-stop", ...args: any[]): void

    // Class property signals of GVnc-1.0.GVnc.BaseAudio

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class BaseAudio extends GObject.Object {

    // Own properties of GVnc-1.0.GVnc.BaseAudio

    static name: string
    static $gtype: GObject.GType<BaseAudio>

    // Constructors of GVnc-1.0.GVnc.BaseAudio

    constructor(config?: BaseAudio_ConstructProps) 
    /**
     * Create a new generic VNC audio object, which will emit
     * signals when key audio events occur. Callers can connect
     * to these signals to provide playback facilities.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new generic VNC audio object, which will emit
     * signals when key audio events occur. Callers can connect
     * to these signals to provide playback facilities.
     * @constructor 
     */
    static new(): BaseAudio
    _init(config?: BaseAudio_ConstructProps): void
}

interface BaseFramebuffer_ConstructProps extends Framebuffer_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of GVnc-1.0.GVnc.BaseFramebuffer

    buffer?: object | null
    colorMap?: ColorMap | null
    height?: number | null
    localFormat?: PixelFormat | null
    remoteFormat?: PixelFormat | null
    rowstride?: number | null
    width?: number | null
}

interface BaseFramebuffer extends Framebuffer {

    // Own properties of GVnc-1.0.GVnc.BaseFramebuffer

    readonly buffer: object
    colorMap: ColorMap
    readonly height: number
    readonly localFormat: PixelFormat
    readonly remoteFormat: PixelFormat
    readonly rowstride: number
    readonly width: number

    // Own fields of GVnc-1.0.GVnc.BaseFramebuffer

    parent: GObject.Object
    priv: BaseFramebufferPrivate

    // Class property signals of GVnc-1.0.GVnc.BaseFramebuffer

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

class BaseFramebuffer extends GObject.Object {

    // Own properties of GVnc-1.0.GVnc.BaseFramebuffer

    static name: string
    static $gtype: GObject.GType<BaseFramebuffer>

    // Constructors of GVnc-1.0.GVnc.BaseFramebuffer

    constructor(config?: BaseFramebuffer_ConstructProps) 
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
     */
    constructor(buffer: Uint8Array, width: number, height: number, rowstride: number, localFormat: PixelFormat, remoteFormat: PixelFormat) 
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
     */
    static new(buffer: Uint8Array, width: number, height: number, rowstride: number, localFormat: PixelFormat, remoteFormat: PixelFormat): BaseFramebuffer
    _init(config?: BaseFramebuffer_ConstructProps): void
}

interface Connection_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GVnc-1.0.GVnc.Connection

    framebuffer?: Framebuffer | null
}

/**
 * Signal callback interface for `vnc-auth-choose-subtype`
 */
interface Connection_VncAuthChooseSubtypeSignalCallback {
    (object: number, p0: GObject.ValueArray): void
}

/**
 * Signal callback interface for `vnc-auth-choose-type`
 */
interface Connection_VncAuthChooseTypeSignalCallback {
    (object: GObject.ValueArray): void
}

/**
 * Signal callback interface for `vnc-auth-credential`
 */
interface Connection_VncAuthCredentialSignalCallback {
    (object: GObject.ValueArray): void
}

/**
 * Signal callback interface for `vnc-auth-failure`
 */
interface Connection_VncAuthFailureSignalCallback {
    (object: string): void
}

/**
 * Signal callback interface for `vnc-auth-unsupported`
 */
interface Connection_VncAuthUnsupportedSignalCallback {
    (object: number): void
}

/**
 * Signal callback interface for `vnc-bell`
 */
interface Connection_VncBellSignalCallback {
    (): void
}

/**
 * Signal callback interface for `vnc-connected`
 */
interface Connection_VncConnectedSignalCallback {
    (): void
}

/**
 * Signal callback interface for `vnc-cursor-changed`
 */
interface Connection_VncCursorChangedSignalCallback {
    (cursor: Cursor | null): void
}

/**
 * Signal callback interface for `vnc-desktop-rename`
 */
interface Connection_VncDesktopRenameSignalCallback {
    (object: string): void
}

/**
 * Signal callback interface for `vnc-desktop-resize`
 */
interface Connection_VncDesktopResizeSignalCallback {
    (object: number, p0: number): void
}

/**
 * Signal callback interface for `vnc-disconnected`
 */
interface Connection_VncDisconnectedSignalCallback {
    (): void
}

/**
 * Signal callback interface for `vnc-error`
 */
interface Connection_VncErrorSignalCallback {
    (object: string): void
}

/**
 * Signal callback interface for `vnc-framebuffer-update`
 */
interface Connection_VncFramebufferUpdateSignalCallback {
    (object: number, p0: number, p1: number, p2: number): void
}

/**
 * Signal callback interface for `vnc-initialized`
 */
interface Connection_VncInitializedSignalCallback {
    (): void
}

/**
 * Signal callback interface for `vnc-led-state`
 */
interface Connection_VncLedStateSignalCallback {
    (): void
}

/**
 * Signal callback interface for `vnc-pixel-format-changed`
 */
interface Connection_VncPixelFormatChangedSignalCallback {
    (object: PixelFormat): void
}

/**
 * Signal callback interface for `vnc-pointer-mode-changed`
 */
interface Connection_VncPointerModeChangedSignalCallback {
    (object: boolean): void
}

/**
 * Signal callback interface for `vnc-power-control-failed`
 */
interface Connection_VncPowerControlFailedSignalCallback {
    (): void
}

/**
 * Signal callback interface for `vnc-power-control-initialized`
 */
interface Connection_VncPowerControlInitializedSignalCallback {
    (): void
}

/**
 * Signal callback interface for `vnc-server-cut-text`
 */
interface Connection_VncServerCutTextSignalCallback {
    (object: string): void
}

interface Connection {

    // Own properties of GVnc-1.0.GVnc.Connection

    framebuffer: Framebuffer

    // Own fields of GVnc-1.0.GVnc.Connection

    parent: GObject.Object
    priv: ConnectionPrivate

    // Owm methods of GVnc-1.0.GVnc.Connection

    /**
     * Tell the server that it is no longer permitted to send
     * audio. The client may continue to receive audio for a
     * time after this, since packets may already be in flight.
     */
    audioDisable(): boolean
    /**
     * Tell the server that it is permitted to send audio
     * data.
     */
    audioEnable(): boolean
    clientCutText(data: object | null, length: number): boolean
    /**
     * Request that the server send a framebuffer update when the
     * region positioned at (`x,` `y)` wth size (`width,` `height)`
     * sees damage. The update sent may be a subset of the region
     * requested, if `incremental` is FALSE.
     * @param incremental TRUE to only receive region with changes
     * @param x horizontal offset to region of update
     * @param y vertical offset to region of update
     * @param width horizontal size of region of update
     * @param height vertical size of region of update
     */
    framebufferUpdateRequest(incremental: boolean, x: number, y: number, width: number, height: number): boolean
    /**
     * Determine if the remote server supports absolute pointer
     * motion events. This will only be valid once the
     * "vnc-initialized" signal has been emitted.
     */
    getAbsPointer(): boolean
    /**
     * Get the current audio format specification
     */
    getAudioFormat(): AudioFormat
    /**
     * Get the cursor currently associated with the desktop,
     * if any.
     */
    getCursor(): Cursor
    /**
     * Determine if the remote server supports the extended
     * keyboard event which transmits raw XT scancodes.
     * This will only be valid once the "vnc-initialized"
     * signal has been emitted
     */
    getExtKeyEvent(): boolean
    /**
     * Get the height of the remote display. The height will
     * only be set once the "vnc-initialized" signal has
     * been emitted
     */
    getHeight(): number
    /**
     * Get the current LED state bitmap. This is only
     * valid once the "vnc-initialized" signal has been
     * emitted.
     */
    getLedstate(): number
    /**
     * Get the name of the remote display. A name will only
     * be available once the "vnc-initialized" signal has
     * been emitted
     */
    getName(): string
    /**
     * Get a specification of the current pixel format
     */
    getPixelFormat(): PixelFormat
    /**
     * Determine if the remote server supports power control.
     * This will only be valid once the "vnc-initialized"
     * signal has been emitted.
     */
    getPowerControl(): boolean
    /**
     * Get the sharing state for the connection
     */
    getShared(): boolean
    /**
     * Get the width of the remote display. The width will
     * only be set once the "vnc-initialized" signal has
     * been emitted
     */
    getWidth(): number
    /**
     * Determine if the current connection is in an error
     * state
     */
    hasError(): boolean
    /**
     * Determine if the connection to the remote desktop is
     * fully initialized and thus receiving framebuffer
     * updates.
     */
    isInitialized(): boolean
    /**
     * Check if the connection is currently open
     */
    isOpen(): boolean
    /**
     * Send a key press/release event to the server. By default the
     * event will be sent with the X11 key code from `key`. If the
     * extended key event protocol extension is active, the `scancode`
     * will be sent instead.
     * @param downFlag TRUE if this is a key press, FALSE for a key release
     * @param key the X11 key code
     * @param scancode the XT scan code
     */
    keyEvent(downFlag: boolean, key: number, scancode: number): boolean
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
     */
    openAddr(addr: Gio.SocketAddress, hostname: string | null): boolean
    /**
     * Open a connection using `fd` as the transport. If `fd`
     * refers to a TCP connection, it is recommended to use
     * vnc_connection_open_fd_with_hostname instead, to
     * provide the remote hostname. This allows use of
     * x509 based authentication which requires a hostname
     * to be available.
     * @param fd file descriptor to use for the connection
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
     */
    openFdWithHostname(fd: number, hostname: string | null): boolean
    /**
     * Open a TCP connection to the remote desktop at `host`
     * listening on `port`.
     * @param host the host name or IP address
     * @param port the service name or port number
     */
    openHost(host: string, port: string): boolean
    /**
     * Send a pointer event to the server, reflecting either movement
     * of the pointer, or a change in state of its buttons, or both.
     * @param buttonMask the new state of the buttons
     * @param x the new horizontal position of the pointer
     * @param y the new veritical position of the pointer
     */
    pointerEvent(buttonMask: number, x: number, y: number): boolean
    /**
     * Perform a power control action on the remote server.
     * 
     * This is only valid if the "vnc-power-control" signal
     * has been emitted with a VNC_CONNECTION_POWER_STATUS_INIT
     * code.
     * 
     * The action should be assumed to be accepted unless
     * "vnc-power-control" signal is emitted with a
     * VNC_CONNECTION_POWER_STATUS_FAIL code.
     * @param action 
     */
    powerControl(action: ConnectionPowerAction): boolean
    /**
     * Set the audio sink to use for playing back audio from
     * the remote session.
     * @param audio the audio sink
     */
    setAudio(audio: Audio): boolean
    /**
     * Set the audio format specification to use for playback
     * from the remote session. The format should only be set
     * when the audio stream is not active, otherwise it will
     * be impossible to determine when the server has switched
     * to sending data in the new format
     * @param fmt the audio format
     */
    setAudioFormat(fmt: AudioFormat): boolean
    /**
     * If a multi-level authentication scheme was requested, this
     * identifies which auth type to use for the second phase.
     * @param type the auth sub-type
     */
    setAuthSubtype(type: number): boolean
    /**
     * Set the authentication type to use to complete the
     * connection.
     * @param type the requested auth type
     */
    setAuthType(type: number): boolean
    /**
     * Sets the value of the authentication credential
     * `type` to the string `data`.
     * 
     * `type` is one of the VncConnectionCredential enum vlaues
     * @param type the authentication credential type
     * @param data the value associated with the credential
     */
    setCredential(type: number, data: string): boolean
    /**
     * Inform the server of the list of encodings that it is
     * allowed to send. This should be done before requesting
     * any framebuffer updates
     * @param encoding the list of permitted encodings
     */
    setEncodings(encoding: number[]): boolean
    /**
     * Set the framebuffer object to which frame buffer updates
     * will be written.
     * @param fb the framebuffer object
     */
    setFramebuffer(fb: Framebuffer): boolean
    /**
     * Tell the server what pixel format  to use for
     * framebuffer updates. It is only safe to use this
     * when no framebuffer updates are pending, otherwise
     * it is impossible to determine when the server has
     * switched over to using the new format.
     * @param fmt the new pixel format
     */
    setPixelFormat(fmt: PixelFormat): boolean
    /**
     * Set the shared state for the connection. A TRUE value
     * allow allow this client to co-exist with other existing
     * clients. A FALSE value will cause other clients to be
     * dropped
     * @param shared the new sharing state
     */
    setShared(shared: boolean): boolean
    setSize(width: number, height: number): ConnectionResizeStatus
    /**
     * Initiate a shutdown of the current connection
     * by closing its socket
     */
    shutdown(): void

    // Own signals of GVnc-1.0.GVnc.Connection

    connect(sigName: "vnc-auth-choose-subtype", callback: Connection_VncAuthChooseSubtypeSignalCallback): number
    on(sigName: "vnc-auth-choose-subtype", callback: Connection_VncAuthChooseSubtypeSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-auth-choose-subtype", callback: Connection_VncAuthChooseSubtypeSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-auth-choose-subtype", callback: Connection_VncAuthChooseSubtypeSignalCallback): NodeJS.EventEmitter
    emit(sigName: "vnc-auth-choose-subtype", p0: GObject.ValueArray, ...args: any[]): void
    connect(sigName: "vnc-auth-choose-type", callback: Connection_VncAuthChooseTypeSignalCallback): number
    on(sigName: "vnc-auth-choose-type", callback: Connection_VncAuthChooseTypeSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-auth-choose-type", callback: Connection_VncAuthChooseTypeSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-auth-choose-type", callback: Connection_VncAuthChooseTypeSignalCallback): NodeJS.EventEmitter
    emit(sigName: "vnc-auth-choose-type", ...args: any[]): void
    connect(sigName: "vnc-auth-credential", callback: Connection_VncAuthCredentialSignalCallback): number
    on(sigName: "vnc-auth-credential", callback: Connection_VncAuthCredentialSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-auth-credential", callback: Connection_VncAuthCredentialSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-auth-credential", callback: Connection_VncAuthCredentialSignalCallback): NodeJS.EventEmitter
    emit(sigName: "vnc-auth-credential", ...args: any[]): void
    connect(sigName: "vnc-auth-failure", callback: Connection_VncAuthFailureSignalCallback): number
    on(sigName: "vnc-auth-failure", callback: Connection_VncAuthFailureSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-auth-failure", callback: Connection_VncAuthFailureSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-auth-failure", callback: Connection_VncAuthFailureSignalCallback): NodeJS.EventEmitter
    emit(sigName: "vnc-auth-failure", ...args: any[]): void
    connect(sigName: "vnc-auth-unsupported", callback: Connection_VncAuthUnsupportedSignalCallback): number
    on(sigName: "vnc-auth-unsupported", callback: Connection_VncAuthUnsupportedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-auth-unsupported", callback: Connection_VncAuthUnsupportedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-auth-unsupported", callback: Connection_VncAuthUnsupportedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "vnc-auth-unsupported", ...args: any[]): void
    connect(sigName: "vnc-bell", callback: Connection_VncBellSignalCallback): number
    on(sigName: "vnc-bell", callback: Connection_VncBellSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-bell", callback: Connection_VncBellSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-bell", callback: Connection_VncBellSignalCallback): NodeJS.EventEmitter
    emit(sigName: "vnc-bell", ...args: any[]): void
    connect(sigName: "vnc-connected", callback: Connection_VncConnectedSignalCallback): number
    on(sigName: "vnc-connected", callback: Connection_VncConnectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-connected", callback: Connection_VncConnectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-connected", callback: Connection_VncConnectedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "vnc-connected", ...args: any[]): void
    connect(sigName: "vnc-cursor-changed", callback: Connection_VncCursorChangedSignalCallback): number
    on(sigName: "vnc-cursor-changed", callback: Connection_VncCursorChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-cursor-changed", callback: Connection_VncCursorChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-cursor-changed", callback: Connection_VncCursorChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "vnc-cursor-changed", ...args: any[]): void
    connect(sigName: "vnc-desktop-rename", callback: Connection_VncDesktopRenameSignalCallback): number
    on(sigName: "vnc-desktop-rename", callback: Connection_VncDesktopRenameSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-desktop-rename", callback: Connection_VncDesktopRenameSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-desktop-rename", callback: Connection_VncDesktopRenameSignalCallback): NodeJS.EventEmitter
    emit(sigName: "vnc-desktop-rename", ...args: any[]): void
    connect(sigName: "vnc-desktop-resize", callback: Connection_VncDesktopResizeSignalCallback): number
    on(sigName: "vnc-desktop-resize", callback: Connection_VncDesktopResizeSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-desktop-resize", callback: Connection_VncDesktopResizeSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-desktop-resize", callback: Connection_VncDesktopResizeSignalCallback): NodeJS.EventEmitter
    emit(sigName: "vnc-desktop-resize", p0: number, ...args: any[]): void
    connect(sigName: "vnc-disconnected", callback: Connection_VncDisconnectedSignalCallback): number
    on(sigName: "vnc-disconnected", callback: Connection_VncDisconnectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-disconnected", callback: Connection_VncDisconnectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-disconnected", callback: Connection_VncDisconnectedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "vnc-disconnected", ...args: any[]): void
    connect(sigName: "vnc-error", callback: Connection_VncErrorSignalCallback): number
    on(sigName: "vnc-error", callback: Connection_VncErrorSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-error", callback: Connection_VncErrorSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-error", callback: Connection_VncErrorSignalCallback): NodeJS.EventEmitter
    emit(sigName: "vnc-error", ...args: any[]): void
    connect(sigName: "vnc-framebuffer-update", callback: Connection_VncFramebufferUpdateSignalCallback): number
    on(sigName: "vnc-framebuffer-update", callback: Connection_VncFramebufferUpdateSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-framebuffer-update", callback: Connection_VncFramebufferUpdateSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-framebuffer-update", callback: Connection_VncFramebufferUpdateSignalCallback): NodeJS.EventEmitter
    emit(sigName: "vnc-framebuffer-update", p0: number, p1: number, p2: number, ...args: any[]): void
    connect(sigName: "vnc-initialized", callback: Connection_VncInitializedSignalCallback): number
    on(sigName: "vnc-initialized", callback: Connection_VncInitializedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-initialized", callback: Connection_VncInitializedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-initialized", callback: Connection_VncInitializedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "vnc-initialized", ...args: any[]): void
    connect(sigName: "vnc-led-state", callback: Connection_VncLedStateSignalCallback): number
    on(sigName: "vnc-led-state", callback: Connection_VncLedStateSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-led-state", callback: Connection_VncLedStateSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-led-state", callback: Connection_VncLedStateSignalCallback): NodeJS.EventEmitter
    emit(sigName: "vnc-led-state", ...args: any[]): void
    connect(sigName: "vnc-pixel-format-changed", callback: Connection_VncPixelFormatChangedSignalCallback): number
    on(sigName: "vnc-pixel-format-changed", callback: Connection_VncPixelFormatChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-pixel-format-changed", callback: Connection_VncPixelFormatChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-pixel-format-changed", callback: Connection_VncPixelFormatChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "vnc-pixel-format-changed", ...args: any[]): void
    connect(sigName: "vnc-pointer-mode-changed", callback: Connection_VncPointerModeChangedSignalCallback): number
    on(sigName: "vnc-pointer-mode-changed", callback: Connection_VncPointerModeChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-pointer-mode-changed", callback: Connection_VncPointerModeChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-pointer-mode-changed", callback: Connection_VncPointerModeChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "vnc-pointer-mode-changed", ...args: any[]): void
    connect(sigName: "vnc-power-control-failed", callback: Connection_VncPowerControlFailedSignalCallback): number
    on(sigName: "vnc-power-control-failed", callback: Connection_VncPowerControlFailedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-power-control-failed", callback: Connection_VncPowerControlFailedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-power-control-failed", callback: Connection_VncPowerControlFailedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "vnc-power-control-failed", ...args: any[]): void
    connect(sigName: "vnc-power-control-initialized", callback: Connection_VncPowerControlInitializedSignalCallback): number
    on(sigName: "vnc-power-control-initialized", callback: Connection_VncPowerControlInitializedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-power-control-initialized", callback: Connection_VncPowerControlInitializedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-power-control-initialized", callback: Connection_VncPowerControlInitializedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "vnc-power-control-initialized", ...args: any[]): void
    connect(sigName: "vnc-server-cut-text", callback: Connection_VncServerCutTextSignalCallback): number
    on(sigName: "vnc-server-cut-text", callback: Connection_VncServerCutTextSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-server-cut-text", callback: Connection_VncServerCutTextSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-server-cut-text", callback: Connection_VncServerCutTextSignalCallback): NodeJS.EventEmitter
    emit(sigName: "vnc-server-cut-text", ...args: any[]): void

    // Class property signals of GVnc-1.0.GVnc.Connection

    connect(sigName: "notify::framebuffer", callback: (...args: any[]) => void): number
    on(sigName: "notify::framebuffer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::framebuffer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::framebuffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::framebuffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Connection extends GObject.Object {

    // Own properties of GVnc-1.0.GVnc.Connection

    static name: string
    static $gtype: GObject.GType<Connection>

    // Constructors of GVnc-1.0.GVnc.Connection

    constructor(config?: Connection_ConstructProps) 
    /**
     * Create a new connection object, which is initially
     * in the disconnected state.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new connection object, which is initially
     * in the disconnected state.
     * @constructor 
     */
    static new(): Connection
    _init(config?: Connection_ConstructProps): void
}

interface Cursor_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GVnc-1.0.GVnc.Cursor

    data?: object | null
    height?: number | null
    hotx?: number | null
    hoty?: number | null
    width?: number | null
}

interface Cursor {

    // Own properties of GVnc-1.0.GVnc.Cursor

    data: object
    height: number
    hotx: number
    hoty: number
    width: number

    // Own fields of GVnc-1.0.GVnc.Cursor

    parent: GObject.Object
    priv: CursorPrivate

    // Owm methods of GVnc-1.0.GVnc.Cursor

    /**
     * Get the bitmap data representing the cursor
     */
    getData(): Uint8Array

    // Overloads of getData

    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key?: string): object | null
    getData(...args: any[]): any
    getData(args_or_key?: any[] | string): Uint8Array | object | null | any
    /**
     * Get the height of the cursor bitmap
     */
    getHeight(): number
    /**
     * Get the horizontal position of the cursor hot point
     */
    getHotx(): number
    /**
     * Get the vertical position of the cursor hot point
     */
    getHoty(): number
    /**
     * Get the width of the cursor bitmap
     */
    getWidth(): number

    // Class property signals of GVnc-1.0.GVnc.Cursor

    connect(sigName: "notify::data", callback: (...args: any[]) => void): number
    on(sigName: "notify::data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::height", callback: (...args: any[]) => void): number
    on(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::hotx", callback: (...args: any[]) => void): number
    on(sigName: "notify::hotx", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hotx", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hotx", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hotx", ...args: any[]): void
    connect(sigName: "notify::hoty", callback: (...args: any[]) => void): number
    on(sigName: "notify::hoty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hoty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hoty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hoty", ...args: any[]): void
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

class Cursor extends GObject.Object {

    // Own properties of GVnc-1.0.GVnc.Cursor

    static name: string
    static $gtype: GObject.GType<Cursor>

    // Constructors of GVnc-1.0.GVnc.Cursor

    constructor(config?: Cursor_ConstructProps) 
    /**
     * Creates a new cursor using the bitmap data in `data`
     * which should be `width` * `height` * 4 in size. The
     * `data` parameter should be in the RGBA format, so
     * each pixel is 32-bits in size.
     * @constructor 
     * @param data the bitmap data for the cursor
     * @param hotx the horizontal position of the hot point
     * @param hoty the vertical position of the hot point
     * @param width the width of the cursor
     * @param height the height of the cursor
     */
    constructor(data: Uint8Array, hotx: number, hoty: number, width: number, height: number) 
    /**
     * Creates a new cursor using the bitmap data in `data`
     * which should be `width` * `height` * 4 in size. The
     * `data` parameter should be in the RGBA format, so
     * each pixel is 32-bits in size.
     * @constructor 
     * @param data the bitmap data for the cursor
     * @param hotx the horizontal position of the hot point
     * @param hoty the vertical position of the hot point
     * @param width the width of the cursor
     * @param height the height of the cursor
     */
    static new(data: Uint8Array, hotx: number, hoty: number, width: number, height: number): Cursor
    _init(config?: Cursor_ConstructProps): void
}

interface AudioFormat {

    // Own fields of GVnc-1.0.GVnc.AudioFormat

    format: number
    nchannels: number
    frequency: number

    // Owm methods of GVnc-1.0.GVnc.AudioFormat

    /**
     * Allocate a new VNC audio format struct whose
     * contents is initialized with the data found
     * in `format`. The struct must be released using
     * vnc_audio_format_free when no longer required.
     */
    copy(): AudioFormat
    /**
     * Release the memory associated with `format`
     */
    free(): void
}

class AudioFormat {

    // Own properties of GVnc-1.0.GVnc.AudioFormat

    static name: string

    // Constructors of GVnc-1.0.GVnc.AudioFormat

    /**
     * Allocate a new VNC audio format struct whose
     * contents is initialized to all zeros. The
     * struct must be released using vnc_audio_format_free
     * when no longer required
     * @constructor 
     */
    constructor() 
    /**
     * Allocate a new VNC audio format struct whose
     * contents is initialized to all zeros. The
     * struct must be released using vnc_audio_format_free
     * when no longer required
     * @constructor 
     */
    static new(): AudioFormat
}

interface AudioInterface {

    // Own fields of GVnc-1.0.GVnc.AudioInterface

    parent: GObject.TypeInterface
    playbackStart: (audio: Audio, format: AudioFormat) => boolean
    playbackStop: (audio: Audio) => boolean
    playbackData: (audio: Audio, sample: AudioSample) => boolean
}

abstract class AudioInterface {

    // Own properties of GVnc-1.0.GVnc.AudioInterface

    static name: string
}

interface AudioSample {

    // Own fields of GVnc-1.0.GVnc.AudioSample

    data: number
    length: number
    capacity: number

    // Owm methods of GVnc-1.0.GVnc.AudioSample

    /**
     * Allocate a new audio sample, initializing it with a copy
     * of the data in `sample`.
     * 
     * The returned sample must be freed with
     * vnc_audio_sample_free when no longer required.
     */
    copy(): AudioSample
    /**
     * Release memory associated with the audio sample
     * `sample`
     */
    free(): void
}

class AudioSample {

    // Own properties of GVnc-1.0.GVnc.AudioSample

    static name: string

    // Constructors of GVnc-1.0.GVnc.AudioSample

    /**
     * Allocate a new audio sample able to store `capacity`
     * bytes of audio data.
     * 
     * The returned sample must be freed with
     * vnc_audio_sample_free when no longer required.
     * @constructor 
     * @param capacity the sample size in bytes
     */
    constructor(capacity: number) 
    /**
     * Allocate a new audio sample able to store `capacity`
     * bytes of audio data.
     * 
     * The returned sample must be freed with
     * vnc_audio_sample_free when no longer required.
     * @constructor 
     * @param capacity the sample size in bytes
     */
    static new(capacity: number): AudioSample
}

interface BaseAudioClass {

    // Own fields of GVnc-1.0.GVnc.BaseAudioClass

    parentClass: GObject.ObjectClass
    playbackStart: (audio: BaseAudio, format: AudioFormat) => boolean
    playbackStop: (audio: BaseAudio) => boolean
    playbackData: (audio: BaseAudio, sample: AudioSample) => boolean
}

abstract class BaseAudioClass {

    // Own properties of GVnc-1.0.GVnc.BaseAudioClass

    static name: string
}

interface BaseAudioPrivate {
}

class BaseAudioPrivate {

    // Own properties of GVnc-1.0.GVnc.BaseAudioPrivate

    static name: string
}

interface BaseFramebufferClass {

    // Own fields of GVnc-1.0.GVnc.BaseFramebufferClass

    parentClass: GObject.ObjectClass
    vncReserved: object[]
}

abstract class BaseFramebufferClass {

    // Own properties of GVnc-1.0.GVnc.BaseFramebufferClass

    static name: string
}

interface BaseFramebufferPrivate {
}

class BaseFramebufferPrivate {

    // Own properties of GVnc-1.0.GVnc.BaseFramebufferPrivate

    static name: string
}

interface ColorMap {

    // Own fields of GVnc-1.0.GVnc.ColorMap

    offset: number
    size: number
    colors: ColorMapEntry

    // Owm methods of GVnc-1.0.GVnc.ColorMap

    /**
     * Allocate a new color map initializing it with a
     * copy of the data stored in `map`.
     */
    copy(): ColorMap
    /**
     * Release the memory associated with the
     * color map `map`
     */
    free(): void
    /**
     * Lookup the RGB values associated with the
     * colour map entry at position `idx`
     * @param idx the index to set
     */
    lookup(idx: number): [ /* returnType */ boolean, /* red */ number, /* green */ number, /* blue */ number ]
    /**
     * Update the RGB value associated with the
     * color map entry at position `idx`.
     * @param idx the index to set
     * @param red the new red value
     * @param green the new green value
     * @param blue the new blue value
     */
    set(idx: number, red: number, green: number, blue: number): boolean
}

class ColorMap {

    // Own properties of GVnc-1.0.GVnc.ColorMap

    static name: string

    // Constructors of GVnc-1.0.GVnc.ColorMap

    /**
     * Allocate a new colour map object able to store colour
     * map entries with indexes in the range `offset` to
     * `offset` + `size`.
     * 
     * The color map must be freed with vnc_color_map_free
     * when no longer required.
     * @constructor 
     * @param offset the offset at which the color map starts
     * @param size the number of entries
     */
    constructor(offset: number, size: number) 
    /**
     * Allocate a new colour map object able to store colour
     * map entries with indexes in the range `offset` to
     * `offset` + `size`.
     * 
     * The color map must be freed with vnc_color_map_free
     * when no longer required.
     * @constructor 
     * @param offset the offset at which the color map starts
     * @param size the number of entries
     */
    static new(offset: number, size: number): ColorMap
}

interface ColorMapEntry {

    // Own fields of GVnc-1.0.GVnc.ColorMapEntry

    red: number
    green: number
    blue: number
}

class ColorMapEntry {

    // Own properties of GVnc-1.0.GVnc.ColorMapEntry

    static name: string
}

interface ConnectionClass {

    // Own fields of GVnc-1.0.GVnc.ConnectionClass

    parentClass: GObject.ObjectClass
    vncCursorChanged: (conn: Connection, cursor: Cursor) => void
    vncPointerModeChanged: (conn: Connection, absPointer: boolean) => void
    vncBell: (conn: Connection) => void
    vncServerCutText: (conn: Connection, text: GLib.String) => void
    vncFramebufferUpdate: (conn: Connection, x: number, y: number, width: number, height: number) => void
    vncDesktopResize: (conn: Connection, width: number, height: number) => void
    vncPixelFormatChanged: (conn: Connection, format: PixelFormat) => void
    vncAuthFailure: (conn: Connection, reason: string) => void
    vncAuthUnsupported: (conn: Connection, authType: number) => void
    vncAuthCredential: (conn: Connection, creds: GObject.ValueArray) => void
    vncAuthChooseType: (conn: Connection, types: GObject.ValueArray) => void
    vncAuthChooseSubtype: (conn: Connection, type: number, subtypes: GObject.ValueArray) => void
    vncConnected: (conn: Connection) => void
    vncInitialized: (conn: Connection) => void
    vncDisconnected: (conn: Connection) => void
    vncLedState: (conn: Connection) => void
    vncError: (conn: Connection, message: string) => void
    vncPowerControlInitialized: (conn: Connection) => void
    vncPowerControlFailed: (conn: Connection) => void
    vncDesktopRename: (conn: Connection, name: string) => void
    vncReserved: object[]
}

abstract class ConnectionClass {

    // Own properties of GVnc-1.0.GVnc.ConnectionClass

    static name: string
}

interface ConnectionPrivate {
}

class ConnectionPrivate {

    // Own properties of GVnc-1.0.GVnc.ConnectionPrivate

    static name: string
}

interface CursorClass {

    // Own fields of GVnc-1.0.GVnc.CursorClass

    parentClass: GObject.ObjectClass
    vncReserved: object[]
}

abstract class CursorClass {

    // Own properties of GVnc-1.0.GVnc.CursorClass

    static name: string
}

interface CursorPrivate {
}

class CursorPrivate {

    // Own properties of GVnc-1.0.GVnc.CursorPrivate

    static name: string
}

interface FramebufferInterface {

    // Own fields of GVnc-1.0.GVnc.FramebufferInterface

    parent: GObject.TypeInterface
    getWidth: (fb: Framebuffer) => number
    getHeight: (fb: Framebuffer) => number
    getRowstride: (fb: Framebuffer) => number
    getBuffer: (fb: Framebuffer) => number
    getLocalFormat: (fb: Framebuffer) => PixelFormat
    getRemoteFormat: (fb: Framebuffer) => PixelFormat
    perfectFormatMatch: (fb: Framebuffer) => boolean
    setPixelAt: (fb: Framebuffer, src: Uint8Array, x: number, y: number) => void
    fill: (fb: Framebuffer, src: Uint8Array, x: number, y: number, width: number, height: number) => void
    copyrect: (fb: Framebuffer, srcx: number, srcy: number, dstx: number, dsty: number, width: number, height: number) => void
    blt: (fb: Framebuffer, src: number, rowstride: number, x: number, y: number, width: number, height: number) => void
    rgb24Blt: (fb: Framebuffer, src: Uint8Array, rowstride: number, x: number, y: number, width: number, height: number) => void
    setColorMap: (fb: Framebuffer, map: ColorMap) => void
}

abstract class FramebufferInterface {

    // Own properties of GVnc-1.0.GVnc.FramebufferInterface

    static name: string
}

interface PixelFormat {

    // Own fields of GVnc-1.0.GVnc.PixelFormat

    bitsPerPixel: number
    depth: number
    byteOrder: number
    trueColorFlag: number
    redMax: number
    greenMax: number
    blueMax: number
    redShift: number
    greenShift: number
    blueShift: number

    // Owm methods of GVnc-1.0.GVnc.PixelFormat

    /**
     * Allocate a new VNC pixel format struct whose
     * contents is initialized with the data found
     * in `srcFormat`. The struct must be released using
     * vnc_pixel_format_free when no longer required.
     */
    copy(): PixelFormat
    /**
     * Release the memory associated with `format`
     */
    free(): void
    match(other: PixelFormat): boolean
}

class PixelFormat {

    // Own properties of GVnc-1.0.GVnc.PixelFormat

    static name: string

    // Constructors of GVnc-1.0.GVnc.PixelFormat

    /**
     * Allocate a new VNC pixel format struct whose
     * contents is initialized to all zeros. The
     * struct must be released using vnc_pixel_format_free
     * when no longer required
     * @constructor 
     */
    constructor() 
    /**
     * Allocate a new VNC pixel format struct whose
     * contents is initialized to all zeros. The
     * struct must be released using vnc_pixel_format_free
     * when no longer required
     * @constructor 
     */
    static new(): PixelFormat
}

}
export default GVnc;