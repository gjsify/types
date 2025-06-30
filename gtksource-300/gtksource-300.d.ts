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

export namespace GtkSource {
    /**
     * GtkSource-300
     */

    export namespace BackgroundPatternType {
        export const $gtype: GObject.GType<BackgroundPatternType>;
    }

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

    export namespace BracketMatchType {
        export const $gtype: GObject.GType<BracketMatchType>;
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

    export namespace ChangeCaseType {
        export const $gtype: GObject.GType<ChangeCaseType>;
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
        static $gtype: GObject.GType<CompletionError>;

        // Static fields

        /**
         * The #GtkSourceCompletionProvider
         * is already bound to the #GtkSourceCompletion object.
         */
        static ALREADY_BOUND: number;
        /**
         * The #GtkSourceCompletionProvider is
         * not bound to the #GtkSourceCompletion object.
         */
        static NOT_BOUND: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        static quark(): GLib.Quark;
    }

    export namespace CompressionType {
        export const $gtype: GObject.GType<CompressionType>;
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
        static $gtype: GObject.GType<FileLoaderError>;

        // Static fields

        /**
         * The file is too big.
         */
        static TOO_BIG: number;
        /**
         * It is not
         * possible to detect the encoding automatically.
         */
        static ENCODING_AUTO_DETECTION_FAILED: number;
        /**
         * There was an encoding
         * conversion error and it was needed to use a fallback character.
         */
        static CONVERSION_FALLBACK: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        static quark(): GLib.Quark;
    }

    /**
     * An error code used with the %GTK_SOURCE_FILE_SAVER_ERROR domain.
     */
    class FileSaverError extends GLib.Error {
        static $gtype: GObject.GType<FileSaverError>;

        // Static fields

        /**
         * The buffer contains invalid
         *   characters.
         */
        static INVALID_CHARS: number;
        /**
         * The file is externally
         *   modified.
         */
        static EXTERNALLY_MODIFIED: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        static quark(): GLib.Quark;
    }

    /**
     * The alignment mode of the renderer, when a cell spans multiple lines (due to
     * text wrapping).
     */

    /**
     * The alignment mode of the renderer, when a cell spans multiple lines (due to
     * text wrapping).
     */
    export namespace GutterRendererAlignmentMode {
        export const $gtype: GObject.GType<GutterRendererAlignmentMode>;
    }

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

    export namespace SmartHomeEndType {
        export const $gtype: GObject.GType<SmartHomeEndType>;
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

    export namespace ViewGutterPosition {
        export const $gtype: GObject.GType<ViewGutterPosition>;
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
     * This function is intended to be used inside a
     * #GtkSourceBuffer::bracket-matched signal handler. Pass to this function the
     * `iter` and `state` values as received in the signal handler, and a string
     * description will be returned.
     * @param iter the #GtkTextIter.
     * @param state the #GtkSourceBracketMatchType.
     * @returns a string intended to be shown in the UI,   that describes a bracket matching. %NULL is returned on   %GTK_SOURCE_BRACKET_MATCH_NONE.
     */
    function utils_get_bracket_matched_message(iter: Gtk.TextIter, state: BracketMatchType | null): string | null;
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

    export namespace CompletionActivation {
        export const $gtype: GObject.GType<CompletionActivation>;
    }

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

    /**
     * Flags to define the behavior of a #GtkSourceFileSaver.
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

    export namespace GutterRendererState {
        export const $gtype: GObject.GType<GutterRendererState>;
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

    export namespace SortFlags {
        export const $gtype: GObject.GType<SortFlags>;
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

    /**
     * #GtkSourceSpaceLocationFlags contains flags for white space locations.
     *
     * If a line contains only white spaces (no text), the white spaces match both
     * %GTK_SOURCE_SPACE_LOCATION_LEADING and %GTK_SOURCE_SPACE_LOCATION_TRAILING.
     */
    export namespace SpaceLocationFlags {
        export const $gtype: GObject.GType<SpaceLocationFlags>;
    }

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

    /**
     * #GtkSourceSpaceTypeFlags contains flags for white space types.
     */
    export namespace SpaceTypeFlags {
        export const $gtype: GObject.GType<SpaceTypeFlags>;
    }

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
    namespace Buffer {
        // Signal signatures
        interface SignalSignatures extends Gtk.TextBuffer.SignalSignatures {
            'bracket-matched': (arg0: Gtk.TextIter, arg1: BracketMatchType) => void;
            'highlight-updated': (arg0: Gtk.TextIter, arg1: Gtk.TextIter) => void;
            redo: () => void;
            'source-mark-updated': (arg0: Gtk.TextMark) => void;
            undo: () => void;
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

        interface ConstructorProps extends Gtk.TextBuffer.ConstructorProps {
            can_redo: boolean;
            canRedo: boolean;
            can_undo: boolean;
            canUndo: boolean;
            highlight_matching_brackets: boolean;
            highlightMatchingBrackets: boolean;
            highlight_syntax: boolean;
            highlightSyntax: boolean;
            implicit_trailing_newline: boolean;
            implicitTrailingNewline: boolean;
            language: Language;
            max_undo_levels: number;
            maxUndoLevels: number;
            style_scheme: StyleScheme;
            styleScheme: StyleScheme;
            undo_manager: UndoManager;
            undoManager: UndoManager;
        }
    }

    class Buffer extends Gtk.TextBuffer {
        static $gtype: GObject.GType<Buffer>;

        // Properties

        get can_redo(): boolean;
        get canRedo(): boolean;
        get can_undo(): boolean;
        get canUndo(): boolean;
        /**
         * Whether to highlight matching brackets in the buffer.
         */
        get highlight_matching_brackets(): boolean;
        set highlight_matching_brackets(val: boolean);
        /**
         * Whether to highlight matching brackets in the buffer.
         */
        get highlightMatchingBrackets(): boolean;
        set highlightMatchingBrackets(val: boolean);
        /**
         * Whether to highlight syntax in the buffer.
         */
        get highlight_syntax(): boolean;
        set highlight_syntax(val: boolean);
        /**
         * Whether to highlight syntax in the buffer.
         */
        get highlightSyntax(): boolean;
        set highlightSyntax(val: boolean);
        /**
         * Whether the buffer has an implicit trailing newline. See
         * gtk_source_buffer_set_implicit_trailing_newline().
         */
        get implicit_trailing_newline(): boolean;
        set implicit_trailing_newline(val: boolean);
        /**
         * Whether the buffer has an implicit trailing newline. See
         * gtk_source_buffer_set_implicit_trailing_newline().
         */
        get implicitTrailingNewline(): boolean;
        set implicitTrailingNewline(val: boolean);
        get language(): Language;
        set language(val: Language);
        /**
         * Number of undo levels for the buffer. -1 means no limit. This property
         * will only affect the default undo manager.
         */
        get max_undo_levels(): number;
        set max_undo_levels(val: number);
        /**
         * Number of undo levels for the buffer. -1 means no limit. This property
         * will only affect the default undo manager.
         */
        get maxUndoLevels(): number;
        set maxUndoLevels(val: number);
        /**
         * Style scheme. It contains styles for syntax highlighting, optionally
         * foreground, background, cursor color, current line color, and matching
         * brackets style.
         */
        get style_scheme(): StyleScheme;
        set style_scheme(val: StyleScheme);
        /**
         * Style scheme. It contains styles for syntax highlighting, optionally
         * foreground, background, cursor color, current line color, and matching
         * brackets style.
         */
        get styleScheme(): StyleScheme;
        set styleScheme(val: StyleScheme);
        get undo_manager(): UndoManager;
        set undo_manager(val: UndoManager);
        get undoManager(): UndoManager;
        set undoManager(val: UndoManager);

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

        static ['new'](table?: Gtk.TextTagTable | null): Buffer;

        static new_with_language(language: Language): Buffer;

        // Signals

        connect<K extends keyof Buffer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Buffer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Buffer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Buffer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Buffer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Buffer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_bracket_matched(iter: Gtk.TextIter, state: BracketMatchType): void;
        /**
         * Redoes the last undo operation.  Use gtk_source_buffer_can_redo()
         * to check whether a call to this function will have any effect.
         *
         * This function emits the #GtkSourceBuffer::redo signal.
         */
        vfunc_redo(): void;
        /**
         * Undoes the last user action which modified the buffer.  Use
         * gtk_source_buffer_can_undo() to check whether a call to this
         * function will have any effect.
         *
         * This function emits the #GtkSourceBuffer::undo signal.
         */
        vfunc_undo(): void;

        // Methods

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
        change_case(case_type: ChangeCaseType | null, start: Gtk.TextIter, end: Gtk.TextIter): void;
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
        sort_lines(start: Gtk.TextIter, end: Gtk.TextIter, flags: SortFlags | null, column: number): void;
        /**
         * Undoes the last user action which modified the buffer.  Use
         * gtk_source_buffer_can_undo() to check whether a call to this
         * function will have any effect.
         *
         * This function emits the #GtkSourceBuffer::undo signal.
         */
        undo(): void;
    }

    namespace Completion {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'activate-proposal': () => void;
            hide: () => void;
            'move-cursor': (arg0: Gtk.ScrollStep, arg1: number) => void;
            'move-page': (arg0: Gtk.ScrollStep, arg1: number) => void;
            'populate-context': (arg0: CompletionContext) => void;
            show: () => void;
            'notify::accelerators': (pspec: GObject.ParamSpec) => void;
            'notify::auto-complete-delay': (pspec: GObject.ParamSpec) => void;
            'notify::proposal-page-size': (pspec: GObject.ParamSpec) => void;
            'notify::provider-page-size': (pspec: GObject.ParamSpec) => void;
            'notify::remember-info-visibility': (pspec: GObject.ParamSpec) => void;
            'notify::select-on-show': (pspec: GObject.ParamSpec) => void;
            'notify::show-headers': (pspec: GObject.ParamSpec) => void;
            'notify::show-icons': (pspec: GObject.ParamSpec) => void;
            'notify::view': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Gtk.Buildable.ConstructorProps {
            accelerators: number;
            auto_complete_delay: number;
            autoCompleteDelay: number;
            proposal_page_size: number;
            proposalPageSize: number;
            provider_page_size: number;
            providerPageSize: number;
            remember_info_visibility: boolean;
            rememberInfoVisibility: boolean;
            select_on_show: boolean;
            selectOnShow: boolean;
            show_headers: boolean;
            showHeaders: boolean;
            show_icons: boolean;
            showIcons: boolean;
            view: View;
        }
    }

    class Completion extends GObject.Object implements Gtk.Buildable {
        static $gtype: GObject.GType<Completion>;

        // Properties

