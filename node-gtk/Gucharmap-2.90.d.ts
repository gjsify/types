// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Gucharmap-2.90
 */

import type Pango from './Pango-1.0';
import type cairo from './cairo-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Gtk from './Gtk-3.0';
import type xlib from './xlib-2.0';
import type Gdk from './Gdk-3.0';
import type Gio from './Gio-2.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type GModule from './GModule-2.0';
import type Atk from './Atk-1.0';

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
function getUnicodeCategoryName(uc: string): string
function getUnicodeDataName(uc: string): string
function getUnicodeDataNameCount(): number
function getUnicodeKCantonese(uc: string): string
function getUnicodeKDefinition(uc: string): string
function getUnicodeKJapaneseKun(uc: string): string
function getUnicodeKJapaneseOn(uc: string): string
function getUnicodeKKorean(uc: string): string
function getUnicodeKMandarin(uc: string): string
function getUnicodeKTang(uc: string): string
function getUnicodeName(uc: string): string
function getUnicodeVersion(uc: string): UnicodeVersion
function getUnihanCount(): number
/**
 * Determines if a given character is assigned in the Unicode
 * standard.
 * @param uc a Unicode character
 */
function unicharIsdefined(uc: string): boolean
/**
 * Determines whether a character is printable and not a space
 * (returns %FALSE for control characters, format characters, and
 * spaces). g_unichar_isprint() is similar, but returns %TRUE for
 * spaces. Given some UTF-8 text, obtain a character value with
 * g_utf8_get_char().
 * @param uc a Unicode character
 */
function unicharIsgraph(uc: string): boolean
/**
 * Converts a single character to UTF-8 suitable for rendering. Check the
 * source to see what this means. ;-)
 * @param uc a unicode character
 * @param outbuf output buffer, must have at least 10 bytes of space.          If %NULL, the length will be computed and returned          and nothing will be written to `outbuf`.
 */
function unicharToPrintableUtf8(uc: string, outbuf: string): number
/**
 * Classifies a Unicode character by type.
 * @param uc a Unicode character
 */
function unicharType(uc: string): GLib.UnicodeType
function unicharValidate(uc: string): boolean
/**
 * Determines a character that's commonly used in the current
 * locale's script.
 */
function unicodeGetLocaleCharacter(): string
function unicodeGetScriptForChar(wc: string): string
/**
 * Returns an array of untranslated script names.
 * 
 * The strings in the array are owned by gucharmap and should not be
 * modified or free; the array itself however is allocated and should
 * be freed with g_free().
 */
function unicodeListScripts(): string[]
function unicodeVersionToString(version: UnicodeVersion): string
interface BlockChaptersModel_ConstructProps extends Gtk.Buildable_ConstructProps, Gtk.TreeDragDest_ConstructProps, Gtk.TreeDragSource_ConstructProps, Gtk.TreeModel_ConstructProps, Gtk.TreeSortable_ConstructProps, ChaptersModel_ConstructProps {
}

interface BlockChaptersModel extends Gtk.Buildable, Gtk.TreeDragDest, Gtk.TreeDragSource, Gtk.TreeModel, Gtk.TreeSortable {

    // Own fields of Gucharmap-2.90.Gucharmap.BlockChaptersModel

    parent: ChaptersModel

    // Class property signals of Gucharmap-2.90.Gucharmap.BlockChaptersModel

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class BlockChaptersModel extends ChaptersModel {

    // Own properties of Gucharmap-2.90.Gucharmap.BlockChaptersModel

    static name: string
    static $gtype: GObject.GType<BlockChaptersModel>

    // Constructors of Gucharmap-2.90.Gucharmap.BlockChaptersModel

    constructor(config?: BlockChaptersModel_ConstructProps) 
    constructor() 
    static new(): BlockChaptersModel

    // Overloads of new

    /**
     * Non-vararg creation function.  Used primarily by language bindings.
     * @constructor 
     * @param types an array of #GType types for the columns, from first to last
     */
    static new(types: GObject.GType[]): Gtk.ListStore
    _init(config?: BlockChaptersModel_ConstructProps): void
}

interface BlockCodepointList_ConstructProps extends CodepointList_ConstructProps {

    // Own constructor properties of Gucharmap-2.90.Gucharmap.BlockCodepointList

    firstCodepoint?: number | null
    lastCodepoint?: number | null
}

interface BlockCodepointList {

    // Own properties of Gucharmap-2.90.Gucharmap.BlockCodepointList

