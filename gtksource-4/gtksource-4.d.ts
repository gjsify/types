/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gtksource-4-ambient.d.ts';
import './gtksource-4-import.d.ts';
/**
 * GtkSource-4
 */

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
    /**
     * An error code used with %GTK_SOURCE_COMPLETION_ERROR in a #GError returned
     * from a completion-related function.
     */
    class CompletionError extends GLib.Error {
        // Own fields of GtkSource-4.CompletionError

        /**
         * The #GtkSourceCompletionProvider
         * is already bound to the #GtkSourceCompletion object.
         */
        ALREADY_BOUND: number;
        /**
         * The #GtkSourceCompletionProvider is
         * not bound to the #GtkSourceCompletion object.
         */
        NOT_BOUND: number;

        // Constructors of GtkSource-4.CompletionError

        constructor(options: { message: string; code: number });

        // Owm methods of GtkSource-4.CompletionError

        static quark(): GLib.Quark;
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
        // Own fields of GtkSource-4.FileLoaderError

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

        // Constructors of GtkSource-4.FileLoaderError

        constructor(options: { message: string; code: number });

        // Owm methods of GtkSource-4.FileLoaderError

        static quark(): GLib.Quark;
    }

    /**
     * An error code used with the %GTK_SOURCE_FILE_SAVER_ERROR domain.
     */
    class FileSaverError extends GLib.Error {
        // Own fields of GtkSource-4.FileSaverError

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

        // Constructors of GtkSource-4.FileSaverError

        constructor(options: { message: string; code: number });

        // Owm methods of GtkSource-4.FileSaverError

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
    function completion_error_quark(): GLib.Quark;
    /**
     * Gets all encodings.
     * @returns a list of all #GtkSourceEncoding's. Free with g_slist_free().
     */
    function encoding_get_all(): Encoding[];
    /**
     * Gets the #GtkSourceEncoding for the current locale. See also g_get_charset().
     * @returns the current locale encoding.
     */
    function encoding_get_current(): Encoding;
    /**
     * Gets the list of default candidate encodings to try when loading a file. See
     * gtk_source_file_loader_set_candidate_encodings().
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
     * Initializes the GtkSourceView library (e.g. for the internationalization).
     *
     * This function can be called several times, but is meant to be called at the
     * beginning of main(), before any other GtkSourceView function call.
     */
    function init(): void;
    /**
     * Use this function to escape the following characters: `\n`, `\r`, `\t` and `\`.
     *
     * For a regular expression search, use g_regex_escape_string() instead.
     *
     * One possible use case is to take the #GtkTextBuffer's selection and put it in a
     * search entry. The selection can contain tabulations, newlines, etc. So it's
     * better to escape those special characters to better fit in the search entry.
     *
     * See also: gtk_source_utils_unescape_search_text().
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
     * Use this function before gtk_source_search_settings_set_search_text(), to
     * unescape the following sequences of characters: `\n`, `\r`, `\t` and `\\`.
     * The purpose is to easily write those characters in a search entry.
     *
     * Note that unescaping the search text is not needed for regular expression
     * searches.
     *
     * See also: gtk_source_utils_escape_search_text().
     * @param text the text to unescape.
     * @returns the unescaped @text.
     */
    function utils_unescape_search_text(text: string): string;
    enum CompletionActivation {
        /**
         * None.
         */
        NONE,
        /**
         * Interactive activation. By
         * default, it occurs on each insertion in the #GtkTextBuffer. This can be
         * blocked temporarily with gtk_source_completion_block_interactive().
         */
        INTERACTIVE,
        /**
         * User requested activation.
         * By default, it occurs when the user presses
         * <keycombo><keycap>Control</keycap><keycap>space</keycap></keycombo>.
         */
        USER_REQUESTED,
    }
    /**
     * Flags to define the behavior of a #GtkSourceFileSaver.
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
    enum GutterRendererState {
        /**
         * normal state
         */
        NORMAL,
        /**
         * area in the renderer represents the
         * line on which the insert cursor is currently positioned
         */
        CURSOR,
        /**
         * the mouse pointer is currently
         * over the activatable area of the renderer
         */
        PRELIT,
        /**
         * area in the renderer represents
         * a line in the buffer which contains part of the selection
         */
        SELECTED,
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

        interface HighlightUpdated {
            (start: Gtk.TextIter, end: Gtk.TextIter): void;
        }

        interface Redo {
            (): void;
        }

        interface SourceMarkUpdated {
            (mark: Gtk.TextMark): void;
        }

        interface Undo {
            (): void;
        }

        // Constructor properties interface
    }

    class Buffer extends Gtk.TextBuffer {
        // Own properties of GtkSource-4.Buffer

        readonly can_redo: boolean;
        readonly canRedo: boolean;
        readonly can_undo: boolean;
        readonly canUndo: boolean;
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
         * gtk_source_buffer_set_implicit_trailing_newline().
         */
        implicit_trailing_newline: boolean;
        /**
         * Whether the buffer has an implicit trailing newline. See
         * gtk_source_buffer_set_implicit_trailing_newline().
         */
        implicitTrailingNewline: boolean;
        language: Language;
        /**
         * Number of undo levels for the buffer. -1 means no limit. This property
         * will only affect the default undo manager.
         */
        max_undo_levels: number;
        /**
         * Number of undo levels for the buffer. -1 means no limit. This property
         * will only affect the default undo manager.
         */
        maxUndoLevels: number;
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
        undo_manager: UndoManager;
        undoManager: UndoManager;

        // Constructors of GtkSource-4.Buffer

        static ['new'](table?: Gtk.TextTagTable | null): Buffer;

        static new_with_language(language: Language): Buffer;

        // Owm methods of GtkSource-4.Buffer

        /**
         * Moves `iter` to the position of the previous #GtkSourceMark of the given
         * category. Returns %TRUE if `iter` was moved. If `category` is NULL, the
         * previous source mark can be of any category.
         * @param iter an iterator.
         * @param category category to search for, or %NULL
         * @returns whether @iter was moved.
         */
        backward_iter_to_source_mark(iter: Gtk.TextIter, category?: string | null): boolean;
        /**
         * Marks the beginning of a not undoable action on the buffer,
         * disabling the undo manager.  Typically you would call this function
         * before initially setting the contents of the buffer (e.g. when
         * loading a file in a text editor).
         *
         * You may nest gtk_source_buffer_begin_not_undoable_action() /
         * gtk_source_buffer_end_not_undoable_action() blocks.
         */
        begin_not_undoable_action(): void;
        /**
         * Changes the case of the text between the specified iterators.
         * @param case_type how to change the case.
         * @param start a #GtkTextIter.
         * @param end a #GtkTextIter.
         */
        change_case(case_type: ChangeCaseType, start: Gtk.TextIter, end: Gtk.TextIter): void;
        /**
         * Creates a source mark in the `buffer` of category `category`.  A source mark is
         * a #GtkTextMark but organised into categories. Depending on the category
         * a pixbuf can be specified that will be displayed along the line of the mark.
         *
         * Like a #GtkTextMark, a #GtkSourceMark can be anonymous if the
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
         * @returns a new #GtkSourceMark, owned by the buffer.
         */
        create_source_mark(name: string | null, category: string, where: Gtk.TextIter): Mark;
        /**
         * Marks the end of a not undoable action on the buffer.  When the
         * last not undoable block is closed through the call to this
         * function, the list of undo actions is cleared and the undo manager
         * is re-enabled.
         */
        end_not_undoable_action(): void;
        /**
         * Forces buffer to analyze and highlight the given area synchronously.
         *
         * <note>
         *   <para>
         *     This is a potentially slow operation and should be used only
         *     when you need to make sure that some text not currently
         *     visible is highlighted, for instance before printing.
         *   </para>
         * </note>
         * @param start start of the area to highlight.
         * @param end end of the area to highlight.
         */
        ensure_highlight(start: Gtk.TextIter, end: Gtk.TextIter): void;
        /**
         * Moves `iter` to the position of the next #GtkSourceMark of the given
         * `category`. Returns %TRUE if `iter` was moved. If `category` is NULL, the
         * next source mark can be of any category.
         * @param iter an iterator.
         * @param category category to search for, or %NULL
         * @returns whether @iter was moved.
         */
        forward_iter_to_source_mark(iter: Gtk.TextIter, category?: string | null): boolean;
        /**
         * Get all defined context classes at `iter`.
         *
         * See the #GtkSourceBuffer description for the list of default context classes.
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
         * Returns the #GtkSourceLanguage associated with the buffer,
         * see gtk_source_buffer_set_language().  The returned object should not be
         * unreferenced by the user.
         * @returns the #GtkSourceLanguage associated with the buffer, or %NULL.
         */
        get_language(): Language | null;
        /**
         * Determines the number of undo levels the buffer will track for buffer edits.
         * @returns the maximum number of possible undo levels or -1 if no limit is set.
         */
        get_max_undo_levels(): number;
        /**
         * Returns the list of marks of the given category at `iter`. If `category`
         * is %NULL it returns all marks at `iter`.
         * @param iter an iterator.
         * @param category category to search for, or %NULL
         * @returns a newly allocated #GSList.
         */
        get_source_marks_at_iter(iter: Gtk.TextIter, category?: string | null): Mark[];
        /**
         * Returns the list of marks of the given category at `line`.
         * If `category` is %NULL, all marks at `line` are returned.
         * @param line a line number.
         * @param category category to search for, or %NULL
         * @returns a newly allocated #GSList.
         */
        get_source_marks_at_line(line: number, category?: string | null): Mark[];
        /**
         * Returns the #GtkSourceStyleScheme associated with the buffer,
         * see gtk_source_buffer_set_style_scheme().
         * The returned object should not be unreferenced by the user.
         * @returns the #GtkSourceStyleScheme associated with the buffer, or %NULL.
         */
        get_style_scheme(): StyleScheme | null;
        /**
         * Returns the #GtkSourceUndoManager associated with the buffer,
         * see gtk_source_buffer_set_undo_manager().  The returned object should not be
         * unreferenced by the user.
         * @returns the #GtkSourceUndoManager associated with the buffer, or %NULL.
         */
        get_undo_manager(): UndoManager | null;
        /**
         * Moves backward to the next toggle (on or off) of the context class. If no
         * matching context class toggles are found, returns %FALSE, otherwise %TRUE.
         * Does not return toggles located at `iter,` only toggles after `iter`. Sets
         * `iter` to the location of the toggle, or to the end of the buffer if no
         * toggle is found.
         *
         * See the #GtkSourceBuffer description for the list of default context classes.
         * @param iter a #GtkTextIter.
         * @param context_class the context class.
         * @returns whether we found a context class toggle before @iter
         */
        iter_backward_to_context_class_toggle(iter: Gtk.TextIter, context_class: string): boolean;
        /**
         * Moves forward to the next toggle (on or off) of the context class. If no
         * matching context class toggles are found, returns %FALSE, otherwise %TRUE.
         * Does not return toggles located at `iter,` only toggles after `iter`. Sets
         * `iter` to the location of the toggle, or to the end of the buffer if no
         * toggle is found.
         *
         * See the #GtkSourceBuffer description for the list of default context classes.
         * @param iter a #GtkTextIter.
         * @param context_class the context class.
         * @returns whether we found a context class toggle after @iter
         */
        iter_forward_to_context_class_toggle(iter: Gtk.TextIter, context_class: string): boolean;
        /**
         * Check if the class `context_class` is set on `iter`.
         *
         * See the #GtkSourceBuffer description for the list of default context classes.
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
         * Redoes the last undo operation.  Use gtk_source_buffer_can_redo()
         * to check whether a call to this function will have any effect.
         *
         * This function emits the #GtkSourceBuffer::redo signal.
         */
        redo(): void;
        /**
         * Remove all marks of `category` between `start` and `end` from the buffer.
         * If `category` is NULL, all marks in the range will be removed.
         * @param start a #GtkTextIter.
         * @param end a #GtkTextIter.
         * @param category category to search for, or %NULL.
         */
        remove_source_marks(start: Gtk.TextIter, end: Gtk.TextIter, category?: string | null): void;
        /**
         * Controls the bracket match highlighting function in the buffer.  If
         * activated, when you position your cursor over a bracket character
         * (a parenthesis, a square bracket, etc.) the matching opening or
         * closing bracket character will be highlighted.
         * @param highlight %TRUE if you want matching brackets highlighted.
         */
        set_highlight_matching_brackets(highlight: boolean): void;
        /**
         * Controls whether syntax is highlighted in the buffer.
         *
         * If `highlight` is %TRUE, the text will be highlighted according to the syntax
         * patterns specified in the #GtkSourceLanguage set with
         * gtk_source_buffer_set_language().
         *
         * If `highlight` is %FALSE, syntax highlighting is disabled and all the
         * #GtkTextTag objects that have been added by the syntax highlighting engine
         * are removed from the buffer.
         * @param highlight %TRUE to enable syntax highlighting, %FALSE to disable it.
         */
        set_highlight_syntax(highlight: boolean): void;
        /**
         * Sets whether the `buffer` has an implicit trailing newline.
         *
         * If an explicit trailing newline is present in a #GtkTextBuffer, #GtkTextView
         * shows it as an empty line. This is generally not what the user expects.
         *
         * If `implicit_trailing_newline` is %TRUE (the default value):
         *  - when a #GtkSourceFileLoader loads the content of a file into the `buffer,`
         *    the trailing newline (if present in the file) is not inserted into the
         *    `buffer`.
         *  - when a #GtkSourceFileSaver saves the content of the `buffer` into a file, a
         *    trailing newline is added to the file.
         *
         * On the other hand, if `implicit_trailing_newline` is %FALSE, the file's
         * content is not modified when loaded into the `buffer,` and the `buffer'`s
         * content is not modified when saved into a file.
         * @param implicit_trailing_newline the new value.
         */
        set_implicit_trailing_newline(implicit_trailing_newline: boolean): void;
        /**
         * Associates a #GtkSourceLanguage with the buffer.
         *
         * Note that a #GtkSourceLanguage affects not only the syntax highlighting, but
         * also the [context classes][context-classes]. If you want to disable just the
         * syntax highlighting, see gtk_source_buffer_set_highlight_syntax().
         *
         * The buffer holds a reference to `language`.
         * @param language a #GtkSourceLanguage to set, or %NULL.
         */
        set_language(language?: Language | null): void;
        /**
         * Sets the number of undo levels for user actions the buffer will
         * track.  If the number of user actions exceeds the limit set by this
         * function, older actions will be discarded.
         *
         * If `max_undo_levels` is -1, the undo/redo is unlimited.
         *
         * If `max_undo_levels` is 0, the undo/redo is disabled.
         * @param max_undo_levels the desired maximum number of undo levels.
         */
        set_max_undo_levels(max_undo_levels: number): void;
        /**
         * Sets a #GtkSourceStyleScheme to be used by the buffer and the view.
         *
         * Note that a #GtkSourceStyleScheme affects not only the syntax highlighting,
         * but also other #GtkSourceView features such as highlighting the current line,
         * matching brackets, the line numbers, etc.
         *
         * Instead of setting a %NULL `scheme,` it is better to disable syntax
         * highlighting with gtk_source_buffer_set_highlight_syntax(), and setting the
         * #GtkSourceStyleScheme with the "classic" or "tango" ID, because those two
         * style schemes follow more closely the GTK+ theme (for example for the
         * background color).
         *
         * The buffer holds a reference to `scheme`.
         * @param scheme a #GtkSourceStyleScheme or %NULL.
         */
        set_style_scheme(scheme?: StyleScheme | null): void;
        /**
         * Set the buffer undo manager. If `manager` is %NULL the default undo manager
         * will be set.
         * @param manager A #GtkSourceUndoManager or %NULL.
         */
        set_undo_manager(manager?: UndoManager | null): void;
        /**
         * Sort the lines of text between the specified iterators.
         * @param start a #GtkTextIter.
         * @param end a #GtkTextIter.
         * @param flags #GtkSourceSortFlags specifying how the sort should behave
         * @param column sort considering the text starting at the given column
         */
        sort_lines(start: Gtk.TextIter, end: Gtk.TextIter, flags: SortFlags, column: number): void;
        /**
         * Undoes the last user action which modified the buffer.  Use
         * gtk_source_buffer_can_undo() to check whether a call to this
         * function will have any effect.
         *
         * This function emits the #GtkSourceBuffer::undo signal.
         */
        undo(): void;
    }

    module Completion {
        // Signal callback interfaces

        interface ActivateProposal {
            (): void;
        }

        interface Hide {
            (): void;
        }

        interface MoveCursor {
            (step: Gtk.ScrollStep, num: number): void;
        }

        interface MovePage {
            (step: Gtk.ScrollStep, num: number): void;
        }

        interface PopulateContext {
            (context: CompletionContext): void;
        }

        interface Show {
            (): void;
        }

        // Constructor properties interface
    }

    class Completion extends GObject.Object {
        // Own properties of GtkSource-4.Completion

        /**
         * Number of keyboard accelerators to show for the first proposals. For
         * example, to activate the first proposal, the user can press
         * <keycombo><keycap>Alt</keycap><keycap>1</keycap></keycombo>.
         */
        accelerators: number;
        /**
         * Determines the popup delay (in milliseconds) at which the completion
         * will be shown for interactive completion.
         */
        auto_complete_delay: number;
        /**
         * Determines the popup delay (in milliseconds) at which the completion
         * will be shown for interactive completion.
         */
        autoCompleteDelay: number;
        /**
         * The scroll page size of the proposals in the completion window. In
         * other words, when <keycap>PageDown</keycap> or
         * <keycap>PageUp</keycap> is pressed, the selected
         * proposal becomes the one which is located one page size backward or
         * forward.
         *
         * See also the #GtkSourceCompletion::move-cursor signal.
         */
        proposal_page_size: number;
        /**
         * The scroll page size of the proposals in the completion window. In
         * other words, when <keycap>PageDown</keycap> or
         * <keycap>PageUp</keycap> is pressed, the selected
         * proposal becomes the one which is located one page size backward or
         * forward.
         *
         * See also the #GtkSourceCompletion::move-cursor signal.
         */
        proposalPageSize: number;
        /**
         * The scroll page size of the provider pages in the completion window.
         *
         * See the #GtkSourceCompletion::move-page signal.
         */
        provider_page_size: number;
        /**
         * The scroll page size of the provider pages in the completion window.
         *
         * See the #GtkSourceCompletion::move-page signal.
         */
        providerPageSize: number;
        /**
         * Determines whether the visibility of the info window should be
         * saved when the completion is hidden, and restored when the completion
         * is shown again.
         */
        remember_info_visibility: boolean;
        /**
         * Determines whether the visibility of the info window should be
         * saved when the completion is hidden, and restored when the completion
         * is shown again.
         */
        rememberInfoVisibility: boolean;
        /**
         * Determines whether the first proposal should be selected when the
         * completion is first shown.
         */
        select_on_show: boolean;
        /**
         * Determines whether the first proposal should be selected when the
         * completion is first shown.
         */
        selectOnShow: boolean;
        /**
         * Determines whether provider headers should be shown in the proposal
         * list. It can be useful to disable when there is only one provider.
         */
        show_headers: boolean;
        /**
         * Determines whether provider headers should be shown in the proposal
         * list. It can be useful to disable when there is only one provider.
         */
        showHeaders: boolean;
        /**
         * Determines whether provider and proposal icons should be shown in
         * the completion popup.
         */
        show_icons: boolean;
        /**
         * Determines whether provider and proposal icons should be shown in
         * the completion popup.
         */
        showIcons: boolean;
        /**
         * The #GtkSourceView bound to the completion object.
         */
        view: View;

        // Owm methods of GtkSource-4.Completion

        /**
         * Add a new #GtkSourceCompletionProvider to the completion object. This will
         * add a reference `provider,` so make sure to unref your own copy when you
         * no longer need it.
         * @param provider a #GtkSourceCompletionProvider.
         * @returns %TRUE if @provider was successfully added, otherwise if @error          is provided, it will be set with the error and %FALSE is returned.
         */
        add_provider(provider: CompletionProvider): boolean;
        /**
         * Block interactive completion. This can be used to disable interactive
         * completion when inserting or deleting text from the buffer associated with
         * the completion. Use gtk_source_completion_unblock_interactive() to enable
         * interactive completion again.
         *
         * This function may be called multiple times. It will continue to block
         * interactive completion until gtk_source_completion_unblock_interactive()
         * has been called the same number of times.
         */
        block_interactive(): void;
        /**
         * Create a new #GtkSourceCompletionContext for `completion`. The position where
         * the completion occurs can be specified by `position`. If `position` is %NULL,
         * the current cursor position will be used.
         * @param position a #GtkTextIter, or %NULL.
         * @returns a new #GtkSourceCompletionContext. The reference being returned is a 'floating' reference, so if you invoke gtk_source_completion_start() with this context you don't need to unref it.
         */
        create_context(position?: Gtk.TextIter | null): CompletionContext;
        /**
         * The info widget is the window where the completion displays optional extra
         * information of the proposal.
         * @returns The #GtkSourceCompletionInfo window                           associated with @completion.
         */
        get_info_window(): CompletionInfo;
        /**
         * Get list of providers registered on `completion`. The returned list is owned
         * by the completion and should not be freed.
         * @returns list of #GtkSourceCompletionProvider.
         */
        get_providers(): CompletionProvider[];
        /**
         * The #GtkSourceView associated with `completion,` or %NULL if the view has been
         * destroyed.
         * @returns The #GtkSourceView associated with @completion, or %NULL.
         */
        get_view(): View | null;
        /**
         * Hides the completion if it is active (visible).
         */
        hide(): void;
        /**
         * Remove `provider` from the completion.
         * @param provider a #GtkSourceCompletionProvider.
         * @returns %TRUE if @provider was successfully removed, otherwise if @error          is provided, it will be set with the error and %FALSE is returned.
         */
        remove_provider(provider: CompletionProvider): boolean;
        /**
         * Starts a new completion with the specified #GtkSourceCompletionContext and
         * a list of potential candidate providers for completion.
         *
         * It can be convenient for showing a completion on-the-fly, without the need to
         * add or remove providers to the #GtkSourceCompletion.
         *
         * Another solution is to add providers with
         * gtk_source_completion_add_provider(), and implement
         * gtk_source_completion_provider_match() for each provider.
         * @param providers a list of #GtkSourceCompletionProvider, or %NULL.
         * @param context The #GtkSourceCompletionContext with which to start the completion.
         * @returns %TRUE if it was possible to the show completion window.
         */
        start(providers: CompletionProvider[] | null, context: CompletionContext): boolean;
        /**
         * Unblock interactive completion. This can be used after using
         * gtk_source_completion_block_interactive() to enable interactive completion
         * again.
         */
        unblock_interactive(): void;
    }

    module CompletionContext {
        // Signal callback interfaces

        interface Cancelled {
            (): void;
        }

        // Constructor properties interface
    }

    class CompletionContext extends GObject.InitiallyUnowned {
        // Own properties of GtkSource-4.CompletionContext

        /**
         * The completion activation
         */
        activation: CompletionActivation;
        /**
         * The #GtkSourceCompletion associated with the context.
         */
        completion: Completion;
        /**
         * The #GtkTextIter at which the completion is invoked.
         */
        iter: Gtk.TextIter;

        // Owm methods of GtkSource-4.CompletionContext

        /**
         * Providers can use this function to add proposals to the completion. They
         * can do so asynchronously by means of the `finished` argument. Providers must
         * ensure that they always call this function with `finished` set to %TRUE
         * once each population (even if no proposals need to be added).
         * Population occurs when the gtk_source_completion_provider_populate()
         * function is called.
         * @param provider a #GtkSourceCompletionProvider.
         * @param proposals The list of proposals to add.
         * @param finished Whether the provider is finished adding proposals.
         */
        add_proposals(provider: CompletionProvider, proposals: CompletionProposal[] | null, finished: boolean): void;
        /**
         * Get the context activation.
         * @returns The context activation.
         */
        get_activation(): CompletionActivation;
        /**
         * Get the iter at which the completion was invoked. Providers can use this
         * to determine how and if to match proposals.
         * @returns %TRUE if @iter is correctly set, %FALSE otherwise.
         */
        get_iter(): boolean;
    }

    module CompletionInfo {
        // Constructor properties interface
    }

    class CompletionInfo extends Gtk.Window {
        // Constructors of GtkSource-4.CompletionInfo

        static ['new'](): CompletionInfo;

        // Owm methods of GtkSource-4.CompletionInfo

        /**
         * Moves the #GtkSourceCompletionInfo to `iter`. If `iter` is %NULL `info` is
         * moved to the cursor position. Moving will respect the #GdkGravity setting
         * of the info window and will ensure the line at `iter` is not occluded by
         * the window.
         * @param view a #GtkTextView on which the info window should be positioned.
         * @param iter a #GtkTextIter.
         */
        move_to_iter(view: Gtk.TextView, iter?: Gtk.TextIter | null): void;
    }

    module CompletionItem {
        // Constructor properties interface
    }

    class CompletionItem extends GObject.Object {
        // Own properties of GtkSource-4.CompletionItem

        /**
         * The #GIcon for the icon to be shown for this proposal.
         */
        gicon: Gio.Icon;
        /**
         * The #GdkPixbuf for the icon to be shown for this proposal.
         */
        icon: GdkPixbuf.Pixbuf;
        /**
         * The icon name for the icon to be shown for this proposal.
         */
        icon_name: string;
        /**
         * The icon name for the icon to be shown for this proposal.
         */
        iconName: string;
        /**
         * Optional extra information to be shown for this proposal.
         */
        info: string;
        /**
         * Label to be shown for this proposal.
         */
        label: string;
        /**
         * Label with markup to be shown for this proposal.
         */
        markup: string;
        /**
         * Proposal text.
         */
        text: string;

        // Constructors of GtkSource-4.CompletionItem

        static ['new'](): CompletionItem;

        // Owm methods of GtkSource-4.CompletionItem

        set_gicon(gicon?: Gio.Icon | null): void;
        set_icon(icon?: GdkPixbuf.Pixbuf | null): void;
        set_icon_name(icon_name?: string | null): void;
        set_info(info?: string | null): void;
        set_label(label?: string | null): void;
        set_markup(markup?: string | null): void;
        set_text(text?: string | null): void;
    }

    module CompletionWords {
        // Constructor properties interface
    }

    class CompletionWords extends GObject.Object {
        // Own properties of GtkSource-4.CompletionWords

        /**
         * The type of activation.
         */
        activation: CompletionActivation;
        icon: GdkPixbuf.Pixbuf;
        interactive_delay: number;
        interactiveDelay: number;
        minimum_word_size: number;
        minimumWordSize: number;
        name: string;
        priority: number;
        proposals_batch_size: number;
        proposalsBatchSize: number;
        scan_batch_size: number;
        scanBatchSize: number;

        // Constructors of GtkSource-4.CompletionWords

        static ['new'](name?: string | null, icon?: GdkPixbuf.Pixbuf | null): CompletionWords;

        // Owm methods of GtkSource-4.CompletionWords

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

    class File extends GObject.Object {
        // Own properties of GtkSource-4.File

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

        // Constructors of GtkSource-4.File

        static ['new'](): File;

        // Owm methods of GtkSource-4.File

        /**
         * Checks synchronously the file on disk, to know whether the file is externally
         * modified, or has been deleted, and whether the file is read-only.
         *
         * #GtkSourceFile doesn't create a #GFileMonitor to track those properties, so
         * this function needs to be called instead. Creating lots of #GFileMonitor's
         * would take lots of resources.
         *
         * Since this function is synchronous, it is advised to call it only on local
         * files. See gtk_source_file_is_local().
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
         * #GtkSourceFile:location is %NULL, returns %FALSE.
         *
         * To have an up-to-date value, you must first call
         * gtk_source_file_check_file_on_disk().
         * @returns whether the file has been deleted.
         */
        is_deleted(): boolean;
        /**
         * Returns whether the file is externally modified. If the
         * #GtkSourceFile:location is %NULL, returns %FALSE.
         *
         * To have an up-to-date value, you must first call
         * gtk_source_file_check_file_on_disk().
         * @returns whether the file is externally modified.
         */
        is_externally_modified(): boolean;
        /**
         * Returns whether the file is local. If the #GtkSourceFile:location is %NULL,
         * returns %FALSE.
         * @returns whether the file is local.
         */
        is_local(): boolean;
        /**
         * Returns whether the file is read-only. If the
         * #GtkSourceFile:location is %NULL, returns %FALSE.
         *
         * To have an up-to-date value, you must first call
         * gtk_source_file_check_file_on_disk().
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

    class FileLoader extends GObject.Object {
        // Own properties of GtkSource-4.FileLoader

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

        // Constructors of GtkSource-4.FileLoader

        static ['new'](buffer: Buffer, file: File): FileLoader;

        static new_from_stream(buffer: Buffer, file: File, stream: Gio.InputStream): FileLoader;

        // Owm methods of GtkSource-4.FileLoader

        get_buffer(): Buffer;
        get_compression_type(): CompressionType;
        get_encoding(): Encoding;
        get_file(): File;
        get_input_stream(): Gio.InputStream | null;
        get_location(): Gio.File | null;
        get_newline_type(): NewlineType;
        /**
         * Loads asynchronously the file or input stream contents into the
         * #GtkSourceBuffer. See the #GAsyncResult documentation to know how to use this
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
         * Finishes a file loading started with gtk_source_file_loader_load_async().
         *
         * If the contents has been loaded, the following #GtkSourceFile properties will
         * be updated: the location, the encoding, the newline type and the compression
         * type.
         * @param result a #GAsyncResult.
         * @returns whether the contents has been loaded successfully.
         */
        load_finish(result: Gio.AsyncResult): boolean;
        /**
         * Sets the candidate encodings for the file loading. The encodings are tried in
         * the same order as the list.
         *
         * For convenience, `candidate_encodings` can contain duplicates. Only the first
         * occurrence of a duplicated encoding is kept in the list.
         *
         * By default the candidate encodings are (in that order in the list):
         * 1. If set, the #GtkSourceFile's encoding as returned by
         * gtk_source_file_get_encoding().
         * 2. The default candidates as returned by
         * gtk_source_encoding_get_default_candidates().
         * @param candidate_encodings a list of   #GtkSourceEncoding<!-- -->s.
         */
        set_candidate_encodings(candidate_encodings: Encoding[]): void;
    }

    module FileSaver {
        // Constructor properties interface
    }

    class FileSaver extends GObject.Object {
        // Own properties of GtkSource-4.FileSaver

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

        // Own fields of GtkSource-4.FileSaver

        object: GObject.Object;

        // Constructors of GtkSource-4.FileSaver

        static ['new'](buffer: Buffer, file: File): FileSaver;

        static new_with_target(buffer: Buffer, file: File, target_location: Gio.File): FileSaver;

        // Owm methods of GtkSource-4.FileSaver

        get_buffer(): Buffer;
        get_compression_type(): CompressionType;
        get_encoding(): Encoding;
        get_file(): File;
        get_flags(): FileSaverFlags;
        get_location(): Gio.File;
        get_newline_type(): NewlineType;
        /**
         * Saves asynchronously the buffer into the file. See the #GAsyncResult
         * documentation to know how to use this function.
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
         * Finishes a file saving started with gtk_source_file_saver_save_async().
         *
         * If the file has been saved successfully, the following #GtkSourceFile
         * properties will be updated: the location, the encoding, the newline type and
         * the compression type.
         *
         * Since the 3.20 version, gtk_text_buffer_set_modified() is called with %FALSE
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

    class Gutter extends GObject.Object {
        // Own properties of GtkSource-4.Gutter

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

        // Owm methods of GtkSource-4.Gutter

        /**
         * Finds the #GtkSourceGutterRenderer at (x, y).
         * @param x The x position to get identified.
         * @param y The y position to get identified.
         * @returns the renderer at (x, y) or %NULL.
         */
        get_renderer_at_pos(x: number, y: number): GutterRenderer | null;
        get_view(): View;
        get_window_type(): Gtk.TextWindowType;
        /**
         * Insert `renderer` into the gutter. If `renderer` is yet unowned then gutter
         * claims its ownership. Otherwise just increases renderer's reference count.
         * `renderer` cannot be already inserted to another gutter.
         * @param renderer a gutter renderer (must inherit from #GtkSourceGutterRenderer).
         * @param position the renderer position.
         * @returns %TRUE if operation succeeded. Otherwise %FALSE.
         */
        insert(renderer: GutterRenderer, position: number): boolean;
        /**
         * Invalidates the drawable area of the gutter. You can use this to force a
         * redraw of the gutter if something has changed and needs to be redrawn.
         */
        queue_draw(): void;
        /**
         * Removes `renderer` from `gutter`.
         * @param renderer a #GtkSourceGutterRenderer.
         */
        remove(renderer: GutterRenderer): void;
        /**
         * Reorders `renderer` in `gutter` to new `position`.
         * @param renderer a #GtkCellRenderer.
         * @param position the new renderer position.
         */
        reorder(renderer: GutterRenderer, position: number): void;
    }

    module GutterRenderer {
        // Signal callback interfaces

        interface Activate {
            (iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): void;
        }

        interface QueryActivatable {
            (iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): boolean;
        }

        interface QueryData {
            (start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState): void;
        }

        interface QueryTooltip {
            (iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip): boolean;
        }

        interface QueueDraw {
            (): void;
        }

        // Constructor properties interface
    }

    abstract class GutterRenderer extends GObject.InitiallyUnowned {
        // Own properties of GtkSource-4.GutterRenderer

        /**
         * The alignment mode of the renderer. This can be used to indicate
         * that in the case a cell spans multiple lines (due to text wrapping)
         * the alignment should work on either the full cell, the first line
         * or the last line.
         */
        alignment_mode: GutterRendererAlignmentMode;
        /**
         * The alignment mode of the renderer. This can be used to indicate
         * that in the case a cell spans multiple lines (due to text wrapping)
         * the alignment should work on either the full cell, the first line
         * or the last line.
         */
        alignmentMode: GutterRendererAlignmentMode;
        background_rgba: Gdk.RGBA;
        backgroundRgba: Gdk.RGBA;
        background_set: boolean;
        backgroundSet: boolean;
        size: number;
        /**
         * The view on which the renderer is placed.
         */
        readonly view: Gtk.TextView;
        /**
         * The visibility of the renderer.
         */
        visible: boolean;
        /**
         * The window type of the view on which the renderer is placed (left,
         * or right).
         */
        readonly window_type: Gtk.TextWindowType;
        /**
         * The window type of the view on which the renderer is placed (left,
         * or right).
         */
        readonly windowType: Gtk.TextWindowType;
        /**
         * The horizontal alignment of the renderer. Set to 0 for a left
         * alignment. 1 for a right alignment. And 0.5 for centering the cells.
         * A value lower than 0 doesn't modify the alignment.
         */
        xalign: number;
        /**
         * The left and right padding of the renderer.
         */
        xpad: number;
        /**
         * The vertical alignment of the renderer. Set to 0 for a top
         * alignment. 1 for a bottom alignment. And 0.5 for centering the cells.
         * A value lower than 0 doesn't modify the alignment.
         */
        yalign: number;
        /**
         * The top and bottom padding of the renderer.
         */
        ypad: number;

        // Owm methods of GtkSource-4.GutterRenderer

        /**
         * Emits the #GtkSourceGutterRenderer::activate signal of the renderer. This is
         * called from #GtkSourceGutter and should never have to be called manually.
         * @param iter a #GtkTextIter at the start of the line where the renderer is activated
         * @param area a #GdkRectangle of the cell area where the renderer is activated
         * @param event the event that triggered the activation
         */
        activate(iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): void;
        /**
         * Called when drawing a region begins. The region to be drawn is indicated
         * by `start` and `end`. The purpose is to allow the implementation to precompute
         * some state before the draw method is called for each cell.
         * @param cr a #cairo_t
         * @param background_area a #GdkRectangle
         * @param cell_area a #GdkRectangle
         * @param start a #GtkTextIter
         * @param end a #GtkTextIter
         */
        begin(
            cr: cairo.Context,
            background_area: Gdk.Rectangle,
            cell_area: Gdk.Rectangle,
            start: Gtk.TextIter,
            end: Gtk.TextIter,
        ): void;
        /**
         * Main renderering method. Implementations should implement this method to draw
         * onto the cairo context. The `background_area` indicates the total area of the
         * cell to be drawn. The `cell_area` indicates the area where content can be
         * drawn (text, images, etc).
         *
         * The `background_area` is the `cell_area` plus the padding on each side (two
         * times the #GtkSourceGutterRenderer:xpad horizontally and two times the
         * #GtkSourceGutterRenderer:ypad vertically, so that the `cell_area` is centered
         * inside `background_area)`.
         *
         * The `state` argument indicates the current state of the renderer and should
         * be taken into account to properly draw the different possible states
         * (cursor, prelit, selected) if appropriate.
         * @param cr the cairo render context
         * @param background_area a #GdkRectangle indicating the total area to be drawn
         * @param cell_area a #GdkRectangle indicating the area to draw content
         * @param start a #GtkTextIter
         * @param end a #GtkTextIter
         * @param state a #GtkSourceGutterRendererState
         */
        draw(
            cr: cairo.Context,
            background_area: Gdk.Rectangle,
            cell_area: Gdk.Rectangle,
            start: Gtk.TextIter,
            end: Gtk.TextIter,
            state: GutterRendererState,
        ): void;
        /**
         * Called when drawing a region of lines has ended.
         */
        end(): void;
        /**
         * Get the x-alignment and y-alignment of the gutter renderer.
         */
        get_alignment(): void;
        /**
         * Get the alignment mode. The alignment mode describes the manner in which the
         * renderer is aligned (see :xalign and :yalign).
         * @returns a #GtkSourceGutterRendererAlignmentMode
         */
        get_alignment_mode(): GutterRendererAlignmentMode;
        /**
         * Get the background color of the renderer.
         * @returns %TRUE if the background color is set, %FALSE otherwise
         */
        get_background(): boolean;
        /**
         * Get the x-padding and y-padding of the gutter renderer.
         */
        get_padding(): void;
        /**
         * Get the size of the renderer.
         * @returns the size of the renderer.
         */
        get_size(): number;
        /**
         * Get the view associated to the gutter renderer
         * @returns a #GtkTextView
         */
        get_view(): Gtk.TextView;
        /**
         * Get whether the gutter renderer is visible.
         * @returns %TRUE if the renderer is visible, %FALSE otherwise
         */
        get_visible(): boolean;
        /**
         * Get the #GtkTextWindowType associated with the gutter renderer.
         * @returns a #GtkTextWindowType
         */
        get_window_type(): Gtk.TextWindowType;
        /**
         * Get whether the renderer is activatable at the location in `event`. This is
         * called from #GtkSourceGutter to determine whether a renderer is activatable
         * using the mouse pointer.
         * @param iter a #GtkTextIter at the start of the line to be activated
         * @param area a #GdkRectangle of the cell area to be activated
         * @param event the event that triggered the query
         * @returns %TRUE if the renderer can be activated, %FALSE otherwise
         */
        query_activatable(iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): boolean;
        /**
         * Emit the #GtkSourceGutterRenderer::query-data signal. This function is called
         * to query for data just before rendering a cell. This is called from the
         * #GtkSourceGutter.  Implementations can override the default signal handler or
         * can connect a signal handler externally to the
         * #GtkSourceGutterRenderer::query-data signal.
         * @param start a #GtkTextIter.
         * @param end a #GtkTextIter.
         * @param state a #GtkSourceGutterRendererState.
         */
        query_data(start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState): void;
        /**
         * Emits the #GtkSourceGutterRenderer::query-tooltip signal. This function is
         * called from #GtkSourceGutter. Implementations can override the default signal
         * handler or can connect to the signal externally.
         * @param iter a #GtkTextIter.
         * @param area a #GdkRectangle.
         * @param x The x position of the tooltip.
         * @param y The y position of the tooltip.
         * @param tooltip a #GtkTooltip.
         * @returns %TRUE if the tooltip has been set, %FALSE otherwise
         */
        query_tooltip(iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip): boolean;
        /**
         * Emits the #GtkSourceGutterRenderer::queue-draw signal of the renderer. Call
         * this from an implementation to inform that the renderer has changed such that
         * it needs to redraw.
         */
        queue_draw(): void;
        /**
         * Set the alignment of the gutter renderer. Both `xalign` and `yalign` can be
         * -1, which means the values will not be changed (this allows changing only
         * one of the values).
         *
         * `xalign` is the horizontal alignment. Set to 0 for a left alignment. 1 for a
         * right alignment. And 0.5 for centering the cells. `yalign` is the vertical
         * alignment. Set to 0 for a top alignment. 1 for a bottom alignment.
         * @param xalign the x-alignment
         * @param yalign the y-alignment
         */
        set_alignment(xalign: number, yalign: number): void;
        /**
         * Set the alignment mode. The alignment mode describes the manner in which the
         * renderer is aligned (see :xalign and :yalign).
         * @param mode a #GtkSourceGutterRendererAlignmentMode
         */
        set_alignment_mode(mode: GutterRendererAlignmentMode): void;
        /**
         * Set the background color of the renderer. If `color` is set to %NULL, the
         * renderer will not have a background color.
         * @param color a #GdkRGBA or %NULL
         */
        set_background(color?: Gdk.RGBA | null): void;
        /**
         * Set the padding of the gutter renderer. Both `xpad` and `ypad` can be
         * -1, which means the values will not be changed (this allows changing only
         * one of the values).
         *
         * `xpad` is the left and right padding. `ypad` is the top and bottom padding.
         * @param xpad the x-padding
         * @param ypad the y-padding
         */
        set_padding(xpad: number, ypad: number): void;
        /**
         * Sets the size of the renderer. A value of -1 specifies that the size
         * is to be determined dynamically.
         * @param size the size
         */
        set_size(size: number): void;
        /**
         * Set whether the gutter renderer is visible.
         * @param visible the visibility
         */
        set_visible(visible: boolean): void;
    }

    module GutterRendererPixbuf {
        // Constructor properties interface
    }

    class GutterRendererPixbuf extends GutterRenderer {
        // Own properties of GtkSource-4.GutterRendererPixbuf

        gicon: Gio.Icon;
        icon_name: string;
        iconName: string;
        pixbuf: GdkPixbuf.Pixbuf;

        // Constructors of GtkSource-4.GutterRendererPixbuf

        static ['new'](): GutterRendererPixbuf;

        // Owm methods of GtkSource-4.GutterRendererPixbuf

        /**
         * Get the gicon of the renderer
         * @returns a #GIcon
         */
        get_gicon(): Gio.Icon;
        get_icon_name(): string;
        /**
         * Get the pixbuf of the renderer.
         * @returns a #GdkPixbuf
         */
        get_pixbuf(): GdkPixbuf.Pixbuf;
        set_gicon(icon?: Gio.Icon | null): void;
        set_icon_name(icon_name?: string | null): void;
        set_pixbuf(pixbuf?: GdkPixbuf.Pixbuf | null): void;
    }

    module GutterRendererText {
        // Constructor properties interface
    }

    class GutterRendererText extends GutterRenderer {
        // Own properties of GtkSource-4.GutterRendererText

        markup: string;
        text: string;

        // Constructors of GtkSource-4.GutterRendererText

        static ['new'](): GutterRendererText;

        // Owm methods of GtkSource-4.GutterRendererText

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

    module Language {
        // Constructor properties interface
    }

    class Language extends GObject.Object {
        // Own properties of GtkSource-4.Language

        readonly hidden: boolean;
        readonly id: string;
        readonly name: string;
        readonly section: string;

        // Owm methods of GtkSource-4.Language

        /**
         * Returns the globs associated to this language. This is just
         * an utility wrapper around gtk_source_language_get_metadata() to
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
         * Returns the ID of the language. The ID is not locale-dependent.
         * The returned string is owned by `language` and should not be freed
         * or modified.
         * @returns the ID of @language.
         */
        get_id(): string;
        get_metadata(name: string): string | null;
        /**
         * Returns the mime types associated to this language. This is just
         * an utility wrapper around gtk_source_language_get_metadata() to
         * retrieve the "mimetypes" metadata property and split it into an
         * array.
         * @returns a newly-allocated %NULL terminated array containing the mime types or %NULL if no mime types are found. The returned array must be freed with g_strfreev().
         */
        get_mime_types(): string[] | null;
        /**
         * Returns the localized name of the language.
         * The returned string is owned by `language` and should not be freed
         * or modified.
         * @returns the name of @language.
         */
        get_name(): string;
        /**
         * Returns the localized section of the language.
         * Each language belong to a section (ex. HTML belogs to the
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

    class LanguageManager extends GObject.Object {
        // Own properties of GtkSource-4.LanguageManager

        readonly language_ids: string[];
        readonly languageIds: string[];
        search_path: string[];
        searchPath: string[];

        // Constructors of GtkSource-4.LanguageManager

        static ['new'](): LanguageManager;

        // Owm methods of GtkSource-4.LanguageManager

        /**
         * Returns the default #GtkSourceLanguageManager instance.
         */
        static get_default(): LanguageManager;

        // Owm methods of GtkSource-4.LanguageManager

        /**
         * Gets the #GtkSourceLanguage identified by the given `id` in the language
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
         * @returns %NULL-terminated array containg a list of language files directories. The array is owned by @lm and must not be modified.
         */
        get_search_path(): string[];
        /**
         * Picks a #GtkSourceLanguage for given file name and content type,
         * according to the information in lang files. Either `filename` or
         * `content_type` may be %NULL. This function can be used as follows:
         *
         * <informalexample><programlisting>
         *   GtkSourceLanguage *lang;
         *   lang = gtk_source_language_manager_guess_language (filename, NULL);
         *   gtk_source_buffer_set_language (buffer, lang);
         * </programlisting></informalexample>
         *
         * or
         *
         * <informalexample><programlisting>
         *   GtkSourceLanguage *lang = NULL;
         *   gboolean result_uncertain;
         *   gchar *content_type;
         *
         *   content_type = g_content_type_guess (filename, NULL, 0, &result_uncertain);
         *   if (result_uncertain)
         *     {
         *       g_free (content_type);
         *       content_type = NULL;
         *     }
         *
         *   lang = gtk_source_language_manager_guess_language (manager, filename, content_type);
         *   gtk_source_buffer_set_language (buffer, lang);
         *
         *   g_free (content_type);
         * </programlisting></informalexample>
         *
         * etc. Use gtk_source_language_get_mime_types() and gtk_source_language_get_globs()
         * if you need full control over file -> language mapping.
         * @param filename a filename in Glib filename encoding, or %NULL.
         * @param content_type a content type (as in GIO API), or %NULL.
         * @returns a #GtkSourceLanguage, or %NULL if there is no suitable language for given @filename and/or @content_type. Return value is owned by @lm and should not be freed.
         */
        guess_language(filename?: string | null, content_type?: string | null): Language | null;
        /**
         * Sets the list of directories where the `lm` looks for
         * language files.
         * If `dirs` is %NULL, the search path is reset to default.
         *
         * <note>
         *   <para>
         *     At the moment this function can be called only before the
         *     language files are loaded for the first time. In practice
         *     to set a custom search path for a #GtkSourceLanguageManager,
         *     you have to call this function right after creating it.
         *   </para>
         * </note>
         * @param dirs a %NULL-terminated array of strings or %NULL.
         */
        set_search_path(dirs?: string[] | null): void;
    }

    module Map {
        // Constructor properties interface
    }

    class Map extends View {
        // Own properties of GtkSource-4.Map

        font_desc: Pango.FontDescription;
        fontDesc: Pango.FontDescription;
        view: View;

        // Constructors of GtkSource-4.Map

        static ['new'](): Map;

        // Owm methods of GtkSource-4.Map

        /**
         * Gets the #GtkSourceMap:view property, which is the view this widget is mapping.
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

    class Mark extends Gtk.TextMark {
        // Own properties of GtkSource-4.Mark

        /**
         * The category of the #GtkSourceMark, classifies the mark and controls
         * which pixbuf is used and with which priority it is drawn.
         */
        category: string;

        // Constructors of GtkSource-4.Mark

        static ['new'](name: string | null, category: string): Mark;

        // Owm methods of GtkSource-4.Mark

        /**
         * Returns the mark category.
         * @returns the category of the #GtkSourceMark.
         */
        get_category(): string;
        /**
         * Returns the next #GtkSourceMark in the buffer or %NULL if the mark
         * was not added to a buffer. If there is no next mark, %NULL will be returned.
         *
         * If `category` is %NULL, looks for marks of any category.
         * @param category a string specifying the mark category, or %NULL.
         * @returns the next #GtkSourceMark, or %NULL.
         */
        next(category?: string | null): Mark | null;
        /**
         * Returns the previous #GtkSourceMark in the buffer or %NULL if the mark
         * was not added to a buffer. If there is no previous mark, %NULL is returned.
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

    class MarkAttributes extends GObject.Object {
        // Own properties of GtkSource-4.MarkAttributes

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

        // Constructors of GtkSource-4.MarkAttributes

        static ['new'](): MarkAttributes;

        // Owm methods of GtkSource-4.MarkAttributes

        /**
         * Stores background color in `background`.
         * @returns whether background color for @attributes was set.
         */
        get_background(): boolean;
        /**
         * Gets a #GIcon to be used as a base for rendered icon. Note that the icon can
         * be %NULL if it wasn't set earlier.
         * @returns An icon. The icon belongs to @attributes and should not be unreffed.
         */
        get_gicon(): Gio.Icon;
        /**
         * Gets a name of an icon to be used as a base for rendered icon. Note that the
         * icon name can be %NULL if it wasn't set earlier.
         * @returns An icon name. The string belongs to @attributes and should not be freed.
         */
        get_icon_name(): string;
        /**
         * Gets a #GdkPixbuf to be used as a base for rendered icon. Note that the
         * pixbuf can be %NULL if it wasn't set earlier.
         * @returns A pixbuf. The pixbuf belongs to @attributes and should not be unreffed.
         */
        get_pixbuf(): GdkPixbuf.Pixbuf;
        /**
         * Queries for a tooltip by emitting
         * a #GtkSourceMarkAttributes::query-tooltip-markup signal. The tooltip may contain
         * a markup.
         * @param mark a #GtkSourceMark.
         * @returns A tooltip. The returned string should be freed by using g_free() when done with it.
         */
        get_tooltip_markup(mark: Mark): string;
        /**
         * Queries for a tooltip by emitting
         * a #GtkSourceMarkAttributes::query-tooltip-text signal. The tooltip is a plain
         * text.
         * @param mark a #GtkSourceMark.
         * @returns A tooltip. The returned string should be freed by using g_free() when done with it.
         */
        get_tooltip_text(mark: Mark): string;
        /**
         * Renders an icon of given size. The base of the icon is set by the last call
         * to one of: gtk_source_mark_attributes_set_pixbuf(),
         * gtk_source_mark_attributes_set_gicon() or
         * gtk_source_mark_attributes_set_icon_name(). `size` cannot be lower than 1.
         * @param widget widget of which style settings may be used.
         * @param size size of the rendered icon.
         * @returns A rendered pixbuf. The pixbuf belongs to @attributes and should not be unreffed.
         */
        render_icon(widget: Gtk.Widget, size: number): GdkPixbuf.Pixbuf;
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

    class PrintCompositor extends GObject.Object {
        // Own properties of GtkSource-4.PrintCompositor

        /**
         * Name of the font used for the text body.
         *
         * Accepted values are strings representing a font description Pango can understand.
         * (e.g. &quot;Monospace 10&quot;). See pango_font_description_from_string()
         * for a description of the format of the string representation.
         *
         * The value of this property cannot be changed anymore after the first
         * call to the gtk_source_print_compositor_paginate() function.
         */
        body_font_name: string;
        /**
         * Name of the font used for the text body.
         *
         * Accepted values are strings representing a font description Pango can understand.
         * (e.g. &quot;Monospace 10&quot;). See pango_font_description_from_string()
         * for a description of the format of the string representation.
         *
         * The value of this property cannot be changed anymore after the first
         * call to the gtk_source_print_compositor_paginate() function.
         */
        bodyFontName: string;
        /**
         * The GtkSourceBuffer object to print.
         */
        buffer: Buffer;
        /**
         * Name of the font used to print page footer.
         * If this property is unspecified, the text body font is used.
         *
         * Accepted values are strings representing a font description Pango can understand.
         * (e.g. &quot;Monospace 10&quot;). See pango_font_description_from_string()
         * for a description of the format of the string representation.
         *
         * The value of this property cannot be changed anymore after the first
         * call to the gtk_source_print_compositor_paginate() function.
         */
        footer_font_name: string;
        /**
         * Name of the font used to print page footer.
         * If this property is unspecified, the text body font is used.
         *
         * Accepted values are strings representing a font description Pango can understand.
         * (e.g. &quot;Monospace 10&quot;). See pango_font_description_from_string()
         * for a description of the format of the string representation.
         *
         * The value of this property cannot be changed anymore after the first
         * call to the gtk_source_print_compositor_paginate() function.
         */
        footerFontName: string;
        /**
         * Name of the font used to print page header.
         * If this property is unspecified, the text body font is used.
         *
         * Accepted values are strings representing a font description Pango can understand.
         * (e.g. &quot;Monospace 10&quot;). See pango_font_description_from_string()
         * for a description of the format of the string representation.
         *
         * The value of this property cannot be changed anymore after the first
         * call to the gtk_source_print_compositor_paginate() function.
         */
        header_font_name: string;
        /**
         * Name of the font used to print page header.
         * If this property is unspecified, the text body font is used.
         *
         * Accepted values are strings representing a font description Pango can understand.
         * (e.g. &quot;Monospace 10&quot;). See pango_font_description_from_string()
         * for a description of the format of the string representation.
         *
         * The value of this property cannot be changed anymore after the first
         * call to the gtk_source_print_compositor_paginate() function.
         */
        headerFontName: string;
        /**
         * Whether to print the document with highlighted syntax.
         *
         * The value of this property cannot be changed anymore after the first
         * call to the gtk_source_print_compositor_paginate() function.
         */
        highlight_syntax: boolean;
        /**
         * Whether to print the document with highlighted syntax.
         *
         * The value of this property cannot be changed anymore after the first
         * call to the gtk_source_print_compositor_paginate() function.
         */
        highlightSyntax: boolean;
        /**
         * Name of the font used to print line numbers on the left margin.
         * If this property is unspecified, the text body font is used.
         *
         * Accepted values are strings representing a font description Pango can understand.
         * (e.g. &quot;Monospace 10&quot;). See pango_font_description_from_string()
         * for a description of the format of the string representation.
         *
         * The value of this property cannot be changed anymore after the first
         * call to the gtk_source_print_compositor_paginate() function.
         */
        line_numbers_font_name: string;
        /**
         * Name of the font used to print line numbers on the left margin.
         * If this property is unspecified, the text body font is used.
         *
         * Accepted values are strings representing a font description Pango can understand.
         * (e.g. &quot;Monospace 10&quot;). See pango_font_description_from_string()
         * for a description of the format of the string representation.
         *
         * The value of this property cannot be changed anymore after the first
         * call to the gtk_source_print_compositor_paginate() function.
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
         * call to the gtk_source_print_compositor_paginate() function.
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
         * call to the gtk_source_print_compositor_paginate() function.
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
         * call to the gtk_source_print_compositor_paginate() function.
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
         * call to the gtk_source_print_compositor_paginate() function.
         */
        printHeader: boolean;
        /**
         * Interval of printed line numbers. If this property is set to 0 no
         * numbers will be printed.  If greater than 0, a number will be
         * printed every "print-line-numbers" lines (i.e. 1 will print all line numbers).
         *
         * The value of this property cannot be changed anymore after the first
         * call to the gtk_source_print_compositor_paginate() function.
         */
        print_line_numbers: number;
        /**
         * Interval of printed line numbers. If this property is set to 0 no
         * numbers will be printed.  If greater than 0, a number will be
         * printed every "print-line-numbers" lines (i.e. 1 will print all line numbers).
         *
         * The value of this property cannot be changed anymore after the first
         * call to the gtk_source_print_compositor_paginate() function.
         */
        printLineNumbers: number;
        /**
         * Width of a tab character expressed in spaces.
         *
         * The value of this property cannot be changed anymore after the first
         * call to the gtk_source_print_compositor_paginate() function.
         */
        tab_width: number;
        /**
         * Width of a tab character expressed in spaces.
         *
         * The value of this property cannot be changed anymore after the first
         * call to the gtk_source_print_compositor_paginate() function.
         */
        tabWidth: number;
        /**
         * Whether to wrap lines never, at word boundaries, or at character boundaries.
         *
         * The value of this property cannot be changed anymore after the first
         * call to the gtk_source_print_compositor_paginate() function.
         */
        wrap_mode: Gtk.WrapMode;
        /**
         * Whether to wrap lines never, at word boundaries, or at character boundaries.
         *
         * The value of this property cannot be changed anymore after the first
         * call to the gtk_source_print_compositor_paginate() function.
         */
        wrapMode: Gtk.WrapMode;

        // Constructors of GtkSource-4.PrintCompositor

        static ['new'](buffer: Buffer): PrintCompositor;

        static new_from_view(view: View): PrintCompositor;

        // Owm methods of GtkSource-4.PrintCompositor

        /**
         * Draw page `page_nr` for printing on the the Cairo context encapsuled in `context`.
         *
         * This method has been designed to be called in the handler of the #GtkPrintOperation::draw_page signal
         * as shown in the following example:
         *
         * <informalexample><programlisting>
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
         * </programlisting></informalexample>
         * @param context the #GtkPrintContext encapsulating the context information that is required when           drawing the page for printing.
         * @param page_nr the number of the page to print.
         */
        draw_page(context: Gtk.PrintContext, page_nr: number): void;
        /**
         * Returns the name of the font used to print the text body. The returned string
         * must be freed with g_free().
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
         * Gets the #GtkSourceBuffer associated with the compositor. The returned
         * object reference is owned by the compositor object and
         * should not be unreferenced.
         * @returns the #GtkSourceBuffer associated with the compositor.
         */
        get_buffer(): Buffer;
        /**
         * Returns the name of the font used to print the page footer.
         * The returned string must be freed with g_free().
         * @returns a new string containing the name of the font used to print the page footer.
         */
        get_footer_font_name(): string;
        /**
         * Returns the name of the font used to print the page header.
         * The returned string must be freed with g_free().
         * @returns a new string containing the name of the font used to print the page header.
         */
        get_header_font_name(): string;
        /**
         * Determines whether the printed text will be highlighted according to the
         * buffer rules.  Note that highlighting will happen
         * only if the buffer to print has highlighting activated.
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
         * Determines if a footer is set to be printed for each page.  A
         * footer will be printed if this function returns %TRUE
         * <emphasis>and</emphasis> some format strings have been specified
         * with gtk_source_print_compositor_set_footer_format().
         * @returns %TRUE if the footer is set to be printed.
         */
        get_print_footer(): boolean;
        /**
         * Determines if a header is set to be printed for each page.  A
         * header will be printed if this function returns %TRUE
         * <emphasis>and</emphasis> some format strings have been specified
         * with gtk_source_print_compositor_set_header_format().
         * @returns %TRUE if the header is set to be printed.
         */
        get_print_header(): boolean;
        /**
         * Returns the interval used for line number printing.  If the
         * value is 0, no line numbers will be printed.  The default value is
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
         * Paginate the document associated with the `compositor`.
         *
         * In order to support non-blocking pagination, document is paginated in small chunks.
         * Each time gtk_source_print_compositor_paginate() is invoked, a chunk of the document
         * is paginated. To paginate the entire document, gtk_source_print_compositor_paginate()
         * must be invoked multiple times.
         * It returns %TRUE if the document has been completely paginated, otherwise it returns %FALSE.
         *
         * This method has been designed to be invoked in the handler of the #GtkPrintOperation::paginate signal,
         * as shown in the following example:
         *
         * <informalexample><programlisting>
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
         * </programlisting></informalexample>
         *
         * If you don't need to do pagination in chunks, you can simply do it all in the
         * #GtkPrintOperation::begin-print handler, and set the number of pages from there, like
         * in the following example:
         *
         * <informalexample><programlisting>
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
         * </programlisting></informalexample>
         * @param context the #GtkPrintContext whose parameters (e.g. paper size, print margins, etc.) are used by the the @compositor to paginate the document.
         * @returns %TRUE if the document has been completely paginated, %FALSE otherwise.
         */
        paginate(context: Gtk.PrintContext): boolean;
        /**
         * Sets the default font for the printed text.
         *
         * `font_name` should be a
         * string representation of a font description Pango can understand.
         * (e.g. &quot;Monospace 10&quot;). See pango_font_description_from_string()
         * for a description of the format of the string representation.
         *
         * This function cannot be called anymore after the first call to the
         * gtk_source_print_compositor_paginate() function.
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
         * Sets the font for printing the page footer. If
         * %NULL is supplied, the default font (i.e. the one being used for the
         * text) will be used instead.
         *
         * `font_name` should be a
         * string representation of a font description Pango can understand.
         * (e.g. &quot;Monospace 10&quot;). See pango_font_description_from_string()
         * for a description of the format of the string representation.
         *
         * This function cannot be called anymore after the first call to the
         * gtk_source_print_compositor_paginate() function.
         * @param font_name the name of the font for the footer text, or %NULL.
         */
        set_footer_font_name(font_name?: string | null): void;
        /**
         * See gtk_source_print_compositor_set_header_format() for more information
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
         * Sets the font for printing the page header. If
         * %NULL is supplied, the default font (i.e. the one being used for the
         * text) will be used instead.
         *
         * `font_name` should be a
         * string representation of a font description Pango can understand.
         * (e.g. &quot;Monospace 10&quot;). See pango_font_description_from_string()
         * for a description of the format of the string representation.
         *
         * This function cannot be called anymore after the first call to the
         * gtk_source_print_compositor_paginate() function.
         * @param font_name the name of the font for header text, or %NULL.
         */
        set_header_font_name(font_name?: string | null): void;
        /**
         * Sets strftime like header format strings, to be printed on the
         * left, center and right of the top of each page.  The strings may
         * include strftime(3) codes which will be expanded at print time.
         * A subset of strftime() codes are accepted, see g_date_time_format()
         * for more details on the accepted format specifiers.
         * Additionally the following format specifiers are accepted:
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
         * printing with gtk_source_print_compositor_set_print_header().
         *
         * This function cannot be called anymore after the first call to the
         * gtk_source_print_compositor_paginate() function.
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
         * gtk_source_print_compositor_paginate() function.
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
         * Sets the font for printing line numbers on the left margin.  If
         * %NULL is supplied, the default font (i.e. the one being used for the
         * text) will be used instead.
         *
         * `font_name` should be a
         * string representation of a font description Pango can understand.
         * (e.g. &quot;Monospace 10&quot;). See pango_font_description_from_string()
         * for a description of the format of the string representation.
         *
         * This function cannot be called anymore after the first call to the
         * gtk_source_print_compositor_paginate() function.
         * @param font_name the name of the font for line numbers, or %NULL.
         */
        set_line_numbers_font_name(font_name?: string | null): void;
        /**
         * Sets whether you want to print a footer in each page.  The
         * footer consists of three pieces of text and an optional line
         * separator, configurable with
         * gtk_source_print_compositor_set_footer_format().
         *
         * Note that by default the footer format is unspecified, and if it's
         * empty it will not be printed, regardless of this setting.
         *
         * This function cannot be called anymore after the first call to the
         * gtk_source_print_compositor_paginate() function.
         * @param print %TRUE if you want the footer to be printed.
         */
        set_print_footer(print: boolean): void;
        /**
         * Sets whether you want to print a header in each page.  The
         * header consists of three pieces of text and an optional line
         * separator, configurable with
         * gtk_source_print_compositor_set_header_format().
         *
         * Note that by default the header format is unspecified, and if it's
         * empty it will not be printed, regardless of this setting.
         *
         * This function cannot be called anymore after the first call to the
         * gtk_source_print_compositor_paginate() function.
         * @param print %TRUE if you want the header to be printed.
         */
        set_print_header(print: boolean): void;
        /**
         * Sets the interval for printed line numbers.  If `interval` is 0 no
         * numbers will be printed.  If greater than 0, a number will be
         * printed every `interval` lines (i.e. 1 will print all line numbers).
         *
         * Maximum accepted value for `interval` is 100.
         *
         * This function cannot be called anymore after the first call to the
         * gtk_source_print_compositor_paginate() function.
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
         * gtk_source_print_compositor_paginate() function.
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
         * gtk_source_print_compositor_paginate() function.
         * @param wrap_mode a #GtkWrapMode.
         */
        set_wrap_mode(wrap_mode: Gtk.WrapMode): void;
    }

    module Region {
        // Constructor properties interface
    }

    class Region extends GObject.Object {
        // Own properties of GtkSource-4.Region

        /**
         * The #GtkTextBuffer. The #GtkSourceRegion has a weak reference to the
         * buffer.
         */
        buffer: Gtk.TextBuffer;

        // Constructors of GtkSource-4.Region

        static ['new'](buffer: Gtk.TextBuffer): Region;

        // Owm methods of GtkSource-4.Region

        /**
         * Adds `region_to_add` to `region`. `region_to_add` is not modified.
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
         * Initializes a #GtkSourceRegionIter to the first subregion of `region`. If
         * `region` is empty, `iter` will be initialized to the end iterator.
         */
        get_start_region_iter(): void;
        /**
         * Returns the intersection between `region1` and `region2`. `region1` and
         * `region2` are not modified.
         * @param region2 a #GtkSourceRegion, or %NULL.
         * @returns the intersection as a #GtkSourceRegion   object.
         */
        intersect_region(region2?: Region | null): Region | null;
        /**
         * Returns the intersection between `region` and the subregion delimited by
         * `_start` and `_end`. `region` is not modified.
         * @param _start the start of the subregion.
         * @param _end the end of the subregion.
         * @returns the intersection as a new   #GtkSourceRegion.
         */
        intersect_subregion(_start: Gtk.TextIter, _end: Gtk.TextIter): Region | null;
        /**
         * Returns whether the `region` is empty. A %NULL `region` is considered empty.
         * @returns whether the @region is empty.
         */
        is_empty(): boolean;
        /**
         * Subtracts `region_to_subtract` from `region`. `region_to_subtract` is not
         * modified.
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

    class SearchContext extends GObject.Object {
        // Own properties of GtkSource-4.SearchContext

        /**
         * The #GtkSourceBuffer associated to the search context.
         */
        buffer: Buffer;
        /**
         * Highlight the search occurrences.
         */
        highlight: boolean;
        /**
         * A #GtkSourceStyle, or %NULL for theme's scheme default style.
         */
        match_style: Style;
        /**
         * A #GtkSourceStyle, or %NULL for theme's scheme default style.
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
         * Free with g_error_free().
         */
        readonly regex_error: any;
        /**
         * If the regex search pattern doesn't follow all the rules, this
         * #GError property will be set. If the pattern is valid, the value is
         * %NULL.
         *
         * Free with g_error_free().
         */
        readonly regexError: any;
        /**
         * The #GtkSourceSearchSettings associated to the search context.
         *
         * This property is construct-only since version 4.0.
         */
        settings: SearchSettings;

        // Constructors of GtkSource-4.SearchContext

        static ['new'](buffer: Buffer, settings?: SearchSettings | null): SearchContext;

        // Owm methods of GtkSource-4.SearchContext

        /**
         * Synchronous backward search. It is recommended to use the asynchronous
         * functions instead, to not block the user interface. However, if you are sure
         * that the `buffer` is small, this function is more convenient to use.
         *
         * If the #GtkSourceSearchSettings:wrap-around property is %FALSE, this function
         * doesn't try to wrap around.
         *
         * The `has_wrapped_around` out parameter is set independently of whether a match
         * is found. So if this function returns %FALSE, `has_wrapped_around` will have
         * the same value as the #GtkSourceSearchSettings:wrap-around property.
         * @param iter start of search.
         * @returns whether a match was found.
         */
        backward(iter: Gtk.TextIter): boolean;
        /**
         * The asynchronous version of gtk_source_search_context_backward().
         *
         * See the documentation of gtk_source_search_context_backward() for more
         * details.
         *
         * See the #GAsyncResult documentation to know how to use this function.
         *
         * If the operation is cancelled, the `callback` will only be called if
         * `cancellable` was not %NULL. gtk_source_search_context_backward_async() takes
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
         * gtk_source_search_context_backward_async().
         *
         * See the documentation of gtk_source_search_context_backward() for more
         * details.
         * @param result a #GAsyncResult.
         * @returns whether a match was found.
         */
        backward_finish(result: Gio.AsyncResult): boolean;
        /**
         * Synchronous forward search. It is recommended to use the asynchronous
         * functions instead, to not block the user interface. However, if you are sure
         * that the `buffer` is small, this function is more convenient to use.
         *
         * If the #GtkSourceSearchSettings:wrap-around property is %FALSE, this function
         * doesn't try to wrap around.
         *
         * The `has_wrapped_around` out parameter is set independently of whether a match
         * is found. So if this function returns %FALSE, `has_wrapped_around` will have
         * the same value as the #GtkSourceSearchSettings:wrap-around property.
         * @param iter start of search.
         * @returns whether a match was found.
         */
        forward(iter: Gtk.TextIter): boolean;
        /**
         * The asynchronous version of gtk_source_search_context_forward().
         *
         * See the documentation of gtk_source_search_context_forward() for more
         * details.
         *
         * See the #GAsyncResult documentation to know how to use this function.
         *
         * If the operation is cancelled, the `callback` will only be called if
         * `cancellable` was not %NULL. gtk_source_search_context_forward_async() takes
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
         * Finishes a forward search started with
         * gtk_source_search_context_forward_async().
         *
         * See the documentation of gtk_source_search_context_forward() for more
         * details.
         * @param result a #GAsyncResult.
         * @returns whether a match was found.
         */
        forward_finish(result: Gio.AsyncResult): boolean;
        get_buffer(): Buffer;
        get_highlight(): boolean;
        get_match_style(): Style;
        /**
         * Gets the position of a search occurrence. If the buffer is not already fully
         * scanned, the position may be unknown, and -1 is returned. If 0 is returned,
         * it means that this part of the buffer has already been scanned, and that
         * `match_start` and `match_end` don't delimit an occurrence.
         * @param match_start the start of the occurrence.
         * @param match_end the end of the occurrence.
         * @returns the position of the search occurrence. The first occurrence has the position 1 (not 0). Returns 0 if @match_start and @match_end don't delimit an occurrence. Returns -1 if the position is not yet known.
         */
        get_occurrence_position(match_start: Gtk.TextIter, match_end: Gtk.TextIter): number;
        /**
         * Gets the total number of search occurrences. If the buffer is not already
         * fully scanned, the total number of occurrences is unknown, and -1 is
         * returned.
         * @returns the total number of search occurrences, or -1 if unknown.
         */
        get_occurrences_count(): number;
        /**
         * Regular expression patterns must follow certain rules. If
         * #GtkSourceSearchSettings:search-text breaks a rule, the error can be retrieved
         * with this function. The error domain is #G_REGEX_ERROR.
         *
         * Free the return value with g_error_free().
         * @returns the #GError, or %NULL if the pattern is valid.
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
         * calling g_regex_check_replacement(). The `replace` text can contain
         * backreferences; read the g_regex_replace() documentation for more details.
         * @param match_start the start of the match to replace.
         * @param match_end the end of the match to replace.
         * @param replace the replacement text.
         * @param replace_length the length of @replace in bytes, or -1.
         * @returns whether the match has been replaced.
         */
        replace(match_start: Gtk.TextIter, match_end: Gtk.TextIter, replace: string, replace_length: number): boolean;
        /**
         * Replaces all search matches by another text. It is a synchronous function, so
         * it can block the user interface.
         *
         * For a regular expression replacement, you can check if `replace` is valid by
         * calling g_regex_check_replacement(). The `replace` text can contain
         * backreferences; read the g_regex_replace() documentation for more details.
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
         * Set the style to apply on search matches. If `match_style` is %NULL, default
         * theme's scheme 'match-style' will be used.
         * To enable or disable the search highlighting, use
         * gtk_source_search_context_set_highlight().
         * @param match_style a #GtkSourceStyle, or %NULL.
         */
        set_match_style(match_style?: Style | null): void;
    }

    module SearchSettings {
        // Constructor properties interface
    }

    class SearchSettings extends GObject.Object {
        // Own properties of GtkSource-4.SearchSettings

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
         * #GtkSourceSearchSettings:search-text as the pattern.
         */
        regex_enabled: boolean;
        /**
         * Search by regular expressions with
         * #GtkSourceSearchSettings:search-text as the pattern.
         */
        regexEnabled: boolean;
        /**
         * A search string, or %NULL if the search is disabled. If the regular
         * expression search is enabled, #GtkSourceSearchSettings:search-text is
         * the pattern.
         */
        search_text: string;
        /**
         * A search string, or %NULL if the search is disabled. If the regular
         * expression search is enabled, #GtkSourceSearchSettings:search-text is
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

        // Constructors of GtkSource-4.SearchSettings

        static ['new'](): SearchSettings;

        // Owm methods of GtkSource-4.SearchSettings

        get_at_word_boundaries(): boolean;
        get_case_sensitive(): boolean;
        get_regex_enabled(): boolean;
        /**
         * Gets the text to search. The return value must not be freed.
         *
         * You may be interested to call gtk_source_utils_escape_search_text() after
         * this function.
         * @returns the text to search, or %NULL if the search is disabled.
         */
        get_search_text(): string | null;
        get_wrap_around(): boolean;
        /**
         * Change whether the search is done at word boundaries. If `at_word_boundaries`
         * is %TRUE, a search match must start and end a word. The match can span
         * multiple words. See also gtk_text_iter_starts_word() and
         * gtk_text_iter_ends_word().
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
         * If enabled, the #GtkSourceSearchSettings:search-text property contains the
         * pattern of the regular expression.
         *
         * #GtkSourceSearchContext uses #GRegex when regex search is enabled. See the
         * [Regular expression syntax](https://developer.gnome.org/glib/stable/glib-regex-syntax.html)
         * page in the GLib reference manual.
         * @param regex_enabled the setting.
         */
        set_regex_enabled(regex_enabled: boolean): void;
        /**
         * Sets the text to search. If `search_text` is %NULL or is empty, the search
         * will be disabled. A copy of `search_text` will be made, so you can safely free
         * `search_text` after a call to this function.
         *
         * You may be interested to call gtk_source_utils_unescape_search_text() before
         * this function.
         * @param search_text the nul-terminated text to search, or %NULL to disable the search.
         */
        set_search_text(search_text?: string | null): void;
        /**
         * Enables or disables the wrap around search. If `wrap_around` is %TRUE, the
         * forward search continues at the beginning of the buffer if no search
         * occurrences are found. Similarly, the backward search continues to search at
         * the end of the buffer.
         * @param wrap_around the setting.
         */
        set_wrap_around(wrap_around: boolean): void;
    }

    module SpaceDrawer {
        // Constructor properties interface
    }

    class SpaceDrawer extends GObject.Object {
        // Own properties of GtkSource-4.SpaceDrawer

        /**
         * Whether the #GtkSourceSpaceDrawer:matrix property is enabled.
         */
        enable_matrix: boolean;
        /**
         * Whether the #GtkSourceSpaceDrawer:matrix property is enabled.
         */
        enableMatrix: boolean;
        /**
         * The :matrix property is a #GVariant property to specify where and
         * what kind of white spaces to draw.
         *
         * The #GVariant is of type `"au"`, an array of unsigned integers. Each
         * integer is a combination of #GtkSourceSpaceTypeFlags. There is one
         * integer for each #GtkSourceSpaceLocationFlags, in the same order as
         * they are defined in the enum (%GTK_SOURCE_SPACE_LOCATION_NONE and
         * %GTK_SOURCE_SPACE_LOCATION_ALL are not taken into account).
         *
         * If the array is shorter than the number of locations, then the value
         * for the missing locations will be %GTK_SOURCE_SPACE_TYPE_NONE.
         *
         * By default, %GTK_SOURCE_SPACE_TYPE_ALL is set for all locations.
         */
        matrix: GLib.Variant;

        // Constructors of GtkSource-4.SpaceDrawer

        static ['new'](): SpaceDrawer;

        // Owm methods of GtkSource-4.SpaceDrawer

        /**
         * Binds the #GtkSourceSpaceDrawer:matrix property to a #GSettings key.
         *
         * The #GSettings key must be of the same type as the
         * #GtkSourceSpaceDrawer:matrix property, that is, `"au"`.
         *
         * The g_settings_bind() function cannot be used, because the default GIO
         * mapping functions don't support #GVariant properties (maybe it will be
         * supported by a future GIO version, in which case this function can be
         * deprecated).
         * @param settings a #GSettings object.
         * @param key the @settings key to bind.
         * @param flags flags for the binding.
         */
        bind_matrix_setting(settings: Gio.Settings, key: string, flags: Gio.SettingsBindFlags): void;
        get_enable_matrix(): boolean;
        /**
         * Gets the value of the #GtkSourceSpaceDrawer:matrix property, as a #GVariant.
         * An empty array can be returned in case the matrix is a zero matrix.
         *
         * The gtk_source_space_drawer_get_types_for_locations() function may be more
         * convenient to use.
         * @returns the #GtkSourceSpaceDrawer:matrix value as a new floating #GVariant   instance.
         */
        get_matrix(): GLib.Variant;
        /**
         * If only one location is specified, this function returns what kind of
         * white spaces are drawn at that location. The value is retrieved from the
         * #GtkSourceSpaceDrawer:matrix property.
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
         * Sets whether the #GtkSourceSpaceDrawer:matrix property is enabled.
         * @param enable_matrix the new value.
         */
        set_enable_matrix(enable_matrix: boolean): void;
        /**
         * Sets a new value to the #GtkSourceSpaceDrawer:matrix property, as a
         * #GVariant. If `matrix` is %NULL, then an empty array is set.
         *
         * If `matrix` is floating, it is consumed.
         *
         * The gtk_source_space_drawer_set_types_for_locations() function may be more
         * convenient to use.
         * @param matrix the new matrix value, or %NULL.
         */
        set_matrix(matrix?: GLib.Variant | null): void;
        /**
         * Modifies the #GtkSourceSpaceDrawer:matrix property at the specified
         * `locations`.
         * @param locations one or several #GtkSourceSpaceLocationFlags.
         * @param types a combination of #GtkSourceSpaceTypeFlags.
         */
        set_types_for_locations(locations: SpaceLocationFlags, types: SpaceTypeFlags): void;
    }

    module Style {
        // Constructor properties interface
    }

    class Style extends GObject.Object {
        // Own properties of GtkSource-4.Style

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

        // Owm methods of GtkSource-4.Style

        /**
         * This function modifies the #GtkTextTag properties that are related to the
         * #GtkSourceStyle properties. Other #GtkTextTag properties are left untouched.
         *
         * If `style` is non-%NULL, applies `style` to `tag`.
         *
         * If `style` is %NULL, the related *-set properties of #GtkTextTag are set to
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

    class StyleScheme extends GObject.Object {
        // Own properties of GtkSource-4.StyleScheme

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
         * in #GtkSourceStyleSchemeManager.
         */
        id: string;
        /**
         * Style scheme name, a translatable string to present to the user.
         */
        readonly name: string;

        // Own fields of GtkSource-4.StyleScheme

        base: GObject.Object;

        // Owm methods of GtkSource-4.StyleScheme

        get_authors(): string[] | null;
        get_description(): string | null;
        get_filename(): string | null;
        get_id(): string;
        get_name(): string;
        get_style(style_id: string): Style | null;
    }

    module StyleSchemeChooserButton {
        // Constructor properties interface
    }

    class StyleSchemeChooserButton extends Gtk.Button {
        // Constructors of GtkSource-4.StyleSchemeChooserButton

        static ['new'](): StyleSchemeChooserButton;
    }

    module StyleSchemeChooserWidget {
        // Constructor properties interface
    }

    class StyleSchemeChooserWidget extends Gtk.Bin {
        // Constructors of GtkSource-4.StyleSchemeChooserWidget

        static ['new'](): StyleSchemeChooserWidget;
    }

    module StyleSchemeManager {
        // Constructor properties interface
    }

    class StyleSchemeManager extends GObject.Object {
        // Own properties of GtkSource-4.StyleSchemeManager

        readonly scheme_ids: string[];
        readonly schemeIds: string[];
        search_path: string[];
        searchPath: string[];

        // Constructors of GtkSource-4.StyleSchemeManager

        static ['new'](): StyleSchemeManager;

        // Owm methods of GtkSource-4.StyleSchemeManager

        /**
         * Returns the default #GtkSourceStyleSchemeManager instance.
         */
        static get_default(): StyleSchemeManager;

        // Owm methods of GtkSource-4.StyleSchemeManager

        /**
         * Appends `path` to the list of directories where the `manager` looks for
         * style scheme files.
         * See gtk_source_style_scheme_manager_set_search_path() for details.
         * @param path a directory or a filename.
         */
        append_search_path(path: string): void;
        /**
         * Mark any currently cached information about the available style scehems
         * as invalid. All the available style schemes will be reloaded next time
         * the `manager` is accessed.
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
         * See gtk_source_style_scheme_manager_set_search_path() for details.
         * @returns a %NULL-terminated array of string containing the search path. The array is owned by the @manager and must not be modified.
         */
        get_search_path(): string[];
        /**
         * Prepends `path` to the list of directories where the `manager` looks
         * for style scheme files.
         * See gtk_source_style_scheme_manager_set_search_path() for details.
         * @param path a directory or a filename.
         */
        prepend_search_path(path: string): void;
        /**
         * Sets the list of directories where the `manager` looks for
         * style scheme files.
         * If `path` is %NULL, the search path is reset to default.
         * @param path a %NULL-terminated array of strings or %NULL.
         */
        set_search_path(path?: string[] | null): void;
    }

    module Tag {
        // Constructor properties interface
    }

    class Tag extends Gtk.TextTag {
        // Own properties of GtkSource-4.Tag

        /**
         * Whether to draw white spaces. This property takes precedence over the value
         * defined by the GtkSourceSpaceDrawer's #GtkSourceSpaceDrawer:matrix property
         * (only where the tag is applied).
         *
         * Setting this property also changes #GtkSourceTag:draw-spaces-set to
         * %TRUE.
         */
        draw_spaces: boolean;
        /**
         * Whether to draw white spaces. This property takes precedence over the value
         * defined by the GtkSourceSpaceDrawer's #GtkSourceSpaceDrawer:matrix property
         * (only where the tag is applied).
         *
         * Setting this property also changes #GtkSourceTag:draw-spaces-set to
         * %TRUE.
         */
        drawSpaces: boolean;
        /**
         * Whether the #GtkSourceTag:draw-spaces property is set and must be
         * taken into account.
         */
        draw_spaces_set: boolean;
        /**
         * Whether the #GtkSourceTag:draw-spaces property is set and must be
         * taken into account.
         */
        drawSpacesSet: boolean;

        // Constructors of GtkSource-4.Tag

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
            (iter: Gtk.TextIter, event: Gdk.Event): void;
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

        interface Redo {
            (): void;
        }

        interface ShowCompletion {
            (): void;
        }

        interface SmartHomeEnd {
            (iter: Gtk.TextIter, count: number): void;
        }

        interface Undo {
            (): void;
        }

        // Constructor properties interface
    }

    class View extends Gtk.TextView {
        // Own properties of GtkSource-4.View

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
         * The #GtkSourceSpaceDrawer object associated with the view.
         */
        readonly space_drawer: SpaceDrawer;
        /**
         * The #GtkSourceSpaceDrawer object associated with the view.
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

        // Constructors of GtkSource-4.View

        static ['new'](): View;

        static new_with_buffer(buffer: Buffer): View;

        // Owm methods of GtkSource-4.View

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
         * Gets the #GtkSourceCompletion associated with `view`. The returned object is
         * guaranteed to be the same for the lifetime of `view`. Each #GtkSourceView
         * object has a different #GtkSourceCompletion.
         * @returns the #GtkSourceCompletion associated with @view.
         */
        get_completion(): Completion;
        /**
         * Returns the #GtkSourceGutter object associated with `window_type` for `view`.
         * Only GTK_TEXT_WINDOW_LEFT and GTK_TEXT_WINDOW_RIGHT are supported,
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
         * Returns whether when the tab key is pressed the current selection
         * should get indented instead of replaced with the \t character.
         * @returns %TRUE if the selection is indented when tab is pressed.
         */
        get_indent_on_tab(): boolean;
        /**
         * Returns the number of spaces to use for each step of indent.
         * See gtk_source_view_set_indent_width() for details.
         * @returns indent width.
         */
        get_indent_width(): number;
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
         * Returns a #GtkSourceSmartHomeEndType end value specifying
         * how the cursor will move when HOME and END keys are pressed.
         * @returns a #GtkSourceSmartHomeEndType value.
         */
        get_smart_home_end(): SmartHomeEndType;
        /**
         * Gets the #GtkSourceSpaceDrawer associated with `view`. The returned object is
         * guaranteed to be the same for the lifetime of `view`. Each #GtkSourceView
         * object has a different #GtkSourceSpaceDrawer.
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
         * #GtkSourceView:tab-width of `view`.
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
         * If %TRUE auto-indentation of text is enabled.
         *
         * When Enter is pressed to create a new line, the auto-indentation inserts the
         * same indentation as the previous line. This is <emphasis>not</emphasis> a
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
         * If `highlight` is %TRUE the current line will be highlighted.
         * @param highlight whether to highlight the current line.
         */
        set_highlight_current_line(highlight: boolean): void;
        /**
         * If %TRUE, when the tab key is pressed when several lines are selected, the
         * selected lines are indented of one level instead of being replaced with a \t
         * character. Shift+Tab unindents the selection.
         *
         * If the first or last line is not selected completely, it is also indented or
         * unindented.
         *
         * When the selection doesn't span several lines, the tab key always replaces
         * the selection with a normal \t character.
         * @param enable whether to indent a block when tab is pressed.
         */
        set_indent_on_tab(enable: boolean): void;
        /**
         * Sets the number of spaces to use for each step of indent when the tab key is
         * pressed. If `width` is -1, the value of the #GtkSourceView:tab-width property
         * will be used.
         *
         * The #GtkSourceView:indent-width interacts with the
         * #GtkSourceView:insert-spaces-instead-of-tabs property and
         * #GtkSourceView:tab-width. An example will be clearer: if the
         * #GtkSourceView:indent-width is 4 and
         * #GtkSourceView:tab-width is 8 and
         * #GtkSourceView:insert-spaces-instead-of-tabs is %FALSE, then pressing the tab
         * key at the beginning of a line will insert 4 spaces. So far so good. Pressing
         * the tab key a second time will remove the 4 spaces and insert a \t character
         * instead (since #GtkSourceView:tab-width is 8). On the other hand, if
         * #GtkSourceView:insert-spaces-instead-of-tabs is %TRUE, the second tab key
         * pressed will insert 4 more spaces for a total of 8 spaces in the
         * #GtkTextBuffer.
         *
         * The test-widget program (available in the GtkSourceView repository) may be
         * useful to better understand the indentation settings (enable the space
         * drawing!).
         * @param width indent width in characters.
         */
        set_indent_width(width: number): void;
        /**
         * If %TRUE a tab key pressed is replaced by a group of space characters. Of
         * course it is still possible to insert a real \t programmatically with the
         * #GtkTextBuffer API.
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
         * Sets the width of tabulation in characters. The #GtkTextBuffer still contains
         * \t characters, but they can take a different visual width in a #GtkSourceView
         * widget.
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

    class BufferClass {
        // Own fields of GtkSource-4.BufferClass

        padding: any[];
    }

    class BufferPrivate {}

    class CompletionClass {
        // Own fields of GtkSource-4.CompletionClass

        padding: any[];
    }

    class CompletionContextClass {
        // Own fields of GtkSource-4.CompletionContextClass

        padding: any[];
    }

    class CompletionContextPrivate {}

    class CompletionInfoClass {
        // Own fields of GtkSource-4.CompletionInfoClass

        padding: any[];
    }

    class CompletionInfoPrivate {}

    class CompletionItemClass {
        // Own fields of GtkSource-4.CompletionItemClass

        padding: any[];
    }

    class CompletionItemPrivate {}

    class CompletionPrivate {}

    /**
     * The virtual function table for #GtkSourceCompletionProposal.
     */
    class CompletionProposalIface {}

    /**
     * The virtual function table for #GtkSourceCompletionProvider.
     */
    class CompletionProviderIface {}

    class CompletionWordsClass {}

    class CompletionWordsPrivate {}

    class Encoding {
        // Owm methods of GtkSource-4.Encoding

        /**
         * Gets all encodings.
         */
        static get_all(): Encoding[];
        /**
         * Gets the #GtkSourceEncoding for the current locale. See also g_get_charset().
         */
        static get_current(): Encoding;
        /**
         * Gets the list of default candidate encodings to try when loading a file. See
         * gtk_source_file_loader_set_candidate_encodings().
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

        // Owm methods of GtkSource-4.Encoding

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

    class FileClass {
        // Own fields of GtkSource-4.FileClass

        padding: any[];
    }

    class FileLoaderClass {
        // Own fields of GtkSource-4.FileLoaderClass

        padding: any[];
    }

    class FileLoaderPrivate {}

    class FilePrivate {}

    class FileSaverClass {
        // Own fields of GtkSource-4.FileSaverClass

        padding: any[];
    }

    class FileSaverPrivate {}

    class GutterClass {
        // Own fields of GtkSource-4.GutterClass

        padding: any[];
    }

    class GutterPrivate {}

    class GutterRendererClass {
        // Own fields of GtkSource-4.GutterRendererClass

        padding: any[];
    }

    class GutterRendererPixbufClass {}

    class GutterRendererPixbufPrivate {}

    class GutterRendererPrivate {}

    class GutterRendererTextClass {}

    class GutterRendererTextPrivate {}

    class LanguageClass {
        // Own fields of GtkSource-4.LanguageClass

        padding: any[];
    }

    class LanguageManagerClass {
        // Own fields of GtkSource-4.LanguageManagerClass

        padding: any[];
    }

    class LanguageManagerPrivate {}

    class LanguagePrivate {}

    class MapClass {
        // Own fields of GtkSource-4.MapClass

        padding: any[];
    }

    class MarkAttributesClass {}

    class MarkAttributesPrivate {}

    class MarkClass {
        // Own fields of GtkSource-4.MarkClass

        padding: any[];
    }

    class MarkPrivate {}

    class PrintCompositorClass {
        // Own fields of GtkSource-4.PrintCompositorClass

        padding: any[];
    }

    class PrintCompositorPrivate {}

    class RegionClass {
        // Own fields of GtkSource-4.RegionClass

        padding: any[];
    }

    /**
     * #GtkSourceRegionIter is an opaque datatype; ignore all its fields.
     * Initialize the iter with gtk_source_region_get_start_region_iter().
     */
    class RegionIter {
        // Constructors of GtkSource-4.RegionIter

        constructor(properties?: Partial<{}>);

        // Owm methods of GtkSource-4.RegionIter

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

    class SearchContextClass {
        // Own fields of GtkSource-4.SearchContextClass

        padding: any[];
    }

    class SearchContextPrivate {}

    class SearchSettingsClass {
        // Own fields of GtkSource-4.SearchSettingsClass

        padding: any[];
    }

    class SearchSettingsPrivate {}

    class SpaceDrawerClass {
        // Own fields of GtkSource-4.SpaceDrawerClass

        padding: any[];
    }

    class SpaceDrawerPrivate {}

    class StyleClass {}

    class StyleSchemeChooserButtonClass {
        // Own fields of GtkSource-4.StyleSchemeChooserButtonClass

        padding: any[];
    }

    class StyleSchemeChooserInterface {
        // Own fields of GtkSource-4.StyleSchemeChooserInterface

        padding: any[];
    }

    class StyleSchemeChooserWidgetClass {
        // Own fields of GtkSource-4.StyleSchemeChooserWidgetClass

        padding: any[];
    }

    class StyleSchemeClass {
        // Own fields of GtkSource-4.StyleSchemeClass

        padding: any[];
    }

    class StyleSchemeManagerClass {
        // Own fields of GtkSource-4.StyleSchemeManagerClass

        padding: any[];
    }

    class StyleSchemeManagerPrivate {}

    class StyleSchemePrivate {}

    class TagClass {
        // Own fields of GtkSource-4.TagClass

        padding: any[];
    }

    class UndoManagerIface {}

    class ViewClass {
        // Own fields of GtkSource-4.ViewClass

        padding: any[];
    }

    class ViewPrivate {}

    interface CompletionProposal {
        // Owm methods of GtkSource-4.CompletionProposal

        /**
         * Emits the "changed" signal on `proposal`. This should be called by
         * implementations whenever the name, icon or info of the proposal has
         * changed.
         */
        changed(): void;
        /**
         * Get whether two proposal objects are the same.  This is used to (together
         * with gtk_source_completion_proposal_hash()) to match proposals in the
         * completion model. By default, it uses direct equality (g_direct_equal()).
         * @param other a #GtkSourceCompletionProposal.
         * @returns %TRUE if @proposal and @object are the same proposal
         */
        equal(other: CompletionProposal): boolean;
        /**
         * Gets the #GIcon for the icon of `proposal`.
         * @returns A #GIcon with the icon of @proposal.
         */
        get_gicon(): Gio.Icon | null;
        /**
         * Gets the #GdkPixbuf for the icon of `proposal`.
         * @returns A #GdkPixbuf with the icon of @proposal.
         */
        get_icon(): GdkPixbuf.Pixbuf | null;
        /**
         * Gets the icon name of `proposal`.
         * @returns The icon name of @proposal.
         */
        get_icon_name(): string | null;
        /**
         * Gets extra information associated to the proposal. This information will be
         * used to present the user with extra, detailed information about the
         * selected proposal. The returned string must be freed with g_free().
         * @returns a newly-allocated string containing extra information of @proposal or %NULL if no extra information is associated to @proposal.
         */
        get_info(): string | null;
        /**
         * Gets the label of `proposal`. The label is shown in the list of proposals as
         * plain text. If you need any markup (such as bold or italic text), you have
         * to implement gtk_source_completion_proposal_get_markup(). The returned string
         * must be freed with g_free().
         * @returns a new string containing the label of @proposal.
         */
        get_label(): string;
        /**
         * Gets the label of `proposal` with markup. The label is shown in the list of
         * proposals and may contain markup. This will be used instead of
         * gtk_source_completion_proposal_get_label() if implemented. The returned string
         * must be freed with g_free().
         * @returns a new string containing the label of @proposal with markup.
         */
        get_markup(): string;
        /**
         * Gets the text of `proposal`. The text that is inserted into
         * the text buffer when the proposal is activated by the default activation.
         * You are free to implement a custom activation handler in the provider and
         * not implement this function. For more information, see
         * gtk_source_completion_provider_activate_proposal(). The returned string must
         * be freed with g_free().
         * @returns a new string containing the text of @proposal.
         */
        get_text(): string;
        /**
         * Get the hash value of `proposal`. This is used to (together with
         * gtk_source_completion_proposal_equal()) to match proposals in the completion
         * model. By default, it uses a direct hash (g_direct_hash()).
         * @returns The hash value of @proposal.
         */
        hash(): number;

        // Own virtual methods of GtkSource-4.CompletionProposal

        /**
         * Emits the "changed" signal on `proposal`. This should be called by
         * implementations whenever the name, icon or info of the proposal has
         * changed.
         */
        vfunc_changed(): void;
        /**
         * Get whether two proposal objects are the same.  This is used to (together
         * with gtk_source_completion_proposal_hash()) to match proposals in the
         * completion model. By default, it uses direct equality (g_direct_equal()).
         * @param other a #GtkSourceCompletionProposal.
         */
        vfunc_equal(other: CompletionProposal): boolean;
        /**
         * Gets the #GIcon for the icon of `proposal`.
         */
        vfunc_get_gicon(): Gio.Icon | null;
        /**
         * Gets the #GdkPixbuf for the icon of `proposal`.
         */
        vfunc_get_icon(): GdkPixbuf.Pixbuf | null;
        /**
         * Gets the icon name of `proposal`.
         */
        vfunc_get_icon_name(): string | null;
        /**
         * Gets extra information associated to the proposal. This information will be
         * used to present the user with extra, detailed information about the
         * selected proposal. The returned string must be freed with g_free().
         */
        vfunc_get_info(): string | null;
        /**
         * Gets the label of `proposal`. The label is shown in the list of proposals as
         * plain text. If you need any markup (such as bold or italic text), you have
         * to implement gtk_source_completion_proposal_get_markup(). The returned string
         * must be freed with g_free().
         */
        vfunc_get_label(): string;
        /**
         * Gets the label of `proposal` with markup. The label is shown in the list of
         * proposals and may contain markup. This will be used instead of
         * gtk_source_completion_proposal_get_label() if implemented. The returned string
         * must be freed with g_free().
         */
        vfunc_get_markup(): string;
        /**
         * Gets the text of `proposal`. The text that is inserted into
         * the text buffer when the proposal is activated by the default activation.
         * You are free to implement a custom activation handler in the provider and
         * not implement this function. For more information, see
         * gtk_source_completion_provider_activate_proposal(). The returned string must
         * be freed with g_free().
         */
        vfunc_get_text(): string;
        /**
         * Get the hash value of `proposal`. This is used to (together with
         * gtk_source_completion_proposal_equal()) to match proposals in the completion
         * model. By default, it uses a direct hash (g_direct_hash()).
         */
        vfunc_hash(): number;
    }

    interface CompletionProvider {
        // Owm methods of GtkSource-4.CompletionProvider

        /**
         * Activate `proposal` at `iter`. When this functions returns %FALSE, the default
         * activation of `proposal` will take place which replaces the word at `iter`
         * with the text of `proposal` (see gtk_source_completion_proposal_get_text()).
         *
         * Here is how the default activation selects the boundaries of the word to
         * replace. The end of the word is `iter`. For the start of the word, it depends
         * on whether a start iter is defined for `proposal` (see
         * gtk_source_completion_provider_get_start_iter()). If a start iter is defined,
         * the start of the word is the start iter. Else, the word (as long as possible)
         * will contain only alphanumerical and the "_" characters.
         * @param proposal a #GtkSourceCompletionProposal.
         * @param iter a #GtkTextIter.
         * @returns %TRUE to indicate that the proposal activation has been handled,          %FALSE otherwise.
         */
        activate_proposal(proposal: CompletionProposal, iter: Gtk.TextIter): boolean;
        /**
         * Get with what kind of activation the provider should be activated.
         * @returns a combination of #GtkSourceCompletionActivation.
         */
        get_activation(): CompletionActivation;
        /**
         * Gets the #GIcon for the icon of `provider`.
         * @returns The icon to be used for the provider,          or %NULL if the provider does not have a special icon.
         */
        get_gicon(): Gio.Icon | null;
        /**
         * Get the #GdkPixbuf for the icon of the `provider`.
         * @returns The icon to be used for the provider,          or %NULL if the provider does not have a special icon.
         */
        get_icon(): GdkPixbuf.Pixbuf | null;
        /**
         * Gets the icon name of `provider`.
         * @returns The icon name to be used for the provider,          or %NULL if the provider does not have a special icon.
         */
        get_icon_name(): string | null;
        /**
         * Get a customized info widget to show extra information of a proposal.
         * This allows for customized widgets on a proposal basis, although in general
         * providers will have the same custom widget for all their proposals and
         * `proposal` can be ignored. The implementation of this function is optional.
         *
         * If this function is not implemented, the default widget is a #GtkLabel. The
         * return value of gtk_source_completion_proposal_get_info() is used as the
         * content of the #GtkLabel.
         *
         * <note>
         *   <para>
         *     If implemented, gtk_source_completion_provider_update_info()
         *     <emphasis>must</emphasis> also be implemented.
         *   </para>
         * </note>
         * @param proposal a currently selected #GtkSourceCompletionProposal.
         * @returns a custom #GtkWidget to show extra information about @proposal, or %NULL if the provider does not have a special info widget.
         */
        get_info_widget(proposal: CompletionProposal): Gtk.Widget | null;
        /**
         * Get the delay in milliseconds before starting interactive completion for
         * this provider. A value of -1 indicates to use the default value as set
         * by the #GtkSourceCompletion:auto-complete-delay property.
         * @returns the interactive delay in milliseconds.
         */
        get_interactive_delay(): number;
        /**
         * Get the name of the provider. This should be a translatable name for
         * display to the user. For example: _("Document word completion provider"). The
         * returned string must be freed with g_free().
         * @returns a new string containing the name of the provider.
         */
        get_name(): string;
        /**
         * Get the provider priority. The priority determines the order in which
         * proposals appear in the completion popup. Higher priorities are sorted
         * before lower priorities. The default priority is 0.
         * @returns the provider priority.
         */
        get_priority(): number;
        /**
         * Get the #GtkTextIter at which the completion for `proposal` starts. When
         * implemented, this information is used to position the completion window
         * accordingly when a proposal is selected in the completion window. The
         * `proposal` text inside the completion window is aligned on `iter`.
         *
         * If this function is not implemented, the word boundary is taken to position
         * the completion window. See gtk_source_completion_provider_activate_proposal()
         * for an explanation on the word boundaries.
         *
         * When the `proposal` is activated, the default handler uses `iter` as the start
         * of the word to replace. See
         * gtk_source_completion_provider_activate_proposal() for more information.
         * @param context a #GtkSourceCompletionContext.
         * @param proposal a #GtkSourceCompletionProposal.
         * @returns %TRUE if @iter was set for @proposal, %FALSE otherwise.
         */
        get_start_iter(context: CompletionContext, proposal: CompletionProposal): boolean;
        /**
         * Get whether the provider match the context of completion detailed in
         * `context`.
         * @param context a #GtkSourceCompletionContext.
         * @returns %TRUE if @provider matches the completion context, %FALSE otherwise.
         */
        match(context: CompletionContext): boolean;
        /**
         * Populate `context` with proposals from `provider` added with the
         * gtk_source_completion_context_add_proposals() function.
         * @param context a #GtkSourceCompletionContext.
         */
        populate(context: CompletionContext): void;
        /**
         * Update extra information shown in `info` for `proposal`.
         *
         * <note>
         *   <para>
         *     This function <emphasis>must</emphasis> be implemented when
         *     gtk_source_completion_provider_get_info_widget() is implemented.
         *   </para>
         * </note>
         * @param proposal a #GtkSourceCompletionProposal.
         * @param info a #GtkSourceCompletionInfo.
         */
        update_info(proposal: CompletionProposal, info: CompletionInfo): void;

        // Own virtual methods of GtkSource-4.CompletionProvider

        /**
         * Activate `proposal` at `iter`. When this functions returns %FALSE, the default
         * activation of `proposal` will take place which replaces the word at `iter`
         * with the text of `proposal` (see gtk_source_completion_proposal_get_text()).
         *
         * Here is how the default activation selects the boundaries of the word to
         * replace. The end of the word is `iter`. For the start of the word, it depends
         * on whether a start iter is defined for `proposal` (see
         * gtk_source_completion_provider_get_start_iter()). If a start iter is defined,
         * the start of the word is the start iter. Else, the word (as long as possible)
         * will contain only alphanumerical and the "_" characters.
         * @param proposal a #GtkSourceCompletionProposal.
         * @param iter a #GtkTextIter.
         */
        vfunc_activate_proposal(proposal: CompletionProposal, iter: Gtk.TextIter): boolean;
        /**
         * Get with what kind of activation the provider should be activated.
         */
        vfunc_get_activation(): CompletionActivation;
        /**
         * Gets the #GIcon for the icon of `provider`.
         */
        vfunc_get_gicon(): Gio.Icon | null;
        /**
         * Get the #GdkPixbuf for the icon of the `provider`.
         */
        vfunc_get_icon(): GdkPixbuf.Pixbuf | null;
        /**
         * Gets the icon name of `provider`.
         */
        vfunc_get_icon_name(): string | null;
        /**
         * Get a customized info widget to show extra information of a proposal.
         * This allows for customized widgets on a proposal basis, although in general
         * providers will have the same custom widget for all their proposals and
         * `proposal` can be ignored. The implementation of this function is optional.
         *
         * If this function is not implemented, the default widget is a #GtkLabel. The
         * return value of gtk_source_completion_proposal_get_info() is used as the
         * content of the #GtkLabel.
         *
         * <note>
         *   <para>
         *     If implemented, gtk_source_completion_provider_update_info()
         *     <emphasis>must</emphasis> also be implemented.
         *   </para>
         * </note>
         * @param proposal a currently selected #GtkSourceCompletionProposal.
         */
        vfunc_get_info_widget(proposal: CompletionProposal): Gtk.Widget | null;
        /**
         * Get the delay in milliseconds before starting interactive completion for
         * this provider. A value of -1 indicates to use the default value as set
         * by the #GtkSourceCompletion:auto-complete-delay property.
         */
        vfunc_get_interactive_delay(): number;
        /**
         * Get the name of the provider. This should be a translatable name for
         * display to the user. For example: _("Document word completion provider"). The
         * returned string must be freed with g_free().
         */
        vfunc_get_name(): string;
        /**
         * Get the provider priority. The priority determines the order in which
         * proposals appear in the completion popup. Higher priorities are sorted
         * before lower priorities. The default priority is 0.
         */
        vfunc_get_priority(): number;
        /**
         * Get the #GtkTextIter at which the completion for `proposal` starts. When
         * implemented, this information is used to position the completion window
         * accordingly when a proposal is selected in the completion window. The
         * `proposal` text inside the completion window is aligned on `iter`.
         *
         * If this function is not implemented, the word boundary is taken to position
         * the completion window. See gtk_source_completion_provider_activate_proposal()
         * for an explanation on the word boundaries.
         *
         * When the `proposal` is activated, the default handler uses `iter` as the start
         * of the word to replace. See
         * gtk_source_completion_provider_activate_proposal() for more information.
         * @param context a #GtkSourceCompletionContext.
         * @param proposal a #GtkSourceCompletionProposal.
         */
        vfunc_get_start_iter(context: CompletionContext, proposal: CompletionProposal): boolean;
        /**
         * Get whether the provider match the context of completion detailed in
         * `context`.
         * @param context a #GtkSourceCompletionContext.
         */
        vfunc_match(context: CompletionContext): boolean;
        /**
         * Populate `context` with proposals from `provider` added with the
         * gtk_source_completion_context_add_proposals() function.
         * @param context a #GtkSourceCompletionContext.
         */
        vfunc_populate(context: CompletionContext): void;
        /**
         * Update extra information shown in `info` for `proposal`.
         *
         * <note>
         *   <para>
         *     This function <emphasis>must</emphasis> be implemented when
         *     gtk_source_completion_provider_get_info_widget() is implemented.
         *   </para>
         * </note>
         * @param proposal a #GtkSourceCompletionProposal.
         * @param info a #GtkSourceCompletionInfo.
         */
        vfunc_update_info(proposal: CompletionProposal, info: CompletionInfo): void;
    }

    interface StyleSchemeChooser {
        // Own properties of GtkSource-4.StyleSchemeChooser

        /**
         * The :style-scheme property contains the currently selected style
         * scheme. The property can be set to change
         * the current selection programmatically.
         */
        style_scheme: StyleScheme;
        /**
         * The :style-scheme property contains the currently selected style
         * scheme. The property can be set to change
         * the current selection programmatically.
         */
        styleScheme: StyleScheme;

        // Owm methods of GtkSource-4.StyleSchemeChooser

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

        // Own virtual methods of GtkSource-4.StyleSchemeChooser

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

    interface UndoManager {
        // Owm methods of GtkSource-4.UndoManager

        /**
         * Begin a not undoable action on the buffer. All changes between this call
         * and the call to gtk_source_undo_manager_end_not_undoable_action() cannot
         * be undone. This function should be re-entrant.
         */
        begin_not_undoable_action(): void;
        /**
         * Get whether there are redo operations available.
         * @returns %TRUE if there are redo operations available, %FALSE otherwise
         */
        can_redo(): boolean;
        /**
         * Emits the #GtkSourceUndoManager::can-redo-changed signal.
         */
        can_redo_changed(): void;
        /**
         * Get whether there are undo operations available.
         * @returns %TRUE if there are undo operations available, %FALSE otherwise
         */
        can_undo(): boolean;
        /**
         * Emits the #GtkSourceUndoManager::can-undo-changed signal.
         */
        can_undo_changed(): void;
        /**
         * Ends a not undoable action on the buffer.
         */
        end_not_undoable_action(): void;
        /**
         * Perform a single redo. Calling this function when there are no redo operations
         * available is an error. Use gtk_source_undo_manager_can_redo() to find out
         * if there are redo operations available.
         */
        redo(): void;
        /**
         * Perform a single undo. Calling this function when there are no undo operations
         * available is an error. Use gtk_source_undo_manager_can_undo() to find out
         * if there are undo operations available.
         */
        undo(): void;

        // Own virtual methods of GtkSource-4.UndoManager

        /**
         * Begin a not undoable action on the buffer. All changes between this call
         * and the call to gtk_source_undo_manager_end_not_undoable_action() cannot
         * be undone. This function should be re-entrant.
         */
        vfunc_begin_not_undoable_action(): void;
        /**
         * Get whether there are redo operations available.
         */
        vfunc_can_redo(): boolean;
        /**
         * Emits the #GtkSourceUndoManager::can-redo-changed signal.
         */
        vfunc_can_redo_changed(): void;
        /**
         * Get whether there are undo operations available.
         */
        vfunc_can_undo(): boolean;
        /**
         * Emits the #GtkSourceUndoManager::can-undo-changed signal.
         */
        vfunc_can_undo_changed(): void;
        /**
         * Ends a not undoable action on the buffer.
         */
        vfunc_end_not_undoable_action(): void;
        /**
         * Perform a single redo. Calling this function when there are no redo operations
         * available is an error. Use gtk_source_undo_manager_can_redo() to find out
         * if there are redo operations available.
         */
        vfunc_redo(): void;
        /**
         * Perform a single undo. Calling this function when there are no undo operations
         * available is an error. Use gtk_source_undo_manager_can_undo() to find out
         * if there are undo operations available.
         */
        vfunc_undo(): void;
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
