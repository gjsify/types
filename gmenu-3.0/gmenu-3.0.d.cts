
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gmenu-3.0-ambient.d.ts';
import './gmenu-3.0-import.d.ts';
/**
 * GMenu-3.0
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export enum TreeItemType {
    INVALID,
    DIRECTORY,
    ENTRY,
    SEPARATOR,
    HEADER,
    ALIAS,
}
export enum TreeFlags {
    NONE,
    INCLUDE_EXCLUDED,
    SHOW_EMPTY,
    INCLUDE_NODISPLAY,
    SHOW_ALL_SEPARATORS,
    SORT_DISPLAY_NAME,
    INCLUDE_UNALLOCATED,
}
export module Tree {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    export interface ChangedSignalCallback {
        ($obj: Tree): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GMenu-3.0.GMenu.Tree

        /**
         * Flags controlling the content of the menu.
         */
        flags?: TreeFlags | null
        /**
         * The name of the menu file; must be a basename or a relative path. The file
         * will be looked up in $XDG_CONFIG_DIRS/menus/. See the Desktop Menu
         * specification.
         */
        menu_basename?: string | null
        /**
         * The full path of the menu file. If set, GMenuTree:menu-basename will get
         * ignored.
         */
        menu_path?: string | null
        /**
         * The name of the menu file; must be a basename or a relative path. The file
         * will be looked up in $XDG_CONFIG_DIRS/menus/. See the Desktop Menu
         * specification.
         */
        menuBasename?: string | null
        /**
         * The full path of the menu file. If set, GMenuTree:menu-basename will get
         * ignored.
         */
        menuPath?: string | null
    }

}

export interface Tree {

    // Own properties of GMenu-3.0.GMenu.Tree

    /**
     * Flags controlling the content of the menu.
     */
    readonly flags: TreeFlags
    /**
     * The name of the menu file; must be a basename or a relative path. The file
     * will be looked up in $XDG_CONFIG_DIRS/menus/. See the Desktop Menu
     * specification.
     */
    readonly menu_basename: string | null
    /**
     * The name of the menu file; must be a basename or a relative path. The file
     * will be looked up in $XDG_CONFIG_DIRS/menus/. See the Desktop Menu
     * specification.
     */
    readonly menuBasename: string | null
    /**
     * The full path of the menu file. If set, GMenuTree:menu-basename will get
     * ignored.
     */
    readonly menu_path: string | null
    /**
     * The full path of the menu file. If set, GMenuTree:menu-basename will get
     * ignored.
     */
    readonly menuPath: string | null

    // Owm methods of GMenu-3.0.GMenu.Tree

    /**
     * This function is only available if the tree has been loaded via
     * gmenu_tree_load_sync() or a variant thereof.
     * @returns The absolute and canonicalized path to the loaded menu file
     */
    get_canonical_menu_path(): string | null
    get_directory_from_path(path: string | null): TreeDirectory
    /**
     * Look up the entry corresponding to the given "desktop file id".
     * @param id a desktop file ID
     * @returns A newly referenced #GMenuTreeEntry, or %NULL if none
     */
    get_entry_by_id(id: string | null): TreeEntry
    /**
     * Get the root directory; you must have loaded the tree first (at
     * least once) via gmenu_tree_load_sync() or a variant thereof.
     * @returns Root of the tree
     */
    get_root_directory(): TreeDirectory
    /**
     * Synchronously load the menu contents.  This function
     * performs a significant amount of blocking I/O if the
     * tree has not been loaded yet.
     * @returns %TRUE on success, %FALSE on error
     */
    load_sync(): boolean

    // Own signals of GMenu-3.0.GMenu.Tree

    connect(sigName: "changed", callback: Tree.ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: Tree.ChangedSignalCallback): number
    emit(sigName: "changed", ...args: any[]): void

    // Class property signals of GMenu-3.0.GMenu.Tree

