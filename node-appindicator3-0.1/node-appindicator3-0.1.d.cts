
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-appindicator3-0.1-import.d.ts';
    
/**
 * AppIndicator3-0.1
 */

import type Gtk from '@girs/node-gtk-3.0';
import type xlib from '@girs/node-xlib-2.0';
import type Gdk from '@girs/node-gdk-3.0';
import type cairo from '@girs/node-cairo-1.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';
import type Pango from '@girs/node-pango-1.0';
import type HarfBuzz from '@girs/node-harfbuzz-0.0';
import type freetype2 from '@girs/node-freetype2-2.0';
import type Gio from '@girs/node-gio-2.0';
import type GdkPixbuf from '@girs/node-gdkpixbuf-2.0';
import type GModule from '@girs/node-gmodule-2.0';
import type Atk from '@girs/node-atk-1.0';

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
export const INDICATOR_SIGNAL_CONNECTION_CHANGED: string
/**
 * String identifier for the #AppIndicator::new-attention-icon signal.
 */
export const INDICATOR_SIGNAL_NEW_ATTENTION_ICON: string
/**
 * String identifier for the #AppIndicator::new-icon signal.
 */
export const INDICATOR_SIGNAL_NEW_ICON: string
/**
 * String identifier for the #AppIndicator::new-icon-theme-path signal.
 */
export const INDICATOR_SIGNAL_NEW_ICON_THEME_PATH: string
/**
 * String identifier for the #AppIndicator::new-label signal.
 */
export const INDICATOR_SIGNAL_NEW_LABEL: string
/**
 * String identifier for the #AppIndicator::new-status signal.
 */
export const INDICATOR_SIGNAL_NEW_STATUS: string
/**
 * String identifier for the #AppIndicator::scroll-event signal.
 */
export const INDICATOR_SIGNAL_SCROLL_EVENT: string
export module Indicator {

    // Signal callback interfaces

    /**
     * Signal callback interface for `connection-changed`
     */
    export interface ConnectionChangedSignalCallback {
        (arg1: boolean): void
    }

    /**
     * Signal callback interface for `new-attention-icon`
     */
    export interface NewAttentionIconSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `new-icon`
     */
    export interface NewIconSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `new-icon-theme-path`
     */
    export interface NewIconThemePathSignalCallback {
        (object: string | null): void
    }

    /**
     * Signal callback interface for `new-label`
     */
    export interface NewLabelSignalCallback {
        (object: string | null, p0: string | null): void
    }

    /**
     * Signal callback interface for `new-status`
     */
    export interface NewStatusSignalCallback {
        (arg1: string | null): void
    }

    /**
     * Signal callback interface for `scroll-event`
     */
    export interface ScrollEventSignalCallback {
        (arg1: number, arg2: Gdk.ScrollDirection): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of AppIndicator3-0.1.AppIndicator3.Indicator

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
         * The type of indicator that this represents.  Please don't use 'Other'.
         * Defaults to 'ApplicationStatus'.
         */
        category?: string | null
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
    }

}

export interface Indicator {

    // Own properties of AppIndicator3-0.1.AppIndicator3.Indicator

