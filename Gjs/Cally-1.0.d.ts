// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Cally-1.0
 */

import type * as Gjs from './Gjs';
import type Clutter from './Clutter-1.0';
import type cairo from './cairo-1.0';
import type Json from './Json-1.0';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GL from './GL-1.0';
import type CoglPango from './CoglPango-1.0';
import type PangoCairo from './PangoCairo-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type Cogl from './Cogl-1.0';
import type Atk from './Atk-1.0';

export namespace Cally {

/**
 * Initializes the accessibility support.
 */
function accessibility_init(): boolean
/**
 * Returns if the accessibility support using cally is enabled.
 */
function get_cally_initialized(): boolean
/**
 * Action function, to be used on #AtkAction implementations as
 * an individual action. Unlike #CallyActionFunc, this function
 * uses the `user_data` argument passed to cally_actor_add_action_full().
 * @callback 
 * @param cally_actor a #CallyActor
 */
interface ActionCallback {
    (cally_actor: Actor): void
}
/**
 * Action function, to be used on #AtkAction implementations as a individual
 * action
 * @callback 
 * @param cally_actor a #CallyActor
 */
interface ActionFunc {
    (cally_actor: Actor): void
}
interface Actor_ConstructProps extends Atk.Action_ConstructProps, Atk.Component_ConstructProps, Atk.GObjectAccessible_ConstructProps {
}

interface Actor extends Atk.Action, Atk.Component {

    // Conflicting properties

    parent: any

    // Owm methods of Cally-1.0.Cally.Actor

    /**
     * Adds a new action to be accessed with the #AtkAction interface.
     * @param action_name the action name
     * @param action_description the action description
     * @param action_keybinding the action keybinding
     * @param callback the callback of the action
     */
    add_action(action_name: string, action_description: string, action_keybinding: string, callback: ActionCallback): number
    /**
     * Removes a action, using the `action_id` returned by cally_actor_add_action()
     * @param action_id the action id
     */
    remove_action(action_id: number): boolean
    /**
     * Removes an action, using the `action_name` used when the action was added
     * with cally_actor_add_action()
     * @param action_name the name of the action to remove
     */
    remove_action_by_name(action_name: string): boolean

    // Conflicting methods

    get_description(...args: any[]): any
    get_name(...args: any[]): any
    set_description(...args: any[]): any
    vfunc_get_description(...args: any[]): any
    vfunc_get_name(...args: any[]): any
    vfunc_set_description(...args: any[]): any

    // Class property signals of Cally-1.0.Cally.Actor

