/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gucharmap-2.90-ambient.d.ts';
import './gucharmap-2.90-import.d.ts';
/**
 * Gucharmap-2.90
 */

import type Pango from '@girs/pango-1.0';
import type cairo from '@girs/cairo-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Atk from '@girs/atk-1.0';

export namespace Gucharmap {
    enum CharmapPageType {
        CHARTABLE,
        DETAILS,
    }
    enum UnicodeVersion {
        UNASSIGNED,
        '1_1',
        '2_0',
        '2_1',
        '3_0',
        '3_1',
        '3_2',
        '4_0',
        '4_1',
        '5_0',
        '5_1',
        '5_2',
        '6_0',
        '6_1',
        '6_2',
        '6_3',
        '7_0',
        '8_0',
        LATEST,
    }
    function get_nameslist_colons(uc: number): string[];
    function get_nameslist_equals(uc: number): string[];
    function get_nameslist_exes(uc: number): number;
    function get_nameslist_pounds(uc: number): string[];
    function get_nameslist_stars(uc: number): string[];
    function get_unicode_category_name(uc: number): string;
    function get_unicode_data_name(uc: number): string;
    function get_unicode_data_name_count(): number;
    function get_unicode_kCantonese(uc: number): string;
    function get_unicode_kDefinition(uc: number): string;
    function get_unicode_kJapaneseKun(uc: number): string;
    function get_unicode_kJapaneseOn(uc: number): string;
    function get_unicode_kKorean(uc: number): string;
    function get_unicode_kMandarin(uc: number): string;
    function get_unicode_kTang(uc: number): string;
    function get_unicode_name(uc: number): string;
    function get_unicode_version(uc: number): UnicodeVersion;
    function get_unihan_count(): number;
    /**
     * Determines if a given character is assigned in the Unicode
     * standard.
     * @param uc a Unicode character
     * @returns %TRUE if the character has an assigned value
     */
    function unichar_isdefined(uc: number): boolean;
    /**
     * Determines whether a character is printable and not a space
     * (returns %FALSE for control characters, format characters, and
     * spaces). g_unichar_isprint() is similar, but returns %TRUE for
     * spaces. Given some UTF-8 text, obtain a character value with
     * g_utf8_get_char().
     * @param uc a Unicode character
     * @returns %TRUE if @c is printable unless it's a space
     */
    function unichar_isgraph(uc: number): boolean;
    /**
     * Converts a single character to UTF-8 suitable for rendering. Check the
     * source to see what this means. ;-)
     * @param uc a unicode character
     * @param outbuf output buffer, must have at least 10 bytes of space.          If %NULL, the length will be computed and returned          and nothing will be written to @outbuf.
     * @returns number of bytes written
     */
    function unichar_to_printable_utf8(uc: number, outbuf: string): number;
    /**
     * Classifies a Unicode character by type.
     * @param uc a Unicode character
     * @returns the type of the character.
     */
    function unichar_type(uc: number): GLib.UnicodeType;
    function unichar_validate(uc: number): boolean;
    /**
     * Determines a character that's commonly used in the current
     * locale's script.
     * @returns a unicode character
     */
    function unicode_get_locale_character(): number;
    function unicode_get_script_for_char(wc: number): string;
    /**
     * Returns an array of untranslated script names.
     *
     * The strings in the array are owned by gucharmap and should not be
     * modified or free; the array itself however is allocated and should
     * be freed with g_free().
     * @returns a newly allocated %NULL-terminated array of strings
     */
    function unicode_list_scripts(): string[];
    function unicode_version_to_string(version: UnicodeVersion): string;
    module BlockChaptersModel {
        // Constructor properties interface
    }

    class BlockChaptersModel extends ChaptersModel {
        // Constructors of Gucharmap-2.90.BlockChaptersModel

        static ['new'](): BlockChaptersModel;
    }

    module BlockCodepointList {
        // Constructor properties interface
    }

    class BlockCodepointList extends CodepointList {
        // Own properties of Gucharmap-2.90.BlockCodepointList

