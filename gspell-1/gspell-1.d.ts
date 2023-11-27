
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
enum CheckerError {
    /**
     * dictionary error.
     */
    DICTIONARY,
    /**
     * no language set.
     */
    NO_LANGUAGE_SET,
}
function checker_error_quark(): GLib.Quark
function language_get_available(): Language[]
/**
 * Finds the best available language based on the current locale.
 * @returns the default #GspellLanguage, or %NULL if no dictionaries are available.
 */
function language_get_default(): Language | null
function language_lookup(language_code: string | null): Language | null
module LanguageChooser {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gspell-1.Gspell.LanguageChooser

        /**
         * The selected #GspellLanguage.
         */
        language?: Language | null
        /**
         * The empty string if the default language was set and the selection
         * hasn't changed. Or the language code if an explicit language was set
         * or if the selection has changed.
         */
        language_code?: string | null
        /**
         * The empty string if the default language was set and the selection
         * hasn't changed. Or the language code if an explicit language was set
         * or if the selection has changed.
         */
        languageCode?: string | null
    }

}

interface LanguageChooser {

    // Own properties of Gspell-1.Gspell.LanguageChooser

    /**
     * The selected #GspellLanguage.
     */
    language: Language
    /**
     * The empty string if the default language was set and the selection
     * hasn't changed. Or the language code if an explicit language was set
     * or if the selection has changed.
     */
    language_code: string | null
    /**
     * The empty string if the default language was set and the selection
     * hasn't changed. Or the language code if an explicit language was set
     * or if the selection has changed.
     */
    languageCode: string | null

    // Owm methods of Gspell-1.Gspell.LanguageChooser

    get_language(): Language | null
    get_language_code(): string | null
    /**
     * Sets the selected language.
     * @param language a #GspellLanguage or %NULL to pick the default   language.
     */
    set_language(language: Language | null): void
    set_language_code(language_code: string | null): void

    // Own virtual methods of Gspell-1.Gspell.LanguageChooser

    vfunc_get_language_full(default_language: boolean): Language
    /**
     * Sets the selected language.
     * @virtual 
     * @param language a #GspellLanguage or %NULL to pick the default   language.
     */
    vfunc_set_language(language: Language | null): void

    // Class property signals of Gspell-1.Gspell.LanguageChooser

