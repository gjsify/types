/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './malcontentui-1-ambient.d.ts';
import './malcontentui-1-import.d.ts';
/**
 * MalcontentUi-1
 */

import type Malcontent from '@girs/malcontent-0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Gtk from '@girs/gtk-4.0';
import type Gsk from '@girs/gsk-4.0';
import type Graphene from '@girs/graphene-1.0';
import type Gdk from '@girs/gdk-4.0';
import type cairo from '@girs/cairo-1.0';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Adw from '@girs/adw-1';
import type AccountsService from '@girs/accountsservice-1.0';

export namespace MalcontentUi {
    module RestrictApplicationsDialog {
        // Constructor properties interface
    }

    /**
     * The ‘Restrict Applications’ dialog is a dialog which shows the available
     * applications on the system alongside a column of toggle switches, which
     * allows the given user to be prevented from running each application.
     *
     * The dialog contains a single #MctRestrictApplicationsSelector. It takes a
     * #MctRestrictApplicationsDialog:user and
     * #MctRestrictApplicationsDialog:app-filter as input to set up the UI, and
     * returns its output as set of modifications to a given #MctAppFilterBuilder
     * using mct_restrict_applications_dialog_build_app_filter().
     */
    class RestrictApplicationsDialog extends Adw.PreferencesWindow {
        // Own properties of MalcontentUi-1.RestrictApplicationsDialog

        /**
         * The user’s current app filter, used to set up the dialog. As app filters
         * are immutable, it is not updated as the dialog is changed. Use
         * mct_restrict_applications_dialog_build_app_filter() to build the new app
         * filter.
         */
        app_filter: Malcontent.AppFilter;
        /**
         * The user’s current app filter, used to set up the dialog. As app filters
         * are immutable, it is not updated as the dialog is changed. Use
         * mct_restrict_applications_dialog_build_app_filter() to build the new app
         * filter.
         */
        appFilter: Malcontent.AppFilter;
        /**
         * The display name for the currently selected user account, or %NULL if no
         * user is selected. This will typically be the user’s full name (if known)
         * or their username.
         *
         * If set, it must be valid UTF-8 and non-empty.
         */
        user_display_name: string;
        /**
         * The display name for the currently selected user account, or %NULL if no
         * user is selected. This will typically be the user’s full name (if known)
         * or their username.
         *
         * If set, it must be valid UTF-8 and non-empty.
         */
        userDisplayName: string;

        // Constructors of MalcontentUi-1.RestrictApplicationsDialog

        static ['new'](app_filter: Malcontent.AppFilter, user_display_name?: string | null): RestrictApplicationsDialog;

        // Owm methods of MalcontentUi-1.RestrictApplicationsDialog

        /**
         * Get the app filter settings currently configured in the dialog, by modifying
         * the given `builder`.
         *
         * Typically this will be called in the handler for #GtkDialog::response.
         * @param builder an existing #MctAppFilterBuilder to modify
         */
        build_app_filter(builder: Malcontent.AppFilterBuilder): void;
        /**
         * Get the value of #MctRestrictApplicationsDialog:app-filter. If the property
         * was originally set to %NULL, this will be the empty app filter.
         * @returns the initial app filter used to    populate the dialog
         */
        get_app_filter(): Malcontent.AppFilter;
        /**
         * Get the value of #MctRestrictApplicationsDialog:user-display-name.
         * @returns the display name of the user the dialog    is configured for, or %NULL if unknown
         */
        get_user_display_name(): string | null;
        /**
         * Set the value of #MctRestrictApplicationsDialog:app-filter.
         * @param app_filter the app filter to configure the dialog    from, or %NULL to use an empty app filter
         */
        set_app_filter(app_filter?: Malcontent.AppFilter | null): void;
        /**
         * Set the value of #MctRestrictApplicationsDialog:user-display-name.
         * @param user_display_name the display name of the user    to configure the dialog for, or %NULL if unknown
         */
        set_user_display_name(user_display_name?: string | null): void;
    }

    module RestrictApplicationsSelector {
        // Signal callback interfaces

        interface Changed {
            (): void;
        }

        // Constructor properties interface
    }

    /**
     * The ‘Restrict Applications’ selector is a list box which shows the available
     * applications on the system alongside a column of toggle switches, which
     * allows the given user to be prevented from running each application.
     *
     * The selector takes an #MctRestrictApplicationsSelector:app-filter as input
     * to set up the UI, and returns its output as set of modifications to a given
     * #MctAppFilterBuilder using
     * mct_restrict_applications_selector_build_app_filter().
     */
    class RestrictApplicationsSelector extends Gtk.Box {
        // Own properties of MalcontentUi-1.RestrictApplicationsSelector

