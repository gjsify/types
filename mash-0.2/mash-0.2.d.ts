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
import type Clutter from '@girs/clutter-1.0';
import type cairo from 'cairo';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Json from '@girs/json-1.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GL from '@girs/gl-1.0';
import type CoglPango from '@girs/coglpango-1.0';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Cogl from '@girs/cogl-1.0';
import type Atk from '@girs/atk-1.0';

export namespace Mash {
    /**
     * Mash-0.2
     */

    /**
     * Error enumeration for {@link Mash.Data}
     * @gir-type Enum
     */
    enum DataError {
        /**
         * The file has an unknown format.
         */
        UNKNOWN_FORMAT,
        /**
         * The underlying library reported an error.
         */
        UNKNOWN,
        /**
         * A property that is needed
         *  by {@link Mash.Data} is not present in the file. For example, this
         *  will happen if the file does not contain the x, y and z properties.
         */
        MISSING_PROPERTY,
        /**
         * The file is not valid.
         */
        INVALID,
        /**
         * The file is not supported
         *  by your GL driver. This will happen if your driver can't support
         *  GL_UNSIGNED_INT indices but the model has more than 65,536
         *  vertices.
         */
        UNSUPPORTED,
    }

    /**
     * Flags used for modifying the data as it is loaded. These can be
     * passed to `mash_data_load()`.
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
     * pass the {@link Mash.DataFlags.NEGATE_Y} flag.
     * @gir-type Enum
     */
    enum DataFlags {
        /**
         * No flags
         */
        NONE,
        /**
         * Negate the X axis
         */
        NEGATE_X,
        /**
         * Negate the Y axis
         */
        NEGATE_Y,
        /**
         * Negate the Z axis
         */
        NEGATE_Z,
    }

    namespace Data {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * The {@link Mash.Data} structure contains only private data.
     * @gir-type Class
     */
    class Data extends GObject.Object {
        static $gtype: GObject.GType<Data>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Data.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Data.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Data;

        // Signals

        /** @signal */
        connect<K extends keyof Data.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Data.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Data.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Data.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Data.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Data.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
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
         * model can then be rendered using `mash_data_render()`. If
         * there is an error loading the file it will return `false` and `error`
         * will be set to a GError instance.
         * @param flags Flags used to specify load-time modifications to the data
         * @param filename The name of a file to load
         * @returns `true` if the load succeeded or `false` otherwise.
         */
        load(flags: DataFlags | null, filename: string): boolean;
        /**
         * Renders the data contained in the model to the Clutter
         * scene. The current Cogl source material will be used to affect the
         * appearance of the model. This function is not usually called
         * directly but instead the {@link Mash.Data} instance is added to a
         * {@link Mash.Model} and this function will be automatically called by
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
     * The {@link Mash.DataLoader} structure contains only private data.
     * @gir-type Class
     */
    abstract class DataLoader extends GObject.Object {
        static $gtype: GObject.GType<DataLoader>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DataLoader.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DataLoader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof DataLoader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DataLoader.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DataLoader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DataLoader.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DataLoader.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DataLoader.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Virtual used to get the loaded data
         * @param loader_data
         * @virtual
         */
        vfunc_get_data(loader_data: DataLoaderData): void;
        /**
         * Obtains the loaded data after calling `mash_data_loader_load()`.
         * This function is not usually called by applications.
         * @param flags
         * @param filename
         * @virtual
         */
        vfunc_load(flags: DataFlags, filename: string): boolean;

        // Methods

        /**
         * @param loader_data
         */
        get_data(loader_data: DataLoaderData): void;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.get_data
        get_data(...args: never[]): any;
        /**
         * Obtains the loaded data after calling `mash_data_loader_load()`.
         * This function is not usually called by applications.
         * @param flags
         * @param filename
         */
        load(flags: DataFlags | null, filename: string): boolean;
    }

    namespace DirectionalLight {
        // Signal signatures
        interface SignalSignatures extends Light.SignalSignatures {
            'notify::ambient': (pspec: GObject.ParamSpec) => void;
            'notify::diffuse': (pspec: GObject.ParamSpec) => void;
            'notify::specular': (pspec: GObject.ParamSpec) => void;
            'notify::actions': (pspec: GObject.ParamSpec) => void;
            'notify::allocation': (pspec: GObject.ParamSpec) => void;
            'notify::anchor-gravity': (pspec: GObject.ParamSpec) => void;
            'notify::anchor-x': (pspec: GObject.ParamSpec) => void;
            'notify::anchor-y': (pspec: GObject.ParamSpec) => void;
            'notify::background-color': (pspec: GObject.ParamSpec) => void;
            'notify::background-color-set': (pspec: GObject.ParamSpec) => void;
            'notify::child-transform': (pspec: GObject.ParamSpec) => void;
            'notify::child-transform-set': (pspec: GObject.ParamSpec) => void;
            'notify::clip': (pspec: GObject.ParamSpec) => void;
            'notify::clip-rect': (pspec: GObject.ParamSpec) => void;
            'notify::clip-to-allocation': (pspec: GObject.ParamSpec) => void;
            'notify::constraints': (pspec: GObject.ParamSpec) => void;
            'notify::content': (pspec: GObject.ParamSpec) => void;
            'notify::content-box': (pspec: GObject.ParamSpec) => void;
            'notify::content-gravity': (pspec: GObject.ParamSpec) => void;
            'notify::content-repeat': (pspec: GObject.ParamSpec) => void;
            'notify::depth': (pspec: GObject.ParamSpec) => void;
            'notify::effect': (pspec: GObject.ParamSpec) => void;
            'notify::first-child': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-position-set': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-x': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-y': (pspec: GObject.ParamSpec) => void;
            'notify::has-clip': (pspec: GObject.ParamSpec) => void;
            'notify::has-pointer': (pspec: GObject.ParamSpec) => void;
            'notify::height': (pspec: GObject.ParamSpec) => void;
            'notify::last-child': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::magnification-filter': (pspec: GObject.ParamSpec) => void;
            'notify::mapped': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::min-height': (pspec: GObject.ParamSpec) => void;
            'notify::min-height-set': (pspec: GObject.ParamSpec) => void;
            'notify::min-width': (pspec: GObject.ParamSpec) => void;
            'notify::min-width-set': (pspec: GObject.ParamSpec) => void;
            'notify::minification-filter': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::natural-height': (pspec: GObject.ParamSpec) => void;
            'notify::natural-height-set': (pspec: GObject.ParamSpec) => void;
            'notify::natural-width': (pspec: GObject.ParamSpec) => void;
            'notify::natural-width-set': (pspec: GObject.ParamSpec) => void;
            'notify::offscreen-redirect': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::pivot-point': (pspec: GObject.ParamSpec) => void;
            'notify::pivot-point-z': (pspec: GObject.ParamSpec) => void;
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::reactive': (pspec: GObject.ParamSpec) => void;
            'notify::realized': (pspec: GObject.ParamSpec) => void;
            'notify::request-mode': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-x': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-y': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-z': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-center-x': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-center-y': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-center-z': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-center-z-gravity': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-center-zgravity': (pspec: GObject.ParamSpec) => void;
            'notify::scale-center-x': (pspec: GObject.ParamSpec) => void;
            'notify::scale-center-y': (pspec: GObject.ParamSpec) => void;
            'notify::scale-gravity': (pspec: GObject.ParamSpec) => void;
            'notify::scale-x': (pspec: GObject.ParamSpec) => void;
            'notify::scale-y': (pspec: GObject.ParamSpec) => void;
            'notify::scale-z': (pspec: GObject.ParamSpec) => void;
            'notify::show-on-set-parent': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::text-direction': (pspec: GObject.ParamSpec) => void;
            'notify::transform': (pspec: GObject.ParamSpec) => void;
            'notify::transform-set': (pspec: GObject.ParamSpec) => void;
            'notify::translation-x': (pspec: GObject.ParamSpec) => void;
            'notify::translation-y': (pspec: GObject.ParamSpec) => void;
            'notify::translation-z': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width': (pspec: GObject.ParamSpec) => void;
            'notify::x': (pspec: GObject.ParamSpec) => void;
            'notify::x-align': (pspec: GObject.ParamSpec) => void;
            'notify::x-expand': (pspec: GObject.ParamSpec) => void;
            'notify::y': (pspec: GObject.ParamSpec) => void;
            'notify::y-align': (pspec: GObject.ParamSpec) => void;
            'notify::y-expand': (pspec: GObject.ParamSpec) => void;
            'notify::z-position': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Light.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Clutter.Animatable.ConstructorProps,
                Clutter.Container.ConstructorProps,
                Clutter.Scriptable.ConstructorProps {}
    }

    /**
     * The {@link Mash.DirectionalLight} structure contains only private data.
     * @gir-type Class
     */
    class DirectionalLight
        extends Light
        implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable
    {
        static $gtype: GObject.GType<DirectionalLight>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DirectionalLight.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DirectionalLight.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DirectionalLight;

        // Signals

        /** @signal */
        connect<K extends keyof DirectionalLight.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DirectionalLight.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DirectionalLight.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DirectionalLight.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DirectionalLight.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DirectionalLight.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
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
         * a [floating](floating-refs.html) object reference. Doing this is seldom
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
         * Checks whether `object` has a [floating](floating-refs.html) reference.
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
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
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

