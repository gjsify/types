
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
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace GVnc {

    /**
     * GVnc-1.0
     */


    /**
     * @gir-type Enum
     */
    enum AudioFormatType {
        U8,
        S8,
        U16,
        S16,
        U32,
        S32,
    }


    /**
     * @gir-type Enum
     */
    export namespace ConnectionAuth {
        export const $gtype: GObject.GType<ConnectionAuth>;
    }

    /**
     * @gir-type Enum
     */
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


    /**
     * @gir-type Enum
     */
    export namespace ConnectionAuthVencrypt {
        export const $gtype: GObject.GType<ConnectionAuthVencrypt>;
    }

    /**
     * @gir-type Enum
     */
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


    /**
     * @gir-type Enum
     */
    export namespace ConnectionCredential {
        export const $gtype: GObject.GType<ConnectionCredential>;
    }

    /**
     * @gir-type Enum
     */
    enum ConnectionCredential {
        PASSWORD,
        USERNAME,
        CLIENTNAME,
        CA_CERT_DATA,
    }


    /**
     * @gir-type Enum
     */
    export namespace ConnectionEncoding {
        export const $gtype: GObject.GType<ConnectionEncoding>;
    }

    /**
     * @gir-type Enum
     */
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


    /**
     * @gir-type Enum
     */
    export namespace ConnectionPowerAction {
        export const $gtype: GObject.GType<ConnectionPowerAction>;
    }

    /**
     * @gir-type Enum
     */
    enum ConnectionPowerAction {
        SHUTDOWN,
        REBOOT,
        RESET,
    }


    /**
     * @gir-type Enum
     */
    export namespace ConnectionResizeStatus {
        export const $gtype: GObject.GType<ConnectionResizeStatus>;
    }

    /**
     * @gir-type Enum
     */
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
     * version (`major`, `minor`, `micro`)
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

    namespace BaseAudio {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-first
             */
            "vnc-audio-playback-data": (arg0: AudioSample) => void;
            /**
             * @signal
             * @run-first
             */
            "vnc-audio-playback-start": (arg0: AudioFormat) => void;
            /**
             * @signal
             * @run-first
             */
            "vnc-audio-playback-stop": () => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Audio.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class BaseAudio extends GObject.Object implements Audio {
        static $gtype: GObject.GType<BaseAudio>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: BaseAudio.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<BaseAudio.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): BaseAudio;

        // Signals
        /** @signal */
        connect<K extends keyof BaseAudio.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BaseAudio.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof BaseAudio.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BaseAudio.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof BaseAudio.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<BaseAudio.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param sample 
         * @virtual
         */
        vfunc_playback_data(sample: AudioSample): boolean;

        /**
         * @param format 
         * @virtual
         */
        vfunc_playback_start(format: AudioFormat): boolean;

        /**
         * @virtual
         */
        vfunc_playback_stop(): boolean;

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
    }


    namespace BaseFramebuffer {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::buffer": (pspec: GObject.ParamSpec) => void;
            "notify::color-map": (pspec: GObject.ParamSpec) => void;
            "notify::height": (pspec: GObject.ParamSpec) => void;
            "notify::local-format": (pspec: GObject.ParamSpec) => void;
            "notify::remote-format": (pspec: GObject.ParamSpec) => void;
            "notify::rowstride": (pspec: GObject.ParamSpec) => void;
            "notify::width": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Framebuffer.ConstructorProps {
            buffer: never;
            color_map: ColorMap;
            colorMap: ColorMap;
            height: number;
            local_format: PixelFormat;
            localFormat: PixelFormat;
            remote_format: PixelFormat;
            remoteFormat: PixelFormat;
            rowstride: number;
            width: number;
        }
    }

    /**
     * @gir-type Class
     */
    class BaseFramebuffer extends GObject.Object implements Framebuffer {
        static $gtype: GObject.GType<BaseFramebuffer>;

        // Properties
        /**
         * @construct-only
         */
        get buffer(): null;

        get color_map(): ColorMap;
        set color_map(val: ColorMap);

        get colorMap(): ColorMap;
        set colorMap(val: ColorMap);

        /**
         * @construct-only
         * @default 0
         */
        get height(): number;

        /**
         * @construct-only
         */
        get local_format(): PixelFormat;

        /**
         * @construct-only
         */
        get localFormat(): PixelFormat;

        /**
         * @construct-only
         */
        get remote_format(): PixelFormat;

        /**
         * @construct-only
         */
        get remoteFormat(): PixelFormat;

        /**
         * @construct-only
         * @default 0
         */
        get rowstride(): number;

        /**
         * @construct-only
         * @default 0
         */
        get width(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: BaseFramebuffer.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<BaseFramebuffer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](buffer: Uint8Array | string, width: number, height: number, rowstride: number, localFormat: PixelFormat, remoteFormat: PixelFormat): BaseFramebuffer;

        // Signals
        /** @signal */
        connect<K extends keyof BaseFramebuffer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BaseFramebuffer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof BaseFramebuffer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BaseFramebuffer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof BaseFramebuffer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<BaseFramebuffer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * @param src 
         * @param rowstride 
         * @param x 
         * @param y 
         * @param width 
         * @param height 
         */
        blt(src: number, rowstride: number, x: number, y: number, width: number, height: number): void;

        /**
         * Copies data from the range (`srcx`, `srcy`) to
         * (`srcx`+`width`, `srcy`+`height`) over to the
         * range starting at (`dstx`, `dsty`).
         * @param srcx the horizontal starting pixel
         * @param srcy the vertical starting pixel
         * @param dstx the horizontal target pixel
         * @param dsty the vertical target pixel
         * @param width the width of the region
         * @param height the height of the region
         */
        copyrect(srcx: number, srcy: number, dstx: number, dsty: number, width: number, height: number): void;

        /**
         * Fill all the pixels in the range (`x`, `y`) to
         * (`x` + `width`, `y` + `height`) to the value in
         * `src`. The number of bytes in `src` is
         * determined by the remote pixel format
         * @param src the new pixel data
         * @param x the horizontal pixel to start filling
         * @param y the vertical pixel to start filling
         * @param width the number of pixels to fill horizontally
         * @param height the number of pixels to fill vertically
         */
        fill(src: Uint8Array | string, x: number, y: number, width: number, height: number): void;

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
         * Fill all the pixels in the range (`x`, `y`) to
         * (`x` + `width`, `y` + `height`) to the value in
         * `src`. The number of bytes in `src` is always
         * 3 as it must be in plain RGB24 format.
         * @param src the new pixel data
         * @param rowstride the number of bytes per row
         * @param x the horizontal pixel to start filling
         * @param y the vertical pixel to start filling
         * @param width the number of pixels to fill horizontally
         * @param height the number of pixels to fill vertically
         */
        rgb24_blt(src: Uint8Array | string, rowstride: number, x: number, y: number, width: number, height: number): void;

        /**
         * Set the color map to use for the framebuffer
         * @param map the new color map
         */
        set_color_map(map: ColorMap): void;

        /**
         * Sets a pixel in the framebuffer at (`x`, `y`) to the
         * value in `src`. The number of bytes in `src` is
         * determined by the remote pixel format
         * @param src the new pixel data
         * @param x the horizontal pixel to set
         * @param y the vertical pixel to set
         */
        set_pixel_at(src: Uint8Array | string, x: number, y: number): void;

        /**
         * @param src 
         * @param rowstride 
         * @param x 
         * @param y 
         * @param width 
         * @param height 
         * @virtual
         */
        vfunc_blt(src: number, rowstride: number, x: number, y: number, width: number, height: number): void;

        /**
         * Copies data from the range (`srcx`, `srcy`) to
         * (`srcx`+`width`, `srcy`+`height`) over to the
         * range starting at (`dstx`, `dsty`).
         * @param srcx the horizontal starting pixel
         * @param srcy the vertical starting pixel
         * @param dstx the horizontal target pixel
         * @param dsty the vertical target pixel
         * @param width the width of the region
         * @param height the height of the region
         * @virtual
         */
        vfunc_copyrect(srcx: number, srcy: number, dstx: number, dsty: number, width: number, height: number): void;

        /**
         * Fill all the pixels in the range (`x`, `y`) to
         * (`x` + `width`, `y` + `height`) to the value in
         * `src`. The number of bytes in `src` is
         * determined by the remote pixel format
         * @param src the new pixel data
         * @param x the horizontal pixel to start filling
         * @param y the vertical pixel to start filling
         * @param width the number of pixels to fill horizontally
         * @param height the number of pixels to fill vertically
         * @virtual
         */
        vfunc_fill(src: Uint8Array, x: number, y: number, width: number, height: number): void;

        /**
         * @virtual
         */
        vfunc_get_buffer(): number;

        /**
         * Query the height of the remote framebuffer
         * @virtual
         */
        vfunc_get_height(): number;

        /**
         * Get the pixel format used to store the framebuffer locally
         * @virtual
         */
        vfunc_get_local_format(): PixelFormat;

        /**
         * @virtual
         */
        vfunc_get_remote_format(): PixelFormat;

        /**
         * Get the number of bytes per line of the framebuffer
         * @virtual
         */
        vfunc_get_rowstride(): number;

        /**
         * Query the width of the remote framebuffer
         * @virtual
         */
        vfunc_get_width(): number;

        /**
         * Determine if the local and remote pixel formats match
         * @virtual
         */
        vfunc_perfect_format_match(): boolean;

        /**
         * Fill all the pixels in the range (`x`, `y`) to
         * (`x` + `width`, `y` + `height`) to the value in
         * `src`. The number of bytes in `src` is always
         * 3 as it must be in plain RGB24 format.
         * @param src the new pixel data
         * @param rowstride the number of bytes per row
         * @param x the horizontal pixel to start filling
         * @param y the vertical pixel to start filling
         * @param width the number of pixels to fill horizontally
         * @param height the number of pixels to fill vertically
         * @virtual
         */
        vfunc_rgb24_blt(src: Uint8Array, rowstride: number, x: number, y: number, width: number, height: number): void;

        /**
         * Set the color map to use for the framebuffer
         * @param map the new color map
         * @virtual
         */
        vfunc_set_color_map(map: ColorMap): void;

        /**
         * Sets a pixel in the framebuffer at (`x`, `y`) to the
         * value in `src`. The number of bytes in `src` is
         * determined by the remote pixel format
         * @param src the new pixel data
         * @param x the horizontal pixel to set
         * @param y the vertical pixel to set
         * @virtual
         */
        vfunc_set_pixel_at(src: Uint8Array, x: number, y: number): void;
    }


    namespace Connection {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-first
             */
            "vnc-auth-choose-subtype": (arg0: number, arg1: GObject.ValueArray) => void;
            /**
             * @signal
             * @run-first
             */
            "vnc-auth-choose-type": (arg0: GObject.ValueArray) => void;
            /**
             * @signal
             * @run-first
             */
            "vnc-auth-credential": (arg0: GObject.ValueArray) => void;
            /**
             * @signal
             * @run-first
             */
            "vnc-auth-failure": (arg0: string) => void;
            /**
             * @signal
             * @run-first
             */
            "vnc-auth-unsupported": (arg0: number) => void;
            /**
             * @signal
             * @run-first
             */
            "vnc-bell": () => void;
            /**
             * @signal
             * @run-first
             */
            "vnc-connected": () => void;
            /**
             * Emitted when the cursor is changed.
             * @signal
             * @run-first
             */
            "vnc-cursor-changed": (arg0: Cursor | null) => void;
            /**
             * @signal
             * @run-first
             */
            "vnc-desktop-rename": (arg0: string) => void;
            /**
             * @signal
             * @run-first
             */
            "vnc-desktop-resize": (arg0: number, arg1: number) => void;
            /**
             * @signal
             * @run-first
             */
            "vnc-disconnected": () => void;
            /**
             * @signal
             * @run-first
             */
            "vnc-error": (arg0: string) => void;
            /**
             * @signal
             * @run-first
             */
            "vnc-framebuffer-update": (arg0: number, arg1: number, arg2: number, arg3: number) => void;
            /**
             * @signal
             * @run-first
             */
            "vnc-initialized": () => void;
            /**
             * @signal
             * @run-first
             */
            "vnc-led-state": () => void;
            /**
             * @signal
             * @run-first
             */
            "vnc-pixel-format-changed": (arg0: PixelFormat) => void;
            /**
             * @signal
             * @run-first
             */
            "vnc-pointer-mode-changed": (arg0: boolean) => void;
            /**
             * @signal
             * @run-first
             */
            "vnc-power-control-failed": () => void;
            /**
             * @signal
             * @run-first
             */
            "vnc-power-control-initialized": () => void;
            /**
             * @signal
             * @run-first
             */
            "vnc-server-cut-text": (arg0: string) => void;
            "notify::framebuffer": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            framebuffer: Framebuffer;
        }
    }

    /**
     * @gir-type Class
     */
    class Connection extends GObject.Object {
        static $gtype: GObject.GType<Connection>;

        // Properties
        get framebuffer(): Framebuffer;
        set framebuffer(val: Framebuffer);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Connection.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Connection.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Connection;

        // Signals
        /** @signal */
        connect<K extends keyof Connection.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Connection.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Connection.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Connection.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Connection.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Connection.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param type 
         * @param subtypes 
         * @virtual
         */
        vfunc_vnc_auth_choose_subtype(type: number, subtypes: GObject.ValueArray): void;

        /**
         * @param types 
         * @virtual
         */
        vfunc_vnc_auth_choose_type(types: GObject.ValueArray): void;

        /**
         * @param creds 
         * @virtual
         */
        vfunc_vnc_auth_credential(creds: GObject.ValueArray): void;

        /**
         * @param reason 
         * @virtual
         */
        vfunc_vnc_auth_failure(reason: string): void;

        /**
         * @param authType 
         * @virtual
         */
        vfunc_vnc_auth_unsupported(authType: number): void;

        /**
         * @virtual
         */
        vfunc_vnc_bell(): void;

        /**
         * @virtual
         */
        vfunc_vnc_connected(): void;

        /**
         * @param cursor 
         * @virtual
         */
        vfunc_vnc_cursor_changed(cursor: Cursor): void;

        /**
         * @param name 
         * @virtual
         */
        vfunc_vnc_desktop_rename(name: string): void;

        /**
         * @param width 
         * @param height 
         * @virtual
         */
        vfunc_vnc_desktop_resize(width: number, height: number): void;

        /**
         * @virtual
         */
        vfunc_vnc_disconnected(): void;

        /**
         * @param message 
         * @virtual
         */
        vfunc_vnc_error(message: string): void;

        /**
         * @param x 
         * @param y 
         * @param width 
         * @param height 
         * @virtual
         */
        vfunc_vnc_framebuffer_update(x: number, y: number, width: number, height: number): void;

        /**
         * @virtual
         */
        vfunc_vnc_initialized(): void;

        /**
         * @virtual
         */
        vfunc_vnc_led_state(): void;

        /**
         * @param format 
         * @virtual
         */
        vfunc_vnc_pixel_format_changed(format: PixelFormat): void;

        /**
         * @param absPointer 
         * @virtual
         */
        vfunc_vnc_pointer_mode_changed(absPointer: boolean): void;

        /**
         * @virtual
         */
        vfunc_vnc_power_control_failed(): void;

        /**
         * @virtual
         */
        vfunc_vnc_power_control_initialized(): void;

        /**
         * @param text 
         * @virtual
         */
        vfunc_vnc_server_cut_text(text: GLib.String): void;

        // Methods
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

        /**
         * @param data 
         * @param length 
         */
        client_cut_text(data: null, length: bigint | number): boolean;

        /**
         * Request that the server send a framebuffer update when the
         * region positioned at (`x`, `y`) wth size (`width`, `height`)
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
        open_addr(addr: Gio.SocketAddress, hostname: string | null): boolean;

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
        open_fd_with_hostname(fd: number, hostname: string | null): boolean;

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
         * `type` is one of the VncConnectionCredential enum values
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

        /**
         * @param width 
         * @param height 
         */
        set_size(width: number, height: number): ConnectionResizeStatus;

        /**
         * Initiate a shutdown of the current connection
         * by closing its socket
         */
        shutdown(): void;
    }


    namespace Cursor {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::data": (pspec: GObject.ParamSpec) => void;
            "notify::height": (pspec: GObject.ParamSpec) => void;
            "notify::hotx": (pspec: GObject.ParamSpec) => void;
            "notify::hoty": (pspec: GObject.ParamSpec) => void;
            "notify::width": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            data: never;
            height: number;
            hotx: number;
            hoty: number;
            width: number;
        }
    }

    /**
     * @gir-type Class
     */
    class Cursor extends GObject.Object {
        static $gtype: GObject.GType<Cursor>;

        // Properties
        get data(): null;
        set data(val: never);

        /**
         * @default 0
         */
        get height(): number;
        set height(val: number);

        /**
         * @default 0
         */
        get hotx(): number;
        set hotx(val: number);

        /**
         * @default 0
         */
        get hoty(): number;
        set hoty(val: number);

        /**
         * @default 0
         */
        get width(): number;
        set width(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Cursor.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Cursor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](data: Uint8Array | string, hotx: number, hoty: number, width: number, height: number): Cursor;

        // Signals
        /** @signal */
        connect<K extends keyof Cursor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Cursor.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Cursor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Cursor.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Cursor.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Cursor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Get the bitmap data representing the cursor
         * @returns the bitmap data
         */
        get_data(): Uint8Array;

        /**
         * @param args 
         */
    // Conflicted with GObject.Object.get_data
        get_data(...args: never[]): any;

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

        /**
         * Determine whether the rendered cursor has
         * any visible pixels
         * @returns TRUE if there is at least one visible pixel, FALSE otherwise
         */
        is_visible(): boolean;
    }


    /**
     * @gir-type Struct
     */
    class AudioFormat {
        static $gtype: GObject.GType<AudioFormat>;

        // Fields
        format: number;

        nchannels: number;

        frequency: number;

        // Constructors

        constructor(properties?: Partial<{
            format: number;
            nchannels: number;
            frequency: number;
        }>);

        static ["new"](): AudioFormat;

        // Methods
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


    /**
     * @gir-type Alias
     */
    type AudioInterface = typeof Audio;

    /**
     * @gir-type Struct
     */
    class AudioSample {
        static $gtype: GObject.GType<AudioSample>;

        // Fields
        data: number;

        length: number;

        capacity: number;

        // Constructors

        constructor(properties?: Partial<{
            data: number;
            length: number;
            capacity: number;
        }>);

        static ["new"](capacity: number): AudioSample;

        // Methods
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


    /**
     * @gir-type Alias
     */
    type BaseAudioClass = typeof BaseAudio;

    /**
     * @gir-type Struct
     */
    abstract class BaseAudioPrivate {
        static $gtype: GObject.GType<BaseAudioPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type BaseFramebufferClass = typeof BaseFramebuffer;

    /**
     * @gir-type Struct
     */
    abstract class BaseFramebufferPrivate {
        static $gtype: GObject.GType<BaseFramebufferPrivate>;
    }


    /**
     * @gir-type Struct
     */
    class ColorMap {
        static $gtype: GObject.GType<ColorMap>;

        // Fields
        offset: number;

        size: number;

        colors: ColorMapEntry;

        // Constructors

        constructor(properties?: Partial<{
            offset: number;
            size: number;
        }>);

        static ["new"](offset: number, size: number): ColorMap;

        // Methods
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
         * @returns TRUE if `idx` was in range, FALSE otherwise
         */
        lookup(idx: number): [boolean, number, number, number];

        /**
         * Update the RGB value associated with the
         * color map entry at position `idx`.
         * @param idx the index to set
         * @param red the new red value
         * @param green the new green value
         * @param blue the new blue value
         * @returns TRUE if `idx` was in range, FALSE otherwise
         */
        set(idx: number, red: number, green: number, blue: number): boolean;
    }


    /**
     * @gir-type Struct
     */
    class ColorMapEntry {
        static $gtype: GObject.GType<ColorMapEntry>;

        // Fields
        red: number;

        green: number;

        blue: number;

        // Constructors

        constructor(properties?: Partial<{
            red: number;
            green: number;
            blue: number;
        }>);
    }


    /**
     * @gir-type Alias
     */
    type ConnectionClass = typeof Connection;

    /**
     * @gir-type Struct
     */
    abstract class ConnectionPrivate {
        static $gtype: GObject.GType<ConnectionPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type CursorClass = typeof Cursor;

    /**
     * @gir-type Struct
     */
    abstract class CursorPrivate {
        static $gtype: GObject.GType<CursorPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type FramebufferInterface = typeof Framebuffer;

    /**
     * @gir-type Struct
     */
    class PixelFormat {
        static $gtype: GObject.GType<PixelFormat>;

        // Fields
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

        // Constructors

        constructor(properties?: Partial<{
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
        }>);

        static ["new"](): PixelFormat;

        // Methods
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

        /**
         * @param other 
         */
        match(other: PixelFormat): boolean;
    }


    namespace Audio {
        /**
         * Interface for implementing Audio.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @param sample 
             * @virtual
             */
            vfunc_playback_data(sample: AudioSample): boolean;

            /**
             * @param format 
             * @virtual
             */
            vfunc_playback_start(format: AudioFormat): boolean;

            /**
             * @virtual
             */
            vfunc_playback_stop(): boolean;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface AudioNamespace {
        $gtype: GObject.GType<Audio>;
        prototype: Audio;
    }
    /**
     * @gir-type Interface
     */
    interface Audio extends GObject.Object, Audio.Interface {

        // Methods
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
    }


    export const Audio: AudioNamespace & {
        new (): Audio; // This allows `obj instanceof Audio`
    };

    namespace Framebuffer {
        /**
         * Interface for implementing Framebuffer.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @param src 
             * @param rowstride 
             * @param x 
             * @param y 
             * @param width 
             * @param height 
             * @virtual
             */
            vfunc_blt(src: number, rowstride: number, x: number, y: number, width: number, height: number): void;

            /**
             * Copies data from the range (`srcx`, `srcy`) to
             * (`srcx`+`width`, `srcy`+`height`) over to the
             * range starting at (`dstx`, `dsty`).
             * @param srcx the horizontal starting pixel
             * @param srcy the vertical starting pixel
             * @param dstx the horizontal target pixel
             * @param dsty the vertical target pixel
             * @param width the width of the region
             * @param height the height of the region
             * @virtual
             */
            vfunc_copyrect(srcx: number, srcy: number, dstx: number, dsty: number, width: number, height: number): void;

            /**
             * Fill all the pixels in the range (`x`, `y`) to
             * (`x` + `width`, `y` + `height`) to the value in
             * `src`. The number of bytes in `src` is
             * determined by the remote pixel format
             * @param src the new pixel data
             * @param x the horizontal pixel to start filling
             * @param y the vertical pixel to start filling
             * @param width the number of pixels to fill horizontally
             * @param height the number of pixels to fill vertically
             * @virtual
             */
            vfunc_fill(src: Uint8Array, x: number, y: number, width: number, height: number): void;

            /**
             * @virtual
             */
            vfunc_get_buffer(): number;

            /**
             * Query the height of the remote framebuffer
             * @virtual
             */
            vfunc_get_height(): number;

            /**
             * Get the pixel format used to store the framebuffer locally
             * @virtual
             */
            vfunc_get_local_format(): PixelFormat;

            /**
             * @virtual
             */
            vfunc_get_remote_format(): PixelFormat;

            /**
             * Get the number of bytes per line of the framebuffer
             * @virtual
             */
            vfunc_get_rowstride(): number;

            /**
             * Query the width of the remote framebuffer
             * @virtual
             */
            vfunc_get_width(): number;

            /**
             * Determine if the local and remote pixel formats match
             * @virtual
             */
            vfunc_perfect_format_match(): boolean;

            /**
             * Fill all the pixels in the range (`x`, `y`) to
             * (`x` + `width`, `y` + `height`) to the value in
             * `src`. The number of bytes in `src` is always
             * 3 as it must be in plain RGB24 format.
             * @param src the new pixel data
             * @param rowstride the number of bytes per row
             * @param x the horizontal pixel to start filling
             * @param y the vertical pixel to start filling
             * @param width the number of pixels to fill horizontally
             * @param height the number of pixels to fill vertically
             * @virtual
             */
            vfunc_rgb24_blt(src: Uint8Array, rowstride: number, x: number, y: number, width: number, height: number): void;

            /**
             * Set the color map to use for the framebuffer
             * @param map the new color map
             * @virtual
             */
            vfunc_set_color_map(map: ColorMap): void;

            /**
             * Sets a pixel in the framebuffer at (`x`, `y`) to the
             * value in `src`. The number of bytes in `src` is
             * determined by the remote pixel format
             * @param src the new pixel data
             * @param x the horizontal pixel to set
             * @param y the vertical pixel to set
             * @virtual
             */
            vfunc_set_pixel_at(src: Uint8Array, x: number, y: number): void;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface FramebufferNamespace {
        $gtype: GObject.GType<Framebuffer>;
        prototype: Framebuffer;
    }
    /**
     * @gir-type Interface
     */
    interface Framebuffer extends GObject.Object, Framebuffer.Interface {

        // Methods
        /**
         * @param src 
         * @param rowstride 
         * @param x 
         * @param y 
         * @param width 
         * @param height 
         */
        blt(src: number, rowstride: number, x: number, y: number, width: number, height: number): void;

        /**
         * Copies data from the range (`srcx`, `srcy`) to
         * (`srcx`+`width`, `srcy`+`height`) over to the
         * range starting at (`dstx`, `dsty`).
         * @param srcx the horizontal starting pixel
         * @param srcy the vertical starting pixel
         * @param dstx the horizontal target pixel
         * @param dsty the vertical target pixel
         * @param width the width of the region
         * @param height the height of the region
         */
        copyrect(srcx: number, srcy: number, dstx: number, dsty: number, width: number, height: number): void;

        /**
         * Fill all the pixels in the range (`x`, `y`) to
         * (`x` + `width`, `y` + `height`) to the value in
         * `src`. The number of bytes in `src` is
         * determined by the remote pixel format
         * @param src the new pixel data
         * @param x the horizontal pixel to start filling
         * @param y the vertical pixel to start filling
         * @param width the number of pixels to fill horizontally
         * @param height the number of pixels to fill vertically
         */
        fill(src: Uint8Array | string, x: number, y: number, width: number, height: number): void;

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
         * Fill all the pixels in the range (`x`, `y`) to
         * (`x` + `width`, `y` + `height`) to the value in
         * `src`. The number of bytes in `src` is always
         * 3 as it must be in plain RGB24 format.
         * @param src the new pixel data
         * @param rowstride the number of bytes per row
         * @param x the horizontal pixel to start filling
         * @param y the vertical pixel to start filling
         * @param width the number of pixels to fill horizontally
         * @param height the number of pixels to fill vertically
         */
        rgb24_blt(src: Uint8Array | string, rowstride: number, x: number, y: number, width: number, height: number): void;

        /**
         * Set the color map to use for the framebuffer
         * @param map the new color map
         */
        set_color_map(map: ColorMap): void;

        /**
         * Sets a pixel in the framebuffer at (`x`, `y`) to the
         * value in `src`. The number of bytes in `src` is
         * determined by the remote pixel format
         * @param src the new pixel data
         * @param x the horizontal pixel to set
         * @param y the vertical pixel to set
         */
        set_pixel_at(src: Uint8Array | string, x: number, y: number): void;
    }


    export const Framebuffer: FramebufferNamespace & {
        new (): Framebuffer; // This allows `obj instanceof Framebuffer`
    };

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