    connect(sigName: "notify::accessible-component-layer", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-layer", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-component-layer", ...args: any[]): void
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-component-mdi-zorder", ...args: any[]): void
    connect(sigName: "notify::accessible-description", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-description", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-description", ...args: any[]): void
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-hypertext-nlinks", ...args: any[]): void
    connect(sigName: "notify::accessible-name", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-name", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-name", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: "notify::accessible-table-caption", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-caption", ...args: any[]): void
    connect(sigName: "notify::accessible-table-caption-object", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption-object", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-caption-object", ...args: any[]): void
    connect(sigName: "notify::accessible-table-column-description", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-description", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-column-description", ...args: any[]): void
    connect(sigName: "notify::accessible-table-column-header", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-header", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-column-header", ...args: any[]): void
    connect(sigName: "notify::accessible-table-row-description", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-description", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-row-description", ...args: any[]): void
    connect(sigName: "notify::accessible-table-row-header", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-header", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-row-header", ...args: any[]): void
    connect(sigName: "notify::accessible-table-summary", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-summary", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-summary", ...args: any[]): void
    connect(sigName: "notify::accessible-value", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-value", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The <structname>CallyActor</structname> structure contains only private
 * data and should be accessed using the provided API
 * @class 
 */
class Actor extends Atk.GObjectAccessible {

    // Own properties of Cally-1.0.Cally.Actor

    static name: string
    static $gtype: GObject.GType<Actor>

    // Constructors of Cally-1.0.Cally.Actor

    constructor(config?: Actor_ConstructProps) 
    /**
     * Creates a new #CallyActor for the given `actor`
     * @constructor 
     * @param actor a #ClutterActor
     */
    constructor(actor: Clutter.Actor) 
    /**
     * Creates a new #CallyActor for the given `actor`
     * @constructor 
     * @param actor a #ClutterActor
     */
    static new(actor: Clutter.Actor): Actor
    _init(config?: Actor_ConstructProps): void
}

interface Clone_ConstructProps extends Atk.Action_ConstructProps, Atk.Component_ConstructProps, Actor_ConstructProps {
}

interface Clone extends Atk.Action, Atk.Component {

    // Conflicting properties

    parent: any

    // Conflicting methods

    get_description(...args: any[]): any
    get_name(...args: any[]): any
    set_description(...args: any[]): any
    vfunc_get_description(...args: any[]): any
    vfunc_get_name(...args: any[]): any
    vfunc_set_description(...args: any[]): any

    // Class property signals of Cally-1.0.Cally.Clone

    connect(sigName: "notify::accessible-component-layer", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-layer", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-component-layer", ...args: any[]): void
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-component-mdi-zorder", ...args: any[]): void
    connect(sigName: "notify::accessible-description", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-description", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-description", ...args: any[]): void
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-hypertext-nlinks", ...args: any[]): void
    connect(sigName: "notify::accessible-name", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-name", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-name", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: "notify::accessible-table-caption", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-caption", ...args: any[]): void
    connect(sigName: "notify::accessible-table-caption-object", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption-object", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-caption-object", ...args: any[]): void
    connect(sigName: "notify::accessible-table-column-description", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-description", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-column-description", ...args: any[]): void
    connect(sigName: "notify::accessible-table-column-header", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-header", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-column-header", ...args: any[]): void
    connect(sigName: "notify::accessible-table-row-description", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-description", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-row-description", ...args: any[]): void
    connect(sigName: "notify::accessible-table-row-header", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-header", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-row-header", ...args: any[]): void
    connect(sigName: "notify::accessible-table-summary", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-summary", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-summary", ...args: any[]): void
    connect(sigName: "notify::accessible-value", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-value", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The <structname>CallyClone</structname> structure contains only private
 * data and should be accessed using the provided API
 * @class 
 */
class Clone extends Actor {

    // Own properties of Cally-1.0.Cally.Clone

    static name: string
    static $gtype: GObject.GType<Clone>

    // Constructors of Cally-1.0.Cally.Clone

    constructor(config?: Clone_ConstructProps) 
    /**
     * Creates a new #CallyClone for the given `actor`. `actor` must be a
     * #ClutterClone.
     * @constructor 
     * @param actor a #ClutterActor
     */
    constructor(actor: Clutter.Actor) 
    /**
     * Creates a new #CallyClone for the given `actor`. `actor` must be a
     * #ClutterClone.
     * @constructor 
     * @param actor a #ClutterActor
     */
    static new(actor: Clutter.Actor): Clone
    _init(config?: Clone_ConstructProps): void
}

interface Group_ConstructProps extends Atk.Action_ConstructProps, Atk.Component_ConstructProps, Actor_ConstructProps {
}

interface Group extends Atk.Action, Atk.Component {

    // Conflicting properties

    parent: any

    // Conflicting methods

    get_description(...args: any[]): any
    get_name(...args: any[]): any
    set_description(...args: any[]): any
    vfunc_get_description(...args: any[]): any
    vfunc_get_name(...args: any[]): any
    vfunc_set_description(...args: any[]): any

    // Class property signals of Cally-1.0.Cally.Group

    connect(sigName: "notify::accessible-component-layer", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-layer", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-component-layer", ...args: any[]): void
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-component-mdi-zorder", ...args: any[]): void
    connect(sigName: "notify::accessible-description", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-description", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-description", ...args: any[]): void
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-hypertext-nlinks", ...args: any[]): void
    connect(sigName: "notify::accessible-name", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-name", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-name", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: "notify::accessible-table-caption", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-caption", ...args: any[]): void
    connect(sigName: "notify::accessible-table-caption-object", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption-object", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-caption-object", ...args: any[]): void
    connect(sigName: "notify::accessible-table-column-description", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-description", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-column-description", ...args: any[]): void
    connect(sigName: "notify::accessible-table-column-header", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-header", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-column-header", ...args: any[]): void
    connect(sigName: "notify::accessible-table-row-description", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-description", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-row-description", ...args: any[]): void
    connect(sigName: "notify::accessible-table-row-header", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-header", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-row-header", ...args: any[]): void
    connect(sigName: "notify::accessible-table-summary", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-summary", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-summary", ...args: any[]): void
    connect(sigName: "notify::accessible-value", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-value", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The <structname>CallyGroup</structname> structure contains only
 * private data and should be accessed using the provided API
 * @class 
 */
class Group extends Actor {

    // Own properties of Cally-1.0.Cally.Group

    static name: string
    static $gtype: GObject.GType<Group>

    // Constructors of Cally-1.0.Cally.Group

    constructor(config?: Group_ConstructProps) 
    /**
     * Creates a #CallyGroup for `actor`
     * @constructor 
     * @param actor a #ClutterGroup
     */
    constructor(actor: Clutter.Actor) 
    /**
     * Creates a #CallyGroup for `actor`
     * @constructor 
     * @param actor a #ClutterGroup
     */
    static new(actor: Clutter.Actor): Group
    _init(config?: Group_ConstructProps): void
}

interface Rectangle_ConstructProps extends Atk.Action_ConstructProps, Atk.Component_ConstructProps, Actor_ConstructProps {
}

interface Rectangle extends Atk.Action, Atk.Component {

    // Conflicting properties

    parent: any

    // Conflicting methods

    get_description(...args: any[]): any
    get_name(...args: any[]): any
    set_description(...args: any[]): any
    vfunc_get_description(...args: any[]): any
    vfunc_get_name(...args: any[]): any
    vfunc_set_description(...args: any[]): any

    // Class property signals of Cally-1.0.Cally.Rectangle

    connect(sigName: "notify::accessible-component-layer", callback: (($obj: Rectangle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-layer", callback: (($obj: Rectangle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-component-layer", ...args: any[]): void
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: Rectangle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: Rectangle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-component-mdi-zorder", ...args: any[]): void
    connect(sigName: "notify::accessible-description", callback: (($obj: Rectangle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-description", callback: (($obj: Rectangle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-description", ...args: any[]): void
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: Rectangle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: Rectangle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-hypertext-nlinks", ...args: any[]): void
    connect(sigName: "notify::accessible-name", callback: (($obj: Rectangle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-name", callback: (($obj: Rectangle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-name", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (($obj: Rectangle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: Rectangle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: "notify::accessible-table-caption", callback: (($obj: Rectangle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption", callback: (($obj: Rectangle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-caption", ...args: any[]): void
    connect(sigName: "notify::accessible-table-caption-object", callback: (($obj: Rectangle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption-object", callback: (($obj: Rectangle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-caption-object", ...args: any[]): void
    connect(sigName: "notify::accessible-table-column-description", callback: (($obj: Rectangle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-description", callback: (($obj: Rectangle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-column-description", ...args: any[]): void
    connect(sigName: "notify::accessible-table-column-header", callback: (($obj: Rectangle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-header", callback: (($obj: Rectangle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-column-header", ...args: any[]): void
    connect(sigName: "notify::accessible-table-row-description", callback: (($obj: Rectangle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-description", callback: (($obj: Rectangle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-row-description", ...args: any[]): void
    connect(sigName: "notify::accessible-table-row-header", callback: (($obj: Rectangle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-header", callback: (($obj: Rectangle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-row-header", ...args: any[]): void
    connect(sigName: "notify::accessible-table-summary", callback: (($obj: Rectangle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-summary", callback: (($obj: Rectangle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-summary", ...args: any[]): void
    connect(sigName: "notify::accessible-value", callback: (($obj: Rectangle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-value", callback: (($obj: Rectangle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The <structname>CallyRectangle</structname> structure contains only private
 * data and should be accessed using the provided API
 * @class 
 */
class Rectangle extends Actor {

    // Own properties of Cally-1.0.Cally.Rectangle

    static name: string
    static $gtype: GObject.GType<Rectangle>

    // Constructors of Cally-1.0.Cally.Rectangle

    constructor(config?: Rectangle_ConstructProps) 
    /**
     * Creates a new #CallyRectangle for the given `actor`. `actor` must be
     * a #ClutterRectangle.
     * @constructor 
     * @param actor a #ClutterActor
     */
    constructor(actor: Clutter.Actor) 
    /**
     * Creates a new #CallyRectangle for the given `actor`. `actor` must be
     * a #ClutterRectangle.
     * @constructor 
     * @param actor a #ClutterActor
     */
    static new(actor: Clutter.Actor): Rectangle
    _init(config?: Rectangle_ConstructProps): void
}

interface Root_ConstructProps extends Atk.GObjectAccessible_ConstructProps {
}

interface Root {

    // Conflicting properties

    parent: any

    // Class property signals of Cally-1.0.Cally.Root

    connect(sigName: "notify::accessible-component-layer", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-layer", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-component-layer", ...args: any[]): void
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-component-mdi-zorder", ...args: any[]): void
    connect(sigName: "notify::accessible-description", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-description", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-description", ...args: any[]): void
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-hypertext-nlinks", ...args: any[]): void
    connect(sigName: "notify::accessible-name", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-name", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-name", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: "notify::accessible-table-caption", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-caption", ...args: any[]): void
    connect(sigName: "notify::accessible-table-caption-object", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption-object", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-caption-object", ...args: any[]): void
    connect(sigName: "notify::accessible-table-column-description", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-description", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-column-description", ...args: any[]): void
    connect(sigName: "notify::accessible-table-column-header", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-header", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-column-header", ...args: any[]): void
    connect(sigName: "notify::accessible-table-row-description", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-description", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-row-description", ...args: any[]): void
    connect(sigName: "notify::accessible-table-row-header", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-header", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-row-header", ...args: any[]): void
    connect(sigName: "notify::accessible-table-summary", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-summary", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-summary", ...args: any[]): void
    connect(sigName: "notify::accessible-value", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-value", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The <structname>CallyRoot</structname> structure contains only private
 * data and should be accessed using the provided API
 * @class 
 */
class Root extends Atk.GObjectAccessible {

    // Own properties of Cally-1.0.Cally.Root

    static name: string
    static $gtype: GObject.GType<Root>

    // Constructors of Cally-1.0.Cally.Root

    constructor(config?: Root_ConstructProps) 
    /**
     * Creates a new #CallyRoot object.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #CallyRoot object.
     * @constructor 
     */
    static new(): Root
    _init(config?: Root_ConstructProps): void
}

interface Stage_ConstructProps extends Atk.Action_ConstructProps, Atk.Component_ConstructProps, Atk.Window_ConstructProps, Group_ConstructProps {
}

interface Stage extends Atk.Action, Atk.Component, Atk.Window {

    // Conflicting properties

    parent: any

    // Conflicting methods

    get_description(...args: any[]): any
    get_name(...args: any[]): any
    set_description(...args: any[]): any
    vfunc_get_description(...args: any[]): any
    vfunc_get_name(...args: any[]): any
    vfunc_set_description(...args: any[]): any

    // Class property signals of Cally-1.0.Cally.Stage

    connect(sigName: "notify::accessible-component-layer", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-layer", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-component-layer", ...args: any[]): void
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-component-mdi-zorder", ...args: any[]): void
    connect(sigName: "notify::accessible-description", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-description", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-description", ...args: any[]): void
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-hypertext-nlinks", ...args: any[]): void
    connect(sigName: "notify::accessible-name", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-name", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-name", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: "notify::accessible-table-caption", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-caption", ...args: any[]): void
    connect(sigName: "notify::accessible-table-caption-object", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption-object", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-caption-object", ...args: any[]): void
    connect(sigName: "notify::accessible-table-column-description", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-description", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-column-description", ...args: any[]): void
    connect(sigName: "notify::accessible-table-column-header", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-header", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-column-header", ...args: any[]): void
    connect(sigName: "notify::accessible-table-row-description", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-description", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-row-description", ...args: any[]): void
    connect(sigName: "notify::accessible-table-row-header", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-header", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-row-header", ...args: any[]): void
    connect(sigName: "notify::accessible-table-summary", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-summary", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-summary", ...args: any[]): void
    connect(sigName: "notify::accessible-value", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-value", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The <structname>CallyStage</structname> structure contains only
 * private data and should be accessed using the provided API
 * @class 
 */
class Stage extends Group {

    // Own properties of Cally-1.0.Cally.Stage

    static name: string
    static $gtype: GObject.GType<Stage>

    // Constructors of Cally-1.0.Cally.Stage

    constructor(config?: Stage_ConstructProps) 
    /**
     * Creates a new #CallyStage for the given `actor`. `actor` should be a
     * #ClutterStage.
     * @constructor 
     * @param actor a #ClutterActor
     */
    constructor(actor: Clutter.Actor) 
    /**
     * Creates a new #CallyStage for the given `actor`. `actor` should be a
     * #ClutterStage.
     * @constructor 
     * @param actor a #ClutterActor
     */
    static new(actor: Clutter.Actor): Stage
    _init(config?: Stage_ConstructProps): void
}

interface Text_ConstructProps extends Atk.Action_ConstructProps, Atk.Component_ConstructProps, Atk.EditableText_ConstructProps, Atk.Text_ConstructProps, Actor_ConstructProps {
}

interface Text extends Atk.Action, Atk.Component, Atk.EditableText, Atk.Text {

    // Conflicting properties

    parent: any

    // Conflicting methods

    get_description(...args: any[]): any
    get_name(...args: any[]): any
    set_description(...args: any[]): any
    vfunc_get_description(...args: any[]): any
    vfunc_get_name(...args: any[]): any
    vfunc_set_description(...args: any[]): any

    // Class property signals of Cally-1.0.Cally.Text

    connect(sigName: "notify::accessible-component-layer", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-layer", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-component-layer", ...args: any[]): void
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-component-mdi-zorder", ...args: any[]): void
    connect(sigName: "notify::accessible-description", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-description", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-description", ...args: any[]): void
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-hypertext-nlinks", ...args: any[]): void
    connect(sigName: "notify::accessible-name", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-name", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-name", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: "notify::accessible-table-caption", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-caption", ...args: any[]): void
    connect(sigName: "notify::accessible-table-caption-object", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption-object", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-caption-object", ...args: any[]): void
    connect(sigName: "notify::accessible-table-column-description", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-description", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-column-description", ...args: any[]): void
    connect(sigName: "notify::accessible-table-column-header", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-header", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-column-header", ...args: any[]): void
    connect(sigName: "notify::accessible-table-row-description", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-description", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-row-description", ...args: any[]): void
    connect(sigName: "notify::accessible-table-row-header", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-header", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-row-header", ...args: any[]): void
    connect(sigName: "notify::accessible-table-summary", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-summary", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-summary", ...args: any[]): void
    connect(sigName: "notify::accessible-value", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-value", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The <structname>CallyText</structname> structure contains only private
 * data and should be accessed using the provided API
 * @class 
 */
class Text extends Actor {

    // Own properties of Cally-1.0.Cally.Text

    static name: string
    static $gtype: GObject.GType<Text>

    // Constructors of Cally-1.0.Cally.Text

    constructor(config?: Text_ConstructProps) 
    /**
     * Creates a new #CallyText for the given `actor`. `actor` must be a
     * #ClutterText.
     * @constructor 
     * @param actor a #ClutterActor
     */
    constructor(actor: Clutter.Actor) 
    /**
     * Creates a new #CallyText for the given `actor`. `actor` must be a
     * #ClutterText.
     * @constructor 
     * @param actor a #ClutterActor
     */
    static new(actor: Clutter.Actor): Text
    _init(config?: Text_ConstructProps): void
}

interface Texture_ConstructProps extends Atk.Action_ConstructProps, Atk.Component_ConstructProps, Actor_ConstructProps {
}

interface Texture extends Atk.Action, Atk.Component {

    // Conflicting properties

    parent: any

    // Conflicting methods

    get_description(...args: any[]): any
    get_name(...args: any[]): any
    set_description(...args: any[]): any
    vfunc_get_description(...args: any[]): any
    vfunc_get_name(...args: any[]): any
    vfunc_set_description(...args: any[]): any

    // Class property signals of Cally-1.0.Cally.Texture

    connect(sigName: "notify::accessible-component-layer", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-layer", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-component-layer", ...args: any[]): void
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-component-mdi-zorder", ...args: any[]): void
    connect(sigName: "notify::accessible-description", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-description", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-description", ...args: any[]): void
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-hypertext-nlinks", ...args: any[]): void
    connect(sigName: "notify::accessible-name", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-name", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-name", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: "notify::accessible-table-caption", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-caption", ...args: any[]): void
    connect(sigName: "notify::accessible-table-caption-object", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption-object", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-caption-object", ...args: any[]): void
    connect(sigName: "notify::accessible-table-column-description", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-description", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-column-description", ...args: any[]): void
    connect(sigName: "notify::accessible-table-column-header", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-header", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-column-header", ...args: any[]): void
    connect(sigName: "notify::accessible-table-row-description", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-description", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-row-description", ...args: any[]): void
    connect(sigName: "notify::accessible-table-row-header", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-header", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-row-header", ...args: any[]): void
    connect(sigName: "notify::accessible-table-summary", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-summary", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-table-summary", ...args: any[]): void
    connect(sigName: "notify::accessible-value", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-value", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The <structname>CallyTexture</structname> structure contains only
 * private data and should be accessed using the provided API
 * @class 
 */
class Texture extends Actor {

    // Own properties of Cally-1.0.Cally.Texture

    static name: string
    static $gtype: GObject.GType<Texture>

    // Constructors of Cally-1.0.Cally.Texture

    constructor(config?: Texture_ConstructProps) 
    /**
     * Creates a new #CallyTexture for the given `actor`. `actor` must be
     * a #ClutterTexture.
     * @constructor 
     * @param actor a #ClutterActor
     */
    constructor(actor: Clutter.Actor) 
    /**
     * Creates a new #CallyTexture for the given `actor`. `actor` must be
     * a #ClutterTexture.
     * @constructor 
     * @param actor a #ClutterActor
     */
    static new(actor: Clutter.Actor): Texture
    _init(config?: Texture_ConstructProps): void
}

interface Util_ConstructProps extends Atk.Util_ConstructProps {
}

interface Util {

    // Class property signals of Cally-1.0.Cally.Util

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The <structname>CallyUtil</structname> structure contains only
 * private data and should be accessed using the provided API
 * @class 
 */
class Util extends Atk.Util {

    // Own properties of Cally-1.0.Cally.Util

    static name: string
    static $gtype: GObject.GType<Util>

    // Constructors of Cally-1.0.Cally.Util

    constructor(config?: Util_ConstructProps) 
    _init(config?: Util_ConstructProps): void
}

interface ActorClass {

    // Own fields of Cally-1.0.Cally.ActorClass

    notify_clutter: (object: GObject.Object, pspec: GObject.ParamSpec) => void
    focus_clutter: (actor: Clutter.Actor, data: object) => boolean
    add_actor: (container: Clutter.Actor, actor: Clutter.Actor, data: object) => number
    remove_actor: (container: Clutter.Actor, actor: Clutter.Actor, data: object) => number
}

/**
 * The <structname>CallyActorClass</structname> structure contains
 * only private data
 * @record 
 */
abstract class ActorClass {

    // Own properties of Cally-1.0.Cally.ActorClass

    static name: string
}

interface ActorPrivate {
}

class ActorPrivate {

    // Own properties of Cally-1.0.Cally.ActorPrivate

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

    // Own properties of Cally-1.0.Cally.CloneClass

    static name: string
}

interface ClonePrivate {
}

class ClonePrivate {

    // Own properties of Cally-1.0.Cally.ClonePrivate

    static name: string
}

interface GroupClass {
}

/**
 * The <structname>CallyGroupClass</structname> structure contains only
 * private data
 * @record 
 */
abstract class GroupClass {

    // Own properties of Cally-1.0.Cally.GroupClass

    static name: string
}

interface GroupPrivate {
}

class GroupPrivate {

    // Own properties of Cally-1.0.Cally.GroupPrivate

    static name: string
}

interface RectangleClass {
}

/**
 * The <structname>CallyRectangleClass</structname> structure contains
 * only private data
 * @record 
 */
abstract class RectangleClass {

    // Own properties of Cally-1.0.Cally.RectangleClass

    static name: string
}

interface RectanglePrivate {
}

class RectanglePrivate {

    // Own properties of Cally-1.0.Cally.RectanglePrivate

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

    // Own properties of Cally-1.0.Cally.RootClass

    static name: string
}

interface RootPrivate {
}

class RootPrivate {

    // Own properties of Cally-1.0.Cally.RootPrivate

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

    // Own properties of Cally-1.0.Cally.StageClass

    static name: string
}

interface StagePrivate {
}

class StagePrivate {

    // Own properties of Cally-1.0.Cally.StagePrivate

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

    // Own properties of Cally-1.0.Cally.TextClass

    static name: string
}

interface TextPrivate {
}

class TextPrivate {

    // Own properties of Cally-1.0.Cally.TextPrivate

    static name: string
}

interface TextureClass {
}

/**
 * The <structname>CallyTextureClass</structname> structure contains
 * only private data
 * @record 
 */
abstract class TextureClass {

    // Own properties of Cally-1.0.Cally.TextureClass

    static name: string
}

interface TexturePrivate {
}

class TexturePrivate {

    // Own properties of Cally-1.0.Cally.TexturePrivate

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

    // Own properties of Cally-1.0.Cally.UtilClass

    static name: string
}

interface UtilPrivate {
}

class UtilPrivate {

    // Own properties of Cally-1.0.Cally.UtilPrivate

    static name: string
}

}
export default Cally;