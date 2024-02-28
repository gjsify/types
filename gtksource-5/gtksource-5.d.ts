/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gtksource-5-ambient.d.ts';
import './gtksource-5-import.d.ts';
/**
 * GtkSource-5
 */

import type Gtk from '@girs/gtk-4.0';
import type Gsk from '@girs/gsk-4.0';
import type Graphene from '@girs/graphene-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Gdk from '@girs/gdk-4.0';
import type cairo from '@girs/cairo-1.0';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace GtkSource {
    enum BackgroundPatternType {
        /**
         * no pattern
         */
        NONE,
        /**
         * grid pattern
         */
        GRID,
    }
    enum BracketMatchType {
        /**
         * there is no bracket to match.
         */
        NONE,
        /**
         * matching a bracket
         *  failed because the maximum range was reached.
         */
        OUT_OF_RANGE,
        /**
         * a matching bracket was not found.
         */
        NOT_FOUND,
        /**
         * a matching bracket was found.
         */
        FOUND,
    }
    enum ChangeCaseType {
        /**
         * change case to lowercase.
         */
        LOWER,
        /**
         * change case to uppercase.
         */
        UPPER,
        /**
         * toggle case of each character.
         */
        TOGGLE,
        /**
         * capitalize each word.
         */
        TITLE,
    }
    enum CompletionActivation {
        NONE,
        INTERACTIVE,
        USER_REQUESTED,
    }
    enum CompletionColumn {
        ICON,
        BEFORE,
        TYPED_TEXT,
        AFTER,
        COMMENT,
        DETAILS,
    }
    enum CompressionType {
        /**
         * plain text.
         */
        NONE,
        /**
         * gzip compression.
         */
        GZIP,
    }
    /**
     * An error code used with the %GTK_SOURCE_FILE_LOADER_ERROR domain.
     */
    class FileLoaderError extends GLib.Error {
        // Own fields of GtkSource-5.FileLoaderError

        /**
         * The file is too big.
         */
        TOO_BIG: number;
        /**
         * It is not
         * possible to detect the encoding automatically.
         */
        ENCODING_AUTO_DETECTION_FAILED: number;
        /**
         * There was an encoding
         * conversion error and it was needed to use a fallback character.
         */
        CONVERSION_FALLBACK: number;

        // Constructors of GtkSource-5.FileLoaderError

        constructor(options: { message: string; code: number });

        // Owm methods of GtkSource-5.FileLoaderError

        static quark(): GLib.Quark;
    }

    /**
     * An error code used with the %GTK_SOURCE_FILE_SAVER_ERROR domain.
     */
    class FileSaverError extends GLib.Error {
        // Own fields of GtkSource-5.FileSaverError

        /**
         * The buffer contains invalid
         *   characters.
         */
        INVALID_CHARS: number;
        /**
         * The file is externally
         *   modified.
         */
        EXTERNALLY_MODIFIED: number;

        // Constructors of GtkSource-5.FileSaverError

        constructor(options: { message: string; code: number });

        // Owm methods of GtkSource-5.FileSaverError

        static quark(): GLib.Quark;
    }

    /**
     * The alignment mode of the renderer, when a cell spans multiple lines (due to
     * text wrapping).
     */
    enum GutterRendererAlignmentMode {
        /**
         * The full cell.
         */
        CELL,
        /**
         * The first line.
         */
        FIRST,
        /**
         * The last line.
         */
        LAST,
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
    enum SmartHomeEndType {
        /**
         * smart-home-end disabled.
         */
        DISABLED,
        /**
         * move to the first/last
         * non-whitespace character on the first press of the HOME/END keys and
         * to the beginning/end of the line on the second press.
         */
        BEFORE,
        /**
         * move to the beginning/end of the
         * line on the first press of the HOME/END keys and to the first/last
         * non-whitespace character on the second press.
         */
        AFTER,
        /**
         * always move to the first/last
         * non-whitespace character when the HOME/END keys are pressed.
         */
        ALWAYS,
    }
    enum ViewGutterPosition {
        /**
         * the gutter position of the lines
         * renderer
         */
        LINES,
        /**
         * the gutter position of the marks
         * renderer
         */
        MARKS,
    }
    /**
     * Like gtk_source_get_major_version(), but from the headers used at
     * application compile time, rather than from the library linked
     * against at application run time.
     */
    const MAJOR_VERSION: number;
    /**
     * Like gtk_source_get_micro_version(), but from the headers used at
     * application compile time, rather than from the library linked
     * against at application run time.
     */
    const MICRO_VERSION: number;
    /**
     * Like gtk_source_get_minor_version(), but from the headers used at
     * application compile time, rather than from the library linked
     * against at application run time.
     */
    const MINOR_VERSION: number;
    /**
     * Like GTK_SOURCE_CHECK_VERSION, but the check for gtk_source_check_version is
     * at runtime instead of compile time. This is useful for compiling
     * against older versions of GtkSourceView, but using features from newer
     * versions.
     * @param major the major version to check
     * @param minor the minor version to check
     * @param micro the micro version to check
     * @returns %TRUE if the version of the GtkSourceView currently loaded is the same as or newer than the passed-in version.
     */
    function check_version(major: number, minor: number, micro: number): boolean;
    /**
     * Gets all encodings.
     * @returns a list of all #GtkSourceEncoding's. Free with g_slist_free().
     */
    function encoding_get_all(): Encoding[];
    /**
     * Gets the #GtkSourceEncoding for the current locale.
     *
     * See also [func`GLib`.get_charset].
     * @returns the current locale encoding.
     */
    function encoding_get_current(): Encoding;
    /**
     * Gets the list of default candidate encodings to try when loading a file.
     *
     * See [method`FileLoader`.set_candidate_encodings].
     *
     * This function returns a different list depending on the current locale (i.e.
     * language, country and default encoding). The UTF-8 encoding and the current
     * locale encoding are guaranteed to be present in the returned list.
     * @returns the list of default candidate encodings. Free with g_slist_free().
     */
    function encoding_get_default_candidates(): Encoding[];
    /**
     * Gets a #GtkSourceEncoding from a character set such as "UTF-8" or
     * "ISO-8859-1".
     * @param charset a character set.
     * @returns the corresponding #GtkSourceEncoding, or %NULL if not found.
     */
    function encoding_get_from_charset(charset: string): Encoding | null;
    function encoding_get_utf8(): Encoding;
    function file_loader_error_quark(): GLib.Quark;
    function file_saver_error_quark(): GLib.Quark;
    /**
     * Free the resources allocated by GtkSourceView. For example it unrefs the
     * singleton objects.
     *
     * It is not mandatory to call this function, it's just to be friendlier to
     * memory debugging tools. This function is meant to be called at the end of
     * main(). It can be called several times.
     */
    function finalize(): void;
    /**
     * Returns the major version number of the GtkSourceView library.
     * (e.g. in GtkSourceView version 3.20.0 this is 3.)
     *
     * This function is in the library, so it represents the GtkSourceView library
     * your code is running against. Contrast with the #GTK_SOURCE_MAJOR_VERSION
     * macro, which represents the major version of the GtkSourceView headers you
     * have included when compiling your code.
     * @returns the major version number of the GtkSourceView library
     */
    function get_major_version(): number;
    /**
     * Returns the micro version number of the GtkSourceView library.
     * (e.g. in GtkSourceView version 3.20.0 this is 0.)
     *
     * This function is in the library, so it represents the GtkSourceView library
     * your code is running against. Contrast with the #GTK_SOURCE_MICRO_VERSION
     * macro, which represents the micro version of the GtkSourceView headers you
     * have included when compiling your code.
     * @returns the micro version number of the GtkSourceView library
     */
    function get_micro_version(): number;
    /**
     * Returns the minor version number of the GtkSourceView library.
     * (e.g. in GtkSourceView version 3.20.0 this is 20.)
     *
     * This function is in the library, so it represents the GtkSourceView library
     * your code is running against. Contrast with the #GTK_SOURCE_MINOR_VERSION
     * macro, which represents the minor version of the GtkSourceView headers you
     * have included when compiling your code.
     * @returns the minor version number of the GtkSourceView library
     */
    function get_minor_version(): number;
    /**
     * Initializes the GtkSourceView library (e.g. for the internationalization).
     *
     * This function can be called several times, but is meant to be called at the
     * beginning of main(), before any other GtkSourceView function call.
     */
    function init(): void;
    /**
     * Simplified version of [func`scheduler_add_full]`.
     * @param callback the callback to execute
     */
    function scheduler_add(callback: SchedulerCallback): number;
    /**
     * Adds a new callback that will be executed as time permits on the main thread.
     *
     * This is useful when you need to do a lot of background work but want to do
     * it incrementally.
     *
     * `callback` will be provided a deadline that it should complete it's work by
     * (or near) and can be checked using [func`GLib`.get_monotonic_time] for comparison.
     *
     * Use [func`scheduler_remove]` to remove the handler.
     * @param callback the callback to execute
     */
    function scheduler_add_full(callback: SchedulerCallback): number;
    /**
     * Removes a scheduler callback previously registered with
     * [func`scheduler_add]` or [func`scheduler_add_full]`.
     * @param handler_id the handler id
     */
    function scheduler_remove(handler_id: number): void;
    /**
     * Use this function to escape the following characters: `\n`, `\r`, `\t` and `\`.
     *
     * For a regular expression search, use g_regex_escape_string() instead.
     *
     * One possible use case is to take the #GtkTextBuffer's selection and put it in a
     * search entry. The selection can contain tabulations, newlines, etc. So it's
     * better to escape those special characters to better fit in the search entry.
     *
     * See also: [func`utils_unescape_search_text]`.
     *
     * <warning>
     * Warning: the escape and unescape functions are not reciprocal! For example,
     * escape (unescape (\)) = \\. So avoid cycles such as: search entry -> unescape
     * -> search settings -> escape -> search entry. The original search entry text
     * may be modified.
     * </warning>
     * @param text the text to escape.
     * @returns the escaped @text.
     */
    function utils_escape_search_text(text: string): string;
    /**
     * Use this function before [method`SearchSettings`.set_search_text], to
     * unescape the following sequences of characters: `\n`, `\r`, `\t` and `\\`.
     * The purpose is to easily write those characters in a search entry.
     *
     * Note that unescaping the search text is not needed for regular expression
     * searches.
     *
     * See also: [func`utils_escape_search_text]`.
     * @param text the text to unescape.
     * @returns the unescaped @text.
     */
    function utils_unescape_search_text(text: string): string;
    interface SchedulerCallback {
        (deadline: number): boolean;
    }
    /**
     * Flags to define the behavior of a [flags`FileSaverFlags]`.
     */
    enum FileSaverFlags {
        /**
         * No flags.
         */
        NONE,
        /**
         * Ignore invalid characters.
         */
        IGNORE_INVALID_CHARS,
        /**
         * Save file despite external modifications.
         */
        IGNORE_MODIFICATION_TIME,
        /**
         * Create a backup before saving the file.
         */
        CREATE_BACKUP,
    }
    enum SortFlags {
        /**
         * no flags specified
         */
        NONE,
        /**
         * case sensitive sort
         */
        CASE_SENSITIVE,
        /**
         * sort in reverse order
         */
        REVERSE_ORDER,
        /**
         * remove duplicates
         */
        REMOVE_DUPLICATES,
    }
    /**
     * #GtkSourceSpaceLocationFlags contains flags for white space locations.
     *
     * If a line contains only white spaces (no text), the white spaces match both
     * %GTK_SOURCE_SPACE_LOCATION_LEADING and %GTK_SOURCE_SPACE_LOCATION_TRAILING.
     */
    enum SpaceLocationFlags {
        /**
         * No flags.
         */
        NONE,
        /**
         * Leading white spaces on a line, i.e. the
         *   indentation.
         */
        LEADING,
        /**
         * White spaces inside a line of text.
         */
        INSIDE_TEXT,
        /**
         * Trailing white spaces on a line.
         */
        TRAILING,
        /**
         * White spaces anywhere.
         */
        ALL,
    }
    /**
     * #GtkSourceSpaceTypeFlags contains flags for white space types.
     */
    enum SpaceTypeFlags {
        /**
         * No flags.
         */
        NONE,
        /**
         * Space character.
         */
        SPACE,
        /**
         * Tab character.
         */
        TAB,
        /**
         * Line break character. If the
         *   #GtkSourceBuffer:implicit-trailing-newline property is %TRUE,
         *   #GtkSourceSpaceDrawer also draws a line break at the end of the buffer.
         */
        NEWLINE,
        /**
         * Non-breaking space character.
         */
        NBSP,
        /**
         * All white spaces.
         */
        ALL,
    }
    module Buffer {
        // Signal callback interfaces

        interface BracketMatched {
            (iter: Gtk.TextIter | null, state: BracketMatchType): void;
        }

        interface CursorMoved {
            (): void;
        }

        interface HighlightUpdated {
            (start: Gtk.TextIter, end: Gtk.TextIter): void;
        }

        interface SourceMarkUpdated {
            (mark: Gtk.TextMark): void;
        }

        // Constructor properties interface
    }

    /**
     * Subclass of [class`Gtk`.TextBuffer].
     *
     * A `GtkSourceBuffer` object is the model for [class`View]` widgets.
     * It extends the [class`Gtk`.TextBuffer] class by adding features useful to display
     * and edit source code such as syntax highlighting and bracket matching.
     *
     * To create a `GtkSourceBuffer` use [ctor`GtkSource`.Buffer.new] or
     * [ctor`GtkSource`.Buffer.new_with_language]. The second form is just a convenience
     * function which allows you to initially set a [class`Language]`. You can also
     * directly create a [class`View]` and get its [class`Buffer]` with
     * [method`Gtk`.TextView.get_buffer].
     *
     * The highlighting is enabled by default, but you can disable it with
     * [method`Buffer`.set_highlight_syntax].
     *
     * # Context Classes:
     *
     * It is possible to retrieve some information from the syntax highlighting
     * engine. The default context classes that are applied to regions of a
     * `GtkSourceBuffer`:
     *
     *  - **comment**: the region delimits a comment;
     *  - **no-spell-check**: the region should not be spell checked;
     *  - **path**: the region delimits a path to a file;
     *  - **string**: the region delimits a string.
     *
     * Custom language definition files can create their own context classes,
     * since the functions like [method`Buffer`.iter_has_context_class] take
     * a string parameter as the context class.
     *
     * `GtkSourceBuffer` provides an API to access the context classes:
     * [method`Buffer`.iter_has_context_class],
     * [method`Buffer`.get_context_classes_at_iter],
     * [method`Buffer`.iter_forward_to_context_class_toggle] and
     * [method`Buffer`.iter_backward_to_context_class_toggle].
     *
     * And the [signal`GtkSource`.Buffer::highlight-updated] signal permits to be notified
     * when a context class region changes.
     *
     * Each context class has also an associated [class`Gtk`.TextTag] with the name
     * `gtksourceview:context-classes:<name>`. For example to
     * retrieve the [class`Gtk`.TextTag] for the string context class, one can write:
     * ```c
     * GtkTextTagTable *tag_table;
     * GtkTextTag *tag;
     *
     * tag_table = gtk_text_buffer_get_tag_table (buffer);
     * tag = gtk_text_tag_table_lookup (tag_table, "gtksourceview:context-classes:string");
     * ```
     *
     * The tag must be used for read-only purposes.
     *
     * Accessing a context class via the associated [class`Gtk`.TextTag] is less
     * convenient than the `GtkSourceBuffer` API, because:
     *
     *  - The tag doesn't always exist, you need to listen to the
     *    [signal`Gtk`.TextTagTable::tag-added] and [signal`Gtk`.TextTagTable::tag-removed] signals.
     *  - Instead of the [signal`GtkSource`.Buffer::highlight-updated] signal, you can listen
     *    to the [signal`Gtk`.TextBuffer::apply-tag] and [signal`Gtk`.TextBuffer::remove-tag] signals.
     *
     * A possible use-case for accessing a context class via the associated
     * [class`Gtk`.TextTag] is to read the region but without adding a hard dependency on the
     * GtkSourceView library (for example for a spell-checking library that wants to
     * read the no-spell-check region).
     */
    class Buffer extends Gtk.TextBuffer {
        // Own properties of GtkSource-5.Buffer

        /**
         * Whether to highlight matching brackets in the buffer.
         */
        highlight_matching_brackets: boolean;
        /**
         * Whether to highlight matching brackets in the buffer.
         */
        highlightMatchingBrackets: boolean;
        /**
         * Whether to highlight syntax in the buffer.
         */
        highlight_syntax: boolean;
        /**
         * Whether to highlight syntax in the buffer.
         */
        highlightSyntax: boolean;
        /**
         * Whether the buffer has an implicit trailing newline. See
         * [method`Buffer`.set_implicit_trailing_newline].
         */
        implicit_trailing_newline: boolean;
        /**
         * Whether the buffer has an implicit trailing newline. See
         * [method`Buffer`.set_implicit_trailing_newline].
         */
        implicitTrailingNewline: boolean;
        language: Language;
        /**
         * The "loading" property denotes that a `GtkSourceFileLoader` is
         * currently loading the buffer.
         *
         * Applications may want to use this setting to avoid doing work
         * while the buffer is loading such as spellchecking.
         */
        readonly loading: boolean;
        /**
         * Style scheme. It contains styles for syntax highlighting, optionally
         * foreground, background, cursor color, current line color, and matching
         * brackets style.
         */
        style_scheme: StyleScheme;
        /**
         * Style scheme. It contains styles for syntax highlighting, optionally
         * foreground, background, cursor color, current line color, and matching
         * brackets style.
         */
        styleScheme: StyleScheme;

        // Constructors of GtkSource-5.Buffer

        static ['new'](table?: Gtk.TextTagTable | null): Buffer;

        static new_with_language(language: Language): Buffer;

        // Owm methods of GtkSource-5.Buffer

        /**
         * Moves `iter` to the position of the previous [class`Mark]` of the given
         * category.
         *
         * Returns %TRUE if `iter` was moved. If `category` is NULL, the
         * previous source mark can be of any category.
         * @param iter an iterator.
         * @param category category to search for, or %NULL
         * @returns whether `iter` was moved.
         */
        backward_iter_to_source_mark(iter: Gtk.TextIter, category?: string | null): boolean;
        /**
         * Changes the case of the text between the specified iterators.
         *
         * Since 5.4, this function will update the position of `start` and
         * `end` to surround the modified text.
         * @param case_type how to change the case.
         * @param start a #GtkTextIter.
         * @param end a #GtkTextIter.
         */
        change_case(case_type: ChangeCaseType, start: Gtk.TextIter, end: Gtk.TextIter): void;
        /**
         * Creates a source mark in the `buffer` of category `category`.
         *
         * A source mark is a [class`Gtk`.TextMark] but organized into categories.
         * Depending on the category a pixbuf can be specified that will be displayed
         * along the line of the mark.
         *
         * Like a [class`Gtk`.TextMark], a [class`Mark]` can be anonymous if the
         * passed `name` is %NULL.  Also, the buffer owns the marks so you
         * shouldn't unreference it.
         *
         * Marks always have left gravity and are moved to the beginning of
         * the line when the user deletes the line they were in.
         *
         * Typical uses for a source mark are bookmarks, breakpoints, current
         * executing instruction indication in a source file, etc..
         * @param name the name of the mark, or %NULL.
         * @param category a string defining the mark category.
         * @param where location to place the mark.
         * @returns a new [class@Mark], owned by the buffer.
         */
        create_source_mark(name: string | null, category: string, where: Gtk.TextIter): Mark;
        /**
         * Forces buffer to analyze and highlight the given area synchronously.
         *
         * **Note**:
         *
         * This is a potentially slow operation and should be used only
         * when you need to make sure that some text not currently
         * visible is highlighted, for instance before printing.
         * @param start start of the area to highlight.
         * @param end end of the area to highlight.
         */
        ensure_highlight(start: Gtk.TextIter, end: Gtk.TextIter): void;
        /**
         * Moves `iter` to the position of the next [class`Mark]` of the given
         * `category`.
         *
         * Returns %TRUE if `iter` was moved. If `category` is NULL, the
         * next source mark can be of any category.
         * @param iter an iterator.
         * @param category category to search for, or %NULL
         * @returns whether `iter` was moved.
         */
        forward_iter_to_source_mark(iter: Gtk.TextIter, category?: string | null): boolean;
        /**
         * Get all defined context classes at `iter`.
         *
         * See the [class`Buffer]` description for the list of default context classes.
         * @param iter a #GtkTextIter.
         * @returns a new %NULL terminated array of context class names. Use g_strfreev() to free the array if it is no longer needed.
         */
        get_context_classes_at_iter(iter: Gtk.TextIter): string[];
        /**
         * Determines whether bracket match highlighting is activated for the
         * source buffer.
         * @returns %TRUE if the source buffer will highlight matching brackets.
         */
        get_highlight_matching_brackets(): boolean;
        /**
         * Determines whether syntax highlighting is activated in the source
         * buffer.
         * @returns %TRUE if syntax highlighting is enabled, %FALSE otherwise.
         */
        get_highlight_syntax(): boolean;
        get_implicit_trailing_newline(): boolean;
        /**
         * Returns the [class`Language]` associated with the buffer,
         * see [method`Buffer`.set_language].
         *
         * The returned object should not be unreferenced by the user.
         * @returns the [class@Language] associated with the buffer, or %NULL.
         */
        get_language(): Language | null;
        get_loading(): boolean;
        /**
         * Returns the list of marks of the given category at `iter`.
         *
         * If `category` is %NULL it returns all marks at `iter`.
         * @param iter an iterator.
         * @param category category to search for, or %NULL
         * @returns a newly allocated #GSList.
         */
        get_source_marks_at_iter(iter: Gtk.TextIter, category?: string | null): Mark[];
        /**
         * Returns the list of marks of the given category at `line`.
         *
         * If `category` is %NULL, all marks at `line` are returned.
         * @param line a line number.
         * @param category category to search for, or %NULL
         * @returns a newly allocated #GSList.
         */
        get_source_marks_at_line(line: number, category?: string | null): Mark[];
        /**
         * Returns the [class`StyleScheme]` associated with the buffer,
         * see [method`Buffer`.set_style_scheme].
         *
         * The returned object should not be unreferenced by the user.
         * @returns the [class@StyleScheme] associated with the buffer, or %NULL.
         */
        get_style_scheme(): StyleScheme | null;
        /**
         * Moves backward to the next toggle (on or off) of the context class.
         *
         * If no matching context class toggles are found, returns %FALSE, otherwise %TRUE.
         * Does not return toggles located at `iter,` only toggles after `iter`. Sets
         * `iter` to the location of the toggle, or to the end of the buffer if no
         * toggle is found.
         *
         * See the [class`Buffer]` description for the list of default context classes.
         * @param iter a #GtkTextIter.
         * @param context_class the context class.
         * @returns whether we found a context class toggle before @iter
         */
        iter_backward_to_context_class_toggle(iter: Gtk.TextIter, context_class: string): boolean;
        /**
         * Moves forward to the next toggle (on or off) of the context class.
         *
         * If no matching context class toggles are found, returns %FALSE, otherwise %TRUE.
         * Does not return toggles located at `iter,` only toggles after `iter`. Sets
         * `iter` to the location of the toggle, or to the end of the buffer if no
         * toggle is found.
         *
         * See the [class`Buffer]` description for the list of default context classes.
         * @param iter a #GtkTextIter.
         * @param context_class the context class.
         * @returns whether we found a context class toggle after @iter
         */
        iter_forward_to_context_class_toggle(iter: Gtk.TextIter, context_class: string): boolean;
        /**
         * Check if the class `context_class` is set on `iter`.
         *
         * See the [class`Buffer]` description for the list of default context classes.
         * @param iter a #GtkTextIter.
         * @param context_class class to search for.
         * @returns whether @iter has the context class.
         */
        iter_has_context_class(iter: Gtk.TextIter, context_class: string): boolean;
        /**
         * Joins the lines of text between the specified iterators.
         * @param start a #GtkTextIter.
         * @param end a #GtkTextIter.
         */
        join_lines(start: Gtk.TextIter, end: Gtk.TextIter): void;
        /**
         * Remove all marks of `category` between `start` and `end` from the buffer.
         *
         * If `category` is NULL, all marks in the range will be removed.
         * @param start a #GtkTextIter.
         * @param end a #GtkTextIter.
         * @param category category to search for, or %NULL.
         */
        remove_source_marks(start: Gtk.TextIter, end: Gtk.TextIter, category?: string | null): void;
        /**
         * Controls the bracket match highlighting function in the buffer.
         *
         * If activated, when you position your cursor over a bracket character
         * (a parenthesis, a square bracket, etc.) the matching opening or
         * closing bracket character will be highlighted.
         * @param highlight %TRUE if you want matching brackets highlighted.
         */
        set_highlight_matching_brackets(highlight: boolean): void;
        /**
         * Controls whether syntax is highlighted in the buffer.
         *
         * If `highlight` is %TRUE, the text will be highlighted according to the syntax
         * patterns specified in the [class`Language]` set with [method`Buffer`.set_language].
         *
         * If `highlight` is %FALSE, syntax highlighting is disabled and all the
         * [class`Gtk`.TextTag] objects that have been added by the syntax highlighting engine
         * are removed from the buffer.
         * @param highlight %TRUE to enable syntax highlighting, %FALSE to disable it.
         */
        set_highlight_syntax(highlight: boolean): void;
        /**
         * Sets whether the `buffer` has an implicit trailing newline.
         *
         * If an explicit trailing newline is present in a [class`Gtk`.TextBuffer], [class`Gtk`.TextView]
         * shows it as an empty line. This is generally not what the user expects.
         *
         * If `implicit_trailing_newline` is %TRUE (the default value):
         *  - when a [class`FileLoader]` loads the content of a file into the `buffer,`
         *    the trailing newline (if present in the file) is not inserted into the
         *    `buffer`.
         *  - when a [class`FileSaver]` saves the content of the `buffer` into a file, a
         *    trailing newline is added to the file.
         *
         * On the other hand, if `implicit_trailing_newline` is %FALSE, the file's
         * content is not modified when loaded into the `buffer,` and the `buffer'`s
         * content is not modified when saved into a file.
         * @param implicit_trailing_newline the new value.
         */
        set_implicit_trailing_newline(implicit_trailing_newline: boolean): void;
        /**
         * Associates a [class`Language]` with the buffer.
         *
         * Note that a [class`Language]` affects not only the syntax highlighting, but
         * also the [context classes](./class.Buffer.html#context-classes). If you want to disable just the
         * syntax highlighting, see [method`Buffer`.set_highlight_syntax].
         *
         * The buffer holds a reference to `language`.
         * @param language a #GtkSourceLanguage to set, or %NULL.
         */
        set_language(language?: Language | null): void;
        /**
         * Sets a [class`StyleScheme]` to be used by the buffer and the view.
         *
         * Note that a [class`StyleScheme]` affects not only the syntax highlighting,
         * but also other [class`View]` features such as highlighting the current line,
         * matching brackets, the line numbers, etc.
         *
         * Instead of setting a %NULL `scheme,` it is better to disable syntax
         * highlighting with [method`Buffer`.set_highlight_syntax], and setting the
         * [class`StyleScheme]` with the "classic" or "tango" ID, because those two
         * style schemes follow more closely the GTK theme (for example for the
         * background color).
         *
         * The buffer holds a reference to `scheme`.
         * @param scheme a #GtkSourceStyleScheme or %NULL.
         */
        set_style_scheme(scheme?: StyleScheme | null): void;
        /**
         * Sort the lines of text between the specified iterators.
         * @param start a #GtkTextIter.
         * @param end a #GtkTextIter.
         * @param flags #GtkSourceSortFlags specifying how the sort should behave
         * @param column sort considering the text starting at the given column
         */
        sort_lines(start: Gtk.TextIter, end: Gtk.TextIter, flags: SortFlags, column: number): void;
    }

    module Completion {
        // Signal callback interfaces

        interface Hide {
            (): void;
        }

        interface ProviderAdded {
            (provider: CompletionProvider): void;
        }

        interface ProviderRemoved {
            (provider: CompletionProvider): void;
        }

        interface Show {
            (): void;
        }

        // Constructor properties interface
    }

    /**
     * Main Completion Object.
     *
     * The completion system helps the user when they writes some text,
     * such as words, command names, functions, and suchlike. Proposals can
     * be shown, to complete the text the user is writing. Each proposal can
     * contain an additional piece of information (for example
     * documentation), that is displayed when the "Details" button is
     * clicked.
     *
     * Proposals are created via a [iface`CompletionProvider]`. There can
     * be for example a provider to complete words (see [class`CompletionWords]`),
     * another provider for the completion of
     * function names, etc. To add a provider, call
     * [method`Completion`.add_provider].
     *
     * The [iface`CompletionProposal]` interface represents a proposal.
     *
     * If a proposal contains extra information (see
     * %GTK_SOURCE_COMPLETION_COLUMN_DETAILS), it will be
     * displayed in a supplemental details window, which appears when
     * the "Details" button is clicked.
     *
     * Each [class`View]` object is associated with a [class`Completion]`
     * instance. This instance can be obtained with
     * [method`View`.get_completion]. The [class`View]` class contains also the
     * [signal`View:`:show-completion] signal.
     *
     * A same [iface`CompletionProvider]` object can be used for several
     * `GtkSourceCompletion`'s.
     */
    class Completion extends GObject.Object {
        // Own properties of GtkSource-5.Completion

        /**
         * The #GtkTextBuffer for the #GtkSourceCompletion:view.
         * This is a convenience property for providers.
         */
        readonly buffer: Gtk.TextView;
        /**
         * The number of rows to display to the user before scrolling.
         */
        page_size: number;
        /**
         * The number of rows to display to the user before scrolling.
         */
        pageSize: number;
        /**
         * Determines whether the visibility of the info window should be saved when the
         * completion is hidden, and restored when the completion is shown again.
         */
        remember_info_visibility: boolean;
        /**
         * Determines whether the visibility of the info window should be saved when the
         * completion is hidden, and restored when the completion is shown again.
         */
        rememberInfoVisibility: boolean;
        /**
         * Determines whether the first proposal should be selected when the completion
         * is first shown.
         */
        select_on_show: boolean;
        /**
         * Determines whether the first proposal should be selected when the completion
         * is first shown.
         */
        selectOnShow: boolean;
        /**
         * The "show-icons" property denotes if icons should be displayed within
         * the list of completions presented to the user.
         */
        show_icons: boolean;
        /**
         * The "show-icons" property denotes if icons should be displayed within
         * the list of completions presented to the user.
         */
        showIcons: boolean;
        /**
         * The "view" property is the #GtkTextView for which this #GtkSourceCompletion
         * is providing completion features.
         */
        view: View;

        // Owm methods of GtkSource-5.Completion

        /**
         * This will add `<b>` tags around matched characters in `haystack`
         * based on `casefold_query`.
         * @param haystack the string to be highlighted
         * @param casefold_query the typed-text used to highlight @haystack
         */
        static fuzzy_highlight(haystack: string, casefold_query: string): Pango.AttrList | null;
        /**
         * This helper function can do a fuzzy match for you giving a haystack and
         * casefolded needle.
         *
         * Casefold your needle using [func`GLib`.utf8_casefold] before
         * running the query.
         *
         * Score will be set with the score of the match upon success. Otherwise,
         * it will be set to zero.
         * @param haystack the string to be searched.
         * @param casefold_needle A g_utf8_casefold() version of the needle.
         */
        static fuzzy_match(haystack: string | null, casefold_needle: string): boolean;

        // Owm methods of GtkSource-5.Completion

        /**
         * Adds a [iface`CompletionProvider]` to the list of providers to be queried
         * for completion results.
         * @param provider a #GtkSourceCompletionProvider
         */
        add_provider(provider: CompletionProvider): void;
        block_interactive(): void;
        /**
         * Gets the connected [class`View]`'s [class`Buffer]`
         * @returns A #GtkSourceBuffer
         */
        get_buffer(): Buffer;
        get_page_size(): number;
        /**
         * Gets the [class`View]` that owns the [class`Completion]`.
         * @returns A #GtkSourceView
         */
        get_view(): View;
        /**
         * Emits the "hide" signal.
         *
         * When the "hide" signal is emitted, the completion window will be
         * dismissed.
         */
        hide(): void;
        /**
         * Removes a [iface`CompletionProvider]` previously added with
         * [method`Completion`.add_provider].
         * @param provider a #GtkSourceCompletionProvider
         */
        remove_provider(provider: CompletionProvider): void;
        set_page_size(page_size: number): void;
        /**
         * Emits the "show" signal.
         *
         * When the "show" signal is emitted, the completion window will be
         * displayed if there are any results available.
         */
        show(): void;
        unblock_interactive(): void;
    }

    module CompletionCell {
        // Constructor properties interface
    }

    /**
     * Widget for single cell of completion proposal.
     *
     * The `GtkSourceCompletionCell` widget provides a container to display various
     * types of information with the completion display.
     *
     * Each proposal may consist of multiple cells depending on the complexity of
     * the proposal. For example, programming language proposals may contain a cell
     * for the "left-hand-side" of an operation along with the "typed-text" for a
     * function name and "parameters". They may also optionally set an icon to
     * signify the kind of result.
     *
     * A [iface`CompletionProvider]` should implement the
     * [vfunc`CompletionProvider`.display] virtual function to control
     * how to convert data from their [iface`CompletionProposal]` to content for
     * the `GtkSourceCompletionCell`.
     */
    class CompletionCell extends Gtk.Widget {
        // Own properties of GtkSource-5.CompletionCell

        column: CompletionColumn;
        markup: string;
        paintable: Gdk.Paintable;
        text: string;
        widget: Gtk.Widget;

        // Owm methods of GtkSource-5.CompletionCell

        get_column(): CompletionColumn;
        /**
         * Gets the child #GtkWidget, if any.
         * @returns a #GtkWidget or %NULL
         */
        get_widget(): Gtk.Widget | null;
        set_gicon(gicon: Gio.Icon): void;
        set_icon_name(icon_name: string): void;
        set_markup(markup: string): void;
        set_paintable(paintable: Gdk.Paintable): void;
        /**
         * Sets the text for the column cell. Use %NULL to unset.
         * @param text the text to set or %NULL
         */
        set_text(text?: string | null): void;
        set_text_with_attributes(text: string, attrs: Pango.AttrList): void;
        set_widget(child: Gtk.Widget): void;
    }

    module CompletionContext {
        // Signal callback interfaces

        interface ProviderModelChanged {
            (provider: CompletionProvider, model?: Gio.ListModel | null): void;
        }

        // Constructor properties interface
    }

    /**
     * The context of a completion.
     *
     * `GtkSourceCompletionContext` contains information about an attept to display
     * completion proposals to the user based on typed text in the [class`View]`.
     *
     * When typing, [class`Completion]` may use registered
     * [iface`CompletionProvider]` to determine if there may be results which
     * could be displayed. If so, a `GtkSourceCompletionContext` is created with
     * information that is provided to the [iface`CompletionProvider]` to populate
     * results which might be useful to the user.
     *
     * [iface`CompletionProvider]` are expected to provide [iface`Gio`.ListModel] with
     * [iface`CompletionProposal]` which may be joined together in a list of
     * results for the user. They are also responsible for how the contents are
     * displayed using [class`CompletionCell]` which allows for some level of
     * customization.
     */
    class CompletionContext<A extends GObject.Object = GObject.Object> extends GObject.Object {
        // Own properties of GtkSource-5.CompletionContext

        /**
         * The "busy" property is %TRUE while the completion context is
         * populating completion proposals.
         */
        readonly busy: boolean;
        /**
         * The "completion" is the #GtkSourceCompletion that was used to create the context.
         */
        completion: Completion;
        /**
         * The "empty" property is %TRUE when there are no results.
         *
         * It will be notified when the first result is added or the last
         * result is removed.
         */
        readonly empty: boolean;

        // Owm methods of GtkSource-5.CompletionContext

        /**
         * Gets the mode for which the context was activated.
         */
        get_activation(): CompletionActivation;
        /**
         * Gets the bounds for the completion, which is the beginning of the
         * current word (taking break characters into account) to the current
         * insertion cursor.
         *
         * If `begin` is non-%NULL, it will be set to the start position of the
         * current word being completed.
         *
         * If `end` is non-%NULL, it will be set to the insertion cursor for the
         * current word being completed.
         * @returns %TRUE if the marks are still valid and @begin or @end was set.
         */
        get_bounds(): boolean;
        /**
         * Gets the underlying buffer used by the context.
         *
         * This is a convenience function to get the buffer via the #GtkSourceCompletion
         * property.
         * @returns a #GtkTextBuffer or %NULL
         */
        get_buffer(): Buffer | null;
        /**
         * Gets the "busy" property. This is set to %TRUE while the completion
         * context is actively fetching proposals from registered
         * #GtkSourceCompletionProvider's.
         * @returns %TRUE if the context is busy
         */
        get_busy(): boolean;
        /**
         * Gets the #GtkSourceCompletion that created the context.
         * @returns an #GtkSourceCompletion or %NULL
         */
        get_completion(): Completion | null;
        /**
         * Checks if any proposals have been provided to the context.
         *
         * Out of convenience, this function will return %TRUE if `self` is %NULL.
         * @returns %TRUE if there are no proposals in the context
         */
        get_empty(): boolean;
        /**
         * Gets the language of the underlying buffer, if any.
         * @returns a #GtkSourceLanguage or %NULL
         */
        get_language(): Language | null;
        /**
         * Gets the #GListModel associated with the provider.
         *
         * You can connect to #GtkSourceCompletionContext::model-changed to receive
         * notifications about when the model has been replaced by a new model.
         * @param provider a #GtkSourceCompletionProvider
         * @returns a #GListModel or %NULL
         */
        get_proposals_for_provider(provider: CompletionProvider): Gio.ListModel | null;
        /**
         * Gets the text view for the context.
         * @returns a #GtkSourceView or %NULL
         */
        get_view(): View | null;
        /**
         * Gets the word that is being completed up to the position of the insert mark.
         * @returns a string containing the current word
         */
        get_word(): string;
        /**
         * Gets the providers that are associated with the context.
         * @returns a #GListModel of #GtkSourceCompletionProvider
         */
        list_providers(): Gio.ListModel;
        /**
         * This function allows providers to update their results for a context
         * outside of a call to [method`CompletionProvider`.populate_async].
         *
         * This can be used to immediately return results for a provider while it does
         * additional asynchronous work. Doing so will allow the completions to
         * update while the operation is in progress.
         * @param provider an #GtkSourceCompletionProvider
         * @param results a #GListModel or %NULL
         */
        set_proposals_for_provider(provider: CompletionProvider, results?: Gio.ListModel | null): void;
    }

    module CompletionSnippets {
        // Constructor properties interface
    }

    /**
     * A [iface`CompletionProvider]` for the completion of snippets.
     *
     * The `GtkSourceCompletionSnippets` is an example of an implementation of
     * the [iface`CompletionProvider]` interface. The proposals are snippets
     * registered with the [class`SnippetManager]`.
     */
    class CompletionSnippets extends GObject.Object {
        // Own properties of GtkSource-5.CompletionSnippets

        priority: number;
        title: string;

        // Constructors of GtkSource-5.CompletionSnippets

        static ['new'](): CompletionSnippets;
    }

    module CompletionWords {
        // Constructor properties interface
    }

    /**
     * A [iface`CompletionProvider]` for the completion of words.
     *
     * The `GtkSourceCompletionWords` is an example of an implementation of
     * the [iface`CompletionProvider]` interface. The proposals are words
     * appearing in the registered [class`Gtk`.TextBuffer]s.
     */
    class CompletionWords extends GObject.Object {
        // Own properties of GtkSource-5.CompletionWords

        minimum_word_size: number;
        minimumWordSize: number;
        priority: number;
        proposals_batch_size: number;
        proposalsBatchSize: number;
        scan_batch_size: number;
        scanBatchSize: number;
        title: string;

        // Constructors of GtkSource-5.CompletionWords

        static ['new'](title?: string | null): CompletionWords;

        // Owm methods of GtkSource-5.CompletionWords

        /**
         * Registers `buffer` in the `words` provider.
         * @param buffer a #GtkTextBuffer
         */
        register(buffer: Gtk.TextBuffer): void;
        /**
         * Unregisters `buffer` from the `words` provider.
         * @param buffer a #GtkTextBuffer
         */
        unregister(buffer: Gtk.TextBuffer): void;
    }

    module File {
        // Constructor properties interface
    }

    /**
     * On-disk representation of a [class`Buffer]`.
     *
     * A `GtkSourceFile` object is the on-disk representation of a [class`Buffer]`.
     * With a `GtkSourceFile`, you can create and configure a [class`FileLoader]`
     * and [class`FileSaver]` which take by default the values of the
     * `GtkSourceFile` properties (except for the file loader which auto-detect some
     * properties). On a successful load or save operation, the `GtkSourceFile`
     * properties are updated. If an operation fails, the `GtkSourceFile` properties
     * have still the previous valid values.
     */
    class File extends GObject.Object {
        // Own properties of GtkSource-5.File

        /**
         * The compression type.
         */
        readonly compression_type: CompressionType;
        /**
         * The compression type.
         */
        readonly compressionType: CompressionType;
        /**
         * The character encoding, initially %NULL. After a successful file
         * loading or saving operation, the encoding is non-%NULL.
         */
        readonly encoding: Encoding;
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
         * Whether the file is read-only or not. The value of this property is
         * not updated automatically (there is no file monitors).
         */
        readonly read_only: boolean;
        /**
         * Whether the file is read-only or not. The value of this property is
         * not updated automatically (there is no file monitors).
         */
        readonly readOnly: boolean;

        // Constructors of GtkSource-5.File

        static ['new'](): File;

        // Owm methods of GtkSource-5.File

        /**
         * Checks synchronously the file on disk, to know whether the file is externally
         * modified, or has been deleted, and whether the file is read-only.
         *
         * #GtkSourceFile doesn't create a [class`Gio`.FileMonitor] to track those properties, so
         * this function needs to be called instead. Creating lots of [class`Gio`.FileMonitor]'s
         * would take lots of resources.
         *
         * Since this function is synchronous, it is advised to call it only on local
         * files. See [method`File`.is_local].
         */
        check_file_on_disk(): void;
        get_compression_type(): CompressionType;
        /**
         * The encoding is initially %NULL. After a successful file loading or saving
         * operation, the encoding is non-%NULL.
         * @returns the character encoding.
         */
        get_encoding(): Encoding;
        get_location(): Gio.File;
        get_newline_type(): NewlineType;
        /**
         * Returns whether the file has been deleted. If the
         * [property`File:`location] is %NULL, returns %FALSE.
         *
         * To have an up-to-date value, you must first call
         * [method`File`.check_file_on_disk].
         * @returns whether the file has been deleted.
         */
        is_deleted(): boolean;
        /**
         * Returns whether the file is externally modified. If the
         * [property`File:`location] is %NULL, returns %FALSE.
         *
         * To have an up-to-date value, you must first call
         * [method`File`.check_file_on_disk].
         * @returns whether the file is externally modified.
         */
        is_externally_modified(): boolean;
        /**
         * Returns whether the file is local. If the [property`File:`location] is %NULL,
         * returns %FALSE.
         * @returns whether the file is local.
         */
        is_local(): boolean;
        /**
         * Returns whether the file is read-only. If the
         * [property`File:`location] is %NULL, returns %FALSE.
         *
         * To have an up-to-date value, you must first call
         * [method`File`.check_file_on_disk].
         * @returns whether the file is read-only.
         */
        is_readonly(): boolean;
        /**
         * Sets the location.
         * @param location the new #GFile, or %NULL.
         */
        set_location(location?: Gio.File | null): void;
    }

    module FileLoader {
        // Constructor properties interface
    }

    /**
     * Load a file into a GtkSourceBuffer.
     *
     * A `GtkSourceFileLoader` object permits to load the contents of a [iface`Gio`.File] or a
     * [class`Gio`.InputStream] into a [class`Buffer]`.
     *
     * A file loader should be used only for one load operation, including errors
     * handling. If an error occurs, you can reconfigure the loader and relaunch the
     * operation with [method`FileLoader`.load_async].
     *
     * Running a `GtkSourceFileLoader` is an undoable action for the
     * [class`Buffer]`.
     *
     * After a file loading, the buffer is reset to the contents provided by the
     * [iface`Gio`.File] or [class`Gio`.InputStream], so the buffer is set as “unmodified”, that is,
     * [method`Gtk`.TextBuffer.set_modified] is called with %FALSE. If the contents isn't
     * saved somewhere (for example if you load from stdin), then you should
     * probably call [method`Gtk`.TextBuffer.set_modified] with %TRUE after calling
     * [method`FileLoader`.load_finish].
     */
    class FileLoader extends GObject.Object {
        // Own properties of GtkSource-5.FileLoader

        /**
         * The #GtkSourceBuffer to load the contents into. The
         * #GtkSourceFileLoader object has a weak reference to the buffer.
         */
        buffer: Buffer;
        /**
         * The #GtkSourceFile. The #GtkSourceFileLoader object has a weak
         * reference to the file.
         */
        file: File;
        /**
         * The #GInputStream to load. Useful for reading stdin. If this property
         * is set, the #GtkSourceFileLoader:location property is ignored.
         */
        input_stream: Gio.InputStream;
        /**
         * The #GInputStream to load. Useful for reading stdin. If this property
         * is set, the #GtkSourceFileLoader:location property is ignored.
         */
        inputStream: Gio.InputStream;
        /**
         * The #GFile to load. If the #GtkSourceFileLoader:input-stream is
         * %NULL, by default the location is taken from the #GtkSourceFile at
         * construction time.
         */
        location: Gio.File;

        // Constructors of GtkSource-5.FileLoader

        static ['new'](buffer: Buffer, file: File): FileLoader;

        static new_from_stream(buffer: Buffer, file: File, stream: Gio.InputStream): FileLoader;

        // Owm methods of GtkSource-5.FileLoader

        get_buffer(): Buffer;
        get_compression_type(): CompressionType;
        get_encoding(): Encoding;
        get_file(): File;
        get_input_stream(): Gio.InputStream | null;
        get_location(): Gio.File | null;
        get_newline_type(): NewlineType;
        /**
         * Loads asynchronously the file or input stream contents into the [class`Buffer]`.
         *
         * See the [iface`Gio`.AsyncResult] documentation to know how to use this
         * function.
         * @param io_priority the I/O priority of the request. E.g. %G_PRIORITY_LOW,   %G_PRIORITY_DEFAULT or %G_PRIORITY_HIGH.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param progress_callback function to call back with   progress information, or %NULL if progress information is not needed.
         * @param progress_callback_notify function to call on   @progress_callback_data when the @progress_callback is no longer needed, or   %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is   satisfied.
         */
        load_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            progress_callback?: Gio.FileProgressCallback | null,
            progress_callback_notify?: GLib.DestroyNotify | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes a file loading started with [method`FileLoader`.load_async].
         *
         * If the contents has been loaded, the following [class`File]` properties will
         * be updated: the location, the encoding, the newline type and the compression
         * type.
         * @param result a #GAsyncResult.
         * @returns whether the contents has been loaded successfully.
         */
        load_finish(result: Gio.AsyncResult): boolean;
        /**
         * Sets the candidate encodings for the file loading.
         *
         * The encodings are tried in the same order as the list.
         *
         * For convenience, `candidate_encodings` can contain duplicates. Only the first
         * occurrence of a duplicated encoding is kept in the list.
         *
         * By default the candidate encodings are (in that order in the list):
         *
         * 1. If set, the [class`File]`'s encoding as returned by [method`File`.get_encoding].
         * 2. The default candidates as returned by [func`Encoding`.get_default_candidates].
         * @param candidate_encodings a list of   #GtkSourceEncoding<!-- -->s.
         */
        set_candidate_encodings(candidate_encodings: Encoding[]): void;
    }

    module FileSaver {
        // Constructor properties interface
    }

    /**
     * Save a [class`Buffer]` into a file.
     *
     * A `GtkSourceFileSaver` object permits to save a [class`Buffer]` into a
     * [iface`Gio`.File].
     *
     * A file saver should be used only for one save operation, including errors
     * handling. If an error occurs, you can reconfigure the saver and relaunch the
     * operation with [method`FileSaver`.save_async].
     */
    class FileSaver extends GObject.Object {
        // Own properties of GtkSource-5.FileSaver

        /**
         * The #GtkSourceBuffer to save. The #GtkSourceFileSaver object has a
         * weak reference to the buffer.
         */
        buffer: Buffer;
        /**
         * The compression type.
         */
        compression_type: CompressionType;
        /**
         * The compression type.
         */
        compressionType: CompressionType;
        /**
         * The file's encoding.
         */
        encoding: Encoding;
        /**
         * The #GtkSourceFile. The #GtkSourceFileSaver object has a weak
         * reference to the file.
         */
        file: File;
        /**
         * File saving flags.
         */
        flags: FileSaverFlags;
        /**
         * The #GFile where to save the buffer. By default the location is taken
         * from the #GtkSourceFile at construction time.
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

        // Constructors of GtkSource-5.FileSaver

        static ['new'](buffer: Buffer, file: File): FileSaver;

        static new_with_target(buffer: Buffer, file: File, target_location: Gio.File): FileSaver;

        // Owm methods of GtkSource-5.FileSaver

        get_buffer(): Buffer;
        get_compression_type(): CompressionType;
        get_encoding(): Encoding;
        get_file(): File;
        get_flags(): FileSaverFlags;
        get_location(): Gio.File;
        get_newline_type(): NewlineType;
        /**
         * Saves asynchronously the buffer into the file.
         *
         * See the [iface`Gio`.AsyncResult] documentation to know how to use this function.
         * @param io_priority the I/O priority of the request. E.g. %G_PRIORITY_LOW,   %G_PRIORITY_DEFAULT or %G_PRIORITY_HIGH.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param progress_callback function to call back with   progress information, or %NULL if progress information is not needed.
         * @param progress_callback_notify function to call on   @progress_callback_data when the @progress_callback is no longer needed, or   %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is   satisfied.
         */
        save_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            progress_callback?: Gio.FileProgressCallback | null,
            progress_callback_notify?: GLib.DestroyNotify | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes a file saving started with [method`FileSaver`.save_async].
         *
         * If the file has been saved successfully, the following [class`File]`
         * properties will be updated: the location, the encoding, the newline type and
         * the compression type.
         *
         * Since the 3.20 version, [method`Gtk`.TextBuffer.set_modified] is called with %FALSE
         * if the file has been saved successfully.
         * @param result a #GAsyncResult.
         * @returns whether the file was saved successfully.
         */
        save_finish(result: Gio.AsyncResult): boolean;
        /**
         * Sets the compression type. By default the compression type is taken from the
         * #GtkSourceFile.
         * @param compression_type the new compression type.
         */
        set_compression_type(compression_type: CompressionType): void;
        /**
         * Sets the encoding. If `encoding` is %NULL, the UTF-8 encoding will be set.
         *
         * By default the encoding is taken from the #GtkSourceFile.
         * @param encoding the new encoding, or %NULL for UTF-8.
         */
        set_encoding(encoding?: Encoding | null): void;
        set_flags(flags: FileSaverFlags): void;
        /**
         * Sets the newline type. By default the newline type is taken from the
         * #GtkSourceFile.
         * @param newline_type the new newline type.
         */
        set_newline_type(newline_type: NewlineType): void;
    }

    module Gutter {
        // Constructor properties interface
    }

    /**
     * Gutter object for [class`View]`.
     *
     * The `GtkSourceGutter` object represents the left or right gutter of the text
     * view. It is used by [class`View]` to draw the line numbers and
     * [class`Mark]`s that might be present on a line. By packing
     * additional [class`GutterRenderer]` objects in the gutter, you can extend the
     * gutter with your own custom drawings.
     *
     * To get a `GtkSourceGutter`, use the [method`View`.get_gutter] function.
     *
     * The gutter works very much the same way as cells rendered in a [class`Gtk`.TreeView].
     * The concept is similar, with the exception that the gutter does not have an
     * underlying [iface`Gtk`.TreeModel]. The builtin line number renderer is at position
     * %GTK_SOURCE_VIEW_GUTTER_POSITION_LINES (-30) and the marks renderer is at
     * %GTK_SOURCE_VIEW_GUTTER_POSITION_MARKS (-20). The gutter sorts the renderers
     * in ascending order, from left to right. So the marks are displayed on the
     * right of the line numbers.
     */
    class Gutter extends Gtk.Widget {
        // Own properties of GtkSource-5.Gutter

        /**
         * The #GtkSourceView of the gutter.
         */
        view: View;
        /**
         * The text window type on which the window is placed.
         */
        window_type: Gtk.TextWindowType;
        /**
         * The text window type on which the window is placed.
         */
        windowType: Gtk.TextWindowType;

        // Owm methods of GtkSource-5.Gutter

        get_view(): View;
        /**
         * Insert `renderer` into the gutter. If `renderer` is yet unowned then gutter
         * claims its ownership. Otherwise just increases renderer's reference count.
         * `renderer` cannot be already inserted to another gutter.
         * @param renderer a gutter renderer (must inherit from #GtkSourceGutterRenderer).
         * @param position the renderer position.
         * @returns %TRUE if operation succeeded. Otherwise %FALSE.
         */
        insert(renderer: GutterRenderer, position: number): boolean;
        remove(renderer: GutterRenderer): void;
        /**
         * Reorders `renderer` in `gutter` to new `position`.
         * @param renderer a #GtkCellRenderer.
         * @param position the new renderer position.
         */
        reorder(renderer: GutterRenderer, position: number): void;
    }

    module GutterLines {
        // Constructor properties interface
    }

    /**
     * Collected information about visible lines.
     *
     * The `GtkSourceGutterLines` object is used to collect information about
     * visible lines.
     *
     * Use this from your [signal`GutterRenderer:`:query-data] to collect the
     * necessary information on visible lines. Doing so reduces the number of
     * passes through the text btree allowing GtkSourceView to reach more
     * frames-per-second while performing kinetic scrolling.
     */
    class GutterLines extends GObject.Object {
        // Owm methods of GtkSource-5.GutterLines

        /**
         * Adds the class `name` to `line`.
         *
         * `name` will be converted to a [alias`GLib`.Quark] as part of this process. A
         * faster version of this function is available via
         * [method`GutterLines`.add_qclass] for situations where the [alias`GLib`.Quark] is
         * known ahead of time.
         * @param line a line number starting from zero
         * @param name a class name
         */
        add_class(line: number, name: string): void;
        /**
         * Adds the class denoted by `qname` to `line`.
         *
         * You may check if a line has `qname` by calling
         * [method`GutterLines`.has_qclass].
         *
         * You can remove `qname` by calling
         * [method`GutterLines`.remove_qclass].
         * @param line a line number starting from zero
         * @param qname a class name as a #GQuark
         */
        add_qclass(line: number, qname: GLib.Quark): void;
        /**
         * Gets the [class`Gtk`.TextBuffer] that the `GtkSourceGutterLines` represents.
         * @returns a #GtkTextBuffer
         */
        get_buffer(): Gtk.TextBuffer;
        /**
         * Gets the line number (starting from 0) for the first line that is
         * user visible.
         * @returns a line number starting from 0
         */
        get_first(): number;
        /**
         * Gets a #GtkTextIter for the current buffer at `line`
         * @param line the line number
         */
        get_iter_at_line(line: number): void;
        /**
         * Gets the line number (starting from 0) for the last line that is
         * user visible.
         * @returns a line number starting from 0
         */
        get_last(): number;
        /**
         * Gets the Y range for a line based on `mode`.
         *
         * The value for `y` is relative to the renderers widget coordinates.
         * @param line a line number starting from zero
         * @param mode a #GtkSourceGutterRendererAlignmentMode
         */
        get_line_yrange(line: number, mode: GutterRendererAlignmentMode): void;
        /**
         * Gets the [class`Gtk`.TextView] that the `GtkSourceGutterLines` represents.
         * @returns a #GtkTextView
         */
        get_view(): Gtk.TextView;
        /**
         * Checks to see if the line has any GQuark classes set. This can be
         * used to help renderer implementations avoid work if nothing has
         * been set on the class.
         * @param line a line contained within @lines
         * @returns %TRUE if any quark was set for the line
         */
        has_any_class(line: number): boolean;
        /**
         * Checks to see if [method`GutterLines`.add_class] was called with
         * the `name` for `line`.
         *
         * A faster version of this function is provided via
         * [method`GutterLines`.has_qclass] for situations where the quark
         * is known ahead of time.
         * @param line a line number starting from zero
         * @param name a class name that may be converted, to a #GQuark
         * @returns %TRUE if @line contains @name
         */
        has_class(line: number, name: string): boolean;
        /**
         * Checks to see if [method`GutterLines`.add_qclass] was called with
         * the quark denoted by `qname` for `line`.
         * @param line a line number starting from zero
         * @param qname a #GQuark containing the class name
         * @returns %TRUE if @line contains @qname
         */
        has_qclass(line: number, qname: GLib.Quark): boolean;
        /**
         * Checks to see if `line` contains the insertion cursor.
         * @param line a line number starting from zero
         * @returns %TRUE if the insertion cursor is on @line
         */
        is_cursor(line: number): boolean;
        /**
         * Checks to see if `line` is marked as prelit. Generally, this means
         * the mouse pointer is over the line within the gutter.
         * @param line a line number starting from zero
         * @returns %TRUE if the line is prelit
         */
        is_prelit(line: number): boolean;
        /**
         * Checks to see if the view had a selection and if that selection overlaps
         * `line` in some way.
         * @param line a line number starting from zero
         * @returns %TRUE if the line contains a selection
         */
        is_selected(line: number): boolean;
        /**
         * Removes the class matching `name` from `line`.
         *
         * A faster version of this function is available via
         * [method`GutterLines`.remove_qclass] for situations where the
         * #GQuark is known ahead of time.
         * @param line a line number starting from zero
         * @param name a class name
         */
        remove_class(line: number, name: string): void;
        /**
         * Reverses a call to [method`GutterLines`.add_qclass] by removing
         * the [alias`GLib`.Quark] matching `qname`.
         * @param line a line number starting from zero
         * @param qname a #GQuark to remove from @line
         */
        remove_qclass(line: number, qname: GLib.Quark): void;
    }

    module GutterRenderer {
        // Signal callback interfaces

        interface Activate {
            (iter: Gtk.TextIter, area: Gdk.Rectangle, button: number, state: Gdk.ModifierType, n_presses: number): void;
        }

        interface QueryActivatable {
            (iter: Gtk.TextIter, area: Gdk.Rectangle): boolean;
        }

        interface QueryData {
            (object: GObject.Object, p0: number): void;
        }

        // Constructor properties interface
    }

    /**
     * Gutter cell renderer.
     *
     * A `GtkSourceGutterRenderer` represents a column in a [class`Gutter]`. The
     * column contains one cell for each visible line of the [class`Gtk`.TextBuffer]. Due to
     * text wrapping, a cell can thus span multiple lines of the [class`Gtk`.TextView]. In
     * this case, [enum`GutterRendererAlignmentMode]` controls the alignment of
     * the cell.
     *
     * The gutter renderer is a [class`Gtk`.Widget] and is measured using the normal widget
     * measurement facilities. The width of the gutter will be determined by the
     * measurements of the gutter renderers.
     *
     * The width of a gutter renderer generally takes into account the entire text
     * buffer. For instance, to display the line numbers, if the buffer contains 100
     * lines, the gutter renderer will always set its width such as three digits can
     * be printed, even if only the first 20 lines are shown. Another strategy is to
     * take into account only the visible lines.  In this case, only two digits are
     * necessary to display the line numbers of the first 20 lines. To take another
     * example, the gutter renderer for [class`Mark]`s doesn't need to take
     * into account the text buffer to announce its width. It only depends on the
     * icons size displayed in the gutter column.
     *
     * When the available size to render a cell is greater than the required size to
     * render the cell contents, the cell contents can be aligned horizontally and
     * vertically with [method`GutterRenderer`.set_alignment_mode].
     *
     * The cells rendering occurs using [vfunc`Gtk`.Widget.snapshot]. Implementations
     * should use `gtk_source_gutter_renderer_get_lines()` to retrieve information
     * about the lines to be rendered. To help with aligning content which takes
     * into account the padding and alignment of a cell, implementations may call
     * [method`GutterRenderer`.align_cell] for a given line number with the
     * width and height measurement of the content they width to render.
     */
    abstract class GutterRenderer extends Gtk.Widget {
        // Own properties of GtkSource-5.GutterRenderer

        /**
         * The alignment mode of the renderer.
         *
         * This can be used to indicate that in the case a cell spans multiple lines (due to text wrapping)
         * the alignment should work on either the full cell, the first line or the last line.
         */
        alignment_mode: GutterRendererAlignmentMode;
        /**
         * The alignment mode of the renderer.
         *
         * This can be used to indicate that in the case a cell spans multiple lines (due to text wrapping)
         * the alignment should work on either the full cell, the first line or the last line.
         */
        alignmentMode: GutterRendererAlignmentMode;
        /**
         * Contains information about the lines to be rendered.
         *
         * It should be used by #GtkSourceGutterRenderer implementations from [vfunc`Gtk`.Widget.snapshot].
         */
        readonly lines: GutterLines;
        /**
         * The view on which the renderer is placed.
         */
        readonly view: Gtk.TextView;
        /**
         * The horizontal alignment of the renderer.
         *
         * Set to 0 for a left alignment. 1 for a right alignment. And 0.5 for centering the cells.
         * A value lower than 0 doesn't modify the alignment.
         */
        xalign: number;
        /**
         * The left and right padding of the renderer.
         */
        xpad: number;
        /**
         * The vertical alignment of the renderer.
         *
         * Set to 0 for a top alignment. 1 for a bottom alignment. And 0.5 for centering the cells.
         * A value lower than 0 doesn't modify the alignment.
         */
        yalign: number;
        /**
         * The top and bottom padding of the renderer.
         */
        ypad: number;

        // Owm methods of GtkSource-5.GutterRenderer

        /**
         * Emits the [signal`GutterRenderer:`:activate] signal of the renderer. This is
         * called from [class`Gutter]` and should never have to be called manually.
         * @param iter a #GtkTextIter at the start of the line where the renderer is activated
         * @param area a #GdkRectangle of the cell area where the renderer is activated
         * @param button the button that was pressed
         * @param state a #GdkModifierType
         * @param n_presses the number of button presses
         */
        activate(
            iter: Gtk.TextIter,
            area: Gdk.Rectangle,
            button: number,
            state: Gdk.ModifierType,
            n_presses: number,
        ): void;
        /**
         * Locates where to render content that is `width` x `height` based on
         * the renderers alignment and padding.
         *
         * The location will be placed into `x` and `y` and is relative to the
         * renderer's coordinates.
         *
         * It is encouraged that renderers use this function when snappshotting
         * to ensure consistent placement of their contents.
         * @param line the line number for content
         * @param width the width of the content to draw
         * @param height the height of the content to draw
         */
        align_cell(line: number, width: number, height: number): void;
        /**
         * Get the alignment mode.
         *
         * The alignment mode describes the manner in which the
         * renderer is aligned (see [property`GutterRenderer:`xalign] and
         * [property`GutterRenderer:`yalign]).
         * @returns a #GtkSourceGutterRendererAlignmentMode
         */
        get_alignment_mode(): GutterRendererAlignmentMode;
        /**
         * Gets the [class`Buffer]` for which the gutter renderer is drawing.
         * @returns a #GtkTextBuffer or %NULL
         */
        get_buffer(): Buffer | null;
        /**
         * Get the view associated to the gutter renderer
         * @returns a #GtkSourceView
         */
        get_view(): View;
        /**
         * Gets the `xalign` property.
         *
         * This may be used to adjust where within the cell rectangle the renderer will draw.
         */
        get_xalign(): number;
        /**
         * Gets the `xpad` property.
         *
         * This may be used to adjust the cell rectangle that the renderer will use to draw.
         */
        get_xpad(): number;
        /**
         * Gets the `yalign` property.
         *
         * This may be used to adjust where within the cell rectangle the renderer will draw.
         */
        get_yalign(): number;
        /**
         * Gets the `ypad` property.
         *
         * This may be used to adjust the cell rectangle that the renderer will use to draw.
         */
        get_ypad(): number;
        /**
         * Get whether the renderer is activatable at the location provided. This is
         * called from [class`Gutter]` to determine whether a renderer is activatable
         * using the mouse pointer.
         * @param iter a #GtkTextIter at the start of the line to be activated
         * @param area a #GdkRectangle of the cell area to be activated
         * @returns %TRUE if the renderer can be activated, %FALSE otherwise
         */
        query_activatable(iter: Gtk.TextIter, area: Gdk.Rectangle): boolean;
        /**
         * Set the alignment mode. The alignment mode describes the manner in which the
         * renderer is aligned (see [property`GutterRenderer:`xalign] and
         * [property`GutterRenderer:`yalign]).
         * @param mode a #GtkSourceGutterRendererAlignmentMode
         */
        set_alignment_mode(mode: GutterRendererAlignmentMode): void;
        /**
         * Adjusts the `xalign` property.
         *
         * This may be used to adjust where within the cell rectangle the renderer will draw.
         * @param xalign the Y padding for the drawing cell
         */
        set_xalign(xalign: number): void;
        /**
         * Adjusts the `xpad` property.
         *
         * This may be used to adjust the cell rectangle that the renderer will use to draw.
         * @param xpad the Y padding for the drawing cell
         */
        set_xpad(xpad: number): void;
        /**
         * Adjusts the `yalign` property.
         *
         * This may be used to adjust where within the cell rectangle the renderer will draw.
         * @param yalign the Y padding for the drawing cell
         */
        set_yalign(yalign: number): void;
        /**
         * Adjusts the `ypad` property.
         *
         * This may be used to adjust the cell rectangle that the renderer will use to draw.
         * @param ypad the Y padding for the drawing cell
         */
        set_ypad(ypad: number): void;
    }

    module GutterRendererPixbuf {
        // Constructor properties interface
    }

    /**
     * Renders a pixbuf in the gutter.
     *
     * A `GtkSourceGutterRendererPixbuf` can be used to render an image in a cell of
     * [class`Gutter]`.
     */
    class GutterRendererPixbuf extends GutterRenderer {
        // Own properties of GtkSource-5.GutterRendererPixbuf

        gicon: Gio.Icon;
        icon_name: string;
        iconName: string;
        paintable: Gdk.Paintable;
        pixbuf: GdkPixbuf.Pixbuf;

        // Constructors of GtkSource-5.GutterRendererPixbuf

        static ['new'](): GutterRendererPixbuf;

        // Owm methods of GtkSource-5.GutterRendererPixbuf

        /**
         * Get the gicon of the renderer
         * @returns a #GIcon
         */
        get_gicon(): Gio.Icon;
        get_icon_name(): string;
        /**
         * Gets a [iface`Gdk`.Paintable] that was set with
         * [method`GutterRendererPixbuf`.set_paintable]
         * @returns a #GdkPaintable or %NULL
         */
        get_paintable(): Gdk.Paintable | null;
        /**
         * Get the pixbuf of the renderer.
         * @returns a #GdkPixbuf
         */
        get_pixbuf(): GdkPixbuf.Pixbuf;
        /**
         * Allows overlaying a paintable on top of any other image that
         * has been set for the pixbuf. This will be applied when the
         * widget is next snapshot.
         * @param paintable a #GdkPaintable
         */
        overlay_paintable(paintable: Gdk.Paintable): void;
        set_gicon(icon?: Gio.Icon | null): void;
        set_icon_name(icon_name?: string | null): void;
        set_paintable(paintable?: Gdk.Paintable | null): void;
        set_pixbuf(pixbuf?: GdkPixbuf.Pixbuf | null): void;
    }

    module GutterRendererText {
        // Constructor properties interface
    }

    /**
     * Renders text in the gutter.
     *
     * A `GtkSourceGutterRendererText` can be used to render text in a cell of
     * [class`Gutter]`.
     */
    class GutterRendererText extends GutterRenderer {
        // Own properties of GtkSource-5.GutterRendererText

        markup: string;
        text: string;

        // Constructors of GtkSource-5.GutterRendererText

        static ['new'](): GutterRendererText;

        // Owm methods of GtkSource-5.GutterRendererText

        /**
         * Measures the text provided using the pango layout used by the
         * #GtkSourceGutterRendererText.
         * @param text the text to measure.
         */
        measure(text: string): void;
        /**
         * Measures the pango markup provided using the pango layout used by the
         * #GtkSourceGutterRendererText.
         * @param markup the pango markup to measure.
         */
        measure_markup(markup: string): void;
        set_markup(markup: string, length: number): void;
        set_text(text: string, length: number): void;
    }

    module Hover {
        // Constructor properties interface
    }

    /**
     * Interactive tooltips.
     *
     * `GtkSourceHover` allows a [class`View]` to provide contextual information.
     * When enabled, if the user hovers over a word in the text editor, a series
     * of registered [iface`HoverProvider]` can populate a [class`HoverDisplay]`
     * with useful information.
     *
     * To enable call [method`View`.get_hover] and add [iface`HoverProvider]`
     * using [method`Hover`.add_provider]. To disable, remove all registered
     * providers with [method`Hover`.remove_provider].
     *
     * You can change how long to wait to display the interactive tooltip by
     * setting the [property`Hover:`hover-delay] property in milliseconds.
     */
    class Hover extends GObject.Object {
        // Own properties of GtkSource-5.Hover

        /**
         * Contains the number of milliseconds to delay before showing the hover assistant.
         */
        hover_delay: number;
        /**
         * Contains the number of milliseconds to delay before showing the hover assistant.
         */
        hoverDelay: number;

        // Owm methods of GtkSource-5.Hover

        add_provider(provider: HoverProvider): void;
        remove_provider(provider: HoverProvider): void;
    }

    module HoverContext {
        // Constructor properties interface
    }

    /**
     * Context for populating [class`HoverDisplay]` contents.
     *
     * `GtkSourceHoverContext` contains information about the request to populate
     * contents for a [class`HoverDisplay]`.
     *
     * It can be used to retrieve the [class`View]`, [class`Buffer]`, and
     * [struct`Gtk`.TextIter] for the regions of text which are being displayed.
     *
     * Use [method`HoverContext`.get_bounds] to get the word that was
     * requested. [method`HoverContext`.get_iter] will get you the location
     * of the pointer when the request was made.
     */
    class HoverContext extends GObject.Object {
        // Owm methods of GtkSource-5.HoverContext

        /**
         * Gets the current word bounds of the hover.
         *
         * If `begin` is non-%NULL, it will be set to the start position of the
         * current word being hovered.
         *
         * If `end` is non-%NULL, it will be set to the end position for the
         * current word being hovered.
         * @returns %TRUE if the marks are still valid and @begin or @end was set.
         */
        get_bounds(): boolean;
        /**
         * A convenience function to get the buffer.
         * @returns The #GtkSourceBuffer for the view
         */
        get_buffer(): Buffer;
        get_iter(iter: Gtk.TextIter): boolean;
        get_view(): View;
    }

    module HoverDisplay {
        // Constructor properties interface
    }

    /**
     * Display for interactive tooltips.
     *
     * `GtkSourceHoverDisplay` is a [class`Gtk`.Widget] that may be populated with widgets
     * to be displayed to the user in interactive tooltips. The children widgets
     * are packed vertically using a [class`Gtk`.Box].
     *
     * Implement the [iface`HoverProvider]` interface to be notified of when
     * to populate a `GtkSourceHoverDisplay` on behalf of the user.
     */
    class HoverDisplay extends Gtk.Widget {
        // Owm methods of GtkSource-5.HoverDisplay

        append(child: Gtk.Widget): void;
        insert_after(child: Gtk.Widget, sibling: Gtk.Widget): void;
        prepend(child: Gtk.Widget): void;
        remove(child: Gtk.Widget): void;
    }

    module Language {
        // Constructor properties interface
    }

    /**
     * Represents a syntax highlighted language.
     *
     * A `GtkSourceLanguage` represents a programming or markup language, affecting
     * syntax highlighting and [context classes](./class.Buffer.html#context-classes).
     *
     * Use [class`LanguageManager]` to obtain a `GtkSourceLanguage` instance, and
     * [method`Buffer`.set_language] to apply it to a [class`Buffer]`.
     */
    class Language extends GObject.Object {
        // Own properties of GtkSource-5.Language

        readonly hidden: boolean;
        readonly id: string;
        readonly name: string;
        readonly section: string;

        // Owm methods of GtkSource-5.Language

        /**
         * Returns the globs associated to this language.
         *
         * This is just an utility wrapper around [method`Language`.get_metadata] to
         * retrieve the "globs" metadata property and split it into an array.
         * @returns a newly-allocated %NULL terminated array containing the globs or %NULL if no globs are found. The returned array must be freed with g_strfreev().
         */
        get_globs(): string[] | null;
        /**
         * Returns whether the language should be hidden from the user.
         * @returns %TRUE if the language should be hidden, %FALSE otherwise.
         */
        get_hidden(): boolean;
        /**
         * Returns the ID of the language.
         *
         * The ID is not locale-dependent.The returned string is owned by `language`
         * and should not be freed or modified.
         * @returns the ID of @language.
         */
        get_id(): string;
        get_metadata(name: string): string | null;
        /**
         * Returns the mime types associated to this language.
         *
         * This is just an utility wrapper around [method`Language`.get_metadata] to
         * retrieve the "mimetypes" metadata property and split it into an
         * array.
         * @returns a newly-allocated %NULL terminated array containing the mime types or %NULL if no mime types are found. The returned array must be freed with g_strfreev().
         */
        get_mime_types(): string[] | null;
        /**
         * Returns the localized name of the language.
         *
         * The returned string is owned by `language` and should not be freed
         * or modified.
         * @returns the name of @language.
         */
        get_name(): string;
        /**
         * Returns the localized section of the language.
         *
         * Each language belong to a section (ex. HTML belongs to the
         * Markup section).
         * The returned string is owned by `language` and should not be freed
         * or modified.
         * @returns the section of @language.
         */
        get_section(): string;
        /**
         * Returns the ID of the style to use if the specified `style_id`
         * is not present in the current style scheme.
         * @param style_id a style ID.
         * @returns the ID of the style to use if the specified @style_id is not present in the current style scheme or %NULL if the style has no fallback defined. The returned string is owned by the @language and must not be modified.
         */
        get_style_fallback(style_id: string): string | null;
        /**
         * Returns the ids of the styles defined by this `language`.
         * @returns a newly-allocated %NULL terminated array containing ids of the styles defined by this @language or %NULL if no style is defined. The returned array must be freed with g_strfreev().
         */
        get_style_ids(): string[] | null;
        /**
         * Returns the name of the style with ID `style_id` defined by this `language`.
         * @param style_id a style ID.
         * @returns the name of the style with ID @style_id defined by this @language or %NULL if the style has no name or there is no style with ID @style_id defined by this @language. The returned string is owned by the @language and must not be modified.
         */
        get_style_name(style_id: string): string | null;
    }

    module LanguageManager {
        // Constructor properties interface
    }

    /**
     * Provides access to [class`Language]`s.
     *
     * `GtkSourceLanguageManager` is an object which processes language description
     * files and creates and stores [class`Language]` objects, and provides API to
     * access them.
     *
     * Use [func`LanguageManager`.get_default] to retrieve the default
     * instance of `GtkSourceLanguageManager`, and
     * [method`LanguageManager`.guess_language] to get a [class`Language]` for
     * given file name and content type.
     */
    class LanguageManager extends GObject.Object {
        // Own properties of GtkSource-5.LanguageManager

        readonly language_ids: string[];
        readonly languageIds: string[];
        search_path: string[];
        searchPath: string[];

        // Constructors of GtkSource-5.LanguageManager

        static ['new'](): LanguageManager;

        // Owm methods of GtkSource-5.LanguageManager

        /**
         * Returns the default #GtkSourceLanguageManager instance.
         */
        static get_default(): LanguageManager;

        // Owm methods of GtkSource-5.LanguageManager

        /**
         * Appends `path` to the list of directories where the `manager` looks for
         * language files.
         *
         * See [method`LanguageManager`.set_search_path] for details.
         * @param path a directory or a filename.
         */
        append_search_path(path: string): void;
        /**
         * Gets the [class`Language]` identified by the given `id` in the language
         * manager.
         * @param id a language id.
         * @returns a #GtkSourceLanguage, or %NULL if there is no language identified by the given @id. Return value is owned by @lm and should not be freed.
         */
        get_language(id: string): Language | null;
        /**
         * Returns the ids of the available languages.
         * @returns a %NULL-terminated array of strings containing the ids of the available languages or %NULL if no language is available. The array is sorted alphabetically according to the language name. The array is owned by @lm and must not be modified.
         */
        get_language_ids(): string[] | null;
        /**
         * Gets the list directories where `lm` looks for language files.
         * @returns %NULL-terminated array containing a list of language files directories. The array is owned by @lm and must not be modified.
         */
        get_search_path(): string[];
        /**
         * Picks a [class`Language]` for given file name and content type,
         * according to the information in lang files.
         *
         * Either `filename` or `content_type` may be %NULL. This function can be used as follows:
         *
         * ```c
         * GtkSourceLanguage *lang;
         * GtkSourceLanguageManager *manager;
         * lm = gtk_source_language_manager_get_default ();
         * lang = gtk_source_language_manager_guess_language (manager, filename, NULL);
         * gtk_source_buffer_set_language (buffer, lang);
         * ```
         *
         * or
         *
         * ```c
         * GtkSourceLanguage *lang = NULL;
         * GtkSourceLanguageManager *manager;
         * gboolean result_uncertain;
         * gchar *content_type;
         *
         * content_type = g_content_type_guess (filename, NULL, 0, &result_uncertain);
         * if (result_uncertain)
         *   {
         *     g_free (content_type);
         *     content_type = NULL;
         *   }
         *
         * manager = gtk_source_language_manager_get_default ();
         * lang = gtk_source_language_manager_guess_language (manager, filename, content_type);
         * gtk_source_buffer_set_language (buffer, lang);
         *
         * g_free (content_type);
         * ```
         *
         * etc. Use [method`Language`.get_mime_types] and [method`Language`.get_globs]
         * if you need full control over file -> language mapping.
         * @param filename a filename in Glib filename encoding, or %NULL.
         * @param content_type a content type (as in GIO API), or %NULL.
         * @returns a #GtkSourceLanguage, or %NULL if there is no suitable language for given @filename and/or @content_type. Return value is owned by @lm and should not be freed.
         */
        guess_language(filename?: string | null, content_type?: string | null): Language | null;
        /**
         * Prepends `path` to the list of directories where the `manager` looks
         * for language files.
         *
         * See [method`LanguageManager`.set_search_path] for details.
         * @param path a directory or a filename.
         */
        prepend_search_path(path: string): void;
        /**
         * Sets the list of directories where the `lm` looks for
         * language files.
         *
         * If `dirs` is %NULL, the search path is reset to default.
         *
         * At the moment this function can be called only before the
         * language files are loaded for the first time. In practice
         * to set a custom search path for a `GtkSourceLanguageManager`,
         * you have to call this function right after creating it.
         *
         * Since GtkSourceView 5.4 this function will allow you to provide
         * paths in the form of "resource:///" URIs to embedded `GResource`s.
         * They must contain the path of a directory within the `GResource`.
         * @param dirs a %NULL-terminated array of   strings or %NULL.
         */
        set_search_path(dirs?: string[] | null): void;
    }

    module Map {
        // Constructor properties interface
    }

    /**
     * Widget that displays a map for a specific [class`View]`.
     *
     * `GtkSourceMap` is a widget that maps the content of a [class`View]` into
     * a smaller view so the user can have a quick overview of the whole document.
     *
     * This works by connecting a [class`View]` to to the `GtkSourceMap` using
     * the [property`Map:`view] property or [method`Map`.set_view].
     *
     * `GtkSourceMap` is a [class`View]` object. This means that you can add a
     * [class`GutterRenderer]` to a gutter in the same way you would for a
     * [class`View]`. One example might be a [class`GutterRenderer]` that shows
     * which lines have changed in the document.
     *
     * Additionally, it is desirable to match the font of the `GtkSourceMap` and
     * the [class`View]` used for editing. Therefore, [property`Map:`font-desc]
     * should be used to set the target font. You will need to adjust this to the
     * desired font size for the map. A 1pt font generally seems to be an
     * appropriate font size. "Monospace 1" is the default. See
     * [method`Pango`.FontDescription.set_size] for how to alter the size of an existing
     * [struct`Pango`.FontDescription].
     *
     * When FontConfig is available, `GtkSourceMap` will try to use a bundled
     * "block" font to make the map more legible.
     */
    class Map extends View {
        // Own properties of GtkSource-5.Map

        font_desc: Pango.FontDescription;
        fontDesc: Pango.FontDescription;
        view: View;

        // Constructors of GtkSource-5.Map

        static ['new'](): Map;

        // Owm methods of GtkSource-5.Map

        /**
         * Gets the [property`Map:`view] property, which is the view this widget is mapping.
         * @returns a #GtkSourceView or %NULL.
         */
        get_view(): View | null;
        /**
         * Sets the view that `map` will be doing the mapping to.
         * @param view a #GtkSourceView
         */
        set_view(view: View): void;
    }

    module Mark {
        // Constructor properties interface
    }

    /**
     * Mark object for [class`Buffer]`.
     *
     * A `GtkSourceMark` marks a position in the text where you want to display
     * additional info. It is based on [class`Gtk`.TextMark] and thus is still valid after
     * the text has changed though its position may change.
     *
     * `GtkSourceMark`s are organized in categories which you have to set
     * when you create the mark. Each category can have a priority, a pixbuf and
     * other associated attributes. See [method`View`.set_mark_attributes].
     * The pixbuf will be displayed in the margin at the line where the mark
     * residents if the [property`View:`show-line-marks] property is set to %TRUE. If
     * there are multiple marks in the same line, the pixbufs will be drawn on top
     * of each other. The mark with the highest priority will be drawn on top.
     */
    class Mark extends Gtk.TextMark {
        // Own properties of GtkSource-5.Mark

        /**
         * The category of the `GtkSourceMark`, classifies the mark and controls
         * which pixbuf is used and with which priority it is drawn.
         */
        category: string;

        // Constructors of GtkSource-5.Mark

        static ['new'](name: string | null, category: string): Mark;

        // Owm methods of GtkSource-5.Mark

        /**
         * Returns the mark category.
         * @returns the category of the #GtkSourceMark.
         */
        get_category(): string;
        /**
         * Returns the next `GtkSourceMark` in the buffer or %NULL if the mark
         * was not added to a buffer.
         *
         *  If there is no next mark, %NULL will be returned.
         *
         * If `category` is %NULL, looks for marks of any category.
         * @param category a string specifying the mark category, or %NULL.
         * @returns the next #GtkSourceMark, or %NULL.
         */
        next(category?: string | null): Mark | null;
        /**
         * Returns the previous `GtkSourceMark` in the buffer or %NULL if the mark
         * was not added to a buffer.
         *
         * If there is no previous mark, %NULL is returned.
         *
         * If `category` is %NULL, looks for marks of any category
         * @param category a string specifying the mark category, or %NULL.
         * @returns the previous #GtkSourceMark, or %NULL.
         */
        prev(category?: string | null): Mark | null;
    }

    module MarkAttributes {
        // Signal callback interfaces

        interface QueryTooltipMarkup {
            (mark: Mark): string;
        }

        interface QueryTooltipText {
            (mark: Mark): string;
        }

        // Constructor properties interface
    }

    /**
     * The source mark attributes object.
     *
     * `GtkSourceMarkAttributes` is an object specifying attributes used by
     * a [class`View]` to visually show lines marked with [class`Mark]`s
     * of a specific category. It allows you to define a background color of a line,
     * an icon shown in gutter and tooltips.
     *
     * The background color is used as a background of a line where a mark is placed
     * and it can be set with [method`MarkAttributes`.set_background]. To check
     * if any custom background color was defined and what color it is, use
     * [method`MarkAttributes`.get_background].
     *
     * An icon is a graphic element which is shown in the gutter of a view. An
     * example use is showing a red filled circle in a debugger to show that a
     * breakpoint was set in certain line. To get an icon that will be placed in
     * a gutter, first a base for it must be specified and then
     * [method`MarkAttributes`.render_icon] must be called.
     * There are several ways to specify a base for an icon:
     *
     * - [method`MarkAttributes`.set_icon_name]
     * - [method`MarkAttributes`.set_gicon]
     * - [method`MarkAttributes`.set_pixbuf]
     *
     * Using any of the above functions overrides the one used earlier. But note
     * that a getter counterpart of earlier used function can still return some
     * value, but it is just not used when rendering the proper icon.
     *
     * To provide meaningful tooltips for a given mark of a category, you should
     * connect to [signal`MarkAttributes:`:query-tooltip-text] or
     * [signal`MarkAttributes:`:query-tooltip-markup] where the latter
     * takes precedence.
     */
    class MarkAttributes extends GObject.Object {
        // Own properties of GtkSource-5.MarkAttributes

        /**
         * A color used for background of a line.
         */
        background: Gdk.RGBA;
        /**
         * A #GIcon that may be a base of a rendered icon.
         */
        gicon: Gio.Icon;
        /**
         * An icon name that may be a base of a rendered icon.
         */
        icon_name: string;
        /**
         * An icon name that may be a base of a rendered icon.
         */
        iconName: string;
        /**
         * A #GdkPixbuf that may be a base of a rendered icon.
         */
        pixbuf: GdkPixbuf.Pixbuf;

        // Constructors of GtkSource-5.MarkAttributes

        static ['new'](): MarkAttributes;

        // Owm methods of GtkSource-5.MarkAttributes

        /**
         * Stores background color in `background`.
         * @returns whether background color for @attributes was set.
         */
        get_background(): boolean;
        /**
         * Gets a [iface`Gio`.Icon] to be used as a base for rendered icon.
         *
         * Note that the icon can be %NULL if it wasn't set earlier.
         * @returns An icon. The icon belongs to @attributes and should not be unreffed.
         */
        get_gicon(): Gio.Icon;
        /**
         * Gets a name of an icon to be used as a base for rendered icon.
         *
         * Note that the icon name can be %NULL if it wasn't set earlier.
         * @returns An icon name. The string belongs to @attributes and should not be freed.
         */
        get_icon_name(): string;
        /**
         * Gets a [class`GdkPixbuf`.Pixbuf] to be used as a base for rendered icon.
         *
         * Note that the pixbuf can be %NULL if it wasn't set earlier.
         * @returns A pixbuf. The pixbuf belongs to @attributes and should not be unreffed.
         */
        get_pixbuf(): GdkPixbuf.Pixbuf;
        /**
         * Queries for a tooltip by emitting a [signal`MarkAttributes:`:query-tooltip-markup] signal.
         *
         * The tooltip may contain a markup.
         * @param mark a #GtkSourceMark.
         * @returns A tooltip. The returned string should be freed by using g_free() when done with it.
         */
        get_tooltip_markup(mark: Mark): string;
        /**
         * Queries for a tooltip by emitting a [signal`MarkAttributes:`:query-tooltip-text] signal.
         *
         * The tooltip is a plain text.
         * @param mark a #GtkSourceMark.
         * @returns A tooltip. The returned string should be freed by using g_free() when done with it.
         */
        get_tooltip_text(mark: Mark): string;
        /**
         * Renders an icon of given size.
         *
         * The base of the icon is set by the last call to one of:
         *
         * - [method`MarkAttributes`.set_pixbuf]
         * - [method`MarkAttributes`.set_gicon]
         * - [method`MarkAttributes`.set_icon_name]
         *
         * `size` cannot be lower than 1.
         * @param widget widget of which style settings may be used.
         * @param size size of the rendered icon.
         * @returns A #GdkPaintable. The paintable belongs to @attributes and should not be unreffed.
         */
        render_icon(widget: Gtk.Widget, size: number): Gdk.Paintable;
        /**
         * Sets background color to the one given in `background`.
         * @param background a #GdkRGBA.
         */
        set_background(background: Gdk.RGBA): void;
        /**
         * Sets an icon to be used as a base for rendered icon.
         * @param gicon a #GIcon to be used.
         */
        set_gicon(gicon: Gio.Icon): void;
        /**
         * Sets a name of an icon to be used as a base for rendered icon.
         * @param icon_name name of an icon to be used.
         */
        set_icon_name(icon_name: string): void;
        /**
         * Sets a pixbuf to be used as a base for rendered icon.
         * @param pixbuf a #GdkPixbuf to be used.
         */
        set_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void;
    }

    module PrintCompositor {
        // Constructor properties interface
    }

    /**
     * Compose a [class`Buffer]` for printing.
     *
     * The `GtkSourcePrintCompositor` object is used to compose a [class`Buffer]`
     * for printing. You can set various configuration options to customize the
     * printed output. `GtkSourcePrintCompositor` is designed to be used with the
     * high-level printing API of gtk+, i.e. [class`Gtk`.PrintOperation].
     *
     * The margins specified in this object are the layout margins: they define the
     * blank space bordering the printed area of the pages. They must not be
     * confused with the "print margins", i.e. the parts of the page that the
     * printer cannot print on, defined in the [class`Gtk`.PageSetup] objects. If the
     * specified layout margins are smaller than the "print margins", the latter
     * ones are used as a fallback by the `GtkSourcePrintCompositor` object, so that
     * the printed area is not clipped.
     */
    class PrintCompositor extends GObject.Object {
        // Own properties of GtkSource-5.PrintCompositor

        /**
         * Name of the font used for the text body.
         *
         * Accepted values are strings representing a font description Pango can understand.
         * (e.g. &quot;Monospace 10&quot;). See [func`Pango`.FontDescription.from_string]
         * for a description of the format of the string representation.
         *
         * The value of this property cannot be changed anymore after the first
         * call to the [method`PrintCompositor`.paginate] function.
         */
        body_font_name: string;
        /**
         * Name of the font used for the text body.
         *
         * Accepted values are strings representing a font description Pango can understand.
         * (e.g. &quot;Monospace 10&quot;). See [func`Pango`.FontDescription.from_string]
         * for a description of the format of the string representation.
         *
         * The value of this property cannot be changed anymore after the first
         * call to the [method`PrintCompositor`.paginate] function.
         */
        bodyFontName: string;
        /**
         * The [class`Buffer]` object to print.
         */
        buffer: Buffer;
        /**
         * Name of the font used to print page footer.
         * If this property is unspecified, the text body font is used.
         *
         * Accepted values are strings representing a font description Pango can understand.
         * (e.g. &quot;Monospace 10&quot;). See [func`Pango`.FontDescription.from_string]
         * for a description of the format of the string representation.
         *
         * The value of this property cannot be changed anymore after the first
         * call to the [method`PrintCompositor`.paginate] function.
         */
        footer_font_name: string;
        /**
         * Name of the font used to print page footer.
         * If this property is unspecified, the text body font is used.
         *
         * Accepted values are strings representing a font description Pango can understand.
         * (e.g. &quot;Monospace 10&quot;). See [func`Pango`.FontDescription.from_string]
         * for a description of the format of the string representation.
         *
         * The value of this property cannot be changed anymore after the first
         * call to the [method`PrintCompositor`.paginate] function.
         */
        footerFontName: string;
        /**
         * Name of the font used to print page header.
         * If this property is unspecified, the text body font is used.
         *
         * Accepted values are strings representing a font description Pango can understand.
         * (e.g. &quot;Monospace 10&quot;). See [func`Pango`.FontDescription.from_string]
         * for a description of the format of the string representation.
         *
         * The value of this property cannot be changed anymore after the first
         * call to the [method`PrintCompositor`.paginate] function.
         */
        header_font_name: string;
        /**
         * Name of the font used to print page header.
         * If this property is unspecified, the text body font is used.
         *
         * Accepted values are strings representing a font description Pango can understand.
         * (e.g. &quot;Monospace 10&quot;). See [func`Pango`.FontDescription.from_string]
         * for a description of the format of the string representation.
         *
         * The value of this property cannot be changed anymore after the first
         * call to the [method`PrintCompositor`.paginate] function.
         */
        headerFontName: string;
        /**
         * Whether to print the document with highlighted syntax.
         *
         * The value of this property cannot be changed anymore after the first
         * call to the [method`PrintCompositor`.paginate] function.
         */
        highlight_syntax: boolean;
        /**
         * Whether to print the document with highlighted syntax.
         *
         * The value of this property cannot be changed anymore after the first
         * call to the [method`PrintCompositor`.paginate] function.
         */
        highlightSyntax: boolean;
        /**
         * Name of the font used to print line numbers on the left margin.
         * If this property is unspecified, the text body font is used.
         *
         * Accepted values are strings representing a font description Pango can understand.
         * (e.g. &quot;Monospace 10&quot;). See [func`Pango`.FontDescription.from_string]
         * for a description of the format of the string representation.
         *
         * The value of this property cannot be changed anymore after the first
         * call to the [method`PrintCompositor`.paginate] function.
         */
        line_numbers_font_name: string;
        /**
         * Name of the font used to print line numbers on the left margin.
         * If this property is unspecified, the text body font is used.
         *
         * Accepted values are strings representing a font description Pango can understand.
         * (e.g. &quot;Monospace 10&quot;). See [func`Pango`.FontDescription.from_string]
         * for a description of the format of the string representation.
         *
         * The value of this property cannot be changed anymore after the first
         * call to the [method`PrintCompositor`.paginate] function.
         */
        lineNumbersFontName: string;
        /**
         * The number of pages in the document or <code>-1</code> if the
         * document has not been completely paginated.
         */
        readonly n_pages: number;
        /**
         * The number of pages in the document or <code>-1</code> if the
         * document has not been completely paginated.
         */
        readonly nPages: number;
        /**
         * Whether to print a footer in each page.
         *
         * Note that by default the footer format is unspecified, and if it is
         * unspecified the footer will not be printed, regardless of the value of
         * this property.
         *
         * The value of this property cannot be changed anymore after the first
         * call to the [method`PrintCompositor`.paginate] function.
         */
        print_footer: boolean;
        /**
         * Whether to print a footer in each page.
         *
         * Note that by default the footer format is unspecified, and if it is
         * unspecified the footer will not be printed, regardless of the value of
         * this property.
         *
         * The value of this property cannot be changed anymore after the first
         * call to the [method`PrintCompositor`.paginate] function.
         */
        printFooter: boolean;
        /**
         * Whether to print a header in each page.
         *
         * Note that by default the header format is unspecified, and if it is
         * unspecified the header will not be printed, regardless of the value of
         * this property.
         *
         * The value of this property cannot be changed anymore after the first
         * call to the [method`PrintCompositor`.paginate] function.
         */
        print_header: boolean;
        /**
         * Whether to print a header in each page.
         *
         * Note that by default the header format is unspecified, and if it is
         * unspecified the header will not be printed, regardless of the value of
         * this property.
         *
         * The value of this property cannot be changed anymore after the first
         * call to the [method`PrintCompositor`.paginate] function.
         */
        printHeader: boolean;
        /**
         * Interval of printed line numbers.
         *
         * If this property is set to 0 no numbers will be printed.
         * If greater than 0, a number will be printed every "print-line-numbers"
         * lines (i.e. 1 will print all line numbers).
         *
         * The value of this property cannot be changed anymore after the first
         * call to the [method`PrintCompositor`.paginate] function.
         */
        print_line_numbers: number;
        /**
         * Interval of printed line numbers.
         *
         * If this property is set to 0 no numbers will be printed.
         * If greater than 0, a number will be printed every "print-line-numbers"
         * lines (i.e. 1 will print all line numbers).
         *
         * The value of this property cannot be changed anymore after the first
         * call to the [method`PrintCompositor`.paginate] function.
         */
        printLineNumbers: number;
        /**
         * Width of a tab character expressed in spaces.
         *
         * The value of this property cannot be changed anymore after the first
         * call to the [method`PrintCompositor`.paginate] function.
         */
        tab_width: number;
        /**
         * Width of a tab character expressed in spaces.
         *
         * The value of this property cannot be changed anymore after the first
         * call to the [method`PrintCompositor`.paginate] function.
         */
        tabWidth: number;
        /**
         * Whether to wrap lines never, at word boundaries, or at character boundaries.
         *
         * The value of this property cannot be changed anymore after the first
         * call to the [method`PrintCompositor`.paginate] function.
         */
        wrap_mode: Gtk.WrapMode;
        /**
         * Whether to wrap lines never, at word boundaries, or at character boundaries.
         *
         * The value of this property cannot be changed anymore after the first
         * call to the [method`PrintCompositor`.paginate] function.
         */
        wrapMode: Gtk.WrapMode;

        // Constructors of GtkSource-5.PrintCompositor

        static ['new'](buffer: Buffer): PrintCompositor;

        static new_from_view(view: View): PrintCompositor;

        // Owm methods of GtkSource-5.PrintCompositor

        /**
         * Draw page `page_nr` for printing on the the Cairo context encapsuled in `context`.
         *
         * This method has been designed to be called in the handler of the [signal`Gtk`.PrintOperation::draw_page] signal
         * as shown in the following example:
         *
         * ```c
         * // Signal handler for the GtkPrintOperation::draw_page signal
         *
         * static void
         * draw_page (GtkPrintOperation *operation,
         *            GtkPrintContext   *context,
         *            gint               page_nr,
         *            gpointer           user_data)
         * {
         *     GtkSourcePrintCompositor *compositor;
         *
         *     compositor = GTK_SOURCE_PRINT_COMPOSITOR (user_data);
         *
         *     gtk_source_print_compositor_draw_page (compositor,
         *                                            context,
         *                                            page_nr);
         * }
         * ```
         * @param context the #GtkPrintContext encapsulating the context information that is required when           drawing the page for printing.
         * @param page_nr the number of the page to print.
         */
        draw_page(context: Gtk.PrintContext, page_nr: number): void;
        /**
         * Returns the name of the font used to print the text body.
         *
         * The returned string must be freed with g_free().
         * @returns a new string containing the name of the font used to print the text body.
         */
        get_body_font_name(): string;
        /**
         * Gets the bottom margin in units of `unit`.
         * @param unit the unit for the return value.
         * @returns the bottom margin.
         */
        get_bottom_margin(unit: Gtk.Unit): number;
        /**
         * Gets the [class`Buffer]` associated with the compositor.
         *
         * The returned object reference is owned by the compositor object and
         * should not be unreferenced.
         * @returns the #GtkSourceBuffer associated with the compositor.
         */
        get_buffer(): Buffer;
        /**
         * Returns the name of the font used to print the page footer.
         *
         * The returned string must be freed with g_free().
         * @returns a new string containing the name of the font used to print the page footer.
         */
        get_footer_font_name(): string;
        /**
         * Returns the name of the font used to print the page header.
         *
         * The returned string must be freed with g_free().
         * @returns a new string containing the name of the font used to print the page header.
         */
        get_header_font_name(): string;
        /**
         * Determines whether the printed text will be highlighted according to the
         * buffer rules.
         *
         * Note that highlighting will happen only if the buffer to print has highlighting activated.
         * @returns %TRUE if the printed output will be highlighted.
         */
        get_highlight_syntax(): boolean;
        /**
         * Gets the left margin in units of `unit`.
         * @param unit the unit for the return value.
         * @returns the left margin
         */
        get_left_margin(unit: Gtk.Unit): number;
        /**
         * Returns the name of the font used to print line numbers on the left margin.
         *
         * The returned string must be freed with g_free().
         * @returns a new string containing the name of the font used to print line numbers on the left margin.
         */
        get_line_numbers_font_name(): string;
        /**
         * Returns the number of pages in the document or <code>-1</code> if the
         * document has not been completely paginated.
         * @returns the number of pages in the document or <code>-1</code> if the document has not been completely paginated.
         */
        get_n_pages(): number;
        /**
         * Returns the current fraction of the document pagination that has been completed.
         * @returns a fraction from 0.0 to 1.0 inclusive.
         */
        get_pagination_progress(): number;
        /**
         * Determines if a footer is set to be printed for each page.
         *
         * A footer will be printed if this function returns %TRUE
         * **and** some format strings have been specified
         * with [method`PrintCompositor`.set_footer_format].
         * @returns %TRUE if the footer is set to be printed.
         */
        get_print_footer(): boolean;
        /**
         * Determines if a header is set to be printed for each page.
         *
         * A header will be printed if this function returns %TRUE
         * **and** some format strings have been specified
         * with [method`PrintCompositor`.set_header_format].
         * @returns %TRUE if the header is set to be printed.
         */
        get_print_header(): boolean;
        /**
         * Returns the interval used for line number printing.
         *
         * If the value is 0, no line numbers will be printed. The default value is
         * 1 (i.e. numbers printed in all lines).
         * @returns the interval of printed line numbers.
         */
        get_print_line_numbers(): number;
        /**
         * Gets the right margin in units of `unit`.
         * @param unit the unit for the return value.
         * @returns the right margin.
         */
        get_right_margin(unit: Gtk.Unit): number;
        /**
         * Returns the width of tabulation in characters for printed text.
         * @returns width of tab.
         */
        get_tab_width(): number;
        /**
         * Gets the top margin in units of `unit`.
         * @param unit the unit for the return value.
         * @returns the top margin.
         */
        get_top_margin(unit: Gtk.Unit): number;
        /**
         * Gets the line wrapping mode for the printed text.
         * @returns the line wrap mode.
         */
        get_wrap_mode(): Gtk.WrapMode;
        /**
         * Specifies a tag whose style should be ignored when compositing the
         * document to the printable page.
         * @param tag a #GtkTextTag
         */
        ignore_tag(tag: Gtk.TextTag): void;
        /**
         * Paginate the document associated with the `compositor`.
         *
         * In order to support non-blocking pagination, document is paginated in small chunks.
         * Each time [method`PrintCompositor`.paginate] is invoked, a chunk of the document
         * is paginated. To paginate the entire document, [method`PrintCompositor`.paginate]
         * must be invoked multiple times.
         * It returns %TRUE if the document has been completely paginated, otherwise it returns %FALSE.
         *
         * This method has been designed to be invoked in the handler of the [signal`Gtk`.PrintOperation::paginate] signal,
         * as shown in the following example:
         *
         * ```c
         * // Signal handler for the GtkPrintOperation::paginate signal
         *
         * static gboolean
         * paginate (GtkPrintOperation *operation,
         *           GtkPrintContext   *context,
         *           gpointer           user_data)
         * {
         *     GtkSourcePrintCompositor *compositor;
         *
         *     compositor = GTK_SOURCE_PRINT_COMPOSITOR (user_data);
         *
         *     if (gtk_source_print_compositor_paginate (compositor, context))
         *     {
         *         gint n_pages;
         *
         *         n_pages = gtk_source_print_compositor_get_n_pages (compositor);
         *         gtk_print_operation_set_n_pages (operation, n_pages);
         *
         *         return TRUE;
         *     }
         *
         *     return FALSE;
         * }
         * ```
         *
         * If you don't need to do pagination in chunks, you can simply do it all in the
         * [signal`Gtk`.PrintOperation::begin-print] handler, and set the number of pages from there, like
         * in the following example:
         *
         * ```c
         * // Signal handler for the GtkPrintOperation::begin-print signal
         *
         * static void
         * begin_print (GtkPrintOperation *operation,
         *              GtkPrintContext   *context,
         *              gpointer           user_data)
         * {
         *     GtkSourcePrintCompositor *compositor;
         *     gint n_pages;
         *
         *     compositor = GTK_SOURCE_PRINT_COMPOSITOR (user_data);
         *
         *     while (!gtk_source_print_compositor_paginate (compositor, context));
         *
         *     n_pages = gtk_source_print_compositor_get_n_pages (compositor);
         *     gtk_print_operation_set_n_pages (operation, n_pages);
         * }
         * ```
         * @param context the #GtkPrintContext whose parameters (e.g. paper size, print margins, etc.) are used by the the @compositor to paginate the document.
         * @returns %TRUE if the document has been completely paginated, %FALSE otherwise.
         */
        paginate(context: Gtk.PrintContext): boolean;
        /**
         * Sets the default font for the printed text.
         *
         * `font_name` should be a
         * string representation of a font description Pango can understand.
         * (e.g. &quot;Monospace 10&quot;). See [func`Pango`.FontDescription.from_string]
         * for a description of the format of the string representation.
         *
         * This function cannot be called anymore after the first call to the
         * [method`PrintCompositor`.paginate] function.
         * @param font_name the name of the default font for the body text.
         */
        set_body_font_name(font_name: string): void;
        /**
         * Sets the bottom margin used by `compositor`.
         * @param margin the new bottom margin in units of @unit.
         * @param unit the units for @margin.
         */
        set_bottom_margin(margin: number, unit: Gtk.Unit): void;
        /**
         * Sets the font for printing the page footer.
         *
         * If %NULL is supplied, the default font (i.e. the one being used for the
         * text) will be used instead.
         *
         * `font_name` should be a
         * string representation of a font description Pango can understand.
         * (e.g. &quot;Monospace 10&quot;). See [func`Pango`.FontDescription.from_string]
         * for a description of the format of the string representation.
         *
         * This function cannot be called anymore after the first call to the
         * [method`PrintCompositor`.paginate] function.
         * @param font_name the name of the font for the footer text, or %NULL.
         */
        set_footer_font_name(font_name?: string | null): void;
        /**
         * See [method`PrintCompositor`.set_header_format] for more information
         * about the parameters.
         * @param separator %TRUE if you want a separator line to be printed.
         * @param left a format string to print on the left of the footer.
         * @param center a format string to print on the center of the footer.
         * @param right a format string to print on the right of the footer.
         */
        set_footer_format(
            separator: boolean,
            left?: string | null,
            center?: string | null,
            right?: string | null,
        ): void;
        /**
         * Sets the font for printing the page header.
         *
         * If %NULL is supplied, the default font (i.e. the one being used for the
         * text) will be used instead.
         *
         * `font_name` should be a
         * string representation of a font description Pango can understand.
         * (e.g. &quot;Monospace 10&quot;). See [func`Pango`.FontDescription.from_string]
         * for a description of the format of the string representation.
         *
         * This function cannot be called anymore after the first call to the
         * [method`PrintCompositor`.paginate] function.
         * @param font_name the name of the font for header text, or %NULL.
         */
        set_header_font_name(font_name?: string | null): void;
        /**
         * Sets strftime like header format strings, to be printed on the
         * left, center and right of the top of each page.
         *
         * The strings may include strftime(3) codes which will be expanded at print time.
         * A subset of strftime() codes are accepted, see [method`GLib`.DateTime.format]
         * for more details on the accepted format specifiers.
         * Additionally the following format specifiers are accepted:
         *
         * - #N: the page number
         * - #Q: the page count.
         *
         * `separator` specifies if a solid line should be drawn to separate
         * the header from the document text.
         *
         * If %NULL is given for any of the three arguments, that particular
         * string will not be printed.
         *
         * For the header to be printed, in
         * addition to specifying format strings, you need to enable header
         * printing with [method`PrintCompositor`.set_print_header].
         *
         * This function cannot be called anymore after the first call to the
         * [method`PrintCompositor`.paginate] function.
         * @param separator %TRUE if you want a separator line to be printed.
         * @param left a format string to print on the left of the header.
         * @param center a format string to print on the center of the header.
         * @param right a format string to print on the right of the header.
         */
        set_header_format(
            separator: boolean,
            left?: string | null,
            center?: string | null,
            right?: string | null,
        ): void;
        /**
         * Sets whether the printed text will be highlighted according to the
         * buffer rules.  Both color and font style are applied.
         *
         * This function cannot be called anymore after the first call to the
         * [method`PrintCompositor`.paginate] function.
         * @param highlight whether syntax should be highlighted.
         */
        set_highlight_syntax(highlight: boolean): void;
        /**
         * Sets the left margin used by `compositor`.
         * @param margin the new left margin in units of @unit.
         * @param unit the units for @margin.
         */
        set_left_margin(margin: number, unit: Gtk.Unit): void;
        /**
         * Sets the font for printing line numbers on the left margin.
         *
         * If %NULL is supplied, the default font (i.e. the one being used for the
         * text) will be used instead.
         *
         * `font_name` should be a
         * string representation of a font description Pango can understand.
         * (e.g. &quot;Monospace 10&quot;). See [func`Pango`.FontDescription.from_string]
         * for a description of the format of the string representation.
         *
         * This function cannot be called anymore after the first call to the
         * [method`PrintCompositor`.paginate] function.
         * @param font_name the name of the font for line numbers, or %NULL.
         */
        set_line_numbers_font_name(font_name?: string | null): void;
        /**
         * Sets whether you want to print a footer in each page.
         *
         * The footer consists of three pieces of text and an optional line
         * separator, configurable with
         * [method`PrintCompositor`.set_footer_format].
         *
         * Note that by default the footer format is unspecified, and if it's
         * empty it will not be printed, regardless of this setting.
         *
         * This function cannot be called anymore after the first call to the
         * [method`PrintCompositor`.paginate] function.
         * @param print %TRUE if you want the footer to be printed.
         */
        set_print_footer(print: boolean): void;
        /**
         * Sets whether you want to print a header in each page.
         *
         * The header consists of three pieces of text and an optional line
         * separator, configurable with [method`PrintCompositor`.set_header_format].
         *
         * Note that by default the header format is unspecified, and if it's
         * empty it will not be printed, regardless of this setting.
         *
         * This function cannot be called anymore after the first call to the
         * [method`PrintCompositor`.paginate] function.
         * @param print %TRUE if you want the header to be printed.
         */
        set_print_header(print: boolean): void;
        /**
         * Sets the interval for printed line numbers.
         *
         * If `interval` is 0 no numbers will be printed. If greater than 0, a number will be
         * printed every `interval` lines (i.e. 1 will print all line numbers).
         *
         * Maximum accepted value for `interval` is 100.
         *
         * This function cannot be called anymore after the first call to the
         * [method`PrintCompositor`.paginate] function.
         * @param interval interval for printed line numbers.
         */
        set_print_line_numbers(interval: number): void;
        /**
         * Sets the right margin used by `compositor`.
         * @param margin the new right margin in units of @unit.
         * @param unit the units for @margin.
         */
        set_right_margin(margin: number, unit: Gtk.Unit): void;
        /**
         * Sets the width of tabulation in characters for printed text.
         *
         * This function cannot be called anymore after the first call to the
         * [method`PrintCompositor`.paginate] function.
         * @param width width of tab in characters.
         */
        set_tab_width(width: number): void;
        /**
         * Sets the top margin used by `compositor`.
         * @param margin the new top margin in units of @unit
         * @param unit the units for @margin
         */
        set_top_margin(margin: number, unit: Gtk.Unit): void;
        /**
         * Sets the line wrapping mode for the printed text.
         *
         * This function cannot be called anymore after the first call to the
         * [method`PrintCompositor`.paginate] function.
         * @param wrap_mode a #GtkWrapMode.
         */
        set_wrap_mode(wrap_mode: Gtk.WrapMode): void;
    }

    module Region {
        // Constructor properties interface
    }

    /**
     * Region utility.
     *
     * A `GtkSourceRegion` permits to store a group of subregions of a
     * [class`Gtk`.TextBuffer]. `GtkSourceRegion` stores the subregions with pairs of
     * [class`Gtk`.TextMark]'s, so the region is still valid after insertions and deletions
     * in the [class`Gtk`.TextBuffer].
     *
     * The [class`Gtk`.TextMark] for the start of a subregion has a left gravity, while the
     * [class`Gtk`.TextMark] for the end of a subregion has a right gravity.
     *
     * The typical use-case of `GtkSourceRegion` is to scan a [class`Gtk`.TextBuffer] chunk by
     * chunk, not the whole buffer at once to not block the user interface. The
     * `GtkSourceRegion` represents in that case the remaining region to scan. You
     * can listen to the [signal`Gtk`.TextBuffer::insert-text] and
     * [signal`Gtk`.TextBuffer::delete-range] signals to update the `GtkSourceRegion`
     * accordingly.
     *
     * To iterate through the subregions, you need to use a [struct`RegionIter]`,
     * for example:
     * ```c
     * GtkSourceRegion *region;
     * GtkSourceRegionIter region_iter;
     *
     * gtk_source_region_get_start_region_iter (region, &region_iter);
     *
     * while (!gtk_source_region_iter_is_end (&region_iter))
     * {
     *         GtkTextIter subregion_start;
     *         GtkTextIter subregion_end;
     *
     *         if (!gtk_source_region_iter_get_subregion (&region_iter,
     *                                                    &subregion_start,
     *                                                    &subregion_end))
     *         {
     *                 break;
     *         }
     *
     *         // Do something useful with the subregion.
     *
     *         gtk_source_region_iter_next (&region_iter);
     * }
     * ```
     */
    class Region extends GObject.Object {
        // Own properties of GtkSource-5.Region

        /**
         * The [class`Gtk`.TextBuffer]. The #GtkSourceRegion has a weak reference to the
         * buffer.
         */
        buffer: Gtk.TextBuffer;

        // Constructors of GtkSource-5.Region

        static ['new'](buffer: Gtk.TextBuffer): Region;

        // Owm methods of GtkSource-5.Region

        /**
         * Adds `region_to_add` to `region`.
         *
         * `region_to_add` is not modified.
         * @param region_to_add the #GtkSourceRegion to add to @region, or %NULL.
         */
        add_region(region_to_add?: Region | null): void;
        /**
         * Adds the subregion delimited by `_start` and `_end` to `region`.
         * @param _start the start of the subregion.
         * @param _end the end of the subregion.
         */
        add_subregion(_start: Gtk.TextIter, _end: Gtk.TextIter): void;
        /**
         * Gets the `start` and `end` bounds of the `region`.
         * @returns %TRUE if @start and @end have been set successfully (if non-%NULL),   or %FALSE if the @region is empty.
         */
        get_bounds(): boolean;
        get_buffer(): Gtk.TextBuffer | null;
        /**
         * Initializes a [struct`RegionIter]` to the first subregion of `region`.
         *
         * If `region` is empty, `iter` will be initialized to the end iterator.
         */
        get_start_region_iter(): void;
        /**
         * Returns the intersection between `region1` and `region2`.
         *
         * `region1` and `region2` are not modified.
         * @param region2 a #GtkSourceRegion, or %NULL.
         * @returns the intersection as a #GtkSourceRegion   object.
         */
        intersect_region(region2?: Region | null): Region | null;
        /**
         * Returns the intersection between `region` and the subregion delimited by
         * `_start` and `_end`.
         *
         * `region` is not modified.
         * @param _start the start of the subregion.
         * @param _end the end of the subregion.
         * @returns the intersection as a new   #GtkSourceRegion.
         */
        intersect_subregion(_start: Gtk.TextIter, _end: Gtk.TextIter): Region | null;
        /**
         * Returns whether the `region` is empty.
         *
         * A %NULL `region` is considered empty.
         * @returns whether the @region is empty.
         */
        is_empty(): boolean;
        /**
         * Subtracts `region_to_subtract` from `region`.
         *
         * `region_to_subtract` is not modified.
         * @param region_to_subtract the #GtkSourceRegion to subtract from   @region, or %NULL.
         */
        subtract_region(region_to_subtract?: Region | null): void;
        /**
         * Subtracts the subregion delimited by `_start` and `_end` from `region`.
         * @param _start the start of the subregion.
         * @param _end the end of the subregion.
         */
        subtract_subregion(_start: Gtk.TextIter, _end: Gtk.TextIter): void;
        /**
         * Gets a string represention of `region,` for debugging purposes.
         *
         * The returned string contains the character offsets of the subregions. It
         * doesn't include a newline character at the end of the string.
         * @returns a string represention of @region. Free   with g_free() when no longer needed.
         */
        to_string(): string | null;
    }

    module SearchContext {
        // Constructor properties interface
    }

    /**
     * Search context.
     *
     * A `GtkSourceSearchContext` is used for the search and replace in a
     * [class`Buffer]`. The search settings are represented by a
     * [class`SearchSettings]` object. There can be a many-to-many relationship
     * between buffers and search settings, with the search contexts in-between: a
     * search settings object can be shared between several search contexts; and a
     * buffer can contain several search contexts at the same time.
     *
     * The total number of search occurrences can be retrieved with
     * [method`SearchContext`.get_occurrences_count]. To know the position of a
     * certain match, use [method`SearchContext`.get_occurrence_position].
     *
     * The buffer is scanned asynchronously, so it doesn't block the user interface.
     * For each search, the buffer is scanned at most once. After that, navigating
     * through the occurrences doesn't require to re-scan the buffer entirely.
     *
     * To search forward, use [method`SearchContext`.forward] or
     * [method`SearchContext`.forward_async] for the asynchronous version.
     * The backward search is done similarly. To replace a search match, or all
     * matches, use [method`SearchContext`.replace] and
     * [method`SearchContext`.replace_all].
     *
     * The search occurrences are highlighted by default. To disable it, use
     * [method`SearchContext`.set_highlight]. You can enable the search
     * highlighting for several `GtkSourceSearchContext`s attached to the
     * same buffer. Moreover, each of those `GtkSourceSearchContext`s can
     * have a different text style associated. Use
     * [method`SearchContext`.set_match_style] to specify the [class`Style]`
     * to apply on search matches.
     *
     * Note that the [property`SearchContext:`highlight] and
     * [property`SearchContext:`match-style] properties are in the
     * `GtkSourceSearchContext` class, not [class`SearchSettings]`. Appearance
     * settings should be tied to one, and only one buffer, as different buffers can
     * have different style scheme associated (a [class`SearchSettings]` object
     * can be bound indirectly to several buffers).
     *
     * The concept of "current match" doesn't exist yet. A way to highlight
     * differently the current match is to select it.
     *
     * A search occurrence's position doesn't depend on the cursor position or other
     * parameters. Take for instance the buffer "aaaa" with the search text "aa".
     * The two occurrences are at positions [0:2] and [2:4]. If you begin to search
     * at position 1, you will get the occurrence [2:4], not [1:3]. This is a
     * prerequisite for regular expression searches. The pattern ".*" matches the
     * entire line. If the cursor is at the middle of the line, you don't want the
     * rest of the line as the occurrence, you want an entire line. (As a side note,
     * regular expression searches can also match multiple lines.)
     *
     * In the GtkSourceView source code, there is an example of how to use the
     * search and replace API: see the tests/test-search.c file. It is a mini
     * application for the search and replace, with a basic user interface.
     */
    class SearchContext extends GObject.Object {
        // Own properties of GtkSource-5.SearchContext

        /**
         * The [class`Buffer]` associated to the search context.
         */
        buffer: Buffer;
        /**
         * Highlight the search occurrences.
         */
        highlight: boolean;
        /**
         * A [class`Style]`, or %NULL for theme's scheme default style.
         */
        match_style: Style;
        /**
         * A [class`Style]`, or %NULL for theme's scheme default style.
         */
        matchStyle: Style;
        /**
         * The total number of search occurrences. If the search is disabled,
         * the value is 0. If the buffer is not already fully scanned, the value
         * is -1.
         */
        readonly occurrences_count: number;
        /**
         * The total number of search occurrences. If the search is disabled,
         * the value is 0. If the buffer is not already fully scanned, the value
         * is -1.
         */
        readonly occurrencesCount: number;
        /**
         * If the regex search pattern doesn't follow all the rules, this
         * #GError property will be set. If the pattern is valid, the value is
         * %NULL.
         *
         * Free with [method`GLib`.Error.free].
         */
        readonly regex_error: GLib.Error;
        /**
         * If the regex search pattern doesn't follow all the rules, this
         * #GError property will be set. If the pattern is valid, the value is
         * %NULL.
         *
         * Free with [method`GLib`.Error.free].
         */
        readonly regexError: GLib.Error;
        /**
         * The [class`SearchSettings]` associated to the search context.
         *
         * This property is construct-only since version 4.0.
         */
        settings: SearchSettings;

        // Constructors of GtkSource-5.SearchContext

        static ['new'](buffer: Buffer, settings?: SearchSettings | null): SearchContext;

        // Owm methods of GtkSource-5.SearchContext

        /**
         * Synchronous backward search.
         *
         * It is recommended to use the asynchronous functions instead, to not block the user interface.
         * However, if you are sure that the `buffer` is small, this function is more convenient to use.
         *
         * If the [property`SearchSettings:`wrap-around] property is %FALSE, this function
         * doesn't try to wrap around.
         *
         * The `has_wrapped_around` out parameter is set independently of whether a match
         * is found. So if this function returns %FALSE, `has_wrapped_around` will have
         * the same value as the [property`SearchSettings:`wrap-around] property.
         * @param iter start of search.
         * @returns whether a match was found.
         */
        backward(iter: Gtk.TextIter): boolean;
        /**
         * The asynchronous version of [method`SearchContext`.backward].
         *
         * See the [iface`Gio`.AsyncResult] documentation to know how to use this function.
         *
         * If the operation is cancelled, the `callback` will only be called if
         * `cancellable` was not %NULL. The method takes
         * ownership of `cancellable,` so you can unref it after calling this function.
         * @param iter start of search.
         * @param cancellable a #GCancellable, or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the operation is finished.
         */
        backward_async(
            iter: Gtk.TextIter,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes a backward search started with
         * [method`SearchContext`.backward_async].
         *
         * See the documentation of [method`SearchContext`.backward] for more
         * details.
         * @param result a #GAsyncResult.
         * @returns whether a match was found.
         */
        backward_finish(result: Gio.AsyncResult): boolean;
        /**
         * Synchronous forward search.
         *
         * It is recommended to use the asynchronous functions instead, to not block the user interface.
         * However, if you are sure that the `buffer` is small, this function is more convenient to use.
         *
         * If the [property`SearchSettings:`wrap-around] property is %FALSE, this function
         * doesn't try to wrap around.
         *
         * The `has_wrapped_around` out parameter is set independently of whether a match
         * is found. So if this function returns %FALSE, `has_wrapped_around` will have
         * the same value as the  [property`SearchSettings:`wrap-around] property.
         * @param iter start of search.
         * @returns whether a match was found.
         */
        forward(iter: Gtk.TextIter): boolean;
        /**
         * The asynchronous version of [method`SearchContext`.forward].
         *
         * See the [iface`Gio`.AsyncResult] documentation to know how to use this function.
         *
         * If the operation is cancelled, the `callback` will only be called if
         * `cancellable` was not %NULL. The method takes
         * ownership of `cancellable,` so you can unref it after calling this function.
         * @param iter start of search.
         * @param cancellable a #GCancellable, or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the operation is finished.
         */
        forward_async(
            iter: Gtk.TextIter,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes a forward search started with [method`SearchContext`.forward_async].
         *
         * See the documentation of [method`SearchContext`.forward] for more
         * details.
         * @param result a #GAsyncResult.
         * @returns whether a match was found.
         */
        forward_finish(result: Gio.AsyncResult): boolean;
        get_buffer(): Buffer;
        get_highlight(): boolean;
        get_match_style(): Style;
        /**
         * Gets the position of a search occurrence.
         *
         * If the buffer is not already fully scanned, the position may be unknown,
         * and -1 is returned. If 0 is returned, it means that this part of the buffer
         * has already been scanned, and that `match_start` and `match_end` don't delimit an occurrence.
         * @param match_start the start of the occurrence.
         * @param match_end the end of the occurrence.
         * @returns the position of the search occurrence. The first occurrence has the position 1 (not 0). Returns 0 if @match_start and @match_end don't delimit an occurrence. Returns -1 if the position is not yet known.
         */
        get_occurrence_position(match_start: Gtk.TextIter, match_end: Gtk.TextIter): number;
        /**
         * Gets the total number of search occurrences.
         *
         * If the buffer is not already fully scanned, the total number of occurrences is
         * unknown, and -1 is returned.
         * @returns the total number of search occurrences, or -1 if unknown.
         */
        get_occurrences_count(): number;
        /**
         * Regular expression patterns must follow certain rules. If
         * [property`SearchSettings:`search-text] breaks a rule, the error can be
         * retrieved with this function.
         *
         * The error domain is [error`GLib`.RegexError].
         *
         * Free the return value with [method`GLib`.Error.free].
         * @returns the #GError, or %NULL if the   pattern is valid.
         */
        get_regex_error(): GLib.Error | null;
        get_settings(): SearchSettings;
        /**
         * Replaces a search match by another text. If `match_start` and `match_end`
         * doesn't correspond to a search match, %FALSE is returned.
         *
         * `match_start` and `match_end` iters are revalidated to point to the replacement
         * text boundaries.
         *
         * For a regular expression replacement, you can check if `replace` is valid by
         * calling [func`GLib`.Regex.check_replacement]. The `replace` text can contain
         * backreferences.
         * @param match_start the start of the match to replace.
         * @param match_end the end of the match to replace.
         * @param replace the replacement text.
         * @param replace_length the length of @replace in bytes, or -1.
         * @returns whether the match has been replaced.
         */
        replace(match_start: Gtk.TextIter, match_end: Gtk.TextIter, replace: string, replace_length: number): boolean;
        /**
         * Replaces all search matches by another text.
         *
         * It is a synchronous function, so it can block the user interface.
         *
         * For a regular expression replacement, you can check if `replace` is valid by
         * calling [func`GLib`.Regex.check_replacement]. The `replace` text can contain
         * backreferences.
         * @param replace the replacement text.
         * @param replace_length the length of @replace in bytes, or -1.
         * @returns the number of replaced matches.
         */
        replace_all(replace: string, replace_length: number): number;
        /**
         * Enables or disables the search occurrences highlighting.
         * @param highlight the setting.
         */
        set_highlight(highlight: boolean): void;
        /**
         * Set the style to apply on search matches.
         *
         * If `match_style` is %NULL, default theme's scheme 'match-style' will be used.
         * To enable or disable the search highlighting, use [method`SearchContext`.set_highlight].
         * @param match_style a #GtkSourceStyle, or %NULL.
         */
        set_match_style(match_style?: Style | null): void;
    }

    module SearchSettings {
        // Constructor properties interface
    }

    /**
     * Search settings.
     *
     * A `GtkSourceSearchSettings` object represents the settings of a search. The
     * search settings can be associated with one or several
     * [class`SearchContext]`s.
     */
    class SearchSettings extends GObject.Object {
        // Own properties of GtkSource-5.SearchSettings

        /**
         * If %TRUE, a search match must start and end a word. The match can
         * span multiple words.
         */
        at_word_boundaries: boolean;
        /**
         * If %TRUE, a search match must start and end a word. The match can
         * span multiple words.
         */
        atWordBoundaries: boolean;
        /**
         * Whether the search is case sensitive.
         */
        case_sensitive: boolean;
        /**
         * Whether the search is case sensitive.
         */
        caseSensitive: boolean;
        /**
         * Search by regular expressions with
         * [property`SearchSettings:`search-text] as the pattern.
         */
        regex_enabled: boolean;
        /**
         * Search by regular expressions with
         * [property`SearchSettings:`search-text] as the pattern.
         */
        regexEnabled: boolean;
        /**
         * A search string, or %NULL if the search is disabled.
         *
         * If the regular expression search is enabled, [property`SearchSettings:`search-text] is
         * the pattern.
         */
        search_text: string;
        /**
         * A search string, or %NULL if the search is disabled.
         *
         * If the regular expression search is enabled, [property`SearchSettings:`search-text] is
         * the pattern.
         */
        searchText: string;
        /**
         * For a forward search, continue at the beginning of the buffer if no
         * search occurrence is found. For a backward search, continue at the
         * end of the buffer.
         */
        wrap_around: boolean;
        /**
         * For a forward search, continue at the beginning of the buffer if no
         * search occurrence is found. For a backward search, continue at the
         * end of the buffer.
         */
        wrapAround: boolean;

        // Constructors of GtkSource-5.SearchSettings

        static ['new'](): SearchSettings;

        // Owm methods of GtkSource-5.SearchSettings

        get_at_word_boundaries(): boolean;
        get_case_sensitive(): boolean;
        get_regex_enabled(): boolean;
        /**
         * Gets the text to search.
         *
         * The return value must not be freed.
         *
         * You may be interested to call [func`utils_escape_search_text]` after
         * this function.
         * @returns the text to search, or %NULL if the search is disabled.
         */
        get_search_text(): string | null;
        get_wrap_around(): boolean;
        /**
         * Change whether the search is done at word boundaries.
         *
         * If `at_word_boundaries` is %TRUE, a search match must start and end a word.
         * The match can span multiple words. See also [method`Gtk`.TextIter.starts_word] and
         * [method`Gtk`.TextIter.ends_word].
         * @param at_word_boundaries the setting.
         */
        set_at_word_boundaries(at_word_boundaries: boolean): void;
        /**
         * Enables or disables the case sensitivity for the search.
         * @param case_sensitive the setting.
         */
        set_case_sensitive(case_sensitive: boolean): void;
        /**
         * Enables or disables whether to search by regular expressions.
         *
         * If enabled, the [property`SearchSettings:`search-text] property contains the
         * pattern of the regular expression.
         *
         * [class`SearchContext]` uses #GRegex when regex search is enabled. See the
         * [Regular expression syntax](https://developer.gnome.org/glib/stable/glib-regex-syntax.html)
         * page in the GLib reference manual.
         * @param regex_enabled the setting.
         */
        set_regex_enabled(regex_enabled: boolean): void;
        /**
         * Sets the text to search.
         *
         * If `search_text` is %NULL or is empty, the search will be disabled. A copy of `search_text`
         * will be made, so you can safely free `search_text` after a call to this function.
         *
         * You may be interested to call [func`utils_unescape_search_text]` before
         * this function.
         * @param search_text the nul-terminated text to search, or %NULL to disable the search.
         */
        set_search_text(search_text?: string | null): void;
        /**
         * Enables or disables the wrap around search.
         *
         * If `wrap_around` is %TRUE, the forward search continues at the beginning of the buffer
         * if no search occurrences are found. Similarly, the backward search continues to search at
         * the end of the buffer.
         * @param wrap_around the setting.
         */
        set_wrap_around(wrap_around: boolean): void;
    }

    module Snippet {
        // Constructor properties interface
    }

    /**
     * Quick insertion code snippets.
     *
     * The `GtkSourceSnippet` represents a series of chunks that can quickly be
     * inserted into the [class`View]`.
     *
     * Snippets are defined in XML files which are loaded by the
     * [class`SnippetManager]`. Alternatively, applications can create snippets
     * on demand and insert them into the [class`View]` using
     * [method`View`.push_snippet].
     *
     * Snippet chunks can reference other snippet chunks as well as post-process
     * the values from other chunks such as capitalization.
     */
    class Snippet extends GObject.Object {
        // Own properties of GtkSource-5.Snippet

        readonly buffer: Gtk.TextBuffer;
        description: string;
        readonly focus_position: number;
        readonly focusPosition: number;
        language_id: string;
        languageId: string;
        name: string;
        trigger: string;

        // Constructors of GtkSource-5.Snippet

        static ['new'](trigger?: string | null, language_id?: string | null): Snippet;

        static new_parsed(text: string): Snippet;

        // Owm methods of GtkSource-5.Snippet

        /**
         * Appends `chunk` to the `snippet`.
         *
         * This may only be called before the snippet has been expanded.
         * @param chunk a #GtkSourceSnippetChunk
         */
        add_chunk(chunk: SnippetChunk): void;
        /**
         * Does a deep copy of the snippet.
         * @returns A new #GtkSourceSnippet
         */
        copy(): Snippet;
        /**
         * Gets the context used for expanding the snippet.
         * @returns an #GtkSourceSnippetContext
         */
        get_context(): SnippetContext | null;
        /**
         * Gets the description for the snippet.
         */
        get_description(): string;
        /**
         * Gets the current focus for the snippet.
         *
         * This is changed as the user tabs through focus locations.
         * @returns The focus position, or -1 if unset.
         */
        get_focus_position(): number;
        /**
         * Gets the language-id used for the source snippet.
         *
         * The language identifier should be one that matches a
         * source language [property`Language:`id] property.
         * @returns the language identifier
         */
        get_language_id(): string;
        /**
         * Gets the number of chunks in the snippet.
         *
         * Note that not all chunks are editable.
         * @returns The number of chunks.
         */
        get_n_chunks(): number;
        /**
         * Gets the name for the snippet.
         */
        get_name(): string;
        /**
         * Gets the chunk at `nth`.
         * @param nth the nth chunk to get
         * @returns an #GtkSourceSnippetChunk
         */
        get_nth_chunk(nth: number): SnippetChunk;
        /**
         * Gets the trigger for the source snippet.
         *
         * A trigger is a word that can be expanded into the full snippet when
         * the user presses Tab.
         * @returns A string or %NULL
         */
        get_trigger(): string | null;
        /**
         * Sets the description for the snippet.
         * @param description the snippet description
         */
        set_description(description: string): void;
        /**
         * Sets the language identifier for the snippet.
         *
         * This should match the [property`Language:`id] identifier.
         * @param language_id the language identifier for the snippet
         */
        set_language_id(language_id: string): void;
        /**
         * Sets the name for the snippet.
         * @param name the snippet name
         */
        set_name(name: string): void;
        /**
         * Sets the trigger for the snippet.
         * @param trigger the trigger word
         */
        set_trigger(trigger: string): void;
    }

    module SnippetChunk {
        // Constructor properties interface
    }

    /**
     * A chunk of text within the source snippet.
     *
     * The `GtkSourceSnippetChunk` represents a single chunk of text that
     * may or may not be an edit point within the snippet. Chunks that are
     * an edit point (also called a tab stop) have the
     * [property`SnippetChunk:`focus-position] property set.
     */
    class SnippetChunk extends GObject.InitiallyUnowned {
        // Own properties of GtkSource-5.SnippetChunk

        context: SnippetContext;
        focus_position: number;
        focusPosition: number;
        spec: string;
        text: string;
        text_set: boolean;
        textSet: boolean;
        tooltip_text: string;
        tooltipText: string;

        // Constructors of GtkSource-5.SnippetChunk

        static ['new'](): SnippetChunk;

        // Owm methods of GtkSource-5.SnippetChunk

        /**
         * Copies the source snippet.
         * @returns A #GtkSourceSnippetChunk
         */
        copy(): SnippetChunk;
        /**
         * Gets the context for the snippet insertion.
         * @returns A #GtkSourceSnippetContext
         */
        get_context(): SnippetContext;
        /**
         * Gets the [property`SnippetChunk:`focus-position].
         *
         * The focus-position is used to determine how many tabs it takes for the
         * snippet to advanced to this chunk.
         *
         * A focus-position of zero will be the last focus position of the snippet
         * and snippet editing ends when it has been reached.
         *
         * A focus-position of -1 means the chunk cannot be focused by the user.
         * @returns the focus-position
         */
        get_focus_position(): number;
        /**
         * Gets the specification for the chunk.
         *
         * The specification is evaluated for variables when other chunks are edited
         * within the snippet context. If the user has changed the text, the
         * [property`SnippetChunk:`text] and [property`SnippetChunk:`text-set] properties
         * are updated.
         * @returns the specification, if any
         */
        get_spec(): string | null;
        /**
         * Gets the [property`SnippetChunk:`text] property.
         *
         * The text property is updated when the user edits the text of the chunk.
         * If it has not been edited, the [property`SnippetChunk:`spec] property is
         * returned.
         * @returns the text of the chunk
         */
        get_text(): string;
        /**
         * Gets the [property`SnippetChunk:`text-set] property.
         *
         * This is typically set when the user has edited a snippet chunk.
         */
        get_text_set(): boolean;
        get_tooltip_text(): string;
        set_context(context: SnippetContext): void;
        /**
         * Sets the [property`SnippetChunk:`focus-position] property.
         *
         * The focus-position is used to determine how many tabs it takes for the
         * snippet to advanced to this chunk.
         *
         * A focus-position of zero will be the last focus position of the snippet
         * and snippet editing ends when it has been reached.
         *
         * A focus-position of -1 means the chunk cannot be focused by the user.
         * @param focus_position the focus-position
         */
        set_focus_position(focus_position: number): void;
        /**
         * Sets the specification for the chunk.
         *
         * The specification is evaluated for variables when other chunks are edited
         * within the snippet context. If the user has changed the text, the
         * [property`SnippetChunk:`text and] [property`SnippetChunk:`text-set] properties
         * are updated.
         * @param spec the new specification for the chunk
         */
        set_spec(spec: string): void;
        /**
         * Sets the text for the snippet chunk.
         *
         * This is usually used by the snippet engine to update the text, but may
         * be useful when creating custom snippets to avoid expansion of any
         * specification.
         * @param text the text of the property
         */
        set_text(text: string): void;
        /**
         * Sets the [property`SnippetChunk:`text-set] property.
         *
         * This is typically set when the user has edited a snippet chunk by the
         * snippet engine.
         * @param text_set the property value
         */
        set_text_set(text_set: boolean): void;
        set_tooltip_text(tooltip_text: string): void;
    }

    module SnippetContext {
        // Signal callback interfaces

        interface Changed {
            (): void;
        }

        // Constructor properties interface
    }

    /**
     * Context for expanding [class`SnippetChunk]`.
     *
     * This class is currently used primary as a hashtable. However, the longer
     * term goal is to have it hold onto a `GjsContext` as well as other languages
     * so that [class`SnippetChunk]` can expand themselves by executing
     * script within the context.
     *
     * The [class`Snippet]` will build the context and then expand each of the
     * chunks during the insertion/edit phase.
     */
    class SnippetContext extends GObject.Object {
        // Constructors of GtkSource-5.SnippetContext

        static ['new'](): SnippetContext;

        // Owm methods of GtkSource-5.SnippetContext

        /**
         * Removes all variables from the context.
         */
        clear_variables(): void;
        expand(input: string): string;
        /**
         * Gets the current value for a variable named `key`.
         * @param key the name of the variable
         * @returns the value for the variable, or %NULL
         */
        get_variable(key: string): string | null;
        /**
         * Sets a constatnt within the context.
         *
         * This is similar to a variable set with [method`SnippetContext`.set_variable]
         * but is expected to not change during use of the snippet.
         *
         * Examples would be the date or users name.
         * @param key the constant name
         * @param value the value of the constant
         */
        set_constant(key: string, value: string): void;
        set_line_prefix(line_prefix: string): void;
        set_tab_width(tab_width: number): void;
        set_use_spaces(use_spaces: boolean): void;
        /**
         * Sets a variable within the context.
         *
         * This variable may be overridden by future updates to the
         * context.
         * @param key the variable name
         * @param value the value for the variable
         */
        set_variable(key: string, value: string): void;
    }

    module SnippetManager {
        // Constructor properties interface
    }

    /**
     * Provides access to [class`Snippet]`.
     *
     * `GtkSourceSnippetManager` is an object which processes snippet description
     * files and creates [class`Snippet]` objects.
     *
     * Use [func`SnippetManager`.get_default] to retrieve the default
     * instance of `GtkSourceSnippetManager`.
     *
     * Use [method`SnippetManager`.get_snippet] to retrieve snippets for
     * a given snippets.
     */
    class SnippetManager extends GObject.Object {
        // Own properties of GtkSource-5.SnippetManager

        /**
         * Contains a list of directories to search for files containing snippets (*.snippets).
         */
        search_path: string[];
        /**
         * Contains a list of directories to search for files containing snippets (*.snippets).
         */
        searchPath: string[];

        // Owm methods of GtkSource-5.SnippetManager

        /**
         * Returns the default #GtkSourceSnippetManager instance.
         */
        static get_default(): SnippetManager;

        // Owm methods of GtkSource-5.SnippetManager

        /**
         * Gets the list directories where `self` looks for snippet files.
         * @returns %NULL-terminated array   containing a list of snippet files directories.   The array is owned by @lm and must not be modified.
         */
        get_search_path(): string[];
        /**
         * Queries the known snippets for the first matching `group,` `language_id,`
         * and/or `trigger`.
         *
         * If `group` or `language_id` are %NULL, they will be ignored.
         * @param group a group name or %NULL
         * @param language_id a #GtkSourceLanguage:id or %NULL
         * @param trigger the trigger for the snippet
         * @returns a #GtkSourceSnippet or %NULL if no   matching snippet was found.
         */
        get_snippet(group: string | null, language_id: string | null, trigger: string): Snippet | null;
        /**
         * Gets a [iface`Gio`.ListModel] of all snippets.
         *
         * This can be used to get an unfiltered list of all of the snippets
         * known to the snippet manager.
         * @returns a [iface@Gio.ListModel] of [class@GtkSource.Snippet]
         */
        list_all(): Gio.ListModel;
        /**
         * List all the known groups within the snippet manager.
         *
         * The result should be freed with g_free(), and the individual strings are
         * owned by `self` and should never be freed by the caller.
         * @returns An array of strings which should be freed with g_free().
         */
        list_groups(): string[];
        /**
         * Queries the known snippets for those matching `group,` `language_id,` and/or
         * `trigger_prefix`.
         *
         * If any of these are %NULL, they will be ignored when filtering the available snippets.
         *
         * The [iface`Gio`.ListModel] only contains information about the available snippets until
         * [method`Gio`.ListModel.get_item] is called for a specific snippet. This helps reduce
         * the number of [class`GObject`.Object]'s that are created at runtime to those needed by
         * the calling application.
         * @param group a group name or %NULL
         * @param language_id a #GtkSourceLanguage:id or %NULL
         * @param trigger_prefix a prefix for a trigger to activate
         * @returns a #GListModel of #GtkSourceSnippet.
         */
        list_matching(
            group?: string | null,
            language_id?: string | null,
            trigger_prefix?: string | null,
        ): Gio.ListModel;
        /**
         * Sets the list of directories in which the `GtkSourceSnippetManager` looks for
         * snippet files.
         *
         * If `dirs` is %NULL, the search path is reset to default.
         *
         * At the moment this function can be called only before the
         * snippet files are loaded for the first time. In practice
         * to set a custom search path for a `GtkSourceSnippetManager`,
         * you have to call this function right after creating it.
         * @param dirs a %NULL-terminated array of   strings or %NULL.
         */
        set_search_path(dirs?: string[] | null): void;
    }

    module SpaceDrawer {
        // Constructor properties interface
    }

    /**
     * Represent white space characters with symbols.
     *
     * #GtkSourceSpaceDrawer provides a way to visualize white spaces, by drawing
     * symbols.
     *
     * Call [method`View`.get_space_drawer] to get the `GtkSourceSpaceDrawer`
     * instance of a certain [class`View]`.
     *
     * By default, no white spaces are drawn because the
     * [property`SpaceDrawer:`enable-matrix] is %FALSE.
     *
     * To draw white spaces, [method`SpaceDrawer`.set_types_for_locations] can
     * be called to set the [property`SpaceDrawer:`matrix] property (by default all
     * space types are enabled at all locations). Then call
     * [method`SpaceDrawer`.set_enable_matrix].
     *
     * For a finer-grained method, there is also the [class`Tag]`'s
     * [property`Tag:`draw-spaces] property.
     *
     * # Example
     *
     * To draw non-breaking spaces everywhere and draw all types of trailing spaces
     * except newlines:
     * ```c
     * gtk_source_space_drawer_set_types_for_locations (space_drawer,
     *                                                  GTK_SOURCE_SPACE_LOCATION_ALL,
     *                                                  GTK_SOURCE_SPACE_TYPE_NBSP);
     *
     * gtk_source_space_drawer_set_types_for_locations (space_drawer,
     *                                                  GTK_SOURCE_SPACE_LOCATION_TRAILING,
     *                                                  GTK_SOURCE_SPACE_TYPE_ALL &
     *                                                  ~GTK_SOURCE_SPACE_TYPE_NEWLINE);
     *
     * gtk_source_space_drawer_set_enable_matrix (space_drawer, TRUE);
     * ```
     *
     * # Use-case: draw unwanted white spaces
     *
     * A possible use-case is to draw only unwanted white spaces. Examples:
     *
     * - Draw all trailing spaces.
     * - If the indentation and alignment must be done with spaces, draw tabs.
     *
     * And non-breaking spaces can always be drawn, everywhere, to distinguish them
     * from normal spaces.
     */
    class SpaceDrawer extends GObject.Object {
        // Own properties of GtkSource-5.SpaceDrawer

        /**
         * Whether the [property`SpaceDrawer:`matrix] property is enabled.
         */
        enable_matrix: boolean;
        /**
         * Whether the [property`SpaceDrawer:`matrix] property is enabled.
         */
        enableMatrix: boolean;
        /**
         * The property is a [struct`GLib`.Variant] property to specify where and
         * what kind of white spaces to draw.
         *
         * The [struct`GLib`.Variant] is of type `"au"`, an array of unsigned integers. Each
         * integer is a combination of [flags`SpaceTypeFlags]`. There is one
         * integer for each [flags`SpaceLocationFlags]`, in the same order as
         * they are defined in the enum (%GTK_SOURCE_SPACE_LOCATION_NONE and
         * %GTK_SOURCE_SPACE_LOCATION_ALL are not taken into account).
         *
         * If the array is shorter than the number of locations, then the value
         * for the missing locations will be %GTK_SOURCE_SPACE_TYPE_NONE.
         *
         * By default, %GTK_SOURCE_SPACE_TYPE_ALL is set for all locations.4
         */
        matrix: GLib.Variant;

        // Constructors of GtkSource-5.SpaceDrawer

        static ['new'](): SpaceDrawer;

        // Owm methods of GtkSource-5.SpaceDrawer

        /**
         * Binds the [property`SpaceDrawer:`matrix] property to a [class`Gio`.Settings] key.
         *
         * The [class`Gio`.Settings] key must be of the same type as the
         * [property`SpaceDrawer:`matrix] property, that is, `"au"`.
         *
         * The [method`Gio`.Settings.bind] function cannot be used, because the default GIO
         * mapping functions don't support [struct`GLib`.Variant] properties (maybe it will be
         * supported by a future GIO version, in which case this function can be
         * deprecated).
         * @param settings a #GSettings object.
         * @param key the @settings key to bind.
         * @param flags flags for the binding.
         */
        bind_matrix_setting(settings: Gio.Settings, key: string, flags: Gio.SettingsBindFlags): void;
        get_enable_matrix(): boolean;
        /**
         * Gets the value of the [property`SpaceDrawer:`matrix] property, as a [struct`GLib`.Variant].
         *
         * An empty array can be returned in case the matrix is a zero matrix.
         *
         * The [method`SpaceDrawer`.get_types_for_locations] function may be more
         * convenient to use.
         * @returns the #GtkSourceSpaceDrawer:matrix value as a new floating #GVariant   instance.
         */
        get_matrix(): GLib.Variant;
        /**
         * If only one location is specified, this function returns what kind of
         * white spaces are drawn at that location.
         *
         * The value is retrieved from the [property`SpaceDrawer:`matrix] property.
         *
         * If several locations are specified, this function returns the logical AND for
         * those locations. Which means that if a certain kind of white space is present
         * in the return value, then that kind of white space is drawn at all the
         * specified `locations`.
         * @param locations one or several #GtkSourceSpaceLocationFlags.
         * @returns a combination of #GtkSourceSpaceTypeFlags.
         */
        get_types_for_locations(locations: SpaceLocationFlags): SpaceTypeFlags;
        /**
         * Sets whether the [property`SpaceDrawer:`matrix] property is enabled.
         * @param enable_matrix the new value.
         */
        set_enable_matrix(enable_matrix: boolean): void;
        /**
         * Sets a new value to the [property`SpaceDrawer:`matrix] property, as a [struct`GLib`.Variant].
         *
         * If `matrix` is %NULL, then an empty array is set.
         *
         * If `matrix` is floating, it is consumed.
         *
         * The [method`SpaceDrawer`.set_types_for_locations] function may be more
         * convenient to use.
         * @param matrix the new matrix value, or %NULL.
         */
        set_matrix(matrix?: GLib.Variant | null): void;
        /**
         * Modifies the [property`SpaceDrawer:`matrix] property at the specified
         * `locations`.
         * @param locations one or several #GtkSourceSpaceLocationFlags.
         * @param types a combination of #GtkSourceSpaceTypeFlags.
         */
        set_types_for_locations(locations: SpaceLocationFlags, types: SpaceTypeFlags): void;
    }

    module Style {
        // Constructor properties interface
    }

    /**
     * Represents a style.
     *
     * The `GtkSourceStyle` structure is used to describe text attributes
     * which are set when given style is used.
     */
    class Style extends GObject.Object {
        // Own properties of GtkSource-5.Style

        background: string;
        background_set: boolean;
        backgroundSet: boolean;
        bold: boolean;
        bold_set: boolean;
        boldSet: boolean;
        foreground: string;
        foreground_set: boolean;
        foregroundSet: boolean;
        italic: boolean;
        italic_set: boolean;
        italicSet: boolean;
        line_background: string;
        lineBackground: string;
        line_background_set: boolean;
        lineBackgroundSet: boolean;
        pango_underline: Pango.Underline;
        pangoUnderline: Pango.Underline;
        scale: string;
        scale_set: boolean;
        scaleSet: boolean;
        strikethrough: boolean;
        strikethrough_set: boolean;
        strikethroughSet: boolean;
        underline_color: string;
        underlineColor: string;
        underline_color_set: boolean;
        underlineColorSet: boolean;
        underline_set: boolean;
        underlineSet: boolean;
        weight: Pango.Weight;
        weight_set: boolean;
        weightSet: boolean;

        // Owm methods of GtkSource-5.Style

        /**
         * This function modifies the [class`Gtk`.TextTag] properties that are related to the
         * #GtkSourceStyle properties. Other [class`Gtk`.TextTag] properties are left untouched.
         *
         * If `style` is non-%NULL, applies `style` to `tag`.
         *
         * If `style` is %NULL, the related *-set properties of [class`Gtk`.TextTag] are set to
         * %FALSE.
         * @param tag a #GtkTextTag to apply styles to.
         */
        apply(tag: Gtk.TextTag): void;
        /**
         * Creates a copy of `style,` that is a new #GtkSourceStyle instance which
         * has the same attributes set.
         * @returns copy of @style, call g_object_unref() when you are done with it.
         */
        copy(): Style;
    }

    module StyleScheme {
        // Constructor properties interface
    }

    /**
     * Controls the appearance of [class`View]`.
     *
     * #GtkSourceStyleScheme contains all the text styles to be used in
     * [class`View]` and [class`Buffer]`. For instance, it contains text styles
     * for syntax highlighting, it may contain foreground and background color for
     * non-highlighted text, color for the line numbers, current line highlighting,
     * bracket matching, etc.
     *
     * Style schemes are stored in XML files. The format of a scheme file is
     * documented in the [style scheme reference](./style-reference.html).
     *
     * The two style schemes with IDs "classic" and "tango" follow more closely the
     * GTK theme (for example for the background color).
     */
    class StyleScheme extends GObject.Object {
        // Own properties of GtkSource-5.StyleScheme

        /**
         * Style scheme description, a translatable string to present to the user.
         */
        readonly description: string;
        /**
         * Style scheme filename or %NULL.
         */
        readonly filename: string;
        /**
         * Style scheme id, a unique string used to identify the style scheme
         * in [class`StyleSchemeManager]`.
         */
        id: string;
        /**
         * Style scheme name, a translatable string to present to the user.
         */
        readonly name: string;

        // Owm methods of GtkSource-5.StyleScheme

        get_authors(): string[] | null;
        get_description(): string | null;
        get_filename(): string | null;
        get_id(): string;
        /**
         * Gets a metadata property from the style scheme.
         * @param name metadata property name.
         * @returns value of property @name stored in   the metadata of @scheme or %NULL if @scheme does not contain the   specified metadata property.
         */
        get_metadata(name: string): string | null;
        get_name(): string;
        get_style(style_id: string): Style | null;
    }

    module StyleSchemeChooserButton {
        // Constructor properties interface
    }

    /**
     * A button to launch a style scheme selection dialog.
     *
     * The `GtkSourceStyleSchemeChooserButton` is a button which displays
     * the currently selected style scheme and allows to open a style scheme
     * selection dialog to change the style scheme.
     * It is suitable widget for selecting a style scheme in a preference dialog.
     *
     * In `GtkSourceStyleSchemeChooserButton`, a [class`StyleSchemeChooserWidget]`
     * is used to provide a dialog for selecting style schemes.
     */
    class StyleSchemeChooserButton extends Gtk.Button {
        // Constructors of GtkSource-5.StyleSchemeChooserButton

        static ['new'](): StyleSchemeChooserButton;
    }

    module StyleSchemeChooserWidget {
        // Constructor properties interface
    }

    /**
     * A widget for choosing style schemes.
     *
     * The `GtkSourceStyleSchemeChooserWidget` widget lets the user select a
     * style scheme. By default, the chooser presents a predefined list
     * of style schemes.
     *
     * To change the initially selected style scheme,
     * use [method`StyleSchemeChooser`.set_style_scheme].
     * To get the selected style scheme
     * use [method`StyleSchemeChooser`.get_style_scheme].
     */
    class StyleSchemeChooserWidget extends Gtk.Widget {
        // Constructors of GtkSource-5.StyleSchemeChooserWidget

        static ['new'](): StyleSchemeChooserWidget;
    }

    module StyleSchemeManager {
        // Constructor properties interface
    }

    /**
     * Provides access to [class`StyleScheme]`s.
     */
    class StyleSchemeManager extends GObject.Object {
        // Own properties of GtkSource-5.StyleSchemeManager

        readonly scheme_ids: string[];
        readonly schemeIds: string[];
        search_path: string[];
        searchPath: string[];

        // Constructors of GtkSource-5.StyleSchemeManager

        static ['new'](): StyleSchemeManager;

        // Owm methods of GtkSource-5.StyleSchemeManager

        /**
         * Returns the default #GtkSourceStyleSchemeManager instance.
         */
        static get_default(): StyleSchemeManager;

        // Owm methods of GtkSource-5.StyleSchemeManager

        /**
         * Appends `path` to the list of directories where the `manager` looks for
         * style scheme files.
         *
         * See [method`StyleSchemeManager`.set_search_path] for details.
         * @param path a directory or a filename.
         */
        append_search_path(path: string): void;
        /**
         * Mark any currently cached information about the available style schems
         * as invalid.
         *
         * All the available style schemes will be reloaded next time the `manager` is accessed.
         */
        force_rescan(): void;
        /**
         * Looks up style scheme by id.
         * @param scheme_id style scheme id to find.
         * @returns a #GtkSourceStyleScheme object.   The returned value is owned by @manager and must not be unref'ed.
         */
        get_scheme(scheme_id: string): StyleScheme | null;
        /**
         * Returns the ids of the available style schemes.
         * @returns a %NULL-terminated array of strings containing the ids of the available style schemes or %NULL if no style scheme is available. The array is sorted alphabetically according to the scheme name. The array is owned by the @manager and must not be modified.
         */
        get_scheme_ids(): string[] | null;
        /**
         * Returns the current search path for the `manager`.
         *
         * See [method`StyleSchemeManager`.set_search_path] for details.
         * @returns a %NULL-terminated array of string containing the search path. The array is owned by the @manager and must not be modified.
         */
        get_search_path(): string[];
        /**
         * Prepends `path` to the list of directories where the `manager` looks
         * for style scheme files.
         *
         * See [method`StyleSchemeManager`.set_search_path] for details.
         * @param path a directory or a filename.
         */
        prepend_search_path(path: string): void;
        /**
         * Sets the list of directories where the `manager` looks for
         * style scheme files.
         *
         * If `path` is %NULL, the search path is reset to default.
         * @param path a %NULL-terminated array of   strings or %NULL.
         */
        set_search_path(path?: string[] | null): void;
    }

    module StyleSchemePreview {
        // Signal callback interfaces

        interface Activate {
            (): void;
        }

        // Constructor properties interface
    }

    /**
     * A preview widget for [class`StyleScheme]`.
     *
     * This widget provides a convenient [class`Gtk`.Widget] to preview a [class`StyleScheme]`.
     *
     * The [property`StyleSchemePreview:`selected] property can be used to manage
     * the selection state of a single preview widget.
     */
    class StyleSchemePreview extends Gtk.Widget {
        // Own properties of GtkSource-5.StyleSchemePreview

        scheme: StyleScheme;
        selected: boolean;

        // Constructors of GtkSource-5.StyleSchemePreview

        static ['new'](scheme: StyleScheme): StyleSchemePreview;

        // Owm methods of GtkSource-5.StyleSchemePreview

        /**
         * Gets the #GtkSourceStyleScheme previewed by the widget.
         * @returns a #GtkSourceStyleScheme
         */
        get_scheme(): StyleScheme;
        get_selected(): boolean;
        set_selected(selected: boolean): void;
    }

    module Tag {
        // Constructor properties interface
    }

    /**
     * A tag that can be applied to text in a [class`Buffer]`.
     *
     * `GtkSourceTag` is a subclass of [class`Gtk`.TextTag] that adds properties useful for
     * the GtkSourceView library.
     *
     * If, for a certain tag, [class`Gtk`.TextTag] is sufficient, it's better that you create
     * a [class`Gtk`.TextTag], not a [class`Tag]`.
     */
    class Tag extends Gtk.TextTag {
        // Own properties of GtkSource-5.Tag

        /**
         * Whether to draw white spaces.
         *
         * This property takes precedence over the value defined by the [class`SpaceDrawer]`'s
         * [property`SpaceDrawer:`matrix] property (only where the tag is applied).
         *
         * Setting this property also changes [property`Tag:`draw-spaces-set] to
         * %TRUE.
         */
        draw_spaces: boolean;
        /**
         * Whether to draw white spaces.
         *
         * This property takes precedence over the value defined by the [class`SpaceDrawer]`'s
         * [property`SpaceDrawer:`matrix] property (only where the tag is applied).
         *
         * Setting this property also changes [property`Tag:`draw-spaces-set] to
         * %TRUE.
         */
        drawSpaces: boolean;
        /**
         * Whether the [property`Tag:`draw-spaces] property is set and must be
         * taken into account.
         */
        draw_spaces_set: boolean;
        /**
         * Whether the [property`Tag:`draw-spaces] property is set and must be
         * taken into account.
         */
        drawSpacesSet: boolean;

        // Constructors of GtkSource-5.Tag

        static ['new'](name?: string | null): Tag;
    }

    module View {
        // Signal callback interfaces

        interface ChangeCase {
            (case_type: ChangeCaseType): void;
        }

        interface ChangeNumber {
            (count: number): void;
        }

        interface JoinLines {
            (): void;
        }

        interface LineMarkActivated {
            (iter: Gtk.TextIter, button: number, state: Gdk.ModifierType, n_presses: number): void;
        }

        interface MoveLines {
            (down: boolean): void;
        }

        interface MoveToMatchingBracket {
            (extend_selection: boolean): void;
        }

        interface MoveWords {
            (count: number): void;
        }

        interface PushSnippet {
            (snippet: Snippet, location: Gtk.TextIter): void;
        }

        interface ShowCompletion {
            (): void;
        }

        interface SmartHomeEnd {
            (iter: Gtk.TextIter, count: number): void;
        }

        // Constructor properties interface
    }

    /**
     * Subclass of [class`Gtk`.TextView].
     *
     * `GtkSourceView` is the main class of the GtkSourceView library.
     * Use a [class`Buffer]` to display text with a `GtkSourceView`.
     *
     * This class provides:
     *
     *  - Show the line numbers;
     *  - Show a right margin;
     *  - Highlight the current line;
     *  - Indentation settings;
     *  - Configuration for the Home and End keyboard keys;
     *  - Configure and show line marks;
     *  - And a few other things.
     *
     * An easy way to test all these features is to use the test-widget mini-program
     * provided in the GtkSourceView repository, in the tests/ directory.
     *
     * # GtkSourceView as GtkBuildable
     *
     * The GtkSourceView implementation of the [iface`Gtk`.Buildable] interface exposes the
     * [property`View:`completion] object with the internal-child "completion".
     *
     * An example of a UI definition fragment with GtkSourceView:
     * ```xml
     * <object class="GtkSourceView" id="source_view">
     *   <property name="tab-width">4</property>
     *   <property name="auto-indent">True</property>
     *   <child internal-child="completion">
     *     <object class="GtkSourceCompletion">
     *       <property name="select-on-show">False</property>
     *     </object>
     *   </child>
     * </object>
     * ```
     *
     * # Changing the Font
     *
     * Gtk CSS provides the best way to change the font for a `GtkSourceView` in a
     * manner that allows for components like [class`Map]` to scale the desired
     * font.
     *
     * ```c
     * GtkCssProvider *provider = gtk_css_provider_new ();
     * gtk_css_provider_load_from_data (provider,
     *                                  "textview { font-family: Monospace; font-size: 8pt; }",
     *                                  -1,
     *                                  NULL);
     * gtk_style_context_add_provider (gtk_widget_get_style_context (view),
     *                                 GTK_STYLE_PROVIDER (provider),
     *                                 GTK_STYLE_PROVIDER_PRIORITY_APPLICATION);
     * g_object_unref (provider);
     * ```
     *
     * If you need to adjust the font or size of font within a portion of the
     * document only, you should use a [class`Gtk`.TextTag] with the [property`Gtk`.TextTag:family] or
     * [property`Gtk`.TextTag:scale] set so that the font size may be scaled relative to
     * the default font set in CSS.
     */
    class View extends Gtk.TextView {
        // Own properties of GtkSource-5.View

        auto_indent: boolean;
        autoIndent: boolean;
        /**
         * Draw a specific background pattern on the view.
         */
        background_pattern: BackgroundPatternType;
        /**
         * Draw a specific background pattern on the view.
         */
        backgroundPattern: BackgroundPatternType;
        /**
         * The completion object associated with the view
         */
        readonly completion: Completion;
        /**
         * The property denotes if snippets should be
         * expanded when the user presses Tab after having typed a word
         * matching the snippets found in [class`SnippetManager]`.
         *
         * The user may tab through focus-positions of the snippet if any
         * are available by pressing Tab repeatedly until the desired focus
         * position is selected.
         */
        enable_snippets: boolean;
        /**
         * The property denotes if snippets should be
         * expanded when the user presses Tab after having typed a word
         * matching the snippets found in [class`SnippetManager]`.
         *
         * The user may tab through focus-positions of the snippet if any
         * are available by pressing Tab repeatedly until the desired focus
         * position is selected.
         */
        enableSnippets: boolean;
        highlight_current_line: boolean;
        highlightCurrentLine: boolean;
        indent_on_tab: boolean;
        indentOnTab: boolean;
        /**
         * Width of an indentation step expressed in number of spaces.
         */
        indent_width: number;
        /**
         * Width of an indentation step expressed in number of spaces.
         */
        indentWidth: number;
        /**
         * The property is a [iface`Indenter]` to use to indent
         * as the user types into the [class`View]`.
         */
        indenter: Indenter;
        insert_spaces_instead_of_tabs: boolean;
        insertSpacesInsteadOfTabs: boolean;
        /**
         * Position of the right margin.
         */
        right_margin_position: number;
        /**
         * Position of the right margin.
         */
        rightMarginPosition: number;
        /**
         * Whether to display line mark pixbufs
         */
        show_line_marks: boolean;
        /**
         * Whether to display line mark pixbufs
         */
        showLineMarks: boolean;
        /**
         * Whether to display line numbers
         */
        show_line_numbers: boolean;
        /**
         * Whether to display line numbers
         */
        showLineNumbers: boolean;
        /**
         * Whether to display the right margin.
         */
        show_right_margin: boolean;
        /**
         * Whether to display the right margin.
         */
        showRightMargin: boolean;
        /**
         * Whether smart Backspace should be used.
         */
        smart_backspace: boolean;
        /**
         * Whether smart Backspace should be used.
         */
        smartBackspace: boolean;
        /**
         * Set the behavior of the HOME and END keys.
         */
        smart_home_end: SmartHomeEndType;
        /**
         * Set the behavior of the HOME and END keys.
         */
        smartHomeEnd: SmartHomeEndType;
        /**
         * The [class`SpaceDrawer]` object associated with the view.4
         */
        readonly space_drawer: SpaceDrawer;
        /**
         * The [class`SpaceDrawer]` object associated with the view.4
         */
        readonly spaceDrawer: SpaceDrawer;
        /**
         * Width of a tab character expressed in number of spaces.
         */
        tab_width: number;
        /**
         * Width of a tab character expressed in number of spaces.
         */
        tabWidth: number;

        // Constructors of GtkSource-5.View

        static ['new'](): View;

        static new_with_buffer(buffer: Buffer): View;

        // Owm methods of GtkSource-5.View

        /**
         * Returns whether auto-indentation of text is enabled.
         * @returns %TRUE if auto indentation is enabled.
         */
        get_auto_indent(): boolean;
        /**
         * Returns the #GtkSourceBackgroundPatternType specifying if and how
         * the background pattern should be displayed for this `view`.
         * @returns the #GtkSourceBackgroundPatternType.
         */
        get_background_pattern(): BackgroundPatternType;
        /**
         * Gets the [class`Completion]` associated with `view`.
         *
         * The returned object is guaranteed to be the same for the lifetime of `view`.
         * Each `GtkSourceView` object has a different [class`Completion]`.
         * @returns the #GtkSourceCompletion associated with @view.
         */
        get_completion(): Completion;
        /**
         * Gets the [property`View:`enable-snippets] property.
         *
         * If %TRUE, matching snippets found in the [class`SnippetManager]`
         * may be expanded when the user presses Tab after a word in the [class`View]`.
         * @returns %TRUE if enabled
         */
        get_enable_snippets(): boolean;
        /**
         * Returns the [class`Gutter]` object associated with `window_type` for `view`.
         *
         * Only %GTK_TEXT_WINDOW_LEFT and %GTK_TEXT_WINDOW_RIGHT are supported,
         * respectively corresponding to the left and right gutter. The line numbers
         * and mark category icons are rendered in the left gutter.
         * @param window_type the gutter window type.
         * @returns the #GtkSourceGutter.
         */
        get_gutter(window_type: Gtk.TextWindowType): Gutter;
        /**
         * Returns whether the current line is highlighted.
         * @returns %TRUE if the current line is highlighted.
         */
        get_highlight_current_line(): boolean;
        /**
         * Gets the [class`Hover]` associated with `view`.
         *
         * The returned object is guaranteed to be the same for the lifetime of `view`.
         * Each [class`View]` object has a different [class`Hover]`.
         * @returns a #GtkSourceHover associated with @view.
         */
        get_hover(): Hover;
        /**
         * Returns whether when the tab key is pressed the current selection
         * should get indented instead of replaced with the `\t` character.
         * @returns %TRUE if the selection is indented when tab is pressed.
         */
        get_indent_on_tab(): boolean;
        /**
         * Returns the number of spaces to use for each step of indent.
         *
         * See [method`View`.set_indent_width] for details.
         * @returns indent width.
         */
        get_indent_width(): number;
        /**
         * Gets the [property`View:`indenter] property.
         * @returns a #GtkSourceIndenter or %NULL
         */
        get_indenter(): Indenter | null;
        /**
         * Returns whether when inserting a tabulator character it should
         * be replaced by a group of space characters.
         * @returns %TRUE if spaces are inserted instead of tabs.
         */
        get_insert_spaces_instead_of_tabs(): boolean;
        /**
         * Gets attributes and priority for the `category`.
         * @param category the category.
         * @param priority place where priority of the category will be stored.
         * @returns #GtkSourceMarkAttributes for the @category. The object belongs to @view, so it must not be unreffed.
         */
        get_mark_attributes(category: string, priority: number): MarkAttributes;
        /**
         * Gets the position of the right margin in the given `view`.
         * @returns the position of the right margin.
         */
        get_right_margin_position(): number;
        /**
         * Returns whether line marks are displayed beside the text.
         * @returns %TRUE if the line marks are displayed.
         */
        get_show_line_marks(): boolean;
        /**
         * Returns whether line numbers are displayed beside the text.
         * @returns %TRUE if the line numbers are displayed.
         */
        get_show_line_numbers(): boolean;
        /**
         * Returns whether a right margin is displayed.
         * @returns %TRUE if the right margin is shown.
         */
        get_show_right_margin(): boolean;
        /**
         * Returns %TRUE if pressing the Backspace key will try to delete spaces
         * up to the previous tab stop.
         * @returns %TRUE if smart Backspace handling is enabled.
         */
        get_smart_backspace(): boolean;
        /**
         * Returns a [enum`SmartHomeEndType]` end value specifying
         * how the cursor will move when HOME and END keys are pressed.
         * @returns a #GtkSourceSmartHomeEndType value.
         */
        get_smart_home_end(): SmartHomeEndType;
        /**
         * Gets the [class`SpaceDrawer]` associated with `view`.
         *
         * The returned object is guaranteed to be the same for the lifetime of `view`.
         * Each [class`View]` object has a different [class`SpaceDrawer]`.
         * @returns the #GtkSourceSpaceDrawer associated with @view.
         */
        get_space_drawer(): SpaceDrawer;
        /**
         * Returns the width of tabulation in characters.
         * @returns width of tab.
         */
        get_tab_width(): number;
        /**
         * Determines the visual column at `iter` taking into consideration the
         * [property`View:`tab-width] of `view`.
         * @param iter a position in @view.
         * @returns the visual column at @iter.
         */
        get_visual_column(iter: Gtk.TextIter): number;
        /**
         * Inserts one indentation level at the beginning of the specified lines. The
         * empty lines are not indented.
         * @param start #GtkTextIter of the first line to indent
         * @param end #GtkTextIter of the last line to indent
         */
        indent_lines(start: Gtk.TextIter, end: Gtk.TextIter): void;
        /**
         * Inserts a new snippet at `location`
         *
         * If another snippet was already active, it will be paused and the new
         * snippet will become active. Once the focus positions of `snippet` have
         * been exhausted, editing will return to the previous snippet.
         * @param snippet a #GtkSourceSnippet
         * @param location a #GtkTextIter or %NULL for the cursor position
         */
        push_snippet(snippet: Snippet, location?: Gtk.TextIter | null): void;
        /**
         * If %TRUE auto-indentation of text is enabled.
         *
         * When Enter is pressed to create a new line, the auto-indentation inserts the
         * same indentation as the previous line. This is **not** a
         * "smart indentation" where an indentation level is added or removed depending
         * on the context.
         * @param enable whether to enable auto indentation.
         */
        set_auto_indent(enable: boolean): void;
        /**
         * Set if and how the background pattern should be displayed.
         * @param background_pattern the #GtkSourceBackgroundPatternType.
         */
        set_background_pattern(background_pattern: BackgroundPatternType): void;
        /**
         * Sets the [property`View:`enable-snippets] property.
         *
         * If `enable_snippets` is %TRUE, matching snippets found in the
         * [class`SnippetManager]` may be expanded when the user presses
         * Tab after a word in the [class`View]`.
         * @param enable_snippets if snippets should be enabled
         */
        set_enable_snippets(enable_snippets: boolean): void;
        /**
         * If `highlight` is %TRUE the current line will be highlighted.
         * @param highlight whether to highlight the current line.
         */
        set_highlight_current_line(highlight: boolean): void;
        /**
         * If %TRUE, when the tab key is pressed when several lines are selected, the
         * selected lines are indented of one level instead of being replaced with a `\t`
         * character. Shift+Tab unindents the selection.
         *
         * If the first or last line is not selected completely, it is also indented or
         * unindented.
         *
         * When the selection doesn't span several lines, the tab key always replaces
         * the selection with a normal `\t` character.
         * @param enable whether to indent a block when tab is pressed.
         */
        set_indent_on_tab(enable: boolean): void;
        /**
         * Sets the number of spaces to use for each step of indent when the tab key is
         * pressed.
         *
         * If `width` is -1, the value of the [property`View:`tab-width] property
         * will be used.
         *
         * The [property`View:`indent-width] interacts with the
         * [property`View:`insert-spaces-instead-of-tabs] property and
         * [property`View:`tab-width]. An example will be clearer:
         *
         * If the [property`View:`indent-width] is 4 and [property`View:`tab-width] is 8 and
         * [property`View:`insert-spaces-instead-of-tabs] is %FALSE, then pressing the tab
         * key at the beginning of a line will insert 4 spaces. So far so good. Pressing
         * the tab key a second time will remove the 4 spaces and insert a `\t` character
         * instead (since [property`View:`tab-width] is 8). On the other hand, if
         * [property`View:`insert-spaces-instead-of-tabs] is %TRUE, the second tab key
         * pressed will insert 4 more spaces for a total of 8 spaces in the
         * [class`Gtk`.TextBuffer].
         *
         * The test-widget program (available in the GtkSourceView repository) may be
         * useful to better understand the indentation settings (enable the space
         * drawing!).
         * @param width indent width in characters.
         */
        set_indent_width(width: number): void;
        /**
         * Sets the indenter for `view` to `indenter`.
         *
         * Note that the indenter will not be used unless #GtkSourceView:auto-indent
         * has been set to %TRUE.
         * @param indenter a #GtkSourceIndenter or %NULL
         */
        set_indenter(indenter?: Indenter | null): void;
        /**
         * If %TRUE a tab key pressed is replaced by a group of space characters.
         *
         * Of course it is still possible to insert a real `\t` programmatically with the
         * [class`Gtk`.TextBuffer] API.
         * @param enable whether to insert spaces instead of tabs.
         */
        set_insert_spaces_instead_of_tabs(enable: boolean): void;
        /**
         * Sets attributes and priority for the `category`.
         * @param category the category.
         * @param attributes mark attributes.
         * @param priority priority of the category.
         */
        set_mark_attributes(category: string, attributes: MarkAttributes, priority: number): void;
        /**
         * Sets the position of the right margin in the given `view`.
         * @param pos the width in characters where to position the right margin.
         */
        set_right_margin_position(pos: number): void;
        /**
         * If %TRUE line marks will be displayed beside the text.
         * @param show whether line marks should be displayed.
         */
        set_show_line_marks(show: boolean): void;
        /**
         * If %TRUE line numbers will be displayed beside the text.
         * @param show whether line numbers should be displayed.
         */
        set_show_line_numbers(show: boolean): void;
        /**
         * If %TRUE a right margin is displayed.
         * @param show whether to show a right margin.
         */
        set_show_right_margin(show: boolean): void;
        /**
         * When set to %TRUE, pressing the Backspace key will try to delete spaces
         * up to the previous tab stop.
         * @param smart_backspace whether to enable smart Backspace handling.
         */
        set_smart_backspace(smart_backspace: boolean): void;
        /**
         * Set the desired movement of the cursor when HOME and END keys
         * are pressed.
         * @param smart_home_end the desired behavior among #GtkSourceSmartHomeEndType.
         */
        set_smart_home_end(smart_home_end: SmartHomeEndType): void;
        /**
         * Sets the width of tabulation in characters.
         *
         * The #GtkTextBuffer still contains `\t` characters,
         * but they can take a different visual width in a [class`View]` widget.
         * @param width width of tab in characters.
         */
        set_tab_width(width: number): void;
        /**
         * Removes one indentation level at the beginning of the
         * specified lines.
         * @param start #GtkTextIter of the first line to indent
         * @param end #GtkTextIter of the last line to indent
         */
        unindent_lines(start: Gtk.TextIter, end: Gtk.TextIter): void;
    }

    module VimIMContext {
        // Signal callback interfaces

        interface Edit {
            (view: View, path?: string | null): void;
        }

        interface ExecuteCommand {
            (command: string): boolean;
        }

        interface FormatText {
            (begin: Gtk.TextIter, end: Gtk.TextIter): void;
        }

        interface Write {
            (view: View, path?: string | null): void;
        }

        // Constructor properties interface
    }

    /**
     * Vim emulation.
     *
     * The `GtkSourceVimIMContext` is a [class`Gtk`.IMContext] implementation that can
     * be used to provide Vim-like editing controls within a [class`View]`.
     *
     * The `GtkSourceViMIMContext` will process incoming [class`Gdk`.KeyEvent] as the
     * user types. It should be used in conjunction with a [class`Gtk`.EventControllerKey].
     *
     * Various features supported by `GtkSourceVimIMContext` include:
     *
     *  - Normal, Insert, Replace, Visual, and Visual Line modes
     *  - Support for an integrated command bar and current command preview
     *  - Search and replace
     *  - Motions and Text Objects
     *  - History replay
     *  - Jumplists within the current file
     *  - Registers including the system and primary clipboards
     *  - Creation and motion to marks
     *  - Some commonly used Vim commands
     *
     * It is recommended that applications display the contents of
     * [property`VimIMContext:`command-bar-text] and
     * [property`VimIMContext:`command-text] to the user as they represent the
     * command-bar and current command preview found in Vim.
     *
     * `GtkSourceVimIMContext` attempts to work with additional [class`Gtk`.IMContext]
     * implementations such as IBus by querying the [class`Gtk`.TextView] before processing
     * the command in states which support it (notably Insert and Replace modes).
     *
     * ```c
     * GtkEventController *key;
     * GtkIMContext *im_context;
     * GtkWidget *view;
     *
     * view = gtk_source_view_new ();
     * im_context = gtk_source_vim_im_context_new ();
     * key = gtk_event_controller_key_new ();
     *
     * gtk_event_controller_key_set_im_context (GTK_EVENT_CONTROLLER_KEY (key), im_context);
     * gtk_event_controller_set_propagation_phase (key, GTK_PHASE_CAPTURE);
     * gtk_widget_add_controller (view, key);
     * gtk_im_context_set_client_widget (im_context, view);
     *
     * g_object_bind_property (im_context, "command-bar-text", command_bar_label, "label", 0);
     * g_object_bind_property (im_context, "command-text", command_label, "label", 0);
     * ```
     */
    class VimIMContext extends Gtk.IMContext {
        // Own properties of GtkSource-5.VimIMContext

        readonly command_bar_text: string;
        readonly commandBarText: string;
        readonly command_text: string;
        readonly commandText: string;

        // Constructors of GtkSource-5.VimIMContext

        static ['new'](): VimIMContext;

        // Owm methods of GtkSource-5.VimIMContext

        /**
         * Executes `command` as if it was typed into the command bar by the
         * user except that this does not emit the
         * [signal`VimIMContext:`:execute-command] signal.
         * @param command the command text
         */
        execute_command(command: string): void;
        /**
         * Gets the current command-bar text as it is entered by the user.
         * @returns A string containing the command-bar text
         */
        get_command_bar_text(): string;
        /**
         * Gets the current command text as it is entered by the user.
         * @returns A string containing the command text
         */
        get_command_text(): string;
    }

    class BufferClass {}

    class CompletionCellClass {}

    class CompletionClass {}

    class CompletionContextClass {}

    class CompletionProposalInterface {}

    class CompletionProviderInterface {}

    class CompletionSnippetsClass {}

    class CompletionWordsClass {}

    /**
     * Character encoding.
     *
     * The #GtkSourceEncoding boxed type represents a character encoding. It is used
     * for example by #GtkSourceFile. Note that the text in GTK widgets is always
     * encoded in UTF-8.
     */
    class Encoding {
        // Owm methods of GtkSource-5.Encoding

        /**
         * Gets all encodings.
         */
        static get_all(): Encoding[];
        /**
         * Gets the #GtkSourceEncoding for the current locale.
         *
         * See also [func`GLib`.get_charset].
         */
        static get_current(): Encoding;
        /**
         * Gets the list of default candidate encodings to try when loading a file.
         *
         * See [method`FileLoader`.set_candidate_encodings].
         *
         * This function returns a different list depending on the current locale (i.e.
         * language, country and default encoding). The UTF-8 encoding and the current
         * locale encoding are guaranteed to be present in the returned list.
         */
        static get_default_candidates(): Encoding[];
        /**
         * Gets a #GtkSourceEncoding from a character set such as "UTF-8" or
         * "ISO-8859-1".
         * @param charset a character set.
         */
        static get_from_charset(charset: string): Encoding | null;
        static get_utf8(): Encoding;

        // Owm methods of GtkSource-5.Encoding

        /**
         * Used by language bindings.
         * @returns a copy of @enc.
         */
        copy(): Encoding;
        /**
         * Used by language bindings.
         */
        free(): void;
        /**
         * Gets the character set of the #GtkSourceEncoding, such as "UTF-8" or
         * "ISO-8859-1".
         * @returns the character set of the #GtkSourceEncoding.
         */
        get_charset(): string;
        /**
         * Gets the name of the #GtkSourceEncoding such as "Unicode" or "Western".
         * @returns the name of the #GtkSourceEncoding.
         */
        get_name(): string;
        to_string(): string;
    }

    class FileClass {}

    class FileLoaderClass {}

    class FileSaverClass {}

    class GutterClass {}

    class GutterLinesClass {}

    class GutterRendererClass {}

    class GutterRendererPixbufClass {}

    class GutterRendererTextClass {}

    class HoverClass {}

    class HoverContextClass {}

    class HoverDisplayClass {}

    class HoverProviderInterface {}

    /**
     * The virtual function table for #GtkSourceIndenter.
     */
    class IndenterInterface {}

    class LanguageClass {}

    class LanguageManagerClass {}

    class MapClass {}

    class MarkAttributesClass {}

    class MarkClass {}

    class PrintCompositorClass {}

    class RegionClass {}

    /**
     * An opaque datatype.
     *
     * Ignore all its fields and initialize the iter with [method`Region`.get_start_region_iter].
     */
    class RegionIter {
        // Constructors of GtkSource-5.RegionIter

        constructor(properties?: Partial<{}>);

        // Owm methods of GtkSource-5.RegionIter

        /**
         * Gets the subregion at this iterator.
         * @returns %TRUE if @start and @end have been set successfully (if non-%NULL),   or %FALSE if @iter is the end iterator or if the region is empty.
         */
        get_subregion(): boolean;
        is_end(): boolean;
        /**
         * Moves `iter` to the next subregion.
         * @returns %TRUE if @iter moved and is dereferenceable, or %FALSE if @iter has   been set to the end iterator.
         */
        next(): boolean;
    }

    class SearchContextClass {}

    class SearchSettingsClass {}

    class SnippetChunkClass {}

    class SnippetClass {}

    class SnippetContextClass {}

    class SnippetManagerClass {}

    class SpaceDrawerClass {}

    class StyleClass {}

    class StyleSchemeChooserButtonClass {}

    class StyleSchemeChooserInterface {}

    class StyleSchemeChooserWidgetClass {}

    class StyleSchemeClass {}

    class StyleSchemeManagerClass {}

    class StyleSchemePreviewClass {}

    class TagClass {}

    class ViewClass {}

    class VimIMContextClass {}

    interface CompletionProposal {
        // Owm methods of GtkSource-5.CompletionProposal

        /**
         * Gets the typed-text for the proposal, if supported by the implementation.
         *
         * Implementing this virtual-function is optional, but can be useful to allow
         * external tooling to compare results.
         * @returns a newly allocated string, or %NULL
         */
        get_typed_text(): string | null;

        // Own virtual methods of GtkSource-5.CompletionProposal

        /**
         * Gets the typed-text for the proposal, if supported by the implementation.
         *
         * Implementing this virtual-function is optional, but can be useful to allow
         * external tooling to compare results.
         */
        vfunc_get_typed_text(): string | null;
    }

    interface CompletionProvider {
        // Owm methods of GtkSource-5.CompletionProvider

        /**
         * This function requests `proposal` to be activated by the
         * #GtkSourceCompletionProvider.
         *
         * What the provider does to activate the proposal is specific to that
         * provider. Many providers may choose to insert a #GtkSourceSnippet with
         * edit points the user may cycle through.
         *
         * See also: [class`Snippet]`, [class`SnippetChunk]`, [method`View`.push_snippet]
         * @param context a #GtkSourceCompletionContext
         * @param proposal a #GtkSourceCompletionProposal
         */
        activate(context: CompletionContext, proposal: CompletionProposal): void;
        /**
         * This function requests that the #GtkSourceCompletionProvider prepares
         * `cell` to display the contents of `proposal`.
         *
         * Based on `cells` column type, you may want to display different information.
         *
         * This allows for columns of information among completion proposals
         * resulting in better alignment of similar content (icons, return types,
         * method names, and parameter lists).
         * @param context a #GtkSourceCompletionContext
         * @param proposal a #GtkSourceCompletionProposal
         * @param cell a #GtkSourceCompletionCell
         */
        display(context: CompletionContext, proposal: CompletionProposal, cell: CompletionCell): void;
        /**
         * This function should return the priority of `self` in `context`.
         *
         * The priority is used to sort groups of completion proposals by
         * provider so that higher priority providers results are shown
         * above lower priority providers.
         *
         * Higher value indicates higher priority.
         * @param context a #GtkSourceCompletionContext
         */
        get_priority(context: CompletionContext): number;
        /**
         * Gets the title of the completion provider, if any.
         *
         * Currently, titles are not displayed in the completion results, but may be
         * at some point in the future when non-%NULL.
         * @returns a title for the provider or %NULL
         */
        get_title(): string | null;
        /**
         * This function is used to determine if a character inserted into the text
         * editor should cause a new completion request to be triggered.
         *
         * An example would be period '.' which might indicate that the user wants
         * to complete method or field names of an object.
         *
         * This method will only trigger when text is inserted into the #GtkTextBuffer
         * while the completion list is visible and a proposal is selected. Incremental
         * key-presses (like shift, control, or alt) are not triggerable.
         * @param iter a #GtkTextIter
         * @param ch a #gunichar of the character inserted
         */
        is_trigger(iter: Gtk.TextIter, ch: number): boolean;
        /**
         * This function is used to determine if a key typed by the user should
         * activate `proposal` (resulting in committing the text to the editor).
         *
         * This is useful when using languages where convention may lead to less
         * typing by the user. One example may be the use of "." or "-" to expand
         * a field access in the C programming language.
         * @param context a #GtkSourceCompletionContext
         * @param proposal a #GtkSourceCompletionProposal
         * @param keyval a keyval such as [const@Gdk.KEY_period]
         * @param state a #GdkModifierType or 0
         */
        key_activates(
            context: CompletionContext,
            proposal: CompletionProposal,
            keyval: number,
            state: Gdk.ModifierType,
        ): boolean;
        /**
         * Providers should return a list of alternates to `proposal` or %NULL if
         * there are no alternates available.
         *
         * This can be used by the completion view to allow the user to move laterally
         * through similar proposals, such as overrides of methods by the same name.
         * @param context a #GtkSourceCompletionContext
         * @param proposal a #GtkSourceCompletionProposal
         * @returns a #GPtrArray of #GtkSourceCompletionProposal or %NULL.
         */
        list_alternates(context: CompletionContext, proposal: CompletionProposal): CompletionProposal[] | null;
        /**
         * Asynchronously requests that the provider populates the completion
         * results for `context`.
         *
         * For providers that would like to populate a [iface`Gio`.ListModel] while those
         * results are displayed to the user,
         * [method`CompletionContext`.set_proposals_for_provider] may be used
         * to reduce latency until the user sees results.
         * @param context a #GtkSourceCompletionContext
         * @param cancellable a #GCancellable or %NULL
         * @param callback a callback to execute upon completion
         */
        populate_async(
            context: CompletionContext,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Completes an asynchronous operation to populate a completion provider.
         * @param result a #GAsyncResult provided to callback
         * @returns a #GListModel of #GtkSourceCompletionProposal
         */
        populate_finish(result: Gio.AsyncResult): Gio.ListModel;
        /**
         * This function can be used to filter results previously provided to
         * the [class`CompletionContext]` by the #GtkSourceCompletionProvider.
         *
         * This can happen as the user types additional text onto the word so
         * that previously matched items may be removed from the list instead of
         * generating new [iface`Gio`.ListModel] of results.
         * @param context a #GtkSourceCompletionContext
         * @param model a #GListModel
         */
        refilter(context: CompletionContext, model: Gio.ListModel): void;

        // Own virtual methods of GtkSource-5.CompletionProvider

        /**
         * This function requests `proposal` to be activated by the
         * #GtkSourceCompletionProvider.
         *
         * What the provider does to activate the proposal is specific to that
         * provider. Many providers may choose to insert a #GtkSourceSnippet with
         * edit points the user may cycle through.
         *
         * See also: [class`Snippet]`, [class`SnippetChunk]`, [method`View`.push_snippet]
         * @param context a #GtkSourceCompletionContext
         * @param proposal a #GtkSourceCompletionProposal
         */
        vfunc_activate(context: CompletionContext, proposal: CompletionProposal): void;
        /**
         * This function requests that the #GtkSourceCompletionProvider prepares
         * `cell` to display the contents of `proposal`.
         *
         * Based on `cells` column type, you may want to display different information.
         *
         * This allows for columns of information among completion proposals
         * resulting in better alignment of similar content (icons, return types,
         * method names, and parameter lists).
         * @param context a #GtkSourceCompletionContext
         * @param proposal a #GtkSourceCompletionProposal
         * @param cell a #GtkSourceCompletionCell
         */
        vfunc_display(context: CompletionContext, proposal: CompletionProposal, cell: CompletionCell): void;
        /**
         * This function should return the priority of `self` in `context`.
         *
         * The priority is used to sort groups of completion proposals by
         * provider so that higher priority providers results are shown
         * above lower priority providers.
         *
         * Higher value indicates higher priority.
         * @param context a #GtkSourceCompletionContext
         */
        vfunc_get_priority(context: CompletionContext): number;
        /**
         * Gets the title of the completion provider, if any.
         *
         * Currently, titles are not displayed in the completion results, but may be
         * at some point in the future when non-%NULL.
         */
        vfunc_get_title(): string | null;
        /**
         * This function is used to determine if a character inserted into the text
         * editor should cause a new completion request to be triggered.
         *
         * An example would be period '.' which might indicate that the user wants
         * to complete method or field names of an object.
         *
         * This method will only trigger when text is inserted into the #GtkTextBuffer
         * while the completion list is visible and a proposal is selected. Incremental
         * key-presses (like shift, control, or alt) are not triggerable.
         * @param iter a #GtkTextIter
         * @param ch a #gunichar of the character inserted
         */
        vfunc_is_trigger(iter: Gtk.TextIter, ch: number): boolean;
        /**
         * This function is used to determine if a key typed by the user should
         * activate `proposal` (resulting in committing the text to the editor).
         *
         * This is useful when using languages where convention may lead to less
         * typing by the user. One example may be the use of "." or "-" to expand
         * a field access in the C programming language.
         * @param context a #GtkSourceCompletionContext
         * @param proposal a #GtkSourceCompletionProposal
         * @param keyval a keyval such as [const@Gdk.KEY_period]
         * @param state a #GdkModifierType or 0
         */
        vfunc_key_activates(
            context: CompletionContext,
            proposal: CompletionProposal,
            keyval: number,
            state: Gdk.ModifierType,
        ): boolean;
        /**
         * Providers should return a list of alternates to `proposal` or %NULL if
         * there are no alternates available.
         *
         * This can be used by the completion view to allow the user to move laterally
         * through similar proposals, such as overrides of methods by the same name.
         * @param context a #GtkSourceCompletionContext
         * @param proposal a #GtkSourceCompletionProposal
         */
        vfunc_list_alternates(context: CompletionContext, proposal: CompletionProposal): CompletionProposal[] | null;
        /**
         * Asynchronously requests that the provider populates the completion
         * results for `context`.
         *
         * For providers that would like to populate a [iface`Gio`.ListModel] while those
         * results are displayed to the user,
         * [method`CompletionContext`.set_proposals_for_provider] may be used
         * to reduce latency until the user sees results.
         * @param context a #GtkSourceCompletionContext
         * @param cancellable a #GCancellable or %NULL
         * @param callback a callback to execute upon completion
         */
        vfunc_populate_async(
            context: CompletionContext,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Completes an asynchronous operation to populate a completion provider.
         * @param result a #GAsyncResult provided to callback
         */
        vfunc_populate_finish(result: Gio.AsyncResult): Gio.ListModel;
        /**
         * This function can be used to filter results previously provided to
         * the [class`CompletionContext]` by the #GtkSourceCompletionProvider.
         *
         * This can happen as the user types additional text onto the word so
         * that previously matched items may be removed from the list instead of
         * generating new [iface`Gio`.ListModel] of results.
         * @param context a #GtkSourceCompletionContext
         * @param model a #GListModel
         */
        vfunc_refilter(context: CompletionContext, model: Gio.ListModel): void;
    }

    interface HoverProvider {
        // Owm methods of GtkSource-5.HoverProvider

        populate_async(
            context: HoverContext,
            display: HoverDisplay,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        populate_finish(result: Gio.AsyncResult): boolean;

        // Own virtual methods of GtkSource-5.HoverProvider

        vfunc_populate(context: HoverContext, display: HoverDisplay): boolean;
        vfunc_populate_async(
            context: HoverContext,
            display: HoverDisplay,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_populate_finish(result: Gio.AsyncResult): boolean;
    }

    interface Indenter {
        // Owm methods of GtkSource-5.Indenter

        /**
         * This function should be implemented to alter the indentation of text
         * within the view.
         *
         * `view` is provided so that the indenter may retrieve settings such as indentation and tab widths.
         *
         * `iter` is the location where the indentation was requested. This typically
         * is after having just inserted a newline (\n) character but can be other
         * situations such as a manually requested indentation or reformatting.
         *
         * See [iface`Indenter`.is_trigger] for how to trigger indentation on
         * various characters inserted into the buffer.
         *
         * The implementor of this function is expected to keep `iter` valid across
         * calls to the function and should contain the location of the insert mark
         * after calling this function.
         *
         * The default implementation for this virtual function will copy the
         * indentation of the previous line.
         * @param view a #GtkSourceView
         * @param iter the location of the indentation request
         */
        indent(view: View, iter: Gtk.TextIter): void;
        /**
         * This function is used to determine if a key pressed should cause the
         * indenter to automatically indent.
         *
         * The default implementation of this virtual method will check to see
         * if `keyval` is [const`Gdk`.KEY_Return] or [const`Gdk`.KEY_KP_Enter] and `state` does
         * not have %GDK_SHIFT_MASK set. This is to allow the user to avoid
         * indentation when Shift+Return is pressed. Other indenters may want
         * to copy this behavior to provide a consistent experience to users.
         * @param view a #GtkSourceView
         * @param location the location where @ch is to be inserted
         * @param state modifier state for the insertion
         * @param keyval the keyval pressed such as [const@Gdk.KEY_Return]
         * @returns %TRUE if indentation should be automatically triggered;   otherwise %FALSE and no indentation will be performed.
         */
        is_trigger(view: View, location: Gtk.TextIter, state: Gdk.ModifierType, keyval: number): boolean;

        // Own virtual methods of GtkSource-5.Indenter

        /**
         * This function should be implemented to alter the indentation of text
         * within the view.
         *
         * `view` is provided so that the indenter may retrieve settings such as indentation and tab widths.
         *
         * `iter` is the location where the indentation was requested. This typically
         * is after having just inserted a newline (\n) character but can be other
         * situations such as a manually requested indentation or reformatting.
         *
         * See [iface`Indenter`.is_trigger] for how to trigger indentation on
         * various characters inserted into the buffer.
         *
         * The implementor of this function is expected to keep `iter` valid across
         * calls to the function and should contain the location of the insert mark
         * after calling this function.
         *
         * The default implementation for this virtual function will copy the
         * indentation of the previous line.
         * @param view a #GtkSourceView
         * @param iter the location of the indentation request
         */
        vfunc_indent(view: View, iter: Gtk.TextIter): void;
        /**
         * This function is used to determine if a key pressed should cause the
         * indenter to automatically indent.
         *
         * The default implementation of this virtual method will check to see
         * if `keyval` is [const`Gdk`.KEY_Return] or [const`Gdk`.KEY_KP_Enter] and `state` does
         * not have %GDK_SHIFT_MASK set. This is to allow the user to avoid
         * indentation when Shift+Return is pressed. Other indenters may want
         * to copy this behavior to provide a consistent experience to users.
         * @param view a #GtkSourceView
         * @param location the location where @ch is to be inserted
         * @param state modifier state for the insertion
         * @param keyval the keyval pressed such as [const@Gdk.KEY_Return]
         */
        vfunc_is_trigger(view: View, location: Gtk.TextIter, state: Gdk.ModifierType, keyval: number): boolean;
    }

    interface StyleSchemeChooser {
        // Own properties of GtkSource-5.StyleSchemeChooser

        /**
         * Contains the currently selected style scheme.
         *
         * The property can be set to change the current selection programmatically.
         */
        style_scheme: StyleScheme;
        /**
         * Contains the currently selected style scheme.
         *
         * The property can be set to change the current selection programmatically.
         */
        styleScheme: StyleScheme;

        // Owm methods of GtkSource-5.StyleSchemeChooser

        /**
         * Gets the currently-selected scheme.
         * @returns the currently-selected scheme.
         */
        get_style_scheme(): StyleScheme;
        /**
         * Sets the scheme.
         * @param scheme a #GtkSourceStyleScheme
         */
        set_style_scheme(scheme: StyleScheme): void;

        // Own virtual methods of GtkSource-5.StyleSchemeChooser

        /**
         * Gets the currently-selected scheme.
         */
        vfunc_get_style_scheme(): StyleScheme;
        /**
         * Sets the scheme.
         * @param scheme a #GtkSourceStyleScheme
         */
        vfunc_set_style_scheme(scheme: StyleScheme): void;
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

export default GtkSource;
// END
