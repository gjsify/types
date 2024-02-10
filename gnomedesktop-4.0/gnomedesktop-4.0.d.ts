/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gnomedesktop-4.0-ambient.d.ts';
import './gnomedesktop-4.0-import.d.ts';
/**
 * GnomeDesktop-4.0
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type GDesktopEnums from '@girs/gdesktopenums-3.0';

export namespace GnomeDesktop {
    enum DesktopThumbnailSize {
        NORMAL,
        LARGE,
        XLARGE,
        XXLARGE,
    }
    const DESKTOP_PLATFORM_VERSION: number;
    /**
     * Returns whether the thumbnail has the correct uri and mtime embedded in the
     * png options. This function is threadsafe and does no blocking I/O.
     * @param pixbuf an loaded thumbnail #GdkPixbuf
     * @param uri a uri
     * @param mtime the mtime
     * @returns TRUE if the thumbnail has the right @uri and @mtime
     */
    function desktop_thumbnail_is_valid(pixbuf: GdkPixbuf.Pixbuf, uri: string, mtime: number): boolean;
    /**
     * Returns the filename that a thumbnail of size `size` for `uri` would have.
     * This function is threadsafe and does no blocking I/O.
     * @param uri an uri
     * @param size a thumbnail size
     * @returns an absolute filename
     */
    function desktop_thumbnail_path_for_uri(uri: string, size: DesktopThumbnailSize): string;
    /**
     * Gets all locales.
     * @returns a newly allocated %NULL-terminated string array containing the   all locales. Free with g_strfreev().
     */
    function get_all_locales(): string[];
    /**
     * Gets the country name for `code`. If `translation` is provided the
     * returned string is translated accordingly.
     * @param code an ISO 3166 code string
     * @param translation a locale string
     * @returns the country name. Caller takes ownership.
     */
    function get_country_from_code(code: string, translation?: string | null): string;
    /**
     * Gets the country description for `locale`. If `translation` is
     * provided the returned string is translated accordingly.
     * @param locale a locale string
     * @param translation a locale string
     * @returns the country description. Caller takes ownership.
     */
    function get_country_from_locale(locale: string, translation?: string | null): string;
    /**
     * Gets the default input source's type and identifier for a given
     * locale.
     * @param locale a locale string
     * @returns %TRUE if a input source exists or %FALSE otherwise.
     */
    function get_input_source_from_locale(locale: string): boolean;
    /**
     * Gets the language name for `code`. If `translation` is provided the
     * returned string is translated accordingly.
     * @param code an ISO 639 code string
     * @param translation a locale string
     * @returns the language name. Caller takes ownership.
     */
    function get_language_from_code(code: string, translation?: string | null): string;
    /**
     * Gets the language description for `locale`. If `translation` is
     * provided the returned string is translated accordingly.
     * @param locale a locale string
     * @param translation a locale string
     * @returns the language description. Caller takes ownership.
     */
    function get_language_from_locale(locale: string, translation?: string | null): string;
    /**
     * Returns an integer with the major version of GNOME. Useful for
     * dynamic languages like Javascript or Python (static languages like
     * C should use %GNOME_DESKTOP_PLATFORM_VERSION). If this
     * function doesn't exist, it can be presumed that the GNOME platform
     * version is 42 or previous.
     * @returns an integer with the major version of GNOME.
     */
    function get_platform_version(): number;
    /**
     * Gets a translation of the raw `modifier` string. If `translation`
     * is provided the returned string is translated accordingly.
     * @param modifier the modifier part of a locale name
     * @param translation a locale string
     * @returns the translated modifier string. Caller takes ownership.
     */
    function get_translated_modifier(modifier: string, translation?: string | null): string;
    /**
     * Returns %TRUE if there are translations for language `code`.
     * @param code an ISO 639 code string
     * @returns %TRUE if there are translations for language @code.
     */
    function language_has_translations(code: string): boolean;
    /**
     * Gets the normalized locale string in the form
     * [language[_country][.codeset][`modifier]`] for `name`.
     * @param locale a locale string
     * @returns normalized locale string. Caller takes ownership.
     */
    function normalize_locale(locale: string): string;
    /**
     * Extracts the various components of a locale string in XPG format.
     * ([language[_country][.codeset][`modifier]`]). See
     * http://en.wikipedia.org/wiki/Locale.
     * @param locale a locale string
     * @returns %TRUE if parsing was successful.
     */
    function parse_locale(locale: string): boolean;
    /**
     * If the current process is running inside a user systemd instance, then move
     * the launched PID into a transient scope. The given `name` will be used to
     * create a unit name. It should be the application ID or the executable in all
     * other cases. If a desktop-id is passed then the .desktop suffix will be
     * stripped.
     *
     * It is advisable to use this function every time where the started application
     * can be considered reasonably independent of the launching application. Placing
     * it in a scope creates proper separation between the programs rather than being
     * considered a single entity by systemd.
     *
     * It is always safe to call this function. Note that a successful return code
     * does not imply that a unit has been created. It solely means that no error
     * condition was hit sending the request.
     *
     * If `connection` is %NULL then g_dbus_get() will be called internally.
     *
     * Note that most callers will not need to handle errors. As such, it is normal
     * to pass a %NULL `callback`.
     * @param name Name for the application
     * @param pid The PID of the application
     * @param description A description to use for the unit, or %NULL
     * @param connection An #GDBusConnection to the session bus, or %NULL
     * @param cancellable #GCancellable to use
     * @param callback Callback to call when the operation is done
     */
    function start_systemd_scope(
        name: string,
        pid: number,
        description?: string | null,
        connection?: Gio.DBusConnection | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<string> | null,
    ): void;
    /**
     * Finish an asynchronous operation to create a transient scope that was
     * started with gnome_start_systemd_scope().
     *
     * Note that a successful return code does not imply that a unit has been
     * created. It solely means that no error condition was hit sending the request.
     * @param res A #GAsyncResult
     * @returns %FALSE on error, %TRUE otherwise
     */
    function start_systemd_scope_finish(res: Gio.AsyncResult): boolean;
    interface IdleMonitorWatchFunc {
        (monitor: IdleMonitor, id: number): void;
    }
    module DesktopThumbnailFactory {
        // Constructor properties interface
    }

    class DesktopThumbnailFactory extends GObject.Object {
        // Constructors of GnomeDesktop-4.0.DesktopThumbnailFactory

        static ['new'](size: DesktopThumbnailSize): DesktopThumbnailFactory;

        // Owm methods of GnomeDesktop-4.0.DesktopThumbnailFactory

        /**
         * Returns TRUE if this GnomeDesktopThumbnailFactory can (at least try) to thumbnail
         * this file. Thumbnails or files with failed thumbnails won't be thumbnailed.
         *
         * Usage of this function is threadsafe and does blocking I/O.
         * @param uri the uri of a file
         * @param mime_type the mime type of the file
         * @param mtime the mtime of the file
         * @returns TRUE if the file can be thumbnailed.
         */
        can_thumbnail(uri: string, mime_type: string, mtime: number): boolean;
        /**
         * Creates a failed thumbnail for the file so that we don't try
         * to re-thumbnail the file later.
         *
         * Usage of this function is threadsafe and does blocking I/O.
         * @param uri the uri of a file
         * @param mtime the modification time of the file
         * @param cancellable a GCancellable object, or NULL
         * @returns TRUE if everything went fine; FALSE if there was an error.
         */
        create_failed_thumbnail(uri: string, mtime: number, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronous version of gnome_desktop_thumbnail_factory_create_failed_thumbnail()
         *
         * Since 43.0
         * @param uri the uri of a file
         * @param original_mtime the modification time of the original file
         * @param cancellable a Cancellable object
         * @param callback a function that will be called when the task has ended
         */
        create_failed_thumbnail_async(
            uri: string,
            original_mtime: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        create_failed_thumbnail_finish(result: Gio.AsyncResult): boolean;
        /**
         * Tries to generate a thumbnail for the specified file. If it succeeds
         * it returns a pixbuf that can be used as a thumbnail.
         *
         * Usage of this function is threadsafe and does blocking I/O.
         * @param uri the uri of a file
         * @param mime_type the mime type of the file
         * @param cancellable a #GCancellable object or NULL
         * @returns thumbnail pixbuf if thumbnailing succeeded, %NULL otherwise and error will be set
         */
        generate_thumbnail(uri: string, mime_type: string, cancellable?: Gio.Cancellable | null): GdkPixbuf.Pixbuf;
        /**
         * Asynchronous version of gnome_desktop_thumbnail_factory_generate_thumbnail()
         *
         * Since 43.0
         * @param uri the URI of a file
         * @param mime_type the MIME type of the file
         * @param cancellable a Cancellable object
         * @param callback a function that will be called when the task has ended
         */
        generate_thumbnail_async(
            uri: string,
            mime_type: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        generate_thumbnail_finish(result: Gio.AsyncResult): GdkPixbuf.Pixbuf;
        /**
         * Tries to locate an failed thumbnail for the file specified. Writing
         * and looking for failed thumbnails is important to avoid to try to
         * thumbnail e.g. broken images several times.
         *
         * Usage of this function is threadsafe and does blocking I/O.
         * @param uri the uri of a file
         * @param mtime the mtime of the file
         * @returns TRUE if there is a failed thumbnail for the file.
         */
        has_valid_failed_thumbnail(uri: string, mtime: number): boolean;
        /**
         * Tries to locate an existing thumbnail for the file specified.
         *
         * Usage of this function is threadsafe and does blocking I/O.
         * @param uri the uri of a file
         * @param mtime the mtime of the file
         * @returns The absolute path of the thumbnail, or %NULL if none exist.
         */
        lookup(uri: string, mtime: number): string;
        /**
         * Saves `thumbnail` at the right place. If the save fails a
         * failed thumbnail is written.
         *
         * Usage of this function is threadsafe and does blocking I/O.
         * @param thumbnail the thumbnail as a pixbuf
         * @param uri the uri of a file
         * @param original_mtime the modification time of the original file
         * @param cancellable a GCancellable object, or NULL
         * @returns TRUE if everything went fine; FALSE if there was an error.
         */
        save_thumbnail(
            thumbnail: GdkPixbuf.Pixbuf,
            uri: string,
            original_mtime: number,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronous version of gnome_desktop_thumbnail_factory_save_thumbnail()
         *
         * Since 43.0
         * @param thumbnail the thumbnail as a pixbuf
         * @param uri the uri of a file
         * @param original_mtime the modification time of the original file
         * @param cancellable a Cancellable object
         * @param callback a function that will be called when the task has ended
         */
        save_thumbnail_async(
            thumbnail: GdkPixbuf.Pixbuf,
            uri: string,
            original_mtime: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        save_thumbnail_finish(result: Gio.AsyncResult): boolean;
    }

    module IdleMonitor {
        // Constructor properties interface
    }

    class IdleMonitor extends GObject.Object {
        // Constructors of GnomeDesktop-4.0.IdleMonitor

        static ['new'](): IdleMonitor;

        // Owm methods of GnomeDesktop-4.0.IdleMonitor

        add_idle_watch(interval_msec: number, callback?: IdleMonitorWatchFunc | null): number;
        add_user_active_watch(callback?: IdleMonitorWatchFunc | null): number;
        get_idletime(): number;
        /**
         * Removes an idle time watcher, previously added by
         * gnome_idle_monitor_add_idle_watch() or
         * gnome_idle_monitor_add_user_active_watch().
         * @param id A watch ID
         */
        remove_watch(id: number): void;
    }

    module PnpIds {
        // Constructor properties interface
    }

    class PnpIds extends GObject.Object {
        // Constructors of GnomeDesktop-4.0.PnpIds

        static ['new'](): PnpIds;

        // Owm methods of GnomeDesktop-4.0.PnpIds

        /**
         * Find the full manufacturer name for the given PNP ID.
         * @param pnp_id the PNP ID to look for
         * @returns a new string representing the manufacturer name, or %NULL when not found.
         */
        get_pnp_id(pnp_id: string): string;
    }

    module WallClock {
        // Constructor properties interface
    }

    class WallClock extends GObject.Object {
        // Own properties of GnomeDesktop-4.0.WallClock

        /**
         * A formatted string representing the current clock display.
         */
        readonly clock: string;
        /**
         * If %TRUE, the formatted clock will always have seconds precision and the
         * 'clock' property will always be updated every second, irrespective of
         * system configuration.
         */
        force_seconds: boolean;
        /**
         * If %TRUE, the formatted clock will always have seconds precision and the
         * 'clock' property will always be updated every second, irrespective of
         * system configuration.
         */
        forceSeconds: boolean;
        /**
         * If %TRUE, the formatted clock will never include a date or the
         * day of the week, irrespective of configuration.
         */
        time_only: boolean;
        /**
         * If %TRUE, the formatted clock will never include a date or the
         * day of the week, irrespective of configuration.
         */
        timeOnly: boolean;
        /**
         * The timezone used for this clock
         */
        readonly timezone: GLib.TimeZone;

        // Own fields of GnomeDesktop-4.0.WallClock

        parent_object: GObject.Object;

        // Constructors of GnomeDesktop-4.0.WallClock

        static ['new'](): WallClock;

        // Owm methods of GnomeDesktop-4.0.WallClock

        /**
         * Returns the string representing the current time of this clock
         * according to the user settings.
         * @returns the time of the clock as a string.      This string points to internally allocated storage and      must not be freed, modified or stored.
         */
        get_clock(): string;
        /**
         * Returns the current local time zone used by this clock.
         * @returns the #GTimeZone of the clock.
         */
        get_timezone(): GLib.TimeZone;
        string_for_datetime(
            now: GLib.DateTime,
            clock_format: GDesktopEnums.ClockFormat,
            show_weekday: boolean,
            show_full_date: boolean,
            show_seconds: boolean,
        ): string;
    }

    module XkbInfo {
        // Signal callback interfaces

        interface LayoutsChanged {
            (): void;
        }

        // Constructor properties interface
    }

    class XkbInfo extends GObject.Object {
        // Own fields of GnomeDesktop-4.0.XkbInfo

        parent_object: GObject.Object;

        // Constructors of GnomeDesktop-4.0.XkbInfo

        static ['new'](): XkbInfo;

        // Owm methods of GnomeDesktop-4.0.XkbInfo

        description_for_group(group_id: string): string;
        description_for_option(group_id: string, id: string): string;
        /**
         * Returns a list of all layout identifiers we know about.
         * @returns the list of layout names. The caller takes ownership of the #GList but not of the strings themselves, those are internally allocated and must not be modified.
         */
        get_all_layouts(): string[];
        /**
         * Returns a list of all option group identifiers we know about.
         * @returns the list of option group ids. The caller takes ownership of the #GList but not of the strings themselves, those are internally allocated and must not be modified.
         */
        get_all_option_groups(): string[];
        /**
         * Returns a list of all languages supported by a layout, given by
         * `layout_id`.
         * @param layout_id a layout identifier
         * @returns the list of ISO 639 code strings. The caller takes ownership of the #GList but not of the strings themselves, those are internally allocated and must not be modified.
         */
        get_languages_for_layout(layout_id: string): string[];
        /**
         * Retrieves information about a layout. Both `display_name` and
         * `short_name` are suitable to show in UIs and might be localized if
         * translations are available.
         *
         * Some layouts don't provide a short name (2 or 3 letters) or don't
         * specify a XKB variant, in those cases `short_name` or `xkb_variant`
         * are empty strings, i.e. "".
         *
         * If the given layout doesn't exist the return value is %FALSE and
         * all the (out) parameters are set to %NULL.
         * @param id layout's identifier about which to retrieve the info
         * @returns %TRUE if the layout exists or %FALSE otherwise.
         */
        get_layout_info(id: string): boolean;
        /**
         * Returns a list of all layout identifiers we know about for
         * `country_code`.
         * @param country_code an ISO 3166 code string
         * @returns the list of layout ids. The caller takes ownership of the #GList but not of the strings themselves, those are internally allocated and must not be modified.
         */
        get_layouts_for_country(country_code: string): string[];
        /**
         * Returns a list of all layout identifiers we know about for
         * `language_code`.
         * @param language_code an ISO 639 code string
         * @returns the list of layout ids. The caller takes ownership of the #GList but not of the strings themselves, those are internally allocated and must not be modified.
         */
        get_layouts_for_language(language_code: string): string[];
        /**
         * Returns a list of all option identifiers we know about for group
         * `group_id`.
         * @param group_id group's identifier about which to retrieve the options
         * @returns the list of option ids. The caller takes ownership of the #GList but not of the strings themselves, those are internally allocated and must not be modified.
         */
        get_options_for_group(group_id: string): string[];
    }

    class DesktopThumbnailFactoryClass {}

    class DesktopThumbnailFactoryPrivate {}

    class IdleMonitorClass {}

    class IdleMonitorPrivate {}

    class PnpIdsClass {}

    class PnpIdsPrivate {}

    class WallClockClass {}

    class WallClockPrivate {}

    class XkbInfoClass {}

    class XkbInfoPrivate {}

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

export default GnomeDesktop;
// END