    readonly firstCodepoint: number
    readonly lastCodepoint: number

    // Own fields of Gucharmap-2.90.Gucharmap.BlockCodepointList

    parentInstance: CodepointList

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class BlockCodepointList extends CodepointList {

    // Own properties of Gucharmap-2.90.Gucharmap.BlockCodepointList

    static name: string
    static $gtype: GObject.GType<BlockCodepointList>

    // Constructors of Gucharmap-2.90.Gucharmap.BlockCodepointList

    constructor(config?: BlockCodepointList_ConstructProps) 
    /**
     * Creates a new codepoint list for the range `start`..`end`.
     * @constructor 
     * @param start the first codepoint
     * @param end the last codepoint
     */
    constructor(start: string, end: string) 
    /**
     * Creates a new codepoint list for the range `start`..`end`.
     * @constructor 
     * @param start the first codepoint
     * @param end the last codepoint
     */
    static new(start: string, end: string): BlockCodepointList
    _init(config?: BlockCodepointList_ConstructProps): void
}

interface ChaptersModel_ConstructProps extends Gtk.Buildable_ConstructProps, Gtk.TreeDragDest_ConstructProps, Gtk.TreeDragSource_ConstructProps, Gtk.TreeModel_ConstructProps, Gtk.TreeSortable_ConstructProps, Gtk.ListStore_ConstructProps {
}

interface ChaptersModel extends Gtk.Buildable, Gtk.TreeDragDest, Gtk.TreeDragSource, Gtk.TreeModel, Gtk.TreeSortable {

    // Own fields of Gucharmap-2.90.Gucharmap.ChaptersModel

    parentInstance: Gtk.ListStore

    // Owm methods of Gucharmap-2.90.Gucharmap.ChaptersModel

    characterToIter(wc: string): [ /* returnType */ boolean, /* iter */ Gtk.TreeIter ]
    getBookCodepointList(): CodepointList
    /**
     * Creates a new #GucharmapCodepointList representing the characters in the
     * current chapter.
     * @param iter a #GtkTreeIter
     */
    getCodepointList(iter: Gtk.TreeIter): CodepointList
    getTitle(): string
    idToIter(id: string): [ /* returnType */ boolean, /* iter */ Gtk.TreeIter ]

    // Class property signals of Gucharmap-2.90.Gucharmap.ChaptersModel

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ChaptersModel extends Gtk.ListStore {

    // Own properties of Gucharmap-2.90.Gucharmap.ChaptersModel

    static name: string
    static $gtype: GObject.GType<ChaptersModel>

    // Constructors of Gucharmap-2.90.Gucharmap.ChaptersModel

    constructor(config?: ChaptersModel_ConstructProps) 
    _init(config?: ChaptersModel_ConstructProps): void
}

interface ChaptersView_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.Scrollable_ConstructProps, Gtk.TreeView_ConstructProps {
}

interface ChaptersView extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {

    // Own fields of Gucharmap-2.90.Gucharmap.ChaptersView

    parentInstance: Gtk.TreeView

    // Owm methods of Gucharmap-2.90.Gucharmap.ChaptersView

    getBookCodepointList(): CodepointList
    /**
     * Creates a new #GucharmapCodepointList representing the characters in the
     * current chapter.
     */
    getCodepointList(): CodepointList
    /**
     * Gets the #GucharmapChaptersModel of #view.
     */
    getModel(): ChaptersModel

    // Overloads of getModel

    /**
     * Returns the model the #GtkTreeView is based on.  Returns %NULL if the
     * model is unset.
     */
    getModel(): Gtk.TreeModel | null
    getModel(...args: any[]): any
    getModel(...args: any[]): ChaptersModel | Gtk.TreeModel | null | any
    getSelected(): string
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
    setModel(...args: any[]): any
    setModel(args_or_model: any[] | Gtk.TreeModel | null): void | any
    setSelected(name: string): boolean

    // Conflicting methods

    childNotify(...args: any[]): any

    // Class property signals of Gucharmap-2.90.Gucharmap.ChaptersView

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
    static $gtype: GObject.GType<ChaptersView>

    // Constructors of Gucharmap-2.90.Gucharmap.ChaptersView

