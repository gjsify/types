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
import type GPlugin from '@girs/gplugin-1.0';

export namespace GPluginGtk4 {
    /**
     * GPluginGtk4-1.0
     */

    /**
     * This is the extra version string of GPluginGtk that was compiled against.
     */
    const EXTRA_VERSION: string;
    /**
     * This is the major version number of GPluginGtk that was compiled against.
     */
    const MAJOR_VERSION: number;
    /**
     * This is the micro version number of GPluginGtk that was compiled against.
     */
    const MICRO_VERSION: number;
    /**
     * This is the minor version number of GPluginGtk that was compiled against.
     */
    const MINOR_VERSION: number;
    /**
     * This is the string version number of GPluginGtk that was compiled against.
     */
    const VERSION: string;
    /**
     * A macro that should be defined by the user prior to including the
     * `gplugin-gtk.h` header.
     *
     * The definition should be one of the predefined GPluginGtk version macros:
     * `GPLUGIN_GTK_VERSION_0_42`, `GPLUGIN_GTK_VERSION_0_43`, ...
     *
     * This macro defines the earliest version of GPluginGtk that the package is
     * required to be able to compile against.
     *
     * If the compiler is configured to warn about the use of deprecated functions,
     * then using functions that were deprecated in version
     * `GPLUGIN_GTK_VERSION_MIN_REQUIRED` or earlier will cause warnings (but using
     * functions deprecated in later releases will not).
     * @since 0.42
     */
    const VERSION_MIN_REQUIRED: number;
    /**
     * Checks that the GPluginGtk library in use is compatible with the given
     * version.
     *
     * Generally you would pass in the constants {@link MAJOR_VERSION},
     * {@link MINOR_VERSION}, {@link MICRO_VERSION} as the three arguments to this
     * function; that produces a check that the library in use is compatible with
     * the version of GPluginGtk the application or module was compiled against.
     *
     * Compatibility is defined by two things: first the version of the running
     * library is newer than the version `major`.`minor`.`micro`. Second the running
     * library must be binary compatible with the version `major`.`minor`.`micro`
     * (same major version).
     * @param major The required major version.
     * @param minor The required minor version.
     * @param micro The required micro version.
     * @returns `null` if the GPluginGtk library is compatible with the given          version, or a string describing the version mismatch. The returned          string is owned by GPluginGtk and must not be modified or freed.
     */
    function version_check(major: number, minor: number, micro: number): string;
    namespace PluginPage {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            /**
             * Emitted when the plugin page enable switch is toggled.
             * @signal
             * @since 0.39
             * @run-last
             */
            'plugin-state-set': (arg0: boolean) => void;
            'notify::plugin': (pspec: GObject.ParamSpec) => void;
            'notify::settings-backend': (pspec: GObject.ParamSpec) => void;
            'notify::baseline-child': (pspec: GObject.ParamSpec) => void;
            'notify::baseline-position': (pspec: GObject.ParamSpec) => void;
            'notify::homogeneous': (pspec: GObject.ParamSpec) => void;
            'notify::spacing': (pspec: GObject.ParamSpec) => void;
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
            'notify::orientation': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gtk.Box.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps,
                Gtk.Orientable.ConstructorProps {
            plugin: GObject.Object | null;
            settings_backend: Gio.SettingsBackend | null;
            settingsBackend: Gio.SettingsBackend | null;
        }
    }

    /**
     * A widget that displays a single {@link GPlugin.Plugin} in a user friendly
     * way, intended to be placed in a {@link GPluginGtk4.View}.
     * @gir-type Class
     * @since 0.39
     */
    class PluginPage extends Gtk.Box implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Orientable {
        static $gtype: GObject.GType<PluginPage>;

        // Properties

