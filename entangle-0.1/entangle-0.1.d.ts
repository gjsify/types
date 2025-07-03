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
import type Peas from '@girs/peas-1.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GIRepository from '@girs/girepository-2.0';
import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from 'cairo';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Atk from '@girs/atk-1.0';
import type GstBase from '@girs/gstbase-1.0';
import type Gst from '@girs/gst-1.0';
import type GExiv2 from '@girs/gexiv2-0.10';

export namespace Entangle {
    /**
     * Entangle-0.1
     */

    export namespace CameraCaptureTarget {
        export const $gtype: GObject.GType<CameraCaptureTarget>;
    }

    enum CameraCaptureTarget {
        RAM,
        CARD,
    }

    export namespace CameraManualFocusStep {
        export const $gtype: GObject.GType<CameraManualFocusStep>;
    }

    enum CameraManualFocusStep {
        IN_COARSE,
        IN_MEDIUM,
        IN_FINE,
        OUT_COARSE,
        OUT_MEDIUM,
        OUT_FINE,
    }

    export namespace ColourProfileIntent {
        export const $gtype: GObject.GType<ColourProfileIntent>;
    }

    enum ColourProfileIntent {
        PERCEPTUAL,
        REL_COLOURIMETRIC,
        SATURATION,
        ABS_COLOURIMETRIC,
    }

    export namespace ImageDisplayGrid {
        export const $gtype: GObject.GType<ImageDisplayGrid>;
    }

    enum ImageDisplayGrid {
        NONE,
        CENTER_LINES,
        RULE_OF_3RDS,
        QUARTERS,
        RULE_OF_5THS,
        GOLDEN_SECTIONS,
    }

    export namespace PixbufImageSlot {
        export const $gtype: GObject.GType<PixbufImageSlot>;
    }

    enum PixbufImageSlot {
        MASTER,
        PREVIEW,
        THUMBNAIL,
    }
    function debug_setup(debug_app: boolean, debug_gphoto: boolean): void;
    function dpms_set_blanking(enabled: boolean): boolean;
    /**
     * Automatically rotate the pixbuf `src` so that it is in its
     * "natural" orientation. Will first try to apply the orientation
     * associated in the GdkPixbuf object. If this doesn't apply any
     * rotation, then will use the exiv metadata to identify the
     * orientation
     * @param src the pixbuf to be rotated
     * @param metadata the exiv2 metadata for the pixbuf
     * @returns the rotated pixbuf
     */
    function pixbuf_auto_rotate(src: GdkPixbuf.Pixbuf, metadata?: GExiv2.Metadata | null): GdkPixbuf.Pixbuf;
    /**
     * If `slot` is ENTANGLE_PIXBUF_IMAGE_SLOT_MASTER then the primary
     * image data is loaded.
     *
     * If `slot` is ENTANGLE_PIXBUF_IMAGE_SLOT_PREVIEW and the image is
     * a raw file, any embedded preview data is loaded. For non-raw
     * files the primary image data is loaded.
     *
     * If `slot` is ENTANGLE_PIXBUF_IMAGE_SLOT_THUMBNAIL and the image is
     * a raw file, any embedded thumbnail data is loaded. For non-raw
     * files any thumbnail in the exiv2 metadata is loaded. If no thumbnail
     * is available, the primary image data is loaded.
     * @param image the camera image to open
     * @param slot the type of image data to open
     * @param applyOrientation whether to rotate to natural orientation
     * @param metadata filled with metadata object instance
     * @returns the pixbuf for the image slot
     */
    function pixbuf_open_image(
        image: Image,
        slot: PixbufImageSlot | null,
        applyOrientation: boolean,
        metadata?: GExiv2.Metadata | null,
    ): GdkPixbuf.Pixbuf;
    namespace Application {
        // Signal signatures
        interface SignalSignatures extends Gtk.Application.SignalSignatures {
            'notify::active-cameras': (pspec: GObject.ParamSpec) => void;
            'notify::preferences': (pspec: GObject.ParamSpec) => void;
            'notify::supported-cameras': (pspec: GObject.ParamSpec) => void;
            'notify::active-window': (pspec: GObject.ParamSpec) => void;
            'notify::app-menu': (pspec: GObject.ParamSpec) => void;
            'notify::menubar': (pspec: GObject.ParamSpec) => void;
            'notify::register-session': (pspec: GObject.ParamSpec) => void;
            'notify::screensaver-active': (pspec: GObject.ParamSpec) => void;
            'notify::action-group': (pspec: GObject.ParamSpec) => void;
            'notify::application-id': (pspec: GObject.ParamSpec) => void;
            'notify::flags': (pspec: GObject.ParamSpec) => void;
            'notify::inactivity-timeout': (pspec: GObject.ParamSpec) => void;
            'notify::is-busy': (pspec: GObject.ParamSpec) => void;
            'notify::is-registered': (pspec: GObject.ParamSpec) => void;
            'notify::is-remote': (pspec: GObject.ParamSpec) => void;
            'notify::resource-base-path': (pspec: GObject.ParamSpec) => void;
            'notify::version': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Application.ConstructorProps,
                Gio.ActionGroup.ConstructorProps,
                Gio.ActionMap.ConstructorProps {
            active_cameras: CameraList;
            activeCameras: CameraList;
            preferences: Preferences;
            supported_cameras: CameraList;
            supportedCameras: CameraList;
        }
    }

    class Application extends Gtk.Application implements Gio.ActionGroup, Gio.ActionMap {
        static $gtype: GObject.GType<Application>;

        // Properties

        get active_cameras(): CameraList;
        get activeCameras(): CameraList;
        get preferences(): Preferences;
        get supported_cameras(): CameraList;
        get supportedCameras(): CameraList;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Application.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Application.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Application;

        // Signals

        connect<K extends keyof Application.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Application.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Application.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Application.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Application.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Application.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Retrieve the active camera list
         * @returns the camera list
         */
        get_active_cameras(): CameraList;
        /**
         * Retrieve the plugin manager
         * @returns the plugin engine
         */
        get_plugin_engine(): Peas.Engine;
        /**
         * Retrieve the application preferences object
         * @returns the application preferences
         */
        get_preferences(): Preferences;
        /**
         * Retrieve the supported camera list
         * @returns the camera list
         */
        get_supported_cameras(): CameraList;

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

    namespace Camera {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'camera-closed': () => void;
            'camera-controls-changed': () => void;
            'camera-file-added': (arg0: CameraFile) => void;
            'camera-file-captured': (arg0: CameraFile) => void;
            'camera-file-deleted': (arg0: CameraFile) => void;
            'camera-file-downloaded': (arg0: CameraFile) => void;
            'camera-file-previewed': (arg0: CameraFile) => void;
            'camera-opened': () => void;
            'notify::driver': (pspec: GObject.ParamSpec) => void;
            'notify::has-capture': (pspec: GObject.ParamSpec) => void;
            'notify::has-preview': (pspec: GObject.ParamSpec) => void;
            'notify::has-settings': (pspec: GObject.ParamSpec) => void;
            'notify::has-viewfinder': (pspec: GObject.ParamSpec) => void;
            'notify::manual': (pspec: GObject.ParamSpec) => void;
            'notify::model': (pspec: GObject.ParamSpec) => void;
            'notify::port': (pspec: GObject.ParamSpec) => void;
            'notify::progress': (pspec: GObject.ParamSpec) => void;
            'notify::serial': (pspec: GObject.ParamSpec) => void;
            'notify::summary': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            driver: string;
            has_capture: boolean;
            hasCapture: boolean;
            has_preview: boolean;
            hasPreview: boolean;
            has_settings: boolean;
            hasSettings: boolean;
            has_viewfinder: boolean;
            hasViewfinder: boolean;
            manual: string;
            model: string;
            port: string;
            progress: Progress;
            serial: string;
            summary: string;
        }
    }

    class Camera extends GObject.Object {
        static $gtype: GObject.GType<Camera>;

        // Properties

        get driver(): string;
        get has_capture(): boolean;
        get hasCapture(): boolean;
        get has_preview(): boolean;
        get hasPreview(): boolean;
        get has_settings(): boolean;
        get hasSettings(): boolean;
        get has_viewfinder(): boolean;
        get hasViewfinder(): boolean;
        get manual(): string;
        get model(): string;
        get port(): string;
        get progress(): Progress;
        set progress(val: Progress);
        get serial(): string;
        get summary(): string;

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

        static ['new'](
            model: string,
            port: string,
            serial: string,
            hasCapture: boolean,
            hasPreview: boolean,
            hasSettings: boolean,
        ): Camera;

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

        // Methods

