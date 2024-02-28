/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gd-1.0-ambient.d.ts';
import './gd-1.0-import.d.ts';
/**
 * Gd-1.0
 */

import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from '@girs/cairo-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Atk from '@girs/atk-1.0';

export namespace Gd {
    enum MainColumns {
        ID,
        URI,
        PRIMARY_TEXT,
        SECONDARY_TEXT,
        ICON,
        MTIME,
        SELECTED,
        PULSE,
        LAST,
    }
    enum MainViewType {
        ICON,
        LIST,
    }
    enum StackTransitionType {
        NONE,
        CROSSFADE,
        SLIDE_RIGHT,
        SLIDE_LEFT,
    }
    /**
     * This functions must be called during initialization
     * to make sure the widget types are available to GtkBuilder.
     */
    function ensure_types(): void;
    module HeaderBar {
        // Constructor properties interface
    }

    class HeaderBar extends Gtk.Container {
        // Own properties of Gd-1.0.HeaderBar

        custom_title: Gtk.Widget;
        customTitle: Gtk.Widget;
        hpadding: number;
        spacing: number;
        subtitle: string;
        title: string;
        vpadding: number;

        // Own fields of Gd-1.0.HeaderBar

        container: Gtk.Container;

        // Constructors of Gd-1.0.HeaderBar

        static ['new'](): HeaderBar;

        // Owm methods of Gd-1.0.HeaderBar

        /**
         * Retrieves the custom title widget of the header. See
         * gd_header_bar_set_custom_title().
         * @returns the custom title widget of the header, or %NULL if    none has been set explicitely.
         */
        get_custom_title(): Gtk.Widget;
        /**
         * Retrieves the subtitle of the header. See gd_header_bar_set_subtitle().
         * @returns the subtitle of the header, or %NULL if none has    been set explicitely. The returned string is owned by the widget    and must not be modified or freed.
         */
        get_subtitle(): string;
        /**
         * Retrieves the title of the header. See gd_header_bar_set_title().
         * @returns the title of the header, or %NULL if none has    been set explicitely. The returned string is owned by the widget    and must not be modified or freed.
         */
        get_title(): string;
        pack_end(child: Gtk.Widget): void;
        pack_start(child: Gtk.Widget): void;
        /**
         * Sets a custom title for the #GdHeaderBar. The title should help a
         * user identify the current view. This supercedes any title set by
         * gd_header_bar_set_title(). You should set the custom title to %NULL,
         * for the header title label to be visible again.
         * @param title_widget a custom widget to use for a title
         */
        set_custom_title(title_widget?: Gtk.Widget | null): void;
        /**
         * Sets the subtitle of the #GdHeaderBar. The subtitle should give a user
         * an additional detail to help him identify the current view.
         * @param subtitle a subtitle
         */
        set_subtitle(subtitle?: string | null): void;
        /**
         * Sets the title of the #GdHeaderBar. The title should help a user
         * identify the current view. A good title should not include the
         * application name.
         * @param title a title
         */
        set_title(title?: string | null): void;
    }

    module HeaderMenuButton {
        // Constructor properties interface
    }

    class HeaderMenuButton extends Gtk.MenuButton {
        // Constructors of Gd-1.0.HeaderMenuButton

        static ['new'](): HeaderMenuButton;
    }

    module HeaderRadioButton {
        // Constructor properties interface
    }

    class HeaderRadioButton extends Gtk.RadioButton {
        // Constructors of Gd-1.0.HeaderRadioButton

        static ['new'](): HeaderRadioButton;
    }

    module HeaderSimpleButton {
        // Constructor properties interface
    }

    class HeaderSimpleButton extends Gtk.Button {
        // Constructors of Gd-1.0.HeaderSimpleButton

        static ['new'](): HeaderSimpleButton;
    }

    module HeaderToggleButton {
        // Constructor properties interface
    }

