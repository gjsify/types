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
import type GstVideo from '@girs/gstvideo-1.0';
import type GstBase from '@girs/gstbase-1.0';
import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GstPbutils from '@girs/gstpbutils-1.0';
import type GstAudio from '@girs/gstaudio-1.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Gio from '@girs/gio-2.0';
import type Cogl from '@girs/cogl-1.0';
import type GL from '@girs/gl-1.0';
import type Clutter from '@girs/clutter-1.0';
import type cairo from 'cairo';
import type Json from '@girs/json-1.0';
import type CoglPango from '@girs/coglpango-1.0';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Atk from '@girs/atk-1.0';

export namespace ClutterGst {
    /**
     * ClutterGst-3.0
     */

    /**
     * Different buffering policies clutter-gst supports
     */

    /**
     * Different buffering policies clutter-gst supports
     */
    export namespace BufferingMode {
        export const $gtype: GObject.GType<BufferingMode>;
    }

    enum BufferingMode {
        /**
         * In-memory buffering
         */
        STREAM,
        /**
         * On-disk buffering
         */
        DOWNLOAD,
    }
    /**
     * ClutterGst major version (e.g. "1", if %CLUTTER_GST_VERSION is "1.2.3")
     */
    const MAJOR_VERSION: number;
    /**
     * ClutterGst micro version (e.g. "3", if %CLUTTER_GST_VERSION is "1.2.3")
     */
    const MICRO_VERSION: number;
    /**
     * ClutterGst minor version (e.g. "2", if %CLUTTER_GST_VERSION is "1.2.3")
     */
    const MINOR_VERSION: number;
    /**
     * ClutterGst full version (e.g. "1.2.3")
     */
    const VERSION: number;
    /**
     * ClutterGst full version, encoded as an hexadecimal value.
     */
    const VERSION_HEX: number;
    /**
     * ClutterGst full version, encoded as a string.
     */
    const VERSION_S: string;
    /**
     * Creates a new #ClutterGstVideoSink initialized with Clutter's Cogl context.
     * @returns the newly created #ClutterGstVideoSink.
     */
    function create_video_sink(): Gst.Element;
    /**
     * Utility function to initialize both Clutter and GStreamer.
     *
     * This function should be called before calling any other GLib functions. If
     * this is not an option, your program must initialise the GLib thread system
     * using g_thread_init() before any other GLib functions are called.
     * @param argv A pointer to an array
     * @returns A #ClutterInitError.
     */
    function init(argv?: string[] | null): [Clutter.InitError, string[] | null];
    /**
     * This function does the same work as clutter_gst_init(). Additionally, it
     * allows you to add your own command line options, and it automatically
     * generates nicely formatted --help output. Clutter's and GStreamer's
     * #GOptionGroup<!-- -->s are added to the set of available options.
     *
     * Your program must initialise the GLib thread system using g_thread_init()
     * before any other GLib functions are called.
     * @param argv A pointer to an array
     * @param parameter_string a string which is displayed in    the first line of <option>--help</option> output, after    <literal><replaceable>programname</replaceable> [OPTION...]</literal>
     * @param entries a %NULL-terminated array of #GOptionEntry<!-- -->s    describing the options of your program
     * @param translation_domain a translation domain to use for translating    the <option>--help</option> output for the options in @entries    with gettext(), or %NULL
     * @returns %CLUTTER_INIT_SUCCESS on success, a negative integer   on failure.
     */
    function init_with_args(
        argv: string[] | null,
        parameter_string: string,
        entries: GLib.OptionEntry,
        translation_domain: string,
    ): [Clutter.InitError, string[] | null];
    /**
     * Flags that can be given to clutter_gst_player_set_seek_flags().
     */

    /**
     * Flags that can be given to clutter_gst_player_set_seek_flags().
     */
    export namespace SeekFlags {
        export const $gtype: GObject.GType<SeekFlags>;
    }

    enum SeekFlags {
        /**
         * Fast seeks (key frame boundaries, default)
         */
        NONE,
        /**
         * Accurate seeks (potentially slower)
         */
        ACCURATE,
    }
    namespace Aspectratio {
        // Signal signatures
        interface SignalSignatures extends Content.SignalSignatures {
            'notify::fill-allocation': (pspec: GObject.ParamSpec) => void;
            'notify::paint-borders': (pspec: GObject.ParamSpec) => void;
            'notify::frame': (pspec: GObject.ParamSpec) => void;
            'notify::paint-frame': (pspec: GObject.ParamSpec) => void;
            'notify::paint-overlays': (pspec: GObject.ParamSpec) => void;
            'notify::player': (pspec: GObject.ParamSpec) => void;
            'notify::sink': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Content.ConstructorProps, Clutter.Content.ConstructorProps {
            fill_allocation: boolean;
            fillAllocation: boolean;
            paint_borders: boolean;
            paintBorders: boolean;
        }
    }

    /**
     * Implementation of #ClutterGstContent that displays video streams
     * with respects to their aspect ratio.
     *
     * The #ClutterGstAspectratio structure contains only private data and
     * should not be accessed directly.
     */
    class Aspectratio extends Content implements Clutter.Content {
        static $gtype: GObject.GType<Aspectratio>;

        // Properties