        /**
         * Trigger the autofocus mechanism on the camera, waiting
         * until focus is achieved or fails.
         *
         * This can only be invoked when the camera is opened.
         *
         * This block execution of the caller until completion.
         * @returns TRUE if autofocus was achieved, FALSE on error
         */
        autofocus(): boolean;
        /**
         * Trigger the autofocus mechanism on the camera, waiting
         * until focus is achieved or fails.
         *
         * This can only be invoked when the camera is opened.
         *
         * This will execute in the background, and invoke `callback`
         * when complete, whereupon entangle_camera_autofocus_finish
         * can be used to check the status
         * @param cancellable optional GCancellable object, NULL to ignore.
         */
        autofocus_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Trigger the autofocus mechanism on the camera, waiting
         * until focus is achieved or fails.
         *
         * This can only be invoked when the camera is opened.
         *
         * This will execute in the background, and invoke `callback`
         * when complete, whereupon entangle_camera_autofocus_finish
         * can be used to check the status
         * @param cancellable optional GCancellable object, NULL to ignore.
         * @param callback a GAsyncReadyCallback to call when the request is satisfied.
         */
        autofocus_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Trigger the autofocus mechanism on the camera, waiting
         * until focus is achieved or fails.
         *
         * This can only be invoked when the camera is opened.
         *
         * This will execute in the background, and invoke `callback`
         * when complete, whereupon entangle_camera_autofocus_finish
         * can be used to check the status
         * @param cancellable optional GCancellable object, NULL to ignore.
         * @param callback a GAsyncReadyCallback to call when the request is satisfied.
         */
        autofocus_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Check the completion status of a previous call to
         * entangle_camera_autofocus_async.
         * @param result a GAsyncResult
         * @returns TRUE if autofocus was performed, FALSE on error
         */
        autofocus_finish(result: Gio.AsyncResult): boolean;
        /**
         * Trigger the camera shutter and download the first resulting
         * image. If the camera is shooting in multiple formats (eg JPEG
         * and RAW) this method will only return the first format captured
         * The caller should watch for signal notifications to detect any
         * additional images
         *
         * This can only be invoked when the camera is opened.
         *
         * This block execution of the caller until completion.
         * @returns the captured image or NULL
         */
        capture_image(): CameraFile;
        /**
         * Trigger the camera shutter and download the first resulting
         * image. If the camera is shooting in multiple formats (eg JPEG
         * and RAW) this method will only return the first format captured
         * The caller should watch for signal notifications to detect any
         * additional images
         *
         * This can only be invoked when the camera is opened.
         *
         * This will execute in the background, and invoke `callback`
         * when complete, whereupon entangle_camera_capture_image_finish
         * can be used to check the status
         * @param cancellable optional GCancellable object, NULL to ignore.
         */
        capture_image_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<CameraFile>;
        /**
         * Trigger the camera shutter and download the first resulting
         * image. If the camera is shooting in multiple formats (eg JPEG
         * and RAW) this method will only return the first format captured
         * The caller should watch for signal notifications to detect any
         * additional images
         *
         * This can only be invoked when the camera is opened.
         *
         * This will execute in the background, and invoke `callback`
         * when complete, whereupon entangle_camera_capture_image_finish
         * can be used to check the status
         * @param cancellable optional GCancellable object, NULL to ignore.
         * @param callback a GAsyncReadyCallback to call when the request is satisfied.
         */
        capture_image_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Trigger the camera shutter and download the first resulting
         * image. If the camera is shooting in multiple formats (eg JPEG
         * and RAW) this method will only return the first format captured
         * The caller should watch for signal notifications to detect any
         * additional images
         *
         * This can only be invoked when the camera is opened.
         *
         * This will execute in the background, and invoke `callback`
         * when complete, whereupon entangle_camera_capture_image_finish
         * can be used to check the status
         * @param cancellable optional GCancellable object, NULL to ignore.
         * @param callback a GAsyncReadyCallback to call when the request is satisfied.
         */
        capture_image_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<CameraFile> | void;
        /**
         * Check the completion status of a previous call to
         * entangle_camera_capture_image_async.
         * @param result a GAsyncResult
         * @returns the captured image or NULL
         */
        capture_image_finish(result: Gio.AsyncResult): CameraFile;
        /**
         * Close from the camera, enabling it to be used by
         * other applications.
         *
         * This block execution of the caller until completion.
         * @returns TRUE if the camera is closed, FALSE on error
         */
        close(): boolean;
        /**
         * Close from the camera, enabling it to be used by
         * other applications.
         *
         * This will execute in the background, and invoke `callback`
         * when complete, whereupon entangle_camera_open_async
         * can be used to check the status
         * @param cancellable optional GCancellable object, NULL to ignore.
         */
        close_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Close from the camera, enabling it to be used by
         * other applications.
         *
         * This will execute in the background, and invoke `callback`
         * when complete, whereupon entangle_camera_open_async
         * can be used to check the status
         * @param cancellable optional GCancellable object, NULL to ignore.
         * @param callback a GAsyncReadyCallback to call when the request is satisfied.
         */
        close_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Close from the camera, enabling it to be used by
         * other applications.
         *
         * This will execute in the background, and invoke `callback`
         * when complete, whereupon entangle_camera_open_async
         * can be used to check the status
         * @param cancellable optional GCancellable object, NULL to ignore.
         * @param callback a GAsyncReadyCallback to call when the request is satisfied.
         */
        close_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Check the completion status of a previous call to
         * entangle_camera_close_async
         * @param result a GAsyncResult
         * @returns TRUE if the camera is closed, FALSE on error
         */
        close_finish(result: Gio.AsyncResult): boolean;
        /**
         * Delete `file` from the camera capture target.
         *
         * This can only be invoked when the camera is opened.
         *
         * This block execution of the caller until completion.
         * @param file the file to delete
         * @returns TRUE if the file was deleted, FALSE on error
         */
        delete_file(file: CameraFile): boolean;
        /**
         * Delete `file` from the camera capture target.
         *
         * This can only be invoked when the camera is opened.
         *
         * This will execute in the background, and invoke `callback`
         * when complete, whereupon entangle_camera_delete_file_finish
         * can be used to check the status
         * @param file the file to delete
         * @param cancellable optional GCancellable object, NULL to ignore.
         */
        delete_file_async(file: CameraFile, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Delete `file` from the camera capture target.
         *
         * This can only be invoked when the camera is opened.
         *
         * This will execute in the background, and invoke `callback`
         * when complete, whereupon entangle_camera_delete_file_finish
         * can be used to check the status
         * @param file the file to delete
         * @param cancellable optional GCancellable object, NULL to ignore.
         * @param callback a GAsyncReadyCallback to call when the request is satisfied.
         */
        delete_file_async(
            file: CameraFile,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Delete `file` from the camera capture target.
         *
         * This can only be invoked when the camera is opened.
         *
         * This will execute in the background, and invoke `callback`
         * when complete, whereupon entangle_camera_delete_file_finish
         * can be used to check the status
         * @param file the file to delete
         * @param cancellable optional GCancellable object, NULL to ignore.
         * @param callback a GAsyncReadyCallback to call when the request is satisfied.
         */
        delete_file_async(
            file: CameraFile,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Check the completion status of a previous call to
         * entangle_camera_delete_file_async.
         * @param result a GAsyncResult
         * @returns TRUE if the file was deleted, FALSE on error
         */
        delete_file_finish(result: Gio.AsyncResult): boolean;
        /**
         * Download the data associated with `file` and set the data
         * on `file`.
         *
         * This can only be invoked when the camera is opened.
         *
         * This block execution of the caller until completion.
         * @param file the file whose contents to download
         * @returns TRUE if the file was downloaded, FALSE on error
         */
        download_file(file: CameraFile): boolean;
        /**
         * Download the data associated with `file` and set the data
         * on `file`.
         *
         * This can only be invoked when the camera is opened.
         *
         * This will execute in the background, and invoke `callback`
         * when complete, whereupon entangle_camera_download_file_finish
         * can be used to check the status
         * @param file the file whose contents to download
         * @param cancellable optional GCancellable object, NULL to ignore.
         */
        download_file_async(file: CameraFile, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Download the data associated with `file` and set the data
         * on `file`.
         *
         * This can only be invoked when the camera is opened.
         *
         * This will execute in the background, and invoke `callback`
         * when complete, whereupon entangle_camera_download_file_finish
         * can be used to check the status
         * @param file the file whose contents to download
         * @param cancellable optional GCancellable object, NULL to ignore.
         * @param callback a GAsyncReadyCallback to call when the request is satisfied.
         */
        download_file_async(
            file: CameraFile,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Download the data associated with `file` and set the data
         * on `file`.
         *
         * This can only be invoked when the camera is opened.
         *
         * This will execute in the background, and invoke `callback`
         * when complete, whereupon entangle_camera_download_file_finish
         * can be used to check the status
         * @param file the file whose contents to download
         * @param cancellable optional GCancellable object, NULL to ignore.
         * @param callback a GAsyncReadyCallback to call when the request is satisfied.
         */
        download_file_async(
            file: CameraFile,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Check the completion status of a previous call to
         * entangle_camera_download_file_async.
         * @param result a GAsyncResult
         * @returns TRUE if the file was downloaded, FALSE on error
         */
        download_file_finish(result: Gio.AsyncResult): boolean;
        /**
         * Get the configuration controls associated with the camera.
         *
         * This can only be invoked when the camera is opened.
         * @returns the controls, or NULL
         */
        get_controls(): ControlGroup;
        /**
         * Get the camera driver information text. This is only available
         * while the camera is opened
         * @returns the camera driver information
         */
        get_driver(): string;
        /**
         * Check if the camera supports images capture
         * @returns TRUE if the camera supports image capture, FALSE otherwise
         */
        get_has_capture(): boolean;
        /**
         * Check if the camera supports images preview
         * @returns TRUE if the camera supports image preview, FALSE otherwise
         */
        get_has_preview(): boolean;
        /**
         * Check if the camera supports configuration settings
         * @returns TRUE if the camera supports configuration settings, FALSE otherwise
         */
        get_has_settings(): boolean;
        /**
         * Check if the camera supports view finder control
         * @returns TRUE if the camera supports view finder control, FALSE otherwise
         */
        get_has_viewfinder(): boolean;
        /**
         * Get the camera manual text. This is only available
         * while the camera is opened
         * @returns the camera manual
         */
        get_manual(): string;
        /**
         * Get the camera model name
         * @returns the model name
         */
        get_model(): string;
        /**
         * Determine if the camera is currently opened
         * @returns TRUE if the camera is opened, FALSE otherwise
         */
        get_opened(): boolean;
        /**
         * Get the camera port name
         * @returns the port name
         */
        get_port(): string;
        /**
         * Get the object instance that is receiving operation
         * progress notifications
         * @returns the progress object
         */
        get_progress(): Progress;
        /**
         * Get the camera summary text. This is only available
         * while the camera is opened
         * @returns the camera summary
         */
        get_summary(): string;
        /**
         * Check whether the camera is mounted as a virtual filesystem,
         * which would prevent opening it.
         * @returns TRUE if the camera is mounted, FALSE otherwise
         */
        is_mounted(): boolean;
        /**
         * Loads the configuration controls from the camera.
         *
         * This can only be invoked when the camera is opened.
         *
         * This block execution of the caller until completion.
         * @returns TRUE if the controls were loaded, FALSE on error
         */
        load_controls(): boolean;
        /**
         * Loads the configuration controls from the camera.
         *
         * This can only be invoked when the camera is opened.
         *
         * This will execute in the background, and invoke `callback`
         * when complete, whereupon entangle_camera_load_controls_finish
         * can be used to check the status
         * @param cancellable optional GCancellable object, NULL to ignore.
         */
        load_controls_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Loads the configuration controls from the camera.
         *
         * This can only be invoked when the camera is opened.
         *
         * This will execute in the background, and invoke `callback`
         * when complete, whereupon entangle_camera_load_controls_finish
         * can be used to check the status
         * @param cancellable optional GCancellable object, NULL to ignore.
         * @param callback a GAsyncReadyCallback to call when the request is satisfied.
         */
        load_controls_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Loads the configuration controls from the camera.
         *
         * This can only be invoked when the camera is opened.
         *
         * This will execute in the background, and invoke `callback`
         * when complete, whereupon entangle_camera_load_controls_finish
         * can be used to check the status
         * @param cancellable optional GCancellable object, NULL to ignore.
         * @param callback a GAsyncReadyCallback to call when the request is satisfied.
         */
        load_controls_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Check the completion status of a previous call to
         * entangle_camera_load_controls_async.
         * @param result a GAsyncResult
         * @returns TRUE if the controls were loaded, FALSE on error
         */
        load_controls_finish(result: Gio.AsyncResult): boolean;
        /**
         * Trigger the focus mechanism on the camera, to move
         * by `step`.
         *
         * This can only be invoked when the camera is opened.
         *
         * This block execution of the caller until completion.
         * @param step how much to change focus by
         * @returns TRUE if autofocus was achieved, FALSE on error
         */
        manualfocus(step: CameraManualFocusStep | null): boolean;
        /**
         * Trigger the focus mechanism on the camera, to move
         * by `step`.
         *
         * This can only be invoked when the camera is opened.
         *
         * This will execute in the background, and invoke `callback`
         * when complete, whereupon entangle_camera_manualfocus_finish
         * can be used to check the status
         * @param step how much to change focus by
         * @param cancellable optional GCancellable object, NULL to ignore.
         */
        manualfocus_async(
            step: CameraManualFocusStep | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Trigger the focus mechanism on the camera, to move
         * by `step`.
         *
         * This can only be invoked when the camera is opened.
         *
         * This will execute in the background, and invoke `callback`
         * when complete, whereupon entangle_camera_manualfocus_finish
         * can be used to check the status
         * @param step how much to change focus by
         * @param cancellable optional GCancellable object, NULL to ignore.
         * @param callback a GAsyncReadyCallback to call when the request is satisfied.
         */
        manualfocus_async(
            step: CameraManualFocusStep | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Trigger the focus mechanism on the camera, to move
         * by `step`.
         *
         * This can only be invoked when the camera is opened.
         *
         * This will execute in the background, and invoke `callback`
         * when complete, whereupon entangle_camera_manualfocus_finish
         * can be used to check the status
         * @param step how much to change focus by
         * @param cancellable optional GCancellable object, NULL to ignore.
         * @param callback a GAsyncReadyCallback to call when the request is satisfied.
         */
        manualfocus_async(
            step: CameraManualFocusStep | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Check the completion status of a previous call to
         * entangle_camera_manualfocus_async.
         * @param result a GAsyncResult
         * @returns TRUE if manual focus was performed, FALSE on error
         */
        manualfocus_finish(result: Gio.AsyncResult): boolean;
        mount_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        mount_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        mount_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        mount_finish(result: Gio.AsyncResult): boolean;
        /**
         * Attempt to open to and initialize the camera. This
         * may fail if the camera is in use by another application,
         * has gone to sleep or has been disconnected from the port.
         *
         * This block execution of the caller until completion.
         * @returns TRUE if the camera is connected, FALSE on error
         */
        open(): boolean;
        /**
         * Attempt to open to and initialize the camera. This
         * may fail if the camera is in use by another application,
         * has gone to sleep or has been disconnected from the port.
         *
         * This will execute in the background, and invoke `callback`
         * when complete, whereupon entangle_camera_open_finish
         * can be used to check the status
         * @param cancellable optional GCancellable object, NULL to ignore.
         */
        open_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Attempt to open to and initialize the camera. This
         * may fail if the camera is in use by another application,
         * has gone to sleep or has been disconnected from the port.
         *
         * This will execute in the background, and invoke `callback`
         * when complete, whereupon entangle_camera_open_finish
         * can be used to check the status
         * @param cancellable optional GCancellable object, NULL to ignore.
         * @param callback a GAsyncReadyCallback to call when the request is satisfied.
         */
        open_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Attempt to open to and initialize the camera. This
         * may fail if the camera is in use by another application,
         * has gone to sleep or has been disconnected from the port.
         *
         * This will execute in the background, and invoke `callback`
         * when complete, whereupon entangle_camera_open_finish
         * can be used to check the status
         * @param cancellable optional GCancellable object, NULL to ignore.
         * @param callback a GAsyncReadyCallback to call when the request is satisfied.
         */
        open_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Check the completion status of a previous call to
         * entangle_camera_open_async
         * @param result a GAsyncResult
         * @returns TRUE if the camera is opened, FALSE on error
         */
        open_finish(result: Gio.AsyncResult): boolean;
        /**
         * Enable "live view", if not already enabled, and capture a
         * low resolution preview image. The "live view" mode will
         * remain enabled after execution.
         *
         * This can only be invoked when the camera is opened.
         *
         * This block execution of the caller until completion.
         * @returns the captured image or NULL
         */
        preview_image(): CameraFile;
        /**
         * Enable "live view", if not already enabled, and capture a
         * low resolution preview image. The "live view" mode will
         * remain enabled after execution.
         *
         * This can only be invoked when the camera is opened.
         *
         * This will execute in the background, and invoke `callback`
         * when complete, whereupon entangle_camera_preview_image_finish
         * can be used to check the status
         * @param cancellable optional GCancellable object, NULL to ignore.
         */
        preview_image_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<CameraFile>;
        /**
         * Enable "live view", if not already enabled, and capture a
         * low resolution preview image. The "live view" mode will
         * remain enabled after execution.
         *
         * This can only be invoked when the camera is opened.
         *
         * This will execute in the background, and invoke `callback`
         * when complete, whereupon entangle_camera_preview_image_finish
         * can be used to check the status
         * @param cancellable optional GCancellable object, NULL to ignore.
         * @param callback a GAsyncReadyCallback to call when the request is satisfied.
         */
        preview_image_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Enable "live view", if not already enabled, and capture a
         * low resolution preview image. The "live view" mode will
         * remain enabled after execution.
         *
         * This can only be invoked when the camera is opened.
         *
         * This will execute in the background, and invoke `callback`
         * when complete, whereupon entangle_camera_preview_image_finish
         * can be used to check the status
         * @param cancellable optional GCancellable object, NULL to ignore.
         * @param callback a GAsyncReadyCallback to call when the request is satisfied.
         */
        preview_image_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<CameraFile> | void;
        /**
         * Check the completion status of a previous call to
         * entangle_camera_preview_image_async.
         * @param result a GAsyncResult
         * @returns the captured image or NULL
         */
        preview_image_finish(result: Gio.AsyncResult): CameraFile;
        /**
         * Wait upto `waitms` milliseconds for events to arrive from
         * the camera. Signals will be emitted for any interesting
         * events that arrive. Multiple events will be processed
         * until `waitms` is exceeded.
         *
         * This can only be invoked when the camera is opened.
         *
         * This block execution of the caller until completion.
         * @param waitms the number of milliseconds to wait
         * @returns TRUE if the file was deleted, FALSE on error
         */
        process_events(waitms: number): boolean;
        /**
         * Wait upto `waitms` milliseconds for events to arrive from
         * the camera. Signals will be emitted for any interesting
         * events that arrive. Multiple events will be processed
         * until `waitms` is exceeded.
         *
         * This can only be invoked when the camera is opened.
         *
         * This will execute in the background, and invoke `callback`
         * when complete, whereupon entangle_camera_process_events_finish
         * can be used to check the status
         * @param waitms the number of milliseconds to wait
         * @param cancellable optional GCancellable object, NULL to ignore.
         */
        process_events_async(waitms: number, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Wait upto `waitms` milliseconds for events to arrive from
         * the camera. Signals will be emitted for any interesting
         * events that arrive. Multiple events will be processed
         * until `waitms` is exceeded.
         *
         * This can only be invoked when the camera is opened.
         *
         * This will execute in the background, and invoke `callback`
         * when complete, whereupon entangle_camera_process_events_finish
         * can be used to check the status
         * @param waitms the number of milliseconds to wait
         * @param cancellable optional GCancellable object, NULL to ignore.
         * @param callback a GAsyncReadyCallback to call when the request is satisfied.
         */
        process_events_async(
            waitms: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Wait upto `waitms` milliseconds for events to arrive from
         * the camera. Signals will be emitted for any interesting
         * events that arrive. Multiple events will be processed
         * until `waitms` is exceeded.
         *
         * This can only be invoked when the camera is opened.
         *
         * This will execute in the background, and invoke `callback`
         * when complete, whereupon entangle_camera_process_events_finish
         * can be used to check the status
         * @param waitms the number of milliseconds to wait
         * @param cancellable optional GCancellable object, NULL to ignore.
         * @param callback a GAsyncReadyCallback to call when the request is satisfied.
         */
        process_events_async(
            waitms: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Check the completion status of a previous call to
         * entangle_camera_process_events_async.
         * @param result a GAsyncResult
         * @returns TRUE if events were processed, FALSE on error
         */
        process_events_finish(result: Gio.AsyncResult): boolean;
        /**
         * Saves the configuration controls to the camera.
         *
         * This can only be invoked when the camera is opened.
         *
         * This block execution of the caller until completion.
         * @returns TRUE if the controls were saved, FALSE on error
         */
        save_controls(): boolean;
        /**
         * Saves the configuration controls to the camera.
         *
         * This can only be invoked when the camera is opened.
         *
         * This will execute in the background, and invoke `callback`
         * when complete, whereupon entangle_camera_save_controls_finish
         * can be used to check the status
         * @param cancellable optional GCancellable object, NULL to ignore.
         */
        save_controls_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Saves the configuration controls to the camera.
         *
         * This can only be invoked when the camera is opened.
         *
         * This will execute in the background, and invoke `callback`
         * when complete, whereupon entangle_camera_save_controls_finish
         * can be used to check the status
         * @param cancellable optional GCancellable object, NULL to ignore.
         * @param callback a GAsyncReadyCallback to call when the request is satisfied.
         */
        save_controls_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Saves the configuration controls to the camera.
         *
         * This can only be invoked when the camera is opened.
         *
         * This will execute in the background, and invoke `callback`
         * when complete, whereupon entangle_camera_save_controls_finish
         * can be used to check the status
         * @param cancellable optional GCancellable object, NULL to ignore.
         * @param callback a GAsyncReadyCallback to call when the request is satisfied.
         */
        save_controls_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Check the completion status of a previous call to
         * entangle_camera_save_controls_async.
         * @param result a GAsyncResult
         * @returns TRUE if the controls were saved, FALSE on error
         */
        save_controls_finish(result: Gio.AsyncResult): boolean;
        /**
         * Set the destination for storing captured images
         * to `target`.
         *
         * This can only be invoked when the camera is opened.
         *
         * This block execution of the caller until completion.
         * @param target the capture target
         * @returns TRUE if the capture target was changed, FALSE on error
         */
        set_capture_target(target: CameraCaptureTarget | null): boolean;
        /**
         * Set the destination for storing captured images
         * to `target`.
         *
         * This can only be invoked when the camera is opened.
         *
         * This will execute in the background, and invoke `callback`
         * when complete, whereupon entangle_camera_set_clock_finish
         * can be used to check the status
         * @param target the capture target
         * @param cancellable optional GCancellable object, NULL to ignore.
         */
        set_capture_target_async(
            target: CameraCaptureTarget | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Set the destination for storing captured images
         * to `target`.
         *
         * This can only be invoked when the camera is opened.
         *
         * This will execute in the background, and invoke `callback`
         * when complete, whereupon entangle_camera_set_clock_finish
         * can be used to check the status
         * @param target the capture target
         * @param cancellable optional GCancellable object, NULL to ignore.
         * @param callback a GAsyncReadyCallback to call when the request is satisfied.
         */
        set_capture_target_async(
            target: CameraCaptureTarget | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Set the destination for storing captured images
         * to `target`.
         *
         * This can only be invoked when the camera is opened.
         *
         * This will execute in the background, and invoke `callback`
         * when complete, whereupon entangle_camera_set_clock_finish
         * can be used to check the status
         * @param target the capture target
         * @param cancellable optional GCancellable object, NULL to ignore.
         * @param callback a GAsyncReadyCallback to call when the request is satisfied.
         */
        set_capture_target_async(
            target: CameraCaptureTarget | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        set_capture_target_finish(result: Gio.AsyncResult): boolean;
        /**
         * Update the camera clock to be `epochsecs` seconds since
         * the epoch.
         *
         * This can only be invoked when the camera is opened.
         *
         * This block execution of the caller until completion.
         * @param epochsecs new time in seconds since the epoch
         * @returns TRUE if the clock was changed, FALSE on error
         */
        set_clock(epochsecs: number): boolean;
        /**
         * Update the camera clock to be `epochsecs` seconds since
         * the epoch.
         *
         * This can only be invoked when the camera is opened.
         *
         * This will execute in the background, and invoke `callback`
         * when complete, whereupon entangle_camera_set_clock_finish
         * can be used to check the status
         * @param epochsecs new time in seconds since the epoch
         * @param cancellable optional GCancellable object, NULL to ignore.
         */
        set_clock_async(epochsecs: number, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Update the camera clock to be `epochsecs` seconds since
         * the epoch.
         *
         * This can only be invoked when the camera is opened.
         *
         * This will execute in the background, and invoke `callback`
         * when complete, whereupon entangle_camera_set_clock_finish
         * can be used to check the status
         * @param epochsecs new time in seconds since the epoch
         * @param cancellable optional GCancellable object, NULL to ignore.
         * @param callback a GAsyncReadyCallback to call when the request is satisfied.
         */
        set_clock_async(
            epochsecs: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Update the camera clock to be `epochsecs` seconds since
         * the epoch.
         *
         * This can only be invoked when the camera is opened.
         *
         * This will execute in the background, and invoke `callback`
         * when complete, whereupon entangle_camera_set_clock_finish
         * can be used to check the status
         * @param epochsecs new time in seconds since the epoch
         * @param cancellable optional GCancellable object, NULL to ignore.
         * @param callback a GAsyncReadyCallback to call when the request is satisfied.
         */
        set_clock_async(
            epochsecs: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Check the completion status of a previous call to
         * entangle_camera_set_clock_async.
         * @param result a GAsyncResult
         * @returns TRUE if the clock was changed, FALSE on error
         */
        set_clock_finish(result: Gio.AsyncResult): boolean;
        /**
         * Set the object instance to receive operation progress
         * notifications
         * @param prog the progress instance
         */
        set_progress(prog?: Progress | null): void;
        /**
         * If `enabled` is TRUE, the view finder will be activated
         * allowing preview images to be captured. If `enabled` is
         * FALSE, the view finder will be deactivated.
         *
         * This can only be invoked when the camera is opened.
         *
         * This block execution of the caller until completion.
         * @param enabled TRUE to turn on the view finder
         * @returns TRUE if the viewer finder state was changed, FALSE on error
         */
        set_viewfinder(enabled: boolean): boolean;
        /**
         * If `enabled` is TRUE, the view finder will be activated
         * allowing preview images to be captured. If `enabled` is
         * FALSE, the view finder will be deactivated.
         *
         * This can only be invoked when the camera is opened.
         *
         * This will execute in the background, and invoke `callback`
         * when complete, whereupon entangle_camera_set_viewfinder_finish
         * can be used to check the status
         * @param enabled TRUE to turn on the view finder
         * @param cancellable optional GCancellable object, NULL to ignore.
         */
        set_viewfinder_async(enabled: boolean, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * If `enabled` is TRUE, the view finder will be activated
         * allowing preview images to be captured. If `enabled` is
         * FALSE, the view finder will be deactivated.
         *
         * This can only be invoked when the camera is opened.
         *
         * This will execute in the background, and invoke `callback`
         * when complete, whereupon entangle_camera_set_viewfinder_finish
         * can be used to check the status
         * @param enabled TRUE to turn on the view finder
         * @param cancellable optional GCancellable object, NULL to ignore.
         * @param callback a GAsyncReadyCallback to call when the request is satisfied.
         */
        set_viewfinder_async(
            enabled: boolean,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * If `enabled` is TRUE, the view finder will be activated
         * allowing preview images to be captured. If `enabled` is
         * FALSE, the view finder will be deactivated.
         *
         * This can only be invoked when the camera is opened.
         *
         * This will execute in the background, and invoke `callback`
         * when complete, whereupon entangle_camera_set_viewfinder_finish
         * can be used to check the status
         * @param enabled TRUE to turn on the view finder
         * @param cancellable optional GCancellable object, NULL to ignore.
         * @param callback a GAsyncReadyCallback to call when the request is satisfied.
         */
        set_viewfinder_async(
            enabled: boolean,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Check the completion status of a previous call to
         * entangle_camera_set_viewfinder_async.
         * @param result a GAsyncResult
         * @returns TRUE if the viewfinder state was changed, FALSE on error
         */
        set_viewfinder_finish(result: Gio.AsyncResult): boolean;
        /**
         * Unmount the camera virtual filesystem, allowing it to be
         * opened.
         *
         * This will execute in the background, and invoke `callback`
         * when complete, whereupon entangle_camera_unmount_finish
         * can be used to check the status
         * @param cancellable optional GCancellable object, NULL to ignore.
         */
        unmount_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Unmount the camera virtual filesystem, allowing it to be
         * opened.
         *
         * This will execute in the background, and invoke `callback`
         * when complete, whereupon entangle_camera_unmount_finish
         * can be used to check the status
         * @param cancellable optional GCancellable object, NULL to ignore.
         * @param callback a GAsyncReadyCallback to call when the request is satisfied.
         */
        unmount_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Unmount the camera virtual filesystem, allowing it to be
         * opened.
         *
         * This will execute in the background, and invoke `callback`
         * when complete, whereupon entangle_camera_unmount_finish
         * can be used to check the status
         * @param cancellable optional GCancellable object, NULL to ignore.
         * @param callback a GAsyncReadyCallback to call when the request is satisfied.
         */
        unmount_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Check the completion status of a previous call to
         * entangle_camera_unmount_async.
         * @param result a GAsyncResult
         * @returns TRUE if the camera was unmounted, FALSE on error
         */
        unmount_finish(result: Gio.AsyncResult): boolean;
    }

    namespace CameraAutomata {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'camera-capture-begin': () => void;
            'camera-capture-end': () => void;
            'notify::camera': (pspec: GObject.ParamSpec) => void;
            'notify::delete-file': (pspec: GObject.ParamSpec) => void;
            'notify::session': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            camera: Camera;
            delete_file: boolean;
            deleteFile: boolean;
            session: Session;
        }
    }

    class CameraAutomata extends GObject.Object {
        static $gtype: GObject.GType<CameraAutomata>;

        // Properties

        get camera(): Camera;
        set camera(val: Camera);
        get delete_file(): boolean;
        set delete_file(val: boolean);
        get deleteFile(): boolean;
        set deleteFile(val: boolean);
        get session(): Session;
        set session(val: Session);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CameraAutomata.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<CameraAutomata.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): CameraAutomata;

        // Signals

        connect<K extends keyof CameraAutomata.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CameraAutomata.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CameraAutomata.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CameraAutomata.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CameraAutomata.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CameraAutomata.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        capture_async(cancel?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        capture_async(cancel: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        capture_async(
            cancel?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        capture_finish(res: Gio.AsyncResult): boolean;
        /**
         * Get the camera associated with the automata
         * @returns the camera or NULL
         */
        get_camera(): Camera;
        get_delete_file(): boolean;
        /**
         * Get the session associated with the automata
         * @returns the session or NULL
         */
        get_session(): Session;
        preview_async(cancel?: Gio.Cancellable | null, confirm?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        preview_async(
            cancel: Gio.Cancellable | null,
            confirm: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        preview_async(
            cancel?: Gio.Cancellable | null,
            confirm?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        preview_finish(res: Gio.AsyncResult): boolean;
        set_camera(camera: Camera): void;
        set_delete_file(value: boolean): void;
        set_session(session: Session): void;
    }

    namespace CameraFile {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::data': (pspec: GObject.ParamSpec) => void;
            'notify::folder': (pspec: GObject.ParamSpec) => void;
            'notify::mimetype': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            data: Uint8Array;
            folder: string;
            mimetype: string;
            name: string;
        }
    }

    class CameraFile extends GObject.Object {
        static $gtype: GObject.GType<CameraFile>;

        // Properties

        get data(): Uint8Array;
        set data(val: Uint8Array);
        get folder(): string;
        get mimetype(): string;
        set mimetype(val: string);
        get name(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CameraFile.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<CameraFile.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](folder: string, name: string): CameraFile;

        // Signals

        connect<K extends keyof CameraFile.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CameraFile.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CameraFile.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CameraFile.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CameraFile.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CameraFile.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the raw data associated with the camera file
         * @returns the camera data
         */
        get_data(): Uint8Array;
        // Conflicted with GObject.Object.get_data
        get_data(...args: never[]): any;
        /**
         * Get the path of the folder on the camera which stores the file
         * @returns the folder path
         */
        get_folder(): string;
        /**
         * Get the mimetype of the camera file, as a string
         * @returns the mime type or NULL
         */
        get_mimetype(): string;
        /**
         * Gets the name of the camera file, without any folder component
         * @returns the file name
         */
        get_name(): string;
        /**
         * Saves the content of the camera file to the local
         * filesystem path identified by `localpath`
         * @param localpath path on the local filesystem
         * @returns TRUE if the file was saved, FALSE on error
         */
        save_path(localpath: string): boolean;
        /**
         * Saves the content of the camera file to the virtual
         * filesystem location identified by `uri`. `uri` can be
         * any scheme for which a GVFS handler is present.
         * @param uri virtual filesystem URI
         * @returns TRUE if the file was saved, FALSE on error
         */
        save_uri(uri: string): boolean;
        /**
         * Set the raw data for the camera file. If there was pre-existing data
         * set this will be released. Passing NULL for `data` will clear the
         * data completely. The contents of `data` will not be copied, instead a
         * reference will be acquired. Thus any further changes to `data` by the
         * caller will affect this object
         * @param data the new data
         */
        set_data(data?: Uint8Array | null): void;
        // Conflicted with GObject.Object.set_data
        set_data(...args: never[]): any;
        /**
         * Set the mimetype of the data associated with the file.
         * This replaces any previously set mime type. Passing in
         * NULL for `mimetype` will clear the mime type information.
         * @param mimetype the new mime type
         */
        set_mimetype(mimetype?: string | null): void;
    }

    namespace CameraList {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'camera-added': (arg0: Camera) => void;
            'camera-removed': (arg0: Camera) => void;
            'notify::active': (pspec: GObject.ParamSpec) => void;
            'notify::device-manager': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            active: boolean;
            device_manager: DeviceManager;
            deviceManager: DeviceManager;
        }
    }

    class CameraList extends GObject.Object {
        static $gtype: GObject.GType<CameraList>;

        // Properties

        get active(): boolean;
        get device_manager(): DeviceManager;
        get deviceManager(): DeviceManager;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CameraList.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<CameraList.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_active(): CameraList;

        static new_supported(): CameraList;

        // Signals

        connect<K extends keyof CameraList.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CameraList.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CameraList.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CameraList.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CameraList.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CameraList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Adds the camera `cam` to the list `list`
         * @param cam the camera to add
         */
        add(cam: Camera): void;
        /**
         * Get the total number of cameras currently detected
         * @returns the number of cameras
         */
        count(): number;
        /**
         * Get the camera connected to hardware address `port`
         * @param port the hardware port address
         * @returns the camera connected to @port, or NULL
         */
        find(port: string): Camera;
        /**
         * Get the camera at position `entry` in the list
         * @param entry the index of the camera to get
         * @returns the camera at position @entry
         */
        get(entry: number): Camera;
        /**
         * Get the full list of cameras
         * @returns a list of #EntangleCamera objects
         */
        get_cameras(): Camera[];
        /**
         * De-intialization the list of cameras
         * @returns TRUE if the refresh was successful, FALSE on error
         */
        refresh(): boolean;
        /**
         * Removes the camera `cam` from the list `list`
         * @param cam the camera to remove
         */
        remove(cam: Camera): void;
    }

    namespace CameraManager {
        // Signal signatures
        interface SignalSignatures extends Gtk.ApplicationWindow.SignalSignatures {
            closed: () => void;
            'notify::camera': (pspec: GObject.ParamSpec) => void;
            'notify::show-menubar': (pspec: GObject.ParamSpec) => void;
            'notify::accept-focus': (pspec: GObject.ParamSpec) => void;
            'notify::application': (pspec: GObject.ParamSpec) => void;
            'notify::attached-to': (pspec: GObject.ParamSpec) => void;
            'notify::decorated': (pspec: GObject.ParamSpec) => void;
            'notify::default-height': (pspec: GObject.ParamSpec) => void;
            'notify::default-width': (pspec: GObject.ParamSpec) => void;
            'notify::deletable': (pspec: GObject.ParamSpec) => void;
            'notify::destroy-with-parent': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-map': (pspec: GObject.ParamSpec) => void;
            'notify::focus-visible': (pspec: GObject.ParamSpec) => void;
            'notify::gravity': (pspec: GObject.ParamSpec) => void;
            'notify::has-resize-grip': (pspec: GObject.ParamSpec) => void;
            'notify::has-toplevel-focus': (pspec: GObject.ParamSpec) => void;
            'notify::hide-titlebar-when-maximized': (pspec: GObject.ParamSpec) => void;
            'notify::icon': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::is-active': (pspec: GObject.ParamSpec) => void;
            'notify::is-maximized': (pspec: GObject.ParamSpec) => void;
            'notify::mnemonics-visible': (pspec: GObject.ParamSpec) => void;
            'notify::modal': (pspec: GObject.ParamSpec) => void;
            'notify::resizable': (pspec: GObject.ParamSpec) => void;
            'notify::resize-grip-visible': (pspec: GObject.ParamSpec) => void;
            'notify::role': (pspec: GObject.ParamSpec) => void;
            'notify::screen': (pspec: GObject.ParamSpec) => void;
            'notify::skip-pager-hint': (pspec: GObject.ParamSpec) => void;
            'notify::skip-taskbar-hint': (pspec: GObject.ParamSpec) => void;
            'notify::startup-id': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::transient-for': (pspec: GObject.ParamSpec) => void;
            'notify::type': (pspec: GObject.ParamSpec) => void;
            'notify::type-hint': (pspec: GObject.ParamSpec) => void;
            'notify::urgency-hint': (pspec: GObject.ParamSpec) => void;
            'notify::window-position': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.ApplicationWindow.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Progress.ConstructorProps,
                Gio.ActionGroup.ConstructorProps,
                Gio.ActionMap.ConstructorProps,
                Gtk.Buildable.ConstructorProps {
            camera: Camera;
        }
    }

    class CameraManager
        extends Gtk.ApplicationWindow
        implements Atk.ImplementorIface, Progress, Gio.ActionGroup, Gio.ActionMap, Gtk.Buildable
    {
        static $gtype: GObject.GType<CameraManager>;

        // Properties

        get camera(): Camera;
        set camera(val: Camera);

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

        static ['new'](app: Application): CameraManager;
        // Conflicted with Gtk.Window.new

        static ['new'](...args: never[]): any;

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

        // Methods

        add_script(script: Script): void;
        capture(): void;
        /**
         * Get the camera currently being used
         * @returns the camera or NULL
         */
        get_camera(): Camera;
        get_media_context_menu(): boolean;
        preview_begin(): void;
        preview_cancel(): void;
        remove_script(script: Script): void;
        set_camera(cam: Camera): void;
        set_media_context_menu(enabled: boolean): void;

        // Inherited methods
        start(target: number, msg: string): void;
        stop(): void;
        update(current: number): void;
        vfunc_start(target: number, msg: string): void;
        vfunc_stop(): void;
        vfunc_update(current: number): void;
        /**
         * Emits the [signal`Gio`.ActionGroup::action-added] signal on `action_group`.
         *
         * This function should only be called by [type`Gio`.ActionGroup] implementations.
         * @param action_name the name of an action in the group
         */
        action_added(action_name: string): void;
        /**
         * Emits the [signal`Gio`.ActionGroup::action-enabled-changed] signal on `action_group`.
         *
         * This function should only be called by [type`Gio`.ActionGroup] implementations.
         * @param action_name the name of an action in the group
         * @param enabled whether the action is now enabled
         */
        action_enabled_changed(action_name: string, enabled: boolean): void;
        /**
         * Emits the [signal`Gio`.ActionGroup::action-removed] signal on `action_group`.
         *
         * This function should only be called by [type`Gio`.ActionGroup] implementations.
         * @param action_name the name of an action in the group
         */
        action_removed(action_name: string): void;
        /**
         * Emits the [signal`Gio`.ActionGroup::action-state-changed] signal on `action_group`.
         *
         * This function should only be called by [type`Gio`.ActionGroup] implementations.
         * @param action_name the name of an action in the group
         * @param state the new state of the named action
         */
        action_state_changed(action_name: string, state: GLib.Variant): void;
        /**
         * Activate the named action within `action_group`.
         *
         * If the action is expecting a parameter, then the correct type of
         * parameter must be given as `parameter`.  If the action is expecting no
         * parameters then `parameter` must be `NULL`.  See
         * [method`Gio`.ActionGroup.get_action_parameter_type].
         *
         * If the [type`Gio`.ActionGroup] implementation supports asynchronous remote
         * activation over D-Bus, this call may return before the relevant
         * D-Bus traffic has been sent, or any replies have been received. In
         * order to block on such asynchronous activation calls,
         * [method`Gio`.DBusConnection.flush] should be called prior to the code, which
         * depends on the result of the action activation. Without flushing
         * the D-Bus connection, there is no guarantee that the action would
         * have been activated.
         *
         * The following code which runs in a remote app instance, shows an
         * example of a ‘quit’ action being activated on the primary app
         * instance over D-Bus. Here [method`Gio`.DBusConnection.flush] is called
         * before `exit()`. Without `g_dbus_connection_flush()`, the ‘quit’ action
         * may fail to be activated on the primary instance.
         *
         * ```c
         * // call ‘quit’ action on primary instance
         * g_action_group_activate_action (G_ACTION_GROUP (app), "quit", NULL);
         *
         * // make sure the action is activated now
         * g_dbus_connection_flush (…);
         *
         * g_debug ("Application has been terminated. Exiting.");
         *
         * exit (0);
         * ```
         * @param action_name the name of the action to activate
         * @param parameter parameters to the activation
         */
        activate_action(action_name: string, parameter?: GLib.Variant | null): void;
        /**
         * Request for the state of the named action within `action_group` to be
         * changed to `value`.
         *
         * The action must be stateful and `value` must be of the correct type.
         * See [method`Gio`.ActionGroup.get_action_state_type].
         *
         * This call merely requests a change.  The action may refuse to change
         * its state or may change its state to something other than `value`.
         * See [method`Gio`.ActionGroup.get_action_state_hint].
         *
         * If the `value` GVariant is floating, it is consumed.
         * @param action_name the name of the action to request the change on
         * @param value the new state
         */
        change_action_state(action_name: string, value: GLib.Variant): void;
        /**
         * Checks if the named action within `action_group` is currently enabled.
         *
         * An action must be enabled in order to be activated or in order to
         * have its state changed from outside callers.
         * @param action_name the name of the action to query
         * @returns whether the action is currently enabled
         */
        get_action_enabled(action_name: string): boolean;
        /**
         * Queries the type of the parameter that must be given when activating
         * the named action within `action_group`.
         *
         * When activating the action using [method`Gio`.ActionGroup.activate_action],
         * the [type`GLib`.Variant] given to that function must be of the type returned
         * by this function.
         *
         * In the case that this function returns `NULL`, you must not give any
         * [type`GLib`.Variant], but `NULL` instead.
         *
         * The parameter type of a particular action will never change but it is
         * possible for an action to be removed and for a new action to be added
         * with the same name but a different parameter type.
         * @param action_name the name of the action to query
         * @returns the parameter type
         */
        get_action_parameter_type(action_name: string): GLib.VariantType | null;
        /**
         * Queries the current state of the named action within `action_group`.
         *
         * If the action is not stateful then `NULL` will be returned.  If the
         * action is stateful then the type of the return value is the type
         * given by [method`Gio`.ActionGroup.get_action_state_type].
         *
         * The return value (if non-`NULL`) should be freed with
         * [method`GLib`.Variant.unref] when it is no longer required.
         * @param action_name the name of the action to query
         * @returns the current state of the action
         */
        get_action_state(action_name: string): GLib.Variant | null;
        /**
         * Requests a hint about the valid range of values for the state of the
         * named action within `action_group`.
         *
         * If `NULL` is returned it either means that the action is not stateful
         * or that there is no hint about the valid range of values for the
         * state of the action.
         *
         * If a [type`GLib`.Variant] array is returned then each item in the array is a
         * possible value for the state.  If a [type`GLib`.Variant] pair (ie: two-tuple) is
         * returned then the tuple specifies the inclusive lower and upper bound
         * of valid values for the state.
         *
         * In any case, the information is merely a hint.  It may be possible to
         * have a state value outside of the hinted range and setting a value
         * within the range may fail.
         *
         * The return value (if non-`NULL`) should be freed with
         * [method`GLib`.Variant.unref] when it is no longer required.
         * @param action_name the name of the action to query
         * @returns the state range hint
         */
        get_action_state_hint(action_name: string): GLib.Variant | null;
        /**
         * Queries the type of the state of the named action within
         * `action_group`.
         *
         * If the action is stateful then this function returns the
         * [type`GLib`.VariantType] of the state.  All calls to
         * [method`Gio`.ActionGroup.change_action_state] must give a [type`GLib`.Variant] of this
         * type and [method`Gio`.ActionGroup.get_action_state] will return a [type`GLib`.Variant]
         * of the same type.
         *
         * If the action is not stateful then this function will return `NULL`.
         * In that case, [method`Gio`.ActionGroup.get_action_state] will return `NULL`
         * and you must not call [method`Gio`.ActionGroup.change_action_state].
         *
         * The state type of a particular action will never change but it is
         * possible for an action to be removed and for a new action to be added
         * with the same name but a different state type.
         * @param action_name the name of the action to query
         * @returns the state type, if the action is stateful
         */
        get_action_state_type(action_name: string): GLib.VariantType | null;
        /**
         * Checks if the named action exists within `action_group`.
         * @param action_name the name of the action to check for
         * @returns whether the named action exists
         */
        has_action(action_name: string): boolean;
        /**
         * Lists the actions contained within `action_group`.
         *
         * The caller is responsible for freeing the list with [func`GLib`.strfreev] when
         * it is no longer required.
         * @returns a `NULL`-terminated array   of the names of the actions in the group
         */
        list_actions(): string[];
        /**
         * Queries all aspects of the named action within an `action_group`.
         *
         * This function acquires the information available from
         * [method`Gio`.ActionGroup.has_action], [method`Gio`.ActionGroup.get_action_enabled],
         * [method`Gio`.ActionGroup.get_action_parameter_type],
         * [method`Gio`.ActionGroup.get_action_state_type],
         * [method`Gio`.ActionGroup.get_action_state_hint] and
         * [method`Gio`.ActionGroup.get_action_state] with a single function call.
         *
         * This provides two main benefits.
         *
         * The first is the improvement in efficiency that comes with not having
         * to perform repeated lookups of the action in order to discover
         * different things about it.  The second is that implementing
         * [type`Gio`.ActionGroup] can now be done by only overriding this one virtual
         * function.
         *
         * The interface provides a default implementation of this function that
         * calls the individual functions, as required, to fetch the
         * information.  The interface also provides default implementations of
         * those functions that call this function.  All implementations,
         * therefore, must override either this function or all of the others.
         *
         * If the action exists, `TRUE` is returned and any of the requested
         * fields (as indicated by having a non-`NULL` reference passed in) are
         * filled.  If the action doesn’t exist, `FALSE` is returned and the
         * fields may or may not have been modified.
         * @param action_name the name of an action in the group
         * @returns `TRUE` if the action exists, else `FALSE`
         */
        query_action(
            action_name: string,
        ): [
            boolean,
            boolean,
            GLib.VariantType | null,
            GLib.VariantType | null,
            GLib.Variant | null,
            GLib.Variant | null,
        ];
        /**
         * Emits the [signal`Gio`.ActionGroup::action-added] signal on `action_group`.
         *
         * This function should only be called by [type`Gio`.ActionGroup] implementations.
         * @param action_name the name of an action in the group
         */
        vfunc_action_added(action_name: string): void;
        /**
         * Emits the [signal`Gio`.ActionGroup::action-enabled-changed] signal on `action_group`.
         *
         * This function should only be called by [type`Gio`.ActionGroup] implementations.
         * @param action_name the name of an action in the group
         * @param enabled whether the action is now enabled
         */
        vfunc_action_enabled_changed(action_name: string, enabled: boolean): void;
        /**
         * Emits the [signal`Gio`.ActionGroup::action-removed] signal on `action_group`.
         *
         * This function should only be called by [type`Gio`.ActionGroup] implementations.
         * @param action_name the name of an action in the group
         */
        vfunc_action_removed(action_name: string): void;
        /**
         * Emits the [signal`Gio`.ActionGroup::action-state-changed] signal on `action_group`.
         *
         * This function should only be called by [type`Gio`.ActionGroup] implementations.
         * @param action_name the name of an action in the group
         * @param state the new state of the named action
         */
        vfunc_action_state_changed(action_name: string, state: GLib.Variant): void;
        /**
         * Activate the named action within `action_group`.
         *
         * If the action is expecting a parameter, then the correct type of
         * parameter must be given as `parameter`.  If the action is expecting no
         * parameters then `parameter` must be `NULL`.  See
         * [method`Gio`.ActionGroup.get_action_parameter_type].
         *
         * If the [type`Gio`.ActionGroup] implementation supports asynchronous remote
         * activation over D-Bus, this call may return before the relevant
         * D-Bus traffic has been sent, or any replies have been received. In
         * order to block on such asynchronous activation calls,
         * [method`Gio`.DBusConnection.flush] should be called prior to the code, which
         * depends on the result of the action activation. Without flushing
         * the D-Bus connection, there is no guarantee that the action would
         * have been activated.
         *
         * The following code which runs in a remote app instance, shows an
         * example of a ‘quit’ action being activated on the primary app
         * instance over D-Bus. Here [method`Gio`.DBusConnection.flush] is called
         * before `exit()`. Without `g_dbus_connection_flush()`, the ‘quit’ action
         * may fail to be activated on the primary instance.
         *
         * ```c
         * // call ‘quit’ action on primary instance
         * g_action_group_activate_action (G_ACTION_GROUP (app), "quit", NULL);
         *
         * // make sure the action is activated now
         * g_dbus_connection_flush (…);
         *
         * g_debug ("Application has been terminated. Exiting.");
         *
         * exit (0);
         * ```
         * @param action_name the name of the action to activate
         * @param parameter parameters to the activation
         */
        vfunc_activate_action(action_name: string, parameter?: GLib.Variant | null): void;
        /**
         * Request for the state of the named action within `action_group` to be
         * changed to `value`.
         *
         * The action must be stateful and `value` must be of the correct type.
         * See [method`Gio`.ActionGroup.get_action_state_type].
         *
         * This call merely requests a change.  The action may refuse to change
         * its state or may change its state to something other than `value`.
         * See [method`Gio`.ActionGroup.get_action_state_hint].
         *
         * If the `value` GVariant is floating, it is consumed.
         * @param action_name the name of the action to request the change on
         * @param value the new state
         */
        vfunc_change_action_state(action_name: string, value: GLib.Variant): void;
        /**
         * Checks if the named action within `action_group` is currently enabled.
         *
         * An action must be enabled in order to be activated or in order to
         * have its state changed from outside callers.
         * @param action_name the name of the action to query
         */
        vfunc_get_action_enabled(action_name: string): boolean;
        /**
         * Queries the type of the parameter that must be given when activating
         * the named action within `action_group`.
         *
         * When activating the action using [method`Gio`.ActionGroup.activate_action],
         * the [type`GLib`.Variant] given to that function must be of the type returned
         * by this function.
         *
         * In the case that this function returns `NULL`, you must not give any
         * [type`GLib`.Variant], but `NULL` instead.
         *
         * The parameter type of a particular action will never change but it is
         * possible for an action to be removed and for a new action to be added
         * with the same name but a different parameter type.
         * @param action_name the name of the action to query
         */
        vfunc_get_action_parameter_type(action_name: string): GLib.VariantType | null;
        /**
         * Queries the current state of the named action within `action_group`.
         *
         * If the action is not stateful then `NULL` will be returned.  If the
         * action is stateful then the type of the return value is the type
         * given by [method`Gio`.ActionGroup.get_action_state_type].
         *
         * The return value (if non-`NULL`) should be freed with
         * [method`GLib`.Variant.unref] when it is no longer required.
         * @param action_name the name of the action to query
         */
        vfunc_get_action_state(action_name: string): GLib.Variant | null;
        /**
         * Requests a hint about the valid range of values for the state of the
         * named action within `action_group`.
         *
         * If `NULL` is returned it either means that the action is not stateful
         * or that there is no hint about the valid range of values for the
         * state of the action.
         *
         * If a [type`GLib`.Variant] array is returned then each item in the array is a
         * possible value for the state.  If a [type`GLib`.Variant] pair (ie: two-tuple) is
         * returned then the tuple specifies the inclusive lower and upper bound
         * of valid values for the state.
         *
         * In any case, the information is merely a hint.  It may be possible to
         * have a state value outside of the hinted range and setting a value
         * within the range may fail.
         *
         * The return value (if non-`NULL`) should be freed with
         * [method`GLib`.Variant.unref] when it is no longer required.
         * @param action_name the name of the action to query
         */
        vfunc_get_action_state_hint(action_name: string): GLib.Variant | null;
        /**
         * Queries the type of the state of the named action within
         * `action_group`.
         *
         * If the action is stateful then this function returns the
         * [type`GLib`.VariantType] of the state.  All calls to
         * [method`Gio`.ActionGroup.change_action_state] must give a [type`GLib`.Variant] of this
         * type and [method`Gio`.ActionGroup.get_action_state] will return a [type`GLib`.Variant]
         * of the same type.
         *
         * If the action is not stateful then this function will return `NULL`.
         * In that case, [method`Gio`.ActionGroup.get_action_state] will return `NULL`
         * and you must not call [method`Gio`.ActionGroup.change_action_state].
         *
         * The state type of a particular action will never change but it is
         * possible for an action to be removed and for a new action to be added
         * with the same name but a different state type.
         * @param action_name the name of the action to query
         */
        vfunc_get_action_state_type(action_name: string): GLib.VariantType | null;
        /**
         * Checks if the named action exists within `action_group`.
         * @param action_name the name of the action to check for
         */
        vfunc_has_action(action_name: string): boolean;
        /**
         * Lists the actions contained within `action_group`.
         *
         * The caller is responsible for freeing the list with [func`GLib`.strfreev] when
         * it is no longer required.
         */
        vfunc_list_actions(): string[];
        /**
         * Queries all aspects of the named action within an `action_group`.
         *
         * This function acquires the information available from
         * [method`Gio`.ActionGroup.has_action], [method`Gio`.ActionGroup.get_action_enabled],
         * [method`Gio`.ActionGroup.get_action_parameter_type],
         * [method`Gio`.ActionGroup.get_action_state_type],
         * [method`Gio`.ActionGroup.get_action_state_hint] and
         * [method`Gio`.ActionGroup.get_action_state] with a single function call.
         *
         * This provides two main benefits.
         *
         * The first is the improvement in efficiency that comes with not having
         * to perform repeated lookups of the action in order to discover
         * different things about it.  The second is that implementing
         * [type`Gio`.ActionGroup] can now be done by only overriding this one virtual
         * function.
         *
         * The interface provides a default implementation of this function that
         * calls the individual functions, as required, to fetch the
         * information.  The interface also provides default implementations of
         * those functions that call this function.  All implementations,
         * therefore, must override either this function or all of the others.
         *
         * If the action exists, `TRUE` is returned and any of the requested
         * fields (as indicated by having a non-`NULL` reference passed in) are
         * filled.  If the action doesn’t exist, `FALSE` is returned and the
         * fields may or may not have been modified.
         * @param action_name the name of an action in the group
         */
        vfunc_query_action(
            action_name: string,
        ): [
            boolean,
            boolean,
            GLib.VariantType | null,
            GLib.VariantType | null,
            GLib.Variant | null,
            GLib.Variant | null,
        ];
        /**
         * Adds an action to the `action_map`.
         *
         * If the action map already contains an action with the same name
         * as `action` then the old action is dropped from the action map.
         *
         * The action map takes its own reference on `action`.
         * @param action a [iface@Gio.Action]
         */
        add_action(action: Gio.Action): void;
        /**
         * A convenience function for creating multiple simple actions.
         * See Gio.ActionEntryObj for the structure of the action entry.
         * @param entries Array of action entries to add
         */
        add_action_entries(entries: Gio.ActionEntryObj[]): void;
        /**
         * Looks up the action with the name `action_name` in `action_map`.
         *
         * If no such action exists, returns `NULL`.
         * @param action_name the name of an action
         * @returns a [iface@Gio.Action]
         */
        lookup_action(action_name: string): Gio.Action | null;
        /**
         * Removes the named action from the action map.
         *
         * If no action of this name is in the map then nothing happens.
         * @param action_name the name of the action
         */
        remove_action(action_name: string): void;
        /**
         * Remove actions from a [iface`Gio`.ActionMap]. This is meant as the reverse of
         * [method`Gio`.ActionMap.add_action_entries].
         *
         *
         * ```c
         * static const GActionEntry entries[] = {
         *     { "quit",         activate_quit              },
         *     { "print-string", activate_print_string, "s" }
         * };
         *
         * void
         * add_actions (GActionMap *map)
         * {
         *   g_action_map_add_action_entries (map, entries, G_N_ELEMENTS (entries), NULL);
         * }
         *
         * void
         * remove_actions (GActionMap *map)
         * {
         *   g_action_map_remove_action_entries (map, entries, G_N_ELEMENTS (entries));
         * }
         * ```
         * @param entries a pointer to   the first item in an array of [struct@Gio.ActionEntry] structs
         */
        remove_action_entries(entries: Gio.ActionEntry[]): void;
        /**
         * Adds an action to the `action_map`.
         *
         * If the action map already contains an action with the same name
         * as `action` then the old action is dropped from the action map.
         *
         * The action map takes its own reference on `action`.
         * @param action a [iface@Gio.Action]
         */
        vfunc_add_action(action: Gio.Action): void;
        /**
         * Looks up the action with the name `action_name` in `action_map`.
         *
         * If no such action exists, returns `NULL`.
         * @param action_name the name of an action
         */
        vfunc_lookup_action(action_name: string): Gio.Action | null;
        /**
         * Removes the named action from the action map.
         *
         * If no action of this name is in the map then nothing happens.
         * @param action_name the name of the action
         */
        vfunc_remove_action(action_name: string): void;
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

    namespace CameraPicker {
        // Signal signatures
        interface SignalSignatures extends Gtk.Dialog.SignalSignatures {
            'picker-connect': (arg0: GObject.Object) => void;
            'picker-refresh': () => void;
            'notify::cameras': (pspec: GObject.ParamSpec) => void;
            'notify::use-header-bar': (pspec: GObject.ParamSpec) => void;
            'notify::accept-focus': (pspec: GObject.ParamSpec) => void;
            'notify::application': (pspec: GObject.ParamSpec) => void;
            'notify::attached-to': (pspec: GObject.ParamSpec) => void;
            'notify::decorated': (pspec: GObject.ParamSpec) => void;
            'notify::default-height': (pspec: GObject.ParamSpec) => void;
            'notify::default-width': (pspec: GObject.ParamSpec) => void;
            'notify::deletable': (pspec: GObject.ParamSpec) => void;
            'notify::destroy-with-parent': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-map': (pspec: GObject.ParamSpec) => void;
            'notify::focus-visible': (pspec: GObject.ParamSpec) => void;
            'notify::gravity': (pspec: GObject.ParamSpec) => void;
            'notify::has-resize-grip': (pspec: GObject.ParamSpec) => void;
            'notify::has-toplevel-focus': (pspec: GObject.ParamSpec) => void;
            'notify::hide-titlebar-when-maximized': (pspec: GObject.ParamSpec) => void;
            'notify::icon': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::is-active': (pspec: GObject.ParamSpec) => void;
            'notify::is-maximized': (pspec: GObject.ParamSpec) => void;
            'notify::mnemonics-visible': (pspec: GObject.ParamSpec) => void;
            'notify::modal': (pspec: GObject.ParamSpec) => void;
            'notify::resizable': (pspec: GObject.ParamSpec) => void;
            'notify::resize-grip-visible': (pspec: GObject.ParamSpec) => void;
            'notify::role': (pspec: GObject.ParamSpec) => void;
            'notify::screen': (pspec: GObject.ParamSpec) => void;
            'notify::skip-pager-hint': (pspec: GObject.ParamSpec) => void;
            'notify::skip-taskbar-hint': (pspec: GObject.ParamSpec) => void;
            'notify::startup-id': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::transient-for': (pspec: GObject.ParamSpec) => void;
            'notify::type': (pspec: GObject.ParamSpec) => void;
            'notify::type-hint': (pspec: GObject.ParamSpec) => void;
            'notify::urgency-hint': (pspec: GObject.ParamSpec) => void;
            'notify::window-position': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Dialog.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps {
            cameras: CameraList;
        }
    }

    class CameraPicker extends Gtk.Dialog implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<CameraPicker>;

        // Properties

        get cameras(): CameraList;
        set cameras(val: CameraList);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CameraPicker.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<CameraPicker.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): CameraPicker;

        // Signals

        connect<K extends keyof CameraPicker.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CameraPicker.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CameraPicker.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CameraPicker.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CameraPicker.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CameraPicker.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        set_camera_list(cameras: CameraList): void;

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

    namespace CameraPreferences {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::camera': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            camera: Camera;
        }
    }

    class CameraPreferences extends GObject.Object {
        static $gtype: GObject.GType<CameraPreferences>;

        // Properties

        get camera(): Camera;
        set camera(val: Camera);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CameraPreferences.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<CameraPreferences.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): CameraPreferences;

        // Signals

        connect<K extends keyof CameraPreferences.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CameraPreferences.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CameraPreferences.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CameraPreferences.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CameraPreferences.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CameraPreferences.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the camera whose cameras are displayed
         * @returns the camera or NULL
         */
        get_camera(): Camera;
        get_controls(): string[];
        /**
         * Set the camera to display cameras for
         * @param camera the camera to display cameras for, or NULL
         */
        set_camera(camera?: Camera | null): void;
        set_controls(controls: string): void;
    }

    namespace CameraSupport {
        // Signal signatures
        interface SignalSignatures extends Gtk.Dialog.SignalSignatures {
            'notify::camera-list': (pspec: GObject.ParamSpec) => void;
            'notify::use-header-bar': (pspec: GObject.ParamSpec) => void;
            'notify::accept-focus': (pspec: GObject.ParamSpec) => void;
            'notify::application': (pspec: GObject.ParamSpec) => void;
            'notify::attached-to': (pspec: GObject.ParamSpec) => void;
            'notify::decorated': (pspec: GObject.ParamSpec) => void;
            'notify::default-height': (pspec: GObject.ParamSpec) => void;
            'notify::default-width': (pspec: GObject.ParamSpec) => void;
            'notify::deletable': (pspec: GObject.ParamSpec) => void;
            'notify::destroy-with-parent': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-map': (pspec: GObject.ParamSpec) => void;
            'notify::focus-visible': (pspec: GObject.ParamSpec) => void;
            'notify::gravity': (pspec: GObject.ParamSpec) => void;
            'notify::has-resize-grip': (pspec: GObject.ParamSpec) => void;
            'notify::has-toplevel-focus': (pspec: GObject.ParamSpec) => void;
            'notify::hide-titlebar-when-maximized': (pspec: GObject.ParamSpec) => void;
            'notify::icon': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::is-active': (pspec: GObject.ParamSpec) => void;
            'notify::is-maximized': (pspec: GObject.ParamSpec) => void;
            'notify::mnemonics-visible': (pspec: GObject.ParamSpec) => void;
            'notify::modal': (pspec: GObject.ParamSpec) => void;
            'notify::resizable': (pspec: GObject.ParamSpec) => void;
            'notify::resize-grip-visible': (pspec: GObject.ParamSpec) => void;
            'notify::role': (pspec: GObject.ParamSpec) => void;
            'notify::screen': (pspec: GObject.ParamSpec) => void;
            'notify::skip-pager-hint': (pspec: GObject.ParamSpec) => void;
            'notify::skip-taskbar-hint': (pspec: GObject.ParamSpec) => void;
            'notify::startup-id': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::transient-for': (pspec: GObject.ParamSpec) => void;
            'notify::type': (pspec: GObject.ParamSpec) => void;
            'notify::type-hint': (pspec: GObject.ParamSpec) => void;
            'notify::urgency-hint': (pspec: GObject.ParamSpec) => void;
            'notify::window-position': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Dialog.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps {
            camera_list: CameraList;
            cameraList: CameraList;
        }
    }

    class CameraSupport extends Gtk.Dialog implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<CameraSupport>;

        // Properties

        get camera_list(): CameraList;
        set camera_list(val: CameraList);
        get cameraList(): CameraList;
        set cameraList(val: CameraList);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CameraSupport.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<CameraSupport.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): CameraSupport;

        // Signals

        connect<K extends keyof CameraSupport.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CameraSupport.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CameraSupport.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CameraSupport.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CameraSupport.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CameraSupport.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the camera list
         * @returns the camera list or NULL
         */
        get_camera_list(): CameraList;
        /**
         * Set the camera list for the widget
         * @param list the list of cameras
         */
        set_camera_list(list?: CameraList | null): void;

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

    namespace ColourProfile {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::data': (pspec: GObject.ParamSpec) => void;
            'notify::filename': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            data: Uint8Array;
            filename: string;
        }
    }

    class ColourProfile extends GObject.Object {
        static $gtype: GObject.GType<ColourProfile>;

        // Properties

        get data(): Uint8Array;
        get filename(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ColourProfile.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ColourProfile.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_data(data: Uint8Array | string): ColourProfile;

        static new_file(filename: string): ColourProfile;

        // Signals

        connect<K extends keyof ColourProfile.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ColourProfile.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ColourProfile.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ColourProfile.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ColourProfile.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ColourProfile.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the copyright of the profile
         * @returns the profile copyright
         */
        copyright(): string;
        /**
         * Get the description of the profile
         * @returns the profile description
         */
        description(): string;
        /**
         * Get the manufacturer of the profile
         * @returns the profile manufacturer
         */
        manufacturer(): string;
        /**
         * Get the model of the profile
         * @returns the profile model
         */
        model(): string;
    }

    namespace ColourProfileTransform {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::dst-profile': (pspec: GObject.ParamSpec) => void;
            'notify::src-profile': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            dst_profile: ColourProfile;
            dstProfile: ColourProfile;
            src_profile: ColourProfile;
            srcProfile: ColourProfile;
        }
    }

    class ColourProfileTransform extends GObject.Object {
        static $gtype: GObject.GType<ColourProfileTransform>;

        // Properties

        get dst_profile(): ColourProfile;
        get dstProfile(): ColourProfile;
        get src_profile(): ColourProfile;
        get srcProfile(): ColourProfile;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ColourProfileTransform.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ColourProfileTransform.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](src: ColourProfile, dst: ColourProfile, intent: ColourProfileIntent): ColourProfileTransform;

        // Signals

        connect<K extends keyof ColourProfileTransform.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ColourProfileTransform.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ColourProfileTransform.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ColourProfileTransform.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ColourProfileTransform.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ColourProfileTransform.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Apply the colour profile transformation `trans` to the pixbuf
         * data in `srcpixbuf` and return a new pixbuf whose data is
         * in the target colour profile. The contents of `srcpixbuf` will
         * not be altered in any way.
         * @param srcpixbuf the input pixbuf
         * @returns the transformed pixbuf
         */
        apply(srcpixbuf: GdkPixbuf.Pixbuf): GdkPixbuf.Pixbuf;
    }

    namespace Control {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::dirty': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::info': (pspec: GObject.ParamSpec) => void;
            'notify::label': (pspec: GObject.ParamSpec) => void;
            'notify::path': (pspec: GObject.ParamSpec) => void;
            'notify::readonly': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            dirty: boolean;
            id: number;
            info: string;
            label: string;
            path: string;
            readonly: boolean;
        }
    }

    abstract class Control extends GObject.Object {
        static $gtype: GObject.GType<Control>;

        // Properties

        get dirty(): boolean;
        get id(): number;
        get info(): string;
        get label(): string;
        get path(): string;
        get readonly(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Control.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Control.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](path: string, id: number, label: string, info: string, readonly: boolean): Control;

        // Signals

        connect<K extends keyof Control.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Control.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Control.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Control.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Control.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Control.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_dirty(): boolean;
        get_id(): number;
        get_info(): string;
        get_label(): string;
        get_path(): string;
        get_readonly(): boolean;
        set_dirty(dirty: boolean): void;
        set_readonly(ro: boolean): void;
    }

    namespace ControlButton {
        // Signal signatures
        interface SignalSignatures extends Control.SignalSignatures {
            'notify::dirty': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::info': (pspec: GObject.ParamSpec) => void;
            'notify::label': (pspec: GObject.ParamSpec) => void;
            'notify::path': (pspec: GObject.ParamSpec) => void;
            'notify::readonly': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Control.ConstructorProps {}
    }

    class ControlButton extends Control {
        static $gtype: GObject.GType<ControlButton>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ControlButton.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ControlButton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](path: string, id: number, label: string, info: string, readonly: boolean): ControlButton;

        // Signals

        connect<K extends keyof ControlButton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ControlButton.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ControlButton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ControlButton.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ControlButton.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ControlButton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace ControlChoice {
        // Signal signatures
        interface SignalSignatures extends Control.SignalSignatures {
            'notify::value': (pspec: GObject.ParamSpec) => void;
            'notify::dirty': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::info': (pspec: GObject.ParamSpec) => void;
            'notify::label': (pspec: GObject.ParamSpec) => void;
            'notify::path': (pspec: GObject.ParamSpec) => void;
            'notify::readonly': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Control.ConstructorProps {
            value: string;
        }
    }

    class ControlChoice extends Control {
        static $gtype: GObject.GType<ControlChoice>;

        // Properties

        get value(): string;
        set value(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ControlChoice.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ControlChoice.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](path: string, id: number, label: string, info: string, readonly: boolean): ControlChoice;

        // Signals

        connect<K extends keyof ControlChoice.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ControlChoice.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ControlChoice.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ControlChoice.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ControlChoice.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ControlChoice.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        add_entry(entry: string): void;
        clear_entries(): void;
        entry_count(): number;
        entry_get(idx: number): string;
    }

    namespace ControlDate {
        // Signal signatures
        interface SignalSignatures extends Control.SignalSignatures {
            'notify::value': (pspec: GObject.ParamSpec) => void;
            'notify::dirty': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::info': (pspec: GObject.ParamSpec) => void;
            'notify::label': (pspec: GObject.ParamSpec) => void;
            'notify::path': (pspec: GObject.ParamSpec) => void;
            'notify::readonly': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Control.ConstructorProps {
            value: number;
        }
    }

    class ControlDate extends Control {
        static $gtype: GObject.GType<ControlDate>;

        // Properties

        get value(): number;
        set value(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ControlDate.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ControlDate.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](path: string, id: number, label: string, info: string, readonly: boolean): ControlDate;

        // Signals

        connect<K extends keyof ControlDate.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ControlDate.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ControlDate.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ControlDate.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ControlDate.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ControlDate.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace ControlGroup {
        // Signal signatures
        interface SignalSignatures extends Control.SignalSignatures {
            'notify::dirty': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::info': (pspec: GObject.ParamSpec) => void;
            'notify::label': (pspec: GObject.ParamSpec) => void;
            'notify::path': (pspec: GObject.ParamSpec) => void;
            'notify::readonly': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Control.ConstructorProps {}
    }

    class ControlGroup extends Control {
        static $gtype: GObject.GType<ControlGroup>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ControlGroup.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ControlGroup.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](path: string, id: number, label: string, info: string, readonly: boolean): ControlGroup;

        // Signals

        connect<K extends keyof ControlGroup.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ControlGroup.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ControlGroup.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ControlGroup.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ControlGroup.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ControlGroup.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Adds the `control` to `group`
         * @param control the child control to add
         */
        add(control: Control): void;
        /**
         * Get the number of controls which are immediate
         * children of this group
         * @returns the number of child controls
         */
        count(): number;
        get(idx: number): Control;
        /**
         * Get the control which has the path `path`
         * @param path unique path of the control
         * @returns the control with path @path, or NULL
         */
        get_by_path(path: string): Control;
    }

    namespace ControlPanel {
        // Signal signatures
        interface SignalSignatures extends Gtk.Expander.SignalSignatures {
            'notify::camera': (pspec: GObject.ParamSpec) => void;
            'notify::camera-prefs': (pspec: GObject.ParamSpec) => void;
            'notify::has-controls': (pspec: GObject.ParamSpec) => void;
            'notify::expanded': (pspec: GObject.ParamSpec) => void;
            'notify::label': (pspec: GObject.ParamSpec) => void;
            'notify::label-fill': (pspec: GObject.ParamSpec) => void;
            'notify::label-widget': (pspec: GObject.ParamSpec) => void;
            'notify::resize-toplevel': (pspec: GObject.ParamSpec) => void;
            'notify::spacing': (pspec: GObject.ParamSpec) => void;
            'notify::use-markup': (pspec: GObject.ParamSpec) => void;
            'notify::use-underline': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Expander.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps {
            camera: Camera;
            camera_prefs: CameraPreferences;
            cameraPrefs: CameraPreferences;
            has_controls: boolean;
            hasControls: boolean;
        }
    }

    class ControlPanel extends Gtk.Expander implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<ControlPanel>;

        // Properties

        get camera(): Camera;
        get camera_prefs(): CameraPreferences;
        get cameraPrefs(): CameraPreferences;
        get has_controls(): boolean;
        get hasControls(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ControlPanel.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ControlPanel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](prefs: CameraPreferences): ControlPanel;
        // Conflicted with Gtk.Expander.new

        static ['new'](...args: never[]): any;

        // Signals

        connect<K extends keyof ControlPanel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ControlPanel.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ControlPanel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ControlPanel.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ControlPanel.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ControlPanel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the camera preferences whose controls are displayed
         * @returns the camera preferences or NULL
         */
        get_camera_preferences(): CameraPreferences;
        get_has_controls(): boolean;

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

    namespace ControlRange {
        // Signal signatures
        interface SignalSignatures extends Control.SignalSignatures {
            'notify::range-max': (pspec: GObject.ParamSpec) => void;
            'notify::range-min': (pspec: GObject.ParamSpec) => void;
            'notify::range-step': (pspec: GObject.ParamSpec) => void;
            'notify::value': (pspec: GObject.ParamSpec) => void;
            'notify::dirty': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::info': (pspec: GObject.ParamSpec) => void;
            'notify::label': (pspec: GObject.ParamSpec) => void;
            'notify::path': (pspec: GObject.ParamSpec) => void;
            'notify::readonly': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Control.ConstructorProps {
            range_max: number;
            rangeMax: number;
            range_min: number;
            rangeMin: number;
            range_step: number;
            rangeStep: number;
            value: number;
        }
    }

    class ControlRange extends Control {
        static $gtype: GObject.GType<ControlRange>;

        // Properties

        get range_max(): number;
        get rangeMax(): number;
        get range_min(): number;
        get rangeMin(): number;
        get range_step(): number;
        get rangeStep(): number;
        get value(): number;
        set value(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ControlRange.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ControlRange.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            path: string,
            id: number,
            label: string,
            info: string,
            readonly: boolean,
            min: number,
            max: number,
            step: number,
        ): ControlRange;
        // Conflicted with Entangle.Control.new

        static ['new'](...args: never[]): any;

        // Signals

        connect<K extends keyof ControlRange.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ControlRange.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ControlRange.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ControlRange.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ControlRange.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ControlRange.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_max(): number;
        get_min(): number;
        get_step(): number;
    }

    namespace ControlText {
        // Signal signatures
        interface SignalSignatures extends Control.SignalSignatures {
            'notify::value': (pspec: GObject.ParamSpec) => void;
            'notify::dirty': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::info': (pspec: GObject.ParamSpec) => void;
            'notify::label': (pspec: GObject.ParamSpec) => void;
            'notify::path': (pspec: GObject.ParamSpec) => void;
            'notify::readonly': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Control.ConstructorProps {
            value: string;
        }
    }

    class ControlText extends Control {
        static $gtype: GObject.GType<ControlText>;

        // Properties

        get value(): string;
        set value(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ControlText.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ControlText.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](path: string, id: number, label: string, info: string, readonly: boolean): ControlText;

        // Signals

        connect<K extends keyof ControlText.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ControlText.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ControlText.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ControlText.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ControlText.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ControlText.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace ControlToggle {
        // Signal signatures
        interface SignalSignatures extends Control.SignalSignatures {
            'notify::value': (pspec: GObject.ParamSpec) => void;
            'notify::dirty': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::info': (pspec: GObject.ParamSpec) => void;
            'notify::label': (pspec: GObject.ParamSpec) => void;
            'notify::path': (pspec: GObject.ParamSpec) => void;
            'notify::readonly': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Control.ConstructorProps {
            value: boolean;
        }
    }

    class ControlToggle extends Control {
        static $gtype: GObject.GType<ControlToggle>;

        // Properties

        get value(): boolean;
        set value(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ControlToggle.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ControlToggle.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](path: string, id: number, label: string, info: string, readonly: boolean): ControlToggle;

        // Signals

        connect<K extends keyof ControlToggle.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ControlToggle.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ControlToggle.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ControlToggle.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ControlToggle.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ControlToggle.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace DeviceManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'device-added': (arg0: string) => void;
            'device-removed': (arg0: string) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class DeviceManager extends GObject.Object {
        static $gtype: GObject.GType<DeviceManager>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DeviceManager.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DeviceManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DeviceManager;

        // Signals

        connect<K extends keyof DeviceManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DeviceManager.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DeviceManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DeviceManager.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DeviceManager.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DeviceManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        serial_id(devpath: string): string;
    }

    namespace HelpAbout {
        // Signal signatures
        interface SignalSignatures extends Gtk.AboutDialog.SignalSignatures {
            'notify::artists': (pspec: GObject.ParamSpec) => void;
            'notify::authors': (pspec: GObject.ParamSpec) => void;
            'notify::comments': (pspec: GObject.ParamSpec) => void;
            'notify::copyright': (pspec: GObject.ParamSpec) => void;
            'notify::documenters': (pspec: GObject.ParamSpec) => void;
            'notify::license': (pspec: GObject.ParamSpec) => void;
            'notify::license-type': (pspec: GObject.ParamSpec) => void;
            'notify::logo': (pspec: GObject.ParamSpec) => void;
            'notify::logo-icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::program-name': (pspec: GObject.ParamSpec) => void;
            'notify::translator-credits': (pspec: GObject.ParamSpec) => void;
            'notify::version': (pspec: GObject.ParamSpec) => void;
            'notify::website': (pspec: GObject.ParamSpec) => void;
            'notify::website-label': (pspec: GObject.ParamSpec) => void;
            'notify::wrap-license': (pspec: GObject.ParamSpec) => void;
            'notify::use-header-bar': (pspec: GObject.ParamSpec) => void;
            'notify::accept-focus': (pspec: GObject.ParamSpec) => void;
            'notify::application': (pspec: GObject.ParamSpec) => void;
            'notify::attached-to': (pspec: GObject.ParamSpec) => void;
            'notify::decorated': (pspec: GObject.ParamSpec) => void;
            'notify::default-height': (pspec: GObject.ParamSpec) => void;
            'notify::default-width': (pspec: GObject.ParamSpec) => void;
            'notify::deletable': (pspec: GObject.ParamSpec) => void;
            'notify::destroy-with-parent': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-map': (pspec: GObject.ParamSpec) => void;
            'notify::focus-visible': (pspec: GObject.ParamSpec) => void;
            'notify::gravity': (pspec: GObject.ParamSpec) => void;
            'notify::has-resize-grip': (pspec: GObject.ParamSpec) => void;
            'notify::has-toplevel-focus': (pspec: GObject.ParamSpec) => void;
            'notify::hide-titlebar-when-maximized': (pspec: GObject.ParamSpec) => void;
            'notify::icon': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::is-active': (pspec: GObject.ParamSpec) => void;
            'notify::is-maximized': (pspec: GObject.ParamSpec) => void;
            'notify::mnemonics-visible': (pspec: GObject.ParamSpec) => void;
            'notify::modal': (pspec: GObject.ParamSpec) => void;
            'notify::resizable': (pspec: GObject.ParamSpec) => void;
            'notify::resize-grip-visible': (pspec: GObject.ParamSpec) => void;
            'notify::role': (pspec: GObject.ParamSpec) => void;
            'notify::screen': (pspec: GObject.ParamSpec) => void;
            'notify::skip-pager-hint': (pspec: GObject.ParamSpec) => void;
            'notify::skip-taskbar-hint': (pspec: GObject.ParamSpec) => void;
            'notify::startup-id': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::transient-for': (pspec: GObject.ParamSpec) => void;
            'notify::type': (pspec: GObject.ParamSpec) => void;
            'notify::type-hint': (pspec: GObject.ParamSpec) => void;
            'notify::urgency-hint': (pspec: GObject.ParamSpec) => void;
            'notify::window-position': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.AboutDialog.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps {}
    }

    class HelpAbout extends Gtk.AboutDialog implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<HelpAbout>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: HelpAbout.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<HelpAbout.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): HelpAbout;

        // Signals

        connect<K extends keyof HelpAbout.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HelpAbout.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof HelpAbout.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HelpAbout.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof HelpAbout.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<HelpAbout.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
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

    namespace Image {
        // Signal signatures
        interface SignalSignatures extends Media.SignalSignatures {
            'notify::pixbuf': (pspec: GObject.ParamSpec) => void;
            'notify::filename': (pspec: GObject.ParamSpec) => void;
            'notify::metadata': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Media.ConstructorProps {
            pixbuf: GdkPixbuf.Pixbuf;
        }
    }

    class Image extends Media {
        static $gtype: GObject.GType<Image>;

        // Properties

        get pixbuf(): GdkPixbuf.Pixbuf;
        set pixbuf(val: GdkPixbuf.Pixbuf);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Image.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Image.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_file(filename: string): Image;

        static new_pixbuf(pixbuf: GdkPixbuf.Pixbuf): Image;

        // Signals

        connect<K extends keyof Image.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Image.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Image.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Image.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Image.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Image.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the pixbuf associated with the image, if it is available
         * @returns the image pixbuf or NULL
         */
        get_pixbuf(): GdkPixbuf.Pixbuf;
        /**
         * Set the pixbuf associated with the image
         * @param pixbuf the new pixbuf
         */
        set_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void;
    }

    namespace ImageDisplay {
        // Signal signatures
        interface SignalSignatures extends Gtk.DrawingArea.SignalSignatures {
            'notify::aspect-ratio': (pspec: GObject.ParamSpec) => void;
            'notify::autoscale': (pspec: GObject.ParamSpec) => void;
            'notify::flip-horizontally': (pspec: GObject.ParamSpec) => void;
            'notify::flip-vertically': (pspec: GObject.ParamSpec) => void;
            'notify::focus-point': (pspec: GObject.ParamSpec) => void;
            'notify::image': (pspec: GObject.ParamSpec) => void;
            'notify::mask-enabled': (pspec: GObject.ParamSpec) => void;
            'notify::mask-opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overexposure-highlighting': (pspec: GObject.ParamSpec) => void;
            'notify::scale': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.DrawingArea.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps {
            aspect_ratio: number;
            aspectRatio: number;
            autoscale: boolean;
            flip_horizontally: boolean;
            flipHorizontally: boolean;
            flip_vertically: boolean;
            flipVertically: boolean;
            focus_point: boolean;
            focusPoint: boolean;
            image: Image;
            mask_enabled: boolean;
            maskEnabled: boolean;
            mask_opacity: number;
            maskOpacity: number;
            overexposure_highlighting: boolean;
            overexposureHighlighting: boolean;
            scale: number;
        }
    }

    class ImageDisplay extends Gtk.DrawingArea implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<ImageDisplay>;

        // Properties

        get aspect_ratio(): number;
        set aspect_ratio(val: number);
        get aspectRatio(): number;
        set aspectRatio(val: number);
        get autoscale(): boolean;
        set autoscale(val: boolean);
        get flip_horizontally(): boolean;
        set flip_horizontally(val: boolean);
        get flipHorizontally(): boolean;
        set flipHorizontally(val: boolean);
        get flip_vertically(): boolean;
        set flip_vertically(val: boolean);
        get flipVertically(): boolean;
        set flipVertically(val: boolean);
        get focus_point(): boolean;
        set focus_point(val: boolean);
        get focusPoint(): boolean;
        set focusPoint(val: boolean);
        get image(): Image;
        set image(val: Image);
        get mask_enabled(): boolean;
        set mask_enabled(val: boolean);
        get maskEnabled(): boolean;
        set maskEnabled(val: boolean);
        get mask_opacity(): number;
        set mask_opacity(val: number);
        get maskOpacity(): number;
        set maskOpacity(val: number);
        get overexposure_highlighting(): boolean;
        set overexposure_highlighting(val: boolean);
        get overexposureHighlighting(): boolean;
        set overexposureHighlighting(val: boolean);
        get scale(): number;
        set scale(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ImageDisplay.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ImageDisplay.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ImageDisplay;

        // Signals

        connect<K extends keyof ImageDisplay.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ImageDisplay.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ImageDisplay.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ImageDisplay.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ImageDisplay.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ImageDisplay.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_aspect_ratio(): number;
        get_autoscale(): boolean;
        get_background(): string;
        get_flip_horizontally(): boolean;
        get_flip_vertically(): boolean;
        get_focus_point(): boolean;
        get_grid_display(): ImageDisplayGrid;
        /**
         * Retrieve the image being displayed. If there are multiple
         * images to be displayed, then only the first image is returned.
         * @returns the image being displayed, or NULL
         */
        get_image(): Image;
        /**
         * Get the list of images being displayed
         * @returns the list of images
         */
        get_image_list(): Image[];
        get_loaded(): boolean;
        get_mask_enabled(): boolean;
        get_mask_opacity(): number;
        get_overexposure_highlighting(): boolean;
        get_scale(): number;
        get_text_overlay(): string;
        set_aspect_ratio(aspect: number): void;
        set_autoscale(autoscale: boolean): void;
        set_background(background: string): void;
        set_flip_horizontally(enabled: boolean): void;
        set_flip_vertically(enabled: boolean): void;
        set_focus_point(enabled: boolean): void;
        set_grid_display(mode: ImageDisplayGrid | null): void;
        /**
         * Set the image to be displayed by the widget. This is a
         * shortcut for setting an image list of length 1.
         * @param image the image to display, or NULL
         */
        set_image(image?: Image | null): void;
        /**
         * Set the list of images to be displayed. If multiple images
         * are provided they are overlayed with opacity
         * @param images the images to display
         */
        set_image_list(images: Image[]): void;
        set_mask_enabled(enabled: boolean): void;
        set_mask_opacity(opacity: number): void;
        set_overexposure_highlighting(enabled: boolean): void;
        set_scale(scale: number): void;
        /**
         * Set a message to render over the top of the image
         * @param msg the message to display, or NULL
         */
        set_text_overlay(msg?: string | null): void;

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

    namespace ImageHistogram {
        // Signal signatures
        interface SignalSignatures extends Gtk.DrawingArea.SignalSignatures {
            'notify::image': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.DrawingArea.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps {
            image: Image;
        }
    }

    class ImageHistogram extends Gtk.DrawingArea implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<ImageHistogram>;

        // Properties

        get image(): Image;
        set image(val: Image);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ImageHistogram.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ImageHistogram.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ImageHistogram;

        // Signals

        connect<K extends keyof ImageHistogram.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ImageHistogram.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ImageHistogram.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ImageHistogram.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ImageHistogram.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ImageHistogram.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_histogram_linear(): boolean;
        /**
         * Retrieve the image that the histogram is displayed for
         * @returns the image displayed
         */
        get_image(): Image;
        set_histogram_linear(linear: boolean): void;
        /**
         * Set the image to display the histogram for
         * @param image the image to display histogram for, or NULL
         */
        set_image(image?: Image | null): void;

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

    namespace ImageLoader {
        // Signal signatures
        interface SignalSignatures extends PixbufLoader.SignalSignatures {
            'notify::embedded-preview': (pspec: GObject.ParamSpec) => void;
            'notify::colour-transform': (pspec: GObject.ParamSpec) => void;
            'notify::with-metadata': (pspec: GObject.ParamSpec) => void;
            'notify::workers': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends PixbufLoader.ConstructorProps {
            embedded_preview: boolean;
            embeddedPreview: boolean;
        }
    }

    class ImageLoader extends PixbufLoader {
        static $gtype: GObject.GType<ImageLoader>;

        // Properties

        get embedded_preview(): boolean;
        get embeddedPreview(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ImageLoader.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ImageLoader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ImageLoader;

        // Signals

        connect<K extends keyof ImageLoader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ImageLoader.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ImageLoader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ImageLoader.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ImageLoader.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ImageLoader.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        add(image: Image): void;
        get_embedded_preview(): boolean;
        remove(image: Image): void;
        set_embedded_preview(enable: boolean): void;
    }

    namespace Media {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::filename': (pspec: GObject.ParamSpec) => void;
            'notify::metadata': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            filename: string;
            metadata: GExiv2.Metadata;
        }
    }

    class Media extends GObject.Object {
        static $gtype: GObject.GType<Media>;

        // Properties

        get filename(): string;
        get metadata(): GExiv2.Metadata;
        set metadata(val: GExiv2.Metadata);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Media.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Media.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Media.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Media.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Media.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Media.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Media.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Media.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        ['delete'](): boolean;
        /**
         * Get the size of the media on disk, if it is backed by
         * a file on disk
         * @returns the size in bytes, or 0
         */
        get_file_size(): never;
        /**
         * Get the filename associated with the media, if it has one.
         * @returns the filename or NULL
         */
        get_filename(): string;
        /**
         * Get the time at which the media was last modified, if
         * it is backed by a file on disk
         * @returns the last modification time in seconds since epoch, or 0
         */
        get_last_modified(): number;
        /**
         * Get the metadata associated with the media, if it is available
         * @returns the media metadata or NULL
         */
        get_metadata(): GExiv2.Metadata;
        /**
         * Set the metadata associated with the media
         * @param metadata the new metadata
         */
        set_metadata(metadata: GExiv2.Metadata): void;
    }

    namespace MediaPopup {
        // Signal signatures
        interface SignalSignatures extends Gtk.Window.SignalSignatures {
            'popup-close': () => void;
            'notify::media': (pspec: GObject.ParamSpec) => void;
            'notify::accept-focus': (pspec: GObject.ParamSpec) => void;
            'notify::application': (pspec: GObject.ParamSpec) => void;
            'notify::attached-to': (pspec: GObject.ParamSpec) => void;
            'notify::decorated': (pspec: GObject.ParamSpec) => void;
            'notify::default-height': (pspec: GObject.ParamSpec) => void;
            'notify::default-width': (pspec: GObject.ParamSpec) => void;
            'notify::deletable': (pspec: GObject.ParamSpec) => void;
            'notify::destroy-with-parent': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-map': (pspec: GObject.ParamSpec) => void;
            'notify::focus-visible': (pspec: GObject.ParamSpec) => void;
            'notify::gravity': (pspec: GObject.ParamSpec) => void;
            'notify::has-resize-grip': (pspec: GObject.ParamSpec) => void;
            'notify::has-toplevel-focus': (pspec: GObject.ParamSpec) => void;
            'notify::hide-titlebar-when-maximized': (pspec: GObject.ParamSpec) => void;
            'notify::icon': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::is-active': (pspec: GObject.ParamSpec) => void;
            'notify::is-maximized': (pspec: GObject.ParamSpec) => void;
            'notify::mnemonics-visible': (pspec: GObject.ParamSpec) => void;
            'notify::modal': (pspec: GObject.ParamSpec) => void;
            'notify::resizable': (pspec: GObject.ParamSpec) => void;
            'notify::resize-grip-visible': (pspec: GObject.ParamSpec) => void;
            'notify::role': (pspec: GObject.ParamSpec) => void;
            'notify::screen': (pspec: GObject.ParamSpec) => void;
            'notify::skip-pager-hint': (pspec: GObject.ParamSpec) => void;
            'notify::skip-taskbar-hint': (pspec: GObject.ParamSpec) => void;
            'notify::startup-id': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::transient-for': (pspec: GObject.ParamSpec) => void;
            'notify::type': (pspec: GObject.ParamSpec) => void;
            'notify::type-hint': (pspec: GObject.ParamSpec) => void;
            'notify::urgency-hint': (pspec: GObject.ParamSpec) => void;
            'notify::window-position': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Window.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps {
            media: Media;
        }
    }

    class MediaPopup extends Gtk.Window implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<MediaPopup>;

        // Properties

        get media(): Media;
        set media(val: Media);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MediaPopup.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MediaPopup.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MediaPopup;

        // Signals

        connect<K extends keyof MediaPopup.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MediaPopup.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MediaPopup.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MediaPopup.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MediaPopup.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MediaPopup.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_background(): string;
        /**
         * Retrieve the media that the popup is currently displaying
         * @returns the media displayed
         */
        get_media(): Media;
        move_to_monitor(monitor: number): void;
        set_background(background: string): void;
        /**
         * Set the media to be displayed by the popup
         * @param media the media to display, or NULL
         */
        set_media(media?: Media | null): void;
        show(parent: Gtk.Window, x: number, y: number): void;
        // Conflicted with Gtk.Widget.show
        show(...args: never[]): any;
        show_on_monitor(monitor: number): void;

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

    namespace MediaStatusbar {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            'notify::media': (pspec: GObject.ParamSpec) => void;
            'notify::baseline-position': (pspec: GObject.ParamSpec) => void;
            'notify::homogeneous': (pspec: GObject.ParamSpec) => void;
            'notify::spacing': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
            'notify::orientation': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Box.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.Orientable.ConstructorProps {
            media: Media;
        }
    }

    class MediaStatusbar extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<MediaStatusbar>;

        // Properties

        get media(): Media;
        set media(val: Media);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MediaStatusbar.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MediaStatusbar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MediaStatusbar;

        // Signals

        connect<K extends keyof MediaStatusbar.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MediaStatusbar.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MediaStatusbar.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MediaStatusbar.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MediaStatusbar.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MediaStatusbar.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Retrieve the media that status is currently displayed for
         * @returns the media displayed
         */
        get_media(): Media;
        /**
         * Set the media to display status information for
         * @param media the media to display status for, or NULL
         */
        set_media(media?: Media | null): void;

        // Inherited properties
        /**
         * The orientation of the orientable.
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        // Inherited methods
        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the @orientable.
         */
        get_orientation(): Gtk.Orientation;
        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation | null): void;
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

    namespace PixbufLoader {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'metadata-loaded': (arg0: Image) => void;
            'metadata-unloaded': (arg0: Image) => void;
            'pixbuf-loaded': (arg0: Image) => void;
            'pixbuf-unloaded': (arg0: Image) => void;
            'notify::colour-transform': (pspec: GObject.ParamSpec) => void;
            'notify::with-metadata': (pspec: GObject.ParamSpec) => void;
            'notify::workers': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            colour_transform: ColourProfileTransform;
            colourTransform: ColourProfileTransform;
            with_metadata: boolean;
            withMetadata: boolean;
            workers: number;
        }
    }

    abstract class PixbufLoader extends GObject.Object {
        static $gtype: GObject.GType<PixbufLoader>;

        // Properties

        get colour_transform(): ColourProfileTransform;
        set colour_transform(val: ColourProfileTransform);
        get colourTransform(): ColourProfileTransform;
        set colourTransform(val: ColourProfileTransform);
        get with_metadata(): boolean;
        get withMetadata(): boolean;
        get workers(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PixbufLoader.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PixbufLoader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof PixbufLoader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PixbufLoader.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PixbufLoader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PixbufLoader.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PixbufLoader.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PixbufLoader.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the colour transform that will be applied when loading
         * images
         * @returns the colour profile transform
         */
        get_colour_transform(): ColourProfileTransform | null;
        /**
         * Get the loaded metadata for `image,` if any. If this is
         * called before the 'metadata-loaded' signal is emitted
         * then it will likely return NULL.
         * @param image the camera image
         * @returns the metadata
         */
        get_metadata(image: Image): GExiv2.Metadata | null;
        /**
         * Get the loaded pixbuf for `image,` if any. If this is
         * called before the 'pixbuf-loaded' signal is emitted
         * then it will likely return NULL.
         * @param image the camera image
         * @returns the pixbuf
         */
        get_pixbuf(image: Image): GdkPixbuf.Pixbuf | null;
        /**
         * Get the number of worker threads associated with the loader
         * @returns the maximum number of worker threads
         */
        get_workers(): number;
        /**
         * Determine if the image has completed loading. Normally it is
         * better to wait for the 'pixbuf-loaded' or 'metadata-loaded'
         * signals than to use this method. The return value of this
         * method may be out of date if another thread concurrently
         * requests unload of the image
         * @param image the camera image
         * @returns a true value if the image is currently loaded
         */
        is_ready(image: Image): boolean;
        /**
         * Request that `loader` have its pixbuf and metadata loaded.
         * The loading of the data may take place asynchronously
         * and the 'pixbuf-loaded' and 'metadata-loaded' signals
         * will be emitted when completed.
         * @param image the camera image
         * @returns a true value if the image was queued for loading
         */
        load(image: Image): boolean;
        /**
         * Set the colour profile transform that will be applied when
         * loading images. This will trigger a mass-reload of all
         * existing images to update their colour profile
         * @param transform the new colour profile transform
         */
        set_colour_transform(transform: ColourProfileTransform): void;
        /**
         * Set the maximum number of worker threads for the pixbuf loader
         * @param count the new limit on workers
         */
        set_workers(count: number): void;
        /**
         * Request a mass reload of the data associated with all
         * images
         */
        trigger_reload(): void;
        /**
         * Indicate that `image` is no longer required and can have its
         * pixbuf / metadata unloaded. The unloading of the data may
         * take place asynchronously and the 'pixbuf-unloaded' and
         * 'metadata-unloaded' signals will be emitted when completed.
         * @param image the camera image
         * @returns a true value if the image was unloaded
         */
        unload(image: Image): boolean;
    }

    namespace Preferences {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::capture-continuous-preview': (pspec: GObject.ParamSpec) => void;
            'notify::capture-delete-file': (pspec: GObject.ParamSpec) => void;
            'notify::capture-electronic-shutter': (pspec: GObject.ParamSpec) => void;
            'notify::capture-filename-pattern': (pspec: GObject.ParamSpec) => void;
            'notify::capture-last-session': (pspec: GObject.ParamSpec) => void;
            'notify::capture-sync-clock': (pspec: GObject.ParamSpec) => void;
            'notify::cms-detect-system-profile': (pspec: GObject.ParamSpec) => void;
            'notify::cms-enabled': (pspec: GObject.ParamSpec) => void;
            'notify::cms-monitor-profile': (pspec: GObject.ParamSpec) => void;
            'notify::cms-rgb-profile': (pspec: GObject.ParamSpec) => void;
            'notify::img-aspect-ratio': (pspec: GObject.ParamSpec) => void;
            'notify::img-background': (pspec: GObject.ParamSpec) => void;
            'notify::img-embedded-preview': (pspec: GObject.ParamSpec) => void;
            'notify::img-flip-horizontally': (pspec: GObject.ParamSpec) => void;
            'notify::img-flip-vertically': (pspec: GObject.ParamSpec) => void;
            'notify::img-focus-point': (pspec: GObject.ParamSpec) => void;
            'notify::img-grid-lines': (pspec: GObject.ParamSpec) => void;
            'notify::img-highlight': (pspec: GObject.ParamSpec) => void;
            'notify::img-mask-enabled': (pspec: GObject.ParamSpec) => void;
            'notify::img-mask-opacity': (pspec: GObject.ParamSpec) => void;
            'notify::img-onion-layers': (pspec: GObject.ParamSpec) => void;
            'notify::img-onion-skin': (pspec: GObject.ParamSpec) => void;
            'notify::img-overexposure-highlighting': (pspec: GObject.ParamSpec) => void;
            'notify::interface-auto-connect': (pspec: GObject.ParamSpec) => void;
            'notify::interface-histogram-linear': (pspec: GObject.ParamSpec) => void;
            'notify::interface-screen-blank': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            capture_continuous_preview: boolean;
            captureContinuousPreview: boolean;
            capture_delete_file: boolean;
            captureDeleteFile: boolean;
            capture_electronic_shutter: boolean;
            captureElectronicShutter: boolean;
            capture_filename_pattern: string;
            captureFilenamePattern: string;
            capture_last_session: string;
            captureLastSession: string;
            capture_sync_clock: boolean;
            captureSyncClock: boolean;
            cms_detect_system_profile: boolean;
            cmsDetectSystemProfile: boolean;
            cms_enabled: boolean;
            cmsEnabled: boolean;
            cms_monitor_profile: ColourProfile;
            cmsMonitorProfile: ColourProfile;
            cms_rgb_profile: ColourProfile;
            cmsRgbProfile: ColourProfile;
            img_aspect_ratio: string;
            imgAspectRatio: string;
            img_background: string;
            imgBackground: string;
            img_embedded_preview: boolean;
            imgEmbeddedPreview: boolean;
            img_flip_horizontally: boolean;
            imgFlipHorizontally: boolean;
            img_flip_vertically: boolean;
            imgFlipVertically: boolean;
            img_focus_point: boolean;
            imgFocusPoint: boolean;
            img_grid_lines: number;
            imgGridLines: number;
            img_highlight: string;
            imgHighlight: string;
            img_mask_enabled: boolean;
            imgMaskEnabled: boolean;
            img_mask_opacity: number;
            imgMaskOpacity: number;
            img_onion_layers: number;
            imgOnionLayers: number;
            img_onion_skin: boolean;
            imgOnionSkin: boolean;
            img_overexposure_highlighting: boolean;
            imgOverexposureHighlighting: boolean;
            interface_auto_connect: boolean;
            interfaceAutoConnect: boolean;
            interface_histogram_linear: boolean;
            interfaceHistogramLinear: boolean;
            interface_screen_blank: boolean;
            interfaceScreenBlank: boolean;
        }
    }

    class Preferences extends GObject.Object {
        static $gtype: GObject.GType<Preferences>;

        // Properties

        get capture_continuous_preview(): boolean;
        set capture_continuous_preview(val: boolean);
        get captureContinuousPreview(): boolean;
        set captureContinuousPreview(val: boolean);
        get capture_delete_file(): boolean;
        set capture_delete_file(val: boolean);
        get captureDeleteFile(): boolean;
        set captureDeleteFile(val: boolean);
        get capture_electronic_shutter(): boolean;
        set capture_electronic_shutter(val: boolean);
        get captureElectronicShutter(): boolean;
        set captureElectronicShutter(val: boolean);
        get capture_filename_pattern(): string;
        set capture_filename_pattern(val: string);
        get captureFilenamePattern(): string;
        set captureFilenamePattern(val: string);
        get capture_last_session(): string;
        set capture_last_session(val: string);
        get captureLastSession(): string;
        set captureLastSession(val: string);
        get capture_sync_clock(): boolean;
        set capture_sync_clock(val: boolean);
        get captureSyncClock(): boolean;
        set captureSyncClock(val: boolean);
        get cms_detect_system_profile(): boolean;
        set cms_detect_system_profile(val: boolean);
        get cmsDetectSystemProfile(): boolean;
        set cmsDetectSystemProfile(val: boolean);
        get cms_enabled(): boolean;
        set cms_enabled(val: boolean);
        get cmsEnabled(): boolean;
        set cmsEnabled(val: boolean);
        get cms_monitor_profile(): ColourProfile;
        set cms_monitor_profile(val: ColourProfile);
        get cmsMonitorProfile(): ColourProfile;
        set cmsMonitorProfile(val: ColourProfile);
        get cms_rgb_profile(): ColourProfile;
        set cms_rgb_profile(val: ColourProfile);
        get cmsRgbProfile(): ColourProfile;
        set cmsRgbProfile(val: ColourProfile);
        get img_aspect_ratio(): string;
        set img_aspect_ratio(val: string);
        get imgAspectRatio(): string;
        set imgAspectRatio(val: string);
        get img_background(): string;
        set img_background(val: string);
        get imgBackground(): string;
        set imgBackground(val: string);
        get img_embedded_preview(): boolean;
        set img_embedded_preview(val: boolean);
        get imgEmbeddedPreview(): boolean;
        set imgEmbeddedPreview(val: boolean);
        get img_flip_horizontally(): boolean;
        set img_flip_horizontally(val: boolean);
        get imgFlipHorizontally(): boolean;
        set imgFlipHorizontally(val: boolean);
        get img_flip_vertically(): boolean;
        set img_flip_vertically(val: boolean);
        get imgFlipVertically(): boolean;
        set imgFlipVertically(val: boolean);
        get img_focus_point(): boolean;
        set img_focus_point(val: boolean);
        get imgFocusPoint(): boolean;
        set imgFocusPoint(val: boolean);
        get img_grid_lines(): number;
        set img_grid_lines(val: number);
        get imgGridLines(): number;
        set imgGridLines(val: number);
        get img_highlight(): string;
        set img_highlight(val: string);
        get imgHighlight(): string;
        set imgHighlight(val: string);
        get img_mask_enabled(): boolean;
        set img_mask_enabled(val: boolean);
        get imgMaskEnabled(): boolean;
        set imgMaskEnabled(val: boolean);
        get img_mask_opacity(): number;
        set img_mask_opacity(val: number);
        get imgMaskOpacity(): number;
        set imgMaskOpacity(val: number);
        get img_onion_layers(): number;
        set img_onion_layers(val: number);
        get imgOnionLayers(): number;
        set imgOnionLayers(val: number);
        get img_onion_skin(): boolean;
        set img_onion_skin(val: boolean);
        get imgOnionSkin(): boolean;
        set imgOnionSkin(val: boolean);
        get img_overexposure_highlighting(): boolean;
        set img_overexposure_highlighting(val: boolean);
        get imgOverexposureHighlighting(): boolean;
        set imgOverexposureHighlighting(val: boolean);
        get interface_auto_connect(): boolean;
        set interface_auto_connect(val: boolean);
        get interfaceAutoConnect(): boolean;
        set interfaceAutoConnect(val: boolean);
        get interface_histogram_linear(): boolean;
        set interface_histogram_linear(val: boolean);
        get interfaceHistogramLinear(): boolean;
        set interfaceHistogramLinear(val: boolean);
        get interface_screen_blank(): boolean;
        set interface_screen_blank(val: boolean);
        get interfaceScreenBlank(): boolean;
        set interfaceScreenBlank(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Preferences.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Preferences.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Preferences;

        // Signals

        connect<K extends keyof Preferences.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Preferences.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Preferences.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Preferences.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Preferences.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Preferences.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static ensure_girepository_dir(): void;
        static ensure_gsettings_dir(): void;

        // Methods

        /**
         * Determine if the preview mode will continue to operate after each
         * image is captured.
         * @returns TRUE if preview mode will continue after capture, FALSE otherwise
         */
        capture_get_continuous_preview(): boolean;
        /**
         * Determine if the file will be deleted from the camera after it
         * has been downloaded.
         * @returns TRUE if the files will be deleted after download
         */
        capture_get_delete_file(): boolean;
        /**
         * Determines if the capture event will use the next preview output as
         * capture image, instead of triggering a normal capture, with shutter
         * mechanically moving.
         * @returns TRUE if no mechanical shutter action occurs on a capture, FALSE otherwise
         */
        capture_get_electronic_shutter(): boolean;
        /**
         * Get the filename pattern to use for naming images that
         * are saved after download. In the pattern any repeated
         * sequence of 'X' characters will be replaced with the
         * image sequence number
         * @returns the filename pattern.
         */
        capture_get_filename_pattern(): string;
        /**
         * Get the most recently used directory for the
         * image session
         * @returns the session directory
         */
        capture_get_last_session(): string;
        /**
         * Determines if the camera clock will be automatically synchronized
         * to the host computer clock when first connecting
         * @returns TRUE if the clock will synchronized, FALSE otherwise
         */
        capture_get_sync_clock(): boolean;
        /**
         * If `enabled` is set to TRUE, then the preview mode will
         * continue to run after each image is captured
         * @param enabled TRUE to make preview mode continue after capture
         */
        capture_set_continuous_preview(enabled: boolean): void;
        /**
         * If `enabled` is set to TRUE, then files will be deleted from the
         * camera after they are downloaded.
         * @param enabled TRUE if files should be deleted from camera after capture
         */
        capture_set_delete_file(enabled: boolean): void;
        /**
         * If `enabled` is TRUE, then the camera shutter will not be activated
         * when capturing an image.
         * @param enabled TRUE if no mechanical shutter action should occur on capture
         */
        capture_set_electronic_shutter(enabled: boolean): void;
        /**
         * Set the pattern to use for naming images that are
         * saved after download.
         * @param pattern the filename pattern
         */
        capture_set_filename_pattern(pattern: string): void;
        /**
         * Record `dir` as being the most recently used session
         * directory
         * @param dir the new session
         */
        capture_set_last_session(dir: string): void;
        /**
         * If `enabled` is TRUE, then the camera clock will be synchronized to
         * the host computer clock when first connecting
         * @param enabled TRUE if the clock should be synchronized
         */
        capture_set_sync_clock(enabled: boolean): void;
        /**
         * Determine if the monitor profile will be automatically
         * detected, which is usually preferrable since
         * it copes with multiple monitor scenarios
         */
        cms_get_detect_system_profile(): boolean;
        /**
         * Determine if images should be displayed with colour management
         * applied
         * @returns TRUE if colour management is active
         */
        cms_get_enabled(): boolean;
        /**
         * Get the profile associated with the display, if any.
         * @returns the colour profile
         */
        cms_get_monitor_profile(): ColourProfile;
        /**
         * Determine the rendering intent for displaying images
         * @returns the image rendering intent
         */
        cms_get_rendering_intent(): ColourProfileIntent;
        /**
         * Get the colour profile that represents the RGB working space
         * @returns the colour space
         */
        cms_get_rgb_profile(): ColourProfile;
        /**
         * If `enabled` is TRUE then the monitor profile will be
         * automatically detected
         * @param enabled TRUE to automatically detect the monitor profile
         */
        cms_set_detect_system_profile(enabled: boolean): void;
        /**
         * If `enabled` is TRUE, colour management will be applied when
         * displaying images
         * @param enabled TRUE to enable colour management
         */
        cms_set_enabled(enabled: boolean): void;
        /**
         * If `prof` is not NULL, it will be used as the current monitor
         * profile. This is only honoured if automatic detection of
         * the monitor profile is disabled.
         * @param prof the new monitor profile
         */
        cms_set_monitor_profile(prof?: ColourProfile | null): void;
        /**
         * Set the rendering intent for displaying images
         * @param intent the new rendering intent
         */
        cms_set_rendering_intent(intent: ColourProfileIntent | null): void;
        /**
         * Set the colour profile that represents the RGB working space
         * @param prof the new rgb profile
         */
        cms_set_rgb_profile(prof?: ColourProfile | null): void;
        /**
         * Get the aspect ratio for any mask to apply to the image
         * @returns the aspect ratio for the mask
         */
        img_get_aspect_ratio(): string;
        /**
         * Get the colour used as the background when displaying images
         * @returns the background colour
         */
        img_get_background(): string;
        /**
         * Determine whether to use the embedded preview from files
         * for thumbnails.
         * @returns TRUE if embedded preview should be used
         */
        img_get_embedded_preview(): boolean;
        /**
         * Determine if the image display should be flipped horizontally
         * @returns TRUE if image display should be flipped horizontally
         */
        img_get_flip_horizontally(): boolean;
        /**
         * Determine if the image display should be flipped vertically
         * @returns TRUE if image display should be flipped vertically
         */
        img_get_flip_vertically(): boolean;
        /**
         * Determine if the center focus point should be displayed in
         * preview mode
         * @returns TRUE if a focus point is to be rendered
         */
        img_get_focus_point(): boolean;
        /**
         * Determine what grid lines to display in preview mode
         * @returns the grid lines to display
         */
        img_get_grid_lines(): number;
        /**
         * Get the colour to use when highlighting images
         * @returns the highlight colour
         */
        img_get_highlight(): string;
        /**
         * Determine if an aspect ratio mask to be applied to the
         * image display
         * @returns TRUE if an aspect ratio mask should be applied
         */
        img_get_mask_enabled(): boolean;
        /**
         * Get the opacity of any mask to apply to the image
         * @returns the opacity between 0 and 100
         */
        img_get_mask_opacity(): number;
        /**
         * Determine how many images to overlay in onion skinning mode
         * @returns the number of image overlays
         */
        img_get_onion_layers(): number;
        /**
         * Determine if onion skinning should be used when displaying
         * images
         * @returns TRUE if onion skinning is enabled
         */
        img_get_onion_skin(): boolean;
        /**
         * Determine if areas of overexposure should be highlighted on
         * the image display
         * @returns TRUE if overexposure should be highlighted
         */
        img_get_overexposure_highlighting(): boolean;
        /**
         * Set the aspect ratio for any mask to apply to the image
         * @param aspect the new aspect ratio
         */
        img_set_aspect_ratio(aspect: string): void;
        /**
         * Set the colour used as the background when displaying images
         * @param bkg the background colour
         */
        img_set_background(bkg: string): void;
        /**
         * If `enabled` is TRUE, any embedded preview will be used
         * when generating thumbnails rather than loading the full
         * resolution image
         * @param enabled TRUE to use the embedded preview
         */
        img_set_embedded_preview(enabled: boolean): void;
        /**
         * If `enabled` is TRUE the image display will be flipped horizontally
         * @param enabled TRUE to flip horizontally
         */
        img_set_flip_horizontally(enabled: boolean): void;
        /**
         * If `enabled` is TRUE the image display will be flipped vertically
         * @param enabled TRUE to flip vertically
         */
        img_set_flip_vertically(enabled: boolean): void;
        /**
         * If `enabled` is TRUE then a focus point will be display in
         * preview mode.
         * @param enabled TRUE to render a focus point
         */
        img_set_focus_point(enabled: boolean): void;
        /**
         * Set the grid lines to display when in image preview mode
         * @param gridLines the grid lines to display
         */
        img_set_grid_lines(gridLines: number): void;
        /**
         * Set the colour to use when highlighting images
         * @param bkg the highlight colour
         */
        img_set_highlight(bkg: string): void;
        /**
         * If `enabled` is TRUE an aspect ratio mask will be applied
         * to the image display
         * @param enabled TRUE to apply an aspect ratio mask
         */
        img_set_mask_enabled(enabled: boolean): void;
        /**
         * Set the opacity to use when rendering the image mask
         * @param opacity the opacity of the mask between 0 and 100
         */
        img_set_mask_opacity(opacity: number): void;
        /**
         * Set the number of images to overlay when in onion skinning
         * mode
         * @param layers the number of image overlays
         */
        img_set_onion_layers(layers: number): void;
        /**
         * If `enabled` is TRUE then onion skinning will be enabled
         * when displaying images
         * @param enabled TRUE to enable onion skinning
         */
        img_set_onion_skin(enabled: boolean): void;
        /**
         * If `enabled` is TRUE areas of overexposure will be highlighted on
         * the image display
         * @param enabled TRUE to highlight overeposure
         */
        img_set_overexposure_highlighting(enabled: boolean): void;
        /**
         * Add the plugin called `name` to the active list
         * @param name the plugin to add
         */
        interface_add_plugin(name: string): void;
        /**
         * Determine whether the application will attempt to automatically
         * connect to cameras at startup
         * @returns TRUE if cameras will be automatically connected, FALSE otherwise
         */
        interface_get_auto_connect(): boolean;
        /**
         * Determine if the histogram will be displayed in
         * linear or logarithmic mode
         * @returns TRUE if the histogram is linear, FALSE for logarithmic
         */
        interface_get_histogram_linear(): boolean;
        /**
         * Get the names of the plugins that are enabled for the
         * application
         * @returns the list of plugin names, NULL terminated
         */
        interface_get_plugins(): string[];
        /**
         * Determine if the screen wil be blanked prior to capturing
         * the image
         * @returns TRUE if the screen will blank at time of capture
         */
        interface_get_screen_blank(): boolean;
        /**
         * Remove the plugin called `name` from the active list
         * @param name the plugin to remove
         */
        interface_remove_plugin(name: string): void;
        interface_set_auto_connect(autoconn: boolean): void;
        /**
         * If `enabled` is TRUE then the histogram will be displayed in
         * linear mode, otherwise logarithmic mode will be used
         * @param enabled TRUE to set the histogram to linear mode
         */
        interface_set_histogram_linear(enabled: boolean): void;
        /**
         * If `blank` is set to TRUE, the screen will be blanked
         * during capture to avoid light from the screen influencing
         * the scene being shot.
         * @param blank TRUE to make the screen blank during capture
         */
        interface_set_screen_blank(blank: boolean): void;
    }

    namespace PreferencesDisplay {
        // Signal signatures
        interface SignalSignatures extends Gtk.Dialog.SignalSignatures {
            'notify::use-header-bar': (pspec: GObject.ParamSpec) => void;
            'notify::accept-focus': (pspec: GObject.ParamSpec) => void;
            'notify::application': (pspec: GObject.ParamSpec) => void;
            'notify::attached-to': (pspec: GObject.ParamSpec) => void;
            'notify::decorated': (pspec: GObject.ParamSpec) => void;
            'notify::default-height': (pspec: GObject.ParamSpec) => void;
            'notify::default-width': (pspec: GObject.ParamSpec) => void;
            'notify::deletable': (pspec: GObject.ParamSpec) => void;
            'notify::destroy-with-parent': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-map': (pspec: GObject.ParamSpec) => void;
            'notify::focus-visible': (pspec: GObject.ParamSpec) => void;
            'notify::gravity': (pspec: GObject.ParamSpec) => void;
            'notify::has-resize-grip': (pspec: GObject.ParamSpec) => void;
            'notify::has-toplevel-focus': (pspec: GObject.ParamSpec) => void;
            'notify::hide-titlebar-when-maximized': (pspec: GObject.ParamSpec) => void;
            'notify::icon': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::is-active': (pspec: GObject.ParamSpec) => void;
            'notify::is-maximized': (pspec: GObject.ParamSpec) => void;
            'notify::mnemonics-visible': (pspec: GObject.ParamSpec) => void;
            'notify::modal': (pspec: GObject.ParamSpec) => void;
            'notify::resizable': (pspec: GObject.ParamSpec) => void;
            'notify::resize-grip-visible': (pspec: GObject.ParamSpec) => void;
            'notify::role': (pspec: GObject.ParamSpec) => void;
            'notify::screen': (pspec: GObject.ParamSpec) => void;
            'notify::skip-pager-hint': (pspec: GObject.ParamSpec) => void;
            'notify::skip-taskbar-hint': (pspec: GObject.ParamSpec) => void;
            'notify::startup-id': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::transient-for': (pspec: GObject.ParamSpec) => void;
            'notify::type': (pspec: GObject.ParamSpec) => void;
            'notify::type-hint': (pspec: GObject.ParamSpec) => void;
            'notify::urgency-hint': (pspec: GObject.ParamSpec) => void;
            'notify::window-position': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Dialog.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps {}
    }

    class PreferencesDisplay extends Gtk.Dialog implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<PreferencesDisplay>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PreferencesDisplay.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PreferencesDisplay.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): PreferencesDisplay;

        // Signals

        connect<K extends keyof PreferencesDisplay.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PreferencesDisplay.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PreferencesDisplay.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PreferencesDisplay.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PreferencesDisplay.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PreferencesDisplay.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
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

    namespace Script {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::title': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            title: string;
        }
    }

    abstract class Script extends GObject.Object {
        static $gtype: GObject.GType<Script>;

        // Properties

        get title(): string;
        set title(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Script.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Script.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Script.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Script.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Script.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Script.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Script.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Script.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_execute_async(
            automata: CameraAutomata,
            cancel?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_execute_finish(result: Gio.AsyncResult): boolean;
        /**
         * Get the configuration controls for the script
         */
        vfunc_get_config_widget(): Gtk.Widget;

        // Methods

        execute_async(automata: CameraAutomata, cancel?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        execute_async(
            automata: CameraAutomata,
            cancel: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        execute_async(
            automata: CameraAutomata,
            cancel?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        execute_finish(result: Gio.AsyncResult): boolean;
        /**
         * Get the configuration controls for the script
         * @returns the config widget
         */
        get_config_widget(): Gtk.Widget;
        /**
         * Get the title of the script
         * @returns the title of the script
         */
        get_title(): string;
    }

    namespace ScriptConfig {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            'notify::baseline-position': (pspec: GObject.ParamSpec) => void;
            'notify::homogeneous': (pspec: GObject.ParamSpec) => void;
            'notify::spacing': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
            'notify::orientation': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Box.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.Orientable.ConstructorProps {}
    }

    class ScriptConfig extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<ScriptConfig>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ScriptConfig.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ScriptConfig.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ScriptConfig;

        // Signals

        connect<K extends keyof ScriptConfig.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ScriptConfig.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ScriptConfig.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ScriptConfig.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ScriptConfig.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ScriptConfig.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        add_script(script: Script): void;
        /**
         * Retrieve the script that the config is displayed for
         * @returns the script displayed
         */
        get_selected(): Script;
        has_scripts(): boolean;
        remove_script(script: Script): void;

        // Inherited properties
        /**
         * The orientation of the orientable.
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        // Inherited methods
        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the @orientable.
         */
        get_orientation(): Gtk.Orientation;
        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation | null): void;
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

    namespace ScriptSimple {
        // Signal signatures
        interface SignalSignatures extends Script.SignalSignatures {
            'notify::title': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Script.ConstructorProps {}
    }

    class ScriptSimple extends Script {
        static $gtype: GObject.GType<ScriptSimple>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ScriptSimple.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ScriptSimple.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof ScriptSimple.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ScriptSimple.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ScriptSimple.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ScriptSimple.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ScriptSimple.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ScriptSimple.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Runs the logic for the script. The implementation should
         *  use the `automata` object to perform capture/preview operations on
         *  the camera. `cancel` will indicate whether the script should be
         *  aborted early. `result` should be set when the script completes
         *  or aborts.
         * @param automata
         * @param cancel
         * @param result
         */
        vfunc_execute(automata: CameraAutomata, cancel: Gio.Cancellable | null, result: Gio.Task): void;
        /**
         * create a data object that will be associated
         *  with the #GTask passed to the `execute` method.
         */
        vfunc_init_task_data<T = GObject.Object>(): T;

        // Methods

        get_task_data<T = GObject.Object>(result: Gio.Task): T;
        init_task_data<T = GObject.Object>(): T;
        return_task_error(result: Gio.Task, message: string): void;
    }

    namespace Session {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'session-media-added': (arg0: Media) => void;
            'session-media-removed': (arg0: Media) => void;
            'notify::directory': (pspec: GObject.ParamSpec) => void;
            'notify::filename-pattern': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            directory: string;
            filename_pattern: string;
            filenamePattern: string;
        }
    }

    class Session extends GObject.Object {
        static $gtype: GObject.GType<Session>;

        // Properties

        get directory(): string;
        get filename_pattern(): string;
        get filenamePattern(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Session.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Session.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](directory: string, filenamePattern: string): Session;

        // Signals

        connect<K extends keyof Session.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Session.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Session.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Session.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Session.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Session.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Add `media` to the `session`
         * @param media the media file to add to the session
         */
        add_media(media: Media): void;
        /**
         * Get the media file at position `idx` in the session
         * @param idx index of the media file to fetch
         * @returns the media file
         */
        get_media(idx: number): Media;
        /**
         * Get the total number of media files in the session
         * @returns the file count
         */
        get_media_count(): number;
        /**
         * Load all the files present in the directory associated
         * with the session
         * @returns TRUE if the session was loaded
         */
        load(): boolean;
        /**
         * Generate a new unique filename for `file,` taking into
         * account its file extension and any previously generated
         * filename.
         * @param file the file to obtain a filename for
         * @returns the new filename
         */
        next_filename(file: CameraFile): string;
        /**
         * Remove `media` from the `session`
         * @param media the media to remove from the session
         */
        remove_media(media: Media): void;
    }

    namespace SessionBrowser {
        // Signal signatures
        interface SignalSignatures extends Gtk.DrawingArea.SignalSignatures {
            'selection-changed': () => void;
            'notify::session': (pspec: GObject.ParamSpec) => void;
            'notify::thumbnail-loader': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
            'notify::hadjustment': (pspec: GObject.ParamSpec) => void;
            'notify::hscroll-policy': (pspec: GObject.ParamSpec) => void;
            'notify::vadjustment': (pspec: GObject.ParamSpec) => void;
            'notify::vscroll-policy': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.DrawingArea.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.Scrollable.ConstructorProps {
            session: Session;
            thumbnail_loader: ThumbnailLoader;
            thumbnailLoader: ThumbnailLoader;
        }
    }

    class SessionBrowser extends Gtk.DrawingArea implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {
        static $gtype: GObject.GType<SessionBrowser>;

        // Properties

        get session(): Session;
        set session(val: Session);
        get thumbnail_loader(): ThumbnailLoader;
        set thumbnail_loader(val: ThumbnailLoader);
        get thumbnailLoader(): ThumbnailLoader;
        set thumbnailLoader(val: ThumbnailLoader);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SessionBrowser.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SessionBrowser.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SessionBrowser;

        // Signals

        connect<K extends keyof SessionBrowser.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SessionBrowser.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SessionBrowser.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SessionBrowser.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SessionBrowser.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SessionBrowser.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_background(): string;
        /**
         * Get a list of images prior to the currently selected image.
         * If `include_selected` is true, then the currently selected
         * image will be included in the returned list
         * @param include_selected true to include the current image in the list
         * @param count maximum number of images to return
         * @returns the list of images
         */
        get_earlier_images(include_selected: boolean, count: number): Image[];
        get_highlight(): string;
        /**
         * Retrieve the media displayed at the co-ordinates (`x,` `y)`
         * @param x the horizontal co-ordinate
         * @param y the vertical co-ordinate
         * @returns the media, or NULL
         */
        get_media_at_coords(x: number, y: number): Media;
        get_selected_media(): Media;
        /**
         * Get the session being displayed
         * @returns the session
         */
        get_session(): Session;
        /**
         * Get the thumbnail loader used by the session browser
         * @returns the session browser
         */
        get_thumbnail_loader(): ThumbnailLoader;
        set_background(background: string): void;
        set_highlight(highlight: string): void;
        /**
         * Set the session to be displayed
         * @param session the session to display
         */
        set_session(session: Session): void;
        /**
         * Set the thumbnail loader to use for generating image
         * thumbnails
         * @param loader the thumbnail loader to use
         */
        set_thumbnail_loader(loader: ThumbnailLoader): void;

        // Inherited properties
        /**
         * Horizontal #GtkAdjustment of the scrollable widget. This adjustment is
         * shared between the scrollable widget and its parent.
         */
        get hadjustment(): Gtk.Adjustment;
        set hadjustment(val: Gtk.Adjustment);
        /**
         * Determines whether horizontal scrolling should start once the scrollable
         * widget is allocated less than its minimum width or less than its natural width.
         */
        get hscroll_policy(): Gtk.ScrollablePolicy;
        set hscroll_policy(val: Gtk.ScrollablePolicy);
        /**
         * Determines whether horizontal scrolling should start once the scrollable
         * widget is allocated less than its minimum width or less than its natural width.
         */
        get hscrollPolicy(): Gtk.ScrollablePolicy;
        set hscrollPolicy(val: Gtk.ScrollablePolicy);
        /**
         * Verical #GtkAdjustment of the scrollable widget. This adjustment is shared
         * between the scrollable widget and its parent.
         */
        get vadjustment(): Gtk.Adjustment;
        set vadjustment(val: Gtk.Adjustment);
        /**
         * Determines whether vertical scrolling should start once the scrollable
         * widget is allocated less than its minimum height or less than its natural height.
         */
        get vscroll_policy(): Gtk.ScrollablePolicy;
        set vscroll_policy(val: Gtk.ScrollablePolicy);
        /**
         * Determines whether vertical scrolling should start once the scrollable
         * widget is allocated less than its minimum height or less than its natural height.
         */
        get vscrollPolicy(): Gtk.ScrollablePolicy;
        set vscrollPolicy(val: Gtk.ScrollablePolicy);

        // Inherited methods
        /**
         * Returns the size of a non-scrolling border around the
         * outside of the scrollable. An example for this would
         * be treeview headers. GTK+ can use this information to
         * display overlayed graphics, like the overshoot indication,
         * at the right position.
         * @returns %TRUE if @border has been set
         */
        get_border(): [boolean, Gtk.Border];
        /**
         * Retrieves the #GtkAdjustment used for horizontal scrolling.
         * @returns horizontal #GtkAdjustment.
         */
        get_hadjustment(): Gtk.Adjustment;
        /**
         * Gets the horizontal #GtkScrollablePolicy.
         * @returns The horizontal #GtkScrollablePolicy.
         */
        get_hscroll_policy(): Gtk.ScrollablePolicy;
        /**
         * Retrieves the #GtkAdjustment used for vertical scrolling.
         * @returns vertical #GtkAdjustment.
         */
        get_vadjustment(): Gtk.Adjustment;
        /**
         * Gets the vertical #GtkScrollablePolicy.
         * @returns The vertical #GtkScrollablePolicy.
         */
        get_vscroll_policy(): Gtk.ScrollablePolicy;
        /**
         * Sets the horizontal adjustment of the #GtkScrollable.
         * @param hadjustment a #GtkAdjustment
         */
        set_hadjustment(hadjustment?: Gtk.Adjustment | null): void;
        /**
         * Sets the #GtkScrollablePolicy to determine whether
         * horizontal scrolling should start below the minimum width or
         * below the natural width.
         * @param policy the horizontal #GtkScrollablePolicy
         */
        set_hscroll_policy(policy: Gtk.ScrollablePolicy | null): void;
        /**
         * Sets the vertical adjustment of the #GtkScrollable.
         * @param vadjustment a #GtkAdjustment
         */
        set_vadjustment(vadjustment?: Gtk.Adjustment | null): void;
        /**
         * Sets the #GtkScrollablePolicy to determine whether
         * vertical scrolling should start below the minimum height or
         * below the natural height.
         * @param policy the vertical #GtkScrollablePolicy
         */
        set_vscroll_policy(policy: Gtk.ScrollablePolicy | null): void;
        /**
         * Returns the size of a non-scrolling border around the
         * outside of the scrollable. An example for this would
         * be treeview headers. GTK+ can use this information to
         * display overlayed graphics, like the overshoot indication,
         * at the right position.
         */
        vfunc_get_border(): [boolean, Gtk.Border];
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

    namespace ThumbnailLoader {
        // Signal signatures
        interface SignalSignatures extends PixbufLoader.SignalSignatures {
            'notify::height': (pspec: GObject.ParamSpec) => void;
            'notify::width': (pspec: GObject.ParamSpec) => void;
            'notify::colour-transform': (pspec: GObject.ParamSpec) => void;
            'notify::with-metadata': (pspec: GObject.ParamSpec) => void;
            'notify::workers': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends PixbufLoader.ConstructorProps {
            height: number;
            width: number;
        }
    }

    class ThumbnailLoader extends PixbufLoader {
        static $gtype: GObject.GType<ThumbnailLoader>;

        // Properties

        get height(): number;
        get width(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ThumbnailLoader.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ThumbnailLoader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](width: number, height: number): ThumbnailLoader;

        // Signals

        connect<K extends keyof ThumbnailLoader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ThumbnailLoader.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ThumbnailLoader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ThumbnailLoader.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ThumbnailLoader.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ThumbnailLoader.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace Video {
        // Signal signatures
        interface SignalSignatures extends Media.SignalSignatures {
            'notify::source': (pspec: GObject.ParamSpec) => void;
            'notify::filename': (pspec: GObject.ParamSpec) => void;
            'notify::metadata': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Media.ConstructorProps {
            source: GstBase.BaseSrc;
        }
    }

    class Video extends Media {
        static $gtype: GObject.GType<Video>;

        // Properties

        get source(): GstBase.BaseSrc;
        set source(val: GstBase.BaseSrc);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Video.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Video.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_file(filename: string): Video;

        static new_source(source: GstBase.BaseSrc): Video;

        // Signals

        connect<K extends keyof Video.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Video.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Video.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Video.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Video.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Video.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the live video source element
         * @returns the video source
         */
        get_source(): GstBase.BaseSrc;
        /**
         * Set the live video source element
         * @param source the new video source or NULL
         */
        set_source(source: GstBase.BaseSrc): void;
    }

    type ApplicationClass = typeof Application;
    type CameraAutomataClass = typeof CameraAutomata;
    type CameraClass = typeof Camera;
    type CameraFileClass = typeof CameraFile;
    type CameraListClass = typeof CameraList;
    type CameraManagerClass = typeof CameraManager;
    type CameraPickerClass = typeof CameraPicker;
    type CameraPreferencesClass = typeof CameraPreferences;
    type CameraSupportClass = typeof CameraSupport;
    type ColourProfileClass = typeof ColourProfile;
    type ColourProfileTransformClass = typeof ColourProfileTransform;
    type ControlButtonClass = typeof ControlButton;
    type ControlChoiceClass = typeof ControlChoice;
    type ControlClass = typeof Control;
    type ControlDateClass = typeof ControlDate;
    type ControlGroupClass = typeof ControlGroup;
    type ControlPanelClass = typeof ControlPanel;
    type ControlRangeClass = typeof ControlRange;
    type ControlTextClass = typeof ControlText;
    type ControlToggleClass = typeof ControlToggle;
    type DeviceManagerClass = typeof DeviceManager;
    type HelpAboutClass = typeof HelpAbout;
    type ImageClass = typeof Image;
    type ImageDisplayClass = typeof ImageDisplay;
    type ImageHistogramClass = typeof ImageHistogram;
    type ImageLoaderClass = typeof ImageLoader;
    type MediaClass = typeof Media;
    type MediaPopupClass = typeof MediaPopup;
    type MediaStatusbarClass = typeof MediaStatusbar;
    type PixbufLoaderClass = typeof PixbufLoader;
    type PreferencesClass = typeof Preferences;
    type PreferencesDisplayClass = typeof PreferencesDisplay;
    type ProgressInterface = typeof Progress;
    type ScriptClass = typeof Script;
    type ScriptConfigClass = typeof ScriptConfig;
    type ScriptSimpleClass = typeof ScriptSimple;
    type SessionBrowserClass = typeof SessionBrowser;
    type SessionClass = typeof Session;
    type ThumbnailLoaderClass = typeof ThumbnailLoader;
    type VideoClass = typeof Video;
    namespace Progress {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface ProgressNamespace {
        $gtype: GObject.GType<Progress>;
        prototype: Progress;
    }
    interface Progress extends GObject.Object {
        // Methods

        start(target: number, msg: string): void;
        stop(): void;
        update(current: number): void;

        // Virtual methods

        vfunc_start(target: number, msg: string): void;
        vfunc_stop(): void;
        vfunc_update(current: number): void;
    }

    export const Progress: ProgressNamespace & {
        new (): Progress; // This allows `obj instanceof Progress`
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

export default Entangle;

// END
