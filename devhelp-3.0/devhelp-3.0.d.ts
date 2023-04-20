
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gjs
 */
/**
 * Devhelp-3.0
 */

import type WebKit2 from '@girs/webkit2-4.1';
import type Soup from '@girs/soup-3.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type JavaScriptCore from '@girs/javascriptcore-4.1';
import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from '@girs/cairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Atk from '@girs/atk-1.0';

export namespace Devhelp {

/**
 * The type of the content the link points to.
 */
enum LinkType {
    /**
     * The top-level page of a #DhBook.
     */
    BOOK,
    /**
     * A page.
     */
    PAGE,
    /**
     * Another kind of keyword.
     */
    KEYWORD,
    /**
     * A function keyword.
     */
    FUNCTION,
    /**
     * A struct keyword.
     */
    STRUCT,
    /**
     * A macro keyword.
     */
    MACRO,
    /**
     * An enum keyword.
     */
    ENUM,
    /**
     * A typedef keyword.
     */
    TYPEDEF,
    /**
     * A property keyword.
     */
    PROPERTY,
    /**
     * A signal keyword.
     */
    SIGNAL,
}
enum LinkFlags {
    /**
     * No flags set.
     */
    NONE,
    /**
     * The symbol that the link points to is deprecated.
     */
    DEPRECATED,
}
/**
 * Binds `sidebar` and `notebook:`
 * - When the #DhSidebar::link-selected signal is emitted, open the URI in the
 *   active #DhWebView.
 * - On #GtkNotebook::switch-page or when the user clicks on a link, calls
 *   dh_sidebar_select_uri() with the new active URI.
 * 
 * You need to call this function when the #DhNotebook is empty, i.e. before
 * adding the first #DhTab.
 * 
 * Note that this function doesn't take a “self” window parameter, to be more
 * flexible: it is possible to have several pairs of #DhSidebar/#DhNotebook per
 * window, to show different #DhProfile's.
 * @param sidebar a #DhSidebar.
 * @param notebook an empty #DhNotebook.
 */
function application_window_bind_sidebar_and_notebook(sidebar: Sidebar, notebook: Notebook): void
/**
 * Free the resources allocated by Devhelp. For example it unrefs the singleton
 * objects.
 * 
 * It is not mandatory to call this function, it's just to be friendlier to
 * memory debugging tools. This function is meant to be called at the end of
 * main(). It can be called several times.
 */
function finalize(): void
/**
 * Initializes the Devhelp library (e.g. for the internationalization).
 * 
 * This function can be called several times, but is meant to be called at the
 * beginning of main(), before any other Devhelp function call.
 * 
 * Since version 3.38, this function enables the WebKitGTK sandbox by calling
 * webkit_web_context_set_sandbox_enabled() on the default #WebKitWebContext.
 */
function init(): void
function link_type_to_string(link_type: LinkType): string | null
module AssistantView {

    // Signal callback interfaces

    /**
     * Signal callback interface for `open-uri`
     */
    interface OpenUriSignalCallback {
        ($obj: AssistantView, uri: string | null): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, WebKit2.WebView.ConstructorProperties {
    }

}

interface AssistantView extends Atk.ImplementorIface, Gtk.Buildable {

    // Conflicting properties

    parent: WebKit2.WebViewBase & Gtk.Container & Gtk.Container
    priv: any & WebKit2.WebViewBasePrivate

    // Own fields of Devhelp-3.0.Devhelp.AssistantView

    parent_instance: WebKit2.WebView & GObject.InitiallyUnowned

    // Owm methods of Devhelp-3.0.Devhelp.AssistantView

    /**
     * Search for `str` in the current assistant view.
     * @param str the search query.
     * @returns %TRUE if @str was found, %FALSE otherwise.
     */
    search(str: string | null): boolean
    /**
     * Open `link` in the assistant view, if %NULL the view will be blanked.
     * @param link a #DhLink to set or %NULL.
     * @returns %TRUE if the requested link is open, %FALSE otherwise.
     */
    set_link(link: Link | null): boolean

    // Conflicting methods

    /**
     * Gets the #WebKitSettings currently applied to `web_view`.
     * 
     * If no other #WebKitSettings have been explicitly applied to
     * `web_view` with webkit_web_view_set_settings(), the default
     * #WebKitSettings will be returned. This method always returns
     * a valid #WebKitSettings object.
     * To modify any of the `web_view` settings, you can either create
     * a new #WebKitSettings object with webkit_settings_new(), setting
     * the desired preferences, and then replace the existing `web_view`
     * settings with webkit_web_view_set_settings() or get the existing
     * `web_view` settings and update it directly. #WebKitSettings objects
     * can be shared by multiple #WebKitWebView<!-- -->s, so modifying
     * the settings of a #WebKitWebView would affect other
     * #WebKitWebView<!-- -->s using the same #WebKitSettings.
     * @returns the #WebKitSettings attached to @web_view
     */
    get_settings(): WebKit2.Settings

    // Overloads of get_settings

    /**
     * Gets the settings object holding the settings used for this widget.
     * 
     * Note that this function can only be called when the #GtkWidget
     * is attached to a toplevel, since the settings object is specific
     * to a particular #GdkScreen.
     * @returns the relevant #GtkSettings object
     */
    get_settings(): Gtk.Settings
    /**
     * Gets the settings object holding the settings used for this widget.
     * 
     * Note that this function can only be called when the #GtkWidget
     * is attached to a toplevel, since the settings object is specific
     * to a particular #GdkScreen.
     * @returns the relevant #GtkSettings object
     */
    get_settings(): Gtk.Settings
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

    // Own signals of Devhelp-3.0.Devhelp.AssistantView

    connect(sigName: "open-uri", callback: AssistantView.OpenUriSignalCallback): number
    connect_after(sigName: "open-uri", callback: AssistantView.OpenUriSignalCallback): number
    emit(sigName: "open-uri", uri: string | null, ...args: any[]): void

    // Class property signals of Devhelp-3.0.Devhelp.AssistantView