        /**
         * Number of keyboard accelerators to show for the first proposals. For
         * example, to activate the first proposal, the user can press
         * <keycombo><keycap>Alt</keycap><keycap>1</keycap></keycombo>.
         */
        get accelerators(): number;
        set accelerators(val: number);
        /**
         * Determines the popup delay (in milliseconds) at which the completion
         * will be shown for interactive completion.
         */
        get auto_complete_delay(): number;
        set auto_complete_delay(val: number);
        /**
         * Determines the popup delay (in milliseconds) at which the completion
         * will be shown for interactive completion.
         */
        get autoCompleteDelay(): number;
        set autoCompleteDelay(val: number);
        /**
         * The scroll page size of the proposals in the completion window. In
         * other words, when <keycap>PageDown</keycap> or
         * <keycap>PageUp</keycap> is pressed, the selected
         * proposal becomes the one which is located one page size backward or
         * forward.
         *
         * See also the #GtkSourceCompletion::move-cursor signal.
         */
        get proposal_page_size(): number;
        set proposal_page_size(val: number);
        /**
         * The scroll page size of the proposals in the completion window. In
         * other words, when <keycap>PageDown</keycap> or
         * <keycap>PageUp</keycap> is pressed, the selected
         * proposal becomes the one which is located one page size backward or
         * forward.
         *
         * See also the #GtkSourceCompletion::move-cursor signal.
         */
        get proposalPageSize(): number;
        set proposalPageSize(val: number);
        /**
         * The scroll page size of the provider pages in the completion window.
         *
         * See the #GtkSourceCompletion::move-page signal.
         */
        get provider_page_size(): number;
        set provider_page_size(val: number);
        /**
         * The scroll page size of the provider pages in the completion window.
         *
         * See the #GtkSourceCompletion::move-page signal.
         */
        get providerPageSize(): number;
        set providerPageSize(val: number);
        /**
         * Determines whether the visibility of the info window should be
         * saved when the completion is hidden, and restored when the completion
         * is shown again.
         */
        get remember_info_visibility(): boolean;
        set remember_info_visibility(val: boolean);
        /**
         * Determines whether the visibility of the info window should be
         * saved when the completion is hidden, and restored when the completion
         * is shown again.
         */
        get rememberInfoVisibility(): boolean;
        set rememberInfoVisibility(val: boolean);
        /**
         * Determines whether the first proposal should be selected when the
         * completion is first shown.
         */
        get select_on_show(): boolean;
        set select_on_show(val: boolean);
        /**
         * Determines whether the first proposal should be selected when the
         * completion is first shown.
         */
        get selectOnShow(): boolean;
        set selectOnShow(val: boolean);
        /**
         * Determines whether provider headers should be shown in the proposal
         * list. It can be useful to disable when there is only one provider.
         */
        get show_headers(): boolean;
        set show_headers(val: boolean);
        /**
         * Determines whether provider headers should be shown in the proposal
         * list. It can be useful to disable when there is only one provider.
         */
        get showHeaders(): boolean;
        set showHeaders(val: boolean);
        /**
         * Determines whether provider and proposal icons should be shown in
         * the completion popup.
         */
        get show_icons(): boolean;
        set show_icons(val: boolean);
        /**
         * Determines whether provider and proposal icons should be shown in
         * the completion popup.
         */
        get showIcons(): boolean;
        set showIcons(val: boolean);
        /**
         * The #GtkSourceView bound to the completion object.
         */
        get view(): View;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Completion.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Completion.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Completion.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Completion.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Completion.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Completion.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Completion.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Completion.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_activate_proposal(): void;
        /**
         * Hides the completion if it is active (visible).
         */
        vfunc_hide(): void;
        vfunc_move_cursor(step: Gtk.ScrollStep, num: number): void;
        vfunc_move_page(step: Gtk.ScrollStep, num: number): void;
        vfunc_populate_context(context: CompletionContext): void;
        vfunc_proposal_activated(provider: CompletionProvider, proposal: CompletionProposal): boolean;
        vfunc_show(): void;

        // Methods

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

        // Inherited methods
        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a #GtkBuilder
         * @param child child to add
         * @param type kind of child or %NULL
         */
        add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;
        /**
         * Constructs a child of `buildable` with the name `name`.
         *
         * #GtkBuilder calls this function if a “constructor” has been
         * specified in the UI definition.
         * @param builder #GtkBuilder used to construct this object
         * @param name name of child to construct
         * @returns the constructed child
         */
        construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;
        /**
         * This is similar to gtk_buildable_parser_finished() but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a #GtkBuilder
         * @param child child object or %NULL for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         */
        custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
        /**
         * This is called at the end of each custom element handled by
         * the buildable.
         * @param builder #GtkBuilder used to construct this object
         * @param child child object or %NULL for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         */
        custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
        /**
         * This is called for each unknown element under `<child>`.
         * @param builder a #GtkBuilder used to construct this object
         * @param child child object or %NULL for non-child tags
         * @param tagname name of tag
         * @returns %TRUE if a object has a custom implementation, %FALSE          if it doesn't.
         */
        custom_tag_start(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
        ): [boolean, GLib.MarkupParser, any];
        /**
         * Get the internal child called `childname` of the `buildable` object.
         * @param builder a #GtkBuilder
         * @param childname name of child
         * @returns the internal child of the buildable object
         */
        get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
        /**
         * Gets the name of the `buildable` object.
         *
         * #GtkBuilder sets the name based on the
         * [GtkBuilder UI definition][BUILDER-UI]
         * used to construct the `buildable`.
         * @returns the name set with gtk_buildable_set_name()
         */
        get_name(): string;
        /**
         * Called when the builder finishes the parsing of a
         * [GtkBuilder UI definition][BUILDER-UI].
         * Note that this will be called once for each time
         * gtk_builder_add_from_file() or gtk_builder_add_from_string()
         * is called on a builder.
         * @param builder a #GtkBuilder
         */
        parser_finished(builder: Gtk.Builder): void;
        /**
         * Sets the property name `name` to `value` on the `buildable` object.
         * @param builder a #GtkBuilder
         * @param name name of property
         * @param value value of property
         */
        set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;
        /**
         * Sets the name of the `buildable` object.
         * @param name name to set
         */
        set_name(name: string): void;
        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a #GtkBuilder
         * @param child child to add
         * @param type kind of child or %NULL
         */
        vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;
        /**
         * Constructs a child of `buildable` with the name `name`.
         *
         * #GtkBuilder calls this function if a “constructor” has been
         * specified in the UI definition.
         * @param builder #GtkBuilder used to construct this object
         * @param name name of child to construct
         */
        vfunc_construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;
        /**
         * This is similar to gtk_buildable_parser_finished() but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a #GtkBuilder
         * @param child child object or %NULL for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         */
        vfunc_custom_finished(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
            data?: any | null,
        ): void;
        /**
         * This is called at the end of each custom element handled by
         * the buildable.
         * @param builder #GtkBuilder used to construct this object
         * @param child child object or %NULL for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         */
        vfunc_custom_tag_end(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
            data?: any | null,
        ): void;
        /**
         * This is called for each unknown element under `<child>`.
         * @param builder a #GtkBuilder used to construct this object
         * @param child child object or %NULL for non-child tags
         * @param tagname name of tag
         */
        vfunc_custom_tag_start(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
        ): [boolean, GLib.MarkupParser, any];
        /**
         * Get the internal child called `childname` of the `buildable` object.
         * @param builder a #GtkBuilder
         * @param childname name of child
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
        /**
         * Gets the name of the `buildable` object.
         *
         * #GtkBuilder sets the name based on the
         * [GtkBuilder UI definition][BUILDER-UI]
         * used to construct the `buildable`.
         */
        vfunc_get_name(): string;
        /**
         * Called when the builder finishes the parsing of a
         * [GtkBuilder UI definition][BUILDER-UI].
         * Note that this will be called once for each time
         * gtk_builder_add_from_file() or gtk_builder_add_from_string()
         * is called on a builder.
         * @param builder a #GtkBuilder
         */
        vfunc_parser_finished(builder: Gtk.Builder): void;
        /**
         * Sets the property name `name` to `value` on the `buildable` object.
         * @param builder a #GtkBuilder
         * @param name name of property
         * @param value value of property
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;
        /**
         * Sets the name of the `buildable` object.
         * @param name name to set
         */
        vfunc_set_name(name: string): void;
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
            flags: GObject.BindingFlags | null,
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
            flags: GObject.BindingFlags | null,
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

    namespace CompletionContext {
        // Signal signatures
        interface SignalSignatures extends GObject.InitiallyUnowned.SignalSignatures {
            cancelled: () => void;
            'notify::activation': (pspec: GObject.ParamSpec) => void;
            'notify::completion': (pspec: GObject.ParamSpec) => void;
            'notify::iter': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.InitiallyUnowned.ConstructorProps {
            activation: CompletionActivation;
            completion: Completion;
            iter: Gtk.TextIter;
        }
    }

    class CompletionContext extends GObject.InitiallyUnowned {
        static $gtype: GObject.GType<CompletionContext>;

        // Properties

        /**
         * The completion activation
         */
        get activation(): CompletionActivation;
        set activation(val: CompletionActivation);
        /**
         * The #GtkSourceCompletion associated with the context.
         */
        get completion(): Completion;
        /**
         * The #GtkTextIter at which the completion is invoked.
         */
        get iter(): Gtk.TextIter;
        set iter(val: Gtk.TextIter);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CompletionContext.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<CompletionContext.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof CompletionContext.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CompletionContext.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CompletionContext.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CompletionContext.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CompletionContext.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CompletionContext.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_cancelled(): void;

        // Methods

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
        get_iter(): [boolean, Gtk.TextIter];
    }

    namespace CompletionInfo {
        // Signal signatures
        interface SignalSignatures extends Gtk.Window.SignalSignatures {
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
            extends Gtk.Window.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps {}
    }

    class CompletionInfo extends Gtk.Window implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<CompletionInfo>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CompletionInfo.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<CompletionInfo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): CompletionInfo;

        // Signals

        connect<K extends keyof CompletionInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CompletionInfo.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CompletionInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CompletionInfo.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CompletionInfo.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CompletionInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Moves the #GtkSourceCompletionInfo to `iter`. If `iter` is %NULL `info` is
         * moved to the cursor position. Moving will respect the #GdkGravity setting
         * of the info window and will ensure the line at `iter` is not occluded by
         * the window.
         * @param view a #GtkTextView on which the info window should be positioned.
         * @param iter a #GtkTextIter.
         */
        move_to_iter(view: Gtk.TextView, iter?: Gtk.TextIter | null): void;

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
            flags: GObject.BindingFlags | null,
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
            flags: GObject.BindingFlags | null,
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

    namespace CompletionItem {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::gicon': (pspec: GObject.ParamSpec) => void;
            'notify::icon': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::info': (pspec: GObject.ParamSpec) => void;
            'notify::label': (pspec: GObject.ParamSpec) => void;
            'notify::markup': (pspec: GObject.ParamSpec) => void;
            'notify::text': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, CompletionProposal.ConstructorProps {
            gicon: Gio.Icon;
            icon: GdkPixbuf.Pixbuf;
            icon_name: string;
            iconName: string;
            info: string;
            label: string;
            markup: string;
            text: string;
        }
    }

