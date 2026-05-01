
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
import type Malcontent from '@girs/malcontent-0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Gtk from '@girs/gtk-4.0';
import type Gsk from '@girs/gsk-4.0';
import type Graphene from '@girs/graphene-1.0';
import type Gdk from '@girs/gdk-4.0';
import type cairo from 'cairo';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Adw from '@girs/adw-1';
import type AccountsService from '@girs/accountsservice-1.0';

export namespace MalcontentUi {

    /**
     * MalcontentUi-1
     */


    namespace RestrictApplicationsDialog {
        // Signal signatures
        interface SignalSignatures extends Adw.PreferencesDialog.SignalSignatures {
            "notify::app-filter": (pspec: GObject.ParamSpec) => void;
            "notify::user-display-name": (pspec: GObject.ParamSpec) => void;
            "notify::search-enabled": (pspec: GObject.ParamSpec) => void;
            "notify::visible-page": (pspec: GObject.ParamSpec) => void;
            "notify::visible-page-name": (pspec: GObject.ParamSpec) => void;
            "notify::can-close": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::content-height": (pspec: GObject.ParamSpec) => void;
            "notify::content-width": (pspec: GObject.ParamSpec) => void;
            "notify::current-breakpoint": (pspec: GObject.ParamSpec) => void;
            "notify::default-widget": (pspec: GObject.ParamSpec) => void;
            "notify::focus-widget": (pspec: GObject.ParamSpec) => void;
            "notify::follows-content-size": (pspec: GObject.ParamSpec) => void;
            "notify::presentation-mode": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::can-target": (pspec: GObject.ParamSpec) => void;
            "notify::css-classes": (pspec: GObject.ParamSpec) => void;
            "notify::css-name": (pspec: GObject.ParamSpec) => void;
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::focusable": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::layout-manager": (pspec: GObject.ParamSpec) => void;
            "notify::limit-events": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::overflow": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::root": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Adw.PreferencesDialog.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps, Gtk.ShortcutManager.ConstructorProps {
            app_filter: Malcontent.AppFilter;
            appFilter: Malcontent.AppFilter;
            user_display_name: (string | null);
            userDisplayName: (string | null);
        }
    }

    /**
     * The ‘Restrict Applications’ dialog is a dialog which shows the available
     * applications on the system alongside a column of toggle switches, which
     * allows the given user to be prevented from running each application.
     * 
     * The dialog contains a single
     * {@link MalcontentUi.RestrictApplicationsSelector}. It takes a
     * {@link MalcontentUi.RestrictApplicationsDialog.app_filter} as input to set
     * up the UI, and returns its output as set of modifications to a given
     * {@link Malcontent.AppFilterBuilder} using
     * {@link MalcontentUi.RestrictApplicationsDialog.build_app_filter}.
     * @gir-type Class
     * @since 0.5.0
     */
    class RestrictApplicationsDialog extends Adw.PreferencesDialog implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.ShortcutManager {
        static $gtype: GObject.GType<RestrictApplicationsDialog>;

        // Properties
        /**
         * The user’s current app filter, used to set up the dialog.
         * 
         * As app filters are immutable, it is not updated as the dialog is changed.
         * Use {@link MalcontentUi.RestrictApplicationsDialog.build_app_filter} to
         * build the new app filter.
         * @since 0.5.0
         * @construct-only
         */
        get app_filter(): Malcontent.AppFilter;

        /**
         * The user’s current app filter, used to set up the dialog.
         * 
         * As app filters are immutable, it is not updated as the dialog is changed.
         * Use {@link MalcontentUi.RestrictApplicationsDialog.build_app_filter} to
         * build the new app filter.
         * @since 0.5.0
         * @construct-only
         */
        get appFilter(): Malcontent.AppFilter;

