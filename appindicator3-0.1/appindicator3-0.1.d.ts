/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

import '@girs/gjs';

// Module dependencies
import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from 'cairo';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Atk from '@girs/atk-1.0';

export namespace AppIndicator3 {
    /**
     * AppIndicator3-0.1
     */

    /**
     * The category provides grouping for the indicators so that
     * users can find indicators that are similar together.
     * @gir-type Enum
     */
    enum IndicatorCategory {
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
     * @gir-type Enum
     */
    enum IndicatorStatus {
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
     * String identifier for the {@link AppIndicator3.Indicator.SignalSignatures.connection_changed | AppIndicator3.Indicator::connection-changed} signal.
     */
    const INDICATOR_SIGNAL_CONNECTION_CHANGED: string;
    /**
     * String identifier for the {@link AppIndicator3.Indicator.SignalSignatures.new_attention_icon | AppIndicator3.Indicator::new-attention-icon} signal.
     */
    const INDICATOR_SIGNAL_NEW_ATTENTION_ICON: string;
    /**
     * String identifier for the {@link AppIndicator3.Indicator.SignalSignatures.new_icon | AppIndicator3.Indicator::new-icon} signal.
     */
    const INDICATOR_SIGNAL_NEW_ICON: string;
    /**
     * String identifier for the {@link AppIndicator3.Indicator.SignalSignatures.new_icon_theme_path | AppIndicator3.Indicator::new-icon-theme-path} signal.
     */
    const INDICATOR_SIGNAL_NEW_ICON_THEME_PATH: string;
    /**
     * String identifier for the {@link AppIndicator3.Indicator.SignalSignatures.new_label | AppIndicator3.Indicator::new-label} signal.
     */
    const INDICATOR_SIGNAL_NEW_LABEL: string;
    /**
     * String identifier for the {@link AppIndicator3.Indicator.SignalSignatures.new_status | AppIndicator3.Indicator::new-status} signal.
     */
    const INDICATOR_SIGNAL_NEW_STATUS: string;
    /**
     * String identifier for the {@link AppIndicator3.Indicator.SignalSignatures.scroll_event | AppIndicator3.Indicator::scroll-event} signal.
     */
    const INDICATOR_SIGNAL_SCROLL_EVENT: string;
    namespace Indicator {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Signaled when we connect to a watcher, or when it drops away.
             * @signal
             */
            'connection-changed': (arg0: boolean) => void;
            /**
             * Emitted when {@link AppIndicator3.Indicator.attention_icon_name} is changed
             * @signal
             */
            'new-attention-icon': () => void;
            /**
             * when {@link AppIndicator3.Indicator.icon_name} is changed
             * @signal
             */
            'new-icon': () => void;
            /**
             * Signaled when there is a new icon set for the
             * object.
             * @signal
             */
            'new-icon-theme-path': (arg0: string) => void;
            /**
             * Emitted when either {@link AppIndicator3.Indicator.label} or {@link AppIndicator3.Indicator.label_guide} are
             * changed.
             * @signal
             */
            'new-label': (arg0: string, arg1: string) => void;
            /**
             * Emitted when {@link AppIndicator3.Indicator.status} is changed
             * @signal
             */
            'new-status': (arg0: string) => void;
            /**
             * Signaled when the {@link AppIndicator3.Indicator} receives a scroll event.
             * @signal
             */
            'scroll-event': (arg0: number, arg1: Gdk.ScrollDirection) => void;
            'notify::attention-icon-desc': (pspec: GObject.ParamSpec) => void;
            'notify::attention-icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::category': (pspec: GObject.ParamSpec) => void;
            'notify::connected': (pspec: GObject.ParamSpec) => void;
            'notify::icon-desc': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::icon-theme-path': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::label': (pspec: GObject.ParamSpec) => void;
            'notify::label-guide': (pspec: GObject.ParamSpec) => void;
            'notify::ordering-index': (pspec: GObject.ParamSpec) => void;
            'notify::status': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            attention_icon_desc: string;
            attentionIconDesc: string;
            attention_icon_name: string;
            attentionIconName: string;
            category: string;
            connected: boolean;
            icon_desc: string;
            iconDesc: string;
            icon_name: string;
            iconName: string;
            icon_theme_path: string;
            iconThemePath: string;
            id: string;
            label: string;
            label_guide: string;
            labelGuide: string;
            ordering_index: number;
            orderingIndex: number;
            status: string;
            title: string;
        }
    }