    class CompletionItem extends GObject.Object implements CompletionProposal {
        static $gtype: GObject.GType<CompletionItem>;

        // Properties

        /**
         * The #GIcon for the icon to be shown for this proposal.
         */
        get gicon(): Gio.Icon;
        set gicon(val: Gio.Icon);
        /**
         * The #GdkPixbuf for the icon to be shown for this proposal.
         */
        get icon(): GdkPixbuf.Pixbuf;
        set icon(val: GdkPixbuf.Pixbuf);
        /**
         * The icon name for the icon to be shown for this proposal.
         */
        get icon_name(): string;
        set icon_name(val: string);
        /**
         * The icon name for the icon to be shown for this proposal.
         */
        get iconName(): string;
        set iconName(val: string);
        /**
         * Optional extra information to be shown for this proposal.
         */
        get info(): string;
        set info(val: string);
        /**
         * Label to be shown for this proposal.
         */
        get label(): string;
        set label(val: string);
        /**
         * Label with markup to be shown for this proposal.
         */
        get markup(): string;
        set markup(val: string);
        /**
         * Proposal text.
         */
        get text(): string;
        set text(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CompletionItem.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<CompletionItem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): CompletionItem;

        // Signals

        connect<K extends keyof CompletionItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CompletionItem.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CompletionItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CompletionItem.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CompletionItem.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CompletionItem.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        set_gicon(gicon?: Gio.Icon | null): void;
        set_icon(icon?: GdkPixbuf.Pixbuf | null): void;
        set_icon_name(icon_name?: string | null): void;
        set_info(info?: string | null): void;
        set_label(label?: string | null): void;
        set_markup(markup?: string | null): void;
        set_text(text?: string | null): void;

        // Inherited methods
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
            flags: GObject.BindingFlags | null,
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
            flags: GObject.BindingFlags | null,
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

    namespace File {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::compression-type': (pspec: GObject.ParamSpec) => void;
            'notify::encoding': (pspec: GObject.ParamSpec) => void;
            'notify::location': (pspec: GObject.ParamSpec) => void;
            'notify::newline-type': (pspec: GObject.ParamSpec) => void;
            'notify::read-only': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            compression_type: CompressionType;
            compressionType: CompressionType;
            encoding: Encoding;
            location: Gio.File;
            newline_type: NewlineType;
            newlineType: NewlineType;
            read_only: boolean;
            readOnly: boolean;
        }
    }

    class File extends GObject.Object {
        static $gtype: GObject.GType<File>;

        // Properties

        /**
         * The compression type.
         */
        get compression_type(): CompressionType;
        /**
         * The compression type.
         */
        get compressionType(): CompressionType;
        /**
         * The character encoding, initially %NULL. After a successful file
         * loading or saving operation, the encoding is non-%NULL.
         */
        get encoding(): Encoding;
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
         * Whether the file is read-only or not. The value of this property is
         * not updated automatically (there is no file monitors).
         */
        get read_only(): boolean;
        /**
         * Whether the file is read-only or not. The value of this property is
         * not updated automatically (there is no file monitors).
         */
        get readOnly(): boolean;

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

        connect<K extends keyof File.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, File.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof File.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, File.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof File.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<File.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

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

    namespace FileLoader {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::buffer': (pspec: GObject.ParamSpec) => void;
            'notify::file': (pspec: GObject.ParamSpec) => void;
            'notify::input-stream': (pspec: GObject.ParamSpec) => void;
            'notify::location': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            buffer: Buffer;
            file: File;
            input_stream: Gio.InputStream;
            inputStream: Gio.InputStream;
            location: Gio.File;
        }
    }

    class FileLoader extends GObject.Object {
        static $gtype: GObject.GType<FileLoader>;

        // Properties

        /**
         * The #GtkSourceBuffer to load the contents into. The
         * #GtkSourceFileLoader object has a weak reference to the buffer.
         */
        get buffer(): Buffer;
        /**
         * The #GtkSourceFile. The #GtkSourceFileLoader object has a weak
         * reference to the file.
         */
        get file(): File;
        /**
         * The #GInputStream to load. Useful for reading stdin. If this property
         * is set, the #GtkSourceFileLoader:location property is ignored.
         */
        get input_stream(): Gio.InputStream;
        /**
         * The #GInputStream to load. Useful for reading stdin. If this property
         * is set, the #GtkSourceFileLoader:location property is ignored.
         */
        get inputStream(): Gio.InputStream;
        /**
         * The #GFile to load. If the #GtkSourceFileLoader:input-stream is
         * %NULL, by default the location is taken from the #GtkSourceFile at
         * construction time.
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

        static new_from_stream(buffer: Buffer, file: File, stream: Gio.InputStream): FileLoader;

        // Signals

        connect<K extends keyof FileLoader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileLoader.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FileLoader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileLoader.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FileLoader.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FileLoader.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

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
         */
        load_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            progress_callback?: Gio.FileProgressCallback | null,
            progress_callback_notify?: GLib.DestroyNotify | null,
        ): globalThis.Promise<boolean>;
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
            cancellable: Gio.Cancellable | null,
            progress_callback: Gio.FileProgressCallback | null,
            progress_callback_notify: GLib.DestroyNotify | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
        ): globalThis.Promise<boolean> | void;
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

    namespace FileSaver {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::buffer': (pspec: GObject.ParamSpec) => void;
            'notify::compression-type': (pspec: GObject.ParamSpec) => void;
            'notify::encoding': (pspec: GObject.ParamSpec) => void;
            'notify::file': (pspec: GObject.ParamSpec) => void;
            'notify::flags': (pspec: GObject.ParamSpec) => void;
            'notify::location': (pspec: GObject.ParamSpec) => void;
            'notify::newline-type': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            buffer: Buffer;
            compression_type: CompressionType;
            compressionType: CompressionType;
            encoding: Encoding;
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
         * The #GtkSourceBuffer to save. The #GtkSourceFileSaver object has a
         * weak reference to the buffer.
         */
        get buffer(): Buffer;
        /**
         * The compression type.
         */
        get compression_type(): CompressionType;
        set compression_type(val: CompressionType);
        /**
         * The compression type.
         */
        get compressionType(): CompressionType;
        set compressionType(val: CompressionType);
        /**
         * The file's encoding.
         */
        get encoding(): Encoding;
        set encoding(val: Encoding);
        /**
         * The #GtkSourceFile. The #GtkSourceFileSaver object has a weak
         * reference to the file.
         */
        get file(): File;
        /**
         * File saving flags.
         */
        get flags(): FileSaverFlags;
        set flags(val: FileSaverFlags);
        /**
         * The #GFile where to save the buffer. By default the location is taken
         * from the #GtkSourceFile at construction time.
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

        connect<K extends keyof FileSaver.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileSaver.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FileSaver.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileSaver.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FileSaver.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FileSaver.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

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
         */
        save_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            progress_callback?: Gio.FileProgressCallback | null,
            progress_callback_notify?: GLib.DestroyNotify | null,
        ): globalThis.Promise<boolean>;
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
            cancellable: Gio.Cancellable | null,
            progress_callback: Gio.FileProgressCallback | null,
            progress_callback_notify: GLib.DestroyNotify | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
        ): globalThis.Promise<boolean> | void;
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
        set_compression_type(compression_type: CompressionType | null): void;
        /**
         * Sets the encoding. If `encoding` is %NULL, the UTF-8 encoding will be set.
         * By default the encoding is taken from the #GtkSourceFile.
         * @param encoding the new encoding, or %NULL for UTF-8.
         */
        set_encoding(encoding?: Encoding | null): void;
        set_flags(flags: FileSaverFlags | null): void;
        /**
         * Sets the newline type. By default the newline type is taken from the
         * #GtkSourceFile.
         * @param newline_type the new newline type.
         */
        set_newline_type(newline_type: NewlineType | null): void;
    }

    namespace Gutter {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::view': (pspec: GObject.ParamSpec) => void;
            'notify::window-type': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            view: View;
            window_type: Gtk.TextWindowType;
            windowType: Gtk.TextWindowType;
        }
    }

    class Gutter extends GObject.Object {
        static $gtype: GObject.GType<Gutter>;

        // Properties

        /**
         * The #GtkSourceView of the gutter.
         */
        get view(): View;
        /**
         * The text window type on which the window is placed.
         */
        get window_type(): Gtk.TextWindowType;
        /**
         * The text window type on which the window is placed.
         */
        get windowType(): Gtk.TextWindowType;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Gutter.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Gutter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Gutter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gutter.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Gutter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gutter.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Gutter.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gutter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

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

    namespace GutterRenderer {
        // Signal signatures
        interface SignalSignatures extends GObject.InitiallyUnowned.SignalSignatures {
            activate: (arg0: Gtk.TextIter, arg1: Gdk.Rectangle, arg2: Gdk.Event) => void;
            'query-activatable': (arg0: Gtk.TextIter, arg1: Gdk.Rectangle, arg2: Gdk.Event) => boolean | void;
            'query-data': (arg0: Gtk.TextIter, arg1: Gtk.TextIter, arg2: GutterRendererState) => void;
            'query-tooltip': (
                arg0: Gtk.TextIter,
                arg1: Gdk.Rectangle,
                arg2: number,
                arg3: number,
                arg4: Gtk.Tooltip,
            ) => boolean | void;
            'queue-draw': () => void;
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

        interface ConstructorProps extends GObject.InitiallyUnowned.ConstructorProps {
            alignment_mode: GutterRendererAlignmentMode;
            alignmentMode: GutterRendererAlignmentMode;
            background_rgba: Gdk.RGBA;
            backgroundRgba: Gdk.RGBA;
            background_set: boolean;
            backgroundSet: boolean;
            size: number;
            view: Gtk.TextView;
            visible: boolean;
            window_type: Gtk.TextWindowType;
            windowType: Gtk.TextWindowType;
            xalign: number;
            xpad: number;
            yalign: number;
            ypad: number;
        }
    }

    abstract class GutterRenderer extends GObject.InitiallyUnowned {
        static $gtype: GObject.GType<GutterRenderer>;

        // Properties