    constructor(config?: ChaptersView_ConstructProps) 
    /**
     * Creates a new #GucharmapChaptersView object.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GucharmapChaptersView object.
     * @constructor 
     */
    static new(): ChaptersView
    _init(config?: ChaptersView_ConstructProps): void
}

interface Charmap_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.Orientable_ConstructProps, Gtk.Paned_ConstructProps {

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

/**
 * Signal callback interface for `link-clicked`
 */
interface Charmap_LinkClickedSignalCallback {
    (object: number, p0: number): void
}

/**
 * Signal callback interface for `status-message`
 */
interface Charmap_StatusMessageSignalCallback {
    (object: string): void
}

interface Charmap extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own properties of Gucharmap-2.90.Gucharmap.Charmap

    activeChapter: string
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

    // Own fields of Gucharmap-2.90.Gucharmap.Charmap

    parent: Gtk.Paned

    // Owm methods of Gucharmap-2.90.Gucharmap.Charmap

    getActiveChapter(): string
    getActiveCharacter(): string
    /**
     * Gets the `GucharmapCodepointList` associated with the #GucharmapChartable of
     * `charmap`.
     */
    getActiveCodepointList(): CodepointList
    getActivePage(): number
    getBookCodepointList(): CodepointList
    /**
     * Gets the #GucharmapChaptersModel associated with the #GucharmapChaptersView
     * of `charmap`.
     */
    getChaptersModel(): ChaptersModel
    /**
     * Gets the #GucharmapChaptersView of `charmap`
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
    setActiveChapter(chapter: string): void
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

    childNotify(...args: any[]): any

    // Own signals of Gucharmap-2.90.Gucharmap.Charmap

    connect(sigName: "link-clicked", callback: Charmap_LinkClickedSignalCallback): number
    on(sigName: "link-clicked", callback: Charmap_LinkClickedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "link-clicked", callback: Charmap_LinkClickedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "link-clicked", callback: Charmap_LinkClickedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "link-clicked", p0: number, ...args: any[]): void
    connect(sigName: "status-message", callback: Charmap_StatusMessageSignalCallback): number
    on(sigName: "status-message", callback: Charmap_StatusMessageSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "status-message", callback: Charmap_StatusMessageSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "status-message", callback: Charmap_StatusMessageSignalCallback): NodeJS.EventEmitter
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
    static $gtype: GObject.GType<Charmap>

    // Constructors of Gucharmap-2.90.Gucharmap.Charmap

    constructor(config?: Charmap_ConstructProps) 
    constructor() 
    static new(): Charmap

    // Overloads of new

    /**
     * Creates a new #GtkPaned widget.
     * @constructor 
     * @param orientation the paned’s orientation.
     */
    static new(orientation: Gtk.Orientation): Gtk.Paned
    _init(config?: Charmap_ConstructProps): void
}

interface Chartable_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.Scrollable_ConstructProps, Gtk.DrawingArea_ConstructProps {

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

/**
 * Signal callback interface for `activate`
 */
interface Chartable_ActivateSignalCallback {
    (): void
}

/**
 * Signal callback interface for `copy-clipboard`
 */
interface Chartable_CopyClipboardSignalCallback {
    (): void
}

/**
 * Signal callback interface for `move-cursor`
 */
interface Chartable_MoveCursorSignalCallback {
    (object: Gtk.MovementStep, p0: number): boolean
}

/**
 * Signal callback interface for `paste-clipboard`
 */
interface Chartable_PasteClipboardSignalCallback {
    (): void
}

/**
 * Signal callback interface for `status-message`
 */
interface Chartable_StatusMessageSignalCallback {
    (object: string): void
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

    // Own fields of Gucharmap-2.90.Gucharmap.Chartable

    parentInstance: Gtk.DrawingArea

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

    // Own signals of Gucharmap-2.90.Gucharmap.Chartable

