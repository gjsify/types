/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './builder-1.0-ambient.d.ts';
import './builder-1.0-import.d.ts';
/**
 * Builder-1.0
 */

import type Peas from '@girs/peas-1.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GIRepository from '@girs/girepository-2.0';
import type Ide from '@girs/ide-1.0';
import type Template from '@girs/template-1.0';
import type Json from '@girs/json-1.0';
import type GtkSource from '@girs/gtksource-3.0';
import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from '@girs/cairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Atk from '@girs/atk-1.0';
import type Dazzle from '@girs/dazzle-1.0';

export namespace Builder {
    /**
     * %GB_VIEW_GRID_SPLIT_LEFT:
     * %GB_VIEW_GRID_SPLIT_RIGHT:
     * %GB_VIEW_GRID_SPLIT_MOVE_LEFT:
     * %GB_VIEW_GRID_SPLIT_MOVE_RIGHT:
     */
    enum ViewGridSplit {
        LEFT,
        RIGHT,
        MOVE_LEFT,
        MOVE_RIGHT,
    }
    interface TreeFilterFunc {
        (tree: Tree, node: TreeNode): boolean;
    }
    interface TreeFindFunc {
        (tree: Tree, node: TreeNode, child: TreeNode): boolean;
    }
    interface TreeNodeCompareFunc {
        (a: TreeNode, b: TreeNode): number;
    }
    module Application {
        // Constructor properties interface
    }

    class Application extends Gtk.Application {
        // Owm methods of Builder-1.0.Application

