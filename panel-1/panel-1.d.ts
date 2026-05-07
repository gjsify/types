
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
import type Adw from '@girs/adw-1';

export namespace Panel {

    /**
     * Panel-1
     */


    /**
     * @gir-type Enum
     */
    export namespace Area {
        export const $gtype: GObject.GType<Area>;
    }

    /**
     * The area of the panel.
     * @gir-type Enum
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
     * libpanel major version component (e.g. 1 if `PANEL_VERSION` is 1.2.3)
     */
    const MAJOR_VERSION: number;

    /**
     * libpanel micro version component (e.g. 3 if `PANEL_VERSION` is 1.2.3)
     */
    const MICRO_VERSION: number;

    /**
     * libpanel minor version component (e.g. 2 if `PANEL_VERSION` is 1.2.3)
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

    /**
     * @param major 
     * @param minor 
     * @param micro 
     */
    function check_version(major: number, minor: number, micro: number): boolean;

    function finalize(): void;

    function get_major_version(): number;

    function get_micro_version(): number;

    function get_minor_version(): number;

    function get_resource(): Gio.Resource;

    function init(): void;

    /**
     * @param closure 
     * @param return_value 
     * @param n_param_values 
     * @param param_values 
     * @param invocation_hint 
     * @param marshal_data 
     */
    function marshal_BOOLEAN__OBJECT_OBJECT(closure: GObject.Closure, return_value: (GObject.Value | any), n_param_values: number, param_values: (GObject.Value | any), invocation_hint: null, marshal_data: null): void;

    /**
     * @param closure 
     * @param return_value 
     * @param n_param_values 
     * @param param_values 
     * @param invocation_hint 
     * @param marshal_data 
     */
    function marshal_OBJECT__OBJECT(closure: GObject.Closure, return_value: (GObject.Value | any), n_param_values: number, param_values: (GObject.Value | any), invocation_hint: null, marshal_data: null): void;

    /**
     * @gir-type Callback
     */
    interface ActionActivateFunc {
        (instance: null, action_name: string, param: GLib.Variant): void;
    }

    /**
     * @gir-type Callback
     */
    interface FrameCallback {
        (frame: Frame): void;
    }

    /**
     * @gir-type Callback
     */
    interface WorkspaceForeach {
        (workspace: Workspace): void;
    }

    namespace ActionMuxer {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.ActionGroup.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class ActionMuxer extends GObject.Object implements Gio.ActionGroup {
        static $gtype: GObject.GType<ActionMuxer>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ActionMuxer.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ActionMuxer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): ActionMuxer;

        // Signals
        /** @signal */
        connect<K extends keyof ActionMuxer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ActionMuxer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ActionMuxer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ActionMuxer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ActionMuxer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ActionMuxer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Locates the {@link Gio.ActionGroup} inserted as `prefix`.
         * 
         * If no group was found matching `group`, `null` is returned.
         * @param prefix the name of the inserted action group
         * @returns a {@link Gio.ActionGroup} matching `prefix` if   found, otherwise `null`.
         */
        get_action_group(prefix: string): (Gio.ActionGroup | null);

        /**
         * @param prefix 
         * @param action_group 
         */
        insert_action_group(prefix: string, action_group: Gio.ActionGroup): void;

        /**
         * Gets a list of group names in the muxer.
         * @returns an array containing the names of groups within the muxer
         */
        list_groups(): string[];

        /**
         * @param prefix 
         */
        remove_action_group(prefix: string): void;

        remove_all(): void;

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
        activate_action(action_name: string, parameter: (GLib.Variant | null)): void;

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
        get_action_parameter_type(action_name: string): (GLib.VariantType | null);

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
        get_action_state(action_name: string): (GLib.Variant | null);

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
        get_action_state_hint(action_name: string): (GLib.Variant | null);

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
        get_action_state_type(action_name: string): (GLib.VariantType | null);

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
        vfunc_activate_action(action_name: string, parameter: (GLib.Variant | null)): void;

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
        vfunc_get_action_parameter_type(action_name: string): (GLib.VariantType | null);

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
        vfunc_get_action_state(action_name: string): (GLib.Variant | null);

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
        vfunc_get_action_state_hint(action_name: string): (GLib.Variant | null);

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
        vfunc_get_action_state_type(action_name: string): (GLib.VariantType | null);

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
    }


    namespace Application {
        // Signal signatures
        interface SignalSignatures extends Adw.Application.SignalSignatures {
            "notify::style-manager": (pspec: GObject.ParamSpec) => void;
            "notify::active-window": (pspec: GObject.ParamSpec) => void;
            "notify::autosave-interval": (pspec: GObject.ParamSpec) => void;
            "notify::menubar": (pspec: GObject.ParamSpec) => void;
            "notify::register-session": (pspec: GObject.ParamSpec) => void;
            "notify::screensaver-active": (pspec: GObject.ParamSpec) => void;
            "notify::support-save": (pspec: GObject.ParamSpec) => void;
            "notify::action-group": (pspec: GObject.ParamSpec) => void;
            "notify::application-id": (pspec: GObject.ParamSpec) => void;
            "notify::flags": (pspec: GObject.ParamSpec) => void;
            "notify::inactivity-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::is-busy": (pspec: GObject.ParamSpec) => void;
            "notify::is-registered": (pspec: GObject.ParamSpec) => void;
            "notify::is-remote": (pspec: GObject.ParamSpec) => void;
            "notify::resource-base-path": (pspec: GObject.ParamSpec) => void;
            "notify::version": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Adw.Application.ConstructorProps, Gio.ActionGroup.ConstructorProps, Gio.ActionMap.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class Application extends Adw.Application implements Gio.ActionGroup, Gio.ActionMap {
        static $gtype: GObject.GType<Application>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Application.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Application.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](application_id: string, flags: Gio.ApplicationFlags): Application;

