
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

export namespace Gd {

    /**
     * Gd-1.0
     */


    /**
     * @gir-type Enum
     */
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


    /**
     * @gir-type Enum
     */
    enum MainViewType {
        ICON,
        LIST,
    }


    /**
     * @gir-type Enum
     */
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

    namespace HeaderBar {
        // Signal signatures
        interface SignalSignatures extends Gtk.Container.SignalSignatures {
            "notify::custom-title": (pspec: GObject.ParamSpec) => void;
            "notify::hpadding": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::subtitle": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::vpadding": (pspec: GObject.ParamSpec) => void;
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
            custom_title: Gtk.Widget;
            customTitle: Gtk.Widget;
            hpadding: number;
            spacing: number;
            subtitle: string;
            title: string;
            vpadding: number;
        }
    }

    /**
     * @gir-type Class
     */
    class HeaderBar extends Gtk.Container implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<HeaderBar>;

        // Properties
        get custom_title(): Gtk.Widget;
        set custom_title(val: Gtk.Widget);

        get customTitle(): Gtk.Widget;
        set customTitle(val: Gtk.Widget);

        get hpadding(): number;
        set hpadding(val: number);

        get spacing(): number;
        set spacing(val: number);

        get subtitle(): string;
        set subtitle(val: string);

        get title(): string;
        set title(val: string);

        get vpadding(): number;
        set vpadding(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: HeaderBar.SignalSignatures;

        // Fields
        container: Gtk.Container;

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
         * Retrieves the custom title widget of the header. See
         * `gd_header_bar_set_custom_title()`.
         * @returns the custom title widget of the header, or `null` if    none has been set explicitely.
         */
        get_custom_title(): Gtk.Widget;

        /**
         * Retrieves the subtitle of the header. See `gd_header_bar_set_subtitle()`.
         * @returns the subtitle of the header, or `null` if none has    been set explicitely. The returned string is owned by the widget    and must not be modified or freed.
         */
        get_subtitle(): string;

        /**
         * Retrieves the title of the header. See `gd_header_bar_set_title()`.
         * @returns the title of the header, or `null` if none has    been set explicitely. The returned string is owned by the widget    and must not be modified or freed.
         */
        get_title(): string;

        /**
         * @param child 
         */
        pack_end(child: Gtk.Widget): void;

        /**
         * @param child 
         */
        pack_start(child: Gtk.Widget): void;

        /**
         * Sets a custom title for the {@link Gd.HeaderBar}. The title should help a
         * user identify the current view. This supercedes any title set by
         * `gd_header_bar_set_title()`. You should set the custom title to `null`,
         * for the header title label to be visible again.
         * @param title_widget a custom widget to use for a title
         */
        set_custom_title(title_widget: (Gtk.Widget | null)): void;

        /**
         * Sets the subtitle of the {@link Gd.HeaderBar}. The subtitle should give a user
         * an additional detail to help him identify the current view.
         * @param subtitle a subtitle
         */
        set_subtitle(subtitle: (string | null)): void;

        /**
         * Sets the title of the {@link Gd.HeaderBar}. The title should help a user
         * identify the current view. A good title should not include the
         * application name.
         * @param title a title
         */
        set_title(title: (string | null)): void;
    }


    namespace HeaderMenuButton {
        // Signal signatures
        interface SignalSignatures extends Gtk.MenuButton.SignalSignatures {
            "notify::align-widget": (pspec: GObject.ParamSpec) => void;
            "notify::direction": (pspec: GObject.ParamSpec) => void;
            "notify::menu-model": (pspec: GObject.ParamSpec) => void;
            "notify::popover": (pspec: GObject.ParamSpec) => void;
            "notify::popup": (pspec: GObject.ParamSpec) => void;
            "notify::use-popover": (pspec: GObject.ParamSpec) => void;
            "notify::active": (pspec: GObject.ParamSpec) => void;
            "notify::draw-indicator": (pspec: GObject.ParamSpec) => void;
            "notify::inconsistent": (pspec: GObject.ParamSpec) => void;
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
            "notify::symbolic-icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::use-markup": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.MenuButton.ConstructorProps, Atk.ImplementorIface.ConstructorProps, HeaderButton.ConstructorProps, Gtk.Actionable.ConstructorProps, Gtk.Activatable.ConstructorProps, Gtk.Buildable.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class HeaderMenuButton extends Gtk.MenuButton implements Atk.ImplementorIface, HeaderButton, Gtk.Actionable, Gtk.Activatable, Gtk.Buildable {
        static $gtype: GObject.GType<HeaderMenuButton>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: HeaderMenuButton.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<HeaderMenuButton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): HeaderMenuButton;

        // Signals
        /** @signal */
        connect<K extends keyof HeaderMenuButton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, HeaderMenuButton.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof HeaderMenuButton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, HeaderMenuButton.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof HeaderMenuButton.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<HeaderMenuButton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * The label of the {@link Gd.HeaderButton} object.
          * @category Inherited from Gd.HeaderButton
         */
        get label(): string;
        set label(val: string);

        /**
         * The symbolic icon name of the {@link Gd.HeaderButton} object.
          * @category Inherited from Gd.HeaderButton
         */
        get symbolic_icon_name(): string;
        set symbolic_icon_name(val: string);

        /**
         * The symbolic icon name of the {@link Gd.HeaderButton} object.
          * @category Inherited from Gd.HeaderButton
         */
        get symbolicIconName(): string;
        set symbolicIconName(val: string);

        /**
         * Whether the label of the {@link Gd.HeaderButton} object should use markup.
          * @category Inherited from Gd.HeaderButton
         */
        get use_markup(): boolean;
        set use_markup(val: boolean);

        /**
         * Whether the label of the {@link Gd.HeaderButton} object should use markup.
          * @category Inherited from Gd.HeaderButton
         */
        get useMarkup(): boolean;
        set useMarkup(val: boolean);

        get_label(): string;

        get_symbolic_icon_name(): string;

        get_use_markup(): boolean;

        /**
         * @param label 
         */
        set_label(label: (string | null)): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Button.set_label
        set_label(...args: never[]): any;

        /**
         * @param symbolic_icon_name 
         */
        set_symbolic_icon_name(symbolic_icon_name: (string | null)): void;

        /**
         * @param use_markup 
         */
        set_use_markup(use_markup: boolean): void;

        /**
         * Returns whether the button grabs focus when it is clicked with the mouse.
         * See `gtk_button_set_focus_on_click()`.
         * @returns `true` if the button grabs focus when it is clicked with               the mouse.
         */
        get_focus_on_click(): boolean;

        /**
         * Sets whether the button will grab focus when it is clicked with the mouse.
         * Making mouse clicks not grab focus is useful in places like toolbars where
         * you don’t want the keyboard focus removed from the main area of the
         * application.
         * @param focus_on_click whether the button grabs focus when clicked with the mouse
         */
        set_focus_on_click(focus_on_click: boolean): void;

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
         * Gets the reading direction for a particular widget. See
         * `gtk_widget_set_direction()`.
         * @returns the reading direction for the widget.
         */
        get_direction(): Gtk.TextDirection;

        /**
         * @param args 
         */
        // Conflicted with Gtk.MenuButton.get_direction
        get_direction(...args: never[]): any;

        /**
         * Sets the reading direction on a particular widget. This direction
         * controls the primary direction for widgets containing text,
         * and also the direction in which the children of a container are
         * packed. The ability to set the direction is present in order
         * so that correct localization into languages with right-to-left
         * reading directions can be done. Generally, applications will
         * let the default reading direction present, except for containers
         * where the containers are arranged in an order that is explicitly
         * visual rather than logical (such as buttons for text justification).
         * 
         * If the direction is set to {@link Gtk.TextDirection.NONE}, then the value
         * set by `gtk_widget_set_default_direction()` will be used.
         * @param dir the new direction
         */
        set_direction(dir: Gtk.TextDirection): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.MenuButton.set_direction
        set_direction(...args: never[]): any;
    }


    namespace HeaderRadioButton {
        // Signal signatures
        interface SignalSignatures extends Gtk.RadioButton.SignalSignatures {
            "notify::group": (pspec: GObject.ParamSpec) => void;
            "notify::active": (pspec: GObject.ParamSpec) => void;
            "notify::draw-indicator": (pspec: GObject.ParamSpec) => void;
            "notify::inconsistent": (pspec: GObject.ParamSpec) => void;
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
            "notify::symbolic-icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::use-markup": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.RadioButton.ConstructorProps, Atk.ImplementorIface.ConstructorProps, HeaderButton.ConstructorProps, Gtk.Actionable.ConstructorProps, Gtk.Activatable.ConstructorProps, Gtk.Buildable.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class HeaderRadioButton extends Gtk.RadioButton implements Atk.ImplementorIface, HeaderButton, Gtk.Actionable, Gtk.Activatable, Gtk.Buildable {
        static $gtype: GObject.GType<HeaderRadioButton>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: HeaderRadioButton.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<HeaderRadioButton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): HeaderRadioButton;

        // Signals
        /** @signal */
        connect<K extends keyof HeaderRadioButton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, HeaderRadioButton.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof HeaderRadioButton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, HeaderRadioButton.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof HeaderRadioButton.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<HeaderRadioButton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * The label of the {@link Gd.HeaderButton} object.
          * @category Inherited from Gd.HeaderButton
         */
        get label(): string;
        set label(val: string);

        /**
         * The symbolic icon name of the {@link Gd.HeaderButton} object.
          * @category Inherited from Gd.HeaderButton
         */
        get symbolic_icon_name(): string;
        set symbolic_icon_name(val: string);

        /**
         * The symbolic icon name of the {@link Gd.HeaderButton} object.
          * @category Inherited from Gd.HeaderButton
         */
        get symbolicIconName(): string;
        set symbolicIconName(val: string);

        /**
         * Whether the label of the {@link Gd.HeaderButton} object should use markup.
          * @category Inherited from Gd.HeaderButton
         */
        get use_markup(): boolean;
        set use_markup(val: boolean);

        /**
         * Whether the label of the {@link Gd.HeaderButton} object should use markup.
          * @category Inherited from Gd.HeaderButton
         */
        get useMarkup(): boolean;
        set useMarkup(val: boolean);

        get_label(): string;

        get_symbolic_icon_name(): string;

        get_use_markup(): boolean;

        /**
         * @param label 
         */
        set_label(label: (string | null)): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Button.set_label
        set_label(...args: never[]): any;

        /**
         * @param symbolic_icon_name 
         */
        set_symbolic_icon_name(symbolic_icon_name: (string | null)): void;

        /**
         * @param use_markup 
         */
        set_use_markup(use_markup: boolean): void;