    class HeaderToggleButton extends Gtk.ToggleButton {
        // Constructors of Gd-1.0.HeaderToggleButton

        static ['new'](): HeaderToggleButton;
    }

    module MainIconView {
        // Constructor properties interface
    }

    class MainIconView extends Gtk.IconView {
        // Constructors of Gd-1.0.MainIconView

        static ['new'](): MainIconView;
    }

    module MainListView {
        // Constructor properties interface
    }

    class MainListView extends Gtk.TreeView {
        // Constructors of Gd-1.0.MainListView

        static ['new'](): MainListView;

        // Owm methods of Gd-1.0.MainListView

        add_renderer(renderer: Gtk.CellRenderer, func: Gtk.TreeCellDataFunc): void;
    }

    module MainToolbar {
        // Constructor properties interface
    }

    class MainToolbar extends Gtk.Toolbar {
        // Own properties of Gd-1.0.MainToolbar

        show_modes: boolean;
        showModes: boolean;

        // Constructors of Gd-1.0.MainToolbar

        static ['new'](): MainToolbar;

        // Owm methods of Gd-1.0.MainToolbar

        add_button(icon_name: string | null, label: string | null, pack_start: boolean): Gtk.Widget;
        add_menu(icon_name: string | null, label: string | null, pack_start: boolean): Gtk.Widget;
        add_mode(label: string): Gtk.Widget;
        add_toggle(icon_name: string | null, label: string | null, pack_start: boolean): Gtk.Widget;
        add_widget(widget: Gtk.Widget, pack_start: boolean): void;
        clear(): void;
        get_show_modes(): boolean;
        set_labels(primary?: string | null, detail?: string | null): void;
        set_labels_menu(menu?: Gio.MenuModel | null): void;
        set_show_modes(show_modes: boolean): void;
    }

    module MainView {
        // Signal callback interfaces

        interface ItemActivated {
            (object: string, p0: Gtk.TreePath): void;
        }

        interface SelectionModeRequest {
            (): void;
        }

        interface ViewSelectionChanged {
            (): void;
        }

        // Constructor properties interface
    }

    class MainView extends Gtk.ScrolledWindow {
        // Own properties of Gd-1.0.MainView

        model: Gtk.TreeModel;
        selection_mode: boolean;
        selectionMode: boolean;
        view_type: number;
        viewType: number;

        // Constructors of Gd-1.0.MainView

        static ['new'](type: MainViewType): MainView;

        // Owm methods of Gd-1.0.MainView

        get_generic_view(): Gtk.Widget;
        get_model(): Gtk.TreeModel;
        get_selection(): Gtk.TreePath[];
        get_selection_mode(): boolean;
        get_view_type(): MainViewType;
        select_all(): void;
        set_model(model?: Gtk.TreeModel | null): void;
        set_selection_mode(selection_mode: boolean): void;
        set_view_type(type: MainViewType): void;
        unselect_all(): void;
    }

    module Revealer {
        // Constructor properties interface
    }

    class Revealer extends Gtk.Bin {
        // Own properties of Gd-1.0.Revealer

        readonly child_revealed: boolean;
        readonly childRevealed: boolean;
        orientation: Gtk.Orientation;
        reveal_child: boolean;
        revealChild: boolean;
        transition_duration: number;
        transitionDuration: number;

        // Constructors of Gd-1.0.Revealer

        static ['new'](): Revealer;

        // Owm methods of Gd-1.0.Revealer

        get_child_revealed(): boolean;
        get_orientation(): Gtk.Orientation;
        get_reveal_child(): boolean;
        get_transition_duration(): number;
        set_orientation(value: Gtk.Orientation): void;
        set_reveal_child(setting: boolean): void;
        set_transition_duration(duration_msec: number): void;
    }

    module Stack {
        // Constructor properties interface
    }

    class Stack extends Gtk.Container {
        // Own properties of Gd-1.0.Stack

