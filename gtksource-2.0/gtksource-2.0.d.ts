
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
import type Gtk from '@girs/gtk-2.0';
import type Gdk from '@girs/gdk-2.0';
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
     * GtkSource-2.0
     */


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
    enum CompletionError {
        ALREADY_BOUND,
        NOT_BOUND,
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


    const COMPLETION_CAPABILITY_AUTOMATIC: string;

    const COMPLETION_CAPABILITY_INTERACTIVE: string;

    /**
     * Same as `gtk_text_iter_backward_search()`, but supports case insensitive
     * searching.
     * @param iter a {@link Gtk.TextIter} where the search begins.
     * @param str search string.
     * @param flags bitmask of flags affecting the search.
     * @param match_start (allow-none) return location for start of match, or `null`.
     * @param match_end return location for end of match, or `null`.
     * @param limit location of last possible `match_start`, or `null` for start of buffer.
     * @returns whether a match was found.
     */
    function iter_backward_search(iter: Gtk.TextIter, str: string, flags: SearchFlags, match_start: Gtk.TextIter, match_end: (Gtk.TextIter | null), limit: (Gtk.TextIter | null)): boolean;

    /**
     * Searches forward for `str`. Any match is returned by setting
     * `match_start` to the first character of the match and `match_end` to the
     * first character after the match. The search will not continue past
     * `limit`. Note that a search is a linear or O(n) operation, so you
     * may wish to use `limit` to avoid locking up your UI on large
     * buffers.
     * 
     * If the #GTK_SOURCE_SEARCH_VISIBLE_ONLY flag is present, the match may
     * have invisible text interspersed in `str`. i.e. `str` will be a
     * possibly-noncontiguous subsequence of the matched range. similarly,
     * if you specify #GTK_SOURCE_SEARCH_TEXT_ONLY, the match may have
     * pixbufs or child widgets mixed inside the matched range. If these
     * flags are not given, the match must be exact; the special 0xFFFC
     * character in `str` will match embedded pixbufs or child widgets.
     * If you specify the #GTK_SOURCE_SEARCH_CASE_INSENSITIVE flag, the text will
     * be matched regardless of what case it is in.
     * 
     * Same as `gtk_text_iter_forward_search()`, but supports case insensitive
     * searching.
     * @param iter start of search.
     * @param str a search string.
     * @param flags flags affecting how the search is done.
     * @param match_start return location for start of match, or `null`.
     * @param match_end return location for end of match, or `null`.
     * @param limit bound for the search, or `null` for the end of the buffer.
     * @returns whether a match was found.
     */
    function iter_forward_search(iter: Gtk.TextIter, str: string, flags: SearchFlags, match_start: (Gtk.TextIter | null), match_end: (Gtk.TextIter | null), limit: (Gtk.TextIter | null)): boolean;

    /**
     * @gir-type Callback
     */
    interface GutterDataFunc {
        (gutter: Gutter, cell: Gtk.CellRenderer, line_number: number, current_line: boolean, data: null): void;
    }

    /**
     * @gir-type Callback
     */
    interface GutterSizeFunc {
        (gutter: Gutter, cell: Gtk.CellRenderer, data: null): void;
    }

    /**
     * @gir-type Callback
     */
    interface ViewMarkTooltipFunc {
        (mark: Mark): string;
    }

    /**
     * @gir-type Flags
     */
    enum CompletionActivation {
        /**
         * none.
         */
        NONE,
        /**
         * interactive activation
         */
        INTERACTIVE,
        /**
         * user requested activation
         * (e.g. through a keyboard accelerator from the view)
         */
        USER_REQUESTED,
    }


    /**
     * GtkSourceDrawSpacesFlags determine what kind of spaces whould be drawn. If none
     * of GTK_SOURCE_DRAW_SPACES_LEADING, GTK_SOURCE_DRAW_SPACES_TEXT or
     * GTK_SOURCE_DRAW_SPACES_TRAILING is specified, whitespaces at any position in
     * the line will be drawn (i.e. it has the same effect as specifying all of them).
     * @gir-type Flags
     */
    enum DrawSpacesFlags {
        /**
         * whether the space character should be drawn.
         */
        SPACE,
        /**
         * whether the tab character should be drawn.
         */
        TAB,
        /**
         * whether the line breaks should be drawn.
         */
        NEWLINE,
        /**
         * whether the non-breaking whitespaces should be drawn.
         */
        NBSP,
        /**
         * whether leading whitespaces should be drawn.
         */
        LEADING,
        /**
         * whether whitespaces inside text should be drawn.
         */
        TEXT,
        /**
         * whether trailing whitespaces should be drawn.
         */
        TRAILING,
        /**
         * wheter all kind of spaces should be drawn.
         */
        ALL,
    }


    /**
     * @gir-type Flags
     */
    enum SearchFlags {
        VISIBLE_ONLY,
        TEXT_ONLY,
        CASE_INSENSITIVE,
    }


    namespace Buffer {
        // Signal signatures
        interface SignalSignatures extends Gtk.TextBuffer.SignalSignatures {
            /**
             * Sets `iter` to a valid iterator pointing to the matching bracket
             * if `state` is #GTK_SOURCE_BRACKET_MATCH_FOUND.
             * @signal
             * @since 2.12
             * @run-last
             */
            "bracket-matched": (arg0: Gtk.TextIter, arg1: unknown) => void;
            /**
             * @signal
             * @run-last
             */
            "highlight-updated": (arg0: Gtk.TextIter, arg1: Gtk.TextIter) => void;
            /**
             * @signal
             * @run-last
             */
            redo: () => void;
            /**
             * The ::source_mark_updated signal is emitted each time
             * a mark is added to, moved or removed from the `buffer`.
             * @signal
             * @run-last
             */
            "source-mark-updated": (arg0: Gtk.TextMark) => void;
            /**
             * @signal
             * @run-last
             */
            undo: () => void;
            "notify::can-redo": (pspec: GObject.ParamSpec) => void;
            "notify::can-undo": (pspec: GObject.ParamSpec) => void;
            "notify::highlight-matching-brackets": (pspec: GObject.ParamSpec) => void;
            "notify::highlight-syntax": (pspec: GObject.ParamSpec) => void;
            "notify::language": (pspec: GObject.ParamSpec) => void;
            "notify::max-undo-levels": (pspec: GObject.ParamSpec) => void;
            "notify::style-scheme": (pspec: GObject.ParamSpec) => void;
            "notify::undo-manager": (pspec: GObject.ParamSpec) => void;
            "notify::copy-target-list": (pspec: GObject.ParamSpec) => void;
            "notify::cursor-position": (pspec: GObject.ParamSpec) => void;
            "notify::has-selection": (pspec: GObject.ParamSpec) => void;
            "notify::paste-target-list": (pspec: GObject.ParamSpec) => void;
            "notify::tag-table": (pspec: GObject.ParamSpec) => void;
            "notify::text": (pspec: GObject.ParamSpec) => void;
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
         * @default false
         */
        get can_redo(): boolean;

        /**
         * @read-only
         * @default false
         */
        get canRedo(): boolean;

        /**
         * @read-only
         * @default false
         */
        get can_undo(): boolean;

        /**
         * @read-only
         * @default false
         */
        get canUndo(): boolean;

        /**
         * Whether to highlight matching brackets in the buffer.
         * @default true
         */
        get highlight_matching_brackets(): boolean;
        set highlight_matching_brackets(val: boolean);

        /**
         * Whether to highlight matching brackets in the buffer.
         * @default true
         */
        get highlightMatchingBrackets(): boolean;
        set highlightMatchingBrackets(val: boolean);

        /**
         * Whether to highlight syntax in the buffer.
         * @default true
         */
        get highlight_syntax(): boolean;
        set highlight_syntax(val: boolean);

        /**
         * Whether to highlight syntax in the buffer.
         * @default true
         */
        get highlightSyntax(): boolean;
        set highlightSyntax(val: boolean);

        get language(): Language;
        set language(val: Language);

        /**
         * Number of undo levels for the buffer. -1 means no limit. This property
         * will only affect the default undo manager.
         * @default 1000
         */
        get max_undo_levels(): number;
        set max_undo_levels(val: number);

        /**
         * Number of undo levels for the buffer. -1 means no limit. This property
         * will only affect the default undo manager.
         * @default 1000
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

        static ["new"](table: (Gtk.TextTagTable | null)): Buffer;

        static new_with_language(language: Language): Buffer;

        // Signals
        /** @signal */
        connect<K extends keyof Buffer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Buffer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Buffer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Buffer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Buffer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Buffer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
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
         * @virtual
         */
        vfunc_redo(): void;

        /**
         * Undoes the last user action which modified the buffer.  Use
         * `gtk_source_buffer_can_undo()` to check whether a call to this
         * function will have any effect.
         * 
         * Actions are defined as groups of operations between a call to
         * `gtk_text_buffer_begin_user_action()` and
         * `gtk_text_buffer_end_user_action()`, or sequences of similar edits
         * (inserts or deletes) on the same line.
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
        backward_iter_to_source_mark(iter: Gtk.TextIter, category: (string | null)): boolean;

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
        create_source_mark(name: (string | null), category: string, where: Gtk.TextIter): Mark;

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
        forward_iter_to_source_mark(iter: Gtk.TextIter, category: (string | null)): boolean;

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
         * Returns the {@link GtkSource.Language} associated with the buffer,
         * see `gtk_source_buffer_set_language()`.  The returned object should not be
         * unreferenced by the user.
         * @returns the {@link GtkSource.Language} associated with the buffer, or `null`.
         */
        get_language(): Language;

        /**
         * Determines the number of undo levels the buffer will track for
         * buffer edits.
         * @returns the maximum number of possible undo levels or               -1 if no limit is set.
         */
        get_max_undo_levels(): number;

        /**
         * Returns the {@link GtkSource.StyleScheme} associated with the buffer,
         * see `gtk_source_buffer_set_style_scheme()`.
         * The returned object should not be unreferenced by the user.
         * @returns the {@link GtkSource.StyleScheme} associated with the buffer, or `null`.
         */
        get_style_scheme(): StyleScheme;

        /**
         * Returns the {@link GtkSource.UndoManager} associated with the buffer,
         * see `gtk_source_buffer_set_undo_manager()`.  The returned object should not be
         * unreferenced by the user.
         * @returns the {@link GtkSource.UndoManager} associated with the buffer, or `null`.
         */
        get_undo_manager(): UndoManager;

        /**
         * Moves backward to the next toggle (on or off) of the context class. If no
         * matching context class toggles are found, returns `false`, otherwise `true`.
         * Does not return toggles located at `iter`, only toggles after `iter`. Sets
         * `iter` to the location of the toggle, or to the end of the buffer if no
         * toggle is found.
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
         * @param iter a {@link Gtk.TextIter}.
         * @param context_class the context class.
         * @returns whether we found a context class toggle after `iter`
         */
        iter_forward_to_context_class_toggle(iter: Gtk.TextIter, context_class: string): boolean;

        /**
         * Check if the class `context_klass` is set on `iter`.
         * @param iter a {@link Gtk.TextIter}.
         * @param context_class class to search for.
         */
        iter_has_context_class(iter: Gtk.TextIter, context_class: string): boolean;

        /**
         * Redoes the last undo operation.  Use `gtk_source_buffer_can_redo()`
         * to check whether a call to this function will have any effect.
         */
        redo(): void;

        /**
         * Remove all marks of `category` between `start` and `end` from the buffer.
         * If `category` is NULL, all marks in the range will be removed.
         * @param start a {@link Gtk.TextIter}.
         * @param end a {@link Gtk.TextIter}.
         * @param category category to search for, or `null`.
         */
        remove_source_marks(start: Gtk.TextIter, end: Gtk.TextIter, category: (string | null)): void;

        /**
         * Controls the bracket match highlighting function in the buffer.  If
         * activated, when you position your cursor over a bracket character
         * (a parenthesis, a square bracket, etc.) the matching opening or
         * closing bracket character will be highlighted.  You can specify the
         * style with the `gtk_source_buffer_set_bracket_match_style()`
         * function.
         * @param highlight `true` if you want matching brackets highlighted.
         */
        set_highlight_matching_brackets(highlight: boolean): void;

        /**
         * Controls whether syntax is highlighted in the buffer. If `highlight`
         * is `true`, the text will be highlighted according to the syntax
         * patterns specified in the language set with
         * `gtk_source_buffer_set_language()`. If `highlight` is `false`, syntax highlighting
         * is disabled and all the GtkTextTag objects that have been added by the
         * syntax highlighting engine are removed from the buffer.
         * @param highlight `true` to enable syntax highlighting, `false` to disable it.
         */
        set_highlight_syntax(highlight: boolean): void;

        /**
         * Associate a {@link GtkSource.Language} with the buffer. If `language` is
         * not-`null` and syntax highlighting is enabled (see `gtk_source_buffer_set_highlight_syntax()`),
         * the syntax patterns defined in `language` will be used to highlight the text
         * contained in the buffer. If `language` is `null`, the text contained in the
         * buffer is not highlighted.
         * 
         * The buffer holds a reference to `language`.
         * @param language a {@link GtkSource.Language} to set, or `null`.
         */
        set_language(language: (Language | null)): void;

        /**
         * Sets the number of undo levels for user actions the buffer will
         * track.  If the number of user actions exceeds the limit set by this
         * function, older actions will be discarded.
         * 
         * If `max_undo_levels` is -1, no limit is set.
         * 
         * A new action is started whenever the function
         * `gtk_text_buffer_begin_user_action()` is called.  In general, this
         * happens whenever the user presses any key which modifies the
         * buffer, but the undo manager will try to merge similar consecutive
         * actions, such as multiple character insertions into one action.
         * But, inserting a newline does start a new action.
         * @param max_undo_levels the desired maximum number of undo levels.
         */
        set_max_undo_levels(max_undo_levels: number): void;

        /**
         * Sets style scheme used by the buffer. If `scheme` is `null` no
         * style scheme is used.
         * @param scheme a {@link GtkSource.StyleScheme} or `null`.
         */
        set_style_scheme(scheme: (StyleScheme | null)): void;

        /**
         * Set the buffer undo manager. If `manager` is `null` the default undo manager
         * will be set.
         * @param manager A {@link GtkSource.UndoManager} or `null`.
         */
        set_undo_manager(manager: (UndoManager | null)): void;

        /**
         * Undoes the last user action which modified the buffer.  Use
         * `gtk_source_buffer_can_undo()` to check whether a call to this
         * function will have any effect.
         * 
         * Actions are defined as groups of operations between a call to
         * `gtk_text_buffer_begin_user_action()` and
         * `gtk_text_buffer_end_user_action()`, or sequences of similar edits
         * (inserts or deletes) on the same line.
         */
        undo(): void;
    }


    namespace Completion {
        // Signal signatures
        interface SignalSignatures extends Gtk.Object.SignalSignatures {
            /**
             * The ::activate-proposal signal is a keybinding signal which gets
             * emitted when the user initiates a proposal activation.
             * 
             * Applications should not connect to it, but may emit it with
             * `g_signal_emit_by_name` if they need to control the proposal activation
             * programmatically.
             * @signal
             * @action
             * @run-last
             */
            "activate-proposal": () => void;
            /**
             * Emitted when the completion window is hidden. The default handler
             * will actually hide the window.
             * @signal
             * @action
             * @run-last
             */
            hide: () => void;
            /**
             * The ::move-cursor signal is a keybinding signal which gets emitted when
             * the user initiates a cursor movement.
             * 
             * Applications should not connect to it, but may emit it with
             * `g_signal_emit_by_name` if they need to control the cursor
             * programmatically.
             * @signal
             * @action
             * @run-last
             */
            "move-cursor": (arg0: Gtk.ScrollStep, arg1: number) => void;
            /**
             * The ::move-page signal is a keybinding signal which gets emitted when
             * the user initiates a page movement (i.e. switches between provider
             * pages).
             * 
             * Applications should not connect to it, but may emit it with
             * `g_signal_emit_by_name` if they need to control the page selection
             * programmatically.
             * @signal
             * @action
             * @run-last
             */
            "move-page": (arg0: Gtk.ScrollStep, arg1: number) => void;
            /**
             * Emitted just before starting to populate the completion with providers.
             * You can use this signal to add additional attributes in the context.
             * @signal
             * @action
             * @run-last
             */
            "populate-context": (arg0: CompletionContext) => void;
            /**
             * Emitted when the completion window is shown. The default handler
             * will actually show the window.
             * @signal
             * @action
             * @run-last
             */
            show: () => void;
            "notify::accelerators": (pspec: GObject.ParamSpec) => void;
            "notify::auto-complete-delay": (pspec: GObject.ParamSpec) => void;
            "notify::proposal-page-size": (pspec: GObject.ParamSpec) => void;
            "notify::provider-page-size": (pspec: GObject.ParamSpec) => void;
            "notify::remember-info-visibility": (pspec: GObject.ParamSpec) => void;
            "notify::select-on-show": (pspec: GObject.ParamSpec) => void;
            "notify::show-headers": (pspec: GObject.ParamSpec) => void;
            "notify::show-icons": (pspec: GObject.ParamSpec) => void;
            "notify::view": (pspec: GObject.ParamSpec) => void;
            "notify::user-data": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Object.ConstructorProps {
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
    class Completion extends Gtk.Object {
        static $gtype: GObject.GType<Completion>;

        // Properties
        /**
         * Number of accelerators to show for the first proposals.
         * @default 5
         */
        get accelerators(): number;
        set accelerators(val: number);

        /**
         * Determines the popup delay (in milliseconds) at which the completion
         * will be shown for interactive completion.
         * @default 250
         */
        get auto_complete_delay(): number;
        set auto_complete_delay(val: number);

        /**
         * Determines the popup delay (in milliseconds) at which the completion
         * will be shown for interactive completion.
         * @default 250
         */
        get autoCompleteDelay(): number;
        set autoCompleteDelay(val: number);

        /**
         * The scroll page size of the proposals in the completion window.
         * @default 5
         */
        get proposal_page_size(): number;
        set proposal_page_size(val: number);

        /**
         * The scroll page size of the proposals in the completion window.
         * @default 5
         */
        get proposalPageSize(): number;
        set proposalPageSize(val: number);

        /**
         * The scroll page size of the provider pages in the completion window.
         * @default 5
         */
        get provider_page_size(): number;
        set provider_page_size(val: number);

        /**
         * The scroll page size of the provider pages in the completion window.
         * @default 5
         */
        get providerPageSize(): number;
        set providerPageSize(val: number);

        /**
         * Determines whether the visibility of the info window should be
         * saved when the completion is hidden, and restored when the completion
         * is shown again.
         * @default false
         */
        get remember_info_visibility(): boolean;
        set remember_info_visibility(val: boolean);

        /**
         * Determines whether the visibility of the info window should be
         * saved when the completion is hidden, and restored when the completion
         * is shown again.
         * @default false
         */
        get rememberInfoVisibility(): boolean;
        set rememberInfoVisibility(val: boolean);

        /**
         * Determines whether the first proposal should be selected when the
         * completion is first shown.
         * @default true
         */
        get select_on_show(): boolean;
        set select_on_show(val: boolean);

        /**
         * Determines whether the first proposal should be selected when the
         * completion is first shown.
         * @default true
         */
        get selectOnShow(): boolean;
        set selectOnShow(val: boolean);

        /**
         * Determines whether provider headers should be shown in the proposal
         * list if there is more than one provider with proposals.
         * @default true
         */
        get show_headers(): boolean;
        set show_headers(val: boolean);

        /**
         * Determines whether provider headers should be shown in the proposal
         * list if there is more than one provider with proposals.
         * @default true
         */
        get showHeaders(): boolean;
        set showHeaders(val: boolean);

        /**
         * Determines whether provider and proposal icons should be shown in
         * the completion popup.
         * @default true
         */
        get show_icons(): boolean;
        set show_icons(val: boolean);

        /**
         * Determines whether provider and proposal icons should be shown in
         * the completion popup.
         * @default true
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
        connect<K extends keyof Completion.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Completion.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Completion.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Completion.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Completion.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Completion.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        static error_quark(): GLib.Quark;

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
         * the completion. Use `gtk_source_completion_unblock_interactive` to enable
         * interactive completion again.
         */
        block_interactive(): void;

        /**
         * The info widget is the window where the completion displays optional extra
         * information of the proposal.
         * @returns The {@link GtkSource.CompletionInfo} window                           associated with `completion`.
         */
        get_info_window(): CompletionInfo;

        /**
         * The {@link GtkSource.View} associated with `completion`.
         * @returns The {@link GtkSource.View} associated with `completion`.
         */
        get_view(): null;

        /**
         * Hides the completion if it is active (visible).
         */
        hide(): void;

        /**
         * Move the completion window to a specific iter.
         * @param iter a {@link Gtk.TextIter}.
         */
        move_window(iter: Gtk.TextIter): void;

        /**
         * Remove `provider` from the completion.
         * @param provider a {@link GtkSource.CompletionProvider}.
         * @returns `true` if `provider` was successfully removed, otherwise if `error`          is provided, it will be set with the error and `false` is returned.
         */
        remove_provider(provider: CompletionProvider): boolean;

        /**
         * Unblock interactive completion. This can be used after using
         * `gtk_source_completion_block_interactive` to enable interactive completion
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
            "notify::completion": (pspec: GObject.ParamSpec) => void;
            "notify::iter": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.InitiallyUnowned.ConstructorProps {
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
        connect<K extends keyof CompletionContext.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CompletionContext.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof CompletionContext.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CompletionContext.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof CompletionContext.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CompletionContext.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_cancelled(): void;

        // Methods
        /**
         * Get the context activation.
         * @returns The context activation.
         */
        get_activation(): CompletionActivation;

        /**
         * Get the iter at which the completion was invoked. Providers can use this
         * to determine how and if to match proposals.
         * @param iter a {@link Gtk.TextIter}.
         */
        get_iter(iter: Gtk.TextIter): void;
    }


    namespace CompletionInfo {
        // Signal signatures
        interface SignalSignatures extends Gtk.Window.SignalSignatures {
            /**
             * @signal
             * @action
             * @run-last
             */
            "before-show": () => void;
            "notify::max-height": (pspec: GObject.ParamSpec) => void;
            "notify::max-width": (pspec: GObject.ParamSpec) => void;
            "notify::shrink-height": (pspec: GObject.ParamSpec) => void;
            "notify::shrink-width": (pspec: GObject.ParamSpec) => void;
            "notify::accept-focus": (pspec: GObject.ParamSpec) => void;
            "notify::allow-grow": (pspec: GObject.ParamSpec) => void;
            "notify::allow-shrink": (pspec: GObject.ParamSpec) => void;
            "notify::decorated": (pspec: GObject.ParamSpec) => void;
            "notify::default-height": (pspec: GObject.ParamSpec) => void;
            "notify::default-width": (pspec: GObject.ParamSpec) => void;
            "notify::deletable": (pspec: GObject.ParamSpec) => void;
            "notify::destroy-with-parent": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-map": (pspec: GObject.ParamSpec) => void;
            "notify::gravity": (pspec: GObject.ParamSpec) => void;
            "notify::has-toplevel-focus": (pspec: GObject.ParamSpec) => void;
            "notify::icon": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::is-active": (pspec: GObject.ParamSpec) => void;
            "notify::mnemonics-visible": (pspec: GObject.ParamSpec) => void;
            "notify::modal": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::resizable": (pspec: GObject.ParamSpec) => void;
            "notify::role": (pspec: GObject.ParamSpec) => void;
            "notify::screen": (pspec: GObject.ParamSpec) => void;
            "notify::skip-pager-hint": (pspec: GObject.ParamSpec) => void;
            "notify::skip-taskbar-hint": (pspec: GObject.ParamSpec) => void;
            "notify::startup-id": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::transient-for": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::type-hint": (pspec: GObject.ParamSpec) => void;
            "notify::urgency-hint": (pspec: GObject.ParamSpec) => void;
            "notify::window-position": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::extension-events": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::user-data": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Window.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            max_height: number;
            maxHeight: number;
            max_width: number;
            maxWidth: number;
            shrink_height: boolean;
            shrinkHeight: boolean;
            shrink_width: boolean;
            shrinkWidth: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class CompletionInfo extends Gtk.Window implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<CompletionInfo>;

        // Properties
        /**
         * @default -1
         */
        get max_height(): number;
        set max_height(val: number);

        /**
         * @default -1
         */
        get maxHeight(): number;
        set maxHeight(val: number);

        /**
         * @default -1
         */
        get max_width(): number;
        set max_width(val: number);

        /**
         * @default -1
         */
        get maxWidth(): number;
        set maxWidth(val: number);

        /**
         * @default true
         */
        get shrink_height(): boolean;
        set shrink_height(val: boolean);

        /**
         * @default true
         */
        get shrinkHeight(): boolean;
        set shrinkHeight(val: boolean);

        /**
         * @default true
         */
        get shrink_width(): boolean;
        set shrink_width(val: boolean);

        /**
         * @default true
         */
        get shrinkWidth(): boolean;
        set shrinkWidth(val: boolean);

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

        static ["new"](): CompletionInfo;

        // Signals
        /** @signal */
        connect<K extends keyof CompletionInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CompletionInfo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof CompletionInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CompletionInfo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof CompletionInfo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CompletionInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_before_show(): void;

        // Methods
        /**
         * Get the current content widget.
         * @returns The current content widget.
         */
        get_widget(): Gtk.Widget;

        /**
         * Moves the {@link GtkSource.CompletionInfo} to `iter`. If `iter` is `null` `info` is
         * moved to the cursor position. Moving will respect the {@link Gdk.Gravity} setting
         * of the info window and will ensure the line at `iter` is not occluded by
         * the window.
         * @param view a {@link Gtk.TextView} on which the info window should be positioned.
         * @param iter a {@link Gtk.TextIter}.
         */
        move_to_iter(view: Gtk.TextView, iter: (Gtk.TextIter | null)): void;

        process_resize(): void;

        /**
         * Set sizing information for the info window. If `shrink_width` or
         * `shrink_height` is `true`, the info window will try to resize to fit the
         * window contents, with a maximum size given by `width` and `height`. Setting
         * `width` or `height` to -1 removes the maximum size of respectively the width
         * and height of the window.
         * @param width The maximum/requested width of the window (-1 to default).
         * @param height The maximum/requested height of the window (-1 to default).
         * @param shrink_width Whether to shrink the width of the window to fit its contents.
         * @param shrink_height Whether to shrink the height of the window to fit its                 contents.
         */
        set_sizing(width: number, height: number, shrink_width: boolean, shrink_height: boolean): void;

        /**
         * Sets the content widget of the info window. If `widget` does not fit within
         * the size requirements of the window, a {@link Gtk.ScrolledWindow} will automatically
         * be created and added to the window.
         * @param widget a {@link Gtk.Widget}.
         */
        set_widget(widget: (Gtk.Widget | null)): void;

        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): null;

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
        set_data(key: string, data: null): void;

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
    }


    namespace CompletionItem {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::icon": (pspec: GObject.ParamSpec) => void;
            "notify::info": (pspec: GObject.ParamSpec) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::markup": (pspec: GObject.ParamSpec) => void;
            "notify::text": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, CompletionProposal.ConstructorProps {
            icon: GdkPixbuf.Pixbuf;
            info: string;
            label: string;
            markup: string;
            text: string;
        }
    }

    /**
     * @gir-type Class
     */
    class CompletionItem extends GObject.Object implements CompletionProposal {
        static $gtype: GObject.GType<CompletionItem>;

        // Properties
        /**
         * Icon to be shown for this proposal.
         */
        get icon(): GdkPixbuf.Pixbuf;
        set icon(val: GdkPixbuf.Pixbuf);

        /**
         * Optional extra information to be shown for this proposal.
         * @default null
         */
        get info(): string;
        set info(val: string);

        /**
         * Label to be shown for this proposal.
         * @default null
         */
        get label(): string;
        set label(val: string);

        /**
         * Label with markup to be shown for this proposal.
         * @default null
         */
        get markup(): string;
        set markup(val: string);

        /**
         * Proposal text.
         * @default null
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

        static ["new"](label: string, text: string, icon: (GdkPixbuf.Pixbuf | null), info: (string | null)): CompletionItem;

        static new_from_stock(label: (string | null), text: string, stock: string, info: (string | null)): CompletionItem;

        static new_with_markup(markup: string, text: string, icon: (GdkPixbuf.Pixbuf | null), info: (string | null)): CompletionItem;

        // Signals
        /** @signal */
        connect<K extends keyof CompletionItem.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CompletionItem.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof CompletionItem.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CompletionItem.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof CompletionItem.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CompletionItem.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * Emits the "changed" signal on `proposal`. This should be called by
         * implementations whenever the name, icon or info of the proposal has
         * changed.
         */
        changed(): void;

        /**
         * Get whether two proposal objects are the same.  This is used to (together
         * with `gtk_source_completion_proposal_hash`) to match proposals in the
         * completion model. By default, it uses direct equality (`g_direct_equal`).
         * @param other a {@link GtkSource.CompletionProposal}.
         * @returns `true` if `proposal` and `object` are the same proposal
         */
        equal(other: CompletionProposal): boolean;

        /**
         * Gets extra information associated to the proposal. This information will be
         * used to present the user with extra, detailed information about the
         * selected proposal. The returned string must be freed with `g_free()`.
         * @returns a new string containing extra information of `proposal` or `null` if          no extra information is associated to `proposal`.
         */
        get_info(): string;

        /**
         * Gets the label of `proposal`. The label is shown in the list of proposals as
         * plain text. If you need any markup (such as bold or italic text), you have
         * to implement `gtk_source_completion_proposal_get_markup`. The returned string
         * must be freed with `g_free()`.
         * @returns a new string containing the label of `proposal`.
         */
        get_label(): string;

        /**
         * Gets the label of `proposal` with markup. The label is shown in the list of
         * proposals and may contain markup. This will be used instead of
         * `gtk_source_completion_proposal_get_label` if implemented. The returned string
         * must be freed with `g_free()`.
         * @returns a new string containing the label of `proposal` with markup.
         */
        get_markup(): string;

        /**
         * Gets the text of `proposal`. The text that is inserted into
         * the text buffer when the proposal is activated by the default activation.
         * You are free to implement a custom activation handler in the provider and
         * not implement this function. The returned string must be freed with `g_free()`.
         * @returns a new string containing the text of `proposal`.
         */
        get_text(): string;

        /**
         * Get the hash value of `proposal`. This is used to (together with
         * `gtk_source_completion_proposal_equal`) to match proposals in the completion
         * model. By default, it uses a direct hash (`g_direct_hash`).
         * @returns The hash value of `proposal`.
         */
        hash(): number;

        /**
         * Emits the "changed" signal on `proposal`. This should be called by
         * implementations whenever the name, icon or info of the proposal has
         * changed.
         * @virtual
         */
        vfunc_changed(): void;

        /**
         * Get whether two proposal objects are the same.  This is used to (together
         * with `gtk_source_completion_proposal_hash`) to match proposals in the
         * completion model. By default, it uses direct equality (`g_direct_equal`).
         * @param other a {@link GtkSource.CompletionProposal}.
         * @virtual
         */
        vfunc_equal(other: CompletionProposal): boolean;

        /**
         * Gets extra information associated to the proposal. This information will be
         * used to present the user with extra, detailed information about the
         * selected proposal. The returned string must be freed with `g_free()`.
         * @virtual
         */
        vfunc_get_info(): string;

        /**
         * Gets the label of `proposal`. The label is shown in the list of proposals as
         * plain text. If you need any markup (such as bold or italic text), you have
         * to implement `gtk_source_completion_proposal_get_markup`. The returned string
         * must be freed with `g_free()`.
         * @virtual
         */
        vfunc_get_label(): string;

        /**
         * Gets the label of `proposal` with markup. The label is shown in the list of
         * proposals and may contain markup. This will be used instead of
         * `gtk_source_completion_proposal_get_label` if implemented. The returned string
         * must be freed with `g_free()`.
         * @virtual
         */
        vfunc_get_markup(): string;

        /**
         * Gets the text of `proposal`. The text that is inserted into
         * the text buffer when the proposal is activated by the default activation.
         * You are free to implement a custom activation handler in the provider and
         * not implement this function. The returned string must be freed with `g_free()`.
         * @virtual
         */
        vfunc_get_text(): string;

        /**
         * Get the hash value of `proposal`. This is used to (together with
         * `gtk_source_completion_proposal_equal`) to match proposals in the completion
         * model. By default, it uses a direct hash (`g_direct_hash`).
         * @virtual
         */
        vfunc_hash(): number;
    }


    namespace Gutter {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted when a cell has been activated (for instance when there was
             * a button press on the cell). The signal is only emitted for cells
             * that have the #activatable property set to `true`.
             * @signal
             * @run-last
             */
            "cell-activated": (arg0: Gtk.CellRenderer, arg1: Gtk.TextIter, arg2: Gdk.Event) => void;
            /**
             * Emitted when a tooltip is requested for a specific cell. Signal
             * handlers can return `true` to notify the tooltip has been handled.
             * @signal
             * @run-last
             */
            "query-tooltip": (arg0: Gtk.CellRenderer, arg1: Gtk.TextIter, arg2: Gtk.Tooltip) => (boolean | void);
            "notify::view": (pspec: GObject.ParamSpec) => void;
            "notify::window-type": (pspec: GObject.ParamSpec) => void;
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
         * The {@link GtkSource.View} of the gutter
         * @construct-only
         */
        get view(): View;

        /**
         * The text window type on which the window is placed
         * @construct-only
         * @default Gtk.TextWindowType.PRIVATE
         */
        get window_type(): Gtk.TextWindowType;

        /**
         * The text window type on which the window is placed
         * @construct-only
         * @default Gtk.TextWindowType.PRIVATE
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
        connect<K extends keyof Gutter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Gutter.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Gutter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Gutter.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Gutter.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Gutter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param renderer 
         * @param iter 
         * @param event 
         * @virtual
         */
        vfunc_cell_activated(renderer: Gtk.CellRenderer, iter: Gtk.TextIter, event: Gdk.Event): void;

        /**
         * @param renderer 
         * @param iter 
         * @param tooltip 
         * @virtual
         */
        vfunc_query_tooltip(renderer: Gtk.CellRenderer, iter: Gtk.TextIter, tooltip: Gtk.Tooltip): boolean;

        // Methods
        /**
         * Inserts `renderer` into `gutter` at `position`.
         * @param renderer a {@link Gtk.CellRenderer}.
         * @param position the renderers position.
         */
        insert(renderer: Gtk.CellRenderer, position: number): void;

        /**
         * Invalidates the drawable area of the gutter. You can use this to force a
         * redraw of the gutter if something has changed and needs to be redrawn.
         */
        queue_draw(): void;

        /**
         * Removes `renderer` from `gutter`.
         * @param renderer a {@link Gtk.CellRenderer}.
         */
        remove(renderer: Gtk.CellRenderer): void;

        /**
         * Reorders `renderer` in `gutter` to new `position`.
         * @param renderer a {@link Gtk.CellRenderer}.
         * @param position the new renderer position.
         */
        reorder(renderer: Gtk.CellRenderer, position: number): void;

        /**
         * Sets the {@link GtkSource.GutterDataFunc} to use for `renderer`. This function is
         * used to setup the cell renderer properties for rendering the current cell.
         * @param renderer a {@link Gtk.CellRenderer}.
         * @param func the {@link GtkSource.GutterDataFunc} to use.
         */
        set_cell_data_func(renderer: Gtk.CellRenderer, func: (GutterDataFunc | null)): void;

        /**
         * Sets the {@link GtkSource.GutterSizeFunc} to use for `renderer`. This function is
         * used to setup the cell renderer properties for measuring the maximum size
         * of the cell.
         * @param renderer a {@link Gtk.CellRenderer}.
         * @param func the {@link GtkSource.GutterSizeFunc} to use.
         */
        set_cell_size_func(renderer: Gtk.CellRenderer, func: (GutterSizeFunc | null)): void;
    }


    namespace Language {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::section": (pspec: GObject.ParamSpec) => void;
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
         * @default false
         */
        get hidden(): boolean;

        /**
         * @read-only
         * @default null
         */
        get id(): string;

        /**
         * @read-only
         * @default null
         */
        get name(): string;

        /**
         * @read-only
         * @default null
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
        connect<K extends keyof Language.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Language.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Language.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Language.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Language.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Language.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
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
         * @returns value of property `name` stored in the metadata of `language` or `null` if language doesn't contain that metadata property. The returned string is owned by `language` and should not be freed or modified.
         */
        get_metadata(name: string): string;

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
         * Returns the name of the style with ID `style_id` defined by this `language`.
         * @param style_id a style ID.
         * @returns the name of the style with ID `style_id` defined by this `language` or `null` if the style has no name or there is no style with ID `style_id` defined by this `language`. The returned string is owned by the `language` and must not be modified.
         */
        get_style_name(style_id: string): string;
    }


    namespace LanguageManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::language-ids": (pspec: GObject.ParamSpec) => void;
            "notify::search-path": (pspec: GObject.ParamSpec) => void;
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

        static ["new"](): LanguageManager;

        // Signals
        /** @signal */
        connect<K extends keyof LanguageManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LanguageManager.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof LanguageManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LanguageManager.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof LanguageManager.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<LanguageManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets the {@link GtkSource.Language} identified by the given `id` in the language
         * manager.
         * @param id a language id.
         * @returns a {@link GtkSource.Language}, or `null` if there is no language identified by the given `id`. Return value is owned by `lm` and should not be freed.
         */
        get_language(id: string): Language;

        /**
         * Returns the ids of the available languages.
         * @returns a `null`-terminated array of string containing the ids of the available languages or `null` if no language is available. The array is owned by `lm` and must not be modified.
         */
        get_language_ids(): string[];

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
        guess_language(filename: (string | null), content_type: (string | null)): Language;

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
        set_search_path(dirs: (string[] | null)): void;
    }


    namespace Mark {
        // Signal signatures
        interface SignalSignatures extends Gtk.TextMark.SignalSignatures {
            "notify::category": (pspec: GObject.ParamSpec) => void;
            "notify::left-gravity": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
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
         * @default null
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

        static ["new"](name: string, category: string): Mark;

        // Conflicted with Gtk.TextMark.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof Mark.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Mark.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Mark.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Mark.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Mark.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Mark.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Returns the mark category.
         * @returns the category of the {@link GtkSource.Mark}.
         */
        get_category(): string;
    }


    namespace PrintCompositor {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::body-font-name": (pspec: GObject.ParamSpec) => void;
            "notify::buffer": (pspec: GObject.ParamSpec) => void;
            "notify::footer-font-name": (pspec: GObject.ParamSpec) => void;
            "notify::header-font-name": (pspec: GObject.ParamSpec) => void;
            "notify::highlight-syntax": (pspec: GObject.ParamSpec) => void;
            "notify::line-numbers-font-name": (pspec: GObject.ParamSpec) => void;
            "notify::n-pages": (pspec: GObject.ParamSpec) => void;
            "notify::print-footer": (pspec: GObject.ParamSpec) => void;
            "notify::print-header": (pspec: GObject.ParamSpec) => void;
            "notify::print-line-numbers": (pspec: GObject.ParamSpec) => void;
            "notify::tab-width": (pspec: GObject.ParamSpec) => void;
            "notify::wrap-mode": (pspec: GObject.ParamSpec) => void;
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
         * @default null
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
         * @default null
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
         * @default null
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
         * @default null
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
         * @default null
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
         * @default null
         */
        get headerFontName(): string;
        set headerFontName(val: string);

        /**
         * Whether to print the document with highlighted syntax.
         *  
         * The value of this property cannot be changed anymore after the first
         * call to the `gtk_source_print_compositor_paginate()` function.
         * @since 2.2
         * @default true
         */
        get highlight_syntax(): boolean;
        set highlight_syntax(val: boolean);

        /**
         * Whether to print the document with highlighted syntax.
         *  
         * The value of this property cannot be changed anymore after the first
         * call to the `gtk_source_print_compositor_paginate()` function.
         * @since 2.2
         * @default true
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
         * @default null
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
         * @default null
         */
        get lineNumbersFontName(): string;
        set lineNumbersFontName(val: string);

        /**
         * The number of pages in the document or <code>-1</code> if the
         * document has not been completely paginated.
         * @since 2.2
         * @read-only
         * @default -1
         */
        get n_pages(): number;

        /**
         * The number of pages in the document or <code>-1</code> if the
         * document has not been completely paginated.
         * @since 2.2
         * @read-only
         * @default -1
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
         * @default false
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
         * @default false
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
         * @default false
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
         * @default false
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
         * @default 1
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
         * @default 1
         */
        get printLineNumbers(): number;
        set printLineNumbers(val: number);

        /**
         * Width of a tab character expressed in spaces.
         * 
         * The value of this property cannot be changed anymore after the first
         * call to the `gtk_source_print_compositor_paginate()` function.
         * @since 2.2
         * @default 8
         */
        get tab_width(): number;
        set tab_width(val: number);

        /**
         * Width of a tab character expressed in spaces.
         * 
         * The value of this property cannot be changed anymore after the first
         * call to the `gtk_source_print_compositor_paginate()` function.
         * @since 2.2
         * @default 8
         */
        get tabWidth(): number;
        set tabWidth(val: number);

        /**
         * Whether to wrap lines never, at word boundaries, or at character boundaries.
         * 
         * The value of this property cannot be changed anymore after the first
         * call to the `gtk_source_print_compositor_paginate()` function.
         * @since 2.2
         * @default Gtk.WrapMode.NONE
         */
        get wrap_mode(): Gtk.WrapMode;
        set wrap_mode(val: Gtk.WrapMode);

        /**
         * Whether to wrap lines never, at word boundaries, or at character boundaries.
         * 
         * The value of this property cannot be changed anymore after the first
         * call to the `gtk_source_print_compositor_paginate()` function.
         * @since 2.2
         * @default Gtk.WrapMode.NONE
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

        static ["new"](buffer: Buffer): PrintCompositor;

        static new_from_view(view: View): PrintCompositor;

        // Signals
        /** @signal */
        connect<K extends keyof PrintCompositor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PrintCompositor.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof PrintCompositor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PrintCompositor.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof PrintCompositor.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PrintCompositor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
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
        get_bottom_margin(unit: Gtk.Unit): number;

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
        get_left_margin(unit: Gtk.Unit): number;

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
        set_bottom_margin(margin: number, unit: Gtk.Unit): void;

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
        set_footer_font_name(font_name: (string | null)): void;

        /**
         * Sets strftime like header format strings, to be printed on the
         * left, center and right of the bottom of each page. The strings may
         * include strftime(3) codes which will be expanded at print time.
         * All `strftime()` codes are accepted, with the addition of `N` for the
         * page number and `Q` for the page count.
         * 
         * `separator` specifies if a solid line should be drawn to separate
         * the footer from the document text.
         * 
         * If `null` is given for any of the three arguments, that particular
         * string will not be printed.
         * 
         * For the footer to be printed, in
         * addition to specifying format strings, you need to enable footer
         * printing with `gtk_source_print_compositor_set_print_footer()`.
         * 
         * This function cannot be called anymore after the first call to the
         * `gtk_source_print_compositor_paginate()` function.
         * @param separator `true` if you want a separator line to be printed.
         * @param left a format string to print on the left of the footer.
         * @param center a format string to print on the center of the footer.
         * @param right a format string to print on the right of the footer.
         */
        set_footer_format(separator: boolean, left: (string | null), center: (string | null), right: (string | null)): void;

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
        set_header_font_name(font_name: (string | null)): void;

        /**
         * Sets strftime like header format strings, to be printed on the
         * left, center and right of the top of each page.  The strings may
         * include strftime(3) codes which will be expanded at print time.
         * All `strftime()` codes are accepted, with the addition of `N` for the
         * page number and `Q` for the page count.
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
        set_header_format(separator: boolean, left: (string | null), center: (string | null), right: (string | null)): void;

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
        set_left_margin(margin: number, unit: Gtk.Unit): void;

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
        set_line_numbers_font_name(font_name: (string | null)): void;

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
        set_right_margin(margin: number, unit: Gtk.Unit): void;

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
        set_top_margin(margin: number, unit: Gtk.Unit): void;

        /**
         * Sets the line wrapping mode for the printed text.
         * 
         * This function cannot be called anymore after the first call to the
         * `gtk_source_print_compositor_paginate()` function.
         * @param wrap_mode a {@link Gtk.WrapMode}.
         */
        set_wrap_mode(wrap_mode: Gtk.WrapMode): void;
    }


    namespace Style {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::background": (pspec: GObject.ParamSpec) => void;
            "notify::background-set": (pspec: GObject.ParamSpec) => void;
            "notify::bold": (pspec: GObject.ParamSpec) => void;
            "notify::bold-set": (pspec: GObject.ParamSpec) => void;
            "notify::foreground": (pspec: GObject.ParamSpec) => void;
            "notify::foreground-set": (pspec: GObject.ParamSpec) => void;
            "notify::italic": (pspec: GObject.ParamSpec) => void;
            "notify::italic-set": (pspec: GObject.ParamSpec) => void;
            "notify::line-background": (pspec: GObject.ParamSpec) => void;
            "notify::line-background-set": (pspec: GObject.ParamSpec) => void;
            "notify::strikethrough": (pspec: GObject.ParamSpec) => void;
            "notify::strikethrough-set": (pspec: GObject.ParamSpec) => void;
            "notify::underline": (pspec: GObject.ParamSpec) => void;
            "notify::underline-set": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
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
            strikethrough: boolean;
            strikethrough_set: boolean;
            strikethroughSet: boolean;
            underline: boolean;
            underline_set: boolean;
            underlineSet: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class Style extends GObject.Object {
        static $gtype: GObject.GType<Style>;

        // Properties
        /**
         * @construct-only
         * @default null
         */
        get background(): string;

        /**
         * @construct-only
         * @default false
         */
        get background_set(): boolean;

        /**
         * @construct-only
         * @default false
         */
        get backgroundSet(): boolean;

        /**
         * @construct-only
         * @default false
         */
        get bold(): boolean;

        /**
         * @construct-only
         * @default false
         */
        get bold_set(): boolean;

        /**
         * @construct-only
         * @default false
         */
        get boldSet(): boolean;

        /**
         * @construct-only
         * @default null
         */
        get foreground(): string;

        /**
         * @construct-only
         * @default false
         */
        get foreground_set(): boolean;

        /**
         * @construct-only
         * @default false
         */
        get foregroundSet(): boolean;

        /**
         * @construct-only
         * @default false
         */
        get italic(): boolean;

        /**
         * @construct-only
         * @default false
         */
        get italic_set(): boolean;

        /**
         * @construct-only
         * @default false
         */
        get italicSet(): boolean;

        /**
         * @construct-only
         * @default null
         */
        get line_background(): string;

        /**
         * @construct-only
         * @default null
         */
        get lineBackground(): string;

        /**
         * @construct-only
         * @default false
         */
        get line_background_set(): boolean;

        /**
         * @construct-only
         * @default false
         */
        get lineBackgroundSet(): boolean;

        /**
         * @construct-only
         * @default false
         */
        get strikethrough(): boolean;

        /**
         * @construct-only
         * @default false
         */
        get strikethrough_set(): boolean;

        /**
         * @construct-only
         * @default false
         */
        get strikethroughSet(): boolean;

        /**
         * @construct-only
         * @default false
         */
        get underline(): boolean;

        /**
         * @construct-only
         * @default false
         */
        get underline_set(): boolean;

        /**
         * @construct-only
         * @default false
         */
        get underlineSet(): boolean;

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
        /** @signal */
        connect<K extends keyof Style.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Style.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Style.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Style.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Style.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Style.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace StyleScheme {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::filename": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            description: string;
            filename: string;
            id: string;
            name: string;
        }
    }

    /**
     * @gir-type Class
     */
    class StyleScheme extends GObject.Object {
        static $gtype: GObject.GType<StyleScheme>;

        // Properties
        /**
         * @read-only
         * @default null
         */
        get description(): string;

        /**
         * Style scheme filename or NULL.
         * @read-only
         * @default null
         */
        get filename(): string;

        /**
         * Style scheme id, a unique string used to identify the style scheme
         * in {@link GtkSource.StyleSchemeManager}.
         * @construct-only
         * @default null
         */
        get id(): string;

        /**
         * Style scheme name, a translatable string to present to user.
         * @read-only
         * @default null
         */
        get name(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StyleScheme.SignalSignatures;

        // Fields
        base: GObject.Object;

        // Constructors
        constructor(properties?: Partial<StyleScheme.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof StyleScheme.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StyleScheme.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof StyleScheme.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StyleScheme.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof StyleScheme.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<StyleScheme.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @returns a `null`-terminated array containing the `scheme` authors or `null` if no author is specified by the style scheme.
         */
        get_authors(): string[];

        /**
         * @returns `scheme` description (if defined), or `null`.
         */
        get_description(): string;

        /**
         * @returns `scheme` file name if the scheme was created parsing a style scheme file or `null` in the other cases.
         */
        get_filename(): string;

        /**
         * @returns `scheme` id.
         */
        get_id(): string;

        /**
         * @returns `scheme` name.
         */
        get_name(): string;
    }


    namespace StyleSchemeManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::scheme-ids": (pspec: GObject.ParamSpec) => void;
            "notify::search-path": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            scheme_ids: string[];
            schemeIds: string[];
            search_path: string[];
            searchPath: string[];
        }
    }

    /**
     * @gir-type Class
     */
    class StyleSchemeManager extends GObject.Object {
        static $gtype: GObject.GType<StyleSchemeManager>;

        // Properties
        /**
         * @read-only
         */
        get scheme_ids(): string[];

        /**
         * @read-only
         */
        get schemeIds(): string[];

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
        $signals: StyleSchemeManager.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<StyleSchemeManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): StyleSchemeManager;

        // Signals
        /** @signal */
        connect<K extends keyof StyleSchemeManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StyleSchemeManager.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof StyleSchemeManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StyleSchemeManager.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof StyleSchemeManager.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<StyleSchemeManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Appends `path` to the list of directories where the `manager` looks for
         * style scheme files.
         * See `gtk_source_style_scheme_manager_set_search_path()` for details.
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
         * @returns a {@link GtkSource.StyleScheme} object. Returned value is owned by `manager` and must not be unref'ed.
         */
        get_scheme(scheme_id: string): StyleScheme;

        /**
         * Returns the ids of the available style schemes.
         * @returns a `null`-terminated array of string containing the ids of the available style schemes or `null` if no style scheme is available. The array is owned by the `manager` and must not be modified.
         */
        get_scheme_ids(): string[];

        /**
         * Returns the current search path for the `manager`.
         * See `gtk_source_style_scheme_manager_set_search_path()` for details.
         * @returns a `null`-terminated array of string containing the search path. The array is owned by the `manager` and must not be modified.
         */
        get_search_path(): string[];

        /**
         * Prepends `path` to the list of directories where the `manager` looks
         * for style scheme files.
         * See `gtk_source_style_scheme_manager_set_search_path()` for details.
         * @param path a directory or a filename.
         */
        prepend_search_path(path: string): void;

        /**
         * Sets the list of directories where the `manager` looks for
         * style scheme files.
         * If `path` is `null`, the search path is reset to default.
         * @param path a `null`-terminated array of strings or `null`.
         */
        set_search_path(path: (string[] | null)): void;
    }


    namespace View {
        // Signal signatures
        interface SignalSignatures extends Gtk.TextView.SignalSignatures {
            /**
             * Emitted when a line mark has been activated (for instance when there
             * was a button press in the line marks gutter). You can use `iter` to
             * determine on which line the activation took place.
             * @signal
             * @run-last
             */
            "line-mark-activated": (arg0: Gtk.TextIter, arg1: Gdk.Event) => void;
            /**
             * The ::move-lines signal is a keybinding which gets emitted
             * when the user initiates moving a line. The default binding key
             * is Alt+Up/Down arrow. And moves the currently selected lines,
             * or the current line by `count`. For the moment, only
             * `count` of -1 or 1 is valid.
             * @signal
             * @since 2.10
             * @action
             * @run-last
             */
            "move-lines": (arg0: boolean, arg1: number) => void;
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
            "move-words": (arg0: number) => void;
            /**
             * @signal
             * @action
             * @run-last
             */
            redo: () => void;
            /**
             * The ::show-completion signal is a keybinding signal which gets
             * emitted when the user initiates a completion in default mode.
             * 
             * Applications should not connect to it, but may emit it with
             * `g_signal_emit_by_name` if they need to control the default mode
             * completion activation.
             * @signal
             * @action
             * @run-last
             */
            "show-completion": () => void;
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
            "smart-home-end": (arg0: Gtk.TextIter, arg1: number) => void;
            /**
             * @signal
             * @action
             * @run-last
             */
            undo: () => void;
            "notify::auto-indent": (pspec: GObject.ParamSpec) => void;
            "notify::completion": (pspec: GObject.ParamSpec) => void;
            "notify::highlight-current-line": (pspec: GObject.ParamSpec) => void;
            "notify::indent-on-tab": (pspec: GObject.ParamSpec) => void;
            "notify::indent-width": (pspec: GObject.ParamSpec) => void;
            "notify::insert-spaces-instead-of-tabs": (pspec: GObject.ParamSpec) => void;
            "notify::right-margin-position": (pspec: GObject.ParamSpec) => void;
            "notify::show-line-marks": (pspec: GObject.ParamSpec) => void;
            "notify::show-line-numbers": (pspec: GObject.ParamSpec) => void;
            "notify::show-right-margin": (pspec: GObject.ParamSpec) => void;
            "notify::tab-width": (pspec: GObject.ParamSpec) => void;
            "notify::accepts-tab": (pspec: GObject.ParamSpec) => void;
            "notify::buffer": (pspec: GObject.ParamSpec) => void;
            "notify::cursor-visible": (pspec: GObject.ParamSpec) => void;
            "notify::editable": (pspec: GObject.ParamSpec) => void;
            "notify::im-module": (pspec: GObject.ParamSpec) => void;
            "notify::indent": (pspec: GObject.ParamSpec) => void;
            "notify::justification": (pspec: GObject.ParamSpec) => void;
            "notify::left-margin": (pspec: GObject.ParamSpec) => void;
            "notify::overwrite": (pspec: GObject.ParamSpec) => void;
            "notify::pixels-above-lines": (pspec: GObject.ParamSpec) => void;
            "notify::pixels-below-lines": (pspec: GObject.ParamSpec) => void;
            "notify::pixels-inside-wrap": (pspec: GObject.ParamSpec) => void;
            "notify::right-margin": (pspec: GObject.ParamSpec) => void;
            "notify::tabs": (pspec: GObject.ParamSpec) => void;
            "notify::wrap-mode": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::extension-events": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::user-data": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.TextView.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
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
            tab_width: number;
            tabWidth: number;
        }
    }

    /**
     * @gir-type Class
     */
    class View extends Gtk.TextView implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<View>;

        // Properties
        /**
         * @default false
         */
        get auto_indent(): boolean;
        set auto_indent(val: boolean);

        /**
         * @default false
         */
        get autoIndent(): boolean;
        set autoIndent(val: boolean);

        /**
         * @read-only
         */
        get completion(): Completion;

        /**
         * @default false
         */
        get highlight_current_line(): boolean;
        set highlight_current_line(val: boolean);

        /**
         * @default false
         */
        get highlightCurrentLine(): boolean;
        set highlightCurrentLine(val: boolean);

        /**
         * @default true
         */
        get indent_on_tab(): boolean;
        set indent_on_tab(val: boolean);

        /**
         * @default true
         */
        get indentOnTab(): boolean;
        set indentOnTab(val: boolean);

        /**
         * Width of an indentation step expressed in number of spaces.
         * @default -1
         */
        get indent_width(): number;
        set indent_width(val: number);

        /**
         * Width of an indentation step expressed in number of spaces.
         * @default -1
         */
        get indentWidth(): number;
        set indentWidth(val: number);

        /**
         * @default false
         */
        get insert_spaces_instead_of_tabs(): boolean;
        set insert_spaces_instead_of_tabs(val: boolean);

        /**
         * @default false
         */
        get insertSpacesInsteadOfTabs(): boolean;
        set insertSpacesInsteadOfTabs(val: boolean);

        /**
         * Position of the right margin.
         * @default 80
         */
        get right_margin_position(): number;
        set right_margin_position(val: number);

        /**
         * Position of the right margin.
         * @default 80
         */
        get rightMarginPosition(): number;
        set rightMarginPosition(val: number);

        /**
         * Whether to display line mark pixbufs
         * @default false
         */
        get show_line_marks(): boolean;
        set show_line_marks(val: boolean);

        /**
         * Whether to display line mark pixbufs
         * @default false
         */
        get showLineMarks(): boolean;
        set showLineMarks(val: boolean);

        /**
         * Whether to display line numbers
         * @default false
         */
        get show_line_numbers(): boolean;
        set show_line_numbers(val: boolean);

        /**
         * Whether to display line numbers
         * @default false
         */
        get showLineNumbers(): boolean;
        set showLineNumbers(val: boolean);

        /**
         * Whether to display the right margin.
         * @default false
         */
        get show_right_margin(): boolean;
        set show_right_margin(val: boolean);

        /**
         * Whether to display the right margin.
         * @default false
         */
        get showRightMargin(): boolean;
        set showRightMargin(val: boolean);

        /**
         * Width of an tab character expressed in number of spaces.
         * @default 8
         */
        get tab_width(): number;
        set tab_width(val: number);

        /**
         * Width of an tab character expressed in number of spaces.
         * @default 8
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

        static ["new"](): View;

        static new_with_buffer(buffer: Buffer): View;

        // Signals
        /** @signal */
        connect<K extends keyof View.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, View.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof View.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, View.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof View.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<View.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param iter 
         * @param event 
         * @virtual
         */
        vfunc_line_mark_activated(iter: Gtk.TextIter, event: Gdk.Event): void;

        /**
         * @param copy 
         * @param step 
         * @virtual
         */
        vfunc_move_lines(copy: boolean, step: number): void;

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
         * Returns whether auto indentation of text is enabled.
         * @returns `true` if auto indentation is enabled.
         */
        get_auto_indent(): boolean;

        /**
         * Returns the {@link GtkSource.DrawSpacesFlags} specifying if and how spaces
         * should be displayed for this `view`.
         * @returns the {@link GtkSource.DrawSpacesFlags}, 0 if no spaces should be drawn.
         */
        get_draw_spaces(): DrawSpacesFlags;

        /**
         * Returns the {@link GtkSource.Gutter} object associated with `window_type` for `view`.
         * Only GTK_TEXT_WINDOW_LEFT and GTK_TEXT_WINDOW_RIGHT are supported,
         * respectively corresponding to the left and right gutter. The line numbers
         * and mark category icons are rendered in the gutter corresponding to
         * GTK_TEXT_WINDOW_LEFT.
         * @param window_type the gutter window type.
         * @returns the {@link GtkSource.Gutter}.
         */
        get_gutter(window_type: Gtk.TextWindowType): Gutter;

        /**
         * Returns whether the current line is highlighted.
         * @returns `true` if the current line is highlighted.
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
         * Gets the background color associated with given `category`.
         * @param category a mark category.
         * @param dest destination {@link Gdk.Color} structure to fill in.
         * @returns `true` if background color for `category` was set and `dest` is set to a valid color, or `false` otherwise.
         */
        get_mark_category_background(category: string, dest: Gdk.Color): boolean;

        /**
         * Gets the priority which is associated with the given `category`.
         * @param category a mark category.
         * @returns the priority or if `category` exists but no priority was set, it defaults to 0.
         */
        get_mark_category_priority(category: string): number;

        /**
         * Gets the position of the right margin in the given `view`.
         * @returns the position of the right margin.
         */
        get_right_margin_position(): number;

        /**
         * Returns whether line marks are displayed beside the text.
         * @returns `true` if the line marks are displayed.
         */
        get_show_line_marks(): boolean;

        /**
         * Returns whether line numbers are displayed beside the text.
         * @returns `true` if the line numbers are displayed.
         */
        get_show_line_numbers(): boolean;

        /**
         * Returns whether a right margin is displayed.
         * @returns `true` if the right margin is shown.
         */
        get_show_right_margin(): boolean;

        /**
         * Returns a {@link GtkSource.SmartHomeEndType} end value specifying
         * how the cursor will move when HOME and END keys are pressed.
         * @returns a `GtkSourceSmartHomeEndTypeend` value.
         */
        get_smart_home_end(): SmartHomeEndType;

        /**
         * Returns the width of tabulation in characters.
         * @returns width of tab.
         */
        get_tab_width(): number;

        /**
         * Determines the visual column at `iter` taking into
         * consideration the indent width of `view`.
         * @param iter a position in `view`.
         * @returns the visual column at `iter`.
         */
        get_visual_column(iter: Gtk.TextIter): number;

        /**
         * If `true` auto indentation of text is enabled.
         * @param enable whether to enable auto indentation.
         */
        set_auto_indent(enable: boolean): void;

        /**
         * Set if and how the spaces should be visualized. Specifying `flags` as 0 will
         * disable display of spaces.
         * @param flags {@link GtkSource.DrawSpacesFlags} specifing how white spaces should be displayed
         */
        set_draw_spaces(flags: DrawSpacesFlags): void;

        /**
         * If `show` is `true` the current line is highlighted.
         * @param show whether to highlight the current line.
         */
        set_highlight_current_line(show: boolean): void;

        /**
         * If `true`, when the tab key is pressed and there is a selection, the
         * selected text is indented of one level instead of being replaced with
         * the \t characters. Shift+Tab unindents the selection.
         * @param enable whether to indent a block when tab is pressed.
         */
        set_indent_on_tab(enable: boolean): void;

        /**
         * Sets the number of spaces to use for each step of indent.
         * If `width` is -1, the value of the GtkSourceView::tab-width property
         * will be used.
         * @param width indent width in characters.
         */
        set_indent_width(width: number): void;

        /**
         * If `true` any tabulator character inserted is replaced by a group
         * of space characters.
         * @param enable whether to insert spaces instead of tabs.
         */
        set_insert_spaces_instead_of_tabs(enable: boolean): void;

        /**
         * Sets given background `color` for mark `category`.
         * If `color` is `null`, the background color is unset.
         * @param category a mark category.
         * @param color background color or `null` to unset it.
         */
        set_mark_category_background(category: string, color: (Gdk.Color | null)): void;

        /**
         * Sets the icon to be used for `category` to the named theme item `name`.
         * If `name` is `null`, the icon is unset.
         * @param category a mark category.
         * @param name the themed icon name, or `null`.
         */
        set_mark_category_icon_from_icon_name(category: string, name: (string | null)): void;

        /**
         * Sets the icon to be used for `category` to `pixbuf`.
         * If `pixbuf` is `null`, the icon is unset.
         * @param category a mark category.
         * @param pixbuf a {@link GdkPixbuf.Pixbuf}, or `null`.
         */
        set_mark_category_icon_from_pixbuf(category: string, pixbuf: (GdkPixbuf.Pixbuf | null)): void;

        /**
         * Sets the icon to be used for `category` to the stock item `stock_id`.
         * If `stock_id` is `null`, the icon is unset.
         * @param category a mark category.
         * @param stock_id the stock id, or `null`.
         */
        set_mark_category_icon_from_stock(category: string, stock_id: (string | null)): void;

        /**
         * Associates a given `pixbuf` with a given mark `category`.
         * If `pixbuf` is `null`, the pixbuf is unset.
         * @param category a mark category.
         * @param pixbuf a {@link GdkPixbuf.Pixbuf}, or `null`.
         */
        set_mark_category_pixbuf(category: string, pixbuf: (GdkPixbuf.Pixbuf | null)): void;

        /**
         * Set the `priority` for the given mark `category`. When there are
         * multiple marks on the same line, marks of categories with
         * higher priorities will be drawn on top.
         * @param category a mark category.
         * @param priority the priority for the category
         */
        set_mark_category_priority(category: string, priority: number): void;

        /**
         * Set a {@link GtkSource.ViewMarkTooltipFunc} used to set tooltip on marks from the
         * given mark `category`.
         * If you also specified a function with
         * `gtk_source_view_set_mark_category_tooltip_markup_func()`  the markup
         * variant takes precedence.
         * 
         * <informalexample><programlisting><![CDATA[
         * static gchar *
         * tooltip_func (GtkSourceMark *mark,
         *               gpointer       user_data)
         * {
         *   gchar *text;
         * 
         *   text = get_tooltip_for_mark (mark, user_data);
         * 
         *   return text;
         * }
         * 
         * ...
         * 
         * GtkSourceView *view;
         * 
         * gtk_source_view_set_mark_category_tooltip_func (view, "other-mark",
         *                                                 tooltip_func,
         *                                                 NULL, NULL);
         * ]]></programlisting></informalexample>
         * @param category a mark category.
         * @param func a {@link GtkSource.ViewMarkTooltipFunc} or `null`.
         */
        set_mark_category_tooltip_func(category: string, func: (ViewMarkTooltipFunc | null)): void;

        /**
         * See `gtk_source_view_set_mark_category_tooltip_func()` for more information.
         * @param category a mark category.
         * @param markup_func a {@link GtkSource.ViewMarkTooltipFunc} or `null`.
         */
        set_mark_category_tooltip_markup_func(category: string, markup_func: (ViewMarkTooltipFunc | null)): void;

        /**
         * Sets the position of the right margin in the given `view`.
         * @param pos the width in characters where to position the right margin.
         */
        set_right_margin_position(pos: number): void;

        /**
         * If `true` line marks will be displayed beside the text.
         * @param show whether line marks should be displayed.
         */
        set_show_line_marks(show: boolean): void;

        /**
         * If `true` line numbers will be displayed beside the text.
         * @param show whether line numbers should be displayed.
         */
        set_show_line_numbers(show: boolean): void;

        /**
         * If `true` a right margin is displayed.
         * @param show whether to show a right margin.
         */
        set_show_right_margin(show: boolean): void;

        /**
         * Set the desired movement of the cursor when HOME and END keys
         * are pressed.
         * @param smart_he the desired behavior among {@link GtkSource.SmartHomeEndType}.
         */
        set_smart_home_end(smart_he: SmartHomeEndType): void;

        /**
         * Sets the width of tabulation in characters.
         * @param width width of tab in characters.
         */
        set_tab_width(width: number): void;

        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): null;

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
        set_data(key: string, data: null): void;

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
             * Emits the "changed" signal on `proposal`. This should be called by
             * implementations whenever the name, icon or info of the proposal has
             * changed.
             * @virtual
             */
            vfunc_changed(): void;

            /**
             * Get whether two proposal objects are the same.  This is used to (together
             * with `gtk_source_completion_proposal_hash`) to match proposals in the
             * completion model. By default, it uses direct equality (`g_direct_equal`).
             * @param other a {@link GtkSource.CompletionProposal}.
             * @virtual
             */
            vfunc_equal(other: CompletionProposal): boolean;

            /**
             * Gets extra information associated to the proposal. This information will be
             * used to present the user with extra, detailed information about the
             * selected proposal. The returned string must be freed with `g_free()`.
             * @virtual
             */
            vfunc_get_info(): string;

            /**
             * Gets the label of `proposal`. The label is shown in the list of proposals as
             * plain text. If you need any markup (such as bold or italic text), you have
             * to implement `gtk_source_completion_proposal_get_markup`. The returned string
             * must be freed with `g_free()`.
             * @virtual
             */
            vfunc_get_label(): string;

            /**
             * Gets the label of `proposal` with markup. The label is shown in the list of
             * proposals and may contain markup. This will be used instead of
             * `gtk_source_completion_proposal_get_label` if implemented. The returned string
             * must be freed with `g_free()`.
             * @virtual
             */
            vfunc_get_markup(): string;

            /**
             * Gets the text of `proposal`. The text that is inserted into
             * the text buffer when the proposal is activated by the default activation.
             * You are free to implement a custom activation handler in the provider and
             * not implement this function. The returned string must be freed with `g_free()`.
             * @virtual
             */
            vfunc_get_text(): string;

            /**
             * Get the hash value of `proposal`. This is used to (together with
             * `gtk_source_completion_proposal_equal`) to match proposals in the completion
             * model. By default, it uses a direct hash (`g_direct_hash`).
             * @virtual
             */
            vfunc_hash(): number;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
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
         * Emits the "changed" signal on `proposal`. This should be called by
         * implementations whenever the name, icon or info of the proposal has
         * changed.
         */
        changed(): void;

        /**
         * Get whether two proposal objects are the same.  This is used to (together
         * with `gtk_source_completion_proposal_hash`) to match proposals in the
         * completion model. By default, it uses direct equality (`g_direct_equal`).
         * @param other a {@link GtkSource.CompletionProposal}.
         * @returns `true` if `proposal` and `object` are the same proposal
         */
        equal(other: CompletionProposal): boolean;

        /**
         * Gets extra information associated to the proposal. This information will be
         * used to present the user with extra, detailed information about the
         * selected proposal. The returned string must be freed with `g_free()`.
         * @returns a new string containing extra information of `proposal` or `null` if          no extra information is associated to `proposal`.
         */
        get_info(): string;

        /**
         * Gets the label of `proposal`. The label is shown in the list of proposals as
         * plain text. If you need any markup (such as bold or italic text), you have
         * to implement `gtk_source_completion_proposal_get_markup`. The returned string
         * must be freed with `g_free()`.
         * @returns a new string containing the label of `proposal`.
         */
        get_label(): string;

        /**
         * Gets the label of `proposal` with markup. The label is shown in the list of
         * proposals and may contain markup. This will be used instead of
         * `gtk_source_completion_proposal_get_label` if implemented. The returned string
         * must be freed with `g_free()`.
         * @returns a new string containing the label of `proposal` with markup.
         */
        get_markup(): string;

        /**
         * Gets the text of `proposal`. The text that is inserted into
         * the text buffer when the proposal is activated by the default activation.
         * You are free to implement a custom activation handler in the provider and
         * not implement this function. The returned string must be freed with `g_free()`.
         * @returns a new string containing the text of `proposal`.
         */
        get_text(): string;

        /**
         * Get the hash value of `proposal`. This is used to (together with
         * `gtk_source_completion_proposal_equal`) to match proposals in the completion
         * model. By default, it uses a direct hash (`g_direct_hash`).
         * @returns The hash value of `proposal`.
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
             * with the label of `proposal`.
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
             * Get the delay in milliseconds before starting interactive completion for
             * this provider. A value of -1 indicates to use the default value as set
             * by {@link GtkSource.Completion.SignalSignatures.auto_complete_delay | GtkSource.Completion::auto-complete-delay}.
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
             * implemented, the completion can use this information to position the
             * completion window accordingly when a proposal is selected in the completion
             * window.
             * @param context a {@link GtkSource.CompletionContext}.
             * @param proposal a {@link GtkSource.CompletionProposal}.
             * @param iter a {@link Gtk.TextIter}.
             * @virtual
             */
            vfunc_get_start_iter(context: CompletionContext, proposal: CompletionProposal, iter: Gtk.TextIter): boolean;

            /**
             * Get whether the provider match the context of completion detailed in
             * `context`.
             * @param context a {@link GtkSource.CompletionContext}.
             * @virtual
             */
            vfunc_match(context: CompletionContext): boolean;

            /**
             * Populate `context` with proposals from `provider`.
             * @param context a {@link GtkSource.CompletionContext}.
             * @virtual
             */
            vfunc_populate(context: CompletionContext): void;

            /**
             * Update extra information shown in `info` for `proposal`. This should be
             * implemented if your provider sets a custom info widget for `proposal`.
             * This function MUST be implemented when
             * `gtk_source_completion_provider_get_info_widget` is implemented.
             * @param proposal a {@link GtkSource.CompletionProposal}.
             * @param info a {@link GtkSource.CompletionInfo}.
             * @virtual
             */
            vfunc_update_info(proposal: CompletionProposal, info: CompletionInfo): void;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
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
         * with the label of `proposal`.
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
         * Get the delay in milliseconds before starting interactive completion for
         * this provider. A value of -1 indicates to use the default value as set
         * by {@link GtkSource.Completion.SignalSignatures.auto_complete_delay | GtkSource.Completion::auto-complete-delay}.
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
         * implemented, the completion can use this information to position the
         * completion window accordingly when a proposal is selected in the completion
         * window.
         * @param context a {@link GtkSource.CompletionContext}.
         * @param proposal a {@link GtkSource.CompletionProposal}.
         * @param iter a {@link Gtk.TextIter}.
         * @returns `true` if `iter` was set for `proposal`, `false` otherwise.
         */
        get_start_iter(context: CompletionContext, proposal: CompletionProposal, iter: Gtk.TextIter): boolean;

        /**
         * Get whether the provider match the context of completion detailed in
         * `context`.
         * @param context a {@link GtkSource.CompletionContext}.
         * @returns `true` if `provider` matches the completion context, `false` otherwise.
         */
        match(context: CompletionContext): boolean;

        /**
         * Populate `context` with proposals from `provider`.
         * @param context a {@link GtkSource.CompletionContext}.
         */
        populate(context: CompletionContext): void;

        /**
         * Update extra information shown in `info` for `proposal`. This should be
         * implemented if your provider sets a custom info widget for `proposal`.
         * This function MUST be implemented when
         * `gtk_source_completion_provider_get_info_widget` is implemented.
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
             * and the call to `gtk_source_undo_manager_end_not_undoable_action` cannot
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
             * available is an error. Use `gtk_source_undo_manager_can_redo` to find out
             * if there are redo operations available.
             * @virtual
             */
            vfunc_redo(): void;

            /**
             * Perform a single undo. Calling this function when there are no undo operations
             * available is an error. Use `gtk_source_undo_manager_can_undo` to find out
             * if there are undo operations available.
             * @virtual
             */
            vfunc_undo(): void;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
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
         * and the call to `gtk_source_undo_manager_end_not_undoable_action` cannot
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
         * available is an error. Use `gtk_source_undo_manager_can_redo` to find out
         * if there are redo operations available.
         */
        redo(): void;

        /**
         * Perform a single undo. Calling this function when there are no undo operations
         * available is an error. Use `gtk_source_undo_manager_can_undo` to find out
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