    /**
     * A application indicator represents the values that are needed to show a
     * unique status in the panel for an application.  In general, applications
     * should try to fit in the other indicators that are available on the
     * panel before using this.  But, sometimes it is necissary.
     *
     *  Private fields
     * @gir-type Class
     */
    class Indicator extends GObject.Object {
        static $gtype: GObject.GType<Indicator>;

        // Properties

        /**
         * If the indicator sets it's status to {@link AppIndicator3.IndicatorStatus.ATTENTION}
         * then this textual description of the icon shown.
         */
        get attention_icon_desc(): string;
        set attention_icon_desc(val: string);
        /**
         * If the indicator sets it's status to {@link AppIndicator3.IndicatorStatus.ATTENTION}
         * then this textual description of the icon shown.
         */
        get attentionIconDesc(): string;
        set attentionIconDesc(val: string);
        /**
         * If the indicator sets it's status to {@link AppIndicator3.IndicatorStatus.ATTENTION}
         * then this icon is shown.
         */
        get attention_icon_name(): string;
        set attention_icon_name(val: string);
        /**
         * If the indicator sets it's status to {@link AppIndicator3.IndicatorStatus.ATTENTION}
         * then this icon is shown.
         */
        get attentionIconName(): string;
        set attentionIconName(val: string);
        /**
         * The type of indicator that this represents.  Please don't use 'Other'.
         * Defaults to 'ApplicationStatus'.
         */
        get category(): string;
        /**
         * Pretty simple, `true` if we have a reasonable expectation of being
         * displayed through this object. You should hide your TrayIcon if so.
         */
        get connected(): boolean;
        /**
         * The description of the regular icon that is shown for the indicator.
         */
        get icon_desc(): string;
        set icon_desc(val: string);
        /**
         * The description of the regular icon that is shown for the indicator.
         */
        get iconDesc(): string;
        set iconDesc(val: string);
        /**
         * The name of the regular icon that is shown for the indicator.
         */
        get icon_name(): string;
        set icon_name(val: string);
        /**
         * The name of the regular icon that is shown for the indicator.
         */
        get iconName(): string;
        set iconName(val: string);
        /**
         * An additional place to look for icon names that may be installed by the
         * application.
         */
        get icon_theme_path(): string;
        set icon_theme_path(val: string);
        /**
         * An additional place to look for icon names that may be installed by the
         * application.
         */
        get iconThemePath(): string;
        set iconThemePath(val: string);
        /**
         * The ID for this indicator, which should be unique, but used consistently
         * by this program and its indicator.
         */
        get id(): string;
        /**
         * A label that can be shown next to the string in the application
         * indicator.  The label will not be shown unless there is an icon
         * as well.  The label is useful for numerical and other frequently
         * updated information.  In general, it shouldn't be shown unless a
         * user requests it as it can take up a significant amount of space
         * on the user's panel.  This may not be shown in all visualizations.
         */
        get label(): string;
        set label(val: string);
        /**
         * An optional string to provide guidance to the panel on how big
         * the {@link AppIndicator3.Indicator.label} string could get.  If this is set correctly
         * then the panel should never 'jiggle' as the string adjusts through
         * out the range of options.  For instance, if you were providing a
         * percentage like "54% thrust" in {@link AppIndicator3.Indicator.label} you'd want to
         * set this string to "100% thrust" to ensure space when Scotty can
         * get you enough power.
         */
        get label_guide(): string;
        set label_guide(val: string);
        /**
         * An optional string to provide guidance to the panel on how big
         * the {@link AppIndicator3.Indicator.label} string could get.  If this is set correctly
         * then the panel should never 'jiggle' as the string adjusts through
         * out the range of options.  For instance, if you were providing a
         * percentage like "54% thrust" in {@link AppIndicator3.Indicator.label} you'd want to
         * set this string to "100% thrust" to ensure space when Scotty can
         * get you enough power.
         */
        get labelGuide(): string;
        set labelGuide(val: string);
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
        get ordering_index(): number;
        set ordering_index(val: number);
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
        get orderingIndex(): number;
        set orderingIndex(val: number);
        /**
         * Whether the indicator is shown or requests attention. Defaults to
         * 'Passive'.
         */
        get status(): string;
        set status(val: string);
        /**
         * Provides a way to refer to this application indicator in a human
         * readable form.  This is used in the Unity desktop in the HUD as
         * the first part of the menu entries to distinguish them from the
         * focused application's entries.
         */
        get title(): string;
        set title(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Indicator.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Indicator.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](id: string, icon_name: string, category: IndicatorCategory): Indicator;

        static new_with_path(
            id: string,
            icon_name: string,
            category: IndicatorCategory,
            icon_theme_path: string,
        ): Indicator;

        // Signals

