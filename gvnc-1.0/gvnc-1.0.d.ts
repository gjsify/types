/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gvnc-1.0-ambient.d.ts';
import './gvnc-1.0-import.d.ts';
/**
 * GVnc-1.0
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

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
    const LEDSTATE_CAPS_LOCK: number;
    const LEDSTATE_NUM_LOCK: number;
    const LEDSTATE_SCROLL_LOCK: number;
    const MAJOR_VERSION: number;
    const MICRO_VERSION: number;
    const MINOR_VERSION: number;
    const PADDING: number;
    const PADDING_LARGE: number;
    /**
     * Check whether the library is at least as new as the
     * version (`major,` `minor,` `micro)`
     * @param major the desired major version
     * @param minor the desired minor version
     * @param micro the desired micro version
     * @returns TRUE if the library is at least as new as the requested version
     */
    function util_check_version(major: number, minor: number, micro: number): boolean;
    /**
     * Determine whether the VNC code will emit verbose
     * debug messages
     * @returns TRUE if debugging is enabled, FALSE otherwise
     */
    function util_get_debug(): boolean;
    /**
     * Get the encoded version number of the library release.
     * The major, minor and micro components are encoded in
     * 8-bits each.
     * @returns the library version number
     */
    function util_get_version(): number;
    /**
     * Get the library version number in a printable
     * string format
     * @returns the version string
     */
    function util_get_version_string(): string;
    /**
     * Control whether the VNC code emits verbose debug
     * messages on stderr
     * @param enabled TRUE to turn on verbose debugging
     */
    function util_set_debug(enabled: boolean): void;
    module BaseAudio {
        // Signal callback interfaces

        interface VncAudioPlaybackData {
            (object: AudioSample): void;
        }

        interface VncAudioPlaybackStart {
            (object: AudioFormat): void;
        }

        interface VncAudioPlaybackStop {
            (): void;
        }

        // Constructor properties interface
    }

    class BaseAudio extends GObject.Object {
        // Constructors of GVnc-1.0.BaseAudio

        static ['new'](): BaseAudio;
    }

    module BaseFramebuffer {
        // Constructor properties interface
    }

    class BaseFramebuffer extends GObject.Object {
        // Own properties of GVnc-1.0.BaseFramebuffer

        buffer: any;
        color_map: ColorMap;
        colorMap: ColorMap;
        height: number;
        local_format: PixelFormat;
        localFormat: PixelFormat;
        remote_format: PixelFormat;
        remoteFormat: PixelFormat;
        rowstride: number;
        width: number;

        // Constructors of GVnc-1.0.BaseFramebuffer

        static ['new'](
            buffer: Uint8Array,
            width: number,
            height: number,
            rowstride: number,
            localFormat: PixelFormat,
            remoteFormat: PixelFormat,
        ): BaseFramebuffer;
    }

    module Connection {
        // Signal callback interfaces

        interface VncAuthChooseSubtype {
            (object: number, p0: GObject.ValueArray): void;
        }

        interface VncAuthChooseType {
            (object: GObject.ValueArray): void;
        }

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

        interface VncCursorChanged {
            (cursor?: Cursor | null): void;
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

        interface VncFramebufferUpdate {
            (object: number, p0: number, p1: number, p2: number): void;
        }

        interface VncInitialized {
            (): void;
        }

        interface VncLedState {
            (): void;
        }

        interface VncPixelFormatChanged {
            (object: PixelFormat): void;
        }

        interface VncPointerModeChanged {
            (object: boolean): void;
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

    class Connection extends GObject.Object {
        // Own properties of GVnc-1.0.Connection

        framebuffer: Framebuffer;

        // Constructors of GVnc-1.0.Connection

        static ['new'](): Connection;

        // Owm methods of GVnc-1.0.Connection

        /**
         * Tell the server that it is no longer permitted to send
         * audio. The client may continue to receive audio for a
         * time after this, since packets may already be in flight.
         * @returns TRUE if the connection is ok, FALSE if it has an error
         */
        audio_disable(): boolean;
        /**
         * Tell the server that it is permitted to send audio
         * data.
         * @returns TRUE if the connection is ok, FALSE if it has an error
         */
        audio_enable(): boolean;
        client_cut_text(data: any | null, length: number): boolean;
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
         * @returns TRUE if the connection is ok, FALSE if it has an error
         */
        framebuffer_update_request(incremental: boolean, x: number, y: number, width: number, height: number): boolean;
        /**
         * Determine if the remote server supports absolute pointer
         * motion events. This will only be valid once the
         * "vnc-initialized" signal has been emitted.
         * @returns TRUE if the server supports absolute pointer mode
         */
        get_abs_pointer(): boolean;
        /**
         * Get the current audio format specification
         * @returns the current audio format
         */
        get_audio_format(): AudioFormat;
        /**
         * Get the cursor currently associated with the desktop,
         * if any.
         * @returns the cursor or NULL
         */
        get_cursor(): Cursor;
        /**
         * Determine if the remote server supports the extended
         * keyboard event which transmits raw XT scancodes.
         * This will only be valid once the "vnc-initialized"
         * signal has been emitted
         * @returns TRUE if supported, FALSE otherwise
         */
        get_ext_key_event(): boolean;
        /**
         * Get the height of the remote display. The height will
         * only be set once the "vnc-initialized" signal has
         * been emitted
         * @returns the desktop height
         */
        get_height(): number;
        /**
         * Get the current LED state bitmap. This is only
         * valid once the "vnc-initialized" signal has been
         * emitted.
         * @returns the LED state
         */
        get_ledstate(): number;
        /**
         * Get the name of the remote display. A name will only
         * be available once the "vnc-initialized" signal has
         * been emitted
         * @returns the remote display name
         */
        get_name(): string;
        /**
         * Get a specification of the current pixel format
         * @returns the current pixel format
         */
        get_pixel_format(): PixelFormat;
        /**
         * Determine if the remote server supports power control.
         * This will only be valid once the "vnc-initialized"
         * signal has been emitted.
         * @returns TRUE if the server supports power control
         */
        get_power_control(): boolean;
        /**
         * Get the sharing state for the connection
         * @returns TRUE if other clients are permitted, FALSE otherwise
         */
        get_shared(): boolean;
        /**
         * Get the width of the remote display. The width will
         * only be set once the "vnc-initialized" signal has
         * been emitted
         * @returns the desktop width
         */
        get_width(): number;
        /**
         * Determine if the current connection is in an error
         * state
         * @returns TRUE if an error has occurred, FALSE otherwise
         */
        has_error(): boolean;
        /**
         * Determine if the connection to the remote desktop is
         * fully initialized and thus receiving framebuffer
         * updates.
         * @returns TRUE if initialized, FALSE if closed or still negotiating
         */
        is_initialized(): boolean;
        /**
         * Check if the connection is currently open
         * @returns TRUE if open, FALSE if closing/closed
         */
        is_open(): boolean;
        /**
         * Send a key press/release event to the server. By default the
         * event will be sent with the X11 key code from `key`. If the
         * extended key event protocol extension is active, the `scancode`
         * will be sent instead.
         * @param down_flag TRUE if this is a key press, FALSE for a key release
         * @param key the X11 key code
         * @param scancode the XT scan code
         * @returns TRUE if the connection is ok, FALSE if it has an error
         */
        key_event(down_flag: boolean, key: number, scancode: number): boolean;
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
         * vnc_connection_open_fd_with_hostname instead, to
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
        /**
         * Send a pointer event to the server, reflecting either movement
         * of the pointer, or a change in state of its buttons, or both.
         * @param button_mask the new state of the buttons
         * @param x the new horizontal position of the pointer
         * @param y the new veritical position of the pointer
         * @returns TRUE if the connection is ok, FALSE if it has an error
         */
        pointer_event(button_mask: number, x: number, y: number): boolean;
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
         * @returns TRUE if the action was sent, FALSE if power control is not supported
         */
        power_control(action: ConnectionPowerAction): boolean;
        /**
         * Set the audio sink to use for playing back audio from
         * the remote session.
         * @param audio the audio sink
         * @returns TRUE if the connection is ok, FALSE if it has an error
         */
        set_audio(audio: Audio): boolean;
        /**
         * Set the audio format specification to use for playback
         * from the remote session. The format should only be set
         * when the audio stream is not active, otherwise it will
         * be impossible to determine when the server has switched
         * to sending data in the new format
         * @param fmt the audio format
         * @returns TRUE if the connection is ok, FALSE if it has an error
         */
        set_audio_format(fmt: AudioFormat): boolean;
        /**
         * If a multi-level authentication scheme was requested, this
         * identifies which auth type to use for the second phase.
         * @param type the auth sub-type
         * @returns TRUE if the connection is ok, FALSE if it has an error
         */
        set_auth_subtype(type: number): boolean;
        /**
         * Set the authentication type to use to complete the
         * connection.
         * @param type the requested auth type
         * @returns TRUE if the connection is ok, FALSE if it has an error
         */
        set_auth_type(type: number): boolean;
        /**
         * Sets the value of the authentication credential
         * `type` to the string `data`.
         *
         * `type` is one of the VncConnectionCredential enum vlaues
         * @param type the authentication credential type
         * @param data the value associated with the credential
         * @returns TRUE if the connection is ok, FALSE if it has an error
         */
        set_credential(type: number, data: string): boolean;
        /**
         * Inform the server of the list of encodings that it is
         * allowed to send. This should be done before requesting
         * any framebuffer updates
         * @param encoding the list of permitted encodings
         * @returns TRUE if the connection is ok, FALSE if it has an error
         */
        set_encodings(encoding: number[]): boolean;
        /**
         * Set the framebuffer object to which frame buffer updates
         * will be written.
         * @param fb the framebuffer object
         * @returns TRUE if the connection is ok, FALSE if it has an error
         */
        set_framebuffer(fb: Framebuffer): boolean;
        /**
         * Tell the server what pixel format  to use for
         * framebuffer updates. It is only safe to use this
         * when no framebuffer updates are pending, otherwise
         * it is impossible to determine when the server has
         * switched over to using the new format.
         * @param fmt the new pixel format
         * @returns TRUE if the connection is ok, FALSE if it has an error
         */
        set_pixel_format(fmt: PixelFormat): boolean;
        /**
         * Set the shared state for the connection. A TRUE value
         * allow allow this client to co-exist with other existing
         * clients. A FALSE value will cause other clients to be
         * dropped
         * @param shared the new sharing state
         * @returns TRUE if the connection is ok, FALSE if it has an error
         */
        set_shared(shared: boolean): boolean;
        set_size(width: number, height: number): ConnectionResizeStatus;
        /**
         * Initiate a shutdown of the current connection
         * by closing its socket
         */
        shutdown(): void;
    }

    module Cursor {
        // Constructor properties interface
    }

    class Cursor extends GObject.Object {
        // Own properties of GVnc-1.0.Cursor

        data: any;
        height: number;
        hotx: number;
        hoty: number;
        width: number;

        // Constructors of GVnc-1.0.Cursor

        static ['new'](data: Uint8Array, hotx: number, hoty: number, width: number, height: number): Cursor;

        // Owm methods of GVnc-1.0.Cursor

        /**
         * Get the bitmap data representing the cursor
         * @returns the bitmap data
         */
        get_data(): Uint8Array;
        /**
         * Get the height of the cursor bitmap
         * @returns the height of the bitmap
         */
        get_height(): number;
        /**
         * Get the horizontal position of the cursor hot point
         * @returns the horizontal position of the hot point
         */
        get_hotx(): number;
        /**
         * Get the vertical position of the cursor hot point
         * @returns the vertical position of the hot point
         */
        get_hoty(): number;
        /**
         * Get the width of the cursor bitmap
         * @returns the width of the bitmap
         */
        get_width(): number;
    }

    class AudioFormat {
        // Own fields of GVnc-1.0.AudioFormat

        format: number;
        nchannels: number;
        frequency: number;

        // Constructors of GVnc-1.0.AudioFormat

        constructor(
            properties?: Partial<{
                format: number;
                nchannels: number;
                frequency: number;
            }>,
        );

        static ['new'](): AudioFormat;

        // Owm methods of GVnc-1.0.AudioFormat

        /**
         * Allocate a new VNC audio format struct whose
         * contents is initialized with the data found
         * in `format`. The struct must be released using
         * vnc_audio_format_free when no longer required.
         * @returns the new audio format struct
         */
        copy(): AudioFormat;
        /**
         * Release the memory associated with `format`
         */
        free(): void;
    }

    class AudioInterface {}

    class AudioSample {
        // Own fields of GVnc-1.0.AudioSample

        data: number;
        length: number;
        capacity: number;

        // Constructors of GVnc-1.0.AudioSample

        constructor(
            properties?: Partial<{
                data: number;
                length: number;
                capacity: number;
            }>,
        );

        static ['new'](capacity: number): AudioSample;

        // Owm methods of GVnc-1.0.AudioSample

        /**
         * Allocate a new audio sample, initializing it with a copy
         * of the data in `sample`.
         *
         * The returned sample must be freed with
         * vnc_audio_sample_free when no longer required.
         * @returns the new audio sample.
         */
        copy(): AudioSample;
        /**
         * Release memory associated with the audio sample
         * `sample`
         */
        free(): void;
    }

    class BaseAudioClass {}

    class BaseAudioPrivate {}

    class BaseFramebufferClass {}

    class BaseFramebufferPrivate {}

    class ColorMap {
        // Own fields of GVnc-1.0.ColorMap

        offset: number;
        size: number;
        colors: ColorMapEntry;

        // Constructors of GVnc-1.0.ColorMap

        constructor(
            properties?: Partial<{
                offset: number;
                size: number;
            }>,
        );

        static ['new'](offset: number, size: number): ColorMap;

        // Owm methods of GVnc-1.0.ColorMap

        /**
         * Allocate a new color map initializing it with a
         * copy of the data stored in `map`.
         * @returns the new color map
         */
        copy(): ColorMap;
        /**
         * Release the memory associated with the
         * color map `map`
         */
        free(): void;
        /**
         * Lookup the RGB values associated with the
         * colour map entry at position `idx`
         * @param idx the index to set
         * @returns TRUE if @idx was in range, FALSE otherwise
         */
        lookup(idx: number): boolean;
        /**
         * Update the RGB value associated with the
         * color map entry at position `idx`.
         * @param idx the index to set
         * @param red the new red value
         * @param green the new green value
         * @param blue the new blue value
         * @returns TRUE if @idx was in range, FALSE otherwise
         */
        set(idx: number, red: number, green: number, blue: number): boolean;
    }

    class ColorMapEntry {
        // Own fields of GVnc-1.0.ColorMapEntry

        red: number;
        green: number;
        blue: number;

        // Constructors of GVnc-1.0.ColorMapEntry

        constructor(
            properties?: Partial<{
                red: number;
                green: number;
                blue: number;
            }>,
        );
    }

    class ConnectionClass {}

    class ConnectionPrivate {}

    class CursorClass {}

    class CursorPrivate {}

    class FramebufferInterface {}

    class PixelFormat {
        // Own fields of GVnc-1.0.PixelFormat

        bits_per_pixel: number;
        depth: number;
        byte_order: number;
        true_color_flag: number;
        red_max: number;
        green_max: number;
        blue_max: number;
        red_shift: number;
        green_shift: number;
        blue_shift: number;

        // Constructors of GVnc-1.0.PixelFormat

        constructor(
            properties?: Partial<{
                bits_per_pixel: number;
                depth: number;
                byte_order: number;
                true_color_flag: number;
                red_max: number;
                green_max: number;
                blue_max: number;
                red_shift: number;
                green_shift: number;
                blue_shift: number;
            }>,
        );

        static ['new'](): PixelFormat;

        // Owm methods of GVnc-1.0.PixelFormat

        /**
         * Allocate a new VNC pixel format struct whose
         * contents is initialized with the data found
         * in `srcFormat`. The struct must be released using
         * vnc_pixel_format_free when no longer required.
         * @returns the new pixel format struct
         */
        copy(): PixelFormat;
        /**
         * Release the memory associated with `format`
         */
        free(): void;
        match(other: PixelFormat): boolean;
    }

    interface Audio {
        // Owm methods of GVnc-1.0.Audio

        /**
         * Request playback of a single audio sample in `sample`
         * @param sample the audio sample
         */
        playback_data(sample: AudioSample): void;
        /**
         * Indicate that the remote desktop is about to start
         * audio playback in format `format`.
         * @param format the new audio format
         */
        playback_start(format: AudioFormat): void;
        /**
         * Indicate that the remote desktop has completed
         * audio playback
         */
        playback_stop(): void;

        // Own virtual methods of GVnc-1.0.Audio

        vfunc_playback_data(sample: AudioSample): boolean;
        vfunc_playback_start(format: AudioFormat): boolean;
        vfunc_playback_stop(): boolean;
    }

    interface Framebuffer {
        // Owm methods of GVnc-1.0.Framebuffer

        blt(src: number, rowstride: number, x: number, y: number, width: number, height: number): void;
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
        copyrect(srcx: number, srcy: number, dstx: number, dsty: number, width: number, height: number): void;
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
        fill(src: Uint8Array, x: number, y: number, width: number, height: number): void;
        /**
         * Get a pointer to the framebuffer contents
         * @returns the framebuffer data
         */
        get_buffer(): Uint8Array;
        /**
         * Query the height of the remote framebuffer
         * @returns the frambuffer height
         */
        get_height(): number;
        /**
         * Get the pixel format used to store the framebuffer locally
         * @returns the local pixel format
         */
        get_local_format(): PixelFormat;
        get_remote_format(): PixelFormat;
        /**
         * Get the number of bytes per line of the framebuffer
         * @returns the framebuffer row stride
         */
        get_rowstride(): number;
        /**
         * Query the width of the remote framebuffer
         * @returns the framebuffer width
         */
        get_width(): number;
        /**
         * Determine if the local and remote pixel formats match
         * @returns TRUE if the local and remote pixel formats match
         */
        perfect_format_match(): boolean;
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
        rgb24_blt(src: Uint8Array, rowstride: number, x: number, y: number, width: number, height: number): void;
        /**
         * Set the color map to use for the framebuffer
         * @param map the new color map
         */
        set_color_map(map: ColorMap): void;
        /**
         * Sets a pixel in the framebuffer at (`x,` `y)` to the
         * value in `src`. The number of bytes in `src` is
         * determined by the remote pixel format
         * @param src the new pixel data
         * @param x the horizontal pixel to set
         * @param y the vertical pixel to set
         */
        set_pixel_at(src: Uint8Array, x: number, y: number): void;

        // Own virtual methods of GVnc-1.0.Framebuffer

        vfunc_blt(src: number, rowstride: number, x: number, y: number, width: number, height: number): void;
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
        vfunc_copyrect(srcx: number, srcy: number, dstx: number, dsty: number, width: number, height: number): void;
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
        vfunc_fill(src: Uint8Array, x: number, y: number, width: number, height: number): void;
        vfunc_get_buffer(): number;
        /**
         * Query the height of the remote framebuffer
         */
        vfunc_get_height(): number;
        /**
         * Get the pixel format used to store the framebuffer locally
         */
        vfunc_get_local_format(): PixelFormat;
        vfunc_get_remote_format(): PixelFormat;
        /**
         * Get the number of bytes per line of the framebuffer
         */
        vfunc_get_rowstride(): number;
        /**
         * Query the width of the remote framebuffer
         */
        vfunc_get_width(): number;
        /**
         * Determine if the local and remote pixel formats match
         */
        vfunc_perfect_format_match(): boolean;
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
        vfunc_rgb24_blt(src: Uint8Array, rowstride: number, x: number, y: number, width: number, height: number): void;
        /**
         * Set the color map to use for the framebuffer
         * @param map the new color map
         */
        vfunc_set_color_map(map: ColorMap): void;
        /**
         * Sets a pixel in the framebuffer at (`x,` `y)` to the
         * value in `src`. The number of bytes in `src` is
         * determined by the remote pixel format
         * @param src the new pixel data
         * @param x the horizontal pixel to set
         * @param y the vertical pixel to set
         */
        vfunc_set_pixel_at(src: Uint8Array, x: number, y: number): void;
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

export default GVnc;
// END