    connect(sigName: "notify::language", callback: (($obj: LanguageChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::language", callback: (($obj: LanguageChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::language", ...args: any[]): void
    connect(sigName: "notify::language-code", callback: (($obj: LanguageChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::language-code", callback: (($obj: LanguageChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::language-code", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class LanguageChooser extends GObject.Object {

    // Own properties of Gspell-1.Gspell.LanguageChooser

    static name: string
    static $gtype: GObject.GType<LanguageChooser>

    // Constructors of Gspell-1.Gspell.LanguageChooser

    constructor(config?: LanguageChooser.ConstructorProperties) 
    _init(config?: LanguageChooser.ConstructorProperties): void
}

module Navigator {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface Navigator extends GObject.InitiallyUnowned {

    // Owm methods of Gspell-1.Gspell.Navigator

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
    change(word: string | null, change_to: string | null): void
    /**
     * Changes all occurrences of `word` by `change_to` in the text.
     * 
     * This function doesn't call gspell_checker_set_correction(). A widget using a
     * #GspellNavigator should call gspell_checker_set_correction() in addition to
     * this function.
     * @param word the word to change.
     * @param change_to the replacement.
     */
    change_all(word: string | null, change_to: string | null): void
    /**
     * Goes to the next misspelled word. When called the first time, goes to the
     * first misspelled word.
     * @returns %TRUE if a next misspelled word has been found, %FALSE if the spell checking is finished or if an error occurred.
     */
    goto_next(): [ /* returnType */ boolean, /* word */ string | null, /* spell_checker */ Checker ]

    // Own virtual methods of Gspell-1.Gspell.Navigator

    /**
     * Changes the current `word` by `change_to` in the text. `word` must be the same
     * as returned by the last call to gspell_navigator_goto_next().
     * 
     * This function doesn't call gspell_checker_set_correction(). A widget using a
     * #GspellNavigator should call gspell_checker_set_correction() in addition to
     * this function.
     * @virtual 
     * @param word the word to change.
     * @param change_to the replacement.
     */
    vfunc_change(word: string | null, change_to: string | null): void
    /**
     * Changes all occurrences of `word` by `change_to` in the text.
     * 
     * This function doesn't call gspell_checker_set_correction(). A widget using a
     * #GspellNavigator should call gspell_checker_set_correction() in addition to
     * this function.
     * @virtual 
     * @param word the word to change.
     * @param change_to the replacement.
     */
    vfunc_change_all(word: string | null, change_to: string | null): void
    /**
     * Goes to the next misspelled word. When called the first time, goes to the
     * first misspelled word.
     * @virtual 
     * @returns %TRUE if a next misspelled word has been found, %FALSE if the spell checking is finished or if an error occurred.
     */
    vfunc_goto_next(): [ /* returnType */ boolean, /* word */ string | null, /* spell_checker */ Checker ]

    // Class property signals of Gspell-1.Gspell.Navigator

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Navigator extends GObject.Object {

    // Own properties of Gspell-1.Gspell.Navigator

    static name: string
    static $gtype: GObject.GType<Navigator>

    // Constructors of Gspell-1.Gspell.Navigator

    constructor(config?: Navigator.ConstructorProperties) 
    _init(config?: Navigator.ConstructorProperties): void
}

module Checker {

    // Signal callback interfaces

    /**
     * Signal callback interface for `session-cleared`
     */
    interface SessionClearedSignalCallback {
        ($obj: Checker): void
    }

    /**
     * Signal callback interface for `word-added-to-personal`
     */
    interface WordAddedToPersonalSignalCallback {
        ($obj: Checker, word: string | null): void
    }

    /**
     * Signal callback interface for `word-added-to-session`
     */
    interface WordAddedToSessionSignalCallback {
        ($obj: Checker, word: string | null): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gspell-1.Gspell.Checker

        /**
         * The #GspellLanguage used.
         */
        language?: Language | null
    }

}

interface Checker {

    // Own properties of Gspell-1.Gspell.Checker

    /**
     * The #GspellLanguage used.
     */
    language: Language

    // Own fields of Gspell-1.Gspell.Checker

    parent_instance: GObject.Object

    // Owm methods of Gspell-1.Gspell.Checker

    /**
     * Adds a word to the personal dictionary. It is typically saved in the user's
     * home directory.
     * @param word a word.
     * @param word_length the byte length of `word,` or -1 if `word` is nul-terminated.
     */
    add_word_to_personal(word: string | null, word_length: number): void
    /**
     * Adds a word to the session dictionary. Each #GspellChecker instance has a
     * different session dictionary. The session dictionary is lost when the
     * #GspellChecker:language property changes or when `checker` is destroyed or
     * when gspell_checker_clear_session() is called.
     * 
     * This function is typically called for an “Ignore All” action.
     * @param word a word.
     * @param word_length the byte length of `word,` or -1 if `word` is nul-terminated.
     */
    add_word_to_session(word: string | null, word_length: number): void
    /**
     * If the #GspellChecker:language is %NULL, i.e. when no dictonaries are
     * available, this function returns %TRUE to limit the damage.
     * @param word the word to check.
     * @param word_length the byte length of `word,` or -1 if `word` is nul-terminated.
     * @returns %TRUE if @word is correctly spelled, %FALSE otherwise.
     */
    check_word(word: string | null, word_length: number): boolean
    /**
     * Clears the session dictionary.
     */
    clear_session(): void
    get_language(): Language | null
    /**
     * Gets the suggestions for `word`. Free the return value with
     * g_slist_free_full(suggestions, g_free).
     * @param word a misspelled word.
     * @param word_length the byte length of `word,` or -1 if `word` is nul-terminated.
     * @returns the list of suggestions.
     */
    get_suggestions(word: string | null, word_length: number): string[]
    /**
     * Informs the spell checker that `word` is replaced/corrected by `replacement`.
     * @param word a word.
     * @param word_length the byte length of `word,` or -1 if `word` is nul-terminated.
     * @param replacement the replacement word.
     * @param replacement_length the byte length of `replacement,` or -1 if `replacement`   is nul-terminated.
     */
    set_correction(word: string | null, word_length: number, replacement: string | null, replacement_length: number): void
    /**
     * Sets the language to use for the spell checking. If `language` is %NULL, the
     * default language is picked with gspell_language_get_default().
     * @param language the #GspellLanguage to use, or %NULL.
     */
    set_language(language: Language | null): void

    // Own virtual methods of Gspell-1.Gspell.Checker

    vfunc_session_cleared(): void
    vfunc_word_added_to_personal(word: string | null): void
    vfunc_word_added_to_session(word: string | null): void

    // Own signals of Gspell-1.Gspell.Checker

    connect(sigName: "session-cleared", callback: Checker.SessionClearedSignalCallback): number
    connect_after(sigName: "session-cleared", callback: Checker.SessionClearedSignalCallback): number
    emit(sigName: "session-cleared", ...args: any[]): void
    connect(sigName: "word-added-to-personal", callback: Checker.WordAddedToPersonalSignalCallback): number
    connect_after(sigName: "word-added-to-personal", callback: Checker.WordAddedToPersonalSignalCallback): number
    emit(sigName: "word-added-to-personal", word: string | null, ...args: any[]): void
    connect(sigName: "word-added-to-session", callback: Checker.WordAddedToSessionSignalCallback): number
    connect_after(sigName: "word-added-to-session", callback: Checker.WordAddedToSessionSignalCallback): number
    emit(sigName: "word-added-to-session", word: string | null, ...args: any[]): void

    // Class property signals of Gspell-1.Gspell.Checker

    connect(sigName: "notify::language", callback: (($obj: Checker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::language", callback: (($obj: Checker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::language", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Checker extends GObject.Object {

    // Own properties of Gspell-1.Gspell.Checker

    static name: string
    static $gtype: GObject.GType<Checker>

    // Constructors of Gspell-1.Gspell.Checker

    constructor(config?: Checker.ConstructorProperties) 
    /**
     * Creates a new #GspellChecker. If `language` is %NULL, the default language is
     * picked with gspell_language_get_default().
     * @constructor 
     * @param language the #GspellLanguage to use, or %NULL.
     * @returns a new #GspellChecker object.
     */
    constructor(language: Language | null) 
    /**
     * Creates a new #GspellChecker. If `language` is %NULL, the default language is
     * picked with gspell_language_get_default().
     * @constructor 
     * @param language the #GspellLanguage to use, or %NULL.
     * @returns a new #GspellChecker object.
     */
    static new(language: Language | null): Checker
    _init(config?: Checker.ConstructorProperties): void
}

module CheckerDialog {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Dialog.ConstructorProperties {

        // Own constructor properties of Gspell-1.Gspell.CheckerDialog

        /**
         * The #GspellNavigator to use.
         */
        spell_navigator?: Navigator | null
        /**
         * The #GspellNavigator to use.
         */
        spellNavigator?: Navigator | null
    }

}

interface CheckerDialog extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Gspell-1.Gspell.CheckerDialog

    /**
     * The #GspellNavigator to use.
     */
    readonly spell_navigator: Navigator
    /**
     * The #GspellNavigator to use.
     */
    readonly spellNavigator: Navigator

    // Conflicting properties

    readonly window: Gtk.Window & Gdk.Window & Gdk.Window

    // Own fields of Gspell-1.Gspell.CheckerDialog

    parent_instance: Gtk.Dialog & GObject.InitiallyUnowned

    // Owm methods of Gspell-1.Gspell.CheckerDialog

    get_spell_navigator(): Navigator

    // Conflicting methods

    /**
     * Activates the targets associated with the mnemonic.
     * @param keyval the mnemonic
     * @param modifier the modifiers
     * @returns %TRUE if the activation is done.
     */
    mnemonic_activate(keyval: number, modifier: Gdk.ModifierType): boolean

    // Overloads of mnemonic_activate

    /**
     * Emits the #GtkWidget::mnemonic-activate signal.
     * @param group_cycling %TRUE if there are other widgets with the same mnemonic
     * @returns %TRUE if the signal has been handled
     */
    mnemonic_activate(group_cycling: boolean): boolean
    /**
     * Emits the #GtkWidget::mnemonic-activate signal.
     * @param group_cycling %TRUE if there are other widgets with the same mnemonic
     * @returns %TRUE if the signal has been handled
     */
    mnemonic_activate(group_cycling: boolean): boolean
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string | null): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void

    // Class property signals of Gspell-1.Gspell.CheckerDialog

    connect(sigName: "notify::spell-navigator", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spell-navigator", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spell-navigator", ...args: any[]): void
    connect(sigName: "notify::use-header-bar", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-header-bar", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-header-bar", ...args: any[]): void
    connect(sigName: "notify::accept-focus", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-focus", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accept-focus", ...args: any[]): void
    connect(sigName: "notify::application", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::attached-to", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attached-to", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attached-to", ...args: any[]): void
    connect(sigName: "notify::decorated", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decorated", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::decorated", ...args: any[]): void
    connect(sigName: "notify::default-height", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-height", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-height", ...args: any[]): void
    connect(sigName: "notify::default-width", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-width", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-width", ...args: any[]): void
    connect(sigName: "notify::deletable", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletable", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::deletable", ...args: any[]): void
    connect(sigName: "notify::destroy-with-parent", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destroy-with-parent", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::destroy-with-parent", ...args: any[]): void
    connect(sigName: "notify::focus-on-map", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-map", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-map", ...args: any[]): void
    connect(sigName: "notify::focus-visible", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-visible", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-visible", ...args: any[]): void
    connect(sigName: "notify::gravity", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gravity", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gravity", ...args: any[]): void
    connect(sigName: "notify::has-resize-grip", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-resize-grip", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-resize-grip", ...args: any[]): void
    connect(sigName: "notify::has-toplevel-focus", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-toplevel-focus", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-toplevel-focus", ...args: any[]): void
    connect(sigName: "notify::hide-titlebar-when-maximized", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hide-titlebar-when-maximized", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hide-titlebar-when-maximized", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::is-active", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-active", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-active", ...args: any[]): void
    connect(sigName: "notify::is-maximized", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-maximized", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-maximized", ...args: any[]): void
    connect(sigName: "notify::mnemonics-visible", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mnemonics-visible", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mnemonics-visible", ...args: any[]): void
    connect(sigName: "notify::modal", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modal", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modal", ...args: any[]): void
    connect(sigName: "notify::resizable", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resizable", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resizable", ...args: any[]): void
    connect(sigName: "notify::resize-grip-visible", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-grip-visible", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-grip-visible", ...args: any[]): void
    connect(sigName: "notify::role", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::screen", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::screen", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::screen", ...args: any[]): void
    connect(sigName: "notify::skip-pager-hint", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-pager-hint", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::skip-pager-hint", ...args: any[]): void
    connect(sigName: "notify::skip-taskbar-hint", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-taskbar-hint", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::skip-taskbar-hint", ...args: any[]): void
    connect(sigName: "notify::startup-id", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::startup-id", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::startup-id", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::transient-for", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transient-for", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transient-for", ...args: any[]): void
    connect(sigName: "notify::type", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::type-hint", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-hint", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type-hint", ...args: any[]): void
    connect(sigName: "notify::urgency-hint", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urgency-hint", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::urgency-hint", ...args: any[]): void
    connect(sigName: "notify::window-position", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-position", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window-position", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: CheckerDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CheckerDialog extends Gtk.Dialog {

    // Own properties of Gspell-1.Gspell.CheckerDialog

    static name: string
    static $gtype: GObject.GType<CheckerDialog>

    // Constructors of Gspell-1.Gspell.CheckerDialog

    constructor(config?: CheckerDialog.ConstructorProperties) 
    constructor(parent: Gtk.Window, navigator: Navigator) 
    static new(parent: Gtk.Window, navigator: Navigator): CheckerDialog

    // Overloads of new

    /**
     * Creates a new dialog box.
     * 
     * Widgets should not be packed into this #GtkWindow
     * directly, but into the `vbox` and `action_area,` as described above.
     * @constructor 
     * @returns the new dialog as a #GtkWidget
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
     * @returns a new #GtkWindow.
     */
    static new(type: Gtk.WindowType): Gtk.Window
    _init(config?: CheckerDialog.ConstructorProperties): void
}

module Entry {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gspell-1.Gspell.Entry

        /**
         * The #GtkEntry.
         */
        entry?: Gtk.Entry | null
        /**
         * Whether the inline spell checking is enabled.
         * 
         * Even if this property is %TRUE, #GspellEntry disables internally the
         * inline spell checking in case the #GtkEntry:visibility property is
         * %FALSE.
         */
        inline_spell_checking?: boolean | null
        /**
         * Whether the inline spell checking is enabled.
         * 
         * Even if this property is %TRUE, #GspellEntry disables internally the
         * inline spell checking in case the #GtkEntry:visibility property is
         * %FALSE.
         */
        inlineSpellChecking?: boolean | null
    }

}

interface Entry {

    // Own properties of Gspell-1.Gspell.Entry

    /**
     * The #GtkEntry.
     */
    readonly entry: Gtk.Entry
    /**
     * Whether the inline spell checking is enabled.
     * 
     * Even if this property is %TRUE, #GspellEntry disables internally the
     * inline spell checking in case the #GtkEntry:visibility property is
     * %FALSE.
     */
    inline_spell_checking: boolean
    /**
     * Whether the inline spell checking is enabled.
     * 
     * Even if this property is %TRUE, #GspellEntry disables internally the
     * inline spell checking in case the #GtkEntry:visibility property is
     * %FALSE.
     */
    inlineSpellChecking: boolean

    // Owm methods of Gspell-1.Gspell.Entry

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
    basic_setup(): void
    get_entry(): Gtk.Entry
    get_inline_spell_checking(): boolean
    /**
     * Sets the #GspellEntry:inline-spell-checking property.
     * @param enable the new state.
     */
    set_inline_spell_checking(enable: boolean): void

    // Class property signals of Gspell-1.Gspell.Entry

    connect(sigName: "notify::entry", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entry", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::entry", ...args: any[]): void
    connect(sigName: "notify::inline-spell-checking", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inline-spell-checking", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::inline-spell-checking", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Entry extends GObject.Object {

    // Own properties of Gspell-1.Gspell.Entry

    static name: string
    static $gtype: GObject.GType<Entry>

    // Constructors of Gspell-1.Gspell.Entry

    constructor(config?: Entry.ConstructorProperties) 
    _init(config?: Entry.ConstructorProperties): void
    /**
     * Returns the #GspellEntry of `gtk_entry`. The returned object is guaranteed
     * to be the same for the lifetime of `gtk_entry`.
     * @param gtk_entry a #GtkEntry.
     * @returns the #GspellEntry of @gtk_entry.
     */
    static get_from_gtk_entry(gtk_entry: Gtk.Entry): Entry
}

module EntryBuffer {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gspell-1.Gspell.EntryBuffer

        /**
         * The #GtkEntryBuffer.
         */
        buffer?: Gtk.EntryBuffer | null
        /**
         * The #GspellChecker.
         */
        spell_checker?: Checker | null
        /**
         * The #GspellChecker.
         */
        spellChecker?: Checker | null
    }

}

interface EntryBuffer {

    // Own properties of Gspell-1.Gspell.EntryBuffer

    /**
     * The #GtkEntryBuffer.
     */
    readonly buffer: Gtk.EntryBuffer
    /**
     * The #GspellChecker.
     */
    spell_checker: Checker
    /**
     * The #GspellChecker.
     */
    spellChecker: Checker

    // Owm methods of Gspell-1.Gspell.EntryBuffer

    get_buffer(): Gtk.EntryBuffer
    get_spell_checker(): Checker | null
    /**
     * Sets a #GspellChecker to a #GspellEntryBuffer. The `gspell_buffer` will own a
     * reference to `spell_checker,` so you can release your reference to
     * `spell_checker` if you no longer need it.
     * @param spell_checker a #GspellChecker, or %NULL to unset the spell   checker.
     */
    set_spell_checker(spell_checker: Checker | null): void

    // Class property signals of Gspell-1.Gspell.EntryBuffer

    connect(sigName: "notify::buffer", callback: (($obj: EntryBuffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer", callback: (($obj: EntryBuffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::spell-checker", callback: (($obj: EntryBuffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spell-checker", callback: (($obj: EntryBuffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spell-checker", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class EntryBuffer extends GObject.Object {

    // Own properties of Gspell-1.Gspell.EntryBuffer

    static name: string
    static $gtype: GObject.GType<EntryBuffer>

    // Constructors of Gspell-1.Gspell.EntryBuffer

    constructor(config?: EntryBuffer.ConstructorProperties) 
    _init(config?: EntryBuffer.ConstructorProperties): void
    /**
     * Returns the #GspellEntryBuffer of `gtk_buffer`. The returned object is
     * guaranteed to be the same for the lifetime of `gtk_buffer`.
     * @param gtk_buffer a #GtkEntryBuffer.
     * @returns the #GspellEntryBuffer of @gtk_buffer.
     */
    static get_from_gtk_entry_buffer(gtk_buffer: Gtk.EntryBuffer): EntryBuffer
}

module LanguageChooserButton {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, LanguageChooser.ConstructorProperties, Gtk.Actionable.ConstructorProperties, Gtk.Activatable.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Button.ConstructorProperties {
    }

}

interface LanguageChooserButton extends Atk.ImplementorIface, LanguageChooser, Gtk.Actionable, Gtk.Activatable, Gtk.Buildable {

    // Own fields of Gspell-1.Gspell.LanguageChooserButton

    parent_instance: Gtk.Button & GObject.InitiallyUnowned

    // Conflicting methods

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string | null): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void

    // Class property signals of Gspell-1.Gspell.LanguageChooserButton

    connect(sigName: "notify::always-show-image", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-show-image", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::always-show-image", ...args: any[]): void
    connect(sigName: "notify::image", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::image", ...args: any[]): void
    connect(sigName: "notify::image-position", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-position", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::image-position", ...args: any[]): void
    connect(sigName: "notify::label", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::relief", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relief", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::relief", ...args: any[]): void
    connect(sigName: "notify::use-stock", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-stock", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-stock", ...args: any[]): void
    connect(sigName: "notify::use-underline", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-underline", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-underline", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::yalign", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yalign", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::yalign", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::language", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::language", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::language", ...args: any[]): void
    connect(sigName: "notify::language-code", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::language-code", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::language-code", ...args: any[]): void
    connect(sigName: "notify::action-name", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-name", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::action-name", ...args: any[]): void
    connect(sigName: "notify::action-target", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-target", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::action-target", ...args: any[]): void
    connect(sigName: "notify::related-action", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::related-action", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::related-action", ...args: any[]): void
    connect(sigName: "notify::use-action-appearance", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-action-appearance", callback: (($obj: LanguageChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-action-appearance", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class LanguageChooserButton extends Gtk.Button {

    // Own properties of Gspell-1.Gspell.LanguageChooserButton

    static name: string
    static $gtype: GObject.GType<LanguageChooserButton>

    // Constructors of Gspell-1.Gspell.LanguageChooserButton

    constructor(config?: LanguageChooserButton.ConstructorProperties) 
    constructor(current_language: Language | null) 
    static new(current_language: Language | null): LanguageChooserButton

    // Overloads of new

    /**
     * Creates a new #GtkButton widget. To add a child widget to the button,
     * use gtk_container_add().
     * @constructor 
     * @returns The newly created #GtkButton widget.
     */
    static new(): Gtk.Button
    _init(config?: LanguageChooserButton.ConstructorProperties): void
}

module LanguageChooserDialog {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, LanguageChooser.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Dialog.ConstructorProperties {
    }

}

interface LanguageChooserDialog extends Atk.ImplementorIface, LanguageChooser, Gtk.Buildable {

    // Conflicting properties

    readonly window: Gtk.Window & Gdk.Window & Gdk.Window

    // Own fields of Gspell-1.Gspell.LanguageChooserDialog

    parent_instance: Gtk.Dialog & GObject.InitiallyUnowned

    // Conflicting methods

    /**
     * Activates the targets associated with the mnemonic.
     * @param keyval the mnemonic
     * @param modifier the modifiers
     * @returns %TRUE if the activation is done.
     */
    mnemonic_activate(keyval: number, modifier: Gdk.ModifierType): boolean

    // Overloads of mnemonic_activate

    /**
     * Emits the #GtkWidget::mnemonic-activate signal.
     * @param group_cycling %TRUE if there are other widgets with the same mnemonic
     * @returns %TRUE if the signal has been handled
     */
    mnemonic_activate(group_cycling: boolean): boolean
    /**
     * Emits the #GtkWidget::mnemonic-activate signal.
     * @param group_cycling %TRUE if there are other widgets with the same mnemonic
     * @returns %TRUE if the signal has been handled
     */
    mnemonic_activate(group_cycling: boolean): boolean
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string | null): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void

    // Class property signals of Gspell-1.Gspell.LanguageChooserDialog

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
    connect(sigName: "notify::language", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::language", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::language", ...args: any[]): void
    connect(sigName: "notify::language-code", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::language-code", callback: (($obj: LanguageChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::language-code", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class LanguageChooserDialog extends Gtk.Dialog {

    // Own properties of Gspell-1.Gspell.LanguageChooserDialog

    static name: string
    static $gtype: GObject.GType<LanguageChooserDialog>

    // Constructors of Gspell-1.Gspell.LanguageChooserDialog

    constructor(config?: LanguageChooserDialog.ConstructorProperties) 
    constructor(parent: Gtk.Window, current_language: Language | null, flags: Gtk.DialogFlags) 
    static new(parent: Gtk.Window, current_language: Language | null, flags: Gtk.DialogFlags): LanguageChooserDialog

    // Overloads of new

    /**
     * Creates a new dialog box.
     * 
     * Widgets should not be packed into this #GtkWindow
     * directly, but into the `vbox` and `action_area,` as described above.
     * @constructor 
     * @returns the new dialog as a #GtkWidget
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
     * @returns a new #GtkWindow.
     */
    static new(type: Gtk.WindowType): Gtk.Window
    _init(config?: LanguageChooserDialog.ConstructorProperties): void
}

module NavigatorTextView {

    // Constructor properties interface

    interface ConstructorProperties extends Navigator.ConstructorProperties, GObject.InitiallyUnowned.ConstructorProperties {

        // Own constructor properties of Gspell-1.Gspell.NavigatorTextView

        /**
         * The #GtkTextView. The buffer is not sufficient, the view is needed to
         * scroll to the misspelled words.
         */
        view?: Gtk.TextView | null
    }

}

interface NavigatorTextView extends Navigator {

    // Own properties of Gspell-1.Gspell.NavigatorTextView

    /**
     * The #GtkTextView. The buffer is not sufficient, the view is needed to
     * scroll to the misspelled words.
     */
    readonly view: Gtk.TextView

    // Own fields of Gspell-1.Gspell.NavigatorTextView

    parent_instance: GObject.InitiallyUnowned

    // Owm methods of Gspell-1.Gspell.NavigatorTextView

    get_view(): Gtk.TextView

    // Class property signals of Gspell-1.Gspell.NavigatorTextView

    connect(sigName: "notify::view", callback: (($obj: NavigatorTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::view", callback: (($obj: NavigatorTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::view", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class NavigatorTextView extends GObject.InitiallyUnowned {

    // Own properties of Gspell-1.Gspell.NavigatorTextView

    static name: string
    static $gtype: GObject.GType<NavigatorTextView>

    // Constructors of Gspell-1.Gspell.NavigatorTextView

    constructor(config?: NavigatorTextView.ConstructorProperties) 
    _init(config?: NavigatorTextView.ConstructorProperties): void
    static new(view: Gtk.TextView): Navigator
}

module TextBuffer {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gspell-1.Gspell.TextBuffer

        /**
         * The #GtkTextBuffer.
         */
        buffer?: Gtk.TextBuffer | null
        /**
         * The #GspellChecker.
         */
        spell_checker?: Checker | null
        /**
         * The #GspellChecker.
         */
        spellChecker?: Checker | null
    }

}

interface TextBuffer {

    // Own properties of Gspell-1.Gspell.TextBuffer

    /**
     * The #GtkTextBuffer.
     */
    readonly buffer: Gtk.TextBuffer
    /**
     * The #GspellChecker.
     */
    spell_checker: Checker
    /**
     * The #GspellChecker.
     */
    spellChecker: Checker

    // Owm methods of Gspell-1.Gspell.TextBuffer

    get_buffer(): Gtk.TextBuffer
    get_spell_checker(): Checker | null
    /**
     * Sets a #GspellChecker to a #GspellTextBuffer. The `gspell_buffer` will own a
     * reference to `spell_checker,` so you can release your reference to
     * `spell_checker` if you no longer need it.
     * @param spell_checker a #GspellChecker, or %NULL to unset the spell   checker.
     */
    set_spell_checker(spell_checker: Checker | null): void

    // Class property signals of Gspell-1.Gspell.TextBuffer

    connect(sigName: "notify::buffer", callback: (($obj: TextBuffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer", callback: (($obj: TextBuffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::spell-checker", callback: (($obj: TextBuffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spell-checker", callback: (($obj: TextBuffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spell-checker", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TextBuffer extends GObject.Object {

    // Own properties of Gspell-1.Gspell.TextBuffer

    static name: string
    static $gtype: GObject.GType<TextBuffer>

    // Constructors of Gspell-1.Gspell.TextBuffer

    constructor(config?: TextBuffer.ConstructorProperties) 
    _init(config?: TextBuffer.ConstructorProperties): void
    /**
     * Returns the #GspellTextBuffer of `gtk_buffer`. The returned object is
     * guaranteed to be the same for the lifetime of `gtk_buffer`.
     * @param gtk_buffer a #GtkTextBuffer.
     * @returns the #GspellTextBuffer of @gtk_buffer.
     */
    static get_from_gtk_text_buffer(gtk_buffer: Gtk.TextBuffer): TextBuffer
}

module TextView {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gspell-1.Gspell.TextView

        /**
         * When the context menu is shown, whether to add a sub-menu to select
         * the language for the spell checking.
         */
        enable_language_menu?: boolean | null
        /**
         * Whether the inline spell checking is enabled.
         */
        inline_spell_checking?: boolean | null
        /**
         * The #GtkTextView.
         */
        view?: Gtk.TextView | null
        /**
         * When the context menu is shown, whether to add a sub-menu to select
         * the language for the spell checking.
         */
        enableLanguageMenu?: boolean | null
        /**
         * Whether the inline spell checking is enabled.
         */
        inlineSpellChecking?: boolean | null
    }

}

interface TextView {

    // Own properties of Gspell-1.Gspell.TextView

    /**
     * When the context menu is shown, whether to add a sub-menu to select
     * the language for the spell checking.
     */
    enable_language_menu: boolean
    /**
     * When the context menu is shown, whether to add a sub-menu to select
     * the language for the spell checking.
     */
    enableLanguageMenu: boolean
    /**
     * Whether the inline spell checking is enabled.
     */
    inline_spell_checking: boolean
    /**
     * Whether the inline spell checking is enabled.
     */
    inlineSpellChecking: boolean
    /**
     * The #GtkTextView.
     */
    readonly view: Gtk.TextView

    // Own fields of Gspell-1.Gspell.TextView

    parent_instance: GObject.Object

    // Owm methods of Gspell-1.Gspell.TextView

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
    basic_setup(): void
    get_enable_language_menu(): boolean
    get_inline_spell_checking(): boolean
    get_view(): Gtk.TextView
    /**
     * Sets whether to enable the language context menu. If enabled, doing a right
     * click on the #GtkTextView will show a sub-menu to choose the language for the
     * spell checking. If another language is chosen, it changes the
     * #GspellChecker:language property of the #GspellTextBuffer:spell-checker of
     * the #GtkTextView:buffer of the #GspellTextView:view.
     * @param enable_language_menu whether to enable the language context menu.
     */
    set_enable_language_menu(enable_language_menu: boolean): void
    /**
     * Enables or disables the inline spell checking.
     * @param enable the new state.
     */
    set_inline_spell_checking(enable: boolean): void

    // Class property signals of Gspell-1.Gspell.TextView

    connect(sigName: "notify::enable-language-menu", callback: (($obj: TextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-language-menu", callback: (($obj: TextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-language-menu", ...args: any[]): void
    connect(sigName: "notify::inline-spell-checking", callback: (($obj: TextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inline-spell-checking", callback: (($obj: TextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::inline-spell-checking", ...args: any[]): void
    connect(sigName: "notify::view", callback: (($obj: TextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::view", callback: (($obj: TextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::view", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TextView extends GObject.Object {

    // Own properties of Gspell-1.Gspell.TextView

    static name: string
    static $gtype: GObject.GType<TextView>

    // Constructors of Gspell-1.Gspell.TextView

    constructor(config?: TextView.ConstructorProperties) 
    _init(config?: TextView.ConstructorProperties): void
    /**
     * Returns the #GspellTextView of `gtk_view`. The returned object is guaranteed
     * to be the same for the lifetime of `gtk_view`.
     * @param gtk_view a #GtkTextView.
     * @returns the #GspellTextView of @gtk_view.
     */
    static get_from_gtk_text_view(gtk_view: Gtk.TextView): TextView
}

interface CheckerClass {

    // Own fields of Gspell-1.Gspell.CheckerClass

    parent_class: GObject.ObjectClass
    word_added_to_personal: (checker: Checker, word: string | null) => void
    word_added_to_session: (checker: Checker, word: string | null) => void
    session_cleared: (checker: Checker) => void
    padding: any[]
}

abstract class CheckerClass {

    // Own properties of Gspell-1.Gspell.CheckerClass

    static name: string
}

interface CheckerDialogClass {

    // Own fields of Gspell-1.Gspell.CheckerDialogClass

    parent_class: Gtk.DialogClass
    padding: any[]
}

abstract class CheckerDialogClass {

    // Own properties of Gspell-1.Gspell.CheckerDialogClass

    static name: string
}

interface EntryBufferClass {

    // Own fields of Gspell-1.Gspell.EntryBufferClass

    parent_class: GObject.ObjectClass
}

abstract class EntryBufferClass {

    // Own properties of Gspell-1.Gspell.EntryBufferClass

    static name: string
}

interface EntryClass {

    // Own fields of Gspell-1.Gspell.EntryClass

    parent_class: GObject.ObjectClass
}

abstract class EntryClass {

    // Own properties of Gspell-1.Gspell.EntryClass

    static name: string
}

interface Language {

    // Owm methods of Gspell-1.Gspell.Language

    /**
     * Compares alphabetically two languages by their name, as returned by
     * gspell_language_get_name().
     * @param language_b another #GspellLanguage.
     * @returns an integer less than, equal to, or greater than zero, if @language_a is <, == or > than @language_b.
     */
    compare(language_b: Language): number
    /**
     * Used by language bindings.
     * @returns a copy of @lang.
     */
    copy(): Language
    /**
     * Used by language bindings.
     */
    free(): void
    get_code(): string | null
    /**
     * Returns the `language` name translated to the current locale. For example
     * "French (Belgium)" is returned if the current locale is in English and the
     * `language` code is fr_BE.
     * @returns the @language name.
     */
    get_name(): string | null
}

class Language {

    // Own properties of Gspell-1.Gspell.Language

    static name: string

    // Constructors of Gspell-1.Gspell.Language

    static get_available(): Language[]
    /**
     * Finds the best available language based on the current locale.
     * @returns the default #GspellLanguage, or %NULL if no dictionaries are available.
     */
    static get_default(): Language | null
    static lookup(language_code: string | null): Language | null
}

interface LanguageChooserButtonClass {

    // Own fields of Gspell-1.Gspell.LanguageChooserButtonClass

    parent_class: Gtk.ButtonClass
    padding: any[]
}

abstract class LanguageChooserButtonClass {

    // Own properties of Gspell-1.Gspell.LanguageChooserButtonClass

    static name: string
}

interface LanguageChooserDialogClass {

    // Own fields of Gspell-1.Gspell.LanguageChooserDialogClass

    parent_class: Gtk.DialogClass
    padding: any[]
}

abstract class LanguageChooserDialogClass {

    // Own properties of Gspell-1.Gspell.LanguageChooserDialogClass

    static name: string
}

interface LanguageChooserInterface {

    // Own fields of Gspell-1.Gspell.LanguageChooserInterface

    parent_interface: GObject.TypeInterface
    get_language_full: (chooser: LanguageChooser, default_language: boolean) => Language
    set_language: (chooser: LanguageChooser, language: Language | null) => void
}

abstract class LanguageChooserInterface {

    // Own properties of Gspell-1.Gspell.LanguageChooserInterface

    static name: string
}

interface NavigatorInterface {

    // Own fields of Gspell-1.Gspell.NavigatorInterface

    parent_interface: GObject.TypeInterface
    goto_next: (navigator: Navigator) => [ /* returnType */ boolean, /* word */ string | null, /* spell_checker */ Checker ]
    change: (navigator: Navigator, word: string | null, change_to: string | null) => void
    change_all: (navigator: Navigator, word: string | null, change_to: string | null) => void
}

abstract class NavigatorInterface {

    // Own properties of Gspell-1.Gspell.NavigatorInterface

    static name: string
}

interface NavigatorTextViewClass {

    // Own fields of Gspell-1.Gspell.NavigatorTextViewClass

    parent_class: GObject.InitiallyUnownedClass
    padding: any[]
}

abstract class NavigatorTextViewClass {

    // Own properties of Gspell-1.Gspell.NavigatorTextViewClass

    static name: string
}

interface TextBufferClass {

    // Own fields of Gspell-1.Gspell.TextBufferClass

    parent_class: GObject.ObjectClass
}

abstract class TextBufferClass {

    // Own properties of Gspell-1.Gspell.TextBufferClass

    static name: string
}

interface TextViewClass {

    // Own fields of Gspell-1.Gspell.TextViewClass

    parent_class: GObject.ObjectClass
    padding: any[]
}

abstract class TextViewClass {

    // Own properties of Gspell-1.Gspell.TextViewClass

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
const __version__: string
}

export default Gspell;
// END