        /**
         * Returns whether the button grabs focus when it is clicked with the mouse.
         * See `gtk_button_set_focus_on_click()`.
         * @returns `true` if the button grabs focus when it is clicked with               the mouse.
         */
        get_focus_on_click(): boolean;

        /**
         * Sets whether the button will grab focus when it is clicked with the mouse.
         * Making mouse clicks not grab focus is useful in places like toolbars where
         * you don’t want the keyboard focus removed from the main area of the
         * application.
         * @param focus_on_click whether the button grabs focus when clicked with the mouse
         */
        set_focus_on_click(focus_on_click: boolean): void;

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


    namespace HeaderSimpleButton {
        // Signal signatures
        interface SignalSignatures extends Gtk.Button.SignalSignatures {
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
            "notify::symbolic-icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::use-markup": (pspec: GObject.ParamSpec) => void;
            "notify::action-name": (pspec: GObject.ParamSpec) => void;
            "notify::action-target": (pspec: GObject.ParamSpec) => void;
            "notify::related-action": (pspec: GObject.ParamSpec) => void;
            "notify::use-action-appearance": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Button.ConstructorProps, Atk.ImplementorIface.ConstructorProps, HeaderButton.ConstructorProps, Gtk.Actionable.ConstructorProps, Gtk.Activatable.ConstructorProps, Gtk.Buildable.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class HeaderSimpleButton extends Gtk.Button implements Atk.ImplementorIface, HeaderButton, Gtk.Actionable, Gtk.Activatable, Gtk.Buildable {
        static $gtype: GObject.GType<HeaderSimpleButton>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: HeaderSimpleButton.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<HeaderSimpleButton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): HeaderSimpleButton;

        // Signals
        /** @signal */
        connect<K extends keyof HeaderSimpleButton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, HeaderSimpleButton.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof HeaderSimpleButton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, HeaderSimpleButton.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof HeaderSimpleButton.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<HeaderSimpleButton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * The label of the {@link Gd.HeaderButton} object.
          * @category Inherited from Gd.HeaderButton
         */
        get label(): string;
        set label(val: string);

        /**
         * The symbolic icon name of the {@link Gd.HeaderButton} object.
          * @category Inherited from Gd.HeaderButton
         */
        get symbolic_icon_name(): string;
        set symbolic_icon_name(val: string);

        /**
         * The symbolic icon name of the {@link Gd.HeaderButton} object.
          * @category Inherited from Gd.HeaderButton
         */
        get symbolicIconName(): string;
        set symbolicIconName(val: string);

        /**
         * Whether the label of the {@link Gd.HeaderButton} object should use markup.
          * @category Inherited from Gd.HeaderButton
         */
        get use_markup(): boolean;
        set use_markup(val: boolean);

        /**
         * Whether the label of the {@link Gd.HeaderButton} object should use markup.
          * @category Inherited from Gd.HeaderButton
         */
        get useMarkup(): boolean;
        set useMarkup(val: boolean);

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

        get_label(): string;

        get_symbolic_icon_name(): string;

        get_use_markup(): boolean;

        /**
         * @param label 
         */
        set_label(label: (string | null)): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Button.set_label
        set_label(...args: never[]): any;

        /**
         * @param symbolic_icon_name 
         */
        set_symbolic_icon_name(symbolic_icon_name: (string | null)): void;

        /**
         * @param use_markup 
         */
        set_use_markup(use_markup: boolean): void;

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
         * Returns whether the button grabs focus when it is clicked with the mouse.
         * See `gtk_button_set_focus_on_click()`.
         * @returns `true` if the button grabs focus when it is clicked with               the mouse.
         */
        get_focus_on_click(): boolean;

        /**
         * Sets whether the button will grab focus when it is clicked with the mouse.
         * Making mouse clicks not grab focus is useful in places like toolbars where
         * you don’t want the keyboard focus removed from the main area of the
         * application.
         * @param focus_on_click whether the button grabs focus when clicked with the mouse
         */
        set_focus_on_click(focus_on_click: boolean): void;

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


    namespace HeaderToggleButton {
        // Signal signatures
        interface SignalSignatures extends Gtk.ToggleButton.SignalSignatures {
            "notify::active": (pspec: GObject.ParamSpec) => void;
            "notify::draw-indicator": (pspec: GObject.ParamSpec) => void;
            "notify::inconsistent": (pspec: GObject.ParamSpec) => void;
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
            "notify::symbolic-icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::use-markup": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.ToggleButton.ConstructorProps, Atk.ImplementorIface.ConstructorProps, HeaderButton.ConstructorProps, Gtk.Actionable.ConstructorProps, Gtk.Activatable.ConstructorProps, Gtk.Buildable.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class HeaderToggleButton extends Gtk.ToggleButton implements Atk.ImplementorIface, HeaderButton, Gtk.Actionable, Gtk.Activatable, Gtk.Buildable {
        static $gtype: GObject.GType<HeaderToggleButton>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: HeaderToggleButton.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<HeaderToggleButton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): HeaderToggleButton;

        // Signals
        /** @signal */
        connect<K extends keyof HeaderToggleButton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, HeaderToggleButton.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof HeaderToggleButton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, HeaderToggleButton.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof HeaderToggleButton.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<HeaderToggleButton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * The label of the {@link Gd.HeaderButton} object.
          * @category Inherited from Gd.HeaderButton
         */
        get label(): string;
        set label(val: string);

        /**
         * The symbolic icon name of the {@link Gd.HeaderButton} object.
          * @category Inherited from Gd.HeaderButton
         */
        get symbolic_icon_name(): string;
        set symbolic_icon_name(val: string);

        /**
         * The symbolic icon name of the {@link Gd.HeaderButton} object.
          * @category Inherited from Gd.HeaderButton
         */
        get symbolicIconName(): string;
        set symbolicIconName(val: string);

        /**
         * Whether the label of the {@link Gd.HeaderButton} object should use markup.
          * @category Inherited from Gd.HeaderButton
         */
        get use_markup(): boolean;
        set use_markup(val: boolean);

        /**
         * Whether the label of the {@link Gd.HeaderButton} object should use markup.
          * @category Inherited from Gd.HeaderButton
         */
        get useMarkup(): boolean;
        set useMarkup(val: boolean);

        get_label(): string;

        get_symbolic_icon_name(): string;

        get_use_markup(): boolean;

        /**
         * @param label 
         */
        set_label(label: (string | null)): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Button.set_label
        set_label(...args: never[]): any;

        /**
         * @param symbolic_icon_name 
         */
        set_symbolic_icon_name(symbolic_icon_name: (string | null)): void;

        /**
         * @param use_markup 
         */
        set_use_markup(use_markup: boolean): void;

        /**
         * Returns whether the button grabs focus when it is clicked with the mouse.
         * See `gtk_button_set_focus_on_click()`.
         * @returns `true` if the button grabs focus when it is clicked with               the mouse.
         */
        get_focus_on_click(): boolean;

        /**
         * Sets whether the button will grab focus when it is clicked with the mouse.
         * Making mouse clicks not grab focus is useful in places like toolbars where
         * you don’t want the keyboard focus removed from the main area of the
         * application.
         * @param focus_on_click whether the button grabs focus when clicked with the mouse
         */
        set_focus_on_click(focus_on_click: boolean): void;

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


    namespace MainIconView {
        // Signal signatures
        interface SignalSignatures extends Gtk.IconView.SignalSignatures {
            "notify::activate-on-single-click": (pspec: GObject.ParamSpec) => void;
            "notify::cell-area": (pspec: GObject.ParamSpec) => void;
            "notify::column-spacing": (pspec: GObject.ParamSpec) => void;
            "notify::columns": (pspec: GObject.ParamSpec) => void;
            "notify::item-orientation": (pspec: GObject.ParamSpec) => void;
            "notify::item-padding": (pspec: GObject.ParamSpec) => void;
            "notify::item-width": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::markup-column": (pspec: GObject.ParamSpec) => void;
            "notify::model": (pspec: GObject.ParamSpec) => void;
            "notify::pixbuf-column": (pspec: GObject.ParamSpec) => void;
            "notify::reorderable": (pspec: GObject.ParamSpec) => void;
            "notify::row-spacing": (pspec: GObject.ParamSpec) => void;
            "notify::selection-mode": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::text-column": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-column": (pspec: GObject.ParamSpec) => void;
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
            "notify::hadjustment": (pspec: GObject.ParamSpec) => void;
            "notify::hscroll-policy": (pspec: GObject.ParamSpec) => void;
            "notify::vadjustment": (pspec: GObject.ParamSpec) => void;
            "notify::vscroll-policy": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.IconView.ConstructorProps, Atk.ImplementorIface.ConstructorProps, MainViewGeneric.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.CellLayout.ConstructorProps, Gtk.Scrollable.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class MainIconView extends Gtk.IconView implements Atk.ImplementorIface, MainViewGeneric, Gtk.Buildable, Gtk.CellLayout, Gtk.Scrollable {
        static $gtype: GObject.GType<MainIconView>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MainIconView.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<MainIconView.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): MainIconView;

        // Signals
        /** @signal */
        connect<K extends keyof MainIconView.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MainIconView.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof MainIconView.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MainIconView.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof MainIconView.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MainIconView.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * Horizontal {@link Gtk.Adjustment} of the scrollable widget. This adjustment is
         * shared between the scrollable widget and its parent.
         * @since 3.0
          * @category Inherited from Gtk.Scrollable
         */
        get hadjustment(): Gtk.Adjustment;
        set hadjustment(val: Gtk.Adjustment);

        /**
         * Determines whether horizontal scrolling should start once the scrollable
         * widget is allocated less than its minimum width or less than its natural width.
         * @since 3.0
         * @default Gtk.ScrollablePolicy.MINIMUM
          * @category Inherited from Gtk.Scrollable
         */
        get hscroll_policy(): Gtk.ScrollablePolicy;
        set hscroll_policy(val: Gtk.ScrollablePolicy);

        /**
         * Determines whether horizontal scrolling should start once the scrollable
         * widget is allocated less than its minimum width or less than its natural width.
         * @since 3.0
         * @default Gtk.ScrollablePolicy.MINIMUM
          * @category Inherited from Gtk.Scrollable
         */
        get hscrollPolicy(): Gtk.ScrollablePolicy;
        set hscrollPolicy(val: Gtk.ScrollablePolicy);

        /**
         * Verical {@link Gtk.Adjustment} of the scrollable widget. This adjustment is shared
         * between the scrollable widget and its parent.
         * @since 3.0
          * @category Inherited from Gtk.Scrollable
         */
        get vadjustment(): Gtk.Adjustment;
        set vadjustment(val: Gtk.Adjustment);

