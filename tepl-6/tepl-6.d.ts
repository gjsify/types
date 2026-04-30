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
import type GtkSource from '@girs/gtksource-300';
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
import type Amtk from '@girs/amtk-5';

export namespace Tepl {
    /**
     * Tepl-6
     */

    /**
     * @gir-type Enum
     */
    export namespace InfoBarLocation {
        export const $gtype: GObject.GType<InfoBarLocation>;
    }

    /**
     * Location inside the content area.
     *
     * The content area of a {@link Tepl.InfoBar} contains a vertical container containing:
     * - First, an horizontal container containing:
     *   - A place for an optional icon.
     *   - The {@link Tepl.InfoBarLocation.ALONGSIDE_ICON} location, which is a vertical
     *     container that can contain: primary/secondary messages plus additional
     *     widgets, in the order that they are added.
     * - The {@link Tepl.InfoBarLocation.BELOW_ICON} location, which can contain
     *   additional widgets, in the order that they are added. So the widgets added
     *   here are under the icon and under the
     *   {@link Tepl.InfoBarLocation.ALONGSIDE_ICON} location.
     * @gir-type Enum
     * @since 6.0
     */
    enum InfoBarLocation {
        /**
         * on the right side of the icon.
         */
        ALONGSIDE_ICON,
        /**
         * below the icon.
         */
        BELOW_ICON,
    }

    /**
     * @gir-type Enum
     */
    export namespace NewlineType {
        export const $gtype: GObject.GType<NewlineType>;
    }

    /**
     * @gir-type Enum
     * @since 1.0
     */
    enum NewlineType {
        /**
         * line feed, used on UNIX.
         */
        LF,
        /**
         * carriage return, used on Mac.
         */
        CR,
        /**
         * carriage return followed by a line feed, used
         *   on Windows.
         */
        CR_LF,
    }

    /**
     * @gir-type Enum
     */
    export namespace SelectionType {
        export const $gtype: GObject.GType<SelectionType>;
    }

    /**
     * @gir-type Enum
     * @since 1.0
     */
    enum SelectionType {
        /**
         * No selection.
         */
        NO_SELECTION,
        /**
         * The start and end selection bounds are on
         *   the same line.
         */
        ON_SAME_LINE,
        /**
         * The selection spans multiple lines.
         */
        MULTIPLE_LINES,
    }

    /**
     * @gir-type Enum
     */
    export namespace SettingsThemeVariant {
        export const $gtype: GObject.GType<SettingsThemeVariant>;
    }

    /**
     * This enum is intended to be used for controlling the GTK theme preference.
     * @gir-type Enum
     * @since 6.10
     */
    enum SettingsThemeVariant {
        /**
         * Follow the system's preference.
         */
        SYSTEM,
        /**
         * Force a light theme.
         */
        LIGHT,
        /**
         * Force a dark theme.
         */
        DARK,
    }

    /**
     * A priority that can be used when adding a {@link Gtk.StyleProvider} for
     * library-specific style information.
     *
     * Has a higher priority than `GTK_STYLE_PROVIDER_PRIORITY_SETTINGS` and a lower
     * priority than `GTK_STYLE_PROVIDER_PRIORITY_APPLICATION`.
     *
     * The Tepl library uses this priority for its {@link Gtk.StyleProvider}'s.
     * @since 6.0
     */
    const UTILS_STYLE_PROVIDER_PRIORITY_LIBRARY: number;
    /**
     * Free the resources allocated by Tepl. For example it unrefs the singleton
     * objects.
     *
     * This function also calls `amtk_finalize()`, `gfls_finalize()` and
     * `gtk_source_finalize()`.
     *
     * It is not mandatory to call this function, it's just to be friendlier to
     * memory debugging tools. This function is meant to be called at the end of
     * `main()`. It can be called several times.
     * @since 3.0
     */
    function finalize(): void;
    /**
     * Initializes the Tepl library (e.g. for the internationalization).
     *
     * This function can be called several times, but is meant to be called at the
     * beginning of `main()`, before any other Tepl function call.
     *
     * This function also calls `amtk_init()`, `gfls_init()` and `gtk_source_init()`.
     * @since 3.0
     */
    function init(): void;
    /**
     * When a {@link Gio.IOErrorEnum.CANT_CREATE_BACKUP} error occurs while saving `location`,
     * offer two possible actions:
     * - Save anyway: {@link Gtk.ResponseType.YES}.
     * - Don't save: {@link Gtk.ResponseType.CANCEL}.
     * @param location the {@link Gio.File} for which the backup failed to be created.
     * @param error must be a {@link Gio.IOErrorEnum.CANT_CREATE_BACKUP}.
     * @returns the newly created {@link Tepl.InfoBar}.
     * @since 5.0
     */
    function io_error_info_bar_cant_create_backup(location: Gio.File, error: GLib.Error): InfoBar;
    /**
     * Creates a warning about `location` having changed on disk. The possible
     * actions:
     * - Depending on `document_modified`, "Reload" or "Drop changes and reload":
     *   {@link Gtk.ResponseType.OK}.
     * - Ignore: {@link Gtk.ResponseType.CLOSE}.
     * @param location the {@link Gio.File} for which there has been an external modification.
     * @param document_modified whether the document (e.g. the {@link Gtk.TextBuffer}) has   unsaved modifications.
     * @returns the newly created {@link Tepl.InfoBar}.
     * @since 5.0
     */
    function io_error_info_bar_externally_modified(location: Gio.File, document_modified: boolean): InfoBar;
    /**
     * Creates a warning about `location` being already open in another window,
     * offering two possible actions:
     * - Edit anyway: {@link Gtk.ResponseType.YES}.
     * - Don't edit: {@link Gtk.ResponseType.CANCEL}.
     * @param location the {@link Gio.File} already open in another window.
     * @returns the newly created {@link Tepl.InfoBar}.
     * @since 5.0
     */
    function io_error_info_bar_file_already_open(location: Gio.File): InfoBar;
    /**
     * For file saving, creates a warning about invalid characters that can corrupt
     * the file. Possible actions:
     * - Save anyway: {@link Gtk.ResponseType.YES}.
     * - Don't save: {@link Gtk.ResponseType.CANCEL}.
     * @param location where to save the document.
     * @returns the newly created {@link Tepl.InfoBar}.
     * @since 5.0
     */
    function io_error_info_bar_invalid_characters(location: Gio.File): InfoBar;
    /**
     * When attempting to save `location`, creates a warning about `location` having
     * changed on disk. The possible actions:
     * - Save anyway: {@link Gtk.ResponseType.YES}.
     * - Don't save: {@link Gtk.ResponseType.CANCEL}.
     * @param location a {@link Gio.File}.
     * @returns the newly created {@link Tepl.InfoBar}.
     * @since 6.4
     */
    function io_error_info_bar_saving_externally_modified(location: Gio.File): InfoBar;
    /**
     * Appends {@link Gtk.MenuItem}'s to `menu_shell` for the following {@link Gio.Action}'s:
     * - `"win.tepl-cut"`
     * - `"win.tepl-copy"`
     * - `"win.tepl-paste"`
     * - `"win.tepl-delete"`
     * - `"win.tepl-select-all"`
     *
     * See the [list of GActions implemented in
     * TeplApplicationWindow][tepl-application-window-gactions]. This function
     * correctly uses the {@link Amtk.FactoryFlags.IGNORE_ACCELS_FOR_APP} flag to create the
     * {@link Gtk.MenuItem}'s.
     * @param menu_shell a {@link Gtk.MenuShell}.
     * @since 3.0
     */
    function menu_shell_append_edit_actions(menu_shell: Gtk.MenuShell): void;
    /**
     * Decrements the counter for `type`.
     *
     * For a {@link GObject.Object} class, this function must be called in the `_finalize()`
     * destructor function.
     * @param type the object type, as a string.
     * @since 6.10
     */
    function object_counters_decrement(type: string): void;
    /**
     * Prints a warning for each type for which the counter hasn't reached zero.
     *
     * This function is intended to be called once, towards the end of the `main()`
     * function.
     *
     * After calling this function, the other TeplObjectCounters functions must not
     * be called anymore.
     * @since 6.10
     */
    function object_counters_final_check(): void;
    /**
     * Increments the counter for `type`.
     *
     * For a {@link GObject.Object} class, this function must be called in the `_init()` function,
     * when an instance is created.
     * @param type the object type, as a string.
     * @since 6.10
     */
    function object_counters_increment(type: string): void;
    /**
     * Must be called before using the other TeplObjectCounters functions, usually
     * early in the `main()` function.
     * @since 6.10
     */
    function object_counters_init(): void;
    /**
     * This function will generate CSS suitable for the GTK CSS engine based on the
     * properties of the {@link Pango.FontDescription}.
     *
     * The returned string contains only the CSS declarations, it is not a complete
     * CSS rule set. So the selector and curly braces are not present. Each
     * declaration, including the last one, ends with a semicolon.
     *
     * See also `tepl_utils_override_font_description()` and
     * `tepl_utils_override_font_string()`.
     * @param desc a {@link Pango.FontDescription}.
     * @returns A newly allocated string containing the CSS   describing the font description. Free with `g_free()` when no longer needed.
     * @since 6.0
     */
    function pango_font_description_to_css(desc: Pango.FontDescription): string;
    /**
     * @param settings a {@link Gio.Settings}.
     * @param key a key part of `settings`. The type of the key must be a boolean.
     * @param mnemonic_text the text (with mnemonic) for the {@link Gtk.CheckButton}.
     * @returns a {@link Gtk.CheckButton} to configure `key`.
     * @since 6.13
     */
    function prefs_create_checkbutton_simple(settings: Gio.Settings, key: string, mnemonic_text: string): Gtk.Widget;
    /**
     * @param settings a {@link Gio.Settings}.
     * @param display_line_numbers_key a key part of `settings`. The type of the key must   be a boolean.
     * @returns A {@link Gtk.CheckButton} intended for   {@link GtkSource.View.show_line_numbers}.
     * @since 6.2
     */
    function prefs_create_display_line_numbers_checkbutton(
        settings: Gio.Settings,
        display_line_numbers_key: string,
    ): Gtk.Widget;
    /**
     * @param settings a {@link Gio.Settings}.
     * @param display_statusbar_key a key part of `settings`. The type of the key must be   a boolean.
     * @returns A {@link Gtk.CheckButton} intended for configuring the   visibility of a {@link Gtk.Statusbar}.
     * @since 6.10
     */
    function prefs_create_display_statusbar_checkbutton(
        settings: Gio.Settings,
        display_statusbar_key: string,
    ): Gtk.Widget;
    /**
     * @param settings a {@link Gio.Settings}.
     * @param create_backup_copy_key a key part of `settings`. The type of the key must be   a boolean. Intended to be used with {@link Tepl.FileSaverFlags.CREATE_BACKUP}   (for example).
     * @param auto_save_key a key part of `settings`. The type of the key must be a   boolean. Whether to autosave files.
     * @param auto_save_interval a key part of `settings`. The type of the key must be an   unsigned integer, with a range. The interval is in minutes.
     * @returns a component for some files preferences.
     * @since 6.2
     */
    function prefs_create_files_component(
        settings: Gio.Settings,
        create_backup_copy_key: string,
        auto_save_key: string,
        auto_save_interval: string,
    ): Gtk.Widget;
    /**
     * @param settings a {@link Gio.Settings}.
     * @param use_default_font_key a key part of `settings` to store whether to use the   system font. The type of the key must be a boolean.
     * @param editor_font_key a key part of `settings` to store the editor font. The type   of the key must be a string.
     * @returns A component for configuring the font.
     * @since 6.2
     */
    function prefs_create_font_component(
        settings: Gio.Settings,
        use_default_font_key: string,
        editor_font_key: string,
    ): Gtk.Widget;
    /**
     * @param settings a {@link Gio.Settings}.
     * @param highlight_current_line_key a key part of `settings`. The type of the key   must be a boolean.
     * @param highlight_matching_brackets_key a key part of `settings`. The type of the   key must be a boolean.
     * @returns a component intended for   {@link GtkSource.View.highlight_current_line} and   {@link GtkSource.Buffer.highlight_matching_brackets}.
     * @since 6.2
     */
    function prefs_create_highlighting_component(
        settings: Gio.Settings,
        highlight_current_line_key: string,
        highlight_matching_brackets_key: string,
    ): Gtk.Widget;
    /**
     * @param settings a {@link Gio.Settings}.
     * @param insert_spaces_key a key part of `settings`. The type of the key must be a   boolean.
     * @param smart_backspace_key a key part of `settings`. The type of the key must be a   boolean.
     * @returns a component intended for   {@link GtkSource.View.insert_spaces_instead_of_tabs} and   {@link GtkSource.View.smart_backspace}.
     * @since 6.2
     */
    function prefs_create_insert_spaces_component(
        settings: Gio.Settings,
        insert_spaces_key: string,
        smart_backspace_key: string,
    ): Gtk.Widget;
    /**
     * @param settings a {@link Gio.Settings}.
     * @param display_right_margin_key a key part of `settings`. The type of the key must   be a boolean.
     * @param right_margin_position_key a key part of `settings`. The type of the key must   be an unsigned integer.
     * @returns a component intended for   {@link GtkSource.View.show_right_margin} and {@link GtkSource.View.right_margin_position}.
     * @since 6.10
     */
    function prefs_create_right_margin_component(
        settings: Gio.Settings,
        display_right_margin_key: string,
        right_margin_position_key: string,
    ): Gtk.Widget;
    /**
     * @param settings a {@link Gio.Settings}.
     * @param tab_width_key a key part of `settings`. The type of the key must be an   unsigned integer, with a range.
     * @returns A widget containing a {@link Gtk.SpinButton} intended   for {@link GtkSource.View.tab_width}.
     * @since 6.2
     */
    function prefs_create_tab_width_spinbutton(settings: Gio.Settings, tab_width_key: string): Gtk.Widget;
    /**
     * @param settings a {@link Gio.Settings}.
     * @param theme_variant_key a key part of `settings`. Its type must be an enum for   {@link Tepl.SettingsThemeVariant}.
     * @returns A widget containing a {@link Gtk.ComboBoxText} intended   to choose a {@link Tepl.SettingsThemeVariant}.
     * @since 6.10
     */
    function prefs_create_theme_variant_combo_box(settings: Gio.Settings, theme_variant_key: string): Gtk.Widget;
    /**
     * A {@link GObject.BindingTransformFunc} to transform between these two {@link GObject.Value} types:
     * - A {@link GObject.Value} of type `gboolean`.
     * - A {@link GObject.Value} of type {@link GLib.Variant}, with the {@link GLib.Variant} of type boolean.
     *
     * For convenience, this function works in both directions (hence the “smart”),
     * it introspects the types of `from_value` and `to_value`.
     *
     * Note that if `from_value` and `to_value` are of the same {@link GObject.Value} type, this
     * function won't work and you shouldn't use a custom {@link GObject.BindingTransformFunc} in
     * the first place.
     * @param binding a {@link GObject.Binding}.
     * @param from_value the {@link GObject.Value} containing the value to transform.
     * @param to_value the {@link GObject.Value} in which to store the transformed value.
     * @param user_data data passed to the transform function.
     * @returns `true` if the transformation was successful, and `false` otherwise.
     * @since 5.0
     */
    function utils_binding_transform_func_smart_bool(
        binding: GObject.Binding,
        from_value: GObject.Value | any,
        to_value: GObject.Value | any,
        user_data: any | null,
    ): boolean;
    /**
     * Especially useful for external {@link Gio.Settings} (provided by another application
     * for instance).
     *
     * See also: `tepl_utils_can_use_gsettings_schema()` which is typically used
     * before this function.
     * @param settings a {@link Gio.Settings} object.
     * @param key the key to introspect.
     * @returns whether the {@link Gio.Settings} key exists.
     * @since 6.2
     */
    function utils_can_use_gsettings_key(settings: Gio.Settings, key: string): boolean;
    /**
     * Checks that a {@link Gio.Settings} schema exists.
     *
     * Especially useful for external {@link Gio.Settings} (provided by another application
     * for instance).
     * @param schema_id a {@link Gio.Settings} schema ID.
     * @returns `true` if a {@link Gio.Settings} instance can be created with `schema_id`.   `false` otherwise (in that case the program would crash).
     * @since 6.2
     */
    function utils_can_use_gsettings_schema(schema_id: string): boolean;
    /**
     * @returns a new close button (a {@link Gtk.Button}).
     * @since 5.0
     */
    function utils_create_close_button(): Gtk.Widget;
    /**
     * Synchronously creates parent directories of `file`, so that `file` can be
     * saved.
     * @param file a file
     * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
     * @returns whether the directories are correctly created. `false` is returned on error.
     * @since 5.0
     */
    function utils_create_parent_directories(file: Gio.File, cancellable: Gio.Cancellable | null): boolean;
    /**
     * This function is deprecated, use the {@link GLib.Uri} functions instead.
     *
     * Parse and break an uri apart in its individual components like the uri
     * scheme, user info, host, port and path. The return value pointer can be
     * `null` to ignore certain parts of the uri. If the function returns `true`, then
     * all return value pointers should be freed using `g_free()`.
     * @param uri the uri to decode
     * @returns `true` if the uri could be properly decoded, `false` otherwise.
     * @since 5.0
     */
    function utils_decode_uri(uri: string): [boolean, string, string, string, string, string];
    /**
     * The asynchronous version of `g_file_query_exists()`. When the operation is
     * finished, `callback` will be called. You can then call
     * `tepl_utils_file_query_exists_finish()` to get the result of the operation.
     * @param file a {@link Gio.File}.
     * @param cancellable a {@link Gio.Cancellable}.
     * @since 5.0
     */
    function utils_file_query_exists_async(
        file: Gio.File,
        cancellable: Gio.Cancellable | null,
    ): globalThis.Promise<boolean>;
    /**
     * The asynchronous version of `g_file_query_exists()`. When the operation is
     * finished, `callback` will be called. You can then call
     * `tepl_utils_file_query_exists_finish()` to get the result of the operation.
     * @param file a {@link Gio.File}.
     * @param cancellable a {@link Gio.Cancellable}.
     * @param callback the callback to call when the operation is finished.
     * @since 5.0
     */
    function utils_file_query_exists_async(
        file: Gio.File,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<Gio.File> | null,
    ): void;
    /**
     * The asynchronous version of `g_file_query_exists()`. When the operation is
     * finished, `callback` will be called. You can then call
     * `tepl_utils_file_query_exists_finish()` to get the result of the operation.
     * @param file a {@link Gio.File}.
     * @param cancellable a {@link Gio.Cancellable}.
     * @param callback the callback to call when the operation is finished.
     * @since 5.0
     */
    function utils_file_query_exists_async(
        file: Gio.File,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<Gio.File> | null,
    ): globalThis.Promise<boolean> | void;
    /**
     * Finishes the operation started with `tepl_utils_file_query_exists_async()`.
     * There is no output {@link GLib.Error} parameter, so you should check if the operation
     * has been cancelled (in which case `false` will be returned).
     * @param file a {@link Gio.File}.
     * @param result a {@link Gio.AsyncResult}.
     * @returns `true` if the file exists and the operation hasn't been cancelled, `false` otherwise.
     * @since 5.0
     */
    function utils_file_query_exists_finish(file: Gio.File, result: Gio.AsyncResult): boolean;
    /**
     * Examples:
     * - "file.pdf" returns ".pdf".
     * - "file.PDF" returns ".pdf".
     * - "file.tar.gz" returns ".gz".
     * - "path/to/file.pdf" returns ".pdf".
     * - "file" (without an extension) returns "" (the empty string).
     * @param filename a filename.
     * @returns the `filename`'s extension with the dot, in lowercase. Free with `g_free()`.
     * @since 4.4
     */
    function utils_get_file_extension(filename: string): string;
    /**
     * Returns `filename` without its extension. With the “extension” having the same
     * definition as in `tepl_utils_get_file_extension()`; in other words it returns
     * the other part of `filename`.
     * @param filename a filename.
     * @returns the `filename` without its extension. Free with `g_free()`.
     * @since 4.4
     */
    function utils_get_file_shortname(filename: string): string;
    /**
     * To add a title to a GUI component.
     *
     * Useful for example in a {@link Gtk.Dialog} window, when there are several components,
     * or logical groups.
     *
     * The title will be in bold, left-aligned, and the `component` will have a left
     * margin.
     * @param title the title.
     * @param component a {@link Gtk.Widget}.
     * @returns a new widget containing the `title` above the `component`.
     * @since 6.2
     */
    function utils_get_titled_component(title: string, component: Gtk.Widget): Gtk.Widget;
    /**
     * Like `gtk_widget_get_toplevel()`, but checks that the toplevel widget is a
     * {@link Gtk.Window}.
     * @param widget a {@link Gtk.Widget}.
     * @returns the toplevel {@link Gtk.Window}, or `null`.
     * @since 6.13
     */
    function utils_get_toplevel_window(widget: Gtk.Widget): Gtk.Window | null;
    /**
     * Removes all rows of `list_box`, to obtain an empty {@link Gtk.ListBox}.
     * @param list_box a {@link Gtk.ListBox}.
     * @since 6.0
     */
    function utils_list_box_clear(list_box: Gtk.ListBox): void;
    /**
     * Gets an array of all the {@link Gtk.ListBoxRow} childen of `list_box` for which
     * `filter_func` returns `true`. The elements in the array are sorted by
     * increasing index order (as returned by `gtk_list_box_row_get_index()`).
     * @param list_box a {@link Gtk.ListBox}.
     * @param filter_func non-`null` callback function.
     * @returns a `null`-terminated array of {@link Gtk.ListBoxRow} objects, or `null`. Free with   `g_free()` when no longer needed.
     * @since 6.0
     */
    function utils_list_box_get_filtered_children(
        list_box: Gtk.ListBox,
        filter_func: Gtk.ListBoxFilterFunc,
    ): [Gtk.ListBoxRow[] | null, number];
    /**
     * This function has the same semantics as `gtk_list_box_get_row_at_index()`, but
     * it takes into account only the rows for which `filter_func` returns `true`.
     *
     * As an example, if `index` is 0, it returns the first {@link Gtk.ListBoxRow} for which
     * `filter_func` returns `true`.
     * @param list_box a {@link Gtk.ListBox}.
     * @param index the index of the row, starting at 0. The index is among the filtered   rows only.
     * @param filter_func non-`null` callback function.
     * @returns the child {@link Gtk.ListBoxRow} or `null`.
     * @since 6.0
     */
    function utils_list_box_get_row_at_index_with_filter(
        list_box: Gtk.ListBox,
        index: number,
        filter_func: Gtk.ListBoxFilterFunc,
    ): Gtk.ListBoxRow | null;
    /**
     * Scrolls to a specific {@link Gtk.ListBoxRow}.
     *
     * Before using this function, `tepl_utils_list_box_setup_scrolling()` must have
     * been called.
     * @param list_box a {@link Gtk.ListBox}.
     * @param row a {@link Gtk.ListBoxRow}.
     * @since 6.0
     */
    function utils_list_box_scroll_to_row(list_box: Gtk.ListBox, row: Gtk.ListBoxRow): void;
    /**
     * Calls `tepl_utils_list_box_scroll_to_row()` on the row returned by
     * `gtk_list_box_get_selected_row()`. This function assumes that there is either
     * zero or one selected row.
     *
     * Before using this function, `tepl_utils_list_box_setup_scrolling()` must have
     * been called.
     * @param list_box a {@link Gtk.ListBox}.
     * @since 6.0
     */
    function utils_list_box_scroll_to_selected_row(list_box: Gtk.ListBox): void;
    /**
     * Setup vertical scrolling between `list_box` and `scrolled_window`, to be able
     * to use `tepl_utils_list_box_scroll_to_row()` afterwards.
     *
     * This function is intended to be called only once per {@link Gtk.ListBox}, when
     * initializing the `list_box` and `scrolled_window` widgets.
     * @param list_box a {@link Gtk.ListBox}.
     * @param scrolled_window a {@link Gtk.ScrolledWindow}.
     * @since 6.0
     */
    function utils_list_box_setup_scrolling(list_box: Gtk.ListBox, scrolled_window: Gtk.ScrolledWindow): void;
    /**
     * The same as `g_markup_escape_text()`, but with an implementation that fully
     * supports round-trip integrity. I.e. when {@link GLib.MarkupParser} or any other XML
     * parser will decode/unescape the string, the exact same string as `src` will be
     * brought back. As long as `src` is a valid UTF-8 string.
     *
     * The other difference with `g_markup_escape_text()` is that the `length`
     * parameter is not present for `tepl_utils_markup_escape_text()`.
     *
     * # `g_markup_escape_text()` doesn't fully support round-trip integrity
     *
     * In fact, `g_markup_escape_text()` doesn't escape the tabstop, newline and
     * carriage return characters. And the {@link GLib.MarkupParser} correctly processes
     * whitespace and line endings according to the [XML rules for normalization of
     * line endings and attribute values](https://www.w3.org/TR/xml/`AVNormalize`).
     *
     * For example `"\t"` (a tab) after a round-trip through `g_markup_escape_text()`
     * and {@link GLib.MarkupParser} becomes a simple space.
     * @param src a nul-terminated UTF-8 string.
     * @returns a newly allocated string with the escaped text, or `null` if `src` is not a valid UTF-8 string. Free with `g_free()` when no longer needed.
     * @since 5.0
     */
    function utils_markup_escape_text(src: string): string | null;
    /**
     * A replacement for `gtk_widget_override_font()`. Because
     * `gtk_widget_override_font()` is deprecated but was useful.
     *
     * See also `tepl_pango_font_description_to_css()`.
     * @param widget a {@link Gtk.Widget}.
     * @param font_desc the {@link Pango.FontDescription} to use, or `null` to undo   the effect of previous calls to this function on `widget`.
     * @since 6.2
     */
    function utils_override_font_description(widget: Gtk.Widget, font_desc: Pango.FontDescription | null): void;
    /**
     * A convenience function that calls `tepl_utils_override_font_description()`.
     *
     * See `pango_font_description_from_string()` for a description of the format of
     * the string representation for `font_str`.
     * @param widget a {@link Gtk.Widget}.
     * @param font_str a string representation of a {@link Pango.FontDescription}, or   `null` to undo the effect of previous calls to this function on `widget`.
     * @since 6.2
     */
    function utils_override_font_string(widget: Gtk.Widget, font_str: string | null): void;
    /**
     * Replaces the home directory with a tilde, if the home directory is present in
     * the `filename`.
     * @param filename the filename.
     * @returns the new filename. Free with `g_free()`.
     * @since 4.4
     */
    function utils_replace_home_dir_with_tilde(filename: string): string;
    /**
     * Like `g_set_object()` but for a {@link Gtk.Widget} and without the return value.
     *
     * It connects and disconnects the {@link Gtk.Widget.SignalSignatures.destroy | Gtk.Widget::destroy} signal.
     * @param widget_ptr a pointer to a {@link Gtk.Widget}.
     * @param new_widget the new {@link Gtk.Widget}.
     * @since 6.11
     */
    function utils_set_widget(widget_ptr: Gtk.Widget, new_widget: Gtk.Widget | null): void;
    /**
     * To better configure a {@link Gtk.Statusbar} (to make it smaller).
     * @param statusbar a {@link Gtk.Statusbar}.
     * @since 6.8
     */
    function utils_setup_statusbar(statusbar: Gtk.Statusbar): void;
    /**
     * Like `tepl_utils_str_middle_truncate()` but the “…” character is at the end.
     * @param str a UTF-8 string.
     * @param truncate_length truncate the string at that length, in UTF-8 characters   (not bytes).
     * @returns the truncated string. Free with `g_free()`.
     * @since 4.4
     */
    function utils_str_end_truncate(str: string, truncate_length: number): string;
    /**
     * If `str` is longer than `truncate_length`, then this function returns `str`
     * truncated in the middle with a “…” character. Otherwise it just returns a
     * copy of `str`.
     * @param str a UTF-8 string.
     * @param truncate_length truncate the string at that length, in UTF-8 characters   (not bytes).
     * @returns the truncated string. Free with `g_free()`.
     * @since 4.4
     */
    function utils_str_middle_truncate(str: string, truncate_length: number): string;
    /**
     * Replaces all occurences of `search` by `replacement`.
     *
     * The function does only one pass, for example:
     *
     * ```
     * tepl_utils_str_replace ("aaaa", "aa", "a");
     * ```
     *
     * returns "aa", not "a".
     * @param string a string
     * @param search the search string
     * @param replacement the replacement string
     * @returns A newly allocated string with the replacements. Free with `g_free()`.
     * @since 4.4
     */
    function utils_str_replace(string: string, search: string, replacement: string): string;
    /**
     * When creating a new {@link Gtk.Window}, you can call this function to initialize some
     * of its state. Then things will be taken care of to remember the state.
     *
     * The provided {@link Gio.Settings} object must have at least these keys:
     * - `"maximized"` of type boolean.
     * - `"width"` of type integer.
     * - `"height"` of type integer.
     *
     * The `window_type` (for example a subclass of {@link Gtk.ApplicationWindow} for the
     * main window) permits to use this utility for different types of windows. Each
     * window type will need its own set of {@link Gio.Settings} keys (in a different
     * sub-schema because the key names must be the same).
     *
     * A good place to call this function is in the GObject `init()` function.
     * @param window a {@link Gtk.Window}.
     * @param settings a {@link Gio.Settings} object.
     * @param window_type the type of {@link Gtk.Window}.
     * @since 6.12
     */
    function window_state_init(window: Gtk.Window, settings: Gio.Settings, window_type: GObject.GType): void;
    /**
     * @gir-type Flags
     */
    export namespace FileSaverFlags {
        export const $gtype: GObject.GType<FileSaverFlags>;
    }