        homogeneous: boolean;
        transition_duration: number;
        transitionDuration: number;
        transition_type: number;
        transitionType: number;
        visible_child: Gtk.Widget;
        visibleChild: Gtk.Widget;
        visible_child_name: string;
        visibleChildName: string;

        // Constructors of Gd-1.0.Stack

        static ['new'](): Stack;

        // Owm methods of Gd-1.0.Stack

        add_named(child: Gtk.Widget, name: string): void;
        add_titled(child: Gtk.Widget, name: string, title: string): void;
        get_homogeneous(): boolean;
        get_transition_duration(): number;
        get_transition_type(): StackTransitionType;
        /**
         * Gets the currently visible child of the #GdStack, or %NULL if the
         * there are no visible children. The returned widget does not have a reference
         * added, so you do not need to unref it.
         * @returns pointer to child of the #GdStack
         */
        get_visible_child(): Gtk.Widget;
        get_visible_child_name(): string;
        set_homogeneous(homogeneous: boolean): void;
        set_transition_duration(transition_duration: number): void;
        set_transition_type(type: StackTransitionType): void;
        set_visible_child(child: Gtk.Widget): void;
        set_visible_child_name(name: string): void;
    }

    module StackSwitcher {
        // Constructor properties interface
    }

    class StackSwitcher extends Gtk.Box {
        // Own properties of Gd-1.0.StackSwitcher

        stack: Stack;

        // Own fields of Gd-1.0.StackSwitcher

        widget: Gtk.Box;

        // Constructors of Gd-1.0.StackSwitcher

        static ['new'](): StackSwitcher;

        // Owm methods of Gd-1.0.StackSwitcher

        /**
         * Retrieves the stack. See
         * gd_stack_switcher_set_stack().
         * @returns the stack, or %NULL if    none has been set explicitly.
         */
        get_stack(): Stack;
        /**
         * Sets the stack to control.
         * @param stack a #GdStack
         */
        set_stack(stack?: Stack | null): void;
    }

    module StyledTextRenderer {
        // Constructor properties interface
    }

    class StyledTextRenderer extends Gtk.CellRendererText {
        // Constructors of Gd-1.0.StyledTextRenderer

        static ['new'](): StyledTextRenderer;

        // Owm methods of Gd-1.0.StyledTextRenderer

        add_class(_class: string): void;
        remove_class(_class: string): void;
    }

    module TaggedEntry {
        // Signal callback interfaces

        interface TagButtonClicked {
            (object: TaggedEntryTag): void;
        }

        interface TagClicked {
            (object: TaggedEntryTag): void;
        }

        // Constructor properties interface
    }

    class TaggedEntry extends Gtk.SearchEntry {
        // Own properties of Gd-1.0.TaggedEntry

        tag_close_visible: boolean;
        tagCloseVisible: boolean;

        // Constructors of Gd-1.0.TaggedEntry

        static ['new'](): TaggedEntry;

        // Owm methods of Gd-1.0.TaggedEntry

        add_tag(tag: TaggedEntryTag): boolean;
        get_tag_button_visible(): boolean;
        insert_tag(tag: TaggedEntryTag, position: number): boolean;
        remove_tag(tag: TaggedEntryTag): boolean;
        set_tag_button_visible(visible: boolean): void;
    }

    module TaggedEntryTag {
        // Constructor properties interface
    }

    class TaggedEntryTag extends GObject.Object {
        // Own properties of Gd-1.0.TaggedEntryTag

        has_close_button: boolean;
        hasCloseButton: boolean;
        label: string;
        style: string;

        // Constructors of Gd-1.0.TaggedEntryTag

        static ['new'](label: string): TaggedEntryTag;

        // Owm methods of Gd-1.0.TaggedEntryTag

        get_area(rect: cairo.RectangleInt): boolean;
        get_has_close_button(): boolean;
        get_label(): string;
        get_style(): string;
        set_has_close_button(has_close_button: boolean): void;
        set_label(label: string): void;
        set_style(style: string): void;
    }