    /**
     * If the indicator sets it's status to %APP_INDICATOR_STATUS_ATTENTION
     * then this textual description of the icon shown.
     */
    attentionIconDesc: string | null
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
    iconDesc: string | null
    /**
     * The name of the regular icon that is shown for the indicator.
     */
    iconName: string | null
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
    __gtype__: number

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
     * @param desktopFile A path to the desktop file to build the menu from
     * @param desktopProfile Which entries should be used from the desktop file
     */
    buildMenuFromDesktop(desktopFile: string, desktopProfile: string): void
    /**
     * Wrapper function for property #AppIndicator:attention-icon-name.
     * @returns The current attention icon name.
     */
    getAttentionIcon(): string
    /**
     * Wrapper function for property #AppIndicator:attention-icon-desc.
     * @returns The current attention icon description.
     */
    getAttentionIconDesc(): string
    /**
     * Wrapper function for property #AppIndicator:category.
     * @returns The current category.
     */
    getCategory(): IndicatorCategory
    /**
     * Wrapper function for property #AppIndicator:icon-name.
     * @returns The current icon name.
     */
    getIcon(): string
    /**
     * Wrapper function for property #AppIndicator:icon-desc.
     * @returns The current icon description.
     */
    getIconDesc(): string
    /**
     * Wrapper function for property #AppIndicator:icon-theme-path.
     * @returns The current icon theme path.
     */
    getIconThemePath(): string
    /**
     * Wrapper function for property #AppIndicator:id.
     * @returns The current ID
     */
    getId(): string
    /**
     * Wrapper function for property #AppIndicator:label.
     * @returns The current label.
     */
    getLabel(): string
    /**
     * Wrapper function for property #AppIndicator:label-guide.
     * @returns The current label guide.
     */
    getLabelGuide(): string
    /**
     * Gets the menu being used for this application indicator.
     * Wrapper function for property #AppIndicator:menu.
     * @returns A #GtkMenu object or %NULL if one hasn't been set.
     */
    getMenu(): Gtk.Menu
    /**
     * Wrapper function for property #AppIndicator:ordering-index.
     * @returns The current ordering index.
     */
    getOrderingIndex(): number
    /**
     * Gets the menuitem being called on secondary-activate event.
     * @returns A #GtkWidget object or %NULL if none has been set.
     */
    getSecondaryActivateTarget(): Gtk.Widget
    /**
     * Wrapper function for property #AppIndicator:status.
     * @returns The current status.
     */
    getStatus(): IndicatorStatus
    /**
     * Gets the title of the application indicator.  See the function
     * app_indicator_set_title() for information on the title.
     * @returns The current title.
     */
    getTitle(): string
    /**
     * Wrapper for app_indicator_set_attention_icon_full() with a NULL
     * description.
     * @param iconName The name of the attention icon to set for this indicator
     */
    setAttentionIcon(iconName: string): void
    /**
     * Wrapper function for property #AppIndicator:attention-icon-name.
     * @param iconName The name of the attention icon to set for this indicator
     * @param iconDesc A textual description of the icon
     */
    setAttentionIconFull(iconName: string, iconDesc: string): void
    /**
     * Wrapper function for app_indicator_set_icon_full() with a NULL
     * description.
     * @param iconName The icon name to set.
     */
    setIcon(iconName: string): void
    /**
     * Sets the default icon to use when the status is active but
     * not set to attention.  In most cases, this should be the
     * application icon for the program.
     * 
     * Wrapper function for property #AppIndicator:icon-name and
     * #AppIndicator::icon-desc.
     * @param iconName The icon name to set.
     * @param iconDesc A textual description of the icon for accessibility
     */
    setIconFull(iconName: string, iconDesc: string): void
    /**
     * Sets the path to use when searching for icons.
     * @param iconThemePath The icon theme path to set.
     */
    setIconThemePath(iconThemePath: string): void
    /**
     * This is a wrapper function for the #AppIndicator:label and
     * #AppIndicator:guide properties.  This function can take #NULL
     * as either `label` or `guide` and will clear the entries.
     * @param label The label to show next to the icon.
     * @param guide A guide to size the label correctly.
     */
    setLabel(label: string, guide: string): void
    /**
     * Sets the menu that should be shown when the Application Indicator
     * is clicked on in the panel.  An application indicator will not
     * be rendered unless it has a menu.
     * 
     * Wrapper function for property #AppIndicator:menu.
     * @param menu A #GtkMenu to set
     */
    setMenu(menu: Gtk.Menu | null): void
    /**
     * Sets the ordering index for the app indicator which effects the
     * placement of it on the panel.  For almost all app indicator
     * this is not the function you're looking for.
     * 
     * Wrapper function for property #AppIndicator:ordering-index.
     * @param orderingIndex A value for the ordering of this app indicator
     */
    setOrderingIndex(orderingIndex: number): void
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
    setSecondaryActivateTarget(menuitem: Gtk.Widget | null): void
    /**
     * Wrapper function for property #AppIndicator:status.
     * @param status The status to set for this indicator
     */
    setStatus(status: IndicatorStatus): void
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
    setTitle(title: string | null): void