        /**
         * Determines whether vertical scrolling should start once the scrollable
         * widget is allocated less than its minimum height or less than its natural height.
         * @since 3.0
         * @default Gtk.ScrollablePolicy.MINIMUM
          * @category Inherited from Gtk.Scrollable
         */
        get vscroll_policy(): Gtk.ScrollablePolicy;
        set vscroll_policy(val: Gtk.ScrollablePolicy);

        /**
         * Determines whether vertical scrolling should start once the scrollable
         * widget is allocated less than its minimum height or less than its natural height.
         * @since 3.0
         * @default Gtk.ScrollablePolicy.MINIMUM
          * @category Inherited from Gtk.Scrollable
         */
        get vscrollPolicy(): Gtk.ScrollablePolicy;
        set vscrollPolicy(val: Gtk.ScrollablePolicy);

        /**
         * Sets all four sides' margin at once. If read, returns max
         * margin on any side.
         * @since 3.0
         * @default 0
          * @category Inherited from Gtk.Widget
         */
        get margin(): number;
        set margin(val: number);

        /**
         * @returns The associated model
         */
        get_model(): Gtk.TreeModel;

        /**
         * @param args 
         */
        // Conflicted with Gtk.IconView.get_model
        get_model(...args: never[]): any;

        /**
         * @param x 
         * @param y 
         */
        get_path_at_pos(x: number, y: number): Gtk.TreePath;

        /**
         * @param args 
         */
        // Conflicted with Gtk.IconView.get_path_at_pos
        get_path_at_pos(...args: never[]): any;

        /**
         * @param path 
         */
        scroll_to_path(path: Gtk.TreePath): void;

        select_all(): void;

        /**
         * @param model 
         */
        set_model(model: (Gtk.TreeModel | null)): void;

        /**
         * @param start 
         * @param end 
         */
        set_rubberband_range(start: Gtk.TreePath, end: Gtk.TreePath): void;

        /**
         * @param selection_mode 
         */
        set_selection_mode(selection_mode: boolean): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.IconView.set_selection_mode
        set_selection_mode(...args: never[]): any;

        unselect_all(): void;

        /**
         * @virtual
         */
        vfunc_get_model(): Gtk.TreeModel;

        /**
         * @param x 
         * @param y 
         * @virtual
         */
        vfunc_get_path_at_pos(x: number, y: number): Gtk.TreePath;

        /**
         * @param path 
         * @virtual
         */
        vfunc_scroll_to_path(path: Gtk.TreePath): void;

        /**
         * @param model 
         * @virtual
         */
        vfunc_set_model(model: (Gtk.TreeModel | null)): void;

        /**
         * @param selection_mode 
         * @virtual
         */
        vfunc_set_selection_mode(selection_mode: boolean): void;

        /**
         * Adds an attribute mapping to the list in `cell_layout`.
         * 
         * The `column` is the column of the model to get a value from, and the
         * `attribute` is the parameter on `cell` to be set from the value. So for
         * example if column 2 of the model contains strings, you could have the
         * “text” attribute of a {@link Gtk.CellRendererText} get its values from column 2.
         * @param cell a {@link Gtk.CellRenderer}
         * @param attribute an attribute on the renderer
         * @param column the column position on the model to get the attribute from
         */
        add_attribute(cell: Gtk.CellRenderer, attribute: string, column: number): void;

        /**
         * Unsets all the mappings on all renderers on `cell_layout` and
         * removes all renderers from `cell_layout`.
         */
        clear(): void;

        /**
         * Clears all existing attributes previously set with
         * `gtk_cell_layout_set_attributes()`.
         * @param cell a {@link Gtk.CellRenderer} to clear the attribute mapping on
         */
        clear_attributes(cell: Gtk.CellRenderer): void;

        /**
         * Returns the underlying {@link Gtk.CellArea} which might be `cell_layout`
         * if called on a {@link Gtk.CellArea} or might be `null` if no {@link Gtk.CellArea}
         * is used by `cell_layout`.
         * @returns the cell area used by `cell_layout`, or `null` in case no cell area is used.
         */
        get_area(): (Gtk.CellArea | null);

        /**
         * Returns the cell renderers which have been added to `cell_layout`.
         * @returns a list of cell renderers. The list, but not the renderers has     been newly allocated and should be freed with `g_list_free()`     when no longer needed.
         */
        get_cells(): Gtk.CellRenderer[];

        /**
         * Adds the `cell` to the end of `cell_layout`. If `expand` is `false`, then the
         * `cell` is allocated no more space than it needs. Any unused space is
         * divided evenly between cells for which `expand` is `true`.
         * 
         * Note that reusing the same cell renderer is not supported.
         * @param cell a {@link Gtk.CellRenderer}
         * @param expand `true` if `cell` is to be given extra space allocated to `cell_layout`
         */
        pack_end(cell: Gtk.CellRenderer, expand: boolean): void;

        /**
         * Packs the `cell` into the beginning of `cell_layout`. If `expand` is `false`,
         * then the `cell` is allocated no more space than it needs. Any unused space
         * is divided evenly between cells for which `expand` is `true`.
         * 
         * Note that reusing the same cell renderer is not supported.
         * @param cell a {@link Gtk.CellRenderer}
         * @param expand `true` if `cell` is to be given extra space allocated to `cell_layout`
         */
        pack_start(cell: Gtk.CellRenderer, expand: boolean): void;

        /**
         * Re-inserts `cell` at `position`.
         * 
         * Note that `cell` has already to be packed into `cell_layout`
         * for this to function properly.
         * @param cell a {@link Gtk.CellRenderer} to reorder
         * @param position new position to insert `cell` at
         */
        reorder(cell: Gtk.CellRenderer, position: number): void;

        /**
         * Sets the {@link Gtk.CellLayoutDataFunc} to use for `cell_layout`.
         * 
         * This function is used instead of the standard attributes mapping
         * for setting the column value, and should set the value of `cell_layout`’s
         * cell renderer(s) as appropriate.
         * 
         * `func` may be `null` to remove a previously set function.
         * @param cell a {@link Gtk.CellRenderer}
         * @param func the {@link Gtk.CellLayoutDataFunc} to use, or `null`
         */
        set_cell_data_func(cell: Gtk.CellRenderer, func: (Gtk.CellLayoutDataFunc | null)): void;

        /**
         * Adds an attribute mapping to the list in `cell_layout`.
         * 
         * The `column` is the column of the model to get a value from, and the
         * `attribute` is the parameter on `cell` to be set from the value. So for
         * example if column 2 of the model contains strings, you could have the
         * “text” attribute of a {@link Gtk.CellRendererText} get its values from column 2.
         * @param cell a {@link Gtk.CellRenderer}
         * @param attribute an attribute on the renderer
         * @param column the column position on the model to get the attribute from
         * @virtual
         */
        vfunc_add_attribute(cell: Gtk.CellRenderer, attribute: string, column: number): void;

        /**
         * Unsets all the mappings on all renderers on `cell_layout` and
         * removes all renderers from `cell_layout`.
         * @virtual
         */
        vfunc_clear(): void;

        /**
         * Clears all existing attributes previously set with
         * `gtk_cell_layout_set_attributes()`.
         * @param cell a {@link Gtk.CellRenderer} to clear the attribute mapping on
         * @virtual
         */
        vfunc_clear_attributes(cell: Gtk.CellRenderer): void;

        /**
         * Returns the underlying {@link Gtk.CellArea} which might be `cell_layout`
         * if called on a {@link Gtk.CellArea} or might be `null` if no {@link Gtk.CellArea}
         * is used by `cell_layout`.
         * @virtual
         */
        vfunc_get_area(): (Gtk.CellArea | null);

        /**
         * Returns the cell renderers which have been added to `cell_layout`.
         * @virtual
         */
        vfunc_get_cells(): Gtk.CellRenderer[];

        /**
         * Adds the `cell` to the end of `cell_layout`. If `expand` is `false`, then the
         * `cell` is allocated no more space than it needs. Any unused space is
         * divided evenly between cells for which `expand` is `true`.
         * 
         * Note that reusing the same cell renderer is not supported.
         * @param cell a {@link Gtk.CellRenderer}
         * @param expand `true` if `cell` is to be given extra space allocated to `cell_layout`
         * @virtual
         */
        vfunc_pack_end(cell: Gtk.CellRenderer, expand: boolean): void;

        /**
         * Packs the `cell` into the beginning of `cell_layout`. If `expand` is `false`,
         * then the `cell` is allocated no more space than it needs. Any unused space
         * is divided evenly between cells for which `expand` is `true`.
         * 
         * Note that reusing the same cell renderer is not supported.
         * @param cell a {@link Gtk.CellRenderer}
         * @param expand `true` if `cell` is to be given extra space allocated to `cell_layout`
         * @virtual
         */
        vfunc_pack_start(cell: Gtk.CellRenderer, expand: boolean): void;

        /**
         * Re-inserts `cell` at `position`.
         * 
         * Note that `cell` has already to be packed into `cell_layout`
         * for this to function properly.
         * @param cell a {@link Gtk.CellRenderer} to reorder
         * @param position new position to insert `cell` at
         * @virtual
         */
        vfunc_reorder(cell: Gtk.CellRenderer, position: number): void;

        /**
         * Sets the {@link Gtk.CellLayoutDataFunc} to use for `cell_layout`.
         * 
         * This function is used instead of the standard attributes mapping
         * for setting the column value, and should set the value of `cell_layout`’s
         * cell renderer(s) as appropriate.
         * 
         * `func` may be `null` to remove a previously set function.
         * @param cell a {@link Gtk.CellRenderer}
         * @param func the {@link Gtk.CellLayoutDataFunc} to use, or `null`
         * @virtual
         */
        vfunc_set_cell_data_func(cell: Gtk.CellRenderer, func: (Gtk.CellLayoutDataFunc | null)): void;

        /**
         * Returns the size of a non-scrolling border around the
         * outside of the scrollable. An example for this would
         * be treeview headers. GTK+ can use this information to
         * display overlayed graphics, like the overshoot indication,
         * at the right position.
         * @returns `true` if `border` has been set
         */
        get_border(): [boolean, Gtk.Border];

        /**
         * Retrieves the {@link Gtk.Adjustment} used for horizontal scrolling.
         * @returns horizontal {@link Gtk.Adjustment}.
         */
        get_hadjustment(): Gtk.Adjustment;

        /**
         * Gets the horizontal {@link Gtk.ScrollablePolicy}.
         * @returns The horizontal {@link Gtk.ScrollablePolicy}.
         */
        get_hscroll_policy(): Gtk.ScrollablePolicy;

        /**
         * Retrieves the {@link Gtk.Adjustment} used for vertical scrolling.
         * @returns vertical {@link Gtk.Adjustment}.
         */
        get_vadjustment(): Gtk.Adjustment;

        /**
         * Gets the vertical {@link Gtk.ScrollablePolicy}.
         * @returns The vertical {@link Gtk.ScrollablePolicy}.
         */
        get_vscroll_policy(): Gtk.ScrollablePolicy;