        // Conflicted with Adw.Application.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof Application.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Application.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Application.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Application.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Application.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Application.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace ChangesDialog {
        // Signal signatures
        interface SignalSignatures extends Adw.AlertDialog.SignalSignatures {
            "notify::close-after-save": (pspec: GObject.ParamSpec) => void;
            "notify::body": (pspec: GObject.ParamSpec) => void;
            "notify::body-use-markup": (pspec: GObject.ParamSpec) => void;
            "notify::close-response": (pspec: GObject.ParamSpec) => void;
            "notify::default-response": (pspec: GObject.ParamSpec) => void;
            "notify::extra-child": (pspec: GObject.ParamSpec) => void;
            "notify::heading": (pspec: GObject.ParamSpec) => void;
            "notify::heading-use-markup": (pspec: GObject.ParamSpec) => void;
            "notify::prefer-wide-layout": (pspec: GObject.ParamSpec) => void;
            "notify::can-close": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::content-height": (pspec: GObject.ParamSpec) => void;
            "notify::content-width": (pspec: GObject.ParamSpec) => void;
            "notify::current-breakpoint": (pspec: GObject.ParamSpec) => void;
            "notify::default-widget": (pspec: GObject.ParamSpec) => void;
            "notify::focus-widget": (pspec: GObject.ParamSpec) => void;
            "notify::follows-content-size": (pspec: GObject.ParamSpec) => void;
            "notify::presentation-mode": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::can-target": (pspec: GObject.ParamSpec) => void;
            "notify::css-classes": (pspec: GObject.ParamSpec) => void;
            "notify::css-name": (pspec: GObject.ParamSpec) => void;
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::focusable": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::layout-manager": (pspec: GObject.ParamSpec) => void;
            "notify::limit-events": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::overflow": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::root": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Adw.AlertDialog.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps, Gtk.ShortcutManager.ConstructorProps {
            close_after_save: boolean;
            closeAfterSave: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class ChangesDialog extends Adw.AlertDialog implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.ShortcutManager {
        static $gtype: GObject.GType<ChangesDialog>;

        // Properties
        /**
         * This property requests that the widget close after saving.
         * @default false
         */
        get close_after_save(): boolean;
        set close_after_save(val: boolean);

        /**
         * This property requests that the widget close after saving.
         * @default false
         */
        get closeAfterSave(): boolean;
        set closeAfterSave(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ChangesDialog.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ChangesDialog.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): ChangesDialog;

        // Signals
        /** @signal */
        connect<K extends keyof ChangesDialog.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ChangesDialog.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ChangesDialog.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ChangesDialog.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ChangesDialog.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ChangesDialog.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param delegate 
         */
        add_delegate(delegate: SaveDelegate): void;

        get_close_after_save(): boolean;

        /**
         * @param parent 
         * @param cancellable 
         */
        run_async(parent: Gtk.Widget, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param parent 
         * @param cancellable 
         * @param callback 
         */
        run_async(parent: Gtk.Widget, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param parent 
         * @param cancellable 
         * @param callback 
         */
        run_async(parent: Gtk.Widget, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param result 
         */
        run_finish(result: Gio.AsyncResult): boolean;

        /**
         * @param close_after_save 
         */
        set_close_after_save(close_after_save: boolean): void;
    }


    namespace Dock {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            /**
             * Signal is emitted when a widget is requesting to be added via a
             * drag-n-drop event.
             * 
             * This is generally propagated via {@link Panel.Frame.SignalSignatures.adopt_widget | Panel.Frame::adopt-widget} to the
             * dock so that applications do not need to attach signal handlers
             * to every {@link Panel.Frame}.
             * @signal
             * @since 1.2
             * @run-last
             */
            "adopt-widget": (arg0: Widget) => (boolean | void);
            /**
             * This signal is emitted when a new frame is needed.
             * @signal
             * @since 1.2
             * @run-last
             */
            "create-frame": (arg0: Position) => Frame;
            /**
             * This signal is emitted when dragging of a panel begins.
             * @signal
             * @run-last
             */
            "panel-drag-begin": (arg0: Widget) => void;
            /**
             * This signal is emitted when dragging of a panel either
             * completes or was cancelled.
             * @signal
             * @run-last
             */
            "panel-drag-end": (arg0: Widget) => void;
            "notify::bottom-height": (pspec: GObject.ParamSpec) => void;
            "notify::can-reveal-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::can-reveal-end": (pspec: GObject.ParamSpec) => void;
            "notify::can-reveal-start": (pspec: GObject.ParamSpec) => void;
            "notify::can-reveal-top": (pspec: GObject.ParamSpec) => void;
            "notify::end-width": (pspec: GObject.ParamSpec) => void;
            "notify::reveal-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::reveal-end": (pspec: GObject.ParamSpec) => void;
            "notify::reveal-start": (pspec: GObject.ParamSpec) => void;
            "notify::reveal-top": (pspec: GObject.ParamSpec) => void;
            "notify::start-width": (pspec: GObject.ParamSpec) => void;
            "notify::top-height": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::can-target": (pspec: GObject.ParamSpec) => void;
            "notify::css-classes": (pspec: GObject.ParamSpec) => void;
            "notify::css-name": (pspec: GObject.ParamSpec) => void;
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::focusable": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::layout-manager": (pspec: GObject.ParamSpec) => void;
            "notify::limit-events": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::overflow": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::root": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-role": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Widget.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps {
            bottom_height: number;
            bottomHeight: number;
            can_reveal_bottom: boolean;
            canRevealBottom: boolean;
            can_reveal_end: boolean;
            canRevealEnd: boolean;
            can_reveal_start: boolean;
            canRevealStart: boolean;
            can_reveal_top: boolean;
            canRevealTop: boolean;
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
        }
    }

    /**
     * The {@link Panel.Dock} is a widget designed to contain widgets that can be
     * docked. Use the {@link Panel.Dock} as the top widget of your dockable UI.
     * 
     * A {@link Panel.Dock} is divided in 5 areas: {@link Panel.Area.TOP},
     * {@link Panel.Area.BOTTOM}, {@link Panel.Area.START}, {@link Panel.Area.END} represent
     * the surrounding areas that can revealed. {@link Panel.Area.CENTER}
     * represent the main area, that is always displayed and resized
     * depending on the reveal state of the surrounding areas.
     * 
     * It will contain a `PanelDockChild` for each of the areas in use,
     * albeit this is done by the widget.
     * @gir-type Class
     */
    class Dock extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<Dock>;

        // Properties
        /**
         * @default -1
         */
        get bottom_height(): number;
        set bottom_height(val: number);

        /**
         * @default -1
         */
        get bottomHeight(): number;
        set bottomHeight(val: number);

        /**
         * @read-only
         * @default false
         */
        get can_reveal_bottom(): boolean;

        /**
         * @read-only
         * @default false
         */
        get canRevealBottom(): boolean;

        /**
         * @read-only
         * @default false
         */
        get can_reveal_end(): boolean;

        /**
         * @read-only
         * @default false
         */
        get canRevealEnd(): boolean;

        /**
         * @read-only
         * @default false
         */
        get can_reveal_start(): boolean;

        /**
         * @read-only
         * @default false
         */
        get canRevealStart(): boolean;

        /**
         * @read-only
         * @default false
         */
        get can_reveal_top(): boolean;

        /**
         * @read-only
         * @default false
         */
        get canRevealTop(): boolean;

        /**
         * @default -1
         */
        get end_width(): number;
        set end_width(val: number);

        /**
         * @default -1
         */
        get endWidth(): number;
        set endWidth(val: number);

        /**
         * @default false
         */
        get reveal_bottom(): boolean;
        set reveal_bottom(val: boolean);

        /**
         * @default false
         */
        get revealBottom(): boolean;
        set revealBottom(val: boolean);

        /**
         * @default false
         */
        get reveal_end(): boolean;
        set reveal_end(val: boolean);

        /**
         * @default false
         */
        get revealEnd(): boolean;
        set revealEnd(val: boolean);

        /**
         * @default false
         */
        get reveal_start(): boolean;
        set reveal_start(val: boolean);

        /**
         * @default false
         */
        get revealStart(): boolean;
        set revealStart(val: boolean);

        /**
         * @default false
         */
        get reveal_top(): boolean;
        set reveal_top(val: boolean);

        /**
         * @default false
         */
        get revealTop(): boolean;
        set revealTop(val: boolean);

        /**
         * @default -1
         */
        get start_width(): number;
        set start_width(val: number);

        /**
         * @default -1
         */
        get startWidth(): number;
        set startWidth(val: number);

        /**
         * @default -1
         */
        get top_height(): number;
        set top_height(val: number);

        /**
         * @default -1
         */
        get topHeight(): number;
        set topHeight(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Dock.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Dock.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Dock;

        // Signals
        /** @signal */
        connect<K extends keyof Dock.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Dock.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Dock.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Dock.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Dock.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Dock.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param widget 
         * @virtual
         */
        vfunc_panel_drag_begin(widget: Widget): void;

        /**
         * @param widget 
         * @virtual
         */
        vfunc_panel_drag_end(widget: Widget): void;

        // Methods
        /**
         * Invokes a callback for each frame in the dock.
         * @param callback a function to be called on each frame
         */
        foreach_frame(callback: FrameCallback): void;

        /**
         * Tells if the panel area can be revealed.
         * @param area the panel area to check.
         * @returns whether it can reveal the area or not. If the is no child or the child is empty, will return `false`.
         */
        get_can_reveal_area(area: Area): boolean;

        /**
         * Tells if the bottom panel area can be revealed.
         * @returns whether it can reveal the bottom area or not. If the is no child or the child is empty, will return `false`.
         */
        get_can_reveal_bottom(): boolean;

        /**
         * Tells if the end panel area can be revealed.
         * @returns whether it can reveal the end area or not. If the is no child or the child is empty, will return `false`.
         */
        get_can_reveal_end(): boolean;

        /**
         * Tells if the start panel area can be revealed.
         * @returns whether it can reveal the start area or not. If the is no child or the child is empty, will return `false`.
         */
        get_can_reveal_start(): boolean;

        /**
         * Tells if the top panel area can be revealed.
         * @returns whether it can reveal the top area or not. If the is no child or the child is empty, will return `false`.
         */
        get_can_reveal_top(): boolean;

        /**
         * Tells if an area if revealed.
         * @param area the {@link Panel.Area} to return the reveal status of.
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
         * Removes a widget from the dock. If `widget` is not a `DockChild`,
         * then the closest `DockChild` parent is removed.
         * @param widget a {@link Gtk.Widget} to remove
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
         * @param area a {@link Panel.Area}. {@link Panel.Area.CENTER} is an invalid value.
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

        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         * 
         * The accessible role cannot be changed once set.
         * @default Gtk.AccessibleRole.NONE
          * @category Inherited from Gtk.Accessible
         */
        get accessible_role(): Gtk.AccessibleRole;
        set accessible_role(val: Gtk.AccessibleRole);

        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         * 
         * The accessible role cannot be changed once set.
         * @default Gtk.AccessibleRole.NONE
          * @category Inherited from Gtk.Accessible
         */
        get accessibleRole(): Gtk.AccessibleRole;
        set accessibleRole(val: Gtk.AccessibleRole);

        /**
         * Requests the user's screen reader to announce the given message.
         * 
         * This kind of notification is useful for messages that
         * either have only a visual representation or that are not
         * exposed visually at all, e.g. a notification about a
         * successful operation.
         * 
         * Also, by using this API, you can ensure that the message
         * does not interrupts the user's current screen reader output.
         * @param message the string to announce
         * @param priority the priority of the announcement
         */
        announce(message: string, priority: Gtk.AccessibleAnnouncementPriority): void;

        /**
         * Retrieves the accessible identifier for the accessible object.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations.
         * 
         * It is left to the accessible implementation to define the scope
         * and uniqueness of the identifier.
         * @returns the accessible identifier
         */
        get_accessible_id(): (string | null);

        /**
         * Retrieves the accessible parent for an accessible object.
         * 
         * This function returns `NULL` for top level widgets.
         * @returns the accessible parent
         */
        get_accessible_parent(): (Gtk.Accessible | null);

        /**
         * Retrieves the accessible role of an accessible object.
         * @returns the accessible role
         */
        get_accessible_role(): Gtk.AccessibleRole;

        /**
         * Retrieves the implementation for the given accessible object.
         * @returns the accessible implementation object
         */
        get_at_context(): Gtk.ATContext;

        /**
         * Queries the coordinates and dimensions of this accessible
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @returns true if the bounds are valid, and false otherwise
         */
        get_bounds(): [boolean, number, number, number, number];

        /**
         * Retrieves the first accessible child of an accessible object.
         * @returns the first accessible child
         */
        get_first_accessible_child(): (Gtk.Accessible | null);

        /**
         * Retrieves the next accessible sibling of an accessible object
         * @returns the next accessible sibling
         */
        get_next_accessible_sibling(): (Gtk.Accessible | null);

        /**
         * Queries a platform state, such as focus.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @returns the value of state for the accessible
         */
        get_platform_state(state: Gtk.AccessiblePlatformState): boolean;

        /**
         * Resets the accessible property to its default value.
         * @param property the accessible property
         */
        reset_property(property: Gtk.AccessibleProperty): void;

        /**
         * Resets the accessible relation to its default value.
         * @param relation the accessible relation
         */
        reset_relation(relation: Gtk.AccessibleRelation): void;

        /**
         * Resets the accessible state to its default value.
         * @param state the accessible state
         */
        reset_state(state: Gtk.AccessibleState): void;

        /**
         * Sets the parent and sibling of an accessible object.
         * 
         * This function is meant to be used by accessible implementations that are
         * not part of the widget hierarchy, and but act as a logical bridge between
         * widgets. For instance, if a widget creates an object that holds metadata
         * for each child, and you want that object to implement the {@link Gtk.Accessible}
         * interface, you will use this function to ensure that the parent of each
         * child widget is the metadata object, and the parent of each metadata
         * object is the container widget.
         * @param parent the parent accessible object
         * @param next_sibling the sibling accessible object
         */
        set_accessible_parent(parent: (Gtk.Accessible | null), next_sibling: (Gtk.Accessible | null)): void;

        /**
         * Updates the next accessible sibling.
         * 
         * That might be useful when a new child of a custom accessible
         * is created, and it needs to be linked to a previous child.
         * @param new_sibling the new next accessible sibling to set
         */
        update_next_accessible_sibling(new_sibling: (Gtk.Accessible | null)): void;

        /**
         * Informs ATs that the platform state has changed.
         * 
         * This function should be used by {@link Gtk.Accessible} implementations that
         * have a platform state but are not widgets. Widgets handle platform
         * states automatically.
         * @param state the platform state to update
         */
        update_platform_state(state: Gtk.AccessiblePlatformState): void;

        /**
         * Updates an array of accessible properties.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * property change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param properties an array of accessible properties
         * @param values an array of `GValues`, one for each property
         */
        update_property(properties: Gtk.AccessibleProperty[], values: (GObject.Value | any)[]): void;

        /**
         * Updates an array of accessible relations.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * relation change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param relations an array of accessible relations
         * @param values an array of `GValues`, one for each relation
         */
        update_relation(relations: Gtk.AccessibleRelation[], values: (GObject.Value | any)[]): void;

        /**
         * Updates an array of accessible states.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * state change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param states an array of accessible states
         * @param values an array of `GValues`, one for each state
         */
        update_state(states: Gtk.AccessibleState[], values: (GObject.Value | any)[]): void;

        /**
         * Retrieves the accessible identifier for the accessible object.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations.
         * 
         * It is left to the accessible implementation to define the scope
         * and uniqueness of the identifier.
         * @virtual
         */
        vfunc_get_accessible_id(): (string | null);

        /**
         * Retrieves the accessible parent for an accessible object.
         * 
         * This function returns `NULL` for top level widgets.
         * @virtual
         */
        vfunc_get_accessible_parent(): (Gtk.Accessible | null);

        /**
         * Retrieves the implementation for the given accessible object.
         * @virtual
         */
        vfunc_get_at_context(): (Gtk.ATContext | null);

        /**
         * Queries the coordinates and dimensions of this accessible
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @virtual
         */
        vfunc_get_bounds(): [boolean, number, number, number, number];

        /**
         * Retrieves the first accessible child of an accessible object.
         * @virtual
         */
        vfunc_get_first_accessible_child(): (Gtk.Accessible | null);

        /**
         * Retrieves the next accessible sibling of an accessible object
         * @virtual
         */
        vfunc_get_next_accessible_sibling(): (Gtk.Accessible | null);

        /**
         * Queries a platform state, such as focus.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @virtual
         */
        vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;

        /**
         * Gets the ID of the `buildable` object.
         * 
         * {@link Gtk.Builder} sets the name based on the ID attribute
         * of the `<object>` tag used to construct the `buildable`.
         * @returns the ID of the buildable object
         */
        get_buildable_id(): (string | null);

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
         * Similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         * @virtual
         */
        vfunc_custom_finished(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * Called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * Called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string): [boolean, Gtk.BuildableParser, never];

        /**
         * The getter corresponding to `set_id`. Implement this
         *   if you implement `set_id`.
         * @virtual
         */
        vfunc_get_id(): string;

        /**
         * Retrieves the internal child called `childname` of the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param childname name of child
         * @virtual
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

        /**
         * Called when a builder finishes the parsing
         *  of a UI definition. It is normally not necessary to implement this,
         *  unless you need to perform special cleanup actions. {@link Gtk.Window} sets
         *  the {@link Gtk.Widget.visible} property here.
         * @param builder 
         * @virtual
         */
        vfunc_parser_finished(builder: Gtk.Builder): void;

        /**
         * Sets a property of a buildable object.
         *  It is normally not necessary to implement this, `g_object_set_property()`
         *  is used by default. {@link Gtk.Window} implements this to delay showing itself
         *  (i.e. setting the {@link Gtk.Widget.visible} property) until the whole
         *  interface is created.
         * @param builder 
         * @param name 
         * @param value 
         * @virtual
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: unknown): void;

        /**
         * Stores the id attribute given in the {@link Gtk.Builder} UI definition.
         *   {@link Gtk.Widget} stores the name as object data. Implement this method if your
         *   object has some notion of &#x201C;ID&#x201D; and it makes sense to map the XML id
         *   attribute to it.
         * @param id 
         * @virtual
         */
        vfunc_set_id(id: string): void;
    }


    namespace DocumentWorkspace {
        // Signal signatures
        interface SignalSignatures extends Workspace.SignalSignatures {
            /**
             * This signal is used to add a {@link Panel.Widget} to the document workspace,
             * generally in the document grid.
             * @signal
             * @since 1.4
             * @run-last
             */
            "add-widget": (arg0: Widget, arg1: Position) => (boolean | void);
            /**
             * Creates a new {@link Panel.Frame} to be added to the document grid.
             * @signal
             * @since 1.4
             * @run-last
             */
            "create-frame": (arg0: Position) => Frame;
            "notify::dock": (pspec: GObject.ParamSpec) => void;
            "notify::grid": (pspec: GObject.ParamSpec) => void;
            "notify::statusbar": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::adaptive-preview": (pspec: GObject.ParamSpec) => void;
            "notify::content": (pspec: GObject.ParamSpec) => void;
            "notify::current-breakpoint": (pspec: GObject.ParamSpec) => void;
            "notify::dialogs": (pspec: GObject.ParamSpec) => void;
            "notify::visible-dialog": (pspec: GObject.ParamSpec) => void;
            "notify::show-menubar": (pspec: GObject.ParamSpec) => void;
            "notify::application": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::decorated": (pspec: GObject.ParamSpec) => void;
            "notify::default-height": (pspec: GObject.ParamSpec) => void;
            "notify::default-widget": (pspec: GObject.ParamSpec) => void;
            "notify::default-width": (pspec: GObject.ParamSpec) => void;
            "notify::deletable": (pspec: GObject.ParamSpec) => void;
            "notify::destroy-with-parent": (pspec: GObject.ParamSpec) => void;
            "notify::display": (pspec: GObject.ParamSpec) => void;
            "notify::focus-visible": (pspec: GObject.ParamSpec) => void;
            "notify::focus-widget": (pspec: GObject.ParamSpec) => void;
            "notify::fullscreened": (pspec: GObject.ParamSpec) => void;
            "notify::gravity": (pspec: GObject.ParamSpec) => void;
            "notify::handle-menubar-accel": (pspec: GObject.ParamSpec) => void;
            "notify::hide-on-close": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::is-active": (pspec: GObject.ParamSpec) => void;
            "notify::maximized": (pspec: GObject.ParamSpec) => void;
            "notify::mnemonics-visible": (pspec: GObject.ParamSpec) => void;
            "notify::modal": (pspec: GObject.ParamSpec) => void;
            "notify::resizable": (pspec: GObject.ParamSpec) => void;
            "notify::startup-id": (pspec: GObject.ParamSpec) => void;
            "notify::suspended": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::titlebar": (pspec: GObject.ParamSpec) => void;
            "notify::transient-for": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::can-target": (pspec: GObject.ParamSpec) => void;
            "notify::css-classes": (pspec: GObject.ParamSpec) => void;
            "notify::css-name": (pspec: GObject.ParamSpec) => void;
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::focusable": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::layout-manager": (pspec: GObject.ParamSpec) => void;
            "notify::limit-events": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::overflow": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::root": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Workspace.ConstructorProps, Gio.ActionGroup.ConstructorProps, Gio.ActionMap.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps, Gtk.Native.ConstructorProps, Gtk.Root.ConstructorProps, Gtk.ShortcutManager.ConstructorProps {
            dock: Dock;
            grid: Grid;
            statusbar: (Statusbar | null);
        }
    }

    /**
     * @gir-type Class
     */
    class DocumentWorkspace extends Workspace implements Gio.ActionGroup, Gio.ActionMap, Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Native, Gtk.Root, Gtk.ShortcutManager {
        static $gtype: GObject.GType<DocumentWorkspace>;

        // Properties
        /**
         * @read-only
         */
        get dock(): Dock;

        /**
         * @read-only
         */
        get grid(): Grid;

        /**
         * @read-only
         */
        get statusbar(): (Statusbar | null);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DocumentWorkspace.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<DocumentWorkspace.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): DocumentWorkspace;

        // Signals
        /** @signal */
        connect<K extends keyof DocumentWorkspace.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DocumentWorkspace.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DocumentWorkspace.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DocumentWorkspace.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DocumentWorkspace.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DocumentWorkspace.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * Requests the workspace add `widget` to the dock at `position`.
         * @param widget a {@link Panel.Widget}
         * @param position a {@link Panel.Position} or `null`
         * @virtual
         */
        vfunc_add_widget(widget: Widget, position: (Position | null)): boolean;

        // Methods
        /**
         * Requests the workspace add `widget` to the dock at `position`.
         * @param widget a {@link Panel.Widget}
         * @param position a {@link Panel.Position} or `null`
         * @returns `true` if `widget` was added; otherwise `false` and `widget`   will have `g_object_ref_sink()` called and unref'd from an idle   callback.
         */
        add_widget(widget: Widget, position: (Position | null)): boolean;

        /**
         * Get the {@link Panel.Dock} for the workspace.
         * @returns a {@link Panel.Dock}
         */
        get_dock(): Dock;

        /**
         * Get the document grid for the workspace.
         * @returns a {@link Panel.Grid}
         */
        get_grid(): Grid;

        /**
         * Gets the statusbar for the workspace.
         * @returns a {@link Panel.Statusbar}
         */
        get_statusbar(): (Statusbar | null);

        /**
         * Gets the titlebar for the workspace.
         * @returns a {@link Gtk.Widget} or `null`
         */
        get_titlebar(): (Gtk.Widget | null);

        /**
         * @param titlebar 
         */
        set_titlebar(titlebar: Gtk.Widget): void;

        /**
         * @param args 
         */
    // Conflicted with Gtk.Window.set_titlebar
        set_titlebar(...args: never[]): any;

        /**
         * Enables or disables an action installed with
         * {@link Gtk.WidgetClass.install_action}.
         * @param action_name action name, such as "clipboard.paste"
         * @param enabled whether the action is now enabled
         */
        action_set_enabled(action_name: string, enabled: boolean): void;
    }


    namespace Frame {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            /**
             * This signal is emitted when the frame should decide if it can adopt
             * a {@link Panel.Widget} dropped on the frame.
             * 
             * If `GDK_EVENT_STOP` is returned, then the widget will not be adopted.
             * @signal
             * @since 1.2
             * @run-last
             */
            "adopt-widget": (arg0: Widget) => (boolean | void);
            /**
             * This signal is emitted when the page widget will be closed.
             * @signal
             * @since 1.2
             * @run-last
             */
            "page-closed": (arg0: Widget) => void;
            "notify::closeable": (pspec: GObject.ParamSpec) => void;
            "notify::empty": (pspec: GObject.ParamSpec) => void;
            "notify::placeholder": (pspec: GObject.ParamSpec) => void;
            "notify::visible-child": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::can-target": (pspec: GObject.ParamSpec) => void;
            "notify::css-classes": (pspec: GObject.ParamSpec) => void;
            "notify::css-name": (pspec: GObject.ParamSpec) => void;
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::focusable": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::layout-manager": (pspec: GObject.ParamSpec) => void;
            "notify::limit-events": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::overflow": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::root": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-role": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Widget.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps, Gtk.Orientable.ConstructorProps {
            closeable: boolean;
            empty: boolean;
            placeholder: (Gtk.Widget | null);
            visible_child: (Widget | null);
            visibleChild: (Widget | null);
        }
    }

    /**
     * The {@link Panel.Frame} is a widget containing panels to display in an
     * area. The widgets are added internally in an {@link Adw.TabView} to
     * display them one at a time like in a stack.
     * 
     * A {@link Panel.Frame} can also have a header widget that will be displayed
     * above the panels.
     * @gir-type Class
     */
    class Frame extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Orientable {
        static $gtype: GObject.GType<Frame>;

        // Properties
        /**
         * @read-only
         * @default false
         */
        get closeable(): boolean;

        /**
         * @read-only
         * @default true
         */
        get empty(): boolean;

        get placeholder(): (Gtk.Widget | null);
        set placeholder(val: (Gtk.Widget | null));

        get visible_child(): (Widget | null);
        set visible_child(val: (Widget | null));

        get visibleChild(): (Widget | null);
        set visibleChild(val: (Widget | null));

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Frame.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Frame.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Frame;

        // Signals
        /** @signal */
        connect<K extends keyof Frame.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Frame.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Frame.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Frame.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Frame.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Frame.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param widget 
         * @virtual
         */
        vfunc_adopt_widget(widget: Widget): boolean;

        /**
         * @param widget 
         * @virtual
         */
        vfunc_page_closed(widget: Widget): void;

        // Methods
        /**
         * Adds a widget to the frame.
         * @param panel a {@link Panel.Widget} to add
         */
        add(panel: Widget): void;

        /**
         * Add `panel` before `sibling` in the {@link Panel.Frame}.
         * @param panel the {@link Panel.Widget} to add.
         * @param sibling the sibling {@link Panel.Widget} to add the panel before.
         */
        add_before(panel: Widget, sibling: Widget): void;

        /**
         * Tells if the panel frame is closeable.
         * @returns `true` if the panel frame is closeable.
         */
        get_closeable(): boolean;

        /**
         * Tells if the panel frame is empty.
         * @returns `true` if the panel is empty.
         */
        get_empty(): boolean;

        /**
         * Gets the header for the frame.
         * @returns a {@link Panel.FrameHeader} or `null`
         */
        get_header(): (FrameHeader | null);

        /**
         * Gets the number of pages in the panel frame.
         * @returns The number of pages.
         */
        get_n_pages(): number;

        /**
         * Gets the page with the given index, if any.
         * @param n the index of the page
         * @returns a {@link Panel.Widget} or `null`
         */
        get_page(n: number): (Widget | null);

        /**
         * Get the pages for the frame.
         * @returns a {@link Gtk.SelectionModel}
         */
        get_pages(): Gtk.SelectionModel;

        /**
         * Gets the placeholder widget, if any.
         * @returns a {@link Gtk.Widget} or `null`
         */
        get_placeholder(): (Gtk.Widget | null);

        /**
         * Gets the {@link Panel.Position} for the frame.
         * @returns a {@link Panel.Position}
         */
        get_position(): Position;

        /**
         * Gets the requested size for the panel frame.
         * @returns the requested size.
         */
        get_requested_size(): number;

        /**
         * Gets the widget of the currently visible child.
         * @returns a {@link Panel.Widget} or `null`
         */
        get_visible_child(): (Widget | null);

        /**
         * Removes a widget from the frame.
         * @param panel a {@link Panel.Widget} to remove.
         */
        remove(panel: Widget): void;

        /**
         * Set pinned state of `child`.
         * @param child a {@link Panel.Widget}
         * @param pinned if `widget` should be pinned
         */
        set_child_pinned(child: Widget, pinned: boolean): void;

        /**
         * Sets the header for the frame, such as a {@link Panel.FrameSwitcher}.
         * @param header a {@link Panel.FrameHeader}
         */
        set_header(header: (FrameHeader | null)): void;

        /**
         * Sets the placeholder widget for the frame.
         * 
         * The placeholder widget is displayed when there are no pages
         * to display in the frame.
         * @param placeholder a {@link Gtk.Widget} or `null`
         */
        set_placeholder(placeholder: (Gtk.Widget | null)): void;

        /**
         * Sets the requested size for the panel frame.
         * @param requested_size the requested size.
         */
        set_requested_size(requested_size: number): void;

        /**
         * Sets the current page to the child specified in `widget`.
         * @param widget a {@link Panel.Widget}
         */
        set_visible_child(widget: Widget): void;

        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         * 
         * The accessible role cannot be changed once set.
         * @default Gtk.AccessibleRole.NONE
          * @category Inherited from Gtk.Accessible
         */
        get accessible_role(): Gtk.AccessibleRole;
        set accessible_role(val: Gtk.AccessibleRole);

        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         * 
         * The accessible role cannot be changed once set.
         * @default Gtk.AccessibleRole.NONE
          * @category Inherited from Gtk.Accessible
         */
        get accessibleRole(): Gtk.AccessibleRole;
        set accessibleRole(val: Gtk.AccessibleRole);

        /**
         * The orientation of the orientable.
         * @default Gtk.Orientation.HORIZONTAL
          * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        /**
         * Requests the user's screen reader to announce the given message.
         * 
         * This kind of notification is useful for messages that
         * either have only a visual representation or that are not
         * exposed visually at all, e.g. a notification about a
         * successful operation.
         * 
         * Also, by using this API, you can ensure that the message
         * does not interrupts the user's current screen reader output.
         * @param message the string to announce
         * @param priority the priority of the announcement
         */
        announce(message: string, priority: Gtk.AccessibleAnnouncementPriority): void;

        /**
         * Retrieves the accessible identifier for the accessible object.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations.
         * 
         * It is left to the accessible implementation to define the scope
         * and uniqueness of the identifier.
         * @returns the accessible identifier
         */
        get_accessible_id(): (string | null);

        /**
         * Retrieves the accessible parent for an accessible object.
         * 
         * This function returns `NULL` for top level widgets.
         * @returns the accessible parent
         */
        get_accessible_parent(): (Gtk.Accessible | null);

        /**
         * Retrieves the accessible role of an accessible object.
         * @returns the accessible role
         */
        get_accessible_role(): Gtk.AccessibleRole;

        /**
         * Retrieves the implementation for the given accessible object.
         * @returns the accessible implementation object
         */
        get_at_context(): Gtk.ATContext;

        /**
         * Queries the coordinates and dimensions of this accessible
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @returns true if the bounds are valid, and false otherwise
         */
        get_bounds(): [boolean, number, number, number, number];

        /**
         * Retrieves the first accessible child of an accessible object.
         * @returns the first accessible child
         */
        get_first_accessible_child(): (Gtk.Accessible | null);

        /**
         * Retrieves the next accessible sibling of an accessible object
         * @returns the next accessible sibling
         */
        get_next_accessible_sibling(): (Gtk.Accessible | null);

        /**
         * Queries a platform state, such as focus.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @returns the value of state for the accessible
         */
        get_platform_state(state: Gtk.AccessiblePlatformState): boolean;

        /**
         * Resets the accessible property to its default value.
         * @param property the accessible property
         */
        reset_property(property: Gtk.AccessibleProperty): void;

        /**
         * Resets the accessible relation to its default value.
         * @param relation the accessible relation
         */
        reset_relation(relation: Gtk.AccessibleRelation): void;

        /**
         * Resets the accessible state to its default value.
         * @param state the accessible state
         */
        reset_state(state: Gtk.AccessibleState): void;

        /**
         * Sets the parent and sibling of an accessible object.
         * 
         * This function is meant to be used by accessible implementations that are
         * not part of the widget hierarchy, and but act as a logical bridge between
         * widgets. For instance, if a widget creates an object that holds metadata
         * for each child, and you want that object to implement the {@link Gtk.Accessible}
         * interface, you will use this function to ensure that the parent of each
         * child widget is the metadata object, and the parent of each metadata
         * object is the container widget.
         * @param parent the parent accessible object
         * @param next_sibling the sibling accessible object
         */
        set_accessible_parent(parent: (Gtk.Accessible | null), next_sibling: (Gtk.Accessible | null)): void;

        /**
         * Updates the next accessible sibling.
         * 
         * That might be useful when a new child of a custom accessible
         * is created, and it needs to be linked to a previous child.
         * @param new_sibling the new next accessible sibling to set
         */
        update_next_accessible_sibling(new_sibling: (Gtk.Accessible | null)): void;

        /**
         * Informs ATs that the platform state has changed.
         * 
         * This function should be used by {@link Gtk.Accessible} implementations that
         * have a platform state but are not widgets. Widgets handle platform
         * states automatically.
         * @param state the platform state to update
         */
        update_platform_state(state: Gtk.AccessiblePlatformState): void;

        /**
         * Updates an array of accessible properties.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * property change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param properties an array of accessible properties
         * @param values an array of `GValues`, one for each property
         */
        update_property(properties: Gtk.AccessibleProperty[], values: (GObject.Value | any)[]): void;

        /**
         * Updates an array of accessible relations.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * relation change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param relations an array of accessible relations
         * @param values an array of `GValues`, one for each relation
         */
        update_relation(relations: Gtk.AccessibleRelation[], values: (GObject.Value | any)[]): void;

        /**
         * Updates an array of accessible states.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * state change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param states an array of accessible states
         * @param values an array of `GValues`, one for each state
         */
        update_state(states: Gtk.AccessibleState[], values: (GObject.Value | any)[]): void;

        /**
         * Retrieves the accessible identifier for the accessible object.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations.
         * 
         * It is left to the accessible implementation to define the scope
         * and uniqueness of the identifier.
         * @virtual
         */
        vfunc_get_accessible_id(): (string | null);

        /**
         * Retrieves the accessible parent for an accessible object.
         * 
         * This function returns `NULL` for top level widgets.
         * @virtual
         */
        vfunc_get_accessible_parent(): (Gtk.Accessible | null);

        /**
         * Retrieves the implementation for the given accessible object.
         * @virtual
         */
        vfunc_get_at_context(): (Gtk.ATContext | null);

        /**
         * Queries the coordinates and dimensions of this accessible
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @virtual
         */
        vfunc_get_bounds(): [boolean, number, number, number, number];

        /**
         * Retrieves the first accessible child of an accessible object.
         * @virtual
         */
        vfunc_get_first_accessible_child(): (Gtk.Accessible | null);

        /**
         * Retrieves the next accessible sibling of an accessible object
         * @virtual
         */
        vfunc_get_next_accessible_sibling(): (Gtk.Accessible | null);

        /**
         * Queries a platform state, such as focus.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @virtual
         */
        vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;

        /**
         * Gets the ID of the `buildable` object.
         * 
         * {@link Gtk.Builder} sets the name based on the ID attribute
         * of the `<object>` tag used to construct the `buildable`.
         * @returns the ID of the buildable object
         */
        get_buildable_id(): (string | null);

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
         * Similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         * @virtual
         */
        vfunc_custom_finished(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * Called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * Called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string): [boolean, Gtk.BuildableParser, never];

        /**
         * The getter corresponding to `set_id`. Implement this
         *   if you implement `set_id`.
         * @virtual
         */
        vfunc_get_id(): string;

        /**
         * Retrieves the internal child called `childname` of the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param childname name of child
         * @virtual
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

        /**
         * Called when a builder finishes the parsing
         *  of a UI definition. It is normally not necessary to implement this,
         *  unless you need to perform special cleanup actions. {@link Gtk.Window} sets
         *  the {@link Gtk.Widget.visible} property here.
         * @param builder 
         * @virtual
         */
        vfunc_parser_finished(builder: Gtk.Builder): void;

        /**
         * Sets a property of a buildable object.
         *  It is normally not necessary to implement this, `g_object_set_property()`
         *  is used by default. {@link Gtk.Window} implements this to delay showing itself
         *  (i.e. setting the {@link Gtk.Widget.visible} property) until the whole
         *  interface is created.
         * @param builder 
         * @param name 
         * @param value 
         * @virtual
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: unknown): void;

        /**
         * Stores the id attribute given in the {@link Gtk.Builder} UI definition.
         *   {@link Gtk.Widget} stores the name as object data. Implement this method if your
         *   object has some notion of &#x201C;ID&#x201D; and it makes sense to map the XML id
         *   attribute to it.
         * @param id 
         * @virtual
         */
        vfunc_set_id(id: string): void;

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


    namespace FrameHeaderBar {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            "notify::show-icon": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::can-target": (pspec: GObject.ParamSpec) => void;
            "notify::css-classes": (pspec: GObject.ParamSpec) => void;
            "notify::css-name": (pspec: GObject.ParamSpec) => void;
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::focusable": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::layout-manager": (pspec: GObject.ParamSpec) => void;
            "notify::limit-events": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::overflow": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::root": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-role": (pspec: GObject.ParamSpec) => void;
            "notify::frame": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Widget.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps, FrameHeader.ConstructorProps {
            show_icon: boolean;
            showIcon: boolean;
        }
    }

    /**
     * A header bar for {@link Panel.Frame}. It can optionally show an icon, it
     * can have a popover to be displace, and it can also have prefix and
     * suffix widgets.
     * 
     * It is an implementation of {@link Panel.FrameHeader}
     * @gir-type Class
     */
    class FrameHeaderBar extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, FrameHeader {
        static $gtype: GObject.GType<FrameHeaderBar>;

        // Properties
        /**
         * Whether to show the icon or not.
         * @default false
         */
        get show_icon(): boolean;
        set show_icon(val: boolean);

        /**
         * Whether to show the icon or not.
         * @default false
         */
        get showIcon(): boolean;
        set showIcon(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FrameHeaderBar.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<FrameHeaderBar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): FrameHeaderBar;

        // Signals
        /** @signal */
        connect<K extends keyof FrameHeaderBar.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FrameHeaderBar.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof FrameHeaderBar.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FrameHeaderBar.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof FrameHeaderBar.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FrameHeaderBar.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets the menu popover attached to this menubar.
         * @returns a {@link Gtk.PopoverMenu}
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

        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         * 
         * The accessible role cannot be changed once set.
         * @default Gtk.AccessibleRole.NONE
          * @category Inherited from Gtk.Accessible
         */
        get accessible_role(): Gtk.AccessibleRole;
        set accessible_role(val: Gtk.AccessibleRole);

        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         * 
         * The accessible role cannot be changed once set.
         * @default Gtk.AccessibleRole.NONE
          * @category Inherited from Gtk.Accessible
         */
        get accessibleRole(): Gtk.AccessibleRole;
        set accessibleRole(val: Gtk.AccessibleRole);

        /**
         * The frame the header is attached to, or `null`.
          * @category Inherited from Panel.FrameHeader
         */
        get frame(): (Frame | null);
        set frame(val: (Frame | null));

        /**
         * Requests the user's screen reader to announce the given message.
         * 
         * This kind of notification is useful for messages that
         * either have only a visual representation or that are not
         * exposed visually at all, e.g. a notification about a
         * successful operation.
         * 
         * Also, by using this API, you can ensure that the message
         * does not interrupts the user's current screen reader output.
         * @param message the string to announce
         * @param priority the priority of the announcement
         */
        announce(message: string, priority: Gtk.AccessibleAnnouncementPriority): void;

        /**
         * Retrieves the accessible identifier for the accessible object.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations.
         * 
         * It is left to the accessible implementation to define the scope
         * and uniqueness of the identifier.
         * @returns the accessible identifier
         */
        get_accessible_id(): (string | null);

        /**
         * Retrieves the accessible parent for an accessible object.
         * 
         * This function returns `NULL` for top level widgets.
         * @returns the accessible parent
         */
        get_accessible_parent(): (Gtk.Accessible | null);

        /**
         * Retrieves the accessible role of an accessible object.
         * @returns the accessible role
         */
        get_accessible_role(): Gtk.AccessibleRole;

        /**
         * Retrieves the implementation for the given accessible object.
         * @returns the accessible implementation object
         */
        get_at_context(): Gtk.ATContext;

        /**
         * Queries the coordinates and dimensions of this accessible
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @returns true if the bounds are valid, and false otherwise
         */
        get_bounds(): [boolean, number, number, number, number];

        /**
         * Retrieves the first accessible child of an accessible object.
         * @returns the first accessible child
         */
        get_first_accessible_child(): (Gtk.Accessible | null);

        /**
         * Retrieves the next accessible sibling of an accessible object
         * @returns the next accessible sibling
         */
        get_next_accessible_sibling(): (Gtk.Accessible | null);

        /**
         * Queries a platform state, such as focus.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @returns the value of state for the accessible
         */
        get_platform_state(state: Gtk.AccessiblePlatformState): boolean;

        /**
         * Resets the accessible property to its default value.
         * @param property the accessible property
         */
        reset_property(property: Gtk.AccessibleProperty): void;

        /**
         * Resets the accessible relation to its default value.
         * @param relation the accessible relation
         */
        reset_relation(relation: Gtk.AccessibleRelation): void;

        /**
         * Resets the accessible state to its default value.
         * @param state the accessible state
         */
        reset_state(state: Gtk.AccessibleState): void;

        /**
         * Sets the parent and sibling of an accessible object.
         * 
         * This function is meant to be used by accessible implementations that are
         * not part of the widget hierarchy, and but act as a logical bridge between
         * widgets. For instance, if a widget creates an object that holds metadata
         * for each child, and you want that object to implement the {@link Gtk.Accessible}
         * interface, you will use this function to ensure that the parent of each
         * child widget is the metadata object, and the parent of each metadata
         * object is the container widget.
         * @param parent the parent accessible object
         * @param next_sibling the sibling accessible object
         */
        set_accessible_parent(parent: (Gtk.Accessible | null), next_sibling: (Gtk.Accessible | null)): void;

        /**
         * Updates the next accessible sibling.
         * 
         * That might be useful when a new child of a custom accessible
         * is created, and it needs to be linked to a previous child.
         * @param new_sibling the new next accessible sibling to set
         */
        update_next_accessible_sibling(new_sibling: (Gtk.Accessible | null)): void;

        /**
         * Informs ATs that the platform state has changed.
         * 
         * This function should be used by {@link Gtk.Accessible} implementations that
         * have a platform state but are not widgets. Widgets handle platform
         * states automatically.
         * @param state the platform state to update
         */
        update_platform_state(state: Gtk.AccessiblePlatformState): void;

        /**
         * Updates an array of accessible properties.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * property change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param properties an array of accessible properties
         * @param values an array of `GValues`, one for each property
         */
        update_property(properties: Gtk.AccessibleProperty[], values: (GObject.Value | any)[]): void;

        /**
         * Updates an array of accessible relations.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * relation change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param relations an array of accessible relations
         * @param values an array of `GValues`, one for each relation
         */
        update_relation(relations: Gtk.AccessibleRelation[], values: (GObject.Value | any)[]): void;

        /**
         * Updates an array of accessible states.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * state change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param states an array of accessible states
         * @param values an array of `GValues`, one for each state
         */
        update_state(states: Gtk.AccessibleState[], values: (GObject.Value | any)[]): void;

        /**
         * Retrieves the accessible identifier for the accessible object.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations.
         * 
         * It is left to the accessible implementation to define the scope
         * and uniqueness of the identifier.
         * @virtual
         */
        vfunc_get_accessible_id(): (string | null);

        /**
         * Retrieves the accessible parent for an accessible object.
         * 
         * This function returns `NULL` for top level widgets.
         * @virtual
         */
        vfunc_get_accessible_parent(): (Gtk.Accessible | null);

        /**
         * Retrieves the implementation for the given accessible object.
         * @virtual
         */
        vfunc_get_at_context(): (Gtk.ATContext | null);

        /**
         * Queries the coordinates and dimensions of this accessible
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @virtual
         */
        vfunc_get_bounds(): [boolean, number, number, number, number];

        /**
         * Retrieves the first accessible child of an accessible object.
         * @virtual
         */
        vfunc_get_first_accessible_child(): (Gtk.Accessible | null);

        /**
         * Retrieves the next accessible sibling of an accessible object
         * @virtual
         */
        vfunc_get_next_accessible_sibling(): (Gtk.Accessible | null);

        /**
         * Queries a platform state, such as focus.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @virtual
         */
        vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;

        /**
         * Gets the ID of the `buildable` object.
         * 
         * {@link Gtk.Builder} sets the name based on the ID attribute
         * of the `<object>` tag used to construct the `buildable`.
         * @returns the ID of the buildable object
         */
        get_buildable_id(): (string | null);

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
         * Similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         * @virtual
         */
        vfunc_custom_finished(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * Called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * Called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string): [boolean, Gtk.BuildableParser, never];

        /**
         * The getter corresponding to `set_id`. Implement this
         *   if you implement `set_id`.
         * @virtual
         */
        vfunc_get_id(): string;

        /**
         * Retrieves the internal child called `childname` of the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param childname name of child
         * @virtual
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

        /**
         * Called when a builder finishes the parsing
         *  of a UI definition. It is normally not necessary to implement this,
         *  unless you need to perform special cleanup actions. {@link Gtk.Window} sets
         *  the {@link Gtk.Widget.visible} property here.
         * @param builder 
         * @virtual
         */
        vfunc_parser_finished(builder: Gtk.Builder): void;

        /**
         * Sets a property of a buildable object.
         *  It is normally not necessary to implement this, `g_object_set_property()`
         *  is used by default. {@link Gtk.Window} implements this to delay showing itself
         *  (i.e. setting the {@link Gtk.Widget.visible} property) until the whole
         *  interface is created.
         * @param builder 
         * @param name 
         * @param value 
         * @virtual
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: unknown): void;

        /**
         * Stores the id attribute given in the {@link Gtk.Builder} UI definition.
         *   {@link Gtk.Widget} stores the name as object data. Implement this method if your
         *   object has some notion of &#x201C;ID&#x201D; and it makes sense to map the XML id
         *   attribute to it.
         * @param id 
         * @virtual
         */
        vfunc_set_id(id: string): void;

        /**
         * Add a widget into a the prefix area with a priority. The highest
         * the priority the closest to the start.
         * @param priority the priority
         * @param child a {@link Gtk.Widget}
         */
        add_prefix(priority: number, child: Gtk.Widget): void;

        /**
         * Add a widget into a the suffix area with a priority. The highest
         * the priority the closest to the start.
         * @param priority the priority
         * @param child a {@link Gtk.Widget}
         */
        add_suffix(priority: number, child: Gtk.Widget): void;

        /**
         * Tells if the panel widget can be drop onto the panel frame.
         * @param widget a {@link Panel.Widget}
         * @returns whether the widget can be dropped.
         */
        can_drop(widget: Widget): boolean;

        /**
         * Gets the frame the header is attached to.
         * @returns a {@link Panel.Frame} or `null`
         */
        get_frame(): (Frame | null);

        /**
         * Notifies the header that the visible page has changed.
         * @param widget a {@link Panel.Widget} or `null` if no page is visible
         */
        page_changed(widget: (Widget | null)): void;

        /**
         * Sets the frame the header is attached to.
         * @param frame a {@link Panel.Frame} or `null`
         */
        set_frame(frame: (Frame | null)): void;

        /**
         * Add a widget into a the prefix area with a priority. The highest
         * the priority the closest to the start.
         * @param priority the priority
         * @param child a {@link Gtk.Widget}
         * @virtual
         */
        vfunc_add_prefix(priority: number, child: Gtk.Widget): void;

        /**
         * Add a widget into a the suffix area with a priority. The highest
         * the priority the closest to the start.
         * @param priority the priority
         * @param child a {@link Gtk.Widget}
         * @virtual
         */
        vfunc_add_suffix(priority: number, child: Gtk.Widget): void;

        /**
         * Tells if the panel widget can be drop onto the panel frame.
         * @param widget a {@link Panel.Widget}
         * @virtual
         */
        vfunc_can_drop(widget: Widget): boolean;

        /**
         * Notifies the header that the visible page has changed.
         * @param widget a {@link Panel.Widget} or `null` if no page is visible
         * @virtual
         */
        vfunc_page_changed(widget: (Widget | null)): void;
    }


    namespace FrameSwitcher {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::can-target": (pspec: GObject.ParamSpec) => void;
            "notify::css-classes": (pspec: GObject.ParamSpec) => void;
            "notify::css-name": (pspec: GObject.ParamSpec) => void;
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::focusable": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::layout-manager": (pspec: GObject.ParamSpec) => void;
            "notify::limit-events": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::overflow": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::root": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-role": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
            "notify::frame": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Widget.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps, Gtk.Orientable.ConstructorProps, FrameHeader.ConstructorProps {

        }
    }

    /**
     * A {@link Panel.FrameSwitcher} is a {@link Panel.FrameHeader} that shows a row of
     * buttons to switch between {@link Gtk.Stack} pages, not disimilar to a
     * {@link Gtk.StackSwitcher}.
     * @gir-type Class
     */
    class FrameSwitcher extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Orientable, FrameHeader {
        static $gtype: GObject.GType<FrameSwitcher>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FrameSwitcher.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<FrameSwitcher.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): FrameSwitcher;

        // Signals
        /** @signal */
        connect<K extends keyof FrameSwitcher.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FrameSwitcher.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof FrameSwitcher.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FrameSwitcher.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof FrameSwitcher.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FrameSwitcher.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         * 
         * The accessible role cannot be changed once set.
         * @default Gtk.AccessibleRole.NONE
          * @category Inherited from Gtk.Accessible
         */
        get accessible_role(): Gtk.AccessibleRole;
        set accessible_role(val: Gtk.AccessibleRole);

        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         * 
         * The accessible role cannot be changed once set.
         * @default Gtk.AccessibleRole.NONE
          * @category Inherited from Gtk.Accessible
         */
        get accessibleRole(): Gtk.AccessibleRole;
        set accessibleRole(val: Gtk.AccessibleRole);

        /**
         * The orientation of the orientable.
         * @default Gtk.Orientation.HORIZONTAL
          * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        /**
         * The frame the header is attached to, or `null`.
          * @category Inherited from Panel.FrameHeader
         */
        get frame(): (Frame | null);
        set frame(val: (Frame | null));

        /**
         * Requests the user's screen reader to announce the given message.
         * 
         * This kind of notification is useful for messages that
         * either have only a visual representation or that are not
         * exposed visually at all, e.g. a notification about a
         * successful operation.
         * 
         * Also, by using this API, you can ensure that the message
         * does not interrupts the user's current screen reader output.
         * @param message the string to announce
         * @param priority the priority of the announcement
         */
        announce(message: string, priority: Gtk.AccessibleAnnouncementPriority): void;

        /**
         * Retrieves the accessible identifier for the accessible object.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations.
         * 
         * It is left to the accessible implementation to define the scope
         * and uniqueness of the identifier.
         * @returns the accessible identifier
         */
        get_accessible_id(): (string | null);

        /**
         * Retrieves the accessible parent for an accessible object.
         * 
         * This function returns `NULL` for top level widgets.
         * @returns the accessible parent
         */
        get_accessible_parent(): (Gtk.Accessible | null);

        /**
         * Retrieves the accessible role of an accessible object.
         * @returns the accessible role
         */
        get_accessible_role(): Gtk.AccessibleRole;

        /**
         * Retrieves the implementation for the given accessible object.
         * @returns the accessible implementation object
         */
        get_at_context(): Gtk.ATContext;

        /**
         * Queries the coordinates and dimensions of this accessible
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @returns true if the bounds are valid, and false otherwise
         */
        get_bounds(): [boolean, number, number, number, number];

        /**
         * Retrieves the first accessible child of an accessible object.
         * @returns the first accessible child
         */
        get_first_accessible_child(): (Gtk.Accessible | null);

        /**
         * Retrieves the next accessible sibling of an accessible object
         * @returns the next accessible sibling
         */
        get_next_accessible_sibling(): (Gtk.Accessible | null);

        /**
         * Queries a platform state, such as focus.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @returns the value of state for the accessible
         */
        get_platform_state(state: Gtk.AccessiblePlatformState): boolean;

        /**
         * Resets the accessible property to its default value.
         * @param property the accessible property
         */
        reset_property(property: Gtk.AccessibleProperty): void;

        /**
         * Resets the accessible relation to its default value.
         * @param relation the accessible relation
         */
        reset_relation(relation: Gtk.AccessibleRelation): void;

        /**
         * Resets the accessible state to its default value.
         * @param state the accessible state
         */
        reset_state(state: Gtk.AccessibleState): void;

        /**
         * Sets the parent and sibling of an accessible object.
         * 
         * This function is meant to be used by accessible implementations that are
         * not part of the widget hierarchy, and but act as a logical bridge between
         * widgets. For instance, if a widget creates an object that holds metadata
         * for each child, and you want that object to implement the {@link Gtk.Accessible}
         * interface, you will use this function to ensure that the parent of each
         * child widget is the metadata object, and the parent of each metadata
         * object is the container widget.
         * @param parent the parent accessible object
         * @param next_sibling the sibling accessible object
         */
        set_accessible_parent(parent: (Gtk.Accessible | null), next_sibling: (Gtk.Accessible | null)): void;

        /**
         * Updates the next accessible sibling.
         * 
         * That might be useful when a new child of a custom accessible
         * is created, and it needs to be linked to a previous child.
         * @param new_sibling the new next accessible sibling to set
         */
        update_next_accessible_sibling(new_sibling: (Gtk.Accessible | null)): void;

        /**
         * Informs ATs that the platform state has changed.
         * 
         * This function should be used by {@link Gtk.Accessible} implementations that
         * have a platform state but are not widgets. Widgets handle platform
         * states automatically.
         * @param state the platform state to update
         */
        update_platform_state(state: Gtk.AccessiblePlatformState): void;

        /**
         * Updates an array of accessible properties.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * property change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param properties an array of accessible properties
         * @param values an array of `GValues`, one for each property
         */
        update_property(properties: Gtk.AccessibleProperty[], values: (GObject.Value | any)[]): void;

        /**
         * Updates an array of accessible relations.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * relation change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param relations an array of accessible relations
         * @param values an array of `GValues`, one for each relation
         */
        update_relation(relations: Gtk.AccessibleRelation[], values: (GObject.Value | any)[]): void;

        /**
         * Updates an array of accessible states.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * state change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param states an array of accessible states
         * @param values an array of `GValues`, one for each state
         */
        update_state(states: Gtk.AccessibleState[], values: (GObject.Value | any)[]): void;

        /**
         * Retrieves the accessible identifier for the accessible object.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations.
         * 
         * It is left to the accessible implementation to define the scope
         * and uniqueness of the identifier.
         * @virtual
         */
        vfunc_get_accessible_id(): (string | null);

        /**
         * Retrieves the accessible parent for an accessible object.
         * 
         * This function returns `NULL` for top level widgets.
         * @virtual
         */
        vfunc_get_accessible_parent(): (Gtk.Accessible | null);

        /**
         * Retrieves the implementation for the given accessible object.
         * @virtual
         */
        vfunc_get_at_context(): (Gtk.ATContext | null);

        /**
         * Queries the coordinates and dimensions of this accessible
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @virtual
         */
        vfunc_get_bounds(): [boolean, number, number, number, number];

        /**
         * Retrieves the first accessible child of an accessible object.
         * @virtual
         */
        vfunc_get_first_accessible_child(): (Gtk.Accessible | null);

        /**
         * Retrieves the next accessible sibling of an accessible object
         * @virtual
         */
        vfunc_get_next_accessible_sibling(): (Gtk.Accessible | null);

        /**
         * Queries a platform state, such as focus.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @virtual
         */
        vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;

        /**
         * Gets the ID of the `buildable` object.
         * 
         * {@link Gtk.Builder} sets the name based on the ID attribute
         * of the `<object>` tag used to construct the `buildable`.
         * @returns the ID of the buildable object
         */
        get_buildable_id(): (string | null);

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
         * Similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         * @virtual
         */
        vfunc_custom_finished(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * Called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * Called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string): [boolean, Gtk.BuildableParser, never];

        /**
         * The getter corresponding to `set_id`. Implement this
         *   if you implement `set_id`.
         * @virtual
         */
        vfunc_get_id(): string;

        /**
         * Retrieves the internal child called `childname` of the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param childname name of child
         * @virtual
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

        /**
         * Called when a builder finishes the parsing
         *  of a UI definition. It is normally not necessary to implement this,
         *  unless you need to perform special cleanup actions. {@link Gtk.Window} sets
         *  the {@link Gtk.Widget.visible} property here.
         * @param builder 
         * @virtual
         */
        vfunc_parser_finished(builder: Gtk.Builder): void;

        /**
         * Sets a property of a buildable object.
         *  It is normally not necessary to implement this, `g_object_set_property()`
         *  is used by default. {@link Gtk.Window} implements this to delay showing itself
         *  (i.e. setting the {@link Gtk.Widget.visible} property) until the whole
         *  interface is created.
         * @param builder 
         * @param name 
         * @param value 
         * @virtual
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: unknown): void;

        /**
         * Stores the id attribute given in the {@link Gtk.Builder} UI definition.
         *   {@link Gtk.Widget} stores the name as object data. Implement this method if your
         *   object has some notion of &#x201C;ID&#x201D; and it makes sense to map the XML id
         *   attribute to it.
         * @param id 
         * @virtual
         */
        vfunc_set_id(id: string): void;

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

        /**
         * Add a widget into a the prefix area with a priority. The highest
         * the priority the closest to the start.
         * @param priority the priority
         * @param child a {@link Gtk.Widget}
         */
        add_prefix(priority: number, child: Gtk.Widget): void;

        /**
         * Add a widget into a the suffix area with a priority. The highest
         * the priority the closest to the start.
         * @param priority the priority
         * @param child a {@link Gtk.Widget}
         */
        add_suffix(priority: number, child: Gtk.Widget): void;

        /**
         * Tells if the panel widget can be drop onto the panel frame.
         * @param widget a {@link Panel.Widget}
         * @returns whether the widget can be dropped.
         */
        can_drop(widget: Widget): boolean;

        /**
         * Gets the frame the header is attached to.
         * @returns a {@link Panel.Frame} or `null`
         */
        get_frame(): (Frame | null);

        /**
         * Notifies the header that the visible page has changed.
         * @param widget a {@link Panel.Widget} or `null` if no page is visible
         */
        page_changed(widget: (Widget | null)): void;

        /**
         * Sets the frame the header is attached to.
         * @param frame a {@link Panel.Frame} or `null`
         */
        set_frame(frame: (Frame | null)): void;

        /**
         * Add a widget into a the prefix area with a priority. The highest
         * the priority the closest to the start.
         * @param priority the priority
         * @param child a {@link Gtk.Widget}
         * @virtual
         */
        vfunc_add_prefix(priority: number, child: Gtk.Widget): void;

        /**
         * Add a widget into a the suffix area with a priority. The highest
         * the priority the closest to the start.
         * @param priority the priority
         * @param child a {@link Gtk.Widget}
         * @virtual
         */
        vfunc_add_suffix(priority: number, child: Gtk.Widget): void;

        /**
         * Tells if the panel widget can be drop onto the panel frame.
         * @param widget a {@link Panel.Widget}
         * @virtual
         */
        vfunc_can_drop(widget: Widget): boolean;

        /**
         * Notifies the header that the visible page has changed.
         * @param widget a {@link Panel.Widget} or `null` if no page is visible
         * @virtual
         */
        vfunc_page_changed(widget: (Widget | null)): void;
    }


    namespace FrameTabBar {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            "notify::autohide": (pspec: GObject.ParamSpec) => void;
            "notify::expand-tabs": (pspec: GObject.ParamSpec) => void;
            "notify::inverted": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::can-target": (pspec: GObject.ParamSpec) => void;
            "notify::css-classes": (pspec: GObject.ParamSpec) => void;
            "notify::css-name": (pspec: GObject.ParamSpec) => void;
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::focusable": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::layout-manager": (pspec: GObject.ParamSpec) => void;
            "notify::limit-events": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::overflow": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::root": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-role": (pspec: GObject.ParamSpec) => void;
            "notify::frame": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Widget.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps, FrameHeader.ConstructorProps {
            autohide: boolean;
            expand_tabs: boolean;
            expandTabs: boolean;
            inverted: boolean;
        }
    }

    /**
     * A {@link Panel.FrameHeader} that implements switching between tab views in
     * a {@link Panel.Frame}.
     * @gir-type Class
     */
    class FrameTabBar extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, FrameHeader {
        static $gtype: GObject.GType<FrameTabBar>;

        // Properties
        /**
         * Whether the tabs automatically hide.
         * @default false
         */
        get autohide(): boolean;
        set autohide(val: boolean);

        /**
         * Whether tabs expand to full width.
         * @default true
         */
        get expand_tabs(): boolean;
        set expand_tabs(val: boolean);

        /**
         * Whether tabs expand to full width.
         * @default true
         */
        get expandTabs(): boolean;
        set expandTabs(val: boolean);

        /**
         * Whether tabs use inverted layout.
         * @default false
         */
        get inverted(): boolean;
        set inverted(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FrameTabBar.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<FrameTabBar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): FrameTabBar;

        // Signals
        /** @signal */
        connect<K extends keyof FrameTabBar.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FrameTabBar.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof FrameTabBar.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FrameTabBar.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof FrameTabBar.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FrameTabBar.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
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

        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         * 
         * The accessible role cannot be changed once set.
         * @default Gtk.AccessibleRole.NONE
          * @category Inherited from Gtk.Accessible
         */
        get accessible_role(): Gtk.AccessibleRole;
        set accessible_role(val: Gtk.AccessibleRole);

        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         * 
         * The accessible role cannot be changed once set.
         * @default Gtk.AccessibleRole.NONE
          * @category Inherited from Gtk.Accessible
         */
        get accessibleRole(): Gtk.AccessibleRole;
        set accessibleRole(val: Gtk.AccessibleRole);

        /**
         * The frame the header is attached to, or `null`.
          * @category Inherited from Panel.FrameHeader
         */
        get frame(): (Frame | null);
        set frame(val: (Frame | null));

        /**
         * Requests the user's screen reader to announce the given message.
         * 
         * This kind of notification is useful for messages that
         * either have only a visual representation or that are not
         * exposed visually at all, e.g. a notification about a
         * successful operation.
         * 
         * Also, by using this API, you can ensure that the message
         * does not interrupts the user's current screen reader output.
         * @param message the string to announce
         * @param priority the priority of the announcement
         */
        announce(message: string, priority: Gtk.AccessibleAnnouncementPriority): void;

        /**
         * Retrieves the accessible identifier for the accessible object.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations.
         * 
         * It is left to the accessible implementation to define the scope
         * and uniqueness of the identifier.
         * @returns the accessible identifier
         */
        get_accessible_id(): (string | null);

        /**
         * Retrieves the accessible parent for an accessible object.
         * 
         * This function returns `NULL` for top level widgets.
         * @returns the accessible parent
         */
        get_accessible_parent(): (Gtk.Accessible | null);

        /**
         * Retrieves the accessible role of an accessible object.
         * @returns the accessible role
         */
        get_accessible_role(): Gtk.AccessibleRole;

        /**
         * Retrieves the implementation for the given accessible object.
         * @returns the accessible implementation object
         */
        get_at_context(): Gtk.ATContext;

        /**
         * Queries the coordinates and dimensions of this accessible
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @returns true if the bounds are valid, and false otherwise
         */
        get_bounds(): [boolean, number, number, number, number];

        /**
         * Retrieves the first accessible child of an accessible object.
         * @returns the first accessible child
         */
        get_first_accessible_child(): (Gtk.Accessible | null);

        /**
         * Retrieves the next accessible sibling of an accessible object
         * @returns the next accessible sibling
         */
        get_next_accessible_sibling(): (Gtk.Accessible | null);

        /**
         * Queries a platform state, such as focus.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @returns the value of state for the accessible
         */
        get_platform_state(state: Gtk.AccessiblePlatformState): boolean;

        /**
         * Resets the accessible property to its default value.
         * @param property the accessible property
         */
        reset_property(property: Gtk.AccessibleProperty): void;

        /**
         * Resets the accessible relation to its default value.
         * @param relation the accessible relation
         */
        reset_relation(relation: Gtk.AccessibleRelation): void;

        /**
         * Resets the accessible state to its default value.
         * @param state the accessible state
         */
        reset_state(state: Gtk.AccessibleState): void;

        /**
         * Sets the parent and sibling of an accessible object.
         * 
         * This function is meant to be used by accessible implementations that are
         * not part of the widget hierarchy, and but act as a logical bridge between
         * widgets. For instance, if a widget creates an object that holds metadata
         * for each child, and you want that object to implement the {@link Gtk.Accessible}
         * interface, you will use this function to ensure that the parent of each
         * child widget is the metadata object, and the parent of each metadata
         * object is the container widget.
         * @param parent the parent accessible object
         * @param next_sibling the sibling accessible object
         */
        set_accessible_parent(parent: (Gtk.Accessible | null), next_sibling: (Gtk.Accessible | null)): void;

        /**
         * Updates the next accessible sibling.
         * 
         * That might be useful when a new child of a custom accessible
         * is created, and it needs to be linked to a previous child.
         * @param new_sibling the new next accessible sibling to set
         */
        update_next_accessible_sibling(new_sibling: (Gtk.Accessible | null)): void;

        /**
         * Informs ATs that the platform state has changed.
         * 
         * This function should be used by {@link Gtk.Accessible} implementations that
         * have a platform state but are not widgets. Widgets handle platform
         * states automatically.
         * @param state the platform state to update
         */
        update_platform_state(state: Gtk.AccessiblePlatformState): void;

        /**
         * Updates an array of accessible properties.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * property change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param properties an array of accessible properties
         * @param values an array of `GValues`, one for each property
         */
        update_property(properties: Gtk.AccessibleProperty[], values: (GObject.Value | any)[]): void;

        /**
         * Updates an array of accessible relations.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * relation change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param relations an array of accessible relations
         * @param values an array of `GValues`, one for each relation
         */
        update_relation(relations: Gtk.AccessibleRelation[], values: (GObject.Value | any)[]): void;

        /**
         * Updates an array of accessible states.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * state change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param states an array of accessible states
         * @param values an array of `GValues`, one for each state
         */
        update_state(states: Gtk.AccessibleState[], values: (GObject.Value | any)[]): void;

        /**
         * Retrieves the accessible identifier for the accessible object.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations.
         * 
         * It is left to the accessible implementation to define the scope
         * and uniqueness of the identifier.
         * @virtual
         */
        vfunc_get_accessible_id(): (string | null);

        /**
         * Retrieves the accessible parent for an accessible object.
         * 
         * This function returns `NULL` for top level widgets.
         * @virtual
         */
        vfunc_get_accessible_parent(): (Gtk.Accessible | null);

        /**
         * Retrieves the implementation for the given accessible object.
         * @virtual
         */
        vfunc_get_at_context(): (Gtk.ATContext | null);

        /**
         * Queries the coordinates and dimensions of this accessible
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @virtual
         */
        vfunc_get_bounds(): [boolean, number, number, number, number];

        /**
         * Retrieves the first accessible child of an accessible object.
         * @virtual
         */
        vfunc_get_first_accessible_child(): (Gtk.Accessible | null);

        /**
         * Retrieves the next accessible sibling of an accessible object
         * @virtual
         */
        vfunc_get_next_accessible_sibling(): (Gtk.Accessible | null);

        /**
         * Queries a platform state, such as focus.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @virtual
         */
        vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;

        /**
         * Gets the ID of the `buildable` object.
         * 
         * {@link Gtk.Builder} sets the name based on the ID attribute
         * of the `<object>` tag used to construct the `buildable`.
         * @returns the ID of the buildable object
         */
        get_buildable_id(): (string | null);

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
         * Similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         * @virtual
         */
        vfunc_custom_finished(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * Called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * Called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string): [boolean, Gtk.BuildableParser, never];

        /**
         * The getter corresponding to `set_id`. Implement this
         *   if you implement `set_id`.
         * @virtual
         */
        vfunc_get_id(): string;

        /**
         * Retrieves the internal child called `childname` of the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param childname name of child
         * @virtual
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

        /**
         * Called when a builder finishes the parsing
         *  of a UI definition. It is normally not necessary to implement this,
         *  unless you need to perform special cleanup actions. {@link Gtk.Window} sets
         *  the {@link Gtk.Widget.visible} property here.
         * @param builder 
         * @virtual
         */
        vfunc_parser_finished(builder: Gtk.Builder): void;

        /**
         * Sets a property of a buildable object.
         *  It is normally not necessary to implement this, `g_object_set_property()`
         *  is used by default. {@link Gtk.Window} implements this to delay showing itself
         *  (i.e. setting the {@link Gtk.Widget.visible} property) until the whole
         *  interface is created.
         * @param builder 
         * @param name 
         * @param value 
         * @virtual
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: unknown): void;

        /**
         * Stores the id attribute given in the {@link Gtk.Builder} UI definition.
         *   {@link Gtk.Widget} stores the name as object data. Implement this method if your
         *   object has some notion of &#x201C;ID&#x201D; and it makes sense to map the XML id
         *   attribute to it.
         * @param id 
         * @virtual
         */
        vfunc_set_id(id: string): void;

        /**
         * Add a widget into a the prefix area with a priority. The highest
         * the priority the closest to the start.
         * @param priority the priority
         * @param child a {@link Gtk.Widget}
         */
        add_prefix(priority: number, child: Gtk.Widget): void;

        /**
         * Add a widget into a the suffix area with a priority. The highest
         * the priority the closest to the start.
         * @param priority the priority
         * @param child a {@link Gtk.Widget}
         */
        add_suffix(priority: number, child: Gtk.Widget): void;

        /**
         * Tells if the panel widget can be drop onto the panel frame.
         * @param widget a {@link Panel.Widget}
         * @returns whether the widget can be dropped.
         */
        can_drop(widget: Widget): boolean;

        /**
         * Gets the frame the header is attached to.
         * @returns a {@link Panel.Frame} or `null`
         */
        get_frame(): (Frame | null);

        /**
         * Notifies the header that the visible page has changed.
         * @param widget a {@link Panel.Widget} or `null` if no page is visible
         */
        page_changed(widget: (Widget | null)): void;

        /**
         * Sets the frame the header is attached to.
         * @param frame a {@link Panel.Frame} or `null`
         */
        set_frame(frame: (Frame | null)): void;

        /**
         * Add a widget into a the prefix area with a priority. The highest
         * the priority the closest to the start.
         * @param priority the priority
         * @param child a {@link Gtk.Widget}
         * @virtual
         */
        vfunc_add_prefix(priority: number, child: Gtk.Widget): void;

        /**
         * Add a widget into a the suffix area with a priority. The highest
         * the priority the closest to the start.
         * @param priority the priority
         * @param child a {@link Gtk.Widget}
         * @virtual
         */
        vfunc_add_suffix(priority: number, child: Gtk.Widget): void;

        /**
         * Tells if the panel widget can be drop onto the panel frame.
         * @param widget a {@link Panel.Widget}
         * @virtual
         */
        vfunc_can_drop(widget: Widget): boolean;

        /**
         * Notifies the header that the visible page has changed.
         * @param widget a {@link Panel.Widget} or `null` if no page is visible
         * @virtual
         */
        vfunc_page_changed(widget: (Widget | null)): void;
    }


    namespace GSettingsActionGroup {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::settings": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.ActionGroup.ConstructorProps {
            settings: Gio.Settings;
        }
    }

    /**
     * @gir-type Class
     */
    class GSettingsActionGroup extends GObject.Object implements Gio.ActionGroup {
        static $gtype: GObject.GType<GSettingsActionGroup>;

        // Properties
        /**
         * @construct-only
         */
        get settings(): Gio.Settings;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GSettingsActionGroup.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<GSettingsActionGroup.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof GSettingsActionGroup.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GSettingsActionGroup.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof GSettingsActionGroup.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GSettingsActionGroup.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof GSettingsActionGroup.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GSettingsActionGroup.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Creates a new {@link Gio.ActionGroup} that exports `settings`.
         * @param settings a {@link Gio.Settings}
         */
        static ["new"](settings: Gio.Settings): Gio.ActionGroup;

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
        activate_action(action_name: string, parameter: (GLib.Variant | null)): void;

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
        get_action_parameter_type(action_name: string): (GLib.VariantType | null);

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
        get_action_state(action_name: string): (GLib.Variant | null);

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
        get_action_state_hint(action_name: string): (GLib.Variant | null);

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
        get_action_state_type(action_name: string): (GLib.VariantType | null);

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
        vfunc_activate_action(action_name: string, parameter: (GLib.Variant | null)): void;

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
        vfunc_get_action_parameter_type(action_name: string): (GLib.VariantType | null);

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
        vfunc_get_action_state(action_name: string): (GLib.Variant | null);

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
        vfunc_get_action_state_hint(action_name: string): (GLib.Variant | null);

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
        vfunc_get_action_state_type(action_name: string): (GLib.VariantType | null);

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
    }


    namespace Grid {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            /**
             * The "create-frame" signal is used to create a new frame within
             * the grid.
             * 
             * Consumers of this signal are required to return an unrooted
             * {@link Panel.Frame} from this signal. The first signal handler wins.
             * @signal
             * @run-last
             */
            "create-frame": () => Frame;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::can-target": (pspec: GObject.ParamSpec) => void;
            "notify::css-classes": (pspec: GObject.ParamSpec) => void;
            "notify::css-name": (pspec: GObject.ParamSpec) => void;
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::focusable": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::layout-manager": (pspec: GObject.ParamSpec) => void;
            "notify::limit-events": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::overflow": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::root": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-role": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Widget.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps {

        }
    }