    module TogglePixbufRenderer {
        // Constructor properties interface
    }

    class TogglePixbufRenderer extends Gtk.CellRendererPixbuf {
        // Own properties of Gd-1.0.TogglePixbufRenderer

        active: boolean;
        pulse: number;
        toggle_visible: boolean;
        toggleVisible: boolean;

        // Constructors of Gd-1.0.TogglePixbufRenderer

        static ['new'](): TogglePixbufRenderer;
    }

    module TwoLinesRenderer {
        // Constructor properties interface
    }

    class TwoLinesRenderer extends Gtk.CellRendererText {
        // Own properties of Gd-1.0.TwoLinesRenderer

        line_two: string;
        lineTwo: string;
        text_lines: number;
        textLines: number;

        // Constructors of Gd-1.0.TwoLinesRenderer

        static ['new'](): TwoLinesRenderer;
    }

    class HeaderBarClass {}

    class HeaderBarPrivate {}

    class MainIconViewClass {}

    class MainIconViewPrivate {}

    class MainListViewClass {}

    class MainListViewPrivate {}

    class MainToolbarClass {}

    class MainToolbarPrivate {}

    class MainViewClass {}

    class MainViewGenericIface {}

    class MainViewPrivate {}

    class RevealerClass {}

    class RevealerPrivate {}

    class StackClass {}

    class StackPrivate {}

    class StackSwitcherClass {}

    class StackSwitcherPrivate {}

    class StyledTextRendererClass {}

    class StyledTextRendererPrivate {}

    class TaggedEntryClass {}

    class TaggedEntryPrivate {}

    class TaggedEntryTagClass {}

    class TaggedEntryTagPrivate {}

    class TogglePixbufRendererClass {}

    class TogglePixbufRendererPrivate {}

    class TwoLinesRendererClass {}

    class TwoLinesRendererPrivate {}

    interface HeaderButton {
        // Own properties of Gd-1.0.HeaderButton

        /**
         * The label of the #GdHeaderButton object.
         */
        label: string;
        /**
         * The symbolic icon name of the #GdHeaderButton object.
         */
        symbolic_icon_name: string;
        /**
         * The symbolic icon name of the #GdHeaderButton object.
         */
        symbolicIconName: string;
        /**
         * Whether the label of the #GdHeaderButton object should use markup.
         */
        use_markup: boolean;
        /**
         * Whether the label of the #GdHeaderButton object should use markup.
         */
        useMarkup: boolean;

        // Owm methods of Gd-1.0.HeaderButton

        get_label(): string;
        get_symbolic_icon_name(): string;
        get_use_markup(): boolean;
        set_label(label?: string | null): void;
        set_symbolic_icon_name(symbolic_icon_name?: string | null): void;
        set_use_markup(use_markup: boolean): void;
    }

    interface MainViewGeneric {
        // Owm methods of Gd-1.0.MainViewGeneric

        get_model(): Gtk.TreeModel;
        get_path_at_pos(x: number, y: number): Gtk.TreePath;
        scroll_to_path(path: Gtk.TreePath): void;
        select_all(): void;
        set_model(model?: Gtk.TreeModel | null): void;
        set_rubberband_range(start: Gtk.TreePath, end: Gtk.TreePath): void;
        set_selection_mode(selection_mode: boolean): void;
        unselect_all(): void;

        // Own virtual methods of Gd-1.0.MainViewGeneric

        vfunc_get_model(): Gtk.TreeModel;
        vfunc_get_path_at_pos(x: number, y: number): Gtk.TreePath;
        vfunc_scroll_to_path(path: Gtk.TreePath): void;
        vfunc_set_model(model?: Gtk.TreeModel | null): void;
        vfunc_set_selection_mode(selection_mode: boolean): void;
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

export default Gd;
// END
