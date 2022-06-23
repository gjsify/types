// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * SpiceClientGtk-3.0
 */

import type SpiceClientGLib from './SpiceClientGLib-2.0';
import type GstBase from './GstBase-1.0';
import type Gst from './Gst-1.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';
import type Gio from './Gio-2.0';
import type Gtk from './Gtk-3.0';
import type xlib from './xlib-2.0';
import type Gdk from './Gdk-3.0';
import type cairo from './cairo-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type Atk from './Atk-1.0';

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
interface Display_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.EventBox_ConstructProps {

    // Own constructor properties of SpiceClientGtk-3.0.SpiceClientGtk.Display

    /**
     * channel-id for this #SpiceDisplay
     */
    channelId?: number | null
    /**
     * Disable all keyboard & mouse inputs.
     */
    disableInputs?: boolean | null
    grabKeyboard?: boolean | null
    grabMouse?: boolean | null
    /**
     * Delay in ms of non-modifiers key press events. If the key is
     * released before this delay, a single press & release event is
     * sent to the server. If the key is pressed longer than the
     * keypress-delay, the server will receive the delayed press
     * event, and a following release event when the key is released.
     */
    keypressDelay?: number | null
    /**
     * Select monitor from #SpiceDisplay to show.
     * The value -1 means the whole display is shown.
     * By default, the monitor 0 is selected.
     */
    monitorId?: number | null
    /**
     * If scaling, only scale down, never up.
     */
    onlyDownscale?: boolean | null
    resizeGuest?: boolean | null
    scaling?: boolean | null
    /**
     * #SpiceSession for this #SpiceDisplay
     */
    session?: SpiceClientGLib.Session | null
    /**
     * Zoom level in percentage, from 10 to 400. Default to 100.
     * (this option is only supported with cairo backend when scaling
     * is enabled)
     */
    zoomLevel?: number | null
}

/**
 * Signal callback interface for `grab-keys-pressed`
 */
interface Display_GrabKeysPressedSignalCallback {
    (): void
}

/**
 * Signal callback interface for `keyboard-grab`
 */
interface Display_KeyboardGrabSignalCallback {
    (status: number): void
}

/**
 * Signal callback interface for `mouse-grab`
 */
interface Display_MouseGrabSignalCallback {
    (status: number): void
}