    // Own virtual methods of AppIndicator3-0.1.AppIndicator3.Indicator

    connectionChanged(connected: boolean): void
    newAttentionIcon(): void
    newIcon(): void
    newIconThemePath(iconThemePath: string): void
    newLabel(label: string, guide: string): void
    newStatus(status: string): void
    scrollEvent(delta: number, direction: Gdk.ScrollDirection): void
    unfallback(statusIcon: Gtk.StatusIcon): void

    // Own signals of AppIndicator3-0.1.AppIndicator3.Indicator

    connect(sigName: "connection-changed", callback: Indicator.ConnectionChangedSignalCallback): number
    on(sigName: "connection-changed", callback: Indicator.ConnectionChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "connection-changed", callback: Indicator.ConnectionChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "connection-changed", callback: Indicator.ConnectionChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "connection-changed", ...args: any[]): void
    connect(sigName: "new-attention-icon", callback: Indicator.NewAttentionIconSignalCallback): number
    on(sigName: "new-attention-icon", callback: Indicator.NewAttentionIconSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-attention-icon", callback: Indicator.NewAttentionIconSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-attention-icon", callback: Indicator.NewAttentionIconSignalCallback): NodeJS.EventEmitter
    emit(sigName: "new-attention-icon", ...args: any[]): void
    connect(sigName: "new-icon", callback: Indicator.NewIconSignalCallback): number
    on(sigName: "new-icon", callback: Indicator.NewIconSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-icon", callback: Indicator.NewIconSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-icon", callback: Indicator.NewIconSignalCallback): NodeJS.EventEmitter
    emit(sigName: "new-icon", ...args: any[]): void
    connect(sigName: "new-icon-theme-path", callback: Indicator.NewIconThemePathSignalCallback): number
    on(sigName: "new-icon-theme-path", callback: Indicator.NewIconThemePathSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-icon-theme-path", callback: Indicator.NewIconThemePathSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-icon-theme-path", callback: Indicator.NewIconThemePathSignalCallback): NodeJS.EventEmitter
    emit(sigName: "new-icon-theme-path", ...args: any[]): void
    connect(sigName: "new-label", callback: Indicator.NewLabelSignalCallback): number
    on(sigName: "new-label", callback: Indicator.NewLabelSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-label", callback: Indicator.NewLabelSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-label", callback: Indicator.NewLabelSignalCallback): NodeJS.EventEmitter
    emit(sigName: "new-label", p0: string | null, ...args: any[]): void
    connect(sigName: "new-status", callback: Indicator.NewStatusSignalCallback): number
    on(sigName: "new-status", callback: Indicator.NewStatusSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-status", callback: Indicator.NewStatusSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-status", callback: Indicator.NewStatusSignalCallback): NodeJS.EventEmitter
    emit(sigName: "new-status", ...args: any[]): void
    connect(sigName: "scroll-event", callback: Indicator.ScrollEventSignalCallback): number
    on(sigName: "scroll-event", callback: Indicator.ScrollEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "scroll-event", callback: Indicator.ScrollEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "scroll-event", callback: Indicator.ScrollEventSignalCallback): NodeJS.EventEmitter
    emit(sigName: "scroll-event", arg2: Gdk.ScrollDirection, ...args: any[]): void

    // Class property signals of AppIndicator3-0.1.AppIndicator3.Indicator

