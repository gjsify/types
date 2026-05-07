
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
import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from 'cairo';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Atk from '@girs/atk-1.0';

export namespace Handy {

    /**
     * Handy-0.0
     */


    /**
     * @gir-type Enum
     */
    export namespace ArrowsDirection {
        export const $gtype: GObject.GType<ArrowsDirection>;
    }

    /**
     * @gir-type Enum
     */
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


    /**
     * @gir-type Enum
     */
    export namespace CenteringPolicy {
        export const $gtype: GObject.GType<CenteringPolicy>;
    }

    /**
     * @gir-type Enum
     */
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
     * @gir-type Enum
     */
    export namespace Fold {
        export const $gtype: GObject.GType<Fold>;
    }

    /**
     * Represents the fold of widgets and other objects which can be switched
     * between folded and unfolded state on the fly, like HdyLeaflet.
     * @gir-type Enum
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
     * @gir-type Enum
     */
    export namespace LeafletChildTransitionType {
        export const $gtype: GObject.GType<LeafletChildTransitionType>;
    }

    /**
     * These enumeration values describe the possible transitions between pages in a
     * {@link Handy.Leaflet} widget.
     * @gir-type Enum
     * @deprecated since 0.0.12: Use {@link Handy.LeafletTransitionType}
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
     * @gir-type Enum
     */
    export namespace LeafletModeTransitionType {
        export const $gtype: GObject.GType<LeafletModeTransitionType>;
    }

    /**
     * These enumeration values describe the possible transitions between pages in a
     * {@link Handy.Leaflet} widget.
     * @gir-type Enum
     * @deprecated since 0.0.12: Use {@link Handy.LeafletTransitionType}
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
     * @gir-type Enum
     */
    export namespace LeafletTransitionType {
        export const $gtype: GObject.GType<LeafletTransitionType>;
    }

    /**
     * This enumeration value describes the possible transitions between modes and
     * children in a {@link Handy.Leaflet} widget.
     * 
     * New values may be added to this enumeration over time.
     * @gir-type Enum
     * @since 0.0.12
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
     * @gir-type Enum
     */
    export namespace PaginatorIndicatorStyle {
        export const $gtype: GObject.GType<PaginatorIndicatorStyle>;
    }

    /**
     * These enumeration values describe the possible page indicator styles in a
     * {@link Handy.Paginator} widget.
     * 
     * New values may be added to this enumeration over time.
     * @gir-type Enum
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
     * @gir-type Enum
     */
    export namespace SqueezerTransitionType {
        export const $gtype: GObject.GType<SqueezerTransitionType>;
    }

    /**
     * These enumeration values describe the possible transitions between children
     * in a {@link Handy.Squeezer} widget.
     * @gir-type Enum
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


    /**
     * @gir-type Enum
     */
    export namespace ViewSwitcherPolicy {
        export const $gtype: GObject.GType<ViewSwitcherPolicy>;
    }

    /**
     * @gir-type Enum
     */
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
     * @returns the ease out for `t`.
     * @since 0.0.11
     */
    function ease_out_cubic(t: number): number;

    /**
     * This is a default implementation of {@link Handy.ComboRowGetEnumValueNameFunc} to be
     * used with `hdy_combo_row_set_for_enum()`. If the enumeration has a nickname, it
     * will return it, otherwise it will return its name.
     * @param value the value from the enum from which to get a name
     * @param user_data unused user data
     * @returns a newly allocated displayable name that represents `value`
     * @since 0.0.6
     */
    function enum_value_row_name(value: EnumValueObject, user_data: null): string;

    /**
     * Returns whether animations are enabled for that widget. This should be used
     * when implementing an animated widget to know whether to animate it or not.
     * @param widget a {@link Gtk.Widget}
     * @returns `true` if animations are enabled for `widget`.
     * @since 0.0.11
     */
    function get_enable_animations(widget: Gtk.Widget): boolean;

    /**
     * Call this function before using any other Handy functions in your
     * GUI applications. If libhandy has already been initialized, the function will
     * simply return without processing the new arguments.
     * @param argv Address of the <parameter>argv</parameter> parameter of `main()`, or `null`.     Any options understood by Handy are stripped before return.
     * @returns `true` if initialization was successful, `false` otherwise.
     */
    function init(argv?: (string[] | null)): [boolean, string[] | null];

    /**
     * Separates rows by using {@link Gtk.Separator} as headers. The first row doesn't have
     * a separator as there is no row above it.
     * @param row the row to update
     * @param before the row before `row`, or `null` if it is first
     * @param unused_user_data unused user data
     * @since 0.0.6
     */
    function list_box_separator_header(row: Gtk.ListBoxRow, before: (Gtk.ListBoxRow | null), unused_user_data: null): void;

    /**
     * Computes the length of the string in utf-8 characters. See `g_utf8_strlen`.
     * @param string a {@link GLib.String}
     * @returns the length of `string` in characters
     */
    function string_utf8_len(string: GLib.String): number;

    /**
     * Cut of the end of the string `string` so that `len` utf8 characters remain.
     * @param string a {@link GLib.String}
     * @param len the new size of the string
     * @returns `string`
     */
    function string_utf8_truncate(string: GLib.String, len: (bigint | number)): GLib.String;

    /**
     * @gir-type Callback
     */
    interface ComboRowGetEnumValueNameFunc {
        (value: EnumValueObject): string;
    }

    /**
     * @gir-type Callback
     */
    interface ComboRowGetNameFunc<A = GObject.Object> {
        (item: A): string;
    }

