
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */
/**
 * GtkChamplain-0.12
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
import type Clutter from '@girs/clutter-1.0';
import type Json from '@girs/json-1.0';
import type GL from '@girs/gl-1.0';
import type CoglPango from '@girs/coglpango-1.0';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Cogl from '@girs/cogl-1.0';
import type Champlain from '@girs/champlain-0.12';

export module Embed {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Alignment.ConstructorProperties {
    }

}

export interface Embed extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of GtkChamplain-0.12.GtkChamplain.Embed

    /**
     * The #ChamplainView to embed in the Gtk+ widget.
     */
    readonly champlain_view: Champlain.View

    // Own fields of GtkChamplain-0.12.GtkChamplain.Embed

    bin: any
    priv: EmbedPrivate

    // Owm methods of GtkChamplain-0.12.GtkChamplain.Embed

    /**
     * Gets a #ChamplainView from the #GtkChamplainEmbed object.
     * @returns a #ChamplainView ready to be used
     */
    get_view(): Champlain.View

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

    // Class property signals of GtkChamplain-0.12.GtkChamplain.Embed

    connect(sigName: "notify::champlain-view", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::champlain-view", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::champlain-view", ...args: any[]): void
    connect(sigName: "notify::bottom-padding", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bottom-padding", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bottom-padding", ...args: any[]): void
    connect(sigName: "notify::left-padding", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::left-padding", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::left-padding", ...args: any[]): void
    connect(sigName: "notify::right-padding", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::right-padding", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::right-padding", ...args: any[]): void
    connect(sigName: "notify::top-padding", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::top-padding", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::top-padding", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::xscale", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xscale", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xscale", ...args: any[]): void
    connect(sigName: "notify::yalign", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yalign", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::yalign", ...args: any[]): void
    connect(sigName: "notify::yscale", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yscale", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::yscale", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #GtkChamplainEmbed structure contains only private data
 * and should be accessed using the provided API
 * @class 
 */
export class Embed extends Gtk.Alignment {

    // Own properties of GtkChamplain-0.12.GtkChamplain.Embed

    static name: string
    static $gtype: GObject.GType<Embed>

    // Constructors of GtkChamplain-0.12.GtkChamplain.Embed

    constructor(config?: Embed.ConstructorProperties) 
    /**
     * Creates an instance of #GtkChamplainEmbed.
     * @constructor 
     * @returns a new #GtkChamplainEmbed ready to be used as a #GtkWidget.
     */
    constructor() 
    /**
     * Creates an instance of #GtkChamplainEmbed.
     * @constructor 
     * @returns a new #GtkChamplainEmbed ready to be used as a #GtkWidget.
     */
    static new(): Embed

    // Overloads of new

    /**
     * Creates a new #GtkAlignment.
     * @constructor 
     * @param xalign the horizontal alignment of the child widget, from 0 (left) to 1  (right).
     * @param yalign the vertical alignment of the child widget, from 0 (top) to 1  (bottom).
     * @param xscale the amount that the child widget expands horizontally to fill up  unused space, from 0 to 1.  A value of 0 indicates that the child widget should never expand.  A value of 1 indicates that the child widget will expand to fill all of the  space allocated for the #GtkAlignment.
     * @param yscale the amount that the child widget expands vertically to fill up  unused space, from 0 to 1. The values are similar to `xscale`.
     * @returns the new #GtkAlignment
     */
    static new(xalign: number, yalign: number, xscale: number, yscale: number): Gtk.Alignment
    _init(config?: Embed.ConstructorProperties): void
}

export interface EmbedClass {

    // Own fields of GtkChamplain-0.12.GtkChamplain.EmbedClass

    parent_class: Gtk.AlignmentClass
}

export abstract class EmbedClass {

    // Own properties of GtkChamplain-0.12.GtkChamplain.EmbedClass

    static name: string
}

export interface EmbedPrivate {
}

export class EmbedPrivate {

    // Own properties of GtkChamplain-0.12.GtkChamplain.EmbedPrivate

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