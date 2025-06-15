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
import type freetype2 from '@girs/freetype2-2.0';
import type fontconfig from '@girs/fontconfig-2.0';
import type cairo from 'cairo';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type PangoFT2 from '@girs/pangoft2-1.0';
import type PangoFc from '@girs/pangofc-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Json from '@girs/json-1.0';
import type GL from '@girs/gl-1.0';
import type CoglPango from '@girs/coglpango-1.0';
import type Cogl from '@girs/cogl-1.0';
import type Clutter from '@girs/clutter-1.0';
import type Atk from '@girs/atk-1.0';

export namespace Mash {
    /**
     * Mash-0.2
     */

    /**
     * Error enumeration for #MashData
     */

    /**
     * Error enumeration for #MashData
     */
    export namespace DataError {
        export const $gtype: GObject.GType<DataError>;
    }

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
    export namespace DataFlags {
        export const $gtype: GObject.GType<DataFlags>;
    }

    enum DataFlags {
        NONE,
        NEGATE_X,
        NEGATE_Y,
        NEGATE_Z,
    }
    namespace Data {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * The #MashData structure contains only private data.
     */
    class Data extends GObject.Object {
        static $gtype: GObject.GType<Data>;

        // Constructors

        constructor(properties?: Partial<Data.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Data;

        // Signals

        connect<K extends keyof Data.SignalSignatures>(signal: K, callback: Data.SignalSignatures[K]): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Data.SignalSignatures>(signal: K, callback: Data.SignalSignatures[K]): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Data.SignalSignatures>(
            signal: K,
            ...args: Data.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static error_quark(): GLib.Quark;

        // Methods

        /**
         * Gets the bounding cuboid of the vertices in `self`. The cuboid is
         * represented by two vertices representing the minimum and maximum
         * extents. The x, y and z components of `min_vertex` will contain the
         * minimum x, y and z values of all the vertices and `max_vertex` will
         * contain the maximum. The extents of the model are cached so it is
         * cheap to call this function.
         * @param min_vertex A location to return the minimum vertex
         * @param max_vertex A location to return the maximum vertex
         */
        get_extents(min_vertex: Clutter.Vertex, max_vertex: Clutter.Vertex): void;
        /**
         * Loads the data from the file called `filename` into `self`. The
         * model can then be rendered using mash_data_render(). If
         * there is an error loading the file it will return %FALSE and `error`
         * will be set to a GError instance.
         * @param flags Flags used to specify load-time modifications to the data
         * @param filename The name of a file to load
         * @returns %TRUE if the load succeeded or %FALSE otherwise.
         */
        load(flags: DataFlags | null, filename: string): boolean;
        /**
         * Renders the data contained in the model to the Clutter
         * scene. The current Cogl source material will be used to affect the
         * appearance of the model. This function is not usually called
         * directly but instead the #MashData instance is added to a
         * #MashModel and this function will be automatically called by
         * the paint method of the model.
         */
        render(): void;
    }

    namespace DataLoader {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * The #MashDataLoader structure contains only private data.
     */
    abstract class DataLoader extends GObject.Object {
        static $gtype: GObject.GType<DataLoader>;

        // Constructors

        constructor(properties?: Partial<DataLoader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof DataLoader.SignalSignatures>(
            signal: K,
            callback: DataLoader.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DataLoader.SignalSignatures>(
            signal: K,
            callback: DataLoader.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DataLoader.SignalSignatures>(
            signal: K,
            ...args: DataLoader.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_get_data(loader_data: DataLoaderData): void;
        /**
         * Obtains the loaded data after calling mash_data_loader_load().
         * This function is not usually called by applications.
         * @param flags
         * @param filename
         */
        vfunc_load(flags: DataFlags, filename: string): boolean;

        // Methods

        get_data(loader_data: DataLoaderData): void;
        // Conflicted with GObject.Object.get_data
        get_data(...args: never[]): any;
        /**
         * Obtains the loaded data after calling mash_data_loader_load().
         * This function is not usually called by applications.
         * @param flags
         * @param filename
         */
        load(flags: DataFlags | null, filename: string): boolean;
    }

    namespace DirectionalLight {
        // Signal signatures
        interface SignalSignatures extends Light.SignalSignatures {
            'notify::ambient': GObject.Object.Notify;
            'notify::diffuse': GObject.Object.Notify;
            'notify::specular': GObject.Object.Notify;
            'notify::actions': GObject.Object.Notify;
            'notify::allocation': GObject.Object.Notify;
            'notify::anchor-gravity': GObject.Object.Notify;
            'notify::anchor-gravity': GObject.Object.Notify;
            'notify::anchor-x': GObject.Object.Notify;
            'notify::anchor-x': GObject.Object.Notify;
            'notify::anchor-y': GObject.Object.Notify;
            'notify::anchor-y': GObject.Object.Notify;
            'notify::background-color': GObject.Object.Notify;
            'notify::background-color': GObject.Object.Notify;
            'notify::background-color-set': GObject.Object.Notify;
            'notify::background-color-set': GObject.Object.Notify;
            'notify::child-transform': GObject.Object.Notify;
            'notify::child-transform': GObject.Object.Notify;
            'notify::child-transform-set': GObject.Object.Notify;
            'notify::child-transform-set': GObject.Object.Notify;
            'notify::clip': GObject.Object.Notify;
            'notify::clip-rect': GObject.Object.Notify;
            'notify::clip-rect': GObject.Object.Notify;
            'notify::clip-to-allocation': GObject.Object.Notify;
            'notify::clip-to-allocation': GObject.Object.Notify;
            'notify::constraints': GObject.Object.Notify;
            'notify::content': GObject.Object.Notify;
            'notify::content-box': GObject.Object.Notify;
            'notify::content-box': GObject.Object.Notify;
            'notify::content-gravity': GObject.Object.Notify;
            'notify::content-gravity': GObject.Object.Notify;
            'notify::content-repeat': GObject.Object.Notify;
            'notify::content-repeat': GObject.Object.Notify;
            'notify::depth': GObject.Object.Notify;
            'notify::effect': GObject.Object.Notify;
            'notify::first-child': GObject.Object.Notify;
            'notify::first-child': GObject.Object.Notify;
            'notify::fixed-position-set': GObject.Object.Notify;
            'notify::fixed-position-set': GObject.Object.Notify;
            'notify::fixed-x': GObject.Object.Notify;
            'notify::fixed-x': GObject.Object.Notify;
            'notify::fixed-y': GObject.Object.Notify;
            'notify::fixed-y': GObject.Object.Notify;
            'notify::has-clip': GObject.Object.Notify;
            'notify::has-clip': GObject.Object.Notify;
            'notify::has-pointer': GObject.Object.Notify;
            'notify::has-pointer': GObject.Object.Notify;
            'notify::height': GObject.Object.Notify;
            'notify::last-child': GObject.Object.Notify;
            'notify::last-child': GObject.Object.Notify;
            'notify::layout-manager': GObject.Object.Notify;
            'notify::layout-manager': GObject.Object.Notify;
            'notify::magnification-filter': GObject.Object.Notify;
            'notify::magnification-filter': GObject.Object.Notify;
            'notify::mapped': GObject.Object.Notify;
            'notify::margin-bottom': GObject.Object.Notify;
            'notify::margin-bottom': GObject.Object.Notify;
            'notify::margin-left': GObject.Object.Notify;
            'notify::margin-left': GObject.Object.Notify;
            'notify::margin-right': GObject.Object.Notify;
            'notify::margin-right': GObject.Object.Notify;
            'notify::margin-top': GObject.Object.Notify;
            'notify::margin-top': GObject.Object.Notify;
            'notify::min-height': GObject.Object.Notify;
            'notify::min-height': GObject.Object.Notify;
            'notify::min-height-set': GObject.Object.Notify;
            'notify::min-height-set': GObject.Object.Notify;
            'notify::min-width': GObject.Object.Notify;
            'notify::min-width': GObject.Object.Notify;
            'notify::min-width-set': GObject.Object.Notify;
            'notify::min-width-set': GObject.Object.Notify;
            'notify::minification-filter': GObject.Object.Notify;
            'notify::minification-filter': GObject.Object.Notify;
            'notify::name': GObject.Object.Notify;
            'notify::natural-height': GObject.Object.Notify;
            'notify::natural-height': GObject.Object.Notify;
            'notify::natural-height-set': GObject.Object.Notify;
            'notify::natural-height-set': GObject.Object.Notify;
            'notify::natural-width': GObject.Object.Notify;
            'notify::natural-width': GObject.Object.Notify;
            'notify::natural-width-set': GObject.Object.Notify;
            'notify::natural-width-set': GObject.Object.Notify;
            'notify::offscreen-redirect': GObject.Object.Notify;
            'notify::offscreen-redirect': GObject.Object.Notify;
            'notify::opacity': GObject.Object.Notify;
            'notify::pivot-point': GObject.Object.Notify;
            'notify::pivot-point': GObject.Object.Notify;
            'notify::pivot-point-z': GObject.Object.Notify;
            'notify::pivot-point-z': GObject.Object.Notify;
            'notify::position': GObject.Object.Notify;
            'notify::reactive': GObject.Object.Notify;
            'notify::realized': GObject.Object.Notify;
            'notify::request-mode': GObject.Object.Notify;
            'notify::request-mode': GObject.Object.Notify;
            'notify::rotation-angle-x': GObject.Object.Notify;
            'notify::rotation-angle-x': GObject.Object.Notify;
            'notify::rotation-angle-y': GObject.Object.Notify;
            'notify::rotation-angle-y': GObject.Object.Notify;
            'notify::rotation-angle-z': GObject.Object.Notify;
            'notify::rotation-angle-z': GObject.Object.Notify;
            'notify::rotation-center-x': GObject.Object.Notify;
            'notify::rotation-center-x': GObject.Object.Notify;
            'notify::rotation-center-y': GObject.Object.Notify;
            'notify::rotation-center-y': GObject.Object.Notify;
            'notify::rotation-center-z': GObject.Object.Notify;
            'notify::rotation-center-z': GObject.Object.Notify;
            'notify::rotation-center-z-gravity': GObject.Object.Notify;
            'notify::rotation-center-zgravity': GObject.Object.Notify;
            'notify::scale-center-x': GObject.Object.Notify;
            'notify::scale-center-x': GObject.Object.Notify;
            'notify::scale-center-y': GObject.Object.Notify;
            'notify::scale-center-y': GObject.Object.Notify;
            'notify::scale-gravity': GObject.Object.Notify;
            'notify::scale-gravity': GObject.Object.Notify;
            'notify::scale-x': GObject.Object.Notify;
            'notify::scale-x': GObject.Object.Notify;
            'notify::scale-y': GObject.Object.Notify;
            'notify::scale-y': GObject.Object.Notify;
            'notify::scale-z': GObject.Object.Notify;
            'notify::scale-z': GObject.Object.Notify;
            'notify::show-on-set-parent': GObject.Object.Notify;
            'notify::show-on-set-parent': GObject.Object.Notify;
            'notify::size': GObject.Object.Notify;
            'notify::text-direction': GObject.Object.Notify;
            'notify::text-direction': GObject.Object.Notify;
            'notify::transform': GObject.Object.Notify;
            'notify::transform-set': GObject.Object.Notify;
            'notify::transform-set': GObject.Object.Notify;
            'notify::translation-x': GObject.Object.Notify;
            'notify::translation-x': GObject.Object.Notify;
            'notify::translation-y': GObject.Object.Notify;
            'notify::translation-y': GObject.Object.Notify;
            'notify::translation-z': GObject.Object.Notify;
            'notify::translation-z': GObject.Object.Notify;
            'notify::visible': GObject.Object.Notify;
            'notify::width': GObject.Object.Notify;
            'notify::x': GObject.Object.Notify;
            'notify::x-align': GObject.Object.Notify;
            'notify::x-align': GObject.Object.Notify;
            'notify::x-expand': GObject.Object.Notify;
            'notify::x-expand': GObject.Object.Notify;
            'notify::y': GObject.Object.Notify;
            'notify::y-align': GObject.Object.Notify;
            'notify::y-align': GObject.Object.Notify;
            'notify::y-expand': GObject.Object.Notify;
            'notify::y-expand': GObject.Object.Notify;
            'notify::z-position': GObject.Object.Notify;
            'notify::z-position': GObject.Object.Notify;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Light.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Clutter.Animatable.ConstructorProps,
                Clutter.Container.ConstructorProps,
                Clutter.Scriptable.ConstructorProps {}
    }

    /**
     * The #MashDirectionalLight structure contains only private data.
     */
    class DirectionalLight
        extends Light
        implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable
    {
        static $gtype: GObject.GType<DirectionalLight>;

        // Constructors

        constructor(properties?: Partial<DirectionalLight.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DirectionalLight;

        // Signals

        connect<K extends keyof DirectionalLight.SignalSignatures>(
            signal: K,
            callback: DirectionalLight.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DirectionalLight.SignalSignatures>(
            signal: K,
            callback: DirectionalLight.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DirectionalLight.SignalSignatures>(
            signal: K,
            ...args: DirectionalLight.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Inherited methods
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
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
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
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
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
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
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
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

    namespace Light {
        // Signal signatures
        interface SignalSignatures extends Clutter.Actor.SignalSignatures {
            'notify::ambient': GObject.Object.Notify;
            'notify::diffuse': GObject.Object.Notify;
            'notify::specular': GObject.Object.Notify;
            'notify::actions': GObject.Object.Notify;
            'notify::allocation': GObject.Object.Notify;
            'notify::anchor-gravity': GObject.Object.Notify;
            'notify::anchor-gravity': GObject.Object.Notify;
            'notify::anchor-x': GObject.Object.Notify;
            'notify::anchor-x': GObject.Object.Notify;
            'notify::anchor-y': GObject.Object.Notify;
            'notify::anchor-y': GObject.Object.Notify;
            'notify::background-color': GObject.Object.Notify;
            'notify::background-color': GObject.Object.Notify;
            'notify::background-color-set': GObject.Object.Notify;
            'notify::background-color-set': GObject.Object.Notify;
            'notify::child-transform': GObject.Object.Notify;
            'notify::child-transform': GObject.Object.Notify;
            'notify::child-transform-set': GObject.Object.Notify;
            'notify::child-transform-set': GObject.Object.Notify;
            'notify::clip': GObject.Object.Notify;
            'notify::clip-rect': GObject.Object.Notify;
            'notify::clip-rect': GObject.Object.Notify;
            'notify::clip-to-allocation': GObject.Object.Notify;
            'notify::clip-to-allocation': GObject.Object.Notify;
            'notify::constraints': GObject.Object.Notify;
            'notify::content': GObject.Object.Notify;
            'notify::content-box': GObject.Object.Notify;
            'notify::content-box': GObject.Object.Notify;
            'notify::content-gravity': GObject.Object.Notify;
            'notify::content-gravity': GObject.Object.Notify;
            'notify::content-repeat': GObject.Object.Notify;
            'notify::content-repeat': GObject.Object.Notify;
            'notify::depth': GObject.Object.Notify;
            'notify::effect': GObject.Object.Notify;
            'notify::first-child': GObject.Object.Notify;
            'notify::first-child': GObject.Object.Notify;
            'notify::fixed-position-set': GObject.Object.Notify;
            'notify::fixed-position-set': GObject.Object.Notify;
            'notify::fixed-x': GObject.Object.Notify;
            'notify::fixed-x': GObject.Object.Notify;
            'notify::fixed-y': GObject.Object.Notify;
            'notify::fixed-y': GObject.Object.Notify;
            'notify::has-clip': GObject.Object.Notify;
            'notify::has-clip': GObject.Object.Notify;
            'notify::has-pointer': GObject.Object.Notify;
            'notify::has-pointer': GObject.Object.Notify;
            'notify::height': GObject.Object.Notify;
            'notify::last-child': GObject.Object.Notify;
            'notify::last-child': GObject.Object.Notify;
            'notify::layout-manager': GObject.Object.Notify;
            'notify::layout-manager': GObject.Object.Notify;
            'notify::magnification-filter': GObject.Object.Notify;
            'notify::magnification-filter': GObject.Object.Notify;
            'notify::mapped': GObject.Object.Notify;
            'notify::margin-bottom': GObject.Object.Notify;
            'notify::margin-bottom': GObject.Object.Notify;
            'notify::margin-left': GObject.Object.Notify;
            'notify::margin-left': GObject.Object.Notify;
            'notify::margin-right': GObject.Object.Notify;
            'notify::margin-right': GObject.Object.Notify;
            'notify::margin-top': GObject.Object.Notify;
            'notify::margin-top': GObject.Object.Notify;
            'notify::min-height': GObject.Object.Notify;
            'notify::min-height': GObject.Object.Notify;
            'notify::min-height-set': GObject.Object.Notify;
            'notify::min-height-set': GObject.Object.Notify;
            'notify::min-width': GObject.Object.Notify;
            'notify::min-width': GObject.Object.Notify;
            'notify::min-width-set': GObject.Object.Notify;
            'notify::min-width-set': GObject.Object.Notify;
            'notify::minification-filter': GObject.Object.Notify;
            'notify::minification-filter': GObject.Object.Notify;
            'notify::name': GObject.Object.Notify;
            'notify::natural-height': GObject.Object.Notify;
            'notify::natural-height': GObject.Object.Notify;
            'notify::natural-height-set': GObject.Object.Notify;
            'notify::natural-height-set': GObject.Object.Notify;
            'notify::natural-width': GObject.Object.Notify;
            'notify::natural-width': GObject.Object.Notify;
            'notify::natural-width-set': GObject.Object.Notify;
            'notify::natural-width-set': GObject.Object.Notify;
            'notify::offscreen-redirect': GObject.Object.Notify;
            'notify::offscreen-redirect': GObject.Object.Notify;
            'notify::opacity': GObject.Object.Notify;
            'notify::pivot-point': GObject.Object.Notify;
            'notify::pivot-point': GObject.Object.Notify;
            'notify::pivot-point-z': GObject.Object.Notify;
            'notify::pivot-point-z': GObject.Object.Notify;
            'notify::position': GObject.Object.Notify;
            'notify::reactive': GObject.Object.Notify;
            'notify::realized': GObject.Object.Notify;
            'notify::request-mode': GObject.Object.Notify;
            'notify::request-mode': GObject.Object.Notify;
            'notify::rotation-angle-x': GObject.Object.Notify;
            'notify::rotation-angle-x': GObject.Object.Notify;
            'notify::rotation-angle-y': GObject.Object.Notify;
            'notify::rotation-angle-y': GObject.Object.Notify;
            'notify::rotation-angle-z': GObject.Object.Notify;
            'notify::rotation-angle-z': GObject.Object.Notify;
            'notify::rotation-center-x': GObject.Object.Notify;
            'notify::rotation-center-x': GObject.Object.Notify;
            'notify::rotation-center-y': GObject.Object.Notify;
            'notify::rotation-center-y': GObject.Object.Notify;
            'notify::rotation-center-z': GObject.Object.Notify;
            'notify::rotation-center-z': GObject.Object.Notify;
            'notify::rotation-center-z-gravity': GObject.Object.Notify;
            'notify::rotation-center-zgravity': GObject.Object.Notify;
            'notify::scale-center-x': GObject.Object.Notify;
            'notify::scale-center-x': GObject.Object.Notify;
            'notify::scale-center-y': GObject.Object.Notify;
            'notify::scale-center-y': GObject.Object.Notify;
            'notify::scale-gravity': GObject.Object.Notify;
            'notify::scale-gravity': GObject.Object.Notify;
            'notify::scale-x': GObject.Object.Notify;
            'notify::scale-x': GObject.Object.Notify;
            'notify::scale-y': GObject.Object.Notify;
            'notify::scale-y': GObject.Object.Notify;
            'notify::scale-z': GObject.Object.Notify;
            'notify::scale-z': GObject.Object.Notify;
            'notify::show-on-set-parent': GObject.Object.Notify;
            'notify::show-on-set-parent': GObject.Object.Notify;
            'notify::size': GObject.Object.Notify;
            'notify::text-direction': GObject.Object.Notify;
            'notify::text-direction': GObject.Object.Notify;
            'notify::transform': GObject.Object.Notify;
            'notify::transform-set': GObject.Object.Notify;
            'notify::transform-set': GObject.Object.Notify;
            'notify::translation-x': GObject.Object.Notify;
            'notify::translation-x': GObject.Object.Notify;
            'notify::translation-y': GObject.Object.Notify;
            'notify::translation-y': GObject.Object.Notify;
            'notify::translation-z': GObject.Object.Notify;
            'notify::translation-z': GObject.Object.Notify;
            'notify::visible': GObject.Object.Notify;
            'notify::width': GObject.Object.Notify;
            'notify::x': GObject.Object.Notify;
            'notify::x-align': GObject.Object.Notify;
            'notify::x-align': GObject.Object.Notify;
            'notify::x-expand': GObject.Object.Notify;
            'notify::x-expand': GObject.Object.Notify;
            'notify::y': GObject.Object.Notify;
            'notify::y-align': GObject.Object.Notify;
            'notify::y-align': GObject.Object.Notify;
            'notify::y-expand': GObject.Object.Notify;
            'notify::y-expand': GObject.Object.Notify;
            'notify::z-position': GObject.Object.Notify;
            'notify::z-position': GObject.Object.Notify;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Clutter.Actor.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Clutter.Animatable.ConstructorProps,
                Clutter.Container.ConstructorProps,
                Clutter.Scriptable.ConstructorProps {
            ambient: Clutter.Color;
            diffuse: Clutter.Color;
            specular: Clutter.Color;
        }
    }

    /**
     * The #MashLight structure contains only private data.
     */
    abstract class Light
        extends Clutter.Actor
        implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable
    {
        static $gtype: GObject.GType<Light>;

        // Properties

        get ambient(): Clutter.Color;
        set ambient(val: Clutter.Color);
        get diffuse(): Clutter.Color;
        set diffuse(val: Clutter.Color);
        get specular(): Clutter.Color;
        set specular(val: Clutter.Color);

        // Constructors

        constructor(properties?: Partial<Light.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Light.SignalSignatures>(signal: K, callback: Light.SignalSignatures[K]): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Light.SignalSignatures>(signal: K, callback: Light.SignalSignatures[K]): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Light.SignalSignatures>(
            signal: K,
            ...args: Light.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

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
         * @param uniform_source A location to append uniforms declarations to
         * @param main_source A location to append lighting algorithm snippets to
         */
        vfunc_generate_shader(uniform_source: GLib.String, main_source: GLib.String): void;
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
         * @param program A #CoglProgram containing the uniforms
         */
        vfunc_update_uniforms(program: Cogl.Handle): void;

        // Methods

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
         * @param shader_source The string to append to
         * @param snippet A snippet of GLSL
         */
        append_shader(shader_source: GLib.String, snippet: string): void;
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
         * @param uniform_source A location to append uniforms declarations to
         * @param main_source A location to append lighting algorithm snippets to
         */
        generate_shader(uniform_source: GLib.String, main_source: GLib.String): void;
        /**
         * Retrieves the ‘ambient’ color emitted by the light.
         * @param ambient A return location for the color
         */
        get_ambient(ambient: Clutter.Color): void;
        /**
         * Retrieves the ‘diffuse’ color emitted by the light.
         * @param diffuse A return location for the color
         */
        get_diffuse(diffuse: Clutter.Color): void;
        /**
         * Gets the modelview matrix for the light including all of the
         * transformations for its parent actors. This should be used for
         * updating uniforms that depend on the actor's transformation or
         * position.
         * @param matrix The return location for the matrix
         */
        get_modelview_matrix(matrix: Cogl.Matrix): void;
        /**
         * Retrieves the ‘specular’ color emitted by the light.
         * @param specular A return location for the color
         */
        get_specular(specular: Clutter.Color): void;
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
         * @param uniform_name The name of a uniform
         */
        get_uniform_location(program: Cogl.Handle, uniform_name: string): number;
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
        set_ambient(ambient: Clutter.Color): void;
        /**
         * Sets the ‘diffuse’ color emitted by the light. The diffuse color is
         * only visible on an object if is facing the light. The orientation
         * of the object is determined per-vertex using the vertex's
         * normal. The diffuse color will be darkened depending on how
         * directly the object faces the light.
         * @param diffuse The new color value
         */
        set_diffuse(diffuse: Clutter.Color): void;
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
         * @param uniform_location The location of the uniform
         * @param direction_in The untransformed direction uniform
         */
        set_direction_uniform(program: Cogl.Handle, uniform_location: number, direction_in: number): void;
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
        set_specular(specular: Clutter.Color): void;
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
         * @param program A #CoglProgram containing the uniforms
         */
        update_uniforms(program: Cogl.Handle): void;

        // Inherited methods
        /**
         * Calls the animate_property() virtual function for `animatable`.
         *
         * The `initial_value` and `final_value` #GValue<!-- -->s must contain
         * the same type; `value` must have been initialized to the same
         * type of `initial_value` and `final_value`.
         *
         * All implementation of the #ClutterAnimatable interface must
         * implement this function.
         * @param animation a #ClutterAnimation
         * @param property_name the name of the animated property
         * @param initial_value the initial value of the animation interval
         * @param final_value the final value of the animation interval
         * @param progress the progress factor
         * @param value return location for the animation value
         * @returns %TRUE if the value has been validated and can   be applied to the #ClutterAnimatable, and %FALSE otherwise
         */
        animate_property(
            animation: Clutter.Animation,
            property_name: string,
            initial_value: GObject.Value | any,
            final_value: GObject.Value | any,
            progress: number,
            value: GObject.Value | any,
        ): boolean;
        /**
         * Finds the #GParamSpec for `property_name`
         * @param property_name the name of the animatable property to find
         * @returns The #GParamSpec for the given property   or %NULL
         */
        find_property(property_name: string): GObject.ParamSpec;
        /**
         * Retrieves the current state of `property_name` and sets `value` with it
         * @param property_name the name of the animatable property to retrieve
         * @param value a #GValue initialized to the type of the property to retrieve
         */
        get_initial_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Asks a #ClutterAnimatable implementation to interpolate a
         * a named property between the initial and final values of
         * a #ClutterInterval, using `progress` as the interpolation
         * value, and store the result inside `value`.
         *
         * This function should be used for every property animation
         * involving #ClutterAnimatable<!-- -->s.
         *
         * This function replaces clutter_animatable_animate_property().
         * @param property_name the name of the property to interpolate
         * @param interval a #ClutterInterval with the animation range
         * @param progress the progress to use to interpolate between the   initial and final values of the @interval
         * @returns %TRUE if the interpolation was successful,   and %FALSE otherwise
         */
        interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [boolean, unknown];
        /**
         * Sets the current state of `property_name` to `value`
         * @param property_name the name of the animatable property to set
         * @param value the value of the animatable property to set
         */
        set_final_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Calls the animate_property() virtual function for `animatable`.
         *
         * The `initial_value` and `final_value` #GValue<!-- -->s must contain
         * the same type; `value` must have been initialized to the same
         * type of `initial_value` and `final_value`.
         *
         * All implementation of the #ClutterAnimatable interface must
         * implement this function.
         * @param animation a #ClutterAnimation
         * @param property_name the name of the animated property
         * @param initial_value the initial value of the animation interval
         * @param final_value the final value of the animation interval
         * @param progress the progress factor
         * @param value return location for the animation value
         */
        vfunc_animate_property(
            animation: Clutter.Animation,
            property_name: string,
            initial_value: GObject.Value | any,
            final_value: GObject.Value | any,
            progress: number,
            value: GObject.Value | any,
        ): boolean;
        /**
         * Finds the #GParamSpec for `property_name`
         * @param property_name the name of the animatable property to find
         */
        vfunc_find_property(property_name: string): GObject.ParamSpec;
        /**
         * Retrieves the current state of `property_name` and sets `value` with it
         * @param property_name the name of the animatable property to retrieve
         * @param value a #GValue initialized to the type of the property to retrieve
         */
        vfunc_get_initial_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Asks a #ClutterAnimatable implementation to interpolate a
         * a named property between the initial and final values of
         * a #ClutterInterval, using `progress` as the interpolation
         * value, and store the result inside `value`.
         *
         * This function should be used for every property animation
         * involving #ClutterAnimatable<!-- -->s.
         *
         * This function replaces clutter_animatable_animate_property().
         * @param property_name the name of the property to interpolate
         * @param interval a #ClutterInterval with the animation range
         * @param progress the progress to use to interpolate between the   initial and final values of the @interval
         */
        vfunc_interpolate_value(
            property_name: string,
            interval: Clutter.Interval,
            progress: number,
        ): [boolean, unknown];
        /**
         * Sets the current state of `property_name` to `value`
         * @param property_name the name of the animatable property to set
         * @param value the value of the animatable property to set
         */
        vfunc_set_final_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Adds a #ClutterActor to `container`. This function will emit the
         * "actor-added" signal. The actor should be parented to
         * `container`. You cannot add a #ClutterActor to more than one
         * #ClutterContainer.
         *
         * This function will call #ClutterContainerIface.add(), which is a
         * deprecated virtual function. The default implementation will
         * call clutter_actor_add_child().
         * @param actor the first #ClutterActor to add
         */
        add_actor(actor: Clutter.Actor): void;
        /**
         * Gets a container specific property of a child of `container,` In general,
         * a copy is made of the property contents and the caller is responsible for
         * freeing the memory by calling g_value_unset().
         *
         * Note that clutter_container_child_set_property() is really intended for
         * language bindings, clutter_container_child_set() is much more convenient
         * for C programming.
         * @param child a #ClutterActor that is a child of @container.
         * @param property the name of the property to set.
         * @param value the value.
         */
        child_get_property(child: Clutter.Actor, property: string, value: GObject.Value | any): void;
        /**
         * Calls the #ClutterContainerIface.child_notify() virtual function
         * of #ClutterContainer. The default implementation will emit the
         * #ClutterContainer::child-notify signal.
         * @param child a #ClutterActor
         * @param pspec a #GParamSpec
         */
        child_notify(child: Clutter.Actor, pspec: GObject.ParamSpec): void;
        /**
         * Sets a container-specific property on a child of `container`.
         * @param child a #ClutterActor that is a child of @container.
         * @param property the name of the property to set.
         * @param value the value.
         */
        child_set_property(child: Clutter.Actor, property: string, value: GObject.Value | any): void;
        /**
         * Creates the #ClutterChildMeta wrapping `actor` inside the
         * `container,` if the #ClutterContainerIface::child_meta_type
         * class member is not set to %G_TYPE_INVALID.
         *
         * This function is only useful when adding a #ClutterActor to
         * a #ClutterContainer implementation outside of the
         * #ClutterContainer::add() virtual function implementation.
         *
         * Applications should not call this function.
         * @param actor a #ClutterActor
         */
        create_child_meta(actor: Clutter.Actor): void;
        /**
         * Destroys the #ClutterChildMeta wrapping `actor` inside the
         * `container,` if any.
         *
         * This function is only useful when removing a #ClutterActor to
         * a #ClutterContainer implementation outside of the
         * #ClutterContainer::add() virtual function implementation.
         *
         * Applications should not call this function.
         * @param actor a #ClutterActor
         */
        destroy_child_meta(actor: Clutter.Actor): void;
        /**
         * Finds a child actor of a container by its name. Search recurses
         * into any child container.
         * @param child_name the name of the requested child.
         * @returns The child actor with the requested name,   or %NULL if no actor with that name was found.
         */
        find_child_by_name(child_name: string): Clutter.Actor;
        /**
         * Calls `callback` for each child of `container` that was added
         * by the application (with clutter_container_add_actor()). Does
         * not iterate over "internal" children that are part of the
         * container's own implementation, if any.
         *
         * This function calls the #ClutterContainerIface.foreach()
         * virtual function, which has been deprecated.
         * @param callback a function to be called for each child
         */
        foreach(callback: Clutter.Callback): void;
        /**
         * Calls `callback` for each child of `container,` including "internal"
         * children built in to the container itself that were never added
         * by the application.
         *
         * This function calls the #ClutterContainerIface.foreach_with_internals()
         * virtual function, which has been deprecated.
         * @param callback a function to be called for each child
         */
        foreach_with_internals(callback: Clutter.Callback): void;
        /**
         * Retrieves the #ClutterChildMeta which contains the data about the
         * `container` specific state for `actor`.
         * @param actor a #ClutterActor that is a child of @container.
         * @returns the #ClutterChildMeta for the @actor child   of @container or %NULL if the specifiec actor does not exist or the   container is not configured to provide #ClutterChildMeta<!-- -->s
         */
        get_child_meta(actor: Clutter.Actor): Clutter.ChildMeta;
        /**
         * Retrieves all the children of `container`.
         * @returns a list   of #ClutterActor<!-- -->s. Use g_list_free() on the returned   list when done.
         */
        get_children(): Clutter.Actor[];
        /**
         * Lowers `actor` to `sibling` level, in the depth ordering.
         *
         * This function calls the #ClutterContainerIface.lower() virtual function,
         * which has been deprecated. The default implementation will call
         * clutter_actor_set_child_below_sibling().
         * @param actor the actor to raise
         * @param sibling the sibling to lower to, or %NULL to lower   to the bottom
         */
        lower_child(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void;
        /**
         * Raises `actor` to `sibling` level, in the depth ordering.
         *
         * This function calls the #ClutterContainerIface.raise() virtual function,
         * which has been deprecated. The default implementation will call
         * clutter_actor_set_child_above_sibling().
         * @param actor the actor to raise
         * @param sibling the sibling to raise to, or %NULL to raise   to the top
         */
        raise_child(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void;
        /**
         * Removes `actor` from `container`. The actor should be unparented, so
         * if you want to keep it around you must hold a reference to it
         * yourself, using g_object_ref(). When the actor has been removed,
         * the "actor-removed" signal is emitted by `container`.
         *
         * This function will call #ClutterContainerIface.remove(), which is a
         * deprecated virtual function. The default implementation will call
         * clutter_actor_remove_child().
         * @param actor a #ClutterActor
         */
        remove_actor(actor: Clutter.Actor): void;
        /**
         * Sorts a container's children using their depth. This function should not
         * be normally used by applications.
         */
        sort_depth_order(): void;
        vfunc_actor_added(actor: Clutter.Actor): void;
        vfunc_actor_removed(actor: Clutter.Actor): void;
        /**
         * Adds a #ClutterActor to `container`. This function will emit the
         * "actor-added" signal. The actor should be parented to
         * `container`. You cannot add a #ClutterActor to more than one
         * #ClutterContainer.
         *
         * This function will call #ClutterContainerIface.add(), which is a
         * deprecated virtual function. The default implementation will
         * call clutter_actor_add_child().
         * @param actor the first #ClutterActor to add
         */
        vfunc_add(actor: Clutter.Actor): void;
        /**
         * Calls the #ClutterContainerIface.child_notify() virtual function
         * of #ClutterContainer. The default implementation will emit the
         * #ClutterContainer::child-notify signal.
         * @param child a #ClutterActor
         * @param pspec a #GParamSpec
         */
        vfunc_child_notify(child: Clutter.Actor, pspec: GObject.ParamSpec): void;
        /**
         * Creates the #ClutterChildMeta wrapping `actor` inside the
         * `container,` if the #ClutterContainerIface::child_meta_type
         * class member is not set to %G_TYPE_INVALID.
         *
         * This function is only useful when adding a #ClutterActor to
         * a #ClutterContainer implementation outside of the
         * #ClutterContainer::add() virtual function implementation.
         *
         * Applications should not call this function.
         * @param actor a #ClutterActor
         */
        vfunc_create_child_meta(actor: Clutter.Actor): void;
        /**
         * Destroys the #ClutterChildMeta wrapping `actor` inside the
         * `container,` if any.
         *
         * This function is only useful when removing a #ClutterActor to
         * a #ClutterContainer implementation outside of the
         * #ClutterContainer::add() virtual function implementation.
         *
         * Applications should not call this function.
         * @param actor a #ClutterActor
         */
        vfunc_destroy_child_meta(actor: Clutter.Actor): void;
        /**
         * Calls `callback` for each child of `container` that was added
         * by the application (with clutter_container_add_actor()). Does
         * not iterate over "internal" children that are part of the
         * container's own implementation, if any.
         *
         * This function calls the #ClutterContainerIface.foreach()
         * virtual function, which has been deprecated.
         * @param callback a function to be called for each child
         */
        vfunc_foreach(callback: Clutter.Callback): void;
        /**
         * Calls `callback` for each child of `container,` including "internal"
         * children built in to the container itself that were never added
         * by the application.
         *
         * This function calls the #ClutterContainerIface.foreach_with_internals()
         * virtual function, which has been deprecated.
         * @param callback a function to be called for each child
         */
        vfunc_foreach_with_internals(callback: Clutter.Callback): void;
        /**
         * Retrieves the #ClutterChildMeta which contains the data about the
         * `container` specific state for `actor`.
         * @param actor a #ClutterActor that is a child of @container.
         */
        vfunc_get_child_meta(actor: Clutter.Actor): Clutter.ChildMeta;
        /**
         * Lowers `actor` to `sibling` level, in the depth ordering.
         *
         * This function calls the #ClutterContainerIface.lower() virtual function,
         * which has been deprecated. The default implementation will call
         * clutter_actor_set_child_below_sibling().
         * @param actor the actor to raise
         * @param sibling the sibling to lower to, or %NULL to lower   to the bottom
         */
        vfunc_lower(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void;
        /**
         * Raises `actor` to `sibling` level, in the depth ordering.
         *
         * This function calls the #ClutterContainerIface.raise() virtual function,
         * which has been deprecated. The default implementation will call
         * clutter_actor_set_child_above_sibling().
         * @param actor the actor to raise
         * @param sibling the sibling to raise to, or %NULL to raise   to the top
         */
        vfunc_raise(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void;
        /**
         * Removes `actor` from `container`. The actor should be unparented, so
         * if you want to keep it around you must hold a reference to it
         * yourself, using g_object_ref(). When the actor has been removed,
         * the "actor-removed" signal is emitted by `container`.
         *
         * This function will call #ClutterContainerIface.remove(), which is a
         * deprecated virtual function. The default implementation will call
         * clutter_actor_remove_child().
         * @param actor a #ClutterActor
         */
        vfunc_remove(actor: Clutter.Actor): void;
        /**
         * Sorts a container's children using their depth. This function should not
         * be normally used by applications.
         */
        vfunc_sort_depth_order(): void;
        /**
         * Retrieves the id of `scriptable` set using clutter_scriptable_set_id().
         * @returns the id of the object. The returned string is owned by   the scriptable object and should never be modified of freed
         */
        get_id(): string;
        /**
         * Parses the passed JSON node. The implementation must set the type
         * of the passed #GValue pointer using g_value_init().
         * @param script the #ClutterScript creating the scriptable instance
         * @param value the generic value to be set
         * @param name the name of the node
         * @param node the JSON node to be parsed
         * @returns %TRUE if the node was successfully parsed, %FALSE otherwise.
         */
        parse_custom_node(script: Clutter.Script, value: GObject.Value | any, name: string, node: Json.Node): boolean;
        /**
         * Overrides the common properties setting. The underlying virtual
         * function should be used when implementing custom properties.
         * @param script the #ClutterScript creating the scriptable instance
         * @param name the name of the property
         * @param value the value of the property
         */
        set_custom_property(script: Clutter.Script, name: string, value: GObject.Value | any): void;
        /**
         * Sets `id_` as the unique Clutter script it for this instance of
         * #ClutterScriptableIface.
         *
         * This name can be used by user interface designer applications to
         * define a unique name for an object constructable using the UI
         * definition language parsed by #ClutterScript.
         * @param id_ the #ClutterScript id of the object
         */
        set_id(id_: string): void;
        /**
         * Retrieves the id of `scriptable` set using clutter_scriptable_set_id().
         */
        vfunc_get_id(): string;
        /**
         * Parses the passed JSON node. The implementation must set the type
         * of the passed #GValue pointer using g_value_init().
         * @param script the #ClutterScript creating the scriptable instance
         * @param value the generic value to be set
         * @param name the name of the node
         * @param node the JSON node to be parsed
         */
        vfunc_parse_custom_node(
            script: Clutter.Script,
            value: GObject.Value | any,
            name: string,
            node: Json.Node,
        ): boolean;
        /**
         * Overrides the common properties setting. The underlying virtual
         * function should be used when implementing custom properties.
         * @param script the #ClutterScript creating the scriptable instance
         * @param name the name of the property
         * @param value the value of the property
         */
        vfunc_set_custom_property(script: Clutter.Script, name: string, value: GObject.Value | any): void;
        /**
         * Sets `id_` as the unique Clutter script it for this instance of
         * #ClutterScriptableIface.
         *
         * This name can be used by user interface designer applications to
         * define a unique name for an object constructable using the UI
         * definition language parsed by #ClutterScript.
         * @param id_ the #ClutterScript id of the object
         */
        vfunc_set_id(id_: string): void;
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
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
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
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
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
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
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
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

    namespace LightSet {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * The #MashLightSet structure contains only private data.
     */
    class LightSet extends GObject.Object {
        static $gtype: GObject.GType<LightSet>;

        // Constructors

        constructor(properties?: Partial<LightSet.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): LightSet;

        // Signals

        connect<K extends keyof LightSet.SignalSignatures>(signal: K, callback: LightSet.SignalSignatures[K]): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof LightSet.SignalSignatures>(
            signal: K,
            callback: LightSet.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof LightSet.SignalSignatures>(
            signal: K,
            ...args: LightSet.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * This adds a light to the set. Lights need to be added to the light
         * set as well as to a container somewhere in the Clutter actor
         * hierarchy in order to be useful.
         * @param light A #MashLight
         */
        add_light(light: Light): void;
        /**
         * Removes a light from the set.
         * @param light A #MashLight
         */
        remove_light(light: Light): void;
    }

    namespace Model {
        // Signal signatures
        interface SignalSignatures extends Clutter.Actor.SignalSignatures {
            'notify::data': GObject.Object.Notify;
            'notify::fit-to-allocation': GObject.Object.Notify;
            'notify::fit-to-allocation': GObject.Object.Notify;
            'notify::light-set': GObject.Object.Notify;
            'notify::light-set': GObject.Object.Notify;
            'notify::actions': GObject.Object.Notify;
            'notify::allocation': GObject.Object.Notify;
            'notify::anchor-gravity': GObject.Object.Notify;
            'notify::anchor-gravity': GObject.Object.Notify;
            'notify::anchor-x': GObject.Object.Notify;
            'notify::anchor-x': GObject.Object.Notify;
            'notify::anchor-y': GObject.Object.Notify;
            'notify::anchor-y': GObject.Object.Notify;
            'notify::background-color': GObject.Object.Notify;
            'notify::background-color': GObject.Object.Notify;
            'notify::background-color-set': GObject.Object.Notify;
            'notify::background-color-set': GObject.Object.Notify;
            'notify::child-transform': GObject.Object.Notify;
            'notify::child-transform': GObject.Object.Notify;
            'notify::child-transform-set': GObject.Object.Notify;
            'notify::child-transform-set': GObject.Object.Notify;
            'notify::clip': GObject.Object.Notify;
            'notify::clip-rect': GObject.Object.Notify;
            'notify::clip-rect': GObject.Object.Notify;
            'notify::clip-to-allocation': GObject.Object.Notify;
            'notify::clip-to-allocation': GObject.Object.Notify;
            'notify::constraints': GObject.Object.Notify;
            'notify::content': GObject.Object.Notify;
            'notify::content-box': GObject.Object.Notify;
            'notify::content-box': GObject.Object.Notify;
            'notify::content-gravity': GObject.Object.Notify;
            'notify::content-gravity': GObject.Object.Notify;
            'notify::content-repeat': GObject.Object.Notify;
            'notify::content-repeat': GObject.Object.Notify;
            'notify::depth': GObject.Object.Notify;
            'notify::effect': GObject.Object.Notify;
            'notify::first-child': GObject.Object.Notify;
            'notify::first-child': GObject.Object.Notify;
            'notify::fixed-position-set': GObject.Object.Notify;
            'notify::fixed-position-set': GObject.Object.Notify;
            'notify::fixed-x': GObject.Object.Notify;
            'notify::fixed-x': GObject.Object.Notify;
            'notify::fixed-y': GObject.Object.Notify;
            'notify::fixed-y': GObject.Object.Notify;
            'notify::has-clip': GObject.Object.Notify;
            'notify::has-clip': GObject.Object.Notify;
            'notify::has-pointer': GObject.Object.Notify;
            'notify::has-pointer': GObject.Object.Notify;
            'notify::height': GObject.Object.Notify;
            'notify::last-child': GObject.Object.Notify;
            'notify::last-child': GObject.Object.Notify;
            'notify::layout-manager': GObject.Object.Notify;
            'notify::layout-manager': GObject.Object.Notify;
            'notify::magnification-filter': GObject.Object.Notify;
            'notify::magnification-filter': GObject.Object.Notify;
            'notify::mapped': GObject.Object.Notify;
            'notify::margin-bottom': GObject.Object.Notify;
            'notify::margin-bottom': GObject.Object.Notify;
            'notify::margin-left': GObject.Object.Notify;
            'notify::margin-left': GObject.Object.Notify;
            'notify::margin-right': GObject.Object.Notify;
            'notify::margin-right': GObject.Object.Notify;
            'notify::margin-top': GObject.Object.Notify;
            'notify::margin-top': GObject.Object.Notify;
            'notify::min-height': GObject.Object.Notify;
            'notify::min-height': GObject.Object.Notify;
            'notify::min-height-set': GObject.Object.Notify;
            'notify::min-height-set': GObject.Object.Notify;
            'notify::min-width': GObject.Object.Notify;
            'notify::min-width': GObject.Object.Notify;
            'notify::min-width-set': GObject.Object.Notify;
            'notify::min-width-set': GObject.Object.Notify;
            'notify::minification-filter': GObject.Object.Notify;
            'notify::minification-filter': GObject.Object.Notify;
            'notify::name': GObject.Object.Notify;
            'notify::natural-height': GObject.Object.Notify;
            'notify::natural-height': GObject.Object.Notify;
            'notify::natural-height-set': GObject.Object.Notify;
            'notify::natural-height-set': GObject.Object.Notify;
            'notify::natural-width': GObject.Object.Notify;
            'notify::natural-width': GObject.Object.Notify;
            'notify::natural-width-set': GObject.Object.Notify;
            'notify::natural-width-set': GObject.Object.Notify;
            'notify::offscreen-redirect': GObject.Object.Notify;
            'notify::offscreen-redirect': GObject.Object.Notify;
            'notify::opacity': GObject.Object.Notify;
            'notify::pivot-point': GObject.Object.Notify;
            'notify::pivot-point': GObject.Object.Notify;
            'notify::pivot-point-z': GObject.Object.Notify;
            'notify::pivot-point-z': GObject.Object.Notify;
            'notify::position': GObject.Object.Notify;
            'notify::reactive': GObject.Object.Notify;
            'notify::realized': GObject.Object.Notify;
            'notify::request-mode': GObject.Object.Notify;
            'notify::request-mode': GObject.Object.Notify;
            'notify::rotation-angle-x': GObject.Object.Notify;
            'notify::rotation-angle-x': GObject.Object.Notify;
            'notify::rotation-angle-y': GObject.Object.Notify;
            'notify::rotation-angle-y': GObject.Object.Notify;
            'notify::rotation-angle-z': GObject.Object.Notify;
            'notify::rotation-angle-z': GObject.Object.Notify;
            'notify::rotation-center-x': GObject.Object.Notify;
            'notify::rotation-center-x': GObject.Object.Notify;
            'notify::rotation-center-y': GObject.Object.Notify;
            'notify::rotation-center-y': GObject.Object.Notify;
            'notify::rotation-center-z': GObject.Object.Notify;
            'notify::rotation-center-z': GObject.Object.Notify;
            'notify::rotation-center-z-gravity': GObject.Object.Notify;
            'notify::rotation-center-zgravity': GObject.Object.Notify;
            'notify::scale-center-x': GObject.Object.Notify;
            'notify::scale-center-x': GObject.Object.Notify;
            'notify::scale-center-y': GObject.Object.Notify;
            'notify::scale-center-y': GObject.Object.Notify;
            'notify::scale-gravity': GObject.Object.Notify;
            'notify::scale-gravity': GObject.Object.Notify;
            'notify::scale-x': GObject.Object.Notify;
            'notify::scale-x': GObject.Object.Notify;
            'notify::scale-y': GObject.Object.Notify;
            'notify::scale-y': GObject.Object.Notify;
            'notify::scale-z': GObject.Object.Notify;
            'notify::scale-z': GObject.Object.Notify;
            'notify::show-on-set-parent': GObject.Object.Notify;
            'notify::show-on-set-parent': GObject.Object.Notify;
            'notify::size': GObject.Object.Notify;
            'notify::text-direction': GObject.Object.Notify;
            'notify::text-direction': GObject.Object.Notify;
            'notify::transform': GObject.Object.Notify;
            'notify::transform-set': GObject.Object.Notify;
            'notify::transform-set': GObject.Object.Notify;
            'notify::translation-x': GObject.Object.Notify;
            'notify::translation-x': GObject.Object.Notify;
            'notify::translation-y': GObject.Object.Notify;
            'notify::translation-y': GObject.Object.Notify;
            'notify::translation-z': GObject.Object.Notify;
            'notify::translation-z': GObject.Object.Notify;
            'notify::visible': GObject.Object.Notify;
            'notify::width': GObject.Object.Notify;
            'notify::x': GObject.Object.Notify;
            'notify::x-align': GObject.Object.Notify;
            'notify::x-align': GObject.Object.Notify;
            'notify::x-expand': GObject.Object.Notify;
            'notify::x-expand': GObject.Object.Notify;
            'notify::y': GObject.Object.Notify;
            'notify::y-align': GObject.Object.Notify;
            'notify::y-align': GObject.Object.Notify;
            'notify::y-expand': GObject.Object.Notify;
            'notify::y-expand': GObject.Object.Notify;
            'notify::z-position': GObject.Object.Notify;
            'notify::z-position': GObject.Object.Notify;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Clutter.Actor.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Clutter.Animatable.ConstructorProps,
                Clutter.Container.ConstructorProps,
                Clutter.Scriptable.ConstructorProps {
            data: Data;
            fit_to_allocation: boolean;
            fitToAllocation: boolean;
            light_set: LightSet;
            lightSet: LightSet;
        }
    }

    /**
     * The #MashModel structure contains only private data.
     */
    class Model
        extends Clutter.Actor
        implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable
    {
        static $gtype: GObject.GType<Model>;

        // Properties

        get data(): Data;
        set data(val: Data);
        get fit_to_allocation(): boolean;
        set fit_to_allocation(val: boolean);
        get fitToAllocation(): boolean;
        set fitToAllocation(val: boolean);
        get light_set(): LightSet;
        set light_set(val: LightSet);
        get lightSet(): LightSet;
        set lightSet(val: LightSet);

        // Constructors

        constructor(properties?: Partial<Model.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Model;

        static new_from_file(flags: DataFlags, filename: string): Model;

        // Signals

        connect<K extends keyof Model.SignalSignatures>(signal: K, callback: Model.SignalSignatures[K]): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Model.SignalSignatures>(signal: K, callback: Model.SignalSignatures[K]): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Model.SignalSignatures>(
            signal: K,
            ...args: Model.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_fit_to_allocation(): boolean;
        /**
         * Replaces the data used by the actor with `data`. A reference is
         * taken on `data` so if you no longer need it you should unref it with
         * g_object_unref().
         * @param data The new #MashData
         */
        set_data(data: Data): void;
        // Conflicted with GObject.Object.set_data
        set_data(...args: never[]): any;
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
         * @param fit_to_allocation New value
         */
        set_fit_to_allocation(fit_to_allocation: boolean): void;
        /**
         * This sets the #MashLightSet that will be used to render the
         * model. Alternatively %NULL can be passed to disable lighting for
         * this model. The light set represents a collection of #MashLight<!--
         * -->s that will affect the appearance of the model.
         * @param light_set A new #MashLightSet
         */
        set_light_set(light_set: LightSet): void;
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
        set_material(material: Cogl.Handle): void;

        // Inherited methods
        /**
         * Calls the animate_property() virtual function for `animatable`.
         *
         * The `initial_value` and `final_value` #GValue<!-- -->s must contain
         * the same type; `value` must have been initialized to the same
         * type of `initial_value` and `final_value`.
         *
         * All implementation of the #ClutterAnimatable interface must
         * implement this function.
         * @param animation a #ClutterAnimation
         * @param property_name the name of the animated property
         * @param initial_value the initial value of the animation interval
         * @param final_value the final value of the animation interval
         * @param progress the progress factor
         * @param value return location for the animation value
         * @returns %TRUE if the value has been validated and can   be applied to the #ClutterAnimatable, and %FALSE otherwise
         */
        animate_property(
            animation: Clutter.Animation,
            property_name: string,
            initial_value: GObject.Value | any,
            final_value: GObject.Value | any,
            progress: number,
            value: GObject.Value | any,
        ): boolean;
        /**
         * Finds the #GParamSpec for `property_name`
         * @param property_name the name of the animatable property to find
         * @returns The #GParamSpec for the given property   or %NULL
         */
        find_property(property_name: string): GObject.ParamSpec;
        /**
         * Retrieves the current state of `property_name` and sets `value` with it
         * @param property_name the name of the animatable property to retrieve
         * @param value a #GValue initialized to the type of the property to retrieve
         */
        get_initial_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Asks a #ClutterAnimatable implementation to interpolate a
         * a named property between the initial and final values of
         * a #ClutterInterval, using `progress` as the interpolation
         * value, and store the result inside `value`.
         *
         * This function should be used for every property animation
         * involving #ClutterAnimatable<!-- -->s.
         *
         * This function replaces clutter_animatable_animate_property().
         * @param property_name the name of the property to interpolate
         * @param interval a #ClutterInterval with the animation range
         * @param progress the progress to use to interpolate between the   initial and final values of the @interval
         * @returns %TRUE if the interpolation was successful,   and %FALSE otherwise
         */
        interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [boolean, unknown];
        /**
         * Sets the current state of `property_name` to `value`
         * @param property_name the name of the animatable property to set
         * @param value the value of the animatable property to set
         */
        set_final_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Calls the animate_property() virtual function for `animatable`.
         *
         * The `initial_value` and `final_value` #GValue<!-- -->s must contain
         * the same type; `value` must have been initialized to the same
         * type of `initial_value` and `final_value`.
         *
         * All implementation of the #ClutterAnimatable interface must
         * implement this function.
         * @param animation a #ClutterAnimation
         * @param property_name the name of the animated property
         * @param initial_value the initial value of the animation interval
         * @param final_value the final value of the animation interval
         * @param progress the progress factor
         * @param value return location for the animation value
         */
        vfunc_animate_property(
            animation: Clutter.Animation,
            property_name: string,
            initial_value: GObject.Value | any,
            final_value: GObject.Value | any,
            progress: number,
            value: GObject.Value | any,
        ): boolean;
        /**
         * Finds the #GParamSpec for `property_name`
         * @param property_name the name of the animatable property to find
         */
        vfunc_find_property(property_name: string): GObject.ParamSpec;
        /**
         * Retrieves the current state of `property_name` and sets `value` with it
         * @param property_name the name of the animatable property to retrieve
         * @param value a #GValue initialized to the type of the property to retrieve
         */
        vfunc_get_initial_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Asks a #ClutterAnimatable implementation to interpolate a
         * a named property between the initial and final values of
         * a #ClutterInterval, using `progress` as the interpolation
         * value, and store the result inside `value`.
         *
         * This function should be used for every property animation
         * involving #ClutterAnimatable<!-- -->s.
         *
         * This function replaces clutter_animatable_animate_property().
         * @param property_name the name of the property to interpolate
         * @param interval a #ClutterInterval with the animation range
         * @param progress the progress to use to interpolate between the   initial and final values of the @interval
         */
        vfunc_interpolate_value(
            property_name: string,
            interval: Clutter.Interval,
            progress: number,
        ): [boolean, unknown];
        /**
         * Sets the current state of `property_name` to `value`
         * @param property_name the name of the animatable property to set
         * @param value the value of the animatable property to set
         */
        vfunc_set_final_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Adds a #ClutterActor to `container`. This function will emit the
         * "actor-added" signal. The actor should be parented to
         * `container`. You cannot add a #ClutterActor to more than one
         * #ClutterContainer.
         *
         * This function will call #ClutterContainerIface.add(), which is a
         * deprecated virtual function. The default implementation will
         * call clutter_actor_add_child().
         * @param actor the first #ClutterActor to add
         */
        add_actor(actor: Clutter.Actor): void;
        /**
         * Gets a container specific property of a child of `container,` In general,
         * a copy is made of the property contents and the caller is responsible for
         * freeing the memory by calling g_value_unset().
         *
         * Note that clutter_container_child_set_property() is really intended for
         * language bindings, clutter_container_child_set() is much more convenient
         * for C programming.
         * @param child a #ClutterActor that is a child of @container.
         * @param property the name of the property to set.
         * @param value the value.
         */
        child_get_property(child: Clutter.Actor, property: string, value: GObject.Value | any): void;
        /**
         * Calls the #ClutterContainerIface.child_notify() virtual function
         * of #ClutterContainer. The default implementation will emit the
         * #ClutterContainer::child-notify signal.
         * @param child a #ClutterActor
         * @param pspec a #GParamSpec
         */
        child_notify(child: Clutter.Actor, pspec: GObject.ParamSpec): void;
        /**
         * Sets a container-specific property on a child of `container`.
         * @param child a #ClutterActor that is a child of @container.
         * @param property the name of the property to set.
         * @param value the value.
         */
        child_set_property(child: Clutter.Actor, property: string, value: GObject.Value | any): void;
        /**
         * Creates the #ClutterChildMeta wrapping `actor` inside the
         * `container,` if the #ClutterContainerIface::child_meta_type
         * class member is not set to %G_TYPE_INVALID.
         *
         * This function is only useful when adding a #ClutterActor to
         * a #ClutterContainer implementation outside of the
         * #ClutterContainer::add() virtual function implementation.
         *
         * Applications should not call this function.
         * @param actor a #ClutterActor
         */
        create_child_meta(actor: Clutter.Actor): void;
        /**
         * Destroys the #ClutterChildMeta wrapping `actor` inside the
         * `container,` if any.
         *
         * This function is only useful when removing a #ClutterActor to
         * a #ClutterContainer implementation outside of the
         * #ClutterContainer::add() virtual function implementation.
         *
         * Applications should not call this function.
         * @param actor a #ClutterActor
         */
        destroy_child_meta(actor: Clutter.Actor): void;
        /**
         * Finds a child actor of a container by its name. Search recurses
         * into any child container.
         * @param child_name the name of the requested child.
         * @returns The child actor with the requested name,   or %NULL if no actor with that name was found.
         */
        find_child_by_name(child_name: string): Clutter.Actor;
        /**
         * Calls `callback` for each child of `container` that was added
         * by the application (with clutter_container_add_actor()). Does
         * not iterate over "internal" children that are part of the
         * container's own implementation, if any.
         *
         * This function calls the #ClutterContainerIface.foreach()
         * virtual function, which has been deprecated.
         * @param callback a function to be called for each child
         */
        foreach(callback: Clutter.Callback): void;
        /**
         * Calls `callback` for each child of `container,` including "internal"
         * children built in to the container itself that were never added
         * by the application.
         *
         * This function calls the #ClutterContainerIface.foreach_with_internals()
         * virtual function, which has been deprecated.
         * @param callback a function to be called for each child
         */
        foreach_with_internals(callback: Clutter.Callback): void;
        /**
         * Retrieves the #ClutterChildMeta which contains the data about the
         * `container` specific state for `actor`.
         * @param actor a #ClutterActor that is a child of @container.
         * @returns the #ClutterChildMeta for the @actor child   of @container or %NULL if the specifiec actor does not exist or the   container is not configured to provide #ClutterChildMeta<!-- -->s
         */
        get_child_meta(actor: Clutter.Actor): Clutter.ChildMeta;
        /**
         * Retrieves all the children of `container`.
         * @returns a list   of #ClutterActor<!-- -->s. Use g_list_free() on the returned   list when done.
         */
        get_children(): Clutter.Actor[];
        /**
         * Lowers `actor` to `sibling` level, in the depth ordering.
         *
         * This function calls the #ClutterContainerIface.lower() virtual function,
         * which has been deprecated. The default implementation will call
         * clutter_actor_set_child_below_sibling().
         * @param actor the actor to raise
         * @param sibling the sibling to lower to, or %NULL to lower   to the bottom
         */
        lower_child(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void;
        /**
         * Raises `actor` to `sibling` level, in the depth ordering.
         *
         * This function calls the #ClutterContainerIface.raise() virtual function,
         * which has been deprecated. The default implementation will call
         * clutter_actor_set_child_above_sibling().
         * @param actor the actor to raise
         * @param sibling the sibling to raise to, or %NULL to raise   to the top
         */
        raise_child(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void;
        /**
         * Removes `actor` from `container`. The actor should be unparented, so
         * if you want to keep it around you must hold a reference to it
         * yourself, using g_object_ref(). When the actor has been removed,
         * the "actor-removed" signal is emitted by `container`.
         *
         * This function will call #ClutterContainerIface.remove(), which is a
         * deprecated virtual function. The default implementation will call
         * clutter_actor_remove_child().
         * @param actor a #ClutterActor
         */
        remove_actor(actor: Clutter.Actor): void;
        /**
         * Sorts a container's children using their depth. This function should not
         * be normally used by applications.
         */
        sort_depth_order(): void;
        vfunc_actor_added(actor: Clutter.Actor): void;
        vfunc_actor_removed(actor: Clutter.Actor): void;
        /**
         * Adds a #ClutterActor to `container`. This function will emit the
         * "actor-added" signal. The actor should be parented to
         * `container`. You cannot add a #ClutterActor to more than one
         * #ClutterContainer.
         *
         * This function will call #ClutterContainerIface.add(), which is a
         * deprecated virtual function. The default implementation will
         * call clutter_actor_add_child().
         * @param actor the first #ClutterActor to add
         */
        vfunc_add(actor: Clutter.Actor): void;
        /**
         * Calls the #ClutterContainerIface.child_notify() virtual function
         * of #ClutterContainer. The default implementation will emit the
         * #ClutterContainer::child-notify signal.
         * @param child a #ClutterActor
         * @param pspec a #GParamSpec
         */
        vfunc_child_notify(child: Clutter.Actor, pspec: GObject.ParamSpec): void;
        /**
         * Creates the #ClutterChildMeta wrapping `actor` inside the
         * `container,` if the #ClutterContainerIface::child_meta_type
         * class member is not set to %G_TYPE_INVALID.
         *
         * This function is only useful when adding a #ClutterActor to
         * a #ClutterContainer implementation outside of the
         * #ClutterContainer::add() virtual function implementation.
         *
         * Applications should not call this function.
         * @param actor a #ClutterActor
         */
        vfunc_create_child_meta(actor: Clutter.Actor): void;
        /**
         * Destroys the #ClutterChildMeta wrapping `actor` inside the
         * `container,` if any.
         *
         * This function is only useful when removing a #ClutterActor to
         * a #ClutterContainer implementation outside of the
         * #ClutterContainer::add() virtual function implementation.
         *
         * Applications should not call this function.
         * @param actor a #ClutterActor
         */
        vfunc_destroy_child_meta(actor: Clutter.Actor): void;
        /**
         * Calls `callback` for each child of `container` that was added
         * by the application (with clutter_container_add_actor()). Does
         * not iterate over "internal" children that are part of the
         * container's own implementation, if any.
         *
         * This function calls the #ClutterContainerIface.foreach()
         * virtual function, which has been deprecated.
         * @param callback a function to be called for each child
         */
        vfunc_foreach(callback: Clutter.Callback): void;
        /**
         * Calls `callback` for each child of `container,` including "internal"
         * children built in to the container itself that were never added
         * by the application.
         *
         * This function calls the #ClutterContainerIface.foreach_with_internals()
         * virtual function, which has been deprecated.
         * @param callback a function to be called for each child
         */
        vfunc_foreach_with_internals(callback: Clutter.Callback): void;
        /**
         * Retrieves the #ClutterChildMeta which contains the data about the
         * `container` specific state for `actor`.
         * @param actor a #ClutterActor that is a child of @container.
         */
        vfunc_get_child_meta(actor: Clutter.Actor): Clutter.ChildMeta;
        /**
         * Lowers `actor` to `sibling` level, in the depth ordering.
         *
         * This function calls the #ClutterContainerIface.lower() virtual function,
         * which has been deprecated. The default implementation will call
         * clutter_actor_set_child_below_sibling().
         * @param actor the actor to raise
         * @param sibling the sibling to lower to, or %NULL to lower   to the bottom
         */
        vfunc_lower(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void;
        /**
         * Raises `actor` to `sibling` level, in the depth ordering.
         *
         * This function calls the #ClutterContainerIface.raise() virtual function,
         * which has been deprecated. The default implementation will call
         * clutter_actor_set_child_above_sibling().
         * @param actor the actor to raise
         * @param sibling the sibling to raise to, or %NULL to raise   to the top
         */
        vfunc_raise(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void;
        /**
         * Removes `actor` from `container`. The actor should be unparented, so
         * if you want to keep it around you must hold a reference to it
         * yourself, using g_object_ref(). When the actor has been removed,
         * the "actor-removed" signal is emitted by `container`.
         *
         * This function will call #ClutterContainerIface.remove(), which is a
         * deprecated virtual function. The default implementation will call
         * clutter_actor_remove_child().
         * @param actor a #ClutterActor
         */
        vfunc_remove(actor: Clutter.Actor): void;
        /**
         * Sorts a container's children using their depth. This function should not
         * be normally used by applications.
         */
        vfunc_sort_depth_order(): void;
        /**
         * Retrieves the id of `scriptable` set using clutter_scriptable_set_id().
         * @returns the id of the object. The returned string is owned by   the scriptable object and should never be modified of freed
         */
        get_id(): string;
        /**
         * Parses the passed JSON node. The implementation must set the type
         * of the passed #GValue pointer using g_value_init().
         * @param script the #ClutterScript creating the scriptable instance
         * @param value the generic value to be set
         * @param name the name of the node
         * @param node the JSON node to be parsed
         * @returns %TRUE if the node was successfully parsed, %FALSE otherwise.
         */
        parse_custom_node(script: Clutter.Script, value: GObject.Value | any, name: string, node: Json.Node): boolean;
        /**
         * Overrides the common properties setting. The underlying virtual
         * function should be used when implementing custom properties.
         * @param script the #ClutterScript creating the scriptable instance
         * @param name the name of the property
         * @param value the value of the property
         */
        set_custom_property(script: Clutter.Script, name: string, value: GObject.Value | any): void;
        /**
         * Sets `id_` as the unique Clutter script it for this instance of
         * #ClutterScriptableIface.
         *
         * This name can be used by user interface designer applications to
         * define a unique name for an object constructable using the UI
         * definition language parsed by #ClutterScript.
         * @param id_ the #ClutterScript id of the object
         */
        set_id(id_: string): void;
        /**
         * Retrieves the id of `scriptable` set using clutter_scriptable_set_id().
         */
        vfunc_get_id(): string;
        /**
         * Parses the passed JSON node. The implementation must set the type
         * of the passed #GValue pointer using g_value_init().
         * @param script the #ClutterScript creating the scriptable instance
         * @param value the generic value to be set
         * @param name the name of the node
         * @param node the JSON node to be parsed
         */
        vfunc_parse_custom_node(
            script: Clutter.Script,
            value: GObject.Value | any,
            name: string,
            node: Json.Node,
        ): boolean;
        /**
         * Overrides the common properties setting. The underlying virtual
         * function should be used when implementing custom properties.
         * @param script the #ClutterScript creating the scriptable instance
         * @param name the name of the property
         * @param value the value of the property
         */
        vfunc_set_custom_property(script: Clutter.Script, name: string, value: GObject.Value | any): void;
        /**
         * Sets `id_` as the unique Clutter script it for this instance of
         * #ClutterScriptableIface.
         *
         * This name can be used by user interface designer applications to
         * define a unique name for an object constructable using the UI
         * definition language parsed by #ClutterScript.
         * @param id_ the #ClutterScript id of the object
         */
        vfunc_set_id(id_: string): void;
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
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
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
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
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
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

    namespace PlyLoader {
        // Signal signatures
        interface SignalSignatures extends Data.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Data.ConstructorProps {}
    }

    class PlyLoader extends Data {
        static $gtype: GObject.GType<PlyLoader>;

        // Constructors

        constructor(properties?: Partial<PlyLoader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof PlyLoader.SignalSignatures>(signal: K, callback: PlyLoader.SignalSignatures[K]): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PlyLoader.SignalSignatures>(
            signal: K,
            callback: PlyLoader.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PlyLoader.SignalSignatures>(
            signal: K,
            ...args: PlyLoader.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace PointLight {
        // Signal signatures
        interface SignalSignatures extends Light.SignalSignatures {
            'notify::constant-attenuation': GObject.Object.Notify;
            'notify::constant-attenuation': GObject.Object.Notify;
            'notify::linear-attenuation': GObject.Object.Notify;
            'notify::linear-attenuation': GObject.Object.Notify;
            'notify::quadratic-attenuation': GObject.Object.Notify;
            'notify::quadratic-attenuation': GObject.Object.Notify;
            'notify::ambient': GObject.Object.Notify;
            'notify::diffuse': GObject.Object.Notify;
            'notify::specular': GObject.Object.Notify;
            'notify::actions': GObject.Object.Notify;
            'notify::allocation': GObject.Object.Notify;
            'notify::anchor-gravity': GObject.Object.Notify;
            'notify::anchor-gravity': GObject.Object.Notify;
            'notify::anchor-x': GObject.Object.Notify;
            'notify::anchor-x': GObject.Object.Notify;
            'notify::anchor-y': GObject.Object.Notify;
            'notify::anchor-y': GObject.Object.Notify;
            'notify::background-color': GObject.Object.Notify;
            'notify::background-color': GObject.Object.Notify;
            'notify::background-color-set': GObject.Object.Notify;
            'notify::background-color-set': GObject.Object.Notify;
            'notify::child-transform': GObject.Object.Notify;
            'notify::child-transform': GObject.Object.Notify;
            'notify::child-transform-set': GObject.Object.Notify;
            'notify::child-transform-set': GObject.Object.Notify;
            'notify::clip': GObject.Object.Notify;
            'notify::clip-rect': GObject.Object.Notify;
            'notify::clip-rect': GObject.Object.Notify;
            'notify::clip-to-allocation': GObject.Object.Notify;
            'notify::clip-to-allocation': GObject.Object.Notify;
            'notify::constraints': GObject.Object.Notify;
            'notify::content': GObject.Object.Notify;
            'notify::content-box': GObject.Object.Notify;
            'notify::content-box': GObject.Object.Notify;
            'notify::content-gravity': GObject.Object.Notify;
            'notify::content-gravity': GObject.Object.Notify;
            'notify::content-repeat': GObject.Object.Notify;
            'notify::content-repeat': GObject.Object.Notify;
            'notify::depth': GObject.Object.Notify;
            'notify::effect': GObject.Object.Notify;
            'notify::first-child': GObject.Object.Notify;
            'notify::first-child': GObject.Object.Notify;
            'notify::fixed-position-set': GObject.Object.Notify;
            'notify::fixed-position-set': GObject.Object.Notify;
            'notify::fixed-x': GObject.Object.Notify;
            'notify::fixed-x': GObject.Object.Notify;
            'notify::fixed-y': GObject.Object.Notify;
            'notify::fixed-y': GObject.Object.Notify;
            'notify::has-clip': GObject.Object.Notify;
            'notify::has-clip': GObject.Object.Notify;
            'notify::has-pointer': GObject.Object.Notify;
            'notify::has-pointer': GObject.Object.Notify;
            'notify::height': GObject.Object.Notify;
            'notify::last-child': GObject.Object.Notify;
            'notify::last-child': GObject.Object.Notify;
            'notify::layout-manager': GObject.Object.Notify;
            'notify::layout-manager': GObject.Object.Notify;
            'notify::magnification-filter': GObject.Object.Notify;
            'notify::magnification-filter': GObject.Object.Notify;
            'notify::mapped': GObject.Object.Notify;
            'notify::margin-bottom': GObject.Object.Notify;
            'notify::margin-bottom': GObject.Object.Notify;
            'notify::margin-left': GObject.Object.Notify;
            'notify::margin-left': GObject.Object.Notify;
            'notify::margin-right': GObject.Object.Notify;
            'notify::margin-right': GObject.Object.Notify;
            'notify::margin-top': GObject.Object.Notify;
            'notify::margin-top': GObject.Object.Notify;
            'notify::min-height': GObject.Object.Notify;
            'notify::min-height': GObject.Object.Notify;
            'notify::min-height-set': GObject.Object.Notify;
            'notify::min-height-set': GObject.Object.Notify;
            'notify::min-width': GObject.Object.Notify;
            'notify::min-width': GObject.Object.Notify;
            'notify::min-width-set': GObject.Object.Notify;
            'notify::min-width-set': GObject.Object.Notify;
            'notify::minification-filter': GObject.Object.Notify;
            'notify::minification-filter': GObject.Object.Notify;
            'notify::name': GObject.Object.Notify;
            'notify::natural-height': GObject.Object.Notify;
            'notify::natural-height': GObject.Object.Notify;
            'notify::natural-height-set': GObject.Object.Notify;
            'notify::natural-height-set': GObject.Object.Notify;
            'notify::natural-width': GObject.Object.Notify;
            'notify::natural-width': GObject.Object.Notify;
            'notify::natural-width-set': GObject.Object.Notify;
            'notify::natural-width-set': GObject.Object.Notify;
            'notify::offscreen-redirect': GObject.Object.Notify;
            'notify::offscreen-redirect': GObject.Object.Notify;
            'notify::opacity': GObject.Object.Notify;
            'notify::pivot-point': GObject.Object.Notify;
            'notify::pivot-point': GObject.Object.Notify;
            'notify::pivot-point-z': GObject.Object.Notify;
            'notify::pivot-point-z': GObject.Object.Notify;
            'notify::position': GObject.Object.Notify;
            'notify::reactive': GObject.Object.Notify;
            'notify::realized': GObject.Object.Notify;
            'notify::request-mode': GObject.Object.Notify;
            'notify::request-mode': GObject.Object.Notify;
            'notify::rotation-angle-x': GObject.Object.Notify;
            'notify::rotation-angle-x': GObject.Object.Notify;
            'notify::rotation-angle-y': GObject.Object.Notify;
            'notify::rotation-angle-y': GObject.Object.Notify;
            'notify::rotation-angle-z': GObject.Object.Notify;
            'notify::rotation-angle-z': GObject.Object.Notify;
            'notify::rotation-center-x': GObject.Object.Notify;
            'notify::rotation-center-x': GObject.Object.Notify;
            'notify::rotation-center-y': GObject.Object.Notify;
            'notify::rotation-center-y': GObject.Object.Notify;
            'notify::rotation-center-z': GObject.Object.Notify;
            'notify::rotation-center-z': GObject.Object.Notify;
            'notify::rotation-center-z-gravity': GObject.Object.Notify;
            'notify::rotation-center-zgravity': GObject.Object.Notify;
            'notify::scale-center-x': GObject.Object.Notify;
            'notify::scale-center-x': GObject.Object.Notify;
            'notify::scale-center-y': GObject.Object.Notify;
            'notify::scale-center-y': GObject.Object.Notify;
            'notify::scale-gravity': GObject.Object.Notify;
            'notify::scale-gravity': GObject.Object.Notify;
            'notify::scale-x': GObject.Object.Notify;
            'notify::scale-x': GObject.Object.Notify;
            'notify::scale-y': GObject.Object.Notify;
            'notify::scale-y': GObject.Object.Notify;
            'notify::scale-z': GObject.Object.Notify;
            'notify::scale-z': GObject.Object.Notify;
            'notify::show-on-set-parent': GObject.Object.Notify;
            'notify::show-on-set-parent': GObject.Object.Notify;
            'notify::size': GObject.Object.Notify;
            'notify::text-direction': GObject.Object.Notify;
            'notify::text-direction': GObject.Object.Notify;
            'notify::transform': GObject.Object.Notify;
            'notify::transform-set': GObject.Object.Notify;
            'notify::transform-set': GObject.Object.Notify;
            'notify::translation-x': GObject.Object.Notify;
            'notify::translation-x': GObject.Object.Notify;
            'notify::translation-y': GObject.Object.Notify;
            'notify::translation-y': GObject.Object.Notify;
            'notify::translation-z': GObject.Object.Notify;
            'notify::translation-z': GObject.Object.Notify;
            'notify::visible': GObject.Object.Notify;
            'notify::width': GObject.Object.Notify;
            'notify::x': GObject.Object.Notify;
            'notify::x-align': GObject.Object.Notify;
            'notify::x-align': GObject.Object.Notify;
            'notify::x-expand': GObject.Object.Notify;
            'notify::x-expand': GObject.Object.Notify;
            'notify::y': GObject.Object.Notify;
            'notify::y-align': GObject.Object.Notify;
            'notify::y-align': GObject.Object.Notify;
            'notify::y-expand': GObject.Object.Notify;
            'notify::y-expand': GObject.Object.Notify;
            'notify::z-position': GObject.Object.Notify;
            'notify::z-position': GObject.Object.Notify;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Light.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Clutter.Animatable.ConstructorProps,
                Clutter.Container.ConstructorProps,
                Clutter.Scriptable.ConstructorProps {
            constant_attenuation: number;
            constantAttenuation: number;
            linear_attenuation: number;
            linearAttenuation: number;
            quadratic_attenuation: number;
            quadraticAttenuation: number;
        }
    }

    /**
     * The #MashLightClass structure contains only private data.
     */
    class PointLight
        extends Light
        implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable
    {
        static $gtype: GObject.GType<PointLight>;

        // Properties

        get constant_attenuation(): number;
        set constant_attenuation(val: number);
        get constantAttenuation(): number;
        set constantAttenuation(val: number);
        get linear_attenuation(): number;
        set linear_attenuation(val: number);
        get linearAttenuation(): number;
        set linearAttenuation(val: number);
        get quadratic_attenuation(): number;
        set quadratic_attenuation(val: number);
        get quadraticAttenuation(): number;
        set quadraticAttenuation(val: number);

        // Constructors

        constructor(properties?: Partial<PointLight.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): PointLight;

        // Signals

        connect<K extends keyof PointLight.SignalSignatures>(
            signal: K,
            callback: PointLight.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PointLight.SignalSignatures>(
            signal: K,
            callback: PointLight.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PointLight.SignalSignatures>(
            signal: K,
            ...args: PointLight.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_constant_attenuation(): number;
        get_linear_attenuation(): number;
        get_quadratic_attenuation(): number;
        /**
         * Sets the constant attenuation value on a light. The light intensity
         * is divided by this value. Setting a higher value will cause the
         * light to appear dimmer.
         * @param attenuation The new value
         */
        set_constant_attenuation(attenuation: number): void;
        /**
         * Sets the linear attenuation value on a light. The light intensity
         * is divided by this value multiplied by the distance to the
         * light. Setting a higher value will cause the intensity to dim faster
         * as the vertex moves away from the light.
         * @param attenuation The new value
         */
        set_linear_attenuation(attenuation: number): void;
        /**
         * Sets the quadratic attenuation value on a light. The light
         * intensity is divided by this value multiplied by the square of the
         * distance to the light. Setting a higher value will cause the
         * intensity to dim sharply as the vertex moves away from the light.
         * @param attenuation The new value
         */
        set_quadratic_attenuation(attenuation: number): void;

        // Inherited methods
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
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
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
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
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
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
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
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

    namespace SpotLight {
        // Signal signatures
        interface SignalSignatures extends PointLight.SignalSignatures {
            'notify::spot-cutoff': GObject.Object.Notify;
            'notify::spot-cutoff': GObject.Object.Notify;
            'notify::spot-exponent': GObject.Object.Notify;
            'notify::spot-exponent': GObject.Object.Notify;
            'notify::constant-attenuation': GObject.Object.Notify;
            'notify::constant-attenuation': GObject.Object.Notify;
            'notify::linear-attenuation': GObject.Object.Notify;
            'notify::linear-attenuation': GObject.Object.Notify;
            'notify::quadratic-attenuation': GObject.Object.Notify;
            'notify::quadratic-attenuation': GObject.Object.Notify;
            'notify::ambient': GObject.Object.Notify;
            'notify::diffuse': GObject.Object.Notify;
            'notify::specular': GObject.Object.Notify;
            'notify::actions': GObject.Object.Notify;
            'notify::allocation': GObject.Object.Notify;
            'notify::anchor-gravity': GObject.Object.Notify;
            'notify::anchor-gravity': GObject.Object.Notify;
            'notify::anchor-x': GObject.Object.Notify;
            'notify::anchor-x': GObject.Object.Notify;
            'notify::anchor-y': GObject.Object.Notify;
            'notify::anchor-y': GObject.Object.Notify;
            'notify::background-color': GObject.Object.Notify;
            'notify::background-color': GObject.Object.Notify;
            'notify::background-color-set': GObject.Object.Notify;
            'notify::background-color-set': GObject.Object.Notify;
            'notify::child-transform': GObject.Object.Notify;
            'notify::child-transform': GObject.Object.Notify;
            'notify::child-transform-set': GObject.Object.Notify;
            'notify::child-transform-set': GObject.Object.Notify;
            'notify::clip': GObject.Object.Notify;
            'notify::clip-rect': GObject.Object.Notify;
            'notify::clip-rect': GObject.Object.Notify;
            'notify::clip-to-allocation': GObject.Object.Notify;
            'notify::clip-to-allocation': GObject.Object.Notify;
            'notify::constraints': GObject.Object.Notify;
            'notify::content': GObject.Object.Notify;
            'notify::content-box': GObject.Object.Notify;
            'notify::content-box': GObject.Object.Notify;
            'notify::content-gravity': GObject.Object.Notify;
            'notify::content-gravity': GObject.Object.Notify;
            'notify::content-repeat': GObject.Object.Notify;
            'notify::content-repeat': GObject.Object.Notify;
            'notify::depth': GObject.Object.Notify;
            'notify::effect': GObject.Object.Notify;
            'notify::first-child': GObject.Object.Notify;
            'notify::first-child': GObject.Object.Notify;
            'notify::fixed-position-set': GObject.Object.Notify;
            'notify::fixed-position-set': GObject.Object.Notify;
            'notify::fixed-x': GObject.Object.Notify;
            'notify::fixed-x': GObject.Object.Notify;
            'notify::fixed-y': GObject.Object.Notify;
            'notify::fixed-y': GObject.Object.Notify;
            'notify::has-clip': GObject.Object.Notify;
            'notify::has-clip': GObject.Object.Notify;
            'notify::has-pointer': GObject.Object.Notify;
            'notify::has-pointer': GObject.Object.Notify;
            'notify::height': GObject.Object.Notify;
            'notify::last-child': GObject.Object.Notify;
            'notify::last-child': GObject.Object.Notify;
            'notify::layout-manager': GObject.Object.Notify;
            'notify::layout-manager': GObject.Object.Notify;
            'notify::magnification-filter': GObject.Object.Notify;
            'notify::magnification-filter': GObject.Object.Notify;
            'notify::mapped': GObject.Object.Notify;
            'notify::margin-bottom': GObject.Object.Notify;
            'notify::margin-bottom': GObject.Object.Notify;
            'notify::margin-left': GObject.Object.Notify;
            'notify::margin-left': GObject.Object.Notify;
            'notify::margin-right': GObject.Object.Notify;
            'notify::margin-right': GObject.Object.Notify;
            'notify::margin-top': GObject.Object.Notify;
            'notify::margin-top': GObject.Object.Notify;
            'notify::min-height': GObject.Object.Notify;
            'notify::min-height': GObject.Object.Notify;
            'notify::min-height-set': GObject.Object.Notify;
            'notify::min-height-set': GObject.Object.Notify;
            'notify::min-width': GObject.Object.Notify;
            'notify::min-width': GObject.Object.Notify;
            'notify::min-width-set': GObject.Object.Notify;
            'notify::min-width-set': GObject.Object.Notify;
            'notify::minification-filter': GObject.Object.Notify;
            'notify::minification-filter': GObject.Object.Notify;
            'notify::name': GObject.Object.Notify;
            'notify::natural-height': GObject.Object.Notify;
            'notify::natural-height': GObject.Object.Notify;
            'notify::natural-height-set': GObject.Object.Notify;
            'notify::natural-height-set': GObject.Object.Notify;
            'notify::natural-width': GObject.Object.Notify;
            'notify::natural-width': GObject.Object.Notify;
            'notify::natural-width-set': GObject.Object.Notify;
            'notify::natural-width-set': GObject.Object.Notify;
            'notify::offscreen-redirect': GObject.Object.Notify;
            'notify::offscreen-redirect': GObject.Object.Notify;
            'notify::opacity': GObject.Object.Notify;
            'notify::pivot-point': GObject.Object.Notify;
            'notify::pivot-point': GObject.Object.Notify;
            'notify::pivot-point-z': GObject.Object.Notify;
            'notify::pivot-point-z': GObject.Object.Notify;
            'notify::position': GObject.Object.Notify;
            'notify::reactive': GObject.Object.Notify;
            'notify::realized': GObject.Object.Notify;
            'notify::request-mode': GObject.Object.Notify;
            'notify::request-mode': GObject.Object.Notify;
            'notify::rotation-angle-x': GObject.Object.Notify;
            'notify::rotation-angle-x': GObject.Object.Notify;
            'notify::rotation-angle-y': GObject.Object.Notify;
            'notify::rotation-angle-y': GObject.Object.Notify;
            'notify::rotation-angle-z': GObject.Object.Notify;
            'notify::rotation-angle-z': GObject.Object.Notify;
            'notify::rotation-center-x': GObject.Object.Notify;
            'notify::rotation-center-x': GObject.Object.Notify;
            'notify::rotation-center-y': GObject.Object.Notify;
            'notify::rotation-center-y': GObject.Object.Notify;
            'notify::rotation-center-z': GObject.Object.Notify;
            'notify::rotation-center-z': GObject.Object.Notify;
            'notify::rotation-center-z-gravity': GObject.Object.Notify;
            'notify::rotation-center-zgravity': GObject.Object.Notify;
            'notify::scale-center-x': GObject.Object.Notify;
            'notify::scale-center-x': GObject.Object.Notify;
            'notify::scale-center-y': GObject.Object.Notify;
            'notify::scale-center-y': GObject.Object.Notify;
            'notify::scale-gravity': GObject.Object.Notify;
            'notify::scale-gravity': GObject.Object.Notify;
            'notify::scale-x': GObject.Object.Notify;
            'notify::scale-x': GObject.Object.Notify;
            'notify::scale-y': GObject.Object.Notify;
            'notify::scale-y': GObject.Object.Notify;
            'notify::scale-z': GObject.Object.Notify;
            'notify::scale-z': GObject.Object.Notify;
            'notify::show-on-set-parent': GObject.Object.Notify;
            'notify::show-on-set-parent': GObject.Object.Notify;
            'notify::size': GObject.Object.Notify;
            'notify::text-direction': GObject.Object.Notify;
            'notify::text-direction': GObject.Object.Notify;
            'notify::transform': GObject.Object.Notify;
            'notify::transform-set': GObject.Object.Notify;
            'notify::transform-set': GObject.Object.Notify;
            'notify::translation-x': GObject.Object.Notify;
            'notify::translation-x': GObject.Object.Notify;
            'notify::translation-y': GObject.Object.Notify;
            'notify::translation-y': GObject.Object.Notify;
            'notify::translation-z': GObject.Object.Notify;
            'notify::translation-z': GObject.Object.Notify;
            'notify::visible': GObject.Object.Notify;
            'notify::width': GObject.Object.Notify;
            'notify::x': GObject.Object.Notify;
            'notify::x-align': GObject.Object.Notify;
            'notify::x-align': GObject.Object.Notify;
            'notify::x-expand': GObject.Object.Notify;
            'notify::x-expand': GObject.Object.Notify;
            'notify::y': GObject.Object.Notify;
            'notify::y-align': GObject.Object.Notify;
            'notify::y-align': GObject.Object.Notify;
            'notify::y-expand': GObject.Object.Notify;
            'notify::y-expand': GObject.Object.Notify;
            'notify::z-position': GObject.Object.Notify;
            'notify::z-position': GObject.Object.Notify;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends PointLight.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Clutter.Animatable.ConstructorProps,
                Clutter.Container.ConstructorProps,
                Clutter.Scriptable.ConstructorProps {
            spot_cutoff: number;
            spotCutoff: number;
            spot_exponent: number;
            spotExponent: number;
        }
    }

    /**
     * The #MashSpotLight structure contains only private data.
     */
    class SpotLight
        extends PointLight
        implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable
    {
        static $gtype: GObject.GType<SpotLight>;

        // Properties

        get spot_cutoff(): number;
        set spot_cutoff(val: number);
        get spotCutoff(): number;
        set spotCutoff(val: number);
        get spot_exponent(): number;
        set spot_exponent(val: number);
        get spotExponent(): number;
        set spotExponent(val: number);

        // Constructors

        constructor(properties?: Partial<SpotLight.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SpotLight;

        // Signals

        connect<K extends keyof SpotLight.SignalSignatures>(signal: K, callback: SpotLight.SignalSignatures[K]): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SpotLight.SignalSignatures>(
            signal: K,
            callback: SpotLight.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SpotLight.SignalSignatures>(
            signal: K,
            ...args: SpotLight.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_spot_cutoff(): number;
        get_spot_exponent(): number;
        /**
         * Sets the spot cut off value on a light. This is an angle in degrees
         * which defines the shape of the cone of light emitted from the
         * light. It should be within the range 0° to 90°
         * @param cutoff The new value
         */
        set_spot_cutoff(cutoff: number): void;
        /**
         * Sets the spot exponent value on a light. The light intensity is
         * multiplied by the angle between the light direction and the vector
         * to the vertex raised to the power of the exponent. A higher
         * exponent value makes the cone of the light appear smaller.
         * @param exponent The new value
         */
        set_spot_exponent(exponent: number): void;

        // Inherited methods
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
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
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
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
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
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
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
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

    type DataClass = typeof Data;
    type DataLoaderClass = typeof DataLoader;
    /**
     * The #MashDataLoaderData structure contains the loaded data.
     */
    class DataLoaderData {
        static $gtype: GObject.GType<DataLoaderData>;

        // Fields

        vertices_vbo: Cogl.Handle;
        indices: Cogl.Handle;
        min_index: number;
        max_index: number;
        n_triangles: number;
        min_vertex: Clutter.Vertex;
        max_vertex: Clutter.Vertex;

        // Constructors

        constructor(
            properties?: Partial<{
                vertices_vbo: Cogl.Handle;
                indices: Cogl.Handle;
                min_index: number;
                max_index: number;
                n_triangles: number;
                min_vertex: Clutter.Vertex;
                max_vertex: Clutter.Vertex;
            }>,
        );
        _init(...args: any[]): void;
    }

    abstract class DataLoaderPrivate {
        static $gtype: GObject.GType<DataLoaderPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class DataPrivate {
        static $gtype: GObject.GType<DataPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DirectionalLightClass = typeof DirectionalLight;
    abstract class DirectionalLightPrivate {
        static $gtype: GObject.GType<DirectionalLightPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type LightClass = typeof Light;
    abstract class LightPrivate {
        static $gtype: GObject.GType<LightPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type LightSetClass = typeof LightSet;
    abstract class LightSetPrivate {
        static $gtype: GObject.GType<LightSetPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ModelClass = typeof Model;
    abstract class ModelPrivate {
        static $gtype: GObject.GType<ModelPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type PlyLoaderClass = typeof PlyLoader;
    abstract class PlyLoaderPrivate {
        static $gtype: GObject.GType<PlyLoaderPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type PointLightClass = typeof PointLight;
    abstract class PointLightPrivate {
        static $gtype: GObject.GType<PointLightPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type SpotLightClass = typeof SpotLight;
    abstract class SpotLightPrivate {
        static $gtype: GObject.GType<SpotLightPrivate>;

        // Constructors

        _init(...args: any[]): void;
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

export default Mash;

// END