interface Display extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of SpiceClientGtk-3.0.SpiceClientGtk.Display

    /**
     * channel-id for this #SpiceDisplay
     */
    readonly channelId: number
    /**
     * Disable all keyboard & mouse inputs.
     */
    disableInputs: boolean
    grabKeyboard: boolean
    grabMouse: boolean
    /**
     * Delay in ms of non-modifiers key press events. If the key is
     * released before this delay, a single press & release event is
     * sent to the server. If the key is pressed longer than the
     * keypress-delay, the server will receive the delayed press
     * event, and a following release event when the key is released.
     */
    keypressDelay: number
    /**
     * Select monitor from #SpiceDisplay to show.
     * The value -1 means the whole display is shown.
     * By default, the monitor 0 is selected.
     */
    monitorId: number
    /**
     * If scaling, only scale down, never up.
     */
    onlyDownscale: boolean
    /**
     * Indicate whether the display is ready to be shown. It takes
     * into account several conditions, such as the channel display
     * "mark" state, whether the monitor area is visible..
     */
    readonly ready: boolean
    resizeGuest: boolean
    scaling: boolean
    /**
     * #SpiceSession for this #SpiceDisplay
     */
    readonly session: SpiceClientGLib.Session
    /**
     * Zoom level in percentage, from 10 to 400. Default to 100.
     * (this option is only supported with cairo backend when scaling
     * is enabled)
     */
    zoomLevel: number

    // Owm methods of SpiceClientGtk-3.0.SpiceClientGtk.Display

    /**
     * Finds the current grab key combination for the `display`.
     */
    getGrabKeys(): GrabSequence
    /**
     * Take a screenshot of the display.
     */
    getPixbuf(): GdkPixbuf.Pixbuf
    /**
     * Ungrab the mouse.
     */
    mouseUngrab(): void
    /**
     * Send keyval press/release events to the display.
     * @param keyvals Keyval array
     * @param kind #SpiceDisplayKeyEvent action
     */
    sendKeys(keyvals: number[], kind: DisplayKeyEvent): void
    /**
     * Set the key combination to grab/ungrab the keyboard. The default is
     * "Control L + Alt L".
     * @param seq key sequence
     */
    setGrabKeys(seq: GrabSequence): void

    // Conflicting methods

    childNotify(...args: any[]): any

    // Own signals of SpiceClientGtk-3.0.SpiceClientGtk.Display

    connect(sigName: "grab-keys-pressed", callback: Display_GrabKeysPressedSignalCallback): number
    on(sigName: "grab-keys-pressed", callback: Display_GrabKeysPressedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "grab-keys-pressed", callback: Display_GrabKeysPressedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "grab-keys-pressed", callback: Display_GrabKeysPressedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "grab-keys-pressed", ...args: any[]): void
    connect(sigName: "keyboard-grab", callback: Display_KeyboardGrabSignalCallback): number
    on(sigName: "keyboard-grab", callback: Display_KeyboardGrabSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "keyboard-grab", callback: Display_KeyboardGrabSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "keyboard-grab", callback: Display_KeyboardGrabSignalCallback): NodeJS.EventEmitter
    emit(sigName: "keyboard-grab", ...args: any[]): void
    connect(sigName: "mouse-grab", callback: Display_MouseGrabSignalCallback): number
    on(sigName: "mouse-grab", callback: Display_MouseGrabSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "mouse-grab", callback: Display_MouseGrabSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "mouse-grab", callback: Display_MouseGrabSignalCallback): NodeJS.EventEmitter
    emit(sigName: "mouse-grab", ...args: any[]): void

    // Class property signals of SpiceClientGtk-3.0.SpiceClientGtk.Display

    connect(sigName: "notify::channel-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::channel-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::channel-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::channel-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::channel-id", ...args: any[]): void
    connect(sigName: "notify::disable-inputs", callback: (...args: any[]) => void): number
    on(sigName: "notify::disable-inputs", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::disable-inputs", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::disable-inputs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::disable-inputs", ...args: any[]): void
    connect(sigName: "notify::grab-keyboard", callback: (...args: any[]) => void): number
    on(sigName: "notify::grab-keyboard", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::grab-keyboard", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::grab-keyboard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::grab-keyboard", ...args: any[]): void
    connect(sigName: "notify::grab-mouse", callback: (...args: any[]) => void): number
    on(sigName: "notify::grab-mouse", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::grab-mouse", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::grab-mouse", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::grab-mouse", ...args: any[]): void
    connect(sigName: "notify::keypress-delay", callback: (...args: any[]) => void): number
    on(sigName: "notify::keypress-delay", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::keypress-delay", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::keypress-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::keypress-delay", ...args: any[]): void
    connect(sigName: "notify::monitor-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::monitor-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::monitor-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::monitor-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::monitor-id", ...args: any[]): void
    connect(sigName: "notify::only-downscale", callback: (...args: any[]) => void): number
    on(sigName: "notify::only-downscale", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::only-downscale", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::only-downscale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::only-downscale", ...args: any[]): void
    connect(sigName: "notify::ready", callback: (...args: any[]) => void): number
    on(sigName: "notify::ready", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ready", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ready", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ready", ...args: any[]): void
    connect(sigName: "notify::resize-guest", callback: (...args: any[]) => void): number
    on(sigName: "notify::resize-guest", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::resize-guest", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::resize-guest", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::resize-guest", ...args: any[]): void
    connect(sigName: "notify::scaling", callback: (...args: any[]) => void): number
    on(sigName: "notify::scaling", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scaling", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scaling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scaling", ...args: any[]): void
    connect(sigName: "notify::session", callback: (...args: any[]) => void): number
    on(sigName: "notify::session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::session", ...args: any[]): void
    connect(sigName: "notify::zoom-level", callback: (...args: any[]) => void): number
    on(sigName: "notify::zoom-level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::zoom-level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::zoom-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::zoom-level", ...args: any[]): void
    connect(sigName: "notify::above-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::above-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::above-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::above-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::above-child", ...args: any[]): void
    connect(sigName: "notify::visible-window", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible-window", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible-window", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible-window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible-window", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::border-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::border-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (...args: any[]) => void): number
    on(sigName: "notify::child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::resize-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::resize-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::resize-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::resize-mode", ...args: any[]): void
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
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
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

/**
 * The #SpiceDisplay struct is opaque and should not be accessed directly.
 * @class 
 */
class Display extends Gtk.EventBox {

    // Own properties of SpiceClientGtk-3.0.SpiceClientGtk.Display

    static name: string
    static $gtype: GObject.GType<Display>

    // Constructors of SpiceClientGtk-3.0.SpiceClientGtk.Display

    constructor(config?: Display_ConstructProps) 
    /**
     * Creates a new #SpiceDisplay widget.
     * @constructor 
     * @param session a #SpiceSession
     * @param channelId the display channel ID to associate with #SpiceDisplay
     */
    constructor(session: SpiceClientGLib.Session, channelId: number) 
    /**
     * Creates a new #SpiceDisplay widget.
     * @constructor 
     * @param session a #SpiceSession
     * @param channelId the display channel ID to associate with #SpiceDisplay
     */
    static new(session: SpiceClientGLib.Session, channelId: number): Display

    // Overloads of new

    /**
     * Creates a new #GtkEventBox.
     * @constructor 
     */
    static new(): Gtk.EventBox
    /**
     * Creates a new #SpiceDisplay widget associated with the monitor id.
     * @constructor 
     * @param session a #SpiceSession
     * @param channelId the display channel ID to associate with #SpiceDisplay
     * @param monitorId the monitor id within the display channel
     */
    static newWithMonitor(session: SpiceClientGLib.Session, channelId: number, monitorId: number): Display
    _init(config?: Display_ConstructProps): void
}

interface GtkSession_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of SpiceClientGtk-3.0.SpiceClientGtk.GtkSession

    /**
     * When this is true the clipboard gets automatically shared between host
     * and guest.
     */
    autoClipboard?: boolean | null
    /**
     * Automatically redirect newly plugged in USB devices. Note the auto
     * redirection only happens when a #SpiceDisplay associated with the
     * session had keyboard focus.
     */
    autoUsbredir?: boolean | null
    /**
     * #SpiceSession this #SpiceGtkSession is associated with
     */
    session?: SpiceClientGLib.Session | null
    /**
     * Automatically sync modifiers (Caps, Num and Scroll locks) with the guest.
     */
    syncModifiers?: boolean | null
}

interface GtkSession {

    // Own properties of SpiceClientGtk-3.0.SpiceClientGtk.GtkSession

    /**
     * When this is true the clipboard gets automatically shared between host
     * and guest.
     */
    autoClipboard: boolean
    /**
     * Automatically redirect newly plugged in USB devices. Note the auto
     * redirection only happens when a #SpiceDisplay associated with the
     * session had keyboard focus.
     */
    autoUsbredir: boolean
    /**
     * Returns %TRUE if the pointer is currently grabbed by this session.
     */
    readonly pointerGrabbed: boolean
    /**
     * #SpiceSession this #SpiceGtkSession is associated with
     */
    readonly session: SpiceClientGLib.Session
    /**
     * Automatically sync modifiers (Caps, Num and Scroll locks) with the guest.
     */
    syncModifiers: boolean

    // Owm methods of SpiceClientGtk-3.0.SpiceClientGtk.GtkSession

    /**
     * Copy client-side clipboard to guest clipboard.
     * 
     * Since 0.8
     */
    copyToGuest(): void
    /**
     * Copy guest clipboard to client-side clipboard.
     * 
     * Since 0.8
     */
    pasteFromGuest(): void

    // Class property signals of SpiceClientGtk-3.0.SpiceClientGtk.GtkSession

    connect(sigName: "notify::auto-clipboard", callback: (...args: any[]) => void): number
    on(sigName: "notify::auto-clipboard", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::auto-clipboard", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::auto-clipboard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::auto-clipboard", ...args: any[]): void
    connect(sigName: "notify::auto-usbredir", callback: (...args: any[]) => void): number
    on(sigName: "notify::auto-usbredir", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::auto-usbredir", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::auto-usbredir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::auto-usbredir", ...args: any[]): void
    connect(sigName: "notify::pointer-grabbed", callback: (...args: any[]) => void): number
    on(sigName: "notify::pointer-grabbed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pointer-grabbed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pointer-grabbed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pointer-grabbed", ...args: any[]): void
    connect(sigName: "notify::session", callback: (...args: any[]) => void): number
    on(sigName: "notify::session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::session", ...args: any[]): void
    connect(sigName: "notify::sync-modifiers", callback: (...args: any[]) => void): number
    on(sigName: "notify::sync-modifiers", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sync-modifiers", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sync-modifiers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sync-modifiers", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #SpiceGtkSession struct is opaque and should not be accessed directly.
 * @class 
 */
class GtkSession extends GObject.Object {

    // Own properties of SpiceClientGtk-3.0.SpiceClientGtk.GtkSession

    static name: string
    static $gtype: GObject.GType<GtkSession>

    // Constructors of SpiceClientGtk-3.0.SpiceClientGtk.GtkSession

    constructor(config?: GtkSession_ConstructProps) 
    _init(config?: GtkSession_ConstructProps): void
    /**
     * Gets the #SpiceGtkSession associated with the passed in #SpiceSession.
     * A new #SpiceGtkSession instance will be created the first time this
     * function is called for a certain #SpiceSession.
     * 
     * Note that this function returns a weak reference, which should not be used
     * after the #SpiceSession itself has been unref-ed by the caller.
     * @param session #SpiceSession for which to get the #SpiceGtkSession
     */
    static get(session: SpiceClientGLib.Session): GtkSession
}

interface UsbDeviceWidget_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.Orientable_ConstructProps, Gtk.Box_ConstructProps {

    // Own constructor properties of SpiceClientGtk-3.0.SpiceClientGtk.UsbDeviceWidget

    /**
     * Format string to pass to spice_usb_device_get_description() for getting
     * the device USB descriptions.
     */
    deviceFormatString?: string | null
    /**
     * #SpiceSession this #SpiceUsbDeviceWidget is associated with
     */
    session?: SpiceClientGLib.Session | null
}

/**
 * Signal callback interface for `connect-failed`
 */
interface UsbDeviceWidget_ConnectFailedSignalCallback {
    (device: SpiceClientGLib.UsbDevice, error: GLib.Error): void
}

interface UsbDeviceWidget extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own properties of SpiceClientGtk-3.0.SpiceClientGtk.UsbDeviceWidget

    /**
     * Format string to pass to spice_usb_device_get_description() for getting
     * the device USB descriptions.
     */
    readonly deviceFormatString: string
    /**
     * #SpiceSession this #SpiceUsbDeviceWidget is associated with
     */
    readonly session: SpiceClientGLib.Session

    // Conflicting methods

    childNotify(...args: any[]): any

    // Own signals of SpiceClientGtk-3.0.SpiceClientGtk.UsbDeviceWidget

    connect(sigName: "connect-failed", callback: UsbDeviceWidget_ConnectFailedSignalCallback): number
    on(sigName: "connect-failed", callback: UsbDeviceWidget_ConnectFailedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "connect-failed", callback: UsbDeviceWidget_ConnectFailedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "connect-failed", callback: UsbDeviceWidget_ConnectFailedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "connect-failed", error: GLib.Error, ...args: any[]): void

    // Class property signals of SpiceClientGtk-3.0.SpiceClientGtk.UsbDeviceWidget

    connect(sigName: "notify::device-format-string", callback: (...args: any[]) => void): number
    on(sigName: "notify::device-format-string", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::device-format-string", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::device-format-string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::device-format-string", ...args: any[]): void
    connect(sigName: "notify::session", callback: (...args: any[]) => void): number
    on(sigName: "notify::session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::session", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: (...args: any[]) => void): number
    on(sigName: "notify::baseline-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::baseline-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::baseline-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: (...args: any[]) => void): number
    on(sigName: "notify::homogeneous", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::homogeneous", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::homogeneous", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (...args: any[]) => void): number
    on(sigName: "notify::spacing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::spacing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::border-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::border-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (...args: any[]) => void): number
    on(sigName: "notify::child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::resize-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::resize-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::resize-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::resize-mode", ...args: any[]): void
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
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
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
    connect(sigName: "notify::orientation", callback: (...args: any[]) => void): number
    on(sigName: "notify::orientation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::orientation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::orientation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #SpiceUsbDeviceWidget struct is opaque and should not be accessed directly.
 * @class 
 */
class UsbDeviceWidget extends Gtk.Box {

    // Own properties of SpiceClientGtk-3.0.SpiceClientGtk.UsbDeviceWidget

    static name: string
    static $gtype: GObject.GType<UsbDeviceWidget>

    // Constructors of SpiceClientGtk-3.0.SpiceClientGtk.UsbDeviceWidget

    constructor(config?: UsbDeviceWidget_ConstructProps) 
    /**
     * Creates a new widget to control USB redirection.
     * @constructor 
     * @param session #SpiceSession for which to widget will control USB redirection
     * @param deviceFormatString String passed to spice_usb_device_get_description()
     */
    constructor(session: SpiceClientGLib.Session, deviceFormatString: string | null) 
    /**
     * Creates a new widget to control USB redirection.
     * @constructor 
     * @param session #SpiceSession for which to widget will control USB redirection
     * @param deviceFormatString String passed to spice_usb_device_get_description()
     */
    static new(session: SpiceClientGLib.Session, deviceFormatString: string | null): UsbDeviceWidget

    // Overloads of new

    /**
     * Creates a new #GtkBox.
     * @constructor 
     * @param orientation the box’s orientation.
     * @param spacing the number of pixels to place by default between children.
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    _init(config?: UsbDeviceWidget_ConstructProps): void
}

interface DisplayClass {
}

/**
 * Class structure for #SpiceDisplay. It is opaque and should not be accessed directly.
 * @record 
 */
abstract class DisplayClass {

    // Own properties of SpiceClientGtk-3.0.SpiceClientGtk.DisplayClass

    static name: string
}

interface GrabSequence {

    // Owm methods of SpiceClientGtk-3.0.SpiceClientGtk.GrabSequence

    /**
     * Creates a string representing the `sequence`.
     */
    asString(): string
    /**
     * Creates a copy of the `sequence`.
     */
    copy(): GrabSequence
    /**
     * Free `sequence`.
     */
    free(): void
}

/**
 * An opaque type that represents a grab sequence.
 * @record 
 */
class GrabSequence {

    // Own properties of SpiceClientGtk-3.0.SpiceClientGtk.GrabSequence

    static name: string

    // Constructors of SpiceClientGtk-3.0.SpiceClientGtk.GrabSequence

    /**
     * Creates a new grab sequence from a list of keysym values
     * @constructor 
     * @param keysyms the keysym values
     */
    constructor(keysyms: number[]) 
    /**
     * Creates a new grab sequence from a list of keysym values
     * @constructor 
     * @param keysyms the keysym values
     */
    static new(keysyms: number[]): GrabSequence
    /**
     * Creates a new #SpiceGrabSequence from the string representation.
     * @constructor 
     * @param str a string of '+' separated key names (ex: "Control_L+Alt_L")
     */
    static newFromString(str: string): GrabSequence
}

interface GtkSessionClass {
}

/**
 * Class structure for #SpiceGtkSession. It is opaque and should not be accessed directly.
 * @record 
 */
abstract class GtkSessionClass {

    // Own properties of SpiceClientGtk-3.0.SpiceClientGtk.GtkSessionClass

    static name: string
}

interface UsbDeviceWidgetClass {
}

/**
 * Class structure for #SpiceUsbDeviceWidget. It is opaque and should not be accessed directly.
 * @record 
 */
abstract class UsbDeviceWidgetClass {

    // Own properties of SpiceClientGtk-3.0.SpiceClientGtk.UsbDeviceWidgetClass

    static name: string
}

interface UsbDeviceWidgetPrivate {
}

class UsbDeviceWidgetPrivate {

    // Own properties of SpiceClientGtk-3.0.SpiceClientGtk.UsbDeviceWidgetPrivate

    static name: string
}

}
export default SpiceClientGtk;