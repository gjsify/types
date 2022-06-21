// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Tepl-6
 */

import type * as Gjs from './Gjs';
import type GtkSource from './GtkSource-4';
import type Gtk from './Gtk-3.0';
import type xlib from './xlib-2.0';
import type Gdk from './Gdk-3.0';
import type cairo from './cairo-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Gio from './Gio-2.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type GModule from './GModule-2.0';
import type Atk from './Atk-1.0';
import type Amtk from './Amtk-5';

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
 * Flags to define the behavior of a #TeplFileSaver.
 * @bitfield 
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
 * @bitfield 
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
/**
 * A priority that can be used when adding a #GtkStyleProvider for
 * library-specific style information.
 * 
 * Has a higher priority than %GTK_STYLE_PROVIDER_PRIORITY_SETTINGS and a lower
 * priority than %GTK_STYLE_PROVIDER_PRIORITY_APPLICATION.
 * 
 * The Tepl library uses this priority for its #GtkStyleProvider's.
 */
const UTILS_STYLE_PROVIDER_PRIORITY_LIBRARY: number
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
function finalize(): void
/**
 * Initializes the Tepl library (e.g. for the internationalization).
 * 
 * This function can be called several times, but is meant to be called at the
 * beginning of main(), before any other Tepl function call.
 * 
 * This function also calls amtk_init() and gtk_source_init().
 */
function init(): void
/**
 * When a %G_IO_ERROR_CANT_CREATE_BACKUP error occurs while saving `location,`
 * offer two possible actions:
 * - Save anyway: %GTK_RESPONSE_YES.
 * - Don't save: %GTK_RESPONSE_CANCEL.
 * @param location the #GFile for which the backup failed to be created.
 * @param error must be a %G_IO_ERROR_CANT_CREATE_BACKUP.
 */
function io_error_info_bar_cant_create_backup(location: Gio.File, error: GLib.Error): InfoBar
/**
 * Creates a warning about `location` having changed on disk. The possible
 * actions:
 * - Depending on `document_modified,` "Reload" or "Drop changes and reload":
 *   %GTK_RESPONSE_OK.
 * - A close button as added with gtk_info_bar_set_show_close_button().
 * @param location the #GFile for which there has been an external modification.
 * @param document_modified whether the document (e.g. the #GtkTextBuffer) has   unsaved modifications.
 */
function io_error_info_bar_externally_modified(location: Gio.File, document_modified: boolean): InfoBar
/**
 * Creates a warning about `location` being already open in another window,
 * offering two possible actions:
 * - Edit anyway: %GTK_RESPONSE_YES.
 * - Don't edit: %GTK_RESPONSE_CANCEL.
 * @param location the #GFile already open in another window.
 */
function io_error_info_bar_file_already_open(location: Gio.File): InfoBar
/**
 * For file saving, creates a warning about invalid characters that can corrupt
 * the file. Possible actions:
 * - Save anyway: %GTK_RESPONSE_YES.
 * - Don't save: %GTK_RESPONSE_CANCEL.
 * @param location where to save the document.
 */
function io_error_info_bar_invalid_characters(location: Gio.File): InfoBar
/**
 * Gets the indentation, as a string, of the line at `iter`. `iter` can be
 * anywhere in the line.
 * 
 * Possible use-case: to implement an action that inserts some text in a
 * #GtkTextBuffer. If the text to insert spans multiple lines, it is usually
 * desired to keep the same indentation level.
 * @param iter a #GtkTextIter.
 */
function iter_get_line_indentation(iter: Gtk.TextIter): string
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
function menu_shell_append_edit_actions(menu_shell: Gtk.MenuShell): void
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
 */
function pango_font_description_to_css(desc: Pango.FontDescription): string
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
 */
function utils_binding_transform_func_smart_bool(binding: GObject.Binding, from_value: any, to_value: any, user_data: object | null): boolean
function utils_create_close_button(): Gtk.Widget
/**
 * Synchronously creates parent directories of `file,` so that `file` can be
 * saved.
 * @param file a file
 * @param cancellable optional #GCancellable object, %NULL to ignore.
 */
function utils_create_parent_directories(file: Gio.File, cancellable: Gio.Cancellable | null): boolean
/**
 * Parse and break an uri apart in its individual components like the uri
 * scheme, user info, host, port and path. The return value pointer can be
 * %NULL to ignore certain parts of the uri. If the function returns %TRUE, then
 * all return value pointers should be freed using g_free().
 * @param uri the uri to decode
 */
function utils_decode_uri(uri: string): [ /* returnType */ boolean, /* scheme */ string, /* user */ string, /* host */ string, /* port */ string, /* path */ string ]
/**
 * The asynchronous version of g_file_query_exists(). When the operation is
 * finished, `callback` will be called. You can then call
 * tepl_utils_file_query_exists_finish() to get the result of the operation.
 * @param file a #GFile.
 * @param cancellable a #GCancellable.
 * @param callback the callback to call when the operation is finished.
 */
