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
import type Pango from '@girs/pango-1.0';
import type cairo from 'cairo';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace Gc {
    /**
     * Gc-1.0
     */

    export namespace Category {
        export const $gtype: GObject.GType<Category>;
    }

    enum Category {
        NONE,
        LETTER,
        LETTER_PUNCTUATION,
        LETTER_ARROW,
        LETTER_BULLET,
        LETTER_PICTURE,
        LETTER_CURRENCY,
        LETTER_MATH,
        LETTER_LATIN,
        EMOJI,
        EMOJI_SMILEYS,
        EMOJI_PEOPLE,
        EMOJI_ANIMALS,
        EMOJI_FOOD,
        EMOJI_ACTIVITIES,
        EMOJI_TRAVEL,
        EMOJI_OBJECTS,
        EMOJI_SYMBOLS,
        EMOJI_FLAGS,
    }

    export namespace SearchError {
        export const $gtype: GObject.GType<SearchError>;
    }

    enum SearchError {
        FAILED,
        INVALID_STATE,
    }
    function character_is_composite(chars: number[]): boolean;
    function character_is_invisible(chars: number[]): boolean;
    function character_name(chars: number[]): string | null;
    function get_current_language(): string;
    function get_scripts_for_language(language: string): GLib.UnicodeScript[];
    function search_result_get(result: SearchResult, index: number): string;
    function search_result_get_type(): GObject.GType;
    interface SearchFunc {
        (uc: number): boolean;
    }

    export namespace SearchFlag {
        export const $gtype: GObject.GType<SearchFlag>;
    }

    enum SearchFlag {
        NONE,
        WORD,
    }
    namespace SearchContext {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::criteria': (pspec: GObject.ParamSpec) => void;
            'notify::flags': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            criteria: SearchCriteria;
            flags: SearchFlag;
        }
    }

    class SearchContext extends GObject.Object {
        static $gtype: GObject.GType<SearchContext>;

        // Properties

        set criteria(val: SearchCriteria);
        set flags(val: SearchFlag);
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: SearchContext.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SearchContext.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](criteria: SearchCriteria, flags: SearchFlag): SearchContext;

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

        is_finished(): boolean;
        search(max_matches: number, cancellable?: Gio.Cancellable | null): Promise<SearchResult>;
        search(
            max_matches: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        search(
            max_matches: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<SearchResult> | void;
        search_finish(result: Gio.AsyncResult): SearchResult;
    }

    type SearchContextClass = typeof SearchContext;
    class SearchCriteria {
        static $gtype: GObject.GType<SearchCriteria>;

        // Constructors

        constructor(category: Category);
        _init(...args: any[]): void;

        static new_category(category: Category): SearchCriteria;

        static new_keywords(keywords: string[]): SearchCriteria;

        static new_related(character: string): SearchCriteria;

        static new_scripts(scripts: GLib.UnicodeScript[]): SearchCriteria;
    }

    type SearchResult = GLib.PtrArray;
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

export default Gc;

// END