    /**
     * Flags to define the behavior of a {@link Tepl.FileSaver}.
     * @gir-type Flags
     * @since 1.0
     */
    enum FileSaverFlags {
        /**
         * No flags.
         */
        NONE,
        /**
         * Create a backup before saving the file.
         */
        CREATE_BACKUP,
    }

    /**
     * @gir-type Flags
     */
    export namespace GutterRendererFoldsState {
        export const $gtype: GObject.GType<GutterRendererFoldsState>;
    }

    /**
     * The folding state at a certain line in the {@link Gtk.TextBuffer}.
     *
     * Since {@link Tepl.GutterRendererFolds} has a flat view of the folding tree, some
     * states can be combined; for example, {@link Tepl.GutterRendererFoldsState.END}
     * and {@link Tepl.GutterRendererFoldsState.CONTINUE}.
     * @gir-type Flags
     * @since 1.0
     */
    enum GutterRendererFoldsState {
        /**
         * No code folding here.
         */
        NONE,
        /**
         * Start of currently folded
         *   fold region.
         */
        START_FOLDED,
        /**
         * Start of currently opened
         *   fold region.
         */
        START_OPENED,
        /**
         * Fold region continues.
         */
        CONTINUE,
        /**
         * End of fold region.
         */
        END,
    }

    namespace AbstractFactory {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class AbstractFactory extends GObject.Object {
        static $gtype: GObject.GType<AbstractFactory>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AbstractFactory.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<AbstractFactory.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof AbstractFactory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AbstractFactory.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof AbstractFactory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AbstractFactory.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof AbstractFactory.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<AbstractFactory.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Gets the {@link Tepl.AbstractFactory} singleton instance.
         *
         * If `tepl_abstract_factory_set_singleton()` has not been called, the singleton
         * is created with a {@link Tepl.AbstractFactory} instance.
         */
        static get_singleton(): AbstractFactory;

        // Virtual methods

        /**
         * Virtual function pointer for
         *   `tepl_abstract_factory_create_file()`. By default the {@link Tepl.File} is created
         *   with `tepl_file_new()`.
         * @virtual
         */
        vfunc_create_file(): File;
        /**
         * Creates a main {@link Gtk.ApplicationWindow} in the sense of
         * `tepl_application_window_is_main_window()`.
         * @param app a {@link Gtk.Application}.
         * @virtual
         */
        vfunc_create_main_window(app: Gtk.Application): Gtk.ApplicationWindow | null;
        /**
         * Creates a new {@link Gio.File} that is then intended to be used as an argument to
         * `tepl_metadata_manager_load_from_disk()` and
         * `tepl_metadata_manager_save_to_disk()`. This function just creates the {@link Gio.File}
         * object, it doesn't call any {@link Tepl.MetadataManager} function.
         * @virtual
         */
        vfunc_create_metadata_manager_file(): Gio.File | null;
        /**
         * Virtual function pointer for
         *   `tepl_abstract_factory_create_prefs_dialog()`. By default the
         *   {@link Tepl.PrefsDialog} is created with `tepl_prefs_dialog_new()`.
         * @virtual
         */
        vfunc_create_prefs_dialog(): PrefsDialog | null;
        /**
         * Virtual function pointer for `tepl_abstract_factory_create_tab()`.
         *   By default the {@link Tepl.Tab} is created with `tepl_tab_new()`.
         * @virtual
         */
        vfunc_create_tab(): Tab;
        /**
         * Creates a new tab label for `tab`, suitable for `gtk_notebook_set_tab_label()`.
         * @param tab a {@link Tepl.Tab}.
         * @virtual
         */
        vfunc_create_tab_label(tab: Tab): Gtk.Widget | null;

        // Methods

        /**
         * @returns a new {@link Tepl.File}.
         */
        create_file(): File;
        /**
         * Creates a main {@link Gtk.ApplicationWindow} in the sense of
         * `tepl_application_window_is_main_window()`.
         * @param app a {@link Gtk.Application}.
         * @returns a new main application window, or `null` if the vfunc is not implemented.
         */
        create_main_window(app: Gtk.Application): Gtk.ApplicationWindow | null;
        /**
         * Creates a new {@link Gio.File} that is then intended to be used as an argument to
         * `tepl_metadata_manager_load_from_disk()` and
         * `tepl_metadata_manager_save_to_disk()`. This function just creates the {@link Gio.File}
         * object, it doesn't call any {@link Tepl.MetadataManager} function.
         * @returns a new {@link Gio.File}, or `null` if the vfunc is not implemented.
         */
        create_metadata_manager_file(): Gio.File | null;
        /**
         * @returns a new {@link Tepl.PrefsDialog}, or `null` if   the vfunc is not implemented.
         */
        create_prefs_dialog(): PrefsDialog | null;
        /**
         * @returns a new {@link Tepl.Tab}.
         */
        create_tab(): Tab;
        /**
         * Creates a new tab label for `tab`, suitable for `gtk_notebook_set_tab_label()`.
         * @param tab a {@link Tepl.Tab}.
         * @returns a new {@link Gtk.Widget}, or `null` for the default tab label (“page N” with {@link Gtk.Notebook}).
         */
        create_tab_label(tab: Tab): Gtk.Widget | null;
        /**
         * Sets the {@link Tepl.AbstractFactory} singleton. This should be called early in
         * `main()`, for example just after calling `tepl_init()`.
         *
         * This function must be called only once, before the first call to
         * `tepl_abstract_factory_get_singleton()`.
         *
         * Tepl takes ownership of the `factory` reference.
         */
        set_singleton(): void;
    }

    namespace Application {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::application': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            application: Gtk.Application;
        }
    }

    /**
     * @gir-type Class
     */
    class Application extends GObject.Object {
        static $gtype: GObject.GType<Application>;

        // Properties

        /**
         * The {@link Gtk.Application}.
         * @since 2.0
         * @construct-only
         */
        get application(): Gtk.Application;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Application.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Application.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Application.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Application.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Application.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Application.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Application.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Application.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Convenience function that calls `g_application_get_default()` followed by
         * `tepl_application_get_from_gtk_application()`. The object returned by
         * `g_application_get_default()` must be a {@link Gtk.Application}.
         */
        static get_default(): Application;
        /**
         * Returns the {@link Tepl.Application} of `gtk_app`. The returned object is guaranteed
         * to be the same for the lifetime of `gtk_app`.
         * @param gtk_app a {@link Gtk.Application}.
         */
        static get_from_gtk_application(gtk_app: Gtk.Application): Application;

        // Methods

        /**
         * Like `gtk_application_get_active_window()`, but returns the main window in the
         * sense of `tepl_application_window_is_main_window()`.
         * @returns the active main {@link Gtk.ApplicationWindow}, or `null`.
         */
        get_active_main_window(): Gtk.ApplicationWindow | null;
        /**
         * Returns an initially empty {@link Amtk.ActionInfoStore} reserved for the
         * application-specific actions. Libraries should not add {@link Amtk.ActionInfo}'s to
         * this store. Libraries should provide their own store if they want to share
         * {@link Amtk.ActionInfo}'s.
         * @returns the {@link Amtk.ActionInfoStore} reserved for the application.
         */
        get_app_action_info_store(): Amtk.ActionInfoStore;
        /**
         * @returns the {@link Gtk.Application} of `tepl_app`.
         */
        get_application(): Gtk.Application;
        /**
         * The returned {@link Amtk.ActionInfoStore} contains {@link Amtk.ActionInfo}'s for all the
         * {@link Gio.Action}'s listed in the [class description of
         * TeplApplicationWindow][tepl-application-window-gactions] and the [class
         * description of TeplApplication][tepl-application-gactions].
         * @returns the {@link Amtk.ActionInfoStore} of the Tepl library.
         */
        get_tepl_action_info_store(): Amtk.ActionInfoStore;
        /**
         * Connects a generic function handler for the {@link Gio.Application.SignalSignatures.activate | Gio.Application::activate} signal.
         *
         * If no main windows exist, it creates one with
         * `tepl_abstract_factory_create_main_window()`. If a main window already exists,
         * it calls `gtk_window_present()` on the most recently focused window of the
         * application.
         */
        handle_activate(): void;
        /**
         * This function:
         * - Connects to the {@link Gio.Application.SignalSignatures.startup | Gio.Application::startup} signal to call
         *   `tepl_metadata_manager_load_from_disk()`.
         * - Connects to the {@link Gio.Application.SignalSignatures.shutdown | Gio.Application::shutdown} signal to call
         *   `tepl_metadata_manager_save_to_disk()` with `trim` set to `true`.
         *
         * It gets the {@link Gio.File} by calling
         * `tepl_abstract_factory_create_metadata_manager_file()`.
         */
        handle_metadata(): void;
        /**
         * Connects a generic function handler for the {@link Gio.Application.SignalSignatures.open | Gio.Application::open} signal.
         *
         * It calls `tepl_application_window_open_file()` for each {@link Gio.File} to open, on the
         * active main window as returned by `tepl_application_get_active_main_window()`.
         * If the active main window is `null`, it creates one with
         * `tepl_abstract_factory_create_main_window()`.
         */
        handle_open(): void;
        /**
         * Calls `g_application_open()` with a single file and an empty hint.
         * @param file a {@link Gio.File}.
         */
        open_simple(file: Gio.File): void;
    }

