
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */
/**
 * Gucharmap-2.90
 */

import type Pango from '@girs/pango-1.0';
import type cairo from '@girs/cairo-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
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
    TODO_1_1,
    TODO_2_0,
    TODO_2_1,
    TODO_3_0,
    TODO_3_1,
    TODO_3_2,
    TODO_4_0,
    TODO_4_1,
    TODO_5_0,
    TODO_5_1,
    TODO_5_2,
    TODO_6_0,
    TODO_6_1,
    TODO_6_2,
    TODO_6_3,
    TODO_7_0,
    TODO_8_0,
    LATEST,
}
function get_nameslist_colons(uc: string): string[]
function get_nameslist_equals(uc: string): string[]
function get_nameslist_exes(uc: string): string
function get_nameslist_pounds(uc: string): string[]
function get_nameslist_stars(uc: string): string[]
function get_unicode_category_name(uc: string): string | null
function get_unicode_data_name(uc: string): string | null
function get_unicode_data_name_count(): number
function get_unicode_kCantonese(uc: string): string | null
function get_unicode_kDefinition(uc: string): string | null
function get_unicode_kJapaneseKun(uc: string): string | null
function get_unicode_kJapaneseOn(uc: string): string | null
function get_unicode_kKorean(uc: string): string | null
function get_unicode_kMandarin(uc: string): string | null
function get_unicode_kTang(uc: string): string | null
function get_unicode_name(uc: string): string | null
function get_unicode_version(uc: string): UnicodeVersion
function get_unihan_count(): number
/**
 * Determines if a given character is assigned in the Unicode
 * standard.
 * @param uc a Unicode character
 * @returns %TRUE if the character has an assigned value
 */
function unichar_isdefined(uc: string): boolean
/**
 * Determines whether a character is printable and not a space
 * (returns %FALSE for control characters, format characters, and
 * spaces). g_unichar_isprint() is similar, but returns %TRUE for
 * spaces. Given some UTF-8 text, obtain a character value with
 * g_utf8_get_char().
 * @param uc a Unicode character
 * @returns %TRUE if @c is printable unless it's a space
 */
function unichar_isgraph(uc: string): boolean
/**
 * Converts a single character to UTF-8 suitable for rendering. Check the
 * source to see what this means. ;-)
 * @param uc a unicode character
 * @param outbuf output buffer, must have at least 10 bytes of space.          If %NULL, the length will be computed and returned          and nothing will be written to `outbuf`.
 * @returns number of bytes written
 */
function unichar_to_printable_utf8(uc: string, outbuf: string | null): number
/**
 * Classifies a Unicode character by type.
 * @param uc a Unicode character
 * @returns the type of the character.
 */
function unichar_type(uc: string): GLib.UnicodeType
function unichar_validate(uc: string): boolean
/**
 * Determines a character that's commonly used in the current
 * locale's script.
 * @returns a unicode character
 */
function unicode_get_locale_character(): string
function unicode_get_script_for_char(wc: string): string | null
/**
 * Returns an array of untranslated script names.
 * 
 * The strings in the array are owned by gucharmap and should not be
 * modified or free; the array itself however is allocated and should
 * be freed with g_free().
 * @returns a newly allocated %NULL-terminated array of strings
 */
function unicode_list_scripts(): string[]
function unicode_version_to_string(version: UnicodeVersion): string | null
module BlockChaptersModel {

    // Constructor properties interface

    interface ConstructorProperties extends Gtk.Buildable.ConstructorProperties, Gtk.TreeDragDest.ConstructorProperties, Gtk.TreeDragSource.ConstructorProperties, Gtk.TreeModel.ConstructorProperties, Gtk.TreeSortable.ConstructorProperties, ChaptersModel.ConstructorProperties {
    }

}

interface BlockChaptersModel extends Gtk.Buildable, Gtk.TreeDragDest, Gtk.TreeDragSource, Gtk.TreeModel, Gtk.TreeSortable {

    // Own fields of Gucharmap-2.90.Gucharmap.BlockChaptersModel

    parent: ChaptersModel & GObject.Object

    // Class property signals of Gucharmap-2.90.Gucharmap.BlockChaptersModel

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class BlockChaptersModel extends ChaptersModel {

    // Own properties of Gucharmap-2.90.Gucharmap.BlockChaptersModel

    static name: string
    static $gtype: GObject.GType<BlockChaptersModel>

    // Constructors of Gucharmap-2.90.Gucharmap.BlockChaptersModel

    constructor(config?: BlockChaptersModel.ConstructorProperties) 
    constructor() 
    static new(): BlockChaptersModel

    // Overloads of new

    /**
     * Non-vararg creation function.  Used primarily by language bindings.
     * @constructor 
     * @param types an array of #GType types for the columns, from first to last
     * @returns a new #GtkListStore
     */
    static new(types: GObject.GType[]): Gtk.ListStore
    _init(config?: BlockChaptersModel.ConstructorProperties): void
}

module BlockCodepointList {

    // Constructor properties interface

    interface ConstructorProperties extends CodepointList.ConstructorProperties {

        // Own constructor properties of Gucharmap-2.90.Gucharmap.BlockCodepointList

        first_codepoint?: number | null
        last_codepoint?: number | null
    }

}

interface BlockCodepointList {

    // Own properties of Gucharmap-2.90.Gucharmap.BlockCodepointList

    readonly first_codepoint: number
    readonly last_codepoint: number

    // Own fields of Gucharmap-2.90.Gucharmap.BlockCodepointList

    parent_instance: CodepointList & GObject.Object

    // Class property signals of Gucharmap-2.90.Gucharmap.BlockCodepointList