        /**
         * Sets the horizontal adjustment of the {@link Gtk.Scrollable}.
         * @param hadjustment a {@link Gtk.Adjustment}
         */
        set_hadjustment(hadjustment: (Gtk.Adjustment | null)): void;

        /**
         * Sets the {@link Gtk.ScrollablePolicy} to determine whether
         * horizontal scrolling should start below the minimum width or
         * below the natural width.
         * @param policy the horizontal {@link Gtk.ScrollablePolicy}
         */
        set_hscroll_policy(policy: Gtk.ScrollablePolicy): void;

        /**
         * Sets the vertical adjustment of the {@link Gtk.Scrollable}.
         * @param vadjustment a {@link Gtk.Adjustment}
         */
        set_vadjustment(vadjustment: (Gtk.Adjustment | null)): void;

        /**
         * Sets the {@link Gtk.ScrollablePolicy} to determine whether
         * vertical scrolling should start below the minimum height or
         * below the natural height.
         * @param policy the vertical {@link Gtk.ScrollablePolicy}
         */
        set_vscroll_policy(policy: Gtk.ScrollablePolicy): void;

        /**
         * Returns the size of a non-scrolling border around the
         * outside of the scrollable. An example for this would
         * be treeview headers. GTK+ can use this information to
         * display overlayed graphics, like the overshoot indication,
         * at the right position.
         * @virtual
         */
        vfunc_get_border(): [boolean, Gtk.Border];

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


    namespace MainListView {
        // Signal signatures
        interface SignalSignatures extends Gtk.TreeView.SignalSignatures {
            "notify::activate-on-single-click": (pspec: GObject.ParamSpec) => void;
            "notify::enable-grid-lines": (pspec: GObject.ParamSpec) => void;
            "notify::enable-search": (pspec: GObject.ParamSpec) => void;
            "notify::enable-tree-lines": (pspec: GObject.ParamSpec) => void;
            "notify::expander-column": (pspec: GObject.ParamSpec) => void;
            "notify::fixed-height-mode": (pspec: GObject.ParamSpec) => void;
            "notify::headers-clickable": (pspec: GObject.ParamSpec) => void;
            "notify::headers-visible": (pspec: GObject.ParamSpec) => void;
            "notify::hover-expand": (pspec: GObject.ParamSpec) => void;
            "notify::hover-selection": (pspec: GObject.ParamSpec) => void;
            "notify::level-indentation": (pspec: GObject.ParamSpec) => void;
            "notify::model": (pspec: GObject.ParamSpec) => void;
            "notify::reorderable": (pspec: GObject.ParamSpec) => void;
            "notify::rubber-banding": (pspec: GObject.ParamSpec) => void;
            "notify::rules-hint": (pspec: GObject.ParamSpec) => void;
            "notify::search-column": (pspec: GObject.ParamSpec) => void;
            "notify::show-expanders": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-column": (pspec: GObject.ParamSpec) => void;
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
            "notify::hadjustment": (pspec: GObject.ParamSpec) => void;
            "notify::hscroll-policy": (pspec: GObject.ParamSpec) => void;
            "notify::vadjustment": (pspec: GObject.ParamSpec) => void;
            "notify::vscroll-policy": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.TreeView.ConstructorProps, Atk.ImplementorIface.ConstructorProps, MainViewGeneric.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Scrollable.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class MainListView extends Gtk.TreeView implements Atk.ImplementorIface, MainViewGeneric, Gtk.Buildable, Gtk.Scrollable {
        static $gtype: GObject.GType<MainListView>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MainListView.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<MainListView.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): MainListView;

        // Signals
        /** @signal */
        connect<K extends keyof MainListView.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MainListView.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof MainListView.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MainListView.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof MainListView.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MainListView.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param renderer 
         * @param func 
         */
        add_renderer(renderer: Gtk.CellRenderer, func: Gtk.TreeCellDataFunc): void;

        /**
         * Horizontal {@link Gtk.Adjustment} of the scrollable widget. This adjustment is
         * shared between the scrollable widget and its parent.
         * @since 3.0
          * @category Inherited from Gtk.Scrollable
         */
        get hadjustment(): Gtk.Adjustment;
        set hadjustment(val: Gtk.Adjustment);

        /**
         * Determines whether horizontal scrolling should start once the scrollable
         * widget is allocated less than its minimum width or less than its natural width.
         * @since 3.0
         * @default Gtk.ScrollablePolicy.MINIMUM
          * @category Inherited from Gtk.Scrollable
         */
        get hscroll_policy(): Gtk.ScrollablePolicy;
        set hscroll_policy(val: Gtk.ScrollablePolicy);

        /**
         * Determines whether horizontal scrolling should start once the scrollable
         * widget is allocated less than its minimum width or less than its natural width.
         * @since 3.0
         * @default Gtk.ScrollablePolicy.MINIMUM
          * @category Inherited from Gtk.Scrollable
         */
        get hscrollPolicy(): Gtk.ScrollablePolicy;
        set hscrollPolicy(val: Gtk.ScrollablePolicy);

        /**
         * Verical {@link Gtk.Adjustment} of the scrollable widget. This adjustment is shared
         * between the scrollable widget and its parent.
         * @since 3.0
          * @category Inherited from Gtk.Scrollable
         */
        get vadjustment(): Gtk.Adjustment;
        set vadjustment(val: Gtk.Adjustment);

        /**
         * Determines whether vertical scrolling should start once the scrollable
         * widget is allocated less than its minimum height or less than its natural height.
         * @since 3.0
         * @default Gtk.ScrollablePolicy.MINIMUM
          * @category Inherited from Gtk.Scrollable
         */
        get vscroll_policy(): Gtk.ScrollablePolicy;
        set vscroll_policy(val: Gtk.ScrollablePolicy);

        /**
         * Determines whether vertical scrolling should start once the scrollable
         * widget is allocated less than its minimum height or less than its natural height.
         * @since 3.0
         * @default Gtk.ScrollablePolicy.MINIMUM
          * @category Inherited from Gtk.Scrollable
         */
        get vscrollPolicy(): Gtk.ScrollablePolicy;
        set vscrollPolicy(val: Gtk.ScrollablePolicy);

        /**
         * @returns The associated model
         */
        get_model(): Gtk.TreeModel;

        /**
         * @param args 
         */
        // Conflicted with Gtk.TreeView.get_model
        get_model(...args: never[]): any;

        /**
         * @param x 
         * @param y 
         */
        get_path_at_pos(x: number, y: number): Gtk.TreePath;

        /**
         * @param args 
         */
        // Conflicted with Gtk.TreeView.get_path_at_pos
        get_path_at_pos(...args: never[]): any;

        /**
         * @param path 
         */
        scroll_to_path(path: Gtk.TreePath): void;

        select_all(): void;

        /**
         * @param model 
         */
        set_model(model: (Gtk.TreeModel | null)): void;

        /**
         * @param start 
         * @param end 
         */
        set_rubberband_range(start: Gtk.TreePath, end: Gtk.TreePath): void;

        /**
         * @param selection_mode 
         */
        set_selection_mode(selection_mode: boolean): void;

        unselect_all(): void;

        /**
         * @virtual
         */
        vfunc_get_model(): Gtk.TreeModel;

        /**
         * @param x 
         * @param y 
         * @virtual
         */
        vfunc_get_path_at_pos(x: number, y: number): Gtk.TreePath;

        /**
         * @param path 
         * @virtual
         */
        vfunc_scroll_to_path(path: Gtk.TreePath): void;

        /**
         * @param model 
         * @virtual
         */
        vfunc_set_model(model: (Gtk.TreeModel | null)): void;

        /**
         * @param selection_mode 
         * @virtual
         */
        vfunc_set_selection_mode(selection_mode: boolean): void;

        /**
         * Returns the size of a non-scrolling border around the
         * outside of the scrollable. An example for this would
         * be treeview headers. GTK+ can use this information to
         * display overlayed graphics, like the overshoot indication,
         * at the right position.
         * @returns `true` if `border` has been set
         */
        get_border(): [boolean, Gtk.Border];

        /**
         * Retrieves the {@link Gtk.Adjustment} used for horizontal scrolling.
         * @returns horizontal {@link Gtk.Adjustment}.
         */
        get_hadjustment(): Gtk.Adjustment;

        /**
         * Gets the horizontal {@link Gtk.ScrollablePolicy}.
         * @returns The horizontal {@link Gtk.ScrollablePolicy}.
         */
        get_hscroll_policy(): Gtk.ScrollablePolicy;

        /**
         * Retrieves the {@link Gtk.Adjustment} used for vertical scrolling.
         * @returns vertical {@link Gtk.Adjustment}.
         */
        get_vadjustment(): Gtk.Adjustment;

        /**
         * Gets the vertical {@link Gtk.ScrollablePolicy}.
         * @returns The vertical {@link Gtk.ScrollablePolicy}.
         */
        get_vscroll_policy(): Gtk.ScrollablePolicy;

        /**
         * Sets the horizontal adjustment of the {@link Gtk.Scrollable}.
         * @param hadjustment a {@link Gtk.Adjustment}
         */
        set_hadjustment(hadjustment: (Gtk.Adjustment | null)): void;

        /**
         * Sets the {@link Gtk.ScrollablePolicy} to determine whether
         * horizontal scrolling should start below the minimum width or
         * below the natural width.
         * @param policy the horizontal {@link Gtk.ScrollablePolicy}
         */
        set_hscroll_policy(policy: Gtk.ScrollablePolicy): void;

        /**
         * Sets the vertical adjustment of the {@link Gtk.Scrollable}.
         * @param vadjustment a {@link Gtk.Adjustment}
         */
        set_vadjustment(vadjustment: (Gtk.Adjustment | null)): void;

        /**
         * Sets the {@link Gtk.ScrollablePolicy} to determine whether
         * vertical scrolling should start below the minimum height or
         * below the natural height.
         * @param policy the vertical {@link Gtk.ScrollablePolicy}
         */
        set_vscroll_policy(policy: Gtk.ScrollablePolicy): void;

        /**
         * Returns the size of a non-scrolling border around the
         * outside of the scrollable. An example for this would
         * be treeview headers. GTK+ can use this information to
         * display overlayed graphics, like the overshoot indication,
         * at the right position.
         * @virtual
         */
        vfunc_get_border(): [boolean, Gtk.Border];

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