        /** @signal */
        connect<K extends keyof Indicator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Indicator.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Indicator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Indicator.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Indicator.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Indicator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Slot for {@link AppIndicator3.Indicator.SignalSignatures.connection_changed | AppIndicator3.Indicator::connection-changed}.
         * @param connected
         * @virtual
         */
        vfunc_connection_changed(connected: boolean): void;
        /**
         * Slot for {@link AppIndicator3.Indicator.SignalSignatures.new_attention_icon | AppIndicator3.Indicator::new-attention-icon}.
         * @param user_data
         * @virtual
         */
        vfunc_new_attention_icon(user_data?: any | null): void;
        /**
         * Slot for {@link AppIndicator3.Indicator.SignalSignatures.new_icon | AppIndicator3.Indicator::new-icon}.
         * @param user_data
         * @virtual
         */
        vfunc_new_icon(user_data?: any | null): void;
        /**
         * Slot for {@link AppIndicator3.Indicator.SignalSignatures.new_icon_theme_path | AppIndicator3.Indicator::new-icon-theme-path}
         * @param icon_theme_path
         * @virtual
         */
        vfunc_new_icon_theme_path(icon_theme_path: string): void;
        /**
         * Slot for {@link AppIndicator3.Indicator.SignalSignatures.new_label | AppIndicator3.Indicator::new-label}.
         * @param label
         * @param guide
         * @virtual
         */
        vfunc_new_label(label: string, guide: string): void;
        /**
         * Slot for {@link AppIndicator3.Indicator.SignalSignatures.new_status | AppIndicator3.Indicator::new-status}.
         * @param status
         * @virtual
         */
        vfunc_new_status(status: string): void;
        /**
         * Slot for {@link AppIndicator3.Indicator.SignalSignatures.scroll_event | AppIndicator3.Indicator::scroll-event}
         * @param delta
         * @param direction
         * @virtual
         */
        vfunc_scroll_event(delta: number, direction: Gdk.ScrollDirection): void;
        /**
         * The function that gets called if an Application
         *              Indicator area appears after the fallback has been created.
         * @param status_icon
         * @virtual
         */
        vfunc_unfallback(status_icon: Gtk.StatusIcon): void;

        // Methods

