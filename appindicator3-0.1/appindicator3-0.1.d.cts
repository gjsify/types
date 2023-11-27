
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './appindicator3-0.1-ambient.d.ts';
import './appindicator3-0.1-import.d.ts';
/**
 * AppIndicator3-0.1
 */

import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from '@girs/cairo-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Atk from '@girs/atk-1.0';

/**
 * The category provides grouping for the indicators so that
 * users can find indicators that are similar together.
 */
export enum IndicatorCategory {
    /**
     * The indicator is used to display the status of the application.
     */
    APPLICATION_STATUS,
    /**
     * The application is used for communication with other people.
     */
    COMMUNICATIONS,
    /**
     * A system indicator relating to something in the user's system.
     */
    SYSTEM_SERVICES,
    /**
     * An indicator relating to the user's hardware.
     */
    HARDWARE,
    /**
     * Something not defined in this enum, please don't use unless you really need it.
     */
    OTHER,
}
/**
 * These are the states that the indicator can be on in
 * the user's panel.  The indicator by default starts
 * in the state `APP_INDICATOR_STATUS_PASSIVE` and can be
 * shown by setting it to `APP_INDICATOR_STATUS_ACTIVE`.
 */
export enum IndicatorStatus {
    /**
     * The indicator should not be shown to the user.
     */
    PASSIVE,
    /**
     * The indicator should be shown in it's default state.
     */
    ACTIVE,
    /**
     * The indicator should show it's attention icon.
     */
    ATTENTION,
}
/**
 * String identifier for the #AppIndicator::connection-changed signal.
 */
export const INDICATOR_SIGNAL_CONNECTION_CHANGED: string | null
/**
 * String identifier for the #AppIndicator::new-attention-icon signal.
 */
export const INDICATOR_SIGNAL_NEW_ATTENTION_ICON: string | null
/**
 * String identifier for the #AppIndicator::new-icon signal.
 */
export const INDICATOR_SIGNAL_NEW_ICON: string | null
/**
 * String identifier for the #AppIndicator::new-icon-theme-path signal.
 */
export const INDICATOR_SIGNAL_NEW_ICON_THEME_PATH: string | null
/**
 * String identifier for the #AppIndicator::new-label signal.
 */
export const INDICATOR_SIGNAL_NEW_LABEL: string | null
/**
 * String identifier for the #AppIndicator::new-status signal.
 */
export const INDICATOR_SIGNAL_NEW_STATUS: string | null
/**
 * String identifier for the #AppIndicator::scroll-event signal.
 */
export const INDICATOR_SIGNAL_SCROLL_EVENT: string | null
export module Indicator {

    // Signal callback interfaces

    /**
     * Signal callback interface for `connection-changed`
     */
    export interface ConnectionChangedSignalCallback {
        ($obj: Indicator, arg1: boolean): void
    }

    /**
     * Signal callback interface for `new-attention-icon`
     */
    export interface NewAttentionIconSignalCallback {
        ($obj: Indicator): void
    }

    /**
     * Signal callback interface for `new-icon`
     */
    export interface NewIconSignalCallback {
        ($obj: Indicator): void
    }

    /**
     * Signal callback interface for `new-icon-theme-path`
     */
    export interface NewIconThemePathSignalCallback {
        ($obj: Indicator, object: string | null): void
    }

    /**
     * Signal callback interface for `new-label`
     */
    export interface NewLabelSignalCallback {
        ($obj: Indicator, object: string | null, p0: string | null): void
    }

    /**
     * Signal callback interface for `new-status`
     */
    export interface NewStatusSignalCallback {
        ($obj: Indicator, arg1: string | null): void
    }

    /**
     * Signal callback interface for `scroll-event`
     */
    export interface ScrollEventSignalCallback {
        ($obj: Indicator, arg1: number, arg2: Gdk.ScrollDirection): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of AppIndicator3-0.1.AppIndicator3.Indicator