        /**
         * The alignment mode of the renderer. This can be used to indicate
         * that in the case a cell spans multiple lines (due to text wrapping)
         * the alignment should work on either the full cell, the first line
         * or the last line.
         */
        get alignment_mode(): GutterRendererAlignmentMode;
        set alignment_mode(val: GutterRendererAlignmentMode);
        /**
         * The alignment mode of the renderer. This can be used to indicate
         * that in the case a cell spans multiple lines (due to text wrapping)
         * the alignment should work on either the full cell, the first line
         * or the last line.
         */
        get alignmentMode(): GutterRendererAlignmentMode;
        set alignmentMode(val: GutterRendererAlignmentMode);
        get background_rgba(): Gdk.RGBA;
        set background_rgba(val: Gdk.RGBA);
        get backgroundRgba(): Gdk.RGBA;
        set backgroundRgba(val: Gdk.RGBA);
        get background_set(): boolean;
        set background_set(val: boolean);
        get backgroundSet(): boolean;
        set backgroundSet(val: boolean);
        get size(): number;
        set size(val: number);
        /**
         * The view on which the renderer is placed.
         */
        get view(): Gtk.TextView;
        /**
         * The visibility of the renderer.
         */
        get visible(): boolean;
        set visible(val: boolean);
        /**
         * The window type of the view on which the renderer is placed (left,
         * or right).
         */
        get window_type(): Gtk.TextWindowType;
        /**
         * The window type of the view on which the renderer is placed (left,
         * or right).
         */
        get windowType(): Gtk.TextWindowType;
        /**
         * The horizontal alignment of the renderer. Set to 0 for a left
         * alignment. 1 for a right alignment. And 0.5 for centering the cells.
         * A value lower than 0 doesn't modify the alignment.
         */
        get xalign(): number;
        set xalign(val: number);
        /**
         * The left and right padding of the renderer.
         */
        get xpad(): number;
        set xpad(val: number);
        /**
         * The vertical alignment of the renderer. Set to 0 for a top
         * alignment. 1 for a bottom alignment. And 0.5 for centering the cells.
         * A value lower than 0 doesn't modify the alignment.
         */
        get yalign(): number;
        set yalign(val: number);
        /**
         * The top and bottom padding of the renderer.
         */
        get ypad(): number;
        set ypad(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GutterRenderer.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<GutterRenderer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof GutterRenderer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GutterRenderer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GutterRenderer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GutterRenderer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GutterRenderer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GutterRenderer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Emits the #GtkSourceGutterRenderer::activate signal of the renderer. This is
         * called from #GtkSourceGutter and should never have to be called manually.
         * @param iter a #GtkTextIter at the start of the line where the renderer is activated
         * @param area a #GdkRectangle of the cell area where the renderer is activated
         * @param event the event that triggered the activation
         */
        vfunc_activate(iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): void;
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
        vfunc_begin(
            cr: cairo.Context,
            background_area: Gdk.Rectangle,
            cell_area: Gdk.Rectangle,
            start: Gtk.TextIter,
            end: Gtk.TextIter,
        ): void;
        /**
         * This is called when the text buffer changes for `renderer`.
         * @param old_buffer the old #GtkTextBuffer.
         */
        vfunc_change_buffer(old_buffer?: Gtk.TextBuffer | null): void;
        /**
         * This is called when the text view changes for `renderer`.
         * @param old_view the old #GtkTextView.
         */
        vfunc_change_view(old_view?: Gtk.TextView | null): void;
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
        vfunc_draw(
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
        vfunc_end(): void;
        /**
         * Get whether the renderer is activatable at the location in `event`. This is
         * called from #GtkSourceGutter to determine whether a renderer is activatable
         * using the mouse pointer.
         * @param iter a #GtkTextIter at the start of the line to be activated
         * @param area a #GdkRectangle of the cell area to be activated
         * @param event the event that triggered the query
         */
        vfunc_query_activatable(iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): boolean;
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
        vfunc_query_data(start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState): void;
        /**
         * Emits the #GtkSourceGutterRenderer::query-tooltip signal. This function is
         * called from #GtkSourceGutter. Implementations can override the default signal
         * handler or can connect to the signal externally.
         * @param iter a #GtkTextIter.
         * @param area a #GdkRectangle.
         * @param x The x position of the tooltip.
         * @param y The y position of the tooltip.
         * @param tooltip a #GtkTooltip.
         */
        vfunc_query_tooltip(
            iter: Gtk.TextIter,
            area: Gdk.Rectangle,
            x: number,
            y: number,
            tooltip: Gtk.Tooltip,
        ): boolean;
        /**
         * Emits the #GtkSourceGutterRenderer::queue-draw signal of the renderer. Call
         * this from an implementation to inform that the renderer has changed such that
         * it needs to redraw.
         */
        vfunc_queue_draw(): void;

        // Methods

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
            state: GutterRendererState | null,
        ): void;
        /**
         * Called when drawing a region of lines has ended.
         */
        end(): void;
        /**
         * Get the x-alignment and y-alignment of the gutter renderer.
         */
        get_alignment(): [number, number];
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
        get_background(): [boolean, Gdk.RGBA | null];
        /**
         * Get the x-padding and y-padding of the gutter renderer.
         */
        get_padding(): [number, number];
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
        query_data(start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState | null): void;
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
        set_alignment_mode(mode: GutterRendererAlignmentMode | null): void;
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

    namespace GutterRendererPixbuf {
        // Signal signatures
        interface SignalSignatures extends GutterRenderer.SignalSignatures {
            'notify::gicon': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::pixbuf': (pspec: GObject.ParamSpec) => void;
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

        interface ConstructorProps extends GutterRenderer.ConstructorProps {
            gicon: Gio.Icon;
            icon_name: string;
            iconName: string;
            pixbuf: GdkPixbuf.Pixbuf;
        }
    }

    class GutterRendererPixbuf extends GutterRenderer {
        static $gtype: GObject.GType<GutterRendererPixbuf>;

        // Properties

        get gicon(): Gio.Icon;
        set gicon(val: Gio.Icon);
        get icon_name(): string;
        set icon_name(val: string);
        get iconName(): string;
        set iconName(val: string);
        get pixbuf(): GdkPixbuf.Pixbuf;
        set pixbuf(val: GdkPixbuf.Pixbuf);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GutterRendererPixbuf.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<GutterRendererPixbuf.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): GutterRendererPixbuf;

        // Signals

        connect<K extends keyof GutterRendererPixbuf.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GutterRendererPixbuf.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GutterRendererPixbuf.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GutterRendererPixbuf.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GutterRendererPixbuf.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GutterRendererPixbuf.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

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

    namespace GutterRendererText {
        // Signal signatures
        interface SignalSignatures extends GutterRenderer.SignalSignatures {
            'notify::markup': (pspec: GObject.ParamSpec) => void;
            'notify::text': (pspec: GObject.ParamSpec) => void;
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

        interface ConstructorProps extends GutterRenderer.ConstructorProps {
            markup: string;
            text: string;
        }
    }

    class GutterRendererText extends GutterRenderer {
        static $gtype: GObject.GType<GutterRendererText>;

        // Properties

        get markup(): string;
        set markup(val: string);
        get text(): string;
        set text(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GutterRendererText.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<GutterRendererText.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): GutterRendererText;

        // Signals

        connect<K extends keyof GutterRendererText.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GutterRendererText.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GutterRendererText.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GutterRendererText.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GutterRendererText.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GutterRendererText.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Measures the text provided using the pango layout used by the
         * #GtkSourceGutterRendererText.
         * @param text the text to measure.
         */
        measure(text: string): [number, number];
        /**
         * Measures the pango markup provided using the pango layout used by the
         * #GtkSourceGutterRendererText.
         * @param markup the pango markup to measure.
         */
        measure_markup(markup: string): [number, number];
        set_markup(markup: string, length: number): void;
        set_text(text: string, length: number): void;
    }

    namespace Language {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::hidden': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::section': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            hidden: boolean;
            id: string;
            name: string;
            section: string;
        }
    }

    class Language extends GObject.Object {
        static $gtype: GObject.GType<Language>;

        // Properties

        get hidden(): boolean;
        get id(): string;
        get name(): string;
        get section(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Language.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Language.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Language.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Language.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Language.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Language.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Language.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Language.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

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

    namespace LanguageManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::language-ids': (pspec: GObject.ParamSpec) => void;
            'notify::search-path': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            language_ids: string[];
            languageIds: string[];
            search_path: string[];
            searchPath: string[];
        }
    }

    class LanguageManager extends GObject.Object {
        static $gtype: GObject.GType<LanguageManager>;

        // Properties

        get language_ids(): string[];
        get languageIds(): string[];
        get search_path(): string[];
        set search_path(val: string[]);
        get searchPath(): string[];
        set searchPath(val: string[]);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: LanguageManager.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<LanguageManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): LanguageManager;

        // Signals

        connect<K extends keyof LanguageManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LanguageManager.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof LanguageManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LanguageManager.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof LanguageManager.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<LanguageManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Returns the default #GtkSourceLanguageManager instance.
         */
        static get_default(): LanguageManager;

        // Methods

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

    namespace Mark {
        // Signal signatures
        interface SignalSignatures extends Gtk.TextMark.SignalSignatures {
            'notify::category': (pspec: GObject.ParamSpec) => void;
            'notify::left-gravity': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gtk.TextMark.ConstructorProps {
            category: string;
        }
    }

    class Mark extends Gtk.TextMark {
        static $gtype: GObject.GType<Mark>;

        // Properties

        /**
         * The category of the #GtkSourceMark, classifies the mark and controls
         * which pixbuf is used and with which priority it is drawn.
         */
        get category(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Mark.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Mark.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string, category: string): Mark;
        // Conflicted with Gtk.TextMark.new

        static ['new'](...args: never[]): any;

        // Signals

        connect<K extends keyof Mark.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Mark.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Mark.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Mark.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Mark.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Mark.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

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
        prev(category: string): Mark | null;
    }

    namespace MarkAttributes {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'query-tooltip-markup': (arg0: Mark) => string;
            'query-tooltip-text': (arg0: Mark) => string;
            'notify::background': (pspec: GObject.ParamSpec) => void;
            'notify::gicon': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::pixbuf': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            background: Gdk.RGBA;
            gicon: Gio.Icon;
            icon_name: string;
            iconName: string;
            pixbuf: GdkPixbuf.Pixbuf;
        }
    }

    class MarkAttributes extends GObject.Object {
        static $gtype: GObject.GType<MarkAttributes>;

        // Properties

        /**
         * A color used for background of a line.
         */
        get background(): Gdk.RGBA;
        set background(val: Gdk.RGBA);
        /**
         * A #GIcon that may be a base of a rendered icon.
         */
        get gicon(): Gio.Icon;
        set gicon(val: Gio.Icon);
        /**
         * An icon name that may be a base of a rendered icon.
         */
        get icon_name(): string;
        set icon_name(val: string);
        /**
         * An icon name that may be a base of a rendered icon.
         */
        get iconName(): string;
        set iconName(val: string);
        /**
         * A #GdkPixbuf that may be a base of a rendered icon.
         */
        get pixbuf(): GdkPixbuf.Pixbuf;
        set pixbuf(val: GdkPixbuf.Pixbuf);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MarkAttributes.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MarkAttributes.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MarkAttributes;

        // Signals

        connect<K extends keyof MarkAttributes.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MarkAttributes.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MarkAttributes.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MarkAttributes.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MarkAttributes.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MarkAttributes.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Stores background color in `background`.
         * @returns whether background color for @attributes was set.
         */
        get_background(): [boolean, Gdk.RGBA];
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

    namespace PrintCompositor {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::body-font-name': (pspec: GObject.ParamSpec) => void;
            'notify::buffer': (pspec: GObject.ParamSpec) => void;
            'notify::footer-font-name': (pspec: GObject.ParamSpec) => void;
            'notify::header-font-name': (pspec: GObject.ParamSpec) => void;
            'notify::highlight-syntax': (pspec: GObject.ParamSpec) => void;
            'notify::line-numbers-font-name': (pspec: GObject.ParamSpec) => void;
            'notify::n-pages': (pspec: GObject.ParamSpec) => void;
            'notify::print-footer': (pspec: GObject.ParamSpec) => void;
            'notify::print-header': (pspec: GObject.ParamSpec) => void;
            'notify::print-line-numbers': (pspec: GObject.ParamSpec) => void;
            'notify::tab-width': (pspec: GObject.ParamSpec) => void;
            'notify::wrap-mode': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            body_font_name: string;
            bodyFontName: string;
            buffer: Buffer;
            footer_font_name: string;
            footerFontName: string;
            header_font_name: string;
            headerFontName: string;
            highlight_syntax: boolean;
            highlightSyntax: boolean;
            line_numbers_font_name: string;
            lineNumbersFontName: string;
            n_pages: number;
            nPages: number;
            print_footer: boolean;
            printFooter: boolean;
            print_header: boolean;
            printHeader: boolean;
            print_line_numbers: number;
            printLineNumbers: number;
            tab_width: number;
            tabWidth: number;
            wrap_mode: Gtk.WrapMode;
            wrapMode: Gtk.WrapMode;
        }
    }

    class PrintCompositor extends GObject.Object {
        static $gtype: GObject.GType<PrintCompositor>;

        // Properties

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
        get body_font_name(): string;
        set body_font_name(val: string);
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
        get bodyFontName(): string;
        set bodyFontName(val: string);
        /**
         * The GtkSourceBuffer object to print.
         */
        get buffer(): Buffer;
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
        get footer_font_name(): string;
        set footer_font_name(val: string);
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
        get footerFontName(): string;
        set footerFontName(val: string);
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
        get header_font_name(): string;
        set header_font_name(val: string);
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
        get headerFontName(): string;
        set headerFontName(val: string);
        /**
         * Whether to print the document with highlighted syntax.
         *
         * The value of this property cannot be changed anymore after the first
         * call to the gtk_source_print_compositor_paginate() function.
         */
        get highlight_syntax(): boolean;
        set highlight_syntax(val: boolean);
        /**
         * Whether to print the document with highlighted syntax.
         *
         * The value of this property cannot be changed anymore after the first
         * call to the gtk_source_print_compositor_paginate() function.
         */
        get highlightSyntax(): boolean;
        set highlightSyntax(val: boolean);
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
        get line_numbers_font_name(): string;
        set line_numbers_font_name(val: string);
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
        get lineNumbersFontName(): string;
        set lineNumbersFontName(val: string);
        /**
         * The number of pages in the document or <code>-1</code> if the
         * document has not been completely paginated.
         */
        get n_pages(): number;
        /**
         * The number of pages in the document or <code>-1</code> if the
         * document has not been completely paginated.
         */
        get nPages(): number;
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
        get print_footer(): boolean;
        set print_footer(val: boolean);
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
        get printFooter(): boolean;
        set printFooter(val: boolean);
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
        get print_header(): boolean;
        set print_header(val: boolean);
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
        get printHeader(): boolean;
        set printHeader(val: boolean);
        /**
         * Interval of printed line numbers. If this property is set to 0 no
         * numbers will be printed.  If greater than 0, a number will be
         * printed every "print-line-numbers" lines (i.e. 1 will print all line numbers).
         *
         * The value of this property cannot be changed anymore after the first
         * call to the gtk_source_print_compositor_paginate() function.
         */
        get print_line_numbers(): number;
        set print_line_numbers(val: number);
        /**
         * Interval of printed line numbers. If this property is set to 0 no
         * numbers will be printed.  If greater than 0, a number will be
         * printed every "print-line-numbers" lines (i.e. 1 will print all line numbers).
         *
         * The value of this property cannot be changed anymore after the first
         * call to the gtk_source_print_compositor_paginate() function.
         */
        get printLineNumbers(): number;
        set printLineNumbers(val: number);
        /**
         * Width of a tab character expressed in spaces.
         *
         * The value of this property cannot be changed anymore after the first
         * call to the gtk_source_print_compositor_paginate() function.
         */
        get tab_width(): number;
        set tab_width(val: number);
        /**
         * Width of a tab character expressed in spaces.
         *
         * The value of this property cannot be changed anymore after the first
         * call to the gtk_source_print_compositor_paginate() function.
         */
        get tabWidth(): number;
        set tabWidth(val: number);
        /**
         * Whether to wrap lines never, at word boundaries, or at character boundaries.
         *
         * The value of this property cannot be changed anymore after the first
         * call to the gtk_source_print_compositor_paginate() function.
         */
        get wrap_mode(): Gtk.WrapMode;
        set wrap_mode(val: Gtk.WrapMode);
        /**
         * Whether to wrap lines never, at word boundaries, or at character boundaries.
         *
         * The value of this property cannot be changed anymore after the first
         * call to the gtk_source_print_compositor_paginate() function.
         */
        get wrapMode(): Gtk.WrapMode;
        set wrapMode(val: Gtk.WrapMode);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PrintCompositor.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PrintCompositor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](buffer: Buffer): PrintCompositor;

        static new_from_view(view: View): PrintCompositor;

        // Signals

        connect<K extends keyof PrintCompositor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PrintCompositor.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PrintCompositor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PrintCompositor.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PrintCompositor.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PrintCompositor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

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
        get_bottom_margin(unit: Gtk.Unit | null): number;
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
        get_left_margin(unit: Gtk.Unit | null): number;
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
        get_right_margin(unit: Gtk.Unit | null): number;
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
        get_top_margin(unit: Gtk.Unit | null): number;
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
        set_bottom_margin(margin: number, unit: Gtk.Unit | null): void;
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
        set_left_margin(margin: number, unit: Gtk.Unit | null): void;
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
        set_right_margin(margin: number, unit: Gtk.Unit | null): void;
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
        set_top_margin(margin: number, unit: Gtk.Unit | null): void;
        /**
         * Sets the line wrapping mode for the printed text.
         *
         * This function cannot be called anymore after the first call to the
         * gtk_source_print_compositor_paginate() function.
         * @param wrap_mode a #GtkWrapMode.
         */
        set_wrap_mode(wrap_mode: Gtk.WrapMode | null): void;
    }

    namespace Region {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::buffer': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            buffer: Gtk.TextBuffer;
        }
    }

