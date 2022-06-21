// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * PanelApplet-4.0
 */

import type * as Gjs from './Gjs';
import type xlib from './xlib-2.0';
import type cairo from './cairo-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Gtk from './Gtk-3.0';
import type Gdk from './Gdk-3.0';
import type Gio from './Gio-2.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type GModule from './GModule-2.0';
import type Atk from './Atk-1.0';
import type GConf from './GConf-2.0';

export namespace PanelApplet {

/**
 * Type defining the orientation of the applet. The values may seem backward
 * (e.g. %PANEL_APPLET_ORIENT_RIGHT means the panel is on the left side), but
 * this represents the direction the applet is oriented to.
 */
enum AppletOrient {
    UP,
    DOWN,
    LEFT,
    RIGHT,
}
/**
 * Flags to be used with panel_applet_get_flags()/panel_applet_set_flags(), to
 * indicate to the panel a specific behavior requested by the #PanelApplet.
 * @bitfield 
 */
enum AppletFlags {
    FLAGS_NONE,
    EXPAND_MAJOR,
    EXPAND_MINOR,
    HAS_HANDLE,
}
const APPLET_FLAGS_ALL: number
/**
 * The type used for callbacks after. The callback will usually check that `iid`
 * is a valid applet type identifier for the applet factory, and will then fill
 * `applet` with widgets, connect to signals, etc.
 * @callback 
 * @param applet a newly-created #PanelApplet.
 * @param iid identifier of the requested applet type.
 */
interface AppletFactoryCallback {
    (applet: Applet, iid: string): boolean
}
interface Applet_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.EventBox_ConstructProps {

    // Own constructor properties of PanelApplet-4.0.PanelApplet.Applet

    /**
     * The #PanelAppletFlags of the applet.
     */
    flags?: number | null
    /**
     * Whether the panel the applet is on is locked down.
     */
    locked_down?: boolean | null
    /**
     * The #PanelAppletOrient of the applet.
     * 
     * This property gets set when the applet gets embedded, and can change
     * when the panel position changes.
     */
    orient?: number | null
    /**
     * The GConf path to the per-instance settings of the applet.
     * 
     * This property gets set when the applet gets embedded.
     */
    prefs_key?: string | null
    /**
     * The GSettings path to the per-instance settings of the applet.
     * 
     * This property gets set when the applet gets embedded.
     */
    settings_path?: string | null
    /**
     * The size of the panel the applet is on. For a horizontal panel, the
     * size if the height of the panel; for a vertical panel, the size is
     * the width of the panel.
     * 
     * This property gets set when the applet gets embedded, and can change
     * when the panel size changes.
     */
    size?: number | null
    /**
     * The size hints set for the applet. See panel_applet_set_size_hints().
     */
    size_hints?: object | null
}

/**
 * Signal callback interface for `change-background`
 */
interface Applet_ChangeBackgroundSignalCallback {
    ($obj: Applet, pattern: cairo.Pattern): void
}

/**
 * Signal callback interface for `change-orient`
 */
interface Applet_ChangeOrientSignalCallback {
    ($obj: Applet, orient: number): void
}

/**
 * Signal callback interface for `change-size`
 */
interface Applet_ChangeSizeSignalCallback {
    ($obj: Applet, size: number): void
}


interface Applet extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of PanelApplet-4.0.PanelApplet.Applet

    /**
     * The #PanelAppletFlags of the applet.
     */
    flags: number
    /**
     * Whether the panel the applet is on is locked down.
     */
    locked_down: boolean
    /**
     * The #PanelAppletOrient of the applet.
     * 
     * This property gets set when the applet gets embedded, and can change
     * when the panel position changes.
     */
    orient: number
    /**
     * The GConf path to the per-instance settings of the applet.
     * 
     * This property gets set when the applet gets embedded.
     */
    prefs_key: string
    /**
     * The GSettings path to the per-instance settings of the applet.
     * 
     * This property gets set when the applet gets embedded.
     */
    settings_path: string
    /**
     * The size of the panel the applet is on. For a horizontal panel, the
     * size if the height of the panel; for a vertical panel, the size is
     * the width of the panel.
     * 
     * This property gets set when the applet gets embedded, and can change
     * when the panel size changes.
     */
    size: number
    /**
     * The size hints set for the applet. See panel_applet_set_size_hints().
     */
    size_hints: object