function utils_file_query_exists_async(file: Gio.File, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
/**
 * Finishes the operation started with tepl_utils_file_query_exists_async().
 * There is no output #GError parameter, so you should check if the operation
 * has been cancelled (in which case %FALSE will be returned).
 * @param file a #GFile.
 * @param result a #GAsyncResult.
 */
function utils_file_query_exists_finish(file: Gio.File, result: Gio.AsyncResult): boolean
/**
 * Examples:
 * - "file.pdf" returns ".pdf".
 * - "file.PDF" returns ".pdf".
 * - "file.tar.gz" returns ".gz".
 * - "path/to/file.pdf" returns ".pdf".
 * - "file" (without an extension) returns "" (the empty string).
 * @param filename a filename.
 */
function utils_get_file_extension(filename: string): string
/**
 * Returns `filename` without its extension. With the “extension” having the same
 * definition as in tepl_utils_get_file_extension(); in other words it returns
 * the other part of `filename`.
 * @param filename a filename.
 */
function utils_get_file_shortname(filename: string): string
/**
 * Removes all rows of `list_box,` to obtain an empty #GtkListBox.
 * @param list_box a #GtkListBox.
 */
function utils_list_box_clear(list_box: Gtk.ListBox): void
/**
 * Gets an array of all the #GtkListBoxRow childen of `list_box` for which
 * `filter_func` returns %TRUE. The elements in the array are sorted by
 * increasing index order (as returned by gtk_list_box_row_get_index()).
 * @param list_box a #GtkListBox.
 * @param filter_func non-%NULL callback function.
 */
function utils_list_box_get_filtered_children(list_box: Gtk.ListBox, filter_func: Gtk.ListBoxFilterFunc): [ /* returnType */ Gtk.ListBoxRow[] | null, /* n_filtered_children */ number ]
/**
 * This function has the same semantics as gtk_list_box_get_row_at_index(), but
 * it takes into account only the rows for which `filter_func` returns %TRUE.
 * 
 * As an example, if `index` is 0, it returns the first #GtkListBoxRow for which
 * `filter_func` returns %TRUE.
 * @param list_box a #GtkListBox.
 * @param index the index of the row, starting at 0. The index is among the filtered   rows only.
 * @param filter_func non-%NULL callback function.
 */
function utils_list_box_get_row_at_index_with_filter(list_box: Gtk.ListBox, index: number, filter_func: Gtk.ListBoxFilterFunc): Gtk.ListBoxRow | null
/**
 * Scrolls to a specific #GtkListBoxRow.
 * 
 * Before using this function, tepl_utils_list_box_setup_scrolling() must have
 * been called.
 * @param list_box a #GtkListBox.
 * @param row a #GtkListBoxRow.
 */
function utils_list_box_scroll_to_row(list_box: Gtk.ListBox, row: Gtk.ListBoxRow): void
/**
 * Calls tepl_utils_list_box_scroll_to_row() on the row returned by
 * gtk_list_box_get_selected_row(). This function assumes that there is either
 * zero or one selected row.
 * 
 * Before using this function, tepl_utils_list_box_setup_scrolling() must have
 * been called.
 * @param list_box a #GtkListBox.
 */
function utils_list_box_scroll_to_selected_row(list_box: Gtk.ListBox): void
/**
 * Setup vertical scrolling between `list_box` and `scrolled_window,` to be able
 * to use tepl_utils_list_box_scroll_to_row() afterwards.
 * 
 * This function is intended to be called only once per #GtkListBox, when
 * initializing the `list_box` and `scrolled_window` widgets.
 * @param list_box a #GtkListBox.
 * @param scrolled_window a #GtkScrolledWindow.
 */
function utils_list_box_setup_scrolling(list_box: Gtk.ListBox, scrolled_window: Gtk.ScrolledWindow): void
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
 */
function utils_markup_escape_text(src: string): string | null
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
 * @param font_str a string representation of a #PangoFontDescription, or   %NULL to undo the effect of previous calls to this function on `widget`.
 */
function utils_override_font(widget: Gtk.Widget, font_str: string | null): void
/**
 * Replaces the home directory with a tilde, if the home directory is present in
 * the `filename`.
 * @param filename the filename.
 */
function utils_replace_home_dir_with_tilde(filename: string): string
/**
 * Like tepl_utils_str_middle_truncate() but the “…” character is at the end.
 * @param str a UTF-8 string.
 * @param truncate_length truncate the string at that length, in UTF-8 characters   (not bytes).
 */
function utils_str_end_truncate(str: string, truncate_length: number): string
/**
 * If `str` is longer than `truncate_length,` then this function returns `str`
 * truncated in the middle with a “…” character. Otherwise it just returns a
 * copy of `str`.
 * @param str a UTF-8 string.
 * @param truncate_length truncate the string at that length, in UTF-8 characters   (not bytes).
 */
function utils_str_middle_truncate(str: string, truncate_length: number): string
/**
 * Replaces all occurences of `search` by `replacement`.
 * 
 * The function does only one pass, for example:
 * |[
 * tepl_utils_str_replace ("aaaa", "aa", "a");
 * ```
 * 
 * returns "aa", not "a".
 * @param string a string
 * @param search the search string
 * @param replacement the replacement string
 */
function utils_str_replace(string: string, search: string, replacement: string): string
interface LanguageChooser_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `language-activated`
 */
interface LanguageChooser_LanguageActivatedSignalCallback {
    ($obj: LanguageChooser, language: GtkSource.Language | null): void
}

interface LanguageChooser {

    // Owm methods of Tepl-6.Tepl.LanguageChooser

    /**
     * Selects `language` in the list.
     * @param language a #GtkSourceLanguage, or %NULL for "Plain Text".
     */
    select_language(language: GtkSource.Language | null): void

    // Own virtual methods of Tepl-6.Tepl.LanguageChooser

    vfunc_language_activated(language: GtkSource.Language): void
    /**
     * Selects `language` in the list.
     * @virtual 
     * @param language a #GtkSourceLanguage, or %NULL for "Plain Text".
     */
    vfunc_select_language(language: GtkSource.Language | null): void

    // Own signals of Tepl-6.Tepl.LanguageChooser

    connect(sigName: "language-activated", callback: LanguageChooser_LanguageActivatedSignalCallback): number
    connect_after(sigName: "language-activated", callback: LanguageChooser_LanguageActivatedSignalCallback): number
    emit(sigName: "language-activated", language: GtkSource.Language | null, ...args: any[]): void

    // Class property signals of Tepl-6.Tepl.LanguageChooser

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class LanguageChooser extends GObject.Object {

    // Own properties of Tepl-6.Tepl.LanguageChooser

    static name: string
    static $gtype: GObject.GType<LanguageChooser>

    // Constructors of Tepl-6.Tepl.LanguageChooser

    constructor(config?: LanguageChooser_ConstructProps) 
    _init(config?: LanguageChooser_ConstructProps): void
}

interface TabGroup_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Tepl-6.Tepl.TabGroup

    /**
     * The #TeplTab currently shown.
     */
    active_tab?: Tab | null
}

interface TabGroup {

    // Own properties of Tepl-6.Tepl.TabGroup

    /**
     * The #TeplBuffer of the active tab.
     */
    readonly active_buffer: Buffer
    /**
     * The #TeplTab currently shown.
     */
    active_tab: Tab
    /**
     * The #TeplView of the active tab.
     */
    readonly active_view: View

    // Owm methods of Tepl-6.Tepl.TabGroup

    /**
     * Appends `tab` to `tab_group`.
     * @param tab a #TeplTab.
     * @param jump_to whether to set `tab` as the active tab after appending it.
     */
    append_tab(tab: Tab, jump_to: boolean): void
    /**
     * Convenience function.
     */
    get_active_buffer(): Buffer | null
    get_active_tab(): Tab | null
    /**
     * Convenience function.
     */
    get_active_view(): View | null
    /**
     * Convenience function.
     */
    get_buffers(): Buffer[]
    /**
     * Gets the list of #TeplTab's contained in `tab_group`.
     * 
     * If `tab_group` contains non-#TeplTab children, those will not be present in the
     * returned list. In other words, it is <emphasis>not</emphasis> guaranteed that
     * the index of a #TeplTab in the returned #GList has the same child index in
     * the `tab_group` container.
     */
    get_tabs(): Tab[]
    /**
     * Convenience function.
     */
    get_views(): View[]
    /**
     * Sets the #TeplTabGroup:active-tab. `tab` must be part of `tab_group`.
     * @param tab a #TeplTab part of `tab_group`.
     */
    set_active_tab(tab: Tab): void

    // Own virtual methods of Tepl-6.Tepl.TabGroup

    vfunc_append_tab_vfunc(tab: Tab): void
    vfunc_get_active_tab(): Tab | null
    /**
     * Gets the list of #TeplTab's contained in `tab_group`.
     * 
     * If `tab_group` contains non-#TeplTab children, those will not be present in the
     * returned list. In other words, it is <emphasis>not</emphasis> guaranteed that
     * the index of a #TeplTab in the returned #GList has the same child index in
     * the `tab_group` container.
     * @virtual 
     */
    vfunc_get_tabs(): Tab[]
    /**
     * Sets the #TeplTabGroup:active-tab. `tab` must be part of `tab_group`.
     * @virtual 
     * @param tab a #TeplTab part of `tab_group`.
     */
    vfunc_set_active_tab(tab: Tab): void

    // Class property signals of Tepl-6.Tepl.TabGroup

    connect(sigName: "notify::active-buffer", callback: (($obj: TabGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-buffer", callback: (($obj: TabGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active-buffer", ...args: any[]): void
    connect(sigName: "notify::active-tab", callback: (($obj: TabGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-tab", callback: (($obj: TabGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active-tab", ...args: any[]): void
    connect(sigName: "notify::active-view", callback: (($obj: TabGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-view", callback: (($obj: TabGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active-view", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TabGroup extends GObject.Object {

    // Own properties of Tepl-6.Tepl.TabGroup

    static name: string
    static $gtype: GObject.GType<TabGroup>

    // Constructors of Tepl-6.Tepl.TabGroup

    constructor(config?: TabGroup_ConstructProps) 
    _init(config?: TabGroup_ConstructProps): void
}

interface AbstractFactory_ConstructProps extends GObject.Object_ConstructProps {
}

interface AbstractFactory {

    // Own fields of Tepl-6.Tepl.AbstractFactory

    parent: GObject.Object

    // Owm methods of Tepl-6.Tepl.AbstractFactory

    create_file(): File
    /**
     * Creates a main #GtkApplicationWindow in the sense of
     * tepl_application_window_is_main_window().
     * @param app a #GtkApplication.
     */
    create_main_window(app: Gtk.Application): Gtk.ApplicationWindow | null
    /**
     * Creates a new #GFile that is then intended to be used as an argument to
     * tepl_metadata_manager_load_from_disk() and
     * tepl_metadata_manager_save_to_disk(). This function just creates the #GFile
     * object, it doesn't call any #TeplMetadataManager function.
     */
    create_metadata_manager_file(): Gio.File | null
    create_tab(): Tab
    /**
     * Creates a new tab label for `tab,` suitable for gtk_notebook_set_tab_label().
     * @param tab a #TeplTab.
     */
    create_tab_label(tab: Tab): Gtk.Widget | null
    /**
     * Sets the #TeplAbstractFactory singleton. This should be called early in
     * main(), for example just after calling tepl_init().
     * 
     * This function must be called only once, before the first call to
     * tepl_abstract_factory_get_singleton().
     * 
     * Tepl takes ownership of the `factory` reference.
     */
    set_singleton(): void

    // Own virtual methods of Tepl-6.Tepl.AbstractFactory

    vfunc_create_file(): File
    /**
     * Creates a main #GtkApplicationWindow in the sense of
     * tepl_application_window_is_main_window().
     * @virtual 
     * @param app a #GtkApplication.
     */
    vfunc_create_main_window(app: Gtk.Application): Gtk.ApplicationWindow | null
    /**
     * Creates a new #GFile that is then intended to be used as an argument to
     * tepl_metadata_manager_load_from_disk() and
     * tepl_metadata_manager_save_to_disk(). This function just creates the #GFile
     * object, it doesn't call any #TeplMetadataManager function.
     * @virtual 
     */
    vfunc_create_metadata_manager_file(): Gio.File | null
    vfunc_create_tab(): Tab
    /**
     * Creates a new tab label for `tab,` suitable for gtk_notebook_set_tab_label().
     * @virtual 
     * @param tab a #TeplTab.
     */
    vfunc_create_tab_label(tab: Tab): Gtk.Widget | null

    // Class property signals of Tepl-6.Tepl.AbstractFactory

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AbstractFactory extends GObject.Object {

    // Own properties of Tepl-6.Tepl.AbstractFactory

    static name: string
    static $gtype: GObject.GType<AbstractFactory>

    // Constructors of Tepl-6.Tepl.AbstractFactory

    constructor(config?: AbstractFactory_ConstructProps) 
    _init(config?: AbstractFactory_ConstructProps): void
    /**
     * Gets the #TeplAbstractFactory singleton instance.
     * 
     * If tepl_abstract_factory_set_singleton() has not been called, the singleton
     * is created with a #TeplAbstractFactory instance.
     */
    static get_singleton(): AbstractFactory
}

interface Application_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Tepl-6.Tepl.Application

    /**
     * The #GtkApplication.
     */
    application?: Gtk.Application | null
}

interface Application {

    // Own properties of Tepl-6.Tepl.Application

    /**
     * The #GtkApplication.
     */
    readonly application: Gtk.Application

    // Own fields of Tepl-6.Tepl.Application

    parent: GObject.Object
    priv: ApplicationPrivate

    // Owm methods of Tepl-6.Tepl.Application

    /**
     * Like gtk_application_get_active_window(), but returns the main window in the
     * sense of tepl_application_window_is_main_window().
     */
    get_active_main_window(): Gtk.ApplicationWindow | null
    /**
     * Returns an initially empty #AmtkActionInfoStore reserved for the
     * application-specific actions. Libraries should not add #AmtkActionInfo's to
     * this store. Libraries should provide their own store if they want to share
     * #AmtkActionInfo's.
     */
    get_app_action_info_store(): Amtk.ActionInfoStore
    get_application(): Gtk.Application
    /**
     * The returned #AmtkActionInfoStore contains #AmtkActionInfo's for all the
     * #GAction's listed in the [class description of
     * TeplApplicationWindow][tepl-application-window-gactions] and the [class
     * description of TeplApplication][tepl-application-gactions].
     */
    get_tepl_action_info_store(): Amtk.ActionInfoStore
    /**
     * Connects a generic function handler for the #GApplication::activate signal.
     * 
     * If no main windows exist, it creates one with
     * tepl_abstract_factory_create_main_window(). If a main window already exists,
     * it calls gtk_window_present() on the most recently focused window of the
     * application.
     */
    handle_activate(): void
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
    handle_metadata(): void
    /**
     * Connects a generic function handler for the #GApplication::open signal.
     * 
     * It calls tepl_application_window_open_file() for each #GFile to open, on the
     * active main window as returned by tepl_application_get_active_main_window().
     * If the active main window is %NULL, it creates one with
     * tepl_abstract_factory_create_main_window().
     */
    handle_open(): void
    /**
     * Calls g_application_open() with a single file and an empty hint.
     * @param file a #GFile.
     */
    open_simple(file: Gio.File): void

    // Class property signals of Tepl-6.Tepl.Application

    connect(sigName: "notify::application", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Application extends GObject.Object {

    // Own properties of Tepl-6.Tepl.Application

    static name: string
    static $gtype: GObject.GType<Application>

    // Constructors of Tepl-6.Tepl.Application

    constructor(config?: Application_ConstructProps) 
    _init(config?: Application_ConstructProps): void
    /**
     * Convenience function that calls g_application_get_default() followed by
     * tepl_application_get_from_gtk_application(). The object returned by
     * g_application_get_default() must be a #GtkApplication.
     */
    static get_default(): Application
    /**
     * Returns the #TeplApplication of `gtk_app`. The returned object is guaranteed
     * to be the same for the lifetime of `gtk_app`.
     * @param gtk_app a #GtkApplication.
     */
    static get_from_gtk_application(gtk_app: Gtk.Application): Application
}

interface ApplicationWindow_ConstructProps extends TabGroup_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Tepl-6.Tepl.ApplicationWindow

    /**
     * The #GtkApplicationWindow.
     */
    application_window?: Gtk.ApplicationWindow | null
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
    handle_title?: boolean | null
}

interface ApplicationWindow extends TabGroup {

    // Own properties of Tepl-6.Tepl.ApplicationWindow

    /**
     * The #GtkApplicationWindow.
     */
    readonly application_window: Gtk.ApplicationWindow
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
    handle_title: boolean

    // Own fields of Tepl-6.Tepl.ApplicationWindow

    parent: GObject.Object
    priv: ApplicationWindowPrivate

    // Owm methods of Tepl-6.Tepl.ApplicationWindow

    get_application_window(): Gtk.ApplicationWindow
    get_handle_title(): boolean
    /**
     * Gets the #GtkWindowGroup in which `tepl_window` resides.
     * 
     * You should call this function only on main windows, to add secondary windows
     * to the #GtkWindowGroup.
     */
    get_window_group(): Gtk.WindowGroup
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
    open_file(location: Gio.File, jump_to: boolean): void
    /**
     * Sets the #TeplApplicationWindow:handle-title property.
     * @param handle_title the new value.
     */
    set_handle_title(handle_title: boolean): void
    /**
     * Sets the #TeplTabGroup of `tepl_window`. This function can be called only
     * once, it is not possible to change the #TeplTabGroup afterwards (this
     * restriction may be lifted in the future if there is a compelling use-case).
     * 
     * #TeplApplicationWindow implements the #TeplTabGroup interface by delegating
     * the requests to `tab_group`.
     * @param tab_group a #TeplTabGroup.
     */
    set_tab_group(tab_group: TabGroup): void

    // Class property signals of Tepl-6.Tepl.ApplicationWindow

    connect(sigName: "notify::application-window", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application-window", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::application-window", ...args: any[]): void
    connect(sigName: "notify::handle-title", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::handle-title", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::handle-title", ...args: any[]): void
    connect(sigName: "notify::active-buffer", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-buffer", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active-buffer", ...args: any[]): void
    connect(sigName: "notify::active-tab", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-tab", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active-tab", ...args: any[]): void
    connect(sigName: "notify::active-view", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-view", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active-view", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ApplicationWindow extends GObject.Object {

    // Own properties of Tepl-6.Tepl.ApplicationWindow

    static name: string
    static $gtype: GObject.GType<ApplicationWindow>

    // Constructors of Tepl-6.Tepl.ApplicationWindow

    constructor(config?: ApplicationWindow_ConstructProps) 
    _init(config?: ApplicationWindow_ConstructProps): void
    /**
     * Returns the #TeplApplicationWindow of `gtk_window`. The returned object is
     * guaranteed to be the same for the lifetime of `gtk_window`.
     * @param gtk_window a #GtkApplicationWindow.
     */
    static get_from_gtk_application_window(gtk_window: Gtk.ApplicationWindow): ApplicationWindow
    /**
     * Returns %TRUE iff `gtk_window` has an associated #TeplTabGroup (i.e. if
     * tepl_application_window_set_tab_group() has been called).
     * 
     * This function takes a #GtkApplicationWindow parameter to avoid creating the
     * #TeplApplicationWindow object if it hasn't been created.
     * @param gtk_window a #GtkApplicationWindow.
     */
    static is_main_window(gtk_window: Gtk.ApplicationWindow): boolean
}

interface Buffer_ConstructProps extends GtkSource.Buffer_ConstructProps {

    // Own constructor properties of Tepl-6.Tepl.Buffer

    /**
     * The #GtkSourceBuffer:style-scheme ID, as a string. This property is
     * useful for binding it to a #GSettings key.
     * 
     * When the #GtkSourceBuffer:style-scheme is %NULL,
     * #TeplBuffer:tepl-style-scheme-id contains the empty string.
     */
    tepl_style_scheme_id?: string | null
}

/**
 * Signal callback interface for `tepl-cursor-moved`
 */
interface Buffer_TeplCursorMovedSignalCallback {
    ($obj: Buffer): void
}

interface Buffer {

    // Own properties of Tepl-6.Tepl.Buffer

    /**
     * The full title. See tepl_buffer_get_full_title().
     */
    readonly tepl_full_title: string
    /**
     * The short title. See tepl_buffer_get_short_title().
     */
    readonly tepl_short_title: string
    /**
     * The #GtkSourceBuffer:style-scheme ID, as a string. This property is
     * useful for binding it to a #GSettings key.
     * 
     * When the #GtkSourceBuffer:style-scheme is %NULL,
     * #TeplBuffer:tepl-style-scheme-id contains the empty string.
     */
    tepl_style_scheme_id: string

    // Conflicting properties

    priv: any

    // Own fields of Tepl-6.Tepl.Buffer

    parent_instance: GtkSource.Buffer

    // Owm methods of Tepl-6.Tepl.Buffer

    /**
     * Returns the #TeplFile of `buffer`. The returned object is guaranteed to be the
     * same for the lifetime of `buffer`.
     * 
     * #TeplBuffer creates the #TeplFile with tepl_abstract_factory_create_file().
     */
    get_file(): File
    /**
     * Returns a title suitable for a #GtkWindow title. It contains (in that order):
     * - the #TeplBuffer:tepl-short-title;
     * - the directory path in parenthesis if the #TeplFile:location isn't
     *   %NULL.
     */
    get_full_title(): string
    /**
     * Returns the #TeplMetadata of `buffer`. The returned object is guaranteed to be
     * the same for the lifetime of `buffer`.
     */
    get_metadata(): Metadata
    get_selection_type(): SelectionType
    /**
     * Returns a title suitable for a tab label. It contains (in that order):
     * - '*' if the buffer is modified;
     * - the #TeplFile:short-name.
     */
    get_short_title(): string
    get_style_scheme_id(): string
    /**
     * Returns whether `buffer` is untouched.
     * 
     * This function is for example useful to know if we can re-use this buffer to
     * load a file, instead of opening a new tab or window.
     * 
     * For this function to return %TRUE, the `buffer` must be empty, non-modified,
     * the undo/redo #GtkSourceBuffer history must be empty, and the
     * #TeplFile:location must be %NULL.
     */
    is_untouched(): boolean
    /**
     * Calls tepl_metadata_manager_copy_from() for #TeplFile:location (if not %NULL)
     * to the associated #TeplMetadata of `buffer`.
     */
    load_metadata_from_metadata_manager(): void
    /**
     * Calls tepl_metadata_manager_merge_into() for #TeplFile:location (if not
     * %NULL) from the associated #TeplMetadata of `buffer`.
     */
    save_metadata_into_metadata_manager(): void
    /**
     * Sets the #TeplBuffer:tepl-style-scheme-id property.
     * 
     * The #GtkSourceStyleScheme is taken from the default
     * #GtkSourceStyleSchemeManager as returned by
     * gtk_source_style_scheme_manager_get_default().
     * @param style_scheme_id the new value.
     */
    set_style_scheme_id(style_scheme_id: string): void

    // Own virtual methods of Tepl-6.Tepl.Buffer

    vfunc_tepl_cursor_moved(): void

    // Own signals of Tepl-6.Tepl.Buffer

    connect(sigName: "tepl-cursor-moved", callback: Buffer_TeplCursorMovedSignalCallback): number
    connect_after(sigName: "tepl-cursor-moved", callback: Buffer_TeplCursorMovedSignalCallback): number
    emit(sigName: "tepl-cursor-moved", ...args: any[]): void

    // Class property signals of Tepl-6.Tepl.Buffer

    connect(sigName: "notify::tepl-full-title", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tepl-full-title", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tepl-full-title", ...args: any[]): void
    connect(sigName: "notify::tepl-short-title", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tepl-short-title", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tepl-short-title", ...args: any[]): void
    connect(sigName: "notify::tepl-style-scheme-id", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tepl-style-scheme-id", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tepl-style-scheme-id", ...args: any[]): void
    connect(sigName: "notify::can-redo", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-redo", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-redo", ...args: any[]): void
    connect(sigName: "notify::can-undo", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-undo", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-undo", ...args: any[]): void
    connect(sigName: "notify::highlight-matching-brackets", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::highlight-matching-brackets", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::highlight-matching-brackets", ...args: any[]): void
    connect(sigName: "notify::highlight-syntax", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::highlight-syntax", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::highlight-syntax", ...args: any[]): void
    connect(sigName: "notify::implicit-trailing-newline", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::implicit-trailing-newline", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::implicit-trailing-newline", ...args: any[]): void
    connect(sigName: "notify::language", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::language", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::language", ...args: any[]): void
    connect(sigName: "notify::max-undo-levels", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-undo-levels", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-undo-levels", ...args: any[]): void
    connect(sigName: "notify::style-scheme", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style-scheme", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style-scheme", ...args: any[]): void
    connect(sigName: "notify::undo-manager", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::undo-manager", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::undo-manager", ...args: any[]): void
    connect(sigName: "notify::copy-target-list", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::copy-target-list", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::copy-target-list", ...args: any[]): void
    connect(sigName: "notify::cursor-position", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor-position", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor-position", ...args: any[]): void
    connect(sigName: "notify::has-selection", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-selection", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-selection", ...args: any[]): void
    connect(sigName: "notify::paste-target-list", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::paste-target-list", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::paste-target-list", ...args: any[]): void
    connect(sigName: "notify::tag-table", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tag-table", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tag-table", ...args: any[]): void
    connect(sigName: "notify::text", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Buffer extends GtkSource.Buffer {

    // Own properties of Tepl-6.Tepl.Buffer

    static name: string
    static $gtype: GObject.GType<Buffer>

    // Constructors of Tepl-6.Tepl.Buffer

    constructor(config?: Buffer_ConstructProps) 
    constructor() 
    static new(): Buffer

    // Overloads of new

    /**
     * Creates a new source buffer.
     * @constructor 
     * @param table a #GtkTextTagTable, or %NULL to create a new one.
     */
    static new(table: Gtk.TextTagTable | null): GtkSource.Buffer
    /**
     * Creates a new text buffer.
     * @constructor 
     * @param table a tag table, or %NULL to create a new one
     */
    static new(table: Gtk.TextTagTable | null): Gtk.TextBuffer
    _init(config?: Buffer_ConstructProps): void
}

interface File_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Tepl-6.Tepl.File

    /**
     * The location.
     */
    location?: Gio.File | null
}

interface File {

    // Own properties of Tepl-6.Tepl.File

    /**
     * The location.
     */
    location: Gio.File
    /**
     * The line ending type.
     */
    readonly newline_type: NewlineType
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
    readonly short_name: string

    // Own fields of Tepl-6.Tepl.File

    parent: GObject.Object
    priv: FilePrivate

    // Owm methods of Tepl-6.Tepl.File

    /**
     * If the #TeplFile:location isn't %NULL, adds its URI to the default
     * #GtkRecentManager with gtk_recent_manager_add_item().
     */
    add_uri_to_recent_manager(): void
    get_location(): Gio.File
    get_newline_type(): NewlineType
    get_short_name(): string
    /**
     * Sets the #TeplFile:location property.
     * @param location the new #GFile, or %NULL.
     */
    set_location(location: Gio.File | null): void

    // Class property signals of Tepl-6.Tepl.File

    connect(sigName: "notify::location", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: "notify::newline-type", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::newline-type", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::newline-type", ...args: any[]): void
    connect(sigName: "notify::short-name", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::short-name", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::short-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class File extends GObject.Object {

    // Own properties of Tepl-6.Tepl.File

    static name: string
    static $gtype: GObject.GType<File>

    // Constructors of Tepl-6.Tepl.File

    constructor(config?: File_ConstructProps) 
    constructor() 
    static new(): File
    _init(config?: File_ConstructProps): void
    /**
     * Calls either gtk_native_dialog_set_modal() or gtk_window_set_modal()
     * depending on the `chooser` type.
     * @param chooser a #GtkFileChooser.
     * @param modal the new value.
     */
    static chooser_set_modal(chooser: Gtk.FileChooser, modal: boolean): void
    /**
     * Sets or unsets a parent #GtkWindow for the `chooser` dialog. It calls the
     * right functions depending on the type of `chooser`.
     * @param chooser a #GtkFileChooser.
     * @param parent a #GtkWindow, or %NULL.
     */
    static chooser_set_parent(chooser: Gtk.FileChooser, parent: Gtk.Window | null): void
    /**
     * Calls gtk_native_dialog_show() or gtk_window_present() depending on the type
     * of `chooser`.
     * @param chooser a #GtkFileChooser.
     */
    static chooser_show(chooser: Gtk.FileChooser): void
}

interface FileLoader_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Tepl-6.Tepl.FileLoader

    /**
     * The #TeplBuffer to load the content into. The #TeplFileLoader object
     * has a weak reference to the buffer.
     */
    buffer?: Buffer | null
    /**
     * The #TeplFile. The #TeplFileLoader object has a weak
     * reference to the file.
     */
    file?: File | null
    /**
     * The #GFile to load. By default the location is taken from the
     * #TeplFile at construction time.
     */
    location?: Gio.File | null
}

interface FileLoader {

    // Own properties of Tepl-6.Tepl.FileLoader

    /**
     * The #TeplBuffer to load the content into. The #TeplFileLoader object
     * has a weak reference to the buffer.
     */
    readonly buffer: Buffer
    /**
     * The #TeplFile. The #TeplFileLoader object has a weak
     * reference to the file.
     */
    readonly file: File
    /**
     * The #GFile to load. By default the location is taken from the
     * #TeplFile at construction time.
     */
    readonly location: Gio.File

    // Own fields of Tepl-6.Tepl.FileLoader

    parent: GObject.Object
    priv: FileLoaderPrivate

    // Owm methods of Tepl-6.Tepl.FileLoader

    get_buffer(): Buffer | null
    get_file(): File | null
    get_location(): Gio.File | null
    /**
     * Loads asynchronously the file content into the #TeplBuffer.
     * 
     * See the #GAsyncResult documentation to know how to use this function.
     * @param io_priority the I/O priority of the request. E.g. %G_PRIORITY_LOW,   %G_PRIORITY_DEFAULT or %G_PRIORITY_HIGH.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the request is   satisfied.
     */
    load_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a file loading started with tepl_file_loader_load_async().
     * @param result a #GAsyncResult.
     */
    load_finish(result: Gio.AsyncResult): boolean

    // Class property signals of Tepl-6.Tepl.FileLoader

    connect(sigName: "notify::buffer", callback: (($obj: FileLoader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer", callback: (($obj: FileLoader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::file", callback: (($obj: FileLoader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file", callback: (($obj: FileLoader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::file", ...args: any[]): void
    connect(sigName: "notify::location", callback: (($obj: FileLoader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: FileLoader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FileLoader extends GObject.Object {

    // Own properties of Tepl-6.Tepl.FileLoader

    static name: string
    static $gtype: GObject.GType<FileLoader>

    // Constructors of Tepl-6.Tepl.FileLoader

    constructor(config?: FileLoader_ConstructProps) 
    /**
     * Creates a new #TeplFileLoader object. The content is read from the #TeplFile
     * location.
     * 
     * If not already done, call tepl_file_set_location() before calling this
     * constructor. The previous location is anyway not needed, because as soon as
     * the file loading begins, the `buffer` is emptied. Setting the #TeplFile
     * location directly permits to update the UI, to display the good location when
     * the file is loading.
     * @constructor 
     * @param buffer the #TeplBuffer to load the content into.
     * @param file the #TeplFile.
     */
    constructor(buffer: Buffer, file: File) 
    /**
     * Creates a new #TeplFileLoader object. The content is read from the #TeplFile
     * location.
     * 
     * If not already done, call tepl_file_set_location() before calling this
     * constructor. The previous location is anyway not needed, because as soon as
     * the file loading begins, the `buffer` is emptied. Setting the #TeplFile
     * location directly permits to update the UI, to display the good location when
     * the file is loading.
     * @constructor 
     * @param buffer the #TeplBuffer to load the content into.
     * @param file the #TeplFile.
     */
    static new(buffer: Buffer, file: File): FileLoader
    _init(config?: FileLoader_ConstructProps): void
}

interface FileSaver_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Tepl-6.Tepl.FileSaver

    /**
     * The #TeplBuffer to save. The #TeplFileSaver object has a weak
     * reference to the buffer.
     */
    buffer?: Buffer | null
    /**
     * The #TeplFile. The #TeplFileSaver object has a weak reference to the
     * file.
     */
    file?: File | null
    /**
     * File saving flags.
     */
    flags?: FileSaverFlags | null
    /**
     * The #GFile where to save the buffer. By default the location is taken
     * from the #TeplFile at construction time.
     */
    location?: Gio.File | null
    /**
     * The newline type.
     */
    newline_type?: NewlineType | null
}

interface FileSaver {

    // Own properties of Tepl-6.Tepl.FileSaver

    /**
     * The #TeplBuffer to save. The #TeplFileSaver object has a weak
     * reference to the buffer.
     */
    readonly buffer: Buffer
    /**
     * The #TeplFile. The #TeplFileSaver object has a weak reference to the
     * file.
     */
    readonly file: File
    /**
     * File saving flags.
     */
    flags: FileSaverFlags
    /**
     * The #GFile where to save the buffer. By default the location is taken
     * from the #TeplFile at construction time.
     */
    readonly location: Gio.File
    /**
     * The newline type.
     */
    newline_type: NewlineType

    // Own fields of Tepl-6.Tepl.FileSaver

    object: GObject.Object
    priv: FileSaverPrivate

    // Owm methods of Tepl-6.Tepl.FileSaver

    get_buffer(): Buffer
    get_file(): File
    get_flags(): FileSaverFlags
    get_location(): Gio.File
    get_newline_type(): NewlineType
    /**
     * Saves asynchronously the buffer into the file. See the #GAsyncResult
     * documentation to know how to use this function.
     * @param io_priority the I/O priority of the request. E.g. %G_PRIORITY_LOW,   %G_PRIORITY_DEFAULT or %G_PRIORITY_HIGH.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the request is   satisfied.
     */
    save_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a file saving started with tepl_file_saver_save_async().
     * 
     * If the file has been saved successfully, the following #TeplFile
     * properties will be updated: the location and the newline type.
     * 
     * gtk_text_buffer_set_modified() is called with %FALSE if the file has been
     * saved successfully.
     * @param result a #GAsyncResult.
     */
    save_finish(result: Gio.AsyncResult): boolean
    set_flags(flags: FileSaverFlags): void
    /**
     * Sets the newline type. By default the newline type is taken from the
     * #TeplFile.
     * @param newline_type the new newline type.
     */
    set_newline_type(newline_type: NewlineType): void

    // Class property signals of Tepl-6.Tepl.FileSaver

    connect(sigName: "notify::buffer", callback: (($obj: FileSaver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer", callback: (($obj: FileSaver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::file", callback: (($obj: FileSaver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file", callback: (($obj: FileSaver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::file", ...args: any[]): void
    connect(sigName: "notify::flags", callback: (($obj: FileSaver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: FileSaver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::flags", ...args: any[]): void
    connect(sigName: "notify::location", callback: (($obj: FileSaver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: FileSaver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: "notify::newline-type", callback: (($obj: FileSaver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::newline-type", callback: (($obj: FileSaver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::newline-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FileSaver extends GObject.Object {

    // Own properties of Tepl-6.Tepl.FileSaver

    static name: string
    static $gtype: GObject.GType<FileSaver>

    // Constructors of Tepl-6.Tepl.FileSaver

    constructor(config?: FileSaver_ConstructProps) 
    /**
     * Creates a new #TeplFileSaver object. The `buffer` will be saved to the
     * #TeplFile's location.
     * 
     * This constructor is suitable for a simple "save" operation, when the `file`
     * already contains a non-%NULL #TeplFile:location.
     * @constructor 
     * @param buffer the #TeplBuffer to save.
     * @param file the #TeplFile.
     */
    constructor(buffer: Buffer, file: File) 
    /**
     * Creates a new #TeplFileSaver object. The `buffer` will be saved to the
     * #TeplFile's location.
     * 
     * This constructor is suitable for a simple "save" operation, when the `file`
     * already contains a non-%NULL #TeplFile:location.
     * @constructor 
     * @param buffer the #TeplBuffer to save.
     * @param file the #TeplFile.
     */
    static new(buffer: Buffer, file: File): FileSaver
    /**
     * Creates a new #TeplFileSaver object with a target location. When the
     * file saving is finished successfully, `target_location` is set to the `file'`s
     * #TeplFile:location property. If an error occurs, the previous valid
     * location is still available in #TeplFile.
     * 
     * This constructor is suitable for a "save as" operation, or for saving a new
     * buffer for the first time.
     * @constructor 
     * @param buffer the #TeplBuffer to save.
     * @param file the #TeplFile.
     * @param target_location the #GFile where to save the buffer to.
     */
    static new_with_target(buffer: Buffer, file: File, target_location: Gio.File): FileSaver
    _init(config?: FileSaver_ConstructProps): void
}

interface FoldRegion_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Tepl-6.Tepl.FoldRegion

    /**
     * The #GtkTextBuffer where the fold region is applied. The
     * #TeplFoldRegion object has a weak reference to the buffer.
     */
    buffer?: Gtk.TextBuffer | null
    /**
     * Whether the #TeplFoldRegion is folded or not.
     */
    folded?: boolean | null
}

interface FoldRegion {

    // Own properties of Tepl-6.Tepl.FoldRegion

    /**
     * The #GtkTextBuffer where the fold region is applied. The
     * #TeplFoldRegion object has a weak reference to the buffer.
     */
    readonly buffer: Gtk.TextBuffer
    /**
     * Whether the #TeplFoldRegion is folded or not.
     */
    folded: boolean

    // Own fields of Tepl-6.Tepl.FoldRegion

    parent_instance: GObject.Object

    // Owm methods of Tepl-6.Tepl.FoldRegion

    /**
     * Obtains iterators pointing to the start and end of the #TeplFoldRegion.
     */
    get_bounds(): [ /* returnType */ boolean, /* start */ Gtk.TextIter, /* end */ Gtk.TextIter ]
    get_buffer(): Gtk.TextBuffer | null
    get_folded(): boolean
    /**
     * Sets the start and end of the #TeplFoldRegion.
     * @param start a #GtkTextIter.
     * @param end a #GtkTextIter.
     */
    set_bounds(start: Gtk.TextIter, end: Gtk.TextIter): void
    /**
     * Folds or unfolds the region.
     * @param folded the new value.
     */
    set_folded(folded: boolean): void

    // Class property signals of Tepl-6.Tepl.FoldRegion

    connect(sigName: "notify::buffer", callback: (($obj: FoldRegion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer", callback: (($obj: FoldRegion, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::folded", callback: (($obj: FoldRegion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::folded", callback: (($obj: FoldRegion, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::folded", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FoldRegion extends GObject.Object {

    // Own properties of Tepl-6.Tepl.FoldRegion

    static name: string
    static $gtype: GObject.GType<FoldRegion>

    // Constructors of Tepl-6.Tepl.FoldRegion

    constructor(config?: FoldRegion_ConstructProps) 
    constructor(buffer: Gtk.TextBuffer, start: Gtk.TextIter, end: Gtk.TextIter) 
    static new(buffer: Gtk.TextBuffer, start: Gtk.TextIter, end: Gtk.TextIter): FoldRegion
    _init(config?: FoldRegion_ConstructProps): void
}

interface GotoLineBar_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.Orientable_ConstructProps, Gtk.Grid_ConstructProps {
}

interface GotoLineBar extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own fields of Tepl-6.Tepl.GotoLineBar

    parent: Gtk.Grid
    priv: GotoLineBarPrivate

    // Owm methods of Tepl-6.Tepl.GotoLineBar

    /**
     * Calls gtk_widget_grab_focus() to the #GtkSearchEntry of `bar`.
     */
    grab_focus_to_entry(): void
    /**
     * Sets the #TeplView. tepl_view_goto_line() will be called on `view` when the
     * user types a line number in the #GtkSearchEntry of `bar`.
     * 
     * Only one #TeplView can be associated per #TeplGotoLineBar.
     * @param view a #TeplView.
     */
    set_view(view: View): void

    // Conflicting methods

    child_notify(...args: any[]): any

    // Class property signals of Tepl-6.Tepl.GotoLineBar

    connect(sigName: "notify::baseline-row", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-row", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-row", ...args: any[]): void
    connect(sigName: "notify::column-homogeneous", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-homogeneous", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::column-homogeneous", ...args: any[]): void
    connect(sigName: "notify::column-spacing", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-spacing", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::column-spacing", ...args: any[]): void
    connect(sigName: "notify::row-homogeneous", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-homogeneous", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::row-homogeneous", ...args: any[]): void
    connect(sigName: "notify::row-spacing", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-spacing", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::row-spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: GotoLineBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class GotoLineBar extends Gtk.Grid {

    // Own properties of Tepl-6.Tepl.GotoLineBar

    static name: string
    static $gtype: GObject.GType<GotoLineBar>

    // Constructors of Tepl-6.Tepl.GotoLineBar

    constructor(config?: GotoLineBar_ConstructProps) 
    constructor() 
    static new(): GotoLineBar

    // Overloads of new

    /**
     * Creates a new grid widget.
     * @constructor 
     */
    static new(): Gtk.Grid
    _init(config?: GotoLineBar_ConstructProps): void
}

interface GutterRendererFolds_ConstructProps extends GtkSource.GutterRenderer_ConstructProps {
}

interface GutterRendererFolds {

    // Own fields of Tepl-6.Tepl.GutterRendererFolds

    parent_instance: GtkSource.GutterRenderer

    // Owm methods of Tepl-6.Tepl.GutterRendererFolds

    /**
     * Sets the folding state of the next cell to be drawn.
     * 
     * This function is intended to be called from a subclass' draw method before
     * chaining-up to its parent's draw method.
     * @param state a #TeplGutterRendererFoldsState.
     */
    set_state(state: GutterRendererFoldsState): void

    // Class property signals of Tepl-6.Tepl.GutterRendererFolds

    connect(sigName: "notify::alignment-mode", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alignment-mode", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::alignment-mode", ...args: any[]): void
    connect(sigName: "notify::background-rgba", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-rgba", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-rgba", ...args: any[]): void
    connect(sigName: "notify::background-set", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-set", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-set", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::view", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::view", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::view", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::window-type", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-type", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window-type", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::xpad", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xpad", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xpad", ...args: any[]): void
    connect(sigName: "notify::yalign", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yalign", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::yalign", ...args: any[]): void
    connect(sigName: "notify::ypad", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ypad", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ypad", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class GutterRendererFolds extends GtkSource.GutterRenderer {

    // Own properties of Tepl-6.Tepl.GutterRendererFolds

    static name: string
    static $gtype: GObject.GType<GutterRendererFolds>

    // Constructors of Tepl-6.Tepl.GutterRendererFolds

    constructor(config?: GutterRendererFolds_ConstructProps) 
    constructor() 
    static new(): GutterRendererFolds
    _init(config?: GutterRendererFolds_ConstructProps): void
}

interface InfoBar_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.Orientable_ConstructProps, Gtk.InfoBar_ConstructProps {

    // Own constructor properties of Tepl-6.Tepl.InfoBar

    /**
     * If this property is %TRUE, then the #TeplInfoBar is destroyed with
     * gtk_widget_destroy() when the #GtkInfoBar::response signal is
     * received with the `response_id` %GTK_RESPONSE_CLOSE.
     */
    handle_close_response?: boolean | null
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
    icon_from_message_type?: boolean | null
    /**
     * If set to a non-%NULL value, then an icon is shown on the left.
     * 
     * If this property has a non-%NULL value, then the
     * #TeplInfoBar:icon-from-message-type property is not taken into
     * account.
     */
    icon_name?: string | null
}

interface InfoBar extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own properties of Tepl-6.Tepl.InfoBar

    /**
     * If this property is %TRUE, then the #TeplInfoBar is destroyed with
     * gtk_widget_destroy() when the #GtkInfoBar::response signal is
     * received with the `response_id` %GTK_RESPONSE_CLOSE.
     */
    handle_close_response: boolean
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
    icon_from_message_type: boolean
    /**
     * If set to a non-%NULL value, then an icon is shown on the left.
     * 
     * If this property has a non-%NULL value, then the
     * #TeplInfoBar:icon-from-message-type property is not taken into
     * account.
     */
    icon_name: string

    // Own fields of Tepl-6.Tepl.InfoBar

    parent: Gtk.InfoBar
    priv: InfoBarPrivate

    // Owm methods of Tepl-6.Tepl.InfoBar

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
    add_content_widget(widget: Gtk.Widget, location: InfoBarLocation): void
    /**
     * Adds a primary message to the %TEPL_INFO_BAR_LOCATION_ALONGSIDE_ICON
     * location.
     * @param primary_msg a primary message.
     */
    add_primary_message(primary_msg: string): void
    /**
     * Adds a secondary message to the %TEPL_INFO_BAR_LOCATION_ALONGSIDE_ICON
     * location.
     * @param secondary_msg a secondary message.
     */
    add_secondary_message(secondary_msg: string): void
    get_handle_close_response(): boolean
    get_icon_from_message_type(): boolean
    get_icon_name(): string
    /**
     * Sets a new value to the #TeplInfoBar:handle-close-response property.
     * @param handle_close_response the new value.
     */
    set_handle_close_response(handle_close_response: boolean): void
    /**
     * Sets a new value to the #TeplInfoBar:icon-from-message-type property.
     * @param icon_from_message_type the new value.
     */
    set_icon_from_message_type(icon_from_message_type: boolean): void
    /**
     * Sets a new value to the #TeplInfoBar:icon-name property.
     * @param icon_name the new value.
     */
    set_icon_name(icon_name: string): void
    /**
     * Convenience function to set the #GtkInfoBar:show-close-button and
     * #TeplInfoBar:handle-close-response properties to %TRUE.
     */
    setup_close_button(): void

    // Conflicting methods

    child_notify(...args: any[]): any

    // Class property signals of Tepl-6.Tepl.InfoBar

    connect(sigName: "notify::handle-close-response", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::handle-close-response", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::handle-close-response", ...args: any[]): void
    connect(sigName: "notify::icon-from-message-type", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-from-message-type", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-from-message-type", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::message-type", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-type", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::message-type", ...args: any[]): void
    connect(sigName: "notify::revealed", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::revealed", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::revealed", ...args: any[]): void
    connect(sigName: "notify::show-close-button", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-close-button", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-close-button", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class InfoBar extends Gtk.InfoBar {

    // Own properties of Tepl-6.Tepl.InfoBar

    static name: string
    static $gtype: GObject.GType<InfoBar>

    // Constructors of Tepl-6.Tepl.InfoBar

    constructor(config?: InfoBar_ConstructProps) 
    constructor() 
    static new(): InfoBar

    // Overloads of new

    /**
     * Creates a new #GtkInfoBar object.
     * @constructor 
     */
    static new(): Gtk.InfoBar
    /**
     * Creates a new #GtkBox.
     * @constructor 
     * @param orientation the box’s orientation.
     * @param spacing the number of pixels to place by default between children.
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    /**
     * Creates a new #TeplInfoBar with an icon (depending on `msg_type)`, a primary
     * message and a secondary message.
     * @constructor 
     * @param msg_type the message type.
     * @param primary_msg the primary message.
     * @param secondary_msg the secondary message, or %NULL.
     */
    static new_simple(msg_type: Gtk.MessageType, primary_msg: string, secondary_msg: string | null): InfoBar
    _init(config?: InfoBar_ConstructProps): void
    /**
     * Utility function to create a #GtkLabel suitable for a #GtkInfoBar. The
     * wrapping and alignment is configured. The label is also set as selectable,
     * for example to copy an error message and search an explanation on the web.
     */
    static create_label(): Gtk.Label
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
    static set_buttons_orientation(info_bar: Gtk.InfoBar, buttons_orientation: Gtk.Orientation): void
}

interface LanguageChooserDialog_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, LanguageChooser_ConstructProps, Gtk.Dialog_ConstructProps {
}

interface LanguageChooserDialog extends Atk.ImplementorIface, Gtk.Buildable, LanguageChooser {

    // Conflicting properties

    window: any

    // Own fields of Tepl-6.Tepl.LanguageChooserDialog

    parent: Gtk.Dialog
    priv: LanguageChooserDialogPrivate

    // Conflicting methods

    mnemonic_activate(...args: any[]): any
    child_notify(...args: any[]): any

    // Class property signals of Tepl-6.Tepl.LanguageChooserDialog

    connect(sigName: "notify::use-header-bar", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-header-bar", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-header-bar", ...args: any[]): void
    connect(sigName: "notify::accept-focus", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-focus", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accept-focus", ...args: any[]): void
    connect(sigName: "notify::application", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::attached-to", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attached-to", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attached-to", ...args: any[]): void
    connect(sigName: "notify::decorated", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decorated", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::decorated", ...args: any[]): void
    connect(sigName: "notify::default-height", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-height", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-height", ...args: any[]): void
    connect(sigName: "notify::default-width", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-width", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-width", ...args: any[]): void
    connect(sigName: "notify::deletable", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletable", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::deletable", ...args: any[]): void
    connect(sigName: "notify::destroy-with-parent", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destroy-with-parent", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::destroy-with-parent", ...args: any[]): void
    connect(sigName: "notify::focus-on-map", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-map", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-map", ...args: any[]): void
    connect(sigName: "notify::focus-visible", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-visible", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-visible", ...args: any[]): void
    connect(sigName: "notify::gravity", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gravity", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gravity", ...args: any[]): void
    connect(sigName: "notify::has-resize-grip", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-resize-grip", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-resize-grip", ...args: any[]): void
    connect(sigName: "notify::has-toplevel-focus", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-toplevel-focus", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-toplevel-focus", ...args: any[]): void
    connect(sigName: "notify::hide-titlebar-when-maximized", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hide-titlebar-when-maximized", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hide-titlebar-when-maximized", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::is-active", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-active", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-active", ...args: any[]): void
    connect(sigName: "notify::is-maximized", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-maximized", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-maximized", ...args: any[]): void
    connect(sigName: "notify::mnemonics-visible", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mnemonics-visible", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mnemonics-visible", ...args: any[]): void
    connect(sigName: "notify::modal", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modal", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modal", ...args: any[]): void
    connect(sigName: "notify::resizable", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resizable", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resizable", ...args: any[]): void
    connect(sigName: "notify::resize-grip-visible", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-grip-visible", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-grip-visible", ...args: any[]): void
    connect(sigName: "notify::role", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::screen", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::screen", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::screen", ...args: any[]): void
    connect(sigName: "notify::skip-pager-hint", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-pager-hint", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::skip-pager-hint", ...args: any[]): void
    connect(sigName: "notify::skip-taskbar-hint", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-taskbar-hint", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::skip-taskbar-hint", ...args: any[]): void
    connect(sigName: "notify::startup-id", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::startup-id", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::startup-id", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::transient-for", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transient-for", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transient-for", ...args: any[]): void
    connect(sigName: "notify::type", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::type-hint", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-hint", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type-hint", ...args: any[]): void
    connect(sigName: "notify::urgency-hint", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urgency-hint", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::urgency-hint", ...args: any[]): void
    connect(sigName: "notify::window-position", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-position", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window-position", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class LanguageChooserDialog extends Gtk.Dialog {

    // Own properties of Tepl-6.Tepl.LanguageChooserDialog

    static name: string
    static $gtype: GObject.GType<LanguageChooserDialog>

    // Constructors of Tepl-6.Tepl.LanguageChooserDialog

    constructor(config?: LanguageChooserDialog_ConstructProps) 
    constructor(parent: Gtk.Window | null) 
    static new(parent: Gtk.Window | null): LanguageChooserDialog

    // Overloads of new

    /**
     * Creates a new dialog box.
     * 
     * Widgets should not be packed into this #GtkWindow
     * directly, but into the `vbox` and `action_area,` as described above.
     * @constructor 
     */
    static new(): Gtk.Dialog
    /**
     * Creates a new #GtkWindow, which is a toplevel window that can
     * contain other widgets. Nearly always, the type of the window should
     * be #GTK_WINDOW_TOPLEVEL. If you’re implementing something like a
     * popup menu from scratch (which is a bad idea, just use #GtkMenu),
     * you might use #GTK_WINDOW_POPUP. #GTK_WINDOW_POPUP is not for
     * dialogs, though in some other toolkits dialogs are called “popups”.
     * In GTK+, #GTK_WINDOW_POPUP means a pop-up menu or pop-up tooltip.
     * On X11, popup windows are not controlled by the
     * [window manager][gtk-X11-arch].
     * 
     * If you simply want an undecorated window (no window borders), use
     * gtk_window_set_decorated(), don’t use #GTK_WINDOW_POPUP.
     * 
     * All top-level windows created by gtk_window_new() are stored in
     * an internal top-level window list.  This list can be obtained from
     * gtk_window_list_toplevels().  Due to Gtk+ keeping a reference to
     * the window internally, gtk_window_new() does not return a reference
     * to the caller.
     * 
     * To delete a #GtkWindow, call gtk_widget_destroy().
     * @constructor 
     * @param type type of window
     */
    static new(type: Gtk.WindowType): Gtk.Window
    _init(config?: LanguageChooserDialog_ConstructProps): void
}

interface LanguageChooserWidget_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.Orientable_ConstructProps, LanguageChooser_ConstructProps, Gtk.Grid_ConstructProps {
}

interface LanguageChooserWidget extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable, LanguageChooser {

    // Own fields of Tepl-6.Tepl.LanguageChooserWidget

    parent: Gtk.Grid
    priv: LanguageChooserWidgetPrivate

    // Conflicting methods

    child_notify(...args: any[]): any

    // Class property signals of Tepl-6.Tepl.LanguageChooserWidget

    connect(sigName: "notify::baseline-row", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-row", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-row", ...args: any[]): void
    connect(sigName: "notify::column-homogeneous", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-homogeneous", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::column-homogeneous", ...args: any[]): void
    connect(sigName: "notify::column-spacing", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-spacing", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::column-spacing", ...args: any[]): void
    connect(sigName: "notify::row-homogeneous", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-homogeneous", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::row-homogeneous", ...args: any[]): void
    connect(sigName: "notify::row-spacing", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-spacing", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::row-spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: LanguageChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class LanguageChooserWidget extends Gtk.Grid {

    // Own properties of Tepl-6.Tepl.LanguageChooserWidget

    static name: string
    static $gtype: GObject.GType<LanguageChooserWidget>

    // Constructors of Tepl-6.Tepl.LanguageChooserWidget

    constructor(config?: LanguageChooserWidget_ConstructProps) 
    constructor() 
    static new(): LanguageChooserWidget

    // Overloads of new

    /**
     * Creates a new grid widget.
     * @constructor 
     */
    static new(): Gtk.Grid
    _init(config?: LanguageChooserWidget_ConstructProps): void
}

interface Metadata_ConstructProps extends GObject.Object_ConstructProps {
}

interface Metadata {

    // Own fields of Tepl-6.Tepl.Metadata

    parent: GObject.Object
    priv: MetadataPrivate

    // Owm methods of Tepl-6.Tepl.Metadata

    /**
     * Gets the value of a metadata stored in the `metadata` object memory.
     * 
     * `key` must follow [the requirements explained in the class
     * description][tepl-metadata-keys-requirements].
     * @param key a key.
     */
    get(key: string): string | null
    /**
     * Sets or unsets `key`. This function just stores the new metadata value in the
     * `metadata` object memory.
     * 
     * `key` must follow [the requirements explained in the class
     * description][tepl-metadata-keys-requirements].
     * @param key a key.
     * @param value a nul-terminated UTF-8 string, or %NULL to unset the key.
     */
    set(key: string, value: string | null): void

    // Class property signals of Tepl-6.Tepl.Metadata

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Metadata extends GObject.Object {

    // Own properties of Tepl-6.Tepl.Metadata

    static name: string
    static $gtype: GObject.GType<Metadata>

    // Constructors of Tepl-6.Tepl.Metadata

    constructor(config?: Metadata_ConstructProps) 
    constructor() 
    static new(): Metadata
    _init(config?: Metadata_ConstructProps): void
}

interface MetadataManager_ConstructProps extends GObject.Object_ConstructProps {
}

interface MetadataManager {

    // Own fields of Tepl-6.Tepl.MetadataManager

    parent: GObject.Object
    priv: MetadataManagerPrivate

    // Owm methods of Tepl-6.Tepl.MetadataManager

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
    copy_from(for_location: Gio.File, to_metadata: Metadata): void
    /**
     * Loads synchronously all the metadata from `from_file` into `manager`.
     * 
     * A good moment to call this function is on application startup, see the
     * #GApplication::startup signal.
     * @param from_file the #GFile to load metadata from.
     */
    load_from_disk(from_file: Gio.File): boolean
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
    merge_into(for_location: Gio.File, from_metadata: Metadata): void
    /**
     * Saves synchronously all the metadata from `manager` to `to_file`. The parent
     * directories of `to_file` are created if needed.
     * 
     * A good moment to call this function is on application shutdown, see the
     * #GApplication::shutdown signal.
     * @param to_file the #GFile to save metadata to.
     * @param trim if %TRUE, tepl_metadata_manager_trim() is called with -1.
     */
    save_to_disk(to_file: Gio.File, trim: boolean): boolean
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
    trim(max_number_of_locations: number): void

    // Class property signals of Tepl-6.Tepl.MetadataManager

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MetadataManager extends GObject.Object {

    // Own properties of Tepl-6.Tepl.MetadataManager

    static name: string
    static $gtype: GObject.GType<MetadataManager>

    // Constructors of Tepl-6.Tepl.MetadataManager

    constructor(config?: MetadataManager_ConstructProps) 
    _init(config?: MetadataManager_ConstructProps): void
    static get_singleton(): MetadataManager
}

interface Notebook_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, TabGroup_ConstructProps, Gtk.Notebook_ConstructProps {
}

interface Notebook extends Atk.ImplementorIface, Gtk.Buildable, TabGroup {

    // Own fields of Tepl-6.Tepl.Notebook

    parent: Gtk.Notebook
    priv: NotebookPrivate

    // Conflicting methods

    child_notify(...args: any[]): any

    // Class property signals of Tepl-6.Tepl.Notebook

    connect(sigName: "notify::enable-popup", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-popup", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-popup", ...args: any[]): void
    connect(sigName: "notify::group-name", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::group-name", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::group-name", ...args: any[]): void
    connect(sigName: "notify::page", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::page", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::page", ...args: any[]): void
    connect(sigName: "notify::scrollable", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scrollable", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scrollable", ...args: any[]): void
    connect(sigName: "notify::show-border", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-border", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-border", ...args: any[]): void
    connect(sigName: "notify::show-tabs", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-tabs", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-tabs", ...args: any[]): void
    connect(sigName: "notify::tab-pos", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tab-pos", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tab-pos", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::active-buffer", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-buffer", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active-buffer", ...args: any[]): void
    connect(sigName: "notify::active-tab", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-tab", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active-tab", ...args: any[]): void
    connect(sigName: "notify::active-view", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-view", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active-view", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Notebook extends Gtk.Notebook {

    // Own properties of Tepl-6.Tepl.Notebook

    static name: string
    static $gtype: GObject.GType<Notebook>

    // Constructors of Tepl-6.Tepl.Notebook

    constructor(config?: Notebook_ConstructProps) 
    constructor() 
    static new(): Notebook
    _init(config?: Notebook_ConstructProps): void
}

interface Panel_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.Orientable_ConstructProps, Gtk.Grid_ConstructProps {
}

interface Panel extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own fields of Tepl-6.Tepl.Panel

    parent: Gtk.Grid
    priv: PanelPrivate

    // Owm methods of Tepl-6.Tepl.Panel

    /**
     * The equivalent of gtk_stack_add_titled(), with an optional `icon_name` to set
     * the “icon-name” #GtkStack child property.
     * @param component the child #GtkWidget to add to the #GtkStack of `panel`.
     * @param name the name for `component`.
     * @param title a human-readable title for `component`.
     * @param icon_name the icon name for `component,` or %NULL.
     */
    add_component(component: Gtk.Widget, name: string, title: string, icon_name: string | null): void
    get_stack(): Gtk.Stack
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
    provide_active_component_gsetting(settings: Gio.Settings, setting_key: string): void
    /**
     * Restores the state of `panel` according to the provided #GSettings.
     * 
     * This function must be called when all components have been added to the
     * #GtkStack of `panel`.
     */
    restore_state_from_gsettings(): void
    /**
     * Saves the current state of `panel` to the provided #GSettings.
     */
    save_state_to_gsettings(): void

    // Conflicting methods

    child_notify(...args: any[]): any

    // Class property signals of Tepl-6.Tepl.Panel

    connect(sigName: "notify::baseline-row", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-row", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-row", ...args: any[]): void
    connect(sigName: "notify::column-homogeneous", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-homogeneous", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::column-homogeneous", ...args: any[]): void
    connect(sigName: "notify::column-spacing", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-spacing", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::column-spacing", ...args: any[]): void
    connect(sigName: "notify::row-homogeneous", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-homogeneous", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::row-homogeneous", ...args: any[]): void
    connect(sigName: "notify::row-spacing", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-spacing", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::row-spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: Panel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Panel extends Gtk.Grid {

    // Own properties of Tepl-6.Tepl.Panel

    static name: string
    static $gtype: GObject.GType<Panel>

    // Constructors of Tepl-6.Tepl.Panel

    constructor(config?: Panel_ConstructProps) 
    /**
     * Creates a new #TeplPanel containing only an empty #GtkStack that can be
     * retrieved with tepl_panel_get_stack().
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #TeplPanel containing only an empty #GtkStack that can be
     * retrieved with tepl_panel_get_stack().
     * @constructor 
     */
    static new(): Panel

    // Overloads of new

    /**
     * Creates a new grid widget.
     * @constructor 
     */
    static new(): Gtk.Grid
    /**
     * Creates a new #TeplPanel intended to be used as a side panel added on the
     * left side inside a #GtkWindow.
     * 
     * It contains:
     * - A #GtkStackSwitcher.
     * - A close button that hides the #TeplPanel when clicked.
     * - A #GtkStack that can be retrieved with tepl_panel_get_stack().
     * @constructor 
     */
    static new_for_left_side_panel(): Panel
    _init(config?: Panel_ConstructProps): void
}

interface ProgressInfoBar_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.Orientable_ConstructProps, InfoBar_ConstructProps {

    // Own constructor properties of Tepl-6.Tepl.ProgressInfoBar

    /**
     * Whether to add a Cancel button in the action area of the #GtkInfoBar,
     * with the %GTK_RESPONSE_CANCEL response.
     */
    has_cancel_button?: boolean | null
}

interface ProgressInfoBar extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own properties of Tepl-6.Tepl.ProgressInfoBar

    /**
     * Whether to add a Cancel button in the action area of the #GtkInfoBar,
     * with the %GTK_RESPONSE_CANCEL response.
     */
    readonly has_cancel_button: boolean

    // Own fields of Tepl-6.Tepl.ProgressInfoBar

    parent: InfoBar
    priv: ProgressInfoBarPrivate

    // Owm methods of Tepl-6.Tepl.ProgressInfoBar

    /**
     * Calls gtk_progress_bar_pulse() on the #GtkProgressBar contained within the
     * `info_bar`.
     */
    pulse(): void
    /**
     * Calls gtk_progress_bar_set_fraction() on the #GtkProgressBar contained within
     * the `info_bar`.
     * @param fraction fraction of the task that's been completed.
     */
    set_fraction(fraction: number): void
    /**
     * Calls gtk_label_set_markup() on the #GtkLabel contained within the `info_bar`.
     * @param markup markup text.
     */
    set_markup(markup: string): void
    /**
     * Calls gtk_label_set_text() on the #GtkLabel contained within the `info_bar`.
     * @param text text.
     */
    set_text(text: string): void

    // Conflicting methods

    child_notify(...args: any[]): any

    // Class property signals of Tepl-6.Tepl.ProgressInfoBar

    connect(sigName: "notify::has-cancel-button", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-cancel-button", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-cancel-button", ...args: any[]): void
    connect(sigName: "notify::handle-close-response", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::handle-close-response", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::handle-close-response", ...args: any[]): void
    connect(sigName: "notify::icon-from-message-type", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-from-message-type", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-from-message-type", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::message-type", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-type", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::message-type", ...args: any[]): void
    connect(sigName: "notify::revealed", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::revealed", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::revealed", ...args: any[]): void
    connect(sigName: "notify::show-close-button", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-close-button", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-close-button", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ProgressInfoBar extends InfoBar {

    // Own properties of Tepl-6.Tepl.ProgressInfoBar

    static name: string
    static $gtype: GObject.GType<ProgressInfoBar>

    // Constructors of Tepl-6.Tepl.ProgressInfoBar

    constructor(config?: ProgressInfoBar_ConstructProps) 
    constructor(icon_name: string | null, markup: string | null, has_cancel_button: boolean) 
    static new(icon_name: string | null, markup: string | null, has_cancel_button: boolean): ProgressInfoBar

    // Overloads of new

    static new(): InfoBar
    /**
     * Creates a new #GtkInfoBar object.
     * @constructor 
     */
    static new(): Gtk.InfoBar
    /**
     * Creates a new #GtkBox.
     * @constructor 
     * @param orientation the box’s orientation.
     * @param spacing the number of pixels to place by default between children.
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    _init(config?: ProgressInfoBar_ConstructProps): void
}

interface SpaceDrawerPrefs_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.Orientable_ConstructProps, Gtk.Grid_ConstructProps {
}

interface SpaceDrawerPrefs extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own fields of Tepl-6.Tepl.SpaceDrawerPrefs

    parent: Gtk.Grid
    priv: SpaceDrawerPrefsPrivate

    // Owm methods of Tepl-6.Tepl.SpaceDrawerPrefs

    /**
     * Gets the #GtkSourceSpaceDrawer associated with `prefs`. The returned object is
     * guaranteed to be the same for the lifetime of `prefs`. Each
     * #TeplSpaceDrawerPrefs object has a different #GtkSourceSpaceDrawer.
     */
    get_space_drawer(): GtkSource.SpaceDrawer

    // Conflicting methods

    child_notify(...args: any[]): any

    // Class property signals of Tepl-6.Tepl.SpaceDrawerPrefs

    connect(sigName: "notify::baseline-row", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-row", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-row", ...args: any[]): void
    connect(sigName: "notify::column-homogeneous", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-homogeneous", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::column-homogeneous", ...args: any[]): void
    connect(sigName: "notify::column-spacing", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-spacing", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::column-spacing", ...args: any[]): void
    connect(sigName: "notify::row-homogeneous", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-homogeneous", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::row-homogeneous", ...args: any[]): void
    connect(sigName: "notify::row-spacing", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-spacing", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::row-spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: SpaceDrawerPrefs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SpaceDrawerPrefs extends Gtk.Grid {

    // Own properties of Tepl-6.Tepl.SpaceDrawerPrefs

    static name: string
    static $gtype: GObject.GType<SpaceDrawerPrefs>

    // Constructors of Tepl-6.Tepl.SpaceDrawerPrefs

    constructor(config?: SpaceDrawerPrefs_ConstructProps) 
    constructor() 
    static new(): SpaceDrawerPrefs

    // Overloads of new

    /**
     * Creates a new grid widget.
     * @constructor 
     */
    static new(): Gtk.Grid
    _init(config?: SpaceDrawerPrefs_ConstructProps): void
}

interface Statusbar_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.Orientable_ConstructProps, Gtk.Statusbar_ConstructProps {
}

interface Statusbar extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own fields of Tepl-6.Tepl.Statusbar

    parent: Gtk.Statusbar
    priv: StatusbarPrivate

    // Owm methods of Tepl-6.Tepl.Statusbar

    /**
     * The reverse action of tepl_statusbar_show_cursor_position(). This function
     * hides the text used to show the line and column numbers.
     */
    hide_cursor_position(): void
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
    set_tab_group(tab_group: TabGroup): void
    /**
     * Shows the line and column numbers on the right side of the `statusbar`. (So
     * messages added with gtk_statusbar_push() are still visible after calling this
     * function).
     * @param line the line number, must be >= 1.
     * @param column the column number, must be >= 1.
     */
    show_cursor_position(line: number, column: number): void

    // Conflicting methods

    remove(...args: any[]): any
    child_notify(...args: any[]): any

    // Class property signals of Tepl-6.Tepl.Statusbar

    connect(sigName: "notify::baseline-position", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Statusbar extends Gtk.Statusbar {

    // Own properties of Tepl-6.Tepl.Statusbar

    static name: string
    static $gtype: GObject.GType<Statusbar>

    // Constructors of Tepl-6.Tepl.Statusbar

    constructor(config?: Statusbar_ConstructProps) 
    constructor() 
    static new(): Statusbar

    // Overloads of new

    /**
     * Creates a new #GtkStatusbar ready for messages.
     * @constructor 
     */
    static new(): Gtk.Statusbar
    /**
     * Creates a new #GtkBox.
     * @constructor 
     * @param orientation the box’s orientation.
     * @param spacing the number of pixels to place by default between children.
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    _init(config?: Statusbar_ConstructProps): void
}

interface StyleSchemeChooserWidget_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, GtkSource.StyleSchemeChooser_ConstructProps, Gtk.Bin_ConstructProps {

    // Own constructor properties of Tepl-6.Tepl.StyleSchemeChooserWidget

    /**
     * The #GtkSourceStyleSchemeChooser:style-scheme ID, as a string. This
     * property is useful for binding it to a #GSettings key.
     * 
     * When the #GtkSourceStyleSchemeChooser:style-scheme is %NULL, this
     * property contains the empty string.
     */
    tepl_style_scheme_id?: string | null
}

interface StyleSchemeChooserWidget extends Atk.ImplementorIface, Gtk.Buildable, GtkSource.StyleSchemeChooser {

    // Own properties of Tepl-6.Tepl.StyleSchemeChooserWidget

    /**
     * The #GtkSourceStyleSchemeChooser:style-scheme ID, as a string. This
     * property is useful for binding it to a #GSettings key.
     * 
     * When the #GtkSourceStyleSchemeChooser:style-scheme is %NULL, this
     * property contains the empty string.
     */
    tepl_style_scheme_id: string

    // Own fields of Tepl-6.Tepl.StyleSchemeChooserWidget

    parent: Gtk.Bin
    priv: StyleSchemeChooserWidgetPrivate

    // Owm methods of Tepl-6.Tepl.StyleSchemeChooserWidget

    get_style_scheme_id(): string
    /**
     * Sets the #TeplStyleSchemeChooserWidget:tepl-style-scheme-id property.
     * 
     * The #GtkSourceStyleScheme is taken from the default
     * #GtkSourceStyleSchemeManager as returned by
     * gtk_source_style_scheme_manager_get_default().
     * @param style_scheme_id the new value.
     */
    set_style_scheme_id(style_scheme_id: string): void

    // Conflicting methods

    child_notify(...args: any[]): any

    // Class property signals of Tepl-6.Tepl.StyleSchemeChooserWidget

    connect(sigName: "notify::tepl-style-scheme-id", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tepl-style-scheme-id", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tepl-style-scheme-id", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::style-scheme", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style-scheme", callback: (($obj: StyleSchemeChooserWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style-scheme", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class StyleSchemeChooserWidget extends Gtk.Bin {

    // Own properties of Tepl-6.Tepl.StyleSchemeChooserWidget

    static name: string
    static $gtype: GObject.GType<StyleSchemeChooserWidget>

    // Constructors of Tepl-6.Tepl.StyleSchemeChooserWidget

    constructor(config?: StyleSchemeChooserWidget_ConstructProps) 
    constructor() 
    static new(): StyleSchemeChooserWidget
    _init(config?: StyleSchemeChooserWidget_ConstructProps): void
}

interface Tab_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.Orientable_ConstructProps, TabGroup_ConstructProps, Gtk.Grid_ConstructProps {

    // Own constructor properties of Tepl-6.Tepl.Tab

    /**
     * The #TeplView contained in the tab. When this property is set, the
     * ::pack_view virtual function is called.
     */
    view?: View | null
}

/**
 * Signal callback interface for `close-request`
 */
interface Tab_CloseRequestSignalCallback {
    ($obj: Tab): void
}

interface Tab extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable, TabGroup {

    // Own properties of Tepl-6.Tepl.Tab

    /**
     * The #TeplView contained in the tab. When this property is set, the
     * ::pack_view virtual function is called.
     */
    readonly view: View

    // Own fields of Tepl-6.Tepl.Tab

    parent: Gtk.Grid
    priv: TabPrivate

    // Owm methods of Tepl-6.Tepl.Tab

    /**
     * Attaches `info_bar` to `tab`.
     * 
     * This function calls the ::pack_info_bar virtual function.
     * @param info_bar a #GtkInfoBar.
     */
    add_info_bar(info_bar: Gtk.InfoBar): void
    /**
     * A convenience function that calls gtk_text_view_get_buffer() on the
     * #TeplTab:view associated with the `tab`.
     */
    get_buffer(): Buffer
    /**
     * Gets the #TeplGotoLineBar widget belonging to `tab`. The #TeplGotoLineBar must
     * not be destroyed by the application, the purpose of this function is to
     * show/hide the widget.
     */
    get_goto_line_bar(): GotoLineBar
    get_view(): View
    /**
     * Unconditionally loads a file in `tab,` regardless if there are unsaved changes
     * in the #GtkTextBuffer. The previous buffer content is lost.
     * 
     * This function is asynchronous, there is no way to know when the file loading
     * is finished.
     * @param location a #GFile.
     */
    load_file(location: Gio.File): void
    /**
     * Shows a #GtkFileChooser to save the `tab` to a different location, creates an
     * appropriate #TeplFileSaver and asynchronously runs it.
     * 
     * See the #GAsyncResult documentation to know how to use this function.
     * @param callback a #GAsyncReadyCallback to call when the request is   satisfied.
     */
    save_as_async(callback: Gio.AsyncReadyCallback | null): void
    /**
     * The same as tepl_tab_save_as_async(), but without callback.
     * 
     * This function is useful when you don't need to know:
     * - when the operation is finished;
     * - and whether the operation ran successfully.
     */
    save_as_async_simple(): void
    /**
     * Finishes a tab saving started with tepl_tab_save_as_async().
     * @param result a #GAsyncResult.
     */
    save_as_finish(result: Gio.AsyncResult): boolean
    /**
     * Saves asynchronously the content of the `tab`. The #TeplFile:location must not
     * be %NULL.
     * 
     * See the #GAsyncResult documentation to know how to use this function.
     * @param callback a #GAsyncReadyCallback to call when the request is   satisfied.
     */
    save_async(callback: Gio.AsyncReadyCallback | null): void
    /**
     * The same as tepl_tab_save_async(), but without callback.
     * 
     * This function is useful when you don't need to know:
     * - when the operation is finished;
     * - and whether the operation ran successfully.
     */
    save_async_simple(): void
    /**
     * Finishes a tab saving started with tepl_tab_save_async().
     * @param result a #GAsyncResult.
     */
    save_finish(result: Gio.AsyncResult): boolean

    // Conflicting methods

    child_notify(...args: any[]): any

    // Own virtual methods of Tepl-6.Tepl.Tab

    vfunc_close_request(): void
    vfunc_pack_goto_line_bar(goto_line_bar: GotoLineBar): void
    vfunc_pack_info_bar(info_bar: Gtk.InfoBar): void
    vfunc_pack_view(view: View): void

    // Own signals of Tepl-6.Tepl.Tab

    connect(sigName: "close-request", callback: Tab_CloseRequestSignalCallback): number
    connect_after(sigName: "close-request", callback: Tab_CloseRequestSignalCallback): number
    emit(sigName: "close-request", ...args: any[]): void

    // Class property signals of Tepl-6.Tepl.Tab

    connect(sigName: "notify::view", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::view", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::view", ...args: any[]): void
    connect(sigName: "notify::baseline-row", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-row", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-row", ...args: any[]): void
    connect(sigName: "notify::column-homogeneous", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-homogeneous", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::column-homogeneous", ...args: any[]): void
    connect(sigName: "notify::column-spacing", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-spacing", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::column-spacing", ...args: any[]): void
    connect(sigName: "notify::row-homogeneous", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-homogeneous", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::row-homogeneous", ...args: any[]): void
    connect(sigName: "notify::row-spacing", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-spacing", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::row-spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: "notify::active-buffer", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-buffer", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active-buffer", ...args: any[]): void
    connect(sigName: "notify::active-tab", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-tab", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active-tab", ...args: any[]): void
    connect(sigName: "notify::active-view", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-view", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active-view", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Tab extends Gtk.Grid {

    // Own properties of Tepl-6.Tepl.Tab

    static name: string
    static $gtype: GObject.GType<Tab>

    // Constructors of Tepl-6.Tepl.Tab

    constructor(config?: Tab_ConstructProps) 
    /**
     * Creates a new #TeplTab with a new #TeplView. The new #TeplView can be
     * retrieved afterwards with tepl_tab_get_view().
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #TeplTab with a new #TeplView. The new #TeplView can be
     * retrieved afterwards with tepl_tab_get_view().
     * @constructor 
     */
    static new(): Tab

    // Overloads of new

    /**
     * Creates a new grid widget.
     * @constructor 
     */
    static new(): Gtk.Grid
    static new_with_view(view: View): Tab
    _init(config?: Tab_ConstructProps): void
}

interface TabLabel_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.Orientable_ConstructProps, Gtk.Grid_ConstructProps {

    // Own constructor properties of Tepl-6.Tepl.TabLabel

    /**
     * The associated #TeplTab. #TeplTabLabel has a weak reference to the
     * #TeplTab.
     */
    tab?: Tab | null
}

interface TabLabel extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own properties of Tepl-6.Tepl.TabLabel

    /**
     * The associated #TeplTab. #TeplTabLabel has a weak reference to the
     * #TeplTab.
     */
    readonly tab: Tab

    // Own fields of Tepl-6.Tepl.TabLabel

    parent: Gtk.Grid
    priv: TabLabelPrivate

    // Owm methods of Tepl-6.Tepl.TabLabel

    get_tab(): Tab | null
    /**
     * Asks #TeplTabLabel to update its tooltip. The ::get_tooltip_markup virtual
     * function is called and the result is set with
     * gtk_widget_set_tooltip_markup().
     */
    update_tooltip(): void

    // Conflicting methods

    child_notify(...args: any[]): any

    // Own virtual methods of Tepl-6.Tepl.TabLabel

    vfunc_get_tooltip_markup(): string

    // Class property signals of Tepl-6.Tepl.TabLabel

    connect(sigName: "notify::tab", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tab", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tab", ...args: any[]): void
    connect(sigName: "notify::baseline-row", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-row", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-row", ...args: any[]): void
    connect(sigName: "notify::column-homogeneous", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-homogeneous", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::column-homogeneous", ...args: any[]): void
    connect(sigName: "notify::column-spacing", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-spacing", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::column-spacing", ...args: any[]): void
    connect(sigName: "notify::row-homogeneous", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-homogeneous", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::row-homogeneous", ...args: any[]): void
    connect(sigName: "notify::row-spacing", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-spacing", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::row-spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TabLabel extends Gtk.Grid {

    // Own properties of Tepl-6.Tepl.TabLabel

    static name: string
    static $gtype: GObject.GType<TabLabel>

    // Constructors of Tepl-6.Tepl.TabLabel

    constructor(config?: TabLabel_ConstructProps) 
    constructor(tab: Tab) 
    static new(tab: Tab): TabLabel

    // Overloads of new

    /**
     * Creates a new grid widget.
     * @constructor 
     */
    static new(): Gtk.Grid
    _init(config?: TabLabel_ConstructProps): void
}

interface View_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.Scrollable_ConstructProps, GtkSource.View_ConstructProps {
}

interface View extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {

    // Conflicting properties

    parent: any

    // Own fields of Tepl-6.Tepl.View

    parent_instance: GtkSource.View

    // Owm methods of Tepl-6.Tepl.View

    /**
     * Copies the clipboard.
     */
    copy_clipboard(): void
    /**
     * Cuts the clipboard and then scrolls to the cursor position.
     */
    cut_clipboard(): void
    /**
     * Deletes the text currently selected in the #GtkTextBuffer associated
     * to the view and then scrolls to the cursor position.
     */
    delete_selection(): void
    /**
     * Places the cursor at the position returned by
     * gtk_text_buffer_get_iter_at_line(), and scrolls to that position.
     * @param line a line number, counting from 0.
     */
    goto_line(line: number): boolean
    /**
     * Places the cursor at the position returned by
     * gtk_text_buffer_get_iter_at_line_offset(), and scrolls to that position.
     * @param line a line number, counting from 0.
     * @param line_offset the line offset, in characters (not bytes).
     */
    goto_line_offset(line: number, line_offset: number): boolean
    /**
     * Pastes the clipboard and then scrolls to the cursor position.
     */
    paste_clipboard(): void
    /**
     * Scrolls the `view` to the cursor position.
     */
    scroll_to_cursor(): void
    /**
     * Selects all the text.
     */
    select_all(): void
    /**
     * Selects the lines between `start_line` and `end_line` included, counting from
     * zero. And then scrolls to the cursor.
     * 
     * Possible use-case: line numbers coming from a compilation output, to go to
     * the place where a warning or error occurred.
     * @param start_line start of the region to select.
     * @param end_line end of the region to select.
     */
    select_lines(start_line: number, end_line: number): void

    // Conflicting methods

    get_window(...args: any[]): any
    child_notify(...args: any[]): any

    // Class property signals of Tepl-6.Tepl.View

    connect(sigName: "notify::auto-indent", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-indent", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::auto-indent", ...args: any[]): void
    connect(sigName: "notify::background-pattern", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-pattern", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-pattern", ...args: any[]): void
    connect(sigName: "notify::completion", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::completion", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::completion", ...args: any[]): void
    connect(sigName: "notify::highlight-current-line", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::highlight-current-line", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::highlight-current-line", ...args: any[]): void
    connect(sigName: "notify::indent-on-tab", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent-on-tab", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::indent-on-tab", ...args: any[]): void
    connect(sigName: "notify::indent-width", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent-width", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::indent-width", ...args: any[]): void
    connect(sigName: "notify::insert-spaces-instead-of-tabs", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::insert-spaces-instead-of-tabs", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::insert-spaces-instead-of-tabs", ...args: any[]): void
    connect(sigName: "notify::right-margin-position", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::right-margin-position", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::right-margin-position", ...args: any[]): void
    connect(sigName: "notify::show-line-marks", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-line-marks", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-line-marks", ...args: any[]): void
    connect(sigName: "notify::show-line-numbers", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-line-numbers", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-line-numbers", ...args: any[]): void
    connect(sigName: "notify::show-right-margin", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-right-margin", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-right-margin", ...args: any[]): void
    connect(sigName: "notify::smart-backspace", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-backspace", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smart-backspace", ...args: any[]): void
    connect(sigName: "notify::smart-home-end", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-home-end", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smart-home-end", ...args: any[]): void
    connect(sigName: "notify::space-drawer", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::space-drawer", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::space-drawer", ...args: any[]): void
    connect(sigName: "notify::tab-width", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tab-width", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tab-width", ...args: any[]): void
    connect(sigName: "notify::accepts-tab", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accepts-tab", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accepts-tab", ...args: any[]): void
    connect(sigName: "notify::bottom-margin", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bottom-margin", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bottom-margin", ...args: any[]): void
    connect(sigName: "notify::buffer", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::cursor-visible", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor-visible", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor-visible", ...args: any[]): void
    connect(sigName: "notify::editable", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editable", ...args: any[]): void
    connect(sigName: "notify::im-module", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-module", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::im-module", ...args: any[]): void
    connect(sigName: "notify::indent", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::indent", ...args: any[]): void
    connect(sigName: "notify::input-hints", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-hints", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::input-hints", ...args: any[]): void
    connect(sigName: "notify::input-purpose", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-purpose", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::input-purpose", ...args: any[]): void
    connect(sigName: "notify::justification", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::justification", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::justification", ...args: any[]): void
    connect(sigName: "notify::left-margin", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::left-margin", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::left-margin", ...args: any[]): void
    connect(sigName: "notify::monospace", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::monospace", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::monospace", ...args: any[]): void
    connect(sigName: "notify::overwrite", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overwrite", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overwrite", ...args: any[]): void
    connect(sigName: "notify::pixels-above-lines", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-above-lines", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pixels-above-lines", ...args: any[]): void
    connect(sigName: "notify::pixels-below-lines", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-below-lines", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pixels-below-lines", ...args: any[]): void
    connect(sigName: "notify::pixels-inside-wrap", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-inside-wrap", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pixels-inside-wrap", ...args: any[]): void
    connect(sigName: "notify::populate-all", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::populate-all", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::populate-all", ...args: any[]): void
    connect(sigName: "notify::right-margin", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::right-margin", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::right-margin", ...args: any[]): void
    connect(sigName: "notify::tabs", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tabs", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tabs", ...args: any[]): void
    connect(sigName: "notify::top-margin", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::top-margin", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::top-margin", ...args: any[]): void
    connect(sigName: "notify::wrap-mode", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wrap-mode", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::wrap-mode", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::hadjustment", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hadjustment", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hadjustment", ...args: any[]): void
    connect(sigName: "notify::hscroll-policy", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hscroll-policy", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hscroll-policy", ...args: any[]): void
    connect(sigName: "notify::vadjustment", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vadjustment", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vadjustment", ...args: any[]): void
    connect(sigName: "notify::vscroll-policy", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vscroll-policy", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vscroll-policy", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class View extends GtkSource.View {

    // Own properties of Tepl-6.Tepl.View

    static name: string
    static $gtype: GObject.GType<View>

    // Constructors of Tepl-6.Tepl.View

    constructor(config?: View_ConstructProps) 
    /**
     * Creates a new #TeplView.
     * 
     * By default, an empty #TeplBuffer will be lazily created and can be retrieved
     * with gtk_text_view_get_buffer().
     * 
     * If you want to specify your own buffer, either override the
     * #GtkTextViewClass create_buffer factory method, or use
     * tepl_view_new_with_buffer().
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #TeplView.
     * 
     * By default, an empty #TeplBuffer will be lazily created and can be retrieved
     * with gtk_text_view_get_buffer().
     * 
     * If you want to specify your own buffer, either override the
     * #GtkTextViewClass create_buffer factory method, or use
     * tepl_view_new_with_buffer().
     * @constructor 
     */
    static new(): View
    /**
     * Creates a new #TeplView widget displaying the buffer `buffer`.
     * @constructor 
     * @param buffer a #GtkSourceBuffer or a subclass of it.
     */
    static new_with_buffer(buffer: GtkSource.Buffer): View

    // Overloads of new_with_buffer

    /**
     * Creates a new #GtkSourceView widget displaying the buffer
     * `buffer`. One buffer can be shared among many widgets.
     * @constructor 
     * @param buffer a #GtkSourceBuffer.
     */
    static new_with_buffer(buffer: GtkSource.Buffer): GtkSource.View
    /**
     * Creates a new #GtkTextView widget displaying the buffer
     * `buffer`. One buffer can be shared among many widgets.
     * `buffer` may be %NULL to create a default buffer, in which case
     * this function is equivalent to gtk_text_view_new(). The
     * text view adds its own reference count to the buffer; it does not
     * take over an existing reference.
     * @constructor 
     * @param buffer a #GtkTextBuffer
     */
    static new_with_buffer(buffer: Gtk.TextBuffer): Gtk.TextView
    _init(config?: View_ConstructProps): void
}

interface AbstractFactoryClass {

    // Own fields of Tepl-6.Tepl.AbstractFactoryClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: GObject.ObjectClass
    create_main_window: (factory: AbstractFactory, app: Gtk.Application) => Gtk.ApplicationWindow | null
    create_tab: (factory: AbstractFactory) => Tab
    create_tab_label: (factory: AbstractFactory, tab: Tab) => Gtk.Widget | null
    create_file: (factory: AbstractFactory) => File
    create_metadata_manager_file: (factory: AbstractFactory) => Gio.File | null
}

abstract class AbstractFactoryClass {

    // Own properties of Tepl-6.Tepl.AbstractFactoryClass

    static name: string
}

interface ApplicationClass {

    // Own fields of Tepl-6.Tepl.ApplicationClass

    parent_class: GObject.ObjectClass
    padding: object[]
}

abstract class ApplicationClass {

    // Own properties of Tepl-6.Tepl.ApplicationClass

    static name: string
}

interface ApplicationPrivate {
}

class ApplicationPrivate {

    // Own properties of Tepl-6.Tepl.ApplicationPrivate

    static name: string
}

interface ApplicationWindowClass {

    // Own fields of Tepl-6.Tepl.ApplicationWindowClass

    parent_class: GObject.ObjectClass
    padding: object[]
}

abstract class ApplicationWindowClass {

    // Own properties of Tepl-6.Tepl.ApplicationWindowClass

    static name: string
}

interface ApplicationWindowPrivate {
}

class ApplicationWindowPrivate {

    // Own properties of Tepl-6.Tepl.ApplicationWindowPrivate

    static name: string
}

interface BufferClass {

    // Own fields of Tepl-6.Tepl.BufferClass

    parent_class: GtkSource.BufferClass
    tepl_cursor_moved: (buffer: Buffer) => void
    padding: object[]
}

abstract class BufferClass {

    // Own properties of Tepl-6.Tepl.BufferClass

    static name: string
}

interface FileClass {

    // Own fields of Tepl-6.Tepl.FileClass

    parent_class: GObject.ObjectClass
    padding: object[]
}

abstract class FileClass {

    // Own properties of Tepl-6.Tepl.FileClass

    static name: string
}

interface FileLoaderClass {

    // Own fields of Tepl-6.Tepl.FileLoaderClass

    parent_class: GObject.ObjectClass
    padding: object[]
}

abstract class FileLoaderClass {

    // Own properties of Tepl-6.Tepl.FileLoaderClass

    static name: string
}

interface FileLoaderPrivate {
}

class FileLoaderPrivate {

    // Own properties of Tepl-6.Tepl.FileLoaderPrivate

    static name: string
}

interface FilePrivate {
}

class FilePrivate {

    // Own properties of Tepl-6.Tepl.FilePrivate

    static name: string
}

interface FileSaverClass {

    // Own fields of Tepl-6.Tepl.FileSaverClass

    parent_class: GObject.ObjectClass
    padding: object[]
}

abstract class FileSaverClass {

    // Own properties of Tepl-6.Tepl.FileSaverClass

    static name: string
}

interface FileSaverPrivate {
}

class FileSaverPrivate {

    // Own properties of Tepl-6.Tepl.FileSaverPrivate

    static name: string
}

interface FoldRegionClass {

    // Own fields of Tepl-6.Tepl.FoldRegionClass

    parent_class: GObject.ObjectClass
    padding: object[]
}

abstract class FoldRegionClass {

    // Own properties of Tepl-6.Tepl.FoldRegionClass

    static name: string
}

interface GotoLineBarClass {

    // Own fields of Tepl-6.Tepl.GotoLineBarClass

    parent_class: Gtk.GridClass
    padding: object[]
}

abstract class GotoLineBarClass {

    // Own properties of Tepl-6.Tepl.GotoLineBarClass

    static name: string
}

interface GotoLineBarPrivate {
}

class GotoLineBarPrivate {

    // Own properties of Tepl-6.Tepl.GotoLineBarPrivate

    static name: string
}

interface GutterRendererFoldsClass {

    // Own fields of Tepl-6.Tepl.GutterRendererFoldsClass

    parent_class: GtkSource.GutterRendererClass
    padding: object[]
}

abstract class GutterRendererFoldsClass {

    // Own properties of Tepl-6.Tepl.GutterRendererFoldsClass

    static name: string
}

interface InfoBarClass {

    // Own fields of Tepl-6.Tepl.InfoBarClass

    parent_class: Gtk.InfoBarClass
    padding: object[]
}

abstract class InfoBarClass {

    // Own properties of Tepl-6.Tepl.InfoBarClass

    static name: string
}

interface InfoBarPrivate {
}

class InfoBarPrivate {

    // Own properties of Tepl-6.Tepl.InfoBarPrivate

    static name: string
}

interface LanguageChooserDialogClass {

    // Own fields of Tepl-6.Tepl.LanguageChooserDialogClass

    parent_class: Gtk.DialogClass
    padding: object[]
}

abstract class LanguageChooserDialogClass {

    // Own properties of Tepl-6.Tepl.LanguageChooserDialogClass

    static name: string
}

interface LanguageChooserDialogPrivate {
}

class LanguageChooserDialogPrivate {

    // Own properties of Tepl-6.Tepl.LanguageChooserDialogPrivate

    static name: string
}

interface LanguageChooserInterface {

    // Own fields of Tepl-6.Tepl.LanguageChooserInterface

    /**
     * The parent interface.
     * @field 
     */
    parent_interface: GObject.TypeInterface
    select_language: (chooser: LanguageChooser, language: GtkSource.Language | null) => void
    language_activated: (chooser: LanguageChooser, language: GtkSource.Language) => void
}

/**
 * The virtual function table for #TeplLanguageChooser.
 * @record 
 */
abstract class LanguageChooserInterface {

    // Own properties of Tepl-6.Tepl.LanguageChooserInterface

    static name: string
}

interface LanguageChooserWidgetClass {

    // Own fields of Tepl-6.Tepl.LanguageChooserWidgetClass

    parent_class: Gtk.GridClass
    padding: object[]
}

abstract class LanguageChooserWidgetClass {

    // Own properties of Tepl-6.Tepl.LanguageChooserWidgetClass

    static name: string
}

interface LanguageChooserWidgetPrivate {
}

class LanguageChooserWidgetPrivate {

    // Own properties of Tepl-6.Tepl.LanguageChooserWidgetPrivate

    static name: string
}

interface MetadataClass {

    // Own fields of Tepl-6.Tepl.MetadataClass

    parent_class: GObject.ObjectClass
    padding: object[]
}

abstract class MetadataClass {

    // Own properties of Tepl-6.Tepl.MetadataClass

    static name: string
}

interface MetadataManagerClass {

    // Own fields of Tepl-6.Tepl.MetadataManagerClass

    parent_class: GObject.ObjectClass
    padding: object[]
}

abstract class MetadataManagerClass {

    // Own properties of Tepl-6.Tepl.MetadataManagerClass

    static name: string
}

interface MetadataManagerPrivate {
}

class MetadataManagerPrivate {

    // Own properties of Tepl-6.Tepl.MetadataManagerPrivate

    static name: string
}

interface MetadataPrivate {
}

class MetadataPrivate {

    // Own properties of Tepl-6.Tepl.MetadataPrivate

    static name: string
}

interface NotebookClass {

    // Own fields of Tepl-6.Tepl.NotebookClass

    parent_class: Gtk.NotebookClass
    padding: object[]
}

abstract class NotebookClass {

    // Own properties of Tepl-6.Tepl.NotebookClass

    static name: string
}

interface NotebookPrivate {
}

class NotebookPrivate {

    // Own properties of Tepl-6.Tepl.NotebookPrivate

    static name: string
}

interface PanelClass {

    // Own fields of Tepl-6.Tepl.PanelClass

    parent_class: Gtk.GridClass
    padding: object[]
}

abstract class PanelClass {

    // Own properties of Tepl-6.Tepl.PanelClass

    static name: string
}

interface PanelPrivate {
}

class PanelPrivate {

    // Own properties of Tepl-6.Tepl.PanelPrivate

    static name: string
}

interface ProgressInfoBarClass {

    // Own fields of Tepl-6.Tepl.ProgressInfoBarClass

    parent_class: InfoBarClass
    padding: object[]
}

abstract class ProgressInfoBarClass {

    // Own properties of Tepl-6.Tepl.ProgressInfoBarClass

    static name: string
}

interface ProgressInfoBarPrivate {
}

class ProgressInfoBarPrivate {

    // Own properties of Tepl-6.Tepl.ProgressInfoBarPrivate

    static name: string
}

interface SignalGroup {
}

class SignalGroup {

    // Own properties of Tepl-6.Tepl.SignalGroup

    static name: string
}

interface SpaceDrawerPrefsClass {

    // Own fields of Tepl-6.Tepl.SpaceDrawerPrefsClass

    parent_class: Gtk.GridClass
    padding: object[]
}

abstract class SpaceDrawerPrefsClass {

    // Own properties of Tepl-6.Tepl.SpaceDrawerPrefsClass

    static name: string
}

interface SpaceDrawerPrefsPrivate {
}

class SpaceDrawerPrefsPrivate {

    // Own properties of Tepl-6.Tepl.SpaceDrawerPrefsPrivate

    static name: string
}

interface StatusbarClass {

    // Own fields of Tepl-6.Tepl.StatusbarClass

    parent_class: Gtk.StatusbarClass
    padding: object[]
}

abstract class StatusbarClass {

    // Own properties of Tepl-6.Tepl.StatusbarClass

    static name: string
}

interface StatusbarPrivate {
}

class StatusbarPrivate {

    // Own properties of Tepl-6.Tepl.StatusbarPrivate

    static name: string
}

interface StyleSchemeChooserWidgetClass {

    // Own fields of Tepl-6.Tepl.StyleSchemeChooserWidgetClass

    parent_class: Gtk.BinClass
    padding: object[]
}

abstract class StyleSchemeChooserWidgetClass {

    // Own properties of Tepl-6.Tepl.StyleSchemeChooserWidgetClass

    static name: string
}

interface StyleSchemeChooserWidgetPrivate {
}

class StyleSchemeChooserWidgetPrivate {

    // Own properties of Tepl-6.Tepl.StyleSchemeChooserWidgetPrivate

    static name: string
}

interface TabClass {

    // Own fields of Tepl-6.Tepl.TabClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gtk.GridClass
    pack_view: (tab: Tab, view: View) => void
    pack_info_bar: (tab: Tab, info_bar: Gtk.InfoBar) => void
    pack_goto_line_bar: (tab: Tab, goto_line_bar: GotoLineBar) => void
    close_request: (tab: Tab) => void
}

abstract class TabClass {

    // Own properties of Tepl-6.Tepl.TabClass

    static name: string
}

interface TabGroupInterface {

    // Own fields of Tepl-6.Tepl.TabGroupInterface

    /**
     * The parent interface.
     * @field 
     */
    parent_interface: GObject.TypeInterface
    get_tabs: (tab_group: TabGroup) => Tab[]
    get_active_tab: (tab_group: TabGroup) => Tab | null
    set_active_tab: (tab_group: TabGroup, tab: Tab) => void
    append_tab_vfunc: (tab_group: TabGroup, tab: Tab) => void
}

/**
 * The virtual function table for #TeplTabGroup. When implementing one of the
 * vfunc, you can assume that the pre-conditions are already checked (the
 * parameters are valid).
 * @record 
 */
abstract class TabGroupInterface {

    // Own properties of Tepl-6.Tepl.TabGroupInterface

    static name: string
}

interface TabLabelClass {

    // Own fields of Tepl-6.Tepl.TabLabelClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gtk.GridClass
    get_tooltip_markup: (tab_label: TabLabel) => string
}

abstract class TabLabelClass {

    // Own properties of Tepl-6.Tepl.TabLabelClass

    static name: string
}

interface TabLabelPrivate {
}

class TabLabelPrivate {

    // Own properties of Tepl-6.Tepl.TabLabelPrivate

    static name: string
}

interface TabPrivate {
}

class TabPrivate {

    // Own properties of Tepl-6.Tepl.TabPrivate

    static name: string
}

interface ViewClass {

    // Own fields of Tepl-6.Tepl.ViewClass

    parent_class: GtkSource.ViewClass
    padding: object[]
}

abstract class ViewClass {

    // Own properties of Tepl-6.Tepl.ViewClass

    static name: string
}

}
export default Tepl;