        /**
         * This function allows for building the Application Indicator menu
         * from a static desktop file.
         * @param desktop_file A path to the desktop file to build the menu from
         * @param desktop_profile Which entries should be used from the desktop file
         */
        build_menu_from_desktop(desktop_file: string, desktop_profile: string): void;
        /**
         * Wrapper function for property {@link AppIndicator3.Indicator.attention_icon_name}.
         * @returns The current attention icon name.
         */
        get_attention_icon(): string;
        /**
         * Wrapper function for property {@link AppIndicator3.Indicator.attention_icon_desc}.
         * @returns The current attention icon description.
         */
        get_attention_icon_desc(): string;
        /**
         * Wrapper function for property {@link AppIndicator3.Indicator.category}.
         * @returns The current category.
         */
        get_category(): IndicatorCategory;
        /**
         * Wrapper function for property {@link AppIndicator3.Indicator.icon_name}.
         * @returns The current icon name.
         */
        get_icon(): string;
        /**
         * Wrapper function for property {@link AppIndicator3.Indicator.icon_desc}.
         * @returns The current icon description.
         */
        get_icon_desc(): string;
        /**
         * Wrapper function for property {@link AppIndicator3.Indicator.icon_theme_path}.
         * @returns The current icon theme path.
         */
        get_icon_theme_path(): string;
        /**
         * Wrapper function for property {@link AppIndicator3.Indicator.id}.
         * @returns The current ID
         */
        get_id(): string;
        /**
         * Wrapper function for property {@link AppIndicator3.Indicator.label}.
         * @returns The current label.
         */
        get_label(): string;
        /**
         * Wrapper function for property {@link AppIndicator3.Indicator.label_guide}.
         * @returns The current label guide.
         */
        get_label_guide(): string;
        /**
         * Gets the menu being used for this application indicator.
         * Wrapper function for property {@link AppIndicator3.Indicator.menu}.
         * @returns A {@link Gtk.Menu} object or `null` if one hasn't been set.
         */
        get_menu(): Gtk.Menu;
        /**
         * Wrapper function for property {@link AppIndicator3.Indicator.ordering_index}.
         * @returns The current ordering index.
         */
        get_ordering_index(): number;
        /**
         * Gets the menuitem being called on secondary-activate event.
         * @returns A {@link Gtk.Widget} object or `null` if none has been set.
         */
        get_secondary_activate_target(): Gtk.Widget;
        /**
         * Wrapper function for property {@link AppIndicator3.Indicator.status}.
         * @returns The current status.
         */
        get_status(): IndicatorStatus;
        /**
         * Gets the title of the application indicator.  See the function
         * `app_indicator_set_title()` for information on the title.
         * @returns The current title.
         */
        get_title(): string;
        /**
         * Wrapper for `app_indicator_set_attention_icon_full()` with a NULL
         * description.
         * @param icon_name The name of the attention icon to set for this indicator
         */
        set_attention_icon(icon_name: string): void;
        /**
         * Wrapper function for property {@link AppIndicator3.Indicator.attention_icon_name}.
         * @param icon_name The name of the attention icon to set for this indicator
         * @param icon_desc A textual description of the icon
         */
        set_attention_icon_full(icon_name: string, icon_desc: string): void;
        /**
         * Wrapper function for `app_indicator_set_icon_full()` with a NULL
         * description.
         * @param icon_name The icon name to set.
         */
        set_icon(icon_name: string): void;
        /**
         * Sets the default icon to use when the status is active but
         * not set to attention.  In most cases, this should be the
         * application icon for the program.
         *
         * Wrapper function for property {@link AppIndicator3.Indicator.icon_name} and
         * {@link AppIndicator3.Indicator.SignalSignatures.icon_desc | AppIndicator3.Indicator::icon-desc}.
         * @param icon_name The icon name to set.
         * @param icon_desc A textual description of the icon for accessibility
         */
        set_icon_full(icon_name: string, icon_desc: string): void;
        /**
         * Sets the path to use when searching for icons.
         * @param icon_theme_path The icon theme path to set.
         */
        set_icon_theme_path(icon_theme_path: string): void;
        /**
         * This is a wrapper function for the {@link AppIndicator3.Indicator.label} and
         * {@link AppIndicator3.Indicator.guide} properties.  This function can take `NULL`
         * as either `label` or `guide` and will clear the entries.
         * @param label The label to show next to the icon.
         * @param guide A guide to size the label correctly.
         */
        set_label(label: string, guide: string): void;
        /**
         * Sets the menu that should be shown when the Application Indicator
         * is clicked on in the panel.  An application indicator will not
         * be rendered unless it has a menu.
         *
         * Wrapper function for property {@link AppIndicator3.Indicator.menu}.
         * @param menu A {@link Gtk.Menu} to set
         */
        set_menu(menu?: Gtk.Menu | null): void;
        /**
         * Sets the ordering index for the app indicator which effects the
         * placement of it on the panel.  For almost all app indicator
         * this is not the function you're looking for.
         *
         * Wrapper function for property {@link AppIndicator3.Indicator.ordering_index}.
         * @param ordering_index A value for the ordering of this app indicator
         */
        set_ordering_index(ordering_index: number): void;
        /**
         * Set the `menuitem` to be activated when a secondary activation event (i.e. a
         * middle-click) is emitted over the {@link AppIndicator3.Indicator} icon/label.
         *
         * The `menuitem` can be also a complex {@link Gtk.Widget}, but to get activated when
         * a secondary activation occurs in the `Appindicator`, it must be a visible and
         * active child (or inner-child) of the {@link AppIndicator3.Indicator.menu}.
         *
         * Setting `menuitem` to `null` causes to disable this feature.
         * @param menuitem A {@link Gtk.Widget} to be activated on secondary activation
         */
        set_secondary_activate_target(menuitem?: Gtk.Widget | null): void;
        /**
         * Wrapper function for property {@link AppIndicator3.Indicator.status}.
         * @param status The status to set for this indicator
         */
        set_status(status: IndicatorStatus | null): void;
        /**
         * Sets the title of the application indicator, or how it should be referred
         * in a human readable form.  This string should be UTF-8 and localized as it
         * expected that users will set it.
         *
         * In the Unity desktop the most prominent place that this is show will be
         * in the HUD.  HUD listings for this application indicator will start with
         * the title as the first part of the line for the menu items.
         *
         * Setting `title` to `null` removes the title.
         * @param title Title of the app indicator
         */
        set_title(title?: string | null): void;
    }

    /**
     * @gir-type Alias
     */
    type IndicatorClass = typeof Indicator;
    /**
     * All of the private data in an instance of an application indicator.
     * Private Fields
     * @gir-type Struct
     */
    abstract class IndicatorPrivate {
        static $gtype: GObject.GType<IndicatorPrivate>;
    }

    /**
     * Name of the imported GIR library
     * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
     */
    const __name__: string;
    /**
     * Version of the imported GIR library
     * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
     */
    const __version__: string;
}

export default AppIndicator3;

// END