    // Own fields of PanelApplet-4.0.PanelApplet.Applet

    event_box: Gtk.EventBox

    // Owm methods of PanelApplet-4.0.PanelApplet.Applet

    /**
     * Associates the per-instance GConf directory of `applet` to the schemas
     * defined in `schema_dir`. This must be called if the applet will save
     * per-instance settings, to ensure that each key in the per-instance GConf
     * directory has a defined type, sane default and documentation.
     * @param schema_dir a GConf path of a schema directory.
     */
    add_preferences(schema_dir: string): void
    /**
     * Convenience wrapper around gconf_client_get_bool() to get the value of `key`
     * in the per-instance GConf directory of `applet`.
     * @param key a GConf key name.
     */
    gconf_get_bool(key: string): boolean
    /**
     * Convenience wrapper around gconf_client_get_float() to get the value of `key`
     * in the per-instance GConf directory of `applet`.
     * @param key a GConf key name.
     */
    gconf_get_float(key: string): number
    /**
     * Returns the full GConf path of `key,` in the per-instance GConf directory of
     * `applet`. The string should be freed by the caller.
     * @param key a GConf key name.
     */
    gconf_get_full_key(key: string): string
    /**
     * Convenience wrapper around gconf_client_get_int() to get the value of `key`
     * in the per-instance GConf directory of `applet`.
     * @param key a GConf key name.
     */
    gconf_get_int(key: string): number
    /**
     * Convenience wrapper around gconf_client_get_string() to get the value of `key`
     * in the per-instance GConf directory of `applet`.
     * @param key a GConf key name.
     */
    gconf_get_string(key: string): string
    /**
     * Convenience wrapper around gconf_client_get_value() to get the value of `key`
     * in the per-instance GConf directory of `applet`.
     * @param key a GConf key name.
     */
    gconf_get_value(key: string): GConf.Value
    /**
     * Convenience wrapper around gconf_client_set_bool() to update `key` in the
     * per-instance GConf directory of `applet`.
     * @param key a GConf key name.
     * @param the_bool new value for `key`.
     */
    gconf_set_bool(key: string, the_bool: boolean): void
    /**
     * Convenience wrapper around gconf_client_set_float() to update `key` in the
     * per-instance GConf directory of `applet`.
     * @param key a GConf key name.
     * @param the_float new value for `key`.
     */
    gconf_set_float(key: string, the_float: number): void
    /**
     * Convenience wrapper around gconf_client_set_int() to update `key` in the
     * per-instance GConf directory of `applet`.
     * @param key a GConf key name.
     * @param the_int new value for `key`.
     */
    gconf_set_int(key: string, the_int: number): void
    /**
     * Convenience wrapper around gconf_client_set_string() to update `key` in the
     * per-instance GConf directory of `applet`.
     * @param key a GConf key name.
     * @param the_string new value for `key`.
     */
    gconf_set_string(key: string, the_string: string): void
    /**
     * Convenience wrapper around gconf_client_set_value() to update `key` in the
     * per-instance GConf directory of `applet`.
     * @param key a GConf key name.
     * @param value new value for `key`.
     */
    gconf_set_value(key: string, value: GConf.Value): void
    /**
     * Gets the background pattern for `applet,` or %NULL if there is none.
     */
    get_background(): cairo.Pattern
    /**
     * Gets the #PanelAppletFlags of `applet`.
     */
    get_flags(): AppletFlags
    /**
     * Gets whether the panel `applet` is on is locked down or not. A locked down
     * applet should not allow any change to its configuration.
     */
    get_locked_down(): boolean
    /**
     * Gets the #PanelAppletOrient of `applet`.
     */
    get_orient(): AppletOrient
    /**
     * Gets the GConf path to the per-instance settings of `applet`.
     */
    get_preferences_key(): string
    /**
     * Gets the size of the panel `applet` is on. For a horizontal panel, the
     * size if the height of the panel; for a vertical panel, the size is the width
     * of the panel.
     */
    get_size(): number
    /**
     * Requests focus for `applet`. There is no guarantee that `applet` will
     * successfully get focus after that call.
     * @param timestamp the timestamp of the user interaction (typically a button or key press event) which triggered this call.
     */
    request_focus(timestamp: number): void
    /**
     * Configure #PanelApplet to automatically draw the background of the applet on
     * `widget`. It is generally enough to call this function with `applet` as
     * `widget`.
     * @param widget a #GtkWidget.
     */
    set_background_widget(widget: Gtk.Widget): void
    /**
     * Sets the #PanelAppletFlags of `applet`. Most of the time, at least
     * %PANEL_APPLET_EXPAND_MINOR should be used.
     * @param flags #PanelAppletFlags to use for `applet`.
     */
    set_flags(flags: AppletFlags): void
    /**
     * Give hints to the panel about sizes `applet` is comfortable with. This is
     * generally useful for applets that can take a lot of space, in case the panel
     * gets full and needs to restrict the size of some applets.
     * 
     * `size_hints` should have an even number of sizes. It is an array of (max,
     * min) pairs where min(i) > max(i + 1).
     * 
     * `base_size` will be added to all sizes in `size_hints,` and is therefore a way
     * to guarantee a minimum size to `applet`.
     * 
     * The panel will try to allocate a size that is acceptable to `applet,` i.e. in
     * one of the (`base_size` + max, `base_size` + min) ranges.
     * 
     * %PANEL_APPLET_EXPAND_MAJOR must be set for `applet` to use size hints.
     * @param size_hints array of sizes.
     * @param n_elements length of `size_hints`.
     * @param base_size base size of the applet.
     */
    set_size_hints(size_hints: number, n_elements: number, base_size: number): void
    /**
     * Sets up the context menu of `applet`. `xml` is a #GtkUIManager UI definition,
     * describing how to display the menu items. `action_group` contains the
     * various #GtkAction that are referenced in `xml`.
     * 
     * See also the <link linkend="getting-started.context-menu">Context
     * Menu</link> section.
     * @param xml a menu XML string.
     * @param action_group a #GtkActionGroup.
     */
    setup_menu(xml: string, action_group: Gtk.ActionGroup): void
    /**
     * Sets up the context menu of `applet`. `filename` is the path to a menu XML
     * file, containing a #GtkUIManager UI definition that describes how to display
     * the menu items. `action_group` contains the various #GtkAction that
     * are referenced in `xml`.
     * 
     * See also the <link linkend="getting-started.context-menu">Context
     * Menu</link> section.
     * @param filename path to a menu XML file.
     * @param action_group a #GtkActionGroup.
     */
    setup_menu_from_file(filename: string, action_group: Gtk.ActionGroup): void
    /**
     * Sets up the context menu of `applet`. `filename` is a resource path to a menu
     * XML file, containing a #GtkUIManager UI definition that describes how to
     * display the menu items. `action_group` contains the various #GtkAction that
     * are referenced in `xml`.
     * 
     * See also the <link linkend="getting-started.context-menu">Context
     * Menu</link> section.
     * @param resource_path a resource path
     * @param action_group a #GtkActionGroup.
     */
    setup_menu_from_resource(resource_path: string, action_group: Gtk.ActionGroup): void

