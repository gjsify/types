
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
import type Xkl from '@girs/xkl-1.0';

export namespace AnacondaWidgets {

    /**
     * AnacondaWidgets-3.4
     */


    const RESOURCE_PATH: string;

    /**
     * @param label 
     * @param language 
     */
    function apply_language(label: Gtk.Label, language: string): void;

    /**
     * @param widget 
     * @param name 
     */
    function widget_apply_stylesheet(widget: Gtk.Widget, name: string): void;

    namespace BaseStandalone {
        // Signal signatures
        interface SignalSignatures extends BaseWindow.SignalSignatures {
            /**
             * @signal
             * @action
             * @run-FIRST
             */
            "continue-clicked": () => void;
            /**
             * @signal
             * @action
             * @run-FIRST
             */
            "quit-clicked": () => void;
            "notify::continue-button": (pspec: GObject.ParamSpec) => void;
            "notify::quit-button": (pspec: GObject.ParamSpec) => void;
            "notify::distribution": (pspec: GObject.ParamSpec) => void;
            "notify::window-name": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends BaseWindow.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            continue_button: Gtk.Button;
            continueButton: Gtk.Button;
            quit_button: Gtk.Button;
            quitButton: Gtk.Button;
        }
    }

    /**
     * @gir-type Class
     */
    abstract class BaseStandalone extends BaseWindow implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<BaseStandalone>;

        // Properties
        get continue_button(): Gtk.Button;
        set continue_button(val: Gtk.Button);

        get continueButton(): Gtk.Button;
        set continueButton(val: Gtk.Button);

        get quit_button(): Gtk.Button;
        set quit_button(val: Gtk.Button);

        get quitButton(): Gtk.Button;
        set quitButton(val: Gtk.Button);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: BaseStandalone.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<BaseStandalone.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof BaseStandalone.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BaseStandalone.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof BaseStandalone.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BaseStandalone.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof BaseStandalone.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<BaseStandalone.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_continue_clicked(): void;

        /**
         * @virtual
         */
        vfunc_quit_clicked(): void;

        // Methods
        get_continue_button(): Gtk.Button;

        get_may_continue(): boolean;

        get_quit_button(): Gtk.Button;