        /**
         * The display name for the currently selected user account, or `NULL` if no
         * user is selected.
         * 
         * This will typically be the user’s full name (if known) or their username.
         * 
         * If set, it must be valid UTF-8 and non-empty.
         * @since 0.5.0
         * @default null
         */
        get user_display_name(): (string | null);
        set user_display_name(val: (string | null));

        /**
         * The display name for the currently selected user account, or `NULL` if no
         * user is selected.
         * 
         * This will typically be the user’s full name (if known) or their username.
         * 
         * If set, it must be valid UTF-8 and non-empty.
         * @since 0.5.0
         * @default null
         */
        get userDisplayName(): (string | null);
        set userDisplayName(val: (string | null));

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: RestrictApplicationsDialog.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<RestrictApplicationsDialog.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](app_filter: Malcontent.AppFilter, user_display_name: (string | null)): RestrictApplicationsDialog;

        // Conflicted with Adw.PreferencesDialog.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof RestrictApplicationsDialog.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RestrictApplicationsDialog.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof RestrictApplicationsDialog.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RestrictApplicationsDialog.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof RestrictApplicationsDialog.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<RestrictApplicationsDialog.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Get the app filter settings currently configured in the dialog, by modifying
         * the given `builder`.
         * 
         * Typically this will be called in the handler for
         * `Gtk.Dialog::response`.
         * @param builder an existing {@link Malcontent.AppFilterBuilder} to modify
         */
        build_app_filter(builder: Malcontent.AppFilterBuilder): void;

        /**
         * Get the value of
         * {@link MalcontentUi.RestrictApplicationsDialog.app_filter}.
         * 
         * If the property was originally set to `NULL`, this will be the empty app
         * filter.
         * @returns the initial app filter used to   populate the dialog
         */
        get_app_filter(): Malcontent.AppFilter;

        /**
         * Get the value of
         * {@link MalcontentUi.RestrictApplicationsDialog.user_display_name}.
         * @returns the display name of the user the dialog   is configured for, or `NULL` if unknown
         */
        get_user_display_name(): (string | null);

        /**
         * Set the value of
         * {@link MalcontentUi.RestrictApplicationsDialog.app_filter}.
         * @param app_filter the app filter to configure the   dialog from, or `NULL` to use an empty app filter
         */
        set_app_filter(app_filter: (Malcontent.AppFilter | null)): void;

        /**
         * Set the value of
         * {@link MalcontentUi.RestrictApplicationsDialog.user_display_name}.
         * @param user_display_name the display name of the user   to configure the dialog for, or `NULL` if unknown
         */
        set_user_display_name(user_display_name: (string | null)): void;
    }


    namespace RestrictApplicationsSelector {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            /**
             * Emitted whenever an application in the list is blocked or unblocked.
             * @signal
             * @since 0.5.0
             * @run-last
             */
            changed: () => void;
            "notify::app-filter": (pspec: GObject.ParamSpec) => void;
            "notify::search": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-child": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::can-target": (pspec: GObject.ParamSpec) => void;
            "notify::css-classes": (pspec: GObject.ParamSpec) => void;
            "notify::css-name": (pspec: GObject.ParamSpec) => void;
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::focusable": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::layout-manager": (pspec: GObject.ParamSpec) => void;
            "notify::limit-events": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::overflow": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::root": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Box.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps, Gtk.Orientable.ConstructorProps {
            app_filter: Malcontent.AppFilter;
            appFilter: Malcontent.AppFilter;
            search: (string | null);
        }
    }

    /**
     * The ‘Restrict Applications’ selector is a list box which shows the available
     * applications on the system alongside a column of toggle switches, which
     * allows the given user to be prevented from running each application.
     * 
     * The selector takes an
     * {@link MalcontentUi.RestrictApplicationsSelector.app_filter} as input
     * to set up the UI, and returns its output as set of modifications to a given
     * {@link Malcontent.AppFilterBuilder} using
     * {@link MalcontentUi.RestrictApplicationsSelector.build_app_filter}.
     * 
     * Search terms may be applied using
     * {@link MalcontentUi.RestrictApplicationsSelector.search}.
     * These will filter the list of displayed apps so that only ones matching the
     * search terms (by name, using UTF-8 normalisation and casefolding) will be
     * displayed.
     * @gir-type Class
     * @since 0.5.0
     */
    class RestrictApplicationsSelector extends Gtk.Box implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Orientable {
        static $gtype: GObject.GType<RestrictApplicationsSelector>;

