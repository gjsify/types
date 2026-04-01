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
        user_data?: any | null,
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
    function utils_create_parent_directories(file: Gio.File, cancellable?: Gio.Cancellable | null): boolean;
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
        cancellable?: Gio.Cancellable | null,
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
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<Gio.File> | null,
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
    function utils_override_font_description(widget: Gtk.Widget, font_desc?: Pango.FontDescription | null): void;
    /**
     * A convenience function that calls `tepl_utils_override_font_description()`.
     *
     * See `pango_font_description_from_string()` for a description of the format of
     * the string representation for `font_str`.
     * @param widget a {@link Gtk.Widget}.
     * @param font_str a string representation of a {@link Pango.FontDescription}, or   `null` to undo the effect of previous calls to this function on `widget`.
     * @since 6.2
     */
    function utils_override_font_string(widget: Gtk.Widget, font_str?: string | null): void;
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
    function utils_set_widget(widget_ptr: Gtk.Widget, new_widget?: Gtk.Widget | null): void;
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
        get active_buffer(): Buffer;
        /**
         * The {@link Tepl.Buffer} of the active tab.
         * @since 3.0
         * @read-only
         * @category Inherited from Tepl.TabGroup
         */
        get activeBuffer(): Buffer;
        /**
         * The {@link Tepl.Tab} currently shown.
         * @since 3.0
         * @category Inherited from Tepl.TabGroup
         */
        get active_tab(): Tab;
        set active_tab(val: Tab);
        /**
         * The {@link Tepl.Tab} currently shown.
         * @since 3.0
         * @category Inherited from Tepl.TabGroup
         */
        get activeTab(): Tab;
        set activeTab(val: Tab);
        /**
         * The {@link Tepl.View} of the active tab.
         * @since 3.0
         * @read-only
         * @category Inherited from Tepl.TabGroup
         */
        get active_view(): View;
        /**
         * The {@link Tepl.View} of the active tab.
         * @since 3.0
         * @read-only
         * @category Inherited from Tepl.TabGroup
         */
        get activeView(): View;
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
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating](floating-refs.html) object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating](floating-refs.html) reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
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
         */
        get tepl_full_title(): string;
        /**
         * The full title. See `tepl_buffer_get_full_title()`.
         * @since 3.0
         * @read-only
         */
        get teplFullTitle(): string;
        /**
         * The short title. See `tepl_buffer_get_short_title()`.
         * @since 3.0
         * @read-only
         */
        get tepl_short_title(): string;
        /**
         * The short title. See `tepl_buffer_get_short_title()`.
         * @since 3.0
         * @read-only
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
            source_view: GtkSource.View;
            sourceView: GtkSource.View;
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
         */
        get codeCommentIsSupported(): boolean;
        /**
         * The associated {@link GtkSource.View} widget. {@link Tepl.CodeCommentView} has a weak
         * reference to the {@link GtkSource.View}.
         * @since 6.14
         * @construct-only
         */
        get source_view(): GtkSource.View;
        /**
         * The associated {@link GtkSource.View} widget. {@link Tepl.CodeCommentView} has a weak
         * reference to the {@link GtkSource.View}.
         * @since 6.14
         * @construct-only
         */
        get sourceView(): GtkSource.View;

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
        comment_lines(start_iter: Gtk.TextIter, end_iter?: Gtk.TextIter | null): void;
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
         */
        get newline_type(): NewlineType;
        /**
         * The line ending type.
         * @since 1.0
         * @read-only
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
        static chooser_set_parent(chooser: Gtk.FileChooser, parent?: Gtk.Window | null): void;
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
        set_location(location?: Gio.File | null): void;
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
            buffer: Buffer;
            file: File;
            location: Gio.File;
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
        get buffer(): Buffer;
        /**
         * The {@link Tepl.File}. The {@link Tepl.FileLoader} object has a weak
         * reference to the file.
         * @since 1.0
         * @construct-only
         */
        get file(): File;
        /**
         * The {@link Gio.File} to load. By default the location is taken from the
         * {@link Tepl.File} at construction time.
         * @since 1.0
         * @construct-only
         */
        get location(): Gio.File;

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
        load_async(io_priority: number, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
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
            cancellable?: Gio.Cancellable | null,
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
         */
        get newline_type(): NewlineType;
        set newline_type(val: NewlineType);
        /**
         * The newline type.
         * @since 1.0
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
        save_async(io_priority: number, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
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
            cancellable?: Gio.Cancellable | null,
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
        set_flags(flags: FileSaverFlags | null): void;
        /**
         * Sets the newline type. By default the newline type is taken from the
         * {@link Tepl.File}.
         * @param newline_type the new newline type.
         */
        set_newline_type(newline_type: NewlineType | null): void;
    }

    namespace FoldRegion {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::buffer': (pspec: GObject.ParamSpec) => void;
            'notify::folded': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            buffer: Gtk.TextBuffer;
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
        get buffer(): Gtk.TextBuffer;
        /**
         * Whether the {@link Tepl.FoldRegion} is folded or not.
         * @since 1.0
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
        set_orientation(orientation: Gtk.Orientation | null): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating](floating-refs.html) object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating](floating-refs.html) reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
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
        set_state(state: GutterRendererFoldsState | null): void;
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
         */
        get handle_close_response(): boolean;
        set handle_close_response(val: boolean);
        /**
         * If this property is `true`, then the {@link Tepl.InfoBar} is destroyed with
         * `gtk_widget_destroy()` when the {@link Gtk.InfoBar.SignalSignatures.response | Gtk.InfoBar::response} signal is
         * received with the `response_id` {@link Gtk.ResponseType.CLOSE}.
         * @since 6.0
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

        static new_simple(msg_type: Gtk.MessageType, primary_msg: string, secondary_msg?: string | null): InfoBar;

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
        add_content_widget(widget: Gtk.Widget, location: InfoBarLocation | null): void;
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
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating](floating-refs.html) object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating](floating-refs.html) reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
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

        static ['new'](parent?: Gtk.Window | null): LanguageChooserDialog;
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
        select_language(language?: GtkSource.Language | null): void;
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
        vfunc_select_language(language?: GtkSource.Language | null): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating](floating-refs.html) object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating](floating-refs.html) reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
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
        set_orientation(orientation: Gtk.Orientation | null): void;
        /**
         * Selects `language` in the list.
         * @param language a {@link GtkSource.Language}, or `null` for "Plain Text".
         */
        select_language(language?: GtkSource.Language | null): void;
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
        vfunc_select_language(language?: GtkSource.Language | null): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating](floating-refs.html) object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating](floating-refs.html) reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
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
        set_view(view?: View | null): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating](floating-refs.html) object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating](floating-refs.html) reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
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
        set(key: string, value?: string | null): void;
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
        get active_buffer(): Buffer;
        /**
         * The {@link Tepl.Buffer} of the active tab.
         * @since 3.0
         * @read-only
         * @category Inherited from Tepl.TabGroup
         */
        get activeBuffer(): Buffer;
        /**
         * The {@link Tepl.Tab} currently shown.
         * @since 3.0
         * @category Inherited from Tepl.TabGroup
         */
        get active_tab(): Tab;
        set active_tab(val: Tab);
        /**
         * The {@link Tepl.Tab} currently shown.
         * @since 3.0
         * @category Inherited from Tepl.TabGroup
         */
        get activeTab(): Tab;
        set activeTab(val: Tab);
        /**
         * The {@link Tepl.View} of the active tab.
         * @since 3.0
         * @read-only
         * @category Inherited from Tepl.TabGroup
         */
        get active_view(): View;
        /**
         * The {@link Tepl.View} of the active tab.
         * @since 3.0
         * @read-only
         * @category Inherited from Tepl.TabGroup
         */
        get activeView(): View;
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
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating](floating-refs.html) object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating](floating-refs.html) reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
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
        set_view(view?: Gtk.TextView | null): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating](floating-refs.html) object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating](floating-refs.html) reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
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
        add_component(component: Gtk.Widget, name: string, title: string, icon_name?: string | null): void;
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
        set_orientation(orientation: Gtk.Orientation | null): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating](floating-refs.html) object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating](floating-refs.html) reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
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
            icon_name: string;
            iconName: string;
            name: string;
            position: number;
            title: string;
            widget: Gtk.Widget;
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
         */
        get icon_name(): string;
        /**
         * The icon name.
         *
         * It can be shown in the UI to choose this item, for example with the
         * {@link Gtk.Image}'s {@link Gtk.Image.icon_name} property.
         * @since 6.11
         * @construct-only
         */
        get iconName(): string;
        /**
         * The name.
         *
         * It is an ID as a UTF-8 string. It is not displayed in the UI. It
         * uniquely identifies an item within a list.
         * @since 6.11
         * @construct-only
         */
        get name(): string;
        /**
         * The position.
         *
         * Used to sort items in the desired order.
         * @since 6.11
         * @construct-only
         */
        get position(): number;
        /**
         * The title.
         *
         * It is a human-readable UTF-8 string that can be shown in the UI to
         * choose this item.
         * @since 6.11
         * @construct-only
         */
        get title(): string;
        /**
         * The {@link Gtk.Widget} (the main content).
         * @since 6.11
         * @construct-only
         */
        get widget(): Gtk.Widget;

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
            active_item: PanelItem;
            activeItem: PanelItem;
            active_item_name: string;
            activeItemName: string;
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
        get active_item(): PanelItem;
        set active_item(val: PanelItem);
        /**
         * The {@link Tepl.PanelItem} currently shown.
         * @since 6.11
         */
        get activeItem(): PanelItem;
        set activeItem(val: PanelItem);
        /**
         * The name of the {@link Tepl.PanelSimple.active_item}.
         * @since 6.11
         */
        get active_item_name(): string;
        set active_item_name(val: string);
        /**
         * The name of the {@link Tepl.PanelSimple.active_item}.
         * @since 6.11
         */
        get activeItemName(): string;
        set activeItemName(val: string);

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
        set_active_item_name(name?: string | null): void;
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
        set_active(item?: PanelItem | null): void;
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
        vfunc_set_active(item?: PanelItem | null): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating](floating-refs.html) object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating](floating-refs.html) reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
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

        static ['new'](panel_simple?: PanelSimple | null, stack?: Gtk.Stack | null): PanelStack;

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
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating](floating-refs.html) object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating](floating-refs.html) reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
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
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating](floating-refs.html) object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating](floating-refs.html) reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
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
         */
        get has_cancel_button(): boolean;
        /**
         * Whether to add a Cancel button in the action area of the {@link Gtk.InfoBar},
         * with the {@link Gtk.ResponseType.CANCEL} response.
         * @since 6.0
         * @construct-only
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
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating](floating-refs.html) object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating](floating-refs.html) reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
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
            style_scheme_id: string;
            styleSchemeId: string;
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
         */
        get style_scheme_id(): string;
        /**
         * See `tepl_settings_provide_style_scheme_settings()`.
         *
         * The value of this property depends on whether the GTK theme is light
         * or dark, and uses the corresponding {@link Gio.Settings} key.
         * @since 6.11
         * @read-only
         */
        get styleSchemeId(): string;

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
            theme_variant_settings?: Gio.Settings | null,
            theme_variant_setting_key?: string | null,
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
        set_orientation(orientation: Gtk.Orientation | null): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating](floating-refs.html) object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating](floating-refs.html) reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
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
        /** @category Inherited from Gtk.Widget */
        get app_paintable(): boolean;
        set app_paintable(val: boolean);
        /** @category Inherited from Gtk.Widget */
        get appPaintable(): boolean;
        set appPaintable(val: boolean);
        /** @category Inherited from Gtk.Widget */
        get can_default(): boolean;
        set can_default(val: boolean);
        /** @category Inherited from Gtk.Widget */
        get canDefault(): boolean;
        set canDefault(val: boolean);
        /** @category Inherited from Gtk.Widget */
        get can_focus(): boolean;
        set can_focus(val: boolean);
        /** @category Inherited from Gtk.Widget */
        get canFocus(): boolean;
        set canFocus(val: boolean);
        /**
         * @read-only
         * @category Inherited from Gtk.Widget
         */
        get composite_child(): boolean;
        /**
         * @read-only
         * @category Inherited from Gtk.Widget
         */
        get compositeChild(): boolean;
        /**
         * Whether the widget is double buffered.
         * @since 2.18
         * @deprecated since 3.14: Widgets should not use this property.
         * @category Inherited from Gtk.Widget
         */
        get double_buffered(): boolean;
        set double_buffered(val: boolean);
        /**
         * Whether the widget is double buffered.
         * @since 2.18
         * @deprecated since 3.14: Widgets should not use this property.
         * @category Inherited from Gtk.Widget
         */
        get doubleBuffered(): boolean;
        set doubleBuffered(val: boolean);
        /** @category Inherited from Gtk.Widget */
        get events(): Gdk.EventMask;
        set events(val: Gdk.EventMask);
        /**
         * Whether to expand in both directions. Setting this sets both {@link Gtk.Widget.hexpand} and {@link Gtk.Widget.vexpand}
         * @since 3.0
         * @category Inherited from Gtk.Widget
         */
        get expand(): boolean;
        set expand(val: boolean);
        /**
         * Whether the widget should grab focus when it is clicked with the mouse.
         *
         * This property is only relevant for widgets that can take focus.
         *
         * Before 3.20, several widgets (GtkButton, GtkFileChooserButton,
         * GtkComboBox) implemented this property individually.
         * @since 3.20
         * @category Inherited from Gtk.Widget
         */
        get focus_on_click(): boolean;
        set focus_on_click(val: boolean);
        /**
         * Whether the widget should grab focus when it is clicked with the mouse.
         *
         * This property is only relevant for widgets that can take focus.
         *
         * Before 3.20, several widgets (GtkButton, GtkFileChooserButton,
         * GtkComboBox) implemented this property individually.
         * @since 3.20
         * @category Inherited from Gtk.Widget
         */
        get focusOnClick(): boolean;
        set focusOnClick(val: boolean);
        /**
         * How to distribute horizontal space if widget gets extra space, see {@link Gtk.Align}
         * @since 3.0
         * @category Inherited from Gtk.Widget
         */
        get halign(): Gtk.Align;
        set halign(val: Gtk.Align);
        /** @category Inherited from Gtk.Widget */
        get has_default(): boolean;
        set has_default(val: boolean);
        /** @category Inherited from Gtk.Widget */
        get hasDefault(): boolean;
        set hasDefault(val: boolean);
        /** @category Inherited from Gtk.Widget */
        get has_focus(): boolean;
        set has_focus(val: boolean);
        /** @category Inherited from Gtk.Widget */
        get hasFocus(): boolean;
        set hasFocus(val: boolean);
        /**
         * Enables or disables the emission of {@link Gtk.Widget.SignalSignatures.query_tooltip | Gtk.Widget::query-tooltip} on `widget`.
         * A value of `true` indicates that `widget` can have a tooltip, in this case
         * the widget will be queried using {@link Gtk.Widget.SignalSignatures.query_tooltip | Gtk.Widget::query-tooltip} to determine
         * whether it will provide a tooltip or not.
         *
         * Note that setting this property to `true` for the first time will change
         * the event masks of the GdkWindows of this widget to include leave-notify
         * and motion-notify events.  This cannot and will not be undone when the
         * property is set to `false` again.
         * @since 2.12
         * @category Inherited from Gtk.Widget
         */
        get has_tooltip(): boolean;
        set has_tooltip(val: boolean);
        /**
         * Enables or disables the emission of {@link Gtk.Widget.SignalSignatures.query_tooltip | Gtk.Widget::query-tooltip} on `widget`.
         * A value of `true` indicates that `widget` can have a tooltip, in this case
         * the widget will be queried using {@link Gtk.Widget.SignalSignatures.query_tooltip | Gtk.Widget::query-tooltip} to determine
         * whether it will provide a tooltip or not.
         *
         * Note that setting this property to `true` for the first time will change
         * the event masks of the GdkWindows of this widget to include leave-notify
         * and motion-notify events.  This cannot and will not be undone when the
         * property is set to `false` again.
         * @since 2.12
         * @category Inherited from Gtk.Widget
         */
        get hasTooltip(): boolean;
        set hasTooltip(val: boolean);
        /** @category Inherited from Gtk.Widget */
        get height_request(): number;
        set height_request(val: number);
        /** @category Inherited from Gtk.Widget */
        get heightRequest(): number;
        set heightRequest(val: number);
        /**
         * Whether to expand horizontally. See `gtk_widget_set_hexpand()`.
         * @since 3.0
         * @category Inherited from Gtk.Widget
         */
        get hexpand(): boolean;
        set hexpand(val: boolean);
        /**
         * Whether to use the {@link Gtk.Widget.hexpand} property. See `gtk_widget_get_hexpand_set()`.
         * @since 3.0
         * @category Inherited from Gtk.Widget
         */
        get hexpand_set(): boolean;
        set hexpand_set(val: boolean);
        /**
         * Whether to use the {@link Gtk.Widget.hexpand} property. See `gtk_widget_get_hexpand_set()`.
         * @since 3.0
         * @category Inherited from Gtk.Widget
         */
        get hexpandSet(): boolean;
        set hexpandSet(val: boolean);
        /** @category Inherited from Gtk.Widget */
        get is_focus(): boolean;
        set is_focus(val: boolean);
        /** @category Inherited from Gtk.Widget */
        get isFocus(): boolean;
        set isFocus(val: boolean);
        /**
         * Sets all four sides' margin at once. If read, returns max
         * margin on any side.
         * @since 3.0
         * @category Inherited from Gtk.Widget
         */
        get margin(): number;
        set margin(val: number);
        /**
         * Margin on bottom side of widget.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * `gtk_widget_set_size_request()` for example.
         * @since 3.0
         * @category Inherited from Gtk.Widget
         */
        get margin_bottom(): number;
        set margin_bottom(val: number);
        /**
         * Margin on bottom side of widget.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * `gtk_widget_set_size_request()` for example.
         * @since 3.0
         * @category Inherited from Gtk.Widget
         */
        get marginBottom(): number;
        set marginBottom(val: number);
        /**
         * Margin on end of widget, horizontally. This property supports
         * left-to-right and right-to-left text directions.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * `gtk_widget_set_size_request()` for example.
         * @since 3.12
         * @category Inherited from Gtk.Widget
         */
        get margin_end(): number;
        set margin_end(val: number);
        /**
         * Margin on end of widget, horizontally. This property supports
         * left-to-right and right-to-left text directions.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * `gtk_widget_set_size_request()` for example.
         * @since 3.12
         * @category Inherited from Gtk.Widget
         */
        get marginEnd(): number;
        set marginEnd(val: number);
        /**
         * Margin on left side of widget.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * `gtk_widget_set_size_request()` for example.
         * @since 3.0
         * @deprecated since 3.12: Use {@link Gtk.Widget.margin_start} instead.
         * @category Inherited from Gtk.Widget
         */
        get margin_left(): number;
        set margin_left(val: number);
        /**
         * Margin on left side of widget.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * `gtk_widget_set_size_request()` for example.
         * @since 3.0
         * @deprecated since 3.12: Use {@link Gtk.Widget.margin_start} instead.
         * @category Inherited from Gtk.Widget
         */
        get marginLeft(): number;
        set marginLeft(val: number);
        /**
         * Margin on right side of widget.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * `gtk_widget_set_size_request()` for example.
         * @since 3.0
         * @deprecated since 3.12: Use {@link Gtk.Widget.margin_end} instead.
         * @category Inherited from Gtk.Widget
         */
        get margin_right(): number;
        set margin_right(val: number);
        /**
         * Margin on right side of widget.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * `gtk_widget_set_size_request()` for example.
         * @since 3.0
         * @deprecated since 3.12: Use {@link Gtk.Widget.margin_end} instead.
         * @category Inherited from Gtk.Widget
         */
        get marginRight(): number;
        set marginRight(val: number);
        /**
         * Margin on start of widget, horizontally. This property supports
         * left-to-right and right-to-left text directions.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * `gtk_widget_set_size_request()` for example.
         * @since 3.12
         * @category Inherited from Gtk.Widget
         */
        get margin_start(): number;
        set margin_start(val: number);
        /**
         * Margin on start of widget, horizontally. This property supports
         * left-to-right and right-to-left text directions.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * `gtk_widget_set_size_request()` for example.
         * @since 3.12
         * @category Inherited from Gtk.Widget
         */
        get marginStart(): number;
        set marginStart(val: number);
        /**
         * Margin on top side of widget.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * `gtk_widget_set_size_request()` for example.
         * @since 3.0
         * @category Inherited from Gtk.Widget
         */
        get margin_top(): number;
        set margin_top(val: number);
        /**
         * Margin on top side of widget.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * `gtk_widget_set_size_request()` for example.
         * @since 3.0
         * @category Inherited from Gtk.Widget
         */
        get marginTop(): number;
        set marginTop(val: number);
        /** @category Inherited from Gtk.Widget */
        get name(): string;
        set name(val: string);
        /** @category Inherited from Gtk.Widget */
        get no_show_all(): boolean;
        set no_show_all(val: boolean);
        /** @category Inherited from Gtk.Widget */
        get noShowAll(): boolean;
        set noShowAll(val: boolean);
        /**
         * The requested opacity of the widget. See `gtk_widget_set_opacity()` for
         * more details about window opacity.
         *
         * Before 3.8 this was only available in GtkWindow
         * @since 3.8
         * @category Inherited from Gtk.Widget
         */
        get opacity(): number;
        set opacity(val: number);
        /** @category Inherited from Gtk.Widget */
        get parent(): Gtk.Container;
        set parent(val: Gtk.Container);
        /** @category Inherited from Gtk.Widget */
        get receives_default(): boolean;
        set receives_default(val: boolean);
        /** @category Inherited from Gtk.Widget */
        get receivesDefault(): boolean;
        set receivesDefault(val: boolean);
        /**
         * The scale factor of the widget. See `gtk_widget_get_scale_factor()` for
         * more details about widget scaling.
         * @since 3.10
         * @read-only
         * @category Inherited from Gtk.Widget
         */
        get scale_factor(): number;
        /**
         * The scale factor of the widget. See `gtk_widget_get_scale_factor()` for
         * more details about widget scaling.
         * @since 3.10
         * @read-only
         * @category Inherited from Gtk.Widget
         */
        get scaleFactor(): number;
        /** @category Inherited from Gtk.Widget */
        get sensitive(): boolean;
        set sensitive(val: boolean);
        /**
         * The style of the widget, which contains information about how it will look (colors, etc).
         * @deprecated Use {@link Gtk.StyleContext} instead
         * @category Inherited from Gtk.Widget
         */
        get style(): Gtk.Style;
        set style(val: Gtk.Style);
        /**
         * Sets the text of tooltip to be the given string, which is marked up
         * with the [Pango text markup language][PangoMarkupFormat].
         * Also see `gtk_tooltip_set_markup()`.
         *
         * This is a convenience property which will take care of getting the
         * tooltip shown if the given string is not `null`: {@link Gtk.Widget.has_tooltip}
         * will automatically be set to `true` and there will be taken care of
         * {@link Gtk.Widget.SignalSignatures.query_tooltip | Gtk.Widget::query-tooltip} in the default signal handler.
         *
         * Note that if both {@link Gtk.Widget.tooltip_text} and {@link Gtk.Widget.tooltip_markup}
         * are set, the last one wins.
         * @since 2.12
         * @category Inherited from Gtk.Widget
         */
        get tooltip_markup(): string;
        set tooltip_markup(val: string);
        /**
         * Sets the text of tooltip to be the given string, which is marked up
         * with the [Pango text markup language][PangoMarkupFormat].
         * Also see `gtk_tooltip_set_markup()`.
         *
         * This is a convenience property which will take care of getting the
         * tooltip shown if the given string is not `null`: {@link Gtk.Widget.has_tooltip}
         * will automatically be set to `true` and there will be taken care of
         * {@link Gtk.Widget.SignalSignatures.query_tooltip | Gtk.Widget::query-tooltip} in the default signal handler.
         *
         * Note that if both {@link Gtk.Widget.tooltip_text} and {@link Gtk.Widget.tooltip_markup}
         * are set, the last one wins.
         * @since 2.12
         * @category Inherited from Gtk.Widget
         */
        get tooltipMarkup(): string;
        set tooltipMarkup(val: string);
        /**
         * Sets the text of tooltip to be the given string.
         *
         * Also see `gtk_tooltip_set_text()`.
         *
         * This is a convenience property which will take care of getting the
         * tooltip shown if the given string is not `null`: {@link Gtk.Widget.has_tooltip}
         * will automatically be set to `true` and there will be taken care of
         * {@link Gtk.Widget.SignalSignatures.query_tooltip | Gtk.Widget::query-tooltip} in the default signal handler.
         *
         * Note that if both {@link Gtk.Widget.tooltip_text} and {@link Gtk.Widget.tooltip_markup}
         * are set, the last one wins.
         * @since 2.12
         * @category Inherited from Gtk.Widget
         */
        get tooltip_text(): string;
        set tooltip_text(val: string);
        /**
         * Sets the text of tooltip to be the given string.
         *
         * Also see `gtk_tooltip_set_text()`.
         *
         * This is a convenience property which will take care of getting the
         * tooltip shown if the given string is not `null`: {@link Gtk.Widget.has_tooltip}
         * will automatically be set to `true` and there will be taken care of
         * {@link Gtk.Widget.SignalSignatures.query_tooltip | Gtk.Widget::query-tooltip} in the default signal handler.
         *
         * Note that if both {@link Gtk.Widget.tooltip_text} and {@link Gtk.Widget.tooltip_markup}
         * are set, the last one wins.
         * @since 2.12
         * @category Inherited from Gtk.Widget
         */
        get tooltipText(): string;
        set tooltipText(val: string);
        /**
         * How to distribute vertical space if widget gets extra space, see {@link Gtk.Align}
         * @since 3.0
         * @category Inherited from Gtk.Widget
         */
        get valign(): Gtk.Align;
        set valign(val: Gtk.Align);
        /**
         * Whether to expand vertically. See `gtk_widget_set_vexpand()`.
         * @since 3.0
         * @category Inherited from Gtk.Widget
         */
        get vexpand(): boolean;
        set vexpand(val: boolean);
        /**
         * Whether to use the {@link Gtk.Widget.vexpand} property. See `gtk_widget_get_vexpand_set()`.
         * @since 3.0
         * @category Inherited from Gtk.Widget
         */
        get vexpand_set(): boolean;
        set vexpand_set(val: boolean);
        /**
         * Whether to use the {@link Gtk.Widget.vexpand} property. See `gtk_widget_get_vexpand_set()`.
         * @since 3.0
         * @category Inherited from Gtk.Widget
         */
        get vexpandSet(): boolean;
        set vexpandSet(val: boolean);
        /** @category Inherited from Gtk.Widget */
        get visible(): boolean;
        set visible(val: boolean);
        /** @category Inherited from Gtk.Widget */
        get width_request(): number;
        set width_request(val: number);
        /** @category Inherited from Gtk.Widget */
        get widthRequest(): number;
        set widthRequest(val: number);
        /**
         * The widget's window if it is realized, `null` otherwise.
         * @since 2.14
         * @read-only
         * @category Inherited from Gtk.Widget
         */
        get window(): Gdk.Window;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating](floating-refs.html) object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating](floating-refs.html) reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
        /**
         * For widgets that can be “activated” (buttons, menu items, etc.)
         * this function activates them. Activation is what happens when you
         * press Enter on a widget during key navigation. If `widget` isn't
         * activatable, the function returns `false`.
         * @returns `true` if the widget was activatable
         */
        activate(): boolean;
        /**
         * Installs an accelerator for this `widget` in `accel_group` that causes
         * `accel_signal` to be emitted if the accelerator is activated.
         * The `accel_group` needs to be added to the widget’s toplevel via
         * `gtk_window_add_accel_group()`, and the signal must be of type {@link GObject.SignalFlags.ACTION}.
         * Accelerators added through this function are not user changeable during
         * runtime. If you want to support accelerators that can be changed by the
         * user, use `gtk_accel_map_add_entry()` and `gtk_widget_set_accel_path()` or
         * `gtk_menu_item_set_accel_path()` instead.
         * @param accel_signal widget signal to emit on accelerator activation
         * @param accel_group accel group for this widget, added to its toplevel
         * @param accel_key GDK keyval of the accelerator
         * @param accel_mods modifier key combination of the accelerator
         * @param accel_flags flag accelerators, e.g. {@link Gtk.AccelFlags.VISIBLE}
         */
        add_accelerator(
            accel_signal: string,
            accel_group: Gtk.AccelGroup,
            accel_key: number,
            accel_mods: Gdk.ModifierType | null,
            accel_flags: Gtk.AccelFlags | null,
        ): void;
        /**
         * Adds the device events in the bitfield `events` to the event mask for
         * `widget`. See `gtk_widget_set_device_events()` for details.
         * @param device a {@link Gdk.Device}
         * @param events an event mask, see {@link Gdk.EventMask}
         */
        add_device_events(device: Gdk.Device, events: Gdk.EventMask | null): void;
        /**
         * Adds the events in the bitfield `events` to the event mask for
         * `widget`. See `gtk_widget_set_events()` and the
         * [input handling overview][event-masks] for details.
         * @param events an event mask, see {@link Gdk.EventMask}
         */
        add_events(events: number): void;
        /**
         * Adds a widget to the list of mnemonic labels for
         * this widget. (See `gtk_widget_list_mnemonic_labels()`). Note the
         * list of mnemonic labels for the widget is cleared when the
         * widget is destroyed, so the caller must make sure to update
         * its internal state at this point as well, by using a connection
         * to the {@link Gtk.Widget.SignalSignatures.destroy | Gtk.Widget::destroy} signal or a weak notifier.
         * @param label a {@link Gtk.Widget} that acts as a mnemonic label for `widget`
         */
        add_mnemonic_label(label: Gtk.Widget): void;
        /**
         * Queues an animation frame update and adds a callback to be called
         * before each frame. Until the tick callback is removed, it will be
         * called frequently (usually at the frame rate of the output device
         * or as quickly as the application can be repainted, whichever is
         * slower). For this reason, is most suitable for handling graphics
         * that change every frame or every few frames. The tick callback does
         * not automatically imply a relayout or repaint. If you want a
         * repaint or relayout, and aren’t changing widget properties that
         * would trigger that (for example, changing the text of a {@link Gtk.Label}),
         * then you will have to call `gtk_widget_queue_resize()` or
         * `gtk_widget_queue_draw_area()` yourself.
         *
         * `gdk_frame_clock_get_frame_time()` should generally be used for timing
         * continuous animations and
         * `gdk_frame_timings_get_predicted_presentation_time()` if you are
         * trying to display isolated frames at particular times.
         *
         * This is a more convenient alternative to connecting directly to the
         * {@link Gdk.FrameClock.SignalSignatures.update | Gdk.FrameClock::update} signal of {@link Gdk.FrameClock}, since you don't
         * have to worry about when a {@link Gdk.FrameClock} is assigned to a widget.
         * @param callback function to call for updating animations
         * @returns an id for the connection of this callback. Remove the callback     by passing it to `gtk_widget_remove_tick_callback()`
         */
        add_tick_callback(callback: Gtk.TickCallback): number;
        /**
         * Determines whether an accelerator that activates the signal
         * identified by `signal_id` can currently be activated.
         * This is done by emitting the {@link Gtk.Widget.SignalSignatures.can_activate_accel | Gtk.Widget::can-activate-accel}
         * signal on `widget`; if the signal isn’t overridden by a
         * handler or in a derived widget, then the default check is
         * that the widget must be sensitive, and the widget and all
         * its ancestors mapped.
         * @param signal_id the ID of a signal installed on `widget`
         * @returns `true` if the accelerator can be activated.
         */
        can_activate_accel(signal_id: number): boolean;
        /**
         * This function is used by custom widget implementations; if you're
         * writing an app, you’d use `gtk_widget_grab_focus()` to move the focus
         * to a particular widget, and `gtk_container_set_focus_chain()` to
         * change the focus tab order. So you may want to investigate those
         * functions instead.
         *
         * `gtk_widget_child_focus()` is called by containers as the user moves
         * around the window using keyboard shortcuts. `direction` indicates
         * what kind of motion is taking place (up, down, left, right, tab
         * forward, tab backward). `gtk_widget_child_focus()` emits the
         * {@link Gtk.Widget.SignalSignatures.focus | Gtk.Widget::focus} signal; widgets override the default handler
         * for this signal in order to implement appropriate focus behavior.
         *
         * The default ::focus handler for a widget should return `true` if
         * moving in `direction` left the focus on a focusable location inside
         * that widget, and `false` if moving in `direction` moved the focus
         * outside the widget. If returning `true`, widgets normally
         * call `gtk_widget_grab_focus()` to place the focus accordingly;
         * if returning `false`, they don’t modify the current focus location.
         * @param direction direction of focus movement
         * @returns `true` if focus ended up inside `widget`
         */
        child_focus(direction: Gtk.DirectionType | null): boolean;
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
         * Same as `gtk_widget_path()`, but always uses the name of a widget’s type,
         * never uses a custom name set with `gtk_widget_set_name()`.
         */
        class_path(): [number, string, string];
        /**
         * Computes whether a container should give this widget extra space
         * when possible. Containers should check this, rather than
         * looking at `gtk_widget_get_hexpand()` or `gtk_widget_get_vexpand()`.
         *
         * This function already checks whether the widget is visible, so
         * visibility does not need to be checked separately. Non-visible
         * widgets are not expanded.
         *
         * The computed expand value uses either the expand setting explicitly
         * set on the widget itself, or, if none has been explicitly set,
         * the widget may expand if some of its children do.
         * @param orientation expand direction
         * @returns whether widget tree rooted here should be expanded
         */
        compute_expand(orientation: Gtk.Orientation | null): boolean;
        /**
         * Creates a new {@link Pango.Context} with the appropriate font map,
         * font options, font description, and base direction for drawing
         * text for this widget. See also `gtk_widget_get_pango_context()`.
         * @returns the new {@link Pango.Context}
         */
        create_pango_context(): Pango.Context;
        /**
         * Creates a new {@link Pango.Layout} with the appropriate font map,
         * font description, and base direction for drawing text for
         * this widget.
         *
         * If you keep a {@link Pango.Layout} created in this way around, you need
         * to re-create it when the widget {@link Pango.Context} is replaced.
         * This can be tracked by using the {@link Gtk.Widget.SignalSignatures.screen_changed | Gtk.Widget::screen-changed} signal
         * on the widget.
         * @param text text to set on the layout (can be `null`)
         * @returns the new {@link Pango.Layout}
         */
        create_pango_layout(text?: string | null): Pango.Layout;
        /**
         * Destroys a widget.
         *
         * When a widget is destroyed all references it holds on other objects
         * will be released:
         *
         *  - if the widget is inside a container, it will be removed from its
         *  parent
         *  - if the widget is a container, all its children will be destroyed,
         *  recursively
         *  - if the widget is a top level, it will be removed from the list
         *  of top level widgets that GTK+ maintains internally
         *
         * It's expected that all references held on the widget will also
         * be released; you should connect to the {@link Gtk.Widget.SignalSignatures.destroy | Gtk.Widget::destroy} signal
         * if you hold a reference to `widget` and you wish to remove it when
         * this function is called. It is not necessary to do so if you are
         * implementing a {@link Gtk.Container}, as you'll be able to use the
         * {@link Gtk.ContainerClass}.remove() virtual function for that.
         *
         * It's important to notice that `gtk_widget_destroy()` will only cause
         * the `widget` to be finalized if no additional references, acquired
         * using `g_object_ref()`, are held on it. In case additional references
         * are in place, the `widget` will be in an "inert" state after calling
         * this function; `widget` will still point to valid memory, allowing you
         * to release the references you hold, but you may not query the widget's
         * own state.
         *
         * You should typically call this function on top level widgets, and
         * rarely on child widgets.
         *
         * See also: `gtk_container_remove()`
         */
        destroy(): void;
        /**
         * This function sets *`widget_pointer` to `null` if `widget_pointer` !=
         * `null`.  It’s intended to be used as a callback connected to the
         * “destroy” signal of a widget. You connect `gtk_widget_destroyed()`
         * as a signal handler, and pass the address of your widget variable
         * as user data. Then when the widget is destroyed, the variable will
         * be set to `null`. Useful for example to avoid multiple copies
         * of the same dialog.
         * @param widget_pointer address of a variable that contains `widget`
         */
        destroyed(widget_pointer: Gtk.Widget): Gtk.Widget;
        /**
         * Returns `true` if `device` has been shadowed by a GTK+
         * device grab on another widget, so it would stop sending
         * events to `widget`. This may be used in the
         * {@link Gtk.Widget.SignalSignatures.grab_notify | Gtk.Widget::grab-notify} signal to check for specific
         * devices. See `gtk_device_grab_add()`.
         * @param device a {@link Gdk.Device}
         * @returns `true` if there is an ongoing grab on `device`          by another {@link Gtk.Widget} than `widget`.
         */
        device_is_shadowed(device: Gdk.Device): boolean;
        /**
         * This function is equivalent to `gtk_drag_begin_with_coordinates()`,
         * passing -1, -1 as coordinates.
         * @param targets The targets (data formats) in which the    source can provide the data
         * @param actions A bitmask of the allowed drag actions for this drag
         * @param button The button the user clicked to start the drag
         * @param event The event that triggered the start of the drag,    or `null` if none can be obtained.
         * @returns the context for this drag
         */
        drag_begin(
            targets: Gtk.TargetList,
            actions: Gdk.DragAction | null,
            button: number,
            event?: Gdk.Event | null,
        ): Gdk.DragContext;
        /**
         * Initiates a drag on the source side. The function only needs to be used
         * when the application is starting drags itself, and is not needed when
         * `gtk_drag_source_set()` is used.
         *
         * The `event` is used to retrieve the timestamp that will be used internally to
         * grab the pointer.  If `event` is `null`, then `GDK_CURRENT_TIME` will be used.
         * However, you should try to pass a real event in all cases, since that can be
         * used to get information about the drag.
         *
         * Generally there are three cases when you want to start a drag by hand by
         * calling this function:
         *
         * 1. During a {@link Gtk.Widget.SignalSignatures.button_press_event | Gtk.Widget::button-press-event} handler, if you want to start a drag
         * immediately when the user presses the mouse button.  Pass the `event`
         * that you have in your {@link Gtk.Widget.SignalSignatures.button_press_event | Gtk.Widget::button-press-event} handler.
         *
         * 2. During a {@link Gtk.Widget.SignalSignatures.motion_notify_event | Gtk.Widget::motion-notify-event} handler, if you want to start a drag
         * when the mouse moves past a certain threshold distance after a button-press.
         * Pass the `event` that you have in your {@link Gtk.Widget.SignalSignatures.motion_notify_event | Gtk.Widget::motion-notify-event} handler.
         *
         * 3. During a timeout handler, if you want to start a drag after the mouse
         * button is held down for some time.  Try to save the last event that you got
         * from the mouse, using `gdk_event_copy()`, and pass it to this function
         * (remember to free the event with `gdk_event_free()` when you are done).
         * If you really cannot pass a real event, pass `null` instead.
         * @param targets The targets (data formats) in which the    source can provide the data
         * @param actions A bitmask of the allowed drag actions for this drag
         * @param button The button the user clicked to start the drag
         * @param event The event that triggered the start of the drag,    or `null` if none can be obtained.
         * @param x The initial x coordinate to start dragging from, in the coordinate space    of `widget`. If -1 is passed, the coordinates are retrieved from `event` or    the current pointer position
         * @param y The initial y coordinate to start dragging from, in the coordinate space    of `widget`. If -1 is passed, the coordinates are retrieved from `event` or    the current pointer position
         * @returns the context for this drag
         */
        drag_begin_with_coordinates(
            targets: Gtk.TargetList,
            actions: Gdk.DragAction | null,
            button: number,
            event: Gdk.Event | null,
            x: number,
            y: number,
        ): Gdk.DragContext;
        /**
         * Checks to see if a mouse drag starting at (`start_x`, `start_y`) and ending
         * at (`current_x`, `current_y`) has passed the GTK+ drag threshold, and thus
         * should trigger the beginning of a drag-and-drop operation.
         * @param start_x X coordinate of start of drag
         * @param start_y Y coordinate of start of drag
         * @param current_x current X coordinate
         * @param current_y current Y coordinate
         * @returns `true` if the drag threshold has been passed.
         */
        drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean;
        /**
         * Add the image targets supported by {@link Gtk.SelectionData} to
         * the target list of the drag destination. The targets
         * are added with `info` = 0. If you need another value,
         * use `gtk_target_list_add_image_targets()` and
         * `gtk_drag_dest_set_target_list()`.
         */
        drag_dest_add_image_targets(): void;
        /**
         * Add the text targets supported by {@link Gtk.SelectionData} to
         * the target list of the drag destination. The targets
         * are added with `info` = 0. If you need another value,
         * use `gtk_target_list_add_text_targets()` and
         * `gtk_drag_dest_set_target_list()`.
         */
        drag_dest_add_text_targets(): void;
        /**
         * Add the URI targets supported by {@link Gtk.SelectionData} to
         * the target list of the drag destination. The targets
         * are added with `info` = 0. If you need another value,
         * use `gtk_target_list_add_uri_targets()` and
         * `gtk_drag_dest_set_target_list()`.
         */
        drag_dest_add_uri_targets(): void;
        /**
         * Looks for a match between the supported targets of `context` and the
         * `dest_target_list`, returning the first matching target, otherwise
         * returning `GDK_NONE`. `dest_target_list` should usually be the return
         * value from `gtk_drag_dest_get_target_list()`, but some widgets may
         * have different valid targets for different parts of the widget; in
         * that case, they will have to implement a drag_motion handler that
         * passes the correct target list to this function.
         * @param context drag context
         * @param target_list list of droppable targets, or `null` to use    gtk_drag_dest_get_target_list (`widget`).
         * @returns first target that the source offers     and the dest can accept, or `GDK_NONE`
         */
        drag_dest_find_target(context: Gdk.DragContext, target_list?: Gtk.TargetList | null): Gdk.Atom;
        /**
         * Returns the list of targets this widget can accept from
         * drag-and-drop.
         * @returns the {@link Gtk.TargetList}, or `null` if none
         */
        drag_dest_get_target_list(): Gtk.TargetList | null;
        /**
         * Returns whether the widget has been configured to always
         * emit {@link Gtk.Widget.SignalSignatures.drag_motion | Gtk.Widget::drag-motion} signals.
         * @returns `true` if the widget always emits   {@link Gtk.Widget.SignalSignatures.drag_motion | Gtk.Widget::drag-motion} events
         */
        drag_dest_get_track_motion(): boolean;
        /**
         * Sets a widget as a potential drop destination, and adds default behaviors.
         *
         * The default behaviors listed in `flags` have an effect similar
         * to installing default handlers for the widget’s drag-and-drop signals
         * ({@link Gtk.Widget.SignalSignatures.drag_motion | Gtk.Widget::drag-motion}, {@link Gtk.Widget.SignalSignatures.drag_drop | Gtk.Widget::drag-drop}, ...). They all exist
         * for convenience. When passing #GTK_DEST_DEFAULT_ALL for instance it is
         * sufficient to connect to the widget’s {@link Gtk.Widget.SignalSignatures.drag_data_received | Gtk.Widget::drag-data-received}
         * signal to get primitive, but consistent drag-and-drop support.
         *
         * Things become more complicated when you try to preview the dragged data,
         * as described in the documentation for {@link Gtk.Widget.SignalSignatures.drag_motion | Gtk.Widget::drag-motion}. The default
         * behaviors described by `flags` make some assumptions, that can conflict
         * with your own signal handlers. For instance #GTK_DEST_DEFAULT_DROP causes
         * invokations of `gdk_drag_status()` in the context of {@link Gtk.Widget.SignalSignatures.drag_motion | Gtk.Widget::drag-motion},
         * and invokations of `gtk_drag_finish()` in {@link Gtk.Widget.SignalSignatures.drag_data_received | Gtk.Widget::drag-data-received}.
         * Especially the later is dramatic, when your own {@link Gtk.Widget.SignalSignatures.drag_motion | Gtk.Widget::drag-motion}
         * handler calls `gtk_drag_get_data()` to inspect the dragged data.
         *
         * There’s no way to set a default action here, you can use the
         * {@link Gtk.Widget.SignalSignatures.drag_motion | Gtk.Widget::drag-motion} callback for that. Here’s an example which selects
         * the action to use depending on whether the control key is pressed or not:
         *
         * ```c
         * static void
         * drag_motion (GtkWidget *widget,
         *              GdkDragContext *context,
         *              gint x,
         *              gint y,
         *              guint time)
         * {
         *   GdkModifierType mask;
         *
         *   gdk_window_get_pointer (gtk_widget_get_window (widget),
         *                           NULL, NULL, &mask);
         *   if (mask & GDK_CONTROL_MASK)
         *     gdk_drag_status (context, GDK_ACTION_COPY, time);
         *   else
         *     gdk_drag_status (context, GDK_ACTION_MOVE, time);
         * }
         * ```
         *
         * @param flags which types of default drag behavior to use
         * @param targets a pointer to an array of     `GtkTargetEntrys` indicating the drop types that this `widget` will     accept, or `null`. Later you can access the list with     `gtk_drag_dest_get_target_list()` and `gtk_drag_dest_find_target()`.
         * @param actions a bitmask of possible actions for a drop onto this `widget`.
         */
        drag_dest_set(
            flags: Gtk.DestDefaults | null,
            targets: Gtk.TargetEntry[] | null,
            actions: Gdk.DragAction | null,
        ): void;
        /**
         * Sets this widget as a proxy for drops to another window.
         * @param proxy_window the window to which to forward drag events
         * @param protocol the drag protocol which the `proxy_window` accepts   (You can use `gdk_drag_get_protocol()` to determine this)
         * @param use_coordinates If `true`, send the same coordinates to the   destination, because it is an embedded   subwindow.
         */
        drag_dest_set_proxy(
            proxy_window: Gdk.Window,
            protocol: Gdk.DragProtocol | null,
            use_coordinates: boolean,
        ): void;
        /**
         * Sets the target types that this widget can accept from drag-and-drop.
         * The widget must first be made into a drag destination with
         * `gtk_drag_dest_set()`.
         * @param target_list list of droppable targets, or `null` for none
         */
        drag_dest_set_target_list(target_list?: Gtk.TargetList | null): void;
        /**
         * Tells the widget to emit {@link Gtk.Widget.SignalSignatures.drag_motion | Gtk.Widget::drag-motion} and
         * {@link Gtk.Widget.SignalSignatures.drag_leave | Gtk.Widget::drag-leave} events regardless of the targets and the
         * {@link Gtk.DestDefaults.MOTION} flag.
         *
         * This may be used when a widget wants to do generic
         * actions regardless of the targets that the source offers.
         * @param track_motion whether to accept all targets
         */
        drag_dest_set_track_motion(track_motion: boolean): void;
        /**
         * Clears information about a drop destination set with
         * `gtk_drag_dest_set()`. The widget will no longer receive
         * notification of drags.
         */
        drag_dest_unset(): void;
        /**
         * Gets the data associated with a drag. When the data
         * is received or the retrieval fails, GTK+ will emit a
         * {@link Gtk.Widget.SignalSignatures.drag_data_received | Gtk.Widget::drag-data-received} signal. Failure of the retrieval
         * is indicated by the length field of the `selection_data`
         * signal parameter being negative. However, when `gtk_drag_get_data()`
         * is called implicitely because the {@link Gtk.DestDefaults.DROP} was set,
         * then the widget will not receive notification of failed
         * drops.
         * @param context the drag context
         * @param target the target (form of the data) to retrieve
         * @param time_ a timestamp for retrieving the data. This will   generally be the time received in a {@link Gtk.Widget.SignalSignatures.drag_motion | Gtk.Widget::drag-motion}   or {@link Gtk.Widget.SignalSignatures.drag_drop | Gtk.Widget::drag-drop} signal
         */
        drag_get_data(context: Gdk.DragContext, target: Gdk.Atom, time_: number): void;
        /**
         * Highlights a widget as a currently hovered drop target.
         * To end the highlight, call `gtk_drag_unhighlight()`.
         * GTK+ calls this automatically if {@link Gtk.DestDefaults.HIGHLIGHT} is set.
         */
        drag_highlight(): void;
        /**
         * Add the writable image targets supported by {@link Gtk.SelectionData} to
         * the target list of the drag source. The targets
         * are added with `info` = 0. If you need another value,
         * use `gtk_target_list_add_image_targets()` and
         * `gtk_drag_source_set_target_list()`.
         */
        drag_source_add_image_targets(): void;
        /**
         * Add the text targets supported by {@link Gtk.SelectionData} to
         * the target list of the drag source.  The targets
         * are added with `info` = 0. If you need another value,
         * use `gtk_target_list_add_text_targets()` and
         * `gtk_drag_source_set_target_list()`.
         */
        drag_source_add_text_targets(): void;
        /**
         * Add the URI targets supported by {@link Gtk.SelectionData} to
         * the target list of the drag source.  The targets
         * are added with `info` = 0. If you need another value,
         * use `gtk_target_list_add_uri_targets()` and
         * `gtk_drag_source_set_target_list()`.
         */
        drag_source_add_uri_targets(): void;
        /**
         * Gets the list of targets this widget can provide for
         * drag-and-drop.
         * @returns the {@link Gtk.TargetList}, or `null` if none
         */
        drag_source_get_target_list(): Gtk.TargetList | null;
        /**
         * Sets up a widget so that GTK+ will start a drag operation when the user
         * clicks and drags on the widget. The widget must have a window.
         * @param start_button_mask the bitmask of buttons that can start the drag
         * @param targets the table of targets     that the drag will support, may be `null`
         * @param actions the bitmask of possible actions for a drag from this widget
         */
        drag_source_set(
            start_button_mask: Gdk.ModifierType | null,
            targets: Gtk.TargetEntry[] | null,
            actions: Gdk.DragAction | null,
        ): void;
        /**
         * Sets the icon that will be used for drags from a particular source
         * to `icon`. See the docs for {@link Gtk.IconTheme} for more details.
         * @param icon A {@link Gio.Icon}
         */
        drag_source_set_icon_gicon(icon: Gio.Icon): void;
        /**
         * Sets the icon that will be used for drags from a particular source
         * to a themed icon. See the docs for {@link Gtk.IconTheme} for more details.
         * @param icon_name name of icon to use
         */
        drag_source_set_icon_name(icon_name: string): void;
        /**
         * Sets the icon that will be used for drags from a particular widget
         * from a {@link GdkPixbuf.Pixbuf}. GTK+ retains a reference for `pixbuf` and will
         * release it when it is no longer needed.
         * @param pixbuf the {@link GdkPixbuf.Pixbuf} for the drag icon
         */
        drag_source_set_icon_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void;
        /**
         * Sets the icon that will be used for drags from a particular source
         * to a stock icon.
         * @param stock_id the ID of the stock icon to use
         */
        drag_source_set_icon_stock(stock_id: string): void;
        /**
         * Changes the target types that this widget offers for drag-and-drop.
         * The widget must first be made into a drag source with
         * `gtk_drag_source_set()`.
         * @param target_list list of draggable targets, or `null` for none
         */
        drag_source_set_target_list(target_list?: Gtk.TargetList | null): void;
        /**
         * Undoes the effects of `gtk_drag_source_set()`.
         */
        drag_source_unset(): void;
        /**
         * Removes a highlight set by `gtk_drag_highlight()` from
         * a widget.
         */
        drag_unhighlight(): void;
        /**
         * Draws `widget` to `cr`. The top left corner of the widget will be
         * drawn to the currently set origin point of `cr`.
         *
         * You should pass a cairo context as `cr` argument that is in an
         * original state. Otherwise the resulting drawing is undefined. For
         * example changing the operator using `cairo_set_operator()` or the
         * line width using `cairo_set_line_width()` might have unwanted side
         * effects.
         * You may however change the context’s transform matrix - like with
         * `cairo_scale()`, `cairo_translate()` or `cairo_set_matrix()` and clip
         * region with `cairo_clip()` prior to calling this function. Also, it
         * is fine to modify the context with `cairo_save()` and
         * `cairo_push_group()` prior to calling this function.
         *
         * Note that special-purpose widgets may contain special code for
         * rendering to the screen and might appear differently on screen
         * and when rendered using `gtk_widget_draw()`.
         * @param cr a cairo context to draw to
         */
        draw(cr: cairo.Context): void;
        /**
         * Ensures that `widget` has a style (`widget`->style).
         *
         * Not a very useful function; most of the time, if you
         * want the style, the widget is realized, and realized
         * widgets are guaranteed to have a style already.
         */
        ensure_style(): void;
        /**
         * Notifies the user about an input-related error on this widget.
         * If the {@link Gtk.Settings.gtk_error_bell} setting is `true`, it calls
         * `gdk_window_beep()`, otherwise it does nothing.
         *
         * Note that the effect of `gdk_window_beep()` can be configured in many
         * ways, depending on the windowing backend and the desktop environment
         * or window manager that is used.
         */
        error_bell(): void;
        /**
         * Rarely-used function. This function is used to emit
         * the event signals on a widget (those signals should never
         * be emitted without using this function to do so).
         * If you want to synthesize an event though, don’t use this function;
         * instead, use `gtk_main_do_event()` so the event will behave as if
         * it were in the event queue. Don’t synthesize expose events; instead,
         * use `gdk_window_invalidate_rect()` to invalidate a region of the
         * window.
         * @param event a {@link Gdk.Event}
         * @returns return from the event signal emission (`true` if               the event was handled)
         */
        event(event: Gdk.Event): boolean;
        /**
         * Stops emission of {@link Gtk.Widget.SignalSignatures.child_notify | Gtk.Widget::child-notify} signals on `widget`. The
         * signals are queued until `gtk_widget_thaw_child_notify()` is called
         * on `widget`.
         *
         * This is the analogue of `g_object_freeze_notify()` for child properties.
         */
        freeze_child_notify(): void;
        /**
         * Returns the accessible object that describes the widget to an
         * assistive technology.
         *
         * If accessibility support is not available, this {@link Atk.Object}
         * instance may be a no-op. Likewise, if no class-specific {@link Atk.Object}
         * implementation is available for the widget instance in question,
         * it will inherit an {@link Atk.Object} implementation from the first ancestor
         * class for which such an implementation is defined.
         *
         * The documentation of the
         * [ATK](http://developer.gnome.org/atk/stable/)
         * library contains more information about accessible objects and their uses.
         * @returns the {@link Atk.Object} associated with `widget`
         */
        get_accessible(): Atk.Object;
        /**
         * Retrieves the {@link Gio.ActionGroup} that was registered using `prefix`. The resulting
         * {@link Gio.ActionGroup} may have been registered to `widget` or any {@link Gtk.Widget} in its
         * ancestry.
         *
         * If no action group was found matching `prefix`, then `null` is returned.
         * @param prefix The “prefix” of the action group.
         * @returns A {@link Gio.ActionGroup} or `null`.
         */
        get_action_group(prefix: string): Gio.ActionGroup | null;
        /**
         * Returns the baseline that has currently been allocated to `widget`.
         * This function is intended to be used when implementing handlers
         * for the {@link Gtk.Widget.SignalSignatures.draw | Gtk.Widget::draw} function, and when allocating child
         * widgets in {@link Gtk.Widget.SignalSignatures.size_allocate | Gtk.Widget::size_allocate}.
         * @returns the baseline of the `widget`, or -1 if none
         */
        get_allocated_baseline(): number;
        /**
         * Returns the height that has currently been allocated to `widget`.
         * This function is intended to be used when implementing handlers
         * for the {@link Gtk.Widget.SignalSignatures.draw | Gtk.Widget::draw} function.
         * @returns the height of the `widget`
         */
        get_allocated_height(): number;
        /**
         * Retrieves the widget’s allocated size.
         *
         * This function returns the last values passed to
         * `gtk_widget_size_allocate_with_baseline()`. The value differs from
         * the size returned in `gtk_widget_get_allocation()` in that functions
         * like `gtk_widget_set_halign()` can adjust the allocation, but not
         * the value returned by this function.
         *
         * If a widget is not visible, its allocated size is 0.
         */
        get_allocated_size(): [Gtk.Allocation, number];
        /**
         * Returns the width that has currently been allocated to `widget`.
         * This function is intended to be used when implementing handlers
         * for the {@link Gtk.Widget.SignalSignatures.draw | Gtk.Widget::draw} function.
         * @returns the width of the `widget`
         */
        get_allocated_width(): number;
        /**
         * Retrieves the widget’s allocation.
         *
         * Note, when implementing a {@link Gtk.Container}: a widget’s allocation will
         * be its “adjusted” allocation, that is, the widget’s parent
         * container typically calls `gtk_widget_size_allocate()` with an
         * allocation, and that allocation is then adjusted (to handle margin
         * and alignment for example) before assignment to the widget.
         * `gtk_widget_get_allocation()` returns the adjusted allocation that
         * was actually assigned to the widget. The adjusted allocation is
         * guaranteed to be completely contained within the
         * `gtk_widget_size_allocate()` allocation, however. So a {@link Gtk.Container}
         * is guaranteed that its children stay inside the assigned bounds,
         * but not that they have exactly the bounds the container assigned.
         * There is no way to get the original allocation assigned by
         * `gtk_widget_size_allocate()`, since it isn’t stored; if a container
         * implementation needs that information it will have to track it itself.
         */
        get_allocation(): Gtk.Allocation;
        /**
         * Gets the first ancestor of `widget` with type `widget_type`. For example,
         * `gtk_widget_get_ancestor (widget, GTK_TYPE_BOX)` gets
         * the first {@link Gtk.Box} that’s an ancestor of `widget`. No reference will be
         * added to the returned widget; it should not be unreferenced. See note
         * about checking for a toplevel {@link Gtk.Window} in the docs for
         * `gtk_widget_get_toplevel()`.
         *
         * Note that unlike `gtk_widget_is_ancestor()`, `gtk_widget_get_ancestor()`
         * considers `widget` to be an ancestor of itself.
         * @param widget_type ancestor type
         * @returns the ancestor widget, or `null` if not found
         */
        get_ancestor(widget_type: GObject.GType): Gtk.Widget | null;
        /**
         * Determines whether the application intends to draw on the widget in
         * an {@link Gtk.Widget.SignalSignatures.draw | Gtk.Widget::draw} handler.
         *
         * See `gtk_widget_set_app_paintable()`
         * @returns `true` if the widget is app paintable
         */
        get_app_paintable(): boolean;
        /**
         * Determines whether `widget` can be a default widget. See
         * `gtk_widget_set_can_default()`.
         * @returns `true` if `widget` can be a default widget, `false` otherwise
         */
        get_can_default(): boolean;
        /**
         * Determines whether `widget` can own the input focus. See
         * `gtk_widget_set_can_focus()`.
         * @returns `true` if `widget` can own the input focus, `false` otherwise
         */
        get_can_focus(): boolean;
        /**
         * This function is only for use in widget implementations. Obtains
         * `widget`->requisition, unless someone has forced a particular
         * geometry on the widget (e.g. with `gtk_widget_set_size_request()`),
         * in which case it returns that geometry instead of the widget's
         * requisition.
         *
         * This function differs from `gtk_widget_size_request()` in that
         * it retrieves the last size request value from `widget`->requisition,
         * while `gtk_widget_size_request()` actually calls the "size_request" method
         * on `widget` to compute the size request and fill in `widget`->requisition,
         * and only then returns `widget`->requisition.
         *
         * Because this function does not call the “size_request” method, it
         * can only be used when you know that `widget`->requisition is
         * up-to-date, that is, `gtk_widget_size_request()` has been called
         * since the last time a resize was queued. In general, only container
         * implementations have this information; applications should use
         * `gtk_widget_size_request()`.
         */
        get_child_requisition(): Gtk.Requisition;
        /**
         * Gets the value set with `gtk_widget_set_child_visible()`.
         * If you feel a need to use this function, your code probably
         * needs reorganization.
         *
         * This function is only useful for container implementations and
         * never should be called by an application.
         * @returns `true` if the widget is mapped with the parent.
         */
        get_child_visible(): boolean;
        /**
         * Retrieves the widget’s clip area.
         *
         * The clip area is the area in which all of `widget`'s drawing will
         * happen. Other toolkits call it the bounding box.
         *
         * Historically, in GTK+ the clip area has been equal to the allocation
         * retrieved via `gtk_widget_get_allocation()`.
         */
        get_clip(): Gtk.Allocation;
        /**
         * Returns the clipboard object for the given selection to
         * be used with `widget`. `widget` must have a {@link Gdk.Display}
         * associated with it, so must be attached to a toplevel
         * window.
         * @param selection a {@link Gdk.Atom} which identifies the clipboard             to use. `GDK_SELECTION_CLIPBOARD` gives the             default clipboard. Another common value             is `GDK_SELECTION_PRIMARY`, which gives             the primary X selection.
         * @returns the appropriate clipboard object. If no             clipboard already exists, a new one will             be created. Once a clipboard object has             been created, it is persistent for all time.
         */
        get_clipboard(selection: Gdk.Atom): Gtk.Clipboard;
        /**
         * Obtains the composite name of a widget.
         * @returns the composite name of `widget`, or `null` if `widget` is not   a composite child. The string should be freed when it is no   longer needed.
         */
        get_composite_name(): string;
        /**
         * Returns whether `device` can interact with `widget` and its
         * children. See `gtk_widget_set_device_enabled()`.
         * @param device a {@link Gdk.Device}
         * @returns `true` is `device` is enabled for `widget`
         */
        get_device_enabled(device: Gdk.Device): boolean;
        /**
         * Returns the events mask for the widget corresponding to an specific device. These
         * are the events that the widget will receive when `device` operates on it.
         * @param device a {@link Gdk.Device}
         * @returns device event mask for `widget`
         */
        get_device_events(device: Gdk.Device): Gdk.EventMask;
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
         * Get the {@link Gdk.Display} for the toplevel window associated with
         * this widget. This function can only be called after the widget
         * has been added to a widget hierarchy with a {@link Gtk.Window} at the top.
         *
         * In general, you should only create display specific
         * resources when a widget has been realized, and you should
         * free those resources when the widget is unrealized.
         * @returns the {@link Gdk.Display} for the toplevel for this widget.
         */
        get_display(): Gdk.Display;
        /**
         * Determines whether the widget is double buffered.
         *
         * See `gtk_widget_set_double_buffered()`
         * @returns `true` if the widget is double buffered
         */
        get_double_buffered(): boolean;
        /**
         * Returns the event mask (see {@link Gdk.EventMask}) for the widget. These are the
         * events that the widget will receive.
         *
         * Note: Internally, the widget event mask will be the logical OR of the event
         * mask set through `gtk_widget_set_events()` or `gtk_widget_add_events()`, and the
         * event mask necessary to cater for every {@link Gtk.EventController} created for the
         * widget.
         * @returns event mask for `widget`
         */
        get_events(): number;
        /**
         * Returns whether the widget should grab focus when it is clicked with the mouse.
         * See `gtk_widget_set_focus_on_click()`.
         * @returns `true` if the widget should grab focus when it is clicked with               the mouse.
         */
        get_focus_on_click(): boolean;
        /**
         * Gets the font map that has been set with `gtk_widget_set_font_map()`.
         * @returns A {@link Pango.FontMap}, or `null`
         */
        get_font_map(): Pango.FontMap | null;
        /**
         * Returns the {@link cairo.FontOptions} used for Pango rendering. When not set,
         * the defaults font options for the {@link Gdk.Screen} will be used.
         * @returns the {@link cairo.FontOptions} or `null` if not set
         */
        get_font_options(): cairo.FontOptions | null;
        /**
         * Obtains the frame clock for a widget. The frame clock is a global
         * “ticker” that can be used to drive animations and repaints.  The
         * most common reason to get the frame clock is to call
         * `gdk_frame_clock_get_frame_time()`, in order to get a time to use for
         * animating. For example you might record the start of the animation
         * with an initial value from `gdk_frame_clock_get_frame_time()`, and
         * then update the animation by calling
         * `gdk_frame_clock_get_frame_time()` again during each repaint.
         *
         * `gdk_frame_clock_request_phase()` will result in a new frame on the
         * clock, but won’t necessarily repaint any widgets. To repaint a
         * widget, you have to use `gtk_widget_queue_draw()` which invalidates
         * the widget (thus scheduling it to receive a draw on the next
         * frame). `gtk_widget_queue_draw()` will also end up requesting a frame
         * on the appropriate frame clock.
         *
         * A widget’s frame clock will not change while the widget is
         * mapped. Reparenting a widget (which implies a temporary unmap) can
         * change the widget’s frame clock.
         *
         * Unrealized widgets do not have a frame clock.
         * @returns a {@link Gdk.FrameClock}, or `null` if widget is unrealized
         */
        get_frame_clock(): Gdk.FrameClock | null;
        /**
         * Gets the value of the {@link Gtk.Widget.halign} property.
         *
         * For backwards compatibility reasons this method will never return
         * {@link Gtk.Align.BASELINE}, but instead it will convert it to
         * {@link Gtk.Align.FILL}. Baselines are not supported for horizontal
         * alignment.
         * @returns the horizontal alignment of `widget`
         */
        get_halign(): Gtk.Align;
        /**
         * Returns the current value of the has-tooltip property.  See
         * {@link Gtk.Widget.has_tooltip} for more information.
         * @returns current value of has-tooltip on `widget`.
         */
        get_has_tooltip(): boolean;
        /**
         * Determines whether `widget` has a {@link Gdk.Window} of its own. See
         * `gtk_widget_set_has_window()`.
         * @returns `true` if `widget` has a window, `false` otherwise
         */
        get_has_window(): boolean;
        /**
         * Gets whether the widget would like any available extra horizontal
         * space. When a user resizes a {@link Gtk.Window}, widgets with expand=TRUE
         * generally receive the extra space. For example, a list or
         * scrollable area or document in your window would often be set to
         * expand.
         *
         * Containers should use `gtk_widget_compute_expand()` rather than
         * this function, to see whether a widget, or any of its children,
         * has the expand flag set. If any child of a widget wants to
         * expand, the parent may ask to expand also.
         *
         * This function only looks at the widget’s own hexpand flag, rather
         * than computing whether the entire widget tree rooted at this widget
         * wants to expand.
         * @returns whether hexpand flag is set
         */
        get_hexpand(): boolean;
        /**
         * Gets whether `gtk_widget_set_hexpand()` has been used to
         * explicitly set the expand flag on this widget.
         *
         * If hexpand is set, then it overrides any computed
         * expand value based on child widgets. If hexpand is not
         * set, then the expand value depends on whether any
         * children of the widget would like to expand.
         *
         * There are few reasons to use this function, but it’s here
         * for completeness and consistency.
         * @returns whether hexpand has been explicitly set
         */
        get_hexpand_set(): boolean;
        /**
         * Whether the widget is mapped.
         * @returns `true` if the widget is mapped, `false` otherwise.
         */
        get_mapped(): boolean;
        /**
         * Gets the value of the {@link Gtk.Widget.margin_bottom} property.
         * @returns The bottom margin of `widget`
         */
        get_margin_bottom(): number;
        /**
         * Gets the value of the {@link Gtk.Widget.margin_end} property.
         * @returns The end margin of `widget`
         */
        get_margin_end(): number;
        /**
         * Gets the value of the {@link Gtk.Widget.margin_left} property.
         * @returns The left margin of `widget`
         */
        get_margin_left(): number;
        /**
         * Gets the value of the {@link Gtk.Widget.margin_right} property.
         * @returns The right margin of `widget`
         */
        get_margin_right(): number;
        /**
         * Gets the value of the {@link Gtk.Widget.margin_start} property.
         * @returns The start margin of `widget`
         */
        get_margin_start(): number;
        /**
         * Gets the value of the {@link Gtk.Widget.margin_top} property.
         * @returns The top margin of `widget`
         */
        get_margin_top(): number;
        /**
         * Returns the modifier mask the `widget`’s windowing system backend
         * uses for a particular purpose.
         *
         * See `gdk_keymap_get_modifier_mask()`.
         * @param intent the use case for the modifier mask
         * @returns the modifier mask used for `intent`.
         */
        get_modifier_mask(intent: Gdk.ModifierIntent | null): Gdk.ModifierType;
        /**
         * Returns the current modifier style for the widget. (As set by
         * `gtk_widget_modify_style()`.) If no style has previously set, a new
         * {@link Gtk.RcStyle} will be created with all values unset, and set as the
         * modifier style for the widget. If you make changes to this rc
         * style, you must call `gtk_widget_modify_style()`, passing in the
         * returned rc style, to make sure that your changes take effect.
         *
         * Caution: passing the style back to `gtk_widget_modify_style()` will
         * normally end up destroying it, because `gtk_widget_modify_style()` copies
         * the passed-in style and sets the copy as the new modifier style,
         * thus dropping any reference to the old modifier style. Add a reference
         * to the modifier style if you want to keep it alive.
         * @returns the modifier style for the widget.     This rc style is owned by the widget. If you want to keep a     pointer to value this around, you must add a refcount using     `g_object_ref()`.
         */
        get_modifier_style(): Gtk.RcStyle;
        /**
         * Retrieves the name of a widget. See `gtk_widget_set_name()` for the
         * significance of widget names.
         * @returns name of the widget. This string is owned by GTK+ and should not be modified or freed
         */
        get_name(): string;
        /**
         * Returns the current value of the {@link Gtk.Widget.no_show_all} property,
         * which determines whether calls to `gtk_widget_show_all()`
         * will affect this widget.
         * @returns the current value of the “no-show-all” property.
         */
        get_no_show_all(): boolean;
        /**
         * Fetches the requested opacity for this widget.
         * See `gtk_widget_set_opacity()`.
         * @returns the requested opacity for this widget.
         */
        get_opacity(): number;
        /**
         * Gets a {@link Pango.Context} with the appropriate font map, font description,
         * and base direction for this widget. Unlike the context returned
         * by `gtk_widget_create_pango_context()`, this context is owned by
         * the widget (it can be used until the screen for the widget changes
         * or the widget is removed from its toplevel), and will be updated to
         * match any changes to the widget’s attributes. This can be tracked
         * by using the {@link Gtk.Widget.SignalSignatures.screen_changed | Gtk.Widget::screen-changed} signal on the widget.
         * @returns the {@link Pango.Context} for the widget.
         */
        get_pango_context(): Pango.Context;
        /**
         * Returns the parent container of `widget`.
         * @returns the parent container of `widget`, or `null`
         */
        get_parent(): Gtk.Widget | null;
        /**
         * Gets `widget`’s parent window, or `null` if it does not have one.
         * @returns the parent window of `widget`, or `null` if it does not have a parent window.
         */
        get_parent_window(): Gdk.Window | null;
        /**
         * Returns the {@link Gtk.WidgetPath} representing `widget`, if the widget
         * is not connected to a toplevel widget, a partial path will be
         * created.
         * @returns The {@link Gtk.WidgetPath} representing `widget`
         */
        get_path(): Gtk.WidgetPath;
        /**
         * Obtains the location of the mouse pointer in widget coordinates.
         * Widget coordinates are a bit odd; for historical reasons, they are
         * defined as `widget`->window coordinates for widgets that return `true` for
         * `gtk_widget_get_has_window()`; and are relative to `widget`->allocation.x,
         * `widget`->allocation.y otherwise.
         */
        get_pointer(): [number, number];
        /**
         * Retrieves a widget’s initial minimum and natural height.
         *
         * This call is specific to width-for-height requests.
         *
         * The returned request will be modified by the
         * GtkWidgetClass::adjust_size_request virtual method and by any
         * `GtkSizeGroups` that have been applied. That is, the returned request
         * is the one that should be used for layout, not necessarily the one
         * returned by the widget itself.
         */
        get_preferred_height(): [number, number];
        /**
         * Retrieves a widget’s minimum and natural height and the corresponding baselines if it would be given
         * the specified `width`, or the default height if `width` is -1. The baselines may be -1 which means
         * that no baseline is requested for this widget.
         *
         * The returned request will be modified by the
         * GtkWidgetClass::adjust_size_request and GtkWidgetClass::adjust_baseline_request virtual methods
         * and by any `GtkSizeGroups` that have been applied. That is, the returned request
         * is the one that should be used for layout, not necessarily the one
         * returned by the widget itself.
         * @param width the width which is available for allocation, or -1 if none
         */
        get_preferred_height_and_baseline_for_width(width: number): [number, number, number, number];
        /**
         * Retrieves a widget’s minimum and natural height if it would be given
         * the specified `width`.
         *
         * The returned request will be modified by the
         * GtkWidgetClass::adjust_size_request virtual method and by any
         * `GtkSizeGroups` that have been applied. That is, the returned request
         * is the one that should be used for layout, not necessarily the one
         * returned by the widget itself.
         * @param width the width which is available for allocation
         */
        get_preferred_height_for_width(width: number): [number, number];
        /**
         * Retrieves the minimum and natural size of a widget, taking
         * into account the widget’s preference for height-for-width management.
         *
         * This is used to retrieve a suitable size by container widgets which do
         * not impose any restrictions on the child placement. It can be used
         * to deduce toplevel window and menu sizes as well as child widgets in
         * free-form containers such as GtkLayout.
         *
         * Handle with care. Note that the natural height of a height-for-width
         * widget will generally be a smaller size than the minimum height, since the required
         * height for the natural width is generally smaller than the required height for
         * the minimum width.
         *
         * Use `gtk_widget_get_preferred_height_and_baseline_for_width()` if you want to support
         * baseline alignment.
         */
        get_preferred_size(): [Gtk.Requisition | null, Gtk.Requisition | null];
        /**
         * Retrieves a widget’s initial minimum and natural width.
         *
         * This call is specific to height-for-width requests.
         *
         * The returned request will be modified by the
         * GtkWidgetClass::adjust_size_request virtual method and by any
         * `GtkSizeGroups` that have been applied. That is, the returned request
         * is the one that should be used for layout, not necessarily the one
         * returned by the widget itself.
         */
        get_preferred_width(): [number, number];
        /**
         * Retrieves a widget’s minimum and natural width if it would be given
         * the specified `height`.
         *
         * The returned request will be modified by the
         * GtkWidgetClass::adjust_size_request virtual method and by any
         * `GtkSizeGroups` that have been applied. That is, the returned request
         * is the one that should be used for layout, not necessarily the one
         * returned by the widget itself.
         * @param height the height which is available for allocation
         */
        get_preferred_width_for_height(height: number): [number, number];
        /**
         * Determines whether `widget` is realized.
         * @returns `true` if `widget` is realized, `false` otherwise
         */
        get_realized(): boolean;
        /**
         * Determines whether `widget` is always treated as the default widget
         * within its toplevel when it has the focus, even if another widget
         * is the default.
         *
         * See `gtk_widget_set_receives_default()`.
         * @returns `true` if `widget` acts as the default widget when focused,               `false` otherwise
         */
        get_receives_default(): boolean;
        /**
         * Gets whether the widget prefers a height-for-width layout
         * or a width-for-height layout.
         *
         * {@link Gtk.Bin} widgets generally propagate the preference of
         * their child, container widgets need to request something either in
         * context of their children or in context of their allocation
         * capabilities.
         * @returns The {@link Gtk.SizeRequestMode} preferred by `widget`.
         */
        get_request_mode(): Gtk.SizeRequestMode;
        /**
         * Retrieves the widget’s requisition.
         *
         * This function should only be used by widget implementations in
         * order to figure whether the widget’s requisition has actually
         * changed after some internal state change (so that they can call
         * `gtk_widget_queue_resize()` instead of `gtk_widget_queue_draw()`).
         *
         * Normally, `gtk_widget_size_request()` should be used.
         */
        get_requisition(): Gtk.Requisition;
        /**
         * Get the root window where this widget is located. This function can
         * only be called after the widget has been added to a widget
         * hierarchy with {@link Gtk.Window} at the top.
         *
         * The root window is useful for such purposes as creating a popup
         * {@link Gdk.Window} associated with the window. In general, you should only
         * create display specific resources when a widget has been realized,
         * and you should free those resources when the widget is unrealized.
         * @returns the {@link Gdk.Window} root window for the toplevel for this widget.
         */
        get_root_window(): Gdk.Window;
        /**
         * Retrieves the internal scale factor that maps from window coordinates
         * to the actual device pixels. On traditional systems this is 1, on
         * high density outputs, it can be a higher value (typically 2).
         *
         * See `gdk_window_get_scale_factor()`.
         * @returns the scale factor for `widget`
         */
        get_scale_factor(): number;
        /**
         * Get the {@link Gdk.Screen} from the toplevel window associated with
         * this widget. This function can only be called after the widget
         * has been added to a widget hierarchy with a {@link Gtk.Window}
         * at the top.
         *
         * In general, you should only create screen specific
         * resources when a widget has been realized, and you should
         * free those resources when the widget is unrealized.
         * @returns the {@link Gdk.Screen} for the toplevel for this widget.
         */
        get_screen(): Gdk.Screen;
        /**
         * Returns the widget’s sensitivity (in the sense of returning
         * the value that has been set using `gtk_widget_set_sensitive()`).
         *
         * The effective sensitivity of a widget is however determined by both its
         * own and its parent widget’s sensitivity. See `gtk_widget_is_sensitive()`.
         * @returns `true` if the widget is sensitive
         */
        get_sensitive(): boolean;
        /**
         * Gets the settings object holding the settings used for this widget.
         *
         * Note that this function can only be called when the {@link Gtk.Widget}
         * is attached to a toplevel, since the settings object is specific
         * to a particular {@link Gdk.Screen}.
         * @returns the relevant {@link Gtk.Settings} object
         */
        get_settings(): Gtk.Settings;
        /**
         * Gets the size request that was explicitly set for the widget using
         * `gtk_widget_set_size_request()`. A value of -1 stored in `width` or
         * `height` indicates that that dimension has not been set explicitly
         * and the natural requisition of the widget will be used instead. See
         * `gtk_widget_set_size_request()`. To get the size a widget will
         * actually request, call `gtk_widget_get_preferred_size()` instead of
         * this function.
         */
        get_size_request(): [number, number];
        /**
         * Returns the widget’s state. See `gtk_widget_set_state()`.
         * @returns the state of `widget`.
         */
        get_state(): Gtk.StateType;
        /**
         * Returns the widget state as a flag set. It is worth mentioning
         * that the effective {@link Gtk.StateFlags.INSENSITIVE} state will be
         * returned, that is, also based on parent insensitivity, even if
         * `widget` itself is sensitive.
         *
         * Also note that if you are looking for a way to obtain the
         * {@link Gtk.StateFlags} to pass to a {@link Gtk.StyleContext} method, you
         * should look at `gtk_style_context_get_state()`.
         * @returns The state flags for widget
         */
        get_state_flags(): Gtk.StateFlags;
        /**
         * Simply an accessor function that returns `widget`->style.
         * @returns the widget’s {@link Gtk.Style}
         */
        get_style(): Gtk.Style;
        /**
         * Returns the style context associated to `widget`. The returned object is
         * guaranteed to be the same for the lifetime of `widget`.
         * @returns a {@link Gtk.StyleContext}. This memory is owned by `widget` and          must not be freed.
         */
        get_style_context(): Gtk.StyleContext;
        /**
         * Returns `true` if `widget` is multiple pointer aware. See
         * `gtk_widget_set_support_multidevice()` for more information.
         * @returns `true` if `widget` is multidevice aware.
         */
        get_support_multidevice(): boolean;
        /**
         * Fetch an object build from the template XML for `widget_type` in this `widget` instance.
         *
         * This will only report children which were previously declared with
         * `gtk_widget_class_bind_template_child_full()` or one of its
         * variants.
         *
         * This function is only meant to be called for code which is private to the `widget_type` which
         * declared the child and is meant for language bindings which cannot easily make use
         * of the GObject structure offsets.
         * @param widget_type The {@link GObject.GType} to get a template child for
         * @param name The “id” of the child defined in the template XML
         * @returns The object built in the template XML with the id `name`
         */
        get_template_child<T = GObject.Object>(widget_type: GObject.GType, name: string): T;
        /**
         * Gets the contents of the tooltip for `widget`.
         * @returns the tooltip text, or `null`. You should free the   returned string with `g_free()` when done.
         */
        get_tooltip_markup(): string | null;
        /**
         * Gets the contents of the tooltip for `widget`.
         * @returns the tooltip text, or `null`. You should free the   returned string with `g_free()` when done.
         */
        get_tooltip_text(): string | null;
        /**
         * Returns the {@link Gtk.Window} of the current tooltip. This can be the
         * GtkWindow created by default, or the custom tooltip window set
         * using `gtk_widget_set_tooltip_window()`.
         * @returns The {@link Gtk.Window} of the current tooltip.
         */
        get_tooltip_window(): Gtk.Window;
        /**
         * This function returns the topmost widget in the container hierarchy
         * `widget` is a part of. If `widget` has no parent widgets, it will be
         * returned as the topmost widget. No reference will be added to the
         * returned widget; it should not be unreferenced.
         *
         * Note the difference in behavior vs. `gtk_widget_get_ancestor()`;
         * `gtk_widget_get_ancestor (widget, GTK_TYPE_WINDOW)`
         * would return
         * `null` if `widget` wasn’t inside a toplevel window, and if the
         * window was inside a {@link Gtk.Window}-derived widget which was in turn
         * inside the toplevel {@link Gtk.Window}. While the second case may
         * seem unlikely, it actually happens when a {@link Gtk.Plug} is embedded
         * inside a {@link Gtk.Socket} within the same application.
         *
         * To reliably find the toplevel {@link Gtk.Window}, use
         * `gtk_widget_get_toplevel()` and call GTK_IS_WINDOW()
         * on the result. For instance, to get the title of a widget's toplevel
         * window, one might use:
         *
         * ```c
         * static const char *
         * get_widget_toplevel_title (GtkWidget *widget)
         * {
         *   GtkWidget *toplevel = gtk_widget_get_toplevel (widget);
         *   if (GTK_IS_WINDOW (toplevel))
         *     {
         *       return gtk_window_get_title (GTK_WINDOW (toplevel));
         *     }
         *
         *   return NULL;
         * }
         * ```
         *
         * @returns the topmost ancestor of `widget`, or `widget` itself    if there’s no ancestor.
         */
        get_toplevel(): Gtk.Widget;
        /**
         * Gets the value of the {@link Gtk.Widget.valign} property.
         *
         * For backwards compatibility reasons this method will never return
         * {@link Gtk.Align.BASELINE}, but instead it will convert it to
         * {@link Gtk.Align.FILL}. If your widget want to support baseline aligned
         * children it must use `gtk_widget_get_valign_with_baseline()`, or
         * `g_object_get (widget, "valign", &value, NULL)`, which will
         * also report the true value.
         * @returns the vertical alignment of `widget`, ignoring baseline alignment
         */
        get_valign(): Gtk.Align;
        /**
         * Gets the value of the {@link Gtk.Widget.valign} property, including
         * {@link Gtk.Align.BASELINE}.
         * @returns the vertical alignment of `widget`
         */
        get_valign_with_baseline(): Gtk.Align;
        /**
         * Gets whether the widget would like any available extra vertical
         * space.
         *
         * See `gtk_widget_get_hexpand()` for more detail.
         * @returns whether vexpand flag is set
         */
        get_vexpand(): boolean;
        /**
         * Gets whether `gtk_widget_set_vexpand()` has been used to
         * explicitly set the expand flag on this widget.
         *
         * See `gtk_widget_get_hexpand_set()` for more detail.
         * @returns whether vexpand has been explicitly set
         */
        get_vexpand_set(): boolean;
        /**
         * Determines whether the widget is visible. If you want to
         * take into account whether the widget’s parent is also marked as
         * visible, use `gtk_widget_is_visible()` instead.
         *
         * This function does not check if the widget is obscured in any way.
         *
         * See `gtk_widget_set_visible()`.
         * @returns `true` if the widget is visible
         */
        get_visible(): boolean;
        /**
         * Gets the visual that will be used to render `widget`.
         * @returns the visual for `widget`
         */
        get_visual(): Gdk.Visual;
        /**
         * Returns the widget’s window if it is realized, `null` otherwise
         * @returns `widget`’s window.
         */
        get_window(): Gdk.Window | null;
        /**
         * Makes `widget` the current grabbed widget.
         *
         * This means that interaction with other widgets in the same
         * application is blocked and mouse as well as keyboard events
         * are delivered to this widget.
         *
         * If `widget` is not sensitive, it is not set as the current
         * grabbed widget and this function does nothing.
         */
        grab_add(): void;
        /**
         * Causes `widget` to become the default widget. `widget` must be able to be
         * a default widget; typically you would ensure this yourself
         * by calling `gtk_widget_set_can_default()` with a `true` value.
         * The default widget is activated when
         * the user presses Enter in a window. Default widgets must be
         * activatable, that is, `gtk_widget_activate()` should affect them. Note
         * that {@link Gtk.Entry} widgets require the “activates-default” property
         * set to `true` before they activate the default widget when Enter
         * is pressed and the {@link Gtk.Entry} is focused.
         */
        grab_default(): void;
        /**
         * Causes `widget` to have the keyboard focus for the {@link Gtk.Window} it's
         * inside. `widget` must be a focusable widget, such as a {@link Gtk.Entry};
         * something like {@link Gtk.Frame} won’t work.
         *
         * More precisely, it must have the `GTK_CAN_FOCUS` flag set. Use
         * `gtk_widget_set_can_focus()` to modify that flag.
         *
         * The widget also needs to be realized and mapped. This is indicated by the
         * related signals. Grabbing the focus immediately after creating the widget
         * will likely fail and cause critical warnings.
         */
        grab_focus(): void;
        /**
         * Removes the grab from the given widget.
         *
         * You have to pair calls to `gtk_grab_add()` and `gtk_grab_remove()`.
         *
         * If `widget` does not have the grab, this function does nothing.
         */
        grab_remove(): void;
        /**
         * Determines whether the widget is currently grabbing events, so it
         * is the only widget receiving input events (keyboard and mouse).
         *
         * See also `gtk_grab_add()`.
         * @returns `true` if the widget is in the grab_widgets stack
         */
        has_grab(): boolean;
        /**
         * Determines if the widget style has been looked up through the rc mechanism.
         * @returns `true` if the widget has been looked up through the rc   mechanism, `false` otherwise.
         */
        has_rc_style(): boolean;
        /**
         * Checks whether there is a {@link Gdk.Screen} is associated with
         * this widget. All toplevel widgets have an associated
         * screen, and all widgets added into a hierarchy with a toplevel
         * window at the top.
         * @returns `true` if there is a {@link Gdk.Screen} associated   with the widget.
         */
        has_screen(): boolean;
        /**
         * Determines if the widget should show a visible indication that
         * it has the global input focus. This is a convenience function for
         * use in ::draw handlers that takes into account whether focus
         * indication should currently be shown in the toplevel window of
         * `widget`. See `gtk_window_get_focus_visible()` for more information
         * about focus indication.
         *
         * To find out if the widget has the global input focus, use
         * `gtk_widget_has_focus()`.
         * @returns `true` if the widget should display a “focus rectangle”
         */
        has_visible_focus(): boolean;
        /**
         * Reverses the effects of `gtk_widget_show()`, causing the widget to be
         * hidden (invisible to the user).
         */
        hide(): void;
        /**
         * Utility function; intended to be connected to the {@link Gtk.Widget.SignalSignatures.delete_event | Gtk.Widget::delete-event}
         * signal on a {@link Gtk.Window}. The function calls `gtk_widget_hide()` on its
         * argument, then returns `true`. If connected to ::delete-event, the
         * result is that clicking the close button for a window (on the
         * window frame, top right corner usually) will hide but not destroy
         * the window. By default, GTK+ destroys windows when ::delete-event
         * is received.
         * @returns `true`
         */
        hide_on_delete(): boolean;
        /**
         * Returns whether the widget is currently being destroyed.
         * This information can sometimes be used to avoid doing
         * unnecessary work.
         * @returns `true` if `widget` is being destroyed
         */
        in_destruction(): boolean;
        /**
         * Creates and initializes child widgets defined in templates. This
         * function must be called in the instance initializer for any
         * class which assigned itself a template using `gtk_widget_class_set_template()`
         *
         * It is important to call this function in the instance initializer
         * of a {@link Gtk.Widget} subclass and not in {@link GObject.Object}.constructed() or
         * {@link GObject.Object}.constructor() for two reasons.
         *
         * One reason is that generally derived widgets will assume that parent
         * class composite widgets have been created in their instance
         * initializers.
         *
         * Another reason is that when calling `g_object_new()` on a widget with
         * composite templates, it’s important to build the composite widgets
         * before the construct properties are set. Properties passed to `g_object_new()`
         * should take precedence over properties set in the private template XML.
         */
        init_template(): void;
        /**
         * Sets an input shape for this widget’s GDK window. This allows for
         * windows which react to mouse click in a nonrectangular region, see
         * `gdk_window_input_shape_combine_region()` for more information.
         * @param region shape to be added, or `null` to remove an existing shape
         */
        input_shape_combine_region(region?: cairo.Region | null): void;
        /**
         * Inserts `group` into `widget`. Children of `widget` that implement
         * {@link Gtk.Actionable} can then be associated with actions in `group` by
         * setting their “action-name” to
         * `prefix`.`action-name`.
         *
         * If `group` is `null`, a previously inserted group for `name` is removed
         * from `widget`.
         * @param name the prefix for actions in `group`
         * @param group a {@link Gio.ActionGroup}, or `null`
         */
        insert_action_group(name: string, group?: Gio.ActionGroup | null): void;
        /**
         * Computes the intersection of a `widget`’s area and `area`, storing
         * the intersection in `intersection`, and returns `true` if there was
         * an intersection.  `intersection` may be `null` if you’re only
         * interested in whether there was an intersection.
         * @param area a rectangle
         * @returns `true` if there was an intersection
         */
        intersect(area: Gdk.Rectangle): [boolean, Gdk.Rectangle | null];
        /**
         * Determines whether `widget` is somewhere inside `ancestor`, possibly with
         * intermediate containers.
         * @param ancestor another {@link Gtk.Widget}
         * @returns `true` if `ancestor` contains `widget` as a child,    grandchild, great grandchild, etc.
         */
        is_ancestor(ancestor: Gtk.Widget): boolean;
        /**
         * Whether `widget` can rely on having its alpha channel
         * drawn correctly. On X11 this function returns whether a
         * compositing manager is running for `widget`’s screen.
         *
         * Please note that the semantics of this call will change
         * in the future if used on a widget that has a composited
         * window in its hierarchy (as set by `gdk_window_set_composited()`).
         * @returns `true` if the widget can rely on its alpha channel being drawn correctly.
         */
        is_composited(): boolean;
        /**
         * Determines whether `widget` can be drawn to. A widget can be drawn
         * to if it is mapped and visible.
         * @returns `true` if `widget` is drawable, `false` otherwise
         */
        is_drawable(): boolean;
        /**
         * Returns the widget’s effective sensitivity, which means
         * it is sensitive itself and also its parent widget is sensitive
         * @returns `true` if the widget is effectively sensitive
         */
        is_sensitive(): boolean;
        /**
         * Determines whether `widget` is a toplevel widget.
         *
         * Currently only {@link Gtk.Window} and {@link Gtk.Invisible} (and out-of-process
         * `GtkPlugs`) are toplevel widgets. Toplevel widgets have no parent
         * widget.
         * @returns `true` if `widget` is a toplevel, `false` otherwise
         */
        is_toplevel(): boolean;
        /**
         * Determines whether the widget and all its parents are marked as
         * visible.
         *
         * This function does not check if the widget is obscured in any way.
         *
         * See also `gtk_widget_get_visible()` and `gtk_widget_set_visible()`
         * @returns `true` if the widget and all its parents are visible
         */
        is_visible(): boolean;
        /**
         * This function should be called whenever keyboard navigation within
         * a single widget hits a boundary. The function emits the
         * {@link Gtk.Widget.SignalSignatures.keynav_failed | Gtk.Widget::keynav-failed} signal on the widget and its return
         * value should be interpreted in a way similar to the return value of
         * `gtk_widget_child_focus()`:
         *
         * When `true` is returned, stay in the widget, the failed keyboard
         * navigation is OK and/or there is nowhere we can/should move the
         * focus to.
         *
         * When `false` is returned, the caller should continue with keyboard
         * navigation outside the widget, e.g. by calling
         * `gtk_widget_child_focus()` on the widget’s toplevel.
         *
         * The default ::keynav-failed handler returns `false` for
         * {@link Gtk.DirectionType.TAB_FORWARD} and {@link Gtk.DirectionType.TAB_BACKWARD}. For the other
         * values of {@link Gtk.DirectionType} it returns `true`.
         *
         * Whenever the default handler returns `true`, it also calls
         * `gtk_widget_error_bell()` to notify the user of the failed keyboard
         * navigation.
         *
         * A use case for providing an own implementation of ::keynav-failed
         * (either by connecting to it or by overriding it) would be a row of
         * {@link Gtk.Entry} widgets where the user should be able to navigate the
         * entire row with the cursor keys, as e.g. known from user interfaces
         * that require entering license keys.
         * @param direction direction of focus movement
         * @returns `true` if stopping keyboard navigation is fine, `false`               if the emitting widget should try to handle the keyboard               navigation attempt in its parent container(s).
         */
        keynav_failed(direction: Gtk.DirectionType | null): boolean;
        /**
         * Lists the closures used by `widget` for accelerator group connections
         * with `gtk_accel_group_connect_by_path()` or `gtk_accel_group_connect()`.
         * The closures can be used to monitor accelerator changes on `widget`,
         * by connecting to the `GtkAccelGroup`::accel-changed signal of the
         * {@link Gtk.AccelGroup} of a closure which can be found out with
         * `gtk_accel_group_from_accel_closure()`.
         * @returns a newly allocated {@link GLib.List} of closures
         */
        list_accel_closures(): GObject.Closure[];
        /**
         * Retrieves a `null`-terminated array of strings containing the prefixes of
         * {@link Gio.ActionGroup}'s available to `widget`.
         * @returns a `null`-terminated array of strings.
         */
        list_action_prefixes(): string[];
        /**
         * Returns a newly allocated list of the widgets, normally labels, for
         * which this widget is the target of a mnemonic (see for example,
         * `gtk_label_set_mnemonic_widget()`).
         *
         * The widgets in the list are not individually referenced. If you
         * want to iterate through the list and perform actions involving
         * callbacks that might destroy the widgets, you
         * must call `g_list_foreach (result,
         * (GFunc)g_object_ref, NULL)` first, and then unref all the
         * widgets afterwards.
         * @returns the list of  mnemonic labels; free this list  with `g_list_free()` when you are done with it.
         */
        list_mnemonic_labels(): Gtk.Widget[];
        /**
         * This function is only for use in widget implementations. Causes
         * a widget to be mapped if it isn’t already.
         */
        map(): void;
        /**
         * Emits the {@link Gtk.Widget.SignalSignatures.mnemonic_activate | Gtk.Widget::mnemonic-activate} signal.
         * @param group_cycling `true` if there are other widgets with the same mnemonic
         * @returns `true` if the signal has been handled
         */
        mnemonic_activate(group_cycling: boolean): boolean;
        /**
         * Sets the base color for a widget in a particular state.
         * All other style values are left untouched. The base color
         * is the background color used along with the text color
         * (see `gtk_widget_modify_text()`) for widgets such as {@link Gtk.Entry}
         * and {@link Gtk.TextView}. See also `gtk_widget_modify_style()`.
         *
         * > Note that “no window” widgets (which have the `GTK_NO_WINDOW`
         * > flag set) draw on their parent container’s window and thus may
         * > not draw any background themselves. This is the case for e.g.
         * > {@link Gtk.Label}.
         * >
         * > To modify the background of such widgets, you have to set the
         * > base color on their parent; if you want to set the background
         * > of a rectangular area around a label, try placing the label in
         * > a {@link Gtk.EventBox} widget and setting the base color on that.
         * @param state the state for which to set the base color
         * @param color the color to assign (does not need to     be allocated), or `null` to undo the effect of previous     calls to of `gtk_widget_modify_base()`.
         */
        modify_base(state: Gtk.StateType | null, color?: Gdk.Color | null): void;
        /**
         * Sets the background color for a widget in a particular state.
         *
         * All other style values are left untouched.
         * See also `gtk_widget_modify_style()`.
         *
         * > Note that “no window” widgets (which have the `GTK_NO_WINDOW`
         * > flag set) draw on their parent container’s window and thus may
         * > not draw any background themselves. This is the case for e.g.
         * > {@link Gtk.Label}.
         * >
         * > To modify the background of such widgets, you have to set the
         * > background color on their parent; if you want to set the background
         * > of a rectangular area around a label, try placing the label in
         * > a {@link Gtk.EventBox} widget and setting the background color on that.
         * @param state the state for which to set the background color
         * @param color the color to assign (does not need     to be allocated), or `null` to undo the effect of previous     calls to of `gtk_widget_modify_bg()`.
         */
        modify_bg(state: Gtk.StateType | null, color?: Gdk.Color | null): void;
        /**
         * Sets the cursor color to use in a widget, overriding the {@link Gtk.Widget}
         * cursor-color and secondary-cursor-color
         * style properties.
         *
         * All other style values are left untouched.
         * See also `gtk_widget_modify_style()`.
         * @param primary the color to use for primary cursor (does not     need to be allocated), or `null` to undo the effect of previous     calls to of `gtk_widget_modify_cursor()`.
         * @param secondary the color to use for secondary cursor (does     not need to be allocated), or `null` to undo the effect of     previous calls to of `gtk_widget_modify_cursor()`.
         */
        modify_cursor(primary?: Gdk.Color | null, secondary?: Gdk.Color | null): void;
        /**
         * Sets the foreground color for a widget in a particular state.
         *
         * All other style values are left untouched.
         * See also `gtk_widget_modify_style()`.
         * @param state the state for which to set the foreground color
         * @param color the color to assign (does not need to be allocated),     or `null` to undo the effect of previous calls to     of `gtk_widget_modify_fg()`.
         */
        modify_fg(state: Gtk.StateType | null, color?: Gdk.Color | null): void;
        /**
         * Sets the font to use for a widget.
         *
         * All other style values are left untouched.
         * See also `gtk_widget_modify_style()`.
         * @param font_desc the font description to use, or `null`     to undo the effect of previous calls to `gtk_widget_modify_font()`
         */
        modify_font(font_desc?: Pango.FontDescription | null): void;
        /**
         * Modifies style values on the widget.
         *
         * Modifications made using this technique take precedence over
         * style values set via an RC file, however, they will be overridden
         * if a style is explicitly set on the widget using `gtk_widget_set_style()`.
         * The {@link Gtk.RcStyle}-struct is designed so each field can either be
         * set or unset, so it is possible, using this function, to modify some
         * style values and leave the others unchanged.
         *
         * Note that modifications made with this function are not cumulative
         * with previous calls to `gtk_widget_modify_style()` or with such
         * functions as `gtk_widget_modify_fg()`. If you wish to retain
         * previous values, you must first call `gtk_widget_get_modifier_style()`,
         * make your modifications to the returned style, then call
         * `gtk_widget_modify_style()` with that style. On the other hand,
         * if you first call `gtk_widget_modify_style()`, subsequent calls
         * to such functions `gtk_widget_modify_fg()` will have a cumulative
         * effect with the initial modifications.
         * @param style the {@link Gtk.RcStyle}-struct holding the style modifications
         */
        modify_style(style: Gtk.RcStyle): void;
        /**
         * Sets the text color for a widget in a particular state.
         *
         * All other style values are left untouched.
         * The text color is the foreground color used along with the
         * base color (see `gtk_widget_modify_base()`) for widgets such
         * as {@link Gtk.Entry} and {@link Gtk.TextView}.
         * See also `gtk_widget_modify_style()`.
         * @param state the state for which to set the text color
         * @param color the color to assign (does not need to     be allocated), or `null` to undo the effect of previous     calls to of `gtk_widget_modify_text()`.
         */
        modify_text(state: Gtk.StateType | null, color?: Gdk.Color | null): void;
        /**
         * Sets the background color to use for a widget.
         *
         * All other style values are left untouched.
         * See `gtk_widget_override_color()`.
         * @param state the state for which to set the background color
         * @param color the color to assign, or `null` to undo the effect     of previous calls to `gtk_widget_override_background_color()`
         */
        override_background_color(state: Gtk.StateFlags | null, color?: Gdk.RGBA | null): void;
        /**
         * Sets the color to use for a widget.
         *
         * All other style values are left untouched.
         *
         * This function does not act recursively. Setting the color of a
         * container does not affect its children. Note that some widgets that
         * you may not think of as containers, for instance `GtkButtons`,
         * are actually containers.
         *
         * This API is mostly meant as a quick way for applications to
         * change a widget appearance. If you are developing a widgets
         * library and intend this change to be themeable, it is better
         * done by setting meaningful CSS classes in your
         * widget/container implementation through `gtk_style_context_add_class()`.
         *
         * This way, your widget library can install a {@link Gtk.CssProvider}
         * with the `GTK_STYLE_PROVIDER_PRIORITY_FALLBACK` priority in order
         * to provide a default styling for those widgets that need so, and
         * this theming may fully overridden by the user’s theme.
         *
         * Note that for complex widgets this may bring in undesired
         * results (such as uniform background color everywhere), in
         * these cases it is better to fully style such widgets through a
         * {@link Gtk.CssProvider} with the `GTK_STYLE_PROVIDER_PRIORITY_APPLICATION`
         * priority.
         * @param state the state for which to set the color
         * @param color the color to assign, or `null` to undo the effect     of previous calls to `gtk_widget_override_color()`
         */
        override_color(state: Gtk.StateFlags | null, color?: Gdk.RGBA | null): void;
        /**
         * Sets the cursor color to use in a widget, overriding the
         * cursor-color and secondary-cursor-color
         * style properties. All other style values are left untouched.
         * See also `gtk_widget_modify_style()`.
         *
         * Note that the underlying properties have the {@link Gdk.Color} type,
         * so the alpha value in `primary` and `secondary` will be ignored.
         * @param cursor the color to use for primary cursor (does not need to be     allocated), or `null` to undo the effect of previous calls to     of `gtk_widget_override_cursor()`.
         * @param secondary_cursor the color to use for secondary cursor (does not     need to be allocated), or `null` to undo the effect of previous     calls to of `gtk_widget_override_cursor()`.
         */
        override_cursor(cursor?: Gdk.RGBA | null, secondary_cursor?: Gdk.RGBA | null): void;
        /**
         * Sets the font to use for a widget. All other style values are
         * left untouched. See `gtk_widget_override_color()`.
         * @param font_desc the font description to use, or `null` to undo     the effect of previous calls to `gtk_widget_override_font()`
         */
        override_font(font_desc?: Pango.FontDescription | null): void;
        /**
         * Sets a symbolic color for a widget.
         *
         * All other style values are left untouched.
         * See `gtk_widget_override_color()` for overriding the foreground
         * or background color.
         * @param name the name of the symbolic color to modify
         * @param color the color to assign (does not need     to be allocated), or `null` to undo the effect of previous     calls to `gtk_widget_override_symbolic_color()`
         */
        override_symbolic_color(name: string, color?: Gdk.RGBA | null): void;
        /**
         * Obtains the full path to `widget`. The path is simply the name of a
         * widget and all its parents in the container hierarchy, separated by
         * periods. The name of a widget comes from
         * `gtk_widget_get_name()`. Paths are used to apply styles to a widget
         * in gtkrc configuration files. Widget names are the type of the
         * widget by default (e.g. “GtkButton”) or can be set to an
         * application-specific value with `gtk_widget_set_name()`. By setting
         * the name of a widget, you allow users or theme authors to apply
         * styles to that specific widget in their gtkrc
         * file. `path_reversed_p` fills in the path in reverse order,
         * i.e. starting with `widget`’s name instead of starting with the name
         * of `widget`’s outermost ancestor.
         */
        path(): [number, string, string];
        /**
         * This function is only for use in widget implementations.
         *
         * Flags the widget for a rerun of the GtkWidgetClass::size_allocate
         * function. Use this function instead of `gtk_widget_queue_resize()`
         * when the `widget`'s size request didn't change but it wants to
         * reposition its contents.
         *
         * An example user of this function is `gtk_widget_set_halign()`.
         */
        queue_allocate(): void;
        /**
         * Mark `widget` as needing to recompute its expand flags. Call
         * this function when setting legacy expand child properties
         * on the child of a container.
         *
         * See `gtk_widget_compute_expand()`.
         */
        queue_compute_expand(): void;
        /**
         * Equivalent to calling `gtk_widget_queue_draw_area()` for the
         * entire area of a widget.
         */
        queue_draw(): void;
        /**
         * Convenience function that calls `gtk_widget_queue_draw_region()` on
         * the region created from the given coordinates.
         *
         * The region here is specified in widget coordinates.
         * Widget coordinates are a bit odd; for historical reasons, they are
         * defined as `widget`->window coordinates for widgets that return `true` for
         * `gtk_widget_get_has_window()`, and are relative to `widget`->allocation.x,
         * `widget`->allocation.y otherwise.
         *
         * `width` or `height` may be 0, in this case this function does
         * nothing. Negative values for `width` and `height` are not allowed.
         * @param x x coordinate of upper-left corner of rectangle to redraw
         * @param y y coordinate of upper-left corner of rectangle to redraw
         * @param width width of region to draw
         * @param height height of region to draw
         */
        queue_draw_area(x: number, y: number, width: number, height: number): void;
        /**
         * Invalidates the area of `widget` defined by `region` by calling
         * `gdk_window_invalidate_region()` on the widget’s window and all its
         * child windows. Once the main loop becomes idle (after the current
         * batch of events has been processed, roughly), the window will
         * receive expose events for the union of all regions that have been
         * invalidated.
         *
         * Normally you would only use this function in widget
         * implementations. You might also use it to schedule a redraw of a
         * {@link Gtk.DrawingArea} or some portion thereof.
         * @param region region to draw
         */
        queue_draw_region(region: cairo.Region): void;
        /**
         * This function is only for use in widget implementations.
         * Flags a widget to have its size renegotiated; should
         * be called when a widget for some reason has a new size request.
         * For example, when you change the text in a {@link Gtk.Label}, {@link Gtk.Label}
         * queues a resize to ensure there’s enough space for the new text.
         *
         * Note that you cannot call `gtk_widget_queue_resize()` on a widget
         * from inside its implementation of the GtkWidgetClass::size_allocate
         * virtual method. Calls to `gtk_widget_queue_resize()` from inside
         * GtkWidgetClass::size_allocate will be silently ignored.
         */
        queue_resize(): void;
        /**
         * This function works like `gtk_widget_queue_resize()`,
         * except that the widget is not invalidated.
         */
        queue_resize_no_redraw(): void;
        /**
         * Creates the GDK (windowing system) resources associated with a
         * widget.  For example, `widget`->window will be created when a widget
         * is realized.  Normally realization happens implicitly; if you show
         * a widget and all its parent containers, then the widget will be
         * realized and mapped automatically.
         *
         * Realizing a widget requires all
         * the widget’s parent widgets to be realized; calling
         * `gtk_widget_realize()` realizes the widget’s parents in addition to
         * `widget` itself. If a widget is not yet inside a toplevel window
         * when you realize it, bad things will happen.
         *
         * This function is primarily used in widget implementations, and
         * isn’t very useful otherwise. Many times when you think you might
         * need it, a better approach is to connect to a signal that will be
         * called after the widget is realized automatically, such as
         * {@link Gtk.Widget.SignalSignatures.draw | Gtk.Widget::draw}. Or simply g_signal_connect () to the
         * {@link Gtk.Widget.SignalSignatures.realize | Gtk.Widget::realize} signal.
         */
        realize(): void;
        /**
         * Computes the intersection of a `widget`’s area and `region`, returning
         * the intersection. The result may be empty, use `cairo_region_is_empty()` to
         * check.
         * @param region a {@link cairo.Region}, in the same coordinate system as          `widget`->allocation. That is, relative to `widget`->window          for widgets which return `false` from `gtk_widget_get_has_window()`;          relative to the parent window of `widget`->window otherwise.
         * @returns A newly allocated region holding the intersection of `widget`     and `region`.
         */
        region_intersect(region: cairo.Region): cairo.Region;
        /**
         * Registers a {@link Gdk.Window} with the widget and sets it up so that
         * the widget receives events for it. Call `gtk_widget_unregister_window()`
         * when destroying the window.
         *
         * Before 3.8 you needed to call `gdk_window_set_user_data()` directly to set
         * this up. This is now deprecated and you should use `gtk_widget_register_window()`
         * instead. Old code will keep working as is, although some new features like
         * transparency might not work perfectly.
         * @param window a {@link Gdk.Window}
         */
        register_window(window: Gdk.Window): void;
        /**
         * Removes an accelerator from `widget`, previously installed with
         * `gtk_widget_add_accelerator()`.
         * @param accel_group accel group for this widget
         * @param accel_key GDK keyval of the accelerator
         * @param accel_mods modifier key combination of the accelerator
         * @returns whether an accelerator was installed and could be removed
         */
        remove_accelerator(
            accel_group: Gtk.AccelGroup,
            accel_key: number,
            accel_mods: Gdk.ModifierType | null,
        ): boolean;
        /**
         * Removes a widget from the list of mnemonic labels for
         * this widget. (See `gtk_widget_list_mnemonic_labels()`). The widget
         * must have previously been added to the list with
         * `gtk_widget_add_mnemonic_label()`.
         * @param label a {@link Gtk.Widget} that was previously set as a mnemonic label for         `widget` with `gtk_widget_add_mnemonic_label()`.
         */
        remove_mnemonic_label(label: Gtk.Widget): void;
        /**
         * Removes a tick callback previously registered with
         * `gtk_widget_add_tick_callback()`.
         * @param id an id returned by `gtk_widget_add_tick_callback()`
         */
        remove_tick_callback(id: number): void;
        /**
         * A convenience function that uses the theme settings for `widget`
         * to look up `stock_id` and render it to a pixbuf. `stock_id` should
         * be a stock icon ID such as #GTK_STOCK_OPEN or #GTK_STOCK_OK. `size`
         * should be a size such as #GTK_ICON_SIZE_MENU. `detail` should be a
         * string that identifies the widget or code doing the rendering, so
         * that theme engines can special-case rendering for that widget or
         * code.
         *
         * The pixels in the returned {@link GdkPixbuf.Pixbuf} are shared with the rest of
         * the application and should not be modified. The pixbuf should be
         * freed after use with `g_object_unref()`.
         * @param stock_id a stock ID
         * @param size a stock size ({@link Gtk.IconSize}). A size of `(GtkIconSize)-1`     means render at the size of the source and don’t scale (if there are     multiple source sizes, GTK+ picks one of the available sizes).
         * @param detail render detail to pass to theme engine
         * @returns a new pixbuf, or `null` if the     stock ID wasn’t known
         */
        render_icon(stock_id: string, size: number, detail?: string | null): GdkPixbuf.Pixbuf | null;
        /**
         * A convenience function that uses the theme engine and style
         * settings for `widget` to look up `stock_id` and render it to
         * a pixbuf. `stock_id` should be a stock icon ID such as
         * #GTK_STOCK_OPEN or #GTK_STOCK_OK. `size` should be a size
         * such as #GTK_ICON_SIZE_MENU.
         *
         * The pixels in the returned {@link GdkPixbuf.Pixbuf} are shared with the rest of
         * the application and should not be modified. The pixbuf should be freed
         * after use with `g_object_unref()`.
         * @param stock_id a stock ID
         * @param size a stock size ({@link Gtk.IconSize}). A size of `(GtkIconSize)-1`     means render at the size of the source and don’t scale (if there are     multiple source sizes, GTK+ picks one of the available sizes).
         * @returns a new pixbuf, or `null` if the     stock ID wasn’t known
         */
        render_icon_pixbuf(stock_id: string, size: number): GdkPixbuf.Pixbuf | null;
        /**
         * Moves a widget from one {@link Gtk.Container} to another, handling reference
         * count issues to avoid destroying the widget.
         * @param new_parent a {@link Gtk.Container} to move the widget into
         */
        reparent(new_parent: Gtk.Widget): void;
        /**
         * Reset the styles of `widget` and all descendents, so when
         * they are looked up again, they get the correct values
         * for the currently loaded RC file settings.
         *
         * This function is not useful for applications.
         */
        reset_rc_styles(): void;
        /**
         * Updates the style context of `widget` and all descendants
         * by updating its widget path. `GtkContainers` may want
         * to use this on a child when reordering it in a way that a different
         * style might apply to it. See also `gtk_container_get_path_for_child()`.
         */
        reset_style(): void;
        /**
         * Very rarely-used function. This function is used to emit
         * an expose event on a widget. This function is not normally used
         * directly. The only time it is used is when propagating an expose
         * event to a windowless child widget (gtk_widget_get_has_window() is `false`),
         * and that is normally done using `gtk_container_propagate_draw()`.
         *
         * If you want to force an area of a window to be redrawn,
         * use `gdk_window_invalidate_rect()` or `gdk_window_invalidate_region()`.
         * To cause the redraw to be done immediately, follow that call
         * with a call to `gdk_window_process_updates()`.
         * @param event a expose {@link Gdk.Event}
         * @returns return from the event signal emission (`true` if   the event was handled)
         */
        send_expose(event: Gdk.Event): number;
        /**
         * Sends the focus change `event` to `widget`
         *
         * This function is not meant to be used by applications. The only time it
         * should be used is when it is necessary for a {@link Gtk.Widget} to assign focus
         * to a widget that is semantically owned by the first widget even though
         * it’s not a direct child - for instance, a search entry in a floating
         * window similar to the quick search in {@link Gtk.TreeView}.
         *
         * An example of its usage is:
         *
         *
         * ```c
         *   GdkEvent *fevent = gdk_event_new (GDK_FOCUS_CHANGE);
         *
         *   fevent->focus_change.type = GDK_FOCUS_CHANGE;
         *   fevent->focus_change.in = TRUE;
         *   fevent->focus_change.window = _gtk_widget_get_window (widget);
         *   if (fevent->focus_change.window != NULL)
         *     g_object_ref (fevent->focus_change.window);
         *
         *   gtk_widget_send_focus_change (widget, fevent);
         *
         *   gdk_event_free (event);
         * ```
         *
         * @param event a {@link Gdk.Event} of type GDK_FOCUS_CHANGE
         * @returns the return value from the event signal emission: `true`   if the event was handled, and `false` otherwise
         */
        send_focus_change(event: Gdk.Event): boolean;
        /**
         * Given an accelerator group, `accel_group`, and an accelerator path,
         * `accel_path`, sets up an accelerator in `accel_group` so whenever the
         * key binding that is defined for `accel_path` is pressed, `widget`
         * will be activated.  This removes any accelerators (for any
         * accelerator group) installed by previous calls to
         * `gtk_widget_set_accel_path()`. Associating accelerators with
         * paths allows them to be modified by the user and the modifications
         * to be saved for future use. (See `gtk_accel_map_save()`.)
         *
         * This function is a low level function that would most likely
         * be used by a menu creation system like {@link Gtk.UIManager}. If you
         * use {@link Gtk.UIManager}, setting up accelerator paths will be done
         * automatically.
         *
         * Even when you you aren’t using {@link Gtk.UIManager}, if you only want to
         * set up accelerators on menu items `gtk_menu_item_set_accel_path()`
         * provides a somewhat more convenient interface.
         *
         * Note that `accel_path` string will be stored in a {@link GLib.Quark}. Therefore, if you
         * pass a static string, you can save some memory by interning it first with
         * `g_intern_static_string()`.
         * @param accel_path path used to look up the accelerator
         * @param accel_group a {@link Gtk.AccelGroup}.
         */
        set_accel_path(accel_path?: string | null, accel_group?: Gtk.AccelGroup | null): void;
        /**
         * Sets the widget’s allocation.  This should not be used
         * directly, but from within a widget’s size_allocate method.
         *
         * The allocation set should be the “adjusted” or actual
         * allocation. If you’re implementing a {@link Gtk.Container}, you want to use
         * `gtk_widget_size_allocate()` instead of `gtk_widget_set_allocation()`.
         * The GtkWidgetClass::adjust_size_allocation virtual method adjusts the
         * allocation inside `gtk_widget_size_allocate()` to create an adjusted
         * allocation.
         * @param allocation a pointer to a {@link Gtk.Allocation} to copy from
         */
        set_allocation(allocation: Gtk.Allocation): void;
        /**
         * Sets whether the application intends to draw on the widget in
         * an {@link Gtk.Widget.SignalSignatures.draw | Gtk.Widget::draw} handler.
         *
         * This is a hint to the widget and does not affect the behavior of
         * the GTK+ core; many widgets ignore this flag entirely. For widgets
         * that do pay attention to the flag, such as {@link Gtk.EventBox} and {@link Gtk.Window},
         * the effect is to suppress default themed drawing of the widget's
         * background. (Children of the widget will still be drawn.) The application
         * is then entirely responsible for drawing the widget background.
         *
         * Note that the background is still drawn when the widget is mapped.
         * @param app_paintable `true` if the application will paint on the widget
         */
        set_app_paintable(app_paintable: boolean): void;
        /**
         * Specifies whether `widget` can be a default widget. See
         * `gtk_widget_grab_default()` for details about the meaning of
         * “default”.
         * @param can_default whether or not `widget` can be a default widget.
         */
        set_can_default(can_default: boolean): void;
        /**
         * Specifies whether `widget` can own the input focus. See
         * `gtk_widget_grab_focus()` for actually setting the input focus on a
         * widget.
         * @param can_focus whether or not `widget` can own the input focus.
         */
        set_can_focus(can_focus: boolean): void;
        /**
         * Sets whether `widget` should be mapped along with its when its parent
         * is mapped and `widget` has been shown with `gtk_widget_show()`.
         *
         * The child visibility can be set for widget before it is added to
         * a container with `gtk_widget_set_parent()`, to avoid mapping
         * children unnecessary before immediately unmapping them. However
         * it will be reset to its default state of `true` when the widget
         * is removed from a container.
         *
         * Note that changing the child visibility of a widget does not
         * queue a resize on the widget. Most of the time, the size of
         * a widget is computed from all visible children, whether or
         * not they are mapped. If this is not the case, the container
         * can queue a resize itself.
         *
         * This function is only useful for container implementations and
         * never should be called by an application.
         * @param is_visible if `true`, `widget` should be mapped along with its parent.
         */
        set_child_visible(is_visible: boolean): void;
        /**
         * Sets the widget’s clip.  This must not be used directly,
         * but from within a widget’s size_allocate method.
         * It must be called after `gtk_widget_set_allocation()` (or after chaining up
         * to the parent class), because that function resets the clip.
         *
         * The clip set should be the area that `widget` draws on. If `widget` is a
         * {@link Gtk.Container}, the area must contain all children's clips.
         *
         * If this function is not called by `widget` during a ::size-allocate handler,
         * the clip will be set to `widget`'s allocation.
         * @param clip a pointer to a {@link Gtk.Allocation} to copy from
         */
        set_clip(clip: Gtk.Allocation): void;
        /**
         * Sets a widgets composite name. The widget must be
         * a composite child of its parent; see `gtk_widget_push_composite_child()`.
         * @param name the name to set
         */
        set_composite_name(name: string): void;
        /**
         * Enables or disables a {@link Gdk.Device} to interact with `widget`
         * and all its children.
         *
         * It does so by descending through the {@link Gdk.Window} hierarchy
         * and enabling the same mask that is has for core events
         * (i.e. the one that `gdk_window_get_events()` returns).
         * @param device a {@link Gdk.Device}
         * @param enabled whether to enable the device
         */
        set_device_enabled(device: Gdk.Device, enabled: boolean): void;
        /**
         * Sets the device event mask (see {@link Gdk.EventMask}) for a widget. The event
         * mask determines which events a widget will receive from `device`. Keep
         * in mind that different widgets have different default event masks, and by
         * changing the event mask you may disrupt a widget’s functionality,
         * so be careful. This function must be called while a widget is
         * unrealized. Consider `gtk_widget_add_device_events()` for widgets that are
         * already realized, or if you want to preserve the existing event
         * mask. This function can’t be used with windowless widgets (which return
         * `false` from `gtk_widget_get_has_window()`);
         * to get events on those widgets, place them inside a {@link Gtk.EventBox}
         * and receive events on the event box.
         * @param device a {@link Gdk.Device}
         * @param events event mask
         */
        set_device_events(device: Gdk.Device, events: Gdk.EventMask | null): void;
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
        set_direction(dir: Gtk.TextDirection | null): void;
        /**
         * @param args
         */
        // Conflicted with Gtk.MenuButton.set_direction
        set_direction(...args: never[]): any;
        /**
         * Widgets are double buffered by default; you can use this function
         * to turn off the buffering. “Double buffered” simply means that
         * `gdk_window_begin_draw_frame()` and `gdk_window_end_draw_frame()` are called
         * automatically around expose events sent to the
         * widget. `gdk_window_begin_draw_frame()` diverts all drawing to a widget's
         * window to an offscreen buffer, and `gdk_window_end_draw_frame()` draws the
         * buffer to the screen. The result is that users see the window
         * update in one smooth step, and don’t see individual graphics
         * primitives being rendered.
         *
         * In very simple terms, double buffered widgets don’t flicker,
         * so you would only use this function to turn off double buffering
         * if you had special needs and really knew what you were doing.
         *
         * Note: if you turn off double-buffering, you have to handle
         * expose events, since even the clearing to the background color or
         * pixmap will not happen automatically (as it is done in
         * `gdk_window_begin_draw_frame()`).
         *
         * In 3.10 GTK and GDK have been restructured for translucent drawing. Since
         * then expose events for double-buffered widgets are culled into a single
         * event to the toplevel GDK window. If you now unset double buffering, you
         * will cause a separate rendering pass for every widget. This will likely
         * cause rendering problems - in particular related to stacking - and usually
         * increases rendering times significantly.
         * @param double_buffered `true` to double-buffer a widget
         */
        set_double_buffered(double_buffered: boolean): void;
        /**
         * Sets the event mask (see {@link Gdk.EventMask}) for a widget. The event
         * mask determines which events a widget will receive. Keep in mind
         * that different widgets have different default event masks, and by
         * changing the event mask you may disrupt a widget’s functionality,
         * so be careful. This function must be called while a widget is
         * unrealized. Consider `gtk_widget_add_events()` for widgets that are
         * already realized, or if you want to preserve the existing event
         * mask. This function can’t be used with widgets that have no window.
         * (See `gtk_widget_get_has_window()`).  To get events on those widgets,
         * place them inside a {@link Gtk.EventBox} and receive events on the event
         * box.
         * @param events event mask
         */
        set_events(events: number): void;
        /**
         * Sets whether the widget should grab focus when it is clicked with the mouse.
         * Making mouse clicks not grab focus is useful in places like toolbars where
         * you don’t want the keyboard focus removed from the main area of the
         * application.
         * @param focus_on_click whether the widget should grab focus when clicked with the mouse
         */
        set_focus_on_click(focus_on_click: boolean): void;
        /**
         * Sets the font map to use for Pango rendering. When not set, the widget
         * will inherit the font map from its parent.
         * @param font_map a {@link Pango.FontMap}, or `null` to unset any previously     set font map
         */
        set_font_map(font_map?: Pango.FontMap | null): void;
        /**
         * Sets the {@link cairo.FontOptions} used for Pango rendering in this widget.
         * When not set, the default font options for the {@link Gdk.Screen} will be used.
         * @param options a {@link cairo.FontOptions}, or `null` to unset any   previously set default font options.
         */
        set_font_options(options?: cairo.FontOptions | null): void;
        /**
         * Sets the horizontal alignment of `widget`.
         * See the {@link Gtk.Widget.halign} property.
         * @param align the horizontal alignment
         */
        set_halign(align: Gtk.Align | null): void;
        /**
         * Sets the has-tooltip property on `widget` to `has_tooltip`.  See
         * {@link Gtk.Widget.has_tooltip} for more information.
         * @param has_tooltip whether or not `widget` has a tooltip.
         */
        set_has_tooltip(has_tooltip: boolean): void;
        /**
         * Specifies whether `widget` has a {@link Gdk.Window} of its own. Note that
         * all realized widgets have a non-`null` “window” pointer
         * (gtk_widget_get_window() never returns a `null` window when a widget
         * is realized), but for many of them it’s actually the {@link Gdk.Window} of
         * one of its parent widgets. Widgets that do not create a %window for
         * themselves in {@link Gtk.Widget.SignalSignatures.realize | Gtk.Widget::realize} must announce this by
         * calling this function with `has_window` = `false`.
         *
         * This function should only be called by widget implementations,
         * and they should call it in their `init()` function.
         * @param has_window whether or not `widget` has a window.
         */
        set_has_window(has_window: boolean): void;
        /**
         * Sets whether the widget would like any available extra horizontal
         * space. When a user resizes a {@link Gtk.Window}, widgets with expand=TRUE
         * generally receive the extra space. For example, a list or
         * scrollable area or document in your window would often be set to
         * expand.
         *
         * Call this function to set the expand flag if you would like your
         * widget to become larger horizontally when the window has extra
         * room.
         *
         * By default, widgets automatically expand if any of their children
         * want to expand. (To see if a widget will automatically expand given
         * its current children and state, call `gtk_widget_compute_expand()`. A
         * container can decide how the expandability of children affects the
         * expansion of the container by overriding the compute_expand virtual
         * method on {@link Gtk.Widget}.).
         *
         * Setting hexpand explicitly with this function will override the
         * automatic expand behavior.
         *
         * This function forces the widget to expand or not to expand,
         * regardless of children.  The override occurs because
         * `gtk_widget_set_hexpand()` sets the hexpand-set property (see
         * `gtk_widget_set_hexpand_set()`) which causes the widget’s hexpand
         * value to be used, rather than looking at children and widget state.
         * @param expand whether to expand
         */
        set_hexpand(expand: boolean): void;
        /**
         * Sets whether the hexpand flag (see `gtk_widget_get_hexpand()`) will
         * be used.
         *
         * The hexpand-set property will be set automatically when you call
         * `gtk_widget_set_hexpand()` to set hexpand, so the most likely
         * reason to use this function would be to unset an explicit expand
         * flag.
         *
         * If hexpand is set, then it overrides any computed
         * expand value based on child widgets. If hexpand is not
         * set, then the expand value depends on whether any
         * children of the widget would like to expand.
         *
         * There are few reasons to use this function, but it’s here
         * for completeness and consistency.
         * @param set value for hexpand-set property
         */
        set_hexpand_set(set: boolean): void;
        /**
         * Marks the widget as being mapped.
         *
         * This function should only ever be called in a derived widget's
         * “map” or “unmap” implementation.
         * @param mapped `true` to mark the widget as mapped
         */
        set_mapped(mapped: boolean): void;
        /**
         * Sets the bottom margin of `widget`.
         * See the {@link Gtk.Widget.margin_bottom} property.
         * @param margin the bottom margin
         */
        set_margin_bottom(margin: number): void;
        /**
         * Sets the end margin of `widget`.
         * See the {@link Gtk.Widget.margin_end} property.
         * @param margin the end margin
         */
        set_margin_end(margin: number): void;
        /**
         * Sets the left margin of `widget`.
         * See the {@link Gtk.Widget.margin_left} property.
         * @param margin the left margin
         */
        set_margin_left(margin: number): void;
        /**
         * Sets the right margin of `widget`.
         * See the {@link Gtk.Widget.margin_right} property.
         * @param margin the right margin
         */
        set_margin_right(margin: number): void;
        /**
         * Sets the start margin of `widget`.
         * See the {@link Gtk.Widget.margin_start} property.
         * @param margin the start margin
         */
        set_margin_start(margin: number): void;
        /**
         * Sets the top margin of `widget`.
         * See the {@link Gtk.Widget.margin_top} property.
         * @param margin the top margin
         */
        set_margin_top(margin: number): void;
        /**
         * Widgets can be named, which allows you to refer to them from a
         * CSS file. You can apply a style to widgets with a particular name
         * in the CSS file. See the documentation for the CSS syntax (on the
         * same page as the docs for {@link Gtk.StyleContext}).
         *
         * Note that the CSS syntax has certain special characters to delimit
         * and represent elements in a selector (period, #, >, *...), so using
         * these will make your widget impossible to match by name. Any combination
         * of alphanumeric symbols, dashes and underscores will suffice.
         * @param name name for the widget
         */
        set_name(name: string): void;
        /**
         * Sets the {@link Gtk.Widget.no_show_all} property, which determines whether
         * calls to `gtk_widget_show_all()` will affect this widget.
         *
         * This is mostly for use in constructing widget hierarchies with externally
         * controlled visibility, see {@link Gtk.UIManager}.
         * @param no_show_all the new value for the “no-show-all” property
         */
        set_no_show_all(no_show_all: boolean): void;
        /**
         * Request the `widget` to be rendered partially transparent,
         * with opacity 0 being fully transparent and 1 fully opaque. (Opacity values
         * are clamped to the [0,1] range.).
         * This works on both toplevel widget, and child widgets, although there
         * are some limitations:
         *
         * For toplevel widgets this depends on the capabilities of the windowing
         * system. On X11 this has any effect only on X screens with a compositing manager
         * running. See `gtk_widget_is_composited()`. On Windows it should work
         * always, although setting a window’s opacity after the window has been
         * shown causes it to flicker once on Windows.
         *
         * For child widgets it doesn’t work if any affected widget has a native window, or
         * disables double buffering.
         * @param opacity desired opacity, between 0 and 1
         */
        set_opacity(opacity: number): void;
        /**
         * This function is useful only when implementing subclasses of
         * {@link Gtk.Container}.
         * Sets the container as the parent of `widget`, and takes care of
         * some details such as updating the state and style of the child
         * to reflect its new location. The opposite function is
         * `gtk_widget_unparent()`.
         * @param parent parent container
         */
        set_parent(parent: Gtk.Widget): void;
        /**
         * Sets a non default parent window for `widget`.
         *
         * For {@link Gtk.Window} classes, setting a `parent_window` effects whether
         * the window is a toplevel window or can be embedded into other
         * widgets.
         *
         * For {@link Gtk.Window} classes, this needs to be called before the
         * window is realized.
         * @param parent_window the new parent window.
         */
        set_parent_window(parent_window: Gdk.Window): void;
        /**
         * Marks the widget as being realized. This function must only be
         * called after all `GdkWindows` for the `widget` have been created
         * and registered.
         *
         * This function should only ever be called in a derived widget's
         * “realize” or “unrealize” implementation.
         * @param realized `true` to mark the widget as realized
         */
        set_realized(realized: boolean): void;
        /**
         * Specifies whether `widget` will be treated as the default widget
         * within its toplevel when it has the focus, even if another widget
         * is the default.
         *
         * See `gtk_widget_grab_default()` for details about the meaning of
         * “default”.
         * @param receives_default whether or not `widget` can be a default widget.
         */
        set_receives_default(receives_default: boolean): void;
        /**
         * Sets whether the entire widget is queued for drawing when its size
         * allocation changes. By default, this setting is `true` and
         * the entire widget is redrawn on every size change. If your widget
         * leaves the upper left unchanged when made bigger, turning this
         * setting off will improve performance.
         *
         * Note that for widgets where `gtk_widget_get_has_window()` is `false`
         * setting this flag to `false` turns off all allocation on resizing:
         * the widget will not even redraw if its position changes; this is to
         * allow containers that don’t draw anything to avoid excess
         * invalidations. If you set this flag on a widget with no window that
         * does draw on `widget`->window, you are
         * responsible for invalidating both the old and new allocation of the
         * widget when the widget is moved and responsible for invalidating
         * regions newly when the widget increases size.
         * @param redraw_on_allocate if `true`, the entire widget will be redrawn   when it is allocated to a new size. Otherwise, only the   new portion of the widget will be redrawn.
         */
        set_redraw_on_allocate(redraw_on_allocate: boolean): void;
        /**
         * Sets the sensitivity of a widget. A widget is sensitive if the user
         * can interact with it. Insensitive widgets are “grayed out” and the
         * user can’t interact with them. Insensitive widgets are known as
         * “inactive”, “disabled”, or “ghosted” in some other toolkits.
         * @param sensitive `true` to make the widget sensitive
         */
        set_sensitive(sensitive: boolean): void;
        /**
         * Sets the minimum size of a widget; that is, the widget’s size
         * request will be at least `width` by `height`. You can use this
         * function to force a widget to be larger than it normally would be.
         *
         * In most cases, `gtk_window_set_default_size()` is a better choice for
         * toplevel windows than this function; setting the default size will
         * still allow users to shrink the window. Setting the size request
         * will force them to leave the window at least as large as the size
         * request. When dealing with window sizes,
         * `gtk_window_set_geometry_hints()` can be a useful function as well.
         *
         * Note the inherent danger of setting any fixed size - themes,
         * translations into other languages, different fonts, and user action
         * can all change the appropriate size for a given widget. So, it's
         * basically impossible to hardcode a size that will always be
         * correct.
         *
         * The size request of a widget is the smallest size a widget can
         * accept while still functioning well and drawing itself correctly.
         * However in some strange cases a widget may be allocated less than
         * its requested size, and in many cases a widget may be allocated more
         * space than it requested.
         *
         * If the size request in a given direction is -1 (unset), then
         * the “natural” size request of the widget will be used instead.
         *
         * The size request set here does not include any margin from the
         * {@link Gtk.Widget} properties margin-left, margin-right, margin-top, and
         * margin-bottom, but it does include pretty much all other padding
         * or border properties set by any subclass of {@link Gtk.Widget}.
         * @param width width `widget` should request, or -1 to unset
         * @param height height `widget` should request, or -1 to unset
         */
        set_size_request(width: number, height: number): void;
        /**
         * This function is for use in widget implementations. Sets the state
         * of a widget (insensitive, prelighted, etc.) Usually you should set
         * the state using wrapper functions such as `gtk_widget_set_sensitive()`.
         * @param state new state for `widget`
         */
        set_state(state: Gtk.StateType | null): void;
        /**
         * This function is for use in widget implementations. Turns on flag
         * values in the current widget state (insensitive, prelighted, etc.).
         *
         * This function accepts the values {@link Gtk.StateFlags.DIR_LTR} and
         * {@link Gtk.StateFlags.DIR_RTL} but ignores them. If you want to set the widget's
         * direction, use `gtk_widget_set_direction()`.
         *
         * It is worth mentioning that any other state than {@link Gtk.StateFlags.INSENSITIVE},
         * will be propagated down to all non-internal children if `widget` is a
         * {@link Gtk.Container}, while {@link Gtk.StateFlags.INSENSITIVE} itself will be propagated
         * down to all {@link Gtk.Container} children by different means than turning on the
         * state flag down the hierarchy, both `gtk_widget_get_state_flags()` and
         * `gtk_widget_is_sensitive()` will make use of these.
         * @param flags State flags to turn on
         * @param clear Whether to clear state before turning on `flags`
         */
        set_state_flags(flags: Gtk.StateFlags | null, clear: boolean): void;
        /**
         * Used to set the {@link Gtk.Style} for a widget (`widget`->style). Since
         * GTK 3, this function does nothing, the passed in style is ignored.
         * @param style a {@link Gtk.Style}, or `null` to remove the effect     of a previous call to `gtk_widget_set_style()` and go back to     the default style
         */
        set_style(style?: Gtk.Style | null): void;
        /**
         * Enables or disables multiple pointer awareness. If this setting is `true`,
         * `widget` will start receiving multiple, per device enter/leave events. Note
         * that if custom `GdkWindows` are created in {@link Gtk.Widget.SignalSignatures.realize | Gtk.Widget::realize},
         * `gdk_window_set_support_multidevice()` will have to be called manually on them.
         * @param support_multidevice `true` to support input from multiple devices.
         */
        set_support_multidevice(support_multidevice: boolean): void;
        /**
         * Sets `markup` as the contents of the tooltip, which is marked up with
         *  the [Pango text markup language][PangoMarkupFormat].
         *
         * This function will take care of setting {@link Gtk.Widget.has_tooltip} to `true`
         * and of the default handler for the {@link Gtk.Widget.SignalSignatures.query_tooltip | Gtk.Widget::query-tooltip} signal.
         *
         * See also the {@link Gtk.Widget.tooltip_markup} property and
         * `gtk_tooltip_set_markup()`.
         * @param markup the contents of the tooltip for `widget`, or `null`
         */
        set_tooltip_markup(markup?: string | null): void;
        /**
         * Sets `text` as the contents of the tooltip. This function will take
         * care of setting {@link Gtk.Widget.has_tooltip} to `true` and of the default
         * handler for the {@link Gtk.Widget.SignalSignatures.query_tooltip | Gtk.Widget::query-tooltip} signal.
         *
         * See also the {@link Gtk.Widget.tooltip_text} property and `gtk_tooltip_set_text()`.
         * @param text the contents of the tooltip for `widget`
         */
        set_tooltip_text(text?: string | null): void;
        /**
         * Replaces the default window used for displaying
         * tooltips with `custom_window`. GTK+ will take care of showing and
         * hiding `custom_window` at the right moment, to behave likewise as
         * the default tooltip window. If `custom_window` is `null`, the default
         * tooltip window will be used.
         * @param custom_window a {@link Gtk.Window}, or `null`
         */
        set_tooltip_window(custom_window?: Gtk.Window | null): void;
        /**
         * Sets the vertical alignment of `widget`.
         * See the {@link Gtk.Widget.valign} property.
         * @param align the vertical alignment
         */
        set_valign(align: Gtk.Align | null): void;
        /**
         * Sets whether the widget would like any available extra vertical
         * space.
         *
         * See `gtk_widget_set_hexpand()` for more detail.
         * @param expand whether to expand
         */
        set_vexpand(expand: boolean): void;
        /**
         * Sets whether the vexpand flag (see `gtk_widget_get_vexpand()`) will
         * be used.
         *
         * See `gtk_widget_set_hexpand_set()` for more detail.
         * @param set value for vexpand-set property
         */
        set_vexpand_set(set: boolean): void;
        /**
         * Sets the visibility state of `widget`. Note that setting this to
         * `true` doesn’t mean the widget is actually viewable, see
         * `gtk_widget_get_visible()`.
         *
         * This function simply calls `gtk_widget_show()` or `gtk_widget_hide()`
         * but is nicer to use when the visibility of the widget depends on
         * some condition.
         * @param visible whether the widget should be shown or not
         */
        set_visible(visible: boolean): void;
        /**
         * Sets the visual that should be used for by widget and its children for
         * creating `GdkWindows`. The visual must be on the same {@link Gdk.Screen} as
         * returned by `gtk_widget_get_screen()`, so handling the
         * {@link Gtk.Widget.SignalSignatures.screen_changed | Gtk.Widget::screen-changed} signal is necessary.
         *
         * Setting a new `visual` will not cause `widget` to recreate its windows,
         * so you should call this function before `widget` is realized.
         * @param visual visual to be used or `null` to unset a previous one
         */
        set_visual(visual?: Gdk.Visual | null): void;
        /**
         * Sets a widget’s window. This function should only be used in a
         * widget’s {@link Gtk.Widget.SignalSignatures.realize | Gtk.Widget::realize} implementation. The %window passed is
         * usually either new window created with `gdk_window_new()`, or the
         * window of its parent widget as returned by
         * `gtk_widget_get_parent_window()`.
         *
         * Widgets must indicate whether they will create their own {@link Gdk.Window}
         * by calling `gtk_widget_set_has_window()`. This is usually done in the
         * widget’s `init()` function.
         *
         * Note that this function does not add any reference to `window`.
         * @param window a {@link Gdk.Window}
         */
        set_window(window: Gdk.Window): void;
        /**
         * Sets a shape for this widget’s GDK window. This allows for
         * transparent windows etc., see `gdk_window_shape_combine_region()`
         * for more information.
         * @param region shape to be added, or `null` to remove an existing shape
         */
        shape_combine_region(region?: cairo.Region | null): void;
        /**
         * Flags a widget to be displayed. Any widget that isn’t shown will
         * not appear on the screen. If you want to show all the widgets in a
         * container, it’s easier to call `gtk_widget_show_all()` on the
         * container, instead of individually showing the widgets.
         *
         * Remember that you have to show the containers containing a widget,
         * in addition to the widget itself, before it will appear onscreen.
         *
         * When a toplevel container is shown, it is immediately realized and
         * mapped; other shown widgets are realized and mapped when their
         * toplevel container is realized and mapped.
         */
        show(): void;
        /**
         * Recursively shows a widget, and any child widgets (if the widget is
         * a container).
         */
        show_all(): void;
        /**
         * Shows a widget. If the widget is an unmapped toplevel widget
         * (i.e. a {@link Gtk.Window} that has not yet been shown), enter the main
         * loop and wait for the window to actually be mapped. Be careful;
         * because the main loop is running, anything can happen during
         * this function.
         */
        show_now(): void;
        /**
         * This function is only used by {@link Gtk.Container} subclasses, to assign a size
         * and position to their child widgets.
         *
         * In this function, the allocation may be adjusted. It will be forced
         * to a 1x1 minimum size, and the adjust_size_allocation virtual
         * method on the child will be used to adjust the allocation. Standard
         * adjustments include removing the widget’s margins, and applying the
         * widget’s {@link Gtk.Widget.halign} and {@link Gtk.Widget.valign} properties.
         *
         * For baseline support in containers you need to use `gtk_widget_size_allocate_with_baseline()`
         * instead.
         * @param allocation position and size to be allocated to `widget`
         */
        size_allocate(allocation: Gtk.Allocation): void;
        /**
         * This function is only used by {@link Gtk.Container} subclasses, to assign a size,
         * position and (optionally) baseline to their child widgets.
         *
         * In this function, the allocation and baseline may be adjusted. It
         * will be forced to a 1x1 minimum size, and the
         * adjust_size_allocation virtual and adjust_baseline_allocation
         * methods on the child will be used to adjust the allocation and
         * baseline. Standard adjustments include removing the widget's
         * margins, and applying the widget’s {@link Gtk.Widget.halign} and
         * {@link Gtk.Widget.valign} properties.
         *
         * If the child widget does not have a valign of {@link Gtk.Align.BASELINE} the
         * baseline argument is ignored and -1 is used instead.
         * @param allocation position and size to be allocated to `widget`
         * @param baseline The baseline of the child, or -1
         */
        size_allocate_with_baseline(allocation: Gtk.Allocation, baseline: number): void;
        /**
         * This function is typically used when implementing a {@link Gtk.Container}
         * subclass.  Obtains the preferred size of a widget. The container
         * uses this information to arrange its child widgets and decide what
         * size allocations to give them with `gtk_widget_size_allocate()`.
         *
         * You can also call this function from an application, with some
         * caveats. Most notably, getting a size request requires the widget
         * to be associated with a screen, because font information may be
         * needed. Multihead-aware applications should keep this in mind.
         *
         * Also remember that the size request is not necessarily the size
         * a widget will actually be allocated.
         */
        size_request(): Gtk.Requisition;
        /**
         * This function attaches the widget’s {@link Gtk.Style} to the widget's
         * {@link Gdk.Window}. It is a replacement for
         *
         *
         * ```
         * widget->style = gtk_style_attach (widget->style, widget->window);
         * ```
         *
         *
         * and should only ever be called in a derived widget’s “realize”
         * implementation which does not chain up to its parent class'
         * “realize” implementation, because one of the parent classes
         * (finally {@link Gtk.Widget}) would attach the style itself.
         */
        style_attach(): void;
        /**
         * Gets the value of a style property of `widget`.
         * @param property_name the name of a style property
         * @param value location to return the property value
         */
        style_get_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Reverts the effect of a previous call to `gtk_widget_freeze_child_notify()`.
         * This causes all queued {@link Gtk.Widget.SignalSignatures.child_notify | Gtk.Widget::child-notify} signals on `widget` to be
         * emitted.
         */
        thaw_child_notify(): void;
        /**
         * Translate coordinates relative to `src_widget`’s allocation to coordinates
         * relative to `dest_widget`’s allocations. In order to perform this
         * operation, both widgets must be realized, and must share a common
         * toplevel.
         * @param dest_widget a {@link Gtk.Widget}
         * @param src_x X position relative to `src_widget`
         * @param src_y Y position relative to `src_widget`
         * @returns `false` if either widget was not realized, or there   was no common ancestor. In this case, nothing is stored in   *`dest_x` and *`dest_y`. Otherwise `true`.
         */
        translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [boolean, number, number];
        /**
         * Triggers a tooltip query on the display where the toplevel of `widget`
         * is located. See `gtk_tooltip_trigger_tooltip_query()` for more
         * information.
         */
        trigger_tooltip_query(): void;
        /**
         * This function is only for use in widget implementations. Causes
         * a widget to be unmapped if it’s currently mapped.
         */
        unmap(): void;
        /**
         * This function is only for use in widget implementations.
         * Should be called by implementations of the remove method
         * on {@link Gtk.Container}, to dissociate a child from the container.
         */
        unparent(): void;
        /**
         * This function is only useful in widget implementations.
         * Causes a widget to be unrealized (frees all GDK resources
         * associated with the widget, such as `widget`->window).
         */
        unrealize(): void;
        /**
         * Unregisters a {@link Gdk.Window} from the widget that was previously set up with
         * `gtk_widget_register_window()`. You need to call this when the window is
         * no longer used by the widget, such as when you destroy it.
         * @param window a {@link Gdk.Window}
         */
        unregister_window(window: Gdk.Window): void;
        /**
         * This function is for use in widget implementations. Turns off flag
         * values for the current widget state (insensitive, prelighted, etc.).
         * See `gtk_widget_set_state_flags()`.
         * @param flags State flags to turn off
         */
        unset_state_flags(flags: Gtk.StateFlags | null): void;
        /**
         * @param baseline
         * @virtual
         */
        vfunc_adjust_baseline_allocation(baseline: number): void;
        /**
         * @param minimum_baseline
         * @param natural_baseline
         * @virtual
         */
        vfunc_adjust_baseline_request(minimum_baseline: number, natural_baseline: number): void;
        /**
         * Convert an initial size allocation assigned
         *   by a {@link Gtk.Container} using `gtk_widget_size_allocate()`, into an actual
         *   size allocation to be used by the widget. adjust_size_allocation
         *   adjusts to a child widget’s actual allocation
         *   from what a parent container computed for the
         *   child. The adjusted allocation must be entirely within the original
         *   allocation. In any custom implementation, chain up to the default
         *   {@link Gtk.Widget} implementation of this method, which applies the margin
         *   and alignment properties of {@link Gtk.Widget}. Chain up
         *   before performing your own adjustments so your
         *   own adjustments remove more allocation after the {@link Gtk.Widget} base
         *   class has already removed margin and alignment. The natural size
         *   passed in should be adjusted in the same way as the allocated size,
         *   which allows adjustments to perform alignments or other changes
         *   based on natural size.
         * @param orientation
         * @param minimum_size
         * @param natural_size
         * @param allocated_pos
         * @param allocated_size
         * @virtual
         */
        vfunc_adjust_size_allocation(
            orientation: Gtk.Orientation,
            minimum_size: number,
            natural_size: number,
            allocated_pos: number,
            allocated_size: number,
        ): void;
        /**
         * Convert an initial size request from a widget's
         *   {@link Gtk.SizeRequestMode} virtual method implementations into a size request to
         *   be used by parent containers in laying out the widget.
         *   adjust_size_request adjusts from a child widget's
         *   original request to what a parent container should
         *   use for layout. The `for_size` argument will be -1 if the request should
         *   not be for a particular size in the opposing orientation, i.e. if the
         *   request is not height-for-width or width-for-height. If `for_size` is
         *   greater than -1, it is the proposed allocation in the opposing
         *   orientation that we need the request for. Implementations of
         *   adjust_size_request should chain up to the default implementation,
         *   which applies {@link Gtk.Widget}’s margin properties and imposes any values
         *   from `gtk_widget_set_size_request()`. Chaining up should be last,
         *   after your subclass adjusts the request, so
         *   {@link Gtk.Widget} can apply constraints and add the margin properly.
         * @param orientation
         * @param minimum_size
         * @param natural_size
         * @virtual
         */
        vfunc_adjust_size_request(orientation: Gtk.Orientation, minimum_size: number, natural_size: number): void;
        /**
         * Signal will be emitted when a button
         *   (typically from a mouse) is pressed.
         * @param event
         * @virtual
         */
        vfunc_button_press_event(event: Gdk.EventButton): boolean;
        /**
         * Signal will be emitted when a button
         *   (typically from a mouse) is released.
         * @param event
         * @virtual
         */
        vfunc_button_release_event(event: Gdk.EventButton): boolean;
        /**
         * Determines whether an accelerator that activates the signal
         * identified by `signal_id` can currently be activated.
         * This is done by emitting the {@link Gtk.Widget.SignalSignatures.can_activate_accel | Gtk.Widget::can-activate-accel}
         * signal on `widget`; if the signal isn’t overridden by a
         * handler or in a derived widget, then the default check is
         * that the widget must be sensitive, and the widget and all
         * its ancestors mapped.
         * @param signal_id the ID of a signal installed on `widget`
         * @virtual
         */
        vfunc_can_activate_accel(signal_id: number): boolean;
        /**
         * Emits a {@link Gtk.Widget.SignalSignatures.child_notify | Gtk.Widget::child-notify} signal for the
         * [child property][child-properties] `child_property`
         * on `widget`.
         *
         * This is the analogue of `g_object_notify()` for child properties.
         *
         * Also see `gtk_container_child_notify()`.
         * @param child_property the name of a child property installed on the                  class of `widget`’s parent
         * @virtual
         */
        vfunc_child_notify(child_property: GObject.ParamSpec): void;
        /**
         * Signal emitted when the composited status of
         *   widgets screen changes. See `gdk_screen_is_composited()`.
         * @virtual
         */
        vfunc_composited_changed(): void;
        /**
         * Computes whether a container should give this
         *   widget extra space when possible.
         * @param hexpand_p
         * @param vexpand_p
         * @virtual
         */
        vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void;
        /**
         * Signal will be emitted when the size, position or
         *   stacking of the widget’s window has changed.
         * @param event
         * @virtual
         */
        vfunc_configure_event(event: Gdk.EventConfigure): boolean;
        /**
         * Signal emitted when a redirected window belonging to
         *   widget gets drawn into.
         * @param event
         * @virtual
         */
        vfunc_damage_event(event: Gdk.EventExpose): boolean;
        /**
         * Signal emitted if a user requests that a toplevel
         *   window is closed.
         * @param event
         * @virtual
         */
        vfunc_delete_event(event: Gdk.EventAny): boolean;
        /**
         * Destroys a widget.
         *
         * When a widget is destroyed all references it holds on other objects
         * will be released:
         *
         *  - if the widget is inside a container, it will be removed from its
         *  parent
         *  - if the widget is a container, all its children will be destroyed,
         *  recursively
         *  - if the widget is a top level, it will be removed from the list
         *  of top level widgets that GTK+ maintains internally
         *
         * It's expected that all references held on the widget will also
         * be released; you should connect to the {@link Gtk.Widget.SignalSignatures.destroy | Gtk.Widget::destroy} signal
         * if you hold a reference to `widget` and you wish to remove it when
         * this function is called. It is not necessary to do so if you are
         * implementing a {@link Gtk.Container}, as you'll be able to use the
         * {@link Gtk.ContainerClass}.remove() virtual function for that.
         *
         * It's important to notice that `gtk_widget_destroy()` will only cause
         * the `widget` to be finalized if no additional references, acquired
         * using `g_object_ref()`, are held on it. In case additional references
         * are in place, the `widget` will be in an "inert" state after calling
         * this function; `widget` will still point to valid memory, allowing you
         * to release the references you hold, but you may not query the widget's
         * own state.
         *
         * You should typically call this function on top level widgets, and
         * rarely on child widgets.
         *
         * See also: `gtk_container_remove()`
         * @virtual
         */
        vfunc_destroy(): void;
        /**
         * Signal is emitted when a {@link Gdk.Window} is destroyed.
         * @param event
         * @virtual
         */
        vfunc_destroy_event(event: Gdk.EventAny): boolean;
        /**
         * Signal emitted when the text direction of a
         *   widget changes.
         * @param previous_direction
         * @virtual
         */
        vfunc_direction_changed(previous_direction: Gtk.TextDirection): void;
        /**
         * Seldomly overidden.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_child_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * Signal emitted on the drag source when a drag is
         *   started.
         * @param context
         * @virtual
         */
        vfunc_drag_begin(context: Gdk.DragContext): void;
        /**
         * Signal emitted on the drag source when a drag
         *   with the action {@link Gdk.DragAction.MOVE} is successfully completed.
         * @param context
         * @virtual
         */
        vfunc_drag_data_delete(context: Gdk.DragContext): void;
        /**
         * Signal emitted on the drag source when the drop
         *   site requests the data which is dragged.
         * @param context
         * @param selection_data
         * @param info
         * @param time_
         * @virtual
         */
        vfunc_drag_data_get(
            context: Gdk.DragContext,
            selection_data: Gtk.SelectionData,
            info: number,
            time_: number,
        ): void;
        /**
         * Signal emitted on the drop site when the
         *   dragged data has been received.
         * @param context
         * @param x
         * @param y
         * @param selection_data
         * @param info
         * @param time_
         * @virtual
         */
        vfunc_drag_data_received(
            context: Gdk.DragContext,
            x: number,
            y: number,
            selection_data: Gtk.SelectionData,
            info: number,
            time_: number,
        ): void;
        /**
         * Signal emitted on the drop site when the user drops the
         *   data onto the widget.
         * @param context
         * @param x
         * @param y
         * @param time_
         * @virtual
         */
        vfunc_drag_drop(context: Gdk.DragContext, x: number, y: number, time_: number): boolean;
        /**
         * Signal emitted on the drag source when a drag is
         *   finished.
         * @param context
         * @virtual
         */
        vfunc_drag_end(context: Gdk.DragContext): void;
        /**
         * Signal emitted on the drag source when a drag has
         *   failed.
         * @param context
         * @param result
         * @virtual
         */
        vfunc_drag_failed(context: Gdk.DragContext, result: Gtk.DragResult): boolean;
        /**
         * Signal emitted on the drop site when the cursor leaves
         *   the widget.
         * @param context
         * @param time_
         * @virtual
         */
        vfunc_drag_leave(context: Gdk.DragContext, time_: number): void;
        /**
         * signal emitted on the drop site when the user moves
         *   the cursor over the widget during a drag.
         * @param context
         * @param x
         * @param y
         * @param time_
         * @virtual
         */
        vfunc_drag_motion(context: Gdk.DragContext, x: number, y: number, time_: number): boolean;
        /**
         * Signal emitted when a widget is supposed to render itself.
         * @param cr
         * @virtual
         */
        vfunc_draw(cr: cairo.Context): boolean;
        /**
         * Signal event will be emitted when the pointer
         *   enters the widget’s window.
         * @param event
         * @virtual
         */
        vfunc_enter_notify_event(event: Gdk.EventCrossing): boolean;
        /**
         * Rarely-used function. This function is used to emit
         * the event signals on a widget (those signals should never
         * be emitted without using this function to do so).
         * If you want to synthesize an event though, don’t use this function;
         * instead, use `gtk_main_do_event()` so the event will behave as if
         * it were in the event queue. Don’t synthesize expose events; instead,
         * use `gdk_window_invalidate_rect()` to invalidate a region of the
         * window.
         * @param event a {@link Gdk.Event}
         * @virtual
         */
        vfunc_event(event: Gdk.Event): boolean;
        /**
         * @param direction
         * @virtual
         */
        vfunc_focus(direction: Gtk.DirectionType): boolean;
        /**
         * Signal emitted when the keyboard focus enters the
         * widget’s window.
         * @param event
         * @virtual
         */
        vfunc_focus_in_event(event: Gdk.EventFocus): boolean;
        /**
         * Signal emitted when the keyboard focus leaves the
         * widget’s window.
         * @param event
         * @virtual
         */
        vfunc_focus_out_event(event: Gdk.EventFocus): boolean;
        /**
         * Returns the accessible object that describes the widget to an
         * assistive technology.
         *
         * If accessibility support is not available, this {@link Atk.Object}
         * instance may be a no-op. Likewise, if no class-specific {@link Atk.Object}
         * implementation is available for the widget instance in question,
         * it will inherit an {@link Atk.Object} implementation from the first ancestor
         * class for which such an implementation is defined.
         *
         * The documentation of the
         * [ATK](http://developer.gnome.org/atk/stable/)
         * library contains more information about accessible objects and their uses.
         * @virtual
         */
        vfunc_get_accessible(): Atk.Object;
        /**
         * Retrieves a widget’s initial minimum and natural height.
         *
         * This call is specific to width-for-height requests.
         *
         * The returned request will be modified by the
         * GtkWidgetClass::adjust_size_request virtual method and by any
         * `GtkSizeGroups` that have been applied. That is, the returned request
         * is the one that should be used for layout, not necessarily the one
         * returned by the widget itself.
         * @virtual
         */
        vfunc_get_preferred_height(): [number, number];
        /**
         * Retrieves a widget’s minimum and natural height and the corresponding baselines if it would be given
         * the specified `width`, or the default height if `width` is -1. The baselines may be -1 which means
         * that no baseline is requested for this widget.
         *
         * The returned request will be modified by the
         * GtkWidgetClass::adjust_size_request and GtkWidgetClass::adjust_baseline_request virtual methods
         * and by any `GtkSizeGroups` that have been applied. That is, the returned request
         * is the one that should be used for layout, not necessarily the one
         * returned by the widget itself.
         * @param width the width which is available for allocation, or -1 if none
         * @virtual
         */
        vfunc_get_preferred_height_and_baseline_for_width(width: number): [number, number, number, number];
        /**
         * Retrieves a widget’s minimum and natural height if it would be given
         * the specified `width`.
         *
         * The returned request will be modified by the
         * GtkWidgetClass::adjust_size_request virtual method and by any
         * `GtkSizeGroups` that have been applied. That is, the returned request
         * is the one that should be used for layout, not necessarily the one
         * returned by the widget itself.
         * @param width the width which is available for allocation
         * @virtual
         */
        vfunc_get_preferred_height_for_width(width: number): [number, number];
        /**
         * Retrieves a widget’s initial minimum and natural width.
         *
         * This call is specific to height-for-width requests.
         *
         * The returned request will be modified by the
         * GtkWidgetClass::adjust_size_request virtual method and by any
         * `GtkSizeGroups` that have been applied. That is, the returned request
         * is the one that should be used for layout, not necessarily the one
         * returned by the widget itself.
         * @virtual
         */
        vfunc_get_preferred_width(): [number, number];
        /**
         * Retrieves a widget’s minimum and natural width if it would be given
         * the specified `height`.
         *
         * The returned request will be modified by the
         * GtkWidgetClass::adjust_size_request virtual method and by any
         * `GtkSizeGroups` that have been applied. That is, the returned request
         * is the one that should be used for layout, not necessarily the one
         * returned by the widget itself.
         * @param height the height which is available for allocation
         * @virtual
         */
        vfunc_get_preferred_width_for_height(height: number): [number, number];
        /**
         * Gets whether the widget prefers a height-for-width layout
         * or a width-for-height layout.
         *
         * {@link Gtk.Bin} widgets generally propagate the preference of
         * their child, container widgets need to request something either in
         * context of their children or in context of their allocation
         * capabilities.
         * @virtual
         */
        vfunc_get_request_mode(): Gtk.SizeRequestMode;
        /**
         * Signal emitted when a pointer or keyboard grab
         *   on a window belonging to widget gets broken.
         * @param event
         * @virtual
         */
        vfunc_grab_broken_event(event: Gdk.EventGrabBroken): boolean;
        /**
         * Causes `widget` to have the keyboard focus for the {@link Gtk.Window} it's
         * inside. `widget` must be a focusable widget, such as a {@link Gtk.Entry};
         * something like {@link Gtk.Frame} won’t work.
         *
         * More precisely, it must have the `GTK_CAN_FOCUS` flag set. Use
         * `gtk_widget_set_can_focus()` to modify that flag.
         *
         * The widget also needs to be realized and mapped. This is indicated by the
         * related signals. Grabbing the focus immediately after creating the widget
         * will likely fail and cause critical warnings.
         * @virtual
         */
        vfunc_grab_focus(): void;
        /**
         * Signal emitted when a widget becomes shadowed by a
         *   GTK+ grab (not a pointer or keyboard grab) on another widget, or
         *   when it becomes unshadowed due to a grab being removed.
         * @param was_grabbed
         * @virtual
         */
        vfunc_grab_notify(was_grabbed: boolean): void;
        /**
         * Reverses the effects of `gtk_widget_show()`, causing the widget to be
         * hidden (invisible to the user).
         * @virtual
         */
        vfunc_hide(): void;
        /**
         * Signal emitted when the anchored state of a
         *   widget changes.
         * @param previous_toplevel
         * @virtual
         */
        vfunc_hierarchy_changed(previous_toplevel: Gtk.Widget): void;
        /**
         * Signal emitted when a key is pressed.
         * @param event
         * @virtual
         */
        vfunc_key_press_event(event: Gdk.EventKey): boolean;
        /**
         * Signal is emitted when a key is released.
         * @param event
         * @virtual
         */
        vfunc_key_release_event(event: Gdk.EventKey): boolean;
        /**
         * This function should be called whenever keyboard navigation within
         * a single widget hits a boundary. The function emits the
         * {@link Gtk.Widget.SignalSignatures.keynav_failed | Gtk.Widget::keynav-failed} signal on the widget and its return
         * value should be interpreted in a way similar to the return value of
         * `gtk_widget_child_focus()`:
         *
         * When `true` is returned, stay in the widget, the failed keyboard
         * navigation is OK and/or there is nowhere we can/should move the
         * focus to.
         *
         * When `false` is returned, the caller should continue with keyboard
         * navigation outside the widget, e.g. by calling
         * `gtk_widget_child_focus()` on the widget’s toplevel.
         *
         * The default ::keynav-failed handler returns `false` for
         * {@link Gtk.DirectionType.TAB_FORWARD} and {@link Gtk.DirectionType.TAB_BACKWARD}. For the other
         * values of {@link Gtk.DirectionType} it returns `true`.
         *
         * Whenever the default handler returns `true`, it also calls
         * `gtk_widget_error_bell()` to notify the user of the failed keyboard
         * navigation.
         *
         * A use case for providing an own implementation of ::keynav-failed
         * (either by connecting to it or by overriding it) would be a row of
         * {@link Gtk.Entry} widgets where the user should be able to navigate the
         * entire row with the cursor keys, as e.g. known from user interfaces
         * that require entering license keys.
         * @param direction direction of focus movement
         * @virtual
         */
        vfunc_keynav_failed(direction: Gtk.DirectionType): boolean;
        /**
         * Will be emitted when the pointer leaves the
         *   widget’s window.
         * @param event
         * @virtual
         */
        vfunc_leave_notify_event(event: Gdk.EventCrossing): boolean;
        /**
         * This function is only for use in widget implementations. Causes
         * a widget to be mapped if it isn’t already.
         * @virtual
         */
        vfunc_map(): void;
        /**
         * Signal emitted when the widget’s window is mapped.
         * @param event
         * @virtual
         */
        vfunc_map_event(event: Gdk.EventAny): boolean;
        /**
         * Emits the {@link Gtk.Widget.SignalSignatures.mnemonic_activate | Gtk.Widget::mnemonic-activate} signal.
         * @param group_cycling `true` if there are other widgets with the same mnemonic
         * @virtual
         */
        vfunc_mnemonic_activate(group_cycling: boolean): boolean;
        /**
         * Signal emitted when the pointer moves over
         *   the widget’s {@link Gdk.Window}.
         * @param event
         * @virtual
         */
        vfunc_motion_notify_event(event: Gdk.EventMotion): boolean;
        /**
         * Signal emitted when a change of focus is requested
         * @param direction
         * @virtual
         */
        vfunc_move_focus(direction: Gtk.DirectionType): void;
        /**
         * Signal emitted when a new parent has been set on a
         *   widget.
         * @param previous_parent
         * @virtual
         */
        vfunc_parent_set(previous_parent: Gtk.Widget): void;
        /**
         * Signal emitted whenever a widget should pop up a
         *   context menu.
         * @virtual
         */
        vfunc_popup_menu(): boolean;
        /**
         * Signal will be emitted when a property on
         *   the widget’s window has been changed or deleted.
         * @param event
         * @virtual
         */
        vfunc_property_notify_event(event: Gdk.EventProperty): boolean;
        /**
         * @param event
         * @virtual
         */
        vfunc_proximity_in_event(event: Gdk.EventProximity): boolean;
        /**
         * @param event
         * @virtual
         */
        vfunc_proximity_out_event(event: Gdk.EventProximity): boolean;
        /**
         * Signal emitted when “has-tooltip” is `true` and the
         *   hover timeout has expired with the cursor hovering “above”
         *   widget; or emitted when widget got focus in keyboard mode.
         * @param x
         * @param y
         * @param keyboard_tooltip
         * @param tooltip
         * @virtual
         */
        vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean;
        /**
         * Invalidates the area of `widget` defined by `region` by calling
         * `gdk_window_invalidate_region()` on the widget’s window and all its
         * child windows. Once the main loop becomes idle (after the current
         * batch of events has been processed, roughly), the window will
         * receive expose events for the union of all regions that have been
         * invalidated.
         *
         * Normally you would only use this function in widget
         * implementations. You might also use it to schedule a redraw of a
         * {@link Gtk.DrawingArea} or some portion thereof.
         * @param region region to draw
         * @virtual
         */
        vfunc_queue_draw_region(region: cairo.Region): void;
        /**
         * Creates the GDK (windowing system) resources associated with a
         * widget.  For example, `widget`->window will be created when a widget
         * is realized.  Normally realization happens implicitly; if you show
         * a widget and all its parent containers, then the widget will be
         * realized and mapped automatically.
         *
         * Realizing a widget requires all
         * the widget’s parent widgets to be realized; calling
         * `gtk_widget_realize()` realizes the widget’s parents in addition to
         * `widget` itself. If a widget is not yet inside a toplevel window
         * when you realize it, bad things will happen.
         *
         * This function is primarily used in widget implementations, and
         * isn’t very useful otherwise. Many times when you think you might
         * need it, a better approach is to connect to a signal that will be
         * called after the widget is realized automatically, such as
         * {@link Gtk.Widget.SignalSignatures.draw | Gtk.Widget::draw}. Or simply g_signal_connect () to the
         * {@link Gtk.Widget.SignalSignatures.realize | Gtk.Widget::realize} signal.
         * @virtual
         */
        vfunc_realize(): void;
        /**
         * Signal emitted when the screen of a widget has
         *   changed.
         * @param previous_screen
         * @virtual
         */
        vfunc_screen_changed(previous_screen: Gdk.Screen): void;
        /**
         * Signal emitted when a button in the 4 to 7 range is
         *   pressed.
         * @param event
         * @virtual
         */
        vfunc_scroll_event(event: Gdk.EventScroll): boolean;
        /**
         * Signal will be emitted when the the
         *   widget’s window has lost ownership of a selection.
         * @param event
         * @virtual
         */
        vfunc_selection_clear_event(event: Gdk.EventSelection): boolean;
        /**
         * @param selection_data
         * @param info
         * @param time_
         * @virtual
         */
        vfunc_selection_get(selection_data: Gtk.SelectionData, info: number, time_: number): void;
        /**
         * @param event
         * @virtual
         */
        vfunc_selection_notify_event(event: Gdk.EventSelection): boolean;
        /**
         * @param selection_data
         * @param time_
         * @virtual
         */
        vfunc_selection_received(selection_data: Gtk.SelectionData, time_: number): void;
        /**
         * Signal will be emitted when another
         *   client requests ownership of the selection owned by the widget's
         *   window.
         * @param event
         * @virtual
         */
        vfunc_selection_request_event(event: Gdk.EventSelection): boolean;
        /**
         * Flags a widget to be displayed. Any widget that isn’t shown will
         * not appear on the screen. If you want to show all the widgets in a
         * container, it’s easier to call `gtk_widget_show_all()` on the
         * container, instead of individually showing the widgets.
         *
         * Remember that you have to show the containers containing a widget,
         * in addition to the widget itself, before it will appear onscreen.
         *
         * When a toplevel container is shown, it is immediately realized and
         * mapped; other shown widgets are realized and mapped when their
         * toplevel container is realized and mapped.
         * @virtual
         */
        vfunc_show(): void;
        /**
         * Recursively shows a widget, and any child widgets (if the widget is
         * a container).
         * @virtual
         */
        vfunc_show_all(): void;
        /**
         * @param help_type
         * @virtual
         */
        vfunc_show_help(help_type: Gtk.WidgetHelpType): boolean;
        /**
         * This function is only used by {@link Gtk.Container} subclasses, to assign a size
         * and position to their child widgets.
         *
         * In this function, the allocation may be adjusted. It will be forced
         * to a 1x1 minimum size, and the adjust_size_allocation virtual
         * method on the child will be used to adjust the allocation. Standard
         * adjustments include removing the widget’s margins, and applying the
         * widget’s {@link Gtk.Widget.halign} and {@link Gtk.Widget.valign} properties.
         *
         * For baseline support in containers you need to use `gtk_widget_size_allocate_with_baseline()`
         * instead.
         * @param allocation position and size to be allocated to `widget`
         * @virtual
         */
        vfunc_size_allocate(allocation: Gtk.Allocation): void;
        /**
         * Signal emitted when the widget state
         *   changes. Deprecated: 3.0
         * @param previous_state
         * @virtual
         */
        vfunc_state_changed(previous_state: Gtk.StateType): void;
        /**
         * Signal emitted when the widget state changes,
         *   see `gtk_widget_get_state_flags()`.
         * @param previous_state_flags
         * @virtual
         */
        vfunc_state_flags_changed(previous_state_flags: Gtk.StateFlags): void;
        /**
         * Signal emitted when a new style has been set on a
         * widget. Deprecated: 3.0
         * @param previous_style
         * @virtual
         */
        vfunc_style_set(previous_style: Gtk.Style): void;
        /**
         * Signal emitted when the GtkStyleContext of a widget
         *   is changed.
         * @virtual
         */
        vfunc_style_updated(): void;
        /**
         * Signal emitted when a touch event happens
         * @param event
         * @virtual
         */
        vfunc_touch_event(event: Gdk.EventTouch): boolean;
        /**
         * This function is only for use in widget implementations. Causes
         * a widget to be unmapped if it’s currently mapped.
         * @virtual
         */
        vfunc_unmap(): void;
        /**
         * Signal will be emitted when the widget’s window is
         *   unmapped.
         * @param event
         * @virtual
         */
        vfunc_unmap_event(event: Gdk.EventAny): boolean;
        /**
         * This function is only useful in widget implementations.
         * Causes a widget to be unrealized (frees all GDK resources
         * associated with the widget, such as `widget`->window).
         * @virtual
         */
        vfunc_unrealize(): void;
        /**
         * Signal emitted when the widget’s window is
         *   obscured or unobscured.
         * @param event
         * @virtual
         */
        vfunc_visibility_notify_event(event: Gdk.EventVisibility): boolean;
        /**
         * Signal emitted when the state of the toplevel
         *   window associated to the widget changes.
         * @param event
         * @virtual
         */
        vfunc_window_state_event(event: Gdk.EventWindowState): boolean;
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
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating](floating-refs.html) object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating](floating-refs.html) reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
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
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating](floating-refs.html) object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating](floating-refs.html) reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
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
            style_scheme_id: string;
            styleSchemeId: string;
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
         */
        get style_scheme_id(): string;
        set style_scheme_id(val: string);
        /**
         * The selected {@link GtkSource.StyleScheme} ID.
         *
         * Its value changes when the user selects another row in the list.
         *
         * When set, if the ID doesn't exist, no row is selected.
         * @since 6.11
         */
        get styleSchemeId(): string;
        set styleSchemeId(val: string);

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
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating](floating-refs.html) object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating](floating-refs.html) reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
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
        get active_buffer(): Buffer;
        /**
         * The {@link Tepl.Buffer} of the active tab.
         * @since 3.0
         * @read-only
         * @category Inherited from Tepl.TabGroup
         */
        get activeBuffer(): Buffer;
        /**
         * The {@link Tepl.Tab} currently shown.
         * @since 3.0
         * @category Inherited from Tepl.TabGroup
         */
        get active_tab(): Tab;
        set active_tab(val: Tab);
        /**
         * The {@link Tepl.Tab} currently shown.
         * @since 3.0
         * @category Inherited from Tepl.TabGroup
         */
        get activeTab(): Tab;
        set activeTab(val: Tab);
        /**
         * The {@link Tepl.View} of the active tab.
         * @since 3.0
         * @read-only
         * @category Inherited from Tepl.TabGroup
         */
        get active_view(): View;
        /**
         * The {@link Tepl.View} of the active tab.
         * @since 3.0
         * @read-only
         * @category Inherited from Tepl.TabGroup
         */
        get activeView(): View;
        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`.
         */
        get_orientation(): Gtk.Orientation;
        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation | null): void;
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
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating](floating-refs.html) object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating](floating-refs.html) reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
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
            tab: Tab;
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
        get tab(): Tab;

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
        set_orientation(orientation: Gtk.Orientation | null): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating](floating-refs.html) object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating](floating-refs.html) reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
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
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating](floating-refs.html) object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating](floating-refs.html) reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
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
            vfunc_select_language(language?: GtkSource.Language | null): void;
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
        select_language(language?: GtkSource.Language | null): void;
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
            vfunc_set_active(item?: PanelItem | null): void;
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
        set_active(item?: PanelItem | null): void;
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
            active_buffer: Buffer;
            activeBuffer: Buffer;
            active_tab: Tab;
            activeTab: Tab;
            active_view: View;
            activeView: View;
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
        get active_buffer(): Buffer;
        /**
         * The {@link Tepl.Buffer} of the active tab.
         * @since 3.0
         * @read-only
         */
        get activeBuffer(): Buffer;
        /**
         * The {@link Tepl.Tab} currently shown.
         * @since 3.0
         */
        get active_tab(): Tab;
        set active_tab(val: Tab);
        /**
         * The {@link Tepl.Tab} currently shown.
         * @since 3.0
         */
        get activeTab(): Tab;
        set activeTab(val: Tab);
        /**
         * The {@link Tepl.View} of the active tab.
         * @since 3.0
         * @read-only
         */
        get active_view(): View;
        /**
         * The {@link Tepl.View} of the active tab.
         * @since 3.0
         * @read-only
         */
        get activeView(): View;

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
