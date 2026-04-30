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
import type GPaste from '@girs/gpaste-2';

export namespace GPasteGtk {
    /**
     * GPasteGtk-3
     */

    /**
     * Compute the checksum of an image
     * @param image the {@link GdkPixbuf.Pixbuf} to checksum
     * @returns the newly allocated checksum
     */
    function util_compute_checksum(image: GdkPixbuf.Pixbuf): string;
    /**
     * Ask the user for confirmation
     * @param parent the parent {@link Gtk.Window}
     * @param action
     * @param msg the message to display
     */
    function util_confirm_dialog(parent: Gtk.Window | null, action: string, msg: string): boolean;
    /**
     * Empty history after prompting user for confirmation
     * @param parent_window the parent {@link Gtk.Window}
     * @param client a {@link GPaste.Client} instance
     * @param settings a {@link GPaste.Settings} instance
     * @param history the name of the history to empty
     */
    function util_empty_history(
        parent_window: Gtk.Window | null,
        client: GPaste.Client,
        settings: GPaste.Settings,
        history: string,
    ): void;
    /**
     * Present the application's window to user
     * @param application a {@link Gtk.Application}
     */
    function util_show_win(application: Gio.Application): void;
    /**
     * @gir-type Callback
     */
    interface BooleanCallback {
        (data: boolean): void;
    }
    /**
     * @gir-type Callback
     */
    interface RangeCallback {
        (data: number): void;
    }
    /**
     * @gir-type Callback
     */
    interface ResetCallback {
        (user_data: any | null): void;
    }
    /**
     * @gir-type Callback
     */
    interface TextCallback {
        (data: string): void;
    }
    namespace SettingsUiPanel {
        // Signal signatures
        interface SignalSignatures extends Gtk.Grid.SignalSignatures {
            'notify::baseline-row': (pspec: GObject.ParamSpec) => void;
            'notify::column-homogeneous': (pspec: GObject.ParamSpec) => void;
            'notify::column-spacing': (pspec: GObject.ParamSpec) => void;
            'notify::row-homogeneous': (pspec: GObject.ParamSpec) => void;
            'notify::row-spacing': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
            'notify::orientation': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gtk.Grid.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.Orientable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class SettingsUiPanel extends Gtk.Grid implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<SettingsUiPanel>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SettingsUiPanel.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SettingsUiPanel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SettingsUiPanel;

        // Signals

        /** @signal */
        connect<K extends keyof SettingsUiPanel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SettingsUiPanel.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof SettingsUiPanel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SettingsUiPanel.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof SettingsUiPanel.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SettingsUiPanel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Add a new boolean settings to the current pane
         * @param label the label to display
         * @param value the deafault value
         * @param on_value_changed the callback to call when the value changes
         * @param on_reset the callback to call when the value is reset
         * @returns the {@link Gtk.Switch} we just added
         */
        add_boolean_setting(
            label: string,
            value: boolean,
            on_value_changed: BooleanCallback,
            on_reset: ResetCallback,
        ): Gtk.Switch;
        /**
         * Add a new boolean settings to the current pane
         * @param label the label to display
         * @param value the deafault value
         * @param min the minimal authorized value
         * @param max the maximal authorized value
         * @param step the step between proposed values
         * @param on_value_changed the callback to call when the value changes
         * @param on_reset the callback to call when the value is reset
         * @returns the {@link Gtk.SpinButton} we just added
         */
        add_range_setting(
            label: string,
            value: number,
            min: number,
            max: number,
            step: number,
            on_value_changed: RangeCallback,
            on_reset: ResetCallback,
        ): Gtk.SpinButton;
        /**
         * Add a new separator to the current pane
         */
        add_separator(): void;
        /**
         * Add a new text settings to the current pane
         * @param label the label to display
         * @param value the deafault value
         * @param on_value_changed the callback to call when the value changes
         * @param on_reset the callback to call when the value is reset
         * @returns the {@link Gtk.Entry} we just added
         */
        add_text_setting(
            label: string,
            value: string,
            on_value_changed: TextCallback,
            on_reset: ResetCallback,
        ): Gtk.Entry;
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

    namespace SettingsUiStack {
        // Signal signatures
        interface SignalSignatures extends Gtk.Stack.SignalSignatures {
            'notify::hhomogeneous': (pspec: GObject.ParamSpec) => void;
            'notify::homogeneous': (pspec: GObject.ParamSpec) => void;
            'notify::interpolate-size': (pspec: GObject.ParamSpec) => void;
            'notify::transition-duration': (pspec: GObject.ParamSpec) => void;
            'notify::transition-running': (pspec: GObject.ParamSpec) => void;
            'notify::transition-type': (pspec: GObject.ParamSpec) => void;
            'notify::vhomogeneous': (pspec: GObject.ParamSpec) => void;
            'notify::visible-child': (pspec: GObject.ParamSpec) => void;
            'notify::visible-child-name': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Stack.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class SettingsUiStack extends Gtk.Stack implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<SettingsUiStack>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SettingsUiStack.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SettingsUiStack.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SettingsUiStack;

        // Signals

        /** @signal */
        connect<K extends keyof SettingsUiStack.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SettingsUiStack.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof SettingsUiStack.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SettingsUiStack.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof SettingsUiStack.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SettingsUiStack.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Add a new panel to the {@link GPasteGtk.SettingsUiStack}
         * @param name the name of the panel
         * @param label the label to display
         * @param panel the {@link GPasteGtk.SettingsUiPanel} to add
         */
        add_panel(name: string, label: string, panel: SettingsUiPanel): void;
        /**
         * Fill the {@link GPasteGtk.SettingsUiStack} with default panels
         */
        fill(): void;
    }

    namespace SettingsUiWidget {
        // Signal signatures
        interface SignalSignatures extends Gtk.Grid.SignalSignatures {
            'notify::baseline-row': (pspec: GObject.ParamSpec) => void;
            'notify::column-homogeneous': (pspec: GObject.ParamSpec) => void;
            'notify::column-spacing': (pspec: GObject.ParamSpec) => void;
            'notify::row-homogeneous': (pspec: GObject.ParamSpec) => void;
            'notify::row-spacing': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
            'notify::orientation': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gtk.Grid.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.Orientable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class SettingsUiWidget extends Gtk.Grid implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<SettingsUiWidget>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SettingsUiWidget.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SettingsUiWidget.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SettingsUiWidget;

        // Signals

        /** @signal */
        connect<K extends keyof SettingsUiWidget.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SettingsUiWidget.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof SettingsUiWidget.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SettingsUiWidget.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof SettingsUiWidget.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SettingsUiWidget.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the inner GtkStack from the Widget
         * @returns the {@link Gtk.Stack}
         */
        get_stack(): SettingsUiStack;
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

    /**
     * @gir-type Alias
     */
    type SettingsUiPanelClass = typeof SettingsUiPanel;
    /**
     * @gir-type Alias
     */
    type SettingsUiStackClass = typeof SettingsUiStack;
    /**
     * @gir-type Alias
     */
    type SettingsUiWidgetClass = typeof SettingsUiWidget;
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

export default GPasteGtk;

// END
