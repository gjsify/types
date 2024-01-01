
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gsound-1.0-ambient.d.ts';
import './gsound-1.0-import.d.ts';
/**
 * GSound-1.0
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace GSound {

enum Error {
    NOTSUPPORTED,
    INVALID,
    STATE,
    OOM,
    NODRIVER,
    SYSTEM,
    CORRUPT,
    TOOBIG,
    NOTFOUND,
    DESTROYED,
    CANCELED,
    NOTAVAILABLE,
    ACCESS,
    IO,
    INTERNAL,
    DISABLED,
    FORKED,
    DISCONNECTED,
}
/**
 * Binary icon data in PNG format for the application this sound event
 * is triggered by.
 */
const ATTR_APPLICATION_ICON: string
/**
 * An icon name for the application this sound event is triggered by,
 * as defined in the XDG icon naming specification.
 */
const ATTR_APPLICATION_ICON_NAME: string
/**
 * An identifier for the program this sound event was triggered
 * by. (e.g. "org.gnu.emacs").
 * 
 * > This attribute will automatically be added to the #GSoundContext with
 * > the #GApplication:application-id if you are using #GApplication, so you
 * > normally do not need to supply this yourself.
 */
const ATTR_APPLICATION_ID: string
/**
 * The locale string the application that is triggering this sound
 * event is running in. A POSIX locale string such as de_DE`euro`.
 */
const ATTR_APPLICATION_LANGUAGE: string
/**
 * The name of the application this sound event was triggered by as
 * human readable string. (e.g. "GNU Emacs") Localized if possible and
 * applicable.
 * 
 * > This attribute will automatically be added to the #GSoundContext if
 * > it has previously been set with g_set_application_name(), so you normally
 * > do not need to supply this yourself.
 */
const ATTR_APPLICATION_NAME: string
/**
 * The path to the process binary of the process that is triggering this sound event.
 */
const ATTR_APPLICATION_PROCESS_BINARY: string
/**
 * The host name of the host the process that is triggering this sound event runs on.
 */
const ATTR_APPLICATION_PROCESS_HOST: string
/**
 * The unix PID of the process that is triggering this sound event, formatted as string.
 */
const ATTR_APPLICATION_PROCESS_ID: string
/**
 * The user that owns the process that is triggering this sound event.
 */
const ATTR_APPLICATION_PROCESS_USER: string
/**
 * A version number for the program this sound event was triggered
 * by. (e.g. "22.2")
 */
const ATTR_APPLICATION_VERSION: string
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
 * If this attribute is not explicitly passed to gsound_context_play_simple()
 * or gsound_context_play_full() it will default to "never". If it is not
 * explicitly passed to gsound_context_cache() it will default to "permanent".
 * 
 * If the list of attributes is handed on to the sound server this
 * attribute is stripped from it.
 */
const ATTR_CANBERRA_CACHE_CONTROL: string
/**
 * A special attribute that can be used to control whether any sounds
 * are played at all. If this attribute is "1" or unset sounds are
 * played as normal. However, if it is "0" all calls to
 * gsound_context_play_simple() or `play_full()` will fail with
 * GSOUND_ERROR_DISABLED.
 * 
 * If the list of attributes is handed on to the sound server this
 * attribute is stripped from it.
 */
const ATTR_CANBERRA_ENABLE: string
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
const ATTR_CANBERRA_FORCE_CHANNEL: string
/**
 * A special attribute that can be used to control the volume this
 * sound event is played in if the backend supports it. A floating
 * point value for the decibel multiplier for the sound. 0 dB relates
 * to zero gain, and is the default volume these sounds are played in.
 * 
 * If the list of attributes is handed on to the sound server this
 * attribute is stripped from it.
 */
const ATTR_CANBERRA_VOLUME: string
/**
 * A special attribute that can be used to control the XDG sound theme that
 * is used for this sample.
 * 
 * If the list of attributes is handed on to the sound server this
 * attribute is stripped from it.
 */
const ATTR_CANBERRA_XDG_THEME_NAME: string
/**
 * A special attribute that can be used to control the XDG sound theme
 * output profile that is used for this sample.
 * 
 * If the list of attributes is handed on to the sound server this
 * attribute is stripped from it.
 */
const ATTR_CANBERRA_XDG_THEME_OUTPUT_PROFILE: string
/**
 * A descriptive string for the sound event. Localized if possible and applicable.
 */
const ATTR_EVENT_DESCRIPTION: string
/**
 * A textual id for an event sound, as mandated by the XDG sound naming specification.
 */
const ATTR_EVENT_ID: string
/**
 * If this sound event was triggered by a mouse input event, the
 * number of the mouse button that triggered it, formatted as string. 1
 * for left mouse button, 3 for right, 2 for middle.
 */
