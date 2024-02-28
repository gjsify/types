/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './tepl-6-ambient.d.ts';
import './tepl-6-import.d.ts';
/**
 * Tepl-6
 */

import type GtkSource from '@girs/gtksource-4';
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
import type Amtk from '@girs/amtk-5';

export namespace Tepl {
    /**
     * Location inside the content area.
     *
     * The content area of a #TeplInfoBar contains a vertical container containing:
     * - First, an horizontal container containing:
     *   - A place for an optional icon.
     *   - The %TEPL_INFO_BAR_LOCATION_ALONGSIDE_ICON location, which is a vertical
     *     container that can contain: primary/secondary messages plus additional
     *     widgets, in the order that they are added.
     * - The %TEPL_INFO_BAR_LOCATION_BELOW_ICON location, which can contain
     *   additional widgets, in the order that they are added. So the widgets added
     *   here are under the icon and under the
     *   %TEPL_INFO_BAR_LOCATION_ALONGSIDE_ICON location.
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
     * A priority that can be used when adding a #GtkStyleProvider for
     * library-specific style information.
     *
     * Has a higher priority than %GTK_STYLE_PROVIDER_PRIORITY_SETTINGS and a lower
     * priority than %GTK_STYLE_PROVIDER_PRIORITY_APPLICATION.
     *
     * The Tepl library uses this priority for its #GtkStyleProvider's.
     */
    const UTILS_STYLE_PROVIDER_PRIORITY_LIBRARY: number;
    /**
     * Free the resources allocated by Tepl. For example it unrefs the singleton
     * objects.
     *
     * This function also calls amtk_finalize() and gtk_source_finalize().
     *
     * It is not mandatory to call this function, it's just to be friendlier to
     * memory debugging tools. This function is meant to be called at the end of
     * main(). It can be called several times.
     */
    function finalize(): void;
    /**
     * Initializes the Tepl library (e.g. for the internationalization).
     *
     * This function can be called several times, but is meant to be called at the
     * beginning of main(), before any other Tepl function call.
     *
     * This function also calls amtk_init() and gtk_source_init().
     */
    function init(): void;
    /**
     * When a %G_IO_ERROR_CANT_CREATE_BACKUP error occurs while saving `location,`
     * offer two possible actions:
     * - Save anyway: %GTK_RESPONSE_YES.
     * - Don't save: %GTK_RESPONSE_CANCEL.
     * @param location the #GFile for which the backup failed to be created.
     * @param error must be a %G_IO_ERROR_CANT_CREATE_BACKUP.
     * @returns the newly created #TeplInfoBar.
     */
    function io_error_info_bar_cant_create_backup(location: Gio.File, error: GLib.Error): InfoBar;
    /**
     * Creates a warning about `location` having changed on disk. The possible
     * actions:
     * - Depending on `document_modified,` "Reload" or "Drop changes and reload":
     *   %GTK_RESPONSE_OK.
     * - A close button as added with gtk_info_bar_set_show_close_button().
     * @param location the #GFile for which there has been an external modification.
     * @param document_modified whether the document (e.g. the #GtkTextBuffer) has   unsaved modifications.
     * @returns the newly created #TeplInfoBar.
     */
    function io_error_info_bar_externally_modified(location: Gio.File, document_modified: boolean): InfoBar;
    /**
     * Creates a warning about `location` being already open in another window,
     * offering two possible actions:
     * - Edit anyway: %GTK_RESPONSE_YES.
     * - Don't edit: %GTK_RESPONSE_CANCEL.
     * @param location the #GFile already open in another window.
     * @returns the newly created #TeplInfoBar.
     */
    function io_error_info_bar_file_already_open(location: Gio.File): InfoBar;
    /**
     * For file saving, creates a warning about invalid characters that can corrupt
     * the file. Possible actions:
     * - Save anyway: %GTK_RESPONSE_YES.
     * - Don't save: %GTK_RESPONSE_CANCEL.
     * @param location where to save the document.
     * @returns the newly created #TeplInfoBar.
     */
    function io_error_info_bar_invalid_characters(location: Gio.File): InfoBar;
    /**
     * Gets the indentation, as a string, of the line at `iter`. `iter` can be
     * anywhere in the line.
     *
     * Possible use-case: to implement an action that inserts some text in a
     * #GtkTextBuffer. If the text to insert spans multiple lines, it is usually
     * desired to keep the same indentation level.
     * @param iter a #GtkTextIter.
     * @returns the line indentation at @iter. Free with g_free().
     */
    function iter_get_line_indentation(iter: Gtk.TextIter): string;
    /**
     * Appends #GtkMenuItem's to `menu_shell` for the following #GAction's:
     * - `"win.tepl-cut"`
     * - `"win.tepl-copy"`
     * - `"win.tepl-paste"`
     * - `"win.tepl-delete"`
     * - `"win.tepl-select-all"`
     *
     * See the [list of GActions implemented in
     * TeplApplicationWindow][tepl-application-window-gactions]. This function
     * correctly uses the %AMTK_FACTORY_IGNORE_ACCELS_FOR_APP flag to create the
     * #GtkMenuItem's.
     * @param menu_shell a #GtkMenuShell.
     */
    function menu_shell_append_edit_actions(menu_shell: Gtk.MenuShell): void;
    /**
     * This function will generate CSS suitable for the GTK CSS engine based on the
     * properties of the #PangoFontDescription.
     *
     * The returned string contains only the CSS declarations, it is not a complete
     * CSS rule set. So the selector and curly braces are not present. Each
     * declaration, including the last one, ends with a semicolon.
     *
     * See also tepl_utils_override_font().
     * @param desc a #PangoFontDescription.
     * @returns A newly allocated string containing the CSS   describing the font description. Free with g_free() when no longer needed.
     */
    function pango_font_description_to_css(desc: Pango.FontDescription): string;
    /**
     * A #GBindingTransformFunc to transform between these two #GValue types:
     * - A #GValue of type #gboolean.
     * - A #GValue of type #GVariant, with the #GVariant of type boolean.
     *
     * For convenience, this function works in both directions (hence the “smart”),
     * it introspects the types of `from_value` and `to_value`.
     *
     * Note that if `from_value` and `to_value` are of the same #GValue type, this
     * function won't work and you shouldn't use a custom #GBindingTransformFunc in
     * the first place.
     * @param binding a #GBinding.
     * @param from_value the #GValue containing the value to transform.
     * @param to_value the #GValue in which to store the transformed value.
     * @param user_data data passed to the transform function.
     * @returns %TRUE if the transformation was successful, and %FALSE otherwise.
     */
    function utils_binding_transform_func_smart_bool(
        binding: GObject.Binding,
        from_value: GObject.Value,
        to_value: GObject.Value,
        user_data?: any | null,
    ): boolean;
    function utils_create_close_button(): Gtk.Widget;
    /**
     * Synchronously creates parent directories of `file,` so that `file` can be
     * saved.
     * @param file a file
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @returns whether the directories are correctly created. %FALSE is returned on error.
     */
    function utils_create_parent_directories(file: Gio.File, cancellable?: Gio.Cancellable | null): boolean;
    /**
     * Parse and break an uri apart in its individual components like the uri
     * scheme, user info, host, port and path. The return value pointer can be
     * %NULL to ignore certain parts of the uri. If the function returns %TRUE, then
     * all return value pointers should be freed using g_free().
     * @param uri the uri to decode
     * @returns %TRUE if the uri could be properly decoded, %FALSE otherwise.
     */
    function utils_decode_uri(uri: string): boolean;
    /**
     * The asynchronous version of g_file_query_exists(). When the operation is
     * finished, `callback` will be called. You can then call
     * tepl_utils_file_query_exists_finish() to get the result of the operation.
     * @param file a #GFile.
     * @param cancellable a #GCancellable.
     * @param callback the callback to call when the operation is finished.
     */
    function utils_file_query_exists_async(
        file: Gio.File,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<Gio.File> | null,
    ): void;
    /**
     * Finishes the operation started with tepl_utils_file_query_exists_async().
     * There is no output #GError parameter, so you should check if the operation
     * has been cancelled (in which case %FALSE will be returned).
     * @param file a #GFile.
     * @param result a #GAsyncResult.
     * @returns %TRUE if the file exists and the operation hasn't been cancelled, %FALSE otherwise.
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
     * @returns the @filename's extension with the dot, in lowercase. Free with g_free().
     */
    function utils_get_file_extension(filename: string): string;
    /**
     * Returns `filename` without its extension. With the “extension” having the same
     * definition as in tepl_utils_get_file_extension(); in other words it returns
     * the other part of `filename`.
     * @param filename a filename.
     * @returns the @filename without its extension. Free with g_free().
     */
    function utils_get_file_shortname(filename: string): string;
    /**
     * Removes all rows of `list_box,` to obtain an empty #GtkListBox.
     * @param list_box a #GtkListBox.
     */
    function utils_list_box_clear(list_box: Gtk.ListBox): void;
    /**
     * Gets an array of all the #GtkListBoxRow childen of `list_box` for which
     * `filter_func` returns %TRUE. The elements in the array are sorted by
     * increasing index order (as returned by gtk_list_box_row_get_index()).
     * @param list_box a #GtkListBox.
     * @param filter_func non-%NULL callback function.
     * @returns a %NULL-terminated array of #GtkListBoxRow objects, or %NULL. Free with   g_free() when no longer needed.
     */
    function utils_list_box_get_filtered_children(
        list_box: Gtk.ListBox,
        filter_func: Gtk.ListBoxFilterFunc,
    ): Gtk.ListBoxRow[] | null;
    /**
     * This function has the same semantics as gtk_list_box_get_row_at_index(), but
     * it takes into account only the rows for which `filter_func` returns %TRUE.
     *
     * As an example, if `index` is 0, it returns the first #GtkListBoxRow for which
     * `filter_func` returns %TRUE.
     * @param list_box a #GtkListBox.
     * @param index the index of the row, starting at 0. The index is among the filtered   rows only.
     * @param filter_func non-%NULL callback function.
     * @returns the child #GtkListBoxRow or %NULL.
     */
    function utils_list_box_get_row_at_index_with_filter(
        list_box: Gtk.ListBox,
        index: number,
        filter_func: Gtk.ListBoxFilterFunc,
    ): Gtk.ListBoxRow | null;
    /**
     * Scrolls to a specific #GtkListBoxRow.
     *
     * Before using this function, tepl_utils_list_box_setup_scrolling() must have
     * been called.
     * @param list_box a #GtkListBox.
     * @param row a #GtkListBoxRow.
     */
    function utils_list_box_scroll_to_row(list_box: Gtk.ListBox, row: Gtk.ListBoxRow): void;
    /**
     * Calls tepl_utils_list_box_scroll_to_row() on the row returned by
     * gtk_list_box_get_selected_row(). This function assumes that there is either
     * zero or one selected row.
     *
     * Before using this function, tepl_utils_list_box_setup_scrolling() must have
     * been called.
     * @param list_box a #GtkListBox.
     */
    function utils_list_box_scroll_to_selected_row(list_box: Gtk.ListBox): void;
    /**
     * Setup vertical scrolling between `list_box` and `scrolled_window,` to be able
     * to use tepl_utils_list_box_scroll_to_row() afterwards.
     *
     * This function is intended to be called only once per #GtkListBox, when
     * initializing the `list_box` and `scrolled_window` widgets.
     * @param list_box a #GtkListBox.
     * @param scrolled_window a #GtkScrolledWindow.
     */
    function utils_list_box_setup_scrolling(list_box: Gtk.ListBox, scrolled_window: Gtk.ScrolledWindow): void;
    /**
     * The same as g_markup_escape_text(), but with an implementation that fully
     * supports round-trip integrity. I.e. when #GMarkupParser or any other XML
     * parser will decode/unescape the string, the exact same string as `src` will be
     * brought back. As long as `src` is a valid UTF-8 string.
     *
     * The other difference with g_markup_escape_text() is that the `length`
     * parameter is not present for tepl_utils_markup_escape_text().
     *
     * # g_markup_escape_text() doesn't fully support round-trip integrity
     *
     * In fact, g_markup_escape_text() doesn't escape the tabstop, newline and
     * carriage return characters. And the #GMarkupParser correctly processes
     * whitespace and line endings according to the [XML rules for normalization of
     * line endings and attribute values](https://www.w3.org/TR/xml/#AVNormalize).
     *
     * For example `"\t"` (a tab) after a round-trip through g_markup_escape_text()
     * and #GMarkupParser becomes a simple space.
     * @param src a nul-terminated UTF-8 string.
     * @returns a newly allocated string with the escaped text, or %NULL if @src is not a valid UTF-8 string. Free with g_free() when no longer needed.
     */
    function utils_markup_escape_text(src: string): string | null;
    /**
     * A replacement for gtk_widget_override_font(). Because
     * gtk_widget_override_font() is deprecated but was useful.
     *
     * See pango_font_description_from_string() for a description of the format of
     * the string representation for `font_str`.
     *
     * This function uses tepl_pango_font_description_to_css() and applies the CSS
     * to the #GtkStyleContext of `widget`.
     * @param widget a #GtkWidget.
     * @param font_str a string representation of a #PangoFontDescription, or   %NULL to undo the effect of previous calls to this function on @widget.
     */
    function utils_override_font(widget: Gtk.Widget, font_str?: string | null): void;
    /**
     * Replaces the home directory with a tilde, if the home directory is present in
     * the `filename`.
     * @param filename the filename.
     * @returns the new filename. Free with g_free().
     */
    function utils_replace_home_dir_with_tilde(filename: string): string;
    /**
     * Like tepl_utils_str_middle_truncate() but the “…” character is at the end.
     * @param str a UTF-8 string.
     * @param truncate_length truncate the string at that length, in UTF-8 characters   (not bytes).
     * @returns the truncated string. Free with g_free().
     */
    function utils_str_end_truncate(str: string, truncate_length: number): string;
    /**
     * If `str` is longer than `truncate_length,` then this function returns `str`
     * truncated in the middle with a “…” character. Otherwise it just returns a
     * copy of `str`.
     * @param str a UTF-8 string.
     * @param truncate_length truncate the string at that length, in UTF-8 characters   (not bytes).
     * @returns the truncated string. Free with g_free().
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
     * @returns A newly allocated string with the replacements. Free with g_free().
     */
    function utils_str_replace(string: string, search: string, replacement: string): string;
    /**
     * Flags to define the behavior of a #TeplFileSaver.
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
     * The folding state at a certain line in the #GtkTextBuffer.
     *
     * Since #TeplGutterRendererFolds has a flat view of the folding tree, some
     * states can be combined; for example, %TEPL_GUTTER_RENDERER_FOLDS_STATE_END
     * and %TEPL_GUTTER_RENDERER_FOLDS_STATE_CONTINUE.
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
    module AbstractFactory {
        // Constructor properties interface
    }

    class AbstractFactory extends GObject.Object {
        // Owm methods of Tepl-6.AbstractFactory

        /**
         * Gets the #TeplAbstractFactory singleton instance.
         *
         * If tepl_abstract_factory_set_singleton() has not been called, the singleton
         * is created with a #TeplAbstractFactory instance.
         */
        static get_singleton(): AbstractFactory;