    class Region extends GObject.Object {
        static $gtype: GObject.GType<Region>;

        // Properties

        /**
         * The #GtkTextBuffer. The #GtkSourceRegion has a weak reference to the
         * buffer.
         */
        get buffer(): Gtk.TextBuffer;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Region.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Region.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](buffer: Gtk.TextBuffer): Region;

        // Signals

        connect<K extends keyof Region.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Region.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Region.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Region.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Region.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Region.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

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
        get_bounds(): [boolean, Gtk.TextIter | null, Gtk.TextIter | null];
        get_buffer(): Gtk.TextBuffer | null;
        /**
         * Initializes a #GtkSourceRegionIter to the first subregion of `region`. If
         * `region` is empty, `iter` will be initialized to the end iterator.
         */
        get_start_region_iter(): RegionIter;
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

    namespace SearchContext {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::buffer': (pspec: GObject.ParamSpec) => void;
            'notify::highlight': (pspec: GObject.ParamSpec) => void;
            'notify::match-style': (pspec: GObject.ParamSpec) => void;
            'notify::occurrences-count': (pspec: GObject.ParamSpec) => void;
            'notify::regex-error': (pspec: GObject.ParamSpec) => void;
            'notify::settings': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            buffer: Buffer;
            highlight: boolean;
            match_style: Style;
            matchStyle: Style;
            occurrences_count: number;
            occurrencesCount: number;
            regex_error: any;
            regexError: any;
            settings: SearchSettings;
        }
    }

    class SearchContext extends GObject.Object {
        static $gtype: GObject.GType<SearchContext>;

        // Properties

        /**
         * The #GtkSourceBuffer associated to the search context.
         */
        get buffer(): Buffer;
        /**
         * Highlight the search occurrences.
         */
        get highlight(): boolean;
        set highlight(val: boolean);
        /**
         * A #GtkSourceStyle, or %NULL for theme's scheme default style.
         */
        get match_style(): Style;
        set match_style(val: Style);
        /**
         * A #GtkSourceStyle, or %NULL for theme's scheme default style.
         */
        get matchStyle(): Style;
        set matchStyle(val: Style);
        /**
         * The total number of search occurrences. If the search is disabled,
         * the value is 0. If the buffer is not already fully scanned, the value
         * is -1.
         */
        get occurrences_count(): number;
        /**
         * The total number of search occurrences. If the search is disabled,
         * the value is 0. If the buffer is not already fully scanned, the value
         * is -1.
         */
        get occurrencesCount(): number;
        /**
         * If the regex search pattern doesn't follow all the rules, this
         * #GError property will be set. If the pattern is valid, the value is
         * %NULL.
         *
         * Free with g_error_free().
         */
        get regex_error(): any;
        /**
         * If the regex search pattern doesn't follow all the rules, this
         * #GError property will be set. If the pattern is valid, the value is
         * %NULL.
         *
         * Free with g_error_free().
         */
        get regexError(): any;
        /**
         * The #GtkSourceSearchSettings associated to the search context.
         *
         * This property is construct-only since version 4.0.
         */
        get settings(): SearchSettings;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SearchContext.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SearchContext.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](buffer: Buffer, settings?: SearchSettings | null): SearchContext;

        // Signals

        connect<K extends keyof SearchContext.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SearchContext.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SearchContext.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SearchContext.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SearchContext.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SearchContext.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

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
        backward(iter: Gtk.TextIter): [boolean, Gtk.TextIter | null, Gtk.TextIter | null, boolean];
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
         */
        backward_async(
            iter: Gtk.TextIter,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<[Gtk.TextIter | null, Gtk.TextIter | null, boolean]>;
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
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
        ): globalThis.Promise<[Gtk.TextIter | null, Gtk.TextIter | null, boolean]> | void;
        /**
         * Finishes a backward search started with
         * gtk_source_search_context_backward_async().
         *
         * See the documentation of gtk_source_search_context_backward() for more
         * details.
         * @param result a #GAsyncResult.
         * @returns whether a match was found.
         */
        backward_finish(result: Gio.AsyncResult): [boolean, Gtk.TextIter | null, Gtk.TextIter | null, boolean];
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
        forward(iter: Gtk.TextIter): [boolean, Gtk.TextIter | null, Gtk.TextIter | null, boolean];
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
         */
        forward_async(
            iter: Gtk.TextIter,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<[Gtk.TextIter | null, Gtk.TextIter | null, boolean]>;
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
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
        ): globalThis.Promise<[Gtk.TextIter | null, Gtk.TextIter | null, boolean]> | void;
        /**
         * Finishes a forward search started with
         * gtk_source_search_context_forward_async().
         *
         * See the documentation of gtk_source_search_context_forward() for more
         * details.
         * @param result a #GAsyncResult.
         * @returns whether a match was found.
         */
        forward_finish(result: Gio.AsyncResult): [boolean, Gtk.TextIter | null, Gtk.TextIter | null, boolean];
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

