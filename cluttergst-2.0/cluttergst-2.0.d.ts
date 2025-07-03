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
import type GstAudio from '@girs/gstaudio-1.0';
import type Clutter from '@girs/clutter-1.0';
import type cairo from 'cairo';
import type Json from '@girs/json-1.0';
import type Gio from '@girs/gio-2.0';
import type GL from '@girs/gl-1.0';
import type CoglPango from '@girs/coglpango-1.0';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Cogl from '@girs/cogl-1.0';
import type Atk from '@girs/atk-1.0';

export namespace ClutterGst {
    /**
     * ClutterGst-2.0
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
     * ClutterGst full version, encoded as an hexadecimal value.
     */
    const VERSION_HEX: number;
    /**
     * ClutterGst full version, encoded as a string.
     */
    const VERSION_S: string;
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
     * Adds the #ClutterGstPlayer properties to a class and surchages the
     * set/get_property of #GObjectClass. You should call this
     * function at the end of the class_init method of the class
     * implementing #ClutterGstPlayer.
     * @param object_class a #GObjectClass
     */
    function player_class_init(object_class: typeof GObject.Object): void;
    /**
     * Flags that can be given to clutter_gst_video_texture_set_seek_flags().
     */

    /**
     * Flags that can be given to clutter_gst_video_texture_set_seek_flags().
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
    namespace VideoSink {
        // Signal signatures
        interface SignalSignatures extends GstBase.BaseSink.SignalSignatures {
            'notify::texture': (pspec: GObject.ParamSpec) => void;
            'notify::update-priority': (pspec: GObject.ParamSpec) => void;
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

        interface ConstructorProps extends GstBase.BaseSink.ConstructorProps, GstVideo.Navigation.ConstructorProps {
            texture: Clutter.Texture;
            update_priority: number;
            updatePriority: number;
        }
    }

    /**
     * Class implementing a GStreamer sink element for #ClutterTexture<!-- -->s.
     *
     * The #ClutterGstVideoSink structure contains only private data and should
     * not be accessed directly.
     */
    class VideoSink extends GstBase.BaseSink implements GstVideo.Navigation {
        static $gtype: GObject.GType<VideoSink>;

        // Properties

        /**
         * This is the texture the video is decoded into. It can be any
         * #ClutterTexture, however Cluter-Gst has a handy subclass,
         * #ClutterGstVideoTexture, that implements the #ClutterMedia
         * interface.
         */
        get texture(): Clutter.Texture;
        set texture(val: Clutter.Texture);
        /**
         * Clutter-Gst installs a #GSource to signal that a new frame is ready to
         * the Clutter thread. This property allows to tweak the priority of the
         * source (Lower value is higher priority).
         *
         * Since 1.0
         */
        get update_priority(): number;
        set update_priority(val: number);
        /**
         * Clutter-Gst installs a #GSource to signal that a new frame is ready to
         * the Clutter thread. This property allows to tweak the priority of the
         * source (Lower value is higher priority).
         *
         * Since 1.0
         */
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

        static ['new'](texture: Clutter.Texture): VideoSink;

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

        // Inherited methods
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

