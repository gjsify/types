
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */
/**
 * Mash-0.2
 */

import type freetype2 from '@girs/freetype2-2.0';
import type fontconfig from '@girs/fontconfig-2.0';
import type cairo from '@girs/cairo-1.0';
import type PangoFT2 from '@girs/pangoft2-1.0';
import type PangoFc from '@girs/pangofc-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Gio from '@girs/gio-2.0';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Json from '@girs/json-1.0';
import type GL from '@girs/gl-1.0';
import type CoglPango from '@girs/coglpango-1.0';
import type Cogl from '@girs/cogl-1.0';
import type Clutter from '@girs/clutter-1.0';
import type Atk from '@girs/atk-1.0';

export namespace Mash {

/**
 * Error enumeration for #MashData
 */
enum DataError {
    UNKNOWN_FORMAT,
    UNKNOWN,
    MISSING_PROPERTY,
    INVALID,
    UNSUPPORTED,
}
/**
 * Flags used for modifying the data as it is loaded. These can be
 * passed to mash_data_load().
 * 
 * If any of the negate flags are set then they cause the vertex and
 * normal coordinates for the specified axis to be negated. This could
 * be useful when loading a model from a tool which uses a different
 * coordinate system than the one used in your application. For
 * example, in Blender if the view is rotated such that the x-axis is
 * pointing to the right, and the z-axis is pointing out of the screen
 * then y-axis would be pointing directly up. However in Clutter the
 * default transformation is set up such that the y-axis would be
 * pointing down. Therefore if a model is loaded from Blender it would
 * appear upside-down. Also all of the front faces would be in
 * clockwise order. If backface culling is then enabled then the wrong
 * faces would be culled with the default Cogl settings.
 * 
 * To avoid these issues when exporting from Blender it is common to
 * pass the %MASH_DATA_NEGATE_Y flag.
 */
enum DataFlags {
    NONE,
    NEGATE_X,
    NEGATE_Y,
    NEGATE_Z,
}
module Data {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Data {

    // Own properties of Mash-0.2.Mash.Data

    __gtype__: number

    // Owm methods of Mash-0.2.Mash.Data

    /**
     * Gets the bounding cuboid of the vertices in `self`. The cuboid is
     * represented by two vertices representing the minimum and maximum
     * extents. The x, y and z components of `min_vertex` will contain the
     * minimum x, y and z values of all the vertices and `max_vertex` will
     * contain the maximum. The extents of the model are cached so it is
     * cheap to call this function.
     * @param minVertex A location to return the minimum vertex
     * @param maxVertex A location to return the maximum vertex
     */
    getExtents(minVertex: Clutter.Vertex, maxVertex: Clutter.Vertex): void
    /**
     * Loads the data from the file called `filename` into `self`. The
     * model can then be rendered using mash_data_render(). If
     * there is an error loading the file it will return %FALSE and `error`
     * will be set to a GError instance.
     * @param flags Flags used to specify load-time modifications to the data
     * @param filename The name of a file to load
     * @returns %TRUE if the load succeeded or %FALSE otherwise.
     */
    load(flags: DataFlags, filename: string | null): boolean
    /**
     * Renders the data contained in the model to the Clutter
     * scene. The current Cogl source material will be used to affect the
     * appearance of the model. This function is not usually called
     * directly but instead the #MashData instance is added to a
     * #MashModel and this function will be automatically called by
     * the paint method of the model.
     */
    render(): void

    // Class property signals of Mash-0.2.Mash.Data

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
 * The #MashData structure contains only private data.
 * @class 
 */
class Data extends GObject.Object {

    // Own properties of Mash-0.2.Mash.Data

    static name: string

    // Constructors of Mash-0.2.Mash.Data

