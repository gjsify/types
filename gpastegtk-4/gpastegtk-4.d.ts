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
import type Gtk from '@girs/gtk-4.0';
import type Gsk from '@girs/gsk-4.0';
import type Graphene from '@girs/graphene-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Gdk from '@girs/gdk-4.0';
import type cairo from 'cairo';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type GPaste from '@girs/gpaste-2';
import type Adw from '@girs/adw-1';

export namespace GPasteGtk {
    /**
     * GPasteGtk-4
     */

    /**
     * Compute the checksum of an image
     * @param texture the {@link Gdk.Texture} to checksum
     * @returns the newly allocated checksum
     */
    function util_compute_checksum(texture: Gdk.Texture): string;
    /**
     * Ask the user for confirmation
     * @param parent the parent {@link Gtk.Window}
     * @param action
     * @param msg the message to display
     * @param on_confirmation handler to invoke when we get a confirmation
     */
    function util_confirm_dialog(
        parent: Gtk.Window | null,
        action: string,
        msg: string,
        on_confirmation: ConfirmDialogCallback,
    ): void;
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
    function util_show_window(application: Gio.Application): void;
    /**
     * @gir-type Callback
     */
    interface BooleanCallback {
        (settings: GPaste.Settings, data: boolean): void;
    }
    /**
     * @gir-type Callback
     */
    interface ConfirmDialogCallback {
        (confirmed: boolean): void;
    }
    /**
     * @gir-type Callback
     */
    interface RangeCallback {
        (settings: GPaste.Settings, data: number): void;
    }
    /**
     * @gir-type Callback
     */
    interface ResetCallback {
        (settings: GPaste.Settings): void;
    }
    /**
     * @gir-type Callback
     */
    interface TextCallback {
        (settings: GPaste.Settings, data: string): void;
    }
    namespace PreferencesBehaviourPage {
        // Signal signatures
        interface SignalSignatures extends PreferencesPage.SignalSignatures {
            'notify::banner': (pspec: GObject.ParamSpec) => void;
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::description-centered': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::use-underline': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                PreferencesPage.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class PreferencesBehaviourPage
        extends PreferencesPage
        implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget
    {
        static $gtype: GObject.GType<PreferencesBehaviourPage>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PreferencesBehaviourPage.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PreferencesBehaviourPage.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](manager: PreferencesManager): PreferencesBehaviourPage;
        // Conflicted with Adw.PreferencesPage.new

