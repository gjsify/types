// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GVnc-1.0
 */

import type * as Gjs from './Gjs';
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
function util_check_version(major: number, minor: number, micro: number): boolean
/**
 * Determine whether the VNC code will emit verbose
 * debug messages
 */
function util_get_debug(): boolean
/**
 * Get the encoded version number of the library release.
 * The major, minor and micro components are encoded in
 * 8-bits each.
 */
function util_get_version(): number
/**
 * Get the library version number in a printable
 * string format
 */
function util_get_version_string(): string
/**
 * Control whether the VNC code emits verbose debug
 * messages on stderr
 * @param enabled TRUE to turn on verbose debugging
 */
function util_set_debug(enabled: boolean): void
interface Audio_ConstructProps extends GObject.Object_ConstructProps {
}

interface Audio {

    // Owm methods of GVnc-1.0.GVnc.Audio

    /**
     * Request playback of a single audio sample in `sample`
     * @param sample the audio sample
     */
    playback_data(sample: AudioSample): void
    /**
     * Indicate that the remote desktop is about to start
     * audio playback in format `format`.
     * @param format the new audio format
     */
    playback_start(format: AudioFormat): void
    /**
     * Indicate that the remote desktop has completed
     * audio playback
     */
    playback_stop(): void

    // Own virtual methods of GVnc-1.0.GVnc.Audio

    vfunc_playback_data(sample: AudioSample): boolean
    vfunc_playback_start(format: AudioFormat): boolean
    vfunc_playback_stop(): boolean

    // Class property signals of GVnc-1.0.GVnc.Audio

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    get_buffer(): Uint8Array
    /**
     * Query the height of the remote framebuffer
     */
    get_height(): number
    /**
     * Get the pixel format used to store the framebuffer locally
     */
    get_local_format(): PixelFormat
    get_remote_format(): PixelFormat
    /**
     * Get the number of bytes per line of the framebuffer
     */
    get_rowstride(): number
    /**
     * Query the width of the remote framebuffer
     */
    get_width(): number
    /**
     * Determine if the local and remote pixel formats match
     */
    perfect_format_match(): boolean
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
    rgb24_blt(src: Uint8Array, rowstride: number, x: number, y: number, width: number, height: number): void
    /**
     * Set the color map to use for the framebuffer
     * @param map the new color map
     */
    set_color_map(map: ColorMap): void
    /**
     * Sets a pixel in the framebuffer at (`x,` `y)` to the
     * value in `src`. The number of bytes in `src` is
     * determined by the remote pixel format
     * @param src the new pixel data
     * @param x the horizontal pixel to set
     * @param y the vertical pixel to set
     */
    set_pixel_at(src: Uint8Array, x: number, y: number): void

    // Own virtual methods of GVnc-1.0.GVnc.Framebuffer