        /**
         * If the indicator sets it's status to %APP_INDICATOR_STATUS_ATTENTION
         * then this textual description of the icon shown.
         */
        attention_icon_desc?: string | null
        /**
         * If the indicator sets it's status to %APP_INDICATOR_STATUS_ATTENTION
         * then this icon is shown.
         */
        attention_icon_name?: string | null
        /**
         * The type of indicator that this represents.  Please don't use 'Other'.
         * Defaults to 'ApplicationStatus'.
         */
        category?: string | null
        /**
         * The description of the regular icon that is shown for the indicator.
         */
        icon_desc?: string | null
        /**
         * The name of the regular icon that is shown for the indicator.
         */
        icon_name?: string | null
        /**
         * An additional place to look for icon names that may be installed by the
         * application.
         */
        icon_theme_path?: string | null
        /**
         * The ID for this indicator, which should be unique, but used consistently
         * by this program and its indicator.
         */
        id?: string | null
        /**
         * A label that can be shown next to the string in the application
         * indicator.  The label will not be shown unless there is an icon
         * as well.  The label is useful for numerical and other frequently
         * updated information.  In general, it shouldn't be shown unless a
         * user requests it as it can take up a significant amount of space
         * on the user's panel.  This may not be shown in all visualizations.
         */
        label?: string | null
        /**
         * An optional string to provide guidance to the panel on how big
         * the #AppIndicator:label string could get.  If this is set correctly
         * then the panel should never 'jiggle' as the string adjusts through
         * out the range of options.  For instance, if you were providing a
         * percentage like "54% thrust" in #AppIndicator:label you'd want to
         * set this string to "100% thrust" to ensure space when Scotty can
         * get you enough power.
         */
        label_guide?: string | null
        /**
         * The ordering index is an odd parameter, and if you think you don't need
         * it you're probably right.  In general, the application indicator try
         * to place the applications in a recreatable place taking into account
         * which category they're in to try and group them.  But, there are some
         * cases where you'd want to ensure indicators are next to each other.
         * To do that you can override the generated ordering index and replace it
         * with a new one.  Again, you probably don't want to be doing this, but
         * in case you do, this is the way.
         */
        ordering_index?: number | null
        /**
         * Whether the indicator is shown or requests attention. Defaults to
         * 'Passive'.
         */
        status?: string | null
        /**
         * Provides a way to refer to this application indicator in a human
         * readable form.  This is used in the Unity desktop in the HUD as
         * the first part of the menu entries to distinguish them from the
         * focused application's entries.
         */
        title?: string | null
        /**
         * If the indicator sets it's status to %APP_INDICATOR_STATUS_ATTENTION
         * then this textual description of the icon shown.
         */
        attentionIconDesc?: string | null
        /**
         * If the indicator sets it's status to %APP_INDICATOR_STATUS_ATTENTION
         * then this icon is shown.
         */
        attentionIconName?: string | null
        /**
         * The description of the regular icon that is shown for the indicator.
         */
        iconDesc?: string | null
        /**
         * The name of the regular icon that is shown for the indicator.
         */
        iconName?: string | null
        /**
         * An additional place to look for icon names that may be installed by the
         * application.
         */
        iconThemePath?: string | null
        /**
         * An optional string to provide guidance to the panel on how big
         * the #AppIndicator:label string could get.  If this is set correctly
         * then the panel should never 'jiggle' as the string adjusts through
         * out the range of options.  For instance, if you were providing a
         * percentage like "54% thrust" in #AppIndicator:label you'd want to
         * set this string to "100% thrust" to ensure space when Scotty can
         * get you enough power.
         */
        labelGuide?: string | null
        /**
         * The ordering index is an odd parameter, and if you think you don't need
         * it you're probably right.  In general, the application indicator try
         * to place the applications in a recreatable place taking into account
         * which category they're in to try and group them.  But, there are some
         * cases where you'd want to ensure indicators are next to each other.
         * To do that you can override the generated ordering index and replace it
         * with a new one.  Again, you probably don't want to be doing this, but
         * in case you do, this is the way.
         */
        orderingIndex?: number | null
    }

}

export interface Indicator {

    // Own properties of AppIndicator3-0.1.AppIndicator3.Indicator