    connect(sigName: "notify::flags", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::flags", ...args: any[]): void
    connect(sigName: "notify::menu-basename", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::menu-basename", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::menu-basename", ...args: any[]): void
    connect(sigName: "notify::menu-path", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::menu-path", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::menu-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Tree extends GObject.Object {

    // Own properties of GMenu-3.0.GMenu.Tree

    static name: string
    static $gtype: GObject.GType<Tree>

    // Constructors of GMenu-3.0.GMenu.Tree

    constructor(config?: Tree.ConstructorProperties) 
    constructor(menu_basename: string | null, flags: TreeFlags) 
    static new(menu_basename: string | null, flags: TreeFlags): Tree
    static new_for_path(menu_path: string | null, flags: TreeFlags): Tree
    _init(config?: Tree.ConstructorProperties): void
    static item_ref(item: any | null): any | null
    static item_unref(item: any | null): void
}

export interface TreeAlias {

    // Owm methods of GMenu-3.0.GMenu.TreeAlias

    get_aliased_directory(): TreeDirectory
    get_aliased_entry(): TreeEntry
    get_aliased_item_type(): TreeItemType
    get_directory(): TreeDirectory
    get_parent(): TreeDirectory
    /**
     * Grab the tree associated with a #GMenuTreeAlias.
     * @returns The #GMenuTree
     */
    get_tree(): Tree
}

export class TreeAlias {

    // Own properties of GMenu-3.0.GMenu.TreeAlias

    static name: string
}

export interface TreeClass {

    // Own fields of GMenu-3.0.GMenu.TreeClass

    parent_class: GObject.ObjectClass
}

export abstract class TreeClass {

    // Own properties of GMenu-3.0.GMenu.TreeClass

    static name: string
}

export interface TreeDirectory {

    // Owm methods of GMenu-3.0.GMenu.TreeDirectory

    get_comment(): string | null
    get_desktop_file_path(): string | null
    get_generic_name(): string | null
    /**
     * Gets the icon for the directory.
     * @returns The #GIcon for this directory
     */
    get_icon(): Gio.Icon
    get_is_nodisplay(): boolean
    get_menu_id(): string | null
    get_name(): string | null
    get_parent(): TreeDirectory
    /**
     * Grab the tree associated with a #GMenuTreeItem.
     * @returns The #GMenuTree
     */
    get_tree(): Tree
    iter(): TreeIter
    make_path(entry: TreeEntry): string | null
}

export class TreeDirectory {

    // Own properties of GMenu-3.0.GMenu.TreeDirectory

    static name: string
}

export interface TreeEntry {

    // Owm methods of GMenu-3.0.GMenu.TreeEntry

    get_app_info(): Gio.DesktopAppInfo
    get_desktop_file_id(): string | null
    get_desktop_file_path(): string | null
    get_is_excluded(): boolean
    get_is_nodisplay_recurse(): boolean
    get_is_unallocated(): boolean
    get_parent(): TreeDirectory
    /**
     * Grab the tree associated with a #GMenuTreeEntry.
     * @returns The #GMenuTree
     */
    get_tree(): Tree
}

export class TreeEntry {

    // Own properties of GMenu-3.0.GMenu.TreeEntry

    static name: string
}

export interface TreeHeader {

    // Owm methods of GMenu-3.0.GMenu.TreeHeader

    get_directory(): TreeDirectory
    get_parent(): TreeDirectory
    /**
     * Grab the tree associated with a #GMenuTreeHeader.
     * @returns The #GMenuTree
     */
    get_tree(): Tree
}

export class TreeHeader {

    // Own properties of GMenu-3.0.GMenu.TreeHeader

    static name: string
}

export interface TreeIter {

    // Owm methods of GMenu-3.0.GMenu.TreeIter

    /**
     * This method may only be called if gmenu_tree_iter_next()
     * returned GMENU_TREE_ITEM_ALIAS.
     * @returns An alias
     */
    get_alias(): TreeAlias
    /**
     * This method may only be called if gmenu_tree_iter_next()
     * returned GMENU_TREE_ITEM_DIRECTORY.
     * @returns A directory
     */
    get_directory(): TreeDirectory
    /**
     * This method may only be called if gmenu_tree_iter_next()
     * returned GMENU_TREE_ITEM_ENTRY.
     * @returns An entry
     */
    get_entry(): TreeEntry
    /**
     * This method may only be called if gmenu_tree_iter_next()
     * returned GMENU_TREE_ITEM_HEADER.
     * @returns A header
     */
    get_header(): TreeHeader
    /**
     * This method may only be called if gmenu_tree_iter_next()
     * returned #GMENU_TREE_ITEM_SEPARATOR.
     * @returns A separator
     */
    get_separator(): TreeSeparator
    /**
     * Change the iterator to the next item, and return its type.  If
     * there are no more items, %GMENU_TREE_ITEM_INVALID is returned.
     * @returns The type of the next item that can be retrived from the iterator
     */
    next(): TreeItemType
}

export class TreeIter {

    // Own properties of GMenu-3.0.GMenu.TreeIter

    static name: string
}

export interface TreeSeparator {

    // Owm methods of GMenu-3.0.GMenu.TreeSeparator

    get_parent(): TreeDirectory
    /**
     * Grab the tree associated with a #GMenuTreeSeparator.
     * @returns The #GMenuTree
     */
    get_tree(): Tree
}

export class TreeSeparator {

    // Own properties of GMenu-3.0.GMenu.TreeSeparator

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
export const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
export const __version__: string
// END