        /**
         * The {@link GPlugin.Plugin} whose info should be displayed.
         * @since 0.39
         */
        get plugin(): GObject.Object | null;
        set plugin(val: GObject.Object | null);
        /**
         * The {@link Gio.SettingsBackend} to use when viewing plugin settings.
         * @since 0.40
         */
        get settings_backend(): Gio.SettingsBackend | null;
        set settings_backend(val: Gio.SettingsBackend | null);
        /**
         * The {@link Gio.SettingsBackend} to use when viewing plugin settings.
         * @since 0.40
         */
        get settingsBackend(): Gio.SettingsBackend | null;
        set settingsBackend(val: Gio.SettingsBackend | null);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PluginPage.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PluginPage.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): PluginPage;

        // Signals

        /** @signal */
        connect<K extends keyof PluginPage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PluginPage.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof PluginPage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PluginPage.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof PluginPage.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PluginPage.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the {@link GPlugin.Plugin} that's being displayed.
         * @returns The plugin that's being displayed, or          `null` if the page is empty.
         */
        get_plugin(): GPlugin.Plugin | null;
        /**
         * Gets the settings backend used when displaying plugin settings.
         *
         * Note, because we do not want to leak `G_SETTINGS_ENABLE_BACKEND` into
         * GPlugin users, this function returns a `gpointer`, and you should cast to
         * `GSettingsBackend *` after setting `G_SETTINGS_ENABLE_BACKEND` for the files
         * where you need it.
         * @returns The settings backend in use.
         */
        get_settings_backend(): any | null;
        /**
         * Sets the {@link GPlugin.Plugin} that should be displayed.
         *
         * A `plugin` value of `null` will clear the widget.
         * @param plugin The plugin instance.
         */
        set_plugin(plugin: GPlugin.Plugin | null): void;
        /**
         * Sets the settings backend to use when displaying plugin settings.
         *
         * Note, because we do not want to leak `G_SETTINGS_ENABLE_BACKEND` into
         * GPlugin users, this function takes a `gpointer` instead of a
         * `GSettingsBackend *` but the type will be checked internally.
         * @param backend The settings backend to use. If `null`,           the default GSettings backend will be used.
         */
        set_settings_backend(backend: any | null): void;
        /**
         * The orientation of the orientable.
         * @default Gtk.Orientation.HORIZONTAL
         * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);
        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`
         */
        get_orientation(): Gtk.Orientation;
        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable&#x2019;s new orientation
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }

    namespace PluginRow {
        // Signal signatures
        interface SignalSignatures extends Gtk.ListBoxRow.SignalSignatures {
            /**
             * Emitted when the plugin row enable switch is toggled.
             * @signal
             * @since 0.38
             * @run-last
             */
            'plugin-state-set': (arg0: boolean) => void;
            'notify::plugin': (pspec: GObject.ParamSpec) => void;
            'notify::activatable': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::selectable': (pspec: GObject.ParamSpec) => void;
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
            'notify::action-name': (pspec: GObject.ParamSpec) => void;
            'notify::action-target': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gtk.ListBoxRow.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Actionable.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps {
            plugin: GObject.Object | null;
        }
    }

    /**
     * A widget that displays a {@link GPlugin.Plugin} in a user friendly way,
     * intended to be placed in a {@link Gtk.ListBox}.
     * @gir-type Class
     * @since 0.38
     */
    class PluginRow
        extends Gtk.ListBoxRow
        implements Gtk.Accessible, Gtk.Actionable, Gtk.Buildable, Gtk.ConstraintTarget
    {
        static $gtype: GObject.GType<PluginRow>;

        // Properties

        /**
         * The {@link GPlugin.Plugin} whose info should be displayed.
         * @since 0.38
         */
        get plugin(): GObject.Object | null;
        set plugin(val: GObject.Object | null);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PluginRow.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PluginRow.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): PluginRow;

        // Signals

        /** @signal */
        connect<K extends keyof PluginRow.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PluginRow.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof PluginRow.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PluginRow.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof PluginRow.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PluginRow.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Returns the {@link GPlugin.Plugin} that's being displayed.
         * @returns The plugin that's being displayed, or          `null` if the row is empty.
         */
        get_plugin(): GPlugin.Plugin | null;
        /**
         * Returns a key that can be used to sort this row.
         * @returns The sort key.
         */
        get_sort_key(): string;
        /**
         * Matches this row instance against some text to be searched for.
         * @param text The text to search for.
         * @returns Whether the row matches the text or not.
         */
        matches_search(text: string): boolean;
        /**
         * Sets the {@link GPlugin.Plugin} that should be displayed.
         *
         * A `plugin` value of `null` will clear the widget.
         * @param plugin The plugin instance.
         */
        set_plugin(plugin: GPlugin.Plugin | null): void;
        /**
         * The name of the action with which this widget should be associated.
         * @default null
         * @category Inherited from Gtk.Actionable
         */
        get action_name(): string | null;
        set action_name(val: string | null);
        /**
         * The name of the action with which this widget should be associated.
         * @default null
         * @category Inherited from Gtk.Actionable
         */
        get actionName(): string | null;
        set actionName(val: string | null);
        /**
         * The target value of the actionable widget's action.
         * @category Inherited from Gtk.Actionable
         */
        get action_target(): GLib.Variant;
        set action_target(val: GLib.Variant);
        /**
         * The target value of the actionable widget's action.
         * @category Inherited from Gtk.Actionable
         */
        get actionTarget(): GLib.Variant;
        set actionTarget(val: GLib.Variant);
        /**
         * Gets the action name for `actionable`.
         * @returns the action name
         */
        get_action_name(): string | null;
        /**
         * Gets the current target value of `actionable`.
         * @returns the current target value
         */
        get_action_target_value(): GLib.Variant | null;
        /**
         * Specifies the name of the action with which this widget should be
         * associated.
         *
         * If `action_name` is `null` then the widget will be unassociated from
         * any previous action.
         *
         * Usually this function is used when the widget is located (or will be
         * located) within the hierarchy of a {@link Gtk.ApplicationWindow}.
         *
         * Names are of the form &#x201C;win.save&#x201D; or &#x201C;app.quit&#x201D; for actions on the
         * containing {@link ApplicationWindow} or its associated {@link Application},
         * respectively. This is the same form used for actions in the {@link Gio.Menu}
         * associated with the window.
         * @param action_name an action name
         */
        set_action_name(action_name: string | null): void;
        /**
         * Sets the target value of an actionable widget.
         *
         * If `target_value` is `null` then the target value is unset.
         *
         * The target value has two purposes. First, it is used as the parameter
         * to activation of the action associated with the {@link Gtk.Actionable} widget.
         * Second, it is used to determine if the widget should be rendered as
         * &#x201C;active&#x201D; &#x2014; the widget is active if the state is equal to the given target.
         *
         * Consider the example of associating a set of buttons with a {@link Gio.Action}
         * with string state in a typical &#x201C;radio button&#x201D; situation. Each button
         * will be associated with the same action, but with a different target
         * value for that action. Clicking on a particular button will activate
         * the action with the target of that button, which will typically cause
         * the action&#x2019;s state to change to that value. Since the action&#x2019;s state
         * is now equal to the target value of the button, the button will now
         * be rendered as active (and the other buttons, with different targets,
         * rendered inactive).
         * @param target_value a {@link GLib.Variant} to set as the target value
         */
        set_action_target_value(target_value: GLib.Variant | null): void;
        /**
         * Sets the action-name and associated string target value of an
         * actionable widget.
         *
         * `detailed_action_name` is a string in the format accepted by
         * {@link Gio.Action.parse_detailed_name}.
         * @param detailed_action_name the detailed action name
         */
        set_detailed_action_name(detailed_action_name: string): void;
        /**
         * Gets the action name for `actionable`.
         * @virtual
         */
        vfunc_get_action_name(): string | null;
        /**
         * Gets the current target value of `actionable`.
         * @virtual
         */
        vfunc_get_action_target_value(): GLib.Variant | null;
        /**
         * Specifies the name of the action with which this widget should be
         * associated.
         *
         * If `action_name` is `null` then the widget will be unassociated from
         * any previous action.
         *
         * Usually this function is used when the widget is located (or will be
         * located) within the hierarchy of a {@link Gtk.ApplicationWindow}.
         *
         * Names are of the form &#x201C;win.save&#x201D; or &#x201C;app.quit&#x201D; for actions on the
         * containing {@link ApplicationWindow} or its associated {@link Application},
         * respectively. This is the same form used for actions in the {@link Gio.Menu}
         * associated with the window.
         * @param action_name an action name
         * @virtual
         */
        vfunc_set_action_name(action_name: string | null): void;
        /**
         * Sets the target value of an actionable widget.
         *
         * If `target_value` is `null` then the target value is unset.
         *
         * The target value has two purposes. First, it is used as the parameter
         * to activation of the action associated with the {@link Gtk.Actionable} widget.
         * Second, it is used to determine if the widget should be rendered as
         * &#x201C;active&#x201D; &#x2014; the widget is active if the state is equal to the given target.
         *
         * Consider the example of associating a set of buttons with a {@link Gio.Action}
         * with string state in a typical &#x201C;radio button&#x201D; situation. Each button
         * will be associated with the same action, but with a different target
         * value for that action. Clicking on a particular button will activate
         * the action with the target of that button, which will typically cause
         * the action&#x2019;s state to change to that value. Since the action&#x2019;s state
         * is now equal to the target value of the button, the button will now
         * be rendered as active (and the other buttons, with different targets,
         * rendered inactive).
         * @param target_value a {@link GLib.Variant} to set as the target value
         * @virtual
         */
        vfunc_set_action_target_value(target_value: GLib.Variant | null): void;
    }

    namespace PluginSettingsList {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            'notify::settings': (pspec: GObject.ParamSpec) => void;
            'notify::baseline-child': (pspec: GObject.ParamSpec) => void;
            'notify::baseline-position': (pspec: GObject.ParamSpec) => void;
            'notify::homogeneous': (pspec: GObject.ParamSpec) => void;
            'notify::spacing': (pspec: GObject.ParamSpec) => void;
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
            'notify::orientation': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gtk.Box.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps,
                Gtk.Orientable.ConstructorProps {
            settings: Gio.Settings;
        }
    }

    /**
     * A {@link Gtk.ListBox} widget that displays all the settings from a plugin.
     * @gir-type Class
     * @since 0.40
     */
    class PluginSettingsList
        extends Gtk.Box
        implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Orientable
    {
        static $gtype: GObject.GType<PluginSettingsList>;

        // Properties

        /**
         * The {@link Gio.Settings} to display.
         */
        get settings(): Gio.Settings;
        set settings(val: Gio.Settings);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PluginSettingsList.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PluginSettingsList.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): PluginSettingsList;

        // Signals

        /** @signal */
        connect<K extends keyof PluginSettingsList.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PluginSettingsList.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof PluginSettingsList.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PluginSettingsList.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof PluginSettingsList.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PluginSettingsList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Returns the plugin settings that are being displayed.
         * @returns The settings being displayed.
         */
        get_settings(): Gio.Settings;
        /**
         * @param args
         */
        // Conflicted with Gtk.Widget.get_settings
        get_settings(...args: never[]): any;
        /**
         * This function will set which plugin settings to display.
         * @param settings The plugin settings to display.
         */
        set_settings(settings: Gio.Settings | null): void;
        /**
         * The orientation of the orientable.
         * @default Gtk.Orientation.HORIZONTAL
         * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);
        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`
         */
        get_orientation(): Gtk.Orientation;
        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable&#x2019;s new orientation
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }

    namespace View {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            'notify::manager': (pspec: GObject.ParamSpec) => void;
            'notify::settings-backend': (pspec: GObject.ParamSpec) => void;
            'notify::show-internal': (pspec: GObject.ParamSpec) => void;
            'notify::baseline-child': (pspec: GObject.ParamSpec) => void;
            'notify::baseline-position': (pspec: GObject.ParamSpec) => void;
            'notify::homogeneous': (pspec: GObject.ParamSpec) => void;
            'notify::spacing': (pspec: GObject.ParamSpec) => void;
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
            'notify::orientation': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gtk.Box.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps,
                Gtk.Orientable.ConstructorProps {
            manager: GPlugin.Manager;
            settings_backend: Gio.SettingsBackend | null;
            settingsBackend: Gio.SettingsBackend | null;
            show_internal: boolean;
            showInternal: boolean;
        }
    }

    /**
     * A widget that displays all the plugins and some basic information about
     * them.
     * @gir-type Class
     */
    class View extends Gtk.Box implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Orientable {
        static $gtype: GObject.GType<View>;

        // Properties

        /**
         * The plugin manager to display.
         */
        get manager(): GPlugin.Manager;
        set manager(val: GPlugin.Manager);
        /**
         * The {@link Gio.SettingsBackend} to use when viewing plugin settings.
         */
        get settings_backend(): Gio.SettingsBackend | null;
        set settings_backend(val: Gio.SettingsBackend | null);
        /**
         * The {@link Gio.SettingsBackend} to use when viewing plugin settings.
         */
        get settingsBackend(): Gio.SettingsBackend | null;
        set settingsBackend(val: Gio.SettingsBackend | null);
        /**
         * Whether or not to show internal plugins.
         * @default false
         */
        get show_internal(): boolean;
        set show_internal(val: boolean);
        /**
         * Whether or not to show internal plugins.
         * @default false
         */
        get showInternal(): boolean;
        set showInternal(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: View.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<View.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): View;

        // Signals

        /** @signal */
        connect<K extends keyof View.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, View.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof View.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, View.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof View.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<View.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Returns the plugin manager that is being displayed.
         * @returns The plugin manager to display.
         */
        get_manager(): GPlugin.Manager;
        /**
         * Gets the settings backend used when displaying plugin settings.
         *
         * Note, because we do not want to leak `G_SETTINGS_ENABLE_BACKEND` into
         * GPlugin users, this function returns a `gpointer`, and you should cast to
         * `GSettingsBackend *` after setting `G_SETTINGS_ENABLE_BACKEND` for the files
         * where you need it.
         * @returns The settings backend.
         */
        get_settings_backend(): any | null;
        /**
         * Gets whether or not `view` is showing internal plugins.
         * @returns `true` if internal plugins are being shown, otherwise `false`.
         */
        get_show_internal(): boolean;
        /**
         * This function will set which plugin manager to display.
         * @param manager The plugin manager to display.
         */
        set_manager(manager: GPlugin.Manager): void;
        /**
         * Sets the settings backend to use when displaying plugin settings.
         *
         * Note, because we do not want to leak `G_SETTINGS_ENABLE_BACKEND` into
         * GPlugin users, this function takes a `gpointer` instead of a
         * `GSettingsBackend *` but the type will be checked internally.
         * @param backend The settings backend to use. If `null`,           the default GSettings backend will be used.
         */
        set_settings_backend(backend: any | null): void;
        /**
         * This function will toggle whether or not the widget will show internal
         * plugins.
         * @param show_internal Whether or not to show internal plugins.
         */
        set_show_internal(show_internal: boolean): void;
        /**
         * Shows the plugin list overview.
         */
        show_overview(): void;
        /**
         * Shows a page for a single plugin.
         * @param plugin The plugin to show.
         */
        show_plugin(plugin: GPlugin.Plugin): void;
        /**
         * The orientation of the orientable.
         * @default Gtk.Orientation.HORIZONTAL
         * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);
        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`
         */
        get_orientation(): Gtk.Orientation;
        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable&#x2019;s new orientation
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }

    /**
     * @gir-type Alias
     */
    type PluginPageClass = typeof PluginPage;
    /**
     * @gir-type Alias
     */
    type PluginRowClass = typeof PluginRow;
    /**
     * @gir-type Alias
     */
    type PluginSettingsListClass = typeof PluginSettingsList;
    /**
     * @gir-type Alias
     */
    type ViewClass = typeof View;
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

export default GPluginGtk4;

// END