const ATTR_EVENT_MOUSE_BUTTON: string
/**
 * If this sound event was triggered by a mouse input event, the X
 * position of the mouse cursor as fractional value between 0 and 1,
 * formatted as string, 0 reflecting the left side of the screen, 1
 * the right side.
 */
const ATTR_EVENT_MOUSE_HPOS: string
/**
 * If this sound event was triggered by a mouse input event, the Y
 * position of the mouse cursor as fractional value between 0 and 1,
 * formatted as string, 0 reflecting the top end of the screen, 1
 * the bottom end.
 */
const ATTR_EVENT_MOUSE_VPOS: string
/**
 * If this sound event was triggered by a mouse input event, the X
 * position of the mouse cursor on the screen, formatted as string.
 */
const ATTR_EVENT_MOUSE_X: string
/**
 * If this sound event was triggered by a mouse input event, the Y
 * position of the mouse cursor on the screen, formatted as string.
 */
const ATTR_EVENT_MOUSE_Y: string
/**
 * The artist of this media. Localized if possible and applicable.
 */
const ATTR_MEDIA_ARTIST: string
/**
 * The file name this media was or can be loaded from.
 */
const ATTR_MEDIA_FILENAME: string
/**
 * An icon for this media in binary PNG format.
 */
const ATTR_MEDIA_ICON: string
/**
 * An icon name as defined in the XDG icon naming specifcation.
 */
const ATTR_MEDIA_ICON_NAME: string
/**
 * The language this media is in, in some standard POSIX locale string, such as "de_DE".
 */
const ATTR_MEDIA_LANGUAGE: string
/**
 * A name describing the media being played. Localized if possible and applicable.
 */
const ATTR_MEDIA_NAME: string
/**
 * The "role" this media is played in. For event sounds the string
 * "event". For other cases strings like "music", "video", "game", ...
 */
const ATTR_MEDIA_ROLE: string
/**
 * A (song) title describing the media being played. Localized if possible and applicable.
 */
const ATTR_MEDIA_TITLE: string
/**
 * If this sound event was triggered by a window on the screen and the
 * windowing system supports multiple desktops, a comma seperated list
 * of indexes of the desktops this window is visible on. If this
 * attribute is an empty string, it is visible on all desktops
 * (i.e. 'sticky'). The first desktop is 0. (e.g. "0,2,3")
 */
const ATTR_WINDOW_DESKTOP: string
/**
 * If this sound event was triggered by a window on the screen, the
 * pixel height of the window.
 */
const ATTR_WINDOW_HEIGHT: string
/**
 * If this sound event was triggered by a window on the screen, the X
 * position of the center of the window as fractional value between 0
 * and 1, formatted as string, 0 reflecting the left side of the
 * screen, 1 the right side.
 */
const ATTR_WINDOW_HPOS: string
/**
 * If this sound event was triggered by a window on the screen, binary
 * icon data in PNG format for this window.
 */
const ATTR_WINDOW_ICON: string
/**
 * If this sound event was triggered by a window on the screen, an
 * icon name for this window, as defined in the XDG icon naming
 * specification.
 */
const ATTR_WINDOW_ICON_NAME: string
/**
 * If this sound event was triggered by a window on the screen, some
 * identification string for this window, so that the sound system can
 * recognize specific windows.
 */
const ATTR_WINDOW_ID: string
/**
 * If this sound event was triggered by a window on the screen, the
 * name of this window as human readable string.
 */
const ATTR_WINDOW_NAME: string
/**
 * If this sound event was triggered by a window on the screen, the Y
 * position of the center of the window as fractional value between 0
 * and 1, formatted as string, 0 reflecting the top side of the
 * screen, 1 the bottom side.
 */
const ATTR_WINDOW_VPOS: string
/**
 * If this sound event was triggered by a window on the screen, the
 * pixel width of the window.
 */
const ATTR_WINDOW_WIDTH: string
/**
 * If this sound event was triggered by a window on the screen, the X
 * position of the window measured from the top left corner of the
 * screen to the top left corner of the window.
 */
const ATTR_WINDOW_X: string
/**
 * If this sound event was triggered by a window on the screen and the
 * windowing system is X11, the X display name of the window (e.g. ":0").
 */
const ATTR_WINDOW_X11_DISPLAY: string
/**
 * If this sound event was triggered by a window on the screen and the
 * windowing system is X11, the X monitor id of the window formatted as
 * string (e.g. "0").
 */
const ATTR_WINDOW_X11_MONITOR: string
/**
 * If this sound event was triggered by a window on the screen and the
 * windowing system is X11, the X screen id of the window formatted as
 * string (e.g. "0").
 */
const ATTR_WINDOW_X11_SCREEN: string
/**
 * If this sound event was triggered by a window on the screen and the
 * windowing system is X11, the XID of the window formatted as string.
 */