    namespace SearchSettings {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::at-word-boundaries': (pspec: GObject.ParamSpec) => void;
            'notify::case-sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::regex-enabled': (pspec: GObject.ParamSpec) => void;
            'notify::search-text': (pspec: GObject.ParamSpec) => void;
            'notify::wrap-around': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            at_word_boundaries: boolean;
            atWordBoundaries: boolean;
            case_sensitive: boolean;
            caseSensitive: boolean;
            regex_enabled: boolean;
            regexEnabled: boolean;
            search_text: string;
            searchText: string;
            wrap_around: boolean;
            wrapAround: boolean;
        }
    }

    class SearchSettings extends GObject.Object {
        static $gtype: GObject.GType<SearchSettings>;

        // Properties

        /**
         * If %TRUE, a search match must start and end a word. The match can
         * span multiple words.
         */
        get at_word_boundaries(): boolean;
        set at_word_boundaries(val: boolean);
        /**
         * If %TRUE, a search match must start and end a word. The match can
         * span multiple words.
         */
        get atWordBoundaries(): boolean;
        set atWordBoundaries(val: boolean);
        /**
         * Whether the search is case sensitive.
         */
        get case_sensitive(): boolean;
        set case_sensitive(val: boolean);
        /**
         * Whether the search is case sensitive.
         */
        get caseSensitive(): boolean;
        set caseSensitive(val: boolean);
        /**
         * Search by regular expressions with
         * #GtkSourceSearchSettings:search-text as the pattern.
         */
        get regex_enabled(): boolean;
        set regex_enabled(val: boolean);
        /**
         * Search by regular expressions with
         * #GtkSourceSearchSettings:search-text as the pattern.
         */
        get regexEnabled(): boolean;
        set regexEnabled(val: boolean);
        /**
         * A search string, or %NULL if the search is disabled. If the regular
         * expression search is enabled, #GtkSourceSearchSettings:search-text is
         * the pattern.
         */
        get search_text(): string;
        set search_text(val: string);
        /**
         * A search string, or %NULL if the search is disabled. If the regular
         * expression search is enabled, #GtkSourceSearchSettings:search-text is
         * the pattern.
         */
        get searchText(): string;
        set searchText(val: string);
        /**
         * For a forward search, continue at the beginning of the buffer if no
         * search occurrence is found. For a backward search, continue at the
         * end of the buffer.
         */
        get wrap_around(): boolean;
        set wrap_around(val: boolean);
        /**
         * For a forward search, continue at the beginning of the buffer if no
         * search occurrence is found. For a backward search, continue at the
         * end of the buffer.
         */
        get wrapAround(): boolean;
        set wrapAround(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SearchSettings.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SearchSettings.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SearchSettings;

        // Signals

        connect<K extends keyof SearchSettings.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SearchSettings.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SearchSettings.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SearchSettings.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SearchSettings.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SearchSettings.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

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

    namespace SpaceDrawer {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::enable-matrix': (pspec: GObject.ParamSpec) => void;
            'notify::matrix': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            enable_matrix: boolean;
            enableMatrix: boolean;
            matrix: GLib.Variant;
        }
    }

    class SpaceDrawer extends GObject.Object {
        static $gtype: GObject.GType<SpaceDrawer>;

        // Properties

        /**
         * Whether the #GtkSourceSpaceDrawer:matrix property is enabled.
         */
        get enable_matrix(): boolean;
        set enable_matrix(val: boolean);
        /**
         * Whether the #GtkSourceSpaceDrawer:matrix property is enabled.
         */
        get enableMatrix(): boolean;
        set enableMatrix(val: boolean);
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
        get matrix(): GLib.Variant;
        set matrix(val: GLib.Variant);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SpaceDrawer.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SpaceDrawer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SpaceDrawer;

        // Signals

        connect<K extends keyof SpaceDrawer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SpaceDrawer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SpaceDrawer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SpaceDrawer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SpaceDrawer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SpaceDrawer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

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
        bind_matrix_setting(settings: Gio.Settings, key: string, flags: Gio.SettingsBindFlags | null): void;
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
        get_types_for_locations(locations: SpaceLocationFlags | null): SpaceTypeFlags;
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
        set_types_for_locations(locations: SpaceLocationFlags | null, types: SpaceTypeFlags | null): void;
    }

    namespace Style {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Style extends GObject.Object {
        static $gtype: GObject.GType<Style>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Style.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Style.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Style.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Style.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Style.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Style.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Style.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Style.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * This function modifies the #GtkTextTag properties that are related to the
         * #GtkSourceStyle attributes. Other #GtkTextTag properties are left untouched.
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

    namespace StyleScheme {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class StyleScheme extends GObject.Object {
        static $gtype: GObject.GType<StyleScheme>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StyleScheme.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<StyleScheme.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof StyleScheme.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StyleScheme.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof StyleScheme.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StyleScheme.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof StyleScheme.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<StyleScheme.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_authors(): string[] | null;
        get_description(): string | null;
        get_filename(): string | null;
        get_id(): string;
        get_name(): string;
        get_style(style_id: string): Style | null;
    }

    namespace StyleSchemeManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            changed: () => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class StyleSchemeManager extends GObject.Object {
        static $gtype: GObject.GType<StyleSchemeManager>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StyleSchemeManager.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<StyleSchemeManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): StyleSchemeManager;

        // Signals

        connect<K extends keyof StyleSchemeManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StyleSchemeManager.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof StyleSchemeManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StyleSchemeManager.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof StyleSchemeManager.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<StyleSchemeManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static get_default(): StyleSchemeManager;

        // Methods

        /**
         * Adds `path` at the end of the `manager'`s search path (i.e., at the lowest
         * priority). See gtk_source_style_scheme_manager_set_search_path().
         * @param path a directory or a filename.
         */
        append_search_path(path: string): void;
        /**
         * Marks any currently cached information about the available style schemes as
         * invalid. All the available style schemes will be reloaded next time the
         * `manager` is accessed.
         */
        force_rescan(): void;
        get_scheme(scheme_id: string): StyleScheme | null;
        get_schemes(): StyleScheme[];
        /**
         * Gets the search path of `manager`.
         *
         * See also gtk_source_style_scheme_manager_set_search_path().
         * @returns the search path of   @manager.
         */
        get_search_path(): string[];
        /**
         * Adds `path` at the beginning of the `manager'`s search path (i.e., at the
         * highest priority). See gtk_source_style_scheme_manager_set_search_path().
         * @param path a directory or a filename.
         */
        prepend_search_path(path: string): void;
        /**
         * Sets the search path of `manager`.
         *
         * `manager` will then try to load style schemes from the locations provided in
         * the search path.
         *
         * The search path can contain:
         * - Paths to directories;
         * - Paths to individual files.
         *
         * To load the style schemes from the filesystem, #GtkSourceStyleSchemeManager
         * first looks at the first path, then the second path, etc. If there are
         * duplicates (same #GtkSourceStyleScheme ID), the first encountered one has the
         * priority.
         *
         * So the list of paths must be set in priority order, from highest to lowest.
         * @param path a %NULL-terminated array of   strings, or %NULL to reset the search path to its default value.
         */
        set_search_path(path?: string[] | null): void;
    }

    namespace Tag {
        // Signal signatures
        interface SignalSignatures extends Gtk.TextTag.SignalSignatures {
            'notify::draw-spaces': (pspec: GObject.ParamSpec) => void;
            'notify::draw-spaces-set': (pspec: GObject.ParamSpec) => void;
            'notify::accumulative-margin': (pspec: GObject.ParamSpec) => void;
            'notify::background': (pspec: GObject.ParamSpec) => void;
            'notify::background-full-height': (pspec: GObject.ParamSpec) => void;
            'notify::background-full-height-set': (pspec: GObject.ParamSpec) => void;
            'notify::background-gdk': (pspec: GObject.ParamSpec) => void;
            'notify::background-rgba': (pspec: GObject.ParamSpec) => void;
            'notify::background-set': (pspec: GObject.ParamSpec) => void;
            'notify::direction': (pspec: GObject.ParamSpec) => void;
            'notify::editable': (pspec: GObject.ParamSpec) => void;
            'notify::editable-set': (pspec: GObject.ParamSpec) => void;
            'notify::fallback': (pspec: GObject.ParamSpec) => void;
            'notify::fallback-set': (pspec: GObject.ParamSpec) => void;
            'notify::family': (pspec: GObject.ParamSpec) => void;
            'notify::family-set': (pspec: GObject.ParamSpec) => void;
            'notify::font': (pspec: GObject.ParamSpec) => void;
            'notify::font-desc': (pspec: GObject.ParamSpec) => void;
            'notify::font-features': (pspec: GObject.ParamSpec) => void;
            'notify::font-features-set': (pspec: GObject.ParamSpec) => void;
            'notify::foreground': (pspec: GObject.ParamSpec) => void;
            'notify::foreground-gdk': (pspec: GObject.ParamSpec) => void;
            'notify::foreground-rgba': (pspec: GObject.ParamSpec) => void;
            'notify::foreground-set': (pspec: GObject.ParamSpec) => void;
            'notify::indent': (pspec: GObject.ParamSpec) => void;
            'notify::indent-set': (pspec: GObject.ParamSpec) => void;
            'notify::invisible': (pspec: GObject.ParamSpec) => void;
            'notify::invisible-set': (pspec: GObject.ParamSpec) => void;
            'notify::justification': (pspec: GObject.ParamSpec) => void;
            'notify::justification-set': (pspec: GObject.ParamSpec) => void;
            'notify::language': (pspec: GObject.ParamSpec) => void;
            'notify::language-set': (pspec: GObject.ParamSpec) => void;
            'notify::left-margin': (pspec: GObject.ParamSpec) => void;
            'notify::left-margin-set': (pspec: GObject.ParamSpec) => void;
            'notify::letter-spacing': (pspec: GObject.ParamSpec) => void;
            'notify::letter-spacing-set': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::paragraph-background': (pspec: GObject.ParamSpec) => void;
            'notify::paragraph-background-gdk': (pspec: GObject.ParamSpec) => void;
            'notify::paragraph-background-rgba': (pspec: GObject.ParamSpec) => void;
            'notify::paragraph-background-set': (pspec: GObject.ParamSpec) => void;
            'notify::pixels-above-lines': (pspec: GObject.ParamSpec) => void;
            'notify::pixels-above-lines-set': (pspec: GObject.ParamSpec) => void;
            'notify::pixels-below-lines': (pspec: GObject.ParamSpec) => void;
            'notify::pixels-below-lines-set': (pspec: GObject.ParamSpec) => void;
            'notify::pixels-inside-wrap': (pspec: GObject.ParamSpec) => void;
            'notify::pixels-inside-wrap-set': (pspec: GObject.ParamSpec) => void;
            'notify::right-margin': (pspec: GObject.ParamSpec) => void;
            'notify::right-margin-set': (pspec: GObject.ParamSpec) => void;
            'notify::rise': (pspec: GObject.ParamSpec) => void;
            'notify::rise-set': (pspec: GObject.ParamSpec) => void;
            'notify::scale': (pspec: GObject.ParamSpec) => void;
            'notify::scale-set': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::size-points': (pspec: GObject.ParamSpec) => void;
            'notify::size-set': (pspec: GObject.ParamSpec) => void;
            'notify::stretch': (pspec: GObject.ParamSpec) => void;
            'notify::stretch-set': (pspec: GObject.ParamSpec) => void;
            'notify::strikethrough': (pspec: GObject.ParamSpec) => void;
            'notify::strikethrough-rgba': (pspec: GObject.ParamSpec) => void;
            'notify::strikethrough-rgba-set': (pspec: GObject.ParamSpec) => void;
            'notify::strikethrough-set': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::style-set': (pspec: GObject.ParamSpec) => void;
            'notify::tabs': (pspec: GObject.ParamSpec) => void;
            'notify::tabs-set': (pspec: GObject.ParamSpec) => void;
            'notify::underline': (pspec: GObject.ParamSpec) => void;
            'notify::underline-rgba': (pspec: GObject.ParamSpec) => void;
            'notify::underline-rgba-set': (pspec: GObject.ParamSpec) => void;
            'notify::underline-set': (pspec: GObject.ParamSpec) => void;
            'notify::variant': (pspec: GObject.ParamSpec) => void;
            'notify::variant-set': (pspec: GObject.ParamSpec) => void;
            'notify::weight': (pspec: GObject.ParamSpec) => void;
            'notify::weight-set': (pspec: GObject.ParamSpec) => void;
            'notify::wrap-mode': (pspec: GObject.ParamSpec) => void;
            'notify::wrap-mode-set': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gtk.TextTag.ConstructorProps {
            draw_spaces: boolean;
            drawSpaces: boolean;
            draw_spaces_set: boolean;
            drawSpacesSet: boolean;
        }
    }

