
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */
/**
 * ColordGtk-1.0
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
import type Colord from '@girs/colord-1.0';

/**
 * Errors that can be thrown
 */
export enum WindowError {
    /**
     * the transaction failed for an unknown reason
     */
    FAILED,
    LAST,
}
export const GTK_MAJOR_VERSION: number
export const GTK_MICRO_VERSION: number
export const GTK_MINOR_VERSION: number
export module SampleWidget {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.DrawingArea.ConstructorProperties {

        // Own constructor properties of ColordGtk-1.0.ColordGtk.SampleWidget

        color?: Colord.ColorRGB | null
    }

}

export interface SampleWidget extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of ColordGtk-1.0.ColordGtk.SampleWidget

    color: Colord.ColorRGB

    // Own fields of ColordGtk-1.0.ColordGtk.SampleWidget

    parent: Gtk.DrawingArea & Gtk.Container
    priv: SampleWidgetPrivate

    // Owm methods of ColordGtk-1.0.ColordGtk.SampleWidget

    /**
     * Sets the color for the sample widget
     * @param color A color
     */
    set_color(color: Colord.ColorRGB): void

    // Class property signals of ColordGtk-1.0.ColordGtk.SampleWidget

    connect(sigName: "notify::color", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::color", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: SampleWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SampleWidget extends Gtk.DrawingArea {

    // Own properties of ColordGtk-1.0.ColordGtk.SampleWidget

    static name: string
    static $gtype: GObject.GType<SampleWidget>

    // Constructors of ColordGtk-1.0.ColordGtk.SampleWidget

    constructor(config?: SampleWidget.ConstructorProperties) 
    constructor() 
    static new(): SampleWidget
    _init(config?: SampleWidget.ConstructorProperties): void
}

export module SampleWindow {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Window.ConstructorProperties {
    }

}

export interface SampleWindow extends Atk.ImplementorIface, Gtk.Buildable {

    // Own fields of ColordGtk-1.0.ColordGtk.SampleWindow

    parent: Gtk.Window & Gtk.Container
    priv: any

    // Owm methods of ColordGtk-1.0.ColordGtk.SampleWindow

    /**
     * Sets the window to a specific color.
     * @param color the color
     */
    set_color(color: Colord.ColorRGB): void
    /**
     * Sets the percentage value on the window.
     * @param fraction the fraction value to show, or -1 for pulsing.
     */
    set_fraction(fraction: number): void

    // Conflicting methods

    /**
     * Activates the targets associated with the mnemonic.
     * @param keyval the mnemonic
     * @param modifier the modifiers
     * @returns %TRUE if the activation is done.
     */
    mnemonic_activate(keyval: number, modifier: Gdk.ModifierType): boolean

    // Overloads of mnemonic_activate

    /**
     * Emits the #GtkWidget::mnemonic-activate signal.
     * @param group_cycling %TRUE if there are other widgets with the same mnemonic
     * @returns %TRUE if the signal has been handled
     */
    mnemonic_activate(group_cycling: boolean): boolean
    /**
     * Emits the #GtkWidget::mnemonic-activate signal.
     * @param group_cycling %TRUE if there are other widgets with the same mnemonic
     * @returns %TRUE if the signal has been handled
     */
    mnemonic_activate(group_cycling: boolean): boolean
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

    // Class property signals of ColordGtk-1.0.ColordGtk.SampleWindow