    connect(sigName: "notify::attention-icon-desc", callback: (...args: any[]) => void): number
    on(sigName: "notify::attention-icon-desc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::attention-icon-desc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::attention-icon-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::attention-icon-desc", ...args: any[]): void
    connect(sigName: "notify::attention-icon-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::attention-icon-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::attention-icon-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::attention-icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::attention-icon-name", ...args: any[]): void
    connect(sigName: "notify::category", callback: (...args: any[]) => void): number
    on(sigName: "notify::category", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::category", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::category", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::category", ...args: any[]): void
    connect(sigName: "notify::connected", callback: (...args: any[]) => void): number
    on(sigName: "notify::connected", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::connected", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::connected", ...args: any[]): void
    connect(sigName: "notify::icon-desc", callback: (...args: any[]) => void): number
    on(sigName: "notify::icon-desc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::icon-desc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::icon-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::icon-desc", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::icon-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::icon-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::icon-theme-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::icon-theme-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::icon-theme-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::icon-theme-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::icon-theme-path", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::label", callback: (...args: any[]) => void): number
    on(sigName: "notify::label", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::label-guide", callback: (...args: any[]) => void): number
    on(sigName: "notify::label-guide", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::label-guide", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::label-guide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::label-guide", ...args: any[]): void
    connect(sigName: "notify::ordering-index", callback: (...args: any[]) => void): number
    on(sigName: "notify::ordering-index", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ordering-index", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ordering-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ordering-index", ...args: any[]): void
    connect(sigName: "notify::status", callback: (...args: any[]) => void): number
    on(sigName: "notify::status", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::status", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::status", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
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

    // Constructors of AppIndicator3-0.1.AppIndicator3.Indicator

    constructor(config?: Indicator.ConstructorProperties) 
    /**
     * Creates a new #AppIndicator setting the properties:
     * #AppIndicator:id with `id,` #AppIndicator:category with `category`
     * and #AppIndicator:icon-name with `icon_name`.
     * @constructor 
     * @param id The unique id of the indicator to create.
     * @param iconName The icon name for this indicator
     * @param category The category of indicator.
     * @returns A pointer to a new #AppIndicator object.
     */
    constructor(id: string, iconName: string, category: IndicatorCategory) 
    /**
     * Creates a new #AppIndicator setting the properties:
     * #AppIndicator:id with `id,` #AppIndicator:category with `category`
     * and #AppIndicator:icon-name with `icon_name`.
     * @constructor 
     * @param id The unique id of the indicator to create.
     * @param iconName The icon name for this indicator
     * @param category The category of indicator.
     * @returns A pointer to a new #AppIndicator object.
     */
    static new(id: string, iconName: string, category: IndicatorCategory): Indicator
    /**
     * Creates a new #AppIndicator setting the properties:
     * #AppIndicator:id with `id,` #AppIndicator:category with `category,`
     * #AppIndicator:icon-name with `icon_name` and #AppIndicator:icon-theme-path
     * with `icon_theme_path`.
     * @constructor 
     * @param id The unique id of the indicator to create.
     * @param iconName The icon name for this indicator
     * @param category The category of indicator.
     * @param iconThemePath A custom path for finding icons.
     * @returns A pointer to a new #AppIndicator object.
     */
    static newWithPath(id: string, iconName: string, category: IndicatorCategory, iconThemePath: string): Indicator
    _init(config?: Indicator.ConstructorProperties): void
}

export interface IndicatorClass {

    // Own fields of AppIndicator3-0.1.AppIndicator3.IndicatorClass

    /**
     * Mia familia
     * @field 
     */
    parentClass: GObject.ObjectClass
    newIcon: (indicator: Indicator) => void
    newAttentionIcon: (indicator: Indicator) => void
    newStatus: (indicator: Indicator, status: string) => void
    newIconThemePath: (indicator: Indicator, iconThemePath: string) => void
    newLabel: (indicator: Indicator, label: string, guide: string) => void
    connectionChanged: (indicator: Indicator, connected: boolean) => void
    scrollEvent: (indicator: Indicator, delta: number, direction: Gdk.ScrollDirection) => void
    appIndicatorReservedAts: () => void
    unfallback: (indicator: Indicator, statusIcon: Gtk.StatusIcon) => void
    appIndicatorReserved1: () => void
    appIndicatorReserved2: () => void
    appIndicatorReserved3: () => void
    appIndicatorReserved4: () => void
    appIndicatorReserved5: () => void
    appIndicatorReserved6: () => void
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

// END