        // Properties
        /**
         * The user’s current app filter, used to set up the selector.
         * 
         * As app filters are immutable, it is not updated as the selector is changed.
         * Use {@link MalcontentUi.RestrictApplicationsSelector.build_app_filter} to
         * build the new app filter.
         * @since 0.5.0
         */
        get app_filter(): Malcontent.AppFilter;
        set app_filter(val: Malcontent.AppFilter);

        /**
         * The user’s current app filter, used to set up the selector.
         * 
         * As app filters are immutable, it is not updated as the selector is changed.
         * Use {@link MalcontentUi.RestrictApplicationsSelector.build_app_filter} to
         * build the new app filter.
         * @since 0.5.0
         */
        get appFilter(): Malcontent.AppFilter;
        set appFilter(val: Malcontent.AppFilter);

        /**
         * Search terms to filter the displayed list of apps by, or `NULL` to not
         * filter the search.
         * @since 0.12.0
         * @default null
         */
        get search(): (string | null);
        set search(val: (string | null));

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: RestrictApplicationsSelector.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<RestrictApplicationsSelector.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](app_filter: Malcontent.AppFilter): RestrictApplicationsSelector;

        // Conflicted with Gtk.Box.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof RestrictApplicationsSelector.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RestrictApplicationsSelector.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof RestrictApplicationsSelector.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RestrictApplicationsSelector.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof RestrictApplicationsSelector.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<RestrictApplicationsSelector.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Get the app filter settings currently configured in the selector, by modifying
         * the given `builder`.
         * @param builder an existing {@link Malcontent.AppFilterBuilder} to modify
         */
        build_app_filter(builder: Malcontent.AppFilterBuilder): void;

        /**
         * Get the value of
         * {@link MalcontentUi.RestrictApplicationsSelector.app_filter}.
         * 
         * If the property was originally set to `NULL`, this will be the empty app
         * filter.
         * @returns the initial app filter used to   populate the selector
         */
        get_app_filter(): Malcontent.AppFilter;

        /**
         * Get the value of {@link MalcontentUi.RestrictApplicationsSelector.search}.
         * @returns current search terms, or `NULL` if no search filtering   is active
         */
        get_search(): (string | null);

        /**
         * Set the value of
         * {@link MalcontentUi.RestrictApplicationsSelector.app_filter}.
         * 
         * This will overwrite any user changes to the selector, so they should be saved
         * first using
         * {@link MalcontentUi.RestrictApplicationsSelector.build_app_filter} if
         * desired.
         * @param app_filter the app filter to configure the   selector from, or `NULL` to use an empty app filter
         */
        set_app_filter(app_filter: (Malcontent.AppFilter | null)): void;

        /**
         * Set the value of {@link MalcontentUi.RestrictApplicationsSelector.search},
         * or clear it to `NULL`.
         * @param search search terms, or `NULL` to not filter the app list
         */
        set_search(search: (string | null)): void;