        /**
         * @param may_continue 
         */
        set_may_continue(may_continue: boolean): void;
    }


    namespace BaseWindow {
        // Signal signatures
        interface SignalSignatures extends Gtk.Bin.SignalSignatures {
            /**
             * @signal
             * @action
             * @run-FIRST
             */
            "help-button-clicked": () => void;
            /**
             * @signal
             * @action
             * @run-FIRST
             */
            "info-bar-clicked": () => void;
            "notify::distribution": (pspec: GObject.ParamSpec) => void;
            "notify::window-name": (pspec: GObject.ParamSpec) => void;
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
            distribution: string;
            window_name: string;
            windowName: string;
        }
    }

    /**
     * @gir-type Class
     */
    class BaseWindow extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<BaseWindow>;

        // Properties
        get distribution(): string;
        set distribution(val: string);

        get window_name(): string;
        set window_name(val: string);

        get windowName(): string;
        set windowName(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: BaseWindow.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<BaseWindow.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): BaseWindow;

        // Signals
        /** @signal */
        connect<K extends keyof BaseWindow.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BaseWindow.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof BaseWindow.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BaseWindow.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof BaseWindow.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<BaseWindow.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_help_button_clicked(): void;

        /**
         * @virtual
         */
        vfunc_info_bar_clicked(): void;

        // Methods
        clear_info(): void;

        get_action_area(): Gtk.Widget;

        get_alignment(): Gtk.Widget;

        get_beta(): boolean;

        get_help_button(): Gtk.Widget;

        get_layout_indicator_box(): Gtk.Widget;

        get_main_box(): Gtk.Widget;

        get_nav_area(): Gtk.Widget;

        get_nav_area_background_window(): Gtk.Widget;

        retranslate(): void;

        /**
         * @param is_beta 
         */
        set_beta(is_beta: boolean): void;

        /**
         * @param msg 
         */
        set_error(msg: string): void;

        /**
         * @param msg 
         */
        set_info(msg: string): void;

        /**
         * @param msg 
         */
        set_warning(msg: string): void;
    }


    namespace DiskOverview {
        // Signal signatures
        interface SignalSignatures extends Gtk.EventBox.SignalSignatures {
            "notify::capacity": (pspec: GObject.ParamSpec) => void;
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::free": (pspec: GObject.ParamSpec) => void;
            "notify::kind": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::popup-info": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.EventBox.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            capacity: string;
            description: string;
            free: string;
            kind: string;
            name: string;
            popup_info: string;
            popupInfo: string;
        }
    }

    /**
     * @gir-type Class
     */
    class DiskOverview extends Gtk.EventBox implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<DiskOverview>;

        // Properties
        get capacity(): string;
        set capacity(val: string);

        get description(): string;
        set description(val: string);

        get free(): string;
        set free(val: string);

        get kind(): string;
        set kind(val: string);

        get name(): string;
        set name(val: string);

        get popup_info(): string;
        set popup_info(val: string);

        get popupInfo(): string;
        set popupInfo(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DiskOverview.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<DiskOverview.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): DiskOverview;

        // Signals
        /** @signal */
        connect<K extends keyof DiskOverview.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DiskOverview.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DiskOverview.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DiskOverview.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DiskOverview.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DiskOverview.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_chosen(): boolean;

        /**
         * @param is_chosen 
         */
        set_chosen(is_chosen: boolean): void;
    }


    namespace HubWindow {
        // Signal signatures
        interface SignalSignatures extends BaseStandalone.SignalSignatures {
            "notify::continue-button": (pspec: GObject.ParamSpec) => void;
            "notify::quit-button": (pspec: GObject.ParamSpec) => void;
            "notify::distribution": (pspec: GObject.ParamSpec) => void;
            "notify::window-name": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends BaseStandalone.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class HubWindow extends BaseStandalone implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<HubWindow>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: HubWindow.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<HubWindow.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): HubWindow;

        // Signals
        /** @signal */
        connect<K extends keyof HubWindow.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, HubWindow.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof HubWindow.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, HubWindow.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof HubWindow.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<HubWindow.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_spoke_area(): Gtk.Widget;
    }


    namespace LayoutIndicator {
        // Signal signatures
        interface SignalSignatures extends Gtk.EventBox.SignalSignatures {
            "notify::label-width": (pspec: GObject.ParamSpec) => void;
            "notify::layout": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.EventBox.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            label_width: number;
            labelWidth: number;
            layout: string;
        }
    }

    /**
     * @gir-type Class
     */
    class LayoutIndicator extends Gtk.EventBox implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<LayoutIndicator>;

        // Properties
        get label_width(): number;
        set label_width(val: number);

        get labelWidth(): number;
        set labelWidth(val: number);

        /**
         * @read-only
         */
        get layout(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: LayoutIndicator.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<LayoutIndicator.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): LayoutIndicator;

        // Signals
        /** @signal */
        connect<K extends keyof LayoutIndicator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LayoutIndicator.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof LayoutIndicator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LayoutIndicator.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof LayoutIndicator.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<LayoutIndicator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_current_layout(): string;

        get_label_width(): number;

        retranslate(): void;

        /**
         * @param new_width 
         */
        set_label_width(new_width: number): void;
    }


    namespace MountpointSelector {
        // Signal signatures
        interface SignalSignatures extends Gtk.EventBox.SignalSignatures {
            /**
             * @signal
             * @run-LAST
             */
            "chosen-changed": () => void;
            "notify::mountpoint": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::show-arrow": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.EventBox.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            mountpoint: string;
            name: string;
            show_arrow: boolean;
            showArrow: boolean;
            size: string;
        }
    }

    /**
     * @gir-type Class
     */
    class MountpointSelector extends Gtk.EventBox implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<MountpointSelector>;

        // Properties
        get mountpoint(): string;
        set mountpoint(val: string);

        get name(): string;
        set name(val: string);

        get show_arrow(): boolean;
        set show_arrow(val: boolean);

        get showArrow(): boolean;
        set showArrow(val: boolean);

        get size(): string;
        set size(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MountpointSelector.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<MountpointSelector.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): MountpointSelector;

        // Signals
        /** @signal */
        connect<K extends keyof MountpointSelector.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MountpointSelector.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof MountpointSelector.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MountpointSelector.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof MountpointSelector.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MountpointSelector.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_chosen(): boolean;

        get_page(): Gtk.Widget;

        /**
         * @param is_chosen 
         */
        set_chosen(is_chosen: boolean): void;

        /**
         * @param parent_page 
         */
        set_page(parent_page: Gtk.Widget): void;
    }


    namespace SpokeSelector {
        // Signal signatures
        interface SignalSignatures extends Gtk.EventBox.SignalSignatures {
            "notify::icon": (pspec: GObject.ParamSpec) => void;
            "notify::status": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.EventBox.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            icon: string;
            status: string;
            title: string;
        }
    }

    /**
     * @gir-type Class
     */
    class SpokeSelector extends Gtk.EventBox implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<SpokeSelector>;

        // Properties
        get icon(): string;
        set icon(val: string);

        get status(): string;
        set status(val: string);

        get title(): string;
        set title(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SpokeSelector.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<SpokeSelector.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): SpokeSelector;

        // Signals
        /** @signal */
        connect<K extends keyof SpokeSelector.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SpokeSelector.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof SpokeSelector.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SpokeSelector.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof SpokeSelector.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SpokeSelector.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_incomplete(): boolean;

        /**
         * @param is_incomplete 
         */
        set_incomplete(is_incomplete: boolean): void;
    }


    namespace SpokeWindow {
        // Signal signatures
        interface SignalSignatures extends BaseWindow.SignalSignatures {
            /**
             * @signal
             * @action
             * @run-FIRST
             */
            "button-clicked": () => void;
            "notify::distribution": (pspec: GObject.ParamSpec) => void;
            "notify::window-name": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends BaseWindow.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class SpokeWindow extends BaseWindow implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<SpokeWindow>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SpokeWindow.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<SpokeWindow.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): SpokeWindow;

        // Signals
        /** @signal */
        connect<K extends keyof SpokeWindow.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SpokeWindow.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof SpokeWindow.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SpokeWindow.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof SpokeWindow.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SpokeWindow.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_button_clicked(): void;
    }


    namespace StandaloneWindow {
        // Signal signatures
        interface SignalSignatures extends BaseStandalone.SignalSignatures {
            "notify::continue-button": (pspec: GObject.ParamSpec) => void;
            "notify::quit-button": (pspec: GObject.ParamSpec) => void;
            "notify::distribution": (pspec: GObject.ParamSpec) => void;
            "notify::window-name": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends BaseStandalone.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            continue_button: Gtk.Button;
            continueButton: Gtk.Button;
            quit_button: Gtk.Button;
            quitButton: Gtk.Button;
        }
    }

    /**
     * @gir-type Class
     */
    class StandaloneWindow extends BaseStandalone implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<StandaloneWindow>;

        // Properties
        /**
         * @read-only
         */
        get continue_button(): Gtk.Button;

        /**
         * @read-only
         */
        get continueButton(): Gtk.Button;

        /**
         * @read-only
         */
        get quit_button(): Gtk.Button;

        /**
         * @read-only
         */
        get quitButton(): Gtk.Button;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StandaloneWindow.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<StandaloneWindow.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): StandaloneWindow;

        // Signals
        /** @signal */
        connect<K extends keyof StandaloneWindow.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StandaloneWindow.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof StandaloneWindow.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StandaloneWindow.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof StandaloneWindow.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<StandaloneWindow.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        retranslate(): void;
    }


    /**
     * @gir-type Struct
     */
    class BaseStandaloneClass {
        static $gtype: GObject.GType<BaseStandaloneClass>;
    }


    /**
     * @gir-type Struct
     */
    class BaseStandalonePrivate {
        static $gtype: GObject.GType<BaseStandalonePrivate>;
    }


    /**
     * @gir-type Struct
     */
    class BaseWindowClass {
        static $gtype: GObject.GType<BaseWindowClass>;
    }


    /**
     * @gir-type Struct
     */
    class BaseWindowPrivate {
        static $gtype: GObject.GType<BaseWindowPrivate>;
    }


    /**
     * @gir-type Struct
     */
    class DiskOverviewClass {
        static $gtype: GObject.GType<DiskOverviewClass>;
    }


    /**
     * @gir-type Struct
     */
    class DiskOverviewPrivate {
        static $gtype: GObject.GType<DiskOverviewPrivate>;
    }


    /**
     * @gir-type Struct
     */
    class HubWindowClass {
        static $gtype: GObject.GType<HubWindowClass>;
    }


    /**
     * @gir-type Struct
     */
    class HubWindowPrivate {
        static $gtype: GObject.GType<HubWindowPrivate>;
    }


    /**
     * @gir-type Struct
     */
    class LayoutIndicatorClass {
        static $gtype: GObject.GType<LayoutIndicatorClass>;

        // Fields
        engine: Xkl.Engine;
    }


    /**
     * @gir-type Struct
     */
    class LayoutIndicatorPrivate {
        static $gtype: GObject.GType<LayoutIndicatorPrivate>;
    }


    /**
     * @gir-type Struct
     */
    class MountpointSelectorClass {
        static $gtype: GObject.GType<MountpointSelectorClass>;
    }


    /**
     * @gir-type Struct
     */
    class MountpointSelectorPrivate {
        static $gtype: GObject.GType<MountpointSelectorPrivate>;
    }


    /**
     * @gir-type Struct
     */
    class SpokeSelectorClass {
        static $gtype: GObject.GType<SpokeSelectorClass>;
    }


    /**
     * @gir-type Struct
     */
    class SpokeSelectorPrivate {
        static $gtype: GObject.GType<SpokeSelectorPrivate>;
    }


    /**
     * @gir-type Struct
     */
    class SpokeWindowClass {
        static $gtype: GObject.GType<SpokeWindowClass>;
    }


    /**
     * @gir-type Struct
     */
    class SpokeWindowPrivate {
        static $gtype: GObject.GType<SpokeWindowPrivate>;
    }


    /**
     * @gir-type Struct
     */
    class StandaloneWindowClass {
        static $gtype: GObject.GType<StandaloneWindowClass>;
    }


    /**
     * @gir-type Struct
     */
    class StandaloneWindowPrivate {
        static $gtype: GObject.GType<StandaloneWindowPrivate>;
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

export default AnacondaWidgets;

// END
