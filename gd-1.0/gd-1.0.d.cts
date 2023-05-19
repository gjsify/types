
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gd-1.0-ambient.d.ts';
import './gd-1.0-import.d.ts';
/**
 * Gd-1.0
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

export enum MainColumns {
    ID,
    URI,
    PRIMARY_TEXT,
    SECONDARY_TEXT,
    ICON,
    MTIME,
    SELECTED,
    PULSE,
    LAST,
}
export enum MainViewType {
    ICON,
    LIST,
}
export enum StackTransitionType {
    NONE,
    CROSSFADE,
    SLIDE_RIGHT,
    SLIDE_LEFT,
}
/**
 * This functions must be called during initialization
 * to make sure the widget types are available to GtkBuilder.
 */
export function ensure_types(): void
export module HeaderButton {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Button.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Gd-1.0.Gd.HeaderButton

        /**
         * The label of the #GdHeaderButton object.
         */
        label?: string | null
        /**
         * The symbolic icon name of the #GdHeaderButton object.
         */
        symbolic_icon_name?: string | null
        /**
         * Whether the label of the #GdHeaderButton object should use markup.
         */
        use_markup?: boolean | null
    }

}

export interface HeaderButton extends Gtk.Button {

    // Own properties of Gd-1.0.Gd.HeaderButton

    /**
     * The label of the #GdHeaderButton object.
     */
    label: string | null
    /**
     * The symbolic icon name of the #GdHeaderButton object.
     */
    symbolic_icon_name: string | null
    /**
     * Whether the label of the #GdHeaderButton object should use markup.
     */
    use_markup: boolean

    // Owm methods of Gd-1.0.Gd.HeaderButton

    get_label(): string | null
    get_symbolic_icon_name(): string | null
    get_use_markup(): boolean
    set_label(label: string | null): void
    set_symbolic_icon_name(symbolic_icon_name: string | null): void
    set_use_markup(use_markup: boolean): void

    // Conflicting methods

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

    // Class property signals of Gd-1.0.Gd.HeaderButton