    /**
     * The {@link Panel.Grid} is a widget used to layout the dock item in the
     * center area.
     * @gir-type Class
     */
    class Grid extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<Grid>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Grid.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Grid.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Grid;

        // Signals
        /** @signal */
        connect<K extends keyof Grid.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Grid.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Grid.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Grid.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Grid.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Grid.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Add a {@link Panel.Widget} to the grid.
         * @param widget a {@link Panel.Widget} the widget to add.
         */
        add(widget: Widget): void;

        /**
         * Request to close, asynchronously. This will display the save dialog.
         * @param cancellable 
         */
        agree_to_close_async(cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * Request to close, asynchronously. This will display the save dialog.
         * @param cancellable 
         * @param callback callback called when ready
         */
        agree_to_close_async(cancellable: (Gio.Cancellable | null), callback: Gio.AsyncReadyCallback<this>): void;

        /**
         * Request to close, asynchronously. This will display the save dialog.
         * @param cancellable 
         * @param callback callback called when ready
         */
        agree_to_close_async(cancellable: (Gio.Cancellable | null), callback?: Gio.AsyncReadyCallback<this>): (globalThis.Promise<boolean> | void);

        /**
         * @param result 
         */
        agree_to_close_finish(result: Gio.AsyncResult): boolean;

        /**
         * Calls `callback` for each {@link Panel.Frame} within `grid`.
         * @param callback a {@link Panel.FrameCallback}
         */
        foreach_frame(callback: FrameCallback): void;

        /**
         * Gets the {@link Panel.GridColumn} for a column index.
         * @param column a column index
         * @returns a {@link Panel.GridColumn}
         */
        get_column(column: number): GridColumn;

        /**
         * Gets the most recently acive column on a grid.
         * @returns a {@link Panel.GridColumn}
         */
        get_most_recent_column(): GridColumn;

        /**
         * Gets the most recently acive frame on a grid.
         * @returns a `PanelGridFrame`
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

        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         * 
         * The accessible role cannot be changed once set.
         * @default Gtk.AccessibleRole.NONE
          * @category Inherited from Gtk.Accessible
         */
        get accessible_role(): Gtk.AccessibleRole;
        set accessible_role(val: Gtk.AccessibleRole);

        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         * 
         * The accessible role cannot be changed once set.
         * @default Gtk.AccessibleRole.NONE
          * @category Inherited from Gtk.Accessible
         */
        get accessibleRole(): Gtk.AccessibleRole;
        set accessibleRole(val: Gtk.AccessibleRole);

        /**
         * Requests the user's screen reader to announce the given message.
         * 
         * This kind of notification is useful for messages that
         * either have only a visual representation or that are not
         * exposed visually at all, e.g. a notification about a
         * successful operation.
         * 
         * Also, by using this API, you can ensure that the message
         * does not interrupts the user's current screen reader output.
         * @param message the string to announce
         * @param priority the priority of the announcement
         */
        announce(message: string, priority: Gtk.AccessibleAnnouncementPriority): void;

        /**
         * Retrieves the accessible identifier for the accessible object.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations.
         * 
         * It is left to the accessible implementation to define the scope
         * and uniqueness of the identifier.
         * @returns the accessible identifier
         */
        get_accessible_id(): (string | null);

        /**
         * Retrieves the accessible parent for an accessible object.
         * 
         * This function returns `NULL` for top level widgets.
         * @returns the accessible parent
         */
        get_accessible_parent(): (Gtk.Accessible | null);

        /**
         * Retrieves the accessible role of an accessible object.
         * @returns the accessible role
         */
        get_accessible_role(): Gtk.AccessibleRole;

        /**
         * Retrieves the implementation for the given accessible object.
         * @returns the accessible implementation object
         */
        get_at_context(): Gtk.ATContext;

        /**
         * Queries the coordinates and dimensions of this accessible
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @returns true if the bounds are valid, and false otherwise
         */
        get_bounds(): [boolean, number, number, number, number];

        /**
         * Retrieves the first accessible child of an accessible object.
         * @returns the first accessible child
         */
        get_first_accessible_child(): (Gtk.Accessible | null);

        /**
         * Retrieves the next accessible sibling of an accessible object
         * @returns the next accessible sibling
         */
        get_next_accessible_sibling(): (Gtk.Accessible | null);

        /**
         * Queries a platform state, such as focus.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @returns the value of state for the accessible
         */
        get_platform_state(state: Gtk.AccessiblePlatformState): boolean;

        /**
         * Resets the accessible property to its default value.
         * @param property the accessible property
         */
        reset_property(property: Gtk.AccessibleProperty): void;

        /**
         * Resets the accessible relation to its default value.
         * @param relation the accessible relation
         */
        reset_relation(relation: Gtk.AccessibleRelation): void;

        /**
         * Resets the accessible state to its default value.
         * @param state the accessible state
         */
        reset_state(state: Gtk.AccessibleState): void;

        /**
         * Sets the parent and sibling of an accessible object.
         * 
         * This function is meant to be used by accessible implementations that are
         * not part of the widget hierarchy, and but act as a logical bridge between
         * widgets. For instance, if a widget creates an object that holds metadata
         * for each child, and you want that object to implement the {@link Gtk.Accessible}
         * interface, you will use this function to ensure that the parent of each
         * child widget is the metadata object, and the parent of each metadata
         * object is the container widget.
         * @param parent the parent accessible object
         * @param next_sibling the sibling accessible object
         */
        set_accessible_parent(parent: (Gtk.Accessible | null), next_sibling: (Gtk.Accessible | null)): void;

        /**
         * Updates the next accessible sibling.
         * 
         * That might be useful when a new child of a custom accessible
         * is created, and it needs to be linked to a previous child.
         * @param new_sibling the new next accessible sibling to set
         */
        update_next_accessible_sibling(new_sibling: (Gtk.Accessible | null)): void;

        /**
         * Informs ATs that the platform state has changed.
         * 
         * This function should be used by {@link Gtk.Accessible} implementations that
         * have a platform state but are not widgets. Widgets handle platform
         * states automatically.
         * @param state the platform state to update
         */
        update_platform_state(state: Gtk.AccessiblePlatformState): void;

        /**
         * Updates an array of accessible properties.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * property change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param properties an array of accessible properties
         * @param values an array of `GValues`, one for each property
         */
        update_property(properties: Gtk.AccessibleProperty[], values: (GObject.Value | any)[]): void;

        /**
         * Updates an array of accessible relations.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * relation change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param relations an array of accessible relations
         * @param values an array of `GValues`, one for each relation
         */
        update_relation(relations: Gtk.AccessibleRelation[], values: (GObject.Value | any)[]): void;

        /**
         * Updates an array of accessible states.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * state change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param states an array of accessible states
         * @param values an array of `GValues`, one for each state
         */
        update_state(states: Gtk.AccessibleState[], values: (GObject.Value | any)[]): void;

        /**
         * Retrieves the accessible identifier for the accessible object.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations.
         * 
         * It is left to the accessible implementation to define the scope
         * and uniqueness of the identifier.
         * @virtual
         */
        vfunc_get_accessible_id(): (string | null);

        /**
         * Retrieves the accessible parent for an accessible object.
         * 
         * This function returns `NULL` for top level widgets.
         * @virtual
         */
        vfunc_get_accessible_parent(): (Gtk.Accessible | null);

        /**
         * Retrieves the implementation for the given accessible object.
         * @virtual
         */
        vfunc_get_at_context(): (Gtk.ATContext | null);

        /**
         * Queries the coordinates and dimensions of this accessible
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @virtual
         */
        vfunc_get_bounds(): [boolean, number, number, number, number];

        /**
         * Retrieves the first accessible child of an accessible object.
         * @virtual
         */
        vfunc_get_first_accessible_child(): (Gtk.Accessible | null);

        /**
         * Retrieves the next accessible sibling of an accessible object
         * @virtual
         */
        vfunc_get_next_accessible_sibling(): (Gtk.Accessible | null);

        /**
         * Queries a platform state, such as focus.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @virtual
         */
        vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;

        /**
         * Gets the ID of the `buildable` object.
         * 
         * {@link Gtk.Builder} sets the name based on the ID attribute
         * of the `<object>` tag used to construct the `buildable`.
         * @returns the ID of the buildable object
         */
        get_buildable_id(): (string | null);

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
         * Similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         * @virtual
         */
        vfunc_custom_finished(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * Called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * Called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string): [boolean, Gtk.BuildableParser, never];

        /**
         * The getter corresponding to `set_id`. Implement this
         *   if you implement `set_id`.
         * @virtual
         */
        vfunc_get_id(): string;

        /**
         * Retrieves the internal child called `childname` of the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param childname name of child
         * @virtual
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

        /**
         * Called when a builder finishes the parsing
         *  of a UI definition. It is normally not necessary to implement this,
         *  unless you need to perform special cleanup actions. {@link Gtk.Window} sets
         *  the {@link Gtk.Widget.visible} property here.
         * @param builder 
         * @virtual
         */
        vfunc_parser_finished(builder: Gtk.Builder): void;

        /**
         * Sets a property of a buildable object.
         *  It is normally not necessary to implement this, `g_object_set_property()`
         *  is used by default. {@link Gtk.Window} implements this to delay showing itself
         *  (i.e. setting the {@link Gtk.Widget.visible} property) until the whole
         *  interface is created.
         * @param builder 
         * @param name 
         * @param value 
         * @virtual
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: unknown): void;

        /**
         * Stores the id attribute given in the {@link Gtk.Builder} UI definition.
         *   {@link Gtk.Widget} stores the name as object data. Implement this method if your
         *   object has some notion of &#x201C;ID&#x201D; and it makes sense to map the XML id
         *   attribute to it.
         * @param id 
         * @virtual
         */
        vfunc_set_id(id: string): void;
    }