    class Tag extends Gtk.TextTag {
        static $gtype: GObject.GType<Tag>;

        // Properties

        /**
         * Whether to draw white spaces. This property takes precedence over the value
         * defined by the GtkSourceSpaceDrawer's #GtkSourceSpaceDrawer:matrix property
         * (only where the tag is applied).
         *
         * Setting this property also changes #GtkSourceTag:draw-spaces-set to
         * %TRUE.
         */
        get draw_spaces(): boolean;
        set draw_spaces(val: boolean);
        /**
         * Whether to draw white spaces. This property takes precedence over the value
         * defined by the GtkSourceSpaceDrawer's #GtkSourceSpaceDrawer:matrix property
         * (only where the tag is applied).
         *
         * Setting this property also changes #GtkSourceTag:draw-spaces-set to
         * %TRUE.
         */
        get drawSpaces(): boolean;
        set drawSpaces(val: boolean);
        /**
         * Whether the #GtkSourceTag:draw-spaces property is set and must be
         * taken into account.
         */
        get draw_spaces_set(): boolean;
        set draw_spaces_set(val: boolean);
        /**
         * Whether the #GtkSourceTag:draw-spaces property is set and must be
         * taken into account.
         */
        get drawSpacesSet(): boolean;
        set drawSpacesSet(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Tag.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Tag.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name?: string | null): Tag;

        // Signals