    namespace ActionRow {
        // Signal signatures
        interface SignalSignatures extends PreferencesRow.SignalSignatures {
            "notify::activatable-widget": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::subtitle": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::use-underline": (pspec: GObject.ParamSpec) => void;
            "notify::activatable": (pspec: GObject.ParamSpec) => void;
            "notify::selectable": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends PreferencesRow.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Actionable.ConstructorProps, Gtk.Buildable.ConstructorProps {
            activatable_widget: (Gtk.Widget | null);
            activatableWidget: (Gtk.Widget | null);
            icon_name: string;
            iconName: string;
            subtitle: string;
            title: (string | any);
            use_underline: boolean;
            useUnderline: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class ActionRow extends PreferencesRow implements Atk.ImplementorIface, Gtk.Actionable, Gtk.Buildable {
        static $gtype: GObject.GType<ActionRow>;

        // Properties
        /**
         * The activatable widget for this row.
         * @since 0.0.7
         */
        get activatable_widget(): (Gtk.Widget | null);
        set activatable_widget(val: (Gtk.Widget | null));

        /**
         * The activatable widget for this row.
         * @since 0.0.7
         */
        get activatableWidget(): (Gtk.Widget | null);
        set activatableWidget(val: (Gtk.Widget | null));

        /**
         * The icon name for this row.
         * @since 0.0.6
         */
        get icon_name(): string;
        set icon_name(val: string);

        /**
         * The icon name for this row.
         * @since 0.0.6
         */
        get iconName(): string;
        set iconName(val: string);

        /**
         * The subtitle for this row.
         * @since 0.0.6
         */
        get subtitle(): string;
        set subtitle(val: string);

        /**
         * The title for this row.
         * @since 0.0.6
         */
    // This accessor conflicts with another accessor's type in a parent class or interface.
        get title(): (string | any);
    // This accessor conflicts with another accessor's type in a parent class or interface.
        set title(val: (string | any));

        /**
         * Whether an embedded underline in the text of the title and subtitle labels
         * indicates a mnemonic.
         * @since 0.0.6
         * @default false
         */
        get use_underline(): boolean;
        set use_underline(val: boolean);

        /**
         * Whether an embedded underline in the text of the title and subtitle labels
         * indicates a mnemonic.
         * @since 0.0.6
         * @default false
         */
        get useUnderline(): boolean;
        set useUnderline(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ActionRow.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ActionRow.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): ActionRow;

        // Signals
        /** @signal */
        connect<K extends keyof ActionRow.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ActionRow.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ActionRow.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ActionRow.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ActionRow.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ActionRow.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_activate(): void;

        // Methods
        activate(): void;

        /**
         * @param args 
         */
    // Conflicted with Gtk.Widget.activate
        activate(...args: never[]): any;

        /**
         * Adds an action widget to `self`.
         * @param widget the action widget
         */
        add_action(widget: (Gtk.Widget | null)): void;

        /**
         * Adds a prefix widget to `self`.
         * @param widget the prefix widget
         */
        add_prefix(widget: (Gtk.Widget | null)): void;

        /**
         * Gets the widget activated when `self` is activated.
         * @returns the widget activated when `self` is          activated, or `null` if none has been set.
         */
        get_activatable_widget(): (Gtk.Widget | null);

        /**
         * Gets the icon name for `self`.
         * @returns the icon name for `self`.
         */
        get_icon_name(): string;

        /**
         * Gets the subtitle for `self`.
         * @returns the subtitle for `self`.
         */
        get_subtitle(): string;

        /**
         * Gets the title for `self`.
         * @returns the title for `self`.
         */
        get_title(): string;

        /**
         * @param args 
         */
    // Conflicted with Handy.PreferencesRow.get_title
        get_title(...args: never[]): any;

        /**
         * Gets whether an embedded underline in the text of the title and subtitle
         * labels indicates a mnemonic. See `hdy_action_row_set_use_underline()`.
         * @returns `true` if an embedded underline in the title and subtitle labels          indicates the mnemonic accelerator keys.
         */
        get_use_underline(): boolean;

        /**
         * Sets the widget to activate when `self` is activated, either by clicking
         * on it, by calling `hdy_action_row_activate()`, or via mnemonics in the title or
         * the subtitle. See the “use_underline” property to enable mnemonics.
         * 
         * The target widget will be activated by emitting the
         * GtkWidget::mnemonic-activate signal on it.
         * @param widget the target {@link Gtk.Widget}, or `null` to unset
         */
        set_activatable_widget(widget: (Gtk.Widget | null)): void;

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
         * @param args 
         */
    // Conflicted with Handy.PreferencesRow.set_title
        set_title(...args: never[]): any;

        /**
         * If true, an underline in the text of the title and subtitle labels indicates
         * the next character should be used for the mnemonic accelerator key.
         * @param use_underline `true` if underlines in the text indicate mnemonics
         */
        set_use_underline(use_underline: boolean): void;

        /**
         * Emits a {@link Gtk.Widget.SignalSignatures.child_notify | Gtk.Widget::child-notify} signal for the
         * [child property][child-properties] `child_property`
         * on `widget`.
         * 
         * This is the analogue of `g_object_notify()` for child properties.
         * 
         * Also see `gtk_container_child_notify()`.
         * @param child_property the name of a child property installed on the                  class of `widget`’s parent
         */
        child_notify(child_property: string): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Container.child_notify
        child_notify(...args: never[]): any;
    }


    namespace Arrows {
        // Signal signatures
        interface SignalSignatures extends Gtk.DrawingArea.SignalSignatures {
            "notify::count": (pspec: GObject.ParamSpec) => void;
            "notify::direction": (pspec: GObject.ParamSpec) => void;
            "notify::duration": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.DrawingArea.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            count: number;
            direction: ArrowsDirection;
            duration: number;
        }
    }

    /**
     * @gir-type Class
     */
    class Arrows extends Gtk.DrawingArea implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<Arrows>;

        // Properties
        /**
         * @default 1
         */
        get count(): number;
        set count(val: number);

        /**
         * @default Handy.ArrowsDirection.UP
         */
        get direction(): ArrowsDirection;
        set direction(val: ArrowsDirection);

        /**
         * @default 1000
         */
        get duration(): number;
        set duration(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Arrows.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Arrows.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Arrows;

        // Signals
        /** @signal */
        connect<K extends keyof Arrows.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Arrows.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Arrows.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Arrows.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Arrows.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Arrows.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
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
         * @param args 
         */
    // Conflicted with Gtk.Widget.get_direction
        get_direction(...args: never[]): any;

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
         * @param args 
         */
    // Conflicted with Gtk.Widget.set_direction
        set_direction(...args: never[]): any;

        /**
         * Set the duration of the arrow animation.
         * @param duration the duration of the animation in ms
         */
        set_duration(duration: number): void;
    }


    namespace Column {
        // Signal signatures
        interface SignalSignatures extends Gtk.Bin.SignalSignatures {
            "notify::linear-growth-width": (pspec: GObject.ParamSpec) => void;
            "notify::maximum-width": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Bin.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            linear_growth_width: number;
            linearGrowthWidth: number;
            maximum_width: number;
            maximumWidth: number;
        }
    }

    /**
     * @gir-type Class
     */
    class Column extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<Column>;

        // Properties
        /**
         * @default 0
         */
        get linear_growth_width(): number;
        set linear_growth_width(val: number);

        /**
         * @default 0
         */
        get linearGrowthWidth(): number;
        set linearGrowthWidth(val: number);

        /**
         * @default 0
         */
        get maximum_width(): number;
        set maximum_width(val: number);

        /**
         * @default 0
         */
        get maximumWidth(): number;
        set maximumWidth(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Column.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Column.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Column;

        // Signals
        /** @signal */
        connect<K extends keyof Column.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Column.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Column.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Column.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Column.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Column.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
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


    namespace ComboRow {
        // Signal signatures
        interface SignalSignatures extends ActionRow.SignalSignatures {
            "notify::selected-index": (pspec: GObject.ParamSpec) => void;
            "notify::use-subtitle": (pspec: GObject.ParamSpec) => void;
            "notify::activatable-widget": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::subtitle": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::use-underline": (pspec: GObject.ParamSpec) => void;
            "notify::activatable": (pspec: GObject.ParamSpec) => void;
            "notify::selectable": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends ActionRow.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Actionable.ConstructorProps, Gtk.Buildable.ConstructorProps {
            selected_index: number;
            selectedIndex: number;
            use_subtitle: boolean;
            useSubtitle: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class ComboRow extends ActionRow implements Atk.ImplementorIface, Gtk.Actionable, Gtk.Buildable {
        static $gtype: GObject.GType<ComboRow>;

        // Properties
        /**
         * The index of the selected item in its {@link Gio.ListModel}.
         * @since 0.0.7
         * @default -1
         */
        get selected_index(): number;
        set selected_index(val: number);

        /**
         * The index of the selected item in its {@link Gio.ListModel}.
         * @since 0.0.7
         * @default -1
         */
        get selectedIndex(): number;
        set selectedIndex(val: number);

        /**
         * `true` to set the current value as the subtitle.
         * 
         * If you use a custom widget creation function, you will need to give `self`
         * a name conversion closure with `hdy_combo_row_set_get_name_func()`.
         * 
         * If `true`, you should not access HdyActionRow:subtitle.
         * @since 0.0.10
         * @default false
         */
        get use_subtitle(): boolean;
        set use_subtitle(val: boolean);

        /**
         * `true` to set the current value as the subtitle.
         * 
         * If you use a custom widget creation function, you will need to give `self`
         * a name conversion closure with `hdy_combo_row_set_get_name_func()`.
         * 
         * If `true`, you should not access HdyActionRow:subtitle.
         * @since 0.0.10
         * @default false
         */
        get useSubtitle(): boolean;
        set useSubtitle(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ComboRow.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ComboRow.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): ComboRow;

        // Signals
        /** @signal */
        connect<K extends keyof ComboRow.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ComboRow.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ComboRow.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ComboRow.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ComboRow.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ComboRow.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Binds `model` to `self`.
         * 
         * If `self` was already bound to a model, that previous binding is destroyed.
         * 
         * The contents of `self` are cleared and then filled with widgets that represent
         * items from `model`. `self` is updated whenever `model` changes. If `model` is
         * `null`, `self` is left empty.
         * @param model the {@link Gio.ListModel} to be bound to `self`
         * @param create_list_widget_func a function that creates   widgets for items to display in the list, or `null` in case you also passed   `null` as `model`
         * @param create_current_widget_func a function that creates   widgets for items to display as the seleted item, or `null` in case you also   passed `null` as `model`
         */
        bind_model(model: (Gio.ListModel | null), create_list_widget_func: (Gtk.ListBoxCreateWidgetFunc | null), create_current_widget_func: (Gtk.ListBoxCreateWidgetFunc | null)): void;

        /**
         * Binds `model` to `self`.
         * 
         * If `self` was already bound to a model, that previous binding is destroyed.
         * 
         * The contents of `self` are cleared and then filled with widgets that represent
         * items from `model`. `self` is updated whenever `model` changes. If `model` is
         * `null`, `self` is left empty.
         * 
         * This is more conventient to use than `hdy_combo_row_bind_model()` if you want
         * to represent items of the model with names.
         * @param model the {@link Gio.ListModel} to be bound to `self`
         * @param get_name_func a function that creates names for items, or `null`   in case you also passed `null` as `model`
         */
        bind_name_model(model: (Gio.ListModel | null), get_name_func: (ComboRowGetNameFunc | null)): void;

        /**
         * Gets the model bound to `self`, or `null` if none is bound.
         * @returns the {@link Gio.ListModel} bound to `self` or `null`
         */
        get_model(): (Gio.ListModel | null);

        /**
         * Gets the index of the selected item in its {@link Gio.ListModel}.
         * @returns the index of the selected item, or -1 if no item is selected
         */
        get_selected_index(): number;

        /**
         * Gets whether the current value of `self` should be displayed as its subtitle.
         * @returns whether the current value of `self` should be displayed as its subtitle
         */
        get_use_subtitle(): boolean;

        /**
         * Creates a model for `enum_type` and binds it to `self`. The items of the model
         * will be {@link Handy.EnumValueObject} objects.
         * 
         * If `self` was already bound to a model, that previous binding is destroyed.
         * 
         * The contents of `self` are cleared and then filled with widgets that represent
         * items from `model`. `self` is updated whenever `model` changes. If `model` is
         * `null`, `self` is left empty.
         * 
         * This is more conventient to use than `hdy_combo_row_bind_name_model()` if you
         * want to represent values of an enumeration with names.
         * 
         * See `hdy_enum_value_row_name()`.
         * @param enum_type the enumeration {@link GObject.GType} to be bound to `self`
         * @param get_name_func a function that creates names for items, or `null`   in case you also passed `null` as `model`
         */
        set_for_enum(enum_type: GObject.GType, get_name_func: (ComboRowGetEnumValueNameFunc | null)): void;

        /**
         * Sets a closure to convert items into names. See HdyComboRow:use-subtitle.
         * @param get_name_func a function that creates names for items, or `null`   in case you also passed `null` as `model`
         */
        set_get_name_func(get_name_func: (ComboRowGetNameFunc | null)): void;

        /**
         * Sets the index of the selected item in its {@link Gio.ListModel}.
         * @param selected_index the index of the selected item
         */
        set_selected_index(selected_index: number): void;

        /**
         * Sets whether the current value of `self` should be displayed as its subtitle.
         * 
         * If `true`, you should not access HdyActionRow:subtitle.
         * @param use_subtitle `true` to set the current value as the subtitle
         */
        set_use_subtitle(use_subtitle: boolean): void;

        /**
         * For widgets that can be “activated” (buttons, menu items, etc.)
         * this function activates them. Activation is what happens when you
         * press Enter on a widget during key navigation. If `widget` isn't
         * activatable, the function returns `false`.
         * @returns `true` if the widget was activatable
         */
        activate(): boolean;

        /**
         * @param args 
         */
        // Conflicted with Handy.ActionRow.activate
        activate(...args: never[]): any;

        /**
         * Emits a {@link Gtk.Widget.SignalSignatures.child_notify | Gtk.Widget::child-notify} signal for the
         * [child property][child-properties] `child_property`
         * on `widget`.
         * 
         * This is the analogue of `g_object_notify()` for child properties.
         * 
         * Also see `gtk_container_child_notify()`.
         * @param child_property the name of a child property installed on the                  class of `widget`’s parent
         */
        child_notify(child_property: string): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Container.child_notify
        child_notify(...args: never[]): any;
    }


    namespace Dialer {
        // Signal signatures
        interface SignalSignatures extends Gtk.Bin.SignalSignatures {
            /**
             * This signal is emitted when the dialer's 'deleted' button is clicked
             * to delete the last symbol.
             * @signal
             * @run-last
             */
            deleted: () => void;
            /**
             * This signal is emitted when the dialer's 'dial' button is activated.
             * Connect to this signal to perform to get notified when the user
             * wants to submit the dialed number.
             * @signal
             * @run-last
             */
            submitted: (arg0: string) => void;
            /**
             * This signal is emitted when one of the symbol buttons (0-9, # or *)
             * is clicked. Connect to this signal to find out which button was pressed.
             * This doesn't take any cycling modes into account. So the button with "*"
             * and "+" on it will always send "*".  Delete and Submit buttons will
             * not trigger this signal.
             * @signal
             * @run-last
             */
            "symbol-clicked": (arg0: number) => void;
            "notify::column-spacing": (pspec: GObject.ParamSpec) => void;
            "notify::number": (pspec: GObject.ParamSpec) => void;
            "notify::relief": (pspec: GObject.ParamSpec) => void;
            "notify::row-spacing": (pspec: GObject.ParamSpec) => void;
            "notify::show-action-buttons": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Bin.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            column_spacing: number;
            columnSpacing: number;
            number: string;
            relief: Gtk.ReliefStyle;
            row_spacing: number;
            rowSpacing: number;
            show_action_buttons: boolean;
            showActionButtons: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class Dialer extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<Dialer>;

        // Properties
        /**
         * @default 0
         */
        get column_spacing(): number;
        set column_spacing(val: number);

        /**
         * @default 0
         */
        get columnSpacing(): number;
        set columnSpacing(val: number);

        get number(): string;
        set number(val: string);

        /**
         * The relief style of the edges of the main buttons.
         * @default Gtk.ReliefStyle.NORMAL
         */
        get relief(): Gtk.ReliefStyle;
        set relief(val: Gtk.ReliefStyle);

        /**
         * @default 0
         */
        get row_spacing(): number;
        set row_spacing(val: number);

        /**
         * @default 0
         */
        get rowSpacing(): number;
        set rowSpacing(val: number);

        /**
         * @default true
         */
        get show_action_buttons(): boolean;
        set show_action_buttons(val: boolean);

        /**
         * @default true
         */
        get showActionButtons(): boolean;
        set showActionButtons(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Dialer.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Dialer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Dialer;

        // Signals
        /** @signal */
        connect<K extends keyof Dialer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Dialer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Dialer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Dialer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Dialer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Dialer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param number 
         * @virtual
         */
        vfunc_submitted(number: string): void;

        // Methods
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
         * {@link Handy.Dialer}.
         * @returns The current {@link Gtk.ReliefStyle}
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
         * {@link Handy.Dialer} widget.
         * Two styles exist, {@link Gtk.ReliefStyle.NORMAL} and {@link Gtk.ReliefStyle.NONE}.
         * The default style is, as one can guess, {@link Gtk.ReliefStyle.NORMAL}.
         * @param relief The {@link Gtk.ReliefStyle} as described above
         */
        set_relief(relief: Gtk.ReliefStyle): void;

        /**
         * Set whether to show the submit and delete buttons.
         * @param show whether to show the buttons
         */
        set_show_action_buttons(show: boolean): void;
    }


    namespace DialerButton {
        // Signal signatures
        interface SignalSignatures extends Gtk.Button.SignalSignatures {
            "notify::digit": (pspec: GObject.ParamSpec) => void;
            "notify::symbols": (pspec: GObject.ParamSpec) => void;
            "notify::always-show-image": (pspec: GObject.ParamSpec) => void;
            "notify::image": (pspec: GObject.ParamSpec) => void;
            "notify::image-position": (pspec: GObject.ParamSpec) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::relief": (pspec: GObject.ParamSpec) => void;
            "notify::use-stock": (pspec: GObject.ParamSpec) => void;
            "notify::use-underline": (pspec: GObject.ParamSpec) => void;
            "notify::xalign": (pspec: GObject.ParamSpec) => void;
            "notify::yalign": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::action-name": (pspec: GObject.ParamSpec) => void;
            "notify::action-target": (pspec: GObject.ParamSpec) => void;
            "notify::related-action": (pspec: GObject.ParamSpec) => void;
            "notify::use-action-appearance": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Button.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Actionable.ConstructorProps, Gtk.Activatable.ConstructorProps, Gtk.Buildable.ConstructorProps {
            digit: number;
            symbols: string;
        }
    }

    /**
     * @gir-type Class
     */
    class DialerButton extends Gtk.Button implements Atk.ImplementorIface, Gtk.Actionable, Gtk.Activatable, Gtk.Buildable {
        static $gtype: GObject.GType<DialerButton>;

        // Properties
        /**
         * @read-only
         * @default 0
         */
        get digit(): number;

        get symbols(): string;
        set symbols(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DialerButton.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<DialerButton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](symbols: (string | null)): DialerButton;

        // Conflicted with Gtk.Button.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof DialerButton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DialerButton.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DialerButton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DialerButton.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DialerButton.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DialerButton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Get the {@link Handy.DialerButton}'s digit.
         * @returns the button's digit
         */
        get_digit(): number;

        /**
         * Get the {@link Handy.DialerButton}'s symbols.
         * @returns the button's symbols.
         */
        get_symbols(): string;

        /**
         * @default null
          * @category Inherited from Gtk.Actionable
         */
        get action_name(): (string | null);
        set action_name(val: (string | null));

        /**
         * @default null
          * @category Inherited from Gtk.Actionable
         */
        get actionName(): (string | null);
        set actionName(val: (string | null));

        /** @category Inherited from Gtk.Actionable */
        get action_target(): GLib.Variant;
        set action_target(val: GLib.Variant);

        /** @category Inherited from Gtk.Actionable */
        get actionTarget(): GLib.Variant;
        set actionTarget(val: GLib.Variant);

        /**
         * The action that this activatable will activate and receive
         * updates from for various states and possibly appearance.
         * 
         * > {@link Gtk.Activatable} implementors need to handle the this property and
         * > call `gtk_activatable_do_set_related_action()` when it changes.
         * @since 2.16
         * @deprecated since 3.10
          * @category Inherited from Gtk.Activatable
         */
        get related_action(): Gtk.Action;
        set related_action(val: Gtk.Action);

        /**
         * The action that this activatable will activate and receive
         * updates from for various states and possibly appearance.
         * 
         * > {@link Gtk.Activatable} implementors need to handle the this property and
         * > call `gtk_activatable_do_set_related_action()` when it changes.
         * @since 2.16
         * @deprecated since 3.10
          * @category Inherited from Gtk.Activatable
         */
        get relatedAction(): Gtk.Action;
        set relatedAction(val: Gtk.Action);

        /**
         * Whether this activatable should reset its layout
         * and appearance when setting the related action or when
         * the action changes appearance.
         * 
         * See the {@link Gtk.Action} documentation directly to find which properties
         * should be ignored by the {@link Gtk.Activatable} when this property is `false`.
         * 
         * > {@link Gtk.Activatable} implementors need to handle this property
         * > and call `gtk_activatable_sync_action_properties()` on the activatable
         * > widget when it changes.
         * @since 2.16
         * @deprecated since 3.10
         * @default true
          * @category Inherited from Gtk.Activatable
         */
        get use_action_appearance(): boolean;
        set use_action_appearance(val: boolean);

        /**
         * Whether this activatable should reset its layout
         * and appearance when setting the related action or when
         * the action changes appearance.
         * 
         * See the {@link Gtk.Action} documentation directly to find which properties
         * should be ignored by the {@link Gtk.Activatable} when this property is `false`.
         * 
         * > {@link Gtk.Activatable} implementors need to handle this property
         * > and call `gtk_activatable_sync_action_properties()` on the activatable
         * > widget when it changes.
         * @since 2.16
         * @deprecated since 3.10
         * @default true
          * @category Inherited from Gtk.Activatable
         */
        get useActionAppearance(): boolean;
        set useActionAppearance(val: boolean);

        /**
         * Gets the action name for `actionable`.
         * 
         * See `gtk_actionable_set_action_name()` for more information.
         * @returns the action name, or `null` if none is set
         */
        get_action_name(): (string | null);

        /**
         * Gets the current target value of `actionable`.
         * 
         * See `gtk_actionable_set_action_target_value()` for more information.
         * @returns the current target value
         */
        get_action_target_value(): GLib.Variant;

        /**
         * Specifies the name of the action with which this widget should be
         * associated.  If `action_name` is `null` then the widget will be
         * unassociated from any previous action.
         * 
         * Usually this function is used when the widget is located (or will be
         * located) within the hierarchy of a {@link Gtk.ApplicationWindow}.
         * 
         * Names are of the form “win.save” or “app.quit” for actions on the
         * containing {@link Gtk.ApplicationWindow} or its associated {@link Gtk.Application},
         * respectively.  This is the same form used for actions in the {@link Gio.Menu}
         * associated with the window.
         * @param action_name an action name, or `null`
         */
        set_action_name(action_name: (string | null)): void;

        /**
         * Sets the target value of an actionable widget.
         * 
         * If `target_value` is `null` then the target value is unset.
         * 
         * The target value has two purposes.  First, it is used as the
         * parameter to activation of the action associated with the
         * {@link Gtk.Actionable} widget. Second, it is used to determine if the widget
         * should be rendered as “active” — the widget is active if the state
         * is equal to the given target.
         * 
         * Consider the example of associating a set of buttons with a {@link Gio.Action}
         * with string state in a typical “radio button” situation.  Each button
         * will be associated with the same action, but with a different target
         * value for that action.  Clicking on a particular button will activate
         * the action with the target of that button, which will typically cause
         * the action’s state to change to that value.  Since the action’s state
         * is now equal to the target value of the button, the button will now
         * be rendered as active (and the other buttons, with different targets,
         * rendered inactive).
         * @param target_value a {@link GLib.Variant} to set as the target value, or `null`
         */
        set_action_target_value(target_value: (GLib.Variant | null)): void;

        /**
         * Sets the action-name and associated string target value of an
         * actionable widget.
         * 
         * `detailed_action_name` is a string in the format accepted by
         * `g_action_parse_detailed_name()`.
         * 
         * (Note that prior to version 3.22.25,
         * this function is only usable for actions with a simple "s" target, and
         * `detailed_action_name` must be of the form `"action::target"` where
         * `action` is the action name and `target` is the string to use
         * as the target.)
         * @param detailed_action_name the detailed action name
         */
        set_detailed_action_name(detailed_action_name: string): void;

        /**
         * Gets the action name for `actionable`.
         * 
         * See `gtk_actionable_set_action_name()` for more information.
         * @virtual
         */
        vfunc_get_action_name(): (string | null);

        /**
         * Gets the current target value of `actionable`.
         * 
         * See `gtk_actionable_set_action_target_value()` for more information.
         * @virtual
         */
        vfunc_get_action_target_value(): GLib.Variant;

        /**
         * Specifies the name of the action with which this widget should be
         * associated.  If `action_name` is `null` then the widget will be
         * unassociated from any previous action.
         * 
         * Usually this function is used when the widget is located (or will be
         * located) within the hierarchy of a {@link Gtk.ApplicationWindow}.
         * 
         * Names are of the form “win.save” or “app.quit” for actions on the
         * containing {@link Gtk.ApplicationWindow} or its associated {@link Gtk.Application},
         * respectively.  This is the same form used for actions in the {@link Gio.Menu}
         * associated with the window.
         * @param action_name an action name, or `null`
         * @virtual
         */
        vfunc_set_action_name(action_name: (string | null)): void;

        /**
         * Sets the target value of an actionable widget.
         * 
         * If `target_value` is `null` then the target value is unset.
         * 
         * The target value has two purposes.  First, it is used as the
         * parameter to activation of the action associated with the
         * {@link Gtk.Actionable} widget. Second, it is used to determine if the widget
         * should be rendered as “active” — the widget is active if the state
         * is equal to the given target.
         * 
         * Consider the example of associating a set of buttons with a {@link Gio.Action}
         * with string state in a typical “radio button” situation.  Each button
         * will be associated with the same action, but with a different target
         * value for that action.  Clicking on a particular button will activate
         * the action with the target of that button, which will typically cause
         * the action’s state to change to that value.  Since the action’s state
         * is now equal to the target value of the button, the button will now
         * be rendered as active (and the other buttons, with different targets,
         * rendered inactive).
         * @param target_value a {@link GLib.Variant} to set as the target value, or `null`
         * @virtual
         */
        vfunc_set_action_target_value(target_value: (GLib.Variant | null)): void;

        /**
         * This is a utility function for {@link Gtk.Activatable} implementors.
         * 
         * When implementing {@link Gtk.Activatable} you must call this when
         * handling changes of the {@link Gtk.Activatable.related_action}, and
         * you must also use this to break references in {@link GObject.Object}->dispose().
         * 
         * This function adds a reference to the currently set related
         * action for you, it also makes sure the {@link Gtk.Activatable}->update()
         * method is called when the related {@link Gtk.Action} properties change
         * and registers to the action’s proxy list.
         * 
         * > Be careful to call this before setting the local
         * > copy of the {@link Gtk.Action} property, since this function uses
         * > `gtk_activatable_get_related_action()` to retrieve the
         * > previous action.
         * @param action the {@link Gtk.Action} to set
         */
        do_set_related_action(action: Gtk.Action): void;

        /**
         * Gets the related {@link Gtk.Action} for `activatable`.
         * @returns the related {@link Gtk.Action} if one is set.
         */
        get_related_action(): Gtk.Action;

        /**
         * Gets whether this activatable should reset its layout
         * and appearance when setting the related action or when
         * the action changes appearance.
         * @returns whether `activatable` uses its actions appearance.
         */
        get_use_action_appearance(): boolean;

        /**
         * Sets the related action on the `activatable` object.
         * 
         * > {@link Gtk.Activatable} implementors need to handle the {@link Gtk.Activatable.related_action}
         * > property and call `gtk_activatable_do_set_related_action()` when it changes.
         * @param action the {@link Gtk.Action} to set
         */
        set_related_action(action: Gtk.Action): void;

        /**
         * Sets whether this activatable should reset its layout and appearance
         * when setting the related action or when the action changes appearance
         * 
         * > {@link Gtk.Activatable} implementors need to handle the
         * > {@link Gtk.Activatable.use_action_appearance} property and call
         * > `gtk_activatable_sync_action_properties()` to update `activatable`
         * > if needed.
         * @param use_appearance whether to use the actions appearance
         */
        set_use_action_appearance(use_appearance: boolean): void;

        /**
         * This is called to update the activatable completely, this is called
         * internally when the {@link Gtk.Activatable.related_action} property is set
         * or unset and by the implementing class when
         * {@link Gtk.Activatable.use_action_appearance} changes.
         * @param action the related {@link Gtk.Action} or `null`
         */
        sync_action_properties(action: (Gtk.Action | null)): void;

        /**
         * This is called to update the activatable completely, this is called
         * internally when the {@link Gtk.Activatable.related_action} property is set
         * or unset and by the implementing class when
         * {@link Gtk.Activatable.use_action_appearance} changes.
         * @param action the related {@link Gtk.Action} or `null`
         * @virtual
         */
        vfunc_sync_action_properties(action: (Gtk.Action | null)): void;

        /**
         * Called to update the activatable when its related action’s properties change.
         * You must check the {@link Gtk.Activatable.use_action_appearance} property only apply action
         * properties that are meant to effect the appearance accordingly.
         * @param action 
         * @param property_name 
         * @virtual
         */
        vfunc_update(action: Gtk.Action, property_name: string): void;

        /**
         * Emits a {@link Gtk.Widget.SignalSignatures.child_notify | Gtk.Widget::child-notify} signal for the
         * [child property][child-properties] `child_property`
         * on `widget`.
         * 
         * This is the analogue of `g_object_notify()` for child properties.
         * 
         * Also see `gtk_container_child_notify()`.
         * @param child_property the name of a child property installed on the                  class of `widget`’s parent
         */
        child_notify(child_property: string): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Container.child_notify
        child_notify(...args: never[]): any;

        /**
         * Returns whether the widget should grab focus when it is clicked with the mouse.
         * See `gtk_widget_set_focus_on_click()`.
         * @returns `true` if the widget should grab focus when it is clicked with               the mouse.
         */
        get_focus_on_click(): boolean;

        /**
         * Sets whether the widget should grab focus when it is clicked with the mouse.
         * Making mouse clicks not grab focus is useful in places like toolbars where
         * you don’t want the keyboard focus removed from the main area of the
         * application.
         * @param focus_on_click whether the widget should grab focus when clicked with the mouse
         */
        set_focus_on_click(focus_on_click: boolean): void;
    }


    namespace DialerCycleButton {
        // Signal signatures
        interface SignalSignatures extends DialerButton.SignalSignatures {
            /**
             * This signal is emitted when the cycle ends. This can either be
             * because of timeout or because `hdy_dialer_cycle_stop_cycle` got
             * called.
             * @signal
             * @deprecated since 0.0.12: This widget is considered a {@link Handy.Dialer} internal api
             * @run-last
             */
            "cycle-end": () => void;
            /**
             * This signal is emitted when the button starts cycling (that is on
             * the first button press).
             * @signal
             * @deprecated since 0.0.12: This widget is considered a {@link Handy.Dialer} internal api
             * @run-last
             */
            "cycle-start": () => void;
            "notify::cycle-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::digit": (pspec: GObject.ParamSpec) => void;
            "notify::symbols": (pspec: GObject.ParamSpec) => void;
            "notify::always-show-image": (pspec: GObject.ParamSpec) => void;
            "notify::image": (pspec: GObject.ParamSpec) => void;
            "notify::image-position": (pspec: GObject.ParamSpec) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::relief": (pspec: GObject.ParamSpec) => void;
            "notify::use-stock": (pspec: GObject.ParamSpec) => void;
            "notify::use-underline": (pspec: GObject.ParamSpec) => void;
            "notify::xalign": (pspec: GObject.ParamSpec) => void;
            "notify::yalign": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends DialerButton.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Actionable.ConstructorProps, Gtk.Activatable.ConstructorProps, Gtk.Buildable.ConstructorProps {
            cycle_timeout: number;
            cycleTimeout: number;
        }
    }

    /**
     * @gir-type Class
     */
    class DialerCycleButton extends DialerButton implements Atk.ImplementorIface, Gtk.Actionable, Gtk.Activatable, Gtk.Buildable {
        static $gtype: GObject.GType<DialerCycleButton>;

        // Properties
        /**
         * @default 1000
         */
        get cycle_timeout(): number;
        set cycle_timeout(val: number);

        /**
         * @default 1000
         */
        get cycleTimeout(): number;
        set cycleTimeout(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DialerCycleButton.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<DialerCycleButton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](symbols: string): DialerCycleButton;

        // Conflicted with Handy.DialerButton.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof DialerCycleButton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DialerCycleButton.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DialerCycleButton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DialerCycleButton.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DialerCycleButton.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DialerCycleButton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_cycle_end(): void;

        /**
         * @virtual
         */
        vfunc_cycle_start(): void;

        // Methods
        /**
         * Get the symbol the dialer should display
         * @returns a pointer to the symbol
         */
        get_current_symbol(): string;

        /**
         * Get the cycle timeout in milliseconds.
         */
        get_cycle_timeout(): number;

        /**
         * Check whether the button is in cycling mode.
         * @returns `TRUE` if the in cycling mode otherwise `FALSE`
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

        /**
         * Emits a {@link Gtk.Widget.SignalSignatures.child_notify | Gtk.Widget::child-notify} signal for the
         * [child property][child-properties] `child_property`
         * on `widget`.
         * 
         * This is the analogue of `g_object_notify()` for child properties.
         * 
         * Also see `gtk_container_child_notify()`.
         * @param child_property the name of a child property installed on the                  class of `widget`’s parent
         */
        child_notify(child_property: string): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Container.child_notify
        child_notify(...args: never[]): any;

        /**
         * Returns whether the widget should grab focus when it is clicked with the mouse.
         * See `gtk_widget_set_focus_on_click()`.
         * @returns `true` if the widget should grab focus when it is clicked with               the mouse.
         */
        get_focus_on_click(): boolean;

        /**
         * Sets whether the widget should grab focus when it is clicked with the mouse.
         * Making mouse clicks not grab focus is useful in places like toolbars where
         * you don’t want the keyboard focus removed from the main area of the
         * application.
         * @param focus_on_click whether the widget should grab focus when clicked with the mouse
         */
        set_focus_on_click(focus_on_click: boolean): void;
    }


    namespace Dialog {
        // Signal signatures
        interface SignalSignatures extends Gtk.Dialog.SignalSignatures {
            "notify::narrow": (pspec: GObject.ParamSpec) => void;
            "notify::use-header-bar": (pspec: GObject.ParamSpec) => void;
            "notify::accept-focus": (pspec: GObject.ParamSpec) => void;
            "notify::application": (pspec: GObject.ParamSpec) => void;
            "notify::attached-to": (pspec: GObject.ParamSpec) => void;
            "notify::decorated": (pspec: GObject.ParamSpec) => void;
            "notify::default-height": (pspec: GObject.ParamSpec) => void;
            "notify::default-width": (pspec: GObject.ParamSpec) => void;
            "notify::deletable": (pspec: GObject.ParamSpec) => void;
            "notify::destroy-with-parent": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-map": (pspec: GObject.ParamSpec) => void;
            "notify::focus-visible": (pspec: GObject.ParamSpec) => void;
            "notify::gravity": (pspec: GObject.ParamSpec) => void;
            "notify::has-resize-grip": (pspec: GObject.ParamSpec) => void;
            "notify::has-toplevel-focus": (pspec: GObject.ParamSpec) => void;
            "notify::hide-titlebar-when-maximized": (pspec: GObject.ParamSpec) => void;
            "notify::icon": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::is-active": (pspec: GObject.ParamSpec) => void;
            "notify::is-maximized": (pspec: GObject.ParamSpec) => void;
            "notify::mnemonics-visible": (pspec: GObject.ParamSpec) => void;
            "notify::modal": (pspec: GObject.ParamSpec) => void;
            "notify::resizable": (pspec: GObject.ParamSpec) => void;
            "notify::resize-grip-visible": (pspec: GObject.ParamSpec) => void;
            "notify::role": (pspec: GObject.ParamSpec) => void;
            "notify::screen": (pspec: GObject.ParamSpec) => void;
            "notify::skip-pager-hint": (pspec: GObject.ParamSpec) => void;
            "notify::skip-taskbar-hint": (pspec: GObject.ParamSpec) => void;
            "notify::startup-id": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::transient-for": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::type-hint": (pspec: GObject.ParamSpec) => void;
            "notify::urgency-hint": (pspec: GObject.ParamSpec) => void;
            "notify::window-position": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Dialog.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            narrow: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class Dialog extends Gtk.Dialog implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<Dialog>;

        // Properties
        /**
         * `true` if the dialog is narrow.
         * @since 0.0.11
         * @read-only
         * @default false
         */
        get narrow(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Dialog.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Dialog.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](parent: Gtk.Window): Dialog;

        // Conflicted with Gtk.Dialog.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof Dialog.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Dialog.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Dialog.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Dialog.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Dialog.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Dialog.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets whether `self` is narrow.
         * @returns `true` if `self` is narrow, `false` otherwise.
         */
        get_narrow(): boolean;
    }


    namespace EnumValueObject {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class EnumValueObject extends GObject.Object {
        static $gtype: GObject.GType<EnumValueObject>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: EnumValueObject.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<EnumValueObject.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](enum_value: GObject.EnumValue): EnumValueObject;

        // Signals
        /** @signal */
        connect<K extends keyof EnumValueObject.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EnumValueObject.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof EnumValueObject.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EnumValueObject.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof EnumValueObject.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<EnumValueObject.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_name(): string;

        get_nick(): string;

        get_value(): number;
    }


    namespace ExpanderRow {
        // Signal signatures
        interface SignalSignatures extends ActionRow.SignalSignatures {
            "notify::enable-expansion": (pspec: GObject.ParamSpec) => void;
            "notify::expanded": (pspec: GObject.ParamSpec) => void;
            "notify::show-enable-switch": (pspec: GObject.ParamSpec) => void;
            "notify::activatable-widget": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::subtitle": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::use-underline": (pspec: GObject.ParamSpec) => void;
            "notify::activatable": (pspec: GObject.ParamSpec) => void;
            "notify::selectable": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends ActionRow.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Actionable.ConstructorProps, Gtk.Buildable.ConstructorProps {
            enable_expansion: boolean;
            enableExpansion: boolean;
            expanded: boolean;
            show_enable_switch: boolean;
            showEnableSwitch: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class ExpanderRow extends ActionRow implements Atk.ImplementorIface, Gtk.Actionable, Gtk.Buildable {
        static $gtype: GObject.GType<ExpanderRow>;

        // Properties
        /**
         * `true` if the expansion is enabled.
         * @default true
         */
        get enable_expansion(): boolean;
        set enable_expansion(val: boolean);

        /**
         * `true` if the expansion is enabled.
         * @default true
         */
        get enableExpansion(): boolean;
        set enableExpansion(val: boolean);

        /**
         * `true` if the row is expanded.
         * @default false
         */
        get expanded(): boolean;
        set expanded(val: boolean);

        /**
         * `true` if the switch enabling the expansion is visible.
         * @default false
         */
        get show_enable_switch(): boolean;
        set show_enable_switch(val: boolean);

        /**
         * `true` if the switch enabling the expansion is visible.
         * @default false
         */
        get showEnableSwitch(): boolean;
        set showEnableSwitch(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ExpanderRow.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ExpanderRow.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): ExpanderRow;

        // Signals
        /** @signal */
        connect<K extends keyof ExpanderRow.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ExpanderRow.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ExpanderRow.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ExpanderRow.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ExpanderRow.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ExpanderRow.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets whether the expansion of `self` is enabled.
         * @returns whether the expansion of `self` is enabled.
         */
        get_enable_expansion(): boolean;

        get_expanded(): boolean;

        /**
         * Gets whether the switch enabling the expansion of `self` is visible.
         * @returns whether the switch enabling the expansion of `self` is visible.
         */
        get_show_enable_switch(): boolean;

        /**
         * Sets whether the expansion of `self` is enabled.
         * @param enable_expansion `true` to enable the expansion
         */
        set_enable_expansion(enable_expansion: boolean): void;

        /**
         * @param expanded 
         */
        set_expanded(expanded: boolean): void;

        /**
         * Sets whether the switch enabling the expansion of `self` is visible.
         * @param show_enable_switch `true` to show the switch enabling the expansion
         */
        set_show_enable_switch(show_enable_switch: boolean): void;

        /**
         * For widgets that can be “activated” (buttons, menu items, etc.)
         * this function activates them. Activation is what happens when you
         * press Enter on a widget during key navigation. If `widget` isn't
         * activatable, the function returns `false`.
         * @returns `true` if the widget was activatable
         */
        activate(): boolean;

        /**
         * @param args 
         */
        // Conflicted with Handy.ActionRow.activate
        activate(...args: never[]): any;

        /**
         * Emits a {@link Gtk.Widget.SignalSignatures.child_notify | Gtk.Widget::child-notify} signal for the
         * [child property][child-properties] `child_property`
         * on `widget`.
         * 
         * This is the analogue of `g_object_notify()` for child properties.
         * 
         * Also see `gtk_container_child_notify()`.
         * @param child_property the name of a child property installed on the                  class of `widget`’s parent
         */
        child_notify(child_property: string): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Container.child_notify
        child_notify(...args: never[]): any;
    }


    namespace HeaderBar {
        // Signal signatures
        interface SignalSignatures extends Gtk.Container.SignalSignatures {
            "notify::centering-policy": (pspec: GObject.ParamSpec) => void;
            "notify::custom-title": (pspec: GObject.ParamSpec) => void;
            "notify::decoration-layout": (pspec: GObject.ParamSpec) => void;
            "notify::decoration-layout-set": (pspec: GObject.ParamSpec) => void;
            "notify::has-subtitle": (pspec: GObject.ParamSpec) => void;
            "notify::interpolate-size": (pspec: GObject.ParamSpec) => void;
            "notify::show-close-button": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::subtitle": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::transition-duration": (pspec: GObject.ParamSpec) => void;
            "notify::transition-running": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Container.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            centering_policy: CenteringPolicy;
            centeringPolicy: CenteringPolicy;
            custom_title: (Gtk.Widget | null);
            customTitle: (Gtk.Widget | null);
            decoration_layout: string;
            decorationLayout: string;
            decoration_layout_set: boolean;
            decorationLayoutSet: boolean;
            has_subtitle: boolean;
            hasSubtitle: boolean;
            interpolate_size: boolean;
            interpolateSize: boolean;
            show_close_button: boolean;
            showCloseButton: boolean;
            spacing: number;
            subtitle: (string | null);
            title: (string | null);
            transition_duration: number;
            transitionDuration: number;
            transition_running: boolean;
            transitionRunning: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class HeaderBar extends Gtk.Container implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<HeaderBar>;

        // Properties
        /**
         * @default Handy.CenteringPolicy.LOOSE
         */
        get centering_policy(): CenteringPolicy;
        set centering_policy(val: CenteringPolicy);

        /**
         * @default Handy.CenteringPolicy.LOOSE
         */
        get centeringPolicy(): CenteringPolicy;
        set centeringPolicy(val: CenteringPolicy);

        get custom_title(): (Gtk.Widget | null);
        set custom_title(val: (Gtk.Widget | null));

        get customTitle(): (Gtk.Widget | null);
        set customTitle(val: (Gtk.Widget | null));

        /**
         * The decoration layout for buttons. If this property is
         * not set, the {@link Gtk.Settings.gtk_decoration_layout} setting
         * is used.
         * 
         * See `hdy_header_bar_set_decoration_layout()` for information
         * about the format of this string.
         * @since 0.0.10
         * @default null
         */
        get decoration_layout(): string;
        set decoration_layout(val: string);

        /**
         * The decoration layout for buttons. If this property is
         * not set, the {@link Gtk.Settings.gtk_decoration_layout} setting
         * is used.
         * 
         * See `hdy_header_bar_set_decoration_layout()` for information
         * about the format of this string.
         * @since 0.0.10
         * @default null
         */
        get decorationLayout(): string;
        set decorationLayout(val: string);

        /**
         * Set to `true` if {@link Handy.HeaderBar.decoration_layout} is set.
         * @since 0.0.10
         * @default false
         */
        get decoration_layout_set(): boolean;
        set decoration_layout_set(val: boolean);

        /**
         * Set to `true` if {@link Handy.HeaderBar.decoration_layout} is set.
         * @since 0.0.10
         * @default false
         */
        get decorationLayoutSet(): boolean;
        set decorationLayoutSet(val: boolean);

        /**
         * If `true`, reserve space for a subtitle, even if none
         * is currently set.
         * @since 0.0.10
         * @default true
         */
        get has_subtitle(): boolean;
        set has_subtitle(val: boolean);

        /**
         * If `true`, reserve space for a subtitle, even if none
         * is currently set.
         * @since 0.0.10
         * @default true
         */
        get hasSubtitle(): boolean;
        set hasSubtitle(val: boolean);

        /**
         * @default false
         */
        get interpolate_size(): boolean;
        set interpolate_size(val: boolean);

        /**
         * @default false
         */
        get interpolateSize(): boolean;
        set interpolateSize(val: boolean);

        /**
         * Whether to show window decorations.
         * 
         * Which buttons are actually shown and where is determined
         * by the {@link Handy.HeaderBar.decoration_layout} property, and by
         * the state of the window (e.g. a close button will not be
         * shown if the window can't be closed).
         * @since 0.0.10
         * @default false
         */
        get show_close_button(): boolean;
        set show_close_button(val: boolean);

        /**
         * Whether to show window decorations.
         * 
         * Which buttons are actually shown and where is determined
         * by the {@link Handy.HeaderBar.decoration_layout} property, and by
         * the state of the window (e.g. a close button will not be
         * shown if the window can't be closed).
         * @since 0.0.10
         * @default false
         */
        get showCloseButton(): boolean;
        set showCloseButton(val: boolean);

        /**
         * @default 6
         */
        get spacing(): number;
        set spacing(val: number);

        /**
         * @default null
         */
        get subtitle(): (string | null);
        set subtitle(val: (string | null));

        /**
         * @default null
         */
        get title(): (string | null);
        set title(val: (string | null));

        /**
         * @default 200
         */
        get transition_duration(): number;
        set transition_duration(val: number);

        /**
         * @default 200
         */
        get transitionDuration(): number;
        set transitionDuration(val: number);

        /**
         * @read-only
         * @default false
         */
        get transition_running(): boolean;

        /**
         * @read-only
         * @default false
         */
        get transitionRunning(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: HeaderBar.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<HeaderBar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): HeaderBar;

        // Signals
        /** @signal */
        connect<K extends keyof HeaderBar.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, HeaderBar.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof HeaderBar.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, HeaderBar.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof HeaderBar.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<HeaderBar.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets the policy `self` follows to horizontally align its center widget.
         * @returns the centering policy
         */
        get_centering_policy(): CenteringPolicy;

        /**
         * Retrieves the custom title widget of the header. See
         * `hdy_header_bar_set_custom_title()`.
         * @returns the custom title widget    of the header, or `null` if none has been set explicitly.
         */
        get_custom_title(): (Gtk.Widget | null);

        /**
         * Gets the decoration layout set with
         * `hdy_header_bar_set_decoration_layout()`.
         * @returns the decoration layout
         */
        get_decoration_layout(): string;

        /**
         * Retrieves whether the header bar reserves space for
         * a subtitle, regardless if one is currently set or not.
         * @returns `true` if the header bar reserves space     for a subtitle
         */
        get_has_subtitle(): boolean;

        /**
         * Gets wether `self` should interpolate its size on visible child change.
         * 
         * See `hdy_header_bar_set_interpolate_size()`.
         * @returns `true` if `self` interpolates its size on visible child change, `false` if not
         */
        get_interpolate_size(): boolean;

        /**
         * Returns whether this header bar shows the standard window
         * decorations.
         * @returns `true` if the decorations are shown
         */
        get_show_close_button(): boolean;

        /**
         * Retrieves the subtitle of the header. See `hdy_header_bar_set_subtitle()`.
         * @returns the subtitle of the header, or `null` if none has    been set explicitly. The returned string is owned by the widget    and must not be modified or freed.
         */
        get_subtitle(): (string | null);

        /**
         * Retrieves the title of the header. See `hdy_header_bar_set_title()`.
         * @returns the title of the header, or `null` if none has    been set explicitly. The returned string is owned by the widget    and must not be modified or freed.
         */
        get_title(): (string | null);

        /**
         * Returns the amount of time (in milliseconds) that
         * transitions between pages in `self` will take.
         * @returns the transition duration
         */
        get_transition_duration(): number;

        /**
         * Returns whether the `self` is currently in a transition from one page to
         * another.
         * @returns `true` if the transition is currently running, `false` otherwise.
         */
        get_transition_running(): boolean;

        /**
         * Adds `child` to `self`:, packed with reference to the
         * end of the `self`:.
         * @param child the {@link Gtk.Widget} to be added to `self`:
         */
        pack_end(child: Gtk.Widget): void;

        /**
         * Adds `child` to `self`:, packed with reference to the
         * start of the `self`:.
         * @param child the {@link Gtk.Widget} to be added to `self`:
         */
        pack_start(child: Gtk.Widget): void;

        /**
         * Sets the policy `self` must follow to horizontally align its center widget.
         * @param centering_policy the centering policy
         */
        set_centering_policy(centering_policy: CenteringPolicy): void;

        /**
         * Sets a custom title for the {@link Handy.HeaderBar}.
         * 
         * The title should help a user identify the current view. This
         * supersedes any title set by `hdy_header_bar_set_title()` or
         * `hdy_header_bar_set_subtitle()`. To achieve the same style as
         * the builtin title and subtitle, use the “title” and “subtitle”
         * style classes.
         * 
         * You should set the custom title to `null`, for the header title
         * label to be visible again.
         * @param title_widget a custom widget to use for a title
         */
        set_custom_title(title_widget: (Gtk.Widget | null)): void;

        /**
         * Sets the decoration layout for this header bar, overriding
         * the {@link Gtk.Settings.gtk_decoration_layout} setting.
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
         * @param layout a decoration layout, or `null` to     unset the layout
         */
        set_decoration_layout(layout: (string | null)): void;

        /**
         * Sets whether the header bar should reserve space
         * for a subtitle, even if none is currently set.
         * @param setting `true` to reserve space for a subtitle
         */
        set_has_subtitle(setting: boolean): void;

        /**
         * Sets whether or not `self` will interpolate the size of its opposing
         * orientation when changing the visible child. If `true`, `self` will interpolate
         * its size between the one of the previous visible child and the one of the new
         * visible child, according to the set transition duration and the orientation,
         * e.g. if `self` is horizontal, it will interpolate the its height.
         * @param interpolate_size `true` to interpolate the size
         */
        set_interpolate_size(interpolate_size: boolean): void;

        /**
         * Sets whether this header bar shows the standard window decorations,
         * including close, maximize, and minimize.
         * @param setting `true` to show standard window decorations
         */
        set_show_close_button(setting: boolean): void;

        /**
         * Sets the subtitle of the {@link Handy.HeaderBar}. The title should give a user
         * an additional detail to help him identify the current view.
         * 
         * Note that HdyHeaderBar by default reserves room for the subtitle,
         * even if none is currently set. If this is not desired, set the
         * {@link Handy.HeaderBar.has_subtitle} property to `false`.
         * @param subtitle a subtitle, or `null`
         */
        set_subtitle(subtitle: (string | null)): void;

        /**
         * Sets the title of the {@link Handy.HeaderBar}. The title should help a user
         * identify the current view. A good title should not include the
         * application name.
         * @param title a title, or `null`
         */
        set_title(title: (string | null)): void;

        /**
         * Sets the duration that transitions between pages in `self`
         * will take.
         * @param duration the new duration, in milliseconds
         */
        set_transition_duration(duration: number): void;
    }


    namespace HeaderGroup {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::focus": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gtk.Buildable.ConstructorProps {
            focus: (Gtk.HeaderBar | null);
        }
    }

    /**
     * @gir-type Class
     */
    class HeaderGroup extends GObject.Object implements Gtk.Buildable {
        static $gtype: GObject.GType<HeaderGroup>;

        // Properties
        /**
         * The the currently focused header bar. If `null`, the decoration will be
         * spread as if the header bars of the group were only one, otherwise the
         * focused header bar will be the only one to receive the decoration.
         */
        get focus(): (Gtk.HeaderBar | null);
        set focus(val: (Gtk.HeaderBar | null));

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: HeaderGroup.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<HeaderGroup.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): HeaderGroup;

        // Signals
        /** @signal */
        connect<K extends keyof HeaderGroup.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, HeaderGroup.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof HeaderGroup.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, HeaderGroup.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof HeaderGroup.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<HeaderGroup.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Adds a header bar to a {@link Handy.HeaderGroup}. The decoration layout of the
         * widgets will be edited depending on their position in the composite header
         * bar, the start widget displaying only the start of the user's decoration
         * layout and the end widget displaying only its end while widgets in the middle
         * won't display anything. A header bar can be set as having the focus to
         * display all the decorations. See `gtk_header_bar_set_decoration_layout()`.
         * 
         * When the widget is destroyed or no longer referenced elsewhere, it will
         * be removed from the header group.
         * @param header_bar the {@link Gtk.HeaderBar} to add
         */
        add_header_bar(header_bar: Gtk.HeaderBar): void;

        /**
         * @returns The currently focused header bar
         */
        get_focus(): (Gtk.HeaderBar | null);

        /**
         * Returns the list of headerbars associated with `self`.
         * @returns a {@link GLib.SList} of   headerbars. The list is owned by libhandy and should not be modified.
         */
        get_header_bars(): Gtk.HeaderBar[];

        /**
         * Removes a widget from a {@link Handy.HeaderGroup}
         * @param header_bar the {@link Gtk.HeaderBar} to remove
         */
        remove_header_bar(header_bar: Gtk.HeaderBar): void;

        /**
         * Sets the the currently focused header bar. If `header_bar` is `null`, the
         * decoration will be spread as if the header bars of the group were only one,
         * otherwise `header_bar` will be the only one to receive the decoration.
         * @param header_bar a {@link Gtk.HeaderBar} of `self`, or `null`
         */
        set_focus(header_bar: (Gtk.HeaderBar | null)): void;

        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a {@link Gtk.Builder}
         * @param child child to add
         * @param type kind of child or `null`
         */
        add_child(builder: Gtk.Builder, child: GObject.Object, type: (string | null)): void;

        /**
         * Constructs a child of `buildable` with the name `name`.
         * 
         * {@link Gtk.Builder} calls this function if a “constructor” has been
         * specified in the UI definition.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param name name of child to construct
         * @returns the constructed child
         */
        construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

        /**
         * This is similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         */
        custom_finished(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * This is called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         */
        custom_tag_end(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * This is called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @returns `true` if a object has a custom implementation, `false`          if it doesn't.
         */
        custom_tag_start(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string): [boolean, GLib.MarkupParser, null];

        /**
         * Get the internal child called `childname` of the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param childname name of child
         * @returns the internal child of the buildable object
         */
        get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

        /**
         * Gets the name of the `buildable` object.
         * 
         * {@link Gtk.Builder} sets the name based on the
         * [GtkBuilder UI definition][BUILDER-UI]
         * used to construct the `buildable`.
         * @returns the name set with `gtk_buildable_set_name()`
         */
        get_name(): string;

        /**
         * Called when the builder finishes the parsing of a
         * [GtkBuilder UI definition][BUILDER-UI].
         * Note that this will be called once for each time
         * `gtk_builder_add_from_file()` or `gtk_builder_add_from_string()`
         * is called on a builder.
         * @param builder a {@link Gtk.Builder}
         */
        parser_finished(builder: Gtk.Builder): void;

        /**
         * Sets the property name `name` to `value` on the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param name name of property
         * @param value value of property
         */
        set_buildable_property(builder: Gtk.Builder, name: string, value: (GObject.Value | any)): void;

        /**
         * Sets the name of the `buildable` object.
         * @param name name to set
         */
        set_name(name: string): void;

        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a {@link Gtk.Builder}
         * @param child child to add
         * @param type kind of child or `null`
         * @virtual
         */
        vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type: (string | null)): void;

        /**
         * Constructs a child of `buildable` with the name `name`.
         * 
         * {@link Gtk.Builder} calls this function if a “constructor” has been
         * specified in the UI definition.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param name name of child to construct
         * @virtual
         */
        vfunc_construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

        /**
         * This is similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         * @virtual
         */
        vfunc_custom_finished(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * This is called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * This is called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string): [boolean, GLib.MarkupParser, never];

        /**
         * Get the internal child called `childname` of the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param childname name of child
         * @virtual
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

        /**
         * Gets the name of the `buildable` object.
         * 
         * {@link Gtk.Builder} sets the name based on the
         * [GtkBuilder UI definition][BUILDER-UI]
         * used to construct the `buildable`.
         * @virtual
         */
        vfunc_get_name(): string;

        /**
         * Called when the builder finishes the parsing of a
         * [GtkBuilder UI definition][BUILDER-UI].
         * Note that this will be called once for each time
         * `gtk_builder_add_from_file()` or `gtk_builder_add_from_string()`
         * is called on a builder.
         * @param builder a {@link Gtk.Builder}
         * @virtual
         */
        vfunc_parser_finished(builder: Gtk.Builder): void;

        /**
         * Sets the property name `name` to `value` on the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param name name of property
         * @param value value of property
         * @virtual
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: unknown): void;

        /**
         * Sets the name of the `buildable` object.
         * @param name name to set
         * @virtual
         */
        vfunc_set_name(name: string): void;
    }


    namespace Keypad {
        // Signal signatures
        interface SignalSignatures extends Gtk.Grid.SignalSignatures {
            "notify::entry": (pspec: GObject.ParamSpec) => void;
            "notify::left-action": (pspec: GObject.ParamSpec) => void;
            "notify::only-digits": (pspec: GObject.ParamSpec) => void;
            "notify::right-action": (pspec: GObject.ParamSpec) => void;
            "notify::show-symbols": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-row": (pspec: GObject.ParamSpec) => void;
            "notify::column-homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::column-spacing": (pspec: GObject.ParamSpec) => void;
            "notify::row-homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::row-spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Grid.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {
            entry: Gtk.Widget;
            left_action: Gtk.Widget;
            leftAction: Gtk.Widget;
            only_digits: boolean;
            onlyDigits: boolean;
            right_action: Gtk.Widget;
            rightAction: Gtk.Widget;
            show_symbols: boolean;
            showSymbols: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class Keypad extends Gtk.Grid implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<Keypad>;

        // Properties
        get entry(): Gtk.Widget;
        set entry(val: Gtk.Widget);

        /**
         * @write-only
         */
        set left_action(val: Gtk.Widget);

        /**
         * @write-only
         */
        set leftAction(val: Gtk.Widget);

        /**
         * @default false
         */
        get only_digits(): boolean;
        set only_digits(val: boolean);

        /**
         * @default false
         */
        get onlyDigits(): boolean;
        set onlyDigits(val: boolean);

        /**
         * @write-only
         */
        set right_action(val: Gtk.Widget);

        /**
         * @write-only
         */
        set rightAction(val: Gtk.Widget);

        /**
         * @default true
         */
        get show_symbols(): boolean;
        set show_symbols(val: boolean);

        /**
         * @default true
         */
        get showSymbols(): boolean;
        set showSymbols(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Keypad.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Keypad.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](only_digits: boolean, show_symbols: boolean): Keypad;

        // Conflicted with Gtk.Grid.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof Keypad.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Keypad.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Keypad.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Keypad.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Keypad.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Keypad.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Get the connected entry. See hdy_keypad_set_entry () for details
         * @returns the set {@link Gtk.Entry} or NULL if no widget was set
         */
        get_entry(): Gtk.Widget;

        /**
         * Binds a {@link Gtk.Entry} to the keypad and it blocks every
         * input which wouldn't be possible to type with with the keypad
         * @param entry a {@link Gtk.Entry}
         */
        set_entry(entry: Gtk.Entry): void;

        /**
         * Sets the widget for the left lower corner of {@link Handy.Keypad} replacing the existing widget, if NULL it just removes whatever widget is there
         * @param widget nullable: the widget which should be show in the left lower corner of {@link Handy.Keypad}
         */
        set_left_action(widget: Gtk.Widget): void;

        /**
         * Sets the widget for the right lower corner of {@link Handy.Keypad} replacing the existing widget, if NULL it just removes whatever widget is there
         * @param widget nullable: the widget which should be show in the right lower corner of {@link Handy.Keypad}
         */
        set_right_action(widget: Gtk.Widget): void;

        /**
         * The orientation of the orientable.
         * @since 2.16
         * @default Gtk.Orientation.HORIZONTAL
          * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`.
         */
        get_orientation(): Gtk.Orientation;

        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }


    namespace Leaflet {
        // Signal signatures
        interface SignalSignatures extends Gtk.Container.SignalSignatures {
            "notify::can-swipe-back": (pspec: GObject.ParamSpec) => void;
            "notify::can-swipe-forward": (pspec: GObject.ParamSpec) => void;
            "notify::child-transition-duration": (pspec: GObject.ParamSpec) => void;
            "notify::child-transition-running": (pspec: GObject.ParamSpec) => void;
            "notify::child-transition-type": (pspec: GObject.ParamSpec) => void;
            "notify::fold": (pspec: GObject.ParamSpec) => void;
            "notify::folded": (pspec: GObject.ParamSpec) => void;
            "notify::hhomogeneous-folded": (pspec: GObject.ParamSpec) => void;
            "notify::hhomogeneous-unfolded": (pspec: GObject.ParamSpec) => void;
            "notify::interpolate-size": (pspec: GObject.ParamSpec) => void;
            "notify::mode-transition-duration": (pspec: GObject.ParamSpec) => void;
            "notify::mode-transition-type": (pspec: GObject.ParamSpec) => void;
            "notify::transition-type": (pspec: GObject.ParamSpec) => void;
            "notify::vhomogeneous-folded": (pspec: GObject.ParamSpec) => void;
            "notify::vhomogeneous-unfolded": (pspec: GObject.ParamSpec) => void;
            "notify::visible-child": (pspec: GObject.ParamSpec) => void;
            "notify::visible-child-name": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Container.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps, Swipeable.ConstructorProps {
            can_swipe_back: boolean;
            canSwipeBack: boolean;
            can_swipe_forward: boolean;
            canSwipeForward: boolean;
            child_transition_duration: number;
            childTransitionDuration: number;
            child_transition_running: boolean;
            childTransitionRunning: boolean;
            child_transition_type: LeafletChildTransitionType;
            childTransitionType: LeafletChildTransitionType;
            fold: Fold;
            folded: boolean;
            hhomogeneous_folded: boolean;
            hhomogeneousFolded: boolean;
            hhomogeneous_unfolded: boolean;
            hhomogeneousUnfolded: boolean;
            interpolate_size: boolean;
            interpolateSize: boolean;
            mode_transition_duration: number;
            modeTransitionDuration: number;
            mode_transition_type: LeafletModeTransitionType;
            modeTransitionType: LeafletModeTransitionType;
            transition_type: LeafletTransitionType;
            transitionType: LeafletTransitionType;
            vhomogeneous_folded: boolean;
            vhomogeneousFolded: boolean;
            vhomogeneous_unfolded: boolean;
            vhomogeneousUnfolded: boolean;
            visible_child: Gtk.Widget;
            visibleChild: Gtk.Widget;
            visible_child_name: string;
            visibleChildName: string;
        }
    }

    /**
     * @gir-type Class
     */
    class Leaflet extends Gtk.Container implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable, Swipeable {
        static $gtype: GObject.GType<Leaflet>;

        // Properties
        /**
         * Whether or not `self` allows switching to the previous child that has
         * 'allow-visible' child property set to `true` via a swipe gesture.
         * @since 0.0.12
         * @default false
         */
        get can_swipe_back(): boolean;
        set can_swipe_back(val: boolean);

        /**
         * Whether or not `self` allows switching to the previous child that has
         * 'allow-visible' child property set to `true` via a swipe gesture.
         * @since 0.0.12
         * @default false
         */
        get canSwipeBack(): boolean;
        set canSwipeBack(val: boolean);

        /**
         * Whether or not `self` allows switching to the next child that has
         * 'allow-visible' child property set to `true` via a swipe gesture.
         * @since 0.0.12
         * @default false
         */
        get can_swipe_forward(): boolean;
        set can_swipe_forward(val: boolean);

        /**
         * Whether or not `self` allows switching to the next child that has
         * 'allow-visible' child property set to `true` via a swipe gesture.
         * @since 0.0.12
         * @default false
         */
        get canSwipeForward(): boolean;
        set canSwipeForward(val: boolean);

        /**
         * @default 200
         */
        get child_transition_duration(): number;
        set child_transition_duration(val: number);

        /**
         * @default 200
         */
        get childTransitionDuration(): number;
        set childTransitionDuration(val: number);

        /**
         * @read-only
         * @default false
         */
        get child_transition_running(): boolean;

        /**
         * @read-only
         * @default false
         */
        get childTransitionRunning(): boolean;

        /**
         * The type of animation used to transition between children
         * @deprecated since 0.0.12: Use {@link Handy.Leaflet.transition_type} instead
         * @default Handy.LeafletChildTransitionType.NONE
         */
        get child_transition_type(): LeafletChildTransitionType;
        set child_transition_type(val: LeafletChildTransitionType);

        /**
         * The type of animation used to transition between children
         * @deprecated since 0.0.12: Use {@link Handy.Leaflet.transition_type} instead
         * @default Handy.LeafletChildTransitionType.NONE
         */
        get childTransitionType(): LeafletChildTransitionType;
        set childTransitionType(val: LeafletChildTransitionType);

        /**
         * The fold of the leaflet.
         * 
         * The leaflet will be folded if the size allocated to it is smaller than the
         * sum of the natural size of its children, it will be unfolded otherwise.
         * 
         * See also: {@link Handy.Leaflet.folded}.
         * @read-only
         * @default Handy.Fold.UNFOLDED
         */
        get fold(): Fold;

        /**
         * `true` if the leaflet is folded.
         * 
         * This is similar to the {@link Handy.Leaflet.fold} property but expressed as a
         * `gboolean` rather than a `GEnum`. This makes it convenient to bind the
         * {@link Handy.Leaflet.fold} of a leaflet to any other `gboolean` property of other
         * {@link GObject.Object}'s using `g_object_bind_property`().
         * @read-only
         * @default false
         */
        get folded(): boolean;

        /**
         * @default true
         */
        get hhomogeneous_folded(): boolean;
        set hhomogeneous_folded(val: boolean);

        /**
         * @default true
         */
        get hhomogeneousFolded(): boolean;
        set hhomogeneousFolded(val: boolean);

        /**
         * @default false
         */
        get hhomogeneous_unfolded(): boolean;
        set hhomogeneous_unfolded(val: boolean);

        /**
         * @default false
         */
        get hhomogeneousUnfolded(): boolean;
        set hhomogeneousUnfolded(val: boolean);

        /**
         * @default false
         */
        get interpolate_size(): boolean;
        set interpolate_size(val: boolean);

        /**
         * @default false
         */
        get interpolateSize(): boolean;
        set interpolateSize(val: boolean);

        /**
         * @default 250
         */
        get mode_transition_duration(): number;
        set mode_transition_duration(val: number);

        /**
         * @default 250
         */
        get modeTransitionDuration(): number;
        set modeTransitionDuration(val: number);

        /**
         * The type of animation used to transition between mode
         * @deprecated since 0.0.12: Use {@link Handy.Leaflet.transition_type} instead
         * @default Handy.LeafletModeTransitionType.NONE
         */
        get mode_transition_type(): LeafletModeTransitionType;
        set mode_transition_type(val: LeafletModeTransitionType);

        /**
         * The type of animation used to transition between mode
         * @deprecated since 0.0.12: Use {@link Handy.Leaflet.transition_type} instead
         * @default Handy.LeafletModeTransitionType.NONE
         */
        get modeTransitionType(): LeafletModeTransitionType;
        set modeTransitionType(val: LeafletModeTransitionType);

        /**
         * The type of animation that will be used for transitions between modes and
         * children.
         * 
         * The transition type can be changed without problems at runtime, so it is
         * possible to change the animation based on the mode or child that is about
         * to become current.
         * @since 0.0.12
         * @default Handy.LeafletTransitionType.NONE
         */
        get transition_type(): LeafletTransitionType;
        set transition_type(val: LeafletTransitionType);

        /**
         * The type of animation that will be used for transitions between modes and
         * children.
         * 
         * The transition type can be changed without problems at runtime, so it is
         * possible to change the animation based on the mode or child that is about
         * to become current.
         * @since 0.0.12
         * @default Handy.LeafletTransitionType.NONE
         */
        get transitionType(): LeafletTransitionType;
        set transitionType(val: LeafletTransitionType);

        /**
         * @default true
         */
        get vhomogeneous_folded(): boolean;
        set vhomogeneous_folded(val: boolean);

        /**
         * @default true
         */
        get vhomogeneousFolded(): boolean;
        set vhomogeneousFolded(val: boolean);

        /**
         * @default false
         */
        get vhomogeneous_unfolded(): boolean;
        set vhomogeneous_unfolded(val: boolean);

        /**
         * @default false
         */
        get vhomogeneousUnfolded(): boolean;
        set vhomogeneousUnfolded(val: boolean);

        get visible_child(): Gtk.Widget;
        set visible_child(val: Gtk.Widget);

        get visibleChild(): Gtk.Widget;
        set visibleChild(val: Gtk.Widget);

        /**
         * @default null
         */
        get visible_child_name(): string;
        set visible_child_name(val: string);

        /**
         * @default null
         */
        get visibleChildName(): string;
        set visibleChildName(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Leaflet.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Leaflet.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Leaflet;

        // Signals
        /** @signal */
        connect<K extends keyof Leaflet.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Leaflet.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Leaflet.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Leaflet.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Leaflet.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Leaflet.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_todo(): void;

        // Methods
        /**
         * Returns whether the {@link Handy.Leaflet} allows swiping to the previous child.
         * @returns `true` if back swipe is enabled.
         */
        get_can_swipe_back(): boolean;

        /**
         * Returns whether the {@link Handy.Leaflet} allows swiping to the next child.
         * @returns `true` if back swipe is enabled.
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
         * @returns `true` if the transition is currently running, `false` otherwise.
         */
        get_child_transition_running(): boolean;

        /**
         * Gets the type of animation that will be used
         * for transitions between children in `self`.
         * @returns the current mode transition type of `self`
         */
        get_child_transition_type(): LeafletChildTransitionType;

        /**
         * Gets the fold of `self`.
         * @returns the fold of `self`.
         */
        get_fold(): Fold;

        /**
         * Gets whether `self` is homogeneous for the given fold and orientation.
         * See `hdy_leaflet_set_homogeneous()`.
         * @param fold the fold
         * @param orientation the orientation
         * @returns whether `self` is homogeneous for the given fold and orientation.
         */
        get_homogeneous(fold: Fold, orientation: Gtk.Orientation): boolean;

        /**
         * Returns wether the {@link Handy.Leaflet} is set up to interpolate between
         * the sizes of children on page switch.
         * @returns `true` if child sizes are interpolated
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
         * @returns the current mode transition type of `self`
         */
        get_mode_transition_type(): LeafletModeTransitionType;

        /**
         * Gets the type of animation that will be used
         * for transitions between modes and children in `self`.
         * @returns the current transition type of `self`
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
         * 'allow-visible' child property set to `true` via a swipe gesture
         * @param can_swipe_back the new value
         */
        set_can_swipe_back(can_swipe_back: boolean): void;

        /**
         * Sets whether or not `self` allows switching to the next child that has
         * 'allow-visible' child property set to `true` via a swipe gesture.
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
         * Sets the {@link Handy.Leaflet} to be homogeneous or not for the given fold and orientation.
         * If it is homogeneous, the {@link Handy.Leaflet} will request the same
         * width or height for all its children depending on the orientation.
         * If it isn't and it is folded, the leaflet may change width or height
         * when a different child becomes visible.
         * @param fold the fold
         * @param orientation the orientation
         * @param homogeneous `true` to make `self` homogeneous
         */
        set_homogeneous(fold: Fold, orientation: Gtk.Orientation, homogeneous: boolean): void;

        /**
         * Sets whether or not `self` will interpolate its size when
         * changing the visible child. If the {@link Handy.Leaflet.interpolate_size}
         * property is set to `true`, `stack` will interpolate its size between
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

        /**
         * @param visible_child 
         */
        set_visible_child(visible_child: Gtk.Widget): void;

        /**
         * @param name 
         */
        set_visible_child_name(name: string): void;

        /**
         * The orientation of the orientable.
         * @since 2.16
         * @default Gtk.Orientation.HORIZONTAL
          * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`.
         */
        get_orientation(): Gtk.Orientation;

        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation): void;

        /**
         * @param direction 
         * @param direct 
         * @virtual
         */
        vfunc_begin_swipe(direction: number, direct: boolean): void;

        /**
         * @param duration 
         * @param to 
         * @virtual
         */
        vfunc_end_swipe(duration: number, to: number): void;

        /**
         * @param index 
         * @param duration 
         * @virtual
         */
        vfunc_switch_child(index: number, duration: number): void;

        /**
         * @param value 
         * @virtual
         */
        vfunc_update_swipe(value: number): void;

        /**
         * Emits a {@link Gtk.Widget.SignalSignatures.child_notify | Gtk.Widget::child-notify} signal for the
         * [child property][child-properties] `child_property`
         * on `widget`.
         * 
         * This is the analogue of `g_object_notify()` for child properties.
         * 
         * Also see `gtk_container_child_notify()`.
         * @param child_property the name of a child property installed on the                  class of `widget`’s parent
         */
        child_notify(child_property: string): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Container.child_notify
        child_notify(...args: never[]): any;
    }


    namespace Paginator {
        // Signal signatures
        interface SignalSignatures extends Gtk.EventBox.SignalSignatures {
            /**
             * This signal is emitted after a page has been changed. This can be used to
             * implement "infinite scrolling" by connecting to this signal and amending
             * the pages.
             * @signal
             * @since 0.0.12
             * @run-last
             */
            "page-changed": (arg0: number) => void;
            "notify::allow-mouse-drag": (pspec: GObject.ParamSpec) => void;
            "notify::animation-duration": (pspec: GObject.ParamSpec) => void;
            "notify::center-content": (pspec: GObject.ParamSpec) => void;
            "notify::indicator-spacing": (pspec: GObject.ParamSpec) => void;
            "notify::indicator-style": (pspec: GObject.ParamSpec) => void;
            "notify::interactive": (pspec: GObject.ParamSpec) => void;
            "notify::n-pages": (pspec: GObject.ParamSpec) => void;
            "notify::position": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::above-child": (pspec: GObject.ParamSpec) => void;
            "notify::visible-window": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.EventBox.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps, Swipeable.ConstructorProps {
            allow_mouse_drag: boolean;
            allowMouseDrag: boolean;
            animation_duration: number;
            animationDuration: number;
            center_content: boolean;
            centerContent: boolean;
            indicator_spacing: number;
            indicatorSpacing: number;
            indicator_style: PaginatorIndicatorStyle;
            indicatorStyle: PaginatorIndicatorStyle;
            interactive: boolean;
            n_pages: number;
            nPages: number;
            position: number;
            spacing: number;
        }
    }

    /**
     * @gir-type Class
     */
    class Paginator extends Gtk.EventBox implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable, Swipeable {
        static $gtype: GObject.GType<Paginator>;

        // Properties
        /**
         * Sets whether the {@link Handy.Paginator} can be dragged with mouse pointer. If the
         * value is `false`, dragging is only available on touch.
         * 
         * This should usually be `false`.
         * @since 0.0.12
         * @default false
         */
        get allow_mouse_drag(): boolean;
        set allow_mouse_drag(val: boolean);

        /**
         * Sets whether the {@link Handy.Paginator} can be dragged with mouse pointer. If the
         * value is `false`, dragging is only available on touch.
         * 
         * This should usually be `false`.
         * @since 0.0.12
         * @default false
         */
        get allowMouseDrag(): boolean;
        set allowMouseDrag(val: boolean);

        /**
         * Animation duration in milliseconds, used by `hdy_paginator_scroll_to()`.
         * @since 0.0.11
         * @default 250
         */
        get animation_duration(): number;
        set animation_duration(val: number);

        /**
         * Animation duration in milliseconds, used by `hdy_paginator_scroll_to()`.
         * @since 0.0.11
         * @default 250
         */
        get animationDuration(): number;
        set animationDuration(val: number);

        /**
         * Whether the {@link Handy.Paginator} is centering pages. If
         * {@link Handy.Paginator.indicator_style} is `HDY_PAGINATOR_INDICATOR_STYLE_NONE`,
         * centering does nothing, otherwise it adds whitespace to the left or above
         * the pages to compensate for the indicators.
         * @since 0.0.11
         * @default false
         */
        get center_content(): boolean;
        set center_content(val: boolean);

        /**
         * Whether the {@link Handy.Paginator} is centering pages. If
         * {@link Handy.Paginator.indicator_style} is `HDY_PAGINATOR_INDICATOR_STYLE_NONE`,
         * centering does nothing, otherwise it adds whitespace to the left or above
         * the pages to compensate for the indicators.
         * @since 0.0.11
         * @default false
         */
        get centerContent(): boolean;
        set centerContent(val: boolean);

        /**
         * Spacing between content and page indicators. Does nothing if
         * {@link Handy.Paginator.indicator_style} is `HDY_PAGINATOR_INDICATOR_STYLE_NONE`.
         * @since 0.0.11
         * @default 0
         */
        get indicator_spacing(): number;
        set indicator_spacing(val: number);

        /**
         * Spacing between content and page indicators. Does nothing if
         * {@link Handy.Paginator.indicator_style} is `HDY_PAGINATOR_INDICATOR_STYLE_NONE`.
         * @since 0.0.11
         * @default 0
         */
        get indicatorSpacing(): number;
        set indicatorSpacing(val: number);

        /**
         * The style of page indicators. Depending on orientation, they are displayed
         * below or besides the pages. If the pages are meant to be centered,
         * {@link Handy.Paginator.center_content} can be used to compensate for that.
         * @since 0.0.11
         * @default Handy.PaginatorIndicatorStyle.NONE
         */
        get indicator_style(): PaginatorIndicatorStyle;
        set indicator_style(val: PaginatorIndicatorStyle);

        /**
         * The style of page indicators. Depending on orientation, they are displayed
         * below or besides the pages. If the pages are meant to be centered,
         * {@link Handy.Paginator.center_content} can be used to compensate for that.
         * @since 0.0.11
         * @default Handy.PaginatorIndicatorStyle.NONE
         */
        get indicatorStyle(): PaginatorIndicatorStyle;
        set indicatorStyle(val: PaginatorIndicatorStyle);

        /**
         * Whether `self` can be navigated. This can be used to temporarily disable
         * a {@link Handy.Paginator} to only allow navigating it in a certain state.
         * @since 0.0.11
         * @default true
         */
        get interactive(): boolean;
        set interactive(val: boolean);

        /**
         * The number of pages in a {@link Handy.Paginator}
         * @since 0.0.11
         * @read-only
         * @default 0
         */
        get n_pages(): number;

        /**
         * The number of pages in a {@link Handy.Paginator}
         * @since 0.0.11
         * @read-only
         * @default 0
         */
        get nPages(): number;

        /**
         * Current scrolling position, unitless. 1 matches 1 page. Use
         * `hdy_paginator_scroll_to()` for changing it.
         * @since 0.0.11
         * @read-only
         * @default 0
         */
        get position(): number;

        /**
         * Spacing between pages in pixels.
         * @since 0.0.11
         * @default 0
         */
        get spacing(): number;
        set spacing(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Paginator.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Paginator.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Paginator;

        // Signals
        /** @signal */
        connect<K extends keyof Paginator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Paginator.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Paginator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Paginator.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Paginator.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Paginator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Sets whether `self` can be dragged with mouse pointer
         * @returns `true` if `self` can be dragged with mouse
         */
        get_allow_mouse_drag(): boolean;

        /**
         * Gets animation duration used by `hdy_paginator_scroll_to()`.
         * @returns Animation duration in milliseconds
         */
        get_animation_duration(): number;

        /**
         * Sets whether `self` is centering pages.
         * @returns `true` if `self` is centering pages
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
         * @returns `true` if `self` can be swiped
         */
        get_interactive(): boolean;

        /**
         * Gets the number of pages in `self`.
         * @returns The number of pages in `self`
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
         * @param position the position to insert `child` in.
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
         * @param position the position to move `child` to.
         */
        reorder(child: Gtk.Widget, position: number): void;

        /**
         * Scrolls to `widget` position with an animation.
         * {@link Handy.Paginator.animation_duration} property can be used for controlling the
         * duration.
         * @param widget a child of `self`
         */
        scroll_to(widget: Gtk.Widget): void;

        /**
         * Scrolls to `widget` position with an animation.
         * @param widget a child of `self`
         * @param duration animation duration in milliseconds
         */
        scroll_to_full(widget: Gtk.Widget, duration: (bigint | number)): void;

        /**
         * Sets whether `self` can be dragged with mouse pointer. If `allow_mouse_drag`
         * is `false`, dragging is only available on touch.
         * 
         * This should usually be `false`.
         * @param allow_mouse_drag whether `self` can be dragged with mouse pointer
         */
        set_allow_mouse_drag(allow_mouse_drag: boolean): void;

        /**
         * Sets animation duration used by `hdy_paginator_scroll_to()`.
         * @param duration animation duration in milliseconds
         */
        set_animation_duration(duration: number): void;

        /**
         * Sets whether `self` is centering content. If {@link Handy.Paginator.indicator_style} is
         * `HDY_PAGINATOR_INDICATOR_STYLE_NONE`, centering does nothing, otherwise it
         * adds whitespace to the left or above the pages to compensate for the
         * indicators.
         * @param center_content whether `self` should center contents
         */
        set_center_content(center_content: boolean): void;

        /**
         * Sets spacing between content and page indicators. Does nothing if
         * {@link Handy.Paginator.indicator_style} is `HDY_PAGINATOR_INDICATOR_STYLE_NONE`.
         * @param spacing the new spacing value
         */
        set_indicator_spacing(spacing: number): void;

        /**
         * Sets style of page indicators. Depending on orientation, they are displayed
         * below or besides the pages. If the pages are meant to be centered,
         * {@link Handy.Paginator.center_content} can be used to compensate for that.
         * @param style indicator style to use
         */
        set_indicator_style(style: PaginatorIndicatorStyle): void;

        /**
         * Sets whether `self` can be navigated. This can be used to temporarily disable
         * a {@link Handy.Paginator} to only allow swiping in a certain state.
         * @param interactive whether `self` can be swiped.
         */
        set_interactive(interactive: boolean): void;

        /**
         * Sets spacing between pages in pixels.
         * @param spacing the new spacing value
         */
        set_spacing(spacing: number): void;

        /**
         * The orientation of the orientable.
         * @since 2.16
         * @default Gtk.Orientation.HORIZONTAL
          * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`.
         */
        get_orientation(): Gtk.Orientation;

        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation): void;

        /**
         * @param direction 
         * @param direct 
         * @virtual
         */
        vfunc_begin_swipe(direction: number, direct: boolean): void;

        /**
         * @param duration 
         * @param to 
         * @virtual
         */
        vfunc_end_swipe(duration: number, to: number): void;

        /**
         * @param index 
         * @param duration 
         * @virtual
         */
        vfunc_switch_child(index: number, duration: number): void;

        /**
         * @param value 
         * @virtual
         */
        vfunc_update_swipe(value: number): void;

        /**
         * Emits a {@link Gtk.Widget.SignalSignatures.child_notify | Gtk.Widget::child-notify} signal for the
         * [child property][child-properties] `child_property`
         * on `widget`.
         * 
         * This is the analogue of `g_object_notify()` for child properties.
         * 
         * Also see `gtk_container_child_notify()`.
         * @param child_property the name of a child property installed on the                  class of `widget`’s parent
         */
        child_notify(child_property: string): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Container.child_notify
        child_notify(...args: never[]): any;
    }


    namespace PreferencesGroup {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Box.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {
            description: string;
            title: string;
        }
    }

    /**
     * @gir-type Class
     */
    class PreferencesGroup extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<PreferencesGroup>;

        // Properties
        /**
         * The description for this group of preferences.
         * @since 0.0.10
         */
        get description(): string;
        set description(val: string);

        /**
         * The title for this group of preferences.
         * @since 0.0.10
         */
        get title(): string;
        set title(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PreferencesGroup.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<PreferencesGroup.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): PreferencesGroup;

        // Signals
        /** @signal */
        connect<K extends keyof PreferencesGroup.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PreferencesGroup.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof PreferencesGroup.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PreferencesGroup.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof PreferencesGroup.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PreferencesGroup.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @returns the description of `self`.
         */
        get_description(): string;

        /**
         * Gets the title of `self`.
         * @returns the title of `self`.
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

        /**
         * The orientation of the orientable.
         * @since 2.16
         * @default Gtk.Orientation.HORIZONTAL
          * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`.
         */
        get_orientation(): Gtk.Orientation;

        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }


    namespace PreferencesPage {
        // Signal signatures
        interface SignalSignatures extends Gtk.ScrolledWindow.SignalSignatures {
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::hadjustment": (pspec: GObject.ParamSpec) => void;
            "notify::hscrollbar-policy": (pspec: GObject.ParamSpec) => void;
            "notify::kinetic-scrolling": (pspec: GObject.ParamSpec) => void;
            "notify::max-content-height": (pspec: GObject.ParamSpec) => void;
            "notify::max-content-width": (pspec: GObject.ParamSpec) => void;
            "notify::min-content-height": (pspec: GObject.ParamSpec) => void;
            "notify::min-content-width": (pspec: GObject.ParamSpec) => void;
            "notify::overlay-scrolling": (pspec: GObject.ParamSpec) => void;
            "notify::propagate-natural-height": (pspec: GObject.ParamSpec) => void;
            "notify::propagate-natural-width": (pspec: GObject.ParamSpec) => void;
            "notify::shadow-type": (pspec: GObject.ParamSpec) => void;
            "notify::vadjustment": (pspec: GObject.ParamSpec) => void;
            "notify::vscrollbar-policy": (pspec: GObject.ParamSpec) => void;
            "notify::window-placement": (pspec: GObject.ParamSpec) => void;
            "notify::window-placement-set": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.ScrolledWindow.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            icon_name: (string | null);
            iconName: (string | null);
            title: (string | null);
        }
    }

    /**
     * @gir-type Class
     */
    class PreferencesPage extends Gtk.ScrolledWindow implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<PreferencesPage>;

        // Properties
        /**
         * The icon name for this page of preferences.
         * @since 0.0.10
         */
        get icon_name(): (string | null);
        set icon_name(val: (string | null));

        /**
         * The icon name for this page of preferences.
         * @since 0.0.10
         */
        get iconName(): (string | null);
        set iconName(val: (string | null));

        /**
         * The title for this page of preferences.
         * @since 0.0.10
         */
        get title(): (string | null);
        set title(val: (string | null));

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PreferencesPage.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<PreferencesPage.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): PreferencesPage;

        // Signals
        /** @signal */
        connect<K extends keyof PreferencesPage.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PreferencesPage.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof PreferencesPage.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PreferencesPage.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof PreferencesPage.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PreferencesPage.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets the icon name for `self`, or `null`.
         * @returns the icon name for `self`, or `null`.
         */
        get_icon_name(): (string | null);

        /**
         * Gets the title of `self`, or `null`.
         * @returns the title of the `self`, or `null`.
         */
        get_title(): (string | null);

        /**
         * Sets the icon name for `self`.
         * @param icon_name the icon name, or `null`
         */
        set_icon_name(icon_name: (string | null)): void;

        /**
         * Sets the title of `self`.
         * @param title the title of the page, or `null`
         */
        set_title(title: (string | null)): void;
    }


    namespace PreferencesRow {
        // Signal signatures
        interface SignalSignatures extends Gtk.ListBoxRow.SignalSignatures {
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::use-underline": (pspec: GObject.ParamSpec) => void;
            "notify::activatable": (pspec: GObject.ParamSpec) => void;
            "notify::selectable": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::action-name": (pspec: GObject.ParamSpec) => void;
            "notify::action-target": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.ListBoxRow.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Actionable.ConstructorProps, Gtk.Buildable.ConstructorProps {
            title: (string | null);
            use_underline: boolean;
            useUnderline: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class PreferencesRow extends Gtk.ListBoxRow implements Atk.ImplementorIface, Gtk.Actionable, Gtk.Buildable {
        static $gtype: GObject.GType<PreferencesRow>;

        // Properties
        /**
         * The title of the preference represented by this row.
         * @since 0.0.10
         */
        get title(): (string | null);
        set title(val: (string | null));

        /**
         * Whether an embedded underline in the text of the title indicates a
         * mnemonic.
         * @since 0.0.10
         * @default false
         */
        get use_underline(): boolean;
        set use_underline(val: boolean);

        /**
         * Whether an embedded underline in the text of the title indicates a
         * mnemonic.
         * @since 0.0.10
         * @default false
         */
        get useUnderline(): boolean;
        set useUnderline(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PreferencesRow.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<PreferencesRow.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): PreferencesRow;

        // Signals
        /** @signal */
        connect<K extends keyof PreferencesRow.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PreferencesRow.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof PreferencesRow.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PreferencesRow.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof PreferencesRow.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PreferencesRow.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets the title of the preference represented by `self`.
         * @returns the title of the preference represented          by `self`, or `null`.
         */
        get_title(): (string | null);

        /**
         * Gets whether an embedded underline in the text of the title indicates a
         * mnemonic. See `hdy_preferences_row_set_use_underline()`.
         * @returns `true` if an embedded underline in the title indicates the mnemonic          accelerator keys.
         */
        get_use_underline(): boolean;

        /**
         * Sets the title of the preference represented by `self`.
         * @param title the title, or `null`.
         */
        set_title(title: (string | null)): void;

        /**
         * If true, an underline in the text of the title indicates the next character
         * should be used for the mnemonic accelerator key.
         * @param use_underline `true` if underlines in the text indicate mnemonics
         */
        set_use_underline(use_underline: boolean): void;

        /**
         * @default null
          * @category Inherited from Gtk.Actionable
         */
        get action_name(): (string | null);
        set action_name(val: (string | null));

        /**
         * @default null
          * @category Inherited from Gtk.Actionable
         */
        get actionName(): (string | null);
        set actionName(val: (string | null));

        /** @category Inherited from Gtk.Actionable */
        get action_target(): GLib.Variant;
        set action_target(val: GLib.Variant);

        /** @category Inherited from Gtk.Actionable */
        get actionTarget(): GLib.Variant;
        set actionTarget(val: GLib.Variant);

        /**
         * Gets the action name for `actionable`.
         * 
         * See `gtk_actionable_set_action_name()` for more information.
         * @returns the action name, or `null` if none is set
         */
        get_action_name(): (string | null);

        /**
         * Gets the current target value of `actionable`.
         * 
         * See `gtk_actionable_set_action_target_value()` for more information.
         * @returns the current target value
         */
        get_action_target_value(): GLib.Variant;

        /**
         * Specifies the name of the action with which this widget should be
         * associated.  If `action_name` is `null` then the widget will be
         * unassociated from any previous action.
         * 
         * Usually this function is used when the widget is located (or will be
         * located) within the hierarchy of a {@link Gtk.ApplicationWindow}.
         * 
         * Names are of the form “win.save” or “app.quit” for actions on the
         * containing {@link Gtk.ApplicationWindow} or its associated {@link Gtk.Application},
         * respectively.  This is the same form used for actions in the {@link Gio.Menu}
         * associated with the window.
         * @param action_name an action name, or `null`
         */
        set_action_name(action_name: (string | null)): void;

        /**
         * Sets the target value of an actionable widget.
         * 
         * If `target_value` is `null` then the target value is unset.
         * 
         * The target value has two purposes.  First, it is used as the
         * parameter to activation of the action associated with the
         * {@link Gtk.Actionable} widget. Second, it is used to determine if the widget
         * should be rendered as “active” — the widget is active if the state
         * is equal to the given target.
         * 
         * Consider the example of associating a set of buttons with a {@link Gio.Action}
         * with string state in a typical “radio button” situation.  Each button
         * will be associated with the same action, but with a different target
         * value for that action.  Clicking on a particular button will activate
         * the action with the target of that button, which will typically cause
         * the action’s state to change to that value.  Since the action’s state
         * is now equal to the target value of the button, the button will now
         * be rendered as active (and the other buttons, with different targets,
         * rendered inactive).
         * @param target_value a {@link GLib.Variant} to set as the target value, or `null`
         */
        set_action_target_value(target_value: (GLib.Variant | null)): void;

        /**
         * Sets the action-name and associated string target value of an
         * actionable widget.
         * 
         * `detailed_action_name` is a string in the format accepted by
         * `g_action_parse_detailed_name()`.
         * 
         * (Note that prior to version 3.22.25,
         * this function is only usable for actions with a simple "s" target, and
         * `detailed_action_name` must be of the form `"action::target"` where
         * `action` is the action name and `target` is the string to use
         * as the target.)
         * @param detailed_action_name the detailed action name
         */
        set_detailed_action_name(detailed_action_name: string): void;

        /**
         * Gets the action name for `actionable`.
         * 
         * See `gtk_actionable_set_action_name()` for more information.
         * @virtual
         */
        vfunc_get_action_name(): (string | null);

        /**
         * Gets the current target value of `actionable`.
         * 
         * See `gtk_actionable_set_action_target_value()` for more information.
         * @virtual
         */
        vfunc_get_action_target_value(): GLib.Variant;

        /**
         * Specifies the name of the action with which this widget should be
         * associated.  If `action_name` is `null` then the widget will be
         * unassociated from any previous action.
         * 
         * Usually this function is used when the widget is located (or will be
         * located) within the hierarchy of a {@link Gtk.ApplicationWindow}.
         * 
         * Names are of the form “win.save” or “app.quit” for actions on the
         * containing {@link Gtk.ApplicationWindow} or its associated {@link Gtk.Application},
         * respectively.  This is the same form used for actions in the {@link Gio.Menu}
         * associated with the window.
         * @param action_name an action name, or `null`
         * @virtual
         */
        vfunc_set_action_name(action_name: (string | null)): void;

        /**
         * Sets the target value of an actionable widget.
         * 
         * If `target_value` is `null` then the target value is unset.
         * 
         * The target value has two purposes.  First, it is used as the
         * parameter to activation of the action associated with the
         * {@link Gtk.Actionable} widget. Second, it is used to determine if the widget
         * should be rendered as “active” — the widget is active if the state
         * is equal to the given target.
         * 
         * Consider the example of associating a set of buttons with a {@link Gio.Action}
         * with string state in a typical “radio button” situation.  Each button
         * will be associated with the same action, but with a different target
         * value for that action.  Clicking on a particular button will activate
         * the action with the target of that button, which will typically cause
         * the action’s state to change to that value.  Since the action’s state
         * is now equal to the target value of the button, the button will now
         * be rendered as active (and the other buttons, with different targets,
         * rendered inactive).
         * @param target_value a {@link GLib.Variant} to set as the target value, or `null`
         * @virtual
         */
        vfunc_set_action_target_value(target_value: (GLib.Variant | null)): void;

        /**
         * Emits a {@link Gtk.Widget.SignalSignatures.child_notify | Gtk.Widget::child-notify} signal for the
         * [child property][child-properties] `child_property`
         * on `widget`.
         * 
         * This is the analogue of `g_object_notify()` for child properties.
         * 
         * Also see `gtk_container_child_notify()`.
         * @param child_property the name of a child property installed on the                  class of `widget`’s parent
         */
        child_notify(child_property: string): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Container.child_notify
        child_notify(...args: never[]): any;
    }


    namespace PreferencesWindow {
        // Signal signatures
        interface SignalSignatures extends Gtk.Window.SignalSignatures {
            "notify::accept-focus": (pspec: GObject.ParamSpec) => void;
            "notify::application": (pspec: GObject.ParamSpec) => void;
            "notify::attached-to": (pspec: GObject.ParamSpec) => void;
            "notify::decorated": (pspec: GObject.ParamSpec) => void;
            "notify::default-height": (pspec: GObject.ParamSpec) => void;
            "notify::default-width": (pspec: GObject.ParamSpec) => void;
            "notify::deletable": (pspec: GObject.ParamSpec) => void;
            "notify::destroy-with-parent": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-map": (pspec: GObject.ParamSpec) => void;
            "notify::focus-visible": (pspec: GObject.ParamSpec) => void;
            "notify::gravity": (pspec: GObject.ParamSpec) => void;
            "notify::has-resize-grip": (pspec: GObject.ParamSpec) => void;
            "notify::has-toplevel-focus": (pspec: GObject.ParamSpec) => void;
            "notify::hide-titlebar-when-maximized": (pspec: GObject.ParamSpec) => void;
            "notify::icon": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::is-active": (pspec: GObject.ParamSpec) => void;
            "notify::is-maximized": (pspec: GObject.ParamSpec) => void;
            "notify::mnemonics-visible": (pspec: GObject.ParamSpec) => void;
            "notify::modal": (pspec: GObject.ParamSpec) => void;
            "notify::resizable": (pspec: GObject.ParamSpec) => void;
            "notify::resize-grip-visible": (pspec: GObject.ParamSpec) => void;
            "notify::role": (pspec: GObject.ParamSpec) => void;
            "notify::screen": (pspec: GObject.ParamSpec) => void;
            "notify::skip-pager-hint": (pspec: GObject.ParamSpec) => void;
            "notify::skip-taskbar-hint": (pspec: GObject.ParamSpec) => void;
            "notify::startup-id": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::transient-for": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::type-hint": (pspec: GObject.ParamSpec) => void;
            "notify::urgency-hint": (pspec: GObject.ParamSpec) => void;
            "notify::window-position": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Window.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class PreferencesWindow extends Gtk.Window implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<PreferencesWindow>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PreferencesWindow.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<PreferencesWindow.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): PreferencesWindow;

        // Signals
        /** @signal */
        connect<K extends keyof PreferencesWindow.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PreferencesWindow.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof PreferencesWindow.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PreferencesWindow.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof PreferencesWindow.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PreferencesWindow.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace SearchBar {
        // Signal signatures
        interface SignalSignatures extends Gtk.Bin.SignalSignatures {
            "notify::search-mode-enabled": (pspec: GObject.ParamSpec) => void;
            "notify::show-close-button": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Bin.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            search_mode_enabled: boolean;
            searchModeEnabled: boolean;
            show_close_button: boolean;
            showCloseButton: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class SearchBar extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<SearchBar>;

        // Properties
        /**
         * Whether the search mode is on and the search bar shown.
         * 
         * See `hdy_search_bar_set_search_mode()` for details.
         * @default false
         */
        get search_mode_enabled(): boolean;
        set search_mode_enabled(val: boolean);

        /**
         * Whether the search mode is on and the search bar shown.
         * 
         * See `hdy_search_bar_set_search_mode()` for details.
         * @default false
         */
        get searchModeEnabled(): boolean;
        set searchModeEnabled(val: boolean);

        /**
         * Whether to show the close button in the toolbar.
         * @default false
         */
        get show_close_button(): boolean;
        set show_close_button(val: boolean);

        /**
         * Whether to show the close button in the toolbar.
         * @default false
         */
        get showCloseButton(): boolean;
        set showCloseButton(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SearchBar.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<SearchBar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): SearchBar;

        // Signals
        /** @signal */
        connect<K extends keyof SearchBar.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SearchBar.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof SearchBar.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SearchBar.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof SearchBar.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SearchBar.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Connects the {@link Gtk.Entry} widget passed as the one to be used in
         * this search bar. The entry should be a descendant of the search bar.
         * This is only required if the entry isn’t the direct child of the
         * search bar (as in our main example).
         * @param entry a {@link Gtk.Entry}
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
         * be shown, the entry populated with the entered text and `GDK_EVENT_STOP`
         * will be returned. The caller should ensure that events are
         * not propagated further.
         * 
         * If no entry has been connected to the search bar, using
         * `hdy_search_bar_connect_entry()`, this function will return
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
         * @param event a {@link Gdk.Event} containing key press events
         * @returns `GDK_EVENT_STOP` if the key press event resulted     in text being entered in the search entry (and revealing     the search bar if necessary), `GDK_EVENT_PROPAGATE` otherwise.
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


    namespace Squeezer {
        // Signal signatures
        interface SignalSignatures extends Gtk.Container.SignalSignatures {
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::interpolate-size": (pspec: GObject.ParamSpec) => void;
            "notify::transition-duration": (pspec: GObject.ParamSpec) => void;
            "notify::transition-running": (pspec: GObject.ParamSpec) => void;
            "notify::transition-type": (pspec: GObject.ParamSpec) => void;
            "notify::visible-child": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Container.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {
            homogeneous: boolean;
            interpolate_size: boolean;
            interpolateSize: boolean;
            transition_duration: number;
            transitionDuration: number;
            transition_running: boolean;
            transitionRunning: boolean;
            transition_type: SqueezerTransitionType;
            transitionType: SqueezerTransitionType;
            visible_child: (Gtk.Widget | null);
            visibleChild: (Gtk.Widget | null);
        }
    }

    /**
     * @gir-type Class
     */
    class Squeezer extends Gtk.Container implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<Squeezer>;

        // Properties
        /**
         * @default false
         */
        get homogeneous(): boolean;
        set homogeneous(val: boolean);

        /**
         * @default false
         */
        get interpolate_size(): boolean;
        set interpolate_size(val: boolean);

        /**
         * @default false
         */
        get interpolateSize(): boolean;
        set interpolateSize(val: boolean);

        /**
         * @default 200
         */
        get transition_duration(): number;
        set transition_duration(val: number);

        /**
         * @default 200
         */
        get transitionDuration(): number;
        set transitionDuration(val: number);

        /**
         * @read-only
         * @default false
         */
        get transition_running(): boolean;

        /**
         * @read-only
         * @default false
         */
        get transitionRunning(): boolean;

        /**
         * @default Handy.SqueezerTransitionType.NONE
         */
        get transition_type(): SqueezerTransitionType;
        set transition_type(val: SqueezerTransitionType);

        /**
         * @default Handy.SqueezerTransitionType.NONE
         */
        get transitionType(): SqueezerTransitionType;
        set transitionType(val: SqueezerTransitionType);

        /**
         * @read-only
         */
        get visible_child(): (Gtk.Widget | null);

        /**
         * @read-only
         */
        get visibleChild(): (Gtk.Widget | null);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Squeezer.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Squeezer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Squeezer;

        // Signals
        /** @signal */
        connect<K extends keyof Squeezer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Squeezer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Squeezer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Squeezer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Squeezer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Squeezer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets whether `child` is enabled.
         * 
         * See `hdy_squeezer_set_child_enabled()`.
         * @param child a child of `self`
         * @returns `true` if `child` is enabled, `false` otherwise.
         */
        get_child_enabled(child: Gtk.Widget): boolean;

        /**
         * Gets whether `self` is homogeneous.
         * 
         * See `hdy_squeezer_set_homogeneous()`.
         * @returns `true` if `self` is homogeneous, `false` is not
         */
        get_homogeneous(): boolean;

        /**
         * Gets wether `self` should interpolate its size on visible child change.
         * 
         * See `hdy_squeezer_set_interpolate_size()`.
         * @returns `true` if `self` interpolates its size on visible child change, `false` if not
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
         * @returns `true` if the transition is currently running, `false` otherwise.
         */
        get_transition_running(): boolean;

        /**
         * Gets the type of animation that will be used for transitions between children
         * in `self`.
         * @returns the current transition type of `self`
         */
        get_transition_type(): SqueezerTransitionType;

        /**
         * Gets the currently visible child of `self`, or `null` if there are no visible
         * children.
         * @returns the visible child of the {@link Handy.Squeezer}
         */
        get_visible_child(): (Gtk.Widget | null);

        /**
         * Make `self` enable or disable `child`. If a child is disabled, it will be
         * ignored when looking for the child fitting the available size best. This
         * allows to programmatically and prematurely hide a child of `self` even if it
         * fits in the available space.
         * 
         * This can be used e.g. to ensure a certain child is hidden below a certain
         * window width, or any other constraint you find suitable.
         * @param child a child of `self`
         * @param enabled `true` to enable the child, `false` to disable it
         */
        set_child_enabled(child: Gtk.Widget, enabled: boolean): void;

        /**
         * Sets `self` to be homogeneous or not. If it is homogeneous, `self` will request
         * the same size for all its children for its opposite orientation, e.g. if
         * `self` is oriented horizontally and is homogeneous, it will request the same
         * height for all its children. If it isn't, `self` may change size when a
         * different child becomes visible.
         * @param homogeneous `true` to make `self` homogeneous
         */
        set_homogeneous(homogeneous: boolean): void;

        /**
         * Sets whether or not `self` will interpolate the size of its opposing
         * orientation when changing the visible child. If `true`, `self` will interpolate
         * its size between the one of the previous visible child and the one of the new
         * visible child, according to the set transition duration and the orientation,
         * e.g. if `self` is horizontal, it will interpolate the its height.
         * @param interpolate_size `true` to interpolate the size
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

        /**
         * The orientation of the orientable.
         * @since 2.16
         * @default Gtk.Orientation.HORIZONTAL
          * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`.
         */
        get_orientation(): Gtk.Orientation;

        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }


    namespace SwipeGroup {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gtk.Buildable.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class SwipeGroup extends GObject.Object implements Gtk.Buildable {
        static $gtype: GObject.GType<SwipeGroup>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SwipeGroup.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<SwipeGroup.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): SwipeGroup;

        // Signals
        /** @signal */
        connect<K extends keyof SwipeGroup.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SwipeGroup.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof SwipeGroup.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SwipeGroup.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof SwipeGroup.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SwipeGroup.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * When the widget is destroyed or no longer referenced elsewhere, it will
         * be removed from the swipe group.
         * @param swipeable the {@link Handy.Swipeable} to add
         */
        add_swipeable(swipeable: Swipeable): void;

        /**
         * Returns the list of swipeables associated with `self`.
         * @returns a {@link GLib.SList} of   swipeables. The list is owned by libhandy and should not be modified.
         */
        get_swipeables(): Swipeable[];

        /**
         * Removes a widget from a {@link Handy.SwipeGroup}.
         * @param swipeable the {@link Handy.Swipeable} to remove
         */
        remove_swipeable(swipeable: Swipeable): void;

        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a {@link Gtk.Builder}
         * @param child child to add
         * @param type kind of child or `null`
         */
        add_child(builder: Gtk.Builder, child: GObject.Object, type: (string | null)): void;

        /**
         * Constructs a child of `buildable` with the name `name`.
         * 
         * {@link Gtk.Builder} calls this function if a “constructor” has been
         * specified in the UI definition.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param name name of child to construct
         * @returns the constructed child
         */
        construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

        /**
         * This is similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         */
        custom_finished(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * This is called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         */
        custom_tag_end(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * This is called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @returns `true` if a object has a custom implementation, `false`          if it doesn't.
         */
        custom_tag_start(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string): [boolean, GLib.MarkupParser, null];

        /**
         * Get the internal child called `childname` of the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param childname name of child
         * @returns the internal child of the buildable object
         */
        get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

        /**
         * Gets the name of the `buildable` object.
         * 
         * {@link Gtk.Builder} sets the name based on the
         * [GtkBuilder UI definition][BUILDER-UI]
         * used to construct the `buildable`.
         * @returns the name set with `gtk_buildable_set_name()`
         */
        get_name(): string;

        /**
         * Called when the builder finishes the parsing of a
         * [GtkBuilder UI definition][BUILDER-UI].
         * Note that this will be called once for each time
         * `gtk_builder_add_from_file()` or `gtk_builder_add_from_string()`
         * is called on a builder.
         * @param builder a {@link Gtk.Builder}
         */
        parser_finished(builder: Gtk.Builder): void;

        /**
         * Sets the property name `name` to `value` on the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param name name of property
         * @param value value of property
         */
        set_buildable_property(builder: Gtk.Builder, name: string, value: (GObject.Value | any)): void;

        /**
         * Sets the name of the `buildable` object.
         * @param name name to set
         */
        set_name(name: string): void;

        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a {@link Gtk.Builder}
         * @param child child to add
         * @param type kind of child or `null`
         * @virtual
         */
        vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type: (string | null)): void;

        /**
         * Constructs a child of `buildable` with the name `name`.
         * 
         * {@link Gtk.Builder} calls this function if a “constructor” has been
         * specified in the UI definition.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param name name of child to construct
         * @virtual
         */
        vfunc_construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

        /**
         * This is similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         * @virtual
         */
        vfunc_custom_finished(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * This is called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * This is called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string): [boolean, GLib.MarkupParser, never];

        /**
         * Get the internal child called `childname` of the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param childname name of child
         * @virtual
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

        /**
         * Gets the name of the `buildable` object.
         * 
         * {@link Gtk.Builder} sets the name based on the
         * [GtkBuilder UI definition][BUILDER-UI]
         * used to construct the `buildable`.
         * @virtual
         */
        vfunc_get_name(): string;

        /**
         * Called when the builder finishes the parsing of a
         * [GtkBuilder UI definition][BUILDER-UI].
         * Note that this will be called once for each time
         * `gtk_builder_add_from_file()` or `gtk_builder_add_from_string()`
         * is called on a builder.
         * @param builder a {@link Gtk.Builder}
         * @virtual
         */
        vfunc_parser_finished(builder: Gtk.Builder): void;

        /**
         * Sets the property name `name` to `value` on the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param name name of property
         * @param value value of property
         * @virtual
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: unknown): void;

        /**
         * Sets the name of the `buildable` object.
         * @param name name to set
         * @virtual
         */
        vfunc_set_name(name: string): void;
    }


    namespace TitleBar {
        // Signal signatures
        interface SignalSignatures extends Gtk.Bin.SignalSignatures {
            "notify::selection-mode": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Bin.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            selection_mode: boolean;
            selectionMode: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class TitleBar extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<TitleBar>;

        // Properties
        /**
         * @default false
         */
        get selection_mode(): boolean;
        set selection_mode(val: boolean);

        /**
         * @default false
         */
        get selectionMode(): boolean;
        set selectionMode(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TitleBar.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<TitleBar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): TitleBar;

        // Signals
        /** @signal */
        connect<K extends keyof TitleBar.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TitleBar.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof TitleBar.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TitleBar.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof TitleBar.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<TitleBar.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Returns wether whether `self` is in selection mode.
         * @returns `true` if the title bar is in selection mode
         */
        get_selection_mode(): boolean;

        /**
         * Sets whether `self` is in selection mode.
         * @param selection_mode `true` to enable the selection mode
         */
        set_selection_mode(selection_mode: boolean): void;
    }


    namespace ValueObject {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::value": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            value: (GObject.Value | any);
        }
    }

    /**
     * @gir-type Class
     */
    class ValueObject extends GObject.Object {
        static $gtype: GObject.GType<ValueObject>;

        // Properties
        /**
         * @construct-only
         */
        get value(): unknown;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ValueObject.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ValueObject.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](value: (GObject.Value | any)): ValueObject;

        // Signals
        /** @signal */
        connect<K extends keyof ValueObject.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ValueObject.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ValueObject.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ValueObject.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ValueObject.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ValueObject.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Copy data from the contained {@link GObject.Value} into `dest`.
         * @param dest {@link GObject.Value} with correct type to copy into
         */
        copy_value(dest: (GObject.Value | any)): void;

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
         * @returns the contained {@link GObject.Value}
         */
        get_value(): unknown;
    }


    namespace ViewSwitcher {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            "notify::icon-size": (pspec: GObject.ParamSpec) => void;
            "notify::narrow-ellipsize": (pspec: GObject.ParamSpec) => void;
            "notify::policy": (pspec: GObject.ParamSpec) => void;
            "notify::stack": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Box.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {
            icon_size: number;
            iconSize: number;
            narrow_ellipsize: Pango.EllipsizeMode;
            narrowEllipsize: Pango.EllipsizeMode;
            policy: ViewSwitcherPolicy;
            stack: (Gtk.Stack | null);
        }
    }

    /**
     * @gir-type Class
     */
    class ViewSwitcher extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<ViewSwitcher>;

        // Properties
        /**
         * Use the "icon-size" property to hint the icons to use, you almost certainly
         * want to leave this as {@link Gtk.IconSize.BUTTON}.
         * @since 0.0.10
         * @default 4
         */
        get icon_size(): number;
        set icon_size(val: number);

        /**
         * Use the "icon-size" property to hint the icons to use, you almost certainly
         * want to leave this as {@link Gtk.IconSize.BUTTON}.
         * @since 0.0.10
         * @default 4
         */
        get iconSize(): number;
        set iconSize(val: number);

        /**
         * The preferred place to ellipsize the string, if the narrow mode label does
         * not have enough room to display the entire string, specified as a
         * {@link Pango.EllipsizeMode}.
         * 
         * Note that setting this property to a value other than {@link Pango.EllipsizeMode.NONE}
         * has the side-effect that the label requests only enough space to display
         * the ellipsis.
         * @since 0.0.10
         * @default Pango.EllipsizeMode.NONE
         */
        get narrow_ellipsize(): Pango.EllipsizeMode;
        set narrow_ellipsize(val: Pango.EllipsizeMode);

        /**
         * The preferred place to ellipsize the string, if the narrow mode label does
         * not have enough room to display the entire string, specified as a
         * {@link Pango.EllipsizeMode}.
         * 
         * Note that setting this property to a value other than {@link Pango.EllipsizeMode.NONE}
         * has the side-effect that the label requests only enough space to display
         * the ellipsis.
         * @since 0.0.10
         * @default Pango.EllipsizeMode.NONE
         */
        get narrowEllipsize(): Pango.EllipsizeMode;
        set narrowEllipsize(val: Pango.EllipsizeMode);

        /**
         * The {@link Handy.ViewSwitcherPolicy} the view switcher should use to determine which
         * mode to use.
         * @since 0.0.10
         * @default Handy.ViewSwitcherPolicy.AUTO
         */
        get policy(): ViewSwitcherPolicy;
        set policy(val: ViewSwitcherPolicy);

        /**
         * The {@link Gtk.Stack} the view switcher controls.
         * @since 0.0.10
         */
        get stack(): (Gtk.Stack | null);
        set stack(val: (Gtk.Stack | null));

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ViewSwitcher.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ViewSwitcher.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): ViewSwitcher;

        // Signals
        /** @signal */
        connect<K extends keyof ViewSwitcher.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ViewSwitcher.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ViewSwitcher.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ViewSwitcher.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ViewSwitcher.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ViewSwitcher.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Get the icon size of the images used in the {@link Handy.ViewSwitcher}.
         * 
         * See: `hdy_view_switcher_set_icon_size()`
         * @returns the icon size of the images
         */
        get_icon_size(): Gtk.IconSize;

        /**
         * Get the ellipsizing position of the narrow mode label. See
         * `hdy_view_switcher_set_narrow_ellipsize()`.
         * @returns {@link Pango.EllipsizeMode}
         */
        get_narrow_ellipsize(): Pango.EllipsizeMode;

        /**
         * Gets the policy of `self`.
         * @returns the policy of `self`
         */
        get_policy(): ViewSwitcherPolicy;

        /**
         * Get the {@link Gtk.Stack} being controlled by the {@link Handy.ViewSwitcher}.
         * 
         * See: `hdy_view_switcher_set_stack()`
         * @returns the {@link Gtk.Stack}, or `null` if none has been set
         */
        get_stack(): (Gtk.Stack | null);

        /**
         * Change the icon size hint for the icons in a {@link Handy.ViewSwitcher}.
         * @param icon_size the new icon size
         */
        set_icon_size(icon_size: Gtk.IconSize): void;

        /**
         * Set the mode used to ellipsize the text in narrow mode if there is not
         * enough space to render the entire string.
         * @param mode a {@link Pango.EllipsizeMode}
         */
        set_narrow_ellipsize(mode: Pango.EllipsizeMode): void;

        /**
         * Sets the policy of `self`.
         * @param policy the new policy
         */
        set_policy(policy: ViewSwitcherPolicy): void;

        /**
         * Sets the {@link Gtk.Stack} to control.
         * @param stack a {@link Gtk.Stack}
         */
        set_stack(stack: (Gtk.Stack | null)): void;

        /**
         * The orientation of the orientable.
         * @since 2.16
         * @default Gtk.Orientation.HORIZONTAL
          * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`.
         */
        get_orientation(): Gtk.Orientation;

        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }


    namespace ViewSwitcherBar {
        // Signal signatures
        interface SignalSignatures extends Gtk.Bin.SignalSignatures {
            "notify::icon-size": (pspec: GObject.ParamSpec) => void;
            "notify::policy": (pspec: GObject.ParamSpec) => void;
            "notify::reveal": (pspec: GObject.ParamSpec) => void;
            "notify::stack": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Bin.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            icon_size: number;
            iconSize: number;
            policy: ViewSwitcherPolicy;
            reveal: boolean;
            stack: (Gtk.Stack | null);
        }
    }

    /**
     * @gir-type Class
     */
    class ViewSwitcherBar extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<ViewSwitcherBar>;

        // Properties
        /**
         * Use the "icon-size" property to hint the icons to use, you almost certainly
         * want to leave this as {@link Gtk.IconSize.BUTTON}.
         * @since 0.0.10
         * @default 4
         */
        get icon_size(): number;
        set icon_size(val: number);

        /**
         * Use the "icon-size" property to hint the icons to use, you almost certainly
         * want to leave this as {@link Gtk.IconSize.BUTTON}.
         * @since 0.0.10
         * @default 4
         */
        get iconSize(): number;
        set iconSize(val: number);

        /**
         * The {@link Handy.ViewSwitcherPolicy} the {@link Handy.ViewSwitcher} should use to determine
         * which mode to use.
         * @since 0.0.10
         * @default Handy.ViewSwitcherPolicy.NARROW
         */
        get policy(): ViewSwitcherPolicy;
        set policy(val: ViewSwitcherPolicy);

        /**
         * Whether the bar should be revealed or hidden.
         * @since 0.0.10
         * @default false
         */
        get reveal(): boolean;
        set reveal(val: boolean);

        /**
         * The {@link Gtk.Stack} the {@link Handy.ViewSwitcher} controls.
         * @since 0.0.10
         */
        get stack(): (Gtk.Stack | null);
        set stack(val: (Gtk.Stack | null));

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ViewSwitcherBar.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ViewSwitcherBar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): ViewSwitcherBar;

        // Signals
        /** @signal */
        connect<K extends keyof ViewSwitcherBar.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ViewSwitcherBar.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ViewSwitcherBar.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ViewSwitcherBar.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ViewSwitcherBar.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ViewSwitcherBar.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Get the icon size of the images used in the {@link Handy.ViewSwitcher}.
         * @returns the icon size of the images
         */
        get_icon_size(): Gtk.IconSize;

        /**
         * Gets the policy of `self`.
         * @returns the policy of `self`
         */
        get_policy(): ViewSwitcherPolicy;

        /**
         * Gets whether `self` should be revealed or not.
         * @returns `true` if `self` is revealed, `false` if not.
         */
        get_reveal(): boolean;

        /**
         * Get the {@link Gtk.Stack} being controlled by the {@link Handy.ViewSwitcher}.
         * @returns the {@link Gtk.Stack}, or `null` if none has been set
         */
        get_stack(): (Gtk.Stack | null);

        /**
         * Change the icon size hint for the icons in a {@link Handy.ViewSwitcher}.
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
         * @param reveal `true` to reveal `self`
         */
        set_reveal(reveal: boolean): void;

        /**
         * Sets the {@link Gtk.Stack} to control.
         * @param stack a {@link Gtk.Stack}
         */
        set_stack(stack: (Gtk.Stack | null)): void;
    }


    /**
     * @gir-type Alias
     */
    type ActionRowClass = typeof ActionRow;

    /**
     * @gir-type Alias
     */
    type ArrowsClass = typeof Arrows;

    /**
     * @gir-type Alias
     */
    type ColumnClass = typeof Column;

    /**
     * @gir-type Alias
     */
    type ComboRowClass = typeof ComboRow;

    /**
     * @gir-type Alias
     */
    type DialerButtonClass = typeof DialerButton;

    /**
     * @gir-type Alias
     */
    type DialerClass = typeof Dialer;

    /**
     * @gir-type Alias
     */
    type DialerCycleButtonClass = typeof DialerCycleButton;

    /**
     * @gir-type Alias
     */
    type DialogClass = typeof Dialog;

    /**
     * @gir-type Alias
     */
    type EnumValueObjectClass = typeof EnumValueObject;

    /**
     * @gir-type Alias
     */
    type ExpanderRowClass = typeof ExpanderRow;

    /**
     * @gir-type Alias
     */
    type HeaderBarClass = typeof HeaderBar;

    /**
     * @gir-type Alias
     */
    type HeaderGroupClass = typeof HeaderGroup;

    /**
     * @gir-type Alias
     */
    type KeypadClass = typeof Keypad;

    /**
     * @gir-type Alias
     */
    type LeafletClass = typeof Leaflet;

    /**
     * @gir-type Alias
     */
    type PaginatorClass = typeof Paginator;

    /**
     * @gir-type Alias
     */
    type PreferencesGroupClass = typeof PreferencesGroup;

    /**
     * @gir-type Alias
     */
    type PreferencesPageClass = typeof PreferencesPage;

    /**
     * @gir-type Alias
     */
    type PreferencesRowClass = typeof PreferencesRow;

    /**
     * @gir-type Alias
     */
    type PreferencesWindowClass = typeof PreferencesWindow;

    /**
     * @gir-type Alias
     */
    type SearchBarClass = typeof SearchBar;

    /**
     * @gir-type Alias
     */
    type SqueezerClass = typeof Squeezer;

    /**
     * @gir-type Alias
     */
    type SwipeGroupClass = typeof SwipeGroup;

    /**
     * @gir-type Alias
     */
    type SwipeableInterface = typeof Swipeable;

    /**
     * @gir-type Alias
     */
    type TitleBarClass = typeof TitleBar;

    /**
     * @gir-type Alias
     */
    type ValueObjectClass = typeof ValueObject;

    /**
     * @gir-type Alias
     */
    type ViewSwitcherBarClass = typeof ViewSwitcherBar;

    /**
     * @gir-type Alias
     */
    type ViewSwitcherClass = typeof ViewSwitcher;

    namespace Swipeable {
        /**
         * Interface for implementing Swipeable.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @param direction 
             * @param direct 
             * @virtual
             */
            vfunc_begin_swipe(direction: number, direct: boolean): void;

            /**
             * @param duration 
             * @param to 
             * @virtual
             */
            vfunc_end_swipe(duration: number, to: number): void;

            /**
             * @param index 
             * @param duration 
             * @virtual
             */
            vfunc_switch_child(index: number, duration: number): void;

            /**
             * @param value 
             * @virtual
             */
            vfunc_update_swipe(value: number): void;
        }


        // Constructor properties interface
        interface ConstructorProps extends Gtk.Widget.ConstructorProps {

        }
    }

    export interface SwipeableNamespace {
        $gtype: GObject.GType<Swipeable>;
        prototype: Swipeable;
    }
    /**
     * @gir-type Interface
     */
    interface Swipeable extends Gtk.Widget, Swipeable.Interface {
    }


    export const Swipeable: SwipeableNamespace & {
        new (): Swipeable; // This allows `obj instanceof Swipeable`
    };

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