        first_codepoint: number;
        firstCodepoint: number;
        last_codepoint: number;
        lastCodepoint: number;

        // Constructors of Gucharmap-2.90.BlockCodepointList

        static ['new'](start: number, end: number): BlockCodepointList;
    }

    module ChaptersModel {
        // Constructor properties interface
    }

    class ChaptersModel extends Gtk.ListStore {
        // Owm methods of Gucharmap-2.90.ChaptersModel

        character_to_iter(wc: number): boolean;
        get_book_codepoint_list(): CodepointList;
        /**
         * Creates a new #GucharmapCodepointList representing the characters in the
         * current chapter.
         * @param iter a #GtkTreeIter
         * @returns the newly-created #GucharmapCodepointList, or NULL if there is no chapter selected. The caller should release the result with g_object_unref() when finished.
         */
        get_codepoint_list(iter: Gtk.TreeIter): CodepointList;
        get_title(): string;
        id_to_iter(id: string): boolean;
    }

    module ChaptersView {
        // Constructor properties interface
    }

    class ChaptersView extends Gtk.TreeView {
        // Constructors of Gucharmap-2.90.ChaptersView

        static ['new'](): ChaptersView;

        // Owm methods of Gucharmap-2.90.ChaptersView

        get_book_codepoint_list(): CodepointList;
        /**
         * Creates a new #GucharmapCodepointList representing the characters in the
         * current chapter.
         * @returns the newly-created #GucharmapCodepointList, or NULL if there is no chapter selected. The caller should release the result with g_object_unref() when finished.
         */
        get_codepoint_list(): CodepointList;
        /**
         * Gets the #GucharmapChaptersModel of #view.
         * @returns the #GucharmapChaptersModel
         */
        get_model(): ChaptersModel;
        get_selected(): string;
        next(): void;
        /**
         * Moves to the previous chapter if applicable.
         */
        previous(): void;
        select_character(wc: number): boolean;
        select_locale(): boolean;
        set_model(model: ChaptersModel): void;
        set_selected(name: string): boolean;
    }

    module Charmap {
        // Signal callback interfaces

        interface LinkClicked {
            (object: number, p0: number): void;
        }

        interface StatusMessage {
            (object: string): void;
        }

        // Constructor properties interface
    }

    class Charmap extends Gtk.Paned {
        // Own properties of Gucharmap-2.90.Charmap

        active_chapter: string;
        activeChapter: string;
        active_character: number;
        activeCharacter: number;
        readonly active_codepoint_list: CodepointList;
        readonly activeCodepointList: CodepointList;
        active_page: number;
        activePage: number;
        chapters_model: ChaptersModel;
        chaptersModel: ChaptersModel;
        font_desc: Pango.FontDescription;
        fontDesc: Pango.FontDescription;
        /**
         * Whether font fallback is enabled.
         */
        font_fallback: boolean;
        /**
         * Whether font fallback is enabled.
         */
        fontFallback: boolean;
        snap_power_2: boolean;
        snapPower2: boolean;

        // Constructors of Gucharmap-2.90.Charmap

        static ['new'](): Charmap;

        // Owm methods of Gucharmap-2.90.Charmap