        /**
         * Whether the content should fill its allocation with video rather
         * than adding borders.
         */
        get fill_allocation(): boolean;
        set fill_allocation(val: boolean);
        /**
         * Whether the content should fill its allocation with video rather
         * than adding borders.
         */
        get fillAllocation(): boolean;
        set fillAllocation(val: boolean);
        /**
         * Whether or not paint borders on the sides of the video
         */
        get paint_borders(): boolean;
        set paint_borders(val: boolean);
        /**
         * Whether or not paint borders on the sides of the video
         */
        get paintBorders(): boolean;
        set paintBorders(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Aspectratio.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Aspectratio.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Aspectratio.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Aspectratio.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Aspectratio.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Aspectratio.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Aspectratio.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Aspectratio.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static ['new'](): Clutter.Content;

        // Inherited methods
        /**
         * Retrieves the natural size of the `content,` if any.
         *
         * The natural size of a #ClutterContent is defined as the size the content
         * would have regardless of the allocation of the actor that is painting it,
         * for instance the size of an image data.
         * @returns %TRUE if the content has a preferred size, and %FALSE   otherwise
         */
        get_preferred_size(): [boolean, number, number];
        /**
         * Invalidates a #ClutterContent.
         *
         * This function should be called by #ClutterContent implementations when
         * they change the way a the content should be painted regardless of the
         * actor state.
         */
        invalidate(): void;
        vfunc_attached(actor: Clutter.Actor): void;
        vfunc_detached(actor: Clutter.Actor): void;
        /**
         * Retrieves the natural size of the `content,` if any.
         *
         * The natural size of a #ClutterContent is defined as the size the content
         * would have regardless of the allocation of the actor that is painting it,
         * for instance the size of an image data.
         */
        vfunc_get_preferred_size(): [boolean, number, number];
        /**
         * Invalidates a #ClutterContent.
         *
         * This function should be called by #ClutterContent implementations when
         * they change the way a the content should be painted regardless of the
         * actor state.
         */
        vfunc_invalidate(): void;
        vfunc_paint_content(actor: Clutter.Actor, node: Clutter.PaintNode): void;
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

    namespace Camera {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'photo-saved': () => void;
            'photo-taken': (arg0: GdkPixbuf.Pixbuf) => void;
            'ready-for-capture': (arg0: boolean) => void;
            'video-saved': () => void;
            'notify::device': (pspec: GObject.ParamSpec) => void;
            'notify::audio-volume': (pspec: GObject.ParamSpec) => void;
            'notify::idle': (pspec: GObject.ParamSpec) => void;
            'notify::playing': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Player.ConstructorProps {
            device: CameraDevice;
        }
    }

    /**
     * Implementation of #ClutterGstPlayer that displays camera streams
     * using GStreamer.
     *
     * The #ClutterGstCamera structure contains only private data and
     * should not be accessed directly.
     */
    class Camera extends GObject.Object implements Player {
        static $gtype: GObject.GType<Camera>;

        // Properties

        get device(): CameraDevice;
        set device(val: CameraDevice);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Camera.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Camera.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Camera;

        // Signals

        connect<K extends keyof Camera.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Camera.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Camera.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Camera.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Camera.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Camera.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_photo_saved(): void;
        vfunc_photo_taken(pixbuf: GdkPixbuf.Pixbuf): void;
        vfunc_ready_for_capture(ready: boolean): void;
        vfunc_video_saved(): void;

        // Methods

        get_brightness(cur_value: number): boolean;
        get_brightness_range(min_value: number, max_value: number, default_value: number): boolean;
        /**
         * Retrieve the current selected camera device.
         * @returns The currently selected camera device
         */
        get_camera_device(): CameraDevice;
        /**
         * Retrieve the current value for the color balance property `property,`
         *
         * This method will return FALSE if `property` does not exist or color balance is not
         * supported on `self`.
         * See clutter_gst_camera_supports_color_balance().
         * @param property Property name
         * @param cur_value Pointer to store the current value of @property
         * @returns %TRUE if successful, %FALSE otherwise
         */
        get_color_balance_property(property: string, cur_value: number): boolean;
        /**
         * Retrieve the minimum, maximum and default values for the color balance property `property,`
         *
         * This method will return FALSE if `property` does not exist or color balance is not
         * supported on `self`.
         * See clutter_gst_camera_supports_color_balance().
         * @param property Property name
         * @param min_value Pointer to store the minimum value of @property, or %NULL
         * @param max_value Pointer to store the maximum value of @property, or %NULL
         * @param default_value Pointer to store the default value of @property, or %NULL
         * @returns %TRUE if successful, %FALSE otherwise
         */
        get_color_balance_property_range(
            property: string,
            min_value: number,
            max_value: number,
            default_value: number,
        ): boolean;
        get_contrast(cur_value: number): boolean;
        get_contrast_range(min_value: number, max_value: number, default_value: number): boolean;
        /**
         * Retrieve the current filter being used.
         * @returns The current filter or %NULL if none is set
         */
        get_filter(): Gst.Element;
        /**
         * Retrieve the current gamma value.
         *
         * This method will return FALSE if gamma correction is not
         * supported on `self`.
         * See clutter_gst_camera_supports_gamma_correction().
         * @param cur_value Pointer to store the current gamma value
         * @returns %TRUE if successful, %FALSE otherwise
         */
        get_gamma(cur_value: number): boolean;
        /**
         * Retrieve the minimum, maximum and default gamma values.
         *
         * This method will return FALSE if gamma correction is not
         * supported on `self`.
         * See clutter_gst_camera_supports_gamma_correction().
         * @param min_value Pointer to store the minimum gamma value, or %NULL
         * @param max_value Pointer to store the maximum gamma value, or %NULL
         * @param default_value Pointer to store the default gamma value, or %NULL
         * @returns %TRUE if successful, %FALSE otherwise
         */
        get_gamma_range(min_value: number, max_value: number, default_value: number): boolean;
        get_hue(cur_value: number): boolean;
        get_hue_range(min_value: number, max_value: number, default_value: number): boolean;
        get_saturation(cur_value: number): boolean;
        get_saturation_range(min_value: number, max_value: number, default_value: number): boolean;
        /**
         * Check whether the `self` is ready for video/photo capture.
         * @returns %TRUE if @self is ready for capture, %FALSE otherwise
         */
        is_ready_for_capture(): boolean;
        /**
         * Check whether the `self` is recording video.
         * @returns %TRUE if @self is recording video, %FALSE otherwise
         */
        is_recording_video(): boolean;
        /**
         * Remove the current filter, if any.
         * @returns %TRUE on success, %FALSE otherwise
         */
        remove_filter(): boolean;
        set_brightness(value: number): boolean;
        /**
         * Set the new active camera device.
         * @param device a #ClutterGstCameraDevice
         * @returns %TRUE on success, %FALSE otherwise
         */
        set_camera_device(device: CameraDevice): boolean;
        /**
         * Set the value for the color balance property `property` to `value`.
         * Allowed values can be retrieved with
         * clutter_gst_camera_get_color_balance_property_range().
         *
         * This method will return FALSE if `property` does not exist or color balance is not
         * supported on `self`.
         * See clutter_gst_camera_supports_color_balance().
         * @param property Property name
         * @param value The value to set
         * @returns %TRUE if successful, %FALSE otherwise
         */
        set_color_balance_property(property: string, value: number): boolean;
        set_contrast(value: number): boolean;
        /**
         * Set the filter element to be used.
         * Filters can be used for effects, image processing, etc.
         * @param filter a #GstElement for the filter
         * @returns %TRUE on success, %FALSE otherwise
         */
        set_filter(filter: Gst.Element): boolean;
        /**
         * Set the gamma value.
         * Allowed values can be retrieved with
         * clutter_gst_camera_get_gamma_range().
         *
         * This method will return FALSE if gamma correction is not
         * supported on `self`.
         * See clutter_gst_camera_supports_gamma_correction().
         * @param value The value to set
         * @returns %TRUE if successful, %FALSE otherwise
         */
        set_gamma(value: number): boolean;
        set_hue(value: number): boolean;
        /**
         * Set the encoding profile to be used for photo captures.
         * The default profile saves photos as JPEG images.
         * @param profile A #GstEncodingProfile to be used for photo captures.
         */
        set_photo_profile(profile: GstPbutils.EncodingProfile): void;
        set_saturation(value: number): boolean;
        /**
         * Set the encoding profile to be used for video recording.
         * The default profile saves videos as Ogg/Theora videos.
         * @param profile A #GstEncodingProfile to be used for video recording.
         */
        set_video_profile(profile: GstPbutils.EncodingProfile): void;
        /**
         * Start a video recording with the `self` and save it to `filename`.
         * This method requires that `self` is playing and ready for capture.
         *
         * The ::video-saved signal will be emitted when the video is saved.
         * @param filename the name of the video file to where the recording will be saved
         * @returns %TRUE if the video recording was successfully started, %FALSE otherwise
         */
        start_video_recording(filename: string): boolean;
        /**
         * Stop recording video on the `self`.
         */
        stop_video_recording(): void;
        /**
         * Check whether the `self` supports color balance.
         * @returns %TRUE if @self supports color balance, %FALSE otherwise
         */
        supports_color_balance(): boolean;
        /**
         * Check whether the `self` supports gamma correction.
         * @returns %TRUE if @self supports gamma correction, %FALSE otherwise
         */
        supports_gamma_correction(): boolean;
        /**
         * Take a photo with the `self` and save it to `filename`.
         * This method requires that `self` is playing and ready for capture.
         *
         * The ::photo-saved signal will be emitted when the video is saved.
         * @param filename the name of the file to where the photo will be saved
         * @returns %TRUE if the photo was successfully captured, %FALSE otherwise
         */
        take_photo(filename: string): boolean;
        /**
         * Take a photo with the `self` and emit it in the ::photo-taken signal as a
         * #GdkPixbuf.
         * This method requires that `self` is playing and ready for capture.
         * @returns %TRUE if the photo was successfully captured, %FALSE otherwise
         */
        take_photo_pixbuf(): boolean;

        // Inherited properties
        /**
         * The volume of the audio, as a normalized value between
         * 0.0 and 1.0.
         */
        get audio_volume(): number;
        set audio_volume(val: number);
        /**
         * The volume of the audio, as a normalized value between
         * 0.0 and 1.0.
         */
        get audioVolume(): number;
        set audioVolume(val: number);
        /**
         * Whether the #ClutterGstPlayer is in idle mode.
         */
        get idle(): boolean;
        /**
         * Whether the #ClutterGstPlayer actor is playing.
         */
        get playing(): boolean;
        set playing(val: boolean);

        // Inherited methods
        /**
         * Retrieves the playback volume of `self`.
         * @returns The playback volume between 0.0 and 1.0
         */
        get_audio_volume(): number;
        /**
         * Retrieves the #ClutterGstFrame of the last frame produced by `self`.
         * @returns the #ClutterGstFrame of the last frame.
         */
        get_frame(): Frame;
        /**
         * Get the idle state of the pipeline.
         * @returns TRUE if the pipline is in idle mode, FALSE otherwise.
         */
        get_idle(): boolean;
        /**
         * Retrieves the #GstPipeline used by the `self,` for direct use with
         * GStreamer API.
         * @returns the #GstPipeline element used by the player
         */
        get_pipeline(): Gst.Element;
        /**
         * Retrieves the playing status of `self`.
         * @returns %TRUE if playing, %FALSE if stopped.
         */
        get_playing(): boolean;
        /**
         * Retrieves the #ClutterGstVideoSink used by the `self`.
         * @returns the #ClutterGstVideoSink element used by the player
         */
        get_video_sink(): VideoSink;
        /**
         * Sets the playback volume of `self` to `volume`.
         * @param volume the volume as a double between 0.0 and 1.0
         */
        set_audio_volume(volume: number): void;
        /**
         * Starts or stops playing of `self`.
         *
         * The implementation might be asynchronous, so the way to know whether
         * the actual playing state of the `self` is to use the #GObject::notify
         * signal on the #ClutterGstPlayer:playing property and then retrieve the
         * current state with clutter_gst_player_get_playing(). ClutterGstVideoActor
         * in clutter-gst is an example of such an asynchronous implementation.
         * @param playing %TRUE to start playing
         */
        set_playing(playing: boolean): void;
        vfunc_eos(): void;
        vfunc_error(error: GLib.Error): void;
        /**
         * Retrieves the playback volume of `self`.
         */
        vfunc_get_audio_volume(): number;
        /**
         * Retrieves the #ClutterGstFrame of the last frame produced by `self`.
         */
        vfunc_get_frame(): Frame;
        /**
         * Get the idle state of the pipeline.
         */
        vfunc_get_idle(): boolean;
        /**
         * Retrieves the #GstPipeline used by the `self,` for direct use with
         * GStreamer API.
         */
        vfunc_get_pipeline(): Gst.Element;
        /**
         * Retrieves the playing status of `self`.
         */
        vfunc_get_playing(): boolean;
        /**
         * Retrieves the #ClutterGstVideoSink used by the `self`.
         */
        vfunc_get_video_sink(): VideoSink;
        vfunc_new_frame(frame: Frame): void;
        vfunc_ready(): void;
        /**
         * Sets the playback volume of `self` to `volume`.
         * @param volume the volume as a double between 0.0 and 1.0
         */
        vfunc_set_audio_volume(volume: number): void;
        /**
         * Starts or stops playing of `self`.
         *
         * The implementation might be asynchronous, so the way to know whether
         * the actual playing state of the `self` is to use the #GObject::notify
         * signal on the #ClutterGstPlayer:playing property and then retrieve the
         * current state with clutter_gst_player_get_playing(). ClutterGstVideoActor
         * in clutter-gst is an example of such an asynchronous implementation.
         * @param playing %TRUE to start playing
         */
        vfunc_set_playing(playing: boolean): void;
        vfunc_size_change(width: number, height: number): void;
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

    namespace CameraDevice {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'capture-resolution-changed': (arg0: number, arg1: number) => void;
            'notify::element-factory': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::node': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            element_factory: Gst.ElementFactory;
            elementFactory: Gst.ElementFactory;
            name: string;
            node: string;
        }
    }

    /**
     * GObject representing a camera device using GStreamer.
     *
     * The #ClutterGstCameraDevice structure contains only private data and
     * should not be accessed directly.
     */
    class CameraDevice extends GObject.Object {
        static $gtype: GObject.GType<CameraDevice>;

        // Properties

        /**
         * The GstElementFactory for this device.
         */
        get element_factory(): Gst.ElementFactory;
        /**
         * The GstElementFactory for this device.
         */
        get elementFactory(): Gst.ElementFactory;
        /**
         * The device name.
         */
        get name(): string;
        /**
         * The device node.
         */
        get node(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CameraDevice.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<CameraDevice.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof CameraDevice.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CameraDevice.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CameraDevice.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CameraDevice.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CameraDevice.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CameraDevice.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_capture_resolution_changed(width: number, height: number): void;

        // Methods

        /**
         * Retrieve the current capture resolution being used by `device`.
         */
        get_capture_resolution(): [number, number];
        /**
         * Retrieve the name of the `device`.
         * @returns the device name.
         */
        get_name(): string;
        /**
         * Retrieve the node (location) of the `device`.
         * @returns the device node.
         */
        get_node(): string;
        /**
         * Retrieve the supported resolutions of the `device`.
         * @returns an array of #ClutterGstVideoResolution with the                                supported resolutions.
         */
        get_supported_resolutions(): VideoResolution[];
        /**
         * Set the capture resolution to be used by `device`.
         * @param width The new capture resolution width to use
         * @param height The new capture resolution height to use
         */
        set_capture_resolution(width: number, height: number): void;
    }

    namespace CameraManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'camera-added': (arg0: CameraDevice) => void;
            'camera-removed': (arg0: CameraDevice) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * An object to list available cameras on the system.
     *
     * The #ClutterGstCameraManager structure contains only private data and
     * should not be accessed directly.
     */
    class CameraManager extends GObject.Object {
        static $gtype: GObject.GType<CameraManager>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CameraManager.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<CameraManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof CameraManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CameraManager.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CameraManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CameraManager.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CameraManager.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CameraManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Get the camera manager.
         *
         * <note>This function has to be called from Clutter's main
         * thread.</note>
         */
        static get_default(): CameraManager;

        // Methods

        /**
         * Retrieve an array of supported camera devices.
         * @returns An array of #ClutterGstCameraDevice representing                                the supported camera devices
         */
        get_camera_devices(): CameraDevice[];
    }

    namespace Content {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'size-change': (arg0: number, arg1: number) => void;
            'notify::frame': (pspec: GObject.ParamSpec) => void;
            'notify::paint-frame': (pspec: GObject.ParamSpec) => void;
            'notify::paint-overlays': (pspec: GObject.ParamSpec) => void;
            'notify::player': (pspec: GObject.ParamSpec) => void;
            'notify::sink': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Clutter.Content.ConstructorProps {
            frame: Frame;
            paint_frame: boolean;
            paintFrame: boolean;
            paint_overlays: boolean;
            paintOverlays: boolean;
            player: GObject.Object;
            sink: VideoSink;
        }
    }

    /**
     * The #ClutterGstContent structure contains only private data
     * and should be accessed using the provided API
     */
    class Content extends GObject.Object implements Clutter.Content {
        static $gtype: GObject.GType<Content>;

        // Properties

        get frame(): Frame;
        set frame(val: Frame);
        get paint_frame(): boolean;
        set paint_frame(val: boolean);
        get paintFrame(): boolean;
        set paintFrame(val: boolean);
        get paint_overlays(): boolean;
        set paint_overlays(val: boolean);
        get paintOverlays(): boolean;
        set paintOverlays(val: boolean);
        get player(): GObject.Object;
        set player(val: GObject.Object);
        get sink(): VideoSink;
        set sink(val: VideoSink);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Content.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Content.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Content.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Content.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Content.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Content.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Content.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Content.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static ['new'](): Clutter.Content;
        static new_with_sink(sink: VideoSink): Clutter.Content;

        // Virtual methods

        vfunc_has_painting_content(): boolean;

        // Methods

        get_frame(): Frame;
        get_overlays(): Overlays;
        get_player(): Player;
        get_sink(): VideoSink;
        /**
         * Set the current frame.
         * @param frame A #ClutterGstFrame
         */
        set_frame(frame: Frame): void;
        set_player(player: Player): void;
        set_sink(sink: VideoSink): void;

        // Inherited methods
        /**
         * Retrieves the natural size of the `content,` if any.
         *
         * The natural size of a #ClutterContent is defined as the size the content
         * would have regardless of the allocation of the actor that is painting it,
         * for instance the size of an image data.
         * @returns %TRUE if the content has a preferred size, and %FALSE   otherwise
         */
        get_preferred_size(): [boolean, number, number];
        /**
         * Invalidates a #ClutterContent.
         *
         * This function should be called by #ClutterContent implementations when
         * they change the way a the content should be painted regardless of the
         * actor state.
         */
        invalidate(): void;
        vfunc_attached(actor: Clutter.Actor): void;
        vfunc_detached(actor: Clutter.Actor): void;
        /**
         * Retrieves the natural size of the `content,` if any.
         *
         * The natural size of a #ClutterContent is defined as the size the content
         * would have regardless of the allocation of the actor that is painting it,
         * for instance the size of an image data.
         */
        vfunc_get_preferred_size(): [boolean, number, number];
        /**
         * Invalidates a #ClutterContent.
         *
         * This function should be called by #ClutterContent implementations when
         * they change the way a the content should be painted regardless of the
         * actor state.
         */
        vfunc_invalidate(): void;
        vfunc_paint_content(actor: Clutter.Actor, node: Clutter.PaintNode): void;
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

    namespace Crop {
        // Signal signatures
        interface SignalSignatures extends Content.SignalSignatures {
            'notify::cull-backface': (pspec: GObject.ParamSpec) => void;
            'notify::input-region': (pspec: GObject.ParamSpec) => void;
            'notify::output-region': (pspec: GObject.ParamSpec) => void;
            'notify::paint-borders': (pspec: GObject.ParamSpec) => void;
            'notify::frame': (pspec: GObject.ParamSpec) => void;
            'notify::paint-frame': (pspec: GObject.ParamSpec) => void;
            'notify::paint-overlays': (pspec: GObject.ParamSpec) => void;
            'notify::player': (pspec: GObject.ParamSpec) => void;
            'notify::sink': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Content.ConstructorProps, Clutter.Content.ConstructorProps {
            cull_backface: boolean;
            cullBackface: boolean;
            input_region: Box;
            inputRegion: Box;
            output_region: Box;
            outputRegion: Box;
            paint_borders: boolean;
            paintBorders: boolean;
        }
    }

    /**
     * Implementation of #ClutterGstContent that displays a sub region of
     * video streams.
     *
     * The #ClutterGstCrop structure contains only private data and
     * should not be accessed directly.
     */
    class Crop extends Content implements Clutter.Content {
        static $gtype: GObject.GType<Crop>;

        // Properties

        /**
         * Whether to cull the backface of the actor
         */
        get cull_backface(): boolean;
        set cull_backface(val: boolean);
        /**
         * Whether to cull the backface of the actor
         */
        get cullBackface(): boolean;
        set cullBackface(val: boolean);
        /**
         * Input region in the video frame (all values between 0 and 1).
         */
        get input_region(): Box;
        set input_region(val: Box);
        /**
         * Input region in the video frame (all values between 0 and 1).
         */
        get inputRegion(): Box;
        set inputRegion(val: Box);
        /**
         * Output region in the actor's allocation (all values between 0 and 1).
         */
        get output_region(): Box;
        set output_region(val: Box);
        /**
         * Output region in the actor's allocation (all values between 0 and 1).
         */
        get outputRegion(): Box;
        set outputRegion(val: Box);
        /**
         * Whether or not paint borders on the sides of the video
         */
        get paint_borders(): boolean;
        set paint_borders(val: boolean);
        /**
         * Whether or not paint borders on the sides of the video
         */
        get paintBorders(): boolean;
        set paintBorders(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Crop.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Crop.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Crop;
        // Conflicted with ClutterGst.Content.new

        static ['new'](...args: never[]): any;

        // Signals

        connect<K extends keyof Crop.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Crop.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Crop.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Crop.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Crop.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Crop.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Inherited methods
        /**
         * Retrieves the natural size of the `content,` if any.
         *
         * The natural size of a #ClutterContent is defined as the size the content
         * would have regardless of the allocation of the actor that is painting it,
         * for instance the size of an image data.
         * @returns %TRUE if the content has a preferred size, and %FALSE   otherwise
         */
        get_preferred_size(): [boolean, number, number];
        /**
         * Invalidates a #ClutterContent.
         *
         * This function should be called by #ClutterContent implementations when
         * they change the way a the content should be painted regardless of the
         * actor state.
         */
        invalidate(): void;
        vfunc_attached(actor: Clutter.Actor): void;
        vfunc_detached(actor: Clutter.Actor): void;
        /**
         * Retrieves the natural size of the `content,` if any.
         *
         * The natural size of a #ClutterContent is defined as the size the content
         * would have regardless of the allocation of the actor that is painting it,
         * for instance the size of an image data.
         */
        vfunc_get_preferred_size(): [boolean, number, number];
        /**
         * Invalidates a #ClutterContent.
         *
         * This function should be called by #ClutterContent implementations when
         * they change the way a the content should be painted regardless of the
         * actor state.
         */
        vfunc_invalidate(): void;
        vfunc_paint_content(actor: Clutter.Actor, node: Clutter.PaintNode): void;
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

    namespace Playback {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'should-buffer': (arg0: Gst.Query) => boolean | void;
            'notify::audio-stream': (pspec: GObject.ParamSpec) => void;
            'notify::audio-streams': (pspec: GObject.ParamSpec) => void;
            'notify::buffer-fill': (pspec: GObject.ParamSpec) => void;
            'notify::can-seek': (pspec: GObject.ParamSpec) => void;
            'notify::duration': (pspec: GObject.ParamSpec) => void;
            'notify::in-seek': (pspec: GObject.ParamSpec) => void;
            'notify::progress': (pspec: GObject.ParamSpec) => void;
            'notify::seek-flags': (pspec: GObject.ParamSpec) => void;
            'notify::subtitle-font-name': (pspec: GObject.ParamSpec) => void;
            'notify::subtitle-track': (pspec: GObject.ParamSpec) => void;
            'notify::subtitle-tracks': (pspec: GObject.ParamSpec) => void;
            'notify::subtitle-uri': (pspec: GObject.ParamSpec) => void;
            'notify::uri': (pspec: GObject.ParamSpec) => void;
            'notify::user-agent': (pspec: GObject.ParamSpec) => void;
            'notify::audio-volume': (pspec: GObject.ParamSpec) => void;
            'notify::idle': (pspec: GObject.ParamSpec) => void;
            'notify::playing': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Player.ConstructorProps {
            audio_stream: number;
            audioStream: number;
            audio_streams: any;
            audioStreams: any;
            buffer_fill: number;
            bufferFill: number;
            can_seek: boolean;
            canSeek: boolean;
            duration: number;
            in_seek: boolean;
            inSeek: boolean;
            progress: number;
            seek_flags: SeekFlags;
            seekFlags: SeekFlags;
            subtitle_font_name: string;
            subtitleFontName: string;
            subtitle_track: number;
            subtitleTrack: number;
            subtitle_tracks: any;
            subtitleTracks: any;
            subtitle_uri: string;
            subtitleUri: string;
            uri: string;
            user_agent: string;
            userAgent: string;
        }
    }

    /**
     * Implementation of #ClutterGstPlayback that displays media streams
     * using GStreamer.
     *
     * The #ClutterGstPlayback structure contains only private data and
     * should not be accessed directly.
     */
    class Playback extends GObject.Object implements Player {
        static $gtype: GObject.GType<Playback>;

        // Properties

        /**
         * Index of the current audio stream.
         */
        get audio_stream(): number;
        set audio_stream(val: number);
        /**
         * Index of the current audio stream.
         */
        get audioStream(): number;
        set audioStream(val: number);
        /**
         * List of audio streams available on the current media.
         */
        get audio_streams(): any;
        /**
         * List of audio streams available on the current media.
         */
        get audioStreams(): any;
        /**
         * The fill level of the buffer for the current stream,
         * as a value between 0.0 and 1.0.
         */
        get buffer_fill(): number;
        /**
         * The fill level of the buffer for the current stream,
         * as a value between 0.0 and 1.0.
         */
        get bufferFill(): number;
        /**
         * Whether the current stream is seekable.
         */
        get can_seek(): boolean;
        /**
         * Whether the current stream is seekable.
         */
        get canSeek(): boolean;
        /**
         * The duration of the current stream, in seconds
         */
        get duration(): number;
        /**
         * Whether or not the stream is being seeked.
         */
        get in_seek(): boolean;
        /**
         * Whether or not the stream is being seeked.
         */
        get inSeek(): boolean;
        /**
         * The current progress of the playback, as a normalized
         * value between 0.0 and 1.0.
         */
        get progress(): number;
        set progress(val: number);
        /**
         * Flags to use when seeking.
         */
        get seek_flags(): SeekFlags;
        set seek_flags(val: SeekFlags);
        /**
         * Flags to use when seeking.
         */
        get seekFlags(): SeekFlags;
        set seekFlags(val: SeekFlags);
        /**
         * The font used to display subtitles. The font description has to
         * follow the same grammar as the one recognized by
         * pango_font_description_from_string().
         */
        get subtitle_font_name(): string;
        set subtitle_font_name(val: string);
        /**
         * The font used to display subtitles. The font description has to
         * follow the same grammar as the one recognized by
         * pango_font_description_from_string().
         */
        get subtitleFontName(): string;
        set subtitleFontName(val: string);
        /**
         * Current subtitle track being displayed.
         */
        get subtitle_track(): number;
        set subtitle_track(val: number);
        /**
         * Current subtitle track being displayed.
         */
        get subtitleTrack(): number;
        set subtitleTrack(val: number);
        /**
         * List of subtitle tracks available.
         */
        get subtitle_tracks(): any;
        /**
         * List of subtitle tracks available.
         */
        get subtitleTracks(): any;
        /**
         * The location of a subtitle file, expressed as a valid URI.
         */
        get subtitle_uri(): string;
        set subtitle_uri(val: string);
        /**
         * The location of a subtitle file, expressed as a valid URI.
         */
        get subtitleUri(): string;
        set subtitleUri(val: string);
        /**
         * The location of a media file, expressed as a valid URI.
         */
        get uri(): string;
        set uri(val: string);
        /**
         * The User Agent used by #ClutterGstPlayback with network protocols.
         */
        get user_agent(): string;
        set user_agent(val: string);
        /**
         * The User Agent used by #ClutterGstPlayback with network protocols.
         */
        get userAgent(): string;
        set userAgent(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Playback.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Playback.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Playback;

        // Signals

        connect<K extends keyof Playback.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Playback.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Playback.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Playback.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Playback.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Playback.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_should_buffer(query: Gst.Query): boolean;

        // Methods

        /**
         * Get the current audio stream. The number returned in the index of the
         * audio stream playing in the list returned by
         * clutter_gst_playback_get_audio_streams().
         * @returns the index of the current audio stream, -1 if the media has no audio stream
         */
        get_audio_stream(): number;
        /**
         * Get the list of audio streams of the current media.
         * @returns a list of strings describing the available audio streams
         */
        get_audio_streams(): string[];
        /**
         * Retrieves the buffer duration when buffering network streams.
         * @returns The buffer duration
         */
        get_buffer_duration(): number;
        /**
         * Retrieves the amount of the stream that is buffered.
         * @returns the fill level, between 0.0 and 1.0
         */
        get_buffer_fill(): number;
        /**
         * Retrieves the buffer size when buffering network streams.
         * @returns The buffer size
         */
        get_buffer_size(): number;
        get_buffering_mode(): BufferingMode;
        /**
         * Retrieves the duration of the media stream that `self` represents.
         * @returns the duration of the media stream, in seconds
         */
        get_duration(): number;
        /**
         * Whether the player is seeking.
         * @returns TRUE if the player is seeking, FALSE otherwise.
         */
        get_in_seek(): boolean;
        /**
         * Retrieves the position in the media stream that `self` represents.
         * @returns the position in the media stream, in seconds
         */
        get_position(): number;
        /**
         * Retrieves the playback progress of `self`.
         * @returns the playback progress, between 0.0 and 1.0
         */
        get_progress(): number;
        /**
         * Get the current value of the seek-flags property.
         * @returns a combination of #ClutterGstSeekFlags
         */
        get_seek_flags(): SeekFlags;
        /**
         * Retrieves the font name currently used.
         * @returns a string containing the font name. Use g_free()   to free the returned string
         */
        get_subtitle_font_name(): string;
        /**
         * Get the current subtitles track. The number returned is the index of the
         * subtiles track in the list returned by
         * clutter_gst_playback_get_subtitle_tracks().
         * @returns the index of the current subtitlest track, -1 if the media has no subtitles track or if the subtitles have been turned off
         */
        get_subtitle_track(): number;
        /**
         * Get the list of subtitles tracks of the current media.
         * @returns a list of strings describing the available subtitles tracks
         */
        get_subtitle_tracks(): string[];
        /**
         * Retrieves the URI of the subtitle file in use.
         * @returns the URI of the subtitle file. Use g_free()   to free the returned string
         */
        get_subtitle_uri(): string;
        /**
         * Retrieves the URI from `self`.
         * @returns the URI of the media stream. Use g_free()   to free the returned string
         */
        get_uri(): string;
        /**
         * Retrieves the user agent used when streaming.
         * @returns the user agent used. The returned string has to be freed with g_free()
         */
        get_user_agent(): string;
        /**
         * Whether the player is using a live media.
         * @returns TRUE if the player is using a live media, FALSE otherwise.
         */
        is_live_media(): boolean;
        /**
         * Set the audio stream to play. `index_` is the index of the stream
         * in the list returned by clutter_gst_playback_get_audio_streams().
         * @param index_ the index of the audio stream
         */
        set_audio_stream(index_: number): void;
        /**
         * Sets the buffer duration to be used when buffering network streams.
         * @param duration The new duration
         */
        set_buffer_duration(duration: number): void;
        /**
         * Sets the buffer size to be used when buffering network streams.
         * @param size The new size
         */
        set_buffer_size(size: number): void;
        set_buffering_mode(mode: BufferingMode | null): void;
        /**
         * Sets the source of `self` using a file path.
         * @param filename A filename
         */
        set_filename(filename: string): void;
        /**
         * Sets the playback progress of `self`. The `progress` is
         * a normalized value between 0.0 (begin) and 1.0 (end).
         * @param progress the progress of the playback, between 0.0 and 1.0
         */
        set_progress(progress: number): void;
        /**
         * Seeking can be done with several trade-offs. Clutter-gst defaults
         * to %CLUTTER_GST_SEEK_FLAG_NONE.
         * @param flags a combination of #ClutterGstSeekFlags
         */
        set_seek_flags(flags: SeekFlags | null): void;
        /**
         * Sets the font used by the subtitle renderer. The `font_name` string must be
         * either %NULL, which means that the default font name of the underlying
         * implementation will be used; or must follow the grammar recognized by
         * pango_font_description_from_string() like:
         *
         *
         * ```
         *   clutter_gst_playback_set_subtitle_font_name (player, "Sans 24pt");
         * ```
         *
         * @param font_name a font name, or %NULL to set the default font name
         */
        set_subtitle_font_name(font_name: string): void;
        /**
         * Set the subtitles track to play. `index_` is the index of the stream
         * in the list returned by clutter_gst_playback_get_subtitle_tracks().
         *
         * If `index_` is -1, the subtitles are turned off.
         * @param index_ the index of the subtitles track
         */
        set_subtitle_track(index_: number): void;
        /**
         * Sets the location of a subtitle file to display while playing `self`.
         * @param uri the URI of a subtitle file
         */
        set_subtitle_uri(uri: string): void;
        /**
         * Sets the URI of `self` to `uri`.
         * @param uri the URI of the media stream
         */
        set_uri(uri: string): void;
        /**
         * Sets the user agent to use when streaming.
         *
         * When streaming content, you might want to set a custom user agent, eg. to
         * promote your software, make it appear in statistics or because the server
         * requires a special user agent you want to impersonate.
         * @param user_agent the user agent
         */
        set_user_agent(user_agent: string): void;

        // Inherited properties
        /**
         * The volume of the audio, as a normalized value between
         * 0.0 and 1.0.
         */
        get audio_volume(): number;
        set audio_volume(val: number);
        /**
         * The volume of the audio, as a normalized value between
         * 0.0 and 1.0.
         */
        get audioVolume(): number;
        set audioVolume(val: number);
        /**
         * Whether the #ClutterGstPlayer is in idle mode.
         */
        get idle(): boolean;
        /**
         * Whether the #ClutterGstPlayer actor is playing.
         */
        get playing(): boolean;
        set playing(val: boolean);

        // Inherited methods
        /**
         * Retrieves the playback volume of `self`.
         * @returns The playback volume between 0.0 and 1.0
         */
        get_audio_volume(): number;
        /**
         * Retrieves the #ClutterGstFrame of the last frame produced by `self`.
         * @returns the #ClutterGstFrame of the last frame.
         */
        get_frame(): Frame;
        /**
         * Get the idle state of the pipeline.
         * @returns TRUE if the pipline is in idle mode, FALSE otherwise.
         */
        get_idle(): boolean;
        /**
         * Retrieves the #GstPipeline used by the `self,` for direct use with
         * GStreamer API.
         * @returns the #GstPipeline element used by the player
         */
        get_pipeline(): Gst.Element;
        /**
         * Retrieves the playing status of `self`.
         * @returns %TRUE if playing, %FALSE if stopped.
         */
        get_playing(): boolean;
        /**
         * Retrieves the #ClutterGstVideoSink used by the `self`.
         * @returns the #ClutterGstVideoSink element used by the player
         */
        get_video_sink(): VideoSink;
        /**
         * Sets the playback volume of `self` to `volume`.
         * @param volume the volume as a double between 0.0 and 1.0
         */
        set_audio_volume(volume: number): void;
        /**
         * Starts or stops playing of `self`.
         *
         * The implementation might be asynchronous, so the way to know whether
         * the actual playing state of the `self` is to use the #GObject::notify
         * signal on the #ClutterGstPlayer:playing property and then retrieve the
         * current state with clutter_gst_player_get_playing(). ClutterGstVideoActor
         * in clutter-gst is an example of such an asynchronous implementation.
         * @param playing %TRUE to start playing
         */
        set_playing(playing: boolean): void;
        vfunc_eos(): void;
        vfunc_error(error: GLib.Error): void;
        /**
         * Retrieves the playback volume of `self`.
         */
        vfunc_get_audio_volume(): number;
        /**
         * Retrieves the #ClutterGstFrame of the last frame produced by `self`.
         */
        vfunc_get_frame(): Frame;
        /**
         * Get the idle state of the pipeline.
         */
        vfunc_get_idle(): boolean;
        /**
         * Retrieves the #GstPipeline used by the `self,` for direct use with
         * GStreamer API.
         */
        vfunc_get_pipeline(): Gst.Element;
        /**
         * Retrieves the playing status of `self`.
         */
        vfunc_get_playing(): boolean;
        /**
         * Retrieves the #ClutterGstVideoSink used by the `self`.
         */
        vfunc_get_video_sink(): VideoSink;
        vfunc_new_frame(frame: Frame): void;
        vfunc_ready(): void;
        /**
         * Sets the playback volume of `self` to `volume`.
         * @param volume the volume as a double between 0.0 and 1.0
         */
        vfunc_set_audio_volume(volume: number): void;
        /**
         * Starts or stops playing of `self`.
         *
         * The implementation might be asynchronous, so the way to know whether
         * the actual playing state of the `self` is to use the #GObject::notify
         * signal on the #ClutterGstPlayer:playing property and then retrieve the
         * current state with clutter_gst_player_get_playing(). ClutterGstVideoActor
         * in clutter-gst is an example of such an asynchronous implementation.
         * @param playing %TRUE to start playing
         */
        vfunc_set_playing(playing: boolean): void;
        vfunc_size_change(width: number, height: number): void;
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

    namespace VideoSink {
        // Signal signatures
        interface SignalSignatures extends GstVideo.VideoSink.SignalSignatures {
            'new-frame': () => void;
            'new-overlays': () => void;
            'pipeline-ready': () => void;
            'notify::update-priority': (pspec: GObject.ParamSpec) => void;
            'notify::show-preroll-frame': (pspec: GObject.ParamSpec) => void;
            'notify::async': (pspec: GObject.ParamSpec) => void;
            'notify::blocksize': (pspec: GObject.ParamSpec) => void;
            'notify::enable-last-sample': (pspec: GObject.ParamSpec) => void;
            'notify::last-sample': (pspec: GObject.ParamSpec) => void;
            'notify::max-bitrate': (pspec: GObject.ParamSpec) => void;
            'notify::max-lateness': (pspec: GObject.ParamSpec) => void;
            'notify::processing-deadline': (pspec: GObject.ParamSpec) => void;
            'notify::qos': (pspec: GObject.ParamSpec) => void;
            'notify::render-delay': (pspec: GObject.ParamSpec) => void;
            'notify::stats': (pspec: GObject.ParamSpec) => void;
            'notify::sync': (pspec: GObject.ParamSpec) => void;
            'notify::throttle-time': (pspec: GObject.ParamSpec) => void;
            'notify::ts-offset': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends GstVideo.VideoSink.ConstructorProps,
                GstVideo.ColorBalance.ConstructorProps,
                GstVideo.Navigation.ConstructorProps {
            update_priority: number;
            updatePriority: number;
        }
    }

    /**
     * The #ClutterGstVideoSink structure contains only private data and
     * should be accessed using the provided API.
     */
    class VideoSink extends GstVideo.VideoSink implements GstVideo.ColorBalance, GstVideo.Navigation {
        static $gtype: GObject.GType<VideoSink>;

        // Properties

        get update_priority(): number;
        set update_priority(val: number);
        get updatePriority(): number;
        set updatePriority(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: VideoSink.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<VideoSink.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): VideoSink;

        // Signals

        connect<K extends keyof VideoSink.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VideoSink.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VideoSink.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VideoSink.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VideoSink.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<VideoSink.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_new_frame(): void;
        vfunc_new_overlays(): void;
        vfunc_pipeline_ready(): void;

        // Methods

        /**
         * Returns a #ClutterGstFrame object suitable to render the current
         * frame of the given video sink. An application is free to make a
         * copy of this pipeline and modify it for custom rendering.
         * @returns A #ClutterGstFrame or NULL if there   isn't a frame to be displayed yet.
         */
        get_frame(): Frame;
        get_overlays(): Overlays;
        /**
         * Returns whether the pipeline is ready and so
         * clutter_gst_video_sink_get_pipeline() and
         * clutter_gst_video_sink_setup_pipeline() can be called without causing error.
         *
         * Note: Normally an application will wait until the
         * #ClutterGstVideoSink::pipeline-ready signal is emitted instead of
         * polling the ready status with this api, but sometimes when a sink
         * is passed between components that didn't have an opportunity to
         * connect a signal handler this can be useful.
         * @returns %TRUE if the sink is ready, else %FALSE
         */
        is_ready(): boolean;

        // Inherited methods
        /**
         * Get the #GstColorBalanceType of this implementation.
         * @returns A the #GstColorBalanceType.
         */
        get_balance_type(): GstVideo.ColorBalanceType;
        /**
         * Retrieve the current value of the indicated channel, between min_value
         * and max_value.
         *
         * See Also: The #GstColorBalanceChannel.min_value and
         *         #GstColorBalanceChannel.max_value members of the
         *         #GstColorBalanceChannel object.
         * @param channel A #GstColorBalanceChannel instance
         * @returns The current value of the channel.
         */
        get_value(channel: GstVideo.ColorBalanceChannel): number;
        // Conflicted with Gst.Object.get_value
        get_value(...args: never[]): any;
        /**
         * Retrieve a list of the available channels.
         * @returns A          GList containing pointers to #GstColorBalanceChannel          objects. The list is owned by the #GstColorBalance          instance and must not be freed.
         */
        list_channels(): GstVideo.ColorBalanceChannel[];
        /**
         * Sets the current value of the channel to the passed value, which must
         * be between min_value and max_value.
         *
         * See Also: The #GstColorBalanceChannel.min_value and
         *         #GstColorBalanceChannel.max_value members of the
         *         #GstColorBalanceChannel object.
         * @param channel A #GstColorBalanceChannel instance
         * @param value The new value for the channel.
         */
        set_value(channel: GstVideo.ColorBalanceChannel, value: number): void;
        /**
         * A helper function called by implementations of the GstColorBalance
         * interface. It fires the #GstColorBalance::value-changed signal on the
         * instance, and the #GstColorBalanceChannel::value-changed signal on the
         * channel object.
         * @param channel A #GstColorBalanceChannel whose value has changed
         * @param value The new value of the channel
         */
        value_changed(channel: GstVideo.ColorBalanceChannel, value: number): void;
        /**
         * Get the #GstColorBalanceType of this implementation.
         */
        vfunc_get_balance_type(): GstVideo.ColorBalanceType;
        /**
         * Retrieve the current value of the indicated channel, between min_value
         * and max_value.
         *
         * See Also: The #GstColorBalanceChannel.min_value and
         *         #GstColorBalanceChannel.max_value members of the
         *         #GstColorBalanceChannel object.
         * @param channel A #GstColorBalanceChannel instance
         */
        vfunc_get_value(channel: GstVideo.ColorBalanceChannel): number;
        /**
         * Retrieve a list of the available channels.
         */
        vfunc_list_channels(): GstVideo.ColorBalanceChannel[];
        /**
         * Sets the current value of the channel to the passed value, which must
         * be between min_value and max_value.
         *
         * See Also: The #GstColorBalanceChannel.min_value and
         *         #GstColorBalanceChannel.max_value members of the
         *         #GstColorBalanceChannel object.
         * @param channel A #GstColorBalanceChannel instance
         * @param value The new value for the channel.
         */
        vfunc_set_value(channel: GstVideo.ColorBalanceChannel, value: number): void;
        /**
         * A helper function called by implementations of the GstColorBalance
         * interface. It fires the #GstColorBalance::value-changed signal on the
         * instance, and the #GstColorBalanceChannel::value-changed signal on the
         * channel object.
         * @param channel A #GstColorBalanceChannel whose value has changed
         * @param value The new value of the channel
         */
        vfunc_value_changed(channel: GstVideo.ColorBalanceChannel, value: number): void;
        /**
         * Sends the indicated command to the navigation interface.
         * @param command The command to issue
         */
        send_command(command: GstVideo.NavigationCommand | null): void;
        send_event(structure: Gst.Structure): void;
        // Conflicted with Gst.Element.send_event
        send_event(...args: never[]): any;
        /**
         * Sends an event to the navigation interface.
         * @param event The event to send
         */
        send_event_simple(event: Gst.Event): void;
        send_key_event(event: string, key: string): void;
        /**
         * Sends a mouse event to the navigation interface. Mouse event coordinates
         * are sent relative to the display space of the related output area. This is
         * usually the size in pixels of the window associated with the element
         * implementing the #GstNavigation interface.
         * @param event The type of mouse event, as a text string. Recognised values are "mouse-button-press", "mouse-button-release" and "mouse-move".
         * @param button The button number of the button being pressed or released. Pass 0 for mouse-move events.
         * @param x The x coordinate of the mouse event.
         * @param y The y coordinate of the mouse event.
         */
        send_mouse_event(event: string, button: number, x: number, y: number): void;
        /**
         * Sends a mouse scroll event to the navigation interface. Mouse event coordinates
         * are sent relative to the display space of the related output area. This is
         * usually the size in pixels of the window associated with the element
         * implementing the #GstNavigation interface.
         * @param x The x coordinate of the mouse event.
         * @param y The y coordinate of the mouse event.
         * @param delta_x The delta_x coordinate of the mouse event.
         * @param delta_y The delta_y coordinate of the mouse event.
         */
        send_mouse_scroll_event(x: number, y: number, delta_x: number, delta_y: number): void;
        /**
         * sending a navigation event.
         * @param structure
         */
        vfunc_send_event(structure: Gst.Structure): void;
        // Conflicted with Gst.Element.vfunc_send_event
        vfunc_send_event(...args: never[]): any;
        /**
         * Sends an event to the navigation interface.
         * @param event The event to send
         */
        vfunc_send_event_simple(event: Gst.Event): void;
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
        // Conflicted with Gst.Object.ref
        ref(...args: never[]): any;
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

    type AspectratioClass = typeof Aspectratio;
    abstract class AspectratioPrivate {
        static $gtype: GObject.GType<AspectratioPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    /**
     * Bounding box of an area in a video texture or actor's allocation.
     * Coordinates are usually expressed in the [0, 1] interval.
     */
    class Box {
        static $gtype: GObject.GType<Box>;

        // Fields

        x1: number;
        y1: number;
        x2: number;
        y2: number;

        // Constructors

        constructor(
            properties?: Partial<{
                x1: number;
                y1: number;
                x2: number;
                y2: number;
            }>,
        );
        _init(...args: any[]): void;

        // Methods

        /**
         * Retrieves the height of the `box`
         * @returns the height of the box
         */
        get_height(): number;
        /**
         * Retrieves the width of the `box`
         * @returns the width of the box
         */
        get_width(): number;
    }

    type CameraClass = typeof Camera;
    type CameraDeviceClass = typeof CameraDevice;
    abstract class CameraDevicePrivate {
        static $gtype: GObject.GType<CameraDevicePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type CameraManagerClass = typeof CameraManager;
    abstract class CameraManagerPrivate {
        static $gtype: GObject.GType<CameraManagerPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class CameraPrivate {
        static $gtype: GObject.GType<CameraPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ContentClass = typeof Content;
    abstract class ContentPrivate {
        static $gtype: GObject.GType<ContentPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type CropClass = typeof Crop;
    abstract class CropPrivate {
        static $gtype: GObject.GType<CropPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    /**
     * Represents a frame outputted by the #ClutterGstVideoSink.
     */
    class Frame {
        static $gtype: GObject.GType<Frame>;

        // Fields

        resolution: VideoResolution;

        // Constructors

        constructor(
            properties?: Partial<{
                resolution: VideoResolution;
                pipeline: unknown;
            }>,
        );
        _init(...args: any[]): void;
    }

    /**
     * Represents a video overlay outputted by the #ClutterGstVideoSink.
     */
    class Overlay {
        static $gtype: GObject.GType<Overlay>;

        // Fields

        position: Box;

        // Constructors

        constructor(
            properties?: Partial<{
                position: Box;
                pipeline: unknown;
            }>,
        );
        _init(...args: any[]): void;
    }

    class Overlays {
        static $gtype: GObject.GType<Overlays>;

        // Fields

        overlays: any[];

        // Constructors

        constructor(
            properties?: Partial<{
                overlays: any[];
            }>,
        );
        _init(...args: any[]): void;
    }

    type PlaybackClass = typeof Playback;
    abstract class PlaybackPrivate {
        static $gtype: GObject.GType<PlaybackPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type PlayerIface = typeof Player;
    abstract class PlayerIfacePrivate {
        static $gtype: GObject.GType<PlayerIfacePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    /**
     * A video resolution.
     */
    class VideoResolution {
        static $gtype: GObject.GType<VideoResolution>;

        // Fields

        width: number;
        height: number;
        par_n: number;
        par_d: number;

        // Constructors

        constructor(
            properties?: Partial<{
                width: number;
                height: number;
                par_n: number;
                par_d: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    type VideoSinkClass = typeof VideoSink;
    abstract class VideoSinkPrivate {
        static $gtype: GObject.GType<VideoSinkPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    namespace Player {
        /**
         * Interface for implementing Player.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            vfunc_eos(): void;
            vfunc_error(error: GLib.Error): void;
            /**
             * Retrieves the playback volume of `self`.
             */
            vfunc_get_audio_volume(): number;
            /**
             * Retrieves the #ClutterGstFrame of the last frame produced by `self`.
             */
            vfunc_get_frame(): Frame;
            /**
             * Get the idle state of the pipeline.
             */
            vfunc_get_idle(): boolean;
            /**
             * Retrieves the #GstPipeline used by the `self,` for direct use with
             * GStreamer API.
             */
            vfunc_get_pipeline(): Gst.Element;
            /**
             * Retrieves the playing status of `self`.
             */
            vfunc_get_playing(): boolean;
            /**
             * Retrieves the #ClutterGstVideoSink used by the `self`.
             */
            vfunc_get_video_sink(): VideoSink;
            vfunc_new_frame(frame: Frame): void;
            vfunc_ready(): void;
            /**
             * Sets the playback volume of `self` to `volume`.
             * @param volume the volume as a double between 0.0 and 1.0
             */
            vfunc_set_audio_volume(volume: number): void;
            /**
             * Starts or stops playing of `self`.
             *
             * The implementation might be asynchronous, so the way to know whether
             * the actual playing state of the `self` is to use the #GObject::notify
             * signal on the #ClutterGstPlayer:playing property and then retrieve the
             * current state with clutter_gst_player_get_playing(). ClutterGstVideoActor
             * in clutter-gst is an example of such an asynchronous implementation.
             * @param playing %TRUE to start playing
             */
            vfunc_set_playing(playing: boolean): void;
            vfunc_size_change(width: number, height: number): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            audio_volume: number;
            audioVolume: number;
            idle: boolean;
            playing: boolean;
        }
    }

    export interface PlayerNamespace {
        $gtype: GObject.GType<Player>;
        prototype: Player;
    }
    interface Player extends GObject.Object, Player.Interface {
        // Properties

        /**
         * The volume of the audio, as a normalized value between
         * 0.0 and 1.0.
         */
        get audio_volume(): number;
        set audio_volume(val: number);
        /**
         * The volume of the audio, as a normalized value between
         * 0.0 and 1.0.
         */
        get audioVolume(): number;
        set audioVolume(val: number);
        /**
         * Whether the #ClutterGstPlayer is in idle mode.
         */
        get idle(): boolean;
        /**
         * Whether the #ClutterGstPlayer actor is playing.
         */
        get playing(): boolean;
        set playing(val: boolean);

        // Methods

        /**
         * Retrieves the playback volume of `self`.
         * @returns The playback volume between 0.0 and 1.0
         */
        get_audio_volume(): number;
        /**
         * Retrieves the #ClutterGstFrame of the last frame produced by `self`.
         * @returns the #ClutterGstFrame of the last frame.
         */
        get_frame(): Frame;
        /**
         * Get the idle state of the pipeline.
         * @returns TRUE if the pipline is in idle mode, FALSE otherwise.
         */
        get_idle(): boolean;
        /**
         * Retrieves the #GstPipeline used by the `self,` for direct use with
         * GStreamer API.
         * @returns the #GstPipeline element used by the player
         */
        get_pipeline(): Gst.Element;
        /**
         * Retrieves the playing status of `self`.
         * @returns %TRUE if playing, %FALSE if stopped.
         */
        get_playing(): boolean;
        /**
         * Retrieves the #ClutterGstVideoSink used by the `self`.
         * @returns the #ClutterGstVideoSink element used by the player
         */
        get_video_sink(): VideoSink;
        /**
         * Sets the playback volume of `self` to `volume`.
         * @param volume the volume as a double between 0.0 and 1.0
         */
        set_audio_volume(volume: number): void;
        /**
         * Starts or stops playing of `self`.
         *
         * The implementation might be asynchronous, so the way to know whether
         * the actual playing state of the `self` is to use the #GObject::notify
         * signal on the #ClutterGstPlayer:playing property and then retrieve the
         * current state with clutter_gst_player_get_playing(). ClutterGstVideoActor
         * in clutter-gst is an example of such an asynchronous implementation.
         * @param playing %TRUE to start playing
         */
        set_playing(playing: boolean): void;
    }

    export const Player: PlayerNamespace & {
        new (): Player; // This allows `obj instanceof Player`
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

export default ClutterGst;

// END