    namespace GridColumn {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::can-target": (pspec: GObject.ParamSpec) => void;
            "notify::css-classes": (pspec: GObject.ParamSpec) => void;
            "notify::css-name": (pspec: GObject.ParamSpec) => void;
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::focusable": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::layout-manager": (pspec: GObject.ParamSpec) => void;
            "notify::limit-events": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::overflow": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::root": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-role": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Widget.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class GridColumn extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<GridColumn>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GridColumn.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<GridColumn.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): GridColumn;

        // Signals
        /** @signal */
        connect<K extends keyof GridColumn.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GridColumn.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof GridColumn.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GridColumn.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof GridColumn.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GridColumn.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Invokes a callback for each frame in the grid column.
         * @param callback a function to be called on each frame
         */
        foreach_frame(callback: FrameCallback): void;

        get_empty(): boolean;

        /**
         * Gets the most recently acive frame on a grid column.
         * @returns a `PanelGridFrame`
         */
        get_most_recent_frame(): Frame;

        get_n_rows(): number;

        /**
         * Gets the frame corresponding to a row index.
         * @param row the index of the row
         * @returns a `PanelGridFrame`
         */
        get_row(row: number): Frame;

        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         * 
         * The accessible role cannot be changed once set.
         * @default Gtk.AccessibleRole.NONE
          * @category Inherited from Gtk.Accessible
         */
        get accessible_role(): Gtk.AccessibleRole;
        set accessible_role(val: Gtk.AccessibleRole);

        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         * 
         * The accessible role cannot be changed once set.
         * @default Gtk.AccessibleRole.NONE
          * @category Inherited from Gtk.Accessible
         */
        get accessibleRole(): Gtk.AccessibleRole;
        set accessibleRole(val: Gtk.AccessibleRole);

        /**
         * Requests the user's screen reader to announce the given message.
         * 
         * This kind of notification is useful for messages that
         * either have only a visual representation or that are not
         * exposed visually at all, e.g. a notification about a
         * successful operation.
         * 
         * Also, by using this API, you can ensure that the message
         * does not interrupts the user's current screen reader output.
         * @param message the string to announce
         * @param priority the priority of the announcement
         */
        announce(message: string, priority: Gtk.AccessibleAnnouncementPriority): void;

        /**
         * Retrieves the accessible identifier for the accessible object.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations.
         * 
         * It is left to the accessible implementation to define the scope
         * and uniqueness of the identifier.
         * @returns the accessible identifier
         */
        get_accessible_id(): (string | null);

        /**
         * Retrieves the accessible parent for an accessible object.
         * 
         * This function returns `NULL` for top level widgets.
         * @returns the accessible parent
         */
        get_accessible_parent(): (Gtk.Accessible | null);

        /**
         * Retrieves the accessible role of an accessible object.
         * @returns the accessible role
         */
        get_accessible_role(): Gtk.AccessibleRole;

        /**
         * Retrieves the implementation for the given accessible object.
         * @returns the accessible implementation object
         */
        get_at_context(): Gtk.ATContext;

        /**
         * Queries the coordinates and dimensions of this accessible
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @returns true if the bounds are valid, and false otherwise
         */
        get_bounds(): [boolean, number, number, number, number];

        /**
         * Retrieves the first accessible child of an accessible object.
         * @returns the first accessible child
         */
        get_first_accessible_child(): (Gtk.Accessible | null);

        /**
         * Retrieves the next accessible sibling of an accessible object
         * @returns the next accessible sibling
         */
        get_next_accessible_sibling(): (Gtk.Accessible | null);

        /**
         * Queries a platform state, such as focus.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @returns the value of state for the accessible
         */
        get_platform_state(state: Gtk.AccessiblePlatformState): boolean;

        /**
         * Resets the accessible property to its default value.
         * @param property the accessible property
         */
        reset_property(property: Gtk.AccessibleProperty): void;

        /**
         * Resets the accessible relation to its default value.
         * @param relation the accessible relation
         */
        reset_relation(relation: Gtk.AccessibleRelation): void;

        /**
         * Resets the accessible state to its default value.
         * @param state the accessible state
         */
        reset_state(state: Gtk.AccessibleState): void;

        /**
         * Sets the parent and sibling of an accessible object.
         * 
         * This function is meant to be used by accessible implementations that are
         * not part of the widget hierarchy, and but act as a logical bridge between
         * widgets. For instance, if a widget creates an object that holds metadata
         * for each child, and you want that object to implement the {@link Gtk.Accessible}
         * interface, you will use this function to ensure that the parent of each
         * child widget is the metadata object, and the parent of each metadata
         * object is the container widget.
         * @param parent the parent accessible object
         * @param next_sibling the sibling accessible object
         */
        set_accessible_parent(parent: (Gtk.Accessible | null), next_sibling: (Gtk.Accessible | null)): void;

        /**
         * Updates the next accessible sibling.
         * 
         * That might be useful when a new child of a custom accessible
         * is created, and it needs to be linked to a previous child.
         * @param new_sibling the new next accessible sibling to set
         */
        update_next_accessible_sibling(new_sibling: (Gtk.Accessible | null)): void;

        /**
         * Informs ATs that the platform state has changed.
         * 
         * This function should be used by {@link Gtk.Accessible} implementations that
         * have a platform state but are not widgets. Widgets handle platform
         * states automatically.
         * @param state the platform state to update
         */
        update_platform_state(state: Gtk.AccessiblePlatformState): void;

        /**
         * Updates an array of accessible properties.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * property change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param properties an array of accessible properties
         * @param values an array of `GValues`, one for each property
         */
        update_property(properties: Gtk.AccessibleProperty[], values: (GObject.Value | any)[]): void;

        /**
         * Updates an array of accessible relations.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * relation change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param relations an array of accessible relations
         * @param values an array of `GValues`, one for each relation
         */
        update_relation(relations: Gtk.AccessibleRelation[], values: (GObject.Value | any)[]): void;

        /**
         * Updates an array of accessible states.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * state change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param states an array of accessible states
         * @param values an array of `GValues`, one for each state
         */
        update_state(states: Gtk.AccessibleState[], values: (GObject.Value | any)[]): void;

        /**
         * Retrieves the accessible identifier for the accessible object.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations.
         * 
         * It is left to the accessible implementation to define the scope
         * and uniqueness of the identifier.
         * @virtual
         */
        vfunc_get_accessible_id(): (string | null);

        /**
         * Retrieves the accessible parent for an accessible object.
         * 
         * This function returns `NULL` for top level widgets.
         * @virtual
         */
        vfunc_get_accessible_parent(): (Gtk.Accessible | null);

        /**
         * Retrieves the implementation for the given accessible object.
         * @virtual
         */
        vfunc_get_at_context(): (Gtk.ATContext | null);

        /**
         * Queries the coordinates and dimensions of this accessible
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @virtual
         */
        vfunc_get_bounds(): [boolean, number, number, number, number];

        /**
         * Retrieves the first accessible child of an accessible object.
         * @virtual
         */
        vfunc_get_first_accessible_child(): (Gtk.Accessible | null);

        /**
         * Retrieves the next accessible sibling of an accessible object
         * @virtual
         */
        vfunc_get_next_accessible_sibling(): (Gtk.Accessible | null);

        /**
         * Queries a platform state, such as focus.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @virtual
         */
        vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;

        /**
         * Gets the ID of the `buildable` object.
         * 
         * {@link Gtk.Builder} sets the name based on the ID attribute
         * of the `<object>` tag used to construct the `buildable`.
         * @returns the ID of the buildable object
         */
        get_buildable_id(): (string | null);

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
         * Similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         * @virtual
         */
        vfunc_custom_finished(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * Called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * Called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string): [boolean, Gtk.BuildableParser, never];

        /**
         * The getter corresponding to `set_id`. Implement this
         *   if you implement `set_id`.
         * @virtual
         */
        vfunc_get_id(): string;

        /**
         * Retrieves the internal child called `childname` of the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param childname name of child
         * @virtual
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

        /**
         * Called when a builder finishes the parsing
         *  of a UI definition. It is normally not necessary to implement this,
         *  unless you need to perform special cleanup actions. {@link Gtk.Window} sets
         *  the {@link Gtk.Widget.visible} property here.
         * @param builder 
         * @virtual
         */
        vfunc_parser_finished(builder: Gtk.Builder): void;

        /**
         * Sets a property of a buildable object.
         *  It is normally not necessary to implement this, `g_object_set_property()`
         *  is used by default. {@link Gtk.Window} implements this to delay showing itself
         *  (i.e. setting the {@link Gtk.Widget.visible} property) until the whole
         *  interface is created.
         * @param builder 
         * @param name 
         * @param value 
         * @virtual
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: unknown): void;

        /**
         * Stores the id attribute given in the {@link Gtk.Builder} UI definition.
         *   {@link Gtk.Widget} stores the name as object data. Implement this method if your
         *   object has some notion of &#x201C;ID&#x201D; and it makes sense to map the XML id
         *   attribute to it.
         * @param id 
         * @virtual
         */
        vfunc_set_id(id: string): void;
    }


    namespace Inhibitor {
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
    class Inhibitor extends GObject.Object {
        static $gtype: GObject.GType<Inhibitor>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Inhibitor.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Inhibitor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Inhibitor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Inhibitor.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Inhibitor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Inhibitor.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Inhibitor.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Inhibitor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        uninhibit(): void;
    }


    namespace LayeredSettings {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @detailed
             * @run-last
             */
            changed: (arg0: string) => void;
            "notify::path": (pspec: GObject.ParamSpec) => void;
            "notify::schema-id": (pspec: GObject.ParamSpec) => void;
            /**
             * @signal
             * @detailed
             * @run-last
             */
            "changed::path": (arg0: string) => void;
            /**
             * @signal
             * @detailed
             * @run-last
             */
            "changed::schema-id": (arg0: string) => void;
            [key: `changed::${string}`]: (arg0: string) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            path: string;
            schema_id: string;
            schemaId: string;
        }
    }

    /**
     * @gir-type Class
     */
    class LayeredSettings extends GObject.Object {
        static $gtype: GObject.GType<LayeredSettings>;

        // Properties
        /**
         * @construct-only
         * @default null
         */
        get path(): string;

        /**
         * @construct-only
         * @default null
         */
        get schema_id(): string;

        /**
         * @construct-only
         * @default null
         */
        get schemaId(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: LayeredSettings.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<LayeredSettings.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](schema_id: string, path: string): LayeredSettings;

        // Signals
        /** @signal */
        connect<K extends keyof LayeredSettings.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LayeredSettings.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof LayeredSettings.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LayeredSettings.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof LayeredSettings.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<LayeredSettings.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param settings 
         */
        append(settings: Gio.Settings): void;

        /**
         * @param key 
         * @param object 
         * @param property 
         * @param flags 
         */
        bind(key: string, object: null, property: string, flags: Gio.SettingsBindFlags): void;

        /**
         * Creates a new binding similar to `g_settings_bind_with_mapping()` but applying
         * from the resolved value via the layered settings.
         * @param key the settings key to bind. `object` (type GObject.Object): the target object.
         * @param object 
         * @param property the property on `object` to apply.
         * @param flags flags for the binding.
         * @param get_mapping the get mapping function
         * @param set_mapping the set mapping function
         */
        bind_with_mapping(key: string, object: null, property: string, flags: Gio.SettingsBindFlags, get_mapping: Gio.SettingsBindGetMapping, set_mapping: Gio.SettingsBindSetMapping): void;

        /**
         * @param key 
         */
        get_boolean(key: string): boolean;

        /**
         * @param key 
         */
        get_default_value(key: string): GLib.Variant;

        /**
         * @param key 
         */
        get_double(key: string): number;

        /**
         * @param key 
         */
        get_int(key: string): number;

        /**
         * Gets the {@link Gio.SettingsSchemaKey} denoted by `key`.
         * 
         * It is a programming error to call this with a key that does not exist.
         * @param key the name of the setting
         * @returns a {@link Gio.SettingsSchemaKey}
         */
        get_key(key: string): Gio.SettingsSchemaKey;

        /**
         * @param key 
         */
        get_string(key: string): string;

        /**
         * @param key 
         */
        get_uint(key: string): number;

        /**
         * @param key the key to get the user value for
         * @returns the user's value, if set
         */
        get_user_value(key: string): (GLib.Variant | null);

        /**
         * Gets the value of `key` from the first layer that is modified.
         * @param key 
         * @returns a {@link GLib.Variant}
         */
        get_value(key: string): GLib.Variant;

        /**
         * Lists the available keys.
         * @returns an array of keys that can be retrieved from the {@link Panel.LayeredSettings}.
         */
        list_keys(): string[];

        /**
         * @param key 
         * @param val 
         */
        set_boolean(key: string, val: boolean): void;

        /**
         * @param key 
         * @param val 
         */
        set_double(key: string, val: number): void;

        /**
         * @param key 
         * @param val 
         */
        set_int(key: string, val: number): void;

        /**
         * @param key 
         * @param val 
         */
        set_string(key: string, val: string): void;

        /**
         * @param key 
         * @param val 
         */
        set_uint(key: string, val: number): void;

        /**
         * @param key 
         * @param value 
         */
        set_value(key: string, value: GLib.Variant): void;

        /**
         * @param property 
         */
        unbind(property: string): void;
    }


    namespace MenuManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    /**
     * The goal of {@link Panel.MenuManager} is to simplify the process of merging multiple
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
     * submenu links. This allows the {@link Panel.MenuManager} to be in full control of
     * the generated menus.
     * 
     * `panel_menu_manager_get_menu_by_id()` will always return a {@link Gio.Menu}, however
     * that menu may contain no children until something has extended it later
     * on during the application process.
     * @gir-type Class
     */
    class MenuManager extends GObject.Object {
        static $gtype: GObject.GType<MenuManager>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MenuManager.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<MenuManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): MenuManager;

        // Signals
        /** @signal */
        connect<K extends keyof MenuManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MenuManager.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof MenuManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MenuManager.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof MenuManager.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MenuManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param filename 
         */
        add_filename(filename: string): number;

        /**
         * @param resource 
         * @returns the merge id
         */
        add_resource(resource: string): number;

        /**
         * Locates a menu item that matches `id` and sets the position within
         * the resulting {@link Gio.Menu} to `position`.
         * 
         * If no match is found, `null` is returned.
         * @param id the identifier of the menu item
         * @returns a {@link Gio.Menu} if successful; otherwise   `null` and `position` is unset.
         */
        find_item_by_id(id: string): [(Gio.Menu | null), number];

        /**
         * @param menu_id 
         * @returns A {@link Gio.Menu}.
         */
        get_menu_by_id(menu_id: string): Gio.Menu;

        /**
         * Gets the known menu ids as a string array.
         */
        get_menu_ids(): string[];

        /**
         * Note that `menu_model` is not retained, a copy of it is made.
         * @param menu_id the identifier of the menu
         * @param menu_model the menu model to merge
         * @returns the merge-id which can be used with `panel_menu_manager_remove()`
         */
        merge(menu_id: string, menu_model: Gio.MenuModel): number;

        /**
         * This removes items from menus that were added as part of a previous
         * menu merge. Use the value returned from `panel_menu_manager_merge()` as
         * the `merge_id`.
         * @param merge_id A previously registered merge id
         */
        remove(merge_id: number): void;

        /**
         * Overwrites an attribute for a menu that was created by
         * {@link Panel.MenuManager}.
         * 
         * This can be useful when you want to update an attribute such as
         * "accel" when an accelerator has changed due to user mappings.
         * @param menu the menu that was retreived with `panel_menu_manager_get_menu_by_id()`
         * @param position the index of the item in the menu
         * @param attribute the attribute to change
         * @param value the new value for the attribute
         */
        set_attribute_string(menu: Gio.Menu, position: number, attribute: string, value: string): void;
    }


    namespace OmniBar {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            "notify::action-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::menu-model": (pspec: GObject.ParamSpec) => void;
            "notify::popover": (pspec: GObject.ParamSpec) => void;
            "notify::progress": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::can-target": (pspec: GObject.ParamSpec) => void;
            "notify::css-classes": (pspec: GObject.ParamSpec) => void;
            "notify::css-name": (pspec: GObject.ParamSpec) => void;
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::focusable": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::layout-manager": (pspec: GObject.ParamSpec) => void;
            "notify::limit-events": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::overflow": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::root": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-role": (pspec: GObject.ParamSpec) => void;
            "notify::action-name": (pspec: GObject.ParamSpec) => void;
            "notify::action-target": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Widget.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Actionable.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps {
            action_tooltip: string;
            actionTooltip: string;
            icon_name: string;
            iconName: string;
            menu_model: Gio.MenuModel;
            menuModel: Gio.MenuModel;
            popover: (Gtk.Popover | null);
            progress: number;
        }
    }

