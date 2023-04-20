
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gjs
 */
/**
 * Cally-12
 */

import type CoglPango from '@girs/coglpango-12';
import type PangoCairo from '@girs/pangocairo-1.0';
import type cairo from '@girs/cairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Gio from '@girs/gio-2.0';
import type Cogl from '@girs/cogl-12';
import type Graphene from '@girs/graphene-1.0';
import type GL from '@girs/gl-1.0';
import type Clutter from '@girs/clutter-12';
import type Json from '@girs/json-1.0';
import type Atk from '@girs/atk-1.0';

export namespace Cally {

/**
 * Initializes the accessibility support.
 * @returns %TRUE if accessibility support has been correctly initialized.
 */
function accessibilityInit(): boolean
/**
 * Returns if the accessibility support using cally is enabled.
 * @returns %TRUE if accessibility support has been correctly initialized.
 */
function getCallyInitialized(): boolean
function snoopKeyEvent(key: Clutter.KeyEvent): boolean
/**
 * Action function, to be used on #AtkAction implementations as
 * an individual action.
 * 
 * Unlike #CallyActionFunc, this function uses the `user_data`
 * argument passed to [method`Actor`.add_action_full].
 * @callback 
 * @param callyActor a #CallyActor
 */
interface ActionCallback {
    (callyActor: Actor): void
}
/**
 * Action function, to be used on #AtkAction implementations as a individual
 * action
 * @callback 
 * @param callyActor a #CallyActor
 */
interface ActionFunc {
    (callyActor: Actor): void
}
module Actor {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.Action.ConstructorProperties, Atk.Component.ConstructorProperties, Atk.GObjectAccessible.ConstructorProperties {
    }

}

interface Actor extends Atk.Action, Atk.Component {

    // Own properties of Cally-12.Cally.Actor

    __gtype__: number

    // Conflicting properties

    parent: Atk.Object & GObject.Object & GObject.Object

    // Owm methods of Cally-12.Cally.Actor

    /**
     * Adds a new action to be accessed with the #AtkAction interface.
     * @param actionName the action name
     * @param actionDescription the action description
     * @param actionKeybinding the action keybinding
     * @param callback the callback of the action
     * @returns added action id, or -1 if failure
     */
    addAction(actionName: string | null, actionDescription: string | null, actionKeybinding: string | null, callback: ActionCallback): number
    /**
     * Removes a action, using the `action_id` returned by [method`Actor`.add_action]
     * @param actionId the action id
     * @returns %TRUE if the operation was successful, %FALSE otherwise
     */
    removeAction(actionId: number): boolean
    /**
     * Removes an action, using the `action_name` used when the action was added
     * with [method`Actor`.add_action]
     * @param actionName the name of the action to remove
     * @returns %TRUE if the operation was successful, %FALSE otherwise
     */
    removeActionByName(actionName: string | null): boolean

    // Conflicting methods

    /**
     * Returns a description of the specified action of the object.
     * @virtual 
     * @param i the action index corresponding to the action to be performed
     * @returns a description string, or %NULL if @action does not implement this interface.
     */
    getDescription(i: number): string | null
    /**
     * Gets the accessible description of the accessible.
     * @virtual 
     * @returns a character string representing the accessible description of the accessible.
     */
    getDescription(): string | null
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
     * i.e. the result of some actions via atk_action_do_action() may be
     * NIL.
     * @virtual 
     * @param i the action index corresponding to the action to be performed
     * @returns a name string, or %NULL if @action does not implement this interface.
     */
    getName(i: number): string | null
    /**
     * Gets the accessible name of the accessible.
     * @virtual 
     * @returns a character string representing the accessible name of the object.
     */
    getName(): string | null
    /**
     * Sets a description of the specified action of the object.
     * @virtual 
     * @param i the action index corresponding to the action to be performed
     * @param desc the description to be assigned to this action
     * @returns a gboolean representing if the description was successfully set;
     */
    setDescription(i: number, desc: string | null): boolean
    /**
     * Sets the accessible description of the accessible. You can't set
     * the description to NULL. This is reserved for the initial value. In
     * this aspect NULL is similar to ATK_ROLE_UNKNOWN. If you want to set
     * the name to a empty value you can use "".
     * @virtual 
     * @param description a character string to be set as the accessible description
     */
    setDescription(description: string | null): void
    /**
     * Gets the layer of the component.
     * @virtual 
     * @returns an #AtkLayer which is the layer of the component
     */
    getLayer(): Atk.Layer
    /**
     * Gets the layer of the accessible.
     * @virtual 
     * @returns an #AtkLayer which is the layer of the accessible
     */
    getLayer(): Atk.Layer
    /**
     * Gets the zorder of the component. The value G_MININT will be returned
     * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
     * @virtual 
     * @returns a gint which is the zorder of the component, i.e. the depth at which the component is shown in relation to other components in the same container.
     */
    getMdiZorder(): number
    /**
     * Gets the zorder of the accessible. The value G_MININT will be returned
     * if the layer of the accessible is not ATK_LAYER_MDI.
     * @virtual 
     * @returns a gint which is the zorder of the accessible, i.e. the depth at which the component is shown in relation to other components in the same container.
     */
    getMdiZorder(): number

