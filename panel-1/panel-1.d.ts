/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './panel-1-ambient.d.ts';
import './panel-1-import.d.ts';
/**
 * Panel-1
 */

import type Gtk from '@girs/gtk-4.0';
import type Gsk from '@girs/gsk-4.0';
import type Graphene from '@girs/graphene-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Gdk from '@girs/gdk-4.0';
import type cairo from '@girs/cairo-1.0';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Adw from '@girs/adw-1';

export namespace Panel {
    /**
     * The area of the panel.
     */
    enum Area {
        /**
         * the area of the panel that is at the horizontal
         *    start. The side is defined by the direction of the user
         *    language. In English, it is the left side.
         */
        START,
        /**
         * the area of the panel that is at the end.
         */
        END,
        /**
         * the area at the top of the panel.
         */
        TOP,
        /**
         * the area at the bottom of the panel.
         */
        BOTTOM,
        /**
         * the area that would be considered as the main area, always
         *    revealed.
         */
        CENTER,
    }
    /**
     * libpanel major version component (e.g. 1 if %PANEL_VERSION is 1.2.3)
     */
    const MAJOR_VERSION: number;
    /**
     * libpanel micro version component (e.g. 3 if %PANEL_VERSION is 1.2.3)
     */
    const MICRO_VERSION: number;
    /**
     * libpanel minor version component (e.g. 2 if %PANEL_VERSION is 1.2.3)
     */
    const MINOR_VERSION: number;
    /**
     * libpanel version, encoded as a string, useful for printing and
     * concatenation.
     */
    const VERSION_S: string;
    const WIDGET_KIND_ANY: string;
    const WIDGET_KIND_DOCUMENT: string;
    const WIDGET_KIND_UNKNOWN: string;
    const WIDGET_KIND_UTILITY: string;
    function check_version(major: number, minor: number, micro: number): boolean;
    function finalize(): void;
    function get_major_version(): number;
    function get_micro_version(): number;
    function get_minor_version(): number;
    function get_resource(): Gio.Resource;
    function init(): void;
    function marshal_BOOLEAN__OBJECT_OBJECT(
        closure: GObject.Closure,
        return_value: GObject.Value,
        n_param_values: number,
        param_values: GObject.Value,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function marshal_OBJECT__OBJECT(
        closure: GObject.Closure,
        return_value: GObject.Value,
        n_param_values: number,
        param_values: GObject.Value,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    interface ActionActivateFunc {
        (instance: any | null, action_name: string, param: GLib.Variant): void;
    }
    interface FrameCallback {
        (frame: Frame): void;
    }
    interface WorkspaceForeach {
        (workspace: Workspace): void;
    }
    module ActionMuxer {
        // Constructor properties interface
    }

    class ActionMuxer extends GObject.Object {
        // Constructors of Panel-1.ActionMuxer

        static ['new'](): ActionMuxer;

        // Owm methods of Panel-1.ActionMuxer

        /**
         * Locates the #GActionGroup inserted as `prefix`.
         *
         * If no group was found matching `group,` %NULL is returned.
         * @param prefix the name of the inserted action group
         * @returns a #GActionGroup matching @prefix if   found, otherwise %NULL.
         */
        get_action_group(prefix: string): Gio.ActionGroup | null;
        insert_action_group(prefix: string, action_group: Gio.ActionGroup): void;
        /**
         * Gets a list of group names in the muxer.
         * @returns an array containing the names of groups within the muxer
         */
        list_groups(): string[];
        remove_action_group(prefix: string): void;
        remove_all(): void;
    }

    module Application {
        // Constructor properties interface
    }

    class Application extends Adw.Application {
        // Constructors of Panel-1.Application

        static ['new'](application_id: string, flags: Gio.ApplicationFlags): Application;
    }

    module Dock {
        // Signal callback interfaces

        interface AdoptWidget {
            (widget: Widget): boolean;
        }

        interface CreateFrame {
            (position: Position): Frame;
        }

        interface PanelDragBegin {
            (panel: Widget): void;
        }

        interface PanelDragEnd {
            (panel: Widget): void;
        }

        // Constructor properties interface
    }

    /**
     * The #PanelDock is a widget designed to contain widgets that can be
     * docked. Use the #PanelDock as the top widget of your dockable UI.
     *
     * A #PanelDock is divided in 5 areas: %PANEL_AREA_TOP,
     * %PANEL_AREA_BOTTOM, %PANEL_AREA_START, %PANEL_AREA_END represent
     * the surrounding areas that can revealed. %PANEL_AREA_CENTER
     * represent the main area, that is always displayed and resized
     * depending on the reveal state of the surrounding areas.
     *
     * It will contain a #PanelDockChild for each of the areas in use,
     * albeit this is done by the widget.
     */
    class Dock extends Gtk.Widget {
        // Own properties of Panel-1.Dock

        bottom_height: number;
        bottomHeight: number;
        readonly can_reveal_bottom: boolean;
        readonly canRevealBottom: boolean;
        readonly can_reveal_end: boolean;
        readonly canRevealEnd: boolean;
        readonly can_reveal_start: boolean;
        readonly canRevealStart: boolean;
        readonly can_reveal_top: boolean;
        readonly canRevealTop: boolean;
        end_width: number;
        endWidth: number;
        reveal_bottom: boolean;
        revealBottom: boolean;
        reveal_end: boolean;
        revealEnd: boolean;
        reveal_start: boolean;
        revealStart: boolean;
        reveal_top: boolean;
        revealTop: boolean;
        start_width: number;
        startWidth: number;
        top_height: number;
        topHeight: number;

        // Constructors of Panel-1.Dock

        static ['new'](): Dock;

        // Owm methods of Panel-1.Dock

        /**
         * Invokes a callback for each frame in the dock.
         */
        foreach_frame(): void;
        /**
         * Tells if the panel area can be revealed.
         * @param area the panel area to check.
         * @returns whether it can reveal the area or not. If the is no child or the child is empty, will return %FALSE.
         */
        get_can_reveal_area(area: Area): boolean;
        /**
         * Tells if the bottom panel area can be revealed.
         * @returns whether it can reveal the bottom area or not. If the is no child or the child is empty, will return %FALSE.
         */
        get_can_reveal_bottom(): boolean;
        /**
         * Tells if the end panel area can be revealed.
         * @returns whether it can reveal the end area or not. If the is no child or the child is empty, will return %FALSE.
         */
        get_can_reveal_end(): boolean;
        /**
         * Tells if the start panel area can be revealed.
         * @returns whether it can reveal the start area or not. If the is no child or the child is empty, will return %FALSE.
         */
        get_can_reveal_start(): boolean;
        /**
         * Tells if the top panel area can be revealed.
         * @returns whether it can reveal the top area or not. If the is no child or the child is empty, will return %FALSE.
         */
        get_can_reveal_top(): boolean;
        /**
         * Tells if an area if revealed.
         * @param area the #PanelArea to return the reveal status of.
         * @returns The reveal state.
         */
        get_reveal_area(area: Area): boolean;
        /**
         * Tells if the bottom area is revealed.
         * @returns The reveal state of the bottom area.
         */
        get_reveal_bottom(): boolean;
        /**
         * Tells if the end area is revealed.
         * @returns The reveal state of the end area.
         */
        get_reveal_end(): boolean;
        /**
         * Tells if the start area is revealed.
         * @returns The reveal state of the start area.
         */
        get_reveal_start(): boolean;
        /**
         * Tells if the top area is revealed.
         * @returns The reveal state of the top area.
         */
        get_reveal_top(): boolean;
        /**
         * Removes a widget from the dock. If `widget` is not a #DockChild,
         * then the closest #DockChild parent is removed.
         * @param widget a #GtkWidget to remove
         */
        remove(widget: Gtk.Widget): void;
        /**
         * Set the height of the bottom area.
         * @param height the height
         */
        set_bottom_height(height: number): void;
        /**
         * Set the width of the end area.
         * @param width the width
         */
        set_end_width(width: number): void;
        /**
         * Sets the reveal status of the area.
         * @param area a #PanelArea. %PANEL_AREA_CENTER is an invalid value.
         * @param reveal reveal the area.
         */
        set_reveal_area(area: Area, reveal: boolean): void;
        /**
         * Sets the reveal status of the bottom area.
         * @param reveal_bottom reveal the bottom area.
         */
        set_reveal_bottom(reveal_bottom: boolean): void;
        /**
         * Sets the reveal status of the end area.
         * @param reveal_end reveal the end area.
         */
        set_reveal_end(reveal_end: boolean): void;
        /**
         * Sets the reveal status of the start area.
         * @param reveal_start reveal the start area.
         */
        set_reveal_start(reveal_start: boolean): void;
        /**
         * Sets the reveal status of the top area.
         * @param reveal_top reveal the top area.
         */
        set_reveal_top(reveal_top: boolean): void;
        /**
         * Set the width of the start area.
         * @param width the width
         */
        set_start_width(width: number): void;
        /**
         * Set the height of the top area.
         * @param height the height
         */
        set_top_height(height: number): void;
    }

    module DocumentWorkspace {
        // Signal callback interfaces

        interface AddWidget {
            (widget: Widget, position: Position): boolean;
        }

        interface CreateFrame {
            (position: Position): Frame;
        }

        // Constructor properties interface
    }

    class DocumentWorkspace extends Workspace {
        // Own properties of Panel-1.DocumentWorkspace

        readonly dock: Dock;
        readonly grid: Grid;
        readonly statusbar: Statusbar;

        // Constructors of Panel-1.DocumentWorkspace

        static ['new'](): DocumentWorkspace;

        // Owm methods of Panel-1.DocumentWorkspace

        /**
         * Requests the workspace add `widget` to the dock at `position`.
         * @param widget a #PanelWidget
         * @param position a #PanelPosition or %NULL
         * @returns %TRUE if @widget was added; otherwise %FALSE and @widget   will have g_object_ref_sink() called and unref'd from an idle   callback.
         */
        add_widget(widget: Widget, position?: Position | null): boolean;
        /**
         * Get the #PanelDock for the workspace.
         * @returns a #PanelDock
         */
        get_dock(): Dock;
        /**
         * Get the document grid for the workspace.
         * @returns a #PanelGrid
         */
        get_grid(): Grid;
        /**
         * Gets the statusbar for the workspace.
         * @returns a #PanelStatusbar
         */
        get_statusbar(): Statusbar | null;
        /**
         * Gets the titlebar for the workspace.
         * @returns a #GtkWidget or %NULL
         */
        get_titlebar(): Gtk.Widget | null;
        set_titlebar(titlebar: Gtk.Widget): void;
    }

    module Frame {
        // Signal callback interfaces

        interface AdoptWidget {
            (widget: Widget): boolean;
        }

        interface PageClosed {
            (widget: Widget): void;
        }

        // Constructor properties interface
    }

    /**
     * The #PanelFrame is a widget containing panels to display in an
     * area. The widgets are added internally in an [class`Adw`.TabView] to
     * display them one at a time like in a stack.
     *
     * A #PanelFrame can also have a header widget that will be displayed
     * above the panels.
     */
    class Frame extends Gtk.Widget {
        // Own properties of Panel-1.Frame

        readonly closeable: boolean;
        readonly empty: boolean;
        placeholder: Gtk.Widget;
        visible_child: Widget;
        visibleChild: Widget;

        // Constructors of Panel-1.Frame

        static ['new'](): Frame;

        // Owm methods of Panel-1.Frame

        /**
         * Adds a widget to the frame.
         * @param panel a #PanelWidget to add
         */
        add(panel: Widget): void;
        /**
         * Add `panel` before `sibling` in the #PanelFrame.
         * @param panel the #PanelWidget to add.
         * @param sibling the sibling #PanelWidget to add the panel before.
         */
        add_before(panel: Widget, sibling: Widget): void;
        /**
         * Tells if the panel frame is closeable.
         * @returns %TRUE if the panel frame is closeable.
         */
        get_closeable(): boolean;
        /**
         * Tells if the panel frame is empty.
         * @returns %TRUE if the panel is empty.
         */
        get_empty(): boolean;
        /**
         * Gets the header for the frame.
         * @returns a #PanelFrameHeader or %NULL
         */
        get_header(): FrameHeader | null;
        /**
         * Gets the number of pages in the panel frame.
         * @returns The number of pages.
         */
        get_n_pages(): number;
        /**
         * Gets the page with the given index, if any.
         * @param n the index of the page
         * @returns a #PanelWidget or %NULL
         */
        get_page(n: number): Widget | null;
        /**
         * Get the pages for the frame.
         * @returns a #GtkSelectionModel
         */
        get_pages(): Gtk.SelectionModel;
        /**
         * Gets the placeholder widget, if any.
         * @returns a #GtkWidget or %NULL
         */
        get_placeholder(): Gtk.Widget | null;
        /**
         * Gets the #PanelPosition for the frame.
         * @returns a #PanelPosition
         */
        get_position(): Position;
        /**
         * Gets the requested size for the panel frame.
         * @returns the requested size.
         */
        get_requested_size(): number;
        /**
         * Gets the widget of the currently visible child.
         * @returns a #PanelWidget or %NULL
         */
        get_visible_child(): Widget | null;
        /**
         * Removes a widget from the frame.
         * @param panel a #PanelWidget to remove.
         */
        remove(panel: Widget): void;
        /**
         * Set pinned state of `child`.
         * @param child a #PanelWidget
         * @param pinned if @widget should be pinned
         */
        set_child_pinned(child: Widget, pinned: boolean): void;
        /**
         * Sets the header for the frame, such as a #PanelFrameSwitcher.
         * @param header a #PanelFrameHeader
         */
        set_header(header?: FrameHeader | null): void;
        /**
         * Sets the placeholder widget for the frame.
         *
         * The placeholder widget is displayed when there are no pages
         * to display in the frame.
         * @param placeholder a #GtkWidget or %NULL
         */
        set_placeholder(placeholder?: Gtk.Widget | null): void;
        /**
         * Sets the requested size for the panel frame.
         * @param requested_size the requested size.
         */
        set_requested_size(requested_size: number): void;
        /**
         * Sets the current page to the child specified in `widget`.
         * @param widget a #PanelWidget
         */
        set_visible_child(widget: Widget): void;
    }

    module FrameHeaderBar {
        // Constructor properties interface
    }

    /**
     * A header bar for #PanelFrame. It can optionally show an icon, it
     * can have a popover to be displace, and it can also have prefix and
     * suffix widgets.
     *
     * It is an implementation of #PanelFrameHeader
     */
    class FrameHeaderBar extends Gtk.Widget {
        // Own properties of Panel-1.FrameHeaderBar

        /**
         * Whether to show the icon or not.
         */
        show_icon: boolean;
        /**
         * Whether to show the icon or not.
         */
        showIcon: boolean;

        // Constructors of Panel-1.FrameHeaderBar

        static ['new'](): FrameHeaderBar;

        // Owm methods of Panel-1.FrameHeaderBar

        /**
         * Gets the menu popover attached to this menubar.
         * @returns a #GtkPopoverMenu
         */
        get_menu_popover(): Gtk.PopoverMenu;
        /**
         * Tell whether it show the icon or not.
         * @returns whether to show the icon.
         */
        get_show_icon(): boolean;
        /**
         * Set whether to show the icon or not.
         * @param show_icon whether to show the icon
         */
        set_show_icon(show_icon: boolean): void;
    }

    module FrameSwitcher {
        // Constructor properties interface
    }

    /**
     * A #PanelFrameSwitcher is a #PanelFrameHeader that shows a row of
     * buttons to switch between #GtkStack pages, not disimilar to a
     * #GtkStackSwitcher.
     */
    class FrameSwitcher extends Gtk.Widget {
        // Constructors of Panel-1.FrameSwitcher

        static ['new'](): FrameSwitcher;
    }

    module FrameTabBar {
        // Constructor properties interface
    }

    /**
     * A #PanelFrameHeader that implements switching between tab views in
     * a #PanelFrame.
     */
    class FrameTabBar extends Gtk.Widget {
        // Own properties of Panel-1.FrameTabBar

        /**
         * Whether the tabs automatically hide.
         */
        autohide: boolean;
        /**
         * Whether tabs expand to full width.
         */
        expand_tabs: boolean;
        /**
         * Whether tabs expand to full width.
         */
        expandTabs: boolean;
        /**
         * Whether tabs use inverted layout.
         */
        inverted: boolean;

        // Constructors of Panel-1.FrameTabBar

        static ['new'](): FrameTabBar;

        // Owm methods of Panel-1.FrameTabBar

        /**
         * Gets whether the tabs automatically hide.
         * @returns the value of the autohide property.
         */
        get_autohide(): boolean;
        /**
         * Gets whether tabs expand to full width.
         * @returns the value of the expand_tabs property.
         */
        get_expand_tabs(): boolean;
        /**
         * Gets whether tabs use inverted layout.
         * @returns the value of the inverted property.
         */
        get_inverted(): boolean;
        /**
         * Sets whether the tabs automatically hide.
         * @param autohide the autohide value
         */
        set_autohide(autohide: boolean): void;
        /**
         * Sets whether tabs expand to full width.
         * @param expand_tabs the expand_tabs value
         */
        set_expand_tabs(expand_tabs: boolean): void;
        /**
         * Sets whether tabs tabs use inverted layout.
         * @param inverted the inverted value
         */
        set_inverted(inverted: boolean): void;
    }

    module GSettingsActionGroup {
        // Constructor properties interface
    }

    class GSettingsActionGroup extends GObject.Object {
        // Own properties of Panel-1.GSettingsActionGroup

        settings: Gio.Settings;

        // Owm methods of Panel-1.GSettingsActionGroup

        /**
         * Creates a new #GActionGroup that exports `settings`.
         * @param settings a #GSettings
         */
        static new(settings: Gio.Settings): Gio.ActionGroup;
    }

    module Grid {
        // Signal callback interfaces

        interface CreateFrame {
            (): Frame;
        }

        // Constructor properties interface
    }

    /**
     * The #PanelGrid is a widget used to layout the dock item in the
     * center area.
     */
    class Grid extends Gtk.Widget {
        // Constructors of Panel-1.Grid

        static ['new'](): Grid;

        // Owm methods of Panel-1.Grid

        /**
         * Add a #PanelWidget to the grid.
         * @param widget a #PanelWidget the widget to add.
         */
        add(widget: Widget): void;
        /**
         * Request to close, asynchronously. This will display the save dialog.
         * @param cancellable
         */
        agree_to_close_async(cancellable?: Gio.Cancellable | null): void;
        agree_to_close_finish(result: Gio.AsyncResult): boolean;
        /**
         * Calls `callback` for each #PanelFrame within `grid`.
         * @param callback a #PanelFrameCallback
         */
        foreach_frame(callback: FrameCallback): void;
        /**
         * Gets the #PanelGridColumn for a column index.
         * @param column a column index
         * @returns a #PanelGridColumn
         */
        get_column(column: number): GridColumn;
        /**
         * Gets the most recently acive column on a grid.
         * @returns a #PanelGridColumn
         */
        get_most_recent_column(): GridColumn;
        /**
         * Gets the most recently acive frame on a grid.
         * @returns a #PanelGridFrame
         */
        get_most_recent_frame(): Frame;
        /**
         * Gets the number of columns in the grid.
         * @returns The number of columns.
         */
        get_n_columns(): number;
        /**
         * Inserts a column at `position`.
         * @param position The position to insert the column at.
         */
        insert_column(position: number): void;
    }

    module GridColumn {
        // Constructor properties interface
    }

    class GridColumn extends Gtk.Widget {
        // Constructors of Panel-1.GridColumn

        static ['new'](): GridColumn;

        // Owm methods of Panel-1.GridColumn

        /**
         * Invokes a callback for each frame in the grid column.
         */
        foreach_frame(): void;
        get_empty(): boolean;
        /**
         * Gets the most recently acive frame on a grid column.
         * @returns a #PanelGridFrame
         */
        get_most_recent_frame(): Frame;
        get_n_rows(): number;
        /**
         * Gets the frame corresponding to a row index.
         * @param row the index of the row
         * @returns a #PanelGridFrame
         */
        get_row(row: number): Frame;
    }

    module Inhibitor {
        // Constructor properties interface
    }

    class Inhibitor extends GObject.Object {
        // Owm methods of Panel-1.Inhibitor

        uninhibit(): void;
    }

    module LayeredSettings {
        // Signal callback interfaces

        interface Changed {
            (object: string): void;
        }

        // Constructor properties interface
    }

    class LayeredSettings extends GObject.Object {
        // Own properties of Panel-1.LayeredSettings

        path: string;
        schema_id: string;
        schemaId: string;

        // Constructors of Panel-1.LayeredSettings

        static ['new'](schema_id: string, path: string): LayeredSettings;

        // Owm methods of Panel-1.LayeredSettings

        append(settings: Gio.Settings): void;
        bind(key: string, object: any | null, property: string, flags: Gio.SettingsBindFlags): void;
        /**
         * Creates a new binding similar to g_settings_bind_with_mapping() but applying
         * from the resolved value via the layered settings.
         * @param key the settings key to bind. @object (type GObject.Object): the target object.
         * @param object
         * @param property the property on @object to apply.
         * @param flags flags for the binding.
         * @param get_mapping the get mapping function
         * @param set_mapping the set mapping function
         */
        bind_with_mapping(
            key: string,
            object: any | null,
            property: string,
            flags: Gio.SettingsBindFlags,
            get_mapping: Gio.SettingsBindGetMapping,
            set_mapping: Gio.SettingsBindSetMapping,
        ): void;
        get_boolean(key: string): boolean;
        get_default_value(key: string): GLib.Variant;
        get_double(key: string): number;
        get_int(key: string): number;
        /**
         * Gets the #GSettingsSchemaKey denoted by `key`.
         *
         * It is a programming error to call this with a key that does not exist.
         * @param key the name of the setting
         * @returns a #GSettingsSchemaKey
         */
        get_key(key: string): Gio.SettingsSchemaKey;
        get_string(key: string): string;
        get_uint(key: string): number;
        get_user_value(key: string): GLib.Variant | null;
        /**
         * Gets the value of `key` from the first layer that is modified.
         * @param key
         * @returns a #GVariant
         */
        get_value(key: string): GLib.Variant;
        /**
         * Lists the available keys.
         * @returns an array of keys that can be retrieved from the #PanelLayeredSettings.
         */
        list_keys(): string[];
        set_boolean(key: string, val: boolean): void;
        set_double(key: string, val: number): void;
        set_int(key: string, val: number): void;
        set_string(key: string, val: string): void;
        set_uint(key: string, val: number): void;
        set_value(key: string, value: GLib.Variant): void;
        unbind(property: string): void;
    }

    module MenuManager {
        // Constructor properties interface
    }

    /**
     * The goal of #PanelMenuManager is to simplify the process of merging multiple
     * GtkBuilder .ui files containing menus into a single representation of the
     * application menus. Additionally, it provides the ability to "unmerge"
     * previously merged menus.
     *
     * This allows for an application to have plugins which seemlessly extends
     * the core application menus.
     *
     * Implementation notes:
     *
     * To make this work, we don't use the GMenu instances created by a GtkBuilder
     * instance. Instead, we create the menus ourself and recreate section and
     * submenu links. This allows the #PanelMenuManager to be in full control of
     * the generated menus.
     *
     * panel_menu_manager_get_menu_by_id() will always return a #GMenu, however
     * that menu may contain no children until something has extended it later
     * on during the application process.
     */
    class MenuManager extends GObject.Object {
        // Constructors of Panel-1.MenuManager

        static ['new'](): MenuManager;

        // Owm methods of Panel-1.MenuManager

        add_filename(filename: string): number;
        add_resource(resource: string): number;
        /**
         * Locates a menu item that matches `id` and sets the position within
         * the resulting #GMenu to `position`.
         *
         * If no match is found, %NULL is returned.
         * @param id the identifier of the menu item
         * @returns a #GMenu if successful; otherwise   %NULL and @position is unset.
         */
        find_item_by_id(id: string): Gio.Menu | null;
        get_menu_by_id(menu_id: string): Gio.Menu;
        /**
         * Gets the known menu ids as a string array.
         */
        get_menu_ids(): string[];
        /**
         * Note that `menu_model` is not retained, a copy of it is made.
         * @param menu_id the identifier of the menu
         * @param menu_model the menu model to merge
         * @returns the merge-id which can be used with panel_menu_manager_remove()
         */
        merge(menu_id: string, menu_model: Gio.MenuModel): number;
        /**
         * This removes items from menus that were added as part of a previous
         * menu merge. Use the value returned from panel_menu_manager_merge() as
         * the `merge_id`.
         * @param merge_id A previously registered merge id
         */
        remove(merge_id: number): void;
        /**
         * Overwrites an attribute for a menu that was created by
         * #PanelMenuManager.
         *
         * This can be useful when you want to update an attribute such as
         * "accel" when an accelerator has changed due to user mappings.
         * @param menu the menu that was retreived with panel_menu_manager_get_menu_by_id()
         * @param position the index of the item in the menu
         * @param attribute the attribute to change
         * @param value the new value for the attribute
         */
        set_attribute_string(menu: Gio.Menu, position: number, attribute: string, value: string): void;
    }

    module OmniBar {
        // Constructor properties interface
    }

    /**
     * A multi-use widget for user interaction in the window header bar.
     * You can add widgets, a popover to provide action items, an icon,
     * updates on progress and pulse the main widget.
     *
     * There is also a prefix and suffix area that can contain more
     * widgets.
     *
     * &lt;picture&gt;
     *   &lt;source srcset="omni-bar-dark.png" media="(prefers-color-scheme: dark)"&gt;
     *   &lt;img src="omni-bar.png" alt="omni-bar"&gt;
     * &lt;/picture&gt;
     */
    class OmniBar extends Gtk.Widget {
        // Own properties of Panel-1.OmniBar

        /**
         * The tooltip for the action.
         */
        action_tooltip: string;
        /**
         * The tooltip for the action.
         */
        actionTooltip: string;
        /**
         * The name of the icon to use.
         */
        icon_name: string;
        /**
         * The name of the icon to use.
         */
        iconName: string;
        /**
         * The menu model of the omni bar menu.
         */
        menu_model: Gio.MenuModel;
        /**
         * The menu model of the omni bar menu.
         */
        menuModel: Gio.MenuModel;
        /**
         * The popover to show.
         */
        popover: Gtk.Popover;
        /**
         * The current progress value.
         */
        progress: number;

        // Constructors of Panel-1.OmniBar

        static ['new'](): OmniBar;

        // Owm methods of Panel-1.OmniBar

        /**
         * Add a widget at the start of the container, ordered by priority.
         * The highest the priority, the closest to the start.
         * @param priority the priority
         * @param widget the widget to add at the start.
         */
        add_prefix(priority: number, widget: Gtk.Widget): void;
        /**
         * Add a widget towards the end of the container, ordered by priority.
         * The highest the priority, the closest to the start.
         * @param priority the priority
         * @param widget the widget to add toward the end.
         */
        add_suffix(priority: number, widget: Gtk.Widget): void;
        /**
         * Gets the current popover or %NULL if none is setup.
         * @returns a #GtkPopover or %NULL
         */
        get_popover(): Gtk.Popover | null;
        /**
         * Gets the progress value displayed in the omni bar.
         * @returns the progress value.
         */
        get_progress(): number;
        /**
         * Removes a widget from the omni bar. Currently only prefix or suffix
         * widgets are supported.
         * @param widget The widget to remove.
         */
        remove(widget: Gtk.Widget): void;
        /**
         * Sets the omnibar popover, that will appear when clicking on the omni bar.
         * @param popover a #GtkPopover or %NULL
         */
        set_popover(popover?: Gtk.Popover | null): void;
        /**
         * Sets the progress value displayed in the omni bar.
         * @param progress the progress value
         */
        set_progress(progress: number): void;
        /**
         * Starts pulsing the omni bar. Use
         * `panel_omni_bar_stop_pulsing` to stop.
         */
        start_pulsing(): void;
        /**
         * Stops pulsing the omni bar, that was started with
         * `panel_omni_bar_start_pulsing`.
         */
        stop_pulsing(): void;
    }

    module Paned {
        // Constructor properties interface
    }

    /**
     * A #PanelPaned is the concrete widget for a panel area.
     */
    class Paned extends Gtk.Widget {
        // Constructors of Panel-1.Paned

        static ['new'](): Paned;

        // Owm methods of Panel-1.Paned

        /**
         * Append a widget in the paned.
         * @param child a #GtkWidget to append.
         */
        append(child: Gtk.Widget): void;
        /**
         * Gets the number of children in the paned.
         * @returns the number of children.
         */
        get_n_children(): number;
        /**
         * Gets the child at position `nth`.
         * @param nth the child position
         * @returns a #GtkWidget or %NULL
         */
        get_nth_child(nth: number): Gtk.Widget | null;
        /**
         * Inserts a widget at position in the paned.
         * @param position the position
         * @param child a #GtkWidget to insert.
         */
        insert(position: number, child: Gtk.Widget): void;
        /**
         * Inserts a widget afer `sibling` in the paned.
         * @param child a #GtkWidget to insert.
         * @param sibling the widget after which to insert.
         */
        insert_after(child: Gtk.Widget, sibling: Gtk.Widget): void;
        /**
         * Prepends a widget in the paned.
         * @param child a #GtkWidget to prepend.
         */
        prepend(child: Gtk.Widget): void;
        /**
         * Removes a widget from the paned.
         * @param child a #GtkWidget
         */
        remove(child: Gtk.Widget): void;
    }

    module Position {
        // Constructor properties interface
    }

    /**
     * Specifies a position in the dock. You receive a #PanelPosition in the
     * handler to [signal`PanelDock:`:create-frame].
     */
    class Position extends GObject.Object {
        // Own properties of Panel-1.Position

        /**
         * The area.
         */
        area: Area;
        /**
         * The area is set.
         */
        area_set: boolean;
        /**
         * The area is set.
         */
        areaSet: boolean;
        /**
         * The column in the position.
         */
        column: number;
        /**
         * The column is set.
         */
        column_set: boolean;
        /**
         * The column is set.
         */
        columnSet: boolean;
        depth: number;
        depth_set: boolean;
        depthSet: boolean;
        row: number;
        row_set: boolean;
        rowSet: boolean;

        // Constructors of Panel-1.Position

        static ['new'](): Position;

        static new_from_variant(variant: GLib.Variant): Position;

        // Owm methods of Panel-1.Position

        /**
         * Compares two #PanelPosition.
         * @param b another #PanelPosition
         * @returns whether the two pane positions are equal.
         */
        equal(b: Position): boolean;
        /**
         * Gets the area.
         * @returns the area.
         */
        get_area(): Area;
        /**
         * Gets wether the area is set.
         * @returns the wether the area is set.
         */
        get_area_set(): boolean;
        get_column(): number;
        get_column_set(): boolean;
        get_depth(): number;
        get_depth_set(): boolean;
        get_row(): number;
        get_row_set(): boolean;
        /**
         * Tells is the position is indeterminate.
         * @returns whether the position is indeterminate.
         */
        is_indeterminate(): boolean;
        /**
         * Sets the area.
         * @param area the #PanelArea
         */
        set_area(area: Area): void;
        /**
         * Sets whether the area is set.
         * @param area_set whether the area is set.
         */
        set_area_set(area_set: boolean): void;
        set_column(column: number): void;
        set_column_set(column_set: boolean): void;
        set_depth(depth: number): void;
        set_depth_set(depth_set: boolean): void;
        set_row(row: number): void;
        set_row_set(row_set: boolean): void;
        /**
         * Convert a #PanelPosition to a #GVariant.
         * @returns the new #GVariant containing the positon values
         */
        to_variant(): GLib.Variant | null;
    }

    module SaveDelegate {
        // Signal callback interfaces

        interface Close {
            (): void;
        }

        interface Discard {
            (): void;
        }

        interface Save {
            (task: Gio.Task): boolean;
        }

        // Constructor properties interface
    }

    class SaveDelegate extends GObject.Object {
        // Own properties of Panel-1.SaveDelegate

        /**
         * The "icon" property contains a #GIcon that describes the save
         * operation. Generally, this should be the symbolic icon of the
         * document class you are saving.
         *
         * Alternatively, you can use #PanelSaveDelegate:icon-name for a
         * named icon.
         */
        icon: Gio.Icon;
        /**
         * The "icon-name" property contains the name of an icon to use when
         * showing information about the save operation in UI such as a save
         * dialog.
         *
         * You can also use #PanelSaveDelegate:icon to set a #GIcon instead of
         * an icon name.
         */
        icon_name: string;
        /**
         * The "icon-name" property contains the name of an icon to use when
         * showing information about the save operation in UI such as a save
         * dialog.
         *
         * You can also use #PanelSaveDelegate:icon to set a #GIcon instead of
         * an icon name.
         */
        iconName: string;
        /**
         * The "is-draft" property indicates that the document represented by the
         * delegate is a draft and might be lost of not saved.
         */
        is_draft: boolean;
        /**
         * The "is-draft" property indicates that the document represented by the
         * delegate is a draft and might be lost of not saved.
         */
        isDraft: boolean;
        /**
         * The "progress" property contains progress between 0.0 and 1.0 and
         * should be updated by the delegate implementation as saving progresses.
         */
        progress: number;
        /**
         * The "subtitle" property contains additional information that may
         * not make sense to put in the title. This might include the directory
         * that the file will be saved within.
         */
        subtitle: string;
        /**
         * The "title" property contains the title of the document being saved.
         * Generally, this should be the base name of the document such as
         * `file.txt`.
         */
        title: string;

        // Constructors of Panel-1.SaveDelegate

        static ['new'](): SaveDelegate;

        // Owm methods of Panel-1.SaveDelegate

        close(): void;
        discard(): void;
        /**
         * Gets the #GIcon for the save delegate, or %NULL if unset.
         * @returns a #GIcon or %NULL
         */
        get_icon(): Gio.Icon | null;
        /**
         * Gets the icon name for the save delegate.
         * @returns the icon name or %NULL
         */
        get_icon_name(): string | null;
        get_is_draft(): boolean;
        get_progress(): number;
        /**
         * Gets the subtitle for the save delegate.
         * @returns the subtitle or %NULL
         */
        get_subtitle(): string | null;
        /**
         * Gets the title for the save delegate.
         * @returns the title or %NULL
         */
        get_title(): string | null;
        save_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        save_finish(result: Gio.AsyncResult): boolean;
        /**
         * Sets the #GIcon for the save delegate. Pass %NULL to unset.
         * @param icon a #GIcon or %NULL
         */
        set_icon(icon?: Gio.Icon | null): void;
        /**
         * Sets the icon name for the save delegate. Pass %NULL to unset.
         * @param icon the icon name or %NULL
         */
        set_icon_name(icon?: string | null): void;
        set_is_draft(is_draft: boolean): void;
        set_progress(progress: number): void;
        /**
         * Sets the subtitle for the save delegate. Pass %NULL to unset.
         * @param subtitle the subtitle or %NULL
         */
        set_subtitle(subtitle?: string | null): void;
        /**
         * Sets the title for the save delegate. Pass %NULL to unset.
         * @param title the title or %NULL
         */
        set_title(title?: string | null): void;
    }

    module SaveDialog {
        // Constructor properties interface
    }

    class SaveDialog extends Adw.MessageDialog {
        // Own properties of Panel-1.SaveDialog

        /**
         * This property requests that the widget close after saving.
         */
        close_after_save: boolean;
        /**
         * This property requests that the widget close after saving.
         */
        closeAfterSave: boolean;

        // Constructors of Panel-1.SaveDialog

        static ['new'](): SaveDialog;

        // Owm methods of Panel-1.SaveDialog

        add_delegate(delegate: SaveDelegate): void;
        get_close_after_save(): boolean;
        run_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        run_finish(result: Gio.AsyncResult): boolean;
        set_close_after_save(close_after_save: boolean): void;
    }

    module Session {
        // Constructor properties interface
    }

    class Session extends GObject.Object {
        // Constructors of Panel-1.Session

        static ['new'](): Session;

        static new_from_variant(variant: GLib.Variant): Session;

        // Owm methods of Panel-1.Session

        append(item: SessionItem): void;
        /**
         * Gets the item at `position`.
         * @param position the index of the item
         * @returns The #PanelSessionItem at @position   or %NULL if there is no item at that position.
         */
        get_item(position: number): SessionItem | null;
        get_n_items(): number;
        insert(position: number, item: SessionItem): void;
        /**
         * Gets a session item matching `id`.
         * @param id the id of the item
         * @returns an #PanelSessionItem or %NULL
         */
        lookup_by_id(id: string): SessionItem | null;
        prepend(item: SessionItem): void;
        remove(item: SessionItem): void;
        remove_at(position: number): void;
        /**
         * Serializes a #PanelSession as a #GVariant
         *
         * The result of this function may be passed to
         * panel_session_new_from_variant() to recreate a #PanelSession.
         *
         * The resulting variant will not be floating.
         * @returns a #GVariant
         */
        to_variant(): GLib.Variant;
    }

    module SessionItem {
        // Constructor properties interface
    }

    class SessionItem extends GObject.Object {
        // Own properties of Panel-1.SessionItem

        id: string;
        module_name: string;
        moduleName: string;
        position: Position;
        type_hint: string;
        typeHint: string;
        workspace: string;

        // Constructors of Panel-1.SessionItem

        static ['new'](): SessionItem;

        // Owm methods of Panel-1.SessionItem

        /**
         * Gets the id for the session item, if any.
         * @returns a string containing the id; otherwise %NULL
         */
        get_id(): string | null;
        /**
         * Retrieves the metadata value for `key`.
         *
         * If `expected_type` is non-%NULL, any non-%NULL value returned from this
         * function will match `expected_type`.
         * @param key the metadata key
         * @param expected_type a #GVariantType or %NULL
         * @returns a non-floating #GVariant which should   be released with g_variant_unref(); otherwise %NULL.
         */
        get_metadata_value(key: string, expected_type?: GLib.VariantType | null): GLib.Variant | null;
        /**
         * Gets the module-name that created an item.
         * @returns a module-name or %NULL
         */
        get_module_name(): string | null;
        /**
         * Gets the #PanelPosition for the item.
         * @returns a #PanelPosition or %NULL
         */
        get_position(): Position | null;
        /**
         * Gets the type hint for an item.
         * @returns a type-hint or %NULL
         */
        get_type_hint(): string | null;
        /**
         * Gets the workspace id for the item.
         * @returns a workspace or %NULL
         */
        get_workspace(): string | null;
        /**
         * If the item contains a metadata value for `key`.
         *
         * Checks if a value exists for a metadata key and retrieves the #GVariantType
         * for that key.
         * @param key the name of the metadata
         * @returns %TRUE if @self contains metadata named @key and @value_type is set   to the value's #GVariantType. Otherwise %FALSE and @value_type is unchanged.
         */
        has_metadata(key: string): boolean;
        /**
         * Checks if the item contains metadata `key` with `expected_type`.
         * @param key the metadata key
         * @param expected_type the #GVariantType to check for @key
         * @returns %TRUE if a value was found for @key matching @expected_typed;   otherwise %FALSE is returned.
         */
        has_metadata_with_type(key: string, expected_type: GLib.VariantType): boolean;
        /**
         * Sets the identifier for the item.
         *
         * The identifier should generally be global to the session as it would
         * not be expected to come across multiple items with the same id.
         * @param id an optional identifier for the item
         */
        set_id(id?: string | null): void;
        /**
         * Sets the value for metadata `key`.
         *
         * If `value` is %NULL, the metadata key is unset.
         * @param key the metadata key
         * @param value the value for @key or %NULL
         */
        set_metadata_value(key: string, value?: GLib.Variant | null): void;
        /**
         * Sets the module-name for the session item.
         *
         * This is generally used to help determine which plugin created
         * the item when decoding them at project load time.
         * @param module_name the module name owning the item
         */
        set_module_name(module_name?: string | null): void;
        /**
         * Sets the position for `self,` if any.
         * @param position a #PanelPosition or %NULL
         */
        set_position(position?: Position | null): void;
        /**
         * Sets the type-hint value for the item.
         *
         * This is generally used to help inflate the right version of
         * an object when loading session items.
         * @param type_hint a type hint string for the item
         */
        set_type_hint(type_hint?: string | null): void;
        /**
         * Sets the workspace id for the item.
         *
         * This is generally used to tie an item to a specific workspace.
         * @param workspace a workspace string for the item
         */
        set_workspace(workspace?: string | null): void;
    }

    module Settings {
        // Signal callback interfaces

        interface Changed {
            (object: string): void;
        }

        // Constructor properties interface
    }

    class Settings extends GObject.Object {
        // Own properties of Panel-1.Settings

        /**
         * The "identifier" property is used to make unique paths.
         *
         * This might be a unique "project-id" for example, in an IDE.
         */
        identifier: string;
        path: string;
        path_prefix: string;
        pathPrefix: string;
        path_suffix: string;
        pathSuffix: string;
        schema_id: string;
        schemaId: string;
        schema_id_prefix: string;
        schemaIdPrefix: string;

        // Constructors of Panel-1.Settings

        static ['new'](identifier: string, schema_id: string): Settings;

        static new_relocatable(
            identifier: string,
            schema_id: string,
            schema_id_prefix: string,
            path_prefix: string,
            path_suffix: string,
        ): Settings;

        static new_with_path(identifier: string, schema_id: string, path: string): Settings;

        // Owm methods of Panel-1.Settings

        static resolve_schema_path(
            schema_id_prefix: string,
            schema_id: string,
            identifier: string,
            path_prefix: string,
            path_suffix: string,
        ): string;

        // Owm methods of Panel-1.Settings

        bind(key: string, object: any | null, property: string, flags: Gio.SettingsBindFlags): void;
        /**
         * Like panel_settings_bind() but allows transforming to and from settings storage using
         * `get_mapping` and `set_mapping` transformation functions.
         *
         * Call panel_settings_unbind() to unbind the mapping.
         * @param key The settings key
         * @param object the object to bind to
         * @param property the property of @object to bind to
         * @param flags flags for the binding
         * @param get_mapping variant to value mapping
         * @param set_mapping value to variant mapping
         */
        bind_with_mapping(
            key: string,
            object: any | null,
            property: string,
            flags: Gio.SettingsBindFlags,
            get_mapping?: Gio.SettingsBindGetMapping | null,
            set_mapping?: Gio.SettingsBindSetMapping | null,
        ): void;
        get_boolean(key: string): boolean;
        get_default_value(key: string): GLib.Variant;
        get_double(key: string): number;
        get_int(key: string): number;
        get_schema_id(): string;
        get_string(key: string): string;
        get_uint(key: string): number;
        get_user_value(key: string): GLib.Variant | null;
        get_value(key: string): GLib.Variant;
        set_boolean(key: string, val: boolean): void;
        set_double(key: string, val: number): void;
        set_int(key: string, val: number): void;
        set_string(key: string, val: string): void;
        set_uint(key: string, val: number): void;
        set_value(key: string, value: GLib.Variant): void;
        unbind(property: string): void;
    }

    module Statusbar {
        // Constructor properties interface
    }

    /**
     * A panel status bar is meant to be displayed at the bottom of the
     * window. It can contain widgets in the prefix and in the suffix.
     */
    class Statusbar extends Gtk.Widget {
        // Constructors of Panel-1.Statusbar

        static ['new'](): Statusbar;

        // Owm methods of Panel-1.Statusbar

        /**
         * Adds a widget into the prefix with `priority`. The higher the
         * priority the closer to the start the widget will be added.
         * @param priority the priority
         * @param widget a #GtkWidget to add.
         */
        add_prefix(priority: number, widget: Gtk.Widget): void;
        /**
         * Adds a widget into the suffix with `priority`. The higher the
         * priority the closer to the start the widget will be added.
         * @param priority the priority
         * @param widget a #GtkWidget to add.
         */
        add_suffix(priority: number, widget: Gtk.Widget): void;
        /**
         * Removes `widget` from the #PanelStatusbar.
         * @param widget a #GtkWidget to remove.
         */
        remove(widget: Gtk.Widget): void;
    }

    module ThemeSelector {
        // Constructor properties interface
    }

    /**
     * A widget that allow selecting theme preference between "dark",
     * "light" and "follow" the system preference.
     *
     * &lt;picture&gt;
     *   &lt;source srcset="theme-selector-dark.png" media="(prefers-color-scheme: dark)"&gt;
     *   &lt;img src="theme-selector.png" alt="theme-selector"&gt;
     * &lt;/picture&gt;
     *
     * Upon activation it will activate the named action in
     * #PanelThemeSelector:action-name.
     */
    class ThemeSelector extends Gtk.Widget {
        // Own properties of Panel-1.ThemeSelector

        /**
         * The name of the action activated on activation.
         */
        action_name: string;
        /**
         * The name of the action activated on activation.
         */
        actionName: string;

        // Constructors of Panel-1.ThemeSelector

        static ['new'](): ThemeSelector;

        // Owm methods of Panel-1.ThemeSelector

        /**
         * Gets the name of the action that will be activated.
         * @returns the name of the action.
         */
        get_action_name(): string;
        /**
         * Sets the name of the action that will be activated.
         * @param action_name the action name.
         */
        set_action_name(action_name: string): void;
    }

    module ToggleButton {
        // Constructor properties interface
    }

    /**
     * The `PanelToggleButton` is a button used to toggle the visibility
     * of a [class`Panel`.Dock] area.
     *
     * &lt;picture&gt;
     *   &lt;source srcset="toggle-button-dark.png" media="(prefers-color-scheme: dark)"&gt;
     *   &lt;img src="toggle-button.png" alt="toggle-button"&gt;
     * &lt;/picture&gt;
     *
     * It will automatically reveal or hide the specified area from
     * [property`Panel`.ToggleButton:dock].
     */
    class ToggleButton extends Gtk.Widget {
        // Own properties of Panel-1.ToggleButton

        /**
         * The area this button will reveal.
         */
        area: Area;
        /**
         * The associated [class`Panel`.Dock]
         */
        dock: Dock;

        // Constructors of Panel-1.ToggleButton

        static ['new'](dock: Dock, area: Area): ToggleButton;
    }

    module Widget {
        // Signal callback interfaces

        interface GetDefaultFocus {
            (): Gtk.Widget | null;
        }

        interface Presented {
            (): void;
        }

        // Constructor properties interface
    }

    /**
     * PanelWidget is the base widget class for widgets added to a
     * #PanelFrame. It can be use as-is or you can subclass it.
     */
    class Widget extends Gtk.Widget {
        // Own properties of Panel-1.Widget

        readonly busy: boolean;
        can_maximize: boolean;
        canMaximize: boolean;
        /**
         * The child inside this widget.
         */
        child: Gtk.Widget;
        /**
         * The icon for this widget.
         */
        icon: Gio.Icon;
        /**
         * The icon name for this widget.
         */
        icon_name: string;
        /**
         * The icon name for this widget.
         */
        iconName: string;
        id: string;
        kind: string;
        /**
         * A menu model to display additional options for the page to the user via
         * menus.
         */
        menu_model: Gio.MenuModel;
        /**
         * A menu model to display additional options for the page to the user via
         * menus.
         */
        menuModel: Gio.MenuModel;
        modified: boolean;
        needs_attention: boolean;
        needsAttention: boolean;
        reorderable: boolean;
        /**
         * The save delegate attached to this widget.
         */
        save_delegate: SaveDelegate;
        /**
         * The save delegate attached to this widget.
         */
        saveDelegate: SaveDelegate;
        /**
         * The title for this widget.
         */
        title: string;
        /**
         * The tooltip to display in tabs for the widget.
         */
        tooltip: string;

        // Constructors of Panel-1.Widget

        static ['new'](): Widget;

        // Owm methods of Panel-1.Widget

        static install_action(
            action_name: string,
            parameter_type: string | null,
            activate: Gtk.WidgetActionActivateFunc,
        ): void;
        static install_property_action(action_name: string, property_name: string): void;

        // Owm methods of Panel-1.Widget

        action_set_enabled(action_name: string, enabled: boolean): void;
        close(): void;
        focus_default(): boolean;
        /**
         * Closes the widget without any save dialogs.
         */
        force_close(): void;
        get_busy(): boolean;
        get_can_maximize(): boolean;
        /**
         * Gets the child widget of the panel.
         * @returns a #GtkWidget or %NULL
         */
        get_child(): Gtk.Widget | null;
        /**
         * Discovers the widget that should be focused as the default widget
         * for the #PanelWidget.
         *
         * For example, if you want to focus a text editor by default, you might
         * return the #GtkTextView inside your widgetry.
         * @returns the default widget to focus within   the #PanelWidget.
         */
        get_default_focus(): Gtk.Widget | null;
        /**
         * Gets a #GIcon for the widget.
         * @returns a #GIcon or %NULL
         */
        get_icon(): Gio.Icon | null;
        /**
         * Gets the icon name for the widget.
         * @returns the icon name or %NULL
         */
        get_icon_name(): string | null;
        /**
         * Gets the id of the panel widget.
         * @returns The id of the panel widget.
         */
        get_id(): string;
        get_kind(): string;
        /**
         * Gets the #GMenuModel for the widget.
         *
         * #PanelFrameHeader may use this model to display additional options
         * for the page to the user via menus.
         * @returns a #GMenuModel
         */
        get_menu_model(): Gio.MenuModel | null;
        /**
         * Gets the modified status of a panel widget
         * @returns the modified status of the panel widget.
         */
        get_modified(): boolean;
        get_needs_attention(): boolean;
        /**
         * Gets teh position of the widget within the dock.
         * @returns a #PanelPosition or %NULL if the   widget isn't within a #PanelFrame.
         */
        get_position(): Position | null;
        get_reorderable(): boolean;
        /**
         * Gets the #PanelWidget:save-delegate property.
         *
         * The save delegate may be used to perform save operations on the
         * content within the widget.
         *
         * Document editors might use this to save the file to disk.
         * @returns a #PanelSaveDelegate or %NULL
         */
        get_save_delegate(): SaveDelegate | null;
        /**
         * Gets the title for the widget.
         * @returns the title or %NULL
         */
        get_title(): string | null;
        /**
         * Gets the tooltip for the widget.
         * @returns the tooltip or %NULL
         */
        get_tooltip(): string | null;
        insert_action_group(prefix: string, group: Gio.ActionGroup): void;
        mark_busy(): void;
        maximize(): void;
        raise(): void;
        set_can_maximize(can_maximize: boolean): void;
        /**
         * Sets the child widget of the panel.
         * @param child a #GtkWidget or %NULL
         */
        set_child(child?: Gtk.Widget | null): void;
        /**
         * Sets a #GIcon for the widget.
         * @param icon a #GIcon or %NULL
         */
        set_icon(icon?: Gio.Icon | null): void;
        /**
         * Sets the icon name for the widget.
         * @param icon_name the icon name or %NULL
         */
        set_icon_name(icon_name?: string | null): void;
        /**
         * Sets the id of the panel widget.
         * @param id the id to set for the panel widget.
         */
        set_id(id: string): void;
        /**
         * Sets the kind of the widget.
         * @param kind the kind of this widget
         */
        set_kind(kind?: string | null): void;
        /**
         * Sets the #GMenuModel for the widget.
         *
         * #PanelFrameHeader may use this model to display additional options
         * for the page to the user via menus.
         * @param menu_model a #GMenuModel
         */
        set_menu_model(menu_model?: Gio.MenuModel | null): void;
        /**
         * Sets the modified status of a panel widget.
         * @param modified the modified status
         */
        set_modified(modified: boolean): void;
        set_needs_attention(needs_attention: boolean): void;
        set_reorderable(reorderable: boolean): void;
        /**
         * Sets the #PanelWidget:save-delegate property.
         *
         * The save delegate may be used to perform save operations on the
         * content within the widget.
         *
         * Document editors might use this to save the file to disk.
         * @param save_delegate a #PanelSaveDelegate or %NULL
         */
        set_save_delegate(save_delegate?: SaveDelegate | null): void;
        /**
         * Sets the title for the widget.
         * @param title the title or %NULL
         */
        set_title(title?: string | null): void;
        /**
         * Sets the tooltip for the widget to be displayed in tabs.
         * @param tooltip the tooltip or %NULL
         */
        set_tooltip(tooltip?: string | null): void;
        unmark_busy(): void;
        unmaximize(): void;
    }

    module Workbench {
        // Signal callback interfaces

        interface Activate {
            (): void;
        }

        // Constructor properties interface
    }

    class Workbench extends Gtk.WindowGroup {
        // Own properties of Panel-1.Workbench

        /**
         * The "id" of the workbench.
         *
         * This is generally used by applications to help destinguish between
         * projects, so that the project-id matches the workbench-id.
         */
        id: string;

        // Constructors of Panel-1.Workbench

        static ['new'](): Workbench;

        // Owm methods of Panel-1.Workbench

        /**
         * Finds the workbench that contains `widget`.
         * @param widget a #GtkWidget
         */
        static find_from_widget(widget: Gtk.Widget): Workbench | null;
        static install_action(action_name: string, parameter_type: string | null, activate: ActionActivateFunc): void;
        static install_property_action(action_name: string, property_name: string): void;

        // Owm methods of Panel-1.Workbench

        action_set_enabled(action_name: string, enabled: boolean): void;
        activate(): void;
        add_workspace(workspace: Workspace): void;
        /**
         * Locates a workspace in `self` with a type matching `type`.
         * @param workspace_type
         * @returns a #PanelWorkspace or %NULL
         */
        find_workspace_typed(workspace_type: GObject.GType): Workspace | null;
        focus_workspace(workspace: Workspace): void;
        /**
         * Calls `foreach_func` for each workspace in the workbench.
         * @param foreach_func a function to call for each workspace
         */
        foreach_workspace(foreach_func: WorkspaceForeach): void;
        get_id(): string;
        remove_workspace(workspace: Workspace): void;
        set_id(id: string): void;
    }

    module Workspace {
        // Constructor properties interface
    }

    class Workspace extends Adw.ApplicationWindow {
        // Own properties of Panel-1.Workspace

        /**
         * The "id" of the workspace.
         *
         * This is generally used by applications to help destinguish between
         * types of workspaces, particularly when saving session state.
         */
        id: string;

        // Owm methods of Panel-1.Workspace

        /**
         * Finds the workspace that contains `widget`.
         * @param widget a #GtkWidget
         */
        static find_from_widget(widget: Gtk.Widget): Workspace | null;
        static install_action(action_name: string, parameter_type: string | null, activate: ActionActivateFunc): void;
        static install_property_action(action_name: string, property_name: string): void;

        // Owm methods of Panel-1.Workspace

        action_set_enabled(action_name: string, enabled: boolean): void;
        get_id(): string;
        /**
         * Gets the #PanelWorkbench `self` is a part of.
         * @returns a #PanelWorkbench, or %NULL
         */
        get_workbench(): Workbench | null;
        /**
         * Inhibits one or more particular actions in the session.
         *
         * When the resulting #PanelInhibitor releases it's last reference
         * the inhibitor will be dismissed. Alternatively, you may force the
         * release of the inhibit using panel_inhibitor_uninhibit().
         * @param flags the inhibit flags
         * @param reason the reason for the inhibit
         * @returns a #PanelInhibitor or %NULL
         */
        inhibit(flags: Gtk.ApplicationInhibitFlags, reason: string): Inhibitor | null;
        set_id(id: string): void;
    }

    class Action {}

    class ActionMuxerClass {}

    class ApplicationClass {}

    class DockClass {}

    class DocumentWorkspaceClass {}

    class FrameClass {}

    class FrameHeaderBarClass {}

    class FrameHeaderInterface {}

    class FrameSwitcherClass {}

    class FrameTabBarClass {}

    class GSettingsActionGroupClass {}

    class GridClass {}

    class GridColumnClass {}

    class InhibitorClass {}

    class LayeredSettingsClass {}

    class MenuManagerClass {}

    class OmniBarClass {}

    class PanedClass {}

    class PositionClass {}

    class SaveDelegateClass {}

    class SaveDialogClass {}

    class SessionClass {}

    class SessionItemClass {}

    class SettingsClass {}

    class StatusbarClass {}

    class ThemeSelectorClass {}

    class ToggleButtonClass {}

    class WidgetClass {
        // Owm methods of Panel-1.WidgetClass

        /**
         * This should be called at class initialization time to specify
         * actions to be added for all instances of this class.
         *
         * Actions installed by this function are stateless. The only state
         * they have is whether they are enabled or not.
         * @param action_name a prefixed action name, such as "clipboard.paste"
         * @param parameter_type the parameter type
         * @param activate callback to use when the action is activated
         */
        install_action(
            action_name: string,
            parameter_type: string | null,
            activate: Gtk.WidgetActionActivateFunc,
        ): void;
        /**
         * Installs an action called `action_name` on `widget_class` and
         * binds its state to the value of the `property_name` property.
         *
         * This function will perform a few santity checks on the property selected
         * via `property_name`. Namely, the property must exist, must be readable,
         * writable and must not be construct-only. There are also restrictions
         * on the type of the given property, it must be boolean, int, unsigned int,
         * double or string. If any of these conditions are not met, a critical
         * warning will be printed and no action will be added.
         *
         * The state type of the action matches the property type.
         *
         * If the property is boolean, the action will have no parameter and
         * toggle the property value. Otherwise, the action will have a parameter
         * of the same type as the property.
         * @param action_name name of the action
         * @param property_name name of the property in instances of @widget_class   or any parent class.
         */
        install_property_action(action_name: string, property_name: string): void;
    }

    class WorkbenchClass {
        // Owm methods of Panel-1.WorkbenchClass

        /**
         * This should be called at class initialization time to specify
         * actions to be added for all instances of this class.
         *
         * Actions installed by this function are stateless. The only state
         * they have is whether they are enabled or not.
         * @param action_name a prefixed action name, such as "project.open"
         * @param parameter_type the parameter type
         * @param activate callback to use when the action is activated
         */
        install_action(action_name: string, parameter_type: string | null, activate: ActionActivateFunc): void;
        /**
         * Installs an action called `action_name` on `workbench_class` and
         * binds its state to the value of the `property_name` property.
         *
         * This function will perform a few santity checks on the property selected
         * via `property_name`. Namely, the property must exist, must be readable,
         * writable and must not be construct-only. There are also restrictions
         * on the type of the given property, it must be boolean, int, unsigned int,
         * double or string. If any of these conditions are not met, a critical
         * warning will be printed and no action will be added.
         *
         * The state type of the action matches the property type.
         *
         * If the property is boolean, the action will have no parameter and
         * toggle the property value. Otherwise, the action will have a parameter
         * of the same type as the property.
         * @param action_name name of the action
         * @param property_name name of the property in instances of @workbench_class   or any parent class.
         */
        install_property_action(action_name: string, property_name: string): void;
    }

    class WorkspaceClass {
        // Owm methods of Panel-1.WorkspaceClass

        /**
         * This should be called at class initialization time to specify
         * actions to be added for all instances of this class.
         *
         * Actions installed by this function are stateless. The only state
         * they have is whether they are enabled or not.
         * @param action_name a prefixed action name, such as "project.open"
         * @param parameter_type the parameter type
         * @param activate callback to use when the action is activated
         */
        install_action(action_name: string, parameter_type: string | null, activate: ActionActivateFunc): void;
        /**
         * Installs an action called `action_name` on `workspace_class` and
         * binds its state to the value of the `property_name` property.
         *
         * This function will perform a few santity checks on the property selected
         * via `property_name`. Namely, the property must exist, must be readable,
         * writable and must not be construct-only. There are also restrictions
         * on the type of the given property, it must be boolean, int, unsigned int,
         * double or string. If any of these conditions are not met, a critical
         * warning will be printed and no action will be added.
         *
         * The state type of the action matches the property type.
         *
         * If the property is boolean, the action will have no parameter and
         * toggle the property value. Otherwise, the action will have a parameter
         * of the same type as the property.
         * @param action_name name of the action
         * @param property_name name of the property in instances of @workspace_class   or any parent class.
         */
        install_property_action(action_name: string, property_name: string): void;
    }

    interface FrameHeader {
        // Own properties of Panel-1.FrameHeader

        /**
         * The frame the header is attached to, or %NULL.
         */
        frame: Frame;

        // Owm methods of Panel-1.FrameHeader

        /**
         * Add a widget into a the prefix area with a priority. The highest
         * the priority the closest to the start.
         * @param priority the priority
         * @param child a #GtkWidget
         */
        add_prefix(priority: number, child: Gtk.Widget): void;
        /**
         * Add a widget into a the suffix area with a priority. The highest
         * the priority the closest to the start.
         * @param priority the priority
         * @param child a #GtkWidget
         */
        add_suffix(priority: number, child: Gtk.Widget): void;
        /**
         * Tells if the panel widget can be drop onto the panel frame.
         * @param widget a #PanelWidget
         * @returns whether the widget can be dropped.
         */
        can_drop(widget: Widget): boolean;
        /**
         * Gets the frame the header is attached to.
         * @returns a #PanelFrame or %NULL
         */
        get_frame(): Frame | null;
        /**
         * Notifies the header that the visible page has changed.
         * @param widget a #PanelWidget or %NULL if no page is visible
         */
        page_changed(widget?: Widget | null): void;
        /**
         * Sets the frame the header is attached to.
         * @param frame a #PanelFrame or %NULL
         */
        set_frame(frame?: Frame | null): void;

        // Own virtual methods of Panel-1.FrameHeader

        /**
         * Add a widget into a the prefix area with a priority. The highest
         * the priority the closest to the start.
         * @param priority the priority
         * @param child a #GtkWidget
         */
        vfunc_add_prefix(priority: number, child: Gtk.Widget): void;
        /**
         * Add a widget into a the suffix area with a priority. The highest
         * the priority the closest to the start.
         * @param priority the priority
         * @param child a #GtkWidget
         */
        vfunc_add_suffix(priority: number, child: Gtk.Widget): void;
        /**
         * Tells if the panel widget can be drop onto the panel frame.
         * @param widget a #PanelWidget
         */
        vfunc_can_drop(widget: Widget): boolean;
        /**
         * Notifies the header that the visible page has changed.
         * @param widget a #PanelWidget or %NULL if no page is visible
         */
        vfunc_page_changed(widget?: Widget | null): void;
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

export default Panel;
// END