    connect(sigName: "notify::first-codepoint", callback: (($obj: BlockCodepointList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-codepoint", callback: (($obj: BlockCodepointList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-codepoint", ...args: any[]): void
    connect(sigName: "notify::last-codepoint", callback: (($obj: BlockCodepointList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-codepoint", callback: (($obj: BlockCodepointList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-codepoint", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class BlockCodepointList extends CodepointList {

    // Own properties of Gucharmap-2.90.Gucharmap.BlockCodepointList

    static name: string
    static $gtype: GObject.GType<BlockCodepointList>

    // Constructors of Gucharmap-2.90.Gucharmap.BlockCodepointList

    constructor(config?: BlockCodepointList.ConstructorProperties) 
    /**
     * Creates a new codepoint list for the range `start`..`end`.
     * @constructor 
     * @param start the first codepoint
     * @param end the last codepoint
     * @returns the newly-created #GucharmapBlockCodepointList. Use g_object_unref() to free the result.
     */
    constructor(start: string, end: string) 
    /**
     * Creates a new codepoint list for the range `start`..`end`.
     * @constructor 
     * @param start the first codepoint
     * @param end the last codepoint
     * @returns the newly-created #GucharmapBlockCodepointList. Use g_object_unref() to free the result.
     */
    static new(start: string, end: string): BlockCodepointList
    _init(config?: BlockCodepointList.ConstructorProperties): void
}

module ChaptersModel {

    // Constructor properties interface

    interface ConstructorProperties extends Gtk.Buildable.ConstructorProperties, Gtk.TreeDragDest.ConstructorProperties, Gtk.TreeDragSource.ConstructorProperties, Gtk.TreeModel.ConstructorProperties, Gtk.TreeSortable.ConstructorProperties, Gtk.ListStore.ConstructorProperties {
    }

}

interface ChaptersModel extends Gtk.Buildable, Gtk.TreeDragDest, Gtk.TreeDragSource, Gtk.TreeModel, Gtk.TreeSortable {

    // Own fields of Gucharmap-2.90.Gucharmap.ChaptersModel

    parent_instance: Gtk.ListStore

    // Owm methods of Gucharmap-2.90.Gucharmap.ChaptersModel

    character_to_iter(wc: string): [ /* returnType */ boolean, /* iter */ Gtk.TreeIter ]
    get_book_codepoint_list(): CodepointList
    /**
     * Creates a new #GucharmapCodepointList representing the characters in the
     * current chapter.
     * @param iter a #GtkTreeIter
     * @returns the newly-created #GucharmapCodepointList, or NULL if there is no chapter selected. The caller should release the result with g_object_unref() when finished.
     */
    get_codepoint_list(iter: Gtk.TreeIter): CodepointList
    get_title(): string | null
    id_to_iter(id: string | null): [ /* returnType */ boolean, /* _iter */ Gtk.TreeIter ]

    // Own virtual methods of Gucharmap-2.90.Gucharmap.ChaptersModel

    vfunc_character_to_iter(wc: string): [ /* returnType */ boolean, /* iter */ Gtk.TreeIter ]
    vfunc_get_book_codepoint_list(): CodepointList
    /**
     * Creates a new #GucharmapCodepointList representing the characters in the
     * current chapter.
     * @virtual 
     * @param iter a #GtkTreeIter
     * @returns the newly-created #GucharmapCodepointList, or NULL if there is no chapter selected. The caller should release the result with g_object_unref() when finished.
     */
    vfunc_get_codepoint_list(iter: Gtk.TreeIter): CodepointList

    // Class property signals of Gucharmap-2.90.Gucharmap.ChaptersModel

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ChaptersModel extends Gtk.ListStore {

    // Own properties of Gucharmap-2.90.Gucharmap.ChaptersModel

    static name: string
    static $gtype: GObject.GType<ChaptersModel>

    // Constructors of Gucharmap-2.90.Gucharmap.ChaptersModel

    constructor(config?: ChaptersModel.ConstructorProperties) 
    _init(config?: ChaptersModel.ConstructorProperties): void
}

module ChaptersView {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Scrollable.ConstructorProperties, Gtk.TreeView.ConstructorProperties {
    }

}

interface ChaptersView extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {

    // Own fields of Gucharmap-2.90.Gucharmap.ChaptersView

    parent_instance: Gtk.TreeView & GObject.InitiallyUnowned

    // Owm methods of Gucharmap-2.90.Gucharmap.ChaptersView

    get_book_codepoint_list(): CodepointList
    /**
     * Creates a new #GucharmapCodepointList representing the characters in the
     * current chapter.
     * @returns the newly-created #GucharmapCodepointList, or NULL if there is no chapter selected. The caller should release the result with g_object_unref() when finished.
     */
    get_codepoint_list(): CodepointList
    /**
     * Gets the #GucharmapChaptersModel of #view.
     * @returns the #GucharmapChaptersModel
     */
    get_model(): ChaptersModel

    // Overloads of get_model

    /**
     * Returns the model the #GtkTreeView is based on.  Returns %NULL if the
     * model is unset.
     * @returns A #GtkTreeModel, or %NULL if none is currently being used.
     */
    get_model(): Gtk.TreeModel | null
    get_selected(): string | null
    next(): void
    /**
     * Moves to the previous chapter if applicable.
     */
    previous(): void
    select_character(wc: string): boolean
    select_locale(): boolean
    set_model(model: ChaptersModel): void

    // Overloads of set_model

    /**
     * Sets the model for a #GtkTreeView.  If the `tree_view` already has a model
     * set, it will remove it before setting the new model.  If `model` is %NULL,
     * then it will unset the old model.
     * @param model The model.
     */
    set_model(model: Gtk.TreeModel | null): void
    set_selected(name: string | null): boolean

    // Conflicting methods

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

    // Class property signals of Gucharmap-2.90.Gucharmap.ChaptersView

    connect(sigName: "notify::activate-on-single-click", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activate-on-single-click", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::activate-on-single-click", ...args: any[]): void
    connect(sigName: "notify::enable-grid-lines", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-grid-lines", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-grid-lines", ...args: any[]): void
    connect(sigName: "notify::enable-search", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-search", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-search", ...args: any[]): void
    connect(sigName: "notify::enable-tree-lines", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-tree-lines", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-tree-lines", ...args: any[]): void
    connect(sigName: "notify::expander-column", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expander-column", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expander-column", ...args: any[]): void
    connect(sigName: "notify::fixed-height-mode", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-height-mode", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-height-mode", ...args: any[]): void
    connect(sigName: "notify::headers-clickable", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::headers-clickable", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::headers-clickable", ...args: any[]): void
    connect(sigName: "notify::headers-visible", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::headers-visible", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::headers-visible", ...args: any[]): void
    connect(sigName: "notify::hover-expand", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hover-expand", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hover-expand", ...args: any[]): void
    connect(sigName: "notify::hover-selection", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hover-selection", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hover-selection", ...args: any[]): void
    connect(sigName: "notify::level-indentation", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::level-indentation", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::level-indentation", ...args: any[]): void
    connect(sigName: "notify::model", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::reorderable", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reorderable", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reorderable", ...args: any[]): void
    connect(sigName: "notify::rubber-banding", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rubber-banding", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rubber-banding", ...args: any[]): void
    connect(sigName: "notify::rules-hint", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rules-hint", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rules-hint", ...args: any[]): void
    connect(sigName: "notify::search-column", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-column", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::search-column", ...args: any[]): void
    connect(sigName: "notify::show-expanders", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-expanders", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-expanders", ...args: any[]): void
    connect(sigName: "notify::tooltip-column", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-column", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-column", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::hadjustment", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hadjustment", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hadjustment", ...args: any[]): void
    connect(sigName: "notify::hscroll-policy", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hscroll-policy", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hscroll-policy", ...args: any[]): void
    connect(sigName: "notify::vadjustment", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vadjustment", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vadjustment", ...args: any[]): void
    connect(sigName: "notify::vscroll-policy", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vscroll-policy", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vscroll-policy", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ChaptersView extends Gtk.TreeView {

    // Own properties of Gucharmap-2.90.Gucharmap.ChaptersView

    static name: string
    static $gtype: GObject.GType<ChaptersView>

    // Constructors of Gucharmap-2.90.Gucharmap.ChaptersView

    constructor(config?: ChaptersView.ConstructorProperties) 
    /**
     * Creates a new #GucharmapChaptersView object.
     * @constructor 
     * @returns a new #GucharmapChaptersView
     */
    constructor() 
    /**
     * Creates a new #GucharmapChaptersView object.
     * @constructor 
     * @returns a new #GucharmapChaptersView
     */
    static new(): ChaptersView
    _init(config?: ChaptersView.ConstructorProperties): void
}

module Charmap {

    // Signal callback interfaces

    /**
     * Signal callback interface for `link-clicked`
     */
    interface LinkClickedSignalCallback {
        ($obj: Charmap, object: number, p0: number): void
    }

    /**
     * Signal callback interface for `status-message`
     */
    interface StatusMessageSignalCallback {
        ($obj: Charmap, object: string | null): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Paned.ConstructorProperties {

        // Own constructor properties of Gucharmap-2.90.Gucharmap.Charmap

        active_chapter?: string | null
        active_character?: number | null
        active_page?: number | null
        chapters_model?: ChaptersModel | null
        font_desc?: Pango.FontDescription | null
        /**
         * Whether font fallback is enabled.
         */
        font_fallback?: boolean | null
        snap_power_2?: boolean | null
    }

}

interface Charmap extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own properties of Gucharmap-2.90.Gucharmap.Charmap

    active_chapter: string | null
    active_character: number
    readonly active_codepoint_list: CodepointList
    active_page: number
    chapters_model: ChaptersModel
    font_desc: Pango.FontDescription
    /**
     * Whether font fallback is enabled.
     */
    font_fallback: boolean
    snap_power_2: boolean

    // Own fields of Gucharmap-2.90.Gucharmap.Charmap

    parent: Gtk.Paned & Gtk.Container

    // Owm methods of Gucharmap-2.90.Gucharmap.Charmap

    get_active_chapter(): string | null
    get_active_character(): string
    /**
     * Gets the `GucharmapCodepointList` associated with the #GucharmapChartable of
     * `charmap`.
     * @returns the #GucharmapCodepointList
     */
    get_active_codepoint_list(): CodepointList
    get_active_page(): number
    get_book_codepoint_list(): CodepointList
    /**
     * Gets the #GucharmapChaptersModel associated with the #GucharmapChaptersView
     * of `charmap`.
     * @returns a #GucharmapChaptersModel
     */
    get_chapters_model(): ChaptersModel
    /**
     * Gets the #GucharmapChaptersView of `charmap`
     * @returns the #GucharmapChaptersView
     */
    get_chapters_view(): ChaptersView
    get_chapters_visible(): boolean
    get_chartable(): Chartable
    get_font_desc(): Pango.FontDescription
    get_font_fallback(): boolean
    get_page_visible(page: number): boolean
    /**
     * Returns whether the number of columns the character table shows is
     * always a power of 2.
     */
    get_snap_pow2(): boolean
    next_chapter(): void
    previous_chapter(): void
    set_active_chapter(chapter: string | null): void
    set_active_character(uc: string): void
    set_active_page(page: number): void
    set_chapters_model(model: ChaptersModel): void
    set_chapters_visible(visible: boolean): void
    /**
     * Sets `font_desc` as the font to use to display the character table.
     * @param font_desc a #PangoFontDescription
     */
    set_font_desc(font_desc: Pango.FontDescription): void
    set_font_fallback(enable_font_fallback: boolean): void
    set_page_visible(page: number, visible: boolean): void
    /**
     * Sets whether the number columns the character table shows should
     * always be a power of 2.
     * @param snap whether to enable or disable snapping
     */
    set_snap_pow2(snap: boolean): void

    // Conflicting methods

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

    // Own virtual methods of Gucharmap-2.90.Gucharmap.Charmap

    vfunc_link_clicked(old_character: string, new_character: string): void
    vfunc_status_message(message: string | null): void

    // Own signals of Gucharmap-2.90.Gucharmap.Charmap

    connect(sigName: "link-clicked", callback: Charmap.LinkClickedSignalCallback): number
    connect_after(sigName: "link-clicked", callback: Charmap.LinkClickedSignalCallback): number
    emit(sigName: "link-clicked", object: number, p0: number, ...args: any[]): void
    connect(sigName: "status-message", callback: Charmap.StatusMessageSignalCallback): number
    connect_after(sigName: "status-message", callback: Charmap.StatusMessageSignalCallback): number
    emit(sigName: "status-message", object: string | null, ...args: any[]): void

    // Class property signals of Gucharmap-2.90.Gucharmap.Charmap

    connect(sigName: "notify::active-chapter", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-chapter", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active-chapter", ...args: any[]): void
    connect(sigName: "notify::active-character", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-character", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active-character", ...args: any[]): void
    connect(sigName: "notify::active-codepoint-list", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-codepoint-list", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active-codepoint-list", ...args: any[]): void
    connect(sigName: "notify::active-page", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-page", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active-page", ...args: any[]): void
    connect(sigName: "notify::chapters-model", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::chapters-model", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::chapters-model", ...args: any[]): void
    connect(sigName: "notify::font-desc", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::font-desc", ...args: any[]): void
    connect(sigName: "notify::font-fallback", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-fallback", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::font-fallback", ...args: any[]): void
    connect(sigName: "notify::snap-power-2", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::snap-power-2", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::snap-power-2", ...args: any[]): void
    connect(sigName: "notify::max-position", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-position", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-position", ...args: any[]): void
    connect(sigName: "notify::min-position", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-position", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-position", ...args: any[]): void
    connect(sigName: "notify::position", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::position-set", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position-set", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position-set", ...args: any[]): void
    connect(sigName: "notify::wide-handle", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wide-handle", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::wide-handle", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Charmap extends Gtk.Paned {

    // Own properties of Gucharmap-2.90.Gucharmap.Charmap

    static name: string
    static $gtype: GObject.GType<Charmap>

    // Constructors of Gucharmap-2.90.Gucharmap.Charmap

    constructor(config?: Charmap.ConstructorProperties) 
    constructor() 
    static new(): Charmap

    // Overloads of new

    /**
     * Creates a new #GtkPaned widget.
     * @constructor 
     * @param orientation the paned’s orientation.
     * @returns a new #GtkPaned.
     */
    static new(orientation: Gtk.Orientation): Gtk.Paned
    _init(config?: Charmap.ConstructorProperties): void
}

module Chartable {

    // Signal callback interfaces

    /**
     * Signal callback interface for `activate`
     */
    interface ActivateSignalCallback {
        ($obj: Chartable): void
    }

    /**
     * Signal callback interface for `copy-clipboard`
     */
    interface CopyClipboardSignalCallback {
        ($obj: Chartable): void
    }

    /**
     * Signal callback interface for `move-cursor`
     */
    interface MoveCursorSignalCallback {
        ($obj: Chartable, object: Gtk.MovementStep, p0: number): boolean
    }

    /**
     * Signal callback interface for `paste-clipboard`
     */
    interface PasteClipboardSignalCallback {
        ($obj: Chartable): void
    }

    /**
     * Signal callback interface for `status-message`
     */
    interface StatusMessageSignalCallback {
        ($obj: Chartable, object: string | null): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Scrollable.ConstructorProperties, Gtk.DrawingArea.ConstructorProperties {

        // Own constructor properties of Gucharmap-2.90.Gucharmap.Chartable

        active_character?: number | null
        codepoint_list?: CodepointList | null
        font_desc?: Pango.FontDescription | null
        /**
         * Whether font fallback is enabled.
         */
        font_fallback?: boolean | null
        snap_power_2?: boolean | null
        zoom_enabled?: boolean | null
    }

}

interface Chartable extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {

    // Own properties of Gucharmap-2.90.Gucharmap.Chartable

    active_character: number
    codepoint_list: CodepointList
    font_desc: Pango.FontDescription
    /**
     * Whether font fallback is enabled.
     */
    font_fallback: boolean
    snap_power_2: boolean
    zoom_enabled: boolean
    readonly zoom_showing: boolean

    // Own fields of Gucharmap-2.90.Gucharmap.Chartable

    parent_instance: Gtk.DrawingArea & GObject.InitiallyUnowned

    // Owm methods of Gucharmap-2.90.Gucharmap.Chartable

    get_active_character(): string
    get_codepoint_list(): CodepointList
    get_font_desc(): Pango.FontDescription
    get_font_fallback(): boolean
    /**
     * Returns whether the number of columns the character table shows is
     * always a power of 2.
     */
    get_snap_pow2(): boolean
    get_zoom_enabled(): boolean
    /**
     * Sets `wc` as the selected character.
     * @param wc a unicode character (UTF-32)
     */
    set_active_character(wc: string): void
    /**
     * Sets the codepoint list to show in the character table.
     * @param codepoint_list a #GucharmapCodepointList
     */
    set_codepoint_list(codepoint_list: CodepointList): void
    /**
     * Sets `font_desc` as the font to use to display the character table.
     * @param font_desc a #PangoFontDescription
     */
    set_font_desc(font_desc: Pango.FontDescription): void
    set_font_fallback(enable_font_fallback: boolean): void
    /**
     * Sets whether the number columns the character table shows should
     * always be a power of 2.
     * @param snap whether to enable or disable snapping
     */
    set_snap_pow2(snap: boolean): void
    /**
     * Enables or disables the zoom popup.
     * @param enabled whether to enable zoom mode
     */
    set_zoom_enabled(enabled: boolean): void

    // Own virtual methods of Gucharmap-2.90.Gucharmap.Chartable

    vfunc_activate(): void
    vfunc_copy_clipboard(): void
    vfunc_move_cursor(step: Gtk.MovementStep, count: number): boolean
    vfunc_paste_clipboard(): void
    vfunc_set_active_char(ch: number): void
    vfunc_set_scroll_adjustments(hadjustment: Gtk.Adjustment, vadjustment: Gtk.Adjustment): void
    vfunc_status_message(message: string | null): void

    // Own signals of Gucharmap-2.90.Gucharmap.Chartable

    connect(sigName: "activate", callback: Chartable.ActivateSignalCallback): number
    connect_after(sigName: "activate", callback: Chartable.ActivateSignalCallback): number
    emit(sigName: "activate", ...args: any[]): void
    connect(sigName: "copy-clipboard", callback: Chartable.CopyClipboardSignalCallback): number
    connect_after(sigName: "copy-clipboard", callback: Chartable.CopyClipboardSignalCallback): number
    emit(sigName: "copy-clipboard", ...args: any[]): void
    connect(sigName: "move-cursor", callback: Chartable.MoveCursorSignalCallback): number
    connect_after(sigName: "move-cursor", callback: Chartable.MoveCursorSignalCallback): number
    emit(sigName: "move-cursor", object: Gtk.MovementStep, p0: number, ...args: any[]): void
    connect(sigName: "paste-clipboard", callback: Chartable.PasteClipboardSignalCallback): number
    connect_after(sigName: "paste-clipboard", callback: Chartable.PasteClipboardSignalCallback): number
    emit(sigName: "paste-clipboard", ...args: any[]): void
    connect(sigName: "status-message", callback: Chartable.StatusMessageSignalCallback): number
    connect_after(sigName: "status-message", callback: Chartable.StatusMessageSignalCallback): number
    emit(sigName: "status-message", object: string | null, ...args: any[]): void

    // Class property signals of Gucharmap-2.90.Gucharmap.Chartable

    connect(sigName: "notify::active-character", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-character", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active-character", ...args: any[]): void
    connect(sigName: "notify::codepoint-list", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::codepoint-list", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::codepoint-list", ...args: any[]): void
    connect(sigName: "notify::font-desc", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::font-desc", ...args: any[]): void
    connect(sigName: "notify::font-fallback", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-fallback", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::font-fallback", ...args: any[]): void
    connect(sigName: "notify::snap-power-2", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::snap-power-2", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::snap-power-2", ...args: any[]): void
    connect(sigName: "notify::zoom-enabled", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::zoom-enabled", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::zoom-enabled", ...args: any[]): void
    connect(sigName: "notify::zoom-showing", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::zoom-showing", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::zoom-showing", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::hadjustment", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hadjustment", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hadjustment", ...args: any[]): void
    connect(sigName: "notify::hscroll-policy", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hscroll-policy", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hscroll-policy", ...args: any[]): void
    connect(sigName: "notify::vadjustment", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vadjustment", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vadjustment", ...args: any[]): void
    connect(sigName: "notify::vscroll-policy", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vscroll-policy", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vscroll-policy", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Chartable extends Gtk.DrawingArea {

    // Own properties of Gucharmap-2.90.Gucharmap.Chartable

    static name: string
    static $gtype: GObject.GType<Chartable>

    // Constructors of Gucharmap-2.90.Gucharmap.Chartable

    constructor(config?: Chartable.ConstructorProperties) 
    constructor() 
    static new(): Chartable
    _init(config?: Chartable.ConstructorProperties): void
}

module ChartableAccessible {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.Action.ConstructorProperties, Atk.Component.ConstructorProperties, Atk.Document.ConstructorProperties, Atk.EditableText.ConstructorProperties, Atk.Hypertext.ConstructorProperties, Atk.Image.ConstructorProperties, Atk.Selection.ConstructorProperties, Atk.Table.ConstructorProperties, Atk.TableCell.ConstructorProperties, Atk.Text.ConstructorProperties, Atk.Value.ConstructorProperties, Atk.Window.ConstructorProperties, Atk.NoOpObject.ConstructorProperties {
    }

}

interface ChartableAccessible extends Atk.Action, Atk.Component, Atk.Document, Atk.EditableText, Atk.Hypertext, Atk.Image, Atk.Selection, Atk.Table, Atk.TableCell, Atk.Text, Atk.Value, Atk.Window {

    // Conflicting properties

    parent: Atk.Object & GObject.Object & GObject.Object

    // Conflicting methods

    /**
     * Returns a description of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
     * @returns a description string, or %NULL if @action does not implement this interface.
     */
    get_description(i: number): string | null
    /**
     * Gets the accessible description of the accessible.
     * @returns a character string representing the accessible description of the accessible.
     */
    get_description(): string | null
    /**
     * Returns a non-localized string naming the specified action of the
     * object. This name is generally not descriptive of the end result
     * of the action, but instead names the 'interaction type' which the
     * object supports. By convention, the above strings should be used to
     * represent the actions which correspond to the common point-and-click
     * interaction techniques of the same name: i.e.
     * "click", "press", "release", "drag", "drop", "popup", etc.
     * The "popup" action should be used to pop up a context menu for the
     * object, if one exists.
     * 
     * For technical reasons, some toolkits cannot guarantee that the
     * reported action is actually 'bound' to a nontrivial user event;
     * i.e. the result of some actions via atk_action_do_action() may be
     * NIL.
     * @param i the action index corresponding to the action to be performed
     * @returns a name string, or %NULL if @action does not implement this interface.
     */
    get_name(i: number): string | null
    /**
     * Gets the accessible name of the accessible.
     * @returns a character string representing the accessible name of the object.
     */
    get_name(): string | null
    /**
     * Sets a description of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
     * @param desc the description to be assigned to this action
     * @returns a gboolean representing if the description was successfully set;
     */
    set_description(i: number, desc: string | null): boolean
    /**
     * Sets the accessible description of the accessible. You can't set
     * the description to NULL. This is reserved for the initial value. In
     * this aspect NULL is similar to ATK_ROLE_UNKNOWN. If you want to set
     * the name to a empty value you can use "".
     * @param description a character string to be set as the accessible description
     */
    set_description(description: string | null): void
    /**
     * Gets the position of `component` in the form of
     * a point specifying `component'`s top-left corner.
     * 
     * If the position can not be obtained (e.g. a non-embedded plug or missing
     * support), x and y are set to -1.
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    get_position(coord_type: Atk.CoordType): [ /* x */ number, /* y */ number ]
    /**
     * Retrieves the tabular position of this cell.
     * @returns TRUE if successful; FALSE otherwise.
     */
    get_position(): [ /* returnType */ boolean, /* row */ number, /* column */ number ]
    /**
     * Adds the specified accessible child of the object to the
     * object's selection.
     * @param i a #gint specifying the child index.
     * @returns TRUE if success, FALSE otherwise.
     */
    add_selection(i: number): boolean
    /**
     * Adds a selection bounded by the specified offsets.
     * @param start_offset the starting character offset of the selected region
     * @param end_offset the offset of the first character after the selected region.
     * @returns %TRUE if successful, %FALSE otherwise
     */
    add_selection(start_offset: number, end_offset: number): boolean
    /**
     * Returns a description of the specified action of the object.
     * @virtual 
     * @param i the action index corresponding to the action to be performed
     * @returns a description string, or %NULL if @action does not implement this interface.
     */
    vfunc_get_description(i: number): string | null
    /**
     * Gets the accessible description of the accessible.
     * @virtual 
     * @returns a character string representing the accessible description of the accessible.
     */
    vfunc_get_description(): string | null
    /**
     * Returns a non-localized string naming the specified action of the
     * object. This name is generally not descriptive of the end result
     * of the action, but instead names the 'interaction type' which the
     * object supports. By convention, the above strings should be used to
     * represent the actions which correspond to the common point-and-click
     * interaction techniques of the same name: i.e.
     * "click", "press", "release", "drag", "drop", "popup", etc.
     * The "popup" action should be used to pop up a context menu for the
     * object, if one exists.
     * 
     * For technical reasons, some toolkits cannot guarantee that the
     * reported action is actually 'bound' to a nontrivial user event;
     * i.e. the result of some actions via atk_action_do_action() may be
     * NIL.
     * @virtual 
     * @param i the action index corresponding to the action to be performed
     * @returns a name string, or %NULL if @action does not implement this interface.
     */
    vfunc_get_name(i: number): string | null
    /**
     * Gets the accessible name of the accessible.
     * @virtual 
     * @returns a character string representing the accessible name of the object.
     */
    vfunc_get_name(): string | null
    /**
     * Sets a description of the specified action of the object.
     * @virtual 
     * @param i the action index corresponding to the action to be performed
     * @param desc the description to be assigned to this action
     * @returns a gboolean representing if the description was successfully set;
     */
    vfunc_set_description(i: number, desc: string | null): boolean
    /**
     * Sets the accessible description of the accessible. You can't set
     * the description to NULL. This is reserved for the initial value. In
     * this aspect NULL is similar to ATK_ROLE_UNKNOWN. If you want to set
     * the name to a empty value you can use "".
     * @virtual 
     * @param description a character string to be set as the accessible description
     */
    vfunc_set_description(description: string | null): void
    /**
     * Gets the position of `component` in the form of
     * a point specifying `component'`s top-left corner.
     * 
     * If the position can not be obtained (e.g. a non-embedded plug or missing
     * support), x and y are set to -1.
     * @virtual 
     * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
     */
    vfunc_get_position(coord_type: Atk.CoordType): [ /* x */ number, /* y */ number ]
    /**
     * Retrieves the tabular position of this cell.
     * @virtual 
     * @returns TRUE if successful; FALSE otherwise.
     */
    vfunc_get_position(): [ /* returnType */ boolean, /* row */ number, /* column */ number ]
    /**
     * Adds the specified accessible child of the object to the
     * object's selection.
     * @virtual 
     * @param i a #gint specifying the child index.
     * @returns TRUE if success, FALSE otherwise.
     */
    vfunc_add_selection(i: number): boolean
    /**
     * Adds a selection bounded by the specified offsets.
     * @virtual 
     * @param start_offset the starting character offset of the selected region
     * @param end_offset the offset of the first character after the selected region.
     * @returns %TRUE if successful, %FALSE otherwise
     */
    vfunc_add_selection(start_offset: number, end_offset: number): boolean

    // Class property signals of Gucharmap-2.90.Gucharmap.ChartableAccessible

    connect(sigName: "notify::accessible-component-layer", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-layer", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-component-layer", ...args: any[]): void
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-component-mdi-zorder", ...args: any[]): void
    connect(sigName: "notify::accessible-description", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-description", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-description", ...args: any[]): void
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-hypertext-nlinks", ...args: any[]): void
    connect(sigName: "notify::accessible-name", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-name", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-name", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: "notify::accessible-table-caption", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-caption", ...args: any[]): void
    connect(sigName: "notify::accessible-table-caption-object", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption-object", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-caption-object", ...args: any[]): void
    connect(sigName: "notify::accessible-table-column-description", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-description", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-column-description", ...args: any[]): void
    connect(sigName: "notify::accessible-table-column-header", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-header", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-column-header", ...args: any[]): void
    connect(sigName: "notify::accessible-table-row-description", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-description", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-row-description", ...args: any[]): void
    connect(sigName: "notify::accessible-table-row-header", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-header", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-row-header", ...args: any[]): void
    connect(sigName: "notify::accessible-table-summary", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-summary", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-summary", ...args: any[]): void
    connect(sigName: "notify::accessible-value", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-value", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ChartableAccessible extends Atk.NoOpObject {

    // Own properties of Gucharmap-2.90.Gucharmap.ChartableAccessible

    static name: string
    static $gtype: GObject.GType<ChartableAccessible>

    // Constructors of Gucharmap-2.90.Gucharmap.ChartableAccessible

    constructor(config?: ChartableAccessible.ConstructorProperties) 
    constructor(chartable: Chartable) 
    static new(chartable: Chartable): ChartableAccessible

    // Overloads of new

    /**
     * Provides a default (non-functioning stub) #AtkObject.
     * Application maintainers should not use this method.
     * @constructor 
     * @param obj a #GObject
     * @returns a default (non-functioning stub) #AtkObject
     */
    static new(obj: GObject.Object): Atk.NoOpObject
    _init(config?: ChartableAccessible.ConstructorProperties): void
}

module ChartableCellAccessible {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.Action.ConstructorProperties, Atk.Component.ConstructorProperties, Atk.Object.ConstructorProperties {
    }

}

interface ChartableCellAccessible extends Atk.Action, Atk.Component {

    // Own fields of Gucharmap-2.90.Gucharmap.ChartableCellAccessible

    parent: Atk.Object & GObject.Object
    widget: Gtk.Widget
    index: number
    state_set: Atk.StateSet
    activate_description: string | null
    action_idle_handler: number

    // Owm methods of Gucharmap-2.90.Gucharmap.ChartableCellAccessible

    add_state(state_type: Atk.StateType, emit_signal: boolean): boolean
    initialise(widget: Gtk.Widget, parent: Atk.Object, index: number): void
    remove_state(state_type: Atk.StateType, emit_signal: boolean): boolean

    // Conflicting methods

    /**
     * Returns a description of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
     * @returns a description string, or %NULL if @action does not implement this interface.
     */
    get_description(i: number): string | null
    /**
     * Gets the accessible description of the accessible.
     * @returns a character string representing the accessible description of the accessible.
     */
    get_description(): string | null
    /**
     * Returns a non-localized string naming the specified action of the
     * object. This name is generally not descriptive of the end result
     * of the action, but instead names the 'interaction type' which the
     * object supports. By convention, the above strings should be used to
     * represent the actions which correspond to the common point-and-click
     * interaction techniques of the same name: i.e.
     * "click", "press", "release", "drag", "drop", "popup", etc.
     * The "popup" action should be used to pop up a context menu for the
     * object, if one exists.
     * 
     * For technical reasons, some toolkits cannot guarantee that the
     * reported action is actually 'bound' to a nontrivial user event;
     * i.e. the result of some actions via atk_action_do_action() may be
     * NIL.
     * @param i the action index corresponding to the action to be performed
     * @returns a name string, or %NULL if @action does not implement this interface.
     */
    get_name(i: number): string | null
    /**
     * Gets the accessible name of the accessible.
     * @returns a character string representing the accessible name of the object.
     */
    get_name(): string | null
    /**
     * Sets a description of the specified action of the object.
     * @param i the action index corresponding to the action to be performed
     * @param desc the description to be assigned to this action
     * @returns a gboolean representing if the description was successfully set;
     */
    set_description(i: number, desc: string | null): boolean
    /**
     * Sets the accessible description of the accessible. You can't set
     * the description to NULL. This is reserved for the initial value. In
     * this aspect NULL is similar to ATK_ROLE_UNKNOWN. If you want to set
     * the name to a empty value you can use "".
     * @param description a character string to be set as the accessible description
     */
    set_description(description: string | null): void
    /**
     * Returns a description of the specified action of the object.
     * @virtual 
     * @param i the action index corresponding to the action to be performed
     * @returns a description string, or %NULL if @action does not implement this interface.
     */
    vfunc_get_description(i: number): string | null
    /**
     * Gets the accessible description of the accessible.
     * @virtual 
     * @returns a character string representing the accessible description of the accessible.
     */
    vfunc_get_description(): string | null
    /**
     * Returns a non-localized string naming the specified action of the
     * object. This name is generally not descriptive of the end result
     * of the action, but instead names the 'interaction type' which the
     * object supports. By convention, the above strings should be used to
     * represent the actions which correspond to the common point-and-click
     * interaction techniques of the same name: i.e.
     * "click", "press", "release", "drag", "drop", "popup", etc.
     * The "popup" action should be used to pop up a context menu for the
     * object, if one exists.
     * 
     * For technical reasons, some toolkits cannot guarantee that the
     * reported action is actually 'bound' to a nontrivial user event;
     * i.e. the result of some actions via atk_action_do_action() may be
     * NIL.
     * @virtual 
     * @param i the action index corresponding to the action to be performed
     * @returns a name string, or %NULL if @action does not implement this interface.
     */
    vfunc_get_name(i: number): string | null
    /**
     * Gets the accessible name of the accessible.
     * @virtual 
     * @returns a character string representing the accessible name of the object.
     */
    vfunc_get_name(): string | null
    /**
     * Sets a description of the specified action of the object.
     * @virtual 
     * @param i the action index corresponding to the action to be performed
     * @param desc the description to be assigned to this action
     * @returns a gboolean representing if the description was successfully set;
     */
    vfunc_set_description(i: number, desc: string | null): boolean
    /**
     * Sets the accessible description of the accessible. You can't set
     * the description to NULL. This is reserved for the initial value. In
     * this aspect NULL is similar to ATK_ROLE_UNKNOWN. If you want to set
     * the name to a empty value you can use "".
     * @virtual 
     * @param description a character string to be set as the accessible description
     */
    vfunc_set_description(description: string | null): void

    // Class property signals of Gucharmap-2.90.Gucharmap.ChartableCellAccessible

    connect(sigName: "notify::accessible-component-layer", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-layer", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-component-layer", ...args: any[]): void
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-component-mdi-zorder", ...args: any[]): void
    connect(sigName: "notify::accessible-description", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-description", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-description", ...args: any[]): void
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-hypertext-nlinks", ...args: any[]): void
    connect(sigName: "notify::accessible-name", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-name", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-name", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: "notify::accessible-table-caption", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-caption", ...args: any[]): void
    connect(sigName: "notify::accessible-table-caption-object", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption-object", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-caption-object", ...args: any[]): void
    connect(sigName: "notify::accessible-table-column-description", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-description", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-column-description", ...args: any[]): void
    connect(sigName: "notify::accessible-table-column-header", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-header", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-column-header", ...args: any[]): void
    connect(sigName: "notify::accessible-table-row-description", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-description", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-row-description", ...args: any[]): void
    connect(sigName: "notify::accessible-table-row-header", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-header", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-row-header", ...args: any[]): void
    connect(sigName: "notify::accessible-table-summary", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-summary", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-summary", ...args: any[]): void
    connect(sigName: "notify::accessible-value", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-value", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ChartableCellAccessible extends Atk.Object {

    // Own properties of Gucharmap-2.90.Gucharmap.ChartableCellAccessible

    static name: string
    static $gtype: GObject.GType<ChartableCellAccessible>

    // Constructors of Gucharmap-2.90.Gucharmap.ChartableCellAccessible

    constructor(config?: ChartableCellAccessible.ConstructorProperties) 
    constructor() 
    static new(): ChartableCellAccessible
    _init(config?: ChartableCellAccessible.ConstructorProperties): void
}

module CodepointList {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface CodepointList {

    // Own fields of Gucharmap-2.90.Gucharmap.CodepointList

    parent_instance: GObject.Object

    // Owm methods of Gucharmap-2.90.Gucharmap.CodepointList

    get_char(index: number): string
    get_index(wc: string): number
    get_last_index(): number

    // Own virtual methods of Gucharmap-2.90.Gucharmap.CodepointList

    vfunc_get_char(index: number): string
    vfunc_get_index(wc: string): number
    vfunc_get_last_index(): number

    // Class property signals of Gucharmap-2.90.Gucharmap.CodepointList

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CodepointList extends GObject.Object {

    // Own properties of Gucharmap-2.90.Gucharmap.CodepointList

    static name: string
    static $gtype: GObject.GType<CodepointList>

    // Constructors of Gucharmap-2.90.Gucharmap.CodepointList

    constructor(config?: CodepointList.ConstructorProperties) 
    _init(config?: CodepointList.ConstructorProperties): void
}

module ScriptChaptersModel {

    // Constructor properties interface

    interface ConstructorProperties extends Gtk.Buildable.ConstructorProperties, Gtk.TreeDragDest.ConstructorProperties, Gtk.TreeDragSource.ConstructorProperties, Gtk.TreeModel.ConstructorProperties, Gtk.TreeSortable.ConstructorProperties, ChaptersModel.ConstructorProperties {
    }

}

interface ScriptChaptersModel extends Gtk.Buildable, Gtk.TreeDragDest, Gtk.TreeDragSource, Gtk.TreeModel, Gtk.TreeSortable {

    // Own fields of Gucharmap-2.90.Gucharmap.ScriptChaptersModel

    parent: ChaptersModel & GObject.Object

    // Class property signals of Gucharmap-2.90.Gucharmap.ScriptChaptersModel

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ScriptChaptersModel extends ChaptersModel {

    // Own properties of Gucharmap-2.90.Gucharmap.ScriptChaptersModel

    static name: string
    static $gtype: GObject.GType<ScriptChaptersModel>

    // Constructors of Gucharmap-2.90.Gucharmap.ScriptChaptersModel

    constructor(config?: ScriptChaptersModel.ConstructorProperties) 
    constructor() 
    static new(): ScriptChaptersModel

    // Overloads of new

    /**
     * Non-vararg creation function.  Used primarily by language bindings.
     * @constructor 
     * @param types an array of #GType types for the columns, from first to last
     * @returns a new #GtkListStore
     */
    static new(types: GObject.GType[]): Gtk.ListStore
    _init(config?: ScriptChaptersModel.ConstructorProperties): void
}

module ScriptCodepointList {

    // Constructor properties interface

    interface ConstructorProperties extends CodepointList.ConstructorProperties {
    }

}

interface ScriptCodepointList {

    // Own fields of Gucharmap-2.90.Gucharmap.ScriptCodepointList

    parent: CodepointList

    // Owm methods of Gucharmap-2.90.Gucharmap.ScriptCodepointList

    /**
     * Appends the characters in `script` to the codepoint list.
     * @param script the script name
     * @returns %TRUE on success, %FALSE if there is no such script, in which case the codepoint list is not changed.
     */
    append_script(script: string | null): boolean
    /**
     * Sets the script for the codepoint list.
     * @param script the script name
     * @returns %TRUE on success, %FALSE if there is no such script, in which case the script is not changed.
     */
    set_script(script: string | null): boolean
    /**
     * Sets multiple scripts for the codepoint list. Codepoints are sorted
     * according to their order in `scripts`.
     * @param scripts NULL-terminated array of script names
     * @returns %TRUE on success, %FALSE if any of the scripts don’t exist, in which case the script is not changed.
     */
    set_scripts(scripts: string | null): boolean

    // Class property signals of Gucharmap-2.90.Gucharmap.ScriptCodepointList

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ScriptCodepointList extends CodepointList {

    // Own properties of Gucharmap-2.90.Gucharmap.ScriptCodepointList

    static name: string
    static $gtype: GObject.GType<ScriptCodepointList>

    // Constructors of Gucharmap-2.90.Gucharmap.ScriptCodepointList

    constructor(config?: ScriptCodepointList.ConstructorProperties) 
    /**
     * Creates a new script codepoint list. The default script is Latin.
     * @constructor 
     * @returns the newly-created #GucharmapCodepointList. Use g_object_unref() to free the result.
     */
    constructor() 
    /**
     * Creates a new script codepoint list. The default script is Latin.
     * @constructor 
     * @returns the newly-created #GucharmapCodepointList. Use g_object_unref() to free the result.
     */
    static new(): ScriptCodepointList
    _init(config?: ScriptCodepointList.ConstructorProperties): void
}

interface BlockChaptersModelClass {

    // Own fields of Gucharmap-2.90.Gucharmap.BlockChaptersModelClass

    parent_class: ChaptersModelClass
}

abstract class BlockChaptersModelClass {

    // Own properties of Gucharmap-2.90.Gucharmap.BlockChaptersModelClass

    static name: string
}

interface BlockChaptersModelPrivate {
}

class BlockChaptersModelPrivate {

    // Own properties of Gucharmap-2.90.Gucharmap.BlockChaptersModelPrivate

    static name: string
}

interface BlockCodepointListClass {

    // Own fields of Gucharmap-2.90.Gucharmap.BlockCodepointListClass

    parent_class: CodepointListClass
}

abstract class BlockCodepointListClass {

    // Own properties of Gucharmap-2.90.Gucharmap.BlockCodepointListClass

    static name: string
}

interface BlockCodepointListPrivate {
}

class BlockCodepointListPrivate {

    // Own properties of Gucharmap-2.90.Gucharmap.BlockCodepointListPrivate

    static name: string
}

interface ChaptersModelClass {

    // Own fields of Gucharmap-2.90.Gucharmap.ChaptersModelClass

    parent_class: Gtk.ListStoreClass
    title: string | null
    character_to_iter: (chapters: ChaptersModel, wc: string) => [ /* returnType */ boolean, /* iter */ Gtk.TreeIter ]
    get_codepoint_list: (chapters: ChaptersModel, iter: Gtk.TreeIter) => CodepointList
    get_book_codepoint_list: (chapters: ChaptersModel) => CodepointList
}

abstract class ChaptersModelClass {

    // Own properties of Gucharmap-2.90.Gucharmap.ChaptersModelClass

    static name: string
}

interface ChaptersModelPrivate {

    // Own fields of Gucharmap-2.90.Gucharmap.ChaptersModelPrivate

    book_list: CodepointList
}

class ChaptersModelPrivate {

    // Own properties of Gucharmap-2.90.Gucharmap.ChaptersModelPrivate

    static name: string
}

interface ChaptersViewClass {

    // Own fields of Gucharmap-2.90.Gucharmap.ChaptersViewClass

    parent_class: Gtk.TreeViewClass
}

abstract class ChaptersViewClass {

    // Own properties of Gucharmap-2.90.Gucharmap.ChaptersViewClass

    static name: string
}

interface ChaptersViewPrivate {
}

class ChaptersViewPrivate {

    // Own properties of Gucharmap-2.90.Gucharmap.ChaptersViewPrivate

    static name: string
}

interface CharmapClass {

    // Own fields of Gucharmap-2.90.Gucharmap.CharmapClass

    parent_class: Gtk.PanedClass
    status_message: (charmap: Charmap, message: string | null) => void
    link_clicked: (charmap: Charmap, old_character: string, new_character: string) => void
}

abstract class CharmapClass {

    // Own properties of Gucharmap-2.90.Gucharmap.CharmapClass

    static name: string
}

interface CharmapPrivate {
}

class CharmapPrivate {

    // Own properties of Gucharmap-2.90.Gucharmap.CharmapPrivate

    static name: string
}

interface ChartableAccessibleClass {
}

abstract class ChartableAccessibleClass {

    // Own properties of Gucharmap-2.90.Gucharmap.ChartableAccessibleClass

    static name: string
}

interface ChartableCellAccessibleClass {

    // Own fields of Gucharmap-2.90.Gucharmap.ChartableCellAccessibleClass

    parent_class: Atk.ObjectClass
}

abstract class ChartableCellAccessibleClass {

    // Own properties of Gucharmap-2.90.Gucharmap.ChartableCellAccessibleClass

    static name: string
}

interface ChartableClass {

    // Own fields of Gucharmap-2.90.Gucharmap.ChartableClass

    parent_class: Gtk.DrawingAreaClass
    set_scroll_adjustments: (chartable: Chartable, hadjustment: Gtk.Adjustment, vadjustment: Gtk.Adjustment) => void
    move_cursor: (chartable: Chartable, step: Gtk.MovementStep, count: number) => boolean
    activate: (chartable: Chartable) => void
    copy_clipboard: (chartable: Chartable) => void
    paste_clipboard: (chartable: Chartable) => void
    set_active_char: (chartable: Chartable, ch: number) => void
    status_message: (chartable: Chartable, message: string | null) => void
}

abstract class ChartableClass {

    // Own properties of Gucharmap-2.90.Gucharmap.ChartableClass

    static name: string
}

interface ChartablePrivate {

    // Own fields of Gucharmap-2.90.Gucharmap.ChartablePrivate

    vadjustment: Gtk.Adjustment
    vadjustment_changed_handler_id: number
    hadjustment: Gtk.Adjustment
    hscroll_policy: number
    vscroll_policy: number
    font_desc: Pango.FontDescription
    minimal_column_width: number
    minimal_row_height: number
    n_padded_columns: number
    n_padded_rows: number
    rows: number
    cols: number
    page_size: number
    page_first_cell: number
    active_cell: number
    pango_layout: Pango.Layout
    zoom_window: Gtk.Widget
    zoom_image_width: number
    zoom_image_height: number
    click_x: number
    click_y: number
    target_list: Gtk.TargetList
    codepoint_list: CodepointList
    last_cell: number
    codepoint_list_changed: boolean
    snap_pow2_enabled: number
    zoom_mode_enabled: number
    font_fallback: number
}

class ChartablePrivate {

    // Own properties of Gucharmap-2.90.Gucharmap.ChartablePrivate

    static name: string
}

interface CodepointListClass {

    // Own fields of Gucharmap-2.90.Gucharmap.CodepointListClass

    parent_class: GObject.ObjectClass
    get_last_index: (list: CodepointList) => number
    get_char: (list: CodepointList, index: number) => string
    get_index: (list: CodepointList, wc: string) => number
}

abstract class CodepointListClass {

    // Own properties of Gucharmap-2.90.Gucharmap.CodepointListClass

    static name: string
}

interface CodepointListPrivate {
}

class CodepointListPrivate {

    // Own properties of Gucharmap-2.90.Gucharmap.CodepointListPrivate

    static name: string
}

interface ScriptChaptersModelClass {

    // Own fields of Gucharmap-2.90.Gucharmap.ScriptChaptersModelClass

    parent_class: ChaptersModelClass
}

abstract class ScriptChaptersModelClass {

    // Own properties of Gucharmap-2.90.Gucharmap.ScriptChaptersModelClass

    static name: string
}

interface ScriptChaptersModelPrivate {
}

class ScriptChaptersModelPrivate {

    // Own properties of Gucharmap-2.90.Gucharmap.ScriptChaptersModelPrivate

    static name: string
}

interface ScriptCodepointListClass {

    // Own fields of Gucharmap-2.90.Gucharmap.ScriptCodepointListClass

    parent_class: CodepointListClass
}

abstract class ScriptCodepointListClass {

    // Own properties of Gucharmap-2.90.Gucharmap.ScriptCodepointListClass

    static name: string
}

interface ScriptCodepointListPrivate {
}

class ScriptCodepointListPrivate {

    // Own properties of Gucharmap-2.90.Gucharmap.ScriptCodepointListPrivate

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

export default Gucharmap;
// END