    // Class property signals of Cally-12.Cally.Actor

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-component-layer", ...args: any[]): void
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-component-mdi-zorder", ...args: any[]): void
    connect(sigName: "notify::accessible-description", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-description", ...args: any[]): void
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-hypertext-nlinks", ...args: any[]): void
    connect(sigName: "notify::accessible-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-name", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-caption", ...args: any[]): void
    connect(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-caption-object", ...args: any[]): void
    connect(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-column-description", ...args: any[]): void
    connect(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-column-header", ...args: any[]): void
    connect(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-row-description", ...args: any[]): void
    connect(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-row-header", ...args: any[]): void
    connect(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-summary", ...args: any[]): void
    connect(sigName: "notify::accessible-value", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Implementation of the ATK interfaces for [class`Clutter`.Actor]
 * 
 * #CallyActor implements the required ATK interfaces of [class`Clutter`.Actor]
 * exposing the common elements on each actor (position, extents, etc).
 * @class 
 */
class Actor extends Atk.GObjectAccessible {

    // Own properties of Cally-12.Cally.Actor

    static name: string

    // Constructors of Cally-12.Cally.Actor

    constructor(config?: Actor.ConstructorProperties) 
    /**
     * Creates a new #CallyActor for the given `actor`
     * @constructor 
     * @param actor a #ClutterActor
     * @returns the newly created #AtkObject
     */
    constructor(actor: Clutter.Actor) 
    /**
     * Creates a new #CallyActor for the given `actor`
     * @constructor 
     * @param actor a #ClutterActor
     * @returns the newly created #AtkObject
     */
    static new(actor: Clutter.Actor): Actor
    _init(config?: Actor.ConstructorProperties): void
}

module Clone {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.Action.ConstructorProperties, Atk.Component.ConstructorProperties, Actor.ConstructorProperties {
    }

}

interface Clone extends Atk.Action, Atk.Component {

    // Own properties of Cally-12.Cally.Clone

    __gtype__: number

    // Conflicting properties

    parent: Atk.Object & GObject.Object & GObject.Object

    // Conflicting methods

    /**
     * Returns a description of the specified action of the object.
     * @virtual 
     * @param i the action index corresponding to the action to be performed
     * @returns a description string, or %NULL if @action does not implement this interface.
     */
    getDescription(i: number): string | null
    /**
     * Gets the accessible description of the accessible.
     * @virtual 
     * @returns a character string representing the accessible description of the accessible.
     */
    getDescription(): string | null
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
     * i.e. the result of some actions via atk_action_do_action() may be
     * NIL.
     * @virtual 
     * @param i the action index corresponding to the action to be performed
     * @returns a name string, or %NULL if @action does not implement this interface.
     */
    getName(i: number): string | null
    /**
     * Gets the accessible name of the accessible.
     * @virtual 
     * @returns a character string representing the accessible name of the object.
     */
    getName(): string | null
    /**
     * Sets a description of the specified action of the object.
     * @virtual 
     * @param i the action index corresponding to the action to be performed
     * @param desc the description to be assigned to this action
     * @returns a gboolean representing if the description was successfully set;
     */
    setDescription(i: number, desc: string | null): boolean
    /**
     * Sets the accessible description of the accessible. You can't set
     * the description to NULL. This is reserved for the initial value. In
     * this aspect NULL is similar to ATK_ROLE_UNKNOWN. If you want to set
     * the name to a empty value you can use "".
     * @virtual 
     * @param description a character string to be set as the accessible description
     */
    setDescription(description: string | null): void
    /**
     * Gets the layer of the component.
     * @virtual 
     * @returns an #AtkLayer which is the layer of the component
     */
    getLayer(): Atk.Layer
    /**
     * Gets the layer of the accessible.
     * @virtual 
     * @returns an #AtkLayer which is the layer of the accessible
     */
    getLayer(): Atk.Layer
    /**
     * Gets the zorder of the component. The value G_MININT will be returned
     * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
     * @virtual 
     * @returns a gint which is the zorder of the component, i.e. the depth at which the component is shown in relation to other components in the same container.
     */
    getMdiZorder(): number
    /**
     * Gets the zorder of the accessible. The value G_MININT will be returned
     * if the layer of the accessible is not ATK_LAYER_MDI.
     * @virtual 
     * @returns a gint which is the zorder of the accessible, i.e. the depth at which the component is shown in relation to other components in the same container.
     */
    getMdiZorder(): number

    // Class property signals of Cally-12.Cally.Clone

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-component-layer", ...args: any[]): void
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-component-mdi-zorder", ...args: any[]): void
    connect(sigName: "notify::accessible-description", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-description", ...args: any[]): void
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-hypertext-nlinks", ...args: any[]): void
    connect(sigName: "notify::accessible-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-name", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-caption", ...args: any[]): void
    connect(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-caption-object", ...args: any[]): void
    connect(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-column-description", ...args: any[]): void
    connect(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-column-header", ...args: any[]): void
    connect(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-row-description", ...args: any[]): void
    connect(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-row-header", ...args: any[]): void
    connect(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-summary", ...args: any[]): void
    connect(sigName: "notify::accessible-value", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Implementation of the ATK interfaces for a #ClutterClone
 * 
 * #CallyClone implements the required ATK interfaces of [class`Clutter`.Clone]
 * 
 * In particular it sets a proper role for the clone, as just a image,
 * as it is the sanest and simplest approach.
 * @class 
 */
class Clone extends Actor {

    // Own properties of Cally-12.Cally.Clone

    static name: string

    // Constructors of Cally-12.Cally.Clone

    constructor(config?: Clone.ConstructorProperties) 
    /**
     * Creates a new #CallyClone for the given `actor`. `actor` must be a
     * [class`Clutter`.Clone].
     * @constructor 
     * @param actor a #ClutterActor
     * @returns the newly created #AtkObject
     */
    constructor(actor: Clutter.Actor) 
    /**
     * Creates a new #CallyClone for the given `actor`. `actor` must be a
     * [class`Clutter`.Clone].
     * @constructor 
     * @param actor a #ClutterActor
     * @returns the newly created #AtkObject
     */
    static new(actor: Clutter.Actor): Clone
    _init(config?: Clone.ConstructorProperties): void
}

module Root {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.GObjectAccessible.ConstructorProperties {
    }

}

interface Root {

    // Own properties of Cally-12.Cally.Root

    __gtype__: number

    // Conflicting properties

    parent: Atk.Object & GObject.Object & GObject.Object

    // Class property signals of Cally-12.Cally.Root

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-component-layer", ...args: any[]): void
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-component-mdi-zorder", ...args: any[]): void
    connect(sigName: "notify::accessible-description", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-description", ...args: any[]): void
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-hypertext-nlinks", ...args: any[]): void
    connect(sigName: "notify::accessible-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-name", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-caption", ...args: any[]): void
    connect(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-caption-object", ...args: any[]): void
    connect(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-column-description", ...args: any[]): void
    connect(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-column-header", ...args: any[]): void
    connect(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-row-description", ...args: any[]): void
    connect(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-row-header", ...args: any[]): void
    connect(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-summary", ...args: any[]): void
    connect(sigName: "notify::accessible-value", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Root object for the Cally toolkit
 * 
 * #CallyRoot is the root object of the accessibility tree-like
 * hierarchy, exposing the application level.
 * 
 * Somewhat equivalent to #GailTopLevel. We consider that this class
 * expose the a11y information of the [class`Clutter`.StageManager], as the
 * children of this object are the different [class`Clutter`.Stage] managed (so
 * the [class`GObject`.Object] used in the atk_object_initialize() is the
 * [class`Clutter`.StageManager]).
 * @class 
 */
class Root extends Atk.GObjectAccessible {

    // Own properties of Cally-12.Cally.Root

    static name: string

    // Constructors of Cally-12.Cally.Root

    constructor(config?: Root.ConstructorProperties) 
    /**
     * Creates a new #CallyRoot object.
     * @constructor 
     * @returns the newly created #AtkObject
     */
    constructor() 
    /**
     * Creates a new #CallyRoot object.
     * @constructor 
     * @returns the newly created #AtkObject
     */
    static new(): Root
    _init(config?: Root.ConstructorProperties): void
}

module Stage {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.Action.ConstructorProperties, Atk.Component.ConstructorProperties, Atk.Window.ConstructorProperties, Actor.ConstructorProperties {
    }

}

interface Stage extends Atk.Action, Atk.Component, Atk.Window {

    // Own properties of Cally-12.Cally.Stage

    __gtype__: number

    // Conflicting properties

    parent: GObject.Object & Atk.Object

    // Conflicting methods

    /**
     * Returns a description of the specified action of the object.
     * @virtual 
     * @param i the action index corresponding to the action to be performed
     * @returns a description string, or %NULL if @action does not implement this interface.
     */
    getDescription(i: number): string | null
    /**
     * Gets the accessible description of the accessible.
     * @virtual 
     * @returns a character string representing the accessible description of the accessible.
     */
    getDescription(): string | null
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
     * i.e. the result of some actions via atk_action_do_action() may be
     * NIL.
     * @virtual 
     * @param i the action index corresponding to the action to be performed
     * @returns a name string, or %NULL if @action does not implement this interface.
     */
    getName(i: number): string | null
    /**
     * Gets the accessible name of the accessible.
     * @virtual 
     * @returns a character string representing the accessible name of the object.
     */
    getName(): string | null
    /**
     * Sets a description of the specified action of the object.
     * @virtual 
     * @param i the action index corresponding to the action to be performed
     * @param desc the description to be assigned to this action
     * @returns a gboolean representing if the description was successfully set;
     */
    setDescription(i: number, desc: string | null): boolean
    /**
     * Sets the accessible description of the accessible. You can't set
     * the description to NULL. This is reserved for the initial value. In
     * this aspect NULL is similar to ATK_ROLE_UNKNOWN. If you want to set
     * the name to a empty value you can use "".
     * @virtual 
     * @param description a character string to be set as the accessible description
     */
    setDescription(description: string | null): void
    /**
     * Gets the layer of the component.
     * @virtual 
     * @returns an #AtkLayer which is the layer of the component
     */
    getLayer(): Atk.Layer
    /**
     * Gets the layer of the accessible.
     * @virtual 
     * @returns an #AtkLayer which is the layer of the accessible
     */
    getLayer(): Atk.Layer
    /**
     * Gets the zorder of the component. The value G_MININT will be returned
     * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
     * @virtual 
     * @returns a gint which is the zorder of the component, i.e. the depth at which the component is shown in relation to other components in the same container.
     */
    getMdiZorder(): number
    /**
     * Gets the zorder of the accessible. The value G_MININT will be returned
     * if the layer of the accessible is not ATK_LAYER_MDI.
     * @virtual 
     * @returns a gint which is the zorder of the accessible, i.e. the depth at which the component is shown in relation to other components in the same container.
     */
    getMdiZorder(): number

    // Class property signals of Cally-12.Cally.Stage

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-component-layer", ...args: any[]): void
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-component-mdi-zorder", ...args: any[]): void
    connect(sigName: "notify::accessible-description", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-description", ...args: any[]): void
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-hypertext-nlinks", ...args: any[]): void
    connect(sigName: "notify::accessible-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-name", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-caption", ...args: any[]): void
    connect(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-caption-object", ...args: any[]): void
    connect(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-column-description", ...args: any[]): void
    connect(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-column-header", ...args: any[]): void
    connect(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-row-description", ...args: any[]): void
    connect(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-row-header", ...args: any[]): void
    connect(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-summary", ...args: any[]): void
    connect(sigName: "notify::accessible-value", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Implementation of the ATK interfaces for a #ClutterStage
 * 
 * #CallyStage implements the required ATK interfaces for [class`Clutter`.Stage]
 * 
 * Some implementation details: at this moment #CallyStage is used as
 * the most similar Window object in this toolkit (ie: emitting window
 * related signals), although the real purpose of [class`Clutter`.Stage] is
 * being a canvas. Anyway, this is required for applications using
 * just clutter, or directly [class`Clutter`.Stage]
 * @class 
 */
class Stage extends Actor {

    // Own properties of Cally-12.Cally.Stage

    static name: string

    // Constructors of Cally-12.Cally.Stage

    constructor(config?: Stage.ConstructorProperties) 
    /**
     * Creates a new #CallyStage for the given `actor`. `actor` should be a
     * [class`Clutter`.Stage].
     * @constructor 
     * @param actor a #ClutterActor
     * @returns the newly created #AtkObject
     */
    constructor(actor: Clutter.Actor) 
    /**
     * Creates a new #CallyStage for the given `actor`. `actor` should be a
     * [class`Clutter`.Stage].
     * @constructor 
     * @param actor a #ClutterActor
     * @returns the newly created #AtkObject
     */
    static new(actor: Clutter.Actor): Stage
    _init(config?: Stage.ConstructorProperties): void
}

module Text {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.Action.ConstructorProperties, Atk.Component.ConstructorProperties, Atk.EditableText.ConstructorProperties, Atk.Text.ConstructorProperties, Actor.ConstructorProperties {
    }

}

interface Text extends Atk.Action, Atk.Component, Atk.EditableText, Atk.Text {

    // Own properties of Cally-12.Cally.Text

    __gtype__: number

    // Conflicting properties

    parent: Atk.Object & GObject.Object & GObject.Object

    // Conflicting methods

    /**
     * Returns a description of the specified action of the object.
     * @virtual 
     * @param i the action index corresponding to the action to be performed
     * @returns a description string, or %NULL if @action does not implement this interface.
     */
    getDescription(i: number): string | null
    /**
     * Gets the accessible description of the accessible.
     * @virtual 
     * @returns a character string representing the accessible description of the accessible.
     */
    getDescription(): string | null
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
     * i.e. the result of some actions via atk_action_do_action() may be
     * NIL.
     * @virtual 
     * @param i the action index corresponding to the action to be performed
     * @returns a name string, or %NULL if @action does not implement this interface.
     */
    getName(i: number): string | null
    /**
     * Gets the accessible name of the accessible.
     * @virtual 
     * @returns a character string representing the accessible name of the object.
     */
    getName(): string | null
    /**
     * Sets a description of the specified action of the object.
     * @virtual 
     * @param i the action index corresponding to the action to be performed
     * @param desc the description to be assigned to this action
     * @returns a gboolean representing if the description was successfully set;
     */
    setDescription(i: number, desc: string | null): boolean
    /**
     * Sets the accessible description of the accessible. You can't set
     * the description to NULL. This is reserved for the initial value. In
     * this aspect NULL is similar to ATK_ROLE_UNKNOWN. If you want to set
     * the name to a empty value you can use "".
     * @virtual 
     * @param description a character string to be set as the accessible description
     */
    setDescription(description: string | null): void
    /**
     * Gets the layer of the component.
     * @virtual 
     * @returns an #AtkLayer which is the layer of the component
     */
    getLayer(): Atk.Layer
    /**
     * Gets the layer of the accessible.
     * @virtual 
     * @returns an #AtkLayer which is the layer of the accessible
     */
    getLayer(): Atk.Layer
    /**
     * Gets the zorder of the component. The value G_MININT will be returned
     * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
     * @virtual 
     * @returns a gint which is the zorder of the component, i.e. the depth at which the component is shown in relation to other components in the same container.
     */
    getMdiZorder(): number
    /**
     * Gets the zorder of the accessible. The value G_MININT will be returned
     * if the layer of the accessible is not ATK_LAYER_MDI.
     * @virtual 
     * @returns a gint which is the zorder of the accessible, i.e. the depth at which the component is shown in relation to other components in the same container.
     */
    getMdiZorder(): number

    // Class property signals of Cally-12.Cally.Text

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-component-layer", ...args: any[]): void
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-component-mdi-zorder", ...args: any[]): void
    connect(sigName: "notify::accessible-description", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-description", ...args: any[]): void
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-hypertext-nlinks", ...args: any[]): void
    connect(sigName: "notify::accessible-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-name", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-caption", ...args: any[]): void
    connect(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-caption-object", ...args: any[]): void
    connect(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-column-description", ...args: any[]): void
    connect(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-column-header", ...args: any[]): void
    connect(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-row-description", ...args: any[]): void
    connect(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-row-header", ...args: any[]): void
    connect(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-table-summary", ...args: any[]): void
    connect(sigName: "notify::accessible-value", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Implementation of the ATK interfaces for a [class`Clutter`.Text]
 * 
 * #CallyText implements the required ATK interfaces of
 * [class`Clutter`.Text], #AtkText and #AtkEditableText
 * @class 
 */
class Text extends Actor {

    // Own properties of Cally-12.Cally.Text

    static name: string

    // Constructors of Cally-12.Cally.Text

    constructor(config?: Text.ConstructorProperties) 
    /**
     * Creates a new #CallyText for the given `actor`. `actor` must be a
     * [class`Clutter`.Text].
     * @constructor 
     * @param actor a #ClutterActor
     * @returns the newly created #AtkObject
     */
    constructor(actor: Clutter.Actor) 
    /**
     * Creates a new #CallyText for the given `actor`. `actor` must be a
     * [class`Clutter`.Text].
     * @constructor 
     * @param actor a #ClutterActor
     * @returns the newly created #AtkObject
     */
    static new(actor: Clutter.Actor): Text
    _init(config?: Text.ConstructorProperties): void
}

module Util {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.Util.ConstructorProperties {
    }

}

interface Util {

    // Own properties of Cally-12.Cally.Util

    __gtype__: number

    // Class property signals of Cally-12.Cally.Util

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * #AtkUtil implementation
 * 
 * #CallyUtil implements #AtkUtil abstract methods. Although it
 * includes the name "Util" it is in fact one of the most important
 * interfaces to be implemented in any ATK toolkit implementation.
 * 
 * For instance, it defines atk_get_root(), the method that returns
 * the root object in the hierarchy. Without it, you don't have
 * available any accessible object.
 * @class 
 */
class Util extends Atk.Util {

    // Own properties of Cally-12.Cally.Util

    static name: string

    // Constructors of Cally-12.Cally.Util

    constructor(config?: Util.ConstructorProperties) 
    _init(config?: Util.ConstructorProperties): void
}

interface ActorClass {

    // Own fields of Cally-12.Cally.ActorClass

    notifyClutter: (object: GObject.Object, pspec: GObject.ParamSpec) => void
    addActor: (container: Clutter.Actor, actor: Clutter.Actor, data: any) => number
    removeActor: (container: Clutter.Actor, actor: Clutter.Actor, data: any) => number
}

/**
 * The <structname>CallyActorClass</structname> structure contains
 * only private data
 * @record 
 */
abstract class ActorClass {

    // Own properties of Cally-12.Cally.ActorClass

    static name: string
}

interface ActorPrivate {
}

class ActorPrivate {

    // Own properties of Cally-12.Cally.ActorPrivate

    static name: string
}

interface CloneClass {
}

/**
 * The <structname>CallyCloneClass</structname> structure contains only
 * private data
 * @record 
 */
abstract class CloneClass {

    // Own properties of Cally-12.Cally.CloneClass

    static name: string
}

interface ClonePrivate {
}

class ClonePrivate {

    // Own properties of Cally-12.Cally.ClonePrivate

    static name: string
}

interface RootClass {
}

/**
 * The <structname>CallyRootClass</structname> structure contains only
 * private data
 * @record 
 */
abstract class RootClass {

    // Own properties of Cally-12.Cally.RootClass

    static name: string
}

interface RootPrivate {
}

class RootPrivate {

    // Own properties of Cally-12.Cally.RootPrivate

    static name: string
}

interface StageClass {
}

/**
 * The <structname>CallyStageClass</structname> structure contains only
 * private data
 * @record 
 */
abstract class StageClass {

    // Own properties of Cally-12.Cally.StageClass

    static name: string
}

interface StagePrivate {
}

class StagePrivate {

    // Own properties of Cally-12.Cally.StagePrivate

    static name: string
}

interface TextClass {
}

/**
 * The <structname>CallyTextClass</structname> structure contains only
 * private data
 * @record 
 */
abstract class TextClass {

    // Own properties of Cally-12.Cally.TextClass

    static name: string
}

interface TextPrivate {
}

class TextPrivate {

    // Own properties of Cally-12.Cally.TextPrivate

    static name: string
}

interface UtilClass {
}

/**
 * The <structname>CallyUtilClass</structname> structure contains only
 * private data
 * @record 
 */
abstract class UtilClass {

    // Own properties of Cally-12.Cally.UtilClass

    static name: string
}

interface UtilPrivate {
}

class UtilPrivate {

    // Own properties of Cally-12.Cally.UtilPrivate

    static name: string
}

}

export default Cally;