    connect(sigName: "notify::automation-presentation-type", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::automation-presentation-type", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::automation-presentation-type", ...args: any[]): void
    connect(sigName: "notify::camera-capture-state", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::camera-capture-state", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::camera-capture-state", ...args: any[]): void
    connect(sigName: "notify::default-content-security-policy", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-content-security-policy", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-content-security-policy", ...args: any[]): void
    connect(sigName: "notify::display-capture-state", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-capture-state", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display-capture-state", ...args: any[]): void
    connect(sigName: "notify::editable", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editable", ...args: any[]): void
    connect(sigName: "notify::estimated-load-progress", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::estimated-load-progress", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::estimated-load-progress", ...args: any[]): void
    connect(sigName: "notify::favicon", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::favicon", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::favicon", ...args: any[]): void
    connect(sigName: "notify::is-controlled-by-automation", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-controlled-by-automation", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-controlled-by-automation", ...args: any[]): void
    connect(sigName: "notify::is-ephemeral", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-ephemeral", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-ephemeral", ...args: any[]): void
    connect(sigName: "notify::is-loading", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-loading", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-loading", ...args: any[]): void
    connect(sigName: "notify::is-muted", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-muted", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-muted", ...args: any[]): void
    connect(sigName: "notify::is-playing-audio", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-playing-audio", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-playing-audio", ...args: any[]): void
    connect(sigName: "notify::is-web-process-responsive", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-web-process-responsive", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-web-process-responsive", ...args: any[]): void
    connect(sigName: "notify::microphone-capture-state", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::microphone-capture-state", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::microphone-capture-state", ...args: any[]): void
    connect(sigName: "notify::page-id", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::page-id", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::page-id", ...args: any[]): void
    connect(sigName: "notify::related-view", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::related-view", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::related-view", ...args: any[]): void
    connect(sigName: "notify::settings", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::settings", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::settings", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::uri", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: "notify::user-content-manager", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-content-manager", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::user-content-manager", ...args: any[]): void
    connect(sigName: "notify::web-context", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::web-context", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::web-context", ...args: any[]): void
    connect(sigName: "notify::web-extension-mode", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::web-extension-mode", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::web-extension-mode", ...args: any[]): void
    connect(sigName: "notify::website-policies", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::website-policies", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::website-policies", ...args: any[]): void
    connect(sigName: "notify::zoom-level", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::zoom-level", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::zoom-level", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: AssistantView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AssistantView extends WebKit2.WebView {

    // Own properties of Devhelp-3.0.Devhelp.AssistantView

    static name: string
    static $gtype: GObject.GType<AssistantView>

    // Constructors of Devhelp-3.0.Devhelp.AssistantView

    constructor(config?: AssistantView.ConstructorProperties) 
    constructor() 
    static new(): AssistantView
    _init(config?: AssistantView.ConstructorProperties): void
}

module Book {

    // Signal callback interfaces

    /**
     * Signal callback interface for `deleted`
     */
    interface DeletedSignalCallback {
        ($obj: Book): void
    }

    /**
     * Signal callback interface for `updated`
     */
    interface UpdatedSignalCallback {
        ($obj: Book): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Book {

    // Own fields of Devhelp-3.0.Devhelp.Book

    parent_instance: GObject.Object

    // Owm methods of Devhelp-3.0.Devhelp.Book

    /**
     * Compares the #DhBook's by their IDs, with g_ascii_strcasecmp().
     * @param b a #DhBook.
     * @returns an integer less than, equal to, or greater than zero, if @a is <, == or > than @b.
     */
    cmp_by_id(b: Book): number
    /**
     * Compares the #DhBook's by their title.
     * @param b a #DhBook.
     * @returns an integer less than, equal to, or greater than zero, if @a is <, == or > than @b.
     */
    cmp_by_title(b: Book): number
    get_completion(): Completion
    /**
     * Gets the book ID. In the Devhelp index file format version 2, it is actually
     * the “name”, not the ID, but “book ID” is clearer, “book name” can be confused
     * with the title.
     * @returns the book ID.
     */
    get_id(): string | null
    get_index_file(): Gio.File
    get_language(): string | null
    get_links(): Link[]
    get_title(): string | null
    /**
     * Gets the general structure of the book, as a tree. The tree contains only
     * #DhLink's of type %DH_LINK_TYPE_BOOK or %DH_LINK_TYPE_PAGE. The other
     * #DhLink's are not contained in the tree. To have a list of
     * <emphasis>all</emphasis> #DhLink's part of the book, you need to call
     * dh_book_get_links().
     * @returns the tree of #DhLink's part of @book.
     */
    get_tree(): GLib.Node

    // Own signals of Devhelp-3.0.Devhelp.Book

    connect(sigName: "deleted", callback: Book.DeletedSignalCallback): number
    connect_after(sigName: "deleted", callback: Book.DeletedSignalCallback): number
    emit(sigName: "deleted", ...args: any[]): void
    connect(sigName: "updated", callback: Book.UpdatedSignalCallback): number
    connect_after(sigName: "updated", callback: Book.UpdatedSignalCallback): number
    emit(sigName: "updated", ...args: any[]): void

    // Class property signals of Devhelp-3.0.Devhelp.Book

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Book extends GObject.Object {

    // Own properties of Devhelp-3.0.Devhelp.Book

    static name: string
    static $gtype: GObject.GType<Book>

    // Constructors of Devhelp-3.0.Devhelp.Book

    constructor(config?: Book.ConstructorProperties) 
    constructor(index_file: Gio.File) 
    static new(index_file: Gio.File): Book
    _init(config?: Book.ConstructorProperties): void
}

module BookList {

    // Signal callback interfaces

    /**
     * Signal callback interface for `add-book`
     */
    interface AddBookSignalCallback {
        ($obj: BookList, book: Book): void
    }

    /**
     * Signal callback interface for `remove-book`
     */
    interface RemoveBookSignalCallback {
        ($obj: BookList, book: Book): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface BookList {

    // Own fields of Devhelp-3.0.Devhelp.BookList

    parent: GObject.Object
    priv: BookListPrivate

    // Owm methods of Devhelp-3.0.Devhelp.BookList

    /**
     * Emits the #DhBookList::add-book signal.
     * 
     * It is a programmer error to call this function if `book` is already inserted
     * in `book_list`.
     * @param book a #DhBook.
     */
    add_book(book: Book): void
    /**
     * Gets the list of #DhBook's part of `book_list,` in no particular order. Each
     * book ID in the list is unique (see dh_book_get_id()).
     * @returns the #GList of #DhBook's part of @book_list.
     */
    get_books(): Book[]
    /**
     * Emits the #DhBookList::remove-book signal.
     * 
     * It is a programmer error to call this function if `book` is not present in
     * `book_list`.
     * @param book a #DhBook.
     */
    remove_book(book: Book): void

    // Own virtual methods of Devhelp-3.0.Devhelp.BookList

    /**
     * Emits the #DhBookList::add-book signal.
     * 
     * It is a programmer error to call this function if `book` is already inserted
     * in `book_list`.
     * @virtual 
     * @param book a #DhBook.
     */
    vfunc_add_book(book: Book): void
    /**
     * Gets the list of #DhBook's part of `book_list,` in no particular order. Each
     * book ID in the list is unique (see dh_book_get_id()).
     * @virtual 
     * @returns the #GList of #DhBook's part of @book_list.
     */
    vfunc_get_books(): Book[]
    /**
     * Emits the #DhBookList::remove-book signal.
     * 
     * It is a programmer error to call this function if `book` is not present in
     * `book_list`.
     * @virtual 
     * @param book a #DhBook.
     */
    vfunc_remove_book(book: Book): void

    // Own signals of Devhelp-3.0.Devhelp.BookList

    connect(sigName: "add-book", callback: BookList.AddBookSignalCallback): number
    connect_after(sigName: "add-book", callback: BookList.AddBookSignalCallback): number
    emit(sigName: "add-book", book: Book, ...args: any[]): void
    connect(sigName: "remove-book", callback: BookList.RemoveBookSignalCallback): number
    connect_after(sigName: "remove-book", callback: BookList.RemoveBookSignalCallback): number
    emit(sigName: "remove-book", book: Book, ...args: any[]): void

    // Class property signals of Devhelp-3.0.Devhelp.BookList

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class BookList extends GObject.Object {

    // Own properties of Devhelp-3.0.Devhelp.BookList

    static name: string
    static $gtype: GObject.GType<BookList>

    // Constructors of Devhelp-3.0.Devhelp.BookList

    constructor(config?: BookList.ConstructorProperties) 
    constructor() 
    static new(): BookList
    _init(config?: BookList.ConstructorProperties): void
    /**
     * Gets the default #DhBookList object. It is created with #DhBookListBuilder,
     * dh_book_list_builder_add_default_sub_book_lists() is called, and
     * dh_book_list_builder_read_books_disabled_setting() is called with the default
     * #DhSettings object as returned by dh_settings_get_default().
     * @returns the default #DhBookList object.
     */
    static get_default(): BookList
}

module BookListBuilder {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface BookListBuilder {

    // Own fields of Devhelp-3.0.Devhelp.BookListBuilder

    parent: GObject.Object
    priv: BookListBuilderPrivate

    // Owm methods of Devhelp-3.0.Devhelp.BookListBuilder

    /**
     * Creates the default #DhBookListDirectory's and adds them to `builder` with
     * dh_book_list_builder_add_sub_book_list().
     * 
     * It creates and adds a #DhBookListDirectory for the following directories (in
     * that order):
     * - `$XDG_DATA_HOME/doc/`
     * - `$XDG_DATA_HOME/gtk-doc/html/`
     * - `$XDG_DATA_HOME/devhelp/books/`
     * - For each directory in `$XDG_DATA_DIRS`:
     *   - `$xdg_data_dir/doc/`
     *   - `$xdg_data_dir/gtk-doc/html/`
     *   - `$xdg_data_dir/devhelp/books/`
     * 
     * See g_get_user_data_dir() and g_get_system_data_dirs().
     * 
     * Additionally, if the libdevhelp has been compiled with the `flatpak_build`
     * option, it creates and adds a #DhBookListDirectory for the following
     * directories (in that order, after the above ones):
     * - `/run/host/usr/share/doc/`
     * - `/run/host/usr/share/gtk-doc/html/`
     * - `/run/host/usr/share/devhelp/books/`
     * 
     * The exact list of directories is subject to change, it is not part of the
     * API.
     */
    add_default_sub_book_lists(): void
    /**
     * Adds `sub_book_list`.
     * 
     * The #DhBookList object that will be created with
     * dh_book_list_builder_create_object() will contain all the sub-#DhBookList's
     * added with this function (and it will listen to their signals). The
     * sub-#DhBookList's must be added in order of decreasing priority (the first
     * sub-#DhBookList added has the highest priority). The priority is used in case
     * of book ID conflicts (see dh_book_get_id()).
     * @param sub_book_list a #DhBookList.
     */
    add_sub_book_list(sub_book_list: BookList): void
    /**
     * Creates the #DhBookList. It actually creates a subclass of #DhBookList, but
     * the subclass is not exposed to the public API.
     * @returns the newly created #DhBookList object.
     */
    create_object(): BookList
    /**
     * Sets the #DhSettings object from which to read the "books-disabled"
     * #GSettings key. If `settings` is %NULL or if this function isn't called, then
     * the #DhBookList object that will be created with
     * dh_book_list_builder_create_object() will not read a "books-disabled"
     * setting.
     * 
     * With #DhBookListBuilder it is not possible to read the "books-disabled"
     * settings from several #DhSettings objects and combine them. Only the last
     * call to this function is taken into account when creating the #DhBookList
     * with dh_book_list_builder_create_object().
     * @param settings a #DhSettings, or %NULL.
     */
    read_books_disabled_setting(settings: Settings | null): void

    // Class property signals of Devhelp-3.0.Devhelp.BookListBuilder

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class BookListBuilder extends GObject.Object {

    // Own properties of Devhelp-3.0.Devhelp.BookListBuilder

    static name: string
    static $gtype: GObject.GType<BookListBuilder>

    // Constructors of Devhelp-3.0.Devhelp.BookListBuilder

    constructor(config?: BookListBuilder.ConstructorProperties) 
    constructor() 
    static new(): BookListBuilder
    _init(config?: BookListBuilder.ConstructorProperties): void
}

module BookListDirectory {

    // Constructor properties interface

    interface ConstructorProperties extends BookList.ConstructorProperties {

        // Own constructor properties of Devhelp-3.0.Devhelp.BookListDirectory

        /**
         * The directory, as a #GFile, containing a set of Devhelp books.
         */
        directory?: Gio.File | null
    }

}

interface BookListDirectory {

    // Own properties of Devhelp-3.0.Devhelp.BookListDirectory

    /**
     * The directory, as a #GFile, containing a set of Devhelp books.
     */
    readonly directory: Gio.File

    // Own fields of Devhelp-3.0.Devhelp.BookListDirectory

    parent: BookList & GObject.Object
    priv: any

    // Owm methods of Devhelp-3.0.Devhelp.BookListDirectory

    get_directory(): Gio.File

    // Class property signals of Devhelp-3.0.Devhelp.BookListDirectory

    connect(sigName: "notify::directory", callback: (($obj: BookListDirectory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::directory", callback: (($obj: BookListDirectory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::directory", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class BookListDirectory extends BookList {

    // Own properties of Devhelp-3.0.Devhelp.BookListDirectory

    static name: string
    static $gtype: GObject.GType<BookListDirectory>

    // Constructors of Devhelp-3.0.Devhelp.BookListDirectory

    constructor(config?: BookListDirectory.ConstructorProperties) 
    /**
     * Returns a #DhBookListDirectory for `directory`.
     * 
     * If a #DhBookListDirectory instance is still alive for `directory` (according
     * to g_file_equal()), the same instance is returned with the reference count
     * increased by one, to avoid data duplication. If no #DhBookListDirectory
     * instance already exists for `directory,` this function returns a new instance
     * with a reference count of one (so it's the responsibility of the caller to
     * keep the object alive if wanted, to avoid destroying and re-creating the same
     * #DhBookListDirectory repeatedly).
     * @constructor 
     * @param directory the #DhBookListDirectory:directory.
     * @returns a #DhBookListDirectory for @directory.
     */
    constructor(directory: Gio.File) 
    /**
     * Returns a #DhBookListDirectory for `directory`.
     * 
     * If a #DhBookListDirectory instance is still alive for `directory` (according
     * to g_file_equal()), the same instance is returned with the reference count
     * increased by one, to avoid data duplication. If no #DhBookListDirectory
     * instance already exists for `directory,` this function returns a new instance
     * with a reference count of one (so it's the responsibility of the caller to
     * keep the object alive if wanted, to avoid destroying and re-creating the same
     * #DhBookListDirectory repeatedly).
     * @constructor 
     * @param directory the #DhBookListDirectory:directory.
     * @returns a #DhBookListDirectory for @directory.
     */
    static new(directory: Gio.File): BookListDirectory

    // Overloads of new

    static new(): BookList
    _init(config?: BookListDirectory.ConstructorProperties): void
}

module BookManager {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface BookManager {

    // Own fields of Devhelp-3.0.Devhelp.BookManager

    parent_instance: GObject.Object

    // Owm methods of Devhelp-3.0.Devhelp.BookManager

    populate(): void

    // Class property signals of Devhelp-3.0.Devhelp.BookManager

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class BookManager extends GObject.Object {

    // Own properties of Devhelp-3.0.Devhelp.BookManager

    static name: string
    static $gtype: GObject.GType<BookManager>

    // Constructors of Devhelp-3.0.Devhelp.BookManager

    constructor(config?: BookManager.ConstructorProperties) 
    constructor() 
    static new(): BookManager
    _init(config?: BookManager.ConstructorProperties): void
}

module BookTree {

    // Signal callback interfaces

    /**
     * Signal callback interface for `link-selected`
     */
    interface LinkSelectedSignalCallback {
        ($obj: BookTree, link: Link): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Scrollable.ConstructorProperties, Gtk.TreeView.ConstructorProperties {

        // Own constructor properties of Devhelp-3.0.Devhelp.BookTree

        /**
         * The #DhProfile. If set to %NULL, the default profile as returned by
         * dh_profile_get_default() is used.
         */
        profile?: Profile | null
    }

}

interface BookTree extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {

    // Own properties of Devhelp-3.0.Devhelp.BookTree

    /**
     * The #DhProfile. If set to %NULL, the default profile as returned by
     * dh_profile_get_default() is used.
     */
    readonly profile: Profile

    // Own fields of Devhelp-3.0.Devhelp.BookTree

    parent_instance: Gtk.TreeView & GObject.InitiallyUnowned

    // Owm methods of Devhelp-3.0.Devhelp.BookTree

    get_profile(): Profile
    get_selected_link(): Link | null
    /**
     * Selects the row corresponding to `uri`. It searches in the tree a #DhLink
     * being at `uri` (if it's an exact match), or containing `uri` (if `uri` contains
     * an anchor).
     * @param uri the URI to select.
     */
    select_uri(uri: string | null): void

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

    // Own signals of Devhelp-3.0.Devhelp.BookTree

    connect(sigName: "link-selected", callback: BookTree.LinkSelectedSignalCallback): number
    connect_after(sigName: "link-selected", callback: BookTree.LinkSelectedSignalCallback): number
    emit(sigName: "link-selected", link: Link, ...args: any[]): void

    // Class property signals of Devhelp-3.0.Devhelp.BookTree

    connect(sigName: "notify::profile", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::profile", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::profile", ...args: any[]): void
    connect(sigName: "notify::activate-on-single-click", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activate-on-single-click", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::activate-on-single-click", ...args: any[]): void
    connect(sigName: "notify::enable-grid-lines", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-grid-lines", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-grid-lines", ...args: any[]): void
    connect(sigName: "notify::enable-search", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-search", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-search", ...args: any[]): void
    connect(sigName: "notify::enable-tree-lines", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-tree-lines", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-tree-lines", ...args: any[]): void
    connect(sigName: "notify::expander-column", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expander-column", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expander-column", ...args: any[]): void
    connect(sigName: "notify::fixed-height-mode", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-height-mode", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-height-mode", ...args: any[]): void
    connect(sigName: "notify::headers-clickable", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::headers-clickable", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::headers-clickable", ...args: any[]): void
    connect(sigName: "notify::headers-visible", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::headers-visible", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::headers-visible", ...args: any[]): void
    connect(sigName: "notify::hover-expand", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hover-expand", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hover-expand", ...args: any[]): void
    connect(sigName: "notify::hover-selection", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hover-selection", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hover-selection", ...args: any[]): void
    connect(sigName: "notify::level-indentation", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::level-indentation", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::level-indentation", ...args: any[]): void
    connect(sigName: "notify::model", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::reorderable", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reorderable", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reorderable", ...args: any[]): void
    connect(sigName: "notify::rubber-banding", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rubber-banding", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rubber-banding", ...args: any[]): void
    connect(sigName: "notify::rules-hint", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rules-hint", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rules-hint", ...args: any[]): void
    connect(sigName: "notify::search-column", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-column", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::search-column", ...args: any[]): void
    connect(sigName: "notify::show-expanders", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-expanders", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-expanders", ...args: any[]): void
    connect(sigName: "notify::tooltip-column", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-column", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-column", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::hadjustment", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hadjustment", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hadjustment", ...args: any[]): void
    connect(sigName: "notify::hscroll-policy", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hscroll-policy", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hscroll-policy", ...args: any[]): void
    connect(sigName: "notify::vadjustment", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vadjustment", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vadjustment", ...args: any[]): void
    connect(sigName: "notify::vscroll-policy", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vscroll-policy", callback: (($obj: BookTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vscroll-policy", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class BookTree extends Gtk.TreeView {

    // Own properties of Devhelp-3.0.Devhelp.BookTree

    static name: string
    static $gtype: GObject.GType<BookTree>

    // Constructors of Devhelp-3.0.Devhelp.BookTree

    constructor(config?: BookTree.ConstructorProperties) 
    constructor(profile: Profile | null) 
    static new(profile: Profile | null): BookTree

    // Overloads of new

    /**
     * Creates a new #GtkTreeView widget.
     * @constructor 
     * @returns A newly created #GtkTreeView widget.
     */
    static new(): Gtk.TreeView
    _init(config?: BookTree.ConstructorProperties): void
}

module Completion {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Completion {

    // Own fields of Devhelp-3.0.Devhelp.Completion

    parent: GObject.Object
    priv: CompletionPrivate

    // Owm methods of Devhelp-3.0.Devhelp.Completion

    /**
     * Adds a string to the `completion` object.
     * 
     * After adding all the strings you need to call dh_completion_sort().
     * @param str a string.
     */
    add_string(str: string | null): void
    /**
     * This function does the equivalent of:
     * 1. Searches the data structure of `completion` to find all strings that have
     *    `prefix` as prefix.
     * 2. From the list found at step 1, find the longest prefix that still matches
     *    all the strings in the list.
     * 
     * This function assumes that `prefix` and the strings contained in `completion`
     * are in UTF-8. If all the strings are valid UTF-8, then the return value will
     * also be valid UTF-8 (it won't return a partial multi-byte character).
     * @param prefix the string to complete.
     * @returns the completed prefix, or %NULL if a longer prefix has not been found. Free with g_free() when no longer needed.
     */
    complete(prefix: string | null): string | null
    /**
     * Sorts all the strings. It is required to call this function after adding
     * strings with dh_completion_add_string().
     */
    sort(): void

    // Class property signals of Devhelp-3.0.Devhelp.Completion

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Completion extends GObject.Object {

    // Own properties of Devhelp-3.0.Devhelp.Completion

    static name: string
    static $gtype: GObject.GType<Completion>

    // Constructors of Devhelp-3.0.Devhelp.Completion

    constructor(config?: Completion.ConstructorProperties) 
    constructor() 
    static new(): Completion
    _init(config?: Completion.ConstructorProperties): void
    /**
     * The same as dh_completion_complete(), but aggregated for several
     * #DhCompletion objects.
     * @param completion_objects a #GList of   #DhCompletion objects.
     * @param prefix the string to complete.
     * @returns the completed prefix, or %NULL if a longer prefix has not been found. Free with g_free() when no longer needed.
     */
    static aggregate_complete(completion_objects: Completion[] | null, prefix: string | null): string | null
}

module KeywordModel {

    // Constructor properties interface

    interface ConstructorProperties extends Gtk.TreeModel.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface KeywordModel extends Gtk.TreeModel {

    // Own fields of Devhelp-3.0.Devhelp.KeywordModel

    parent_instance: GObject.Object

    // Owm methods of Devhelp-3.0.Devhelp.KeywordModel

    /**
     * Searches in the #DhBookList of `profile` the list of #DhLink's that correspond
     * to `search_string,` and fills the `model` with that list (erasing the previous
     * content).
     * 
     * Attention, when calling this function the `model` needs to be disconnected
     * from the #GtkTreeView, because the #GtkTreeModel signals are not emitted, to
     * improve the performances (sending a lot of signals is slow) and have a
     * simpler implementation. The previous row selection is anyway no longer
     * relevant.
     * 
     * Note that there is a maximum number of matches (configured internally). When
     * the maximum is reached the search is stopped, to avoid blocking the GUI
     * (since this function runs synchronously) if the `search_string` contains for
     * example only one character. (And it is anyway not very useful to show to the
     * user tens of thousands search results).
     * @param search_string a search query.
     * @param current_book_id the ID of the book currently shown, or %NULL.
     * @param profile a #DhProfile, or %NULL for the default profile.
     * @returns the #DhLink that matches exactly @search_string, or %NULL if no such #DhLink was found within the maximum number of matches.
     */
    filter(search_string: string | null, current_book_id: string | null, profile: Profile | null): Link | null

    // Class property signals of Devhelp-3.0.Devhelp.KeywordModel

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class KeywordModel extends GObject.Object {

    // Own properties of Devhelp-3.0.Devhelp.KeywordModel

    static name: string
    static $gtype: GObject.GType<KeywordModel>

    // Constructors of Devhelp-3.0.Devhelp.KeywordModel

    constructor(config?: KeywordModel.ConstructorProperties) 
    constructor() 
    static new(): KeywordModel
    _init(config?: KeywordModel.ConstructorProperties): void
}

module Notebook {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Notebook.ConstructorProperties {

        // Own constructor properties of Devhelp-3.0.Devhelp.Notebook

        /**
         * The #DhProfile. If set to %NULL, the default profile as returned by
         * dh_profile_get_default() is used.
         */
        profile?: Profile | null
    }

}

interface Notebook extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Devhelp-3.0.Devhelp.Notebook

    /**
     * The #DhProfile. If set to %NULL, the default profile as returned by
     * dh_profile_get_default() is used.
     */
    readonly profile: Profile

    // Own fields of Devhelp-3.0.Devhelp.Notebook

    parent: Gtk.Notebook & Gtk.Container
    priv: NotebookPrivate

    // Owm methods of Devhelp-3.0.Devhelp.Notebook

    get_active_tab(): Tab | null
    get_active_web_view(): WebView | null
    get_all_web_views(): WebView[]
    get_profile(): Profile
    /**
     * Creates a new #DhTab and #DhTabLabel and appends them to the #GtkNotebook.
     * 
     * The #DhWebView will have the same #DhProfile as `notebook`.
     * @param uri the URI to open, or %NULL for a blank page.
     * @param switch_focus whether to call gtk_notebook_set_current_page() on the new   tab.
     */
    open_new_tab(uri: string | null, switch_focus: boolean): void

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

    // Class property signals of Devhelp-3.0.Devhelp.Notebook

    connect(sigName: "notify::profile", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::profile", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::profile", ...args: any[]): void
    connect(sigName: "notify::enable-popup", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-popup", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-popup", ...args: any[]): void
    connect(sigName: "notify::group-name", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::group-name", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::group-name", ...args: any[]): void
    connect(sigName: "notify::page", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::page", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::page", ...args: any[]): void
    connect(sigName: "notify::scrollable", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scrollable", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scrollable", ...args: any[]): void
    connect(sigName: "notify::show-border", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-border", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-border", ...args: any[]): void
    connect(sigName: "notify::show-tabs", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-tabs", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-tabs", ...args: any[]): void
    connect(sigName: "notify::tab-pos", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tab-pos", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tab-pos", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Notebook extends Gtk.Notebook {

    // Own properties of Devhelp-3.0.Devhelp.Notebook

    static name: string
    static $gtype: GObject.GType<Notebook>

    // Constructors of Devhelp-3.0.Devhelp.Notebook

    constructor(config?: Notebook.ConstructorProperties) 
    constructor(profile: Profile | null) 
    static new(profile: Profile | null): Notebook

    // Overloads of new

    /**
     * Creates a new #GtkNotebook widget with no pages.
     * @constructor 
     * @returns the newly created #GtkNotebook
     */
    static new(): Gtk.Notebook
    _init(config?: Notebook.ConstructorProperties): void
}

module Profile {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Profile {

    // Own fields of Devhelp-3.0.Devhelp.Profile

    parent: GObject.Object
    priv: ProfilePrivate

    // Owm methods of Devhelp-3.0.Devhelp.Profile

    /**
     * Gets the #DhBookList object of `profile`. The returned object is guaranteed to
     * be the same for the lifetime of `profile`.
     * @returns the #DhBookList of @profile.
     */
    get_book_list(): BookList
    /**
     * Gets the #DhSettings object of `profile`. The returned object is guaranteed to
     * be the same for the lifetime of `profile`.
     * @returns the #DhSettings of @profile.
     */
    get_settings(): Settings

    // Class property signals of Devhelp-3.0.Devhelp.Profile

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Profile extends GObject.Object {

    // Own properties of Devhelp-3.0.Devhelp.Profile

    static name: string
    static $gtype: GObject.GType<Profile>

    // Constructors of Devhelp-3.0.Devhelp.Profile

    constructor(config?: Profile.ConstructorProperties) 
    _init(config?: Profile.ConstructorProperties): void
    /**
     * Gets the default #DhProfile object. It has the default #DhSettings object as
     * returned by dh_settings_get_default(), and the default #DhBookList object as
     * returned by dh_book_list_get_default().
     * @returns the default #DhProfile object.
     */
    static get_default(): Profile
}

module ProfileBuilder {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface ProfileBuilder {

    // Own fields of Devhelp-3.0.Devhelp.ProfileBuilder

    parent: GObject.Object
    priv: ProfileBuilderPrivate

    // Owm methods of Devhelp-3.0.Devhelp.ProfileBuilder

    create_object(): Profile
    /**
     * Sets the #DhBookList object.
     * 
     * If you don't call this function, the default #DhBookList object as returned
     * by dh_book_list_get_default() will be used.
     * @param book_list a #DhBookList.
     */
    set_book_list(book_list: BookList): void
    /**
     * Sets the #DhSettings object.
     * 
     * If you don't call this function, the default #DhSettings object as returned
     * by dh_settings_get_default() will be used.
     * @param settings a #DhSettings.
     */
    set_settings(settings: Settings): void

    // Class property signals of Devhelp-3.0.Devhelp.ProfileBuilder

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ProfileBuilder extends GObject.Object {

    // Own properties of Devhelp-3.0.Devhelp.ProfileBuilder

    static name: string
    static $gtype: GObject.GType<ProfileBuilder>

    // Constructors of Devhelp-3.0.Devhelp.ProfileBuilder

    constructor(config?: ProfileBuilder.ConstructorProperties) 
    constructor() 
    static new(): ProfileBuilder
    _init(config?: ProfileBuilder.ConstructorProperties): void
}

module SearchBar {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.SearchBar.ConstructorProperties {

        // Own constructor properties of Devhelp-3.0.Devhelp.SearchBar

        /**
         * The associated #DhNotebook. #DhSearchBar has a strong reference to
         * the #DhNotebook.
         */
        notebook?: Notebook | null
    }

}

interface SearchBar extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Devhelp-3.0.Devhelp.SearchBar

    /**
     * The associated #DhNotebook. #DhSearchBar has a strong reference to
     * the #DhNotebook.
     */
    readonly notebook: Notebook

    // Own fields of Devhelp-3.0.Devhelp.SearchBar

    parent: Gtk.SearchBar & Gtk.Container
    priv: SearchBarPrivate

    // Owm methods of Devhelp-3.0.Devhelp.SearchBar

    get_notebook(): Notebook
    /**
     * Grabs the focus to the #DhSearchBar search entry and selects its text.
     */
    grab_focus_to_search_entry(): void

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

    // Class property signals of Devhelp-3.0.Devhelp.SearchBar

    connect(sigName: "notify::notebook", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::notebook", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::notebook", ...args: any[]): void
    connect(sigName: "notify::search-mode-enabled", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-mode-enabled", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::search-mode-enabled", ...args: any[]): void
    connect(sigName: "notify::show-close-button", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-close-button", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-close-button", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: SearchBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SearchBar extends Gtk.SearchBar {

    // Own properties of Devhelp-3.0.Devhelp.SearchBar

    static name: string
    static $gtype: GObject.GType<SearchBar>

    // Constructors of Devhelp-3.0.Devhelp.SearchBar

    constructor(config?: SearchBar.ConstructorProperties) 
    constructor(notebook: Notebook) 
    static new(notebook: Notebook): SearchBar

    // Overloads of new

    /**
     * Creates a #GtkSearchBar. You will need to tell it about
     * which widget is going to be your text entry using
     * gtk_search_bar_connect_entry().
     * @constructor 
     * @returns a new #GtkSearchBar
     */
    static new(): Gtk.SearchBar
    _init(config?: SearchBar.ConstructorProperties): void
}

module Settings {

    // Signal callback interfaces

    /**
     * Signal callback interface for `books-disabled-changed`
     */
    interface BooksDisabledChangedSignalCallback {
        ($obj: Settings): void
    }

    /**
     * Signal callback interface for `fonts-changed`
     */
    interface FontsChangedSignalCallback {
        ($obj: Settings): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Devhelp-3.0.Devhelp.Settings

        /**
         * Font for text with fixed width, such as code examples.
         * 
         * This property is independent of #DhSettings:use-system-fonts.
         */
        fixed_font?: string | null
        /**
         * Whether books should be grouped by programming language in the UI.
         */
        group_books_by_language?: boolean | null
        /**
         * Whether to use the system default fonts.
         */
        use_system_fonts?: boolean | null
        /**
         * Font for text with variable width.
         * 
         * This property is independent of #DhSettings:use-system-fonts.
         */
        variable_font?: string | null
    }

}

interface Settings {

    // Own properties of Devhelp-3.0.Devhelp.Settings

    /**
     * Font for text with fixed width, such as code examples.
     * 
     * This property is independent of #DhSettings:use-system-fonts.
     */
    fixed_font: string | null
    /**
     * Whether books should be grouped by programming language in the UI.
     */
    group_books_by_language: boolean
    /**
     * Whether to use the system default fonts.
     */
    use_system_fonts: boolean
    /**
     * Font for text with variable width.
     * 
     * This property is independent of #DhSettings:use-system-fonts.
     */
    variable_font: string | null

    // Own fields of Devhelp-3.0.Devhelp.Settings

    parent: GObject.Object
    priv: SettingsPrivate

    // Owm methods of Devhelp-3.0.Devhelp.Settings

    /**
     * Binds all the #DhSettings properties to their corresponding #GSettings keys.
     */
    bind_all(): void
    /**
     * Binds the #DhSettings:use-system-fonts, #DhSettings:variable-font and
     * #DhSettings:fixed-font properties to their corresponding #GSettings keys.
     */
    bind_fonts(): void
    /**
     * Binds the #DhSettings:group-books-by-language property to the corresponding
     * #GSettings key.
     */
    bind_group_books_by_language(): void
    /**
     * Tells `settings` to not emit the #DhSettings::books-disabled-changed signal
     * until dh_settings_thaw_books_disabled_changed() is called.
     * 
     * A bit like g_object_freeze_notify(), except that there is no freeze count.
     * 
     * This function is useful if you call dh_settings_set_book_enabled() several
     * times in a row.
     */
    freeze_books_disabled_changed(): void
    /**
     * Warning: you probably want to use the dh_settings_get_selected_fonts()
     * function instead, to take into account the #DhSettings:use-system-fonts
     * property.
     * @returns the value of the #DhSettings:fixed-font property.
     */
    get_fixed_font(): string | null
    get_group_books_by_language(): boolean
    /**
     * If #DhSettings:use-system-fonts is %TRUE, returns the system fonts. Otherwise
     * returns the values of the #DhSettings:variable-font and
     * #DhSettings:fixed-font properties.
     */
    get_selected_fonts(): [ /* variable_font */ string | null, /* fixed_font */ string | null ]
    get_use_system_fonts(): boolean
    /**
     * Warning: you probably want to use the dh_settings_get_selected_fonts()
     * function instead, to take into account the #DhSettings:use-system-fonts
     * property.
     * @returns the value of the #DhSettings:variable-font property.
     */
    get_variable_font(): string | null
    /**
     * Returns whether `book` is enabled according to the "books-disabled" #GSettings
     * key. If the `book` ID is present in "books-disabled", this function returns
     * %FALSE, otherwise %TRUE is returned.
     * @param book a #DhBook.
     * @returns whether @book is enabled.
     */
    is_book_enabled(book: Book): boolean
    /**
     * Modifies the "books-disabled" #GSettings key. It adds or removes the `book` ID
     * from "books-disabled".
     * @param book a #DhBook.
     * @param enabled the new value.
     */
    set_book_enabled(book: Book, enabled: boolean): void
    /**
     * Sets the #DhSettings:fixed-font property.
     * @param fixed_font the new value.
     */
    set_fixed_font(fixed_font: string | null): void
    /**
     * Sets the #DhSettings:group-books-by-language property.
     * @param group_books_by_language the new value.
     */
    set_group_books_by_language(group_books_by_language: boolean): void
    /**
     * Sets the #DhSettings:use-system-fonts property.
     * @param use_system_fonts the new value.
     */
    set_use_system_fonts(use_system_fonts: boolean): void
    /**
     * Sets the #DhSettings:variable-font property.
     * @param variable_font the new value.
     */
    set_variable_font(variable_font: string | null): void
    /**
     * Stops the effect of dh_settings_freeze_books_disabled_changed(), and emits
     * the #DhSettings::books-disabled-changed signal.
     * 
     * A bit like g_object_thaw_notify(), except that there is no freeze count.
     */
    thaw_books_disabled_changed(): void

    // Own virtual methods of Devhelp-3.0.Devhelp.Settings

    vfunc_books_disabled_changed(): void
    vfunc_fonts_changed(): void

    // Own signals of Devhelp-3.0.Devhelp.Settings

    connect(sigName: "books-disabled-changed", callback: Settings.BooksDisabledChangedSignalCallback): number
    connect_after(sigName: "books-disabled-changed", callback: Settings.BooksDisabledChangedSignalCallback): number
    emit(sigName: "books-disabled-changed", ...args: any[]): void
    connect(sigName: "fonts-changed", callback: Settings.FontsChangedSignalCallback): number
    connect_after(sigName: "fonts-changed", callback: Settings.FontsChangedSignalCallback): number
    emit(sigName: "fonts-changed", ...args: any[]): void

    // Class property signals of Devhelp-3.0.Devhelp.Settings

    connect(sigName: "notify::fixed-font", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-font", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-font", ...args: any[]): void
    connect(sigName: "notify::group-books-by-language", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::group-books-by-language", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::group-books-by-language", ...args: any[]): void
    connect(sigName: "notify::use-system-fonts", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-system-fonts", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-system-fonts", ...args: any[]): void
    connect(sigName: "notify::variable-font", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::variable-font", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::variable-font", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Settings extends GObject.Object {

    // Own properties of Devhelp-3.0.Devhelp.Settings

    static name: string
    static $gtype: GObject.GType<Settings>

    // Constructors of Devhelp-3.0.Devhelp.Settings

    constructor(config?: Settings.ConstructorProperties) 
    _init(config?: Settings.ConstructorProperties): void
    /**
     * Gets the default #DhSettings object. It has the default #GSettings paths (see
     * #DhSettingsBuilder) and dh_settings_bind_all() has been called.
     * @returns the default #DhSettings object.
     */
    static get_default(): Settings
}

module SettingsBuilder {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface SettingsBuilder {

    // Own fields of Devhelp-3.0.Devhelp.SettingsBuilder

    parent: GObject.Object
    priv: SettingsBuilderPrivate

    // Owm methods of Devhelp-3.0.Devhelp.SettingsBuilder

    create_object(): Settings
    /**
     * Sets the path for the "contents" schema.
     * 
     * If you don't call this function, the default path for this schema will be
     * used.
     * @param contents_path the path for the "contents" schema.
     */
    set_contents_path(contents_path: string | null): void
    /**
     * Sets the path for the "fonts" schema.
     * 
     * If you don't call this function, the default path for this schema will be
     * used.
     * @param fonts_path the path for the "fonts" schema.
     */
    set_fonts_path(fonts_path: string | null): void

    // Class property signals of Devhelp-3.0.Devhelp.SettingsBuilder

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SettingsBuilder extends GObject.Object {

    // Own properties of Devhelp-3.0.Devhelp.SettingsBuilder

    static name: string
    static $gtype: GObject.GType<SettingsBuilder>

    // Constructors of Devhelp-3.0.Devhelp.SettingsBuilder

    constructor(config?: SettingsBuilder.ConstructorProperties) 
    constructor() 
    static new(): SettingsBuilder
    _init(config?: SettingsBuilder.ConstructorProperties): void
}

module Sidebar {

    // Signal callback interfaces

    /**
     * Signal callback interface for `link-selected`
     */
    interface LinkSelectedSignalCallback {
        ($obj: Sidebar, link: Link): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Grid.ConstructorProperties {

        // Own constructor properties of Devhelp-3.0.Devhelp.Sidebar

        /**
         * The #DhProfile. If set to %NULL, the default profile as returned by
         * dh_profile_get_default() is used.
         */
        profile?: Profile | null
    }

}

interface Sidebar extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own properties of Devhelp-3.0.Devhelp.Sidebar

    /**
     * The #DhProfile. If set to %NULL, the default profile as returned by
     * dh_profile_get_default() is used.
     */
    readonly profile: Profile

    // Own fields of Devhelp-3.0.Devhelp.Sidebar

    parent_instance: Gtk.Grid & GObject.InitiallyUnowned

    // Owm methods of Devhelp-3.0.Devhelp.Sidebar

    get_profile(): Profile
    /**
     * Note: the return value of this function is not necessarily the same as the
     * last #DhLink emitted by the #DhSidebar::link-selected signal. See the
     * documentation of #DhSidebar::link-selected.
     * @returns the currently selected #DhLink in the visible #GtkTreeView of @sidebar, or %NULL if the selection is empty or if a language group row is selected. Unref with dh_link_unref() when no longer needed.
     */
    get_selected_link(): Link | null
    /**
     * Calls dh_book_tree_select_uri().
     * @param uri the URI to select.
     */
    select_uri(uri: string | null): void
    /**
     * Gives the focus to the search entry.
     */
    set_search_focus(): void
    set_search_string(str: string | null): void

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

    // Own virtual methods of Devhelp-3.0.Devhelp.Sidebar

    vfunc_link_selected(link: Link): void

    // Own signals of Devhelp-3.0.Devhelp.Sidebar

    connect(sigName: "link-selected", callback: Sidebar.LinkSelectedSignalCallback): number
    connect_after(sigName: "link-selected", callback: Sidebar.LinkSelectedSignalCallback): number
    emit(sigName: "link-selected", link: Link, ...args: any[]): void

    // Class property signals of Devhelp-3.0.Devhelp.Sidebar

    connect(sigName: "notify::profile", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::profile", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::profile", ...args: any[]): void
    connect(sigName: "notify::baseline-row", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-row", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-row", ...args: any[]): void
    connect(sigName: "notify::column-homogeneous", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-homogeneous", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::column-homogeneous", ...args: any[]): void
    connect(sigName: "notify::column-spacing", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-spacing", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::column-spacing", ...args: any[]): void
    connect(sigName: "notify::row-homogeneous", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-homogeneous", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::row-homogeneous", ...args: any[]): void
    connect(sigName: "notify::row-spacing", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-spacing", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::row-spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Sidebar extends Gtk.Grid {

    // Own properties of Devhelp-3.0.Devhelp.Sidebar

    static name: string
    static $gtype: GObject.GType<Sidebar>

    // Constructors of Devhelp-3.0.Devhelp.Sidebar

    constructor(config?: Sidebar.ConstructorProperties) 
    constructor(book_manager: BookManager | null) 
    static new(book_manager: BookManager | null): Sidebar

    // Overloads of new

    /**
     * Creates a new grid widget.
     * @constructor 
     * @returns the new #GtkGrid
     */
    static new(): Gtk.Grid
    _init(config?: Sidebar.ConstructorProperties): void
    static new2(profile: Profile | null): Sidebar
}

module Tab {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Grid.ConstructorProperties {

        // Own constructor properties of Devhelp-3.0.Devhelp.Tab

        /**
         * The #DhWebView of the tab. If set to %NULL a #DhWebView is created
         * with the default #DhProfile.
         */
        web_view?: WebView | null
    }

}

interface Tab extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own properties of Devhelp-3.0.Devhelp.Tab

    /**
     * The #DhWebView of the tab. If set to %NULL a #DhWebView is created
     * with the default #DhProfile.
     */
    readonly web_view: WebView

    // Own fields of Devhelp-3.0.Devhelp.Tab

    parent: Gtk.Grid & Gtk.Container
    priv: TabPrivate

    // Owm methods of Devhelp-3.0.Devhelp.Tab

    get_web_view(): WebView

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

    // Class property signals of Devhelp-3.0.Devhelp.Tab

    connect(sigName: "notify::web-view", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::web-view", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::web-view", ...args: any[]): void
    connect(sigName: "notify::baseline-row", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-row", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-row", ...args: any[]): void
    connect(sigName: "notify::column-homogeneous", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-homogeneous", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::column-homogeneous", ...args: any[]): void
    connect(sigName: "notify::column-spacing", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-spacing", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::column-spacing", ...args: any[]): void
    connect(sigName: "notify::row-homogeneous", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-homogeneous", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::row-homogeneous", ...args: any[]): void
    connect(sigName: "notify::row-spacing", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-spacing", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::row-spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Tab extends Gtk.Grid {

    // Own properties of Devhelp-3.0.Devhelp.Tab

    static name: string
    static $gtype: GObject.GType<Tab>

    // Constructors of Devhelp-3.0.Devhelp.Tab

    constructor(config?: Tab.ConstructorProperties) 
    constructor(web_view: WebView | null) 
    static new(web_view: WebView | null): Tab

    // Overloads of new

    /**
     * Creates a new grid widget.
     * @constructor 
     * @returns the new #GtkGrid
     */
    static new(): Gtk.Grid
    _init(config?: Tab.ConstructorProperties): void
}

module TabLabel {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Grid.ConstructorProperties {

        // Own constructor properties of Devhelp-3.0.Devhelp.TabLabel

        /**
         * The associated #DhTab. #DhTabLabel has a weak reference to the
         * #DhTab.
         */
        tab?: Tab | null
    }

}

interface TabLabel extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own properties of Devhelp-3.0.Devhelp.TabLabel

    /**
     * The associated #DhTab. #DhTabLabel has a weak reference to the
     * #DhTab.
     */
    readonly tab: Tab

    // Own fields of Devhelp-3.0.Devhelp.TabLabel

    parent: Gtk.Grid & Gtk.Container
    priv: TabLabelPrivate

    // Owm methods of Devhelp-3.0.Devhelp.TabLabel

    get_tab(): Tab | null

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

    // Class property signals of Devhelp-3.0.Devhelp.TabLabel

    connect(sigName: "notify::tab", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tab", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tab", ...args: any[]): void
    connect(sigName: "notify::baseline-row", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-row", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-row", ...args: any[]): void
    connect(sigName: "notify::column-homogeneous", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-homogeneous", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::column-homogeneous", ...args: any[]): void
    connect(sigName: "notify::column-spacing", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-spacing", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::column-spacing", ...args: any[]): void
    connect(sigName: "notify::row-homogeneous", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-homogeneous", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::row-homogeneous", ...args: any[]): void
    connect(sigName: "notify::row-spacing", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-spacing", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::row-spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TabLabel extends Gtk.Grid {

    // Own properties of Devhelp-3.0.Devhelp.TabLabel

    static name: string
    static $gtype: GObject.GType<TabLabel>

    // Constructors of Devhelp-3.0.Devhelp.TabLabel

    constructor(config?: TabLabel.ConstructorProperties) 
    constructor(tab: Tab) 
    static new(tab: Tab): TabLabel

    // Overloads of new

    /**
     * Creates a new grid widget.
     * @constructor 
     * @returns the new #GtkGrid
     */
    static new(): Gtk.Grid
    _init(config?: TabLabel.ConstructorProperties): void
}

module WebView {

    // Signal callback interfaces

    /**
     * Signal callback interface for `open-new-tab`
     */
    interface OpenNewTabSignalCallback {
        ($obj: WebView, uri: string | null): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, WebKit2.WebView.ConstructorProperties {

        // Own constructor properties of Devhelp-3.0.Devhelp.WebView

        /**
         * The #DhProfile. If set to %NULL, the default profile as returned by
         * dh_profile_get_default() is used.
         */
        profile?: Profile | null
    }

}

interface WebView extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Devhelp-3.0.Devhelp.WebView

    /**
     * The #DhProfile. If set to %NULL, the default profile as returned by
     * dh_profile_get_default() is used.
     */
    readonly profile: Profile

    // Own fields of Devhelp-3.0.Devhelp.WebView

    parent: WebKit2.WebView & WebKit2.WebViewBase & Gtk.Container & Gtk.Container
    priv: any

    // Owm methods of Devhelp-3.0.Devhelp.WebView

    can_reset_zoom(): boolean
    can_zoom_in(): boolean
    can_zoom_out(): boolean
    /**
     * An enhanced getter function for the #WebKitWebView:title property: when that
     * property is the empty string or %NULL, this function returns “Empty Page”
     * (translated).
     * @returns the title of @view, suitable for a tab label or window title.
     */
    get_devhelp_title(): string | null
    get_profile(): Profile
    /**
     * Reset the text size to the normal size.
     */
    reset_zoom(): void
    /**
     * Like webkit_find_controller_search_next(), but takes into account whether
     * dh_web_view_set_search_text() has been called.
     */
    search_next(): void
    /**
     * Like webkit_find_controller_search_previous(), but takes into account whether
     * dh_web_view_set_search_text() has been called.
     */
    search_previous(): void
    /**
     * A more convenient API (for Devhelp needs) than #WebKitFindController. If
     * `search_text` is not empty, it calls webkit_find_controller_search() if not
     * already done. If `search_text` is empty or %NULL, it calls
     * webkit_find_controller_search_finish().
     * @param search_text the search string, or %NULL.
     */
    set_search_text(search_text: string | null): void
    /**
     * Makes the text larger.
     */
    zoom_in(): void
    /**
     * Makes the text smaller.
     */
    zoom_out(): void

    // Conflicting methods

    /**
     * Gets the #WebKitSettings currently applied to `web_view`.
     * 
     * If no other #WebKitSettings have been explicitly applied to
     * `web_view` with webkit_web_view_set_settings(), the default
     * #WebKitSettings will be returned. This method always returns
     * a valid #WebKitSettings object.
     * To modify any of the `web_view` settings, you can either create
     * a new #WebKitSettings object with webkit_settings_new(), setting
     * the desired preferences, and then replace the existing `web_view`
     * settings with webkit_web_view_set_settings() or get the existing
     * `web_view` settings and update it directly. #WebKitSettings objects
     * can be shared by multiple #WebKitWebView<!-- -->s, so modifying
     * the settings of a #WebKitWebView would affect other
     * #WebKitWebView<!-- -->s using the same #WebKitSettings.
     * @returns the #WebKitSettings attached to @web_view
     */
    get_settings(): WebKit2.Settings

    // Overloads of get_settings

    /**
     * Gets the settings object holding the settings used for this widget.
     * 
     * Note that this function can only be called when the #GtkWidget
     * is attached to a toplevel, since the settings object is specific
     * to a particular #GdkScreen.
     * @returns the relevant #GtkSettings object
     */
    get_settings(): Gtk.Settings
    /**
     * Gets the settings object holding the settings used for this widget.
     * 
     * Note that this function can only be called when the #GtkWidget
     * is attached to a toplevel, since the settings object is specific
     * to a particular #GdkScreen.
     * @returns the relevant #GtkSettings object
     */
    get_settings(): Gtk.Settings
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

    // Own virtual methods of Devhelp-3.0.Devhelp.WebView

    vfunc_open_new_tab(uri: string | null): void

    // Own signals of Devhelp-3.0.Devhelp.WebView

    connect(sigName: "open-new-tab", callback: WebView.OpenNewTabSignalCallback): number
    connect_after(sigName: "open-new-tab", callback: WebView.OpenNewTabSignalCallback): number
    emit(sigName: "open-new-tab", uri: string | null, ...args: any[]): void

    // Class property signals of Devhelp-3.0.Devhelp.WebView

    connect(sigName: "notify::profile", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::profile", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::profile", ...args: any[]): void
    connect(sigName: "notify::automation-presentation-type", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::automation-presentation-type", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::automation-presentation-type", ...args: any[]): void
    connect(sigName: "notify::camera-capture-state", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::camera-capture-state", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::camera-capture-state", ...args: any[]): void
    connect(sigName: "notify::default-content-security-policy", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-content-security-policy", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-content-security-policy", ...args: any[]): void
    connect(sigName: "notify::display-capture-state", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-capture-state", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display-capture-state", ...args: any[]): void
    connect(sigName: "notify::editable", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editable", ...args: any[]): void
    connect(sigName: "notify::estimated-load-progress", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::estimated-load-progress", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::estimated-load-progress", ...args: any[]): void
    connect(sigName: "notify::favicon", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::favicon", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::favicon", ...args: any[]): void
    connect(sigName: "notify::is-controlled-by-automation", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-controlled-by-automation", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-controlled-by-automation", ...args: any[]): void
    connect(sigName: "notify::is-ephemeral", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-ephemeral", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-ephemeral", ...args: any[]): void
    connect(sigName: "notify::is-loading", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-loading", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-loading", ...args: any[]): void
    connect(sigName: "notify::is-muted", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-muted", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-muted", ...args: any[]): void
    connect(sigName: "notify::is-playing-audio", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-playing-audio", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-playing-audio", ...args: any[]): void
    connect(sigName: "notify::is-web-process-responsive", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-web-process-responsive", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-web-process-responsive", ...args: any[]): void
    connect(sigName: "notify::microphone-capture-state", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::microphone-capture-state", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::microphone-capture-state", ...args: any[]): void
    connect(sigName: "notify::page-id", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::page-id", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::page-id", ...args: any[]): void
    connect(sigName: "notify::related-view", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::related-view", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::related-view", ...args: any[]): void
    connect(sigName: "notify::settings", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::settings", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::settings", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::uri", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: "notify::user-content-manager", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-content-manager", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::user-content-manager", ...args: any[]): void
    connect(sigName: "notify::web-context", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::web-context", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::web-context", ...args: any[]): void
    connect(sigName: "notify::web-extension-mode", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::web-extension-mode", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::web-extension-mode", ...args: any[]): void
    connect(sigName: "notify::website-policies", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::website-policies", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::website-policies", ...args: any[]): void
    connect(sigName: "notify::zoom-level", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::zoom-level", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::zoom-level", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class WebView extends WebKit2.WebView {

    // Own properties of Devhelp-3.0.Devhelp.WebView

    static name: string
    static $gtype: GObject.GType<WebView>

    // Constructors of Devhelp-3.0.Devhelp.WebView

    constructor(config?: WebView.ConstructorProperties) 
    constructor(profile: Profile | null) 
    static new(profile: Profile | null): WebView

    // Overloads of new

    /**
     * Creates a new #WebKitWebView with the default #WebKitWebContext.
     * 
     * Creates a new #WebKitWebView with the default #WebKitWebContext and
     * no #WebKitUserContentManager associated with it.
     * See also webkit_web_view_new_with_context(),
     * webkit_web_view_new_with_user_content_manager(), and
     * webkit_web_view_new_with_settings().
     * @constructor 
     * @returns The newly created #WebKitWebView widget
     */
    static new(): WebKit2.WebView
    _init(config?: WebView.ConstructorProperties): void
}

interface AssistantViewClass {

    // Own fields of Devhelp-3.0.Devhelp.AssistantViewClass

    parent_class: WebKit2.WebViewClass
    padding: any[]
}

abstract class AssistantViewClass {

    // Own properties of Devhelp-3.0.Devhelp.AssistantViewClass

    static name: string
}

interface BookClass {

    // Own fields of Devhelp-3.0.Devhelp.BookClass

    parent_class: GObject.ObjectClass
    padding: any[]
}

abstract class BookClass {

    // Own properties of Devhelp-3.0.Devhelp.BookClass

    static name: string
}

interface BookListBuilderClass {

    // Own fields of Devhelp-3.0.Devhelp.BookListBuilderClass

    parent_class: GObject.ObjectClass
    padding: any[]
}

abstract class BookListBuilderClass {

    // Own properties of Devhelp-3.0.Devhelp.BookListBuilderClass

    static name: string
}

interface BookListBuilderPrivate {
}

class BookListBuilderPrivate {

    // Own properties of Devhelp-3.0.Devhelp.BookListBuilderPrivate

    static name: string
}

interface BookListClass {

    // Own fields of Devhelp-3.0.Devhelp.BookListClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: GObject.ObjectClass
    add_book: (book_list: BookList, book: Book) => void
    remove_book: (book_list: BookList, book: Book) => void
    get_books: (book_list: BookList) => Book[]
}

abstract class BookListClass {

    // Own properties of Devhelp-3.0.Devhelp.BookListClass

    static name: string
}

interface BookListDirectoryClass {

    // Own fields of Devhelp-3.0.Devhelp.BookListDirectoryClass

    parent_class: BookListClass
    padding: any[]
}

abstract class BookListDirectoryClass {

    // Own properties of Devhelp-3.0.Devhelp.BookListDirectoryClass

    static name: string
}

interface BookListDirectoryPrivate {
}

class BookListDirectoryPrivate {

    // Own properties of Devhelp-3.0.Devhelp.BookListDirectoryPrivate

    static name: string
}

interface BookListPrivate {
}

class BookListPrivate {

    // Own properties of Devhelp-3.0.Devhelp.BookListPrivate

    static name: string
}

interface BookManagerClass {

    // Own fields of Devhelp-3.0.Devhelp.BookManagerClass

    parent_class: GObject.ObjectClass
    padding: any[]
}

abstract class BookManagerClass {

    // Own properties of Devhelp-3.0.Devhelp.BookManagerClass

    static name: string
}

interface BookTreeClass {

    // Own fields of Devhelp-3.0.Devhelp.BookTreeClass

    parent_class: Gtk.TreeViewClass
    padding: any[]
}

abstract class BookTreeClass {

    // Own properties of Devhelp-3.0.Devhelp.BookTreeClass

    static name: string
}

interface CompletionClass {

    // Own fields of Devhelp-3.0.Devhelp.CompletionClass

    parent_class: GObject.ObjectClass
    padding: any[]
}

abstract class CompletionClass {

    // Own properties of Devhelp-3.0.Devhelp.CompletionClass

    static name: string
}

interface CompletionPrivate {
}

class CompletionPrivate {

    // Own properties of Devhelp-3.0.Devhelp.CompletionPrivate

    static name: string
}

interface KeywordModelClass {

    // Own fields of Devhelp-3.0.Devhelp.KeywordModelClass

    parent_class: GObject.ObjectClass
    padding: any[]
}

abstract class KeywordModelClass {

    // Own properties of Devhelp-3.0.Devhelp.KeywordModelClass

    static name: string
}

interface Link {

    // Owm methods of Devhelp-3.0.Devhelp.Link

    /**
     * This function permits to know if `link` belongs to a certain page.
     * 
     * `page_id` is usually the HTML filename without the `.html` extension. More
     * generally, `page_id` must be a relative URL (relative to the book base path),
     * without the anchor nor the file extension.
     * 
     * For example if `link` has the relative URL `"DhLink.html#dh-link-ref"`, then
     * this function will return %TRUE if the `page_id` is `"DhLink"`.
     * @param page_id a page ID, i.e. the filename without its extension.
     * @returns whether @link belongs to @page_id.
     */
    belongs_to_page(page_id: string | null): boolean
    /**
     * Compares the links `a` and `b`. This function is used to determine in which
     * order the links should be displayed.
     * @param b a #DhLink.
     * @returns an integer less than zero if @a should appear before @b; zero if there are no preferences; an integer greater than zero if @b should appear before @a.
     */
    compare(b: Link): number
    get_book_id(): string | null
    get_book_title(): string | null
    get_flags(): LinkFlags
    get_link_type(): LinkType
    get_name(): string | null
    /**
     * Gets the `link` URI, by concateneting the book base path with the `link`
     * relative URL.
     * @returns the @link URI, or %NULL if getting the URI failed. Free with g_free() when no longer needed.
     */
    get_uri(): string | null
    match_relative_url(relative_url: string | null): boolean
    /**
     * Increases the reference count of `link`.
     * 
     * Not thread-safe.
     * @returns the @link.
     */
    ref(): Link
    /**
     * Sets the flags of the link.
     * @param flags the new flags of the link.
     */
    set_flags(flags: LinkFlags): void
    /**
     * Decreases the reference count of `link`.
     * 
     * Not thread-safe.
     */
    unref(): void
}

class Link {

    // Own properties of Devhelp-3.0.Devhelp.Link

    static name: string

    // Constructors of Devhelp-3.0.Devhelp.Link

    constructor(type: LinkType, book_link: Link, name: string | null, relative_url: string | null) 
    static new(type: LinkType, book_link: Link, name: string | null, relative_url: string | null): Link
    static new_book(base_path: string | null, book_id: string | null, book_title: string | null, relative_url: string | null): Link
}

interface NotebookClass {

    // Own fields of Devhelp-3.0.Devhelp.NotebookClass

    parent_class: Gtk.NotebookClass
    padding: any[]
}

abstract class NotebookClass {

    // Own properties of Devhelp-3.0.Devhelp.NotebookClass

    static name: string
}

interface NotebookPrivate {
}

class NotebookPrivate {

    // Own properties of Devhelp-3.0.Devhelp.NotebookPrivate

    static name: string
}

interface ProfileBuilderClass {

    // Own fields of Devhelp-3.0.Devhelp.ProfileBuilderClass

    parent_class: GObject.ObjectClass
    padding: any[]
}

abstract class ProfileBuilderClass {

    // Own properties of Devhelp-3.0.Devhelp.ProfileBuilderClass

    static name: string
}

interface ProfileBuilderPrivate {
}

class ProfileBuilderPrivate {

    // Own properties of Devhelp-3.0.Devhelp.ProfileBuilderPrivate

    static name: string
}

interface ProfileClass {

    // Own fields of Devhelp-3.0.Devhelp.ProfileClass

    parent_class: GObject.ObjectClass
    padding: any[]
}

abstract class ProfileClass {

    // Own properties of Devhelp-3.0.Devhelp.ProfileClass

    static name: string
}

interface ProfilePrivate {
}

class ProfilePrivate {

    // Own properties of Devhelp-3.0.Devhelp.ProfilePrivate

    static name: string
}

interface SearchBarClass {

    // Own fields of Devhelp-3.0.Devhelp.SearchBarClass

    parent_class: Gtk.SearchBarClass
    padding: any[]
}

abstract class SearchBarClass {

    // Own properties of Devhelp-3.0.Devhelp.SearchBarClass

    static name: string
}

interface SearchBarPrivate {
}

class SearchBarPrivate {

    // Own properties of Devhelp-3.0.Devhelp.SearchBarPrivate

    static name: string
}

interface SettingsBuilderClass {

    // Own fields of Devhelp-3.0.Devhelp.SettingsBuilderClass

    parent_class: GObject.ObjectClass
    padding: any[]
}

abstract class SettingsBuilderClass {

    // Own properties of Devhelp-3.0.Devhelp.SettingsBuilderClass

    static name: string
}

interface SettingsBuilderPrivate {
}

class SettingsBuilderPrivate {

    // Own properties of Devhelp-3.0.Devhelp.SettingsBuilderPrivate

    static name: string
}

interface SettingsClass {

    // Own fields of Devhelp-3.0.Devhelp.SettingsClass

    parent: GObject.ObjectClass
    books_disabled_changed: (settings: Settings) => void
    fonts_changed: (settings: Settings) => void
    padding: any[]
}

abstract class SettingsClass {

    // Own properties of Devhelp-3.0.Devhelp.SettingsClass

    static name: string
}

interface SettingsPrivate {
}

class SettingsPrivate {

    // Own properties of Devhelp-3.0.Devhelp.SettingsPrivate

    static name: string
}

interface SidebarClass {

    // Own fields of Devhelp-3.0.Devhelp.SidebarClass

    parent_class: Gtk.GridClass
    link_selected: (sidebar: Sidebar, link: Link) => void
    padding: any[]
}

abstract class SidebarClass {

    // Own properties of Devhelp-3.0.Devhelp.SidebarClass

    static name: string
}

interface TabClass {

    // Own fields of Devhelp-3.0.Devhelp.TabClass

    parent_class: Gtk.GridClass
    padding: any[]
}

abstract class TabClass {

    // Own properties of Devhelp-3.0.Devhelp.TabClass

    static name: string
}

interface TabLabelClass {

    // Own fields of Devhelp-3.0.Devhelp.TabLabelClass

    parent_class: Gtk.GridClass
    padding: any[]
}

abstract class TabLabelClass {

    // Own properties of Devhelp-3.0.Devhelp.TabLabelClass

    static name: string
}

interface TabLabelPrivate {
}

class TabLabelPrivate {

    // Own properties of Devhelp-3.0.Devhelp.TabLabelPrivate

    static name: string
}

interface TabPrivate {
}

class TabPrivate {

    // Own properties of Devhelp-3.0.Devhelp.TabPrivate

    static name: string
}

interface WebViewClass {

    // Own fields of Devhelp-3.0.Devhelp.WebViewClass

    parent_class: WebKit2.WebViewClass
    open_new_tab: (view: WebView, uri: string | null) => void
    padding: any[]
}

abstract class WebViewClass {

    // Own properties of Devhelp-3.0.Devhelp.WebViewClass

    static name: string
}

interface WebViewPrivate {
}

class WebViewPrivate {

    // Own properties of Devhelp-3.0.Devhelp.WebViewPrivate

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

export default Devhelp;
// END