    /**
     * A multi-use widget for user interaction in the window header bar.
     * You can add widgets, a popover to provide action items, an icon,
     * updates on progress and pulse the main widget.
     * 
     * There is also a prefix and suffix area that can contain more
     * widgets.
     * 
     * <picture>
     *   <source srcset="omni-bar-dark.png" media="(prefers-color-scheme: dark)">
     *   <img src="omni-bar.png" alt="omni-bar">
     * </picture>
     * @gir-type Class
     */
    class OmniBar extends Gtk.Widget implements Gtk.Accessible, Gtk.Actionable, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<OmniBar>;

        // Properties
        /**
         * The tooltip for the action.
         * @default null
         */
        get action_tooltip(): string;
        set action_tooltip(val: string);

        /**
         * The tooltip for the action.
         * @default null
         */
        get actionTooltip(): string;
        set actionTooltip(val: string);

        /**
         * The name of the icon to use.
         * @default null
         */
        get icon_name(): string;
        set icon_name(val: string);

        /**
         * The name of the icon to use.
         * @default null
         */
        get iconName(): string;
        set iconName(val: string);

        /**
         * The menu model of the omni bar menu.
         */
        get menu_model(): Gio.MenuModel;
        set menu_model(val: Gio.MenuModel);

        /**
         * The menu model of the omni bar menu.
         */
        get menuModel(): Gio.MenuModel;
        set menuModel(val: Gio.MenuModel);

        /**
         * The popover to show.
         */
        get popover(): (Gtk.Popover | null);
        set popover(val: (Gtk.Popover | null));

        /**
         * The current progress value.
         * @default 0
         */
        get progress(): number;
        set progress(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: OmniBar.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<OmniBar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): OmniBar;

        // Signals
        /** @signal */
        connect<K extends keyof OmniBar.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OmniBar.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof OmniBar.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OmniBar.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof OmniBar.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<OmniBar.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
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
         * Gets the current popover or `null` if none is setup.
         * @returns a {@link Gtk.Popover} or `null`
         */
        get_popover(): (Gtk.Popover | null);

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
         * @param popover a {@link Gtk.Popover} or `null`
         */
        set_popover(popover: (Gtk.Popover | null)): void;

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

        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         * 
         * The accessible role cannot be changed once set.
         * @default Gtk.AccessibleRole.NONE
          * @category Inherited from Gtk.Accessible
         */
        get accessible_role(): Gtk.AccessibleRole;
        set accessible_role(val: Gtk.AccessibleRole);

        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         * 
         * The accessible role cannot be changed once set.
         * @default Gtk.AccessibleRole.NONE
          * @category Inherited from Gtk.Accessible
         */
        get accessibleRole(): Gtk.AccessibleRole;
        set accessibleRole(val: Gtk.AccessibleRole);

        /**
         * The name of the action with which this widget should be associated.
         * @default null
          * @category Inherited from Gtk.Actionable
         */
        get action_name(): (string | null);
        set action_name(val: (string | null));

        /**
         * The name of the action with which this widget should be associated.
         * @default null
          * @category Inherited from Gtk.Actionable
         */
        get actionName(): (string | null);
        set actionName(val: (string | null));

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
         * Requests the user's screen reader to announce the given message.
         * 
         * This kind of notification is useful for messages that
         * either have only a visual representation or that are not
         * exposed visually at all, e.g. a notification about a
         * successful operation.
         * 
         * Also, by using this API, you can ensure that the message
         * does not interrupts the user's current screen reader output.
         * @param message the string to announce
         * @param priority the priority of the announcement
         */
        announce(message: string, priority: Gtk.AccessibleAnnouncementPriority): void;

        /**
         * Retrieves the accessible identifier for the accessible object.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations.
         * 
         * It is left to the accessible implementation to define the scope
         * and uniqueness of the identifier.
         * @returns the accessible identifier
         */
        get_accessible_id(): (string | null);

        /**
         * Retrieves the accessible parent for an accessible object.
         * 
         * This function returns `NULL` for top level widgets.
         * @returns the accessible parent
         */
        get_accessible_parent(): (Gtk.Accessible | null);

        /**
         * Retrieves the accessible role of an accessible object.
         * @returns the accessible role
         */
        get_accessible_role(): Gtk.AccessibleRole;

        /**
         * Retrieves the implementation for the given accessible object.
         * @returns the accessible implementation object
         */
        get_at_context(): Gtk.ATContext;

        /**
         * Queries the coordinates and dimensions of this accessible
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @returns true if the bounds are valid, and false otherwise
         */
        get_bounds(): [boolean, number, number, number, number];

        /**
         * Retrieves the first accessible child of an accessible object.
         * @returns the first accessible child
         */
        get_first_accessible_child(): (Gtk.Accessible | null);

        /**
         * Retrieves the next accessible sibling of an accessible object
         * @returns the next accessible sibling
         */
        get_next_accessible_sibling(): (Gtk.Accessible | null);

        /**
         * Queries a platform state, such as focus.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @returns the value of state for the accessible
         */
        get_platform_state(state: Gtk.AccessiblePlatformState): boolean;

        /**
         * Resets the accessible property to its default value.
         * @param property the accessible property
         */
        reset_property(property: Gtk.AccessibleProperty): void;

        /**
         * Resets the accessible relation to its default value.
         * @param relation the accessible relation
         */
        reset_relation(relation: Gtk.AccessibleRelation): void;

        /**
         * Resets the accessible state to its default value.
         * @param state the accessible state
         */
        reset_state(state: Gtk.AccessibleState): void;

        /**
         * Sets the parent and sibling of an accessible object.
         * 
         * This function is meant to be used by accessible implementations that are
         * not part of the widget hierarchy, and but act as a logical bridge between
         * widgets. For instance, if a widget creates an object that holds metadata
         * for each child, and you want that object to implement the {@link Gtk.Accessible}
         * interface, you will use this function to ensure that the parent of each
         * child widget is the metadata object, and the parent of each metadata
         * object is the container widget.
         * @param parent the parent accessible object
         * @param next_sibling the sibling accessible object
         */
        set_accessible_parent(parent: (Gtk.Accessible | null), next_sibling: (Gtk.Accessible | null)): void;

        /**
         * Updates the next accessible sibling.
         * 
         * That might be useful when a new child of a custom accessible
         * is created, and it needs to be linked to a previous child.
         * @param new_sibling the new next accessible sibling to set
         */
        update_next_accessible_sibling(new_sibling: (Gtk.Accessible | null)): void;

        /**
         * Informs ATs that the platform state has changed.
         * 
         * This function should be used by {@link Gtk.Accessible} implementations that
         * have a platform state but are not widgets. Widgets handle platform
         * states automatically.
         * @param state the platform state to update
         */
        update_platform_state(state: Gtk.AccessiblePlatformState): void;

        /**
         * Updates an array of accessible properties.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * property change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param properties an array of accessible properties
         * @param values an array of `GValues`, one for each property
         */
        update_property(properties: Gtk.AccessibleProperty[], values: (GObject.Value | any)[]): void;

        /**
         * Updates an array of accessible relations.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * relation change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param relations an array of accessible relations
         * @param values an array of `GValues`, one for each relation
         */
        update_relation(relations: Gtk.AccessibleRelation[], values: (GObject.Value | any)[]): void;

        /**
         * Updates an array of accessible states.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * state change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param states an array of accessible states
         * @param values an array of `GValues`, one for each state
         */
        update_state(states: Gtk.AccessibleState[], values: (GObject.Value | any)[]): void;

        /**
         * Retrieves the accessible identifier for the accessible object.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations.
         * 
         * It is left to the accessible implementation to define the scope
         * and uniqueness of the identifier.
         * @virtual
         */
        vfunc_get_accessible_id(): (string | null);

        /**
         * Retrieves the accessible parent for an accessible object.
         * 
         * This function returns `NULL` for top level widgets.
         * @virtual
         */
        vfunc_get_accessible_parent(): (Gtk.Accessible | null);

        /**
         * Retrieves the implementation for the given accessible object.
         * @virtual
         */
        vfunc_get_at_context(): (Gtk.ATContext | null);

        /**
         * Queries the coordinates and dimensions of this accessible
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @virtual
         */
        vfunc_get_bounds(): [boolean, number, number, number, number];

        /**
         * Retrieves the first accessible child of an accessible object.
         * @virtual
         */
        vfunc_get_first_accessible_child(): (Gtk.Accessible | null);

        /**
         * Retrieves the next accessible sibling of an accessible object
         * @virtual
         */
        vfunc_get_next_accessible_sibling(): (Gtk.Accessible | null);

        /**
         * Queries a platform state, such as focus.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @virtual
         */
        vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;

        /**
         * Gets the action name for `actionable`.
         * @returns the action name
         */
        get_action_name(): (string | null);

        /**
         * Gets the current target value of `actionable`.
         * @returns the current target value
         */
        get_action_target_value(): (GLib.Variant | null);

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
        set_action_name(action_name: (string | null)): void;

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
        set_action_target_value(target_value: (GLib.Variant | null)): void;

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
        vfunc_get_action_name(): (string | null);

        /**
         * Gets the current target value of `actionable`.
         * @virtual
         */
        vfunc_get_action_target_value(): (GLib.Variant | null);

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
        vfunc_set_action_name(action_name: (string | null)): void;

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
        vfunc_set_action_target_value(target_value: (GLib.Variant | null)): void;

        /**
         * Gets the ID of the `buildable` object.
         * 
         * {@link Gtk.Builder} sets the name based on the ID attribute
         * of the `<object>` tag used to construct the `buildable`.
         * @returns the ID of the buildable object
         */
        get_buildable_id(): (string | null);

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
         * Similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         * @virtual
         */
        vfunc_custom_finished(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * Called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * Called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string): [boolean, Gtk.BuildableParser, never];

        /**
         * The getter corresponding to `set_id`. Implement this
         *   if you implement `set_id`.
         * @virtual
         */
        vfunc_get_id(): string;

        /**
         * Retrieves the internal child called `childname` of the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param childname name of child
         * @virtual
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

        /**
         * Called when a builder finishes the parsing
         *  of a UI definition. It is normally not necessary to implement this,
         *  unless you need to perform special cleanup actions. {@link Gtk.Window} sets
         *  the {@link Gtk.Widget.visible} property here.
         * @param builder 
         * @virtual
         */
        vfunc_parser_finished(builder: Gtk.Builder): void;

        /**
         * Sets a property of a buildable object.
         *  It is normally not necessary to implement this, `g_object_set_property()`
         *  is used by default. {@link Gtk.Window} implements this to delay showing itself
         *  (i.e. setting the {@link Gtk.Widget.visible} property) until the whole
         *  interface is created.
         * @param builder 
         * @param name 
         * @param value 
         * @virtual
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: unknown): void;

        /**
         * Stores the id attribute given in the {@link Gtk.Builder} UI definition.
         *   {@link Gtk.Widget} stores the name as object data. Implement this method if your
         *   object has some notion of &#x201C;ID&#x201D; and it makes sense to map the XML id
         *   attribute to it.
         * @param id 
         * @virtual
         */
        vfunc_set_id(id: string): void;
    }


    namespace Paned {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::can-target": (pspec: GObject.ParamSpec) => void;
            "notify::css-classes": (pspec: GObject.ParamSpec) => void;
            "notify::css-name": (pspec: GObject.ParamSpec) => void;
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::focusable": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::layout-manager": (pspec: GObject.ParamSpec) => void;
            "notify::limit-events": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::overflow": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::root": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-role": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Widget.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps, Gtk.Orientable.ConstructorProps {

        }
    }

    /**
     * A {@link Panel.Paned} is the concrete widget for a panel area.
     * @gir-type Class
     */
    class Paned extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Orientable {
        static $gtype: GObject.GType<Paned>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Paned.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Paned.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Paned;

        // Signals
        /** @signal */
        connect<K extends keyof Paned.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Paned.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Paned.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Paned.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Paned.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Paned.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Append a widget in the paned.
         * @param child a {@link Gtk.Widget} to append.
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
         * @returns a {@link Gtk.Widget} or `null`
         */
        get_nth_child(nth: number): (Gtk.Widget | null);

        /**
         * Inserts a widget at position in the paned.
         * @param position the position
         * @param child a {@link Gtk.Widget} to insert.
         */
        insert(position: number, child: Gtk.Widget): void;

        /**
         * Inserts a widget afer `sibling` in the paned.
         * @param child a {@link Gtk.Widget} to insert.
         * @param sibling the widget after which to insert.
         */
        insert_after(child: Gtk.Widget, sibling: Gtk.Widget): void;

        /**
         * @param args 
         */
    // Conflicted with Gtk.Widget.insert_after
        insert_after(...args: never[]): any;

        /**
         * Prepends a widget in the paned.
         * @param child a {@link Gtk.Widget} to prepend.
         */
        prepend(child: Gtk.Widget): void;

        /**
         * Removes a widget from the paned.
         * @param child a {@link Gtk.Widget}
         */
        remove(child: Gtk.Widget): void;

        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         * 
         * The accessible role cannot be changed once set.
         * @default Gtk.AccessibleRole.NONE
          * @category Inherited from Gtk.Accessible
         */
        get accessible_role(): Gtk.AccessibleRole;
        set accessible_role(val: Gtk.AccessibleRole);

        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         * 
         * The accessible role cannot be changed once set.
         * @default Gtk.AccessibleRole.NONE
          * @category Inherited from Gtk.Accessible
         */
        get accessibleRole(): Gtk.AccessibleRole;
        set accessibleRole(val: Gtk.AccessibleRole);

        /**
         * The orientation of the orientable.
         * @default Gtk.Orientation.HORIZONTAL
          * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        /**
         * Requests the user's screen reader to announce the given message.
         * 
         * This kind of notification is useful for messages that
         * either have only a visual representation or that are not
         * exposed visually at all, e.g. a notification about a
         * successful operation.
         * 
         * Also, by using this API, you can ensure that the message
         * does not interrupts the user's current screen reader output.
         * @param message the string to announce
         * @param priority the priority of the announcement
         */
        announce(message: string, priority: Gtk.AccessibleAnnouncementPriority): void;

        /**
         * Retrieves the accessible identifier for the accessible object.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations.
         * 
         * It is left to the accessible implementation to define the scope
         * and uniqueness of the identifier.
         * @returns the accessible identifier
         */
        get_accessible_id(): (string | null);

        /**
         * Retrieves the accessible parent for an accessible object.
         * 
         * This function returns `NULL` for top level widgets.
         * @returns the accessible parent
         */
        get_accessible_parent(): (Gtk.Accessible | null);

        /**
         * Retrieves the accessible role of an accessible object.
         * @returns the accessible role
         */
        get_accessible_role(): Gtk.AccessibleRole;

        /**
         * Retrieves the implementation for the given accessible object.
         * @returns the accessible implementation object
         */
        get_at_context(): Gtk.ATContext;

        /**
         * Queries the coordinates and dimensions of this accessible
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @returns true if the bounds are valid, and false otherwise
         */
        get_bounds(): [boolean, number, number, number, number];

        /**
         * Retrieves the first accessible child of an accessible object.
         * @returns the first accessible child
         */
        get_first_accessible_child(): (Gtk.Accessible | null);

        /**
         * Retrieves the next accessible sibling of an accessible object
         * @returns the next accessible sibling
         */
        get_next_accessible_sibling(): (Gtk.Accessible | null);

        /**
         * Queries a platform state, such as focus.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @returns the value of state for the accessible
         */
        get_platform_state(state: Gtk.AccessiblePlatformState): boolean;

        /**
         * Resets the accessible property to its default value.
         * @param property the accessible property
         */
        reset_property(property: Gtk.AccessibleProperty): void;

        /**
         * Resets the accessible relation to its default value.
         * @param relation the accessible relation
         */
        reset_relation(relation: Gtk.AccessibleRelation): void;

        /**
         * Resets the accessible state to its default value.
         * @param state the accessible state
         */
        reset_state(state: Gtk.AccessibleState): void;

        /**
         * Sets the parent and sibling of an accessible object.
         * 
         * This function is meant to be used by accessible implementations that are
         * not part of the widget hierarchy, and but act as a logical bridge between
         * widgets. For instance, if a widget creates an object that holds metadata
         * for each child, and you want that object to implement the {@link Gtk.Accessible}
         * interface, you will use this function to ensure that the parent of each
         * child widget is the metadata object, and the parent of each metadata
         * object is the container widget.
         * @param parent the parent accessible object
         * @param next_sibling the sibling accessible object
         */
        set_accessible_parent(parent: (Gtk.Accessible | null), next_sibling: (Gtk.Accessible | null)): void;

        /**
         * Updates the next accessible sibling.
         * 
         * That might be useful when a new child of a custom accessible
         * is created, and it needs to be linked to a previous child.
         * @param new_sibling the new next accessible sibling to set
         */
        update_next_accessible_sibling(new_sibling: (Gtk.Accessible | null)): void;

        /**
         * Informs ATs that the platform state has changed.
         * 
         * This function should be used by {@link Gtk.Accessible} implementations that
         * have a platform state but are not widgets. Widgets handle platform
         * states automatically.
         * @param state the platform state to update
         */
        update_platform_state(state: Gtk.AccessiblePlatformState): void;

        /**
         * Updates an array of accessible properties.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * property change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param properties an array of accessible properties
         * @param values an array of `GValues`, one for each property
         */
        update_property(properties: Gtk.AccessibleProperty[], values: (GObject.Value | any)[]): void;

        /**
         * Updates an array of accessible relations.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * relation change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param relations an array of accessible relations
         * @param values an array of `GValues`, one for each relation
         */
        update_relation(relations: Gtk.AccessibleRelation[], values: (GObject.Value | any)[]): void;

        /**
         * Updates an array of accessible states.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * state change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param states an array of accessible states
         * @param values an array of `GValues`, one for each state
         */
        update_state(states: Gtk.AccessibleState[], values: (GObject.Value | any)[]): void;

        /**
         * Retrieves the accessible identifier for the accessible object.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations.
         * 
         * It is left to the accessible implementation to define the scope
         * and uniqueness of the identifier.
         * @virtual
         */
        vfunc_get_accessible_id(): (string | null);

        /**
         * Retrieves the accessible parent for an accessible object.
         * 
         * This function returns `NULL` for top level widgets.
         * @virtual
         */
        vfunc_get_accessible_parent(): (Gtk.Accessible | null);

        /**
         * Retrieves the implementation for the given accessible object.
         * @virtual
         */
        vfunc_get_at_context(): (Gtk.ATContext | null);

        /**
         * Queries the coordinates and dimensions of this accessible
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @virtual
         */
        vfunc_get_bounds(): [boolean, number, number, number, number];

        /**
         * Retrieves the first accessible child of an accessible object.
         * @virtual
         */
        vfunc_get_first_accessible_child(): (Gtk.Accessible | null);

        /**
         * Retrieves the next accessible sibling of an accessible object
         * @virtual
         */
        vfunc_get_next_accessible_sibling(): (Gtk.Accessible | null);

        /**
         * Queries a platform state, such as focus.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @virtual
         */
        vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;

        /**
         * Gets the ID of the `buildable` object.
         * 
         * {@link Gtk.Builder} sets the name based on the ID attribute
         * of the `<object>` tag used to construct the `buildable`.
         * @returns the ID of the buildable object
         */
        get_buildable_id(): (string | null);

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
         * Similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         * @virtual
         */
        vfunc_custom_finished(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * Called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * Called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string): [boolean, Gtk.BuildableParser, never];

        /**
         * The getter corresponding to `set_id`. Implement this
         *   if you implement `set_id`.
         * @virtual
         */
        vfunc_get_id(): string;

        /**
         * Retrieves the internal child called `childname` of the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param childname name of child
         * @virtual
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

        /**
         * Called when a builder finishes the parsing
         *  of a UI definition. It is normally not necessary to implement this,
         *  unless you need to perform special cleanup actions. {@link Gtk.Window} sets
         *  the {@link Gtk.Widget.visible} property here.
         * @param builder 
         * @virtual
         */
        vfunc_parser_finished(builder: Gtk.Builder): void;

        /**
         * Sets a property of a buildable object.
         *  It is normally not necessary to implement this, `g_object_set_property()`
         *  is used by default. {@link Gtk.Window} implements this to delay showing itself
         *  (i.e. setting the {@link Gtk.Widget.visible} property) until the whole
         *  interface is created.
         * @param builder 
         * @param name 
         * @param value 
         * @virtual
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: unknown): void;

        /**
         * Stores the id attribute given in the {@link Gtk.Builder} UI definition.
         *   {@link Gtk.Widget} stores the name as object data. Implement this method if your
         *   object has some notion of &#x201C;ID&#x201D; and it makes sense to map the XML id
         *   attribute to it.
         * @param id 
         * @virtual
         */
        vfunc_set_id(id: string): void;

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


    namespace Position {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::area": (pspec: GObject.ParamSpec) => void;
            "notify::area-set": (pspec: GObject.ParamSpec) => void;
            "notify::column": (pspec: GObject.ParamSpec) => void;
            "notify::column-set": (pspec: GObject.ParamSpec) => void;
            "notify::depth": (pspec: GObject.ParamSpec) => void;
            "notify::depth-set": (pspec: GObject.ParamSpec) => void;
            "notify::row": (pspec: GObject.ParamSpec) => void;
            "notify::row-set": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            area: Area;
            area_set: boolean;
            areaSet: boolean;
            column: number;
            column_set: boolean;
            columnSet: boolean;
            depth: number;
            depth_set: boolean;
            depthSet: boolean;
            row: number;
            row_set: boolean;
            rowSet: boolean;
        }
    }

    /**
     * Specifies a position in the dock. You receive a {@link Panel.Position} in the
     * handler to `Panel.Dock::create-frame`.
     * @gir-type Class
     */
    class Position extends GObject.Object {
        static $gtype: GObject.GType<Position>;

        // Properties
        /**
         * The area.
         * @default Panel.Area.CENTER
         */
        get area(): Area;
        set area(val: Area);

        /**
         * The area is set.
         * @default false
         */
        get area_set(): boolean;
        set area_set(val: boolean);

        /**
         * The area is set.
         * @default false
         */
        get areaSet(): boolean;
        set areaSet(val: boolean);

        /**
         * The column in the position.
         * @default 0
         */
        get column(): number;
        set column(val: number);

        /**
         * The column is set.
         * @default false
         */
        get column_set(): boolean;
        set column_set(val: boolean);

        /**
         * The column is set.
         * @default false
         */
        get columnSet(): boolean;
        set columnSet(val: boolean);

        /**
         * @default 0
         */
        get depth(): number;
        set depth(val: number);

        /**
         * @default false
         */
        get depth_set(): boolean;
        set depth_set(val: boolean);

        /**
         * @default false
         */
        get depthSet(): boolean;
        set depthSet(val: boolean);

        /**
         * @default 0
         */
        get row(): number;
        set row(val: number);

        /**
         * @default false
         */
        get row_set(): boolean;
        set row_set(val: boolean);

        /**
         * @default false
         */
        get rowSet(): boolean;
        set rowSet(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Position.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Position.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Position;

        static new_from_variant(variant: GLib.Variant): Position;

        // Signals
        /** @signal */
        connect<K extends keyof Position.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Position.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Position.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Position.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Position.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Position.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Compares two {@link Panel.Position}.
         * @param b another {@link Panel.Position}
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
         * @param area the {@link Panel.Area}
         */
        set_area(area: Area): void;

        /**
         * Sets whether the area is set.
         * @param area_set whether the area is set.
         */
        set_area_set(area_set: boolean): void;

        /**
         * @param column 
         */
        set_column(column: number): void;

        /**
         * @param column_set 
         */
        set_column_set(column_set: boolean): void;

        /**
         * @param depth 
         */
        set_depth(depth: number): void;

        /**
         * @param depth_set 
         */
        set_depth_set(depth_set: boolean): void;

        /**
         * @param row 
         */
        set_row(row: number): void;

        /**
         * @param row_set 
         */
        set_row_set(row_set: boolean): void;

        /**
         * Convert a {@link Panel.Position} to a {@link GLib.Variant}.
         * @returns the new {@link GLib.Variant} containing the positon values
         */
        to_variant(): (GLib.Variant | null);
    }


    namespace SaveDelegate {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * This signal is emitted when the save delegate should close
             * the widget it is related to. This can happen after saving as
             * part of a close request and it is now save for the delegate to
             * close.
             * 
             * Implementations are encouraged to connect to this signal (or
             * implement the virtual method) and call `panel_widget_force_close()`.
             * @signal
             * @run-last
             */
            close: () => void;
            /**
             * This signal is emitted when the user has requested that the
             * delegate discard the changes instead of saving them.
             * 
             * Implementations are encouraged to connect to this signal (or
             * implement the virtual method) and revert the document to the
             * last saved state and/or close the document.
             * @signal
             * @run-last
             */
            discard: () => void;
            /**
             * This signal can be used when subclassing {@link Panel.SaveDelegate} is not
             * possible or cumbersome. The default implementation of
             * {@link Panel.SaveDelegateClass}.save_async() will emit this signal to allow
             * the consumer to implement asynchronous save in a flexible manner.
             * 
             * The caller is expected to complete `task` with a boolean when the
             * save operation has completed.
             * @signal
             * @run-last
             */
            save: (arg0: Gio.Task) => (boolean | void);
            "notify::icon": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::is-draft": (pspec: GObject.ParamSpec) => void;
            "notify::progress": (pspec: GObject.ParamSpec) => void;
            "notify::subtitle": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            icon: (Gio.Icon | null);
            icon_name: (string | null);
            iconName: (string | null);
            is_draft: boolean;
            isDraft: boolean;
            progress: number;
            subtitle: (string | null);
            title: (string | null);
        }
    }

    /**
     * @gir-type Class
     */
    class SaveDelegate extends GObject.Object {
        static $gtype: GObject.GType<SaveDelegate>;

        // Properties
        /**
         * The "icon" property contains a {@link Gio.Icon} that describes the save
         * operation. Generally, this should be the symbolic icon of the
         * document class you are saving.
         * 
         * Alternatively, you can use {@link Panel.SaveDelegate.icon_name} for a
         * named icon.
         */
        get icon(): (Gio.Icon | null);
        set icon(val: (Gio.Icon | null));