        connect<K extends keyof Tag.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Tag.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Tag.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Tag.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Tag.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Tag.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace View {
        // Signal signatures
        interface SignalSignatures extends Gtk.TextView.SignalSignatures {
            'change-case': (arg0: ChangeCaseType) => void;
            'change-number': (arg0: number) => void;
            'join-lines': () => void;
            'line-mark-activated': (arg0: Gtk.TextIter, arg1: Gdk.Event) => void;
            'move-lines': (arg0: boolean) => void;
            'move-to-matching-bracket': (arg0: boolean) => void;
            'move-words': (arg0: number) => void;
            redo: () => void;
            'show-completion': () => void;
            'smart-home-end': (arg0: Gtk.TextIter, arg1: number) => void;
            undo: () => void;
            'notify::auto-indent': (pspec: GObject.ParamSpec) => void;
            'notify::background-pattern': (pspec: GObject.ParamSpec) => void;
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
            'notify::hadjustment': (pspec: GObject.ParamSpec) => void;
            'notify::hscroll-policy': (pspec: GObject.ParamSpec) => void;
            'notify::vadjustment': (pspec: GObject.ParamSpec) => void;
            'notify::vscroll-policy': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.TextView.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.Scrollable.ConstructorProps {
            auto_indent: boolean;
            autoIndent: boolean;
            background_pattern: BackgroundPatternType;
            backgroundPattern: BackgroundPatternType;
            completion: Completion;
            highlight_current_line: boolean;
            highlightCurrentLine: boolean;
            indent_on_tab: boolean;
            indentOnTab: boolean;
            indent_width: number;
            indentWidth: number;
            insert_spaces_instead_of_tabs: boolean;
            insertSpacesInsteadOfTabs: boolean;
            right_margin_position: number;
            rightMarginPosition: number;
            show_line_marks: boolean;
            showLineMarks: boolean;
            show_line_numbers: boolean;
            showLineNumbers: boolean;
            show_right_margin: boolean;
            showRightMargin: boolean;
            smart_backspace: boolean;
            smartBackspace: boolean;
            smart_home_end: SmartHomeEndType;
            smartHomeEnd: SmartHomeEndType;
            space_drawer: SpaceDrawer;
            spaceDrawer: SpaceDrawer;
            tab_width: number;
            tabWidth: number;
        }
    }

    class View extends Gtk.TextView implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {
        static $gtype: GObject.GType<View>;

        // Properties

        get auto_indent(): boolean;
        set auto_indent(val: boolean);
        get autoIndent(): boolean;
        set autoIndent(val: boolean);
        /**
         * Draw a specific background pattern on the view.
         */
        get background_pattern(): BackgroundPatternType;
        set background_pattern(val: BackgroundPatternType);
        /**
         * Draw a specific background pattern on the view.
         */
        get backgroundPattern(): BackgroundPatternType;
        set backgroundPattern(val: BackgroundPatternType);
        /**
         * The completion object associated with the view
         */
        get completion(): Completion;
        get highlight_current_line(): boolean;
        set highlight_current_line(val: boolean);
        get highlightCurrentLine(): boolean;
        set highlightCurrentLine(val: boolean);
        get indent_on_tab(): boolean;
        set indent_on_tab(val: boolean);
        get indentOnTab(): boolean;
        set indentOnTab(val: boolean);
        /**
         * Width of an indentation step expressed in number of spaces.
         */
        get indent_width(): number;
        set indent_width(val: number);
        /**
         * Width of an indentation step expressed in number of spaces.
         */
        get indentWidth(): number;
        set indentWidth(val: number);
        get insert_spaces_instead_of_tabs(): boolean;
        set insert_spaces_instead_of_tabs(val: boolean);
        get insertSpacesInsteadOfTabs(): boolean;
        set insertSpacesInsteadOfTabs(val: boolean);
        /**
         * Position of the right margin.
         */
        get right_margin_position(): number;
        set right_margin_position(val: number);
        /**
         * Position of the right margin.
         */
        get rightMarginPosition(): number;
        set rightMarginPosition(val: number);
        /**
         * Whether to display line mark pixbufs
         */
        get show_line_marks(): boolean;
        set show_line_marks(val: boolean);
        /**
         * Whether to display line mark pixbufs
         */
        get showLineMarks(): boolean;
        set showLineMarks(val: boolean);
        /**
         * Whether to display line numbers
         */
        get show_line_numbers(): boolean;
        set show_line_numbers(val: boolean);
        /**
         * Whether to display line numbers
         */
        get showLineNumbers(): boolean;
        set showLineNumbers(val: boolean);
        /**
         * Whether to display the right margin.
         */
        get show_right_margin(): boolean;
        set show_right_margin(val: boolean);
        /**
         * Whether to display the right margin.
         */
        get showRightMargin(): boolean;
        set showRightMargin(val: boolean);
        /**
         * Whether smart Backspace should be used.
         */
        get smart_backspace(): boolean;
        set smart_backspace(val: boolean);
        /**
         * Whether smart Backspace should be used.
         */
        get smartBackspace(): boolean;
        set smartBackspace(val: boolean);
        /**
         * Set the behavior of the HOME and END keys.
         */
        get smart_home_end(): SmartHomeEndType;
        set smart_home_end(val: SmartHomeEndType);
        /**
         * Set the behavior of the HOME and END keys.
         */
        get smartHomeEnd(): SmartHomeEndType;
        set smartHomeEnd(val: SmartHomeEndType);
        /**
         * The #GtkSourceSpaceDrawer object associated with the view.
         */
        get space_drawer(): SpaceDrawer;
        /**
         * The #GtkSourceSpaceDrawer object associated with the view.
         */
        get spaceDrawer(): SpaceDrawer;
        /**
         * Width of a tab character expressed in number of spaces.
         */
        get tab_width(): number;
        set tab_width(val: number);
        /**
         * Width of a tab character expressed in number of spaces.
         */
        get tabWidth(): number;
        set tabWidth(val: number);

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

        static new_with_buffer(buffer: Buffer): View;

        // Signals

        connect<K extends keyof View.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, View.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof View.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, View.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof View.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<View.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_line_mark_activated(iter: Gtk.TextIter, event: Gdk.Event): void;
        vfunc_move_lines(down: boolean): void;
        vfunc_move_words(step: number): void;
        vfunc_redo(): void;
        vfunc_show_completion(): void;
        vfunc_undo(): void;

        // Methods

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
        get_gutter(window_type: Gtk.TextWindowType | null): Gutter;
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
        set_background_pattern(background_pattern: BackgroundPatternType | null): void;
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
        set_smart_home_end(smart_home_end: SmartHomeEndType | null): void;
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

        // Inherited properties
        /**
         * Horizontal #GtkAdjustment of the scrollable widget. This adjustment is
         * shared between the scrollable widget and its parent.
         */
        get hadjustment(): Gtk.Adjustment;
        set hadjustment(val: Gtk.Adjustment);
        /**
         * Determines whether horizontal scrolling should start once the scrollable
         * widget is allocated less than its minimum width or less than its natural width.
         */
        get hscroll_policy(): Gtk.ScrollablePolicy;
        set hscroll_policy(val: Gtk.ScrollablePolicy);
        /**
         * Determines whether horizontal scrolling should start once the scrollable
         * widget is allocated less than its minimum width or less than its natural width.
         */
        get hscrollPolicy(): Gtk.ScrollablePolicy;
        set hscrollPolicy(val: Gtk.ScrollablePolicy);
        /**
         * Verical #GtkAdjustment of the scrollable widget. This adjustment is shared
         * between the scrollable widget and its parent.
         */
        get vadjustment(): Gtk.Adjustment;
        set vadjustment(val: Gtk.Adjustment);
        /**
         * Determines whether vertical scrolling should start once the scrollable
         * widget is allocated less than its minimum height or less than its natural height.
         */
        get vscroll_policy(): Gtk.ScrollablePolicy;
        set vscroll_policy(val: Gtk.ScrollablePolicy);
        /**
         * Determines whether vertical scrolling should start once the scrollable
         * widget is allocated less than its minimum height or less than its natural height.
         */
        get vscrollPolicy(): Gtk.ScrollablePolicy;
        set vscrollPolicy(val: Gtk.ScrollablePolicy);

        // Inherited methods
        /**
         * Returns the size of a non-scrolling border around the
         * outside of the scrollable. An example for this would
         * be treeview headers. GTK+ can use this information to
         * display overlayed graphics, like the overshoot indication,
         * at the right position.
         * @returns %TRUE if @border has been set
         */
        get_border(): [boolean, Gtk.Border];
        /**
         * Retrieves the #GtkAdjustment used for horizontal scrolling.
         * @returns horizontal #GtkAdjustment.
         */
        get_hadjustment(): Gtk.Adjustment;
        /**
         * Gets the horizontal #GtkScrollablePolicy.
         * @returns The horizontal #GtkScrollablePolicy.
         */
        get_hscroll_policy(): Gtk.ScrollablePolicy;
        /**
         * Retrieves the #GtkAdjustment used for vertical scrolling.
         * @returns vertical #GtkAdjustment.
         */
        get_vadjustment(): Gtk.Adjustment;
        /**
         * Gets the vertical #GtkScrollablePolicy.
         * @returns The vertical #GtkScrollablePolicy.
         */
        get_vscroll_policy(): Gtk.ScrollablePolicy;
        /**
         * Sets the horizontal adjustment of the #GtkScrollable.
         * @param hadjustment a #GtkAdjustment
         */
        set_hadjustment(hadjustment?: Gtk.Adjustment | null): void;
        /**
         * Sets the #GtkScrollablePolicy to determine whether
         * horizontal scrolling should start below the minimum width or
         * below the natural width.
         * @param policy the horizontal #GtkScrollablePolicy
         */
        set_hscroll_policy(policy: Gtk.ScrollablePolicy | null): void;
        /**
         * Sets the vertical adjustment of the #GtkScrollable.
         * @param vadjustment a #GtkAdjustment
         */
        set_vadjustment(vadjustment?: Gtk.Adjustment | null): void;
        /**
         * Sets the #GtkScrollablePolicy to determine whether
         * vertical scrolling should start below the minimum height or
         * below the natural height.
         * @param policy the vertical #GtkScrollablePolicy
         */
        set_vscroll_policy(policy: Gtk.ScrollablePolicy | null): void;
        /**
         * Returns the size of a non-scrolling border around the
         * outside of the scrollable. An example for this would
         * be treeview headers. GTK+ can use this information to
         * display overlayed graphics, like the overshoot indication,
         * at the right position.
         */
        vfunc_get_border(): [boolean, Gtk.Border];
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
            flags: GObject.BindingFlags | null,
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
            flags: GObject.BindingFlags | null,
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

    type BufferClass = typeof Buffer;
    abstract class BufferPrivate {
        static $gtype: GObject.GType<BufferPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type CompletionClass = typeof Completion;
    type CompletionContextClass = typeof CompletionContext;
    abstract class CompletionContextPrivate {
        static $gtype: GObject.GType<CompletionContextPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type CompletionInfoClass = typeof CompletionInfo;
    abstract class CompletionInfoPrivate {
        static $gtype: GObject.GType<CompletionInfoPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type CompletionItemClass = typeof CompletionItem;
    abstract class CompletionItemPrivate {
        static $gtype: GObject.GType<CompletionItemPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class CompletionPrivate {
        static $gtype: GObject.GType<CompletionPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type CompletionProposalIface = typeof CompletionProposal;
    type CompletionProviderIface = typeof CompletionProvider;
    abstract class Encoding {
        static $gtype: GObject.GType<Encoding>;

        // Constructors

        _init(...args: any[]): void;

        // Static methods

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

        // Methods

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

    type GutterClass = typeof Gutter;
    abstract class GutterPrivate {
        static $gtype: GObject.GType<GutterPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type GutterRendererClass = typeof GutterRenderer;
    type GutterRendererPixbufClass = typeof GutterRendererPixbuf;
    abstract class GutterRendererPixbufPrivate {
        static $gtype: GObject.GType<GutterRendererPixbufPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class GutterRendererPrivate {
        static $gtype: GObject.GType<GutterRendererPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type GutterRendererTextClass = typeof GutterRendererText;
    abstract class GutterRendererTextPrivate {
        static $gtype: GObject.GType<GutterRendererTextPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type LanguageClass = typeof Language;
    type LanguageManagerClass = typeof LanguageManager;
    abstract class LanguageManagerPrivate {
        static $gtype: GObject.GType<LanguageManagerPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class LanguagePrivate {
        static $gtype: GObject.GType<LanguagePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type MarkAttributesClass = typeof MarkAttributes;
    abstract class MarkAttributesPrivate {
        static $gtype: GObject.GType<MarkAttributesPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type MarkClass = typeof Mark;
    abstract class MarkPrivate {
        static $gtype: GObject.GType<MarkPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type PrintCompositorClass = typeof PrintCompositor;
    abstract class PrintCompositorPrivate {
        static $gtype: GObject.GType<PrintCompositorPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type RegionClass = typeof Region;
    /**
     * #GtkSourceRegionIter is an opaque datatype; ignore all its fields.
     * Initialize the iter with gtk_source_region_get_start_region_iter().
     */
    class RegionIter {
        static $gtype: GObject.GType<RegionIter>;

        // Constructors

        constructor(properties?: Partial<{}>);
        _init(...args: any[]): void;

        // Methods

        /**
         * Gets the subregion at this iterator.
         * @returns %TRUE if @start and @end have been set successfully (if non-%NULL),   or %FALSE if @iter is the end iterator or if the region is empty.
         */
        get_subregion(): [boolean, Gtk.TextIter | null, Gtk.TextIter | null];
        is_end(): boolean;
        /**
         * Moves `iter` to the next subregion.
         * @returns %TRUE if @iter moved and is dereferenceable, or %FALSE if @iter has   been set to the end iterator.
         */
        next(): boolean;
    }

    type SearchContextClass = typeof SearchContext;
    abstract class SearchContextPrivate {
        static $gtype: GObject.GType<SearchContextPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type SearchSettingsClass = typeof SearchSettings;
    abstract class SearchSettingsPrivate {
        static $gtype: GObject.GType<SearchSettingsPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type SpaceDrawerClass = typeof SpaceDrawer;
    abstract class SpaceDrawerPrivate {
        static $gtype: GObject.GType<SpaceDrawerPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type StyleClass = typeof Style;
    /**
     * The data of a #GtkSourceStyle object.
     *
     * Before using the value of a certain field, check the boolean value of the
     * corresponding "use_" field.
     */
    class StyleData {
        static $gtype: GObject.GType<StyleData>;

        // Fields

        foreground_color: Gdk.RGBA;
        background_color: Gdk.RGBA;
        underline_color: Gdk.RGBA;
        paragraph_background_color: Gdk.RGBA;
        scale: number;
        underline: Pango.Underline;
        italic: number;
        bold: number;
        strikethrough: number;
        use_foreground_color: number;
        use_background_color: number;
        use_underline_color: number;
        use_paragraph_background_color: number;
        use_scale: number;
        use_underline: number;
        use_italic: number;
        use_bold: number;
        use_strikethrough: number;

        // Constructors

        _init(...args: any[]): void;
    }

    type StyleSchemeChooserInterface = typeof StyleSchemeChooser;
    type StyleSchemeClass = typeof StyleScheme;
    type StyleSchemeManagerClass = typeof StyleSchemeManager;
    abstract class StyleSchemeManagerPrivate {
        static $gtype: GObject.GType<StyleSchemeManagerPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class StyleSchemePrivate {
        static $gtype: GObject.GType<StyleSchemePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type TagClass = typeof Tag;
    type UndoManagerIface = typeof UndoManager;
    type ViewClass = typeof View;
    abstract class ViewPrivate {
        static $gtype: GObject.GType<ViewPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    namespace CompletionProposal {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface CompletionProposalNamespace {
        $gtype: GObject.GType<CompletionProposal>;
        prototype: CompletionProposal;
    }
    interface CompletionProposal extends GObject.Object {
        // Methods

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

        // Virtual methods

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

    export const CompletionProposal: CompletionProposalNamespace & {
        new (): CompletionProposal; // This allows `obj instanceof CompletionProposal`
    };

    namespace CompletionProvider {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface CompletionProviderNamespace {
        $gtype: GObject.GType<CompletionProvider>;
        prototype: CompletionProvider;
    }
    interface CompletionProvider extends GObject.Object {
        // Methods

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
        get_start_iter(context: CompletionContext, proposal: CompletionProposal): [boolean, Gtk.TextIter];
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

        // Virtual methods

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
        vfunc_get_start_iter(context: CompletionContext, proposal: CompletionProposal): [boolean, Gtk.TextIter];
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

    export const CompletionProvider: CompletionProviderNamespace & {
        new (): CompletionProvider; // This allows `obj instanceof CompletionProvider`
    };

    namespace StyleSchemeChooser {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            style_scheme: StyleScheme;
            styleScheme: StyleScheme;
        }
    }

    export interface StyleSchemeChooserNamespace {
        $gtype: GObject.GType<StyleSchemeChooser>;
        prototype: StyleSchemeChooser;
    }
    interface StyleSchemeChooser extends GObject.Object {
        // Properties

        /**
         * The :style-scheme property contains the currently selected style
         * scheme. The property can be set to change
         * the current selection programmatically.
         */
        get style_scheme(): StyleScheme;
        set style_scheme(val: StyleScheme);
        /**
         * The :style-scheme property contains the currently selected style
         * scheme. The property can be set to change
         * the current selection programmatically.
         */
        get styleScheme(): StyleScheme;
        set styleScheme(val: StyleScheme);

        // Methods

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

        // Virtual methods

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

    export const StyleSchemeChooser: StyleSchemeChooserNamespace & {
        new (): StyleSchemeChooser; // This allows `obj instanceof StyleSchemeChooser`
    };

    namespace UndoManager {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface UndoManagerNamespace {
        $gtype: GObject.GType<UndoManager>;
        prototype: UndoManager;
    }
    interface UndoManager extends GObject.Object {
        // Methods

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

        // Virtual methods

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

    export const UndoManager: UndoManagerNamespace & {
        new (): UndoManager; // This allows `obj instanceof UndoManager`
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

export default GtkSource;

// END