    // Conflicting methods

    child_notify(...args: any[]): any

    // Own virtual methods of PanelApplet-4.0.PanelApplet.Applet

    vfunc_change_background(pattern: cairo.Pattern): void
    vfunc_change_orient(orient: AppletOrient): void
    vfunc_change_size(size: number): void
    vfunc_move_focus_out_of_applet(direction: Gtk.DirectionType): void

    // Own signals of PanelApplet-4.0.PanelApplet.Applet

    connect(sigName: "change-background", callback: Applet_ChangeBackgroundSignalCallback): number
    connect_after(sigName: "change-background", callback: Applet_ChangeBackgroundSignalCallback): number
    emit(sigName: "change-background", pattern: cairo.Pattern, ...args: any[]): void
    connect(sigName: "change-orient", callback: Applet_ChangeOrientSignalCallback): number
    connect_after(sigName: "change-orient", callback: Applet_ChangeOrientSignalCallback): number
    emit(sigName: "change-orient", orient: number, ...args: any[]): void
    connect(sigName: "change-size", callback: Applet_ChangeSizeSignalCallback): number
    connect_after(sigName: "change-size", callback: Applet_ChangeSizeSignalCallback): number
    emit(sigName: "change-size", size: number, ...args: any[]): void
    connect(sigName: "move-focus-out-of-applet", callback: (...args: any[]) => void): number
    connect_after(sigName: "move-focus-out-of-applet", callback: (...args: any[]) => void): number
    emit(sigName: "move-focus-out-of-applet", direction: Gtk.DirectionType, ...args: any[]): void