    namespace ApplicationWindow {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::application-window': (pspec: GObject.ParamSpec) => void;
            'notify::handle-title': (pspec: GObject.ParamSpec) => void;
            'notify::active-buffer': (pspec: GObject.ParamSpec) => void;
            'notify::active-tab': (pspec: GObject.ParamSpec) => void;
            'notify::active-view': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, TabGroup.ConstructorProps {
            application_window: Gtk.ApplicationWindow;
            applicationWindow: Gtk.ApplicationWindow;
            handle_title: boolean;
            handleTitle: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class ApplicationWindow extends GObject.Object implements TabGroup {
        static $gtype: GObject.GType<ApplicationWindow>;

        // Properties

        /**
         * The {@link Gtk.ApplicationWindow}.
         * @since 2.0
         * @construct-only
         */
        get application_window(): Gtk.ApplicationWindow;
        /**
         * The {@link Gtk.ApplicationWindow}.
         * @since 2.0
         * @construct-only
         */
        get applicationWindow(): Gtk.ApplicationWindow;
        /**
         * Whether to handle the {@link Gtk.Window.title}. The title is probably not
         * appropriate if a {@link Gtk.HeaderBar} is used, the title is meant to be used
         * only for applications with a traditional UI.
         *
         * If `true`, the title will contain:
         * - the {@link Tepl.Buffer.tepl_full_title} of the active buffer.
         * - if the active view is not {@link Gtk.TextView.editable}, the
         *   `"[Read-Only]"` string.
         * - the application name as returned by `g_get_application_name()`.
         *
         * If the active view is `null`, the title contains only the application
         * name.
         * @since 4.0
         * @default false
         */
        get handle_title(): boolean;
        set handle_title(val: boolean);
        /**
         * Whether to handle the {@link Gtk.Window.title}. The title is probably not
         * appropriate if a {@link Gtk.HeaderBar} is used, the title is meant to be used
         * only for applications with a traditional UI.
         *
         * If `true`, the title will contain:
         * - the {@link Tepl.Buffer.tepl_full_title} of the active buffer.
         * - if the active view is not {@link Gtk.TextView.editable}, the
         *   `"[Read-Only]"` string.
         * - the application name as returned by `g_get_application_name()`.
         *
         * If the active view is `null`, the title contains only the application
         * name.
         * @since 4.0
         * @default false
         */
        get handleTitle(): boolean;
        set handleTitle(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ApplicationWindow.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ApplicationWindow.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof ApplicationWindow.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ApplicationWindow.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ApplicationWindow.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ApplicationWindow.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ApplicationWindow.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ApplicationWindow.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Returns the {@link Tepl.ApplicationWindow} of `gtk_window`. The returned object is
         * guaranteed to be the same for the lifetime of `gtk_window`.
         * @param gtk_window a {@link Gtk.ApplicationWindow}.
         */
        static get_from_gtk_application_window(gtk_window: Gtk.ApplicationWindow): ApplicationWindow;
        /**
         * Returns `true` if and only if `gtk_window` has an associated {@link Tepl.TabGroup}
         * (i.e. when `tepl_application_window_set_tab_group()` has been called).
         *
         * This function takes a {@link Gtk.ApplicationWindow} parameter to avoid creating the
         * {@link Tepl.ApplicationWindow} object if it hasn't been created.
         * @param gtk_window a {@link Gtk.ApplicationWindow}.
         */
        static is_main_window(gtk_window: Gtk.ApplicationWindow): boolean;

        // Methods

        /**
         * @returns the {@link Gtk.ApplicationWindow} of `tepl_window`.
         */
        get_application_window(): Gtk.ApplicationWindow;
        /**
         * @returns the value of the {@link Tepl.ApplicationWindow.handle_title} property.
         */
        get_handle_title(): boolean;
        /**
         * Gets the {@link Gtk.WindowGroup} in which `tepl_window` resides.
         *
         * You should call this function only on main windows, to add secondary windows
         * to the {@link Gtk.WindowGroup}.
         * @returns the {@link Gtk.WindowGroup}.
         */
        get_window_group(): Gtk.WindowGroup;
        /**
         * Opens a file in `tepl_window`. If the active tab is untouched (see
         * `tepl_buffer_is_untouched()`), then the file is loaded in that tab. Otherwise a
         * new tab is created.
         *
         * This function is asynchronous, the file loading is done with the
         * `tepl_tab_load_file()` function. There is no way to know when the file loading
         * is finished.
         * @param location a {@link Gio.File}.
         * @param jump_to whether to set the tab where the file is loaded as the active tab.
         */
        open_file(location: Gio.File, jump_to: boolean): void;
        /**
         * Sets the {@link Tepl.ApplicationWindow.handle_title} property.
         * @param handle_title the new value.
         */
        set_handle_title(handle_title: boolean): void;
        /**
         * Sets the {@link Tepl.TabGroup} of `tepl_window`. This function can be called only
         * once, it is not possible to change the {@link Tepl.TabGroup} afterwards (this
         * restriction may be lifted in the future if there is a compelling use-case).
         *
         * {@link Tepl.ApplicationWindow} implements the {@link Tepl.TabGroup} interface by delegating
         * the requests to `tab_group`.
         * @param tab_group a {@link Tepl.TabGroup}.
         */
        set_tab_group(tab_group: TabGroup): void;
        /**
         * The {@link Tepl.Buffer} of the active tab.
         * @since 3.0
         * @read-only
         * @category Inherited from Tepl.TabGroup
         */
        get active_buffer(): Buffer | null;
        /**
         * The {@link Tepl.Buffer} of the active tab.
         * @since 3.0
         * @read-only
         * @category Inherited from Tepl.TabGroup
         */
        get activeBuffer(): Buffer | null;
        /**
         * The {@link Tepl.Tab} currently shown.
         * @since 3.0
         * @category Inherited from Tepl.TabGroup
         */
        get active_tab(): Tab | null;
        set active_tab(val: Tab | null);
        /**
         * The {@link Tepl.Tab} currently shown.
         * @since 3.0
         * @category Inherited from Tepl.TabGroup
         */
        get activeTab(): Tab | null;
        set activeTab(val: Tab | null);
        /**
         * The {@link Tepl.View} of the active tab.
         * @since 3.0
         * @read-only
         * @category Inherited from Tepl.TabGroup
         */
        get active_view(): View | null;
        /**
         * The {@link Tepl.View} of the active tab.
         * @since 3.0
         * @read-only
         * @category Inherited from Tepl.TabGroup
         */
        get activeView(): View | null;
        /**
         * Appends `tab` to `tab_group`.
         * @param tab a {@link Tepl.Tab}.
         * @param jump_to whether to set `tab` as the active tab after appending it.
         */
        append_tab(tab: Tab, jump_to: boolean): void;
        /**
         * Convenience function.
         * @returns the {@link Tepl.Buffer} of the active tab.
         */
        get_active_buffer(): Buffer | null;
        /**
         * @returns the {@link Tepl.Tab} currently shown in `tab_group`.
         */
        get_active_tab(): Tab | null;
        /**
         * Convenience function.
         * @returns the {@link Tepl.View} of the active tab.
         */
        get_active_view(): View | null;
        /**
         * Convenience function.
         * @returns like `tepl_tab_group_get_tabs()`, but returns {@link Tepl.Buffer}'s.
         */
        get_buffers(): Buffer[];
        /**
         * Gets the list of {@link Tepl.Tab}'s contained in `tab_group`.
         *
         * If `tab_group` contains non-{@link Tepl.Tab} children, those will not be present in the
         * returned list. In other words, it is <emphasis>not</emphasis> guaranteed that
         * the index of a {@link Tepl.Tab} in the returned {@link GLib.List} has the same child index in
         * the `tab_group` container.
         * @returns the list of all the {@link Tepl.Tab}'s contained in `tab_group`.
         */
        get_tabs(): Tab[];
        /**
         * Convenience function.
         * @returns like `tepl_tab_group_get_tabs()`, but returns {@link Tepl.View}'s.
         */
        get_views(): View[];
        /**
         * Sets the {@link Tepl.TabGroup.active_tab}. `tab` must be part of `tab_group`.
         * @param tab a {@link Tepl.Tab} part of `tab_group`.
         */
        set_active_tab(tab: Tab): void;
        /**
         * Virtual function pointer for `tepl_tab_group_append_tab()`,
         *   without the `jump_to` parameter. The default implementation prints a warning
         *   about the operation not being supported.
         * @param tab
         * @virtual
         */
        vfunc_append_tab_vfunc(tab: Tab): void;
        /**
         * Virtual function pointer for `tepl_tab_group_get_active_tab()`.
         *   By default, `null` is returned.
         * @virtual
         */
        vfunc_get_active_tab(): Tab | null;
        /**
         * Gets the list of {@link Tepl.Tab}'s contained in `tab_group`.
         *
         * If `tab_group` contains non-{@link Tepl.Tab} children, those will not be present in the
         * returned list. In other words, it is <emphasis>not</emphasis> guaranteed that
         * the index of a {@link Tepl.Tab} in the returned {@link GLib.List} has the same child index in
         * the `tab_group` container.
         * @virtual
         */
        vfunc_get_tabs(): Tab[];
        /**
         * Sets the {@link Tepl.TabGroup.active_tab}. `tab` must be part of `tab_group`.
         * @param tab a {@link Tepl.Tab} part of `tab_group`.
         * @virtual
         */
        vfunc_set_active_tab(tab: Tab): void;
    }

    namespace Buffer {
        // Signal signatures
        interface SignalSignatures extends GtkSource.Buffer.SignalSignatures {
            /**
             * The ::tepl-cursor-moved signal is emitted when the insert mark is
             * moved explicitely or when the buffer changes (insert/delete).
             *
             * A typical use-case for this signal is to update the cursor position
             * in a statusbar.
             * @signal
             * @since 2.0
             * @run-first
             */
            'tepl-cursor-moved': () => void;
            'notify::tepl-full-title': (pspec: GObject.ParamSpec) => void;
            'notify::tepl-short-title': (pspec: GObject.ParamSpec) => void;
            'notify::can-redo': (pspec: GObject.ParamSpec) => void;
            'notify::can-undo': (pspec: GObject.ParamSpec) => void;
            'notify::highlight-matching-brackets': (pspec: GObject.ParamSpec) => void;
            'notify::highlight-syntax': (pspec: GObject.ParamSpec) => void;
            'notify::implicit-trailing-newline': (pspec: GObject.ParamSpec) => void;
            'notify::language': (pspec: GObject.ParamSpec) => void;
            'notify::max-undo-levels': (pspec: GObject.ParamSpec) => void;
            'notify::style-scheme': (pspec: GObject.ParamSpec) => void;
            'notify::undo-manager': (pspec: GObject.ParamSpec) => void;
            'notify::copy-target-list': (pspec: GObject.ParamSpec) => void;
            'notify::cursor-position': (pspec: GObject.ParamSpec) => void;
            'notify::has-selection': (pspec: GObject.ParamSpec) => void;
            'notify::paste-target-list': (pspec: GObject.ParamSpec) => void;
            'notify::tag-table': (pspec: GObject.ParamSpec) => void;
            'notify::text': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GtkSource.Buffer.ConstructorProps {
            tepl_full_title: string;
            teplFullTitle: string;
            tepl_short_title: string;
            teplShortTitle: string;
        }
    }

    /**
     * @gir-type Class
     */
    class Buffer extends GtkSource.Buffer {
        static $gtype: GObject.GType<Buffer>;

        // Properties

        /**
         * The full title. See `tepl_buffer_get_full_title()`.
         * @since 3.0
         * @read-only
         * @default null
         */
        get tepl_full_title(): string;
        /**
         * The full title. See `tepl_buffer_get_full_title()`.
         * @since 3.0
         * @read-only
         * @default null
         */
        get teplFullTitle(): string;
        /**
         * The short title. See `tepl_buffer_get_short_title()`.
         * @since 3.0
         * @read-only
         * @default null
         */
        get tepl_short_title(): string;
        /**
         * The short title. See `tepl_buffer_get_short_title()`.
         * @since 3.0
         * @read-only
         * @default null
         */
        get teplShortTitle(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Buffer.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Buffer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Buffer;

        // Signals

        /** @signal */
        connect<K extends keyof Buffer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Buffer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Buffer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Buffer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Buffer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Buffer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_tepl_cursor_moved(): void;

        // Methods

        /**
         * Connects {@link Tepl.Settings.style_scheme_id} to {@link GtkSource.Buffer.style_scheme}.
         */
        connect_style_scheme_settings(): void;
        /**
         * Returns the {@link Tepl.File} of `buffer`. The returned object is guaranteed to be the
         * same for the lifetime of `buffer`.
         *
         * {@link Tepl.Buffer} creates the {@link Tepl.File} with `tepl_abstract_factory_create_file()`.
         * @returns the associated {@link Tepl.File}.
         */
        get_file(): File;
        /**
         * Returns a title suitable for a {@link Gtk.Window} title. It contains (in that order):
         * - the {@link Tepl.Buffer.tepl_short_title};
         * - the directory path in parenthesis if the {@link Tepl.File.location} isn't
         *   `null`.
         * @returns the `buffer` full title. Free the return value with `g_free()` when no longer needed.
         */
        get_full_title(): string;
        /**
         * Returns the {@link Tepl.Metadata} of `buffer`. The returned object is guaranteed to be
         * the same for the lifetime of `buffer`.
         * @returns the associated {@link Tepl.Metadata}.
         */
        get_metadata(): Metadata;
        /**
         * @returns the current {@link Tepl.SelectionType}.
         */
        get_selection_type(): SelectionType;
        /**
         * Returns a title suitable for a tab label. It contains (in that order):
         * - '*' if the buffer is modified;
         * - the {@link Tepl.File.short_name}.
         * @returns the `buffer` short title. Free the return value with `g_free()` when no longer needed.
         */
        get_short_title(): string;
        /**
         * Returns whether `buffer` is untouched.
         *
         * This function is for example useful to know if we can re-use this buffer to
         * load a file, instead of opening a new tab or window.
         *
         * For this function to return `true`, the `buffer` must be empty, non-modified,
         * the undo/redo {@link GtkSource.Buffer} history must be empty, and the
         * {@link Tepl.File.location} must be `null`.
         * @returns `true` if `buffer` has not been touched, `false` otherwise.
         */
        is_untouched(): boolean;
        /**
         * Calls `tepl_metadata_manager_copy_from()` for {@link Tepl.File.location} (if not `null`)
         * to the associated {@link Tepl.Metadata} of `buffer`.
         */
        load_metadata_from_metadata_manager(): void;
        /**
         * Calls `tepl_metadata_manager_merge_into()` for {@link Tepl.File.location} (if not
         * `null`) from the associated {@link Tepl.Metadata} of `buffer`.
         */
        save_metadata_into_metadata_manager(): void;
    }

    namespace CodeCommentView {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::code-comment-is-supported': (pspec: GObject.ParamSpec) => void;
            'notify::source-view': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            code_comment_is_supported: boolean;
            codeCommentIsSupported: boolean;
            source_view: GtkSource.View | null;
            sourceView: GtkSource.View | null;
        }
    }

    /**
     * @gir-type Class
     */
    class CodeCommentView extends GObject.Object {
        static $gtype: GObject.GType<CodeCommentView>;

        // Properties

        /**
         * Whether code comment/uncomment is supported.
         *
         * This property is `true` when all these conditions are met:
         * - The necessary metadata is available, to know what character or
         *   string to insert or remove.
         * - The {@link Gtk.TextView.editable} property is `true`.
         * @since 6.14
         * @read-only
         * @default false
         */
        get code_comment_is_supported(): boolean;
        /**
         * Whether code comment/uncomment is supported.
         *
         * This property is `true` when all these conditions are met:
         * - The necessary metadata is available, to know what character or
         *   string to insert or remove.
         * - The {@link Gtk.TextView.editable} property is `true`.
         * @since 6.14
         * @read-only
         * @default false
         */
        get codeCommentIsSupported(): boolean;
        /**
         * The associated {@link GtkSource.View} widget. {@link Tepl.CodeCommentView} has a weak
         * reference to the {@link GtkSource.View}.
         * @since 6.14
         * @construct-only
         */
        get source_view(): GtkSource.View | null;
        /**
         * The associated {@link GtkSource.View} widget. {@link Tepl.CodeCommentView} has a weak
         * reference to the {@link GtkSource.View}.
         * @since 6.14
         * @construct-only
         */
        get sourceView(): GtkSource.View | null;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CodeCommentView.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<CodeCommentView.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](view: GtkSource.View): CodeCommentView;

        // Signals

        /** @signal */
        connect<K extends keyof CodeCommentView.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CodeCommentView.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof CodeCommentView.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CodeCommentView.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof CodeCommentView.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CodeCommentView.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Comments the lines between `start_iter` and `end_iter` included.
         *
         * If `end_iter` is `null`, only a single line is commented.
         *
         * Ensure that code comment is supported before calling this function. See
         * `tepl_code_comment_view_code_comment_is_supported()`.
         * @param start_iter a {@link Gtk.TextIter}.
         * @param end_iter a {@link Gtk.TextIter}, or `null` to comment only the line at   `start_iter`.
         */
        comment_lines(start_iter: Gtk.TextIter, end_iter: Gtk.TextIter | null): void;
        /**
         * Comments the selected lines.
         *
         * Ensure that code comment is supported before calling this function. See
         * `tepl_code_comment_view_code_comment_is_supported()`.
         */
        comment_selected_lines(): void;
        /**
         * @returns the {@link Tepl.CodeCommentView.source_view}.
         */
        get_source_view(): GtkSource.View | null;
        /**
         * Uncomments the selected text.
         *
         * Ensure that code comment is supported before calling this function. See
         * `tepl_code_comment_view_code_comment_is_supported()`.
         */
        uncomment_selection(): void;
    }

    namespace File {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::full-name': (pspec: GObject.ParamSpec) => void;
            'notify::location': (pspec: GObject.ParamSpec) => void;
            'notify::newline-type': (pspec: GObject.ParamSpec) => void;
            'notify::short-name': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            full_name: string;
            fullName: string;
            location: Gio.File;
            newline_type: NewlineType;
            newlineType: NewlineType;
            short_name: string;
            shortName: string;
        }
    }

    /**
     * @gir-type Class
     */
    class File extends GObject.Object {
        static $gtype: GObject.GType<File>;

        // Properties

        /**
         * Convenience property for the full name of a {@link Tepl.File}.
         *
         * When the {@link Tepl.File.location} is `null`, this property has the same
         * value as the {@link Tepl.File.short_name}.
         *
         * When the {@link Tepl.File.location} is not `null`, this property contains the
         * full path to the location. It uses:
         * - `g_file_get_parse_name()`
         * - `tepl_utils_replace_home_dir_with_tilde()`
         * @read-only
         * @default null
         */
        get full_name(): string;
        /**
         * Convenience property for the full name of a {@link Tepl.File}.
         *
         * When the {@link Tepl.File.location} is `null`, this property has the same
         * value as the {@link Tepl.File.short_name}.
         *
         * When the {@link Tepl.File.location} is not `null`, this property contains the
         * full path to the location. It uses:
         * - `g_file_get_parse_name()`
         * - `tepl_utils_replace_home_dir_with_tilde()`
         * @read-only
         * @default null
         */
        get fullName(): string;
        /**
         * The location.
         * @since 1.0
         */
        get location(): Gio.File;
        set location(val: Gio.File);
        /**
         * The line ending type.
         * @since 1.0
         * @read-only
         * @default Tepl.NewlineType.LF
         */
        get newline_type(): NewlineType;
        /**
         * The line ending type.
         * @since 1.0
         * @read-only
         * @default Tepl.NewlineType.LF
         */
        get newlineType(): NewlineType;
        /**
         * The file short name.
         *
         * When the {@link Tepl.File.location} is `null`, the default instance of
         * `GflsUnsavedDocumentTitles` is used to get a title.
         *
         * When the {@link Tepl.File.location} is not `null`, this property contains the
         * display-name (see #G_FILE_ATTRIBUTE_STANDARD_DISPLAY_NAME). However,
         * requesting the display-name can take some time (for example for a
         * remote file with a slow network connection). When the
         * {@link Tepl.File.location} property is set, the display-name is fetched
         * asynchronously. When the display-name is available, this property is
         * notified. In the meantime – after the {@link Tepl.File.location} is set but
         * before receiving the display-name – a fallback implementation is used
         * that does no blocking I/O (but it may return a different result
         * compared to the real display-name).
         * @since 1.0
         * @read-only
         * @default null
         */
        get short_name(): string;
        /**
         * The file short name.
         *
         * When the {@link Tepl.File.location} is `null`, the default instance of
         * `GflsUnsavedDocumentTitles` is used to get a title.
         *
         * When the {@link Tepl.File.location} is not `null`, this property contains the
         * display-name (see #G_FILE_ATTRIBUTE_STANDARD_DISPLAY_NAME). However,
         * requesting the display-name can take some time (for example for a
         * remote file with a slow network connection). When the
         * {@link Tepl.File.location} property is set, the display-name is fetched
         * asynchronously. When the display-name is available, this property is
         * notified. In the meantime – after the {@link Tepl.File.location} is set but
         * before receiving the display-name – a fallback implementation is used
         * that does no blocking I/O (but it may return a different result
         * compared to the real display-name).
         * @since 1.0
         * @read-only
         * @default null
         */
        get shortName(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: File.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<File.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): File;

        // Signals

        /** @signal */
        connect<K extends keyof File.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, File.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof File.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, File.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof File.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<File.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Calls either `gtk_native_dialog_set_modal()` or `gtk_window_set_modal()`
         * depending on the `chooser` type.
         * @param chooser a {@link Gtk.FileChooser}.
         * @param modal the new value.
         */
        static chooser_set_modal(chooser: Gtk.FileChooser, modal: boolean): void;
        /**
         * Sets or unsets a parent {@link Gtk.Window} for the `chooser` dialog. It calls the
         * right functions depending on the type of `chooser`.
         * @param chooser a {@link Gtk.FileChooser}.
         * @param parent a {@link Gtk.Window}, or `null`.
         */
        static chooser_set_parent(chooser: Gtk.FileChooser, parent: Gtk.Window | null): void;
        /**
         * Calls `gtk_native_dialog_show()` or `gtk_window_present()` depending on the type
         * of `chooser`.
         * @param chooser a {@link Gtk.FileChooser}.
         */
        static chooser_show(chooser: Gtk.FileChooser): void;

        // Methods

        /**
         * If the {@link Tepl.File.location} isn't `null`, adds its URI to the default
         * {@link Gtk.RecentManager} with `gtk_recent_manager_add_item()`.
         */
        add_uri_to_recent_manager(): void;
        /**
         * @returns the value of the {@link Tepl.File.full_name} property. Free with `g_free()`.
         */
        get_full_name(): string;
        /**
         * @returns the value of the {@link Tepl.File.location} property.
         */
        get_location(): Gio.File;
        /**
         * @returns the value of the {@link Tepl.File.newline_type} property.
         */
        get_newline_type(): NewlineType;
        /**
         * @returns the value of the {@link Tepl.File.short_name} property. Free with `g_free()`.
         */
        get_short_name(): string;
        /**
         * Sets the {@link Tepl.File.location} property.
         * @param location the new {@link Gio.File}, or `null`.
         */
        set_location(location: Gio.File | null): void;
    }

    namespace FileLoader {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::buffer': (pspec: GObject.ParamSpec) => void;
            'notify::file': (pspec: GObject.ParamSpec) => void;
            'notify::location': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            buffer: Buffer | null;
            file: File | null;
            location: Gio.File | null;
        }
    }

    /**
     * @gir-type Class
     */
    class FileLoader extends GObject.Object {
        static $gtype: GObject.GType<FileLoader>;

        // Properties

        /**
         * The {@link Tepl.Buffer} to load the content into. The {@link Tepl.FileLoader} object
         * has a weak reference to the buffer.
         * @since 1.0
         * @construct-only
         */
        get buffer(): Buffer | null;
        /**
         * The {@link Tepl.File}. The {@link Tepl.FileLoader} object has a weak
         * reference to the file.
         * @since 1.0
         * @construct-only
         */
        get file(): File | null;
        /**
         * The {@link Gio.File} to load. By default the location is taken from the
         * {@link Tepl.File} at construction time.
         * @since 1.0
         * @construct-only
         */
        get location(): Gio.File | null;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FileLoader.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<FileLoader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](buffer: Buffer, file: File): FileLoader;