const ATTR_WINDOW_X11_XID: string
/**
 * If this sound event was triggered by a window on the screen, the y
 * position of the window measured from the top left corner of the
 * screen to the top left corner of the window.
 */
const ATTR_WINDOW_Y: string
function error_quark(): GLib.Quark
module Context {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface Context extends Gio.Initable {

    // Owm methods of GSound-1.0.GSound.Context

    /**
     * Requests that a sound be cached on the server. See [#caching][gsound-GSound-Context#caching].
     * 
     * This function is intented to be used by language bindings.
     * @param attrs Hash table of attrerties
     */
    cache(attrs: GLib.HashTable): boolean
    /**
     * Attempts to open a connection to the backend sound driver. It is recommended
     * that you set context attributes with gsound_context_set_attributes() before
     * calling this function.
     * 
     * > A connection is automatically opened before playing or caching sounds,
     * > so you rarely need to call this yourself.
     * @returns %TRUE if the output device was opened successfully, or %FALSE          (populating @error)
     */
    open(): boolean
    /**
     * Finish an async operation started by gsound_context_play_full(). You
     * must call this function in the callback to free memory and receive any
     * errors which occurred.
     * @param result Result object passed to the callback of   gsound_context_play_full()
     * @returns %TRUE if playing finished successfully
     */
    play_full_finish(result: Gio.AsyncResult): boolean
    /**
     * Asynchronously request a sound to be played. When playback is finished
     * (or if an error occurs) then `callback` will be called, following the
     * normal GIO async pattern.
     * 
     * If playback is cancelled via `cancellable,` then `callback` will be called
     * with #G_IO_ERROR_CANCELLED.
     * 
     * If you do not need notification of when playback is complete, you should
     * use gsound_context_play_simple().
     * 
     * This function is intented to be used by language bindings.
     * @param attrs Attributes
     * @param cancellable A #GCancellable, or %NULL
     * @param callback callback
     */
    play_full(attrs: GLib.HashTable, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * The basic "fire-and-forget" play command. This function will not block, and
     * just sends a request to the sound server before immediately returning.
     * 
     * If you need to know when a sound finishes playing then you should call
     * gsound_context_play_full() instead.
     * 
     * You can cancel playback at any time by calling g_cancellable_cancel() on
     * `cancellable,` if supplied.
     * 
     * This function is intented to be used by language bindings.
     * @param attrs Attributes
     * @param cancellable A #GCancellable
     * @returns %TRUE on success, %FALSE on error
     */
    play_simple(attrs: GLib.HashTable, cancellable: Gio.Cancellable | null): boolean
    /**
     * Set attributes or change attributes on `context`. Subsequent calls to this
     * function calling the same attributes will override the earlier values.
     * 
     * Note that GSound will set the #GSOUND_ATTR_APPLICATION_NAME and
     * #GSOUND_ATTR_APPLICATION_ID for you if using #GApplication, so you do
     * not normally need to set these yourself.
     * 
     * This function is intented to be used by language bindings.
     * @param attrs Hash table of attributes to set
     * @returns %TRUE if attributes were updated successfully
     */
    set_attributes(attrs: GLib.HashTable): boolean
    /**
     * Sets the libcanberra driver to `driver,` for example "pulse", "alsa" or "null".
     * You normally do not need to set this yourself.
     * 
     * Note that this function may return %TRUE even if the specified driver is
     * not available: see the libcanberra documentation for details.
     * @param driver libcanberra driver to use
     * @returns %TRUE if the libcanberra driver was set successfully
     */
    set_driver(driver: string): boolean

    // Class property signals of GSound-1.0.GSound.Context

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * ca: the wrapped context
 * Wrapper for ca_context.
 * @class 
 */
class Context extends GObject.Object {

    // Own properties of GSound-1.0.GSound.Context

    static name: string
    static $gtype: GObject.GType<Context>

    // Constructors of GSound-1.0.GSound.Context

    constructor(config?: Context.ConstructorProperties) 
    /**
     * Creates and initializes a new #GSoundContext. If the an error occured
     * during initialization, #NULL is returned and `error` will be set
     * appropriately.
     * @constructor 
     * @param cancellable A #GCancellable, or %NULL
     * @returns A new #GSoundContext
     */
    constructor(cancellable: Gio.Cancellable | null) 
    /**
     * Creates and initializes a new #GSoundContext. If the an error occured
     * during initialization, #NULL is returned and `error` will be set
     * appropriately.
     * @constructor 
     * @param cancellable A #GCancellable, or %NULL
     * @returns A new #GSoundContext
     */
    static new(cancellable: Gio.Cancellable | null): Context
    _init(config?: Context.ConstructorProperties): void
}

interface ContextClass {
}

abstract class ContextClass {

    // Own properties of GSound-1.0.GSound.ContextClass

    static name: string
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

export default GSound;
// END