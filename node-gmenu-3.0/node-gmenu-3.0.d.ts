
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-gmenu-3.0-import.d.ts';
    
/**
 * GMenu-3.0
 */

import type Gio from '@girs/node-gio-2.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';

export namespace GMenu {

enum TreeItemType {
    INVALID,
    DIRECTORY,
    ENTRY,
    SEPARATOR,
    HEADER,
    ALIAS,
}
enum TreeFlags {
    NONE,
    INCLUDE_EXCLUDED,
    SHOW_EMPTY,
    INCLUDE_NODISPLAY,
    SHOW_ALL_SEPARATORS,
    SORT_DISPLAY_NAME,
    INCLUDE_UNALLOCATED,
}
module Tree {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    interface ChangedSignalCallback {
        (): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

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
    }

}

interface Tree {

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
    readonly menuBasename: string | null
    /**
     * The full path of the menu file. If set, GMenuTree:menu-basename will get
     * ignored.
     */
    readonly menuPath: string | null
    __gtype__: number

    // Owm methods of GMenu-3.0.GMenu.Tree

    /**
     * This function is only available if the tree has been loaded via
     * gmenu_tree_load_sync() or a variant thereof.
     * @returns The absolute and canonicalized path to the loaded menu file
     */
    getCanonicalMenuPath(): string
    getDirectoryFromPath(path: string): TreeDirectory
    /**
     * Look up the entry corresponding to the given "desktop file id".
     * @param id a desktop file ID
     * @returns A newly referenced #GMenuTreeEntry, or %NULL if none
     */
    getEntryById(id: string): TreeEntry
    /**
     * Get the root directory; you must have loaded the tree first (at
     * least once) via gmenu_tree_load_sync() or a variant thereof.
     * @returns Root of the tree
     */
    getRootDirectory(): TreeDirectory
    /**
     * Synchronously load the menu contents.  This function
     * performs a significant amount of blocking I/O if the
     * tree has not been loaded yet.
     * @returns %TRUE on success, %FALSE on error
     */
    loadSync(): boolean

    // Own signals of GMenu-3.0.GMenu.Tree

    connect(sigName: "changed", callback: Tree.ChangedSignalCallback): number
    on(sigName: "changed", callback: Tree.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: Tree.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: Tree.ChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "changed", ...args: any[]): void

    // Class property signals of GMenu-3.0.GMenu.Tree

    connect(sigName: "notify::flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::flags", ...args: any[]): void
    connect(sigName: "notify::menu-basename", callback: (...args: any[]) => void): number
    on(sigName: "notify::menu-basename", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::menu-basename", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::menu-basename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::menu-basename", ...args: any[]): void
    connect(sigName: "notify::menu-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::menu-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::menu-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::menu-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::menu-path", ...args: any[]): void
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
    disconnect(id: number): void
}

class Tree extends GObject.Object {

    // Own properties of GMenu-3.0.GMenu.Tree

    static name: string

    // Constructors of GMenu-3.0.GMenu.Tree

    constructor(config?: Tree.ConstructorProperties) 
    constructor(menuBasename: string, flags: TreeFlags) 
    static new(menuBasename: string, flags: TreeFlags): Tree
    static newForPath(menuPath: string, flags: TreeFlags): Tree
    _init(config?: Tree.ConstructorProperties): void
    static itemRef(item: any | null): any | null
    static itemUnref(item: any | null): void
}

interface TreeAlias {

    // Owm methods of GMenu-3.0.GMenu.TreeAlias

    getAliasedDirectory(): TreeDirectory
    getAliasedEntry(): TreeEntry
    getAliasedItemType(): TreeItemType
    getDirectory(): TreeDirectory
    getParent(): TreeDirectory
    /**
     * Grab the tree associated with a #GMenuTreeAlias.
     * @returns The #GMenuTree
     */
    getTree(): Tree
}

class TreeAlias {

    // Own properties of GMenu-3.0.GMenu.TreeAlias

    static name: string
}

interface TreeClass {