    namespace VideoTexture {
        // Signal signatures
        interface SignalSignatures extends Clutter.Texture.SignalSignatures {
            'notify::pixel-aspect-ratio': (pspec: GObject.ParamSpec) => void;
            'notify::disable-slicing': (pspec: GObject.ParamSpec) => void;
            'notify::filename': (pspec: GObject.ParamSpec) => void;
            'notify::filter-quality': (pspec: GObject.ParamSpec) => void;
            'notify::keep-aspect-ratio': (pspec: GObject.ParamSpec) => void;
            'notify::load-async': (pspec: GObject.ParamSpec) => void;
            'notify::load-data-async': (pspec: GObject.ParamSpec) => void;
            'notify::pick-with-alpha': (pspec: GObject.ParamSpec) => void;
            'notify::pixel-format': (pspec: GObject.ParamSpec) => void;
            'notify::repeat-x': (pspec: GObject.ParamSpec) => void;
            'notify::repeat-y': (pspec: GObject.ParamSpec) => void;
            'notify::sync-size': (pspec: GObject.ParamSpec) => void;
            'notify::tile-waste': (pspec: GObject.ParamSpec) => void;
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
            'notify::audio-volume': (pspec: GObject.ParamSpec) => void;
            'notify::buffer-fill': (pspec: GObject.ParamSpec) => void;
            'notify::can-seek': (pspec: GObject.ParamSpec) => void;
            'notify::duration': (pspec: GObject.ParamSpec) => void;
            'notify::playing': (pspec: GObject.ParamSpec) => void;
            'notify::progress': (pspec: GObject.ParamSpec) => void;
            'notify::subtitle-font-name': (pspec: GObject.ParamSpec) => void;
            'notify::subtitle-uri': (pspec: GObject.ParamSpec) => void;
            'notify::uri': (pspec: GObject.ParamSpec) => void;
            'notify::audio-stream': (pspec: GObject.ParamSpec) => void;
            'notify::audio-streams': (pspec: GObject.ParamSpec) => void;
            'notify::idle': (pspec: GObject.ParamSpec) => void;
            'notify::in-seek': (pspec: GObject.ParamSpec) => void;
            'notify::seek-flags': (pspec: GObject.ParamSpec) => void;
            'notify::subtitle-track': (pspec: GObject.ParamSpec) => void;
            'notify::subtitle-tracks': (pspec: GObject.ParamSpec) => void;
            'notify::user-agent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Clutter.Texture.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Clutter.Animatable.ConstructorProps,
                Clutter.Container.ConstructorProps,
                Clutter.Media.ConstructorProps,
                Clutter.Scriptable.ConstructorProps,
                Player.ConstructorProps {
            pixel_aspect_ratio: Gst.Fraction;
            pixelAspectRatio: Gst.Fraction;
        }
    }

    /**
     * Subclass of #ClutterTexture that displays videos using GStreamer.
     *
     * The #ClutterGstVideoTexture structure contains only private data and
     * should not be accessed directly.
     */
    class VideoTexture
        extends Clutter.Texture
        implements
            Atk.ImplementorIface,
            Clutter.Animatable,
            Clutter.Container,
            Clutter.Media,
            Clutter.Scriptable,
            Player
    {
        static $gtype: GObject.GType<VideoTexture>;

        // Properties

        get pixel_aspect_ratio(): Gst.Fraction;
        set pixel_aspect_ratio(val: Gst.Fraction);
        get pixelAspectRatio(): Gst.Fraction;
        set pixelAspectRatio(val: Gst.Fraction);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: VideoTexture.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<VideoTexture.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): VideoTexture;

        // Signals

