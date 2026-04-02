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
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace GMenu {
    /**
     * GMenu-3.0
     */

    /**
     * @gir-type Enum
     */
    enum TreeItemType {
        INVALID,
        DIRECTORY,
        ENTRY,
        SEPARATOR,
        HEADER,
        ALIAS,
    }

    /**
     * @gir-type Flags
     */
    export namespace TreeFlags {
        export const $gtype: GObject.GType<TreeFlags>;
    }

    /**
     * @gir-type Flags
     */
    enum TreeFlags {
        NONE,
        INCLUDE_EXCLUDED,
        SHOW_EMPTY,
        INCLUDE_NODISPLAY,
        SHOW_ALL_SEPARATORS,
        SORT_DISPLAY_NAME,
        INCLUDE_UNALLOCATED,
    }

    namespace Tree {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            changed: () => void;
            'notify::flags': (pspec: GObject.ParamSpec) => void;
            'notify::menu-basename': (pspec: GObject.ParamSpec) => void;
            'notify::menu-path': (pspec: GObject.ParamSpec) => void;
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

    /**
     * @gir-type Class
     */
    class Tree extends GObject.Object {
        static $gtype: GObject.GType<Tree>;

        // Properties

        /**
         * Flags controlling the content of the menu.
         * @construct-only
         */
        get flags(): TreeFlags;
        /**
         * The name of the menu file; must be a basename or a relative path. The file
         * will be looked up in $XDG_CONFIG_DIRS/menus/. See the Desktop Menu
         * specification.
         * @construct-only
         */
        get menu_basename(): string;
        /**
         * The name of the menu file; must be a basename or a relative path. The file
         * will be looked up in $XDG_CONFIG_DIRS/menus/. See the Desktop Menu
         * specification.
         * @construct-only
         */
        get menuBasename(): string;
        /**
         * The full path of the menu file. If set, GMenuTree:menu-basename will get
         * ignored.
         * @construct-only
         */
        get menu_path(): string;
        /**
         * The full path of the menu file. If set, GMenuTree:menu-basename will get
         * ignored.
         * @construct-only
         */
        get menuPath(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Tree.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Tree.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](menu_basename: string, flags: TreeFlags): Tree;

        static new_for_path(menu_path: string, flags: TreeFlags): Tree;

        // Signals

        /** @signal */
        connect<K extends keyof Tree.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Tree.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Tree.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Tree.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Tree.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Tree.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * @param item a `GMenuTreeItem`
         */
        static item_ref(item?: any | null): any | null;
        /**
         * @param item
         */
        static item_unref(item?: any | null): void;

        // Methods

        /**
         * This function is only available if the tree has been loaded via
         * `gmenu_tree_load_sync()` or a variant thereof.
         * @returns The absolute and canonicalized path to the loaded menu file
         */
        get_canonical_menu_path(): string;
        /**
         * @param path
         */
        get_directory_from_path(path: string): TreeDirectory;
        /**
         * Look up the entry corresponding to the given "desktop file id".
         * @param id a desktop file ID
         * @returns A newly referenced {@link GMenu.TreeEntry}, or `null` if none
         */
        get_entry_by_id(id: string): TreeEntry;
        /**
         * Get the root directory; you must have loaded the tree first (at
         * least once) via `gmenu_tree_load_sync()` or a variant thereof.
         * @returns Root of the tree
         */
        get_root_directory(): TreeDirectory;
        /**
         * Synchronously load the menu contents.  This function
         * performs a significant amount of blocking I/O if the
         * tree has not been loaded yet.
         * @returns `true` on success, `false` on error
         */
        load_sync(): boolean;
    }

    /**
     * @gir-type Struct
     */
    abstract class TreeAlias {
        static $gtype: GObject.GType<TreeAlias>;

        // Methods

        /**
         * @returns The aliased directory entry
         */
        get_aliased_directory(): TreeDirectory;
        /**
         * @returns The aliased entry
         */
        get_aliased_entry(): TreeEntry;
        get_aliased_item_type(): TreeItemType;
        get_directory(): TreeDirectory;
        /**
         * @returns The parent directory, or `null` if none
         */
        get_parent(): TreeDirectory;
        /**
         * Grab the tree associated with a {@link GMenu.TreeAlias}.
         * @returns The {@link GMenu.Tree}
         */
        get_tree(): Tree;
    }

    /**
     * @gir-type Alias
     */
    type TreeClass = typeof Tree;
    /**
     * @gir-type Struct
     */
    abstract class TreeDirectory {
        static $gtype: GObject.GType<TreeDirectory>;

        // Methods

        get_comment(): string;
        get_desktop_file_path(): string;
        get_generic_name(): string;
        /**
         * Gets the icon for the directory.
         * @returns The {@link Gio.Icon} for this directory
         */
        get_icon(): Gio.Icon;
        get_is_nodisplay(): boolean;
        get_menu_id(): string;
        get_name(): string;
        /**
         * @returns The parent directory, or `null` if none
         */
        get_parent(): TreeDirectory;
        /**
         * Grab the tree associated with a `GMenuTreeItem`.
         * @returns The {@link GMenu.Tree}
         */
        get_tree(): Tree;
        /**
         * @returns A new iterator over the directory contents
         */
        iter(): TreeIter;
        /**
         * @param entry
         */
        make_path(entry: TreeEntry): string;
    }

    /**
     * @gir-type Struct
     */
    abstract class TreeEntry {
        static $gtype: GObject.GType<TreeEntry>;

        // Methods

        /**
         * @returns The `GDesktopAppInfo` for this entry
         */
        get_app_info(): never;
        get_desktop_file_id(): string;
        get_desktop_file_path(): string;
        get_is_excluded(): boolean;
        get_is_nodisplay_recurse(): boolean;
        get_is_unallocated(): boolean;
        /**
         * @returns The parent directory, or `null` if none
         */
        get_parent(): TreeDirectory;
        /**
         * Grab the tree associated with a {@link GMenu.TreeEntry}.
         * @returns The {@link GMenu.Tree}
         */
        get_tree(): Tree;
    }

    /**
     * @gir-type Struct
     */
    abstract class TreeHeader {
        static $gtype: GObject.GType<TreeHeader>;

        // Methods

        get_directory(): TreeDirectory;
        /**
         * @returns The parent directory, or `null` if none
         */
        get_parent(): TreeDirectory;
        /**
         * Grab the tree associated with a {@link GMenu.TreeHeader}.
         * @returns The {@link GMenu.Tree}
         */
        get_tree(): Tree;
    }

    /**
     * @gir-type Struct
     */
    abstract class TreeIter {
        static $gtype: GObject.GType<TreeIter>;

        // Methods

        /**
         * This method may only be called if `gmenu_tree_iter_next()`
         * returned GMENU_TREE_ITEM_ALIAS.
         * @returns An alias
         */
        get_alias(): TreeAlias;
        /**
         * This method may only be called if `gmenu_tree_iter_next()`
         * returned GMENU_TREE_ITEM_DIRECTORY.
         * @returns A directory
         */
        get_directory(): TreeDirectory;
        /**
         * This method may only be called if `gmenu_tree_iter_next()`
         * returned GMENU_TREE_ITEM_ENTRY.
         * @returns An entry
         */
        get_entry(): TreeEntry;
        /**
         * This method may only be called if `gmenu_tree_iter_next()`
         * returned GMENU_TREE_ITEM_HEADER.
         * @returns A header
         */
        get_header(): TreeHeader;
        /**
         * This method may only be called if `gmenu_tree_iter_next()`
         * returned #GMENU_TREE_ITEM_SEPARATOR.
         * @returns A separator
         */
        get_separator(): TreeSeparator;
        /**
         * Change the iterator to the next item, and return its type.  If
         * there are no more items, {@link GMenu.TreeItemType.INVALID} is returned.
         * @returns The type of the next item that can be retrived from the iterator
         */
        next(): TreeItemType;
        /**
         * Increment the reference count of `iter`
         */
        ref(): TreeIter;
        /**
         * Decrement the reference count of `iter`
         */
        unref(): void;
    }

    /**
     * @gir-type Struct
     */
    abstract class TreeSeparator {
        static $gtype: GObject.GType<TreeSeparator>;

        // Methods

        /**
         * @returns The parent directory, or `null` if none
         */
        get_parent(): TreeDirectory;
        /**
         * Grab the tree associated with a {@link GMenu.TreeSeparator}.
         * @returns The {@link GMenu.Tree}
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

export default GMenu;

// END