    namespace MainToolbar {
        // Signal signatures
        interface SignalSignatures extends Gtk.Toolbar.SignalSignatures {
            "notify::show-modes": (pspec: GObject.ParamSpec) => void;
            "notify::icon-size": (pspec: GObject.ParamSpec) => void;
            "notify::icon-size-set": (pspec: GObject.ParamSpec) => void;
            "notify::show-arrow": (pspec: GObject.ParamSpec) => void;
            "notify::toolbar-style": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.Toolbar.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps, Gtk.ToolShell.ConstructorProps {
            show_modes: boolean;
            showModes: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class MainToolbar extends Gtk.Toolbar implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable, Gtk.ToolShell {
        static $gtype: GObject.GType<MainToolbar>;

        // Properties
        get show_modes(): boolean;
        set show_modes(val: boolean);

        get showModes(): boolean;
        set showModes(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MainToolbar.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<MainToolbar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): MainToolbar;

        // Signals
        /** @signal */
        connect<K extends keyof MainToolbar.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MainToolbar.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof MainToolbar.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MainToolbar.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof MainToolbar.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MainToolbar.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param icon_name 
         * @param label 
         * @param pack_start 
         */
        add_button(icon_name: (string | null), label: (string | null), pack_start: boolean): Gtk.Widget;

        /**
         * @param icon_name 
         * @param label 
         * @param pack_start 
         */
        add_menu(icon_name: (string | null), label: (string | null), pack_start: boolean): Gtk.Widget;

        /**
         * @param label 
         */
        add_mode(label: string): Gtk.Widget;

        /**
         * @param icon_name 
         * @param label 
         * @param pack_start 
         */
        add_toggle(icon_name: (string | null), label: (string | null), pack_start: boolean): Gtk.Widget;

        /**
         * @param widget 
         * @param pack_start 
         */
        add_widget(widget: Gtk.Widget, pack_start: boolean): void;

        clear(): void;

        get_show_modes(): boolean;

        /**
         * @param primary 
         * @param detail 
         */
        set_labels(primary: (string | null), detail: (string | null)): void;

        /**
         * @param menu 
         */
        set_labels_menu(menu: (Gio.MenuModel | null)): void;

        /**
         * @param show_modes 
         */
        set_show_modes(show_modes: boolean): void;

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
         * Retrieves the current ellipsize mode for the tool shell. Tool items must not
         * call this function directly, but rely on `gtk_tool_item_get_ellipsize_mode()`
         * instead.
         * @returns the current ellipsize mode of `shell`
         */
        get_ellipsize_mode(): Pango.EllipsizeMode;

        /**
         * Retrieves the icon size for the tool shell. Tool items must not call this
         * function directly, but rely on `gtk_tool_item_get_icon_size()` instead.
         * @returns the current size ({@link Gtk.IconSize}) for icons of `shell`
         */
        get_icon_size(): number;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Toolbar.get_icon_size
        get_icon_size(...args: never[]): any;

        /**
         * Returns the relief style of buttons on `shell`. Tool items must not call this
         * function directly, but rely on `gtk_tool_item_get_relief_style()` instead.
         * @returns The relief style of buttons on `shell`.
         */
        get_relief_style(): Gtk.ReliefStyle;

        /**
         * Retrieves whether the tool shell has text, icons, or both. Tool items must
         * not call this function directly, but rely on `gtk_tool_item_get_toolbar_style()`
         * instead.
         * @returns the current style of `shell`
         */
        get_style(): Gtk.ToolbarStyle;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Widget.get_style
        get_style(...args: never[]): any;

        /**
         * Retrieves the current text alignment for the tool shell. Tool items must not
         * call this function directly, but rely on `gtk_tool_item_get_text_alignment()`
         * instead.
         * @returns the current text alignment of `shell`
         */
        get_text_alignment(): number;

        /**
         * Retrieves the current text orientation for the tool shell. Tool items must not
         * call this function directly, but rely on `gtk_tool_item_get_text_orientation()`
         * instead.
         * @returns the current text orientation of `shell`
         */
        get_text_orientation(): Gtk.Orientation;

        /**
         * Retrieves the current text size group for the tool shell. Tool items must not
         * call this function directly, but rely on `gtk_tool_item_get_text_size_group()`
         * instead.
         * @returns the current text size group of `shell`
         */
        get_text_size_group(): Gtk.SizeGroup;

        /**
         * Calling this function signals the tool shell that the overflow menu item for
         * tool items have changed. If there is an overflow menu and if it is visible
         * when this function it called, the menu will be rebuilt.
         * 
         * Tool items must not call this function directly, but rely on
         * `gtk_tool_item_rebuild_menu()` instead.
         */
        rebuild_menu(): void;

        /**
         * Retrieves the current ellipsize mode for the tool shell. Tool items must not
         * call this function directly, but rely on `gtk_tool_item_get_ellipsize_mode()`
         * instead.
         * @virtual
         */
        vfunc_get_ellipsize_mode(): Pango.EllipsizeMode;

        /**
         * mandatory implementation of `gtk_tool_shell_get_icon_size()`.
         * @virtual
         */
        vfunc_get_icon_size(): Gtk.IconSize;

        /**
         * Retrieves the current orientation for the tool shell. Tool items must not
         * call this function directly, but rely on `gtk_tool_item_get_orientation()`
         * instead.
         * @virtual
         */
        vfunc_get_orientation(): Gtk.Orientation;

        /**
         * Returns the relief style of buttons on `shell`. Tool items must not call this
         * function directly, but rely on `gtk_tool_item_get_relief_style()` instead.
         * @virtual
         */
        vfunc_get_relief_style(): Gtk.ReliefStyle;

        /**
         * Retrieves whether the tool shell has text, icons, or both. Tool items must
         * not call this function directly, but rely on `gtk_tool_item_get_toolbar_style()`
         * instead.
         * @virtual
         */
        vfunc_get_style(): Gtk.ToolbarStyle;

        /**
         * Retrieves the current text alignment for the tool shell. Tool items must not
         * call this function directly, but rely on `gtk_tool_item_get_text_alignment()`
         * instead.
         * @virtual
         */
        vfunc_get_text_alignment(): number;

        /**
         * Retrieves the current text orientation for the tool shell. Tool items must not
         * call this function directly, but rely on `gtk_tool_item_get_text_orientation()`
         * instead.
         * @virtual
         */
        vfunc_get_text_orientation(): Gtk.Orientation;

        /**
         * Retrieves the current text size group for the tool shell. Tool items must not
         * call this function directly, but rely on `gtk_tool_item_get_text_size_group()`
         * instead.
         * @virtual
         */
        vfunc_get_text_size_group(): Gtk.SizeGroup;

        /**
         * Calling this function signals the tool shell that the overflow menu item for
         * tool items have changed. If there is an overflow menu and if it is visible
         * when this function it called, the menu will be rebuilt.
         * 
         * Tool items must not call this function directly, but rely on
         * `gtk_tool_item_rebuild_menu()` instead.
         * @virtual
         */
        vfunc_rebuild_menu(): void;

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
         * Used to set the {@link Gtk.Style} for a widget (`widget`->style). Since
         * GTK 3, this function does nothing, the passed in style is ignored.
         * @param style a {@link Gtk.Style}, or `null` to remove the effect     of a previous call to `gtk_widget_set_style()` and go back to     the default style
         */
        set_style(style: (Gtk.Style | null)): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Toolbar.set_style
        set_style(...args: never[]): any;
    }


    namespace MainView {
        // Signal signatures
        interface SignalSignatures extends Gtk.ScrolledWindow.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            "item-activated": (arg0: string, arg1: Gtk.TreePath) => void;
            /**
             * @signal
             * @run-last
             */
            "selection-mode-request": () => void;
            /**
             * @signal
             * @run-last
             */
            "view-selection-changed": () => void;
            "notify::model": (pspec: GObject.ParamSpec) => void;
            "notify::selection-mode": (pspec: GObject.ParamSpec) => void;
            "notify::view-type": (pspec: GObject.ParamSpec) => void;
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
            model: Gtk.TreeModel;
            selection_mode: boolean;
            selectionMode: boolean;
            view_type: number;
            viewType: number;
        }
    }

    /**
     * @gir-type Class
     */
    class MainView extends Gtk.ScrolledWindow implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<MainView>;

        // Properties
        get model(): Gtk.TreeModel;
        set model(val: Gtk.TreeModel);

        get selection_mode(): boolean;
        set selection_mode(val: boolean);

        get selectionMode(): boolean;
        set selectionMode(val: boolean);

        get view_type(): number;
        set view_type(val: number);

        get viewType(): number;
        set viewType(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MainView.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<MainView.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](type: MainViewType): MainView;

        // Conflicted with Gtk.ScrolledWindow.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof MainView.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MainView.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof MainView.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MainView.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof MainView.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MainView.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_generic_view(): Gtk.Widget;

        get_model(): Gtk.TreeModel;

        get_selection(): Gtk.TreePath[];

        get_selection_mode(): boolean;

        get_view_type(): MainViewType;

        select_all(): void;

        /**
         * @param model 
         */
        set_model(model: (Gtk.TreeModel | null)): void;

        /**
         * @param selection_mode 
         */
        set_selection_mode(selection_mode: boolean): void;

        /**
         * @param type 
         */
        set_view_type(type: MainViewType): void;

        unselect_all(): void;
    }


    namespace Revealer {
        // Signal signatures
        interface SignalSignatures extends Gtk.Bin.SignalSignatures {
            "notify::child-revealed": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
            "notify::reveal-child": (pspec: GObject.ParamSpec) => void;
            "notify::transition-duration": (pspec: GObject.ParamSpec) => void;
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
            child_revealed: boolean;
            childRevealed: boolean;
            orientation: Gtk.Orientation;
            reveal_child: boolean;
            revealChild: boolean;
            transition_duration: number;
            transitionDuration: number;
        }
    }

    /**
     * @gir-type Class
     */
    class Revealer extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<Revealer>;

        // Properties
        /**
         * @read-only
         */
        get child_revealed(): boolean;

        /**
         * @read-only
         */
        get childRevealed(): boolean;

        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        get reveal_child(): boolean;
        set reveal_child(val: boolean);

        get revealChild(): boolean;
        set revealChild(val: boolean);

        get transition_duration(): number;
        set transition_duration(val: number);

        get transitionDuration(): number;
        set transitionDuration(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Revealer.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Revealer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Revealer;

        // Signals
        /** @signal */
        connect<K extends keyof Revealer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Revealer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Revealer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Revealer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Revealer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Revealer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_child_revealed(): boolean;

        get_orientation(): Gtk.Orientation;

        get_reveal_child(): boolean;

        get_transition_duration(): number;

        /**
         * @param value 
         */
        set_orientation(value: Gtk.Orientation): void;

        /**
         * @param setting 
         */
        set_reveal_child(setting: boolean): void;

        /**
         * @param duration_msec 
         */
        set_transition_duration(duration_msec: number): void;
    }