        connect<K extends keyof VideoTexture.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VideoTexture.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VideoTexture.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VideoTexture.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VideoTexture.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<VideoTexture.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the current audio stream. The number returned in the index of the
         * audio stream playing in the list returned by
         * clutter_gst_video_texture_get_audio_streams().
         * @returns the index of the current audio stream, -1 if the media has no audio stream
         */
        get_audio_stream(): number;
        /**
         * Get the list of audio streams of the current media.
         * @returns a list of #GstTagList describing the available audio streams
         */
        get_audio_streams(): Gst.TagList[];
        // Conflicted with ClutterGst.Player.get_audio_streams
        get_audio_streams(...args: never[]): any;
        get_buffering_mode(): BufferingMode;
        /**
         * Retrieves the material used to draw when no media is being played.
         * @returns the #CoglHandle of the idle material
         */
        get_idle_material(): Cogl.Handle;
        /**
         * Retrieves the #GstPipeline used by the `texture,` for direct use with
         * GStreamer API.
         * @returns the pipeline element used by the video texture
         */
        get_pipeline(): Gst.Element;
        /**
         * Get the current value of the seek-flags property.
         * @returns a combination of #ClutterGstSeekFlags
         */
        get_seek_flags(): SeekFlags;
        /**
         * Get the current subtitles track. The number returned is the index of the
         * subitles track in the list returned by
         * clutter_gst_video_texture_get_subtitle_tracks().
         * @returns the index of the current subtitlest track, -1 if the media has no subtitles track or if the subtitles have been turned off
         */
        get_subtitle_track(): number;
        /**
         * Get the list of subtitles tracks of the current media.
         * @returns a list of #GstTagList describing the available subtitles tracks
         */
        get_subtitle_tracks(): Gst.TagList[];
        // Conflicted with ClutterGst.Player.get_subtitle_tracks
        get_subtitle_tracks(...args: never[]): any;
        /**
         * Retrieves the user agent used when streaming.
         * @returns the user agent used. The returned string has to be freed with g_free()
         */
        get_user_agent(): string;
        /**
         * Set the audio stream to play. `index_` is the index of the stream
         * in the list returned by clutter_gst_video_texture_get_audio_streams().
         * @param index_ the index of the audio stream
         */
        set_audio_stream(index_: number): void;
        set_buffering_mode(mode: BufferingMode | null): void;
        /**
         * Sets a material to use to draw when no media is being played. The
         * #ClutterGstVideoTexture holds a reference of the `material`.
         *
         * The default idle material will paint the #ClutterGstVideoTexture in black.
         * If %COGL_INVALID_HANDLE is given as `material` to this function, this
         * default idle material will be used.
         * @param material the handle of a Cogl material
         */
        set_idle_material(material: Cogl.Handle): void;
        /**
         * Seeking can be done with several trade-offs. Clutter-gst defaults
         * to %CLUTTER_GST_SEEK_FLAG_NONE.
         * @param flags a combination of #ClutterGstSeekFlags
         */
        set_seek_flags(flags: SeekFlags | null): void;
        /**
         * Set the subtitles track to play. `index_` is the index of the stream
         * in the list returned by clutter_gst_video_texture_get_subtitle_tracks().
         *
         * If `index_` is -1, the subtitles are turned off.
         * @param index_ the index of the subtitles track
         */
        set_subtitle_track(index_: number): void;
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
         * Whether the #ClutterMedia actor is playing.
         */
        get playing(): boolean;
        set playing(val: boolean);
        /**
         * The current progress of the playback, as a normalized
         * value between 0.0 and 1.0.
         */
        get progress(): number;
        set progress(val: number);
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
         * Whether the #ClutterGstPlayer is in idle mode.
         */
        get idle(): boolean;
        /**
         * Whether or not the stream is being seeked.
         */
        get in_seek(): boolean;
        /**
         * Whether or not the stream is being seeked.
         */
        get inSeek(): boolean;
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
        get subtitle_track(): number;
        set subtitle_track(val: number);
        get subtitleTrack(): number;
        set subtitleTrack(val: number);
        get subtitle_tracks(): any;
        get subtitleTracks(): any;
        /**
         * The User Agent used by #ClutterGstPlayer with network protocols.
         */
        get user_agent(): string;
        set user_agent(val: string);
        /**
         * The User Agent used by #ClutterGstPlayer with network protocols.
         */
        get userAgent(): string;
        set userAgent(val: string);