    /**
     * If the indicator sets it's status to %APP_INDICATOR_STATUS_ATTENTION
     * then this textual description of the icon shown.
     */
    attention_icon_desc: string | null
    /**
     * If the indicator sets it's status to %APP_INDICATOR_STATUS_ATTENTION
     * then this textual description of the icon shown.
     */
    attentionIconDesc: string | null
    /**
     * If the indicator sets it's status to %APP_INDICATOR_STATUS_ATTENTION
     * then this icon is shown.
     */
    attention_icon_name: string | null
    /**
     * If the indicator sets it's status to %APP_INDICATOR_STATUS_ATTENTION
     * then this icon is shown.
     */
    attentionIconName: string | null
    /**
     * The type of indicator that this represents.  Please don't use 'Other'.
     * Defaults to 'ApplicationStatus'.
     */
    readonly category: string | null
    /**
     * Pretty simple, %TRUE if we have a reasonable expectation of being
     * displayed through this object. You should hide your TrayIcon if so.
     */
    readonly connected: boolean
    /**
     * The description of the regular icon that is shown for the indicator.
     */
    icon_desc: string | null
    /**
     * The description of the regular icon that is shown for the indicator.
     */
    iconDesc: string | null
    /**
     * The name of the regular icon that is shown for the indicator.
     */
    icon_name: string | null
    /**
     * The name of the regular icon that is shown for the indicator.
     */
    iconName: string | null
    /**
     * An additional place to look for icon names that may be installed by the
     * application.
     */
    icon_theme_path: string | null
    /**
     * An additional place to look for icon names that may be installed by the
     * application.
     */
    iconThemePath: string | null
    /**
     * The ID for this indicator, which should be unique, but used consistently
     * by this program and its indicator.
     */
    readonly id: string | null
    /**
     * A label that can be shown next to the string in the application
     * indicator.  The label will not be shown unless there is an icon
     * as well.  The label is useful for numerical and other frequently
     * updated information.  In general, it shouldn't be shown unless a
     * user requests it as it can take up a significant amount of space
     * on the user's panel.  This may not be shown in all visualizations.
     */
    label: string | null
    /**
     * An optional string to provide guidance to the panel on how big
     * the #AppIndicator:label string could get.  If this is set correctly
     * then the panel should never 'jiggle' as the string adjusts through
     * out the range of options.  For instance, if you were providing a
     * percentage like "54% thrust" in #AppIndicator:label you'd want to
     * set this string to "100% thrust" to ensure space when Scotty can
     * get you enough power.
     */
    label_guide: string | null
    /**
     * An optional string to provide guidance to the panel on how big
     * the #AppIndicator:label string could get.  If this is set correctly
     * then the panel should never 'jiggle' as the string adjusts through
     * out the range of options.  For instance, if you were providing a
     * percentage like "54% thrust" in #AppIndicator:label you'd want to
     * set this string to "100% thrust" to ensure space when Scotty can
     * get you enough power.
     */
    labelGuide: string | null
    /**
     * The ordering index is an odd parameter, and if you think you don't need
     * it you're probably right.  In general, the application indicator try
     * to place the applications in a recreatable place taking into account
     * which category they're in to try and group them.  But, there are some
     * cases where you'd want to ensure indicators are next to each other.
     * To do that you can override the generated ordering index and replace it
     * with a new one.  Again, you probably don't want to be doing this, but
     * in case you do, this is the way.
     */
    ordering_index: number
    /**
     * The ordering index is an odd parameter, and if you think you don't need
     * it you're probably right.  In general, the application indicator try
     * to place the applications in a recreatable place taking into account
     * which category they're in to try and group them.  But, there are some
     * cases where you'd want to ensure indicators are next to each other.
     * To do that you can override the generated ordering index and replace it
     * with a new one.  Again, you probably don't want to be doing this, but
     * in case you do, this is the way.
     */
    orderingIndex: number
    /**
     * Whether the indicator is shown or requests attention. Defaults to
     * 'Passive'.
     */
    status: string | null
    /**
     * Provides a way to refer to this application indicator in a human
     * readable form.  This is used in the Unity desktop in the HUD as
     * the first part of the menu entries to distinguish them from the
     * focused application's entries.
     */
    title: string | null

    // Own fields of AppIndicator3-0.1.AppIndicator3.Indicator

    /**
     * Parent object.
     * @field 
     */
    parent: GObject.Object
    /**
     * Internal data.
     * @field 
     */
    priv: IndicatorPrivate

    // Owm methods of AppIndicator3-0.1.AppIndicator3.Indicator