        /**
         * The user’s current app filter, used to set up the selector. As app filters
         * are immutable, it is not updated as the selector is changed. Use
         * mct_restrict_applications_selector_build_app_filter() to build the new app
         * filter.
         */
        app_filter: Malcontent.AppFilter;
        /**
         * The user’s current app filter, used to set up the selector. As app filters
         * are immutable, it is not updated as the selector is changed. Use
         * mct_restrict_applications_selector_build_app_filter() to build the new app
         * filter.
         */
        appFilter: Malcontent.AppFilter;

        // Constructors of MalcontentUi-1.RestrictApplicationsSelector

        static ['new'](app_filter: Malcontent.AppFilter): RestrictApplicationsSelector;

        // Owm methods of MalcontentUi-1.RestrictApplicationsSelector

        /**
         * Get the app filter settings currently configured in the selector, by modifying
         * the given `builder`.
         * @param builder an existing #MctAppFilterBuilder to modify
         */
        build_app_filter(builder: Malcontent.AppFilterBuilder): void;
        /**
         * Get the value of #MctRestrictApplicationsSelector:app-filter. If the property
         * was originally set to %NULL, this will be the empty app filter.
         * @returns the initial app filter used to    populate the selector
         */
        get_app_filter(): Malcontent.AppFilter;
        /**
         * Set the value of #MctRestrictApplicationsSelector:app-filter.
         *
         * This will overwrite any user changes to the selector, so they should be saved
         * first using mct_restrict_applications_selector_build_app_filter() if desired.
         * @param app_filter the app filter to configure the selector    from, or %NULL to use an empty app filter
         */
        set_app_filter(app_filter?: Malcontent.AppFilter | null): void;
    }

    module UserControls {
        // Constructor properties interface
    }

    /**
     * A group of widgets which allow setting the parental controls for a given
     * user.
     *
     * If #MctUserControls:user is set, the current parental controls settings for
     * that user will be loaded and displayed, and any changes made via the controls
     * will be automatically saved for that user (potentially after a short
     * timeout).
     *
     * If #MctUserControls:user is unset (for example, if setting the parental
     * controls for a user account which hasn’t yet been created), the controls can
     * be initialised by setting:
     *  * #MctUserControls:app-filter
     *  * #MctUserControls:user-account-type
     *  * #MctUserControls:user-locale
     *  * #MctUserControls:user-display-name
     *
     * When #MctUserControls:user is unset, changes made to the parental controls
     * cannot be saved automatically, and must be queried using
     * mct_user_controls_build_app_filter(), then saved by the calling code.
     *
     * As parental controls are system settings, privileges are needed to view and
     * edit them (for the current user or for other users). These can be acquired
     * using polkit. #MctUserControls:permission is used to query the current
     * permissions for getting/setting parental controls. If it’s %NULL, or if
     * permissions are not currently granted, the #MctUserControls will be
     * insensitive.
     */
    class UserControls extends Adw.Bin {
        // Own properties of MalcontentUi-1.UserControls

        /**
         * The user’s current app filter, used to set up the user controls. As app
         * filters are immutable, it is not updated as the user controls are changed.
         * Use mct_user_controls_build_app_filter() to build the new app filter.
         *
         * This may be %NULL if the app filter is unknown, or if querying it from
         * #MctUserControls:user fails.
         */
        app_filter: Malcontent.AppFilter;
        /**
         * The user’s current app filter, used to set up the user controls. As app
         * filters are immutable, it is not updated as the user controls are changed.
         * Use mct_user_controls_build_app_filter() to build the new app filter.
         *
         * This may be %NULL if the app filter is unknown, or if querying it from
         * #MctUserControls:user fails.
         */
        appFilter: Malcontent.AppFilter;
        /**
         * A connection to the system bus. This will be used for retrieving details
         * of user accounts, and must be provided at construction time.
         */
        dbus_connection: Gio.DBusConnection;
        /**
         * A connection to the system bus. This will be used for retrieving details
         * of user accounts, and must be provided at construction time.
         */
        dbusConnection: Gio.DBusConnection;
        /**
         * The description for the currently selected user account, or %NULL if no
         * user is selected.
         *
         * If set, it must be valid UTF-8 and non-empty.
         */
        description: string;
        permission: Gio.Permission;
        user: AccountsService.User;
        /**
         * The type of the currently selected user account.
         */
        user_account_type: AccountsService.UserAccountType;
        /**
         * The type of the currently selected user account.
         */
        userAccountType: AccountsService.UserAccountType;
        /**
         * The display name for the currently selected user account, or %NULL if no
         * user is selected. This will typically be the user’s full name (if known)
         * or their username.
         *
         * If set, it must be valid UTF-8 and non-empty.
         */
        user_display_name: string;
        /**
         * The display name for the currently selected user account, or %NULL if no
         * user is selected. This will typically be the user’s full name (if known)
         * or their username.
         *
         * If set, it must be valid UTF-8 and non-empty.
         */
        userDisplayName: string;
        /**
         * The locale for the currently selected user account, or %NULL if no
         * user is selected.
         *
         * If set, it must be in the format documented by [`setlocale()`](man:setlocale(3)):
         * ```
         * language[_territory][.codeset][`modifier]`
         * ```
         * where `language` is an ISO 639 language code, `territory` is an ISO 3166
         * country code, and `codeset` is a character set or encoding identifier like
         * `ISO-8859-1` or `UTF-8`.
         */
        user_locale: string;
        /**
         * The locale for the currently selected user account, or %NULL if no
         * user is selected.
         *
         * If set, it must be in the format documented by [`setlocale()`](man:setlocale(3)):
         * ```
         * language[_territory][.codeset][`modifier]`
         * ```
         * where `language` is an ISO 639 language code, `territory` is an ISO 3166
         * country code, and `codeset` is a character set or encoding identifier like
         * `ISO-8859-1` or `UTF-8`.
         */
        userLocale: string;