        // Signals

        /** @signal */
        connect<K extends keyof FileLoader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileLoader.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof FileLoader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileLoader.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof FileLoader.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FileLoader.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns the {@link Tepl.Buffer} to load the content into.
         */
        get_buffer(): Buffer | null;
        /**
         * @returns the {@link Tepl.File}.
         */
        get_file(): File | null;
        /**
         * @returns the {@link Gio.File} to load.
         */
        get_location(): Gio.File | null;
        /**
         * Loads asynchronously the file content into the {@link Tepl.Buffer}.
         *
         * See the {@link Gio.AsyncResult} documentation to know how to use this function.
         * @param io_priority the I/O priority of the request. E.g. `G_PRIORITY_LOW`,   `G_PRIORITY_DEFAULT` or `G_PRIORITY_HIGH`.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         */
        load_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Loads asynchronously the file content into the {@link Tepl.Buffer}.
         *
         * See the {@link Gio.AsyncResult} documentation to know how to use this function.
         * @param io_priority the I/O priority of the request. E.g. `G_PRIORITY_LOW`,   `G_PRIORITY_DEFAULT` or `G_PRIORITY_HIGH`.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is   satisfied.
         */
        load_async(
            io_priority: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Loads asynchronously the file content into the {@link Tepl.Buffer}.
         *
         * See the {@link Gio.AsyncResult} documentation to know how to use this function.
         * @param io_priority the I/O priority of the request. E.g. `G_PRIORITY_LOW`,   `G_PRIORITY_DEFAULT` or `G_PRIORITY_HIGH`.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is   satisfied.
         */
        load_async(
            io_priority: number,
            cancellable: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes a file loading started with `tepl_file_loader_load_async()`.
         * @param result a {@link Gio.AsyncResult}.
         * @returns whether the content has been loaded successfully.
         */
        load_finish(result: Gio.AsyncResult): boolean;
    }

    namespace FileSaver {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::buffer': (pspec: GObject.ParamSpec) => void;
            'notify::file': (pspec: GObject.ParamSpec) => void;
            'notify::flags': (pspec: GObject.ParamSpec) => void;
            'notify::location': (pspec: GObject.ParamSpec) => void;
            'notify::newline-type': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            buffer: Buffer;
            file: File;
            flags: FileSaverFlags;
            location: Gio.File;
            newline_type: NewlineType;
            newlineType: NewlineType;
        }
    }

    /**
     * @gir-type Class
     */
    class FileSaver extends GObject.Object {
        static $gtype: GObject.GType<FileSaver>;

        // Properties

        /**
         * The {@link Tepl.Buffer} to save. The {@link Tepl.FileSaver} object has a weak
         * reference to the buffer.
         * @since 1.0
         * @construct-only
         */
        get buffer(): Buffer;
        /**
         * The {@link Tepl.File}. The {@link Tepl.FileSaver} object has a weak reference to the
         * file.
         * @since 1.0
         * @construct-only
         */
        get file(): File;
        /**
         * File saving flags.
         * @since 1.0
         * @default Tepl.FileSaverFlags.NONE
         */
        get flags(): FileSaverFlags;
        set flags(val: FileSaverFlags);
        /**
         * The {@link Gio.File} where to save the buffer. By default the location is taken
         * from the {@link Tepl.File} at construction time.
         * @since 1.0
         * @construct-only
         */
        get location(): Gio.File;
        /**
         * The newline type.
         * @since 1.0
         * @default Tepl.NewlineType.LF
         */
        get newline_type(): NewlineType;
        set newline_type(val: NewlineType);
        /**
         * The newline type.
         * @since 1.0
         * @default Tepl.NewlineType.LF
         */
        get newlineType(): NewlineType;
        set newlineType(val: NewlineType);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FileSaver.SignalSignatures;

        // Fields

        object: GObject.Object;

        // Constructors

        constructor(properties?: Partial<FileSaver.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](buffer: Buffer, file: File): FileSaver;

        static new_with_target(buffer: Buffer, file: File, target_location: Gio.File): FileSaver;

        // Signals