    /**
     * This function allows for building the Application Indicator menu
     * from a static desktop file.
     * @param desktop_file A path to the desktop file to build the menu from
     * @param desktop_profile Which entries should be used from the desktop file
     */
    build_menu_from_desktop(desktop_file: string | null, desktop_profile: string | null): void
    /**
     * Wrapper function for property #AppIndicator:attention-icon-name.
     * @returns The current attention icon name.
     */
    get_attention_icon(): string | null
    /**
     * Wrapper function for property #AppIndicator:attention-icon-desc.
     * @returns The current attention icon description.
     */
    get_attention_icon_desc(): string | null
    /**
     * Wrapper function for property #AppIndicator:category.
     * @returns The current category.
     */
    get_category(): IndicatorCategory
    /**
     * Wrapper function for property #AppIndicator:icon-name.
     * @returns The current icon name.
     */
    get_icon(): string | null
    /**
     * Wrapper function for property #AppIndicator:icon-desc.
     * @returns The current icon description.
     */
    get_icon_desc(): string | null
    /**
     * Wrapper function for property #AppIndicator:icon-theme-path.
     * @returns The current icon theme path.
     */
    get_icon_theme_path(): string | null
    /**
     * Wrapper function for property #AppIndicator:id.
     * @returns The current ID
     */
    get_id(): string | null
    /**
     * Wrapper function for property #AppIndicator:label.
     * @returns The current label.
     */
    get_label(): string | null
    /**
     * Wrapper function for property #AppIndicator:label-guide.
     * @returns The current label guide.
     */
    get_label_guide(): string | null
    /**
     * Gets the menu being used for this application indicator.
     * Wrapper function for property #AppIndicator:menu.
     * @returns A #GtkMenu object or %NULL if one hasn't been set.
     */
    get_menu(): Gtk.Menu
    /**
     * Wrapper function for property #AppIndicator:ordering-index.
     * @returns The current ordering index.
     */
    get_ordering_index(): number
    /**
     * Gets the menuitem being called on secondary-activate event.
     * @returns A #GtkWidget object or %NULL if none has been set.
     */
    get_secondary_activate_target(): Gtk.Widget
    /**
     * Wrapper function for property #AppIndicator:status.
     * @returns The current status.
     */
    get_status(): IndicatorStatus
    /**
     * Gets the title of the application indicator.  See the function
     * app_indicator_set_title() for information on the title.
     * @returns The current title.
     */
    get_title(): string | null
    /**
     * Wrapper for app_indicator_set_attention_icon_full() with a NULL
     * description.
     * @param icon_name The name of the attention icon to set for this indicator
     */
    set_attention_icon(icon_name: string | null): void
    /**
     * Wrapper function for property #AppIndicator:attention-icon-name.
     * @param icon_name The name of the attention icon to set for this indicator
     * @param icon_desc A textual description of the icon
     */
    set_attention_icon_full(icon_name: string | null, icon_desc: string | null): void
    /**
     * Wrapper function for app_indicator_set_icon_full() with a NULL
     * description.
     * @param icon_name The icon name to set.
     */
    set_icon(icon_name: string | null): void
    /**
     * Sets the default icon to use when the status is active but
     * not set to attention.  In most cases, this should be the
     * application icon for the program.
     * 
     * Wrapper function for property #AppIndicator:icon-name and
     * #AppIndicator::icon-desc.
     * @param icon_name The icon name to set.
     * @param icon_desc A textual description of the icon for accessibility
     */
    set_icon_full(icon_name: string | null, icon_desc: string | null): void
    /**
     * Sets the path to use when searching for icons.
     * @param icon_theme_path The icon theme path to set.
     */
    set_icon_theme_path(icon_theme_path: string | null): void
    /**
     * This is a wrapper function for the #AppIndicator:label and
     * #AppIndicator:guide properties.  This function can take #NULL
     * as either `label` or `guide` and will clear the entries.
     * @param label The label to show next to the icon.
     * @param guide A guide to size the label correctly.
     */
    set_label(label: string | null, guide: string | null): void
    /**
     * Sets the menu that should be shown when the Application Indicator
     * is clicked on in the panel.  An application indicator will not
     * be rendered unless it has a menu.
     * 
     * Wrapper function for property #AppIndicator:menu.
     * @param menu A #GtkMenu to set
     */
    set_menu(menu: Gtk.Menu | null): void
    /**
     * Sets the ordering index for the app indicator which effects the
     * placement of it on the panel.  For almost all app indicator
     * this is not the function you're looking for.
     * 
     * Wrapper function for property #AppIndicator:ordering-index.
     * @param ordering_index A value for the ordering of this app indicator
     */
    set_ordering_index(ordering_index: number): void
    /**
     * Set the `menuitem` to be activated when a secondary activation event (i.e. a
     * middle-click) is emitted over the #AppIndicator icon/label.
     * 
     * The `menuitem` can be also a complex #GtkWidget, but to get activated when
     * a secondary activation occurs in the #Appindicator, it must be a visible and
     * active child (or inner-child) of the #AppIndicator:menu.
     * 
     * Setting `menuitem` to %NULL causes to disable this feature.
     * @param menuitem A #GtkWidget to be activated on secondary activation
     */
    set_secondary_activate_target(menuitem: Gtk.Widget | null): void
    /**
     * Wrapper function for property #AppIndicator:status.
     * @param status The status to set for this indicator
     */
    set_status(status: IndicatorStatus): void
    /**
     * Sets the title of the application indicator, or how it should be referred
     * in a human readable form.  This string should be UTF-8 and localized as it
     * expected that users will set it.
     * 
     * In the Unity desktop the most prominent place that this is show will be
     * in the HUD.  HUD listings for this application indicator will start with
     * the title as the first part of the line for the menu items.
     * 
     * Setting `title` to %NULL removes the title.
     * @param title Title of the app indicator
     */
    set_title(title: string | null): void