        // Owm methods of MalcontentUi-1.UserControls

        /**
         * Get the app filter settings currently configured in the user controls, by
         * modifying the given `builder`. This can be used to save the settings manually.
         * @param builder an existing #MctAppFilterBuilder to modify
         */
        build_app_filter(builder: Malcontent.AppFilterBuilder): void;
        /**
         * Get the value of #MctUserControls:app-filter. If the app filter is unknown
         * or could not be retrieved from #MctUserControls:user, this will be %NULL.
         * @returns the initial app filter used to    populate the user controls, or %NULL if unknown
         */
        get_app_filter(): Malcontent.AppFilter | null;
        /**
         * Get the value of #MctUserControls:permission.
         * @returns a #GPermission indicating whether the    current user has permission to view or change parental controls, or %NULL    if permission is not allowed or is unknown
         */
        get_permission(): Gio.Permission | null;
        /**
         * Get the value of #MctUserControls:user.
         * @returns the user the controls are configured for,    or %NULL if unknown
         */
        get_user(): AccountsService.User | null;
        /**
         * Get the value of #MctUserControls:user-account-type.
         * @returns the account type of the user the controls are configured for
         */
        get_user_account_type(): AccountsService.UserAccountType;
        /**
         * Get the value of #MctUserControls:user-display-name.
         * @returns the display name of the user the controls    are configured for, or %NULL if unknown
         */
        get_user_display_name(): string | null;
        /**
         * Get the value of #MctUserControls:user-locale.
         * @returns the locale of the user the controls    are configured for, or %NULL if unknown
         */
        get_user_locale(): string | null;
        /**
         * Set the value of #MctUserControls:app-filter.
         *
         * This will overwrite any user changes to the controls, so they should be saved
         * first using mct_user_controls_build_app_filter() if desired. They will be
         * saved automatically if #MctUserControls:user is set.
         * @param app_filter the app filter to configure the user    controls from, or %NULL if unknown
         */
        set_app_filter(app_filter?: Malcontent.AppFilter | null): void;
        /**
         * Set the value of #MctUserControls:description.
         * @param description the description shown    above the controls, or %NULL if none.
         */
        set_description(description?: string | null): void;
        /**
         * Set the value of #MctUserControls:permission.
         * @param permission the #GPermission indicating whether    the current user has permission to view or change parental controls, or    %NULL if permission is not allowed or is unknown
         */
        set_permission(permission?: Gio.Permission | null): void;
        /**
         * Set the value of #MctUserControls:user.
         * @param user the user to configure the controls for,    or %NULL if unknown
         */
        set_user(user?: AccountsService.User | null): void;
        /**
         * Set the value of #MctUserControls:user-account-type.
         * @param user_account_type the account type of the user to configure the controls for
         */
        set_user_account_type(user_account_type: AccountsService.UserAccountType): void;
        /**
         * Set the value of #MctUserControls:user-display-name.
         * @param user_display_name the display name of the user    to configure the controls for, or %NULL if unknown
         */
        set_user_display_name(user_display_name?: string | null): void;
        /**
         * Set the value of #MctUserControls:user-locale.
         * @param user_locale the locale of the user    to configure the controls for, or %NULL if unknown
         */
        set_user_locale(user_locale?: string | null): void;
    }

    class RestrictApplicationsDialogClass {}

    class RestrictApplicationsSelectorClass {}

    class UserControlsClass {}

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
