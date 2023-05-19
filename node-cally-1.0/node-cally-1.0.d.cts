
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-cally-1.0-import.d.ts';
    
/**
 * Cally-1.0
 */

import type Clutter from '@girs/clutter-1.0';
import type cairo from '@girs/cairo-1.0';
import type Json from '@girs/json-1.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GL from '@girs/gl-1.0';
import type CoglPango from '@girs/coglpango-1.0';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Cogl from '@girs/cogl-1.0';
import type Atk from '@girs/atk-1.0';

/**
 * Initializes the accessibility support.
 * @returns %TRUE if accessibility support has been correctly initialized.
 */
export function accessibilityInit(): boolean
/**
 * Returns if the accessibility support using cally is enabled.
 * @returns %TRUE if accessibility support has been correctly initialized.
 */
export function getCallyInitialized(): boolean
/**
 * Action function, to be used on #AtkAction implementations as
 * an individual action. Unlike #CallyActionFunc, this function
 * uses the `user_data` argument passed to cally_actor_add_action_full().
 * @callback 
 * @param callyActor a #CallyActor
 */
export interface ActionCallback {
    (callyActor: Actor): void
}
/**
 * Action function, to be used on #AtkAction implementations as a individual
 * action
 * @callback 
 * @param callyActor a #CallyActor
 */
export interface ActionFunc {
    (callyActor: Actor): void
}
export module Actor {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.Action.ConstructorProperties, Atk.Component.ConstructorProperties, Atk.GObjectAccessible.ConstructorProperties {
    }

}

export interface Actor extends Atk.Action, Atk.Component {

    // Own properties of Cally-1.0.Cally.Actor

    __gtype__: number

    // Conflicting properties

    parent: Atk.Object & GObject.Object & GObject.Object

    // Owm methods of Cally-1.0.Cally.Actor

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
     * Removes a action, using the `action_id` returned by cally_actor_add_action()
     * @param actionId the action id
     * @returns %TRUE if the operation was succesful, %FALSE otherwise
     */
    removeAction(actionId: number): boolean
    /**
     * Removes an action, using the `action_name` used when the action was added
     * with cally_actor_add_action()
     * @param actionName the name of the action to remove
     * @returns %TRUE if the operation was succesful, %FALSE otherwise
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

    // Class property signals of Cally-1.0.Cally.Actor

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
 * The <structname>CallyActor</structname> structure contains only private
 * data and should be accessed using the provided API
 * @class 
 */
export class Actor extends Atk.GObjectAccessible {

    // Own properties of Cally-1.0.Cally.Actor

    static name: string

    // Constructors of Cally-1.0.Cally.Actor

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

export module Clone {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.Action.ConstructorProperties, Atk.Component.ConstructorProperties, Actor.ConstructorProperties {
    }

}

export interface Clone extends Atk.Action, Atk.Component {

    // Own properties of Cally-1.0.Cally.Clone

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

    // Class property signals of Cally-1.0.Cally.Clone

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
 * The <structname>CallyClone</structname> structure contains only private
 * data and should be accessed using the provided API
 * @class 
 */
export class Clone extends Actor {

    // Own properties of Cally-1.0.Cally.Clone

    static name: string

    // Constructors of Cally-1.0.Cally.Clone

    constructor(config?: Clone.ConstructorProperties) 
    /**
     * Creates a new #CallyClone for the given `actor`. `actor` must be a
     * #ClutterClone.
     * @constructor 
     * @param actor a #ClutterActor
     * @returns the newly created #AtkObject
     */
    constructor(actor: Clutter.Actor) 
    /**
     * Creates a new #CallyClone for the given `actor`. `actor` must be a
     * #ClutterClone.
     * @constructor 
     * @param actor a #ClutterActor
     * @returns the newly created #AtkObject
     */
    static new(actor: Clutter.Actor): Clone
    _init(config?: Clone.ConstructorProperties): void
}

export module Group {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.Action.ConstructorProperties, Atk.Component.ConstructorProperties, Actor.ConstructorProperties {
    }

}

export interface Group extends Atk.Action, Atk.Component {