        // Inherited methods
        /**
         * Retrieves the playback volume of `media`.
         * @returns The playback volume between 0.0 and 1.0
         */
        get_audio_volume(): number;
        /**
         * Retrieves the amount of the stream that is buffered.
         * @returns the fill level, between 0.0 and 1.0
         */
        get_buffer_fill(): number;
        /**
         * Retrieves whether `media` is seekable or not.
         * @returns %TRUE if @media can seek, %FALSE otherwise.
         */
        get_can_seek(): boolean;
        /**
         * Retrieves the duration of the media stream that `media` represents.
         * @returns the duration of the media stream, in seconds
         */
        get_duration(): number;
        /**
         * Retrieves the playing status of `media`.
         * @returns %TRUE if playing, %FALSE if stopped.
         */
        get_playing(): boolean;
        /**
         * Retrieves the playback progress of `media`.
         * @returns the playback progress, between 0.0 and 1.0
         */
        get_progress(): number;
        /**
         * Retrieves the font name currently used.
         * @returns a string containing the font name. Use g_free()   to free the returned string
         */
        get_subtitle_font_name(): string;
        /**
         * Retrieves the URI of the subtitle file in use.
         * @returns the URI of the subtitle file. Use g_free()   to free the returned string
         */
        get_subtitle_uri(): string;
        /**
         * Retrieves the URI from `media`.
         * @returns the URI of the media stream. Use g_free()   to free the returned string
         */
        get_uri(): string;
        /**
         * Sets the playback volume of `media` to `volume`.
         * @param volume the volume as a double between 0.0 and 1.0
         */
        set_audio_volume(volume: number): void;
        /**
         * Sets the source of `media` using a file path.
         * @param filename A filename
         */
        set_filename(filename: string): void;
        /**
         * Starts or stops playing of `media`.
         *
         * The implementation might be asynchronous, so the way to know whether
         * the actual playing state of the `media` is to use the #GObject::notify
         * signal on the #ClutterMedia:playing property and then retrieve the
         * current state with clutter_media_get_playing(). ClutterGstVideoTexture
         * in clutter-gst is an example of such an asynchronous implementation.
         * @param playing %TRUE to start playing
         */
        set_playing(playing: boolean): void;
        /**
         * Sets the playback progress of `media`. The `progress` is
         * a normalized value between 0.0 (begin) and 1.0 (end).
         * @param progress the progress of the playback, between 0.0 and 1.0
         */
        set_progress(progress: number): void;
        /**
         * Sets the font used by the subtitle renderer. The `font_name` string must be
         * either %NULL, which means that the default font name of the underlying
         * implementation will be used; or must follow the grammar recognized by
         * pango_font_description_from_string() like:
         *
         *
         * ```
         *   clutter_media_set_subtitle_font_name (media, "Sans 24pt");
         * ```
         *
         * @param font_name a font name, or %NULL to set the default font name
         */
        set_subtitle_font_name(font_name: string): void;
        /**
         * Sets the location of a subtitle file to display while playing `media`.
         * @param uri the URI of a subtitle file
         */
        set_subtitle_uri(uri: string): void;
        /**
         * Sets the URI of `media` to `uri`.
         * @param uri the URI of the media stream
         */
        set_uri(uri: string): void;
        vfunc_eos(): void;
        vfunc_error(error: GLib.Error): void;
        /**
         * Frees the resources created by clutter_gst_player_init(). After
         * clutter_gst_player_deinit() has been called, no other player method can be
         * called on the instance.
         */
        deinit(): void;
        /**
         * Get the idle state of the pipeline.
         * @returns TRUE if the pipline is in idle mode, FALSE otherwise.
         */
        get_idle(): boolean;
        /**
         * Whether the player is seeking.
         * @returns TRUE if the player is seeking, FALSE otherwise.
         */
        get_in_seek(): boolean;
        /**
         * Initialize a #ClutterGstPlayer instance. You should call this
         * function at the beginning of the init method of the class
         * implementing #ClutterGstPlayer.
         *
         * When you're finished with the ClutterGstPlayer mixin features (usually in
         * the dispose or finalize vfuncs), call clutter_gst_player_deinit() to
         * desallocate the resources created by clutter_gst_player_init().
         * @returns TRUE if the initialization was successfull, FALSE otherwise.
         */
        init(): boolean;
        vfunc_download_buffering(start: number, stop: number): void;
        /**
         * Get the current audio stream. The number returned in the index of the
         * audio stream playing in the list returned by
         * clutter_gst_player_get_audio_streams().
         */
        vfunc_get_audio_stream(): number;
        /**
         * Get the list of audio streams of the current media.
         */
        vfunc_get_audio_streams(): string[];
        vfunc_get_buffering_mode(): BufferingMode;
        /**
         * Get the idle state of the pipeline.
         */
        vfunc_get_idle(): boolean;
        /**
         * Whether the player is seeking.
         */
        vfunc_get_in_seek(): boolean;
        /**
         * Retrieves the #GstPipeline used by the `player,` for direct use with
         * GStreamer API.
         */
        vfunc_get_pipeline(): Gst.Element;
        /**
         * Get the current value of the seek-flags property.
         */
        vfunc_get_seek_flags(): SeekFlags;
        /**
         * Get the current subtitles track. The number returned is the index of the
         * subtiles track in the list returned by
         * clutter_gst_player_get_subtitle_tracks().
         */
        vfunc_get_subtitle_track(): number;
        /**
         * Get the list of subtitles tracks of the current media.
         */
        vfunc_get_subtitle_tracks(): string[];
        /**
         * Retrieves the user agent used when streaming.
         */
        vfunc_get_user_agent(): string;
        /**
         * Set the audio stream to play. `index_` is the index of the stream
         * in the list returned by clutter_gst_player_get_audio_streams().
         * @param index_ the index of the audio stream
         */
        vfunc_set_audio_stream(index_: number): void;
        vfunc_set_buffering_mode(mode: BufferingMode): void;
        /**
         * Seeking can be done with several trade-offs. Clutter-gst defaults
         * to %CLUTTER_GST_SEEK_FLAG_NONE.
         * @param flags a combination of #ClutterGstSeekFlags
         */
        vfunc_set_seek_flags(flags: SeekFlags): void;
        /**
         * Set the subtitles track to play. `index_` is the index of the stream
         * in the list returned by clutter_gst_player_get_subtitle_tracks().
         *
         * If `index_` is -1, the subtitles are turned off.
         * @param index_ the index of the subtitles track
         */
        vfunc_set_subtitle_track(index_: number): void;
        /**
         * Sets the user agent to use when streaming.
         *
         * When streaming content, you might want to set a custom user agent, eg. to
         * promote your software, make it appear in statistics or because the server
         * requires a special user agent you want to impersonate.
         * @param user_agent the user agent
         */
        vfunc_set_user_agent(user_agent: string): void;
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