    // Own virtual methods of AppIndicator3-0.1.AppIndicator3.Indicator

    vfunc_connection_changed(connected: boolean): void
    vfunc_new_attention_icon(): void
    vfunc_new_icon(): void
    vfunc_new_icon_theme_path(icon_theme_path: string | null): void
    vfunc_new_label(label: string | null, guide: string | null): void
    vfunc_new_status(status: string | null): void
    vfunc_scroll_event(delta: number, direction: Gdk.ScrollDirection): void
    vfunc_unfallback(status_icon: Gtk.StatusIcon): void

    // Own signals of AppIndicator3-0.1.AppIndicator3.Indicator

    connect(sigName: "connection-changed", callback: Indicator.ConnectionChangedSignalCallback): number
    connect_after(sigName: "connection-changed", callback: Indicator.ConnectionChangedSignalCallback): number
    emit(sigName: "connection-changed", arg1: boolean, ...args: any[]): void
    connect(sigName: "new-attention-icon", callback: Indicator.NewAttentionIconSignalCallback): number
    connect_after(sigName: "new-attention-icon", callback: Indicator.NewAttentionIconSignalCallback): number
    emit(sigName: "new-attention-icon", ...args: any[]): void
    connect(sigName: "new-icon", callback: Indicator.NewIconSignalCallback): number
    connect_after(sigName: "new-icon", callback: Indicator.NewIconSignalCallback): number
    emit(sigName: "new-icon", ...args: any[]): void
    connect(sigName: "new-icon-theme-path", callback: Indicator.NewIconThemePathSignalCallback): number
    connect_after(sigName: "new-icon-theme-path", callback: Indicator.NewIconThemePathSignalCallback): number
    emit(sigName: "new-icon-theme-path", object: string | null, ...args: any[]): void
    connect(sigName: "new-label", callback: Indicator.NewLabelSignalCallback): number
    connect_after(sigName: "new-label", callback: Indicator.NewLabelSignalCallback): number
    emit(sigName: "new-label", object: string | null, p0: string | null, ...args: any[]): void
    connect(sigName: "new-status", callback: Indicator.NewStatusSignalCallback): number
    connect_after(sigName: "new-status", callback: Indicator.NewStatusSignalCallback): number
    emit(sigName: "new-status", arg1: string | null, ...args: any[]): void
    connect(sigName: "scroll-event", callback: Indicator.ScrollEventSignalCallback): number
    connect_after(sigName: "scroll-event", callback: Indicator.ScrollEventSignalCallback): number
    emit(sigName: "scroll-event", arg1: number, arg2: Gdk.ScrollDirection, ...args: any[]): void

    // Class property signals of AppIndicator3-0.1.AppIndicator3.Indicator