        /**
         * The orientation of the orientable.
         * @default Gtk.Orientation.HORIZONTAL
          * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`
         */
        get_orientation(): Gtk.Orientation;

        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable&#x2019;s new orientation
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }


    namespace UserControls {
        // Signal signatures
        interface SignalSignatures extends Adw.Bin.SignalSignatures {
            "notify::app-filter": (pspec: GObject.ParamSpec) => void;
            "notify::dbus-connection": (pspec: GObject.ParamSpec) => void;
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::permission": (pspec: GObject.ParamSpec) => void;
            "notify::user": (pspec: GObject.ParamSpec) => void;
            "notify::user-account-type": (pspec: GObject.ParamSpec) => void;
            "notify::user-display-name": (pspec: GObject.ParamSpec) => void;
            "notify::user-locale": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::can-target": (pspec: GObject.ParamSpec) => void;
            "notify::css-classes": (pspec: GObject.ParamSpec) => void;
            "notify::css-name": (pspec: GObject.ParamSpec) => void;
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::focusable": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::layout-manager": (pspec: GObject.ParamSpec) => void;
            "notify::limit-events": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::overflow": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::root": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Adw.Bin.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps {
            app_filter: (Malcontent.AppFilter | null);
            appFilter: (Malcontent.AppFilter | null);
            dbus_connection: Gio.DBusConnection;
            dbusConnection: Gio.DBusConnection;
            description: string;
            permission: (Gio.Permission | null);
            user: (Malcontent.User | null);
            user_account_type: Malcontent.UserType;
            userAccountType: Malcontent.UserType;
            user_display_name: (string | null);
            userDisplayName: (string | null);
            user_locale: (string | null);
            userLocale: (string | null);
        }
    }

    /**
     * A group of widgets which allow setting the parental controls for a given
     * user.
     * 
     * If {@link MalcontentUi.UserControls.user} is set, the current parental
     * controls settings for that user will be loaded and displayed, and any changes
     * made via the controls will be automatically saved for that user (potentially
     * after a short timeout).
     * 
     * If {@link MalcontentUi.UserControls.user} is unset (for example, if
     * setting the parental controls for a user account which hasn’t yet been
     * created), the controls can be initialised by setting:
     * 
     *  - {@link MalcontentUi.UserControls.app_filter}
     *  - {@link MalcontentUi.UserControls.user_account_type}
     *  - {@link MalcontentUi.UserControls.user_locale}
     *  - {@link MalcontentUi.UserControls.user_display_name}
     * 
     * When {@link MalcontentUi.UserControls.user} is unset, changes made to the
     * parental controls cannot be saved automatically, and must be queried using
     * {@link MalcontentUi.UserControls.build_app_filter}, then saved by the
     * calling code.
     * 
     * As parental controls are system settings, privileges are needed to view and
     * edit them (for the current user or for other users). These can be acquired
     * using polkit. {@link MalcontentUi.UserControls.permission} is used to
     * query the current permissions for getting/setting parental controls. If it’s
     * `NULL`, or if permissions are not currently granted, the user controls will
     * be insensitive.
     * @gir-type Class
     * @since 0.5.0
     */
    class UserControls extends Adw.Bin implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<UserControls>;

        // Properties
        /**
         * The user’s current app filter, used to set up the user controls.
         * 
         * As app filters are immutable, it is not updated as the user controls are
         * changed. Use {@link MalcontentUi.UserControls.build_app_filter} to build
         * the new app filter.
         * 
         * This may be `NULL` if the app filter is unknown, or if querying it from
         * {@link MalcontentUi.UserControls.user} fails.
         * @since 0.5.0
         */
        get app_filter(): (Malcontent.AppFilter | null);
        set app_filter(val: (Malcontent.AppFilter | null));

        /**
         * The user’s current app filter, used to set up the user controls.
         * 
         * As app filters are immutable, it is not updated as the user controls are
         * changed. Use {@link MalcontentUi.UserControls.build_app_filter} to build
         * the new app filter.
         * 
         * This may be `NULL` if the app filter is unknown, or if querying it from
         * {@link MalcontentUi.UserControls.user} fails.
         * @since 0.5.0
         */
        get appFilter(): (Malcontent.AppFilter | null);
        set appFilter(val: (Malcontent.AppFilter | null));

        /**
         * A connection to the system bus.
         * 
         * This will be used for retrieving details of user accounts, and must be
         * provided at construction time.
         * @since 0.7.0
         * @construct-only
         */
        get dbus_connection(): Gio.DBusConnection;

        /**
         * A connection to the system bus.
         * 
         * This will be used for retrieving details of user accounts, and must be
         * provided at construction time.
         * @since 0.7.0
         * @construct-only
         */
        get dbusConnection(): Gio.DBusConnection;

        /**
         * The description for the currently selected user account, or `NULL` if no
         * user is selected.
         * 
         * If set, it must be valid UTF-8 and non-empty.
         * @since 0.11.0
         * @default null
         */
        get description(): string;
        set description(val: string);

        /**
         * A {@link Gio.Permission} indicating whether the current user has permission
         * to view or change parental controls.
         * 
         * This will be `NULL` if permission is not allowed or is unknown
         * @since 0.5.0
         */
        get permission(): (Gio.Permission | null);
        set permission(val: (Gio.Permission | null));

        /**
         * The user the controls are configured for.
         * 
         * This will be `NULL` if the user is unknown or not currently specified.
         * @since 0.14.0
         */
        get user(): (Malcontent.User | null);
        set user(val: (Malcontent.User | null));

        /**
         * The type of the currently selected user account.
         * @since 0.5.0
         * @default Malcontent.UserType.UNKNOWN
         */
        get user_account_type(): Malcontent.UserType;
        set user_account_type(val: Malcontent.UserType);

        /**
         * The type of the currently selected user account.
         * @since 0.5.0
         * @default Malcontent.UserType.UNKNOWN
         */
        get userAccountType(): Malcontent.UserType;
        set userAccountType(val: Malcontent.UserType);

        /**
         * The display name for the currently selected user account, or `NULL` if no
         * user is selected.
         * 
         * This will typically be the user’s full name (if known) or their username.
         * 
         * If set, it must be valid UTF-8 and non-empty.
         * @since 0.5.0
         * @default null
         */
        get user_display_name(): (string | null);
        set user_display_name(val: (string | null));

        /**
         * The display name for the currently selected user account, or `NULL` if no
         * user is selected.
         * 
         * This will typically be the user’s full name (if known) or their username.
         * 
         * If set, it must be valid UTF-8 and non-empty.
         * @since 0.5.0
         * @default null
         */
        get userDisplayName(): (string | null);
        set userDisplayName(val: (string | null));

        /**
         * The locale for the currently selected user account, or `NULL` if no
         * user is selected.
         * 
         * If set, it must be in the format documented by [`setlocale()`](man:setlocale(3)):
         * ```
         * language[_territory][.codeset][`modifier`]
         * ```
         * where `language` is an ISO 639 language code, `territory` is an ISO 3166
         * country code, and `codeset` is a character set or encoding identifier like
         * `ISO-8859-1` or `UTF-8`.
         * @since 0.5.0
         * @default null
         */
        get user_locale(): (string | null);
        set user_locale(val: (string | null));

        /**
         * The locale for the currently selected user account, or `NULL` if no
         * user is selected.
         * 
         * If set, it must be in the format documented by [`setlocale()`](man:setlocale(3)):
         * ```
         * language[_territory][.codeset][`modifier`]
         * ```
         * where `language` is an ISO 639 language code, `territory` is an ISO 3166
         * country code, and `codeset` is a character set or encoding identifier like
         * `ISO-8859-1` or `UTF-8`.
         * @since 0.5.0
         * @default null
         */
        get userLocale(): (string | null);
        set userLocale(val: (string | null));

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: UserControls.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<UserControls.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof UserControls.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UserControls.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof UserControls.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UserControls.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof UserControls.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<UserControls.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Get the app filter settings currently configured in the user controls, by
         * modifying the given `builder`.
         * 
         * This can be used to save the settings manually.
         * @param builder an existing {@link Malcontent.AppFilterBuilder} to modify
         */
        build_app_filter(builder: Malcontent.AppFilterBuilder): void;

        /**
         * Get the value of {@link MalcontentUi.UserControls.app_filter}.
         * 
         * If the app filter is unknown or could not be retrieved from
         * {@link MalcontentUi.UserControls.user}, this will be `NULL`.
         * @returns the initial app filter used to   populate the user controls, or `NULL` if unknown
         */
        get_app_filter(): (Malcontent.AppFilter | null);

        /**
         * Get the value of {@link MalcontentUi.UserControls.permission}.
         * @returns a {@link Gio.Permission} indicating   whether the current user has permission to view or change parental   controls, or `NULL` if permission is not allowed or is unknown
         */
        get_permission(): (Gio.Permission | null);

        /**
         * Get the value of {@link MalcontentUi.UserControls.user}.
         * @returns the user the controls are configured for,   or `NULL` if unknown
         */
        get_user(): (Malcontent.User | null);

        /**
         * Get the value of {@link MalcontentUi.UserControls.user_account_type}.
         * @returns the account type of the user the controls are configured for
         */
        get_user_account_type(): Malcontent.UserType;

        /**
         * Get the value of {@link MalcontentUi.UserControls.user_display_name}.
         * @returns the display name of the user the   controls are configured for, or `NULL` if unknown
         */
        get_user_display_name(): (string | null);

        /**
         * Get the value of {@link MalcontentUi.UserControls.user_locale}.
         * @returns the locale of the user the controls   are configured for, or `NULL` if unknown
         */
        get_user_locale(): (string | null);

        /**
         * Set the value of {@link MalcontentUi.UserControls.app_filter}.
         * 
         * This will overwrite any user changes to the controls, so they should be saved
         * first using {@link MalcontentUi.UserControls.build_app_filter} if desired.
         * They will be saved automatically if {@link MalcontentUi.UserControls.user}
         * is set.
         * @param app_filter the app filter to configure the user   controls from, or `NULL` if unknown
         */
        set_app_filter(app_filter: (Malcontent.AppFilter | null)): void;

        /**
         * Set the value of {@link MalcontentUi.UserControls.description}.
         * @param description the description shown   above the controls, or `NULL` if none.
         */
        set_description(description: (string | null)): void;

        /**
         * Set the value of {@link MalcontentUi.UserControls.permission}.
         * @param permission the {@link Gio.Permission} indicating   whether the current user has permission to view or change parental   controls, or `NULL` if permission is not allowed or is unknown
         */
        set_permission(permission: (Gio.Permission | null)): void;

        /**
         * Set the value of {@link MalcontentUi.UserControls.user}.
         * @param user the user to configure the controls for,   or `NULL` if unknown
         */
        set_user(user: (Malcontent.User | null)): void;

        /**
         * Set the value of {@link MalcontentUi.UserControls.user_account_type}.
         * @param user_account_type the account type of the user to configure the controls for
         */
        set_user_account_type(user_account_type: Malcontent.UserType): void;

        /**
         * Set the value of {@link MalcontentUi.UserControls.user_display_name}.
         * @param user_display_name the display name of the user   to configure the controls for, or `NULL` if unknown
         */
        set_user_display_name(user_display_name: (string | null)): void;

        /**
         * Set the value of {@link MalcontentUi.UserControls.user_locale}.
         * @param user_locale the locale of the user   to configure the controls for, or `NULL` if unknown
         */
        set_user_locale(user_locale: (string | null)): void;
    }


    /**
     * @gir-type Alias
     */
    type RestrictApplicationsDialogClass = typeof RestrictApplicationsDialog;

    /**
     * @gir-type Alias
     */
    type RestrictApplicationsSelectorClass = typeof RestrictApplicationsSelector;

    /**
     * @gir-type Alias
     */
    type UserControlsClass = typeof UserControls;

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

export default MalcontentUi;

// END