    connect(sigName: "activate", callback: Chartable_ActivateSignalCallback): number
    on(sigName: "activate", callback: Chartable_ActivateSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "activate", callback: Chartable_ActivateSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "activate", callback: Chartable_ActivateSignalCallback): NodeJS.EventEmitter
    emit(sigName: "activate", ...args: any[]): void
    connect(sigName: "copy-clipboard", callback: Chartable_CopyClipboardSignalCallback): number
    on(sigName: "copy-clipboard", callback: Chartable_CopyClipboardSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "copy-clipboard", callback: Chartable_CopyClipboardSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "copy-clipboard", callback: Chartable_CopyClipboardSignalCallback): NodeJS.EventEmitter
    emit(sigName: "copy-clipboard", ...args: any[]): void
    connect(sigName: "move-cursor", callback: Chartable_MoveCursorSignalCallback): number
    on(sigName: "move-cursor", callback: Chartable_MoveCursorSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "move-cursor", callback: Chartable_MoveCursorSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "move-cursor", callback: Chartable_MoveCursorSignalCallback): NodeJS.EventEmitter
    emit(sigName: "move-cursor", p0: number, ...args: any[]): void
    connect(sigName: "paste-clipboard", callback: Chartable_PasteClipboardSignalCallback): number
    on(sigName: "paste-clipboard", callback: Chartable_PasteClipboardSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "paste-clipboard", callback: Chartable_PasteClipboardSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "paste-clipboard", callback: Chartable_PasteClipboardSignalCallback): NodeJS.EventEmitter
    emit(sigName: "paste-clipboard", ...args: any[]): void
    connect(sigName: "status-message", callback: Chartable_StatusMessageSignalCallback): number
    on(sigName: "status-message", callback: Chartable_StatusMessageSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "status-message", callback: Chartable_StatusMessageSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "status-message", callback: Chartable_StatusMessageSignalCallback): NodeJS.EventEmitter
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
    static $gtype: GObject.GType<Chartable>

    // Constructors of Gucharmap-2.90.Gucharmap.Chartable

    constructor(config?: Chartable_ConstructProps) 
    constructor() 
    static new(): Chartable
    _init(config?: Chartable_ConstructProps): void
}

interface ChartableAccessible_ConstructProps extends Atk.Action_ConstructProps, Atk.Component_ConstructProps, Atk.Document_ConstructProps, Atk.EditableText_ConstructProps, Atk.Hypertext_ConstructProps, Atk.Image_ConstructProps, Atk.Selection_ConstructProps, Atk.Table_ConstructProps, Atk.TableCell_ConstructProps, Atk.Text_ConstructProps, Atk.Value_ConstructProps, Atk.Window_ConstructProps, Atk.NoOpObject_ConstructProps {
}

interface ChartableAccessible extends Atk.Action, Atk.Component, Atk.Document, Atk.EditableText, Atk.Hypertext, Atk.Image, Atk.Selection, Atk.Table, Atk.TableCell, Atk.Text, Atk.Value, Atk.Window {

    // Conflicting properties

    parent: any

    // Conflicting methods

    getDescription(...args: any[]): any
    getName(...args: any[]): any
    setDescription(...args: any[]): any
    getPosition(...args: any[]): any
    addSelection(...args: any[]): any
    vfuncGetDescription(...args: any[]): any
    vfuncGetName(...args: any[]): any
    vfuncSetDescription(...args: any[]): any
    vfuncGetPosition(...args: any[]): any
    vfuncAddSelection(...args: any[]): any

    // Class property signals of Gucharmap-2.90.Gucharmap.ChartableAccessible

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
    static $gtype: GObject.GType<ChartableAccessible>

    // Constructors of Gucharmap-2.90.Gucharmap.ChartableAccessible

    constructor(config?: ChartableAccessible_ConstructProps) 
    constructor(chartable: Chartable) 
    static new(chartable: Chartable): ChartableAccessible

    // Overloads of new

    /**
     * Provides a default (non-functioning stub) #AtkObject.
     * Application maintainers should not use this method.
     * @constructor 
     * @param obj a #GObject
     */
    static new(obj: GObject.Object): Atk.NoOpObject
    _init(config?: ChartableAccessible_ConstructProps): void
}

interface ChartableCellAccessible_ConstructProps extends Atk.Action_ConstructProps, Atk.Component_ConstructProps, Atk.Object_ConstructProps {
}

interface ChartableCellAccessible extends Atk.Action, Atk.Component {

    // Own fields of Gucharmap-2.90.Gucharmap.ChartableCellAccessible

    parent: Atk.Object
    widget: Gtk.Widget
    index: number
    stateSet: Atk.StateSet
    activateDescription: string
    actionIdleHandler: number

    // Owm methods of Gucharmap-2.90.Gucharmap.ChartableCellAccessible

    addState(stateType: Atk.StateType, emitSignal: boolean): boolean
    initialise(widget: Gtk.Widget, parent: Atk.Object, index: number): void
    removeState(stateType: Atk.StateType, emitSignal: boolean): boolean

    // Conflicting methods

    getDescription(...args: any[]): any
    getName(...args: any[]): any
    setDescription(...args: any[]): any
    vfuncGetDescription(...args: any[]): any
    vfuncGetName(...args: any[]): any
    vfuncSetDescription(...args: any[]): any

