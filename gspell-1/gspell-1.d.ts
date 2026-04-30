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

export namespace Gspell {
    /**
     * Gspell-1
     */

    /**
     * An error code used with `GSPELL_CHECKER_ERROR` in a {@link GLib.Error} returned
     * from a spell-checker-related function.
     * @gir-type Struct
     */
    class CheckerError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        /**
         * dictionary error.
         */
        static DICTIONARY: number;
        /**
         * no language set.
         */
        static NO_LANGUAGE_SET: number;

        // Constructors

        constructor(options: { message: string; code: number });

        // Static methods

        static quark(): GLib.Quark;
    }

    function checker_error_quark(): GLib.Quark;
    /**
     * @returns the list of available languages, sorted with `gspell_language_compare()`.
     */
    function language_get_available(): Language[];
    /**
     * Finds the best available language based on the current locale.
     * @returns the default {@link Gspell.Language}, or `null` if no dictionaries are available.
     */
    function language_get_default(): Language | null;
    /**
     * @param language_code a language code.
     * @returns a {@link Gspell.Language} corresponding to `language_code`, or `null` if not found.
     */
    function language_lookup(language_code: string): Language | null;
    namespace Checker {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted when the session dictionary is cleared.
             * @signal
             * @run-last
             */
            'session-cleared': () => void;
            /**
             * Emitted when a word is added to the personal dictionary.
             * @signal
             * @run-last
             */
            'word-added-to-personal': (arg0: string) => void;
            /**
             * Emitted when a word is added to the session dictionary. See
             * `gspell_checker_add_word_to_session()`.
             * @signal
             * @run-last
             */
            'word-added-to-session': (arg0: string) => void;
            'notify::language': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            language: Language | null;
        }
    }

    /**
     * @gir-type Class
     */
    class Checker extends GObject.Object {
        static $gtype: GObject.GType<Checker>;

        // Properties

        /**
         * The {@link Gspell.Language} used.
         */
        get language(): Language | null;
        set language(val: Language | null);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Checker.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Checker.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](language: Language | null): Checker;

        // Signals

        /** @signal */
        connect<K extends keyof Checker.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Checker.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Checker.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Checker.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Checker.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Checker.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_session_cleared(): void;
        /**
         * @param word
         * @virtual
         */
        vfunc_word_added_to_personal(word: string): void;
        /**
         * @param word
         * @virtual
         */
        vfunc_word_added_to_session(word: string): void;

        // Methods

        /**
         * Adds a word to the personal dictionary. It is typically saved in the user's
         * home directory.
         * @param word a word.
         * @param word_length the byte length of `word`, or -1 if `word` is nul-terminated.
         */
        add_word_to_personal(word: string, word_length: bigint | number): void;
        /**
         * Adds a word to the session dictionary. Each {@link Gspell.Checker} instance has a
         * different session dictionary. The session dictionary is lost when the
         * {@link Gspell.Checker.language} property changes or when `checker` is destroyed or
         * when `gspell_checker_clear_session()` is called.
         *
         * This function is typically called for an “Ignore All” action.
         * @param word a word.
         * @param word_length the byte length of `word`, or -1 if `word` is nul-terminated.
         */
        add_word_to_session(word: string, word_length: bigint | number): void;
        /**
         * If the {@link Gspell.Checker.language} is `null`, i.e. when no dictonaries are
         * available, this function returns `true` to limit the damage.
         * @param word the word to check.
         * @param word_length the byte length of `word`, or -1 if `word` is nul-terminated.
         * @returns `true` if `word` is correctly spelled, `false` otherwise.
         */
        check_word(word: string, word_length: bigint | number): boolean;
        /**
         * Clears the session dictionary.
         */
        clear_session(): void;
        /**
         * @returns the {@link Gspell.Language} currently used, or `null` if no dictionaries are available.
         */
        get_language(): Language | null;
        /**
         * Gets the suggestions for `word`. Free the return value with
         * g_slist_free_full(suggestions, g_free).
         * @param word a misspelled word.
         * @param word_length the byte length of `word`, or -1 if `word` is nul-terminated.
         * @returns the list of suggestions.
         */
        get_suggestions(word: string, word_length: bigint | number): string[];
        /**
         * Informs the spell checker that `word` is replaced/corrected by `replacement`.
         * @param word a word.
         * @param word_length the byte length of `word`, or -1 if `word` is nul-terminated.
         * @param replacement the replacement word.
         * @param replacement_length the byte length of `replacement`, or -1 if `replacement`   is nul-terminated.
         */
        set_correction(
            word: string,
            word_length: bigint | number,
            replacement: string,
            replacement_length: bigint | number,
        ): void;
        /**
         * Sets the language to use for the spell checking. If `language` is `null`, the
         * default language is picked with `gspell_language_get_default()`.
         * @param language the {@link Gspell.Language} to use, or `null`.
         */
        set_language(language: Language | null): void;
    }

    namespace CheckerDialog {
        // Signal signatures
        interface SignalSignatures extends Gtk.Dialog.SignalSignatures {
            'notify::spell-navigator': (pspec: GObject.ParamSpec) => void;
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
            extends Gtk.Dialog.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            spell_navigator: Navigator;
            spellNavigator: Navigator;
        }
    }

    /**
     * @gir-type Class
     */
    class CheckerDialog extends Gtk.Dialog implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<CheckerDialog>;

        // Properties

        /**
         * The {@link Gspell.Navigator} to use.
         * @construct-only
         */
        get spell_navigator(): Navigator;
        /**
         * The {@link Gspell.Navigator} to use.
         * @construct-only
         */
        get spellNavigator(): Navigator;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CheckerDialog.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<CheckerDialog.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](parent: Gtk.Window, navigator: Navigator): CheckerDialog;
        // Conflicted with Gtk.Dialog.new

        static ['new'](...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof CheckerDialog.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CheckerDialog.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof CheckerDialog.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CheckerDialog.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof CheckerDialog.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CheckerDialog.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns the {@link Gspell.Navigator} used.
         */
        get_spell_navigator(): Navigator;
    }

    namespace Entry {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::entry': (pspec: GObject.ParamSpec) => void;
            'notify::inline-spell-checking': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            entry: Gtk.Entry;
            inline_spell_checking: boolean;
            inlineSpellChecking: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class Entry extends GObject.Object {
        static $gtype: GObject.GType<Entry>;

        // Properties

        /**
         * The {@link Gtk.Entry}.
         * @since 1.4
         * @construct-only
         */
        get entry(): Gtk.Entry;
        /**
         * Whether the inline spell checking is enabled.
         *
         * Even if this property is `true`, {@link Gspell.Entry} disables internally the
         * inline spell checking in case the {@link Gtk.Entry.visibility} property is
         * `false`.
         * @since 1.4
         * @default false
         */
        get inline_spell_checking(): boolean;
        set inline_spell_checking(val: boolean);
        /**
         * Whether the inline spell checking is enabled.
         *
         * Even if this property is `true`, {@link Gspell.Entry} disables internally the
         * inline spell checking in case the {@link Gtk.Entry.visibility} property is
         * `false`.
         * @since 1.4
         * @default false
         */
        get inlineSpellChecking(): boolean;
        set inlineSpellChecking(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Entry.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Entry.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Entry.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Entry.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Entry.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Entry.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Entry.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Entry.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Returns the {@link Gspell.Entry} of `gtk_entry`. The returned object is guaranteed
         * to be the same for the lifetime of `gtk_entry`.
         * @param gtk_entry a {@link Gtk.Entry}.
         */
        static get_from_gtk_entry(gtk_entry: Gtk.Entry): Entry;

        // Methods

        /**
         * This function is a convenience function that does the following:
         * - Set a spell checker. The language chosen is the one returned by
         *   `gspell_language_get_default()`.
         * - Set the {@link Gspell.Entry.inline_spell_checking} property to `true`.
         *
         * Example:
         *
         * ```
         * GtkEntry *gtk_entry;
         * GspellEntry *gspell_entry;
         *
         * gspell_entry = gspell_entry_get_from_gtk_entry (gtk_entry);
         * gspell_entry_basic_setup (gspell_entry);
         * ```
         *
         *
         * This is equivalent to:
         *
         * ```
         * GtkEntry *gtk_entry;
         * GspellEntry *gspell_entry;
         * GspellChecker *checker;
         * GtkEntryBuffer *gtk_buffer;
         * GspellEntryBuffer *gspell_buffer;
         *
         * checker = gspell_checker_new (NULL);
         * gtk_buffer = gtk_entry_get_buffer (gtk_entry);
         * gspell_buffer = gspell_entry_buffer_get_from_gtk_entry_buffer (gtk_buffer);
         * gspell_entry_buffer_set_spell_checker (gspell_buffer, checker);
         * g_object_unref (checker);
         *
         * gspell_entry = gspell_entry_get_from_gtk_entry (gtk_entry);
         * gspell_entry_set_inline_spell_checking (gspell_entry, TRUE);
         * ```
         *
         */
        basic_setup(): void;
        /**
         * @returns the {@link Gtk.Entry} of `gspell_entry`.
         */
        get_entry(): Gtk.Entry;
        /**
         * @returns the value of the {@link Gspell.Entry.inline_spell_checking} property.
         */
        get_inline_spell_checking(): boolean;
        /**
         * Sets the {@link Gspell.Entry.inline_spell_checking} property.
         * @param enable the new state.
         */
        set_inline_spell_checking(enable: boolean): void;
    }

    namespace EntryBuffer {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::buffer': (pspec: GObject.ParamSpec) => void;
            'notify::spell-checker': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            buffer: Gtk.EntryBuffer;
            spell_checker: Checker | null;
            spellChecker: Checker | null;
        }
    }

    /**
     * @gir-type Class
     */
    class EntryBuffer extends GObject.Object {
        static $gtype: GObject.GType<EntryBuffer>;

        // Properties

        /**
         * The {@link Gtk.EntryBuffer}.
         * @since 1.4
         * @construct-only
         */
        get buffer(): Gtk.EntryBuffer;
        /**
         * The {@link Gspell.Checker}.
         * @since 1.4
         */
        get spell_checker(): Checker | null;
        set spell_checker(val: Checker | null);
        /**
         * The {@link Gspell.Checker}.
         * @since 1.4
         */
        get spellChecker(): Checker | null;
        set spellChecker(val: Checker | null);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: EntryBuffer.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<EntryBuffer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof EntryBuffer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, EntryBuffer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof EntryBuffer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, EntryBuffer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof EntryBuffer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<EntryBuffer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Returns the {@link Gspell.EntryBuffer} of `gtk_buffer`. The returned object is
         * guaranteed to be the same for the lifetime of `gtk_buffer`.
         * @param gtk_buffer a {@link Gtk.EntryBuffer}.
         */
        static get_from_gtk_entry_buffer(gtk_buffer: Gtk.EntryBuffer): EntryBuffer;

        // Methods

        /**
         * @returns the {@link Gtk.EntryBuffer} of `gspell_buffer`.
         */
        get_buffer(): Gtk.EntryBuffer;
        /**
         * @returns the {@link Gspell.Checker} if one has been set,   or `null`.
         */
        get_spell_checker(): Checker | null;
        /**
         * Sets a {@link Gspell.Checker} to a {@link Gspell.EntryBuffer}. The `gspell_buffer` will own a
         * reference to `spell_checker`, so you can release your reference to
         * `spell_checker` if you no longer need it.
         * @param spell_checker a {@link Gspell.Checker}, or `null` to unset the spell   checker.
         */
        set_spell_checker(spell_checker: Checker | null): void;
    }

    namespace LanguageChooserButton {
        // Signal signatures
        interface SignalSignatures extends Gtk.Button.SignalSignatures {
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
            'notify::language': (pspec: GObject.ParamSpec) => void;
            'notify::language-code': (pspec: GObject.ParamSpec) => void;
            'notify::action-name': (pspec: GObject.ParamSpec) => void;
            'notify::action-target': (pspec: GObject.ParamSpec) => void;
            'notify::related-action': (pspec: GObject.ParamSpec) => void;
            'notify::use-action-appearance': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gtk.Button.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                LanguageChooser.ConstructorProps,
                Gtk.Actionable.ConstructorProps,
                Gtk.Activatable.ConstructorProps,
                Gtk.Buildable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class LanguageChooserButton
        extends Gtk.Button
        implements Atk.ImplementorIface, LanguageChooser, Gtk.Actionable, Gtk.Activatable, Gtk.Buildable
    {
        static $gtype: GObject.GType<LanguageChooserButton>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: LanguageChooserButton.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<LanguageChooserButton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](current_language: Language | null): LanguageChooserButton;
        // Conflicted with Gtk.Button.new

        static ['new'](...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof LanguageChooserButton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LanguageChooserButton.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof LanguageChooserButton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LanguageChooserButton.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof LanguageChooserButton.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<LanguageChooserButton.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
        /**
         * The selected {@link Gspell.Language}.
         * @category Inherited from Gspell.LanguageChooser
         */
        get language(): Language | null;
        set language(val: Language | null);
        /**
         * The empty string if the default language was set and the selection
         * hasn't changed. Or the language code if an explicit language was set
         * or if the selection has changed.
         * @category Inherited from Gspell.LanguageChooser
         */
        get language_code(): string;
        set language_code(val: string);
        /**
         * The empty string if the default language was set and the selection
         * hasn't changed. Or the language code if an explicit language was set
         * or if the selection has changed.
         * @category Inherited from Gspell.LanguageChooser
         */
        get languageCode(): string;
        set languageCode(val: string);
        /**
         * @default null
         * @category Inherited from Gtk.Actionable
         */
        get action_name(): string | null;
        set action_name(val: string | null);
        /**
         * @default null
         * @category Inherited from Gtk.Actionable
         */
        get actionName(): string | null;
        set actionName(val: string | null);
        /** @category Inherited from Gtk.Actionable */
        get action_target(): GLib.Variant;
        set action_target(val: GLib.Variant);
        /** @category Inherited from Gtk.Actionable */
        get actionTarget(): GLib.Variant;
        set actionTarget(val: GLib.Variant);
        /**
         * The action that this activatable will activate and receive
         * updates from for various states and possibly appearance.
         *
         * > {@link Gtk.Activatable} implementors need to handle the this property and
         * > call `gtk_activatable_do_set_related_action()` when it changes.
         * @since 2.16
         * @deprecated since 3.10
         * @category Inherited from Gtk.Activatable
         */
        get related_action(): Gtk.Action;
        set related_action(val: Gtk.Action);
        /**
         * The action that this activatable will activate and receive
         * updates from for various states and possibly appearance.
         *
         * > {@link Gtk.Activatable} implementors need to handle the this property and
         * > call `gtk_activatable_do_set_related_action()` when it changes.
         * @since 2.16
         * @deprecated since 3.10
         * @category Inherited from Gtk.Activatable
         */
        get relatedAction(): Gtk.Action;
        set relatedAction(val: Gtk.Action);
        /**
         * Whether this activatable should reset its layout
         * and appearance when setting the related action or when
         * the action changes appearance.
         *
         * See the {@link Gtk.Action} documentation directly to find which properties
         * should be ignored by the {@link Gtk.Activatable} when this property is `false`.
         *
         * > {@link Gtk.Activatable} implementors need to handle this property
         * > and call `gtk_activatable_sync_action_properties()` on the activatable
         * > widget when it changes.
         * @since 2.16
         * @deprecated since 3.10
         * @default true
         * @category Inherited from Gtk.Activatable
         */
        get use_action_appearance(): boolean;
        set use_action_appearance(val: boolean);
        /**
         * Whether this activatable should reset its layout
         * and appearance when setting the related action or when
         * the action changes appearance.
         *
         * See the {@link Gtk.Action} documentation directly to find which properties
         * should be ignored by the {@link Gtk.Activatable} when this property is `false`.
         *
         * > {@link Gtk.Activatable} implementors need to handle this property
         * > and call `gtk_activatable_sync_action_properties()` on the activatable
         * > widget when it changes.
         * @since 2.16
         * @deprecated since 3.10
         * @default true
         * @category Inherited from Gtk.Activatable
         */
        get useActionAppearance(): boolean;
        set useActionAppearance(val: boolean);
        /**
         * @returns the selected {@link Gspell.Language}, or `null` if no dictionaries are available.
         */
        get_language(): Language | null;
        /**
         * @returns the {@link Gspell.LanguageChooser.language_code}. It cannot be `null`.
         */
        get_language_code(): string;
        /**
         * Sets the selected language.
         * @param language a {@link Gspell.Language} or `null` to pick the default   language.
         */
        set_language(language: Language | null): void;
        /**
         * @param language_code a language code, or the empty string or `null` to   pick the default language.
         */
        set_language_code(language_code: string | null): void;
        /**
         * @param default_language
         * @virtual
         */
        vfunc_get_language_full(default_language: boolean): Language;
        /**
         * Sets the selected language.
         * @param language a {@link Gspell.Language} or `null` to pick the default   language.
         * @virtual
         */
        vfunc_set_language(language: Language | null): void;
        /**
         * Gets the action name for `actionable`.
         *
         * See `gtk_actionable_set_action_name()` for more information.
         * @returns the action name, or `null` if none is set
         */
        get_action_name(): string | null;
        /**
         * Gets the current target value of `actionable`.
         *
         * See `gtk_actionable_set_action_target_value()` for more information.
         * @returns the current target value
         */
        get_action_target_value(): GLib.Variant;
        /**
         * Specifies the name of the action with which this widget should be
         * associated.  If `action_name` is `null` then the widget will be
         * unassociated from any previous action.
         *
         * Usually this function is used when the widget is located (or will be
         * located) within the hierarchy of a {@link Gtk.ApplicationWindow}.
         *
         * Names are of the form “win.save” or “app.quit” for actions on the
         * containing {@link Gtk.ApplicationWindow} or its associated {@link Gtk.Application},
         * respectively.  This is the same form used for actions in the {@link Gio.Menu}
         * associated with the window.
         * @param action_name an action name, or `null`
         */
        set_action_name(action_name: string | null): void;
        /**
         * Sets the target value of an actionable widget.
         *
         * If `target_value` is `null` then the target value is unset.
         *
         * The target value has two purposes.  First, it is used as the
         * parameter to activation of the action associated with the
         * {@link Gtk.Actionable} widget. Second, it is used to determine if the widget
         * should be rendered as “active” — the widget is active if the state
         * is equal to the given target.
         *
         * Consider the example of associating a set of buttons with a {@link Gio.Action}
         * with string state in a typical “radio button” situation.  Each button
         * will be associated with the same action, but with a different target
         * value for that action.  Clicking on a particular button will activate
         * the action with the target of that button, which will typically cause
         * the action’s state to change to that value.  Since the action’s state
         * is now equal to the target value of the button, the button will now
         * be rendered as active (and the other buttons, with different targets,
         * rendered inactive).
         * @param target_value a {@link GLib.Variant} to set as the target value, or `null`
         */
        set_action_target_value(target_value: GLib.Variant | null): void;
        /**
         * Sets the action-name and associated string target value of an
         * actionable widget.
         *
         * `detailed_action_name` is a string in the format accepted by
         * `g_action_parse_detailed_name()`.
         *
         * (Note that prior to version 3.22.25,
         * this function is only usable for actions with a simple "s" target, and
         * `detailed_action_name` must be of the form `"action::target"` where
         * `action` is the action name and `target` is the string to use
         * as the target.)
         * @param detailed_action_name the detailed action name
         */
        set_detailed_action_name(detailed_action_name: string): void;
        /**
         * Gets the action name for `actionable`.
         *
         * See `gtk_actionable_set_action_name()` for more information.
         * @virtual
         */
        vfunc_get_action_name(): string | null;
        /**
         * Gets the current target value of `actionable`.
         *
         * See `gtk_actionable_set_action_target_value()` for more information.
         * @virtual
         */
        vfunc_get_action_target_value(): GLib.Variant;
        /**
         * Specifies the name of the action with which this widget should be
         * associated.  If `action_name` is `null` then the widget will be
         * unassociated from any previous action.
         *
         * Usually this function is used when the widget is located (or will be
         * located) within the hierarchy of a {@link Gtk.ApplicationWindow}.
         *
         * Names are of the form “win.save” or “app.quit” for actions on the
         * containing {@link Gtk.ApplicationWindow} or its associated {@link Gtk.Application},
         * respectively.  This is the same form used for actions in the {@link Gio.Menu}
         * associated with the window.
         * @param action_name an action name, or `null`
         * @virtual
         */
        vfunc_set_action_name(action_name: string | null): void;
        /**
         * Sets the target value of an actionable widget.
         *
         * If `target_value` is `null` then the target value is unset.
         *
         * The target value has two purposes.  First, it is used as the
         * parameter to activation of the action associated with the
         * {@link Gtk.Actionable} widget. Second, it is used to determine if the widget
         * should be rendered as “active” — the widget is active if the state
         * is equal to the given target.
         *
         * Consider the example of associating a set of buttons with a {@link Gio.Action}
         * with string state in a typical “radio button” situation.  Each button
         * will be associated with the same action, but with a different target
         * value for that action.  Clicking on a particular button will activate
         * the action with the target of that button, which will typically cause
         * the action’s state to change to that value.  Since the action’s state
         * is now equal to the target value of the button, the button will now
         * be rendered as active (and the other buttons, with different targets,
         * rendered inactive).
         * @param target_value a {@link GLib.Variant} to set as the target value, or `null`
         * @virtual
         */
        vfunc_set_action_target_value(target_value: GLib.Variant | null): void;
        /**
         * This is a utility function for {@link Gtk.Activatable} implementors.
         *
         * When implementing {@link Gtk.Activatable} you must call this when
         * handling changes of the {@link Gtk.Activatable.related_action}, and
         * you must also use this to break references in {@link GObject.Object}->dispose().
         *
         * This function adds a reference to the currently set related
         * action for you, it also makes sure the {@link Gtk.Activatable}->update()
         * method is called when the related {@link Gtk.Action} properties change
         * and registers to the action’s proxy list.
         *
         * > Be careful to call this before setting the local
         * > copy of the {@link Gtk.Action} property, since this function uses
         * > `gtk_activatable_get_related_action()` to retrieve the
         * > previous action.
         * @param action the {@link Gtk.Action} to set
         */
        do_set_related_action(action: Gtk.Action): void;
        /**
         * Gets the related {@link Gtk.Action} for `activatable`.
         * @returns the related {@link Gtk.Action} if one is set.
         */
        get_related_action(): Gtk.Action;
        /**
         * Gets whether this activatable should reset its layout
         * and appearance when setting the related action or when
         * the action changes appearance.
         * @returns whether `activatable` uses its actions appearance.
         */
        get_use_action_appearance(): boolean;
        /**
         * Sets the related action on the `activatable` object.
         *
         * > {@link Gtk.Activatable} implementors need to handle the {@link Gtk.Activatable.related_action}
         * > property and call `gtk_activatable_do_set_related_action()` when it changes.
         * @param action the {@link Gtk.Action} to set
         */
        set_related_action(action: Gtk.Action): void;
        /**
         * Sets whether this activatable should reset its layout and appearance
         * when setting the related action or when the action changes appearance
         *
         * > {@link Gtk.Activatable} implementors need to handle the
         * > {@link Gtk.Activatable.use_action_appearance} property and call
         * > `gtk_activatable_sync_action_properties()` to update `activatable`
         * > if needed.
         * @param use_appearance whether to use the actions appearance
         */
        set_use_action_appearance(use_appearance: boolean): void;
        /**
         * This is called to update the activatable completely, this is called
         * internally when the {@link Gtk.Activatable.related_action} property is set
         * or unset and by the implementing class when
         * {@link Gtk.Activatable.use_action_appearance} changes.
         * @param action the related {@link Gtk.Action} or `null`
         */
        sync_action_properties(action: Gtk.Action | null): void;
        /**
         * This is called to update the activatable completely, this is called
         * internally when the {@link Gtk.Activatable.related_action} property is set
         * or unset and by the implementing class when
         * {@link Gtk.Activatable.use_action_appearance} changes.
         * @param action the related {@link Gtk.Action} or `null`
         * @virtual
         */
        vfunc_sync_action_properties(action: Gtk.Action | null): void;
        /**
         * Called to update the activatable when its related action’s properties change.
         * You must check the {@link Gtk.Activatable.use_action_appearance} property only apply action
         * properties that are meant to effect the appearance accordingly.
         * @param action
         * @param property_name
         * @virtual
         */
        vfunc_update(action: Gtk.Action, property_name: string): void;
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
         * Returns whether the widget should grab focus when it is clicked with the mouse.
         * See `gtk_widget_set_focus_on_click()`.
         * @returns `true` if the widget should grab focus when it is clicked with               the mouse.
         */
        get_focus_on_click(): boolean;
        /**
         * Sets whether the widget should grab focus when it is clicked with the mouse.
         * Making mouse clicks not grab focus is useful in places like toolbars where
         * you don’t want the keyboard focus removed from the main area of the
         * application.
         * @param focus_on_click whether the widget should grab focus when clicked with the mouse
         */
        set_focus_on_click(focus_on_click: boolean): void;
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
            'notify::language': (pspec: GObject.ParamSpec) => void;
            'notify::language-code': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gtk.Dialog.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                LanguageChooser.ConstructorProps,
                Gtk.Buildable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class LanguageChooserDialog extends Gtk.Dialog implements Atk.ImplementorIface, LanguageChooser, Gtk.Buildable {
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

        static ['new'](
            parent: Gtk.Window,
            current_language: Language | null,
            flags: Gtk.DialogFlags,
        ): LanguageChooserDialog;
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
         * The selected {@link Gspell.Language}.
         * @category Inherited from Gspell.LanguageChooser
         */
        get language(): Language | null;
        set language(val: Language | null);
        /**
         * The empty string if the default language was set and the selection
         * hasn't changed. Or the language code if an explicit language was set
         * or if the selection has changed.
         * @category Inherited from Gspell.LanguageChooser
         */
        get language_code(): string;
        set language_code(val: string);
        /**
         * The empty string if the default language was set and the selection
         * hasn't changed. Or the language code if an explicit language was set
         * or if the selection has changed.
         * @category Inherited from Gspell.LanguageChooser
         */
        get languageCode(): string;
        set languageCode(val: string);
        /**
         * @returns the selected {@link Gspell.Language}, or `null` if no dictionaries are available.
         */
        get_language(): Language | null;
        /**
         * @returns the {@link Gspell.LanguageChooser.language_code}. It cannot be `null`.
         */
        get_language_code(): string;
        /**
         * Sets the selected language.
         * @param language a {@link Gspell.Language} or `null` to pick the default   language.
         */
        set_language(language: Language | null): void;
        /**
         * @param language_code a language code, or the empty string or `null` to   pick the default language.
         */
        set_language_code(language_code: string | null): void;
        /**
         * @param default_language
         * @virtual
         */
        vfunc_get_language_full(default_language: boolean): Language;
        /**
         * Sets the selected language.
         * @param language a {@link Gspell.Language} or `null` to pick the default   language.
         * @virtual
         */
        vfunc_set_language(language: Language | null): void;
    }

    namespace NavigatorTextView {
        // Signal signatures
        interface SignalSignatures extends GObject.InitiallyUnowned.SignalSignatures {
            'notify::view': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.InitiallyUnowned.ConstructorProps, Navigator.ConstructorProps {
            view: Gtk.TextView;
        }
    }

    /**
     * @gir-type Class
     */
    class NavigatorTextView extends GObject.InitiallyUnowned implements Navigator {
        static $gtype: GObject.GType<NavigatorTextView>;

        // Properties

        /**
         * The {@link Gtk.TextView}. The buffer is not sufficient, the view is needed to
         * scroll to the misspelled words.
         * @construct-only
         */
        get view(): Gtk.TextView;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: NavigatorTextView.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<NavigatorTextView.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof NavigatorTextView.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, NavigatorTextView.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof NavigatorTextView.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, NavigatorTextView.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof NavigatorTextView.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<NavigatorTextView.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * @param view a {@link Gtk.TextView}.
         */
        static ['new'](view: Gtk.TextView): Navigator;

        // Methods

        /**
         * @returns the {@link Gtk.TextView}.
         */
        get_view(): Gtk.TextView;
        /**
         * Changes the current `word` by `change_to` in the text. `word` must be the same
         * as returned by the last call to `gspell_navigator_goto_next()`.
         *
         * This function doesn't call `gspell_checker_set_correction()`. A widget using a
         * {@link Gspell.Navigator} should call `gspell_checker_set_correction()` in addition to
         * this function.
         * @param word the word to change.
         * @param change_to the replacement.
         */
        change(word: string, change_to: string): void;
        /**
         * Changes all occurrences of `word` by `change_to` in the text.
         *
         * This function doesn't call `gspell_checker_set_correction()`. A widget using a
         * {@link Gspell.Navigator} should call `gspell_checker_set_correction()` in addition to
         * this function.
         * @param word the word to change.
         * @param change_to the replacement.
         */
        change_all(word: string, change_to: string): void;
        /**
         * Goes to the next misspelled word. When called the first time, goes to the
         * first misspelled word.
         * @returns `true` if a next misspelled word has been found, `false` if the spell checking is finished or if an error occurred.
         */
        goto_next(): [boolean, string, Checker | null];
        /**
         * Changes the current `word` by `change_to` in the text. `word` must be the same
         * as returned by the last call to `gspell_navigator_goto_next()`.
         *
         * This function doesn't call `gspell_checker_set_correction()`. A widget using a
         * {@link Gspell.Navigator} should call `gspell_checker_set_correction()` in addition to
         * this function.
         * @param word the word to change.
         * @param change_to the replacement.
         * @virtual
         */
        vfunc_change(word: string, change_to: string): void;
        /**
         * Changes all occurrences of `word` by `change_to` in the text.
         *
         * This function doesn't call `gspell_checker_set_correction()`. A widget using a
         * {@link Gspell.Navigator} should call `gspell_checker_set_correction()` in addition to
         * this function.
         * @param word the word to change.
         * @param change_to the replacement.
         * @virtual
         */
        vfunc_change_all(word: string, change_to: string): void;
        /**
         * Goes to the next misspelled word. When called the first time, goes to the
         * first misspelled word.
         * @virtual
         */
        vfunc_goto_next(): [boolean, string, Checker | null];
    }

    namespace TextBuffer {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::buffer': (pspec: GObject.ParamSpec) => void;
            'notify::spell-checker': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            buffer: Gtk.TextBuffer;
            spell_checker: Checker | null;
            spellChecker: Checker | null;
        }
    }

    /**
     * @gir-type Class
     */
    class TextBuffer extends GObject.Object {
        static $gtype: GObject.GType<TextBuffer>;

        // Properties

        /**
         * The {@link Gtk.TextBuffer}.
         * @construct-only
         */
        get buffer(): Gtk.TextBuffer;
        /**
         * The {@link Gspell.Checker}.
         */
        get spell_checker(): Checker | null;
        set spell_checker(val: Checker | null);
        /**
         * The {@link Gspell.Checker}.
         */
        get spellChecker(): Checker | null;
        set spellChecker(val: Checker | null);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TextBuffer.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<TextBuffer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof TextBuffer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TextBuffer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof TextBuffer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TextBuffer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof TextBuffer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<TextBuffer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Returns the {@link Gspell.TextBuffer} of `gtk_buffer`. The returned object is
         * guaranteed to be the same for the lifetime of `gtk_buffer`.
         * @param gtk_buffer a {@link Gtk.TextBuffer}.
         */
        static get_from_gtk_text_buffer(gtk_buffer: Gtk.TextBuffer): TextBuffer;

        // Methods

        /**
         * @returns the {@link Gtk.TextBuffer} of `gspell_buffer`.
         */
        get_buffer(): Gtk.TextBuffer;
        /**
         * @returns the {@link Gspell.Checker} if one has been set,   or `null`.
         */
        get_spell_checker(): Checker | null;
        /**
         * Sets a {@link Gspell.Checker} to a {@link Gspell.TextBuffer}. The `gspell_buffer` will own a
         * reference to `spell_checker`, so you can release your reference to
         * `spell_checker` if you no longer need it.
         * @param spell_checker a {@link Gspell.Checker}, or `null` to unset the spell   checker.
         */
        set_spell_checker(spell_checker: Checker | null): void;
    }

    namespace TextView {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::enable-language-menu': (pspec: GObject.ParamSpec) => void;
            'notify::inline-spell-checking': (pspec: GObject.ParamSpec) => void;
            'notify::view': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            enable_language_menu: boolean;
            enableLanguageMenu: boolean;
            inline_spell_checking: boolean;
            inlineSpellChecking: boolean;
            view: Gtk.TextView;
        }
    }

    /**
     * @gir-type Class
     */
    class TextView extends GObject.Object {
        static $gtype: GObject.GType<TextView>;

        // Properties

        /**
         * When the context menu is shown, whether to add a sub-menu to select
         * the language for the spell checking.
         * @since 1.2
         * @default false
         */
        get enable_language_menu(): boolean;
        set enable_language_menu(val: boolean);
        /**
         * When the context menu is shown, whether to add a sub-menu to select
         * the language for the spell checking.
         * @since 1.2
         * @default false
         */
        get enableLanguageMenu(): boolean;
        set enableLanguageMenu(val: boolean);
        /**
         * Whether the inline spell checking is enabled.
         * @default false
         */
        get inline_spell_checking(): boolean;
        set inline_spell_checking(val: boolean);
        /**
         * Whether the inline spell checking is enabled.
         * @default false
         */
        get inlineSpellChecking(): boolean;
        set inlineSpellChecking(val: boolean);
        /**
         * The {@link Gtk.TextView}.
         * @construct-only
         */
        get view(): Gtk.TextView;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TextView.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<TextView.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof TextView.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TextView.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof TextView.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TextView.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof TextView.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<TextView.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Returns the {@link Gspell.TextView} of `gtk_view`. The returned object is guaranteed
         * to be the same for the lifetime of `gtk_view`.
         * @param gtk_view a {@link Gtk.TextView}.
         */
        static get_from_gtk_text_view(gtk_view: Gtk.TextView): TextView;

        // Methods

        /**
         * This function is a convenience function that does the following:
         * - Set a spell checker. The language chosen is the one returned by
         *   `gspell_language_get_default()`.
         * - Set the {@link Gspell.TextView.inline_spell_checking} property to `true`.
         * - Set the {@link Gspell.TextView.enable_language_menu} property to `true`.
         *
         * Example:
         *
         * ```
         * GtkTextView *gtk_view;
         * GspellTextView *gspell_view;
         *
         * gspell_view = gspell_text_view_get_from_gtk_text_view (gtk_view);
         * gspell_text_view_basic_setup (gspell_view);
         * ```
         *
         *
         * This is equivalent to:
         *
         * ```
         * GtkTextView *gtk_view;
         * GspellTextView *gspell_view;
         * GspellChecker *checker;
         * GtkTextBuffer *gtk_buffer;
         * GspellTextBuffer *gspell_buffer;
         *
         * checker = gspell_checker_new (NULL);
         * gtk_buffer = gtk_text_view_get_buffer (gtk_view);
         * gspell_buffer = gspell_text_buffer_get_from_gtk_text_buffer (gtk_buffer);
         * gspell_text_buffer_set_spell_checker (gspell_buffer, checker);
         * g_object_unref (checker);
         *
         * gspell_view = gspell_text_view_get_from_gtk_text_view (gtk_view);
         * gspell_text_view_set_inline_spell_checking (gspell_view, TRUE);
         * gspell_text_view_set_enable_language_menu (gspell_view, TRUE);
         * ```
         *
         */
        basic_setup(): void;
        /**
         * @returns whether the language context menu is enabled.
         */
        get_enable_language_menu(): boolean;
        /**
         * @returns whether the inline spell checking is enabled.
         */
        get_inline_spell_checking(): boolean;
        /**
         * @returns the {@link Gtk.TextView} of `gspell_view`.
         */
        get_view(): Gtk.TextView;
        /**
         * Sets whether to enable the language context menu. If enabled, doing a right
         * click on the {@link Gtk.TextView} will show a sub-menu to choose the language for the
         * spell checking. If another language is chosen, it changes the
         * {@link Gspell.Checker.language} property of the {@link Gspell.TextBuffer.spell_checker} of
         * the {@link Gtk.TextView.buffer} of the {@link Gspell.TextView.view}.
         * @param enable_language_menu whether to enable the language context menu.
         */
        set_enable_language_menu(enable_language_menu: boolean): void;
        /**
         * Enables or disables the inline spell checking.
         * @param enable the new state.
         */
        set_inline_spell_checking(enable: boolean): void;
    }

    /**
     * @gir-type Alias
     */
    type CheckerClass = typeof Checker;
    /**
     * @gir-type Alias
     */
    type CheckerDialogClass = typeof CheckerDialog;
    /**
     * @gir-type Alias
     */
    type EntryBufferClass = typeof EntryBuffer;
    /**
     * @gir-type Alias
     */
    type EntryClass = typeof Entry;
    /**
     * @gir-type Struct
     */
    abstract class Language {
        static $gtype: GObject.GType<Language>;

        // Static methods

        static get_available(): Language[];
        /**
         * Finds the best available language based on the current locale.
         */
        static get_default(): Language | null;
        /**
         * @param language_code a language code.
         */
        static lookup(language_code: string): Language | null;

        // Methods

        /**
         * Compares alphabetically two languages by their name, as returned by
         * `gspell_language_get_name()`.
         * @param language_b another {@link Gspell.Language}.
         * @returns an integer less than, equal to, or greater than zero, if `language_a` is <, == or > than `language_b`.
         */
        compare(language_b: Language): number;
        /**
         * Used by language bindings.
         * @returns a copy of `lang`.
         */
        copy(): Language;
        /**
         * Used by language bindings.
         */
        free(): void;
        /**
         * @returns the `language` code, for example fr_BE.
         */
        get_code(): string;
        /**
         * Returns the `language` name translated to the current locale. For example
         * "French (Belgium)" is returned if the current locale is in English and the
         * `language` code is fr_BE.
         * @returns the `language` name.
         */
        get_name(): string;
    }

    /**
     * @gir-type Alias
     */
    type LanguageChooserButtonClass = typeof LanguageChooserButton;
    /**
     * @gir-type Alias
     */
    type LanguageChooserDialogClass = typeof LanguageChooserDialog;
    /**
     * @gir-type Alias
     */
    type LanguageChooserInterface = typeof LanguageChooser;
    /**
     * @gir-type Alias
     */
    type NavigatorInterface = typeof Navigator;
    /**
     * @gir-type Alias
     */
    type NavigatorTextViewClass = typeof NavigatorTextView;
    /**
     * @gir-type Alias
     */
    type TextBufferClass = typeof TextBuffer;
    /**
     * @gir-type Alias
     */
    type TextViewClass = typeof TextView;
    namespace LanguageChooser {
        /**
         * Interface for implementing LanguageChooser.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * @param default_language
             * @virtual
             */
            vfunc_get_language_full(default_language: boolean): Language;
            /**
             * Sets the selected language.
             * @param language a {@link Gspell.Language} or `null` to pick the default   language.
             * @virtual
             */
            vfunc_set_language(language: Language | null): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            language: Language | null;
            language_code: string;
            languageCode: string;
        }
    }

    export interface LanguageChooserNamespace {
        $gtype: GObject.GType<LanguageChooser>;
        prototype: LanguageChooser;
    }
    /**
     * @gir-type Interface
     */
    interface LanguageChooser extends GObject.Object, LanguageChooser.Interface {
        // Properties

        /**
         * The selected {@link Gspell.Language}.
         */
        get language(): Language | null;
        set language(val: Language | null);
        /**
         * The empty string if the default language was set and the selection
         * hasn't changed. Or the language code if an explicit language was set
         * or if the selection has changed.
         */
        get language_code(): string;
        set language_code(val: string);
        /**
         * The empty string if the default language was set and the selection
         * hasn't changed. Or the language code if an explicit language was set
         * or if the selection has changed.
         */
        get languageCode(): string;
        set languageCode(val: string);

        // Methods

        /**
         * @returns the selected {@link Gspell.Language}, or `null` if no dictionaries are available.
         */
        get_language(): Language | null;
        /**
         * @returns the {@link Gspell.LanguageChooser.language_code}. It cannot be `null`.
         */
        get_language_code(): string;
        /**
         * Sets the selected language.
         * @param language a {@link Gspell.Language} or `null` to pick the default   language.
         */
        set_language(language: Language | null): void;
        /**
         * @param language_code a language code, or the empty string or `null` to   pick the default language.
         */
        set_language_code(language_code: string | null): void;
    }

    export const LanguageChooser: LanguageChooserNamespace & {
        new (): LanguageChooser; // This allows `obj instanceof LanguageChooser`
    };

    namespace Navigator {
        /**
         * Interface for implementing Navigator.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Changes the current `word` by `change_to` in the text. `word` must be the same
             * as returned by the last call to `gspell_navigator_goto_next()`.
             *
             * This function doesn't call `gspell_checker_set_correction()`. A widget using a
             * {@link Gspell.Navigator} should call `gspell_checker_set_correction()` in addition to
             * this function.
             * @param word the word to change.
             * @param change_to the replacement.
             * @virtual
             */
            vfunc_change(word: string, change_to: string): void;
            /**
             * Changes all occurrences of `word` by `change_to` in the text.
             *
             * This function doesn't call `gspell_checker_set_correction()`. A widget using a
             * {@link Gspell.Navigator} should call `gspell_checker_set_correction()` in addition to
             * this function.
             * @param word the word to change.
             * @param change_to the replacement.
             * @virtual
             */
            vfunc_change_all(word: string, change_to: string): void;
            /**
             * Goes to the next misspelled word. When called the first time, goes to the
             * first misspelled word.
             * @virtual
             */
            vfunc_goto_next(): [boolean, string, Checker | null];
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.InitiallyUnowned.ConstructorProps {}
    }

    export interface NavigatorNamespace {
        $gtype: GObject.GType<Navigator>;
        prototype: Navigator;
    }
    /**
     * @gir-type Interface
     */
    interface Navigator extends GObject.InitiallyUnowned, Navigator.Interface {
        // Methods

        /**
         * Changes the current `word` by `change_to` in the text. `word` must be the same
         * as returned by the last call to `gspell_navigator_goto_next()`.
         *
         * This function doesn't call `gspell_checker_set_correction()`. A widget using a
         * {@link Gspell.Navigator} should call `gspell_checker_set_correction()` in addition to
         * this function.
         * @param word the word to change.
         * @param change_to the replacement.
         */
        change(word: string, change_to: string): void;
        /**
         * Changes all occurrences of `word` by `change_to` in the text.
         *
         * This function doesn't call `gspell_checker_set_correction()`. A widget using a
         * {@link Gspell.Navigator} should call `gspell_checker_set_correction()` in addition to
         * this function.
         * @param word the word to change.
         * @param change_to the replacement.
         */
        change_all(word: string, change_to: string): void;
        /**
         * Goes to the next misspelled word. When called the first time, goes to the
         * first misspelled word.
         * @returns `true` if a next misspelled word has been found, `false` if the spell checking is finished or if an error occurred.
         */
        goto_next(): [boolean, string, Checker | null];
    }

    export const Navigator: NavigatorNamespace & {
        new (): Navigator; // This allows `obj instanceof Navigator`
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

export default Gspell;

// END