    connect(sigName: "notify::accept-focus", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-focus", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accept-focus", ...args: any[]): void
    connect(sigName: "notify::application", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::attached-to", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attached-to", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attached-to", ...args: any[]): void
    connect(sigName: "notify::decorated", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decorated", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::decorated", ...args: any[]): void
    connect(sigName: "notify::default-height", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-height", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-height", ...args: any[]): void
    connect(sigName: "notify::default-width", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-width", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-width", ...args: any[]): void
    connect(sigName: "notify::deletable", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletable", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::deletable", ...args: any[]): void
    connect(sigName: "notify::destroy-with-parent", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destroy-with-parent", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::destroy-with-parent", ...args: any[]): void
    connect(sigName: "notify::focus-on-map", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-map", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-map", ...args: any[]): void
    connect(sigName: "notify::focus-visible", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-visible", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-visible", ...args: any[]): void
    connect(sigName: "notify::gravity", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gravity", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gravity", ...args: any[]): void
    connect(sigName: "notify::has-resize-grip", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-resize-grip", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-resize-grip", ...args: any[]): void
    connect(sigName: "notify::has-toplevel-focus", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-toplevel-focus", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-toplevel-focus", ...args: any[]): void
    connect(sigName: "notify::hide-titlebar-when-maximized", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hide-titlebar-when-maximized", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hide-titlebar-when-maximized", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::is-active", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-active", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-active", ...args: any[]): void
    connect(sigName: "notify::is-maximized", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-maximized", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-maximized", ...args: any[]): void
    connect(sigName: "notify::mnemonics-visible", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mnemonics-visible", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mnemonics-visible", ...args: any[]): void
    connect(sigName: "notify::modal", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modal", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modal", ...args: any[]): void
    connect(sigName: "notify::resizable", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resizable", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resizable", ...args: any[]): void
    connect(sigName: "notify::resize-grip-visible", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-grip-visible", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-grip-visible", ...args: any[]): void
    connect(sigName: "notify::role", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::screen", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::screen", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::screen", ...args: any[]): void
    connect(sigName: "notify::skip-pager-hint", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-pager-hint", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::skip-pager-hint", ...args: any[]): void
    connect(sigName: "notify::skip-taskbar-hint", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-taskbar-hint", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::skip-taskbar-hint", ...args: any[]): void
    connect(sigName: "notify::startup-id", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::startup-id", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::startup-id", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::transient-for", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transient-for", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transient-for", ...args: any[]): void
    connect(sigName: "notify::type", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::type-hint", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-hint", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type-hint", ...args: any[]): void
    connect(sigName: "notify::urgency-hint", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urgency-hint", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::urgency-hint", ...args: any[]): void
    connect(sigName: "notify::window-position", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-position", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window-position", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: SampleWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SampleWindow extends Gtk.Window {

    // Own properties of ColordGtk-1.0.ColordGtk.SampleWindow

    static name: string
    static $gtype: GObject.GType<SampleWindow>

    // Constructors of ColordGtk-1.0.ColordGtk.SampleWindow

    constructor(config?: SampleWindow.ConstructorProperties) 
    constructor() 
    static new(): SampleWindow

    // Overloads of new

    /**
     * Creates a new #GtkWindow, which is a toplevel window that can
     * contain other widgets. Nearly always, the type of the window should
     * be #GTK_WINDOW_TOPLEVEL. If you’re implementing something like a
     * popup menu from scratch (which is a bad idea, just use #GtkMenu),
     * you might use #GTK_WINDOW_POPUP. #GTK_WINDOW_POPUP is not for
     * dialogs, though in some other toolkits dialogs are called “popups”.
     * In GTK+, #GTK_WINDOW_POPUP means a pop-up menu or pop-up tooltip.
     * On X11, popup windows are not controlled by the
     * [window manager][gtk-X11-arch].
     * 
     * If you simply want an undecorated window (no window borders), use
     * gtk_window_set_decorated(), don’t use #GTK_WINDOW_POPUP.
     * 
     * All top-level windows created by gtk_window_new() are stored in
     * an internal top-level window list.  This list can be obtained from
     * gtk_window_list_toplevels().  Due to Gtk+ keeping a reference to
     * the window internally, gtk_window_new() does not return a reference
     * to the caller.
     * 
     * To delete a #GtkWindow, call gtk_widget_destroy().
     * @constructor 
     * @param type type of window
     * @returns a new #GtkWindow.
     */
    static new(type: Gtk.WindowType): Gtk.Window
    _init(config?: SampleWindow.ConstructorProperties): void
}

export module Window {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    export interface ChangedSignalCallback {
        ($obj: Window, object: Colord.Profile): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Window {

    // Own properties of ColordGtk-1.0.ColordGtk.Window

    readonly Profile: string | null

    // Own fields of ColordGtk-1.0.ColordGtk.Window

    parent: GObject.Object
    priv: WindowPrivate

    // Owm methods of ColordGtk-1.0.ColordGtk.Window

    /**
     * Gets the color profile to use for this widget.
     * @returns a #CdProfile
     */
    get_last_profile(): Colord.Profile
    /**
     * Gets the screen profile that should be used for the widget,
     * which corresponds to the screen output the widget most covers.
     * 
     * This method should be called when the widget has mapped, i.e.
     * g_signal_connect (dialog, "map", G_CALLBACK (map_cb), priv);
     * 
     * Note, the returned profile from cd_client_get_profile_for_widget_finish()
     * has already been connected to, as is ready to use.
     * @param widget a #GtkWidget
     * @param cancellable a #GCancellable or %NULL
     * @param callback the function to run on completion
     */
    get_profile(widget: Gtk.Widget, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     * @returns a #CdProfile or %NULL
     */
    get_profile_finish(res: Gio.AsyncResult): Colord.Profile
    /**
     * Gets the screen profile that should be used for the widget,
     * which corresponds to the screen output the widget most covers.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param widget a #GtkWidget
     * @param cancellable a #GCancellable or %NULL
     * @returns a #CdProfile or %NULL
     */
    get_profile_sync(widget: Gtk.Widget, cancellable: Gio.Cancellable | null): Colord.Profile

    // Own virtual methods of ColordGtk-1.0.ColordGtk.Window

    vfunc_changed(profile: Colord.Profile): void

    // Own signals of ColordGtk-1.0.ColordGtk.Window

    connect(sigName: "changed", callback: Window.ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: Window.ChangedSignalCallback): number
    emit(sigName: "changed", object: Colord.Profile, ...args: any[]): void

    // Class property signals of ColordGtk-1.0.ColordGtk.Window

    connect(sigName: "notify::Profile", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::Profile", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::Profile", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Window extends GObject.Object {

    // Own properties of ColordGtk-1.0.ColordGtk.Window

    static name: string
    static $gtype: GObject.GType<Window>

    // Constructors of ColordGtk-1.0.ColordGtk.Window

    constructor(config?: Window.ConstructorProperties) 
    /**
     * Creates a new #CdWindow object.
     * @constructor 
     * @returns a new CdWindow object.
     */
    constructor() 
    /**
     * Creates a new #CdWindow object.
     * @constructor 
     * @returns a new CdWindow object.
     */
    static new(): Window
    _init(config?: Window.ConstructorProperties): void
    static error_quark(): GLib.Quark
}

export interface SampleWidgetClass {

    // Own fields of ColordGtk-1.0.ColordGtk.SampleWidgetClass

    parent_class: Gtk.DrawingAreaClass
}

export abstract class SampleWidgetClass {

    // Own properties of ColordGtk-1.0.ColordGtk.SampleWidgetClass

    static name: string
}

export interface SampleWidgetPrivate {
}

export class SampleWidgetPrivate {

    // Own properties of ColordGtk-1.0.ColordGtk.SampleWidgetPrivate

    static name: string
}

export interface SampleWindowClass {

    // Own fields of ColordGtk-1.0.ColordGtk.SampleWindowClass

    parent_class: Gtk.WindowClass
}

export abstract class SampleWindowClass {

    // Own properties of ColordGtk-1.0.ColordGtk.SampleWindowClass

    static name: string
}

export interface SampleWindowPrivate {
}

/**
 * Private #CdSampleWindow data
 * @record 
 */
export class SampleWindowPrivate {

    // Own properties of ColordGtk-1.0.ColordGtk.SampleWindowPrivate

    static name: string
}

export interface WindowClass {

    // Own fields of ColordGtk-1.0.ColordGtk.WindowClass

    parent_class: GObject.ObjectClass
    changed: (window: Window, profile: Colord.Profile) => void
}

export abstract class WindowClass {

    // Own properties of ColordGtk-1.0.ColordGtk.WindowClass

    static name: string
}

export interface WindowPrivate {
}

/**
 * Private #CdWindow data
 * @record 
 */
export class WindowPrivate {

    // Own properties of ColordGtk-1.0.ColordGtk.WindowPrivate

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
export const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
export const __version__: string
// END