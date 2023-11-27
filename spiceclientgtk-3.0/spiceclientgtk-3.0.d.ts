
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './spiceclientgtk-3.0-ambient.d.ts';
import './spiceclientgtk-3.0-import.d.ts';
/**
 * SpiceClientGtk-3.0
 */

import type SpiceClientGLib from '@girs/spiceclientglib-2.0';
import type GstBase from '@girs/gstbase-1.0';
import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Gio from '@girs/gio-2.0';
import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from '@girs/cairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Atk from '@girs/atk-1.0';

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
module Display {

    // Signal callback interfaces

    /**
     * Signal callback interface for `grab-keys-pressed`
     */
    interface GrabKeysPressedSignalCallback {
        ($obj: Display): void
    }

    /**
     * Signal callback interface for `keyboard-grab`
     */
    interface KeyboardGrabSignalCallback {
        ($obj: Display, status: number): void
    }

    /**
     * Signal callback interface for `mouse-grab`
     */
    interface MouseGrabSignalCallback {
        ($obj: Display, status: number): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.EventBox.ConstructorProperties {

        // Own constructor properties of SpiceClientGtk-3.0.SpiceClientGtk.Display

        /**
         * channel-id for this #SpiceDisplay
         */
        channel_id?: number | null
        /**
         * Disable all keyboard & mouse inputs.
         */
        disable_inputs?: boolean | null
        grab_keyboard?: boolean | null
        grab_mouse?: boolean | null
        /**
         * Delay in ms of non-modifiers key press events. If the key is
         * released before this delay, a single press & release event is
         * sent to the server. If the key is pressed longer than the
         * keypress-delay, the server will receive the delayed press
         * event, and a following release event when the key is released.
         */
        keypress_delay?: number | null
        /**
         * Select monitor from #SpiceDisplay to show.
         * The value -1 means the whole display is shown.
         * By default, the monitor 0 is selected.
         */
        monitor_id?: number | null
        /**
         * If scaling, only scale down, never up.
         */
        only_downscale?: boolean | null
        resize_guest?: boolean | null
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
        zoom_level?: number | null
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
        /**
         * Zoom level in percentage, from 10 to 400. Default to 100.
         * (this option is only supported with cairo backend when scaling
         * is enabled)
         */
        zoomLevel?: number | null
    }

}

interface Display extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of SpiceClientGtk-3.0.SpiceClientGtk.Display

    /**
     * channel-id for this #SpiceDisplay
     */
    readonly channel_id: number
    /**
     * channel-id for this #SpiceDisplay
     */
    readonly channelId: number
    /**
     * Disable all keyboard & mouse inputs.
     */
    disable_inputs: boolean
    /**
     * Disable all keyboard & mouse inputs.
     */
    disableInputs: boolean
    grab_keyboard: boolean
    grabKeyboard: boolean
    grab_mouse: boolean
    grabMouse: boolean
    /**
     * Delay in ms of non-modifiers key press events. If the key is
     * released before this delay, a single press & release event is
     * sent to the server. If the key is pressed longer than the
     * keypress-delay, the server will receive the delayed press
     * event, and a following release event when the key is released.
     */
    keypress_delay: number
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
    monitor_id: number
    /**
     * Select monitor from #SpiceDisplay to show.
     * The value -1 means the whole display is shown.
     * By default, the monitor 0 is selected.
     */
    monitorId: number
    /**
     * If scaling, only scale down, never up.
     */
    only_downscale: boolean
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
    resize_guest: boolean
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
    zoom_level: number
    /**
     * Zoom level in percentage, from 10 to 400. Default to 100.
     * (this option is only supported with cairo backend when scaling
     * is enabled)
     */
    zoomLevel: number

    // Owm methods of SpiceClientGtk-3.0.SpiceClientGtk.Display

