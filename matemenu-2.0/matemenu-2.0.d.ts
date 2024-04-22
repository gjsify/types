/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './matemenu-2.0-ambient.d.ts';

/**
 * MateMenu-2.0
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace MateMenu {
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

        interface Changed {
            (): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            flags: TreeFlags;
            menu_basename: string;
            menuBasename: string;
            menu_path: string;
            menuPath: string;
        }
    }

    class Tree extends GObject.Object {
        static $gtype: GObject.GType<Tree>;

        // Own properties of MateMenu.Tree

        /**
         * Flags controlling the content of the menu.
         */
        get flags(): TreeFlags;
        /**
         * The name of the menu file; must be a basename or a relative path. The file
         * will be looked up in $XDG_CONFIG_DIRS/menus/. See the Desktop Menu
         * specification.
         */
        get menu_basename(): string;
        /**
         * The name of the menu file; must be a basename or a relative path. The file
         * will be looked up in $XDG_CONFIG_DIRS/menus/. See the Desktop Menu
         * specification.
         */
        get menuBasename(): string;
        /**
         * The full path of the menu file. If set, MateMenuTree:menu-basename will get
         * ignored.
         */
        get menu_path(): string;
        /**
         * The full path of the menu file. If set, MateMenuTree:menu-basename will get
         * ignored.
         */
        get menuPath(): string;

        // Constructors of MateMenu.Tree

        constructor(properties?: Partial<Tree.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](menu_basename: string, flags: TreeFlags): Tree;

        static new_for_path(menu_path: string, flags: TreeFlags): Tree;

        // Own signals of MateMenu.Tree

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'changed', callback: (_source: this) => void): number;
        connect_after(signal: 'changed', callback: (_source: this) => void): number;
        emit(signal: 'changed'): void;

        // Own static methods of MateMenu.Tree

        static item_ref(item?: any | null): any | null;
        static item_unref(item?: any | null): void;

        // Own methods of MateMenu.Tree

        /**
         * This function is only available if the tree has been loaded via
         * matemenu_tree_load_sync() or a variant thereof.
         * @returns The absolute and canonicalized path to the loaded menu file
         */
        get_canonical_menu_path(): string;
        get_directory_from_path(path: string): TreeDirectory;
        /**
         * Look up the entry corresponding to the given "desktop file id".
         * @param id a desktop file ID
         * @returns A newly referenced #MateMenuTreeEntry, or %NULL if none
         */
        get_entry_by_id(id: string): TreeEntry;
        /**
         * Get the root directory; you must have loaded the tree first (at
         * least once) via matemenu_tree_load_sync() or a variant thereof.
         * @returns Root of the tree
         */
        get_root_directory(): TreeDirectory;
        /**
         * Synchronously load the menu contents.  This function
         * performs a significant amount of blocking I/O if the
         * tree has not been loaded yet.
         * @returns %TRUE on success, %FALSE on error
         */
        load_sync(): boolean;
    }

    abstract class TreeAlias {
        static $gtype: GObject.GType<TreeAlias>;

        // Constructors of MateMenu.TreeAlias

        _init(...args: any[]): void;

        // Own methods of MateMenu.TreeAlias

        get_aliased_directory(): TreeDirectory;
        get_aliased_entry(): TreeEntry;
        get_aliased_item_type(): TreeItemType;
        get_directory(): TreeDirectory;
        get_parent(): TreeDirectory;
        /**
         * Grab the tree associated with a #MateMenuTreeAlias.
         * @returns The #MateMenuTree
         */
        get_tree(): Tree;
    }

    type TreeClass = typeof Tree;
    abstract class TreeDirectory {
        static $gtype: GObject.GType<TreeDirectory>;

        // Constructors of MateMenu.TreeDirectory

        _init(...args: any[]): void;

        // Own methods of MateMenu.TreeDirectory

        get_comment(): string;
        get_desktop_file_path(): string;
        get_generic_name(): string;
        /**
         * Gets the icon for the directory.
         * @returns The #GIcon for this directory
         */
        get_icon(): Gio.Icon;
        get_is_nodisplay(): boolean;
        get_menu_id(): string;
        get_name(): string;
        get_parent(): TreeDirectory;
        /**
         * Grab the tree associated with a #MateMenuTreeItem.
         * @returns The #MateMenuTree
         */
        get_tree(): Tree;
        iter(): TreeIter;
        make_path(entry: TreeEntry): string;
    }

    abstract class TreeEntry {
        static $gtype: GObject.GType<TreeEntry>;

        // Constructors of MateMenu.TreeEntry

        _init(...args: any[]): void;

        // Own methods of MateMenu.TreeEntry

        get_app_info(): Gio.DesktopAppInfo;
        get_desktop_file_id(): string;
        get_desktop_file_path(): string;
        get_is_excluded(): boolean;
        get_is_nodisplay_recurse(): boolean;
        get_is_unallocated(): boolean;
        get_parent(): TreeDirectory;
        /**
         * Grab the tree associated with a #MateMenuTreeEntry.
         * @returns The #MateMenuTree
         */
        get_tree(): Tree;
    }

    abstract class TreeHeader {
        static $gtype: GObject.GType<TreeHeader>;

        // Constructors of MateMenu.TreeHeader

        _init(...args: any[]): void;

        // Own methods of MateMenu.TreeHeader

        get_directory(): TreeDirectory;
        get_parent(): TreeDirectory;
        /**
         * Grab the tree associated with a #MateMenuTreeHeader.
         * @returns The #MateMenuTree
         */
        get_tree(): Tree;
    }

    abstract class TreeIter {
        static $gtype: GObject.GType<TreeIter>;

        // Constructors of MateMenu.TreeIter

        _init(...args: any[]): void;

        // Own methods of MateMenu.TreeIter

        /**
         * This method may only be called if matemenu_tree_iter_next()
         * returned MATEMENU_TREE_ITEM_ALIAS.
         * @returns An alias
         */
        get_alias(): TreeAlias;
        /**
         * This method may only be called if matemenu_tree_iter_next()
         * returned MATEMENU_TREE_ITEM_DIRECTORY.
         * @returns A directory
         */
        get_directory(): TreeDirectory;
        /**
         * This method may only be called if matemenu_tree_iter_next()
         * returned MATEMENU_TREE_ITEM_ENTRY.
         * @returns An entry
         */
        get_entry(): TreeEntry;
        /**
         * This method may only be called if matemenu_tree_iter_next()
         * returned MATEMENU_TREE_ITEM_HEADER.
         * @returns A header
         */
        get_header(): TreeHeader;
        /**
         * This method may only be called if matemenu_tree_iter_next()
         * returned #MATEMENU_TREE_ITEM_SEPARATOR.
         * @returns A separator
         */
        get_separator(): TreeSeparator;
        /**
         * Change the iterator to the next item, and return its type.  If
         * there are no more items, %MATEMENU_TREE_ITEM_INVALID is returned.
         * @returns The type of the next item that can be retrived from the iterator
         */
        next(): TreeItemType;
    }

    abstract class TreeSeparator {
        static $gtype: GObject.GType<TreeSeparator>;

        // Constructors of MateMenu.TreeSeparator

        _init(...args: any[]): void;

        // Own methods of MateMenu.TreeSeparator

        get_parent(): TreeDirectory;
        /**
         * Grab the tree associated with a #MateMenuTreeSeparator.
         * @returns The #MateMenuTree
         */
        get_tree(): Tree;
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

export default MateMenu;
// END
