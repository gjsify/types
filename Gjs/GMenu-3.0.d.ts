// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GMenu-3.0
 */

import type * as Gjs from './Gjs';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

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
interface Tree_ConstructProps extends GObject.Object_ConstructProps {

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

/**
 * Signal callback interface for `changed`
 */
interface Tree_ChangedSignalCallback {
    ($obj: Tree): void
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
    readonly menu_basename: string
    /**
     * The full path of the menu file. If set, GMenuTree:menu-basename will get
     * ignored.
     */
    readonly menu_path: string

    // Owm methods of GMenu-3.0.GMenu.Tree

    /**
     * This function is only available if the tree has been loaded via
     * gmenu_tree_load_sync() or a variant thereof.
     */
    get_canonical_menu_path(): string
    get_directory_from_path(path: string): TreeDirectory
    /**
     * Look up the entry corresponding to the given "desktop file id".
     * @param id a desktop file ID
     */
    get_entry_by_id(id: string): TreeEntry
    /**
     * Get the root directory; you must have loaded the tree first (at
     * least once) via gmenu_tree_load_sync() or a variant thereof.
     */
    get_root_directory(): TreeDirectory
    /**
     * Synchronously load the menu contents.  This function
     * performs a significant amount of blocking I/O if the
     * tree has not been loaded yet.
     */
    load_sync(): boolean

    // Own signals of GMenu-3.0.GMenu.Tree

    connect(sigName: "changed", callback: Tree_ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: Tree_ChangedSignalCallback): number
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

class Tree extends GObject.Object {

    // Own properties of GMenu-3.0.GMenu.Tree

    static name: string
    static $gtype: GObject.GType<Tree>

    // Constructors of GMenu-3.0.GMenu.Tree

    constructor(config?: Tree_ConstructProps) 
    constructor(menu_basename: string, flags: TreeFlags) 
    static new(menu_basename: string, flags: TreeFlags): Tree
    static new_for_path(menu_path: string, flags: TreeFlags): Tree
    _init(config?: Tree_ConstructProps): void
    static item_ref(item: object | null): object | null
    static item_unref(item: object | null): void
}

interface TreeAlias {

    // Owm methods of GMenu-3.0.GMenu.TreeAlias

    get_aliased_directory(): TreeDirectory
    get_aliased_entry(): TreeEntry
    get_aliased_item_type(): TreeItemType
    get_directory(): TreeDirectory
    get_parent(): TreeDirectory
    /**
     * Grab the tree associated with a #GMenuTreeAlias.
     */
    get_tree(): Tree
}

class TreeAlias {

    // Own properties of GMenu-3.0.GMenu.TreeAlias

    static name: string
}

interface TreeClass {

    // Own fields of GMenu-3.0.GMenu.TreeClass

    parent_class: GObject.ObjectClass
}

abstract class TreeClass {

    // Own properties of GMenu-3.0.GMenu.TreeClass

    static name: string
}

interface TreeDirectory {

    // Owm methods of GMenu-3.0.GMenu.TreeDirectory

    get_comment(): string
    get_desktop_file_path(): string
    get_generic_name(): string
    /**
     * Gets the icon for the directory.
     */
    get_icon(): Gio.Icon
    get_is_nodisplay(): boolean
    get_menu_id(): string
    get_name(): string
    get_parent(): TreeDirectory
    /**
     * Grab the tree associated with a #GMenuTreeItem.
     */
    get_tree(): Tree
    iter(): TreeIter
    make_path(entry: TreeEntry): string
}

class TreeDirectory {

    // Own properties of GMenu-3.0.GMenu.TreeDirectory

    static name: string
}

interface TreeEntry {

    // Owm methods of GMenu-3.0.GMenu.TreeEntry

    get_app_info(): Gio.DesktopAppInfo
    get_desktop_file_id(): string
    get_desktop_file_path(): string
    get_is_excluded(): boolean
    get_is_nodisplay_recurse(): boolean
    get_is_unallocated(): boolean
    get_parent(): TreeDirectory
    /**
     * Grab the tree associated with a #GMenuTreeEntry.
     */
    get_tree(): Tree
}

class TreeEntry {

    // Own properties of GMenu-3.0.GMenu.TreeEntry

    static name: string
}

interface TreeHeader {

    // Owm methods of GMenu-3.0.GMenu.TreeHeader

    get_directory(): TreeDirectory
    get_parent(): TreeDirectory
    /**
     * Grab the tree associated with a #GMenuTreeHeader.
     */
    get_tree(): Tree
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
     */
    get_alias(): TreeAlias
    /**
     * This method may only be called if gmenu_tree_iter_next()
     * returned GMENU_TREE_ITEM_DIRECTORY.
     */
    get_directory(): TreeDirectory
    /**
     * This method may only be called if gmenu_tree_iter_next()
     * returned GMENU_TREE_ITEM_ENTRY.
     */
    get_entry(): TreeEntry
    /**
     * This method may only be called if gmenu_tree_iter_next()
     * returned GMENU_TREE_ITEM_HEADER.
     */
    get_header(): TreeHeader
    /**
     * This method may only be called if gmenu_tree_iter_next()
     * returned #GMENU_TREE_ITEM_SEPARATOR.
     */
    get_separator(): TreeSeparator
    /**
     * Change the iterator to the next item, and return its type.  If
     * there are no more items, %GMENU_TREE_ITEM_INVALID is returned.
     */
    next(): TreeItemType
}

class TreeIter {

    // Own properties of GMenu-3.0.GMenu.TreeIter

    static name: string
}

interface TreeSeparator {

    // Owm methods of GMenu-3.0.GMenu.TreeSeparator

    get_parent(): TreeDirectory
    /**
     * Grab the tree associated with a #GMenuTreeSeparator.
     */
    get_tree(): Tree
}

class TreeSeparator {

    // Own properties of GMenu-3.0.GMenu.TreeSeparator

    static name: string
}

}
export default GMenu;