    vfunc_blt(src: number, rowstride: number, x: number, y: number, width: number, height: number): void
    /**
     * Copies data from the range (`srcx,` `srcy)` to
     * (`srcx+``width,` `srcy+``height)` over to the
     * range starting at (`dstx,` `dsty)`.
     * @virtual 
     * @param srcx the horizontal starting pixel
     * @param srcy the vertical starting pixel
     * @param dstx the horizontal target pixel
     * @param dsty the vertical target pixel
     * @param width the width of the region
     * @param height the height of the region
     */
    vfunc_copyrect(srcx: number, srcy: number, dstx: number, dsty: number, width: number, height: number): void
    /**
     * Fill all the pixels in the range (`x,` `y)` to
     * (`x` + `width,` `y` + `height)` to the value in
     * `src`. The number of bytes in `src` is
     * determined by the remote pixel format
     * @virtual 
     * @param src the new pixel data
     * @param x the horizontal pixel to start filling
     * @param y the vertical pixel to start filling
     * @param width the number of pixels to fill horizontally
     * @param height the number of pixels to fill vertically
     */
    vfunc_fill(src: Uint8Array, x: number, y: number, width: number, height: number): void
    vfunc_get_buffer(): number
    /**
     * Query the height of the remote framebuffer
     * @virtual 
     */
    vfunc_get_height(): number
    /**
     * Get the pixel format used to store the framebuffer locally
     * @virtual 
     */
    vfunc_get_local_format(): PixelFormat
    vfunc_get_remote_format(): PixelFormat
    /**
     * Get the number of bytes per line of the framebuffer
     * @virtual 
     */
    vfunc_get_rowstride(): number
    /**
     * Query the width of the remote framebuffer
     * @virtual 
     */
    vfunc_get_width(): number
    /**
     * Determine if the local and remote pixel formats match
     * @virtual 
     */
    vfunc_perfect_format_match(): boolean
    /**
     * Fill all the pixels in the range (`x,` `y)` to
     * (`x` + `width,` `y` + `height)` to the value in
     * `src`. The number of bytes in `src` is always
     * 3 as it must be in plain RGB24 format.
     * @virtual 
     * @param src the new pixel data
     * @param rowstride the number of bytes per row
     * @param x the horizontal pixel to start filling
     * @param y the vertical pixel to start filling
     * @param width the number of pixels to fill horizontally
     * @param height the number of pixels to fill vertically
     */
    vfunc_rgb24_blt(src: Uint8Array, rowstride: number, x: number, y: number, width: number, height: number): void
    /**
     * Set the color map to use for the framebuffer
     * @virtual 
     * @param map the new color map
     */
    vfunc_set_color_map(map: ColorMap): void
    /**
     * Sets a pixel in the framebuffer at (`x,` `y)` to the
     * value in `src`. The number of bytes in `src` is
     * determined by the remote pixel format
     * @virtual 
     * @param src the new pixel data
     * @param x the horizontal pixel to set
     * @param y the vertical pixel to set
     */
    vfunc_set_pixel_at(src: Uint8Array, x: number, y: number): void

    // Class property signals of GVnc-1.0.GVnc.Framebuffer

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    ($obj: BaseAudio, object: AudioSample): void
}

/**
 * Signal callback interface for `vnc-audio-playback-start`
 */
interface BaseAudio_VncAudioPlaybackStartSignalCallback {
    ($obj: BaseAudio, object: AudioFormat): void
}

/**
 * Signal callback interface for `vnc-audio-playback-stop`
 */
interface BaseAudio_VncAudioPlaybackStopSignalCallback {
    ($obj: BaseAudio): void
}

interface BaseAudio extends Audio {

    // Own fields of GVnc-1.0.GVnc.BaseAudio

    parent: GObject.Object
    priv: BaseAudioPrivate

    // Own virtual methods of GVnc-1.0.GVnc.BaseAudio

    vfunc_playback_data(sample: AudioSample): boolean
    vfunc_playback_start(format: AudioFormat): boolean
    vfunc_playback_stop(): boolean

    // Own signals of GVnc-1.0.GVnc.BaseAudio

    connect(sigName: "vnc-audio-playback-data", callback: BaseAudio_VncAudioPlaybackDataSignalCallback): number
    connect_after(sigName: "vnc-audio-playback-data", callback: BaseAudio_VncAudioPlaybackDataSignalCallback): number
    emit(sigName: "vnc-audio-playback-data", object: AudioSample, ...args: any[]): void
    connect(sigName: "vnc-audio-playback-start", callback: BaseAudio_VncAudioPlaybackStartSignalCallback): number
    connect_after(sigName: "vnc-audio-playback-start", callback: BaseAudio_VncAudioPlaybackStartSignalCallback): number
    emit(sigName: "vnc-audio-playback-start", object: AudioFormat, ...args: any[]): void
    connect(sigName: "vnc-audio-playback-stop", callback: BaseAudio_VncAudioPlaybackStopSignalCallback): number
    connect_after(sigName: "vnc-audio-playback-stop", callback: BaseAudio_VncAudioPlaybackStopSignalCallback): number
    emit(sigName: "vnc-audio-playback-stop", ...args: any[]): void

