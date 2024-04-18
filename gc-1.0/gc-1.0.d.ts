/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gc-1.0-ambient.d.ts';

/**
 * Gc-1.0
 */

import type Pango from '@girs/pango-1.0';
import type cairo from '@girs/cairo-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';

export namespace Gc {
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
    enum SearchFlag {
        NONE,
        WORD,
    }
    module SearchContext {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            criteria: SearchCriteria;
            flags: SearchFlag;
        }
    }

    class SearchContext extends GObject.Object {
        static $gtype: GObject.GType<SearchContext>;

        // Own properties of Gc.SearchContext

        set criteria(val: SearchCriteria);
        set flags(val: SearchFlag);

        // Constructors of Gc.SearchContext

        constructor(properties?: Partial<SearchContext.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](criteria: SearchCriteria, flags: SearchFlag): SearchContext;

        // Own methods of Gc.SearchContext

        is_finished(): boolean;
        search(
            max_matches: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        search_finish(result: Gio.AsyncResult): SearchResult;
    }

    type SearchContextClass = typeof SearchContext;
    class SearchCriteria {
        static $gtype: GObject.GType<SearchCriteria>;

        // Constructors of Gc.SearchCriteria

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
