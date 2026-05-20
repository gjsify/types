
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
     * Handy-1
     */


    /**
     * @gir-type Enum
     */
    export namespace CenteringPolicy {
        export const $gtype: GObject.GType<CenteringPolicy>;
    }

    /**
     * Describes title centering behavior of a {@link HeaderBar} widget.
     * @gir-type Enum
     * @since 1.0
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
    export namespace ColorScheme {
        export const $gtype: GObject.GType<ColorScheme>;
    }

    /**
     * Application color schemes for {@link StyleManager.color_scheme}.
     * @gir-type Enum
     * @since 1.6
     */
    enum ColorScheme {
        /**
         * Inherit the parent color-scheme. When set on the
         *   {@link StyleManager} returned by {@link StyleManager.get_default}, it's
         *   equivalent to `HDY_COLOR_SCHEME_FORCE_LIGHT`.
         */
        DEFAULT,
        /**
         * Always use light appearance.
         */
        FORCE_LIGHT,
        /**
         * Use light appearance unless the system
         *   prefers dark colors.
         */
        PREFER_LIGHT,
        /**
         * Use dark appearance unless the system prefers
         *   light colors.
         */
        PREFER_DARK,
        /**
         * Always use dark appearance.
         */
        FORCE_DARK,
    }


    /**
     * @gir-type Enum
     */
    export namespace DeckTransitionType {
        export const $gtype: GObject.GType<DeckTransitionType>;
    }

    /**
     * Describes the possible transitions in a {@link Deck} widget.
     * 
     * New values may be added to this enumeration over time.
     * @gir-type Enum
     * @since 1.0
     */
    enum DeckTransitionType {
        /**
         * Cover the old page or uncover the new page,
         *   sliding from or towards the end according to orientation, text direction
         *   and children order
         */
        OVER,
        /**
         * Uncover the new page or cover the old page,
         *   sliding from or towards the start according to orientation, text direction
         *   and children order
         */
        UNDER,
        /**
         * Slide from left, right, up or down according
         *   to the orientation, text direction and the children order
         */
        SLIDE,
    }


    /**
     * @gir-type Enum
     */
    export namespace FlapFoldPolicy {
        export const $gtype: GObject.GType<FlapFoldPolicy>;
    }

    /**
     * Describes the possible folding behavior of a {@link Flap} widget.
     * @gir-type Enum
     * @since 1.2
     */
    enum FlapFoldPolicy {
        /**
         * Disable folding, the flap cannot reach narrow
         *   sizes.
         */
        NEVER,
        /**
         * Keep the flap always folded.
         */
        ALWAYS,
        /**
         * Fold and unfold the flap based on available
         *   space.
         */
        AUTO,
    }


    /**
     * @gir-type Enum
     */
    export namespace FlapTransitionType {
        export const $gtype: GObject.GType<FlapTransitionType>;
    }

    /**
     * Describes transitions types of a {@link Flap} widget.
     * 
     * These enumeration values describe the possible transitions between children
     * in a {@link Flap} widget, as well as which areas can be swiped via
     * {@link Flap.swipe_to_open} and {@link Flap.swipe_to_close}.
     * 
     * New values may be added to this enum over time.
     * @gir-type Enum
     * @since 1.2
     */
    enum FlapTransitionType {
        /**
         * The flap slides over the content, which is
         *   dimmed. When folded, only the flap can be swiped.
         */
        OVER,
        /**
         * The content slides over the flap. Only the
         *   content can be swiped.
         */
        UNDER,
        /**
         * The flap slides offscreen when hidden,
         *   neither the flap nor content overlap each other. Both widgets can be
         *   swiped.
         */
        SLIDE,
    }


    /**
     * @gir-type Enum
     */
    export namespace HeaderGroupChildType {
        export const $gtype: GObject.GType<HeaderGroupChildType>;
    }

    /**
     * Describes the child types handled by {@link HeaderGroup}.
     * 
     * New values may be added to this enumeration over time.
     * @gir-type Enum
     * @since 1.0
     */
    enum HeaderGroupChildType {
        /**
         * The child is a {@link HeaderBar}
         */
        HEADER_BAR,
        /**
         * The child is a
         *   {@link Gtk.HeaderBar}
         */
        GTK_HEADER_BAR,
        /**
         * The child is a
         *   {@link HeaderGroup}
         */
        HEADER_GROUP,
    }


    /**
     * @gir-type Enum
     */
    export namespace LeafletTransitionType {
        export const $gtype: GObject.GType<LeafletTransitionType>;
    }

    /**
     * Describes the possible transitions in a {@link Leaflet} widget.
     * 
     * New values may be added to this enumeration over time.
     * @gir-type Enum
     * @since 1.0
     */
    enum LeafletTransitionType {
        /**
         * Cover the old page or uncover the new
         *   page, sliding from or towards the end according to orientation, text
         *   direction and children order
         */
        OVER,
        /**
         * Uncover the new page or cover the old
         *   page, sliding from or towards the start according to orientation, text
         *   direction and children order
         */
        UNDER,
        /**
         * Slide from left, right, up or down
         *   according to the orientation, text direction and the children order
         */
        SLIDE,
    }


    /**
     * @gir-type Enum
     */
    export namespace NavigationDirection {
        export const $gtype: GObject.GType<NavigationDirection>;
    }

    /**
     * Describes the direction of a swipe navigation gesture.
     * @gir-type Enum
     * @since 1.0
     */
    enum NavigationDirection {
        /**
         * Corresponds to start or top, depending on
         *   orientation and text direction
         */
        BACK,
        /**
         * Corresponds to end or bottom, depending on
         *   orientation and text direction
         */
        FORWARD,
    }


    /**
     * @gir-type Enum
     */
    export namespace SqueezerTransitionType {
        export const $gtype: GObject.GType<SqueezerTransitionType>;
    }

    /**
     * Describes the possible transitions in a {@link Squeezer} widget.
     * @gir-type Enum
     * @since 1.0
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
     * Describes the adaptive modes of {@link ViewSwitcher}.
     * @gir-type Enum
     * @since 1.0
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
     * Computes the ease out for a value.
     * @param t the term
     * @returns the ease out for `t`
     * @since 1.0
     */
    function ease_out_cubic(t: number): number;

    /**
     * Returns the name of a {@link EnumValueObject}.
     * 
     * This is a default implementation of {@link ComboRowGetEnumValueNameFunc}
     * to be used with {@link ComboRow.set_for_enum}. If the enumeration has a
     * nickname, it will return it, otherwise it will return its name.
     * @param value the value from the enum from which to get a name
     * @param user_data unused user data
     * @returns a displayable name that represents `value`
     * @since 1.0
     */
    function enum_value_row_name(value: EnumValueObject, user_data: null): string;

    /**
     * Checks whether animations are enabled for `widget`.
     * 
     * This should be used when implementing an animated widget to know whether to
     * animate it or not.
     * @param widget a widget
     * @returns whether animations are enabled for `widget`
     * @since 1.0
     */
    function get_enable_animations(widget: Gtk.Widget): boolean;

    /**
     * Initializes Libhandy.
     * 
     * Call this function just after initializing GTK, if you are using
     * {@link Gtk.Application} it means it must be called when the
     * `Gio.Application::startup` signal is emitted.
     * 
     * If Libhandy has already been initialized, the function will simply return.
     * 
     * This makes sure translations, types, themes, and icons for the Handy library
     * are set up properly.
     * @since 1.0
     */
    function init(): void;

    /**
     * @gir-type Callback
     */
    interface AvatarImageLoadFunc {
        (size: number): GdkPixbuf.Pixbuf | null;
    }

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
            /**
             * This signal is emitted after the row has been activated.
             * @signal
             * @since 1.0
             * @run-last
             */
            activated: () => void;
            "notify::activatable-widget": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::subtitle": (pspec: GObject.ParamSpec) => void;
            "notify::subtitle-lines": (pspec: GObject.ParamSpec) => void;
            "notify::title-lines": (pspec: GObject.ParamSpec) => void;
            "notify::use-underline": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
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
            activatable_widget: Gtk.Widget | null;
            activatableWidget: Gtk.Widget | null;
            icon_name: string;
            iconName: string;
            subtitle: string | null;
            subtitle_lines: number;
            subtitleLines: number;
            title_lines: number;
            titleLines: number;
            use_underline: boolean;
            useUnderline: boolean;
        }
    }

    /**
     * A {@link Gtk.ListBoxRow} used to present actions.
     * 
     * The {@link Handy.ActionRow} widget can have a title, a subtitle and an icon. The row
     * can receive additional widgets at its end, or prefix widgets at its start.
     * 
     * It is convenient to present a preference and its related actions.
     * 
     * {@link Handy.ActionRow} is unactivatable by default, giving it an activatable widget
     * will automatically make it activatable, but unsetting it won't change the
     * row's activatability.
     * 
     * ## HdyActionRow as GtkBuildable
     * 
     * The {@link Handy.ActionRow} implementation of the {@link Gtk.Buildable} interface
     * supports adding a child at its end by specifying “suffix” or omitting the
     * “type” attribute of a <child> element.
     * 
     * It also supports adding a child as a prefix widget by specifying “prefix” as
     * the “type” attribute of a <child> element.
     * 
     * ## CSS nodes
     * 
     * {@link Handy.ActionRow} has a main CSS node with name `row`.
     * 
     * It contains the subnode `box.header` for its main horizontal box, and
     * `box.title` for the vertical box containing the title and subtitle labels.
     * 
     * It contains subnodes `label.title` and `label.subtitle` representing
     * respectively the title label and subtitle label.
     * @gir-type Class
     * @since 1.0
     */
    class ActionRow extends PreferencesRow implements Atk.ImplementorIface, Gtk.Actionable, Gtk.Buildable {
        static $gtype: GObject.GType<ActionRow>;

        // Properties
        /**
         * The activatable widget for this row.
         * 
         * The widget is activated, either by clicking on it, by calling
         * {@link ActionRow.activate}, or via mnemonics in the title or the subtitle.
         * See the {@link ActionRow.use_underline} property to enable mnemonics.
         * 
         * The target widget will be activated by emitting the
         * `Gtk.Widget::mnemonic-activate` signal on it.
         * @since 1.0
         */
        get activatable_widget(): Gtk.Widget | null;
        set activatable_widget(val: Gtk.Widget | null);

        /**
         * The activatable widget for this row.
         * 
         * The widget is activated, either by clicking on it, by calling
         * {@link ActionRow.activate}, or via mnemonics in the title or the subtitle.
         * See the {@link ActionRow.use_underline} property to enable mnemonics.
         * 
         * The target widget will be activated by emitting the
         * `Gtk.Widget::mnemonic-activate` signal on it.
         * @since 1.0
         */
        get activatableWidget(): Gtk.Widget | null;
        set activatableWidget(val: Gtk.Widget | null);

        /**
         * The icon name for this row.
         * @since 1.0
         */
        get icon_name(): string;
        set icon_name(val: string);

        /**
         * The icon name for this row.
         * @since 1.0
         */
        get iconName(): string;
        set iconName(val: string);

        /**
         * The subtitle for this row.
         * @since 1.0
         */
        get subtitle(): string | null;
        set subtitle(val: string | null);

        /**
         * The number of lines at the end of which the subtitle label will be
         * ellipsized.
         * 
         * If the value is 0, the number of lines won't be limited.
         * @since 1.2
         * @default 1
         */
        get subtitle_lines(): number;
        set subtitle_lines(val: number);

        /**
         * The number of lines at the end of which the subtitle label will be
         * ellipsized.
         * 
         * If the value is 0, the number of lines won't be limited.
         * @since 1.2
         * @default 1
         */
        get subtitleLines(): number;
        set subtitleLines(val: number);

        /**
         * The number of lines at the end of which the title label will be ellipsized.
         * 
         * If the value is 0, the number of lines won't be limited.
         * @since 1.2
         * @default 1
         */
        get title_lines(): number;
        set title_lines(val: number);

        /**
         * The number of lines at the end of which the title label will be ellipsized.
         * 
         * If the value is 0, the number of lines won't be limited.
         * @since 1.2
         * @default 1
         */
        get titleLines(): number;
        set titleLines(val: number);

        /**
         * Whether embedded underlines in the title or subtitle indicates a mnemonic.
         * 
         * If true, an underline in the text of the title or subtitle labels indicates
         * the next character should be used for the mnemonic accelerator key.
         * @since 1.0
         * @default false
         */
        get use_underline(): boolean;
        set use_underline(val: boolean);

        /**
         * Whether embedded underlines in the title or subtitle indicates a mnemonic.
         * 
         * If true, an underline in the text of the title or subtitle labels indicates
         * the next character should be used for the mnemonic accelerator key.
         * @since 1.0
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
         * Activates `self`.
         * @virtual
         */
        vfunc_activate(): void;

        // Methods
        /**
         * Activates `self`.
         */
        activate(): void;

        /**
         * @param args 
         */
    // Conflicted with Gtk.Widget.activate
        activate(...args: never[]): any;

        /**
         * Adds a prefix widget to `self`.
         * @param widget the prefix widget
         */
        add_prefix(widget: Gtk.Widget): void;

        /**
         * Gets the widget activated when `self` is activated.
         * @returns the activatable widget for `self`
         */
        get_activatable_widget(): Gtk.Widget | null;

        /**
         * Gets the icon name for `self`.
         * @returns the icon name for `self`
         */
        get_icon_name(): string;

        /**
         * Gets the subtitle for `self`.
         * @returns the subtitle for `self`
         */
        get_subtitle(): string | null;

        /**
         * Gets the number of lines at the end of which the subtitle label will be
         * ellipsized.
         * 
         * If the value is 0, the number of lines won't be limited.
         * @returns the number of lines at the end of which the subtitle label will be   ellipsized
         */
        get_subtitle_lines(): number;

        /**
         * Gets the number of lines at the end of which the title label will be
         * ellipsized.
         * 
         * If the value is 0, the number of lines won't be limited.
         * @returns the number of lines at the end of which the title label will be   ellipsized
         */
        get_title_lines(): number;

        /**
         * Gets whether an embedded underline in the title or subtitle indicates a
         * mnemonic.
         * @returns whether an embedded underline in the title or subtitle indicates a   mnemonic
         */
        get_use_underline(): boolean;

        /**
         * Sets the widget to activate when `self` is activated.
         * @param widget the target widget
         */
        set_activatable_widget(widget: Gtk.Widget | null): void;

        /**
         * Sets the icon name for `self`.
         * @param icon_name the icon name
         */
        set_icon_name(icon_name: string): void;

        /**
         * Sets the subtitle for `self`.
         * @param subtitle the subtitle
         */
        set_subtitle(subtitle: string | null): void;

        /**
         * Sets the number of lines at the end of which the subtitle label will be
         * ellipsized.
         * 
         * If the value is 0, the number of lines won't be limited.
         * @param subtitle_lines the number of lines at the end of which the subtitle label will be ellipsized
         */
        set_subtitle_lines(subtitle_lines: number): void;

        /**
         * Sets the number of lines at the end of which the title label will be
         * ellipsized.
         * 
         * If the value is 0, the number of lines won't be limited.
         * @param title_lines the number of lines at the end of which the title label will be ellipsized
         */
        set_title_lines(title_lines: number): void;

        /**
         * Sets whether an embedded underline in the title or subtitle indicates a
         * mnemonic.
         * @param use_underline `TRUE` if underlines in the text indicate mnemonics
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


    namespace ApplicationWindow {
        // Signal signatures
        interface SignalSignatures extends Gtk.ApplicationWindow.SignalSignatures {
            "notify::show-menubar": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.ApplicationWindow.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gio.ActionGroup.ConstructorProps, Gio.ActionMap.ConstructorProps, Gtk.Buildable.ConstructorProps {}
    }

    /**
     * A freeform application window.
     * 
     * {@link Handy.ApplicationWindow} is a {@link Gtk.ApplicationWindow} subclass providing
     * the same features as {@link Window}.
     * 
     * See {@link Window} for details.
     * 
     * Using {@link Gtk.Application.set_app_menu} and
     * {@link Gtk.Application.set_menubar} is not supported and may result in
     * visual glitches.
     * @gir-type Class
     * @since 1.0
     */
    class ApplicationWindow extends Gtk.ApplicationWindow implements Atk.ImplementorIface, Gio.ActionGroup, Gio.ActionMap, Gtk.Buildable {
        static $gtype: GObject.GType<ApplicationWindow>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ApplicationWindow.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ApplicationWindow.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): ApplicationWindow;

        // Signals
        /** @signal */
        connect<K extends keyof ApplicationWindow.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ApplicationWindow.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ApplicationWindow.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ApplicationWindow.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ApplicationWindow.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ApplicationWindow.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * Emits the `Gio.ActionGroup::action-added` signal on `action_group`.
         * 
         * This function should only be called by {@link Gio.ActionGroup} implementations.
         * @param action_name the name of an action in the group
         */
        action_added(action_name: string): void;

        /**
         * Emits the `Gio.ActionGroup::action-enabled-changed` signal on `action_group`.
         * 
         * This function should only be called by {@link Gio.ActionGroup} implementations.
         * @param action_name the name of an action in the group
         * @param enabled whether the action is now enabled
         */
        action_enabled_changed(action_name: string, enabled: boolean): void;

        /**
         * Emits the `Gio.ActionGroup::action-removed` signal on `action_group`.
         * 
         * This function should only be called by {@link Gio.ActionGroup} implementations.
         * @param action_name the name of an action in the group
         */
        action_removed(action_name: string): void;

        /**
         * Emits the `Gio.ActionGroup::action-state-changed` signal on `action_group`.
         * 
         * This function should only be called by {@link Gio.ActionGroup} implementations.
         * @param action_name the name of an action in the group
         * @param state the new state of the named action
         */
        action_state_changed(action_name: string, state: GLib.Variant): void;

        /**
         * Activate the named action within `action_group`.
         * 
         * If the action is expecting a parameter, then the correct type of
         * parameter must be given as `parameter`.  If the action is expecting no
         * parameters then `parameter` must be `NULL`.  See
         * {@link Gio.ActionGroup.get_action_parameter_type}.
         * 
         * If the {@link Gio.ActionGroup} implementation supports asynchronous remote
         * activation over D-Bus, this call may return before the relevant
         * D-Bus traffic has been sent, or any replies have been received. In
         * order to block on such asynchronous activation calls,
         * {@link Gio.DBusConnection.flush} should be called prior to the code, which
         * depends on the result of the action activation. Without flushing
         * the D-Bus connection, there is no guarantee that the action would
         * have been activated.
         * 
         * The following code which runs in a remote app instance, shows an
         * example of a ‘quit’ action being activated on the primary app
         * instance over D-Bus. Here {@link Gio.DBusConnection.flush} is called
         * before `exit()`. Without `g_dbus_connection_flush()`, the ‘quit’ action
         * may fail to be activated on the primary instance.
         * 
         * ```c
         * // call ‘quit’ action on primary instance
         * g_action_group_activate_action (G_ACTION_GROUP (app), "quit", NULL);
         * 
         * // make sure the action is activated now
         * g_dbus_connection_flush (…);
         * 
         * g_debug ("Application has been terminated. Exiting.");
         * 
         * exit (0);
         * ```
         * @param action_name the name of the action to activate
         * @param parameter parameters to the activation
         */
        activate_action(action_name: string, parameter: GLib.Variant | null): void;

        /**
         * Request for the state of the named action within `action_group` to be
         * changed to `value`.
         * 
         * The action must be stateful and `value` must be of the correct type.
         * See {@link Gio.ActionGroup.get_action_state_type}.
         * 
         * This call merely requests a change.  The action may refuse to change
         * its state or may change its state to something other than `value`.
         * See {@link Gio.ActionGroup.get_action_state_hint}.
         * 
         * If the `value` GVariant is floating, it is consumed.
         * @param action_name the name of the action to request the change on
         * @param value the new state
         */
        change_action_state(action_name: string, value: GLib.Variant): void;

        /**
         * Checks if the named action within `action_group` is currently enabled.
         * 
         * An action must be enabled in order to be activated or in order to
         * have its state changed from outside callers.
         * @param action_name the name of the action to query
         * @returns whether the action is currently enabled
         */
        get_action_enabled(action_name: string): boolean;

        /**
         * Queries the type of the parameter that must be given when activating
         * the named action within `action_group`.
         * 
         * When activating the action using {@link Gio.ActionGroup.activate_action},
         * the {@link GLib.Variant} given to that function must be of the type returned
         * by this function.
         * 
         * In the case that this function returns `NULL`, you must not give any
         * {@link GLib.Variant}, but `NULL` instead.
         * 
         * The parameter type of a particular action will never change but it is
         * possible for an action to be removed and for a new action to be added
         * with the same name but a different parameter type.
         * @param action_name the name of the action to query
         * @returns the parameter type
         */
        get_action_parameter_type(action_name: string): GLib.VariantType | null;

        /**
         * Queries the current state of the named action within `action_group`.
         * 
         * If the action is not stateful then `NULL` will be returned.  If the
         * action is stateful then the type of the return value is the type
         * given by {@link Gio.ActionGroup.get_action_state_type}.
         * 
         * The return value (if non-`NULL`) should be freed with
         * {@link GLib.Variant.unref} when it is no longer required.
         * @param action_name the name of the action to query
         * @returns the current state of the action
         */
        get_action_state(action_name: string): GLib.Variant | null;

        /**
         * Requests a hint about the valid range of values for the state of the
         * named action within `action_group`.
         * 
         * If `NULL` is returned it either means that the action is not stateful
         * or that there is no hint about the valid range of values for the
         * state of the action.
         * 
         * If a {@link GLib.Variant} array is returned then each item in the array is a
         * possible value for the state.  If a {@link GLib.Variant} pair (ie: two-tuple) is
         * returned then the tuple specifies the inclusive lower and upper bound
         * of valid values for the state.
         * 
         * In any case, the information is merely a hint.  It may be possible to
         * have a state value outside of the hinted range and setting a value
         * within the range may fail.
         * 
         * The return value (if non-`NULL`) should be freed with
         * {@link GLib.Variant.unref} when it is no longer required.
         * @param action_name the name of the action to query
         * @returns the state range hint
         */
        get_action_state_hint(action_name: string): GLib.Variant | null;

        /**
         * Queries the type of the state of the named action within
         * `action_group`.
         * 
         * If the action is stateful then this function returns the
         * {@link GLib.VariantType} of the state.  All calls to
         * {@link Gio.ActionGroup.change_action_state} must give a {@link GLib.Variant} of this
         * type and {@link Gio.ActionGroup.get_action_state} will return a {@link GLib.Variant}
         * of the same type.
         * 
         * If the action is not stateful then this function will return `NULL`.
         * In that case, {@link Gio.ActionGroup.get_action_state} will return `NULL`
         * and you must not call {@link Gio.ActionGroup.change_action_state}.
         * 
         * The state type of a particular action will never change but it is
         * possible for an action to be removed and for a new action to be added
         * with the same name but a different state type.
         * @param action_name the name of the action to query
         * @returns the state type, if the action is stateful
         */
        get_action_state_type(action_name: string): GLib.VariantType | null;

        /**
         * Checks if the named action exists within `action_group`.
         * @param action_name the name of the action to check for
         * @returns whether the named action exists
         */
        has_action(action_name: string): boolean;

        /**
         * Lists the actions contained within `action_group`.
         * 
         * The caller is responsible for freeing the list with {@link GLib.strfreev} when
         * it is no longer required.
         * @returns a `NULL`-terminated array   of the names of the actions in the group
         */
        list_actions(): string[];

        /**
         * Queries all aspects of the named action within an `action_group`.
         * 
         * This function acquires the information available from
         * {@link Gio.ActionGroup.has_action}, {@link Gio.ActionGroup.get_action_enabled},
         * {@link Gio.ActionGroup.get_action_parameter_type},
         * {@link Gio.ActionGroup.get_action_state_type},
         * {@link Gio.ActionGroup.get_action_state_hint} and
         * {@link Gio.ActionGroup.get_action_state} with a single function call.
         * 
         * This provides two main benefits.
         * 
         * The first is the improvement in efficiency that comes with not having
         * to perform repeated lookups of the action in order to discover
         * different things about it.  The second is that implementing
         * {@link Gio.ActionGroup} can now be done by only overriding this one virtual
         * function.
         * 
         * The interface provides a default implementation of this function that
         * calls the individual functions, as required, to fetch the
         * information.  The interface also provides default implementations of
         * those functions that call this function.  All implementations,
         * therefore, must override either this function or all of the others.
         * 
         * If the action exists, `TRUE` is returned and any of the requested
         * fields (as indicated by having a non-`NULL` reference passed in) are
         * filled.  If the action doesn’t exist, `FALSE` is returned and the
         * fields may or may not have been modified.
         * @param action_name the name of an action in the group
         * @returns `TRUE` if the action exists, else `FALSE`
         */
        query_action(action_name: string): [boolean, boolean, GLib.VariantType | null, GLib.VariantType | null, GLib.Variant | null, GLib.Variant | null];

        /**
         * Emits the `Gio.ActionGroup::action-added` signal on `action_group`.
         * 
         * This function should only be called by {@link Gio.ActionGroup} implementations.
         * @param action_name the name of an action in the group
         * @virtual
         */
        vfunc_action_added(action_name: string): void;

        /**
         * Emits the `Gio.ActionGroup::action-enabled-changed` signal on `action_group`.
         * 
         * This function should only be called by {@link Gio.ActionGroup} implementations.
         * @param action_name the name of an action in the group
         * @param enabled whether the action is now enabled
         * @virtual
         */
        vfunc_action_enabled_changed(action_name: string, enabled: boolean): void;

        /**
         * Emits the `Gio.ActionGroup::action-removed` signal on `action_group`.
         * 
         * This function should only be called by {@link Gio.ActionGroup} implementations.
         * @param action_name the name of an action in the group
         * @virtual
         */
        vfunc_action_removed(action_name: string): void;

        /**
         * Emits the `Gio.ActionGroup::action-state-changed` signal on `action_group`.
         * 
         * This function should only be called by {@link Gio.ActionGroup} implementations.
         * @param action_name the name of an action in the group
         * @param state the new state of the named action
         * @virtual
         */
        vfunc_action_state_changed(action_name: string, state: GLib.Variant): void;

        /**
         * Activate the named action within `action_group`.
         * 
         * If the action is expecting a parameter, then the correct type of
         * parameter must be given as `parameter`.  If the action is expecting no
         * parameters then `parameter` must be `NULL`.  See
         * {@link Gio.ActionGroup.get_action_parameter_type}.
         * 
         * If the {@link Gio.ActionGroup} implementation supports asynchronous remote
         * activation over D-Bus, this call may return before the relevant
         * D-Bus traffic has been sent, or any replies have been received. In
         * order to block on such asynchronous activation calls,
         * {@link Gio.DBusConnection.flush} should be called prior to the code, which
         * depends on the result of the action activation. Without flushing
         * the D-Bus connection, there is no guarantee that the action would
         * have been activated.
         * 
         * The following code which runs in a remote app instance, shows an
         * example of a ‘quit’ action being activated on the primary app
         * instance over D-Bus. Here {@link Gio.DBusConnection.flush} is called
         * before `exit()`. Without `g_dbus_connection_flush()`, the ‘quit’ action
         * may fail to be activated on the primary instance.
         * 
         * ```c
         * // call ‘quit’ action on primary instance
         * g_action_group_activate_action (G_ACTION_GROUP (app), "quit", NULL);
         * 
         * // make sure the action is activated now
         * g_dbus_connection_flush (…);
         * 
         * g_debug ("Application has been terminated. Exiting.");
         * 
         * exit (0);
         * ```
         * @param action_name the name of the action to activate
         * @param parameter parameters to the activation
         * @virtual
         */
        vfunc_activate_action(action_name: string, parameter: GLib.Variant | null): void;

        /**
         * Request for the state of the named action within `action_group` to be
         * changed to `value`.
         * 
         * The action must be stateful and `value` must be of the correct type.
         * See {@link Gio.ActionGroup.get_action_state_type}.
         * 
         * This call merely requests a change.  The action may refuse to change
         * its state or may change its state to something other than `value`.
         * See {@link Gio.ActionGroup.get_action_state_hint}.
         * 
         * If the `value` GVariant is floating, it is consumed.
         * @param action_name the name of the action to request the change on
         * @param value the new state
         * @virtual
         */
        vfunc_change_action_state(action_name: string, value: GLib.Variant): void;

        /**
         * Checks if the named action within `action_group` is currently enabled.
         * 
         * An action must be enabled in order to be activated or in order to
         * have its state changed from outside callers.
         * @param action_name the name of the action to query
         * @virtual
         */
        vfunc_get_action_enabled(action_name: string): boolean;

        /**
         * Queries the type of the parameter that must be given when activating
         * the named action within `action_group`.
         * 
         * When activating the action using {@link Gio.ActionGroup.activate_action},
         * the {@link GLib.Variant} given to that function must be of the type returned
         * by this function.
         * 
         * In the case that this function returns `NULL`, you must not give any
         * {@link GLib.Variant}, but `NULL` instead.
         * 
         * The parameter type of a particular action will never change but it is
         * possible for an action to be removed and for a new action to be added
         * with the same name but a different parameter type.
         * @param action_name the name of the action to query
         * @virtual
         */
        vfunc_get_action_parameter_type(action_name: string): GLib.VariantType | null;

        /**
         * Queries the current state of the named action within `action_group`.
         * 
         * If the action is not stateful then `NULL` will be returned.  If the
         * action is stateful then the type of the return value is the type
         * given by {@link Gio.ActionGroup.get_action_state_type}.
         * 
         * The return value (if non-`NULL`) should be freed with
         * {@link GLib.Variant.unref} when it is no longer required.
         * @param action_name the name of the action to query
         * @virtual
         */
        vfunc_get_action_state(action_name: string): GLib.Variant | null;

        /**
         * Requests a hint about the valid range of values for the state of the
         * named action within `action_group`.
         * 
         * If `NULL` is returned it either means that the action is not stateful
         * or that there is no hint about the valid range of values for the
         * state of the action.
         * 
         * If a {@link GLib.Variant} array is returned then each item in the array is a
         * possible value for the state.  If a {@link GLib.Variant} pair (ie: two-tuple) is
         * returned then the tuple specifies the inclusive lower and upper bound
         * of valid values for the state.
         * 
         * In any case, the information is merely a hint.  It may be possible to
         * have a state value outside of the hinted range and setting a value
         * within the range may fail.
         * 
         * The return value (if non-`NULL`) should be freed with
         * {@link GLib.Variant.unref} when it is no longer required.
         * @param action_name the name of the action to query
         * @virtual
         */
        vfunc_get_action_state_hint(action_name: string): GLib.Variant | null;

        /**
         * Queries the type of the state of the named action within
         * `action_group`.
         * 
         * If the action is stateful then this function returns the
         * {@link GLib.VariantType} of the state.  All calls to
         * {@link Gio.ActionGroup.change_action_state} must give a {@link GLib.Variant} of this
         * type and {@link Gio.ActionGroup.get_action_state} will return a {@link GLib.Variant}
         * of the same type.
         * 
         * If the action is not stateful then this function will return `NULL`.
         * In that case, {@link Gio.ActionGroup.get_action_state} will return `NULL`
         * and you must not call {@link Gio.ActionGroup.change_action_state}.
         * 
         * The state type of a particular action will never change but it is
         * possible for an action to be removed and for a new action to be added
         * with the same name but a different state type.
         * @param action_name the name of the action to query
         * @virtual
         */
        vfunc_get_action_state_type(action_name: string): GLib.VariantType | null;

        /**
         * Checks if the named action exists within `action_group`.
         * @param action_name the name of the action to check for
         * @virtual
         */
        vfunc_has_action(action_name: string): boolean;

        /**
         * Lists the actions contained within `action_group`.
         * 
         * The caller is responsible for freeing the list with {@link GLib.strfreev} when
         * it is no longer required.
         * @virtual
         */
        vfunc_list_actions(): string[];

        /**
         * Queries all aspects of the named action within an `action_group`.
         * 
         * This function acquires the information available from
         * {@link Gio.ActionGroup.has_action}, {@link Gio.ActionGroup.get_action_enabled},
         * {@link Gio.ActionGroup.get_action_parameter_type},
         * {@link Gio.ActionGroup.get_action_state_type},
         * {@link Gio.ActionGroup.get_action_state_hint} and
         * {@link Gio.ActionGroup.get_action_state} with a single function call.
         * 
         * This provides two main benefits.
         * 
         * The first is the improvement in efficiency that comes with not having
         * to perform repeated lookups of the action in order to discover
         * different things about it.  The second is that implementing
         * {@link Gio.ActionGroup} can now be done by only overriding this one virtual
         * function.
         * 
         * The interface provides a default implementation of this function that
         * calls the individual functions, as required, to fetch the
         * information.  The interface also provides default implementations of
         * those functions that call this function.  All implementations,
         * therefore, must override either this function or all of the others.
         * 
         * If the action exists, `TRUE` is returned and any of the requested
         * fields (as indicated by having a non-`NULL` reference passed in) are
         * filled.  If the action doesn’t exist, `FALSE` is returned and the
         * fields may or may not have been modified.
         * @param action_name the name of an action in the group
         * @virtual
         */
        vfunc_query_action(action_name: string): [boolean, boolean, GLib.VariantType | null, GLib.VariantType | null, GLib.Variant | null, GLib.Variant | null];

        /**
         * Adds an action to the `action_map`.
         * 
         * If the action map already contains an action with the same name
         * as `action` then the old action is dropped from the action map.
         * 
         * The action map takes its own reference on `action`.
         * @param action a {@link Gio.Action}
         */
        add_action(action: Gio.Action): void;

        /**
         * A convenience function for creating multiple simple actions. 
         * See Gio.ActionEntryObj for the structure of the action entry.
         * @param entries Array of action entries to add
         */
        add_action_entries(entries: Gio.ActionEntryObj[]): void;

        /**
         * Looks up the action with the name `action_name` in `action_map`.
         * 
         * If no such action exists, returns `NULL`.
         * @param action_name the name of an action
         * @returns a {@link Gio.Action}
         */
        lookup_action(action_name: string): Gio.Action | null;

        /**
         * Removes the named action from the action map.
         * 
         * If no action of this name is in the map then nothing happens.
         * @param action_name the name of the action
         */
        remove_action(action_name: string): void;

        /**
         * Remove actions from a {@link Gio.ActionMap}. This is meant as the reverse of
         * {@link Gio.ActionMap.add_action_entries}.
         * 
         * 
         * ```c
         * static const GActionEntry entries[] = {
         *     { "quit",         activate_quit              },
         *     { "print-string", activate_print_string, "s" }
         * };
         * 
         * void
         * add_actions (GActionMap *map)
         * {
         *   g_action_map_add_action_entries (map, entries, G_N_ELEMENTS (entries), NULL);
         * }
         * 
         * void
         * remove_actions (GActionMap *map)
         * {
         *   g_action_map_remove_action_entries (map, entries, G_N_ELEMENTS (entries));
         * }
         * ```
         * @param entries a pointer to   the first item in an array of {@link Gio.ActionEntry} structs
         */
        remove_action_entries(entries: Gio.ActionEntry[]): void;

        /**
         * Adds an action to the `action_map`.
         * 
         * If the action map already contains an action with the same name
         * as `action` then the old action is dropped from the action map.
         * 
         * The action map takes its own reference on `action`.
         * @param action a {@link Gio.Action}
         * @virtual
         */
        vfunc_add_action(action: Gio.Action): void;

        /**
         * Looks up the action with the name `action_name` in `action_map`.
         * 
         * If no such action exists, returns `NULL`.
         * @param action_name the name of an action
         * @virtual
         */
        vfunc_lookup_action(action_name: string): Gio.Action | null;

        /**
         * Removes the named action from the action map.
         * 
         * If no action of this name is in the map then nothing happens.
         * @param action_name the name of the action
         * @virtual
         */
        vfunc_remove_action(action_name: string): void;
    }


    namespace Avatar {
        // Signal signatures
        interface SignalSignatures extends Gtk.DrawingArea.SignalSignatures {
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::loadable-icon": (pspec: GObject.ParamSpec) => void;
            "notify::show-initials": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
            "notify::text": (pspec: GObject.ParamSpec) => void;
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
            icon_name: string | null;
            iconName: string | null;
            loadable_icon: Gio.LoadableIcon | null;
            loadableIcon: Gio.LoadableIcon | null;
            show_initials: boolean;
            showInitials: boolean;
            size: number;
            text: string | null;
        }
    }

    /**
     * A widget displaying an image, with a generated fallback.
     * 
     * {@link Handy.Avatar} is a widget to display a round avatar.
     * 
     * A provided image is made round before displaying, if no image is given this
     * widget generates a round fallback with the initials of the
     * {@link Avatar.text} on top of a colored background.
     * 
     * The color is picked based on the hash of the {@link Avatar.text}.
     * 
     * If {@link Avatar.show_initials} is set to `FALSE`,
     * `avatar-default-symbolic` is shown instead of the initials.
     * 
     * Use {@link Avatar.set_loadable_icon} or {@link Avatar.loadable_icon} to
     * set a custom image.
     * 
     * ## CSS nodes
     * 
     * {@link Handy.Avatar} has a single CSS node with name `avatar`.
     * @gir-type Class
     * @since 1.0
     */
    class Avatar extends Gtk.DrawingArea implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<Avatar>;

        // Properties
        /**
         * The name of an icon to use as a fallback.
         * 
         * If no name is set, the avatar-default-symbolic icon will be used. If the
         * name doesn't match a valid icon, it is an error and no icon will be
         * displayed. If the icon theme is changed, the image will be updated
         * automatically.
         * @since 1.0
         * @default null
         */
        get icon_name(): string | null;
        set icon_name(val: string | null);

        /**
         * The name of an icon to use as a fallback.
         * 
         * If no name is set, the avatar-default-symbolic icon will be used. If the
         * name doesn't match a valid icon, it is an error and no icon will be
         * displayed. If the icon theme is changed, the image will be updated
         * automatically.
         * @since 1.0
         * @default null
         */
        get iconName(): string | null;
        set iconName(val: string | null);

        /**
         * A {@link Gio.LoadableIcon} used to load the avatar.
         * @since 1.2
         */
        get loadable_icon(): Gio.LoadableIcon | null;
        set loadable_icon(val: Gio.LoadableIcon | null);

        /**
         * A {@link Gio.LoadableIcon} used to load the avatar.
         * @since 1.2
         */
        get loadableIcon(): Gio.LoadableIcon | null;
        set loadableIcon(val: Gio.LoadableIcon | null);

        /**
         * Whether to show the initials or the fallback icon on the generated avatar.
         * @since 1.0
         * @default false
         */
        get show_initials(): boolean;
        set show_initials(val: boolean);

        /**
         * Whether to show the initials or the fallback icon on the generated avatar.
         * @since 1.0
         * @default false
         */
        get showInitials(): boolean;
        set showInitials(val: boolean);

        /**
         * The avatar size of the avatar.
         * @since 1.0
         * @default -1
         */
        get size(): number;
        set size(val: number);

        /**
         * Sets the text used to generate the fallback initials and color.
         * 
         * It's only used to generate the color if {@link Avatar.show_initials} is
         * `FALSE`.
         * @since 1.0
         * @default null
         */
        get text(): string | null;
        set text(val: string | null);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Avatar.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Avatar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](size: number, text: string | null, show_initials: boolean): Avatar;

        // Conflicted with Gtk.DrawingArea.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof Avatar.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Avatar.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Avatar.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Avatar.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Avatar.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Avatar.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Renders `self` into a {@link GdkPixbuf.Pixbuf} at `size` and `scale_factor`.
         * 
         * This can be used to export the fallback avatar.
         * @param size the size of the pixbuf
         * @param scale_factor the scale factor
         * @returns the pixbuf
         */
        draw_to_pixbuf(size: number, scale_factor: number): GdkPixbuf.Pixbuf;

        /**
         * Renders asynchronously `self` into a pixbuf at `size` and `scale_factor`.
         * 
         * This can be used to export the fallback avatar.
         * @param size the size of the pixbuf
         * @param scale_factor the scale factor
         * @param cancellable a cancellable
         */
        draw_to_pixbuf_async(size: number, scale_factor: number, cancellable: Gio.Cancellable | null): globalThis.Promise<GdkPixbuf.Pixbuf>;

        /**
         * Renders asynchronously `self` into a pixbuf at `size` and `scale_factor`.
         * 
         * This can be used to export the fallback avatar.
         * @param size the size of the pixbuf
         * @param scale_factor the scale factor
         * @param cancellable a cancellable
         * @param callback a {@link Gio.AsyncReadyCallback} to call when   the avatar is generated
         */
        draw_to_pixbuf_async(size: number, scale_factor: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Renders asynchronously `self` into a pixbuf at `size` and `scale_factor`.
         * 
         * This can be used to export the fallback avatar.
         * @param size the size of the pixbuf
         * @param scale_factor the scale factor
         * @param cancellable a cancellable
         * @param callback a {@link Gio.AsyncReadyCallback} to call when   the avatar is generated
         */
        draw_to_pixbuf_async(size: number, scale_factor: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<GdkPixbuf.Pixbuf> | void;

        /**
         * Finishes an asynchronous draw of an avatar to a pixbuf.
         * @param async_result a {@link Gio.AsyncResult}
         * @returns the resulting pixbuf
         */
        draw_to_pixbuf_finish(async_result: Gio.AsyncResult): GdkPixbuf.Pixbuf;

        /**
         * Gets the name of an icon to use as a fallback.
         * @returns the icon name
         */
        get_icon_name(): string | null;

        /**
         * Gets the {@link Gio.LoadableIcon} set via {@link Avatar.set_loadable_icon}.
         * @returns the {@link Gio.LoadableIcon}
         */
        get_loadable_icon(): Gio.LoadableIcon | null;

        /**
         * Gets whether initials are used instead of an icon on the fallback avatar.
         * @returns whether initials are used instead of an icon as fallback
         */
        get_show_initials(): boolean;

        /**
         * Gets the size of the avatar.
         * @returns the size of the avatar
         */
        get_size(): number;

        /**
         * Gets the text used to generate the fallback initials and color.
         * @returns the text used to generate the fallback initials and   color
         */
        get_text(): string | null;

        /**
         * Sets the name of an icon to use as a fallback.
         * 
         * If no name is set, `avatar-default-symbolic` will be used.
         * @param icon_name the name of the icon from the icon theme
         */
        set_icon_name(icon_name: string | null): void;

        /**
         * A callback which is called when the custom image needs to be reloaded.
         * 
         * It will be called on {@link Avatar.size} or
         * {@link Gtk.Widget.scale_factor} changes.
         * @param load_image callback to set a custom image
         */
        set_image_load_func(load_image: AvatarImageLoadFunc | null): void;

        /**
         * Sets the {@link Gio.LoadableIcon} to use as an avatar.
         * 
         * The previous avatar is displayed till the new avatar is loaded, to
         * immediately remove the custom avatar set the loadable-icon to `NULL`.
         * 
         * The {@link Gio.LoadableIcon} set via this function is preferred over a set
         * {@link AvatarImageLoadFunc}.
         * @param icon a {@link Gio.LoadableIcon}
         */
        set_loadable_icon(icon: Gio.LoadableIcon | null): void;

        /**
         * Sets whether to use initials instead of an icon on the fallback avatar.
         * @param show_initials whether to use initials instead of an icon as fallback
         */
        set_show_initials(show_initials: boolean): void;

        /**
         * Sets the size of the avatar.
         * @param size the size to be used for the avatar
         */
        set_size(size: number): void;

        /**
         * Set the text used to generate the fallback initials color.
         * @param text the text used to get the initials and color
         */
        set_text(text: string | null): void;
    }


    namespace Carousel {
        // Signal signatures
        interface SignalSignatures extends Gtk.EventBox.SignalSignatures {
            /**
             * This signal is emitted after a page has been changed.
             * 
             * It can be used to implement "infinite scrolling" by amending the pages
             * after every scroll.
             * @signal
             * @since 1.0
             * @run-last
             */
            "page-changed": (arg0: number) => void;
            "notify::allow-long-swipes": (pspec: GObject.ParamSpec) => void;
            "notify::allow-mouse-drag": (pspec: GObject.ParamSpec) => void;
            "notify::allow-scroll-wheel": (pspec: GObject.ParamSpec) => void;
            "notify::animation-duration": (pspec: GObject.ParamSpec) => void;
            "notify::interactive": (pspec: GObject.ParamSpec) => void;
            "notify::n-pages": (pspec: GObject.ParamSpec) => void;
            "notify::position": (pspec: GObject.ParamSpec) => void;
            "notify::reveal-duration": (pspec: GObject.ParamSpec) => void;
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
            allow_long_swipes: boolean;
            allowLongSwipes: boolean;
            allow_mouse_drag: boolean;
            allowMouseDrag: boolean;
            allow_scroll_wheel: boolean;
            allowScrollWheel: boolean;
            animation_duration: number;
            animationDuration: number;
            interactive: boolean;
            n_pages: number;
            nPages: number;
            position: number;
            reveal_duration: number;
            revealDuration: number;
            spacing: number;
        }
    }

    /**
     * A paginated scrolling widget.
     * 
     * The {@link Handy.Carousel} widget can be used to display a set of pages with
     * swipe-based navigation between them.
     * 
     * {@link CarouselIndicatorDots} and {@link CarouselIndicatorLines} can be used
     * to provide page indicators for {@link Handy.Carousel}.
     * 
     * ## CSS nodes
     * 
     * {@link Handy.Carousel} has a single CSS node with name `carousel`.
     * @gir-type Class
     * @since 1.0
     */
    class Carousel extends Gtk.EventBox implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable, Swipeable {
        static $gtype: GObject.GType<Carousel>;

        // Properties
        /**
         * Whether to allow swiping for more than one page at a time.
         * 
         * If the value is `FALSE`, each swipe can only move to the adjacent pages.
         * @since 1.2
         * @default false
         */
        get allow_long_swipes(): boolean;
        set allow_long_swipes(val: boolean);

        /**
         * Whether to allow swiping for more than one page at a time.
         * 
         * If the value is `FALSE`, each swipe can only move to the adjacent pages.
         * @since 1.2
         * @default false
         */
        get allowLongSwipes(): boolean;
        set allowLongSwipes(val: boolean);

        /**
         * Sets whether the {@link Carousel} can be dragged with mouse pointer.
         * 
         * If the value is `FALSE`, dragging is only available on touch.
         * @since 1.0
         * @default true
         */
        get allow_mouse_drag(): boolean;
        set allow_mouse_drag(val: boolean);

        /**
         * Sets whether the {@link Carousel} can be dragged with mouse pointer.
         * 
         * If the value is `FALSE`, dragging is only available on touch.
         * @since 1.0
         * @default true
         */
        get allowMouseDrag(): boolean;
        set allowMouseDrag(val: boolean);

        /**
         * Whether the widget will respond to scroll wheel events.
         * 
         * If the value is `FALSE`, wheel events will be ignored.
         * @since 1.4
         * @default true
         */
        get allow_scroll_wheel(): boolean;
        set allow_scroll_wheel(val: boolean);

        /**
         * Whether the widget will respond to scroll wheel events.
         * 
         * If the value is `FALSE`, wheel events will be ignored.
         * @since 1.4
         * @default true
         */
        get allowScrollWheel(): boolean;
        set allowScrollWheel(val: boolean);

        /**
         * Animation duration used by {@link Carousel.scroll_to}, in milliseconds.
         * @since 1.0
         * @default 250
         */
        get animation_duration(): number;
        set animation_duration(val: number);

        /**
         * Animation duration used by {@link Carousel.scroll_to}, in milliseconds.
         * @since 1.0
         * @default 250
         */
        get animationDuration(): number;
        set animationDuration(val: number);

        /**
         * Whether the carousel can be navigated.
         * 
         * This can be used to temporarily disable a {@link Handy.Carousel} to only allow
         * navigating it in a certain state.
         * @since 1.0
         * @default true
         */
        get interactive(): boolean;
        set interactive(val: boolean);

        /**
         * The number of pages in a {@link Carousel}.
         * @since 1.0
         * @read-only
         * @default 0
         */
        get n_pages(): number;

        /**
         * The number of pages in a {@link Carousel}.
         * @since 1.0
         * @read-only
         * @default 0
         */
        get nPages(): number;

        /**
         * Current scrolling position, unitless.
         * 
         * 1 matches 1 page. Use {@link Carousel.scroll_to} for changing it.
         * @since 1.0
         * @read-only
         * @default 0
         */
        get position(): number;

        /**
         * Page reveal duration, in milliseconds.
         * @since 1.0
         * @default 0
         */
        get reveal_duration(): number;
        set reveal_duration(val: number);

        /**
         * Page reveal duration, in milliseconds.
         * @since 1.0
         * @default 0
         */
        get revealDuration(): number;
        set revealDuration(val: number);

        /**
         * Spacing between pages in pixels.
         * @since 1.0
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
        $signals: Carousel.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Carousel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Carousel;

        // Signals
        /** @signal */
        connect<K extends keyof Carousel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Carousel.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Carousel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Carousel.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Carousel.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Carousel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets whether to allow swiping for more than one page at a time.
         * @returns `TRUE` if long swipes are allowed
         */
        get_allow_long_swipes(): boolean;

        /**
         * Sets whether `self` can be dragged with mouse pointer.
         * @returns `TRUE` if `self` can be dragged with mouse
         */
        get_allow_mouse_drag(): boolean;

        /**
         * Gets whether `self` will respond to scroll wheel events.
         * @returns `TRUE` if `self` will respond to scroll wheel events
         */
        get_allow_scroll_wheel(): boolean;

        /**
         * Gets animation duration used by {@link Carousel.scroll_to}.
         * @returns animation duration, in milliseconds
         */
        get_animation_duration(): number;

        /**
         * Gets whether `self` can be navigated.
         * @returns `TRUE` if `self` can be swiped
         */
        get_interactive(): boolean;

        /**
         * Gets the number of pages in `self`.
         * @returns the number of pages in `self`
         */
        get_n_pages(): number;

        /**
         * Gets current scroll position in `self`. It's unitless, 1 matches 1 page.
         * @returns the scroll position
         */
        get_position(): number;

        /**
         * Gets duration of the animation used when adding or removing pages, in
         * milliseconds.
         * @returns the duration
         */
        get_reveal_duration(): number;

        /**
         * Gets spacing between pages in pixels.
         * @returns spacing between pages
         */
        get_spacing(): number;

        /**
         * Inserts `child` into `self` at position `position`.
         * 
         * If position is -1, or larger than the number of pages, `child` will be
         * appended to the end.
         * @param child a widget to add
         * @param position the position to insert `child` in
         */
        insert(child: Gtk.Widget, position: number): void;

        /**
         * Prepends `child` to `self`.
         * @param child a widget to add
         */
        prepend(child: Gtk.Widget): void;

        /**
         * Moves `child` into position `position`.
         * 
         * If position is -1, or larger than the number of pages, `child` will be moved
         * to the end.
         * @param child a widget to add
         * @param position the position to move `child` to
         */
        reorder(child: Gtk.Widget, position: number): void;

        /**
         * Scrolls to `widget` position with an animation.
         * 
         * {@link Carousel.animation_duration} property can be used for controlling
         * the duration.
         * @param widget a child of `self`
         */
        scroll_to(widget: Gtk.Widget): void;

        /**
         * Scrolls to `widget` position with an animation.
         * @param widget a child of `self`
         * @param duration animation duration, in milliseconds
         */
        scroll_to_full(widget: Gtk.Widget, duration: bigint | number): void;

        /**
         * Sets whether to allow swiping for more than one page at a time.
         * @param allow_long_swipes whether to allow long swipes
         */
        set_allow_long_swipes(allow_long_swipes: boolean): void;

        /**
         * Sets whether `self` can be dragged with mouse pointer.
         * 
         * If `allow_mouse_drag` is `FALSE`, dragging is only available on touch.
         * @param allow_mouse_drag whether `self` can be dragged with mouse pointer
         */
        set_allow_mouse_drag(allow_mouse_drag: boolean): void;

        /**
         * Sets whether `self` will respond to scroll wheel events.
         * @param allow_scroll_wheel whether `self` will respond to scroll wheel events
         */
        set_allow_scroll_wheel(allow_scroll_wheel: boolean): void;

        /**
         * Sets animation duration used by {@link Carousel.scroll_to}.
         * @param duration animation duration, in milliseconds
         */
        set_animation_duration(duration: number): void;

        /**
         * Sets whether `self` can be navigated.
         * 
         * This can be used to temporarily disable a {@link Carousel} to only allow
         * swiping in a certain state.
         * @param interactive whether `self` can be swiped
         */
        set_interactive(interactive: boolean): void;

        /**
         * Sets duration of the animation used when adding or removing pages, in
         * milliseconds.
         * @param reveal_duration the new reveal duration value
         */
        set_reveal_duration(reveal_duration: number): void;

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
         * Emits `Handy.Swipeable::child-switched` signal.
         * 
         * This should be called when the widget switches visible child widget.
         * 
         * `duration` can be 0 if the child is switched without animation.
         * @param index the index of the child to switch to
         * @param duration animation duration, in milliseconds
         */
        emit_child_switched(index: number, duration: bigint | number): void;

        /**
         * Gets the progress `self` will snap back to after the gesture is canceled.
         * @returns the cancel progress, unitless
         */
        get_cancel_progress(): number;

        /**
         * Gets the swipe distance of `self`.
         * 
         * This corresponds to how many pixels 1 unit represents.
         * @returns the swipe distance in pixels
         */
        get_distance(): number;

        /**
         * Gets the current progress of `self`.
         * @returns the current progress, unitless
         */
        get_progress(): number;

        /**
         * Gets the snap points of `self`.
         * 
         * Each snap point represents a progress value that is considered acceptable to
         * end the swipe on.
         * @returns the snap points
         */
        get_snap_points(): number[];

        /**
         * Gets the area `self` can start a swipe from for the given direction and
         * gesture type.
         * 
         * This can be used to restrict swipes to only be possible from a certain area,
         * for example, to only allow edge swipes, or to have a draggable element and
         * ignore swipes elsewhere.
         * 
         * Swipe area is only considered for direct swipes (as in, not initiated by
         * {@link SwipeGroup}).
         * 
         * If not implemented, the default implementation returns the allocation of
         * `self`, allowing swipes from anywhere.
         * @param navigation_direction the direction of the swipe
         * @param is_drag whether the swipe is caused by a dragging gesture
         */
        get_swipe_area(navigation_direction: NavigationDirection, is_drag: boolean): Gdk.Rectangle;

        /**
         * Gets the {@link SwipeTracker} used by this swipeable widget.
         * @returns the swipe tracker
         */
        get_swipe_tracker(): SwipeTracker;

        /**
         * Switches to child with index `index`.
         * 
         * See `Handy.Swipeable::child-switched`.
         * @param index the index of the child to switch to
         * @param duration animation duration, in milliseconds
         */
        switch_child(index: number, duration: bigint | number): void;

        /**
         * Gets the progress `self` will snap back to after the gesture is canceled.
         * @virtual
         */
        vfunc_get_cancel_progress(): number;

        /**
         * Gets the swipe distance of `self`.
         * 
         * This corresponds to how many pixels 1 unit represents.
         * @virtual
         */
        vfunc_get_distance(): number;

        /**
         * Gets the current progress of `self`.
         * @virtual
         */
        vfunc_get_progress(): number;

        /**
         * Gets the snap points of `self`.
         * 
         * Each snap point represents a progress value that is considered acceptable to
         * end the swipe on.
         * @virtual
         */
        vfunc_get_snap_points(): number[];

        /**
         * Gets the area `self` can start a swipe from for the given direction and
         * gesture type.
         * 
         * This can be used to restrict swipes to only be possible from a certain area,
         * for example, to only allow edge swipes, or to have a draggable element and
         * ignore swipes elsewhere.
         * 
         * Swipe area is only considered for direct swipes (as in, not initiated by
         * {@link SwipeGroup}).
         * 
         * If not implemented, the default implementation returns the allocation of
         * `self`, allowing swipes from anywhere.
         * @param navigation_direction the direction of the swipe
         * @param is_drag whether the swipe is caused by a dragging gesture
         * @virtual
         */
        vfunc_get_swipe_area(navigation_direction: NavigationDirection, is_drag: boolean): Gdk.Rectangle;

        /**
         * Gets the {@link SwipeTracker} used by this swipeable widget.
         * @virtual
         */
        vfunc_get_swipe_tracker(): SwipeTracker;

        /**
         * Switches to child with index `index`.
         * 
         * See `Handy.Swipeable::child-switched`.
         * @param index the index of the child to switch to
         * @param duration animation duration, in milliseconds
         * @virtual
         */
        vfunc_switch_child(index: number, duration: number): void;

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


    namespace CarouselIndicatorDots {
        // Signal signatures
        interface SignalSignatures extends Gtk.DrawingArea.SignalSignatures {
            "notify::carousel": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.DrawingArea.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {
            carousel: Carousel | null;
        }
    }

    /**
     * A dots indicator for {@link Carousel}.
     * 
     * The {@link Handy.CarouselIndicatorDots} widget shows a set of dots for each page of a
     * given {@link Carousel}. The dot representing the carousel's active page is
     * larger and more opaque than the others, the transition to the active and
     * inactive state is gradual to match the carousel's position.
     * 
     * See also {@link CarouselIndicatorLines}.
     * 
     * ## CSS nodes
     * 
     * {@link Handy.CarouselIndicatorDots} has a single CSS node with name
     * `carouselindicatordots`.
     * @gir-type Class
     * @since 1.0
     */
    class CarouselIndicatorDots extends Gtk.DrawingArea implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<CarouselIndicatorDots>;

        // Properties
        /**
         * The {@link Carousel} the indicator uses.
         * @since 1.0
         */
        get carousel(): Carousel | null;
        set carousel(val: Carousel | null);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CarouselIndicatorDots.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<CarouselIndicatorDots.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): CarouselIndicatorDots;

        // Signals
        /** @signal */
        connect<K extends keyof CarouselIndicatorDots.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CarouselIndicatorDots.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof CarouselIndicatorDots.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CarouselIndicatorDots.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof CarouselIndicatorDots.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CarouselIndicatorDots.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Get the {@link Carousel} the indicator uses.
         * @returns the {@link Carousel}
         */
        get_carousel(): Carousel | null;

        /**
         * Sets the {@link Carousel} to use.
         * @param carousel a carousel
         */
        set_carousel(carousel: Carousel | null): void;

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


    namespace CarouselIndicatorLines {
        // Signal signatures
        interface SignalSignatures extends Gtk.DrawingArea.SignalSignatures {
            "notify::carousel": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.DrawingArea.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {
            carousel: Carousel | null;
        }
    }

    /**
     * A lines indicator for {@link Carousel}.
     * 
     * The {@link Handy.CarouselIndicatorLines} widget shows a set of lines for each page of
     * a given {@link Carousel}. The carousel's active page is shown as another line
     * that moves between them to match the carousel's position.
     * 
     * See also {@link CarouselIndicatorDots}.
     * 
     * ## CSS nodes
     * 
     * {@link Handy.CarouselIndicatorLines} has a single CSS node with name
     * `carouselindicatorlines`.
     * @gir-type Class
     * @since 1.0
     */
    class CarouselIndicatorLines extends Gtk.DrawingArea implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<CarouselIndicatorLines>;

        // Properties
        /**
         * The displayed carousel.
         * @since 1.0
         */
        get carousel(): Carousel | null;
        set carousel(val: Carousel | null);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CarouselIndicatorLines.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<CarouselIndicatorLines.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): CarouselIndicatorLines;

        // Signals
        /** @signal */
        connect<K extends keyof CarouselIndicatorLines.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CarouselIndicatorLines.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof CarouselIndicatorLines.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CarouselIndicatorLines.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof CarouselIndicatorLines.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CarouselIndicatorLines.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets the displayed carousel.
         * @returns the displayed carousel
         */
        get_carousel(): Carousel | null;

        /**
         * Sets the {@link Carousel} to use.
         * @param carousel a carousel
         */
        set_carousel(carousel: Carousel | null): void;

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


    namespace Clamp {
        // Signal signatures
        interface SignalSignatures extends Gtk.Bin.SignalSignatures {
            "notify::maximum-size": (pspec: GObject.ParamSpec) => void;
            "notify::tightening-threshold": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.Bin.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {
            maximum_size: number;
            maximumSize: number;
            tightening_threshold: number;
            tighteningThreshold: number;
        }
    }

    /**
     * A widget constraining its child to a given size.
     * 
     * The {@link Handy.Clamp} widget constrains the size of the widget it contains to a
     * given maximum size. It will constrain the width if it is horizontal, or the
     * height if it is vertical. The expansion of the child from its minimum to its
     * maximum size is eased out for a smooth transition.
     * 
     * If the child requires more than the requested maximum size, it will be
     * allocated the minimum size it can fit in instead.
     * 
     * ## CSS nodes
     * 
     * {@link Handy.Clamp} has a single CSS node with name `clamp`.
     * 
     * The node will get the style classes `.large` when its child reached its
     * maximum size, `.small` when the clamp allocates its full size to its child,
     * `.medium` in-between, or none if it didn't compute its size yet.
     * @gir-type Class
     * @since 1.0
     */
    class Clamp extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<Clamp>;

        // Properties
        /**
         * The maximum size to allocate the children.
         * 
         * It is the width if the clamp is horizontal, or the height if it is
         * vertical.
         * @since 1.0
         * @default 600
         */
        get maximum_size(): number;
        set maximum_size(val: number);

        /**
         * The maximum size to allocate the children.
         * 
         * It is the width if the clamp is horizontal, or the height if it is
         * vertical.
         * @since 1.0
         * @default 600
         */
        get maximumSize(): number;
        set maximumSize(val: number);

        /**
         * The size above which the child is clamped.
         * 
         * Starting from this size, the layout will tighten its grip on the children,
         * slowly allocating less and less of the available size up to the maximum
         * allocated size. Below that threshold and below the maximum size, the
         * children will be allocated all the available size.
         * 
         * If the threshold is greater than the maximum size to allocate to the
         * children, they will be allocated the whole size up to the maximum. If the
         * threshold is lower than the minimum size to allocate to the children, that
         * size will be used as the tightening threshold.
         * 
         * Effectively, tightening the grip on a child before it reaches its maximum
         * size makes transitions to and from the maximum size smoother when resizing.
         * @since 1.0
         * @default 400
         */
        get tightening_threshold(): number;
        set tightening_threshold(val: number);

        /**
         * The size above which the child is clamped.
         * 
         * Starting from this size, the layout will tighten its grip on the children,
         * slowly allocating less and less of the available size up to the maximum
         * allocated size. Below that threshold and below the maximum size, the
         * children will be allocated all the available size.
         * 
         * If the threshold is greater than the maximum size to allocate to the
         * children, they will be allocated the whole size up to the maximum. If the
         * threshold is lower than the minimum size to allocate to the children, that
         * size will be used as the tightening threshold.
         * 
         * Effectively, tightening the grip on a child before it reaches its maximum
         * size makes transitions to and from the maximum size smoother when resizing.
         * @since 1.0
         * @default 400
         */
        get tighteningThreshold(): number;
        set tighteningThreshold(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Clamp.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Clamp.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Clamp;

        // Signals
        /** @signal */
        connect<K extends keyof Clamp.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Clamp.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Clamp.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Clamp.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Clamp.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Clamp.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets the maximum size allocated to the children.
         * @returns the maximum size to allocate to the children
         */
        get_maximum_size(): number;

        /**
         * Gets the size above which the children are clamped.
         * @returns the size above which the children are clamped
         */
        get_tightening_threshold(): number;

        /**
         * Sets the maximum size allocated to the children.
         * @param maximum_size the maximum size
         */
        set_maximum_size(maximum_size: number): void;

        /**
         * Sets the size above which the children are clamped.
         * @param tightening_threshold the tightening threshold
         */
        set_tightening_threshold(tightening_threshold: number): void;

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


    namespace ComboRow {
        // Signal signatures
        interface SignalSignatures extends ActionRow.SignalSignatures {
            "notify::selected-index": (pspec: GObject.ParamSpec) => void;
            "notify::use-subtitle": (pspec: GObject.ParamSpec) => void;
            "notify::activatable-widget": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::subtitle": (pspec: GObject.ParamSpec) => void;
            "notify::subtitle-lines": (pspec: GObject.ParamSpec) => void;
            "notify::title-lines": (pspec: GObject.ParamSpec) => void;
            "notify::use-underline": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
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
     * A {@link Gtk.ListBoxRow} used to choose from a list of items.
     * 
     * The {@link Handy.ComboRow} widget allows the user to choose from a list of valid
     * choices. The row displays the selected choice. When activated, the row
     * displays a popover which allows the user to make a new choice.
     * 
     * The {@link ComboRow} uses the model-view pattern; the list of valid choices
     * is specified in the form of a {@link Gio.ListModel}, and the display of the
     * choices can be adapted to the data in the model via widget creation
     * functions.
     * 
     * {@link Handy.ComboRow} is {@link Gtk.ListBoxRow.activatable} if a model is set.
     * 
     * ## CSS nodes
     * 
     * {@link Handy.ComboRow} has a main CSS node with name `row`.
     * 
     * Its popover has the node name popover with the `.combo` style class, it
     * contains a {@link Gtk.ScrolledWindow}, which in turn contains a
     * {@link Gtk.ListBox}, both are accessible via their regular nodes.
     * 
     * A checkmark of node and style class `image.checkmark` in the popover denotes
     * the current item.
     * @gir-type Class
     * @since 1.0
     */
    class ComboRow extends ActionRow implements Atk.ImplementorIface, Gtk.Actionable, Gtk.Buildable {
        static $gtype: GObject.GType<ComboRow>;

        // Properties
        /**
         * The index of the selected item in its {@link Gio.ListModel}.
         * @since 1.0
         * @default -1
         */
        get selected_index(): number;
        set selected_index(val: number);

        /**
         * The index of the selected item in its {@link Gio.ListModel}.
         * @since 1.0
         * @default -1
         */
        get selectedIndex(): number;
        set selectedIndex(val: number);

        /**
         * Whether to use the current value as the subtitle.
         * 
         * If you use a custom widget creation function, you will need to give the row
         * a name conversion closure with {@link ComboRow.set_get_name_func}.
         * 
         * If `TRUE`, you should not access {@link ActionRow.subtitle}.
         * @since 1.0
         * @default false
         */
        get use_subtitle(): boolean;
        set use_subtitle(val: boolean);

        /**
         * Whether to use the current value as the subtitle.
         * 
         * If you use a custom widget creation function, you will need to give the row
         * a name conversion closure with {@link ComboRow.set_get_name_func}.
         * 
         * If `TRUE`, you should not access {@link ActionRow.subtitle}.
         * @since 1.0
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
         * `NULL`, `self` is left empty.
         * @param model the {@link Gio.ListModel} to be bound to `self`
         * @param create_list_widget_func a function that creates   widgets for items to display in the list, or `NULL` in case you also passed   `NULL` as `model`
         * @param create_current_widget_func a function that creates   widgets for items to display as the selected item, or `NULL` in case you   also passed `NULL` as `model`
         */
        bind_model(model: Gio.ListModel | null, create_list_widget_func: Gtk.ListBoxCreateWidgetFunc | null, create_current_widget_func: Gtk.ListBoxCreateWidgetFunc | null): void;

        /**
         * Binds `model` to `self`.
         * 
         * If `self` was already bound to a model, that previous binding is destroyed.
         * 
         * The contents of `self` are cleared and then filled with widgets that represent
         * items from `model`. `self` is updated whenever `model` changes. If `model` is
         * `NULL`, `self` is left empty.
         * 
         * This is more convenient to use than {@link ComboRow.bind_model} if you want
         * to represent items of the model with names.
         * @param model the {@link Gio.ListModel} to be bound to `self`
         * @param get_name_func a function that creates names for items, or   `NULL` in case you also passed `NULL` as `model`
         */
        bind_name_model(model: Gio.ListModel | null, get_name_func: ComboRowGetNameFunc | null): void;

        /**
         * Gets the model bound to `self`.
         * @returns the {@link Gio.ListModel} bound to `self`
         */
        get_model(): Gio.ListModel | null;

        /**
         * Gets the index of the selected item in its {@link Gio.ListModel}.
         * @returns the index of the selected item, or -1 if no item is selected
         */
        get_selected_index(): number;

        /**
         * Gets whether the current value of `self` should be displayed as its subtitle.
         * @returns whether the current value of `self` should be displayed as its   subtitle
         */
        get_use_subtitle(): boolean;

        /**
         * Creates a model for `enum_type` and binds it to `self`.
         * 
         * The items of the model will be {@link EnumValueObject} objects.
         * 
         * If `self` was already bound to a model, that previous binding is destroyed.
         * 
         * The contents of `self` are cleared and then filled with widgets that represent
         * items from `model`. `self` is updated whenever `model` changes. If `model` is
         * `NULL`, `self` is left empty.
         * 
         * This is more convenient to use than {@link ComboRow.bind_name_model} if you
         * want to represent values of an enumeration with names.
         * 
         * See {@link enum_value_row_name}.
         * @param enum_type the enumeration {@link GLib.Type} to be bound to `self`
         * @param get_name_func a function that creates names for items, or   `NULL` in case you also passed `NULL` as `model`
         */
        set_for_enum(enum_type: GObject.GType, get_name_func: ComboRowGetEnumValueNameFunc | null): void;

        /**
         * Sets a closure to convert items into names.
         * 
         * See {@link ComboRow.use_subtitle}.
         * @param get_name_func a function that creates names for items, or   `NULL` in case you also passed `NULL` as `model`
         */
        set_get_name_func(get_name_func: ComboRowGetNameFunc | null): void;

        /**
         * Sets the index of the selected item in its {@link Gio.ListModel}.
         * @param selected_index the index of the selected item
         */
        set_selected_index(selected_index: number): void;

        /**
         * Sets whether the current value of `self` should be displayed as its subtitle.
         * 
         * If `TRUE`, you should not access {@link ActionRow.subtitle}.
         * @param use_subtitle `TRUE` to set the current value as the subtitle
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


    namespace Deck {
        // Signal signatures
        interface SignalSignatures extends Gtk.Container.SignalSignatures {
            "notify::can-swipe-back": (pspec: GObject.ParamSpec) => void;
            "notify::can-swipe-forward": (pspec: GObject.ParamSpec) => void;
            "notify::hhomogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::interpolate-size": (pspec: GObject.ParamSpec) => void;
            "notify::transition-duration": (pspec: GObject.ParamSpec) => void;
            "notify::transition-running": (pspec: GObject.ParamSpec) => void;
            "notify::transition-type": (pspec: GObject.ParamSpec) => void;
            "notify::vhomogeneous": (pspec: GObject.ParamSpec) => void;
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
            hhomogeneous: boolean;
            interpolate_size: boolean;
            interpolateSize: boolean;
            transition_duration: number;
            transitionDuration: number;
            transition_running: boolean;
            transitionRunning: boolean;
            transition_type: DeckTransitionType;
            transitionType: DeckTransitionType;
            vhomogeneous: boolean;
            visible_child: Gtk.Widget;
            visibleChild: Gtk.Widget;
            visible_child_name: string;
            visibleChildName: string;
        }
    }

    /**
     * A swipeable widget showing one of the visible children at a time.
     * 
     * The {@link Handy.Deck} widget displays one of the visible children, similar to a
     * {@link Gtk.Stack}. The children are strictly ordered and can be navigated
     * using swipe gestures.
     * 
     * The “over” and “under” stack the children one on top of the other, while the
     * “slide” transition puts the children side by side. While navigating to a
     * child on the side or below can be performed by swiping the current child
     * away, navigating to an upper child requires dragging it from the edge where
     * it resides. This doesn't affect non-dragging swipes.
     * 
     * The “over” and “under” transitions can draw their shadow on top of the
     * window's transparent areas, like the rounded corners. This is a side-effect
     * of allowing shadows to be drawn on top of OpenGL areas. It can be mitigated
     * by using {@link Window} or {@link ApplicationWindow} as they will crop
     * anything drawn beyond the rounded corners.
     * 
     * ## CSS nodes
     * 
     * {@link Handy.Deck} has a single CSS node with name `deck`.
     * @gir-type Class
     * @since 1.0
     */
    class Deck extends Gtk.Container implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable, Swipeable {
        static $gtype: GObject.GType<Deck>;

        // Properties
        /**
         * Whether swipe gestures allow switching to the previous child.
         * @since 1.0
         * @default false
         */
        get can_swipe_back(): boolean;
        set can_swipe_back(val: boolean);

        /**
         * Whether swipe gestures allow switching to the previous child.
         * @since 1.0
         * @default false
         */
        get canSwipeBack(): boolean;
        set canSwipeBack(val: boolean);

        /**
         * Whether swipe gestures allow switching to the next child.
         * @since 1.0
         * @default false
         */
        get can_swipe_forward(): boolean;
        set can_swipe_forward(val: boolean);

        /**
         * Whether swipe gestures allow switching to the next child.
         * @since 1.0
         * @default false
         */
        get canSwipeForward(): boolean;
        set canSwipeForward(val: boolean);

        /**
         * Horizontally homogeneous sizing.
         * @since 1.0
         * @default true
         */
        get hhomogeneous(): boolean;
        set hhomogeneous(val: boolean);

        /**
         * Whether or not the size should smoothly change when changing between
         * differently sized children.
         * @since 1.0
         * @default false
         */
        get interpolate_size(): boolean;
        set interpolate_size(val: boolean);

        /**
         * Whether or not the size should smoothly change when changing between
         * differently sized children.
         * @since 1.0
         * @default false
         */
        get interpolateSize(): boolean;
        set interpolateSize(val: boolean);

        /**
         * The transition animation duration, in milliseconds.
         * @since 1.0
         * @default 200
         */
        get transition_duration(): number;
        set transition_duration(val: number);

        /**
         * The transition animation duration, in milliseconds.
         * @since 1.0
         * @default 200
         */
        get transitionDuration(): number;
        set transitionDuration(val: number);

        /**
         * Whether or not the transition is currently running.
         * @since 1.0
         * @read-only
         * @default false
         */
        get transition_running(): boolean;

        /**
         * Whether or not the transition is currently running.
         * @since 1.0
         * @read-only
         * @default false
         */
        get transitionRunning(): boolean;

        /**
         * The type of animation that will be used for transitions between children.
         * 
         * The transition type can be changed without problems at runtime, so it is
         * possible to change the animation based on the child that is about to become
         * current.
         * @since 1.0
         * @default Handy.DeckTransitionType.OVER
         */
        get transition_type(): DeckTransitionType;
        set transition_type(val: DeckTransitionType);

        /**
         * The type of animation that will be used for transitions between children.
         * 
         * The transition type can be changed without problems at runtime, so it is
         * possible to change the animation based on the child that is about to become
         * current.
         * @since 1.0
         * @default Handy.DeckTransitionType.OVER
         */
        get transitionType(): DeckTransitionType;
        set transitionType(val: DeckTransitionType);

        /**
         * Vertically homogeneous sizing.
         * @since 1.0
         * @default true
         */
        get vhomogeneous(): boolean;
        set vhomogeneous(val: boolean);

        /**
         * The widget currently visible.
         * 
         * The transition is determined by {@link Deck.transition_type} and
         * {@link Deck.transition_duration}. The transition can be cancelled by the
         * user, in which case visible child will change back to the previously
         * visible child.
         * @since 1.0
         */
        get visible_child(): Gtk.Widget;
        set visible_child(val: Gtk.Widget);

        /**
         * The widget currently visible.
         * 
         * The transition is determined by {@link Deck.transition_type} and
         * {@link Deck.transition_duration}. The transition can be cancelled by the
         * user, in which case visible child will change back to the previously
         * visible child.
         * @since 1.0
         */
        get visibleChild(): Gtk.Widget;
        set visibleChild(val: Gtk.Widget);

        /**
         * The name of the widget currently visible.
         * @since 1.0
         * @default null
         */
        get visible_child_name(): string;
        set visible_child_name(val: string);

        /**
         * The name of the widget currently visible.
         * @since 1.0
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
        $signals: Deck.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Deck.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Deck;

        // Signals
        /** @signal */
        connect<K extends keyof Deck.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Deck.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Deck.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Deck.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Deck.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Deck.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Finds the previous or next navigatable child.
         * 
         * Gets the previous or next child. This will be the same widget
         * {@link Deck.navigate} will navigate to.
         * 
         * If there's no child to navigate to, `NULL` will be returned instead.
         * @param direction the direction
         * @returns the previous or next child
         */
        get_adjacent_child(direction: NavigationDirection): Gtk.Widget | null;

        /**
         * Gets whether swipe gestures for navigating backward are enabled.
         * @returns Whether swipe gestures are enabled.
         */
        get_can_swipe_back(): boolean;

        /**
         * Gets whether swipe gestures for navigating forward enabled.
         * @returns Whether swipe gestures are enabled.
         */
        get_can_swipe_forward(): boolean;

        /**
         * Finds the child of `self` with `name`.
         * 
         * Returns `NULL` if there is no child with this name.
         * @param name the name of the child to find
         * @returns the requested child of `self`
         */
        get_child_by_name(name: string): Gtk.Widget | null;

        /**
         * Gets whether `self` is homogeneous for the given orientation.
         * @param orientation the orientation
         * @returns whether `self` is homogeneous for the given orientation
         */
        get_homogeneous(orientation: Gtk.Orientation): boolean;

        /**
         * Gets whether `self` will interpolate its size when changing the visible child.
         * @returns whether child sizes are interpolated
         */
        get_interpolate_size(): boolean;

        /**
         * Gets the mode transition animation duration for `self`.
         * @returns the mode transition duration, in milliseconds.
         */
        get_transition_duration(): number;

        /**
         * Gets whether a transition is currently running for `self`.
         * @returns whether a transition is currently running
         */
        get_transition_running(): boolean;

        /**
         * Gets the type of animation used for transitions between children.
         * @returns the current transition type of `self`
         */
        get_transition_type(): DeckTransitionType;

        /**
         * Gets the visible child widget.
         * @returns the visible child widget
         */
        get_visible_child(): Gtk.Widget;

        /**
         * Gets the name of the currently visible child widget.
         * @returns the name of the visible child
         */
        get_visible_child_name(): string;

        /**
         * Inserts `child` in the position after `sibling` in the list of children.
         * 
         * If `sibling` is `NULL`, inserts `child` at the first position.
         * @param child the widget to insert
         * @param sibling the sibling after which to insert `child`
         */
        insert_child_after(child: Gtk.Widget, sibling: Gtk.Widget | null): void;

        /**
         * Navigates to the previous or next child.
         * 
         * The switch is similar to performing a swipe gesture to go in `direction`.
         * @param direction the direction
         * @returns whether the visible child was changed
         */
        navigate(direction: NavigationDirection): boolean;

        /**
         * Inserts `child` at the first position in `self`.
         * @param child the widget to prepend
         */
        prepend(child: Gtk.Widget): void;

        /**
         * Moves `child` to the position after `sibling` in the list of children.
         * 
         * If `sibling` is `NULL`, move `child` to the first position.
         * @param child the widget to move, must be a child of `self`
         * @param sibling the sibling to move `child` after
         */
        reorder_child_after(child: Gtk.Widget, sibling: Gtk.Widget | null): void;

        /**
         * Sets whether swipe gestures for navigating backward are enabled.
         * @param can_swipe_back the new value
         */
        set_can_swipe_back(can_swipe_back: boolean): void;

        /**
         * Sets whether swipe gestures for navigating forward are enabled.
         * @param can_swipe_forward the new value
         */
        set_can_swipe_forward(can_swipe_forward: boolean): void;

        /**
         * Sets whether `self` is homogeneous for a given orientation.
         * 
         * If set to `FALSE`, different children can have different size along the
         * opposite orientation.
         * @param orientation the orientation
         * @param homogeneous `TRUE` to make `self` homogeneous
         */
        set_homogeneous(orientation: Gtk.Orientation, homogeneous: boolean): void;

        /**
         * Sets whether `self` will interpolate its size when changing the visible child.
         * 
         * `self` will interpolate its size between the current one and the one it'll
         * take after changing the visible child, according to the set transition
         * duration.
         * @param interpolate_size the new value
         */
        set_interpolate_size(interpolate_size: boolean): void;

        /**
         * Sets the mode transition animation duration for `self`.
         * @param duration the new duration, in milliseconds
         */
        set_transition_duration(duration: number): void;

        /**
         * Sets the type of animation used for transitions between children.
         * 
         * The transition type can be changed without problems at runtime, so it is
         * possible to change the animation based on the child that is about to become
         * current.
         * @param transition the new transition type
         */
        set_transition_type(transition: DeckTransitionType): void;

        /**
         * Sets the currently visible widget.
         * @param visible_child the new child
         */
        set_visible_child(visible_child: Gtk.Widget): void;

        /**
         * Makes the child with the name `name` visible.
         * 
         * See {@link Deck.set_visible_child} for more details.
         * @param name the name of a child
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
         * Emits `Handy.Swipeable::child-switched` signal.
         * 
         * This should be called when the widget switches visible child widget.
         * 
         * `duration` can be 0 if the child is switched without animation.
         * @param index the index of the child to switch to
         * @param duration animation duration, in milliseconds
         */
        emit_child_switched(index: number, duration: bigint | number): void;

        /**
         * Gets the progress `self` will snap back to after the gesture is canceled.
         * @returns the cancel progress, unitless
         */
        get_cancel_progress(): number;

        /**
         * Gets the swipe distance of `self`.
         * 
         * This corresponds to how many pixels 1 unit represents.
         * @returns the swipe distance in pixels
         */
        get_distance(): number;

        /**
         * Gets the current progress of `self`.
         * @returns the current progress, unitless
         */
        get_progress(): number;

        /**
         * Gets the snap points of `self`.
         * 
         * Each snap point represents a progress value that is considered acceptable to
         * end the swipe on.
         * @returns the snap points
         */
        get_snap_points(): number[];

        /**
         * Gets the area `self` can start a swipe from for the given direction and
         * gesture type.
         * 
         * This can be used to restrict swipes to only be possible from a certain area,
         * for example, to only allow edge swipes, or to have a draggable element and
         * ignore swipes elsewhere.
         * 
         * Swipe area is only considered for direct swipes (as in, not initiated by
         * {@link SwipeGroup}).
         * 
         * If not implemented, the default implementation returns the allocation of
         * `self`, allowing swipes from anywhere.
         * @param navigation_direction the direction of the swipe
         * @param is_drag whether the swipe is caused by a dragging gesture
         */
        get_swipe_area(navigation_direction: NavigationDirection, is_drag: boolean): Gdk.Rectangle;

        /**
         * Gets the {@link SwipeTracker} used by this swipeable widget.
         * @returns the swipe tracker
         */
        get_swipe_tracker(): SwipeTracker;

        /**
         * Switches to child with index `index`.
         * 
         * See `Handy.Swipeable::child-switched`.
         * @param index the index of the child to switch to
         * @param duration animation duration, in milliseconds
         */
        switch_child(index: number, duration: bigint | number): void;

        /**
         * Gets the progress `self` will snap back to after the gesture is canceled.
         * @virtual
         */
        vfunc_get_cancel_progress(): number;

        /**
         * Gets the swipe distance of `self`.
         * 
         * This corresponds to how many pixels 1 unit represents.
         * @virtual
         */
        vfunc_get_distance(): number;

        /**
         * Gets the current progress of `self`.
         * @virtual
         */
        vfunc_get_progress(): number;

        /**
         * Gets the snap points of `self`.
         * 
         * Each snap point represents a progress value that is considered acceptable to
         * end the swipe on.
         * @virtual
         */
        vfunc_get_snap_points(): number[];

        /**
         * Gets the area `self` can start a swipe from for the given direction and
         * gesture type.
         * 
         * This can be used to restrict swipes to only be possible from a certain area,
         * for example, to only allow edge swipes, or to have a draggable element and
         * ignore swipes elsewhere.
         * 
         * Swipe area is only considered for direct swipes (as in, not initiated by
         * {@link SwipeGroup}).
         * 
         * If not implemented, the default implementation returns the allocation of
         * `self`, allowing swipes from anywhere.
         * @param navigation_direction the direction of the swipe
         * @param is_drag whether the swipe is caused by a dragging gesture
         * @virtual
         */
        vfunc_get_swipe_area(navigation_direction: NavigationDirection, is_drag: boolean): Gdk.Rectangle;

        /**
         * Gets the {@link SwipeTracker} used by this swipeable widget.
         * @virtual
         */
        vfunc_get_swipe_tracker(): SwipeTracker;

        /**
         * Switches to child with index `index`.
         * 
         * See `Handy.Swipeable::child-switched`.
         * @param index the index of the child to switch to
         * @param duration animation duration, in milliseconds
         * @virtual
         */
        vfunc_switch_child(index: number, duration: number): void;

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


    namespace EnumValueObject {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * An object representing an {@link GObject.EnumValue}.
     * 
     * The {@link Handy.EnumValueObject} object represents a {@link GObject.EnumValue},
     * allowing it to be used with {@link Gio.ListModel}.
     * @gir-type Class
     * @since 1.0
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
        /**
         * Gets the name of `self`.
         * @returns the name of `self`
         */
        get_name(): string;

        /**
         * Gets the nick of `self`.
         * @returns the nick of `self`
         */
        get_nick(): string;

        /**
         * Gets the value of `self`.
         * @returns the value of `self`
         */
        get_value(): number;
    }


    namespace ExpanderRow {
        // Signal signatures
        interface SignalSignatures extends PreferencesRow.SignalSignatures {
            "notify::enable-expansion": (pspec: GObject.ParamSpec) => void;
            "notify::expanded": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::show-enable-switch": (pspec: GObject.ParamSpec) => void;
            "notify::subtitle": (pspec: GObject.ParamSpec) => void;
            "notify::use-underline": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
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
            enable_expansion: boolean;
            enableExpansion: boolean;
            expanded: boolean;
            icon_name: string;
            iconName: string;
            show_enable_switch: boolean;
            showEnableSwitch: boolean;
            subtitle: string | null;
            use_underline: boolean;
            useUnderline: boolean;
        }
    }

    /**
     * A {@link Gtk.ListBoxRow} used to reveal widgets.
     * 
     * The {@link Handy.ExpanderRow} widget allows the user to reveal or hide widgets below
     * it. It also allows the user to enable the expansion of the row, allowing to
     * disable all that the row contains.
     * 
     * ## HdyExpanderRow as GtkBuildable
     * 
     * The {@link Handy.ExpanderRow} implementation of the {@link Gtk.Buildable} interface
     * supports adding a child as an action widget by specifying “action” as the
     * “type” attribute of a <child> element.
     * 
     * It also supports adding it as a prefix widget by specifying “prefix” as the
     * “type” attribute of a <child> element.
     * 
     * ## CSS nodes
     * 
     * {@link Handy.ExpanderRow} has a main CSS node with name `row`, and the `.expander`
     * style class. It has the `.empty` style class when it contains no children.
     * 
     * It contains the subnodes `row.header` for its main embedded row,
     * `list.nested` for the list it can expand, and `image.expander-row-arrow` for
     * its arrow.
     * 
     * When expanded, {@link Handy.ExpanderRow} will add the
     * `.checked-expander-row-previous-sibling` style class to its previous sibling,
     * and remove it when retracted.
     * @gir-type Class
     * @since 1.0
     */
    class ExpanderRow extends PreferencesRow implements Atk.ImplementorIface, Gtk.Actionable, Gtk.Buildable {
        static $gtype: GObject.GType<ExpanderRow>;

        // Properties
        /**
         * Whether expansion is enabled.
         * @since 1.0
         * @default true
         */
        get enable_expansion(): boolean;
        set enable_expansion(val: boolean);

        /**
         * Whether expansion is enabled.
         * @since 1.0
         * @default true
         */
        get enableExpansion(): boolean;
        set enableExpansion(val: boolean);

        /**
         * Whether the row is expanded.
         * @since 1.0
         * @default false
         */
        get expanded(): boolean;
        set expanded(val: boolean);

        /**
         * The icon name for this row.
         * @since 1.0
         */
        get icon_name(): string;
        set icon_name(val: string);

        /**
         * The icon name for this row.
         * @since 1.0
         */
        get iconName(): string;
        set iconName(val: string);

        /**
         * Whether the switch enabling the expansion is visible.
         * @since 1.0
         * @default false
         */
        get show_enable_switch(): boolean;
        set show_enable_switch(val: boolean);

        /**
         * Whether the switch enabling the expansion is visible.
         * @since 1.0
         * @default false
         */
        get showEnableSwitch(): boolean;
        set showEnableSwitch(val: boolean);

        /**
         * The subtitle for this row.
         * @since 1.0
         */
        get subtitle(): string | null;
        set subtitle(val: string | null);

        /**
         * Whether an embedded underline in the title or subtitle labels indicates a
         * mnemonic.
         * @since 1.0
         * @default false
         */
        get use_underline(): boolean;
        set use_underline(val: boolean);

        /**
         * Whether an embedded underline in the title or subtitle labels indicates a
         * mnemonic.
         * @since 1.0
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
         * Adds an action widget to `self`.
         * @param widget the action widget
         */
        add_action(widget: Gtk.Widget): void;

        /**
         * Adds a prefix widget to `self`.
         * @param widget the prefix widget
         */
        add_prefix(widget: Gtk.Widget): void;

        /**
         * Gets whether the expansion of `self` is enabled.
         * @returns whether the expansion of `self` is enabled
         */
        get_enable_expansion(): boolean;

        get_expanded(): boolean;

        /**
         * Gets the icon name for `self`.
         * @returns the icon name for `self`
         */
        get_icon_name(): string;

        /**
         * Gets whether the switch enabling the expansion of `self` is visible.
         * @returns whether the switch enabling the expansion of `self` is visible
         */
        get_show_enable_switch(): boolean;

        /**
         * Gets the subtitle for `self`.
         * @returns the subtitle for `self`
         */
        get_subtitle(): string | null;

        /**
         * Gets whether an embedded underline in the title or subtitle labels indicates
         * a mnemonic.
         * @returns whether an embedded underlines indicates a mnemonic
         */
        get_use_underline(): boolean;

        /**
         * Sets whether the expansion of `self` is enabled.
         * @param enable_expansion `TRUE` to enable the expansion
         */
        set_enable_expansion(enable_expansion: boolean): void;

        /**
         * @param expanded 
         */
        set_expanded(expanded: boolean): void;

        /**
         * Sets the icon name for `self`.
         * @param icon_name the icon name
         */
        set_icon_name(icon_name: string): void;

        /**
         * Sets whether the switch enabling the expansion of `self` is visible.
         * @param show_enable_switch `TRUE` to show the switch enabling the expansion
         */
        set_show_enable_switch(show_enable_switch: boolean): void;

        /**
         * Sets the subtitle for `self`.
         * @param subtitle the subtitle
         */
        set_subtitle(subtitle: string | null): void;

        /**
         * Sets whether an embedded underline in the title or subtitle labels indicates
         * a mnemonic.
         * @param use_underline `TRUE` if underlines in the text indicate mnemonics
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


    namespace Flap {
        // Signal signatures
        interface SignalSignatures extends Gtk.Container.SignalSignatures {
            "notify::content": (pspec: GObject.ParamSpec) => void;
            "notify::flap": (pspec: GObject.ParamSpec) => void;
            "notify::flap-position": (pspec: GObject.ParamSpec) => void;
            "notify::fold-duration": (pspec: GObject.ParamSpec) => void;
            "notify::fold-policy": (pspec: GObject.ParamSpec) => void;
            "notify::folded": (pspec: GObject.ParamSpec) => void;
            "notify::locked": (pspec: GObject.ParamSpec) => void;
            "notify::modal": (pspec: GObject.ParamSpec) => void;
            "notify::reveal-duration": (pspec: GObject.ParamSpec) => void;
            "notify::reveal-flap": (pspec: GObject.ParamSpec) => void;
            "notify::reveal-progress": (pspec: GObject.ParamSpec) => void;
            "notify::separator": (pspec: GObject.ParamSpec) => void;
            "notify::swipe-to-close": (pspec: GObject.ParamSpec) => void;
            "notify::swipe-to-open": (pspec: GObject.ParamSpec) => void;
            "notify::transition-type": (pspec: GObject.ParamSpec) => void;
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
            content: Gtk.Widget | null;
            flap: Gtk.Widget | null;
            flap_position: Gtk.PackType;
            flapPosition: Gtk.PackType;
            fold_duration: number;
            foldDuration: number;
            fold_policy: FlapFoldPolicy;
            foldPolicy: FlapFoldPolicy;
            folded: boolean;
            locked: boolean;
            modal: boolean;
            reveal_duration: number;
            revealDuration: number;
            reveal_flap: boolean;
            revealFlap: boolean;
            reveal_progress: number;
            revealProgress: number;
            separator: Gtk.Widget | null;
            swipe_to_close: boolean;
            swipeToClose: boolean;
            swipe_to_open: boolean;
            swipeToOpen: boolean;
            transition_type: FlapTransitionType;
            transitionType: FlapTransitionType;
        }
    }

    /**
     * An adaptive container acting like a box or an overlay.
     * 
     * The {@link Handy.Flap} widget can display its children like a {@link Gtk.Box} does or
     * like a {@link Gtk.Overlay} does, according to the
     * {@link Flap.fold_policy} value.
     * 
     * {@link Handy.Flap} has at most three children: {@link Flap.content},
     * {@link Flap.flap} and {@link Flap.separator}. Content is the primary
     * child, flap is displayed next to it when unfolded, or overlays it when
     * folded. Flap can be shown or hidden by changing the
     * {@link Flap.reveal_flap} value, as well as via swipe gestures if
     * {@link Flap.swipe_to_open} and/or {@link Flap.swipe_to_close} are set
     * to `TRUE`.
     * 
     * Optionally, a separator can be provided, which would be displayed between the
     * content and the flap when there's no shadow to separate them, depending on
     * the transition type.
     * 
     * {@link Flap.flap} is transparent by default; add the `.background` style
     * class to it if this is unwanted.
     * 
     * If {@link Flap.modal} is set to `TRUE`, content becomes completely
     * inaccessible when the flap is revealed while folded.
     * 
     * The position of the flap and separator children relative to the content is
     * determined by orientation, as well as the {@link Flap.flap_position}
     * value.
     * 
     * Folding the flap will automatically hide the flap widget, and unfolding it
     * will automatically reveal it. If this behavior is not desired, the
     * {@link Flap.locked} property can be used to override it.
     * 
     * Common use cases include sidebars, header bars that need to be able to
     * overlap the window content (for example, in fullscreen mode) and bottom
     * sheets.
     * 
     * ## HdyFlap as GtkBuildable
     * 
     * The {@link Handy.Flap} implementation of the {@link Gtk.Buildable} interface supports
     * setting the flap child by specifying “flap” as the “type” attribute of a
     * <child> element, and separator by specifying “separator”. Specifying
     * “content” child type or omitting it results in setting the content child.
     * 
     * ## CSS nodes
     * 
     * {@link Handy.Flap} has a single CSS node with name `flap`. The node will get the style
     * classes `.folded` when it is folded, and `.unfolded` when it's not.
     * @gir-type Class
     * @since 1.2
     */
    class Flap extends Gtk.Container implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable, Swipeable {
        static $gtype: GObject.GType<Flap>;

        // Properties
        /**
         * The content widget.
         * 
         * It's always displayed when unfolded, and partially visible
         * when folded.
         * @since 1.2
         */
        get content(): Gtk.Widget | null;
        set content(val: Gtk.Widget | null);

        /**
         * The flap widget.
         * 
         * It's only visible when {@link Flap.reveal_progress} is greater than 0.
         * @since 1.2
         */
        get flap(): Gtk.Widget | null;
        set flap(val: Gtk.Widget | null);

        /**
         * The flap position.
         * 
         * If `GTK_PACK_START`, the flap is displayed before the content, if
         * `GTK_PACK_END`, it's displayed after the content.
         * @since 1.2
         * @default Gtk.PackType.START
         */
        get flap_position(): Gtk.PackType;
        set flap_position(val: Gtk.PackType);

        /**
         * The flap position.
         * 
         * If `GTK_PACK_START`, the flap is displayed before the content, if
         * `GTK_PACK_END`, it's displayed after the content.
         * @since 1.2
         * @default Gtk.PackType.START
         */
        get flapPosition(): Gtk.PackType;
        set flapPosition(val: Gtk.PackType);

        /**
         * The fold transition animation duration, in milliseconds.
         * @since 1.2
         * @default 250
         */
        get fold_duration(): number;
        set fold_duration(val: number);

        /**
         * The fold transition animation duration, in milliseconds.
         * @since 1.2
         * @default 250
         */
        get foldDuration(): number;
        set foldDuration(val: number);

        /**
         * The current fold policy.
         * 
         * See {@link FlapFoldPolicy} for available policies.
         * @since 1.2
         * @default Handy.FlapFoldPolicy.AUTO
         */
        get fold_policy(): FlapFoldPolicy;
        set fold_policy(val: FlapFoldPolicy);

        /**
         * The current fold policy.
         * 
         * See {@link FlapFoldPolicy} for available policies.
         * @since 1.2
         * @default Handy.FlapFoldPolicy.AUTO
         */
        get foldPolicy(): FlapFoldPolicy;
        set foldPolicy(val: FlapFoldPolicy);

        /**
         * Whether the flap is currently folded.
         * 
         * See {@link Flap.fold_policy}.
         * @since 1.2
         * @read-only
         * @default false
         */
        get folded(): boolean;

        /**
         * Whether the flap is locked.
         * 
         * If `FALSE`, folding when the flap is revealed automatically closes it, and
         * unfolding it when the flap is not revealed opens it. If `TRUE`,
         * {@link Flap.reveal_flap} value never changes on its own.
         * @since 1.2
         * @default false
         */
        get locked(): boolean;
        set locked(val: boolean);

        /**
         * Whether the flap is modal.
         * 
         * If `TRUE`, clicking the content widget while flap is revealed, as well as
         * pressing the <kbd>Esc</kbd> key, will close the flap. If `FALSE`, clicks
         * are passed through to the content widget.
         * @since 1.2
         * @default true
         */
        get modal(): boolean;
        set modal(val: boolean);

        /**
         * The reveal transition animation duration, in milliseconds.
         * @since 1.2
         * @default 250
         */
        get reveal_duration(): number;
        set reveal_duration(val: number);

        /**
         * The reveal transition animation duration, in milliseconds.
         * @since 1.2
         * @default 250
         */
        get revealDuration(): number;
        set revealDuration(val: number);

        /**
         * Whether the flap widget is revealed.
         * @since 1.2
         * @default true
         */
        get reveal_flap(): boolean;
        set reveal_flap(val: boolean);

        /**
         * Whether the flap widget is revealed.
         * @since 1.2
         * @default true
         */
        get revealFlap(): boolean;
        set revealFlap(val: boolean);

        /**
         * The current reveal transition progress.
         * 
         * 0 means fully hidden, 1 means fully revealed. See
         * {@link Flap.reveal_flap}.
         * @since 1.2
         * @read-only
         * @default 1
         */
        get reveal_progress(): number;

        /**
         * The current reveal transition progress.
         * 
         * 0 means fully hidden, 1 means fully revealed. See
         * {@link Flap.reveal_flap}.
         * @since 1.2
         * @read-only
         * @default 1
         */
        get revealProgress(): number;

        /**
         * The separator widget.
         * 
         * It's displayed between content and flap when there's no shadow to display.
         * When exactly it's visible depends on the {@link Flap.transition_type}
         * value. If `NULL`, no separator will be used.
         * @since 1.2
         */
        get separator(): Gtk.Widget | null;
        set separator(val: Gtk.Widget | null);

        /**
         * Whether the flap can be closed with a swipe gesture.
         * 
         * The area that can be swiped depends on the {@link Flap.transition_type}
         * value.
         * @since 1.2
         * @default true
         */
        get swipe_to_close(): boolean;
        set swipe_to_close(val: boolean);

        /**
         * Whether the flap can be closed with a swipe gesture.
         * 
         * The area that can be swiped depends on the {@link Flap.transition_type}
         * value.
         * @since 1.2
         * @default true
         */
        get swipeToClose(): boolean;
        set swipeToClose(val: boolean);

        /**
         * Whether the flap can be opened with a swipe gesture.
         * 
         * The area that can be swiped depends on the {@link Flap.transition_type}
         * value.
         * @since 1.2
         * @default true
         */
        get swipe_to_open(): boolean;
        set swipe_to_open(val: boolean);

        /**
         * Whether the flap can be opened with a swipe gesture.
         * 
         * The area that can be swiped depends on the {@link Flap.transition_type}
         * value.
         * @since 1.2
         * @default true
         */
        get swipeToOpen(): boolean;
        set swipeToOpen(val: boolean);

        /**
         * the type of animation used for reveal and fold transitions.
         * 
         * {@link Flap.flap} is transparent by default, which means the content
         * will be seen through it with `HDY_FLAP_TRANSITION_TYPE_OVER` transitions;
         * add the `.background` style class to it if this is unwanted.
         * @since 1.2
         * @default Handy.FlapTransitionType.OVER
         */
        get transition_type(): FlapTransitionType;
        set transition_type(val: FlapTransitionType);

        /**
         * the type of animation used for reveal and fold transitions.
         * 
         * {@link Flap.flap} is transparent by default, which means the content
         * will be seen through it with `HDY_FLAP_TRANSITION_TYPE_OVER` transitions;
         * add the `.background` style class to it if this is unwanted.
         * @since 1.2
         * @default Handy.FlapTransitionType.OVER
         */
        get transitionType(): FlapTransitionType;
        set transitionType(val: FlapTransitionType);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Flap.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Flap.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Flap;

        // Signals
        /** @signal */
        connect<K extends keyof Flap.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Flap.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Flap.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Flap.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Flap.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Flap.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets the content widget for `self`
         * @returns the content widget for `self`
         */
        get_content(): Gtk.Widget | null;

        /**
         * Gets the flap widget for `self`
         * @returns the flap widget for `self`
         */
        get_flap(): Gtk.Widget | null;

        /**
         * Gets the flap position for `self`.
         * @returns the flap position for `self`
         */
        get_flap_position(): Gtk.PackType;

        /**
         * Gets the amount of time that fold transitions will take.
         * @returns the fold transition duration, in milliseconds
         */
        get_fold_duration(): number;

        /**
         * Gets the current fold policy of `self`.
         * @returns the current fold policy of `self`
         */
        get_fold_policy(): FlapFoldPolicy;

        /**
         * Gets whether `self` is currently folded.
         * @returns `TRUE` if `self` is currently folded
         */
        get_folded(): boolean;

        /**
         * Gets whether `self` is locked.
         * @returns whether `self` is locked
         */
        get_locked(): boolean;

        /**
         * Gets whether the `self` is modal.
         * @returns whether `self` is modal
         */
        get_modal(): boolean;

        /**
         * Gets the amount of time that reveal transitions will take.
         * @returns the reveal transition duration, in milliseconds
         */
        get_reveal_duration(): number;

        /**
         * Gets whether the flap widget is revealed for `self`.
         * @returns whether flap widget is revealed
         */
        get_reveal_flap(): boolean;

        /**
         * Gets the current reveal transition progress for `self`.
         * @returns the current reveal progress for `self`
         */
        get_reveal_progress(): number;

        /**
         * Gets the separator widget for `self`.
         * @returns the separator widget for `self`
         */
        get_separator(): Gtk.Widget | null;

        /**
         * Gets whether `self` can be closed with a swipe gesture.
         * @returns `TRUE` if `self` can be closed with a swipe gesture
         */
        get_swipe_to_close(): boolean;

        /**
         * Gets whether `self` can be opened with a swipe gesture.
         * @returns `TRUE` if `self` can be opened with a swipe gesture
         */
        get_swipe_to_open(): boolean;

        /**
         * Gets the type of animation used for reveal and fold transitions in `self`.
         * @returns the current transition type of `self`
         */
        get_transition_type(): FlapTransitionType;

        /**
         * Sets the content widget for `self`.
         * 
         * It is always displayed when unfolded, and partially visible when folded.
         * @param content the content widget
         */
        set_content(content: Gtk.Widget | null): void;

        /**
         * Sets the flap widget for `self`.
         * @param flap the flap widget
         */
        set_flap(flap: Gtk.Widget | null): void;

        /**
         * Sets the flap position for `self`.
         * @param position the new value
         */
        set_flap_position(position: Gtk.PackType): void;

        /**
         * Sets the duration that fold transitions will take.
         * @param duration the new duration, in milliseconds
         */
        set_fold_duration(duration: number): void;

        /**
         * Sets the current fold policy for `self`.
         * @param policy a fold policy
         */
        set_fold_policy(policy: FlapFoldPolicy): void;

        /**
         * Sets whether `self` is locked.
         * 
         * If `FALSE`, folding `self` when the flap is revealed automatically closes it,
         * and unfolding it when the flap is not revealed opens it. If `TRUE`,
         * {@link Flap.reveal_flap} value never changes on its own.
         * @param locked the new value
         */
        set_locked(locked: boolean): void;

        /**
         * Sets whether the `self` can be closed with a click.
         * 
         * If `modal` is `TRUE`, clicking the content widget while flap is revealed, or
         * pressing the <kbd>Esc</kbd> key, will close the flap. If `FALSE`, clicks are
         * passed through to the content widget.
         * @param modal whether `self` can be closed with a click
         */
        set_modal(modal: boolean): void;

        /**
         * Sets the duration that reveal transitions in `self` will take.
         * @param duration the new duration, in milliseconds
         */
        set_reveal_duration(duration: number): void;

        /**
         * Sets whether the flap widget is revealed for `self`.
         * @param reveal_flap `TRUE` to reveal the flap widget, `FALSE` otherwise
         */
        set_reveal_flap(reveal_flap: boolean): void;

        /**
         * Sets the separator widget for `self`.
         * @param separator the separator widget
         */
        set_separator(separator: Gtk.Widget | null): void;

        /**
         * Sets whether `self` can be closed with a swipe gesture.
         * 
         * The area that can be swiped depends on the {@link Flap.transition_type} value.
         * @param swipe_to_close whether `self` can be closed with a swipe gesture
         */
        set_swipe_to_close(swipe_to_close: boolean): void;

        /**
         * Sets whether `self` can be opened with a swipe gesture.
         * 
         * The area that can be swiped depends on the {@link Flap.transition_type}
         * value.
         * @param swipe_to_open whether `self` can be opened with a swipe gesture
         */
        set_swipe_to_open(swipe_to_open: boolean): void;

        /**
         * Sets the type of animation used for reveal and fold transitions in `self`.
         * @param transition_type the new transition type
         */
        set_transition_type(transition_type: FlapTransitionType): void;

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
         * Emits `Handy.Swipeable::child-switched` signal.
         * 
         * This should be called when the widget switches visible child widget.
         * 
         * `duration` can be 0 if the child is switched without animation.
         * @param index the index of the child to switch to
         * @param duration animation duration, in milliseconds
         */
        emit_child_switched(index: number, duration: bigint | number): void;

        /**
         * Gets the progress `self` will snap back to after the gesture is canceled.
         * @returns the cancel progress, unitless
         */
        get_cancel_progress(): number;

        /**
         * Gets the swipe distance of `self`.
         * 
         * This corresponds to how many pixels 1 unit represents.
         * @returns the swipe distance in pixels
         */
        get_distance(): number;

        /**
         * Gets the current progress of `self`.
         * @returns the current progress, unitless
         */
        get_progress(): number;

        /**
         * Gets the snap points of `self`.
         * 
         * Each snap point represents a progress value that is considered acceptable to
         * end the swipe on.
         * @returns the snap points
         */
        get_snap_points(): number[];

        /**
         * Gets the area `self` can start a swipe from for the given direction and
         * gesture type.
         * 
         * This can be used to restrict swipes to only be possible from a certain area,
         * for example, to only allow edge swipes, or to have a draggable element and
         * ignore swipes elsewhere.
         * 
         * Swipe area is only considered for direct swipes (as in, not initiated by
         * {@link SwipeGroup}).
         * 
         * If not implemented, the default implementation returns the allocation of
         * `self`, allowing swipes from anywhere.
         * @param navigation_direction the direction of the swipe
         * @param is_drag whether the swipe is caused by a dragging gesture
         */
        get_swipe_area(navigation_direction: NavigationDirection, is_drag: boolean): Gdk.Rectangle;

        /**
         * Gets the {@link SwipeTracker} used by this swipeable widget.
         * @returns the swipe tracker
         */
        get_swipe_tracker(): SwipeTracker;

        /**
         * Switches to child with index `index`.
         * 
         * See `Handy.Swipeable::child-switched`.
         * @param index the index of the child to switch to
         * @param duration animation duration, in milliseconds
         */
        switch_child(index: number, duration: bigint | number): void;

        /**
         * Gets the progress `self` will snap back to after the gesture is canceled.
         * @virtual
         */
        vfunc_get_cancel_progress(): number;

        /**
         * Gets the swipe distance of `self`.
         * 
         * This corresponds to how many pixels 1 unit represents.
         * @virtual
         */
        vfunc_get_distance(): number;

        /**
         * Gets the current progress of `self`.
         * @virtual
         */
        vfunc_get_progress(): number;

        /**
         * Gets the snap points of `self`.
         * 
         * Each snap point represents a progress value that is considered acceptable to
         * end the swipe on.
         * @virtual
         */
        vfunc_get_snap_points(): number[];

        /**
         * Gets the area `self` can start a swipe from for the given direction and
         * gesture type.
         * 
         * This can be used to restrict swipes to only be possible from a certain area,
         * for example, to only allow edge swipes, or to have a draggable element and
         * ignore swipes elsewhere.
         * 
         * Swipe area is only considered for direct swipes (as in, not initiated by
         * {@link SwipeGroup}).
         * 
         * If not implemented, the default implementation returns the allocation of
         * `self`, allowing swipes from anywhere.
         * @param navigation_direction the direction of the swipe
         * @param is_drag whether the swipe is caused by a dragging gesture
         * @virtual
         */
        vfunc_get_swipe_area(navigation_direction: NavigationDirection, is_drag: boolean): Gdk.Rectangle;

        /**
         * Gets the {@link SwipeTracker} used by this swipeable widget.
         * @virtual
         */
        vfunc_get_swipe_tracker(): SwipeTracker;

        /**
         * Switches to child with index `index`.
         * 
         * See `Handy.Swipeable::child-switched`.
         * @param index the index of the child to switch to
         * @param duration animation duration, in milliseconds
         * @virtual
         */
        vfunc_switch_child(index: number, duration: number): void;

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
            custom_title: Gtk.Widget | null;
            customTitle: Gtk.Widget | null;
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
            subtitle: string | null;
            title: string | null;
            transition_duration: number;
            transitionDuration: number;
            transition_running: boolean;
            transitionRunning: boolean;
        }
    }

    /**
     * A title bar widget.
     * 
     * {@link Handy.HeaderBar} is similar to {@link Gtk.HeaderBar} but is designed to fix
     * some of its shortcomings for adaptive applications.
     * 
     * {@link Handy.HeaderBar} doesn't force the custom title widget to be vertically
     * centered, hence allowing it to fill up the whole height, which is e.g. needed
     * for {@link ViewSwitcher}.
     * 
     * When used in a mobile dialog, {@link Handy.HeaderBar} will replace its window
     * decorations by a back button allowing to close it. It doesn't have to be its
     * direct child and you can use any complex contraption you like as the dialog's
     * titlebar.
     * 
     * {@link Handy.HeaderBar} can be used in window's content area rather than titlebar, and
     * will still be draggable and will handle right click, middle click and double
     * click as expected from a titlebar. This is particularly useful with
     * {@link Window} or {@link ApplicationWindow}.
     * 
     * ## CSS nodes
     * 
     * {@link Handy.HeaderBar} has a single CSS node with name `headerbar`.
     * @gir-type Class
     * @since 1.0
     */
    class HeaderBar extends Gtk.Container implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<HeaderBar>;

        // Properties
        /**
         * The policy for aligning the center widget.
         * @since 1.0
         * @default Handy.CenteringPolicy.LOOSE
         */
        get centering_policy(): CenteringPolicy;
        set centering_policy(val: CenteringPolicy);

        /**
         * The policy for aligning the center widget.
         * @since 1.0
         * @default Handy.CenteringPolicy.LOOSE
         */
        get centeringPolicy(): CenteringPolicy;
        set centeringPolicy(val: CenteringPolicy);

        /**
         * Custom title widget to display.
         * @since 1.0
         */
        get custom_title(): Gtk.Widget | null;
        set custom_title(val: Gtk.Widget | null);

        /**
         * Custom title widget to display.
         * @since 1.0
         */
        get customTitle(): Gtk.Widget | null;
        set customTitle(val: Gtk.Widget | null);

        /**
         * The decoration layout for buttons.
         * 
         * If this property is not set, the
         * {@link Gtk.Settings.gtk_decoration_layout} setting is used.
         * 
         * There can be valid reasons for overriding the setting, such as a header bar
         * design that does not allow for buttons to take room on the right, or only
         * offers room for a single close button. Split header bars are another example
         * for overriding the setting.
         * 
         * The format of the string is button names, separated by commas. A colon
         * separates the buttons that should appear on the start from those on the
         * end. Recognized button names are minimize, maximize, close, icon (the
         * window icon) and menu (a menu button for the fallback app menu).
         * 
         * For example, “menu:minimize,maximize,close” specifies a menu on the left, and
         * minimize, maximize and close buttons on the right.
         * @since 1.0
         * @default null
         */
        get decoration_layout(): string;
        set decoration_layout(val: string);

        /**
         * The decoration layout for buttons.
         * 
         * If this property is not set, the
         * {@link Gtk.Settings.gtk_decoration_layout} setting is used.
         * 
         * There can be valid reasons for overriding the setting, such as a header bar
         * design that does not allow for buttons to take room on the right, or only
         * offers room for a single close button. Split header bars are another example
         * for overriding the setting.
         * 
         * The format of the string is button names, separated by commas. A colon
         * separates the buttons that should appear on the start from those on the
         * end. Recognized button names are minimize, maximize, close, icon (the
         * window icon) and menu (a menu button for the fallback app menu).
         * 
         * For example, “menu:minimize,maximize,close” specifies a menu on the left, and
         * minimize, maximize and close buttons on the right.
         * @since 1.0
         * @default null
         */
        get decorationLayout(): string;
        set decorationLayout(val: string);

        /**
         * Whether {@link HeaderBar.decoration_layout} is set.
         * @since 1.0
         * @default false
         */
        get decoration_layout_set(): boolean;
        set decoration_layout_set(val: boolean);

        /**
         * Whether {@link HeaderBar.decoration_layout} is set.
         * @since 1.0
         * @default false
         */
        get decorationLayoutSet(): boolean;
        set decorationLayoutSet(val: boolean);

        /**
         * Whether to reserve space for a subtitle, even if none is currently set.
         * @since 1.0
         * @default true
         */
        get has_subtitle(): boolean;
        set has_subtitle(val: boolean);

        /**
         * Whether to reserve space for a subtitle, even if none is currently set.
         * @since 1.0
         * @default true
         */
        get hasSubtitle(): boolean;
        set hasSubtitle(val: boolean);

        /**
         * Whether the size should smoothly change when changing between children.
         * 
         * If `TRUE`, the header bar will interpolate its size between the one of the
         * previous visible child and the one of the new visible child, according to
         * the set transition duration and the orientation, e.g. if the orientation is
         * horizontal, it will interpolate the its height.
         * @since 1.0
         * @default false
         */
        get interpolate_size(): boolean;
        set interpolate_size(val: boolean);

        /**
         * Whether the size should smoothly change when changing between children.
         * 
         * If `TRUE`, the header bar will interpolate its size between the one of the
         * previous visible child and the one of the new visible child, according to
         * the set transition duration and the orientation, e.g. if the orientation is
         * horizontal, it will interpolate the its height.
         * @since 1.0
         * @default false
         */
        get interpolateSize(): boolean;
        set interpolateSize(val: boolean);

        /**
         * Whether to show window decorations.
         * 
         * Which buttons are actually shown and where is determined by the
         * {@link HeaderBar.decoration_layout} property, and by the state of the
         * window (e.g. a close button will not be shown if the window can't be
         * closed).
         * @since 1.0
         * @default false
         */
        get show_close_button(): boolean;
        set show_close_button(val: boolean);

        /**
         * Whether to show window decorations.
         * 
         * Which buttons are actually shown and where is determined by the
         * {@link HeaderBar.decoration_layout} property, and by the state of the
         * window (e.g. a close button will not be shown if the window can't be
         * closed).
         * @since 1.0
         * @default false
         */
        get showCloseButton(): boolean;
        set showCloseButton(val: boolean);

        /**
         * The amount of space between children.
         * @since 1.0
         * @default 6
         */
        get spacing(): number;
        set spacing(val: number);

        /**
         * The subtitle to display.
         * @since 1.0
         * @default null
         */
        get subtitle(): string | null;
        set subtitle(val: string | null);

        /**
         * The title to display.
         * @since 1.0
         * @default null
         */
        get title(): string | null;
        set title(val: string | null);

        /**
         * The transition duration, in milliseconds.
         * @since 1.0
         * @default 200
         */
        get transition_duration(): number;
        set transition_duration(val: number);

        /**
         * The transition duration, in milliseconds.
         * @since 1.0
         * @default 200
         */
        get transitionDuration(): number;
        set transitionDuration(val: number);

        /**
         * Whether or not the transition is currently running.
         * @since 1.0
         * @read-only
         * @default false
         */
        get transition_running(): boolean;

        /**
         * Whether or not the transition is currently running.
         * @since 1.0
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
         * Retrieves the custom title widget of the header.
         * @returns the custom title widget of the header
         */
        get_custom_title(): Gtk.Widget | null;

        /**
         * Gets the decoration layout.
         * @returns the decoration layout
         */
        get_decoration_layout(): string;

        /**
         * Gets whether space is reserved for a subtitle, regardless if one is currently
         * set or not.
         * @returns `TRUE` if the header bar reserves space for a subtitle
         */
        get_has_subtitle(): boolean;

        /**
         * Gets whether `self` should interpolate its size on visible child change.
         * @returns whether `self` interpolates its size on visible child change
         */
        get_interpolate_size(): boolean;

        /**
         * Gets whether this header bar shows the standard window decorations.
         * @returns whether decorations are shown
         */
        get_show_close_button(): boolean;

        /**
         * Gets the subtitle of the header.
         * @returns the subtitle of the header
         */
        get_subtitle(): string | null;

        /**
         * Retrieves the title of the header.
         * @returns the title of the header.
         */
        get_title(): string | null;

        /**
         * Gets the amount of time that transitions between pages will take.
         * @returns the transition duration, in milliseconds
         */
        get_transition_duration(): number;

        /**
         * Gets whether the `self` is currently in a transition from one page to another.
         * @returns whether the transition is currently running
         */
        get_transition_running(): boolean;

        /**
         * Adds `child` to `self`, packed with reference to the end of the `self`.
         * @param child the widget to be added to `self`
         */
        pack_end(child: Gtk.Widget): void;

        /**
         * Adds `child` to `self`, packed with reference to the start of the `self`.
         * @param child the widget to be added to `self`
         */
        pack_start(child: Gtk.Widget): void;

        /**
         * Sets the policy `self` must follow to horizontally align its center widget.
         * @param centering_policy the centering policy
         */
        set_centering_policy(centering_policy: CenteringPolicy): void;

        /**
         * Sets a custom title for the header bar.
         * 
         * The title should help a user identify the current view. This supersedes any
         * title set by {@link HeaderBar.set_title} or {@link HeaderBar.set_subtitle}.
         * To achieve the same style as the builtin title and subtitle, use the `.title`
         * and `.subtitle` style classes.
         * 
         * You should set the custom title to `NULL`, for the header title label to be
         * visible again.
         * @param title_widget a custom widget to use for a title
         */
        set_custom_title(title_widget: Gtk.Widget | null): void;

        /**
         * Sets the decoration layout for this header bar.
         * @param layout a decoration layout
         */
        set_decoration_layout(layout: string | null): void;

        /**
         * Sets whether space is reserved for a subtitle, even if none is currently set.
         * @param setting `TRUE` to reserve space for a subtitle
         */
        set_has_subtitle(setting: boolean): void;

        /**
         * Sets whether `self` should interpolate its size on visible child change.
         * @param interpolate_size `TRUE` to interpolate the size
         */
        set_interpolate_size(interpolate_size: boolean): void;

        /**
         * Sets whether this header bar shows the standard window decorations.
         * @param setting `TRUE` to show standard window decorations
         */
        set_show_close_button(setting: boolean): void;

        /**
         * Sets the subtitle of the header bar.
         * 
         * The title should give a user an additional detail to help them identify the
         * current view.
         * 
         * Note that {@link HeaderBar} by default reserves room for the subtitle, even
         * if none is currently set. If this is not desired, set the
         * {@link HeaderBar.has_subtitle} property to `FALSE`.
         * @param subtitle a subtitle
         */
        set_subtitle(subtitle: string | null): void;

        /**
         * Sets the title of the {@link HeaderBar}.
         * 
         * The title should help a user identify the current view. A good title should
         * not include the application name.
         * @param title a title
         */
        set_title(title: string | null): void;

        /**
         * Sets the duration that transitions between pages will take.
         * @param duration the new duration, in milliseconds
         */
        set_transition_duration(duration: number): void;
    }


    namespace HeaderGroup {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * This signal is emitted before updating the decoration layouts.
             * @signal
             * @since 1.0
             * @run-last
             */
            "update-decoration-layouts": () => void;
            "notify::decorate-all": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gtk.Buildable.ConstructorProps {
            decorate_all: boolean;
            decorateAll: boolean;
        }
    }

    /**
     * An object handling composite title bars.
     * 
     * The {@link Handy.HeaderGroup} object handles the header bars of a composite title bar.
     * It splits the window decoration across the header bars, giving the left side
     * of the decorations to the leftmost header bar, and the right side of the
     * decorations to the rightmost header bar. See
     * {@link HeaderBar.set_decoration_layout}.
     * 
     * The {@link HeaderGroup.decorate_all} property can be used in conjunction
     * with {@link Leaflet.folded} when the title bar is split across the pages
     * of a {@link Leaflet} to automatically display the decorations on all the
     * pages when the leaflet is folded.
     * 
     * You can nest header groups, which is convenient when you nest leaflets too:
     * 
     * ```xml
     * <object class="HdyHeaderGroup" id="inner_header_group">
     *   <property name="decorate-all" bind-source="inner_leaflet" bind-property="folded" bind-flags="sync-create"/>
     *   <headerbars>
     *     <headerbar name="inner_header_bar_1"/>
     *     <headerbar name="inner_header_bar_2"/>
     *   </headerbars>
     * </object>
     * <object class="HdyHeaderGroup" id="outer_header_group">
     *   <property name="decorate-all" bind-source="outer_leaflet" bind-property="folded" bind-flags="sync-create"/>
     *   <headerbars>
     *     <headerbar name="inner_header_group"/>
     *     <headerbar name="outer_header_bar"/>
     *   </headerbars>
     * </object>
     * ```
     * @gir-type Class
     * @since 1.0
     */
    class HeaderGroup extends GObject.Object implements Gtk.Buildable {
        static $gtype: GObject.GType<HeaderGroup>;

        // Properties
        /**
         * Whether the elements of the group should all receive the full decoration.
         * 
         * This is useful in conjunction with {@link Leaflet.folded} when the
         * leaflet contains the header bars of the group, as you want them all to
         * display the complete decoration when the leaflet is folded.
         * @since 1.0
         * @default false
         */
        get decorate_all(): boolean;
        set decorate_all(val: boolean);

        /**
         * Whether the elements of the group should all receive the full decoration.
         * 
         * This is useful in conjunction with {@link Leaflet.folded} when the
         * leaflet contains the header bars of the group, as you want them all to
         * display the complete decoration when the leaflet is folded.
         * @since 1.0
         * @default false
         */
        get decorateAll(): boolean;
        set decorateAll(val: boolean);

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
         * Adds `header_bar` to `self`.
         * 
         * When the widget is destroyed or no longer referenced elsewhere, it will be
         * removed from the header group.
         * @param header_bar the header bar to add
         */
        add_gtk_header_bar(header_bar: Gtk.HeaderBar): void;

        /**
         * Adds `header_bar` to `self`.
         * 
         * When the widget is destroyed or no longer referenced elsewhere, it will be
         * removed from the header group.
         * @param header_bar the header bar to add
         */
        add_header_bar(header_bar: HeaderBar): void;

        /**
         * Adds `header_group` to `self`.
         * 
         * When the nested group is no longer referenced elsewhere, it will be removed
         * from the header group.
         * @param header_group the header group to add
         */
        add_header_group(header_group: HeaderGroup): void;

        /**
         * Returns the list of children associated with `self`.
         * @returns the list of   children
         */
        get_children(): HeaderGroupChild[];

        /**
         * Gets whether the elements of the group should all receive the full
         * decoration.
         * @returns whether the elements of the group should all receive the full   decoration
         */
        get_decorate_all(): boolean;

        /**
         * Removes `child` from `self`.
         * @param child the header group child to remove
         */
        remove_child(child: HeaderGroupChild): void;

        /**
         * Removes `header_bar` from `self`.
         * @param header_bar the header bar to remove
         */
        remove_gtk_header_bar(header_bar: Gtk.HeaderBar): void;

        /**
         * Removes `header_bar` from `self`.
         * @param header_bar the header bar to remove
         */
        remove_header_bar(header_bar: HeaderBar): void;

        /**
         * Removes a nested {@link Handy.HeaderGroup} from `self`.
         * @param header_group the header group to remove
         */
        remove_header_group(header_group: HeaderGroup): void;

        /**
         * Sets whether the elements of the group should all receive the full
         * decoration.
         * @param decorate_all whether the elements of the group should all receive the full   decoration
         */
        set_decorate_all(decorate_all: boolean): void;

        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a {@link Gtk.Builder}
         * @param child child to add
         * @param type kind of child or `null`
         */
        add_child(builder: Gtk.Builder, child: GObject.Object, type: string | null): void;

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
        custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data: null): void;

        /**
         * This is called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         */
        custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data: null): void;

        /**
         * This is called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @returns `true` if a object has a custom implementation, `false`          if it doesn't.
         */
        custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [boolean, GLib.MarkupParser, null];

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
        set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;

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
        vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type: string | null): void;

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
        vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data: null): void;

        /**
         * This is called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data: null): void;

        /**
         * This is called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [boolean, GLib.MarkupParser, never];

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


    namespace HeaderGroupChild {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * A child object for {@link HeaderGroup}.
     * @gir-type Class
     * @since 1.0
     */
    class HeaderGroupChild extends GObject.Object {
        static $gtype: GObject.GType<HeaderGroupChild>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: HeaderGroupChild.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<HeaderGroupChild.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof HeaderGroupChild.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, HeaderGroupChild.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof HeaderGroupChild.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, HeaderGroupChild.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof HeaderGroupChild.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<HeaderGroupChild.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets the child type.
         * @returns the child type
         */
        get_child_type(): HeaderGroupChildType;

        /**
         * Gets the child {@link Gtk.HeaderBar}.
         * 
         * Use {@link HeaderGroupChild.get_child_type} to check the child type.
         * @returns the child header bar
         */
        get_gtk_header_bar(): Gtk.HeaderBar;

        /**
         * Gets the child {@link HeaderBar}.
         * 
         * Use {@link HeaderGroupChild.get_child_type} to check the child type.
         * @returns the child headerbar
         */
        get_header_bar(): HeaderBar;

        /**
         * Gets the child {@link HeaderGroup}.
         * 
         * Use {@link HeaderGroupChild.get_child_type} to check the child type.
         * @returns the child header bar
         */
        get_header_group(): HeaderGroup;
    }


    namespace Keypad {
        // Signal signatures
        interface SignalSignatures extends Gtk.Bin.SignalSignatures {
            "notify::column-spacing": (pspec: GObject.ParamSpec) => void;
            "notify::end-action": (pspec: GObject.ParamSpec) => void;
            "notify::entry": (pspec: GObject.ParamSpec) => void;
            "notify::letters-visible": (pspec: GObject.ParamSpec) => void;
            "notify::row-spacing": (pspec: GObject.ParamSpec) => void;
            "notify::start-action": (pspec: GObject.ParamSpec) => void;
            "notify::symbols-visible": (pspec: GObject.ParamSpec) => void;
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
            end_action: Gtk.Widget | null;
            endAction: Gtk.Widget | null;
            entry: Gtk.Entry;
            letters_visible: boolean;
            lettersVisible: boolean;
            row_spacing: number;
            rowSpacing: number;
            start_action: Gtk.Widget | null;
            startAction: Gtk.Widget | null;
            symbols_visible: boolean;
            symbolsVisible: boolean;
        }
    }

    /**
     * A keypad for dialing numbers
     * 
     * The {@link Handy.Keypad} widget is a keypad for entering numbers such as phone numbers
     * or PIN codes.
     * 
     * ## CSS nodes
     * 
     * {@link Handy.Keypad} has a single CSS node with name `keypad`.
     * @gir-type Class
     * @since 1.0
     */
    class Keypad extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<Keypad>;

        // Properties
        /**
         * The amount of space between two consecutive columns.
         * @since 1.0
         * @default 6
         */
        get column_spacing(): number;
        set column_spacing(val: number);

        /**
         * The amount of space between two consecutive columns.
         * @since 1.0
         * @default 6
         */
        get columnSpacing(): number;
        set columnSpacing(val: number);

        /**
         * The widget for the lower end corner of `self`.
         * @since 1.0
         */
        get end_action(): Gtk.Widget | null;
        set end_action(val: Gtk.Widget | null);

        /**
         * The widget for the lower end corner of `self`.
         * @since 1.0
         */
        get endAction(): Gtk.Widget | null;
        set endAction(val: Gtk.Widget | null);

        /**
         * The entry widget connected to the keypad.
         * 
         * The entry will block any input not possible to type with the keypad.
         * @since 1.0
         */
        get entry(): Gtk.Entry;
        set entry(val: Gtk.Entry);

        /**
         * Whether standard letters should be displayed below the digits on the
         * buttons.
         * @since 1.0
         * @default true
         */
        get letters_visible(): boolean;
        set letters_visible(val: boolean);

        /**
         * Whether standard letters should be displayed below the digits on the
         * buttons.
         * @since 1.0
         * @default true
         */
        get lettersVisible(): boolean;
        set lettersVisible(val: boolean);

        /**
         * The amount of space between two consecutive rows.
         * @since 1.0
         * @default 6
         */
        get row_spacing(): number;
        set row_spacing(val: number);

        /**
         * The amount of space between two consecutive rows.
         * @since 1.0
         * @default 6
         */
        get rowSpacing(): number;
        set rowSpacing(val: number);

        /**
         * The widget for the lower start corner of `self`.
         * @since 1.0
         */
        get start_action(): Gtk.Widget | null;
        set start_action(val: Gtk.Widget | null);

        /**
         * The widget for the lower start corner of `self`.
         * @since 1.0
         */
        get startAction(): Gtk.Widget | null;
        set startAction(val: Gtk.Widget | null);

        /**
         * Whether to display symbols.
         * 
         * This includes hash and asterisk buttons, and the plus symbol at the bottom
         * of its 0 button.
         * @since 1.0
         * @default true
         */
        get symbols_visible(): boolean;
        set symbols_visible(val: boolean);

        /**
         * Whether to display symbols.
         * 
         * This includes hash and asterisk buttons, and the plus symbol at the bottom
         * of its 0 button.
         * @since 1.0
         * @default true
         */
        get symbolsVisible(): boolean;
        set symbolsVisible(val: boolean);

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

        static ["new"](symbols_visible: boolean, letters_visible: boolean): Keypad;

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
         * Returns the amount of space between the columns of `self`.
         * @returns the column spacing of `self`
         */
        get_column_spacing(): number;

        /**
         * Gets the widget for the lower right corner (or left, in RTL locales).
         * @returns the end action widget
         */
        get_end_action(): Gtk.Widget | null;

        /**
         * Gets the connected entry.
         * @returns the entry set
         */
        get_entry(): Gtk.Entry;

        /**
         * Gets whether standard letters are displayed below the digits on the buttons.
         * @returns whether the letters below the digits should be visible
         */
        get_letters_visible(): boolean;

        /**
         * Returns the amount of space between the rows of `self`.
         * @returns the row spacing of `self`
         */
        get_row_spacing(): number;

        /**
         * Gets the widget for the lower left corner (or right, in RTL locales).
         * @returns the start action widget
         */
        get_start_action(): Gtk.Widget | null;

        /**
         * Gets whether symbols are displayed.
         * @returns whether symboles are visible
         */
        get_symbols_visible(): boolean;

        /**
         * Sets the amount of space between columns of `self`.
         * @param spacing the amount of space to insert between columns
         */
        set_column_spacing(spacing: number): void;

        /**
         * Sets the widget for the lower right corner (or left, in RTL locales).
         * @param end_action the end action widget
         */
        set_end_action(end_action: Gtk.Widget | null): void;

        /**
         * Binds `entry` to `self`.
         * @param entry an entry
         */
        set_entry(entry: Gtk.Entry | null): void;

        /**
         * Sets whether standard letters are displayed below the digits on the buttons.
         * @param letters_visible whether the letters below the digits should be visible
         */
        set_letters_visible(letters_visible: boolean): void;

        /**
         * Sets the amount of space between rows of `self`.
         * @param spacing the amount of space to insert between rows
         */
        set_row_spacing(spacing: number): void;

        /**
         * Sets the widget for the lower left corner (or right, in RTL locales).
         * @param start_action the start action widget
         */
        set_start_action(start_action: Gtk.Widget | null): void;

        /**
         * Sets whether standard letters are displayed below the digits on the buttons.
         * @param symbols_visible whether the hash, plus, and asterisk symbols should be visible
         */
        set_symbols_visible(symbols_visible: boolean): void;
    }


    namespace Leaflet {
        // Signal signatures
        interface SignalSignatures extends Gtk.Container.SignalSignatures {
            "notify::can-swipe-back": (pspec: GObject.ParamSpec) => void;
            "notify::can-swipe-forward": (pspec: GObject.ParamSpec) => void;
            "notify::child-transition-duration": (pspec: GObject.ParamSpec) => void;
            "notify::child-transition-running": (pspec: GObject.ParamSpec) => void;
            "notify::folded": (pspec: GObject.ParamSpec) => void;
            "notify::hhomogeneous-folded": (pspec: GObject.ParamSpec) => void;
            "notify::hhomogeneous-unfolded": (pspec: GObject.ParamSpec) => void;
            "notify::interpolate-size": (pspec: GObject.ParamSpec) => void;
            "notify::mode-transition-duration": (pspec: GObject.ParamSpec) => void;
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
            folded: boolean;
            hhomogeneous_folded: boolean;
            hhomogeneousFolded: boolean;
            hhomogeneous_unfolded: boolean;
            hhomogeneousUnfolded: boolean;
            interpolate_size: boolean;
            interpolateSize: boolean;
            mode_transition_duration: number;
            modeTransitionDuration: number;
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
     * An adaptive container acting like a box or a stack.
     * 
     * The {@link Handy.Leaflet} widget can display its children like a {@link Gtk.Box} does
     * or like a {@link Gtk.Stack} does, adapting to size changes by switching
     * between the two modes.
     * 
     * When there is enough space the children are displayed side by side, otherwise
     * only one is displayed and the leaflet is said to be “folded”. The threshold
     * is dictated by the preferred minimum sizes of the children. When a leaflet is
     * folded, the children can be navigated using swipe gestures.
     * 
     * The “over” and “under” transition types stack the children one on top of the
     * other, while the “slide” transition puts the children side by side. While
     * navigating to a child on the side or below can be performed by swiping the
     * current child away, navigating to an upper child requires dragging it from
     * the edge where it resides. This doesn't affect non-dragging swipes.
     * 
     * The “over” and “under” transitions can draw their shadow on top of the
     * window's transparent areas, like the rounded corners. This is a side-effect
     * of allowing shadows to be drawn on top of OpenGL areas. It can be mitigated
     * by using {@link Window} or {@link ApplicationWindow} as they will crop
     * anything drawn beyond the rounded corners.
     * 
     * The child property `navigatable` can be set on {@link Handy.Leaflet} children to
     * determine whether they can be navigated to when folded. If `FALSE`, the child
     * will be ignored by {@link Leaflet.get_adjacent_child},
     * {@link Leaflet.navigate}, and swipe gestures. This can be used used to
     * prevent switching to widgets like separators.
     * 
     * ## CSS nodes
     * 
     * {@link Handy.Leaflet} has a single CSS node with name `leaflet`. The node will get the
     * style classes `.folded` when it is folded, `.unfolded` when it's not, or none
     * if it didn't compute its fold yet.
     * @gir-type Class
     * @since 1.0
     */
    class Leaflet extends Gtk.Container implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable, Swipeable {
        static $gtype: GObject.GType<Leaflet>;

        // Properties
        /**
         * Whether swipe gestures allow switching to the previous navigatable child.
         * @since 1.0
         * @default false
         */
        get can_swipe_back(): boolean;
        set can_swipe_back(val: boolean);

        /**
         * Whether swipe gestures allow switching to the previous navigatable child.
         * @since 1.0
         * @default false
         */
        get canSwipeBack(): boolean;
        set canSwipeBack(val: boolean);

        /**
         * Whether swipe gestures allow switching to the next navigatable child.
         * @since 1.0
         * @default false
         */
        get can_swipe_forward(): boolean;
        set can_swipe_forward(val: boolean);

        /**
         * Whether swipe gestures allow switching to the next navigatable child.
         * @since 1.0
         * @default false
         */
        get canSwipeForward(): boolean;
        set canSwipeForward(val: boolean);

        /**
         * The child transition animation duration, in milliseconds.
         * @since 1.0
         * @default 200
         */
        get child_transition_duration(): number;
        set child_transition_duration(val: number);

        /**
         * The child transition animation duration, in milliseconds.
         * @since 1.0
         * @default 200
         */
        get childTransitionDuration(): number;
        set childTransitionDuration(val: number);

        /**
         * Whether a child transition is currently running.
         * @since 1.0
         * @read-only
         * @default false
         */
        get child_transition_running(): boolean;

        /**
         * Whether a child transition is currently running.
         * @since 1.0
         * @read-only
         * @default false
         */
        get childTransitionRunning(): boolean;

        /**
         * Whether the leaflet is folded.
         * 
         * The leaflet will be folded if the size allocated to it is smaller than the
         * sum of the natural size of its children, it will be unfolded otherwise.
         * @since 1.0
         * @read-only
         * @default false
         */
        get folded(): boolean;

        /**
         * Whether to allocate the same width for all children when folded.
         * @since 1.0
         * @default true
         */
        get hhomogeneous_folded(): boolean;
        set hhomogeneous_folded(val: boolean);

        /**
         * Whether to allocate the same width for all children when folded.
         * @since 1.0
         * @default true
         */
        get hhomogeneousFolded(): boolean;
        set hhomogeneousFolded(val: boolean);

        /**
         * Whether to allocate the same width for all children when unfolded.
         * @since 1.0
         * @default false
         */
        get hhomogeneous_unfolded(): boolean;
        set hhomogeneous_unfolded(val: boolean);

        /**
         * Whether to allocate the same width for all children when unfolded.
         * @since 1.0
         * @default false
         */
        get hhomogeneousUnfolded(): boolean;
        set hhomogeneousUnfolded(val: boolean);

        /**
         * Whether the size should smoothly change when changing between children.
         * @since 1.0
         * @default false
         */
        get interpolate_size(): boolean;
        set interpolate_size(val: boolean);

        /**
         * Whether the size should smoothly change when changing between children.
         * @since 1.0
         * @default false
         */
        get interpolateSize(): boolean;
        set interpolateSize(val: boolean);

        /**
         * The mode transition animation duration, in milliseconds.
         * @since 1.0
         * @default 250
         */
        get mode_transition_duration(): number;
        set mode_transition_duration(val: number);

        /**
         * The mode transition animation duration, in milliseconds.
         * @since 1.0
         * @default 250
         */
        get modeTransitionDuration(): number;
        set modeTransitionDuration(val: number);

        /**
         * The animation type used for transitions between modes and children.
         * 
         * The transition type can be changed without problems at runtime, so it is
         * possible to change the animation based on the mode or child that is about
         * to become current.
         * @since 1.0
         * @default Handy.LeafletTransitionType.OVER
         */
        get transition_type(): LeafletTransitionType;
        set transition_type(val: LeafletTransitionType);

        /**
         * The animation type used for transitions between modes and children.
         * 
         * The transition type can be changed without problems at runtime, so it is
         * possible to change the animation based on the mode or child that is about
         * to become current.
         * @since 1.0
         * @default Handy.LeafletTransitionType.OVER
         */
        get transitionType(): LeafletTransitionType;
        set transitionType(val: LeafletTransitionType);

        /**
         * Whether to allocates the same height for all children when folded.
         * @since 1.0
         * @default true
         */
        get vhomogeneous_folded(): boolean;
        set vhomogeneous_folded(val: boolean);

        /**
         * Whether to allocates the same height for all children when folded.
         * @since 1.0
         * @default true
         */
        get vhomogeneousFolded(): boolean;
        set vhomogeneousFolded(val: boolean);

        /**
         * Whether to allocate the same height for all children when unfolded.
         * @since 1.0
         * @default false
         */
        get vhomogeneous_unfolded(): boolean;
        set vhomogeneous_unfolded(val: boolean);

        /**
         * Whether to allocate the same height for all children when unfolded.
         * @since 1.0
         * @default false
         */
        get vhomogeneousUnfolded(): boolean;
        set vhomogeneousUnfolded(val: boolean);

        /**
         * The widget currently visible when the leaflet is folded.
         * 
         * The transition is determined by {@link Leaflet.transition_type} and
         * {@link Leaflet.child_transition_duration}. The transition can be
         * cancelled by the user, in which case visible child will change back to the
         * previously visible child.
         * @since 1.0
         */
        get visible_child(): Gtk.Widget;
        set visible_child(val: Gtk.Widget);

        /**
         * The widget currently visible when the leaflet is folded.
         * 
         * The transition is determined by {@link Leaflet.transition_type} and
         * {@link Leaflet.child_transition_duration}. The transition can be
         * cancelled by the user, in which case visible child will change back to the
         * previously visible child.
         * @since 1.0
         */
        get visibleChild(): Gtk.Widget;
        set visibleChild(val: Gtk.Widget);

        /**
         * The name of the widget currently visible when the leaflet is folded.
         * 
         * See {@link Leaflet.visible_child}.
         * @since 1.0
         * @default null
         */
        get visible_child_name(): string;
        set visible_child_name(val: string);

        /**
         * The name of the widget currently visible when the leaflet is folded.
         * 
         * See {@link Leaflet.visible_child}.
         * @since 1.0
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

        // Methods
        /**
         * Finds the previous or next navigatable child.
         * 
         * This will be the same widget {@link Leaflet.navigate} will navigate to.
         * 
         * If there's no child to navigate to, `NULL` will be returned instead.
         * @param direction the direction
         * @returns the previous or next child
         */
        get_adjacent_child(direction: NavigationDirection): Gtk.Widget | null;

        /**
         * Gets whether swipe gestures switch to the previous navigatable child.
         * @returns `TRUE` if back swipe is enabled
         */
        get_can_swipe_back(): boolean;

        /**
         * Gets whether swipe gestures switch to the next navigatable child.
         * @returns `TRUE` if forward swipe is enabled
         */
        get_can_swipe_forward(): boolean;

        /**
         * Finds the child of `self` with the name given as the argument.
         * 
         * Returns `NULL` if there is no child with this name.
         * @param name the name of the child to find
         * @returns the requested child of `self`
         */
        get_child_by_name(name: string): Gtk.Widget | null;

        /**
         * Gets the amount of time that transitions between children will take.
         * @returns the child transition duration, in milliseconds
         */
        get_child_transition_duration(): number;

        /**
         * Returns whether `self` is currently in a transition from one page to another.
         * @returns whether a transition is currently running
         */
        get_child_transition_running(): boolean;

        /**
         * Gets whether `self` is folded.
         * @returns whether `self` is folded
         */
        get_folded(): boolean;

        /**
         * Gets whether `self` is homogeneous for the given fold and orientation.
         * @param folded the fold
         * @param orientation the orientation
         * @returns whether `self` is homogeneous for the given fold and orientation
         */
        get_homogeneous(folded: boolean, orientation: Gtk.Orientation): boolean;

        /**
         * Gets whether to interpolate between the sizes of children on page switches.
         * @returns `TRUE` if child sizes are interpolated
         */
        get_interpolate_size(): boolean;

        /**
         * Gets the amount of time that transitions between modes in `self` will take.
         * @returns the mode transition duration, in milliseconds
         */
        get_mode_transition_duration(): number;

        /**
         * Gets the animation type that will be used for transitions between modes and
         * children.
         * @returns the current transition type of `self`
         */
        get_transition_type(): LeafletTransitionType;

        /**
         * Gets the visible child widget.
         * @returns the visible child widget
         */
        get_visible_child(): Gtk.Widget;

        /**
         * Gets the name of the currently visible child widget.
         * @returns the name of the visible child
         */
        get_visible_child_name(): string;

        /**
         * Inserts `child` in the position after `sibling` in the list of children.
         * 
         * If `sibling` is `NULL`, inserts `child` at the first position.
         * @param child the widget to insert
         * @param sibling the sibling after which to insert `child`
         */
        insert_child_after(child: Gtk.Widget, sibling: Gtk.Widget | null): void;

        /**
         * Navigates to the previous or next navigatable child.
         * 
         * The switch is similar to performing a swipe gesture to go in `direction`.
         * @param direction the direction
         * @returns whether the visible child was changed
         */
        navigate(direction: NavigationDirection): boolean;

        /**
         * Inserts `child` at the first position in `self`.
         * @param child the widget to prepend
         */
        prepend(child: Gtk.Widget): void;

        /**
         * Moves `child` to the position after `sibling` in the list of children.
         * 
         * If `sibling` is `NULL`, move `child` to the first position.
         * @param child the widget to move, must be a child of `self`
         * @param sibling the sibling to move `child` after
         */
        reorder_child_after(child: Gtk.Widget, sibling: Gtk.Widget | null): void;

        /**
         * Sets whether swipe gestures switch to the previous navigatable child.
         * @param can_swipe_back the new value
         */
        set_can_swipe_back(can_swipe_back: boolean): void;

        /**
         * Sets whether swipe gestures switch to the next navigatable child.
         * @param can_swipe_forward the new value
         */
        set_can_swipe_forward(can_swipe_forward: boolean): void;

        /**
         * Sets the duration that transitions between children in `self` will take.
         * @param duration the new duration, in milliseconds
         */
        set_child_transition_duration(duration: number): void;

        /**
         * Sets whether to be homogeneous for the given fold and orientation.
         * 
         * If it is homogeneous, the {@link Leaflet} will request the same
         * width or height for all its children depending on the orientation. If it
         * isn't and it is folded, the leaflet may change width or height when a
         * different child becomes visible.
         * @param folded the fold
         * @param orientation the orientation
         * @param homogeneous `TRUE` to make `self` homogeneous
         */
        set_homogeneous(folded: boolean, orientation: Gtk.Orientation, homogeneous: boolean): void;

        /**
         * Sets whether `self` will interpolate its size when changing the visible child.
         * 
         * If the {@link Leaflet.interpolate_size} property is set to `TRUE`, `self`
         * will interpolate its size between the current one and the one it'll take
         * after changing the visible child, according to the set transition duration.
         * @param interpolate_size the new value
         */
        set_interpolate_size(interpolate_size: boolean): void;

        /**
         * Sets the duration that transitions between modes in `self` will take.
         * @param duration the new duration, in milliseconds
         */
        set_mode_transition_duration(duration: number): void;

        /**
         * Sets the animation type that will be used for transitions between modes and
         * children.
         * 
         * The transition type can be changed without problems at runtime, so it is
         * possible to change the animation based on the mode or child that is about to
         * become current.
         * @param transition the new transition type
         */
        set_transition_type(transition: LeafletTransitionType): void;

        /**
         * Sets the currently visible widget when the leaflet is folded.
         * @param visible_child the new child
         */
        set_visible_child(visible_child: Gtk.Widget): void;

        /**
         * Makes the child with the name `name` visible.
         * 
         * See {@link Leaflet.set_visible_child} for more details.
         * @param name the name of a child
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
         * Emits `Handy.Swipeable::child-switched` signal.
         * 
         * This should be called when the widget switches visible child widget.
         * 
         * `duration` can be 0 if the child is switched without animation.
         * @param index the index of the child to switch to
         * @param duration animation duration, in milliseconds
         */
        emit_child_switched(index: number, duration: bigint | number): void;

        /**
         * Gets the progress `self` will snap back to after the gesture is canceled.
         * @returns the cancel progress, unitless
         */
        get_cancel_progress(): number;

        /**
         * Gets the swipe distance of `self`.
         * 
         * This corresponds to how many pixels 1 unit represents.
         * @returns the swipe distance in pixels
         */
        get_distance(): number;

        /**
         * Gets the current progress of `self`.
         * @returns the current progress, unitless
         */
        get_progress(): number;

        /**
         * Gets the snap points of `self`.
         * 
         * Each snap point represents a progress value that is considered acceptable to
         * end the swipe on.
         * @returns the snap points
         */
        get_snap_points(): number[];

        /**
         * Gets the area `self` can start a swipe from for the given direction and
         * gesture type.
         * 
         * This can be used to restrict swipes to only be possible from a certain area,
         * for example, to only allow edge swipes, or to have a draggable element and
         * ignore swipes elsewhere.
         * 
         * Swipe area is only considered for direct swipes (as in, not initiated by
         * {@link SwipeGroup}).
         * 
         * If not implemented, the default implementation returns the allocation of
         * `self`, allowing swipes from anywhere.
         * @param navigation_direction the direction of the swipe
         * @param is_drag whether the swipe is caused by a dragging gesture
         */
        get_swipe_area(navigation_direction: NavigationDirection, is_drag: boolean): Gdk.Rectangle;

        /**
         * Gets the {@link SwipeTracker} used by this swipeable widget.
         * @returns the swipe tracker
         */
        get_swipe_tracker(): SwipeTracker;

        /**
         * Switches to child with index `index`.
         * 
         * See `Handy.Swipeable::child-switched`.
         * @param index the index of the child to switch to
         * @param duration animation duration, in milliseconds
         */
        switch_child(index: number, duration: bigint | number): void;

        /**
         * Gets the progress `self` will snap back to after the gesture is canceled.
         * @virtual
         */
        vfunc_get_cancel_progress(): number;

        /**
         * Gets the swipe distance of `self`.
         * 
         * This corresponds to how many pixels 1 unit represents.
         * @virtual
         */
        vfunc_get_distance(): number;

        /**
         * Gets the current progress of `self`.
         * @virtual
         */
        vfunc_get_progress(): number;

        /**
         * Gets the snap points of `self`.
         * 
         * Each snap point represents a progress value that is considered acceptable to
         * end the swipe on.
         * @virtual
         */
        vfunc_get_snap_points(): number[];

        /**
         * Gets the area `self` can start a swipe from for the given direction and
         * gesture type.
         * 
         * This can be used to restrict swipes to only be possible from a certain area,
         * for example, to only allow edge swipes, or to have a draggable element and
         * ignore swipes elsewhere.
         * 
         * Swipe area is only considered for direct swipes (as in, not initiated by
         * {@link SwipeGroup}).
         * 
         * If not implemented, the default implementation returns the allocation of
         * `self`, allowing swipes from anywhere.
         * @param navigation_direction the direction of the swipe
         * @param is_drag whether the swipe is caused by a dragging gesture
         * @virtual
         */
        vfunc_get_swipe_area(navigation_direction: NavigationDirection, is_drag: boolean): Gdk.Rectangle;

        /**
         * Gets the {@link SwipeTracker} used by this swipeable widget.
         * @virtual
         */
        vfunc_get_swipe_tracker(): SwipeTracker;

        /**
         * Switches to child with index `index`.
         * 
         * See `Handy.Swipeable::child-switched`.
         * @param index the index of the child to switch to
         * @param duration animation duration, in milliseconds
         * @virtual
         */
        vfunc_switch_child(index: number, duration: number): void;

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
        interface SignalSignatures extends Gtk.Bin.SignalSignatures {
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::use-markup": (pspec: GObject.ParamSpec) => void;
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
            description: string;
            title: string;
            use_markup: boolean;
            useMarkup: boolean;
        }
    }

    /**
     * A group of preference rows.
     * 
     * A {@link Handy.PreferencesGroup} represents a group or tightly related preferences,
     * which in turn are represented by {@link PreferencesRow}.
     * 
     * To summarize the role of the preferences it gathers, a group can have both a
     * title and a description. The title will be used by {@link PreferencesWindow}
     * to let the user look for a preference.
     * 
     * ## CSS nodes
     * 
     * {@link Handy.PreferencesGroup} has a single CSS node with name `preferencesgroup`.
     * @gir-type Class
     * @since 1.0
     */
    class PreferencesGroup extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<PreferencesGroup>;

        // Properties
        /**
         * The description for this group of preferences.
         * @since 1.0
         */
        get description(): string;
        set description(val: string);

        /**
         * The title for this group of preferences.
         * @since 1.0
         */
        get title(): string;
        set title(val: string);

        /**
         * Whether to use markup for the title and description.
         * @since 1.4
         * @default false
         */
        get use_markup(): boolean;
        set use_markup(val: boolean);

        /**
         * Whether to use markup for the title and description.
         * @since 1.4
         * @default false
         */
        get useMarkup(): boolean;
        set useMarkup(val: boolean);

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
         * @returns the description of `self`
         */
        get_description(): string;

        /**
         * Gets the title of `self`.
         * @returns the title of `self`
         */
        get_title(): string;

        /**
         * Gets whether `self` uses markup for the title and description.
         * @returns whether `self` uses markup for its labels
         */
        get_use_markup(): boolean;

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
         * Sets whether `self` uses markup for the title and description.
         * @param use_markup whether to use markup
         */
        set_use_markup(use_markup: boolean): void;
    }


    namespace PreferencesPage {
        // Signal signatures
        interface SignalSignatures extends Gtk.Bin.SignalSignatures {
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
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
            icon_name: string | null;
            iconName: string | null;
            title: string | null;
        }
    }

    /**
     * A page from {@link PreferencesWindow}.
     * 
     * The {@link Handy.PreferencesPage} widget gathers preferences groups into a single page
     * of a preferences window.
     * 
     * ## CSS nodes
     * 
     * {@link Handy.PreferencesPage} has a single CSS node with name `preferencespage`.
     * @gir-type Class
     * @since 1.0
     */
    class PreferencesPage extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<PreferencesPage>;

        // Properties
        /**
         * The icon name for this page of preferences.
         * @since 1.0
         */
        get icon_name(): string | null;
        set icon_name(val: string | null);

        /**
         * The icon name for this page of preferences.
         * @since 1.0
         */
        get iconName(): string | null;
        set iconName(val: string | null);

        /**
         * The title for this page of preferences.
         * @since 1.0
         */
        get title(): string | null;
        set title(val: string | null);

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
         * Gets the icon name for `self`.
         * @returns the icon name for `self`
         */
        get_icon_name(): string | null;

        /**
         * Gets the title of `self`.
         * @returns the title of the `self`
         */
        get_title(): string | null;

        /**
         * Sets the icon name for `self`.
         * @param icon_name the icon name
         */
        set_icon_name(icon_name: string | null): void;

        /**
         * Sets the title of `self`.
         * @param title the title of the page
         */
        set_title(title: string | null): void;
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
            title: string | null;
            use_underline: boolean;
            useUnderline: boolean;
        }
    }

    /**
     * A {@link Gtk.ListBoxRow} used to present preferences.
     * 
     * The {@link Handy.PreferencesRow} widget has a title that {@link PreferencesWindow}
     * will use to let the user look for a preference. It doesn't present the title
     * in any way and lets you present the preference as you please.
     * 
     * {@link ActionRow} and its derivatives are convenient to use as preference
     * rows as they take care of presenting the preference's title while letting you
     * compose the inputs of the preference around it.
     * @gir-type Class
     * @since 1.0
     */
    class PreferencesRow extends Gtk.ListBoxRow implements Atk.ImplementorIface, Gtk.Actionable, Gtk.Buildable {
        static $gtype: GObject.GType<PreferencesRow>;

        // Properties
        /**
         * The title of the preference represented by this row.
         * @since 1.0
         */
        get title(): string | null;
        set title(val: string | null);

        /**
         * Whether an embedded underline in the title indicates a mnemonic.
         * @since 1.0
         * @default false
         */
        get use_underline(): boolean;
        set use_underline(val: boolean);

        /**
         * Whether an embedded underline in the title indicates a mnemonic.
         * @since 1.0
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
         * @returns the title of the preference represented   by `self`
         */
        get_title(): string | null;

        /**
         * Gets whether an embedded underline in the title indicates a mnemonic.
         * @returns whether an embedded underline in the title indicates a mnemonic
         */
        get_use_underline(): boolean;

        /**
         * Sets the title of the preference represented by `self`.
         * @param title the title
         */
        set_title(title: string | null): void;

        /**
         * Sets whether an embedded underline in the title indicates a mnemonic.
         * @param use_underline `TRUE` if underlines in the text indicate mnemonics
         */
        set_use_underline(use_underline: boolean): void;

        /**
         * @default null
          * @category Inherited from Gtk.Actionable
         */
        get action_name(): string | null;
        set action_name(val: string | null);

        /**
         * @default null
          * @category Inherited from Gtk.Actionable
         */
        get actionName(): string | null;
        set actionName(val: string | null);

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
        get_action_name(): string | null;

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
        set_action_name(action_name: string | null): void;

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
        set_action_target_value(target_value: GLib.Variant | null): void;

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
        vfunc_get_action_name(): string | null;

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
        vfunc_set_action_name(action_name: string | null): void;

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
        vfunc_set_action_target_value(target_value: GLib.Variant | null): void;

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
        interface SignalSignatures extends Window.SignalSignatures {
            "notify::can-swipe-back": (pspec: GObject.ParamSpec) => void;
            "notify::search-enabled": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Window.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            can_swipe_back: boolean;
            canSwipeBack: boolean;
            search_enabled: boolean;
            searchEnabled: boolean;
        }
    }

    /**
     * A window to present an application's preferences.
     * 
     * The {@link Handy.PreferencesWindow} widget presents an application's preferences
     * gathered into pages and groups. The preferences are searchable by the user.
     * 
     * ## CSS nodes
     * 
     * {@link Handy.PreferencesWindow} has a main CSS node with the name `window` and the
     * style class `.preferences`.
     * @gir-type Class
     * @since 1.0
     */
    class PreferencesWindow extends Window implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<PreferencesWindow>;

        // Properties
        /**
         * Whether the window allows closing the subpage via a swipe gesture.
         * @since 1.0
         * @default false
         */
        get can_swipe_back(): boolean;
        set can_swipe_back(val: boolean);

        /**
         * Whether the window allows closing the subpage via a swipe gesture.
         * @since 1.0
         * @default false
         */
        get canSwipeBack(): boolean;
        set canSwipeBack(val: boolean);

        /**
         * Whether search is enabled.
         * @since 1.0
         * @default true
         */
        get search_enabled(): boolean;
        set search_enabled(val: boolean);

        /**
         * Whether search is enabled.
         * @since 1.0
         * @default true
         */
        get searchEnabled(): boolean;
        set searchEnabled(val: boolean);

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

        // Methods
        /**
         * Closes the current subpage.
         * 
         * If there is no presented subpage, this does nothing.
         */
        close_subpage(): void;

        /**
         * Gets whether swipe gestures allow switching from a subpage to the
         * preferences.
         * @returns `TRUE` if back swipe is enabled
         */
        get_can_swipe_back(): boolean;

        /**
         * Gets whether search is enabled for `self`.
         * @returns whether search is enabled for `self`
         */
        get_search_enabled(): boolean;

        /**
         * Sets `subpage` as the window's subpage and opens it.
         * 
         * The transition can be cancelled by the user, in which case visible child will
         * change back to the previously visible child.
         * @param subpage the subpage
         */
        present_subpage(subpage: Gtk.Widget): void;

        /**
         * Sets whether swipe gestures allow switching from a subpage to the
         * preferences.
         * @param can_swipe_back the new value
         */
        set_can_swipe_back(can_swipe_back: boolean): void;

        /**
         * Sets whether search is enabled for `self`.
         * @param search_enabled `TRUE` to enable search, `FALSE` to disable it
         */
        set_search_enabled(search_enabled: boolean): void;
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
     * A toolbar to integrate a search entry with.
     * 
     * {@link Handy.SearchBar} is a container made to have a search entry (possibly with
     * additional connex widgets, such as drop-down menus, or buttons) built-in. The
     * search bar would appear when a search is started through typing on the
     * keyboard, or the application’s search mode is toggled on.
     * 
     * For keyboard presses to start a search, events will need to be forwarded from
     * the top-level window that contains the search bar. See
     * {@link SearchBar.handle_event} for example code. Common shortcuts such as
     * <kbd>Ctrl</kbd>+<kbd>F</kbd> should be handled as an application action, or
     * through the menu items.
     * 
     * You will also need to tell the search bar about which entry you are using as
     * your search entry using {@link SearchBar.connect_entry}. The following
     * example shows you how to create a more complex search entry.
     * 
     * {@link Handy.SearchBar} is very similar to {@link Gtk.SearchBar}, the main difference
     * being that it allows the search entry to fill all the available space. This
     * allows you to control your search entry's width with a {@link Clamp}.
     * 
     * ## CSS nodes
     * 
     * {@link Handy.SearchBar} has a single CSS node with name `searchbar`.
     * @gir-type Class
     * @since 1.0
     */
    class SearchBar extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<SearchBar>;

        // Properties
        /**
         * Whether the search mode is on and the search bar shown.
         * @since 1.0
         * @default false
         */
        get search_mode_enabled(): boolean;
        set search_mode_enabled(val: boolean);

        /**
         * Whether the search mode is on and the search bar shown.
         * @since 1.0
         * @default false
         */
        get searchModeEnabled(): boolean;
        set searchModeEnabled(val: boolean);

        /**
         * Whether to show the close button in the toolbar.
         * @since 1.0
         * @default false
         */
        get show_close_button(): boolean;
        set show_close_button(val: boolean);

        /**
         * Whether to show the close button in the toolbar.
         * @since 1.0
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
         * Sets the entry widget passed as the one to be used in this search bar.
         * 
         * The entry should be a descendant of the search bar. This is only required if
         * the entry isn’t the direct child of the search bar (as in our main example).
         * @param entry an entry
         */
        connect_entry(entry: Gtk.Entry): void;

        /**
         * Gets whether the search mode is on.
         * @returns whether search mode is toggled on
         */
        get_search_mode(): boolean;

        /**
         * Gets whether the close button is shown.
         * @returns whether the close button is shown
         */
        get_show_close_button(): boolean;

        /**
         * Handles key press events.
         * 
         * This function should be called when the top-level window which contains the
         * search bar received a key event.
         * 
         * If the key event is handled by the search bar, the bar will be shown, the
         * entry populated with the entered text and `GDK_EVENT_STOP` will be returned.
         * The caller should ensure that events are not propagated further.
         * 
         * If no entry has been connected to the search bar, using
         * {@link SearchBar.connect_entry}, this function will return immediately with
         * a warning.
         * 
         * ## Showing the search bar on key presses
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
         *   // Add more widgets to the window...
         * 
         *   g_signal_connect (window,
         *                    "key-press-event",
         *                     G_CALLBACK (on_key_press_event),
         *                     search_bar);
         * }
         * ```
         * @param event a {@link Gdk.Event} containing key press events
         * @returns `GDK_EVENT_STOP` if the key press event resulted in text being   entered in the search entry (and revealing the search bar if necessary),   `GDK_EVENT_PROPAGATE` otherwise.
         */
        handle_event(event: Gdk.Event): boolean;

        /**
         * Switches the search mode on or off.
         * @param search_mode the new state of the search mode
         */
        set_search_mode(search_mode: boolean): void;

        /**
         * Shows or hides the close button.
         * 
         * Applications that already have a “search” toggle button should not show a
         * close button in their search bar, as it duplicates the role of the toggle
         * button.
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
            visible_child: Gtk.Widget | null;
            visibleChild: Gtk.Widget | null;
            xalign: number;
            yalign: number;
        }
    }

    /**
     * A best fit container.
     * 
     * The {@link Handy.Squeezer} widget is a container which only shows the first of its
     * children that fits in the available size. It is convenient to offer different
     * widgets to represent the same data with different levels of detail, making
     * the widget seem to squeeze itself to fit in the available space.
     * 
     * Transitions between children can be animated as fades. This can be controlled
     * with {@link Squeezer.set_transition_type}.
     * 
     * ## CSS nodes
     * 
     * {@link Handy.Squeezer} has a single CSS node with name `squeezer`.
     * @gir-type Class
     * @since 1.0
     */
    class Squeezer extends Gtk.Container implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<Squeezer>;

        // Properties
        /**
         * Whether all children have the same size for the opposite orientation.
         * 
         * For example, if a squeezer is horizontal and is homogeneous, it will request
         * the same height for all its children. If it isn't, the squeezer may change
         * size when a different child becomes visible.
         * @since 1.0
         * @default false
         */
        get homogeneous(): boolean;
        set homogeneous(val: boolean);

        /**
         * Whether the squeezer interpolates its size when changing the visible child.
         * 
         * If `TRUE`, the squeezer will interpolate its size between the one of the
         * previous visible child and the one of the new visible child, according to
         * the set transition duration and the orientation, e.g. if the squeezer is
         * horizontal, it will interpolate the its height.
         * @since 1.0
         * @default false
         */
        get interpolate_size(): boolean;
        set interpolate_size(val: boolean);

        /**
         * Whether the squeezer interpolates its size when changing the visible child.
         * 
         * If `TRUE`, the squeezer will interpolate its size between the one of the
         * previous visible child and the one of the new visible child, according to
         * the set transition duration and the orientation, e.g. if the squeezer is
         * horizontal, it will interpolate the its height.
         * @since 1.0
         * @default false
         */
        get interpolateSize(): boolean;
        set interpolateSize(val: boolean);

        /**
         * The animation duration, in milliseconds.
         * @since 1.0
         * @default 200
         */
        get transition_duration(): number;
        set transition_duration(val: number);

        /**
         * The animation duration, in milliseconds.
         * @since 1.0
         * @default 200
         */
        get transitionDuration(): number;
        set transitionDuration(val: number);

        /**
         * Whether a transition is currently running.
         * @since 1.0
         * @read-only
         * @default false
         */
        get transition_running(): boolean;

        /**
         * Whether a transition is currently running.
         * @since 1.0
         * @read-only
         * @default false
         */
        get transitionRunning(): boolean;

        /**
         * The type of animation used for transitions between children.
         * 
         * Available types include various kinds of fades and slides.
         * 
         * The transition type can be changed without problems at runtime, so it is
         * possible to change the animation based on the child that is about to become
         * current.
         * @since 1.0
         * @default Handy.SqueezerTransitionType.NONE
         */
        get transition_type(): SqueezerTransitionType;
        set transition_type(val: SqueezerTransitionType);

        /**
         * The type of animation used for transitions between children.
         * 
         * Available types include various kinds of fades and slides.
         * 
         * The transition type can be changed without problems at runtime, so it is
         * possible to change the animation based on the child that is about to become
         * current.
         * @since 1.0
         * @default Handy.SqueezerTransitionType.NONE
         */
        get transitionType(): SqueezerTransitionType;
        set transitionType(val: SqueezerTransitionType);

        /**
         * The currently visible child.
         * @since 1.0
         * @read-only
         */
        get visible_child(): Gtk.Widget | null;

        /**
         * The currently visible child.
         * @since 1.0
         * @read-only
         */
        get visibleChild(): Gtk.Widget | null;

        /**
         * The horizontal alignment, from 0 (start) to 1 (end).
         * 
         * The xalign property determines the horizontal alignment of the children
         * inside the squeezer's size allocation. Compare this to
         * {@link Gtk.Widget.halign}, which determines how the squeezer's size
         * allocation is positioned in the space available for the squeezer.
         * 
         * This will affect the position of children too wide to fit in the squeezer
         * as they are fading out.
         * @since 1.0
         * @default 0.5
         */
        get xalign(): number;
        set xalign(val: number);

        /**
         * The vertical alignment, from 0 (start) to 1 (end).
         * 
         * The yalign property determines the vertical alignment of the children
         * inside the squeezer's size allocation. Compare this to
         * {@link Gtk.Widget.valign}, which determines how the squeezer's size
         * allocation is positioned in the space available for the squeezer.
         * 
         * This will affect the position of children too tall to fit in the squeezer
         * as they are fading out.
         * @since 1.0
         * @default 0.5
         */
        get yalign(): number;
        set yalign(val: number);

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
         * See {@link Squeezer.set_child_enabled}.
         * @param child a child of `self`
         * @returns whether `child` is enabled
         */
        get_child_enabled(child: Gtk.Widget): boolean;

        /**
         * Gets whether `self` is homogeneous.
         * @returns whether `self` is homogeneous
         */
        get_homogeneous(): boolean;

        /**
         * Gets whether `self` should interpolate its size on visible child change.
         * @returns whether `self` interpolates its size on visible child change
         */
        get_interpolate_size(): boolean;

        /**
         * Gets the amount of time that transitions between children will take.
         * @returns the transition duration, in milliseconds
         */
        get_transition_duration(): number;

        /**
         * Gets whether a transition is currently running for `self`.
         * @returns whether a transition is currently running
         */
        get_transition_running(): boolean;

        /**
         * Gets the animation type that will be used for transitions between children.
         * @returns the current transition type of `self`
         */
        get_transition_type(): SqueezerTransitionType;

        /**
         * Gets the currently visible child of `self`.
         * @returns the visible child
         */
        get_visible_child(): Gtk.Widget | null;

        /**
         * Gets the horizontal alignment.
         * @returns the xalign property
         */
        get_xalign(): number;

        /**
         * Gets the vertical alignment.
         * @returns the yalign property
         */
        get_yalign(): number;

        /**
         * Sets whether `child` is enabled.
         * 
         * If a child is disabled, it will be ignored when looking for the child fitting
         * the available size best. This allows to programmatically and prematurely hide
         * a child of `self` even if it fits in the available space.
         * 
         * This can be used e.g. to ensure a certain child is hidden below a certain
         * window width, or any other constraint you find suitable.
         * @param child a child of `self`
         * @param enabled whether to enable the child
         */
        set_child_enabled(child: Gtk.Widget, enabled: boolean): void;

        /**
         * Sets whether all children have the same size for the opposite orientation.
         * @param homogeneous `TRUE` to make `self` homogeneous
         */
        set_homogeneous(homogeneous: boolean): void;

        /**
         * Sets whether `self` should interpolate its size on visible child change.
         * @param interpolate_size `TRUE` to interpolate the size
         */
        set_interpolate_size(interpolate_size: boolean): void;

        /**
         * Sets the duration that transitions between children in `self` will take.
         * @param duration the new duration, in milliseconds
         */
        set_transition_duration(duration: number): void;

        /**
         * Sets the animation type that will be used for transitions between children.
         * @param transition the new transition type
         */
        set_transition_type(transition: SqueezerTransitionType): void;

        /**
         * Sets the horizontal alignment.
         * @param xalign the new xalign value, between 0 and 1
         */
        set_xalign(xalign: number): void;

        /**
         * Sets the vertical alignment.
         * @param yalign the new yalign value, between 0 and 1
         */
        set_yalign(yalign: number): void;

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


    namespace StatusPage {
        // Signal signatures
        interface SignalSignatures extends Gtk.Bin.SignalSignatures {
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
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
            description: string | null;
            icon_name: string | null;
            iconName: string | null;
            title: string | null;
        }
    }

    /**
     * A page used for empty/error states and similar use-cases.
     * 
     * The {@link Handy.StatusPage} widget can have an icon, a title, a description and a
     * custom widget which is displayed below them.
     * 
     * ## CSS nodes
     * 
     * {@link Handy.StatusPage} has a main CSS node with name `statuspage`.
     * @gir-type Class
     * @since 1.2
     */
    class StatusPage extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<StatusPage>;

        // Properties
        /**
         * The description to be displayed below the title.
         * @since 1.2
         */
        get description(): string | null;
        set description(val: string | null);

        /**
         * The name of the icon to be used.
         * @since 1.2
         * @default null
         */
        get icon_name(): string | null;
        set icon_name(val: string | null);

        /**
         * The name of the icon to be used.
         * @since 1.2
         * @default null
         */
        get iconName(): string | null;
        set iconName(val: string | null);

        /**
         * The title to be displayed below the icon.
         * @since 1.2
         */
        get title(): string | null;
        set title(val: string | null);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StatusPage.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<StatusPage.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): StatusPage;

        // Signals
        /** @signal */
        connect<K extends keyof StatusPage.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StatusPage.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof StatusPage.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StatusPage.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof StatusPage.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<StatusPage.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets the description for `self`.
         * @returns the description for `self`
         */
        get_description(): string | null;

        /**
         * Gets the icon name for `self`.
         * @returns the icon name for `self`
         */
        get_icon_name(): string | null;

        /**
         * Gets the title for `self`.
         * @returns the title for `self`
         */
        get_title(): string | null;

        /**
         * Sets the description for `self`.
         * @param description the description
         */
        set_description(description: string | null): void;

        /**
         * Sets the icon name for `self`.
         * @param icon_name the icon name
         */
        set_icon_name(icon_name: string | null): void;

        /**
         * Sets the title for `self`.
         * @param title the title
         */
        set_title(title: string | null): void;
    }


    namespace StyleManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::color-scheme": (pspec: GObject.ParamSpec) => void;
            "notify::dark": (pspec: GObject.ParamSpec) => void;
            "notify::display": (pspec: GObject.ParamSpec) => void;
            "notify::high-contrast": (pspec: GObject.ParamSpec) => void;
            "notify::system-supports-color-schemes": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            color_scheme: ColorScheme;
            colorScheme: ColorScheme;
            dark: boolean;
            display: Gdk.Display;
            high_contrast: boolean;
            highContrast: boolean;
            system_supports_color_schemes: boolean;
            systemSupportsColorSchemes: boolean;
        }
    }

    /**
     * A class for managing application-wide styling.
     * 
     * {@link Handy.StyleManager} provides a way to query and influence the application
     * styles, such as whether to use dark or high contrast appearance.
     * 
     * It allows to set the color scheme via the
     * {@link StyleManager.color_scheme} property, and to query the current
     * appearance, as well as whether a system-wide color scheme preference exists.
     * 
     * Important: {@link Gtk.Settings.gtk_application_prefer_dark_theme} should
     * not be used together with {@link Handy.StyleManager} and will result in a warning.
     * Color schemes should be used instead.
     * @gir-type Class
     * @since 1.6
     */
    class StyleManager extends GObject.Object {
        static $gtype: GObject.GType<StyleManager>;

        // Properties
        /**
         * The requested application color scheme.
         * 
         * The effective appearance will be decided based on the application color
         * scheme and the system preferred color scheme. The
         * {@link StyleManager.dark} property can be used to query the current
         * effective appearance.
         * 
         * The `HDY_COLOR_SCHEME_PREFER_LIGHT` color scheme results in the application
         * using light appearance unless the system prefers dark colors. This is the
         * default value.
         * 
         * The `HDY_COLOR_SCHEME_PREFER_DARK` color scheme results in the application
         * using dark appearance, but can still switch to the light appearance if the
         * system can prefers it, for example, when the high contrast preference is
         * enabled.
         * 
         * The `HDY_COLOR_SCHEME_FORCE_LIGHT` and `HDY_COLOR_SCHEME_FORCE_DARK` values
         * ignore the system preference entirely, they are useful if the application
         * wants to match its UI to its content or to provide a separate color scheme
         * switcher.
         * 
         * If a per-{@link Gdk.Display} style manager has its color scheme set to
         * `HDY_COLOR_SCHEME_DEFAULT`, it will inherit the color scheme from the
         * default style manager.
         * 
         * For the default style manager, `HDY_COLOR_SCHEME_DEFAULT` is equivalent to
         * `HDY_COLOR_SCHEME_FORCE_LIGHT`.
         * 
         * The {@link StyleManager.system_supports_color_schemes} property can be
         * used to check if the current environment provides a color scheme
         * preference.
         * @since 1.6
         * @default Handy.ColorScheme.DEFAULT
         */
        get color_scheme(): ColorScheme;
        set color_scheme(val: ColorScheme);

        /**
         * The requested application color scheme.
         * 
         * The effective appearance will be decided based on the application color
         * scheme and the system preferred color scheme. The
         * {@link StyleManager.dark} property can be used to query the current
         * effective appearance.
         * 
         * The `HDY_COLOR_SCHEME_PREFER_LIGHT` color scheme results in the application
         * using light appearance unless the system prefers dark colors. This is the
         * default value.
         * 
         * The `HDY_COLOR_SCHEME_PREFER_DARK` color scheme results in the application
         * using dark appearance, but can still switch to the light appearance if the
         * system can prefers it, for example, when the high contrast preference is
         * enabled.
         * 
         * The `HDY_COLOR_SCHEME_FORCE_LIGHT` and `HDY_COLOR_SCHEME_FORCE_DARK` values
         * ignore the system preference entirely, they are useful if the application
         * wants to match its UI to its content or to provide a separate color scheme
         * switcher.
         * 
         * If a per-{@link Gdk.Display} style manager has its color scheme set to
         * `HDY_COLOR_SCHEME_DEFAULT`, it will inherit the color scheme from the
         * default style manager.
         * 
         * For the default style manager, `HDY_COLOR_SCHEME_DEFAULT` is equivalent to
         * `HDY_COLOR_SCHEME_FORCE_LIGHT`.
         * 
         * The {@link StyleManager.system_supports_color_schemes} property can be
         * used to check if the current environment provides a color scheme
         * preference.
         * @since 1.6
         * @default Handy.ColorScheme.DEFAULT
         */
        get colorScheme(): ColorScheme;
        set colorScheme(val: ColorScheme);

        /**
         * Whether the application is using dark appearance.
         * 
         * This property can be used to query the current appearance, as requested via
         * {@link StyleManager.color_scheme}.
         * @since 1.6
         * @read-only
         * @default false
         */
        get dark(): boolean;

        /**
         * The display the style manager is associated with.
         * 
         * The display will be `NULL` for the style manager returned by
         * {@link StyleManager.get_default}.
         * @since 1.6
         * @construct-only
         */
        get display(): Gdk.Display;

        /**
         * Whether the application is using high contrast appearance.
         * 
         * This cannot be overridden by applications.
         * @since 1.6
         * @read-only
         * @default false
         */
        get high_contrast(): boolean;

        /**
         * Whether the application is using high contrast appearance.
         * 
         * This cannot be overridden by applications.
         * @since 1.6
         * @read-only
         * @default false
         */
        get highContrast(): boolean;

        /**
         * Whether the system supports color schemes.
         * 
         * This property can be used to check if the current environment provides a
         * color scheme preference. For example, applications might want to show a
         * separate appearance switcher if it's set to `FALSE`.
         * 
         * It's only set at startup and cannot change its value later.
         * 
         * See {@link StyleManager.color_scheme}.
         * @since 1.6
         * @read-only
         * @default false
         */
        get system_supports_color_schemes(): boolean;

        /**
         * Whether the system supports color schemes.
         * 
         * This property can be used to check if the current environment provides a
         * color scheme preference. For example, applications might want to show a
         * separate appearance switcher if it's set to `FALSE`.
         * 
         * It's only set at startup and cannot change its value later.
         * 
         * See {@link StyleManager.color_scheme}.
         * @since 1.6
         * @read-only
         * @default false
         */
        get systemSupportsColorSchemes(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StyleManager.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<StyleManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof StyleManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StyleManager.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof StyleManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StyleManager.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof StyleManager.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<StyleManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Gets the default {@link StyleManager} instance.
         * 
         * It manages all {@link Gdk.Display} instances unless the style manager for
         * that display has an override.
         * 
         * See {@link StyleManager.get_for_display}.
         */
        static get_default(): StyleManager;

        /**
         * Gets the {@link StyleManager} instance managing `display`.
         * 
         * It can be used to override styles for that specific display instead of the
         * whole application.
         * 
         * Most applications should use {@link StyleManager.get_default} instead.
         * @param display a display
         */
        static get_for_display(display: Gdk.Display): StyleManager;

        // Methods
        /**
         * Gets the requested application color scheme.
         * @returns the color scheme
         */
        get_color_scheme(): ColorScheme;

        /**
         * Gets whether the application is using dark appearance.
         * @returns whether the application is using dark appearance
         */
        get_dark(): boolean;

        /**
         * Gets the display the style manager is associated with.
         * 
         * The display will be `NULL` for the style manager returned by
         * {@link StyleManager.get_default}.
         * @returns (nullable): the display
         */
        get_display(): Gdk.Display;

        /**
         * Gets whether the application is using high contrast appearance.
         * @returns whether the application is using high contrast appearance
         */
        get_high_contrast(): boolean;

        /**
         * Gets whether the system supports color schemes.
         * @returns whether the system supports color schemes
         */
        get_system_supports_color_schemes(): boolean;

        /**
         * Sets the requested application color scheme.
         * 
         * The effective appearance will be decided based on the application color
         * scheme and the system preferred color scheme. The
         * {@link StyleManager.dark} property can be used to query the current
         * effective appearance.
         * @param color_scheme the color scheme
         */
        set_color_scheme(color_scheme: ColorScheme): void;
    }


    namespace SwipeGroup {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gtk.Buildable.ConstructorProps {}
    }

    /**
     * An object for syncing swipeable widgets.
     * 
     * The {@link Handy.SwipeGroup} object can be used to sync multiple swipeable widgets
     * that implement the {@link Swipeable} interface, such as {@link Carousel}, so
     * that animating one of them also animates all the other widgets in the group.
     * 
     * This can be useful for syncing widgets between a window's titlebar and
     * content area.
     * 
     * ## HdySwipeGroup as GtkBuildable
     * 
     * {@link Handy.SwipeGroup} can be created in an UI definition. The list of swipeable
     * widgets is specified with a &lt;swipeables&gt; element containing multiple
     * &lt;swipeable&gt; elements with their ”name” attribute specifying the id of
     * the widgets.
     * 
     * ```xml
     * <object class="HdySwipeGroup">
     *   <swipeables>
     *     <swipeable name="carousel1"/>
     *     <swipeable name="carousel2"/>
     *   </swipeables>
     * </object>
     * ```
     * 
     * {@link Handy.SwipeGroup} has been deprecated, {@link Window} and
     * {@link ApplicationWindow} allow using a single leaflet for both content and
     * header bar, without the need to sync them.
     * @gir-type Class
     * @since 1.0
     * @deprecated since 1.4
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
         * Adds a swipeable to `self`.
         * 
         * When the widget is destroyed or no longer referenced elsewhere, it will be
         * removed from the swipe group.
         * @param swipeable the {@link Swipeable} to add
         */
        add_swipeable(swipeable: Swipeable): void;

        /**
         * Gets the list of swipeables associated with `self`.
         * @returns a list of swipeables
         */
        get_swipeables(): Swipeable[];

        /**
         * Removes a widget from a {@link SwipeGroup}.
         * @param swipeable the {@link Swipeable} to remove
         */
        remove_swipeable(swipeable: Swipeable): void;

        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a {@link Gtk.Builder}
         * @param child child to add
         * @param type kind of child or `null`
         */
        add_child(builder: Gtk.Builder, child: GObject.Object, type: string | null): void;

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
        custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data: null): void;

        /**
         * This is called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         */
        custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data: null): void;

        /**
         * This is called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @returns `true` if a object has a custom implementation, `false`          if it doesn't.
         */
        custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [boolean, GLib.MarkupParser, null];

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
        set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;

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
        vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type: string | null): void;

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
        vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data: null): void;

        /**
         * This is called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data: null): void;

        /**
         * This is called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [boolean, GLib.MarkupParser, never];

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


    namespace SwipeTracker {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * This signal is emitted when a possible swipe is detected.
             * 
             * The `direction` value can be used to restrict the swipe to a certain
             * direction.
             * @signal
             * @since 1.0
             * @run-first
             */
            "begin-swipe": (arg0: NavigationDirection, arg1: boolean) => void;
            /**
             * This signal is emitted as soon as the gesture has stopped.
             * @signal
             * @since 1.0
             * @run-first
             */
            "end-swipe": (arg0: number, arg1: number) => void;
            /**
             * This signal is emitted every time the progress value changes.
             * @signal
             * @since 1.0
             * @run-first
             */
            "update-swipe": (arg0: number) => void;
            "notify::allow-long-swipes": (pspec: GObject.ParamSpec) => void;
            "notify::allow-mouse-drag": (pspec: GObject.ParamSpec) => void;
            "notify::enabled": (pspec: GObject.ParamSpec) => void;
            "notify::reversed": (pspec: GObject.ParamSpec) => void;
            "notify::swipeable": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gtk.Orientable.ConstructorProps {
            allow_long_swipes: boolean;
            allowLongSwipes: boolean;
            allow_mouse_drag: boolean;
            allowMouseDrag: boolean;
            enabled: boolean;
            reversed: boolean;
            swipeable: Swipeable;
        }
    }

    /**
     * Swipe tracker used in {@link Carousel} and {@link Leaflet}.
     * 
     * The {@link Handy.SwipeTracker} object can be used for implementing widgets with swipe
     * gestures. It supports touch-based swipes, pointer dragging, and touchpad
     * scrolling.
     * 
     * The widgets will probably want to expose {@link SwipeTracker.enabled}
     * property. If they expect to use horizontal orientation,
     * {@link SwipeTracker.reversed} property can be used for supporting RTL text
     * direction.
     * @gir-type Class
     * @since 1.0
     */
    class SwipeTracker extends GObject.Object implements Gtk.Orientable {
        static $gtype: GObject.GType<SwipeTracker>;

        // Properties
        /**
         * Whether to allow swiping for more than one snap point at a time.
         * 
         * If the value is `FALSE`, each swipe can only move to the adjacent snap
         * points.
         * @since 1.2
         * @default false
         */
        get allow_long_swipes(): boolean;
        set allow_long_swipes(val: boolean);

        /**
         * Whether to allow swiping for more than one snap point at a time.
         * 
         * If the value is `FALSE`, each swipe can only move to the adjacent snap
         * points.
         * @since 1.2
         * @default false
         */
        get allowLongSwipes(): boolean;
        set allowLongSwipes(val: boolean);

        /**
         * Whether to allow dragging with mouse pointer.
         * 
         * This should usually be `FALSE`.
         * @since 1.0
         * @default false
         */
        get allow_mouse_drag(): boolean;
        set allow_mouse_drag(val: boolean);

        /**
         * Whether to allow dragging with mouse pointer.
         * 
         * This should usually be `FALSE`.
         * @since 1.0
         * @default false
         */
        get allowMouseDrag(): boolean;
        set allowMouseDrag(val: boolean);

        /**
         * Whether the swipe tracker is enabled.
         * 
         * When it's not enabled, no events will be processed. Usually widgets will
         * want to expose this via a property.
         * @since 1.0
         * @default true
         */
        get enabled(): boolean;
        set enabled(val: boolean);

        /**
         * Whether to reverse the swipe direction.
         * 
         * If the swipe tracker is horizontal, it can be used for supporting RTL text
         * direction.
         * @since 1.0
         * @default false
         */
        get reversed(): boolean;
        set reversed(val: boolean);

        /**
         * The widget the swipe tracker is attached to. Must not be `NULL`.
         * @since 1.0
         * @construct-only
         */
        get swipeable(): Swipeable;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SwipeTracker.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<SwipeTracker.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](swipeable: Swipeable): SwipeTracker;

        // Signals
        /** @signal */
        connect<K extends keyof SwipeTracker.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SwipeTracker.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof SwipeTracker.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SwipeTracker.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof SwipeTracker.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SwipeTracker.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Whether to allow swiping for more than one snap point at a time.
         * 
         * If the value is `FALSE`, each swipe can only move to the adjacent snap
         * points.
         * @returns whether long swipes are allowed
         */
        get_allow_long_swipes(): boolean;

        /**
         * Get whether `self` can be dragged with mouse pointer.
         * @returns `TRUE` is mouse dragging is allowed
         */
        get_allow_mouse_drag(): boolean;

        /**
         * Get whether `self` is enabled.
         * @returns `TRUE` if `self` is enabled
         */
        get_enabled(): boolean;

        /**
         * Get whether `self` is reversing the swipe direction.
         * @returns `TRUE` is the direction is reversed
         */
        get_reversed(): boolean;

        /**
         * Get `self`'s swipeable widget.
         * @returns the swipeable widget
         */
        get_swipeable(): Swipeable;

        /**
         * Sets whether to allow swiping for more than one snap point at a time.
         * 
         * If the value is `FALSE`, each swipe can only move to the adjacent snap
         * points.
         * @param allow_long_swipes whether to allow long swipes
         */
        set_allow_long_swipes(allow_long_swipes: boolean): void;

        /**
         * Set whether `self` can be dragged with mouse pointer.
         * 
         * This should usually be `FALSE`.
         * @param allow_mouse_drag whether to allow mouse dragging
         */
        set_allow_mouse_drag(allow_mouse_drag: boolean): void;

        /**
         * Set whether `self` is enabled.
         * @param enabled whether to enable to swipe tracker
         */
        set_enabled(enabled: boolean): void;

        /**
         * Set whether to reverse the swipe direction.
         * 
         * If `self` is horizontal, can be used for supporting RTL text direction.
         * @param reversed whether to reverse the swipe direction
         */
        set_reversed(reversed: boolean): void;

        /**
         * Move the current progress value by `delta`.
         * 
         * This can be used to adjust the current position if snap points move during
         * the gesture.
         * @param delta the position delta
         */
        shift_position(delta: number): void;

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


    namespace TabBar {
        // Signal signatures
        interface SignalSignatures extends Gtk.Bin.SignalSignatures {
            /**
             * Emitted when content allowed via {@link TabBar.extra_drag_dest_targets}
             * is dropped onto a tab.
             * 
             * See `Gtk.Widget::drag-data-received`.
             * @signal
             * @since 1.2
             * @run-last
             */
            "extra-drag-data-received": (arg0: TabPage, arg1: Gdk.DragContext, arg2: Gtk.SelectionData, arg3: number, arg4: number) => void;
            "notify::autohide": (pspec: GObject.ParamSpec) => void;
            "notify::end-action-widget": (pspec: GObject.ParamSpec) => void;
            "notify::expand-tabs": (pspec: GObject.ParamSpec) => void;
            "notify::extra-drag-dest-targets": (pspec: GObject.ParamSpec) => void;
            "notify::inverted": (pspec: GObject.ParamSpec) => void;
            "notify::is-overflowing": (pspec: GObject.ParamSpec) => void;
            "notify::start-action-widget": (pspec: GObject.ParamSpec) => void;
            "notify::tabs-revealed": (pspec: GObject.ParamSpec) => void;
            "notify::view": (pspec: GObject.ParamSpec) => void;
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
            autohide: boolean;
            end_action_widget: Gtk.Widget | null;
            endActionWidget: Gtk.Widget | null;
            expand_tabs: boolean;
            expandTabs: boolean;
            extra_drag_dest_targets: Gtk.TargetList | null;
            extraDragDestTargets: Gtk.TargetList | null;
            inverted: boolean;
            is_overflowing: boolean;
            isOverflowing: boolean;
            start_action_widget: Gtk.Widget | null;
            startActionWidget: Gtk.Widget | null;
            tabs_revealed: boolean;
            tabsRevealed: boolean;
            view: TabView | null;
        }
    }

    /**
     * A tab bar for {@link TabView}.
     * 
     * The {@link Handy.TabBar} widget is a tab bar that can be used with conjunction with
     * {@link TabView}.
     * 
     * {@link Handy.TabBar} can autohide and can optionally contain action widgets on both
     * sides of the tabs.
     * 
     * When there's not enough space to show all the tabs, {@link Handy.TabBar} will scroll
     * them. Pinned tabs always stay visible and aren't a part of the scrollable
     * area.
     * 
     * ## CSS nodes
     * 
     * {@link Handy.TabBar} has a single CSS node with name `tabbar`.
     * @gir-type Class
     * @since 1.2
     */
    class TabBar extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<TabBar>;

        // Properties
        /**
         * Whether tabs automatically hide.
         * 
         * If set to `TRUE`, the tab bar disappears when the associated
         * {@link TabView} has 0 or 1 tab, no pinned tabs, and no tab is being
         * transferred.
         * 
         * See {@link TabBar.tabs_revealed}.
         * @since 1.2
         * @default true
         */
        get autohide(): boolean;
        set autohide(val: boolean);

        /**
         * The widget shown after the tabs.
         * @since 1.2
         */
        get end_action_widget(): Gtk.Widget | null;
        set end_action_widget(val: Gtk.Widget | null);

        /**
         * The widget shown after the tabs.
         * @since 1.2
         */
        get endActionWidget(): Gtk.Widget | null;
        set endActionWidget(val: Gtk.Widget | null);

        /**
         * Whether tabs should expand.
         * 
         * If set to `TRUE`, the tabs will always vary width filling the whole width
         * when possible, otherwise tabs will always have the minimum possible size.
         * @since 1.2
         * @default true
         */
        get expand_tabs(): boolean;
        set expand_tabs(val: boolean);

        /**
         * Whether tabs should expand.
         * 
         * If set to `TRUE`, the tabs will always vary width filling the whole width
         * when possible, otherwise tabs will always have the minimum possible size.
         * @since 1.2
         * @default true
         */
        get expandTabs(): boolean;
        set expandTabs(val: boolean);

        /**
         * Extra drag destination targets.
         * 
         * Allows to drag arbitrary content onto tabs, for example URLs in a web
         * browser.
         * 
         * If a tab is hovered for a certain period of time while dragging the
         * content, it will be automatically selected.
         * 
         * After content is dropped, the `Handy.TabBar::extra-drag-data-received`
         * signal can be used to retrieve and process the drag data.
         * @since 1.2
         */
        get extra_drag_dest_targets(): Gtk.TargetList | null;
        set extra_drag_dest_targets(val: Gtk.TargetList | null);

        /**
         * Extra drag destination targets.
         * 
         * Allows to drag arbitrary content onto tabs, for example URLs in a web
         * browser.
         * 
         * If a tab is hovered for a certain period of time while dragging the
         * content, it will be automatically selected.
         * 
         * After content is dropped, the `Handy.TabBar::extra-drag-data-received`
         * signal can be used to retrieve and process the drag data.
         * @since 1.2
         */
        get extraDragDestTargets(): Gtk.TargetList | null;
        set extraDragDestTargets(val: Gtk.TargetList | null);

        /**
         * Whether tabs use inverted layout.
         * 
         * If set to `TRUE`, non-pinned tabs will have the close button at the
         * beginning and the indicator at the end rather than the opposite.
         * @since 1.2
         * @default false
         */
        get inverted(): boolean;
        set inverted(val: boolean);

        /**
         * Whether the tab bar is overflowing.
         * 
         * If set to `TRUE`, all tabs cannot be displayed at once and require
         * scrolling.
         * @since 1.2
         * @read-only
         * @default false
         */
        get is_overflowing(): boolean;

        /**
         * Whether the tab bar is overflowing.
         * 
         * If set to `TRUE`, all tabs cannot be displayed at once and require
         * scrolling.
         * @since 1.2
         * @read-only
         * @default false
         */
        get isOverflowing(): boolean;

        /**
         * The widget shown before the tabs.
         * @since 1.2
         */
        get start_action_widget(): Gtk.Widget | null;
        set start_action_widget(val: Gtk.Widget | null);

        /**
         * The widget shown before the tabs.
         * @since 1.2
         */
        get startActionWidget(): Gtk.Widget | null;
        set startActionWidget(val: Gtk.Widget | null);

        /**
         * Whether tabs are currently revealed.
         * 
         * See {@link TabBar.autohide}.
         * @since 1.2
         * @read-only
         * @default false
         */
        get tabs_revealed(): boolean;

        /**
         * Whether tabs are currently revealed.
         * 
         * See {@link TabBar.autohide}.
         * @since 1.2
         * @read-only
         * @default false
         */
        get tabsRevealed(): boolean;

        /**
         * The {@link TabView} the tab bar controls.
         * @since 1.2
         */
        get view(): TabView | null;
        set view(val: TabView | null);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TabBar.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<TabBar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): TabBar;

        // Signals
        /** @signal */
        connect<K extends keyof TabBar.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TabBar.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof TabBar.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TabBar.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof TabBar.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<TabBar.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets whether the tabs automatically hide.
         * @returns whether the tabs automatically hide
         */
        get_autohide(): boolean;

        /**
         * Gets the widget shown after the tabs.
         * @returns the widget shown after the tabs
         */
        get_end_action_widget(): Gtk.Widget | null;

        /**
         * Gets whether tabs should expand.
         * @returns whether tabs should expand
         */
        get_expand_tabs(): boolean;

        /**
         * Gets extra drag destination targets.
         * @returns extra drag targets
         */
        get_extra_drag_dest_targets(): Gtk.TargetList | null;

        /**
         * Gets whether tabs use inverted layout.
         * @returns whether tabs use inverted layout
         */
        get_inverted(): boolean;

        /**
         * Gets whether `self` is overflowing.
         * @returns whether `self` is overflowing
         */
        get_is_overflowing(): boolean;

        /**
         * Gets the widget shown before the tabs.
         * @returns the widget shown before the tabs
         */
        get_start_action_widget(): Gtk.Widget | null;

        /**
         * Gets the value of the {@link TabBar.tabs_revealed} property.
         * @returns whether the tabs are current revealed
         */
        get_tabs_revealed(): boolean;

        /**
         * Gets the {@link TabView} `self` controls.
         * @returns the {@link TabView} `self` controls
         */
        get_view(): TabView | null;

        /**
         * Sets whether the tabs automatically hide.
         * 
         * If `autohide` is `TRUE`, the tab bar disappears when the associated
         * {@link TabView} has 0 or 1 tab, no pinned tabs, and no tab is being
         * transferred.
         * 
         * Autohide is enabled by default.
         * 
         * See {@link TabBar.tabs_revealed}.
         * @param autohide whether the tabs automatically hide
         */
        set_autohide(autohide: boolean): void;

        /**
         * Sets the widget to show after the tabs.
         * @param widget the widget to show after the tabs
         */
        set_end_action_widget(widget: Gtk.Widget | null): void;

        /**
         * Sets whether tabs should expand.
         * 
         * If `expand_tabs` is `TRUE`, the tabs will always vary width filling the whole
         * width when possible, otherwise tabs will always have the minimum possible
         * size.
         * 
         * Expand is enabled by default.
         * @param expand_tabs whether to expand tabs
         */
        set_expand_tabs(expand_tabs: boolean): void;

        /**
         * Sets extra drag destination targets.
         * 
         * This allows to drag arbitrary content onto tabs, for example URLs in a web
         * browser.
         * 
         * If a tab is hovered for a certain period of time while dragging the content,
         * it will be automatically selected.
         * 
         * After content is dropped, the `Handy.TabBar::extra-drag-data-received`
         * signal can be used to retrieve and process the drag data.
         * @param extra_drag_dest_targets extra drag targets
         */
        set_extra_drag_dest_targets(extra_drag_dest_targets: Gtk.TargetList | null): void;

        /**
         * Sets whether tabs tabs use inverted layout.
         * 
         * If `inverted` is `TRUE`, non-pinned tabs will have the close button at the
         * beginning and the indicator at the end rather than the opposite.
         * @param inverted whether tabs use inverted layout
         */
        set_inverted(inverted: boolean): void;

        /**
         * Sets the widget to show before the tabs.
         * @param widget the widget to show before the tabs
         */
        set_start_action_widget(widget: Gtk.Widget | null): void;

        /**
         * Sets the {@link TabView} `self` controls.
         * @param view a tab view
         */
        set_view(view: TabView | null): void;
    }


    namespace TabPage {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::icon": (pspec: GObject.ParamSpec) => void;
            "notify::indicator-activatable": (pspec: GObject.ParamSpec) => void;
            "notify::indicator-icon": (pspec: GObject.ParamSpec) => void;
            "notify::loading": (pspec: GObject.ParamSpec) => void;
            "notify::needs-attention": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::pinned": (pspec: GObject.ParamSpec) => void;
            "notify::selected": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            child: Gtk.Widget;
            icon: Gio.Icon | null;
            indicator_activatable: boolean;
            indicatorActivatable: boolean;
            indicator_icon: Gio.Icon | null;
            indicatorIcon: Gio.Icon | null;
            loading: boolean;
            needs_attention: boolean;
            needsAttention: boolean;
            parent: TabPage | null;
            pinned: boolean;
            selected: boolean;
            title: string | null;
            tooltip: string | null;
        }
    }

    /**
     * An auxiliary class used by {@link TabView}.
     * @gir-type Class
     * @since 1.2
     */
    class TabPage extends GObject.Object {
        static $gtype: GObject.GType<TabPage>;

        // Properties
        /**
         * The child of the page.
         * @since 1.2
         * @construct-only
         */
        get child(): Gtk.Widget;

        /**
         * The icon of the page.
         * 
         * {@link TabBar} displays the icon next to the title.
         * 
         * It will not show the icon if {@link TabPage.loading} is set to `TRUE`,
         * or if the page is pinned and [propertyTabPage:indicator-icon] is set.
         * @since 1.2
         */
        get icon(): Gio.Icon | null;
        set icon(val: Gio.Icon | null);

        /**
         * Whether the indicator icon is activatable.
         * 
         * If set to `TRUE`, `Handy.TabView::indicator-activated` will be emitted
         * when the indicator icon is clicked.
         * 
         * If {@link TabPage.indicator_icon} is not set, does nothing.
         * @since 1.2
         * @default false
         */
        get indicator_activatable(): boolean;
        set indicator_activatable(val: boolean);

        /**
         * Whether the indicator icon is activatable.
         * 
         * If set to `TRUE`, `Handy.TabView::indicator-activated` will be emitted
         * when the indicator icon is clicked.
         * 
         * If {@link TabPage.indicator_icon} is not set, does nothing.
         * @since 1.2
         * @default false
         */
        get indicatorActivatable(): boolean;
        set indicatorActivatable(val: boolean);

        /**
         * An indicator icon for the page.
         * 
         * A common use case is an audio or camera indicator in a web browser.
         * 
         * {@link TabPage} will show it at the beginning of the tab, alongside icon
         * representing {@link TabPage.icon} or loading spinner.
         * 
         * If the page is pinned, the indicator will be shown instead of icon or
         * spinner.
         * 
         * If {@link TabPage.indicator_activatable} is set to `TRUE`, the indicator
         * icon can act as a button.
         * @since 1.2
         */
        get indicator_icon(): Gio.Icon | null;
        set indicator_icon(val: Gio.Icon | null);

        /**
         * An indicator icon for the page.
         * 
         * A common use case is an audio or camera indicator in a web browser.
         * 
         * {@link TabPage} will show it at the beginning of the tab, alongside icon
         * representing {@link TabPage.icon} or loading spinner.
         * 
         * If the page is pinned, the indicator will be shown instead of icon or
         * spinner.
         * 
         * If {@link TabPage.indicator_activatable} is set to `TRUE`, the indicator
         * icon can act as a button.
         * @since 1.2
         */
        get indicatorIcon(): Gio.Icon | null;
        set indicatorIcon(val: Gio.Icon | null);

        /**
         * Whether the page is loading.
         * 
         * If set to `TRUE`, {@link TabBar} will display a spinner in place of icon.
         * 
         * If the page is pinned and {@link TabPage.indicator_icon} is set, the
         * loading status will not be visible.
         * @since 1.2
         * @default false
         */
        get loading(): boolean;
        set loading(val: boolean);

        /**
         * Whether the page needs attention.
         * 
         * {@link TabBar} will display a glow under the tab representing the page if
         * set to `TRUE`. If the tab is not visible, the corresponding edge of the tab
         * bar will be highlighted.
         * @since 1.2
         * @default false
         */
        get needs_attention(): boolean;
        set needs_attention(val: boolean);

        /**
         * Whether the page needs attention.
         * 
         * {@link TabBar} will display a glow under the tab representing the page if
         * set to `TRUE`. If the tab is not visible, the corresponding edge of the tab
         * bar will be highlighted.
         * @since 1.2
         * @default false
         */
        get needsAttention(): boolean;
        set needsAttention(val: boolean);

        /**
         * The parent page of the page.
         * 
         * See {@link TabView.add_page} and {@link TabView.close_page}.
         * @since 1.2
         * @construct-only
         */
        get parent(): TabPage | null;

        /**
         * Whether the page is pinned.
         * 
         * See {@link TabView.set_page_pinned}.
         * @since 1.2
         * @read-only
         * @default false
         */
        get pinned(): boolean;

        /**
         * Whether the page is selected.
         * @since 1.2
         * @read-only
         * @default false
         */
        get selected(): boolean;

        /**
         * The title of the page.
         * 
         * {@link TabBar} will display it in the center of the tab unless it's pinned,
         * and will use it as a tooltip unless {@link TabPage.tooltip} is set.
         * @since 1.2
         * @default null
         */
        get title(): string | null;
        set title(val: string | null);

        /**
         * The tooltip of the page.
         * 
         * The tooltip can be marked up with the Pango text markup language.
         * 
         * If not set, {@link TabBar} will use {@link TabPage.title} as a tooltip
         * instead.
         * @since 1.2
         * @default null
         */
        get tooltip(): string | null;
        set tooltip(val: string | null);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TabPage.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<TabPage.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof TabPage.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TabPage.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof TabPage.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TabPage.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof TabPage.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<TabPage.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets the child of `self`.
         * @returns the child of `self`
         */
        get_child(): Gtk.Widget;

        /**
         * Gets the icon of `self`.
         * @returns the icon of `self`
         */
        get_icon(): Gio.Icon | null;

        /**
         * Gets whether the indicator of `self` is activatable.
         * @returns whether the indicator is activatable
         */
        get_indicator_activatable(): boolean;

        /**
         * Gets the indicator icon of `self`.
         * @returns the indicator icon of `self`
         */
        get_indicator_icon(): Gio.Icon | null;

        /**
         * Gets whether `self` is loading.
         * @returns whether `self` is loading
         */
        get_loading(): boolean;

        /**
         * Gets whether `self` needs attention.
         * @returns whether `self` needs attention
         */
        get_needs_attention(): boolean;

        /**
         * Gets the parent page of `self`.
         * @returns the parent page of `self`
         */
        get_parent(): TabPage | null;

        /**
         * Gets whether `self` is pinned.
         * @returns whether `self` is pinned
         */
        get_pinned(): boolean;

        /**
         * Gets whether `self` is selected.
         * @returns whether `self` is selected
         */
        get_selected(): boolean;

        /**
         * Gets the title of `self`.
         * @returns the title of `self`
         */
        get_title(): string | null;

        /**
         * Gets the tooltip of `self`.
         * @returns the tooltip of `self`
         */
        get_tooltip(): string | null;

        /**
         * Sets the icon of `self`.
         * @param icon the icon of `self`
         */
        set_icon(icon: Gio.Icon | null): void;

        /**
         * Sets whether the indicator of `self` is activatable.
         * @param activatable whether the indicator is activatable
         */
        set_indicator_activatable(activatable: boolean): void;

        /**
         * Sets the indicator icon of `self`.
         * @param indicator_icon the indicator icon of `self`
         */
        set_indicator_icon(indicator_icon: Gio.Icon | null): void;

        /**
         * Sets whether `self` is loading.
         * @param loading whether `self` is loading
         */
        set_loading(loading: boolean): void;

        /**
         * Sets whether `self` needs attention.
         * @param needs_attention whether `self` needs attention
         */
        set_needs_attention(needs_attention: boolean): void;

        /**
         * Sets the title of `self`.
         * @param title the title of `self`
         */
        set_title(title: string | null): void;

        /**
         * Sets the tooltip of `self`.
         * @param tooltip the tooltip of `self`
         */
        set_tooltip(tooltip: string | null): void;
    }


    namespace TabView {
        // Signal signatures
        interface SignalSignatures extends Gtk.Bin.SignalSignatures {
            /**
             * Emitted after {@link TabView.close_page} has been called for `page`.
             * 
             * The handler is expected to call {@link TabView.close_page_finish} to
             * confirm or reject the closing.
             * 
             * The default handler will immediately confirm closing for non-pinned pages,
             * or reject it for pinned pages, equivalent to the following example:
             * 
             * ```c
             * static gboolean
             * close_page_cb (HdyTabView *view,
             *                HdyTabPage *page,
             *                gpointer    user_data)
             * {
             *   hdy_tab_view_close_page_finish (view, page, !hdy_tab_page_get_pinned (page));
             * 
             *   return GDK_EVENT_STOP;
             * }
             * ```
             * 
             * The {@link TabView.close_page_finish} doesn't have to happen during the
             * handler, so can be used to do asynchronous checks before confirming the
             * closing.
             * 
             * A typical reason to connect to this signal is to show a confirmation dialog
             * for closing a tab.
             * @signal
             * @since 1.2
             * @run-last
             */
            "close-page": (arg0: TabPage) => boolean | void;
            /**
             * Emitted when a tab should be transferred into a new window.
             * 
             * This can happen after a tab has been dropped on desktop.
             * 
             * The signal handler is expected to create a new window, position it as
             * needed and return its {@link Handy.TabView}that the page will be transferred into.
             * @signal
             * @since 1.2
             * @run-last
             */
            "create-window": () => TabView | null;
            /**
             * Emitted after the indicator icon on `page` has been activated.
             * 
             * See {@link TabPage.indicator_icon} and
             * {@link TabPage.indicator_activatable}.
             * @signal
             * @since 1.2
             * @run-last
             */
            "indicator-activated": (arg0: TabPage) => void;
            /**
             * Emitted when a page has been created or transferred to the view.
             * 
             * A typical reason to connect to this signal would be to connect to page
             * signals for things such as updating window title.
             * @signal
             * @since 1.2
             * @run-last
             */
            "page-attached": (arg0: TabPage, arg1: number) => void;
            /**
             * Emitted when a page has been removed or transferred to another view.
             * 
             * A typical reason to connect to this signal would be to disconnect signal
             * handlers connected in the `Handy.TabView::page-attached` handler.
             * 
             * It is important not to try and destroy the page child in the handler of
             * this function as the child might merely be moved to another window; use
             * child dispose handler for that or do it in sync with your
             * {@link TabView.close_page_finish} calls.
             * @signal
             * @since 1.2
             * @run-last
             */
            "page-detached": (arg0: TabPage, arg1: number) => void;
            /**
             * This signal is emitted after `page` has been reordered to `position`.
             * @signal
             * @since 1.2
             * @run-last
             */
            "page-reordered": (arg0: TabPage, arg1: number) => void;
            /**
             * Emitted when a context menu is opened or closed for `page`.
             * 
             * If the menu has been closed, `page` will be set to `NULL`.
             * 
             * It can be used to set up menu actions before showing the menu, for example
             * disable actions not applicable to `page`.
             * @signal
             * @since 1.2
             * @run-last
             */
            "setup-menu": (arg0: TabPage) => void;
            "notify::default-icon": (pspec: GObject.ParamSpec) => void;
            "notify::is-transferring-page": (pspec: GObject.ParamSpec) => void;
            "notify::menu-model": (pspec: GObject.ParamSpec) => void;
            "notify::n-pages": (pspec: GObject.ParamSpec) => void;
            "notify::n-pinned-pages": (pspec: GObject.ParamSpec) => void;
            "notify::selected-page": (pspec: GObject.ParamSpec) => void;
            "notify::shortcut-widget": (pspec: GObject.ParamSpec) => void;
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
            default_icon: Gio.Icon;
            defaultIcon: Gio.Icon;
            is_transferring_page: boolean;
            isTransferringPage: boolean;
            menu_model: Gio.MenuModel | null;
            menuModel: Gio.MenuModel | null;
            n_pages: number;
            nPages: number;
            n_pinned_pages: number;
            nPinnedPages: number;
            selected_page: TabPage | null;
            selectedPage: TabPage | null;
            shortcut_widget: Gtk.Widget | null;
            shortcutWidget: Gtk.Widget | null;
        }
    }

    /**
     * A dynamic tabbed container.
     * 
     * {@link Handy.TabView} is a container which shows one child at a time. While it
     * provides keyboard shortcuts for switching between pages, it does not provide
     * a visible tab bar and relies on external widgets for that, such as
     * {@link TabBar}.
     * 
     * {@link Handy.TabView} maintains a {@link TabPage} object for each page,which holds
     * additional per-page properties. You can obtain the {@link TabPage} for a page
     * with {@link TabView.get_page}, and as return value for
     * {@link TabView.append} and other functions for adding children.
     * 
     * {@link Handy.TabView} only aims to be useful for dynamic tabs in multi-window
     * document-based applications, such as web browsers, file managers, text
     * editors or terminals. It does not aim to replace {@link Gtk.Notebook} for use
     * cases such as tabbed dialogs.
     * 
     * As such, it does not support disabling page reordering or detaching, or
     * adding children via {@link Gtk.Buildable}.
     * 
     * ## CSS nodes
     * 
     * {@link Handy.TabView} has a main CSS node with the name `tabview`.
     * 
     * It contains the subnode overlay, which contains subnodes stack and widget.
     * The stack subnode contains the added pages.
     * 
     * ```
     * tabview
     * ╰── overlay
     *     ├── stack
     *     │   ╰── [ Children ]
     *     ╰── widget
     * ```
     * @gir-type Class
     * @since 1.2
     */
    class TabView extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<TabView>;

        // Properties
        /**
         * Default page icon.
         * 
         * If a page doesn't provide its own icon via {@link TabPage.icon}, default
         * icon may be used instead for contexts where having an icon is necessary.
         * 
         * {@link TabBar} will use default icon for pinned tabs in case the page is
         * not loading, doesn't have an icon and an indicator. Default icon is never
         * used for tabs that aren't pinned.
         * @since 1.2
         */
        get default_icon(): Gio.Icon;
        set default_icon(val: Gio.Icon);

        /**
         * Default page icon.
         * 
         * If a page doesn't provide its own icon via {@link TabPage.icon}, default
         * icon may be used instead for contexts where having an icon is necessary.
         * 
         * {@link TabBar} will use default icon for pinned tabs in case the page is
         * not loading, doesn't have an icon and an indicator. Default icon is never
         * used for tabs that aren't pinned.
         * @since 1.2
         */
        get defaultIcon(): Gio.Icon;
        set defaultIcon(val: Gio.Icon);

        /**
         * Whether a page is being transferred.
         * 
         * This property will be set to `TRUE` when a drag-n-drop tab transfer starts
         * on any {@link TabView}, and to `FALSE` after it ends.
         * 
         * During the transfer, children cannot receive pointer input and a tab can be
         * safely dropped on the tab view.
         * @since 1.2
         * @read-only
         * @default false
         */
        get is_transferring_page(): boolean;

        /**
         * Whether a page is being transferred.
         * 
         * This property will be set to `TRUE` when a drag-n-drop tab transfer starts
         * on any {@link TabView}, and to `FALSE` after it ends.
         * 
         * During the transfer, children cannot receive pointer input and a tab can be
         * safely dropped on the tab view.
         * @since 1.2
         * @read-only
         * @default false
         */
        get isTransferringPage(): boolean;

        /**
         * Tab context menu model.
         * 
         * When a context menu is shown for a tab, it will be constructed from the
         * provided menu model. Use `Handy.TabView::setup-menu` signal to set up the
         * menu actions for the particular tab.
         * @since 1.2
         */
        get menu_model(): Gio.MenuModel | null;
        set menu_model(val: Gio.MenuModel | null);

        /**
         * Tab context menu model.
         * 
         * When a context menu is shown for a tab, it will be constructed from the
         * provided menu model. Use `Handy.TabView::setup-menu` signal to set up the
         * menu actions for the particular tab.
         * @since 1.2
         */
        get menuModel(): Gio.MenuModel | null;
        set menuModel(val: Gio.MenuModel | null);

        /**
         * The number of pages in the tab view.
         * @since 1.2
         * @read-only
         * @default 0
         */
        get n_pages(): number;

        /**
         * The number of pages in the tab view.
         * @since 1.2
         * @read-only
         * @default 0
         */
        get nPages(): number;

        /**
         * The number of pinned pages in the tab view.
         * 
         * See {@link TabView.set_page_pinned}.
         * @since 1.2
         * @read-only
         * @default 0
         */
        get n_pinned_pages(): number;

        /**
         * The number of pinned pages in the tab view.
         * 
         * See {@link TabView.set_page_pinned}.
         * @since 1.2
         * @read-only
         * @default 0
         */
        get nPinnedPages(): number;

        /**
         * The currently selected page.
         * @since 1.2
         */
        get selected_page(): TabPage | null;
        set selected_page(val: TabPage | null);

        /**
         * The currently selected page.
         * @since 1.2
         */
        get selectedPage(): TabPage | null;
        set selectedPage(val: TabPage | null);

        /**
         * Tab shortcut widget.
         * 
         * Has the following shortcuts:
         * 
         * * <kbd>Ctrl</kbd>+<kbd>Page Up</kbd> - switch to the previous page
         * * <kbd>Ctrl</kbd>+<kbd>Page Down</kbd> - switch to the next page
         * * <kbd>Ctrl</kbd>+<kbd>Home</kbd> - switch to the first page
         * * <kbd>Ctrl</kbd>+<kbd>End</kbd> - switch to the last page
         * * <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Page Up</kbd> - move the current page
         *     backward
         * * <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Page Down</kbd> - move the current
         *     page forward
         * * <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Home</kbd> - move the current page at
         *     the start
         * * <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>End</kbd> - move the current page at
         *      the end
         * * <kbd>Ctrl</kbd>+<kbd>Tab</kbd> - switch to the next page, with looping
         * * <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Tab</kbd> - switch to the previous
         *     page, with looping
         * * <kbd>Alt</kbd>+<kbd>1</kbd>⋯<kbd>9</kbd> - switch to pages 1-9
         * * <kbd>Alt</kbd>+<kbd>0</kbd> - switch to page 10
         * 
         * These shortcuts are always available on `self`, this property is useful if
         * they should be available globally.
         * @since 1.2
         */
        get shortcut_widget(): Gtk.Widget | null;
        set shortcut_widget(val: Gtk.Widget | null);

        /**
         * Tab shortcut widget.
         * 
         * Has the following shortcuts:
         * 
         * * <kbd>Ctrl</kbd>+<kbd>Page Up</kbd> - switch to the previous page
         * * <kbd>Ctrl</kbd>+<kbd>Page Down</kbd> - switch to the next page
         * * <kbd>Ctrl</kbd>+<kbd>Home</kbd> - switch to the first page
         * * <kbd>Ctrl</kbd>+<kbd>End</kbd> - switch to the last page
         * * <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Page Up</kbd> - move the current page
         *     backward
         * * <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Page Down</kbd> - move the current
         *     page forward
         * * <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Home</kbd> - move the current page at
         *     the start
         * * <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>End</kbd> - move the current page at
         *      the end
         * * <kbd>Ctrl</kbd>+<kbd>Tab</kbd> - switch to the next page, with looping
         * * <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Tab</kbd> - switch to the previous
         *     page, with looping
         * * <kbd>Alt</kbd>+<kbd>1</kbd>⋯<kbd>9</kbd> - switch to pages 1-9
         * * <kbd>Alt</kbd>+<kbd>0</kbd> - switch to page 10
         * 
         * These shortcuts are always available on `self`, this property is useful if
         * they should be available globally.
         * @since 1.2
         */
        get shortcutWidget(): Gtk.Widget | null;
        set shortcutWidget(val: Gtk.Widget | null);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TabView.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<TabView.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): TabView;

        // Signals
        /** @signal */
        connect<K extends keyof TabView.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TabView.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof TabView.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TabView.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof TabView.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<TabView.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Adds `child` to `self` with `parent` as the parent.
         * 
         * This function can be used to automatically position new pages, and to select
         * the correct page when this page is closed while being selected (see
         * {@link TabView.close_page}.
         * 
         * If `parent` is `NULL`, this function is equivalent to {@link TabView.append}.
         * @param child a widget to add
         * @param parent a parent page for `child`
         * @returns the page object representing `child`
         */
        add_page(child: Gtk.Widget, parent: TabPage | null): TabPage;

        /**
         * Inserts `child` as the last non-pinned page.
         * @param child a widget to add
         * @returns the page object representing `child`
         */
        append(child: Gtk.Widget): TabPage;

        /**
         * Inserts `child` as the last pinned page.
         * @param child a widget to add
         * @returns the page object representing `child`
         */
        append_pinned(child: Gtk.Widget): TabPage;

        /**
         * Requests to close all pages other than `page`.
         * @param page a page of `self`
         */
        close_other_pages(page: TabPage): void;

        /**
         * Requests to close `page`.
         * 
         * Calling this function will result in `Handy.TabView::close-page` signal
         * being emitted for `page`. Closing the page can then be confirmed or denied via
         * {@link TabView.close_page_finish}.
         * 
         * If the page is waiting for a {@link TabView.close_page_finish} call, this
         * function will do nothing.
         * 
         * The default handler for `Handy.TabView::close-page` will immediately confirm
         * closing the page if it's non-pinned, or reject it if it's pinned. This
         * behavior can be changed by registering your own handler for that signal.
         * 
         * If `page` was selected, another page will be selected instead:
         * 
         * If the {@link TabPage.parent} value is `NULL`, the next page will be
         * selected when possible, or if the page was already last, the previous page
         * will be selected instead.
         * 
         * If it's not `NULL`, the previous page will be selected if it's a descendant
         * (possibly indirect) of the parent. If both the previous page and the parent
         * are pinned, the parent will be selected instead.
         * @param page a page of `self`
         */
        close_page(page: TabPage): void;

        /**
         * Completes a {@link TabView.close_page} call for `page`.
         * 
         * If `confirm` is `TRUE`, `page` will be closed. If it's `FALSE`, ite will be
         * reverted to its previous state and {@link TabView.close_page} can be called
         * for it again.
         * 
         * This function should not be called unless a custom handler for
         * `Handy.TabView::close-page` is used.
         * @param page a page of `self`
         * @param confirm whether to confirm or deny closing `page`
         */
        close_page_finish(page: TabPage, confirm: boolean): void;

        /**
         * Requests to close all pages after `page`.
         * @param page a page of `self`
         */
        close_pages_after(page: TabPage): void;

        /**
         * Requests to close all pages before `page`.
         * @param page a page of `self`
         */
        close_pages_before(page: TabPage): void;

        /**
         * Gets default icon of `self`.
         * @returns the default icon of `self`
         */
        get_default_icon(): Gio.Icon;

        /**
         * Whether a page is being transferred.
         * 
         * Gets the value of {@link TabView.is_transferring_page} property.
         * @returns whether a page is being transferred
         */
        get_is_transferring_page(): boolean;

        /**
         * Gets the tab context menu model for `self`.
         * @returns the tab context menu model for `self`
         */
        get_menu_model(): Gio.MenuModel | null;

        /**
         * Gets the number of pages in `self`.
         * @returns the number of pages in `self`
         */
        get_n_pages(): number;

        /**
         * Gets the number of pinned pages in `self`.
         * 
         * See {@link TabView.set_page_pinned}.
         * @returns the number of pinned pages in `self`
         */
        get_n_pinned_pages(): number;

        /**
         * Gets the {@link TabPage} representing the child at `position`.
         * @param position the index of the page in `self`, starting from 0
         * @returns the page object at `position`
         */
        get_nth_page(position: number): TabPage;

        /**
         * Gets the {@link TabPage} object representing `child`.
         * @param child a child in `self`
         * @returns the {@link TabPage} representing `child`
         */
        get_page(child: Gtk.Widget): TabPage;

        /**
         * Finds the position of `page` in `self`, starting from 0.
         * @param page a page of `self`
         * @returns the position of `page` in `self`
         */
        get_page_position(page: TabPage): number;

        /**
         * Returns a {@link Gio.ListModel} containing the pages of `self`.
         * 
         * This model can be used to keep an up to date view of the pages.
         * @returns the model containing pages of `self`
         */
        get_pages(): Gio.ListModel;

        /**
         * Gets the currently selected page in `self`.
         * @returns the selected page in `self`
         */
        get_selected_page(): TabPage | null;

        /**
         * Gets the shortcut widget for `self`.
         * @returns the shortcut widget for `self`
         */
        get_shortcut_widget(): Gtk.Widget | null;

        /**
         * Inserts a non-pinned page at `position`.
         * 
         * It's an error to try to insert a page before a pinned page, in that case
         * {@link TabView.insert_pinned} should be used instead.
         * @param child a widget to add
         * @param position the position to add `child` at, starting from 0
         * @returns the page object representing `child`
         */
        insert(child: Gtk.Widget, position: number): TabPage;

        /**
         * Inserts a pinned page at `position`.
         * 
         * It's an error to try to insert a pinned page after a non-pinned page, in that
         * case {@link TabView.insert} should be used instead.
         * @param child a widget to add
         * @param position the position to add `child` at, starting from 0
         * @returns the page object representing `child`
         */
        insert_pinned(child: Gtk.Widget, position: number): TabPage;

        /**
         * Inserts `child` as the first non-pinned page.
         * @param child a widget to add
         * @returns the page object representing `child`
         */
        prepend(child: Gtk.Widget): TabPage;

        /**
         * Inserts `child` as the first pinned page.
         * @param child a widget to add
         * @returns the page object representing `child`
         */
        prepend_pinned(child: Gtk.Widget): TabPage;

        /**
         * Reorders `page` to before its previous page if possible.
         * @param page a page of `self`
         * @returns whether `page` was moved
         */
        reorder_backward(page: TabPage): boolean;

        /**
         * Reorders `page` to the first possible position.
         * @param page a page of `self`
         * @returns whether `page` was moved
         */
        reorder_first(page: TabPage): boolean;

        /**
         * Reorders `page` to after its next page if possible.
         * @param page a page of `self`
         * @returns whether `page` was moved
         */
        reorder_forward(page: TabPage): boolean;

        /**
         * Reorders `page` to the last possible position.
         * @param page a page of `self`
         * @returns whether `page` was moved
         */
        reorder_last(page: TabPage): boolean;

        /**
         * Reorders `page` to `position`.
         * 
         * It's a programmer error to try to reorder a pinned page after a non-pinned
         * one, or a non-pinned page before a pinned one.
         * @param page a page of `self`
         * @param position the position to insert the page at, starting at 0
         * @returns whether `page` was moved
         */
        reorder_page(page: TabPage, position: number): boolean;

        /**
         * Selects the page after the currently selected page.
         * 
         * If the last page was already selected, this function does nothing.
         * @returns whether the selected page was changed
         */
        select_next_page(): boolean;

        /**
         * Selects the page before the currently selected page.
         * 
         * If the first page was already selected, this function does nothing.
         * @returns whether the selected page was changed
         */
        select_previous_page(): boolean;

        /**
         * Sets default page icon for `self`.
         * 
         * If a page doesn't provide its own icon via {@link TabPage.icon}, default
         * icon may be used instead for contexts where having an icon is necessary.
         * 
         * {@link TabBar} will use default icon for pinned tabs in case the page is not
         * loading, doesn't have an icon and an indicator. Default icon is never used
         * for tabs that aren't pinned.
         * 
         * By default, `hdy-tab-icon-missing-symbolic` icon is used.
         * @param default_icon the default icon
         */
        set_default_icon(default_icon: Gio.Icon): void;

        /**
         * Sets the tab context menu model for `self`.
         * 
         * When a context menu is shown for a tab, it will be constructed from the
         * provided menu model. Use `Handy.TabView::setup-menu` signal to set up the
         * menu actions for the particular tab.
         * @param menu_model a menu model
         */
        set_menu_model(menu_model: Gio.MenuModel | null): void;

        /**
         * Pins or unpins `page`.
         * 
         * Pinned pages are guaranteed to be placed before all non-pinned pages; at any
         * given moment the first {@link TabView.n_pinned_pages} pages in `self` are
         * guaranteed to be pinned.
         * 
         * When a page is pinned or unpinned, it's automatically reordered: pinning a
         * page moves it after other pinned pages; unpinning a page moves it before
         * other non-pinned pages.
         * 
         * Pinned pages can still be reordered between each other.
         * 
         * {@link TabBar} will display pinned pages in a compact form, never showing the
         * title or close button, and only showing a single icon, selected in the
         * following order:
         * 
         * 1. {@link TabPage.indicator_icon}
         * 2. A spinner if {@link TabPage.loading} is `TRUE`
         * 3. {@link TabPage.icon}
         * 4. {@link TabView.default_icon}
         * 
         * Pinned pages cannot be closed by default, see `Handy.TabView::close-page`
         * for how to override that behavior.
         * @param page a page of `self`
         * @param pinned whether `page` should be pinned
         */
        set_page_pinned(page: TabPage, pinned: boolean): void;

        /**
         * Sets the currently selected page in `self`.
         * @param selected_page a page in `self`
         */
        set_selected_page(selected_page: TabPage): void;

        /**
         * Sets the shortcut widget for `self`.
         * @param widget a shortcut widget
         */
        set_shortcut_widget(widget: Gtk.Widget | null): void;

        /**
         * Transfers `page` from `self` to `other_view`.
         * 
         * The `page` object will be reused.
         * 
         * It's a programmer error to try to insert a pinned page after a non-pinned
         * one, or a non-pinned page before a pinned one.
         * @param page a page of `self`
         * @param other_view the tab view to transfer the page to
         * @param position the position to insert the page at, starting at 0
         */
        transfer_page(page: TabPage, other_view: TabView, position: number): void;
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
     * A simple title bar container.
     * 
     * {@link Handy.TitleBar} is meant to be used as the top-level widget of your window's
     * title bar. It will be drawn with the same style as a {@link Gtk.HeaderBar}
     * but it won't force a widget layout on you: you can put whatever widget you
     * want in it, including a {@link Gtk.HeaderBar}.
     * 
     * {@link Handy.TitleBar} becomes really useful when you want to animate header bars,
     * like an adaptive application using {@link Leaflet} would do.
     * 
     * {@link Handy.TitleBar} has been deprecated, header bars can be animated without it
     * when placed inside {@link Window} or {@link ApplicationWindow}.
     * 
     * ## CSS nodes
     * 
     * {@link Handy.TitleBar} has a single CSS node with name `headerbar`.
     * @gir-type Class
     * @since 1.0
     * @deprecated since 1.4
     */
    class TitleBar extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<TitleBar>;

        // Properties
        /**
         * Whether or not the title bar is in selection mode.
         * @since 1.0
         * @deprecated since 1.4
         * @default false
         */
        get selection_mode(): boolean;
        set selection_mode(val: boolean);

        /**
         * Whether or not the title bar is in selection mode.
         * @since 1.0
         * @deprecated since 1.4
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
         * Returns whether whether `self` is in selection mode.
         * @returns `TRUE` if the title bar is in selection mode
         */
        get_selection_mode(): boolean;

        /**
         * Sets whether `self` is in selection mode.
         * @param selection_mode `TRUE` to enable the selection mode
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
            value: GObject.Value | any;
        }
    }

    /**
     * An object representing a {@link GObject.Value}.
     * 
     * The {@link Handy.ValueObject} object represents a {@link GObject.Value}, allowing it
     * to be used with {@link Gio.ListModel}.
     * @gir-type Class
     * @since 1.0
     */
    class ValueObject extends GObject.Object {
        static $gtype: GObject.GType<ValueObject>;

        // Properties
        /**
         * The contained value.
         * @since 1.0
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

        static ["new"](value: GObject.Value | any): ValueObject;

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
         * @param dest value with correct type to copy into
         */
        copy_value(dest: GObject.Value | any): void;

        /**
         * Gets a copy of the contained string if the value is of type `G_TYPE_STRING`.
         * @returns a copy of the contained string
         */
        dup_string(): string;

        /**
         * Returns the contained string if the value is of type `G_TYPE_STRING`.
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
        interface SignalSignatures extends Gtk.Bin.SignalSignatures {
            "notify::narrow-ellipsize": (pspec: GObject.ParamSpec) => void;
            "notify::policy": (pspec: GObject.ParamSpec) => void;
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
            narrow_ellipsize: Pango.EllipsizeMode;
            narrowEllipsize: Pango.EllipsizeMode;
            policy: ViewSwitcherPolicy;
            stack: Gtk.Stack | null;
        }
    }

    /**
     * An adaptive view switcher.
     * 
     * An adaptive view switcher, designed to switch between multiple views in a
     * similar fashion than a {@link Gtk.StackSwitcher}.
     * 
     * Depending on the available width, the view switcher can adapt from a wide
     * mode showing the view's icon and title side by side, to a narrow mode showing
     * the view's icon and title one on top of the other, in a more compact way.
     * This can be controlled via the policy property.
     * 
     * To look good in a header bar, an {@link Handy.ViewSwitcher} requires to fill its full
     * height. Contrary to {@link Gtk.HeaderBar}, {@link HeaderBar} doesn't force a
     * vertical alignment on its title widget, so we recommend it over
     * {@link Gtk.HeaderBar}.
     * 
     * ## CSS nodes
     * 
     * {@link Handy.ViewSwitcher} has a single CSS node with name `viewswitcher`.
     * @gir-type Class
     * @since 1.0
     */
    class ViewSwitcher extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<ViewSwitcher>;

        // Properties
        /**
         * The preferred place to ellipsize the string.
         * 
         * If the narrow mode label does not have enough room to display the entire
         * string, specified as a {@link Pango.EllipsizeMode}.
         * 
         * Note that setting this property to a value other than
         * `PANGO_ELLIPSIZE_NONE` has the side-effect that the label requests only
         * enough space to display the ellipsis.
         * @since 1.0
         * @default Pango.EllipsizeMode.NONE
         */
        get narrow_ellipsize(): Pango.EllipsizeMode;
        set narrow_ellipsize(val: Pango.EllipsizeMode);

        /**
         * The preferred place to ellipsize the string.
         * 
         * If the narrow mode label does not have enough room to display the entire
         * string, specified as a {@link Pango.EllipsizeMode}.
         * 
         * Note that setting this property to a value other than
         * `PANGO_ELLIPSIZE_NONE` has the side-effect that the label requests only
         * enough space to display the ellipsis.
         * @since 1.0
         * @default Pango.EllipsizeMode.NONE
         */
        get narrowEllipsize(): Pango.EllipsizeMode;
        set narrowEllipsize(val: Pango.EllipsizeMode);

        /**
         * The policy to determine which mode to use.
         * @since 1.0
         * @default Handy.ViewSwitcherPolicy.AUTO
         */
        get policy(): ViewSwitcherPolicy;
        set policy(val: ViewSwitcherPolicy);

        /**
         * The {@link Gtk.Stack} the view switcher controls.
         * @since 1.0
         */
        get stack(): Gtk.Stack | null;
        set stack(val: Gtk.Stack | null);

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
         * Get the ellipsizing position of the narrow mode label.
         * @returns a {@link Pango.EllipsizeMode}
         */
        get_narrow_ellipsize(): Pango.EllipsizeMode;

        /**
         * Gets the policy of `self`.
         * @returns the policy of `self`
         */
        get_policy(): ViewSwitcherPolicy;

        /**
         * Gets the stack controlled by `self`.
         * @returns the stack
         */
        get_stack(): Gtk.Stack | null;

        /**
         * Sets the mode used to ellipsize the text in narrow mode.
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
         * @param stack a stack
         */
        set_stack(stack: Gtk.Stack | null): void;
    }


    namespace ViewSwitcherBar {
        // Signal signatures
        interface SignalSignatures extends Gtk.Bin.SignalSignatures {
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
            policy: ViewSwitcherPolicy;
            reveal: boolean;
            stack: Gtk.Stack | null;
        }
    }

    /**
     * A view switcher action bar.
     * 
     * An action bar letting you switch between multiple views offered by a
     * {@link Gtk.Stack}, via an {@link ViewSwitcher}. It is designed to be put at
     * the bottom of a window and to be revealed only on really narrow windows e.g.
     * on mobile phones. It can't be revealed if there are less than two pages.
     * 
     * {@link Handy.ViewSwitcherBar} is intended to be used together with
     * {@link ViewSwitcherTitle}.
     * 
     * A common use case is to bind the {@link ViewSwitcherBar.reveal} property
     * to {@link ViewSwitcherTitle.title_visible} to automatically reveal the
     * view switcher bar when the title label is displayed in place of the view
     * switcher, as follows:
     * 
     * ```xml
     * <object class="GtkWindow"/>
     *   <child type="titlebar">
     *     <object class="HdyHeaderBar">
     *       <property name="centering-policy">strict</property>
     *       <child type="title">
     *         <object class="HdyViewSwitcherTitle"
     *                 id="view_switcher_title">
     *           <property name="stack">stack</property>
     *         </object>
     *       </child>
     *     </object>
     *   </child>
     *   <child>
     *     <object class="GtkBox">
     *       <child>
     *         <object class="GtkStack" id="stack"/>
     *       </child>
     *       <child>
     *         <object class="HdyViewSwitcherBar">
     *           <property name="stack">stack</property>
     *           <property name="reveal"
     *                     bind-source="view_switcher_title"
     *                     bind-property="title-visible"
     *                     bind-flags="sync-create"/>
     *         </object>
     *       </child>
     *     </object>
     *   </child>
     * </object>
     * ```
     * 
     * ## CSS nodes
     * 
     * {@link Handy.ViewSwitcherBar} has a single CSS node with name `viewswitcherbar`.
     * @gir-type Class
     * @since 1.0
     */
    class ViewSwitcherBar extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<ViewSwitcherBar>;

        // Properties
        /**
         * The policy used to determine which mode to use.
         * @since 1.0
         * @default Handy.ViewSwitcherPolicy.NARROW
         */
        get policy(): ViewSwitcherPolicy;
        set policy(val: ViewSwitcherPolicy);

        /**
         * Whether the bar should be revealed or hidden.
         * @since 1.0
         * @default false
         */
        get reveal(): boolean;
        set reveal(val: boolean);

        /**
         * The {@link Gtk.Stack} the {@link ViewSwitcher} controls.
         * @since 1.0
         */
        get stack(): Gtk.Stack | null;
        set stack(val: Gtk.Stack | null);

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
         * Gets the policy of `self`.
         * @returns the policy of `self`
         */
        get_policy(): ViewSwitcherPolicy;

        /**
         * Gets whether `self` should be revealed or hidden.
         * @returns whether `self` is revealed
         */
        get_reveal(): boolean;

        /**
         * Get the {@link Gtk.Stack} being controlled by the {@link ViewSwitcher}.
         * @returns the stack
         */
        get_stack(): Gtk.Stack | null;

        /**
         * Sets the policy of `self`.
         * @param policy the new policy
         */
        set_policy(policy: ViewSwitcherPolicy): void;

        /**
         * Sets whether `self` should be revealed or not.
         * @param reveal `TRUE` to reveal `self`
         */
        set_reveal(reveal: boolean): void;

        /**
         * Sets the {@link Gtk.Stack} to control.
         * @param stack a stack
         */
        set_stack(stack: Gtk.Stack | null): void;
    }


    namespace ViewSwitcherTitle {
        // Signal signatures
        interface SignalSignatures extends Gtk.Bin.SignalSignatures {
            "notify::policy": (pspec: GObject.ParamSpec) => void;
            "notify::stack": (pspec: GObject.ParamSpec) => void;
            "notify::subtitle": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::title-visible": (pspec: GObject.ParamSpec) => void;
            "notify::view-switcher-enabled": (pspec: GObject.ParamSpec) => void;
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
            policy: ViewSwitcherPolicy;
            stack: Gtk.Stack | null;
            subtitle: string | null;
            title: string | null;
            title_visible: boolean;
            titleVisible: boolean;
            view_switcher_enabled: boolean;
            viewSwitcherEnabled: boolean;
        }
    }

    /**
     * A view switcher title.
     * 
     * A widget letting you switch between multiple views contained by a
     * {@link Gtk.Stack}, via an {@link ViewSwitcher}.
     * 
     * It is designed to be used as the title widget of a {@link HeaderBar}, and
     * will display the window's title when the window is too narrow to fit the view
     * switcher e.g. on mobile phones, or if there are less than two views.
     * 
     * {@link Handy.ViewSwitcherTitle} is intended to be used together with
     * {@link ViewSwitcherBar}.
     * 
     * A common use case is to bind the {@link ViewSwitcherBar.reveal} property
     * to {@link ViewSwitcherTitle.title_visible} to automatically reveal the
     * view switcher bar when the title label is displayed in place of the view
     * switcher, as follows:
     * 
     * ```xml
     * <object class="GtkWindow"/>
     *   <child type="titlebar">
     *     <object class="HdyHeaderBar">
     *       <property name="centering-policy">strict</property>
     *       <child type="title">
     *         <object class="HdyViewSwitcherTitle"
     *                 id="view_switcher_title">
     *           <property name="stack">stack</property>
     *         </object>
     *       </child>
     *     </object>
     *   </child>
     *   <child>
     *     <object class="GtkBox">
     *       <child>
     *         <object class="GtkStack" id="stack"/>
     *       </child>
     *       <child>
     *         <object class="HdyViewSwitcherBar">
     *           <property name="stack">stack</property>
     *           <property name="reveal"
     *                     bind-source="view_switcher_title"
     *                     bind-property="title-visible"
     *                     bind-flags="sync-create"/>
     *         </object>
     *       </child>
     *     </object>
     *   </child>
     * </object>
     * ```
     * 
     * ## CSS nodes
     * 
     * {@link Handy.ViewSwitcherTitle} has a single CSS node with name `viewswitchertitle`.
     * @gir-type Class
     * @since 1.0
     */
    class ViewSwitcherTitle extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<ViewSwitcherTitle>;

        // Properties
        /**
         * The policy used to determine which mode to use.
         * @since 1.0
         * @default Handy.ViewSwitcherPolicy.AUTO
         */
        get policy(): ViewSwitcherPolicy;
        set policy(val: ViewSwitcherPolicy);

        /**
         * The {@link Gtk.Stack} the {@link ViewSwitcher} controls.
         * @since 1.0
         */
        get stack(): Gtk.Stack | null;
        set stack(val: Gtk.Stack | null);

        /**
         * The subtitle of the {@link ViewSwitcher}.
         * 
         * The subtitle should give a user additional details.
         * @since 1.0
         * @default null
         */
        get subtitle(): string | null;
        set subtitle(val: string | null);

        /**
         * The title of the {@link ViewSwitcher}.
         * 
         * The title should give a user additional details. A good title should not
         * include the application name.
         * @since 1.0
         * @default null
         */
        get title(): string | null;
        set title(val: string | null);

        /**
         * Whether the bar should be revealed or hidden.
         * @since 1.0
         * @read-only
         * @default true
         */
        get title_visible(): boolean;

        /**
         * Whether the bar should be revealed or hidden.
         * @since 1.0
         * @read-only
         * @default true
         */
        get titleVisible(): boolean;

        /**
         * Whether the bar should be revealed or hidden.
         * 
         * If it is disabled, the title will be displayed instead. This allows to
         * programmatically hide the view switcher even if it fits in the available
         * space.
         * 
         * This can be used e.g. to ensure the view switcher is hidden below a certain
         * window width, or any other constraint you find suitable.
         * @since 1.0
         * @default true
         */
        get view_switcher_enabled(): boolean;
        set view_switcher_enabled(val: boolean);

        /**
         * Whether the bar should be revealed or hidden.
         * 
         * If it is disabled, the title will be displayed instead. This allows to
         * programmatically hide the view switcher even if it fits in the available
         * space.
         * 
         * This can be used e.g. to ensure the view switcher is hidden below a certain
         * window width, or any other constraint you find suitable.
         * @since 1.0
         * @default true
         */
        get viewSwitcherEnabled(): boolean;
        set viewSwitcherEnabled(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ViewSwitcherTitle.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ViewSwitcherTitle.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): ViewSwitcherTitle;

        // Signals
        /** @signal */
        connect<K extends keyof ViewSwitcherTitle.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ViewSwitcherTitle.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ViewSwitcherTitle.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ViewSwitcherTitle.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ViewSwitcherTitle.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ViewSwitcherTitle.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets the policy of `self`.
         * @returns the policy of `self`
         */
        get_policy(): ViewSwitcherPolicy;

        /**
         * Gets the stack controlled by `self`.
         * @returns the stack
         */
        get_stack(): Gtk.Stack | null;

        /**
         * Gets the subtitle of `self`.
         * @returns the subtitle of `self`
         */
        get_subtitle(): string | null;

        /**
         * Gets the title of `self`.
         * @returns the title of `self`
         */
        get_title(): string | null;

        /**
         * Gets whether the title of `self` is currently visible.
         * @returns whether the title of `self` is currently visible
         */
        get_title_visible(): boolean;

        /**
         * Gets whether `self`'s view switcher is enabled.
         * @returns whether the view switcher is enabled
         */
        get_view_switcher_enabled(): boolean;

        /**
         * Sets the policy of `self`.
         * @param policy the new policy
         */
        set_policy(policy: ViewSwitcherPolicy): void;

        /**
         * Sets the {@link Gtk.Stack} to control.
         * @param stack a stack
         */
        set_stack(stack: Gtk.Stack | null): void;

        /**
         * Sets the subtitle of `self`.
         * @param subtitle a subtitle
         */
        set_subtitle(subtitle: string | null): void;

        /**
         * Sets the title of `self`.
         * @param title a title
         */
        set_title(title: string | null): void;

        /**
         * Sets whether `self`'s view switcher is enabled.
         * @param enabled `TRUE` to enable the view switcher, `FALSE` to disable it
         */
        set_view_switcher_enabled(enabled: boolean): void;
    }


    namespace Window {
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
        interface ConstructorProps extends Gtk.Window.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {}
    }

    /**
     * A freeform window.
     * 
     * The {@link Handy.Window} widget is a subclass of {@link Gtk.Window} which has no
     * titlebar area and provides rounded corners on all sides, ensuring they can
     * never be overlapped by the content. This makes it safe to use headerbars in
     * the content area as follows:
     * 
     * ```xml
     * <object class="HdyWindow"/>
     *   <child>
     *     <object class="GtkBox">
     *       <property name="visible">True</property>
     *       <property name="orientation">vertical</property>
     *       <child>
     *         <object class="HdyHeaderBar">
     *           <property name="visible">True</property>
     *           <property name="show-close-button">True</property>
     *         </object>
     *       </child>
     *       <child>
     *         <!-- ... -->
     *       </child>
     *     </object>
     *   </child>
     * </object>
     * ```
     * 
     * It's recommended to use {@link HeaderBar} with {@link Handy.Window}, as unlike
     * {@link Gtk.HeaderBar} it remains draggable inside the window. Otherwise,
     * {@link WindowHandle} can be used.
     * 
     * {@link Handy.Window} allows to easily implement titlebar autohiding by putting the
     * headerbar inside a {@link Gtk.Revealer}, and to show titlebar above content
     * by putting it into a {@link Gtk.Overlay} instead of {@link Gtk.Box}.
     * 
     * If the window has a {@link Gtk.GLArea}, it may bring a slight performance
     * regression when the window is not fullscreen, tiled or maximized.
     * 
     * Using {@link Gtk.Window.get_titlebar} and {@link Gtk.Window.set_titlebar}
     * is not supported and will result in a crash.
     * 
     * ## CSS nodes
     * 
     * {@link Handy.Window} has a main CSS node with the name `window` and style classes
     * `.background`, `.csd` and `.unified`.
     * 
     * The `.solid-csd` style class on the main node is used for client-side
     * decorations without invisible borders.
     * 
     * {@link Handy.Window} also represents window states with the following style classes on
     * the main node: `.tiled`, `.maximized`, `.fullscreen`.
     * 
     * It contains the subnodes decoration for window shadow and/or border,
     * decoration-overlay for the sheen on top of the window, `widget.titlebar`, and
     * deck, which contains the child inside the window.
     * @gir-type Class
     * @since 1.0
     */
    class Window extends Gtk.Window implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<Window>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Window.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Window.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Window;

        // Signals
        /** @signal */
        connect<K extends keyof Window.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Window.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Window.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Window.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Window.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Window.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace WindowHandle {
        // Signal signatures
        interface SignalSignatures extends Gtk.EventBox.SignalSignatures {
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
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.EventBox.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {}
    }

    /**
     * A bin that acts like a titlebar.
     * 
     * {@link Handy.WindowHandle} is a {@link Gtk.Bin} subclass that can be dragged to move
     * its {@link Gtk.Window}, and handles right click, middle click and double
     * click as expected from a titlebar. This is particularly useful with
     * {@link Window} or {@link ApplicationWindow}.
     * 
     * It isn't necessary to use {@link Handy.WindowHandle} if you use {@link HeaderBar}.
     * 
     * It can be safely nested or used in the actual window titlebar.
     * 
     * ## CSS nodes
     * 
     * {@link Handy.WindowHandle} has a single CSS node with name `windowhandle`.
     * @gir-type Class
     * @since 1.0
     */
    class WindowHandle extends Gtk.EventBox implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<WindowHandle>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WindowHandle.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<WindowHandle.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): WindowHandle;

        // Signals
        /** @signal */
        connect<K extends keyof WindowHandle.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WindowHandle.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof WindowHandle.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WindowHandle.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof WindowHandle.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<WindowHandle.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    /**
     * @gir-type Alias
     */
    type ActionRowClass = typeof ActionRow;

    /**
     * @gir-type Alias
     */
    type ApplicationWindowClass = typeof ApplicationWindow;

    /**
     * @gir-type Alias
     */
    type AvatarClass = typeof Avatar;

    /**
     * @gir-type Alias
     */
    type CarouselClass = typeof Carousel;

    /**
     * @gir-type Alias
     */
    type CarouselIndicatorDotsClass = typeof CarouselIndicatorDots;

    /**
     * @gir-type Alias
     */
    type CarouselIndicatorLinesClass = typeof CarouselIndicatorLines;

    /**
     * @gir-type Alias
     */
    type ClampClass = typeof Clamp;

    /**
     * @gir-type Alias
     */
    type ComboRowClass = typeof ComboRow;

    /**
     * @gir-type Alias
     */
    type DeckClass = typeof Deck;

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
    type FlapClass = typeof Flap;

    /**
     * @gir-type Alias
     */
    type HeaderBarClass = typeof HeaderBar;

    /**
     * @gir-type Alias
     */
    type HeaderGroupChildClass = typeof HeaderGroupChild;

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
    type StatusPageClass = typeof StatusPage;

    /**
     * @gir-type Alias
     */
    type StyleManagerClass = typeof StyleManager;

    /**
     * @gir-type Alias
     */
    type SwipeGroupClass = typeof SwipeGroup;

    /**
     * @gir-type Alias
     */
    type SwipeTrackerClass = typeof SwipeTracker;

    /**
     * @gir-type Alias
     */
    type SwipeableInterface = typeof Swipeable;

    /**
     * @gir-type Alias
     */
    type TabBarClass = typeof TabBar;

    /**
     * @gir-type Alias
     */
    type TabPageClass = typeof TabPage;

    /**
     * @gir-type Alias
     */
    type TabViewClass = typeof TabView;

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

    /**
     * @gir-type Alias
     */
    type ViewSwitcherTitleClass = typeof ViewSwitcherTitle;

    /**
     * @gir-type Alias
     */
    type WindowClass = typeof Window;

    /**
     * @gir-type Alias
     */
    type WindowHandleClass = typeof WindowHandle;

    namespace Swipeable {
        /**
         * Interface for implementing Swipeable.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * Gets the progress `self` will snap back to after the gesture is canceled.
             * @virtual
             */
            vfunc_get_cancel_progress(): number;

            /**
             * Gets the swipe distance of `self`.
             * 
             * This corresponds to how many pixels 1 unit represents.
             * @virtual
             */
            vfunc_get_distance(): number;

            /**
             * Gets the current progress of `self`.
             * @virtual
             */
            vfunc_get_progress(): number;

            /**
             * Gets the snap points of `self`.
             * 
             * Each snap point represents a progress value that is considered acceptable to
             * end the swipe on.
             * @virtual
             */
            vfunc_get_snap_points(): number[];

            /**
             * Gets the area `self` can start a swipe from for the given direction and
             * gesture type.
             * 
             * This can be used to restrict swipes to only be possible from a certain area,
             * for example, to only allow edge swipes, or to have a draggable element and
             * ignore swipes elsewhere.
             * 
             * Swipe area is only considered for direct swipes (as in, not initiated by
             * {@link SwipeGroup}).
             * 
             * If not implemented, the default implementation returns the allocation of
             * `self`, allowing swipes from anywhere.
             * @param navigation_direction the direction of the swipe
             * @param is_drag whether the swipe is caused by a dragging gesture
             * @virtual
             */
            vfunc_get_swipe_area(navigation_direction: NavigationDirection, is_drag: boolean): Gdk.Rectangle;

            /**
             * Gets the {@link SwipeTracker} used by this swipeable widget.
             * @virtual
             */
            vfunc_get_swipe_tracker(): SwipeTracker;

            /**
             * Switches to child with index `index`.
             * 
             * See `Handy.Swipeable::child-switched`.
             * @param index the index of the child to switch to
             * @param duration animation duration, in milliseconds
             * @virtual
             */
            vfunc_switch_child(index: number, duration: number): void;
        }


        // Constructor properties interface
        interface ConstructorProps extends Gtk.Widget.ConstructorProps {}
    }

    export interface SwipeableNamespace {
        $gtype: GObject.GType<Swipeable>;
        prototype: Swipeable;
    }
    /**
     * An interface for swipeable widgets.
     * 
     * The {@link Handy.Swipeable} interface is implemented by all swipeable widgets. They
     * can be synced using {@link SwipeGroup}.
     * 
     * See {@link SwipeTracker} for details about implementing it.
     * @gir-type Interface
     * @since 1.0
     */
    interface Swipeable extends Gtk.Widget, Swipeable.Interface {

        // Methods
        /**
         * Emits `Handy.Swipeable::child-switched` signal.
         * 
         * This should be called when the widget switches visible child widget.
         * 
         * `duration` can be 0 if the child is switched without animation.
         * @param index the index of the child to switch to
         * @param duration animation duration, in milliseconds
         */
        emit_child_switched(index: number, duration: bigint | number): void;

        /**
         * Gets the progress `self` will snap back to after the gesture is canceled.
         * @returns the cancel progress, unitless
         */
        get_cancel_progress(): number;

        /**
         * Gets the swipe distance of `self`.
         * 
         * This corresponds to how many pixels 1 unit represents.
         * @returns the swipe distance in pixels
         */
        get_distance(): number;

        /**
         * Gets the current progress of `self`.
         * @returns the current progress, unitless
         */
        get_progress(): number;

        /**
         * Gets the snap points of `self`.
         * 
         * Each snap point represents a progress value that is considered acceptable to
         * end the swipe on.
         * @returns the snap points
         */
        get_snap_points(): number[];

        /**
         * Gets the area `self` can start a swipe from for the given direction and
         * gesture type.
         * 
         * This can be used to restrict swipes to only be possible from a certain area,
         * for example, to only allow edge swipes, or to have a draggable element and
         * ignore swipes elsewhere.
         * 
         * Swipe area is only considered for direct swipes (as in, not initiated by
         * {@link SwipeGroup}).
         * 
         * If not implemented, the default implementation returns the allocation of
         * `self`, allowing swipes from anywhere.
         * @param navigation_direction the direction of the swipe
         * @param is_drag whether the swipe is caused by a dragging gesture
         */
        get_swipe_area(navigation_direction: NavigationDirection, is_drag: boolean): Gdk.Rectangle;

        /**
         * Gets the {@link SwipeTracker} used by this swipeable widget.
         * @returns the swipe tracker
         */
        get_swipe_tracker(): SwipeTracker;

        /**
         * Switches to child with index `index`.
         * 
         * See `Handy.Swipeable::child-switched`.
         * @param index the index of the child to switch to
         * @param duration animation duration, in milliseconds
         */
        switch_child(index: number, duration: bigint | number): void;
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