        get_active_chapter(): string;
        get_active_character(): number;
        /**
         * Gets the `GucharmapCodepointList` associated with the #GucharmapChartable of
         * `charmap`.
         * @returns the #GucharmapCodepointList
         */
        get_active_codepoint_list(): CodepointList;
        get_active_page(): number;
        get_book_codepoint_list(): CodepointList;
        /**
         * Gets the #GucharmapChaptersModel associated with the #GucharmapChaptersView
         * of `charmap`.
         * @returns a #GucharmapChaptersModel
         */
        get_chapters_model(): ChaptersModel;
        /**
         * Gets the #GucharmapChaptersView of `charmap`
         * @returns the #GucharmapChaptersView
         */
        get_chapters_view(): ChaptersView;
        get_chapters_visible(): boolean;
        get_chartable(): Chartable;
        get_font_desc(): Pango.FontDescription;
        get_font_fallback(): boolean;
        get_page_visible(page: number): boolean;
        /**
         * Returns whether the number of columns the character table shows is
         * always a power of 2.
         */
        get_snap_pow2(): boolean;
        next_chapter(): void;
        previous_chapter(): void;
        set_active_chapter(chapter: string): void;
        set_active_character(uc: number): void;
        set_active_page(page: number): void;
        set_chapters_model(model: ChaptersModel): void;
        set_chapters_visible(visible: boolean): void;
        /**
         * Sets `font_desc` as the font to use to display the character table.
         * @param font_desc a #PangoFontDescription
         */
        set_font_desc(font_desc: Pango.FontDescription): void;
        set_font_fallback(enable_font_fallback: boolean): void;
        set_page_visible(page: number, visible: boolean): void;
        /**
         * Sets whether the number columns the character table shows should
         * always be a power of 2.
         * @param snap whether to enable or disable snapping
         */
        set_snap_pow2(snap: boolean): void;
    }

    module Chartable {
        // Signal callback interfaces

        interface Activate {
            (): void;
        }

        interface CopyClipboard {
            (): void;
        }

        interface MoveCursor {
            (object: Gtk.MovementStep, p0: number): boolean;
        }

        interface PasteClipboard {
            (): void;
        }

        interface StatusMessage {
            (object: string): void;
        }

        // Constructor properties interface
    }

    class Chartable extends Gtk.DrawingArea {
        // Own properties of Gucharmap-2.90.Chartable

        active_character: number;
        activeCharacter: number;
        codepoint_list: CodepointList;
        codepointList: CodepointList;
        font_desc: Pango.FontDescription;
        fontDesc: Pango.FontDescription;
        /**
         * Whether font fallback is enabled.
         */
        font_fallback: boolean;
        /**
         * Whether font fallback is enabled.
         */
        fontFallback: boolean;
        snap_power_2: boolean;
        snapPower2: boolean;
        zoom_enabled: boolean;
        zoomEnabled: boolean;
        readonly zoom_showing: boolean;
        readonly zoomShowing: boolean;

        // Constructors of Gucharmap-2.90.Chartable

        static ['new'](): Chartable;

        // Owm methods of Gucharmap-2.90.Chartable

        get_active_character(): number;
        get_codepoint_list(): CodepointList;
        get_font_desc(): Pango.FontDescription;
        get_font_fallback(): boolean;
        /**
         * Returns whether the number of columns the character table shows is
         * always a power of 2.
         */
        get_snap_pow2(): boolean;
        get_zoom_enabled(): boolean;
        /**
         * Sets `wc` as the selected character.
         * @param wc a unicode character (UTF-32)
         */
        set_active_character(wc: number): void;
        /**
         * Sets the codepoint list to show in the character table.
         * @param codepoint_list a #GucharmapCodepointList
         */
        set_codepoint_list(codepoint_list: CodepointList): void;
        /**
         * Sets `font_desc` as the font to use to display the character table.
         * @param font_desc a #PangoFontDescription
         */
        set_font_desc(font_desc: Pango.FontDescription): void;
        set_font_fallback(enable_font_fallback: boolean): void;
        /**
         * Sets whether the number columns the character table shows should
         * always be a power of 2.
         * @param snap whether to enable or disable snapping
         */
        set_snap_pow2(snap: boolean): void;
        /**
         * Enables or disables the zoom popup.
         * @param enabled whether to enable zoom mode
         */
        set_zoom_enabled(enabled: boolean): void;
    }

    module ChartableAccessible {
        // Constructor properties interface
    }

    class ChartableAccessible extends Atk.NoOpObject {
        // Constructors of Gucharmap-2.90.ChartableAccessible

        static ['new'](chartable: Chartable): ChartableAccessible;
    }

    module ChartableCellAccessible {
        // Constructor properties interface
    }

    class ChartableCellAccessible extends Atk.Object {
        // Own fields of Gucharmap-2.90.ChartableCellAccessible