    type PlayerIface = typeof Player;
    abstract class PlayerIfacePrivate {
        static $gtype: GObject.GType<PlayerIfacePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type VideoSinkClass = typeof VideoSink;
    abstract class VideoSinkPrivate {
        static $gtype: GObject.GType<VideoSinkPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type VideoTextureClass = typeof VideoTexture;
    abstract class VideoTexturePrivate {
        static $gtype: GObject.GType<VideoTexturePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    namespace Player {
        /**
         * Interface for implementing Player.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface extends Clutter.Media.Interface {
            // Virtual methods

            vfunc_download_buffering(start: number, stop: number): void;
            /**
             * Get the current audio stream. The number returned in the index of the
             * audio stream playing in the list returned by
             * clutter_gst_player_get_audio_streams().
             */
            vfunc_get_audio_stream(): number;
            /**
             * Get the list of audio streams of the current media.
             */
            vfunc_get_audio_streams(): string[];
            vfunc_get_buffering_mode(): BufferingMode;
            /**
             * Get the idle state of the pipeline.
             */
            vfunc_get_idle(): boolean;
            /**
             * Whether the player is seeking.
             */
            vfunc_get_in_seek(): boolean;
            /**
             * Retrieves the #GstPipeline used by the `player,` for direct use with
             * GStreamer API.
             */
            vfunc_get_pipeline(): Gst.Element;
            /**
             * Get the current value of the seek-flags property.
             */
            vfunc_get_seek_flags(): SeekFlags;
            /**
             * Get the current subtitles track. The number returned is the index of the
             * subtiles track in the list returned by
             * clutter_gst_player_get_subtitle_tracks().
             */
            vfunc_get_subtitle_track(): number;
            /**
             * Get the list of subtitles tracks of the current media.
             */
            vfunc_get_subtitle_tracks(): string[];
            /**
             * Retrieves the user agent used when streaming.
             */
            vfunc_get_user_agent(): string;
            /**
             * Set the audio stream to play. `index_` is the index of the stream
             * in the list returned by clutter_gst_player_get_audio_streams().
             * @param index_ the index of the audio stream
             */
            vfunc_set_audio_stream(index_: number): void;
            vfunc_set_buffering_mode(mode: BufferingMode): void;
            /**
             * Seeking can be done with several trade-offs. Clutter-gst defaults
             * to %CLUTTER_GST_SEEK_FLAG_NONE.
             * @param flags a combination of #ClutterGstSeekFlags
             */
            vfunc_set_seek_flags(flags: SeekFlags): void;
            /**
             * Set the subtitles track to play. `index_` is the index of the stream
             * in the list returned by clutter_gst_player_get_subtitle_tracks().
             *
             * If `index_` is -1, the subtitles are turned off.
             * @param index_ the index of the subtitles track
             */
            vfunc_set_subtitle_track(index_: number): void;
            /**
             * Sets the user agent to use when streaming.
             *
             * When streaming content, you might want to set a custom user agent, eg. to
             * promote your software, make it appear in statistics or because the server
             * requires a special user agent you want to impersonate.
             * @param user_agent the user agent
             */
            vfunc_set_user_agent(user_agent: string): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Clutter.Media.ConstructorProps {
            audio_stream: number;
            audioStream: number;
            audio_streams: any;
            audioStreams: any;
            idle: boolean;
            in_seek: boolean;
            inSeek: boolean;
            seek_flags: SeekFlags;
            seekFlags: SeekFlags;
            subtitle_track: number;
            subtitleTrack: number;
            subtitle_tracks: any;
            subtitleTracks: any;
            user_agent: string;
            userAgent: string;
        }
    }

    export interface PlayerNamespace {
        $gtype: GObject.GType<Player>;
        prototype: Player;

