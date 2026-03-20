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
import type Clutter from '@girs/clutter-3';
import type cairo from 'cairo';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Json from '@girs/json-1.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GL from '@girs/gl-1.0';
import type CoglPango from '@girs/coglpango-3';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Cogl from '@girs/cogl-3';
import type Atk from '@girs/atk-1.0';

export namespace Cally {
    /**
     * Cally-3
     */

    /**
     * Initializes the accessibility support.
     * @returns `true` if accessibility support has been correctly initialized.
     * @since 1.4
     */
    function accessibility_init(): boolean;
    /**
     * Returns if the accessibility support using cally is enabled.
     * @returns `true` if accessibility support has been correctly initialized.
     * @since 1.4
     */
    function get_cally_initialized(): boolean;
    /**
     * @gir-type Callback
     */
    interface ActionCallback {
        (cally_actor: Actor): void;
    }
    /**
     * @gir-type Callback
     */
    interface ActionFunc {
        (cally_actor: Actor): void;
    }
    namespace Actor {
        // Signal signatures
        interface SignalSignatures extends Atk.GObjectAccessible.SignalSignatures {
            'notify::accessible-component-layer': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-component-mdi-zorder': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-description': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-help-text': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-hypertext-nlinks': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-id': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-name': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-parent': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-role': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-caption': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-caption-object': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-column-description': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-column-header': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-row-description': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-row-header': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-summary': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-value': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Atk.GObjectAccessible.ConstructorProps,
                Atk.Action.ConstructorProps,
                Atk.Component.ConstructorProps {}
    }

    /**
     * The <structname>CallyActor</structname> structure contains only private
     * data and should be accessed using the provided API
     * @gir-type Class
     * @since 1.4
     */
    class Actor extends Atk.GObjectAccessible implements Atk.Action, Atk.Component {
        static $gtype: GObject.GType<Actor>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Actor.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Actor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](actor: Clutter.Actor): Actor;

        // Signals