    // Class property signals of GVnc-1.0.GVnc.BaseAudio

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    color_map?: ColorMap | null
    height?: number | null
    local_format?: PixelFormat | null
    remote_format?: PixelFormat | null
    rowstride?: number | null
    width?: number | null
}

interface BaseFramebuffer extends Framebuffer {

    // Own properties of GVnc-1.0.GVnc.BaseFramebuffer

    readonly buffer: object
    color_map: ColorMap
    readonly height: number
    readonly local_format: PixelFormat
    readonly remote_format: PixelFormat
    readonly rowstride: number
    readonly width: number

    // Own fields of GVnc-1.0.GVnc.BaseFramebuffer

    parent: GObject.Object
    priv: BaseFramebufferPrivate

    // Class property signals of GVnc-1.0.GVnc.BaseFramebuffer

    connect(sigName: "notify::buffer", callback: (($obj: BaseFramebuffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer", callback: (($obj: BaseFramebuffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::color-map", callback: (($obj: BaseFramebuffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color-map", callback: (($obj: BaseFramebuffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::color-map", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: BaseFramebuffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: BaseFramebuffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::local-format", callback: (($obj: BaseFramebuffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-format", callback: (($obj: BaseFramebuffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::local-format", ...args: any[]): void
    connect(sigName: "notify::remote-format", callback: (($obj: BaseFramebuffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remote-format", callback: (($obj: BaseFramebuffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::remote-format", ...args: any[]): void
    connect(sigName: "notify::rowstride", callback: (($obj: BaseFramebuffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rowstride", callback: (($obj: BaseFramebuffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rowstride", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: BaseFramebuffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: BaseFramebuffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    ($obj: Connection, object: number, p0: GObject.ValueArray): void
}

/**
 * Signal callback interface for `vnc-auth-choose-type`
 */
interface Connection_VncAuthChooseTypeSignalCallback {
    ($obj: Connection, object: GObject.ValueArray): void
}

/**
 * Signal callback interface for `vnc-auth-credential`
 */
interface Connection_VncAuthCredentialSignalCallback {
    ($obj: Connection, object: GObject.ValueArray): void
}

/**
 * Signal callback interface for `vnc-auth-failure`
 */
interface Connection_VncAuthFailureSignalCallback {
    ($obj: Connection, object: string): void
}

/**
 * Signal callback interface for `vnc-auth-unsupported`
 */
interface Connection_VncAuthUnsupportedSignalCallback {
    ($obj: Connection, object: number): void
}

/**
 * Signal callback interface for `vnc-bell`
 */
interface Connection_VncBellSignalCallback {
    ($obj: Connection): void
}

/**
 * Signal callback interface for `vnc-connected`
 */
interface Connection_VncConnectedSignalCallback {
    ($obj: Connection): void
}

/**
 * Signal callback interface for `vnc-cursor-changed`
 */
interface Connection_VncCursorChangedSignalCallback {
    ($obj: Connection, cursor: Cursor | null): void
}

/**
 * Signal callback interface for `vnc-desktop-rename`
 */
interface Connection_VncDesktopRenameSignalCallback {
    ($obj: Connection, object: string): void
}

/**
 * Signal callback interface for `vnc-desktop-resize`
 */
interface Connection_VncDesktopResizeSignalCallback {
    ($obj: Connection, object: number, p0: number): void
}

/**
 * Signal callback interface for `vnc-disconnected`
 */
interface Connection_VncDisconnectedSignalCallback {
    ($obj: Connection): void
}

/**
 * Signal callback interface for `vnc-error`
 */
interface Connection_VncErrorSignalCallback {
    ($obj: Connection, object: string): void
}

/**
 * Signal callback interface for `vnc-framebuffer-update`
 */
interface Connection_VncFramebufferUpdateSignalCallback {
    ($obj: Connection, object: number, p0: number, p1: number, p2: number): void
}

/**
 * Signal callback interface for `vnc-initialized`
 */
interface Connection_VncInitializedSignalCallback {
    ($obj: Connection): void
}

/**
 * Signal callback interface for `vnc-led-state`
 */
interface Connection_VncLedStateSignalCallback {
    ($obj: Connection): void
}

/**
 * Signal callback interface for `vnc-pixel-format-changed`
 */
interface Connection_VncPixelFormatChangedSignalCallback {
    ($obj: Connection, object: PixelFormat): void
}

/**
 * Signal callback interface for `vnc-pointer-mode-changed`
 */
interface Connection_VncPointerModeChangedSignalCallback {
    ($obj: Connection, object: boolean): void
}

/**
 * Signal callback interface for `vnc-power-control-failed`
 */
interface Connection_VncPowerControlFailedSignalCallback {
    ($obj: Connection): void
}

/**
 * Signal callback interface for `vnc-power-control-initialized`
 */
interface Connection_VncPowerControlInitializedSignalCallback {
    ($obj: Connection): void
}

/**
 * Signal callback interface for `vnc-server-cut-text`
 */
interface Connection_VncServerCutTextSignalCallback {
    ($obj: Connection, object: string): void
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
    audio_disable(): boolean
    /**
     * Tell the server that it is permitted to send audio
     * data.
     */
    audio_enable(): boolean
    client_cut_text(data: object | null, length: number): boolean
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
    framebuffer_update_request(incremental: boolean, x: number, y: number, width: number, height: number): boolean
    /**
     * Determine if the remote server supports absolute pointer
     * motion events. This will only be valid once the
     * "vnc-initialized" signal has been emitted.
     */
    get_abs_pointer(): boolean
    /**
     * Get the current audio format specification
     */
    get_audio_format(): AudioFormat
    /**
     * Get the cursor currently associated with the desktop,
     * if any.
     */
    get_cursor(): Cursor
    /**
     * Determine if the remote server supports the extended
     * keyboard event which transmits raw XT scancodes.
     * This will only be valid once the "vnc-initialized"
     * signal has been emitted
     */
    get_ext_key_event(): boolean
    /**
     * Get the height of the remote display. The height will
     * only be set once the "vnc-initialized" signal has
     * been emitted
     */
    get_height(): number
    /**
     * Get the current LED state bitmap. This is only
     * valid once the "vnc-initialized" signal has been
     * emitted.
     */
    get_ledstate(): number
    /**
     * Get the name of the remote display. A name will only
     * be available once the "vnc-initialized" signal has
     * been emitted
     */
    get_name(): string
    /**
     * Get a specification of the current pixel format
     */
    get_pixel_format(): PixelFormat
    /**
     * Determine if the remote server supports power control.
     * This will only be valid once the "vnc-initialized"
     * signal has been emitted.
     */
    get_power_control(): boolean
    /**
     * Get the sharing state for the connection
     */
    get_shared(): boolean
    /**
     * Get the width of the remote display. The width will
     * only be set once the "vnc-initialized" signal has
     * been emitted
     */
    get_width(): number
    /**
     * Determine if the current connection is in an error
     * state
     */
    has_error(): boolean
    /**
     * Determine if the connection to the remote desktop is
     * fully initialized and thus receiving framebuffer
     * updates.
     */
    is_initialized(): boolean
    /**
     * Check if the connection is currently open
     */
    is_open(): boolean
    /**
     * Send a key press/release event to the server. By default the
     * event will be sent with the X11 key code from `key`. If the
     * extended key event protocol extension is active, the `scancode`
     * will be sent instead.
     * @param down_flag TRUE if this is a key press, FALSE for a key release
     * @param key the X11 key code
     * @param scancode the XT scan code
     */
    key_event(down_flag: boolean, key: number, scancode: number): boolean
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
    open_addr(addr: Gio.SocketAddress, hostname: string | null): boolean
    /**
     * Open a connection using `fd` as the transport. If `fd`
     * refers to a TCP connection, it is recommended to use
     * vnc_connection_open_fd_with_hostname instead, to
     * provide the remote hostname. This allows use of
     * x509 based authentication which requires a hostname
     * to be available.
     * @param fd file descriptor to use for the connection
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
     */
    open_fd_with_hostname(fd: number, hostname: string | null): boolean
    /**
     * Open a TCP connection to the remote desktop at `host`
     * listening on `port`.
     * @param host the host name or IP address
     * @param port the service name or port number
     */
    open_host(host: string, port: string): boolean
    /**
     * Send a pointer event to the server, reflecting either movement
     * of the pointer, or a change in state of its buttons, or both.
     * @param button_mask the new state of the buttons
     * @param x the new horizontal position of the pointer
     * @param y the new veritical position of the pointer
     */
    pointer_event(button_mask: number, x: number, y: number): boolean
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
    power_control(action: ConnectionPowerAction): boolean
    /**
     * Set the audio sink to use for playing back audio from
     * the remote session.
     * @param audio the audio sink
     */
    set_audio(audio: Audio): boolean
    /**
     * Set the audio format specification to use for playback
     * from the remote session. The format should only be set
     * when the audio stream is not active, otherwise it will
     * be impossible to determine when the server has switched
     * to sending data in the new format
     * @param fmt the audio format
     */
    set_audio_format(fmt: AudioFormat): boolean
    /**
     * If a multi-level authentication scheme was requested, this
     * identifies which auth type to use for the second phase.
     * @param type the auth sub-type
     */
    set_auth_subtype(type: number): boolean
    /**
     * Set the authentication type to use to complete the
     * connection.
     * @param type the requested auth type
     */
    set_auth_type(type: number): boolean
    /**
     * Sets the value of the authentication credential
     * `type` to the string `data`.
     * 
     * `type` is one of the VncConnectionCredential enum vlaues
     * @param type the authentication credential type
     * @param data the value associated with the credential
     */
    set_credential(type: number, data: string): boolean
    /**
     * Inform the server of the list of encodings that it is
     * allowed to send. This should be done before requesting
     * any framebuffer updates
     * @param encoding the list of permitted encodings
     */
    set_encodings(encoding: number[]): boolean
    /**
     * Set the framebuffer object to which frame buffer updates
     * will be written.
     * @param fb the framebuffer object
     */
    set_framebuffer(fb: Framebuffer): boolean
    /**
     * Tell the server what pixel format  to use for
     * framebuffer updates. It is only safe to use this
     * when no framebuffer updates are pending, otherwise
     * it is impossible to determine when the server has
     * switched over to using the new format.
     * @param fmt the new pixel format
     */
    set_pixel_format(fmt: PixelFormat): boolean
    /**
     * Set the shared state for the connection. A TRUE value
     * allow allow this client to co-exist with other existing
     * clients. A FALSE value will cause other clients to be
     * dropped
     * @param shared the new sharing state
     */
    set_shared(shared: boolean): boolean
    set_size(width: number, height: number): ConnectionResizeStatus
    /**
     * Initiate a shutdown of the current connection
     * by closing its socket
     */
    shutdown(): void

    // Own virtual methods of GVnc-1.0.GVnc.Connection

    vfunc_vnc_auth_choose_subtype(type: number, subtypes: GObject.ValueArray): void
    vfunc_vnc_auth_choose_type(types: GObject.ValueArray): void
    vfunc_vnc_auth_credential(creds: GObject.ValueArray): void
    vfunc_vnc_auth_failure(reason: string): void
    vfunc_vnc_auth_unsupported(authType: number): void
    vfunc_vnc_bell(): void
    vfunc_vnc_connected(): void
    vfunc_vnc_cursor_changed(cursor: Cursor): void
    vfunc_vnc_desktop_rename(name: string): void
    vfunc_vnc_desktop_resize(width: number, height: number): void
    vfunc_vnc_disconnected(): void
    vfunc_vnc_error(message: string): void
    vfunc_vnc_framebuffer_update(x: number, y: number, width: number, height: number): void
    vfunc_vnc_initialized(): void
    vfunc_vnc_led_state(): void
    vfunc_vnc_pixel_format_changed(format: PixelFormat): void
    vfunc_vnc_pointer_mode_changed(absPointer: boolean): void
    vfunc_vnc_power_control_failed(): void
    vfunc_vnc_power_control_initialized(): void
    vfunc_vnc_server_cut_text(text: GLib.String): void

    // Own signals of GVnc-1.0.GVnc.Connection

    connect(sigName: "vnc-auth-choose-subtype", callback: Connection_VncAuthChooseSubtypeSignalCallback): number
    connect_after(sigName: "vnc-auth-choose-subtype", callback: Connection_VncAuthChooseSubtypeSignalCallback): number
    emit(sigName: "vnc-auth-choose-subtype", object: number, p0: GObject.ValueArray, ...args: any[]): void
    connect(sigName: "vnc-auth-choose-type", callback: Connection_VncAuthChooseTypeSignalCallback): number
    connect_after(sigName: "vnc-auth-choose-type", callback: Connection_VncAuthChooseTypeSignalCallback): number
    emit(sigName: "vnc-auth-choose-type", object: GObject.ValueArray, ...args: any[]): void
    connect(sigName: "vnc-auth-credential", callback: Connection_VncAuthCredentialSignalCallback): number
    connect_after(sigName: "vnc-auth-credential", callback: Connection_VncAuthCredentialSignalCallback): number
    emit(sigName: "vnc-auth-credential", object: GObject.ValueArray, ...args: any[]): void
    connect(sigName: "vnc-auth-failure", callback: Connection_VncAuthFailureSignalCallback): number
    connect_after(sigName: "vnc-auth-failure", callback: Connection_VncAuthFailureSignalCallback): number
    emit(sigName: "vnc-auth-failure", object: string, ...args: any[]): void
    connect(sigName: "vnc-auth-unsupported", callback: Connection_VncAuthUnsupportedSignalCallback): number
    connect_after(sigName: "vnc-auth-unsupported", callback: Connection_VncAuthUnsupportedSignalCallback): number
    emit(sigName: "vnc-auth-unsupported", object: number, ...args: any[]): void
    connect(sigName: "vnc-bell", callback: Connection_VncBellSignalCallback): number
    connect_after(sigName: "vnc-bell", callback: Connection_VncBellSignalCallback): number
    emit(sigName: "vnc-bell", ...args: any[]): void
    connect(sigName: "vnc-connected", callback: Connection_VncConnectedSignalCallback): number
    connect_after(sigName: "vnc-connected", callback: Connection_VncConnectedSignalCallback): number
    emit(sigName: "vnc-connected", ...args: any[]): void
    connect(sigName: "vnc-cursor-changed", callback: Connection_VncCursorChangedSignalCallback): number
    connect_after(sigName: "vnc-cursor-changed", callback: Connection_VncCursorChangedSignalCallback): number
    emit(sigName: "vnc-cursor-changed", cursor: Cursor | null, ...args: any[]): void
    connect(sigName: "vnc-desktop-rename", callback: Connection_VncDesktopRenameSignalCallback): number
    connect_after(sigName: "vnc-desktop-rename", callback: Connection_VncDesktopRenameSignalCallback): number
    emit(sigName: "vnc-desktop-rename", object: string, ...args: any[]): void
    connect(sigName: "vnc-desktop-resize", callback: Connection_VncDesktopResizeSignalCallback): number
    connect_after(sigName: "vnc-desktop-resize", callback: Connection_VncDesktopResizeSignalCallback): number
    emit(sigName: "vnc-desktop-resize", object: number, p0: number, ...args: any[]): void
    connect(sigName: "vnc-disconnected", callback: Connection_VncDisconnectedSignalCallback): number
    connect_after(sigName: "vnc-disconnected", callback: Connection_VncDisconnectedSignalCallback): number
    emit(sigName: "vnc-disconnected", ...args: any[]): void
    connect(sigName: "vnc-error", callback: Connection_VncErrorSignalCallback): number
    connect_after(sigName: "vnc-error", callback: Connection_VncErrorSignalCallback): number
    emit(sigName: "vnc-error", object: string, ...args: any[]): void
    connect(sigName: "vnc-framebuffer-update", callback: Connection_VncFramebufferUpdateSignalCallback): number
    connect_after(sigName: "vnc-framebuffer-update", callback: Connection_VncFramebufferUpdateSignalCallback): number
    emit(sigName: "vnc-framebuffer-update", object: number, p0: number, p1: number, p2: number, ...args: any[]): void
    connect(sigName: "vnc-initialized", callback: Connection_VncInitializedSignalCallback): number
    connect_after(sigName: "vnc-initialized", callback: Connection_VncInitializedSignalCallback): number
    emit(sigName: "vnc-initialized", ...args: any[]): void
    connect(sigName: "vnc-led-state", callback: Connection_VncLedStateSignalCallback): number
    connect_after(sigName: "vnc-led-state", callback: Connection_VncLedStateSignalCallback): number
    emit(sigName: "vnc-led-state", ...args: any[]): void
    connect(sigName: "vnc-pixel-format-changed", callback: Connection_VncPixelFormatChangedSignalCallback): number
    connect_after(sigName: "vnc-pixel-format-changed", callback: Connection_VncPixelFormatChangedSignalCallback): number
    emit(sigName: "vnc-pixel-format-changed", object: PixelFormat, ...args: any[]): void
    connect(sigName: "vnc-pointer-mode-changed", callback: Connection_VncPointerModeChangedSignalCallback): number
    connect_after(sigName: "vnc-pointer-mode-changed", callback: Connection_VncPointerModeChangedSignalCallback): number
    emit(sigName: "vnc-pointer-mode-changed", object: boolean, ...args: any[]): void
    connect(sigName: "vnc-power-control-failed", callback: Connection_VncPowerControlFailedSignalCallback): number
    connect_after(sigName: "vnc-power-control-failed", callback: Connection_VncPowerControlFailedSignalCallback): number
    emit(sigName: "vnc-power-control-failed", ...args: any[]): void
    connect(sigName: "vnc-power-control-initialized", callback: Connection_VncPowerControlInitializedSignalCallback): number
    connect_after(sigName: "vnc-power-control-initialized", callback: Connection_VncPowerControlInitializedSignalCallback): number
    emit(sigName: "vnc-power-control-initialized", ...args: any[]): void
    connect(sigName: "vnc-server-cut-text", callback: Connection_VncServerCutTextSignalCallback): number
    connect_after(sigName: "vnc-server-cut-text", callback: Connection_VncServerCutTextSignalCallback): number
    emit(sigName: "vnc-server-cut-text", object: string, ...args: any[]): void

    // Class property signals of GVnc-1.0.GVnc.Connection

    connect(sigName: "notify::framebuffer", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::framebuffer", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::framebuffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    get_data(): Uint8Array

    // Overloads of get_data

    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key?: string): object | null
    get_data(...args: any[]): any
    get_data(args_or_key?: any[] | string): Uint8Array | object | null | any
    /**
     * Get the height of the cursor bitmap
     */
    get_height(): number
    /**
     * Get the horizontal position of the cursor hot point
     */
    get_hotx(): number
    /**
     * Get the vertical position of the cursor hot point
     */
    get_hoty(): number
    /**
     * Get the width of the cursor bitmap
     */
    get_width(): number

    // Class property signals of GVnc-1.0.GVnc.Cursor

    connect(sigName: "notify::data", callback: (($obj: Cursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: Cursor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: Cursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: Cursor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::hotx", callback: (($obj: Cursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hotx", callback: (($obj: Cursor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hotx", ...args: any[]): void
    connect(sigName: "notify::hoty", callback: (($obj: Cursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hoty", callback: (($obj: Cursor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hoty", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: Cursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: Cursor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    playback_start: (audio: Audio, format: AudioFormat) => boolean
    playback_stop: (audio: Audio) => boolean
    playback_data: (audio: Audio, sample: AudioSample) => boolean
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

    parent_class: GObject.ObjectClass
    playback_start: (audio: BaseAudio, format: AudioFormat) => boolean
    playback_stop: (audio: BaseAudio) => boolean
    playback_data: (audio: BaseAudio, sample: AudioSample) => boolean
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

    parent_class: GObject.ObjectClass
    _vnc_reserved: object[]
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

    parent_class: GObject.ObjectClass
    vnc_cursor_changed: (conn: Connection, cursor: Cursor) => void
    vnc_pointer_mode_changed: (conn: Connection, absPointer: boolean) => void
    vnc_bell: (conn: Connection) => void
    vnc_server_cut_text: (conn: Connection, text: GLib.String) => void
    vnc_framebuffer_update: (conn: Connection, x: number, y: number, width: number, height: number) => void
    vnc_desktop_resize: (conn: Connection, width: number, height: number) => void
    vnc_pixel_format_changed: (conn: Connection, format: PixelFormat) => void
    vnc_auth_failure: (conn: Connection, reason: string) => void
    vnc_auth_unsupported: (conn: Connection, authType: number) => void
    vnc_auth_credential: (conn: Connection, creds: GObject.ValueArray) => void
    vnc_auth_choose_type: (conn: Connection, types: GObject.ValueArray) => void
    vnc_auth_choose_subtype: (conn: Connection, type: number, subtypes: GObject.ValueArray) => void
    vnc_connected: (conn: Connection) => void
    vnc_initialized: (conn: Connection) => void
    vnc_disconnected: (conn: Connection) => void
    vnc_led_state: (conn: Connection) => void
    vnc_error: (conn: Connection, message: string) => void
    vnc_power_control_initialized: (conn: Connection) => void
    vnc_power_control_failed: (conn: Connection) => void
    vnc_desktop_rename: (conn: Connection, name: string) => void
    _vnc_reserved: object[]
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

    parent_class: GObject.ObjectClass
    _vnc_reserved: object[]
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
    get_width: (fb: Framebuffer) => number
    get_height: (fb: Framebuffer) => number
    get_rowstride: (fb: Framebuffer) => number
    get_buffer: (fb: Framebuffer) => number
    get_local_format: (fb: Framebuffer) => PixelFormat
    get_remote_format: (fb: Framebuffer) => PixelFormat
    perfect_format_match: (fb: Framebuffer) => boolean
    set_pixel_at: (fb: Framebuffer, src: Uint8Array, x: number, y: number) => void
    fill: (fb: Framebuffer, src: Uint8Array, x: number, y: number, width: number, height: number) => void
    copyrect: (fb: Framebuffer, srcx: number, srcy: number, dstx: number, dsty: number, width: number, height: number) => void
    blt: (fb: Framebuffer, src: number, rowstride: number, x: number, y: number, width: number, height: number) => void
    rgb24_blt: (fb: Framebuffer, src: Uint8Array, rowstride: number, x: number, y: number, width: number, height: number) => void
    set_color_map: (fb: Framebuffer, map: ColorMap) => void
}

abstract class FramebufferInterface {

    // Own properties of GVnc-1.0.GVnc.FramebufferInterface

    static name: string
}

interface PixelFormat {

    // Own fields of GVnc-1.0.GVnc.PixelFormat

    bits_per_pixel: number
    depth: number
    byte_order: number
    true_color_flag: number
    red_max: number
    green_max: number
    blue_max: number
    red_shift: number
    green_shift: number
    blue_shift: number

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