        /**
         * Adds the #ClutterGstPlayer properties to a class and surchages the
         * set/get_property of #GObjectClass. You should call this
         * function at the end of the class_init method of the class
         * implementing #ClutterGstPlayer.
         * @param object_class a #GObjectClass
         */
        class_init(object_class: typeof GObject.Object): void;
    }
    interface Player extends Clutter.Media, Player.Interface {
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
         * Whether the #ClutterGstPlayer is in idle mode.
         */
        get idle(): boolean;
        /**
         * Whether or not the stream is being seeked.
         */
        get in_seek(): boolean;
        /**
         * Whether or not the stream is being seeked.
         */
        get inSeek(): boolean;
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
        get subtitle_track(): number;
        set subtitle_track(val: number);
        get subtitleTrack(): number;
        set subtitleTrack(val: number);
        get subtitle_tracks(): any;
        get subtitleTracks(): any;
        /**
         * The User Agent used by #ClutterGstPlayer with network protocols.
         */
        get user_agent(): string;
        set user_agent(val: string);
        /**
         * The User Agent used by #ClutterGstPlayer with network protocols.
         */
        get userAgent(): string;
        set userAgent(val: string);

        // Methods

        /**
         * Frees the resources created by clutter_gst_player_init(). After
         * clutter_gst_player_deinit() has been called, no other player method can be
         * called on the instance.
         */
        deinit(): void;
        /**
         * Get the current audio stream. The number returned in the index of the
         * audio stream playing in the list returned by
         * clutter_gst_player_get_audio_streams().
         * @returns the index of the current audio stream, -1 if the media has no audio stream
         */
        get_audio_stream(): number;
        /**
         * Get the list of audio streams of the current media.
         * @returns a list of strings describing the available audio streams
         */
        get_audio_streams(): string[];
        get_buffering_mode(): BufferingMode;
        /**
         * Get the idle state of the pipeline.
         * @returns TRUE if the pipline is in idle mode, FALSE otherwise.
         */
        get_idle(): boolean;
        /**
         * Whether the player is seeking.
         * @returns TRUE if the player is seeking, FALSE otherwise.
         */
        get_in_seek(): boolean;
        /**
         * Retrieves the #GstPipeline used by the `player,` for direct use with
         * GStreamer API.
         * @returns the #GstPipeline element used by the player
         */
        get_pipeline(): Gst.Element;
        /**
         * Get the current value of the seek-flags property.
         * @returns a combination of #ClutterGstSeekFlags
         */
        get_seek_flags(): SeekFlags;
        /**
         * Get the current subtitles track. The number returned is the index of the
         * subtiles track in the list returned by
         * clutter_gst_player_get_subtitle_tracks().
         * @returns the index of the current subtitlest track, -1 if the media has no subtitles track or if the subtitles have been turned off
         */
        get_subtitle_track(): number;
        /**
         * Get the list of subtitles tracks of the current media.
         * @returns a list of strings describing the available subtitles tracks
         */
        get_subtitle_tracks(): string[];
        /**
         * Retrieves the user agent used when streaming.
         * @returns the user agent used. The returned string has to be freed with g_free()
         */
        get_user_agent(): string;
        /**
         * Initialize a #ClutterGstPlayer instance. You should call this
         * function at the beginning of the init method of the class
         * implementing #ClutterGstPlayer.
         *
         * When you're finished with the ClutterGstPlayer mixin features (usually in
         * the dispose or finalize vfuncs), call clutter_gst_player_deinit() to
         * desallocate the resources created by clutter_gst_player_init().
         * @returns TRUE if the initialization was successfull, FALSE otherwise.
         */
        init(): boolean;
        /**
         * Set the audio stream to play. `index_` is the index of the stream
         * in the list returned by clutter_gst_player_get_audio_streams().
         * @param index_ the index of the audio stream
         */
        set_audio_stream(index_: number): void;
        set_buffering_mode(mode: BufferingMode | null): void;
        /**
         * Seeking can be done with several trade-offs. Clutter-gst defaults
         * to %CLUTTER_GST_SEEK_FLAG_NONE.
         * @param flags a combination of #ClutterGstSeekFlags
         */
        set_seek_flags(flags: SeekFlags | null): void;
        /**
         * Set the subtitles track to play. `index_` is the index of the stream
         * in the list returned by clutter_gst_player_get_subtitle_tracks().
         *
         * If `index_` is -1, the subtitles are turned off.
         * @param index_ the index of the subtitles track
         */
        set_subtitle_track(index_: number): void;
        /**
         * Sets the user agent to use when streaming.
         *
         * When streaming content, you might want to set a custom user agent, eg. to
         * promote your software, make it appear in statistics or because the server
         * requires a special user agent you want to impersonate.
         * @param user_agent the user agent
         */
        set_user_agent(user_agent: string): void;
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