        get_argv0(): string;
        get_keybindings_mode(): string;
        get_started_at(): GLib.DateTime;
        /**
         * Asynchronously requests a #GDBusProxy to a service provided in a worker
         * process. The worker should be an #IdeWorker implemented by the plugin named
         * `plugin_name`. The #IdeWorker is responsible for created both the service
         * registered on the bus and the proxy to it.
         *
         * The #GbApplication is responsible for spawning a subprocess for the worker.
         *
         * `callback` should call gb_application_get_worker_finish() with the result
         * provided to retrieve the result.
         * @param plugin_name The name of the plugin.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback or %NULL.
         */
        get_worker_async(
            plugin_name: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Completes an asynchronous request to get a proxy to a worker process.
         * @param result A #GAsyncResult
         * @returns A #GDBusProxy or %NULL.
         */
        get_worker_finish(result: Gio.AsyncResult): Gio.DBusProxy;
        open_project_async(
            file: Gio.File,
            additional_files?: Gio.File[] | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        open_project_finish(result: Gio.AsyncResult): boolean;
        show_projects_window(): void;
    }

    module EditorView {
        // Signal callback interfaces

        interface RequestDocumentation {
            (object: string): void;
        }

        // Constructor properties interface
    }

    class EditorView extends View {}

    module MenuExtension {
        // Constructor properties interface
    }

    class MenuExtension extends GObject.Object {
        // Own properties of Builder-1.0.MenuExtension

        menu: Gio.Menu;

        // Constructors of Builder-1.0.MenuExtension

        static ['new'](menu: Gio.Menu): MenuExtension;

        static new_for_section(menu: Gio.Menu, section: string): MenuExtension;

        // Owm methods of Builder-1.0.MenuExtension

        append_menu_item(item: Gio.MenuItem): void;
        prepend_menu_item(item: Gio.MenuItem): void;
        remove_items(): void;
    }

    module Tree {
        // Signal callback interfaces

        interface Action {
            (object: string, p0: string, p1: string): void;
        }

        interface PopulatePopup {
            (object: Gtk.Widget): void;
        }

        // Constructor properties interface
    }

    class Tree extends Gtk.TreeView {
        // Own properties of Builder-1.0.Tree

        root: TreeNode;
        selection: TreeNode;
        show_icons: boolean;
        showIcons: boolean;

        // Owm methods of Builder-1.0.Tree

        /**
         * Removes a builder from the tree.
         * @param builder A #GbTreeBuilder to add.
         */
        add_builder(builder: TreeBuilder): void;
        expand_to_node(node: TreeNode): void;
        /**
         * Searches through the direct children of `node` for a matching child.
         * `find_func` should return %TRUE if the child matches, otherwise %FALSE.
         * @param node A #GbTreeNode
         * @param find_func A callback to locate the child
         * @returns A #GbTreeNode or %NULL.
         */
        find_child_node(node: TreeNode, find_func: TreeFindFunc): TreeNode | null;
        /**
         * Walks the entire tree looking for the first item that matches given
         * `equal_func` and `key`.
         *
         * The first parameter to `equal_func` will always be `key`.
         * The second parameter will be the nodes #GbTreeNode:item property.
         * @param equal_func A #GEqualFunc
         * @param key the key for @equal_func
         * @returns A #GbTreeNode or %NULL.
         */
        find_custom(equal_func: GLib.EqualFunc, key?: any | null): TreeNode | null;
        /**
         * Finds a #GbTreeNode with an item property matching `item`.
         * @param item A #GObject or %NULL.
         * @returns A #GbTreeNode or %NULL.
         */
        find_item(item?: GObject.Object | null): TreeNode | null;
        /**
         * Retrieves the root node of the tree. The root node is not a visible node
         * in the self, but a placeholder for all other builders to build upon.
         * @returns A #GbTreeNode or %NULL.
         */
        get_root(): TreeNode | null;
        /**
         * Gets the currently selected node in the tree.
         * @returns A #GbTreeNode.
         */
        get_selected(): TreeNode;
        get_show_icons(): boolean;
        rebuild(): void;
        /**
         * Removes a builder from the tree.
         * @param builder A #GbTreeBuilder to remove.
         */
        remove_builder(builder: TreeBuilder): void;
        scroll_to_node(node: TreeNode): void;
        /**
         * Sets the filter function to be used to determine visability of a tree node.
         * @param filter_func A callback to determien visibility.
         */
        set_filter(filter_func: TreeFilterFunc): void;
        /**
         * Sets the root node of the #GbTree widget. This is used to build
         * the items within the treeview. The item itself will not be added
         * to the self, but the direct children will be.
         * @param node A #GbTreeNode.
         */
        set_root(node: TreeNode): void;
        set_show_icons(show_icons: boolean): void;
    }

    module TreeBuilder {
        // Signal callback interfaces

        interface Added {
            (object: Tree): void;
        }

        interface BuildNode {
            (object: TreeNode): void;
        }

        interface NodeActivated {
            (object: TreeNode): boolean;
        }

        interface NodePopup {
            (object: TreeNode, p0: Gio.Menu): void;
        }

        interface NodeSelected {
            (object: TreeNode): void;
        }

        interface NodeUnselected {
            (object: TreeNode): void;
        }

        interface Removed {
            (object: Tree): void;
        }

        // Constructor properties interface
    }

    class TreeBuilder extends GObject.InitiallyUnowned {
        // Own properties of Builder-1.0.TreeBuilder

        readonly tree: Tree;

        // Owm methods of Builder-1.0.TreeBuilder

        /**
         * Gets the tree that owns the builder.
         * @returns A #GbTree or %NULL.
         */
        get_tree(): Tree | null;
    }

    module TreeNode {
        // Constructor properties interface
    }

    class TreeNode extends GObject.InitiallyUnowned {
        // Own properties of Builder-1.0.TreeNode

        /**
         * This property allows for more lazy loading of nodes.
         *
         * When a node becomes visible, we normally build it's children nodes
         * so that we know if we need an expansion arrow. However, that can
         * be expensive when rendering directories with lots of subdirectories.
         *
         * Using this, you can always show an arrow without building the children
         * and simply hide the arrow if there were in fact no children (upon
         * expansion).
         */
        children_possible: boolean;
        /**
         * This property allows for more lazy loading of nodes.
         *
         * When a node becomes visible, we normally build it's children nodes
         * so that we know if we need an expansion arrow. However, that can
         * be expensive when rendering directories with lots of subdirectories.
         *
         * Using this, you can always show an arrow without building the children
         * and simply hide the arrow if there were in fact no children (upon
         * expansion).
         */
        childrenPossible: boolean;
        /**
         * An icon-name to display on the row.
         */
        icon_name: string;
        /**
         * An icon-name to display on the row.
         */
        iconName: string;
        /**
         * An optional #GObject to associate with the node.
         */
        item: GObject.Object;
        /**
         * The parent of the node.
         */
        readonly parent: TreeNode;
        /**
         * Text to display on the tree node.
         */
        text: string;
        /**
         * The tree the node belongs to.
         */
        tree: Tree;
        use_dim_label: boolean;
        useDimLabel: boolean;
        /**
         * If the "text" property includes #GMarkup.
         */
        use_markup: boolean;
        /**
         * If the "text" property includes #GMarkup.
         */
        useMarkup: boolean;

        // Constructors of Builder-1.0.TreeNode

        static ['new'](): TreeNode;

        // Owm methods of Builder-1.0.TreeNode

        /**
         * Appends `child` to the list of children owned by `node`.
         * @param child A #GbTreeNode.
         */
        append(child: TreeNode): void;
        collapse(): void;
        expand(expand_ancestors: boolean): boolean;
        get_area(area: Gdk.Rectangle): void;
        get_children_possible(): boolean;
        get_expanded(): boolean;
        /**
         * Fetches the icon-name of the icon to display, or NULL for no icon.
         */
        get_icon_name(): string;
        /**
         * Gets a #GObject for the node, if one was set.
         * @returns A #GObject or %NULL.
         */
        get_item<T = GObject.Object>(): T;
        get_iter(iter: Gtk.TreeIter): boolean;
        /**
         * Retrieves the parent #GbTreeNode for `node`.
         * @returns A #GbTreeNode.
         */
        get_parent(): TreeNode;
        /**
         * Gets a #GtkTreePath for `node`.
         * @returns A #GtkTreePath if successful; otherwise %NULL.
         */
        get_path(): Gtk.TreePath | null;
        get_text(): string;
        /**
         * Fetches the #GbTree instance that owns the node.
         * @returns A #GbTree.
         */
        get_tree(): Tree;
        get_use_dim_label(): boolean;
        get_use_markup(): boolean;
        /**
         * Inserts a `child` as a child of `node,` sorting it among the other children.
         * @param child A #GbTreeNode.
         * @param compare_func A compare func to compare nodes.
         */
        insert_sorted(child: TreeNode, compare_func: TreeNodeCompareFunc): void;
        invalidate(): void;
        /**
         * Prepends `child` to the list of children owned by `node`.
         * @param child A #GbTreeNode.
         */
        prepend(child: TreeNode): void;
        /**
         * Removes `child` from the list of children owned by `node`.
         * @param child A #GbTreeNode.
         */
        remove(child: TreeNode): void;
        select(): void;
        /**
         * If the node has not yet been built, setting this to %TRUE will add a
         * dummy child node. This dummy node will be removed when when the node
         * is built by the registered #GbTreeBuilder instances.
         * @param children_possible If the node has children.
         */
        set_children_possible(children_possible: boolean): void;
        /**
         * Sets the icon name of the node. This is displayed in the pixbuf
         * cell of the GbTree.
         * @param icon_name The icon name.
         */
        set_icon_name(icon_name: string): void;
        /**
         * An optional object to associate with the node. This is handy to save needing
         * to subclass the #GbTreeNode class.
         * @param item A #GObject.
         */
        set_item(item: GObject.Object): void;
        /**
         * Sets the text of the node. This is displayed in the text
         * cell of the GbTree.
         * @param text The node text.
         */
        set_text(text: string): void;
        set_use_dim_label(use_dim_label: boolean): void;
        set_use_markup(use_markup: boolean): void;
        show_popover(popover: Gtk.Popover): void;
    }

    module View {
        // Constructor properties interface
    }

    class View extends Gtk.Box {
        // Own properties of Builder-1.0.View

        readonly can_split: boolean;
        readonly canSplit: boolean;
        readonly document: Document;
        readonly modified: boolean;
        readonly special_title: string;
        readonly specialTitle: string;
        readonly title: string;

        // Owm methods of Builder-1.0.View

        /**
         * Creates a new view similar to `self` that can be displayed in a split.
         * If the view does not support splits, %NULL will be returned.
         * @returns A #GbView.
         */
        create_split(): View;
        /**
         * Checks if `self` can create a preview view (such as html, markdown, etc).
         * @returns %TRUE if @self can create a preview view.
         */
        get_can_preview(): boolean;
        /**
         * Checks if `self` can create a split view. If so, %TRUE is returned. Otherwise, %FALSE.
         * @returns %TRUE if @self can create a split.
         */
        get_can_split(): boolean;
        /**
         * Gets the controls for the view.
         * @returns A #GtkWidget.
         */
        get_controls(): Gtk.Widget | null;
        /**
         * Gets the document for the view.
         * @returns A #GbDocument.
         */
        get_document(): Document;
        get_menu(): Gio.Menu;
        get_modified(): boolean;
        get_special_title(): string;
        get_title(): string;
        navigate_to(location: Ide.SourceLocation): void;
        set_back_forward_list(back_forward_list: Ide.BackForwardList): void;
        /**
         * Set a split view using GtkPaned style split with %GTK_ORIENTATION_VERTICAL.
         * @param split_view if the split should be enabled.
         */
        set_split_view(split_view: boolean): void;
    }

    module ViewGrid {
        // Constructor properties interface
    }

    class ViewGrid extends Gtk.Bin {
        // Constructors of Builder-1.0.ViewGrid

        static ['new'](): ViewGrid;

        // Owm methods of Builder-1.0.ViewGrid

        add_stack_after(stack: ViewStack): ViewStack;
        add_stack_before(stack: ViewStack): ViewStack;
        find_document_typed(document_type: GObject.GType): Document | null;
        focus_document(document: Document): void;
        /**
         * Gets the last focused #GbViewStack.
         * @returns A #GbViewStack or %NULL.
         */
        get_last_focus(): Gtk.Widget | null;
        get_stack_after(stack: ViewStack): ViewStack | null;
        get_stack_before(stack: ViewStack): ViewStack | null;
        /**
         * Fetches all of the stacks in the grid. The resulting #GList should be
         * freed with g_list_free().
         * @returns A #GList.
         */
        get_stacks(): ViewStack[];
        raise_document(document: Document, focus: boolean): void;
    }

    module ViewStack {
        // Signal callback interfaces

        interface Empty {
            (): void;
        }

        interface Split {
            (view: View, split_type: number): void;
        }

        // Constructor properties interface
    }

    class ViewStack extends Gtk.Bin {
        // Own properties of Builder-1.0.ViewStack

        active_view: View;
        activeView: View;

        // Constructors of Builder-1.0.ViewStack

        static ['new'](): ViewStack;

        // Owm methods of Builder-1.0.ViewStack

        find_document_typed(document_type: GObject.GType): Document | null;
        find_with_document(document: Document): Gtk.Widget | null;
        focus_document(document: Document): void;
        focus_location(location: Ide.SourceLocation): void;
        get_active_view(): Gtk.Widget | null;
        /**
         * Gets the views belonging to this #GbViewStack.
         * @returns A #GList of #GbView.
         */
        get_views(): View[];
        raise_document(document: Document, focus: boolean): void;
        remove(view: View): void;
        set_active_view(active_view: Gtk.Widget): void;
    }

    module Workbench {
        // Signal callback interfaces

        interface Unload {
            (object: Ide.Context): void;
        }

        // Constructor properties interface
    }

    class Workbench extends Gtk.ApplicationWindow {
        // Own properties of Builder-1.0.Workbench

        readonly active_view: View;
        readonly activeView: View;
        readonly building: boolean;
        /**
         * The "context" property is the #IdeContext that shall be worked upon in
         * the #GbWorkbench. This must be set during workbench creation. Use
         * another window or dialog to choose the project information before
         * creating a workbench window.
         */
        context: Ide.Context;

        // Owm methods of Builder-1.0.Workbench

        add_temporary_buffer(): void;
        build_async(
            force_rebuild: boolean,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        build_finish(result: Gio.AsyncResult): boolean;
        get_active_view(): Gtk.Widget;
        get_closing(): boolean;
        /**
         * Gets the #IdeContext for the workbench.
         * @returns An #IdeContext.
         */
        get_context(): Ide.Context;
        /**
         * The slider can be used to to hide things behind the workbench and then
         * reveal them efficiently.
         * @returns the toplevel slider
         */
        get_slider(): Gtk.Widget;
        get_view_grid(): Gtk.Widget;
        get_workspace(): Gtk.Widget;
        open(file: Gio.File): void;
        open_uri_list(uri_list: string): void;
        open_with_editor(file: Gio.File): void;
        reveal_file(file: Gio.File): void;
        /**
         * Invoke `callback` for each view in the workbench.
         * @param callback A callback to call for each view.
         */
        views_foreach(callback: Gtk.Callback): void;
    }

    class ApplicationAddinInterface {}

    class ApplicationClass {}

    class DocumentInterface {}

    class EditorViewAddinInterface {}

    class EditorViewClass {}

    class MenuExtensionClass {}

    class TreeBuilderClass {}

    class TreeClass {}

    class TreeNodeClass {}

    class ViewClass {}

    class ViewGridClass {}

    class ViewStackClass {}

    class WorkbenchClass {}

    interface ApplicationAddin {
        // Owm methods of Builder-1.0.ApplicationAddin

        load(application: Application): void;
        unload(application: Application): void;

        // Own virtual methods of Builder-1.0.ApplicationAddin

        vfunc_load(application: Application): void;
        vfunc_unload(application: Application): void;
    }

    interface Document {
        // Own properties of Builder-1.0.Document

        readonly modified: boolean;
        readonly read_only: boolean;
        readonly readOnly: boolean;
        readonly title: string;

        // Owm methods of Builder-1.0.Document

        create_view(): Gtk.Widget;
        get_modified(): boolean;
        get_mtime(mtime: GLib.TimeVal): boolean;
        get_read_only(): boolean;
        get_title(): string;
        is_untitled(): boolean;
        save_as_async(
            toplevel: Gtk.Widget,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        save_as_finish(result: Gio.AsyncResult): boolean;
        save_async(
            toplevel: Gtk.Widget,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        save_finish(result: Gio.AsyncResult): boolean;

        // Own virtual methods of Builder-1.0.Document

        vfunc_create_view(): Gtk.Widget;
        vfunc_get_modified(): boolean;
        vfunc_get_mtime(mtime: GLib.TimeVal): boolean;
        vfunc_get_read_only(): boolean;
        vfunc_get_title(): string;
        vfunc_is_untitled(): boolean;
        vfunc_save_as_async(
            toplevel: Gtk.Widget,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_save_as_finish(result: Gio.AsyncResult): boolean;
        vfunc_save_async(
            toplevel: Gtk.Widget,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_save_finish(result: Gio.AsyncResult): boolean;
    }

    interface EditorViewAddin {
        // Own virtual methods of Builder-1.0.EditorViewAddin

        vfunc_language_changed(language_id: string): void;
        vfunc_load(view: EditorView): void;
        vfunc_unload(view: EditorView): void;
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

export default Builder;
// END