    // Own fields of GMenu-3.0.GMenu.TreeClass

    parentClass: GObject.ObjectClass
}

abstract class TreeClass {

    // Own properties of GMenu-3.0.GMenu.TreeClass

    static name: string
}

interface TreeDirectory {

    // Owm methods of GMenu-3.0.GMenu.TreeDirectory

    getComment(): string
    getDesktopFilePath(): string
    getGenericName(): string
    /**
     * Gets the icon for the directory.
     * @returns The #GIcon for this directory
     */
    getIcon(): Gio.Icon
    getIsNodisplay(): boolean
    getMenuId(): string
    getName(): string
    getParent(): TreeDirectory
    /**
     * Grab the tree associated with a #GMenuTreeItem.
     * @returns The #GMenuTree
     */
    getTree(): Tree
    iter(): TreeIter
    makePath(entry: TreeEntry): string | null
}

class TreeDirectory {

    // Own properties of GMenu-3.0.GMenu.TreeDirectory

    static name: string
}

interface TreeEntry {

    // Owm methods of GMenu-3.0.GMenu.TreeEntry

    getAppInfo(): Gio.DesktopAppInfo
    getDesktopFileId(): string
    getDesktopFilePath(): string
    getIsExcluded(): boolean
    getIsNodisplayRecurse(): boolean
    getIsUnallocated(): boolean
    getParent(): TreeDirectory
    /**
     * Grab the tree associated with a #GMenuTreeEntry.
     * @returns The #GMenuTree
     */
    getTree(): Tree
}

class TreeEntry {

    // Own properties of GMenu-3.0.GMenu.TreeEntry

    static name: string
}

interface TreeHeader {

    // Owm methods of GMenu-3.0.GMenu.TreeHeader

    getDirectory(): TreeDirectory
    getParent(): TreeDirectory
    /**
     * Grab the tree associated with a #GMenuTreeHeader.
     * @returns The #GMenuTree
     */
    getTree(): Tree
}

class TreeHeader {

    // Own properties of GMenu-3.0.GMenu.TreeHeader

    static name: string
}

interface TreeIter {

    // Owm methods of GMenu-3.0.GMenu.TreeIter

    /**
     * This method may only be called if gmenu_tree_iter_next()
     * returned GMENU_TREE_ITEM_ALIAS.
     * @returns An alias
     */
    getAlias(): TreeAlias
    /**
     * This method may only be called if gmenu_tree_iter_next()
     * returned GMENU_TREE_ITEM_DIRECTORY.
     * @returns A directory
     */
    getDirectory(): TreeDirectory
    /**
     * This method may only be called if gmenu_tree_iter_next()
     * returned GMENU_TREE_ITEM_ENTRY.
     * @returns An entry
     */
    getEntry(): TreeEntry
    /**
     * This method may only be called if gmenu_tree_iter_next()
     * returned GMENU_TREE_ITEM_HEADER.
     * @returns A header
     */
    getHeader(): TreeHeader
    /**
     * This method may only be called if gmenu_tree_iter_next()
     * returned #GMENU_TREE_ITEM_SEPARATOR.
     * @returns A separator
     */
    getSeparator(): TreeSeparator
    /**
     * Change the iterator to the next item, and return its type.  If
     * there are no more items, %GMENU_TREE_ITEM_INVALID is returned.
     * @returns The type of the next item that can be retrived from the iterator
     */
    next(): TreeItemType
}

class TreeIter {

    // Own properties of GMenu-3.0.GMenu.TreeIter

    static name: string
}

interface TreeSeparator {

    // Owm methods of GMenu-3.0.GMenu.TreeSeparator

    getParent(): TreeDirectory
    /**
     * Grab the tree associated with a #GMenuTreeSeparator.
     * @returns The #GMenuTree
     */
    getTree(): Tree
}

class TreeSeparator {

    // Own properties of GMenu-3.0.GMenu.TreeSeparator

    static name: string
}

}

export default GMenu;
// END