        /**
         * The "icon-name" property contains the name of an icon to use when
         * showing information about the save operation in UI such as a save
         * dialog.
         * 
         * You can also use {@link Panel.SaveDelegate.icon} to set a {@link Gio.Icon} instead of
         * an icon name.
         * @default null
         */
        get icon_name(): (string | null);
        set icon_name(val: (string | null));

        /**
         * The "icon-name" property contains the name of an icon to use when
         * showing information about the save operation in UI such as a save
         * dialog.
         * 
         * You can also use {@link Panel.SaveDelegate.icon} to set a {@link Gio.Icon} instead of
         * an icon name.
         * @default null
         */
        get iconName(): (string | null);
        set iconName(val: (string | null));

        /**
         * The "is-draft" property indicates that the document represented by the
         * delegate is a draft and might be lost of not saved.
         * @default false
         */
        get is_draft(): boolean;
        set is_draft(val: boolean);

        /**
         * The "is-draft" property indicates that the document represented by the
         * delegate is a draft and might be lost of not saved.
         * @default false
         */
        get isDraft(): boolean;
        set isDraft(val: boolean);

        /**
         * The "progress" property contains progress between 0.0 and 1.0 and
         * should be updated by the delegate implementation as saving progresses.
         * @default 0
         */
        get progress(): number;
        set progress(val: number);

        /**
         * The "subtitle" property contains additional information that may
         * not make sense to put in the title. This might include the directory
         * that the file will be saved within.
         * @default null
         */
        get subtitle(): (string | null);
        set subtitle(val: (string | null));

        /**
         * The "title" property contains the title of the document being saved.
         * Generally, this should be the base name of the document such as
         * `file.txt`.
         * @default null
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
        $signals: SaveDelegate.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<SaveDelegate.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): SaveDelegate;

        // Signals
        /** @signal */
        connect<K extends keyof SaveDelegate.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SaveDelegate.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof SaveDelegate.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SaveDelegate.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof SaveDelegate.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SaveDelegate.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_close(): void;

        /**
         * @virtual
         */
        vfunc_discard(): void;

        /**
         * @param task 
         * @virtual
         */
        vfunc_save(task: Gio.Task): boolean;

        /**
         * @param cancellable 
         * @param callback 
         * @virtual
         */
        vfunc_save_async(cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param result 
         * @virtual
         */
        vfunc_save_finish(result: Gio.AsyncResult): boolean;

        // Methods
        close(): void;

        discard(): void;

        /**
         * Gets the {@link Gio.Icon} for the save delegate, or `null` if unset.
         * @returns a {@link Gio.Icon} or `null`
         */
        get_icon(): (Gio.Icon | null);

        /**
         * Gets the icon name for the save delegate.
         * @returns the icon name or `null`
         */
        get_icon_name(): (string | null);

        get_is_draft(): boolean;

        get_progress(): number;

        /**
         * Gets the subtitle for the save delegate.
         * @returns the subtitle or `null`
         */
        get_subtitle(): (string | null);

        /**
         * Gets the title for the save delegate.
         * @returns the title or `null`
         */
        get_title(): (string | null);

        /**
         * @param cancellable 
         */
        save_async(cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param cancellable 
         * @param callback 
         */
        save_async(cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param cancellable 
         * @param callback 
         */
        save_async(cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param result 
         */
        save_finish(result: Gio.AsyncResult): boolean;

        /**
         * Sets the {@link Gio.Icon} for the save delegate. Pass `null` to unset.
         * @param icon a {@link Gio.Icon} or `null`
         */
        set_icon(icon: (Gio.Icon | null)): void;

        /**
         * Sets the icon name for the save delegate. Pass `null` to unset.
         * @param icon the icon name or `null`
         */
        set_icon_name(icon: (string | null)): void;

        /**
         * @param is_draft 
         */
        set_is_draft(is_draft: boolean): void;

        /**
         * @param progress 
         */
        set_progress(progress: number): void;

        /**
         * Sets the subtitle for the save delegate. Pass `null` to unset.
         * @param subtitle the subtitle or `null`
         */
        set_subtitle(subtitle: (string | null)): void;

        /**
         * Sets the title for the save delegate. Pass `null` to unset.
         * @param title the title or `null`
         */
        set_title(title: (string | null)): void;
    }


    namespace SaveDialog {
        // Signal signatures
        interface SignalSignatures extends Adw.MessageDialog.SignalSignatures {
            "notify::close-after-save": (pspec: GObject.ParamSpec) => void;
            "notify::body": (pspec: GObject.ParamSpec) => void;
            "notify::body-use-markup": (pspec: GObject.ParamSpec) => void;
            "notify::close-response": (pspec: GObject.ParamSpec) => void;
            "notify::default-response": (pspec: GObject.ParamSpec) => void;
            "notify::extra-child": (pspec: GObject.ParamSpec) => void;
            "notify::heading": (pspec: GObject.ParamSpec) => void;
            "notify::heading-use-markup": (pspec: GObject.ParamSpec) => void;
            "notify::application": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::decorated": (pspec: GObject.ParamSpec) => void;
            "notify::default-height": (pspec: GObject.ParamSpec) => void;
            "notify::default-widget": (pspec: GObject.ParamSpec) => void;
            "notify::default-width": (pspec: GObject.ParamSpec) => void;
            "notify::deletable": (pspec: GObject.ParamSpec) => void;
            "notify::destroy-with-parent": (pspec: GObject.ParamSpec) => void;
            "notify::display": (pspec: GObject.ParamSpec) => void;
            "notify::focus-visible": (pspec: GObject.ParamSpec) => void;
            "notify::focus-widget": (pspec: GObject.ParamSpec) => void;
            "notify::fullscreened": (pspec: GObject.ParamSpec) => void;
            "notify::gravity": (pspec: GObject.ParamSpec) => void;
            "notify::handle-menubar-accel": (pspec: GObject.ParamSpec) => void;
            "notify::hide-on-close": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::is-active": (pspec: GObject.ParamSpec) => void;
            "notify::maximized": (pspec: GObject.ParamSpec) => void;
            "notify::mnemonics-visible": (pspec: GObject.ParamSpec) => void;
            "notify::modal": (pspec: GObject.ParamSpec) => void;
            "notify::resizable": (pspec: GObject.ParamSpec) => void;
            "notify::startup-id": (pspec: GObject.ParamSpec) => void;
            "notify::suspended": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::titlebar": (pspec: GObject.ParamSpec) => void;
            "notify::transient-for": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::can-target": (pspec: GObject.ParamSpec) => void;
            "notify::css-classes": (pspec: GObject.ParamSpec) => void;
            "notify::css-name": (pspec: GObject.ParamSpec) => void;
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::focusable": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::layout-manager": (pspec: GObject.ParamSpec) => void;
            "notify::limit-events": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::overflow": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::root": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Adw.MessageDialog.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps, Gtk.Native.ConstructorProps, Gtk.Root.ConstructorProps, Gtk.ShortcutManager.ConstructorProps {
            close_after_save: boolean;
            closeAfterSave: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class SaveDialog extends Adw.MessageDialog implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Native, Gtk.Root, Gtk.ShortcutManager {
        static $gtype: GObject.GType<SaveDialog>;

        // Properties
        /**
         * This property requests that the widget close after saving.
         * @deprecated since 1.8: Use {@link PanelChangesDialog}
         * @default false
         */
        get close_after_save(): boolean;
        set close_after_save(val: boolean);

        /**
         * This property requests that the widget close after saving.
         * @deprecated since 1.8: Use {@link PanelChangesDialog}
         * @default false
         */
        get closeAfterSave(): boolean;
        set closeAfterSave(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SaveDialog.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<SaveDialog.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): SaveDialog;

        // Signals
        /** @signal */
        connect<K extends keyof SaveDialog.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SaveDialog.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof SaveDialog.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SaveDialog.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof SaveDialog.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SaveDialog.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param delegate 
         */
        add_delegate(delegate: SaveDelegate): void;

        get_close_after_save(): boolean;

        /**
         * @param cancellable 
         */
        run_async(cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param cancellable 
         * @param callback 
         */
        run_async(cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param cancellable 
         * @param callback 
         */
        run_async(cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param result 
         */
        run_finish(result: Gio.AsyncResult): boolean;

        /**
         * @param close_after_save 
         */
        set_close_after_save(close_after_save: boolean): void;
    }


    namespace Session {
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
    class Session extends GObject.Object {
        static $gtype: GObject.GType<Session>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Session.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Session.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Session;

        static new_from_variant(variant: GLib.Variant): Session;

        // Signals
        /** @signal */
        connect<K extends keyof Session.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Session.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Session.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Session.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Session.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Session.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param item 
         */
        append(item: SessionItem): void;

        /**
         * Gets the item at `position`.
         * @param position the index of the item
         * @returns The {@link Panel.SessionItem} at `position`   or `null` if there is no item at that position.
         */
        get_item(position: number): (SessionItem | null);

        get_n_items(): number;

        /**
         * @param position 
         * @param item 
         */
        insert(position: number, item: SessionItem): void;

        /**
         * Gets a session item matching `id`.
         * @param id the id of the item
         * @returns an {@link Panel.SessionItem} or `null`
         */
        lookup_by_id(id: string): (SessionItem | null);

        /**
         * @param item 
         */
        prepend(item: SessionItem): void;

        /**
         * @param item 
         */
        remove(item: SessionItem): void;

        /**
         * @param position 
         */
        remove_at(position: number): void;

        /**
         * Serializes a {@link Panel.Session} as a {@link GLib.Variant}
         * 
         * The result of this function may be passed to
         * `panel_session_new_from_variant()` to recreate a {@link Panel.Session}.
         * 
         * The resulting variant will not be floating.
         * @returns a {@link GLib.Variant}
         */
        to_variant(): GLib.Variant;
    }


    namespace SessionItem {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::module-name": (pspec: GObject.ParamSpec) => void;
            "notify::position": (pspec: GObject.ParamSpec) => void;
            "notify::type-hint": (pspec: GObject.ParamSpec) => void;
            "notify::workspace": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            id: (string | null);
            module_name: (string | null);
            moduleName: (string | null);
            position: (Position | null);
            type_hint: (string | null);
            typeHint: (string | null);
            workspace: (string | null);
        }
    }

    /**
     * @gir-type Class
     */
    class SessionItem extends GObject.Object {
        static $gtype: GObject.GType<SessionItem>;

        // Properties
        /**
         * @default null
         */
        get id(): (string | null);
        set id(val: (string | null));

        /**
         * @default null
         */
        get module_name(): (string | null);
        set module_name(val: (string | null));

        /**
         * @default null
         */
        get moduleName(): (string | null);
        set moduleName(val: (string | null));

        get position(): (Position | null);
        set position(val: (Position | null));

        /**
         * @default null
         */
        get type_hint(): (string | null);
        set type_hint(val: (string | null));

        /**
         * @default null
         */
        get typeHint(): (string | null);
        set typeHint(val: (string | null));

        /**
         * @default null
         */
        get workspace(): (string | null);
        set workspace(val: (string | null));

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SessionItem.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<SessionItem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): SessionItem;

        // Signals
        /** @signal */
        connect<K extends keyof SessionItem.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SessionItem.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof SessionItem.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SessionItem.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof SessionItem.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SessionItem.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets the id for the session item, if any.
         * @returns a string containing the id; otherwise `null`
         */
        get_id(): (string | null);

        /**
         * Retrieves the metadata value for `key`.
         * 
         * If `expected_type` is non-`null`, any non-`null` value returned from this
         * function will match `expected_type`.
         * @param key the metadata key
         * @param expected_type a {@link GLib.VariantType} or `null`
         * @returns a non-floating {@link GLib.Variant} which should   be released with `g_variant_unref()`; otherwise `null`.
         */
        get_metadata_value(key: string, expected_type: (GLib.VariantType | null)): (GLib.Variant | null);

        /**
         * Gets the module-name that created an item.
         * @returns a module-name or `null`
         */
        get_module_name(): (string | null);

        /**
         * Gets the {@link Panel.Position} for the item.
         * @returns a {@link Panel.Position} or `null`
         */
        get_position(): (Position | null);

        /**
         * Gets the type hint for an item.
         * @returns a type-hint or `null`
         */
        get_type_hint(): (string | null);

        /**
         * Gets the workspace id for the item.
         * @returns a workspace or `null`
         */
        get_workspace(): (string | null);

        /**
         * If the item contains a metadata value for `key`.
         * 
         * Checks if a value exists for a metadata key and retrieves the {@link GLib.VariantType}
         * for that key.
         * @param key the name of the metadata
         * @returns `true` if `self` contains metadata named `key` and `value_type` is set   to the value's {@link GLib.VariantType}. Otherwise `false` and `value_type` is unchanged.
         */
        has_metadata(key: string): [boolean, GLib.VariantType | null];

        /**
         * Checks if the item contains metadata `key` with `expected_type`.
         * @param key the metadata key
         * @param expected_type the {@link GLib.VariantType} to check for `key`
         * @returns `true` if a value was found for `key` matching `expected_typed`;   otherwise `false` is returned.
         */
        has_metadata_with_type(key: string, expected_type: GLib.VariantType): boolean;

        /**
         * Sets the identifier for the item.
         * 
         * The identifier should generally be global to the session as it would
         * not be expected to come across multiple items with the same id.
         * @param id an optional identifier for the item
         */
        set_id(id: (string | null)): void;

        /**
         * Sets the value for metadata `key`.
         * 
         * If `value` is `null`, the metadata key is unset.
         * @param key the metadata key
         * @param value the value for `key` or `null`
         */
        set_metadata_value(key: string, value: (GLib.Variant | null)): void;

        /**
         * Sets the module-name for the session item.
         * 
         * This is generally used to help determine which plugin created
         * the item when decoding them at project load time.
         * @param module_name the module name owning the item
         */
        set_module_name(module_name: (string | null)): void;

        /**
         * Sets the position for `self`, if any.
         * @param position a {@link Panel.Position} or `null`
         */
        set_position(position: (Position | null)): void;

        /**
         * Sets the type-hint value for the item.
         * 
         * This is generally used to help inflate the right version of
         * an object when loading session items.
         * @param type_hint a type hint string for the item
         */
        set_type_hint(type_hint: (string | null)): void;

        /**
         * Sets the workspace id for the item.
         * 
         * This is generally used to tie an item to a specific workspace.
         * @param workspace a workspace string for the item
         */
        set_workspace(workspace: (string | null)): void;
    }


    namespace Settings {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @detailed
             * @run-last
             */
            changed: (arg0: string) => void;
            "notify::identifier": (pspec: GObject.ParamSpec) => void;
            "notify::path": (pspec: GObject.ParamSpec) => void;
            "notify::path-prefix": (pspec: GObject.ParamSpec) => void;
            "notify::path-suffix": (pspec: GObject.ParamSpec) => void;
            "notify::schema-id": (pspec: GObject.ParamSpec) => void;
            "notify::schema-id-prefix": (pspec: GObject.ParamSpec) => void;
            /**
             * @signal
             * @detailed
             * @run-last
             */
            "changed::identifier": (arg0: string) => void;
            /**
             * @signal
             * @detailed
             * @run-last
             */
            "changed::path": (arg0: string) => void;
            /**
             * @signal
             * @detailed
             * @run-last
             */
            "changed::path-prefix": (arg0: string) => void;
            /**
             * @signal
             * @detailed
             * @run-last
             */
            "changed::path-suffix": (arg0: string) => void;
            /**
             * @signal
             * @detailed
             * @run-last
             */
            "changed::schema-id": (arg0: string) => void;
            /**
             * @signal
             * @detailed
             * @run-last
             */
            "changed::schema-id-prefix": (arg0: string) => void;
            [key: `changed::${string}`]: (arg0: string) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.ActionGroup.ConstructorProps {
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
        }
    }

    /**
     * @gir-type Class
     */
    class Settings extends GObject.Object implements Gio.ActionGroup {
        static $gtype: GObject.GType<Settings>;

        // Properties
        /**
         * The "identifier" property is used to make unique paths.
         * 
         * This might be a unique "project-id" for example, in an IDE.
         * @construct-only
         * @default null
         */
        get identifier(): string;

        /**
         * @construct-only
         * @default null
         */
        get path(): string;

        /**
         * @construct-only
         * @default null
         */
        get path_prefix(): string;

        /**
         * @construct-only
         * @default null
         */
        get pathPrefix(): string;

        /**
         * @construct-only
         * @default null
         */
        get path_suffix(): string;

        /**
         * @construct-only
         * @default null
         */
        get pathSuffix(): string;

        /**
         * @construct-only
         * @default null
         */
        get schema_id(): string;

        /**
         * @construct-only
         * @default null
         */
        get schemaId(): string;

        /**
         * @construct-only
         * @default null
         */
        get schema_id_prefix(): string;

        /**
         * @construct-only
         * @default null
         */
        get schemaIdPrefix(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Settings.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Settings.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](identifier: string, schema_id: string): Settings;

        static new_relocatable(identifier: string, schema_id: string, schema_id_prefix: string, path_prefix: string, path_suffix: string): Settings;

        static new_with_path(identifier: string, schema_id: string, path: string): Settings;

        // Signals
        /** @signal */
        connect<K extends keyof Settings.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Settings.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Settings.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Settings.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Settings.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Settings.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * @param schema_id_prefix 
         * @param schema_id 
         * @param identifier 
         * @param path_prefix 
         * @param path_suffix 
         */
        static resolve_schema_path(schema_id_prefix: string, schema_id: string, identifier: string, path_prefix: string, path_suffix: string): string;

        // Methods
        /**
         * @param key 
         * @param object 
         * @param property 
         * @param flags 
         */
        bind(key: string, object: null, property: string, flags: Gio.SettingsBindFlags): void;

        /**
         * Like `panel_settings_bind()` but allows transforming to and from settings storage using
         * `get_mapping` and `set_mapping` transformation functions.
         * 
         * Call `panel_settings_unbind()` to unbind the mapping.
         * @param key The settings key
         * @param object the object to bind to
         * @param property the property of `object` to bind to
         * @param flags flags for the binding
         * @param get_mapping variant to value mapping
         * @param set_mapping value to variant mapping
         */
        bind_with_mapping(key: string, object: null, property: string, flags: Gio.SettingsBindFlags, get_mapping: (Gio.SettingsBindGetMapping | null), set_mapping: (Gio.SettingsBindSetMapping | null)): void;

        /**
         * @param key 
         */
        get_boolean(key: string): boolean;

        /**
         * @param key 
         */
        get_default_value(key: string): GLib.Variant;

        /**
         * @param key 
         */
        get_double(key: string): number;

        /**
         * @param key 
         */
        get_int(key: string): number;

        get_schema_id(): string;

        /**
         * @param key 
         */
        get_string(key: string): string;

        /**
         * @param key 
         */
        get_uint(key: string): number;

        /**
         * @param key the key to get the user value for
         * @returns the user's value, if set
         */
        get_user_value(key: string): (GLib.Variant | null);

        /**
         * @param key 
         */
        get_value(key: string): GLib.Variant;

        /**
         * @param key 
         * @param val 
         */
        set_boolean(key: string, val: boolean): void;

        /**
         * @param key 
         * @param val 
         */
        set_double(key: string, val: number): void;

        /**
         * @param key 
         * @param val 
         */
        set_int(key: string, val: number): void;

        /**
         * @param key 
         * @param val 
         */
        set_string(key: string, val: string): void;

        /**
         * @param key 
         * @param val 
         */
        set_uint(key: string, val: number): void;

        /**
         * @param key 
         * @param value 
         */
        set_value(key: string, value: GLib.Variant): void;

        /**
         * @param property 
         */
        unbind(property: string): void;

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
        activate_action(action_name: string, parameter: (GLib.Variant | null)): void;

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
        get_action_parameter_type(action_name: string): (GLib.VariantType | null);

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
        get_action_state(action_name: string): (GLib.Variant | null);

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
        get_action_state_hint(action_name: string): (GLib.Variant | null);

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
        get_action_state_type(action_name: string): (GLib.VariantType | null);

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
        vfunc_activate_action(action_name: string, parameter: (GLib.Variant | null)): void;

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
        vfunc_get_action_parameter_type(action_name: string): (GLib.VariantType | null);

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
        vfunc_get_action_state(action_name: string): (GLib.Variant | null);

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
        vfunc_get_action_state_hint(action_name: string): (GLib.Variant | null);

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
        vfunc_get_action_state_type(action_name: string): (GLib.VariantType | null);

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
    }


    namespace Statusbar {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::can-target": (pspec: GObject.ParamSpec) => void;
            "notify::css-classes": (pspec: GObject.ParamSpec) => void;
            "notify::css-name": (pspec: GObject.ParamSpec) => void;
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::focusable": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::layout-manager": (pspec: GObject.ParamSpec) => void;
            "notify::limit-events": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::overflow": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::root": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-role": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Widget.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps {

        }
    }

    /**
     * A panel status bar is meant to be displayed at the bottom of the
     * window. It can contain widgets in the prefix and in the suffix.
     * @gir-type Class
     */
    class Statusbar extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<Statusbar>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Statusbar.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Statusbar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Statusbar;

        // Signals
        /** @signal */
        connect<K extends keyof Statusbar.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Statusbar.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Statusbar.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Statusbar.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Statusbar.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Statusbar.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Adds a widget into the prefix with `priority`. The higher the
         * priority the closer to the start the widget will be added.
         * @param priority the priority
         * @param widget a {@link Gtk.Widget} to add.
         */
        add_prefix(priority: number, widget: Gtk.Widget): void;

        /**
         * Adds a widget into the suffix with `priority`. The higher the
         * priority the closer to the start the widget will be added.
         * @param priority the priority
         * @param widget a {@link Gtk.Widget} to add.
         */
        add_suffix(priority: number, widget: Gtk.Widget): void;

        /**
         * Removes `widget` from the {@link Panel.Statusbar}.
         * @param widget a {@link Gtk.Widget} to remove.
         */
        remove(widget: Gtk.Widget): void;

        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         * 
         * The accessible role cannot be changed once set.
         * @default Gtk.AccessibleRole.NONE
          * @category Inherited from Gtk.Accessible
         */
        get accessible_role(): Gtk.AccessibleRole;
        set accessible_role(val: Gtk.AccessibleRole);

        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         * 
         * The accessible role cannot be changed once set.
         * @default Gtk.AccessibleRole.NONE
          * @category Inherited from Gtk.Accessible
         */
        get accessibleRole(): Gtk.AccessibleRole;
        set accessibleRole(val: Gtk.AccessibleRole);

        /**
         * Requests the user's screen reader to announce the given message.
         * 
         * This kind of notification is useful for messages that
         * either have only a visual representation or that are not
         * exposed visually at all, e.g. a notification about a
         * successful operation.
         * 
         * Also, by using this API, you can ensure that the message
         * does not interrupts the user's current screen reader output.
         * @param message the string to announce
         * @param priority the priority of the announcement
         */
        announce(message: string, priority: Gtk.AccessibleAnnouncementPriority): void;

        /**
         * Retrieves the accessible identifier for the accessible object.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations.
         * 
         * It is left to the accessible implementation to define the scope
         * and uniqueness of the identifier.
         * @returns the accessible identifier
         */
        get_accessible_id(): (string | null);

        /**
         * Retrieves the accessible parent for an accessible object.
         * 
         * This function returns `NULL` for top level widgets.
         * @returns the accessible parent
         */
        get_accessible_parent(): (Gtk.Accessible | null);

        /**
         * Retrieves the accessible role of an accessible object.
         * @returns the accessible role
         */
        get_accessible_role(): Gtk.AccessibleRole;

        /**
         * Retrieves the implementation for the given accessible object.
         * @returns the accessible implementation object
         */
        get_at_context(): Gtk.ATContext;

        /**
         * Queries the coordinates and dimensions of this accessible
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @returns true if the bounds are valid, and false otherwise
         */
        get_bounds(): [boolean, number, number, number, number];

        /**
         * Retrieves the first accessible child of an accessible object.
         * @returns the first accessible child
         */
        get_first_accessible_child(): (Gtk.Accessible | null);

        /**
         * Retrieves the next accessible sibling of an accessible object
         * @returns the next accessible sibling
         */
        get_next_accessible_sibling(): (Gtk.Accessible | null);

        /**
         * Queries a platform state, such as focus.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @returns the value of state for the accessible
         */
        get_platform_state(state: Gtk.AccessiblePlatformState): boolean;

        /**
         * Resets the accessible property to its default value.
         * @param property the accessible property
         */
        reset_property(property: Gtk.AccessibleProperty): void;

        /**
         * Resets the accessible relation to its default value.
         * @param relation the accessible relation
         */
        reset_relation(relation: Gtk.AccessibleRelation): void;

        /**
         * Resets the accessible state to its default value.
         * @param state the accessible state
         */
        reset_state(state: Gtk.AccessibleState): void;

        /**
         * Sets the parent and sibling of an accessible object.
         * 
         * This function is meant to be used by accessible implementations that are
         * not part of the widget hierarchy, and but act as a logical bridge between
         * widgets. For instance, if a widget creates an object that holds metadata
         * for each child, and you want that object to implement the {@link Gtk.Accessible}
         * interface, you will use this function to ensure that the parent of each
         * child widget is the metadata object, and the parent of each metadata
         * object is the container widget.
         * @param parent the parent accessible object
         * @param next_sibling the sibling accessible object
         */
        set_accessible_parent(parent: (Gtk.Accessible | null), next_sibling: (Gtk.Accessible | null)): void;

        /**
         * Updates the next accessible sibling.
         * 
         * That might be useful when a new child of a custom accessible
         * is created, and it needs to be linked to a previous child.
         * @param new_sibling the new next accessible sibling to set
         */
        update_next_accessible_sibling(new_sibling: (Gtk.Accessible | null)): void;

        /**
         * Informs ATs that the platform state has changed.
         * 
         * This function should be used by {@link Gtk.Accessible} implementations that
         * have a platform state but are not widgets. Widgets handle platform
         * states automatically.
         * @param state the platform state to update
         */
        update_platform_state(state: Gtk.AccessiblePlatformState): void;

        /**
         * Updates an array of accessible properties.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * property change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param properties an array of accessible properties
         * @param values an array of `GValues`, one for each property
         */
        update_property(properties: Gtk.AccessibleProperty[], values: (GObject.Value | any)[]): void;

        /**
         * Updates an array of accessible relations.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * relation change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param relations an array of accessible relations
         * @param values an array of `GValues`, one for each relation
         */
        update_relation(relations: Gtk.AccessibleRelation[], values: (GObject.Value | any)[]): void;

        /**
         * Updates an array of accessible states.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * state change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param states an array of accessible states
         * @param values an array of `GValues`, one for each state
         */
        update_state(states: Gtk.AccessibleState[], values: (GObject.Value | any)[]): void;

        /**
         * Retrieves the accessible identifier for the accessible object.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations.
         * 
         * It is left to the accessible implementation to define the scope
         * and uniqueness of the identifier.
         * @virtual
         */
        vfunc_get_accessible_id(): (string | null);

        /**
         * Retrieves the accessible parent for an accessible object.
         * 
         * This function returns `NULL` for top level widgets.
         * @virtual
         */
        vfunc_get_accessible_parent(): (Gtk.Accessible | null);

        /**
         * Retrieves the implementation for the given accessible object.
         * @virtual
         */
        vfunc_get_at_context(): (Gtk.ATContext | null);

        /**
         * Queries the coordinates and dimensions of this accessible
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @virtual
         */
        vfunc_get_bounds(): [boolean, number, number, number, number];

        /**
         * Retrieves the first accessible child of an accessible object.
         * @virtual
         */
        vfunc_get_first_accessible_child(): (Gtk.Accessible | null);

        /**
         * Retrieves the next accessible sibling of an accessible object
         * @virtual
         */
        vfunc_get_next_accessible_sibling(): (Gtk.Accessible | null);

        /**
         * Queries a platform state, such as focus.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @virtual
         */
        vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;

        /**
         * Gets the ID of the `buildable` object.
         * 
         * {@link Gtk.Builder} sets the name based on the ID attribute
         * of the `<object>` tag used to construct the `buildable`.
         * @returns the ID of the buildable object
         */
        get_buildable_id(): (string | null);

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
         * Similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         * @virtual
         */
        vfunc_custom_finished(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * Called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * Called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string): [boolean, Gtk.BuildableParser, never];

        /**
         * The getter corresponding to `set_id`. Implement this
         *   if you implement `set_id`.
         * @virtual
         */
        vfunc_get_id(): string;

        /**
         * Retrieves the internal child called `childname` of the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param childname name of child
         * @virtual
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

        /**
         * Called when a builder finishes the parsing
         *  of a UI definition. It is normally not necessary to implement this,
         *  unless you need to perform special cleanup actions. {@link Gtk.Window} sets
         *  the {@link Gtk.Widget.visible} property here.
         * @param builder 
         * @virtual
         */
        vfunc_parser_finished(builder: Gtk.Builder): void;

        /**
         * Sets a property of a buildable object.
         *  It is normally not necessary to implement this, `g_object_set_property()`
         *  is used by default. {@link Gtk.Window} implements this to delay showing itself
         *  (i.e. setting the {@link Gtk.Widget.visible} property) until the whole
         *  interface is created.
         * @param builder 
         * @param name 
         * @param value 
         * @virtual
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: unknown): void;

        /**
         * Stores the id attribute given in the {@link Gtk.Builder} UI definition.
         *   {@link Gtk.Widget} stores the name as object data. Implement this method if your
         *   object has some notion of &#x201C;ID&#x201D; and it makes sense to map the XML id
         *   attribute to it.
         * @param id 
         * @virtual
         */
        vfunc_set_id(id: string): void;
    }


    namespace ThemeSelector {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            "notify::action-name": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::can-target": (pspec: GObject.ParamSpec) => void;
            "notify::css-classes": (pspec: GObject.ParamSpec) => void;
            "notify::css-name": (pspec: GObject.ParamSpec) => void;
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::focusable": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::layout-manager": (pspec: GObject.ParamSpec) => void;
            "notify::limit-events": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::overflow": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::root": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-role": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Widget.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps {
            action_name: string;
            actionName: string;
        }
    }

    /**
     * A widget that allow selecting theme preference between "dark",
     * "light" and "follow" the system preference.
     * 
     * <picture>
     *   <source srcset="theme-selector-dark.png" media="(prefers-color-scheme: dark)">
     *   <img src="theme-selector.png" alt="theme-selector">
     * </picture>
     * 
     * Upon activation it will activate the named action in
     * {@link Panel.ThemeSelector.action_name}.
     * @gir-type Class
     */
    class ThemeSelector extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<ThemeSelector>;

        // Properties
        /**
         * The name of the action activated on activation.
         * @default null
         */
        get action_name(): string;
        set action_name(val: string);

        /**
         * The name of the action activated on activation.
         * @default null
         */
        get actionName(): string;
        set actionName(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ThemeSelector.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ThemeSelector.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): ThemeSelector;

        // Signals
        /** @signal */
        connect<K extends keyof ThemeSelector.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ThemeSelector.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ThemeSelector.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ThemeSelector.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ThemeSelector.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ThemeSelector.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
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

        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         * 
         * The accessible role cannot be changed once set.
         * @default Gtk.AccessibleRole.NONE
          * @category Inherited from Gtk.Accessible
         */
        get accessible_role(): Gtk.AccessibleRole;
        set accessible_role(val: Gtk.AccessibleRole);

        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         * 
         * The accessible role cannot be changed once set.
         * @default Gtk.AccessibleRole.NONE
          * @category Inherited from Gtk.Accessible
         */
        get accessibleRole(): Gtk.AccessibleRole;
        set accessibleRole(val: Gtk.AccessibleRole);

        /**
         * Requests the user's screen reader to announce the given message.
         * 
         * This kind of notification is useful for messages that
         * either have only a visual representation or that are not
         * exposed visually at all, e.g. a notification about a
         * successful operation.
         * 
         * Also, by using this API, you can ensure that the message
         * does not interrupts the user's current screen reader output.
         * @param message the string to announce
         * @param priority the priority of the announcement
         */
        announce(message: string, priority: Gtk.AccessibleAnnouncementPriority): void;

        /**
         * Retrieves the accessible identifier for the accessible object.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations.
         * 
         * It is left to the accessible implementation to define the scope
         * and uniqueness of the identifier.
         * @returns the accessible identifier
         */
        get_accessible_id(): (string | null);

        /**
         * Retrieves the accessible parent for an accessible object.
         * 
         * This function returns `NULL` for top level widgets.
         * @returns the accessible parent
         */
        get_accessible_parent(): (Gtk.Accessible | null);

        /**
         * Retrieves the accessible role of an accessible object.
         * @returns the accessible role
         */
        get_accessible_role(): Gtk.AccessibleRole;

        /**
         * Retrieves the implementation for the given accessible object.
         * @returns the accessible implementation object
         */
        get_at_context(): Gtk.ATContext;

        /**
         * Queries the coordinates and dimensions of this accessible
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @returns true if the bounds are valid, and false otherwise
         */
        get_bounds(): [boolean, number, number, number, number];

        /**
         * Retrieves the first accessible child of an accessible object.
         * @returns the first accessible child
         */
        get_first_accessible_child(): (Gtk.Accessible | null);

        /**
         * Retrieves the next accessible sibling of an accessible object
         * @returns the next accessible sibling
         */
        get_next_accessible_sibling(): (Gtk.Accessible | null);

        /**
         * Queries a platform state, such as focus.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @returns the value of state for the accessible
         */
        get_platform_state(state: Gtk.AccessiblePlatformState): boolean;

        /**
         * Resets the accessible property to its default value.
         * @param property the accessible property
         */
        reset_property(property: Gtk.AccessibleProperty): void;

        /**
         * Resets the accessible relation to its default value.
         * @param relation the accessible relation
         */
        reset_relation(relation: Gtk.AccessibleRelation): void;

        /**
         * Resets the accessible state to its default value.
         * @param state the accessible state
         */
        reset_state(state: Gtk.AccessibleState): void;

        /**
         * Sets the parent and sibling of an accessible object.
         * 
         * This function is meant to be used by accessible implementations that are
         * not part of the widget hierarchy, and but act as a logical bridge between
         * widgets. For instance, if a widget creates an object that holds metadata
         * for each child, and you want that object to implement the {@link Gtk.Accessible}
         * interface, you will use this function to ensure that the parent of each
         * child widget is the metadata object, and the parent of each metadata
         * object is the container widget.
         * @param parent the parent accessible object
         * @param next_sibling the sibling accessible object
         */
        set_accessible_parent(parent: (Gtk.Accessible | null), next_sibling: (Gtk.Accessible | null)): void;

        /**
         * Updates the next accessible sibling.
         * 
         * That might be useful when a new child of a custom accessible
         * is created, and it needs to be linked to a previous child.
         * @param new_sibling the new next accessible sibling to set
         */
        update_next_accessible_sibling(new_sibling: (Gtk.Accessible | null)): void;

        /**
         * Informs ATs that the platform state has changed.
         * 
         * This function should be used by {@link Gtk.Accessible} implementations that
         * have a platform state but are not widgets. Widgets handle platform
         * states automatically.
         * @param state the platform state to update
         */
        update_platform_state(state: Gtk.AccessiblePlatformState): void;

        /**
         * Updates an array of accessible properties.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * property change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param properties an array of accessible properties
         * @param values an array of `GValues`, one for each property
         */
        update_property(properties: Gtk.AccessibleProperty[], values: (GObject.Value | any)[]): void;

        /**
         * Updates an array of accessible relations.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * relation change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param relations an array of accessible relations
         * @param values an array of `GValues`, one for each relation
         */
        update_relation(relations: Gtk.AccessibleRelation[], values: (GObject.Value | any)[]): void;

        /**
         * Updates an array of accessible states.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * state change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param states an array of accessible states
         * @param values an array of `GValues`, one for each state
         */
        update_state(states: Gtk.AccessibleState[], values: (GObject.Value | any)[]): void;

        /**
         * Retrieves the accessible identifier for the accessible object.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations.
         * 
         * It is left to the accessible implementation to define the scope
         * and uniqueness of the identifier.
         * @virtual
         */
        vfunc_get_accessible_id(): (string | null);

        /**
         * Retrieves the accessible parent for an accessible object.
         * 
         * This function returns `NULL` for top level widgets.
         * @virtual
         */
        vfunc_get_accessible_parent(): (Gtk.Accessible | null);

        /**
         * Retrieves the implementation for the given accessible object.
         * @virtual
         */
        vfunc_get_at_context(): (Gtk.ATContext | null);

        /**
         * Queries the coordinates and dimensions of this accessible
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @virtual
         */
        vfunc_get_bounds(): [boolean, number, number, number, number];

        /**
         * Retrieves the first accessible child of an accessible object.
         * @virtual
         */
        vfunc_get_first_accessible_child(): (Gtk.Accessible | null);

        /**
         * Retrieves the next accessible sibling of an accessible object
         * @virtual
         */
        vfunc_get_next_accessible_sibling(): (Gtk.Accessible | null);

        /**
         * Queries a platform state, such as focus.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @virtual
         */
        vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;

        /**
         * Gets the ID of the `buildable` object.
         * 
         * {@link Gtk.Builder} sets the name based on the ID attribute
         * of the `<object>` tag used to construct the `buildable`.
         * @returns the ID of the buildable object
         */
        get_buildable_id(): (string | null);

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
         * Similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         * @virtual
         */
        vfunc_custom_finished(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * Called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * Called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string): [boolean, Gtk.BuildableParser, never];

        /**
         * The getter corresponding to `set_id`. Implement this
         *   if you implement `set_id`.
         * @virtual
         */
        vfunc_get_id(): string;

        /**
         * Retrieves the internal child called `childname` of the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param childname name of child
         * @virtual
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

        /**
         * Called when a builder finishes the parsing
         *  of a UI definition. It is normally not necessary to implement this,
         *  unless you need to perform special cleanup actions. {@link Gtk.Window} sets
         *  the {@link Gtk.Widget.visible} property here.
         * @param builder 
         * @virtual
         */
        vfunc_parser_finished(builder: Gtk.Builder): void;

        /**
         * Sets a property of a buildable object.
         *  It is normally not necessary to implement this, `g_object_set_property()`
         *  is used by default. {@link Gtk.Window} implements this to delay showing itself
         *  (i.e. setting the {@link Gtk.Widget.visible} property) until the whole
         *  interface is created.
         * @param builder 
         * @param name 
         * @param value 
         * @virtual
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: unknown): void;

        /**
         * Stores the id attribute given in the {@link Gtk.Builder} UI definition.
         *   {@link Gtk.Widget} stores the name as object data. Implement this method if your
         *   object has some notion of &#x201C;ID&#x201D; and it makes sense to map the XML id
         *   attribute to it.
         * @param id 
         * @virtual
         */
        vfunc_set_id(id: string): void;
    }


    namespace ToggleButton {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            "notify::area": (pspec: GObject.ParamSpec) => void;
            "notify::dock": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::can-target": (pspec: GObject.ParamSpec) => void;
            "notify::css-classes": (pspec: GObject.ParamSpec) => void;
            "notify::css-name": (pspec: GObject.ParamSpec) => void;
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::focusable": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::layout-manager": (pspec: GObject.ParamSpec) => void;
            "notify::limit-events": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::overflow": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::root": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-role": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Widget.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps {
            area: Area;
            dock: Dock;
        }
    }

    /**
     * The {@link Panel.ToggleButton} is a button used to toggle the visibility
     * of a {@link Panel.Dock} area.
     * 
     * <picture>
     *   <source srcset="toggle-button-dark.png" media="(prefers-color-scheme: dark)">
     *   <img src="toggle-button.png" alt="toggle-button">
     * </picture>
     * 
     * It will automatically reveal or hide the specified area from
     * {@link Panel.ToggleButton.dock}.
     * @gir-type Class
     */
    class ToggleButton extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<ToggleButton>;

        // Properties
        /**
         * The area this button will reveal.
         * @construct-only
         * @default Panel.Area.START
         */
        get area(): Area;

        /**
         * The associated {@link Panel.Dock}
         */
        get dock(): Dock;
        set dock(val: Dock);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ToggleButton.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ToggleButton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](dock: Dock, area: Area): ToggleButton;

        // Signals
        /** @signal */
        connect<K extends keyof ToggleButton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ToggleButton.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ToggleButton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ToggleButton.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ToggleButton.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ToggleButton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         * 
         * The accessible role cannot be changed once set.
         * @default Gtk.AccessibleRole.NONE
          * @category Inherited from Gtk.Accessible
         */
        get accessible_role(): Gtk.AccessibleRole;
        set accessible_role(val: Gtk.AccessibleRole);

        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         * 
         * The accessible role cannot be changed once set.
         * @default Gtk.AccessibleRole.NONE
          * @category Inherited from Gtk.Accessible
         */
        get accessibleRole(): Gtk.AccessibleRole;
        set accessibleRole(val: Gtk.AccessibleRole);

        /**
         * Requests the user's screen reader to announce the given message.
         * 
         * This kind of notification is useful for messages that
         * either have only a visual representation or that are not
         * exposed visually at all, e.g. a notification about a
         * successful operation.
         * 
         * Also, by using this API, you can ensure that the message
         * does not interrupts the user's current screen reader output.
         * @param message the string to announce
         * @param priority the priority of the announcement
         */
        announce(message: string, priority: Gtk.AccessibleAnnouncementPriority): void;

        /**
         * Retrieves the accessible identifier for the accessible object.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations.
         * 
         * It is left to the accessible implementation to define the scope
         * and uniqueness of the identifier.
         * @returns the accessible identifier
         */
        get_accessible_id(): (string | null);

        /**
         * Retrieves the accessible parent for an accessible object.
         * 
         * This function returns `NULL` for top level widgets.
         * @returns the accessible parent
         */
        get_accessible_parent(): (Gtk.Accessible | null);

        /**
         * Retrieves the accessible role of an accessible object.
         * @returns the accessible role
         */
        get_accessible_role(): Gtk.AccessibleRole;

        /**
         * Retrieves the implementation for the given accessible object.
         * @returns the accessible implementation object
         */
        get_at_context(): Gtk.ATContext;

        /**
         * Queries the coordinates and dimensions of this accessible
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @returns true if the bounds are valid, and false otherwise
         */
        get_bounds(): [boolean, number, number, number, number];

        /**
         * Retrieves the first accessible child of an accessible object.
         * @returns the first accessible child
         */
        get_first_accessible_child(): (Gtk.Accessible | null);

        /**
         * Retrieves the next accessible sibling of an accessible object
         * @returns the next accessible sibling
         */
        get_next_accessible_sibling(): (Gtk.Accessible | null);

        /**
         * Queries a platform state, such as focus.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @returns the value of state for the accessible
         */
        get_platform_state(state: Gtk.AccessiblePlatformState): boolean;

        /**
         * Resets the accessible property to its default value.
         * @param property the accessible property
         */
        reset_property(property: Gtk.AccessibleProperty): void;

        /**
         * Resets the accessible relation to its default value.
         * @param relation the accessible relation
         */
        reset_relation(relation: Gtk.AccessibleRelation): void;

        /**
         * Resets the accessible state to its default value.
         * @param state the accessible state
         */
        reset_state(state: Gtk.AccessibleState): void;

        /**
         * Sets the parent and sibling of an accessible object.
         * 
         * This function is meant to be used by accessible implementations that are
         * not part of the widget hierarchy, and but act as a logical bridge between
         * widgets. For instance, if a widget creates an object that holds metadata
         * for each child, and you want that object to implement the {@link Gtk.Accessible}
         * interface, you will use this function to ensure that the parent of each
         * child widget is the metadata object, and the parent of each metadata
         * object is the container widget.
         * @param parent the parent accessible object
         * @param next_sibling the sibling accessible object
         */
        set_accessible_parent(parent: (Gtk.Accessible | null), next_sibling: (Gtk.Accessible | null)): void;

        /**
         * Updates the next accessible sibling.
         * 
         * That might be useful when a new child of a custom accessible
         * is created, and it needs to be linked to a previous child.
         * @param new_sibling the new next accessible sibling to set
         */
        update_next_accessible_sibling(new_sibling: (Gtk.Accessible | null)): void;

        /**
         * Informs ATs that the platform state has changed.
         * 
         * This function should be used by {@link Gtk.Accessible} implementations that
         * have a platform state but are not widgets. Widgets handle platform
         * states automatically.
         * @param state the platform state to update
         */
        update_platform_state(state: Gtk.AccessiblePlatformState): void;

        /**
         * Updates an array of accessible properties.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * property change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param properties an array of accessible properties
         * @param values an array of `GValues`, one for each property
         */
        update_property(properties: Gtk.AccessibleProperty[], values: (GObject.Value | any)[]): void;

        /**
         * Updates an array of accessible relations.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * relation change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param relations an array of accessible relations
         * @param values an array of `GValues`, one for each relation
         */
        update_relation(relations: Gtk.AccessibleRelation[], values: (GObject.Value | any)[]): void;

        /**
         * Updates an array of accessible states.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * state change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param states an array of accessible states
         * @param values an array of `GValues`, one for each state
         */
        update_state(states: Gtk.AccessibleState[], values: (GObject.Value | any)[]): void;

        /**
         * Retrieves the accessible identifier for the accessible object.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations.
         * 
         * It is left to the accessible implementation to define the scope
         * and uniqueness of the identifier.
         * @virtual
         */
        vfunc_get_accessible_id(): (string | null);

        /**
         * Retrieves the accessible parent for an accessible object.
         * 
         * This function returns `NULL` for top level widgets.
         * @virtual
         */
        vfunc_get_accessible_parent(): (Gtk.Accessible | null);

        /**
         * Retrieves the implementation for the given accessible object.
         * @virtual
         */
        vfunc_get_at_context(): (Gtk.ATContext | null);

        /**
         * Queries the coordinates and dimensions of this accessible
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @virtual
         */
        vfunc_get_bounds(): [boolean, number, number, number, number];

        /**
         * Retrieves the first accessible child of an accessible object.
         * @virtual
         */
        vfunc_get_first_accessible_child(): (Gtk.Accessible | null);

        /**
         * Retrieves the next accessible sibling of an accessible object
         * @virtual
         */
        vfunc_get_next_accessible_sibling(): (Gtk.Accessible | null);

        /**
         * Queries a platform state, such as focus.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @virtual
         */
        vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;

        /**
         * Gets the ID of the `buildable` object.
         * 
         * {@link Gtk.Builder} sets the name based on the ID attribute
         * of the `<object>` tag used to construct the `buildable`.
         * @returns the ID of the buildable object
         */
        get_buildable_id(): (string | null);

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
         * Similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         * @virtual
         */
        vfunc_custom_finished(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * Called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * Called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string): [boolean, Gtk.BuildableParser, never];

        /**
         * The getter corresponding to `set_id`. Implement this
         *   if you implement `set_id`.
         * @virtual
         */
        vfunc_get_id(): string;

        /**
         * Retrieves the internal child called `childname` of the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param childname name of child
         * @virtual
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

        /**
         * Called when a builder finishes the parsing
         *  of a UI definition. It is normally not necessary to implement this,
         *  unless you need to perform special cleanup actions. {@link Gtk.Window} sets
         *  the {@link Gtk.Widget.visible} property here.
         * @param builder 
         * @virtual
         */
        vfunc_parser_finished(builder: Gtk.Builder): void;

        /**
         * Sets a property of a buildable object.
         *  It is normally not necessary to implement this, `g_object_set_property()`
         *  is used by default. {@link Gtk.Window} implements this to delay showing itself
         *  (i.e. setting the {@link Gtk.Widget.visible} property) until the whole
         *  interface is created.
         * @param builder 
         * @param name 
         * @param value 
         * @virtual
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: unknown): void;

        /**
         * Stores the id attribute given in the {@link Gtk.Builder} UI definition.
         *   {@link Gtk.Widget} stores the name as object data. Implement this method if your
         *   object has some notion of &#x201C;ID&#x201D; and it makes sense to map the XML id
         *   attribute to it.
         * @param id 
         * @virtual
         */
        vfunc_set_id(id: string): void;
    }


    namespace Widget {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            /**
             * Gets the default widget to focus within the {@link Panel.Widget}. The first
             * handler for this signal is expected to return a widget, or `null` if
             * there is nothing to focus.
             * @signal
             * @run-last
             */
            "get-default-focus": () => (Gtk.Widget | null);
            /**
             * The "presented" signal is emitted when the widget is brought
             * to the front of a frame.
             * @signal
             * @run-last
             */
            presented: () => void;
            "notify::busy": (pspec: GObject.ParamSpec) => void;
            "notify::can-maximize": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::icon": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::kind": (pspec: GObject.ParamSpec) => void;
            "notify::menu-model": (pspec: GObject.ParamSpec) => void;
            "notify::modified": (pspec: GObject.ParamSpec) => void;
            "notify::needs-attention": (pspec: GObject.ParamSpec) => void;
            "notify::reorderable": (pspec: GObject.ParamSpec) => void;
            "notify::save-delegate": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::can-target": (pspec: GObject.ParamSpec) => void;
            "notify::css-classes": (pspec: GObject.ParamSpec) => void;
            "notify::css-name": (pspec: GObject.ParamSpec) => void;
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::focusable": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::layout-manager": (pspec: GObject.ParamSpec) => void;
            "notify::limit-events": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::overflow": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::root": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-role": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Widget.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps {
            busy: boolean;
            can_maximize: boolean;
            canMaximize: boolean;
            child: (Gtk.Widget | null);
            icon: (Gio.Icon | null);
            icon_name: (string | null);
            iconName: (string | null);
            id: string;
            kind: string;
            menu_model: (Gio.MenuModel | null);
            menuModel: (Gio.MenuModel | null);
            modified: boolean;
            needs_attention: boolean;
            needsAttention: boolean;
            reorderable: boolean;
            save_delegate: (SaveDelegate | null);
            saveDelegate: (SaveDelegate | null);
            title: (string | null);
            tooltip: (string | null);
        }
    }