    // Own properties of Cally-1.0.Cally.Group

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

    // Class property signals of Cally-1.0.Cally.Group

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
 * The <structname>CallyGroup</structname> structure contains only
 * private data and should be accessed using the provided API
 * @class 
 */
export class Group extends Actor {

    // Own properties of Cally-1.0.Cally.Group

    static name: string

    // Constructors of Cally-1.0.Cally.Group

    constructor(config?: Group.ConstructorProperties) 
    /**
     * Creates a #CallyGroup for `actor`
     * @constructor 
     * @param actor a #ClutterGroup
     * @returns the newly created #CallyGroup
     */
    constructor(actor: Clutter.Actor) 
    /**
     * Creates a #CallyGroup for `actor`
     * @constructor 
     * @param actor a #ClutterGroup
     * @returns the newly created #CallyGroup
     */
    static new(actor: Clutter.Actor): Group
    _init(config?: Group.ConstructorProperties): void
}

export module Rectangle {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.Action.ConstructorProperties, Atk.Component.ConstructorProperties, Actor.ConstructorProperties {
    }

}

export interface Rectangle extends Atk.Action, Atk.Component {

    // Own properties of Cally-1.0.Cally.Rectangle

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

    // Class property signals of Cally-1.0.Cally.Rectangle

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
 * The <structname>CallyRectangle</structname> structure contains only private
 * data and should be accessed using the provided API
 * @class 
 */
export class Rectangle extends Actor {

    // Own properties of Cally-1.0.Cally.Rectangle

    static name: string

    // Constructors of Cally-1.0.Cally.Rectangle

    constructor(config?: Rectangle.ConstructorProperties) 
    /**
     * Creates a new #CallyRectangle for the given `actor`. `actor` must be
     * a #ClutterRectangle.
     * @constructor 
     * @param actor a #ClutterActor
     * @returns the newly created #AtkObject
     */
    constructor(actor: Clutter.Actor) 
    /**
     * Creates a new #CallyRectangle for the given `actor`. `actor` must be
     * a #ClutterRectangle.
     * @constructor 
     * @param actor a #ClutterActor
     * @returns the newly created #AtkObject
     */
    static new(actor: Clutter.Actor): Rectangle
    _init(config?: Rectangle.ConstructorProperties): void
}

export module Root {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.GObjectAccessible.ConstructorProperties {
    }

}

export interface Root {

    // Own properties of Cally-1.0.Cally.Root

    __gtype__: number

    // Conflicting properties

    parent: Atk.Object & GObject.Object & GObject.Object

    // Class property signals of Cally-1.0.Cally.Root

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
 * The <structname>CallyRoot</structname> structure contains only private
 * data and should be accessed using the provided API
 * @class 
 */
export class Root extends Atk.GObjectAccessible {

    // Own properties of Cally-1.0.Cally.Root

    static name: string

    // Constructors of Cally-1.0.Cally.Root

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

export module Stage {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.Action.ConstructorProperties, Atk.Component.ConstructorProperties, Atk.Window.ConstructorProperties, Group.ConstructorProperties {
    }

}

export interface Stage extends Atk.Action, Atk.Component, Atk.Window {

    // Own properties of Cally-1.0.Cally.Stage

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

    // Class property signals of Cally-1.0.Cally.Stage

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
 * The <structname>CallyStage</structname> structure contains only
 * private data and should be accessed using the provided API
 * @class 
 */
export class Stage extends Group {

    // Own properties of Cally-1.0.Cally.Stage

    static name: string

    // Constructors of Cally-1.0.Cally.Stage