        // Owm methods of Tepl-6.AbstractFactory

        create_file(): File;
        /**
         * Creates a main #GtkApplicationWindow in the sense of
         * tepl_application_window_is_main_window().
         * @param app a #GtkApplication.
         * @returns a new main application window, or %NULL if the vfunc is not implemented.
         */
        create_main_window(app: Gtk.Application): Gtk.ApplicationWindow | null;
        /**
         * Creates a new #GFile that is then intended to be used as an argument to
         * tepl_metadata_manager_load_from_disk() and
         * tepl_metadata_manager_save_to_disk(). This function just creates the #GFile
         * object, it doesn't call any #TeplMetadataManager function.
         * @returns a new #GFile, or %NULL if the vfunc is not implemented.
         */
        create_metadata_manager_file(): Gio.File | null;
        create_tab(): Tab;
        /**
         * Creates a new tab label for `tab,` suitable for gtk_notebook_set_tab_label().
         * @param tab a #TeplTab.
         * @returns a new #GtkWidget, or %NULL for the default tab label (“page N” with #GtkNotebook).
         */
        create_tab_label(tab: Tab): Gtk.Widget | null;
        /**
         * Sets the #TeplAbstractFactory singleton. This should be called early in
         * main(), for example just after calling tepl_init().
         *
         * This function must be called only once, before the first call to
         * tepl_abstract_factory_get_singleton().
         *
         * Tepl takes ownership of the `factory` reference.
         */
        set_singleton(): void;
    }

    module Application {
        // Constructor properties interface
    }

    class Application extends GObject.Object {
        // Own properties of Tepl-6.Application

        /**
         * The #GtkApplication.
         */
        application: Gtk.Application;

        // Owm methods of Tepl-6.Application

        /**
         * Convenience function that calls g_application_get_default() followed by
         * tepl_application_get_from_gtk_application(). The object returned by
         * g_application_get_default() must be a #GtkApplication.
         */
        static get_default(): Application;
        /**
         * Returns the #TeplApplication of `gtk_app`. The returned object is guaranteed
         * to be the same for the lifetime of `gtk_app`.
         * @param gtk_app a #GtkApplication.
         */
        static get_from_gtk_application(gtk_app: Gtk.Application): Application;

        // Owm methods of Tepl-6.Application

        /**
         * Like gtk_application_get_active_window(), but returns the main window in the
         * sense of tepl_application_window_is_main_window().
         * @returns the active main #GtkApplicationWindow, or %NULL.
         */
        get_active_main_window(): Gtk.ApplicationWindow | null;
        /**
         * Returns an initially empty #AmtkActionInfoStore reserved for the
         * application-specific actions. Libraries should not add #AmtkActionInfo's to
         * this store. Libraries should provide their own store if they want to share
         * #AmtkActionInfo's.
         * @returns the #AmtkActionInfoStore reserved for the application.
         */
        get_app_action_info_store(): Amtk.ActionInfoStore;
        get_application(): Gtk.Application;
        /**
         * The returned #AmtkActionInfoStore contains #AmtkActionInfo's for all the
         * #GAction's listed in the [class description of
         * TeplApplicationWindow][tepl-application-window-gactions] and the [class
         * description of TeplApplication][tepl-application-gactions].
         * @returns the #AmtkActionInfoStore of the Tepl library.
         */
        get_tepl_action_info_store(): Amtk.ActionInfoStore;
        /**
         * Connects a generic function handler for the #GApplication::activate signal.
         *
         * If no main windows exist, it creates one with
         * tepl_abstract_factory_create_main_window(). If a main window already exists,
         * it calls gtk_window_present() on the most recently focused window of the
         * application.
         */
        handle_activate(): void;
        /**
         * This function:
         * - Connects to the #GApplication::startup signal to call
         *   tepl_metadata_manager_load_from_disk().
         * - Connects to the #GApplication::shutdown signal to call
         *   tepl_metadata_manager_save_to_disk() with `trim` set to %TRUE.
         *
         * It gets the #GFile by calling
         * tepl_abstract_factory_create_metadata_manager_file().
         */
        handle_metadata(): void;
        /**
         * Connects a generic function handler for the #GApplication::open signal.
         *
         * It calls tepl_application_window_open_file() for each #GFile to open, on the
         * active main window as returned by tepl_application_get_active_main_window().
         * If the active main window is %NULL, it creates one with
         * tepl_abstract_factory_create_main_window().
         */
        handle_open(): void;
        /**
         * Calls g_application_open() with a single file and an empty hint.
         * @param file a #GFile.
         */
        open_simple(file: Gio.File): void;
    }

    module ApplicationWindow {
        // Constructor properties interface
    }

    class ApplicationWindow extends GObject.Object {
        // Own properties of Tepl-6.ApplicationWindow

        /**
         * The #GtkApplicationWindow.
         */
        application_window: Gtk.ApplicationWindow;
        /**
         * The #GtkApplicationWindow.
         */
        applicationWindow: Gtk.ApplicationWindow;
        /**
         * Whether to handle the #GtkWindow:title. The title is probably not
         * appropriate if a #GtkHeaderBar is used, the title is meant to be used
         * only for applications with a traditional UI.
         *
         * If %TRUE, the title will contain:
         * - the #TeplBuffer:tepl-full-title of the active buffer.
         * - if the active view is not #GtkTextView:editable, the
         *   `"[Read-Only]"` string.
         * - the application name as returned by g_get_application_name().
         *
         * If the active view is %NULL, the title contains only the application
         * name.
         */
        handle_title: boolean;
        /**
         * Whether to handle the #GtkWindow:title. The title is probably not
         * appropriate if a #GtkHeaderBar is used, the title is meant to be used
         * only for applications with a traditional UI.
         *
         * If %TRUE, the title will contain:
         * - the #TeplBuffer:tepl-full-title of the active buffer.
         * - if the active view is not #GtkTextView:editable, the
         *   `"[Read-Only]"` string.
         * - the application name as returned by g_get_application_name().
         *
         * If the active view is %NULL, the title contains only the application
         * name.
         */
        handleTitle: boolean;

        // Owm methods of Tepl-6.ApplicationWindow

        /**
         * Returns the #TeplApplicationWindow of `gtk_window`. The returned object is
         * guaranteed to be the same for the lifetime of `gtk_window`.
         * @param gtk_window a #GtkApplicationWindow.
         */
        static get_from_gtk_application_window(gtk_window: Gtk.ApplicationWindow): ApplicationWindow;
        /**
         * Returns %TRUE iff `gtk_window` has an associated #TeplTabGroup (i.e. if
         * tepl_application_window_set_tab_group() has been called).
         *
         * This function takes a #GtkApplicationWindow parameter to avoid creating the
         * #TeplApplicationWindow object if it hasn't been created.
         * @param gtk_window a #GtkApplicationWindow.
         */
        static is_main_window(gtk_window: Gtk.ApplicationWindow): boolean;

        // Owm methods of Tepl-6.ApplicationWindow

        get_application_window(): Gtk.ApplicationWindow;
        get_handle_title(): boolean;
        /**
         * Gets the #GtkWindowGroup in which `tepl_window` resides.
         *
         * You should call this function only on main windows, to add secondary windows
         * to the #GtkWindowGroup.
         * @returns the #GtkWindowGroup.
         */
        get_window_group(): Gtk.WindowGroup;
        /**
         * Opens a file in `tepl_window`. If the active tab is untouched (see
         * tepl_buffer_is_untouched()), then the file is loaded in that tab. Otherwise a
         * new tab is created.
         *
         * This function is asynchronous, the file loading is done with the
         * tepl_tab_load_file() function. There is no way to know when the file loading
         * is finished.
         * @param location a #GFile.
         * @param jump_to whether to set the tab where the file is loaded as the active tab.
         */
        open_file(location: Gio.File, jump_to: boolean): void;
        /**
         * Sets the #TeplApplicationWindow:handle-title property.
         * @param handle_title the new value.
         */
        set_handle_title(handle_title: boolean): void;
        /**
         * Sets the #TeplTabGroup of `tepl_window`. This function can be called only
         * once, it is not possible to change the #TeplTabGroup afterwards (this
         * restriction may be lifted in the future if there is a compelling use-case).
         *
         * #TeplApplicationWindow implements the #TeplTabGroup interface by delegating
         * the requests to `tab_group`.
         * @param tab_group a #TeplTabGroup.
         */
        set_tab_group(tab_group: TabGroup): void;
    }

    module Buffer {
        // Signal callback interfaces

        interface TeplCursorMoved {
            (): void;
        }

        // Constructor properties interface
    }

    class Buffer extends GtkSource.Buffer {
        // Own properties of Tepl-6.Buffer

        /**
         * The full title. See tepl_buffer_get_full_title().
         */
        readonly tepl_full_title: string;
        /**
         * The full title. See tepl_buffer_get_full_title().
         */
        readonly teplFullTitle: string;
        /**
         * The short title. See tepl_buffer_get_short_title().
         */
        readonly tepl_short_title: string;
        /**
         * The short title. See tepl_buffer_get_short_title().
         */
        readonly teplShortTitle: string;
        /**
         * The #GtkSourceBuffer:style-scheme ID, as a string. This property is
         * useful for binding it to a #GSettings key.
         *
         * When the #GtkSourceBuffer:style-scheme is %NULL,
         * #TeplBuffer:tepl-style-scheme-id contains the empty string.
         */
        tepl_style_scheme_id: string;
        /**
         * The #GtkSourceBuffer:style-scheme ID, as a string. This property is
         * useful for binding it to a #GSettings key.
         *
         * When the #GtkSourceBuffer:style-scheme is %NULL,
         * #TeplBuffer:tepl-style-scheme-id contains the empty string.
         */
        teplStyleSchemeId: string;

        // Constructors of Tepl-6.Buffer

        static ['new'](): Buffer;

        // Owm methods of Tepl-6.Buffer

        /**
         * Returns the #TeplFile of `buffer`. The returned object is guaranteed to be the
         * same for the lifetime of `buffer`.
         *
         * #TeplBuffer creates the #TeplFile with tepl_abstract_factory_create_file().
         * @returns the associated #TeplFile.
         */
        get_file(): File;
        /**
         * Returns a title suitable for a #GtkWindow title. It contains (in that order):
         * - the #TeplBuffer:tepl-short-title;
         * - the directory path in parenthesis if the #TeplFile:location isn't
         *   %NULL.
         * @returns the @buffer full title. Free the return value with g_free() when no longer needed.
         */
        get_full_title(): string;
        /**
         * Returns the #TeplMetadata of `buffer`. The returned object is guaranteed to be
         * the same for the lifetime of `buffer`.
         * @returns the associated #TeplMetadata.
         */
        get_metadata(): Metadata;
        get_selection_type(): SelectionType;
        /**
         * Returns a title suitable for a tab label. It contains (in that order):
         * - '*' if the buffer is modified;
         * - the #TeplFile:short-name.
         * @returns the @buffer short title. Free the return value with g_free() when no longer needed.
         */
        get_short_title(): string;
        get_style_scheme_id(): string;
        /**
         * Returns whether `buffer` is untouched.
         *
         * This function is for example useful to know if we can re-use this buffer to
         * load a file, instead of opening a new tab or window.
         *
         * For this function to return %TRUE, the `buffer` must be empty, non-modified,
         * the undo/redo #GtkSourceBuffer history must be empty, and the
         * #TeplFile:location must be %NULL.
         * @returns %TRUE if @buffer has not been touched, %FALSE otherwise.
         */
        is_untouched(): boolean;
        /**
         * Calls tepl_metadata_manager_copy_from() for #TeplFile:location (if not %NULL)
         * to the associated #TeplMetadata of `buffer`.
         */
        load_metadata_from_metadata_manager(): void;
        /**
         * Calls tepl_metadata_manager_merge_into() for #TeplFile:location (if not
         * %NULL) from the associated #TeplMetadata of `buffer`.
         */
        save_metadata_into_metadata_manager(): void;
        /**
         * Sets the #TeplBuffer:tepl-style-scheme-id property.
         *
         * The #GtkSourceStyleScheme is taken from the default
         * #GtkSourceStyleSchemeManager as returned by
         * gtk_source_style_scheme_manager_get_default().
         * @param style_scheme_id the new value.
         */
        set_style_scheme_id(style_scheme_id: string): void;
    }

    module File {
        // Constructor properties interface
    }

    class File extends GObject.Object {
        // Own properties of Tepl-6.File

        /**
         * The location.
         */
        location: Gio.File;
        /**
         * The line ending type.
         */
        readonly newline_type: NewlineType;
        /**
         * The line ending type.
         */
        readonly newlineType: NewlineType;
        /**
         * The file short name.
         *
         * When the #TeplFile:location is %NULL, this property contains
         * "Untitled File N", with N the Nth untitled file of the application,
         * starting at 1. When an untitled file is closed (when the #TeplFile is
         * freed) or its #TeplFile:location is set, its untitled number is
         * released and can be used by a later file.
         *
         * When the #TeplFile:location is not %NULL, this property contains the
         * display-name (see #G_FILE_ATTRIBUTE_STANDARD_DISPLAY_NAME). However,
         * requesting the display-name can take some time (for example for a
         * remote file with a slow network connection). When the
         * #TeplFile:location property is set, the display-name is fetched
         * asynchronously. When the display-name is available, this property is
         * notified. In the meantime – after the #TeplFile:location is set but
         * before receiving the display-name – a fallback implementation is used
         * that does no blocking I/O (but it may return a different result
         * compared to the real display-name).
         */
        readonly short_name: string;
        /**
         * The file short name.
         *
         * When the #TeplFile:location is %NULL, this property contains
         * "Untitled File N", with N the Nth untitled file of the application,
         * starting at 1. When an untitled file is closed (when the #TeplFile is
         * freed) or its #TeplFile:location is set, its untitled number is
         * released and can be used by a later file.
         *
         * When the #TeplFile:location is not %NULL, this property contains the
         * display-name (see #G_FILE_ATTRIBUTE_STANDARD_DISPLAY_NAME). However,
         * requesting the display-name can take some time (for example for a
         * remote file with a slow network connection). When the
         * #TeplFile:location property is set, the display-name is fetched
         * asynchronously. When the display-name is available, this property is
         * notified. In the meantime – after the #TeplFile:location is set but
         * before receiving the display-name – a fallback implementation is used
         * that does no blocking I/O (but it may return a different result
         * compared to the real display-name).
         */
        readonly shortName: string;

        // Constructors of Tepl-6.File

        static ['new'](): File;

        // Owm methods of Tepl-6.File

        /**
         * Calls either gtk_native_dialog_set_modal() or gtk_window_set_modal()
         * depending on the `chooser` type.
         * @param chooser a #GtkFileChooser.
         * @param modal the new value.
         */
        static chooser_set_modal(chooser: Gtk.FileChooser, modal: boolean): void;
        /**
         * Sets or unsets a parent #GtkWindow for the `chooser` dialog. It calls the
         * right functions depending on the type of `chooser`.
         * @param chooser a #GtkFileChooser.
         * @param parent a #GtkWindow, or %NULL.
         */
        static chooser_set_parent(chooser: Gtk.FileChooser, parent?: Gtk.Window | null): void;
        /**
         * Calls gtk_native_dialog_show() or gtk_window_present() depending on the type
         * of `chooser`.
         * @param chooser a #GtkFileChooser.
         */
        static chooser_show(chooser: Gtk.FileChooser): void;

        // Owm methods of Tepl-6.File

        /**
         * If the #TeplFile:location isn't %NULL, adds its URI to the default
         * #GtkRecentManager with gtk_recent_manager_add_item().
         */
        add_uri_to_recent_manager(): void;
        get_location(): Gio.File;
        get_newline_type(): NewlineType;
        get_short_name(): string;
        /**
         * Sets the #TeplFile:location property.
         * @param location the new #GFile, or %NULL.
         */
        set_location(location?: Gio.File | null): void;
    }

    module FileLoader {
        // Constructor properties interface
    }

    class FileLoader extends GObject.Object {
        // Own properties of Tepl-6.FileLoader

        /**
         * The #TeplBuffer to load the content into. The #TeplFileLoader object
         * has a weak reference to the buffer.
         */
        buffer: Buffer;
        /**
         * The #TeplFile. The #TeplFileLoader object has a weak
         * reference to the file.
         */
        file: File;
        /**
         * The #GFile to load. By default the location is taken from the
         * #TeplFile at construction time.
         */
        location: Gio.File;

        // Constructors of Tepl-6.FileLoader

        static ['new'](buffer: Buffer, file: File): FileLoader;

        // Owm methods of Tepl-6.FileLoader

        get_buffer(): Buffer | null;
        get_file(): File | null;
        get_location(): Gio.File | null;
        /**
         * Loads asynchronously the file content into the #TeplBuffer.
         *
         * See the #GAsyncResult documentation to know how to use this function.
         * @param io_priority the I/O priority of the request. E.g. %G_PRIORITY_LOW,   %G_PRIORITY_DEFAULT or %G_PRIORITY_HIGH.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a #GAsyncReadyCallback to call when the request is   satisfied.
         */
        load_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes a file loading started with tepl_file_loader_load_async().
         * @param result a #GAsyncResult.
         * @returns whether the content has been loaded successfully.
         */
        load_finish(result: Gio.AsyncResult): boolean;
    }

    module FileSaver {
        // Constructor properties interface
    }

    class FileSaver extends GObject.Object {
        // Own properties of Tepl-6.FileSaver

        /**
         * The #TeplBuffer to save. The #TeplFileSaver object has a weak
         * reference to the buffer.
         */
        buffer: Buffer;
        /**
         * The #TeplFile. The #TeplFileSaver object has a weak reference to the
         * file.
         */
        file: File;
        /**
         * File saving flags.
         */
        flags: FileSaverFlags;
        /**
         * The #GFile where to save the buffer. By default the location is taken
         * from the #TeplFile at construction time.
         */
        location: Gio.File;
        /**
         * The newline type.
         */
        newline_type: NewlineType;
        /**
         * The newline type.
         */
        newlineType: NewlineType;

        // Own fields of Tepl-6.FileSaver

        object: GObject.Object;

        // Constructors of Tepl-6.FileSaver

        static ['new'](buffer: Buffer, file: File): FileSaver;

        static new_with_target(buffer: Buffer, file: File, target_location: Gio.File): FileSaver;

        // Owm methods of Tepl-6.FileSaver

        get_buffer(): Buffer;
        get_file(): File;
        get_flags(): FileSaverFlags;
        get_location(): Gio.File;
        get_newline_type(): NewlineType;
        /**
         * Saves asynchronously the buffer into the file. See the #GAsyncResult
         * documentation to know how to use this function.
         * @param io_priority the I/O priority of the request. E.g. %G_PRIORITY_LOW,   %G_PRIORITY_DEFAULT or %G_PRIORITY_HIGH.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a #GAsyncReadyCallback to call when the request is   satisfied.
         */
        save_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes a file saving started with tepl_file_saver_save_async().
         *
         * If the file has been saved successfully, the following #TeplFile
         * properties will be updated: the location and the newline type.
         *
         * gtk_text_buffer_set_modified() is called with %FALSE if the file has been
         * saved successfully.
         * @param result a #GAsyncResult.
         * @returns whether the file was saved successfully.
         */
        save_finish(result: Gio.AsyncResult): boolean;
        set_flags(flags: FileSaverFlags): void;
        /**
         * Sets the newline type. By default the newline type is taken from the
         * #TeplFile.
         * @param newline_type the new newline type.
         */
        set_newline_type(newline_type: NewlineType): void;
    }

    module FoldRegion {
        // Constructor properties interface
    }

    class FoldRegion extends GObject.Object {
        // Own properties of Tepl-6.FoldRegion

        /**
         * The #GtkTextBuffer where the fold region is applied. The
         * #TeplFoldRegion object has a weak reference to the buffer.
         */
        buffer: Gtk.TextBuffer;
        /**
         * Whether the #TeplFoldRegion is folded or not.
         */
        folded: boolean;

        // Constructors of Tepl-6.FoldRegion

        static ['new'](buffer: Gtk.TextBuffer, start: Gtk.TextIter, end: Gtk.TextIter): FoldRegion;

        // Owm methods of Tepl-6.FoldRegion

        /**
         * Obtains iterators pointing to the start and end of the #TeplFoldRegion.
         * @returns %TRUE on success, %FALSE otherwise.
         */
        get_bounds(): boolean;
        get_buffer(): Gtk.TextBuffer | null;
        get_folded(): boolean;
        /**
         * Sets the start and end of the #TeplFoldRegion.
         * @param start a #GtkTextIter.
         * @param end a #GtkTextIter.
         */
        set_bounds(start: Gtk.TextIter, end: Gtk.TextIter): void;
        /**
         * Folds or unfolds the region.
         * @param folded the new value.
         */
        set_folded(folded: boolean): void;
    }

    module GotoLineBar {
        // Constructor properties interface
    }

    class GotoLineBar extends Gtk.Grid {
        // Constructors of Tepl-6.GotoLineBar

        static ['new'](): GotoLineBar;

        // Owm methods of Tepl-6.GotoLineBar

        /**
         * Calls gtk_widget_grab_focus() to the #GtkSearchEntry of `bar`.
         */
        grab_focus_to_entry(): void;
        /**
         * Sets the #TeplView. tepl_view_goto_line() will be called on `view` when the
         * user types a line number in the #GtkSearchEntry of `bar`.
         *
         * Only one #TeplView can be associated per #TeplGotoLineBar.
         * @param view a #TeplView.
         */
        set_view(view: View): void;
    }

    module GutterRendererFolds {
        // Constructor properties interface
    }

    class GutterRendererFolds extends GtkSource.GutterRenderer {
        // Constructors of Tepl-6.GutterRendererFolds

        static ['new'](): GutterRendererFolds;

        // Owm methods of Tepl-6.GutterRendererFolds

        /**
         * Sets the folding state of the next cell to be drawn.
         *
         * This function is intended to be called from a subclass' draw method before
         * chaining-up to its parent's draw method.
         * @param state a #TeplGutterRendererFoldsState.
         */
        set_state(state: GutterRendererFoldsState): void;
    }

    module InfoBar {
        // Constructor properties interface
    }

    class InfoBar extends Gtk.InfoBar {
        // Own properties of Tepl-6.InfoBar

        /**
         * If this property is %TRUE, then the #TeplInfoBar is destroyed with
         * gtk_widget_destroy() when the #GtkInfoBar::response signal is
         * received with the `response_id` %GTK_RESPONSE_CLOSE.
         */
        handle_close_response: boolean;
        /**
         * If this property is %TRUE, then the #TeplInfoBar is destroyed with
         * gtk_widget_destroy() when the #GtkInfoBar::response signal is
         * received with the `response_id` %GTK_RESPONSE_CLOSE.
         */
        handleCloseResponse: boolean;
        /**
         * If this property is %TRUE, then an icon is shown on the left, based
         * on the value of the #GtkInfoBar:message-type property. For
         * %GTK_MESSAGE_OTHER no icon is shown.
         *
         * If the #TeplInfoBar:icon-name property has a non-%NULL value, then
         * this property is not taken into account.
         *
         * Note that setting this property doesn't change the value of the
         * #TeplInfoBar:icon-name property; the two properties are separate.
         */
        icon_from_message_type: boolean;
        /**
         * If this property is %TRUE, then an icon is shown on the left, based
         * on the value of the #GtkInfoBar:message-type property. For
         * %GTK_MESSAGE_OTHER no icon is shown.
         *
         * If the #TeplInfoBar:icon-name property has a non-%NULL value, then
         * this property is not taken into account.
         *
         * Note that setting this property doesn't change the value of the
         * #TeplInfoBar:icon-name property; the two properties are separate.
         */
        iconFromMessageType: boolean;
        /**
         * If set to a non-%NULL value, then an icon is shown on the left.
         *
         * If this property has a non-%NULL value, then the
         * #TeplInfoBar:icon-from-message-type property is not taken into
         * account.
         */
        icon_name: string;
        /**
         * If set to a non-%NULL value, then an icon is shown on the left.
         *
         * If this property has a non-%NULL value, then the
         * #TeplInfoBar:icon-from-message-type property is not taken into
         * account.
         */
        iconName: string;

        // Constructors of Tepl-6.InfoBar

        static ['new'](): InfoBar;

        static new_simple(msg_type: Gtk.MessageType, primary_msg: string, secondary_msg?: string | null): InfoBar;

        // Owm methods of Tepl-6.InfoBar

        /**
         * Utility function to create a #GtkLabel suitable for a #GtkInfoBar. The
         * wrapping and alignment is configured. The label is also set as selectable,
         * for example to copy an error message and search an explanation on the web.
         */
        static create_label(): Gtk.Label;
        /**
         * Sets the desired orientation (horizontal or vertical) for the action area as
         * returned by gtk_info_bar_get_action_area(). The action area is where the
         * buttons are placed.
         *
         * The default value for a #TeplInfoBar is %GTK_ORIENTATION_VERTICAL. The reason
         * is because with a small #GtkWindow, if 3 or more buttons are shown
         * horizontally, there is not enough space for the text. And it can be worse
         * when the button labels are translated to another language. When the buttons
         * are packed vertically, there is usually no problem. A vertical action area
         * also follows the original design of #GtkInfoBar.
         * @param info_bar a #GtkInfoBar.
         * @param buttons_orientation the desired orientation.
         */
        static set_buttons_orientation(info_bar: Gtk.InfoBar, buttons_orientation: Gtk.Orientation): void;

        // Owm methods of Tepl-6.InfoBar

        /**
         * Adds `widget` to `info_bar` at `location`.
         *
         * As described in #TeplInfoBarLocation, a #TeplInfoBar has internal containers
         * for the content area. So if you need to add a custom #GtkWidget, it is better
         * to use this function instead of adding the #GtkWidget directly to the content
         * area.
         * @param widget a #GtkWidget.
         * @param location a #TeplInfoBarLocation.
         */
        add_content_widget(widget: Gtk.Widget, location: InfoBarLocation): void;
        /**
         * Adds a primary message to the %TEPL_INFO_BAR_LOCATION_ALONGSIDE_ICON
         * location.
         * @param primary_msg a primary message.
         */
        add_primary_message(primary_msg: string): void;
        /**
         * Adds a secondary message to the %TEPL_INFO_BAR_LOCATION_ALONGSIDE_ICON
         * location.
         * @param secondary_msg a secondary message.
         */
        add_secondary_message(secondary_msg: string): void;
        get_handle_close_response(): boolean;
        get_icon_from_message_type(): boolean;
        get_icon_name(): string;
        /**
         * Sets a new value to the #TeplInfoBar:handle-close-response property.
         * @param handle_close_response the new value.
         */
        set_handle_close_response(handle_close_response: boolean): void;
        /**
         * Sets a new value to the #TeplInfoBar:icon-from-message-type property.
         * @param icon_from_message_type the new value.
         */
        set_icon_from_message_type(icon_from_message_type: boolean): void;
        /**
         * Sets a new value to the #TeplInfoBar:icon-name property.
         * @param icon_name the new value.
         */
        set_icon_name(icon_name: string): void;
        /**
         * Convenience function to set the #GtkInfoBar:show-close-button and
         * #TeplInfoBar:handle-close-response properties to %TRUE.
         */
        setup_close_button(): void;
    }

    module LanguageChooserDialog {
        // Constructor properties interface
    }

    class LanguageChooserDialog extends Gtk.Dialog {
        // Constructors of Tepl-6.LanguageChooserDialog

        static ['new'](parent?: Gtk.Window | null): LanguageChooserDialog;
    }

    module LanguageChooserWidget {
        // Constructor properties interface
    }

    class LanguageChooserWidget extends Gtk.Grid {
        // Constructors of Tepl-6.LanguageChooserWidget

        static ['new'](): LanguageChooserWidget;
    }

    module Metadata {
        // Constructor properties interface
    }

    class Metadata extends GObject.Object {
        // Constructors of Tepl-6.Metadata

        static ['new'](): Metadata;

        // Owm methods of Tepl-6.Metadata

        /**
         * Gets the value of a metadata stored in the `metadata` object memory.
         *
         * `key` must follow [the requirements explained in the class
         * description][tepl-metadata-keys-requirements].
         * @param key a key.
         * @returns the associated value (a UTF-8 string), or %NULL. Free with g_free() when no longer needed.
         */
        get(key: string): string | null;
        /**
         * Sets or unsets `key`. This function just stores the new metadata value in the
         * `metadata` object memory.
         *
         * `key` must follow [the requirements explained in the class
         * description][tepl-metadata-keys-requirements].
         * @param key a key.
         * @param value a nul-terminated UTF-8 string, or %NULL to unset the key.
         */
        set(key: string, value?: string | null): void;
    }

    module MetadataManager {
        // Constructor properties interface
    }

    class MetadataManager extends GObject.Object {
        // Owm methods of Tepl-6.MetadataManager

        static get_singleton(): MetadataManager;

        // Owm methods of Tepl-6.MetadataManager

        /**
         * Copies the metadata stored in `from_manager` for `for_location` into
         * `to_metadata`.
         *
         * If `to_metadata` already contains a key that is also present in `from_manager,`
         * the value in `to_metadata` is overwritten.
         *
         * If `to_metadata` already contains a key that is not present in `from_manager,`
         * the key/value pair is kept in `to_metadata,` it is not erased.
         * @param for_location a #GFile.
         * @param to_metadata a #TeplMetadata.
         */
        copy_from(for_location: Gio.File, to_metadata: Metadata): void;
        /**
         * Loads synchronously all the metadata from `from_file` into `manager`.
         *
         * A good moment to call this function is on application startup, see the
         * #GApplication::startup signal.
         * @param from_file the #GFile to load metadata from.
         * @returns whether the operation was successful.
         */
        load_from_disk(from_file: Gio.File): boolean;
        /**
         * Merges the metadata from `from_metadata` into `into_manager` for `for_location`.
         *
         * If a key from `from_metadata` has been set to %NULL, the key/value pair is
         * removed from `into_manager`. In other words that key/value pair will not be
         * saved at all when calling tepl_metadata_manager_save_to_disk().
         *
         * If `into_manager` already contains a key that is not present in
         * `from_metadata,` the key/value pair is kept in `into_manager,` it is not
         * erased.
         * @param for_location a #GFile.
         * @param from_metadata a #TeplMetadata.
         */
        merge_into(for_location: Gio.File, from_metadata: Metadata): void;
        /**
         * Saves synchronously all the metadata from `manager` to `to_file`. The parent
         * directories of `to_file` are created if needed.
         *
         * A good moment to call this function is on application shutdown, see the
         * #GApplication::shutdown signal.
         * @param to_file the #GFile to save metadata to.
         * @param trim if %TRUE, tepl_metadata_manager_trim() is called with -1.
         * @returns whether the operation was successful.
         */
        save_to_disk(to_file: Gio.File, trim: boolean): boolean;
        /**
         * The purpose of having a maximum size is to avoid that the file on disk grows
         * indefinitely.
         *
         * `max_number_of_locations` is the maximum number of #GFile locations for which
         * metadata are kept. This function discards the least recently accessed
         * metadata if needed.
         *
         * If `max_number_of_locations` is -1, a default internal value is used that
         * should fit most applications' needs.
         * @param max_number_of_locations the maximum size, or -1 for the default value.
         */
        trim(max_number_of_locations: number): void;
    }

    module Notebook {
        // Constructor properties interface
    }

    class Notebook extends Gtk.Notebook {
        // Constructors of Tepl-6.Notebook

        static ['new'](): Notebook;
    }

    module Panel {
        // Constructor properties interface
    }

    class Panel extends Gtk.Grid {
        // Constructors of Tepl-6.Panel

        static ['new'](): Panel;

        static new_for_left_side_panel(): Panel;

        // Owm methods of Tepl-6.Panel

        /**
         * The equivalent of gtk_stack_add_titled(), with an optional `icon_name` to set
         * the “icon-name” #GtkStack child property.
         * @param component the child #GtkWidget to add to the #GtkStack of @panel.
         * @param name the name for @component.
         * @param title a human-readable title for @component.
         * @param icon_name the icon name for @component, or %NULL.
         */
        add_component(component: Gtk.Widget, name: string, title: string, icon_name?: string | null): void;
        get_stack(): Gtk.Stack;
        /**
         * Provides a #GSettings key for saving and restoring the
         * #GtkStack:visible-child-name property of the #GtkStack belonging to `panel`.
         *
         * This function just stores `settings` and `setting_key` for further use by
         * tepl_panel_restore_state_from_gsettings() and
         * tepl_panel_save_state_to_gsettings().
         *
         * Note that only one `settings/``setting_key` pair is stored by `panel` for
         * further use, if you call this function twice on the same `panel,` the second
         * call overrides the first one.
         * @param settings a #GSettings object.
         * @param setting_key a #GSettings key of type string.
         */
        provide_active_component_gsetting(settings: Gio.Settings, setting_key: string): void;
        /**
         * Restores the state of `panel` according to the provided #GSettings.
         *
         * This function must be called when all components have been added to the
         * #GtkStack of `panel`.
         */
        restore_state_from_gsettings(): void;
        /**
         * Saves the current state of `panel` to the provided #GSettings.
         */
        save_state_to_gsettings(): void;
    }

    module ProgressInfoBar {
        // Constructor properties interface
    }

    class ProgressInfoBar extends InfoBar {
        // Own properties of Tepl-6.ProgressInfoBar

        /**
         * Whether to add a Cancel button in the action area of the #GtkInfoBar,
         * with the %GTK_RESPONSE_CANCEL response.
         */
        has_cancel_button: boolean;
        /**
         * Whether to add a Cancel button in the action area of the #GtkInfoBar,
         * with the %GTK_RESPONSE_CANCEL response.
         */
        hasCancelButton: boolean;

        // Constructors of Tepl-6.ProgressInfoBar

        static ['new'](icon_name: string | null, markup: string | null, has_cancel_button: boolean): ProgressInfoBar;

        // Owm methods of Tepl-6.ProgressInfoBar

        /**
         * Calls gtk_progress_bar_pulse() on the #GtkProgressBar contained within the
         * `info_bar`.
         */
        pulse(): void;
        /**
         * Calls gtk_progress_bar_set_fraction() on the #GtkProgressBar contained within
         * the `info_bar`.
         * @param fraction fraction of the task that's been completed.
         */
        set_fraction(fraction: number): void;
        /**
         * Calls gtk_label_set_markup() on the #GtkLabel contained within the `info_bar`.
         * @param markup markup text.
         */
        set_markup(markup: string): void;
        /**
         * Calls gtk_label_set_text() on the #GtkLabel contained within the `info_bar`.
         * @param text text.
         */
        set_text(text: string): void;
    }

    module SpaceDrawerPrefs {
        // Constructor properties interface
    }

    class SpaceDrawerPrefs extends Gtk.Grid {
        // Constructors of Tepl-6.SpaceDrawerPrefs

        static ['new'](): SpaceDrawerPrefs;

        // Owm methods of Tepl-6.SpaceDrawerPrefs

        /**
         * Gets the #GtkSourceSpaceDrawer associated with `prefs`. The returned object is
         * guaranteed to be the same for the lifetime of `prefs`. Each
         * #TeplSpaceDrawerPrefs object has a different #GtkSourceSpaceDrawer.
         * @returns the #GtkSourceSpaceDrawer associated with @prefs.
         */
        get_space_drawer(): GtkSource.SpaceDrawer;
    }

    module Statusbar {
        // Constructor properties interface
    }

    class Statusbar extends Gtk.Statusbar {
        // Constructors of Tepl-6.Statusbar

        static ['new'](): Statusbar;

        // Owm methods of Tepl-6.Statusbar

        /**
         * The reverse action of tepl_statusbar_show_cursor_position(). This function
         * hides the text used to show the line and column numbers.
         */
        hide_cursor_position(): void;
        /**
         * Calls tepl_statusbar_show_cursor_position() and
         * tepl_statusbar_hide_cursor_position() according to the
         * #TeplTabGroup:active-view of `tab_group,` and the
         * #TeplBuffer::tepl-cursor-moved signal.
         *
         * For the column number it uses the gtk_source_view_get_visual_column()
         * function.
         *
         * This function can be called only once, it is not possible to change the
         * #TeplTabGroup afterwards (this restriction may be lifted in the future if
         * there is a compelling use-case).
         * @param tab_group a #TeplTabGroup.
         */
        set_tab_group(tab_group: TabGroup): void;
        /**
         * Shows the line and column numbers on the right side of the `statusbar`. (So
         * messages added with gtk_statusbar_push() are still visible after calling this
         * function).
         * @param line the line number, must be >= 1.
         * @param column the column number, must be >= 1.
         */
        show_cursor_position(line: number, column: number): void;
    }

    module StyleSchemeChooserWidget {
        // Constructor properties interface
    }

    class StyleSchemeChooserWidget extends Gtk.Bin {
        // Own properties of Tepl-6.StyleSchemeChooserWidget

        /**
         * The #GtkSourceStyleSchemeChooser:style-scheme ID, as a string. This
         * property is useful for binding it to a #GSettings key.
         *
         * When the #GtkSourceStyleSchemeChooser:style-scheme is %NULL, this
         * property contains the empty string.
         */
        tepl_style_scheme_id: string;
        /**
         * The #GtkSourceStyleSchemeChooser:style-scheme ID, as a string. This
         * property is useful for binding it to a #GSettings key.
         *
         * When the #GtkSourceStyleSchemeChooser:style-scheme is %NULL, this
         * property contains the empty string.
         */
        teplStyleSchemeId: string;

        // Constructors of Tepl-6.StyleSchemeChooserWidget

        static ['new'](): StyleSchemeChooserWidget;

        // Owm methods of Tepl-6.StyleSchemeChooserWidget

        get_style_scheme_id(): string;
        /**
         * Sets the #TeplStyleSchemeChooserWidget:tepl-style-scheme-id property.
         *
         * The #GtkSourceStyleScheme is taken from the default
         * #GtkSourceStyleSchemeManager as returned by
         * gtk_source_style_scheme_manager_get_default().
         * @param style_scheme_id the new value.
         */
        set_style_scheme_id(style_scheme_id: string): void;
    }

    module Tab {
        // Signal callback interfaces

        interface CloseRequest {
            (): void;
        }

        // Constructor properties interface
    }

    class Tab extends Gtk.Grid {
        // Own properties of Tepl-6.Tab

        /**
         * The #TeplView contained in the tab. When this property is set, the
         * ::pack_view virtual function is called.
         */
        view: View;

        // Constructors of Tepl-6.Tab

        static ['new'](): Tab;

        static new_with_view(view: View): Tab;

        // Owm methods of Tepl-6.Tab

        /**
         * Attaches `info_bar` to `tab`.
         *
         * This function calls the ::pack_info_bar virtual function.
         * @param info_bar a #GtkInfoBar.
         */
        add_info_bar(info_bar: Gtk.InfoBar): void;
        /**
         * A convenience function that calls gtk_text_view_get_buffer() on the
         * #TeplTab:view associated with the `tab`.
         * @returns the #TeplBuffer of the #TeplTab:view.
         */
        get_buffer(): Buffer;
        /**
         * Gets the #TeplGotoLineBar widget belonging to `tab`. The #TeplGotoLineBar must
         * not be destroyed by the application, the purpose of this function is to
         * show/hide the widget.
         * @returns the #TeplGotoLineBar widget belonging to @tab.
         */
        get_goto_line_bar(): GotoLineBar;
        get_view(): View;
        /**
         * Unconditionally loads a file in `tab,` regardless if there are unsaved changes
         * in the #GtkTextBuffer. The previous buffer content is lost.
         *
         * This function is asynchronous, there is no way to know when the file loading
         * is finished.
         * @param location a #GFile.
         */
        load_file(location: Gio.File): void;
        /**
         * Shows a #GtkFileChooser to save the `tab` to a different location, creates an
         * appropriate #TeplFileSaver and asynchronously runs it.
         *
         * See the #GAsyncResult documentation to know how to use this function.
         * @param callback a #GAsyncReadyCallback to call when the request is   satisfied.
         */
        save_as_async(callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * The same as tepl_tab_save_as_async(), but without callback.
         *
         * This function is useful when you don't need to know:
         * - when the operation is finished;
         * - and whether the operation ran successfully.
         */
        save_as_async_simple(): void;
        /**
         * Finishes a tab saving started with tepl_tab_save_as_async().
         * @param result a #GAsyncResult.
         * @returns whether the tab was saved successfully.
         */
        save_as_finish(result: Gio.AsyncResult): boolean;
        /**
         * Saves asynchronously the content of the `tab`. The #TeplFile:location must not
         * be %NULL.
         *
         * See the #GAsyncResult documentation to know how to use this function.
         * @param callback a #GAsyncReadyCallback to call when the request is   satisfied.
         */
        save_async(callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * The same as tepl_tab_save_async(), but without callback.
         *
         * This function is useful when you don't need to know:
         * - when the operation is finished;
         * - and whether the operation ran successfully.
         */
        save_async_simple(): void;
        /**
         * Finishes a tab saving started with tepl_tab_save_async().
         * @param result a #GAsyncResult.
         * @returns whether the tab was saved successfully.
         */
        save_finish(result: Gio.AsyncResult): boolean;
    }

    module TabLabel {
        // Constructor properties interface
    }

    class TabLabel extends Gtk.Grid {
        // Own properties of Tepl-6.TabLabel

        /**
         * The associated #TeplTab. #TeplTabLabel has a weak reference to the
         * #TeplTab.
         */
        tab: Tab;

        // Constructors of Tepl-6.TabLabel

        static ['new'](tab: Tab): TabLabel;

        // Owm methods of Tepl-6.TabLabel

        get_tab(): Tab | null;
        /**
         * Asks #TeplTabLabel to update its tooltip. The ::get_tooltip_markup virtual
         * function is called and the result is set with
         * gtk_widget_set_tooltip_markup().
         */
        update_tooltip(): void;
    }

    module View {
        // Constructor properties interface
    }

    class View extends GtkSource.View {
        // Constructors of Tepl-6.View

        static ['new'](): View;

        static new_with_buffer(buffer: GtkSource.Buffer): View;

        // Owm methods of Tepl-6.View

        /**
         * Copies the clipboard.
         */
        copy_clipboard(): void;
        /**
         * Cuts the clipboard and then scrolls to the cursor position.
         */
        cut_clipboard(): void;
        /**
         * Deletes the text currently selected in the #GtkTextBuffer associated
         * to the view and then scrolls to the cursor position.
         */
        delete_selection(): void;
        /**
         * Places the cursor at the position returned by
         * gtk_text_buffer_get_iter_at_line(), and scrolls to that position.
         * @param line a line number, counting from 0.
         * @returns %TRUE if the cursor has been moved exactly to @line, %FALSE if that   line didn't exist.
         */
        goto_line(line: number): boolean;
        /**
         * Places the cursor at the position returned by
         * gtk_text_buffer_get_iter_at_line_offset(), and scrolls to that position.
         * @param line a line number, counting from 0.
         * @param line_offset the line offset, in characters (not bytes).
         * @returns %TRUE if the cursor has been moved exactly to @line and   @line_offset, %FALSE if that position didn't exist.
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

    class AbstractFactoryClass {}

    class ApplicationClass {
        // Own fields of Tepl-6.ApplicationClass

        padding: any[];
    }

    class ApplicationPrivate {}

    class ApplicationWindowClass {
        // Own fields of Tepl-6.ApplicationWindowClass

        padding: any[];
    }

    class ApplicationWindowPrivate {}

    class BufferClass {
        // Own fields of Tepl-6.BufferClass

        padding: any[];
    }

    class FileClass {
        // Own fields of Tepl-6.FileClass

        padding: any[];
    }

    class FileLoaderClass {
        // Own fields of Tepl-6.FileLoaderClass

        padding: any[];
    }

    class FileLoaderPrivate {}

    class FilePrivate {}

    class FileSaverClass {
        // Own fields of Tepl-6.FileSaverClass

        padding: any[];
    }

    class FileSaverPrivate {}

    class FoldRegionClass {
        // Own fields of Tepl-6.FoldRegionClass

        padding: any[];
    }

    class GotoLineBarClass {
        // Own fields of Tepl-6.GotoLineBarClass

        padding: any[];
    }

    class GotoLineBarPrivate {}

    class GutterRendererFoldsClass {
        // Own fields of Tepl-6.GutterRendererFoldsClass

        padding: any[];
    }

    class InfoBarClass {
        // Own fields of Tepl-6.InfoBarClass

        padding: any[];
    }

    class InfoBarPrivate {}

    class LanguageChooserDialogClass {
        // Own fields of Tepl-6.LanguageChooserDialogClass

        padding: any[];
    }

    class LanguageChooserDialogPrivate {}

    /**
     * The virtual function table for #TeplLanguageChooser.
     */
    class LanguageChooserInterface {}

    class LanguageChooserWidgetClass {
        // Own fields of Tepl-6.LanguageChooserWidgetClass

        padding: any[];
    }

    class LanguageChooserWidgetPrivate {}

    class MetadataClass {
        // Own fields of Tepl-6.MetadataClass

        padding: any[];
    }

    class MetadataManagerClass {
        // Own fields of Tepl-6.MetadataManagerClass

        padding: any[];
    }

    class MetadataManagerPrivate {}

    class MetadataPrivate {}

    class NotebookClass {
        // Own fields of Tepl-6.NotebookClass

        padding: any[];
    }

    class NotebookPrivate {}

    class PanelClass {
        // Own fields of Tepl-6.PanelClass

        padding: any[];
    }

    class PanelPrivate {}

    class ProgressInfoBarClass {
        // Own fields of Tepl-6.ProgressInfoBarClass

        padding: any[];
    }

    class ProgressInfoBarPrivate {}

    class SignalGroup {}

    class SpaceDrawerPrefsClass {
        // Own fields of Tepl-6.SpaceDrawerPrefsClass

        padding: any[];
    }

    class SpaceDrawerPrefsPrivate {}

    class StatusbarClass {
        // Own fields of Tepl-6.StatusbarClass

        padding: any[];
    }

    class StatusbarPrivate {}

    class StyleSchemeChooserWidgetClass {
        // Own fields of Tepl-6.StyleSchemeChooserWidgetClass

        padding: any[];
    }

    class StyleSchemeChooserWidgetPrivate {}

    class TabClass {}

    /**
     * The virtual function table for #TeplTabGroup. When implementing one of the
     * vfunc, you can assume that the pre-conditions are already checked (the
     * parameters are valid).
     */
    class TabGroupInterface {}

    class TabLabelClass {}

    class TabLabelPrivate {}

    class TabPrivate {}

    class ViewClass {
        // Own fields of Tepl-6.ViewClass

        padding: any[];
    }

    interface LanguageChooser {
        // Owm methods of Tepl-6.LanguageChooser

        /**
         * Selects `language` in the list.
         * @param language a #GtkSourceLanguage, or %NULL for "Plain Text".
         */
        select_language(language?: GtkSource.Language | null): void;

        // Own virtual methods of Tepl-6.LanguageChooser

        vfunc_language_activated(language: GtkSource.Language): void;
        /**
         * Selects `language` in the list.
         * @param language a #GtkSourceLanguage, or %NULL for "Plain Text".
         */
        vfunc_select_language(language?: GtkSource.Language | null): void;
    }

    interface TabGroup {
        // Own properties of Tepl-6.TabGroup

        /**
         * The #TeplBuffer of the active tab.
         */
        readonly active_buffer: Buffer;
        /**
         * The #TeplBuffer of the active tab.
         */
        readonly activeBuffer: Buffer;
        /**
         * The #TeplTab currently shown.
         */
        active_tab: Tab;
        /**
         * The #TeplTab currently shown.
         */
        activeTab: Tab;
        /**
         * The #TeplView of the active tab.
         */
        readonly active_view: View;
        /**
         * The #TeplView of the active tab.
         */
        readonly activeView: View;

        // Owm methods of Tepl-6.TabGroup

        /**
         * Appends `tab` to `tab_group`.
         * @param tab a #TeplTab.
         * @param jump_to whether to set @tab as the active tab after appending it.
         */
        append_tab(tab: Tab, jump_to: boolean): void;
        /**
         * Convenience function.
         * @returns the #TeplBuffer of the active tab.
         */
        get_active_buffer(): Buffer | null;
        get_active_tab(): Tab | null;
        /**
         * Convenience function.
         * @returns the #TeplView of the active tab.
         */
        get_active_view(): View | null;
        /**
         * Convenience function.
         * @returns like tepl_tab_group_get_tabs(), but returns #TeplBuffer's.
         */
        get_buffers(): Buffer[];
        /**
         * Gets the list of #TeplTab's contained in `tab_group`.
         *
         * If `tab_group` contains non-#TeplTab children, those will not be present in the
         * returned list. In other words, it is <emphasis>not</emphasis> guaranteed that
         * the index of a #TeplTab in the returned #GList has the same child index in
         * the `tab_group` container.
         * @returns the list of all the #TeplTab's contained in @tab_group.
         */
        get_tabs(): Tab[];
        /**
         * Convenience function.
         * @returns like tepl_tab_group_get_tabs(), but returns #TeplView's.
         */
        get_views(): View[];
        /**
         * Sets the #TeplTabGroup:active-tab. `tab` must be part of `tab_group`.
         * @param tab a #TeplTab part of @tab_group.
         */
        set_active_tab(tab: Tab): void;

        // Own virtual methods of Tepl-6.TabGroup

        vfunc_append_tab_vfunc(tab: Tab): void;
        vfunc_get_active_tab(): Tab | null;
        /**
         * Gets the list of #TeplTab's contained in `tab_group`.
         *
         * If `tab_group` contains non-#TeplTab children, those will not be present in the
         * returned list. In other words, it is <emphasis>not</emphasis> guaranteed that
         * the index of a #TeplTab in the returned #GList has the same child index in
         * the `tab_group` container.
         */
        vfunc_get_tabs(): Tab[];
        /**
         * Sets the #TeplTabGroup:active-tab. `tab` must be part of `tab_group`.
         * @param tab a #TeplTab part of @tab_group.
         */
        vfunc_set_active_tab(tab: Tab): void;
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

export default Tepl;
// END