    /**
     * Finds the current grab key combination for the `display`.
     * @returns the current grab key combination.
     */
    get_grab_keys(): GrabSequence
    /**
     * Take a screenshot of the display.
     * @returns a #GdkPixbuf with the screenshot image buffer
     */
    get_pixbuf(): GdkPixbuf.Pixbuf
    /**
     * Ungrab the mouse.
     */
    mouse_ungrab(): void
    /**
     * Send keyval press/release events to the display.
     * @param keyvals Keyval array
     * @param kind #SpiceDisplayKeyEvent action
     */
    send_keys(keyvals: number[], kind: DisplayKeyEvent): void
    /**
     * Set the key combination to grab/ungrab the keyboard. The default is
     * "Control L + Alt L".
     * @param seq key sequence
     */
    set_grab_keys(seq: GrabSequence): void

    // Conflicting methods

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string | null): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void

    // Own signals of SpiceClientGtk-3.0.SpiceClientGtk.Display

    connect(sigName: "grab-keys-pressed", callback: Display.GrabKeysPressedSignalCallback): number
    connect_after(sigName: "grab-keys-pressed", callback: Display.GrabKeysPressedSignalCallback): number
    emit(sigName: "grab-keys-pressed", ...args: any[]): void
    connect(sigName: "keyboard-grab", callback: Display.KeyboardGrabSignalCallback): number
    connect_after(sigName: "keyboard-grab", callback: Display.KeyboardGrabSignalCallback): number
    emit(sigName: "keyboard-grab", status: number, ...args: any[]): void
    connect(sigName: "mouse-grab", callback: Display.MouseGrabSignalCallback): number
    connect_after(sigName: "mouse-grab", callback: Display.MouseGrabSignalCallback): number
    emit(sigName: "mouse-grab", status: number, ...args: any[]): void

    // Class property signals of SpiceClientGtk-3.0.SpiceClientGtk.Display

    connect(sigName: "notify::channel-id", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::channel-id", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::channel-id", ...args: any[]): void
    connect(sigName: "notify::disable-inputs", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disable-inputs", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::disable-inputs", ...args: any[]): void
    connect(sigName: "notify::grab-keyboard", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::grab-keyboard", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::grab-keyboard", ...args: any[]): void
    connect(sigName: "notify::grab-mouse", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::grab-mouse", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::grab-mouse", ...args: any[]): void
    connect(sigName: "notify::keypress-delay", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keypress-delay", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::keypress-delay", ...args: any[]): void
    connect(sigName: "notify::monitor-id", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::monitor-id", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::monitor-id", ...args: any[]): void
    connect(sigName: "notify::only-downscale", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::only-downscale", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::only-downscale", ...args: any[]): void
    connect(sigName: "notify::ready", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ready", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ready", ...args: any[]): void
    connect(sigName: "notify::resize-guest", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-guest", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-guest", ...args: any[]): void
    connect(sigName: "notify::scaling", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scaling", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scaling", ...args: any[]): void
    connect(sigName: "notify::session", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::session", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::session", ...args: any[]): void
    connect(sigName: "notify::zoom-level", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::zoom-level", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::zoom-level", ...args: any[]): void
    connect(sigName: "notify::above-child", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::above-child", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::above-child", ...args: any[]): void
    connect(sigName: "notify::visible-window", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible-window", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible-window", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
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
    connect(sigName: "notify::name", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
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

/**
 * The #SpiceDisplay struct is opaque and should not be accessed directly.
 * @class 
 */
class Display extends Gtk.EventBox {

    // Own properties of SpiceClientGtk-3.0.SpiceClientGtk.Display

    static name: string
    static $gtype: GObject.GType<Display>

    // Constructors of SpiceClientGtk-3.0.SpiceClientGtk.Display

    constructor(config?: Display.ConstructorProperties) 
    /**
     * Creates a new #SpiceDisplay widget.
     * @constructor 
     * @param session a #SpiceSession
     * @param channel_id the display channel ID to associate with #SpiceDisplay
     * @returns a new #SpiceDisplay widget.
     */
    constructor(session: SpiceClientGLib.Session, channel_id: number) 
    /**
     * Creates a new #SpiceDisplay widget.
     * @constructor 
     * @param session a #SpiceSession
     * @param channel_id the display channel ID to associate with #SpiceDisplay
     * @returns a new #SpiceDisplay widget.
     */
    static new(session: SpiceClientGLib.Session, channel_id: number): Display

    // Overloads of new

    /**
     * Creates a new #GtkEventBox.
     * @constructor 
     * @returns a new #GtkEventBox
     */
    static new(): Gtk.EventBox
    /**
     * Creates a new #SpiceDisplay widget associated with the monitor id.
     * @constructor 
     * @param session a #SpiceSession
     * @param channel_id the display channel ID to associate with #SpiceDisplay
     * @param monitor_id the monitor id within the display channel
     * @returns a new #SpiceDisplay widget.
     */
    static new_with_monitor(session: SpiceClientGLib.Session, channel_id: number, monitor_id: number): Display
    _init(config?: Display.ConstructorProperties): void
}

module GtkSession {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of SpiceClientGtk-3.0.SpiceClientGtk.GtkSession

        /**
         * When this is true the clipboard gets automatically shared between host
         * and guest.
         */
        auto_clipboard?: boolean | null
        /**
         * Automatically redirect newly plugged in USB devices. Note the auto
         * redirection only happens when a #SpiceDisplay associated with the
         * session had keyboard focus.
         */
        auto_usbredir?: boolean | null
        /**
         * #SpiceSession this #SpiceGtkSession is associated with
         */
        session?: SpiceClientGLib.Session | null
        /**
         * Automatically sync modifiers (Caps, Num and Scroll locks) with the guest.
         */
        sync_modifiers?: boolean | null
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
         * Automatically sync modifiers (Caps, Num and Scroll locks) with the guest.
         */
        syncModifiers?: boolean | null
    }

}

interface GtkSession {

    // Own properties of SpiceClientGtk-3.0.SpiceClientGtk.GtkSession

    /**
     * When this is true the clipboard gets automatically shared between host
     * and guest.
     */
    auto_clipboard: boolean
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
    auto_usbredir: boolean
    /**
     * Automatically redirect newly plugged in USB devices. Note the auto
     * redirection only happens when a #SpiceDisplay associated with the
     * session had keyboard focus.
     */
    autoUsbredir: boolean
    /**
     * Returns %TRUE if the pointer is currently grabbed by this session.
     */
    readonly pointer_grabbed: boolean
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
    sync_modifiers: boolean
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
    copy_to_guest(): void
    /**
     * Copy guest clipboard to client-side clipboard.
     * 
     * Since 0.8
     */
    paste_from_guest(): void

    // Class property signals of SpiceClientGtk-3.0.SpiceClientGtk.GtkSession

    connect(sigName: "notify::auto-clipboard", callback: (($obj: GtkSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-clipboard", callback: (($obj: GtkSession, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::auto-clipboard", ...args: any[]): void
    connect(sigName: "notify::auto-usbredir", callback: (($obj: GtkSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-usbredir", callback: (($obj: GtkSession, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::auto-usbredir", ...args: any[]): void
    connect(sigName: "notify::pointer-grabbed", callback: (($obj: GtkSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-grabbed", callback: (($obj: GtkSession, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pointer-grabbed", ...args: any[]): void
    connect(sigName: "notify::session", callback: (($obj: GtkSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::session", callback: (($obj: GtkSession, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::session", ...args: any[]): void
    connect(sigName: "notify::sync-modifiers", callback: (($obj: GtkSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync-modifiers", callback: (($obj: GtkSession, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sync-modifiers", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    constructor(config?: GtkSession.ConstructorProperties) 
    _init(config?: GtkSession.ConstructorProperties): void
    /**
     * Gets the #SpiceGtkSession associated with the passed in #SpiceSession.
     * A new #SpiceGtkSession instance will be created the first time this
     * function is called for a certain #SpiceSession.
     * 
     * Note that this function returns a weak reference, which should not be used
     * after the #SpiceSession itself has been unref-ed by the caller.
     * @param session #SpiceSession for which to get the #SpiceGtkSession
     * @returns a weak reference to the #SpiceGtkSession associated with the passed in #SpiceSession Since 0.8
     */
    static get(session: SpiceClientGLib.Session): GtkSession
}

module UsbDeviceWidget {

    // Signal callback interfaces

    /**
     * Signal callback interface for `connect-failed`
     */
    interface ConnectFailedSignalCallback {
        ($obj: UsbDeviceWidget, device: SpiceClientGLib.UsbDevice, error: GLib.Error): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Box.ConstructorProperties {

        // Own constructor properties of SpiceClientGtk-3.0.SpiceClientGtk.UsbDeviceWidget

        /**
         * Format string to pass to spice_usb_device_get_description() for getting
         * the device USB descriptions.
         */
        device_format_string?: string | null
        /**
         * #SpiceSession this #SpiceUsbDeviceWidget is associated with
         */
        session?: SpiceClientGLib.Session | null
        /**
         * Format string to pass to spice_usb_device_get_description() for getting
         * the device USB descriptions.
         */
        deviceFormatString?: string | null
    }

}

interface UsbDeviceWidget extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own properties of SpiceClientGtk-3.0.SpiceClientGtk.UsbDeviceWidget

    /**
     * Format string to pass to spice_usb_device_get_description() for getting
     * the device USB descriptions.
     */
    readonly device_format_string: string | null
    /**
     * Format string to pass to spice_usb_device_get_description() for getting
     * the device USB descriptions.
     */
    readonly deviceFormatString: string | null
    /**
     * #SpiceSession this #SpiceUsbDeviceWidget is associated with
     */
    readonly session: SpiceClientGLib.Session

    // Conflicting methods

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string | null): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void

    // Own signals of SpiceClientGtk-3.0.SpiceClientGtk.UsbDeviceWidget

    connect(sigName: "connect-failed", callback: UsbDeviceWidget.ConnectFailedSignalCallback): number
    connect_after(sigName: "connect-failed", callback: UsbDeviceWidget.ConnectFailedSignalCallback): number
    emit(sigName: "connect-failed", device: SpiceClientGLib.UsbDevice, error: GLib.Error, ...args: any[]): void

    // Class property signals of SpiceClientGtk-3.0.SpiceClientGtk.UsbDeviceWidget

    connect(sigName: "notify::device-format-string", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-format-string", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::device-format-string", ...args: any[]): void
    connect(sigName: "notify::session", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::session", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::session", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: UsbDeviceWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    constructor(config?: UsbDeviceWidget.ConstructorProperties) 
    /**
     * Creates a new widget to control USB redirection.
     * @constructor 
     * @param session #SpiceSession for which to widget will control USB redirection
     * @param device_format_string String passed to spice_usb_device_get_description()
     * @returns a new #SpiceUsbDeviceWidget instance
     */
    constructor(session: SpiceClientGLib.Session, device_format_string: string | null) 
    /**
     * Creates a new widget to control USB redirection.
     * @constructor 
     * @param session #SpiceSession for which to widget will control USB redirection
     * @param device_format_string String passed to spice_usb_device_get_description()
     * @returns a new #SpiceUsbDeviceWidget instance
     */
    static new(session: SpiceClientGLib.Session, device_format_string: string | null): UsbDeviceWidget

    // Overloads of new

    /**
     * Creates a new #GtkBox.
     * @constructor 
     * @param orientation the box’s orientation.
     * @param spacing the number of pixels to place by default between children.
     * @returns a new #GtkBox.
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    _init(config?: UsbDeviceWidget.ConstructorProperties): void
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
     * @returns a newly allocated string representing the key sequence
     */
    as_string(): string | null
    /**
     * Creates a copy of the `sequence`.
     * @returns a copy of @sequence
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
     * Creates a new #SpiceGrabSequence from the string representation.
     * @constructor 
     * @param str a string of '+' separated key names (ex: "Control_L+Alt_L")
     * @returns a new #SpiceGrabSequence.
     */
    static new_from_string(str: string | null): GrabSequence
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

export default SpiceClientGtk;
// END