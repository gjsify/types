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

    /**
     * @gir-type Enum
     */
    export namespace BracketMatchType {
        export const $gtype: GObject.GType<BracketMatchType>;
    }

    /**
     * @gir-type Enum
     */
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

    /**
     * @gir-type Enum
     */
    export namespace ChangeCaseType {
        export const $gtype: GObject.GType<ChangeCaseType>;
    }

    /**
     * @gir-type Enum
     * @since 3.12
     */
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
     * An error code used with `GTK_SOURCE_COMPLETION_ERROR` in a {@link GLib.Error} returned
     * from a completion-related function.
     * @gir-type Struct
     */
    class CompletionError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        /**
         * The {@link GtkSource.CompletionProvider}
         * is already bound to the {@link GtkSource.Completion} object.
         */
        static ALREADY_BOUND: number;
        /**
         * The {@link GtkSource.CompletionProvider} is
         * not bound to the {@link GtkSource.Completion} object.
         */
        static NOT_BOUND: number;

        // Constructors

        constructor(options: { message: string; code: number });

        // Static methods

        static quark(): GLib.Quark;
    }

    /**
     * @gir-type Enum
     */
    export namespace CompressionType {
        export const $gtype: GObject.GType<CompressionType>;
    }

    /**
     * @gir-type Enum
     * @since 3.14
     */
    enum CompressionType {
        /**
         * Plain text.
         */
        NONE,
        /**
         * Gzip compression.
         */
        GZIP,
    }

    /**
     * @gir-type Enum
     */
    export namespace EncodingDuplicates {
        export const $gtype: GObject.GType<EncodingDuplicates>;
    }

    /**
     * Specifies which {@link GtkSource.Encoding} occurrence to keep when removing
     * duplicated encodings in a list with `gtk_source_encoding_remove_duplicates()`.
     * @gir-type Enum
     * @since 299.6
     */
    enum EncodingDuplicates {
        /**
         * Keep the first occurrence.
         */
        FIRST,
        /**
         * Keep the last occurrence.
         */
        LAST,
    }

    /**
     * An error code used with the `GTK_SOURCE_FILE_LOADER_ERROR` domain.
     * @gir-type Struct
     */
    class FileLoaderError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        /**
         * The file is too big.
         */
        static TOO_BIG: number;
        /**
         * It is not
         *   possible to detect the encoding automatically.
         */
        static ENCODING_AUTO_DETECTION_FAILED: number;
        /**
         * There was an encoding
         *   conversion error and it was needed to use a fallback character.
         */
        static CONVERSION_FALLBACK: number;

        // Constructors

        constructor(options: { message: string; code: number });

        // Static methods

        static quark(): GLib.Quark;
    }

    /**
     * An error code used with the `GTK_SOURCE_FILE_SAVER_ERROR` domain.
     * @gir-type Struct
     */
    class FileSaverError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

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

        // Static methods

        static quark(): GLib.Quark;
    }

    /**
     * @gir-type Enum
     */
    export namespace GutterRendererAlignmentMode {
        export const $gtype: GObject.GType<GutterRendererAlignmentMode>;
    }

    /**
     * The alignment mode of the renderer, when a cell spans multiple lines (due to
     * text wrapping).
     * @gir-type Enum
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

    /**
     * @gir-type Enum
     */
    export namespace NewlineType {
        export const $gtype: GObject.GType<NewlineType>;
    }

    /**
     * @gir-type Enum
     * @since 3.14
     */
    enum NewlineType {
        /**
         * Line feed, used on UNIX.
         */
        LF,
        /**
         * Carriage return, used on macOS.
         */
        CR,
        /**
         * Carriage return followed by a line feed, used
         *   on Windows.
         */
        CR_LF,
    }

    /**
     * @gir-type Enum
     */
    export namespace SmartHomeEndType {
        export const $gtype: GObject.GType<SmartHomeEndType>;
    }

    /**
     * @gir-type Enum
     */
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

    /**
     * @gir-type Enum
     */
    export namespace StyleSchemeKind {
        export const $gtype: GObject.GType<StyleSchemeKind>;
    }

    /**
     * The kind (or category) of a {@link GtkSource.StyleScheme}.
     * @gir-type Enum
     * @since 299.2
     */
    enum StyleSchemeKind {
        /**
         * Light style.
         */
        LIGHT,
        /**
         * Dark style.
         */
        DARK,
        /**
         * Light style. Supports only a light
         *   GTK theme.
         */
        LIGHT_ONLY,
        /**
         * Dark style. Supports only a dark GTK
         *   theme.
         */
        DARK_ONLY,
    }

    /**
     * @gir-type Enum
     */
    export namespace ViewGutterPosition {
        export const $gtype: GObject.GType<ViewGutterPosition>;
    }

    /**
     * @gir-type Enum
     */
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
     * A {@link GLib.CompareFunc} provided for convenience. When 0 is returned it means that
     * the two encodings are equal according to `gtk_source_encoding_equals()`.
     *
     * It is useful for example for `g_slist_find_custom()`.
     * @param a a {@link GtkSource.Encoding}.
     * @param b a {@link GtkSource.Encoding}.
     * @returns an integer according to {@link GLib.CompareFunc}.
     * @since 299.6
     */
    function encoding_compare_func(a?: any | null, b?: any | null): number;
    /**
     * A {@link GLib.CopyFunc} provided for convenience. It does the same as
     * `gtk_source_encoding_copy()`. It is useful for example for `g_slist_copy_deep()`.
     * @param src a {@link GtkSource.Encoding}.
     * @param data Additional data (ignored).
     * @returns a copy of `src`.
     * @since 299.6
     */
    function encoding_copy_func(src?: any | null, data?: any | null): any | null;
    /**
     * Gets a list of all encodings known by {@link GtkSource.Encoding}.
     * @returns a list of   {@link GtkSource.Encoding}'s.
     * @since 299.6
     */
    function encoding_get_all(): Encoding[];
    /**
     * Gets the list of default candidate encodings to try when loading a file. See
     * `gtk_source_file_loader_set_candidate_encodings()`.
     *
     * This function returns a different list depending on the current locale (i.e.,
     * language, country and default encoding). The UTF-8 encoding and the current
     * locale encoding are guaranteed to be present in the returned list.
     *
     * Note that the returned list doesn't contain all encodings known by
     * {@link GtkSource.Encoding}, it is a limited list that contains only the encodings
     * that have the most likelihood to fit for the current locale.
     * @returns the list of   default candidate encodings.
     * @since 299.6
     */
    function encoding_get_default_candidates(): Encoding[];
    /**
     * A convenience function to remove duplicated encodings in a list.
     * @param list a list of   {@link GtkSource.Encoding}'s.
     * @param removal_type the {@link GtkSource.EncodingDuplicates}.
     * @returns the new start of   the {@link GLib.SList}.
     * @since 299.6
     */
    function encoding_remove_duplicates(list: Encoding[], removal_type: EncodingDuplicates | null): Encoding[];
    function file_loader_error_quark(): GLib.Quark;
    function file_saver_error_quark(): GLib.Quark;
    /**
     * Free the resources allocated by GtkSourceView. For example it unrefs the
     * singleton objects.
     *
     * It is not mandatory to call this function, it's just to be friendlier to
     * memory debugging tools. This function is meant to be called at the end of
     * `main()`. It can be called several times.
     * @since 4.0
     */
    function finalize(): void;
    /**
     * Initializes the GtkSourceView library (e.g. for the internationalization).
     *
     * This function can be called several times, but is meant to be called at the
     * beginning of `main()`, before any other GtkSourceView function call.
     * @since 4.0
     */
    function init(): void;
    /**
     * @param iter a {@link Gtk.TextIter}.
     * @param str a non-empty UTF-8 string.
     * @returns `true` if and only if `str` ends at (exactly) the `iter` position.
     * @since 299.6
     */
    function iter_ends_string(iter: Gtk.TextIter, str: string): [boolean, Gtk.TextIter | null];
    /**
     * Gets the boundary, on `iter`'s line, between leading whitespaces (indentation)
     * and the text.
     * @param iter the input {@link Gtk.TextIter}.
     * @since 299.6
     */
    function iter_get_leading_spaces_end_boundary(iter: Gtk.TextIter): Gtk.TextIter;
    /**
     * Gets the indentation, as a string, of the line at `iter`. `iter` can be
     * anywhere in the line.
     *
     * Possible use-case: to implement an action that inserts some text in a
     * {@link Gtk.TextBuffer}. If the text to insert spans multiple lines, it is sometimes
     * desired to keep the same indentation level.
     * @param iter a {@link Gtk.TextIter}.
     * @returns the line indentation at `iter`.
     * @since 299.6
     */
    function iter_get_line_indentation(iter: Gtk.TextIter): string;
    /**
     * Gets the boundary, on `iter`'s line, between the end of the text and trailing
     * whitespaces.
     * @param iter the input {@link Gtk.TextIter}.
     * @since 299.6
     */
    function iter_get_trailing_spaces_start_boundary(iter: Gtk.TextIter): Gtk.TextIter;
    /**
     * @param iter a {@link Gtk.TextIter}.
     * @param str a non-empty UTF-8 string.
     * @returns `true` if and only if `str` is found at (exactly) the `iter` position.
     * @since 299.6
     */
    function iter_starts_string(iter: Gtk.TextIter, str: string): [boolean, Gtk.TextIter | null];
    /**
     * Use this function to escape the following characters: `\n`, `\r`, `\t` and `\`.
     *
     * For a regular expression search, use `g_regex_escape_string()` instead.
     *
     * One possible use case is to take the {@link Gtk.TextBuffer}'s selection and put it in a
     * search entry. The selection can contain tabulations, newlines, etc. So it's
     * better to escape those special characters to better fit in the search entry.
     *
     * See also: `gtk_source_utils_unescape_search_text()`.
     *
     * <warning>
     * Warning: the escape and unescape functions are not reciprocal! For example,
     * escape (unescape (\)) = \\. So avoid cycles such as: search entry -> unescape
     * -> search settings -> escape -> search entry. The original search entry text
     * may be modified.
     * </warning>
     * @param text the text to escape.
     * @returns the escaped `text`.
     * @since 3.10
     */
    function utils_escape_search_text(text: string): string;
    /**
     * This function is intended to be used inside a
     * {@link GtkSource.Buffer.SignalSignatures.bracket_matched | GtkSource.Buffer::bracket-matched} signal handler. Pass to this function the
     * `iter` and `state` values as received in the signal handler, and a string
     * description will be returned.
     * @param iter the {@link Gtk.TextIter}.
     * @param state the {@link GtkSource.BracketMatchType}.
     * @returns a string intended to be shown in the UI,   that describes a bracket matching. `null` is returned on   {@link GtkSource.BracketMatchType.NONE}.
     * @since 299.0
     */
    function utils_get_bracket_matched_message(iter: Gtk.TextIter, state: BracketMatchType | null): string | null;
    /**
     * Use this function before `gtk_source_search_settings_set_search_text()`, to
     * unescape the following sequences of characters: `\n`, `\r`, `\t` and `\\`.
     * The purpose is to easily write those characters in a search entry.
     *
     * Note that unescaping the search text is not needed for regular expression
     * searches.
     *
     * See also: `gtk_source_utils_escape_search_text()`.
     * @param text the text to unescape.
     * @returns the unescaped `text`.
     * @since 3.10
     */
    function utils_unescape_search_text(text: string): string;
    /**
     * @gir-type Flags
     */
    export namespace CompletionActivation {
        export const $gtype: GObject.GType<CompletionActivation>;
    }

    /**
     * @gir-type Flags
     */
    enum CompletionActivation {
        /**
         * None.
         */
        NONE,
        /**
         * Interactive activation. By
         * default, it occurs on each insertion in the {@link Gtk.TextBuffer}. This can be
         * blocked temporarily with `gtk_source_completion_block_interactive()`.
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
     * @gir-type Flags
     */
    export namespace FileSaverFlags {
        export const $gtype: GObject.GType<FileSaverFlags>;
    }

    /**
     * Flags to define the behavior of a {@link GtkSource.FileSaver}.
     * @gir-type Flags
     * @since 3.14
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

    /**
     * @gir-type Flags
     */
    export namespace GutterRendererState {
        export const $gtype: GObject.GType<GutterRendererState>;
    }

    /**
     * @gir-type Flags
     */
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

    /**
     * @gir-type Flags
     */
    export namespace SortFlags {
        export const $gtype: GObject.GType<SortFlags>;
    }

    /**
     * @gir-type Flags
     * @since 3.18
     */
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
     * @gir-type Flags
     */
    export namespace SpaceLocationFlags {
        export const $gtype: GObject.GType<SpaceLocationFlags>;
    }

    /**
     * {@link GtkSource.SpaceLocationFlags} contains flags for white space locations.
     *
     * If a line contains only white spaces (no text), the white spaces match both
     * {@link GtkSource.SpaceLocationFlags.LEADING} and {@link GtkSource.SpaceLocationFlags.TRAILING}.
     * @gir-type Flags
     * @since 3.24
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
     * @gir-type Flags
     */
    export namespace SpaceTypeFlags {
        export const $gtype: GObject.GType<SpaceTypeFlags>;
    }

    /**
     * {@link GtkSource.SpaceTypeFlags} contains flags for white space types.
     * @gir-type Flags
     * @since 3.24
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
         *   {@link GtkSource.Buffer.implicit_trailing_newline} property is `true`,
         *   {@link GtkSource.SpaceDrawer} also draws a line break at the end of the buffer.
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
            /**
             * `iter` is set to a valid iterator pointing to the matching bracket
             * if `state` is {@link GtkSource.BracketMatchType.FOUND}. Otherwise `iter` is
             * meaningless.
             *
             * The signal is emitted only when the `state` changes, typically when
             * the cursor moves.
             *
             * A use-case for this signal is to show messages in a {@link Gtk.Statusbar},
             * with the help of `gtk_source_utils_get_bracket_matched_message()`.
             * @signal
             * @since 2.12
             * @run-last
             */
            'bracket-matched': (arg0: Gtk.TextIter, arg1: BracketMatchType) => void;
            /**
             * The ::highlight-updated signal is emitted when the syntax
             * highlighting and [context classes][context-classes] are updated in a
             * certain region of the `buffer`.
             * @signal
             * @run-last
             */
            'highlight-updated': (arg0: Gtk.TextIter, arg1: Gtk.TextIter) => void;
            /**
             * The ::redo signal is emitted to redo the last undo operation.
             * @signal
             * @run-last
             */
            redo: () => void;
            /**
             * The ::source-mark-updated signal is emitted each time
             * a mark is added to, moved or removed from the `buffer`.
             * @signal
             * @run-last
             */
            'source-mark-updated': (arg0: Gtk.TextMark) => void;
            /**
             * The ::undo signal is emitted to undo the last user action which
             * modified the buffer.
             * @signal
             * @run-last
             */
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

    /**
     * @gir-type Class
     */
    class Buffer extends Gtk.TextBuffer {
        static $gtype: GObject.GType<Buffer>;

        // Properties

        /**
         * @read-only
         */
        get can_redo(): boolean;
        /**
         * @read-only
         */
        get canRedo(): boolean;
        /**
         * @read-only
         */
        get can_undo(): boolean;
        /**
         * @read-only
         */
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
         * `gtk_source_buffer_set_implicit_trailing_newline()`.
         * @since 3.14
         */
        get implicit_trailing_newline(): boolean;
        set implicit_trailing_newline(val: boolean);
        /**
         * Whether the buffer has an implicit trailing newline. See
         * `gtk_source_buffer_set_implicit_trailing_newline()`.
         * @since 3.14
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
         * @param iter
         * @param state
         * @virtual
         */
        vfunc_bracket_matched(iter: Gtk.TextIter, state: BracketMatchType): void;
        /**
         * Redoes the last undo operation.  Use `gtk_source_buffer_can_redo()`
         * to check whether a call to this function will have any effect.
         *
         * This function emits the {@link GtkSource.Buffer.SignalSignatures.redo | GtkSource.Buffer::redo} signal.
         * @virtual
         */
        vfunc_redo(): void;
        /**
         * Undoes the last user action which modified the buffer.  Use
         * `gtk_source_buffer_can_undo()` to check whether a call to this
         * function will have any effect.
         *
         * This function emits the {@link GtkSource.Buffer.SignalSignatures.undo | GtkSource.Buffer::undo} signal.
         * @virtual
         */
        vfunc_undo(): void;

        // Methods

        /**
         * Moves `iter` to the position of the previous {@link GtkSource.Mark} of the given
         * category. Returns `true` if `iter` was moved. If `category` is NULL, the
         * previous source mark can be of any category.
         * @param iter an iterator.
         * @param category category to search for, or `null`
         * @returns whether `iter` was moved.
         */
        backward_iter_to_source_mark(iter: Gtk.TextIter, category?: string | null): boolean;
        /**
         * Marks the beginning of a not undoable action on the buffer,
         * disabling the undo manager.  Typically you would call this function
         * before initially setting the contents of the buffer (e.g. when
         * loading a file in a text editor).
         *
         * You may nest `gtk_source_buffer_begin_not_undoable_action()` /
         * `gtk_source_buffer_end_not_undoable_action()` blocks.
         */
        begin_not_undoable_action(): void;
        /**
         * Changes the case of the text between the specified iterators.
         * @param case_type how to change the case.
         * @param start a {@link Gtk.TextIter}.
         * @param end a {@link Gtk.TextIter}.
         */
        change_case(case_type: ChangeCaseType | null, start: Gtk.TextIter, end: Gtk.TextIter): void;
        /**
         * Creates a source mark in the `buffer` of category `category`.  A source mark is
         * a {@link Gtk.TextMark} but organised into categories. Depending on the category
         * a pixbuf can be specified that will be displayed along the line of the mark.
         *
         * Like a {@link Gtk.TextMark}, a {@link GtkSource.Mark} can be anonymous if the
         * passed `name` is `null`.  Also, the buffer owns the marks so you
         * shouldn't unreference it.
         *
         * Marks always have left gravity and are moved to the beginning of
         * the line when the user deletes the line they were in.
         *
         * Typical uses for a source mark are bookmarks, breakpoints, current
         * executing instruction indication in a source file, etc..
         * @param name the name of the mark, or `null`.
         * @param category a string defining the mark category.
         * @param where location to place the mark.
         * @returns a new {@link GtkSource.Mark}, owned by the buffer.
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
         * Moves `iter` to the position of the next {@link GtkSource.Mark} of the given
         * `category`. Returns `true` if `iter` was moved. If `category` is NULL, the
         * next source mark can be of any category.
         * @param iter an iterator.
         * @param category category to search for, or `null`
         * @returns whether `iter` was moved.
         */
        forward_iter_to_source_mark(iter: Gtk.TextIter, category?: string | null): boolean;
        /**
         * Get all defined context classes at `iter`.
         *
         * See the {@link GtkSource.Buffer} description for the list of default context classes.
         * @param iter a {@link Gtk.TextIter}.
         * @returns a new `null` terminated array of context class names. Use `g_strfreev()` to free the array if it is no longer needed.
         */
        get_context_classes_at_iter(iter: Gtk.TextIter): string[];
        /**
         * Determines whether bracket match highlighting is activated for the
         * source buffer.
         * @returns `true` if the source buffer will highlight matching brackets.
         */
        get_highlight_matching_brackets(): boolean;
        /**
         * Determines whether syntax highlighting is activated in the source
         * buffer.
         * @returns `true` if syntax highlighting is enabled, `false` otherwise.
         */
        get_highlight_syntax(): boolean;
        /**
         * @returns whether the `buffer` has an implicit trailing newline.
         */
        get_implicit_trailing_newline(): boolean;
        /**
         * Returns the {@link GtkSource.Language} associated with the buffer,
         * see `gtk_source_buffer_set_language()`.  The returned object should not be
         * unreferenced by the user.
         * @returns the {@link GtkSource.Language} associated with the buffer, or `null`.
         */
        get_language(): Language | null;
        /**
         * Determines the number of undo levels the buffer will track for buffer edits.
         * @returns the maximum number of possible undo levels or -1 if no limit is set.
         */
        get_max_undo_levels(): number;
        /**
         * Returns the list of marks of the given category at `iter`. If `category`
         * is `null` it returns all marks at `iter`.
         * @param iter an iterator.
         * @param category category to search for, or `null`
         * @returns a newly allocated {@link GLib.SList}.
         */
        get_source_marks_at_iter(iter: Gtk.TextIter, category?: string | null): Mark[];
        /**
         * Returns the list of marks of the given category at `line`.
         * If `category` is `null`, all marks at `line` are returned.
         * @param line a line number.
         * @param category category to search for, or `null`
         * @returns a newly allocated {@link GLib.SList}.
         */
        get_source_marks_at_line(line: number, category?: string | null): Mark[];
        /**
         * Returns the {@link GtkSource.StyleScheme} associated with the buffer,
         * see `gtk_source_buffer_set_style_scheme()`.
         * The returned object should not be unreferenced by the user.
         * @returns the {@link GtkSource.StyleScheme} associated with the buffer, or `null`.
         */
        get_style_scheme(): StyleScheme | null;
        /**
         * Returns the {@link GtkSource.UndoManager} associated with the buffer,
         * see `gtk_source_buffer_set_undo_manager()`.  The returned object should not be
         * unreferenced by the user.
         * @returns the {@link GtkSource.UndoManager} associated with the buffer, or `null`.
         */
        get_undo_manager(): UndoManager | null;
        /**
         * Moves backward to the next toggle (on or off) of the context class. If no
         * matching context class toggles are found, returns `false`, otherwise `true`.
         * Does not return toggles located at `iter`, only toggles after `iter`. Sets
         * `iter` to the location of the toggle, or to the end of the buffer if no
         * toggle is found.
         *
         * See the {@link GtkSource.Buffer} description for the list of default context classes.
         * @param iter a {@link Gtk.TextIter}.
         * @param context_class the context class.
         * @returns whether we found a context class toggle before `iter`
         */
        iter_backward_to_context_class_toggle(iter: Gtk.TextIter, context_class: string): boolean;
        /**
         * Moves forward to the next toggle (on or off) of the context class. If no
         * matching context class toggles are found, returns `false`, otherwise `true`.
         * Does not return toggles located at `iter`, only toggles after `iter`. Sets
         * `iter` to the location of the toggle, or to the end of the buffer if no
         * toggle is found.
         *
         * See the {@link GtkSource.Buffer} description for the list of default context classes.
         * @param iter a {@link Gtk.TextIter}.
         * @param context_class the context class.
         * @returns whether we found a context class toggle after `iter`
         */
        iter_forward_to_context_class_toggle(iter: Gtk.TextIter, context_class: string): boolean;
        /**
         * Check if the class `context_class` is set on `iter`.
         *
         * See the {@link GtkSource.Buffer} description for the list of default context classes.
         * @param iter a {@link Gtk.TextIter}.
         * @param context_class class to search for.
         * @returns whether `iter` has the context class.
         */
        iter_has_context_class(iter: Gtk.TextIter, context_class: string): boolean;
        /**
         * Joins the lines of text between the specified iterators.
         * @param start a {@link Gtk.TextIter}.
         * @param end a {@link Gtk.TextIter}.
         */
        join_lines(start: Gtk.TextIter, end: Gtk.TextIter): void;
        /**
         * Redoes the last undo operation.  Use `gtk_source_buffer_can_redo()`
         * to check whether a call to this function will have any effect.
         *
         * This function emits the {@link GtkSource.Buffer.SignalSignatures.redo | GtkSource.Buffer::redo} signal.
         */
        redo(): void;
        /**
         * Remove all marks of `category` between `start` and `end` from the buffer.
         * If `category` is NULL, all marks in the range will be removed.
         * @param start a {@link Gtk.TextIter}.
         * @param end a {@link Gtk.TextIter}.
         * @param category category to search for, or `null`.
         */
        remove_source_marks(start: Gtk.TextIter, end: Gtk.TextIter, category?: string | null): void;
        /**
         * Controls the bracket match highlighting function in the buffer.  If
         * activated, when you position your cursor over a bracket character
         * (a parenthesis, a square bracket, etc.) the matching opening or
         * closing bracket character will be highlighted.
         * @param highlight `true` if you want matching brackets highlighted.
         */
        set_highlight_matching_brackets(highlight: boolean): void;
        /**
         * Controls whether syntax is highlighted in the buffer.
         *
         * If `highlight` is `true`, the text will be highlighted according to the syntax
         * patterns specified in the {@link GtkSource.Language} set with
         * `gtk_source_buffer_set_language()`.
         *
         * If `highlight` is `false`, syntax highlighting is disabled and all the
         * {@link Gtk.TextTag} objects that have been added by the syntax highlighting engine
         * are removed from the buffer.
         * @param highlight `true` to enable syntax highlighting, `false` to disable it.
         */
        set_highlight_syntax(highlight: boolean): void;
        /**
         * Sets whether the `buffer` has an implicit trailing newline.
         *
         * If an explicit trailing newline is present in a {@link Gtk.TextBuffer}, {@link Gtk.TextView}
         * shows it as an empty line. This is generally not what the user expects.
         *
         * If `implicit_trailing_newline` is `true` (the default value):
         *  - when a {@link GtkSource.FileLoader} loads the content of a file into the `buffer`,
         *    the trailing newline (if present in the file) is not inserted into the
         *    `buffer`.
         *  - when a {@link GtkSource.FileSaver} saves the content of the `buffer` into a file, a
         *    trailing newline is added to the file.
         *
         * On the other hand, if `implicit_trailing_newline` is `false`, the file's
         * content is not modified when loaded into the `buffer`, and the `buffer`'s
         * content is not modified when saved into a file.
         * @param implicit_trailing_newline the new value.
         */
        set_implicit_trailing_newline(implicit_trailing_newline: boolean): void;
        /**
         * Associates a {@link GtkSource.Language} with the buffer.
         *
         * Note that a {@link GtkSource.Language} affects not only the syntax highlighting, but
         * also the [context classes][context-classes]. If you want to disable just the
         * syntax highlighting, see `gtk_source_buffer_set_highlight_syntax()`.
         *
         * The buffer holds a reference to `language`.
         * @param language a {@link GtkSource.Language} to set, or `null`.
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
         * Sets a {@link GtkSource.StyleScheme} to be used by the buffer and the view.
         *
         * Note that a {@link GtkSource.StyleScheme} affects not only the syntax highlighting,
         * but also other {@link GtkSource.View} features such as highlighting the current line,
         * matching brackets, the line numbers, etc.
         *
         * Instead of setting a `null` `scheme`, it is better to disable syntax
         * highlighting with `gtk_source_buffer_set_highlight_syntax()`, and setting the
         * {@link GtkSource.StyleScheme} with the "classic" or "tango" ID, because those two
         * style schemes follow more closely the GTK+ theme (for example for the
         * background color).
         *
         * The buffer holds a reference to `scheme`.
         * @param scheme a {@link GtkSource.StyleScheme} or `null`.
         */
        set_style_scheme(scheme?: StyleScheme | null): void;
        /**
         * Set the buffer undo manager. If `manager` is `null` the default undo manager
         * will be set.
         * @param manager A {@link GtkSource.UndoManager} or `null`.
         */
        set_undo_manager(manager?: UndoManager | null): void;
        /**
         * Sort the lines of text between the specified iterators.
         * @param start a {@link Gtk.TextIter}.
         * @param end a {@link Gtk.TextIter}.
         * @param flags {@link GtkSource.SortFlags} specifying how the sort should behave
         * @param column sort considering the text starting at the given column
         */
        sort_lines(start: Gtk.TextIter, end: Gtk.TextIter, flags: SortFlags | null, column: number): void;
        /**
         * Undoes the last user action which modified the buffer.  Use
         * `gtk_source_buffer_can_undo()` to check whether a call to this
         * function will have any effect.
         *
         * This function emits the {@link GtkSource.Buffer.SignalSignatures.undo | GtkSource.Buffer::undo} signal.
         */
        undo(): void;
    }

    namespace Completion {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * The {@link GtkSource.Completion.SignalSignatures.activate_proposal | GtkSource.Completion::activate-proposal} signal is a
             * keybinding signal which gets emitted when the user initiates
             * a proposal activation.
             *
             * Applications should not connect to it, but may emit it with
             * `g_signal_emit_by_name()` if they need to control the proposal
             * activation programmatically.
             * @signal
             * @action
             * @run-last
             */
            'activate-proposal': () => void;
            /**
             * Emitted when the completion window is hidden. The default handler
             * will actually hide the window.
             * @signal
             * @action
             * @run-last
             */
            hide: () => void;
            /**
             * The {@link GtkSource.Completion.SignalSignatures.move_cursor | GtkSource.Completion::move-cursor} signal is a keybinding
             * signal which gets emitted when the user initiates a cursor
             * movement.
             *
             * The <keycap>Up</keycap>, <keycap>Down</keycap>,
             * <keycap>PageUp</keycap>, <keycap>PageDown</keycap>,
             * <keycap>Home</keycap> and <keycap>End</keycap> keys are bound to the
             * normal behavior expected by those keys.
             *
             * When `step` is equal to {@link Gtk.ScrollStep.PAGES}, the page size is defined by
             * the {@link GtkSource.Completion.proposal_page_size} property. It is used for
             * the <keycap>PageDown</keycap> and <keycap>PageUp</keycap> keys.
             *
             * Applications should not connect to it, but may emit it with
             * `g_signal_emit_by_name()` if they need to control the cursor
             * programmatically.
             * @signal
             * @action
             * @run-last
             */
            'move-cursor': (arg0: Gtk.ScrollStep, arg1: number) => void;
            /**
             * The {@link GtkSource.Completion.SignalSignatures.move_page | GtkSource.Completion::move-page} signal is a keybinding
             * signal which gets emitted when the user initiates a page
             * movement (i.e. switches between provider pages).
             *
             * <keycombo><keycap>Control</keycap><keycap>Left</keycap></keycombo>
             * is for going to the previous provider.
             * <keycombo><keycap>Control</keycap><keycap>Right</keycap></keycombo>
             * is for going to the next provider.
             * <keycombo><keycap>Control</keycap><keycap>Home</keycap></keycombo>
             * is for displaying all the providers.
             * <keycombo><keycap>Control</keycap><keycap>End</keycap></keycombo>
             * is for going to the last provider.
             *
             * When `step` is equal to #GTK_SCROLL_PAGES, the page size is defined by
             * the {@link GtkSource.Completion.provider_page_size} property.
             *
             * Applications should not connect to it, but may emit it with
             * `g_signal_emit_by_name()` if they need to control the page selection
             * programmatically.
             * @signal
             * @action
             * @run-last
             */
            'move-page': (arg0: Gtk.ScrollStep, arg1: number) => void;
            /**
             * Emitted just before starting to populate the completion with providers.
             * You can use this signal to add additional attributes in the context.
             * @signal
             * @action
             * @run-last
             */
            'populate-context': (arg0: CompletionContext) => void;
            /**
             * Emitted when the completion window is shown. The default handler
             * will actually show the window.
             * @signal
             * @action
             * @run-last
             */
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

        interface ConstructorProps extends GObject.Object.ConstructorProps {
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

    /**
     * @gir-type Class
     */
    class Completion extends GObject.Object {
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
         * See also the {@link GtkSource.Completion.SignalSignatures.move_cursor | GtkSource.Completion::move-cursor} signal.
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
         * See also the {@link GtkSource.Completion.SignalSignatures.move_cursor | GtkSource.Completion::move-cursor} signal.
         */
        get proposalPageSize(): number;
        set proposalPageSize(val: number);
        /**
         * The scroll page size of the provider pages in the completion window.
         *
         * See the {@link GtkSource.Completion.SignalSignatures.move_page | GtkSource.Completion::move-page} signal.
         */
        get provider_page_size(): number;
        set provider_page_size(val: number);
        /**
         * The scroll page size of the provider pages in the completion window.
         *
         * See the {@link GtkSource.Completion.SignalSignatures.move_page | GtkSource.Completion::move-page} signal.
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
         * The {@link GtkSource.View} bound to the completion object.
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
        $signals: Completion.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Completion.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Completion.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Completion.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Completion.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Completion.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Completion.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Completion.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_activate_proposal(): void;
        /**
         * Hides the completion if it is active (visible).
         * @virtual
         */
        vfunc_hide(): void;
        /**
         * @param step
         * @param num
         * @virtual
         */
        vfunc_move_cursor(step: Gtk.ScrollStep, num: number): void;
        /**
         * @param step
         * @param num
         * @virtual
         */
        vfunc_move_page(step: Gtk.ScrollStep, num: number): void;
        /**
         * @param context
         * @virtual
         */
        vfunc_populate_context(context: CompletionContext): void;
        /**
         * @param provider
         * @param proposal
         * @virtual
         */
        vfunc_proposal_activated(provider: CompletionProvider, proposal: CompletionProposal): boolean;
        /**
         * @virtual
         */
        vfunc_show(): void;

        // Methods

        /**
         * Add a new {@link GtkSource.CompletionProvider} to the completion object. This will
         * add a reference `provider`, so make sure to unref your own copy when you
         * no longer need it.
         * @param provider a {@link GtkSource.CompletionProvider}.
         * @returns `true` if `provider` was successfully added, otherwise if `error`          is provided, it will be set with the error and `false` is returned.
         */
        add_provider(provider: CompletionProvider): boolean;
        /**
         * Block interactive completion. This can be used to disable interactive
         * completion when inserting or deleting text from the buffer associated with
         * the completion. Use `gtk_source_completion_unblock_interactive()` to enable
         * interactive completion again.
         *
         * This function may be called multiple times. It will continue to block
         * interactive completion until `gtk_source_completion_unblock_interactive()`
         * has been called the same number of times.
         */
        block_interactive(): void;
        /**
         * Create a new {@link GtkSource.CompletionContext} for `completion`. The position where
         * the completion occurs can be specified by `position`. If `position` is `null`,
         * the current cursor position will be used.
         * @param position a {@link Gtk.TextIter}, or `null`.
         * @returns a new {@link GtkSource.CompletionContext}. The reference being returned is a 'floating' reference, so if you invoke `gtk_source_completion_start()` with this context you don't need to unref it.
         */
        create_context(position?: Gtk.TextIter | null): CompletionContext;
        /**
         * The info widget is the window where the completion displays optional extra
         * information of the proposal.
         * @returns The {@link GtkSource.CompletionInfo} window                           associated with `completion`.
         */
        get_info_window(): CompletionInfo;
        /**
         * Get list of providers registered on `completion`. The returned list is owned
         * by the completion and should not be freed.
         * @returns list of {@link GtkSource.CompletionProvider}.
         */
        get_providers(): CompletionProvider[];
        /**
         * The {@link GtkSource.View} associated with `completion`, or `null` if the view has been
         * destroyed.
         * @returns The {@link GtkSource.View} associated with `completion`, or `null`.
         */
        get_view(): View | null;
        /**
         * Hides the completion if it is active (visible).
         */
        hide(): void;
        /**
         * Remove `provider` from the completion.
         * @param provider a {@link GtkSource.CompletionProvider}.
         * @returns `true` if `provider` was successfully removed, otherwise if `error`          is provided, it will be set with the error and `false` is returned.
         */
        remove_provider(provider: CompletionProvider): boolean;
        /**
         * Starts a new completion with the specified {@link GtkSource.CompletionContext} and
         * a list of potential candidate providers for completion.
         *
         * It can be convenient for showing a completion on-the-fly, without the need to
         * add or remove providers to the {@link GtkSource.Completion}.
         *
         * Another solution is to add providers with
         * `gtk_source_completion_add_provider()`, and implement
         * `gtk_source_completion_provider_match()` for each provider.
         * @param providers a list of {@link GtkSource.CompletionProvider}, or `null`.
         * @param context The {@link GtkSource.CompletionContext} with which to start the completion.
         * @returns `true` if it was possible to the show completion window.
         */
        start(providers: CompletionProvider[] | null, context: CompletionContext): boolean;
        /**
         * Unblock interactive completion. This can be used after using
         * `gtk_source_completion_block_interactive()` to enable interactive completion
         * again.
         */
        unblock_interactive(): void;
    }

    namespace CompletionContext {
        // Signal signatures
        interface SignalSignatures extends GObject.InitiallyUnowned.SignalSignatures {
            /**
             * Emitted when the current population of proposals has been cancelled.
             * Providers adding proposals asynchronously should connect to this signal
             * to know when to cancel running proposal queries.
             * @signal
             * @action
             * @run-last
             */
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

    /**
     * @gir-type Class
     */
    class CompletionContext extends GObject.InitiallyUnowned {
        static $gtype: GObject.GType<CompletionContext>;

        // Properties

        /**
         * The completion activation
         */
        get activation(): CompletionActivation;
        set activation(val: CompletionActivation);
        /**
         * The {@link GtkSource.Completion} associated with the context.
         * @construct-only
         */
        get completion(): Completion;
        /**
         * The {@link Gtk.TextIter} at which the completion is invoked.
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

        /** @signal */
        connect<K extends keyof CompletionContext.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CompletionContext.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof CompletionContext.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CompletionContext.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof CompletionContext.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CompletionContext.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_cancelled(): void;

        // Methods

        /**
         * Providers can use this function to add proposals to the completion. They
         * can do so asynchronously by means of the `finished` argument. Providers must
         * ensure that they always call this function with `finished` set to `true`
         * once each population (even if no proposals need to be added).
         * Population occurs when the `gtk_source_completion_provider_populate()`
         * function is called.
         * @param provider a {@link GtkSource.CompletionProvider}.
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
         * @returns `true` if `iter` is correctly set, `false` otherwise.
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
            extends
                Gtk.Window.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
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

        /** @signal */
        connect<K extends keyof CompletionInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CompletionInfo.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof CompletionInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CompletionInfo.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof CompletionInfo.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CompletionInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Moves the {@link GtkSource.CompletionInfo} to `iter`. If `iter` is `null` `info` is
         * moved to the cursor position. Moving will respect the {@link Gdk.Gravity} setting
         * of the info window and will ensure the line at `iter` is not occluded by
         * the window.
         * @param view a {@link Gtk.TextView} on which the info window should be positioned.
         * @param iter a {@link Gtk.TextIter}.
         */
        move_to_iter(view: Gtk.TextView, iter?: Gtk.TextIter | null): void;
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

    namespace CompletionItem {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, CompletionProposal.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class CompletionItem extends GObject.Object implements CompletionProposal {
        static $gtype: GObject.GType<CompletionItem>;

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

        /** @signal */
        connect<K extends keyof CompletionItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CompletionItem.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof CompletionItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CompletionItem.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof CompletionItem.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CompletionItem.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param gicon the {@link Gio.Icon}, or `null`.
         */
        set_gicon(gicon?: Gio.Icon | null): void;
        /**
         * @param icon the {@link GdkPixbuf.Pixbuf}, or `null`.
         */
        set_icon(icon?: GdkPixbuf.Pixbuf | null): void;
        /**
         * @param icon_name the icon name, or `null`.
         */
        set_icon_name(icon_name?: string | null): void;
        /**
         * @param info the info, or `null`.
         */
        set_info(info?: string | null): void;
        /**
         * @param label the label, or `null`.
         */
        set_label(label?: string | null): void;
        /**
         * @param markup the markup, or `null`.
         */
        set_markup(markup?: string | null): void;
        /**
         * @param text the text, or `null`.
         */
        set_text(text?: string | null): void;
        /**
         * Emits the {@link GtkSource.CompletionProposal.SignalSignatures.changed | GtkSource.CompletionProposal::changed} signal on `proposal`. This
         * should be called by implementations whenever the label, icon or info of the
         * proposal has changed.
         */
        changed(): void;
        /**
         * Gets whether two proposal objects are the same. This is used to (together
         * with `gtk_source_completion_proposal_hash()`) to match proposals in the
         * completion model.
         * @param other a {@link GtkSource.CompletionProposal}.
         * @returns whether `proposal` and `other` are the same proposal.
         */
        equal(other: CompletionProposal): boolean;
        /**
         * @returns the {@link Gio.Icon} for the icon of `proposal`.
         */
        get_gicon(): Gio.Icon | null;
        /**
         * @returns a {@link GdkPixbuf.Pixbuf} with the icon of `proposal`.
         */
        get_icon(): GdkPixbuf.Pixbuf | null;
        /**
         * @returns the icon name of `proposal`.
         */
        get_icon_name(): string | null;
        /**
         * Gets extra information associated to the proposal. This information will be
         * used to present the user with extra, detailed information about the
         * selected proposal.
         * @returns a newly-allocated string containing   extra information of `proposal`, or `null` if no extra information is   associated to `proposal`.
         */
        get_info(): string | null;
        /**
         * Gets the label of `proposal`. The label is shown in the list of proposals as
         * plain text. If you need any markup (such as bold or italic text), you have to
         * implement `gtk_source_completion_proposal_get_markup()`.
         * @returns a new string containing the label of   `proposal`.
         */
        get_label(): string | null;
        /**
         * Gets the label of `proposal` with markup. The label is shown in the list of
         * proposals and may contain markup. This will be used instead of
         * `gtk_source_completion_proposal_get_label()` if implemented.
         * @returns a new string containing the label of   `proposal` with markup.
         */
        get_markup(): string | null;
        /**
         * Gets the text of `proposal`. The text that is inserted into the text buffer
         * when the proposal is activated by the default activation.
         *
         * You are free to implement a custom activation handler in the provider and not
         * implement this function. For more information, see
         * `gtk_source_completion_provider_activate_proposal()`.
         * @returns a new string containing the text of   `proposal`.
         */
        get_text(): string | null;
        /**
         * Gets the hash value of `proposal`. This is used to (together with
         * `gtk_source_completion_proposal_equal()`) to match proposals in the completion
         * model.
         * @returns the hash value of `proposal`.
         */
        hash(): number;
        /**
         * Emits the {@link GtkSource.CompletionProposal.SignalSignatures.changed | GtkSource.CompletionProposal::changed} signal on `proposal`. This
         * should be called by implementations whenever the label, icon or info of the
         * proposal has changed.
         * @virtual
         */
        vfunc_changed(): void;
        /**
         * Gets whether two proposal objects are the same. This is used to (together
         * with `gtk_source_completion_proposal_hash()`) to match proposals in the
         * completion model.
         * @param other a {@link GtkSource.CompletionProposal}.
         * @virtual
         */
        vfunc_equal(other: CompletionProposal): boolean;
        /**
         * The virtual function pointer for `gtk_source_completion_proposal_get_gicon()`.
         *   By default, `null` is returned.
         * @virtual
         */
        vfunc_get_gicon(): Gio.Icon | null;
        /**
         * The virtual function pointer for `gtk_source_completion_proposal_get_icon()`.
         *   By default, `null` is returned.
         * @virtual
         */
        vfunc_get_icon(): GdkPixbuf.Pixbuf | null;
        /**
         * The virtual function pointer for `gtk_source_completion_proposal_get_icon_name()`.
         *   By default, `null` is returned.
         * @virtual
         */
        vfunc_get_icon_name(): string | null;
        /**
         * Gets extra information associated to the proposal. This information will be
         * used to present the user with extra, detailed information about the
         * selected proposal.
         * @virtual
         */
        vfunc_get_info(): string | null;
        /**
         * Gets the label of `proposal`. The label is shown in the list of proposals as
         * plain text. If you need any markup (such as bold or italic text), you have to
         * implement `gtk_source_completion_proposal_get_markup()`.
         * @virtual
         */
        vfunc_get_label(): string | null;
        /**
         * Gets the label of `proposal` with markup. The label is shown in the list of
         * proposals and may contain markup. This will be used instead of
         * `gtk_source_completion_proposal_get_label()` if implemented.
         * @virtual
         */
        vfunc_get_markup(): string | null;
        /**
         * Gets the text of `proposal`. The text that is inserted into the text buffer
         * when the proposal is activated by the default activation.
         *
         * You are free to implement a custom activation handler in the provider and not
         * implement this function. For more information, see
         * `gtk_source_completion_provider_activate_proposal()`.
         * @virtual
         */
        vfunc_get_text(): string | null;
        /**
         * Gets the hash value of `proposal`. This is used to (together with
         * `gtk_source_completion_proposal_equal()`) to match proposals in the completion
         * model.
         * @virtual
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

    /**
     * @gir-type Class
     */
    class File extends GObject.Object {
        static $gtype: GObject.GType<File>;

        // Properties

        /**
         * The compression type.
         * @since 3.14
         * @read-only
         */
        get compression_type(): CompressionType;
        /**
         * The compression type.
         * @since 3.14
         * @read-only
         */
        get compressionType(): CompressionType;
        /**
         * The {@link GtkSource.Encoding}, initially `null`. After a successful file
         * loading or saving operation, the encoding is non-`null`.
         * @since 3.14
         * @read-only
         */
        get encoding(): Encoding;
        /**
         * The {@link Gio.File}.
         * @since 3.14
         */
        get location(): Gio.File;
        set location(val: Gio.File);
        /**
         * The line ending type.
         * @since 3.14
         * @read-only
         */
        get newline_type(): NewlineType;
        /**
         * The line ending type.
         * @since 3.14
         * @read-only
         */
        get newlineType(): NewlineType;
        /**
         * Whether the file is read-only. If the {@link GtkSource.File.location} is
         * `null`, this property is `false`.
         *
         * The value of this property is not updated automatically (there are no
         * file monitors). To have an up-to-date value, you must first call
         * `gtk_source_file_check_file_on_disk()`.
         * @since 3.18
         * @read-only
         */
        get read_only(): boolean;
        /**
         * Whether the file is read-only. If the {@link GtkSource.File.location} is
         * `null`, this property is `false`.
         *
         * The value of this property is not updated automatically (there are no
         * file monitors). To have an up-to-date value, you must first call
         * `gtk_source_file_check_file_on_disk()`.
         * @since 3.18
         * @read-only
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

        // Methods

        /**
         * Checks synchronously the file on disk, to know whether the file is externally
         * modified, or has been deleted, and whether the file is read-only.
         *
         * {@link GtkSource.File} doesn't create a {@link Gio.FileMonitor} to track those properties, so
         * this function needs to be called instead. Creating lots of {@link Gio.FileMonitor}'s
         * would take lots of resources.
         *
         * Since this function is synchronous, it is advised to call it only on local
         * files. See `gtk_source_file_is_local()`.
         */
        check_file_on_disk(): void;
        /**
         * @returns the current value of the {@link GtkSource.File.compression_type} property.
         */
        get_compression_type(): CompressionType;
        /**
         * @returns the current value of the   {@link GtkSource.File.encoding} property.
         */
        get_encoding(): Encoding | null;
        /**
         * @returns the current value of the   {@link GtkSource.File.location} property.
         */
        get_location(): Gio.File | null;
        /**
         * @returns the current value of the {@link GtkSource.File.newline_type} property.
         */
        get_newline_type(): NewlineType;
        /**
         * Returns whether the file has been deleted. If the
         * {@link GtkSource.File.location} is `null`, returns `false`.
         *
         * To have an up-to-date value, you must first call
         * `gtk_source_file_check_file_on_disk()`.
         * @returns whether the file has been deleted.
         */
        is_deleted(): boolean;
        /**
         * Returns whether the file is externally modified. If the
         * {@link GtkSource.File.location} is `null`, returns `false`.
         *
         * To have an up-to-date value, you must first call
         * `gtk_source_file_check_file_on_disk()`.
         * @returns whether the file is externally modified.
         */
        is_externally_modified(): boolean;
        /**
         * Returns whether the file is local. If the {@link GtkSource.File.location} is `null`,
         * returns `false`.
         * @returns whether the file is local.
         */
        is_local(): boolean;
        /**
         * @returns the current value of the {@link GtkSource.File.read_only} property.
         */
        is_readonly(): boolean;
        /**
         * Sets the {@link GtkSource.File.location} property.
         * @param location the new {@link Gio.File}, or `null`.
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
            'notify::max-size': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            buffer: Buffer;
            file: File;
            input_stream: Gio.InputStream;
            inputStream: Gio.InputStream;
            location: Gio.File;
            max_size: number;
            maxSize: number;
        }
    }

    /**
     * @gir-type Class
     */
    class FileLoader extends GObject.Object {
        static $gtype: GObject.GType<FileLoader>;

        // Properties

        /**
         * The {@link GtkSource.Buffer} to load the contents into. The
         * {@link GtkSource.FileLoader} object has a weak reference to the buffer.
         * @since 3.14
         * @construct-only
         */
        get buffer(): Buffer;
        /**
         * The {@link GtkSource.File}. The {@link GtkSource.FileLoader} object has a weak
         * reference to the file.
         * @since 3.14
         * @construct-only
         */
        get file(): File;
        /**
         * The {@link Gio.InputStream} to load. Useful for reading stdin. If this property
         * is set, the {@link GtkSource.FileLoader.location} property is ignored.
         * @since 3.14
         * @construct-only
         */
        get input_stream(): Gio.InputStream;
        /**
         * The {@link Gio.InputStream} to load. Useful for reading stdin. If this property
         * is set, the {@link GtkSource.FileLoader.location} property is ignored.
         * @since 3.14
         * @construct-only
         */
        get inputStream(): Gio.InputStream;
        /**
         * The {@link Gio.File} to load, or `null` to load the contents from the
         * {@link GtkSource.FileLoader.input_stream}.
         *
         * If the {@link GtkSource.FileLoader.input_stream} is `null`, by default the
         * location is taken from the {@link GtkSource.File} at construction time.
         * @since 3.14
         * @construct-only
         */
        get location(): Gio.File;
        /**
         * The maximum number of bytes to read.
         *
         * If the content to load exceeds the limit,
         * {@link GtkSource.FileLoaderError.TOO_BIG} is returned.
         * @since 299.6
         */
        get max_size(): number;
        set max_size(val: number);
        /**
         * The maximum number of bytes to read.
         *
         * If the content to load exceeds the limit,
         * {@link GtkSource.FileLoaderError.TOO_BIG} is returned.
         * @since 299.6
         */
        get maxSize(): number;
        set maxSize(val: number);

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
         * @returns the value of the   {@link GtkSource.FileLoader.buffer} property.
         */
        get_buffer(): Buffer | null;
        /**
         * @returns the detected compression type.
         */
        get_compression_type(): CompressionType;
        /**
         * @returns the detected encoding.
         */
        get_encoding(): Encoding;
        /**
         * @returns the value of the   {@link GtkSource.FileLoader.file} property.
         */
        get_file(): File | null;
        /**
         * @returns the value of the   {@link GtkSource.FileLoader.input_stream} property.
         */
        get_input_stream(): Gio.InputStream | null;
        /**
         * @returns the value of the   {@link GtkSource.FileLoader.location} property.
         */
        get_location(): Gio.File | null;
        /**
         * @returns the value of the {@link GtkSource.FileLoader.max_size} property.
         */
        get_max_size(): number;
        /**
         * @returns the detected newline type.
         */
        get_newline_type(): NewlineType;
        /**
         * Loads asynchronously the file or input stream contents into the
         * {@link GtkSource.Buffer}. See the {@link Gio.AsyncResult} documentation to know how to use this
         * function.
         * @param io_priority the I/O priority of the request. E.g. `G_PRIORITY_LOW`,   `G_PRIORITY_DEFAULT` or `G_PRIORITY_HIGH`.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param progress_callback function to call back with   progress information, or `null` if progress information is not needed.
         * @param progress_callback_notify function to call on   `progress_callback_data` when the `progress_callback` is no longer needed, or   `null`.
         */
        load_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            progress_callback?: Gio.FileProgressCallback | null,
            progress_callback_notify?: GLib.DestroyNotify | null,
        ): globalThis.Promise<boolean>;
        /**
         * Loads asynchronously the file or input stream contents into the
         * {@link GtkSource.Buffer}. See the {@link Gio.AsyncResult} documentation to know how to use this
         * function.
         * @param io_priority the I/O priority of the request. E.g. `G_PRIORITY_LOW`,   `G_PRIORITY_DEFAULT` or `G_PRIORITY_HIGH`.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param progress_callback function to call back with   progress information, or `null` if progress information is not needed.
         * @param progress_callback_notify function to call on   `progress_callback_data` when the `progress_callback` is no longer needed, or   `null`.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is   satisfied.
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
         * {@link GtkSource.Buffer}. See the {@link Gio.AsyncResult} documentation to know how to use this
         * function.
         * @param io_priority the I/O priority of the request. E.g. `G_PRIORITY_LOW`,   `G_PRIORITY_DEFAULT` or `G_PRIORITY_HIGH`.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param progress_callback function to call back with   progress information, or `null` if progress information is not needed.
         * @param progress_callback_notify function to call on   `progress_callback_data` when the `progress_callback` is no longer needed, or   `null`.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is   satisfied.
         */
        load_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            progress_callback?: Gio.FileProgressCallback | null,
            progress_callback_notify?: GLib.DestroyNotify | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes a file loading started with `gtk_source_file_loader_load_async()`.
         *
         * If the contents has been loaded, the following {@link GtkSource.File} properties will
         * be updated: the location, the encoding, the newline type and the compression
         * type.
         * @param result a {@link Gio.AsyncResult}.
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
         * If you don't call this function, the default list will be (in that order):
         * 1. If set, the {@link GtkSource.File}'s encoding as returned by
         *    `gtk_source_file_get_encoding()`.
         * 2. Plus the default candidates as returned by
         *    `gtk_source_encoding_get_default_candidates()`.
         * @param candidate_encodings a list of   {@link GtkSource.Encoding}'s.
         */
        set_candidate_encodings(candidate_encodings: Encoding[]): void;
        /**
         * Sets the {@link GtkSource.FileLoader.max_size} property.
         * @param max_size the new value.
         */
        set_max_size(max_size: number): void;
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

    /**
     * @gir-type Class
     */
    class FileSaver extends GObject.Object {
        static $gtype: GObject.GType<FileSaver>;

        // Properties

        /**
         * The {@link GtkSource.Buffer} to save. The {@link GtkSource.FileSaver} object has a
         * weak reference to the buffer.
         * @since 3.14
         * @construct-only
         */
        get buffer(): Buffer;
        /**
         * The compression type.
         * @since 3.14
         */
        get compression_type(): CompressionType;
        set compression_type(val: CompressionType);
        /**
         * The compression type.
         * @since 3.14
         */
        get compressionType(): CompressionType;
        set compressionType(val: CompressionType);
        /**
         * The file's encoding.
         * @since 3.14
         */
        get encoding(): Encoding;
        set encoding(val: Encoding);
        /**
         * The {@link GtkSource.File}. The {@link GtkSource.FileSaver} object has a weak
         * reference to the file.
         * @since 3.14
         * @construct-only
         */
        get file(): File;
        /**
         * File saving flags.
         * @since 3.14
         */
        get flags(): FileSaverFlags;
        set flags(val: FileSaverFlags);
        /**
         * The {@link Gio.File} where to save the buffer. By default the location is taken
         * from the {@link GtkSource.File} at construction time.
         * @since 3.14
         * @construct-only
         */
        get location(): Gio.File;
        /**
         * The newline type.
         * @since 3.14
         */
        get newline_type(): NewlineType;
        set newline_type(val: NewlineType);
        /**
         * The newline type.
         * @since 3.14
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
         * @returns the {@link GtkSource.Buffer} to save.
         */
        get_buffer(): Buffer;
        /**
         * @returns the compression type.
         */
        get_compression_type(): CompressionType;
        /**
         * @returns the encoding.
         */
        get_encoding(): Encoding;
        /**
         * @returns the {@link GtkSource.File}.
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
         * @param progress_callback function to call back with   progress information, or `null` if progress information is not needed.
         * @param progress_callback_notify function to call on   `progress_callback_data` when the `progress_callback` is no longer needed, or   `null`.
         */
        save_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            progress_callback?: Gio.FileProgressCallback | null,
            progress_callback_notify?: GLib.DestroyNotify | null,
        ): globalThis.Promise<boolean>;
        /**
         * Saves asynchronously the buffer into the file. See the {@link Gio.AsyncResult}
         * documentation to know how to use this function.
         * @param io_priority the I/O priority of the request. E.g. `G_PRIORITY_LOW`,   `G_PRIORITY_DEFAULT` or `G_PRIORITY_HIGH`.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param progress_callback function to call back with   progress information, or `null` if progress information is not needed.
         * @param progress_callback_notify function to call on   `progress_callback_data` when the `progress_callback` is no longer needed, or   `null`.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is   satisfied.
         */
        save_async(
            io_priority: number,
            cancellable: Gio.Cancellable | null,
            progress_callback: Gio.FileProgressCallback | null,
            progress_callback_notify: GLib.DestroyNotify | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Saves asynchronously the buffer into the file. See the {@link Gio.AsyncResult}
         * documentation to know how to use this function.
         * @param io_priority the I/O priority of the request. E.g. `G_PRIORITY_LOW`,   `G_PRIORITY_DEFAULT` or `G_PRIORITY_HIGH`.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param progress_callback function to call back with   progress information, or `null` if progress information is not needed.
         * @param progress_callback_notify function to call on   `progress_callback_data` when the `progress_callback` is no longer needed, or   `null`.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is   satisfied.
         */
        save_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            progress_callback?: Gio.FileProgressCallback | null,
            progress_callback_notify?: GLib.DestroyNotify | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes a file saving started with `gtk_source_file_saver_save_async()`.
         *
         * If the file has been saved successfully, the following {@link GtkSource.File}
         * properties will be updated: the location, the encoding, the newline type and
         * the compression type.
         *
         * Since the 3.20 version, `gtk_text_buffer_set_modified()` is called with `false`
         * if the file has been saved successfully.
         * @param result a {@link Gio.AsyncResult}.
         * @returns whether the file was saved successfully.
         */
        save_finish(result: Gio.AsyncResult): boolean;
        /**
         * Sets the compression type. By default the compression type is taken from the
         * {@link GtkSource.File}.
         * @param compression_type the new compression type.
         */
        set_compression_type(compression_type: CompressionType | null): void;
        /**
         * Sets the encoding. If `encoding` is `null`, the UTF-8 encoding will be set.
         * By default the encoding is taken from the {@link GtkSource.File}.
         * @param encoding the new encoding, or `null` for UTF-8.
         */
        set_encoding(encoding?: Encoding | null): void;
        /**
         * @param flags the new flags.
         */
        set_flags(flags: FileSaverFlags | null): void;
        /**
         * Sets the newline type. By default the newline type is taken from the
         * {@link GtkSource.File}.
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

    /**
     * @gir-type Class
     */
    class Gutter extends GObject.Object {
        static $gtype: GObject.GType<Gutter>;

        // Properties

        /**
         * The {@link GtkSource.View} of the gutter.
         * @construct-only
         */
        get view(): View;
        /**
         * The text window type on which the window is placed.
         * @construct-only
         */
        get window_type(): Gtk.TextWindowType;
        /**
         * The text window type on which the window is placed.
         * @construct-only
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

        /** @signal */
        connect<K extends keyof Gutter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gutter.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Gutter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gutter.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Gutter.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gutter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Finds the {@link GtkSource.GutterRenderer} at (x, y).
         * @param x The x position to get identified.
         * @param y The y position to get identified.
         * @returns the renderer at (x, y) or `null`.
         */
        get_renderer_at_pos(x: number, y: number): GutterRenderer | null;
        /**
         * @returns the associated {@link GtkSource.View}.
         */
        get_view(): View;
        /**
         * @returns the {@link Gtk.TextWindowType} of `gutter`.
         */
        get_window_type(): Gtk.TextWindowType;
        /**
         * Insert `renderer` into the gutter. If `renderer` is yet unowned then gutter
         * claims its ownership. Otherwise just increases renderer's reference count.
         * `renderer` cannot be already inserted to another gutter.
         * @param renderer a gutter renderer (must inherit from {@link GtkSource.GutterRenderer}).
         * @param position the renderer position.
         * @returns `true` if operation succeeded. Otherwise `false`.
         */
        insert(renderer: GutterRenderer, position: number): boolean;
        /**
         * Invalidates the drawable area of the gutter. You can use this to force a
         * redraw of the gutter if something has changed and needs to be redrawn.
         */
        queue_draw(): void;
        /**
         * Removes `renderer` from `gutter`.
         * @param renderer a {@link GtkSource.GutterRenderer}.
         */
        remove(renderer: GutterRenderer): void;
        /**
         * Reorders `renderer` in `gutter` to new `position`.
         * @param renderer a {@link Gtk.CellRenderer}.
         * @param position the new renderer position.
         */
        reorder(renderer: GutterRenderer, position: number): void;
    }

    namespace GutterRenderer {
        // Signal signatures
        interface SignalSignatures extends GObject.InitiallyUnowned.SignalSignatures {
            /**
             * The ::activate signal is emitted when the renderer is
             * activated.
             * @signal
             * @run-last
             */
            activate: (arg0: Gtk.TextIter, arg1: Gdk.Rectangle, arg2: Gdk.Event) => void;
            /**
             * The ::query-activatable signal is emitted when the renderer
             * can possibly be activated.
             * @signal
             * @run-last
             */
            'query-activatable': (arg0: Gtk.TextIter, arg1: Gdk.Rectangle, arg2: Gdk.Event) => boolean | void;
            /**
             * The ::query-data signal is emitted when the renderer needs
             * to be filled with data just before a cell is drawn. This can
             * be used by general renderer implementations to allow render
             * data to be filled in externally.
             * @signal
             * @run-last
             */
            'query-data': (arg0: Gtk.TextIter, arg1: Gtk.TextIter, arg2: GutterRendererState) => void;
            /**
             * The ::query-tooltip signal is emitted when the renderer can
             * show a tooltip.
             * @signal
             * @run-last
             */
            'query-tooltip': (
                arg0: Gtk.TextIter,
                arg1: Gdk.Rectangle,
                arg2: number,
                arg3: number,
                arg4: Gtk.Tooltip,
            ) => boolean | void;
            /**
             * The ::queue-draw signal is emitted when the renderer needs
             * to be redrawn. Use `gtk_source_gutter_renderer_queue_draw()`
             * to emit this signal from an implementation of the
             * {@link GtkSource.GutterRenderer} interface.
             * @signal
             * @run-last
             */
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

    /**
     * @gir-type Class
     */
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
         * @read-only
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
         * @read-only
         */
        get window_type(): Gtk.TextWindowType;
        /**
         * The window type of the view on which the renderer is placed (left,
         * or right).
         * @read-only
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

        /** @signal */
        connect<K extends keyof GutterRenderer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GutterRenderer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof GutterRenderer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GutterRenderer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof GutterRenderer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GutterRenderer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Emits the {@link GtkSource.GutterRenderer.SignalSignatures.activate | GtkSource.GutterRenderer::activate} signal of the renderer. This is
         * called from {@link GtkSource.Gutter} and should never have to be called manually.
         * @param iter a {@link Gtk.TextIter} at the start of the line where the renderer is activated
         * @param area a {@link Gdk.Rectangle} of the cell area where the renderer is activated
         * @param event the event that triggered the activation
         * @virtual
         */
        vfunc_activate(iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): void;
        /**
         * Called when drawing a region begins. The region to be drawn is indicated
         * by `start` and `end`. The purpose is to allow the implementation to precompute
         * some state before the draw method is called for each cell.
         * @param cr a {@link cairo.Context}
         * @param background_area a {@link Gdk.Rectangle}
         * @param cell_area a {@link Gdk.Rectangle}
         * @param start a {@link Gtk.TextIter}
         * @param end a {@link Gtk.TextIter}
         * @virtual
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
         * @param old_buffer the old {@link Gtk.TextBuffer}.
         * @virtual
         */
        vfunc_change_buffer(old_buffer?: Gtk.TextBuffer | null): void;
        /**
         * This is called when the text view changes for `renderer`.
         * @param old_view the old {@link Gtk.TextView}.
         * @virtual
         */
        vfunc_change_view(old_view?: Gtk.TextView | null): void;
        /**
         * Main renderering method. Implementations should implement this method to draw
         * onto the cairo context. The `background_area` indicates the total area of the
         * cell to be drawn. The `cell_area` indicates the area where content can be
         * drawn (text, images, etc).
         *
         * The `background_area` is the `cell_area` plus the padding on each side (two
         * times the {@link GtkSource.GutterRenderer.xpad} horizontally and two times the
         * {@link GtkSource.GutterRenderer.ypad} vertically, so that the `cell_area` is centered
         * inside `background_area`).
         *
         * The `state` argument indicates the current state of the renderer and should
         * be taken into account to properly draw the different possible states
         * (cursor, prelit, selected) if appropriate.
         * @param cr the cairo render context
         * @param background_area a {@link Gdk.Rectangle} indicating the total area to be drawn
         * @param cell_area a {@link Gdk.Rectangle} indicating the area to draw content
         * @param start a {@link Gtk.TextIter}
         * @param end a {@link Gtk.TextIter}
         * @param state a {@link GtkSource.GutterRendererState}
         * @virtual
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
         * @virtual
         */
        vfunc_end(): void;
        /**
         * Get whether the renderer is activatable at the location in `event`. This is
         * called from {@link GtkSource.Gutter} to determine whether a renderer is activatable
         * using the mouse pointer.
         * @param iter a {@link Gtk.TextIter} at the start of the line to be activated
         * @param area a {@link Gdk.Rectangle} of the cell area to be activated
         * @param event the event that triggered the query
         * @virtual
         */
        vfunc_query_activatable(iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): boolean;
        /**
         * Emit the {@link GtkSource.GutterRenderer.SignalSignatures.query_data | GtkSource.GutterRenderer::query-data} signal. This function is called
         * to query for data just before rendering a cell. This is called from the
         * {@link GtkSource.Gutter}.  Implementations can override the default signal handler or
         * can connect a signal handler externally to the
         * {@link GtkSource.GutterRenderer.SignalSignatures.query_data | GtkSource.GutterRenderer::query-data} signal.
         * @param start a {@link Gtk.TextIter}.
         * @param end a {@link Gtk.TextIter}.
         * @param state a {@link GtkSource.GutterRendererState}.
         * @virtual
         */
        vfunc_query_data(start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState): void;
        /**
         * Emits the {@link GtkSource.GutterRenderer.SignalSignatures.query_tooltip | GtkSource.GutterRenderer::query-tooltip} signal. This function is
         * called from {@link GtkSource.Gutter}. Implementations can override the default signal
         * handler or can connect to the signal externally.
         * @param iter a {@link Gtk.TextIter}.
         * @param area a {@link Gdk.Rectangle}.
         * @param x The x position of the tooltip.
         * @param y The y position of the tooltip.
         * @param tooltip a {@link Gtk.Tooltip}.
         * @virtual
         */
        vfunc_query_tooltip(
            iter: Gtk.TextIter,
            area: Gdk.Rectangle,
            x: number,
            y: number,
            tooltip: Gtk.Tooltip,
        ): boolean;
        /**
         * Emits the {@link GtkSource.GutterRenderer.SignalSignatures.queue_draw | GtkSource.GutterRenderer::queue-draw} signal of the renderer. Call
         * this from an implementation to inform that the renderer has changed such that
         * it needs to redraw.
         * @virtual
         */
        vfunc_queue_draw(): void;

        // Methods

        /**
         * Emits the {@link GtkSource.GutterRenderer.SignalSignatures.activate | GtkSource.GutterRenderer::activate} signal of the renderer. This is
         * called from {@link GtkSource.Gutter} and should never have to be called manually.
         * @param iter a {@link Gtk.TextIter} at the start of the line where the renderer is activated
         * @param area a {@link Gdk.Rectangle} of the cell area where the renderer is activated
         * @param event the event that triggered the activation
         */
        activate(iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): void;
        /**
         * Called when drawing a region begins. The region to be drawn is indicated
         * by `start` and `end`. The purpose is to allow the implementation to precompute
         * some state before the draw method is called for each cell.
         * @param cr a {@link cairo.Context}
         * @param background_area a {@link Gdk.Rectangle}
         * @param cell_area a {@link Gdk.Rectangle}
         * @param start a {@link Gtk.TextIter}
         * @param end a {@link Gtk.TextIter}
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
         * times the {@link GtkSource.GutterRenderer.xpad} horizontally and two times the
         * {@link GtkSource.GutterRenderer.ypad} vertically, so that the `cell_area` is centered
         * inside `background_area`).
         *
         * The `state` argument indicates the current state of the renderer and should
         * be taken into account to properly draw the different possible states
         * (cursor, prelit, selected) if appropriate.
         * @param cr the cairo render context
         * @param background_area a {@link Gdk.Rectangle} indicating the total area to be drawn
         * @param cell_area a {@link Gdk.Rectangle} indicating the area to draw content
         * @param start a {@link Gtk.TextIter}
         * @param end a {@link Gtk.TextIter}
         * @param state a {@link GtkSource.GutterRendererState}
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
         * @returns a {@link GtkSource.GutterRendererAlignmentMode}
         */
        get_alignment_mode(): GutterRendererAlignmentMode;
        /**
         * Get the background color of the renderer.
         * @returns `true` if the background color is set, `false` otherwise
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
         * @returns a {@link Gtk.TextView}
         */
        get_view(): Gtk.TextView;
        /**
         * Get whether the gutter renderer is visible.
         * @returns `true` if the renderer is visible, `false` otherwise
         */
        get_visible(): boolean;
        /**
         * Get the {@link Gtk.TextWindowType} associated with the gutter renderer.
         * @returns a {@link Gtk.TextWindowType}
         */
        get_window_type(): Gtk.TextWindowType;
        /**
         * Get whether the renderer is activatable at the location in `event`. This is
         * called from {@link GtkSource.Gutter} to determine whether a renderer is activatable
         * using the mouse pointer.
         * @param iter a {@link Gtk.TextIter} at the start of the line to be activated
         * @param area a {@link Gdk.Rectangle} of the cell area to be activated
         * @param event the event that triggered the query
         * @returns `true` if the renderer can be activated, `false` otherwise
         */
        query_activatable(iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): boolean;
        /**
         * Emit the {@link GtkSource.GutterRenderer.SignalSignatures.query_data | GtkSource.GutterRenderer::query-data} signal. This function is called
         * to query for data just before rendering a cell. This is called from the
         * {@link GtkSource.Gutter}.  Implementations can override the default signal handler or
         * can connect a signal handler externally to the
         * {@link GtkSource.GutterRenderer.SignalSignatures.query_data | GtkSource.GutterRenderer::query-data} signal.
         * @param start a {@link Gtk.TextIter}.
         * @param end a {@link Gtk.TextIter}.
         * @param state a {@link GtkSource.GutterRendererState}.
         */
        query_data(start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState | null): void;
        /**
         * Emits the {@link GtkSource.GutterRenderer.SignalSignatures.query_tooltip | GtkSource.GutterRenderer::query-tooltip} signal. This function is
         * called from {@link GtkSource.Gutter}. Implementations can override the default signal
         * handler or can connect to the signal externally.
         * @param iter a {@link Gtk.TextIter}.
         * @param area a {@link Gdk.Rectangle}.
         * @param x The x position of the tooltip.
         * @param y The y position of the tooltip.
         * @param tooltip a {@link Gtk.Tooltip}.
         * @returns `true` if the tooltip has been set, `false` otherwise
         */
        query_tooltip(iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip): boolean;
        /**
         * Emits the {@link GtkSource.GutterRenderer.SignalSignatures.queue_draw | GtkSource.GutterRenderer::queue-draw} signal of the renderer. Call
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
         * @param mode a {@link GtkSource.GutterRendererAlignmentMode}
         */
        set_alignment_mode(mode: GutterRendererAlignmentMode | null): void;
        /**
         * Set the background color of the renderer. If `color` is set to `null`, the
         * renderer will not have a background color.
         * @param color a {@link Gdk.RGBA} or `null`
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

    /**
     * @gir-type Class
     */
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

        /** @signal */
        connect<K extends keyof GutterRendererPixbuf.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GutterRendererPixbuf.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof GutterRendererPixbuf.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GutterRendererPixbuf.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
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
         * @returns a {@link Gio.Icon}
         */
        get_gicon(): Gio.Icon;
        get_icon_name(): string;
        /**
         * Get the pixbuf of the renderer.
         * @returns a {@link GdkPixbuf.Pixbuf}
         */
        get_pixbuf(): GdkPixbuf.Pixbuf;
        /**
         * @param icon the icon, or `null`.
         */
        set_gicon(icon?: Gio.Icon | null): void;
        /**
         * @param icon_name the icon name, or `null`.
         */
        set_icon_name(icon_name?: string | null): void;
        /**
         * @param pixbuf the pixbuf, or `null`.
         */
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

    /**
     * @gir-type Class
     */
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

        /** @signal */
        connect<K extends keyof GutterRendererText.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GutterRendererText.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof GutterRendererText.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GutterRendererText.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof GutterRendererText.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GutterRendererText.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Measures the text provided using the pango layout used by the
         * {@link GtkSource.GutterRendererText}.
         * @param text the text to measure.
         */
        measure(text: string): [number, number];
        /**
         * Measures the pango markup provided using the pango layout used by the
         * {@link GtkSource.GutterRendererText}.
         * @param markup the pango markup to measure.
         */
        measure_markup(markup: string): [number, number];
        /**
         * @param markup
         * @param length
         */
        set_markup(markup: string, length: number): void;
        /**
         * @param text
         * @param length
         */
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

    /**
     * @gir-type Class
     */
    class Language extends GObject.Object {
        static $gtype: GObject.GType<Language>;

        // Properties

        /**
         * @read-only
         */
        get hidden(): boolean;
        /**
         * @read-only
         */
        get id(): string;
        /**
         * @read-only
         */
        get name(): string;
        /**
         * @read-only
         */
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

        /** @signal */
        connect<K extends keyof Language.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Language.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Language.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Language.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Language.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Language.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Returns the globs associated to this language. This is just
         * an utility wrapper around `gtk_source_language_get_metadata()` to
         * retrieve the "globs" metadata property and split it into an array.
         * @returns a newly-allocated `null` terminated array containing the globs or `null` if no globs are found. The returned array must be freed with `g_strfreev()`.
         */
        get_globs(): string[] | null;
        /**
         * Returns whether the language should be hidden from the user.
         * @returns `true` if the language should be hidden, `false` otherwise.
         */
        get_hidden(): boolean;
        /**
         * Returns the ID of the language. The ID is not locale-dependent.
         * The returned string is owned by `language` and should not be freed
         * or modified.
         * @returns the ID of `language`.
         */
        get_id(): string;
        /**
         * @param name metadata property name.
         * @returns value of property `name` stored in the metadata of `language` or `null` if language does not contain the specified metadata property. The returned string is owned by `language` and should not be freed or modified.
         */
        get_metadata(name: string): string | null;
        /**
         * Returns the mime types associated to this language. This is just
         * an utility wrapper around `gtk_source_language_get_metadata()` to
         * retrieve the "mimetypes" metadata property and split it into an
         * array.
         * @returns a newly-allocated `null` terminated array containing the mime types or `null` if no mime types are found. The returned array must be freed with `g_strfreev()`.
         */
        get_mime_types(): string[] | null;
        /**
         * Returns the localized name of the language.
         * The returned string is owned by `language` and should not be freed
         * or modified.
         * @returns the name of `language`.
         */
        get_name(): string;
        /**
         * Returns the localized section of the language.
         * Each language belong to a section (ex. HTML belogs to the
         * Markup section).
         * The returned string is owned by `language` and should not be freed
         * or modified.
         * @returns the section of `language`.
         */
        get_section(): string;
        /**
         * Returns the ID of the style to use if the specified `style_id`
         * is not present in the current style scheme.
         * @param style_id a style ID.
         * @returns the ID of the style to use if the specified `style_id` is not present in the current style scheme or `null` if the style has no fallback defined. The returned string is owned by the `language` and must not be modified.
         */
        get_style_fallback(style_id: string): string | null;
        /**
         * Returns the ids of the styles defined by this `language`.
         * @returns a newly-allocated `null` terminated array containing ids of the styles defined by this `language` or `null` if no style is defined. The returned array must be freed with `g_strfreev()`.
         */
        get_style_ids(): string[] | null;
        /**
         * Returns the name of the style with ID `style_id` defined by this `language`.
         * @param style_id a style ID.
         * @returns the name of the style with ID `style_id` defined by this `language` or `null` if the style has no name or there is no style with ID `style_id` defined by this `language`. The returned string is owned by the `language` and must not be modified.
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

    /**
     * @gir-type Class
     */
    class LanguageManager extends GObject.Object {
        static $gtype: GObject.GType<LanguageManager>;

        // Properties

        /**
         * @read-only
         */
        get language_ids(): string[];
        /**
         * @read-only
         */
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

        /** @signal */
        connect<K extends keyof LanguageManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LanguageManager.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof LanguageManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LanguageManager.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof LanguageManager.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<LanguageManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Returns the default {@link GtkSource.LanguageManager} instance.
         */
        static get_default(): LanguageManager;

        // Methods

        /**
         * Gets the {@link GtkSource.Language} identified by the given `id` in the language
         * manager.
         * @param id a language id.
         * @returns a {@link GtkSource.Language}, or `null` if there is no language identified by the given `id`. Return value is owned by `lm` and should not be freed.
         */
        get_language(id: string): Language | null;
        /**
         * Returns the ids of the available languages.
         * @returns a `null`-terminated array of strings containing the ids of the available languages or `null` if no language is available. The array is sorted alphabetically according to the language name. The array is owned by `lm` and must not be modified.
         */
        get_language_ids(): string[] | null;
        /**
         * Gets the list directories where `lm` looks for language files.
         * @returns `null`-terminated array containg a list of language files directories. The array is owned by `lm` and must not be modified.
         */
        get_search_path(): string[];
        /**
         * Picks a {@link GtkSource.Language} for given file name and content type,
         * according to the information in lang files. Either `filename` or
         * `content_type` may be `null`. This function can be used as follows:
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
         * etc. Use `gtk_source_language_get_mime_types()` and `gtk_source_language_get_globs()`
         * if you need full control over file -> language mapping.
         * @param filename a filename in Glib filename encoding, or `null`.
         * @param content_type a content type (as in GIO API), or `null`.
         * @returns a {@link GtkSource.Language}, or `null` if there is no suitable language for given `filename` and/or `content_type`. Return value is owned by `lm` and should not be freed.
         */
        guess_language(filename?: string | null, content_type?: string | null): Language | null;
        /**
         * Sets the list of directories where the `lm` looks for
         * language files.
         * If `dirs` is `null`, the search path is reset to default.
         *
         * <note>
         *   <para>
         *     At the moment this function can be called only before the
         *     language files are loaded for the first time. In practice
         *     to set a custom search path for a {@link GtkSource.LanguageManager},
         *     you have to call this function right after creating it.
         *   </para>
         * </note>
         * @param dirs a `null`-terminated array of strings or `null`.
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

    /**
     * @gir-type Class
     */
    class Mark extends Gtk.TextMark {
        static $gtype: GObject.GType<Mark>;

        // Properties

        /**
         * The category of the {@link GtkSource.Mark}, classifies the mark and controls
         * which pixbuf is used and with which priority it is drawn.
         * @construct-only
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

        /** @signal */
        connect<K extends keyof Mark.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Mark.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Mark.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Mark.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Mark.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Mark.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Returns the mark category.
         * @returns the category of the {@link GtkSource.Mark}.
         */
        get_category(): string;
        /**
         * Returns the next {@link GtkSource.Mark} in the buffer or `null` if the mark
         * was not added to a buffer. If there is no next mark, `null` will be returned.
         *
         * If `category` is `null`, looks for marks of any category.
         * @param category a string specifying the mark category, or `null`.
         * @returns the next {@link GtkSource.Mark}, or `null`.
         */
        next(category?: string | null): Mark | null;
        /**
         * Returns the previous {@link GtkSource.Mark} in the buffer or `null` if the mark
         * was not added to a buffer. If there is no previous mark, `null` is returned.
         *
         * If `category` is `null`, looks for marks of any category
         * @param category a string specifying the mark category, or `null`.
         * @returns the previous {@link GtkSource.Mark}, or `null`.
         */
        prev(category: string): Mark | null;
    }

    namespace MarkAttributes {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * The code should connect to this signal to provide a tooltip for given
             * `mark`. The tooltip can contain a markup.
             * @signal
             * @run-last
             */
            'query-tooltip-markup': (arg0: Mark) => string;
            /**
             * The code should connect to this signal to provide a tooltip for given
             * `mark`. The tooltip should be just a plain text.
             * @signal
             * @run-last
             */
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

    /**
     * @gir-type Class
     */
    class MarkAttributes extends GObject.Object {
        static $gtype: GObject.GType<MarkAttributes>;

        // Properties

        /**
         * A color used for background of a line.
         */
        get background(): Gdk.RGBA;
        set background(val: Gdk.RGBA);
        /**
         * A {@link Gio.Icon} that may be a base of a rendered icon.
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
         * A {@link GdkPixbuf.Pixbuf} that may be a base of a rendered icon.
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

        /** @signal */
        connect<K extends keyof MarkAttributes.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MarkAttributes.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof MarkAttributes.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MarkAttributes.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof MarkAttributes.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MarkAttributes.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Stores background color in `background`.
         * @returns whether background color for `attributes` was set.
         */
        get_background(): [boolean, Gdk.RGBA];
        /**
         * Gets a {@link Gio.Icon} to be used as a base for rendered icon. Note that the icon can
         * be `null` if it wasn't set earlier.
         * @returns An icon. The icon belongs to `attributes` and should not be unreffed.
         */
        get_gicon(): Gio.Icon;
        /**
         * Gets a name of an icon to be used as a base for rendered icon. Note that the
         * icon name can be `null` if it wasn't set earlier.
         * @returns An icon name. The string belongs to `attributes` and should not be freed.
         */
        get_icon_name(): string;
        /**
         * Gets a {@link GdkPixbuf.Pixbuf} to be used as a base for rendered icon. Note that the
         * pixbuf can be `null` if it wasn't set earlier.
         * @returns A pixbuf. The pixbuf belongs to `attributes` and should not be unreffed.
         */
        get_pixbuf(): GdkPixbuf.Pixbuf;
        /**
         * Queries for a tooltip by emitting
         * a {@link GtkSource.MarkAttributes.SignalSignatures.query_tooltip_markup | GtkSource.MarkAttributes::query-tooltip-markup} signal. The tooltip may contain
         * a markup.
         * @param mark a {@link GtkSource.Mark}.
         * @returns A tooltip. The returned string should be freed by using `g_free()` when done with it.
         */
        get_tooltip_markup(mark: Mark): string;
        /**
         * Queries for a tooltip by emitting
         * a {@link GtkSource.MarkAttributes.SignalSignatures.query_tooltip_text | GtkSource.MarkAttributes::query-tooltip-text} signal. The tooltip is a plain
         * text.
         * @param mark a {@link GtkSource.Mark}.
         * @returns A tooltip. The returned string should be freed by using `g_free()` when done with it.
         */
        get_tooltip_text(mark: Mark): string;
        /**
         * Renders an icon of given size. The base of the icon is set by the last call
         * to one of: `gtk_source_mark_attributes_set_pixbuf()`,
         * `gtk_source_mark_attributes_set_gicon()` or
         * `gtk_source_mark_attributes_set_icon_name()`. `size` cannot be lower than 1.
         * @param widget widget of which style settings may be used.
         * @param size size of the rendered icon.
         * @returns A rendered pixbuf. The pixbuf belongs to `attributes` and should not be unreffed.
         */
        render_icon(widget: Gtk.Widget, size: number): GdkPixbuf.Pixbuf;
        /**
         * Sets background color to the one given in `background`.
         * @param background a {@link Gdk.RGBA}.
         */
        set_background(background: Gdk.RGBA): void;
        /**
         * Sets an icon to be used as a base for rendered icon.
         * @param gicon a {@link Gio.Icon} to be used.
         */
        set_gicon(gicon: Gio.Icon): void;
        /**
         * Sets a name of an icon to be used as a base for rendered icon.
         * @param icon_name name of an icon to be used.
         */
        set_icon_name(icon_name: string): void;
        /**
         * Sets a pixbuf to be used as a base for rendered icon.
         * @param pixbuf a {@link GdkPixbuf.Pixbuf} to be used.
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

    /**
     * @gir-type Class
     */
    class PrintCompositor extends GObject.Object {
        static $gtype: GObject.GType<PrintCompositor>;

        // Properties

        /**
         * Name of the font used for the text body.
         *
         * Accepted values are strings representing a font description Pango can understand.
         * (e.g. &quot;Monospace 10&quot;). See `pango_font_description_from_string()`
         * for a description of the format of the string representation.
         *
         * The value of this property cannot be changed anymore after the first
         * call to the `gtk_source_print_compositor_paginate()` function.
         * @since 2.2
         */
        get body_font_name(): string;
        set body_font_name(val: string);
        /**
         * Name of the font used for the text body.
         *
         * Accepted values are strings representing a font description Pango can understand.
         * (e.g. &quot;Monospace 10&quot;). See `pango_font_description_from_string()`
         * for a description of the format of the string representation.
         *
         * The value of this property cannot be changed anymore after the first
         * call to the `gtk_source_print_compositor_paginate()` function.
         * @since 2.2
         */
        get bodyFontName(): string;
        set bodyFontName(val: string);
        /**
         * The GtkSourceBuffer object to print.
         * @since 2.2
         * @construct-only
         */
        get buffer(): Buffer;
        /**
         * Name of the font used to print page footer.
         * If this property is unspecified, the text body font is used.
         *
         * Accepted values are strings representing a font description Pango can understand.
         * (e.g. &quot;Monospace 10&quot;). See `pango_font_description_from_string()`
         * for a description of the format of the string representation.
         *
         * The value of this property cannot be changed anymore after the first
         * call to the `gtk_source_print_compositor_paginate()` function.
         * @since 2.2
         */
        get footer_font_name(): string;
        set footer_font_name(val: string);
        /**
         * Name of the font used to print page footer.
         * If this property is unspecified, the text body font is used.
         *
         * Accepted values are strings representing a font description Pango can understand.
         * (e.g. &quot;Monospace 10&quot;). See `pango_font_description_from_string()`
         * for a description of the format of the string representation.
         *
         * The value of this property cannot be changed anymore after the first
         * call to the `gtk_source_print_compositor_paginate()` function.
         * @since 2.2
         */
        get footerFontName(): string;
        set footerFontName(val: string);
        /**
         * Name of the font used to print page header.
         * If this property is unspecified, the text body font is used.
         *
         * Accepted values are strings representing a font description Pango can understand.
         * (e.g. &quot;Monospace 10&quot;). See `pango_font_description_from_string()`
         * for a description of the format of the string representation.
         *
         * The value of this property cannot be changed anymore after the first
         * call to the `gtk_source_print_compositor_paginate()` function.
         * @since 2.2
         */
        get header_font_name(): string;
        set header_font_name(val: string);
        /**
         * Name of the font used to print page header.
         * If this property is unspecified, the text body font is used.
         *
         * Accepted values are strings representing a font description Pango can understand.
         * (e.g. &quot;Monospace 10&quot;). See `pango_font_description_from_string()`
         * for a description of the format of the string representation.
         *
         * The value of this property cannot be changed anymore after the first
         * call to the `gtk_source_print_compositor_paginate()` function.
         * @since 2.2
         */
        get headerFontName(): string;
        set headerFontName(val: string);
        /**
         * Whether to print the document with highlighted syntax.
         *
         * The value of this property cannot be changed anymore after the first
         * call to the `gtk_source_print_compositor_paginate()` function.
         * @since 2.2
         */
        get highlight_syntax(): boolean;
        set highlight_syntax(val: boolean);
        /**
         * Whether to print the document with highlighted syntax.
         *
         * The value of this property cannot be changed anymore after the first
         * call to the `gtk_source_print_compositor_paginate()` function.
         * @since 2.2
         */
        get highlightSyntax(): boolean;
        set highlightSyntax(val: boolean);
        /**
         * Name of the font used to print line numbers on the left margin.
         * If this property is unspecified, the text body font is used.
         *
         * Accepted values are strings representing a font description Pango can understand.
         * (e.g. &quot;Monospace 10&quot;). See `pango_font_description_from_string()`
         * for a description of the format of the string representation.
         *
         * The value of this property cannot be changed anymore after the first
         * call to the `gtk_source_print_compositor_paginate()` function.
         * @since 2.2
         */
        get line_numbers_font_name(): string;
        set line_numbers_font_name(val: string);
        /**
         * Name of the font used to print line numbers on the left margin.
         * If this property is unspecified, the text body font is used.
         *
         * Accepted values are strings representing a font description Pango can understand.
         * (e.g. &quot;Monospace 10&quot;). See `pango_font_description_from_string()`
         * for a description of the format of the string representation.
         *
         * The value of this property cannot be changed anymore after the first
         * call to the `gtk_source_print_compositor_paginate()` function.
         * @since 2.2
         */
        get lineNumbersFontName(): string;
        set lineNumbersFontName(val: string);
        /**
         * The number of pages in the document or <code>-1</code> if the
         * document has not been completely paginated.
         * @since 2.2
         * @read-only
         */
        get n_pages(): number;
        /**
         * The number of pages in the document or <code>-1</code> if the
         * document has not been completely paginated.
         * @since 2.2
         * @read-only
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
         * call to the `gtk_source_print_compositor_paginate()` function.
         * @since 2.2
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
         * call to the `gtk_source_print_compositor_paginate()` function.
         * @since 2.2
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
         * call to the `gtk_source_print_compositor_paginate()` function.
         * @since 2.2
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
         * call to the `gtk_source_print_compositor_paginate()` function.
         * @since 2.2
         */
        get printHeader(): boolean;
        set printHeader(val: boolean);
        /**
         * Interval of printed line numbers. If this property is set to 0 no
         * numbers will be printed.  If greater than 0, a number will be
         * printed every "print-line-numbers" lines (i.e. 1 will print all line numbers).
         *
         * The value of this property cannot be changed anymore after the first
         * call to the `gtk_source_print_compositor_paginate()` function.
         * @since 2.2
         */
        get print_line_numbers(): number;
        set print_line_numbers(val: number);
        /**
         * Interval of printed line numbers. If this property is set to 0 no
         * numbers will be printed.  If greater than 0, a number will be
         * printed every "print-line-numbers" lines (i.e. 1 will print all line numbers).
         *
         * The value of this property cannot be changed anymore after the first
         * call to the `gtk_source_print_compositor_paginate()` function.
         * @since 2.2
         */
        get printLineNumbers(): number;
        set printLineNumbers(val: number);
        /**
         * Width of a tab character expressed in spaces.
         *
         * The value of this property cannot be changed anymore after the first
         * call to the `gtk_source_print_compositor_paginate()` function.
         * @since 2.2
         */
        get tab_width(): number;
        set tab_width(val: number);
        /**
         * Width of a tab character expressed in spaces.
         *
         * The value of this property cannot be changed anymore after the first
         * call to the `gtk_source_print_compositor_paginate()` function.
         * @since 2.2
         */
        get tabWidth(): number;
        set tabWidth(val: number);
        /**
         * Whether to wrap lines never, at word boundaries, or at character boundaries.
         *
         * The value of this property cannot be changed anymore after the first
         * call to the `gtk_source_print_compositor_paginate()` function.
         * @since 2.2
         */
        get wrap_mode(): Gtk.WrapMode;
        set wrap_mode(val: Gtk.WrapMode);
        /**
         * Whether to wrap lines never, at word boundaries, or at character boundaries.
         *
         * The value of this property cannot be changed anymore after the first
         * call to the `gtk_source_print_compositor_paginate()` function.
         * @since 2.2
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

        /** @signal */
        connect<K extends keyof PrintCompositor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PrintCompositor.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof PrintCompositor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PrintCompositor.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof PrintCompositor.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PrintCompositor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Draw page `page_nr` for printing on the the Cairo context encapsuled in `context`.
         *
         * This method has been designed to be called in the handler of the {@link Gtk.PrintOperation.SignalSignatures.draw_page | Gtk.PrintOperation::draw_page} signal
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
         * @param context the {@link Gtk.PrintContext} encapsulating the context information that is required when           drawing the page for printing.
         * @param page_nr the number of the page to print.
         */
        draw_page(context: Gtk.PrintContext, page_nr: number): void;
        /**
         * Returns the name of the font used to print the text body. The returned string
         * must be freed with `g_free()`.
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
         * Gets the {@link GtkSource.Buffer} associated with the compositor. The returned
         * object reference is owned by the compositor object and
         * should not be unreferenced.
         * @returns the {@link GtkSource.Buffer} associated with the compositor.
         */
        get_buffer(): Buffer;
        /**
         * Returns the name of the font used to print the page footer.
         * The returned string must be freed with `g_free()`.
         * @returns a new string containing the name of the font used to print the page footer.
         */
        get_footer_font_name(): string;
        /**
         * Returns the name of the font used to print the page header.
         * The returned string must be freed with `g_free()`.
         * @returns a new string containing the name of the font used to print the page header.
         */
        get_header_font_name(): string;
        /**
         * Determines whether the printed text will be highlighted according to the
         * buffer rules.  Note that highlighting will happen
         * only if the buffer to print has highlighting activated.
         * @returns `true` if the printed output will be highlighted.
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
         * The returned string must be freed with `g_free()`.
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
         * footer will be printed if this function returns `true`
         * <emphasis>and</emphasis> some format strings have been specified
         * with `gtk_source_print_compositor_set_footer_format()`.
         * @returns `true` if the footer is set to be printed.
         */
        get_print_footer(): boolean;
        /**
         * Determines if a header is set to be printed for each page.  A
         * header will be printed if this function returns `true`
         * <emphasis>and</emphasis> some format strings have been specified
         * with `gtk_source_print_compositor_set_header_format()`.
         * @returns `true` if the header is set to be printed.
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
         * Each time `gtk_source_print_compositor_paginate()` is invoked, a chunk of the document
         * is paginated. To paginate the entire document, `gtk_source_print_compositor_paginate()`
         * must be invoked multiple times.
         * It returns `true` if the document has been completely paginated, otherwise it returns `false`.
         *
         * This method has been designed to be invoked in the handler of the {@link Gtk.PrintOperation.SignalSignatures.paginate | Gtk.PrintOperation::paginate} signal,
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
         * {@link Gtk.PrintOperation.SignalSignatures.begin_print | Gtk.PrintOperation::begin-print} handler, and set the number of pages from there, like
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
         * @param context the {@link Gtk.PrintContext} whose parameters (e.g. paper size, print margins, etc.) are used by the the `compositor` to paginate the document.
         * @returns `true` if the document has been completely paginated, `false` otherwise.
         */
        paginate(context: Gtk.PrintContext): boolean;
        /**
         * Sets the default font for the printed text.
         *
         * `font_name` should be a
         * string representation of a font description Pango can understand.
         * (e.g. &quot;Monospace 10&quot;). See `pango_font_description_from_string()`
         * for a description of the format of the string representation.
         *
         * This function cannot be called anymore after the first call to the
         * `gtk_source_print_compositor_paginate()` function.
         * @param font_name the name of the default font for the body text.
         */
        set_body_font_name(font_name: string): void;
        /**
         * Sets the bottom margin used by `compositor`.
         * @param margin the new bottom margin in units of `unit`.
         * @param unit the units for `margin`.
         */
        set_bottom_margin(margin: number, unit: Gtk.Unit | null): void;
        /**
         * Sets the font for printing the page footer. If
         * `null` is supplied, the default font (i.e. the one being used for the
         * text) will be used instead.
         *
         * `font_name` should be a
         * string representation of a font description Pango can understand.
         * (e.g. &quot;Monospace 10&quot;). See `pango_font_description_from_string()`
         * for a description of the format of the string representation.
         *
         * This function cannot be called anymore after the first call to the
         * `gtk_source_print_compositor_paginate()` function.
         * @param font_name the name of the font for the footer text, or `null`.
         */
        set_footer_font_name(font_name?: string | null): void;
        /**
         * See `gtk_source_print_compositor_set_header_format()` for more information
         * about the parameters.
         * @param separator `true` if you want a separator line to be printed.
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
         * `null` is supplied, the default font (i.e. the one being used for the
         * text) will be used instead.
         *
         * `font_name` should be a
         * string representation of a font description Pango can understand.
         * (e.g. &quot;Monospace 10&quot;). See `pango_font_description_from_string()`
         * for a description of the format of the string representation.
         *
         * This function cannot be called anymore after the first call to the
         * `gtk_source_print_compositor_paginate()` function.
         * @param font_name the name of the font for header text, or `null`.
         */
        set_header_font_name(font_name?: string | null): void;
        /**
         * Sets strftime like header format strings, to be printed on the
         * left, center and right of the top of each page.  The strings may
         * include strftime(3) codes which will be expanded at print time.
         * A subset of `strftime()` codes are accepted, see `g_date_time_format()`
         * for more details on the accepted format specifiers.
         * Additionally the following format specifiers are accepted:
         * - #N: the page number
         * - #Q: the page count.
         *
         * `separator` specifies if a solid line should be drawn to separate
         * the header from the document text.
         *
         * If `null` is given for any of the three arguments, that particular
         * string will not be printed.
         *
         * For the header to be printed, in
         * addition to specifying format strings, you need to enable header
         * printing with `gtk_source_print_compositor_set_print_header()`.
         *
         * This function cannot be called anymore after the first call to the
         * `gtk_source_print_compositor_paginate()` function.
         * @param separator `true` if you want a separator line to be printed.
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
         * `gtk_source_print_compositor_paginate()` function.
         * @param highlight whether syntax should be highlighted.
         */
        set_highlight_syntax(highlight: boolean): void;
        /**
         * Sets the left margin used by `compositor`.
         * @param margin the new left margin in units of `unit`.
         * @param unit the units for `margin`.
         */
        set_left_margin(margin: number, unit: Gtk.Unit | null): void;
        /**
         * Sets the font for printing line numbers on the left margin.  If
         * `null` is supplied, the default font (i.e. the one being used for the
         * text) will be used instead.
         *
         * `font_name` should be a
         * string representation of a font description Pango can understand.
         * (e.g. &quot;Monospace 10&quot;). See `pango_font_description_from_string()`
         * for a description of the format of the string representation.
         *
         * This function cannot be called anymore after the first call to the
         * `gtk_source_print_compositor_paginate()` function.
         * @param font_name the name of the font for line numbers, or `null`.
         */
        set_line_numbers_font_name(font_name?: string | null): void;
        /**
         * Sets whether you want to print a footer in each page.  The
         * footer consists of three pieces of text and an optional line
         * separator, configurable with
         * `gtk_source_print_compositor_set_footer_format()`.
         *
         * Note that by default the footer format is unspecified, and if it's
         * empty it will not be printed, regardless of this setting.
         *
         * This function cannot be called anymore after the first call to the
         * `gtk_source_print_compositor_paginate()` function.
         * @param print `true` if you want the footer to be printed.
         */
        set_print_footer(print: boolean): void;
        /**
         * Sets whether you want to print a header in each page.  The
         * header consists of three pieces of text and an optional line
         * separator, configurable with
         * `gtk_source_print_compositor_set_header_format()`.
         *
         * Note that by default the header format is unspecified, and if it's
         * empty it will not be printed, regardless of this setting.
         *
         * This function cannot be called anymore after the first call to the
         * `gtk_source_print_compositor_paginate()` function.
         * @param print `true` if you want the header to be printed.
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
         * `gtk_source_print_compositor_paginate()` function.
         * @param interval interval for printed line numbers.
         */
        set_print_line_numbers(interval: number): void;
        /**
         * Sets the right margin used by `compositor`.
         * @param margin the new right margin in units of `unit`.
         * @param unit the units for `margin`.
         */
        set_right_margin(margin: number, unit: Gtk.Unit | null): void;
        /**
         * Sets the width of tabulation in characters for printed text.
         *
         * This function cannot be called anymore after the first call to the
         * `gtk_source_print_compositor_paginate()` function.
         * @param width width of tab in characters.
         */
        set_tab_width(width: number): void;
        /**
         * Sets the top margin used by `compositor`.
         * @param margin the new top margin in units of `unit`
         * @param unit the units for `margin`
         */
        set_top_margin(margin: number, unit: Gtk.Unit | null): void;
        /**
         * Sets the line wrapping mode for the printed text.
         *
         * This function cannot be called anymore after the first call to the
         * `gtk_source_print_compositor_paginate()` function.
         * @param wrap_mode a {@link Gtk.WrapMode}.
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

    /**
     * @gir-type Class
     */
    class Region extends GObject.Object {
        static $gtype: GObject.GType<Region>;

        // Properties

        /**
         * The {@link Gtk.TextBuffer}. The {@link GtkSource.Region} has a weak reference to the
         * buffer.
         * @since 3.22
         * @construct-only
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

        /** @signal */
        connect<K extends keyof Region.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Region.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Region.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Region.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Region.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Region.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Adds `region_to_add` to `region`. `region_to_add` is not modified.
         * @param region_to_add the {@link GtkSource.Region} to add to `region`, or `null`.
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
         * @returns `true` if `start` and `end` have been set successfully (if non-`null`),   or `false` if the `region` is empty.
         */
        get_bounds(): [boolean, Gtk.TextIter | null, Gtk.TextIter | null];
        /**
         * @returns the {@link Gtk.TextBuffer}.
         */
        get_buffer(): Gtk.TextBuffer | null;
        /**
         * Initializes a {@link GtkSource.RegionIter} to the first subregion of `region`. If
         * `region` is empty, `iter` will be initialized to the end iterator.
         */
        get_start_region_iter(): RegionIter;
        /**
         * Returns the intersection between `region1` and `region2`. `region1` and
         * `region2` are not modified.
         * @param region2 a {@link GtkSource.Region}, or `null`.
         * @returns the intersection as a {@link GtkSource.Region}   object.
         */
        intersect_region(region2?: Region | null): Region | null;
        /**
         * Returns the intersection between `region` and the subregion delimited by
         * `_start` and `_end`. `region` is not modified.
         * @param _start the start of the subregion.
         * @param _end the end of the subregion.
         * @returns the intersection as a new   {@link GtkSource.Region}.
         */
        intersect_subregion(_start: Gtk.TextIter, _end: Gtk.TextIter): Region | null;
        /**
         * Returns whether the `region` is empty. A `null` `region` is considered empty.
         * @returns whether the `region` is empty.
         */
        is_empty(): boolean;
        /**
         * Subtracts `region_to_subtract` from `region`. `region_to_subtract` is not
         * modified.
         * @param region_to_subtract the {@link GtkSource.Region} to subtract from   `region`, or `null`.
         */
        subtract_region(region_to_subtract?: Region | null): void;
        /**
         * Subtracts the subregion delimited by `_start` and `_end` from `region`.
         * @param _start the start of the subregion.
         * @param _end the end of the subregion.
         */
        subtract_subregion(_start: Gtk.TextIter, _end: Gtk.TextIter): void;
        /**
         * Gets a string represention of `region`, for debugging purposes.
         *
         * The returned string contains the character offsets of the subregions. It
         * doesn't include a newline character at the end of the string.
         * @returns a string represention of `region`. Free   with `g_free()` when no longer needed.
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

    /**
     * @gir-type Class
     */
    class SearchContext extends GObject.Object {
        static $gtype: GObject.GType<SearchContext>;

        // Properties

        /**
         * The {@link GtkSource.Buffer} associated to the search context.
         * @since 3.10
         * @construct-only
         */
        get buffer(): Buffer;
        /**
         * Highlight the search occurrences.
         * @since 3.10
         */
        get highlight(): boolean;
        set highlight(val: boolean);
        /**
         * A {@link GtkSource.Style}, or `null` for theme's scheme default style.
         * @since 299.2
         */
        get match_style(): Style;
        set match_style(val: Style);
        /**
         * A {@link GtkSource.Style}, or `null` for theme's scheme default style.
         * @since 299.2
         */
        get matchStyle(): Style;
        set matchStyle(val: Style);
        /**
         * The total number of search occurrences. If the search is disabled,
         * the value is 0. If the buffer is not already fully scanned, the value
         * is -1.
         * @since 3.10
         * @read-only
         */
        get occurrences_count(): number;
        /**
         * The total number of search occurrences. If the search is disabled,
         * the value is 0. If the buffer is not already fully scanned, the value
         * is -1.
         * @since 3.10
         * @read-only
         */
        get occurrencesCount(): number;
        /**
         * If the regex search pattern doesn't follow all the rules, this
         * {@link GLib.Error} property will be set. If the pattern is valid, the value is
         * `null`.
         *
         * Free with `g_error_free()`.
         * @since 3.10
         * @read-only
         */
        get regex_error(): any;
        /**
         * If the regex search pattern doesn't follow all the rules, this
         * {@link GLib.Error} property will be set. If the pattern is valid, the value is
         * `null`.
         *
         * Free with `g_error_free()`.
         * @since 3.10
         * @read-only
         */
        get regexError(): any;
        /**
         * The {@link GtkSource.SearchSettings} associated to the search context.
         *
         * This property is construct-only since version 4.0.
         * @since 3.10
         * @construct-only
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

        /** @signal */
        connect<K extends keyof SearchContext.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SearchContext.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof SearchContext.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SearchContext.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
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
         * If the {@link GtkSource.SearchSettings.wrap_around} property is `false`, this function
         * doesn't try to wrap around.
         *
         * The `has_wrapped_around` out parameter is set independently of whether a match
         * is found. So if this function returns `false`, `has_wrapped_around` will have
         * the same value as the {@link GtkSource.SearchSettings.wrap_around} property.
         * @param iter start of search.
         * @returns whether a match was found.
         */
        backward(iter: Gtk.TextIter): [boolean, Gtk.TextIter | null, Gtk.TextIter | null, boolean];
        /**
         * The asynchronous version of `gtk_source_search_context_backward()`.
         *
         * See the documentation of `gtk_source_search_context_backward()` for more
         * details.
         *
         * See the {@link Gio.AsyncResult} documentation to know how to use this function.
         *
         * If the operation is cancelled, the `callback` will only be called if
         * `cancellable` was not `null`. `gtk_source_search_context_backward_async()` takes
         * ownership of `cancellable`, so you can unref it after calling this function.
         * @param iter start of search.
         * @param cancellable a {@link Gio.Cancellable}, or `null`.
         */
        backward_async(
            iter: Gtk.TextIter,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<[Gtk.TextIter | null, Gtk.TextIter | null, boolean]>;
        /**
         * The asynchronous version of `gtk_source_search_context_backward()`.
         *
         * See the documentation of `gtk_source_search_context_backward()` for more
         * details.
         *
         * See the {@link Gio.AsyncResult} documentation to know how to use this function.
         *
         * If the operation is cancelled, the `callback` will only be called if
         * `cancellable` was not `null`. `gtk_source_search_context_backward_async()` takes
         * ownership of `cancellable`, so you can unref it after calling this function.
         * @param iter start of search.
         * @param cancellable a {@link Gio.Cancellable}, or `null`.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the operation is finished.
         */
        backward_async(
            iter: Gtk.TextIter,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * The asynchronous version of `gtk_source_search_context_backward()`.
         *
         * See the documentation of `gtk_source_search_context_backward()` for more
         * details.
         *
         * See the {@link Gio.AsyncResult} documentation to know how to use this function.
         *
         * If the operation is cancelled, the `callback` will only be called if
         * `cancellable` was not `null`. `gtk_source_search_context_backward_async()` takes
         * ownership of `cancellable`, so you can unref it after calling this function.
         * @param iter start of search.
         * @param cancellable a {@link Gio.Cancellable}, or `null`.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the operation is finished.
         */
        backward_async(
            iter: Gtk.TextIter,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<[Gtk.TextIter | null, Gtk.TextIter | null, boolean]> | void;
        /**
         * Finishes a backward search started with
         * `gtk_source_search_context_backward_async()`.
         *
         * See the documentation of `gtk_source_search_context_backward()` for more
         * details.
         * @param result a {@link Gio.AsyncResult}.
         * @returns whether a match was found.
         */
        backward_finish(result: Gio.AsyncResult): [boolean, Gtk.TextIter | null, Gtk.TextIter | null, boolean];
        /**
         * Synchronous forward search. It is recommended to use the asynchronous
         * functions instead, to not block the user interface. However, if you are sure
         * that the `buffer` is small, this function is more convenient to use.
         *
         * If the {@link GtkSource.SearchSettings.wrap_around} property is `false`, this function
         * doesn't try to wrap around.
         *
         * The `has_wrapped_around` out parameter is set independently of whether a match
         * is found. So if this function returns `false`, `has_wrapped_around` will have
         * the same value as the {@link GtkSource.SearchSettings.wrap_around} property.
         * @param iter start of search.
         * @returns whether a match was found.
         */
        forward(iter: Gtk.TextIter): [boolean, Gtk.TextIter | null, Gtk.TextIter | null, boolean];
        /**
         * The asynchronous version of `gtk_source_search_context_forward()`.
         *
         * See the documentation of `gtk_source_search_context_forward()` for more
         * details.
         *
         * See the {@link Gio.AsyncResult} documentation to know how to use this function.
         *
         * If the operation is cancelled, the `callback` will only be called if
         * `cancellable` was not `null`. `gtk_source_search_context_forward_async()` takes
         * ownership of `cancellable`, so you can unref it after calling this function.
         * @param iter start of search.
         * @param cancellable a {@link Gio.Cancellable}, or `null`.
         */
        forward_async(
            iter: Gtk.TextIter,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<[Gtk.TextIter | null, Gtk.TextIter | null, boolean]>;
        /**
         * The asynchronous version of `gtk_source_search_context_forward()`.
         *
         * See the documentation of `gtk_source_search_context_forward()` for more
         * details.
         *
         * See the {@link Gio.AsyncResult} documentation to know how to use this function.
         *
         * If the operation is cancelled, the `callback` will only be called if
         * `cancellable` was not `null`. `gtk_source_search_context_forward_async()` takes
         * ownership of `cancellable`, so you can unref it after calling this function.
         * @param iter start of search.
         * @param cancellable a {@link Gio.Cancellable}, or `null`.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the operation is finished.
         */
        forward_async(
            iter: Gtk.TextIter,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * The asynchronous version of `gtk_source_search_context_forward()`.
         *
         * See the documentation of `gtk_source_search_context_forward()` for more
         * details.
         *
         * See the {@link Gio.AsyncResult} documentation to know how to use this function.
         *
         * If the operation is cancelled, the `callback` will only be called if
         * `cancellable` was not `null`. `gtk_source_search_context_forward_async()` takes
         * ownership of `cancellable`, so you can unref it after calling this function.
         * @param iter start of search.
         * @param cancellable a {@link Gio.Cancellable}, or `null`.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the operation is finished.
         */
        forward_async(
            iter: Gtk.TextIter,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<[Gtk.TextIter | null, Gtk.TextIter | null, boolean]> | void;
        /**
         * Finishes a forward search started with
         * `gtk_source_search_context_forward_async()`.
         *
         * See the documentation of `gtk_source_search_context_forward()` for more
         * details.
         * @param result a {@link Gio.AsyncResult}.
         * @returns whether a match was found.
         */
        forward_finish(result: Gio.AsyncResult): [boolean, Gtk.TextIter | null, Gtk.TextIter | null, boolean];
        /**
         * @returns the associated buffer.
         */
        get_buffer(): Buffer;
        /**
         * @returns whether to highlight the search occurrences.
         */
        get_highlight(): boolean;
        /**
         * @returns the {@link GtkSource.Style} to apply on search matches.
         */
        get_match_style(): Style;
        /**
         * Gets the position of a search occurrence. If the buffer is not already fully
         * scanned, the position may be unknown, and -1 is returned. If 0 is returned,
         * it means that this part of the buffer has already been scanned, and that
         * `match_start` and `match_end` don't delimit an occurrence.
         * @param match_start the start of the occurrence.
         * @param match_end the end of the occurrence.
         * @returns the position of the search occurrence. The first occurrence has the position 1 (not 0). Returns 0 if `match_start` and `match_end` don't delimit an occurrence. Returns -1 if the position is not yet known.
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
         * {@link GtkSource.SearchSettings.search_text} breaks a rule, the error can be retrieved
         * with this function. The error domain is #G_REGEX_ERROR.
         *
         * Free the return value with `g_error_free()`.
         * @returns the {@link GLib.Error}, or `null` if the pattern is valid.
         */
        get_regex_error(): GLib.Error | null;
        /**
         * @returns the search settings.
         */
        get_settings(): SearchSettings;
        /**
         * Replaces a search match by another text. If `match_start` and `match_end`
         * doesn't correspond to a search match, `false` is returned.
         *
         * `match_start` and `match_end` iters are revalidated to point to the replacement
         * text boundaries.
         *
         * For a regular expression replacement, you can check if `replace` is valid by
         * calling `g_regex_check_replacement()`. The `replace` text can contain
         * backreferences; read the `g_regex_replace()` documentation for more details.
         * @param match_start the start of the match to replace.
         * @param match_end the end of the match to replace.
         * @param replace the replacement text.
         * @param replace_length the length of `replace` in bytes, or -1.
         * @returns whether the match has been replaced.
         */
        replace(match_start: Gtk.TextIter, match_end: Gtk.TextIter, replace: string, replace_length: number): boolean;
        /**
         * Replaces all search matches by another text. It is a synchronous function, so
         * it can block the user interface.
         *
         * For a regular expression replacement, you can check if `replace` is valid by
         * calling `g_regex_check_replacement()`. The `replace` text can contain
         * backreferences; read the `g_regex_replace()` documentation for more details.
         * @param replace the replacement text.
         * @param replace_length the length of `replace` in bytes, or -1.
         * @returns the number of replaced matches.
         */
        replace_all(replace: string, replace_length: number): number;
        /**
         * Enables or disables the search occurrences highlighting.
         * @param highlight the setting.
         */
        set_highlight(highlight: boolean): void;
        /**
         * Set the style to apply on search matches. If `match_style` is `null`, default
         * theme's scheme 'match-style' will be used.
         * To enable or disable the search highlighting, use
         * `gtk_source_search_context_set_highlight()`.
         * @param match_style a {@link GtkSource.Style}, or `null`.
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

    /**
     * @gir-type Class
     */
    class SearchSettings extends GObject.Object {
        static $gtype: GObject.GType<SearchSettings>;

        // Properties

        /**
         * If `true`, a search match must start and end a word. The match can
         * span multiple words.
         * @since 3.10
         */
        get at_word_boundaries(): boolean;
        set at_word_boundaries(val: boolean);
        /**
         * If `true`, a search match must start and end a word. The match can
         * span multiple words.
         * @since 3.10
         */
        get atWordBoundaries(): boolean;
        set atWordBoundaries(val: boolean);
        /**
         * Whether the search is case sensitive.
         * @since 3.10
         */
        get case_sensitive(): boolean;
        set case_sensitive(val: boolean);
        /**
         * Whether the search is case sensitive.
         * @since 3.10
         */
        get caseSensitive(): boolean;
        set caseSensitive(val: boolean);
        /**
         * Search by regular expressions with
         * {@link GtkSource.SearchSettings.search_text} as the pattern.
         * @since 3.10
         */
        get regex_enabled(): boolean;
        set regex_enabled(val: boolean);
        /**
         * Search by regular expressions with
         * {@link GtkSource.SearchSettings.search_text} as the pattern.
         * @since 3.10
         */
        get regexEnabled(): boolean;
        set regexEnabled(val: boolean);
        /**
         * A search string, or `null` if the search is disabled. If the regular
         * expression search is enabled, {@link GtkSource.SearchSettings.search_text} is
         * the pattern.
         * @since 3.10
         */
        get search_text(): string;
        set search_text(val: string);
        /**
         * A search string, or `null` if the search is disabled. If the regular
         * expression search is enabled, {@link GtkSource.SearchSettings.search_text} is
         * the pattern.
         * @since 3.10
         */
        get searchText(): string;
        set searchText(val: string);
        /**
         * For a forward search, continue at the beginning of the buffer if no
         * search occurrence is found. For a backward search, continue at the
         * end of the buffer.
         * @since 3.10
         */
        get wrap_around(): boolean;
        set wrap_around(val: boolean);
        /**
         * For a forward search, continue at the beginning of the buffer if no
         * search occurrence is found. For a backward search, continue at the
         * end of the buffer.
         * @since 3.10
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

        /** @signal */
        connect<K extends keyof SearchSettings.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SearchSettings.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof SearchSettings.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SearchSettings.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof SearchSettings.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SearchSettings.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns whether to search at word boundaries.
         */
        get_at_word_boundaries(): boolean;
        /**
         * @returns whether the search is case sensitive.
         */
        get_case_sensitive(): boolean;
        /**
         * @returns whether to search by regular expressions.
         */
        get_regex_enabled(): boolean;
        /**
         * Gets the text to search. The return value must not be freed.
         *
         * You may be interested to call `gtk_source_utils_escape_search_text()` after
         * this function.
         * @returns the text to search, or `null` if the search is disabled.
         */
        get_search_text(): string | null;
        /**
         * @returns whether to wrap around the search.
         */
        get_wrap_around(): boolean;
        /**
         * Change whether the search is done at word boundaries. If `at_word_boundaries`
         * is `true`, a search match must start and end a word. The match can span
         * multiple words. See also `gtk_text_iter_starts_word()` and
         * `gtk_text_iter_ends_word()`.
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
         * If enabled, the {@link GtkSource.SearchSettings.search_text} property contains the
         * pattern of the regular expression.
         *
         * {@link GtkSource.SearchContext} uses {@link GLib.Regex} when regex search is enabled. See the
         * [Regular expression syntax](https://developer.gnome.org/glib/stable/glib-regex-syntax.html)
         * page in the GLib reference manual.
         * @param regex_enabled the setting.
         */
        set_regex_enabled(regex_enabled: boolean): void;
        /**
         * Sets the text to search. If `search_text` is `null` or is empty, the search
         * will be disabled. A copy of `search_text` will be made, so you can safely free
         * `search_text` after a call to this function.
         *
         * You may be interested to call `gtk_source_utils_unescape_search_text()` before
         * this function.
         * @param search_text the nul-terminated text to search, or `null` to disable the search.
         */
        set_search_text(search_text?: string | null): void;
        /**
         * Enables or disables the wrap around search. If `wrap_around` is `true`, the
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

    /**
     * @gir-type Class
     */
    class SpaceDrawer extends GObject.Object {
        static $gtype: GObject.GType<SpaceDrawer>;

        // Properties

        /**
         * Whether the {@link GtkSource.SpaceDrawer.matrix} property is enabled.
         * @since 3.24
         */
        get enable_matrix(): boolean;
        set enable_matrix(val: boolean);
        /**
         * Whether the {@link GtkSource.SpaceDrawer.matrix} property is enabled.
         * @since 3.24
         */
        get enableMatrix(): boolean;
        set enableMatrix(val: boolean);
        /**
         * The :matrix property is a {@link GLib.Variant} property to specify where and
         * what kind of white spaces to draw.
         *
         * The {@link GLib.Variant} is of type `"au"`, an array of unsigned integers. Each
         * integer is a combination of {@link GtkSource.SpaceTypeFlags}. There is one
         * integer for each {@link GtkSource.SpaceLocationFlags}, in the same order as
         * they are defined in the enum ({@link GtkSource.SpaceLocationFlags.NONE} and
         * {@link GtkSource.SpaceLocationFlags.ALL} are not taken into account).
         *
         * If the array is shorter than the number of locations, then the value
         * for the missing locations will be {@link GtkSource.SpaceTypeFlags.NONE}.
         *
         * By default, {@link GtkSource.SpaceTypeFlags.ALL} is set for all locations.
         * @since 3.24
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

        /** @signal */
        connect<K extends keyof SpaceDrawer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SpaceDrawer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof SpaceDrawer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SpaceDrawer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof SpaceDrawer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SpaceDrawer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Binds the {@link GtkSource.SpaceDrawer.matrix} property to a {@link Gio.Settings} key.
         *
         * The {@link Gio.Settings} key must be of the same type as the
         * {@link GtkSource.SpaceDrawer.matrix} property, that is, `"au"`.
         *
         * The `g_settings_bind()` function cannot be used, because the default GIO
         * mapping functions don't support {@link GLib.Variant} properties (maybe it will be
         * supported by a future GIO version, in which case this function can be
         * deprecated).
         * @param settings a {@link Gio.Settings} object.
         * @param key the `settings` key to bind.
         * @param flags flags for the binding.
         */
        bind_matrix_setting(settings: Gio.Settings, key: string, flags: Gio.SettingsBindFlags | null): void;
        /**
         * @returns whether the {@link GtkSource.SpaceDrawer.matrix} property is enabled.
         */
        get_enable_matrix(): boolean;
        /**
         * Gets the value of the {@link GtkSource.SpaceDrawer.matrix} property, as a {@link GLib.Variant}.
         * An empty array can be returned in case the matrix is a zero matrix.
         *
         * The `gtk_source_space_drawer_get_types_for_locations()` function may be more
         * convenient to use.
         * @returns the {@link GtkSource.SpaceDrawer.matrix} value as a new floating {@link GLib.Variant}   instance.
         */
        get_matrix(): GLib.Variant;
        /**
         * If only one location is specified, this function returns what kind of
         * white spaces are drawn at that location. The value is retrieved from the
         * {@link GtkSource.SpaceDrawer.matrix} property.
         *
         * If several locations are specified, this function returns the logical AND for
         * those locations. Which means that if a certain kind of white space is present
         * in the return value, then that kind of white space is drawn at all the
         * specified `locations`.
         * @param locations one or several {@link GtkSource.SpaceLocationFlags}.
         * @returns a combination of {@link GtkSource.SpaceTypeFlags}.
         */
        get_types_for_locations(locations: SpaceLocationFlags | null): SpaceTypeFlags;
        /**
         * Sets whether the {@link GtkSource.SpaceDrawer.matrix} property is enabled.
         * @param enable_matrix the new value.
         */
        set_enable_matrix(enable_matrix: boolean): void;
        /**
         * Sets a new value to the {@link GtkSource.SpaceDrawer.matrix} property, as a
         * {@link GLib.Variant}. If `matrix` is `null`, then an empty array is set.
         *
         * If `matrix` is floating, it is consumed.
         *
         * The `gtk_source_space_drawer_set_types_for_locations()` function may be more
         * convenient to use.
         * @param matrix the new matrix value, or `null`.
         */
        set_matrix(matrix?: GLib.Variant | null): void;
        /**
         * Modifies the {@link GtkSource.SpaceDrawer.matrix} property at the specified
         * `locations`.
         * @param locations one or several {@link GtkSource.SpaceLocationFlags}.
         * @param types a combination of {@link GtkSource.SpaceTypeFlags}.
         */
        set_types_for_locations(locations: SpaceLocationFlags | null, types: SpaceTypeFlags | null): void;
    }

    namespace StyleScheme {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
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

        /** @signal */
        connect<K extends keyof StyleScheme.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StyleScheme.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof StyleScheme.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StyleScheme.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof StyleScheme.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<StyleScheme.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns the `scheme` description, a human-readable (translated)   string to present to the user.
         */
        get_description(): string | null;
        /**
         * @returns `scheme` file name if the scheme was created parsing a   style scheme file, or `null` in the other cases.
         */
        get_filename(): string | null;
        /**
         * @returns the `scheme` ID, a unique string used to identify the style scheme in   a {@link GtkSource.StyleSchemeManager}.
         */
        get_id(): string;
        /**
         * @returns the kind of `scheme`.
         */
        get_kind(): StyleSchemeKind;
        /**
         * @returns the `scheme` name, a human-readable (translated) string to present to   the user.
         */
        get_name(): string;
        /**
         * @param style_id ID of the style to retrieve.
         * @returns the {@link GtkSource.Style} which corresponds to   `style_id` in the `scheme`, or `null` if not found.
         */
        get_style(style_id: string): Style | null;
    }

    namespace StyleSchemeManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted when the `manager`'s content has changed.
             * @signal
             * @since 299.0
             * @run-first
             */
            changed: () => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
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

        /** @signal */
        connect<K extends keyof StyleSchemeManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StyleSchemeManager.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof StyleSchemeManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StyleSchemeManager.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof StyleSchemeManager.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<StyleSchemeManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static get_default(): StyleSchemeManager;

        // Methods

        /**
         * Adds `path` at the end of the `manager`'s search path (i.e., at the lowest
         * priority). See `gtk_source_style_scheme_manager_set_search_path()`.
         * @param path a directory or a filename.
         */
        append_search_path(path: string): void;
        /**
         * Marks any currently cached information about the available style schemes as
         * invalid. All the available style schemes will be reloaded next time the
         * `manager` is accessed.
         */
        force_rescan(): void;
        /**
         * @param scheme_id style scheme ID to find.
         * @returns the {@link GtkSource.StyleScheme} object   corresponding to `scheme_id`, or `null` if not found.
         */
        get_scheme(scheme_id: string): StyleScheme | null;
        /**
         * @returns a list of   all the {@link GtkSource.StyleScheme}'s that are part of `manager`. The list is   sorted alphabetically according to the scheme name.
         */
        get_schemes(): StyleScheme[];
        /**
         * Gets the search path of `manager`.
         *
         * See also `gtk_source_style_scheme_manager_set_search_path()`.
         * @returns the search path of   `manager`.
         */
        get_search_path(): string[];
        /**
         * Adds `path` at the beginning of the `manager`'s search path (i.e., at the
         * highest priority). See `gtk_source_style_scheme_manager_set_search_path()`.
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
         * To load the style schemes from the filesystem, {@link GtkSource.StyleSchemeManager}
         * first looks at the first path, then the second path, etc. If there are
         * duplicates (same {@link GtkSource.StyleScheme} ID), the first encountered one has the
         * priority.
         *
         * So the list of paths must be set in priority order, from highest to lowest.
         * @param path a `null`-terminated array of   strings, or `null` to reset the search path to its default value.
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

    /**
     * @gir-type Class
     */
    class Tag extends Gtk.TextTag {
        static $gtype: GObject.GType<Tag>;

        // Properties

        /**
         * Whether to draw white spaces. This property takes precedence over the value
         * defined by the GtkSourceSpaceDrawer's {@link GtkSource.SpaceDrawer.matrix} property
         * (only where the tag is applied).
         *
         * Setting this property also changes {@link GtkSource.Tag.draw_spaces_set} to
         * `true`.
         * @since 3.20
         */
        get draw_spaces(): boolean;
        set draw_spaces(val: boolean);
        /**
         * Whether to draw white spaces. This property takes precedence over the value
         * defined by the GtkSourceSpaceDrawer's {@link GtkSource.SpaceDrawer.matrix} property
         * (only where the tag is applied).
         *
         * Setting this property also changes {@link GtkSource.Tag.draw_spaces_set} to
         * `true`.
         * @since 3.20
         */
        get drawSpaces(): boolean;
        set drawSpaces(val: boolean);
        /**
         * Whether the {@link GtkSource.Tag.draw_spaces} property is set and must be
         * taken into account.
         * @since 3.20
         */
        get draw_spaces_set(): boolean;
        set draw_spaces_set(val: boolean);
        /**
         * Whether the {@link GtkSource.Tag.draw_spaces} property is set and must be
         * taken into account.
         * @since 3.20
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

        /** @signal */
        connect<K extends keyof Tag.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Tag.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Tag.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Tag.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Tag.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Tag.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace View {
        // Signal signatures
        interface SignalSignatures extends Gtk.TextView.SignalSignatures {
            /**
             * Keybinding signal to change case of the text at the current cursor position.
             * @signal
             * @since 3.16
             * @action
             * @run-last
             */
            'change-case': (arg0: ChangeCaseType) => void;
            /**
             * Keybinding signal to edit a number at the current cursor position.
             * @signal
             * @since 3.16
             * @action
             * @run-last
             */
            'change-number': (arg0: number) => void;
            /**
             * Keybinding signal to join the lines currently selected.
             * @signal
             * @since 3.16
             * @action
             * @run-last
             */
            'join-lines': () => void;
            /**
             * Emitted when a line mark has been activated (for instance when there
             * was a button press in the line marks gutter). You can use `iter` to
             * determine on which line the activation took place.
             * @signal
             * @run-last
             */
            'line-mark-activated': (arg0: Gtk.TextIter, arg1: Gdk.Event) => void;
            /**
             * The ::move-lines signal is a keybinding which gets emitted
             * when the user initiates moving a line. The default binding key
             * is Alt+Up/Down arrow. And moves the currently selected lines,
             * or the current line up or down by one line.
             * @signal
             * @action
             * @run-last
             */
            'move-lines': (arg0: boolean) => void;
            /**
             * Keybinding signal to move the cursor to the matching bracket.
             * @signal
             * @since 3.16
             * @action
             * @run-last
             */
            'move-to-matching-bracket': (arg0: boolean) => void;
            /**
             * The ::move-words signal is a keybinding which gets emitted
             * when the user initiates moving a word. The default binding key
             * is Alt+Left/Right Arrow and moves the current selection, or the current
             * word by one word.
             * @signal
             * @since 3.0
             * @action
             * @run-last
             */
            'move-words': (arg0: number) => void;
            /**
             * @signal
             * @action
             * @run-last
             */
            redo: () => void;
            /**
             * The ::show-completion signal is a key binding signal which gets
             * emitted when the user requests a completion, by pressing
             * <keycombo><keycap>Control</keycap><keycap>space</keycap></keycombo>.
             *
             * This will create a {@link GtkSource.CompletionContext} with the activation
             * type as {@link GtkSource.CompletionActivation.USER_REQUESTED}.
             *
             * Applications should not connect to it, but may emit it with
             * `g_signal_emit_by_name()` if they need to activate the completion by
             * another means, for example with another key binding or a menu entry.
             * @signal
             * @action
             * @run-last
             */
            'show-completion': () => void;
            /**
             * Emitted when a the cursor was moved according to the smart home
             * end setting. The signal is emitted after the cursor is moved, but
             * during the GtkTextView::move-cursor action. This can be used to find
             * out whether the cursor was moved by a normal home/end or by a smart
             * home/end.
             * @signal
             * @since 3.0
             * @run-last
             */
            'smart-home-end': (arg0: Gtk.TextIter, arg1: number) => void;
            /**
             * @signal
             * @action
             * @run-last
             */
            undo: () => void;
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
            'notify::hadjustment': (pspec: GObject.ParamSpec) => void;
            'notify::hscroll-policy': (pspec: GObject.ParamSpec) => void;
            'notify::vadjustment': (pspec: GObject.ParamSpec) => void;
            'notify::vscroll-policy': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gtk.TextView.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.Scrollable.ConstructorProps {
            auto_indent: boolean;
            autoIndent: boolean;
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

    /**
     * @gir-type Class
     */
    class View extends Gtk.TextView implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {
        static $gtype: GObject.GType<View>;

        // Properties

        /**
         * Whether to enable auto indentation.
         */
        get auto_indent(): boolean;
        set auto_indent(val: boolean);
        /**
         * Whether to enable auto indentation.
         */
        get autoIndent(): boolean;
        set autoIndent(val: boolean);
        /**
         * The completion object associated with the view.
         *
         * The completion object is guaranteed to be the same for the lifetime
         * of the view. Each view has a different completion object.
         * @read-only
         */
        get completion(): Completion;
        /**
         * Whether to highlight the current line.
         */
        get highlight_current_line(): boolean;
        set highlight_current_line(val: boolean);
        /**
         * Whether to highlight the current line.
         */
        get highlightCurrentLine(): boolean;
        set highlightCurrentLine(val: boolean);
        /**
         * Whether to indent the selected text when the tab key is pressed.
         */
        get indent_on_tab(): boolean;
        set indent_on_tab(val: boolean);
        /**
         * Whether to indent the selected text when the tab key is pressed.
         */
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
        /**
         * Whether to insert spaces instead of tabs.
         */
        get insert_spaces_instead_of_tabs(): boolean;
        set insert_spaces_instead_of_tabs(val: boolean);
        /**
         * Whether to insert spaces instead of tabs.
         */
        get insertSpacesInsteadOfTabs(): boolean;
        set insertSpacesInsteadOfTabs(val: boolean);
        /**
         * The width in characters where to position the right margin.
         */
        get right_margin_position(): number;
        set right_margin_position(val: number);
        /**
         * The width in characters where to position the right margin.
         */
        get rightMarginPosition(): number;
        set rightMarginPosition(val: number);
        /**
         * Whether to display line mark pixbufs beside the text.
         */
        get show_line_marks(): boolean;
        set show_line_marks(val: boolean);
        /**
         * Whether to display line mark pixbufs beside the text.
         */
        get showLineMarks(): boolean;
        set showLineMarks(val: boolean);
        /**
         * Whether to display line numbers beside the text.
         */
        get show_line_numbers(): boolean;
        set show_line_numbers(val: boolean);
        /**
         * Whether to display line numbers beside the text.
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
         * @since 3.18
         */
        get smart_backspace(): boolean;
        set smart_backspace(val: boolean);
        /**
         * Whether smart Backspace should be used.
         * @since 3.18
         */
        get smartBackspace(): boolean;
        set smartBackspace(val: boolean);
        /**
         * Set the behavior of the HOME and END keys.
         * @since 2.0
         */
        get smart_home_end(): SmartHomeEndType;
        set smart_home_end(val: SmartHomeEndType);
        /**
         * Set the behavior of the HOME and END keys.
         * @since 2.0
         */
        get smartHomeEnd(): SmartHomeEndType;
        set smartHomeEnd(val: SmartHomeEndType);
        /**
         * The {@link GtkSource.SpaceDrawer} object associated with the view.
         *
         * The {@link GtkSource.SpaceDrawer} object is guaranteed to be the same for the
         * lifetime of the view. Each view has a different {@link GtkSource.SpaceDrawer}
         * object.
         * @since 3.24
         * @read-only
         */
        get space_drawer(): SpaceDrawer;
        /**
         * The {@link GtkSource.SpaceDrawer} object associated with the view.
         *
         * The {@link GtkSource.SpaceDrawer} object is guaranteed to be the same for the
         * lifetime of the view. Each view has a different {@link GtkSource.SpaceDrawer}
         * object.
         * @since 3.24
         * @read-only
         */
        get spaceDrawer(): SpaceDrawer;
        /**
         * The width of a tabulation character expressed in number of spaces.
         *
         * The {@link Gtk.TextBuffer} still contains `\t` characters, but they can take
         * a different visual width in a {@link GtkSource.View} widget.
         */
        get tab_width(): number;
        set tab_width(val: number);
        /**
         * The width of a tabulation character expressed in number of spaces.
         *
         * The {@link Gtk.TextBuffer} still contains `\t` characters, but they can take
         * a different visual width in a {@link GtkSource.View} widget.
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

        // Virtual methods

        /**
         * @param iter
         * @param event
         * @virtual
         */
        vfunc_line_mark_activated(iter: Gtk.TextIter, event: Gdk.Event): void;
        /**
         * @param down
         * @virtual
         */
        vfunc_move_lines(down: boolean): void;
        /**
         * @param step
         * @virtual
         */
        vfunc_move_words(step: number): void;
        /**
         * @virtual
         */
        vfunc_redo(): void;
        /**
         * @virtual
         */
        vfunc_show_completion(): void;
        /**
         * @virtual
         */
        vfunc_undo(): void;

        // Methods

        /**
         * Returns whether auto-indentation of text is enabled.
         * @returns `true` if auto indentation is enabled.
         */
        get_auto_indent(): boolean;
        /**
         * @returns the value of the {@link GtkSource.View.completion}   property.
         */
        get_completion(): Completion;
        /**
         * Returns the {@link GtkSource.Gutter} object associated with `window_type` for `view`.
         *
         * Only {@link Gtk.TextWindowType.LEFT} and {@link Gtk.TextWindowType.RIGHT} are supported,
         * respectively corresponding to the left and right gutter.
         *
         * The line numbers and mark category icons are rendered in the left gutter.
         * @param window_type the gutter window type.
         * @returns the {@link GtkSource.Gutter}.
         */
        get_gutter(window_type: Gtk.TextWindowType | null): Gutter;
        /**
         * @returns the current value of the {@link GtkSource.View.highlight_current_line}   property.
         */
        get_highlight_current_line(): boolean;
        /**
         * Returns whether when the tab key is pressed the current selection
         * should get indented instead of replaced with the \t character.
         * @returns `true` if the selection is indented when tab is pressed.
         */
        get_indent_on_tab(): boolean;
        /**
         * Returns the number of spaces to use for each step of indent.
         * See `gtk_source_view_set_indent_width()` for details.
         * @returns indent width.
         */
        get_indent_width(): number;
        /**
         * Returns whether when inserting a tabulator character it should
         * be replaced by a group of space characters.
         * @returns `true` if spaces are inserted instead of tabs.
         */
        get_insert_spaces_instead_of_tabs(): boolean;
        /**
         * Gets attributes and priority for the `category`.
         * @param category the category.
         * @param priority place where priority of the category will be stored.
         * @returns {@link GtkSource.MarkAttributes} for the `category`. The object belongs to `view`, so it must not be unreffed.
         */
        get_mark_attributes(category: string, priority: number): MarkAttributes;
        /**
         * @returns the current value of the {@link GtkSource.View.right_margin_position}   property.
         */
        get_right_margin_position(): number;
        /**
         * @returns the current value of the {@link GtkSource.View.show_line_marks} property.
         */
        get_show_line_marks(): boolean;
        /**
         * @returns the current value of the {@link GtkSource.View.show_line_numbers} property.
         */
        get_show_line_numbers(): boolean;
        /**
         * @returns the current value of the {@link GtkSource.View.show_right_margin} property.
         */
        get_show_right_margin(): boolean;
        /**
         * Returns `true` if pressing the Backspace key will try to delete spaces
         * up to the previous tab stop.
         * @returns `true` if smart Backspace handling is enabled.
         */
        get_smart_backspace(): boolean;
        /**
         * Returns a {@link GtkSource.SmartHomeEndType} end value specifying
         * how the cursor will move when HOME and END keys are pressed.
         * @returns a {@link GtkSource.SmartHomeEndType} value.
         */
        get_smart_home_end(): SmartHomeEndType;
        /**
         * @returns the value of the {@link GtkSource.View.space_drawer}   property.
         */
        get_space_drawer(): SpaceDrawer;
        /**
         * @returns the current value of the {@link GtkSource.View.tab_width} property.
         */
        get_tab_width(): number;
        /**
         * Determines the visual column at `iter` taking into consideration the
         * {@link GtkSource.View.tab_width} of `view`.
         * @param iter a position in `view`.
         * @returns the visual column at `iter`.
         */
        get_visual_column(iter: Gtk.TextIter): number;
        /**
         * Inserts one indentation level at the beginning of the specified lines. The
         * empty lines are not indented.
         * @param start {@link Gtk.TextIter} of the first line to indent
         * @param end {@link Gtk.TextIter} of the last line to indent
         */
        indent_lines(start: Gtk.TextIter, end: Gtk.TextIter): void;
        /**
         * If `true` auto-indentation of text is enabled.
         *
         * When Enter is pressed to create a new line, the auto-indentation inserts the
         * same indentation as the previous line. This is <emphasis>not</emphasis> a
         * "smart indentation" where an indentation level is added or removed depending
         * on the context.
         * @param enable whether to enable auto indentation.
         */
        set_auto_indent(enable: boolean): void;
        /**
         * Sets the {@link GtkSource.View.highlight_current_line} property.
         * @param highlight the new value.
         */
        set_highlight_current_line(highlight: boolean): void;
        /**
         * If `true`, when the tab key is pressed when several lines are selected, the
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
         * pressed. If `width` is -1, the value of the {@link GtkSource.View.tab_width} property
         * will be used.
         *
         * The {@link GtkSource.View.indent_width} interacts with the
         * {@link GtkSource.View.insert_spaces_instead_of_tabs} property and
         * {@link GtkSource.View.tab_width}. An example will be clearer: if the
         * {@link GtkSource.View.indent_width} is 4 and
         * {@link GtkSource.View.tab_width} is 8 and
         * {@link GtkSource.View.insert_spaces_instead_of_tabs} is `false`, then pressing the tab
         * key at the beginning of a line will insert 4 spaces. So far so good. Pressing
         * the tab key a second time will remove the 4 spaces and insert a \t character
         * instead (since {@link GtkSource.View.tab_width} is 8). On the other hand, if
         * {@link GtkSource.View.insert_spaces_instead_of_tabs} is `true`, the second tab key
         * pressed will insert 4 more spaces for a total of 8 spaces in the
         * {@link Gtk.TextBuffer}.
         *
         * The test-widget program (available in the GtkSourceView repository) may be
         * useful to better understand the indentation settings (enable the space
         * drawing!).
         * @param width indent width in characters.
         */
        set_indent_width(width: number): void;
        /**
         * If `true` a tab key pressed is replaced by a group of space characters. Of
         * course it is still possible to insert a real \t programmatically with the
         * {@link Gtk.TextBuffer} API.
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
         * Sets the {@link GtkSource.View.right_margin_position} property.
         * @param pos the new value.
         */
        set_right_margin_position(pos: number): void;
        /**
         * Sets the {@link GtkSource.View.show_line_marks} property.
         * @param show the new value.
         */
        set_show_line_marks(show: boolean): void;
        /**
         * Sets the {@link GtkSource.View.show_line_numbers} property.
         * @param show the new value.
         */
        set_show_line_numbers(show: boolean): void;
        /**
         * Sets the {@link GtkSource.View.show_right_margin} property.
         * @param show the new value.
         */
        set_show_right_margin(show: boolean): void;
        /**
         * When set to `true`, pressing the Backspace key will try to delete spaces
         * up to the previous tab stop.
         * @param smart_backspace whether to enable smart Backspace handling.
         */
        set_smart_backspace(smart_backspace: boolean): void;
        /**
         * Set the desired movement of the cursor when HOME and END keys
         * are pressed.
         * @param smart_home_end the desired behavior among {@link GtkSource.SmartHomeEndType}.
         */
        set_smart_home_end(smart_home_end: SmartHomeEndType | null): void;
        /**
         * Sets the {@link GtkSource.View.tab_width} property.
         * @param width the new value.
         */
        set_tab_width(width: number): void;
        /**
         * Removes one indentation level at the beginning of the
         * specified lines.
         * @param start {@link Gtk.TextIter} of the first line to indent
         * @param end {@link Gtk.TextIter} of the last line to indent
         */
        unindent_lines(start: Gtk.TextIter, end: Gtk.TextIter): void;
        /**
         * Horizontal {@link Gtk.Adjustment} of the scrollable widget. This adjustment is
         * shared between the scrollable widget and its parent.
         * @since 3.0
         * @category Inherited from Gtk.Scrollable
         */
        get hadjustment(): Gtk.Adjustment;
        set hadjustment(val: Gtk.Adjustment);
        /**
         * Determines whether horizontal scrolling should start once the scrollable
         * widget is allocated less than its minimum width or less than its natural width.
         * @since 3.0
         * @category Inherited from Gtk.Scrollable
         */
        get hscroll_policy(): Gtk.ScrollablePolicy;
        set hscroll_policy(val: Gtk.ScrollablePolicy);
        /**
         * Determines whether horizontal scrolling should start once the scrollable
         * widget is allocated less than its minimum width or less than its natural width.
         * @since 3.0
         * @category Inherited from Gtk.Scrollable
         */
        get hscrollPolicy(): Gtk.ScrollablePolicy;
        set hscrollPolicy(val: Gtk.ScrollablePolicy);
        /**
         * Verical {@link Gtk.Adjustment} of the scrollable widget. This adjustment is shared
         * between the scrollable widget and its parent.
         * @since 3.0
         * @category Inherited from Gtk.Scrollable
         */
        get vadjustment(): Gtk.Adjustment;
        set vadjustment(val: Gtk.Adjustment);
        /**
         * Determines whether vertical scrolling should start once the scrollable
         * widget is allocated less than its minimum height or less than its natural height.
         * @since 3.0
         * @category Inherited from Gtk.Scrollable
         */
        get vscroll_policy(): Gtk.ScrollablePolicy;
        set vscroll_policy(val: Gtk.ScrollablePolicy);
        /**
         * Determines whether vertical scrolling should start once the scrollable
         * widget is allocated less than its minimum height or less than its natural height.
         * @since 3.0
         * @category Inherited from Gtk.Scrollable
         */
        get vscrollPolicy(): Gtk.ScrollablePolicy;
        set vscrollPolicy(val: Gtk.ScrollablePolicy);
        /**
         * Returns the size of a non-scrolling border around the
         * outside of the scrollable. An example for this would
         * be treeview headers. GTK+ can use this information to
         * display overlayed graphics, like the overshoot indication,
         * at the right position.
         * @returns `true` if `border` has been set
         */
        get_border(): [boolean, Gtk.Border];
        /**
         * Retrieves the {@link Gtk.Adjustment} used for horizontal scrolling.
         * @returns horizontal {@link Gtk.Adjustment}.
         */
        get_hadjustment(): Gtk.Adjustment;
        /**
         * Gets the horizontal {@link Gtk.ScrollablePolicy}.
         * @returns The horizontal {@link Gtk.ScrollablePolicy}.
         */
        get_hscroll_policy(): Gtk.ScrollablePolicy;
        /**
         * Retrieves the {@link Gtk.Adjustment} used for vertical scrolling.
         * @returns vertical {@link Gtk.Adjustment}.
         */
        get_vadjustment(): Gtk.Adjustment;
        /**
         * Gets the vertical {@link Gtk.ScrollablePolicy}.
         * @returns The vertical {@link Gtk.ScrollablePolicy}.
         */
        get_vscroll_policy(): Gtk.ScrollablePolicy;
        /**
         * Sets the horizontal adjustment of the {@link Gtk.Scrollable}.
         * @param hadjustment a {@link Gtk.Adjustment}
         */
        set_hadjustment(hadjustment?: Gtk.Adjustment | null): void;
        /**
         * Sets the {@link Gtk.ScrollablePolicy} to determine whether
         * horizontal scrolling should start below the minimum width or
         * below the natural width.
         * @param policy the horizontal {@link Gtk.ScrollablePolicy}
         */
        set_hscroll_policy(policy: Gtk.ScrollablePolicy | null): void;
        /**
         * Sets the vertical adjustment of the {@link Gtk.Scrollable}.
         * @param vadjustment a {@link Gtk.Adjustment}
         */
        set_vadjustment(vadjustment?: Gtk.Adjustment | null): void;
        /**
         * Sets the {@link Gtk.ScrollablePolicy} to determine whether
         * vertical scrolling should start below the minimum height or
         * below the natural height.
         * @param policy the vertical {@link Gtk.ScrollablePolicy}
         */
        set_vscroll_policy(policy: Gtk.ScrollablePolicy | null): void;
        /**
         * Returns the size of a non-scrolling border around the
         * outside of the scrollable. An example for this would
         * be treeview headers. GTK+ can use this information to
         * display overlayed graphics, like the overshoot indication,
         * at the right position.
         * @virtual
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
    type BufferClass = typeof Buffer;
    /**
     * @gir-type Struct
     */
    abstract class BufferPrivate {
        static $gtype: GObject.GType<BufferPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type CompletionClass = typeof Completion;
    /**
     * @gir-type Alias
     */
    type CompletionContextClass = typeof CompletionContext;
    /**
     * @gir-type Struct
     */
    abstract class CompletionContextPrivate {
        static $gtype: GObject.GType<CompletionContextPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type CompletionInfoClass = typeof CompletionInfo;
    /**
     * @gir-type Struct
     */
    abstract class CompletionInfoPrivate {
        static $gtype: GObject.GType<CompletionInfoPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type CompletionItemClass = typeof CompletionItem;
    /**
     * @gir-type Struct
     */
    abstract class CompletionItemPrivate {
        static $gtype: GObject.GType<CompletionItemPrivate>;
    }

    /**
     * @gir-type Struct
     */
    abstract class CompletionPrivate {
        static $gtype: GObject.GType<CompletionPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type CompletionProposalIface = typeof CompletionProposal;
    /**
     * @gir-type Alias
     */
    type CompletionProviderIface = typeof CompletionProvider;
    /**
     * @gir-type Struct
     */
    class Encoding {
        static $gtype: GObject.GType<Encoding>;

        // Constructors

        constructor(properties?: Partial<{}>);

        static ['new'](charset: string): Encoding;

        static new_from_locale(): Encoding;

        static new_utf8(): Encoding;

        // Static methods

        /**
         * A {@link GLib.CompareFunc} provided for convenience. When 0 is returned it means that
         * the two encodings are equal according to `gtk_source_encoding_equals()`.
         *
         * It is useful for example for `g_slist_find_custom()`.
         * @param a a {@link GtkSource.Encoding}.
         * @param b a {@link GtkSource.Encoding}.
         */
        static compare_func(a?: any | null, b?: any | null): number;
        /**
         * A {@link GLib.CopyFunc} provided for convenience. It does the same as
         * `gtk_source_encoding_copy()`. It is useful for example for `g_slist_copy_deep()`.
         * @param src a {@link GtkSource.Encoding}.
         * @param data Additional data (ignored).
         */
        static copy_func(src?: any | null, data?: any | null): any | null;
        /**
         * Gets a list of all encodings known by {@link GtkSource.Encoding}.
         */
        static get_all(): Encoding[];
        /**
         * Gets the list of default candidate encodings to try when loading a file. See
         * `gtk_source_file_loader_set_candidate_encodings()`.
         *
         * This function returns a different list depending on the current locale (i.e.,
         * language, country and default encoding). The UTF-8 encoding and the current
         * locale encoding are guaranteed to be present in the returned list.
         *
         * Note that the returned list doesn't contain all encodings known by
         * {@link GtkSource.Encoding}, it is a limited list that contains only the encodings
         * that have the most likelihood to fit for the current locale.
         */
        static get_default_candidates(): Encoding[];
        /**
         * A convenience function to remove duplicated encodings in a list.
         * @param list a list of   {@link GtkSource.Encoding}'s.
         * @param removal_type the {@link GtkSource.EncodingDuplicates}.
         */
        static remove_duplicates(list: Encoding[], removal_type: EncodingDuplicates): Encoding[];

        // Methods

        /**
         * @returns a copy of `enc`.
         */
        copy(): Encoding;
        /**
         * Returns whether `enc1` and `enc2` are equal. It returns `true` if and only if:
         * - Both `enc1` and `enc2` are `null`;
         * - Or both `enc1` and `enc2` have a UTF-8 charset (see
         *   `gtk_source_encoding_is_utf8()`);
         * - Or the charsets are equal according to `g_ascii_strcasecmp()` (because
         *   iconv-compatible charsets are case insensitive).
         * @param enc2 a {@link GtkSource.Encoding}, or `null`.
         * @returns whether `enc1` and `enc2` are equal.
         */
        equals(enc2?: Encoding | null): boolean;
        free(): void;
        /**
         * Gets the character set of the {@link GtkSource.Encoding}, such as "UTF-8" or "ISO-8859-1".
         * @returns the character set of the {@link GtkSource.Encoding}.
         */
        get_charset(): string;
        /**
         * Gets the name of the {@link GtkSource.Encoding} such as "Unicode" or "Western". If
         * the charset is unknown by {@link GtkSource.Encoding}, "Unknown" is returned. The
         * return value is already translated by gettext.
         * @returns the name of the {@link GtkSource.Encoding}.
         */
        get_name(): string;
        /**
         * Returns `true` if `enc` has a charset known by {@link GtkSource.Encoding}. In other
         * words: if `enc` is equal to an encoding returned by
         * `gtk_source_encoding_get_all()`.
         *
         * When the charset string comes from an untrusted source, it can be desirable
         * to check it.
         * @returns whether `enc` has a charset known by {@link GtkSource.Encoding}.
         */
        has_known_charset(): boolean;
        /**
         * @returns whether `enc` is the locale encoding (see   `gtk_source_encoding_new_from_locale()`).
         */
        is_locale(): boolean;
        /**
         * Returns whether `enc` is a UTF-8 encoding.
         *
         * If `enc` was created with `gtk_source_encoding_new_utf8()`, the charset is
         * "UTF-8". But iconv supports other variants: "UTF8", "utf-8" and "utf8". This
         * function returns `true` for all UTF-8 variants supported by iconv.
         * @returns whether `enc` is a UTF-8 encoding.
         */
        is_utf8(): boolean;
        /**
         * Returns the encoding name with the charset in parenthesis, for example
         * "Unicode (UTF-8)". If the name is unknown, just the charset is returned. The
         * name is translated by gettext.
         * @returns a string representation. Free with `g_free()` when no longer needed.
         */
        to_string(): string;
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
    type GutterClass = typeof Gutter;
    /**
     * @gir-type Struct
     */
    abstract class GutterPrivate {
        static $gtype: GObject.GType<GutterPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type GutterRendererClass = typeof GutterRenderer;
    /**
     * @gir-type Alias
     */
    type GutterRendererPixbufClass = typeof GutterRendererPixbuf;
    /**
     * @gir-type Struct
     */
    abstract class GutterRendererPixbufPrivate {
        static $gtype: GObject.GType<GutterRendererPixbufPrivate>;
    }

    /**
     * @gir-type Struct
     */
    abstract class GutterRendererPrivate {
        static $gtype: GObject.GType<GutterRendererPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type GutterRendererTextClass = typeof GutterRendererText;
    /**
     * @gir-type Struct
     */
    abstract class GutterRendererTextPrivate {
        static $gtype: GObject.GType<GutterRendererTextPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type LanguageClass = typeof Language;
    /**
     * @gir-type Alias
     */
    type LanguageManagerClass = typeof LanguageManager;
    /**
     * @gir-type Struct
     */
    abstract class LanguageManagerPrivate {
        static $gtype: GObject.GType<LanguageManagerPrivate>;
    }

    /**
     * @gir-type Struct
     */
    abstract class LanguagePrivate {
        static $gtype: GObject.GType<LanguagePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type MarkAttributesClass = typeof MarkAttributes;
    /**
     * @gir-type Struct
     */
    abstract class MarkAttributesPrivate {
        static $gtype: GObject.GType<MarkAttributesPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type MarkClass = typeof Mark;
    /**
     * @gir-type Struct
     */
    abstract class MarkPrivate {
        static $gtype: GObject.GType<MarkPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type PrintCompositorClass = typeof PrintCompositor;
    /**
     * @gir-type Struct
     */
    abstract class PrintCompositorPrivate {
        static $gtype: GObject.GType<PrintCompositorPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type RegionClass = typeof Region;
    /**
     * {@link GtkSource.RegionIter} is an opaque datatype; ignore all its fields.
     * Initialize the iter with `gtk_source_region_get_start_region_iter()`.
     * @gir-type Struct
     * @since 3.22
     */
    class RegionIter {
        static $gtype: GObject.GType<RegionIter>;

        // Constructors

        constructor(properties?: Partial<{}>);

        // Methods

        /**
         * Gets the subregion at this iterator.
         * @returns `true` if `start` and `end` have been set successfully (if non-`null`),   or `false` if `iter` is the end iterator or if the region is empty.
         */
        get_subregion(): [boolean, Gtk.TextIter | null, Gtk.TextIter | null];
        /**
         * @returns whether `iter` is the end iterator.
         */
        is_end(): boolean;
        /**
         * Moves `iter` to the next subregion.
         * @returns `true` if `iter` moved and is dereferenceable, or `false` if `iter` has   been set to the end iterator.
         */
        next(): boolean;
    }

    /**
     * @gir-type Alias
     */
    type SearchContextClass = typeof SearchContext;
    /**
     * @gir-type Struct
     */
    abstract class SearchContextPrivate {
        static $gtype: GObject.GType<SearchContextPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type SearchSettingsClass = typeof SearchSettings;
    /**
     * @gir-type Struct
     */
    abstract class SearchSettingsPrivate {
        static $gtype: GObject.GType<SearchSettingsPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type SpaceDrawerClass = typeof SpaceDrawer;
    /**
     * @gir-type Struct
     */
    abstract class SpaceDrawerPrivate {
        static $gtype: GObject.GType<SpaceDrawerPrivate>;
    }

    /**
     * Before using the value of a certain field, check the boolean value of the
     * corresponding "`use_`" field.
     * @gir-type Struct
     * @since 299.2
     */
    class Style {
        static $gtype: GObject.GType<Style>;

        // Fields

        foreground_color: Gdk.RGBA;
        background_color: Gdk.RGBA;
        underline_color: Gdk.RGBA;
        scale: number;
        underline: Pango.Underline;
        italic: number;
        bold: number;
        strikethrough: number;
        use_foreground_color: number;
        use_background_color: number;
        use_underline_color: number;
        use_scale: number;
        use_underline: number;
        use_italic: number;
        use_bold: number;
        use_strikethrough: number;

        // Constructors

        constructor(
            properties?: Partial<{
                foreground_color: Gdk.RGBA;
                background_color: Gdk.RGBA;
                underline_color: Gdk.RGBA;
                scale: number;
                underline: Pango.Underline;
                italic: number;
                bold: number;
                strikethrough: number;
                use_foreground_color: number;
                use_background_color: number;
                use_underline_color: number;
                use_scale: number;
                use_underline: number;
                use_italic: number;
                use_bold: number;
                use_strikethrough: number;
            }>,
        );

        static ['new'](): Style;

        // Methods

        /**
         * This function modifies the {@link Gtk.TextTag} properties that are related to the
         * {@link GtkSource.Style} attributes. Other {@link Gtk.TextTag} properties are left untouched.
         *
         * If `style` is non-`null`, applies `style` to `tag`.
         *
         * If `style` is `null`, the related `*-set` properties of {@link Gtk.TextTag} are set to
         * `false`.
         * @param tag a {@link Gtk.TextTag} to apply styles to.
         */
        apply(tag: Gtk.TextTag): void;
        /**
         * Increases the reference count of `style` by one.
         * @returns the passed in `style`.
         */
        ref(): Style;
        /**
         * Decreases the reference count of `style` by one. If the reference count drops
         * to 0, `style` is freed.
         */
        unref(): void;
    }

    /**
     * @gir-type Alias
     */
    type StyleSchemeClass = typeof StyleScheme;
    /**
     * @gir-type Alias
     */
    type StyleSchemeManagerClass = typeof StyleSchemeManager;
    /**
     * @gir-type Struct
     */
    abstract class StyleSchemeManagerPrivate {
        static $gtype: GObject.GType<StyleSchemeManagerPrivate>;
    }

    /**
     * @gir-type Struct
     */
    abstract class StyleSchemePrivate {
        static $gtype: GObject.GType<StyleSchemePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type TagClass = typeof Tag;
    /**
     * @gir-type Alias
     */
    type UndoManagerIface = typeof UndoManager;
    /**
     * @gir-type Alias
     */
    type ViewClass = typeof View;
    /**
     * @gir-type Struct
     */
    abstract class ViewPrivate {
        static $gtype: GObject.GType<ViewPrivate>;
    }

    namespace CompletionProposal {
        /**
         * Interface for implementing CompletionProposal.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Emits the {@link GtkSource.CompletionProposal.SignalSignatures.changed | GtkSource.CompletionProposal::changed} signal on `proposal`. This
             * should be called by implementations whenever the label, icon or info of the
             * proposal has changed.
             * @virtual
             */
            vfunc_changed(): void;
            /**
             * Gets whether two proposal objects are the same. This is used to (together
             * with `gtk_source_completion_proposal_hash()`) to match proposals in the
             * completion model.
             * @param other a {@link GtkSource.CompletionProposal}.
             * @virtual
             */
            vfunc_equal(other: CompletionProposal): boolean;
            /**
             * The virtual function pointer for `gtk_source_completion_proposal_get_gicon()`.
             *   By default, `null` is returned.
             * @virtual
             */
            vfunc_get_gicon(): Gio.Icon | null;
            /**
             * The virtual function pointer for `gtk_source_completion_proposal_get_icon()`.
             *   By default, `null` is returned.
             * @virtual
             */
            vfunc_get_icon(): GdkPixbuf.Pixbuf | null;
            /**
             * The virtual function pointer for `gtk_source_completion_proposal_get_icon_name()`.
             *   By default, `null` is returned.
             * @virtual
             */
            vfunc_get_icon_name(): string | null;
            /**
             * Gets extra information associated to the proposal. This information will be
             * used to present the user with extra, detailed information about the
             * selected proposal.
             * @virtual
             */
            vfunc_get_info(): string | null;
            /**
             * Gets the label of `proposal`. The label is shown in the list of proposals as
             * plain text. If you need any markup (such as bold or italic text), you have to
             * implement `gtk_source_completion_proposal_get_markup()`.
             * @virtual
             */
            vfunc_get_label(): string | null;
            /**
             * Gets the label of `proposal` with markup. The label is shown in the list of
             * proposals and may contain markup. This will be used instead of
             * `gtk_source_completion_proposal_get_label()` if implemented.
             * @virtual
             */
            vfunc_get_markup(): string | null;
            /**
             * Gets the text of `proposal`. The text that is inserted into the text buffer
             * when the proposal is activated by the default activation.
             *
             * You are free to implement a custom activation handler in the provider and not
             * implement this function. For more information, see
             * `gtk_source_completion_provider_activate_proposal()`.
             * @virtual
             */
            vfunc_get_text(): string | null;
            /**
             * Gets the hash value of `proposal`. This is used to (together with
             * `gtk_source_completion_proposal_equal()`) to match proposals in the completion
             * model.
             * @virtual
             */
            vfunc_hash(): number;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface CompletionProposalNamespace {
        $gtype: GObject.GType<CompletionProposal>;
        prototype: CompletionProposal;
    }
    /**
     * @gir-type Interface
     */
    interface CompletionProposal extends GObject.Object, CompletionProposal.Interface {
        // Methods

        /**
         * Emits the {@link GtkSource.CompletionProposal.SignalSignatures.changed | GtkSource.CompletionProposal::changed} signal on `proposal`. This
         * should be called by implementations whenever the label, icon or info of the
         * proposal has changed.
         */
        changed(): void;
        /**
         * Gets whether two proposal objects are the same. This is used to (together
         * with `gtk_source_completion_proposal_hash()`) to match proposals in the
         * completion model.
         * @param other a {@link GtkSource.CompletionProposal}.
         * @returns whether `proposal` and `other` are the same proposal.
         */
        equal(other: CompletionProposal): boolean;
        /**
         * @returns the {@link Gio.Icon} for the icon of `proposal`.
         */
        get_gicon(): Gio.Icon | null;
        /**
         * @returns a {@link GdkPixbuf.Pixbuf} with the icon of `proposal`.
         */
        get_icon(): GdkPixbuf.Pixbuf | null;
        /**
         * @returns the icon name of `proposal`.
         */
        get_icon_name(): string | null;
        /**
         * Gets extra information associated to the proposal. This information will be
         * used to present the user with extra, detailed information about the
         * selected proposal.
         * @returns a newly-allocated string containing   extra information of `proposal`, or `null` if no extra information is   associated to `proposal`.
         */
        get_info(): string | null;
        /**
         * Gets the label of `proposal`. The label is shown in the list of proposals as
         * plain text. If you need any markup (such as bold or italic text), you have to
         * implement `gtk_source_completion_proposal_get_markup()`.
         * @returns a new string containing the label of   `proposal`.
         */
        get_label(): string | null;
        /**
         * Gets the label of `proposal` with markup. The label is shown in the list of
         * proposals and may contain markup. This will be used instead of
         * `gtk_source_completion_proposal_get_label()` if implemented.
         * @returns a new string containing the label of   `proposal` with markup.
         */
        get_markup(): string | null;
        /**
         * Gets the text of `proposal`. The text that is inserted into the text buffer
         * when the proposal is activated by the default activation.
         *
         * You are free to implement a custom activation handler in the provider and not
         * implement this function. For more information, see
         * `gtk_source_completion_provider_activate_proposal()`.
         * @returns a new string containing the text of   `proposal`.
         */
        get_text(): string | null;
        /**
         * Gets the hash value of `proposal`. This is used to (together with
         * `gtk_source_completion_proposal_equal()`) to match proposals in the completion
         * model.
         * @returns the hash value of `proposal`.
         */
        hash(): number;
    }

    export const CompletionProposal: CompletionProposalNamespace & {
        new (): CompletionProposal; // This allows `obj instanceof CompletionProposal`
    };

    namespace CompletionProvider {
        /**
         * Interface for implementing CompletionProvider.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Activate `proposal` at `iter`. When this functions returns `false`, the default
             * activation of `proposal` will take place which replaces the word at `iter`
             * with the text of `proposal` (see `gtk_source_completion_proposal_get_text()`).
             *
             * Here is how the default activation selects the boundaries of the word to
             * replace. The end of the word is `iter`. For the start of the word, it depends
             * on whether a start iter is defined for `proposal` (see
             * `gtk_source_completion_provider_get_start_iter()`). If a start iter is defined,
             * the start of the word is the start iter. Else, the word (as long as possible)
             * will contain only alphanumerical and the "_" characters.
             * @param proposal a {@link GtkSource.CompletionProposal}.
             * @param iter a {@link Gtk.TextIter}.
             * @virtual
             */
            vfunc_activate_proposal(proposal: CompletionProposal, iter: Gtk.TextIter): boolean;
            /**
             * Get with what kind of activation the provider should be activated.
             * @virtual
             */
            vfunc_get_activation(): CompletionActivation;
            /**
             * Gets the {@link Gio.Icon} for the icon of `provider`.
             * @virtual
             */
            vfunc_get_gicon(): Gio.Icon | null;
            /**
             * Get the {@link GdkPixbuf.Pixbuf} for the icon of the `provider`.
             * @virtual
             */
            vfunc_get_icon(): GdkPixbuf.Pixbuf | null;
            /**
             * Gets the icon name of `provider`.
             * @virtual
             */
            vfunc_get_icon_name(): string | null;
            /**
             * Get a customized info widget to show extra information of a proposal.
             * This allows for customized widgets on a proposal basis, although in general
             * providers will have the same custom widget for all their proposals and
             * `proposal` can be ignored. The implementation of this function is optional.
             *
             * If this function is not implemented, the default widget is a {@link Gtk.Label}. The
             * return value of `gtk_source_completion_proposal_get_info()` is used as the
             * content of the {@link Gtk.Label}.
             *
             * <note>
             *   <para>
             *     If implemented, `gtk_source_completion_provider_update_info()`
             *     <emphasis>must</emphasis> also be implemented.
             *   </para>
             * </note>
             * @param proposal a currently selected {@link GtkSource.CompletionProposal}.
             * @virtual
             */
            vfunc_get_info_widget(proposal: CompletionProposal): Gtk.Widget | null;
            /**
             * Get the delay in milliseconds before starting interactive completion for
             * this provider. A value of -1 indicates to use the default value as set
             * by the {@link GtkSource.Completion.auto_complete_delay} property.
             * @virtual
             */
            vfunc_get_interactive_delay(): number;
            /**
             * Get the name of the provider. This should be a translatable name for
             * display to the user. For example: _("Document word completion provider"). The
             * returned string must be freed with `g_free()`.
             * @virtual
             */
            vfunc_get_name(): string;
            /**
             * Get the provider priority. The priority determines the order in which
             * proposals appear in the completion popup. Higher priorities are sorted
             * before lower priorities. The default priority is 0.
             * @virtual
             */
            vfunc_get_priority(): number;
            /**
             * Get the {@link Gtk.TextIter} at which the completion for `proposal` starts. When
             * implemented, this information is used to position the completion window
             * accordingly when a proposal is selected in the completion window. The
             * `proposal` text inside the completion window is aligned on `iter`.
             *
             * If this function is not implemented, the word boundary is taken to position
             * the completion window. See `gtk_source_completion_provider_activate_proposal()`
             * for an explanation on the word boundaries.
             *
             * When the `proposal` is activated, the default handler uses `iter` as the start
             * of the word to replace. See
             * `gtk_source_completion_provider_activate_proposal()` for more information.
             * @param context a {@link GtkSource.CompletionContext}.
             * @param proposal a {@link GtkSource.CompletionProposal}.
             * @virtual
             */
            vfunc_get_start_iter(context: CompletionContext, proposal: CompletionProposal): [boolean, Gtk.TextIter];
            /**
             * Get whether the provider match the context of completion detailed in
             * `context`.
             * @param context a {@link GtkSource.CompletionContext}.
             * @virtual
             */
            vfunc_match(context: CompletionContext): boolean;
            /**
             * Populate `context` with proposals from `provider` added with the
             * `gtk_source_completion_context_add_proposals()` function.
             * @param context a {@link GtkSource.CompletionContext}.
             * @virtual
             */
            vfunc_populate(context: CompletionContext): void;
            /**
             * Update extra information shown in `info` for `proposal`.
             *
             * <note>
             *   <para>
             *     This function <emphasis>must</emphasis> be implemented when
             *     `gtk_source_completion_provider_get_info_widget()` is implemented.
             *   </para>
             * </note>
             * @param proposal a {@link GtkSource.CompletionProposal}.
             * @param info a {@link GtkSource.CompletionInfo}.
             * @virtual
             */
            vfunc_update_info(proposal: CompletionProposal, info: CompletionInfo): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface CompletionProviderNamespace {
        $gtype: GObject.GType<CompletionProvider>;
        prototype: CompletionProvider;
    }
    /**
     * @gir-type Interface
     */
    interface CompletionProvider extends GObject.Object, CompletionProvider.Interface {
        // Methods

        /**
         * Activate `proposal` at `iter`. When this functions returns `false`, the default
         * activation of `proposal` will take place which replaces the word at `iter`
         * with the text of `proposal` (see `gtk_source_completion_proposal_get_text()`).
         *
         * Here is how the default activation selects the boundaries of the word to
         * replace. The end of the word is `iter`. For the start of the word, it depends
         * on whether a start iter is defined for `proposal` (see
         * `gtk_source_completion_provider_get_start_iter()`). If a start iter is defined,
         * the start of the word is the start iter. Else, the word (as long as possible)
         * will contain only alphanumerical and the "_" characters.
         * @param proposal a {@link GtkSource.CompletionProposal}.
         * @param iter a {@link Gtk.TextIter}.
         * @returns `true` to indicate that the proposal activation has been handled,          `false` otherwise.
         */
        activate_proposal(proposal: CompletionProposal, iter: Gtk.TextIter): boolean;
        /**
         * Get with what kind of activation the provider should be activated.
         * @returns a combination of {@link GtkSource.CompletionActivation}.
         */
        get_activation(): CompletionActivation;
        /**
         * Gets the {@link Gio.Icon} for the icon of `provider`.
         * @returns The icon to be used for the provider,          or `null` if the provider does not have a special icon.
         */
        get_gicon(): Gio.Icon | null;
        /**
         * Get the {@link GdkPixbuf.Pixbuf} for the icon of the `provider`.
         * @returns The icon to be used for the provider,          or `null` if the provider does not have a special icon.
         */
        get_icon(): GdkPixbuf.Pixbuf | null;
        /**
         * Gets the icon name of `provider`.
         * @returns The icon name to be used for the provider,          or `null` if the provider does not have a special icon.
         */
        get_icon_name(): string | null;
        /**
         * Get a customized info widget to show extra information of a proposal.
         * This allows for customized widgets on a proposal basis, although in general
         * providers will have the same custom widget for all their proposals and
         * `proposal` can be ignored. The implementation of this function is optional.
         *
         * If this function is not implemented, the default widget is a {@link Gtk.Label}. The
         * return value of `gtk_source_completion_proposal_get_info()` is used as the
         * content of the {@link Gtk.Label}.
         *
         * <note>
         *   <para>
         *     If implemented, `gtk_source_completion_provider_update_info()`
         *     <emphasis>must</emphasis> also be implemented.
         *   </para>
         * </note>
         * @param proposal a currently selected {@link GtkSource.CompletionProposal}.
         * @returns a custom {@link Gtk.Widget} to show extra information about `proposal`, or `null` if the provider does not have a special info widget.
         */
        get_info_widget(proposal: CompletionProposal): Gtk.Widget | null;
        /**
         * Get the delay in milliseconds before starting interactive completion for
         * this provider. A value of -1 indicates to use the default value as set
         * by the {@link GtkSource.Completion.auto_complete_delay} property.
         * @returns the interactive delay in milliseconds.
         */
        get_interactive_delay(): number;
        /**
         * Get the name of the provider. This should be a translatable name for
         * display to the user. For example: _("Document word completion provider"). The
         * returned string must be freed with `g_free()`.
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
         * Get the {@link Gtk.TextIter} at which the completion for `proposal` starts. When
         * implemented, this information is used to position the completion window
         * accordingly when a proposal is selected in the completion window. The
         * `proposal` text inside the completion window is aligned on `iter`.
         *
         * If this function is not implemented, the word boundary is taken to position
         * the completion window. See `gtk_source_completion_provider_activate_proposal()`
         * for an explanation on the word boundaries.
         *
         * When the `proposal` is activated, the default handler uses `iter` as the start
         * of the word to replace. See
         * `gtk_source_completion_provider_activate_proposal()` for more information.
         * @param context a {@link GtkSource.CompletionContext}.
         * @param proposal a {@link GtkSource.CompletionProposal}.
         * @returns `true` if `iter` was set for `proposal`, `false` otherwise.
         */
        get_start_iter(context: CompletionContext, proposal: CompletionProposal): [boolean, Gtk.TextIter];
        /**
         * Get whether the provider match the context of completion detailed in
         * `context`.
         * @param context a {@link GtkSource.CompletionContext}.
         * @returns `true` if `provider` matches the completion context, `false` otherwise.
         */
        match(context: CompletionContext): boolean;
        /**
         * Populate `context` with proposals from `provider` added with the
         * `gtk_source_completion_context_add_proposals()` function.
         * @param context a {@link GtkSource.CompletionContext}.
         */
        populate(context: CompletionContext): void;
        /**
         * Update extra information shown in `info` for `proposal`.
         *
         * <note>
         *   <para>
         *     This function <emphasis>must</emphasis> be implemented when
         *     `gtk_source_completion_provider_get_info_widget()` is implemented.
         *   </para>
         * </note>
         * @param proposal a {@link GtkSource.CompletionProposal}.
         * @param info a {@link GtkSource.CompletionInfo}.
         */
        update_info(proposal: CompletionProposal, info: CompletionInfo): void;
    }

    export const CompletionProvider: CompletionProviderNamespace & {
        new (): CompletionProvider; // This allows `obj instanceof CompletionProvider`
    };

    namespace UndoManager {
        /**
         * Interface for implementing UndoManager.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Begin a not undoable action on the buffer. All changes between this call
             * and the call to `gtk_source_undo_manager_end_not_undoable_action()` cannot
             * be undone. This function should be re-entrant.
             * @virtual
             */
            vfunc_begin_not_undoable_action(): void;
            /**
             * Get whether there are redo operations available.
             * @virtual
             */
            vfunc_can_redo(): boolean;
            /**
             * Emits the {@link GtkSource.UndoManager.SignalSignatures.can_redo_changed | GtkSource.UndoManager::can-redo-changed} signal.
             * @virtual
             */
            vfunc_can_redo_changed(): void;
            /**
             * Get whether there are undo operations available.
             * @virtual
             */
            vfunc_can_undo(): boolean;
            /**
             * Emits the {@link GtkSource.UndoManager.SignalSignatures.can_undo_changed | GtkSource.UndoManager::can-undo-changed} signal.
             * @virtual
             */
            vfunc_can_undo_changed(): void;
            /**
             * Ends a not undoable action on the buffer.
             * @virtual
             */
            vfunc_end_not_undoable_action(): void;
            /**
             * Perform a single redo. Calling this function when there are no redo operations
             * available is an error. Use `gtk_source_undo_manager_can_redo()` to find out
             * if there are redo operations available.
             * @virtual
             */
            vfunc_redo(): void;
            /**
             * Perform a single undo. Calling this function when there are no undo operations
             * available is an error. Use `gtk_source_undo_manager_can_undo()` to find out
             * if there are undo operations available.
             * @virtual
             */
            vfunc_undo(): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface UndoManagerNamespace {
        $gtype: GObject.GType<UndoManager>;
        prototype: UndoManager;
    }
    /**
     * @gir-type Interface
     */
    interface UndoManager extends GObject.Object, UndoManager.Interface {
        // Methods

        /**
         * Begin a not undoable action on the buffer. All changes between this call
         * and the call to `gtk_source_undo_manager_end_not_undoable_action()` cannot
         * be undone. This function should be re-entrant.
         */
        begin_not_undoable_action(): void;
        /**
         * Get whether there are redo operations available.
         * @returns `true` if there are redo operations available, `false` otherwise
         */
        can_redo(): boolean;
        /**
         * Emits the {@link GtkSource.UndoManager.SignalSignatures.can_redo_changed | GtkSource.UndoManager::can-redo-changed} signal.
         */
        can_redo_changed(): void;
        /**
         * Get whether there are undo operations available.
         * @returns `true` if there are undo operations available, `false` otherwise
         */
        can_undo(): boolean;
        /**
         * Emits the {@link GtkSource.UndoManager.SignalSignatures.can_undo_changed | GtkSource.UndoManager::can-undo-changed} signal.
         */
        can_undo_changed(): void;
        /**
         * Ends a not undoable action on the buffer.
         */
        end_not_undoable_action(): void;
        /**
         * Perform a single redo. Calling this function when there are no redo operations
         * available is an error. Use `gtk_source_undo_manager_can_redo()` to find out
         * if there are redo operations available.
         */
        redo(): void;
        /**
         * Perform a single undo. Calling this function when there are no undo operations
         * available is an error. Use `gtk_source_undo_manager_can_undo()` to find out
         * if there are undo operations available.
         */
        undo(): void;
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