        widget: Gtk.Widget;
        index: number;
        state_set: Atk.StateSet;
        activate_description: string;
        action_idle_handler: number;

        // Constructors of Gucharmap-2.90.ChartableCellAccessible

        static ['new'](): ChartableCellAccessible;

        // Owm methods of Gucharmap-2.90.ChartableCellAccessible

        add_state(state_type: Atk.StateType, emit_signal: boolean): boolean;
        initialise(widget: Gtk.Widget, parent: Atk.Object, index: number): void;
        remove_state(state_type: Atk.StateType, emit_signal: boolean): boolean;
    }

    module CodepointList {
        // Constructor properties interface
    }

    abstract class CodepointList extends GObject.Object {
        // Owm methods of Gucharmap-2.90.CodepointList

        get_char(index: number): number;
        get_index(wc: number): number;
        get_last_index(): number;
    }

    module ScriptChaptersModel {
        // Constructor properties interface
    }

    class ScriptChaptersModel extends ChaptersModel {
        // Constructors of Gucharmap-2.90.ScriptChaptersModel

        static ['new'](): ScriptChaptersModel;
    }

    module ScriptCodepointList {
        // Constructor properties interface
    }

    class ScriptCodepointList extends CodepointList {
        // Constructors of Gucharmap-2.90.ScriptCodepointList

        static ['new'](): ScriptCodepointList;

        // Owm methods of Gucharmap-2.90.ScriptCodepointList

        /**
         * Appends the characters in `script` to the codepoint list.
         * @param script the script name
         * @returns %TRUE on success, %FALSE if there is no such script, in which case the codepoint list is not changed.
         */
        append_script(script: string): boolean;
        /**
         * Sets the script for the codepoint list.
         * @param script the script name
         * @returns %TRUE on success, %FALSE if there is no such script, in which case the script is not changed.
         */
        set_script(script: string): boolean;
        /**
         * Sets multiple scripts for the codepoint list. Codepoints are sorted
         * according to their order in `scripts`.
         * @param scripts NULL-terminated array of script names
         * @returns %TRUE on success, %FALSE if any of the scripts don’t exist, in which case the script is not changed.
         */
        set_scripts(scripts: string): boolean;
    }

    class BlockChaptersModelClass {}

    class BlockChaptersModelPrivate {}

    class BlockCodepointListClass {}

    class BlockCodepointListPrivate {}

    class ChaptersModelClass {
        // Own fields of Gucharmap-2.90.ChaptersModelClass

        title: string;
    }

    class ChaptersModelPrivate {
        // Own fields of Gucharmap-2.90.ChaptersModelPrivate

        book_list: CodepointList;
    }

    class ChaptersViewClass {}

    class ChaptersViewPrivate {}

    class CharmapClass {}

    class CharmapPrivate {}

    class ChartableAccessibleClass {}

    class ChartableCellAccessibleClass {}

    class ChartableClass {}

    class ChartablePrivate {
        // Own fields of Gucharmap-2.90.ChartablePrivate

        vadjustment: Gtk.Adjustment;
        vadjustment_changed_handler_id: number;
        hadjustment: Gtk.Adjustment;
        hscroll_policy: number;
        vscroll_policy: number;
        minimal_column_width: number;
        minimal_row_height: number;
        n_padded_columns: number;
        n_padded_rows: number;
        rows: number;
        cols: number;
        page_size: number;
        page_first_cell: number;
        active_cell: number;
        pango_layout: Pango.Layout;
        zoom_window: Gtk.Widget;
        zoom_image_width: number;
        zoom_image_height: number;
        click_x: number;
        click_y: number;
        codepoint_list: CodepointList;
        last_cell: number;
        codepoint_list_changed: boolean;
        snap_pow2_enabled: number;
        zoom_mode_enabled: number;
        font_fallback: number;
    }

    class CodepointListClass {}

    class CodepointListPrivate {}

    class ScriptChaptersModelClass {}

    class ScriptChaptersModelPrivate {}

    class ScriptCodepointListClass {}

    class ScriptCodepointListPrivate {}

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

export default Gucharmap;
// END
