/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

// Module dependencies
import type GtkSource from '@girs/gtksource-300';
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
import type GModule from '@girs/gmodule-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Atk from '@girs/atk-1.0';
import type Amtk from '@girs/amtk-5';

export namespace Tepl {
    /**
     * Tepl-6
     */

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
    export namespace InfoBarLocation {
        export const $gtype: GObject.GType<InfoBarLocation>;
    }

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

    export namespace NewlineType {
        export const $gtype: GObject.GType<NewlineType>;
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

    export namespace SelectionType {
        export const $gtype: GObject.GType<SelectionType>;
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
     * Gets a list of all encodings known by #TeplEncodingIconv.
     * @returns a list of   #TeplEncodingIconv's.
     */
    function encoding_iconv_get_all(): EncodingIconv[];
    /**
     * Gets the list of default candidate encodings to try when loading a file. See
     * gtk_source_file_loader_set_candidate_encodings().
     *
     * This function returns a different list depending on the current locale (i.e.
     * language, country and default encoding). The UTF-8 encoding and the current
     * locale encoding are guaranteed to be present in the returned list.
     *
     * Note that the returned list doesn't contain all encodings known by
     * #TeplEncodingIconv, it is a limited list that contains only the encodings
     * that have the most likelihood to fit for the current locale.
     * @returns the list of   default candidate encodings.
     */
    function encoding_iconv_get_default_candidates(): EncodingIconv[];
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
     * - Ignore: %GTK_RESPONSE_CLOSE.
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
     * When attempting to save `location,` creates a warning about `location` having
     * changed on disk. The possible actions:
     * - Save anyway: %GTK_RESPONSE_YES.
     * - Don't save: %GTK_RESPONSE_CANCEL.
     * @param location a #GFile.
     * @returns the newly created #TeplInfoBar.
     */
    function io_error_info_bar_saving_externally_modified(location: Gio.File): InfoBar;
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
     * See also tepl_utils_override_font_description() and
     * tepl_utils_override_font_string().
     * @param desc a #PangoFontDescription.
     * @returns A newly allocated string containing the CSS   describing the font description. Free with g_free() when no longer needed.
     */
    function pango_font_description_to_css(desc: Pango.FontDescription): string;
    /**
     * This function creates a component containing a #TeplStyleSchemeChooserWidget.
     * @param settings a #GSettings.
     * @param style_scheme_key a key part of @settings to store the style scheme ID. The   type of the key must be a string.
     * @returns A component for choosing the   #GtkSourceStyleScheme to use.
     */
    function prefs_create_color_scheme_component(settings: Gio.Settings, style_scheme_key: string): Gtk.Widget;
    function prefs_create_display_line_numbers_checkbutton(
        settings: Gio.Settings,
        display_line_numbers_key: string,
    ): Gtk.Widget;
    function prefs_create_files_component(
        settings: Gio.Settings,
        create_backup_copy_key: string,
        auto_save_key: string,
        auto_save_interval: string,
    ): Gtk.Widget;
    function prefs_create_font_component(
        settings: Gio.Settings,
        use_default_font_key: string,
        editor_font_key: string,
    ): Gtk.Widget;
    function prefs_create_highlighting_component(
        settings: Gio.Settings,
        highlight_current_line_key: string,
        highlight_matching_brackets_key: string,
    ): Gtk.Widget;
    function prefs_create_insert_spaces_component(
        settings: Gio.Settings,
        insert_spaces_key: string,
        smart_backspace_key: string,
    ): Gtk.Widget;
    function prefs_create_tab_width_spinbutton(settings: Gio.Settings, tab_width_key: string): Gtk.Widget;
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
        from_value: GObject.Value | any,
        to_value: GObject.Value | any,
        user_data?: any | null,
    ): boolean;
    /**
     * Especially useful for external #GSettings (provided by another application
     * for instance).
     *
     * See also: tepl_utils_can_use_gsettings_schema() which is typically used
     * before this function.
     * @param settings a #GSettings object.
     * @param key the key to introspect.
     * @returns whether the #GSettings key exists.
     */
    function utils_can_use_gsettings_key(settings: Gio.Settings, key: string): boolean;
    /**
     * Checks that a #GSettings schema exists.
     *
     * Especially useful for external #GSettings (provided by another application
     * for instance).
     * @param schema_id a #GSettings schema ID.
     * @returns %TRUE if a #GSettings instance can be created with @schema_id.   %FALSE otherwise (in that case the program would crash).
     */
    function utils_can_use_gsettings_schema(schema_id: string): boolean;
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
    function utils_decode_uri(uri: string): [boolean, string, string, string, string, string];
    /**
     * The asynchronous version of g_file_query_exists(). When the operation is
     * finished, `callback` will be called. You can then call
     * tepl_utils_file_query_exists_finish() to get the result of the operation.
     * @param file a #GFile.
     * @param cancellable a #GCancellable.
     */
    function utils_file_query_exists_async(file: Gio.File, cancellable?: Gio.Cancellable | null): Promise<boolean>;
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
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<Gio.File> | null,
    ): void;
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
    ): Promise<boolean> | void;
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
     * To add a title to a GUI component.
     *
     * Useful for example in a #GtkDialog window, when there are several components,
     * or logical groups.
     *
     * The title will be in bold, left-aligned, and the `component` will have a left
     * margin.
     * @param title the title.
     * @param component a #GtkWidget.
     * @returns a new widget containing the @title above the @component.
     */
    function utils_get_titled_component(title: string, component: Gtk.Widget): Gtk.Widget;
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
    ): [Gtk.ListBoxRow[] | null, number];
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
     * See also tepl_pango_font_description_to_css().
     * @param widget a #GtkWidget.
     * @param font_desc the #PangoFontDescription to use, or %NULL to undo   the effect of previous calls to this function on @widget.
     */
    function utils_override_font_description(widget: Gtk.Widget, font_desc?: Pango.FontDescription | null): void;
    /**
     * A convenience function that calls tepl_utils_override_font_description().
     *
     * See pango_font_description_from_string() for a description of the format of
     * the string representation for `font_str`.
     * @param widget a #GtkWidget.
     * @param font_str a string representation of a #PangoFontDescription, or   %NULL to undo the effect of previous calls to this function on @widget.
     */
    function utils_override_font_string(widget: Gtk.Widget, font_str?: string | null): void;
    /**
     * Replaces the home directory with a tilde, if the home directory is present in
     * the `filename`.
     * @param filename the filename.
     * @returns the new filename. Free with g_free().
     */
    function utils_replace_home_dir_with_tilde(filename: string): string;
    /**
     * To better configure a #GtkStatusbar (to make it smaller).
     * @param statusbar a #GtkStatusbar.
     */
    function utils_setup_statusbar(statusbar: Gtk.Statusbar): void;
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
    interface UntitledFileCallback {
        (untitled_file_number: number): string;
    }
    /**
     * Flags to define the behavior of a #TeplFileSaver.
     */

    /**
     * Flags to define the behavior of a #TeplFileSaver.
     */
    export namespace FileSaverFlags {
        export const $gtype: GObject.GType<FileSaverFlags>;
    }

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

    /**
     * The folding state at a certain line in the #GtkTextBuffer.
     *
     * Since #TeplGutterRendererFolds has a flat view of the folding tree, some
     * states can be combined; for example, %TEPL_GUTTER_RENDERER_FOLDS_STATE_END
     * and %TEPL_GUTTER_RENDERER_FOLDS_STATE_CONTINUE.
     */
    export namespace GutterRendererFoldsState {
        export const $gtype: GObject.GType<GutterRendererFoldsState>;
    }

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

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class AbstractFactory extends GObject.Object {
        static $gtype: GObject.GType<AbstractFactory>;

        // Constructors

        constructor(properties?: Partial<AbstractFactory.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Static methods

        /**
         * Gets the #TeplAbstractFactory singleton instance.
         *
         * If tepl_abstract_factory_set_singleton() has not been called, the singleton
         * is created with a #TeplAbstractFactory instance.
         */
        static get_singleton(): AbstractFactory;

        // Virtual methods

        /**
         * Virtual function pointer for
         *   tepl_abstract_factory_create_file(). By default the #TeplFile is created
         *   with tepl_file_new().
         */
        vfunc_create_file(): File;
        /**
         * Creates a main #GtkApplicationWindow in the sense of
         * tepl_application_window_is_main_window().
         * @param app a #GtkApplication.
         */
        vfunc_create_main_window(app: Gtk.Application): Gtk.ApplicationWindow | null;
        /**
         * Creates a new #GFile that is then intended to be used as an argument to
         * tepl_metadata_manager_load_from_disk() and
         * tepl_metadata_manager_save_to_disk(). This function just creates the #GFile
         * object, it doesn't call any #TeplMetadataManager function.
         */
        vfunc_create_metadata_manager_file(): Gio.File | null;
        /**
         * Virtual function pointer for tepl_abstract_factory_create_tab().
         *   By default the #TeplTab is created with tepl_tab_new().
         */
        vfunc_create_tab(): Tab;
        /**
         * Creates a new tab label for `tab,` suitable for gtk_notebook_set_tab_label().
         * @param tab a #TeplTab.
         */
        vfunc_create_tab_label(tab: Tab): Gtk.Widget | null;
        /**
         * `dialog` is a newly-created #TeplPrefsDialog. This function fills `dialog` with
         * the intended content.
         * @param dialog a #TeplPrefsDialog.
         */
        vfunc_fill_prefs_dialog(dialog: PrefsDialog): void;

        // Methods

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
         * `dialog` is a newly-created #TeplPrefsDialog. This function fills `dialog` with
         * the intended content.
         * @param dialog a #TeplPrefsDialog.
         */
        fill_prefs_dialog(dialog: PrefsDialog): void;
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

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            application: Gtk.Application;
        }
    }

    class Application extends GObject.Object {
        static $gtype: GObject.GType<Application>;

        // Properties

        /**
         * The #GtkApplication.
         */
        get application(): Gtk.Application;

        // Constructors

        constructor(properties?: Partial<Application.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Static methods

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

        // Methods

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

        interface ConstructorProps extends GObject.Object.ConstructorProps, TabGroup.ConstructorProps {
            application_window: Gtk.ApplicationWindow;
            applicationWindow: Gtk.ApplicationWindow;
            handle_title: boolean;
            handleTitle: boolean;
        }
    }

    class ApplicationWindow extends GObject.Object implements TabGroup {
        static $gtype: GObject.GType<ApplicationWindow>;

        // Properties

        /**
         * The #GtkApplicationWindow.
         */
        get application_window(): Gtk.ApplicationWindow;
        /**
         * The #GtkApplicationWindow.
         */
        get applicationWindow(): Gtk.ApplicationWindow;
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
        get handle_title(): boolean;
        set handle_title(val: boolean);
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
        get handleTitle(): boolean;
        set handleTitle(val: boolean);

        // Constructors

        constructor(properties?: Partial<ApplicationWindow.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Static methods

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

        // Methods

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

        // Inherited properties
        /**
         * The #TeplBuffer of the active tab.
         */
        get active_buffer(): Buffer;
        /**
         * The #TeplBuffer of the active tab.
         */
        get activeBuffer(): Buffer;
        /**
         * The #TeplTab currently shown.
         */
        get active_tab(): Tab;
        set active_tab(val: Tab);
        /**
         * The #TeplTab currently shown.
         */
        get activeTab(): Tab;
        set activeTab(val: Tab);
        /**
         * The #TeplView of the active tab.
         */
        get active_view(): View;
        /**
         * The #TeplView of the active tab.
         */
        get activeView(): View;

        // Inherited methods
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
        /**
         * Virtual function pointer for tepl_tab_group_append_tab(),
         *   without the `jump_to` parameter. The default implementation prints a warning
         *   about the operation not being supported.
         * @param tab
         */
        vfunc_append_tab_vfunc(tab: Tab): void;
        /**
         * Virtual function pointer for tepl_tab_group_get_active_tab().
         *   By default, %NULL is returned.
         */
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
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
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module Buffer {
        // Signal callback interfaces

        interface TeplCursorMoved {
            (): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GtkSource.Buffer.ConstructorProps {
            tepl_full_title: string;
            teplFullTitle: string;
            tepl_short_title: string;
            teplShortTitle: string;
            tepl_style_scheme_id: string;
            teplStyleSchemeId: string;
        }
    }

    class Buffer extends GtkSource.Buffer {
        static $gtype: GObject.GType<Buffer>;

        // Properties

        /**
         * The full title. See tepl_buffer_get_full_title().
         */
        get tepl_full_title(): string;
        /**
         * The full title. See tepl_buffer_get_full_title().
         */
        get teplFullTitle(): string;
        /**
         * The short title. See tepl_buffer_get_short_title().
         */
        get tepl_short_title(): string;
        /**
         * The short title. See tepl_buffer_get_short_title().
         */
        get teplShortTitle(): string;
        /**
         * The #GtkSourceBuffer:style-scheme ID, as a string. This property is
         * useful for binding it to a #GSettings key.
         *
         * When the #GtkSourceBuffer:style-scheme is %NULL,
         * #TeplBuffer:tepl-style-scheme-id contains the empty string.
         */
        get tepl_style_scheme_id(): string;
        set tepl_style_scheme_id(val: string);
        /**
         * The #GtkSourceBuffer:style-scheme ID, as a string. This property is
         * useful for binding it to a #GSettings key.
         *
         * When the #GtkSourceBuffer:style-scheme is %NULL,
         * #TeplBuffer:tepl-style-scheme-id contains the empty string.
         */
        get teplStyleSchemeId(): string;
        set teplStyleSchemeId(val: string);

        // Constructors

        constructor(properties?: Partial<Buffer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Buffer;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'tepl-cursor-moved', callback: (_source: this) => void): number;
        connect_after(signal: 'tepl-cursor-moved', callback: (_source: this) => void): number;
        emit(signal: 'tepl-cursor-moved'): void;

        // Virtual methods

        vfunc_tepl_cursor_moved(): void;

        // Methods

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
         * A convenience function to provide a #GSettings key corresponding to the
         * #TeplBuffer:tepl-style-scheme-id property.
         *
         * Once this function is called, calling tepl_buffer_set_style_scheme_id() or
         * setting the property will benefit from a fallback mechanism that takes the
         * default value of the #GSettings key (see g_settings_get_default_value()).
         *
         * If `bind_to_property` is %TRUE, then this function additionally binds the
         * #GSettings key to the property with the %G_SETTINGS_BIND_GET flag.
         * @param settings a #GSettings object.
         * @param setting_key a #GSettings key of type string.
         * @param bind_to_property whether to bind the #GSettings key to the property.
         */
        provide_style_scheme_id_gsetting(settings: Gio.Settings, setting_key: string, bind_to_property: boolean): void;
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
         *
         * Since 6.4, if there are no #GtkSourceStyleScheme for `style_scheme_id,` there
         * is a fallback mechanism that takes the default value of the provided
         * #GSettings key (see tepl_buffer_provide_style_scheme_id_gsetting()); if the
         * #GSettings key was not provided, it takes a recommended #GtkSourceStyleScheme
         * provided by GtkSourceView (see the documentation of
         * gtk_source_buffer_set_style_scheme()).
         *
         * If more flexibility is desired, don't use the
         * #TeplBuffer:tepl-style-scheme-id property, use the #GtkSourceBuffer API
         * instead.
         * @param style_scheme_id the new value.
         */
        set_style_scheme_id(style_scheme_id: string): void;
    }

    module File {
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

    class File extends GObject.Object {
        static $gtype: GObject.GType<File>;

        // Properties

        /**
         * Convenience property for the full name of a #TeplFile.
         *
         * When the #TeplFile:location is %NULL, this property has the same
         * value as the #TeplFile:short-name.
         *
         * When the #TeplFile:location is not %NULL, this property contains the
         * full path to the location. It uses:
         * - g_file_get_parse_name()
         * - tepl_utils_replace_home_dir_with_tilde()
         */
        get full_name(): string;
        /**
         * Convenience property for the full name of a #TeplFile.
         *
         * When the #TeplFile:location is %NULL, this property has the same
         * value as the #TeplFile:short-name.
         *
         * When the #TeplFile:location is not %NULL, this property contains the
         * full path to the location. It uses:
         * - g_file_get_parse_name()
         * - tepl_utils_replace_home_dir_with_tilde()
         */
        get fullName(): string;
        /**
         * The location.
         */
        get location(): Gio.File;
        set location(val: Gio.File);
        /**
         * The line ending type.
         */
        get newline_type(): NewlineType;
        /**
         * The line ending type.
         */
        get newlineType(): NewlineType;
        /**
         * The file short name.
         *
         * When the #TeplFile:location is %NULL, this property contains by
         * default "Untitled File N" (translated), with N the Nth untitled file
         * of the application, starting at 1. When an untitled file is closed
         * (when the #TeplFile is freed) or its #TeplFile:location is set, its
         * untitled number is released and can be used by a later file.
         *
         * See tepl_file_set_untitled_file_callback() to customize the string.
         * Other examples: "Unsaved" instead of "Untitled", or "Document"
         * instead of "File".
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
        get short_name(): string;
        /**
         * The file short name.
         *
         * When the #TeplFile:location is %NULL, this property contains by
         * default "Untitled File N" (translated), with N the Nth untitled file
         * of the application, starting at 1. When an untitled file is closed
         * (when the #TeplFile is freed) or its #TeplFile:location is set, its
         * untitled number is released and can be used by a later file.
         *
         * See tepl_file_set_untitled_file_callback() to customize the string.
         * Other examples: "Unsaved" instead of "Untitled", or "Document"
         * instead of "File".
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
        get shortName(): string;

        // Constructors

        constructor(properties?: Partial<File.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): File;

        // Static methods

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

        // Methods

        /**
         * If the #TeplFile:location isn't %NULL, adds its URI to the default
         * #GtkRecentManager with gtk_recent_manager_add_item().
         */
        add_uri_to_recent_manager(): void;
        get_full_name(): string;
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

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            buffer: Buffer;
            file: File;
            location: Gio.File;
        }
    }

    class FileLoader extends GObject.Object {
        static $gtype: GObject.GType<FileLoader>;

        // Properties

        /**
         * The #TeplBuffer to load the content into. The #TeplFileLoader object
         * has a weak reference to the buffer.
         */
        get buffer(): Buffer;
        /**
         * The #TeplFile. The #TeplFileLoader object has a weak
         * reference to the file.
         */
        get file(): File;
        /**
         * The #GFile to load. By default the location is taken from the
         * #TeplFile at construction time.
         */
        get location(): Gio.File;

        // Constructors

        constructor(properties?: Partial<FileLoader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](buffer: Buffer, file: File): FileLoader;

        // Methods

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

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            buffer: Buffer;
            file: File;
            flags: FileSaverFlags;
            location: Gio.File;
            newline_type: NewlineType;
            newlineType: NewlineType;
        }
    }

    class FileSaver extends GObject.Object {
        static $gtype: GObject.GType<FileSaver>;

        // Properties

        /**
         * The #TeplBuffer to save. The #TeplFileSaver object has a weak
         * reference to the buffer.
         */
        get buffer(): Buffer;
        /**
         * The #TeplFile. The #TeplFileSaver object has a weak reference to the
         * file.
         */
        get file(): File;
        /**
         * File saving flags.
         */
        get flags(): FileSaverFlags;
        set flags(val: FileSaverFlags);
        /**
         * The #GFile where to save the buffer. By default the location is taken
         * from the #TeplFile at construction time.
         */
        get location(): Gio.File;
        /**
         * The newline type.
         */
        get newline_type(): NewlineType;
        set newline_type(val: NewlineType);
        /**
         * The newline type.
         */
        get newlineType(): NewlineType;
        set newlineType(val: NewlineType);

        // Fields

        object: GObject.Object;

        // Constructors

        constructor(properties?: Partial<FileSaver.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](buffer: Buffer, file: File): FileSaver;

        static new_with_target(buffer: Buffer, file: File, target_location: Gio.File): FileSaver;

        // Methods

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

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            buffer: Gtk.TextBuffer;
            folded: boolean;
        }
    }

    class FoldRegion extends GObject.Object {
        static $gtype: GObject.GType<FoldRegion>;

        // Properties

        /**
         * The #GtkTextBuffer where the fold region is applied. The
         * #TeplFoldRegion object has a weak reference to the buffer.
         */
        get buffer(): Gtk.TextBuffer;
        /**
         * Whether the #TeplFoldRegion is folded or not.
         */
        get folded(): boolean;
        set folded(val: boolean);

        // Constructors

        constructor(properties?: Partial<FoldRegion.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](buffer: Gtk.TextBuffer, start: Gtk.TextIter, end: Gtk.TextIter): FoldRegion;

        // Methods

        /**
         * Obtains iterators pointing to the start and end of the #TeplFoldRegion.
         * @returns %TRUE on success, %FALSE otherwise.
         */
        get_bounds(): [boolean, Gtk.TextIter, Gtk.TextIter];
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

        interface ConstructorProps
            extends Gtk.Grid.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.Orientable.ConstructorProps {}
    }

    class GotoLineBar extends Gtk.Grid implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<GotoLineBar>;

        // Constructors

        constructor(properties?: Partial<GotoLineBar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): GotoLineBar;

        // Methods

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

        // Inherited properties
        /**
         * The orientation of the orientable.
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        // Inherited methods
        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the @orientable.
         */
        get_orientation(): Gtk.Orientation;
        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation): void;
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
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
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module GutterRendererFolds {
        // Constructor properties interface

        interface ConstructorProps extends GtkSource.GutterRenderer.ConstructorProps {}
    }

    class GutterRendererFolds extends GtkSource.GutterRenderer {
        static $gtype: GObject.GType<GutterRendererFolds>;

        // Constructors

        constructor(properties?: Partial<GutterRendererFolds.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): GutterRendererFolds;

        // Methods

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

        interface ConstructorProps
            extends Gtk.InfoBar.ConstructorProps,
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

    class InfoBar extends Gtk.InfoBar implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<InfoBar>;

        // Properties

        /**
         * If this property is %TRUE, then the #TeplInfoBar is destroyed with
         * gtk_widget_destroy() when the #GtkInfoBar::response signal is
         * received with the `response_id` %GTK_RESPONSE_CLOSE.
         */
        get handle_close_response(): boolean;
        set handle_close_response(val: boolean);
        /**
         * If this property is %TRUE, then the #TeplInfoBar is destroyed with
         * gtk_widget_destroy() when the #GtkInfoBar::response signal is
         * received with the `response_id` %GTK_RESPONSE_CLOSE.
         */
        get handleCloseResponse(): boolean;
        set handleCloseResponse(val: boolean);
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
        get icon_from_message_type(): boolean;
        set icon_from_message_type(val: boolean);
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
        get iconFromMessageType(): boolean;
        set iconFromMessageType(val: boolean);
        /**
         * If set to a non-%NULL value, then an icon is shown on the left.
         *
         * If this property has a non-%NULL value, then the
         * #TeplInfoBar:icon-from-message-type property is not taken into
         * account.
         */
        get icon_name(): string;
        set icon_name(val: string);
        /**
         * If set to a non-%NULL value, then an icon is shown on the left.
         *
         * If this property has a non-%NULL value, then the
         * #TeplInfoBar:icon-from-message-type property is not taken into
         * account.
         */
        get iconName(): string;
        set iconName(val: string);

        // Constructors

        constructor(properties?: Partial<InfoBar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): InfoBar;

        static new_simple(msg_type: Gtk.MessageType, primary_msg: string, secondary_msg?: string | null): InfoBar;

        // Static methods

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

        // Methods

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

        // Inherited methods
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
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
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module LanguageChooserDialog {
        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Dialog.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                LanguageChooser.ConstructorProps {}
    }

    class LanguageChooserDialog extends Gtk.Dialog implements Atk.ImplementorIface, Gtk.Buildable, LanguageChooser {
        static $gtype: GObject.GType<LanguageChooserDialog>;

        // Constructors

        constructor(properties?: Partial<LanguageChooserDialog.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](parent?: Gtk.Window | null): LanguageChooserDialog;
        // Conflicted with Gtk.Dialog.new

        static ['new'](...args: never[]): any;

        // Inherited methods
        /**
         * Selects `language` in the list.
         * @param language a #GtkSourceLanguage, or %NULL for "Plain Text".
         */
        select_language(language?: GtkSource.Language | null): void;
        /**
         * The function pointer for the
         *   #TeplLanguageChooser::language-activated signal.
         * @param language
         */
        vfunc_language_activated(language: GtkSource.Language): void;
        /**
         * Selects `language` in the list.
         * @param language a #GtkSourceLanguage, or %NULL for "Plain Text".
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
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
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module LanguageChooserWidget {
        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Grid.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.Orientable.ConstructorProps,
                LanguageChooser.ConstructorProps {}
    }

    class LanguageChooserWidget
        extends Gtk.Grid
        implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable, LanguageChooser
    {
        static $gtype: GObject.GType<LanguageChooserWidget>;

        // Constructors

        constructor(properties?: Partial<LanguageChooserWidget.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): LanguageChooserWidget;

        // Inherited properties
        /**
         * The orientation of the orientable.
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        // Inherited methods
        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the @orientable.
         */
        get_orientation(): Gtk.Orientation;
        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation): void;
        /**
         * Selects `language` in the list.
         * @param language a #GtkSourceLanguage, or %NULL for "Plain Text".
         */
        select_language(language?: GtkSource.Language | null): void;
        /**
         * The function pointer for the
         *   #TeplLanguageChooser::language-activated signal.
         * @param language
         */
        vfunc_language_activated(language: GtkSource.Language): void;
        /**
         * Selects `language` in the list.
         * @param language a #GtkSourceLanguage, or %NULL for "Plain Text".
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
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
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module LineColumnIndicator {
        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Bin.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps {}
    }

    class LineColumnIndicator extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<LineColumnIndicator>;

        // Constructors

        constructor(properties?: Partial<LineColumnIndicator.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): LineColumnIndicator;

        // Methods

        /**
         * Sets a #TeplTabGroup to update automatically the values for the line and
         * column of the current cursor position, for the current
         * #TeplTabGroup:active-tab.
         *
         * This function can be called only once per `indicator`.
         *
         * Use tepl_line_column_indicator_set_view() or
         * tepl_line_column_indicator_set_tab_group(), but not both.
         * @param tab_group a #TeplTabGroup.
         */
        set_tab_group(tab_group: TabGroup): void;
        /**
         * Sets a #TeplView to update automatically the values for the line and column
         * of the current cursor position. If `view` is %NULL, then `indicator` will be
         * empty.
         *
         * Use tepl_line_column_indicator_set_view() or
         * tepl_line_column_indicator_set_tab_group(), but not both.
         * @param view a #TeplView, or %NULL.
         */
        set_view(view?: View | null): void;

        // Inherited methods
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
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
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module Metadata {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Metadata extends GObject.Object {
        static $gtype: GObject.GType<Metadata>;

        // Constructors

        constructor(properties?: Partial<Metadata.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Metadata;

        // Methods

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
        // Conflicted with GObject.Object.set
        set(...args: never[]): any;
    }

    module MetadataManager {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class MetadataManager extends GObject.Object {
        static $gtype: GObject.GType<MetadataManager>;

        // Constructors

        constructor(properties?: Partial<MetadataManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Static methods

        static get_singleton(): MetadataManager;

        // Methods

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

        interface ConstructorProps
            extends Gtk.Notebook.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                TabGroup.ConstructorProps {}
    }

    class Notebook extends Gtk.Notebook implements Atk.ImplementorIface, Gtk.Buildable, TabGroup {
        static $gtype: GObject.GType<Notebook>;

        // Constructors

        constructor(properties?: Partial<Notebook.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Notebook;

        // Inherited properties
        /**
         * The #TeplBuffer of the active tab.
         */
        get active_buffer(): Buffer;
        /**
         * The #TeplBuffer of the active tab.
         */
        get activeBuffer(): Buffer;
        /**
         * The #TeplTab currently shown.
         */
        get active_tab(): Tab;
        set active_tab(val: Tab);
        /**
         * The #TeplTab currently shown.
         */
        get activeTab(): Tab;
        set activeTab(val: Tab);
        /**
         * The #TeplView of the active tab.
         */
        get active_view(): View;
        /**
         * The #TeplView of the active tab.
         */
        get activeView(): View;

        // Inherited methods
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
        /**
         * Virtual function pointer for tepl_tab_group_append_tab(),
         *   without the `jump_to` parameter. The default implementation prints a warning
         *   about the operation not being supported.
         * @param tab
         */
        vfunc_append_tab_vfunc(tab: Tab): void;
        /**
         * Virtual function pointer for tepl_tab_group_get_active_tab().
         *   By default, %NULL is returned.
         */
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
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
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module OverwriteIndicator {
        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Bin.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps {
            overwrite: boolean;
        }
    }

    class OverwriteIndicator extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<OverwriteIndicator>;

        // Properties

        /**
         * - If %TRUE, indicates the overwrite mode.
         * - If %FALSE, indicates the insert mode.
         */
        get overwrite(): boolean;
        set overwrite(val: boolean);

        // Constructors

        constructor(properties?: Partial<OverwriteIndicator.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): OverwriteIndicator;

        // Methods

        get_overwrite(): boolean;
        /**
         * Sets a new value to the #TeplOverwriteIndicator:overwrite property.
         * @param overwrite the new value.
         */
        set_overwrite(overwrite: boolean): void;
        /**
         * Sets a #GtkTextView to update automatically the state of `indicator` according
         * to `view`. If `view` is %NULL, then `indicator` will be empty.
         * @param view a #GtkTextView, or %NULL.
         */
        set_view(view?: Gtk.TextView | null): void;

        // Inherited methods
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
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
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module Panel1 {
        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Grid.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.Orientable.ConstructorProps {}
    }

    class Panel1 extends Gtk.Grid implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<Panel1>;

        // Constructors

        constructor(properties?: Partial<Panel1.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Panel1;

        static new_for_left_side_panel(): Panel1;

        // Methods

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
         * tepl_panel1_restore_state_from_gsettings() and
         * tepl_panel1_save_state_to_gsettings(). It doesn't bind the #GSettings key to
         * the property, because each main window containing a #TeplPanel1 needs to be
         * able to have a different state, and have more control over when that state is
         * restored and saved. Once a #TeplPanel1 is created and fully populated, the
         * setting can be restored. The setting can be saved according to the current
         * main window before creating a new main window, and of course on application
         * exit.
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

        // Inherited properties
        /**
         * The orientation of the orientable.
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        // Inherited methods
        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the @orientable.
         */
        get_orientation(): Gtk.Orientation;
        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation): void;
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
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
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module PanelContainer {
        // Signal callback interfaces

        interface Changed {
            (): void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Bin.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Panel.ConstructorProps {}
    }

    class PanelContainer extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable, Panel {
        static $gtype: GObject.GType<PanelContainer>;

        // Constructors

        constructor(properties?: Partial<PanelContainer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): PanelContainer;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'changed', callback: (_source: this) => void): number;
        connect_after(signal: 'changed', callback: (_source: this) => void): number;
        emit(signal: 'changed'): void;

        // Methods

        get_active_item(): PanelItem | null;
        get_active_item_name(): string | null;
        get_items(): PanelItem[];
        /**
         * Convenience function. Useful to implement a switcher widget.
         * @returns whether @container has more than one #TeplPanelItem.
         */
        has_several_items(): boolean;
        /**
         * Calls tepl_panel_set_active() with the #TeplPanelItem named `name` (if found).
         * @param name a name.
         */
        set_active_item_name(name: string): void;

        // Inherited methods
        /**
         * Adds an item to the panel. See #TeplPanelItem for the meaning of the parameters.
         *
         * `widget` should have its #GtkWidget:visible property set to %TRUE in order to
         * be correctly shown in the panel.
         *
         * A #TeplPanelItem object is returned, which can be used as a parameter to
         * other #TeplPanel functions (#TeplPanelItem serves as a kind of handle).
         *
         * Note that #TeplPanel also owns a reference to the #TeplPanelItem. So either
         * store the #TeplPanelItem for later use, or unref it directly after calling
         * this function.
         * @param widget a #GtkWidget.
         * @param name the name.
         * @param title the title.
         * @param icon_name the icon-name.
         * @returns a new #TeplPanelItem object.
         */
        add(
            widget: Gtk.Widget,
            name?: string | null,
            title?: string | null,
            icon_name?: string | null,
        ): PanelItem | null;
        // Conflicted with Gtk.Container.add
        add(...args: never[]): any;
        /**
         * Removes an item from `panel`.
         * @param item the #TeplPanelItem to remove.
         */
        remove(item: PanelItem): void;
        // Conflicted with Gtk.Container.remove
        remove(...args: never[]): any;
        /**
         * Sets `item` to be the one that is currently shown in `panel`.
         *
         * This is different than setting the #GtkWidget:visible property to %TRUE. All
         * #GtkWidget's of a `panel` should have their #GtkWidget:visible property set to
         * %TRUE all the time, but only one #TeplPanelItem is shown at a time.
         * @param item a #TeplPanelItem.
         */
        set_active(item: PanelItem): void;
        /**
         * Adds an item to the panel. See #TeplPanelItem for the meaning of the parameters.
         *
         * `widget` should have its #GtkWidget:visible property set to %TRUE in order to
         * be correctly shown in the panel.
         *
         * A #TeplPanelItem object is returned, which can be used as a parameter to
         * other #TeplPanel functions (#TeplPanelItem serves as a kind of handle).
         *
         * Note that #TeplPanel also owns a reference to the #TeplPanelItem. So either
         * store the #TeplPanelItem for later use, or unref it directly after calling
         * this function.
         * @param widget a #GtkWidget.
         * @param name the name.
         * @param title the title.
         * @param icon_name the icon-name.
         */
        vfunc_add(
            widget: Gtk.Widget,
            name?: string | null,
            title?: string | null,
            icon_name?: string | null,
        ): PanelItem | null;
        // Conflicted with Gtk.Container.vfunc_add
        vfunc_add(...args: never[]): any;
        /**
         * Removes an item from `panel`.
         * @param item the #TeplPanelItem to remove.
         */
        vfunc_remove(item: PanelItem): void;
        // Conflicted with Gtk.Container.vfunc_remove
        vfunc_remove(...args: never[]): any;
        /**
         * Sets `item` to be the one that is currently shown in `panel`.
         *
         * This is different than setting the #GtkWidget:visible property to %TRUE. All
         * #GtkWidget's of a `panel` should have their #GtkWidget:visible property set to
         * %TRUE all the time, but only one #TeplPanelItem is shown at a time.
         * @param item a #TeplPanelItem.
         */
        vfunc_set_active(item: PanelItem): void;
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
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
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module PanelSwitcherMenu {
        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Bin.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps {}
    }

    class PanelSwitcherMenu extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<PanelSwitcherMenu>;

        // Constructors

        constructor(properties?: Partial<PanelSwitcherMenu.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](panel: PanelContainer): PanelSwitcherMenu;

        // Inherited methods
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
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
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module PrefsDialog {
        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Dialog.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps {}
    }

    class PrefsDialog extends Gtk.Dialog implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<PrefsDialog>;

        // Constructors

        constructor(properties?: Partial<PrefsDialog.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Static methods

        static get_singleton(): PrefsDialog;

        // Methods

        /**
         * This function sets the #GtkWindow:transient-for property and presents
         * `dialog`.
         * @param parent_window the parent #GtkWindow.
         */
        show_for_parent(parent_window: Gtk.Window): void;

        // Inherited methods
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
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
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module ProgressInfoBar {
        // Constructor properties interface

        interface ConstructorProps
            extends InfoBar.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.Orientable.ConstructorProps {
            has_cancel_button: boolean;
            hasCancelButton: boolean;
        }
    }

    class ProgressInfoBar extends InfoBar implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<ProgressInfoBar>;

        // Properties

        /**
         * Whether to add a Cancel button in the action area of the #GtkInfoBar,
         * with the %GTK_RESPONSE_CANCEL response.
         */
        get has_cancel_button(): boolean;
        /**
         * Whether to add a Cancel button in the action area of the #GtkInfoBar,
         * with the %GTK_RESPONSE_CANCEL response.
         */
        get hasCancelButton(): boolean;

        // Constructors

        constructor(properties?: Partial<ProgressInfoBar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](icon_name: string | null, markup: string | null, has_cancel_button: boolean): ProgressInfoBar;
        // Conflicted with Tepl.InfoBar.new

        static ['new'](...args: never[]): any;

        // Methods

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

        // Inherited methods
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
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
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module Settings {
        // Signal callback interfaces

        interface FontChanged {
            (): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Settings extends GObject.Object {
        static $gtype: GObject.GType<Settings>;

        // Constructors

        constructor(properties?: Partial<Settings.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'font-changed', callback: (_source: this) => void): number;
        connect_after(signal: 'font-changed', callback: (_source: this) => void): number;
        emit(signal: 'font-changed'): void;

        // Static methods

        /**
         * This function introspects a #GSettings key to get its range, if the key as a
         * "u" type (unsigned integer). %FALSE is returned if the introspection failed.
         *
         * See g_settings_schema_key_get_range() for more flexibility.
         * @param settings a #GSettings.
         * @param key a key part of @settings.
         */
        static get_range_uint(settings: Gio.Settings, key: string): [boolean, number, number];
        static get_singleton(): Settings;

        // Methods

        /**
         * If tepl_settings_provide_font_settings() has *not* been called, this function
         * always returns the current value of the system's fixed width (monospace)
         * font.
         *
         * If tepl_settings_provide_font_settings() *has* been called, this function
         * returns the font name depending on the boolean value of
         * `use_default_font_key`.
         *
         * See also the #TeplSettings::font-changed signal,
         * tepl_utils_override_font_string() and tepl_prefs_create_font_component().
         * @returns the selected font name.
         */
        get_selected_font(): string;
        peek_desktop_interface_settings(): Gio.Settings;
        /**
         * This function can only be called once, to provide two keys:
         * - `use_default_font_key:` must be of type boolean, to know whether to use the
         *   system's font (the default font), or the editor font.
         * - `editor_font_key:` must be of type string, containing the font name to have
         *   a different font for the text editor, rather than using the system's font.
         *
         * See tepl_settings_get_selected_font().
         * @param font_settings the #GSettings object containing the keys.
         * @param use_default_font_key a key of type boolean.
         * @param editor_font_key a key of type string.
         */
        provide_font_settings(font_settings: Gio.Settings, use_default_font_key: string, editor_font_key: string): void;
    }

    module SpaceDrawerPrefs {
        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Grid.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.Orientable.ConstructorProps {}
    }

    class SpaceDrawerPrefs extends Gtk.Grid implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<SpaceDrawerPrefs>;

        // Constructors

        constructor(properties?: Partial<SpaceDrawerPrefs.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SpaceDrawerPrefs;

        // Methods

        /**
         * Gets the #GtkSourceSpaceDrawer associated with `prefs`. The returned object is
         * guaranteed to be the same for the lifetime of `prefs`. Each
         * #TeplSpaceDrawerPrefs object has a different #GtkSourceSpaceDrawer.
         * @returns the #GtkSourceSpaceDrawer associated with @prefs.
         */
        get_space_drawer(): GtkSource.SpaceDrawer;

        // Inherited properties
        /**
         * The orientation of the orientable.
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        // Inherited methods
        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the @orientable.
         */
        get_orientation(): Gtk.Orientation;
        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation): void;
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
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
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module StatusMenuButton {
        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.MenuButton.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Actionable.ConstructorProps,
                Gtk.Activatable.ConstructorProps,
                Gtk.Buildable.ConstructorProps {}
    }

    class StatusMenuButton
        extends Gtk.MenuButton
        implements Atk.ImplementorIface, Gtk.Actionable, Gtk.Activatable, Gtk.Buildable
    {
        static $gtype: GObject.GType<StatusMenuButton>;

        // Constructors

        constructor(properties?: Partial<StatusMenuButton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): StatusMenuButton;

        // Methods

        /**
         * To change the text displayed in `button`.
         * @param str the text to set.
         */
        set_label_text(str: string): void;

        // Inherited properties
        get app_paintable(): boolean;
        set app_paintable(val: boolean);
        get appPaintable(): boolean;
        set appPaintable(val: boolean);
        get can_default(): boolean;
        set can_default(val: boolean);
        get canDefault(): boolean;
        set canDefault(val: boolean);
        get can_focus(): boolean;
        set can_focus(val: boolean);
        get canFocus(): boolean;
        set canFocus(val: boolean);
        get composite_child(): boolean;
        get compositeChild(): boolean;
        /**
         * Whether the widget is double buffered.
         */
        get double_buffered(): boolean;
        set double_buffered(val: boolean);
        /**
         * Whether the widget is double buffered.
         */
        get doubleBuffered(): boolean;
        set doubleBuffered(val: boolean);
        get events(): Gdk.EventMask;
        set events(val: Gdk.EventMask);
        /**
         * Whether to expand in both directions. Setting this sets both #GtkWidget:hexpand and #GtkWidget:vexpand
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
         */
        get focusOnClick(): boolean;
        set focusOnClick(val: boolean);
        /**
         * How to distribute horizontal space if widget gets extra space, see #GtkAlign
         */
        get halign(): Gtk.Align;
        set halign(val: Gtk.Align);
        get has_default(): boolean;
        set has_default(val: boolean);
        get hasDefault(): boolean;
        set hasDefault(val: boolean);
        get has_focus(): boolean;
        set has_focus(val: boolean);
        get hasFocus(): boolean;
        set hasFocus(val: boolean);
        /**
         * Enables or disables the emission of #GtkWidget::query-tooltip on `widget`.
         * A value of %TRUE indicates that `widget` can have a tooltip, in this case
         * the widget will be queried using #GtkWidget::query-tooltip to determine
         * whether it will provide a tooltip or not.
         *
         * Note that setting this property to %TRUE for the first time will change
         * the event masks of the GdkWindows of this widget to include leave-notify
         * and motion-notify events.  This cannot and will not be undone when the
         * property is set to %FALSE again.
         */
        get has_tooltip(): boolean;
        set has_tooltip(val: boolean);
        /**
         * Enables or disables the emission of #GtkWidget::query-tooltip on `widget`.
         * A value of %TRUE indicates that `widget` can have a tooltip, in this case
         * the widget will be queried using #GtkWidget::query-tooltip to determine
         * whether it will provide a tooltip or not.
         *
         * Note that setting this property to %TRUE for the first time will change
         * the event masks of the GdkWindows of this widget to include leave-notify
         * and motion-notify events.  This cannot and will not be undone when the
         * property is set to %FALSE again.
         */
        get hasTooltip(): boolean;
        set hasTooltip(val: boolean);
        get height_request(): number;
        set height_request(val: number);
        get heightRequest(): number;
        set heightRequest(val: number);
        /**
         * Whether to expand horizontally. See gtk_widget_set_hexpand().
         */
        get hexpand(): boolean;
        set hexpand(val: boolean);
        /**
         * Whether to use the #GtkWidget:hexpand property. See gtk_widget_get_hexpand_set().
         */
        get hexpand_set(): boolean;
        set hexpand_set(val: boolean);
        /**
         * Whether to use the #GtkWidget:hexpand property. See gtk_widget_get_hexpand_set().
         */
        get hexpandSet(): boolean;
        set hexpandSet(val: boolean);
        get is_focus(): boolean;
        set is_focus(val: boolean);
        get isFocus(): boolean;
        set isFocus(val: boolean);
        /**
         * Sets all four sides' margin at once. If read, returns max
         * margin on any side.
         */
        get margin(): number;
        set margin(val: number);
        /**
         * Margin on bottom side of widget.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * gtk_widget_set_size_request() for example.
         */
        get margin_bottom(): number;
        set margin_bottom(val: number);
        /**
         * Margin on bottom side of widget.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * gtk_widget_set_size_request() for example.
         */
        get marginBottom(): number;
        set marginBottom(val: number);
        /**
         * Margin on end of widget, horizontally. This property supports
         * left-to-right and right-to-left text directions.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * gtk_widget_set_size_request() for example.
         */
        get margin_end(): number;
        set margin_end(val: number);
        /**
         * Margin on end of widget, horizontally. This property supports
         * left-to-right and right-to-left text directions.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * gtk_widget_set_size_request() for example.
         */
        get marginEnd(): number;
        set marginEnd(val: number);
        /**
         * Margin on left side of widget.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * gtk_widget_set_size_request() for example.
         */
        get margin_left(): number;
        set margin_left(val: number);
        /**
         * Margin on left side of widget.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * gtk_widget_set_size_request() for example.
         */
        get marginLeft(): number;
        set marginLeft(val: number);
        /**
         * Margin on right side of widget.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * gtk_widget_set_size_request() for example.
         */
        get margin_right(): number;
        set margin_right(val: number);
        /**
         * Margin on right side of widget.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * gtk_widget_set_size_request() for example.
         */
        get marginRight(): number;
        set marginRight(val: number);
        /**
         * Margin on start of widget, horizontally. This property supports
         * left-to-right and right-to-left text directions.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * gtk_widget_set_size_request() for example.
         */
        get margin_start(): number;
        set margin_start(val: number);
        /**
         * Margin on start of widget, horizontally. This property supports
         * left-to-right and right-to-left text directions.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * gtk_widget_set_size_request() for example.
         */
        get marginStart(): number;
        set marginStart(val: number);
        /**
         * Margin on top side of widget.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * gtk_widget_set_size_request() for example.
         */
        get margin_top(): number;
        set margin_top(val: number);
        /**
         * Margin on top side of widget.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * gtk_widget_set_size_request() for example.
         */
        get marginTop(): number;
        set marginTop(val: number);
        get name(): string;
        set name(val: string);
        get no_show_all(): boolean;
        set no_show_all(val: boolean);
        get noShowAll(): boolean;
        set noShowAll(val: boolean);
        /**
         * The requested opacity of the widget. See gtk_widget_set_opacity() for
         * more details about window opacity.
         *
         * Before 3.8 this was only available in GtkWindow
         */
        get opacity(): number;
        set opacity(val: number);
        get parent(): Gtk.Container;
        set parent(val: Gtk.Container);
        get receives_default(): boolean;
        set receives_default(val: boolean);
        get receivesDefault(): boolean;
        set receivesDefault(val: boolean);
        /**
         * The scale factor of the widget. See gtk_widget_get_scale_factor() for
         * more details about widget scaling.
         */
        get scale_factor(): number;
        /**
         * The scale factor of the widget. See gtk_widget_get_scale_factor() for
         * more details about widget scaling.
         */
        get scaleFactor(): number;
        get sensitive(): boolean;
        set sensitive(val: boolean);
        /**
         * The style of the widget, which contains information about how it will look (colors, etc).
         */
        get style(): Gtk.Style;
        set style(val: Gtk.Style);
        /**
         * Sets the text of tooltip to be the given string, which is marked up
         * with the [Pango text markup language][PangoMarkupFormat].
         * Also see gtk_tooltip_set_markup().
         *
         * This is a convenience property which will take care of getting the
         * tooltip shown if the given string is not %NULL: #GtkWidget:has-tooltip
         * will automatically be set to %TRUE and there will be taken care of
         * #GtkWidget::query-tooltip in the default signal handler.
         *
         * Note that if both #GtkWidget:tooltip-text and #GtkWidget:tooltip-markup
         * are set, the last one wins.
         */
        get tooltip_markup(): string;
        set tooltip_markup(val: string);
        /**
         * Sets the text of tooltip to be the given string, which is marked up
         * with the [Pango text markup language][PangoMarkupFormat].
         * Also see gtk_tooltip_set_markup().
         *
         * This is a convenience property which will take care of getting the
         * tooltip shown if the given string is not %NULL: #GtkWidget:has-tooltip
         * will automatically be set to %TRUE and there will be taken care of
         * #GtkWidget::query-tooltip in the default signal handler.
         *
         * Note that if both #GtkWidget:tooltip-text and #GtkWidget:tooltip-markup
         * are set, the last one wins.
         */
        get tooltipMarkup(): string;
        set tooltipMarkup(val: string);
        /**
         * Sets the text of tooltip to be the given string.
         *
         * Also see gtk_tooltip_set_text().
         *
         * This is a convenience property which will take care of getting the
         * tooltip shown if the given string is not %NULL: #GtkWidget:has-tooltip
         * will automatically be set to %TRUE and there will be taken care of
         * #GtkWidget::query-tooltip in the default signal handler.
         *
         * Note that if both #GtkWidget:tooltip-text and #GtkWidget:tooltip-markup
         * are set, the last one wins.
         */
        get tooltip_text(): string;
        set tooltip_text(val: string);
        /**
         * Sets the text of tooltip to be the given string.
         *
         * Also see gtk_tooltip_set_text().
         *
         * This is a convenience property which will take care of getting the
         * tooltip shown if the given string is not %NULL: #GtkWidget:has-tooltip
         * will automatically be set to %TRUE and there will be taken care of
         * #GtkWidget::query-tooltip in the default signal handler.
         *
         * Note that if both #GtkWidget:tooltip-text and #GtkWidget:tooltip-markup
         * are set, the last one wins.
         */
        get tooltipText(): string;
        set tooltipText(val: string);
        /**
         * How to distribute vertical space if widget gets extra space, see #GtkAlign
         */
        get valign(): Gtk.Align;
        set valign(val: Gtk.Align);
        /**
         * Whether to expand vertically. See gtk_widget_set_vexpand().
         */
        get vexpand(): boolean;
        set vexpand(val: boolean);
        /**
         * Whether to use the #GtkWidget:vexpand property. See gtk_widget_get_vexpand_set().
         */
        get vexpand_set(): boolean;
        set vexpand_set(val: boolean);
        /**
         * Whether to use the #GtkWidget:vexpand property. See gtk_widget_get_vexpand_set().
         */
        get vexpandSet(): boolean;
        set vexpandSet(val: boolean);
        get visible(): boolean;
        set visible(val: boolean);
        get width_request(): number;
        set width_request(val: number);
        get widthRequest(): number;
        set widthRequest(val: number);
        /**
         * The widget's window if it is realized, %NULL otherwise.
         */
        get window(): Gdk.Window;

        // Inherited methods
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
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
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
        /**
         * For widgets that can be “activated” (buttons, menu items, etc.)
         * this function activates them. Activation is what happens when you
         * press Enter on a widget during key navigation. If `widget` isn't
         * activatable, the function returns %FALSE.
         * @returns %TRUE if the widget was activatable
         */
        activate(): boolean;
        /**
         * Installs an accelerator for this `widget` in `accel_group` that causes
         * `accel_signal` to be emitted if the accelerator is activated.
         * The `accel_group` needs to be added to the widget’s toplevel via
         * gtk_window_add_accel_group(), and the signal must be of type %G_SIGNAL_ACTION.
         * Accelerators added through this function are not user changeable during
         * runtime. If you want to support accelerators that can be changed by the
         * user, use gtk_accel_map_add_entry() and gtk_widget_set_accel_path() or
         * gtk_menu_item_set_accel_path() instead.
         * @param accel_signal widget signal to emit on accelerator activation
         * @param accel_group accel group for this widget, added to its toplevel
         * @param accel_key GDK keyval of the accelerator
         * @param accel_mods modifier key combination of the accelerator
         * @param accel_flags flag accelerators, e.g. %GTK_ACCEL_VISIBLE
         */
        add_accelerator(
            accel_signal: string,
            accel_group: Gtk.AccelGroup,
            accel_key: number,
            accel_mods: Gdk.ModifierType,
            accel_flags: Gtk.AccelFlags,
        ): void;
        /**
         * Adds the device events in the bitfield `events` to the event mask for
         * `widget`. See gtk_widget_set_device_events() for details.
         * @param device a #GdkDevice
         * @param events an event mask, see #GdkEventMask
         */
        add_device_events(device: Gdk.Device, events: Gdk.EventMask): void;
        /**
         * Adds the events in the bitfield `events` to the event mask for
         * `widget`. See gtk_widget_set_events() and the
         * [input handling overview][event-masks] for details.
         * @param events an event mask, see #GdkEventMask
         */
        add_events(events: number): void;
        /**
         * Adds a widget to the list of mnemonic labels for
         * this widget. (See gtk_widget_list_mnemonic_labels()). Note the
         * list of mnemonic labels for the widget is cleared when the
         * widget is destroyed, so the caller must make sure to update
         * its internal state at this point as well, by using a connection
         * to the #GtkWidget::destroy signal or a weak notifier.
         * @param label a #GtkWidget that acts as a mnemonic label for @widget
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
         * would trigger that (for example, changing the text of a #GtkLabel),
         * then you will have to call gtk_widget_queue_resize() or
         * gtk_widget_queue_draw_area() yourself.
         *
         * gdk_frame_clock_get_frame_time() should generally be used for timing
         * continuous animations and
         * gdk_frame_timings_get_predicted_presentation_time() if you are
         * trying to display isolated frames at particular times.
         *
         * This is a more convenient alternative to connecting directly to the
         * #GdkFrameClock::update signal of #GdkFrameClock, since you don't
         * have to worry about when a #GdkFrameClock is assigned to a widget.
         * @param callback function to call for updating animations
         * @returns an id for the connection of this callback. Remove the callback     by passing it to gtk_widget_remove_tick_callback()
         */
        add_tick_callback(callback: Gtk.TickCallback): number;
        /**
         * Determines whether an accelerator that activates the signal
         * identified by `signal_id` can currently be activated.
         * This is done by emitting the #GtkWidget::can-activate-accel
         * signal on `widget;` if the signal isn’t overridden by a
         * handler or in a derived widget, then the default check is
         * that the widget must be sensitive, and the widget and all
         * its ancestors mapped.
         * @param signal_id the ID of a signal installed on @widget
         * @returns %TRUE if the accelerator can be activated.
         */
        can_activate_accel(signal_id: number): boolean;
        /**
         * This function is used by custom widget implementations; if you're
         * writing an app, you’d use gtk_widget_grab_focus() to move the focus
         * to a particular widget, and gtk_container_set_focus_chain() to
         * change the focus tab order. So you may want to investigate those
         * functions instead.
         *
         * gtk_widget_child_focus() is called by containers as the user moves
         * around the window using keyboard shortcuts. `direction` indicates
         * what kind of motion is taking place (up, down, left, right, tab
         * forward, tab backward). gtk_widget_child_focus() emits the
         * #GtkWidget::focus signal; widgets override the default handler
         * for this signal in order to implement appropriate focus behavior.
         *
         * The default ::focus handler for a widget should return %TRUE if
         * moving in `direction` left the focus on a focusable location inside
         * that widget, and %FALSE if moving in `direction` moved the focus
         * outside the widget. If returning %TRUE, widgets normally
         * call gtk_widget_grab_focus() to place the focus accordingly;
         * if returning %FALSE, they don’t modify the current focus location.
         * @param direction direction of focus movement
         * @returns %TRUE if focus ended up inside @widget
         */
        child_focus(direction: Gtk.DirectionType): boolean;
        /**
         * Emits a #GtkWidget::child-notify signal for the
         * [child property][child-properties] `child_property`
         * on `widget`.
         *
         * This is the analogue of g_object_notify() for child properties.
         *
         * Also see gtk_container_child_notify().
         * @param child_property the name of a child property installed on the                  class of @widget’s parent
         */
        child_notify(child_property: string): void;
        // Conflicted with Gtk.Container.child_notify
        child_notify(...args: never[]): any;
        /**
         * Same as gtk_widget_path(), but always uses the name of a widget’s type,
         * never uses a custom name set with gtk_widget_set_name().
         */
        class_path(): [number, string, string];
        /**
         * Computes whether a container should give this widget extra space
         * when possible. Containers should check this, rather than
         * looking at gtk_widget_get_hexpand() or gtk_widget_get_vexpand().
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
        compute_expand(orientation: Gtk.Orientation): boolean;
        /**
         * Creates a new #PangoContext with the appropriate font map,
         * font options, font description, and base direction for drawing
         * text for this widget. See also gtk_widget_get_pango_context().
         * @returns the new #PangoContext
         */
        create_pango_context(): Pango.Context;
        /**
         * Creates a new #PangoLayout with the appropriate font map,
         * font description, and base direction for drawing text for
         * this widget.
         *
         * If you keep a #PangoLayout created in this way around, you need
         * to re-create it when the widget #PangoContext is replaced.
         * This can be tracked by using the #GtkWidget::screen-changed signal
         * on the widget.
         * @param text text to set on the layout (can be %NULL)
         * @returns the new #PangoLayout
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
         * be released; you should connect to the #GtkWidget::destroy signal
         * if you hold a reference to `widget` and you wish to remove it when
         * this function is called. It is not necessary to do so if you are
         * implementing a #GtkContainer, as you'll be able to use the
         * #GtkContainerClass.remove() virtual function for that.
         *
         * It's important to notice that gtk_widget_destroy() will only cause
         * the `widget` to be finalized if no additional references, acquired
         * using g_object_ref(), are held on it. In case additional references
         * are in place, the `widget` will be in an "inert" state after calling
         * this function; `widget` will still point to valid memory, allowing you
         * to release the references you hold, but you may not query the widget's
         * own state.
         *
         * You should typically call this function on top level widgets, and
         * rarely on child widgets.
         *
         * See also: gtk_container_remove()
         */
        destroy(): void;
        /**
         * This function sets *`widget_pointer` to %NULL if `widget_pointer` !=
         * %NULL.  It’s intended to be used as a callback connected to the
         * “destroy” signal of a widget. You connect gtk_widget_destroyed()
         * as a signal handler, and pass the address of your widget variable
         * as user data. Then when the widget is destroyed, the variable will
         * be set to %NULL. Useful for example to avoid multiple copies
         * of the same dialog.
         * @param widget_pointer address of a variable that contains @widget
         */
        destroyed(widget_pointer: Gtk.Widget): Gtk.Widget;
        /**
         * Returns %TRUE if `device` has been shadowed by a GTK+
         * device grab on another widget, so it would stop sending
         * events to `widget`. This may be used in the
         * #GtkWidget::grab-notify signal to check for specific
         * devices. See gtk_device_grab_add().
         * @param device a #GdkDevice
         * @returns %TRUE if there is an ongoing grab on @device          by another #GtkWidget than @widget.
         */
        device_is_shadowed(device: Gdk.Device): boolean;
        /**
         * This function is equivalent to gtk_drag_begin_with_coordinates(),
         * passing -1, -1 as coordinates.
         * @param targets The targets (data formats) in which the    source can provide the data
         * @param actions A bitmask of the allowed drag actions for this drag
         * @param button The button the user clicked to start the drag
         * @param event The event that triggered the start of the drag,    or %NULL if none can be obtained.
         * @returns the context for this drag
         */
        drag_begin(
            targets: Gtk.TargetList,
            actions: Gdk.DragAction,
            button: number,
            event?: Gdk.Event | null,
        ): Gdk.DragContext;
        /**
         * Initiates a drag on the source side. The function only needs to be used
         * when the application is starting drags itself, and is not needed when
         * gtk_drag_source_set() is used.
         *
         * The `event` is used to retrieve the timestamp that will be used internally to
         * grab the pointer.  If `event` is %NULL, then %GDK_CURRENT_TIME will be used.
         * However, you should try to pass a real event in all cases, since that can be
         * used to get information about the drag.
         *
         * Generally there are three cases when you want to start a drag by hand by
         * calling this function:
         *
         * 1. During a #GtkWidget::button-press-event handler, if you want to start a drag
         * immediately when the user presses the mouse button.  Pass the `event`
         * that you have in your #GtkWidget::button-press-event handler.
         *
         * 2. During a #GtkWidget::motion-notify-event handler, if you want to start a drag
         * when the mouse moves past a certain threshold distance after a button-press.
         * Pass the `event` that you have in your #GtkWidget::motion-notify-event handler.
         *
         * 3. During a timeout handler, if you want to start a drag after the mouse
         * button is held down for some time.  Try to save the last event that you got
         * from the mouse, using gdk_event_copy(), and pass it to this function
         * (remember to free the event with gdk_event_free() when you are done).
         * If you really cannot pass a real event, pass %NULL instead.
         * @param targets The targets (data formats) in which the    source can provide the data
         * @param actions A bitmask of the allowed drag actions for this drag
         * @param button The button the user clicked to start the drag
         * @param event The event that triggered the start of the drag,    or %NULL if none can be obtained.
         * @param x The initial x coordinate to start dragging from, in the coordinate space    of @widget. If -1 is passed, the coordinates are retrieved from @event or    the current pointer position
         * @param y The initial y coordinate to start dragging from, in the coordinate space    of @widget. If -1 is passed, the coordinates are retrieved from @event or    the current pointer position
         * @returns the context for this drag
         */
        drag_begin_with_coordinates(
            targets: Gtk.TargetList,
            actions: Gdk.DragAction,
            button: number,
            event: Gdk.Event | null,
            x: number,
            y: number,
        ): Gdk.DragContext;
        /**
         * Checks to see if a mouse drag starting at (`start_x,` `start_y)` and ending
         * at (`current_x,` `current_y)` has passed the GTK+ drag threshold, and thus
         * should trigger the beginning of a drag-and-drop operation.
         * @param start_x X coordinate of start of drag
         * @param start_y Y coordinate of start of drag
         * @param current_x current X coordinate
         * @param current_y current Y coordinate
         * @returns %TRUE if the drag threshold has been passed.
         */
        drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean;
        /**
         * Add the image targets supported by #GtkSelectionData to
         * the target list of the drag destination. The targets
         * are added with `info` = 0. If you need another value,
         * use gtk_target_list_add_image_targets() and
         * gtk_drag_dest_set_target_list().
         */
        drag_dest_add_image_targets(): void;
        /**
         * Add the text targets supported by #GtkSelectionData to
         * the target list of the drag destination. The targets
         * are added with `info` = 0. If you need another value,
         * use gtk_target_list_add_text_targets() and
         * gtk_drag_dest_set_target_list().
         */
        drag_dest_add_text_targets(): void;
        /**
         * Add the URI targets supported by #GtkSelectionData to
         * the target list of the drag destination. The targets
         * are added with `info` = 0. If you need another value,
         * use gtk_target_list_add_uri_targets() and
         * gtk_drag_dest_set_target_list().
         */
        drag_dest_add_uri_targets(): void;
        /**
         * Looks for a match between the supported targets of `context` and the
         * `dest_target_list,` returning the first matching target, otherwise
         * returning %GDK_NONE. `dest_target_list` should usually be the return
         * value from gtk_drag_dest_get_target_list(), but some widgets may
         * have different valid targets for different parts of the widget; in
         * that case, they will have to implement a drag_motion handler that
         * passes the correct target list to this function.
         * @param context drag context
         * @param target_list list of droppable targets, or %NULL to use    gtk_drag_dest_get_target_list (@widget).
         * @returns first target that the source offers     and the dest can accept, or %GDK_NONE
         */
        drag_dest_find_target(context: Gdk.DragContext, target_list?: Gtk.TargetList | null): Gdk.Atom;
        /**
         * Returns the list of targets this widget can accept from
         * drag-and-drop.
         * @returns the #GtkTargetList, or %NULL if none
         */
        drag_dest_get_target_list(): Gtk.TargetList | null;
        /**
         * Returns whether the widget has been configured to always
         * emit #GtkWidget::drag-motion signals.
         * @returns %TRUE if the widget always emits   #GtkWidget::drag-motion events
         */
        drag_dest_get_track_motion(): boolean;
        /**
         * Sets a widget as a potential drop destination, and adds default behaviors.
         *
         * The default behaviors listed in `flags` have an effect similar
         * to installing default handlers for the widget’s drag-and-drop signals
         * (#GtkWidget::drag-motion, #GtkWidget::drag-drop, ...). They all exist
         * for convenience. When passing #GTK_DEST_DEFAULT_ALL for instance it is
         * sufficient to connect to the widget’s #GtkWidget::drag-data-received
         * signal to get primitive, but consistent drag-and-drop support.
         *
         * Things become more complicated when you try to preview the dragged data,
         * as described in the documentation for #GtkWidget::drag-motion. The default
         * behaviors described by `flags` make some assumptions, that can conflict
         * with your own signal handlers. For instance #GTK_DEST_DEFAULT_DROP causes
         * invokations of gdk_drag_status() in the context of #GtkWidget::drag-motion,
         * and invokations of gtk_drag_finish() in #GtkWidget::drag-data-received.
         * Especially the later is dramatic, when your own #GtkWidget::drag-motion
         * handler calls gtk_drag_get_data() to inspect the dragged data.
         *
         * There’s no way to set a default action here, you can use the
         * #GtkWidget::drag-motion callback for that. Here’s an example which selects
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
         * @param targets a pointer to an array of     #GtkTargetEntrys indicating the drop types that this @widget will     accept, or %NULL. Later you can access the list with     gtk_drag_dest_get_target_list() and gtk_drag_dest_find_target().
         * @param actions a bitmask of possible actions for a drop onto this @widget.
         */
        drag_dest_set(flags: Gtk.DestDefaults, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void;
        /**
         * Sets this widget as a proxy for drops to another window.
         * @param proxy_window the window to which to forward drag events
         * @param protocol the drag protocol which the @proxy_window accepts   (You can use gdk_drag_get_protocol() to determine this)
         * @param use_coordinates If %TRUE, send the same coordinates to the   destination, because it is an embedded   subwindow.
         */
        drag_dest_set_proxy(proxy_window: Gdk.Window, protocol: Gdk.DragProtocol, use_coordinates: boolean): void;
        /**
         * Sets the target types that this widget can accept from drag-and-drop.
         * The widget must first be made into a drag destination with
         * gtk_drag_dest_set().
         * @param target_list list of droppable targets, or %NULL for none
         */
        drag_dest_set_target_list(target_list?: Gtk.TargetList | null): void;
        /**
         * Tells the widget to emit #GtkWidget::drag-motion and
         * #GtkWidget::drag-leave events regardless of the targets and the
         * %GTK_DEST_DEFAULT_MOTION flag.
         *
         * This may be used when a widget wants to do generic
         * actions regardless of the targets that the source offers.
         * @param track_motion whether to accept all targets
         */
        drag_dest_set_track_motion(track_motion: boolean): void;
        /**
         * Clears information about a drop destination set with
         * gtk_drag_dest_set(). The widget will no longer receive
         * notification of drags.
         */
        drag_dest_unset(): void;
        /**
         * Gets the data associated with a drag. When the data
         * is received or the retrieval fails, GTK+ will emit a
         * #GtkWidget::drag-data-received signal. Failure of the retrieval
         * is indicated by the length field of the `selection_data`
         * signal parameter being negative. However, when gtk_drag_get_data()
         * is called implicitely because the %GTK_DEST_DEFAULT_DROP was set,
         * then the widget will not receive notification of failed
         * drops.
         * @param context the drag context
         * @param target the target (form of the data) to retrieve
         * @param time_ a timestamp for retrieving the data. This will   generally be the time received in a #GtkWidget::drag-motion   or #GtkWidget::drag-drop signal
         */
        drag_get_data(context: Gdk.DragContext, target: Gdk.Atom, time_: number): void;
        /**
         * Highlights a widget as a currently hovered drop target.
         * To end the highlight, call gtk_drag_unhighlight().
         * GTK+ calls this automatically if %GTK_DEST_DEFAULT_HIGHLIGHT is set.
         */
        drag_highlight(): void;
        /**
         * Add the writable image targets supported by #GtkSelectionData to
         * the target list of the drag source. The targets
         * are added with `info` = 0. If you need another value,
         * use gtk_target_list_add_image_targets() and
         * gtk_drag_source_set_target_list().
         */
        drag_source_add_image_targets(): void;
        /**
         * Add the text targets supported by #GtkSelectionData to
         * the target list of the drag source.  The targets
         * are added with `info` = 0. If you need another value,
         * use gtk_target_list_add_text_targets() and
         * gtk_drag_source_set_target_list().
         */
        drag_source_add_text_targets(): void;
        /**
         * Add the URI targets supported by #GtkSelectionData to
         * the target list of the drag source.  The targets
         * are added with `info` = 0. If you need another value,
         * use gtk_target_list_add_uri_targets() and
         * gtk_drag_source_set_target_list().
         */
        drag_source_add_uri_targets(): void;
        /**
         * Gets the list of targets this widget can provide for
         * drag-and-drop.
         * @returns the #GtkTargetList, or %NULL if none
         */
        drag_source_get_target_list(): Gtk.TargetList | null;
        /**
         * Sets up a widget so that GTK+ will start a drag operation when the user
         * clicks and drags on the widget. The widget must have a window.
         * @param start_button_mask the bitmask of buttons that can start the drag
         * @param targets the table of targets     that the drag will support, may be %NULL
         * @param actions the bitmask of possible actions for a drag from this widget
         */
        drag_source_set(
            start_button_mask: Gdk.ModifierType,
            targets: Gtk.TargetEntry[] | null,
            actions: Gdk.DragAction,
        ): void;
        /**
         * Sets the icon that will be used for drags from a particular source
         * to `icon`. See the docs for #GtkIconTheme for more details.
         * @param icon A #GIcon
         */
        drag_source_set_icon_gicon(icon: Gio.Icon): void;
        /**
         * Sets the icon that will be used for drags from a particular source
         * to a themed icon. See the docs for #GtkIconTheme for more details.
         * @param icon_name name of icon to use
         */
        drag_source_set_icon_name(icon_name: string): void;
        /**
         * Sets the icon that will be used for drags from a particular widget
         * from a #GdkPixbuf. GTK+ retains a reference for `pixbuf` and will
         * release it when it is no longer needed.
         * @param pixbuf the #GdkPixbuf for the drag icon
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
         * gtk_drag_source_set().
         * @param target_list list of draggable targets, or %NULL for none
         */
        drag_source_set_target_list(target_list?: Gtk.TargetList | null): void;
        /**
         * Undoes the effects of gtk_drag_source_set().
         */
        drag_source_unset(): void;
        /**
         * Removes a highlight set by gtk_drag_highlight() from
         * a widget.
         */
        drag_unhighlight(): void;
        /**
         * Draws `widget` to `cr`. The top left corner of the widget will be
         * drawn to the currently set origin point of `cr`.
         *
         * You should pass a cairo context as `cr` argument that is in an
         * original state. Otherwise the resulting drawing is undefined. For
         * example changing the operator using cairo_set_operator() or the
         * line width using cairo_set_line_width() might have unwanted side
         * effects.
         * You may however change the context’s transform matrix - like with
         * cairo_scale(), cairo_translate() or cairo_set_matrix() and clip
         * region with cairo_clip() prior to calling this function. Also, it
         * is fine to modify the context with cairo_save() and
         * cairo_push_group() prior to calling this function.
         *
         * Note that special-purpose widgets may contain special code for
         * rendering to the screen and might appear differently on screen
         * and when rendered using gtk_widget_draw().
         * @param cr a cairo context to draw to
         */
        draw(cr: cairo.Context): void;
        /**
         * Ensures that `widget` has a style (`widget->`style).
         *
         * Not a very useful function; most of the time, if you
         * want the style, the widget is realized, and realized
         * widgets are guaranteed to have a style already.
         */
        ensure_style(): void;
        /**
         * Notifies the user about an input-related error on this widget.
         * If the #GtkSettings:gtk-error-bell setting is %TRUE, it calls
         * gdk_window_beep(), otherwise it does nothing.
         *
         * Note that the effect of gdk_window_beep() can be configured in many
         * ways, depending on the windowing backend and the desktop environment
         * or window manager that is used.
         */
        error_bell(): void;
        /**
         * Rarely-used function. This function is used to emit
         * the event signals on a widget (those signals should never
         * be emitted without using this function to do so).
         * If you want to synthesize an event though, don’t use this function;
         * instead, use gtk_main_do_event() so the event will behave as if
         * it were in the event queue. Don’t synthesize expose events; instead,
         * use gdk_window_invalidate_rect() to invalidate a region of the
         * window.
         * @param event a #GdkEvent
         * @returns return from the event signal emission (%TRUE if               the event was handled)
         */
        event(event: Gdk.Event): boolean;
        /**
         * Stops emission of #GtkWidget::child-notify signals on `widget`. The
         * signals are queued until gtk_widget_thaw_child_notify() is called
         * on `widget`.
         *
         * This is the analogue of g_object_freeze_notify() for child properties.
         */
        freeze_child_notify(): void;
        /**
         * Returns the accessible object that describes the widget to an
         * assistive technology.
         *
         * If accessibility support is not available, this #AtkObject
         * instance may be a no-op. Likewise, if no class-specific #AtkObject
         * implementation is available for the widget instance in question,
         * it will inherit an #AtkObject implementation from the first ancestor
         * class for which such an implementation is defined.
         *
         * The documentation of the
         * [ATK](http://developer.gnome.org/atk/stable/)
         * library contains more information about accessible objects and their uses.
         * @returns the #AtkObject associated with @widget
         */
        get_accessible(): Atk.Object;
        /**
         * Retrieves the #GActionGroup that was registered using `prefix`. The resulting
         * #GActionGroup may have been registered to `widget` or any #GtkWidget in its
         * ancestry.
         *
         * If no action group was found matching `prefix,` then %NULL is returned.
         * @param prefix The “prefix” of the action group.
         * @returns A #GActionGroup or %NULL.
         */
        get_action_group(prefix: string): Gio.ActionGroup | null;
        /**
         * Returns the baseline that has currently been allocated to `widget`.
         * This function is intended to be used when implementing handlers
         * for the #GtkWidget::draw function, and when allocating child
         * widgets in #GtkWidget::size_allocate.
         * @returns the baseline of the @widget, or -1 if none
         */
        get_allocated_baseline(): number;
        /**
         * Returns the height that has currently been allocated to `widget`.
         * This function is intended to be used when implementing handlers
         * for the #GtkWidget::draw function.
         * @returns the height of the @widget
         */
        get_allocated_height(): number;
        /**
         * Retrieves the widget’s allocated size.
         *
         * This function returns the last values passed to
         * gtk_widget_size_allocate_with_baseline(). The value differs from
         * the size returned in gtk_widget_get_allocation() in that functions
         * like gtk_widget_set_halign() can adjust the allocation, but not
         * the value returned by this function.
         *
         * If a widget is not visible, its allocated size is 0.
         */
        get_allocated_size(): [Gtk.Allocation, number];
        /**
         * Returns the width that has currently been allocated to `widget`.
         * This function is intended to be used when implementing handlers
         * for the #GtkWidget::draw function.
         * @returns the width of the @widget
         */
        get_allocated_width(): number;
        /**
         * Retrieves the widget’s allocation.
         *
         * Note, when implementing a #GtkContainer: a widget’s allocation will
         * be its “adjusted” allocation, that is, the widget’s parent
         * container typically calls gtk_widget_size_allocate() with an
         * allocation, and that allocation is then adjusted (to handle margin
         * and alignment for example) before assignment to the widget.
         * gtk_widget_get_allocation() returns the adjusted allocation that
         * was actually assigned to the widget. The adjusted allocation is
         * guaranteed to be completely contained within the
         * gtk_widget_size_allocate() allocation, however. So a #GtkContainer
         * is guaranteed that its children stay inside the assigned bounds,
         * but not that they have exactly the bounds the container assigned.
         * There is no way to get the original allocation assigned by
         * gtk_widget_size_allocate(), since it isn’t stored; if a container
         * implementation needs that information it will have to track it itself.
         */
        get_allocation(): Gtk.Allocation;
        /**
         * Gets the first ancestor of `widget` with type `widget_type`. For example,
         * `gtk_widget_get_ancestor (widget, GTK_TYPE_BOX)` gets
         * the first #GtkBox that’s an ancestor of `widget`. No reference will be
         * added to the returned widget; it should not be unreferenced. See note
         * about checking for a toplevel #GtkWindow in the docs for
         * gtk_widget_get_toplevel().
         *
         * Note that unlike gtk_widget_is_ancestor(), gtk_widget_get_ancestor()
         * considers `widget` to be an ancestor of itself.
         * @param widget_type ancestor type
         * @returns the ancestor widget, or %NULL if not found
         */
        get_ancestor(widget_type: GObject.GType): Gtk.Widget | null;
        /**
         * Determines whether the application intends to draw on the widget in
         * an #GtkWidget::draw handler.
         *
         * See gtk_widget_set_app_paintable()
         * @returns %TRUE if the widget is app paintable
         */
        get_app_paintable(): boolean;
        /**
         * Determines whether `widget` can be a default widget. See
         * gtk_widget_set_can_default().
         * @returns %TRUE if @widget can be a default widget, %FALSE otherwise
         */
        get_can_default(): boolean;
        /**
         * Determines whether `widget` can own the input focus. See
         * gtk_widget_set_can_focus().
         * @returns %TRUE if @widget can own the input focus, %FALSE otherwise
         */
        get_can_focus(): boolean;
        /**
         * This function is only for use in widget implementations. Obtains
         * `widget->`requisition, unless someone has forced a particular
         * geometry on the widget (e.g. with gtk_widget_set_size_request()),
         * in which case it returns that geometry instead of the widget's
         * requisition.
         *
         * This function differs from gtk_widget_size_request() in that
         * it retrieves the last size request value from `widget->`requisition,
         * while gtk_widget_size_request() actually calls the "size_request" method
         * on `widget` to compute the size request and fill in `widget->`requisition,
         * and only then returns `widget->`requisition.
         *
         * Because this function does not call the “size_request” method, it
         * can only be used when you know that `widget->`requisition is
         * up-to-date, that is, gtk_widget_size_request() has been called
         * since the last time a resize was queued. In general, only container
         * implementations have this information; applications should use
         * gtk_widget_size_request().
         */
        get_child_requisition(): Gtk.Requisition;
        /**
         * Gets the value set with gtk_widget_set_child_visible().
         * If you feel a need to use this function, your code probably
         * needs reorganization.
         *
         * This function is only useful for container implementations and
         * never should be called by an application.
         * @returns %TRUE if the widget is mapped with the parent.
         */
        get_child_visible(): boolean;
        /**
         * Retrieves the widget’s clip area.
         *
         * The clip area is the area in which all of `widget'`s drawing will
         * happen. Other toolkits call it the bounding box.
         *
         * Historically, in GTK+ the clip area has been equal to the allocation
         * retrieved via gtk_widget_get_allocation().
         */
        get_clip(): Gtk.Allocation;
        /**
         * Returns the clipboard object for the given selection to
         * be used with `widget`. `widget` must have a #GdkDisplay
         * associated with it, so must be attached to a toplevel
         * window.
         * @param selection a #GdkAtom which identifies the clipboard             to use. %GDK_SELECTION_CLIPBOARD gives the             default clipboard. Another common value             is %GDK_SELECTION_PRIMARY, which gives             the primary X selection.
         * @returns the appropriate clipboard object. If no             clipboard already exists, a new one will             be created. Once a clipboard object has             been created, it is persistent for all time.
         */
        get_clipboard(selection: Gdk.Atom): Gtk.Clipboard;
        /**
         * Obtains the composite name of a widget.
         * @returns the composite name of @widget, or %NULL if @widget is not   a composite child. The string should be freed when it is no   longer needed.
         */
        get_composite_name(): string;
        /**
         * Returns whether `device` can interact with `widget` and its
         * children. See gtk_widget_set_device_enabled().
         * @param device a #GdkDevice
         * @returns %TRUE is @device is enabled for @widget
         */
        get_device_enabled(device: Gdk.Device): boolean;
        /**
         * Returns the events mask for the widget corresponding to an specific device. These
         * are the events that the widget will receive when `device` operates on it.
         * @param device a #GdkDevice
         * @returns device event mask for @widget
         */
        get_device_events(device: Gdk.Device): Gdk.EventMask;
        /**
         * Gets the reading direction for a particular widget. See
         * gtk_widget_set_direction().
         * @returns the reading direction for the widget.
         */
        get_direction(): Gtk.TextDirection;
        // Conflicted with Gtk.MenuButton.get_direction
        get_direction(...args: never[]): any;
        /**
         * Get the #GdkDisplay for the toplevel window associated with
         * this widget. This function can only be called after the widget
         * has been added to a widget hierarchy with a #GtkWindow at the top.
         *
         * In general, you should only create display specific
         * resources when a widget has been realized, and you should
         * free those resources when the widget is unrealized.
         * @returns the #GdkDisplay for the toplevel for this widget.
         */
        get_display(): Gdk.Display;
        /**
         * Determines whether the widget is double buffered.
         *
         * See gtk_widget_set_double_buffered()
         * @returns %TRUE if the widget is double buffered
         */
        get_double_buffered(): boolean;
        /**
         * Returns the event mask (see #GdkEventMask) for the widget. These are the
         * events that the widget will receive.
         *
         * Note: Internally, the widget event mask will be the logical OR of the event
         * mask set through gtk_widget_set_events() or gtk_widget_add_events(), and the
         * event mask necessary to cater for every #GtkEventController created for the
         * widget.
         * @returns event mask for @widget
         */
        get_events(): number;
        /**
         * Returns whether the widget should grab focus when it is clicked with the mouse.
         * See gtk_widget_set_focus_on_click().
         * @returns %TRUE if the widget should grab focus when it is clicked with               the mouse.
         */
        get_focus_on_click(): boolean;
        /**
         * Gets the font map that has been set with gtk_widget_set_font_map().
         * @returns A #PangoFontMap, or %NULL
         */
        get_font_map(): Pango.FontMap | null;
        /**
         * Returns the #cairo_font_options_t used for Pango rendering. When not set,
         * the defaults font options for the #GdkScreen will be used.
         * @returns the #cairo_font_options_t or %NULL if not set
         */
        get_font_options(): cairo.FontOptions | null;
        /**
         * Obtains the frame clock for a widget. The frame clock is a global
         * “ticker” that can be used to drive animations and repaints.  The
         * most common reason to get the frame clock is to call
         * gdk_frame_clock_get_frame_time(), in order to get a time to use for
         * animating. For example you might record the start of the animation
         * with an initial value from gdk_frame_clock_get_frame_time(), and
         * then update the animation by calling
         * gdk_frame_clock_get_frame_time() again during each repaint.
         *
         * gdk_frame_clock_request_phase() will result in a new frame on the
         * clock, but won’t necessarily repaint any widgets. To repaint a
         * widget, you have to use gtk_widget_queue_draw() which invalidates
         * the widget (thus scheduling it to receive a draw on the next
         * frame). gtk_widget_queue_draw() will also end up requesting a frame
         * on the appropriate frame clock.
         *
         * A widget’s frame clock will not change while the widget is
         * mapped. Reparenting a widget (which implies a temporary unmap) can
         * change the widget’s frame clock.
         *
         * Unrealized widgets do not have a frame clock.
         * @returns a #GdkFrameClock, or %NULL if widget is unrealized
         */
        get_frame_clock(): Gdk.FrameClock | null;
        /**
         * Gets the value of the #GtkWidget:halign property.
         *
         * For backwards compatibility reasons this method will never return
         * %GTK_ALIGN_BASELINE, but instead it will convert it to
         * %GTK_ALIGN_FILL. Baselines are not supported for horizontal
         * alignment.
         * @returns the horizontal alignment of @widget
         */
        get_halign(): Gtk.Align;
        /**
         * Returns the current value of the has-tooltip property.  See
         * #GtkWidget:has-tooltip for more information.
         * @returns current value of has-tooltip on @widget.
         */
        get_has_tooltip(): boolean;
        /**
         * Determines whether `widget` has a #GdkWindow of its own. See
         * gtk_widget_set_has_window().
         * @returns %TRUE if @widget has a window, %FALSE otherwise
         */
        get_has_window(): boolean;
        /**
         * Gets whether the widget would like any available extra horizontal
         * space. When a user resizes a #GtkWindow, widgets with expand=TRUE
         * generally receive the extra space. For example, a list or
         * scrollable area or document in your window would often be set to
         * expand.
         *
         * Containers should use gtk_widget_compute_expand() rather than
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
         * Gets whether gtk_widget_set_hexpand() has been used to
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
         * @returns %TRUE if the widget is mapped, %FALSE otherwise.
         */
        get_mapped(): boolean;
        /**
         * Gets the value of the #GtkWidget:margin-bottom property.
         * @returns The bottom margin of @widget
         */
        get_margin_bottom(): number;
        /**
         * Gets the value of the #GtkWidget:margin-end property.
         * @returns The end margin of @widget
         */
        get_margin_end(): number;
        /**
         * Gets the value of the #GtkWidget:margin-left property.
         * @returns The left margin of @widget
         */
        get_margin_left(): number;
        /**
         * Gets the value of the #GtkWidget:margin-right property.
         * @returns The right margin of @widget
         */
        get_margin_right(): number;
        /**
         * Gets the value of the #GtkWidget:margin-start property.
         * @returns The start margin of @widget
         */
        get_margin_start(): number;
        /**
         * Gets the value of the #GtkWidget:margin-top property.
         * @returns The top margin of @widget
         */
        get_margin_top(): number;
        /**
         * Returns the modifier mask the `widget’`s windowing system backend
         * uses for a particular purpose.
         *
         * See gdk_keymap_get_modifier_mask().
         * @param intent the use case for the modifier mask
         * @returns the modifier mask used for @intent.
         */
        get_modifier_mask(intent: Gdk.ModifierIntent): Gdk.ModifierType;
        /**
         * Returns the current modifier style for the widget. (As set by
         * gtk_widget_modify_style().) If no style has previously set, a new
         * #GtkRcStyle will be created with all values unset, and set as the
         * modifier style for the widget. If you make changes to this rc
         * style, you must call gtk_widget_modify_style(), passing in the
         * returned rc style, to make sure that your changes take effect.
         *
         * Caution: passing the style back to gtk_widget_modify_style() will
         * normally end up destroying it, because gtk_widget_modify_style() copies
         * the passed-in style and sets the copy as the new modifier style,
         * thus dropping any reference to the old modifier style. Add a reference
         * to the modifier style if you want to keep it alive.
         * @returns the modifier style for the widget.     This rc style is owned by the widget. If you want to keep a     pointer to value this around, you must add a refcount using     g_object_ref().
         */
        get_modifier_style(): Gtk.RcStyle;
        /**
         * Retrieves the name of a widget. See gtk_widget_set_name() for the
         * significance of widget names.
         * @returns name of the widget. This string is owned by GTK+ and should not be modified or freed
         */
        get_name(): string;
        /**
         * Returns the current value of the #GtkWidget:no-show-all property,
         * which determines whether calls to gtk_widget_show_all()
         * will affect this widget.
         * @returns the current value of the “no-show-all” property.
         */
        get_no_show_all(): boolean;
        /**
         * Fetches the requested opacity for this widget.
         * See gtk_widget_set_opacity().
         * @returns the requested opacity for this widget.
         */
        get_opacity(): number;
        /**
         * Gets a #PangoContext with the appropriate font map, font description,
         * and base direction for this widget. Unlike the context returned
         * by gtk_widget_create_pango_context(), this context is owned by
         * the widget (it can be used until the screen for the widget changes
         * or the widget is removed from its toplevel), and will be updated to
         * match any changes to the widget’s attributes. This can be tracked
         * by using the #GtkWidget::screen-changed signal on the widget.
         * @returns the #PangoContext for the widget.
         */
        get_pango_context(): Pango.Context;
        /**
         * Returns the parent container of `widget`.
         * @returns the parent container of @widget, or %NULL
         */
        get_parent(): Gtk.Widget | null;
        /**
         * Gets `widget’`s parent window, or %NULL if it does not have one.
         * @returns the parent window of @widget, or %NULL if it does not have a parent window.
         */
        get_parent_window(): Gdk.Window | null;
        /**
         * Returns the #GtkWidgetPath representing `widget,` if the widget
         * is not connected to a toplevel widget, a partial path will be
         * created.
         * @returns The #GtkWidgetPath representing @widget
         */
        get_path(): Gtk.WidgetPath;
        /**
         * Obtains the location of the mouse pointer in widget coordinates.
         * Widget coordinates are a bit odd; for historical reasons, they are
         * defined as `widget->`window coordinates for widgets that return %TRUE for
         * gtk_widget_get_has_window(); and are relative to `widget->`allocation.x,
         * `widget->`allocation.y otherwise.
         */
        get_pointer(): [number, number];
        /**
         * Retrieves a widget’s initial minimum and natural height.
         *
         * This call is specific to width-for-height requests.
         *
         * The returned request will be modified by the
         * GtkWidgetClass::adjust_size_request virtual method and by any
         * #GtkSizeGroups that have been applied. That is, the returned request
         * is the one that should be used for layout, not necessarily the one
         * returned by the widget itself.
         */
        get_preferred_height(): [number, number];
        /**
         * Retrieves a widget’s minimum and natural height and the corresponding baselines if it would be given
         * the specified `width,` or the default height if `width` is -1. The baselines may be -1 which means
         * that no baseline is requested for this widget.
         *
         * The returned request will be modified by the
         * GtkWidgetClass::adjust_size_request and GtkWidgetClass::adjust_baseline_request virtual methods
         * and by any #GtkSizeGroups that have been applied. That is, the returned request
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
         * #GtkSizeGroups that have been applied. That is, the returned request
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
         * Use gtk_widget_get_preferred_height_and_baseline_for_width() if you want to support
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
         * #GtkSizeGroups that have been applied. That is, the returned request
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
         * #GtkSizeGroups that have been applied. That is, the returned request
         * is the one that should be used for layout, not necessarily the one
         * returned by the widget itself.
         * @param height the height which is available for allocation
         */
        get_preferred_width_for_height(height: number): [number, number];
        /**
         * Determines whether `widget` is realized.
         * @returns %TRUE if @widget is realized, %FALSE otherwise
         */
        get_realized(): boolean;
        /**
         * Determines whether `widget` is always treated as the default widget
         * within its toplevel when it has the focus, even if another widget
         * is the default.
         *
         * See gtk_widget_set_receives_default().
         * @returns %TRUE if @widget acts as the default widget when focused,               %FALSE otherwise
         */
        get_receives_default(): boolean;
        /**
         * Gets whether the widget prefers a height-for-width layout
         * or a width-for-height layout.
         *
         * #GtkBin widgets generally propagate the preference of
         * their child, container widgets need to request something either in
         * context of their children or in context of their allocation
         * capabilities.
         * @returns The #GtkSizeRequestMode preferred by @widget.
         */
        get_request_mode(): Gtk.SizeRequestMode;
        /**
         * Retrieves the widget’s requisition.
         *
         * This function should only be used by widget implementations in
         * order to figure whether the widget’s requisition has actually
         * changed after some internal state change (so that they can call
         * gtk_widget_queue_resize() instead of gtk_widget_queue_draw()).
         *
         * Normally, gtk_widget_size_request() should be used.
         */
        get_requisition(): Gtk.Requisition;
        /**
         * Get the root window where this widget is located. This function can
         * only be called after the widget has been added to a widget
         * hierarchy with #GtkWindow at the top.
         *
         * The root window is useful for such purposes as creating a popup
         * #GdkWindow associated with the window. In general, you should only
         * create display specific resources when a widget has been realized,
         * and you should free those resources when the widget is unrealized.
         * @returns the #GdkWindow root window for the toplevel for this widget.
         */
        get_root_window(): Gdk.Window;
        /**
         * Retrieves the internal scale factor that maps from window coordinates
         * to the actual device pixels. On traditional systems this is 1, on
         * high density outputs, it can be a higher value (typically 2).
         *
         * See gdk_window_get_scale_factor().
         * @returns the scale factor for @widget
         */
        get_scale_factor(): number;
        /**
         * Get the #GdkScreen from the toplevel window associated with
         * this widget. This function can only be called after the widget
         * has been added to a widget hierarchy with a #GtkWindow
         * at the top.
         *
         * In general, you should only create screen specific
         * resources when a widget has been realized, and you should
         * free those resources when the widget is unrealized.
         * @returns the #GdkScreen for the toplevel for this widget.
         */
        get_screen(): Gdk.Screen;
        /**
         * Returns the widget’s sensitivity (in the sense of returning
         * the value that has been set using gtk_widget_set_sensitive()).
         *
         * The effective sensitivity of a widget is however determined by both its
         * own and its parent widget’s sensitivity. See gtk_widget_is_sensitive().
         * @returns %TRUE if the widget is sensitive
         */
        get_sensitive(): boolean;
        /**
         * Gets the settings object holding the settings used for this widget.
         *
         * Note that this function can only be called when the #GtkWidget
         * is attached to a toplevel, since the settings object is specific
         * to a particular #GdkScreen.
         * @returns the relevant #GtkSettings object
         */
        get_settings(): Gtk.Settings;
        /**
         * Gets the size request that was explicitly set for the widget using
         * gtk_widget_set_size_request(). A value of -1 stored in `width` or
         * `height` indicates that that dimension has not been set explicitly
         * and the natural requisition of the widget will be used instead. See
         * gtk_widget_set_size_request(). To get the size a widget will
         * actually request, call gtk_widget_get_preferred_size() instead of
         * this function.
         */
        get_size_request(): [number, number];
        /**
         * Returns the widget’s state. See gtk_widget_set_state().
         * @returns the state of @widget.
         */
        get_state(): Gtk.StateType;
        /**
         * Returns the widget state as a flag set. It is worth mentioning
         * that the effective %GTK_STATE_FLAG_INSENSITIVE state will be
         * returned, that is, also based on parent insensitivity, even if
         * `widget` itself is sensitive.
         *
         * Also note that if you are looking for a way to obtain the
         * #GtkStateFlags to pass to a #GtkStyleContext method, you
         * should look at gtk_style_context_get_state().
         * @returns The state flags for widget
         */
        get_state_flags(): Gtk.StateFlags;
        /**
         * Simply an accessor function that returns `widget->`style.
         * @returns the widget’s #GtkStyle
         */
        get_style(): Gtk.Style;
        /**
         * Returns the style context associated to `widget`. The returned object is
         * guaranteed to be the same for the lifetime of `widget`.
         * @returns a #GtkStyleContext. This memory is owned by @widget and          must not be freed.
         */
        get_style_context(): Gtk.StyleContext;
        /**
         * Returns %TRUE if `widget` is multiple pointer aware. See
         * gtk_widget_set_support_multidevice() for more information.
         * @returns %TRUE if @widget is multidevice aware.
         */
        get_support_multidevice(): boolean;
        /**
         * Fetch an object build from the template XML for `widget_type` in this `widget` instance.
         *
         * This will only report children which were previously declared with
         * gtk_widget_class_bind_template_child_full() or one of its
         * variants.
         *
         * This function is only meant to be called for code which is private to the `widget_type` which
         * declared the child and is meant for language bindings which cannot easily make use
         * of the GObject structure offsets.
         * @param widget_type The #GType to get a template child for
         * @param name The “id” of the child defined in the template XML
         * @returns The object built in the template XML with the id @name
         */
        get_template_child<T = GObject.Object>(widget_type: GObject.GType, name: string): T;
        /**
         * Gets the contents of the tooltip for `widget`.
         * @returns the tooltip text, or %NULL. You should free the   returned string with g_free() when done.
         */
        get_tooltip_markup(): string | null;
        /**
         * Gets the contents of the tooltip for `widget`.
         * @returns the tooltip text, or %NULL. You should free the   returned string with g_free() when done.
         */
        get_tooltip_text(): string | null;
        /**
         * Returns the #GtkWindow of the current tooltip. This can be the
         * GtkWindow created by default, or the custom tooltip window set
         * using gtk_widget_set_tooltip_window().
         * @returns The #GtkWindow of the current tooltip.
         */
        get_tooltip_window(): Gtk.Window;
        /**
         * This function returns the topmost widget in the container hierarchy
         * `widget` is a part of. If `widget` has no parent widgets, it will be
         * returned as the topmost widget. No reference will be added to the
         * returned widget; it should not be unreferenced.
         *
         * Note the difference in behavior vs. gtk_widget_get_ancestor();
         * `gtk_widget_get_ancestor (widget, GTK_TYPE_WINDOW)`
         * would return
         * %NULL if `widget` wasn’t inside a toplevel window, and if the
         * window was inside a #GtkWindow-derived widget which was in turn
         * inside the toplevel #GtkWindow. While the second case may
         * seem unlikely, it actually happens when a #GtkPlug is embedded
         * inside a #GtkSocket within the same application.
         *
         * To reliably find the toplevel #GtkWindow, use
         * gtk_widget_get_toplevel() and call GTK_IS_WINDOW()
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
         * @returns the topmost ancestor of @widget, or @widget itself    if there’s no ancestor.
         */
        get_toplevel(): Gtk.Widget;
        /**
         * Gets the value of the #GtkWidget:valign property.
         *
         * For backwards compatibility reasons this method will never return
         * %GTK_ALIGN_BASELINE, but instead it will convert it to
         * %GTK_ALIGN_FILL. If your widget want to support baseline aligned
         * children it must use gtk_widget_get_valign_with_baseline(), or
         * `g_object_get (widget, "valign", &value, NULL)`, which will
         * also report the true value.
         * @returns the vertical alignment of @widget, ignoring baseline alignment
         */
        get_valign(): Gtk.Align;
        /**
         * Gets the value of the #GtkWidget:valign property, including
         * %GTK_ALIGN_BASELINE.
         * @returns the vertical alignment of @widget
         */
        get_valign_with_baseline(): Gtk.Align;
        /**
         * Gets whether the widget would like any available extra vertical
         * space.
         *
         * See gtk_widget_get_hexpand() for more detail.
         * @returns whether vexpand flag is set
         */
        get_vexpand(): boolean;
        /**
         * Gets whether gtk_widget_set_vexpand() has been used to
         * explicitly set the expand flag on this widget.
         *
         * See gtk_widget_get_hexpand_set() for more detail.
         * @returns whether vexpand has been explicitly set
         */
        get_vexpand_set(): boolean;
        /**
         * Determines whether the widget is visible. If you want to
         * take into account whether the widget’s parent is also marked as
         * visible, use gtk_widget_is_visible() instead.
         *
         * This function does not check if the widget is obscured in any way.
         *
         * See gtk_widget_set_visible().
         * @returns %TRUE if the widget is visible
         */
        get_visible(): boolean;
        /**
         * Gets the visual that will be used to render `widget`.
         * @returns the visual for @widget
         */
        get_visual(): Gdk.Visual;
        /**
         * Returns the widget’s window if it is realized, %NULL otherwise
         * @returns @widget’s window.
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
         * by calling gtk_widget_set_can_default() with a %TRUE value.
         * The default widget is activated when
         * the user presses Enter in a window. Default widgets must be
         * activatable, that is, gtk_widget_activate() should affect them. Note
         * that #GtkEntry widgets require the “activates-default” property
         * set to %TRUE before they activate the default widget when Enter
         * is pressed and the #GtkEntry is focused.
         */
        grab_default(): void;
        /**
         * Causes `widget` to have the keyboard focus for the #GtkWindow it's
         * inside. `widget` must be a focusable widget, such as a #GtkEntry;
         * something like #GtkFrame won’t work.
         *
         * More precisely, it must have the %GTK_CAN_FOCUS flag set. Use
         * gtk_widget_set_can_focus() to modify that flag.
         *
         * The widget also needs to be realized and mapped. This is indicated by the
         * related signals. Grabbing the focus immediately after creating the widget
         * will likely fail and cause critical warnings.
         */
        grab_focus(): void;
        /**
         * Removes the grab from the given widget.
         *
         * You have to pair calls to gtk_grab_add() and gtk_grab_remove().
         *
         * If `widget` does not have the grab, this function does nothing.
         */
        grab_remove(): void;
        /**
         * Determines whether the widget is currently grabbing events, so it
         * is the only widget receiving input events (keyboard and mouse).
         *
         * See also gtk_grab_add().
         * @returns %TRUE if the widget is in the grab_widgets stack
         */
        has_grab(): boolean;
        /**
         * Determines if the widget style has been looked up through the rc mechanism.
         * @returns %TRUE if the widget has been looked up through the rc   mechanism, %FALSE otherwise.
         */
        has_rc_style(): boolean;
        /**
         * Checks whether there is a #GdkScreen is associated with
         * this widget. All toplevel widgets have an associated
         * screen, and all widgets added into a hierarchy with a toplevel
         * window at the top.
         * @returns %TRUE if there is a #GdkScreen associated   with the widget.
         */
        has_screen(): boolean;
        /**
         * Determines if the widget should show a visible indication that
         * it has the global input focus. This is a convenience function for
         * use in ::draw handlers that takes into account whether focus
         * indication should currently be shown in the toplevel window of
         * `widget`. See gtk_window_get_focus_visible() for more information
         * about focus indication.
         *
         * To find out if the widget has the global input focus, use
         * gtk_widget_has_focus().
         * @returns %TRUE if the widget should display a “focus rectangle”
         */
        has_visible_focus(): boolean;
        /**
         * Reverses the effects of gtk_widget_show(), causing the widget to be
         * hidden (invisible to the user).
         */
        hide(): void;
        /**
         * Utility function; intended to be connected to the #GtkWidget::delete-event
         * signal on a #GtkWindow. The function calls gtk_widget_hide() on its
         * argument, then returns %TRUE. If connected to ::delete-event, the
         * result is that clicking the close button for a window (on the
         * window frame, top right corner usually) will hide but not destroy
         * the window. By default, GTK+ destroys windows when ::delete-event
         * is received.
         * @returns %TRUE
         */
        hide_on_delete(): boolean;
        /**
         * Returns whether the widget is currently being destroyed.
         * This information can sometimes be used to avoid doing
         * unnecessary work.
         * @returns %TRUE if @widget is being destroyed
         */
        in_destruction(): boolean;
        /**
         * Creates and initializes child widgets defined in templates. This
         * function must be called in the instance initializer for any
         * class which assigned itself a template using gtk_widget_class_set_template()
         *
         * It is important to call this function in the instance initializer
         * of a #GtkWidget subclass and not in #GObject.constructed() or
         * #GObject.constructor() for two reasons.
         *
         * One reason is that generally derived widgets will assume that parent
         * class composite widgets have been created in their instance
         * initializers.
         *
         * Another reason is that when calling g_object_new() on a widget with
         * composite templates, it’s important to build the composite widgets
         * before the construct properties are set. Properties passed to g_object_new()
         * should take precedence over properties set in the private template XML.
         */
        init_template(): void;
        /**
         * Sets an input shape for this widget’s GDK window. This allows for
         * windows which react to mouse click in a nonrectangular region, see
         * gdk_window_input_shape_combine_region() for more information.
         * @param region shape to be added, or %NULL to remove an existing shape
         */
        input_shape_combine_region(region?: cairo.Region | null): void;
        /**
         * Inserts `group` into `widget`. Children of `widget` that implement
         * #GtkActionable can then be associated with actions in `group` by
         * setting their “action-name” to
         * `prefix`.`action-name`.
         *
         * If `group` is %NULL, a previously inserted group for `name` is removed
         * from `widget`.
         * @param name the prefix for actions in @group
         * @param group a #GActionGroup, or %NULL
         */
        insert_action_group(name: string, group?: Gio.ActionGroup | null): void;
        /**
         * Computes the intersection of a `widget’`s area and `area,` storing
         * the intersection in `intersection,` and returns %TRUE if there was
         * an intersection.  `intersection` may be %NULL if you’re only
         * interested in whether there was an intersection.
         * @param area a rectangle
         * @returns %TRUE if there was an intersection
         */
        intersect(area: Gdk.Rectangle): [boolean, Gdk.Rectangle | null];
        /**
         * Determines whether `widget` is somewhere inside `ancestor,` possibly with
         * intermediate containers.
         * @param ancestor another #GtkWidget
         * @returns %TRUE if @ancestor contains @widget as a child,    grandchild, great grandchild, etc.
         */
        is_ancestor(ancestor: Gtk.Widget): boolean;
        /**
         * Whether `widget` can rely on having its alpha channel
         * drawn correctly. On X11 this function returns whether a
         * compositing manager is running for `widget’`s screen.
         *
         * Please note that the semantics of this call will change
         * in the future if used on a widget that has a composited
         * window in its hierarchy (as set by gdk_window_set_composited()).
         * @returns %TRUE if the widget can rely on its alpha channel being drawn correctly.
         */
        is_composited(): boolean;
        /**
         * Determines whether `widget` can be drawn to. A widget can be drawn
         * to if it is mapped and visible.
         * @returns %TRUE if @widget is drawable, %FALSE otherwise
         */
        is_drawable(): boolean;
        /**
         * Returns the widget’s effective sensitivity, which means
         * it is sensitive itself and also its parent widget is sensitive
         * @returns %TRUE if the widget is effectively sensitive
         */
        is_sensitive(): boolean;
        /**
         * Determines whether `widget` is a toplevel widget.
         *
         * Currently only #GtkWindow and #GtkInvisible (and out-of-process
         * #GtkPlugs) are toplevel widgets. Toplevel widgets have no parent
         * widget.
         * @returns %TRUE if @widget is a toplevel, %FALSE otherwise
         */
        is_toplevel(): boolean;
        /**
         * Determines whether the widget and all its parents are marked as
         * visible.
         *
         * This function does not check if the widget is obscured in any way.
         *
         * See also gtk_widget_get_visible() and gtk_widget_set_visible()
         * @returns %TRUE if the widget and all its parents are visible
         */
        is_visible(): boolean;
        /**
         * This function should be called whenever keyboard navigation within
         * a single widget hits a boundary. The function emits the
         * #GtkWidget::keynav-failed signal on the widget and its return
         * value should be interpreted in a way similar to the return value of
         * gtk_widget_child_focus():
         *
         * When %TRUE is returned, stay in the widget, the failed keyboard
         * navigation is OK and/or there is nowhere we can/should move the
         * focus to.
         *
         * When %FALSE is returned, the caller should continue with keyboard
         * navigation outside the widget, e.g. by calling
         * gtk_widget_child_focus() on the widget’s toplevel.
         *
         * The default ::keynav-failed handler returns %FALSE for
         * %GTK_DIR_TAB_FORWARD and %GTK_DIR_TAB_BACKWARD. For the other
         * values of #GtkDirectionType it returns %TRUE.
         *
         * Whenever the default handler returns %TRUE, it also calls
         * gtk_widget_error_bell() to notify the user of the failed keyboard
         * navigation.
         *
         * A use case for providing an own implementation of ::keynav-failed
         * (either by connecting to it or by overriding it) would be a row of
         * #GtkEntry widgets where the user should be able to navigate the
         * entire row with the cursor keys, as e.g. known from user interfaces
         * that require entering license keys.
         * @param direction direction of focus movement
         * @returns %TRUE if stopping keyboard navigation is fine, %FALSE               if the emitting widget should try to handle the keyboard               navigation attempt in its parent container(s).
         */
        keynav_failed(direction: Gtk.DirectionType): boolean;
        /**
         * Lists the closures used by `widget` for accelerator group connections
         * with gtk_accel_group_connect_by_path() or gtk_accel_group_connect().
         * The closures can be used to monitor accelerator changes on `widget,`
         * by connecting to the `GtkAccelGroup:`:accel-changed signal of the
         * #GtkAccelGroup of a closure which can be found out with
         * gtk_accel_group_from_accel_closure().
         * @returns a newly allocated #GList of closures
         */
        list_accel_closures(): GObject.Closure[];
        /**
         * Retrieves a %NULL-terminated array of strings containing the prefixes of
         * #GActionGroup's available to `widget`.
         * @returns a %NULL-terminated array of strings.
         */
        list_action_prefixes(): string[];
        /**
         * Returns a newly allocated list of the widgets, normally labels, for
         * which this widget is the target of a mnemonic (see for example,
         * gtk_label_set_mnemonic_widget()).
         *
         * The widgets in the list are not individually referenced. If you
         * want to iterate through the list and perform actions involving
         * callbacks that might destroy the widgets, you
         * must call `g_list_foreach (result,
         * (GFunc)g_object_ref, NULL)` first, and then unref all the
         * widgets afterwards.
         * @returns the list of  mnemonic labels; free this list  with g_list_free() when you are done with it.
         */
        list_mnemonic_labels(): Gtk.Widget[];
        /**
         * This function is only for use in widget implementations. Causes
         * a widget to be mapped if it isn’t already.
         */
        map(): void;
        /**
         * Emits the #GtkWidget::mnemonic-activate signal.
         * @param group_cycling %TRUE if there are other widgets with the same mnemonic
         * @returns %TRUE if the signal has been handled
         */
        mnemonic_activate(group_cycling: boolean): boolean;
        /**
         * Sets the base color for a widget in a particular state.
         * All other style values are left untouched. The base color
         * is the background color used along with the text color
         * (see gtk_widget_modify_text()) for widgets such as #GtkEntry
         * and #GtkTextView. See also gtk_widget_modify_style().
         *
         * > Note that “no window” widgets (which have the %GTK_NO_WINDOW
         * > flag set) draw on their parent container’s window and thus may
         * > not draw any background themselves. This is the case for e.g.
         * > #GtkLabel.
         * >
         * > To modify the background of such widgets, you have to set the
         * > base color on their parent; if you want to set the background
         * > of a rectangular area around a label, try placing the label in
         * > a #GtkEventBox widget and setting the base color on that.
         * @param state the state for which to set the base color
         * @param color the color to assign (does not need to     be allocated), or %NULL to undo the effect of previous     calls to of gtk_widget_modify_base().
         */
        modify_base(state: Gtk.StateType, color?: Gdk.Color | null): void;
        /**
         * Sets the background color for a widget in a particular state.
         *
         * All other style values are left untouched.
         * See also gtk_widget_modify_style().
         *
         * > Note that “no window” widgets (which have the %GTK_NO_WINDOW
         * > flag set) draw on their parent container’s window and thus may
         * > not draw any background themselves. This is the case for e.g.
         * > #GtkLabel.
         * >
         * > To modify the background of such widgets, you have to set the
         * > background color on their parent; if you want to set the background
         * > of a rectangular area around a label, try placing the label in
         * > a #GtkEventBox widget and setting the background color on that.
         * @param state the state for which to set the background color
         * @param color the color to assign (does not need     to be allocated), or %NULL to undo the effect of previous     calls to of gtk_widget_modify_bg().
         */
        modify_bg(state: Gtk.StateType, color?: Gdk.Color | null): void;
        /**
         * Sets the cursor color to use in a widget, overriding the #GtkWidget
         * cursor-color and secondary-cursor-color
         * style properties.
         *
         * All other style values are left untouched.
         * See also gtk_widget_modify_style().
         * @param primary the color to use for primary cursor (does not     need to be allocated), or %NULL to undo the effect of previous     calls to of gtk_widget_modify_cursor().
         * @param secondary the color to use for secondary cursor (does     not need to be allocated), or %NULL to undo the effect of     previous calls to of gtk_widget_modify_cursor().
         */
        modify_cursor(primary?: Gdk.Color | null, secondary?: Gdk.Color | null): void;
        /**
         * Sets the foreground color for a widget in a particular state.
         *
         * All other style values are left untouched.
         * See also gtk_widget_modify_style().
         * @param state the state for which to set the foreground color
         * @param color the color to assign (does not need to be allocated),     or %NULL to undo the effect of previous calls to     of gtk_widget_modify_fg().
         */
        modify_fg(state: Gtk.StateType, color?: Gdk.Color | null): void;
        /**
         * Sets the font to use for a widget.
         *
         * All other style values are left untouched.
         * See also gtk_widget_modify_style().
         * @param font_desc the font description to use, or %NULL     to undo the effect of previous calls to gtk_widget_modify_font()
         */
        modify_font(font_desc?: Pango.FontDescription | null): void;
        /**
         * Modifies style values on the widget.
         *
         * Modifications made using this technique take precedence over
         * style values set via an RC file, however, they will be overridden
         * if a style is explicitly set on the widget using gtk_widget_set_style().
         * The #GtkRcStyle-struct is designed so each field can either be
         * set or unset, so it is possible, using this function, to modify some
         * style values and leave the others unchanged.
         *
         * Note that modifications made with this function are not cumulative
         * with previous calls to gtk_widget_modify_style() or with such
         * functions as gtk_widget_modify_fg(). If you wish to retain
         * previous values, you must first call gtk_widget_get_modifier_style(),
         * make your modifications to the returned style, then call
         * gtk_widget_modify_style() with that style. On the other hand,
         * if you first call gtk_widget_modify_style(), subsequent calls
         * to such functions gtk_widget_modify_fg() will have a cumulative
         * effect with the initial modifications.
         * @param style the #GtkRcStyle-struct holding the style modifications
         */
        modify_style(style: Gtk.RcStyle): void;
        /**
         * Sets the text color for a widget in a particular state.
         *
         * All other style values are left untouched.
         * The text color is the foreground color used along with the
         * base color (see gtk_widget_modify_base()) for widgets such
         * as #GtkEntry and #GtkTextView.
         * See also gtk_widget_modify_style().
         * @param state the state for which to set the text color
         * @param color the color to assign (does not need to     be allocated), or %NULL to undo the effect of previous     calls to of gtk_widget_modify_text().
         */
        modify_text(state: Gtk.StateType, color?: Gdk.Color | null): void;
        /**
         * Sets the background color to use for a widget.
         *
         * All other style values are left untouched.
         * See gtk_widget_override_color().
         * @param state the state for which to set the background color
         * @param color the color to assign, or %NULL to undo the effect     of previous calls to gtk_widget_override_background_color()
         */
        override_background_color(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void;
        /**
         * Sets the color to use for a widget.
         *
         * All other style values are left untouched.
         *
         * This function does not act recursively. Setting the color of a
         * container does not affect its children. Note that some widgets that
         * you may not think of as containers, for instance #GtkButtons,
         * are actually containers.
         *
         * This API is mostly meant as a quick way for applications to
         * change a widget appearance. If you are developing a widgets
         * library and intend this change to be themeable, it is better
         * done by setting meaningful CSS classes in your
         * widget/container implementation through gtk_style_context_add_class().
         *
         * This way, your widget library can install a #GtkCssProvider
         * with the %GTK_STYLE_PROVIDER_PRIORITY_FALLBACK priority in order
         * to provide a default styling for those widgets that need so, and
         * this theming may fully overridden by the user’s theme.
         *
         * Note that for complex widgets this may bring in undesired
         * results (such as uniform background color everywhere), in
         * these cases it is better to fully style such widgets through a
         * #GtkCssProvider with the %GTK_STYLE_PROVIDER_PRIORITY_APPLICATION
         * priority.
         * @param state the state for which to set the color
         * @param color the color to assign, or %NULL to undo the effect     of previous calls to gtk_widget_override_color()
         */
        override_color(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void;
        /**
         * Sets the cursor color to use in a widget, overriding the
         * cursor-color and secondary-cursor-color
         * style properties. All other style values are left untouched.
         * See also gtk_widget_modify_style().
         *
         * Note that the underlying properties have the #GdkColor type,
         * so the alpha value in `primary` and `secondary` will be ignored.
         * @param cursor the color to use for primary cursor (does not need to be     allocated), or %NULL to undo the effect of previous calls to     of gtk_widget_override_cursor().
         * @param secondary_cursor the color to use for secondary cursor (does not     need to be allocated), or %NULL to undo the effect of previous     calls to of gtk_widget_override_cursor().
         */
        override_cursor(cursor?: Gdk.RGBA | null, secondary_cursor?: Gdk.RGBA | null): void;
        /**
         * Sets the font to use for a widget. All other style values are
         * left untouched. See gtk_widget_override_color().
         * @param font_desc the font description to use, or %NULL to undo     the effect of previous calls to gtk_widget_override_font()
         */
        override_font(font_desc?: Pango.FontDescription | null): void;
        /**
         * Sets a symbolic color for a widget.
         *
         * All other style values are left untouched.
         * See gtk_widget_override_color() for overriding the foreground
         * or background color.
         * @param name the name of the symbolic color to modify
         * @param color the color to assign (does not need     to be allocated), or %NULL to undo the effect of previous     calls to gtk_widget_override_symbolic_color()
         */
        override_symbolic_color(name: string, color?: Gdk.RGBA | null): void;
        /**
         * Obtains the full path to `widget`. The path is simply the name of a
         * widget and all its parents in the container hierarchy, separated by
         * periods. The name of a widget comes from
         * gtk_widget_get_name(). Paths are used to apply styles to a widget
         * in gtkrc configuration files. Widget names are the type of the
         * widget by default (e.g. “GtkButton”) or can be set to an
         * application-specific value with gtk_widget_set_name(). By setting
         * the name of a widget, you allow users or theme authors to apply
         * styles to that specific widget in their gtkrc
         * file. `path_reversed_p` fills in the path in reverse order,
         * i.e. starting with `widget’`s name instead of starting with the name
         * of `widget’`s outermost ancestor.
         */
        path(): [number, string, string];
        /**
         * This function is only for use in widget implementations.
         *
         * Flags the widget for a rerun of the GtkWidgetClass::size_allocate
         * function. Use this function instead of gtk_widget_queue_resize()
         * when the `widget'`s size request didn't change but it wants to
         * reposition its contents.
         *
         * An example user of this function is gtk_widget_set_halign().
         */
        queue_allocate(): void;
        /**
         * Mark `widget` as needing to recompute its expand flags. Call
         * this function when setting legacy expand child properties
         * on the child of a container.
         *
         * See gtk_widget_compute_expand().
         */
        queue_compute_expand(): void;
        /**
         * Equivalent to calling gtk_widget_queue_draw_area() for the
         * entire area of a widget.
         */
        queue_draw(): void;
        /**
         * Convenience function that calls gtk_widget_queue_draw_region() on
         * the region created from the given coordinates.
         *
         * The region here is specified in widget coordinates.
         * Widget coordinates are a bit odd; for historical reasons, they are
         * defined as `widget->`window coordinates for widgets that return %TRUE for
         * gtk_widget_get_has_window(), and are relative to `widget->`allocation.x,
         * `widget->`allocation.y otherwise.
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
         * gdk_window_invalidate_region() on the widget’s window and all its
         * child windows. Once the main loop becomes idle (after the current
         * batch of events has been processed, roughly), the window will
         * receive expose events for the union of all regions that have been
         * invalidated.
         *
         * Normally you would only use this function in widget
         * implementations. You might also use it to schedule a redraw of a
         * #GtkDrawingArea or some portion thereof.
         * @param region region to draw
         */
        queue_draw_region(region: cairo.Region): void;
        /**
         * This function is only for use in widget implementations.
         * Flags a widget to have its size renegotiated; should
         * be called when a widget for some reason has a new size request.
         * For example, when you change the text in a #GtkLabel, #GtkLabel
         * queues a resize to ensure there’s enough space for the new text.
         *
         * Note that you cannot call gtk_widget_queue_resize() on a widget
         * from inside its implementation of the GtkWidgetClass::size_allocate
         * virtual method. Calls to gtk_widget_queue_resize() from inside
         * GtkWidgetClass::size_allocate will be silently ignored.
         */
        queue_resize(): void;
        /**
         * This function works like gtk_widget_queue_resize(),
         * except that the widget is not invalidated.
         */
        queue_resize_no_redraw(): void;
        /**
         * Creates the GDK (windowing system) resources associated with a
         * widget.  For example, `widget->`window will be created when a widget
         * is realized.  Normally realization happens implicitly; if you show
         * a widget and all its parent containers, then the widget will be
         * realized and mapped automatically.
         *
         * Realizing a widget requires all
         * the widget’s parent widgets to be realized; calling
         * gtk_widget_realize() realizes the widget’s parents in addition to
         * `widget` itself. If a widget is not yet inside a toplevel window
         * when you realize it, bad things will happen.
         *
         * This function is primarily used in widget implementations, and
         * isn’t very useful otherwise. Many times when you think you might
         * need it, a better approach is to connect to a signal that will be
         * called after the widget is realized automatically, such as
         * #GtkWidget::draw. Or simply g_signal_connect () to the
         * #GtkWidget::realize signal.
         */
        realize(): void;
        /**
         * Computes the intersection of a `widget’`s area and `region,` returning
         * the intersection. The result may be empty, use cairo_region_is_empty() to
         * check.
         * @param region a #cairo_region_t, in the same coordinate system as          @widget->allocation. That is, relative to @widget->window          for widgets which return %FALSE from gtk_widget_get_has_window();          relative to the parent window of @widget->window otherwise.
         * @returns A newly allocated region holding the intersection of @widget     and @region.
         */
        region_intersect(region: cairo.Region): cairo.Region;
        /**
         * Registers a #GdkWindow with the widget and sets it up so that
         * the widget receives events for it. Call gtk_widget_unregister_window()
         * when destroying the window.
         *
         * Before 3.8 you needed to call gdk_window_set_user_data() directly to set
         * this up. This is now deprecated and you should use gtk_widget_register_window()
         * instead. Old code will keep working as is, although some new features like
         * transparency might not work perfectly.
         * @param window a #GdkWindow
         */
        register_window(window: Gdk.Window): void;
        /**
         * Removes an accelerator from `widget,` previously installed with
         * gtk_widget_add_accelerator().
         * @param accel_group accel group for this widget
         * @param accel_key GDK keyval of the accelerator
         * @param accel_mods modifier key combination of the accelerator
         * @returns whether an accelerator was installed and could be removed
         */
        remove_accelerator(accel_group: Gtk.AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType): boolean;
        /**
         * Removes a widget from the list of mnemonic labels for
         * this widget. (See gtk_widget_list_mnemonic_labels()). The widget
         * must have previously been added to the list with
         * gtk_widget_add_mnemonic_label().
         * @param label a #GtkWidget that was previously set as a mnemonic label for         @widget with gtk_widget_add_mnemonic_label().
         */
        remove_mnemonic_label(label: Gtk.Widget): void;
        /**
         * Removes a tick callback previously registered with
         * gtk_widget_add_tick_callback().
         * @param id an id returned by gtk_widget_add_tick_callback()
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
         * The pixels in the returned #GdkPixbuf are shared with the rest of
         * the application and should not be modified. The pixbuf should be
         * freed after use with g_object_unref().
         * @param stock_id a stock ID
         * @param size a stock size (#GtkIconSize). A size of `(GtkIconSize)-1`     means render at the size of the source and don’t scale (if there are     multiple source sizes, GTK+ picks one of the available sizes).
         * @param detail render detail to pass to theme engine
         * @returns a new pixbuf, or %NULL if the     stock ID wasn’t known
         */
        render_icon(stock_id: string, size: number, detail?: string | null): GdkPixbuf.Pixbuf | null;
        /**
         * A convenience function that uses the theme engine and style
         * settings for `widget` to look up `stock_id` and render it to
         * a pixbuf. `stock_id` should be a stock icon ID such as
         * #GTK_STOCK_OPEN or #GTK_STOCK_OK. `size` should be a size
         * such as #GTK_ICON_SIZE_MENU.
         *
         * The pixels in the returned #GdkPixbuf are shared with the rest of
         * the application and should not be modified. The pixbuf should be freed
         * after use with g_object_unref().
         * @param stock_id a stock ID
         * @param size a stock size (#GtkIconSize). A size of `(GtkIconSize)-1`     means render at the size of the source and don’t scale (if there are     multiple source sizes, GTK+ picks one of the available sizes).
         * @returns a new pixbuf, or %NULL if the     stock ID wasn’t known
         */
        render_icon_pixbuf(stock_id: string, size: number): GdkPixbuf.Pixbuf | null;
        /**
         * Moves a widget from one #GtkContainer to another, handling reference
         * count issues to avoid destroying the widget.
         * @param new_parent a #GtkContainer to move the widget into
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
         * by updating its widget path. #GtkContainers may want
         * to use this on a child when reordering it in a way that a different
         * style might apply to it. See also gtk_container_get_path_for_child().
         */
        reset_style(): void;
        /**
         * Very rarely-used function. This function is used to emit
         * an expose event on a widget. This function is not normally used
         * directly. The only time it is used is when propagating an expose
         * event to a windowless child widget (gtk_widget_get_has_window() is %FALSE),
         * and that is normally done using gtk_container_propagate_draw().
         *
         * If you want to force an area of a window to be redrawn,
         * use gdk_window_invalidate_rect() or gdk_window_invalidate_region().
         * To cause the redraw to be done immediately, follow that call
         * with a call to gdk_window_process_updates().
         * @param event a expose #GdkEvent
         * @returns return from the event signal emission (%TRUE if   the event was handled)
         */
        send_expose(event: Gdk.Event): number;
        /**
         * Sends the focus change `event` to `widget`
         *
         * This function is not meant to be used by applications. The only time it
         * should be used is when it is necessary for a #GtkWidget to assign focus
         * to a widget that is semantically owned by the first widget even though
         * it’s not a direct child - for instance, a search entry in a floating
         * window similar to the quick search in #GtkTreeView.
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
         * @param event a #GdkEvent of type GDK_FOCUS_CHANGE
         * @returns the return value from the event signal emission: %TRUE   if the event was handled, and %FALSE otherwise
         */
        send_focus_change(event: Gdk.Event): boolean;
        /**
         * Given an accelerator group, `accel_group,` and an accelerator path,
         * `accel_path,` sets up an accelerator in `accel_group` so whenever the
         * key binding that is defined for `accel_path` is pressed, `widget`
         * will be activated.  This removes any accelerators (for any
         * accelerator group) installed by previous calls to
         * gtk_widget_set_accel_path(). Associating accelerators with
         * paths allows them to be modified by the user and the modifications
         * to be saved for future use. (See gtk_accel_map_save().)
         *
         * This function is a low level function that would most likely
         * be used by a menu creation system like #GtkUIManager. If you
         * use #GtkUIManager, setting up accelerator paths will be done
         * automatically.
         *
         * Even when you you aren’t using #GtkUIManager, if you only want to
         * set up accelerators on menu items gtk_menu_item_set_accel_path()
         * provides a somewhat more convenient interface.
         *
         * Note that `accel_path` string will be stored in a #GQuark. Therefore, if you
         * pass a static string, you can save some memory by interning it first with
         * g_intern_static_string().
         * @param accel_path path used to look up the accelerator
         * @param accel_group a #GtkAccelGroup.
         */
        set_accel_path(accel_path?: string | null, accel_group?: Gtk.AccelGroup | null): void;
        /**
         * Sets the widget’s allocation.  This should not be used
         * directly, but from within a widget’s size_allocate method.
         *
         * The allocation set should be the “adjusted” or actual
         * allocation. If you’re implementing a #GtkContainer, you want to use
         * gtk_widget_size_allocate() instead of gtk_widget_set_allocation().
         * The GtkWidgetClass::adjust_size_allocation virtual method adjusts the
         * allocation inside gtk_widget_size_allocate() to create an adjusted
         * allocation.
         * @param allocation a pointer to a #GtkAllocation to copy from
         */
        set_allocation(allocation: Gtk.Allocation): void;
        /**
         * Sets whether the application intends to draw on the widget in
         * an #GtkWidget::draw handler.
         *
         * This is a hint to the widget and does not affect the behavior of
         * the GTK+ core; many widgets ignore this flag entirely. For widgets
         * that do pay attention to the flag, such as #GtkEventBox and #GtkWindow,
         * the effect is to suppress default themed drawing of the widget's
         * background. (Children of the widget will still be drawn.) The application
         * is then entirely responsible for drawing the widget background.
         *
         * Note that the background is still drawn when the widget is mapped.
         * @param app_paintable %TRUE if the application will paint on the widget
         */
        set_app_paintable(app_paintable: boolean): void;
        /**
         * Specifies whether `widget` can be a default widget. See
         * gtk_widget_grab_default() for details about the meaning of
         * “default”.
         * @param can_default whether or not @widget can be a default widget.
         */
        set_can_default(can_default: boolean): void;
        /**
         * Specifies whether `widget` can own the input focus. See
         * gtk_widget_grab_focus() for actually setting the input focus on a
         * widget.
         * @param can_focus whether or not @widget can own the input focus.
         */
        set_can_focus(can_focus: boolean): void;
        /**
         * Sets whether `widget` should be mapped along with its when its parent
         * is mapped and `widget` has been shown with gtk_widget_show().
         *
         * The child visibility can be set for widget before it is added to
         * a container with gtk_widget_set_parent(), to avoid mapping
         * children unnecessary before immediately unmapping them. However
         * it will be reset to its default state of %TRUE when the widget
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
         * @param is_visible if %TRUE, @widget should be mapped along with its parent.
         */
        set_child_visible(is_visible: boolean): void;
        /**
         * Sets the widget’s clip.  This must not be used directly,
         * but from within a widget’s size_allocate method.
         * It must be called after gtk_widget_set_allocation() (or after chaining up
         * to the parent class), because that function resets the clip.
         *
         * The clip set should be the area that `widget` draws on. If `widget` is a
         * #GtkContainer, the area must contain all children's clips.
         *
         * If this function is not called by `widget` during a ::size-allocate handler,
         * the clip will be set to `widget'`s allocation.
         * @param clip a pointer to a #GtkAllocation to copy from
         */
        set_clip(clip: Gtk.Allocation): void;
        /**
         * Sets a widgets composite name. The widget must be
         * a composite child of its parent; see gtk_widget_push_composite_child().
         * @param name the name to set
         */
        set_composite_name(name: string): void;
        /**
         * Enables or disables a #GdkDevice to interact with `widget`
         * and all its children.
         *
         * It does so by descending through the #GdkWindow hierarchy
         * and enabling the same mask that is has for core events
         * (i.e. the one that gdk_window_get_events() returns).
         * @param device a #GdkDevice
         * @param enabled whether to enable the device
         */
        set_device_enabled(device: Gdk.Device, enabled: boolean): void;
        /**
         * Sets the device event mask (see #GdkEventMask) for a widget. The event
         * mask determines which events a widget will receive from `device`. Keep
         * in mind that different widgets have different default event masks, and by
         * changing the event mask you may disrupt a widget’s functionality,
         * so be careful. This function must be called while a widget is
         * unrealized. Consider gtk_widget_add_device_events() for widgets that are
         * already realized, or if you want to preserve the existing event
         * mask. This function can’t be used with windowless widgets (which return
         * %FALSE from gtk_widget_get_has_window());
         * to get events on those widgets, place them inside a #GtkEventBox
         * and receive events on the event box.
         * @param device a #GdkDevice
         * @param events event mask
         */
        set_device_events(device: Gdk.Device, events: Gdk.EventMask): void;
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
         * If the direction is set to %GTK_TEXT_DIR_NONE, then the value
         * set by gtk_widget_set_default_direction() will be used.
         * @param dir the new direction
         */
        set_direction(dir: Gtk.TextDirection): void;
        // Conflicted with Gtk.MenuButton.set_direction
        set_direction(...args: never[]): any;
        /**
         * Widgets are double buffered by default; you can use this function
         * to turn off the buffering. “Double buffered” simply means that
         * gdk_window_begin_draw_frame() and gdk_window_end_draw_frame() are called
         * automatically around expose events sent to the
         * widget. gdk_window_begin_draw_frame() diverts all drawing to a widget's
         * window to an offscreen buffer, and gdk_window_end_draw_frame() draws the
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
         * gdk_window_begin_draw_frame()).
         *
         * In 3.10 GTK and GDK have been restructured for translucent drawing. Since
         * then expose events for double-buffered widgets are culled into a single
         * event to the toplevel GDK window. If you now unset double buffering, you
         * will cause a separate rendering pass for every widget. This will likely
         * cause rendering problems - in particular related to stacking - and usually
         * increases rendering times significantly.
         * @param double_buffered %TRUE to double-buffer a widget
         */
        set_double_buffered(double_buffered: boolean): void;
        /**
         * Sets the event mask (see #GdkEventMask) for a widget. The event
         * mask determines which events a widget will receive. Keep in mind
         * that different widgets have different default event masks, and by
         * changing the event mask you may disrupt a widget’s functionality,
         * so be careful. This function must be called while a widget is
         * unrealized. Consider gtk_widget_add_events() for widgets that are
         * already realized, or if you want to preserve the existing event
         * mask. This function can’t be used with widgets that have no window.
         * (See gtk_widget_get_has_window()).  To get events on those widgets,
         * place them inside a #GtkEventBox and receive events on the event
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
         * @param font_map a #PangoFontMap, or %NULL to unset any previously     set font map
         */
        set_font_map(font_map?: Pango.FontMap | null): void;
        /**
         * Sets the #cairo_font_options_t used for Pango rendering in this widget.
         * When not set, the default font options for the #GdkScreen will be used.
         * @param options a #cairo_font_options_t, or %NULL to unset any   previously set default font options.
         */
        set_font_options(options?: cairo.FontOptions | null): void;
        /**
         * Sets the horizontal alignment of `widget`.
         * See the #GtkWidget:halign property.
         * @param align the horizontal alignment
         */
        set_halign(align: Gtk.Align): void;
        /**
         * Sets the has-tooltip property on `widget` to `has_tooltip`.  See
         * #GtkWidget:has-tooltip for more information.
         * @param has_tooltip whether or not @widget has a tooltip.
         */
        set_has_tooltip(has_tooltip: boolean): void;
        /**
         * Specifies whether `widget` has a #GdkWindow of its own. Note that
         * all realized widgets have a non-%NULL “window” pointer
         * (gtk_widget_get_window() never returns a %NULL window when a widget
         * is realized), but for many of them it’s actually the #GdkWindow of
         * one of its parent widgets. Widgets that do not create a %window for
         * themselves in #GtkWidget::realize must announce this by
         * calling this function with `has_window` = %FALSE.
         *
         * This function should only be called by widget implementations,
         * and they should call it in their init() function.
         * @param has_window whether or not @widget has a window.
         */
        set_has_window(has_window: boolean): void;
        /**
         * Sets whether the widget would like any available extra horizontal
         * space. When a user resizes a #GtkWindow, widgets with expand=TRUE
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
         * its current children and state, call gtk_widget_compute_expand(). A
         * container can decide how the expandability of children affects the
         * expansion of the container by overriding the compute_expand virtual
         * method on #GtkWidget.).
         *
         * Setting hexpand explicitly with this function will override the
         * automatic expand behavior.
         *
         * This function forces the widget to expand or not to expand,
         * regardless of children.  The override occurs because
         * gtk_widget_set_hexpand() sets the hexpand-set property (see
         * gtk_widget_set_hexpand_set()) which causes the widget’s hexpand
         * value to be used, rather than looking at children and widget state.
         * @param expand whether to expand
         */
        set_hexpand(expand: boolean): void;
        /**
         * Sets whether the hexpand flag (see gtk_widget_get_hexpand()) will
         * be used.
         *
         * The hexpand-set property will be set automatically when you call
         * gtk_widget_set_hexpand() to set hexpand, so the most likely
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
         * @param mapped %TRUE to mark the widget as mapped
         */
        set_mapped(mapped: boolean): void;
        /**
         * Sets the bottom margin of `widget`.
         * See the #GtkWidget:margin-bottom property.
         * @param margin the bottom margin
         */
        set_margin_bottom(margin: number): void;
        /**
         * Sets the end margin of `widget`.
         * See the #GtkWidget:margin-end property.
         * @param margin the end margin
         */
        set_margin_end(margin: number): void;
        /**
         * Sets the left margin of `widget`.
         * See the #GtkWidget:margin-left property.
         * @param margin the left margin
         */
        set_margin_left(margin: number): void;
        /**
         * Sets the right margin of `widget`.
         * See the #GtkWidget:margin-right property.
         * @param margin the right margin
         */
        set_margin_right(margin: number): void;
        /**
         * Sets the start margin of `widget`.
         * See the #GtkWidget:margin-start property.
         * @param margin the start margin
         */
        set_margin_start(margin: number): void;
        /**
         * Sets the top margin of `widget`.
         * See the #GtkWidget:margin-top property.
         * @param margin the top margin
         */
        set_margin_top(margin: number): void;
        /**
         * Widgets can be named, which allows you to refer to them from a
         * CSS file. You can apply a style to widgets with a particular name
         * in the CSS file. See the documentation for the CSS syntax (on the
         * same page as the docs for #GtkStyleContext).
         *
         * Note that the CSS syntax has certain special characters to delimit
         * and represent elements in a selector (period, #, >, *...), so using
         * these will make your widget impossible to match by name. Any combination
         * of alphanumeric symbols, dashes and underscores will suffice.
         * @param name name for the widget
         */
        set_name(name: string): void;
        /**
         * Sets the #GtkWidget:no-show-all property, which determines whether
         * calls to gtk_widget_show_all() will affect this widget.
         *
         * This is mostly for use in constructing widget hierarchies with externally
         * controlled visibility, see #GtkUIManager.
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
         * running. See gtk_widget_is_composited(). On Windows it should work
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
         * #GtkContainer.
         * Sets the container as the parent of `widget,` and takes care of
         * some details such as updating the state and style of the child
         * to reflect its new location. The opposite function is
         * gtk_widget_unparent().
         * @param parent parent container
         */
        set_parent(parent: Gtk.Widget): void;
        /**
         * Sets a non default parent window for `widget`.
         *
         * For #GtkWindow classes, setting a `parent_window` effects whether
         * the window is a toplevel window or can be embedded into other
         * widgets.
         *
         * For #GtkWindow classes, this needs to be called before the
         * window is realized.
         * @param parent_window the new parent window.
         */
        set_parent_window(parent_window: Gdk.Window): void;
        /**
         * Marks the widget as being realized. This function must only be
         * called after all #GdkWindows for the `widget` have been created
         * and registered.
         *
         * This function should only ever be called in a derived widget's
         * “realize” or “unrealize” implementation.
         * @param realized %TRUE to mark the widget as realized
         */
        set_realized(realized: boolean): void;
        /**
         * Specifies whether `widget` will be treated as the default widget
         * within its toplevel when it has the focus, even if another widget
         * is the default.
         *
         * See gtk_widget_grab_default() for details about the meaning of
         * “default”.
         * @param receives_default whether or not @widget can be a default widget.
         */
        set_receives_default(receives_default: boolean): void;
        /**
         * Sets whether the entire widget is queued for drawing when its size
         * allocation changes. By default, this setting is %TRUE and
         * the entire widget is redrawn on every size change. If your widget
         * leaves the upper left unchanged when made bigger, turning this
         * setting off will improve performance.
         *
         * Note that for widgets where gtk_widget_get_has_window() is %FALSE
         * setting this flag to %FALSE turns off all allocation on resizing:
         * the widget will not even redraw if its position changes; this is to
         * allow containers that don’t draw anything to avoid excess
         * invalidations. If you set this flag on a widget with no window that
         * does draw on `widget->`window, you are
         * responsible for invalidating both the old and new allocation of the
         * widget when the widget is moved and responsible for invalidating
         * regions newly when the widget increases size.
         * @param redraw_on_allocate if %TRUE, the entire widget will be redrawn   when it is allocated to a new size. Otherwise, only the   new portion of the widget will be redrawn.
         */
        set_redraw_on_allocate(redraw_on_allocate: boolean): void;
        /**
         * Sets the sensitivity of a widget. A widget is sensitive if the user
         * can interact with it. Insensitive widgets are “grayed out” and the
         * user can’t interact with them. Insensitive widgets are known as
         * “inactive”, “disabled”, or “ghosted” in some other toolkits.
         * @param sensitive %TRUE to make the widget sensitive
         */
        set_sensitive(sensitive: boolean): void;
        /**
         * Sets the minimum size of a widget; that is, the widget’s size
         * request will be at least `width` by `height`. You can use this
         * function to force a widget to be larger than it normally would be.
         *
         * In most cases, gtk_window_set_default_size() is a better choice for
         * toplevel windows than this function; setting the default size will
         * still allow users to shrink the window. Setting the size request
         * will force them to leave the window at least as large as the size
         * request. When dealing with window sizes,
         * gtk_window_set_geometry_hints() can be a useful function as well.
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
         * #GtkWidget properties margin-left, margin-right, margin-top, and
         * margin-bottom, but it does include pretty much all other padding
         * or border properties set by any subclass of #GtkWidget.
         * @param width width @widget should request, or -1 to unset
         * @param height height @widget should request, or -1 to unset
         */
        set_size_request(width: number, height: number): void;
        /**
         * This function is for use in widget implementations. Sets the state
         * of a widget (insensitive, prelighted, etc.) Usually you should set
         * the state using wrapper functions such as gtk_widget_set_sensitive().
         * @param state new state for @widget
         */
        set_state(state: Gtk.StateType): void;
        /**
         * This function is for use in widget implementations. Turns on flag
         * values in the current widget state (insensitive, prelighted, etc.).
         *
         * This function accepts the values %GTK_STATE_FLAG_DIR_LTR and
         * %GTK_STATE_FLAG_DIR_RTL but ignores them. If you want to set the widget's
         * direction, use gtk_widget_set_direction().
         *
         * It is worth mentioning that any other state than %GTK_STATE_FLAG_INSENSITIVE,
         * will be propagated down to all non-internal children if `widget` is a
         * #GtkContainer, while %GTK_STATE_FLAG_INSENSITIVE itself will be propagated
         * down to all #GtkContainer children by different means than turning on the
         * state flag down the hierarchy, both gtk_widget_get_state_flags() and
         * gtk_widget_is_sensitive() will make use of these.
         * @param flags State flags to turn on
         * @param clear Whether to clear state before turning on @flags
         */
        set_state_flags(flags: Gtk.StateFlags, clear: boolean): void;
        /**
         * Used to set the #GtkStyle for a widget (`widget->`style). Since
         * GTK 3, this function does nothing, the passed in style is ignored.
         * @param style a #GtkStyle, or %NULL to remove the effect     of a previous call to gtk_widget_set_style() and go back to     the default style
         */
        set_style(style?: Gtk.Style | null): void;
        /**
         * Enables or disables multiple pointer awareness. If this setting is %TRUE,
         * `widget` will start receiving multiple, per device enter/leave events. Note
         * that if custom #GdkWindows are created in #GtkWidget::realize,
         * gdk_window_set_support_multidevice() will have to be called manually on them.
         * @param support_multidevice %TRUE to support input from multiple devices.
         */
        set_support_multidevice(support_multidevice: boolean): void;
        /**
         * Sets `markup` as the contents of the tooltip, which is marked up with
         *  the [Pango text markup language][PangoMarkupFormat].
         *
         * This function will take care of setting #GtkWidget:has-tooltip to %TRUE
         * and of the default handler for the #GtkWidget::query-tooltip signal.
         *
         * See also the #GtkWidget:tooltip-markup property and
         * gtk_tooltip_set_markup().
         * @param markup the contents of the tooltip for @widget, or %NULL
         */
        set_tooltip_markup(markup?: string | null): void;
        /**
         * Sets `text` as the contents of the tooltip. This function will take
         * care of setting #GtkWidget:has-tooltip to %TRUE and of the default
         * handler for the #GtkWidget::query-tooltip signal.
         *
         * See also the #GtkWidget:tooltip-text property and gtk_tooltip_set_text().
         * @param text the contents of the tooltip for @widget
         */
        set_tooltip_text(text?: string | null): void;
        /**
         * Replaces the default window used for displaying
         * tooltips with `custom_window`. GTK+ will take care of showing and
         * hiding `custom_window` at the right moment, to behave likewise as
         * the default tooltip window. If `custom_window` is %NULL, the default
         * tooltip window will be used.
         * @param custom_window a #GtkWindow, or %NULL
         */
        set_tooltip_window(custom_window?: Gtk.Window | null): void;
        /**
         * Sets the vertical alignment of `widget`.
         * See the #GtkWidget:valign property.
         * @param align the vertical alignment
         */
        set_valign(align: Gtk.Align): void;
        /**
         * Sets whether the widget would like any available extra vertical
         * space.
         *
         * See gtk_widget_set_hexpand() for more detail.
         * @param expand whether to expand
         */
        set_vexpand(expand: boolean): void;
        /**
         * Sets whether the vexpand flag (see gtk_widget_get_vexpand()) will
         * be used.
         *
         * See gtk_widget_set_hexpand_set() for more detail.
         * @param set value for vexpand-set property
         */
        set_vexpand_set(set: boolean): void;
        /**
         * Sets the visibility state of `widget`. Note that setting this to
         * %TRUE doesn’t mean the widget is actually viewable, see
         * gtk_widget_get_visible().
         *
         * This function simply calls gtk_widget_show() or gtk_widget_hide()
         * but is nicer to use when the visibility of the widget depends on
         * some condition.
         * @param visible whether the widget should be shown or not
         */
        set_visible(visible: boolean): void;
        /**
         * Sets the visual that should be used for by widget and its children for
         * creating #GdkWindows. The visual must be on the same #GdkScreen as
         * returned by gtk_widget_get_screen(), so handling the
         * #GtkWidget::screen-changed signal is necessary.
         *
         * Setting a new `visual` will not cause `widget` to recreate its windows,
         * so you should call this function before `widget` is realized.
         * @param visual visual to be used or %NULL to unset a previous one
         */
        set_visual(visual?: Gdk.Visual | null): void;
        /**
         * Sets a widget’s window. This function should only be used in a
         * widget’s #GtkWidget::realize implementation. The %window passed is
         * usually either new window created with gdk_window_new(), or the
         * window of its parent widget as returned by
         * gtk_widget_get_parent_window().
         *
         * Widgets must indicate whether they will create their own #GdkWindow
         * by calling gtk_widget_set_has_window(). This is usually done in the
         * widget’s init() function.
         *
         * Note that this function does not add any reference to `window`.
         * @param window a #GdkWindow
         */
        set_window(window: Gdk.Window): void;
        /**
         * Sets a shape for this widget’s GDK window. This allows for
         * transparent windows etc., see gdk_window_shape_combine_region()
         * for more information.
         * @param region shape to be added, or %NULL to remove an existing shape
         */
        shape_combine_region(region?: cairo.Region | null): void;
        /**
         * Flags a widget to be displayed. Any widget that isn’t shown will
         * not appear on the screen. If you want to show all the widgets in a
         * container, it’s easier to call gtk_widget_show_all() on the
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
         * (i.e. a #GtkWindow that has not yet been shown), enter the main
         * loop and wait for the window to actually be mapped. Be careful;
         * because the main loop is running, anything can happen during
         * this function.
         */
        show_now(): void;
        /**
         * This function is only used by #GtkContainer subclasses, to assign a size
         * and position to their child widgets.
         *
         * In this function, the allocation may be adjusted. It will be forced
         * to a 1x1 minimum size, and the adjust_size_allocation virtual
         * method on the child will be used to adjust the allocation. Standard
         * adjustments include removing the widget’s margins, and applying the
         * widget’s #GtkWidget:halign and #GtkWidget:valign properties.
         *
         * For baseline support in containers you need to use gtk_widget_size_allocate_with_baseline()
         * instead.
         * @param allocation position and size to be allocated to @widget
         */
        size_allocate(allocation: Gtk.Allocation): void;
        /**
         * This function is only used by #GtkContainer subclasses, to assign a size,
         * position and (optionally) baseline to their child widgets.
         *
         * In this function, the allocation and baseline may be adjusted. It
         * will be forced to a 1x1 minimum size, and the
         * adjust_size_allocation virtual and adjust_baseline_allocation
         * methods on the child will be used to adjust the allocation and
         * baseline. Standard adjustments include removing the widget's
         * margins, and applying the widget’s #GtkWidget:halign and
         * #GtkWidget:valign properties.
         *
         * If the child widget does not have a valign of %GTK_ALIGN_BASELINE the
         * baseline argument is ignored and -1 is used instead.
         * @param allocation position and size to be allocated to @widget
         * @param baseline The baseline of the child, or -1
         */
        size_allocate_with_baseline(allocation: Gtk.Allocation, baseline: number): void;
        /**
         * This function is typically used when implementing a #GtkContainer
         * subclass.  Obtains the preferred size of a widget. The container
         * uses this information to arrange its child widgets and decide what
         * size allocations to give them with gtk_widget_size_allocate().
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
         * This function attaches the widget’s #GtkStyle to the widget's
         * #GdkWindow. It is a replacement for
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
         * (finally #GtkWidget) would attach the style itself.
         */
        style_attach(): void;
        /**
         * Gets the value of a style property of `widget`.
         * @param property_name the name of a style property
         * @param value location to return the property value
         */
        style_get_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Reverts the effect of a previous call to gtk_widget_freeze_child_notify().
         * This causes all queued #GtkWidget::child-notify signals on `widget` to be
         * emitted.
         */
        thaw_child_notify(): void;
        /**
         * Translate coordinates relative to `src_widget’`s allocation to coordinates
         * relative to `dest_widget’`s allocations. In order to perform this
         * operation, both widgets must be realized, and must share a common
         * toplevel.
         * @param dest_widget a #GtkWidget
         * @param src_x X position relative to @src_widget
         * @param src_y Y position relative to @src_widget
         * @returns %FALSE if either widget was not realized, or there   was no common ancestor. In this case, nothing is stored in   *@dest_x and *@dest_y. Otherwise %TRUE.
         */
        translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [boolean, number, number];
        /**
         * Triggers a tooltip query on the display where the toplevel of `widget`
         * is located. See gtk_tooltip_trigger_tooltip_query() for more
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
         * on #GtkContainer, to dissociate a child from the container.
         */
        unparent(): void;
        /**
         * This function is only useful in widget implementations.
         * Causes a widget to be unrealized (frees all GDK resources
         * associated with the widget, such as `widget->`window).
         */
        unrealize(): void;
        /**
         * Unregisters a #GdkWindow from the widget that was previously set up with
         * gtk_widget_register_window(). You need to call this when the window is
         * no longer used by the widget, such as when you destroy it.
         * @param window a #GdkWindow
         */
        unregister_window(window: Gdk.Window): void;
        /**
         * This function is for use in widget implementations. Turns off flag
         * values for the current widget state (insensitive, prelighted, etc.).
         * See gtk_widget_set_state_flags().
         * @param flags State flags to turn off
         */
        unset_state_flags(flags: Gtk.StateFlags): void;
        vfunc_adjust_baseline_allocation(baseline: number): void;
        vfunc_adjust_baseline_request(minimum_baseline: number, natural_baseline: number): void;
        /**
         * Convert an initial size allocation assigned
         *   by a #GtkContainer using gtk_widget_size_allocate(), into an actual
         *   size allocation to be used by the widget. adjust_size_allocation
         *   adjusts to a child widget’s actual allocation
         *   from what a parent container computed for the
         *   child. The adjusted allocation must be entirely within the original
         *   allocation. In any custom implementation, chain up to the default
         *   #GtkWidget implementation of this method, which applies the margin
         *   and alignment properties of #GtkWidget. Chain up
         *   before performing your own adjustments so your
         *   own adjustments remove more allocation after the #GtkWidget base
         *   class has already removed margin and alignment. The natural size
         *   passed in should be adjusted in the same way as the allocated size,
         *   which allows adjustments to perform alignments or other changes
         *   based on natural size.
         * @param orientation
         * @param minimum_size
         * @param natural_size
         * @param allocated_pos
         * @param allocated_size
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
         *   #GtkSizeRequestMode virtual method implementations into a size request to
         *   be used by parent containers in laying out the widget.
         *   adjust_size_request adjusts from a child widget's
         *   original request to what a parent container should
         *   use for layout. The `for_size` argument will be -1 if the request should
         *   not be for a particular size in the opposing orientation, i.e. if the
         *   request is not height-for-width or width-for-height. If `for_size` is
         *   greater than -1, it is the proposed allocation in the opposing
         *   orientation that we need the request for. Implementations of
         *   adjust_size_request should chain up to the default implementation,
         *   which applies #GtkWidget’s margin properties and imposes any values
         *   from gtk_widget_set_size_request(). Chaining up should be last,
         *   after your subclass adjusts the request, so
         *   #GtkWidget can apply constraints and add the margin properly.
         * @param orientation
         * @param minimum_size
         * @param natural_size
         */
        vfunc_adjust_size_request(orientation: Gtk.Orientation, minimum_size: number, natural_size: number): void;
        /**
         * Signal will be emitted when a button
         *   (typically from a mouse) is pressed.
         * @param event
         */
        vfunc_button_press_event(event: Gdk.EventButton): boolean;
        /**
         * Signal will be emitted when a button
         *   (typically from a mouse) is released.
         * @param event
         */
        vfunc_button_release_event(event: Gdk.EventButton): boolean;
        /**
         * Determines whether an accelerator that activates the signal
         * identified by `signal_id` can currently be activated.
         * This is done by emitting the #GtkWidget::can-activate-accel
         * signal on `widget;` if the signal isn’t overridden by a
         * handler or in a derived widget, then the default check is
         * that the widget must be sensitive, and the widget and all
         * its ancestors mapped.
         * @param signal_id the ID of a signal installed on @widget
         */
        vfunc_can_activate_accel(signal_id: number): boolean;
        /**
         * Emits a #GtkWidget::child-notify signal for the
         * [child property][child-properties] `child_property`
         * on `widget`.
         *
         * This is the analogue of g_object_notify() for child properties.
         *
         * Also see gtk_container_child_notify().
         * @param child_property the name of a child property installed on the                  class of @widget’s parent
         */
        vfunc_child_notify(child_property: GObject.ParamSpec): void;
        /**
         * Signal emitted when the composited status of
         *   widgets screen changes. See gdk_screen_is_composited().
         */
        vfunc_composited_changed(): void;
        /**
         * Computes whether a container should give this
         *   widget extra space when possible.
         * @param hexpand_p
         * @param vexpand_p
         */
        vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void;
        /**
         * Signal will be emitted when the size, position or
         *   stacking of the widget’s window has changed.
         * @param event
         */
        vfunc_configure_event(event: Gdk.EventConfigure): boolean;
        /**
         * Signal emitted when a redirected window belonging to
         *   widget gets drawn into.
         * @param event
         */
        vfunc_damage_event(event: Gdk.EventExpose): boolean;
        /**
         * Signal emitted if a user requests that a toplevel
         *   window is closed.
         * @param event
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
         * be released; you should connect to the #GtkWidget::destroy signal
         * if you hold a reference to `widget` and you wish to remove it when
         * this function is called. It is not necessary to do so if you are
         * implementing a #GtkContainer, as you'll be able to use the
         * #GtkContainerClass.remove() virtual function for that.
         *
         * It's important to notice that gtk_widget_destroy() will only cause
         * the `widget` to be finalized if no additional references, acquired
         * using g_object_ref(), are held on it. In case additional references
         * are in place, the `widget` will be in an "inert" state after calling
         * this function; `widget` will still point to valid memory, allowing you
         * to release the references you hold, but you may not query the widget's
         * own state.
         *
         * You should typically call this function on top level widgets, and
         * rarely on child widgets.
         *
         * See also: gtk_container_remove()
         */
        vfunc_destroy(): void;
        /**
         * Signal is emitted when a #GdkWindow is destroyed.
         * @param event
         */
        vfunc_destroy_event(event: Gdk.EventAny): boolean;
        /**
         * Signal emitted when the text direction of a
         *   widget changes.
         * @param previous_direction
         */
        vfunc_direction_changed(previous_direction: Gtk.TextDirection): void;
        /**
         * Seldomly overidden.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_child_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * Signal emitted on the drag source when a drag is
         *   started.
         * @param context
         */
        vfunc_drag_begin(context: Gdk.DragContext): void;
        /**
         * Signal emitted on the drag source when a drag
         *   with the action %GDK_ACTION_MOVE is successfully completed.
         * @param context
         */
        vfunc_drag_data_delete(context: Gdk.DragContext): void;
        /**
         * Signal emitted on the drag source when the drop
         *   site requests the data which is dragged.
         * @param context
         * @param selection_data
         * @param info
         * @param time_
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
         */
        vfunc_drag_drop(context: Gdk.DragContext, x: number, y: number, time_: number): boolean;
        /**
         * Signal emitted on the drag source when a drag is
         *   finished.
         * @param context
         */
        vfunc_drag_end(context: Gdk.DragContext): void;
        /**
         * Signal emitted on the drag source when a drag has
         *   failed.
         * @param context
         * @param result
         */
        vfunc_drag_failed(context: Gdk.DragContext, result: Gtk.DragResult): boolean;
        /**
         * Signal emitted on the drop site when the cursor leaves
         *   the widget.
         * @param context
         * @param time_
         */
        vfunc_drag_leave(context: Gdk.DragContext, time_: number): void;
        /**
         * signal emitted on the drop site when the user moves
         *   the cursor over the widget during a drag.
         * @param context
         * @param x
         * @param y
         * @param time_
         */
        vfunc_drag_motion(context: Gdk.DragContext, x: number, y: number, time_: number): boolean;
        /**
         * Signal emitted when a widget is supposed to render itself.
         * @param cr
         */
        vfunc_draw(cr: cairo.Context): boolean;
        /**
         * Signal event will be emitted when the pointer
         *   enters the widget’s window.
         * @param event
         */
        vfunc_enter_notify_event(event: Gdk.EventCrossing): boolean;
        /**
         * Rarely-used function. This function is used to emit
         * the event signals on a widget (those signals should never
         * be emitted without using this function to do so).
         * If you want to synthesize an event though, don’t use this function;
         * instead, use gtk_main_do_event() so the event will behave as if
         * it were in the event queue. Don’t synthesize expose events; instead,
         * use gdk_window_invalidate_rect() to invalidate a region of the
         * window.
         * @param event a #GdkEvent
         */
        vfunc_event(event: Gdk.Event): boolean;
        vfunc_focus(direction: Gtk.DirectionType): boolean;
        /**
         * Signal emitted when the keyboard focus enters the
         * widget’s window.
         * @param event
         */
        vfunc_focus_in_event(event: Gdk.EventFocus): boolean;
        /**
         * Signal emitted when the keyboard focus leaves the
         * widget’s window.
         * @param event
         */
        vfunc_focus_out_event(event: Gdk.EventFocus): boolean;
        /**
         * Returns the accessible object that describes the widget to an
         * assistive technology.
         *
         * If accessibility support is not available, this #AtkObject
         * instance may be a no-op. Likewise, if no class-specific #AtkObject
         * implementation is available for the widget instance in question,
         * it will inherit an #AtkObject implementation from the first ancestor
         * class for which such an implementation is defined.
         *
         * The documentation of the
         * [ATK](http://developer.gnome.org/atk/stable/)
         * library contains more information about accessible objects and their uses.
         */
        vfunc_get_accessible(): Atk.Object;
        /**
         * Retrieves a widget’s initial minimum and natural height.
         *
         * This call is specific to width-for-height requests.
         *
         * The returned request will be modified by the
         * GtkWidgetClass::adjust_size_request virtual method and by any
         * #GtkSizeGroups that have been applied. That is, the returned request
         * is the one that should be used for layout, not necessarily the one
         * returned by the widget itself.
         */
        vfunc_get_preferred_height(): [number, number];
        /**
         * Retrieves a widget’s minimum and natural height and the corresponding baselines if it would be given
         * the specified `width,` or the default height if `width` is -1. The baselines may be -1 which means
         * that no baseline is requested for this widget.
         *
         * The returned request will be modified by the
         * GtkWidgetClass::adjust_size_request and GtkWidgetClass::adjust_baseline_request virtual methods
         * and by any #GtkSizeGroups that have been applied. That is, the returned request
         * is the one that should be used for layout, not necessarily the one
         * returned by the widget itself.
         * @param width the width which is available for allocation, or -1 if none
         */
        vfunc_get_preferred_height_and_baseline_for_width(width: number): [number, number, number, number];
        /**
         * Retrieves a widget’s minimum and natural height if it would be given
         * the specified `width`.
         *
         * The returned request will be modified by the
         * GtkWidgetClass::adjust_size_request virtual method and by any
         * #GtkSizeGroups that have been applied. That is, the returned request
         * is the one that should be used for layout, not necessarily the one
         * returned by the widget itself.
         * @param width the width which is available for allocation
         */
        vfunc_get_preferred_height_for_width(width: number): [number, number];
        /**
         * Retrieves a widget’s initial minimum and natural width.
         *
         * This call is specific to height-for-width requests.
         *
         * The returned request will be modified by the
         * GtkWidgetClass::adjust_size_request virtual method and by any
         * #GtkSizeGroups that have been applied. That is, the returned request
         * is the one that should be used for layout, not necessarily the one
         * returned by the widget itself.
         */
        vfunc_get_preferred_width(): [number, number];
        /**
         * Retrieves a widget’s minimum and natural width if it would be given
         * the specified `height`.
         *
         * The returned request will be modified by the
         * GtkWidgetClass::adjust_size_request virtual method and by any
         * #GtkSizeGroups that have been applied. That is, the returned request
         * is the one that should be used for layout, not necessarily the one
         * returned by the widget itself.
         * @param height the height which is available for allocation
         */
        vfunc_get_preferred_width_for_height(height: number): [number, number];
        /**
         * Gets whether the widget prefers a height-for-width layout
         * or a width-for-height layout.
         *
         * #GtkBin widgets generally propagate the preference of
         * their child, container widgets need to request something either in
         * context of their children or in context of their allocation
         * capabilities.
         */
        vfunc_get_request_mode(): Gtk.SizeRequestMode;
        /**
         * Signal emitted when a pointer or keyboard grab
         *   on a window belonging to widget gets broken.
         * @param event
         */
        vfunc_grab_broken_event(event: Gdk.EventGrabBroken): boolean;
        /**
         * Causes `widget` to have the keyboard focus for the #GtkWindow it's
         * inside. `widget` must be a focusable widget, such as a #GtkEntry;
         * something like #GtkFrame won’t work.
         *
         * More precisely, it must have the %GTK_CAN_FOCUS flag set. Use
         * gtk_widget_set_can_focus() to modify that flag.
         *
         * The widget also needs to be realized and mapped. This is indicated by the
         * related signals. Grabbing the focus immediately after creating the widget
         * will likely fail and cause critical warnings.
         */
        vfunc_grab_focus(): void;
        /**
         * Signal emitted when a widget becomes shadowed by a
         *   GTK+ grab (not a pointer or keyboard grab) on another widget, or
         *   when it becomes unshadowed due to a grab being removed.
         * @param was_grabbed
         */
        vfunc_grab_notify(was_grabbed: boolean): void;
        /**
         * Reverses the effects of gtk_widget_show(), causing the widget to be
         * hidden (invisible to the user).
         */
        vfunc_hide(): void;
        /**
         * Signal emitted when the anchored state of a
         *   widget changes.
         * @param previous_toplevel
         */
        vfunc_hierarchy_changed(previous_toplevel: Gtk.Widget): void;
        /**
         * Signal emitted when a key is pressed.
         * @param event
         */
        vfunc_key_press_event(event: Gdk.EventKey): boolean;
        /**
         * Signal is emitted when a key is released.
         * @param event
         */
        vfunc_key_release_event(event: Gdk.EventKey): boolean;
        /**
         * This function should be called whenever keyboard navigation within
         * a single widget hits a boundary. The function emits the
         * #GtkWidget::keynav-failed signal on the widget and its return
         * value should be interpreted in a way similar to the return value of
         * gtk_widget_child_focus():
         *
         * When %TRUE is returned, stay in the widget, the failed keyboard
         * navigation is OK and/or there is nowhere we can/should move the
         * focus to.
         *
         * When %FALSE is returned, the caller should continue with keyboard
         * navigation outside the widget, e.g. by calling
         * gtk_widget_child_focus() on the widget’s toplevel.
         *
         * The default ::keynav-failed handler returns %FALSE for
         * %GTK_DIR_TAB_FORWARD and %GTK_DIR_TAB_BACKWARD. For the other
         * values of #GtkDirectionType it returns %TRUE.
         *
         * Whenever the default handler returns %TRUE, it also calls
         * gtk_widget_error_bell() to notify the user of the failed keyboard
         * navigation.
         *
         * A use case for providing an own implementation of ::keynav-failed
         * (either by connecting to it or by overriding it) would be a row of
         * #GtkEntry widgets where the user should be able to navigate the
         * entire row with the cursor keys, as e.g. known from user interfaces
         * that require entering license keys.
         * @param direction direction of focus movement
         */
        vfunc_keynav_failed(direction: Gtk.DirectionType): boolean;
        /**
         * Will be emitted when the pointer leaves the
         *   widget’s window.
         * @param event
         */
        vfunc_leave_notify_event(event: Gdk.EventCrossing): boolean;
        /**
         * This function is only for use in widget implementations. Causes
         * a widget to be mapped if it isn’t already.
         */
        vfunc_map(): void;
        /**
         * Signal emitted when the widget’s window is mapped.
         * @param event
         */
        vfunc_map_event(event: Gdk.EventAny): boolean;
        /**
         * Emits the #GtkWidget::mnemonic-activate signal.
         * @param group_cycling %TRUE if there are other widgets with the same mnemonic
         */
        vfunc_mnemonic_activate(group_cycling: boolean): boolean;
        /**
         * Signal emitted when the pointer moves over
         *   the widget’s #GdkWindow.
         * @param event
         */
        vfunc_motion_notify_event(event: Gdk.EventMotion): boolean;
        /**
         * Signal emitted when a change of focus is requested
         * @param direction
         */
        vfunc_move_focus(direction: Gtk.DirectionType): void;
        /**
         * Signal emitted when a new parent has been set on a
         *   widget.
         * @param previous_parent
         */
        vfunc_parent_set(previous_parent: Gtk.Widget): void;
        /**
         * Signal emitted whenever a widget should pop up a
         *   context menu.
         */
        vfunc_popup_menu(): boolean;
        /**
         * Signal will be emitted when a property on
         *   the widget’s window has been changed or deleted.
         * @param event
         */
        vfunc_property_notify_event(event: Gdk.EventProperty): boolean;
        vfunc_proximity_in_event(event: Gdk.EventProximity): boolean;
        vfunc_proximity_out_event(event: Gdk.EventProximity): boolean;
        /**
         * Signal emitted when “has-tooltip” is %TRUE and the
         *   hover timeout has expired with the cursor hovering “above”
         *   widget; or emitted when widget got focus in keyboard mode.
         * @param x
         * @param y
         * @param keyboard_tooltip
         * @param tooltip
         */
        vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean;
        /**
         * Invalidates the area of `widget` defined by `region` by calling
         * gdk_window_invalidate_region() on the widget’s window and all its
         * child windows. Once the main loop becomes idle (after the current
         * batch of events has been processed, roughly), the window will
         * receive expose events for the union of all regions that have been
         * invalidated.
         *
         * Normally you would only use this function in widget
         * implementations. You might also use it to schedule a redraw of a
         * #GtkDrawingArea or some portion thereof.
         * @param region region to draw
         */
        vfunc_queue_draw_region(region: cairo.Region): void;
        /**
         * Creates the GDK (windowing system) resources associated with a
         * widget.  For example, `widget->`window will be created when a widget
         * is realized.  Normally realization happens implicitly; if you show
         * a widget and all its parent containers, then the widget will be
         * realized and mapped automatically.
         *
         * Realizing a widget requires all
         * the widget’s parent widgets to be realized; calling
         * gtk_widget_realize() realizes the widget’s parents in addition to
         * `widget` itself. If a widget is not yet inside a toplevel window
         * when you realize it, bad things will happen.
         *
         * This function is primarily used in widget implementations, and
         * isn’t very useful otherwise. Many times when you think you might
         * need it, a better approach is to connect to a signal that will be
         * called after the widget is realized automatically, such as
         * #GtkWidget::draw. Or simply g_signal_connect () to the
         * #GtkWidget::realize signal.
         */
        vfunc_realize(): void;
        /**
         * Signal emitted when the screen of a widget has
         *   changed.
         * @param previous_screen
         */
        vfunc_screen_changed(previous_screen: Gdk.Screen): void;
        /**
         * Signal emitted when a button in the 4 to 7 range is
         *   pressed.
         * @param event
         */
        vfunc_scroll_event(event: Gdk.EventScroll): boolean;
        /**
         * Signal will be emitted when the the
         *   widget’s window has lost ownership of a selection.
         * @param event
         */
        vfunc_selection_clear_event(event: Gdk.EventSelection): boolean;
        vfunc_selection_get(selection_data: Gtk.SelectionData, info: number, time_: number): void;
        vfunc_selection_notify_event(event: Gdk.EventSelection): boolean;
        vfunc_selection_received(selection_data: Gtk.SelectionData, time_: number): void;
        /**
         * Signal will be emitted when another
         *   client requests ownership of the selection owned by the widget's
         *   window.
         * @param event
         */
        vfunc_selection_request_event(event: Gdk.EventSelection): boolean;
        /**
         * Flags a widget to be displayed. Any widget that isn’t shown will
         * not appear on the screen. If you want to show all the widgets in a
         * container, it’s easier to call gtk_widget_show_all() on the
         * container, instead of individually showing the widgets.
         *
         * Remember that you have to show the containers containing a widget,
         * in addition to the widget itself, before it will appear onscreen.
         *
         * When a toplevel container is shown, it is immediately realized and
         * mapped; other shown widgets are realized and mapped when their
         * toplevel container is realized and mapped.
         */
        vfunc_show(): void;
        /**
         * Recursively shows a widget, and any child widgets (if the widget is
         * a container).
         */
        vfunc_show_all(): void;
        vfunc_show_help(help_type: Gtk.WidgetHelpType): boolean;
        /**
         * This function is only used by #GtkContainer subclasses, to assign a size
         * and position to their child widgets.
         *
         * In this function, the allocation may be adjusted. It will be forced
         * to a 1x1 minimum size, and the adjust_size_allocation virtual
         * method on the child will be used to adjust the allocation. Standard
         * adjustments include removing the widget’s margins, and applying the
         * widget’s #GtkWidget:halign and #GtkWidget:valign properties.
         *
         * For baseline support in containers you need to use gtk_widget_size_allocate_with_baseline()
         * instead.
         * @param allocation position and size to be allocated to @widget
         */
        vfunc_size_allocate(allocation: Gtk.Allocation): void;
        /**
         * Signal emitted when the widget state
         *   changes. Deprecated: 3.0
         * @param previous_state
         */
        vfunc_state_changed(previous_state: Gtk.StateType): void;
        /**
         * Signal emitted when the widget state changes,
         *   see gtk_widget_get_state_flags().
         * @param previous_state_flags
         */
        vfunc_state_flags_changed(previous_state_flags: Gtk.StateFlags): void;
        /**
         * Signal emitted when a new style has been set on a
         * widget. Deprecated: 3.0
         * @param previous_style
         */
        vfunc_style_set(previous_style: Gtk.Style): void;
        /**
         * Signal emitted when the GtkStyleContext of a widget
         *   is changed.
         */
        vfunc_style_updated(): void;
        /**
         * Signal emitted when a touch event happens
         * @param event
         */
        vfunc_touch_event(event: Gdk.EventTouch): boolean;
        /**
         * This function is only for use in widget implementations. Causes
         * a widget to be unmapped if it’s currently mapped.
         */
        vfunc_unmap(): void;
        /**
         * Signal will be emitted when the widget’s window is
         *   unmapped.
         * @param event
         */
        vfunc_unmap_event(event: Gdk.EventAny): boolean;
        /**
         * This function is only useful in widget implementations.
         * Causes a widget to be unrealized (frees all GDK resources
         * associated with the widget, such as `widget->`window).
         */
        vfunc_unrealize(): void;
        /**
         * Signal emitted when the widget’s window is
         *   obscured or unobscured.
         * @param event
         */
        vfunc_visibility_notify_event(event: Gdk.EventVisibility): boolean;
        /**
         * Signal emitted when the state of the toplevel
         *   window associated to the widget changes.
         * @param event
         */
        vfunc_window_state_event(event: Gdk.EventWindowState): boolean;
    }

    module StyleSchemeChooserWidget {
        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Bin.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                GtkSource.StyleSchemeChooser.ConstructorProps {
            tepl_style_scheme_id: string;
            teplStyleSchemeId: string;
        }
    }

    class StyleSchemeChooserWidget
        extends Gtk.Bin
        implements Atk.ImplementorIface, Gtk.Buildable, GtkSource.StyleSchemeChooser
    {
        static $gtype: GObject.GType<StyleSchemeChooserWidget>;

        // Properties

        /**
         * The #GtkSourceStyleSchemeChooser:style-scheme ID, as a string. This
         * property is useful for binding it to a #GSettings key.
         *
         * When the #GtkSourceStyleSchemeChooser:style-scheme is %NULL, this
         * property contains the empty string.
         */
        get tepl_style_scheme_id(): string;
        set tepl_style_scheme_id(val: string);
        /**
         * The #GtkSourceStyleSchemeChooser:style-scheme ID, as a string. This
         * property is useful for binding it to a #GSettings key.
         *
         * When the #GtkSourceStyleSchemeChooser:style-scheme is %NULL, this
         * property contains the empty string.
         */
        get teplStyleSchemeId(): string;
        set teplStyleSchemeId(val: string);

        // Constructors

        constructor(properties?: Partial<StyleSchemeChooserWidget.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): StyleSchemeChooserWidget;

        // Methods

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

        // Inherited properties
        /**
         * The :style-scheme property contains the currently selected style
         * scheme. The property can be set to change
         * the current selection programmatically.
         */
        get style_scheme(): GtkSource.StyleScheme;
        set style_scheme(val: GtkSource.StyleScheme);
        /**
         * The :style-scheme property contains the currently selected style
         * scheme. The property can be set to change
         * the current selection programmatically.
         */
        get styleScheme(): GtkSource.StyleScheme;
        set styleScheme(val: GtkSource.StyleScheme);

        // Inherited methods
        /**
         * Gets the currently-selected scheme.
         * @returns the currently-selected scheme.
         */
        get_style_scheme(): GtkSource.StyleScheme;
        /**
         * Sets the scheme.
         * @param scheme a #GtkSourceStyleScheme
         */
        set_style_scheme(scheme: GtkSource.StyleScheme): void;
        /**
         * Gets the currently-selected scheme.
         */
        vfunc_get_style_scheme(): GtkSource.StyleScheme;
        /**
         * Sets the scheme.
         * @param scheme a #GtkSourceStyleScheme
         */
        vfunc_set_style_scheme(scheme: GtkSource.StyleScheme): void;
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
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
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module Tab {
        // Signal callback interfaces

        interface CloseRequest {
            (): void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Grid.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.Orientable.ConstructorProps,
                TabGroup.ConstructorProps {
            view: View;
        }
    }

    class Tab extends Gtk.Grid implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable, TabGroup {
        static $gtype: GObject.GType<Tab>;

        // Properties

        /**
         * The #TeplView contained in the tab. When this property is set, the
         * ::pack_view virtual function is called.
         */
        get view(): View;

        // Constructors

        constructor(properties?: Partial<Tab.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Tab;

        static new_with_view(view: View): Tab;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'close-request', callback: (_source: this) => void): number;
        connect_after(signal: 'close-request', callback: (_source: this) => void): number;
        emit(signal: 'close-request'): void;

        // Virtual methods

        /**
         * For the #TeplTab::close-request signal.
         */
        vfunc_close_request(): void;
        /**
         * Virtual function pointer to add a #TeplGotoLineBar in
         *   the #TeplTab container. By default the #TeplGotoLineBar is added at the
         *   bottom.
         * @param goto_line_bar
         */
        vfunc_pack_goto_line_bar(goto_line_bar: GotoLineBar): void;
        /**
         * Virtual function pointer to add a #GtkInfoBar in the #TeplTab
         *   container. By default the #GtkInfoBar is inserted just above the
         *   #GtkScrolledWindow containing the #TeplView.
         * @param info_bar
         */
        vfunc_pack_info_bar(info_bar: Gtk.InfoBar): void;
        /**
         * Virtual function pointer to add the #TeplView in the #TeplTab
         *   container. Called only once at object construction time, when the
         *   #TeplTab:view property is set. By default the #TeplView is added to a
         *   #GtkScrolledWindow and the #GtkScrolledWindow is added to the #TeplTab with
         *   gtk_container_add().
         * @param view
         */
        vfunc_pack_view(view: View): void;

        // Methods

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

        // Inherited properties
        /**
         * The orientation of the orientable.
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);
        /**
         * The #TeplBuffer of the active tab.
         */
        get active_buffer(): Buffer;
        /**
         * The #TeplBuffer of the active tab.
         */
        get activeBuffer(): Buffer;
        /**
         * The #TeplTab currently shown.
         */
        get active_tab(): Tab;
        set active_tab(val: Tab);
        /**
         * The #TeplTab currently shown.
         */
        get activeTab(): Tab;
        set activeTab(val: Tab);
        /**
         * The #TeplView of the active tab.
         */
        get active_view(): View;
        /**
         * The #TeplView of the active tab.
         */
        get activeView(): View;

        // Inherited methods
        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the @orientable.
         */
        get_orientation(): Gtk.Orientation;
        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation): void;
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
        /**
         * Virtual function pointer for tepl_tab_group_append_tab(),
         *   without the `jump_to` parameter. The default implementation prints a warning
         *   about the operation not being supported.
         * @param tab
         */
        vfunc_append_tab_vfunc(tab: Tab): void;
        /**
         * Virtual function pointer for tepl_tab_group_get_active_tab().
         *   By default, %NULL is returned.
         */
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
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
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module TabLabel {
        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Grid.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.Orientable.ConstructorProps {
            tab: Tab;
        }
    }

    class TabLabel extends Gtk.Grid implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<TabLabel>;

        // Properties

        /**
         * The associated #TeplTab. #TeplTabLabel has a weak reference to the
         * #TeplTab.
         */
        get tab(): Tab;

        // Constructors

        constructor(properties?: Partial<TabLabel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](tab: Tab): TabLabel;
        // Conflicted with Gtk.Grid.new

        static ['new'](...args: never[]): any;

        // Virtual methods

        /**
         * Virtual function pointer to create the tooltip markup
         *   string. %NULL must be returned if no tooltip is wanted. The result is
         *   intended to be used as an argument to gtk_widget_set_tooltip_markup(). The
         *   default implementation returns the full #TeplFile:location if non-%NULL, or
         *   %NULL otherwise. The return value must be freed with g_free() when no
         *   longer needed.
         */
        vfunc_get_tooltip_markup(): string;

        // Methods

        get_tab(): Tab | null;
        /**
         * Asks #TeplTabLabel to update its tooltip. The ::get_tooltip_markup virtual
         * function is called and the result is set with
         * gtk_widget_set_tooltip_markup().
         */
        update_tooltip(): void;

        // Inherited properties
        /**
         * The orientation of the orientable.
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        // Inherited methods
        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the @orientable.
         */
        get_orientation(): Gtk.Orientation;
        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation): void;
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
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
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module View {
        // Constructor properties interface

        interface ConstructorProps
            extends GtkSource.View.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.Scrollable.ConstructorProps {}
    }

    class View extends GtkSource.View implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {
        static $gtype: GObject.GType<View>;

        // Constructors

        constructor(properties?: Partial<View.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): View;

        static new_with_buffer(buffer: GtkSource.Buffer): View;

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

        // Inherited methods
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
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
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    type AbstractFactoryClass = typeof AbstractFactory;
    type ApplicationClass = typeof Application;
    abstract class ApplicationPrivate {
        static $gtype: GObject.GType<ApplicationPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ApplicationWindowClass = typeof ApplicationWindow;
    abstract class ApplicationWindowPrivate {
        static $gtype: GObject.GType<ApplicationWindowPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type BufferClass = typeof Buffer;
    /**
     * To implement the #TeplEncoding interface.
     *
     * Don't access the fields of this struct unless you are writing a class that
     * implements this interface.
     */
    class Encoding {
        static $gtype: GObject.GType<Encoding>;

        // Constructors

        _init(...args: any[]): void;

        // Methods

        /**
         * #TeplEncoding's are grouped into several categories, such as "Unicode" or
         * "Western".
         *
         * This function returns the category name of the #TeplEncoding, or %NULL if the
         * category is unknown.
         *
         * The returned string is localized (i.e., already translated).
         * @returns the category name of the #TeplEncoding, or %NULL.
         */
        get_category_name(): string | null;
        /**
         * Gets the name of the #TeplEncoding, such as "UTF-8".
         * @returns the name of the #TeplEncoding.
         */
        get_name(): string;
    }

    abstract class EncodingIconv {
        static $gtype: GObject.GType<EncodingIconv>;

        // Constructors

        _init(...args: any[]): void;

        // Static methods

        /**
         * Gets a list of all encodings known by #TeplEncodingIconv.
         */
        static get_all(): EncodingIconv[];
        /**
         * Gets the list of default candidate encodings to try when loading a file. See
         * gtk_source_file_loader_set_candidate_encodings().
         *
         * This function returns a different list depending on the current locale (i.e.
         * language, country and default encoding). The UTF-8 encoding and the current
         * locale encoding are guaranteed to be present in the returned list.
         *
         * Note that the returned list doesn't contain all encodings known by
         * #TeplEncodingIconv, it is a limited list that contains only the encodings
         * that have the most likelihood to fit for the current locale.
         */
        static get_default_candidates(): EncodingIconv[];

        // Methods

        /**
         * Returns whether `enc1` and `enc2` are equal. It returns %TRUE iff:
         * - Both `enc1` and `enc2` are %NULL;
         * - Or both `enc1` and `enc2` have a UTF-8 charset (see
         *   tepl_encoding_iconv_is_utf8());
         * - Or the charsets are equal according to g_ascii_strcasecmp() (because
         *   iconv-compatible charsets are case insensitive).
         * @param enc2 a #TeplEncodingIconv, or %NULL.
         * @returns whether @enc1 and @enc2 are equal.
         */
        equals(enc2?: EncodingIconv | null): boolean;
        free(): void;
        /**
         * Returns whether `enc` is a UTF-8 encoding.
         *
         * If `enc` was created with tepl_encoding_iconv_new_utf8(), the charset is
         * "UTF-8".  But iconv supports other variants: "UTF8", "utf-8" and "utf8". This
         * function returns %TRUE for all UTF-8 variants supported by iconv.
         * @returns whether @enc is a UTF-8 encoding.
         */
        is_utf8(): boolean;
        to_base_type(): Encoding;
        /**
         * Returns the encoding category name with the charset in parenthesis, for
         * example "Unicode (UTF-8)". If the category name is unknown, just the charset
         * is returned.
         *
         * The category name is localized (i.e., already translated).
         * @returns a string representation. Free with g_free() when no longer needed.
         */
        to_string(): string;
    }

    /**
     * The virtual function table of the #TeplEncoding interface.
     */
    class EncodingVtable {
        static $gtype: GObject.GType<EncodingVtable>;

        // Constructors

        _init(...args: any[]): void;
    }

    type FileClass = typeof File;
    type FileLoaderClass = typeof FileLoader;
    abstract class FileLoaderPrivate {
        static $gtype: GObject.GType<FileLoaderPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class FilePrivate {
        static $gtype: GObject.GType<FilePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type FileSaverClass = typeof FileSaver;
    abstract class FileSaverPrivate {
        static $gtype: GObject.GType<FileSaverPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type FoldRegionClass = typeof FoldRegion;
    type GotoLineBarClass = typeof GotoLineBar;
    abstract class GotoLineBarPrivate {
        static $gtype: GObject.GType<GotoLineBarPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type GutterRendererFoldsClass = typeof GutterRendererFolds;
    type InfoBarClass = typeof InfoBar;
    abstract class InfoBarPrivate {
        static $gtype: GObject.GType<InfoBarPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type LanguageChooserDialogClass = typeof LanguageChooserDialog;
    abstract class LanguageChooserDialogPrivate {
        static $gtype: GObject.GType<LanguageChooserDialogPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type LanguageChooserInterface = typeof LanguageChooser;
    type LanguageChooserWidgetClass = typeof LanguageChooserWidget;
    abstract class LanguageChooserWidgetPrivate {
        static $gtype: GObject.GType<LanguageChooserWidgetPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type LineColumnIndicatorClass = typeof LineColumnIndicator;
    abstract class LineColumnIndicatorPrivate {
        static $gtype: GObject.GType<LineColumnIndicatorPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type MetadataClass = typeof Metadata;
    type MetadataManagerClass = typeof MetadataManager;
    abstract class MetadataManagerPrivate {
        static $gtype: GObject.GType<MetadataManagerPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class MetadataPrivate {
        static $gtype: GObject.GType<MetadataPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type NotebookClass = typeof Notebook;
    abstract class NotebookPrivate {
        static $gtype: GObject.GType<NotebookPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type OverwriteIndicatorClass = typeof OverwriteIndicator;
    abstract class OverwriteIndicatorPrivate {
        static $gtype: GObject.GType<OverwriteIndicatorPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type Panel1Class = typeof Panel1;
    abstract class Panel1Private {
        static $gtype: GObject.GType<Panel1Private>;

        // Constructors

        _init(...args: any[]): void;
    }

    type PanelContainerClass = typeof PanelContainer;
    abstract class PanelContainerPrivate {
        static $gtype: GObject.GType<PanelContainerPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type PanelInterface = typeof Panel;
    type PanelItemInterface = typeof PanelItem;
    type PanelSwitcherMenuClass = typeof PanelSwitcherMenu;
    abstract class PanelSwitcherMenuPrivate {
        static $gtype: GObject.GType<PanelSwitcherMenuPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type PrefsDialogClass = typeof PrefsDialog;
    abstract class PrefsDialogPrivate {
        static $gtype: GObject.GType<PrefsDialogPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ProgressInfoBarClass = typeof ProgressInfoBar;
    abstract class ProgressInfoBarPrivate {
        static $gtype: GObject.GType<ProgressInfoBarPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type SettingsClass = typeof Settings;
    abstract class SettingsPrivate {
        static $gtype: GObject.GType<SettingsPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class SignalGroup {
        static $gtype: GObject.GType<SignalGroup>;

        // Constructors

        _init(...args: any[]): void;
    }

    type SpaceDrawerPrefsClass = typeof SpaceDrawerPrefs;
    abstract class SpaceDrawerPrefsPrivate {
        static $gtype: GObject.GType<SpaceDrawerPrefsPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type StatusMenuButtonClass = typeof StatusMenuButton;
    abstract class StatusMenuButtonPrivate {
        static $gtype: GObject.GType<StatusMenuButtonPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type StyleSchemeChooserWidgetClass = typeof StyleSchemeChooserWidget;
    abstract class StyleSchemeChooserWidgetPrivate {
        static $gtype: GObject.GType<StyleSchemeChooserWidgetPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type TabClass = typeof Tab;
    type TabGroupInterface = typeof TabGroup;
    type TabLabelClass = typeof TabLabel;
    abstract class TabLabelPrivate {
        static $gtype: GObject.GType<TabLabelPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class TabPrivate {
        static $gtype: GObject.GType<TabPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ViewClass = typeof View;
    module LanguageChooser {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface LanguageChooserNamespace {
        $gtype: GObject.GType<LanguageChooser>;
        prototype: LanguageChooser;
    }
    interface LanguageChooser extends GObject.Object {
        // Methods

        /**
         * Selects `language` in the list.
         * @param language a #GtkSourceLanguage, or %NULL for "Plain Text".
         */
        select_language(language?: GtkSource.Language | null): void;

        // Virtual methods

        /**
         * The function pointer for the
         *   #TeplLanguageChooser::language-activated signal.
         * @param language
         */
        vfunc_language_activated(language: GtkSource.Language): void;
        /**
         * Selects `language` in the list.
         * @param language a #GtkSourceLanguage, or %NULL for "Plain Text".
         */
        vfunc_select_language(language?: GtkSource.Language | null): void;
    }

    export const LanguageChooser: LanguageChooserNamespace;

    module Panel {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface PanelNamespace {
        $gtype: GObject.GType<Panel>;
        prototype: Panel;
    }
    interface Panel extends GObject.Object {
        // Methods

        /**
         * Adds an item to the panel. See #TeplPanelItem for the meaning of the parameters.
         *
         * `widget` should have its #GtkWidget:visible property set to %TRUE in order to
         * be correctly shown in the panel.
         *
         * A #TeplPanelItem object is returned, which can be used as a parameter to
         * other #TeplPanel functions (#TeplPanelItem serves as a kind of handle).
         *
         * Note that #TeplPanel also owns a reference to the #TeplPanelItem. So either
         * store the #TeplPanelItem for later use, or unref it directly after calling
         * this function.
         * @param widget a #GtkWidget.
         * @param name the name.
         * @param title the title.
         * @param icon_name the icon-name.
         * @returns a new #TeplPanelItem object.
         */
        add(
            widget: Gtk.Widget,
            name?: string | null,
            title?: string | null,
            icon_name?: string | null,
        ): PanelItem | null;
        /**
         * Removes an item from `panel`.
         * @param item the #TeplPanelItem to remove.
         */
        remove(item: PanelItem): void;
        /**
         * Sets `item` to be the one that is currently shown in `panel`.
         *
         * This is different than setting the #GtkWidget:visible property to %TRUE. All
         * #GtkWidget's of a `panel` should have their #GtkWidget:visible property set to
         * %TRUE all the time, but only one #TeplPanelItem is shown at a time.
         * @param item a #TeplPanelItem.
         */
        set_active(item: PanelItem): void;

        // Virtual methods

        /**
         * Adds an item to the panel. See #TeplPanelItem for the meaning of the parameters.
         *
         * `widget` should have its #GtkWidget:visible property set to %TRUE in order to
         * be correctly shown in the panel.
         *
         * A #TeplPanelItem object is returned, which can be used as a parameter to
         * other #TeplPanel functions (#TeplPanelItem serves as a kind of handle).
         *
         * Note that #TeplPanel also owns a reference to the #TeplPanelItem. So either
         * store the #TeplPanelItem for later use, or unref it directly after calling
         * this function.
         * @param widget a #GtkWidget.
         * @param name the name.
         * @param title the title.
         * @param icon_name the icon-name.
         */
        vfunc_add(
            widget: Gtk.Widget,
            name?: string | null,
            title?: string | null,
            icon_name?: string | null,
        ): PanelItem | null;
        /**
         * Removes an item from `panel`.
         * @param item the #TeplPanelItem to remove.
         */
        vfunc_remove(item: PanelItem): void;
        /**
         * Sets `item` to be the one that is currently shown in `panel`.
         *
         * This is different than setting the #GtkWidget:visible property to %TRUE. All
         * #GtkWidget's of a `panel` should have their #GtkWidget:visible property set to
         * %TRUE all the time, but only one #TeplPanelItem is shown at a time.
         * @param item a #TeplPanelItem.
         */
        vfunc_set_active(item: PanelItem): void;
    }

    export const Panel: PanelNamespace;

    module PanelItem {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface PanelItemNamespace {
        $gtype: GObject.GType<PanelItem>;
        prototype: PanelItem;
    }
    interface PanelItem extends GObject.Object {
        // Methods

        /**
         * A #GCompareFunc for the #TeplPanelItem's "title" attribute.
         * @param b a #TeplPanelItem.
         * @returns the usual return value for a #GCompareFunc.
         */
        compare_by_title(b: PanelItem): number;
        /**
         * Gets the icon name. It can be shown in the UI to choose this item, for
         * example with the #GtkImage's #GtkImage:icon-name property.
         * @returns the "icon-name" attribute.
         */
        get_icon_name(): string | null;
        /**
         * Gets the name. It is an ID as a UTF-8 string. It is not displayed in the UI.
         * It uniquely identifies an item within a list.
         * @returns the "name" attribute.
         */
        get_name(): string | null;
        /**
         * Gets the title. It is a human-readable UTF-8 string that can be shown in the
         * UI to choose this item.
         * @returns the "title" attribute.
         */
        get_title(): string | null;
        /**
         * Gets the #GtkWidget (the main content).
         * @returns the "widget" attribute. Is %NULL when   the widget has been destroyed.
         */
        get_widget(): Gtk.Widget | null;

        // Virtual methods

        /**
         * Gets the icon name. It can be shown in the UI to choose this item, for
         * example with the #GtkImage's #GtkImage:icon-name property.
         */
        vfunc_get_icon_name(): string | null;
        /**
         * Gets the name. It is an ID as a UTF-8 string. It is not displayed in the UI.
         * It uniquely identifies an item within a list.
         */
        vfunc_get_name(): string | null;
        /**
         * Gets the title. It is a human-readable UTF-8 string that can be shown in the
         * UI to choose this item.
         */
        vfunc_get_title(): string | null;
        /**
         * Gets the #GtkWidget (the main content).
         */
        vfunc_get_widget(): Gtk.Widget | null;
    }

    export const PanelItem: PanelItemNamespace;

    module TabGroup {
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
    interface TabGroup extends GObject.Object {
        // Properties

        /**
         * The #TeplBuffer of the active tab.
         */
        get active_buffer(): Buffer;
        /**
         * The #TeplBuffer of the active tab.
         */
        get activeBuffer(): Buffer;
        /**
         * The #TeplTab currently shown.
         */
        get active_tab(): Tab;
        set active_tab(val: Tab);
        /**
         * The #TeplTab currently shown.
         */
        get activeTab(): Tab;
        set activeTab(val: Tab);
        /**
         * The #TeplView of the active tab.
         */
        get active_view(): View;
        /**
         * The #TeplView of the active tab.
         */
        get activeView(): View;

        // Methods

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

        // Virtual methods

        /**
         * Virtual function pointer for tepl_tab_group_append_tab(),
         *   without the `jump_to` parameter. The default implementation prints a warning
         *   about the operation not being supported.
         * @param tab
         */
        vfunc_append_tab_vfunc(tab: Tab): void;
        /**
         * Virtual function pointer for tepl_tab_group_get_active_tab().
         *   By default, %NULL is returned.
         */
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

    export const TabGroup: TabGroupNamespace;

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
