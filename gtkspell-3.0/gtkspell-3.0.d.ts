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

export namespace GtkSpell {
    /**
     * GtkSpell-3.0
     */

    /**
     * Error codes used for GtkSpell errors.
     * @gir-type Struct
     */
    class Error extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        /**
         * Error code for backend errors
         */
        static BACKEND: number;

        // Constructors

        constructor(options: { message: string; code: number });

        // Static methods

        static quark(): GLib.Quark;
    }

    function error_quark(): GLib.Quark;
    namespace Checker {
        // Signal signatures
        interface SignalSignatures extends GObject.InitiallyUnowned.SignalSignatures {
            /**
             * The ::language-changed signal is emitted when the user selects
             * a new spelling language from the context menu.
             * @signal
             * @run-last
             */
            'language-changed': (arg0: string) => void;
            'notify::decode-language-codes': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.InitiallyUnowned.ConstructorProps {
            decode_language_codes: boolean;
            decodeLanguageCodes: boolean;
        }
    }

    /**
     * The {@link GtkSpell.Checker} struct contains only private fields.
     * @gir-type Class
     */
    class Checker extends GObject.InitiallyUnowned {
        static $gtype: GObject.GType<Checker>;

        // Properties

        get decode_language_codes(): boolean;
        set decode_language_codes(val: boolean);
        get decodeLanguageCodes(): boolean;
        set decodeLanguageCodes(val: boolean);

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

        static ['new'](): Checker;

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

        // Static methods

        /**
         * Translates the language code to a human readable format
         * (i.e. "en_US" -> "English (United States)").
         * Note: If the iso-codes package is not available, the unchanged code is
         * returned.
         * @param lang The language locale specifier (i.e. "en_US").
         */
        static decode_language_code(lang: string): string;
        /**
         * Retrieves the {@link GtkSpell.Checker} object attached to a text view.
         * @param view A {@link Gtk.TextView}.
         */
        static get_from_text_view(view: Gtk.TextView): Checker;
        /**
         * Requests the list of available languages from the enchant broker.
         */
        static get_language_list(): string[];

        // Virtual methods

        /**
         * @param new_lang
         * @virtual
         */
        vfunc_language_changed(new_lang: string): void;

        // Methods

        /**
         * Add the specified word to the user dictionary.
         * @param word The word to add to the user dictionary.
         */
        add_to_dictionary(word: string): void;
        /**
         * Attach {@link GtkSpell.Checker} object to `view`.
         *
         * Note: Please read the tutorial section of the documentation to make sure
         * you don't leak references!
         * @param view The {@link Gtk.TextView} to attach to.
         * @returns TRUE on success, FALSE on failure.
         */
        attach(view: Gtk.TextView): boolean;
        /**
         * Check the specified word.
         * @param word The word to check.
         * @returns TRUE if the word is correctly spelled, FALSE otherwise.
         */
        check_word(word: string): boolean;
        /**
         * Detaches this {@link GtkSpell.Checker} from its {@link Gtk.TextView}.  Use
         * gtk_spell_checker_get_from_text_view () to retrieve a {@link GtkSpell.Checker} from
         * a {@link Gtk.TextView}. If the {@link GtkSpell.Checker} is not attached to any {@link Gtk.TextView},
         * the function silently exits.
         *
         * Note: if the {@link GtkSpell.Checker} is owned by the {@link Gtk.TextView}, you must
         * take a reference to it to prevent it from being automatically destroyed.
         * Please read the tutorial section of the documentation!
         */
        detach(): void;
        /**
         * Fetches the current language.
         * @returns the current language. This string is owned by the spell object and must not be modified or freed.
         */
        get_language(): string;
        /**
         * Retreives a list of spelling suggestions for the specified word.
         * @param word The word for which to fetch suggestions
         * @returns the list of spelling suggestions for the specified word, or NULL if there are no suggestions.
         */
        get_suggestions(word: string): string[];
        /**
         * Retrieves a submenu of replacement spellings, or NULL if the word at `iter` is
         * not misspelt.
         * @param iter Textiter of position in buffer to be corrected if necessary.
         * @returns the {@link Gtk.Menu} widget, or `null` if there is no need for a menu
         */
        get_suggestions_menu(iter: Gtk.TextIter): Gtk.Widget;
        /**
         * Add the specified word to the user ignore list.
         * @param word The word to add to the user ignore list.
         */
        ignore_word(word: string): void;
        /**
         * Recheck the spelling in the entire buffer.
         */
        recheck_all(): void;
        /**
         * Set the language on `spell` to `lang`, possibily returning an error in
         * `error`.
         * @param lang The language to use, as a locale specifier (i.e. "en_US"). If `NULL`, attempt to use the default system locale (LANG).
         * @returns FALSE if there was an error.
         */
        set_language(lang?: string | null): boolean;
    }

    /**
     * @gir-type Alias
     */
    type CheckerClass = typeof Checker;
    /**
     * @gir-type Struct
     */
    abstract class CheckerPrivate {
        static $gtype: GObject.GType<CheckerPrivate>;
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

export default GtkSpell;

// END
