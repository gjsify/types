
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-gucharmap-2.90-import.d.ts';
    
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
function getNameslistColons(uc: string): string[]
function getNameslistEquals(uc: string): string[]
function getNameslistExes(uc: string): string
function getNameslistPounds(uc: string): string[]
function getNameslistStars(uc: string): string[]
function getUnicodeCategoryName(uc: string): string | null
function getUnicodeDataName(uc: string): string | null
function getUnicodeDataNameCount(): number
function getUnicodeKCantonese(uc: string): string | null
function getUnicodeKDefinition(uc: string): string | null
function getUnicodeKJapaneseKun(uc: string): string | null
function getUnicodeKJapaneseOn(uc: string): string | null
function getUnicodeKKorean(uc: string): string | null
function getUnicodeKMandarin(uc: string): string | null
function getUnicodeKTang(uc: string): string | null
function getUnicodeName(uc: string): string | null
function getUnicodeVersion(uc: string): UnicodeVersion
function getUnihanCount(): number
/**
 * Determines if a given character is assigned in the Unicode
 * standard.
 * @param uc a Unicode character
 * @returns %TRUE if the character has an assigned value
 */
function unicharIsdefined(uc: string): boolean
/**
 * Determines whether a character is printable and not a space
 * (returns %FALSE for control characters, format characters, and
 * spaces). g_unichar_isprint() is similar, but returns %TRUE for
 * spaces. Given some UTF-8 text, obtain a character value with
 * g_utf8_get_char().
 * @param uc a Unicode character
 * @returns %TRUE if @c is printable unless it's a space
 */
function unicharIsgraph(uc: string): boolean
/**
 * Converts a single character to UTF-8 suitable for rendering. Check the
 * source to see what this means. ;-)
 * @param uc a unicode character
 * @param outbuf output buffer, must have at least 10 bytes of space.          If %NULL, the length will be computed and returned          and nothing will be written to `outbuf`.
 * @returns number of bytes written
 */
function unicharToPrintableUtf8(uc: string, outbuf: string | null): number
/**
 * Classifies a Unicode character by type.
 * @param uc a Unicode character
 * @returns the type of the character.
 */
function unicharType(uc: string): GLib.UnicodeType
function unicharValidate(uc: string): boolean
/**
 * Determines a character that's commonly used in the current
 * locale's script.
 * @returns a unicode character
 */
function unicodeGetLocaleCharacter(): string
function unicodeGetScriptForChar(wc: string): string | null
/**
 * Returns an array of untranslated script names.
 * 
 * The strings in the array are owned by gucharmap and should not be
 * modified or free; the array itself however is allocated and should
 * be freed with g_free().
 * @returns a newly allocated %NULL-terminated array of strings
 */
function unicodeListScripts(): string[]
function unicodeVersionToString(version: UnicodeVersion): string | null
module BlockChaptersModel {

    // Constructor properties interface

    interface ConstructorProperties extends Gtk.Buildable.ConstructorProperties, Gtk.TreeDragDest.ConstructorProperties, Gtk.TreeDragSource.ConstructorProperties, Gtk.TreeModel.ConstructorProperties, Gtk.TreeSortable.ConstructorProperties, ChaptersModel.ConstructorProperties {
    }

}

interface BlockChaptersModel extends Gtk.Buildable, Gtk.TreeDragDest, Gtk.TreeDragSource, Gtk.TreeModel, Gtk.TreeSortable {

    // Own properties of Gucharmap-2.90.Gucharmap.BlockChaptersModel

    __gtype__: number

    // Own fields of Gucharmap-2.90.Gucharmap.BlockChaptersModel

    parent: ChaptersModel & GObject.Object

    // Class property signals of Gucharmap-2.90.Gucharmap.BlockChaptersModel

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class BlockChaptersModel extends ChaptersModel {

    // Own properties of Gucharmap-2.90.Gucharmap.BlockChaptersModel

    static name: string

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

        firstCodepoint?: number | null
        lastCodepoint?: number | null
    }

}

interface BlockCodepointList {

    // Own properties of Gucharmap-2.90.Gucharmap.BlockCodepointList

    readonly firstCodepoint: number
    readonly lastCodepoint: number
    __gtype__: number

    // Own fields of Gucharmap-2.90.Gucharmap.BlockCodepointList

    parentInstance: any

    // Class property signals of Gucharmap-2.90.Gucharmap.BlockCodepointList