    connect(sigName: "notify::label", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::symbolic-icon-name", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::symbolic-icon-name", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::symbolic-icon-name", ...args: any[]): void
    connect(sigName: "notify::use-markup", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-markup", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-markup", ...args: any[]): void
    connect(sigName: "notify::always-show-image", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-show-image", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::always-show-image", ...args: any[]): void
    connect(sigName: "notify::image", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::image", ...args: any[]): void
    connect(sigName: "notify::image-position", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-position", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::image-position", ...args: any[]): void
    connect(sigName: "notify::relief", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relief", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::relief", ...args: any[]): void
    connect(sigName: "notify::use-stock", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-stock", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-stock", ...args: any[]): void
    connect(sigName: "notify::use-underline", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-underline", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-underline", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::yalign", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yalign", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::yalign", ...args: any[]): void
    connect(sigName: "notify::action-name", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-name", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::action-name", ...args: any[]): void
    connect(sigName: "notify::action-target", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-target", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::action-target", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::related-action", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::related-action", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::related-action", ...args: any[]): void
    connect(sigName: "notify::use-action-appearance", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-action-appearance", callback: (($obj: HeaderButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-action-appearance", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class HeaderButton extends GObject.Object {

    // Own properties of Gd-1.0.Gd.HeaderButton

    static name: string
    static $gtype: GObject.GType<HeaderButton>

    // Constructors of Gd-1.0.Gd.HeaderButton

    constructor(config?: HeaderButton.ConstructorProperties) 
    _init(config?: HeaderButton.ConstructorProperties): void
}

export module MainViewGeneric {

    // Signal callback interfaces

    /**
     * Signal callback interface for `view-selection-changed`
     */
    export interface ViewSelectionChangedSignalCallback {
        ($obj: MainViewGeneric): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Widget.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface MainViewGeneric extends Gtk.Widget {

    // Owm methods of Gd-1.0.Gd.MainViewGeneric

    get_model(): Gtk.TreeModel
    get_path_at_pos(x: number, y: number): Gtk.TreePath
    scroll_to_path(path: Gtk.TreePath): void
    select_all(): void
    set_model(model: Gtk.TreeModel | null): void
    set_rubberband_range(start: Gtk.TreePath, end: Gtk.TreePath): void
    set_selection_mode(selection_mode: boolean): void
    unselect_all(): void

    // Own virtual methods of Gd-1.0.Gd.MainViewGeneric

    vfunc_get_model(): Gtk.TreeModel
    vfunc_get_path_at_pos(x: number, y: number): Gtk.TreePath
    vfunc_scroll_to_path(path: Gtk.TreePath): void
    vfunc_set_model(model: Gtk.TreeModel | null): void
    vfunc_set_selection_mode(selection_mode: boolean): void

    // Own signals of Gd-1.0.Gd.MainViewGeneric

    connect(sigName: "view-selection-changed", callback: MainViewGeneric.ViewSelectionChangedSignalCallback): number
    connect_after(sigName: "view-selection-changed", callback: MainViewGeneric.ViewSelectionChangedSignalCallback): number
    emit(sigName: "view-selection-changed", ...args: any[]): void

    // Class property signals of Gd-1.0.Gd.MainViewGeneric

    connect(sigName: "notify::app-paintable", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: MainViewGeneric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class MainViewGeneric extends GObject.Object {

    // Own properties of Gd-1.0.Gd.MainViewGeneric

    static name: string
    static $gtype: GObject.GType<MainViewGeneric>

    // Constructors of Gd-1.0.Gd.MainViewGeneric

    constructor(config?: MainViewGeneric.ConstructorProperties) 
    _init(config?: MainViewGeneric.ConstructorProperties): void
}

export module HeaderBar {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Container.ConstructorProperties {

        // Own constructor properties of Gd-1.0.Gd.HeaderBar

        custom_title?: Gtk.Widget | null
        hpadding?: number | null
        spacing?: number | null
        subtitle?: string | null
        title?: string | null
        vpadding?: number | null
    }

}

export interface HeaderBar extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Gd-1.0.Gd.HeaderBar

    custom_title: Gtk.Widget
    hpadding: number
    spacing: number
    subtitle: string | null
    title: string | null
    vpadding: number

    // Own fields of Gd-1.0.Gd.HeaderBar

    container: Gtk.Container

    // Owm methods of Gd-1.0.Gd.HeaderBar

    /**
     * Retrieves the custom title widget of the header. See
     * gd_header_bar_set_custom_title().
     * @returns the custom title widget of the header, or %NULL if    none has been set explicitely.
     */
    get_custom_title(): Gtk.Widget
    /**
     * Retrieves the subtitle of the header. See gd_header_bar_set_subtitle().
     * @returns the subtitle of the header, or %NULL if none has    been set explicitely. The returned string is owned by the widget    and must not be modified or freed.
     */
    get_subtitle(): string | null
    /**
     * Retrieves the title of the header. See gd_header_bar_set_title().
     * @returns the title of the header, or %NULL if none has    been set explicitely. The returned string is owned by the widget    and must not be modified or freed.
     */
    get_title(): string | null
    pack_end(child: Gtk.Widget): void
    pack_start(child: Gtk.Widget): void
    /**
     * Sets a custom title for the #GdHeaderBar. The title should help a
     * user identify the current view. This supercedes any title set by
     * gd_header_bar_set_title(). You should set the custom title to %NULL,
     * for the header title label to be visible again.
     * @param title_widget a custom widget to use for a title
     */
    set_custom_title(title_widget: Gtk.Widget | null): void
    /**
     * Sets the subtitle of the #GdHeaderBar. The subtitle should give a user
     * an additional detail to help him identify the current view.
     * @param subtitle a subtitle
     */
    set_subtitle(subtitle: string | null): void
    /**
     * Sets the title of the #GdHeaderBar. The title should help a user
     * identify the current view. A good title should not include the
     * application name.
     * @param title a title
     */
    set_title(title: string | null): void

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

    // Class property signals of Gd-1.0.Gd.HeaderBar

    connect(sigName: "notify::custom-title", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::custom-title", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::custom-title", ...args: any[]): void
    connect(sigName: "notify::hpadding", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hpadding", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hpadding", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::subtitle", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::subtitle", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::vpadding", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vpadding", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vpadding", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: HeaderBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class HeaderBar extends Gtk.Container {

    // Own properties of Gd-1.0.Gd.HeaderBar

    static name: string
    static $gtype: GObject.GType<HeaderBar>

    // Constructors of Gd-1.0.Gd.HeaderBar

    constructor(config?: HeaderBar.ConstructorProperties) 
    constructor() 
    static new(): HeaderBar
    _init(config?: HeaderBar.ConstructorProperties): void
}

export module HeaderMenuButton {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, HeaderButton.ConstructorProperties, Gtk.Actionable.ConstructorProperties, Gtk.Activatable.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.MenuButton.ConstructorProperties {
    }

}

export interface HeaderMenuButton extends Atk.ImplementorIface, HeaderButton, Gtk.Actionable, Gtk.Activatable, Gtk.Buildable {

    // Conflicting properties

    parent: Gtk.ToggleButton & Gtk.Container & Gtk.Container

    // Conflicting methods

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
     * Returns the direction the popup will be pointing at when popped up.
     * @returns a #GtkArrowType value
     */
    get_direction(): Gtk.ArrowType

    // Overloads of get_direction

    /**
     * Gets the reading direction for a particular widget. See
     * gtk_widget_set_direction().
     * @returns the reading direction for the widget.
     */
    get_direction(): Gtk.TextDirection
    /**
     * Gets the reading direction for a particular widget. See
     * gtk_widget_set_direction().
     * @returns the reading direction for the widget.
     */
    get_direction(): Gtk.TextDirection
    /**
     * Sets the direction in which the popup will be popped up, as
     * well as changing the arrow’s direction. The child will not
     * be changed to an arrow if it was customized.
     * 
     * If the does not fit in the available space in the given direction,
     * GTK+ will its best to keep it inside the screen and fully visible.
     * 
     * If you pass %GTK_ARROW_NONE for a `direction,` the popup will behave
     * as if you passed %GTK_ARROW_DOWN (although you won’t see any arrows).
     * @param direction a #GtkArrowType
     */
    set_direction(direction: Gtk.ArrowType): void

    // Overloads of set_direction

    /**
     * Sets the reading direction on a particular widget. This direction
     * controls the primary direction for widgets containing text,
     * and also the direction in which the children of a container are
     * packed. The ability to set the direction is present in order
     * so that correct localization into languages with right-to-left
     * reading directions can be done. Generally, applications will
     * let the default reading direction present, except for containers
     * where the containers are arranged in an order that is explicitly
     * visual rather than logical (such as buttons for text justification).
     * 
     * If the direction is set to %GTK_TEXT_DIR_NONE, then the value
     * set by gtk_widget_set_default_direction() will be used.
     * @param dir the new direction
     */
    set_direction(dir: Gtk.TextDirection): void
    /**
     * Sets the reading direction on a particular widget. This direction
     * controls the primary direction for widgets containing text,
     * and also the direction in which the children of a container are
     * packed. The ability to set the direction is present in order
     * so that correct localization into languages with right-to-left
     * reading directions can be done. Generally, applications will
     * let the default reading direction present, except for containers
     * where the containers are arranged in an order that is explicitly
     * visual rather than logical (such as buttons for text justification).
     * 
     * If the direction is set to %GTK_TEXT_DIR_NONE, then the value
     * set by gtk_widget_set_default_direction() will be used.
     * @param dir the new direction
     */
    set_direction(dir: Gtk.TextDirection): void

    // Class property signals of Gd-1.0.Gd.HeaderMenuButton

    connect(sigName: "notify::align-widget", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::align-widget", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::align-widget", ...args: any[]): void
    connect(sigName: "notify::direction", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::direction", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::direction", ...args: any[]): void
    connect(sigName: "notify::menu-model", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::menu-model", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::menu-model", ...args: any[]): void
    connect(sigName: "notify::popover", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::popover", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::popover", ...args: any[]): void
    connect(sigName: "notify::popup", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::popup", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::popup", ...args: any[]): void
    connect(sigName: "notify::use-popover", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-popover", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-popover", ...args: any[]): void
    connect(sigName: "notify::active", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::draw-indicator", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::draw-indicator", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::draw-indicator", ...args: any[]): void
    connect(sigName: "notify::inconsistent", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inconsistent", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::inconsistent", ...args: any[]): void
    connect(sigName: "notify::always-show-image", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-show-image", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::always-show-image", ...args: any[]): void
    connect(sigName: "notify::image", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::image", ...args: any[]): void
    connect(sigName: "notify::image-position", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-position", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::image-position", ...args: any[]): void
    connect(sigName: "notify::label", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::relief", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relief", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::relief", ...args: any[]): void
    connect(sigName: "notify::use-stock", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-stock", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-stock", ...args: any[]): void
    connect(sigName: "notify::use-underline", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-underline", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-underline", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::yalign", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yalign", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::yalign", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::symbolic-icon-name", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::symbolic-icon-name", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::symbolic-icon-name", ...args: any[]): void
    connect(sigName: "notify::use-markup", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-markup", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-markup", ...args: any[]): void
    connect(sigName: "notify::action-name", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-name", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::action-name", ...args: any[]): void
    connect(sigName: "notify::action-target", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-target", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::action-target", ...args: any[]): void
    connect(sigName: "notify::related-action", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::related-action", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::related-action", ...args: any[]): void
    connect(sigName: "notify::use-action-appearance", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-action-appearance", callback: (($obj: HeaderMenuButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-action-appearance", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class HeaderMenuButton extends Gtk.MenuButton {

    // Own properties of Gd-1.0.Gd.HeaderMenuButton

    static name: string
    static $gtype: GObject.GType<HeaderMenuButton>

    // Constructors of Gd-1.0.Gd.HeaderMenuButton

    constructor(config?: HeaderMenuButton.ConstructorProperties) 
    constructor() 
    static new(): HeaderMenuButton
    _init(config?: HeaderMenuButton.ConstructorProperties): void
}

export module HeaderRadioButton {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, HeaderButton.ConstructorProperties, Gtk.Actionable.ConstructorProperties, Gtk.Activatable.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.RadioButton.ConstructorProperties {
    }

}

export interface HeaderRadioButton extends Atk.ImplementorIface, HeaderButton, Gtk.Actionable, Gtk.Activatable, Gtk.Buildable {

    // Conflicting methods

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

    // Class property signals of Gd-1.0.Gd.HeaderRadioButton

    connect(sigName: "notify::group", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::group", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::group", ...args: any[]): void
    connect(sigName: "notify::active", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::draw-indicator", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::draw-indicator", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::draw-indicator", ...args: any[]): void
    connect(sigName: "notify::inconsistent", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inconsistent", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::inconsistent", ...args: any[]): void
    connect(sigName: "notify::always-show-image", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-show-image", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::always-show-image", ...args: any[]): void
    connect(sigName: "notify::image", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::image", ...args: any[]): void
    connect(sigName: "notify::image-position", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-position", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::image-position", ...args: any[]): void
    connect(sigName: "notify::label", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::relief", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relief", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::relief", ...args: any[]): void
    connect(sigName: "notify::use-stock", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-stock", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-stock", ...args: any[]): void
    connect(sigName: "notify::use-underline", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-underline", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-underline", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::yalign", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yalign", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::yalign", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::symbolic-icon-name", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::symbolic-icon-name", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::symbolic-icon-name", ...args: any[]): void
    connect(sigName: "notify::use-markup", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-markup", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-markup", ...args: any[]): void
    connect(sigName: "notify::action-name", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-name", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::action-name", ...args: any[]): void
    connect(sigName: "notify::action-target", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-target", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::action-target", ...args: any[]): void
    connect(sigName: "notify::related-action", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::related-action", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::related-action", ...args: any[]): void
    connect(sigName: "notify::use-action-appearance", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-action-appearance", callback: (($obj: HeaderRadioButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-action-appearance", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class HeaderRadioButton extends Gtk.RadioButton {

    // Own properties of Gd-1.0.Gd.HeaderRadioButton

    static name: string
    static $gtype: GObject.GType<HeaderRadioButton>

    // Constructors of Gd-1.0.Gd.HeaderRadioButton

    constructor(config?: HeaderRadioButton.ConstructorProperties) 
    constructor() 
    static new(): HeaderRadioButton

    // Overloads of new

    /**
     * Creates a new #GtkRadioButton. To be of any practical value, a widget should
     * then be packed into the radio button.
     * @constructor 
     * @param group an existing         radio button group, or %NULL if you are creating a new group.
     * @returns a new radio button
     */
    static new(group: Gtk.RadioButton[] | null): Gtk.RadioButton
    /**
     * Creates a new #GtkButton widget. To add a child widget to the button,
     * use gtk_container_add().
     * @constructor 
     * @returns The newly created #GtkButton widget.
     */
    static new(): Gtk.Button
    _init(config?: HeaderRadioButton.ConstructorProperties): void

    // Conflicting static methods

    static new_with_label(...args: any[]): any
    static new_with_mnemonic(...args: any[]): any
}

export module HeaderSimpleButton {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, HeaderButton.ConstructorProperties, Gtk.Actionable.ConstructorProperties, Gtk.Activatable.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Button.ConstructorProperties {
    }

}

export interface HeaderSimpleButton extends Atk.ImplementorIface, HeaderButton, Gtk.Actionable, Gtk.Activatable, Gtk.Buildable {

    // Conflicting methods

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

    // Class property signals of Gd-1.0.Gd.HeaderSimpleButton

    connect(sigName: "notify::always-show-image", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-show-image", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::always-show-image", ...args: any[]): void
    connect(sigName: "notify::image", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::image", ...args: any[]): void
    connect(sigName: "notify::image-position", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-position", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::image-position", ...args: any[]): void
    connect(sigName: "notify::label", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::relief", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relief", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::relief", ...args: any[]): void
    connect(sigName: "notify::use-stock", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-stock", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-stock", ...args: any[]): void
    connect(sigName: "notify::use-underline", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-underline", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-underline", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::yalign", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yalign", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::yalign", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::symbolic-icon-name", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::symbolic-icon-name", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::symbolic-icon-name", ...args: any[]): void
    connect(sigName: "notify::use-markup", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-markup", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-markup", ...args: any[]): void
    connect(sigName: "notify::action-name", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-name", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::action-name", ...args: any[]): void
    connect(sigName: "notify::action-target", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-target", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::action-target", ...args: any[]): void
    connect(sigName: "notify::related-action", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::related-action", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::related-action", ...args: any[]): void
    connect(sigName: "notify::use-action-appearance", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-action-appearance", callback: (($obj: HeaderSimpleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-action-appearance", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class HeaderSimpleButton extends Gtk.Button {

    // Own properties of Gd-1.0.Gd.HeaderSimpleButton

    static name: string
    static $gtype: GObject.GType<HeaderSimpleButton>

    // Constructors of Gd-1.0.Gd.HeaderSimpleButton

    constructor(config?: HeaderSimpleButton.ConstructorProperties) 
    constructor() 
    static new(): HeaderSimpleButton
    _init(config?: HeaderSimpleButton.ConstructorProperties): void
}

export module HeaderToggleButton {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, HeaderButton.ConstructorProperties, Gtk.Actionable.ConstructorProperties, Gtk.Activatable.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ToggleButton.ConstructorProperties {
    }

}

export interface HeaderToggleButton extends Atk.ImplementorIface, HeaderButton, Gtk.Actionable, Gtk.Activatable, Gtk.Buildable {

    // Conflicting methods

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

    // Class property signals of Gd-1.0.Gd.HeaderToggleButton

    connect(sigName: "notify::active", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::draw-indicator", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::draw-indicator", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::draw-indicator", ...args: any[]): void
    connect(sigName: "notify::inconsistent", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inconsistent", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::inconsistent", ...args: any[]): void
    connect(sigName: "notify::always-show-image", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-show-image", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::always-show-image", ...args: any[]): void
    connect(sigName: "notify::image", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::image", ...args: any[]): void
    connect(sigName: "notify::image-position", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-position", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::image-position", ...args: any[]): void
    connect(sigName: "notify::label", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::relief", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relief", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::relief", ...args: any[]): void
    connect(sigName: "notify::use-stock", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-stock", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-stock", ...args: any[]): void
    connect(sigName: "notify::use-underline", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-underline", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-underline", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::yalign", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yalign", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::yalign", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::symbolic-icon-name", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::symbolic-icon-name", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::symbolic-icon-name", ...args: any[]): void
    connect(sigName: "notify::use-markup", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-markup", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-markup", ...args: any[]): void
    connect(sigName: "notify::action-name", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-name", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::action-name", ...args: any[]): void
    connect(sigName: "notify::action-target", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-target", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::action-target", ...args: any[]): void
    connect(sigName: "notify::related-action", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::related-action", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::related-action", ...args: any[]): void
    connect(sigName: "notify::use-action-appearance", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-action-appearance", callback: (($obj: HeaderToggleButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-action-appearance", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class HeaderToggleButton extends Gtk.ToggleButton {

    // Own properties of Gd-1.0.Gd.HeaderToggleButton

    static name: string
    static $gtype: GObject.GType<HeaderToggleButton>

    // Constructors of Gd-1.0.Gd.HeaderToggleButton

    constructor(config?: HeaderToggleButton.ConstructorProperties) 
    constructor() 
    static new(): HeaderToggleButton
    _init(config?: HeaderToggleButton.ConstructorProperties): void
}

export module MainIconView {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, MainViewGeneric.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.CellLayout.ConstructorProperties, Gtk.Scrollable.ConstructorProperties, Gtk.IconView.ConstructorProperties {
    }

}

export interface MainIconView extends Atk.ImplementorIface, MainViewGeneric, Gtk.Buildable, Gtk.CellLayout, Gtk.Scrollable {

    // Own fields of Gd-1.0.Gd.MainIconView

    parent: Gtk.IconView & Gtk.Container & Gtk.Container
    priv: MainIconViewPrivate

    // Conflicting methods

    get_model(): Gtk.TreeModel
    /**
     * Returns the model the #GtkIconView is based on.  Returns %NULL if the
     * model is unset.
     * @returns A #GtkTreeModel, or %NULL if none is     currently being used.
     */
    get_model(): Gtk.TreeModel | null
    get_path_at_pos(x: number, y: number): Gtk.TreePath
    /**
     * Finds the path at the point (`x,` `y)`, relative to bin_window coordinates.
     * See gtk_icon_view_get_item_at_pos(), if you are also interested in
     * the cell at the specified position.
     * See gtk_icon_view_convert_widget_to_bin_window_coords() for converting
     * widget coordinates to bin_window coordinates.
     * @param x The x position to be identified
     * @param y The y position to be identified
     * @returns The #GtkTreePath corresponding to the icon or %NULL if no icon exists at that position.
     */
    get_path_at_pos(x: number, y: number): Gtk.TreePath | null
    scroll_to_path(path: Gtk.TreePath): void
    /**
     * Moves the alignments of `icon_view` to the position specified by `path`.
     * `row_align` determines where the row is placed, and `col_align` determines
     * where `column` is placed.  Both are expected to be between 0.0 and 1.0.
     * 0.0 means left/top alignment, 1.0 means right/bottom alignment, 0.5 means
     * center.
     * 
     * If `use_align` is %FALSE, then the alignment arguments are ignored, and the
     * tree does the minimum amount of work to scroll the item onto the screen.
     * This means that the item will be scrolled to the edge closest to its current
     * position.  If the item is currently visible on the screen, nothing is done.
     * 
     * This function only works if the model is set, and `path` is a valid row on
     * the model. If the model changes before the `icon_view` is realized, the
     * centered path will be modified to reflect this change.
     * @param path The path of the item to move to.
     * @param use_align whether to use alignment arguments, or %FALSE.
     * @param row_align The vertical alignment of the item specified by `path`.
     * @param col_align The horizontal alignment of the item specified by `path`.
     */
    scroll_to_path(path: Gtk.TreePath, use_align: boolean, row_align: number, col_align: number): void
    set_selection_mode(selection_mode: boolean): void
    /**
     * Sets the selection mode of the `icon_view`.
     * @param mode The selection mode
     */
    set_selection_mode(mode: Gtk.SelectionMode): void
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

    // Class property signals of Gd-1.0.Gd.MainIconView

    connect(sigName: "notify::activate-on-single-click", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activate-on-single-click", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::activate-on-single-click", ...args: any[]): void
    connect(sigName: "notify::cell-area", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-area", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-area", ...args: any[]): void
    connect(sigName: "notify::column-spacing", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-spacing", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::column-spacing", ...args: any[]): void
    connect(sigName: "notify::columns", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::columns", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::columns", ...args: any[]): void
    connect(sigName: "notify::item-orientation", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::item-orientation", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::item-orientation", ...args: any[]): void
    connect(sigName: "notify::item-padding", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::item-padding", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::item-padding", ...args: any[]): void
    connect(sigName: "notify::item-width", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::item-width", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::item-width", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::markup-column", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::markup-column", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::markup-column", ...args: any[]): void
    connect(sigName: "notify::model", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::pixbuf-column", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixbuf-column", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pixbuf-column", ...args: any[]): void
    connect(sigName: "notify::reorderable", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reorderable", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reorderable", ...args: any[]): void
    connect(sigName: "notify::row-spacing", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-spacing", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::row-spacing", ...args: any[]): void
    connect(sigName: "notify::selection-mode", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selection-mode", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selection-mode", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::text-column", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-column", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-column", ...args: any[]): void
    connect(sigName: "notify::tooltip-column", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-column", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-column", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::hadjustment", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hadjustment", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hadjustment", ...args: any[]): void
    connect(sigName: "notify::hscroll-policy", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hscroll-policy", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hscroll-policy", ...args: any[]): void
    connect(sigName: "notify::vadjustment", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vadjustment", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vadjustment", ...args: any[]): void
    connect(sigName: "notify::vscroll-policy", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vscroll-policy", callback: (($obj: MainIconView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vscroll-policy", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class MainIconView extends Gtk.IconView {

    // Own properties of Gd-1.0.Gd.MainIconView

    static name: string
    static $gtype: GObject.GType<MainIconView>

    // Constructors of Gd-1.0.Gd.MainIconView

    constructor(config?: MainIconView.ConstructorProperties) 
    constructor() 
    static new(): MainIconView
    _init(config?: MainIconView.ConstructorProperties): void
}

export module MainListView {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, MainViewGeneric.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Scrollable.ConstructorProperties, Gtk.TreeView.ConstructorProperties {
    }

}

export interface MainListView extends Atk.ImplementorIface, MainViewGeneric, Gtk.Buildable, Gtk.Scrollable {

    // Own fields of Gd-1.0.Gd.MainListView

    parent: Gtk.TreeView & Gtk.Container & Gtk.Container
    priv: MainListViewPrivate

    // Owm methods of Gd-1.0.Gd.MainListView

    add_renderer(renderer: Gtk.CellRenderer, func: Gtk.TreeCellDataFunc): void

    // Conflicting methods

    get_model(): Gtk.TreeModel
    /**
     * Returns the model the #GtkTreeView is based on.  Returns %NULL if the
     * model is unset.
     * @returns A #GtkTreeModel, or %NULL if none is currently being used.
     */
    get_model(): Gtk.TreeModel | null
    get_path_at_pos(x: number, y: number): Gtk.TreePath
    /**
     * Finds the path at the point (`x,` `y)`, relative to bin_window coordinates
     * (please see gtk_tree_view_get_bin_window()).
     * That is, `x` and `y` are relative to an events coordinates. `x` and `y` must
     * come from an event on the `tree_view` only where `event->window ==
     * gtk_tree_view_get_bin_window ()`. It is primarily for
     * things like popup menus. If `path` is non-%NULL, then it will be filled
     * with the #GtkTreePath at that point.  This path should be freed with
     * gtk_tree_path_free().  If `column` is non-%NULL, then it will be filled
     * with the column at that point.  `cell_x` and `cell_y` return the coordinates
     * relative to the cell background (i.e. the `background_area` passed to
     * gtk_cell_renderer_render()).  This function is only meaningful if
     * `tree_view` is realized.  Therefore this function will always return %FALSE
     * if `tree_view` is not realized or does not have a model.
     * 
     * For converting widget coordinates (eg. the ones you get from
     * GtkWidget::query-tooltip), please see
     * gtk_tree_view_convert_widget_to_bin_window_coords().
     * @param x The x position to be identified (relative to bin_window).
     * @param y The y position to be identified (relative to bin_window).
     * @returns %TRUE if a row exists at that coordinate.
     */
    get_path_at_pos(x: number, y: number): [ /* returnType */ boolean, /* path */ Gtk.TreePath | null, /* column */ Gtk.TreeViewColumn | null, /* cell_x */ number, /* cell_y */ number ]
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

    // Class property signals of Gd-1.0.Gd.MainListView

    connect(sigName: "notify::activate-on-single-click", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activate-on-single-click", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::activate-on-single-click", ...args: any[]): void
    connect(sigName: "notify::enable-grid-lines", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-grid-lines", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-grid-lines", ...args: any[]): void
    connect(sigName: "notify::enable-search", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-search", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-search", ...args: any[]): void
    connect(sigName: "notify::enable-tree-lines", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-tree-lines", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-tree-lines", ...args: any[]): void
    connect(sigName: "notify::expander-column", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expander-column", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expander-column", ...args: any[]): void
    connect(sigName: "notify::fixed-height-mode", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-height-mode", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-height-mode", ...args: any[]): void
    connect(sigName: "notify::headers-clickable", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::headers-clickable", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::headers-clickable", ...args: any[]): void
    connect(sigName: "notify::headers-visible", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::headers-visible", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::headers-visible", ...args: any[]): void
    connect(sigName: "notify::hover-expand", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hover-expand", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hover-expand", ...args: any[]): void
    connect(sigName: "notify::hover-selection", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hover-selection", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hover-selection", ...args: any[]): void
    connect(sigName: "notify::level-indentation", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::level-indentation", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::level-indentation", ...args: any[]): void
    connect(sigName: "notify::model", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::reorderable", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reorderable", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reorderable", ...args: any[]): void
    connect(sigName: "notify::rubber-banding", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rubber-banding", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rubber-banding", ...args: any[]): void
    connect(sigName: "notify::rules-hint", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rules-hint", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rules-hint", ...args: any[]): void
    connect(sigName: "notify::search-column", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-column", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::search-column", ...args: any[]): void
    connect(sigName: "notify::show-expanders", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-expanders", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-expanders", ...args: any[]): void
    connect(sigName: "notify::tooltip-column", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-column", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-column", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::hadjustment", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hadjustment", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hadjustment", ...args: any[]): void
    connect(sigName: "notify::hscroll-policy", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hscroll-policy", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hscroll-policy", ...args: any[]): void
    connect(sigName: "notify::vadjustment", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vadjustment", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vadjustment", ...args: any[]): void
    connect(sigName: "notify::vscroll-policy", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vscroll-policy", callback: (($obj: MainListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vscroll-policy", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class MainListView extends Gtk.TreeView {

    // Own properties of Gd-1.0.Gd.MainListView

    static name: string
    static $gtype: GObject.GType<MainListView>

    // Constructors of Gd-1.0.Gd.MainListView

    constructor(config?: MainListView.ConstructorProperties) 
    constructor() 
    static new(): MainListView
    _init(config?: MainListView.ConstructorProperties): void
}

export module MainToolbar {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.ToolShell.ConstructorProperties, Gtk.Toolbar.ConstructorProperties {

        // Own constructor properties of Gd-1.0.Gd.MainToolbar

        show_modes?: boolean | null
    }

}

export interface MainToolbar extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable, Gtk.ToolShell {

    // Own properties of Gd-1.0.Gd.MainToolbar

    show_modes: boolean

    // Own fields of Gd-1.0.Gd.MainToolbar

    parent: Gtk.Toolbar & Gtk.Container
    priv: any

    // Owm methods of Gd-1.0.Gd.MainToolbar

    add_button(icon_name: string | null, label: string | null, pack_start: boolean): Gtk.Widget
    add_menu(icon_name: string | null, label: string | null, pack_start: boolean): Gtk.Widget
    add_mode(label: string | null): Gtk.Widget
    add_toggle(icon_name: string | null, label: string | null, pack_start: boolean): Gtk.Widget
    add_widget(widget: Gtk.Widget, pack_start: boolean): void
    clear(): void
    get_show_modes(): boolean
    set_labels(primary: string | null, detail: string | null): void
    set_labels_menu(menu: Gio.MenuModel | null): void
    set_show_modes(show_modes: boolean): void

    // Conflicting methods

    /**
     * Retrieves the icon size for the tool shell. Tool items must not call this
     * function directly, but rely on gtk_tool_item_get_icon_size() instead.
     * @returns the current size (#GtkIconSize) for icons of @shell
     */
    get_icon_size(): number
    /**
     * Retrieves the icon size for the toolbar. See gtk_toolbar_set_icon_size().
     * @returns the current icon size for the icons on the toolbar.
     */
    get_icon_size(): Gtk.IconSize

    // Overloads of get_icon_size

    /**
     * Retrieves the icon size for the tool shell. Tool items must not call this
     * function directly, but rely on gtk_tool_item_get_icon_size() instead.
     * @returns the current size (#GtkIconSize) for icons of @shell
     */
    get_icon_size(): number
    /**
     * Retrieves whether the tool shell has text, icons, or both. Tool items must
     * not call this function directly, but rely on gtk_tool_item_get_toolbar_style()
     * instead.
     * @returns the current style of @shell
     */
    get_style(): Gtk.ToolbarStyle

    // Overloads of get_style

    /**
     * Simply an accessor function that returns `widget->`style.
     * @returns the widget’s #GtkStyle
     */
    get_style(): Gtk.Style
    /**
     * Retrieves whether the toolbar has text, icons, or both . See
     * gtk_toolbar_set_style().
     * @returns the current style of @toolbar
     */
    get_style(): Gtk.ToolbarStyle

    // Overloads of get_style

    /**
     * Retrieves whether the tool shell has text, icons, or both. Tool items must
     * not call this function directly, but rely on gtk_tool_item_get_toolbar_style()
     * instead.
     * @returns the current style of @shell
     */
    get_style(): Gtk.ToolbarStyle
    /**
     * Simply an accessor function that returns `widget->`style.
     * @returns the widget’s #GtkStyle
     */
    get_style(): Gtk.Style
    /**
     * Simply an accessor function that returns `widget->`style.
     * @returns the widget’s #GtkStyle
     */
    get_style(): Gtk.Style
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
     * Alters the view of `toolbar` to display either icons only, text only, or both.
     * @param style the new style for `toolbar`.
     */
    set_style(style: Gtk.ToolbarStyle): void

    // Overloads of set_style

    /**
     * Used to set the #GtkStyle for a widget (`widget->`style). Since
     * GTK 3, this function does nothing, the passed in style is ignored.
     * @param style a #GtkStyle, or %NULL to remove the effect     of a previous call to gtk_widget_set_style() and go back to     the default style
     */
    set_style(style: Gtk.Style | null): void
    /**
     * Used to set the #GtkStyle for a widget (`widget->`style). Since
     * GTK 3, this function does nothing, the passed in style is ignored.
     * @param style a #GtkStyle, or %NULL to remove the effect     of a previous call to gtk_widget_set_style() and go back to     the default style
     */
    set_style(style: Gtk.Style | null): void

    // Class property signals of Gd-1.0.Gd.MainToolbar

    connect(sigName: "notify::show-modes", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-modes", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-modes", ...args: any[]): void
    connect(sigName: "notify::icon-size", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-size", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-size", ...args: any[]): void
    connect(sigName: "notify::icon-size-set", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-size-set", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-size-set", ...args: any[]): void
    connect(sigName: "notify::show-arrow", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-arrow", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-arrow", ...args: any[]): void
    connect(sigName: "notify::toolbar-style", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::toolbar-style", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::toolbar-style", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: MainToolbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class MainToolbar extends Gtk.Toolbar {

    // Own properties of Gd-1.0.Gd.MainToolbar

    static name: string
    static $gtype: GObject.GType<MainToolbar>

    // Constructors of Gd-1.0.Gd.MainToolbar

    constructor(config?: MainToolbar.ConstructorProperties) 
    constructor() 
    static new(): MainToolbar
    _init(config?: MainToolbar.ConstructorProperties): void
}

export module MainView {

    // Signal callback interfaces

    /**
     * Signal callback interface for `item-activated`
     */
    export interface ItemActivatedSignalCallback {
        ($obj: MainView, object: string | null, p0: Gtk.TreePath): void
    }

    /**
     * Signal callback interface for `selection-mode-request`
     */
    export interface SelectionModeRequestSignalCallback {
        ($obj: MainView): void
    }

    /**
     * Signal callback interface for `view-selection-changed`
     */
    export interface ViewSelectionChangedSignalCallback {
        ($obj: MainView): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ScrolledWindow.ConstructorProperties {

        // Own constructor properties of Gd-1.0.Gd.MainView

        model?: Gtk.TreeModel | null
        selection_mode?: boolean | null
        view_type?: number | null
    }

}

export interface MainView extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Gd-1.0.Gd.MainView

    model: Gtk.TreeModel
    selection_mode: boolean
    view_type: number

    // Conflicting properties

    container: any

    // Own fields of Gd-1.0.Gd.MainView

    parent: Gtk.ScrolledWindow & Gtk.Container
    priv: any

    // Owm methods of Gd-1.0.Gd.MainView

    get_generic_view(): Gtk.Widget
    get_model(): Gtk.TreeModel
    get_selection(): Gtk.TreePath[]
    get_selection_mode(): boolean
    get_view_type(): MainViewType
    select_all(): void
    set_model(model: Gtk.TreeModel | null): void
    set_selection_mode(selection_mode: boolean): void
    set_view_type(type: MainViewType): void
    unselect_all(): void

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

    // Own signals of Gd-1.0.Gd.MainView

    connect(sigName: "item-activated", callback: MainView.ItemActivatedSignalCallback): number
    connect_after(sigName: "item-activated", callback: MainView.ItemActivatedSignalCallback): number
    emit(sigName: "item-activated", object: string | null, p0: Gtk.TreePath, ...args: any[]): void
    connect(sigName: "selection-mode-request", callback: MainView.SelectionModeRequestSignalCallback): number
    connect_after(sigName: "selection-mode-request", callback: MainView.SelectionModeRequestSignalCallback): number
    emit(sigName: "selection-mode-request", ...args: any[]): void
    connect(sigName: "view-selection-changed", callback: MainView.ViewSelectionChangedSignalCallback): number
    connect_after(sigName: "view-selection-changed", callback: MainView.ViewSelectionChangedSignalCallback): number
    emit(sigName: "view-selection-changed", ...args: any[]): void

    // Class property signals of Gd-1.0.Gd.MainView

    connect(sigName: "notify::model", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::selection-mode", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selection-mode", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selection-mode", ...args: any[]): void
    connect(sigName: "notify::view-type", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::view-type", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::view-type", ...args: any[]): void
    connect(sigName: "notify::hadjustment", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hadjustment", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hadjustment", ...args: any[]): void
    connect(sigName: "notify::hscrollbar-policy", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hscrollbar-policy", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hscrollbar-policy", ...args: any[]): void
    connect(sigName: "notify::kinetic-scrolling", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::kinetic-scrolling", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::kinetic-scrolling", ...args: any[]): void
    connect(sigName: "notify::max-content-height", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-content-height", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-content-height", ...args: any[]): void
    connect(sigName: "notify::max-content-width", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-content-width", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-content-width", ...args: any[]): void
    connect(sigName: "notify::min-content-height", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-content-height", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-content-height", ...args: any[]): void
    connect(sigName: "notify::min-content-width", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-content-width", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-content-width", ...args: any[]): void
    connect(sigName: "notify::overlay-scrolling", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overlay-scrolling", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overlay-scrolling", ...args: any[]): void
    connect(sigName: "notify::propagate-natural-height", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::propagate-natural-height", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::propagate-natural-height", ...args: any[]): void
    connect(sigName: "notify::propagate-natural-width", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::propagate-natural-width", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::propagate-natural-width", ...args: any[]): void
    connect(sigName: "notify::shadow-type", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shadow-type", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::shadow-type", ...args: any[]): void
    connect(sigName: "notify::vadjustment", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vadjustment", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vadjustment", ...args: any[]): void
    connect(sigName: "notify::vscrollbar-policy", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vscrollbar-policy", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vscrollbar-policy", ...args: any[]): void
    connect(sigName: "notify::window-placement", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-placement", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window-placement", ...args: any[]): void
    connect(sigName: "notify::window-placement-set", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-placement-set", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window-placement-set", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: MainView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class MainView extends Gtk.ScrolledWindow {

    // Own properties of Gd-1.0.Gd.MainView

    static name: string
    static $gtype: GObject.GType<MainView>

    // Constructors of Gd-1.0.Gd.MainView

    constructor(config?: MainView.ConstructorProperties) 
    constructor(type: MainViewType) 
    static new(type: MainViewType): MainView

    // Overloads of new

    /**
     * Creates a new scrolled window.
     * 
     * The two arguments are the scrolled window’s adjustments; these will be
     * shared with the scrollbars and the child widget to keep the bars in sync
     * with the child. Usually you want to pass %NULL for the adjustments, which
     * will cause the scrolled window to create them for you.
     * @constructor 
     * @param hadjustment horizontal adjustment
     * @param vadjustment vertical adjustment
     * @returns a new scrolled window
     */
    static new(hadjustment: Gtk.Adjustment | null, vadjustment: Gtk.Adjustment | null): Gtk.ScrolledWindow
    _init(config?: MainView.ConstructorProperties): void
}

export module Revealer {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Bin.ConstructorProperties {

        // Own constructor properties of Gd-1.0.Gd.Revealer

        orientation?: Gtk.Orientation | null
        reveal_child?: boolean | null
        transition_duration?: number | null
    }

}

export interface Revealer extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Gd-1.0.Gd.Revealer

    readonly child_revealed: boolean
    orientation: Gtk.Orientation
    reveal_child: boolean
    transition_duration: number

    // Own fields of Gd-1.0.Gd.Revealer

    parent_instance: Gtk.Bin & GObject.InitiallyUnowned
    priv: RevealerPrivate

    // Owm methods of Gd-1.0.Gd.Revealer

    get_child_revealed(): boolean
    get_orientation(): Gtk.Orientation
    get_reveal_child(): boolean
    get_transition_duration(): number
    set_orientation(value: Gtk.Orientation): void
    set_reveal_child(setting: boolean): void
    set_transition_duration(duration_msec: number): void

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

    // Class property signals of Gd-1.0.Gd.Revealer

    connect(sigName: "notify::child-revealed", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-revealed", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-revealed", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: "notify::reveal-child", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reveal-child", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reveal-child", ...args: any[]): void
    connect(sigName: "notify::transition-duration", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transition-duration", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transition-duration", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Revealer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Revealer extends Gtk.Bin {

    // Own properties of Gd-1.0.Gd.Revealer

    static name: string
    static $gtype: GObject.GType<Revealer>

    // Constructors of Gd-1.0.Gd.Revealer

    constructor(config?: Revealer.ConstructorProperties) 
    constructor() 
    static new(): Revealer
    _init(config?: Revealer.ConstructorProperties): void
}

export module Stack {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Container.ConstructorProperties {

        // Own constructor properties of Gd-1.0.Gd.Stack

        homogeneous?: boolean | null
        transition_duration?: number | null
        transition_type?: number | null
        visible_child?: Gtk.Widget | null
        visible_child_name?: string | null
    }

}

export interface Stack extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Gd-1.0.Gd.Stack

    homogeneous: boolean
    transition_duration: number
    transition_type: number
    visible_child: Gtk.Widget
    visible_child_name: string | null

    // Own fields of Gd-1.0.Gd.Stack

    parent_instance: Gtk.Container & GObject.InitiallyUnowned
    priv: StackPrivate

    // Owm methods of Gd-1.0.Gd.Stack

    add_named(child: Gtk.Widget, name: string | null): void
    add_titled(child: Gtk.Widget, name: string | null, title: string | null): void
    get_homogeneous(): boolean
    get_transition_duration(): number
    get_transition_type(): StackTransitionType
    /**
     * Gets the currently visible child of the #GdStack, or %NULL if the
     * there are no visible children. The returned widget does not have a reference
     * added, so you do not need to unref it.
     * @returns pointer to child of the #GdStack
     */
    get_visible_child(): Gtk.Widget
    get_visible_child_name(): string | null
    set_homogeneous(homogeneous: boolean): void
    set_transition_duration(transition_duration: number): void
    set_transition_type(type: StackTransitionType): void
    set_visible_child(child: Gtk.Widget): void
    set_visible_child_name(name: string | null): void

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

    // Class property signals of Gd-1.0.Gd.Stack

    connect(sigName: "notify::homogeneous", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::transition-duration", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transition-duration", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transition-duration", ...args: any[]): void
    connect(sigName: "notify::transition-type", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transition-type", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transition-type", ...args: any[]): void
    connect(sigName: "notify::visible-child", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible-child", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible-child", ...args: any[]): void
    connect(sigName: "notify::visible-child-name", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible-child-name", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible-child-name", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Stack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Stack extends Gtk.Container {

    // Own properties of Gd-1.0.Gd.Stack

    static name: string
    static $gtype: GObject.GType<Stack>

    // Constructors of Gd-1.0.Gd.Stack

    constructor(config?: Stack.ConstructorProperties) 
    constructor() 
    static new(): Stack
    _init(config?: Stack.ConstructorProperties): void
}

export module StackSwitcher {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Box.ConstructorProperties {

        // Own constructor properties of Gd-1.0.Gd.StackSwitcher

        stack?: Stack | null
    }

}

export interface StackSwitcher extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own properties of Gd-1.0.Gd.StackSwitcher

    stack: Stack

    // Own fields of Gd-1.0.Gd.StackSwitcher

    widget: any

    // Owm methods of Gd-1.0.Gd.StackSwitcher

    /**
     * Retrieves the stack. See
     * gd_stack_switcher_set_stack().
     * @returns the stack, or %NULL if    none has been set explicitly.
     */
    get_stack(): Stack
    /**
     * Sets the stack to control.
     * @param stack a #GdStack
     */
    set_stack(stack: Stack | null): void

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

    // Class property signals of Gd-1.0.Gd.StackSwitcher

    connect(sigName: "notify::stack", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stack", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stack", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: StackSwitcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class StackSwitcher extends Gtk.Box {

    // Own properties of Gd-1.0.Gd.StackSwitcher

    static name: string
    static $gtype: GObject.GType<StackSwitcher>

    // Constructors of Gd-1.0.Gd.StackSwitcher

    constructor(config?: StackSwitcher.ConstructorProperties) 
    constructor() 
    static new(): StackSwitcher

    // Overloads of new

    /**
     * Creates a new #GtkBox.
     * @constructor 
     * @param orientation the box’s orientation.
     * @param spacing the number of pixels to place by default between children.
     * @returns a new #GtkBox.
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    _init(config?: StackSwitcher.ConstructorProperties): void
}

export module StyledTextRenderer {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.CellRendererText.ConstructorProperties {
    }

}

export interface StyledTextRenderer {

    // Own fields of Gd-1.0.Gd.StyledTextRenderer

    parent: Gtk.CellRendererText & Gtk.CellRenderer
    priv: StyledTextRendererPrivate

    // Owm methods of Gd-1.0.Gd.StyledTextRenderer

    add_class(class_: string | null): void
    remove_class(class_: string | null): void

    // Class property signals of Gd-1.0.Gd.StyledTextRenderer

    connect(sigName: "notify::align-set", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::align-set", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::align-set", ...args: any[]): void
    connect(sigName: "notify::alignment", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alignment", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::alignment", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::background", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background", ...args: any[]): void
    connect(sigName: "notify::background-gdk", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-gdk", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-gdk", ...args: any[]): void
    connect(sigName: "notify::background-rgba", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-rgba", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-rgba", ...args: any[]): void
    connect(sigName: "notify::background-set", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-set", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-set", ...args: any[]): void
    connect(sigName: "notify::editable", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editable", ...args: any[]): void
    connect(sigName: "notify::editable-set", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable-set", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editable-set", ...args: any[]): void
    connect(sigName: "notify::ellipsize", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ellipsize", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ellipsize", ...args: any[]): void
    connect(sigName: "notify::ellipsize-set", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ellipsize-set", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ellipsize-set", ...args: any[]): void
    connect(sigName: "notify::family", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::family", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::family", ...args: any[]): void
    connect(sigName: "notify::family-set", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::family-set", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::family-set", ...args: any[]): void
    connect(sigName: "notify::font", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::font", ...args: any[]): void
    connect(sigName: "notify::font-desc", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::font-desc", ...args: any[]): void
    connect(sigName: "notify::foreground", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::foreground", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::foreground", ...args: any[]): void
    connect(sigName: "notify::foreground-gdk", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::foreground-gdk", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::foreground-gdk", ...args: any[]): void
    connect(sigName: "notify::foreground-rgba", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::foreground-rgba", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::foreground-rgba", ...args: any[]): void
    connect(sigName: "notify::foreground-set", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::foreground-set", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::foreground-set", ...args: any[]): void
    connect(sigName: "notify::language", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::language", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::language", ...args: any[]): void
    connect(sigName: "notify::language-set", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::language-set", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::language-set", ...args: any[]): void
    connect(sigName: "notify::markup", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::markup", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::markup", ...args: any[]): void
    connect(sigName: "notify::max-width-chars", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-width-chars", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-width-chars", ...args: any[]): void
    connect(sigName: "notify::placeholder-text", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::placeholder-text", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::placeholder-text", ...args: any[]): void
    connect(sigName: "notify::rise", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rise", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rise", ...args: any[]): void
    connect(sigName: "notify::rise-set", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rise-set", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rise-set", ...args: any[]): void
    connect(sigName: "notify::scale", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale", ...args: any[]): void
    connect(sigName: "notify::scale-set", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-set", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-set", ...args: any[]): void
    connect(sigName: "notify::single-paragraph-mode", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::single-paragraph-mode", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::single-paragraph-mode", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::size-points", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size-points", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size-points", ...args: any[]): void
    connect(sigName: "notify::size-set", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size-set", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size-set", ...args: any[]): void
    connect(sigName: "notify::stretch", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stretch", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stretch", ...args: any[]): void
    connect(sigName: "notify::stretch-set", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stretch-set", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stretch-set", ...args: any[]): void
    connect(sigName: "notify::strikethrough", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::strikethrough", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::strikethrough", ...args: any[]): void
    connect(sigName: "notify::strikethrough-set", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::strikethrough-set", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::strikethrough-set", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::style-set", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style-set", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style-set", ...args: any[]): void
    connect(sigName: "notify::text", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: "notify::underline", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::underline", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::underline", ...args: any[]): void
    connect(sigName: "notify::underline-set", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::underline-set", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::underline-set", ...args: any[]): void
    connect(sigName: "notify::variant", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::variant", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::variant", ...args: any[]): void
    connect(sigName: "notify::variant-set", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::variant-set", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::variant-set", ...args: any[]): void
    connect(sigName: "notify::weight", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::weight", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::weight", ...args: any[]): void
    connect(sigName: "notify::weight-set", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::weight-set", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::weight-set", ...args: any[]): void
    connect(sigName: "notify::width-chars", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-chars", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-chars", ...args: any[]): void
    connect(sigName: "notify::wrap-mode", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wrap-mode", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::wrap-mode", ...args: any[]): void
    connect(sigName: "notify::wrap-width", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wrap-width", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::wrap-width", ...args: any[]): void
    connect(sigName: "notify::cell-background", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-background", ...args: any[]): void
    connect(sigName: "notify::cell-background-gdk", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background-gdk", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-background-gdk", ...args: any[]): void
    connect(sigName: "notify::cell-background-rgba", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background-rgba", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-background-rgba", ...args: any[]): void
    connect(sigName: "notify::cell-background-set", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background-set", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-background-set", ...args: any[]): void
    connect(sigName: "notify::editing", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editing", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editing", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::is-expanded", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-expanded", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-expanded", ...args: any[]): void
    connect(sigName: "notify::is-expander", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-expander", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-expander", ...args: any[]): void
    connect(sigName: "notify::mode", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mode", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::xpad", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xpad", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xpad", ...args: any[]): void
    connect(sigName: "notify::yalign", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yalign", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::yalign", ...args: any[]): void
    connect(sigName: "notify::ypad", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ypad", callback: (($obj: StyledTextRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ypad", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class StyledTextRenderer extends Gtk.CellRendererText {

    // Own properties of Gd-1.0.Gd.StyledTextRenderer

    static name: string
    static $gtype: GObject.GType<StyledTextRenderer>

    // Constructors of Gd-1.0.Gd.StyledTextRenderer

    constructor(config?: StyledTextRenderer.ConstructorProperties) 
    constructor() 
    static new(): StyledTextRenderer
    _init(config?: StyledTextRenderer.ConstructorProperties): void
}

export module TaggedEntry {

    // Signal callback interfaces

    /**
     * Signal callback interface for `tag-button-clicked`
     */
    export interface TagButtonClickedSignalCallback {
        ($obj: TaggedEntry, object: TaggedEntryTag): void
    }

    /**
     * Signal callback interface for `tag-clicked`
     */
    export interface TagClickedSignalCallback {
        ($obj: TaggedEntry, object: TaggedEntryTag): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.CellEditable.ConstructorProperties, Gtk.Editable.ConstructorProperties, Gtk.SearchEntry.ConstructorProperties {

        // Own constructor properties of Gd-1.0.Gd.TaggedEntry

        tag_close_visible?: boolean | null
    }

}

export interface TaggedEntry extends Atk.ImplementorIface, Gtk.Buildable, Gtk.CellEditable, Gtk.Editable {

    // Own properties of Gd-1.0.Gd.TaggedEntry

    tag_close_visible: boolean

    // Own fields of Gd-1.0.Gd.TaggedEntry

    parent: Gtk.SearchEntry & Gtk.Entry & Gtk.Container & Gtk.Container
    priv: TaggedEntryPrivate

    // Owm methods of Gd-1.0.Gd.TaggedEntry

    add_tag(tag: TaggedEntryTag): boolean
    get_tag_button_visible(): boolean
    insert_tag(tag: TaggedEntryTag, position: number): boolean
    remove_tag(tag: TaggedEntryTag): boolean
    set_tag_button_visible(visible: boolean): void

    // Own signals of Gd-1.0.Gd.TaggedEntry

    connect(sigName: "tag-button-clicked", callback: TaggedEntry.TagButtonClickedSignalCallback): number
    connect_after(sigName: "tag-button-clicked", callback: TaggedEntry.TagButtonClickedSignalCallback): number
    emit(sigName: "tag-button-clicked", object: TaggedEntryTag, ...args: any[]): void
    connect(sigName: "tag-clicked", callback: TaggedEntry.TagClickedSignalCallback): number
    connect_after(sigName: "tag-clicked", callback: TaggedEntry.TagClickedSignalCallback): number
    emit(sigName: "tag-clicked", object: TaggedEntryTag, ...args: any[]): void

    // Class property signals of Gd-1.0.Gd.TaggedEntry

    connect(sigName: "notify::tag-close-visible", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tag-close-visible", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tag-close-visible", ...args: any[]): void
    connect(sigName: "notify::activates-default", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activates-default", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::activates-default", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::buffer", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::caps-lock-warning", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps-lock-warning", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::caps-lock-warning", ...args: any[]): void
    connect(sigName: "notify::completion", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::completion", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::completion", ...args: any[]): void
    connect(sigName: "notify::cursor-position", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor-position", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor-position", ...args: any[]): void
    connect(sigName: "notify::editable", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editable", ...args: any[]): void
    connect(sigName: "notify::enable-emoji-completion", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-emoji-completion", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-emoji-completion", ...args: any[]): void
    connect(sigName: "notify::has-frame", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-frame", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-frame", ...args: any[]): void
    connect(sigName: "notify::im-module", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-module", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::im-module", ...args: any[]): void
    connect(sigName: "notify::inner-border", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inner-border", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::inner-border", ...args: any[]): void
    connect(sigName: "notify::input-hints", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-hints", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::input-hints", ...args: any[]): void
    connect(sigName: "notify::input-purpose", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-purpose", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::input-purpose", ...args: any[]): void
    connect(sigName: "notify::invisible-char", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::invisible-char", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::invisible-char", ...args: any[]): void
    connect(sigName: "notify::invisible-char-set", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::invisible-char-set", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::invisible-char-set", ...args: any[]): void
    connect(sigName: "notify::max-length", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-length", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-length", ...args: any[]): void
    connect(sigName: "notify::max-width-chars", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-width-chars", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-width-chars", ...args: any[]): void
    connect(sigName: "notify::overwrite-mode", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overwrite-mode", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overwrite-mode", ...args: any[]): void
    connect(sigName: "notify::placeholder-text", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::placeholder-text", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::placeholder-text", ...args: any[]): void
    connect(sigName: "notify::populate-all", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::populate-all", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::populate-all", ...args: any[]): void
    connect(sigName: "notify::primary-icon-activatable", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-activatable", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-activatable", ...args: any[]): void
    connect(sigName: "notify::primary-icon-gicon", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-gicon", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-gicon", ...args: any[]): void
    connect(sigName: "notify::primary-icon-name", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-name", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-name", ...args: any[]): void
    connect(sigName: "notify::primary-icon-pixbuf", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-pixbuf", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-pixbuf", ...args: any[]): void
    connect(sigName: "notify::primary-icon-sensitive", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-sensitive", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-sensitive", ...args: any[]): void
    connect(sigName: "notify::primary-icon-stock", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-stock", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-stock", ...args: any[]): void
    connect(sigName: "notify::primary-icon-storage-type", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-storage-type", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-storage-type", ...args: any[]): void
    connect(sigName: "notify::primary-icon-tooltip-markup", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-tooltip-markup", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::primary-icon-tooltip-text", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-tooltip-text", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-tooltip-text", ...args: any[]): void
    connect(sigName: "notify::progress-fraction", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress-fraction", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::progress-fraction", ...args: any[]): void
    connect(sigName: "notify::progress-pulse-step", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress-pulse-step", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::progress-pulse-step", ...args: any[]): void
    connect(sigName: "notify::scroll-offset", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scroll-offset", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scroll-offset", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-activatable", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-activatable", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-activatable", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-gicon", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-gicon", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-gicon", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-name", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-name", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-name", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-pixbuf", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-pixbuf", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-pixbuf", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-sensitive", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-sensitive", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-sensitive", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-stock", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-stock", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-stock", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-storage-type", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-storage-type", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-storage-type", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-tooltip-markup", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-tooltip-markup", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-tooltip-text", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-tooltip-text", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-tooltip-text", ...args: any[]): void
    connect(sigName: "notify::selection-bound", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selection-bound", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selection-bound", ...args: any[]): void
    connect(sigName: "notify::shadow-type", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shadow-type", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::shadow-type", ...args: any[]): void
    connect(sigName: "notify::show-emoji-icon", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-emoji-icon", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-emoji-icon", ...args: any[]): void
    connect(sigName: "notify::tabs", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tabs", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tabs", ...args: any[]): void
    connect(sigName: "notify::text", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: "notify::text-length", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-length", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-length", ...args: any[]): void
    connect(sigName: "notify::truncate-multiline", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::truncate-multiline", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::truncate-multiline", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::width-chars", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-chars", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-chars", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::editing-canceled", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editing-canceled", callback: (($obj: TaggedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editing-canceled", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class TaggedEntry extends Gtk.SearchEntry {

    // Own properties of Gd-1.0.Gd.TaggedEntry

    static name: string
    static $gtype: GObject.GType<TaggedEntry>

    // Constructors of Gd-1.0.Gd.TaggedEntry

    constructor(config?: TaggedEntry.ConstructorProperties) 
    constructor() 
    static new(): TaggedEntry

    // Overloads of new

    /**
     * Creates a #GtkSearchEntry, with a find icon when the search field is
     * empty, and a clear icon when it isn't.
     * @constructor 
     * @returns a new #GtkSearchEntry
     */
    static new(): Gtk.SearchEntry
    _init(config?: TaggedEntry.ConstructorProperties): void
}

export module TaggedEntryTag {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gd-1.0.Gd.TaggedEntryTag

        has_close_button?: boolean | null
        label?: string | null
        style?: string | null
    }

}

export interface TaggedEntryTag {

    // Own properties of Gd-1.0.Gd.TaggedEntryTag

    has_close_button: boolean
    label: string | null
    style: string | null

    // Own fields of Gd-1.0.Gd.TaggedEntryTag

    parent: GObject.Object
    priv: TaggedEntryTagPrivate

    // Owm methods of Gd-1.0.Gd.TaggedEntryTag

    get_area(rect: cairo.RectangleInt): boolean
    get_has_close_button(): boolean
    get_label(): string | null
    get_style(): string | null
    set_has_close_button(has_close_button: boolean): void
    set_label(label: string | null): void
    set_style(style: string | null): void

    // Class property signals of Gd-1.0.Gd.TaggedEntryTag

    connect(sigName: "notify::has-close-button", callback: (($obj: TaggedEntryTag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-close-button", callback: (($obj: TaggedEntryTag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-close-button", ...args: any[]): void
    connect(sigName: "notify::label", callback: (($obj: TaggedEntryTag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: TaggedEntryTag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: TaggedEntryTag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: TaggedEntryTag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class TaggedEntryTag extends GObject.Object {

    // Own properties of Gd-1.0.Gd.TaggedEntryTag

    static name: string
    static $gtype: GObject.GType<TaggedEntryTag>

    // Constructors of Gd-1.0.Gd.TaggedEntryTag

    constructor(config?: TaggedEntryTag.ConstructorProperties) 
    constructor(label: string | null) 
    static new(label: string | null): TaggedEntryTag
    _init(config?: TaggedEntryTag.ConstructorProperties): void
}

export module TogglePixbufRenderer {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.CellRendererPixbuf.ConstructorProperties {

        // Own constructor properties of Gd-1.0.Gd.TogglePixbufRenderer

        active?: boolean | null
        pulse?: number | null
        toggle_visible?: boolean | null
    }

}

export interface TogglePixbufRenderer {

    // Own properties of Gd-1.0.Gd.TogglePixbufRenderer

    active: boolean
    pulse: number
    toggle_visible: boolean

    // Own fields of Gd-1.0.Gd.TogglePixbufRenderer

    parent: Gtk.CellRendererPixbuf & Gtk.CellRenderer
    priv: TogglePixbufRendererPrivate

    // Class property signals of Gd-1.0.Gd.TogglePixbufRenderer

    connect(sigName: "notify::active", callback: (($obj: TogglePixbufRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: TogglePixbufRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::pulse", callback: (($obj: TogglePixbufRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pulse", callback: (($obj: TogglePixbufRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pulse", ...args: any[]): void
    connect(sigName: "notify::toggle-visible", callback: (($obj: TogglePixbufRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::toggle-visible", callback: (($obj: TogglePixbufRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::toggle-visible", ...args: any[]): void
    connect(sigName: "notify::follow-state", callback: (($obj: TogglePixbufRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::follow-state", callback: (($obj: TogglePixbufRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::follow-state", ...args: any[]): void
    connect(sigName: "notify::gicon", callback: (($obj: TogglePixbufRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gicon", callback: (($obj: TogglePixbufRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gicon", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: TogglePixbufRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: TogglePixbufRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::pixbuf", callback: (($obj: TogglePixbufRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixbuf", callback: (($obj: TogglePixbufRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pixbuf", ...args: any[]): void
    connect(sigName: "notify::pixbuf-expander-closed", callback: (($obj: TogglePixbufRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixbuf-expander-closed", callback: (($obj: TogglePixbufRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pixbuf-expander-closed", ...args: any[]): void
    connect(sigName: "notify::pixbuf-expander-open", callback: (($obj: TogglePixbufRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixbuf-expander-open", callback: (($obj: TogglePixbufRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pixbuf-expander-open", ...args: any[]): void
    connect(sigName: "notify::stock-detail", callback: (($obj: TogglePixbufRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stock-detail", callback: (($obj: TogglePixbufRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stock-detail", ...args: any[]): void
    connect(sigName: "notify::stock-id", callback: (($obj: TogglePixbufRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stock-id", callback: (($obj: TogglePixbufRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stock-id", ...args: any[]): void
    connect(sigName: "notify::stock-size", callback: (($obj: TogglePixbufRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stock-size", callback: (($obj: TogglePixbufRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stock-size", ...args: any[]): void
    connect(sigName: "notify::surface", callback: (($obj: TogglePixbufRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::surface", callback: (($obj: TogglePixbufRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::surface", ...args: any[]): void
    connect(sigName: "notify::cell-background", callback: (($obj: TogglePixbufRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background", callback: (($obj: TogglePixbufRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-background", ...args: any[]): void
    connect(sigName: "notify::cell-background-gdk", callback: (($obj: TogglePixbufRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background-gdk", callback: (($obj: TogglePixbufRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-background-gdk", ...args: any[]): void
    connect(sigName: "notify::cell-background-rgba", callback: (($obj: TogglePixbufRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background-rgba", callback: (($obj: TogglePixbufRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-background-rgba", ...args: any[]): void
    connect(sigName: "notify::cell-background-set", callback: (($obj: TogglePixbufRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background-set", callback: (($obj: TogglePixbufRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-background-set", ...args: any[]): void
    connect(sigName: "notify::editing", callback: (($obj: TogglePixbufRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editing", callback: (($obj: TogglePixbufRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editing", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: TogglePixbufRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: TogglePixbufRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::is-expanded", callback: (($obj: TogglePixbufRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-expanded", callback: (($obj: TogglePixbufRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-expanded", ...args: any[]): void
    connect(sigName: "notify::is-expander", callback: (($obj: TogglePixbufRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-expander", callback: (($obj: TogglePixbufRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-expander", ...args: any[]): void
    connect(sigName: "notify::mode", callback: (($obj: TogglePixbufRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: (($obj: TogglePixbufRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mode", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: TogglePixbufRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: TogglePixbufRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: TogglePixbufRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: TogglePixbufRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: TogglePixbufRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: TogglePixbufRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: (($obj: TogglePixbufRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: TogglePixbufRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::xpad", callback: (($obj: TogglePixbufRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xpad", callback: (($obj: TogglePixbufRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xpad", ...args: any[]): void
    connect(sigName: "notify::yalign", callback: (($obj: TogglePixbufRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yalign", callback: (($obj: TogglePixbufRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::yalign", ...args: any[]): void
    connect(sigName: "notify::ypad", callback: (($obj: TogglePixbufRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ypad", callback: (($obj: TogglePixbufRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ypad", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class TogglePixbufRenderer extends Gtk.CellRendererPixbuf {

    // Own properties of Gd-1.0.Gd.TogglePixbufRenderer

    static name: string
    static $gtype: GObject.GType<TogglePixbufRenderer>

    // Constructors of Gd-1.0.Gd.TogglePixbufRenderer

    constructor(config?: TogglePixbufRenderer.ConstructorProperties) 
    constructor() 
    static new(): TogglePixbufRenderer
    _init(config?: TogglePixbufRenderer.ConstructorProperties): void
}

export module TwoLinesRenderer {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.CellRendererText.ConstructorProperties {

        // Own constructor properties of Gd-1.0.Gd.TwoLinesRenderer

        line_two?: string | null
        text_lines?: number | null
    }

}

export interface TwoLinesRenderer {

    // Own properties of Gd-1.0.Gd.TwoLinesRenderer

    line_two: string | null
    text_lines: number

    // Own fields of Gd-1.0.Gd.TwoLinesRenderer

    parent: Gtk.CellRendererText & Gtk.CellRenderer
    priv: TwoLinesRendererPrivate

    // Class property signals of Gd-1.0.Gd.TwoLinesRenderer

    connect(sigName: "notify::line-two", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-two", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-two", ...args: any[]): void
    connect(sigName: "notify::text-lines", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-lines", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-lines", ...args: any[]): void
    connect(sigName: "notify::align-set", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::align-set", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::align-set", ...args: any[]): void
    connect(sigName: "notify::alignment", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alignment", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::alignment", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::background", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background", ...args: any[]): void
    connect(sigName: "notify::background-gdk", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-gdk", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-gdk", ...args: any[]): void
    connect(sigName: "notify::background-rgba", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-rgba", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-rgba", ...args: any[]): void
    connect(sigName: "notify::background-set", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-set", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-set", ...args: any[]): void
    connect(sigName: "notify::editable", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editable", ...args: any[]): void
    connect(sigName: "notify::editable-set", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable-set", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editable-set", ...args: any[]): void
    connect(sigName: "notify::ellipsize", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ellipsize", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ellipsize", ...args: any[]): void
    connect(sigName: "notify::ellipsize-set", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ellipsize-set", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ellipsize-set", ...args: any[]): void
    connect(sigName: "notify::family", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::family", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::family", ...args: any[]): void
    connect(sigName: "notify::family-set", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::family-set", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::family-set", ...args: any[]): void
    connect(sigName: "notify::font", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::font", ...args: any[]): void
    connect(sigName: "notify::font-desc", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::font-desc", ...args: any[]): void
    connect(sigName: "notify::foreground", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::foreground", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::foreground", ...args: any[]): void
    connect(sigName: "notify::foreground-gdk", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::foreground-gdk", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::foreground-gdk", ...args: any[]): void
    connect(sigName: "notify::foreground-rgba", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::foreground-rgba", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::foreground-rgba", ...args: any[]): void
    connect(sigName: "notify::foreground-set", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::foreground-set", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::foreground-set", ...args: any[]): void
    connect(sigName: "notify::language", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::language", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::language", ...args: any[]): void
    connect(sigName: "notify::language-set", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::language-set", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::language-set", ...args: any[]): void
    connect(sigName: "notify::markup", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::markup", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::markup", ...args: any[]): void
    connect(sigName: "notify::max-width-chars", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-width-chars", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-width-chars", ...args: any[]): void
    connect(sigName: "notify::placeholder-text", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::placeholder-text", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::placeholder-text", ...args: any[]): void
    connect(sigName: "notify::rise", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rise", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rise", ...args: any[]): void
    connect(sigName: "notify::rise-set", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rise-set", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rise-set", ...args: any[]): void
    connect(sigName: "notify::scale", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale", ...args: any[]): void
    connect(sigName: "notify::scale-set", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-set", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-set", ...args: any[]): void
    connect(sigName: "notify::single-paragraph-mode", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::single-paragraph-mode", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::single-paragraph-mode", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::size-points", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size-points", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size-points", ...args: any[]): void
    connect(sigName: "notify::size-set", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size-set", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size-set", ...args: any[]): void
    connect(sigName: "notify::stretch", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stretch", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stretch", ...args: any[]): void
    connect(sigName: "notify::stretch-set", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stretch-set", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stretch-set", ...args: any[]): void
    connect(sigName: "notify::strikethrough", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::strikethrough", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::strikethrough", ...args: any[]): void
    connect(sigName: "notify::strikethrough-set", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::strikethrough-set", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::strikethrough-set", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::style-set", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style-set", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style-set", ...args: any[]): void
    connect(sigName: "notify::text", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: "notify::underline", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::underline", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::underline", ...args: any[]): void
    connect(sigName: "notify::underline-set", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::underline-set", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::underline-set", ...args: any[]): void
    connect(sigName: "notify::variant", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::variant", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::variant", ...args: any[]): void
    connect(sigName: "notify::variant-set", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::variant-set", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::variant-set", ...args: any[]): void
    connect(sigName: "notify::weight", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::weight", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::weight", ...args: any[]): void
    connect(sigName: "notify::weight-set", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::weight-set", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::weight-set", ...args: any[]): void
    connect(sigName: "notify::width-chars", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-chars", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-chars", ...args: any[]): void
    connect(sigName: "notify::wrap-mode", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wrap-mode", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::wrap-mode", ...args: any[]): void
    connect(sigName: "notify::wrap-width", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wrap-width", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::wrap-width", ...args: any[]): void
    connect(sigName: "notify::cell-background", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-background", ...args: any[]): void
    connect(sigName: "notify::cell-background-gdk", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background-gdk", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-background-gdk", ...args: any[]): void
    connect(sigName: "notify::cell-background-rgba", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background-rgba", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-background-rgba", ...args: any[]): void
    connect(sigName: "notify::cell-background-set", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background-set", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-background-set", ...args: any[]): void
    connect(sigName: "notify::editing", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editing", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editing", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::is-expanded", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-expanded", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-expanded", ...args: any[]): void
    connect(sigName: "notify::is-expander", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-expander", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-expander", ...args: any[]): void
    connect(sigName: "notify::mode", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mode", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::xpad", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xpad", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xpad", ...args: any[]): void
    connect(sigName: "notify::yalign", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yalign", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::yalign", ...args: any[]): void
    connect(sigName: "notify::ypad", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ypad", callback: (($obj: TwoLinesRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ypad", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class TwoLinesRenderer extends Gtk.CellRendererText {

    // Own properties of Gd-1.0.Gd.TwoLinesRenderer

    static name: string
    static $gtype: GObject.GType<TwoLinesRenderer>

    // Constructors of Gd-1.0.Gd.TwoLinesRenderer

    constructor(config?: TwoLinesRenderer.ConstructorProperties) 
    constructor() 
    static new(): TwoLinesRenderer
    _init(config?: TwoLinesRenderer.ConstructorProperties): void
}

export interface HeaderBarClass {

    // Own fields of Gd-1.0.Gd.HeaderBarClass

    parent_class: Gtk.ContainerClass
}

export abstract class HeaderBarClass {

    // Own properties of Gd-1.0.Gd.HeaderBarClass

    static name: string
}

export interface HeaderBarPrivate {
}

export class HeaderBarPrivate {

    // Own properties of Gd-1.0.Gd.HeaderBarPrivate

    static name: string
}

export interface MainIconViewClass {

    // Own fields of Gd-1.0.Gd.MainIconViewClass

    parent_class: Gtk.IconViewClass
}

export abstract class MainIconViewClass {

    // Own properties of Gd-1.0.Gd.MainIconViewClass

    static name: string
}

export interface MainIconViewPrivate {
}

export class MainIconViewPrivate {

    // Own properties of Gd-1.0.Gd.MainIconViewPrivate

    static name: string
}

export interface MainListViewClass {

    // Own fields of Gd-1.0.Gd.MainListViewClass

    parent_class: Gtk.TreeViewClass
}

export abstract class MainListViewClass {

    // Own properties of Gd-1.0.Gd.MainListViewClass

    static name: string
}

export interface MainListViewPrivate {
}

export class MainListViewPrivate {

    // Own properties of Gd-1.0.Gd.MainListViewPrivate

    static name: string
}

export interface MainToolbarClass {

    // Own fields of Gd-1.0.Gd.MainToolbarClass

    parent_class: Gtk.ToolbarClass
}

export abstract class MainToolbarClass {

    // Own properties of Gd-1.0.Gd.MainToolbarClass

    static name: string
}

export interface MainToolbarPrivate {
}

export class MainToolbarPrivate {

    // Own properties of Gd-1.0.Gd.MainToolbarPrivate

    static name: string
}

export interface MainViewClass {

    // Own fields of Gd-1.0.Gd.MainViewClass

    parent_class: Gtk.ScrolledWindowClass
}

export abstract class MainViewClass {

    // Own properties of Gd-1.0.Gd.MainViewClass

    static name: string
}

export interface MainViewGenericIface {

    // Own fields of Gd-1.0.Gd.MainViewGenericIface

    base_iface: GObject.TypeInterface
    set_model: (self: MainViewGeneric, model: Gtk.TreeModel | null) => void
    get_model: (self: MainViewGeneric) => Gtk.TreeModel
    get_path_at_pos: (self: MainViewGeneric, x: number, y: number) => Gtk.TreePath
    scroll_to_path: (self: MainViewGeneric, path: Gtk.TreePath) => void
    set_selection_mode: (self: MainViewGeneric, selection_mode: boolean) => void
}

export abstract class MainViewGenericIface {

    // Own properties of Gd-1.0.Gd.MainViewGenericIface

    static name: string
}

export interface MainViewPrivate {
}

export class MainViewPrivate {

    // Own properties of Gd-1.0.Gd.MainViewPrivate

    static name: string
}

export interface RevealerClass {

    // Own fields of Gd-1.0.Gd.RevealerClass

    parent_class: Gtk.BinClass
}

export abstract class RevealerClass {

    // Own properties of Gd-1.0.Gd.RevealerClass

    static name: string
}

export interface RevealerPrivate {
}

export class RevealerPrivate {

    // Own properties of Gd-1.0.Gd.RevealerPrivate

    static name: string
}

export interface StackClass {

    // Own fields of Gd-1.0.Gd.StackClass

    parent_class: Gtk.ContainerClass
}

export abstract class StackClass {

    // Own properties of Gd-1.0.Gd.StackClass

    static name: string
}

export interface StackPrivate {
}

export class StackPrivate {

    // Own properties of Gd-1.0.Gd.StackPrivate

    static name: string
}

export interface StackSwitcherClass {

    // Own fields of Gd-1.0.Gd.StackSwitcherClass

    parent_class: Gtk.BoxClass
}

export abstract class StackSwitcherClass {

    // Own properties of Gd-1.0.Gd.StackSwitcherClass

    static name: string
}

export interface StackSwitcherPrivate {
}

export class StackSwitcherPrivate {

    // Own properties of Gd-1.0.Gd.StackSwitcherPrivate

    static name: string
}

export interface StyledTextRendererClass {

    // Own fields of Gd-1.0.Gd.StyledTextRendererClass

    parent_class: Gtk.CellRendererTextClass
}

export abstract class StyledTextRendererClass {

    // Own properties of Gd-1.0.Gd.StyledTextRendererClass

    static name: string
}

export interface StyledTextRendererPrivate {
}

export class StyledTextRendererPrivate {

    // Own properties of Gd-1.0.Gd.StyledTextRendererPrivate

    static name: string
}

export interface TaggedEntryClass {

    // Own fields of Gd-1.0.Gd.TaggedEntryClass

    parent_class: Gtk.SearchEntryClass
}

export abstract class TaggedEntryClass {

    // Own properties of Gd-1.0.Gd.TaggedEntryClass

    static name: string
}

export interface TaggedEntryPrivate {
}

export class TaggedEntryPrivate {

    // Own properties of Gd-1.0.Gd.TaggedEntryPrivate

    static name: string
}

export interface TaggedEntryTagClass {

    // Own fields of Gd-1.0.Gd.TaggedEntryTagClass

    parent_class: GObject.ObjectClass
}

export abstract class TaggedEntryTagClass {

    // Own properties of Gd-1.0.Gd.TaggedEntryTagClass

    static name: string
}

export interface TaggedEntryTagPrivate {
}

export class TaggedEntryTagPrivate {

    // Own properties of Gd-1.0.Gd.TaggedEntryTagPrivate

    static name: string
}

export interface TogglePixbufRendererClass {

    // Own fields of Gd-1.0.Gd.TogglePixbufRendererClass

    parent_class: Gtk.CellRendererPixbufClass
}

export abstract class TogglePixbufRendererClass {

    // Own properties of Gd-1.0.Gd.TogglePixbufRendererClass

    static name: string
}

export interface TogglePixbufRendererPrivate {
}

export class TogglePixbufRendererPrivate {

    // Own properties of Gd-1.0.Gd.TogglePixbufRendererPrivate

    static name: string
}

export interface TwoLinesRendererClass {

    // Own fields of Gd-1.0.Gd.TwoLinesRendererClass

    parent_class: Gtk.CellRendererTextClass
}

export abstract class TwoLinesRendererClass {

    // Own properties of Gd-1.0.Gd.TwoLinesRendererClass

    static name: string
}

export interface TwoLinesRendererPrivate {
}

export class TwoLinesRendererPrivate {

    // Own properties of Gd-1.0.Gd.TwoLinesRendererPrivate

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