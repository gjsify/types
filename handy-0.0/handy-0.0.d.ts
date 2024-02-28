/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './handy-0.0-ambient.d.ts';
import './handy-0.0-import.d.ts';
/**
 * Handy-0.0
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

export namespace Handy {
    enum ArrowsDirection {
        /**
         * Arrows point upwards
         */
        UP,
        /**
         * Arrows point to the left
         */
        DOWN,
        /**
         * Arrows point to the right
         */
        LEFT,
        /**
         * Arrows point downwards
         */
        RIGHT,
    }
    enum CenteringPolicy {
        /**
         * Keep the title centered when possible
         */
        LOOSE,
        /**
         * Keep the title centered at all cost
         */
        STRICT,
    }
    /**
     * Represents the fold of widgets and other objects which can be switched
     * between folded and unfolded state on the fly, like HdyLeaflet.
     */
    enum Fold {
        /**
         * The element isn't folded
         */
        UNFOLDED,
        /**
         * The element is folded
         */
        FOLDED,
    }
    /**
     * These enumeration values describe the possible transitions between pages in a
     * #HdyLeaflet widget.
     */
    enum LeafletChildTransitionType {
        /**
         * No transition
         */
        NONE,
        /**
         * A cross-fade
         */
        CROSSFADE,
        /**
         * Slide from left, right, up or down according to the orientation, text direction and the children order
         */
        SLIDE,
        /**
         * Cover the old page or uncover the new page, sliding from or towards the end according to orientation, text direction and children order
         */
        OVER,
        /**
         * Uncover the new page or cover the old page, sliding from or towards the start according to orientation, text direction and children order
         */
        UNDER,
    }
    /**
     * These enumeration values describe the possible transitions between pages in a
     * #HdyLeaflet widget.
     */
    enum LeafletModeTransitionType {
        /**
         * No transition
         */
        NONE,
        /**
         * Slide from left, right, up or down according to the orientation, text direction and the children order
         */
        SLIDE,
    }
    /**
     * This enumeration value describes the possible transitions between modes and
     * children in a #HdyLeaflet widget.
     *
     * New values may be added to this enumeration over time.
     */
    enum LeafletTransitionType {
        /**
         * No transition
         */
        NONE,
        /**
         * Slide from left, right, up or down according to the orientation, text direction and the children order
         */
        SLIDE,
        /**
         * Cover the old page or uncover the new page, sliding from or towards the end according to orientation, text direction and children order
         */
        OVER,
        /**
         * Uncover the new page or cover the old page, sliding from or towards the start according to orientation, text direction and children order
         */
        UNDER,
    }
    /**
     * These enumeration values describe the possible page indicator styles in a
     * #HdyPaginator widget.
     *
     * New values may be added to this enumeration over time.
     */
    enum PaginatorIndicatorStyle {
        /**
         * No indicators
         */
        NONE,
        /**
         * Each page is represented by a dot. Active dot gradually becomes larger and more opaque.
         */
        DOTS,
        /**
         * Each page is represented by a thin and long line, and active view is shown with another line that moves between them
         */
        LINES,
    }
    /**
     * These enumeration values describe the possible transitions between children
     * in a #HdySqueezer widget.
     */
    enum SqueezerTransitionType {
        /**
         * No transition
         */
        NONE,
        /**
         * A cross-fade
         */
        CROSSFADE,
    }
    enum ViewSwitcherPolicy {
        /**
         * Automatically adapt to the best fitting mode
         */
        AUTO,
        /**
         * Force the narrow mode
         */
        NARROW,
        /**
         * Force the wide mode
         */
        WIDE,
    }
    /**
     * Computes the ease out for `t`.
     * @param t the term
     * @returns the ease out for @t.
     */
    function ease_out_cubic(t: number): number;
    /**
     * This is a default implementation of #HdyComboRowGetEnumValueNameFunc to be
     * used with hdy_combo_row_set_for_enum(). If the enumeration has a nickname, it
     * will return it, otherwise it will return its name.
     * @param value the value from the enum from which to get a name
     * @param user_data unused user data
     * @returns a newly allocated displayable name that represents @value
     */
    function enum_value_row_name(value: EnumValueObject, user_data?: any | null): string;
    /**
     * Returns whether animations are enabled for that widget. This should be used
     * when implementing an animated widget to know whether to animate it or not.
     * @param widget a #GtkWidget
     * @returns %TRUE if animations are enabled for @widget.
     */
    function get_enable_animations(widget: Gtk.Widget): boolean;
    /**
     * Call this function before using any other Handy functions in your
     * GUI applications. If libhandy has already been initialized, the function will
     * simply return without processing the new arguments.
     * @param argv Address of the <parameter>argv</parameter> parameter of main(), or %NULL.     Any options understood by Handy are stripped before return.
     * @returns %TRUE if initialization was successful, %FALSE otherwise.
     */
    function init(argv?: string[] | null): boolean;
    /**
     * Separates rows by using #GtkSeparator as headers. The first row doesn't have
     * a separator as there is no row above it.
     * @param row the row to update
     * @param before the row before @row, or %NULL if it is first
     * @param unused_user_data unused user data
     */
    function list_box_separator_header(
        row: Gtk.ListBoxRow,
        before?: Gtk.ListBoxRow | null,
        unused_user_data?: any | null,
    ): void;
    /**
     * Computes the length of the string in utf-8 characters. See #g_utf8_strlen.
     * @param string a #GString
     * @returns the length of @string in characters
     */
    function string_utf8_len(string: GLib.String): number;
    /**
     * Cut of the end of the string `string` so that `len` utf8 characters remain.
     * @param string a #GString
     * @param len the new size of the string
     * @returns @string
     */
    function string_utf8_truncate(string: GLib.String, len: number): GLib.String;
    interface ComboRowGetEnumValueNameFunc {
        (value: EnumValueObject): string;
    }
    interface ComboRowGetNameFunc<A = GObject.Object> {
        (item: A): string;
    }
    module ActionRow {
        // Constructor properties interface
    }

    class ActionRow extends PreferencesRow {
        // Own properties of Handy-0.0.ActionRow

        /**
         * The activatable widget for this row.
         */
        activatable_widget: Gtk.Widget;
        /**
         * The activatable widget for this row.
         */
        activatableWidget: Gtk.Widget;
        /**
         * The icon name for this row.
         */
        icon_name: string;
        /**
         * The icon name for this row.
         */
        iconName: string;
        /**
         * The subtitle for this row.
         */
        subtitle: string;
        /**
         * The title for this row.
         */
        title: string;
        /**
         * Whether an embedded underline in the text of the title and subtitle labels
         * indicates a mnemonic.
         */
        use_underline: boolean;
        /**
         * Whether an embedded underline in the text of the title and subtitle labels
         * indicates a mnemonic.
         */
        useUnderline: boolean;

        // Constructors of Handy-0.0.ActionRow

        static ['new'](): ActionRow;

        // Owm methods of Handy-0.0.ActionRow

        activate(): void;
        /**
         * Adds an action widget to `self`.
         * @param widget the action widget
         */
        add_action(widget?: Gtk.Widget | null): void;
        /**
         * Adds a prefix widget to `self`.
         * @param widget the prefix widget
         */
        add_prefix(widget?: Gtk.Widget | null): void;
        /**
         * Gets the widget activated when `self` is activated.
         * @returns the widget activated when @self is          activated, or %NULL if none has been set.
         */
        get_activatable_widget(): Gtk.Widget | null;
        /**
         * Gets the icon name for `self`.
         * @returns the icon name for @self.
         */
        get_icon_name(): string;
        /**
         * Gets the subtitle for `self`.
         * @returns the subtitle for @self.
         */
        get_subtitle(): string;
        /**
         * Gets the title for `self`.
         * @returns the title for @self.
         */
        get_title(): string;
        /**
         * Gets whether an embedded underline in the text of the title and subtitle
         * labels indicates a mnemonic. See hdy_action_row_set_use_underline().
         * @returns %TRUE if an embedded underline in the title and subtitle labels          indicates the mnemonic accelerator keys.
         */
        get_use_underline(): boolean;
        /**
         * Sets the widget to activate when `self` is activated, either by clicking
         * on it, by calling hdy_action_row_activate(), or via mnemonics in the title or
         * the subtitle. See the “use_underline” property to enable mnemonics.
         *
         * The target widget will be activated by emitting the
         * GtkWidget::mnemonic-activate signal on it.
         * @param widget the target #GtkWidget, or %NULL to unset
         */
        set_activatable_widget(widget?: Gtk.Widget | null): void;
        /**
         * Sets the icon name for `self`.
         * @param icon_name the icon name
         */
        set_icon_name(icon_name: string): void;
        /**
         * Sets the subtitle for `self`.
         * @param subtitle the subtitle
         */
        set_subtitle(subtitle: string): void;
        /**
         * Sets the title for `self`.
         * @param title the title
         */
        set_title(title: string): void;
        /**
         * If true, an underline in the text of the title and subtitle labels indicates
         * the next character should be used for the mnemonic accelerator key.
         * @param use_underline %TRUE if underlines in the text indicate mnemonics
         */
        set_use_underline(use_underline: boolean): void;
    }

    module Arrows {
        // Constructor properties interface
    }

    class Arrows extends Gtk.DrawingArea {
        // Own properties of Handy-0.0.Arrows

        count: number;
        direction: ArrowsDirection;
        duration: number;

        // Constructors of Handy-0.0.Arrows

        static ['new'](): Arrows;

        // Owm methods of Handy-0.0.Arrows

        /**
         * Render the arrows animation.
         */
        animate(): void;
        /**
         * Get the number of arrows displayed in the widget.
         * @returns the current number of arrows
         */
        get_count(): number;
        /**
         * Get the direction the arrows point to
         * @returns the arrows direction
         */
        get_direction(): ArrowsDirection;
        /**
         * Get the duration of the arrows animation.
         * @returns the duration of the animation in ms
         */
        get_duration(): number;
        /**
         * Set the number of arrows to display.
         * @param count the number of arrows to display
         */
        set_count(count: number): void;
        /**
         * Set the direction the arrows should point to.
         * @param direction the arrows direction
         */
        set_direction(direction: ArrowsDirection): void;
        /**
         * Set the duration of the arrow animation.
         * @param duration the duration of the animation in ms
         */
        set_duration(duration: number): void;
    }

    module Column {
        // Constructor properties interface
    }

    class Column extends Gtk.Bin {
        // Own properties of Handy-0.0.Column

        linear_growth_width: number;
        linearGrowthWidth: number;
        maximum_width: number;
        maximumWidth: number;

        // Constructors of Handy-0.0.Column

        static ['new'](): Column;

        // Owm methods of Handy-0.0.Column

        /**
         * Gets the width up to which the child will be allocated all the available
         * width and starting from which it will be allocated a portion of the available
         * width. In bith cases the allocated width won't exceed the declared maximum.
         * @returns the width up to which the child will be allocated all the available width.
         */
        get_linear_growth_width(): number;
        /**
         * Gets the maximum width to allocate to the contained child.
         * @returns the maximum width to allocate to the contained child.
         */
        get_maximum_width(): number;
        /**
         * Sets the width up to which the child will be allocated all the available
         * width and starting from which it will be allocated a portion of the available
         * width. In bith cases the allocated width won't exceed the declared maximum.
         * @param linear_growth_width the linear growth width
         */
        set_linear_growth_width(linear_growth_width: number): void;
        /**
         * Sets the maximum width to allocate to the contained child.
         * @param maximum_width the maximum width
         */
        set_maximum_width(maximum_width: number): void;
    }

    module ComboRow {
        // Constructor properties interface
    }

    class ComboRow extends ActionRow {
        // Own properties of Handy-0.0.ComboRow

        /**
         * The index of the selected item in its #GListModel.
         */
        selected_index: number;
        /**
         * The index of the selected item in its #GListModel.
         */
        selectedIndex: number;
        /**
         * %TRUE to set the current value as the subtitle.
         *
         * If you use a custom widget creation function, you will need to give `self`
         * a name conversion closure with hdy_combo_row_set_get_name_func().
         *
         * If %TRUE, you should not access HdyActionRow:subtitle.
         */
        use_subtitle: boolean;
        /**
         * %TRUE to set the current value as the subtitle.
         *
         * If you use a custom widget creation function, you will need to give `self`
         * a name conversion closure with hdy_combo_row_set_get_name_func().
         *
         * If %TRUE, you should not access HdyActionRow:subtitle.
         */
        useSubtitle: boolean;

        // Constructors of Handy-0.0.ComboRow

        static ['new'](): ComboRow;

        // Owm methods of Handy-0.0.ComboRow

        /**
         * Binds `model` to `self`.
         *
         * If `self` was already bound to a model, that previous binding is destroyed.
         *
         * The contents of `self` are cleared and then filled with widgets that represent
         * items from `model`. `self` is updated whenever `model` changes. If `model` is
         * %NULL, `self` is left empty.
         * @param model the #GListModel to be bound to @self
         * @param create_list_widget_func a function that creates   widgets for items to display in the list, or %NULL in case you also passed   %NULL as @model
         * @param create_current_widget_func a function that creates   widgets for items to display as the seleted item, or %NULL in case you also   passed %NULL as @model
         */
        bind_model(
            model?: Gio.ListModel | null,
            create_list_widget_func?: Gtk.ListBoxCreateWidgetFunc | null,
            create_current_widget_func?: Gtk.ListBoxCreateWidgetFunc | null,
        ): void;
        /**
         * Binds `model` to `self`.
         *
         * If `self` was already bound to a model, that previous binding is destroyed.
         *
         * The contents of `self` are cleared and then filled with widgets that represent
         * items from `model`. `self` is updated whenever `model` changes. If `model` is
         * %NULL, `self` is left empty.
         *
         * This is more conventient to use than hdy_combo_row_bind_model() if you want
         * to represent items of the model with names.
         * @param model the #GListModel to be bound to @self
         * @param get_name_func a function that creates names for items, or %NULL   in case you also passed %NULL as @model
         */
        bind_name_model(model?: Gio.ListModel | null, get_name_func?: ComboRowGetNameFunc | null): void;
        /**
         * Gets the model bound to `self,` or %NULL if none is bound.
         * @returns the #GListModel bound to @self or %NULL
         */
        get_model(): Gio.ListModel | null;
        /**
         * Gets the index of the selected item in its #GListModel.
         * @returns the index of the selected item, or -1 if no item is selected
         */
        get_selected_index(): number;
        /**
         * Gets whether the current value of `self` should be displayed as its subtitle.
         * @returns whether the current value of @self should be displayed as its subtitle
         */
        get_use_subtitle(): boolean;
        /**
         * Creates a model for `enum_type` and binds it to `self`. The items of the model
         * will be #HdyEnumValueObject objects.
         *
         * If `self` was already bound to a model, that previous binding is destroyed.
         *
         * The contents of `self` are cleared and then filled with widgets that represent
         * items from `model`. `self` is updated whenever `model` changes. If `model` is
         * %NULL, `self` is left empty.
         *
         * This is more conventient to use than hdy_combo_row_bind_name_model() if you
         * want to represent values of an enumeration with names.
         *
         * See hdy_enum_value_row_name().
         * @param enum_type the enumeration #GType to be bound to @self
         * @param get_name_func a function that creates names for items, or %NULL   in case you also passed %NULL as @model
         */
        set_for_enum(enum_type: GObject.GType, get_name_func?: ComboRowGetEnumValueNameFunc | null): void;
        /**
         * Sets a closure to convert items into names. See HdyComboRow:use-subtitle.
         * @param get_name_func a function that creates names for items, or %NULL   in case you also passed %NULL as @model
         */
        set_get_name_func(get_name_func?: ComboRowGetNameFunc | null): void;
        /**
         * Sets the index of the selected item in its #GListModel.
         * @param selected_index the index of the selected item
         */
        set_selected_index(selected_index: number): void;
        /**
         * Sets whether the current value of `self` should be displayed as its subtitle.
         *
         * If %TRUE, you should not access HdyActionRow:subtitle.
         * @param use_subtitle %TRUE to set the current value as the subtitle
         */
        set_use_subtitle(use_subtitle: boolean): void;
    }

    module Dialer {
        // Signal callback interfaces

        interface Deleted {
            (): void;
        }

        interface Submitted {
            (number: string): void;
        }

        interface SymbolClicked {
            (button: number): void;
        }

        // Constructor properties interface
    }

    class Dialer extends Gtk.Bin {
        // Own properties of Handy-0.0.Dialer

        column_spacing: number;
        columnSpacing: number;
        number: string;
        /**
         * The relief style of the edges of the main buttons.
         */
        relief: Gtk.ReliefStyle;
        row_spacing: number;
        rowSpacing: number;
        show_action_buttons: boolean;
        showActionButtons: boolean;

        // Constructors of Handy-0.0.Dialer

        static ['new'](): Dialer;

        // Owm methods of Handy-0.0.Dialer

        /**
         * Set the current number to the empty string. When the number is already
         * cleared no action is performed.
         */
        clear_number(): void;
        /**
         * Get the currently displayed number.
         * @returns the current number in the display
         */
        get_number(): string;
        /**
         * Returns the current relief style of the main buttons for the given
         * #HdyDialer.
         * @returns The current #GtkReliefStyle
         */
        get_relief(): Gtk.ReliefStyle;
        /**
         * Get whether the submit and delete buttons are to be shown.
         * @returns whether the buttons are to be shown
         */
        get_show_action_buttons(): boolean;
        /**
         * Set the currently displayed number.
         * @param number the number to set
         */
        set_number(number: string): void;
        /**
         * Sets the relief style of the edges of the main buttons for the given
         * #HdyDialer widget.
         * Two styles exist, %GTK_RELIEF_NORMAL and %GTK_RELIEF_NONE.
         * The default style is, as one can guess, %GTK_RELIEF_NORMAL.
         * @param relief The #GtkReliefStyle as described above
         */
        set_relief(relief: Gtk.ReliefStyle): void;
        /**
         * Set whether to show the submit and delete buttons.
         * @param show whether to show the buttons
         */
        set_show_action_buttons(show: boolean): void;
    }

    module DialerButton {
        // Constructor properties interface
    }

    class DialerButton extends Gtk.Button {
        // Own properties of Handy-0.0.DialerButton

        readonly digit: number;
        symbols: string;

        // Constructors of Handy-0.0.DialerButton

        static ['new'](symbols?: string | null): DialerButton;

        // Owm methods of Handy-0.0.DialerButton

        /**
         * Get the #HdyDialerButton's digit.
         * @returns the button's digit
         */
        get_digit(): number;
        /**
         * Get the #HdyDialerButton's symbols.
         * @returns the button's symbols.
         */
        get_symbols(): string;
    }

    module DialerCycleButton {
        // Signal callback interfaces

        interface CycleEnd {
            (): void;
        }

        interface CycleStart {
            (): void;
        }

        // Constructor properties interface
    }

    class DialerCycleButton extends DialerButton {
        // Own properties of Handy-0.0.DialerCycleButton

        cycle_timeout: number;
        cycleTimeout: number;

        // Constructors of Handy-0.0.DialerCycleButton

        static ['new'](symbols: string): DialerCycleButton;

        // Owm methods of Handy-0.0.DialerCycleButton

        /**
         * Get the symbol the dialer should display
         * @returns a pointer to the symbol
         */
        get_current_symbol(): number;
        /**
         * Get the cycle timeout in milliseconds.
         */
        get_cycle_timeout(): number;
        /**
         * Check whether the button is in cycling mode.
         * @returns #TRUE if the in cycling mode otherwise #FALSE
         */
        is_cycling(): boolean;
        /**
         * Set the cycle timeout in milliseconds.
         * @param timeout the timeout in milliseconds
         */
        set_cycle_timeout(timeout: number): void;
        /**
         * Stop the cycling mode.
         */
        stop_cycle(): void;
    }

    module Dialog {
        // Constructor properties interface
    }

    class Dialog extends Gtk.Dialog {
        // Own properties of Handy-0.0.Dialog

        /**
         * %TRUE if the dialog is narrow.
         */
        readonly narrow: boolean;

        // Constructors of Handy-0.0.Dialog

        static ['new'](parent: Gtk.Window): Dialog;

        // Owm methods of Handy-0.0.Dialog

        /**
         * Gets whether `self` is narrow.
         * @returns %TRUE if @self is narrow, %FALSE otherwise.
         */
        get_narrow(): boolean;
    }

    module EnumValueObject {
        // Constructor properties interface
    }

    class EnumValueObject extends GObject.Object {
        // Constructors of Handy-0.0.EnumValueObject

        static ['new'](enum_value: GObject.EnumValue): EnumValueObject;

        // Owm methods of Handy-0.0.EnumValueObject

        get_name(): string;
        get_nick(): string;
        get_value(): number;
    }

    module ExpanderRow {
        // Constructor properties interface
    }

    class ExpanderRow extends ActionRow {
        // Own properties of Handy-0.0.ExpanderRow

        /**
         * %TRUE if the expansion is enabled.
         */
        enable_expansion: boolean;
        /**
         * %TRUE if the expansion is enabled.
         */
        enableExpansion: boolean;
        /**
         * %TRUE if the row is expanded.
         */
        expanded: boolean;
        /**
         * %TRUE if the switch enabling the expansion is visible.
         */
        show_enable_switch: boolean;
        /**
         * %TRUE if the switch enabling the expansion is visible.
         */
        showEnableSwitch: boolean;

        // Constructors of Handy-0.0.ExpanderRow

        static ['new'](): ExpanderRow;

        // Owm methods of Handy-0.0.ExpanderRow

        /**
         * Gets whether the expansion of `self` is enabled.
         * @returns whether the expansion of @self is enabled.
         */
        get_enable_expansion(): boolean;
        get_expanded(): boolean;
        /**
         * Gets whether the switch enabling the expansion of `self` is visible.
         * @returns whether the switch enabling the expansion of @self is visible.
         */
        get_show_enable_switch(): boolean;
        /**
         * Sets whether the expansion of `self` is enabled.
         * @param enable_expansion %TRUE to enable the expansion
         */
        set_enable_expansion(enable_expansion: boolean): void;
        set_expanded(expanded: boolean): void;
        /**
         * Sets whether the switch enabling the expansion of `self` is visible.
         * @param show_enable_switch %TRUE to show the switch enabling the expansion
         */
        set_show_enable_switch(show_enable_switch: boolean): void;
    }

    module HeaderBar {
        // Constructor properties interface
    }

    class HeaderBar extends Gtk.Container {
        // Own properties of Handy-0.0.HeaderBar

        centering_policy: CenteringPolicy;
        centeringPolicy: CenteringPolicy;
        custom_title: Gtk.Widget;
        customTitle: Gtk.Widget;
        /**
         * The decoration layout for buttons. If this property is
         * not set, the #GtkSettings:gtk-decoration-layout setting
         * is used.
         *
         * See hdy_header_bar_set_decoration_layout() for information
         * about the format of this string.
         */
        decoration_layout: string;
        /**
         * The decoration layout for buttons. If this property is
         * not set, the #GtkSettings:gtk-decoration-layout setting
         * is used.
         *
         * See hdy_header_bar_set_decoration_layout() for information
         * about the format of this string.
         */
        decorationLayout: string;
        /**
         * Set to %TRUE if #HdyHeaderBar:decoration-layout is set.
         */
        decoration_layout_set: boolean;
        /**
         * Set to %TRUE if #HdyHeaderBar:decoration-layout is set.
         */
        decorationLayoutSet: boolean;
        /**
         * If %TRUE, reserve space for a subtitle, even if none
         * is currently set.
         */
        has_subtitle: boolean;
        /**
         * If %TRUE, reserve space for a subtitle, even if none
         * is currently set.
         */
        hasSubtitle: boolean;
        interpolate_size: boolean;
        interpolateSize: boolean;
        /**
         * Whether to show window decorations.
         *
         * Which buttons are actually shown and where is determined
         * by the #HdyHeaderBar:decoration-layout property, and by
         * the state of the window (e.g. a close button will not be
         * shown if the window can't be closed).
         */
        show_close_button: boolean;
        /**
         * Whether to show window decorations.
         *
         * Which buttons are actually shown and where is determined
         * by the #HdyHeaderBar:decoration-layout property, and by
         * the state of the window (e.g. a close button will not be
         * shown if the window can't be closed).
         */
        showCloseButton: boolean;
        spacing: number;
        subtitle: string;
        title: string;
        transition_duration: number;
        transitionDuration: number;
        readonly transition_running: boolean;
        readonly transitionRunning: boolean;

        // Constructors of Handy-0.0.HeaderBar

        static ['new'](): HeaderBar;

        // Owm methods of Handy-0.0.HeaderBar

        /**
         * Gets the policy `self` follows to horizontally align its center widget.
         * @returns the centering policy
         */
        get_centering_policy(): CenteringPolicy;
        /**
         * Retrieves the custom title widget of the header. See
         * hdy_header_bar_set_custom_title().
         * @returns the custom title widget    of the header, or %NULL if none has been set explicitly.
         */
        get_custom_title(): Gtk.Widget | null;
        /**
         * Gets the decoration layout set with
         * hdy_header_bar_set_decoration_layout().
         * @returns the decoration layout
         */
        get_decoration_layout(): string;
        /**
         * Retrieves whether the header bar reserves space for
         * a subtitle, regardless if one is currently set or not.
         * @returns %TRUE if the header bar reserves space     for a subtitle
         */
        get_has_subtitle(): boolean;
        /**
         * Gets wether `self` should interpolate its size on visible child change.
         *
         * See hdy_header_bar_set_interpolate_size().
         * @returns %TRUE if @self interpolates its size on visible child change, %FALSE if not
         */
        get_interpolate_size(): boolean;
        /**
         * Returns whether this header bar shows the standard window
         * decorations.
         * @returns %TRUE if the decorations are shown
         */
        get_show_close_button(): boolean;
        /**
         * Retrieves the subtitle of the header. See hdy_header_bar_set_subtitle().
         * @returns the subtitle of the header, or %NULL if none has    been set explicitly. The returned string is owned by the widget    and must not be modified or freed.
         */
        get_subtitle(): string | null;
        /**
         * Retrieves the title of the header. See hdy_header_bar_set_title().
         * @returns the title of the header, or %NULL if none has    been set explicitly. The returned string is owned by the widget    and must not be modified or freed.
         */
        get_title(): string | null;
        /**
         * Returns the amount of time (in milliseconds) that
         * transitions between pages in `self` will take.
         * @returns the transition duration
         */
        get_transition_duration(): number;
        /**
         * Returns whether the `self` is currently in a transition from one page to
         * another.
         * @returns %TRUE if the transition is currently running, %FALSE otherwise.
         */
        get_transition_running(): boolean;
        /**
         * Adds `child` to `self:`, packed with reference to the
         * end of the `self:`.
         * @param child the #GtkWidget to be added to @self:
         */
        pack_end(child: Gtk.Widget): void;
        /**
         * Adds `child` to `self:`, packed with reference to the
         * start of the `self:`.
         * @param child the #GtkWidget to be added to @self:
         */
        pack_start(child: Gtk.Widget): void;
        /**
         * Sets the policy `self` must follow to horizontally align its center widget.
         * @param centering_policy the centering policy
         */
        set_centering_policy(centering_policy: CenteringPolicy): void;
        /**
         * Sets a custom title for the #HdyHeaderBar.
         *
         * The title should help a user identify the current view. This
         * supersedes any title set by hdy_header_bar_set_title() or
         * hdy_header_bar_set_subtitle(). To achieve the same style as
         * the builtin title and subtitle, use the “title” and “subtitle”
         * style classes.
         *
         * You should set the custom title to %NULL, for the header title
         * label to be visible again.
         * @param title_widget a custom widget to use for a title
         */
        set_custom_title(title_widget?: Gtk.Widget | null): void;
        /**
         * Sets the decoration layout for this header bar, overriding
         * the #GtkSettings:gtk-decoration-layout setting.
         *
         * There can be valid reasons for overriding the setting, such
         * as a header bar design that does not allow for buttons to take
         * room on the right, or only offers room for a single close button.
         * Split header bars are another example for overriding the
         * setting.
         *
         * The format of the string is button names, separated by commas.
         * A colon separates the buttons that should appear on the left
         * from those on the right. Recognized button names are minimize,
         * maximize, close, icon (the window icon) and menu (a menu button
         * for the fallback app menu).
         *
         * For example, “menu:minimize,maximize,close” specifies a menu
         * on the left, and minimize, maximize and close buttons on the right.
         * @param layout a decoration layout, or %NULL to     unset the layout
         */
        set_decoration_layout(layout?: string | null): void;
        /**
         * Sets whether the header bar should reserve space
         * for a subtitle, even if none is currently set.
         * @param setting %TRUE to reserve space for a subtitle
         */
        set_has_subtitle(setting: boolean): void;
        /**
         * Sets whether or not `self` will interpolate the size of its opposing
         * orientation when changing the visible child. If %TRUE, `self` will interpolate
         * its size between the one of the previous visible child and the one of the new
         * visible child, according to the set transition duration and the orientation,
         * e.g. if `self` is horizontal, it will interpolate the its height.
         * @param interpolate_size %TRUE to interpolate the size
         */
        set_interpolate_size(interpolate_size: boolean): void;
        /**
         * Sets whether this header bar shows the standard window decorations,
         * including close, maximize, and minimize.
         * @param setting %TRUE to show standard window decorations
         */
        set_show_close_button(setting: boolean): void;
        /**
         * Sets the subtitle of the #HdyHeaderBar. The title should give a user
         * an additional detail to help him identify the current view.
         *
         * Note that HdyHeaderBar by default reserves room for the subtitle,
         * even if none is currently set. If this is not desired, set the
         * #HdyHeaderBar:has-subtitle property to %FALSE.
         * @param subtitle a subtitle, or %NULL
         */
        set_subtitle(subtitle?: string | null): void;
        /**
         * Sets the title of the #HdyHeaderBar. The title should help a user
         * identify the current view. A good title should not include the
         * application name.
         * @param title a title, or %NULL
         */
        set_title(title?: string | null): void;
        /**
         * Sets the duration that transitions between pages in `self`
         * will take.
         * @param duration the new duration, in milliseconds
         */
        set_transition_duration(duration: number): void;
    }

    module HeaderGroup {
        // Constructor properties interface
    }

    class HeaderGroup extends GObject.Object {
        // Own properties of Handy-0.0.HeaderGroup

        /**
         * The the currently focused header bar. If %NULL, the decoration will be
         * spread as if the header bars of the group were only one, otherwise the
         * focused header bar will be the only one to receive the decoration.
         */
        focus: Gtk.HeaderBar;

        // Constructors of Handy-0.0.HeaderGroup

        static ['new'](): HeaderGroup;

        // Owm methods of Handy-0.0.HeaderGroup

        /**
         * Adds a header bar to a #HdyHeaderGroup. The decoration layout of the
         * widgets will be edited depending on their position in the composite header
         * bar, the start widget displaying only the start of the user's decoration
         * layout and the end widget displaying only its end while widgets in the middle
         * won't display anything. A header bar can be set as having the focus to
         * display all the decorations. See gtk_header_bar_set_decoration_layout().
         *
         * When the widget is destroyed or no longer referenced elsewhere, it will
         * be removed from the header group.
         * @param header_bar the #GtkHeaderBar to add
         */
        add_header_bar(header_bar: Gtk.HeaderBar): void;
        get_focus(): Gtk.HeaderBar | null;
        /**
         * Returns the list of headerbars associated with `self`.
         * @returns a #GSList of   headerbars. The list is owned by libhandy and should not be modified.
         */
        get_header_bars(): Gtk.HeaderBar[];
        /**
         * Removes a widget from a #HdyHeaderGroup
         * @param header_bar the #GtkHeaderBar to remove
         */
        remove_header_bar(header_bar: Gtk.HeaderBar): void;
        /**
         * Sets the the currently focused header bar. If `header_bar` is %NULL, the
         * decoration will be spread as if the header bars of the group were only one,
         * otherwise `header_bar` will be the only one to receive the decoration.
         * @param header_bar a #GtkHeaderBar of @self, or %NULL
         */
        set_focus(header_bar?: Gtk.HeaderBar | null): void;
    }

    module Keypad {
        // Constructor properties interface
    }

    class Keypad extends Gtk.Grid {
        // Own properties of Handy-0.0.Keypad

        entry: Gtk.Widget;
        left_action: Gtk.Widget;
        leftAction: Gtk.Widget;
        only_digits: boolean;
        onlyDigits: boolean;
        right_action: Gtk.Widget;
        rightAction: Gtk.Widget;
        show_symbols: boolean;
        showSymbols: boolean;

        // Constructors of Handy-0.0.Keypad

        static ['new'](only_digits: boolean, show_symbols: boolean): Keypad;

        // Owm methods of Handy-0.0.Keypad

        /**
         * Get the connected entry. See hdy_keypad_set_entry () for details
         * @returns the set #GtkEntry or NULL if no widget was set
         */
        get_entry(): Gtk.Widget;
        /**
         * Binds a #GtkEntry to the keypad and it blocks every
         * input which wouldn't be possible to type with with the keypad
         * @param entry a #GtkEntry
         */
        set_entry(entry: Gtk.Entry): void;
        /**
         * Sets the widget for the left lower corner of #HdyKeypad replacing the existing widget, if NULL it just removes whatever widget is there
         * @param widget nullable: the widget which should be show in the left lower corner of #HdyKeypad
         */
        set_left_action(widget: Gtk.Widget): void;
        /**
         * Sets the widget for the right lower corner of #HdyKeypad replacing the existing widget, if NULL it just removes whatever widget is there
         * @param widget nullable: the widget which should be show in the right lower corner of #HdyKeypad
         */
        set_right_action(widget: Gtk.Widget): void;
    }

    module Leaflet {
        // Constructor properties interface
    }

    class Leaflet extends Gtk.Container {
        // Own properties of Handy-0.0.Leaflet

        /**
         * Whether or not `self` allows switching to the previous child that has
         * 'allow-visible' child property set to %TRUE via a swipe gesture.
         */
        can_swipe_back: boolean;
        /**
         * Whether or not `self` allows switching to the previous child that has
         * 'allow-visible' child property set to %TRUE via a swipe gesture.
         */
        canSwipeBack: boolean;
        /**
         * Whether or not `self` allows switching to the next child that has
         * 'allow-visible' child property set to %TRUE via a swipe gesture.
         */
        can_swipe_forward: boolean;
        /**
         * Whether or not `self` allows switching to the next child that has
         * 'allow-visible' child property set to %TRUE via a swipe gesture.
         */
        canSwipeForward: boolean;
        child_transition_duration: number;
        childTransitionDuration: number;
        readonly child_transition_running: boolean;
        readonly childTransitionRunning: boolean;
        /**
         * The type of animation used to transition between children
         */
        child_transition_type: LeafletChildTransitionType;
        /**
         * The type of animation used to transition between children
         */
        childTransitionType: LeafletChildTransitionType;
        /**
         * The fold of the leaflet.
         *
         * The leaflet will be folded if the size allocated to it is smaller than the
         * sum of the natural size of its children, it will be unfolded otherwise.
         *
         * See also: #HdyLeaflet:folded.
         */
        readonly fold: Fold;
        /**
         * %TRUE if the leaflet is folded.
         *
         * This is similar to the #HdyLeaflet:fold property but expressed as a
         * #gboolean rather than a #GEnum. This makes it convenient to bind the
         * #HdyLeaflet:fold of a leaflet to any other #gboolean property of other
         * #GObject's using #g_object_bind_property().
         */
        readonly folded: boolean;
        hhomogeneous_folded: boolean;
        hhomogeneousFolded: boolean;
        hhomogeneous_unfolded: boolean;
        hhomogeneousUnfolded: boolean;
        interpolate_size: boolean;
        interpolateSize: boolean;
        mode_transition_duration: number;
        modeTransitionDuration: number;
        /**
         * The type of animation used to transition between mode
         */
        mode_transition_type: LeafletModeTransitionType;
        /**
         * The type of animation used to transition between mode
         */
        modeTransitionType: LeafletModeTransitionType;
        /**
         * The type of animation that will be used for transitions between modes and
         * children.
         *
         * The transition type can be changed without problems at runtime, so it is
         * possible to change the animation based on the mode or child that is about
         * to become current.
         */
        transition_type: LeafletTransitionType;
        /**
         * The type of animation that will be used for transitions between modes and
         * children.
         *
         * The transition type can be changed without problems at runtime, so it is
         * possible to change the animation based on the mode or child that is about
         * to become current.
         */
        transitionType: LeafletTransitionType;
        vhomogeneous_folded: boolean;
        vhomogeneousFolded: boolean;
        vhomogeneous_unfolded: boolean;
        vhomogeneousUnfolded: boolean;
        visible_child: Gtk.Widget;
        visibleChild: Gtk.Widget;
        visible_child_name: string;
        visibleChildName: string;

        // Constructors of Handy-0.0.Leaflet

        static ['new'](): Leaflet;

        // Owm methods of Handy-0.0.Leaflet

        /**
         * Returns whether the #HdyLeaflet allows swiping to the previous child.
         * @returns %TRUE if back swipe is enabled.
         */
        get_can_swipe_back(): boolean;
        /**
         * Returns whether the #HdyLeaflet allows swiping to the next child.
         * @returns %TRUE if back swipe is enabled.
         */
        get_can_swipe_forward(): boolean;
        /**
         * Returns the amount of time (in milliseconds) that
         * transitions between children in `self` will take.
         * @returns the mode transition duration
         */
        get_child_transition_duration(): number;
        /**
         * Returns whether `self` is currently in a transition from one page to
         * another.
         * @returns %TRUE if the transition is currently running, %FALSE otherwise.
         */
        get_child_transition_running(): boolean;
        /**
         * Gets the type of animation that will be used
         * for transitions between children in `self`.
         * @returns the current mode transition type of @self
         */
        get_child_transition_type(): LeafletChildTransitionType;
        /**
         * Gets the fold of `self`.
         * @returns the fold of @self.
         */
        get_fold(): Fold;
        /**
         * Gets whether `self` is homogeneous for the given fold and orientation.
         * See hdy_leaflet_set_homogeneous().
         * @param fold the fold
         * @param orientation the orientation
         * @returns whether @self is homogeneous for the given fold and orientation.
         */
        get_homogeneous(fold: Fold, orientation: Gtk.Orientation): boolean;
        /**
         * Returns wether the #HdyLeaflet is set up to interpolate between
         * the sizes of children on page switch.
         * @returns %TRUE if child sizes are interpolated
         */
        get_interpolate_size(): boolean;
        /**
         * Returns the amount of time (in milliseconds) that
         * transitions between modes in `self` will take.
         * @returns the mode transition duration
         */
        get_mode_transition_duration(): number;
        /**
         * Gets the type of animation that will be used
         * for transitions between modes in `self`.
         * @returns the current mode transition type of @self
         */
        get_mode_transition_type(): LeafletModeTransitionType;
        /**
         * Gets the type of animation that will be used
         * for transitions between modes and children in `self`.
         * @returns the current transition type of @self
         */
        get_transition_type(): LeafletTransitionType;
        /**
         * Get the visible child widget.
         * @returns the visible child widget
         */
        get_visible_child(): Gtk.Widget;
        get_visible_child_name(): string;
        /**
         * Sets whether or not `self` allows switching to the previous child that has
         * 'allow-visible' child property set to %TRUE via a swipe gesture
         * @param can_swipe_back the new value
         */
        set_can_swipe_back(can_swipe_back: boolean): void;
        /**
         * Sets whether or not `self` allows switching to the next child that has
         * 'allow-visible' child property set to %TRUE via a swipe gesture.
         * @param can_swipe_forward the new value
         */
        set_can_swipe_forward(can_swipe_forward: boolean): void;
        /**
         * Sets the duration that transitions between children in `self`
         * will take.
         * @param duration the new duration, in milliseconds
         */
        set_child_transition_duration(duration: number): void;
        /**
         * Sets the type of animation that will be used for
         * transitions between children in `self`.
         *
         * The transition type can be changed without problems
         * at runtime, so it is possible to change the animation
         * based on the child that is about to become current.
         * @param transition the new transition type
         */
        set_child_transition_type(transition: LeafletChildTransitionType): void;
        /**
         * Sets the #HdyLeaflet to be homogeneous or not for the given fold and orientation.
         * If it is homogeneous, the #HdyLeaflet will request the same
         * width or height for all its children depending on the orientation.
         * If it isn't and it is folded, the leaflet may change width or height
         * when a different child becomes visible.
         * @param fold the fold
         * @param orientation the orientation
         * @param homogeneous %TRUE to make @self homogeneous
         */
        set_homogeneous(fold: Fold, orientation: Gtk.Orientation, homogeneous: boolean): void;
        /**
         * Sets whether or not `self` will interpolate its size when
         * changing the visible child. If the #HdyLeaflet:interpolate-size
         * property is set to %TRUE, `stack` will interpolate its size between
         * the current one and the one it'll take after changing the
         * visible child, according to the set transition duration.
         * @param interpolate_size the new value
         */
        set_interpolate_size(interpolate_size: boolean): void;
        /**
         * Sets the duration that transitions between modes in `self`
         * will take.
         * @param duration the new duration, in milliseconds
         */
        set_mode_transition_duration(duration: number): void;
        /**
         * Sets the type of animation that will be used for
         * transitions between modes in `self`.
         *
         * The transition type can be changed without problems
         * at runtime, so it is possible to change the animation
         * based on the mode that is about to become current.
         * @param transition the new transition type
         */
        set_mode_transition_type(transition: LeafletModeTransitionType): void;
        /**
         * Sets the type of animation that will be used for transitions between modes
         * and children in `self`.
         *
         * The transition type can be changed without problems at runtime, so it is
         * possible to change the animation based on the mode or child that is about to
         * become current.
         * @param transition the new transition type
         */
        set_transition_type(transition: LeafletTransitionType): void;
        set_visible_child(visible_child: Gtk.Widget): void;
        set_visible_child_name(name: string): void;
    }

    module Paginator {
        // Signal callback interfaces

        interface PageChanged {
            (index: number): void;
        }

        // Constructor properties interface
    }

    class Paginator extends Gtk.EventBox {
        // Own properties of Handy-0.0.Paginator

        /**
         * Sets whether the #HdyPaginator can be dragged with mouse pointer. If the
         * value is %FALSE, dragging is only available on touch.
         *
         * This should usually be %FALSE.
         */
        allow_mouse_drag: boolean;
        /**
         * Sets whether the #HdyPaginator can be dragged with mouse pointer. If the
         * value is %FALSE, dragging is only available on touch.
         *
         * This should usually be %FALSE.
         */
        allowMouseDrag: boolean;
        /**
         * Animation duration in milliseconds, used by hdy_paginator_scroll_to().
         */
        animation_duration: number;
        /**
         * Animation duration in milliseconds, used by hdy_paginator_scroll_to().
         */
        animationDuration: number;
        /**
         * Whether the #HdyPaginator is centering pages. If
         * #HdyPaginator:indicator-style is `HDY_PAGINATOR_INDICATOR_STYLE_NONE,`
         * centering does nothing, otherwise it adds whitespace to the left or above
         * the pages to compensate for the indicators.
         */
        center_content: boolean;
        /**
         * Whether the #HdyPaginator is centering pages. If
         * #HdyPaginator:indicator-style is `HDY_PAGINATOR_INDICATOR_STYLE_NONE,`
         * centering does nothing, otherwise it adds whitespace to the left or above
         * the pages to compensate for the indicators.
         */
        centerContent: boolean;
        /**
         * Spacing between content and page indicators. Does nothing if
         * #HdyPaginator:indicator-style is `HDY_PAGINATOR_INDICATOR_STYLE_NONE`.
         */
        indicator_spacing: number;
        /**
         * Spacing between content and page indicators. Does nothing if
         * #HdyPaginator:indicator-style is `HDY_PAGINATOR_INDICATOR_STYLE_NONE`.
         */
        indicatorSpacing: number;
        /**
         * The style of page indicators. Depending on orientation, they are displayed
         * below or besides the pages. If the pages are meant to be centered,
         * #HdyPaginator:center-content can be used to compensate for that.
         */
        indicator_style: PaginatorIndicatorStyle;
        /**
         * The style of page indicators. Depending on orientation, they are displayed
         * below or besides the pages. If the pages are meant to be centered,
         * #HdyPaginator:center-content can be used to compensate for that.
         */
        indicatorStyle: PaginatorIndicatorStyle;
        /**
         * Whether `self` can be navigated. This can be used to temporarily disable
         * a #HdyPaginator to only allow navigating it in a certain state.
         */
        interactive: boolean;
        /**
         * The number of pages in a #HdyPaginator
         */
        readonly n_pages: number;
        /**
         * The number of pages in a #HdyPaginator
         */
        readonly nPages: number;
        /**
         * Current scrolling position, unitless. 1 matches 1 page. Use
         * hdy_paginator_scroll_to() for changing it.
         */
        readonly position: number;
        /**
         * Spacing between pages in pixels.
         */
        spacing: number;

        // Constructors of Handy-0.0.Paginator

        static ['new'](): Paginator;

        // Owm methods of Handy-0.0.Paginator

        /**
         * Sets whether `self` can be dragged with mouse pointer
         * @returns %TRUE if @self can be dragged with mouse
         */
        get_allow_mouse_drag(): boolean;
        /**
         * Gets animation duration used by hdy_paginator_scroll_to().
         * @returns Animation duration in milliseconds
         */
        get_animation_duration(): number;
        /**
         * Sets whether `self` is centering pages.
         * @returns %TRUE if @self is centering pages
         */
        get_center_content(): boolean;
        /**
         * Gets spacing between content and page indicators.
         * @returns Spacing between content and indicators
         */
        get_indicator_spacing(): number;
        /**
         * Gets the current page indicator style.
         * @returns the current indicator style
         */
        get_indicator_style(): PaginatorIndicatorStyle;
        /**
         * Gets whether `self` can be navigated.
         * @returns %TRUE if @self can be swiped
         */
        get_interactive(): boolean;
        /**
         * Gets the number of pages in `self`.
         * @returns The number of pages in @self
         */
        get_n_pages(): number;
        /**
         * Gets current scroll position in `self`. It's unitless, 1 matches 1 page.
         * @returns The scroll position
         */
        get_position(): number;
        /**
         * Gets spacing between pages in pixels.
         * @returns Spacing between pages
         */
        get_spacing(): number;
        /**
         * Inserts `child` into `self` at position `position`.
         *
         * If position is -1, or larger than the number of pages,
         * `child` will be appended to the end.
         * @param child a widget to add
         * @param position the position to insert @child in.
         */
        insert(child: Gtk.Widget, position: number): void;
        /**
         * Prepends `child` to `self`
         * @param child a widget to add
         */
        prepend(child: Gtk.Widget): void;
        /**
         * Moves `child` into position `position`.
         *
         * If position is -1, or larger than the number of pages, `child` will be moved
         * to the end.
         * @param child a widget to add
         * @param position the position to move @child to.
         */
        reorder(child: Gtk.Widget, position: number): void;
        /**
         * Scrolls to `widget` position with an animation.
         * #HdyPaginator:animation-duration property can be used for controlling the
         * duration.
         * @param widget a child of @self
         */
        scroll_to(widget: Gtk.Widget): void;
        /**
         * Scrolls to `widget` position with an animation.
         * @param widget a child of @self
         * @param duration animation duration in milliseconds
         */
        scroll_to_full(widget: Gtk.Widget, duration: number): void;
        /**
         * Sets whether `self` can be dragged with mouse pointer. If `allow_mouse_drag`
         * is %FALSE, dragging is only available on touch.
         *
         * This should usually be %FALSE.
         * @param allow_mouse_drag whether @self can be dragged with mouse pointer
         */
        set_allow_mouse_drag(allow_mouse_drag: boolean): void;
        /**
         * Sets animation duration used by hdy_paginator_scroll_to().
         * @param duration animation duration in milliseconds
         */
        set_animation_duration(duration: number): void;
        /**
         * Sets whether `self` is centering content. If #HdyPaginator:indicator-style is
         * `HDY_PAGINATOR_INDICATOR_STYLE_NONE,` centering does nothing, otherwise it
         * adds whitespace to the left or above the pages to compensate for the
         * indicators.
         * @param center_content whether @self should center contents
         */
        set_center_content(center_content: boolean): void;
        /**
         * Sets spacing between content and page indicators. Does nothing if
         * #HdyPaginator:indicator-style is `HDY_PAGINATOR_INDICATOR_STYLE_NONE`.
         * @param spacing the new spacing value
         */
        set_indicator_spacing(spacing: number): void;
        /**
         * Sets style of page indicators. Depending on orientation, they are displayed
         * below or besides the pages. If the pages are meant to be centered,
         * #HdyPaginator:center-content can be used to compensate for that.
         * @param style indicator style to use
         */
        set_indicator_style(style: PaginatorIndicatorStyle): void;
        /**
         * Sets whether `self` can be navigated. This can be used to temporarily disable
         * a #HdyPaginator to only allow swiping in a certain state.
         * @param interactive whether @self can be swiped.
         */
        set_interactive(interactive: boolean): void;
        /**
         * Sets spacing between pages in pixels.
         * @param spacing the new spacing value
         */
        set_spacing(spacing: number): void;
    }

    module PreferencesGroup {
        // Constructor properties interface
    }

    class PreferencesGroup extends Gtk.Box {
        // Own properties of Handy-0.0.PreferencesGroup

        /**
         * The description for this group of preferences.
         */
        description: string;
        /**
         * The title for this group of preferences.
         */
        title: string;

        // Constructors of Handy-0.0.PreferencesGroup

        static ['new'](): PreferencesGroup;

        // Owm methods of Handy-0.0.PreferencesGroup

        get_description(): string;
        /**
         * Gets the title of `self`.
         * @returns the title of @self.
         */
        get_title(): string;
        /**
         * Sets the description for `self`.
         * @param description the description
         */
        set_description(description: string): void;
        /**
         * Sets the title for `self`.
         * @param title the title
         */
        set_title(title: string): void;
    }

    module PreferencesPage {
        // Constructor properties interface
    }

    class PreferencesPage extends Gtk.ScrolledWindow {
        // Own properties of Handy-0.0.PreferencesPage

        /**
         * The icon name for this page of preferences.
         */
        icon_name: string;
        /**
         * The icon name for this page of preferences.
         */
        iconName: string;
        /**
         * The title for this page of preferences.
         */
        title: string;

        // Constructors of Handy-0.0.PreferencesPage

        static ['new'](): PreferencesPage;

        // Owm methods of Handy-0.0.PreferencesPage

        /**
         * Gets the icon name for `self,` or %NULL.
         * @returns the icon name for @self, or %NULL.
         */
        get_icon_name(): string | null;
        /**
         * Gets the title of `self,` or %NULL.
         * @returns the title of the @self, or %NULL.
         */
        get_title(): string | null;
        /**
         * Sets the icon name for `self`.
         * @param icon_name the icon name, or %NULL
         */
        set_icon_name(icon_name?: string | null): void;
        /**
         * Sets the title of `self`.
         * @param title the title of the page, or %NULL
         */
        set_title(title?: string | null): void;
    }

    module PreferencesRow {
        // Constructor properties interface
    }

    class PreferencesRow extends Gtk.ListBoxRow {
        // Own properties of Handy-0.0.PreferencesRow

        /**
         * The title of the preference represented by this row.
         */
        title: string;
        /**
         * Whether an embedded underline in the text of the title indicates a
         * mnemonic.
         */
        use_underline: boolean;
        /**
         * Whether an embedded underline in the text of the title indicates a
         * mnemonic.
         */
        useUnderline: boolean;

        // Constructors of Handy-0.0.PreferencesRow

        static ['new'](): PreferencesRow;

        // Owm methods of Handy-0.0.PreferencesRow

        /**
         * Gets the title of the preference represented by `self`.
         * @returns the title of the preference represented          by @self, or %NULL.
         */
        get_title(): string | null;
        /**
         * Gets whether an embedded underline in the text of the title indicates a
         * mnemonic. See hdy_preferences_row_set_use_underline().
         * @returns %TRUE if an embedded underline in the title indicates the mnemonic          accelerator keys.
         */
        get_use_underline(): boolean;
        /**
         * Sets the title of the preference represented by `self`.
         * @param title the title, or %NULL.
         */
        set_title(title?: string | null): void;
        /**
         * If true, an underline in the text of the title indicates the next character
         * should be used for the mnemonic accelerator key.
         * @param use_underline %TRUE if underlines in the text indicate mnemonics
         */
        set_use_underline(use_underline: boolean): void;
    }

    module PreferencesWindow {
        // Constructor properties interface
    }

    class PreferencesWindow extends Gtk.Window {
        // Constructors of Handy-0.0.PreferencesWindow

        static ['new'](): PreferencesWindow;
    }

    module SearchBar {
        // Constructor properties interface
    }

    class SearchBar extends Gtk.Bin {
        // Own properties of Handy-0.0.SearchBar

        /**
         * Whether the search mode is on and the search bar shown.
         *
         * See hdy_search_bar_set_search_mode() for details.
         */
        search_mode_enabled: boolean;
        /**
         * Whether the search mode is on and the search bar shown.
         *
         * See hdy_search_bar_set_search_mode() for details.
         */
        searchModeEnabled: boolean;
        /**
         * Whether to show the close button in the toolbar.
         */
        show_close_button: boolean;
        /**
         * Whether to show the close button in the toolbar.
         */
        showCloseButton: boolean;

        // Constructors of Handy-0.0.SearchBar

        static ['new'](): SearchBar;

        // Owm methods of Handy-0.0.SearchBar

        /**
         * Connects the #GtkEntry widget passed as the one to be used in
         * this search bar. The entry should be a descendant of the search bar.
         * This is only required if the entry isn’t the direct child of the
         * search bar (as in our main example).
         * @param entry a #GtkEntry
         */
        connect_entry(entry: Gtk.Entry): void;
        /**
         * Returns whether the search mode is on or off.
         * @returns whether search mode is toggled on
         */
        get_search_mode(): boolean;
        /**
         * Returns whether the close button is shown.
         * @returns whether the close button is shown
         */
        get_show_close_button(): boolean;
        /**
         * This function should be called when the top-level
         * window which contains the search bar received a key event.
         *
         * If the key event is handled by the search bar, the bar will
         * be shown, the entry populated with the entered text and %GDK_EVENT_STOP
         * will be returned. The caller should ensure that events are
         * not propagated further.
         *
         * If no entry has been connected to the search bar, using
         * hdy_search_bar_connect_entry(), this function will return
         * immediately with a warning.
         *
         * ## Showing the search bar on key presses
         *
         *
         * ```c
         * static gboolean
         * on_key_press_event (GtkWidget *widget,
         *                     GdkEvent  *event,
         *                     gpointer   user_data)
         * {
         *   HdySearchBar *bar = HDY_SEARCH_BAR (user_data);
         *   return hdy_search_bar_handle_event (self, event);
         * }
         *
         * static void
         * create_toplevel (void)
         * {
         *   GtkWidget *window = gtk_window_new (GTK_WINDOW_TOPLEVEL);
         *   GtkWindow *search_bar = hdy_search_bar_new ();
         *
         *  // Add more widgets to the window...
         *
         *   g_signal_connect (window,
         *                    "key-press-event",
         *                     G_CALLBACK (on_key_press_event),
         *                     search_bar);
         * }
         * ```
         *
         * @param event a #GdkEvent containing key press events
         * @returns %GDK_EVENT_STOP if the key press event resulted     in text being entered in the search entry (and revealing     the search bar if necessary), %GDK_EVENT_PROPAGATE otherwise.
         */
        handle_event(event: Gdk.Event): boolean;
        /**
         * Switches the search mode on or off.
         * @param search_mode the new state of the search mode
         */
        set_search_mode(search_mode: boolean): void;
        /**
         * Shows or hides the close button. Applications that
         * already have a “search” toggle button should not show a close
         * button in their search bar, as it duplicates the role of the
         * toggle button.
         * @param visible whether the close button will be shown or not
         */
        set_show_close_button(visible: boolean): void;
    }

    module Squeezer {
        // Constructor properties interface
    }

    class Squeezer extends Gtk.Container {
        // Own properties of Handy-0.0.Squeezer

        homogeneous: boolean;
        interpolate_size: boolean;
        interpolateSize: boolean;
        transition_duration: number;
        transitionDuration: number;
        readonly transition_running: boolean;
        readonly transitionRunning: boolean;
        transition_type: SqueezerTransitionType;
        transitionType: SqueezerTransitionType;
        readonly visible_child: Gtk.Widget;
        readonly visibleChild: Gtk.Widget;

        // Constructors of Handy-0.0.Squeezer

        static ['new'](): Squeezer;

        // Owm methods of Handy-0.0.Squeezer

        /**
         * Gets whether `child` is enabled.
         *
         * See hdy_squeezer_set_child_enabled().
         * @param child a child of @self
         * @returns %TRUE if @child is enabled, %FALSE otherwise.
         */
        get_child_enabled(child: Gtk.Widget): boolean;
        /**
         * Gets whether `self` is homogeneous.
         *
         * See hdy_squeezer_set_homogeneous().
         * @returns %TRUE if @self is homogeneous, %FALSE is not
         */
        get_homogeneous(): boolean;
        /**
         * Gets wether `self` should interpolate its size on visible child change.
         *
         * See hdy_squeezer_set_interpolate_size().
         * @returns %TRUE if @self interpolates its size on visible child change, %FALSE if not
         */
        get_interpolate_size(): boolean;
        /**
         * Gets the amount of time (in milliseconds) that transitions between children
         * in `self` will take.
         * @returns the transition duration
         */
        get_transition_duration(): number;
        /**
         * Gets whether `self` is currently in a transition from one child to another.
         * @returns %TRUE if the transition is currently running, %FALSE otherwise.
         */
        get_transition_running(): boolean;
        /**
         * Gets the type of animation that will be used for transitions between children
         * in `self`.
         * @returns the current transition type of @self
         */
        get_transition_type(): SqueezerTransitionType;
        /**
         * Gets the currently visible child of `self,` or %NULL if there are no visible
         * children.
         * @returns the visible child of the #HdySqueezer
         */
        get_visible_child(): Gtk.Widget | null;
        /**
         * Make `self` enable or disable `child`. If a child is disabled, it will be
         * ignored when looking for the child fitting the available size best. This
         * allows to programmatically and prematurely hide a child of `self` even if it
         * fits in the available space.
         *
         * This can be used e.g. to ensure a certain child is hidden below a certain
         * window width, or any other constraint you find suitable.
         * @param child a child of @self
         * @param enabled %TRUE to enable the child, %FALSE to disable it
         */
        set_child_enabled(child: Gtk.Widget, enabled: boolean): void;
        /**
         * Sets `self` to be homogeneous or not. If it is homogeneous, `self` will request
         * the same size for all its children for its opposite orientation, e.g. if
         * `self` is oriented horizontally and is homogeneous, it will request the same
         * height for all its children. If it isn't, `self` may change size when a
         * different child becomes visible.
         * @param homogeneous %TRUE to make @self homogeneous
         */
        set_homogeneous(homogeneous: boolean): void;
        /**
         * Sets whether or not `self` will interpolate the size of its opposing
         * orientation when changing the visible child. If %TRUE, `self` will interpolate
         * its size between the one of the previous visible child and the one of the new
         * visible child, according to the set transition duration and the orientation,
         * e.g. if `self` is horizontal, it will interpolate the its height.
         * @param interpolate_size %TRUE to interpolate the size
         */
        set_interpolate_size(interpolate_size: boolean): void;
        /**
         * Sets the duration that transitions between children in `self` will take.
         * @param duration the new duration, in milliseconds
         */
        set_transition_duration(duration: number): void;
        /**
         * Sets the type of animation that will be used for transitions between children
         * in `self`. Available types include various kinds of fades and slides.
         *
         * The transition type can be changed without problems at runtime, so it is
         * possible to change the animation based on the child that is about to become
         * current.
         * @param transition the new transition type
         */
        set_transition_type(transition: SqueezerTransitionType): void;
    }

    module SwipeGroup {
        // Constructor properties interface
    }

    class SwipeGroup extends GObject.Object {
        // Constructors of Handy-0.0.SwipeGroup

        static ['new'](): SwipeGroup;

        // Owm methods of Handy-0.0.SwipeGroup

        /**
         * When the widget is destroyed or no longer referenced elsewhere, it will
         * be removed from the swipe group.
         * @param swipeable the #HdySwipeable to add
         */
        add_swipeable(swipeable: Swipeable): void;
        /**
         * Returns the list of swipeables associated with `self`.
         * @returns a #GSList of   swipeables. The list is owned by libhandy and should not be modified.
         */
        get_swipeables(): Swipeable[];
        /**
         * Removes a widget from a #HdySwipeGroup.
         * @param swipeable the #HdySwipeable to remove
         */
        remove_swipeable(swipeable: Swipeable): void;
    }

    module TitleBar {
        // Constructor properties interface
    }

    class TitleBar extends Gtk.Bin {
        // Own properties of Handy-0.0.TitleBar

        selection_mode: boolean;
        selectionMode: boolean;

        // Constructors of Handy-0.0.TitleBar

        static ['new'](): TitleBar;

        // Owm methods of Handy-0.0.TitleBar

        /**
         * Returns wether whether `self` is in selection mode.
         * @returns %TRUE if the title bar is in selection mode
         */
        get_selection_mode(): boolean;
        /**
         * Sets whether `self` is in selection mode.
         * @param selection_mode %TRUE to enable the selection mode
         */
        set_selection_mode(selection_mode: boolean): void;
    }

    module ValueObject {
        // Constructor properties interface
    }

    class ValueObject extends GObject.Object {
        // Own properties of Handy-0.0.ValueObject

        value: GObject.Value;

        // Constructors of Handy-0.0.ValueObject

        static ['new'](value: GObject.Value): ValueObject;

        // Owm methods of Handy-0.0.ValueObject

        /**
         * Copy data from the contained #GValue into `dest`.
         * @param dest #GValue with correct type to copy into
         */
        copy_value(dest: GObject.Value): void;
        /**
         * Returns a copy of the contained string if the value is of type
         * #G_TYPE_STRING.
         * @returns a copy of the contained string
         */
        dup_string(): string;
        /**
         * Returns the contained string if the value is of type #G_TYPE_STRING.
         * @returns the contained string
         */
        get_string(): string;
        /**
         * Return the contained value.
         * @returns the contained #GValue
         */
        get_value(): GObject.Value;
    }

    module ViewSwitcher {
        // Constructor properties interface
    }

    class ViewSwitcher extends Gtk.Box {
        // Own properties of Handy-0.0.ViewSwitcher

        /**
         * Use the "icon-size" property to hint the icons to use, you almost certainly
         * want to leave this as %GTK_ICON_SIZE_BUTTON.
         */
        icon_size: number;
        /**
         * Use the "icon-size" property to hint the icons to use, you almost certainly
         * want to leave this as %GTK_ICON_SIZE_BUTTON.
         */
        iconSize: number;
        /**
         * The preferred place to ellipsize the string, if the narrow mode label does
         * not have enough room to display the entire string, specified as a
         * #PangoEllipsizeMode.
         *
         * Note that setting this property to a value other than %PANGO_ELLIPSIZE_NONE
         * has the side-effect that the label requests only enough space to display
         * the ellipsis.
         */
        narrow_ellipsize: Pango.EllipsizeMode;
        /**
         * The preferred place to ellipsize the string, if the narrow mode label does
         * not have enough room to display the entire string, specified as a
         * #PangoEllipsizeMode.
         *
         * Note that setting this property to a value other than %PANGO_ELLIPSIZE_NONE
         * has the side-effect that the label requests only enough space to display
         * the ellipsis.
         */
        narrowEllipsize: Pango.EllipsizeMode;
        /**
         * The #HdyViewSwitcherPolicy the view switcher should use to determine which
         * mode to use.
         */
        policy: ViewSwitcherPolicy;
        /**
         * The #GtkStack the view switcher controls.
         */
        stack: Gtk.Stack;

        // Constructors of Handy-0.0.ViewSwitcher

        static ['new'](): ViewSwitcher;

        // Owm methods of Handy-0.0.ViewSwitcher

        /**
         * Get the icon size of the images used in the #HdyViewSwitcher.
         *
         * See: hdy_view_switcher_set_icon_size()
         * @returns the icon size of the images
         */
        get_icon_size(): Gtk.IconSize;
        /**
         * Get the ellipsizing position of the narrow mode label. See
         * hdy_view_switcher_set_narrow_ellipsize().
         * @returns #PangoEllipsizeMode
         */
        get_narrow_ellipsize(): Pango.EllipsizeMode;
        /**
         * Gets the policy of `self`.
         * @returns the policy of @self
         */
        get_policy(): ViewSwitcherPolicy;
        /**
         * Get the #GtkStack being controlled by the #HdyViewSwitcher.
         *
         * See: hdy_view_switcher_set_stack()
         * @returns the #GtkStack, or %NULL if none has been set
         */
        get_stack(): Gtk.Stack | null;
        /**
         * Change the icon size hint for the icons in a #HdyViewSwitcher.
         * @param icon_size the new icon size
         */
        set_icon_size(icon_size: Gtk.IconSize): void;
        /**
         * Set the mode used to ellipsize the text in narrow mode if there is not
         * enough space to render the entire string.
         * @param mode a #PangoEllipsizeMode
         */
        set_narrow_ellipsize(mode: Pango.EllipsizeMode): void;
        /**
         * Sets the policy of `self`.
         * @param policy the new policy
         */
        set_policy(policy: ViewSwitcherPolicy): void;
        /**
         * Sets the #GtkStack to control.
         * @param stack a #GtkStack
         */
        set_stack(stack?: Gtk.Stack | null): void;
    }

    module ViewSwitcherBar {
        // Constructor properties interface
    }

    class ViewSwitcherBar extends Gtk.Bin {
        // Own properties of Handy-0.0.ViewSwitcherBar

        /**
         * Use the "icon-size" property to hint the icons to use, you almost certainly
         * want to leave this as %GTK_ICON_SIZE_BUTTON.
         */
        icon_size: number;
        /**
         * Use the "icon-size" property to hint the icons to use, you almost certainly
         * want to leave this as %GTK_ICON_SIZE_BUTTON.
         */
        iconSize: number;
        /**
         * The #HdyViewSwitcherPolicy the #HdyViewSwitcher should use to determine
         * which mode to use.
         */
        policy: ViewSwitcherPolicy;
        /**
         * Whether the bar should be revealed or hidden.
         */
        reveal: boolean;
        /**
         * The #GtkStack the #HdyViewSwitcher controls.
         */
        stack: Gtk.Stack;

        // Constructors of Handy-0.0.ViewSwitcherBar

        static ['new'](): ViewSwitcherBar;

        // Owm methods of Handy-0.0.ViewSwitcherBar

        /**
         * Get the icon size of the images used in the #HdyViewSwitcher.
         * @returns the icon size of the images
         */
        get_icon_size(): Gtk.IconSize;
        /**
         * Gets the policy of `self`.
         * @returns the policy of @self
         */
        get_policy(): ViewSwitcherPolicy;
        /**
         * Gets whether `self` should be revealed or not.
         * @returns %TRUE if @self is revealed, %FALSE if not.
         */
        get_reveal(): boolean;
        /**
         * Get the #GtkStack being controlled by the #HdyViewSwitcher.
         * @returns the #GtkStack, or %NULL if none has been set
         */
        get_stack(): Gtk.Stack | null;
        /**
         * Change the icon size hint for the icons in a #HdyViewSwitcher.
         * @param icon_size the new icon size
         */
        set_icon_size(icon_size: Gtk.IconSize): void;
        /**
         * Sets the policy of `self`.
         * @param policy the new policy
         */
        set_policy(policy: ViewSwitcherPolicy): void;
        /**
         * Sets whether `self` should be revealed or not.
         * @param reveal %TRUE to reveal @self
         */
        set_reveal(reveal: boolean): void;
        /**
         * Sets the #GtkStack to control.
         * @param stack a #GtkStack
         */
        set_stack(stack?: Gtk.Stack | null): void;
    }

    class ActionRowClass {}

    class ArrowsClass {}

    class ColumnClass {}

    class ComboRowClass {}

    class DialerButtonClass {}

    class DialerClass {}

    class DialerCycleButtonClass {}

    class DialogClass {}

    class EnumValueObjectClass {}

    class ExpanderRowClass {}

    class HeaderBarClass {}

    class HeaderGroupClass {}

    class KeypadClass {}

    class LeafletClass {}

    class PaginatorClass {}

    class PreferencesGroupClass {}

    class PreferencesPageClass {}

    class PreferencesRowClass {}

    class PreferencesWindowClass {}

    class SearchBarClass {}

    class SqueezerClass {}

    class SwipeGroupClass {}

    /**
     * An interface for swipeable widgets.
     */
    class SwipeableInterface {}

    class TitleBarClass {}

    class ValueObjectClass {}

    class ViewSwitcherBarClass {}

    class ViewSwitcherClass {}

    interface Swipeable {
        // Own virtual methods of Handy-0.0.Swipeable

        vfunc_begin_swipe(direction: number, direct: boolean): void;
        vfunc_end_swipe(duration: number, to: number): void;
        vfunc_switch_child(index: number, duration: number): void;
        vfunc_update_swipe(value: number): void;
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

export default Handy;
// END