    // Class property signals of Gucharmap-2.90.Gucharmap.ChartableCellAccessible

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
    static $gtype: GObject.GType<ChartableCellAccessible>

    // Constructors of Gucharmap-2.90.Gucharmap.ChartableCellAccessible

    constructor(config?: ChartableCellAccessible_ConstructProps) 
    constructor() 
    static new(): ChartableCellAccessible
    _init(config?: ChartableCellAccessible_ConstructProps): void
}

interface CodepointList_ConstructProps extends GObject.Object_ConstructProps {
}

interface CodepointList {

    // Own fields of Gucharmap-2.90.Gucharmap.CodepointList

    parentInstance: GObject.Object

    // Owm methods of Gucharmap-2.90.Gucharmap.CodepointList

    getChar(index: number): string
    getIndex(wc: string): number
    getLastIndex(): number

    // Class property signals of Gucharmap-2.90.Gucharmap.CodepointList

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class CodepointList extends GObject.Object {

    // Own properties of Gucharmap-2.90.Gucharmap.CodepointList

    static name: string
    static $gtype: GObject.GType<CodepointList>

    // Constructors of Gucharmap-2.90.Gucharmap.CodepointList

    constructor(config?: CodepointList_ConstructProps) 
    _init(config?: CodepointList_ConstructProps): void
}

interface ScriptChaptersModel_ConstructProps extends Gtk.Buildable_ConstructProps, Gtk.TreeDragDest_ConstructProps, Gtk.TreeDragSource_ConstructProps, Gtk.TreeModel_ConstructProps, Gtk.TreeSortable_ConstructProps, ChaptersModel_ConstructProps {
}

interface ScriptChaptersModel extends Gtk.Buildable, Gtk.TreeDragDest, Gtk.TreeDragSource, Gtk.TreeModel, Gtk.TreeSortable {

    // Own fields of Gucharmap-2.90.Gucharmap.ScriptChaptersModel

    parent: ChaptersModel

    // Class property signals of Gucharmap-2.90.Gucharmap.ScriptChaptersModel

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ScriptChaptersModel extends ChaptersModel {

    // Own properties of Gucharmap-2.90.Gucharmap.ScriptChaptersModel

    static name: string
    static $gtype: GObject.GType<ScriptChaptersModel>

    // Constructors of Gucharmap-2.90.Gucharmap.ScriptChaptersModel

    constructor(config?: ScriptChaptersModel_ConstructProps) 
    constructor() 
    static new(): ScriptChaptersModel

    // Overloads of new

    /**
     * Non-vararg creation function.  Used primarily by language bindings.
     * @constructor 
     * @param types an array of #GType types for the columns, from first to last
     */
    static new(types: GObject.GType[]): Gtk.ListStore
    _init(config?: ScriptChaptersModel_ConstructProps): void
}

interface ScriptCodepointList_ConstructProps extends CodepointList_ConstructProps {
}

interface ScriptCodepointList {

    // Own fields of Gucharmap-2.90.Gucharmap.ScriptCodepointList

    parent: CodepointList

    // Owm methods of Gucharmap-2.90.Gucharmap.ScriptCodepointList

    /**
     * Appends the characters in `script` to the codepoint list.
     * @param script the script name
     */
    appendScript(script: string): boolean
    /**
     * Sets the script for the codepoint list.
     * @param script the script name
     */
    setScript(script: string): boolean
    /**
     * Sets multiple scripts for the codepoint list. Codepoints are sorted
     * according to their order in `scripts`.
     * @param scripts NULL-terminated array of script names
     */
    setScripts(scripts: string): boolean

    // Class property signals of Gucharmap-2.90.Gucharmap.ScriptCodepointList

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ScriptCodepointList extends CodepointList {

    // Own properties of Gucharmap-2.90.Gucharmap.ScriptCodepointList

    static name: string
    static $gtype: GObject.GType<ScriptCodepointList>

    // Constructors of Gucharmap-2.90.Gucharmap.ScriptCodepointList

    constructor(config?: ScriptCodepointList_ConstructProps) 
    /**
     * Creates a new script codepoint list. The default script is Latin.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new script codepoint list. The default script is Latin.
     * @constructor 
     */
    static new(): ScriptCodepointList
    _init(config?: ScriptCodepointList_ConstructProps): void
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
    title: string
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
    statusMessage: (charmap: Charmap, message: string) => void
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
    statusMessage: (chartable: Chartable, message: string) => void
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