    namespace Stack {
        // Signal signatures
        interface SignalSignatures extends Gtk.Container.SignalSignatures {
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::transition-duration": (pspec: GObject.ParamSpec) => void;
            "notify::transition-type": (pspec: GObject.ParamSpec) => void;
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
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Container.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            homogeneous: boolean;
            transition_duration: number;
            transitionDuration: number;
            transition_type: number;
            transitionType: number;
            visible_child: Gtk.Widget;
            visibleChild: Gtk.Widget;
            visible_child_name: string;
            visibleChildName: string;
        }
    }

    /**
     * @gir-type Class
     */
    class Stack extends Gtk.Container implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<Stack>;

        // Properties
        get homogeneous(): boolean;
        set homogeneous(val: boolean);

        get transition_duration(): number;
        set transition_duration(val: number);

        get transitionDuration(): number;
        set transitionDuration(val: number);

        get transition_type(): number;
        set transition_type(val: number);

        get transitionType(): number;
        set transitionType(val: number);

        get visible_child(): Gtk.Widget;
        set visible_child(val: Gtk.Widget);

        get visibleChild(): Gtk.Widget;
        set visibleChild(val: Gtk.Widget);

        get visible_child_name(): string;
        set visible_child_name(val: string);

        get visibleChildName(): string;
        set visibleChildName(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Stack.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Stack.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Stack;

        // Signals
        /** @signal */
        connect<K extends keyof Stack.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Stack.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Stack.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Stack.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Stack.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Stack.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param child 
         * @param name 
         */
        add_named(child: Gtk.Widget, name: string): void;

        /**
         * @param child 
         * @param name 
         * @param title 
         */
        add_titled(child: Gtk.Widget, name: string, title: string): void;

        get_homogeneous(): boolean;

        get_transition_duration(): number;

        get_transition_type(): StackTransitionType;

        /**
         * Gets the currently visible child of the {@link Gd.Stack}, or `null` if the
         * there are no visible children. The returned widget does not have a reference
         * added, so you do not need to unref it.
         * @returns pointer to child of the {@link Gd.Stack}
         */
        get_visible_child(): Gtk.Widget;

        get_visible_child_name(): string;

        /**
         * @param homogeneous 
         */
        set_homogeneous(homogeneous: boolean): void;

        /**
         * @param transition_duration 
         */
        set_transition_duration(transition_duration: number): void;

        /**
         * @param type 
         */
        set_transition_type(type: StackTransitionType): void;

        /**
         * @param child 
         */
        set_visible_child(child: Gtk.Widget): void;

        /**
         * @param name 
         */
        set_visible_child_name(name: string): void;
    }


    namespace StackSwitcher {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
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
            stack: Stack;
        }
    }

    /**
     * @gir-type Class
     */
    class StackSwitcher extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<StackSwitcher>;

        // Properties
        get stack(): Stack;
        set stack(val: Stack);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StackSwitcher.SignalSignatures;

        // Fields
        widget: Gtk.Box;

        // Constructors
        constructor(properties?: Partial<StackSwitcher.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): StackSwitcher;

        // Signals
        /** @signal */
        connect<K extends keyof StackSwitcher.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StackSwitcher.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof StackSwitcher.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StackSwitcher.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof StackSwitcher.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<StackSwitcher.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Retrieves the stack. See
         * `gd_stack_switcher_set_stack()`.
         * @returns the stack, or `null` if    none has been set explicitly.
         */
        get_stack(): Stack;

        /**
         * Sets the stack to control.
         * @param stack a {@link Gd.Stack}
         */
        set_stack(stack: (Stack | null)): void;

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


    namespace StyledTextRenderer {
        // Signal signatures
        interface SignalSignatures extends Gtk.CellRendererText.SignalSignatures {
            "notify::align-set": (pspec: GObject.ParamSpec) => void;
            "notify::alignment": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::background": (pspec: GObject.ParamSpec) => void;
            "notify::background-gdk": (pspec: GObject.ParamSpec) => void;
            "notify::background-rgba": (pspec: GObject.ParamSpec) => void;
            "notify::background-set": (pspec: GObject.ParamSpec) => void;
            "notify::editable": (pspec: GObject.ParamSpec) => void;
            "notify::editable-set": (pspec: GObject.ParamSpec) => void;
            "notify::ellipsize": (pspec: GObject.ParamSpec) => void;
            "notify::ellipsize-set": (pspec: GObject.ParamSpec) => void;
            "notify::family": (pspec: GObject.ParamSpec) => void;
            "notify::family-set": (pspec: GObject.ParamSpec) => void;
            "notify::font": (pspec: GObject.ParamSpec) => void;
            "notify::font-desc": (pspec: GObject.ParamSpec) => void;
            "notify::foreground": (pspec: GObject.ParamSpec) => void;
            "notify::foreground-gdk": (pspec: GObject.ParamSpec) => void;
            "notify::foreground-rgba": (pspec: GObject.ParamSpec) => void;
            "notify::foreground-set": (pspec: GObject.ParamSpec) => void;
            "notify::language": (pspec: GObject.ParamSpec) => void;
            "notify::language-set": (pspec: GObject.ParamSpec) => void;
            "notify::markup": (pspec: GObject.ParamSpec) => void;
            "notify::max-width-chars": (pspec: GObject.ParamSpec) => void;
            "notify::placeholder-text": (pspec: GObject.ParamSpec) => void;
            "notify::rise": (pspec: GObject.ParamSpec) => void;
            "notify::rise-set": (pspec: GObject.ParamSpec) => void;
            "notify::scale": (pspec: GObject.ParamSpec) => void;
            "notify::scale-set": (pspec: GObject.ParamSpec) => void;
            "notify::single-paragraph-mode": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
            "notify::size-points": (pspec: GObject.ParamSpec) => void;
            "notify::size-set": (pspec: GObject.ParamSpec) => void;
            "notify::stretch": (pspec: GObject.ParamSpec) => void;
            "notify::stretch-set": (pspec: GObject.ParamSpec) => void;
            "notify::strikethrough": (pspec: GObject.ParamSpec) => void;
            "notify::strikethrough-set": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::style-set": (pspec: GObject.ParamSpec) => void;
            "notify::text": (pspec: GObject.ParamSpec) => void;
            "notify::underline": (pspec: GObject.ParamSpec) => void;
            "notify::underline-set": (pspec: GObject.ParamSpec) => void;
            "notify::variant": (pspec: GObject.ParamSpec) => void;
            "notify::variant-set": (pspec: GObject.ParamSpec) => void;
            "notify::weight": (pspec: GObject.ParamSpec) => void;
            "notify::weight-set": (pspec: GObject.ParamSpec) => void;
            "notify::width-chars": (pspec: GObject.ParamSpec) => void;
            "notify::wrap-mode": (pspec: GObject.ParamSpec) => void;
            "notify::wrap-width": (pspec: GObject.ParamSpec) => void;
            "notify::cell-background": (pspec: GObject.ParamSpec) => void;
            "notify::cell-background-gdk": (pspec: GObject.ParamSpec) => void;
            "notify::cell-background-rgba": (pspec: GObject.ParamSpec) => void;
            "notify::cell-background-set": (pspec: GObject.ParamSpec) => void;
            "notify::editing": (pspec: GObject.ParamSpec) => void;
            "notify::height": (pspec: GObject.ParamSpec) => void;
            "notify::is-expanded": (pspec: GObject.ParamSpec) => void;
            "notify::is-expander": (pspec: GObject.ParamSpec) => void;
            "notify::mode": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width": (pspec: GObject.ParamSpec) => void;
            "notify::xalign": (pspec: GObject.ParamSpec) => void;
            "notify::xpad": (pspec: GObject.ParamSpec) => void;
            "notify::yalign": (pspec: GObject.ParamSpec) => void;
            "notify::ypad": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.CellRendererText.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class StyledTextRenderer extends Gtk.CellRendererText {
        static $gtype: GObject.GType<StyledTextRenderer>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StyledTextRenderer.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<StyledTextRenderer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): StyledTextRenderer;

        // Signals
        /** @signal */
        connect<K extends keyof StyledTextRenderer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StyledTextRenderer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof StyledTextRenderer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StyledTextRenderer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof StyledTextRenderer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<StyledTextRenderer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param _class 
         */
        add_class(_class: string): void;

        /**
         * @param _class 
         */
        remove_class(_class: string): void;
    }