    // Class property signals of PanelApplet-4.0.PanelApplet.Applet

    connect(sigName: "notify::flags", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::flags", ...args: any[]): void
    connect(sigName: "notify::locked-down", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locked-down", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::locked-down", ...args: any[]): void
    connect(sigName: "notify::orient", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orient", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orient", ...args: any[]): void
    connect(sigName: "notify::prefs-key", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefs-key", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::prefs-key", ...args: any[]): void
    connect(sigName: "notify::settings-path", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::settings-path", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::settings-path", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::size-hints", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size-hints", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size-hints", ...args: any[]): void
    connect(sigName: "notify::above-child", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::above-child", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::above-child", ...args: any[]): void
    connect(sigName: "notify::visible-window", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible-window", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible-window", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Applet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Applet extends Gtk.EventBox {

    // Own properties of PanelApplet-4.0.PanelApplet.Applet

    static name: string
    static $gtype: GObject.GType<Applet>

    // Constructors of PanelApplet-4.0.PanelApplet.Applet

    constructor(config?: Applet_ConstructProps) 
    _init(config?: Applet_ConstructProps): void
    /**
     * Creates the applet factory for `factory_id,` so that the factory can create
     * instances of the applet types it is associated with.
     * 
     * Applet instances created by the applet factory will use `applet_type` as
     * GType. Unless you subclass #PanelApplet, you should use %PANEL_TYPE_APPLET
     * as `applet_type`.
     * 
     * On creation of the applet instances, `callback` is called to setup the
     * applet. If `callback` returns %FALSE, the creation of the applet instance is
     * cancelled.
     * 
     * If using C, it is recommended to use #PANEL_APPLET_OUT_PROCESS_FACTORY
     * instead as it will create a main() function for you.
     * 
     * It can only be used once, and is incompatible with the use of
     * %PANEL_APPLET_IN_PROCESS_FACTORY and %PANEL_APPLET_OUT_PROCESS_FACTORY.
     * @param factory_id identifier of an applet factory.
     * @param applet_type GType of the applet this factory creates.
     * @param callback callback to be called when a new applet is created.
     */
    static factory_main(factory_id: string, applet_type: GObject.GType, callback: AppletFactoryCallback): number
}

interface AppletClass {

    // Own fields of PanelApplet-4.0.PanelApplet.AppletClass

    event_box_class: Gtk.EventBoxClass
    change_orient: (applet: Applet, orient: AppletOrient) => void
    change_size: (applet: Applet, size: number) => void
    change_background: (applet: Applet, pattern: cairo.Pattern) => void
    move_focus_out_of_applet: (frame: Applet, direction: Gtk.DirectionType) => void
}

abstract class AppletClass {

    // Own properties of PanelApplet-4.0.PanelApplet.AppletClass

    static name: string
}

interface AppletPrivate {
}

class AppletPrivate {

    // Own properties of PanelApplet-4.0.PanelApplet.AppletPrivate

    static name: string
}

}
export default PanelApplet;