    namespace Light {
        // Signal signatures
        interface SignalSignatures extends Clutter.Actor.SignalSignatures {
            'notify::ambient': (pspec: GObject.ParamSpec) => void;
            'notify::diffuse': (pspec: GObject.ParamSpec) => void;
            'notify::specular': (pspec: GObject.ParamSpec) => void;
            'notify::actions': (pspec: GObject.ParamSpec) => void;
            'notify::allocation': (pspec: GObject.ParamSpec) => void;
            'notify::anchor-gravity': (pspec: GObject.ParamSpec) => void;
            'notify::anchor-x': (pspec: GObject.ParamSpec) => void;
            'notify::anchor-y': (pspec: GObject.ParamSpec) => void;
            'notify::background-color': (pspec: GObject.ParamSpec) => void;
            'notify::background-color-set': (pspec: GObject.ParamSpec) => void;
            'notify::child-transform': (pspec: GObject.ParamSpec) => void;
            'notify::child-transform-set': (pspec: GObject.ParamSpec) => void;
            'notify::clip': (pspec: GObject.ParamSpec) => void;
            'notify::clip-rect': (pspec: GObject.ParamSpec) => void;
            'notify::clip-to-allocation': (pspec: GObject.ParamSpec) => void;
            'notify::constraints': (pspec: GObject.ParamSpec) => void;
            'notify::content': (pspec: GObject.ParamSpec) => void;
            'notify::content-box': (pspec: GObject.ParamSpec) => void;
            'notify::content-gravity': (pspec: GObject.ParamSpec) => void;
            'notify::content-repeat': (pspec: GObject.ParamSpec) => void;
            'notify::depth': (pspec: GObject.ParamSpec) => void;
            'notify::effect': (pspec: GObject.ParamSpec) => void;
            'notify::first-child': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-position-set': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-x': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-y': (pspec: GObject.ParamSpec) => void;
            'notify::has-clip': (pspec: GObject.ParamSpec) => void;
            'notify::has-pointer': (pspec: GObject.ParamSpec) => void;
            'notify::height': (pspec: GObject.ParamSpec) => void;
            'notify::last-child': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::magnification-filter': (pspec: GObject.ParamSpec) => void;
            'notify::mapped': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::min-height': (pspec: GObject.ParamSpec) => void;
            'notify::min-height-set': (pspec: GObject.ParamSpec) => void;
            'notify::min-width': (pspec: GObject.ParamSpec) => void;
            'notify::min-width-set': (pspec: GObject.ParamSpec) => void;
            'notify::minification-filter': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::natural-height': (pspec: GObject.ParamSpec) => void;
            'notify::natural-height-set': (pspec: GObject.ParamSpec) => void;
            'notify::natural-width': (pspec: GObject.ParamSpec) => void;
            'notify::natural-width-set': (pspec: GObject.ParamSpec) => void;
            'notify::offscreen-redirect': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::pivot-point': (pspec: GObject.ParamSpec) => void;
            'notify::pivot-point-z': (pspec: GObject.ParamSpec) => void;
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::reactive': (pspec: GObject.ParamSpec) => void;
            'notify::realized': (pspec: GObject.ParamSpec) => void;
            'notify::request-mode': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-x': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-y': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-z': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-center-x': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-center-y': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-center-z': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-center-z-gravity': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-center-zgravity': (pspec: GObject.ParamSpec) => void;
            'notify::scale-center-x': (pspec: GObject.ParamSpec) => void;
            'notify::scale-center-y': (pspec: GObject.ParamSpec) => void;
            'notify::scale-gravity': (pspec: GObject.ParamSpec) => void;
            'notify::scale-x': (pspec: GObject.ParamSpec) => void;
            'notify::scale-y': (pspec: GObject.ParamSpec) => void;
            'notify::scale-z': (pspec: GObject.ParamSpec) => void;
            'notify::show-on-set-parent': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::text-direction': (pspec: GObject.ParamSpec) => void;
            'notify::transform': (pspec: GObject.ParamSpec) => void;
            'notify::transform-set': (pspec: GObject.ParamSpec) => void;
            'notify::translation-x': (pspec: GObject.ParamSpec) => void;
            'notify::translation-y': (pspec: GObject.ParamSpec) => void;
            'notify::translation-z': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width': (pspec: GObject.ParamSpec) => void;
            'notify::x': (pspec: GObject.ParamSpec) => void;
            'notify::x-align': (pspec: GObject.ParamSpec) => void;
            'notify::x-expand': (pspec: GObject.ParamSpec) => void;
            'notify::y': (pspec: GObject.ParamSpec) => void;
            'notify::y-align': (pspec: GObject.ParamSpec) => void;
            'notify::y-expand': (pspec: GObject.ParamSpec) => void;
            'notify::z-position': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Clutter.Actor.ConstructorProps,
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
     * The {@link Mash.Light} structure contains only private data.
     * @gir-type Class
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

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Light.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Light.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Light.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Light.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Light.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Light.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Light.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Light.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * This function is used to generate the shader code required to
         * implement a paraticular. It would not usually need to be called
         * from an application. Instead it is called automatically by
         * {@link Mash.LightSet}.
         *
         * This function can be overriden in subclasses of {@link Mash.Light} to
         * implement custom lighting algorithms. The function will be called
         * before the first actor that is using the light set is painted
         * whenever it deems that the shader needs to be regenerated. It
         * currently will do this whenever a light is added or removed from
         * the box. The implementation should append any GLSL code to
         * `uniform_source` and `main_source` needed to implement the algorithm.
         *
         * The implementation should use `mash_light_append_shader()` to append
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
         * The implementation should always chain up to the {@link Mash.Light}
         * implementation so that it can declare the built-in uniforms.
         * @param uniform_source A location to append uniforms declarations to
         * @param main_source A location to append lighting algorithm snippets to
         * @virtual
         */
        vfunc_generate_shader(uniform_source: GLib.String, main_source: GLib.String): void;
        /**
         * This function is used by {@link Mash.LightSet} to implement the lights. It
         * should not need to be called by an application directly.
         *
         * This function is virtual and can be overriden by subclasses to
         * implement custom lighting algorithms. The function is called during
         * the paint sequence of {@link Mash.LightSet} on every light before any other
         * actors are painted. This gives the light implementation a chance to
         * update any uniforms it may have declared in the override of
         * `mash_light_generate_shader()`.
         *
         * The program is always made current with `cogl_program_use()` before
         * this method is called so it is safe to directly call
         * `cogl_program_uniform_1f()` and friends to update the uniforms. The
         * `program` handle is passed in so that the program can also be
         * queried to the locations of named
         * uniforms. `mash_light_get_uniform_location()` can be used to make
         * this easier when a uniform is named uniquely using the ‘$’ symbol
         * in `mash_light_append_shader()`.
         * @param program A `CoglProgram` containing the uniforms
         * @virtual
         */
        vfunc_update_uniforms(program: Cogl.Handle): void;

        // Methods