    namespace TaggedEntry {
        // Signal signatures
        interface SignalSignatures extends Gtk.SearchEntry.SignalSignatures {
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked": (arg0: TaggedEntryTag) => void;
            "notify::tag-close-visible": (pspec: GObject.ParamSpec) => void;
            "notify::activates-default": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::buffer": (pspec: GObject.ParamSpec) => void;
            "notify::caps-lock-warning": (pspec: GObject.ParamSpec) => void;
            "notify::completion": (pspec: GObject.ParamSpec) => void;
            "notify::cursor-position": (pspec: GObject.ParamSpec) => void;
            "notify::editable": (pspec: GObject.ParamSpec) => void;
            "notify::enable-emoji-completion": (pspec: GObject.ParamSpec) => void;
            "notify::has-frame": (pspec: GObject.ParamSpec) => void;
            "notify::im-module": (pspec: GObject.ParamSpec) => void;
            "notify::inner-border": (pspec: GObject.ParamSpec) => void;
            "notify::input-hints": (pspec: GObject.ParamSpec) => void;
            "notify::input-purpose": (pspec: GObject.ParamSpec) => void;
            "notify::invisible-char": (pspec: GObject.ParamSpec) => void;
            "notify::invisible-char-set": (pspec: GObject.ParamSpec) => void;
            "notify::max-length": (pspec: GObject.ParamSpec) => void;
            "notify::max-width-chars": (pspec: GObject.ParamSpec) => void;
            "notify::overwrite-mode": (pspec: GObject.ParamSpec) => void;
            "notify::placeholder-text": (pspec: GObject.ParamSpec) => void;
            "notify::populate-all": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-activatable": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-gicon": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-pixbuf": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-stock": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-storage-type": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::progress-fraction": (pspec: GObject.ParamSpec) => void;
            "notify::progress-pulse-step": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-offset": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-activatable": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-gicon": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-pixbuf": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-stock": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-storage-type": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::selection-bound": (pspec: GObject.ParamSpec) => void;
            "notify::shadow-type": (pspec: GObject.ParamSpec) => void;
            "notify::show-emoji-icon": (pspec: GObject.ParamSpec) => void;
            "notify::tabs": (pspec: GObject.ParamSpec) => void;
            "notify::text": (pspec: GObject.ParamSpec) => void;
            "notify::text-length": (pspec: GObject.ParamSpec) => void;
            "notify::truncate-multiline": (pspec: GObject.ParamSpec) => void;
            "notify::visibility": (pspec: GObject.ParamSpec) => void;
            "notify::width-chars": (pspec: GObject.ParamSpec) => void;
            "notify::xalign": (pspec: GObject.ParamSpec) => void;
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
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::tag-close-visible": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::activates-default": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::attributes": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::buffer": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::caps-lock-warning": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::completion": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::cursor-position": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::editable": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::enable-emoji-completion": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::has-frame": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::im-module": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::inner-border": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::input-hints": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::input-purpose": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::invisible-char": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::invisible-char-set": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::max-length": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::max-width-chars": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::overwrite-mode": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::placeholder-text": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::populate-all": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::primary-icon-activatable": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::primary-icon-gicon": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::primary-icon-name": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::primary-icon-pixbuf": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::primary-icon-sensitive": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::primary-icon-stock": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::primary-icon-storage-type": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::primary-icon-tooltip-markup": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::primary-icon-tooltip-text": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::progress-fraction": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::progress-pulse-step": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::scroll-offset": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::secondary-icon-activatable": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::secondary-icon-gicon": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::secondary-icon-name": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::secondary-icon-pixbuf": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::secondary-icon-sensitive": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::secondary-icon-stock": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::secondary-icon-storage-type": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::secondary-icon-tooltip-markup": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::secondary-icon-tooltip-text": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::selection-bound": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::shadow-type": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::show-emoji-icon": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::tabs": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::text": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::text-length": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::truncate-multiline": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::visibility": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::width-chars": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::xalign": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::app-paintable": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::can-default": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::can-focus": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::composite-child": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::double-buffered": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::events": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::expand": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::focus-on-click": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::halign": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::has-default": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::has-focus": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::has-tooltip": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::height-request": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::hexpand": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::hexpand-set": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::is-focus": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::margin": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::margin-bottom": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::margin-end": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::margin-left": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::margin-right": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::margin-start": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::margin-top": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::name": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::no-show-all": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::opacity": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::parent": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::receives-default": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::scale-factor": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::sensitive": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::style": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::tooltip-markup": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::tooltip-text": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::valign": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::vexpand": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::vexpand-set": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::visible": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::width-request": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-button-clicked::window": (arg0: TaggedEntryTag) => void;
            [key: `tag-button-clicked::${string}`]: (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::tag-close-visible": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::activates-default": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::attributes": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::buffer": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::caps-lock-warning": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::completion": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::cursor-position": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::editable": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::enable-emoji-completion": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::has-frame": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::im-module": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::inner-border": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::input-hints": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::input-purpose": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::invisible-char": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::invisible-char-set": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::max-length": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::max-width-chars": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::overwrite-mode": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::placeholder-text": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::populate-all": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::primary-icon-activatable": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::primary-icon-gicon": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::primary-icon-name": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::primary-icon-pixbuf": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::primary-icon-sensitive": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::primary-icon-stock": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::primary-icon-storage-type": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::primary-icon-tooltip-markup": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::primary-icon-tooltip-text": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::progress-fraction": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::progress-pulse-step": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::scroll-offset": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::secondary-icon-activatable": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::secondary-icon-gicon": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::secondary-icon-name": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::secondary-icon-pixbuf": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::secondary-icon-sensitive": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::secondary-icon-stock": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::secondary-icon-storage-type": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::secondary-icon-tooltip-markup": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::secondary-icon-tooltip-text": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::selection-bound": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::shadow-type": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::show-emoji-icon": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::tabs": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::text": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::text-length": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::truncate-multiline": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::visibility": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::width-chars": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::xalign": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::app-paintable": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::can-default": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::can-focus": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::composite-child": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::double-buffered": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::events": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::expand": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::focus-on-click": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::halign": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::has-default": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::has-focus": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::has-tooltip": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::height-request": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::hexpand": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::hexpand-set": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::is-focus": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::margin": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::margin-bottom": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::margin-end": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::margin-left": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::margin-right": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::margin-start": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::margin-top": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::name": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::no-show-all": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::opacity": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::parent": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::receives-default": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::scale-factor": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::sensitive": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::style": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::tooltip-markup": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::tooltip-text": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::valign": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::vexpand": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::vexpand-set": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::visible": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::width-request": (arg0: TaggedEntryTag) => void;
            /**
             * @signal
             * @detailed
             * @run-first
             */
            "tag-clicked::window": (arg0: TaggedEntryTag) => void;
            [key: `tag-clicked::${string}`]: (arg0: TaggedEntryTag) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.SearchEntry.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.CellEditable.ConstructorProps, Gtk.Editable.ConstructorProps {
            tag_close_visible: boolean;
            tagCloseVisible: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class TaggedEntry extends Gtk.SearchEntry implements Atk.ImplementorIface, Gtk.Buildable, Gtk.CellEditable, Gtk.Editable {
        static $gtype: GObject.GType<TaggedEntry>;

        // Properties
        /**
         * @write-only
         */
        set tag_close_visible(val: boolean);

        /**
         * @write-only
         */
        set tagCloseVisible(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TaggedEntry.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<TaggedEntry.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): TaggedEntry;

        // Signals
        /** @signal */
        connect<K extends keyof TaggedEntry.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TaggedEntry.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof TaggedEntry.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TaggedEntry.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof TaggedEntry.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<TaggedEntry.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param tag 
         */
        add_tag(tag: TaggedEntryTag): boolean;

        get_tag_button_visible(): boolean;

        /**
         * @param tag 
         * @param position 
         */
        insert_tag(tag: TaggedEntryTag, position: number): boolean;

        /**
         * @param tag 
         */
        remove_tag(tag: TaggedEntryTag): boolean;

        /**
         * @param visible 
         */
        set_tag_button_visible(visible: boolean): void;
    }


    namespace TaggedEntryTag {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::has-close-button": (pspec: GObject.ParamSpec) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            has_close_button: boolean;
            hasCloseButton: boolean;
            label: string;
            style: string;
        }
    }

    /**
     * @gir-type Class
     */
    class TaggedEntryTag extends GObject.Object {
        static $gtype: GObject.GType<TaggedEntryTag>;

        // Properties
        get has_close_button(): boolean;
        set has_close_button(val: boolean);

        get hasCloseButton(): boolean;
        set hasCloseButton(val: boolean);

        get label(): string;
        set label(val: string);

        get style(): string;
        set style(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TaggedEntryTag.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<TaggedEntryTag.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](label: string): TaggedEntryTag;

        // Signals
        /** @signal */
        connect<K extends keyof TaggedEntryTag.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TaggedEntryTag.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof TaggedEntryTag.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TaggedEntryTag.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof TaggedEntryTag.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<TaggedEntryTag.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param rect 
         */
        get_area(rect: cairo.RectangleInt): boolean;

        get_has_close_button(): boolean;

        get_label(): string;

        get_style(): string;

        /**
         * @param has_close_button 
         */
        set_has_close_button(has_close_button: boolean): void;

        /**
         * @param label 
         */
        set_label(label: string): void;

        /**
         * @param style 
         */
        set_style(style: string): void;
    }


    namespace TogglePixbufRenderer {
        // Signal signatures
        interface SignalSignatures extends Gtk.CellRendererPixbuf.SignalSignatures {
            "notify::active": (pspec: GObject.ParamSpec) => void;
            "notify::pulse": (pspec: GObject.ParamSpec) => void;
            "notify::toggle-visible": (pspec: GObject.ParamSpec) => void;
            "notify::follow-state": (pspec: GObject.ParamSpec) => void;
            "notify::gicon": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::pixbuf": (pspec: GObject.ParamSpec) => void;
            "notify::pixbuf-expander-closed": (pspec: GObject.ParamSpec) => void;
            "notify::pixbuf-expander-open": (pspec: GObject.ParamSpec) => void;
            "notify::stock-detail": (pspec: GObject.ParamSpec) => void;
            "notify::stock-id": (pspec: GObject.ParamSpec) => void;
            "notify::stock-size": (pspec: GObject.ParamSpec) => void;
            "notify::surface": (pspec: GObject.ParamSpec) => void;
            "notify::cell-background": (pspec: GObject.ParamSpec) => void;
            "notify::cell-background-gdk": (pspec: GObject.ParamSpec) => void;
            "notify::cell-background-rgba": (pspec: GObject.ParamSpec) => void;
            "notify::cell-background-set": (pspec: GObject.ParamSpec) => void;
            "notify::editing": (pspec: GObject.ParamSpec) => void;
            "notify::height": (pspec: GObject.ParamSpec) => void;
            "notify::is-expanded": (pspec: GObject.ParamSpec) => void;
            "notify::is-expander": (pspec: GObject.ParamSpec) => void;
            "notify::mode": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width": (pspec: GObject.ParamSpec) => void;
            "notify::xalign": (pspec: GObject.ParamSpec) => void;
            "notify::xpad": (pspec: GObject.ParamSpec) => void;
            "notify::yalign": (pspec: GObject.ParamSpec) => void;
            "notify::ypad": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.CellRendererPixbuf.ConstructorProps {
            active: boolean;
            pulse: number;
            toggle_visible: boolean;
            toggleVisible: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class TogglePixbufRenderer extends Gtk.CellRendererPixbuf {
        static $gtype: GObject.GType<TogglePixbufRenderer>;

        // Properties
        get active(): boolean;
        set active(val: boolean);

        get pulse(): number;
        set pulse(val: number);

        get toggle_visible(): boolean;
        set toggle_visible(val: boolean);

        get toggleVisible(): boolean;
        set toggleVisible(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TogglePixbufRenderer.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<TogglePixbufRenderer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): TogglePixbufRenderer;

        // Signals
        /** @signal */
        connect<K extends keyof TogglePixbufRenderer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TogglePixbufRenderer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof TogglePixbufRenderer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TogglePixbufRenderer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof TogglePixbufRenderer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<TogglePixbufRenderer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace TwoLinesRenderer {
        // Signal signatures
        interface SignalSignatures extends Gtk.CellRendererText.SignalSignatures {
            "notify::line-two": (pspec: GObject.ParamSpec) => void;
            "notify::text-lines": (pspec: GObject.ParamSpec) => void;
            "notify::align-set": (pspec: GObject.ParamSpec) => void;
            "notify::alignment": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::background": (pspec: GObject.ParamSpec) => void;
            "notify::background-gdk": (pspec: GObject.ParamSpec) => void;
            "notify::background-rgba": (pspec: GObject.ParamSpec) => void;
            "notify::background-set": (pspec: GObject.ParamSpec) => void;
            "notify::editable": (pspec: GObject.ParamSpec) => void;
            "notify::editable-set": (pspec: GObject.ParamSpec) => void;
            "notify::ellipsize": (pspec: GObject.ParamSpec) => void;
            "notify::ellipsize-set": (pspec: GObject.ParamSpec) => void;
            "notify::family": (pspec: GObject.ParamSpec) => void;
            "notify::family-set": (pspec: GObject.ParamSpec) => void;
            "notify::font": (pspec: GObject.ParamSpec) => void;
            "notify::font-desc": (pspec: GObject.ParamSpec) => void;
            "notify::foreground": (pspec: GObject.ParamSpec) => void;
            "notify::foreground-gdk": (pspec: GObject.ParamSpec) => void;
            "notify::foreground-rgba": (pspec: GObject.ParamSpec) => void;
            "notify::foreground-set": (pspec: GObject.ParamSpec) => void;
            "notify::language": (pspec: GObject.ParamSpec) => void;
            "notify::language-set": (pspec: GObject.ParamSpec) => void;
            "notify::markup": (pspec: GObject.ParamSpec) => void;
            "notify::max-width-chars": (pspec: GObject.ParamSpec) => void;
            "notify::placeholder-text": (pspec: GObject.ParamSpec) => void;
            "notify::rise": (pspec: GObject.ParamSpec) => void;
            "notify::rise-set": (pspec: GObject.ParamSpec) => void;
            "notify::scale": (pspec: GObject.ParamSpec) => void;
            "notify::scale-set": (pspec: GObject.ParamSpec) => void;
            "notify::single-paragraph-mode": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
            "notify::size-points": (pspec: GObject.ParamSpec) => void;
            "notify::size-set": (pspec: GObject.ParamSpec) => void;
            "notify::stretch": (pspec: GObject.ParamSpec) => void;
            "notify::stretch-set": (pspec: GObject.ParamSpec) => void;
            "notify::strikethrough": (pspec: GObject.ParamSpec) => void;
            "notify::strikethrough-set": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::style-set": (pspec: GObject.ParamSpec) => void;
            "notify::text": (pspec: GObject.ParamSpec) => void;
            "notify::underline": (pspec: GObject.ParamSpec) => void;
            "notify::underline-set": (pspec: GObject.ParamSpec) => void;
            "notify::variant": (pspec: GObject.ParamSpec) => void;
            "notify::variant-set": (pspec: GObject.ParamSpec) => void;
            "notify::weight": (pspec: GObject.ParamSpec) => void;
            "notify::weight-set": (pspec: GObject.ParamSpec) => void;
            "notify::width-chars": (pspec: GObject.ParamSpec) => void;
            "notify::wrap-mode": (pspec: GObject.ParamSpec) => void;
            "notify::wrap-width": (pspec: GObject.ParamSpec) => void;
            "notify::cell-background": (pspec: GObject.ParamSpec) => void;
            "notify::cell-background-gdk": (pspec: GObject.ParamSpec) => void;
            "notify::cell-background-rgba": (pspec: GObject.ParamSpec) => void;
            "notify::cell-background-set": (pspec: GObject.ParamSpec) => void;
            "notify::editing": (pspec: GObject.ParamSpec) => void;
            "notify::height": (pspec: GObject.ParamSpec) => void;
            "notify::is-expanded": (pspec: GObject.ParamSpec) => void;
            "notify::is-expander": (pspec: GObject.ParamSpec) => void;
            "notify::mode": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width": (pspec: GObject.ParamSpec) => void;
            "notify::xalign": (pspec: GObject.ParamSpec) => void;
            "notify::xpad": (pspec: GObject.ParamSpec) => void;
            "notify::yalign": (pspec: GObject.ParamSpec) => void;
            "notify::ypad": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.CellRendererText.ConstructorProps {
            line_two: string;
            lineTwo: string;
            text_lines: number;
            textLines: number;
        }
    }

    /**
     * @gir-type Class
     */
    class TwoLinesRenderer extends Gtk.CellRendererText {
        static $gtype: GObject.GType<TwoLinesRenderer>;

        // Properties
        get line_two(): string;
        set line_two(val: string);

        get lineTwo(): string;
        set lineTwo(val: string);

        get text_lines(): number;
        set text_lines(val: number);

        get textLines(): number;
        set textLines(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TwoLinesRenderer.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<TwoLinesRenderer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): TwoLinesRenderer;

        // Signals
        /** @signal */
        connect<K extends keyof TwoLinesRenderer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TwoLinesRenderer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof TwoLinesRenderer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TwoLinesRenderer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof TwoLinesRenderer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<TwoLinesRenderer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    /**
     * @gir-type Alias
     */
    type HeaderBarClass = typeof HeaderBar;

    /**
     * @gir-type Struct
     */
    abstract class HeaderBarPrivate {
        static $gtype: GObject.GType<HeaderBarPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type MainIconViewClass = typeof MainIconView;

    /**
     * @gir-type Struct
     */
    abstract class MainIconViewPrivate {
        static $gtype: GObject.GType<MainIconViewPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type MainListViewClass = typeof MainListView;

    /**
     * @gir-type Struct
     */
    abstract class MainListViewPrivate {
        static $gtype: GObject.GType<MainListViewPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type MainToolbarClass = typeof MainToolbar;

    /**
     * @gir-type Struct
     */
    abstract class MainToolbarPrivate {
        static $gtype: GObject.GType<MainToolbarPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type MainViewClass = typeof MainView;

    /**
     * @gir-type Alias
     */
    type MainViewGenericIface = typeof MainViewGeneric;

    /**
     * @gir-type Struct
     */
    abstract class MainViewPrivate {
        static $gtype: GObject.GType<MainViewPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type RevealerClass = typeof Revealer;

    /**
     * @gir-type Struct
     */
    abstract class RevealerPrivate {
        static $gtype: GObject.GType<RevealerPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type StackClass = typeof Stack;

    /**
     * @gir-type Struct
     */
    abstract class StackPrivate {
        static $gtype: GObject.GType<StackPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type StackSwitcherClass = typeof StackSwitcher;

    /**
     * @gir-type Struct
     */
    abstract class StackSwitcherPrivate {
        static $gtype: GObject.GType<StackSwitcherPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type StyledTextRendererClass = typeof StyledTextRenderer;

    /**
     * @gir-type Struct
     */
    abstract class StyledTextRendererPrivate {
        static $gtype: GObject.GType<StyledTextRendererPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type TaggedEntryClass = typeof TaggedEntry;

    /**
     * @gir-type Struct
     */
    abstract class TaggedEntryPrivate {
        static $gtype: GObject.GType<TaggedEntryPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type TaggedEntryTagClass = typeof TaggedEntryTag;

    /**
     * @gir-type Struct
     */
    abstract class TaggedEntryTagPrivate {
        static $gtype: GObject.GType<TaggedEntryTagPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type TogglePixbufRendererClass = typeof TogglePixbufRenderer;

    /**
     * @gir-type Struct
     */
    abstract class TogglePixbufRendererPrivate {
        static $gtype: GObject.GType<TogglePixbufRendererPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type TwoLinesRendererClass = typeof TwoLinesRenderer;

    /**
     * @gir-type Struct
     */
    abstract class TwoLinesRendererPrivate {
        static $gtype: GObject.GType<TwoLinesRendererPrivate>;
    }


    namespace HeaderButton {

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Button.ConstructorProps {
            label: string;
            symbolic_icon_name: string;
            symbolicIconName: string;
            use_markup: boolean;
            useMarkup: boolean;
        }
    }

    export interface HeaderButtonNamespace {
        $gtype: GObject.GType<HeaderButton>;
        prototype: HeaderButton;
    }
    /**
     * @gir-type Interface
     */
    interface HeaderButton extends Gtk.Button {

        // Properties
        /**
         * The label of the {@link Gd.HeaderButton} object.
         */
        get label(): string;
        set label(val: string);

        /**
         * The symbolic icon name of the {@link Gd.HeaderButton} object.
         */
        get symbolic_icon_name(): string;
        set symbolic_icon_name(val: string);

        /**
         * The symbolic icon name of the {@link Gd.HeaderButton} object.
         */
        get symbolicIconName(): string;
        set symbolicIconName(val: string);

        /**
         * Whether the label of the {@link Gd.HeaderButton} object should use markup.
         */
        get use_markup(): boolean;
        set use_markup(val: boolean);

        /**
         * Whether the label of the {@link Gd.HeaderButton} object should use markup.
         */
        get useMarkup(): boolean;
        set useMarkup(val: boolean);

        // Methods
        get_label(): string;

        get_symbolic_icon_name(): string;

        get_use_markup(): boolean;

        /**
         * @param label 
         */
        set_label(label: (string | null)): void;

        /**
         * @param args 
         */
    // Conflicted with Gtk.Button.set_label
        set_label(...args: never[]): any;

        /**
         * @param symbolic_icon_name 
         */
        set_symbolic_icon_name(symbolic_icon_name: (string | null)): void;

        /**
         * @param use_markup 
         */
        set_use_markup(use_markup: boolean): void;
    }


    export const HeaderButton: HeaderButtonNamespace & {
        new (): HeaderButton; // This allows `obj instanceof HeaderButton`
    };

    namespace MainViewGeneric {
        /**
         * Interface for implementing MainViewGeneric.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @virtual
             */
            vfunc_get_model(): Gtk.TreeModel;

            /**
             * @param x 
             * @param y 
             * @virtual
             */
            vfunc_get_path_at_pos(x: number, y: number): Gtk.TreePath;

            /**
             * @param path 
             * @virtual
             */
            vfunc_scroll_to_path(path: Gtk.TreePath): void;

            /**
             * @param model 
             * @virtual
             */
            vfunc_set_model(model: (Gtk.TreeModel | null)): void;

            /**
             * @param selection_mode 
             * @virtual
             */
            vfunc_set_selection_mode(selection_mode: boolean): void;
        }


        // Constructor properties interface
        interface ConstructorProps extends Gtk.Widget.ConstructorProps {

        }
    }

    export interface MainViewGenericNamespace {
        $gtype: GObject.GType<MainViewGeneric>;
        prototype: MainViewGeneric;
    }
    /**
     * @gir-type Interface
     */
    interface MainViewGeneric extends Gtk.Widget, MainViewGeneric.Interface {

        // Methods
        /**
         * @returns The associated model
         */
        get_model(): Gtk.TreeModel;

        /**
         * @param x 
         * @param y 
         */
        get_path_at_pos(x: number, y: number): Gtk.TreePath;

        /**
         * @param path 
         */
        scroll_to_path(path: Gtk.TreePath): void;

        select_all(): void;

        /**
         * @param model 
         */
        set_model(model: (Gtk.TreeModel | null)): void;

        /**
         * @param start 
         * @param end 
         */
        set_rubberband_range(start: Gtk.TreePath, end: Gtk.TreePath): void;

        /**
         * @param selection_mode 
         */
        set_selection_mode(selection_mode: boolean): void;

        unselect_all(): void;
    }


    export const MainViewGeneric: MainViewGenericNamespace & {
        new (): MainViewGeneric; // This allows `obj instanceof MainViewGeneric`
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

export default Gd;

// END