    constructor(config?: Data.ConstructorProperties) 
    /**
     * Constructs a new #MashData instance. The object initially has
     * no data so nothing will be drawn when mash_data_render() is
     * called. To load data into the object, call mash_data_load().
     * @constructor 
     * @returns a new #MashData.
     */
    constructor() 
    /**
     * Constructs a new #MashData instance. The object initially has
     * no data so nothing will be drawn when mash_data_render() is
     * called. To load data into the object, call mash_data_load().
     * @constructor 
     * @returns a new #MashData.
     */
    static new(): Data
    _init(config?: Data.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

module DataLoader {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface DataLoader {

    // Own properties of Mash-0.2.Mash.DataLoader

    __gtype__: number

    // Owm methods of Mash-0.2.Mash.DataLoader

    // Has conflict: getData(loaderData: DataLoaderData): void
    // Has conflict: load(flags: DataFlags, filename: string | null): boolean

    // Own virtual methods of Mash-0.2.Mash.DataLoader

    getData(loaderData: DataLoaderData): void

    // Overloads of getData

    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     * @returns the data if found,          or %NULL if no such data exists.
     */
    getData(key: string | null): any | null
    /**
     * Obtains the loaded data after calling mash_data_loader_load().
     * This function is not usually called by applications.
     * @virtual 
     * @param flags 
     * @param filename 
     */
    load(flags: DataFlags, filename: string | null): boolean

    // Class property signals of Mash-0.2.Mash.DataLoader

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
 * The #MashDataLoader structure contains only private data.
 * @class 
 */
class DataLoader extends GObject.Object {

    // Own properties of Mash-0.2.Mash.DataLoader

    static name: string

    // Constructors of Mash-0.2.Mash.DataLoader

    constructor(config?: DataLoader.ConstructorProperties) 
    _init(config?: DataLoader.ConstructorProperties): void
}

module DirectionalLight {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Clutter.Animatable.ConstructorProperties, Clutter.Container.ConstructorProperties, Clutter.Scriptable.ConstructorProperties, Light.ConstructorProperties {
    }

}

interface DirectionalLight extends Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {

    // Own properties of Mash-0.2.Mash.DirectionalLight

    __gtype__: number

    // Conflicting methods

    /**
     * Lowers `actor` to `sibling` level, in the depth ordering.
     * 
     * This function calls the #ClutterContainerIface.lower() virtual function,
     * which has been deprecated. The default implementation will call
     * clutter_actor_set_child_below_sibling().
     * @virtual 
     * @param actor the actor to raise
     * @param sibling the sibling to lower to, or %NULL to lower   to the bottom
     */
    lower(actor: Clutter.Actor, sibling: Clutter.Actor | null): void
    /**
     * Puts `self` below `above`.
     * 
     * Both actors must have the same parent, and the parent must implement
     * the #ClutterContainer interface.
     * 
     * This function calls clutter_container_lower_child() internally.
     * @param above A #ClutterActor to lower below
     */
    lower(above: Clutter.Actor | null): void

    // Overloads of lower

    /**
     * Lowers `actor` to `sibling` level, in the depth ordering.
     * 
     * This function calls the #ClutterContainerIface.lower() virtual function,
     * which has been deprecated. The default implementation will call
     * clutter_actor_set_child_below_sibling().
     * @virtual 
     * @param actor the actor to raise
     * @param sibling the sibling to lower to, or %NULL to lower   to the bottom
     */
    lower(actor: Clutter.Actor, sibling: Clutter.Actor | null): void
    /**
     * Raises `actor` to `sibling` level, in the depth ordering.
     * 
     * This function calls the #ClutterContainerIface.raise() virtual function,
     * which has been deprecated. The default implementation will call
     * clutter_actor_set_child_above_sibling().
     * @virtual 
     * @param actor the actor to raise
     * @param sibling the sibling to raise to, or %NULL to raise   to the top
     */
    raise(actor: Clutter.Actor, sibling: Clutter.Actor | null): void
    /**
     * Puts `self` above `below`.
     * 
     * Both actors must have the same parent, and the parent must implement
     * the #ClutterContainer interface
     * 
     * This function calls clutter_container_raise_child() internally.
     * @param below A #ClutterActor to raise above.
     */
    raise(below: Clutter.Actor | null): void

    // Overloads of raise

    /**
     * Raises `actor` to `sibling` level, in the depth ordering.
     * 
     * This function calls the #ClutterContainerIface.raise() virtual function,
     * which has been deprecated. The default implementation will call
     * clutter_actor_set_child_above_sibling().
     * @virtual 
     * @param actor the actor to raise
     * @param sibling the sibling to raise to, or %NULL to raise   to the top
     */
    raise(actor: Clutter.Actor, sibling: Clutter.Actor | null): void

    // Class property signals of Mash-0.2.Mash.DirectionalLight

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::ambient", callback: (...args: any[]) => void): number
    on(sigName: "notify::ambient", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ambient", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ambient", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ambient", ...args: any[]): void
    connect(sigName: "notify::diffuse", callback: (...args: any[]) => void): number
    on(sigName: "notify::diffuse", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::diffuse", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::diffuse", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::diffuse", ...args: any[]): void
    connect(sigName: "notify::specular", callback: (...args: any[]) => void): number
    on(sigName: "notify::specular", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::specular", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::specular", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::specular", ...args: any[]): void
    connect(sigName: "notify::actions", callback: (...args: any[]) => void): number
    on(sigName: "notify::actions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::actions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::actions", ...args: any[]): void
    connect(sigName: "notify::allocation", callback: (...args: any[]) => void): number
    on(sigName: "notify::allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::allocation", ...args: any[]): void
    connect(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::anchor-gravity", ...args: any[]): void
    connect(sigName: "notify::anchor-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::anchor-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::anchor-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::anchor-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::anchor-x", ...args: any[]): void
    connect(sigName: "notify::anchor-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::anchor-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::anchor-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::anchor-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::anchor-y", ...args: any[]): void
    connect(sigName: "notify::background-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::background-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background-color", ...args: any[]): void
    connect(sigName: "notify::background-color-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::background-color-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background-color-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background-color-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background-color-set", ...args: any[]): void
    connect(sigName: "notify::child-transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-transform", ...args: any[]): void
    connect(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-transform-set", ...args: any[]): void
    connect(sigName: "notify::clip", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip", ...args: any[]): void
    connect(sigName: "notify::clip-rect", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-rect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-rect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-rect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-rect", ...args: any[]): void
    connect(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-to-allocation", ...args: any[]): void
    connect(sigName: "notify::constraints", callback: (...args: any[]) => void): number
    on(sigName: "notify::constraints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::constraints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::constraints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::constraints", ...args: any[]): void
    connect(sigName: "notify::content", callback: (...args: any[]) => void): number
    on(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-box", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-box", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-box", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-box", ...args: any[]): void
    connect(sigName: "notify::content-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-gravity", ...args: any[]): void
    connect(sigName: "notify::content-repeat", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-repeat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-repeat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-repeat", ...args: any[]): void
    connect(sigName: "notify::depth", callback: (...args: any[]) => void): number
    on(sigName: "notify::depth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::depth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::depth", ...args: any[]): void
    connect(sigName: "notify::effect", callback: (...args: any[]) => void): number
    on(sigName: "notify::effect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::effect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::effect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::effect", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::first-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::first-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-position-set", ...args: any[]): void
    connect(sigName: "notify::fixed-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-x", ...args: any[]): void
    connect(sigName: "notify::fixed-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-y", ...args: any[]): void
    connect(sigName: "notify::has-clip", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-clip", ...args: any[]): void
    connect(sigName: "notify::has-pointer", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-pointer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-pointer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-pointer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-pointer", ...args: any[]): void
    connect(sigName: "notify::height", callback: (...args: any[]) => void): number
    on(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::last-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::last-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (...args: any[]) => void): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::magnification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::magnification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::magnification-filter", ...args: any[]): void
    connect(sigName: "notify::mapped", callback: (...args: any[]) => void): number
    on(sigName: "notify::mapped", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mapped", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mapped", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::min-height", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-height", ...args: any[]): void
    connect(sigName: "notify::min-height-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-height-set", ...args: any[]): void
    connect(sigName: "notify::min-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-width", ...args: any[]): void
    connect(sigName: "notify::min-width-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-width-set", ...args: any[]): void
    connect(sigName: "notify::minification-filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::minification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::minification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::minification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::minification-filter", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::natural-height", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-height", ...args: any[]): void
    connect(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-height-set", ...args: any[]): void
    connect(sigName: "notify::natural-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-width", ...args: any[]): void
    connect(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-width-set", ...args: any[]): void
    connect(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): number
    on(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::offscreen-redirect", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::pivot-point", callback: (...args: any[]) => void): number
    on(sigName: "notify::pivot-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pivot-point", ...args: any[]): void
    connect(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pivot-point-z", ...args: any[]): void
    connect(sigName: "notify::position", callback: (...args: any[]) => void): number
    on(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::reactive", callback: (...args: any[]) => void): number
    on(sigName: "notify::reactive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::reactive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::reactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::reactive", ...args: any[]): void
    connect(sigName: "notify::realized", callback: (...args: any[]) => void): number
    on(sigName: "notify::realized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::realized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::realized", ...args: any[]): void
    connect(sigName: "notify::request-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::request-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::request-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::request-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::request-mode", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-x", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-y", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-x", ...args: any[]): void
    connect(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-y", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-z-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-center-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-center-x", ...args: any[]): void
    connect(sigName: "notify::scale-center-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-center-y", ...args: any[]): void
    connect(sigName: "notify::scale-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-x", ...args: any[]): void
    connect(sigName: "notify::scale-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-y", ...args: any[]): void
    connect(sigName: "notify::scale-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-z", ...args: any[]): void
    connect(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::show-on-set-parent", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::text-direction", callback: (...args: any[]) => void): number
    on(sigName: "notify::text-direction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::text-direction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::text-direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::text-direction", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::transform-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform-set", ...args: any[]): void
    connect(sigName: "notify::translation-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-x", ...args: any[]): void
    connect(sigName: "notify::translation-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-y", ...args: any[]): void
    connect(sigName: "notify::translation-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-z", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: (...args: any[]) => void): number
    on(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (...args: any[]) => void): number
    on(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::x-align", callback: (...args: any[]) => void): number
    on(sigName: "notify::x-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x-align", ...args: any[]): void
    connect(sigName: "notify::x-expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::x-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x-expand", ...args: any[]): void
    connect(sigName: "notify::y", callback: (...args: any[]) => void): number
    on(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::y-align", callback: (...args: any[]) => void): number
    on(sigName: "notify::y-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y-align", ...args: any[]): void
    connect(sigName: "notify::y-expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::y-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y-expand", ...args: any[]): void
    connect(sigName: "notify::z-position", callback: (...args: any[]) => void): number
    on(sigName: "notify::z-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::z-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::z-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::z-position", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #MashDirectionalLight structure contains only private data.
 * @class 
 */
class DirectionalLight extends Light {

    // Own properties of Mash-0.2.Mash.DirectionalLight

    static name: string

    // Constructors of Mash-0.2.Mash.DirectionalLight

    constructor(config?: DirectionalLight.ConstructorProperties) 
    /**
     * Constructs a new directional light actor.
     * @constructor 
     * @returns the new light.
     */
    constructor() 
    /**
     * Constructs a new directional light actor.
     * @constructor 
     * @returns the new light.
     */
    static new(): DirectionalLight
    _init(config?: DirectionalLight.ConstructorProperties): void
}

module Light {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Clutter.Animatable.ConstructorProperties, Clutter.Container.ConstructorProperties, Clutter.Scriptable.ConstructorProperties, Clutter.Actor.ConstructorProperties {

        // Own constructor properties of Mash-0.2.Mash.Light

        ambient?: Clutter.Color | null
        diffuse?: Clutter.Color | null
        specular?: Clutter.Color | null
    }

}

interface Light extends Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {

    // Own properties of Mash-0.2.Mash.Light

    ambient: Clutter.Color
    diffuse: Clutter.Color
    specular: Clutter.Color
    __gtype__: number

    // Owm methods of Mash-0.2.Mash.Light

    /**
     * This is a convenience intended to be used within
     * mash_light_generate_shader() to generate shader snippets with
     * actor-specific variable names. It should not generally need to be
     * called by an application unless it is implementing its own lighting
     * algorithms.
     * 
     * The code in `snippet` is appended to `shader_source` but all
     * occurences of the ‘$’ symbol are replaced with a string that is
     * unique to `light` object. This is useful when multiple lights of the
     * same type are added to a single light box. For example, if a light
     * needs to have a position uniform it could make a call like the
     * following:
     * 
     * 
     * ```
     *   mash_light_append_shader (light, uniform_source,
     *                             "uniform vec3 position$;\n");
     * ```
     * 
     * 
     * The ‘position’ will get translated to something like
     * ‘positiong00000002’.
     * @param shaderSource The string to append to
     * @param snippet A snippet of GLSL
     */
    appendShader(shaderSource: GLib.String, snippet: string | null): void
    // Has conflict: generateShader(uniformSource: GLib.String, mainSource: GLib.String): void
    /**
     * Retrieves the ‘ambient’ color emitted by the light.
     * @param ambient A return location for the color
     */
    getAmbient(ambient: Clutter.Color): void
    /**
     * Retrieves the ‘diffuse’ color emitted by the light.
     * @param diffuse A return location for the color
     */
    getDiffuse(diffuse: Clutter.Color): void
    /**
     * Gets the modelview matrix for the light including all of the
     * transformations for its parent actors. This should be used for
     * updating uniforms that depend on the actor's transformation or
     * position.
     * @param matrix The return location for the matrix
     */
    getModelviewMatrix(matrix: Cogl.Matrix): void
    /**
     * Retrieves the ‘specular’ color emitted by the light.
     * @param specular A return location for the color
     */
    getSpecular(specular: Clutter.Color): void
    /**
     * This is a convenience intended to be used within
     * mash_light_update_uniforms() to help query uniform locations. It
     * should not generally need to be called by an application unless it
     * is implementing its own lighting algorithms.
     * 
     * This is a wrapper around cogl_program_get_uniform_location() which
     * appends an actor specific string to the uniform name. This is
     * useful when uniforms have been declared like ‘position$’ within
     * mash_light_append_shader().
     * @param program The program passed in from mash_light_update_uniforms().
     * @param uniformName The name of a uniform
     */
    getUniformLocation(program: Cogl.Handle, uniformName: string | null): number
    /**
     * Sets the ‘ambient’ color emitted by the light. If the light reaches
     * a vertex at all then the ambient color affects the vertex
     * regardless of its orientation or distance from the light. In
     * real-world lighting, even if an object isn't in a direct line of
     * sight to a light it can still be partially lit due to the fact that
     * light can bounce off other objects to reach it. The Mash lighting
     * model doesn't simulate this bouncing so the ambient color is often
     * used to give an approximation of the effect.
     * @param ambient The new color value
     */
    setAmbient(ambient: Clutter.Color): void
    /**
     * Sets the ‘diffuse’ color emitted by the light. The diffuse color is
     * only visible on an object if is facing the light. The orientation
     * of the object is determined per-vertex using the vertex's
     * normal. The diffuse color will be darkened depending on how
     * directly the object faces the light.
     * @param diffuse The new color value
     */
    setDiffuse(diffuse: Clutter.Color): void
    /**
     * This is a convenience intended to be used within
     * mash_light_update_uniforms() to help set uniforms. It
     * should not generally need to be called by an application unless it
     * is implementing its own lighting algorithms.
     * 
     * This is intended to help when setting a direction
     * uniform. `direction_in` should be an untransformed array of 3 floats
     * representing a vector. The vector will be transformed into eye
     * space according to the inverse transposed matrix of `light` so that
     * it won't change direction for non-uniform scaling transformations.
     * @param program 
     * @param uniformLocation The location of the uniform
     * @param directionIn The untransformed direction uniform
     */
    setDirectionUniform(program: Cogl.Handle, uniformLocation: number, directionIn: number): void
    /**
     * Sets the ‘specular’ color emitted by the light. The specular color
     * is used to add highlights to an object wherever the angle to the
     * light is close to the angle that the object is being viewed
     * from. For example, if you were modelling a snooker ball with a
     * bright light above it, this property will allow you add a bright
     * part where the light can directly reflect off the ball into the
     * eye. It is common to set this to a bright white value.
     * @param specular The new color value
     */
    setSpecular(specular: Clutter.Color): void
    // Has conflict: updateUniforms(program: Cogl.Handle): void

    // Conflicting methods

    /**
     * Puts `self` below `above`.
     * 
     * Both actors must have the same parent, and the parent must implement
     * the #ClutterContainer interface.
     * 
     * This function calls clutter_container_lower_child() internally.
     * @param above A #ClutterActor to lower below
     */
    lower(above: Clutter.Actor | null): void

    // Overloads of lower

    /**
     * Lowers `actor` to `sibling` level, in the depth ordering.
     * 
     * This function calls the #ClutterContainerIface.lower() virtual function,
     * which has been deprecated. The default implementation will call
     * clutter_actor_set_child_below_sibling().
     * @virtual 
     * @param actor the actor to raise
     * @param sibling the sibling to lower to, or %NULL to lower   to the bottom
     */
    lower(actor: Clutter.Actor, sibling: Clutter.Actor | null): void
    /**
     * Lowers `actor` to `sibling` level, in the depth ordering.
     * 
     * This function calls the #ClutterContainerIface.lower() virtual function,
     * which has been deprecated. The default implementation will call
     * clutter_actor_set_child_below_sibling().
     * @virtual 
     * @param actor the actor to raise
     * @param sibling the sibling to lower to, or %NULL to lower   to the bottom
     */
    lower(actor: Clutter.Actor, sibling: Clutter.Actor | null): void
    /**
     * Puts `self` above `below`.
     * 
     * Both actors must have the same parent, and the parent must implement
     * the #ClutterContainer interface
     * 
     * This function calls clutter_container_raise_child() internally.
     * @param below A #ClutterActor to raise above.
     */
    raise(below: Clutter.Actor | null): void

    // Overloads of raise

    /**
     * Raises `actor` to `sibling` level, in the depth ordering.
     * 
     * This function calls the #ClutterContainerIface.raise() virtual function,
     * which has been deprecated. The default implementation will call
     * clutter_actor_set_child_above_sibling().
     * @virtual 
     * @param actor the actor to raise
     * @param sibling the sibling to raise to, or %NULL to raise   to the top
     */
    raise(actor: Clutter.Actor, sibling: Clutter.Actor | null): void
    /**
     * Raises `actor` to `sibling` level, in the depth ordering.
     * 
     * This function calls the #ClutterContainerIface.raise() virtual function,
     * which has been deprecated. The default implementation will call
     * clutter_actor_set_child_above_sibling().
     * @virtual 
     * @param actor the actor to raise
     * @param sibling the sibling to raise to, or %NULL to raise   to the top
     */
    raise(actor: Clutter.Actor, sibling: Clutter.Actor | null): void

    // Own virtual methods of Mash-0.2.Mash.Light

    /**
     * This function is used to generate the shader code required to
     * implement a paraticular. It would not usually need to be called
     * from an application. Instead it is called automatically by
     * #MashLightSet.
     * 
     * This function can be overriden in subclasses of #MashLight to
     * implement custom lighting algorithms. The function will be called
     * before the first actor that is using the light set is painted
     * whenever it deems that the shader needs to be regenerated. It
     * currently will do this whenever a light is added or removed from
     * the box. The implementation should append any GLSL code to
     * `uniform_source` and `main_source` needed to implement the algorithm.
     * 
     * The implementation should use mash_light_append_shader() to append
     * code to either of the shader strings so that it can declare
     * variables that are unique to the individual actor.
     * 
     * The code in `uniform_source` is inserted at the global level of a
     * vertex shader. It is expected that the light will add uniform
     * declarations here. For example, if the light depends on the light's
     * position it could define a uniform for the position like so:
     * 
     * 
     * ```
     *   mash_light_append_shader (light, uniform_source,
     *                             "uniform vec3 position$;\n");
     * ```
     * 
     * 
     * The code in `main_source` is inserted with the main function of a
     * vertex shader. The snippet added by a light is expected to modify
     * the cogl_color_out attribute according to its algorithm. The snippet
     * can also use the following variables which will be initialized
     * before the snippet is run:
     * 
     * normal: This will be a vec3 which is initialized to the transformed
     * and normalized vertex normal.
     * 
     * eye_coord: This will be a vec3 containing the vertex coordinates in
     * eye-space.
     * 
     * ambient_light: A vec3 uniform containing the ambient light color.
     * 
     * diffuse_light: A vec3 uniform containing the diffuse light color.
     * 
     * specular_light: A vec3 uniform containing the specular light color.
     * 
     * mash_material.ambient: A vec4 containing the current material's
     *   ambient color.
     * 
     * mash_material.diffuse: A vec4 containing the current material's
     *   diffuse color.
     * 
     * mash_material.specular: A vec4 containing the current material's
     *   specular color.
     * 
     * mash_material.emission: A vec4 containing the current material's
     *   emission color.
     * 
     * mash_material.shininess: A float containing the current material's
     *   shininess value.
     * 
     * mash_normal_matrix: A version of the modelview matrix used to
     * transform normals.
     * 
     * In addition to these variables the shader can use all of the
     * built-in Cogl uniforms. Please see a future version of the Cogl
     * documentation for a description of these.
     * 
     * The implementation should always chain up to the #MashLight
     * implementation so that it can declare the built-in uniforms.
     * @virtual 
     * @param uniformSource A location to append uniforms declarations to
     * @param mainSource A location to append lighting algorithm snippets to
     */
    generateShader(uniformSource: GLib.String, mainSource: GLib.String): void
    /**
     * This function is used by #MashLightSet to implement the lights. It
     * should not need to be called by an application directly.
     * 
     * This function is virtual and can be overriden by subclasses to
     * implement custom lighting algorithms. The function is called during
     * the paint sequence of #MashLightSet on every light before any other
     * actors are painted. This gives the light implementation a chance to
     * update any uniforms it may have declared in the override of
     * mash_light_generate_shader().
     * 
     * The program is always made current with cogl_program_use() before
     * this method is called so it is safe to directly call
     * cogl_program_uniform_1f() and friends to update the uniforms. The
     * `program` handle is passed in so that the program can also be
     * queried to the locations of named
     * uniforms. mash_light_get_uniform_location() can be used to make
     * this easier when a uniform is named uniquely using the ‘$’ symbol
     * in mash_light_append_shader().
     * @virtual 
     * @param program A #CoglProgram containing the uniforms
     */
    updateUniforms(program: Cogl.Handle): void

    // Class property signals of Mash-0.2.Mash.Light

    connect(sigName: "notify::ambient", callback: (...args: any[]) => void): number
    on(sigName: "notify::ambient", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ambient", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ambient", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ambient", ...args: any[]): void
    connect(sigName: "notify::diffuse", callback: (...args: any[]) => void): number
    on(sigName: "notify::diffuse", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::diffuse", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::diffuse", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::diffuse", ...args: any[]): void
    connect(sigName: "notify::specular", callback: (...args: any[]) => void): number
    on(sigName: "notify::specular", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::specular", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::specular", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::specular", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::actions", callback: (...args: any[]) => void): number
    on(sigName: "notify::actions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::actions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::actions", ...args: any[]): void
    connect(sigName: "notify::allocation", callback: (...args: any[]) => void): number
    on(sigName: "notify::allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::allocation", ...args: any[]): void
    connect(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::anchor-gravity", ...args: any[]): void
    connect(sigName: "notify::anchor-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::anchor-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::anchor-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::anchor-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::anchor-x", ...args: any[]): void
    connect(sigName: "notify::anchor-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::anchor-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::anchor-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::anchor-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::anchor-y", ...args: any[]): void
    connect(sigName: "notify::background-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::background-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background-color", ...args: any[]): void
    connect(sigName: "notify::background-color-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::background-color-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background-color-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background-color-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background-color-set", ...args: any[]): void
    connect(sigName: "notify::child-transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-transform", ...args: any[]): void
    connect(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-transform-set", ...args: any[]): void
    connect(sigName: "notify::clip", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip", ...args: any[]): void
    connect(sigName: "notify::clip-rect", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-rect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-rect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-rect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-rect", ...args: any[]): void
    connect(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-to-allocation", ...args: any[]): void
    connect(sigName: "notify::constraints", callback: (...args: any[]) => void): number
    on(sigName: "notify::constraints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::constraints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::constraints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::constraints", ...args: any[]): void
    connect(sigName: "notify::content", callback: (...args: any[]) => void): number
    on(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-box", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-box", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-box", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-box", ...args: any[]): void
    connect(sigName: "notify::content-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-gravity", ...args: any[]): void
    connect(sigName: "notify::content-repeat", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-repeat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-repeat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-repeat", ...args: any[]): void
    connect(sigName: "notify::depth", callback: (...args: any[]) => void): number
    on(sigName: "notify::depth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::depth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::depth", ...args: any[]): void
    connect(sigName: "notify::effect", callback: (...args: any[]) => void): number
    on(sigName: "notify::effect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::effect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::effect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::effect", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::first-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::first-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-position-set", ...args: any[]): void
    connect(sigName: "notify::fixed-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-x", ...args: any[]): void
    connect(sigName: "notify::fixed-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-y", ...args: any[]): void
    connect(sigName: "notify::has-clip", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-clip", ...args: any[]): void
    connect(sigName: "notify::has-pointer", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-pointer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-pointer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-pointer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-pointer", ...args: any[]): void
    connect(sigName: "notify::height", callback: (...args: any[]) => void): number
    on(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::last-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::last-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (...args: any[]) => void): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::magnification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::magnification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::magnification-filter", ...args: any[]): void
    connect(sigName: "notify::mapped", callback: (...args: any[]) => void): number
    on(sigName: "notify::mapped", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mapped", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mapped", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::min-height", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-height", ...args: any[]): void
    connect(sigName: "notify::min-height-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-height-set", ...args: any[]): void
    connect(sigName: "notify::min-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-width", ...args: any[]): void
    connect(sigName: "notify::min-width-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-width-set", ...args: any[]): void
    connect(sigName: "notify::minification-filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::minification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::minification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::minification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::minification-filter", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::natural-height", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-height", ...args: any[]): void
    connect(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-height-set", ...args: any[]): void
    connect(sigName: "notify::natural-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-width", ...args: any[]): void
    connect(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-width-set", ...args: any[]): void
    connect(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): number
    on(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::offscreen-redirect", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::pivot-point", callback: (...args: any[]) => void): number
    on(sigName: "notify::pivot-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pivot-point", ...args: any[]): void
    connect(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pivot-point-z", ...args: any[]): void
    connect(sigName: "notify::position", callback: (...args: any[]) => void): number
    on(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::reactive", callback: (...args: any[]) => void): number
    on(sigName: "notify::reactive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::reactive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::reactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::reactive", ...args: any[]): void
    connect(sigName: "notify::realized", callback: (...args: any[]) => void): number
    on(sigName: "notify::realized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::realized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::realized", ...args: any[]): void
    connect(sigName: "notify::request-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::request-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::request-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::request-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::request-mode", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-x", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-y", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-x", ...args: any[]): void
    connect(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-y", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-z-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-center-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-center-x", ...args: any[]): void
    connect(sigName: "notify::scale-center-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-center-y", ...args: any[]): void
    connect(sigName: "notify::scale-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-x", ...args: any[]): void
    connect(sigName: "notify::scale-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-y", ...args: any[]): void
    connect(sigName: "notify::scale-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-z", ...args: any[]): void
    connect(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::show-on-set-parent", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::text-direction", callback: (...args: any[]) => void): number
    on(sigName: "notify::text-direction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::text-direction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::text-direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::text-direction", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::transform-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform-set", ...args: any[]): void
    connect(sigName: "notify::translation-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-x", ...args: any[]): void
    connect(sigName: "notify::translation-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-y", ...args: any[]): void
    connect(sigName: "notify::translation-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-z", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: (...args: any[]) => void): number
    on(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (...args: any[]) => void): number
    on(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::x-align", callback: (...args: any[]) => void): number
    on(sigName: "notify::x-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x-align", ...args: any[]): void
    connect(sigName: "notify::x-expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::x-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x-expand", ...args: any[]): void
    connect(sigName: "notify::y", callback: (...args: any[]) => void): number
    on(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::y-align", callback: (...args: any[]) => void): number
    on(sigName: "notify::y-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y-align", ...args: any[]): void
    connect(sigName: "notify::y-expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::y-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y-expand", ...args: any[]): void
    connect(sigName: "notify::z-position", callback: (...args: any[]) => void): number
    on(sigName: "notify::z-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::z-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::z-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::z-position", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #MashLight structure contains only private data.
 * @class 
 */
class Light extends Clutter.Actor {

    // Own properties of Mash-0.2.Mash.Light

    static name: string

    // Constructors of Mash-0.2.Mash.Light

    constructor(config?: Light.ConstructorProperties) 
    _init(config?: Light.ConstructorProperties): void
}

module LightSet {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface LightSet {

    // Own properties of Mash-0.2.Mash.LightSet

    __gtype__: number

    // Owm methods of Mash-0.2.Mash.LightSet

    /**
     * This adds a light to the set. Lights need to be added to the light
     * set as well as to a container somewhere in the Clutter actor
     * hierarchy in order to be useful.
     * @param light A #MashLight
     */
    addLight(light: Light): void
    /**
     * Removes a light from the set.
     * @param light A #MashLight
     */
    removeLight(light: Light): void

    // Class property signals of Mash-0.2.Mash.LightSet

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
 * The #MashLightSet structure contains only private data.
 * @class 
 */
class LightSet extends GObject.Object {

    // Own properties of Mash-0.2.Mash.LightSet

    static name: string

    // Constructors of Mash-0.2.Mash.LightSet

    constructor(config?: LightSet.ConstructorProperties) 
    /**
     * Constructs a new #MashLightSet.
     * @constructor 
     * @returns a new #MashLightSet.
     */
    constructor() 
    /**
     * Constructs a new #MashLightSet.
     * @constructor 
     * @returns a new #MashLightSet.
     */
    static new(): LightSet
    _init(config?: LightSet.ConstructorProperties): void
}

module Model {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Clutter.Animatable.ConstructorProperties, Clutter.Container.ConstructorProperties, Clutter.Scriptable.ConstructorProperties, Clutter.Actor.ConstructorProperties {

        // Own constructor properties of Mash-0.2.Mash.Model

        data?: Data | null
        fitToAllocation?: boolean | null
        lightSet?: LightSet | null
    }

}

interface Model extends Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {

    // Own properties of Mash-0.2.Mash.Model

    data: Data
    fitToAllocation: boolean
    lightSet: LightSet
    __gtype__: number

    // Owm methods of Mash-0.2.Mash.Model

    getFitToAllocation(): boolean
    /**
     * Replaces the data used by the actor with `data`. A reference is
     * taken on `data` so if you no longer need it you should unref it with
     * g_object_unref().
     * @param data The new #MashData
     */
    setData(data: Data): void

    // Overloads of setData

    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string | null, data: any | null): void
    /**
     * This sets whether the actor should scale the model to fit the
     * actor's allocation. If it's %TRUE then all of the axes of the model
     * will be scaled by the same amount to fill the allocation as much as
     * possible without distorting the aspect ratio. The model is also
     * translated so that it is at the center of the allocation and
     * centered at 0 along the z axis. The size along the z axis is not
     * considered when calculating a scale so if the model is largest
     * along that axis then the actor may appear too large. The
     * transformations are applied in addition to the actor's
     * transformations so it is still possible scale the actor further
     * using the scale-x and scale-y properties. The preferred size of the
     * actor will be the width and height of the model. If
     * width-for-height or height-for-width allocation is being used then
     * #MashModel will return whatever width or height will exactly
     * preserve the aspect ratio.
     * 
     * If the value is %FALSE then the actor is not transformed so the
     * origin of the model will be the top left corner of the actor. The
     * preferred size of the actor will be maximum extents of the model
     * although the allocation is not considered during paint so if the
     * model extends past the allocated size then it will draw outside the
     * allocation.
     * 
     * The default value is %TRUE.
     * @param fitToAllocation New value
     */
    setFitToAllocation(fitToAllocation: boolean): void
    /**
     * This sets the #MashLightSet that will be used to render the
     * model. Alternatively %NULL can be passed to disable lighting for
     * this model. The light set represents a collection of #MashLight<!--
     * -->s that will affect the appearance of the model.
     * @param lightSet A new #MashLightSet
     */
    setLightSet(lightSet: LightSet): void
    /**
     * Replaces the material that will be used to render the model with
     * the given one. By default a #MashModel will use a solid white
     * material. However the color of the material is still blended with
     * the vertex colors so the white material will cause the vertex
     * colors to be used directly. If you want the model to be textured
     * you will need to create a material that has a texture layer and set
     * it with this function.
     * 
     * If a #MashLightSet is used with the model then the material given
     * here will be modified to use the program generated by that light
     * set. If multiple models are expected to use the same material with
     * different light sets, it would be better to use a different copy of
     * the same material for each set of models so that they don't
     * repeatedly change the program on the material during paint.
     * @param material A handle to a Cogl material
     */
    setMaterial(material: Cogl.Handle): void

    // Conflicting methods

    /**
     * Puts `self` below `above`.
     * 
     * Both actors must have the same parent, and the parent must implement
     * the #ClutterContainer interface.
     * 
     * This function calls clutter_container_lower_child() internally.
     * @param above A #ClutterActor to lower below
     */
    lower(above: Clutter.Actor | null): void

    // Overloads of lower

    /**
     * Lowers `actor` to `sibling` level, in the depth ordering.
     * 
     * This function calls the #ClutterContainerIface.lower() virtual function,
     * which has been deprecated. The default implementation will call
     * clutter_actor_set_child_below_sibling().
     * @virtual 
     * @param actor the actor to raise
     * @param sibling the sibling to lower to, or %NULL to lower   to the bottom
     */
    lower(actor: Clutter.Actor, sibling: Clutter.Actor | null): void
    /**
     * Lowers `actor` to `sibling` level, in the depth ordering.
     * 
     * This function calls the #ClutterContainerIface.lower() virtual function,
     * which has been deprecated. The default implementation will call
     * clutter_actor_set_child_below_sibling().
     * @virtual 
     * @param actor the actor to raise
     * @param sibling the sibling to lower to, or %NULL to lower   to the bottom
     */
    lower(actor: Clutter.Actor, sibling: Clutter.Actor | null): void
    /**
     * Puts `self` above `below`.
     * 
     * Both actors must have the same parent, and the parent must implement
     * the #ClutterContainer interface
     * 
     * This function calls clutter_container_raise_child() internally.
     * @param below A #ClutterActor to raise above.
     */
    raise(below: Clutter.Actor | null): void

    // Overloads of raise

    /**
     * Raises `actor` to `sibling` level, in the depth ordering.
     * 
     * This function calls the #ClutterContainerIface.raise() virtual function,
     * which has been deprecated. The default implementation will call
     * clutter_actor_set_child_above_sibling().
     * @virtual 
     * @param actor the actor to raise
     * @param sibling the sibling to raise to, or %NULL to raise   to the top
     */
    raise(actor: Clutter.Actor, sibling: Clutter.Actor | null): void
    /**
     * Raises `actor` to `sibling` level, in the depth ordering.
     * 
     * This function calls the #ClutterContainerIface.raise() virtual function,
     * which has been deprecated. The default implementation will call
     * clutter_actor_set_child_above_sibling().
     * @virtual 
     * @param actor the actor to raise
     * @param sibling the sibling to raise to, or %NULL to raise   to the top
     */
    raise(actor: Clutter.Actor, sibling: Clutter.Actor | null): void

    // Class property signals of Mash-0.2.Mash.Model

    connect(sigName: "notify::data", callback: (...args: any[]) => void): number
    on(sigName: "notify::data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::fit-to-allocation", callback: (...args: any[]) => void): number
    on(sigName: "notify::fit-to-allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fit-to-allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fit-to-allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fit-to-allocation", ...args: any[]): void
    connect(sigName: "notify::light-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::light-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::light-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::light-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::light-set", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::actions", callback: (...args: any[]) => void): number
    on(sigName: "notify::actions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::actions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::actions", ...args: any[]): void
    connect(sigName: "notify::allocation", callback: (...args: any[]) => void): number
    on(sigName: "notify::allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::allocation", ...args: any[]): void
    connect(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::anchor-gravity", ...args: any[]): void
    connect(sigName: "notify::anchor-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::anchor-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::anchor-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::anchor-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::anchor-x", ...args: any[]): void
    connect(sigName: "notify::anchor-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::anchor-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::anchor-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::anchor-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::anchor-y", ...args: any[]): void
    connect(sigName: "notify::background-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::background-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background-color", ...args: any[]): void
    connect(sigName: "notify::background-color-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::background-color-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background-color-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background-color-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background-color-set", ...args: any[]): void
    connect(sigName: "notify::child-transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-transform", ...args: any[]): void
    connect(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-transform-set", ...args: any[]): void
    connect(sigName: "notify::clip", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip", ...args: any[]): void
    connect(sigName: "notify::clip-rect", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-rect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-rect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-rect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-rect", ...args: any[]): void
    connect(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-to-allocation", ...args: any[]): void
    connect(sigName: "notify::constraints", callback: (...args: any[]) => void): number
    on(sigName: "notify::constraints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::constraints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::constraints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::constraints", ...args: any[]): void
    connect(sigName: "notify::content", callback: (...args: any[]) => void): number
    on(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-box", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-box", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-box", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-box", ...args: any[]): void
    connect(sigName: "notify::content-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-gravity", ...args: any[]): void
    connect(sigName: "notify::content-repeat", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-repeat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-repeat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-repeat", ...args: any[]): void
    connect(sigName: "notify::depth", callback: (...args: any[]) => void): number
    on(sigName: "notify::depth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::depth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::depth", ...args: any[]): void
    connect(sigName: "notify::effect", callback: (...args: any[]) => void): number
    on(sigName: "notify::effect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::effect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::effect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::effect", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::first-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::first-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-position-set", ...args: any[]): void
    connect(sigName: "notify::fixed-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-x", ...args: any[]): void
    connect(sigName: "notify::fixed-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-y", ...args: any[]): void
    connect(sigName: "notify::has-clip", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-clip", ...args: any[]): void
    connect(sigName: "notify::has-pointer", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-pointer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-pointer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-pointer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-pointer", ...args: any[]): void
    connect(sigName: "notify::height", callback: (...args: any[]) => void): number
    on(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::last-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::last-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (...args: any[]) => void): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::magnification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::magnification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::magnification-filter", ...args: any[]): void
    connect(sigName: "notify::mapped", callback: (...args: any[]) => void): number
    on(sigName: "notify::mapped", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mapped", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mapped", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::min-height", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-height", ...args: any[]): void
    connect(sigName: "notify::min-height-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-height-set", ...args: any[]): void
    connect(sigName: "notify::min-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-width", ...args: any[]): void
    connect(sigName: "notify::min-width-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-width-set", ...args: any[]): void
    connect(sigName: "notify::minification-filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::minification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::minification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::minification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::minification-filter", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::natural-height", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-height", ...args: any[]): void
    connect(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-height-set", ...args: any[]): void
    connect(sigName: "notify::natural-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-width", ...args: any[]): void
    connect(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-width-set", ...args: any[]): void
    connect(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): number
    on(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::offscreen-redirect", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::pivot-point", callback: (...args: any[]) => void): number
    on(sigName: "notify::pivot-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pivot-point", ...args: any[]): void
    connect(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pivot-point-z", ...args: any[]): void
    connect(sigName: "notify::position", callback: (...args: any[]) => void): number
    on(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::reactive", callback: (...args: any[]) => void): number
    on(sigName: "notify::reactive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::reactive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::reactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::reactive", ...args: any[]): void
    connect(sigName: "notify::realized", callback: (...args: any[]) => void): number
    on(sigName: "notify::realized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::realized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::realized", ...args: any[]): void
    connect(sigName: "notify::request-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::request-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::request-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::request-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::request-mode", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-x", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-y", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-x", ...args: any[]): void
    connect(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-y", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-z-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-center-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-center-x", ...args: any[]): void
    connect(sigName: "notify::scale-center-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-center-y", ...args: any[]): void
    connect(sigName: "notify::scale-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-x", ...args: any[]): void
    connect(sigName: "notify::scale-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-y", ...args: any[]): void
    connect(sigName: "notify::scale-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-z", ...args: any[]): void
    connect(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::show-on-set-parent", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::text-direction", callback: (...args: any[]) => void): number
    on(sigName: "notify::text-direction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::text-direction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::text-direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::text-direction", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::transform-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform-set", ...args: any[]): void
    connect(sigName: "notify::translation-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-x", ...args: any[]): void
    connect(sigName: "notify::translation-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-y", ...args: any[]): void
    connect(sigName: "notify::translation-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-z", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: (...args: any[]) => void): number
    on(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (...args: any[]) => void): number
    on(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::x-align", callback: (...args: any[]) => void): number
    on(sigName: "notify::x-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x-align", ...args: any[]): void
    connect(sigName: "notify::x-expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::x-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x-expand", ...args: any[]): void
    connect(sigName: "notify::y", callback: (...args: any[]) => void): number
    on(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::y-align", callback: (...args: any[]) => void): number
    on(sigName: "notify::y-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y-align", ...args: any[]): void
    connect(sigName: "notify::y-expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::y-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y-expand", ...args: any[]): void
    connect(sigName: "notify::z-position", callback: (...args: any[]) => void): number
    on(sigName: "notify::z-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::z-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::z-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::z-position", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #MashModel structure contains only private data.
 * @class 
 */
class Model extends Clutter.Actor {

    // Own properties of Mash-0.2.Mash.Model

    static name: string

    // Constructors of Mash-0.2.Mash.Model

    constructor(config?: Model.ConstructorProperties) 
    /**
     * Constructs a new #MashModel. Nothing will be rendered by the
     * model until a #MashData is attached using
     * mash_model_set_data().
     * @constructor 
     * @returns a new #MashModel.
     */
    constructor() 
    /**
     * Constructs a new #MashModel. Nothing will be rendered by the
     * model until a #MashData is attached using
     * mash_model_set_data().
     * @constructor 
     * @returns a new #MashModel.
     */
    static new(): Model
    /**
     * This is a convenience function that creates a new #MashData
     * and immediately loads the data in `filename`. If the load succeeds a
     * new #MashModel will be created for the data. The model has a
     * default white material so that if vertices of the model have any
     * color attributes they will be used directly. The material does not
     * have textures by default so if you want the model to be textured
     * you will need to modify the material.
     * @constructor 
     * @param flags Flags for loading the data.
     * @param filename The name of a PLY file to load.
     * @returns a new #MashModel or %NULL if the load failed.
     */
    static newFromFile(flags: DataFlags, filename: string | null): Model
    _init(config?: Model.ConstructorProperties): void
}

module PlyLoader {

    // Constructor properties interface

    interface ConstructorProperties extends Data.ConstructorProperties {
    }

}

interface PlyLoader {

    // Own properties of Mash-0.2.Mash.PlyLoader

    __gtype__: number

    // Class property signals of Mash-0.2.Mash.PlyLoader

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

class PlyLoader extends Data {

    // Own properties of Mash-0.2.Mash.PlyLoader

    static name: string

    // Constructors of Mash-0.2.Mash.PlyLoader

    constructor(config?: PlyLoader.ConstructorProperties) 
    _init(config?: PlyLoader.ConstructorProperties): void
}

module PointLight {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Clutter.Animatable.ConstructorProperties, Clutter.Container.ConstructorProperties, Clutter.Scriptable.ConstructorProperties, Light.ConstructorProperties {

        // Own constructor properties of Mash-0.2.Mash.PointLight

        constantAttenuation?: number | null
        linearAttenuation?: number | null
        quadraticAttenuation?: number | null
    }

}

interface PointLight extends Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {

    // Own properties of Mash-0.2.Mash.PointLight

    constantAttenuation: number
    linearAttenuation: number
    quadraticAttenuation: number
    __gtype__: number

    // Owm methods of Mash-0.2.Mash.PointLight

    getConstantAttenuation(): number
    getLinearAttenuation(): number
    getQuadraticAttenuation(): number
    /**
     * Sets the constant attenuation value on a light. The light intensity
     * is divided by this value. Setting a higher value will cause the
     * light to appear dimmer.
     * @param attenuation The new value
     */
    setConstantAttenuation(attenuation: number): void
    /**
     * Sets the linear attenuation value on a light. The light intensity
     * is divided by this value multiplied by the distance to the
     * light. Setting a higher value will cause the intensity to dim faster
     * as the vertex moves away from the light.
     * @param attenuation The new value
     */
    setLinearAttenuation(attenuation: number): void
    /**
     * Sets the quadratic attenuation value on a light. The light
     * intensity is divided by this value multiplied by the square of the
     * distance to the light. Setting a higher value will cause the
     * intensity to dim sharply as the vertex moves away from the light.
     * @param attenuation The new value
     */
    setQuadraticAttenuation(attenuation: number): void

    // Conflicting methods

    /**
     * Lowers `actor` to `sibling` level, in the depth ordering.
     * 
     * This function calls the #ClutterContainerIface.lower() virtual function,
     * which has been deprecated. The default implementation will call
     * clutter_actor_set_child_below_sibling().
     * @virtual 
     * @param actor the actor to raise
     * @param sibling the sibling to lower to, or %NULL to lower   to the bottom
     */
    lower(actor: Clutter.Actor, sibling: Clutter.Actor | null): void
    /**
     * Puts `self` below `above`.
     * 
     * Both actors must have the same parent, and the parent must implement
     * the #ClutterContainer interface.
     * 
     * This function calls clutter_container_lower_child() internally.
     * @param above A #ClutterActor to lower below
     */
    lower(above: Clutter.Actor | null): void

    // Overloads of lower

    /**
     * Lowers `actor` to `sibling` level, in the depth ordering.
     * 
     * This function calls the #ClutterContainerIface.lower() virtual function,
     * which has been deprecated. The default implementation will call
     * clutter_actor_set_child_below_sibling().
     * @virtual 
     * @param actor the actor to raise
     * @param sibling the sibling to lower to, or %NULL to lower   to the bottom
     */
    lower(actor: Clutter.Actor, sibling: Clutter.Actor | null): void
    /**
     * Raises `actor` to `sibling` level, in the depth ordering.
     * 
     * This function calls the #ClutterContainerIface.raise() virtual function,
     * which has been deprecated. The default implementation will call
     * clutter_actor_set_child_above_sibling().
     * @virtual 
     * @param actor the actor to raise
     * @param sibling the sibling to raise to, or %NULL to raise   to the top
     */
    raise(actor: Clutter.Actor, sibling: Clutter.Actor | null): void
    /**
     * Puts `self` above `below`.
     * 
     * Both actors must have the same parent, and the parent must implement
     * the #ClutterContainer interface
     * 
     * This function calls clutter_container_raise_child() internally.
     * @param below A #ClutterActor to raise above.
     */
    raise(below: Clutter.Actor | null): void

    // Overloads of raise

    /**
     * Raises `actor` to `sibling` level, in the depth ordering.
     * 
     * This function calls the #ClutterContainerIface.raise() virtual function,
     * which has been deprecated. The default implementation will call
     * clutter_actor_set_child_above_sibling().
     * @virtual 
     * @param actor the actor to raise
     * @param sibling the sibling to raise to, or %NULL to raise   to the top
     */
    raise(actor: Clutter.Actor, sibling: Clutter.Actor | null): void

    // Class property signals of Mash-0.2.Mash.PointLight

    connect(sigName: "notify::constant-attenuation", callback: (...args: any[]) => void): number
    on(sigName: "notify::constant-attenuation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::constant-attenuation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::constant-attenuation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::constant-attenuation", ...args: any[]): void
    connect(sigName: "notify::linear-attenuation", callback: (...args: any[]) => void): number
    on(sigName: "notify::linear-attenuation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::linear-attenuation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::linear-attenuation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::linear-attenuation", ...args: any[]): void
    connect(sigName: "notify::quadratic-attenuation", callback: (...args: any[]) => void): number
    on(sigName: "notify::quadratic-attenuation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::quadratic-attenuation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::quadratic-attenuation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::quadratic-attenuation", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::ambient", callback: (...args: any[]) => void): number
    on(sigName: "notify::ambient", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ambient", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ambient", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ambient", ...args: any[]): void
    connect(sigName: "notify::diffuse", callback: (...args: any[]) => void): number
    on(sigName: "notify::diffuse", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::diffuse", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::diffuse", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::diffuse", ...args: any[]): void
    connect(sigName: "notify::specular", callback: (...args: any[]) => void): number
    on(sigName: "notify::specular", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::specular", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::specular", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::specular", ...args: any[]): void
    connect(sigName: "notify::actions", callback: (...args: any[]) => void): number
    on(sigName: "notify::actions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::actions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::actions", ...args: any[]): void
    connect(sigName: "notify::allocation", callback: (...args: any[]) => void): number
    on(sigName: "notify::allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::allocation", ...args: any[]): void
    connect(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::anchor-gravity", ...args: any[]): void
    connect(sigName: "notify::anchor-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::anchor-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::anchor-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::anchor-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::anchor-x", ...args: any[]): void
    connect(sigName: "notify::anchor-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::anchor-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::anchor-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::anchor-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::anchor-y", ...args: any[]): void
    connect(sigName: "notify::background-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::background-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background-color", ...args: any[]): void
    connect(sigName: "notify::background-color-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::background-color-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background-color-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background-color-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background-color-set", ...args: any[]): void
    connect(sigName: "notify::child-transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-transform", ...args: any[]): void
    connect(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-transform-set", ...args: any[]): void
    connect(sigName: "notify::clip", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip", ...args: any[]): void
    connect(sigName: "notify::clip-rect", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-rect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-rect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-rect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-rect", ...args: any[]): void
    connect(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-to-allocation", ...args: any[]): void
    connect(sigName: "notify::constraints", callback: (...args: any[]) => void): number
    on(sigName: "notify::constraints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::constraints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::constraints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::constraints", ...args: any[]): void
    connect(sigName: "notify::content", callback: (...args: any[]) => void): number
    on(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-box", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-box", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-box", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-box", ...args: any[]): void
    connect(sigName: "notify::content-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-gravity", ...args: any[]): void
    connect(sigName: "notify::content-repeat", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-repeat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-repeat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-repeat", ...args: any[]): void
    connect(sigName: "notify::depth", callback: (...args: any[]) => void): number
    on(sigName: "notify::depth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::depth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::depth", ...args: any[]): void
    connect(sigName: "notify::effect", callback: (...args: any[]) => void): number
    on(sigName: "notify::effect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::effect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::effect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::effect", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::first-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::first-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-position-set", ...args: any[]): void
    connect(sigName: "notify::fixed-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-x", ...args: any[]): void
    connect(sigName: "notify::fixed-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-y", ...args: any[]): void
    connect(sigName: "notify::has-clip", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-clip", ...args: any[]): void
    connect(sigName: "notify::has-pointer", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-pointer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-pointer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-pointer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-pointer", ...args: any[]): void
    connect(sigName: "notify::height", callback: (...args: any[]) => void): number
    on(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::last-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::last-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (...args: any[]) => void): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::magnification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::magnification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::magnification-filter", ...args: any[]): void
    connect(sigName: "notify::mapped", callback: (...args: any[]) => void): number
    on(sigName: "notify::mapped", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mapped", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mapped", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::min-height", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-height", ...args: any[]): void
    connect(sigName: "notify::min-height-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-height-set", ...args: any[]): void
    connect(sigName: "notify::min-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-width", ...args: any[]): void
    connect(sigName: "notify::min-width-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-width-set", ...args: any[]): void
    connect(sigName: "notify::minification-filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::minification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::minification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::minification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::minification-filter", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::natural-height", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-height", ...args: any[]): void
    connect(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-height-set", ...args: any[]): void
    connect(sigName: "notify::natural-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-width", ...args: any[]): void
    connect(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-width-set", ...args: any[]): void
    connect(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): number
    on(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::offscreen-redirect", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::pivot-point", callback: (...args: any[]) => void): number
    on(sigName: "notify::pivot-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pivot-point", ...args: any[]): void
    connect(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pivot-point-z", ...args: any[]): void
    connect(sigName: "notify::position", callback: (...args: any[]) => void): number
    on(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::reactive", callback: (...args: any[]) => void): number
    on(sigName: "notify::reactive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::reactive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::reactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::reactive", ...args: any[]): void
    connect(sigName: "notify::realized", callback: (...args: any[]) => void): number
    on(sigName: "notify::realized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::realized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::realized", ...args: any[]): void
    connect(sigName: "notify::request-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::request-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::request-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::request-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::request-mode", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-x", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-y", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-x", ...args: any[]): void
    connect(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-y", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-z-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-center-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-center-x", ...args: any[]): void
    connect(sigName: "notify::scale-center-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-center-y", ...args: any[]): void
    connect(sigName: "notify::scale-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-x", ...args: any[]): void
    connect(sigName: "notify::scale-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-y", ...args: any[]): void
    connect(sigName: "notify::scale-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-z", ...args: any[]): void
    connect(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::show-on-set-parent", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::text-direction", callback: (...args: any[]) => void): number
    on(sigName: "notify::text-direction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::text-direction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::text-direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::text-direction", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::transform-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform-set", ...args: any[]): void
    connect(sigName: "notify::translation-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-x", ...args: any[]): void
    connect(sigName: "notify::translation-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-y", ...args: any[]): void
    connect(sigName: "notify::translation-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-z", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: (...args: any[]) => void): number
    on(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (...args: any[]) => void): number
    on(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::x-align", callback: (...args: any[]) => void): number
    on(sigName: "notify::x-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x-align", ...args: any[]): void
    connect(sigName: "notify::x-expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::x-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x-expand", ...args: any[]): void
    connect(sigName: "notify::y", callback: (...args: any[]) => void): number
    on(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::y-align", callback: (...args: any[]) => void): number
    on(sigName: "notify::y-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y-align", ...args: any[]): void
    connect(sigName: "notify::y-expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::y-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y-expand", ...args: any[]): void
    connect(sigName: "notify::z-position", callback: (...args: any[]) => void): number
    on(sigName: "notify::z-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::z-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::z-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::z-position", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #MashLightClass structure contains only private data.
 * @class 
 */
class PointLight extends Light {

    // Own properties of Mash-0.2.Mash.PointLight

    static name: string

    // Constructors of Mash-0.2.Mash.PointLight

    constructor(config?: PointLight.ConstructorProperties) 
    /**
     * Constructs a new #MashPointLight.
     * @constructor 
     * @returns the new light.
     */
    constructor() 
    /**
     * Constructs a new #MashPointLight.
     * @constructor 
     * @returns the new light.
     */
    static new(): PointLight
    _init(config?: PointLight.ConstructorProperties): void
}

module SpotLight {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Clutter.Animatable.ConstructorProperties, Clutter.Container.ConstructorProperties, Clutter.Scriptable.ConstructorProperties, PointLight.ConstructorProperties {

        // Own constructor properties of Mash-0.2.Mash.SpotLight

        spotCutoff?: number | null
        spotExponent?: number | null
    }

}

interface SpotLight extends Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {

    // Own properties of Mash-0.2.Mash.SpotLight

    spotCutoff: number
    spotExponent: number
    __gtype__: number

    // Owm methods of Mash-0.2.Mash.SpotLight

    getSpotCutoff(): number
    getSpotExponent(): number
    /**
     * Sets the spot cut off value on a light. This is an angle in degrees
     * which defines the shape of the cone of light emitted from the
     * light. It should be within the range 0° to 90°
     * @param cutoff The new value
     */
    setSpotCutoff(cutoff: number): void
    /**
     * Sets the spot exponent value on a light. The light intensity is
     * multiplied by the angle between the light direction and the vector
     * to the vertex raised to the power of the exponent. A higher
     * exponent value makes the cone of the light appear smaller.
     * @param exponent The new value
     */
    setSpotExponent(exponent: number): void

    // Conflicting methods

    /**
     * Lowers `actor` to `sibling` level, in the depth ordering.
     * 
     * This function calls the #ClutterContainerIface.lower() virtual function,
     * which has been deprecated. The default implementation will call
     * clutter_actor_set_child_below_sibling().
     * @virtual 
     * @param actor the actor to raise
     * @param sibling the sibling to lower to, or %NULL to lower   to the bottom
     */
    lower(actor: Clutter.Actor, sibling: Clutter.Actor | null): void
    /**
     * Puts `self` below `above`.
     * 
     * Both actors must have the same parent, and the parent must implement
     * the #ClutterContainer interface.
     * 
     * This function calls clutter_container_lower_child() internally.
     * @param above A #ClutterActor to lower below
     */
    lower(above: Clutter.Actor | null): void

    // Overloads of lower

    /**
     * Lowers `actor` to `sibling` level, in the depth ordering.
     * 
     * This function calls the #ClutterContainerIface.lower() virtual function,
     * which has been deprecated. The default implementation will call
     * clutter_actor_set_child_below_sibling().
     * @virtual 
     * @param actor the actor to raise
     * @param sibling the sibling to lower to, or %NULL to lower   to the bottom
     */
    lower(actor: Clutter.Actor, sibling: Clutter.Actor | null): void
    /**
     * Raises `actor` to `sibling` level, in the depth ordering.
     * 
     * This function calls the #ClutterContainerIface.raise() virtual function,
     * which has been deprecated. The default implementation will call
     * clutter_actor_set_child_above_sibling().
     * @virtual 
     * @param actor the actor to raise
     * @param sibling the sibling to raise to, or %NULL to raise   to the top
     */
    raise(actor: Clutter.Actor, sibling: Clutter.Actor | null): void
    /**
     * Puts `self` above `below`.
     * 
     * Both actors must have the same parent, and the parent must implement
     * the #ClutterContainer interface
     * 
     * This function calls clutter_container_raise_child() internally.
     * @param below A #ClutterActor to raise above.
     */
    raise(below: Clutter.Actor | null): void

    // Overloads of raise

    /**
     * Raises `actor` to `sibling` level, in the depth ordering.
     * 
     * This function calls the #ClutterContainerIface.raise() virtual function,
     * which has been deprecated. The default implementation will call
     * clutter_actor_set_child_above_sibling().
     * @virtual 
     * @param actor the actor to raise
     * @param sibling the sibling to raise to, or %NULL to raise   to the top
     */
    raise(actor: Clutter.Actor, sibling: Clutter.Actor | null): void

    // Class property signals of Mash-0.2.Mash.SpotLight

    connect(sigName: "notify::spot-cutoff", callback: (...args: any[]) => void): number
    on(sigName: "notify::spot-cutoff", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::spot-cutoff", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::spot-cutoff", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::spot-cutoff", ...args: any[]): void
    connect(sigName: "notify::spot-exponent", callback: (...args: any[]) => void): number
    on(sigName: "notify::spot-exponent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::spot-exponent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::spot-exponent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::spot-exponent", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::constant-attenuation", callback: (...args: any[]) => void): number
    on(sigName: "notify::constant-attenuation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::constant-attenuation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::constant-attenuation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::constant-attenuation", ...args: any[]): void
    connect(sigName: "notify::linear-attenuation", callback: (...args: any[]) => void): number
    on(sigName: "notify::linear-attenuation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::linear-attenuation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::linear-attenuation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::linear-attenuation", ...args: any[]): void
    connect(sigName: "notify::quadratic-attenuation", callback: (...args: any[]) => void): number
    on(sigName: "notify::quadratic-attenuation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::quadratic-attenuation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::quadratic-attenuation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::quadratic-attenuation", ...args: any[]): void
    connect(sigName: "notify::ambient", callback: (...args: any[]) => void): number
    on(sigName: "notify::ambient", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ambient", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ambient", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ambient", ...args: any[]): void
    connect(sigName: "notify::diffuse", callback: (...args: any[]) => void): number
    on(sigName: "notify::diffuse", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::diffuse", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::diffuse", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::diffuse", ...args: any[]): void
    connect(sigName: "notify::specular", callback: (...args: any[]) => void): number
    on(sigName: "notify::specular", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::specular", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::specular", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::specular", ...args: any[]): void
    connect(sigName: "notify::actions", callback: (...args: any[]) => void): number
    on(sigName: "notify::actions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::actions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::actions", ...args: any[]): void
    connect(sigName: "notify::allocation", callback: (...args: any[]) => void): number
    on(sigName: "notify::allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::allocation", ...args: any[]): void
    connect(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::anchor-gravity", ...args: any[]): void
    connect(sigName: "notify::anchor-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::anchor-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::anchor-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::anchor-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::anchor-x", ...args: any[]): void
    connect(sigName: "notify::anchor-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::anchor-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::anchor-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::anchor-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::anchor-y", ...args: any[]): void
    connect(sigName: "notify::background-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::background-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background-color", ...args: any[]): void
    connect(sigName: "notify::background-color-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::background-color-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background-color-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background-color-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background-color-set", ...args: any[]): void
    connect(sigName: "notify::child-transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-transform", ...args: any[]): void
    connect(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-transform-set", ...args: any[]): void
    connect(sigName: "notify::clip", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip", ...args: any[]): void
    connect(sigName: "notify::clip-rect", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-rect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-rect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-rect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-rect", ...args: any[]): void
    connect(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-to-allocation", ...args: any[]): void
    connect(sigName: "notify::constraints", callback: (...args: any[]) => void): number
    on(sigName: "notify::constraints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::constraints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::constraints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::constraints", ...args: any[]): void
    connect(sigName: "notify::content", callback: (...args: any[]) => void): number
    on(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-box", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-box", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-box", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-box", ...args: any[]): void
    connect(sigName: "notify::content-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-gravity", ...args: any[]): void
    connect(sigName: "notify::content-repeat", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-repeat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-repeat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-repeat", ...args: any[]): void
    connect(sigName: "notify::depth", callback: (...args: any[]) => void): number
    on(sigName: "notify::depth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::depth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::depth", ...args: any[]): void
    connect(sigName: "notify::effect", callback: (...args: any[]) => void): number
    on(sigName: "notify::effect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::effect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::effect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::effect", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::first-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::first-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-position-set", ...args: any[]): void
    connect(sigName: "notify::fixed-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-x", ...args: any[]): void
    connect(sigName: "notify::fixed-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-y", ...args: any[]): void
    connect(sigName: "notify::has-clip", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-clip", ...args: any[]): void
    connect(sigName: "notify::has-pointer", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-pointer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-pointer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-pointer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-pointer", ...args: any[]): void
    connect(sigName: "notify::height", callback: (...args: any[]) => void): number
    on(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::last-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::last-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (...args: any[]) => void): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::magnification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::magnification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::magnification-filter", ...args: any[]): void
    connect(sigName: "notify::mapped", callback: (...args: any[]) => void): number
    on(sigName: "notify::mapped", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mapped", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mapped", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::min-height", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-height", ...args: any[]): void
    connect(sigName: "notify::min-height-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-height-set", ...args: any[]): void
    connect(sigName: "notify::min-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-width", ...args: any[]): void
    connect(sigName: "notify::min-width-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-width-set", ...args: any[]): void
    connect(sigName: "notify::minification-filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::minification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::minification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::minification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::minification-filter", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::natural-height", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-height", ...args: any[]): void
    connect(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-height-set", ...args: any[]): void
    connect(sigName: "notify::natural-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-width", ...args: any[]): void
    connect(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-width-set", ...args: any[]): void
    connect(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): number
    on(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::offscreen-redirect", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::pivot-point", callback: (...args: any[]) => void): number
    on(sigName: "notify::pivot-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pivot-point", ...args: any[]): void
    connect(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pivot-point-z", ...args: any[]): void
    connect(sigName: "notify::position", callback: (...args: any[]) => void): number
    on(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::reactive", callback: (...args: any[]) => void): number
    on(sigName: "notify::reactive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::reactive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::reactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::reactive", ...args: any[]): void
    connect(sigName: "notify::realized", callback: (...args: any[]) => void): number
    on(sigName: "notify::realized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::realized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::realized", ...args: any[]): void
    connect(sigName: "notify::request-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::request-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::request-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::request-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::request-mode", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-x", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-y", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-x", ...args: any[]): void
    connect(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-y", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-z-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-center-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-center-x", ...args: any[]): void
    connect(sigName: "notify::scale-center-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-center-y", ...args: any[]): void
    connect(sigName: "notify::scale-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-x", ...args: any[]): void
    connect(sigName: "notify::scale-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-y", ...args: any[]): void
    connect(sigName: "notify::scale-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-z", ...args: any[]): void
    connect(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::show-on-set-parent", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::text-direction", callback: (...args: any[]) => void): number
    on(sigName: "notify::text-direction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::text-direction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::text-direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::text-direction", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::transform-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform-set", ...args: any[]): void
    connect(sigName: "notify::translation-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-x", ...args: any[]): void
    connect(sigName: "notify::translation-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-y", ...args: any[]): void
    connect(sigName: "notify::translation-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-z", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: (...args: any[]) => void): number
    on(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (...args: any[]) => void): number
    on(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::x-align", callback: (...args: any[]) => void): number
    on(sigName: "notify::x-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x-align", ...args: any[]): void
    connect(sigName: "notify::x-expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::x-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x-expand", ...args: any[]): void
    connect(sigName: "notify::y", callback: (...args: any[]) => void): number
    on(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::y-align", callback: (...args: any[]) => void): number
    on(sigName: "notify::y-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y-align", ...args: any[]): void
    connect(sigName: "notify::y-expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::y-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y-expand", ...args: any[]): void
    connect(sigName: "notify::z-position", callback: (...args: any[]) => void): number
    on(sigName: "notify::z-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::z-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::z-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::z-position", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #MashSpotLight structure contains only private data.
 * @class 
 */
class SpotLight extends PointLight {

    // Own properties of Mash-0.2.Mash.SpotLight

    static name: string

    // Constructors of Mash-0.2.Mash.SpotLight

    constructor(config?: SpotLight.ConstructorProperties) 
    /**
     * Constructs a new #MashSpotLight.
     * @constructor 
     * @returns the new light.
     */
    constructor() 
    /**
     * Constructs a new #MashSpotLight.
     * @constructor 
     * @returns the new light.
     */
    static new(): SpotLight
    _init(config?: SpotLight.ConstructorProperties): void
}

interface DataClass {
}

/**
 * The #MashDataClass structure contains only private data.
 * @record 
 */
abstract class DataClass {

    // Own properties of Mash-0.2.Mash.DataClass

    static name: string
}

interface DataLoaderClass {

    // Own fields of Mash-0.2.Mash.DataLoaderClass

    load: (dataLoader: DataLoader, flags: DataFlags, filename: string | null) => boolean
    getData: (dataLoader: DataLoader, loaderData: DataLoaderData) => void
}

abstract class DataLoaderClass {

    // Own properties of Mash-0.2.Mash.DataLoaderClass

    static name: string
}

interface DataLoaderData {

    // Own fields of Mash-0.2.Mash.DataLoaderData

    verticesVbo: Cogl.Handle
    indices: Cogl.Handle
    minIndex: number
    maxIndex: number
    nTriangles: number
    minVertex: Clutter.Vertex
    maxVertex: Clutter.Vertex
}

/**
 * The #MashDataLoaderData structure contains the loaded data.
 * @record 
 */
class DataLoaderData {

    // Own properties of Mash-0.2.Mash.DataLoaderData

    static name: string
}

interface DataLoaderPrivate {
}

class DataLoaderPrivate {

    // Own properties of Mash-0.2.Mash.DataLoaderPrivate

    static name: string
}

interface DataPrivate {
}

class DataPrivate {

    // Own properties of Mash-0.2.Mash.DataPrivate

    static name: string
}

interface DirectionalLightClass {
}

abstract class DirectionalLightClass {

    // Own properties of Mash-0.2.Mash.DirectionalLightClass

    static name: string
}

interface DirectionalLightPrivate {
}

class DirectionalLightPrivate {

    // Own properties of Mash-0.2.Mash.DirectionalLightPrivate

    static name: string
}

interface LightClass {

    // Own fields of Mash-0.2.Mash.LightClass

    generateShader: (light: Light, uniformSource: GLib.String, mainSource: GLib.String) => void
    updateUniforms: (light: Light, program: Cogl.Handle) => void
}

abstract class LightClass {

    // Own properties of Mash-0.2.Mash.LightClass

    static name: string
}

interface LightPrivate {
}

class LightPrivate {

    // Own properties of Mash-0.2.Mash.LightPrivate

    static name: string
}

interface LightSetClass {
}

/**
 * The #MashLightSetClass structure contains only private data.
 * @record 
 */
abstract class LightSetClass {

    // Own properties of Mash-0.2.Mash.LightSetClass

    static name: string
}

interface LightSetPrivate {
}

class LightSetPrivate {

    // Own properties of Mash-0.2.Mash.LightSetPrivate

    static name: string
}

interface ModelClass {
}

/**
 * The #MashModelClass structure contains only private data.
 * @record 
 */
abstract class ModelClass {

    // Own properties of Mash-0.2.Mash.ModelClass

    static name: string
}

interface ModelPrivate {
}

class ModelPrivate {

    // Own properties of Mash-0.2.Mash.ModelPrivate

    static name: string
}

interface PlyLoaderClass {
}

abstract class PlyLoaderClass {

    // Own properties of Mash-0.2.Mash.PlyLoaderClass

    static name: string
}

interface PlyLoaderPrivate {
}

class PlyLoaderPrivate {

    // Own properties of Mash-0.2.Mash.PlyLoaderPrivate

    static name: string
}

interface PointLightClass {
}

/**
 * The #MashPointLightClass structure contains only private data.
 * @record 
 */
abstract class PointLightClass {

    // Own properties of Mash-0.2.Mash.PointLightClass

    static name: string
}

interface PointLightPrivate {
}

class PointLightPrivate {

    // Own properties of Mash-0.2.Mash.PointLightPrivate

    static name: string
}

interface SpotLightClass {
}

/**
 * The #MashSpotLightClass structure contains only private data.
 * @record 
 */
abstract class SpotLightClass {

    // Own properties of Mash-0.2.Mash.SpotLightClass

    static name: string
}

interface SpotLightPrivate {
}

class SpotLightPrivate {

    // Own properties of Mash-0.2.Mash.SpotLightPrivate

    static name: string
}

}

export default Mash;