    /**
     * PanelWidget is the base widget class for widgets added to a
     * {@link Panel.Frame}. It can be use as-is or you can subclass it.
     * @gir-type Class
     */
    class Widget extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<Widget>;

        // Properties
        /**
         * @read-only
         * @default false
         */
        get busy(): boolean;

        /**
         * @default false
         */
        get can_maximize(): boolean;
        set can_maximize(val: boolean);

        /**
         * @default false
         */
        get canMaximize(): boolean;
        set canMaximize(val: boolean);

        /**
         * The child inside this widget.
         */
        get child(): (Gtk.Widget | null);
        set child(val: (Gtk.Widget | null));

        /**
         * The icon for this widget.
         */
        get icon(): (Gio.Icon | null);
        set icon(val: (Gio.Icon | null));

        /**
         * The icon name for this widget.
         * @default null
         */
        get icon_name(): (string | null);
        set icon_name(val: (string | null));

        /**
         * The icon name for this widget.
         * @default null
         */
        get iconName(): (string | null);
        set iconName(val: (string | null));

        /**
         * @default null
         */
        get id(): string;
        set id(val: string);

        /**
         * @default unknown
         */
        get kind(): string;
        set kind(val: string);

        /**
         * A menu model to display additional options for the page to the user via
         * menus.
         */
        get menu_model(): (Gio.MenuModel | null);
        set menu_model(val: (Gio.MenuModel | null));

        /**
         * A menu model to display additional options for the page to the user via
         * menus.
         */
        get menuModel(): (Gio.MenuModel | null);
        set menuModel(val: (Gio.MenuModel | null));

        /**
         * @default false
         */
        get modified(): boolean;
        set modified(val: boolean);

        /**
         * @default false
         */
        get needs_attention(): boolean;
        set needs_attention(val: boolean);

        /**
         * @default false
         */
        get needsAttention(): boolean;
        set needsAttention(val: boolean);

        /**
         * @default true
         */
        get reorderable(): boolean;
        set reorderable(val: boolean);

        /**
         * The save delegate attached to this widget.
         */
        get save_delegate(): (SaveDelegate | null);
        set save_delegate(val: (SaveDelegate | null));

        /**
         * The save delegate attached to this widget.
         */
        get saveDelegate(): (SaveDelegate | null);
        set saveDelegate(val: (SaveDelegate | null));

        /**
         * The title for this widget.
         * @default null
         */
        get title(): (string | null);
        set title(val: (string | null));

        /**
         * The tooltip to display in tabs for the widget.
         * @since 1.2
         * @default null
         */
        get tooltip(): (string | null);
        set tooltip(val: (string | null));

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Widget.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Widget.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Widget;

        // Signals
        /** @signal */
        connect<K extends keyof Widget.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Widget.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Widget.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Widget.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Widget.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Widget.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * @param action_name a prefixed action name, such as "clipboard.paste"
         * @param parameter_type the parameter type
         * @param activate callback to use when the action is activated
         */
        static install_action(action_name: string, parameter_type: (string | null), activate: Gtk.WidgetActionActivateFunc): void;