        /** @signal */
        connect<K extends keyof FileSaver.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileSaver.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof FileSaver.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileSaver.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof FileSaver.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FileSaver.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns the {@link Tepl.Buffer} to save.
         */
        get_buffer(): Buffer;
        /**
         * @returns the {@link Tepl.File}.
         */
        get_file(): File;
        /**
         * @returns the flags.
         */
        get_flags(): FileSaverFlags;
        /**
         * @returns the {@link Gio.File} where to save the buffer to.
         */
        get_location(): Gio.File;
        /**
         * @returns the newline type.
         */
        get_newline_type(): NewlineType;
        /**
         * Saves asynchronously the buffer into the file. See the {@link Gio.AsyncResult}
         * documentation to know how to use this function.
         * @param io_priority the I/O priority of the request. E.g. `G_PRIORITY_LOW`,   `G_PRIORITY_DEFAULT` or `G_PRIORITY_HIGH`.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         */
        save_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Saves asynchronously the buffer into the file. See the {@link Gio.AsyncResult}
         * documentation to know how to use this function.
         * @param io_priority the I/O priority of the request. E.g. `G_PRIORITY_LOW`,   `G_PRIORITY_DEFAULT` or `G_PRIORITY_HIGH`.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is   satisfied.
         */
        save_async(
            io_priority: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Saves asynchronously the buffer into the file. See the {@link Gio.AsyncResult}
         * documentation to know how to use this function.
         * @param io_priority the I/O priority of the request. E.g. `G_PRIORITY_LOW`,   `G_PRIORITY_DEFAULT` or `G_PRIORITY_HIGH`.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is   satisfied.
         */
        save_async(
            io_priority: number,
            cancellable: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes a file saving started with `tepl_file_saver_save_async()`.
         *
         * If the file has been saved successfully, the following {@link Tepl.File}
         * properties will be updated: the location and the newline type.
         *
         * `gtk_text_buffer_set_modified()` is called with `false` if the file has been
         * saved successfully.
         * @param result a {@link Gio.AsyncResult}.
         * @returns whether the file was saved successfully.
         */
        save_finish(result: Gio.AsyncResult): boolean;
        /**
         * @param flags the new flags.
         */
        set_flags(flags: FileSaverFlags): void;
        /**
         * Sets the newline type. By default the newline type is taken from the
         * {@link Tepl.File}.
         * @param newline_type the new newline type.
         */
        set_newline_type(newline_type: NewlineType): void;
    }

    namespace FoldRegion {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::buffer': (pspec: GObject.ParamSpec) => void;
            'notify::folded': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            buffer: Gtk.TextBuffer | null;
            folded: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class FoldRegion extends GObject.Object {
        static $gtype: GObject.GType<FoldRegion>;

        // Properties

        /**
         * The {@link Gtk.TextBuffer} where the fold region is applied. The
         * {@link Tepl.FoldRegion} object has a weak reference to the buffer.
         * @since 1.0
         * @construct-only
         */
        get buffer(): Gtk.TextBuffer | null;
        /**
         * Whether the {@link Tepl.FoldRegion} is folded or not.
         * @since 1.0
         * @default false
         */
        get folded(): boolean;
        set folded(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FoldRegion.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<FoldRegion.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](buffer: Gtk.TextBuffer, start: Gtk.TextIter, end: Gtk.TextIter): FoldRegion;

        // Signals

        /** @signal */
        connect<K extends keyof FoldRegion.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FoldRegion.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof FoldRegion.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FoldRegion.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof FoldRegion.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FoldRegion.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Obtains iterators pointing to the start and end of the {@link Tepl.FoldRegion}.
         * @returns `true` on success, `false` otherwise.
         */
        get_bounds(): [boolean, Gtk.TextIter, Gtk.TextIter];
        /**
         * @returns the {@link Gtk.TextBuffer} where the fold region   is applied.
         */
        get_buffer(): Gtk.TextBuffer | null;
        /**
         * @returns whether the {@link Tepl.FoldRegion} is folded.
         */
        get_folded(): boolean;
        /**
         * Sets the start and end of the {@link Tepl.FoldRegion}.
         * @param start a {@link Gtk.TextIter}.
         * @param end a {@link Gtk.TextIter}.
         */
        set_bounds(start: Gtk.TextIter, end: Gtk.TextIter): void;
        /**
         * Folds or unfolds the region.
         * @param folded the new value.
         */
        set_folded(folded: boolean): void;
    }

    namespace GotoLineBar {
        // Signal signatures
        interface SignalSignatures extends Gtk.Grid.SignalSignatures {
            'notify::baseline-row': (pspec: GObject.ParamSpec) => void;
            'notify::column-homogeneous': (pspec: GObject.ParamSpec) => void;
            'notify::column-spacing': (pspec: GObject.ParamSpec) => void;
            'notify::row-homogeneous': (pspec: GObject.ParamSpec) => void;
            'notify::row-spacing': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
            'notify::orientation': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gtk.Grid.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.Orientable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class GotoLineBar extends Gtk.Grid implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<GotoLineBar>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GotoLineBar.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<GotoLineBar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): GotoLineBar;

        // Signals

        /** @signal */
        connect<K extends keyof GotoLineBar.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GotoLineBar.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof GotoLineBar.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GotoLineBar.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof GotoLineBar.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GotoLineBar.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Calls `gtk_widget_grab_focus()` to the {@link Gtk.SearchEntry} of `bar`.
         */
        grab_focus_to_entry(): void;
        /**
         * Sets the {@link Tepl.View}. `tepl_view_goto_line()` will be called on `view` when the
         * user types a line number in the {@link Gtk.SearchEntry} of `bar`.
         *
         * Only one {@link Tepl.View} can be associated per {@link Tepl.GotoLineBar}.
         * @param view a {@link Tepl.View}.
         */
        set_view(view: View): void;
        /**
         * The orientation of the orientable.
         * @since 2.16
         * @default Gtk.Orientation.HORIZONTAL
         * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);
        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`.
         */
        get_orientation(): Gtk.Orientation;
        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }

    namespace GutterRendererFolds {
        // Signal signatures
        interface SignalSignatures extends GtkSource.GutterRenderer.SignalSignatures {
            'notify::alignment-mode': (pspec: GObject.ParamSpec) => void;
            'notify::background-rgba': (pspec: GObject.ParamSpec) => void;
            'notify::background-set': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::view': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::window-type': (pspec: GObject.ParamSpec) => void;
            'notify::xalign': (pspec: GObject.ParamSpec) => void;
            'notify::xpad': (pspec: GObject.ParamSpec) => void;
            'notify::yalign': (pspec: GObject.ParamSpec) => void;
            'notify::ypad': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GtkSource.GutterRenderer.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class GutterRendererFolds extends GtkSource.GutterRenderer {
        static $gtype: GObject.GType<GutterRendererFolds>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GutterRendererFolds.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<GutterRendererFolds.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): GutterRendererFolds;

        // Signals

        /** @signal */
        connect<K extends keyof GutterRendererFolds.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GutterRendererFolds.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof GutterRendererFolds.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GutterRendererFolds.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof GutterRendererFolds.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GutterRendererFolds.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Sets the folding state of the next cell to be drawn.
         *
         * This function is intended to be called from a subclass' draw method before
         * chaining-up to its parent's draw method.
         * @param state a {@link Tepl.GutterRendererFoldsState}.
         */
        set_state(state: GutterRendererFoldsState): void;
    }

    namespace InfoBar {
        // Signal signatures
        interface SignalSignatures extends Gtk.InfoBar.SignalSignatures {
            'notify::handle-close-response': (pspec: GObject.ParamSpec) => void;
            'notify::icon-from-message-type': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::message-type': (pspec: GObject.ParamSpec) => void;
            'notify::revealed': (pspec: GObject.ParamSpec) => void;
            'notify::show-close-button': (pspec: GObject.ParamSpec) => void;
            'notify::baseline-position': (pspec: GObject.ParamSpec) => void;
            'notify::homogeneous': (pspec: GObject.ParamSpec) => void;
            'notify::spacing': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gtk.InfoBar.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.Orientable.ConstructorProps {
            handle_close_response: boolean;
            handleCloseResponse: boolean;
            icon_from_message_type: boolean;
            iconFromMessageType: boolean;
            icon_name: string;
            iconName: string;
        }
    }

    /**
     * @gir-type Class
     */
    class InfoBar extends Gtk.InfoBar implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<InfoBar>;

        // Properties

        /**
         * If this property is `true`, then the {@link Tepl.InfoBar} is destroyed with
         * `gtk_widget_destroy()` when the {@link Gtk.InfoBar.SignalSignatures.response | Gtk.InfoBar::response} signal is
         * received with the `response_id` {@link Gtk.ResponseType.CLOSE}.
         * @since 6.0
         * @default false
         */
        get handle_close_response(): boolean;
        set handle_close_response(val: boolean);
        /**
         * If this property is `true`, then the {@link Tepl.InfoBar} is destroyed with
         * `gtk_widget_destroy()` when the {@link Gtk.InfoBar.SignalSignatures.response | Gtk.InfoBar::response} signal is
         * received with the `response_id` {@link Gtk.ResponseType.CLOSE}.
         * @since 6.0
         * @default false
         */
        get handleCloseResponse(): boolean;
        set handleCloseResponse(val: boolean);
        /**
         * If this property is `true`, then an icon is shown on the left, based
         * on the value of the {@link Gtk.InfoBar.message_type} property. For
         * {@link Gtk.MessageType.OTHER} no icon is shown.
         *
         * If the {@link Tepl.InfoBar.icon_name} property has a non-`null` value, then
         * this property is not taken into account.
         *
         * Note that setting this property doesn't change the value of the
         * {@link Tepl.InfoBar.icon_name} property; the two properties are separate.
         * @since 6.0
         * @default false
         */
        get icon_from_message_type(): boolean;
        set icon_from_message_type(val: boolean);
        /**
         * If this property is `true`, then an icon is shown on the left, based
         * on the value of the {@link Gtk.InfoBar.message_type} property. For
         * {@link Gtk.MessageType.OTHER} no icon is shown.
         *
         * If the {@link Tepl.InfoBar.icon_name} property has a non-`null` value, then
         * this property is not taken into account.
         *
         * Note that setting this property doesn't change the value of the
         * {@link Tepl.InfoBar.icon_name} property; the two properties are separate.
         * @since 6.0
         * @default false
         */
        get iconFromMessageType(): boolean;
        set iconFromMessageType(val: boolean);
        /**
         * If set to a non-`null` value, then an icon is shown on the left.
         *
         * If this property has a non-`null` value, then the
         * {@link Tepl.InfoBar.icon_from_message_type} property is not taken into
         * account.
         * @since 6.0
         * @default null
         */
        get icon_name(): string;
        set icon_name(val: string);
        /**
         * If set to a non-`null` value, then an icon is shown on the left.
         *
         * If this property has a non-`null` value, then the
         * {@link Tepl.InfoBar.icon_from_message_type} property is not taken into
         * account.
         * @since 6.0
         * @default null
         */
        get iconName(): string;
        set iconName(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: InfoBar.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<InfoBar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): InfoBar;

        static new_simple(msg_type: Gtk.MessageType, primary_msg: string, secondary_msg: string | null): InfoBar;

        // Signals

        /** @signal */
        connect<K extends keyof InfoBar.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InfoBar.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof InfoBar.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InfoBar.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof InfoBar.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<InfoBar.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Utility function to create a {@link Gtk.Label} suitable for a {@link Gtk.InfoBar}. The
         * wrapping and alignment is configured. The label is also set as selectable,
         * for example to copy an error message and search an explanation on the web.
         */
        static create_label(): Gtk.Label;
        /**
         * Sets the desired orientation (horizontal or vertical) for the action area as
         * returned by `gtk_info_bar_get_action_area()`. The action area is where the
         * buttons are placed.
         *
         * The default value for a {@link Tepl.InfoBar} is {@link Gtk.Orientation.VERTICAL}. The reason
         * is because with a small {@link Gtk.Window}, if 3 or more buttons are shown
         * horizontally, there is not enough space for the text. And it can be worse
         * when the button labels are translated to another language. When the buttons
         * are packed vertically, there is usually no problem. A vertical action area
         * also follows the original design of {@link Gtk.InfoBar}.
         * @param info_bar a {@link Gtk.InfoBar}.
         * @param buttons_orientation the desired orientation.
         */
        static set_buttons_orientation(info_bar: Gtk.InfoBar, buttons_orientation: Gtk.Orientation): void;

        // Methods

        /**
         * Adds `widget` to `info_bar` at `location`.
         *
         * As described in {@link Tepl.InfoBarLocation}, a {@link Tepl.InfoBar} has internal containers
         * for the content area. So if you need to add a custom {@link Gtk.Widget}, it is better
         * to use this function instead of adding the {@link Gtk.Widget} directly to the content
         * area.
         * @param widget a {@link Gtk.Widget}.
         * @param location a {@link Tepl.InfoBarLocation}.
         */
        add_content_widget(widget: Gtk.Widget, location: InfoBarLocation): void;
        /**
         * Adds a primary message to the {@link Tepl.InfoBarLocation.ALONGSIDE_ICON}
         * location.
         * @param primary_msg a primary message.
         */
        add_primary_message(primary_msg: string): void;
        /**
         * Adds a secondary message to the {@link Tepl.InfoBarLocation.ALONGSIDE_ICON}
         * location.
         * @param secondary_msg a secondary message.
         */
        add_secondary_message(secondary_msg: string): void;
        /**
         * @returns the value of the {@link Tepl.InfoBar.handle_close_response} property.
         */
        get_handle_close_response(): boolean;
        /**
         * @returns the value of the {@link Tepl.InfoBar.icon_from_message_type} property.
         */
        get_icon_from_message_type(): boolean;
        /**
         * @returns the value of the {@link Tepl.InfoBar.icon_name} property.
         */
        get_icon_name(): string;
        /**
         * Sets a new value to the {@link Tepl.InfoBar.handle_close_response} property.
         * @param handle_close_response the new value.
         */
        set_handle_close_response(handle_close_response: boolean): void;
        /**
         * Sets a new value to the {@link Tepl.InfoBar.icon_from_message_type} property.
         * @param icon_from_message_type the new value.
         */
        set_icon_from_message_type(icon_from_message_type: boolean): void;
        /**
         * Sets a new value to the {@link Tepl.InfoBar.icon_name} property.
         * @param icon_name the new value.
         */
        set_icon_name(icon_name: string): void;
        /**
         * Convenience function to set the {@link Gtk.InfoBar.show_close_button} and
         * {@link Tepl.InfoBar.handle_close_response} properties to `true`.
         */
        setup_close_button(): void;
    }

    namespace LanguageChooserDialog {
        // Signal signatures
        interface SignalSignatures extends Gtk.Dialog.SignalSignatures {
            'notify::use-header-bar': (pspec: GObject.ParamSpec) => void;
            'notify::accept-focus': (pspec: GObject.ParamSpec) => void;
            'notify::application': (pspec: GObject.ParamSpec) => void;
            'notify::attached-to': (pspec: GObject.ParamSpec) => void;
            'notify::decorated': (pspec: GObject.ParamSpec) => void;
            'notify::default-height': (pspec: GObject.ParamSpec) => void;
            'notify::default-width': (pspec: GObject.ParamSpec) => void;
            'notify::deletable': (pspec: GObject.ParamSpec) => void;
            'notify::destroy-with-parent': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-map': (pspec: GObject.ParamSpec) => void;
            'notify::focus-visible': (pspec: GObject.ParamSpec) => void;
            'notify::gravity': (pspec: GObject.ParamSpec) => void;
            'notify::has-resize-grip': (pspec: GObject.ParamSpec) => void;
            'notify::has-toplevel-focus': (pspec: GObject.ParamSpec) => void;
            'notify::hide-titlebar-when-maximized': (pspec: GObject.ParamSpec) => void;
            'notify::icon': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::is-active': (pspec: GObject.ParamSpec) => void;
            'notify::is-maximized': (pspec: GObject.ParamSpec) => void;
            'notify::mnemonics-visible': (pspec: GObject.ParamSpec) => void;
            'notify::modal': (pspec: GObject.ParamSpec) => void;
            'notify::resizable': (pspec: GObject.ParamSpec) => void;
            'notify::resize-grip-visible': (pspec: GObject.ParamSpec) => void;
            'notify::role': (pspec: GObject.ParamSpec) => void;
            'notify::screen': (pspec: GObject.ParamSpec) => void;
            'notify::skip-pager-hint': (pspec: GObject.ParamSpec) => void;
            'notify::skip-taskbar-hint': (pspec: GObject.ParamSpec) => void;
            'notify::startup-id': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::transient-for': (pspec: GObject.ParamSpec) => void;
            'notify::type': (pspec: GObject.ParamSpec) => void;
            'notify::type-hint': (pspec: GObject.ParamSpec) => void;
            'notify::urgency-hint': (pspec: GObject.ParamSpec) => void;
            'notify::window-position': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gtk.Dialog.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                LanguageChooser.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class LanguageChooserDialog extends Gtk.Dialog implements Atk.ImplementorIface, Gtk.Buildable, LanguageChooser {
        static $gtype: GObject.GType<LanguageChooserDialog>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: LanguageChooserDialog.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<LanguageChooserDialog.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](parent: Gtk.Window | null): LanguageChooserDialog;
        // Conflicted with Gtk.Dialog.new

        static ['new'](...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof LanguageChooserDialog.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LanguageChooserDialog.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof LanguageChooserDialog.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LanguageChooserDialog.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof LanguageChooserDialog.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<LanguageChooserDialog.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
        /**
         * Selects `language` in the list.
         * @param language a {@link GtkSource.Language}, or `null` for "Plain Text".
         */
        select_language(language: GtkSource.Language | null): void;
        /**
         * The function pointer for the
         *   {@link Tepl.LanguageChooser.SignalSignatures.language_activated | Tepl.LanguageChooser::language-activated} signal.
         * @param language
         * @virtual
         */
        vfunc_language_activated(language: GtkSource.Language): void;
        /**
         * Selects `language` in the list.
         * @param language a {@link GtkSource.Language}, or `null` for "Plain Text".
         * @virtual
         */
        vfunc_select_language(language: GtkSource.Language | null): void;
    }

    namespace LanguageChooserWidget {
        // Signal signatures
        interface SignalSignatures extends Gtk.Grid.SignalSignatures {
            'notify::baseline-row': (pspec: GObject.ParamSpec) => void;
            'notify::column-homogeneous': (pspec: GObject.ParamSpec) => void;
            'notify::column-spacing': (pspec: GObject.ParamSpec) => void;
            'notify::row-homogeneous': (pspec: GObject.ParamSpec) => void;
            'notify::row-spacing': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
            'notify::orientation': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gtk.Grid.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.Orientable.ConstructorProps,
                LanguageChooser.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class LanguageChooserWidget
        extends Gtk.Grid
        implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable, LanguageChooser
    {
        static $gtype: GObject.GType<LanguageChooserWidget>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: LanguageChooserWidget.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<LanguageChooserWidget.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): LanguageChooserWidget;

        // Signals

        /** @signal */
        connect<K extends keyof LanguageChooserWidget.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LanguageChooserWidget.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof LanguageChooserWidget.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LanguageChooserWidget.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof LanguageChooserWidget.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<LanguageChooserWidget.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
        /**
         * The orientation of the orientable.
         * @since 2.16
         * @default Gtk.Orientation.HORIZONTAL
         * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);
        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`.
         */
        get_orientation(): Gtk.Orientation;
        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation): void;
        /**
         * Selects `language` in the list.
         * @param language a {@link GtkSource.Language}, or `null` for "Plain Text".
         */
        select_language(language: GtkSource.Language | null): void;
        /**
         * The function pointer for the
         *   {@link Tepl.LanguageChooser.SignalSignatures.language_activated | Tepl.LanguageChooser::language-activated} signal.
         * @param language
         * @virtual
         */
        vfunc_language_activated(language: GtkSource.Language): void;
        /**
         * Selects `language` in the list.
         * @param language a {@link GtkSource.Language}, or `null` for "Plain Text".
         * @virtual
         */
        vfunc_select_language(language: GtkSource.Language | null): void;
    }

    namespace LineColumnIndicator {
        // Signal signatures
        interface SignalSignatures extends Gtk.Bin.SignalSignatures {
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Bin.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class LineColumnIndicator extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<LineColumnIndicator>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: LineColumnIndicator.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<LineColumnIndicator.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): LineColumnIndicator;

        // Signals

        /** @signal */
        connect<K extends keyof LineColumnIndicator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LineColumnIndicator.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof LineColumnIndicator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LineColumnIndicator.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof LineColumnIndicator.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<LineColumnIndicator.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Sets a {@link Tepl.TabGroup} to update automatically the values for the line and
         * column of the current cursor position, for the current
         * {@link Tepl.TabGroup.active_tab}.
         *
         * This function can be called only once per `indicator`.
         *
         * Use `tepl_line_column_indicator_set_view()` or
         * `tepl_line_column_indicator_set_tab_group()`, but not both.
         * @param tab_group a {@link Tepl.TabGroup}.
         */
        set_tab_group(tab_group: TabGroup): void;
        /**
         * Sets a {@link Tepl.View} to update automatically the values for the line and column
         * of the current cursor position. If `view` is `null`, then `indicator` will be
         * empty.
         *
         * Use `tepl_line_column_indicator_set_view()` or
         * `tepl_line_column_indicator_set_tab_group()`, but not both.
         * @param view a {@link Tepl.View}, or `null`.
         */
        set_view(view: View | null): void;
    }

    namespace Metadata {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Metadata extends GObject.Object {
        static $gtype: GObject.GType<Metadata>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Metadata.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Metadata.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Metadata;

        // Signals

        /** @signal */
        connect<K extends keyof Metadata.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Metadata.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Metadata.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Metadata.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Metadata.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Metadata.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the value of a metadata stored in the `metadata` object memory.
         *
         * `key` must follow [the requirements explained in the class
         * description][tepl-metadata-keys-requirements].
         * @param key a key.
         * @returns the associated value (a UTF-8 string), or `null`. Free with `g_free()` when no longer needed.
         */
        get(key: string): string | null;
        /**
         * Sets or unsets `key`. This function just stores the new metadata value in the
         * `metadata` object memory.
         *
         * `key` must follow [the requirements explained in the class
         * description][tepl-metadata-keys-requirements].
         * @param key a key.
         * @param value a nul-terminated UTF-8 string, or `null` to unset the key.
         */
        set(key: string, value: string | null): void;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.set
        set(...args: never[]): any;
    }

    namespace MetadataManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class MetadataManager extends GObject.Object {
        static $gtype: GObject.GType<MetadataManager>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MetadataManager.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MetadataManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof MetadataManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MetadataManager.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof MetadataManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MetadataManager.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof MetadataManager.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MetadataManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static get_singleton(): MetadataManager;

        // Methods

        /**
         * Copies the metadata stored in `from_manager` for `for_location` into
         * `to_metadata`.
         *
         * If `to_metadata` already contains a key that is also present in `from_manager`,
         * the value in `to_metadata` is overwritten.
         *
         * If `to_metadata` already contains a key that is not present in `from_manager`,
         * the key/value pair is kept in `to_metadata`, it is not erased.
         * @param for_location a {@link Gio.File}.
         * @param to_metadata a {@link Tepl.Metadata}.
         */
        copy_from(for_location: Gio.File, to_metadata: Metadata): void;
        /**
         * Loads synchronously all the metadata from `from_file` into `manager`.
         *
         * A good moment to call this function is on application startup, see the
         * {@link Gio.Application.SignalSignatures.startup | Gio.Application::startup} signal.
         * @param from_file the {@link Gio.File} to load metadata from.
         * @returns whether the operation was successful.
         */
        load_from_disk(from_file: Gio.File): boolean;
        /**
         * Merges the metadata from `from_metadata` into `into_manager` for `for_location`.
         *
         * If a key from `from_metadata` has been set to `null`, the key/value pair is
         * removed from `into_manager`. In other words that key/value pair will not be
         * saved at all when calling `tepl_metadata_manager_save_to_disk()`.
         *
         * If `into_manager` already contains a key that is not present in
         * `from_metadata`, the key/value pair is kept in `into_manager`, it is not
         * erased.
         * @param for_location a {@link Gio.File}.
         * @param from_metadata a {@link Tepl.Metadata}.
         */
        merge_into(for_location: Gio.File, from_metadata: Metadata): void;
        /**
         * Saves synchronously all the metadata from `manager` to `to_file`. The parent
         * directories of `to_file` are created if needed.
         *
         * A good moment to call this function is on application shutdown, see the
         * {@link Gio.Application.SignalSignatures.shutdown | Gio.Application::shutdown} signal.
         * @param to_file the {@link Gio.File} to save metadata to.
         * @param trim if `true`, `tepl_metadata_manager_trim()` is called with -1.
         * @returns whether the operation was successful.
         */
        save_to_disk(to_file: Gio.File, trim: boolean): boolean;
        /**
         * The purpose of having a maximum size is to avoid that the file on disk grows
         * indefinitely.
         *
         * `max_number_of_locations` is the maximum number of {@link Gio.File} locations for which
         * metadata are kept. This function discards the least recently accessed
         * metadata if needed.
         *
         * If `max_number_of_locations` is -1, a default internal value is used that
         * should fit most applications' needs.
         * @param max_number_of_locations the maximum size, or -1 for the default value.
         */
        trim(max_number_of_locations: number): void;
    }

    namespace Notebook {
        // Signal signatures
        interface SignalSignatures extends Gtk.Notebook.SignalSignatures {
            'notify::enable-popup': (pspec: GObject.ParamSpec) => void;
            'notify::group-name': (pspec: GObject.ParamSpec) => void;
            'notify::page': (pspec: GObject.ParamSpec) => void;
            'notify::scrollable': (pspec: GObject.ParamSpec) => void;
            'notify::show-border': (pspec: GObject.ParamSpec) => void;
            'notify::show-tabs': (pspec: GObject.ParamSpec) => void;
            'notify::tab-pos': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
            'notify::active-buffer': (pspec: GObject.ParamSpec) => void;
            'notify::active-tab': (pspec: GObject.ParamSpec) => void;
            'notify::active-view': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gtk.Notebook.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                TabGroup.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Notebook extends Gtk.Notebook implements Atk.ImplementorIface, Gtk.Buildable, TabGroup {
        static $gtype: GObject.GType<Notebook>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Notebook.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Notebook.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Notebook;

        // Signals

        /** @signal */
        connect<K extends keyof Notebook.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Notebook.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Notebook.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Notebook.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Notebook.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Notebook.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
        /**
         * The {@link Tepl.Buffer} of the active tab.
         * @since 3.0
         * @read-only
         * @category Inherited from Tepl.TabGroup
         */
        get active_buffer(): Buffer | null;
        /**
         * The {@link Tepl.Buffer} of the active tab.
         * @since 3.0
         * @read-only
         * @category Inherited from Tepl.TabGroup
         */
        get activeBuffer(): Buffer | null;
        /**
         * The {@link Tepl.Tab} currently shown.
         * @since 3.0
         * @category Inherited from Tepl.TabGroup
         */
        get active_tab(): Tab | null;
        set active_tab(val: Tab | null);
        /**
         * The {@link Tepl.Tab} currently shown.
         * @since 3.0
         * @category Inherited from Tepl.TabGroup
         */
        get activeTab(): Tab | null;
        set activeTab(val: Tab | null);
        /**
         * The {@link Tepl.View} of the active tab.
         * @since 3.0
         * @read-only
         * @category Inherited from Tepl.TabGroup
         */
        get active_view(): View | null;
        /**
         * The {@link Tepl.View} of the active tab.
         * @since 3.0
         * @read-only
         * @category Inherited from Tepl.TabGroup
         */
        get activeView(): View | null;
        /**
         * Appends `tab` to `tab_group`.
         * @param tab a {@link Tepl.Tab}.
         * @param jump_to whether to set `tab` as the active tab after appending it.
         */
        append_tab(tab: Tab, jump_to: boolean): void;
        /**
         * Convenience function.
         * @returns the {@link Tepl.Buffer} of the active tab.
         */
        get_active_buffer(): Buffer | null;
        /**
         * @returns the {@link Tepl.Tab} currently shown in `tab_group`.
         */
        get_active_tab(): Tab | null;
        /**
         * Convenience function.
         * @returns the {@link Tepl.View} of the active tab.
         */
        get_active_view(): View | null;
        /**
         * Convenience function.
         * @returns like `tepl_tab_group_get_tabs()`, but returns {@link Tepl.Buffer}'s.
         */
        get_buffers(): Buffer[];
        /**
         * Gets the list of {@link Tepl.Tab}'s contained in `tab_group`.
         *
         * If `tab_group` contains non-{@link Tepl.Tab} children, those will not be present in the
         * returned list. In other words, it is <emphasis>not</emphasis> guaranteed that
         * the index of a {@link Tepl.Tab} in the returned {@link GLib.List} has the same child index in
         * the `tab_group` container.
         * @returns the list of all the {@link Tepl.Tab}'s contained in `tab_group`.
         */
        get_tabs(): Tab[];
        /**
         * Convenience function.
         * @returns like `tepl_tab_group_get_tabs()`, but returns {@link Tepl.View}'s.
         */
        get_views(): View[];
        /**
         * Sets the {@link Tepl.TabGroup.active_tab}. `tab` must be part of `tab_group`.
         * @param tab a {@link Tepl.Tab} part of `tab_group`.
         */
        set_active_tab(tab: Tab): void;
        /**
         * Virtual function pointer for `tepl_tab_group_append_tab()`,
         *   without the `jump_to` parameter. The default implementation prints a warning
         *   about the operation not being supported.
         * @param tab
         * @virtual
         */
        vfunc_append_tab_vfunc(tab: Tab): void;
        /**
         * Virtual function pointer for `tepl_tab_group_get_active_tab()`.
         *   By default, `null` is returned.
         * @virtual
         */
        vfunc_get_active_tab(): Tab | null;
        /**
         * Gets the list of {@link Tepl.Tab}'s contained in `tab_group`.
         *
         * If `tab_group` contains non-{@link Tepl.Tab} children, those will not be present in the
         * returned list. In other words, it is <emphasis>not</emphasis> guaranteed that
         * the index of a {@link Tepl.Tab} in the returned {@link GLib.List} has the same child index in
         * the `tab_group` container.
         * @virtual
         */
        vfunc_get_tabs(): Tab[];
        /**
         * Sets the {@link Tepl.TabGroup.active_tab}. `tab` must be part of `tab_group`.
         * @param tab a {@link Tepl.Tab} part of `tab_group`.
         * @virtual
         */
        vfunc_set_active_tab(tab: Tab): void;
    }

    namespace OverwriteIndicator {
        // Signal signatures
        interface SignalSignatures extends Gtk.Bin.SignalSignatures {
            'notify::overwrite': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Bin.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            overwrite: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class OverwriteIndicator extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<OverwriteIndicator>;

        // Properties

        /**
         * - If `true`, indicates the overwrite mode.
         * - If `false`, indicates the insert mode.
         * @since 6.4
         * @default false
         */
        get overwrite(): boolean;
        set overwrite(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: OverwriteIndicator.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<OverwriteIndicator.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): OverwriteIndicator;

        // Signals

        /** @signal */
        connect<K extends keyof OverwriteIndicator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, OverwriteIndicator.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof OverwriteIndicator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, OverwriteIndicator.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof OverwriteIndicator.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<OverwriteIndicator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns the value of the {@link Tepl.OverwriteIndicator.overwrite} property.
         */
        get_overwrite(): boolean;
        /**
         * Sets a new value to the {@link Tepl.OverwriteIndicator.overwrite} property.
         * @param overwrite the new value.
         */
        set_overwrite(overwrite: boolean): void;
        /**
         * Sets a {@link Gtk.TextView} to update automatically the state of `indicator` according
         * to `view`. If `view` is `null`, then `indicator` will be empty.
         * @param view a {@link Gtk.TextView}, or `null`.
         */
        set_view(view: Gtk.TextView | null): void;
    }

    namespace Panel1 {
        // Signal signatures
        interface SignalSignatures extends Gtk.Grid.SignalSignatures {
            'notify::baseline-row': (pspec: GObject.ParamSpec) => void;
            'notify::column-homogeneous': (pspec: GObject.ParamSpec) => void;
            'notify::column-spacing': (pspec: GObject.ParamSpec) => void;
            'notify::row-homogeneous': (pspec: GObject.ParamSpec) => void;
            'notify::row-spacing': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
            'notify::orientation': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gtk.Grid.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.Orientable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Panel1 extends Gtk.Grid implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<Panel1>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Panel1.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Panel1.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Panel1;

        static new_for_left_side_panel(): Panel1;

        // Signals

        /** @signal */
        connect<K extends keyof Panel1.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Panel1.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Panel1.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Panel1.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Panel1.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Panel1.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * The equivalent of `gtk_stack_add_titled()`, with an optional `icon_name` to set
         * the “icon-name” {@link Gtk.Stack} child property.
         * @param component the child {@link Gtk.Widget} to add to the {@link Gtk.Stack} of `panel`.
         * @param name the name for `component`.
         * @param title a human-readable title for `component`.
         * @param icon_name the icon name for `component`, or `null`.
         */
        add_component(component: Gtk.Widget, name: string, title: string, icon_name: string | null): void;
        /**
         * @returns the {@link Gtk.Stack} widget of `panel` (a direct child {@link Gtk.Widget} of `panel`).
         */
        get_stack(): Gtk.Stack;
        /**
         * Provides a {@link Gio.Settings} key for saving and restoring the
         * {@link Gtk.Stack.visible_child_name} property of the {@link Gtk.Stack} belonging to `panel`.
         *
         * This function just stores `settings` and `setting_key` for further use by
         * `tepl_panel1_restore_state_from_gsettings()` and
         * `tepl_panel1_save_state_to_gsettings()`. It doesn't bind the {@link Gio.Settings} key to
         * the property, because each main window containing a {@link Tepl.Panel1} needs to be
         * able to have a different state, and have more control over when that state is
         * restored and saved. Once a {@link Tepl.Panel1} is created and fully populated, the
         * setting can be restored. The setting can be saved according to the current
         * main window before creating a new main window, and of course on application
         * exit.
         *
         * Note that only one `settings`/`setting_key` pair is stored by `panel` for
         * further use, if you call this function twice on the same `panel`, the second
         * call overrides the first one.
         * @param settings a {@link Gio.Settings} object.
         * @param setting_key a {@link Gio.Settings} key of type string.
         */
        provide_active_component_gsetting(settings: Gio.Settings, setting_key: string): void;
        /**
         * Restores the state of `panel` according to the provided {@link Gio.Settings}.
         *
         * This function must be called when all components have been added to the
         * {@link Gtk.Stack} of `panel`.
         */
        restore_state_from_gsettings(): void;
        /**
         * Saves the current state of `panel` to the provided {@link Gio.Settings}.
         */
        save_state_to_gsettings(): void;
        /**
         * The orientation of the orientable.
         * @since 2.16
         * @default Gtk.Orientation.HORIZONTAL
         * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);
        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`.
         */
        get_orientation(): Gtk.Orientation;
        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }

    namespace PanelItem {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::widget': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            icon_name: string | null;
            iconName: string | null;
            name: string;
            position: number;
            title: string | null;
            widget: Gtk.Widget | null;
        }
    }

    /**
     * @gir-type Class
     */
    class PanelItem extends GObject.Object {
        static $gtype: GObject.GType<PanelItem>;

        // Properties

        /**
         * The icon name.
         *
         * It can be shown in the UI to choose this item, for example with the
         * {@link Gtk.Image}'s {@link Gtk.Image.icon_name} property.
         * @since 6.11
         * @construct-only
         * @default null
         */
        get icon_name(): string | null;
        /**
         * The icon name.
         *
         * It can be shown in the UI to choose this item, for example with the
         * {@link Gtk.Image}'s {@link Gtk.Image.icon_name} property.
         * @since 6.11
         * @construct-only
         * @default null
         */
        get iconName(): string | null;
        /**
         * The name.
         *
         * It is an ID as a UTF-8 string. It is not displayed in the UI. It
         * uniquely identifies an item within a list.
         * @since 6.11
         * @construct-only
         * @default null
         */
        get name(): string;
        /**
         * The position.
         *
         * Used to sort items in the desired order.
         * @since 6.11
         * @construct-only
         * @default 0
         */
        get position(): number;
        /**
         * The title.
         *
         * It is a human-readable UTF-8 string that can be shown in the UI to
         * choose this item.
         * @since 6.11
         * @construct-only
         * @default null
         */
        get title(): string | null;
        /**
         * The {@link Gtk.Widget} (the main content).
         * @since 6.11
         * @construct-only
         */
        get widget(): Gtk.Widget | null;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PanelItem.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PanelItem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            widget: Gtk.Widget,
            name: string,
            title: string | null,
            icon_name: string | null,
            position: number,
        ): PanelItem;

        // Signals

        /** @signal */
        connect<K extends keyof PanelItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PanelItem.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof PanelItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PanelItem.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof PanelItem.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PanelItem.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * A {@link GLib.CompareFunc} that takes into account the {@link Tepl.PanelItem.position} property
         * in priority, and falls back to the {@link Tepl.PanelItem.title} property if two items
         * have the same position.
         * @param b a {@link Tepl.PanelItem}.
         * @returns the usual return value for a {@link GLib.CompareFunc}.
         */
        compare(b: PanelItem): number;
        /**
         * A {@link GLib.CompareFunc} that takes into account only the {@link Tepl.PanelItem.title}
         * property.
         * @param b a {@link Tepl.PanelItem}.
         * @returns the usual return value for a {@link GLib.CompareFunc}.
         */
        compare_by_title(b: PanelItem): number;
        /**
         * @returns the value of the {@link Tepl.PanelItem.icon_name} property.
         */
        get_icon_name(): string | null;
        /**
         * @returns the value of the {@link Tepl.PanelItem.name} property.
         */
        get_name(): string;
        /**
         * @returns the value of the {@link Tepl.PanelItem.position} property.
         */
        get_position(): number;
        /**
         * @returns the value of the {@link Tepl.PanelItem.title} property.
         */
        get_title(): string | null;
        /**
         * @returns the value of the {@link Tepl.PanelItem.widget}   property.
         */
        get_widget(): Gtk.Widget | null;
    }

    namespace PanelNotebook {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class PanelNotebook extends GObject.Object {
        static $gtype: GObject.GType<PanelNotebook>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PanelNotebook.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PanelNotebook.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](panel_simple: PanelSimple, notebook: Gtk.Notebook): PanelNotebook;

        // Signals

        /** @signal */
        connect<K extends keyof PanelNotebook.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PanelNotebook.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof PanelNotebook.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PanelNotebook.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof PanelNotebook.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PanelNotebook.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace PanelSimple {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * The ::add-item signal is emitted when a {@link Tepl.PanelItem} needs to be
             * added.
             *
             * It is a {@link GObject.SignalFlags.RUN_LAST} signal: the item is added by the
             * {@link Tepl.PanelSimple}'s method handler for this signal.
             * @signal
             * @since 6.11
             * @run-last
             */
            'add-item': (arg0: PanelItem) => void;
            /**
             * The ::changed signal is for convenience: it is emitted when the
             * {@link Tepl.PanelSimple.SignalSignatures.add_item | Tepl.PanelSimple::add-item} and {@link Tepl.PanelSimple.SignalSignatures.remove_item | Tepl.PanelSimple::remove-item} signals
             * are emitted, and also when the {@link Tepl.PanelSimple.active_item} property
             * changes.
             *
             * It is a {@link GObject.SignalFlags.RUN_FIRST} signal: the action is already done.
             *
             * This signal is useful if you don't need the more detailed information
             * on what has changed.
             * @signal
             * @since 6.11
             * @run-first
             */
            changed: () => void;
            /**
             * The ::remove-item signal is emitted when a {@link Tepl.PanelItem} needs to be
             * removed.
             *
             * It is a {@link GObject.SignalFlags.RUN_LAST} signal: the item is removed by the
             * {@link Tepl.PanelSimple}'s method handler for this signal.
             * @signal
             * @since 6.11
             * @run-last
             */
            'remove-item': (arg0: PanelItem) => void;
            'notify::active-item': (pspec: GObject.ParamSpec) => void;
            'notify::active-item-name': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Panel.ConstructorProps {
            active_item: PanelItem | null;
            activeItem: PanelItem | null;
            active_item_name: string | null;
            activeItemName: string | null;
        }
    }

    /**
     * @gir-type Class
     */
    class PanelSimple extends GObject.Object implements Panel {
        static $gtype: GObject.GType<PanelSimple>;

        // Properties

        /**
         * The {@link Tepl.PanelItem} currently shown.
         * @since 6.11
         */
        get active_item(): PanelItem | null;
        set active_item(val: PanelItem | null);
        /**
         * The {@link Tepl.PanelItem} currently shown.
         * @since 6.11
         */
        get activeItem(): PanelItem | null;
        set activeItem(val: PanelItem | null);
        /**
         * The name of the {@link Tepl.PanelSimple.active_item}.
         * @since 6.11
         * @default null
         */
        get active_item_name(): string | null;
        set active_item_name(val: string | null);
        /**
         * The name of the {@link Tepl.PanelSimple.active_item}.
         * @since 6.11
         * @default null
         */
        get activeItemName(): string | null;
        set activeItemName(val: string | null);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PanelSimple.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PanelSimple.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): PanelSimple;

        // Signals

        /** @signal */
        connect<K extends keyof PanelSimple.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PanelSimple.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof PanelSimple.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PanelSimple.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof PanelSimple.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PanelSimple.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param item
         * @virtual
         */
        vfunc_add_item(item: PanelItem): void;
        /**
         * @virtual
         */
        vfunc_changed(): void;
        /**
         * @param item
         * @virtual
         */
        vfunc_remove_item(item: PanelItem): void;

        // Methods

        /**
         * @returns the value of the   {@link Tepl.PanelSimple.active_item} property.
         */
        get_active_item(): PanelItem | null;
        /**
         * A convenience function.
         * @returns the name of the {@link Tepl.PanelSimple.active_item}.
         */
        get_active_item_name(): string | null;
        /**
         * @returns all the items of   `panel`.
         */
        get_items(): PanelItem[];
        /**
         * A convenience function. Useful to implement a switcher widget.
         * @returns whether `panel` has more than one {@link Tepl.PanelItem}.
         */
        has_several_items(): boolean;
        /**
         * A convenience function that calls `tepl_panel_set_active()` with the
         * {@link Tepl.PanelItem} named `name` (if found).
         * @param name a name.
         */
        set_active_item_name(name: string | null): void;
        /**
         * Adds an item to the panel.
         * @param item a {@link Tepl.PanelItem}.
         */
        add(item: PanelItem): void;
        /**
         * Removes an item from the panel.
         * @param item the {@link Tepl.PanelItem} to remove.
         */
        remove(item: PanelItem): void;
        /**
         * Sets `item` to be the one that is currently shown in `panel`.
         *
         * Only one {@link Tepl.PanelItem} is shown at a time in a {@link Tepl.Panel}.
         * @param item a {@link Tepl.PanelItem}.
         */
        set_active(item: PanelItem | null): void;
        /**
         * Adds an item to the panel.
         * @param item a {@link Tepl.PanelItem}.
         * @virtual
         */
        vfunc_add(item: PanelItem): void;
        /**
         * Removes an item from the panel.
         * @param item the {@link Tepl.PanelItem} to remove.
         * @virtual
         */
        vfunc_remove(item: PanelItem): void;
        /**
         * Sets `item` to be the one that is currently shown in `panel`.
         *
         * Only one {@link Tepl.PanelItem} is shown at a time in a {@link Tepl.Panel}.
         * @param item a {@link Tepl.PanelItem}.
         * @virtual
         */
        vfunc_set_active(item: PanelItem | null): void;
    }

    namespace PanelStack {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class PanelStack extends GObject.Object {
        static $gtype: GObject.GType<PanelStack>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PanelStack.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PanelStack.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](panel_simple: PanelSimple | null, stack: Gtk.Stack | null): PanelStack;

        // Signals

        /** @signal */
        connect<K extends keyof PanelStack.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PanelStack.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof PanelStack.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PanelStack.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof PanelStack.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PanelStack.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the {@link Tepl.PanelSimple} of `panel_stack`.
         *
         * It permits to alter the {@link Tepl.PanelStack} content through the {@link Tepl.Panel}
         * functions.
         * @returns the {@link Tepl.PanelSimple} of `panel_stack`.
         */
        get_panel_simple(): PanelSimple;
        /**
         * Gets the {@link Gtk.Stack} of `panel_stack`.
         *
         * The {@link Gtk.Stack} is exposed in the public API because it is useful for creating
         * a {@link Gtk.StackSwitcher}.
         *
         * If you need to alter the {@link Tepl.PanelStack} content, you must use
         * `tepl_panel_stack_get_panel_simple()` instead.
         * @returns the {@link Gtk.Stack} of `panel_stack`.
         */
        get_stack(): Gtk.Stack;
    }

    namespace PanelSwitcherMenu {
        // Signal signatures
        interface SignalSignatures extends Gtk.Bin.SignalSignatures {
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Bin.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class PanelSwitcherMenu extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<PanelSwitcherMenu>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PanelSwitcherMenu.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PanelSwitcherMenu.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](panel: PanelSimple): PanelSwitcherMenu;

        // Signals

        /** @signal */
        connect<K extends keyof PanelSwitcherMenu.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PanelSwitcherMenu.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof PanelSwitcherMenu.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PanelSwitcherMenu.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof PanelSwitcherMenu.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PanelSwitcherMenu.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace PrefsDialog {
        // Signal signatures
        interface SignalSignatures extends Gtk.Dialog.SignalSignatures {
            /**
             * The ::reset-all signal is emitted when the user has requested to
             * reset all preferences.
             *
             * Applications should connect to this signal to perform the operation.
             * `tepl_settings_reset_all()` may be useful for that.
             *
             * See `tepl_prefs_dialog_add_reset_all_button()`.
             * @signal
             * @since 6.13
             * @run-first
             */
            'reset-all': () => void;
            'notify::use-header-bar': (pspec: GObject.ParamSpec) => void;
            'notify::accept-focus': (pspec: GObject.ParamSpec) => void;
            'notify::application': (pspec: GObject.ParamSpec) => void;
            'notify::attached-to': (pspec: GObject.ParamSpec) => void;
            'notify::decorated': (pspec: GObject.ParamSpec) => void;
            'notify::default-height': (pspec: GObject.ParamSpec) => void;
            'notify::default-width': (pspec: GObject.ParamSpec) => void;
            'notify::deletable': (pspec: GObject.ParamSpec) => void;
            'notify::destroy-with-parent': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-map': (pspec: GObject.ParamSpec) => void;
            'notify::focus-visible': (pspec: GObject.ParamSpec) => void;
            'notify::gravity': (pspec: GObject.ParamSpec) => void;
            'notify::has-resize-grip': (pspec: GObject.ParamSpec) => void;
            'notify::has-toplevel-focus': (pspec: GObject.ParamSpec) => void;
            'notify::hide-titlebar-when-maximized': (pspec: GObject.ParamSpec) => void;
            'notify::icon': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::is-active': (pspec: GObject.ParamSpec) => void;
            'notify::is-maximized': (pspec: GObject.ParamSpec) => void;
            'notify::mnemonics-visible': (pspec: GObject.ParamSpec) => void;
            'notify::modal': (pspec: GObject.ParamSpec) => void;
            'notify::resizable': (pspec: GObject.ParamSpec) => void;
            'notify::resize-grip-visible': (pspec: GObject.ParamSpec) => void;
            'notify::role': (pspec: GObject.ParamSpec) => void;
            'notify::screen': (pspec: GObject.ParamSpec) => void;
            'notify::skip-pager-hint': (pspec: GObject.ParamSpec) => void;
            'notify::skip-taskbar-hint': (pspec: GObject.ParamSpec) => void;
            'notify::startup-id': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::transient-for': (pspec: GObject.ParamSpec) => void;
            'notify::type': (pspec: GObject.ParamSpec) => void;
            'notify::type-hint': (pspec: GObject.ParamSpec) => void;
            'notify::urgency-hint': (pspec: GObject.ParamSpec) => void;
            'notify::window-position': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gtk.Dialog.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class PrefsDialog extends Gtk.Dialog implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<PrefsDialog>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PrefsDialog.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PrefsDialog.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): PrefsDialog;

        // Signals

        /** @signal */
        connect<K extends keyof PrefsDialog.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PrefsDialog.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof PrefsDialog.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PrefsDialog.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof PrefsDialog.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PrefsDialog.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * The singleton instance is created with
         * `tepl_abstract_factory_create_prefs_dialog()`.
         */
        static get_singleton(): PrefsDialog;

        // Methods

        /**
         * Adds a “Reset All” button. When the button is clicked and the user confirms,
         * the {@link Tepl.PrefsDialog.SignalSignatures.reset_all | Tepl.PrefsDialog::reset-all} signal is emitted.
         */
        add_reset_all_button(): void;
        /**
         * This function sets the {@link Gtk.Window.transient_for} property and presents
         * `dialog`.
         * @param parent_window the parent {@link Gtk.Window}.
         */
        show_for_parent(parent_window: Gtk.Window): void;
    }

    namespace ProgressInfoBar {
        // Signal signatures
        interface SignalSignatures extends InfoBar.SignalSignatures {
            'notify::has-cancel-button': (pspec: GObject.ParamSpec) => void;
            'notify::handle-close-response': (pspec: GObject.ParamSpec) => void;
            'notify::icon-from-message-type': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::message-type': (pspec: GObject.ParamSpec) => void;
            'notify::revealed': (pspec: GObject.ParamSpec) => void;
            'notify::show-close-button': (pspec: GObject.ParamSpec) => void;
            'notify::baseline-position': (pspec: GObject.ParamSpec) => void;
            'notify::homogeneous': (pspec: GObject.ParamSpec) => void;
            'notify::spacing': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                InfoBar.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.Orientable.ConstructorProps {
            has_cancel_button: boolean;
            hasCancelButton: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class ProgressInfoBar extends InfoBar implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<ProgressInfoBar>;

        // Properties

        /**
         * Whether to add a Cancel button in the action area of the {@link Gtk.InfoBar},
         * with the {@link Gtk.ResponseType.CANCEL} response.
         * @since 6.0
         * @construct-only
         * @default true
         */
        get has_cancel_button(): boolean;
        /**
         * Whether to add a Cancel button in the action area of the {@link Gtk.InfoBar},
         * with the {@link Gtk.ResponseType.CANCEL} response.
         * @since 6.0
         * @construct-only
         * @default true
         */
        get hasCancelButton(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ProgressInfoBar.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ProgressInfoBar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](icon_name: string | null, markup: string | null, has_cancel_button: boolean): ProgressInfoBar;
        // Conflicted with Tepl.InfoBar.new

        static ['new'](...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof ProgressInfoBar.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ProgressInfoBar.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ProgressInfoBar.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ProgressInfoBar.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ProgressInfoBar.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ProgressInfoBar.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Calls `gtk_progress_bar_pulse()` on the {@link Gtk.ProgressBar} contained within the
         * `info_bar`.
         */
        pulse(): void;
        /**
         * Calls `gtk_progress_bar_set_fraction()` on the {@link Gtk.ProgressBar} contained within
         * the `info_bar`.
         * @param fraction fraction of the task that's been completed.
         */
        set_fraction(fraction: number): void;
        /**
         * Calls `gtk_label_set_markup()` on the {@link Gtk.Label} contained within the `info_bar`.
         * @param markup markup text.
         */
        set_markup(markup: string): void;
        /**
         * Calls `gtk_label_set_text()` on the {@link Gtk.Label} contained within the `info_bar`.
         * @param text text.
         */
        set_text(text: string): void;
    }

    namespace Settings {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * The ::font-changed signal is emitted when the return value of
             * `tepl_settings_get_selected_font()` has potentially changed.
             *
             * It takes into account the `use_default_font_key` provided with
             * `tepl_settings_provide_font_settings()` to avoid unnecessary signal
             * emission. In other words, for example if `use_default_font_key` is
             * `false`, the signal is not emitted even if the default (system's) font
             * has been modified.
             *
             * The relation between this signal and a potential zoom in and zoom out
             * feature, to temporarily make the font larger or smaller (so the zoom
             * level not being stored in {@link Gio.Settings}): when this signal is emitted,
             * it means that the user has explicitly changed the font setting, and
             * as such he or she probably wants to use that font instead. So the
             * expected behavior in that case is to reset the zoom level. But it's
             * left as an exercise for another class, since {@link Tepl.Settings} is only
             * for {@link Gio.Settings}.
             * @signal
             * @since 6.2
             * @run-first
             */
            'font-changed': () => void;
            'notify::style-scheme-id': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            style_scheme_id: string | null;
            styleSchemeId: string | null;
        }
    }

    /**
     * @gir-type Class
     */
    class Settings extends GObject.Object {
        static $gtype: GObject.GType<Settings>;

        // Properties

        /**
         * See `tepl_settings_provide_style_scheme_settings()`.
         *
         * The value of this property depends on whether the GTK theme is light
         * or dark, and uses the corresponding {@link Gio.Settings} key.
         * @since 6.11
         * @read-only
         * @default null
         */
        get style_scheme_id(): string | null;
        /**
         * See `tepl_settings_provide_style_scheme_settings()`.
         *
         * The value of this property depends on whether the GTK theme is light
         * or dark, and uses the corresponding {@link Gio.Settings} key.
         * @since 6.11
         * @read-only
         * @default null
         */
        get styleSchemeId(): string | null;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Settings.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Settings.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Settings.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Settings.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Settings.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Settings.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Settings.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Settings.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * This function introspects a {@link Gio.Settings} key to get its range, if the key as a
         * "u" type (unsigned integer). `false` is returned if the introspection failed.
         *
         * See `g_settings_schema_key_get_range()` for more flexibility.
         * @param settings a {@link Gio.Settings}.
         * @param key a key part of `settings`.
         */
        static get_range_uint(settings: Gio.Settings, key: string): [boolean, number, number];
        static get_singleton(): Settings;
        /**
         * Resets all the {@link Gio.Settings} keys belonging to `schema_id`.
         * @param schema_id a {@link Gio.Settings} schema id.
         */
        static reset_all(schema_id: string): void;

        // Methods

        /**
         * If `tepl_settings_provide_font_settings()` has *not* been called, this function
         * always returns the current value of the system's fixed width (monospace)
         * font.
         *
         * If `tepl_settings_provide_font_settings()` *has* been called, this function
         * returns the font name depending on the boolean value of
         * `use_default_font_key`.
         *
         * See also the {@link Tepl.Settings.SignalSignatures.font_changed | Tepl.Settings::font-changed} signal,
         * `tepl_utils_override_font_string()` and `tepl_prefs_create_font_component()`.
         * @returns the selected font name.
         */
        get_selected_font(): string;
        /**
         * @returns the value of the   {@link Tepl.Settings.style_scheme_id} property.
         */
        get_style_scheme_id(): string | null;
        /**
         * This function permits to setup correctly the GTK theme variant to use.
         *
         * If `theme_variant_settings` and `theme_variant_setting_key` are `null`, only the
         * system's settings will be taken into account.
         *
         * If `theme_variant_settings` and `theme_variant_setting_key` are provided, they
         * are taken into account according to {@link Tepl.SettingsThemeVariant}.
         *
         * You should call this function only once, as subsequent calls are ignored (the
         * setting used cannot be reconfigured).
         * @param theme_variant_settings a {@link Gio.Settings} object, or `null`.
         * @param theme_variant_setting_key a {@link Gio.Settings} key of type enum   {@link Tepl.SettingsThemeVariant}, or `null`.
         */
        handle_theme_variant(
            theme_variant_settings: Gio.Settings | null,
            theme_variant_setting_key: string | null,
        ): void;
        /**
         * @returns the {@link Gio.Settings} for `"org.gnome.desktop.interface"`.
         */
        peek_desktop_interface_settings(): Gio.Settings;
        /**
         * This function can only be called once, to provide two keys:
         * - `use_default_font_key`: must be of type boolean, to know whether to use the
         *   system's font (the default font), or the editor font.
         * - `editor_font_key`: must be of type string, containing the font name to have
         *   a different font for the text editor, rather than using the system's font.
         *
         * See `tepl_settings_get_selected_font()`.
         * @param font_settings the {@link Gio.Settings} object containing the keys.
         * @param use_default_font_key a key of type boolean.
         * @param editor_font_key a key of type string.
         */
        provide_font_settings(font_settings: Gio.Settings, use_default_font_key: string, editor_font_key: string): void;
        /**
         * This function can only be called once, to provide two keys:
         * - `key_for_light_theme_variant`: must be of type string, containing the ID of
         *   a {@link GtkSource.StyleScheme} that should be used when the GTK theme variant is
         *   light.
         * - `key_for_dark_theme_variant`: the same, but when the GTK theme variant is
         *   dark.
         *
         * See `tepl_settings_get_style_scheme_id()`.
         * @param style_scheme_settings the {@link Gio.Settings} object containing the keys.
         * @param key_for_light_theme_variant a key of type string.
         * @param key_for_dark_theme_variant a key of type string.
         */
        provide_style_scheme_settings(
            style_scheme_settings: Gio.Settings,
            key_for_light_theme_variant: string,
            key_for_dark_theme_variant: string,
        ): void;
    }

    namespace SpaceDrawerPrefs {
        // Signal signatures
        interface SignalSignatures extends Gtk.Grid.SignalSignatures {
            'notify::baseline-row': (pspec: GObject.ParamSpec) => void;
            'notify::column-homogeneous': (pspec: GObject.ParamSpec) => void;
            'notify::column-spacing': (pspec: GObject.ParamSpec) => void;
            'notify::row-homogeneous': (pspec: GObject.ParamSpec) => void;
            'notify::row-spacing': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
            'notify::orientation': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gtk.Grid.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.Orientable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class SpaceDrawerPrefs extends Gtk.Grid implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<SpaceDrawerPrefs>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SpaceDrawerPrefs.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SpaceDrawerPrefs.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SpaceDrawerPrefs;

        // Signals

        /** @signal */
        connect<K extends keyof SpaceDrawerPrefs.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SpaceDrawerPrefs.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof SpaceDrawerPrefs.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SpaceDrawerPrefs.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof SpaceDrawerPrefs.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SpaceDrawerPrefs.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the {@link GtkSource.SpaceDrawer} associated with `prefs`. The returned object is
         * guaranteed to be the same for the lifetime of `prefs`. Each
         * {@link Tepl.SpaceDrawerPrefs} object has a different {@link GtkSource.SpaceDrawer}.
         * @returns the {@link GtkSource.SpaceDrawer} associated with `prefs`.
         */
        get_space_drawer(): GtkSource.SpaceDrawer;
        /**
         * The orientation of the orientable.
         * @since 2.16
         * @default Gtk.Orientation.HORIZONTAL
         * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);
        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`.
         */
        get_orientation(): Gtk.Orientation;
        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }

    namespace StatusMenuButton {
        // Signal signatures
        interface SignalSignatures extends Gtk.MenuButton.SignalSignatures {
            'notify::align-widget': (pspec: GObject.ParamSpec) => void;
            'notify::direction': (pspec: GObject.ParamSpec) => void;
            'notify::menu-model': (pspec: GObject.ParamSpec) => void;
            'notify::popover': (pspec: GObject.ParamSpec) => void;
            'notify::popup': (pspec: GObject.ParamSpec) => void;
            'notify::use-popover': (pspec: GObject.ParamSpec) => void;
            'notify::active': (pspec: GObject.ParamSpec) => void;
            'notify::draw-indicator': (pspec: GObject.ParamSpec) => void;
            'notify::inconsistent': (pspec: GObject.ParamSpec) => void;
            'notify::always-show-image': (pspec: GObject.ParamSpec) => void;
            'notify::image': (pspec: GObject.ParamSpec) => void;
            'notify::image-position': (pspec: GObject.ParamSpec) => void;
            'notify::label': (pspec: GObject.ParamSpec) => void;
            'notify::relief': (pspec: GObject.ParamSpec) => void;
            'notify::use-stock': (pspec: GObject.ParamSpec) => void;
            'notify::use-underline': (pspec: GObject.ParamSpec) => void;
            'notify::xalign': (pspec: GObject.ParamSpec) => void;
            'notify::yalign': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gtk.MenuButton.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Actionable.ConstructorProps,
                Gtk.Activatable.ConstructorProps,
                Gtk.Buildable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class StatusMenuButton
        extends Gtk.MenuButton
        implements Atk.ImplementorIface, Gtk.Actionable, Gtk.Activatable, Gtk.Buildable
    {
        static $gtype: GObject.GType<StatusMenuButton>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StatusMenuButton.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<StatusMenuButton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): StatusMenuButton;

        // Signals

        /** @signal */
        connect<K extends keyof StatusMenuButton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StatusMenuButton.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof StatusMenuButton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StatusMenuButton.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof StatusMenuButton.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<StatusMenuButton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * To change the text displayed in `button`.
         * @param str the text to set.
         */
        set_label_text(str: string): void;
        /**
         * Emits a {@link Gtk.Widget.SignalSignatures.child_notify | Gtk.Widget::child-notify} signal for the
         * [child property][child-properties] `child_property`
         * on `widget`.
         *
         * This is the analogue of `g_object_notify()` for child properties.
         *
         * Also see `gtk_container_child_notify()`.
         * @param child_property the name of a child property installed on the                  class of `widget`’s parent
         */
        child_notify(child_property: string): void;
        /**
         * @param args
         */
        // Conflicted with Gtk.Container.child_notify
        child_notify(...args: never[]): any;
        /**
         * Gets the reading direction for a particular widget. See
         * `gtk_widget_set_direction()`.
         * @returns the reading direction for the widget.
         */
        get_direction(): Gtk.TextDirection;
        /**
         * @param args
         */
        // Conflicted with Gtk.MenuButton.get_direction
        get_direction(...args: never[]): any;
        /**
         * Returns whether the widget should grab focus when it is clicked with the mouse.
         * See `gtk_widget_set_focus_on_click()`.
         * @returns `true` if the widget should grab focus when it is clicked with               the mouse.
         */
        get_focus_on_click(): boolean;
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
         * If the direction is set to {@link Gtk.TextDirection.NONE}, then the value
         * set by `gtk_widget_set_default_direction()` will be used.
         * @param dir the new direction
         */
        set_direction(dir: Gtk.TextDirection): void;
        /**
         * @param args
         */
        // Conflicted with Gtk.MenuButton.set_direction
        set_direction(...args: never[]): any;
        /**
         * Sets whether the widget should grab focus when it is clicked with the mouse.
         * Making mouse clicks not grab focus is useful in places like toolbars where
         * you don’t want the keyboard focus removed from the main area of the
         * application.
         * @param focus_on_click whether the widget should grab focus when clicked with the mouse
         */
        set_focus_on_click(focus_on_click: boolean): void;
    }

    namespace Statusbar {
        // Signal signatures
        interface SignalSignatures extends Gtk.Statusbar.SignalSignatures {
            'notify::baseline-position': (pspec: GObject.ParamSpec) => void;
            'notify::homogeneous': (pspec: GObject.ParamSpec) => void;
            'notify::spacing': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gtk.Statusbar.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.Orientable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Statusbar extends Gtk.Statusbar implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<Statusbar>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Statusbar.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Statusbar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Statusbar;

        // Signals

        /** @signal */
        connect<K extends keyof Statusbar.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Statusbar.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Statusbar.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Statusbar.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Statusbar.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Statusbar.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Like `tepl_statusbar_flash_message()` but using a generic `context_id`.
         *
         * If you need to call `gtk_statusbar_remove_all()` or `gtk_statusbar_pop()`, then
         * use `tepl_statusbar_flash_message()` instead. Otherwise using this function is
         * sufficient.
         * @param msg the message.
         */
        flash_generic_message(msg: string): void;
        /**
         * Flashes a temporary message on the statusbar.
         *
         * The message is displayed during a short amount of time and then disappears
         * automatically.
         * @param context_id a context ID obtained with `gtk_statusbar_get_context_id()`.
         * @param msg the message.
         */
        flash_message(context_id: number, msg: string): void;
    }

    namespace StyleSchemeChooserFull {
        // Signal signatures
        interface SignalSignatures extends Gtk.Bin.SignalSignatures {
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Bin.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class StyleSchemeChooserFull extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<StyleSchemeChooserFull>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StyleSchemeChooserFull.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<StyleSchemeChooserFull.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): StyleSchemeChooserFull;

        // Signals

        /** @signal */
        connect<K extends keyof StyleSchemeChooserFull.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StyleSchemeChooserFull.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof StyleSchemeChooserFull.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StyleSchemeChooserFull.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof StyleSchemeChooserFull.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<StyleSchemeChooserFull.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace StyleSchemeChooserSimple {
        // Signal signatures
        interface SignalSignatures extends Gtk.Bin.SignalSignatures {
            'notify::style-scheme-id': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Bin.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            style_scheme_id: string | null;
            styleSchemeId: string | null;
        }
    }

    /**
     * @gir-type Class
     */
    class StyleSchemeChooserSimple extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<StyleSchemeChooserSimple>;

        // Properties

        /**
         * The selected {@link GtkSource.StyleScheme} ID.
         *
         * Its value changes when the user selects another row in the list.
         *
         * When set, if the ID doesn't exist, no row is selected.
         * @since 6.11
         * @default null
         */
        get style_scheme_id(): string | null;
        set style_scheme_id(val: string | null);
        /**
         * The selected {@link GtkSource.StyleScheme} ID.
         *
         * Its value changes when the user selects another row in the list.
         *
         * When set, if the ID doesn't exist, no row is selected.
         * @since 6.11
         * @default null
         */
        get styleSchemeId(): string | null;
        set styleSchemeId(val: string | null);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StyleSchemeChooserSimple.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<StyleSchemeChooserSimple.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](for_dark_theme_variant: boolean): StyleSchemeChooserSimple;

        // Signals

        /** @signal */
        connect<K extends keyof StyleSchemeChooserSimple.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StyleSchemeChooserSimple.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof StyleSchemeChooserSimple.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StyleSchemeChooserSimple.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof StyleSchemeChooserSimple.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<StyleSchemeChooserSimple.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns the value of the   {@link Tepl.StyleSchemeChooserSimple.style_scheme_id} property.
         */
        get_style_scheme_id(): string | null;
        /**
         * Sets the {@link Tepl.StyleSchemeChooserSimple.style_scheme_id} property.
         * @param style_scheme_id the new value.
         */
        set_style_scheme_id(style_scheme_id: string): void;
    }

    namespace Tab {
        // Signal signatures
        interface SignalSignatures extends Gtk.Grid.SignalSignatures {
            /**
             * The ::close-request signal is emitted when there is a request to
             * close the {@link Tepl.Tab}, for example if the user clicks on a close button.
             *
             * The default object method handler does the following:
             * - If the buffer is not modified (according to
             *   `gtk_text_buffer_get_modified()`), close the tab.
             * - Else, show a message dialog to propose to save the file before
             *   closing.
             *
             * To override the default object method handler, either override the
             * virtual function in a {@link Tepl.Tab} subclass or connect to the signal and
             * call `g_signal_stop_emission_by_name()`.
             * @signal
             * @since 3.0
             * @run-last
             */
            'close-request': () => void;
            'notify::view': (pspec: GObject.ParamSpec) => void;
            'notify::baseline-row': (pspec: GObject.ParamSpec) => void;
            'notify::column-homogeneous': (pspec: GObject.ParamSpec) => void;
            'notify::column-spacing': (pspec: GObject.ParamSpec) => void;
            'notify::row-homogeneous': (pspec: GObject.ParamSpec) => void;
            'notify::row-spacing': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
            'notify::orientation': (pspec: GObject.ParamSpec) => void;
            'notify::active-buffer': (pspec: GObject.ParamSpec) => void;
            'notify::active-tab': (pspec: GObject.ParamSpec) => void;
            'notify::active-view': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gtk.Grid.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.Orientable.ConstructorProps,
                TabGroup.ConstructorProps {
            view: View;
        }
    }

    /**
     * @gir-type Class
     */
    class Tab extends Gtk.Grid implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable, TabGroup {
        static $gtype: GObject.GType<Tab>;

        // Properties

        /**
         * The {@link Tepl.View} contained in the tab. When this property is set, the
         * ::pack_view virtual function is called.
         * @since 3.0
         * @construct-only
         */
        get view(): View;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Tab.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Tab.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Tab;

        static new_with_view(view: View): Tab;

        // Signals

        /** @signal */
        connect<K extends keyof Tab.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Tab.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Tab.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Tab.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Tab.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Tab.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * For the {@link Tepl.Tab.SignalSignatures.close_request | Tepl.Tab::close-request} signal.
         * @virtual
         */
        vfunc_close_request(): void;
        /**
         * Virtual function pointer to add a {@link Tepl.GotoLineBar} in
         *   the {@link Tepl.Tab} container. By default the {@link Tepl.GotoLineBar} is added at the
         *   bottom.
         * @param goto_line_bar
         * @virtual
         */
        vfunc_pack_goto_line_bar(goto_line_bar: GotoLineBar): void;
        /**
         * Virtual function pointer to add a {@link Gtk.InfoBar} in the {@link Tepl.Tab}
         *   container. By default the {@link Gtk.InfoBar} is inserted just above the
         *   {@link Gtk.ScrolledWindow} containing the {@link Tepl.View}.
         * @param info_bar
         * @virtual
         */
        vfunc_pack_info_bar(info_bar: Gtk.InfoBar): void;
        /**
         * Virtual function pointer to add the {@link Tepl.View} in the {@link Tepl.Tab}
         *   container. Called only once at object construction time, when the
         *   {@link Tepl.Tab.view} property is set. By default the {@link Tepl.View} is added to a
         *   {@link Gtk.ScrolledWindow} and the {@link Gtk.ScrolledWindow} is added to the {@link Tepl.Tab} with
         *   `gtk_container_add()`.
         * @param view
         * @virtual
         */
        vfunc_pack_view(view: View): void;

        // Methods

        /**
         * Attaches `info_bar` to `tab`.
         *
         * This function calls the ::pack_info_bar virtual function.
         * @param info_bar a {@link Gtk.InfoBar}.
         */
        add_info_bar(info_bar: Gtk.InfoBar): void;
        /**
         * A convenience function that calls `gtk_text_view_get_buffer()` on the
         * {@link Tepl.Tab.view} associated with the `tab`.
         * @returns the {@link Tepl.Buffer} of the {@link Tepl.Tab.view}.
         */
        get_buffer(): Buffer;
        /**
         * Gets the {@link Tepl.GotoLineBar} widget belonging to `tab`. The {@link Tepl.GotoLineBar} must
         * not be destroyed by the application, the purpose of this function is to
         * show/hide the widget.
         * @returns the {@link Tepl.GotoLineBar} widget belonging to `tab`.
         */
        get_goto_line_bar(): GotoLineBar;
        /**
         * @returns the {@link Tepl.View} contained in `tab`.
         */
        get_view(): View;
        /**
         * Unconditionally loads a file in `tab`, regardless if there are unsaved changes
         * in the {@link Gtk.TextBuffer}. The previous buffer content is lost.
         *
         * This function is asynchronous, there is no way to know when the file loading
         * is finished.
         * @param location a {@link Gio.File}.
         */
        load_file(location: Gio.File): void;
        /**
         * Shows a {@link Gtk.FileChooser} to save the `tab` to a different location, creates an
         * appropriate {@link Tepl.FileSaver} and asynchronously runs it.
         *
         * See the {@link Gio.AsyncResult} documentation to know how to use this function.
         */
        save_as_async(): globalThis.Promise<boolean>;
        /**
         * Shows a {@link Gtk.FileChooser} to save the `tab` to a different location, creates an
         * appropriate {@link Tepl.FileSaver} and asynchronously runs it.
         *
         * See the {@link Gio.AsyncResult} documentation to know how to use this function.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is   satisfied.
         */
        save_as_async(callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Shows a {@link Gtk.FileChooser} to save the `tab` to a different location, creates an
         * appropriate {@link Tepl.FileSaver} and asynchronously runs it.
         *
         * See the {@link Gio.AsyncResult} documentation to know how to use this function.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is   satisfied.
         */
        save_as_async(callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        /**
         * The same as `tepl_tab_save_as_async()`, but without callback.
         *
         * This function is useful when you don't need to know:
         * - when the operation is finished;
         * - and whether the operation ran successfully.
         */
        save_as_async_simple(): void;
        /**
         * Finishes a tab saving started with `tepl_tab_save_as_async()`.
         * @param result a {@link Gio.AsyncResult}.
         * @returns whether the tab was saved successfully.
         */
        save_as_finish(result: Gio.AsyncResult): boolean;
        /**
         * Saves asynchronously the content of the `tab`. The {@link Tepl.File.location} must not
         * be `null`.
         *
         * See the {@link Gio.AsyncResult} documentation to know how to use this function.
         */
        save_async(): globalThis.Promise<boolean>;
        /**
         * Saves asynchronously the content of the `tab`. The {@link Tepl.File.location} must not
         * be `null`.
         *
         * See the {@link Gio.AsyncResult} documentation to know how to use this function.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is   satisfied.
         */
        save_async(callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Saves asynchronously the content of the `tab`. The {@link Tepl.File.location} must not
         * be `null`.
         *
         * See the {@link Gio.AsyncResult} documentation to know how to use this function.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is   satisfied.
         */
        save_async(callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        /**
         * The same as `tepl_tab_save_async()`, but without callback.
         *
         * This function is useful when you don't need to know:
         * - when the operation is finished;
         * - and whether the operation ran successfully.
         */
        save_async_simple(): void;
        /**
         * Finishes a tab saving started with `tepl_tab_save_async()`.
         * @param result a {@link Gio.AsyncResult}.
         * @returns whether the tab was saved successfully.
         */
        save_finish(result: Gio.AsyncResult): boolean;
        /**
         * The orientation of the orientable.
         * @since 2.16
         * @default Gtk.Orientation.HORIZONTAL
         * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);
        /**
         * The {@link Tepl.Buffer} of the active tab.
         * @since 3.0
         * @read-only
         * @category Inherited from Tepl.TabGroup
         */
        get active_buffer(): Buffer | null;
        /**
         * The {@link Tepl.Buffer} of the active tab.
         * @since 3.0
         * @read-only
         * @category Inherited from Tepl.TabGroup
         */
        get activeBuffer(): Buffer | null;
        /**
         * The {@link Tepl.Tab} currently shown.
         * @since 3.0
         * @category Inherited from Tepl.TabGroup
         */
        get active_tab(): Tab | null;
        set active_tab(val: Tab | null);
        /**
         * The {@link Tepl.Tab} currently shown.
         * @since 3.0
         * @category Inherited from Tepl.TabGroup
         */
        get activeTab(): Tab | null;
        set activeTab(val: Tab | null);
        /**
         * The {@link Tepl.View} of the active tab.
         * @since 3.0
         * @read-only
         * @category Inherited from Tepl.TabGroup
         */
        get active_view(): View | null;
        /**
         * The {@link Tepl.View} of the active tab.
         * @since 3.0
         * @read-only
         * @category Inherited from Tepl.TabGroup
         */
        get activeView(): View | null;
        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`.
         */
        get_orientation(): Gtk.Orientation;
        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation): void;
        /**
         * Appends `tab` to `tab_group`.
         * @param tab a {@link Tepl.Tab}.
         * @param jump_to whether to set `tab` as the active tab after appending it.
         */
        append_tab(tab: Tab, jump_to: boolean): void;
        /**
         * Convenience function.
         * @returns the {@link Tepl.Buffer} of the active tab.
         */
        get_active_buffer(): Buffer | null;
        /**
         * @returns the {@link Tepl.Tab} currently shown in `tab_group`.
         */
        get_active_tab(): Tab | null;
        /**
         * Convenience function.
         * @returns the {@link Tepl.View} of the active tab.
         */
        get_active_view(): View | null;
        /**
         * Convenience function.
         * @returns like `tepl_tab_group_get_tabs()`, but returns {@link Tepl.Buffer}'s.
         */
        get_buffers(): Buffer[];
        /**
         * Gets the list of {@link Tepl.Tab}'s contained in `tab_group`.
         *
         * If `tab_group` contains non-{@link Tepl.Tab} children, those will not be present in the
         * returned list. In other words, it is <emphasis>not</emphasis> guaranteed that
         * the index of a {@link Tepl.Tab} in the returned {@link GLib.List} has the same child index in
         * the `tab_group` container.
         * @returns the list of all the {@link Tepl.Tab}'s contained in `tab_group`.
         */
        get_tabs(): Tab[];
        /**
         * Convenience function.
         * @returns like `tepl_tab_group_get_tabs()`, but returns {@link Tepl.View}'s.
         */
        get_views(): View[];
        /**
         * Sets the {@link Tepl.TabGroup.active_tab}. `tab` must be part of `tab_group`.
         * @param tab a {@link Tepl.Tab} part of `tab_group`.
         */
        set_active_tab(tab: Tab): void;
        /**
         * Virtual function pointer for `tepl_tab_group_append_tab()`,
         *   without the `jump_to` parameter. The default implementation prints a warning
         *   about the operation not being supported.
         * @param tab
         * @virtual
         */
        vfunc_append_tab_vfunc(tab: Tab): void;
        /**
         * Virtual function pointer for `tepl_tab_group_get_active_tab()`.
         *   By default, `null` is returned.
         * @virtual
         */
        vfunc_get_active_tab(): Tab | null;
        /**
         * Gets the list of {@link Tepl.Tab}'s contained in `tab_group`.
         *
         * If `tab_group` contains non-{@link Tepl.Tab} children, those will not be present in the
         * returned list. In other words, it is <emphasis>not</emphasis> guaranteed that
         * the index of a {@link Tepl.Tab} in the returned {@link GLib.List} has the same child index in
         * the `tab_group` container.
         * @virtual
         */
        vfunc_get_tabs(): Tab[];
        /**
         * Sets the {@link Tepl.TabGroup.active_tab}. `tab` must be part of `tab_group`.
         * @param tab a {@link Tepl.Tab} part of `tab_group`.
         * @virtual
         */
        vfunc_set_active_tab(tab: Tab): void;
    }

    namespace TabLabel {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            'notify::tab': (pspec: GObject.ParamSpec) => void;
            'notify::baseline-position': (pspec: GObject.ParamSpec) => void;
            'notify::homogeneous': (pspec: GObject.ParamSpec) => void;
            'notify::spacing': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
            'notify::orientation': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gtk.Box.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.Orientable.ConstructorProps {
            tab: Tab | null;
        }
    }

    /**
     * @gir-type Class
     */
    class TabLabel extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<TabLabel>;

        // Properties

        /**
         * The associated {@link Tepl.Tab}. {@link Tepl.TabLabel} has a weak reference to the
         * {@link Tepl.Tab}.
         * @since 3.0
         * @construct-only
         */
        get tab(): Tab | null;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TabLabel.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<TabLabel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](tab: Tab): TabLabel;
        // Conflicted with Gtk.Box.new

        static ['new'](...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof TabLabel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TabLabel.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof TabLabel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TabLabel.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof TabLabel.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<TabLabel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Virtual function pointer to create the tooltip markup
         *   string. `null` must be returned if no tooltip is wanted. The result is
         *   intended to be used as an argument to `gtk_widget_set_tooltip_markup()`. The
         *   default implementation returns the full {@link Tepl.File.location} if non-`null`, or
         *   `null` otherwise. The return value must be freed with `g_free()` when no
         *   longer needed.
         * @virtual
         */
        vfunc_get_tooltip_markup(): string;

        // Methods

        /**
         * @returns the {@link Tepl.TabLabel.tab}.
         */
        get_tab(): Tab | null;
        /**
         * Asks {@link Tepl.TabLabel} to update its tooltip. The ::get_tooltip_markup virtual
         * function is called and the result is set with
         * `gtk_widget_set_tooltip_markup()`.
         */
        update_tooltip(): void;
        /**
         * The orientation of the orientable.
         * @since 2.16
         * @default Gtk.Orientation.HORIZONTAL
         * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);
        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`.
         */
        get_orientation(): Gtk.Orientation;
        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }

    namespace View {
        // Signal signatures
        interface SignalSignatures extends GtkSource.View.SignalSignatures {
            'notify::auto-indent': (pspec: GObject.ParamSpec) => void;
            'notify::completion': (pspec: GObject.ParamSpec) => void;
            'notify::highlight-current-line': (pspec: GObject.ParamSpec) => void;
            'notify::indent-on-tab': (pspec: GObject.ParamSpec) => void;
            'notify::indent-width': (pspec: GObject.ParamSpec) => void;
            'notify::insert-spaces-instead-of-tabs': (pspec: GObject.ParamSpec) => void;
            'notify::right-margin-position': (pspec: GObject.ParamSpec) => void;
            'notify::show-line-marks': (pspec: GObject.ParamSpec) => void;
            'notify::show-line-numbers': (pspec: GObject.ParamSpec) => void;
            'notify::show-right-margin': (pspec: GObject.ParamSpec) => void;
            'notify::smart-backspace': (pspec: GObject.ParamSpec) => void;
            'notify::smart-home-end': (pspec: GObject.ParamSpec) => void;
            'notify::space-drawer': (pspec: GObject.ParamSpec) => void;
            'notify::tab-width': (pspec: GObject.ParamSpec) => void;
            'notify::accepts-tab': (pspec: GObject.ParamSpec) => void;
            'notify::bottom-margin': (pspec: GObject.ParamSpec) => void;
            'notify::buffer': (pspec: GObject.ParamSpec) => void;
            'notify::cursor-visible': (pspec: GObject.ParamSpec) => void;
            'notify::editable': (pspec: GObject.ParamSpec) => void;
            'notify::im-module': (pspec: GObject.ParamSpec) => void;
            'notify::indent': (pspec: GObject.ParamSpec) => void;
            'notify::input-hints': (pspec: GObject.ParamSpec) => void;
            'notify::input-purpose': (pspec: GObject.ParamSpec) => void;
            'notify::justification': (pspec: GObject.ParamSpec) => void;
            'notify::left-margin': (pspec: GObject.ParamSpec) => void;
            'notify::monospace': (pspec: GObject.ParamSpec) => void;
            'notify::overwrite': (pspec: GObject.ParamSpec) => void;
            'notify::pixels-above-lines': (pspec: GObject.ParamSpec) => void;
            'notify::pixels-below-lines': (pspec: GObject.ParamSpec) => void;
            'notify::pixels-inside-wrap': (pspec: GObject.ParamSpec) => void;
            'notify::populate-all': (pspec: GObject.ParamSpec) => void;
            'notify::right-margin': (pspec: GObject.ParamSpec) => void;
            'notify::tabs': (pspec: GObject.ParamSpec) => void;
            'notify::top-margin': (pspec: GObject.ParamSpec) => void;
            'notify::wrap-mode': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                GtkSource.View.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.Scrollable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class View extends GtkSource.View implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {
        static $gtype: GObject.GType<View>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: View.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<View.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): View;

        static new_with_buffer(buffer: GtkSource.Buffer): View;

        // Signals

        /** @signal */
        connect<K extends keyof View.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, View.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof View.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, View.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof View.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<View.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Copies the clipboard.
         */
        copy_clipboard(): void;
        /**
         * Cuts the clipboard and then scrolls to the cursor position.
         */
        cut_clipboard(): void;
        /**
         * Deletes the text currently selected in the {@link Gtk.TextBuffer} associated
         * to the view and then scrolls to the cursor position.
         */
        delete_selection(): void;
        /**
         * Places the cursor at the position returned by
         * `gtk_text_buffer_get_iter_at_line()`, and scrolls to that position.
         * @param line a line number, counting from 0.
         * @returns `true` if the cursor has been moved exactly to `line`, `false` if that   line didn't exist.
         */
        goto_line(line: number): boolean;
        /**
         * Places the cursor at the position returned by
         * `gtk_text_buffer_get_iter_at_line_offset()`, and scrolls to that position.
         * @param line a line number, counting from 0.
         * @param line_offset the line offset, in characters (not bytes).
         * @returns `true` if the cursor has been moved exactly to `line` and   `line_offset`, `false` if that position didn't exist.
         */
        goto_line_offset(line: number, line_offset: number): boolean;
        /**
         * Pastes the clipboard and then scrolls to the cursor position.
         */
        paste_clipboard(): void;
        /**
         * Scrolls the `view` to the cursor position.
         */
        scroll_to_cursor(): void;
        /**
         * Selects all the text.
         */
        select_all(): void;
        /**
         * Selects the lines between `start_line` and `end_line` included, counting from
         * zero. And then scrolls to the cursor.
         *
         * Possible use-case: line numbers coming from a compilation output, to go to
         * the place where a warning or error occurred.
         * @param start_line start of the region to select.
         * @param end_line end of the region to select.
         */
        select_lines(start_line: number, end_line: number): void;
    }

    /**
     * @gir-type Alias
     */
    type AbstractFactoryClass = typeof AbstractFactory;
    /**
     * @gir-type Alias
     */
    type ApplicationClass = typeof Application;
    /**
     * @gir-type Struct
     */
    abstract class ApplicationPrivate {
        static $gtype: GObject.GType<ApplicationPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type ApplicationWindowClass = typeof ApplicationWindow;
    /**
     * @gir-type Struct
     */
    abstract class ApplicationWindowPrivate {
        static $gtype: GObject.GType<ApplicationWindowPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type BufferClass = typeof Buffer;
    /**
     * @gir-type Alias
     */
    type CodeCommentViewClass = typeof CodeCommentView;
    /**
     * @gir-type Struct
     */
    abstract class CodeCommentViewPrivate {
        static $gtype: GObject.GType<CodeCommentViewPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type FileClass = typeof File;
    /**
     * @gir-type Alias
     */
    type FileLoaderClass = typeof FileLoader;
    /**
     * @gir-type Struct
     */
    abstract class FileLoaderPrivate {
        static $gtype: GObject.GType<FileLoaderPrivate>;
    }

    /**
     * @gir-type Struct
     */
    abstract class FilePrivate {
        static $gtype: GObject.GType<FilePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type FileSaverClass = typeof FileSaver;
    /**
     * @gir-type Struct
     */
    abstract class FileSaverPrivate {
        static $gtype: GObject.GType<FileSaverPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type FoldRegionClass = typeof FoldRegion;
    /**
     * @gir-type Alias
     */
    type GotoLineBarClass = typeof GotoLineBar;
    /**
     * @gir-type Struct
     */
    abstract class GotoLineBarPrivate {
        static $gtype: GObject.GType<GotoLineBarPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type GutterRendererFoldsClass = typeof GutterRendererFolds;
    /**
     * @gir-type Alias
     */
    type InfoBarClass = typeof InfoBar;
    /**
     * @gir-type Struct
     */
    abstract class InfoBarPrivate {
        static $gtype: GObject.GType<InfoBarPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type LanguageChooserDialogClass = typeof LanguageChooserDialog;
    /**
     * @gir-type Struct
     */
    abstract class LanguageChooserDialogPrivate {
        static $gtype: GObject.GType<LanguageChooserDialogPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type LanguageChooserInterface = typeof LanguageChooser;
    /**
     * @gir-type Alias
     */
    type LanguageChooserWidgetClass = typeof LanguageChooserWidget;
    /**
     * @gir-type Struct
     */
    abstract class LanguageChooserWidgetPrivate {
        static $gtype: GObject.GType<LanguageChooserWidgetPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type LineColumnIndicatorClass = typeof LineColumnIndicator;
    /**
     * @gir-type Struct
     */
    abstract class LineColumnIndicatorPrivate {
        static $gtype: GObject.GType<LineColumnIndicatorPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type MetadataClass = typeof Metadata;
    /**
     * @gir-type Alias
     */
    type MetadataManagerClass = typeof MetadataManager;
    /**
     * @gir-type Struct
     */
    abstract class MetadataManagerPrivate {
        static $gtype: GObject.GType<MetadataManagerPrivate>;
    }

    /**
     * @gir-type Struct
     */
    abstract class MetadataPrivate {
        static $gtype: GObject.GType<MetadataPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type NotebookClass = typeof Notebook;
    /**
     * @gir-type Struct
     */
    abstract class NotebookPrivate {
        static $gtype: GObject.GType<NotebookPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type OverwriteIndicatorClass = typeof OverwriteIndicator;
    /**
     * @gir-type Struct
     */
    abstract class OverwriteIndicatorPrivate {
        static $gtype: GObject.GType<OverwriteIndicatorPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type Panel1Class = typeof Panel1;
    /**
     * @gir-type Struct
     */
    abstract class Panel1Private {
        static $gtype: GObject.GType<Panel1Private>;
    }

    /**
     * @gir-type Alias
     */
    type PanelInterface = typeof Panel;
    /**
     * @gir-type Alias
     */
    type PanelItemClass = typeof PanelItem;
    /**
     * @gir-type Struct
     */
    abstract class PanelItemPrivate {
        static $gtype: GObject.GType<PanelItemPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type PanelNotebookClass = typeof PanelNotebook;
    /**
     * @gir-type Struct
     */
    abstract class PanelNotebookPrivate {
        static $gtype: GObject.GType<PanelNotebookPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type PanelSimpleClass = typeof PanelSimple;
    /**
     * @gir-type Struct
     */
    abstract class PanelSimplePrivate {
        static $gtype: GObject.GType<PanelSimplePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type PanelStackClass = typeof PanelStack;
    /**
     * @gir-type Struct
     */
    abstract class PanelStackPrivate {
        static $gtype: GObject.GType<PanelStackPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type PanelSwitcherMenuClass = typeof PanelSwitcherMenu;
    /**
     * @gir-type Struct
     */
    abstract class PanelSwitcherMenuPrivate {
        static $gtype: GObject.GType<PanelSwitcherMenuPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type PrefsDialogClass = typeof PrefsDialog;
    /**
     * @gir-type Struct
     */
    abstract class PrefsDialogPrivate {
        static $gtype: GObject.GType<PrefsDialogPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type ProgressInfoBarClass = typeof ProgressInfoBar;
    /**
     * @gir-type Struct
     */
    abstract class ProgressInfoBarPrivate {
        static $gtype: GObject.GType<ProgressInfoBarPrivate>;
    }

    /**
     * @gir-type Struct
     */
    abstract class SettingsBindingGroup {
        static $gtype: GObject.GType<SettingsBindingGroup>;

        // Methods

        /**
         * Adds `property_name` to `group`.
         *
         * Each time that you call `g_settings_bind()` (or similar), you should call this
         * function too.
         * @param property_name the name of a {@link GObject.Object} property.
         */
        add(property_name: string): void;
        /**
         * Frees a {@link Tepl.SettingsBindingGroup} instance.
         */
        free(): void;
        /**
         * Calls `g_settings_unbind()` on `object` for all properties that have been added
         * to `group`.
         *
         * This function is intended to be called in `dispose()`.
         * @param object a {@link GObject.Object}.
         */
        unbind(object: GObject.Object): void;
    }

    /**
     * @gir-type Alias
     */
    type SettingsClass = typeof Settings;
    /**
     * @gir-type Struct
     */
    abstract class SettingsPrivate {
        static $gtype: GObject.GType<SettingsPrivate>;
    }

    /**
     * @gir-type Struct
     */
    abstract class SignalGroup {
        static $gtype: GObject.GType<SignalGroup>;
    }

    /**
     * @gir-type Alias
     */
    type SpaceDrawerPrefsClass = typeof SpaceDrawerPrefs;
    /**
     * @gir-type Struct
     */
    abstract class SpaceDrawerPrefsPrivate {
        static $gtype: GObject.GType<SpaceDrawerPrefsPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type StatusMenuButtonClass = typeof StatusMenuButton;
    /**
     * @gir-type Struct
     */
    abstract class StatusMenuButtonPrivate {
        static $gtype: GObject.GType<StatusMenuButtonPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type StatusbarClass = typeof Statusbar;
    /**
     * @gir-type Struct
     */
    abstract class StatusbarPrivate {
        static $gtype: GObject.GType<StatusbarPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type StyleSchemeChooserFullClass = typeof StyleSchemeChooserFull;
    /**
     * @gir-type Struct
     */
    abstract class StyleSchemeChooserFullPrivate {
        static $gtype: GObject.GType<StyleSchemeChooserFullPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type StyleSchemeChooserSimpleClass = typeof StyleSchemeChooserSimple;
    /**
     * @gir-type Struct
     */
    abstract class StyleSchemeChooserSimplePrivate {
        static $gtype: GObject.GType<StyleSchemeChooserSimplePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type TabClass = typeof Tab;
    /**
     * @gir-type Alias
     */
    type TabGroupInterface = typeof TabGroup;
    /**
     * @gir-type Alias
     */
    type TabLabelClass = typeof TabLabel;
    /**
     * @gir-type Struct
     */
    abstract class TabLabelPrivate {
        static $gtype: GObject.GType<TabLabelPrivate>;
    }

    /**
     * @gir-type Struct
     */
    abstract class TabPrivate {
        static $gtype: GObject.GType<TabPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type ViewClass = typeof View;
    namespace LanguageChooser {
        /**
         * Interface for implementing LanguageChooser.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * The function pointer for the
             *   {@link Tepl.LanguageChooser.SignalSignatures.language_activated | Tepl.LanguageChooser::language-activated} signal.
             * @param language
             * @virtual
             */
            vfunc_language_activated(language: GtkSource.Language): void;
            /**
             * Selects `language` in the list.
             * @param language a {@link GtkSource.Language}, or `null` for "Plain Text".
             * @virtual
             */
            vfunc_select_language(language: GtkSource.Language | null): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface LanguageChooserNamespace {
        $gtype: GObject.GType<LanguageChooser>;
        prototype: LanguageChooser;
    }
    /**
     * @gir-type Interface
     */
    interface LanguageChooser extends GObject.Object, LanguageChooser.Interface {
        // Methods

        /**
         * Selects `language` in the list.
         * @param language a {@link GtkSource.Language}, or `null` for "Plain Text".
         */
        select_language(language: GtkSource.Language | null): void;
    }

    export const LanguageChooser: LanguageChooserNamespace & {
        new (): LanguageChooser; // This allows `obj instanceof LanguageChooser`
    };

    namespace Panel {
        /**
         * Interface for implementing Panel.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Adds an item to the panel.
             * @param item a {@link Tepl.PanelItem}.
             * @virtual
             */
            vfunc_add(item: PanelItem): void;
            /**
             * Removes an item from the panel.
             * @param item the {@link Tepl.PanelItem} to remove.
             * @virtual
             */
            vfunc_remove(item: PanelItem): void;
            /**
             * Sets `item` to be the one that is currently shown in `panel`.
             *
             * Only one {@link Tepl.PanelItem} is shown at a time in a {@link Tepl.Panel}.
             * @param item a {@link Tepl.PanelItem}.
             * @virtual
             */
            vfunc_set_active(item: PanelItem | null): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface PanelNamespace {
        $gtype: GObject.GType<Panel>;
        prototype: Panel;
    }
    /**
     * @gir-type Interface
     */
    interface Panel extends GObject.Object, Panel.Interface {
        // Methods

        /**
         * Adds an item to the panel.
         * @param item a {@link Tepl.PanelItem}.
         */
        add(item: PanelItem): void;
        /**
         * Removes an item from the panel.
         * @param item the {@link Tepl.PanelItem} to remove.
         */
        remove(item: PanelItem): void;
        /**
         * Sets `item` to be the one that is currently shown in `panel`.
         *
         * Only one {@link Tepl.PanelItem} is shown at a time in a {@link Tepl.Panel}.
         * @param item a {@link Tepl.PanelItem}.
         */
        set_active(item: PanelItem | null): void;
    }

    export const Panel: PanelNamespace & {
        new (): Panel; // This allows `obj instanceof Panel`
    };

    namespace TabGroup {
        /**
         * Interface for implementing TabGroup.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Virtual function pointer for `tepl_tab_group_append_tab()`,
             *   without the `jump_to` parameter. The default implementation prints a warning
             *   about the operation not being supported.
             * @param tab
             * @virtual
             */
            vfunc_append_tab_vfunc(tab: Tab): void;
            /**
             * Virtual function pointer for `tepl_tab_group_get_active_tab()`.
             *   By default, `null` is returned.
             * @virtual
             */
            vfunc_get_active_tab(): Tab | null;
            /**
             * Gets the list of {@link Tepl.Tab}'s contained in `tab_group`.
             *
             * If `tab_group` contains non-{@link Tepl.Tab} children, those will not be present in the
             * returned list. In other words, it is <emphasis>not</emphasis> guaranteed that
             * the index of a {@link Tepl.Tab} in the returned {@link GLib.List} has the same child index in
             * the `tab_group` container.
             * @virtual
             */
            vfunc_get_tabs(): Tab[];
            /**
             * Sets the {@link Tepl.TabGroup.active_tab}. `tab` must be part of `tab_group`.
             * @param tab a {@link Tepl.Tab} part of `tab_group`.
             * @virtual
             */
            vfunc_set_active_tab(tab: Tab): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            active_buffer: Buffer | null;
            activeBuffer: Buffer | null;
            active_tab: Tab | null;
            activeTab: Tab | null;
            active_view: View | null;
            activeView: View | null;
        }
    }

    export interface TabGroupNamespace {
        $gtype: GObject.GType<TabGroup>;
        prototype: TabGroup;
    }
    /**
     * @gir-type Interface
     */
    interface TabGroup extends GObject.Object, TabGroup.Interface {
        // Properties

        /**
         * The {@link Tepl.Buffer} of the active tab.
         * @since 3.0
         * @read-only
         */
        get active_buffer(): Buffer | null;
        /**
         * The {@link Tepl.Buffer} of the active tab.
         * @since 3.0
         * @read-only
         */
        get activeBuffer(): Buffer | null;
        /**
         * The {@link Tepl.Tab} currently shown.
         * @since 3.0
         */
        get active_tab(): Tab | null;
        set active_tab(val: Tab | null);
        /**
         * The {@link Tepl.Tab} currently shown.
         * @since 3.0
         */
        get activeTab(): Tab | null;
        set activeTab(val: Tab | null);
        /**
         * The {@link Tepl.View} of the active tab.
         * @since 3.0
         * @read-only
         */
        get active_view(): View | null;
        /**
         * The {@link Tepl.View} of the active tab.
         * @since 3.0
         * @read-only
         */
        get activeView(): View | null;

        // Methods

        /**
         * Appends `tab` to `tab_group`.
         * @param tab a {@link Tepl.Tab}.
         * @param jump_to whether to set `tab` as the active tab after appending it.
         */
        append_tab(tab: Tab, jump_to: boolean): void;
        /**
         * Convenience function.
         * @returns the {@link Tepl.Buffer} of the active tab.
         */
        get_active_buffer(): Buffer | null;
        /**
         * @returns the {@link Tepl.Tab} currently shown in `tab_group`.
         */
        get_active_tab(): Tab | null;
        /**
         * Convenience function.
         * @returns the {@link Tepl.View} of the active tab.
         */
        get_active_view(): View | null;
        /**
         * Convenience function.
         * @returns like `tepl_tab_group_get_tabs()`, but returns {@link Tepl.Buffer}'s.
         */
        get_buffers(): Buffer[];
        /**
         * Gets the list of {@link Tepl.Tab}'s contained in `tab_group`.
         *
         * If `tab_group` contains non-{@link Tepl.Tab} children, those will not be present in the
         * returned list. In other words, it is <emphasis>not</emphasis> guaranteed that
         * the index of a {@link Tepl.Tab} in the returned {@link GLib.List} has the same child index in
         * the `tab_group` container.
         * @returns the list of all the {@link Tepl.Tab}'s contained in `tab_group`.
         */
        get_tabs(): Tab[];
        /**
         * Convenience function.
         * @returns like `tepl_tab_group_get_tabs()`, but returns {@link Tepl.View}'s.
         */
        get_views(): View[];
        /**
         * Sets the {@link Tepl.TabGroup.active_tab}. `tab` must be part of `tab_group`.
         * @param tab a {@link Tepl.Tab} part of `tab_group`.
         */
        set_active_tab(tab: Tab): void;
    }

    export const TabGroup: TabGroupNamespace & {
        new (): TabGroup; // This allows `obj instanceof TabGroup`
    };

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

export default Tepl;

// END