        /**
         * This is a convenience intended to be used within
         * `mash_light_generate_shader()` to generate shader snippets with
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
         * {@link Mash.LightSet}.
         *
         * This function can be overriden in subclasses of {@link Mash.Light} to
         * implement custom lighting algorithms. The function will be called
         * before the first actor that is using the light set is painted
         * whenever it deems that the shader needs to be regenerated. It
         * currently will do this whenever a light is added or removed from
         * the box. The implementation should append any GLSL code to
         * `uniform_source` and `main_source` needed to implement the algorithm.
         *
         * The implementation should use `mash_light_append_shader()` to append
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
         * The implementation should always chain up to the {@link Mash.Light}
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
         * `mash_light_update_uniforms()` to help query uniform locations. It
         * should not generally need to be called by an application unless it
         * is implementing its own lighting algorithms.
         *
         * This is a wrapper around `cogl_program_get_uniform_location()` which
         * appends an actor specific string to the uniform name. This is
         * useful when uniforms have been declared like ‘position$’ within
         * `mash_light_append_shader()`.
         * @param program The program passed in from `mash_light_update_uniforms()`.
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
         * `mash_light_update_uniforms()` to help set uniforms. It
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
         * This function is used by {@link Mash.LightSet} to implement the lights. It
         * should not need to be called by an application directly.
         *
         * This function is virtual and can be overriden by subclasses to
         * implement custom lighting algorithms. The function is called during
         * the paint sequence of {@link Mash.LightSet} on every light before any other
         * actors are painted. This gives the light implementation a chance to
         * update any uniforms it may have declared in the override of
         * `mash_light_generate_shader()`.
         *
         * The program is always made current with `cogl_program_use()` before
         * this method is called so it is safe to directly call
         * `cogl_program_uniform_1f()` and friends to update the uniforms. The
         * `program` handle is passed in so that the program can also be
         * queried to the locations of named
         * uniforms. `mash_light_get_uniform_location()` can be used to make
         * this easier when a uniform is named uniquely using the ‘$’ symbol
         * in `mash_light_append_shader()`.
         * @param program A `CoglProgram` containing the uniforms
         */
        update_uniforms(program: Cogl.Handle): void;
        /**
         * Calls the `animate_property()` virtual function for `animatable`.
         *
         * The `initial_value` and `final_value` {@link GObject.Value}<!-- -->s must contain
         * the same type; `value` must have been initialized to the same
         * type of `initial_value` and `final_value`.
         *
         * All implementation of the {@link Clutter.Animatable} interface must
         * implement this function.
         * @param animation a {@link Clutter.Animation}
         * @param property_name the name of the animated property
         * @param initial_value the initial value of the animation interval
         * @param final_value the final value of the animation interval
         * @param progress the progress factor
         * @param value return location for the animation value
         * @returns `true` if the value has been validated and can   be applied to the {@link Clutter.Animatable}, and `false` otherwise
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
         * Finds the {@link GObject.ParamSpec} for `property_name`
         * @param property_name the name of the animatable property to find
         * @returns The {@link GObject.ParamSpec} for the given property   or `null`
         */
        find_property(property_name: string): GObject.ParamSpec;
        /**
         * Retrieves the current state of `property_name` and sets `value` with it
         * @param property_name the name of the animatable property to retrieve
         * @param value a {@link GObject.Value} initialized to the type of the property to retrieve
         */
        get_initial_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Asks a {@link Clutter.Animatable} implementation to interpolate a
         * a named property between the initial and final values of
         * a {@link Clutter.Interval}, using `progress` as the interpolation
         * value, and store the result inside `value`.
         *
         * This function should be used for every property animation
         * involving {@link Clutter.Animatable}<!-- -->s.
         *
         * This function replaces `clutter_animatable_animate_property()`.
         * @param property_name the name of the property to interpolate
         * @param interval a {@link Clutter.Interval} with the animation range
         * @param progress the progress to use to interpolate between the   initial and final values of the `interval`
         * @returns `true` if the interpolation was successful,   and `false` otherwise
         */
        interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [boolean, unknown];
        /**
         * Sets the current state of `property_name` to `value`
         * @param property_name the name of the animatable property to set
         * @param value the value of the animatable property to set
         */
        set_final_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Calls the `animate_property()` virtual function for `animatable`.
         *
         * The `initial_value` and `final_value` {@link GObject.Value}<!-- -->s must contain
         * the same type; `value` must have been initialized to the same
         * type of `initial_value` and `final_value`.
         *
         * All implementation of the {@link Clutter.Animatable} interface must
         * implement this function.
         * @param animation a {@link Clutter.Animation}
         * @param property_name the name of the animated property
         * @param initial_value the initial value of the animation interval
         * @param final_value the final value of the animation interval
         * @param progress the progress factor
         * @param value return location for the animation value
         * @virtual
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
         * Finds the {@link GObject.ParamSpec} for `property_name`
         * @param property_name the name of the animatable property to find
         * @virtual
         */
        vfunc_find_property(property_name: string): GObject.ParamSpec;
        /**
         * Retrieves the current state of `property_name` and sets `value` with it
         * @param property_name the name of the animatable property to retrieve
         * @param value a {@link GObject.Value} initialized to the type of the property to retrieve
         * @virtual
         */
        vfunc_get_initial_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Asks a {@link Clutter.Animatable} implementation to interpolate a
         * a named property between the initial and final values of
         * a {@link Clutter.Interval}, using `progress` as the interpolation
         * value, and store the result inside `value`.
         *
         * This function should be used for every property animation
         * involving {@link Clutter.Animatable}<!-- -->s.
         *
         * This function replaces `clutter_animatable_animate_property()`.
         * @param property_name the name of the property to interpolate
         * @param interval a {@link Clutter.Interval} with the animation range
         * @param progress the progress to use to interpolate between the   initial and final values of the `interval`
         * @virtual
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
         * @virtual
         */
        vfunc_set_final_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Adds a {@link Clutter.Actor} to `container`. This function will emit the
         * "actor-added" signal. The actor should be parented to
         * `container`. You cannot add a {@link Clutter.Actor} to more than one
         * {@link Clutter.Container}.
         *
         * This function will call {@link Clutter.ContainerIface}.add(), which is a
         * deprecated virtual function. The default implementation will
         * call `clutter_actor_add_child()`.
         * @param actor the first {@link Clutter.Actor} to add
         */
        add_actor(actor: Clutter.Actor): void;
        /**
         * Gets a container specific property of a child of `container`, In general,
         * a copy is made of the property contents and the caller is responsible for
         * freeing the memory by calling `g_value_unset()`.
         *
         * Note that `clutter_container_child_set_property()` is really intended for
         * language bindings, `clutter_container_child_set()` is much more convenient
         * for C programming.
         * @param child a {@link Clutter.Actor} that is a child of `container`.
         * @param property the name of the property to set.
         * @param value the value.
         */
        child_get_property(child: Clutter.Actor, property: string, value: GObject.Value | any): void;
        /**
         * Calls the {@link Clutter.ContainerIface}.child_notify() virtual function
         * of {@link Clutter.Container}. The default implementation will emit the
         * {@link Clutter.Container.SignalSignatures.child_notify | Clutter.Container::child-notify} signal.
         * @param child a {@link Clutter.Actor}
         * @param pspec a {@link GObject.ParamSpec}
         */
        child_notify(child: Clutter.Actor, pspec: GObject.ParamSpec): void;
        /**
         * Sets a container-specific property on a child of `container`.
         * @param child a {@link Clutter.Actor} that is a child of `container`.
         * @param property the name of the property to set.
         * @param value the value.
         */
        child_set_property(child: Clutter.Actor, property: string, value: GObject.Value | any): void;
        /**
         * Creates the {@link Clutter.ChildMeta} wrapping `actor` inside the
         * `container`, if the {@link Clutter.ContainerIface.SignalSignatures.child_meta_type | Clutter.ContainerIface::child_meta_type}
         * class member is not set to `G_TYPE_INVALID`.
         *
         * This function is only useful when adding a {@link Clutter.Actor} to
         * a {@link Clutter.Container} implementation outside of the
         * {@link Clutter.Container.SignalSignatures.add | Clutter.Container::add}() virtual function implementation.
         *
         * Applications should not call this function.
         * @param actor a {@link Clutter.Actor}
         */
        create_child_meta(actor: Clutter.Actor): void;
        /**
         * Destroys the {@link Clutter.ChildMeta} wrapping `actor` inside the
         * `container`, if any.
         *
         * This function is only useful when removing a {@link Clutter.Actor} to
         * a {@link Clutter.Container} implementation outside of the
         * {@link Clutter.Container.SignalSignatures.add | Clutter.Container::add}() virtual function implementation.
         *
         * Applications should not call this function.
         * @param actor a {@link Clutter.Actor}
         */
        destroy_child_meta(actor: Clutter.Actor): void;
        /**
         * Finds a child actor of a container by its name. Search recurses
         * into any child container.
         * @param child_name the name of the requested child.
         * @returns The child actor with the requested name,   or `null` if no actor with that name was found.
         */
        find_child_by_name(child_name: string): Clutter.Actor;
        /**
         * Calls `callback` for each child of `container` that was added
         * by the application (with `clutter_container_add_actor()`). Does
         * not iterate over "internal" children that are part of the
         * container's own implementation, if any.
         *
         * This function calls the {@link Clutter.ContainerIface}.foreach()
         * virtual function, which has been deprecated.
         * @param callback a function to be called for each child
         */
        foreach(callback: Clutter.Callback): void;
        /**
         * Calls `callback` for each child of `container`, including "internal"
         * children built in to the container itself that were never added
         * by the application.
         *
         * This function calls the {@link Clutter.ContainerIface}.foreach_with_internals()
         * virtual function, which has been deprecated.
         * @param callback a function to be called for each child
         */
        foreach_with_internals(callback: Clutter.Callback): void;
        /**
         * Retrieves the {@link Clutter.ChildMeta} which contains the data about the
         * `container` specific state for `actor`.
         * @param actor a {@link Clutter.Actor} that is a child of `container`.
         * @returns the {@link Clutter.ChildMeta} for the `actor` child   of `container` or `null` if the specifiec actor does not exist or the   container is not configured to provide {@link Clutter.ChildMeta}<!-- -->s
         */
        get_child_meta(actor: Clutter.Actor): Clutter.ChildMeta;
        /**
         * Retrieves all the children of `container`.
         * @returns a list   of {@link Clutter.Actor}<!-- -->s. Use `g_list_free()` on the returned   list when done.
         */
        get_children(): Clutter.Actor[];
        /**
         * Lowers `actor` to `sibling` level, in the depth ordering.
         *
         * This function calls the {@link Clutter.ContainerIface}.lower() virtual function,
         * which has been deprecated. The default implementation will call
         * `clutter_actor_set_child_below_sibling()`.
         * @param actor the actor to raise
         * @param sibling the sibling to lower to, or `null` to lower   to the bottom
         */
        lower_child(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void;
        /**
         * Raises `actor` to `sibling` level, in the depth ordering.
         *
         * This function calls the {@link Clutter.ContainerIface}.raise() virtual function,
         * which has been deprecated. The default implementation will call
         * `clutter_actor_set_child_above_sibling()`.
         * @param actor the actor to raise
         * @param sibling the sibling to raise to, or `null` to raise   to the top
         */
        raise_child(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void;
        /**
         * Removes `actor` from `container`. The actor should be unparented, so
         * if you want to keep it around you must hold a reference to it
         * yourself, using `g_object_ref()`. When the actor has been removed,
         * the "actor-removed" signal is emitted by `container`.
         *
         * This function will call {@link Clutter.ContainerIface}.remove(), which is a
         * deprecated virtual function. The default implementation will call
         * `clutter_actor_remove_child()`.
         * @param actor a {@link Clutter.Actor}
         */
        remove_actor(actor: Clutter.Actor): void;
        /**
         * Sorts a container's children using their depth. This function should not
         * be normally used by applications.
         */
        sort_depth_order(): void;
        /**
         * class handler for {@link Clutter.Container.SignalSignatures.actor_added | Clutter.Container::actor-added}
         * @param actor
         * @virtual
         */
        vfunc_actor_added(actor: Clutter.Actor): void;
        /**
         * class handler for {@link Clutter.Container.SignalSignatures.actor_removed | Clutter.Container::actor-removed}
         * @param actor
         * @virtual
         */
        vfunc_actor_removed(actor: Clutter.Actor): void;
        /**
         * Adds a {@link Clutter.Actor} to `container`. This function will emit the
         * "actor-added" signal. The actor should be parented to
         * `container`. You cannot add a {@link Clutter.Actor} to more than one
         * {@link Clutter.Container}.
         *
         * This function will call {@link Clutter.ContainerIface}.add(), which is a
         * deprecated virtual function. The default implementation will
         * call `clutter_actor_add_child()`.
         * @param actor the first {@link Clutter.Actor} to add
         * @virtual
         */
        vfunc_add(actor: Clutter.Actor): void;
        /**
         * Calls the {@link Clutter.ContainerIface}.child_notify() virtual function
         * of {@link Clutter.Container}. The default implementation will emit the
         * {@link Clutter.Container.SignalSignatures.child_notify | Clutter.Container::child-notify} signal.
         * @param child a {@link Clutter.Actor}
         * @param pspec a {@link GObject.ParamSpec}
         * @virtual
         */
        vfunc_child_notify(child: Clutter.Actor, pspec: GObject.ParamSpec): void;
        /**
         * Creates the {@link Clutter.ChildMeta} wrapping `actor` inside the
         * `container`, if the {@link Clutter.ContainerIface.SignalSignatures.child_meta_type | Clutter.ContainerIface::child_meta_type}
         * class member is not set to `G_TYPE_INVALID`.
         *
         * This function is only useful when adding a {@link Clutter.Actor} to
         * a {@link Clutter.Container} implementation outside of the
         * {@link Clutter.Container.SignalSignatures.add | Clutter.Container::add}() virtual function implementation.
         *
         * Applications should not call this function.
         * @param actor a {@link Clutter.Actor}
         * @virtual
         */
        vfunc_create_child_meta(actor: Clutter.Actor): void;
        /**
         * Destroys the {@link Clutter.ChildMeta} wrapping `actor` inside the
         * `container`, if any.
         *
         * This function is only useful when removing a {@link Clutter.Actor} to
         * a {@link Clutter.Container} implementation outside of the
         * {@link Clutter.Container.SignalSignatures.add | Clutter.Container::add}() virtual function implementation.
         *
         * Applications should not call this function.
         * @param actor a {@link Clutter.Actor}
         * @virtual
         */
        vfunc_destroy_child_meta(actor: Clutter.Actor): void;
        /**
         * Calls `callback` for each child of `container` that was added
         * by the application (with `clutter_container_add_actor()`). Does
         * not iterate over "internal" children that are part of the
         * container's own implementation, if any.
         *
         * This function calls the {@link Clutter.ContainerIface}.foreach()
         * virtual function, which has been deprecated.
         * @param callback a function to be called for each child
         * @virtual
         */
        vfunc_foreach(callback: Clutter.Callback): void;
        /**
         * Calls `callback` for each child of `container`, including "internal"
         * children built in to the container itself that were never added
         * by the application.
         *
         * This function calls the {@link Clutter.ContainerIface}.foreach_with_internals()
         * virtual function, which has been deprecated.
         * @param callback a function to be called for each child
         * @virtual
         */
        vfunc_foreach_with_internals(callback: Clutter.Callback): void;
        /**
         * Retrieves the {@link Clutter.ChildMeta} which contains the data about the
         * `container` specific state for `actor`.
         * @param actor a {@link Clutter.Actor} that is a child of `container`.
         * @virtual
         */
        vfunc_get_child_meta(actor: Clutter.Actor): Clutter.ChildMeta;
        /**
         * Lowers `actor` to `sibling` level, in the depth ordering.
         *
         * This function calls the {@link Clutter.ContainerIface}.lower() virtual function,
         * which has been deprecated. The default implementation will call
         * `clutter_actor_set_child_below_sibling()`.
         * @param actor the actor to raise
         * @param sibling the sibling to lower to, or `null` to lower   to the bottom
         * @virtual
         */
        vfunc_lower(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void;
        /**
         * Raises `actor` to `sibling` level, in the depth ordering.
         *
         * This function calls the {@link Clutter.ContainerIface}.raise() virtual function,
         * which has been deprecated. The default implementation will call
         * `clutter_actor_set_child_above_sibling()`.
         * @param actor the actor to raise
         * @param sibling the sibling to raise to, or `null` to raise   to the top
         * @virtual
         */
        vfunc_raise(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void;
        /**
         * Removes `actor` from `container`. The actor should be unparented, so
         * if you want to keep it around you must hold a reference to it
         * yourself, using `g_object_ref()`. When the actor has been removed,
         * the "actor-removed" signal is emitted by `container`.
         *
         * This function will call {@link Clutter.ContainerIface}.remove(), which is a
         * deprecated virtual function. The default implementation will call
         * `clutter_actor_remove_child()`.
         * @param actor a {@link Clutter.Actor}
         * @virtual
         */
        vfunc_remove(actor: Clutter.Actor): void;
        /**
         * Sorts a container's children using their depth. This function should not
         * be normally used by applications.
         * @virtual
         */
        vfunc_sort_depth_order(): void;
        /**
         * Retrieves the id of `scriptable` set using `clutter_scriptable_set_id()`.
         * @returns the id of the object. The returned string is owned by   the scriptable object and should never be modified of freed
         */
        get_id(): string;
        /**
         * Parses the passed JSON node. The implementation must set the type
         * of the passed {@link GObject.Value} pointer using `g_value_init()`.
         * @param script the {@link Clutter.Script} creating the scriptable instance
         * @param value the generic value to be set
         * @param name the name of the node
         * @param node the JSON node to be parsed
         * @returns `true` if the node was successfully parsed, `false` otherwise.
         */
        parse_custom_node(script: Clutter.Script, value: GObject.Value | any, name: string, node: Json.Node): boolean;
        /**
         * Overrides the common properties setting. The underlying virtual
         * function should be used when implementing custom properties.
         * @param script the {@link Clutter.Script} creating the scriptable instance
         * @param name the name of the property
         * @param value the value of the property
         */
        set_custom_property(script: Clutter.Script, name: string, value: GObject.Value | any): void;
        /**
         * Sets `id_` as the unique Clutter script it for this instance of
         * {@link Clutter.ScriptableIface}.
         *
         * This name can be used by user interface designer applications to
         * define a unique name for an object constructable using the UI
         * definition language parsed by {@link Clutter.Script}.
         * @param id_ the {@link Clutter.Script} id of the object
         */
        set_id(id_: string): void;
        /**
         * Retrieves the id of `scriptable` set using `clutter_scriptable_set_id()`.
         * @virtual
         */
        vfunc_get_id(): string;
        /**
         * Parses the passed JSON node. The implementation must set the type
         * of the passed {@link GObject.Value} pointer using `g_value_init()`.
         * @param script the {@link Clutter.Script} creating the scriptable instance
         * @param value the generic value to be set
         * @param name the name of the node
         * @param node the JSON node to be parsed
         * @virtual
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
         * @param script the {@link Clutter.Script} creating the scriptable instance
         * @param name the name of the property
         * @param value the value of the property
         * @virtual
         */
        vfunc_set_custom_property(script: Clutter.Script, name: string, value: GObject.Value | any): void;
        /**
         * Sets `id_` as the unique Clutter script it for this instance of
         * {@link Clutter.ScriptableIface}.
         *
         * This name can be used by user interface designer applications to
         * define a unique name for an object constructable using the UI
         * definition language parsed by {@link Clutter.Script}.
         * @param id_ the {@link Clutter.Script} id of the object
         * @virtual
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
         * a [floating](floating-refs.html) object reference. Doing this is seldom
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
         * Checks whether `object` has a [floating](floating-refs.html) reference.
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
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
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

    namespace LightSet {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * The {@link Mash.LightSet} structure contains only private data.
     * @gir-type Class
     */
    class LightSet extends GObject.Object {
        static $gtype: GObject.GType<LightSet>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: LightSet.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<LightSet.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): LightSet;

        // Signals

        /** @signal */
        connect<K extends keyof LightSet.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LightSet.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof LightSet.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LightSet.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof LightSet.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<LightSet.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * This adds a light to the set. Lights need to be added to the light
         * set as well as to a container somewhere in the Clutter actor
         * hierarchy in order to be useful.
         * @param light A {@link Mash.Light}
         */
        add_light(light: Light): void;
        /**
         * This function should only be needed by custom actors that wish to
         * use the lighting model of Mash. The function should be called every
         * time the actor is painted. The `material` parameter is used to
         * specify the lighting material properties. The material is not
         * otherwise read or modified. The material properties that are used
         * are: the emission color, the ambient color, the diffuse color, the
         * specular color and the shininess.
         *
         * The return value is a CoglProgram that should be used to paint the
         * actor. The actor should attach this to its material using
         * `cogl_material_set_user_program()`.
         *
         * {@link Mash.Model}<!-- -->s are already designed to use this function when
         * a light set is passed to `mash_model_set_light_set()`.
         * @param material The material that will be used to paint
         * @returns a CoglProgram to use for rendering.
         */
        begin_paint(material: Cogl.Handle): Cogl.Handle;
        /**
         * Removes a light from the set.
         * @param light A {@link Mash.Light}
         */
        remove_light(light: Light): void;
    }

    namespace Model {
        // Signal signatures
        interface SignalSignatures extends Clutter.Actor.SignalSignatures {
            'notify::data': (pspec: GObject.ParamSpec) => void;
            'notify::fit-to-allocation': (pspec: GObject.ParamSpec) => void;
            'notify::light-set': (pspec: GObject.ParamSpec) => void;
            'notify::actions': (pspec: GObject.ParamSpec) => void;
            'notify::allocation': (pspec: GObject.ParamSpec) => void;
            'notify::anchor-gravity': (pspec: GObject.ParamSpec) => void;
            'notify::anchor-x': (pspec: GObject.ParamSpec) => void;
            'notify::anchor-y': (pspec: GObject.ParamSpec) => void;
            'notify::background-color': (pspec: GObject.ParamSpec) => void;
            'notify::background-color-set': (pspec: GObject.ParamSpec) => void;
            'notify::child-transform': (pspec: GObject.ParamSpec) => void;
            'notify::child-transform-set': (pspec: GObject.ParamSpec) => void;
            'notify::clip': (pspec: GObject.ParamSpec) => void;
            'notify::clip-rect': (pspec: GObject.ParamSpec) => void;
            'notify::clip-to-allocation': (pspec: GObject.ParamSpec) => void;
            'notify::constraints': (pspec: GObject.ParamSpec) => void;
            'notify::content': (pspec: GObject.ParamSpec) => void;
            'notify::content-box': (pspec: GObject.ParamSpec) => void;
            'notify::content-gravity': (pspec: GObject.ParamSpec) => void;
            'notify::content-repeat': (pspec: GObject.ParamSpec) => void;
            'notify::depth': (pspec: GObject.ParamSpec) => void;
            'notify::effect': (pspec: GObject.ParamSpec) => void;
            'notify::first-child': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-position-set': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-x': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-y': (pspec: GObject.ParamSpec) => void;
            'notify::has-clip': (pspec: GObject.ParamSpec) => void;
            'notify::has-pointer': (pspec: GObject.ParamSpec) => void;
            'notify::height': (pspec: GObject.ParamSpec) => void;
            'notify::last-child': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::magnification-filter': (pspec: GObject.ParamSpec) => void;
            'notify::mapped': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::min-height': (pspec: GObject.ParamSpec) => void;
            'notify::min-height-set': (pspec: GObject.ParamSpec) => void;
            'notify::min-width': (pspec: GObject.ParamSpec) => void;
            'notify::min-width-set': (pspec: GObject.ParamSpec) => void;
            'notify::minification-filter': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::natural-height': (pspec: GObject.ParamSpec) => void;
            'notify::natural-height-set': (pspec: GObject.ParamSpec) => void;
            'notify::natural-width': (pspec: GObject.ParamSpec) => void;
            'notify::natural-width-set': (pspec: GObject.ParamSpec) => void;
            'notify::offscreen-redirect': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::pivot-point': (pspec: GObject.ParamSpec) => void;
            'notify::pivot-point-z': (pspec: GObject.ParamSpec) => void;
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::reactive': (pspec: GObject.ParamSpec) => void;
            'notify::realized': (pspec: GObject.ParamSpec) => void;
            'notify::request-mode': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-x': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-y': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-z': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-center-x': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-center-y': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-center-z': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-center-z-gravity': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-center-zgravity': (pspec: GObject.ParamSpec) => void;
            'notify::scale-center-x': (pspec: GObject.ParamSpec) => void;
            'notify::scale-center-y': (pspec: GObject.ParamSpec) => void;
            'notify::scale-gravity': (pspec: GObject.ParamSpec) => void;
            'notify::scale-x': (pspec: GObject.ParamSpec) => void;
            'notify::scale-y': (pspec: GObject.ParamSpec) => void;
            'notify::scale-z': (pspec: GObject.ParamSpec) => void;
            'notify::show-on-set-parent': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::text-direction': (pspec: GObject.ParamSpec) => void;
            'notify::transform': (pspec: GObject.ParamSpec) => void;
            'notify::transform-set': (pspec: GObject.ParamSpec) => void;
            'notify::translation-x': (pspec: GObject.ParamSpec) => void;
            'notify::translation-y': (pspec: GObject.ParamSpec) => void;
            'notify::translation-z': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width': (pspec: GObject.ParamSpec) => void;
            'notify::x': (pspec: GObject.ParamSpec) => void;
            'notify::x-align': (pspec: GObject.ParamSpec) => void;
            'notify::x-expand': (pspec: GObject.ParamSpec) => void;
            'notify::y': (pspec: GObject.ParamSpec) => void;
            'notify::y-align': (pspec: GObject.ParamSpec) => void;
            'notify::y-expand': (pspec: GObject.ParamSpec) => void;
            'notify::z-position': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Clutter.Actor.ConstructorProps,
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
     * The {@link Mash.Model} structure contains only private data.
     * @gir-type Class
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

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Model.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Model.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Model;

        static new_from_file(flags: DataFlags, filename: string): Model;

        // Signals

        /** @signal */
        connect<K extends keyof Model.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Model.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Model.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Model.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Model.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Model.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns whether the actor will try to scale the model to fit within the allocation.
         */
        get_fit_to_allocation(): boolean;
        /**
         * Gets the material that will be used to render the model. The
         * material can be modified to affect the appearence of the model. By
         * default the material will be solid white.
         * @returns a handle to the Cogl material used by the model.
         */
        get_material(): Cogl.Handle;
        /**
         * Replaces the data used by the actor with `data`. A reference is
         * taken on `data` so if you no longer need it you should unref it with
         * `g_object_unref()`.
         * @param data The new {@link Mash.Data}
         */
        set_data(data: Data): void;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.set_data
        set_data(...args: never[]): any;
        /**
         * This sets whether the actor should scale the model to fit the
         * actor's allocation. If it's `true` then all of the axes of the model
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
         * {@link Mash.Model} will return whatever width or height will exactly
         * preserve the aspect ratio.
         *
         * If the value is `false` then the actor is not transformed so the
         * origin of the model will be the top left corner of the actor. The
         * preferred size of the actor will be maximum extents of the model
         * although the allocation is not considered during paint so if the
         * model extends past the allocated size then it will draw outside the
         * allocation.
         *
         * The default value is `true`.
         * @param fit_to_allocation New value
         */
        set_fit_to_allocation(fit_to_allocation: boolean): void;
        /**
         * This sets the {@link Mash.LightSet} that will be used to render the
         * model. Alternatively `null` can be passed to disable lighting for
         * this model. The light set represents a collection of {@link Mash.Light}<!--
         * -->s that will affect the appearance of the model.
         * @param light_set A new {@link Mash.LightSet}
         */
        set_light_set(light_set: LightSet): void;
        /**
         * Replaces the material that will be used to render the model with
         * the given one. By default a {@link Mash.Model} will use a solid white
         * material. However the color of the material is still blended with
         * the vertex colors so the white material will cause the vertex
         * colors to be used directly. If you want the model to be textured
         * you will need to create a material that has a texture layer and set
         * it with this function.
         *
         * If a {@link Mash.LightSet} is used with the model then the material given
         * here will be modified to use the program generated by that light
         * set. If multiple models are expected to use the same material with
         * different light sets, it would be better to use a different copy of
         * the same material for each set of models so that they don't
         * repeatedly change the program on the material during paint.
         * @param material A handle to a Cogl material
         */
        set_material(material: Cogl.Handle): void;
        /**
         * Calls the `animate_property()` virtual function for `animatable`.
         *
         * The `initial_value` and `final_value` {@link GObject.Value}<!-- -->s must contain
         * the same type; `value` must have been initialized to the same
         * type of `initial_value` and `final_value`.
         *
         * All implementation of the {@link Clutter.Animatable} interface must
         * implement this function.
         * @param animation a {@link Clutter.Animation}
         * @param property_name the name of the animated property
         * @param initial_value the initial value of the animation interval
         * @param final_value the final value of the animation interval
         * @param progress the progress factor
         * @param value return location for the animation value
         * @returns `true` if the value has been validated and can   be applied to the {@link Clutter.Animatable}, and `false` otherwise
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
         * Finds the {@link GObject.ParamSpec} for `property_name`
         * @param property_name the name of the animatable property to find
         * @returns The {@link GObject.ParamSpec} for the given property   or `null`
         */
        find_property(property_name: string): GObject.ParamSpec;
        /**
         * Retrieves the current state of `property_name` and sets `value` with it
         * @param property_name the name of the animatable property to retrieve
         * @param value a {@link GObject.Value} initialized to the type of the property to retrieve
         */
        get_initial_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Asks a {@link Clutter.Animatable} implementation to interpolate a
         * a named property between the initial and final values of
         * a {@link Clutter.Interval}, using `progress` as the interpolation
         * value, and store the result inside `value`.
         *
         * This function should be used for every property animation
         * involving {@link Clutter.Animatable}<!-- -->s.
         *
         * This function replaces `clutter_animatable_animate_property()`.
         * @param property_name the name of the property to interpolate
         * @param interval a {@link Clutter.Interval} with the animation range
         * @param progress the progress to use to interpolate between the   initial and final values of the `interval`
         * @returns `true` if the interpolation was successful,   and `false` otherwise
         */
        interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [boolean, unknown];
        /**
         * Sets the current state of `property_name` to `value`
         * @param property_name the name of the animatable property to set
         * @param value the value of the animatable property to set
         */
        set_final_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Calls the `animate_property()` virtual function for `animatable`.
         *
         * The `initial_value` and `final_value` {@link GObject.Value}<!-- -->s must contain
         * the same type; `value` must have been initialized to the same
         * type of `initial_value` and `final_value`.
         *
         * All implementation of the {@link Clutter.Animatable} interface must
         * implement this function.
         * @param animation a {@link Clutter.Animation}
         * @param property_name the name of the animated property
         * @param initial_value the initial value of the animation interval
         * @param final_value the final value of the animation interval
         * @param progress the progress factor
         * @param value return location for the animation value
         * @virtual
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
         * Finds the {@link GObject.ParamSpec} for `property_name`
         * @param property_name the name of the animatable property to find
         * @virtual
         */
        vfunc_find_property(property_name: string): GObject.ParamSpec;
        /**
         * Retrieves the current state of `property_name` and sets `value` with it
         * @param property_name the name of the animatable property to retrieve
         * @param value a {@link GObject.Value} initialized to the type of the property to retrieve
         * @virtual
         */
        vfunc_get_initial_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Asks a {@link Clutter.Animatable} implementation to interpolate a
         * a named property between the initial and final values of
         * a {@link Clutter.Interval}, using `progress` as the interpolation
         * value, and store the result inside `value`.
         *
         * This function should be used for every property animation
         * involving {@link Clutter.Animatable}<!-- -->s.
         *
         * This function replaces `clutter_animatable_animate_property()`.
         * @param property_name the name of the property to interpolate
         * @param interval a {@link Clutter.Interval} with the animation range
         * @param progress the progress to use to interpolate between the   initial and final values of the `interval`
         * @virtual
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
         * @virtual
         */
        vfunc_set_final_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Adds a {@link Clutter.Actor} to `container`. This function will emit the
         * "actor-added" signal. The actor should be parented to
         * `container`. You cannot add a {@link Clutter.Actor} to more than one
         * {@link Clutter.Container}.
         *
         * This function will call {@link Clutter.ContainerIface}.add(), which is a
         * deprecated virtual function. The default implementation will
         * call `clutter_actor_add_child()`.
         * @param actor the first {@link Clutter.Actor} to add
         */
        add_actor(actor: Clutter.Actor): void;
        /**
         * Gets a container specific property of a child of `container`, In general,
         * a copy is made of the property contents and the caller is responsible for
         * freeing the memory by calling `g_value_unset()`.
         *
         * Note that `clutter_container_child_set_property()` is really intended for
         * language bindings, `clutter_container_child_set()` is much more convenient
         * for C programming.
         * @param child a {@link Clutter.Actor} that is a child of `container`.
         * @param property the name of the property to set.
         * @param value the value.
         */
        child_get_property(child: Clutter.Actor, property: string, value: GObject.Value | any): void;
        /**
         * Calls the {@link Clutter.ContainerIface}.child_notify() virtual function
         * of {@link Clutter.Container}. The default implementation will emit the
         * {@link Clutter.Container.SignalSignatures.child_notify | Clutter.Container::child-notify} signal.
         * @param child a {@link Clutter.Actor}
         * @param pspec a {@link GObject.ParamSpec}
         */
        child_notify(child: Clutter.Actor, pspec: GObject.ParamSpec): void;
        /**
         * Sets a container-specific property on a child of `container`.
         * @param child a {@link Clutter.Actor} that is a child of `container`.
         * @param property the name of the property to set.
         * @param value the value.
         */
        child_set_property(child: Clutter.Actor, property: string, value: GObject.Value | any): void;
        /**
         * Creates the {@link Clutter.ChildMeta} wrapping `actor` inside the
         * `container`, if the {@link Clutter.ContainerIface.SignalSignatures.child_meta_type | Clutter.ContainerIface::child_meta_type}
         * class member is not set to `G_TYPE_INVALID`.
         *
         * This function is only useful when adding a {@link Clutter.Actor} to
         * a {@link Clutter.Container} implementation outside of the
         * {@link Clutter.Container.SignalSignatures.add | Clutter.Container::add}() virtual function implementation.
         *
         * Applications should not call this function.
         * @param actor a {@link Clutter.Actor}
         */
        create_child_meta(actor: Clutter.Actor): void;
        /**
         * Destroys the {@link Clutter.ChildMeta} wrapping `actor` inside the
         * `container`, if any.
         *
         * This function is only useful when removing a {@link Clutter.Actor} to
         * a {@link Clutter.Container} implementation outside of the
         * {@link Clutter.Container.SignalSignatures.add | Clutter.Container::add}() virtual function implementation.
         *
         * Applications should not call this function.
         * @param actor a {@link Clutter.Actor}
         */
        destroy_child_meta(actor: Clutter.Actor): void;
        /**
         * Finds a child actor of a container by its name. Search recurses
         * into any child container.
         * @param child_name the name of the requested child.
         * @returns The child actor with the requested name,   or `null` if no actor with that name was found.
         */
        find_child_by_name(child_name: string): Clutter.Actor;
        /**
         * Calls `callback` for each child of `container` that was added
         * by the application (with `clutter_container_add_actor()`). Does
         * not iterate over "internal" children that are part of the
         * container's own implementation, if any.
         *
         * This function calls the {@link Clutter.ContainerIface}.foreach()
         * virtual function, which has been deprecated.
         * @param callback a function to be called for each child
         */
        foreach(callback: Clutter.Callback): void;
        /**
         * Calls `callback` for each child of `container`, including "internal"
         * children built in to the container itself that were never added
         * by the application.
         *
         * This function calls the {@link Clutter.ContainerIface}.foreach_with_internals()
         * virtual function, which has been deprecated.
         * @param callback a function to be called for each child
         */
        foreach_with_internals(callback: Clutter.Callback): void;
        /**
         * Retrieves the {@link Clutter.ChildMeta} which contains the data about the
         * `container` specific state for `actor`.
         * @param actor a {@link Clutter.Actor} that is a child of `container`.
         * @returns the {@link Clutter.ChildMeta} for the `actor` child   of `container` or `null` if the specifiec actor does not exist or the   container is not configured to provide {@link Clutter.ChildMeta}<!-- -->s
         */
        get_child_meta(actor: Clutter.Actor): Clutter.ChildMeta;
        /**
         * Retrieves all the children of `container`.
         * @returns a list   of {@link Clutter.Actor}<!-- -->s. Use `g_list_free()` on the returned   list when done.
         */
        get_children(): Clutter.Actor[];
        /**
         * Lowers `actor` to `sibling` level, in the depth ordering.
         *
         * This function calls the {@link Clutter.ContainerIface}.lower() virtual function,
         * which has been deprecated. The default implementation will call
         * `clutter_actor_set_child_below_sibling()`.
         * @param actor the actor to raise
         * @param sibling the sibling to lower to, or `null` to lower   to the bottom
         */
        lower_child(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void;
        /**
         * Raises `actor` to `sibling` level, in the depth ordering.
         *
         * This function calls the {@link Clutter.ContainerIface}.raise() virtual function,
         * which has been deprecated. The default implementation will call
         * `clutter_actor_set_child_above_sibling()`.
         * @param actor the actor to raise
         * @param sibling the sibling to raise to, or `null` to raise   to the top
         */
        raise_child(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void;
        /**
         * Removes `actor` from `container`. The actor should be unparented, so
         * if you want to keep it around you must hold a reference to it
         * yourself, using `g_object_ref()`. When the actor has been removed,
         * the "actor-removed" signal is emitted by `container`.
         *
         * This function will call {@link Clutter.ContainerIface}.remove(), which is a
         * deprecated virtual function. The default implementation will call
         * `clutter_actor_remove_child()`.
         * @param actor a {@link Clutter.Actor}
         */
        remove_actor(actor: Clutter.Actor): void;
        /**
         * Sorts a container's children using their depth. This function should not
         * be normally used by applications.
         */
        sort_depth_order(): void;
        /**
         * class handler for {@link Clutter.Container.SignalSignatures.actor_added | Clutter.Container::actor-added}
         * @param actor
         * @virtual
         */
        vfunc_actor_added(actor: Clutter.Actor): void;
        /**
         * class handler for {@link Clutter.Container.SignalSignatures.actor_removed | Clutter.Container::actor-removed}
         * @param actor
         * @virtual
         */
        vfunc_actor_removed(actor: Clutter.Actor): void;
        /**
         * Adds a {@link Clutter.Actor} to `container`. This function will emit the
         * "actor-added" signal. The actor should be parented to
         * `container`. You cannot add a {@link Clutter.Actor} to more than one
         * {@link Clutter.Container}.
         *
         * This function will call {@link Clutter.ContainerIface}.add(), which is a
         * deprecated virtual function. The default implementation will
         * call `clutter_actor_add_child()`.
         * @param actor the first {@link Clutter.Actor} to add
         * @virtual
         */
        vfunc_add(actor: Clutter.Actor): void;
        /**
         * Calls the {@link Clutter.ContainerIface}.child_notify() virtual function
         * of {@link Clutter.Container}. The default implementation will emit the
         * {@link Clutter.Container.SignalSignatures.child_notify | Clutter.Container::child-notify} signal.
         * @param child a {@link Clutter.Actor}
         * @param pspec a {@link GObject.ParamSpec}
         * @virtual
         */
        vfunc_child_notify(child: Clutter.Actor, pspec: GObject.ParamSpec): void;
        /**
         * Creates the {@link Clutter.ChildMeta} wrapping `actor` inside the
         * `container`, if the {@link Clutter.ContainerIface.SignalSignatures.child_meta_type | Clutter.ContainerIface::child_meta_type}
         * class member is not set to `G_TYPE_INVALID`.
         *
         * This function is only useful when adding a {@link Clutter.Actor} to
         * a {@link Clutter.Container} implementation outside of the
         * {@link Clutter.Container.SignalSignatures.add | Clutter.Container::add}() virtual function implementation.
         *
         * Applications should not call this function.
         * @param actor a {@link Clutter.Actor}
         * @virtual
         */
        vfunc_create_child_meta(actor: Clutter.Actor): void;
        /**
         * Destroys the {@link Clutter.ChildMeta} wrapping `actor` inside the
         * `container`, if any.
         *
         * This function is only useful when removing a {@link Clutter.Actor} to
         * a {@link Clutter.Container} implementation outside of the
         * {@link Clutter.Container.SignalSignatures.add | Clutter.Container::add}() virtual function implementation.
         *
         * Applications should not call this function.
         * @param actor a {@link Clutter.Actor}
         * @virtual
         */
        vfunc_destroy_child_meta(actor: Clutter.Actor): void;
        /**
         * Calls `callback` for each child of `container` that was added
         * by the application (with `clutter_container_add_actor()`). Does
         * not iterate over "internal" children that are part of the
         * container's own implementation, if any.
         *
         * This function calls the {@link Clutter.ContainerIface}.foreach()
         * virtual function, which has been deprecated.
         * @param callback a function to be called for each child
         * @virtual
         */
        vfunc_foreach(callback: Clutter.Callback): void;
        /**
         * Calls `callback` for each child of `container`, including "internal"
         * children built in to the container itself that were never added
         * by the application.
         *
         * This function calls the {@link Clutter.ContainerIface}.foreach_with_internals()
         * virtual function, which has been deprecated.
         * @param callback a function to be called for each child
         * @virtual
         */
        vfunc_foreach_with_internals(callback: Clutter.Callback): void;
        /**
         * Retrieves the {@link Clutter.ChildMeta} which contains the data about the
         * `container` specific state for `actor`.
         * @param actor a {@link Clutter.Actor} that is a child of `container`.
         * @virtual
         */
        vfunc_get_child_meta(actor: Clutter.Actor): Clutter.ChildMeta;
        /**
         * Lowers `actor` to `sibling` level, in the depth ordering.
         *
         * This function calls the {@link Clutter.ContainerIface}.lower() virtual function,
         * which has been deprecated. The default implementation will call
         * `clutter_actor_set_child_below_sibling()`.
         * @param actor the actor to raise
         * @param sibling the sibling to lower to, or `null` to lower   to the bottom
         * @virtual
         */
        vfunc_lower(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void;
        /**
         * Raises `actor` to `sibling` level, in the depth ordering.
         *
         * This function calls the {@link Clutter.ContainerIface}.raise() virtual function,
         * which has been deprecated. The default implementation will call
         * `clutter_actor_set_child_above_sibling()`.
         * @param actor the actor to raise
         * @param sibling the sibling to raise to, or `null` to raise   to the top
         * @virtual
         */
        vfunc_raise(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void;
        /**
         * Removes `actor` from `container`. The actor should be unparented, so
         * if you want to keep it around you must hold a reference to it
         * yourself, using `g_object_ref()`. When the actor has been removed,
         * the "actor-removed" signal is emitted by `container`.
         *
         * This function will call {@link Clutter.ContainerIface}.remove(), which is a
         * deprecated virtual function. The default implementation will call
         * `clutter_actor_remove_child()`.
         * @param actor a {@link Clutter.Actor}
         * @virtual
         */
        vfunc_remove(actor: Clutter.Actor): void;
        /**
         * Sorts a container's children using their depth. This function should not
         * be normally used by applications.
         * @virtual
         */
        vfunc_sort_depth_order(): void;
        /**
         * Retrieves the id of `scriptable` set using `clutter_scriptable_set_id()`.
         * @returns the id of the object. The returned string is owned by   the scriptable object and should never be modified of freed
         */
        get_id(): string;
        /**
         * Parses the passed JSON node. The implementation must set the type
         * of the passed {@link GObject.Value} pointer using `g_value_init()`.
         * @param script the {@link Clutter.Script} creating the scriptable instance
         * @param value the generic value to be set
         * @param name the name of the node
         * @param node the JSON node to be parsed
         * @returns `true` if the node was successfully parsed, `false` otherwise.
         */
        parse_custom_node(script: Clutter.Script, value: GObject.Value | any, name: string, node: Json.Node): boolean;
        /**
         * Overrides the common properties setting. The underlying virtual
         * function should be used when implementing custom properties.
         * @param script the {@link Clutter.Script} creating the scriptable instance
         * @param name the name of the property
         * @param value the value of the property
         */
        set_custom_property(script: Clutter.Script, name: string, value: GObject.Value | any): void;
        /**
         * Sets `id_` as the unique Clutter script it for this instance of
         * {@link Clutter.ScriptableIface}.
         *
         * This name can be used by user interface designer applications to
         * define a unique name for an object constructable using the UI
         * definition language parsed by {@link Clutter.Script}.
         * @param id_ the {@link Clutter.Script} id of the object
         */
        set_id(id_: string): void;
        /**
         * Retrieves the id of `scriptable` set using `clutter_scriptable_set_id()`.
         * @virtual
         */
        vfunc_get_id(): string;
        /**
         * Parses the passed JSON node. The implementation must set the type
         * of the passed {@link GObject.Value} pointer using `g_value_init()`.
         * @param script the {@link Clutter.Script} creating the scriptable instance
         * @param value the generic value to be set
         * @param name the name of the node
         * @param node the JSON node to be parsed
         * @virtual
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
         * @param script the {@link Clutter.Script} creating the scriptable instance
         * @param name the name of the property
         * @param value the value of the property
         * @virtual
         */
        vfunc_set_custom_property(script: Clutter.Script, name: string, value: GObject.Value | any): void;
        /**
         * Sets `id_` as the unique Clutter script it for this instance of
         * {@link Clutter.ScriptableIface}.
         *
         * This name can be used by user interface designer applications to
         * define a unique name for an object constructable using the UI
         * definition language parsed by {@link Clutter.Script}.
         * @param id_ the {@link Clutter.Script} id of the object
         * @virtual
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
         * a [floating](floating-refs.html) object reference. Doing this is seldom
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
         * Checks whether `object` has a [floating](floating-refs.html) reference.
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
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
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

    namespace PlyLoader {
        // Signal signatures
        interface SignalSignatures extends Data.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Data.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class PlyLoader extends Data {
        static $gtype: GObject.GType<PlyLoader>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PlyLoader.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PlyLoader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof PlyLoader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PlyLoader.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof PlyLoader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PlyLoader.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof PlyLoader.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PlyLoader.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace PointLight {
        // Signal signatures
        interface SignalSignatures extends Light.SignalSignatures {
            'notify::constant-attenuation': (pspec: GObject.ParamSpec) => void;
            'notify::linear-attenuation': (pspec: GObject.ParamSpec) => void;
            'notify::quadratic-attenuation': (pspec: GObject.ParamSpec) => void;
            'notify::ambient': (pspec: GObject.ParamSpec) => void;
            'notify::diffuse': (pspec: GObject.ParamSpec) => void;
            'notify::specular': (pspec: GObject.ParamSpec) => void;
            'notify::actions': (pspec: GObject.ParamSpec) => void;
            'notify::allocation': (pspec: GObject.ParamSpec) => void;
            'notify::anchor-gravity': (pspec: GObject.ParamSpec) => void;
            'notify::anchor-x': (pspec: GObject.ParamSpec) => void;
            'notify::anchor-y': (pspec: GObject.ParamSpec) => void;
            'notify::background-color': (pspec: GObject.ParamSpec) => void;
            'notify::background-color-set': (pspec: GObject.ParamSpec) => void;
            'notify::child-transform': (pspec: GObject.ParamSpec) => void;
            'notify::child-transform-set': (pspec: GObject.ParamSpec) => void;
            'notify::clip': (pspec: GObject.ParamSpec) => void;
            'notify::clip-rect': (pspec: GObject.ParamSpec) => void;
            'notify::clip-to-allocation': (pspec: GObject.ParamSpec) => void;
            'notify::constraints': (pspec: GObject.ParamSpec) => void;
            'notify::content': (pspec: GObject.ParamSpec) => void;
            'notify::content-box': (pspec: GObject.ParamSpec) => void;
            'notify::content-gravity': (pspec: GObject.ParamSpec) => void;
            'notify::content-repeat': (pspec: GObject.ParamSpec) => void;
            'notify::depth': (pspec: GObject.ParamSpec) => void;
            'notify::effect': (pspec: GObject.ParamSpec) => void;
            'notify::first-child': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-position-set': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-x': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-y': (pspec: GObject.ParamSpec) => void;
            'notify::has-clip': (pspec: GObject.ParamSpec) => void;
            'notify::has-pointer': (pspec: GObject.ParamSpec) => void;
            'notify::height': (pspec: GObject.ParamSpec) => void;
            'notify::last-child': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::magnification-filter': (pspec: GObject.ParamSpec) => void;
            'notify::mapped': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::min-height': (pspec: GObject.ParamSpec) => void;
            'notify::min-height-set': (pspec: GObject.ParamSpec) => void;
            'notify::min-width': (pspec: GObject.ParamSpec) => void;
            'notify::min-width-set': (pspec: GObject.ParamSpec) => void;
            'notify::minification-filter': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::natural-height': (pspec: GObject.ParamSpec) => void;
            'notify::natural-height-set': (pspec: GObject.ParamSpec) => void;
            'notify::natural-width': (pspec: GObject.ParamSpec) => void;
            'notify::natural-width-set': (pspec: GObject.ParamSpec) => void;
            'notify::offscreen-redirect': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::pivot-point': (pspec: GObject.ParamSpec) => void;
            'notify::pivot-point-z': (pspec: GObject.ParamSpec) => void;
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::reactive': (pspec: GObject.ParamSpec) => void;
            'notify::realized': (pspec: GObject.ParamSpec) => void;
            'notify::request-mode': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-x': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-y': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-z': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-center-x': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-center-y': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-center-z': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-center-z-gravity': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-center-zgravity': (pspec: GObject.ParamSpec) => void;
            'notify::scale-center-x': (pspec: GObject.ParamSpec) => void;
            'notify::scale-center-y': (pspec: GObject.ParamSpec) => void;
            'notify::scale-gravity': (pspec: GObject.ParamSpec) => void;
            'notify::scale-x': (pspec: GObject.ParamSpec) => void;
            'notify::scale-y': (pspec: GObject.ParamSpec) => void;
            'notify::scale-z': (pspec: GObject.ParamSpec) => void;
            'notify::show-on-set-parent': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::text-direction': (pspec: GObject.ParamSpec) => void;
            'notify::transform': (pspec: GObject.ParamSpec) => void;
            'notify::transform-set': (pspec: GObject.ParamSpec) => void;
            'notify::translation-x': (pspec: GObject.ParamSpec) => void;
            'notify::translation-y': (pspec: GObject.ParamSpec) => void;
            'notify::translation-z': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width': (pspec: GObject.ParamSpec) => void;
            'notify::x': (pspec: GObject.ParamSpec) => void;
            'notify::x-align': (pspec: GObject.ParamSpec) => void;
            'notify::x-expand': (pspec: GObject.ParamSpec) => void;
            'notify::y': (pspec: GObject.ParamSpec) => void;
            'notify::y-align': (pspec: GObject.ParamSpec) => void;
            'notify::y-expand': (pspec: GObject.ParamSpec) => void;
            'notify::z-position': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Light.ConstructorProps,
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
     * The {@link Mash.LightClass} structure contains only private data.
     * @gir-type Class
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

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PointLight.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PointLight.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): PointLight;

        // Signals

        /** @signal */
        connect<K extends keyof PointLight.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PointLight.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof PointLight.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PointLight.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof PointLight.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PointLight.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns the constant light attenuation value.
         */
        get_constant_attenuation(): number;
        /**
         * @returns the linear light attenuation value.
         */
        get_linear_attenuation(): number;
        /**
         * @returns the quadratic light attenuation value.
         */
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
         * a [floating](floating-refs.html) object reference. Doing this is seldom
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
         * Checks whether `object` has a [floating](floating-refs.html) reference.
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
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
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

    namespace SpotLight {
        // Signal signatures
        interface SignalSignatures extends PointLight.SignalSignatures {
            'notify::spot-cutoff': (pspec: GObject.ParamSpec) => void;
            'notify::spot-exponent': (pspec: GObject.ParamSpec) => void;
            'notify::constant-attenuation': (pspec: GObject.ParamSpec) => void;
            'notify::linear-attenuation': (pspec: GObject.ParamSpec) => void;
            'notify::quadratic-attenuation': (pspec: GObject.ParamSpec) => void;
            'notify::ambient': (pspec: GObject.ParamSpec) => void;
            'notify::diffuse': (pspec: GObject.ParamSpec) => void;
            'notify::specular': (pspec: GObject.ParamSpec) => void;
            'notify::actions': (pspec: GObject.ParamSpec) => void;
            'notify::allocation': (pspec: GObject.ParamSpec) => void;
            'notify::anchor-gravity': (pspec: GObject.ParamSpec) => void;
            'notify::anchor-x': (pspec: GObject.ParamSpec) => void;
            'notify::anchor-y': (pspec: GObject.ParamSpec) => void;
            'notify::background-color': (pspec: GObject.ParamSpec) => void;
            'notify::background-color-set': (pspec: GObject.ParamSpec) => void;
            'notify::child-transform': (pspec: GObject.ParamSpec) => void;
            'notify::child-transform-set': (pspec: GObject.ParamSpec) => void;
            'notify::clip': (pspec: GObject.ParamSpec) => void;
            'notify::clip-rect': (pspec: GObject.ParamSpec) => void;
            'notify::clip-to-allocation': (pspec: GObject.ParamSpec) => void;
            'notify::constraints': (pspec: GObject.ParamSpec) => void;
            'notify::content': (pspec: GObject.ParamSpec) => void;
            'notify::content-box': (pspec: GObject.ParamSpec) => void;
            'notify::content-gravity': (pspec: GObject.ParamSpec) => void;
            'notify::content-repeat': (pspec: GObject.ParamSpec) => void;
            'notify::depth': (pspec: GObject.ParamSpec) => void;
            'notify::effect': (pspec: GObject.ParamSpec) => void;
            'notify::first-child': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-position-set': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-x': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-y': (pspec: GObject.ParamSpec) => void;
            'notify::has-clip': (pspec: GObject.ParamSpec) => void;
            'notify::has-pointer': (pspec: GObject.ParamSpec) => void;
            'notify::height': (pspec: GObject.ParamSpec) => void;
            'notify::last-child': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::magnification-filter': (pspec: GObject.ParamSpec) => void;
            'notify::mapped': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::min-height': (pspec: GObject.ParamSpec) => void;
            'notify::min-height-set': (pspec: GObject.ParamSpec) => void;
            'notify::min-width': (pspec: GObject.ParamSpec) => void;
            'notify::min-width-set': (pspec: GObject.ParamSpec) => void;
            'notify::minification-filter': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::natural-height': (pspec: GObject.ParamSpec) => void;
            'notify::natural-height-set': (pspec: GObject.ParamSpec) => void;
            'notify::natural-width': (pspec: GObject.ParamSpec) => void;
            'notify::natural-width-set': (pspec: GObject.ParamSpec) => void;
            'notify::offscreen-redirect': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::pivot-point': (pspec: GObject.ParamSpec) => void;
            'notify::pivot-point-z': (pspec: GObject.ParamSpec) => void;
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::reactive': (pspec: GObject.ParamSpec) => void;
            'notify::realized': (pspec: GObject.ParamSpec) => void;
            'notify::request-mode': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-x': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-y': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-z': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-center-x': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-center-y': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-center-z': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-center-z-gravity': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-center-zgravity': (pspec: GObject.ParamSpec) => void;
            'notify::scale-center-x': (pspec: GObject.ParamSpec) => void;
            'notify::scale-center-y': (pspec: GObject.ParamSpec) => void;
            'notify::scale-gravity': (pspec: GObject.ParamSpec) => void;
            'notify::scale-x': (pspec: GObject.ParamSpec) => void;
            'notify::scale-y': (pspec: GObject.ParamSpec) => void;
            'notify::scale-z': (pspec: GObject.ParamSpec) => void;
            'notify::show-on-set-parent': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::text-direction': (pspec: GObject.ParamSpec) => void;
            'notify::transform': (pspec: GObject.ParamSpec) => void;
            'notify::transform-set': (pspec: GObject.ParamSpec) => void;
            'notify::translation-x': (pspec: GObject.ParamSpec) => void;
            'notify::translation-y': (pspec: GObject.ParamSpec) => void;
            'notify::translation-z': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width': (pspec: GObject.ParamSpec) => void;
            'notify::x': (pspec: GObject.ParamSpec) => void;
            'notify::x-align': (pspec: GObject.ParamSpec) => void;
            'notify::x-expand': (pspec: GObject.ParamSpec) => void;
            'notify::y': (pspec: GObject.ParamSpec) => void;
            'notify::y-align': (pspec: GObject.ParamSpec) => void;
            'notify::y-expand': (pspec: GObject.ParamSpec) => void;
            'notify::z-position': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                PointLight.ConstructorProps,
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
     * The {@link Mash.SpotLight} structure contains only private data.
     * @gir-type Class
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

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SpotLight.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SpotLight.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SpotLight;

        // Signals

        /** @signal */
        connect<K extends keyof SpotLight.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SpotLight.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof SpotLight.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SpotLight.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof SpotLight.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SpotLight.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns the spot cut off value
         */
        get_spot_cutoff(): number;
        /**
         * @returns the spot exponent value
         */
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
         * a [floating](floating-refs.html) object reference. Doing this is seldom
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
         * Checks whether `object` has a [floating](floating-refs.html) reference.
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
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
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

    /**
     * @gir-type Alias
     */
    type DataClass = typeof Data;
    /**
     * @gir-type Alias
     */
    type DataLoaderClass = typeof DataLoader;
    /**
     * The {@link Mash.DataLoaderData} structure contains the loaded data.
     * @gir-type Struct
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
    }

    /**
     * @gir-type Struct
     */
    abstract class DataLoaderPrivate {
        static $gtype: GObject.GType<DataLoaderPrivate>;
    }

    /**
     * @gir-type Struct
     */
    abstract class DataPrivate {
        static $gtype: GObject.GType<DataPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DirectionalLightClass = typeof DirectionalLight;
    /**
     * @gir-type Struct
     */
    abstract class DirectionalLightPrivate {
        static $gtype: GObject.GType<DirectionalLightPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type LightClass = typeof Light;
    /**
     * @gir-type Struct
     */
    abstract class LightPrivate {
        static $gtype: GObject.GType<LightPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type LightSetClass = typeof LightSet;
    /**
     * @gir-type Struct
     */
    abstract class LightSetPrivate {
        static $gtype: GObject.GType<LightSetPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type ModelClass = typeof Model;
    /**
     * @gir-type Struct
     */
    abstract class ModelPrivate {
        static $gtype: GObject.GType<ModelPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type PlyLoaderClass = typeof PlyLoader;
    /**
     * @gir-type Struct
     */
    abstract class PlyLoaderPrivate {
        static $gtype: GObject.GType<PlyLoaderPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type PointLightClass = typeof PointLight;
    /**
     * @gir-type Struct
     */
    abstract class PointLightPrivate {
        static $gtype: GObject.GType<PointLightPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type SpotLightClass = typeof SpotLight;
    /**
     * @gir-type Struct
     */
    abstract class SpotLightPrivate {
        static $gtype: GObject.GType<SpotLightPrivate>;
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