        /**
         * @param action_name name of the action
         * @param property_name name of the property in instances of `widget_class`   or any parent class.
         */
        static install_property_action(action_name: string, property_name: string): void;

        // Virtual methods
        /**
         * Discovers the widget that should be focused as the default widget
         * for the {@link Panel.Widget}.
         * 
         * For example, if you want to focus a text editor by default, you might
         * return the {@link Gtk.TextView} inside your widgetry.
         * @virtual
         */
        vfunc_get_default_focus(): (Gtk.Widget | null);

        /**
         * @virtual
         */
        vfunc_presented(): void;

        // Methods
        /**
         * @param action_name 
         * @param enabled 
         */
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
         * @returns a {@link Gtk.Widget} or `null`
         */
        get_child(): (Gtk.Widget | null);

        /**
         * Discovers the widget that should be focused as the default widget
         * for the {@link Panel.Widget}.
         * 
         * For example, if you want to focus a text editor by default, you might
         * return the {@link Gtk.TextView} inside your widgetry.
         * @returns the default widget to focus within   the {@link Panel.Widget}.
         */
        get_default_focus(): (Gtk.Widget | null);

        /**
         * Gets a {@link Gio.Icon} for the widget.
         * @returns a {@link Gio.Icon} or `null`
         */
        get_icon(): (Gio.Icon | null);

        /**
         * Gets the icon name for the widget.
         * @returns the icon name or `null`
         */
        get_icon_name(): (string | null);

        /**
         * Gets the id of the panel widget.
         * @returns The id of the panel widget.
         */
        get_id(): string;

        get_kind(): string;

        /**
         * Gets the {@link Gio.MenuModel} for the widget.
         * 
         * {@link Panel.FrameHeader} may use this model to display additional options
         * for the page to the user via menus.
         * @returns a {@link Gio.MenuModel}
         */
        get_menu_model(): (Gio.MenuModel | null);

        /**
         * Gets the modified status of a panel widget
         * @returns the modified status of the panel widget.
         */
        get_modified(): boolean;

        get_needs_attention(): boolean;

        /**
         * Gets teh position of the widget within the dock.
         * @returns a {@link Panel.Position} or `null` if the   widget isn't within a {@link Panel.Frame}.
         */
        get_position(): (Position | null);

        get_reorderable(): boolean;

        /**
         * Gets the {@link Panel.Widget.save_delegate} property.
         * 
         * The save delegate may be used to perform save operations on the
         * content within the widget.
         * 
         * Document editors might use this to save the file to disk.
         * @returns a {@link Panel.SaveDelegate} or `null`
         */
        get_save_delegate(): (SaveDelegate | null);

        /**
         * Gets the title for the widget.
         * @returns the title or `null`
         */
        get_title(): (string | null);

        /**
         * Gets the tooltip for the widget.
         * @returns the tooltip or `null`
         */
        get_tooltip(): (string | null);

        /**
         * @param prefix 
         * @param group 
         */
        insert_action_group(prefix: string, group: Gio.ActionGroup): void;

        /**
         * @param args 
         */
    // Conflicted with Gtk.Widget.insert_action_group
        insert_action_group(...args: never[]): any;

        mark_busy(): void;

        maximize(): void;

        raise(): void;

        /**
         * @param can_maximize 
         */
        set_can_maximize(can_maximize: boolean): void;

        /**
         * Sets the child widget of the panel.
         * @param child a {@link Gtk.Widget} or `null`
         */
        set_child(child: (Gtk.Widget | null)): void;

        /**
         * Sets a {@link Gio.Icon} for the widget.
         * @param icon a {@link Gio.Icon} or `null`
         */
        set_icon(icon: (Gio.Icon | null)): void;

        /**
         * Sets the icon name for the widget.
         * @param icon_name the icon name or `null`
         */
        set_icon_name(icon_name: (string | null)): void;

        /**
         * Sets the id of the panel widget.
         * @param id the id to set for the panel widget.
         */
        set_id(id: string): void;

        /**
         * Sets the kind of the widget.
         * @param kind the kind of this widget
         */
        set_kind(kind: (string | null)): void;

        /**
         * Sets the {@link Gio.MenuModel} for the widget.
         * 
         * {@link Panel.FrameHeader} may use this model to display additional options
         * for the page to the user via menus.
         * @param menu_model a {@link Gio.MenuModel}
         */
        set_menu_model(menu_model: (Gio.MenuModel | null)): void;

        /**
         * Sets the modified status of a panel widget.
         * @param modified the modified status
         */
        set_modified(modified: boolean): void;

        /**
         * @param needs_attention 
         */
        set_needs_attention(needs_attention: boolean): void;

        /**
         * @param reorderable 
         */
        set_reorderable(reorderable: boolean): void;

        /**
         * Sets the {@link Panel.Widget.save_delegate} property.
         * 
         * The save delegate may be used to perform save operations on the
         * content within the widget.
         * 
         * Document editors might use this to save the file to disk.
         * @param save_delegate a {@link Panel.SaveDelegate} or `null`
         */
        set_save_delegate(save_delegate: (SaveDelegate | null)): void;

        /**
         * Sets the title for the widget.
         * @param title the title or `null`
         */
        set_title(title: (string | null)): void;

        /**
         * Sets the tooltip for the widget to be displayed in tabs.
         * @param tooltip the tooltip or `null`
         */
        set_tooltip(tooltip: (string | null)): void;

        unmark_busy(): void;

        unmaximize(): void;

        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         * 
         * The accessible role cannot be changed once set.
         * @default Gtk.AccessibleRole.NONE
          * @category Inherited from Gtk.Accessible
         */
        get accessible_role(): Gtk.AccessibleRole;
        set accessible_role(val: Gtk.AccessibleRole);

        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         * 
         * The accessible role cannot be changed once set.
         * @default Gtk.AccessibleRole.NONE
          * @category Inherited from Gtk.Accessible
         */
        get accessibleRole(): Gtk.AccessibleRole;
        set accessibleRole(val: Gtk.AccessibleRole);

        /**
         * Requests the user's screen reader to announce the given message.
         * 
         * This kind of notification is useful for messages that
         * either have only a visual representation or that are not
         * exposed visually at all, e.g. a notification about a
         * successful operation.
         * 
         * Also, by using this API, you can ensure that the message
         * does not interrupts the user's current screen reader output.
         * @param message the string to announce
         * @param priority the priority of the announcement
         */
        announce(message: string, priority: Gtk.AccessibleAnnouncementPriority): void;

        /**
         * Retrieves the accessible identifier for the accessible object.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations.
         * 
         * It is left to the accessible implementation to define the scope
         * and uniqueness of the identifier.
         * @returns the accessible identifier
         */
        get_accessible_id(): (string | null);

        /**
         * Retrieves the accessible parent for an accessible object.
         * 
         * This function returns `NULL` for top level widgets.
         * @returns the accessible parent
         */
        get_accessible_parent(): (Gtk.Accessible | null);

        /**
         * Retrieves the accessible role of an accessible object.
         * @returns the accessible role
         */
        get_accessible_role(): Gtk.AccessibleRole;

        /**
         * Retrieves the implementation for the given accessible object.
         * @returns the accessible implementation object
         */
        get_at_context(): Gtk.ATContext;

        /**
         * Queries the coordinates and dimensions of this accessible
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @returns true if the bounds are valid, and false otherwise
         */
        get_bounds(): [boolean, number, number, number, number];

        /**
         * Retrieves the first accessible child of an accessible object.
         * @returns the first accessible child
         */
        get_first_accessible_child(): (Gtk.Accessible | null);

        /**
         * Retrieves the next accessible sibling of an accessible object
         * @returns the next accessible sibling
         */
        get_next_accessible_sibling(): (Gtk.Accessible | null);

        /**
         * Queries a platform state, such as focus.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @returns the value of state for the accessible
         */
        get_platform_state(state: Gtk.AccessiblePlatformState): boolean;

        /**
         * Resets the accessible property to its default value.
         * @param property the accessible property
         */
        reset_property(property: Gtk.AccessibleProperty): void;

        /**
         * Resets the accessible relation to its default value.
         * @param relation the accessible relation
         */
        reset_relation(relation: Gtk.AccessibleRelation): void;

        /**
         * Resets the accessible state to its default value.
         * @param state the accessible state
         */
        reset_state(state: Gtk.AccessibleState): void;

        /**
         * Sets the parent and sibling of an accessible object.
         * 
         * This function is meant to be used by accessible implementations that are
         * not part of the widget hierarchy, and but act as a logical bridge between
         * widgets. For instance, if a widget creates an object that holds metadata
         * for each child, and you want that object to implement the {@link Gtk.Accessible}
         * interface, you will use this function to ensure that the parent of each
         * child widget is the metadata object, and the parent of each metadata
         * object is the container widget.
         * @param parent the parent accessible object
         * @param next_sibling the sibling accessible object
         */
        set_accessible_parent(parent: (Gtk.Accessible | null), next_sibling: (Gtk.Accessible | null)): void;

        /**
         * Updates the next accessible sibling.
         * 
         * That might be useful when a new child of a custom accessible
         * is created, and it needs to be linked to a previous child.
         * @param new_sibling the new next accessible sibling to set
         */
        update_next_accessible_sibling(new_sibling: (Gtk.Accessible | null)): void;

        /**
         * Informs ATs that the platform state has changed.
         * 
         * This function should be used by {@link Gtk.Accessible} implementations that
         * have a platform state but are not widgets. Widgets handle platform
         * states automatically.
         * @param state the platform state to update
         */
        update_platform_state(state: Gtk.AccessiblePlatformState): void;

        /**
         * Updates an array of accessible properties.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * property change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param properties an array of accessible properties
         * @param values an array of `GValues`, one for each property
         */
        update_property(properties: Gtk.AccessibleProperty[], values: (GObject.Value | any)[]): void;

        /**
         * Updates an array of accessible relations.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * relation change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param relations an array of accessible relations
         * @param values an array of `GValues`, one for each relation
         */
        update_relation(relations: Gtk.AccessibleRelation[], values: (GObject.Value | any)[]): void;

        /**
         * Updates an array of accessible states.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * state change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param states an array of accessible states
         * @param values an array of `GValues`, one for each state
         */
        update_state(states: Gtk.AccessibleState[], values: (GObject.Value | any)[]): void;

        /**
         * Retrieves the accessible identifier for the accessible object.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations.
         * 
         * It is left to the accessible implementation to define the scope
         * and uniqueness of the identifier.
         * @virtual
         */
        vfunc_get_accessible_id(): (string | null);

        /**
         * Retrieves the accessible parent for an accessible object.
         * 
         * This function returns `NULL` for top level widgets.
         * @virtual
         */
        vfunc_get_accessible_parent(): (Gtk.Accessible | null);

        /**
         * Retrieves the implementation for the given accessible object.
         * @virtual
         */
        vfunc_get_at_context(): (Gtk.ATContext | null);

        /**
         * Queries the coordinates and dimensions of this accessible
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @virtual
         */
        vfunc_get_bounds(): [boolean, number, number, number, number];

        /**
         * Retrieves the first accessible child of an accessible object.
         * @virtual
         */
        vfunc_get_first_accessible_child(): (Gtk.Accessible | null);

        /**
         * Retrieves the next accessible sibling of an accessible object
         * @virtual
         */
        vfunc_get_next_accessible_sibling(): (Gtk.Accessible | null);

        /**
         * Queries a platform state, such as focus.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @virtual
         */
        vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;

        /**
         * Gets the ID of the `buildable` object.
         * 
         * {@link Gtk.Builder} sets the name based on the ID attribute
         * of the `<object>` tag used to construct the `buildable`.
         * @returns the ID of the buildable object
         */
        get_buildable_id(): (string | null);

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
         * Similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         * @virtual
         */
        vfunc_custom_finished(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * Called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * Called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string): [boolean, Gtk.BuildableParser, never];

        /**
         * The getter corresponding to `set_id`. Implement this
         *   if you implement `set_id`.
         * @virtual
         */
        vfunc_get_id(): string;

        /**
         * Retrieves the internal child called `childname` of the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param childname name of child
         * @virtual
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

        /**
         * Called when a builder finishes the parsing
         *  of a UI definition. It is normally not necessary to implement this,
         *  unless you need to perform special cleanup actions. {@link Gtk.Window} sets
         *  the {@link Gtk.Widget.visible} property here.
         * @param builder 
         * @virtual
         */
        vfunc_parser_finished(builder: Gtk.Builder): void;

        /**
         * Sets a property of a buildable object.
         *  It is normally not necessary to implement this, `g_object_set_property()`
         *  is used by default. {@link Gtk.Window} implements this to delay showing itself
         *  (i.e. setting the {@link Gtk.Widget.visible} property) until the whole
         *  interface is created.
         * @param builder 
         * @param name 
         * @param value 
         * @virtual
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: unknown): void;

        /**
         * Stores the id attribute given in the {@link Gtk.Builder} UI definition.
         *   {@link Gtk.Widget} stores the name as object data. Implement this method if your
         *   object has some notion of &#x201C;ID&#x201D; and it makes sense to map the XML id
         *   attribute to it.
         * @param id 
         * @virtual
         */
        vfunc_set_id(id: string): void;
    }


    namespace Workbench {
        // Signal signatures
        interface SignalSignatures extends Gtk.WindowGroup.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            activate: () => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.WindowGroup.ConstructorProps {
            id: string;
        }
    }

    /**
     * @gir-type Class
     */
    class Workbench extends Gtk.WindowGroup {
        static $gtype: GObject.GType<Workbench>;

        // Properties
        /**
         * The "id" of the workbench.
         * 
         * This is generally used by applications to help destinguish between
         * projects, so that the project-id matches the workbench-id.
         * @since 1.4
         * @default null
         */
        get id(): string;
        set id(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Workbench.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Workbench.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Workbench;

        // Signals
        /** @signal */
        connect<K extends keyof Workbench.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Workbench.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Workbench.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Workbench.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Workbench.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Workbench.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Finds the workbench that contains `widget`.
         * @param widget a {@link Gtk.Widget}
         */
        static find_from_widget(widget: Gtk.Widget): (Workbench | null);

        /**
         * @param action_name a prefixed action name, such as "project.open"
         * @param parameter_type the parameter type
         * @param activate callback to use when the action is activated
         */
        static install_action(action_name: string, parameter_type: (string | null), activate: ActionActivateFunc): void;

        /**
         * @param action_name name of the action
         * @param property_name name of the property in instances of `workbench_class`   or any parent class.
         */
        static install_property_action(action_name: string, property_name: string): void;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_activate(): void;

        /**
         * @param cancellable 
         * @param callback 
         * @virtual
         */
        vfunc_unload_async(cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param result 
         * @virtual
         */
        vfunc_unload_finish(result: Gio.AsyncResult): boolean;

        // Methods
        /**
         * @param action_name 
         * @param enabled 
         */
        action_set_enabled(action_name: string, enabled: boolean): void;

        activate(): void;

        /**
         * @param workspace 
         */
        add_workspace(workspace: Workspace): void;

        /**
         * Locates a workspace in `self` with a type matching `type`.
         * @param workspace_type 
         * @returns a {@link Panel.Workspace} or `null`
         */
        find_workspace_typed(workspace_type: GObject.GType): (Workspace | null);

        /**
         * @param workspace 
         */
        focus_workspace(workspace: Workspace): void;

        /**
         * Calls `foreach_func` for each workspace in the workbench.
         * @param foreach_func a function to call for each workspace
         */
        foreach_workspace(foreach_func: WorkspaceForeach): void;

        get_id(): string;

        /**
         * @param workspace 
         */
        remove_workspace(workspace: Workspace): void;

        /**
         * @param id 
         */
        set_id(id: string): void;
    }


    namespace Workspace {
        // Signal signatures
        interface SignalSignatures extends Adw.ApplicationWindow.SignalSignatures {
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::adaptive-preview": (pspec: GObject.ParamSpec) => void;
            "notify::content": (pspec: GObject.ParamSpec) => void;
            "notify::current-breakpoint": (pspec: GObject.ParamSpec) => void;
            "notify::dialogs": (pspec: GObject.ParamSpec) => void;
            "notify::visible-dialog": (pspec: GObject.ParamSpec) => void;
            "notify::show-menubar": (pspec: GObject.ParamSpec) => void;
            "notify::application": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::decorated": (pspec: GObject.ParamSpec) => void;
            "notify::default-height": (pspec: GObject.ParamSpec) => void;
            "notify::default-widget": (pspec: GObject.ParamSpec) => void;
            "notify::default-width": (pspec: GObject.ParamSpec) => void;
            "notify::deletable": (pspec: GObject.ParamSpec) => void;
            "notify::destroy-with-parent": (pspec: GObject.ParamSpec) => void;
            "notify::display": (pspec: GObject.ParamSpec) => void;
            "notify::focus-visible": (pspec: GObject.ParamSpec) => void;
            "notify::focus-widget": (pspec: GObject.ParamSpec) => void;
            "notify::fullscreened": (pspec: GObject.ParamSpec) => void;
            "notify::gravity": (pspec: GObject.ParamSpec) => void;
            "notify::handle-menubar-accel": (pspec: GObject.ParamSpec) => void;
            "notify::hide-on-close": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::is-active": (pspec: GObject.ParamSpec) => void;
            "notify::maximized": (pspec: GObject.ParamSpec) => void;
            "notify::mnemonics-visible": (pspec: GObject.ParamSpec) => void;
            "notify::modal": (pspec: GObject.ParamSpec) => void;
            "notify::resizable": (pspec: GObject.ParamSpec) => void;
            "notify::startup-id": (pspec: GObject.ParamSpec) => void;
            "notify::suspended": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::titlebar": (pspec: GObject.ParamSpec) => void;
            "notify::transient-for": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::can-target": (pspec: GObject.ParamSpec) => void;
            "notify::css-classes": (pspec: GObject.ParamSpec) => void;
            "notify::css-name": (pspec: GObject.ParamSpec) => void;
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::focusable": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::layout-manager": (pspec: GObject.ParamSpec) => void;
            "notify::limit-events": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::overflow": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::root": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Adw.ApplicationWindow.ConstructorProps, Gio.ActionGroup.ConstructorProps, Gio.ActionMap.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps, Gtk.Native.ConstructorProps, Gtk.Root.ConstructorProps, Gtk.ShortcutManager.ConstructorProps {
            id: string;
        }
    }

    /**
     * @gir-type Class
     */
    class Workspace extends Adw.ApplicationWindow implements Gio.ActionGroup, Gio.ActionMap, Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Native, Gtk.Root, Gtk.ShortcutManager {
        static $gtype: GObject.GType<Workspace>;

        // Properties
        /**
         * The "id" of the workspace.
         * 
         * This is generally used by applications to help destinguish between
         * types of workspaces, particularly when saving session state.
         * @since 1.4
         * @default null
         */
        get id(): string;
        set id(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Workspace.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Workspace.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Workspace.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Workspace.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Workspace.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Workspace.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Workspace.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Workspace.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Finds the workspace that contains `widget`.
         * @param widget a {@link Gtk.Widget}
         */
        static find_from_widget(widget: Gtk.Widget): (Workspace | null);

        /**
         * @param action_name a prefixed action name, such as "project.open"
         * @param parameter_type the parameter type
         * @param activate callback to use when the action is activated
         */
        static install_action(action_name: string, parameter_type: (string | null), activate: ActionActivateFunc): void;

        /**
         * @param args 
         */
    // Conflicted with Gtk.Widget.install_action
        static install_action(...args: never[]): any;

        /**
         * @param action_name name of the action
         * @param property_name name of the property in instances of `workspace_class`   or any parent class.
         */
        static install_property_action(action_name: string, property_name: string): void;

        // Methods
        /**
         * @param action_name 
         * @param enabled 
         */
        action_set_enabled(action_name: string, enabled: boolean): void;

        get_id(): string;

        /**
         * @param args 
         */
    // Conflicted with Gtk.ApplicationWindow.get_id
        get_id(...args: never[]): any;

        /**
         * Gets the {@link Panel.Workbench} `self` is a part of.
         * @returns a {@link Panel.Workbench}, or `null`
         */
        get_workbench(): (Workbench | null);

        /**
         * Inhibits one or more particular actions in the session.
         * 
         * When the resulting {@link Panel.Inhibitor} releases it's last reference
         * the inhibitor will be dismissed. Alternatively, you may force the
         * release of the inhibit using `panel_inhibitor_uninhibit()`.
         * @param flags the inhibit flags
         * @param reason the reason for the inhibit
         * @returns a {@link Panel.Inhibitor} or `null`
         */
        inhibit(flags: Gtk.ApplicationInhibitFlags, reason: string): (Inhibitor | null);

        /**
         * @param id 
         */
        set_id(id: string): void;
    }


    /**
     * @gir-type Struct
     */
    abstract class Action {
        static $gtype: GObject.GType<Action>;
    }


    /**
     * @gir-type Alias
     */
    type ActionMuxerClass = typeof ActionMuxer;

    /**
     * @gir-type Alias
     */
    type ApplicationClass = typeof Application;

    /**
     * @gir-type Alias
     */
    type ChangesDialogClass = typeof ChangesDialog;

    /**
     * @gir-type Alias
     */
    type DockClass = typeof Dock;

    /**
     * @gir-type Alias
     */
    type DocumentWorkspaceClass = typeof DocumentWorkspace;

    /**
     * @gir-type Alias
     */
    type FrameClass = typeof Frame;

    /**
     * @gir-type Alias
     */
    type FrameHeaderBarClass = typeof FrameHeaderBar;

    /**
     * @gir-type Alias
     */
    type FrameHeaderInterface = typeof FrameHeader;

    /**
     * @gir-type Alias
     */
    type FrameSwitcherClass = typeof FrameSwitcher;

    /**
     * @gir-type Alias
     */
    type FrameTabBarClass = typeof FrameTabBar;

    /**
     * @gir-type Alias
     */
    type GSettingsActionGroupClass = typeof GSettingsActionGroup;

    /**
     * @gir-type Alias
     */
    type GridClass = typeof Grid;

    /**
     * @gir-type Alias
     */
    type GridColumnClass = typeof GridColumn;

    /**
     * @gir-type Alias
     */
    type InhibitorClass = typeof Inhibitor;

    /**
     * @gir-type Alias
     */
    type LayeredSettingsClass = typeof LayeredSettings;

    /**
     * @gir-type Alias
     */
    type MenuManagerClass = typeof MenuManager;

    /**
     * @gir-type Alias
     */
    type OmniBarClass = typeof OmniBar;

    /**
     * @gir-type Alias
     */
    type PanedClass = typeof Paned;

    /**
     * @gir-type Alias
     */
    type PositionClass = typeof Position;

    /**
     * @gir-type Alias
     */
    type SaveDelegateClass = typeof SaveDelegate;

    /**
     * @gir-type Alias
     */
    type SaveDialogClass = typeof SaveDialog;

    /**
     * @gir-type Alias
     */
    type SessionClass = typeof Session;

    /**
     * @gir-type Alias
     */
    type SessionItemClass = typeof SessionItem;

    /**
     * @gir-type Alias
     */
    type SettingsClass = typeof Settings;

    /**
     * @gir-type Alias
     */
    type StatusbarClass = typeof Statusbar;

    /**
     * @gir-type Alias
     */
    type ThemeSelectorClass = typeof ThemeSelector;

    /**
     * @gir-type Alias
     */
    type ToggleButtonClass = typeof ToggleButton;

    /**
     * @gir-type Alias
     */
    type WidgetClass = typeof Widget;

    /**
     * @gir-type Alias
     */
    type WorkbenchClass = typeof Workbench;

    /**
     * @gir-type Alias
     */
    type WorkspaceClass = typeof Workspace;

    namespace FrameHeader {
        /**
         * Interface for implementing FrameHeader.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * Add a widget into a the prefix area with a priority. The highest
             * the priority the closest to the start.
             * @param priority the priority
             * @param child a {@link Gtk.Widget}
             * @virtual
             */
            vfunc_add_prefix(priority: number, child: Gtk.Widget): void;

            /**
             * Add a widget into a the suffix area with a priority. The highest
             * the priority the closest to the start.
             * @param priority the priority
             * @param child a {@link Gtk.Widget}
             * @virtual
             */
            vfunc_add_suffix(priority: number, child: Gtk.Widget): void;

            /**
             * Tells if the panel widget can be drop onto the panel frame.
             * @param widget a {@link Panel.Widget}
             * @virtual
             */
            vfunc_can_drop(widget: Widget): boolean;

            /**
             * Notifies the header that the visible page has changed.
             * @param widget a {@link Panel.Widget} or `null` if no page is visible
             * @virtual
             */
            vfunc_page_changed(widget: (Widget | null)): void;
        }


        // Constructor properties interface
        interface ConstructorProps extends Gtk.Widget.ConstructorProps {
            frame: (Frame | null);
        }
    }

    export interface FrameHeaderNamespace {
        $gtype: GObject.GType<FrameHeader>;
        prototype: FrameHeader;
    }
    /**
     * An interface implemented by the header of a {@link Panel.Frame}.
     * @gir-type Interface
     */
    interface FrameHeader extends Gtk.Widget, FrameHeader.Interface {

        // Properties
        /**
         * The frame the header is attached to, or `null`.
         */
        get frame(): (Frame | null);
        set frame(val: (Frame | null));

        // Methods
        /**
         * Add a widget into a the prefix area with a priority. The highest
         * the priority the closest to the start.
         * @param priority the priority
         * @param child a {@link Gtk.Widget}
         */
        add_prefix(priority: number, child: Gtk.Widget): void;

        /**
         * Add a widget into a the suffix area with a priority. The highest
         * the priority the closest to the start.
         * @param priority the priority
         * @param child a {@link Gtk.Widget}
         */
        add_suffix(priority: number, child: Gtk.Widget): void;

        /**
         * Tells if the panel widget can be drop onto the panel frame.
         * @param widget a {@link Panel.Widget}
         * @returns whether the widget can be dropped.
         */
        can_drop(widget: Widget): boolean;

        /**
         * Gets the frame the header is attached to.
         * @returns a {@link Panel.Frame} or `null`
         */
        get_frame(): (Frame | null);

        /**
         * Notifies the header that the visible page has changed.
         * @param widget a {@link Panel.Widget} or `null` if no page is visible
         */
        page_changed(widget: (Widget | null)): void;

        /**
         * Sets the frame the header is attached to.
         * @param frame a {@link Panel.Frame} or `null`
         */
        set_frame(frame: (Frame | null)): void;
    }


    export const FrameHeader: FrameHeaderNamespace & {
        new (): FrameHeader; // This allows `obj instanceof FrameHeader`
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

export default Panel;

// END