    constructor(config?: Stage.ConstructorProperties) 
    /**
     * Creates a new #CallyStage for the given `actor`. `actor` should be a
     * #ClutterStage.
     * @constructor 
     * @param actor a #ClutterActor
     * @returns the newly created #AtkObject
     */
    constructor(actor: Clutter.Actor) 
    /**
     * Creates a new #CallyStage for the given `actor`. `actor` should be a
     * #ClutterStage.
     * @constructor 
     * @param actor a #ClutterActor
     * @returns the newly created #AtkObject
     */
    static new(actor: Clutter.Actor): Stage
    _init(config?: Stage.ConstructorProperties): void
}

export module Text {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.Action.ConstructorProperties, Atk.Component.ConstructorProperties, Atk.EditableText.ConstructorProperties, Atk.Text.ConstructorProperties, Actor.ConstructorProperties {
    }

}

export interface Text extends Atk.Action, Atk.Component, Atk.EditableText, Atk.Text {

    // Own properties of Cally-1.0.Cally.Text

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

    // Class property signals of Cally-1.0.Cally.Text

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
 * The <structname>CallyText</structname> structure contains only private
 * data and should be accessed using the provided API
 * @class 
 */
export class Text extends Actor {

    // Own properties of Cally-1.0.Cally.Text

    static name: string

    // Constructors of Cally-1.0.Cally.Text

    constructor(config?: Text.ConstructorProperties) 
    /**
     * Creates a new #CallyText for the given `actor`. `actor` must be a
     * #ClutterText.
     * @constructor 
     * @param actor a #ClutterActor
     * @returns the newly created #AtkObject
     */
    constructor(actor: Clutter.Actor) 
    /**
     * Creates a new #CallyText for the given `actor`. `actor` must be a
     * #ClutterText.
     * @constructor 
     * @param actor a #ClutterActor
     * @returns the newly created #AtkObject
     */
    static new(actor: Clutter.Actor): Text
    _init(config?: Text.ConstructorProperties): void
}

export module Texture {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.Action.ConstructorProperties, Atk.Component.ConstructorProperties, Actor.ConstructorProperties {
    }

}

export interface Texture extends Atk.Action, Atk.Component {

    // Own properties of Cally-1.0.Cally.Texture

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

    // Class property signals of Cally-1.0.Cally.Texture

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
 * The <structname>CallyTexture</structname> structure contains only
 * private data and should be accessed using the provided API
 * @class 
 */
export class Texture extends Actor {

    // Own properties of Cally-1.0.Cally.Texture

    static name: string

    // Constructors of Cally-1.0.Cally.Texture

    constructor(config?: Texture.ConstructorProperties) 
    /**
     * Creates a new #CallyTexture for the given `actor`. `actor` must be
     * a #ClutterTexture.
     * @constructor 
     * @param actor a #ClutterActor
     * @returns the newly created #AtkObject
     */
    constructor(actor: Clutter.Actor) 
    /**
     * Creates a new #CallyTexture for the given `actor`. `actor` must be
     * a #ClutterTexture.
     * @constructor 
     * @param actor a #ClutterActor
     * @returns the newly created #AtkObject
     */
    static new(actor: Clutter.Actor): Texture
    _init(config?: Texture.ConstructorProperties): void
}

export module Util {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.Util.ConstructorProperties {
    }

}

export interface Util {

    // Own properties of Cally-1.0.Cally.Util

    __gtype__: number

    // Class property signals of Cally-1.0.Cally.Util

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
 * The <structname>CallyUtil</structname> structure contains only
 * private data and should be accessed using the provided API
 * @class 
 */
export class Util extends Atk.Util {

    // Own properties of Cally-1.0.Cally.Util

    static name: string

    // Constructors of Cally-1.0.Cally.Util

    constructor(config?: Util.ConstructorProperties) 
    _init(config?: Util.ConstructorProperties): void
}

export interface ActorClass {

    // Own fields of Cally-1.0.Cally.ActorClass