        /** @signal */
        connect<K extends keyof Actor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Actor.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Actor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Actor.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Actor.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Actor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Adds a new action to be accessed with the {@link Atk.Action} interface.
         * @param action_name the action name
         * @param action_description the action description
         * @param action_keybinding the action keybinding
         * @param callback the callback of the action
         * @returns added action id, or -1 if failure
         */
        add_action(
            action_name: string,
            action_description: string,
            action_keybinding: string,
            callback: ActionCallback,
        ): number;
        /**
         * Removes a action, using the `action_id` returned by `cally_actor_add_action()`
         * @param action_id the action id
         * @returns `true` if the operation was succesful, `false` otherwise
         */
        remove_action(action_id: number): boolean;
        /**
         * Removes an action, using the `action_name` used when the action was added
         * with `cally_actor_add_action()`
         * @param action_name the name of the action to remove
         * @returns `true` if the operation was succesful, `false` otherwise
         */
        remove_action_by_name(action_name: string): boolean;
        /**
         * Perform the specified action on the object.
         * @param i the action index corresponding to the action to be performed
         * @returns `true` if success, `false` otherwise
         */
        do_action(i: number): boolean;
        /**
         * Returns a description of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @returns a description string, or `null` if `action` does not implement this interface.
         */
        get_description(i: number): string | null;
        /**
         * @param args
         */
        // Conflicted with Atk.Object.get_description
        get_description(...args: never[]): any;
        /**
         * Gets the keybinding which can be used to activate this action, if one
         * exists. The string returned should contain localized, human-readable,
         * key sequences as they would appear when displayed on screen. It must
         * be in the format "mnemonic;sequence;shortcut".
         *
         * - The mnemonic key activates the object if it is presently enabled onscreen.
         *   This typically corresponds to the underlined letter within the widget.
         *   Example: "n" in a traditional "New..." menu item or the "a" in "Apply" for
         *   a button.
         * - The sequence is the full list of keys which invoke the action even if the
         *   relevant element is not currently shown on screen. For instance, for a menu
         *   item the sequence is the keybindings used to open the parent menus before
         *   invoking. The sequence string is colon-delimited. Example: "Alt+F:N" in a
         *   traditional "New..." menu item.
         * - The shortcut, if it exists, will invoke the same action without showing
         *   the component or its enclosing menus or dialogs. Example: "Ctrl+N" in a
         *   traditional "New..." menu item.
         *
         * Example: For a traditional "New..." menu item, the expected return value
         * would be: "N;Alt+F:N;Ctrl+N" for the English locale and "N;Alt+D:N;Strg+N"
         * for the German locale. If, hypothetically, this menu item lacked a mnemonic,
         * it would be represented by ";;Ctrl+N" and ";;Strg+N" respectively.
         * @param i the action index corresponding to the action to be performed
         * @returns the keybinding which can be used to activate this action, or `null` if there is no keybinding for this action.
         */
        get_keybinding(i: number): string | null;
        /**
         * Returns the localized name of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @returns a name string, or `null` if `action` does not implement this interface.
         */
        get_localized_name(i: number): string | null;
        /**
         * Gets the number of accessible actions available on the object.
         * If there are more than one, the first one is considered the
         * "default" action of the object.
         * @returns a the number of actions, or 0 if `action` does not implement this interface.
         */
        get_n_actions(): number;
        /**
         * Returns a non-localized string naming the specified action of the
         * object. This name is generally not descriptive of the end result
         * of the action, but instead names the 'interaction type' which the
         * object supports. By convention, the above strings should be used to
         * represent the actions which correspond to the common point-and-click
         * interaction techniques of the same name: i.e.
         * "click", "press", "release", "drag", "drop", "popup", etc.
         * The "popup" action should be used to pop up a context menu for the
         * object, if one exists.
         *
         * For technical reasons, some toolkits cannot guarantee that the
         * reported action is actually 'bound' to a nontrivial user event;
         * i.e. the result of some actions via `atk_action_do_action()` may be
         * NIL.
         * @param i the action index corresponding to the action to be performed
         * @returns a name string, or `null` if `action` does not implement this interface.
         */
        get_name(i: number): string | null;
        /**
         * @param args
         */
        // Conflicted with Atk.Object.get_name
        get_name(...args: never[]): any;
        /**
         * Sets a description of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @param desc the description to be assigned to this action
         * @returns a gboolean representing if the description was successfully set;
         */
        set_description(i: number, desc: string): boolean;
        /**
         * @param args
         */
        // Conflicted with Atk.Object.set_description
        set_description(...args: never[]): any;
        /**
         * Perform the specified action on the object.
         * @param i the action index corresponding to the action to be performed
         * @virtual
         */
        vfunc_do_action(i: number): boolean;
        /**
         * Returns a description of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @virtual
         */
        vfunc_get_description(i: number): string | null;
        /**
         * @param args
         * @virtual
         */
        // Conflicted with Atk.Object.vfunc_get_description
        vfunc_get_description(...args: never[]): any;
        /**
         * Gets the keybinding which can be used to activate this action, if one
         * exists. The string returned should contain localized, human-readable,
         * key sequences as they would appear when displayed on screen. It must
         * be in the format "mnemonic;sequence;shortcut".
         *
         * - The mnemonic key activates the object if it is presently enabled onscreen.
         *   This typically corresponds to the underlined letter within the widget.
         *   Example: "n" in a traditional "New..." menu item or the "a" in "Apply" for
         *   a button.
         * - The sequence is the full list of keys which invoke the action even if the
         *   relevant element is not currently shown on screen. For instance, for a menu
         *   item the sequence is the keybindings used to open the parent menus before
         *   invoking. The sequence string is colon-delimited. Example: "Alt+F:N" in a
         *   traditional "New..." menu item.
         * - The shortcut, if it exists, will invoke the same action without showing
         *   the component or its enclosing menus or dialogs. Example: "Ctrl+N" in a
         *   traditional "New..." menu item.
         *
         * Example: For a traditional "New..." menu item, the expected return value
         * would be: "N;Alt+F:N;Ctrl+N" for the English locale and "N;Alt+D:N;Strg+N"
         * for the German locale. If, hypothetically, this menu item lacked a mnemonic,
         * it would be represented by ";;Ctrl+N" and ";;Strg+N" respectively.
         * @param i the action index corresponding to the action to be performed
         * @virtual
         */
        vfunc_get_keybinding(i: number): string | null;
        /**
         * Returns the localized name of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @virtual
         */
        vfunc_get_localized_name(i: number): string | null;
        /**
         * Gets the number of accessible actions available on the object.
         * If there are more than one, the first one is considered the
         * "default" action of the object.
         * @virtual
         */
        vfunc_get_n_actions(): number;
        /**
         * Returns a non-localized string naming the specified action of the
         * object. This name is generally not descriptive of the end result
         * of the action, but instead names the 'interaction type' which the
         * object supports. By convention, the above strings should be used to
         * represent the actions which correspond to the common point-and-click
         * interaction techniques of the same name: i.e.
         * "click", "press", "release", "drag", "drop", "popup", etc.
         * The "popup" action should be used to pop up a context menu for the
         * object, if one exists.
         *
         * For technical reasons, some toolkits cannot guarantee that the
         * reported action is actually 'bound' to a nontrivial user event;
         * i.e. the result of some actions via `atk_action_do_action()` may be
         * NIL.
         * @param i the action index corresponding to the action to be performed
         * @virtual
         */
        vfunc_get_name(i: number): string | null;
        /**
         * @param args
         * @virtual
         */
        // Conflicted with Atk.Object.vfunc_get_name
        vfunc_get_name(...args: never[]): any;
        /**
         * Sets a description of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @param desc the description to be assigned to this action
         * @virtual
         */
        vfunc_set_description(i: number, desc: string): boolean;
        /**
         * @param args
         * @virtual
         */
        // Conflicted with Atk.Object.vfunc_set_description
        vfunc_set_description(...args: never[]): any;
        /**
         * Checks whether the specified point is within the extent of the `component`.
         *
         * Toolkit implementor note: ATK provides a default implementation for
         * this virtual method. In general there are little reason to
         * re-implement it.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @returns `true` or `false` indicating whether the specified point is within the extent of the `component` or not
         */
        contains(x: number, y: number, coord_type: Atk.CoordType | null): boolean;
        /**
         * Returns the alpha value (i.e. the opacity) for this
         * `component`, on a scale from 0 (fully transparent) to 1.0
         * (fully opaque).
         * @returns An alpha value from 0 to 1.0, inclusive.
         */
        get_alpha(): number;
        /**
         * Gets the rectangle which gives the extent of the `component`.
         *
         * If the extent can not be obtained (e.g. a non-embedded plug or missing
         * support), all of x, y, width, height are set to -1.
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         */
        get_extents(coord_type: Atk.CoordType | null): [number, number, number, number];
        /**
         * Gets the layer of the component.
         * @returns an {@link Atk.Layer} which is the layer of the component
         */
        get_layer(): Atk.Layer;
        /**
         * Gets the zorder of the component. The value G_MININT will be returned
         * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
         * @returns a gint which is the zorder of the component, i.e. the depth at which the component is shown in relation to other components in the same container.
         */
        get_mdi_zorder(): number;
        /**
         * Gets the position of `component` in the form of
         * a point specifying `component`'s top-left corner.
         *
         * If the position can not be obtained (e.g. a non-embedded plug or missing
         * support), x and y are set to -1.
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         */
        get_position(coord_type: Atk.CoordType | null): [number, number];
        /**
         * Gets the size of the `component` in terms of width and height.
         *
         * If the size can not be obtained (e.g. a non-embedded plug or missing
         * support), width and height are set to -1.
         */
        get_size(): [number, number];
        /**
         * Grabs focus for this `component`.
         * @returns `true` if successful, `false` otherwise.
         */
        grab_focus(): boolean;
        /**
         * Gets a reference to the accessible child, if one exists, at the
         * coordinate point specified by `x` and `y`.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @returns a reference to the accessible child, if one exists
         */
        ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType | null): Atk.Object | null;
        /**
         * Remove the handler specified by `handler_id` from the list of
         * functions to be executed when this object receives focus events
         * (in or out).
         * @param handler_id the handler id of the focus handler to be removed from `component`
         */
        remove_focus_handler(handler_id: number): void;
        /**
         * Makes `component` visible on the screen by scrolling all necessary parents.
         *
         * Contrary to atk_component_set_position, this does not actually move
         * `component` in its parent, this only makes the parents scroll so that the
         * object shows up on the screen, given its current position within the parents.
         * @param type specify where the object should be made visible.
         * @returns whether scrolling was successful.
         */
        scroll_to(type: Atk.ScrollType | null): boolean;
        /**
         * Move the top-left of `component` to a given position of the screen by
         * scrolling all necessary parents.
         * @param coords specify whether coordinates are relative to the screen or to the parent object.
         * @param x x-position where to scroll to
         * @param y y-position where to scroll to
         * @returns whether scrolling was successful.
         */
        scroll_to_point(coords: Atk.CoordType | null, x: number, y: number): boolean;
        /**
         * Sets the extents of `component`.
         * @param x x coordinate
         * @param y y coordinate
         * @param width width to set for `component`
         * @param height height to set for `component`
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @returns `true` or `false` whether the extents were set or not
         */
        set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType | null): boolean;
        /**
         * Sets the position of `component`.
         *
         * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
         * this just moves `component` in its parent.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the component's top level window
         * @returns `true` or `false` whether or not the position was set or not
         */
        set_position(x: number, y: number, coord_type: Atk.CoordType | null): boolean;
        /**
         * Set the size of the `component` in terms of width and height.
         * @param width width to set for `component`
         * @param height height to set for `component`
         * @returns `true` or `false` whether the size was set or not
         */
        set_size(width: number, height: number): boolean;
        /**
         * @param bounds
         * @virtual
         */
        vfunc_bounds_changed(bounds: Atk.Rectangle): void;
        /**
         * Checks whether the specified point is within the extent of the `component`.
         *
         * Toolkit implementor note: ATK provides a default implementation for
         * this virtual method. In general there are little reason to
         * re-implement it.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @virtual
         */
        vfunc_contains(x: number, y: number, coord_type: Atk.CoordType): boolean;
        /**
         * Returns the alpha value (i.e. the opacity) for this
         * `component`, on a scale from 0 (fully transparent) to 1.0
         * (fully opaque).
         * @virtual
         */
        vfunc_get_alpha(): number;
        /**
         * Gets the rectangle which gives the extent of the `component`.
         *
         * If the extent can not be obtained (e.g. a non-embedded plug or missing
         * support), all of x, y, width, height are set to -1.
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @virtual
         */
        vfunc_get_extents(coord_type: Atk.CoordType): [number, number, number, number];
        /**
         * Gets the layer of the component.
         * @virtual
         */
        vfunc_get_layer(): Atk.Layer;
        /**
         * Gets the zorder of the component. The value G_MININT will be returned
         * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
         * @virtual
         */
        vfunc_get_mdi_zorder(): number;
        /**
         * Gets the position of `component` in the form of
         * a point specifying `component`'s top-left corner.
         *
         * If the position can not be obtained (e.g. a non-embedded plug or missing
         * support), x and y are set to -1.
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @virtual
         */
        vfunc_get_position(coord_type: Atk.CoordType): [number, number];
        /**
         * Gets the size of the `component` in terms of width and height.
         *
         * If the size can not be obtained (e.g. a non-embedded plug or missing
         * support), width and height are set to -1.
         * @virtual
         */
        vfunc_get_size(): [number, number];
        /**
         * Grabs focus for this `component`.
         * @virtual
         */
        vfunc_grab_focus(): boolean;
        /**
         * Gets a reference to the accessible child, if one exists, at the
         * coordinate point specified by `x` and `y`.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @virtual
         */
        vfunc_ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null;
        /**
         * Remove the handler specified by `handler_id` from the list of
         * functions to be executed when this object receives focus events
         * (in or out).
         * @param handler_id the handler id of the focus handler to be removed from `component`
         * @virtual
         */
        vfunc_remove_focus_handler(handler_id: number): void;
        /**
         * Makes `component` visible on the screen by scrolling all necessary parents.
         *
         * Contrary to atk_component_set_position, this does not actually move
         * `component` in its parent, this only makes the parents scroll so that the
         * object shows up on the screen, given its current position within the parents.
         * @param type specify where the object should be made visible.
         * @virtual
         */
        vfunc_scroll_to(type: Atk.ScrollType): boolean;
        /**
         * Move the top-left of `component` to a given position of the screen by
         * scrolling all necessary parents.
         * @param coords specify whether coordinates are relative to the screen or to the parent object.
         * @param x x-position where to scroll to
         * @param y y-position where to scroll to
         * @virtual
         */
        vfunc_scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean;
        /**
         * Sets the extents of `component`.
         * @param x x coordinate
         * @param y y coordinate
         * @param width width to set for `component`
         * @param height height to set for `component`
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @virtual
         */
        vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean;
        /**
         * Sets the position of `component`.
         *
         * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
         * this just moves `component` in its parent.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the component's top level window
         * @virtual
         */
        vfunc_set_position(x: number, y: number, coord_type: Atk.CoordType): boolean;
        /**
         * Set the size of the `component` in terms of width and height.
         * @param width width to set for `component`
         * @param height height to set for `component`
         * @virtual
         */
        vfunc_set_size(width: number, height: number): boolean;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace Clone {
        // Signal signatures
        interface SignalSignatures extends Actor.SignalSignatures {
            'notify::accessible-component-layer': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-component-mdi-zorder': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-description': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-help-text': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-hypertext-nlinks': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-id': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-name': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-parent': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-role': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-caption': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-caption-object': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-column-description': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-column-header': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-row-description': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-row-header': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-summary': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-value': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Actor.ConstructorProps, Atk.Action.ConstructorProps, Atk.Component.ConstructorProps {}
    }

    /**
     * The <structname>CallyClone</structname> structure contains only private
     * data and should be accessed using the provided API
     * @gir-type Class
     * @since 1.4
     */
    class Clone extends Actor implements Atk.Action, Atk.Component {
        static $gtype: GObject.GType<Clone>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Clone.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Clone.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](actor: Clutter.Actor): Clone;

        // Signals

        /** @signal */
        connect<K extends keyof Clone.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clone.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Clone.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clone.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Clone.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clone.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
        /**
         * Perform the specified action on the object.
         * @param i the action index corresponding to the action to be performed
         * @returns `true` if success, `false` otherwise
         */
        do_action(i: number): boolean;
        /**
         * Returns a description of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @returns a description string, or `null` if `action` does not implement this interface.
         */
        get_description(i: number): string | null;
        /**
         * @param args
         */
        // Conflicted with Atk.Object.get_description
        get_description(...args: never[]): any;
        /**
         * Gets the keybinding which can be used to activate this action, if one
         * exists. The string returned should contain localized, human-readable,
         * key sequences as they would appear when displayed on screen. It must
         * be in the format "mnemonic;sequence;shortcut".
         *
         * - The mnemonic key activates the object if it is presently enabled onscreen.
         *   This typically corresponds to the underlined letter within the widget.
         *   Example: "n" in a traditional "New..." menu item or the "a" in "Apply" for
         *   a button.
         * - The sequence is the full list of keys which invoke the action even if the
         *   relevant element is not currently shown on screen. For instance, for a menu
         *   item the sequence is the keybindings used to open the parent menus before
         *   invoking. The sequence string is colon-delimited. Example: "Alt+F:N" in a
         *   traditional "New..." menu item.
         * - The shortcut, if it exists, will invoke the same action without showing
         *   the component or its enclosing menus or dialogs. Example: "Ctrl+N" in a
         *   traditional "New..." menu item.
         *
         * Example: For a traditional "New..." menu item, the expected return value
         * would be: "N;Alt+F:N;Ctrl+N" for the English locale and "N;Alt+D:N;Strg+N"
         * for the German locale. If, hypothetically, this menu item lacked a mnemonic,
         * it would be represented by ";;Ctrl+N" and ";;Strg+N" respectively.
         * @param i the action index corresponding to the action to be performed
         * @returns the keybinding which can be used to activate this action, or `null` if there is no keybinding for this action.
         */
        get_keybinding(i: number): string | null;
        /**
         * Returns the localized name of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @returns a name string, or `null` if `action` does not implement this interface.
         */
        get_localized_name(i: number): string | null;
        /**
         * Gets the number of accessible actions available on the object.
         * If there are more than one, the first one is considered the
         * "default" action of the object.
         * @returns a the number of actions, or 0 if `action` does not implement this interface.
         */
        get_n_actions(): number;
        /**
         * Returns a non-localized string naming the specified action of the
         * object. This name is generally not descriptive of the end result
         * of the action, but instead names the 'interaction type' which the
         * object supports. By convention, the above strings should be used to
         * represent the actions which correspond to the common point-and-click
         * interaction techniques of the same name: i.e.
         * "click", "press", "release", "drag", "drop", "popup", etc.
         * The "popup" action should be used to pop up a context menu for the
         * object, if one exists.
         *
         * For technical reasons, some toolkits cannot guarantee that the
         * reported action is actually 'bound' to a nontrivial user event;
         * i.e. the result of some actions via `atk_action_do_action()` may be
         * NIL.
         * @param i the action index corresponding to the action to be performed
         * @returns a name string, or `null` if `action` does not implement this interface.
         */
        get_name(i: number): string | null;
        /**
         * @param args
         */
        // Conflicted with Atk.Object.get_name
        get_name(...args: never[]): any;
        /**
         * Sets a description of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @param desc the description to be assigned to this action
         * @returns a gboolean representing if the description was successfully set;
         */
        set_description(i: number, desc: string): boolean;
        /**
         * @param args
         */
        // Conflicted with Atk.Object.set_description
        set_description(...args: never[]): any;
        /**
         * Perform the specified action on the object.
         * @param i the action index corresponding to the action to be performed
         * @virtual
         */
        vfunc_do_action(i: number): boolean;
        /**
         * Returns a description of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @virtual
         */
        vfunc_get_description(i: number): string | null;
        /**
         * @param args
         * @virtual
         */
        // Conflicted with Atk.Object.vfunc_get_description
        vfunc_get_description(...args: never[]): any;
        /**
         * Gets the keybinding which can be used to activate this action, if one
         * exists. The string returned should contain localized, human-readable,
         * key sequences as they would appear when displayed on screen. It must
         * be in the format "mnemonic;sequence;shortcut".
         *
         * - The mnemonic key activates the object if it is presently enabled onscreen.
         *   This typically corresponds to the underlined letter within the widget.
         *   Example: "n" in a traditional "New..." menu item or the "a" in "Apply" for
         *   a button.
         * - The sequence is the full list of keys which invoke the action even if the
         *   relevant element is not currently shown on screen. For instance, for a menu
         *   item the sequence is the keybindings used to open the parent menus before
         *   invoking. The sequence string is colon-delimited. Example: "Alt+F:N" in a
         *   traditional "New..." menu item.
         * - The shortcut, if it exists, will invoke the same action without showing
         *   the component or its enclosing menus or dialogs. Example: "Ctrl+N" in a
         *   traditional "New..." menu item.
         *
         * Example: For a traditional "New..." menu item, the expected return value
         * would be: "N;Alt+F:N;Ctrl+N" for the English locale and "N;Alt+D:N;Strg+N"
         * for the German locale. If, hypothetically, this menu item lacked a mnemonic,
         * it would be represented by ";;Ctrl+N" and ";;Strg+N" respectively.
         * @param i the action index corresponding to the action to be performed
         * @virtual
         */
        vfunc_get_keybinding(i: number): string | null;
        /**
         * Returns the localized name of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @virtual
         */
        vfunc_get_localized_name(i: number): string | null;
        /**
         * Gets the number of accessible actions available on the object.
         * If there are more than one, the first one is considered the
         * "default" action of the object.
         * @virtual
         */
        vfunc_get_n_actions(): number;
        /**
         * Returns a non-localized string naming the specified action of the
         * object. This name is generally not descriptive of the end result
         * of the action, but instead names the 'interaction type' which the
         * object supports. By convention, the above strings should be used to
         * represent the actions which correspond to the common point-and-click
         * interaction techniques of the same name: i.e.
         * "click", "press", "release", "drag", "drop", "popup", etc.
         * The "popup" action should be used to pop up a context menu for the
         * object, if one exists.
         *
         * For technical reasons, some toolkits cannot guarantee that the
         * reported action is actually 'bound' to a nontrivial user event;
         * i.e. the result of some actions via `atk_action_do_action()` may be
         * NIL.
         * @param i the action index corresponding to the action to be performed
         * @virtual
         */
        vfunc_get_name(i: number): string | null;
        /**
         * @param args
         * @virtual
         */
        // Conflicted with Atk.Object.vfunc_get_name
        vfunc_get_name(...args: never[]): any;
        /**
         * Sets a description of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @param desc the description to be assigned to this action
         * @virtual
         */
        vfunc_set_description(i: number, desc: string): boolean;
        /**
         * @param args
         * @virtual
         */
        // Conflicted with Atk.Object.vfunc_set_description
        vfunc_set_description(...args: never[]): any;
        /**
         * Checks whether the specified point is within the extent of the `component`.
         *
         * Toolkit implementor note: ATK provides a default implementation for
         * this virtual method. In general there are little reason to
         * re-implement it.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @returns `true` or `false` indicating whether the specified point is within the extent of the `component` or not
         */
        contains(x: number, y: number, coord_type: Atk.CoordType | null): boolean;
        /**
         * Returns the alpha value (i.e. the opacity) for this
         * `component`, on a scale from 0 (fully transparent) to 1.0
         * (fully opaque).
         * @returns An alpha value from 0 to 1.0, inclusive.
         */
        get_alpha(): number;
        /**
         * Gets the rectangle which gives the extent of the `component`.
         *
         * If the extent can not be obtained (e.g. a non-embedded plug or missing
         * support), all of x, y, width, height are set to -1.
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         */
        get_extents(coord_type: Atk.CoordType | null): [number, number, number, number];
        /**
         * Gets the layer of the component.
         * @returns an {@link Atk.Layer} which is the layer of the component
         */
        get_layer(): Atk.Layer;
        /**
         * Gets the zorder of the component. The value G_MININT will be returned
         * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
         * @returns a gint which is the zorder of the component, i.e. the depth at which the component is shown in relation to other components in the same container.
         */
        get_mdi_zorder(): number;
        /**
         * Gets the position of `component` in the form of
         * a point specifying `component`'s top-left corner.
         *
         * If the position can not be obtained (e.g. a non-embedded plug or missing
         * support), x and y are set to -1.
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         */
        get_position(coord_type: Atk.CoordType | null): [number, number];
        /**
         * Gets the size of the `component` in terms of width and height.
         *
         * If the size can not be obtained (e.g. a non-embedded plug or missing
         * support), width and height are set to -1.
         */
        get_size(): [number, number];
        /**
         * Grabs focus for this `component`.
         * @returns `true` if successful, `false` otherwise.
         */
        grab_focus(): boolean;
        /**
         * Gets a reference to the accessible child, if one exists, at the
         * coordinate point specified by `x` and `y`.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @returns a reference to the accessible child, if one exists
         */
        ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType | null): Atk.Object | null;
        /**
         * Remove the handler specified by `handler_id` from the list of
         * functions to be executed when this object receives focus events
         * (in or out).
         * @param handler_id the handler id of the focus handler to be removed from `component`
         */
        remove_focus_handler(handler_id: number): void;
        /**
         * Makes `component` visible on the screen by scrolling all necessary parents.
         *
         * Contrary to atk_component_set_position, this does not actually move
         * `component` in its parent, this only makes the parents scroll so that the
         * object shows up on the screen, given its current position within the parents.
         * @param type specify where the object should be made visible.
         * @returns whether scrolling was successful.
         */
        scroll_to(type: Atk.ScrollType | null): boolean;
        /**
         * Move the top-left of `component` to a given position of the screen by
         * scrolling all necessary parents.
         * @param coords specify whether coordinates are relative to the screen or to the parent object.
         * @param x x-position where to scroll to
         * @param y y-position where to scroll to
         * @returns whether scrolling was successful.
         */
        scroll_to_point(coords: Atk.CoordType | null, x: number, y: number): boolean;
        /**
         * Sets the extents of `component`.
         * @param x x coordinate
         * @param y y coordinate
         * @param width width to set for `component`
         * @param height height to set for `component`
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @returns `true` or `false` whether the extents were set or not
         */
        set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType | null): boolean;
        /**
         * Sets the position of `component`.
         *
         * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
         * this just moves `component` in its parent.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the component's top level window
         * @returns `true` or `false` whether or not the position was set or not
         */
        set_position(x: number, y: number, coord_type: Atk.CoordType | null): boolean;
        /**
         * Set the size of the `component` in terms of width and height.
         * @param width width to set for `component`
         * @param height height to set for `component`
         * @returns `true` or `false` whether the size was set or not
         */
        set_size(width: number, height: number): boolean;
        /**
         * @param bounds
         * @virtual
         */
        vfunc_bounds_changed(bounds: Atk.Rectangle): void;
        /**
         * Checks whether the specified point is within the extent of the `component`.
         *
         * Toolkit implementor note: ATK provides a default implementation for
         * this virtual method. In general there are little reason to
         * re-implement it.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @virtual
         */
        vfunc_contains(x: number, y: number, coord_type: Atk.CoordType): boolean;
        /**
         * Returns the alpha value (i.e. the opacity) for this
         * `component`, on a scale from 0 (fully transparent) to 1.0
         * (fully opaque).
         * @virtual
         */
        vfunc_get_alpha(): number;
        /**
         * Gets the rectangle which gives the extent of the `component`.
         *
         * If the extent can not be obtained (e.g. a non-embedded plug or missing
         * support), all of x, y, width, height are set to -1.
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @virtual
         */
        vfunc_get_extents(coord_type: Atk.CoordType): [number, number, number, number];
        /**
         * Gets the layer of the component.
         * @virtual
         */
        vfunc_get_layer(): Atk.Layer;
        /**
         * Gets the zorder of the component. The value G_MININT will be returned
         * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
         * @virtual
         */
        vfunc_get_mdi_zorder(): number;
        /**
         * Gets the position of `component` in the form of
         * a point specifying `component`'s top-left corner.
         *
         * If the position can not be obtained (e.g. a non-embedded plug or missing
         * support), x and y are set to -1.
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @virtual
         */
        vfunc_get_position(coord_type: Atk.CoordType): [number, number];
        /**
         * Gets the size of the `component` in terms of width and height.
         *
         * If the size can not be obtained (e.g. a non-embedded plug or missing
         * support), width and height are set to -1.
         * @virtual
         */
        vfunc_get_size(): [number, number];
        /**
         * Grabs focus for this `component`.
         * @virtual
         */
        vfunc_grab_focus(): boolean;
        /**
         * Gets a reference to the accessible child, if one exists, at the
         * coordinate point specified by `x` and `y`.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @virtual
         */
        vfunc_ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null;
        /**
         * Remove the handler specified by `handler_id` from the list of
         * functions to be executed when this object receives focus events
         * (in or out).
         * @param handler_id the handler id of the focus handler to be removed from `component`
         * @virtual
         */
        vfunc_remove_focus_handler(handler_id: number): void;
        /**
         * Makes `component` visible on the screen by scrolling all necessary parents.
         *
         * Contrary to atk_component_set_position, this does not actually move
         * `component` in its parent, this only makes the parents scroll so that the
         * object shows up on the screen, given its current position within the parents.
         * @param type specify where the object should be made visible.
         * @virtual
         */
        vfunc_scroll_to(type: Atk.ScrollType): boolean;
        /**
         * Move the top-left of `component` to a given position of the screen by
         * scrolling all necessary parents.
         * @param coords specify whether coordinates are relative to the screen or to the parent object.
         * @param x x-position where to scroll to
         * @param y y-position where to scroll to
         * @virtual
         */
        vfunc_scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean;
        /**
         * Sets the extents of `component`.
         * @param x x coordinate
         * @param y y coordinate
         * @param width width to set for `component`
         * @param height height to set for `component`
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @virtual
         */
        vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean;
        /**
         * Sets the position of `component`.
         *
         * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
         * this just moves `component` in its parent.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the component's top level window
         * @virtual
         */
        vfunc_set_position(x: number, y: number, coord_type: Atk.CoordType): boolean;
        /**
         * Set the size of the `component` in terms of width and height.
         * @param width width to set for `component`
         * @param height height to set for `component`
         * @virtual
         */
        vfunc_set_size(width: number, height: number): boolean;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace Group {
        // Signal signatures
        interface SignalSignatures extends Actor.SignalSignatures {
            'notify::accessible-component-layer': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-component-mdi-zorder': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-description': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-help-text': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-hypertext-nlinks': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-id': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-name': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-parent': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-role': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-caption': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-caption-object': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-column-description': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-column-header': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-row-description': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-row-header': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-summary': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-value': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Actor.ConstructorProps, Atk.Action.ConstructorProps, Atk.Component.ConstructorProps {}
    }

    /**
     * The <structname>CallyGroup</structname> structure contains only
     * private data and should be accessed using the provided API
     * @gir-type Class
     * @since 1.4
     */
    class Group extends Actor implements Atk.Action, Atk.Component {
        static $gtype: GObject.GType<Group>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Group.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Group.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](actor: Clutter.Actor): Group;

        // Signals

        /** @signal */
        connect<K extends keyof Group.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Group.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Group.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Group.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Group.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Group.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
        /**
         * Perform the specified action on the object.
         * @param i the action index corresponding to the action to be performed
         * @returns `true` if success, `false` otherwise
         */
        do_action(i: number): boolean;
        /**
         * Returns a description of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @returns a description string, or `null` if `action` does not implement this interface.
         */
        get_description(i: number): string | null;
        /**
         * @param args
         */
        // Conflicted with Atk.Object.get_description
        get_description(...args: never[]): any;
        /**
         * Gets the keybinding which can be used to activate this action, if one
         * exists. The string returned should contain localized, human-readable,
         * key sequences as they would appear when displayed on screen. It must
         * be in the format "mnemonic;sequence;shortcut".
         *
         * - The mnemonic key activates the object if it is presently enabled onscreen.
         *   This typically corresponds to the underlined letter within the widget.
         *   Example: "n" in a traditional "New..." menu item or the "a" in "Apply" for
         *   a button.
         * - The sequence is the full list of keys which invoke the action even if the
         *   relevant element is not currently shown on screen. For instance, for a menu
         *   item the sequence is the keybindings used to open the parent menus before
         *   invoking. The sequence string is colon-delimited. Example: "Alt+F:N" in a
         *   traditional "New..." menu item.
         * - The shortcut, if it exists, will invoke the same action without showing
         *   the component or its enclosing menus or dialogs. Example: "Ctrl+N" in a
         *   traditional "New..." menu item.
         *
         * Example: For a traditional "New..." menu item, the expected return value
         * would be: "N;Alt+F:N;Ctrl+N" for the English locale and "N;Alt+D:N;Strg+N"
         * for the German locale. If, hypothetically, this menu item lacked a mnemonic,
         * it would be represented by ";;Ctrl+N" and ";;Strg+N" respectively.
         * @param i the action index corresponding to the action to be performed
         * @returns the keybinding which can be used to activate this action, or `null` if there is no keybinding for this action.
         */
        get_keybinding(i: number): string | null;
        /**
         * Returns the localized name of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @returns a name string, or `null` if `action` does not implement this interface.
         */
        get_localized_name(i: number): string | null;
        /**
         * Gets the number of accessible actions available on the object.
         * If there are more than one, the first one is considered the
         * "default" action of the object.
         * @returns a the number of actions, or 0 if `action` does not implement this interface.
         */
        get_n_actions(): number;
        /**
         * Returns a non-localized string naming the specified action of the
         * object. This name is generally not descriptive of the end result
         * of the action, but instead names the 'interaction type' which the
         * object supports. By convention, the above strings should be used to
         * represent the actions which correspond to the common point-and-click
         * interaction techniques of the same name: i.e.
         * "click", "press", "release", "drag", "drop", "popup", etc.
         * The "popup" action should be used to pop up a context menu for the
         * object, if one exists.
         *
         * For technical reasons, some toolkits cannot guarantee that the
         * reported action is actually 'bound' to a nontrivial user event;
         * i.e. the result of some actions via `atk_action_do_action()` may be
         * NIL.
         * @param i the action index corresponding to the action to be performed
         * @returns a name string, or `null` if `action` does not implement this interface.
         */
        get_name(i: number): string | null;
        /**
         * @param args
         */
        // Conflicted with Atk.Object.get_name
        get_name(...args: never[]): any;
        /**
         * Sets a description of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @param desc the description to be assigned to this action
         * @returns a gboolean representing if the description was successfully set;
         */
        set_description(i: number, desc: string): boolean;
        /**
         * @param args
         */
        // Conflicted with Atk.Object.set_description
        set_description(...args: never[]): any;
        /**
         * Perform the specified action on the object.
         * @param i the action index corresponding to the action to be performed
         * @virtual
         */
        vfunc_do_action(i: number): boolean;
        /**
         * Returns a description of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @virtual
         */
        vfunc_get_description(i: number): string | null;
        /**
         * @param args
         * @virtual
         */
        // Conflicted with Atk.Object.vfunc_get_description
        vfunc_get_description(...args: never[]): any;
        /**
         * Gets the keybinding which can be used to activate this action, if one
         * exists. The string returned should contain localized, human-readable,
         * key sequences as they would appear when displayed on screen. It must
         * be in the format "mnemonic;sequence;shortcut".
         *
         * - The mnemonic key activates the object if it is presently enabled onscreen.
         *   This typically corresponds to the underlined letter within the widget.
         *   Example: "n" in a traditional "New..." menu item or the "a" in "Apply" for
         *   a button.
         * - The sequence is the full list of keys which invoke the action even if the
         *   relevant element is not currently shown on screen. For instance, for a menu
         *   item the sequence is the keybindings used to open the parent menus before
         *   invoking. The sequence string is colon-delimited. Example: "Alt+F:N" in a
         *   traditional "New..." menu item.
         * - The shortcut, if it exists, will invoke the same action without showing
         *   the component or its enclosing menus or dialogs. Example: "Ctrl+N" in a
         *   traditional "New..." menu item.
         *
         * Example: For a traditional "New..." menu item, the expected return value
         * would be: "N;Alt+F:N;Ctrl+N" for the English locale and "N;Alt+D:N;Strg+N"
         * for the German locale. If, hypothetically, this menu item lacked a mnemonic,
         * it would be represented by ";;Ctrl+N" and ";;Strg+N" respectively.
         * @param i the action index corresponding to the action to be performed
         * @virtual
         */
        vfunc_get_keybinding(i: number): string | null;
        /**
         * Returns the localized name of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @virtual
         */
        vfunc_get_localized_name(i: number): string | null;
        /**
         * Gets the number of accessible actions available on the object.
         * If there are more than one, the first one is considered the
         * "default" action of the object.
         * @virtual
         */
        vfunc_get_n_actions(): number;
        /**
         * Returns a non-localized string naming the specified action of the
         * object. This name is generally not descriptive of the end result
         * of the action, but instead names the 'interaction type' which the
         * object supports. By convention, the above strings should be used to
         * represent the actions which correspond to the common point-and-click
         * interaction techniques of the same name: i.e.
         * "click", "press", "release", "drag", "drop", "popup", etc.
         * The "popup" action should be used to pop up a context menu for the
         * object, if one exists.
         *
         * For technical reasons, some toolkits cannot guarantee that the
         * reported action is actually 'bound' to a nontrivial user event;
         * i.e. the result of some actions via `atk_action_do_action()` may be
         * NIL.
         * @param i the action index corresponding to the action to be performed
         * @virtual
         */
        vfunc_get_name(i: number): string | null;
        /**
         * @param args
         * @virtual
         */
        // Conflicted with Atk.Object.vfunc_get_name
        vfunc_get_name(...args: never[]): any;
        /**
         * Sets a description of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @param desc the description to be assigned to this action
         * @virtual
         */
        vfunc_set_description(i: number, desc: string): boolean;
        /**
         * @param args
         * @virtual
         */
        // Conflicted with Atk.Object.vfunc_set_description
        vfunc_set_description(...args: never[]): any;
        /**
         * Checks whether the specified point is within the extent of the `component`.
         *
         * Toolkit implementor note: ATK provides a default implementation for
         * this virtual method. In general there are little reason to
         * re-implement it.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @returns `true` or `false` indicating whether the specified point is within the extent of the `component` or not
         */
        contains(x: number, y: number, coord_type: Atk.CoordType | null): boolean;
        /**
         * Returns the alpha value (i.e. the opacity) for this
         * `component`, on a scale from 0 (fully transparent) to 1.0
         * (fully opaque).
         * @returns An alpha value from 0 to 1.0, inclusive.
         */
        get_alpha(): number;
        /**
         * Gets the rectangle which gives the extent of the `component`.
         *
         * If the extent can not be obtained (e.g. a non-embedded plug or missing
         * support), all of x, y, width, height are set to -1.
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         */
        get_extents(coord_type: Atk.CoordType | null): [number, number, number, number];
        /**
         * Gets the layer of the component.
         * @returns an {@link Atk.Layer} which is the layer of the component
         */
        get_layer(): Atk.Layer;
        /**
         * Gets the zorder of the component. The value G_MININT will be returned
         * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
         * @returns a gint which is the zorder of the component, i.e. the depth at which the component is shown in relation to other components in the same container.
         */
        get_mdi_zorder(): number;
        /**
         * Gets the position of `component` in the form of
         * a point specifying `component`'s top-left corner.
         *
         * If the position can not be obtained (e.g. a non-embedded plug or missing
         * support), x and y are set to -1.
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         */
        get_position(coord_type: Atk.CoordType | null): [number, number];
        /**
         * Gets the size of the `component` in terms of width and height.
         *
         * If the size can not be obtained (e.g. a non-embedded plug or missing
         * support), width and height are set to -1.
         */
        get_size(): [number, number];
        /**
         * Grabs focus for this `component`.
         * @returns `true` if successful, `false` otherwise.
         */
        grab_focus(): boolean;
        /**
         * Gets a reference to the accessible child, if one exists, at the
         * coordinate point specified by `x` and `y`.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @returns a reference to the accessible child, if one exists
         */
        ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType | null): Atk.Object | null;
        /**
         * Remove the handler specified by `handler_id` from the list of
         * functions to be executed when this object receives focus events
         * (in or out).
         * @param handler_id the handler id of the focus handler to be removed from `component`
         */
        remove_focus_handler(handler_id: number): void;
        /**
         * Makes `component` visible on the screen by scrolling all necessary parents.
         *
         * Contrary to atk_component_set_position, this does not actually move
         * `component` in its parent, this only makes the parents scroll so that the
         * object shows up on the screen, given its current position within the parents.
         * @param type specify where the object should be made visible.
         * @returns whether scrolling was successful.
         */
        scroll_to(type: Atk.ScrollType | null): boolean;
        /**
         * Move the top-left of `component` to a given position of the screen by
         * scrolling all necessary parents.
         * @param coords specify whether coordinates are relative to the screen or to the parent object.
         * @param x x-position where to scroll to
         * @param y y-position where to scroll to
         * @returns whether scrolling was successful.
         */
        scroll_to_point(coords: Atk.CoordType | null, x: number, y: number): boolean;
        /**
         * Sets the extents of `component`.
         * @param x x coordinate
         * @param y y coordinate
         * @param width width to set for `component`
         * @param height height to set for `component`
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @returns `true` or `false` whether the extents were set or not
         */
        set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType | null): boolean;
        /**
         * Sets the position of `component`.
         *
         * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
         * this just moves `component` in its parent.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the component's top level window
         * @returns `true` or `false` whether or not the position was set or not
         */
        set_position(x: number, y: number, coord_type: Atk.CoordType | null): boolean;
        /**
         * Set the size of the `component` in terms of width and height.
         * @param width width to set for `component`
         * @param height height to set for `component`
         * @returns `true` or `false` whether the size was set or not
         */
        set_size(width: number, height: number): boolean;
        /**
         * @param bounds
         * @virtual
         */
        vfunc_bounds_changed(bounds: Atk.Rectangle): void;
        /**
         * Checks whether the specified point is within the extent of the `component`.
         *
         * Toolkit implementor note: ATK provides a default implementation for
         * this virtual method. In general there are little reason to
         * re-implement it.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @virtual
         */
        vfunc_contains(x: number, y: number, coord_type: Atk.CoordType): boolean;
        /**
         * Returns the alpha value (i.e. the opacity) for this
         * `component`, on a scale from 0 (fully transparent) to 1.0
         * (fully opaque).
         * @virtual
         */
        vfunc_get_alpha(): number;
        /**
         * Gets the rectangle which gives the extent of the `component`.
         *
         * If the extent can not be obtained (e.g. a non-embedded plug or missing
         * support), all of x, y, width, height are set to -1.
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @virtual
         */
        vfunc_get_extents(coord_type: Atk.CoordType): [number, number, number, number];
        /**
         * Gets the layer of the component.
         * @virtual
         */
        vfunc_get_layer(): Atk.Layer;
        /**
         * Gets the zorder of the component. The value G_MININT will be returned
         * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
         * @virtual
         */
        vfunc_get_mdi_zorder(): number;
        /**
         * Gets the position of `component` in the form of
         * a point specifying `component`'s top-left corner.
         *
         * If the position can not be obtained (e.g. a non-embedded plug or missing
         * support), x and y are set to -1.
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @virtual
         */
        vfunc_get_position(coord_type: Atk.CoordType): [number, number];
        /**
         * Gets the size of the `component` in terms of width and height.
         *
         * If the size can not be obtained (e.g. a non-embedded plug or missing
         * support), width and height are set to -1.
         * @virtual
         */
        vfunc_get_size(): [number, number];
        /**
         * Grabs focus for this `component`.
         * @virtual
         */
        vfunc_grab_focus(): boolean;
        /**
         * Gets a reference to the accessible child, if one exists, at the
         * coordinate point specified by `x` and `y`.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @virtual
         */
        vfunc_ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null;
        /**
         * Remove the handler specified by `handler_id` from the list of
         * functions to be executed when this object receives focus events
         * (in or out).
         * @param handler_id the handler id of the focus handler to be removed from `component`
         * @virtual
         */
        vfunc_remove_focus_handler(handler_id: number): void;
        /**
         * Makes `component` visible on the screen by scrolling all necessary parents.
         *
         * Contrary to atk_component_set_position, this does not actually move
         * `component` in its parent, this only makes the parents scroll so that the
         * object shows up on the screen, given its current position within the parents.
         * @param type specify where the object should be made visible.
         * @virtual
         */
        vfunc_scroll_to(type: Atk.ScrollType): boolean;
        /**
         * Move the top-left of `component` to a given position of the screen by
         * scrolling all necessary parents.
         * @param coords specify whether coordinates are relative to the screen or to the parent object.
         * @param x x-position where to scroll to
         * @param y y-position where to scroll to
         * @virtual
         */
        vfunc_scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean;
        /**
         * Sets the extents of `component`.
         * @param x x coordinate
         * @param y y coordinate
         * @param width width to set for `component`
         * @param height height to set for `component`
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @virtual
         */
        vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean;
        /**
         * Sets the position of `component`.
         *
         * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
         * this just moves `component` in its parent.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the component's top level window
         * @virtual
         */
        vfunc_set_position(x: number, y: number, coord_type: Atk.CoordType): boolean;
        /**
         * Set the size of the `component` in terms of width and height.
         * @param width width to set for `component`
         * @param height height to set for `component`
         * @virtual
         */
        vfunc_set_size(width: number, height: number): boolean;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace Rectangle {
        // Signal signatures
        interface SignalSignatures extends Actor.SignalSignatures {
            'notify::accessible-component-layer': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-component-mdi-zorder': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-description': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-help-text': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-hypertext-nlinks': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-id': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-name': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-parent': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-role': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-caption': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-caption-object': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-column-description': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-column-header': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-row-description': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-row-header': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-summary': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-value': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Actor.ConstructorProps, Atk.Action.ConstructorProps, Atk.Component.ConstructorProps {}
    }

    /**
     * The <structname>CallyRectangle</structname> structure contains only private
     * data and should be accessed using the provided API
     * @gir-type Class
     * @since 1.4
     */
    class Rectangle extends Actor implements Atk.Action, Atk.Component {
        static $gtype: GObject.GType<Rectangle>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Rectangle.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Rectangle.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](actor: Clutter.Actor): Rectangle;

        // Signals

        /** @signal */
        connect<K extends keyof Rectangle.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Rectangle.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Rectangle.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Rectangle.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Rectangle.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Rectangle.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
        /**
         * Perform the specified action on the object.
         * @param i the action index corresponding to the action to be performed
         * @returns `true` if success, `false` otherwise
         */
        do_action(i: number): boolean;
        /**
         * Returns a description of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @returns a description string, or `null` if `action` does not implement this interface.
         */
        get_description(i: number): string | null;
        /**
         * @param args
         */
        // Conflicted with Atk.Object.get_description
        get_description(...args: never[]): any;
        /**
         * Gets the keybinding which can be used to activate this action, if one
         * exists. The string returned should contain localized, human-readable,
         * key sequences as they would appear when displayed on screen. It must
         * be in the format "mnemonic;sequence;shortcut".
         *
         * - The mnemonic key activates the object if it is presently enabled onscreen.
         *   This typically corresponds to the underlined letter within the widget.
         *   Example: "n" in a traditional "New..." menu item or the "a" in "Apply" for
         *   a button.
         * - The sequence is the full list of keys which invoke the action even if the
         *   relevant element is not currently shown on screen. For instance, for a menu
         *   item the sequence is the keybindings used to open the parent menus before
         *   invoking. The sequence string is colon-delimited. Example: "Alt+F:N" in a
         *   traditional "New..." menu item.
         * - The shortcut, if it exists, will invoke the same action without showing
         *   the component or its enclosing menus or dialogs. Example: "Ctrl+N" in a
         *   traditional "New..." menu item.
         *
         * Example: For a traditional "New..." menu item, the expected return value
         * would be: "N;Alt+F:N;Ctrl+N" for the English locale and "N;Alt+D:N;Strg+N"
         * for the German locale. If, hypothetically, this menu item lacked a mnemonic,
         * it would be represented by ";;Ctrl+N" and ";;Strg+N" respectively.
         * @param i the action index corresponding to the action to be performed
         * @returns the keybinding which can be used to activate this action, or `null` if there is no keybinding for this action.
         */
        get_keybinding(i: number): string | null;
        /**
         * Returns the localized name of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @returns a name string, or `null` if `action` does not implement this interface.
         */
        get_localized_name(i: number): string | null;
        /**
         * Gets the number of accessible actions available on the object.
         * If there are more than one, the first one is considered the
         * "default" action of the object.
         * @returns a the number of actions, or 0 if `action` does not implement this interface.
         */
        get_n_actions(): number;
        /**
         * Returns a non-localized string naming the specified action of the
         * object. This name is generally not descriptive of the end result
         * of the action, but instead names the 'interaction type' which the
         * object supports. By convention, the above strings should be used to
         * represent the actions which correspond to the common point-and-click
         * interaction techniques of the same name: i.e.
         * "click", "press", "release", "drag", "drop", "popup", etc.
         * The "popup" action should be used to pop up a context menu for the
         * object, if one exists.
         *
         * For technical reasons, some toolkits cannot guarantee that the
         * reported action is actually 'bound' to a nontrivial user event;
         * i.e. the result of some actions via `atk_action_do_action()` may be
         * NIL.
         * @param i the action index corresponding to the action to be performed
         * @returns a name string, or `null` if `action` does not implement this interface.
         */
        get_name(i: number): string | null;
        /**
         * @param args
         */
        // Conflicted with Atk.Object.get_name
        get_name(...args: never[]): any;
        /**
         * Sets a description of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @param desc the description to be assigned to this action
         * @returns a gboolean representing if the description was successfully set;
         */
        set_description(i: number, desc: string): boolean;
        /**
         * @param args
         */
        // Conflicted with Atk.Object.set_description
        set_description(...args: never[]): any;
        /**
         * Perform the specified action on the object.
         * @param i the action index corresponding to the action to be performed
         * @virtual
         */
        vfunc_do_action(i: number): boolean;
        /**
         * Returns a description of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @virtual
         */
        vfunc_get_description(i: number): string | null;
        /**
         * @param args
         * @virtual
         */
        // Conflicted with Atk.Object.vfunc_get_description
        vfunc_get_description(...args: never[]): any;
        /**
         * Gets the keybinding which can be used to activate this action, if one
         * exists. The string returned should contain localized, human-readable,
         * key sequences as they would appear when displayed on screen. It must
         * be in the format "mnemonic;sequence;shortcut".
         *
         * - The mnemonic key activates the object if it is presently enabled onscreen.
         *   This typically corresponds to the underlined letter within the widget.
         *   Example: "n" in a traditional "New..." menu item or the "a" in "Apply" for
         *   a button.
         * - The sequence is the full list of keys which invoke the action even if the
         *   relevant element is not currently shown on screen. For instance, for a menu
         *   item the sequence is the keybindings used to open the parent menus before
         *   invoking. The sequence string is colon-delimited. Example: "Alt+F:N" in a
         *   traditional "New..." menu item.
         * - The shortcut, if it exists, will invoke the same action without showing
         *   the component or its enclosing menus or dialogs. Example: "Ctrl+N" in a
         *   traditional "New..." menu item.
         *
         * Example: For a traditional "New..." menu item, the expected return value
         * would be: "N;Alt+F:N;Ctrl+N" for the English locale and "N;Alt+D:N;Strg+N"
         * for the German locale. If, hypothetically, this menu item lacked a mnemonic,
         * it would be represented by ";;Ctrl+N" and ";;Strg+N" respectively.
         * @param i the action index corresponding to the action to be performed
         * @virtual
         */
        vfunc_get_keybinding(i: number): string | null;
        /**
         * Returns the localized name of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @virtual
         */
        vfunc_get_localized_name(i: number): string | null;
        /**
         * Gets the number of accessible actions available on the object.
         * If there are more than one, the first one is considered the
         * "default" action of the object.
         * @virtual
         */
        vfunc_get_n_actions(): number;
        /**
         * Returns a non-localized string naming the specified action of the
         * object. This name is generally not descriptive of the end result
         * of the action, but instead names the 'interaction type' which the
         * object supports. By convention, the above strings should be used to
         * represent the actions which correspond to the common point-and-click
         * interaction techniques of the same name: i.e.
         * "click", "press", "release", "drag", "drop", "popup", etc.
         * The "popup" action should be used to pop up a context menu for the
         * object, if one exists.
         *
         * For technical reasons, some toolkits cannot guarantee that the
         * reported action is actually 'bound' to a nontrivial user event;
         * i.e. the result of some actions via `atk_action_do_action()` may be
         * NIL.
         * @param i the action index corresponding to the action to be performed
         * @virtual
         */
        vfunc_get_name(i: number): string | null;
        /**
         * @param args
         * @virtual
         */
        // Conflicted with Atk.Object.vfunc_get_name
        vfunc_get_name(...args: never[]): any;
        /**
         * Sets a description of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @param desc the description to be assigned to this action
         * @virtual
         */
        vfunc_set_description(i: number, desc: string): boolean;
        /**
         * @param args
         * @virtual
         */
        // Conflicted with Atk.Object.vfunc_set_description
        vfunc_set_description(...args: never[]): any;
        /**
         * Checks whether the specified point is within the extent of the `component`.
         *
         * Toolkit implementor note: ATK provides a default implementation for
         * this virtual method. In general there are little reason to
         * re-implement it.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @returns `true` or `false` indicating whether the specified point is within the extent of the `component` or not
         */
        contains(x: number, y: number, coord_type: Atk.CoordType | null): boolean;
        /**
         * Returns the alpha value (i.e. the opacity) for this
         * `component`, on a scale from 0 (fully transparent) to 1.0
         * (fully opaque).
         * @returns An alpha value from 0 to 1.0, inclusive.
         */
        get_alpha(): number;
        /**
         * Gets the rectangle which gives the extent of the `component`.
         *
         * If the extent can not be obtained (e.g. a non-embedded plug or missing
         * support), all of x, y, width, height are set to -1.
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         */
        get_extents(coord_type: Atk.CoordType | null): [number, number, number, number];
        /**
         * Gets the layer of the component.
         * @returns an {@link Atk.Layer} which is the layer of the component
         */
        get_layer(): Atk.Layer;
        /**
         * Gets the zorder of the component. The value G_MININT will be returned
         * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
         * @returns a gint which is the zorder of the component, i.e. the depth at which the component is shown in relation to other components in the same container.
         */
        get_mdi_zorder(): number;
        /**
         * Gets the position of `component` in the form of
         * a point specifying `component`'s top-left corner.
         *
         * If the position can not be obtained (e.g. a non-embedded plug or missing
         * support), x and y are set to -1.
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         */
        get_position(coord_type: Atk.CoordType | null): [number, number];
        /**
         * Gets the size of the `component` in terms of width and height.
         *
         * If the size can not be obtained (e.g. a non-embedded plug or missing
         * support), width and height are set to -1.
         */
        get_size(): [number, number];
        /**
         * Grabs focus for this `component`.
         * @returns `true` if successful, `false` otherwise.
         */
        grab_focus(): boolean;
        /**
         * Gets a reference to the accessible child, if one exists, at the
         * coordinate point specified by `x` and `y`.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @returns a reference to the accessible child, if one exists
         */
        ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType | null): Atk.Object | null;
        /**
         * Remove the handler specified by `handler_id` from the list of
         * functions to be executed when this object receives focus events
         * (in or out).
         * @param handler_id the handler id of the focus handler to be removed from `component`
         */
        remove_focus_handler(handler_id: number): void;
        /**
         * Makes `component` visible on the screen by scrolling all necessary parents.
         *
         * Contrary to atk_component_set_position, this does not actually move
         * `component` in its parent, this only makes the parents scroll so that the
         * object shows up on the screen, given its current position within the parents.
         * @param type specify where the object should be made visible.
         * @returns whether scrolling was successful.
         */
        scroll_to(type: Atk.ScrollType | null): boolean;
        /**
         * Move the top-left of `component` to a given position of the screen by
         * scrolling all necessary parents.
         * @param coords specify whether coordinates are relative to the screen or to the parent object.
         * @param x x-position where to scroll to
         * @param y y-position where to scroll to
         * @returns whether scrolling was successful.
         */
        scroll_to_point(coords: Atk.CoordType | null, x: number, y: number): boolean;
        /**
         * Sets the extents of `component`.
         * @param x x coordinate
         * @param y y coordinate
         * @param width width to set for `component`
         * @param height height to set for `component`
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @returns `true` or `false` whether the extents were set or not
         */
        set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType | null): boolean;
        /**
         * Sets the position of `component`.
         *
         * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
         * this just moves `component` in its parent.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the component's top level window
         * @returns `true` or `false` whether or not the position was set or not
         */
        set_position(x: number, y: number, coord_type: Atk.CoordType | null): boolean;
        /**
         * Set the size of the `component` in terms of width and height.
         * @param width width to set for `component`
         * @param height height to set for `component`
         * @returns `true` or `false` whether the size was set or not
         */
        set_size(width: number, height: number): boolean;
        /**
         * @param bounds
         * @virtual
         */
        vfunc_bounds_changed(bounds: Atk.Rectangle): void;
        /**
         * Checks whether the specified point is within the extent of the `component`.
         *
         * Toolkit implementor note: ATK provides a default implementation for
         * this virtual method. In general there are little reason to
         * re-implement it.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @virtual
         */
        vfunc_contains(x: number, y: number, coord_type: Atk.CoordType): boolean;
        /**
         * Returns the alpha value (i.e. the opacity) for this
         * `component`, on a scale from 0 (fully transparent) to 1.0
         * (fully opaque).
         * @virtual
         */
        vfunc_get_alpha(): number;
        /**
         * Gets the rectangle which gives the extent of the `component`.
         *
         * If the extent can not be obtained (e.g. a non-embedded plug or missing
         * support), all of x, y, width, height are set to -1.
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @virtual
         */
        vfunc_get_extents(coord_type: Atk.CoordType): [number, number, number, number];
        /**
         * Gets the layer of the component.
         * @virtual
         */
        vfunc_get_layer(): Atk.Layer;
        /**
         * Gets the zorder of the component. The value G_MININT will be returned
         * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
         * @virtual
         */
        vfunc_get_mdi_zorder(): number;
        /**
         * Gets the position of `component` in the form of
         * a point specifying `component`'s top-left corner.
         *
         * If the position can not be obtained (e.g. a non-embedded plug or missing
         * support), x and y are set to -1.
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @virtual
         */
        vfunc_get_position(coord_type: Atk.CoordType): [number, number];
        /**
         * Gets the size of the `component` in terms of width and height.
         *
         * If the size can not be obtained (e.g. a non-embedded plug or missing
         * support), width and height are set to -1.
         * @virtual
         */
        vfunc_get_size(): [number, number];
        /**
         * Grabs focus for this `component`.
         * @virtual
         */
        vfunc_grab_focus(): boolean;
        /**
         * Gets a reference to the accessible child, if one exists, at the
         * coordinate point specified by `x` and `y`.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @virtual
         */
        vfunc_ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null;
        /**
         * Remove the handler specified by `handler_id` from the list of
         * functions to be executed when this object receives focus events
         * (in or out).
         * @param handler_id the handler id of the focus handler to be removed from `component`
         * @virtual
         */
        vfunc_remove_focus_handler(handler_id: number): void;
        /**
         * Makes `component` visible on the screen by scrolling all necessary parents.
         *
         * Contrary to atk_component_set_position, this does not actually move
         * `component` in its parent, this only makes the parents scroll so that the
         * object shows up on the screen, given its current position within the parents.
         * @param type specify where the object should be made visible.
         * @virtual
         */
        vfunc_scroll_to(type: Atk.ScrollType): boolean;
        /**
         * Move the top-left of `component` to a given position of the screen by
         * scrolling all necessary parents.
         * @param coords specify whether coordinates are relative to the screen or to the parent object.
         * @param x x-position where to scroll to
         * @param y y-position where to scroll to
         * @virtual
         */
        vfunc_scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean;
        /**
         * Sets the extents of `component`.
         * @param x x coordinate
         * @param y y coordinate
         * @param width width to set for `component`
         * @param height height to set for `component`
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @virtual
         */
        vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean;
        /**
         * Sets the position of `component`.
         *
         * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
         * this just moves `component` in its parent.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the component's top level window
         * @virtual
         */
        vfunc_set_position(x: number, y: number, coord_type: Atk.CoordType): boolean;
        /**
         * Set the size of the `component` in terms of width and height.
         * @param width width to set for `component`
         * @param height height to set for `component`
         * @virtual
         */
        vfunc_set_size(width: number, height: number): boolean;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace Root {
        // Signal signatures
        interface SignalSignatures extends Atk.GObjectAccessible.SignalSignatures {
            'notify::accessible-component-layer': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-component-mdi-zorder': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-description': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-help-text': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-hypertext-nlinks': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-id': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-name': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-parent': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-role': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-caption': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-caption-object': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-column-description': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-column-header': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-row-description': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-row-header': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-summary': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-value': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Atk.GObjectAccessible.ConstructorProps {}
    }

    /**
     * The <structname>CallyRoot</structname> structure contains only private
     * data and should be accessed using the provided API
     * @gir-type Class
     * @since 1.4
     */
    class Root extends Atk.GObjectAccessible {
        static $gtype: GObject.GType<Root>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Root.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Root.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Root;

        // Signals

        /** @signal */
        connect<K extends keyof Root.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Root.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Root.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Root.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Root.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Root.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace Stage {
        // Signal signatures
        interface SignalSignatures extends Group.SignalSignatures {
            'notify::accessible-component-layer': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-component-mdi-zorder': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-description': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-help-text': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-hypertext-nlinks': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-id': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-name': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-parent': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-role': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-caption': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-caption-object': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-column-description': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-column-header': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-row-description': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-row-header': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-summary': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-value': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Group.ConstructorProps,
                Atk.Action.ConstructorProps,
                Atk.Component.ConstructorProps,
                Atk.Window.ConstructorProps {}
    }

    /**
     * The <structname>CallyStage</structname> structure contains only
     * private data and should be accessed using the provided API
     * @gir-type Class
     * @since 1.4
     */
    class Stage extends Group implements Atk.Action, Atk.Component, Atk.Window {
        static $gtype: GObject.GType<Stage>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Stage.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Stage.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](actor: Clutter.Actor): Stage;

        // Signals

        /** @signal */
        connect<K extends keyof Stage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Stage.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Stage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Stage.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Stage.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Stage.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
        /**
         * @read-only
         * @category Inherited from Atk.Object
         */
        get accessible_component_layer(): number;
        /**
         * @read-only
         * @category Inherited from Atk.Object
         */
        get accessibleComponentLayer(): number;
        /**
         * @read-only
         * @category Inherited from Atk.Object
         */
        get accessible_component_mdi_zorder(): number;
        /**
         * @read-only
         * @category Inherited from Atk.Object
         */
        get accessibleComponentMdiZorder(): number;
        /** @category Inherited from Atk.Object */
        get accessible_description(): string;
        set accessible_description(val: string);
        /** @category Inherited from Atk.Object */
        get accessibleDescription(): string;
        set accessibleDescription(val: string);
        /** @category Inherited from Atk.Object */
        get accessible_help_text(): string;
        set accessible_help_text(val: string);
        /** @category Inherited from Atk.Object */
        get accessibleHelpText(): string;
        set accessibleHelpText(val: string);
        /**
         * @read-only
         * @category Inherited from Atk.Object
         */
        get accessible_hypertext_nlinks(): number;
        /**
         * @read-only
         * @category Inherited from Atk.Object
         */
        get accessibleHypertextNlinks(): number;
        /** @category Inherited from Atk.Object */
        get accessible_id(): string;
        set accessible_id(val: string);
        /** @category Inherited from Atk.Object */
        get accessibleId(): string;
        set accessibleId(val: string);
        /** @category Inherited from Atk.Object */
        get accessible_name(): string;
        set accessible_name(val: string);
        /** @category Inherited from Atk.Object */
        get accessibleName(): string;
        set accessibleName(val: string);
        /** @category Inherited from Atk.Object */
        get accessible_parent(): Atk.Object;
        set accessible_parent(val: Atk.Object);
        /** @category Inherited from Atk.Object */
        get accessibleParent(): Atk.Object;
        set accessibleParent(val: Atk.Object);
        /** @category Inherited from Atk.Object */
        get accessible_role(): Atk.Role;
        set accessible_role(val: Atk.Role);
        /** @category Inherited from Atk.Object */
        get accessibleRole(): Atk.Role;
        set accessibleRole(val: Atk.Role);
        /**
         * Table caption.
         * @deprecated Since 1.3. Use table-caption-object instead.
         * @category Inherited from Atk.Object
         */
        get accessible_table_caption(): string;
        set accessible_table_caption(val: string);
        /**
         * Table caption.
         * @deprecated Since 1.3. Use table-caption-object instead.
         * @category Inherited from Atk.Object
         */
        get accessibleTableCaption(): string;
        set accessibleTableCaption(val: string);
        /** @category Inherited from Atk.Object */
        get accessible_table_caption_object(): Atk.Object;
        set accessible_table_caption_object(val: Atk.Object);
        /** @category Inherited from Atk.Object */
        get accessibleTableCaptionObject(): Atk.Object;
        set accessibleTableCaptionObject(val: Atk.Object);
        /**
         * Accessible table column description.
         * @deprecated Since 2.12. Use `atk_table_get_column_description()` and `atk_table_set_column_description()` instead.
         * @category Inherited from Atk.Object
         */
        get accessible_table_column_description(): string;
        set accessible_table_column_description(val: string);
        /**
         * Accessible table column description.
         * @deprecated Since 2.12. Use `atk_table_get_column_description()` and `atk_table_set_column_description()` instead.
         * @category Inherited from Atk.Object
         */
        get accessibleTableColumnDescription(): string;
        set accessibleTableColumnDescription(val: string);
        /**
         * Accessible table column header.
         * @deprecated Since 2.12. Use `atk_table_get_column_header()` and `atk_table_set_column_header()` instead.
         * @category Inherited from Atk.Object
         */
        get accessible_table_column_header(): Atk.Object;
        set accessible_table_column_header(val: Atk.Object);
        /**
         * Accessible table column header.
         * @deprecated Since 2.12. Use `atk_table_get_column_header()` and `atk_table_set_column_header()` instead.
         * @category Inherited from Atk.Object
         */
        get accessibleTableColumnHeader(): Atk.Object;
        set accessibleTableColumnHeader(val: Atk.Object);
        /**
         * Accessible table row description.
         * @deprecated Since 2.12. Use `atk_table_get_row_description()` and `atk_table_set_row_description()` instead.
         * @category Inherited from Atk.Object
         */
        get accessible_table_row_description(): string;
        set accessible_table_row_description(val: string);
        /**
         * Accessible table row description.
         * @deprecated Since 2.12. Use `atk_table_get_row_description()` and `atk_table_set_row_description()` instead.
         * @category Inherited from Atk.Object
         */
        get accessibleTableRowDescription(): string;
        set accessibleTableRowDescription(val: string);
        /**
         * Accessible table row header.
         * @deprecated Since 2.12. Use `atk_table_get_row_header()` and `atk_table_set_row_header()` instead.
         * @category Inherited from Atk.Object
         */
        get accessible_table_row_header(): Atk.Object;
        set accessible_table_row_header(val: Atk.Object);
        /**
         * Accessible table row header.
         * @deprecated Since 2.12. Use `atk_table_get_row_header()` and `atk_table_set_row_header()` instead.
         * @category Inherited from Atk.Object
         */
        get accessibleTableRowHeader(): Atk.Object;
        set accessibleTableRowHeader(val: Atk.Object);
        /** @category Inherited from Atk.Object */
        get accessible_table_summary(): Atk.Object;
        set accessible_table_summary(val: Atk.Object);
        /** @category Inherited from Atk.Object */
        get accessibleTableSummary(): Atk.Object;
        set accessibleTableSummary(val: Atk.Object);
        /**
         * Numeric value of this object, in case being and AtkValue.
         * @deprecated Since 2.12. Use `atk_value_get_value_and_text()` to get the value, and value-changed signal to be notified on their value changes.
         * @category Inherited from Atk.Object
         */
        get accessible_value(): number;
        set accessible_value(val: number);
        /**
         * Numeric value of this object, in case being and AtkValue.
         * @deprecated Since 2.12. Use `atk_value_get_value_and_text()` to get the value, and value-changed signal to be notified on their value changes.
         * @category Inherited from Atk.Object
         */
        get accessibleValue(): number;
        set accessibleValue(val: number);
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
        /**
         * Adds a relationship of the specified type with the specified target.
         * @param relationship The {@link Atk.RelationType} of the relation
         * @param target The {@link Atk.Object} which is to be the target of the relation.
         * @returns TRUE if the relationship is added.
         */
        add_relationship(relationship: Atk.RelationType | null, target: Atk.Object): boolean;
        /**
         * Gets the accessible id of the accessible.
         * @returns a character string representing the accessible id of the object, or NULL if no such string was set.
         */
        get_accessible_id(): string;
        /**
         * Get a list of properties applied to this object as a whole, as an {@link Atk.AttributeSet} consisting of
         * name-value pairs. As such these attributes may be considered weakly-typed properties or annotations,
         * as distinct from strongly-typed object data available via other get/set methods.
         * Not all objects have explicit "name-value pair" {@link Atk.AttributeSet} properties.
         * @returns an {@link Atk.AttributeSet} consisting of all explicit properties/annotations applied to the object, or an empty set if the object has no name-value pair attributes assigned to it. This #atkattributeset should be freed by a call to `atk_attribute_set_free()`.
         */
        get_attributes(): Atk.AttributeSet;
        /**
         * Gets the accessible description of the accessible.
         * @returns a character string representing the accessible description of the accessible.
         */
        get_description(): string;
        /**
         * @param args
         */
        // Conflicted with Atk.Action.get_description
        get_description(...args: never[]): any;
        /**
         * Gets the help text associated with the accessible.
         * @returns a character string representing the help text or the object, or NULL if no such string was set.
         */
        get_help_text(): string;
        /**
         * Gets the 0-based index of this accessible in its parent; returns -1 if the
         * accessible does not have an accessible parent.
         * @returns an integer which is the index of the accessible in its parent
         */
        get_index_in_parent(): number;
        /**
         * Gets the layer of the accessible.
         * @returns an {@link Atk.Layer} which is the layer of the accessible
         */
        get_layer(): Atk.Layer;
        /**
         * Gets the zorder of the accessible. The value G_MININT will be returned
         * if the layer of the accessible is not ATK_LAYER_MDI.
         * @returns a gint which is the zorder of the accessible, i.e. the depth at which the component is shown in relation to other components in the same container.
         */
        get_mdi_zorder(): number;
        /**
         * Gets the number of accessible children of the accessible.
         * @returns an integer representing the number of accessible children of the accessible.
         */
        get_n_accessible_children(): number;
        /**
         * Gets the accessible name of the accessible.
         * @returns a character string representing the accessible name of the object.
         */
        get_name(): string;
        /**
         * @param args
         */
        // Conflicted with Atk.Action.get_name
        get_name(...args: never[]): any;
        /**
         * Gets a UTF-8 string indicating the POSIX-style LC_MESSAGES locale
         * of `accessible`.
         * @returns a UTF-8 string indicating the POSIX-style LC_MESSAGES          locale of `accessible`.
         */
        get_object_locale(): string;
        /**
         * Gets the accessible parent of the accessible. By default this is
         * the one assigned with `atk_object_set_parent()`, but it is assumed
         * that ATK implementors have ways to get the parent of the object
         * without the need of assigning it manually with
         * `atk_object_set_parent()`, and will return it with this method.
         *
         * If you are only interested on the parent assigned with
         * `atk_object_set_parent()`, use `atk_object_peek_parent()`.
         * @returns an {@link Atk.Object} representing the accessible parent of the accessible
         */
        get_parent(): Atk.Object;
        /**
         * Gets the role of the accessible.
         * @returns an {@link Atk.Role} which is the role of the accessible
         */
        get_role(): Atk.Role;
        /**
         * This function is called when implementing subclasses of {@link Atk.Object}.
         * It does initialization required for the new object. It is intended
         * that this function should called only in the ..._new() functions used
         * to create an instance of a subclass of {@link Atk.Object}
         * @param data a `gpointer` which identifies the object for which the AtkObject was created.
         */
        initialize(data?: any | null): void;
        /**
         * Emits a state-change signal for the specified state.
         *
         * Note that as a general rule when the state of an existing object changes,
         * emitting a notification is expected.
         * @param state an {@link Atk.State} whose state is changed
         * @param value a gboolean which indicates whether the state is being set on or off
         */
        notify_state_change(state: Atk.State, value: boolean): void;
        /**
         * Gets the accessible parent of the accessible, if it has been
         * manually assigned with atk_object_set_parent. Otherwise, this
         * function returns `null`.
         *
         * This method is intended as an utility for ATK implementors, and not
         * to be exposed to accessible tools. See `atk_object_get_parent()` for
         * further reference.
         * @returns an {@link Atk.Object} representing the accessible parent of the accessible if assigned
         */
        peek_parent(): Atk.Object;
        /**
         * Gets a reference to the specified accessible child of the object.
         * The accessible children are 0-based so the first accessible child is
         * at index 0, the second at index 1 and so on.
         * @param i a gint representing the position of the child, starting from 0
         * @returns an {@link Atk.Object} representing the specified accessible child of the accessible.
         */
        ref_accessible_child(i: number): Atk.Object;
        /**
         * Gets the {@link Atk.RelationSet} associated with the object.
         * @returns an {@link Atk.RelationSet} representing the relation set of the object.
         */
        ref_relation_set(): Atk.RelationSet;
        /**
         * Gets a reference to the state set of the accessible; the caller must
         * unreference it when it is no longer needed.
         * @returns a reference to an {@link Atk.StateSet} which is the state set of the accessible
         */
        ref_state_set(): Atk.StateSet;
        /**
         * Removes a property change handler.
         * @param handler_id a guint which identifies the handler to be removed.
         */
        remove_property_change_handler(handler_id: number): void;
        /**
         * Removes a relationship of the specified type with the specified target.
         * @param relationship The {@link Atk.RelationType} of the relation
         * @param target The {@link Atk.Object} which is the target of the relation to be removed.
         * @returns TRUE if the relationship is removed.
         */
        remove_relationship(relationship: Atk.RelationType | null, target: Atk.Object): boolean;
        /**
         * Sets the accessible ID of the accessible.  This is not meant to be presented
         * to the user, but to be an ID which is stable over application development.
         * Typically, this is the gtkbuilder ID. Such an ID will be available for
         * instance to identify a given well-known accessible object for tailored screen
         * reading, or for automatic regression testing.
         * @param id a character string to be set as the accessible id
         */
        set_accessible_id(id: string): void;
        /**
         * Sets the accessible description of the accessible. You can't set
         * the description to NULL. This is reserved for the initial value. In
         * this aspect NULL is similar to ATK_ROLE_UNKNOWN. If you want to set
         * the name to a empty value you can use "".
         * @param description a character string to be set as the accessible description
         */
        set_description(description: string): void;
        /**
         * @param args
         */
        // Conflicted with Atk.Action.set_description
        set_description(...args: never[]): any;
        /**
         * Sets the help text associated with the accessible. This can be used to
         * expose context-sensitive information to help a user understand how to
         * interact with the object. You can't set the help text to NULL.
         * This is reserved for the initial value. If you want to set the name to
         * an empty value, you can use "".
         * @param help_text a character string to be set as the accessible's help text
         */
        set_help_text(help_text: string): void;
        /**
         * Sets the accessible name of the accessible. You can't set the name
         * to NULL. This is reserved for the initial value. In this aspect
         * NULL is similar to ATK_ROLE_UNKNOWN. If you want to set the name to
         * a empty value you can use "".
         * @param name a character string to be set as the accessible name
         */
        set_name(name: string): void;
        /**
         * Sets the accessible parent of the accessible. `parent` can be NULL.
         * @param parent an {@link Atk.Object} to be set as the accessible parent
         */
        set_parent(parent: Atk.Object): void;
        /**
         * Sets the role of the accessible.
         * @param role an {@link Atk.Role} to be set as the role
         */
        set_role(role: Atk.Role | null): void;
        /**
         * @param child
         * @virtual
         */
        vfunc_active_descendant_changed(child?: any | null): void;
        /**
         * @param change_index
         * @param changed_child
         * @virtual
         */
        vfunc_children_changed(change_index: number, changed_child?: any | null): void;
        /**
         * The signal handler which is executed when there is a
         *   focus event for an object. This virtual function is deprecated
         *   since 2.9.4 and it should not be overriden. Use
         *   the {@link Atk.Object.SignalSignatures.state_change | Atk.Object::state-change} "focused" signal instead.
         * @param focus_in
         * @virtual
         */
        vfunc_focus_event(focus_in: boolean): void;
        /**
         * Get a list of properties applied to this object as a whole, as an {@link Atk.AttributeSet} consisting of
         * name-value pairs. As such these attributes may be considered weakly-typed properties or annotations,
         * as distinct from strongly-typed object data available via other get/set methods.
         * Not all objects have explicit "name-value pair" {@link Atk.AttributeSet} properties.
         * @virtual
         */
        vfunc_get_attributes(): Atk.AttributeSet;
        /**
         * Gets the accessible description of the accessible.
         * @virtual
         */
        vfunc_get_description(): string;
        /**
         * @param args
         * @virtual
         */
        // Conflicted with Atk.Action.vfunc_get_description
        vfunc_get_description(...args: never[]): any;
        /**
         * Gets the 0-based index of this accessible in its parent; returns -1 if the
         * accessible does not have an accessible parent.
         * @virtual
         */
        vfunc_get_index_in_parent(): number;
        /**
         * Gets the layer of the accessible.
         * @virtual
         */
        vfunc_get_layer(): Atk.Layer;
        /**
         * Gets the zorder of the accessible. The value G_MININT will be returned
         * if the layer of the accessible is not ATK_LAYER_MDI.
         * @virtual
         */
        vfunc_get_mdi_zorder(): number;
        /**
         * @virtual
         */
        vfunc_get_n_children(): number;
        /**
         * Gets the accessible name of the accessible.
         * @virtual
         */
        vfunc_get_name(): string;
        /**
         * @param args
         * @virtual
         */
        // Conflicted with Atk.Action.vfunc_get_name
        vfunc_get_name(...args: never[]): any;
        /**
         * Gets a UTF-8 string indicating the POSIX-style LC_MESSAGES locale
         * of `accessible`.
         * @virtual
         */
        vfunc_get_object_locale(): string;
        /**
         * Gets the accessible parent of the accessible. By default this is
         * the one assigned with `atk_object_set_parent()`, but it is assumed
         * that ATK implementors have ways to get the parent of the object
         * without the need of assigning it manually with
         * `atk_object_set_parent()`, and will return it with this method.
         *
         * If you are only interested on the parent assigned with
         * `atk_object_set_parent()`, use `atk_object_peek_parent()`.
         * @virtual
         */
        vfunc_get_parent(): Atk.Object;
        /**
         * Gets the role of the accessible.
         * @virtual
         */
        vfunc_get_role(): Atk.Role;
        /**
         * This function is called when implementing subclasses of {@link Atk.Object}.
         * It does initialization required for the new object. It is intended
         * that this function should called only in the ..._new() functions used
         * to create an instance of a subclass of {@link Atk.Object}
         * @param data a `gpointer` which identifies the object for which the AtkObject was created.
         * @virtual
         */
        vfunc_initialize(data?: any | null): void;
        /**
         * @param values
         * @virtual
         */
        vfunc_property_change(values: Atk.PropertyValues): void;
        /**
         * Gets the {@link Atk.RelationSet} associated with the object.
         * @virtual
         */
        vfunc_ref_relation_set(): Atk.RelationSet;
        /**
         * Gets a reference to the state set of the accessible; the caller must
         * unreference it when it is no longer needed.
         * @virtual
         */
        vfunc_ref_state_set(): Atk.StateSet;
        /**
         * Removes a property change handler.
         * @param handler_id a guint which identifies the handler to be removed.
         * @virtual
         */
        vfunc_remove_property_change_handler(handler_id: number): void;
        /**
         * Sets the accessible description of the accessible. You can't set
         * the description to NULL. This is reserved for the initial value. In
         * this aspect NULL is similar to ATK_ROLE_UNKNOWN. If you want to set
         * the name to a empty value you can use "".
         * @param description a character string to be set as the accessible description
         * @virtual
         */
        vfunc_set_description(description: string): void;
        /**
         * @param args
         * @virtual
         */
        // Conflicted with Atk.Action.vfunc_set_description
        vfunc_set_description(...args: never[]): any;
        /**
         * Sets the accessible name of the accessible. You can't set the name
         * to NULL. This is reserved for the initial value. In this aspect
         * NULL is similar to ATK_ROLE_UNKNOWN. If you want to set the name to
         * a empty value you can use "".
         * @param name a character string to be set as the accessible name
         * @virtual
         */
        vfunc_set_name(name: string): void;
        /**
         * Sets the accessible parent of the accessible. `parent` can be NULL.
         * @param parent an {@link Atk.Object} to be set as the accessible parent
         * @virtual
         */
        vfunc_set_parent(parent: Atk.Object): void;
        /**
         * Sets the role of the accessible.
         * @param role an {@link Atk.Role} to be set as the role
         * @virtual
         */
        vfunc_set_role(role: Atk.Role): void;
        /**
         * @param name
         * @param state_set
         * @virtual
         */
        vfunc_state_change(name: string, state_set: boolean): void;
        /**
         * @virtual
         */
        vfunc_visible_data_changed(): void;
    }

    namespace Text {
        // Signal signatures
        interface SignalSignatures extends Actor.SignalSignatures {
            'notify::accessible-component-layer': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-component-mdi-zorder': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-description': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-help-text': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-hypertext-nlinks': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-id': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-name': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-parent': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-role': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-caption': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-caption-object': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-column-description': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-column-header': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-row-description': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-row-header': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-summary': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-value': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Actor.ConstructorProps,
                Atk.Action.ConstructorProps,
                Atk.Component.ConstructorProps,
                Atk.EditableText.ConstructorProps,
                Atk.Text.ConstructorProps {}
    }

    /**
     * The <structname>CallyText</structname> structure contains only private
     * data and should be accessed using the provided API
     * @gir-type Class
     * @since 1.4
     */
    class Text extends Actor implements Atk.Action, Atk.Component, Atk.EditableText, Atk.Text {
        static $gtype: GObject.GType<Text>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Text.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Text.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](actor: Clutter.Actor): Text;

        // Signals

        /** @signal */
        connect<K extends keyof Text.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Text.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Text.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Text.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Text.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Text.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
        /**
         * Perform the specified action on the object.
         * @param i the action index corresponding to the action to be performed
         * @returns `true` if success, `false` otherwise
         */
        do_action(i: number): boolean;
        /**
         * Returns a description of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @returns a description string, or `null` if `action` does not implement this interface.
         */
        get_description(i: number): string | null;
        /**
         * @param args
         */
        // Conflicted with Atk.Object.get_description
        get_description(...args: never[]): any;
        /**
         * Gets the keybinding which can be used to activate this action, if one
         * exists. The string returned should contain localized, human-readable,
         * key sequences as they would appear when displayed on screen. It must
         * be in the format "mnemonic;sequence;shortcut".
         *
         * - The mnemonic key activates the object if it is presently enabled onscreen.
         *   This typically corresponds to the underlined letter within the widget.
         *   Example: "n" in a traditional "New..." menu item or the "a" in "Apply" for
         *   a button.
         * - The sequence is the full list of keys which invoke the action even if the
         *   relevant element is not currently shown on screen. For instance, for a menu
         *   item the sequence is the keybindings used to open the parent menus before
         *   invoking. The sequence string is colon-delimited. Example: "Alt+F:N" in a
         *   traditional "New..." menu item.
         * - The shortcut, if it exists, will invoke the same action without showing
         *   the component or its enclosing menus or dialogs. Example: "Ctrl+N" in a
         *   traditional "New..." menu item.
         *
         * Example: For a traditional "New..." menu item, the expected return value
         * would be: "N;Alt+F:N;Ctrl+N" for the English locale and "N;Alt+D:N;Strg+N"
         * for the German locale. If, hypothetically, this menu item lacked a mnemonic,
         * it would be represented by ";;Ctrl+N" and ";;Strg+N" respectively.
         * @param i the action index corresponding to the action to be performed
         * @returns the keybinding which can be used to activate this action, or `null` if there is no keybinding for this action.
         */
        get_keybinding(i: number): string | null;
        /**
         * Returns the localized name of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @returns a name string, or `null` if `action` does not implement this interface.
         */
        get_localized_name(i: number): string | null;
        /**
         * Gets the number of accessible actions available on the object.
         * If there are more than one, the first one is considered the
         * "default" action of the object.
         * @returns a the number of actions, or 0 if `action` does not implement this interface.
         */
        get_n_actions(): number;
        /**
         * Returns a non-localized string naming the specified action of the
         * object. This name is generally not descriptive of the end result
         * of the action, but instead names the 'interaction type' which the
         * object supports. By convention, the above strings should be used to
         * represent the actions which correspond to the common point-and-click
         * interaction techniques of the same name: i.e.
         * "click", "press", "release", "drag", "drop", "popup", etc.
         * The "popup" action should be used to pop up a context menu for the
         * object, if one exists.
         *
         * For technical reasons, some toolkits cannot guarantee that the
         * reported action is actually 'bound' to a nontrivial user event;
         * i.e. the result of some actions via `atk_action_do_action()` may be
         * NIL.
         * @param i the action index corresponding to the action to be performed
         * @returns a name string, or `null` if `action` does not implement this interface.
         */
        get_name(i: number): string | null;
        /**
         * @param args
         */
        // Conflicted with Atk.Object.get_name
        get_name(...args: never[]): any;
        /**
         * Sets a description of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @param desc the description to be assigned to this action
         * @returns a gboolean representing if the description was successfully set;
         */
        set_description(i: number, desc: string): boolean;
        /**
         * @param args
         */
        // Conflicted with Atk.Object.set_description
        set_description(...args: never[]): any;
        /**
         * Perform the specified action on the object.
         * @param i the action index corresponding to the action to be performed
         * @virtual
         */
        vfunc_do_action(i: number): boolean;
        /**
         * Returns a description of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @virtual
         */
        vfunc_get_description(i: number): string | null;
        /**
         * @param args
         * @virtual
         */
        // Conflicted with Atk.Object.vfunc_get_description
        vfunc_get_description(...args: never[]): any;
        /**
         * Gets the keybinding which can be used to activate this action, if one
         * exists. The string returned should contain localized, human-readable,
         * key sequences as they would appear when displayed on screen. It must
         * be in the format "mnemonic;sequence;shortcut".
         *
         * - The mnemonic key activates the object if it is presently enabled onscreen.
         *   This typically corresponds to the underlined letter within the widget.
         *   Example: "n" in a traditional "New..." menu item or the "a" in "Apply" for
         *   a button.
         * - The sequence is the full list of keys which invoke the action even if the
         *   relevant element is not currently shown on screen. For instance, for a menu
         *   item the sequence is the keybindings used to open the parent menus before
         *   invoking. The sequence string is colon-delimited. Example: "Alt+F:N" in a
         *   traditional "New..." menu item.
         * - The shortcut, if it exists, will invoke the same action without showing
         *   the component or its enclosing menus or dialogs. Example: "Ctrl+N" in a
         *   traditional "New..." menu item.
         *
         * Example: For a traditional "New..." menu item, the expected return value
         * would be: "N;Alt+F:N;Ctrl+N" for the English locale and "N;Alt+D:N;Strg+N"
         * for the German locale. If, hypothetically, this menu item lacked a mnemonic,
         * it would be represented by ";;Ctrl+N" and ";;Strg+N" respectively.
         * @param i the action index corresponding to the action to be performed
         * @virtual
         */
        vfunc_get_keybinding(i: number): string | null;
        /**
         * Returns the localized name of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @virtual
         */
        vfunc_get_localized_name(i: number): string | null;
        /**
         * Gets the number of accessible actions available on the object.
         * If there are more than one, the first one is considered the
         * "default" action of the object.
         * @virtual
         */
        vfunc_get_n_actions(): number;
        /**
         * Returns a non-localized string naming the specified action of the
         * object. This name is generally not descriptive of the end result
         * of the action, but instead names the 'interaction type' which the
         * object supports. By convention, the above strings should be used to
         * represent the actions which correspond to the common point-and-click
         * interaction techniques of the same name: i.e.
         * "click", "press", "release", "drag", "drop", "popup", etc.
         * The "popup" action should be used to pop up a context menu for the
         * object, if one exists.
         *
         * For technical reasons, some toolkits cannot guarantee that the
         * reported action is actually 'bound' to a nontrivial user event;
         * i.e. the result of some actions via `atk_action_do_action()` may be
         * NIL.
         * @param i the action index corresponding to the action to be performed
         * @virtual
         */
        vfunc_get_name(i: number): string | null;
        /**
         * @param args
         * @virtual
         */
        // Conflicted with Atk.Object.vfunc_get_name
        vfunc_get_name(...args: never[]): any;
        /**
         * Sets a description of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @param desc the description to be assigned to this action
         * @virtual
         */
        vfunc_set_description(i: number, desc: string): boolean;
        /**
         * @param args
         * @virtual
         */
        // Conflicted with Atk.Object.vfunc_set_description
        vfunc_set_description(...args: never[]): any;
        /**
         * Checks whether the specified point is within the extent of the `component`.
         *
         * Toolkit implementor note: ATK provides a default implementation for
         * this virtual method. In general there are little reason to
         * re-implement it.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @returns `true` or `false` indicating whether the specified point is within the extent of the `component` or not
         */
        contains(x: number, y: number, coord_type: Atk.CoordType | null): boolean;
        /**
         * Returns the alpha value (i.e. the opacity) for this
         * `component`, on a scale from 0 (fully transparent) to 1.0
         * (fully opaque).
         * @returns An alpha value from 0 to 1.0, inclusive.
         */
        get_alpha(): number;
        /**
         * Gets the rectangle which gives the extent of the `component`.
         *
         * If the extent can not be obtained (e.g. a non-embedded plug or missing
         * support), all of x, y, width, height are set to -1.
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         */
        get_extents(coord_type: Atk.CoordType | null): [number, number, number, number];
        /**
         * Gets the layer of the component.
         * @returns an {@link Atk.Layer} which is the layer of the component
         */
        get_layer(): Atk.Layer;
        /**
         * Gets the zorder of the component. The value G_MININT will be returned
         * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
         * @returns a gint which is the zorder of the component, i.e. the depth at which the component is shown in relation to other components in the same container.
         */
        get_mdi_zorder(): number;
        /**
         * Gets the position of `component` in the form of
         * a point specifying `component`'s top-left corner.
         *
         * If the position can not be obtained (e.g. a non-embedded plug or missing
         * support), x and y are set to -1.
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         */
        get_position(coord_type: Atk.CoordType | null): [number, number];
        /**
         * Gets the size of the `component` in terms of width and height.
         *
         * If the size can not be obtained (e.g. a non-embedded plug or missing
         * support), width and height are set to -1.
         */
        get_size(): [number, number];
        /**
         * Grabs focus for this `component`.
         * @returns `true` if successful, `false` otherwise.
         */
        grab_focus(): boolean;
        /**
         * Gets a reference to the accessible child, if one exists, at the
         * coordinate point specified by `x` and `y`.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @returns a reference to the accessible child, if one exists
         */
        ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType | null): Atk.Object | null;
        /**
         * Remove the handler specified by `handler_id` from the list of
         * functions to be executed when this object receives focus events
         * (in or out).
         * @param handler_id the handler id of the focus handler to be removed from `component`
         */
        remove_focus_handler(handler_id: number): void;
        /**
         * Makes `component` visible on the screen by scrolling all necessary parents.
         *
         * Contrary to atk_component_set_position, this does not actually move
         * `component` in its parent, this only makes the parents scroll so that the
         * object shows up on the screen, given its current position within the parents.
         * @param type specify where the object should be made visible.
         * @returns whether scrolling was successful.
         */
        scroll_to(type: Atk.ScrollType | null): boolean;
        /**
         * Move the top-left of `component` to a given position of the screen by
         * scrolling all necessary parents.
         * @param coords specify whether coordinates are relative to the screen or to the parent object.
         * @param x x-position where to scroll to
         * @param y y-position where to scroll to
         * @returns whether scrolling was successful.
         */
        scroll_to_point(coords: Atk.CoordType | null, x: number, y: number): boolean;
        /**
         * Sets the extents of `component`.
         * @param x x coordinate
         * @param y y coordinate
         * @param width width to set for `component`
         * @param height height to set for `component`
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @returns `true` or `false` whether the extents were set or not
         */
        set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType | null): boolean;
        /**
         * Sets the position of `component`.
         *
         * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
         * this just moves `component` in its parent.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the component's top level window
         * @returns `true` or `false` whether or not the position was set or not
         */
        set_position(x: number, y: number, coord_type: Atk.CoordType | null): boolean;
        /**
         * Set the size of the `component` in terms of width and height.
         * @param width width to set for `component`
         * @param height height to set for `component`
         * @returns `true` or `false` whether the size was set or not
         */
        set_size(width: number, height: number): boolean;
        /**
         * @param bounds
         * @virtual
         */
        vfunc_bounds_changed(bounds: Atk.Rectangle): void;
        /**
         * Checks whether the specified point is within the extent of the `component`.
         *
         * Toolkit implementor note: ATK provides a default implementation for
         * this virtual method. In general there are little reason to
         * re-implement it.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @virtual
         */
        vfunc_contains(x: number, y: number, coord_type: Atk.CoordType): boolean;
        /**
         * Returns the alpha value (i.e. the opacity) for this
         * `component`, on a scale from 0 (fully transparent) to 1.0
         * (fully opaque).
         * @virtual
         */
        vfunc_get_alpha(): number;
        /**
         * Gets the rectangle which gives the extent of the `component`.
         *
         * If the extent can not be obtained (e.g. a non-embedded plug or missing
         * support), all of x, y, width, height are set to -1.
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @virtual
         */
        vfunc_get_extents(coord_type: Atk.CoordType): [number, number, number, number];
        /**
         * Gets the layer of the component.
         * @virtual
         */
        vfunc_get_layer(): Atk.Layer;
        /**
         * Gets the zorder of the component. The value G_MININT will be returned
         * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
         * @virtual
         */
        vfunc_get_mdi_zorder(): number;
        /**
         * Gets the position of `component` in the form of
         * a point specifying `component`'s top-left corner.
         *
         * If the position can not be obtained (e.g. a non-embedded plug or missing
         * support), x and y are set to -1.
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @virtual
         */
        vfunc_get_position(coord_type: Atk.CoordType): [number, number];
        /**
         * Gets the size of the `component` in terms of width and height.
         *
         * If the size can not be obtained (e.g. a non-embedded plug or missing
         * support), width and height are set to -1.
         * @virtual
         */
        vfunc_get_size(): [number, number];
        /**
         * Grabs focus for this `component`.
         * @virtual
         */
        vfunc_grab_focus(): boolean;
        /**
         * Gets a reference to the accessible child, if one exists, at the
         * coordinate point specified by `x` and `y`.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @virtual
         */
        vfunc_ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null;
        /**
         * Remove the handler specified by `handler_id` from the list of
         * functions to be executed when this object receives focus events
         * (in or out).
         * @param handler_id the handler id of the focus handler to be removed from `component`
         * @virtual
         */
        vfunc_remove_focus_handler(handler_id: number): void;
        /**
         * Makes `component` visible on the screen by scrolling all necessary parents.
         *
         * Contrary to atk_component_set_position, this does not actually move
         * `component` in its parent, this only makes the parents scroll so that the
         * object shows up on the screen, given its current position within the parents.
         * @param type specify where the object should be made visible.
         * @virtual
         */
        vfunc_scroll_to(type: Atk.ScrollType): boolean;
        /**
         * Move the top-left of `component` to a given position of the screen by
         * scrolling all necessary parents.
         * @param coords specify whether coordinates are relative to the screen or to the parent object.
         * @param x x-position where to scroll to
         * @param y y-position where to scroll to
         * @virtual
         */
        vfunc_scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean;
        /**
         * Sets the extents of `component`.
         * @param x x coordinate
         * @param y y coordinate
         * @param width width to set for `component`
         * @param height height to set for `component`
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @virtual
         */
        vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean;
        /**
         * Sets the position of `component`.
         *
         * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
         * this just moves `component` in its parent.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the component's top level window
         * @virtual
         */
        vfunc_set_position(x: number, y: number, coord_type: Atk.CoordType): boolean;
        /**
         * Set the size of the `component` in terms of width and height.
         * @param width width to set for `component`
         * @param height height to set for `component`
         * @virtual
         */
        vfunc_set_size(width: number, height: number): boolean;
        /**
         * Copy text from `start_pos` up to, but not including `end_pos`
         * to the clipboard.
         * @param start_pos start position
         * @param end_pos end position
         */
        copy_text(start_pos: number, end_pos: number): void;
        /**
         * Copy text from `start_pos` up to, but not including `end_pos`
         * to the clipboard and then delete from the widget.
         * @param start_pos start position
         * @param end_pos end position
         */
        cut_text(start_pos: number, end_pos: number): void;
        /**
         * Delete text `start_pos` up to, but not including `end_pos`.
         * @param start_pos start position
         * @param end_pos end position
         */
        delete_text(start_pos: number, end_pos: number): void;
        /**
         * Insert text at a given position.
         * @param string the text to insert
         * @param length the length of text to insert, in bytes
         * @param position The caller initializes this to the position at which to insert the text. After the call it points at the position after the newly inserted text.
         */
        insert_text(string: string, length: number, position: number): void;
        /**
         * Paste text from clipboard to specified `position`.
         * @param position position to paste
         */
        paste_text(position: number): void;
        /**
         * Sets the attributes for a specified range. See the ATK_ATTRIBUTE
         * macros (such as #ATK_ATTRIBUTE_LEFT_MARGIN) for examples of attributes
         * that can be set. Note that other attributes that do not have corresponding
         * ATK_ATTRIBUTE macros may also be set for certain text widgets.
         * @param attrib_set an {@link Atk.AttributeSet}
         * @param start_offset start of range in which to set attributes
         * @param end_offset end of range in which to set attributes
         * @returns `true` if attributes successfully set for the specified range, otherwise `false`
         */
        set_run_attributes(attrib_set: Atk.AttributeSet, start_offset: number, end_offset: number): boolean;
        /**
         * Set text contents of `text`.
         * @param string string to set for text contents of `text`
         */
        set_text_contents(string: string): void;
        /**
         * Copy text from `start_pos` up to, but not including `end_pos`
         * to the clipboard.
         * @param start_pos start position
         * @param end_pos end position
         * @virtual
         */
        vfunc_copy_text(start_pos: number, end_pos: number): void;
        /**
         * Copy text from `start_pos` up to, but not including `end_pos`
         * to the clipboard and then delete from the widget.
         * @param start_pos start position
         * @param end_pos end position
         * @virtual
         */
        vfunc_cut_text(start_pos: number, end_pos: number): void;
        /**
         * Delete text `start_pos` up to, but not including `end_pos`.
         * @param start_pos start position
         * @param end_pos end position
         * @virtual
         */
        vfunc_delete_text(start_pos: number, end_pos: number): void;
        /**
         * Insert text at a given position.
         * @param string the text to insert
         * @param length the length of text to insert, in bytes
         * @param position The caller initializes this to the position at which to insert the text. After the call it points at the position after the newly inserted text.
         * @virtual
         */
        vfunc_insert_text(string: string, length: number, position: number): void;
        /**
         * Paste text from clipboard to specified `position`.
         * @param position position to paste
         * @virtual
         */
        vfunc_paste_text(position: number): void;
        /**
         * Sets the attributes for a specified range. See the ATK_ATTRIBUTE
         * macros (such as #ATK_ATTRIBUTE_LEFT_MARGIN) for examples of attributes
         * that can be set. Note that other attributes that do not have corresponding
         * ATK_ATTRIBUTE macros may also be set for certain text widgets.
         * @param attrib_set an {@link Atk.AttributeSet}
         * @param start_offset start of range in which to set attributes
         * @param end_offset end of range in which to set attributes
         * @virtual
         */
        vfunc_set_run_attributes(attrib_set: Atk.AttributeSet, start_offset: number, end_offset: number): boolean;
        /**
         * Set text contents of `text`.
         * @param string string to set for text contents of `text`
         * @virtual
         */
        vfunc_set_text_contents(string: string): void;
        /**
         * Adds a selection bounded by the specified offsets.
         * @param start_offset the starting character offset of the selected region
         * @param end_offset the offset of the first character after the selected region.
         * @returns `true` if successful, `false` otherwise
         */
        add_selection(start_offset: number, end_offset: number): boolean;
        /**
         * Get the ranges of text in the specified bounding box.
         * @param rect An AtkTextRectangle giving the dimensions of the bounding box.
         * @param coord_type Specify whether coordinates are relative to the screen or widget window.
         * @param x_clip_type Specify the horizontal clip type.
         * @param y_clip_type Specify the vertical clip type.
         * @returns Array of AtkTextRange. The last          element of the array returned by this function will be NULL.
         */
        get_bounded_ranges(
            rect: Atk.TextRectangle,
            coord_type: Atk.CoordType | null,
            x_clip_type: Atk.TextClipType | null,
            y_clip_type: Atk.TextClipType | null,
        ): Atk.TextRange[];
        /**
         * Gets the offset of the position of the caret (cursor).
         * @returns the character offset of the position of the caret or -1 if          the caret is not located inside the element or in the case of          any other failure.
         */
        get_caret_offset(): number;
        /**
         * Gets the specified text.
         * @param offset a character offset within `text`
         * @returns the character at `offset` or 0 in the case of failure.
         */
        get_character_at_offset(offset: number): string;
        /**
         * Gets the character count.
         * @returns the number of characters or -1 in case of failure.
         */
        get_character_count(): number;
        /**
         * If the extent can not be obtained (e.g. missing support), all of x, y, width,
         * height are set to -1.
         *
         * Get the bounding box containing the glyph representing the character at
         *     a particular text offset.
         * @param offset The offset of the text character for which bounding information is required.
         * @param coords specify whether coordinates are relative to the screen or widget window
         */
        get_character_extents(offset: number, coords: Atk.CoordType | null): [number, number, number, number];
        /**
         * Creates an {@link Atk.AttributeSet} which consists of the default values of
         * attributes for the text. See the enum AtkTextAttribute for types of text
         * attributes that can be returned. Note that other attributes may also be
         * returned.
         * @returns an {@link Atk.AttributeSet} which contains the default text          attributes for this {@link Atk.Text}. This {@link Atk.AttributeSet} should be freed by          a call to `atk_attribute_set_free()`.
         */
        get_default_attributes(): Atk.AttributeSet;
        /**
         * Gets the number of selected regions.
         * @returns The number of selected regions, or -1 in the case of failure.
         */
        get_n_selections(): number;
        /**
         * Gets the offset of the character located at coordinates `x` and `y`. `x` and `y`
         * are interpreted as being relative to the screen or this widget's window
         * depending on `coords`.
         * @param x screen x-position of character
         * @param y screen y-position of character
         * @param coords specify whether coordinates are relative to the screen or widget window
         * @returns the offset to the character which is located at  the specified          `x` and `y` coordinates of -1 in case of failure.
         */
        get_offset_at_point(x: number, y: number, coords: Atk.CoordType | null): number;
        /**
         * Get the bounding box for text within the specified range.
         *
         * If the extents can not be obtained (e.g. or missing support), the rectangle
         * fields are set to -1.
         * @param start_offset The offset of the first text character for which boundary        information is required.
         * @param end_offset The offset of the text character after the last character        for which boundary information is required.
         * @param coord_type Specify whether coordinates are relative to the screen or widget window.
         */
        get_range_extents(
            start_offset: number,
            end_offset: number,
            coord_type: Atk.CoordType | null,
        ): Atk.TextRectangle;
        /**
         * Creates an {@link Atk.AttributeSet} which consists of the attributes explicitly
         * set at the position `offset` in the text. `start_offset` and `end_offset` are
         * set to the start and end of the range around `offset` where the attributes are
         * invariant. Note that `end_offset` is the offset of the first character
         * after the range.  See the enum AtkTextAttribute for types of text
         * attributes that can be returned. Note that other attributes may also be
         * returned.
         * @param offset the character offset at which to get the attributes, -1 means the offset of the character to be inserted at the caret location.
         * @returns an {@link Atk.AttributeSet} which contains the attributes         explicitly set at `offset`. This {@link Atk.AttributeSet} should be freed by         a call to `atk_attribute_set_free()`.
         */
        get_run_attributes(offset: number): [Atk.AttributeSet, number, number];
        /**
         * Gets the text from the specified selection.
         * @param selection_num The selection number.  The selected regions are assigned numbers that correspond to how far the region is from the start of the text.  The selected region closest to the beginning of the text region is assigned the number 0, etc.  Note that adding, moving or deleting a selected region can change the numbering.
         * @returns a newly allocated string containing the selected text. Use `g_free()`          to free the returned string.
         */
        get_selection(selection_num: number): [string, number, number];
        /**
         * Gets a portion of the text exposed through an {@link Atk.Text} according to a given `offset`
         * and a specific `granularity`, along with the start and end offsets defining the
         * boundaries of such a portion of text.
         *
         * If `granularity` is ATK_TEXT_GRANULARITY_CHAR the character at the
         * offset is returned.
         *
         * If `granularity` is ATK_TEXT_GRANULARITY_WORD the returned string
         * is from the word start at or before the offset to the word start after
         * the offset.
         *
         * The returned string will contain the word at the offset if the offset
         * is inside a word and will contain the word before the offset if the
         * offset is not inside a word.
         *
         * If `granularity` is ATK_TEXT_GRANULARITY_SENTENCE the returned string
         * is from the sentence start at or before the offset to the sentence
         * start after the offset.
         *
         * The returned string will contain the sentence at the offset if the offset
         * is inside a sentence and will contain the sentence before the offset
         * if the offset is not inside a sentence.
         *
         * If `granularity` is ATK_TEXT_GRANULARITY_LINE the returned string
         * is from the line start at or before the offset to the line
         * start after the offset.
         *
         * If `granularity` is ATK_TEXT_GRANULARITY_PARAGRAPH the returned string
         * is from the start of the paragraph at or before the offset to the start
         * of the following paragraph after the offset.
         * @param offset position
         * @param granularity An {@link Atk.TextGranularity}
         * @returns a newly allocated string containing the text at          the `offset` bounded by the specified `granularity`. Use `g_free()`          to free the returned string.  Returns `null` if the offset is invalid          or no implementation is available.
         */
        get_string_at_offset(offset: number, granularity: Atk.TextGranularity | null): [string | null, number, number];
        /**
         * Gets the specified text.
         * @param start_offset a starting character offset within `text`
         * @param end_offset an ending character offset within `text`, or -1 for the end of the string.
         * @returns a newly allocated string containing the text from `start_offset` up          to, but not including `end_offset`. Use `g_free()` to free the returned          string.
         */
        get_text(start_offset: number, end_offset: number): string;
        /**
         * Gets the specified text.
         * @param offset position
         * @param boundary_type An {@link Atk.TextBoundary}
         * @returns a newly allocated string containing the text after `offset` bounded          by the specified `boundary_type`. Use `g_free()` to free the returned          string.
         */
        get_text_after_offset(offset: number, boundary_type: Atk.TextBoundary | null): [string, number, number];
        /**
         * Gets the specified text.
         *
         * If the boundary_type if ATK_TEXT_BOUNDARY_CHAR the character at the
         * offset is returned.
         *
         * If the boundary_type is ATK_TEXT_BOUNDARY_WORD_START the returned string
         * is from the word start at or before the offset to the word start after
         * the offset.
         *
         * The returned string will contain the word at the offset if the offset
         * is inside a word and will contain the word before the offset if the
         * offset is not inside a word.
         *
         * If the boundary type is ATK_TEXT_BOUNDARY_SENTENCE_START the returned
         * string is from the sentence start at or before the offset to the sentence
         * start after the offset.
         *
         * The returned string will contain the sentence at the offset if the offset
         * is inside a sentence and will contain the sentence before the offset
         * if the offset is not inside a sentence.
         *
         * If the boundary type is ATK_TEXT_BOUNDARY_LINE_START the returned
         * string is from the line start at or before the offset to the line
         * start after the offset.
         * @param offset position
         * @param boundary_type An {@link Atk.TextBoundary}
         * @returns a newly allocated string containing the text at `offset` bounded          by the specified `boundary_type`. Use `g_free()` to free the returned          string.
         */
        get_text_at_offset(offset: number, boundary_type: Atk.TextBoundary | null): [string, number, number];
        /**
         * Gets the specified text.
         * @param offset position
         * @param boundary_type An {@link Atk.TextBoundary}
         * @returns a newly allocated string containing the text before `offset` bounded          by the specified `boundary_type`. Use `g_free()` to free the returned          string.
         */
        get_text_before_offset(offset: number, boundary_type: Atk.TextBoundary | null): [string, number, number];
        /**
         * Removes the specified selection.
         * @param selection_num The selection number.  The selected regions are assigned numbers that correspond to how far the region is from the start of the text.  The selected region closest to the beginning of the text region is assigned the number 0, etc.  Note that adding, moving or deleting a selected region can change the numbering.
         * @returns `true` if successful, `false` otherwise
         */
        remove_selection(selection_num: number): boolean;
        /**
         * Makes a substring of `text` visible on the screen by scrolling all necessary parents.
         * @param start_offset start offset in the `text`
         * @param end_offset end offset in the `text`, or -1 for the end of the text.
         * @param type specify where the object should be made visible.
         * @returns whether scrolling was successful.
         */
        scroll_substring_to(start_offset: number, end_offset: number, type: Atk.ScrollType | null): boolean;
        /**
         * Move the top-left of a substring of `text` to a given position of the screen
         * by scrolling all necessary parents.
         * @param start_offset start offset in the `text`
         * @param end_offset end offset in the `text`, or -1 for the end of the text.
         * @param coords specify whether coordinates are relative to the screen or to the parent object.
         * @param x x-position where to scroll to
         * @param y y-position where to scroll to
         * @returns whether scrolling was successful.
         */
        scroll_substring_to_point(
            start_offset: number,
            end_offset: number,
            coords: Atk.CoordType | null,
            x: number,
            y: number,
        ): boolean;
        /**
         * Sets the caret (cursor) position to the specified `offset`.
         *
         * In the case of rich-text content, this method should either grab focus
         * or move the sequential focus navigation starting point (if the application
         * supports this concept) as if the user had clicked on the new caret position.
         * Typically, this means that the target of this operation is the node containing
         * the new caret position or one of its ancestors. In other words, after this
         * method is called, if the user advances focus, it should move to the first
         * focusable node following the new caret position.
         *
         * Calling this method should also scroll the application viewport in a way
         * that matches the behavior of the application's typical caret motion or tab
         * navigation as closely as possible. This also means that if the application's
         * caret motion or focus navigation does not trigger a scroll operation, this
         * method should not trigger one either. If the application does not have a caret
         * motion or focus navigation operation, this method should try to scroll the new
         * caret position into view while minimizing unnecessary scroll motion.
         * @param offset the character offset of the new caret position
         * @returns `true` if successful, `false` otherwise.
         */
        set_caret_offset(offset: number): boolean;
        /**
         * Changes the start and end offset of the specified selection.
         * @param selection_num The selection number.  The selected regions are assigned numbers that correspond to how far the region is from the start of the text.  The selected region closest to the beginning of the text region is assigned the number 0, etc.  Note that adding, moving or deleting a selected region can change the numbering.
         * @param start_offset the new starting character offset of the selection
         * @param end_offset the new end position of (e.g. offset immediately past) the selection
         * @returns `true` if successful, `false` otherwise
         */
        set_selection(selection_num: number, start_offset: number, end_offset: number): boolean;
        /**
         * Adds a selection bounded by the specified offsets.
         * @param start_offset the starting character offset of the selected region
         * @param end_offset the offset of the first character after the selected region.
         * @virtual
         */
        vfunc_add_selection(start_offset: number, end_offset: number): boolean;
        /**
         * Get the ranges of text in the specified bounding box.
         * @param rect An AtkTextRectangle giving the dimensions of the bounding box.
         * @param coord_type Specify whether coordinates are relative to the screen or widget window.
         * @param x_clip_type Specify the horizontal clip type.
         * @param y_clip_type Specify the vertical clip type.
         * @virtual
         */
        vfunc_get_bounded_ranges(
            rect: Atk.TextRectangle,
            coord_type: Atk.CoordType,
            x_clip_type: Atk.TextClipType,
            y_clip_type: Atk.TextClipType,
        ): Atk.TextRange[];
        /**
         * Gets the offset of the position of the caret (cursor).
         * @virtual
         */
        vfunc_get_caret_offset(): number;
        /**
         * Gets the specified text.
         * @param offset a character offset within `text`
         * @virtual
         */
        vfunc_get_character_at_offset(offset: number): string;
        /**
         * Gets the character count.
         * @virtual
         */
        vfunc_get_character_count(): number;
        /**
         * If the extent can not be obtained (e.g. missing support), all of x, y, width,
         * height are set to -1.
         *
         * Get the bounding box containing the glyph representing the character at
         *     a particular text offset.
         * @param offset The offset of the text character for which bounding information is required.
         * @param coords specify whether coordinates are relative to the screen or widget window
         * @virtual
         */
        vfunc_get_character_extents(offset: number, coords: Atk.CoordType): [number, number, number, number];
        /**
         * Creates an {@link Atk.AttributeSet} which consists of the default values of
         * attributes for the text. See the enum AtkTextAttribute for types of text
         * attributes that can be returned. Note that other attributes may also be
         * returned.
         * @virtual
         */
        vfunc_get_default_attributes(): Atk.AttributeSet;
        /**
         * Gets the number of selected regions.
         * @virtual
         */
        vfunc_get_n_selections(): number;
        /**
         * Gets the offset of the character located at coordinates `x` and `y`. `x` and `y`
         * are interpreted as being relative to the screen or this widget's window
         * depending on `coords`.
         * @param x screen x-position of character
         * @param y screen y-position of character
         * @param coords specify whether coordinates are relative to the screen or widget window
         * @virtual
         */
        vfunc_get_offset_at_point(x: number, y: number, coords: Atk.CoordType): number;
        /**
         * Get the bounding box for text within the specified range.
         *
         * If the extents can not be obtained (e.g. or missing support), the rectangle
         * fields are set to -1.
         * @param start_offset The offset of the first text character for which boundary        information is required.
         * @param end_offset The offset of the text character after the last character        for which boundary information is required.
         * @param coord_type Specify whether coordinates are relative to the screen or widget window.
         * @virtual
         */
        vfunc_get_range_extents(start_offset: number, end_offset: number, coord_type: Atk.CoordType): Atk.TextRectangle;
        /**
         * Creates an {@link Atk.AttributeSet} which consists of the attributes explicitly
         * set at the position `offset` in the text. `start_offset` and `end_offset` are
         * set to the start and end of the range around `offset` where the attributes are
         * invariant. Note that `end_offset` is the offset of the first character
         * after the range.  See the enum AtkTextAttribute for types of text
         * attributes that can be returned. Note that other attributes may also be
         * returned.
         * @param offset the character offset at which to get the attributes, -1 means the offset of the character to be inserted at the caret location.
         * @virtual
         */
        vfunc_get_run_attributes(offset: number): [Atk.AttributeSet, number, number];
        /**
         * Gets the text from the specified selection.
         * @param selection_num The selection number.  The selected regions are assigned numbers that correspond to how far the region is from the start of the text.  The selected region closest to the beginning of the text region is assigned the number 0, etc.  Note that adding, moving or deleting a selected region can change the numbering.
         * @virtual
         */
        vfunc_get_selection(selection_num: number): [string, number, number];
        /**
         * Gets a portion of the text exposed through an {@link Atk.Text} according to a given `offset`
         * and a specific `granularity`, along with the start and end offsets defining the
         * boundaries of such a portion of text.
         *
         * If `granularity` is ATK_TEXT_GRANULARITY_CHAR the character at the
         * offset is returned.
         *
         * If `granularity` is ATK_TEXT_GRANULARITY_WORD the returned string
         * is from the word start at or before the offset to the word start after
         * the offset.
         *
         * The returned string will contain the word at the offset if the offset
         * is inside a word and will contain the word before the offset if the
         * offset is not inside a word.
         *
         * If `granularity` is ATK_TEXT_GRANULARITY_SENTENCE the returned string
         * is from the sentence start at or before the offset to the sentence
         * start after the offset.
         *
         * The returned string will contain the sentence at the offset if the offset
         * is inside a sentence and will contain the sentence before the offset
         * if the offset is not inside a sentence.
         *
         * If `granularity` is ATK_TEXT_GRANULARITY_LINE the returned string
         * is from the line start at or before the offset to the line
         * start after the offset.
         *
         * If `granularity` is ATK_TEXT_GRANULARITY_PARAGRAPH the returned string
         * is from the start of the paragraph at or before the offset to the start
         * of the following paragraph after the offset.
         * @param offset position
         * @param granularity An {@link Atk.TextGranularity}
         * @virtual
         */
        vfunc_get_string_at_offset(offset: number, granularity: Atk.TextGranularity): [string | null, number, number];
        /**
         * Gets the specified text.
         * @param start_offset a starting character offset within `text`
         * @param end_offset an ending character offset within `text`, or -1 for the end of the string.
         * @virtual
         */
        vfunc_get_text(start_offset: number, end_offset: number): string;
        /**
         * Gets the specified text.
         * @param offset position
         * @param boundary_type An {@link Atk.TextBoundary}
         * @virtual
         */
        vfunc_get_text_after_offset(offset: number, boundary_type: Atk.TextBoundary): [string, number, number];
        /**
         * Gets the specified text.
         *
         * If the boundary_type if ATK_TEXT_BOUNDARY_CHAR the character at the
         * offset is returned.
         *
         * If the boundary_type is ATK_TEXT_BOUNDARY_WORD_START the returned string
         * is from the word start at or before the offset to the word start after
         * the offset.
         *
         * The returned string will contain the word at the offset if the offset
         * is inside a word and will contain the word before the offset if the
         * offset is not inside a word.
         *
         * If the boundary type is ATK_TEXT_BOUNDARY_SENTENCE_START the returned
         * string is from the sentence start at or before the offset to the sentence
         * start after the offset.
         *
         * The returned string will contain the sentence at the offset if the offset
         * is inside a sentence and will contain the sentence before the offset
         * if the offset is not inside a sentence.
         *
         * If the boundary type is ATK_TEXT_BOUNDARY_LINE_START the returned
         * string is from the line start at or before the offset to the line
         * start after the offset.
         * @param offset position
         * @param boundary_type An {@link Atk.TextBoundary}
         * @virtual
         */
        vfunc_get_text_at_offset(offset: number, boundary_type: Atk.TextBoundary): [string, number, number];
        /**
         * Gets the specified text.
         * @param offset position
         * @param boundary_type An {@link Atk.TextBoundary}
         * @virtual
         */
        vfunc_get_text_before_offset(offset: number, boundary_type: Atk.TextBoundary): [string, number, number];
        /**
         * Removes the specified selection.
         * @param selection_num The selection number.  The selected regions are assigned numbers that correspond to how far the region is from the start of the text.  The selected region closest to the beginning of the text region is assigned the number 0, etc.  Note that adding, moving or deleting a selected region can change the numbering.
         * @virtual
         */
        vfunc_remove_selection(selection_num: number): boolean;
        /**
         * Makes a substring of `text` visible on the screen by scrolling all necessary parents.
         * @param start_offset start offset in the `text`
         * @param end_offset end offset in the `text`, or -1 for the end of the text.
         * @param type specify where the object should be made visible.
         * @virtual
         */
        vfunc_scroll_substring_to(start_offset: number, end_offset: number, type: Atk.ScrollType): boolean;
        /**
         * Move the top-left of a substring of `text` to a given position of the screen
         * by scrolling all necessary parents.
         * @param start_offset start offset in the `text`
         * @param end_offset end offset in the `text`, or -1 for the end of the text.
         * @param coords specify whether coordinates are relative to the screen or to the parent object.
         * @param x x-position where to scroll to
         * @param y y-position where to scroll to
         * @virtual
         */
        vfunc_scroll_substring_to_point(
            start_offset: number,
            end_offset: number,
            coords: Atk.CoordType,
            x: number,
            y: number,
        ): boolean;
        /**
         * Sets the caret (cursor) position to the specified `offset`.
         *
         * In the case of rich-text content, this method should either grab focus
         * or move the sequential focus navigation starting point (if the application
         * supports this concept) as if the user had clicked on the new caret position.
         * Typically, this means that the target of this operation is the node containing
         * the new caret position or one of its ancestors. In other words, after this
         * method is called, if the user advances focus, it should move to the first
         * focusable node following the new caret position.
         *
         * Calling this method should also scroll the application viewport in a way
         * that matches the behavior of the application's typical caret motion or tab
         * navigation as closely as possible. This also means that if the application's
         * caret motion or focus navigation does not trigger a scroll operation, this
         * method should not trigger one either. If the application does not have a caret
         * motion or focus navigation operation, this method should try to scroll the new
         * caret position into view while minimizing unnecessary scroll motion.
         * @param offset the character offset of the new caret position
         * @virtual
         */
        vfunc_set_caret_offset(offset: number): boolean;
        /**
         * Changes the start and end offset of the specified selection.
         * @param selection_num The selection number.  The selected regions are assigned numbers that correspond to how far the region is from the start of the text.  The selected region closest to the beginning of the text region is assigned the number 0, etc.  Note that adding, moving or deleting a selected region can change the numbering.
         * @param start_offset the new starting character offset of the selection
         * @param end_offset the new end position of (e.g. offset immediately past) the selection
         * @virtual
         */
        vfunc_set_selection(selection_num: number, start_offset: number, end_offset: number): boolean;
        /**
         * @virtual
         */
        vfunc_text_attributes_changed(): void;
        /**
         * @param location
         * @virtual
         */
        vfunc_text_caret_moved(location: number): void;
        /**
         * the signal handler which is executed when there is a
         *   text change. This virtual function is deprecated sice 2.9.4 and
         *   it should not be overriden.
         * @param position
         * @param length
         * @virtual
         */
        vfunc_text_changed(position: number, length: number): void;
        /**
         * @virtual
         */
        vfunc_text_selection_changed(): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace Texture {
        // Signal signatures
        interface SignalSignatures extends Actor.SignalSignatures {
            'notify::accessible-component-layer': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-component-mdi-zorder': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-description': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-help-text': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-hypertext-nlinks': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-id': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-name': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-parent': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-role': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-caption': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-caption-object': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-column-description': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-column-header': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-row-description': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-row-header': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-summary': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-value': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Actor.ConstructorProps, Atk.Action.ConstructorProps, Atk.Component.ConstructorProps {}
    }

    /**
     * The <structname>CallyTexture</structname> structure contains only
     * private data and should be accessed using the provided API
     * @gir-type Class
     * @since 1.4
     */
    class Texture extends Actor implements Atk.Action, Atk.Component {
        static $gtype: GObject.GType<Texture>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Texture.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Texture.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](actor: Clutter.Actor): Texture;

        // Signals

        /** @signal */
        connect<K extends keyof Texture.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Texture.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Texture.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Texture.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Texture.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Texture.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
        /**
         * Perform the specified action on the object.
         * @param i the action index corresponding to the action to be performed
         * @returns `true` if success, `false` otherwise
         */
        do_action(i: number): boolean;
        /**
         * Returns a description of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @returns a description string, or `null` if `action` does not implement this interface.
         */
        get_description(i: number): string | null;
        /**
         * @param args
         */
        // Conflicted with Atk.Object.get_description
        get_description(...args: never[]): any;
        /**
         * Gets the keybinding which can be used to activate this action, if one
         * exists. The string returned should contain localized, human-readable,
         * key sequences as they would appear when displayed on screen. It must
         * be in the format "mnemonic;sequence;shortcut".
         *
         * - The mnemonic key activates the object if it is presently enabled onscreen.
         *   This typically corresponds to the underlined letter within the widget.
         *   Example: "n" in a traditional "New..." menu item or the "a" in "Apply" for
         *   a button.
         * - The sequence is the full list of keys which invoke the action even if the
         *   relevant element is not currently shown on screen. For instance, for a menu
         *   item the sequence is the keybindings used to open the parent menus before
         *   invoking. The sequence string is colon-delimited. Example: "Alt+F:N" in a
         *   traditional "New..." menu item.
         * - The shortcut, if it exists, will invoke the same action without showing
         *   the component or its enclosing menus or dialogs. Example: "Ctrl+N" in a
         *   traditional "New..." menu item.
         *
         * Example: For a traditional "New..." menu item, the expected return value
         * would be: "N;Alt+F:N;Ctrl+N" for the English locale and "N;Alt+D:N;Strg+N"
         * for the German locale. If, hypothetically, this menu item lacked a mnemonic,
         * it would be represented by ";;Ctrl+N" and ";;Strg+N" respectively.
         * @param i the action index corresponding to the action to be performed
         * @returns the keybinding which can be used to activate this action, or `null` if there is no keybinding for this action.
         */
        get_keybinding(i: number): string | null;
        /**
         * Returns the localized name of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @returns a name string, or `null` if `action` does not implement this interface.
         */
        get_localized_name(i: number): string | null;
        /**
         * Gets the number of accessible actions available on the object.
         * If there are more than one, the first one is considered the
         * "default" action of the object.
         * @returns a the number of actions, or 0 if `action` does not implement this interface.
         */
        get_n_actions(): number;
        /**
         * Returns a non-localized string naming the specified action of the
         * object. This name is generally not descriptive of the end result
         * of the action, but instead names the 'interaction type' which the
         * object supports. By convention, the above strings should be used to
         * represent the actions which correspond to the common point-and-click
         * interaction techniques of the same name: i.e.
         * "click", "press", "release", "drag", "drop", "popup", etc.
         * The "popup" action should be used to pop up a context menu for the
         * object, if one exists.
         *
         * For technical reasons, some toolkits cannot guarantee that the
         * reported action is actually 'bound' to a nontrivial user event;
         * i.e. the result of some actions via `atk_action_do_action()` may be
         * NIL.
         * @param i the action index corresponding to the action to be performed
         * @returns a name string, or `null` if `action` does not implement this interface.
         */
        get_name(i: number): string | null;
        /**
         * @param args
         */
        // Conflicted with Atk.Object.get_name
        get_name(...args: never[]): any;
        /**
         * Sets a description of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @param desc the description to be assigned to this action
         * @returns a gboolean representing if the description was successfully set;
         */
        set_description(i: number, desc: string): boolean;
        /**
         * @param args
         */
        // Conflicted with Atk.Object.set_description
        set_description(...args: never[]): any;
        /**
         * Perform the specified action on the object.
         * @param i the action index corresponding to the action to be performed
         * @virtual
         */
        vfunc_do_action(i: number): boolean;
        /**
         * Returns a description of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @virtual
         */
        vfunc_get_description(i: number): string | null;
        /**
         * @param args
         * @virtual
         */
        // Conflicted with Atk.Object.vfunc_get_description
        vfunc_get_description(...args: never[]): any;
        /**
         * Gets the keybinding which can be used to activate this action, if one
         * exists. The string returned should contain localized, human-readable,
         * key sequences as they would appear when displayed on screen. It must
         * be in the format "mnemonic;sequence;shortcut".
         *
         * - The mnemonic key activates the object if it is presently enabled onscreen.
         *   This typically corresponds to the underlined letter within the widget.
         *   Example: "n" in a traditional "New..." menu item or the "a" in "Apply" for
         *   a button.
         * - The sequence is the full list of keys which invoke the action even if the
         *   relevant element is not currently shown on screen. For instance, for a menu
         *   item the sequence is the keybindings used to open the parent menus before
         *   invoking. The sequence string is colon-delimited. Example: "Alt+F:N" in a
         *   traditional "New..." menu item.
         * - The shortcut, if it exists, will invoke the same action without showing
         *   the component or its enclosing menus or dialogs. Example: "Ctrl+N" in a
         *   traditional "New..." menu item.
         *
         * Example: For a traditional "New..." menu item, the expected return value
         * would be: "N;Alt+F:N;Ctrl+N" for the English locale and "N;Alt+D:N;Strg+N"
         * for the German locale. If, hypothetically, this menu item lacked a mnemonic,
         * it would be represented by ";;Ctrl+N" and ";;Strg+N" respectively.
         * @param i the action index corresponding to the action to be performed
         * @virtual
         */
        vfunc_get_keybinding(i: number): string | null;
        /**
         * Returns the localized name of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @virtual
         */
        vfunc_get_localized_name(i: number): string | null;
        /**
         * Gets the number of accessible actions available on the object.
         * If there are more than one, the first one is considered the
         * "default" action of the object.
         * @virtual
         */
        vfunc_get_n_actions(): number;
        /**
         * Returns a non-localized string naming the specified action of the
         * object. This name is generally not descriptive of the end result
         * of the action, but instead names the 'interaction type' which the
         * object supports. By convention, the above strings should be used to
         * represent the actions which correspond to the common point-and-click
         * interaction techniques of the same name: i.e.
         * "click", "press", "release", "drag", "drop", "popup", etc.
         * The "popup" action should be used to pop up a context menu for the
         * object, if one exists.
         *
         * For technical reasons, some toolkits cannot guarantee that the
         * reported action is actually 'bound' to a nontrivial user event;
         * i.e. the result of some actions via `atk_action_do_action()` may be
         * NIL.
         * @param i the action index corresponding to the action to be performed
         * @virtual
         */
        vfunc_get_name(i: number): string | null;
        /**
         * @param args
         * @virtual
         */
        // Conflicted with Atk.Object.vfunc_get_name
        vfunc_get_name(...args: never[]): any;
        /**
         * Sets a description of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @param desc the description to be assigned to this action
         * @virtual
         */
        vfunc_set_description(i: number, desc: string): boolean;
        /**
         * @param args
         * @virtual
         */
        // Conflicted with Atk.Object.vfunc_set_description
        vfunc_set_description(...args: never[]): any;
        /**
         * Checks whether the specified point is within the extent of the `component`.
         *
         * Toolkit implementor note: ATK provides a default implementation for
         * this virtual method. In general there are little reason to
         * re-implement it.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @returns `true` or `false` indicating whether the specified point is within the extent of the `component` or not
         */
        contains(x: number, y: number, coord_type: Atk.CoordType | null): boolean;
        /**
         * Returns the alpha value (i.e. the opacity) for this
         * `component`, on a scale from 0 (fully transparent) to 1.0
         * (fully opaque).
         * @returns An alpha value from 0 to 1.0, inclusive.
         */
        get_alpha(): number;
        /**
         * Gets the rectangle which gives the extent of the `component`.
         *
         * If the extent can not be obtained (e.g. a non-embedded plug or missing
         * support), all of x, y, width, height are set to -1.
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         */
        get_extents(coord_type: Atk.CoordType | null): [number, number, number, number];
        /**
         * Gets the layer of the component.
         * @returns an {@link Atk.Layer} which is the layer of the component
         */
        get_layer(): Atk.Layer;
        /**
         * Gets the zorder of the component. The value G_MININT will be returned
         * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
         * @returns a gint which is the zorder of the component, i.e. the depth at which the component is shown in relation to other components in the same container.
         */
        get_mdi_zorder(): number;
        /**
         * Gets the position of `component` in the form of
         * a point specifying `component`'s top-left corner.
         *
         * If the position can not be obtained (e.g. a non-embedded plug or missing
         * support), x and y are set to -1.
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         */
        get_position(coord_type: Atk.CoordType | null): [number, number];
        /**
         * Gets the size of the `component` in terms of width and height.
         *
         * If the size can not be obtained (e.g. a non-embedded plug or missing
         * support), width and height are set to -1.
         */
        get_size(): [number, number];
        /**
         * Grabs focus for this `component`.
         * @returns `true` if successful, `false` otherwise.
         */
        grab_focus(): boolean;
        /**
         * Gets a reference to the accessible child, if one exists, at the
         * coordinate point specified by `x` and `y`.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @returns a reference to the accessible child, if one exists
         */
        ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType | null): Atk.Object | null;
        /**
         * Remove the handler specified by `handler_id` from the list of
         * functions to be executed when this object receives focus events
         * (in or out).
         * @param handler_id the handler id of the focus handler to be removed from `component`
         */
        remove_focus_handler(handler_id: number): void;
        /**
         * Makes `component` visible on the screen by scrolling all necessary parents.
         *
         * Contrary to atk_component_set_position, this does not actually move
         * `component` in its parent, this only makes the parents scroll so that the
         * object shows up on the screen, given its current position within the parents.
         * @param type specify where the object should be made visible.
         * @returns whether scrolling was successful.
         */
        scroll_to(type: Atk.ScrollType | null): boolean;
        /**
         * Move the top-left of `component` to a given position of the screen by
         * scrolling all necessary parents.
         * @param coords specify whether coordinates are relative to the screen or to the parent object.
         * @param x x-position where to scroll to
         * @param y y-position where to scroll to
         * @returns whether scrolling was successful.
         */
        scroll_to_point(coords: Atk.CoordType | null, x: number, y: number): boolean;
        /**
         * Sets the extents of `component`.
         * @param x x coordinate
         * @param y y coordinate
         * @param width width to set for `component`
         * @param height height to set for `component`
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @returns `true` or `false` whether the extents were set or not
         */
        set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType | null): boolean;
        /**
         * Sets the position of `component`.
         *
         * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
         * this just moves `component` in its parent.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the component's top level window
         * @returns `true` or `false` whether or not the position was set or not
         */
        set_position(x: number, y: number, coord_type: Atk.CoordType | null): boolean;
        /**
         * Set the size of the `component` in terms of width and height.
         * @param width width to set for `component`
         * @param height height to set for `component`
         * @returns `true` or `false` whether the size was set or not
         */
        set_size(width: number, height: number): boolean;
        /**
         * @param bounds
         * @virtual
         */
        vfunc_bounds_changed(bounds: Atk.Rectangle): void;
        /**
         * Checks whether the specified point is within the extent of the `component`.
         *
         * Toolkit implementor note: ATK provides a default implementation for
         * this virtual method. In general there are little reason to
         * re-implement it.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @virtual
         */
        vfunc_contains(x: number, y: number, coord_type: Atk.CoordType): boolean;
        /**
         * Returns the alpha value (i.e. the opacity) for this
         * `component`, on a scale from 0 (fully transparent) to 1.0
         * (fully opaque).
         * @virtual
         */
        vfunc_get_alpha(): number;
        /**
         * Gets the rectangle which gives the extent of the `component`.
         *
         * If the extent can not be obtained (e.g. a non-embedded plug or missing
         * support), all of x, y, width, height are set to -1.
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @virtual
         */
        vfunc_get_extents(coord_type: Atk.CoordType): [number, number, number, number];
        /**
         * Gets the layer of the component.
         * @virtual
         */
        vfunc_get_layer(): Atk.Layer;
        /**
         * Gets the zorder of the component. The value G_MININT will be returned
         * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
         * @virtual
         */
        vfunc_get_mdi_zorder(): number;
        /**
         * Gets the position of `component` in the form of
         * a point specifying `component`'s top-left corner.
         *
         * If the position can not be obtained (e.g. a non-embedded plug or missing
         * support), x and y are set to -1.
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @virtual
         */
        vfunc_get_position(coord_type: Atk.CoordType): [number, number];
        /**
         * Gets the size of the `component` in terms of width and height.
         *
         * If the size can not be obtained (e.g. a non-embedded plug or missing
         * support), width and height are set to -1.
         * @virtual
         */
        vfunc_get_size(): [number, number];
        /**
         * Grabs focus for this `component`.
         * @virtual
         */
        vfunc_grab_focus(): boolean;
        /**
         * Gets a reference to the accessible child, if one exists, at the
         * coordinate point specified by `x` and `y`.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @virtual
         */
        vfunc_ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null;
        /**
         * Remove the handler specified by `handler_id` from the list of
         * functions to be executed when this object receives focus events
         * (in or out).
         * @param handler_id the handler id of the focus handler to be removed from `component`
         * @virtual
         */
        vfunc_remove_focus_handler(handler_id: number): void;
        /**
         * Makes `component` visible on the screen by scrolling all necessary parents.
         *
         * Contrary to atk_component_set_position, this does not actually move
         * `component` in its parent, this only makes the parents scroll so that the
         * object shows up on the screen, given its current position within the parents.
         * @param type specify where the object should be made visible.
         * @virtual
         */
        vfunc_scroll_to(type: Atk.ScrollType): boolean;
        /**
         * Move the top-left of `component` to a given position of the screen by
         * scrolling all necessary parents.
         * @param coords specify whether coordinates are relative to the screen or to the parent object.
         * @param x x-position where to scroll to
         * @param y y-position where to scroll to
         * @virtual
         */
        vfunc_scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean;
        /**
         * Sets the extents of `component`.
         * @param x x coordinate
         * @param y y coordinate
         * @param width width to set for `component`
         * @param height height to set for `component`
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @virtual
         */
        vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean;
        /**
         * Sets the position of `component`.
         *
         * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
         * this just moves `component` in its parent.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the component's top level window
         * @virtual
         */
        vfunc_set_position(x: number, y: number, coord_type: Atk.CoordType): boolean;
        /**
         * Set the size of the `component` in terms of width and height.
         * @param width width to set for `component`
         * @param height height to set for `component`
         * @virtual
         */
        vfunc_set_size(width: number, height: number): boolean;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace Util {
        // Signal signatures
        interface SignalSignatures extends Atk.Util.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Atk.Util.ConstructorProps {}
    }

    /**
     * The <structname>CallyUtil</structname> structure contains only
     * private data and should be accessed using the provided API
     * @gir-type Class
     * @since 1.4
     */
    class Util extends Atk.Util {
        static $gtype: GObject.GType<Util>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Util.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Util.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Util.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Util.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Util.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Util.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Util.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Util.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    /**
     * @gir-type Alias
     */
    type ActorClass = typeof Actor;
    /**
     * @gir-type Struct
     */
    abstract class ActorPrivate {
        static $gtype: GObject.GType<ActorPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type CloneClass = typeof Clone;
    /**
     * @gir-type Struct
     */
    abstract class ClonePrivate {
        static $gtype: GObject.GType<ClonePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type GroupClass = typeof Group;
    /**
     * @gir-type Struct
     */
    abstract class GroupPrivate {
        static $gtype: GObject.GType<GroupPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type RectangleClass = typeof Rectangle;
    /**
     * @gir-type Struct
     */
    abstract class RectanglePrivate {
        static $gtype: GObject.GType<RectanglePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type RootClass = typeof Root;
    /**
     * @gir-type Struct
     */
    abstract class RootPrivate {
        static $gtype: GObject.GType<RootPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type StageClass = typeof Stage;
    /**
     * @gir-type Struct
     */
    abstract class StagePrivate {
        static $gtype: GObject.GType<StagePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type TextClass = typeof Text;
    /**
     * @gir-type Struct
     */
    abstract class TextPrivate {
        static $gtype: GObject.GType<TextPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type TextureClass = typeof Texture;
    /**
     * @gir-type Struct
     */
    abstract class TexturePrivate {
        static $gtype: GObject.GType<TexturePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type UtilClass = typeof Util;
    /**
     * @gir-type Struct
     */
    abstract class UtilPrivate {
        static $gtype: GObject.GType<UtilPrivate>;
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

export default Cally;

// END
