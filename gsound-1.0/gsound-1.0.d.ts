
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

export namespace GSound {

    /**
     * GSound-1.0
     */


    /**
     * @gir-type Struct
     */
    class Error extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields
        static NOTSUPPORTED: number;

        static INVALID: number;

        static STATE: number;

        static OOM: number;

        static NODRIVER: number;

        static SYSTEM: number;

        static CORRUPT: number;

        static TOOBIG: number;

        static NOTFOUND: number;

        static DESTROYED: number;

        static CANCELED: number;

        static NOTAVAILABLE: number;

        static ACCESS: number;

        static IO: number;

        static INTERNAL: number;

        static DISABLED: number;

        static FORKED: number;

        static DISCONNECTED: number;

        // Constructors
        constructor(options: { message: string; code: number });
    }


    /**
     * Binary icon data in PNG format for the application this sound event
     * is triggered by.
     */
    const ATTR_APPLICATION_ICON: string;

    /**
     * An icon name for the application this sound event is triggered by,
     * as defined in the XDG icon naming specification.
     */
    const ATTR_APPLICATION_ICON_NAME: string;

    /**
     * An identifier for the program this sound event was triggered
     * by. (e.g. "org.gnu.emacs").
     * 
     * > This attribute will automatically be added to the {@link GSound.Context} with
     * > the {@link Gio.Application.application_id} if you are using {@link Gio.Application}, so you
     * > normally do not need to supply this yourself.
     */
    const ATTR_APPLICATION_ID: string;

    /**
     * The locale string the application that is triggering this sound
     * event is running in. A POSIX locale string such as de_DE@euro.
     */
    const ATTR_APPLICATION_LANGUAGE: string;

    /**
     * The name of the application this sound event was triggered by as
     * human readable string. (e.g. "GNU Emacs") Localized if possible and
     * applicable.
     * 
     * > This attribute will automatically be added to the {@link GSound.Context} if
     * > it has previously been set with `g_set_application_name()`, so you normally
     * > do not need to supply this yourself.
     */
    const ATTR_APPLICATION_NAME: string;

    /**
     * The path to the process binary of the process that is triggering this sound event.
     */
    const ATTR_APPLICATION_PROCESS_BINARY: string;

    /**
     * The host name of the host the process that is triggering this sound event runs on.
     */
    const ATTR_APPLICATION_PROCESS_HOST: string;

    /**
     * The unix PID of the process that is triggering this sound event, formatted as string.
     */
    const ATTR_APPLICATION_PROCESS_ID: string;

    /**
     * The user that owns the process that is triggering this sound event.
     */
    const ATTR_APPLICATION_PROCESS_USER: string;

    /**
     * A version number for the program this sound event was triggered
     * by. (e.g. "22.2")
     */
    const ATTR_APPLICATION_VERSION: string;

    /**
     * A special attribute that can be used to control the automatic sound
     * caching of sounds in the sound server. One of "permanent",
     * "volatile", "never". "permanent" will cause this sample to be
     * cached in the server permanently. This is useful for very
     * frequently used sound events such as those used for input
     * feedback. "volatile" may be used for cacheing sounds in the sound
     * server temporarily. They will expire after some time or on cache
     * pressure. Finally, "never" may be used for sounds that should never
     * be cached, because they are only generated very seldomly or even
     * only once at most (such as desktop login sounds).
     * 
     * If this attribute is not explicitly passed to `gsound_context_play_simple()`
     * or `gsound_context_play_full()` it will default to "never". If it is not
     * explicitly passed to `gsound_context_cache()` it will default to "permanent".
     * 
     * If the list of attributes is handed on to the sound server this
     * attribute is stripped from it.
     */
    const ATTR_CANBERRA_CACHE_CONTROL: string;

    /**
     * A special attribute that can be used to control whether any sounds
     * are played at all. If this attribute is "1" or unset sounds are
     * played as normal. However, if it is "0" all calls to
     * `gsound_context_play_simple()` or `play_full()` will fail with
     * GSOUND_ERROR_DISABLED.
     * 
     * If the list of attributes is handed on to the sound server this
     * attribute is stripped from it.
     */
    const ATTR_CANBERRA_ENABLE: string;

    /**
     * A special attribute that can be used to control on which channel a
     * sound is played. The value should be one of mono, front-left,
     * front-right, front-center, rear-left, rear-right, rear-center, lfe,
     * front-left-of-center, front-right-of-center, side-left, side-right,
     * top-center, top-front-left, top-front-right, top-front-center,
     * top-rear-left, top-rear-right, top-rear-center. This attribute is
     * only honoured by some backends, other backends may choose to ignore
     * it completely.
     * 
     * If the list of attributes is handed on to the sound server this
     * attribute is stripped from it.
     */
    const ATTR_CANBERRA_FORCE_CHANNEL: string;

    /**
     * A special attribute that can be used to control the volume this
     * sound event is played in if the backend supports it. A floating
     * point value for the decibel multiplier for the sound. 0 dB relates
     * to zero gain, and is the default volume these sounds are played in.
     * 
     * If the list of attributes is handed on to the sound server this
     * attribute is stripped from it.
     */
    const ATTR_CANBERRA_VOLUME: string;

    /**
     * A special attribute that can be used to control the XDG sound theme that
     * is used for this sample.
     * 
     * If the list of attributes is handed on to the sound server this
     * attribute is stripped from it.
     */
    const ATTR_CANBERRA_XDG_THEME_NAME: string;

    /**
     * A special attribute that can be used to control the XDG sound theme
     * output profile that is used for this sample.
     * 
     * If the list of attributes is handed on to the sound server this
     * attribute is stripped from it.
     */
    const ATTR_CANBERRA_XDG_THEME_OUTPUT_PROFILE: string;

    /**
     * A descriptive string for the sound event. Localized if possible and applicable.
     */
    const ATTR_EVENT_DESCRIPTION: string;

    /**
     * A textual id for an event sound, as mandated by the XDG sound naming specification.
     */
    const ATTR_EVENT_ID: string;

    /**
     * If this sound event was triggered by a mouse input event, the
     * number of the mouse button that triggered it, formatted as string. 1
     * for left mouse button, 3 for right, 2 for middle.
     */
    const ATTR_EVENT_MOUSE_BUTTON: string;

    /**
     * If this sound event was triggered by a mouse input event, the X
     * position of the mouse cursor as fractional value between 0 and 1,
     * formatted as string, 0 reflecting the left side of the screen, 1
     * the right side.
     */
    const ATTR_EVENT_MOUSE_HPOS: string;

    /**
     * If this sound event was triggered by a mouse input event, the Y
     * position of the mouse cursor as fractional value between 0 and 1,
     * formatted as string, 0 reflecting the top end of the screen, 1
     * the bottom end.
     */
    const ATTR_EVENT_MOUSE_VPOS: string;

    /**
     * If this sound event was triggered by a mouse input event, the X
     * position of the mouse cursor on the screen, formatted as string.
     */
    const ATTR_EVENT_MOUSE_X: string;

    /**
     * If this sound event was triggered by a mouse input event, the Y
     * position of the mouse cursor on the screen, formatted as string.
     */
    const ATTR_EVENT_MOUSE_Y: string;

    /**
     * The artist of this media. Localized if possible and applicable.
     */
    const ATTR_MEDIA_ARTIST: string;

    /**
     * The file name this media was or can be loaded from.
     */
    const ATTR_MEDIA_FILENAME: string;

    /**
     * An icon for this media in binary PNG format.
     */
    const ATTR_MEDIA_ICON: string;

    /**
     * An icon name as defined in the XDG icon naming specifcation.
     */
    const ATTR_MEDIA_ICON_NAME: string;

    /**
     * The language this media is in, in some standard POSIX locale string, such as "de_DE".
     */
    const ATTR_MEDIA_LANGUAGE: string;

    /**
     * A name describing the media being played. Localized if possible and applicable.
     */
    const ATTR_MEDIA_NAME: string;

    /**
     * The "role" this media is played in. For event sounds the string
     * "event". For other cases strings like "music", "video", "game", ...
     */
    const ATTR_MEDIA_ROLE: string;

    /**
     * A (song) title describing the media being played. Localized if possible and applicable.
     */
    const ATTR_MEDIA_TITLE: string;

    /**
     * If this sound event was triggered by a window on the screen and the
     * windowing system supports multiple desktops, a comma seperated list
     * of indexes of the desktops this window is visible on. If this
     * attribute is an empty string, it is visible on all desktops
     * (i.e. 'sticky'). The first desktop is 0. (e.g. "0,2,3")
     */
    const ATTR_WINDOW_DESKTOP: string;

    /**
     * If this sound event was triggered by a window on the screen, the
     * pixel height of the window.
     */
    const ATTR_WINDOW_HEIGHT: string;

    /**
     * If this sound event was triggered by a window on the screen, the X
     * position of the center of the window as fractional value between 0
     * and 1, formatted as string, 0 reflecting the left side of the
     * screen, 1 the right side.
     */
    const ATTR_WINDOW_HPOS: string;

    /**
     * If this sound event was triggered by a window on the screen, binary
     * icon data in PNG format for this window.
     */
    const ATTR_WINDOW_ICON: string;

    /**
     * If this sound event was triggered by a window on the screen, an
     * icon name for this window, as defined in the XDG icon naming
     * specification.
     */
    const ATTR_WINDOW_ICON_NAME: string;

    /**
     * If this sound event was triggered by a window on the screen, some
     * identification string for this window, so that the sound system can
     * recognize specific windows.
     */
    const ATTR_WINDOW_ID: string;

    /**
     * If this sound event was triggered by a window on the screen, the
     * name of this window as human readable string.
     */
    const ATTR_WINDOW_NAME: string;

    /**
     * If this sound event was triggered by a window on the screen, the Y
     * position of the center of the window as fractional value between 0
     * and 1, formatted as string, 0 reflecting the top side of the
     * screen, 1 the bottom side.
     */
    const ATTR_WINDOW_VPOS: string;

    /**
     * If this sound event was triggered by a window on the screen, the
     * pixel width of the window.
     */
    const ATTR_WINDOW_WIDTH: string;

    /**
     * If this sound event was triggered by a window on the screen, the X
     * position of the window measured from the top left corner of the
     * screen to the top left corner of the window.
     */
    const ATTR_WINDOW_X: string;

    /**
     * If this sound event was triggered by a window on the screen and the
     * windowing system is X11, the X display name of the window (e.g. ":0").
     */
    const ATTR_WINDOW_X11_DISPLAY: string;

    /**
     * If this sound event was triggered by a window on the screen and the
     * windowing system is X11, the X monitor id of the window formatted as
     * string (e.g. "0").
     */
    const ATTR_WINDOW_X11_MONITOR: string;

    /**
     * If this sound event was triggered by a window on the screen and the
     * windowing system is X11, the X screen id of the window formatted as
     * string (e.g. "0").
     */
    const ATTR_WINDOW_X11_SCREEN: string;

    /**
     * If this sound event was triggered by a window on the screen and the
     * windowing system is X11, the XID of the window formatted as string.
     */
    const ATTR_WINDOW_X11_XID: string;

    /**
     * If this sound event was triggered by a window on the screen, the y
     * position of the window measured from the top left corner of the
     * screen to the top left corner of the window.
     */
    const ATTR_WINDOW_Y: string;

    function error_quark(): GLib.Quark;

    namespace Context {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {}
    }

    /**
     * ca: the wrapped context
     * Wrapper for ca_context.
     * @gir-type Class
     */
    class Context extends GObject.Object implements Gio.Initable {
        static $gtype: GObject.GType<Context>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Context.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Context.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](cancellable: Gio.Cancellable | null): Context;

        // Signals
        /** @signal */
        connect<K extends keyof Context.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Context.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Context.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Context.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Context.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Context.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Requests that a sound be cached on the server. See [#caching][gsound-GSound-Context#caching].
         * 
         * This function is intented to be used by language bindings.
         * @param attrs Hash table of attrerties
         */
        cache(attrs: { [key: string]: any } | GLib.HashTable<string, string>): boolean;

        /**
         * Attempts to open a connection to the backend sound driver. It is recommended
         * that you set context attributes with `gsound_context_set_attributes()` before
         * calling this function.
         * 
         * > A connection is automatically opened before playing or caching sounds,
         * > so you rarely need to call this yourself.
         * @returns `true` if the output device was opened successfully, or `false`          (populating `error`)
         */
        open(): boolean;

        /**
         * Finish an async operation started by `gsound_context_play_full()`. You
         * must call this function in the callback to free memory and receive any
         * errors which occurred.
         * @param result Result object passed to the callback of   `gsound_context_play_full()`
         * @returns `true` if playing finished successfully
         */
        play_full_finish(result: Gio.AsyncResult): boolean;

        /**
         * Asynchronously request a sound to be played. When playback is finished
         * (or if an error occurs) then `callback` will be called, following the
         * normal GIO async pattern.
         * 
         * If playback is cancelled via `cancellable`, then `callback` will be called
         * with #G_IO_ERROR_CANCELLED.
         * 
         * If you do not need notification of when playback is complete, you should
         * use `gsound_context_play_simple()`.
         * 
         * This function is intented to be used by language bindings.
         * @param attrs Attributes
         * @param cancellable A {@link Gio.Cancellable}, or `null`
         */
        play_full(attrs: { [key: string]: any } | GLib.HashTable<string, string>, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Asynchronously request a sound to be played. When playback is finished
         * (or if an error occurs) then `callback` will be called, following the
         * normal GIO async pattern.
         * 
         * If playback is cancelled via `cancellable`, then `callback` will be called
         * with #G_IO_ERROR_CANCELLED.
         * 
         * If you do not need notification of when playback is complete, you should
         * use `gsound_context_play_simple()`.
         * 
         * This function is intented to be used by language bindings.
         * @param attrs Attributes
         * @param cancellable A {@link Gio.Cancellable}, or `null`
         * @param callback callback
         */
        play_full(attrs: { [key: string]: any } | GLib.HashTable<string, string>, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Asynchronously request a sound to be played. When playback is finished
         * (or if an error occurs) then `callback` will be called, following the
         * normal GIO async pattern.
         * 
         * If playback is cancelled via `cancellable`, then `callback` will be called
         * with #G_IO_ERROR_CANCELLED.
         * 
         * If you do not need notification of when playback is complete, you should
         * use `gsound_context_play_simple()`.
         * 
         * This function is intented to be used by language bindings.
         * @param attrs Attributes
         * @param cancellable A {@link Gio.Cancellable}, or `null`
         * @param callback callback
         */
        play_full(attrs: { [key: string]: any } | GLib.HashTable<string, string>, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * The basic "fire-and-forget" play command. This function will not block, and
         * just sends a request to the sound server before immediately returning.
         * 
         * If you need to know when a sound finishes playing then you should call
         * `gsound_context_play_full()` instead.
         * 
         * You can cancel playback at any time by calling `g_cancellable_cancel()` on
         * `cancellable`, if supplied.
         * 
         * This function is intented to be used by language bindings.
         * @param attrs Attributes
         * @param cancellable A {@link Gio.Cancellable}
         * @returns `true` on success, `false` on error
         */
        play_simple(attrs: { [key: string]: any } | GLib.HashTable<string, string>, cancellable: Gio.Cancellable | null): boolean;

        /**
         * Set attributes or change attributes on `context`. Subsequent calls to this
         * function calling the same attributes will override the earlier values.
         * 
         * Note that GSound will set the #GSOUND_ATTR_APPLICATION_NAME and
         * #GSOUND_ATTR_APPLICATION_ID for you if using {@link Gio.Application}, so you do
         * not normally need to set these yourself.
         * 
         * This function is intented to be used by language bindings.
         * @param attrs Hash table of attributes to set
         * @returns `true` if attributes were updated successfully
         */
        set_attributes(attrs: { [key: string]: any } | GLib.HashTable<string, string>): boolean;

        /**
         * Sets the libcanberra driver to `driver`, for example "pulse", "alsa" or "null".
         * You normally do not need to set this yourself.
         * 
         * Note that this function may return `true` even if the specified driver is
         * not available: see the libcanberra documentation for details.
         * @param driver libcanberra driver to use
         * @returns `true` if the libcanberra driver was set successfully
         */
        set_driver(driver: string): boolean;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns `true` if successful. If an error has occurred, this function will     return `false` and set `error` appropriately if present.
         */
        init(cancellable: Gio.Cancellable | null): boolean;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
    }


    /**
     * @gir-type Alias
     */
    type ContextClass = typeof Context;

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

export default GSound;

// END
