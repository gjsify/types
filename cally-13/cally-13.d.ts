
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
import type Mtk from '@girs/mtk-13';
import type cairo from 'cairo';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Graphene from '@girs/graphene-1.0';
import type CoglPango from '@girs/coglpango-13';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Cogl from '@girs/cogl-13';
import type GL from '@girs/gl-1.0';
import type Clutter from '@girs/clutter-13';
import type Json from '@girs/json-1.0';
import type Atk from '@girs/atk-1.0';

export namespace Cally {

    /**
     * Cally-13
     */


    /**
     * Initializes the accessibility support.
     * @returns `true` if accessibility support has been correctly initialized.
     */
    function accessibility_init(): boolean;

    /**
     * Returns if the accessibility support using cally is enabled.
     * @returns `true` if accessibility support has been correctly initialized.
     */
    function get_cally_initialized(): boolean;

    /**
     * @param stage 
     * @param key 
     */
    function snoop_key_event(stage: Clutter.Stage, key: Clutter.KeyEvent): boolean;

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
            "notify::accessible-component-layer": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-component-mdi-zorder": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-description": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-help-text": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-hypertext-nlinks": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-id": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-name": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-parent": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-role": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-caption": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-caption-object": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-column-description": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-column-header": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-row-description": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-row-header": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-summary": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-value": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Atk.GObjectAccessible.ConstructorProps, Atk.Action.ConstructorProps, Atk.Component.ConstructorProps {

        }
    }

    /**
     * Implementation of the ATK interfaces for {@link Clutter.Actor}
     * 
     * {@link Cally.Actor} implements the required ATK interfaces of {@link Clutter.Actor}
     * exposing the common elements on each actor (position, extents, etc).
     * @gir-type Class
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

        static ["new"](actor: Clutter.Actor): Actor;

        // Signals
        /** @signal */
        connect<K extends keyof Actor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Actor.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Actor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Actor.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Actor.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Actor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
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
        add_action(action_name: string, action_description: string, action_keybinding: string, callback: ActionCallback): number;

        /**
         * Removes a action, using the `action_id` returned by {@link Actor.add_action}
         * @param action_id the action id
         * @returns `true` if the operation was successful, `false` otherwise
         */
        remove_action(action_id: number): boolean;

        /**
         * Removes an action, using the `action_name` used when the action was added
         * with {@link Actor.add_action}
         * @param action_name the name of the action to remove
         * @returns `true` if the operation was successful, `false` otherwise
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
        get_description(i: number): (string | null);

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
        get_keybinding(i: number): (string | null);

        /**
         * Returns the localized name of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @returns a name string, or `null` if `action` does not implement this interface.
         */
        get_localized_name(i: number): (string | null);

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
        get_name(i: number): (string | null);

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
        vfunc_get_description(i: number): (string | null);

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
        vfunc_get_keybinding(i: number): (string | null);

        /**
         * Returns the localized name of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @virtual
         */
        vfunc_get_localized_name(i: number): (string | null);

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
        vfunc_get_name(i: number): (string | null);

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
        contains(x: number, y: number, coord_type: Atk.CoordType): boolean;

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
        get_extents(coord_type: Atk.CoordType): [number, number, number, number];

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
        get_position(coord_type: Atk.CoordType): [number, number];

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
        ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): (Atk.Object | null);

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
        scroll_to(type: Atk.ScrollType): boolean;

        /**
         * Move the top-left of `component` to a given position of the screen by
         * scrolling all necessary parents.
         * @param coords specify whether coordinates are relative to the screen or to the parent object.
         * @param x x-position where to scroll to
         * @param y y-position where to scroll to
         * @returns whether scrolling was successful.
         */
        scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean;

        /**
         * Sets the extents of `component`.
         * @param x x coordinate
         * @param y y coordinate
         * @param width width to set for `component`
         * @param height height to set for `component`
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @returns `true` or `false` whether the extents were set or not
         */
        set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean;

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
        set_position(x: number, y: number, coord_type: Atk.CoordType): boolean;

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
        vfunc_ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): (Atk.Object | null);

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
    }


    namespace Clone {
        // Signal signatures
        interface SignalSignatures extends Actor.SignalSignatures {
            "notify::accessible-component-layer": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-component-mdi-zorder": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-description": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-help-text": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-hypertext-nlinks": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-id": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-name": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-parent": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-role": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-caption": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-caption-object": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-column-description": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-column-header": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-row-description": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-row-header": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-summary": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-value": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Actor.ConstructorProps, Atk.Action.ConstructorProps, Atk.Component.ConstructorProps {

        }
    }

    /**
     * Implementation of the ATK interfaces for a {@link Clutter.Clone}
     * 
     * {@link Cally.Clone} implements the required ATK interfaces of {@link Clutter.Clone}
     * 
     * In particular it sets a proper role for the clone, as just a image,
     * as it is the sanest and simplest approach.
     * @gir-type Class
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

        static ["new"](actor: Clutter.Actor): Clone;

        // Signals
        /** @signal */
        connect<K extends keyof Clone.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Clone.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Clone.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Clone.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Clone.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Clone.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
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
        get_description(i: number): (string | null);

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
        get_keybinding(i: number): (string | null);

        /**
         * Returns the localized name of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @returns a name string, or `null` if `action` does not implement this interface.
         */
        get_localized_name(i: number): (string | null);

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
        get_name(i: number): (string | null);

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
        vfunc_get_description(i: number): (string | null);

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
        vfunc_get_keybinding(i: number): (string | null);

        /**
         * Returns the localized name of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @virtual
         */
        vfunc_get_localized_name(i: number): (string | null);

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
        vfunc_get_name(i: number): (string | null);

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
        contains(x: number, y: number, coord_type: Atk.CoordType): boolean;

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
        get_extents(coord_type: Atk.CoordType): [number, number, number, number];

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
        get_position(coord_type: Atk.CoordType): [number, number];

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
        ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): (Atk.Object | null);

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
        scroll_to(type: Atk.ScrollType): boolean;

        /**
         * Move the top-left of `component` to a given position of the screen by
         * scrolling all necessary parents.
         * @param coords specify whether coordinates are relative to the screen or to the parent object.
         * @param x x-position where to scroll to
         * @param y y-position where to scroll to
         * @returns whether scrolling was successful.
         */
        scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean;

        /**
         * Sets the extents of `component`.
         * @param x x coordinate
         * @param y y coordinate
         * @param width width to set for `component`
         * @param height height to set for `component`
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @returns `true` or `false` whether the extents were set or not
         */
        set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean;

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
        set_position(x: number, y: number, coord_type: Atk.CoordType): boolean;

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
        vfunc_ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): (Atk.Object | null);

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
    }


    namespace Root {
        // Signal signatures
        interface SignalSignatures extends Atk.GObjectAccessible.SignalSignatures {
            "notify::accessible-component-layer": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-component-mdi-zorder": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-description": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-help-text": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-hypertext-nlinks": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-id": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-name": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-parent": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-role": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-caption": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-caption-object": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-column-description": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-column-header": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-row-description": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-row-header": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-summary": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-value": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Atk.GObjectAccessible.ConstructorProps {

        }
    }

    /**
     * Root object for the Cally toolkit
     * 
     * {@link Cally.Root} is the root object of the accessibility tree-like
     * hierarchy, exposing the application level.
     * 
     * Somewhat equivalent to `GailTopLevel`. We consider that this class
     * expose the a11y information of the {@link Clutter.StageManager}, as the
     * children of this object are the different {@link Clutter.Stage} managed (so
     * the {@link GObject.Object} used in the `atk_object_initialize()` is the
     * {@link Clutter.StageManager}).
     * @gir-type Class
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

        static ["new"](): Root;

        // Signals
        /** @signal */
        connect<K extends keyof Root.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Root.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Root.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Root.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Root.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Root.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace Stage {
        // Signal signatures
        interface SignalSignatures extends Actor.SignalSignatures {
            "notify::accessible-component-layer": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-component-mdi-zorder": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-description": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-help-text": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-hypertext-nlinks": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-id": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-name": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-parent": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-role": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-caption": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-caption-object": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-column-description": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-column-header": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-row-description": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-row-header": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-summary": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-value": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Actor.ConstructorProps, Atk.Action.ConstructorProps, Atk.Component.ConstructorProps, Atk.Window.ConstructorProps {

        }
    }

    /**
     * Implementation of the ATK interfaces for a {@link Clutter.Stage}
     * 
     * {@link Cally.Stage} implements the required ATK interfaces for {@link Clutter.Stage}
     * 
     * Some implementation details: at this moment {@link Cally.Stage} is used as
     * the most similar Window object in this toolkit (ie: emitting window
     * related signals), although the real purpose of {@link Clutter.Stage} is
     * being a canvas. Anyway, this is required for applications using
     * just clutter, or directly {@link Clutter.Stage}
     * @gir-type Class
     */
    class Stage extends Actor implements Atk.Action, Atk.Component, Atk.Window {
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

        static ["new"](actor: Clutter.Actor): Stage;

        // Signals
        /** @signal */
        connect<K extends keyof Stage.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Stage.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Stage.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Stage.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Stage.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Stage.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
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
        get_description(i: number): (string | null);

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
        get_keybinding(i: number): (string | null);

        /**
         * Returns the localized name of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @returns a name string, or `null` if `action` does not implement this interface.
         */
        get_localized_name(i: number): (string | null);

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
        get_name(i: number): (string | null);

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
        vfunc_get_description(i: number): (string | null);

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
        vfunc_get_keybinding(i: number): (string | null);

        /**
         * Returns the localized name of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @virtual
         */
        vfunc_get_localized_name(i: number): (string | null);

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
        vfunc_get_name(i: number): (string | null);

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
        contains(x: number, y: number, coord_type: Atk.CoordType): boolean;

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
        get_extents(coord_type: Atk.CoordType): [number, number, number, number];

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
        get_position(coord_type: Atk.CoordType): [number, number];

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
        ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): (Atk.Object | null);

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
        scroll_to(type: Atk.ScrollType): boolean;

        /**
         * Move the top-left of `component` to a given position of the screen by
         * scrolling all necessary parents.
         * @param coords specify whether coordinates are relative to the screen or to the parent object.
         * @param x x-position where to scroll to
         * @param y y-position where to scroll to
         * @returns whether scrolling was successful.
         */
        scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean;

        /**
         * Sets the extents of `component`.
         * @param x x coordinate
         * @param y y coordinate
         * @param width width to set for `component`
         * @param height height to set for `component`
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @returns `true` or `false` whether the extents were set or not
         */
        set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean;

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
        set_position(x: number, y: number, coord_type: Atk.CoordType): boolean;

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
        vfunc_ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): (Atk.Object | null);

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
    }


    namespace Text {
        // Signal signatures
        interface SignalSignatures extends Actor.SignalSignatures {
            "notify::accessible-component-layer": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-component-mdi-zorder": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-description": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-help-text": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-hypertext-nlinks": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-id": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-name": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-parent": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-role": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-caption": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-caption-object": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-column-description": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-column-header": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-row-description": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-row-header": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-summary": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-value": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Actor.ConstructorProps, Atk.Action.ConstructorProps, Atk.Component.ConstructorProps, Atk.EditableText.ConstructorProps, Atk.Text.ConstructorProps {

        }
    }

    /**
     * Implementation of the ATK interfaces for a {@link Clutter.Text}
     * 
     * {@link Cally.Text} implements the required ATK interfaces of
     * {@link Clutter.Text}, {@link Atk.Text} and {@link Atk.EditableText}
     * @gir-type Class
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

        static ["new"](actor: Clutter.Actor): Text;

        // Signals
        /** @signal */
        connect<K extends keyof Text.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Text.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Text.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Text.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Text.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Text.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
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
        get_description(i: number): (string | null);

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
        get_keybinding(i: number): (string | null);

        /**
         * Returns the localized name of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @returns a name string, or `null` if `action` does not implement this interface.
         */
        get_localized_name(i: number): (string | null);

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
        get_name(i: number): (string | null);

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
        vfunc_get_description(i: number): (string | null);

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
        vfunc_get_keybinding(i: number): (string | null);

        /**
         * Returns the localized name of the specified action of the object.
         * @param i the action index corresponding to the action to be performed
         * @virtual
         */
        vfunc_get_localized_name(i: number): (string | null);

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
        vfunc_get_name(i: number): (string | null);

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
        contains(x: number, y: number, coord_type: Atk.CoordType): boolean;

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
        get_extents(coord_type: Atk.CoordType): [number, number, number, number];

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
        get_position(coord_type: Atk.CoordType): [number, number];

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
        ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): (Atk.Object | null);

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
        scroll_to(type: Atk.ScrollType): boolean;

        /**
         * Move the top-left of `component` to a given position of the screen by
         * scrolling all necessary parents.
         * @param coords specify whether coordinates are relative to the screen or to the parent object.
         * @param x x-position where to scroll to
         * @param y y-position where to scroll to
         * @returns whether scrolling was successful.
         */
        scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean;

        /**
         * Sets the extents of `component`.
         * @param x x coordinate
         * @param y y coordinate
         * @param width width to set for `component`
         * @param height height to set for `component`
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @returns `true` or `false` whether the extents were set or not
         */
        set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean;

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
        set_position(x: number, y: number, coord_type: Atk.CoordType): boolean;

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
        vfunc_ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): (Atk.Object | null);

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
        get_bounded_ranges(rect: Atk.TextRectangle, coord_type: Atk.CoordType, x_clip_type: Atk.TextClipType, y_clip_type: Atk.TextClipType): Atk.TextRange[];

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
        get_character_extents(offset: number, coords: Atk.CoordType): [number, number, number, number];

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
        get_offset_at_point(x: number, y: number, coords: Atk.CoordType): number;

        /**
         * Get the bounding box for text within the specified range.
         * 
         * If the extents can not be obtained (e.g. or missing support), the rectangle
         * fields are set to -1.
         * @param start_offset The offset of the first text character for which boundary        information is required.
         * @param end_offset The offset of the text character after the last character        for which boundary information is required.
         * @param coord_type Specify whether coordinates are relative to the screen or widget window.
         */
        get_range_extents(start_offset: number, end_offset: number, coord_type: Atk.CoordType): Atk.TextRectangle;

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
        get_string_at_offset(offset: number, granularity: Atk.TextGranularity): [(string | null), number, number];

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
        get_text_after_offset(offset: number, boundary_type: Atk.TextBoundary): [string, number, number];

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
        get_text_at_offset(offset: number, boundary_type: Atk.TextBoundary): [string, number, number];

        /**
         * Gets the specified text.
         * @param offset position
         * @param boundary_type An {@link Atk.TextBoundary}
         * @returns a newly allocated string containing the text before `offset` bounded          by the specified `boundary_type`. Use `g_free()` to free the returned          string.
         */
        get_text_before_offset(offset: number, boundary_type: Atk.TextBoundary): [string, number, number];

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
        scroll_substring_to(start_offset: number, end_offset: number, type: Atk.ScrollType): boolean;

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
        scroll_substring_to_point(start_offset: number, end_offset: number, coords: Atk.CoordType, x: number, y: number): boolean;

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
        vfunc_get_bounded_ranges(rect: Atk.TextRectangle, coord_type: Atk.CoordType, x_clip_type: Atk.TextClipType, y_clip_type: Atk.TextClipType): Atk.TextRange[];

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
        vfunc_get_string_at_offset(offset: number, granularity: Atk.TextGranularity): [(string | null), number, number];

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
        vfunc_scroll_substring_to_point(start_offset: number, end_offset: number, coords: Atk.CoordType, x: number, y: number): boolean;

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
    }


    namespace Util {
        // Signal signatures
        interface SignalSignatures extends Atk.Util.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends Atk.Util.ConstructorProps {

        }
    }

    /**
     * {@link Atk.Util} implementation
     * 
     * {@link Cally.Util} implements {@link Atk.Util} abstract methods. Although it
     * includes the name "Util" it is in fact one of the most important
     * interfaces to be implemented in any ATK toolkit implementation.
     * 
     * For instance, it defines `atk_get_root()`, the method that returns
     * the root object in the hierarchy. Without it, you don't have
     * available any accessible object.
     * @gir-type Class
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
        connect<K extends keyof Util.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Util.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Util.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Util.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Util.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Util.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
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