    notifyClutter: (object: GObject.Object, pspec: GObject.ParamSpec) => void
    focusClutter: (actor: Clutter.Actor, data: any) => boolean
    addActor: (container: Clutter.Actor, actor: Clutter.Actor, data: any) => number
    removeActor: (container: Clutter.Actor, actor: Clutter.Actor, data: any) => number
}

/**
 * The <structname>CallyActorClass</structname> structure contains
 * only private data
 * @record 
 */
export abstract class ActorClass {

    // Own properties of Cally-1.0.Cally.ActorClass

    static name: string
}

export interface ActorPrivate {
}

export class ActorPrivate {

    // Own properties of Cally-1.0.Cally.ActorPrivate

    static name: string
}

export interface CloneClass {
}

/**
 * The <structname>CallyCloneClass</structname> structure contains only
 * private data
 * @record 
 */
export abstract class CloneClass {

    // Own properties of Cally-1.0.Cally.CloneClass

    static name: string
}

export interface ClonePrivate {
}

export class ClonePrivate {

    // Own properties of Cally-1.0.Cally.ClonePrivate

    static name: string
}

export interface GroupClass {
}

/**
 * The <structname>CallyGroupClass</structname> structure contains only
 * private data
 * @record 
 */
export abstract class GroupClass {

    // Own properties of Cally-1.0.Cally.GroupClass

    static name: string
}

export interface GroupPrivate {
}

export class GroupPrivate {

    // Own properties of Cally-1.0.Cally.GroupPrivate

    static name: string
}

export interface RectangleClass {
}

/**
 * The <structname>CallyRectangleClass</structname> structure contains
 * only private data
 * @record 
 */
export abstract class RectangleClass {

    // Own properties of Cally-1.0.Cally.RectangleClass

    static name: string
}

export interface RectanglePrivate {
}

export class RectanglePrivate {

    // Own properties of Cally-1.0.Cally.RectanglePrivate

    static name: string
}

export interface RootClass {
}

/**
 * The <structname>CallyRootClass</structname> structure contains only
 * private data
 * @record 
 */
export abstract class RootClass {

    // Own properties of Cally-1.0.Cally.RootClass

    static name: string
}

export interface RootPrivate {
}

export class RootPrivate {

    // Own properties of Cally-1.0.Cally.RootPrivate

    static name: string
}

export interface StageClass {
}

/**
 * The <structname>CallyStageClass</structname> structure contains only
 * private data
 * @record 
 */
export abstract class StageClass {

    // Own properties of Cally-1.0.Cally.StageClass

    static name: string
}

export interface StagePrivate {
}

export class StagePrivate {

    // Own properties of Cally-1.0.Cally.StagePrivate

    static name: string
}

export interface TextClass {
}

/**
 * The <structname>CallyTextClass</structname> structure contains only
 * private data
 * @record 
 */
export abstract class TextClass {

    // Own properties of Cally-1.0.Cally.TextClass

    static name: string
}

export interface TextPrivate {
}

export class TextPrivate {

    // Own properties of Cally-1.0.Cally.TextPrivate

    static name: string
}

export interface TextureClass {
}

/**
 * The <structname>CallyTextureClass</structname> structure contains
 * only private data
 * @record 
 */
export abstract class TextureClass {

    // Own properties of Cally-1.0.Cally.TextureClass

    static name: string
}

export interface TexturePrivate {
}

export class TexturePrivate {

    // Own properties of Cally-1.0.Cally.TexturePrivate

    static name: string
}

export interface UtilClass {
}

/**
 * The <structname>CallyUtilClass</structname> structure contains only
 * private data
 * @record 
 */
export abstract class UtilClass {

    // Own properties of Cally-1.0.Cally.UtilClass

    static name: string
}

export interface UtilPrivate {
}

export class UtilPrivate {

    // Own properties of Cally-1.0.Cally.UtilPrivate

    static name: string
}

// END