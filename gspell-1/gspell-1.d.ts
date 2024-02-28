/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gspell-1-ambient.d.ts';
import './gspell-1-import.d.ts';
/**
 * Gspell-1
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

export namespace Gspell {
    /**
     * An error code used with %GSPELL_CHECKER_ERROR in a #GError returned
     * from a spell-checker-related function.
     */
    class CheckerError extends GLib.Error {
        // Own fields of Gspell-1.CheckerError

        /**
         * dictionary error.
         */
        DICTIONARY: number;
        /**
         * no language set.
         */
        NO_LANGUAGE_SET: number;

        // Constructors of Gspell-1.CheckerError

        constructor(options: { message: string; code: number });

        // Owm methods of Gspell-1.CheckerError

        static quark(): GLib.Quark;
    }

    function checker_error_quark(): GLib.Quark;
    function language_get_available(): Language[];
    /**
     * Finds the best available language based on the current locale.
     * @returns the default #GspellLanguage, or %NULL if no dictionaries are available.
     */
    function language_get_default(): Language | null;
    function language_lookup(language_code: string): Language | null;
    module Checker {
        // Signal callback interfaces

        interface SessionCleared {
            (): void;
        }

        interface WordAddedToPersonal {
            (word: string): void;
        }

        interface WordAddedToSession {
            (word: string): void;
        }

        // Constructor properties interface
    }

    class Checker extends GObject.Object {
        // Own properties of Gspell-1.Checker

        /**
         * The #GspellLanguage used.
         */
        language: Language;

        // Constructors of Gspell-1.Checker

        static ['new'](language?: Language | null): Checker;

        // Owm methods of Gspell-1.Checker

        /**
         * Adds a word to the personal dictionary. It is typically saved in the user's
         * home directory.
         * @param word a word.
         * @param word_length the byte length of @word, or -1 if @word is nul-terminated.
         */
        add_word_to_personal(word: string, word_length: number): void;
        /**
         * Adds a word to the session dictionary. Each #GspellChecker instance has a
         * different session dictionary. The session dictionary is lost when the
         * #GspellChecker:language property changes or when `checker` is destroyed or
         * when gspell_checker_clear_session() is called.
         *
         * This function is typically called for an “Ignore All” action.
         * @param word a word.
         * @param word_length the byte length of @word, or -1 if @word is nul-terminated.
         */
        add_word_to_session(word: string, word_length: number): void;
        /**
         * If the #GspellChecker:language is %NULL, i.e. when no dictonaries are
         * available, this function returns %TRUE to limit the damage.
         * @param word the word to check.
         * @param word_length the byte length of @word, or -1 if @word is nul-terminated.
         * @returns %TRUE if @word is correctly spelled, %FALSE otherwise.
         */
        check_word(word: string, word_length: number): boolean;
        /**
         * Clears the session dictionary.
         */
        clear_session(): void;
        get_language(): Language | null;
        /**
         * Gets the suggestions for `word`. Free the return value with
         * g_slist_free_full(suggestions, g_free).
         * @param word a misspelled word.
         * @param word_length the byte length of @word, or -1 if @word is nul-terminated.
         * @returns the list of suggestions.
         */
        get_suggestions(word: string, word_length: number): string[];
        /**
         * Informs the spell checker that `word` is replaced/corrected by `replacement`.
         * @param word a word.
         * @param word_length the byte length of @word, or -1 if @word is nul-terminated.
         * @param replacement the replacement word.
         * @param replacement_length the byte length of @replacement, or -1 if @replacement   is nul-terminated.
         */
        set_correction(word: string, word_length: number, replacement: string, replacement_length: number): void;
        /**
         * Sets the language to use for the spell checking. If `language` is %NULL, the
         * default language is picked with gspell_language_get_default().
         * @param language the #GspellLanguage to use, or %NULL.
         */
        set_language(language?: Language | null): void;
    }

    module CheckerDialog {
        // Constructor properties interface
    }

    class CheckerDialog extends Gtk.Dialog {
        // Own properties of Gspell-1.CheckerDialog

        /**
         * The #GspellNavigator to use.
         */
        spell_navigator: Navigator;
        /**
         * The #GspellNavigator to use.
         */
        spellNavigator: Navigator;

        // Constructors of Gspell-1.CheckerDialog

        static ['new'](parent: Gtk.Window, navigator: Navigator): CheckerDialog;

        // Owm methods of Gspell-1.CheckerDialog

        get_spell_navigator(): Navigator;
    }

    module Entry {
        // Constructor properties interface
    }

    class Entry extends GObject.Object {
        // Own properties of Gspell-1.Entry

        /**
         * The #GtkEntry.
         */
        entry: Gtk.Entry;
        /**
         * Whether the inline spell checking is enabled.
         *
         * Even if this property is %TRUE, #GspellEntry disables internally the
         * inline spell checking in case the #GtkEntry:visibility property is
         * %FALSE.
         */
        inline_spell_checking: boolean;
        /**
         * Whether the inline spell checking is enabled.
         *
         * Even if this property is %TRUE, #GspellEntry disables internally the
         * inline spell checking in case the #GtkEntry:visibility property is
         * %FALSE.
         */
        inlineSpellChecking: boolean;

        // Owm methods of Gspell-1.Entry

        /**
         * Returns the #GspellEntry of `gtk_entry`. The returned object is guaranteed
         * to be the same for the lifetime of `gtk_entry`.
         * @param gtk_entry a #GtkEntry.
         */
        static get_from_gtk_entry(gtk_entry: Gtk.Entry): Entry;

        // Owm methods of Gspell-1.Entry

        /**
         * This function is a convenience function that does the following:
         * - Set a spell checker. The language chosen is the one returned by
         *   gspell_language_get_default().
         * - Set the #GspellEntry:inline-spell-checking property to %TRUE.
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
        get_entry(): Gtk.Entry;
        get_inline_spell_checking(): boolean;
        /**
         * Sets the #GspellEntry:inline-spell-checking property.
         * @param enable the new state.
         */
        set_inline_spell_checking(enable: boolean): void;
    }

    module EntryBuffer {
        // Constructor properties interface
    }

    class EntryBuffer extends GObject.Object {
        // Own properties of Gspell-1.EntryBuffer

        /**
         * The #GtkEntryBuffer.
         */
        buffer: Gtk.EntryBuffer;
        /**
         * The #GspellChecker.
         */
        spell_checker: Checker;
        /**
         * The #GspellChecker.
         */
        spellChecker: Checker;

        // Owm methods of Gspell-1.EntryBuffer

        /**
         * Returns the #GspellEntryBuffer of `gtk_buffer`. The returned object is
         * guaranteed to be the same for the lifetime of `gtk_buffer`.
         * @param gtk_buffer a #GtkEntryBuffer.
         */
        static get_from_gtk_entry_buffer(gtk_buffer: Gtk.EntryBuffer): EntryBuffer;

        // Owm methods of Gspell-1.EntryBuffer

        get_buffer(): Gtk.EntryBuffer;
        get_spell_checker(): Checker | null;
        /**
         * Sets a #GspellChecker to a #GspellEntryBuffer. The `gspell_buffer` will own a
         * reference to `spell_checker,` so you can release your reference to
         * `spell_checker` if you no longer need it.
         * @param spell_checker a #GspellChecker, or %NULL to unset the spell   checker.
         */
        set_spell_checker(spell_checker?: Checker | null): void;
    }

    module LanguageChooserButton {
        // Constructor properties interface
    }

    class LanguageChooserButton extends Gtk.Button {
        // Constructors of Gspell-1.LanguageChooserButton

        static ['new'](current_language?: Language | null): LanguageChooserButton;
    }

    module LanguageChooserDialog {
        // Constructor properties interface
    }

    class LanguageChooserDialog extends Gtk.Dialog {
        // Constructors of Gspell-1.LanguageChooserDialog

        static ['new'](
            parent: Gtk.Window,
            current_language: Language | null,
            flags: Gtk.DialogFlags,
        ): LanguageChooserDialog;
    }

    module NavigatorTextView {
        // Constructor properties interface
    }

    class NavigatorTextView extends GObject.InitiallyUnowned {
        // Own properties of Gspell-1.NavigatorTextView

        /**
         * The #GtkTextView. The buffer is not sufficient, the view is needed to
         * scroll to the misspelled words.
         */
        view: Gtk.TextView;

        // Owm methods of Gspell-1.NavigatorTextView

        static ['new'](view: Gtk.TextView): Navigator;

        // Owm methods of Gspell-1.NavigatorTextView

        get_view(): Gtk.TextView;
    }

    module TextBuffer {
        // Constructor properties interface
    }

    class TextBuffer extends GObject.Object {
        // Own properties of Gspell-1.TextBuffer

        /**
         * The #GtkTextBuffer.
         */
        buffer: Gtk.TextBuffer;
        /**
         * The #GspellChecker.
         */
        spell_checker: Checker;
        /**
         * The #GspellChecker.
         */
        spellChecker: Checker;

        // Owm methods of Gspell-1.TextBuffer

        /**
         * Returns the #GspellTextBuffer of `gtk_buffer`. The returned object is
         * guaranteed to be the same for the lifetime of `gtk_buffer`.
         * @param gtk_buffer a #GtkTextBuffer.
         */
        static get_from_gtk_text_buffer(gtk_buffer: Gtk.TextBuffer): TextBuffer;

        // Owm methods of Gspell-1.TextBuffer

        get_buffer(): Gtk.TextBuffer;
        get_spell_checker(): Checker | null;
        /**
         * Sets a #GspellChecker to a #GspellTextBuffer. The `gspell_buffer` will own a
         * reference to `spell_checker,` so you can release your reference to
         * `spell_checker` if you no longer need it.
         * @param spell_checker a #GspellChecker, or %NULL to unset the spell   checker.
         */
        set_spell_checker(spell_checker?: Checker | null): void;
    }

    module TextView {
        // Constructor properties interface
    }

    class TextView extends GObject.Object {
        // Own properties of Gspell-1.TextView

        /**
         * When the context menu is shown, whether to add a sub-menu to select
         * the language for the spell checking.
         */
        enable_language_menu: boolean;
        /**
         * When the context menu is shown, whether to add a sub-menu to select
         * the language for the spell checking.
         */
        enableLanguageMenu: boolean;
        /**
         * Whether the inline spell checking is enabled.
         */
        inline_spell_checking: boolean;
        /**
         * Whether the inline spell checking is enabled.
         */
        inlineSpellChecking: boolean;
        /**
         * The #GtkTextView.
         */
        view: Gtk.TextView;

        // Owm methods of Gspell-1.TextView

        /**
         * Returns the #GspellTextView of `gtk_view`. The returned object is guaranteed
         * to be the same for the lifetime of `gtk_view`.
         * @param gtk_view a #GtkTextView.
         */
        static get_from_gtk_text_view(gtk_view: Gtk.TextView): TextView;

        // Owm methods of Gspell-1.TextView

        /**
         * This function is a convenience function that does the following:
         * - Set a spell checker. The language chosen is the one returned by
         *   gspell_language_get_default().
         * - Set the #GspellTextView:inline-spell-checking property to %TRUE.
         * - Set the #GspellTextView:enable-language-menu property to %TRUE.
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
        get_enable_language_menu(): boolean;
        get_inline_spell_checking(): boolean;
        get_view(): Gtk.TextView;
        /**
         * Sets whether to enable the language context menu. If enabled, doing a right
         * click on the #GtkTextView will show a sub-menu to choose the language for the
         * spell checking. If another language is chosen, it changes the
         * #GspellChecker:language property of the #GspellTextBuffer:spell-checker of
         * the #GtkTextView:buffer of the #GspellTextView:view.
         * @param enable_language_menu whether to enable the language context menu.
         */
        set_enable_language_menu(enable_language_menu: boolean): void;
        /**
         * Enables or disables the inline spell checking.
         * @param enable the new state.
         */
        set_inline_spell_checking(enable: boolean): void;
    }

    class CheckerClass {
        // Own fields of Gspell-1.CheckerClass

        padding: any[];
    }

    class CheckerDialogClass {
        // Own fields of Gspell-1.CheckerDialogClass

        padding: any[];
    }

    class EntryBufferClass {}

    class EntryClass {}

    class Language {
        // Owm methods of Gspell-1.Language

        static get_available(): Language[];
        /**
         * Finds the best available language based on the current locale.
         */
        static get_default(): Language | null;
        static lookup(language_code: string): Language | null;

        // Owm methods of Gspell-1.Language

        /**
         * Compares alphabetically two languages by their name, as returned by
         * gspell_language_get_name().
         * @param language_b another #GspellLanguage.
         * @returns an integer less than, equal to, or greater than zero, if @language_a is <, == or > than @language_b.
         */
        compare(language_b: Language): number;
        /**
         * Used by language bindings.
         * @returns a copy of @lang.
         */
        copy(): Language;
        /**
         * Used by language bindings.
         */
        free(): void;
        get_code(): string;
        /**
         * Returns the `language` name translated to the current locale. For example
         * "French (Belgium)" is returned if the current locale is in English and the
         * `language` code is fr_BE.
         * @returns the @language name.
         */
        get_name(): string;
    }

    class LanguageChooserButtonClass {
        // Own fields of Gspell-1.LanguageChooserButtonClass

        padding: any[];
    }

    class LanguageChooserDialogClass {
        // Own fields of Gspell-1.LanguageChooserDialogClass

        padding: any[];
    }

    class LanguageChooserInterface {}

    class NavigatorInterface {}

    class NavigatorTextViewClass {
        // Own fields of Gspell-1.NavigatorTextViewClass

        padding: any[];
    }

    class TextBufferClass {}

    class TextViewClass {
        // Own fields of Gspell-1.TextViewClass

        padding: any[];
    }

    interface LanguageChooser {
        // Own properties of Gspell-1.LanguageChooser

        /**
         * The selected #GspellLanguage.
         */
        language: Language;
        /**
         * The empty string if the default language was set and the selection
         * hasn't changed. Or the language code if an explicit language was set
         * or if the selection has changed.
         */
        language_code: string;
        /**
         * The empty string if the default language was set and the selection
         * hasn't changed. Or the language code if an explicit language was set
         * or if the selection has changed.
         */
        languageCode: string;

        // Owm methods of Gspell-1.LanguageChooser

        get_language(): Language | null;
        get_language_code(): string;
        /**
         * Sets the selected language.
         * @param language a #GspellLanguage or %NULL to pick the default   language.
         */
        set_language(language?: Language | null): void;
        set_language_code(language_code?: string | null): void;

        // Own virtual methods of Gspell-1.LanguageChooser

        vfunc_get_language_full(default_language: boolean): Language;
        /**
         * Sets the selected language.
         * @param language a #GspellLanguage or %NULL to pick the default   language.
         */
        vfunc_set_language(language?: Language | null): void;
    }

    interface Navigator {
        // Owm methods of Gspell-1.Navigator

        /**
         * Changes the current `word` by `change_to` in the text. `word` must be the same
         * as returned by the last call to gspell_navigator_goto_next().
         *
         * This function doesn't call gspell_checker_set_correction(). A widget using a
         * #GspellNavigator should call gspell_checker_set_correction() in addition to
         * this function.
         * @param word the word to change.
         * @param change_to the replacement.
         */
        change(word: string, change_to: string): void;
        /**
         * Changes all occurrences of `word` by `change_to` in the text.
         *
         * This function doesn't call gspell_checker_set_correction(). A widget using a
         * #GspellNavigator should call gspell_checker_set_correction() in addition to
         * this function.
         * @param word the word to change.
         * @param change_to the replacement.
         */
        change_all(word: string, change_to: string): void;
        /**
         * Goes to the next misspelled word. When called the first time, goes to the
         * first misspelled word.
         * @returns %TRUE if a next misspelled word has been found, %FALSE if the spell checking is finished or if an error occurred.
         */
        goto_next(): boolean;

        // Own virtual methods of Gspell-1.Navigator

        /**
         * Changes the current `word` by `change_to` in the text. `word` must be the same
         * as returned by the last call to gspell_navigator_goto_next().
         *
         * This function doesn't call gspell_checker_set_correction(). A widget using a
         * #GspellNavigator should call gspell_checker_set_correction() in addition to
         * this function.
         * @param word the word to change.
         * @param change_to the replacement.
         */
        vfunc_change(word: string, change_to: string): void;
        /**
         * Changes all occurrences of `word` by `change_to` in the text.
         *
         * This function doesn't call gspell_checker_set_correction(). A widget using a
         * #GspellNavigator should call gspell_checker_set_correction() in addition to
         * this function.
         * @param word the word to change.
         * @param change_to the replacement.
         */
        vfunc_change_all(word: string, change_to: string): void;
        /**
         * Goes to the next misspelled word. When called the first time, goes to the
         * first misspelled word.
         */
        vfunc_goto_next(): boolean;
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

export default Gspell;
// END