    connect(sigName: "notify::attention-icon-desc", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attention-icon-desc", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attention-icon-desc", ...args: any[]): void
    connect(sigName: "notify::attention-icon-name", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attention-icon-name", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attention-icon-name", ...args: any[]): void
    connect(sigName: "notify::category", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::category", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::category", ...args: any[]): void
    connect(sigName: "notify::connected", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connected", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connected", ...args: any[]): void
    connect(sigName: "notify::icon-desc", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-desc", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-desc", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::icon-theme-path", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-theme-path", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-theme-path", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::label", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::label-guide", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label-guide", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label-guide", ...args: any[]): void
    connect(sigName: "notify::ordering-index", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ordering-index", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ordering-index", ...args: any[]): void
    connect(sigName: "notify::status", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::status", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A application indicator represents the values that are needed to show a
 * unique status in the panel for an application.  In general, applications
 * should try to fit in the other indicators that are available on the
 * panel before using this.  But, sometimes it is necissary.
 * 
 *  Private fields
 * @class 
 */
export class Indicator extends GObject.Object {

    // Own properties of AppIndicator3-0.1.AppIndicator3.Indicator

    static name: string
    static $gtype: GObject.GType<Indicator>

    // Constructors of AppIndicator3-0.1.AppIndicator3.Indicator

    constructor(config?: Indicator.ConstructorProperties) 
    /**
     * Creates a new #AppIndicator setting the properties:
     * #AppIndicator:id with `id,` #AppIndicator:category with `category`
     * and #AppIndicator:icon-name with `icon_name`.
     * @constructor 
     * @param id The unique id of the indicator to create.
     * @param icon_name The icon name for this indicator
     * @param category The category of indicator.
     * @returns A pointer to a new #AppIndicator object.
     */
    constructor(id: string | null, icon_name: string | null, category: IndicatorCategory) 
    /**
     * Creates a new #AppIndicator setting the properties:
     * #AppIndicator:id with `id,` #AppIndicator:category with `category`
     * and #AppIndicator:icon-name with `icon_name`.
     * @constructor 
     * @param id The unique id of the indicator to create.
     * @param icon_name The icon name for this indicator
     * @param category The category of indicator.
     * @returns A pointer to a new #AppIndicator object.
     */
    static new(id: string | null, icon_name: string | null, category: IndicatorCategory): Indicator
    /**
     * Creates a new #AppIndicator setting the properties:
     * #AppIndicator:id with `id,` #AppIndicator:category with `category,`
     * #AppIndicator:icon-name with `icon_name` and #AppIndicator:icon-theme-path
     * with `icon_theme_path`.
     * @constructor 
     * @param id The unique id of the indicator to create.
     * @param icon_name The icon name for this indicator
     * @param category The category of indicator.
     * @param icon_theme_path A custom path for finding icons.
     * @returns A pointer to a new #AppIndicator object.
     */
    static new_with_path(id: string | null, icon_name: string | null, category: IndicatorCategory, icon_theme_path: string | null): Indicator
    _init(config?: Indicator.ConstructorProperties): void
}

export interface IndicatorClass {

    // Own fields of AppIndicator3-0.1.AppIndicator3.IndicatorClass

    /**
     * Mia familia
     * @field 
     */
    parent_class: GObject.ObjectClass
    new_icon: (indicator: Indicator) => void
    new_attention_icon: (indicator: Indicator) => void
    new_status: (indicator: Indicator, status: string | null) => void
    new_icon_theme_path: (indicator: Indicator, icon_theme_path: string | null) => void
    new_label: (indicator: Indicator, label: string | null, guide: string | null) => void
    connection_changed: (indicator: Indicator, connected: boolean) => void
    scroll_event: (indicator: Indicator, delta: number, direction: Gdk.ScrollDirection) => void
    app_indicator_reserved_ats: () => void
    unfallback: (indicator: Indicator, status_icon: Gtk.StatusIcon) => void
    app_indicator_reserved_1: () => void
    app_indicator_reserved_2: () => void
    app_indicator_reserved_3: () => void
    app_indicator_reserved_4: () => void
    app_indicator_reserved_5: () => void
    app_indicator_reserved_6: () => void
}

/**
 * The signals and external functions that make up the #AppIndicator
 * class object.
 * @record 
 */
export abstract class IndicatorClass {

    // Own properties of AppIndicator3-0.1.AppIndicator3.IndicatorClass

    static name: string
}

export interface IndicatorPrivate {
}

/**
 * All of the private data in an instance of an application indicator.
 * Private Fields
 * @record 
 */
export class IndicatorPrivate {

    // Own properties of AppIndicator3-0.1.AppIndicator3.IndicatorPrivate

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