    connect(sigName: "notify::first-codepoint", callback: (...args: any[]) => void): number
    on(sigName: "notify::first-codepoint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::first-codepoint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::first-codepoint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::first-codepoint", ...args: any[]): void
    connect(sigName: "notify::last-codepoint", callback: (...args: any[]) => void): number
    on(sigName: "notify::last-codepoint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::last-codepoint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::last-codepoint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::last-codepoint", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class BlockCodepointList extends CodepointList {

    // Own properties of Gucharmap-2.90.Gucharmap.BlockCodepointList

    static name: string

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

    // Own properties of Gucharmap-2.90.Gucharmap.ChaptersModel

    __gtype__: number

    // Own fields of Gucharmap-2.90.Gucharmap.ChaptersModel

    parentInstance: Gtk.ListStore

    // Owm methods of Gucharmap-2.90.Gucharmap.ChaptersModel

    // Has conflict: characterToIter(wc: string): [ /* returnType */ boolean, /* iter */ Gtk.TreeIter ]
    // Has conflict: getBookCodepointList(): CodepointList
    // Has conflict: getCodepointList(iter: Gtk.TreeIter): CodepointList
    getTitle(): string | null
    idToIter(id: string | null): [ /* returnType */ boolean, /* iter */ Gtk.TreeIter ]

    // Own virtual methods of Gucharmap-2.90.Gucharmap.ChaptersModel

    characterToIter(wc: string): [ /* returnType */ boolean, /* iter */ Gtk.TreeIter ]
    getBookCodepointList(): CodepointList
    /**
     * Creates a new #GucharmapCodepointList representing the characters in the
     * current chapter.
     * @virtual 
     * @param iter a #GtkTreeIter
     * @returns the newly-created #GucharmapCodepointList, or NULL if there is no chapter selected. The caller should release the result with g_object_unref() when finished.
     */
    getCodepointList(iter: Gtk.TreeIter): CodepointList

    // Class property signals of Gucharmap-2.90.Gucharmap.ChaptersModel

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ChaptersModel extends Gtk.ListStore {

    // Own properties of Gucharmap-2.90.Gucharmap.ChaptersModel

    static name: string

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

    // Own properties of Gucharmap-2.90.Gucharmap.ChaptersView

    __gtype__: number

    // Own fields of Gucharmap-2.90.Gucharmap.ChaptersView

    parentInstance: any

    // Owm methods of Gucharmap-2.90.Gucharmap.ChaptersView

    getBookCodepointList(): CodepointList
    /**
     * Creates a new #GucharmapCodepointList representing the characters in the
     * current chapter.
     * @returns the newly-created #GucharmapCodepointList, or NULL if there is no chapter selected. The caller should release the result with g_object_unref() when finished.
     */
    getCodepointList(): CodepointList
    /**
     * Gets the #GucharmapChaptersModel of #view.
     * @returns the #GucharmapChaptersModel
     */
    getModel(): ChaptersModel

    // Overloads of getModel

    /**
     * Returns the model the #GtkTreeView is based on.  Returns %NULL if the
     * model is unset.
     * @returns A #GtkTreeModel, or %NULL if none is currently being used.
     */
    getModel(): Gtk.TreeModel | null
    getSelected(): string | null
    next(): void
    /**
     * Moves to the previous chapter if applicable.
     */
    previous(): void
    selectCharacter(wc: string): boolean
    selectLocale(): boolean
    setModel(model: ChaptersModel): void

    // Overloads of setModel

    /**
     * Sets the model for a #GtkTreeView.  If the `tree_view` already has a model
     * set, it will remove it before setting the new model.  If `model` is %NULL,
     * then it will unset the old model.
     * @param model The model.
     */
    setModel(model: Gtk.TreeModel | null): void
    setSelected(name: string | null): boolean

    // Conflicting methods

    /**
     * Gets the name of the `buildable` object.
     * 
     * #GtkBuilder sets the name based on the
     * [GtkBuilder UI definition][BUILDER-UI]
     * used to construct the `buildable`.
     * @virtual 
     * @returns the name set with gtk_buildable_set_name()
     */
    getName(): string | null
    /**
     * Retrieves the name of a widget. See gtk_widget_set_name() for the
     * significance of widget names.
     * @returns name of the widget. This string is owned by GTK+ and should not be modified or freed
     */
    getName(): string | null

    // Overloads of getName

    /**
     * Gets the name of the `buildable` object.
     * 
     * #GtkBuilder sets the name based on the
     * [GtkBuilder UI definition][BUILDER-UI]
     * used to construct the `buildable`.
     * @virtual 
     * @returns the name set with gtk_buildable_set_name()
     */
    getName(): string | null
    /**
     * Sets the name of the `buildable` object.
     * @virtual 
     * @param name name to set
     */
    setName(name: string | null): void
    /**
     * Widgets can be named, which allows you to refer to them from a
     * CSS file. You can apply a style to widgets with a particular name
     * in the CSS file. See the documentation for the CSS syntax (on the
     * same page as the docs for #GtkStyleContext).
     * 
     * Note that the CSS syntax has certain special characters to delimit
     * and represent elements in a selector (period, #, >, *...), so using
     * these will make your widget impossible to match by name. Any combination
     * of alphanumeric symbols, dashes and underscores will suffice.
     * @param name name for the widget
     */
    setName(name: string | null): void

    // Overloads of setName

    /**
     * Sets the name of the `buildable` object.
     * @virtual 
     * @param name name to set
     */
    setName(name: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param childProperty the name of a child property installed on     the class of `container`
     */
    childNotify(child: Gtk.Widget, childProperty: string | null): void

    // Overloads of childNotify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @virtual 
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
     */
    childNotify(childProperty: GObject.ParamSpec): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @virtual 
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
     */
    childNotify(childProperty: GObject.ParamSpec): void

    // Class property signals of Gucharmap-2.90.Gucharmap.ChaptersView

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::activate-on-single-click", callback: (...args: any[]) => void): number
    on(sigName: "notify::activate-on-single-click", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::activate-on-single-click", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::activate-on-single-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::activate-on-single-click", ...args: any[]): void
    connect(sigName: "notify::enable-grid-lines", callback: (...args: any[]) => void): number
    on(sigName: "notify::enable-grid-lines", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enable-grid-lines", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enable-grid-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enable-grid-lines", ...args: any[]): void
    connect(sigName: "notify::enable-search", callback: (...args: any[]) => void): number
    on(sigName: "notify::enable-search", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enable-search", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enable-search", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enable-search", ...args: any[]): void
    connect(sigName: "notify::enable-tree-lines", callback: (...args: any[]) => void): number
    on(sigName: "notify::enable-tree-lines", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enable-tree-lines", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enable-tree-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enable-tree-lines", ...args: any[]): void
    connect(sigName: "notify::expander-column", callback: (...args: any[]) => void): number
    on(sigName: "notify::expander-column", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::expander-column", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::expander-column", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::expander-column", ...args: any[]): void
    connect(sigName: "notify::fixed-height-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-height-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-height-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-height-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-height-mode", ...args: any[]): void
    connect(sigName: "notify::headers-clickable", callback: (...args: any[]) => void): number
    on(sigName: "notify::headers-clickable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::headers-clickable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::headers-clickable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::headers-clickable", ...args: any[]): void
    connect(sigName: "notify::headers-visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::headers-visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::headers-visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::headers-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::headers-visible", ...args: any[]): void
    connect(sigName: "notify::hover-expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::hover-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hover-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hover-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hover-expand", ...args: any[]): void
    connect(sigName: "notify::hover-selection", callback: (...args: any[]) => void): number
    on(sigName: "notify::hover-selection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hover-selection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hover-selection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hover-selection", ...args: any[]): void
    connect(sigName: "notify::level-indentation", callback: (...args: any[]) => void): number
    on(sigName: "notify::level-indentation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::level-indentation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::level-indentation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::level-indentation", ...args: any[]): void
    connect(sigName: "notify::model", callback: (...args: any[]) => void): number
    on(sigName: "notify::model", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::model", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::reorderable", callback: (...args: any[]) => void): number
    on(sigName: "notify::reorderable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::reorderable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::reorderable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::reorderable", ...args: any[]): void
    connect(sigName: "notify::rubber-banding", callback: (...args: any[]) => void): number
    on(sigName: "notify::rubber-banding", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rubber-banding", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rubber-banding", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rubber-banding", ...args: any[]): void
    connect(sigName: "notify::rules-hint", callback: (...args: any[]) => void): number
    on(sigName: "notify::rules-hint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rules-hint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rules-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rules-hint", ...args: any[]): void
    connect(sigName: "notify::search-column", callback: (...args: any[]) => void): number
    on(sigName: "notify::search-column", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::search-column", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::search-column", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::search-column", ...args: any[]): void
    connect(sigName: "notify::show-expanders", callback: (...args: any[]) => void): number
    on(sigName: "notify::show-expanders", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::show-expanders", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::show-expanders", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::show-expanders", ...args: any[]): void
    connect(sigName: "notify::tooltip-column", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip-column", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-column", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-column", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip-column", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::border-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::border-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (...args: any[]) => void): number
    on(sigName: "notify::child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::resize-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::resize-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::resize-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (...args: any[]) => void): number
    on(sigName: "notify::app-paintable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::app-paintable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::composite-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::composite-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (...args: any[]) => void): number
    on(sigName: "notify::double-buffered", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::double-buffered", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (...args: any[]) => void): number
    on(sigName: "notify::events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (...args: any[]) => void): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (...args: any[]) => void): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (...args: any[]) => void): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (...args: any[]) => void): number
    on(sigName: "notify::no-show-all", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::no-show-all", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (...args: any[]) => void): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (...args: any[]) => void): number
    on(sigName: "notify::style", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::style", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (...args: any[]) => void): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (...args: any[]) => void): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (...args: any[]) => void): number
    on(sigName: "notify::width-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (...args: any[]) => void): number
    on(sigName: "notify::window", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::window", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::hadjustment", callback: (...args: any[]) => void): number
    on(sigName: "notify::hadjustment", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hadjustment", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hadjustment", ...args: any[]): void
    connect(sigName: "notify::hscroll-policy", callback: (...args: any[]) => void): number
    on(sigName: "notify::hscroll-policy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hscroll-policy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hscroll-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hscroll-policy", ...args: any[]): void
    connect(sigName: "notify::vadjustment", callback: (...args: any[]) => void): number
    on(sigName: "notify::vadjustment", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vadjustment", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vadjustment", ...args: any[]): void
    connect(sigName: "notify::vscroll-policy", callback: (...args: any[]) => void): number
    on(sigName: "notify::vscroll-policy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vscroll-policy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vscroll-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vscroll-policy", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ChaptersView extends Gtk.TreeView {

    // Own properties of Gucharmap-2.90.Gucharmap.ChaptersView

    static name: string

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
        (object: number, p0: number): void
    }

    /**
     * Signal callback interface for `status-message`
     */
    interface StatusMessageSignalCallback {
        (object: string | null): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Paned.ConstructorProperties {

        // Own constructor properties of Gucharmap-2.90.Gucharmap.Charmap

        activeChapter?: string | null
        activeCharacter?: number | null
        activePage?: number | null
        chaptersModel?: ChaptersModel | null
        fontDesc?: Pango.FontDescription | null
        /**
         * Whether font fallback is enabled.
         */
        fontFallback?: boolean | null
        snapPower2?: boolean | null
    }

}

interface Charmap extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own properties of Gucharmap-2.90.Gucharmap.Charmap

    activeChapter: string | null
    activeCharacter: number
    readonly activeCodepointList: CodepointList
    activePage: number
    chaptersModel: ChaptersModel
    fontDesc: Pango.FontDescription
    /**
     * Whether font fallback is enabled.
     */
    fontFallback: boolean
    snapPower2: boolean
    __gtype__: number

    // Own fields of Gucharmap-2.90.Gucharmap.Charmap

    parent: Gtk.Paned & Gtk.Container

    // Owm methods of Gucharmap-2.90.Gucharmap.Charmap

    getActiveChapter(): string | null
    getActiveCharacter(): string
    /**
     * Gets the `GucharmapCodepointList` associated with the #GucharmapChartable of
     * `charmap`.
     * @returns the #GucharmapCodepointList
     */
    getActiveCodepointList(): CodepointList
    getActivePage(): number
    getBookCodepointList(): CodepointList
    /**
     * Gets the #GucharmapChaptersModel associated with the #GucharmapChaptersView
     * of `charmap`.
     * @returns a #GucharmapChaptersModel
     */
    getChaptersModel(): ChaptersModel
    /**
     * Gets the #GucharmapChaptersView of `charmap`
     * @returns the #GucharmapChaptersView
     */
    getChaptersView(): ChaptersView
    getChaptersVisible(): boolean
    getChartable(): Chartable
    getFontDesc(): Pango.FontDescription
    getFontFallback(): boolean
    getPageVisible(page: number): boolean
    /**
     * Returns whether the number of columns the character table shows is
     * always a power of 2.
     */
    getSnapPow2(): boolean
    nextChapter(): void
    previousChapter(): void
    setActiveChapter(chapter: string | null): void
    setActiveCharacter(uc: string): void
    setActivePage(page: number): void
    setChaptersModel(model: ChaptersModel): void
    setChaptersVisible(visible: boolean): void
    /**
     * Sets `font_desc` as the font to use to display the character table.
     * @param fontDesc a #PangoFontDescription
     */
    setFontDesc(fontDesc: Pango.FontDescription): void
    setFontFallback(enableFontFallback: boolean): void
    setPageVisible(page: number, visible: boolean): void
    /**
     * Sets whether the number columns the character table shows should
     * always be a power of 2.
     * @param snap whether to enable or disable snapping
     */
    setSnapPow2(snap: boolean): void

    // Conflicting methods

    /**
     * Gets the name of the `buildable` object.
     * 
     * #GtkBuilder sets the name based on the
     * [GtkBuilder UI definition][BUILDER-UI]
     * used to construct the `buildable`.
     * @virtual 
     * @returns the name set with gtk_buildable_set_name()
     */
    getName(): string | null
    /**
     * Retrieves the name of a widget. See gtk_widget_set_name() for the
     * significance of widget names.
     * @returns name of the widget. This string is owned by GTK+ and should not be modified or freed
     */
    getName(): string | null

    // Overloads of getName

    /**
     * Gets the name of the `buildable` object.
     * 
     * #GtkBuilder sets the name based on the
     * [GtkBuilder UI definition][BUILDER-UI]
     * used to construct the `buildable`.
     * @virtual 
     * @returns the name set with gtk_buildable_set_name()
     */
    getName(): string | null
    /**
     * Sets the name of the `buildable` object.
     * @virtual 
     * @param name name to set
     */
    setName(name: string | null): void
    /**
     * Widgets can be named, which allows you to refer to them from a
     * CSS file. You can apply a style to widgets with a particular name
     * in the CSS file. See the documentation for the CSS syntax (on the
     * same page as the docs for #GtkStyleContext).
     * 
     * Note that the CSS syntax has certain special characters to delimit
     * and represent elements in a selector (period, #, >, *...), so using
     * these will make your widget impossible to match by name. Any combination
     * of alphanumeric symbols, dashes and underscores will suffice.
     * @param name name for the widget
     */
    setName(name: string | null): void

    // Overloads of setName

    /**
     * Sets the name of the `buildable` object.
     * @virtual 
     * @param name name to set
     */
    setName(name: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param childProperty the name of a child property installed on     the class of `container`
     */
    childNotify(child: Gtk.Widget, childProperty: string | null): void

    // Overloads of childNotify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @virtual 
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
     */
    childNotify(childProperty: GObject.ParamSpec): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @virtual 
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
     */
    childNotify(childProperty: GObject.ParamSpec): void

    // Own virtual methods of Gucharmap-2.90.Gucharmap.Charmap

    linkClicked(oldCharacter: string, newCharacter: string): void
    statusMessage(message: string | null): void

    // Own signals of Gucharmap-2.90.Gucharmap.Charmap

    connect(sigName: "link-clicked", callback: Charmap.LinkClickedSignalCallback): number
    on(sigName: "link-clicked", callback: Charmap.LinkClickedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "link-clicked", callback: Charmap.LinkClickedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "link-clicked", callback: Charmap.LinkClickedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "link-clicked", p0: number, ...args: any[]): void
    connect(sigName: "status-message", callback: Charmap.StatusMessageSignalCallback): number
    on(sigName: "status-message", callback: Charmap.StatusMessageSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "status-message", callback: Charmap.StatusMessageSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "status-message", callback: Charmap.StatusMessageSignalCallback): NodeJS.EventEmitter
    emit(sigName: "status-message", ...args: any[]): void

    // Class property signals of Gucharmap-2.90.Gucharmap.Charmap

    connect(sigName: "notify::active-chapter", callback: (...args: any[]) => void): number
    on(sigName: "notify::active-chapter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active-chapter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active-chapter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active-chapter", ...args: any[]): void
    connect(sigName: "notify::active-character", callback: (...args: any[]) => void): number
    on(sigName: "notify::active-character", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active-character", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active-character", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active-character", ...args: any[]): void
    connect(sigName: "notify::active-codepoint-list", callback: (...args: any[]) => void): number
    on(sigName: "notify::active-codepoint-list", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active-codepoint-list", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active-codepoint-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active-codepoint-list", ...args: any[]): void
    connect(sigName: "notify::active-page", callback: (...args: any[]) => void): number
    on(sigName: "notify::active-page", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active-page", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active-page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active-page", ...args: any[]): void
    connect(sigName: "notify::chapters-model", callback: (...args: any[]) => void): number
    on(sigName: "notify::chapters-model", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::chapters-model", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::chapters-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::chapters-model", ...args: any[]): void
    connect(sigName: "notify::font-desc", callback: (...args: any[]) => void): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::font-desc", ...args: any[]): void
    connect(sigName: "notify::font-fallback", callback: (...args: any[]) => void): number
    on(sigName: "notify::font-fallback", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::font-fallback", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::font-fallback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::font-fallback", ...args: any[]): void
    connect(sigName: "notify::snap-power-2", callback: (...args: any[]) => void): number
    on(sigName: "notify::snap-power-2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::snap-power-2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::snap-power-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::snap-power-2", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::max-position", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-position", ...args: any[]): void
    connect(sigName: "notify::min-position", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-position", ...args: any[]): void
    connect(sigName: "notify::position", callback: (...args: any[]) => void): number
    on(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::position-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::position-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::position-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::position-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::position-set", ...args: any[]): void
    connect(sigName: "notify::wide-handle", callback: (...args: any[]) => void): number
    on(sigName: "notify::wide-handle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::wide-handle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::wide-handle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::wide-handle", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::border-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::border-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (...args: any[]) => void): number
    on(sigName: "notify::child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::resize-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::resize-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::resize-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (...args: any[]) => void): number
    on(sigName: "notify::app-paintable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::app-paintable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::composite-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::composite-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (...args: any[]) => void): number
    on(sigName: "notify::double-buffered", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::double-buffered", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (...args: any[]) => void): number
    on(sigName: "notify::events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (...args: any[]) => void): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (...args: any[]) => void): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (...args: any[]) => void): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (...args: any[]) => void): number
    on(sigName: "notify::no-show-all", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::no-show-all", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (...args: any[]) => void): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (...args: any[]) => void): number
    on(sigName: "notify::style", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::style", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (...args: any[]) => void): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (...args: any[]) => void): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (...args: any[]) => void): number
    on(sigName: "notify::width-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (...args: any[]) => void): number
    on(sigName: "notify::window", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::window", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (...args: any[]) => void): number
    on(sigName: "notify::orientation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::orientation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::orientation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Charmap extends Gtk.Paned {

    // Own properties of Gucharmap-2.90.Gucharmap.Charmap

    static name: string

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
        (): void
    }

    /**
     * Signal callback interface for `copy-clipboard`
     */
    interface CopyClipboardSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `move-cursor`
     */
    interface MoveCursorSignalCallback {
        (object: Gtk.MovementStep, p0: number): boolean
    }

    /**
     * Signal callback interface for `paste-clipboard`
     */
    interface PasteClipboardSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `status-message`
     */
    interface StatusMessageSignalCallback {
        (object: string | null): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Scrollable.ConstructorProperties, Gtk.DrawingArea.ConstructorProperties {

        // Own constructor properties of Gucharmap-2.90.Gucharmap.Chartable

        activeCharacter?: number | null
        codepointList?: CodepointList | null
        fontDesc?: Pango.FontDescription | null
        /**
         * Whether font fallback is enabled.
         */
        fontFallback?: boolean | null
        snapPower2?: boolean | null
        zoomEnabled?: boolean | null
    }

}

interface Chartable extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {

    // Own properties of Gucharmap-2.90.Gucharmap.Chartable

    activeCharacter: number
    codepointList: CodepointList
    fontDesc: Pango.FontDescription
    /**
     * Whether font fallback is enabled.
     */
    fontFallback: boolean
    snapPower2: boolean
    zoomEnabled: boolean
    readonly zoomShowing: boolean
    __gtype__: number

    // Own fields of Gucharmap-2.90.Gucharmap.Chartable

    parentInstance: any

    // Owm methods of Gucharmap-2.90.Gucharmap.Chartable

    getActiveCharacter(): string
    getCodepointList(): CodepointList
    getFontDesc(): Pango.FontDescription
    getFontFallback(): boolean
    /**
     * Returns whether the number of columns the character table shows is
     * always a power of 2.
     */
    getSnapPow2(): boolean
    getZoomEnabled(): boolean
    /**
     * Sets `wc` as the selected character.
     * @param wc a unicode character (UTF-32)
     */
    setActiveCharacter(wc: string): void
    /**
     * Sets the codepoint list to show in the character table.
     * @param codepointList a #GucharmapCodepointList
     */
    setCodepointList(codepointList: CodepointList): void
    /**
     * Sets `font_desc` as the font to use to display the character table.
     * @param fontDesc a #PangoFontDescription
     */
    setFontDesc(fontDesc: Pango.FontDescription): void
    setFontFallback(enableFontFallback: boolean): void
    /**
     * Sets whether the number columns the character table shows should
     * always be a power of 2.
     * @param snap whether to enable or disable snapping
     */
    setSnapPow2(snap: boolean): void
    /**
     * Enables or disables the zoom popup.
     * @param enabled whether to enable zoom mode
     */
    setZoomEnabled(enabled: boolean): void

    // Conflicting methods

    /**
     * Gets the name of the `buildable` object.
     * 
     * #GtkBuilder sets the name based on the
     * [GtkBuilder UI definition][BUILDER-UI]
     * used to construct the `buildable`.
     * @virtual 
     * @returns the name set with gtk_buildable_set_name()
     */
    getName(): string | null
    /**
     * Retrieves the name of a widget. See gtk_widget_set_name() for the
     * significance of widget names.
     * @returns name of the widget. This string is owned by GTK+ and should not be modified or freed
     */
    getName(): string | null

    // Overloads of getName

    /**
     * Gets the name of the `buildable` object.
     * 
     * #GtkBuilder sets the name based on the
     * [GtkBuilder UI definition][BUILDER-UI]
     * used to construct the `buildable`.
     * @virtual 
     * @returns the name set with gtk_buildable_set_name()
     */
    getName(): string | null
    /**
     * Sets the name of the `buildable` object.
     * @virtual 
     * @param name name to set
     */
    setName(name: string | null): void
    /**
     * Widgets can be named, which allows you to refer to them from a
     * CSS file. You can apply a style to widgets with a particular name
     * in the CSS file. See the documentation for the CSS syntax (on the
     * same page as the docs for #GtkStyleContext).
     * 
     * Note that the CSS syntax has certain special characters to delimit
     * and represent elements in a selector (period, #, >, *...), so using
     * these will make your widget impossible to match by name. Any combination
     * of alphanumeric symbols, dashes and underscores will suffice.
     * @param name name for the widget
     */
    setName(name: string | null): void

    // Overloads of setName

    /**
     * Sets the name of the `buildable` object.
     * @virtual 
     * @param name name to set
     */
    setName(name: string | null): void

    // Own virtual methods of Gucharmap-2.90.Gucharmap.Chartable

    activate(): void

    // Overloads of activate

    /**
     * For widgets that can be “activated” (buttons, menu items, etc.)
     * this function activates them. Activation is what happens when you
     * press Enter on a widget during key navigation. If `widget` isn't
     * activatable, the function returns %FALSE.
     * @returns %TRUE if the widget was activatable
     */
    activate(): boolean
    copyClipboard(): void
    moveCursor(step: Gtk.MovementStep, count: number): boolean
    pasteClipboard(): void
    setActiveChar(ch: number): void
    setScrollAdjustments(hadjustment: Gtk.Adjustment, vadjustment: Gtk.Adjustment): void
    statusMessage(message: string | null): void

    // Own signals of Gucharmap-2.90.Gucharmap.Chartable

    connect(sigName: "activate", callback: Chartable.ActivateSignalCallback): number
    on(sigName: "activate", callback: Chartable.ActivateSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "activate", callback: Chartable.ActivateSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "activate", callback: Chartable.ActivateSignalCallback): NodeJS.EventEmitter
    emit(sigName: "activate", ...args: any[]): void
    connect(sigName: "copy-clipboard", callback: Chartable.CopyClipboardSignalCallback): number
    on(sigName: "copy-clipboard", callback: Chartable.CopyClipboardSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "copy-clipboard", callback: Chartable.CopyClipboardSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "copy-clipboard", callback: Chartable.CopyClipboardSignalCallback): NodeJS.EventEmitter
    emit(sigName: "copy-clipboard", ...args: any[]): void
    connect(sigName: "move-cursor", callback: Chartable.MoveCursorSignalCallback): number
    on(sigName: "move-cursor", callback: Chartable.MoveCursorSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "move-cursor", callback: Chartable.MoveCursorSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "move-cursor", callback: Chartable.MoveCursorSignalCallback): NodeJS.EventEmitter
    emit(sigName: "move-cursor", p0: number, ...args: any[]): void
    connect(sigName: "paste-clipboard", callback: Chartable.PasteClipboardSignalCallback): number
    on(sigName: "paste-clipboard", callback: Chartable.PasteClipboardSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "paste-clipboard", callback: Chartable.PasteClipboardSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "paste-clipboard", callback: Chartable.PasteClipboardSignalCallback): NodeJS.EventEmitter
    emit(sigName: "paste-clipboard", ...args: any[]): void
    connect(sigName: "status-message", callback: Chartable.StatusMessageSignalCallback): number
    on(sigName: "status-message", callback: Chartable.StatusMessageSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "status-message", callback: Chartable.StatusMessageSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "status-message", callback: Chartable.StatusMessageSignalCallback): NodeJS.EventEmitter
    emit(sigName: "status-message", ...args: any[]): void

    // Class property signals of Gucharmap-2.90.Gucharmap.Chartable

    connect(sigName: "notify::active-character", callback: (...args: any[]) => void): number
    on(sigName: "notify::active-character", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active-character", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active-character", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active-character", ...args: any[]): void
    connect(sigName: "notify::codepoint-list", callback: (...args: any[]) => void): number
    on(sigName: "notify::codepoint-list", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::codepoint-list", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::codepoint-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::codepoint-list", ...args: any[]): void
    connect(sigName: "notify::font-desc", callback: (...args: any[]) => void): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::font-desc", ...args: any[]): void
    connect(sigName: "notify::font-fallback", callback: (...args: any[]) => void): number
    on(sigName: "notify::font-fallback", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::font-fallback", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::font-fallback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::font-fallback", ...args: any[]): void
    connect(sigName: "notify::snap-power-2", callback: (...args: any[]) => void): number
    on(sigName: "notify::snap-power-2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::snap-power-2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::snap-power-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::snap-power-2", ...args: any[]): void
    connect(sigName: "notify::zoom-enabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::zoom-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::zoom-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::zoom-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::zoom-enabled", ...args: any[]): void
    connect(sigName: "notify::zoom-showing", callback: (...args: any[]) => void): number
    on(sigName: "notify::zoom-showing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::zoom-showing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::zoom-showing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::zoom-showing", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (...args: any[]) => void): number
    on(sigName: "notify::app-paintable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::app-paintable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::composite-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::composite-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (...args: any[]) => void): number
    on(sigName: "notify::double-buffered", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::double-buffered", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (...args: any[]) => void): number
    on(sigName: "notify::events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (...args: any[]) => void): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (...args: any[]) => void): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (...args: any[]) => void): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (...args: any[]) => void): number
    on(sigName: "notify::no-show-all", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::no-show-all", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (...args: any[]) => void): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (...args: any[]) => void): number
    on(sigName: "notify::style", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::style", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (...args: any[]) => void): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (...args: any[]) => void): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (...args: any[]) => void): number
    on(sigName: "notify::width-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (...args: any[]) => void): number
    on(sigName: "notify::window", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::window", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::hadjustment", callback: (...args: any[]) => void): number
    on(sigName: "notify::hadjustment", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hadjustment", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hadjustment", ...args: any[]): void
    connect(sigName: "notify::hscroll-policy", callback: (...args: any[]) => void): number
    on(sigName: "notify::hscroll-policy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hscroll-policy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hscroll-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hscroll-policy", ...args: any[]): void
    connect(sigName: "notify::vadjustment", callback: (...args: any[]) => void): number
    on(sigName: "notify::vadjustment", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vadjustment", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vadjustment", ...args: any[]): void
    connect(sigName: "notify::vscroll-policy", callback: (...args: any[]) => void): number
    on(sigName: "notify::vscroll-policy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vscroll-policy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vscroll-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vscroll-policy", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Chartable extends Gtk.DrawingArea {

    // Own properties of Gucharmap-2.90.Gucharmap.Chartable

    static name: string

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

    // Own properties of Gucharmap-2.90.Gucharmap.ChartableAccessible

    __gtype__: number

    // Conflicting properties

    parent: Atk.Object & GObject.Object & GObject.Object

    // Conflicting methods

    /**
     * Returns a description of the specified action of the object.
     * @virtual 
     * @param i the action index corresponding to the action to be performed
     * @returns a description string, or %NULL if @action does not implement this interface.
     */
    getDescription(i: number): string | null
    /**
     * Gets the accessible description of the accessible.
     * @virtual 
     * @returns a character string representing the accessible description of the accessible.
     */
    getDescription(): string | null
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
    getName(i: number): string | null
    /**
     * Gets the accessible name of the accessible.
     * @virtual 
     * @returns a character string representing the accessible name of the object.
     */
    getName(): string | null
    /**
     * Sets a description of the specified action of the object.
     * @virtual 
     * @param i the action index corresponding to the action to be performed
     * @param desc the description to be assigned to this action
     * @returns a gboolean representing if the description was successfully set;
     */
    setDescription(i: number, desc: string | null): boolean
    /**
     * Sets the accessible description of the accessible. You can't set
     * the description to NULL. This is reserved for the initial value. In
     * this aspect NULL is similar to ATK_ROLE_UNKNOWN. If you want to set
     * the name to a empty value you can use "".
     * @virtual 
     * @param description a character string to be set as the accessible description
     */
    setDescription(description: string | null): void
    /**
     * Gets the layer of the component.
     * @virtual 
     * @returns an #AtkLayer which is the layer of the component
     */
    getLayer(): Atk.Layer
    /**
     * Gets the layer of the accessible.
     * @virtual 
     * @returns an #AtkLayer which is the layer of the accessible
     */
    getLayer(): Atk.Layer
    /**
     * Gets the zorder of the component. The value G_MININT will be returned
     * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
     * @virtual 
     * @returns a gint which is the zorder of the component, i.e. the depth at which the component is shown in relation to other components in the same container.
     */
    getMdiZorder(): number
    /**
     * Gets the zorder of the accessible. The value G_MININT will be returned
     * if the layer of the accessible is not ATK_LAYER_MDI.
     * @virtual 
     * @returns a gint which is the zorder of the accessible, i.e. the depth at which the component is shown in relation to other components in the same container.
     */
    getMdiZorder(): number
    /**
     * Gets the position of `component` in the form of
     * a point specifying `component'`s top-left corner.
     * 
     * If the position can not be obtained (e.g. a non-embedded plug or missing
     * support), x and y are set to -1.
     * @virtual 
     * @param coordType specifies whether the coordinates are relative to the screen or to the components top level window
     */
    getPosition(coordType: Atk.CoordType): [ /* x */ number, /* y */ number ]
    /**
     * Retrieves the tabular position of this cell.
     * @virtual 
     * @returns TRUE if successful; FALSE otherwise.
     */
    getPosition(): [ /* returnType */ boolean, /* row */ number, /* column */ number ]
    /**
     * Gets an AtkAttributeSet which describes document-wide
     *          attributes as name-value pairs.
     * @returns An AtkAttributeSet containing the explicitly          set name-value-pair attributes associated with this document          as a whole.
     */
    getAttributes(): Atk.AttributeSet
    /**
     * Get a list of properties applied to this object as a whole, as an #AtkAttributeSet consisting of
     * name-value pairs. As such these attributes may be considered weakly-typed properties or annotations,
     * as distinct from strongly-typed object data available via other get/set methods.
     * Not all objects have explicit "name-value pair" #AtkAttributeSet properties.
     * @virtual 
     * @returns an #AtkAttributeSet consisting of all explicit properties/annotations applied to the object, or an empty set if the object has no name-value pair attributes assigned to it. This #atkattributeset should be freed by a call to atk_attribute_set_free().
     */
    getAttributes(): Atk.AttributeSet
    /**
     * Adds the specified accessible child of the object to the
     * object's selection.
     * @virtual 
     * @param i a #gint specifying the child index.
     * @returns TRUE if success, FALSE otherwise.
     */
    addSelection(i: number): boolean
    /**
     * Adds a selection bounded by the specified offsets.
     * @virtual 
     * @param startOffset the starting character offset of the selected region
     * @param endOffset the offset of the first character after the selected region.
     * @returns %TRUE if successful, %FALSE otherwise
     */
    addSelection(startOffset: number, endOffset: number): boolean
    /**
     * Removes the specified child of the object from the object's selection.
     * @virtual 
     * @param i a #gint specifying the index in the selection set.  (e.g. the ith selection as opposed to the ith child).
     * @returns TRUE if success, FALSE otherwise.
     */
    removeSelection(i: number): boolean
    /**
     * Removes the specified selection.
     * @virtual 
     * @param selectionNum The selection number.  The selected regions are assigned numbers that correspond to how far the region is from the start of the text.  The selected region closest to the beginning of the text region is assigned the number 0, etc.  Note that adding, moving or deleting a selected region can change the numbering.
     * @returns %TRUE if successful, %FALSE otherwise
     */
    removeSelection(selectionNum: number): boolean

    // Class property signals of Gucharmap-2.90.Gucharmap.ChartableAccessible

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-component-layer", ...args: any[]): void
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-component-mdi-zorder", ...args: any[]): void
    connect(sigName: "notify::accessible-description", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-description", ...args: any[]): void
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-hypertext-nlinks", ...args: any[]): void
    connect(sigName: "notify::accessible-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-name", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-caption", ...args: any[]): void
    connect(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-caption-object", ...args: any[]): void
    connect(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-column-description", ...args: any[]): void
    connect(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-column-header", ...args: any[]): void
    connect(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-row-description", ...args: any[]): void
    connect(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-row-header", ...args: any[]): void
    connect(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-summary", ...args: any[]): void
    connect(sigName: "notify::accessible-value", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ChartableAccessible extends Atk.NoOpObject {

    // Own properties of Gucharmap-2.90.Gucharmap.ChartableAccessible

    static name: string

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

    // Own properties of Gucharmap-2.90.Gucharmap.ChartableCellAccessible

    __gtype__: number

    // Own fields of Gucharmap-2.90.Gucharmap.ChartableCellAccessible

    parent: Atk.Object & GObject.Object
    widget: Gtk.Widget
    index: number
    stateSet: Atk.StateSet
    activateDescription: string | null
    actionIdleHandler: number

    // Owm methods of Gucharmap-2.90.Gucharmap.ChartableCellAccessible

    addState(stateType: Atk.StateType, emitSignal: boolean): boolean
    initialise(widget: Gtk.Widget, parent: Atk.Object, index: number): void
    removeState(stateType: Atk.StateType, emitSignal: boolean): boolean

    // Conflicting methods

    /**
     * Returns a description of the specified action of the object.
     * @virtual 
     * @param i the action index corresponding to the action to be performed
     * @returns a description string, or %NULL if @action does not implement this interface.
     */
    getDescription(i: number): string | null
    /**
     * Gets the accessible description of the accessible.
     * @virtual 
     * @returns a character string representing the accessible description of the accessible.
     */
    getDescription(): string | null
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
    getName(i: number): string | null
    /**
     * Gets the accessible name of the accessible.
     * @virtual 
     * @returns a character string representing the accessible name of the object.
     */
    getName(): string | null
    /**
     * Sets a description of the specified action of the object.
     * @virtual 
     * @param i the action index corresponding to the action to be performed
     * @param desc the description to be assigned to this action
     * @returns a gboolean representing if the description was successfully set;
     */
    setDescription(i: number, desc: string | null): boolean
    /**
     * Sets the accessible description of the accessible. You can't set
     * the description to NULL. This is reserved for the initial value. In
     * this aspect NULL is similar to ATK_ROLE_UNKNOWN. If you want to set
     * the name to a empty value you can use "".
     * @virtual 
     * @param description a character string to be set as the accessible description
     */
    setDescription(description: string | null): void
    /**
     * Gets the layer of the component.
     * @virtual 
     * @returns an #AtkLayer which is the layer of the component
     */
    getLayer(): Atk.Layer
    /**
     * Gets the layer of the accessible.
     * @virtual 
     * @returns an #AtkLayer which is the layer of the accessible
     */
    getLayer(): Atk.Layer
    /**
     * Gets the zorder of the component. The value G_MININT will be returned
     * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
     * @virtual 
     * @returns a gint which is the zorder of the component, i.e. the depth at which the component is shown in relation to other components in the same container.
     */
    getMdiZorder(): number
    /**
     * Gets the zorder of the accessible. The value G_MININT will be returned
     * if the layer of the accessible is not ATK_LAYER_MDI.
     * @virtual 
     * @returns a gint which is the zorder of the accessible, i.e. the depth at which the component is shown in relation to other components in the same container.
     */
    getMdiZorder(): number

    // Class property signals of Gucharmap-2.90.Gucharmap.ChartableCellAccessible

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-component-layer", ...args: any[]): void
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-component-mdi-zorder", ...args: any[]): void
    connect(sigName: "notify::accessible-description", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-description", ...args: any[]): void
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-hypertext-nlinks", ...args: any[]): void
    connect(sigName: "notify::accessible-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-name", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-caption", ...args: any[]): void
    connect(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-caption-object", ...args: any[]): void
    connect(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-column-description", ...args: any[]): void
    connect(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-column-header", ...args: any[]): void
    connect(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-row-description", ...args: any[]): void
    connect(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-row-header", ...args: any[]): void
    connect(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-summary", ...args: any[]): void
    connect(sigName: "notify::accessible-value", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ChartableCellAccessible extends Atk.Object {

    // Own properties of Gucharmap-2.90.Gucharmap.ChartableCellAccessible

    static name: string

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

    // Own properties of Gucharmap-2.90.Gucharmap.CodepointList

    __gtype__: number

    // Own fields of Gucharmap-2.90.Gucharmap.CodepointList

    parentInstance: GObject.Object

    // Owm methods of Gucharmap-2.90.Gucharmap.CodepointList

    // Has conflict: getChar(index: number): string
    // Has conflict: getIndex(wc: string): number
    // Has conflict: getLastIndex(): number

    // Own virtual methods of Gucharmap-2.90.Gucharmap.CodepointList

    getChar(index: number): string
    getIndex(wc: string): number
    getLastIndex(): number

    // Class property signals of Gucharmap-2.90.Gucharmap.CodepointList

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class CodepointList extends GObject.Object {

    // Own properties of Gucharmap-2.90.Gucharmap.CodepointList

    static name: string

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

    // Own properties of Gucharmap-2.90.Gucharmap.ScriptChaptersModel

    __gtype__: number

    // Own fields of Gucharmap-2.90.Gucharmap.ScriptChaptersModel

    parent: ChaptersModel & GObject.Object

    // Class property signals of Gucharmap-2.90.Gucharmap.ScriptChaptersModel

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ScriptChaptersModel extends ChaptersModel {

    // Own properties of Gucharmap-2.90.Gucharmap.ScriptChaptersModel

    static name: string

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

    // Own properties of Gucharmap-2.90.Gucharmap.ScriptCodepointList

    __gtype__: number

    // Own fields of Gucharmap-2.90.Gucharmap.ScriptCodepointList

    parent: CodepointList

    // Owm methods of Gucharmap-2.90.Gucharmap.ScriptCodepointList

    /**
     * Appends the characters in `script` to the codepoint list.
     * @param script the script name
     * @returns %TRUE on success, %FALSE if there is no such script, in which case the codepoint list is not changed.
     */
    appendScript(script: string | null): boolean
    /**
     * Sets the script for the codepoint list.
     * @param script the script name
     * @returns %TRUE on success, %FALSE if there is no such script, in which case the script is not changed.
     */
    setScript(script: string | null): boolean
    /**
     * Sets multiple scripts for the codepoint list. Codepoints are sorted
     * according to their order in `scripts`.
     * @param scripts NULL-terminated array of script names
     * @returns %TRUE on success, %FALSE if any of the scripts don’t exist, in which case the script is not changed.
     */
    setScripts(scripts: string | null): boolean

    // Class property signals of Gucharmap-2.90.Gucharmap.ScriptCodepointList

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ScriptCodepointList extends CodepointList {

    // Own properties of Gucharmap-2.90.Gucharmap.ScriptCodepointList

    static name: string

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

    parentClass: ChaptersModelClass
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

    parentClass: CodepointListClass
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

    parentClass: Gtk.ListStoreClass
    title: string | null
    characterToIter: (chapters: ChaptersModel, wc: string) => [ /* returnType */ boolean, /* iter */ Gtk.TreeIter ]
    getCodepointList: (chapters: ChaptersModel, iter: Gtk.TreeIter) => CodepointList
    getBookCodepointList: (chapters: ChaptersModel) => CodepointList
}

abstract class ChaptersModelClass {

    // Own properties of Gucharmap-2.90.Gucharmap.ChaptersModelClass

    static name: string
}

interface ChaptersModelPrivate {

    // Own fields of Gucharmap-2.90.Gucharmap.ChaptersModelPrivate

    bookList: CodepointList
}

class ChaptersModelPrivate {

    // Own properties of Gucharmap-2.90.Gucharmap.ChaptersModelPrivate

    static name: string
}

interface ChaptersViewClass {

    // Own fields of Gucharmap-2.90.Gucharmap.ChaptersViewClass

    parentClass: Gtk.TreeViewClass
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

    parentClass: Gtk.PanedClass
    statusMessage: (charmap: Charmap, message: string | null) => void
    linkClicked: (charmap: Charmap, oldCharacter: string, newCharacter: string) => void
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

    parentClass: Atk.ObjectClass
}

abstract class ChartableCellAccessibleClass {

    // Own properties of Gucharmap-2.90.Gucharmap.ChartableCellAccessibleClass

    static name: string
}

interface ChartableClass {

    // Own fields of Gucharmap-2.90.Gucharmap.ChartableClass

    parentClass: Gtk.DrawingAreaClass
    setScrollAdjustments: (chartable: Chartable, hadjustment: Gtk.Adjustment, vadjustment: Gtk.Adjustment) => void
    moveCursor: (chartable: Chartable, step: Gtk.MovementStep, count: number) => boolean
    activate: (chartable: Chartable) => void
    copyClipboard: (chartable: Chartable) => void
    pasteClipboard: (chartable: Chartable) => void
    setActiveChar: (chartable: Chartable, ch: number) => void
    statusMessage: (chartable: Chartable, message: string | null) => void
}

abstract class ChartableClass {

    // Own properties of Gucharmap-2.90.Gucharmap.ChartableClass

    static name: string
}

interface ChartablePrivate {

    // Own fields of Gucharmap-2.90.Gucharmap.ChartablePrivate

    vadjustment: Gtk.Adjustment
    vadjustmentChangedHandlerId: number
    hadjustment: Gtk.Adjustment
    hscrollPolicy: number
    vscrollPolicy: number
    fontDesc: Pango.FontDescription
    minimalColumnWidth: number
    minimalRowHeight: number
    nPaddedColumns: number
    nPaddedRows: number
    rows: number
    cols: number
    pageSize: number
    pageFirstCell: number
    activeCell: number
    pangoLayout: Pango.Layout
    zoomWindow: Gtk.Widget
    zoomImageWidth: number
    zoomImageHeight: number
    clickX: number
    clickY: number
    targetList: Gtk.TargetList
    codepointList: CodepointList
    lastCell: number
    codepointListChanged: boolean
    snapPow2Enabled: number
    zoomModeEnabled: number
    fontFallback: number
}

class ChartablePrivate {

    // Own properties of Gucharmap-2.90.Gucharmap.ChartablePrivate

    static name: string
}

interface CodepointListClass {

    // Own fields of Gucharmap-2.90.Gucharmap.CodepointListClass

    parentClass: GObject.ObjectClass
    getLastIndex: (list: CodepointList) => number
    getChar: (list: CodepointList, index: number) => string
    getIndex: (list: CodepointList, wc: string) => number
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

    parentClass: ChaptersModelClass
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

    parentClass: CodepointListClass
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

}

export default Gucharmap;
// END