        static ['new'](...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof PreferencesBehaviourPage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PreferencesBehaviourPage.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof PreferencesBehaviourPage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PreferencesBehaviourPage.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof PreferencesBehaviourPage.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PreferencesBehaviourPage.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace PreferencesDialog {
        // Signal signatures
        interface SignalSignatures extends Adw.PreferencesDialog.SignalSignatures {
            'notify::search-enabled': (pspec: GObject.ParamSpec) => void;
            'notify::visible-page': (pspec: GObject.ParamSpec) => void;
            'notify::visible-page-name': (pspec: GObject.ParamSpec) => void;
            'notify::can-close': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::content-height': (pspec: GObject.ParamSpec) => void;
            'notify::content-width': (pspec: GObject.ParamSpec) => void;
            'notify::current-breakpoint': (pspec: GObject.ParamSpec) => void;
            'notify::default-widget': (pspec: GObject.ParamSpec) => void;
            'notify::focus-widget': (pspec: GObject.ParamSpec) => void;
            'notify::follows-content-size': (pspec: GObject.ParamSpec) => void;
            'notify::presentation-mode': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Adw.PreferencesDialog.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps,
                Gtk.ShortcutManager.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class PreferencesDialog
        extends Adw.PreferencesDialog
        implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.ShortcutManager
    {
        static $gtype: GObject.GType<PreferencesDialog>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PreferencesDialog.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PreferencesDialog.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](gapp: Gio.Application): PreferencesDialog;
        // Conflicted with Adw.PreferencesDialog.new

        static ['new'](...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof PreferencesDialog.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PreferencesDialog.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof PreferencesDialog.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PreferencesDialog.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof PreferencesDialog.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PreferencesDialog.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace PreferencesGroup {
        // Signal signatures
        interface SignalSignatures extends Adw.PreferencesGroup.SignalSignatures {
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::header-suffix': (pspec: GObject.ParamSpec) => void;
            'notify::separate-rows': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Adw.PreferencesGroup.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class PreferencesGroup extends Adw.PreferencesGroup implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<PreferencesGroup>;

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

        static ['new'](title: string): PreferencesGroup;
        // Conflicted with Adw.PreferencesGroup.new

        static ['new'](...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof PreferencesGroup.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PreferencesGroup.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof PreferencesGroup.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PreferencesGroup.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof PreferencesGroup.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PreferencesGroup.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Add a new boolean settings to the current pane
         * @param label the label to display
         * @param value the deafault value
         * @param on_value_changed the callback to call when the value changes
         * @param on_reset the callback to call when the value is reset
         * @param settings a {@link GPaste.Settings} instance
         * @returns the {@link Gtk.Switch} we just added
         */
        add_boolean_setting(
            label: string,
            value: boolean,
            on_value_changed: BooleanCallback,
            on_reset: ResetCallback,
            settings: GPaste.Settings,
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
         * @param settings a {@link GPaste.Settings} instance
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
            settings: GPaste.Settings,
        ): Gtk.SpinButton;
        /**
         * Add a new text settings to the current pane
         * @param label the label to display
         * @param value the deafault value
         * @param on_value_changed the callback to call when the value changes
         * @param on_reset the callback to call when the value is reset
         * @param settings a {@link GPaste.Settings} instance
         * @returns the {@link Gtk.EntryBuffer} from the {@link Gtk.Entry} we just added
         */
        add_text_setting(
            label: string,
            value: string,
            on_value_changed: TextCallback,
            on_reset: ResetCallback,
            settings: GPaste.Settings,
        ): Gtk.EntryBuffer;
    }

    namespace PreferencesHistorySettingsPage {
        // Signal signatures
        interface SignalSignatures extends PreferencesPage.SignalSignatures {
            'notify::banner': (pspec: GObject.ParamSpec) => void;
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::description-centered': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::use-underline': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                PreferencesPage.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class PreferencesHistorySettingsPage
        extends PreferencesPage
        implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget
    {
        static $gtype: GObject.GType<PreferencesHistorySettingsPage>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PreferencesHistorySettingsPage.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PreferencesHistorySettingsPage.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](manager: PreferencesManager): PreferencesHistorySettingsPage;
        // Conflicted with Adw.PreferencesPage.new

        static ['new'](...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof PreferencesHistorySettingsPage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PreferencesHistorySettingsPage.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof PreferencesHistorySettingsPage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PreferencesHistorySettingsPage.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof PreferencesHistorySettingsPage.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PreferencesHistorySettingsPage.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace PreferencesManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class PreferencesManager extends GObject.Object {
        static $gtype: GObject.GType<PreferencesManager>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PreferencesManager.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PreferencesManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): PreferencesManager;

        // Signals

        /** @signal */
        connect<K extends keyof PreferencesManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PreferencesManager.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof PreferencesManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PreferencesManager.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof PreferencesManager.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PreferencesManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Deregister the page from the manager
         * @param page a {@link GPasteGtk.PreferencesPage} instance
         */
        deregister(page: PreferencesPage): void;
        /**
         * Returns the {@link GPaste.Settings} instance manager by `self`
         * @returns the {@link GPaste.Settings} instance
         */
        get_settings(): GPaste.Settings | null;
        /**
         * Register the page in the manager to notify for settings changes
         * @param page a {@link GPasteGtk.PreferencesPage} instance
         */
        register(page: PreferencesPage): void;
    }

    namespace PreferencesPage {
        // Signal signatures
        interface SignalSignatures extends Adw.PreferencesPage.SignalSignatures {
            'notify::banner': (pspec: GObject.ParamSpec) => void;
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::description-centered': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::use-underline': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Adw.PreferencesPage.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class PreferencesPage extends Adw.PreferencesPage implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<PreferencesPage>;

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

        // Signals

        /** @signal */
        connect<K extends keyof PreferencesPage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PreferencesPage.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof PreferencesPage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PreferencesPage.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof PreferencesPage.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PreferencesPage.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Apply changes related to the update of one setting
         * @param settings a {@link GPaste.Settings} instance
         * @param key the settings key that just changed
         * @virtual
         */
        vfunc_setting_changed(settings: GPaste.Settings, key: string): void;

        // Methods

        /**
         * Apply changes related to the update of one setting
         * @param settings a {@link GPaste.Settings} instance
         * @param key the settings key that just changed
         */
        setting_changed(settings: GPaste.Settings, key: string): void;
    }

    namespace PreferencesShortcutsPage {
        // Signal signatures
        interface SignalSignatures extends PreferencesPage.SignalSignatures {
            'notify::banner': (pspec: GObject.ParamSpec) => void;
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::description-centered': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::use-underline': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                PreferencesPage.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class PreferencesShortcutsPage
        extends PreferencesPage
        implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget
    {
        static $gtype: GObject.GType<PreferencesShortcutsPage>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PreferencesShortcutsPage.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PreferencesShortcutsPage.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](manager: PreferencesManager): PreferencesShortcutsPage;
        // Conflicted with Adw.PreferencesPage.new

        static ['new'](...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof PreferencesShortcutsPage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PreferencesShortcutsPage.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof PreferencesShortcutsPage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PreferencesShortcutsPage.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof PreferencesShortcutsPage.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PreferencesShortcutsPage.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace PreferencesWidget {
        // Signal signatures
        interface SignalSignatures extends Adw.Bin.SignalSignatures {
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Adw.Bin.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class PreferencesWidget extends Adw.Bin implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<PreferencesWidget>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PreferencesWidget.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PreferencesWidget.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): PreferencesWidget;

        // Signals

        /** @signal */
        connect<K extends keyof PreferencesWidget.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PreferencesWidget.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof PreferencesWidget.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PreferencesWidget.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof PreferencesWidget.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PreferencesWidget.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    /**
     * @gir-type Alias
     */
    type PreferencesBehaviourPageClass = typeof PreferencesBehaviourPage;
    /**
     * @gir-type Alias
     */
    type PreferencesDialogClass = typeof PreferencesDialog;
    /**
     * @gir-type Alias
     */
    type PreferencesGroupClass = typeof PreferencesGroup;
    /**
     * @gir-type Alias
     */
    type PreferencesHistorySettingsPageClass = typeof PreferencesHistorySettingsPage;
    /**
     * @gir-type Alias
     */
    type PreferencesManagerClass = typeof PreferencesManager;
    /**
     * @gir-type Alias
     */
    type PreferencesPageClass = typeof PreferencesPage;
    /**
     * @gir-type Alias
     */
    type PreferencesShortcutsPageClass = typeof PreferencesShortcutsPage;
    /**
     * @gir-type Alias
     */
    type PreferencesWidgetClass = typeof PreferencesWidget;
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
